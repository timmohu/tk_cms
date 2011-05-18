package cms.mvcs.modules.content.view.components.form.dom;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.modules.content.view.components.form.ITextareaFieldEditor;

import js.Dom;
import js.Lib;

class TextareaFieldEditorDOM extends FieldEditorDOM, implements ITextareaFieldEditor {
	
	public var textareaNode(default, null):Textarea;
	
	public var rows(default, setRows):Int;
	
	public function new() {
		super();
		
		textareaNode = untyped Lib.document.createElement("textarea");
		this.textareaNode.rows = 6;
		this.textareaNode.className = "textareaField";
		this.textareaNode.onchange = _handleTextChanged;
		valueNode.appendChild(this.textareaNode);
		
		/*
		var self:TextareaFieldEditorDOM = this;
		this.textareaNode.onkeydown = this.textareaNode.onkeyup = function(event:Event):Void {
			while ((self.textareaNode.scrollHeight < self.textareaNode.offsetHeight) && (self.textareaNode.rows > 2)) self.textareaNode.rows--;
			while ((self.textareaNode.scrollHeight > self.textareaNode.offsetHeight)&& (self.textareaNode.rows <= 15)) self.textareaNode.rows++;
		}
		*/
	}
	
	private function _handleTextChanged(event:Event):Void {
		this.value = textareaNode.value;
	}
	
	private function setRows(value:Int):Int {
		rows = value;
		textareaNode.rows = rows;
		return rows;
	}
	
	override private function setName(value:String):String {
		super.setName(value);
		textareaNode.name = name;
		return name;
	}
	
	override private function setDisabled(value:Bool):Bool {
		super.setDisabled(value);
		textareaNode.disabled = disabled;
		return disabled;
	}
	
	override private function setParameters(value:Hash<Dynamic>):Hash<Dynamic> {
		super.setParameters(value);
		if (parameters != null) if (parameters.exists("rows")) setRows(parameters.get("rows"));
		return parameters;
	}
	
	override private function setValue(value:Dynamic):Dynamic {
		textareaNode.value = value;
		super.setValue(value);
		return this.value;
	}
}