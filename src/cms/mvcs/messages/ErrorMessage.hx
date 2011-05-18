package cms.mvcs.messages;

/**
 * ...
 * @author Tim Kendrick
 */

import mohu.messages.Message;

class ErrorMessage extends Message {

	public var message:String;
	
	public function new(message:String) {
		super();
		
		this.message = message;
	}
	
	override public function clone():Message {
		return new ErrorMessage(message);
	}
}