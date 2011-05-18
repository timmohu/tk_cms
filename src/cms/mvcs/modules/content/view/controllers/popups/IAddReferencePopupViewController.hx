package cms.mvcs.modules.content.view.controllers.popups;
import cms.mvcs.core.api.model.vo.ReferenceVO;

import cms.mvcs.core.popup.view.controllers.IPopupViewController;

import mohu.messages.Dispatcher;

/**
 * ...
 * @author Tim Kendrick
 */

interface IAddReferencePopupViewController implements IPopupViewController {
	
	public var datatype:String;
	public var allowCreate(default, setAllowCreate):Bool;
	public var items(default, setItems):Array<ReferenceVO>;
	public var selectedItem(default, null):ReferenceVO;
	
	public var onItemSelected(default, null):Dispatcher;
	
}