package cms.mvcs.core.api.controller.content;
import cms.mvcs.controller.CMSCommand;
import cms.mvcs.core.api.model.vo.ItemVO;
import cms.mvcs.core.api.model.vo.ListVO;
import cms.mvcs.core.api.model.vo.ReferenceVO;
import cms.mvcs.core.api.model.vo.SmartlistVO;
import cms.mvcs.core.api.services.content.IUpdateItemService;
import cms.mvcs.core.authentication.model.AuthenticationModel;
import cms.mvcs.core.api.messages.content.UpdateItemMessage;

/**
 * ...
 * @author Tim Kendrick
 */

import mohu.messages.Message;

import cms.mvcs.messages.ErrorMessage;

class UpdateItemCommand extends CMSCommand {

	@inject("message") public var updateItemMessage:UpdateItemMessage;
	
	@inject public var service:IUpdateItemService;
	
	@inject public var authenticationModel:AuthenticationModel;
	
	override public function execute():Void {
		var value:Hash<Dynamic> = new Hash<Dynamic>();
		for (field in updateItemMessage.item.value.keys()) {
			var fieldValue:Dynamic = updateItemMessage.item.value.get(field);
			if (Std.is(fieldValue, ReferenceVO)) {
				var reference:ReferenceVO = fieldValue;
				fieldValue = new ReferenceVO(reference.table, reference.id);
			} else if (Std.is(fieldValue, ListVO)) {
				var list:ListVO = fieldValue;
				fieldValue = new ListVO(list.table, list.items);
			} else if (Std.is(fieldValue, SmartlistVO)) {
				var smartList:SmartlistVO = fieldValue;
				fieldValue = new SmartlistVO(smartList.table, smartList.filter, smartList.sort, smartList.descending, smartList.offset, smartList.limit, smartList.autoload);
			}
			value.set(field, fieldValue);
		}
		
		service.onLoadFailed.addListener(_handleLoadFailed);
		service.onLoadCompleted.addListener(_handleLoadCompleted);
		
		service.updateItem(updateItemMessage.item.table, updateItemMessage.item.id, updateItemMessage.item);
	}
	
	private function _handleLoadFailed(message:Message):Void {
		service.onLoadFailed.removeListener(_handleLoadFailed);
		service.onLoadCompleted.removeListener(_handleLoadCompleted);
		
		cmsHub.onError.dispatch(new ErrorMessage("Failed to update item: " + service.error));
		
		cmsHub.onUpdateItemFailed.dispatch(updateItemMessage);
	}
	
	private function _handleLoadCompleted(message:Message):Void {
		service.onLoadFailed.removeListener(_handleLoadFailed);
		service.onLoadCompleted.removeListener(_handleLoadCompleted);
		
		updateItemMessage.item.author = authenticationModel.currentUser.id;
		updateItemMessage.item.username = authenticationModel.currentUser.username;
		updateItemMessage.item.date = Std.int(Date.now().getTime());
		
		cmsHub.onUpdateItemCompleted.dispatch(updateItemMessage);
	}
	
}