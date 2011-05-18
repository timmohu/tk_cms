package cms.mvcs.modules.content.view.mediators;

import cms.mvcs.core.api.messages.content.UpdateItemMessage;
import cms.mvcs.core.api.model.vo.ItemVO;
import cms.mvcs.core.panel.messages.PanelContainerMessage;
import cms.mvcs.core.panel.model.PanelContainerModel;
import cms.mvcs.core.panel.model.PanelModel;
import cms.mvcs.modules.content.messages.AddItemEditorPanelMessage;
import cms.mvcs.modules.content.messages.ItemSelectedMessage;
import cms.mvcs.modules.content.view.components.form.IItemFieldEditor;

import cms.mvcs.core.panel.view.components.IPanelButtons;

import cms.mvcs.modules.content.model.ItemEditorModel;

import cms.mvcs.modules.content.view.components.form.IFieldEditor;

import cms.mvcs.modules.content.view.controllers.panels.IItemEditorViewController;

import cms.mvcs.view.mediators.CMSMediator;

import mohu.messages.Message;






/**
 * ...
 * @author Tim Kendrick
 */

class ItemEditorMediator extends CMSMediator {

	@inject("view") public var itemEditorView:IItemEditorViewController;
	
	public var model(default, setModel):ItemEditorModel;
	
	public var panel(default, setPanel):PanelModel;
	
	private var _updating:Bool;
	
	override public function onRegister():Void {
		super.onRegister();
		
		itemEditorView.onItemSelected.addListener(_handleItemSelected);
		itemEditorView.onItemAddClicked.addListener(_handleItemAddClicked);
		itemEditorView.onItemRemoveClicked.addListener(_handleItemRemoveClicked);
	}
	
	override public function onRemove():Void {
		itemEditorView.onItemSelected.removeListener(_handleItemSelected);
		itemEditorView.onItemAddClicked.removeListener(_handleItemAddClicked);
		itemEditorView.onItemRemoveClicked.removeListener(_handleItemRemoveClicked);
		itemEditorView.fieldEditors = null;
		this.panel = null;
		this.model = null;
		
		super.onRemove();
	}
	
	private function _handleItemSelected(message:Message):Void {
		var itemSelectedMessage:ItemSelectedMessage = cast(message, ItemSelectedMessage);
		var panelIndex:Int = panel.container.getPanelIndex(panel);
		if (itemSelectedMessage.reference != null) {
			cmsHub.onAddItemEditorPanel.dispatch(new AddItemEditorPanelMessage(panel.container, itemSelectedMessage.reference.table, itemSelectedMessage.reference.id, panelIndex + 1));
		} else if (panel.container.numPanels > panelIndex + 1) {
			cmsHub.onRemovePanel.dispatch(new PanelContainerMessage(panel.container, null, panelIndex + 1));
		}
	}
	
	private function _handleItemAddClicked(message:Message):Void {
		cmsHub.onAddReferenceCompleted.addListener(_handleItemAddCompleted);
		cmsHub.onAddReferenceFailed.addListener(_handleItemAddFailed);
		cmsHub.onAddReference.dispatch(message);
	}
	
	private function _handleItemAddCompleted(message:Message):Void {
		cmsHub.onAddReferenceCompleted.removeListener(_handleItemAddCompleted);
		cmsHub.onAddReferenceFailed.removeListener(_handleItemAddFailed);
	}
	
	private function _handleItemAddFailed(message:Message):Void {
		cmsHub.onAddReferenceCompleted.removeListener(_handleItemAddCompleted);
		cmsHub.onAddReferenceFailed.removeListener(_handleItemAddFailed);
	}
	
	private function _handleItemRemoveClicked(message:Message):Void {
		cmsHub.onRemoveReferenceCompleted.removeListener(_handleItemRemoveCompleted);
		cmsHub.onRemoveReferenceFailed.removeListener(_handleItemRemoveFailed);
		cmsHub.onRemoveReference.dispatch(message);
	}
	
