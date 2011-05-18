package cms.mvcs.modules.content.view.components.form.dom;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.modules.content.view.components.form.IFieldEditor;

import cms.mvcs.view.components.dom.IViewComponentDOM;

import js.Dom;
import js.Lib;

import mohu.messages.Dispatcher;

class FieldEditorDOM implements IFieldEditor, implements IViewComponentDOM {

	public var name(default, setName):String;
	public var label(default, setLabel):String;
	public var disabled(default, setDisabled):Bool;
	public var parameters(default, setParameters):Hash<Dynamic>;
	public var value(default, setValue):Dynamic;
	
	public var onChanged(default, null):Dispatcher;
	
	public var domNode(default, null):HtmlDom;
	public var labelNode(default, null):HtmlDom;
	public var valueNode(default, null):HtmlDom;
	
	public function new() {
		onChanged = new Dispatcher(this);
		
		domNode = Lib.document.createElement("tr");
		domNode.className = "formField";
		
		labelNode = Lib.document.createElement("th");
		untyped labelNode.scope = "row";
		labelNode.className = "formFieldLabel";
		domNode.appendChild(labelNode);
		
		valueNode = Lib.document.createElement("td");
		valueNode.className = "formFieldValue";
		domNode.appendChild(valueNode);
	}
	
	private function setName(value:String):String {
		return name = value;
	}
	
	private function setLabel(value:String):String {
		labelNode.innerHTML = value;
		label = value;
		return label;
	}
	
	private function setDisabled(value:Bool):Bool {
		return disabled = value;
	}
	
	private function setParameters(value:Hash<Dynamic>):Hash<Dynamic> {
		return parameters = value;
	}
	
	private function setValue(value:Dynamic):Dynamic {
		if (this.value == value) return this.value;
		this.value = value;
		onChanged.dispatch();
		return value;
	}
	
}