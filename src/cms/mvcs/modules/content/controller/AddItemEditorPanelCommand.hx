package cms.mvcs.modules.content.controller;

/**
 * ...
 * @author Tim Kendrick
 */
import cms.mvcs.controller.CMSCommand;

import cms.mvcs.core.api.messages.content.RetrieveItemMessage;

import cms.mvcs.core.api.model.vo.ItemVO;

import cms.mvcs.core.panel.messages.PanelContainerMessage;

import cms.mvcs.core.panel.model.PanelContainerModel;
import cms.mvcs.core.panel.model.PanelModel;

import cms.mvcs.core.panel.view.components.IPanelButtons;

import cms.mvcs.modules.content.messages.AddItemEditorPanelMessage;

import cms.mvcs.modules.content.model.ItemEditorModel;

import cms.mvcs.modules.content.view.controllers.panels.IItemEditorViewController;

import cms.mvcs.modules.content.view.mediators.ItemEditorMediator;

import cms.mvcs.modules.structure.model.TypesModel;

import mohu.messages.Message;

class AddItemEditorPanelCommand extends CMSCommand {

	@inject("message") public var addItemEditorPanelMessage:AddItemEditorPanelMessage;
	
	@inject public var structureModel:TypesModel;
	
	private var _itemEditorModel:ItemEditorModel;
	private var _panelModel:PanelModel;
	
	override public function execute():Void {
		
		var itemEditorModel:ItemEditorModel = new ItemEditorModel(structureModel.getType(addItemEditorPanelMessage.table), addItemEditorPanelMessage.id);
		var itemEditorViewController:IItemEditorViewController = injector.getClassInstance(IItemEditorViewController);
		var itemEditorMediator:ItemEditorMediator = cast(cmsHub.mediatorMap.createMediator(itemEditorViewController, ItemEditorMediator), ItemEditorMediator);
		var buttons:IPanelButtons = injector.getClassInstance(IPanelButtons);
		var panelModel:PanelModel = new PanelModel(itemEditorModel.type.title, itemEditorModel.type.help, itemEditorViewController, buttons);
		
		itemEditorMediator.panel = panelModel;
		itemEditorMediator.model = itemEditorModel;
		
		_itemEditorModel = itemEditorModel;
		_panelModel = panelModel;
		
		var panelContainer:PanelContainerModel = addItemEditorPanelMessage.panelContainer;
		var panelIndex:Int = addItemEditorPanelMessage.index;
		if (panelIndex > -1) while (panelContainer.numPanels > panelIndex) cmsHub.onRemovePanel.dispatch(new PanelContainerMessage(panelContainer, null, panelContainer.numPanels - 1));
		
		cmsHub.onAddPanel.dispatch(new PanelContainerMessage(panelContainer, panelModel, -1, panelIndex));
		
		cmsHub.onRetrieveItemFailed.addListener(_handleRetrieveItemFailed);
		cmsHub.onRetrieveItemCompleted.addListener(_handleRetrieveItemCompleted);
		
		cmsHub.onRetrieveItem.dispatch(new RetrieveItemMessage(new ItemVO(addItemEditorPanelMessage.table, addItemEditorPanelMessage.id)), itemEditorModel);
	}
	
	private function _handleRetrieveItemFailed(message:Message):Void {
		cmsHub.onRetrieveItemFailed.removeListener(_handleRetrieveItemFailed);
		cmsHub.onRetrieveItemCompleted.removeListener(_handleRetrieveItemCompleted);
		
		cmsHub.onRemovePanel.dispatch(new PanelContainerMessage(addItemEditorPanelMessage.panelContainer, _panelModel));
	}
	
	private function _handleRetrieveItemCompleted(message:Message):Void {
		cmsHub.onRetrieveItemFailed.removeListener(_handleRetrieveItemFailed);
		cmsHub.onRetrieveItemCompleted.removeListener(_handleRetrieveItemCompleted);
		
		var retrieveItemMessage:RetrieveItemMessage = cast(message, RetrieveItemMessage);
		_itemEditorModel.id = retrieveItemMessage.item.id;
		_itemEditorModel.alias = retrieveItemMessage.item.alias;
		_itemEditorModel.value = retrieveItemMessage.item.value;
	}
}