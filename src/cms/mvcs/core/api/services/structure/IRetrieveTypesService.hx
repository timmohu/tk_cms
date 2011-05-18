package cms.mvcs.core.api.services.structure;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.core.api.model.vo.TypeVO;
import cms.mvcs.core.api.services.IHttpService;

interface IRetrieveTypesService implements IHttpService {
	
	public var types(default, null):Hash<TypeVO>;
	public var rootType(default, null):TypeVO;
	
	public function retrieveTypes():Void;
	
}