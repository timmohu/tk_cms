<?php

include_once 'core/rest/model/RestResponse.php';

class Module {
	
	/**
	 * @var IDatabaseService
	 */
	protected $database;
	
	/**
	 * @var int
	 */
	protected $user;
	
	/**
	 * @param IDatabaseService $_database
	 * @param int $_user
	 */
	public function __construct($_database, $_user = 0) {
		$this->database = $_database;
		$this->user = $_user;
	}
	
	/**
	 * @return array
	 */
	public function getClassMappings() {
		return array();
	}
	
	/**
	 * @param string $_method
	 * @param array $_path
	 * @param mixed $_data
	 * @return mixed
	 */
	public function processRequest($_method, $_path, $_data) {
		
		switch ($_method) {
			
			case "GET":
				return $this->get($_path);
				
			case "POST":
				return $this->post($_path, $_data);
				
			case "PUT":
				$this->put($_path, $_data);
				return null;
			
			case "DELETE":
				$this->delete($_path);
				return null;
			
			default:
				throw new Exception("Invalid request");
		}
		return null;
	}
	
	/**
	 * @param array $_path
	 * @return mixed
	 */
	public function get($_path) {
		throw new Exception("Method not implemented");
		return null;
	}
	
	/**
	 * @param array $_path
	 * @param array $_data
	 * @return int
	 */
	public function post($_path, $_data) {
		throw new Exception("Method not implemented");
		return null;
	}
	
	/**
	 * @param array $_path
	 * @param array $_data
	 */
	public function put($_path, $_data) {
		throw new Exception("Method not implemented");
	}
	
	/**
	 * @param array $_path
	 */
	public function delete($_path) {
		throw new Exception("Method not implemented");
	}
}

?>