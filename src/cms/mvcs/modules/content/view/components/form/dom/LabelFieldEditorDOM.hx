package cms.mvcs.modules.content.view.components.form.dom;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.modules.content.view.components.form.ILabelFieldEditor;

import js.Dom;
import js.Lib;

class LabelFieldEditorDOM extends FieldEditorDOM, implements ILabelFieldEditor {
	
	public var hiddenNode(default, null):FormElement;
	public var textNode(default, null):HtmlDom;
	
	public function new() {
		super();
		
		hiddenNode = untyped Lib.document.createElement("input");
		hiddenNode.type = "hidden";
		valueNode.appendChild(hiddenNode);
		
		textNode = untyped Lib.document.createElement("div");
		valueNode.appendChild(textNode);
	}
	
	override private function setName(value:String):String {
		hiddenNode.name = value;
		return super.setName(value);
	}
	
	override private function setValue(value:Dynamic):Dynamic {
		if (this.value == value) return;
		if ((value != null) && !Std.is(value, String)) throw "Label input field value must be a String";
		hiddenNode.value = value;
		textNode.innerHTML = value;
		return super.setValue(value);
	}
}