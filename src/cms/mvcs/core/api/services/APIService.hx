package cms.mvcs.core.api.services;

import cms.mvcs.model.ConfigModel;

import cms.mvcs.core.encoding.services.IEncoderService;

import cms.mvcs.core.api.services.HttpService;

/**
 * ...
 * @author Tim Kendrick
 */

class APIService extends HttpService {
	
	public static inline var RETRIEVE:String = HttpService.GET;
	public static inline var CREATE:String = HttpService.POST;
	public static inline var UPDATE:String = HttpService.PUT;
	public static inline var DELETE:String = HttpService.DELETE;
	
	@inject public var encoder:IEncoderService;
	@inject public var configModel:ConfigModel;
	
	private var response(default, null):Dynamic;

	public function new() {
		super();
	}
	
	public function api(module:String, method:String, ?path:String = "", ?parameters:Dynamic = null):Void {
		super.load(configModel.apiURL + module + "/" + path, parameters, method, encoder.contentType);
	}
	
	override private function _parseData(data:String):Void {
		var response:Dynamic = encoder.decode(data);
		if (Std.is(response, String)) throw response;
		this.response = response;
	}
	
}