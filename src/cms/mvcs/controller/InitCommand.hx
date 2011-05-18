package cms.mvcs.controller;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.core.api.messages.structure.RetrieveTypesMessage;
import cms.mvcs.messages.InitMessage;
import cms.mvcs.modules.structure.model.TypesModel;
import mohu.messages.Message;

import cms.mvcs.model.ConfigModel;

class InitCommand extends CMSCommand {

	@inject("message") public var initMessage:InitMessage;
	
	@inject public var configModel:ConfigModel;
	
	@inject public var structureModel:TypesModel;
	
	override public function execute():Void {
		configModel.apiURL = initMessage.apiURL;
		
		cmsHub.onRetrieveTypesFailed.addListener(_handleRetrieveTypesFailed);
		cmsHub.onRetrieveTypesCompleted.addListener(_handleRetrieveTypesCompleted);
		cmsHub.onRetrieveTypes.dispatch(new RetrieveTypesMessage());
	}
	
	private function _handleRetrieveTypesFailed(message:Message):Void {
		cmsHub.onRetrieveTypesFailed.removeListener(_handleRetrieveTypesFailed);
		cmsHub.onRetrieveTypesCompleted.removeListener(_handleRetrieveTypesCompleted);
	}
	
	private function _handleRetrieveTypesCompleted(message:Message):Void {
		cmsHub.onRetrieveTypesFailed.removeListener(_handleRetrieveTypesFailed);
		cmsHub.onRetrieveTypesCompleted.removeListener(_handleRetrieveTypesCompleted);
		
		var retrieveTypesMessage:RetrieveTypesMessage = cast(message, RetrieveTypesMessage);
		structureModel.types = retrieveTypesMessage.types;
		structureModel.rootType = retrieveTypesMessage.rootType;
		
		cmsHub.onStartup.dispatch();
	}
}