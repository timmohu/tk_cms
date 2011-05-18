<?php

 class CMSList  {
	
 	/**
 	 * @var string
 	 */
 	public $table;
 	
 	/**
 	 * @var array
 	 */
 	public $items;
 	
	function __construct($_table = null, $_items = null) {
		$this->table = $_table;
		$this->items = (isset($_items) ? $_items : array());
	}
}

?>