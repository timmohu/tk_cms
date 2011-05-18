package cms.mvcs.modules.content.model;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.core.api.model.vo.TypeVO;

import cms.mvcs.core.panel.model.PanelContentModel;

import mohu.messages.Dispatcher;

class ItemEditorModel extends PanelContentModel {
	
	public var type(default, setType):TypeVO;
	public var id(default, setID):Int;
	public var alias(default, setAlias):String;
	public var value(default, setValue):Hash<Dynamic>;
	
	public var onTypeUpdated(default, null):Dispatcher;
	public var onIDUpdated(default, null):Dispatcher;
	public var onAliasUpdated(default, null):Dispatcher;
	public var onValueUpdated(default, null):Dispatcher;
	
	public function new(?type:TypeVO = null, ?id:Int = 0, ?alias:String = null, ?value:Hash<Dynamic> = null) {
		super();
		
		onTypeUpdated = new Dispatcher(this);
		onIDUpdated = new Dispatcher(this);
		onAliasUpdated = new Dispatcher(this);
		onValueUpdated = new Dispatcher(this);
		
		this.type = type;
		this.id = id;
		this.alias = alias;
		this.value = value;
	}
	
	private function setType(value:TypeVO):TypeVO {
		if (type == value) return type;
		type = value;
		onTypeUpdated.dispatch();
		return type;
	}
	
	private function setID(value:Int):Int {
		if (id == value) return id;
		id = value;
		onIDUpdated.dispatch();
		return id;
	}
	
	private function setAlias(value:String):String {
		if (alias == value) return value;
		alias = value;
		onAliasUpdated.dispatch();
		return alias;
	}
	
	private function setValue(value:Hash<Dynamic>):Hash<Dynamic> {
		this.value = value;
		onValueUpdated.dispatch();
		return this.value;
	}
	
}