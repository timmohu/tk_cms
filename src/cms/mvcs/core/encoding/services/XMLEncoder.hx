package cms.mvcs.core.encoding.services;

/**
 * ...
 * @author Tim Kendrick
 */

class XMLEncoder implements IEncoderService {

	public var contentType(getContentType, null):String;
	
	private var _decoderClassMappings:Hash<Class<Dynamic>>;
	private var _encoderClassMappings:Hash<String>;
	
	public function new(classMappings:Hash<Class<Dynamic>>) {
		_decoderClassMappings = classMappings;
		_encoderClassMappings = new Hash<String>();
		for (key in classMappings.keys()) _encoderClassMappings.set(Type.getClassName(classMappings.get(key)), key);
	}
	
	public function encode(object:Dynamic):String {
		var output:String = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
		output += _encodeElement(object);
		return output;
	}
	
	public function decode(object:String):Dynamic {
		return _decodeElement(Xml.parse(object).firstElement());
	}
	
	private function _encodeElement(element:Dynamic, ?references:Array<Dynamic> = null, ?indent:String = ""):String {
		if (references == null) references = new Array<Dynamic>();
		if (element == null) return indent + "<null/>\n";
		if (Std.is(element, Bool)) return indent + "<boolean>" + (element ? "true" : "false") + "</boolean>\n";
		if (Std.is(element, Int)) return indent + "<integer>" + element + "</integer>\n";
		if (Std.is(element, Float)) return indent + "<float>" + element + "</float>\n";
		if (Std.is(element, String)) return indent + "<string>" + StringTools.htmlEscape(element) + "</string>\n";
		
		var id:Int = references.length;
		for (index in 0...references.length) {
			if (references[index] != element) continue;
			id = index;
			break;
		}
		if (id < references.length) return indent + "<reference id=\"" + id + "\"/>\n"; else references.push(element);
		
		if (Std.is(element, Array)) {
			var values:String = "";
			for (value in cast(element, Array<Dynamic>)) values += _encodeElement(value, references.slice(0), indent + "\t");
			return indent + "<array id=\"" + id + "\">\n" + values + indent + "</array>\n";
		}
		if (Std.is(element, Hash)) {
			var values:String = "";
			var object:Hash<Dynamic> = element;
			for (key in object.keys()) values += indent + "\t" + "<" + key + ">\n" + _encodeElement(object.get(key), references.slice(0), indent + "\t\t") + indent + "\t" + "</" + key + ">\n";
			return indent + "<object id=\"" + id + "\">\n" + values + indent + "</object>\n";
		}
		if (Std.is(element, Dynamic)) {
			var values:String = "";
			var className:String = Type.getClassName(Type.getClass(element));
			for (key in Reflect.fields(element)) values += indent + "\t" + "<" + key + ">\n" + _encodeElement(Reflect.field(element, key), references.slice(0), indent + "\t\t") + indent + "\t" + "</" + key + ">\n";
			return indent + "<object id=\"" + id + "\"" + (_encoderClassMappings.exists(className) ? " class=\"" + _encoderClassMappings.get(className) + "\"" : "") + ">\n" + values + indent + "</object>\n";
		}
		return indent + "<null/>\n";
	}
	
	private function _decodeElement(element:Xml, ?references:Hash<Dynamic> = null):Dynamic {
		if (references == null) references = new Hash<Dynamic>();
		switch (element.nodeName) {
			case "null":
				return null;
			case "boolean":
				return (element.firstChild().nodeValue == "true");
			case "integer":
				return Std.parseInt(element.firstChild().nodeValue);
			case "float":
				return Std.parseFloat(element.firstChild().nodeValue);
			case "string":
				return element.firstChild().nodeValue;
			case "array":
				var array:Array<Dynamic> = new Array<Dynamic>();
				if (element.exists("id")) references.set(element.get("id"), array);
				for (child in element.elements()) array.push(_decodeElement(child));
				return array;
			case "object":
				var objectClass:Class<Dynamic> = (element.exists("class") && _decoderClassMappings.exists(element.get("class")) ? _decoderClassMappings.get(element.get("class")) : Hash);
				var object:Dynamic = Type.createInstance(objectClass, []);
				if (element.exists("id")) references.set(element.get("id"), object);
				for (key in element.elements()) if (Std.is(object, Hash)) cast(object, Hash<Dynamic>).set(key.nodeName, _decodeElement(key.firstElement())); else Reflect.setField(object, key.nodeName, _decodeElement(key.firstElement()));
				return object;
			case "reference":
				return references.get(element.get("id"));
		}
		return null;
	}
	
	private function getContentType():String {
		return "text/xml";
	}
}