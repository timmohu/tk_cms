<?php

include_once 'modules/Module.php';
include_once 'modules/content/model/CMSItem.php';
include_once 'modules/content/model/CMSReference.php';
include_once 'modules/content/model/CMSList.php';
include_once 'modules/content/model/CMSSmartlist.php';
include_once 'modules/content/services/ContentService.php';

class ContentModule extends Module {
	
	/**
	 * @var ContentService
	 */
	private $service;
	
	/**
	 * @param IDatabaseService $_database
	 * @param int $_user
	 */
	public function __construct($_database, $_user = 0) {
		parent::__construct($_database, $_user);
		$this->service = new ContentService($this->database, DATABASE_TABLES_TABLES, DATABASE_TABLES_FIELDS, DATABASE_TABLES_CONTENT_PREFIX, DATABASE_TABLES_REFERENCES, DATABASE_TABLES_USERS);
	}
	
	/**
	 * @return array
	 */
	public function getClassMappings() {
		return array(
			"CMSItem" => "CMSItem",
			"CMSReference" => "CMSReference",
			"CMSList" => "CMSList",
			"CMSSmartlist" => "CMSSmartlist"
		);
	}
	
	/**
	 * @param array
	 * @return mixed
	 */
	public function get($_path) {
		$table = (isset($_path[0]) ? $_path[0] : null);
		$item = (isset($_path[1]) ? (is_numeric($_path[1]) ? intval($_path[1]) : $_path[1]) : null);
		$children = (isset($_path[2]) && is_numeric($_path[2]) ? intval($_path[2]) : -1);
		
		if ($table == null) {
			$table = ROOT_TABLE;
			$item = ROOT_ITEM;
		}
		 
		if (!is_null($item)) {
		
			if ($table == null) throw new Exception("No table specified");
		
			return $this->service->getItem($table, $item, $children);
			
		} else {
			
			if ($table == null) throw new Exception("No table specified");
			
			return $this->service->listItems($table);
		}
	}
	
	/**
	 * @param array $_path
	 * @param CMSItem $_data
	 * @return int
	 */
	public function post($_path, $_data) {
		$table = (isset($_path[0]) ? $_path[0] : null);
		
		if ($table == -1) throw new Exception("No table specified");
		if (!($_data instanceof CMSItem)) throw new Exception("No item specified");
		
		return $this->service->addItem($this->user, $table, $_data);
	}
	
	/**
	 * @param array $_path
	 * @param CMSItem $_data
	 */
	public function put($_path, $_data) {
		$table = (isset($_path[0]) ? $_path[0] : null);
		$id = (isset($_path[1]) ? intval($_path[1]) : -1);
		
		if ($table == -1) throw new Exception("No table specified");
		if ($id == -1) throw new Exception("No ID specified");
		if (!($_data instanceof CMSItem)) throw new Exception("No item specified");
		
		$this->service->updateItem($this->user, $table, $id, $_data);
	}
	
	/**
	 * @param array $_path
	 */
	public function delete($_path) {
		$table = (isset($_path[0]) ? $_path[0] : null);
		$id = (isset($_path[1]) ? (is_numeric($_path[1]) ? intval($_path[1]) : $_path[1]) : null);
		
		if ($table == null) throw new Exception("No table specified");
		if ($id == null) throw new Exception("No ID specified");
		
		$this->service->deleteItem($table, $item);
	}
}

?>