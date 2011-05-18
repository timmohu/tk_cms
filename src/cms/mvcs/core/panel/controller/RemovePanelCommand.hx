package cms.mvcs.core.panel.controller;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.controller.CMSCommand;

import cms.mvcs.core.panel.messages.PanelContainerMessage;

import cms.mvcs.core.panel.model.PanelContainerModel;

class RemovePanelCommand extends CMSCommand {

	@inject("message") public var panelContainerMessage:PanelContainerMessage;
	
	override public function execute():Void {
		super.execute();
		if (panelContainerMessage.panelModel != null) {
			panelContainerMessage.panelContainerModel.removePanel(panelContainerMessage.panelModel);
		} else {
			panelContainerMessage.panelContainerModel.removePanelAt(panelContainerMessage.oldIndex);
		}
	}
	
}