package cms.mvcs.core.api.controller.content;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.controller.CMSCommand;

import cms.mvcs.core.api.messages.content.RetrieveItemsMessage;

import cms.mvcs.core.api.services.content.IRetrieveItemsService;

import cms.mvcs.messages.ErrorMessage;

import cms.mvcs.model.ConfigModel;

import mohu.messages.Message;

class RetrieveItemsCommand extends CMSCommand {
	
	@inject("message") public var retrieveItemsMessage:RetrieveItemsMessage;
	
	@inject public var configModel:ConfigModel;
	
	@inject public var service:IRetrieveItemsService;
	
	override public function execute():Void {
		service.onLoadFailed.addListener(_handleLoadFailed);
		service.onLoadCompleted.addListener(_handleLoadCompleted);
		
		service.retrieveItems(retrieveItemsMessage.table);
	}
	
	private function _handleLoadFailed(message:Message):Void {
		service.onLoadFailed.removeListener(_handleLoadFailed);
		service.onLoadCompleted.removeListener(_handleLoadCompleted);
		
		cmsHub.onError.dispatch(new ErrorMessage("Failed to retrieve items: " + service.error));
		
		cmsHub.onRetrieveItemsFailed.dispatch(retrieveItemsMessage);
	}
	
	private function _handleLoadCompleted(message:Message):Void {
		service.onLoadFailed.removeListener(_handleLoadFailed);
		service.onLoadCompleted.removeListener(_handleLoadCompleted);
		
		retrieveItemsMessage.items = service.items;
		
		cmsHub.onRetrieveItemsCompleted.dispatch(retrieveItemsMessage);
	}
}