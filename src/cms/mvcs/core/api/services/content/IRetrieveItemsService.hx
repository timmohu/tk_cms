package cms.mvcs.core.api.services.content;

import cms.mvcs.core.api.model.vo.ReferenceVO;

import cms.mvcs.core.api.services.IHttpService;

/**
 * ...
 * @author Tim Kendrick
 */

interface IRetrieveItemsService implements IHttpService {

	public var items(default, null):Array<ReferenceVO>;
	
	public function retrieveItems(table:String):Void;
	
}