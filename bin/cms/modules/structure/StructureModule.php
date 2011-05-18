<?php

include_once 'modules/Module.php';
include_once 'modules/structure/model/CMSField.php';
include_once 'modules/structure/model/CMSTable.php';
include_once 'modules/structure/services/StructureService.php';

class StructureModule extends Module {
	
	/**
	 * @var StructureService
	 */
	private $service;
	
	/**
	 * @param IDatabaseService $_database
	 * @param int $_user
	 */
	public function __construct($_database, $_user = 0) {
		parent::__construct($_database, $_user);
		$this->service = new StructureService($this->database, DATABASE_TABLES_TABLES, DATABASE_TABLES_FIELDS, DATABASE_TABLES_CONTENT_PREFIX);
	}
	
	/**
	 * @return array
	 */
	public function getClassMappings() {
		return array(
			"CMSTable" => "CMSTable",
			"CMSField" => "CMSField"
		);
	}
	
	/**
	 * @param array $_path
	 * @return mixed
	 */
	public function get($_path) {
		
		$table = (isset($_path[0]) ? $_path[0] : null);
		$field = (isset($_path[1]) ? $_path[1] : null);
		
		if ($table == null) {
			
			return $this->service->listTables();
			
		} else if ($field == null) {
			
			return $this->service->getTable($table);
			
		} else {
			
			return $this->service->getField($table, $field);
			
		}
		
	}
	
	/**
	 * @param array $_path
	 * @param mixed $_data
	 * @return int
	 */
	public function post($_path, $_data) {
		
		$table = (isset($_path[0]) ? $_path[0] : null);
		
		if ($table == null) {
			
			$name = isset($_data["name"]) ? $_data["name"] : null;
			$title = isset($_data["title"]) ? $_data["title"] : null;
			$help = isset($_data["help"]) ? $_data["help"] : null;
			$label = isset($_data["label"]) ? $_data["label"] : null;
		
			return $this->service->addTable(new CMSTable($name, $title, $help, $label));
			
		} else {
		
			$name = (isset($_data["name"]) ? $_data["name"] : null);
			$type = (isset($_data["type"]) ? $_data["type"] : null);
			$datatype = (isset($_data["datatype"]) ? intval($_data["datatype"]) : -1);
			$defaultValue = (isset($_data["default_value"]) ? intval($_data["default_value"]) : null);
			$dbColumnType = (isset($_data["db_column_type"]) ? $_data["db_column_type"] : null);
			$dbColumnAllowNull = (isset($_data["db_column_allow_null"]) ? $_data["db_column_allow_null"] : true);
			$dbColumnParameters = (isset($_data["db_column_parameters"]) ? $_data["db_column_parameters"] : null);
			$dbColumnIndexed = (isset($_data["db_column_indexed"]) ? $_data["db_column_indexed"] : null);
			$cmsLabel = (isset($_data["cms_label"]) ? $_data["cms_label"] : null);
			$cmsEditable = (isset($_data["cms_editable"]) ? $_data["cms_editable"] == "true" : false);
			$cmsEditor = (isset($_data["cms_editor"]) ? $_data["cms_editor"] : null);
			$cmsParameters = (isset($_data["cms_parameters"]) ? $_data["cms_parameters"] : null);
			
			if ($name == null) throw new Exception("No name specified");
			if ($type == null) throw new Exception("No type specified");
			if ($datatype == -1) throw new Exception("No datatype specified");
			if ($dbColumnType == null) throw new Exception("No columntype specified");
			
			return $this->service->addField($table, new CMSField($name, $type, $datatype, $defaultValue, $dbColumnType, $dbColumnAllowNull, $dbColumnParameters, $dbColumnIndexed, $cmsLabel, $cmsEditable, $cmsEditor, $cmsParameters));
			
		}
	}
	
	/**
	 * @param array $_path
	 * @param mixed $_data
	 */
	public function put($_path, $_data) {

		$table = (isset($_path[0]) ? $_path[0] : null);
		$field = (isset($_path[1]) ? $_path[1] : null);
		
		if ($table == null) {
		
			throw new Exception("No table specified");
			
		} else if ($field == null) {
		
			$name = isset($_data["name"]) ? $_data["name"] : null;
			$title = isset($_data["title"]) ? $_data["title"] : null;
			$help = isset($_data["help"]) ? $_data["help"] : null;
			$label = isset($_data["label"]) ? $_data["label"] : null;
		
			$this->service->updateTable($table, new CMSTable($name, $title, $help, $label));
			
		} else {
		
			$name = (isset($_data["name"]) ? $_data["name"] : null);
			$type = (isset($_data["type"]) ? $_data["type"] : null);
			$datatype = (isset($_data["datatype"]) ? intval($_data["datatype"]) : -1);
			$defaultValue = (isset($_data["default_value"]) ? intval($_data["default_value"]) : null);
			$dbColumnType = (isset($_data["db_column_type"]) ? $_data["db_column_type"] : null);
			$dbColumnAllowNull = (isset($_data["db_column_allow_null"]) ? $_data["db_column_allow_null"] : true);
			$dbColumnParameters = (isset($_data["db_column_parameters"]) ? $_data["db_column_parameters"] : null);
			$dbColumnIndexed = (isset($_data["db_column_indexed"]) ? $_data["db_column_indexed"] : null);
			$cmsLabel = (isset($_data["cms_label"]) ? $_data["cms_label"] : null);
			$cmsEditable = (isset($_data["cms_editable"]) ? $_data["cms_editable"] == "true" : false);
			$cmsEditor = (isset($_data["cms_editor"]) ? $_data["cms_editor"] : null);
			$cmsParameters = (isset($_data["cms_parameters"]) ? $_data["cms_parameters"] : null);
			
			if ($table == null) throw new Exception("No table specified");
			if ($field == null) throw new Exception("No field specified");
			if ($name == null) throw new Exception("No name specified");
			if ($type == null) throw new Exception("No type specified");
			if ($datatype == -1) throw new Exception("No datatype specified");
			if ($dbColumnType == null) throw new Exception("No columntype specified");
			
			$this->service->updateField($table, $field, new CMSField($name, $type, $datatype, $defaultValue, $dbColumnType, $dbColumnAllowNull, $dbColumnParameters, $dbColumnIndexed, $cmsLabel, $cmsEditable, $cmsEditor, $cmsParameters));
			
		}
	}
	
	/**
	 * @param array $_path
	 */
	public function delete($_path) {
		
		$table = (isset($_path[0]) ? $_path[0] : null);
		$field = (isset($_path[1]) ? $_path[1] : null);
		
		if ($table == null) {
			
			throw new Exception("No table specified");
			
		} else if ($field == null) {
			
			$this->service->deleteTable($table);
			
		} else {
		
			if ($table == null) throw new Exception("No table specified");
			if ($field == null) throw new Exception("No field specified");
			
			$this->service->deleteField($table, $field);
			
		}
		
	}
}

?>