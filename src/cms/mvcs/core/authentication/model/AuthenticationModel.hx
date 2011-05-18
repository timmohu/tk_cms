package cms.mvcs.core.authentication.model;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.core.api.model.vo.UserVO;

import mohu.messages.Dispatcher;

import mohu.mvcs.model.Model;

class AuthenticationModel extends Model {

	public var currentUser(default, setCurrentUser):UserVO;
	
	public var onCurrentUserChanged:Dispatcher;
	
	public function new(?currentUser:UserVO = null):Void {
		onCurrentUserChanged = new Dispatcher(this);
		
		this.currentUser = currentUser;
	}
	
	private function setCurrentUser(value:UserVO):UserVO {
		currentUser = value;
		onCurrentUserChanged.dispatch();
		return currentUser;
	}
}