package cms.mvcs.core.api.messages.structure;
import cms.mvcs.core.api.model.vo.TypeVO;
import mohu.messages.Message;

/**
 * ...
 * @author Tim Kendrick
 */

class RetrieveTypesMessage extends Message {

	public var types:Hash<TypeVO>;
	public var rootType:TypeVO;
	
	public function new(?types:Hash<TypeVO> = null, ?rootType:TypeVO = null) {
		super();
		
		this.types = types;
		this.rootType = rootType;
	}
	
	override public function clone():Message {
		return new RetrieveTypesMessage(types, rootType);
	}
}