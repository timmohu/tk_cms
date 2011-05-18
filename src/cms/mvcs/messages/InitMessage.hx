package cms.mvcs.messages;

/**
 * ...
 * @author Tim Kendrick
 */

import mohu.messages.Message;

class InitMessage extends Message {

	public var apiURL:String;
	
	public function new(apiURL:String) {
		super();
		
		this.apiURL = apiURL;
	}
	
	override public function clone():Message {
		return new InitMessage(apiURL);
	}
}