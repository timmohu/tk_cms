<?php

class DatabaseError extends Exception {
	
	/**
	 * @param string $_message
	 * @param int $_code
	 */
	public function __construct($_message, $_code) {
		parent::__construct($_message, $_code);
	}

}

class DatabaseErrorCode {
	
	const DATABASE_ERROR = 1;
	const DATABASE_CONNECTION_FAILED = 2;
	const DATABASE_NOT_SPECIFIED = 3;
	const DATABASE_NOT_FOUND = 4;

}

class DatabaseErrorMessage {
	
	const DATABASE_ERROR = "{ERROR}";
	const DATABASE_CONNECTION_FAILED = "Database connection failed";
	const DATABASE_NOT_SPECIFIED = "Database not specified";
	const DATABASE_NOT_FOUND = "Database not found";

}
?>