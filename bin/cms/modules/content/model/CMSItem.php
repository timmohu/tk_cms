<?php

class CMSItem {
	
	/**
	 * @var string
	 */
	public $table;
	
	/**
	 * @var int
	 */
	public $id;
	
	/**
	 * @var string
	 */
	public $alias;
	
	/**
	 * @var int
	 */
	public $author;
	
	/**
	 * @var string
	 */
	public $username;
	
	/**
	 * @var int
	 */
	public $date;
	
	/**
	 * @var array
	 */
	public $value;
	
	/**
	 * @param string $_table
	 * @param int $_id
	 * @param string $_alias
	 * @param int $_author
	 * @param string $_username
	 * @param int $_date
	 * @param array $_value
	 */
	function __construct($_table = null, $_id = -1, $_alias = null, $_author = 0, $_username = null, $_date = 0, $_value = null) {
		$this->table = $_table;
		$this->id = $_id;
		$this->alias = $_alias;
		$this->author = $_author;
		$this->username = $_username;
		$this->date = $_date;
		$this->value = $_value;
	}
}
?>
