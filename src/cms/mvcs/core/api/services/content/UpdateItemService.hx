package cms.mvcs.core.api.services.content;
import cms.mvcs.core.api.services.APIService;
import cms.mvcs.core.api.model.vo.ItemVO;

/**
 * ...
 * @author Tim Kendrick
 */

class UpdateItemService extends APIService {
	
	public function updateItem(table:String, id:Int, item:ItemVO):Void {
		super.api("content", APIService.UPDATE, table + "/" + id + "/", encoder.encode(item));
	}
}