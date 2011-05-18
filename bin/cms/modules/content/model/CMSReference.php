<?php

class CMSReference {
	
	/**
	 * @var string
	 */
	public $table;
	
	/**
	 * @var int
	 */
	public $id;
	
	/**
	 * @param string $_table
	 * @param int $_id
	 */
	function __construct($_table = null, $_id = -1) {
		$this->table = $_table;
		$this->id = $_id;
	}
}
?>
