<?php

include_once 'modules/Module.php';
include_once 'modules/users/services/UsersService.php';

class UsersModule extends Module {
	
	/**
	 * @var UsersService
	 */
	public $service;
	
	/**
	 * @param IDatabaseService $_database
	 * @param int $_user
	 */
	public function __construct($_database, $_user) {
		parent::__construct($_database, $_user);
		$this->service = new UsersService($this->database, DATABASE_TABLES_USERS);
	}
	
	/**
	 * @return array
	 */
	public function getClassMappings() {
		return array(
			"CMSUser" => "CMSUser"
		);
	}
	
	/**
	 * @param array $_path
	 * @return mixed
	 */
	public function get($_path) {
		
		$user = (isset($_path[0]) ? $_path[0] : null);
		
		return ($user == null ? $this->service->listUsers() : $this->service->getUser($user));
		
	}
	
	/**
	 * @param array $_path
	 * @param mixed $_data
	 * @return int
	 */
	public function post($_path, $_data) {
		
		$username = (isset($_data["username"]) ? $_data["username"] : null);
		$password = (isset($_data["password"]) ? md5($_data["password"]) : null);
		$admin = (isset($_data["admin"]) ? $_data["admin"] == "true" : null);
		
		if ($username == -1) throw new Exception("No username specified");
		if ($password == null) throw new Exception("No password specified");
		if ($admin == null) $admin = false;
		
		return $this->service->addUser($username, $password, $admin);
		
	}
	
	/**
	 * @param array $_path
	 * @param mixed $_data
	 */
	public function put($_path, $_data) {
		
		$user = (isset($_path[0]) ? $_path[0] : null);
		
		$username = (isset($_data["username"]) ? $_data["username"] : null);
		$password = (isset($_data["password"]) ? md5($_data["password"]) : null);
		$admin = (isset($_data["admin"]) ? $_data["admin"] == "true" : null);
				
		if ($user == null) throw new Exception("No user specified");
		
		$this->service->updateUser($username, $password, $admin);
		
	}
	
	/**
	 * @param array $_path
	 */
	public function delete($_path) {
		
		$user = (isset($_path[0]) ? $_path[0] : null);
				
		if ($user == null) throw new Exception("No user specified");
		
		throw new Exception("Method not implemented");
		
		$this->service->deleteUser($user);
	}
}

?>