package cms.mvcs.core.popup.controller;
import cms.mvcs.controller.CMSCommand;
import cms.mvcs.core.popup.view.controllers.IPopupContainerViewController;
import cms.mvcs.core.popup.messages.PopupMessage;
import mohu.mvcs.controller.Command;

/**
 * ...
 * @author Tim Kendrick
 */

class ShowPopupCommand extends CMSCommand {

	@inject("message") public var popupMessage:PopupMessage;
	
	@inject("popup") public var popupContainer:IPopupContainerViewController;
	
	override public function execute() {
		popupContainer.showPopup(popupMessage.popup, popupMessage.prioritise);
	}
	
}