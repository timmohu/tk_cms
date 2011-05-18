package cms.mvcs.core.api.services;

/**
 * ...
 * @author Tim Kendrick
 */

import mohu.messages.Dispatcher;

import mohu.mvcs.service.Service;

import mohu.net.HttpRequest;

class HttpService extends Service, implements IHttpService {

	public static inline var GET:String = "GET";
	public static inline var POST:String = "POST";
	public static inline var PUT:String = "PUT";
	public static inline var DELETE:String = "DELETE";
	
	public var data(default, null):String;
	public var error(default, null):String;
	
	public var onLoadFailed(default, null):Dispatcher;
	public var onLoadCompleted(default, null):Dispatcher;
	
	public function new() {
		onLoadFailed = new Dispatcher(this);
		onLoadCompleted = new Dispatcher(this);
	}
	
	public function load(url:String, ?parameters:Dynamic = null, ?method:String = "GET", ?contentType:String = "application/x-www-form-urlencoded"):Void {
		data = null;
		error = null;
		var request:HttpRequest = new HttpRequest(url);
		if (contentType != null) request.setHeader("Content-Type", (contentType != null ? contentType : "application/x-www-form-urlencoded"));
		if (parameters != null) {
			if (Std.is(parameters, String)) {
				request.setPostData(parameters);
			} else if (Std.is(parameters, Hash)) {
				var hash:Hash<Dynamic> = parameters;
				for (field in hash.keys()) request.setParameter(field, hash.get(field));
			} else {
				for (field in Reflect.fields(parameters)) request.setParameter(field, Reflect.field(parameters, field));
			}
		}
		request.onError = _handleLoadFailed;
		request.onData = _handleLoadCompleted;
		request.request(method);
	}
	
	private function _handleLoadFailed(error:String):Void {
		this.error = error;
		onLoadFailed.dispatch();
	}
	
	private function _handleLoadCompleted(data:String):Void {
		var success:Bool = false;
		try {
			_parseData(data);
			this.data = data;
			success = true;
		} catch (error:String) {
			this.error = error;
		}
		if (success) onLoadCompleted.dispatch(); else onLoadFailed.dispatch();
	}
	
	private function _parseData(data:String):Void {
		
	}
}