package cms.mvcs.core.panel.controller;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.controller.CMSCommand;

import cms.mvcs.core.panel.messages.PanelContainerMessage;

import cms.mvcs.core.panel.model.PanelContainerModel;

class MovePanelCommand extends CMSCommand {

	@inject("message") public var panelContainerMessage:PanelContainerMessage;
	
	override public function execute():Void {
		super.execute();
		var panelContainerModel:PanelContainerModel = panelContainerMessage.target;
		panelContainerModel.movePanelAt(panelContainerMessage.oldIndex, panelContainerMessage.newIndex);
	}
	
}