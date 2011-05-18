<?php

 class CMSSmartlist  {
	
 	/**
 	 * @var string
 	 */
 	public $table;

 	/**
 	 * @var string
 	 */
 	public $filter;

 	/**
 	 * @var string
 	 */
 	public $sort;
 	
 	/**
 	 * @var bool
 	 */
 	public $descending;
 	
 	/**
 	 * @var int
 	 */
 	public $offset;
 	
 	/**
 	 * @var int
 	 */
 	public $limit;
 	
 	/**
 	 * @var bool
 	 */
 	public $autoload;
 	
 	/**
 	 * @var array
 	 */
 	public $items;
 	
	/**
	 * @param string $_table
	 * @param string $_filter
	 * @param string $_sort
	 * @param bool $_descending
	 * @param int $_offset
	 * @param int $_limit
	 * @param bool $_autoload
	 * @param array $_items
	 */
	function __construct($_table = null, $_filter = null, $_sort = null, $_descending = false, $_offset = 0, $_limit = -1, $_autoload = true, $_items = null) {
		$this->table = $_table;
		$this->filter = $_filter;
		$this->sort = $_sort;
		$this->descending = $_descending;
		$this->offset = $_offset;
		$this->limit = $_limit;
		$this->autoload = $_autoload;
		$this->items = (isset($_items) ? $_items : array());
	}
}

?>