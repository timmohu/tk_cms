package cms.mvcs.modules.content.messages;
import cms.mvcs.core.panel.model.PanelContainerModel;
import mohu.messages.Message;

/**
 * ...
 * @author Tim Kendrick
 */

class AddItemEditorPanelMessage extends Message {

	public var panelContainer:PanelContainerModel;
	public var table:String;
	public var id:Int;
	public var index:Int;
	
	public function new(?panelContainer:PanelContainerModel = null, ?table:String = null, ?id:Int = 0, ?index:Int = -1) {
		super();
		
		this.panelContainer = panelContainer;
		this.table = table;
		this.id = id;
		this.index = index;
	}
	
	override public function clone():Message {
		return new AddItemEditorPanelMessage(panelContainer, table, id, index);
	}
}