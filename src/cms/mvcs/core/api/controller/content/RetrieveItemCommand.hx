package cms.mvcs.core.api.controller.content;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.controller.CMSCommand;
import cms.mvcs.core.api.messages.content.RetrieveItemMessage;

import cms.mvcs.messages.ErrorMessage;

import cms.mvcs.model.ConfigModel;

import mohu.messages.Message;



import cms.mvcs.core.api.services.content.IRetrieveItemService;


class RetrieveItemCommand extends CMSCommand {
	
	@inject("message") public var retrieveItemMessage:RetrieveItemMessage;
	
	@inject public var configModel:ConfigModel;
	
	@inject public var service:IRetrieveItemService;
	
	override public function execute():Void {
		service.onLoadFailed.addListener(_handleLoadFailed);
		service.onLoadCompleted.addListener(_handleLoadCompleted);
		
		service.retrieveItem(retrieveItemMessage.item.table, retrieveItemMessage.item.id);
	}
	
	private function _handleLoadFailed(message:Message):Void {
		service.onLoadFailed.removeListener(_handleLoadFailed);
		service.onLoadCompleted.removeListener(_handleLoadCompleted);
		
		cmsHub.onError.dispatch(new ErrorMessage("Failed to retrieve item: " + service.error));
		
		cmsHub.onRetrieveItemFailed.dispatch(retrieveItemMessage);
	}
	
	private function _handleLoadCompleted(message:Message):Void {
		service.onLoadFailed.removeListener(_handleLoadFailed);
		service.onLoadCompleted.removeListener(_handleLoadCompleted);
		
		retrieveItemMessage.item.table = service.item.table;
		retrieveItemMessage.item.id = service.item.id;
		retrieveItemMessage.item.alias = service.item.alias;
		retrieveItemMessage.item.author = service.item.author;
		retrieveItemMessage.item.username = service.item.username;
		retrieveItemMessage.item.date = service.item.date;
		retrieveItemMessage.item.value = service.item.value;
		
		cmsHub.onRetrieveItemCompleted.dispatch(retrieveItemMessage);
	}
}