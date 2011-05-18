<?php

class DatabaseColumn {
	
	const PRIMARY_KEY = "primary";
	const UNIQUE = "unique";
	const INDEXED = "indexed";
	const FULLTEXT = "fulltext";
	
	/**
	 * @var string
	 */
	public $name;
	
	/**
	 * @var string
	 */
	public $type;
	
	/**
	 * @var bool
	 */
	public $allowNull;
	
	/**
	 * @var string
	 */
	public $_defaultValue;
	
	/**
	 * @var string
	 */
	public $_parameters;
	
	/**
	 * @var string
	 */
	public $_index;
	
	/**
	 * @param string $_name
	 * @param string $_type
	 * @param bool $_allowNull
	 * @param string $_defaultValue
	 * @param string $_parameters
	 * @param string $_index
	 */
	function __construct($_name, $_type, $_allowNull = true, $_defaultValue = null, $_parameters = null, $_index = null) {
		$this->name = $_name;
		$this->type = $_type;
		$this->allowNull = $_allowNull;
		$this->defaultValue = $_defaultValue;
		$this->parameters = $_parameters;
		$this->index = $_index;
	}
}

?>