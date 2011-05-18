package cms.mvcs.core.api.model.vo;

/**
 * ...
 * @author Tim Kendrick
 */

class ListVO {

	public var table:String;
	public var items:Array<ReferenceVO>;
	
	public function new(?table:String = null, ?items:Array<ReferenceVO> = null) {
		this.table = table;
		this.items = (items != null ? items : new Array<ReferenceVO>());
	}
	
}