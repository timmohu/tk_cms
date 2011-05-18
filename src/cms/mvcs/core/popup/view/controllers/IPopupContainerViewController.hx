package cms.mvcs.core.popup.view.controllers;
import mohu.messages.Dispatcher;
import mohu.mvcs.view.IViewController;

/**
 * ...
 * @author Tim Kendrick
 */

interface IPopupContainerViewController implements IViewController {

	public var currentPopup(default, null):IPopupViewController;
	public var popupQueue(getPopupQueue, null):Array<IPopupViewController>;
	
	public function showPopup(popup:IPopupViewController, ?prioritise:Bool = true):IPopupViewController;
	public function hidePopup(popup:IPopupViewController):IPopupViewController;
	
}