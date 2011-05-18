package cms.mvcs.modules.content.messages;
import cms.mvcs.core.api.model.vo.ReferenceVO;
import mohu.messages.Message;

/**
 * ...
 * @author Tim Kendrick
 */

class ItemSelectedMessage extends Message {

	public var reference:ReferenceVO;
	
	public function new(?reference:ReferenceVO = null) {
		super();
		this.reference = reference;
	}
	
	override public function clone():Message {
		return new ItemSelectedMessage(reference);
	}
}