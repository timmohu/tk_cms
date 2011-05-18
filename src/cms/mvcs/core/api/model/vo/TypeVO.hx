package cms.mvcs.core.api.model.vo;

/**
 * ...
 * @author Tim Kendrick
 */

class TypeVO {

	public var name:String;
	public var title:String;
	public var help:String;
	public var label:String;
	public var fields:Array<FieldVO>;
	
	public function new(?name:String = null, ?title:String = null, ?help:String = null, ?label:String = null, ?fields:Array<FieldVO> = null) {
		this.name = name;
		this.title = title;
		this.help = help;
		this.label = label;
		this.fields = fields;
	}
	
}