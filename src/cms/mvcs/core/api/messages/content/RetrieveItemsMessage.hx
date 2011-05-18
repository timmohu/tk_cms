package cms.mvcs.core.api.messages.content;
import cms.mvcs.core.api.model.vo.ReferenceVO;

import mohu.messages.Message;


/**
 * ...
 * @author Tim Kendrick
 */

class RetrieveItemsMessage extends Message {

	public var table:String;
	public var items:Array<ReferenceVO>;
	
	public function new(?table:String = null, ?items:Array<ReferenceVO> = null) {
		super();
		
		this.table = table;
		this.items = items;
	}
	
	override public function clone():Message {
		return new RetrieveItemsMessage(table, items);
	}
}