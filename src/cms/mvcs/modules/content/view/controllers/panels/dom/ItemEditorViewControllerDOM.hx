package cms.mvcs.modules.content.view.controllers.panels.dom;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.core.api.model.vo.ReferenceVO;
import cms.mvcs.modules.content.messages.ItemSelectedMessage;
import cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM;
import cms.mvcs.modules.content.view.components.form.IItemFieldEditor;

import cms.mvcs.modules.content.view.components.form.IFieldEditor;

import cms.mvcs.modules.content.view.controllers.panels.IItemEditorViewController;

import cms.mvcs.view.controllers.dom.ViewControllerDOM;

import js.Dom;
import js.Lib;

import mohu.messages.Dispatcher;
import mohu.messages.Message;

class ItemEditorViewControllerDOM extends ViewControllerDOM, implements IItemEditorViewController {
	
	public var fieldEditors(default, setFieldEditors):Array<IFieldEditor>;
	public var value(default, setValue):Hash<Dynamic>;
	public var changed(default, null):Bool;
	public var selectedItem(default, null):ReferenceVO;
	
	public var onChanged(default, null):Dispatcher;
	public var onItemSelected(default, null):Dispatcher;
	public var onItemAddClicked(default, null):Dispatcher;
	public var onItemRemoveClicked(default, null):Dispatcher;
	
	private var _changing:Bool;
	private var _selecting:Bool;
	
	public function new() {
		onChanged = new Dispatcher(this);
		onItemSelected = new Dispatcher(this);
		onItemAddClicked = new Dispatcher(this);
		onItemRemoveClicked = new Dispatcher(this);
		
		changed = false;
		
		value = new Hash<Dynamic>();
		
		var domNode:HtmlDom = Lib.document.createElement("table");
		domNode.className = "panelFields";
		
		super(domNode);
	}
	
	private function setFieldEditors(value:Array<IFieldEditor>):Array<IFieldEditor> {
		if (fieldEditors != null) {
			for (fieldEditor in fieldEditors) {
				fieldEditor.onChanged.removeListener(_handleFieldEditorChanged);
				if (Std.is(fieldEditor, IItemFieldEditor)) {
					cast(fieldEditor, IItemFieldEditor).onItemSelected.removeListener(_handleFieldEditorItemSelected);
					cast(fieldEditor, IItemFieldEditor).onItemAddClicked.removeListener(onItemAddClicked.redispatch);
					cast(fieldEditor, IItemFieldEditor).onItemRemoveClicked.removeListener(onItemRemoveClicked.redispatch);
				}
			}
		}
		fieldEditors = value;
		while (this.domNode.hasChildNodes()) this.domNode.removeChild(this.domNode.lastChild);
		if (fieldEditors == null) return null;
		for (fieldEditor in fieldEditors) {
			if (!Std.is(fieldEditor, FieldEditorDOM)) throw "Input field for '" + fieldEditor.name + "' is not a DOM input field";
			fieldEditor.onChanged.addListener(_handleFieldEditorChanged);
			if (Std.is(fieldEditor, IItemFieldEditor)) {
				cast(fieldEditor, IItemFieldEditor).onItemSelected.addListener(_handleFieldEditorItemSelected);
				cast(fieldEditor, IItemFieldEditor).onItemAddClicked.addListener(onItemAddClicked.redispatch);
				cast(fieldEditor, IItemFieldEditor).onItemRemoveClicked.addListener(onItemRemoveClicked.redispatch);
			}
			this.domNode.appendChild(cast(fieldEditor, FieldEditorDOM).domNode);
		}
		return fieldEditors;
	}
	
	private function _handleFieldEditorChanged(message:Message):Void {
		if (_changing) return;
		changed = true;
		var fieldEditor:IFieldEditor = cast(message.currentTarget, IFieldEditor);
		value.set(fieldEditor.name, fieldEditor.value);
		onChanged.dispatch();
	}
	
	private function _handleFieldEditorItemSelected(message:Message):Void {
		if (_selecting) return;
		_selecting = true;
		for (fieldEditor in fieldEditors) if ((fieldEditor != message.currentTarget) && Std.is(fieldEditor, IItemFieldEditor)) cast(fieldEditor, IItemFieldEditor).selectedItem = null;
		selectedItem = cast(message, ItemSelectedMessage).reference;
		_selecting = false;
		onItemSelected.dispatch(message);
	}

	
	private function setValue(value:Hash<Dynamic>):Hash<Dynamic> {
		_changing = true;
		this.value = new Hash<Dynamic>();
		if (selectedItem != null) {
			selectedItem = null;
			onItemSelected.dispatch(new ItemSelectedMessage(null));
		}
		if (fieldEditors == null) return value;
		for (fieldEditor in fieldEditors) {
			var fieldName:String = fieldEditor.name;
			var fieldValue:Dynamic = (value.exists(fieldName) ? value.get(fieldName) : null);
			this.value.set(fieldName, fieldValue);
			fieldEditor.value = fieldValue;
		}
		changed = false;
		_changing = false;
		onChanged.dispatch();
		return this.value;
	}
}