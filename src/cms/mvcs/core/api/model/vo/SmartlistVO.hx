package cms.mvcs.core.api.model.vo;

/**
 * ...
 * @author Tim Kendrick
 */

class SmartlistVO {

	public var table:String;
	public var filter:String;
	public var sort:String;
	public var descending:Bool;
	public var offset:Int;
	public var limit:Int;
	public var autoload:Bool;
	public var items:Array<ReferenceVO>;
	
	public function new(?table:String = null, ?filter:String = null, ?sort:String = null, ?descending:Bool = false, ?offset:Int = 0, ?limit:Int = 0, ?autoload:Bool = true, ?items:Array<ReferenceVO> = null) {
		this.table = table;
		this.filter = filter;
		this.sort = sort;
		this.descending = descending;
		this.offset = offset;
		this.limit = limit;
		this.autoload = autoload;
		this.items = (items != null ? items : new Array<ReferenceVO>());
	}
	
}