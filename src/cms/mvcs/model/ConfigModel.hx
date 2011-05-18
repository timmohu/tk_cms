package cms.mvcs.model;

/**
 * ...
 * @author Tim Kendrick
 */

import mohu.mvcs.model.Model;

class ConfigModel extends Model {

	public var apiURL:String;
	
	public function new(apiURL:String) {
		this.apiURL = apiURL;
	}
	
}