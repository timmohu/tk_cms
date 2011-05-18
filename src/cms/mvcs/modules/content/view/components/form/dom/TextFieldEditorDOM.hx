package cms.mvcs.modules.content.view.components.form.dom;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.modules.content.view.components.form.ITextFieldEditor;

import js.Dom;
import js.Lib;

class TextFieldEditorDOM extends FieldEditorDOM, implements ITextFieldEditor {

	public var maxLength(default, setMaxLength):Int;
	
	private var textNode(default, null):Text;
	
	public function new() {
		super();
		
		textNode = untyped Lib.document.createElement("input");
		textNode.type = "text";
		textNode.className = "textField";
		textNode.onchange = _handleTextChanged;
		valueNode.appendChild(textNode);
	}
	
	private function _handleTextChanged(event:Event):Void {
		this.value = textNode.value;
	}
	
	private function setMaxLength(value:Int):Int {
		maxLength = value;
		textNode.maxLength = maxLength;
		return maxLength;
	}
	
	override private function setName(value:String):String {
		super.setName(value);
		textNode.name = name;
		return name;
	}
	
	override private function setDisabled(value:Bool):Bool {
		super.setDisabled(value);
		textNode.disabled = disabled;
		return disabled;
	}
	
	override private function setParameters(value:Hash<Dynamic>):Hash<Dynamic> {
		super.setParameters(value);
		if (parameters != null) if (parameters.exists("maxLength")) setMaxLength(parameters.get("maxLength"));
		return parameters;
	}
	
	override private function setValue(value:Dynamic):Dynamic {
		textNode.value = value;
		super.setValue(value);
		return this.value;
	}
}