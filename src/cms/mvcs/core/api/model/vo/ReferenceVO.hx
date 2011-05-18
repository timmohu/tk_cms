package cms.mvcs.core.api.model.vo;

/**
 * ...
 * @author Tim Kendrick
 */

class ReferenceVO {

	public var table:String;
	public var id:Int;
	
	public function new(?table:String = null, ?id:Int = 0) {
		this.table = table;
		this.id = id;
	}
	
}