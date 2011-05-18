package cms.mvcs.core.popup.view.controllers;
import mohu.messages.Dispatcher;
import mohu.mvcs.view.IViewController;

/**
 * ...
 * @author Tim Kendrick
 */

interface IPopupViewController implements IViewController {
	
	public var onCloseClicked(default, null):Dispatcher;
	
}