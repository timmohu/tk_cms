package cms.mvcs.controller;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.core.api.model.vo.ItemVO;
import cms.mvcs.core.api.model.vo.UserVO;
import cms.mvcs.core.popup.view.controllers.IPopupContainerViewController;

import cms.mvcs.core.authentication.model.AuthenticationModel;

import cms.mvcs.core.panel.model.PanelContainerModel;

import cms.mvcs.core.panel.view.controllers.IPanelContainerViewController;

import cms.mvcs.core.panel.view.mediators.PanelContainerMediator;

import cms.mvcs.modules.content.messages.AddItemEditorPanelMessage;

import cms.mvcs.modules.structure.model.TypesModel;





class StartupCommand extends CMSCommand {

	@inject public var authenticationModel:AuthenticationModel;
	@inject public var structureModel:TypesModel;
	
	override public function execute():Void {
		super.execute();
		
		authenticationModel.currentUser = new UserVO(1, "tkmaxxx", "7159e6b9604e2f68e697818c26fa180f", true);

		var popupContainerViewController:IPopupContainerViewController = injector.getClassInstance(IPopupContainerViewController);
		injector.mapMetadataInstance("popup", popupContainerViewController);
		
		var panelContainerViewController:IPanelContainerViewController = injector.getClassInstance(IPanelContainerViewController);
		var panelContainerMediator:PanelContainerMediator = cast(hub.mediatorMap.createMediator(panelContainerViewController, PanelContainerMediator), PanelContainerMediator);
		var panelContainerModel = new PanelContainerModel();
		panelContainerMediator.model = panelContainerModel;
		hub.contextView.view.appendChild(panelContainerViewController.view);

		cmsHub.onAddItemEditorPanel.dispatch(new AddItemEditorPanelMessage(panelContainerModel, structureModel.rootType.name, 0));
	}
	
}