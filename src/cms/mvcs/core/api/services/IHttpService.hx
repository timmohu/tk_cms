package cms.mvcs.core.api.services;

import mohu.messages.Dispatcher;

/**
 * ...
 * @author Tim Kendrick
 */

interface IHttpService {

	public var data(default, null):String;
	public var error(default, null):String;
	
	public var onLoadFailed(default, null):Dispatcher;
	public var onLoadCompleted(default, null):Dispatcher;
	
	public function load(url:String, ?parameters:Dynamic = null, ?method:String = "GET", ?contentType:String = "application/x-www-form-urlencoded"):Void;
	
}