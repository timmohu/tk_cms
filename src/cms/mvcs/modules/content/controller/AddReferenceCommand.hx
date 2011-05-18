package cms.mvcs.modules.content.controller;
import cms.mvcs.controller.CMSCommand;
import cms.mvcs.core.api.messages.content.RetrieveItemsMessage;
import mohu.messages.Message;

import cms.mvcs.core.popup.messages.PopupMessage;

import cms.mvcs.modules.content.messages.AddReferenceMessage;

import cms.mvcs.modules.content.view.controllers.popups.IAddReferencePopupViewController;


/**
 * ...
 * @author Tim Kendrick
 */

class AddReferenceCommand extends CMSCommand {

	@inject("message") public var addReferenceMessage:AddReferenceMessage;
	
	@inject public var popup:IAddReferencePopupViewController;
	
	override public function execute() {
		this.popup.datatype = addReferenceMessage.editor.datatype;
		this.popup.onCloseClicked.addListener(_handleCloseClicked);
		this.popup.onItemSelected.addListener(_handleItemSelected);
		cmsHub.onShowPopup.dispatch(new PopupMessage(this.popup));
		
		cmsHub.onRetrieveItemsFailed.addListener(_handleRetrieveItemFailed);
		cmsHub.onRetrieveItemsCompleted.addListener(_handleRetrieveItemCompleted);
		
		cmsHub.onRetrieveItems.dispatch(new RetrieveItemsMessage(addReferenceMessage.editor.datatype));
	}
	
	private function _handleRetrieveItemFailed(message:Message):Void {
		cmsHub.onRetrieveItemsFailed.removeListener(_handleRetrieveItemFailed);
		cmsHub.onRetrieveItemsCompleted.removeListener(_handleRetrieveItemCompleted);
		
		this.popup.onCloseClicked.removeListener(_handleCloseClicked);
		this.popup.onItemSelected.removeListener(_handleItemSelected);
		
		cmsHub.onHidePopup.dispatch(new PopupMessage(this.popup));
	}
	
	private function _handleRetrieveItemCompleted(message:Message):Void {
		cmsHub.onRetrieveItemsFailed.removeListener(_handleRetrieveItemFailed);
		cmsHub.onRetrieveItemsCompleted.removeListener(_handleRetrieveItemCompleted);
		
		this.popup.items = cast(message, RetrieveItemsMessage).items;
	}
	
	private function _handleCloseClicked(message:Message):Void {
		this.popup.onCloseClicked.removeListener(_handleCloseClicked);
		this.popup.onItemSelected.removeListener(_handleItemSelected);
	}
	
	private function _handleItemSelected(message:Message):Void {
		this.popup.onCloseClicked.removeListener(_handleCloseClicked);
		this.popup.onItemSelected.removeListener(_handleItemSelected);
		
		addReferenceMessage.item = this.popup.selectedItem;
		cmsHub.onHidePopup.dispatch(new PopupMessage(this.popup));
		cmsHub.onAddReferenceCompleted.dispatch(addReferenceMessage);
	}
}