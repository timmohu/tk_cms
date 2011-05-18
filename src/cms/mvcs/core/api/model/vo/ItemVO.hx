package cms.mvcs.core.api.model.vo;

/**
 * ...
 * @author Tim Kendrick
 */

class ItemVO {
	
	public var table:String;
	public var id:Int;
	public var alias:String;
	public var author:Int;
	public var username:String;
	public var date:Int;
	public var value:Hash<Dynamic>;

	public function new(table:String = null, ?id:Int = 0, ?alias:String = null, ?author:Int = 0, ?username:String = null, ?date:Int = 0, ?value:Hash<Dynamic> = null) {
		this.table = table;
		this.id = id;
		this.alias = alias;
		this.author = author;
		this.username = username;
		this.date = date;
		this.value = value;
	}
	
}