package cms.mvcs.core.api.model.vo;

import cms.mvcs.modules.content.view.components.form.IFieldEditor;

/**
 * ...
 * @author Tim Kendrick
 */

class FieldVO {

	public var name:String;
	public var type:FieldType;
	public var datatype:String;
	public var defaultValue:String;
	public var dbColumnType:String;
	public var dbColumnAllowNull:Bool;
	public var dbColumnParameters:String;
	public var dbColumnIndexed:String;
	public var cmsLabel:String;
	public var cmsEditable:Bool;
	public var cmsEditor:String;
	public var cmsParameters:Hash<Dynamic>;
	
	public function new(?name:String = null, ?type:FieldType = null, ?datatype:String = null, ?defaultValue:String = null, ?dbColumnType:String = null, ?dbColumnAllowNull:Bool = false, ?dbColumnParameters:String = null, ?dbColumnIndexed:String = null, ?cmsLabel:String = null, ?cmsEditable:Bool = false, ?cmsEditor:String = null, ?cmsParameters:Hash<Dynamic> = null) {
		this.name = name;
		this.type = type;
		this.datatype = datatype;
		this.defaultValue = defaultValue;
		this.dbColumnType = dbColumnType;
		this.dbColumnAllowNull = dbColumnAllowNull;
		this.dbColumnParameters = dbColumnParameters;
		this.dbColumnIndexed = dbColumnIndexed;
		this.cmsLabel = cmsLabel;
		this.cmsEditable = cmsEditable;
		this.cmsEditor = cmsEditor;
		this.cmsParameters = cmsParameters;
	}
	
}

enum FieldType {
	property;
	reference;
	list;
	smartlist;
}