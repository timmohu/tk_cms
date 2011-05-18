package cms.mvcs.core.api.services.content;

import cms.mvcs.core.api.model.vo.ItemVO;
import cms.mvcs.core.api.services.IHttpService;

/**
 * ...
 * @author Tim Kendrick
 */

interface IUpdateItemService implements IHttpService {

	public var item(default, null):ItemVO;
	
	public function updateItem(table:String, id:Int, item:ItemVO):Void;
	
}