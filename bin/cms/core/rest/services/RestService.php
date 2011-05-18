<?php

class RestService {
	

	function __construct() {
	
	}
	
	/**
	 * @param RestResponse $response
	 */
	public function sendResponse($response) {  
		header($response->status);
		if ($response->body) {
			header("Content-type: " . $response->contentType);
			echo($response->body);
		} else {
			header("Content-type: " . CONTENT_TYPE_HTML);
			echo("<!DOCTYPE HTML PUBLIC \"-//IETF//DTD HTML 2.0//EN\">\n<html><head>\n<title>" . $response->status . "</title>\n</head><body>\n<h1>" . $response->status . "</h1>\n</body></html>");
		}
		exit();
	}  
}

?>