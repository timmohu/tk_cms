package cms.mvcs.core.encoding.services;

/**
 * ...
 * @author Tim Kendrick
 */

interface IEncoderService {

	public var contentType(getContentType, null):String;
	
	public function encode(object:Dynamic):String;
	public function decode(object:String):Dynamic;
	
}