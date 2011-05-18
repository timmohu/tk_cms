package cms.mvcs.core.api.model.vo;

/**
 * ...
 * @author Tim Kendrick
 */

class UserVO {

	public var id:Int;
	public var username:String;
	public var password:String;
	public var admin:Bool;
	
	public function new(?id:Int = 0, ?username:String = "anonymous", ?password:String = null, ?admin:Bool = false) {
		this.id = id;
		this.username = username;
		this.password = password;
		this.admin = admin;
	}
	
}