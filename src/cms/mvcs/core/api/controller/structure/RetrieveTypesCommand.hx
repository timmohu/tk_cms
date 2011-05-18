package cms.mvcs.core.api.controller.structure;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.controller.CMSCommand;
import cms.mvcs.core.api.messages.structure.RetrieveTypesMessage;

import cms.mvcs.messages.ErrorMessage;

import cms.mvcs.model.ConfigModel;

import cms.mvcs.modules.structure.model.TypesModel;

import cms.mvcs.core.api.services.structure.IRetrieveTypesService;

import mohu.messages.Message;

class RetrieveTypesCommand extends CMSCommand {
	
	@inject("message") public var retrieveTypesMessage:RetrieveTypesMessage;
	
	@inject public var configModel:ConfigModel;
	
	@inject public var service:IRetrieveTypesService;
	
	override public function execute():Void {
		service.onLoadFailed.addListener(_handleLoadFailed);
		service.onLoadCompleted.addListener(_handleLoadCompleted);
		
		service.retrieveTypes();
	}
	
	private function _handleLoadFailed(message:Message):Void {
		service.onLoadFailed.removeListener(_handleLoadFailed);
		service.onLoadCompleted.removeListener(_handleLoadCompleted);
		
		cmsHub.onError.dispatch(new ErrorMessage("Failed to retrieve types: " + service.error));
		
		cmsHub.onRetrieveTypesFailed.dispatch(this.message);
	}
	
	private function _handleLoadCompleted(message:Message):Void {
		service.onLoadFailed.removeListener(_handleLoadFailed);
		service.onLoadCompleted.removeListener(_handleLoadCompleted);
		
		retrieveTypesMessage.types = service.types;
		retrieveTypesMessage.rootType = service.rootType;
		
		cmsHub.onRetrieveTypesCompleted.dispatch(retrieveTypesMessage);
	}
}