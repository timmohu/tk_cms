<?php

include_once 'modules/users/model/CMSUser.php';

class UsersService {
	
	/**
	 * @var IDatabaseService
	 */
	public $database;
	
	/**
	 * @var string
	 */
	public $usersTable;
	
	/**
	 * @param IDatabaseService $_database
	 * @param string $_usersTable
	 */
	public function __construct($_database, $_usersTable) {
		$this->database = $_database;
		$this->usersTable = $_usersTable;
	}
	
	/**
	 * @param CMSUser $_user
	 * @return int
	 */
	public function addUser($_user) {
		return $this->database->addRow($this->usersTable, array("username", "password", "admin"), array($_user->username, $_user->password, ($_user->admin ? 1 : 0)));
	}
	
	/**
	 * @param int $_id
	 * @return CMSUser
	 */
	public function getUser($_id) {
		$userRows = $this->database->getRows($this->usersTable, "`id` = " . $_id, array("username", "password", "admin"));
		if (count($userRows) == 0) throw new Exception("Specified user not found");
		$userRow = $userRows[0];
		return new CMSUser($_id, $userRow["username"], $userRow["password"], $userRow["admin"] == 1);
	}

	/**
	 * @return array
	 */
	public function listUsers() {
		$users = array();
		$userRows = $this->database->getRows($this->usersTable, null, array("id", "username", "password", "admin"));
		foreach ($userRows as $userRow) $users[] = new CMSUser($userRow["id"], $userRow["username"], $userRow["password"], $userRow["admin"] == 1);
		return $users;
	}
	
	/**
	 * @param int $_id
	 * @param CMSUser $_user
	 */
	public function updateUser($_id, $_user) {
		$values = array("admin" => $_user->admin ? 1 : 0);
		if ($_user->username != null) $values["username"] = $_user->username;
		if ($_user->password != null) $values["password"] = $_user->password;
		$this->database->updateRows($this->usersTable, "`id` = " . $_id, array_keys($values), array_values($values));
	}

	/**
	 * @param string $_id
	 */
	public function deleteUser($_id) {
		$this->database->deleteRows($this->usersTable, "`id` = " . $_id);
	}
}

?>