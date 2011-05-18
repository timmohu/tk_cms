<?php

class AuthenticationService {
	
	/**
	 * @var IDatabaseService
	 */
	public $database;
	
	/**
	 * @var string
	 */
	public $usersTable;
	
	/**
	 * @var int
	 */
	private $user;
	
	/**
	 * @param IDatabaseService $_database
	 * @param string $_usersTable
	 */
	public function __construct($_database, $_usersTable) {
		$this->database = $_database;
		$this->usersTable = $_usersTable;
	}
	
	/**
	 * @return int
	 */
	public function authenticate() {
		if (isset($this->user)) return $this->user;
		try {
			if (!(isset($_SERVER["PHP_AUTH_USER"]) && isset($_SERVER["PHP_AUTH_PW"]))) throw new Exception();
			$userRows = $this->database->getRows($this->usersTable, "`username` = '" . $_SERVER["PHP_AUTH_USER"] . "' AND `password` = '" . md5($_SERVER["PHP_AUTH_PW"]) . "'", array("id"));
			if (count($userRows) == 0) throw new Exception();
			$this->user = $userRows[0]["id"];
			return $this->user;
		} catch (Exception $e) {
		    header("WWW-Authenticate: Basic realm=\"CMS password restricted area\"");
		    header("HTTP/1.0 401 Unauthorized");
		    exit("Not logged in");
		}
	}
}

?>