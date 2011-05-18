package cms.mvcs.core.api.services.structure;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.core.api.model.vo.FieldVO;
import cms.mvcs.core.api.model.vo.TypeVO;
import cms.mvcs.core.api.services.APIService;

class RetrieveTypesService extends APIService, implements IRetrieveTypesService {
	
	private static inline var MODULE_NAME:String = "structure";
	
	public var types(default, null):Hash<TypeVO>;
	public var rootType(default, null):TypeVO;
	
	public function new() {
		super();
	}
	
	public function retrieveTypes():Void {
		super.api(MODULE_NAME, APIService.RETRIEVE);
	}
	
	override private function _parseData(data:String):Void {
		super._parseData(data);
		var typesArray:Array<TypeVO> = response;
		types = new Hash<TypeVO>();
		for (type in typesArray) types.set(type.name, type);
		rootType = typesArray[0];
	}
	
}