package cms.mvcs.core.api.messages.content;
import cms.mvcs.core.api.model.vo.ItemVO;
import cms.mvcs.core.api.model.vo.TypeVO;

import mohu.messages.Message;

/**
 * ...
 * @author Tim Kendrick
 */

class UpdateItemMessage extends Message {

	public var item:ItemVO;
	
	public function new(?item:ItemVO = null) {
		super();
		
		this.item = item;
	}
	
	override public function clone():Message {
		return new UpdateItemMessage(item);
	}
}