package cms.mvcs.core.api.services.content;
import cms.mvcs.core.api.model.vo.ReferenceVO;

import cms.mvcs.core.api.services.APIService;

/**
 * ...
 * @author Tim Kendrick
 */

class RetrieveItemsService extends APIService, implements IRetrieveItemsService {

	public var items(default, null):Array<ReferenceVO>;
	
	public function retrieveItems(table:String):Void {
		super.api("content", APIService.RETRIEVE, table + "/");
	}
	
	override private function _parseData(data:String):Void {
		super._parseData(data);
		items = response;
	}
}