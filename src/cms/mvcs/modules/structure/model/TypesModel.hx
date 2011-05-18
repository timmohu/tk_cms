package cms.mvcs.modules.structure.model;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.core.api.model.vo.TypeVO;

import mohu.messages.Dispatcher;

import mohu.mvcs.model.Model;

class TypesModel extends Model {

	public var types(default, setTypes):Hash<TypeVO>;
	
	public var rootType:TypeVO;
	
	public var onUpdated(default, null):Dispatcher;
	
	public function new(?types:Hash<TypeVO> = null) {
		onUpdated = new Dispatcher(this);
		
		this.types = types;
	}
	
	public function getType(name:String):TypeVO {
		return types.get(name);
	}
	
	public function addType(type:TypeVO, name:String):TypeVO {
		if (types.exists(name)) throw "A type named '" + name + "' already exists in this model";
		types.set(name, type);
		onUpdated.dispatch();
		return type;
	}
	
	public function removeType(type:TypeVO):TypeVO {
		for (typeName in {iterator: types.keys}) {
			if (types.get(typeName) != type) continue;
			types.remove(typeName);
			onUpdated.dispatch();
			return type;
		}
		throw "Specified type does not exist in this model";
		return type;
	}
	
	public function setTypes(value:Hash<TypeVO>):Hash<TypeVO> {
		types = value;
		onUpdated.dispatch();
		return types;
	}
}