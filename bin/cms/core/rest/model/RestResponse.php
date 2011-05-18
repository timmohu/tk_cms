<?php

class RestResponse {
	
	const CONTENT_TYPE_HTML = "text/html";
	const CONTENT_TYPE_XML = "text/xml";
	const CONTENT_TYPE_JSON = "application/json";
	
	const STATUS_200_OK = "200 OK";
	const STATUS_400_BAD_REQUEST = "400 Bad Request";
	const STATUS_401_UNAUTHORIZED = "401 Unauthorized";
	const STATUS_403_FORBIDDEN = "403 Forbidden";
	const STATUS_404_NOT_FOUND = "404 Not Found";
	const STATUS_405_METHOD_NOT_ALLOWED = "405 Method Not Allowed";
	const STATUS_500_INTERNAL_SERVER_ERROR = "500 Internal Server Error";
	const STATUS_501_NOT_IMPLEMENTED = "501 Not Implemented";
	const STATUS_503_SERVICE_UNAVAILABLE = "503 Service Unavailable";
	
	//const STATUS_100_CONTINUE = "100 Continue";
	//const STATUS_101_SWITCHING_PROTOCOLS = "101 Switching Protocols";  
	//const STATUS_200_OK = "200 OK";
	//const STATUS_201_CREATED = "201 Created";
	//const STATUS_202_ACCEPTED = "202 Accepted";
	//const STATUS_203_NON_AUTHORITATIVE_INFORMATION = "203 Non-Authoritative Information";
	//const STATUS_204_NO_CONTENT = "204 No Content";
	//const STATUS_205_RESET_CONTENT = "205 Reset Content";
	//const STATUS_206_PARTIAL_CONTENT = "206 Partial Content";
	//const STATUS_300_MULTIPLE_CHOICES = "300 Multiple Choices";
	//const STATUS_301_MOVED_PERMANENTLY = "301 Moved Permanently";
	//const STATUS_302_FOUND = "302 Found";
	//const STATUS_303_SEE_OTHER = "303 See Other";
	//const STATUS_304_NOT_MODIFIED = "304 Not Modified";
	//const STATUS_305_USE_PROXY = "305 Use Proxy";
	//const STATUS_305_UNUSED = "306 (Unused)";
	//const STATUS_307_TEMPORARY_REDIRECT = "307 Temporary Redirect";
	//const STATUS_400_BAD_REQUEST = "400 Bad Request";
	//const STATUS_401_UNAUTHORIZED = "401 Unauthorized";
	//const STATUS_402_PAYMENT_REQUIRED = "402 Payment Required";
	//const STATUS_403_FORBIDDEN = "403 Forbidden";
	//const STATUS_404_NOT_FOUND = "404 Not Found";
	//const STATUS_405_METHOD_NOT_ALLOWED = "405 Method Not Allowed";
	//const STATUS_406_NOT_ACCEPTABLE = "406 Not Acceptable";
	//const STATUS_407_PROXY_AUTHENTICATION_REQUIRED = "407 Proxy Authentication Required";
	//const STATUS_408_REQUEST_TIMEOUT = "408 Request Timeout";
	//const STATUS_409_CONFLICT = "409 Conflict";
	//const STATUS_410_GONE = "410 Gone";
	//const STATUS_411_LENGTH_REQUIRED = "411 Length Required";
	//const STATUS_412_PRECONDITION_FAILED = "412 Precondition Failed";
	//const STATUS_413_REQUEST_ENTITY_TOO_LARGE = "413 Request Entity Too Large";
	//const STATUS_414_REQUEST_URI_TOO_LONG = "414 Request-URI Too Long";
	//const STATUS_415_UNSUPPORTED_MEDIA_TYPE = "415 Unsupported Media Type";
	//const STATUS_416_REQUESTED_RANGE_NOT_SATISFIABLE = "416 Requested Range Not Satisfiable";
	//const STATUS_417_EXPECTATION_FAILED = "417 Expectation Failed";
	//const STATUS_500_INTERNAL_SERVER_ERROR = "500 Internal Server Error";
	//const STATUS_501_NOT_IMPLEMENTED = "501 Not Implemented";
	//const STATUS_502_BAD_GATEWAY = "502 Bad Gateway";
	//const STATUS_503_SERVICE_UNAVAILABLE = "503 Service Unavailable";
	//const STATUS_504_GATEWAY_TIMEOUT = "504 Gateway Timeout"  ;
	//const STATUS_505_HTTP_VERSION_NOT_SUPPORTED = "505 HTTP Version Not Supported";
	 
	/**
	 * @var string
	 */
	public $_status;

	/**
	 * @var string
	 */
	public $_body;

	/**
	 * @var string
	 */
	public $_contentType;
	
	/**
	 * @param int $_status
	 * @param string $_body
	 */
	function __construct($_status = "200 OK", $_body = "", $_contentType = "text/html") {
		$this->status = $_status;
		$this->body = $_body;
		$this->contentType = $_contentType;
	}
	
}

?>