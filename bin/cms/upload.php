<?php

include "config.php";

try {
	$field_name = UPLOAD_FIELD_NAME;
	if (!isset($_FILES[$field_name])) throw new Exception("No upload specified");
	$response = processUpload($_FILES[$field_name]["tmp_name"], str_replace("/", "-", $_FILES[$field_name]["name"]), UPLOAD_DIR);
	exit($response);
} catch (Exception $e) {
	header("HTTP/1.1 400 Bad Request");
	exit($e->getMessage());
}

function processUpload($_file, $_filename, $_uploadDir) {
	$extension = substr($_filename, strrpos($_filename, "."));
	$filename = $_uploadDir . time() . dechex(rand()) . $extension;
	if (!move_uploaded_file($_file, $filename)) throw new Exception("Unable to move uploaded file");
	$absoluteFilename = realpath($filename);
	$siteRoot = $_SERVER["DOCUMENT_ROOT"] . DIRECTORY_SEPARATOR;
	if (strpos($absoluteFilename, $siteRoot) === 0) $filename = "/" . substr($absoluteFilename, strlen($siteRoot));
	return str_replace("\\", "/", $filename);
}

?>