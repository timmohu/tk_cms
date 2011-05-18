package cms.mvcs.core.api.services.content;
import cms.mvcs.core.api.services.APIService;
import cms.mvcs.core.api.model.vo.ItemVO;

/**
 * ...
 * @author Tim Kendrick
 */

class RetrieveItemService extends APIService, implements IRetrieveItemService {

	public var item(default, null):ItemVO;
	
	public function retrieveItem(table:String, item:Int):Void {
		super.api("content", APIService.RETRIEVE, table + "/" + item + "/1/");
	}
	
	override private function _parseData(data:String):Void {
		super._parseData(data);
		item = response;
	}
}