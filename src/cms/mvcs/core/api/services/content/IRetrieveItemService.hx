package cms.mvcs.core.api.services.content;

import cms.mvcs.core.api.model.vo.ItemVO;
import cms.mvcs.core.api.services.IHttpService;

/**
 * ...
 * @author Tim Kendrick
 */

interface IRetrieveItemService implements IHttpService {

	public var item(default, null):ItemVO;
	
	public function retrieveItem(table:String, item:Int):Void;
	
}