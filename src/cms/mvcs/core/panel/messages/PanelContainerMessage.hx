package cms.mvcs.core.panel.messages;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.core.panel.model.PanelContainerModel;
import cms.mvcs.core.panel.model.PanelModel;

import mohu.messages.Message;

class PanelContainerMessage extends Message {
	
	public var panelModel:PanelModel;
	public var panelContainerModel:PanelContainerModel;
	public var oldIndex:Int;
	public var newIndex:Int;

	public function new(panelContainerModel:PanelContainerModel, panelModel:PanelModel, ?oldIndex:Int = -1, ?newIndex:Int = -1) {
		super();
		this.panelContainerModel = panelContainerModel;
		this.panelModel = panelModel;
		this.oldIndex = oldIndex;
		this.newIndex = newIndex;
	}
	
	override public function clone():Message {
		return new PanelContainerMessage(panelContainerModel, panelModel, oldIndex, newIndex);
	}
	
}