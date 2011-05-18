<?php

include 'config.php';

include_once 'core/database/services/mysql/MYSQLDatabaseService.php';
include_once 'core/encoding/services/json/JSONEncodingService.php';
include_once 'core/encoding/services/plist/PropertyListEncodingService.php';
include_once 'core/encoding/services/xml/XMLEncodingService.php';
include_once 'core/rest/model/RestResponse.php';
include_once 'core/rest/services/RestService.php';

processRequest(new MYSQLDatabaseService(mysql_connect(DATABASE_ADDRESS, DATABASE_USERNAME, DATABASE_PASSWORD), DATABASE_NAME));

function processRequest($_database) {
	
	$response = null;
	$success = false;
		
	try {

		$user = getUser();
		$module = getModule($_database, 0);
		$classMappings = $module->getClassMappings();
	
		$inputContentType = getInputContentType();
		$inputEncodingService = getEncodingService($inputContentType, $classMappings);
		
		$method = getMethod();
		$path = getPath();
		$data = getData($inputEncodingService);
		
		$response = $module->processRequest($method, $path, $data);
		$success = true;
		
	} catch (Exception $error) {
		
		$response = $error->getMessage() . "\n" . $error->getTraceAsString();
		$success = false;
		
	}
	
	$outputContentType = getOutputContentType();
	$outputEncodingService = getEncodingService($outputContentType, ($success ? $classMappings : null));
	$response = $outputEncodingService->encode($response);
	
	generateOutput($success, $response, $outputContentType);
}

function getUser() {
	return 0;
}

function getInputContentType() {
	return "text/xml";
}

function getEncodingService($_contentType, $_classMappings) {
	switch ($_contentType) {
		case "application/json":
			return new JSONEncodingService();
		case "text/plist":
			return new PropertyListEncodingService();
		case "text/xml":
			return new XMLEncodingService($_classMappings);
	}
}

function getMethod() {
	return (isset($_REQUEST["method"]) ? strtoupper($_REQUEST["method"]) : $_SERVER["REQUEST_METHOD"]);
}

function getPath() {
	$path = array_slice(explode('/', $_SERVER['PATH_INFO']), 2);
	for ($i = count($path) - 1; $i >= 0; $i--) if ($path[$i] == "") array_splice($path, $i, 1);
	return $path;
}

function getData($_encodingService) {
	$data = file_get_contents("php://input");
	return ($data ? $_encodingService->decode($data) : null);
}

function getModule($_database, $_encodingService) {
	$path = explode('/', $_SERVER['PATH_INFO']);
	$packageName = $path[1];
	$className = ucfirst($packageName) . "Module";
	$fileName = "modules/" .$packageName . "/" . $className . ".php";
	
	include_once $fileName;
	
	return new $className($_database, 0);
}

function getOutputContentType() {
	if (isset($_REQUEST["output"])) {
		switch (strtolower($_REQUEST["output"])) {
			case "json":
				return "application/json";
			case "plist":
				return "text/plist";
			case "xml":
				return "text/xml";
		}
	} else if (strpos($_SERVER['HTTP_ACCEPT'], "json")) {
		return "application/json";
	} else if (strpos($_SERVER['HTTP_ACCEPT'], "plist")) {
		return "text/plist";
	} else {
		return "text/xml";
	}
}

function generateOutput($_success, $_response, $_contentType) {
	$restService = new RestService();
	$statusCode = $_success ? RestResponse::STATUS_200_OK : RestResponse::STATUS_500_INTERNAL_SERVER_ERROR;
	$restService->sendResponse(new RestResponse($statusCode, $_response, $_contentType));
}

?>
