package cms.mvcs.core.panel.controller;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.controller.CMSCommand;
import cms.mvcs.core.panel.view.mediators.PanelContainerMediator;

import cms.mvcs.core.panel.messages.PanelContainerMessage;

import cms.mvcs.core.panel.model.PanelContainerModel;

class AddPanelCommand extends CMSCommand {

	@inject("message") public var panelContainerMessage:PanelContainerMessage;
	
	override public function execute():Void {
		if (panelContainerMessage.newIndex == -1) {
			panelContainerMessage.panelContainerModel.addPanel(panelContainerMessage.panelModel);
		} else {
			panelContainerMessage.panelContainerModel.addPanelAt(panelContainerMessage.panelModel, panelContainerMessage.newIndex);
		}
	}
	
}