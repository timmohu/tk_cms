package cms.mvcs.modules.content.view.components.form.dom;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.modules.content.view.components.form.IHiddenFieldEditor;

import js.Lib;
import js.Dom;

class HiddenFieldEditorDOM extends FieldEditorDOM, implements IHiddenFieldEditor {
	
	public var hiddenNode(default, null):FormElement;
	
	public function new() {
		super();
		
		hiddenNode = untyped Lib.document.createElement("input");
		hiddenNode.type = "hidden";
		valueNode.appendChild(hiddenNode);
	}
	
	override private function setName(value:String):String {
		hiddenNode.name = value;
		return super.setName(value);
	}
	
	override private function setValue(value:Dynamic):Dynamic {
		if (this.value == value) return;
		hiddenNode.value = value.toString();
		return super.setValue(value);
	}
}