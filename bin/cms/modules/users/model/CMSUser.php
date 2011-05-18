<?php

class CMSUser {
	
	/**
	 * @var int
	 */
	public $id;
	
	/**
	 * @var username
	 */
	public $username;
	
	/**
	 * @var password
	 */
	public $password;
	
	/**
	 * @var bool
	 */
	public $admin;
	
	/**
	 * @param int $_id
	 * @param string $_username
	 * @param string $_password
	 * @param bool $_admin
	 */
	public function __construct($_id, $_username, $_password, $_admin) {
		$this->id = $_id;
		$this->username = $_username;
		$this->password = $_password;
		$this->admin = $_admin;
	}
	
	/*
	public function toXML() {
		$dom = new DOMDocument("1.0", "utf-8");
		$element = $dom->createElement("user");
		$element->setAttribute("id", intval($this->id));
		$element->appendChild($dom->createElement("username", $this->username));
		$element->appendChild($dom->createElement("password", $this->password));
		$element->appendChild($dom->createElement("admin", $this->admin ? "true" : "false"));
		return $element;
	}
	*/
}

?>