	private function _handleItemRemoveCompleted(message:Message):Void {
		cmsHub.onRemoveReferenceCompleted.removeListener(_handleItemRemoveCompleted);
		cmsHub.onRemoveReferenceFailed.removeListener(_handleItemRemoveFailed);
	}
	
	private function _handleItemRemoveFailed(message:Message):Void {
		cmsHub.onRemoveReferenceCompleted.removeListener(_handleItemRemoveCompleted);
		cmsHub.onRemoveReferenceFailed.removeListener(_handleItemRemoveFailed);
	}
	
	private function setModel(value:ItemEditorModel):ItemEditorModel {
		if (this.model != null) {
			this.model.onValueUpdated.removeListener(_handleModelValueUpdated);
		}
		this.model = value;
		if (this.model != null) {
			this.model.onValueUpdated.addListener(_handleModelValueUpdated);
		}
		
		var fieldEditors:Array<IFieldEditor> = new Array<IFieldEditor>();
		if (model.type.fields != null) {
			for (field in model.type.fields) {
				var fieldEditorClass:Class<Dynamic> = Type.resolveClass(field.cmsEditor);
				if (fieldEditorClass == null) throw "Field editor '" + field.cmsEditor + "' not found";
				var fieldEditor:IFieldEditor = injector.getClassInstance(fieldEditorClass);
				fieldEditor.name = field.name;
				fieldEditor.label = field.cmsLabel;
				fieldEditor.disabled = !field.cmsEditable;
				fieldEditor.parameters = field.cmsParameters;
				if (Std.is(fieldEditor, IItemFieldEditor)) cast(fieldEditor, IItemFieldEditor).datatype = field.datatype;
				fieldEditors.push(fieldEditor);
			}
		}
		itemEditorView.fieldEditors = fieldEditors;
		
		return model;
	}
	
	private function _handleModelValueUpdated(message:Message):Void {
		if (_updating) return;
		itemEditorView.value = model.value;
	}
	
	private function setPanel(value:PanelModel):PanelModel {
		if ((panel != null) && (panel.buttons != null)) {
			panel.buttons.onResetClicked.removeListener(_handleResetClicked);
			panel.buttons.onSubmitClicked.removeListener(_handleSubmitClicked);
		}
		panel = value;
		if ((panel != null) && (panel.buttons != null)) {
			panel.buttons.onResetClicked.addListener(_handleResetClicked);
			panel.buttons.onSubmitClicked.addListener(_handleSubmitClicked);
		}
		return panel;
	}
	
	private function _handleResetClicked(message:Message):Void {
		itemEditorView.value = model.value;
	}
	
	private function _handleSubmitClicked(message:Message):Void {
		cmsHub.onUpdateItemFailed.addListener(_handleUpdateItemFailed);
		cmsHub.onUpdateItemCompleted.addListener(_handleUpdateItemCompleted);
		cmsHub.onUpdateItem.dispatch(new UpdateItemMessage(new ItemVO(model.type.name, model.id, model.alias, 0, null, 0, itemEditorView.value)), model);
	}
	
	private function _handleUpdateItemFailed(message:Message):Void {
		cmsHub.onUpdateItemFailed.removeListener(_handleUpdateItemFailed);
		cmsHub.onUpdateItemCompleted.removeListener(_handleUpdateItemCompleted);
	}
	
	private function _handleUpdateItemCompleted(message:Message):Void {
		cmsHub.onUpdateItemFailed.removeListener(_handleUpdateItemFailed);
		cmsHub.onUpdateItemCompleted.removeListener(_handleUpdateItemCompleted);
		
		_updating = true;
		var updateItemMessage:UpdateItemMessage = cast(message, UpdateItemMessage);
		model.alias = updateItemMessage.item.alias;
		model.value = updateItemMessage.item.value;
		model.id = updateItemMessage.item.id;
		_updating = false;
	}
}