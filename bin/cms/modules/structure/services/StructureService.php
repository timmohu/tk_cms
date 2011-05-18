<?php

include_once 'modules/structure/model/CMSTable.php';
include_once 'modules/structure/model/CMSField.php';
include_once 'core/database/model/DatabaseColumn.php';

class StructureService {
	
	/**
	 * @var IDatabaseService
	 */
	public $database;
	
	/**
	 * @var string
	 */
	public $tablesTable;
	
	/**
	 * @var string
	 */
	public $fieldsTable;
	
	/**
	 * @var string
	 */
	public $contentTablePrefix;
	
	/**
	 * @param IDatabaseService $_database
	 * @param string $_tablesTable
	 * @param string $_fieldsTable
	 * @param string $_contentTablePrefix
	 */
	public function __construct($_database, $_tablesTable, $_fieldsTable, $_contentTablePrefix) {
		$this->database = $_database;
		$this->tablesTable = $_tablesTable;
		$this->fieldsTable = $_fieldsTable;
		$this->contentTablePrefix = $_contentTablePrefix;
	}
	
	/**
	 * @param CMSTable $_table
	 * @return int
	 */
	public function addTable($_table) {
		if ($_table == null) throw new Exception("No table specified");
		$id = $this->database->addRow($this->tablesTable, array("name", "title", "help", "label"), array($_table->name, $_table->title, $_table->help, $_table->label));
		$cmsColumns = array(
			new DatabaseColumn("cms_id", "INT(11)", false, null, "AUTO_INCREMENT", DatabaseColumn::PRIMARY_KEY),
			new DatabaseColumn("cms_date", "TIMESTAMP", false, null, "ON UPDATE CURRENT_TIMESTAMP"),
			new DatabaseColumn("cms_author", "INT(11)", false, "CURRENT_TIMESTAMP", null, DatabaseColumn::INDEXED),
			new DatabaseColumn("cms_alias", "VARCHAR(255)", true, null, null, DatabaseColumn::UNIQUE)
		);
		$this->database->addTable($this->contentTablePrefix . $_table->name, $cmsColumns);
		return $id;
	}
	
	/**
	 * @param int $_tableName
	 * @return CMSTable
	 */
	public function getTable($_tableName) {
		if ($_tableName == null) throw new Exception("No table name specified");
		$tableRows = $this->database->getRows($this->tablesTable, "`name` = '" . $_tableName . "'", array("title", "help", "label"));
		if (count($tableRows) == 0) throw new Exception("Specified table not found");
		$tableRow = $tableRows[0];
		$fields = $this->listFields($_tableName);
		return new CMSTable($_tableName, $tableRow["title"], $tableRow["help"], $tableRow["label"], $fields);
	}

	/**
	 * @return array
	 */
	public function listTables() {
		$tableRows = $this->database->getRows($this->tablesTable, null, array("name", "title", "help", "label"));
		$tables = array();
		foreach ($tableRows as $tableRow) $tables[] = new CMSTable($tableRow["name"], $tableRow["title"], $tableRow["help"], $tableRow["label"], $this->listFields($tableRow["name"]));
		return $tables;
	}
	
	/**
	 * @param string $_tableName
	 * @param CMSTable $_table
	 */
	public function updateTable($_tableName, $_table) {
		if ($_tableName == null) throw new Exception("No table name specified");
		if ($_table == null) throw new Exception("No table specified");
		$affectedRows = $this->database->updateRows($this->tablesTable, "`name` = '" . $_tableName . "'", array("name", "title", "help", "label"), array($_table->name, $_table->title, $_table->help, $_table->label));
		if ($affectedRows == 0) throw new Exception("Specified table not found");
	}

	/**
	 * @param string $_tableName
	 */
	public function deleteTable($_tableName) {
		if ($_tableName == null) throw new Exception("No table name specified");
		$affectedRows = $this->database->deleteRows($this->tablesTable, "`name` = '" . $_tableName . "'");
		if ($affectedRows == 0) throw new Exception("Specified table not found");
		$this->database->deleteTable($this->contentTablePrefix . $_tableName);
	}
	
	/**
	 * @param string $_tableName
	 * @param CMSField $_field
	 * @return int
	 */
	public function addField($_tableName, $_field) {
		if ($_tableName == null) throw new Exception("No table name specified");
		if ($_field == null) throw new Exception("No field specified");
		$tableRows = $this->database->getRows($this->tablesTable, "`name` = '" . $_tableName . "'", array("name"));
		if (count($tableRows) == 0) throw new Exception("Specified table not found");
		$values = array("table" => $_tableName, "name" => $_field->name, "type" => $_field->type, "datatype" => $_field->datatype, "default_value" => $_field->defaultValue, "db_column_type" => $_field->dbColumnType, "db_column_allow_null" => ($_field->dbColumnAllowNull ? 1 : 0), "db_column_parameters" => $_field->dbColumnParameters, "db_column_indexed" => $_field->dbColumnIndexed, "cms_label" => $_field->cmsLabel, "cms_editable" => ($_field->cmsEditable ? 1 : 0), "cms_editor" => $_field->cmsEditor, "cms_parameters" => $_field->cmsParameters);
		$id = $this->database->addRow($this->fieldsTable, array_keys($values), array_values($values));
		$this->database->addColumn($this->contentTablePrefix . $_tableName, new DatabaseColumn($_field->name, $_field->dbColumnType, $_field->dbColumnAllowNull, $_field->defaultValue, $_field->dbColumnParameters, $_field->dbColumnIndexed));
		return $id;
	}
	
	/**
	 * @param string $_tableName
	 * @param string $_fieldName
	 * @return CMSField
	 */
	public function getField($_tableName, $_fieldName) {
		if ($_tableName == null) throw new Exception("No table name specified");
		if ($_fieldName == null) throw new Exception("No field name specified");
		$fieldRows = $this->database->getRows($this->fieldsTable, "`table` = '" . $_tableName . "' AND `name` = '" . $_fieldName . "'", array("table", "name", "type", "datatype", "default_value", "db_column_type", "db_column_allow_null", "db_column_parameters", "db_column_indexed", "cms_label", "cms_editable", "cms_editor", "cms_parameters"));
		if (count($fieldRows) == 0) throw new Exception("Specified field not found");
		$fieldRow = $fieldRows[0];
		return new CMSField($fieldRow["name"], $fieldRow["type"], $fieldRow["datatype"], $fieldRow["default_value"], $fieldRow["db_column_type"], $fieldRow["db_column_allow_null"] == 1, $fieldRow["db_column_parameters"], $fieldRow["db_column_indexed"], $fieldRow["cms_label"], $fieldRow["cms_editable"] == 1, $fieldRow["cms_editor"], $fieldRow["cms_parameters"]);
	}
	
	/**
	 * @param string $_tableName
	 * @return array
	 */
	public function listFields($_tableName) {
		if ($_tableName == null) throw new Exception("No table name specified");
		$fieldRows = $this->database->getRows($this->fieldsTable, "`table` = '" . $_tableName . "'", array("name", "type", "datatype", "default_value", "db_column_type", "db_column_allow_null", "db_column_parameters", "db_column_indexed", "cms_label", "cms_editable", "cms_editor", "cms_parameters"), "id");
		$fields = array();
		foreach ($fieldRows as $fieldRow) $fields[] = new CMSField($fieldRow["name"], $fieldRow["type"], $fieldRow["datatype"], $fieldRow["default_value"], $fieldRow["db_column_type"], $fieldRow["db_column_allow_null"] == 1, $fieldRow["db_column_parameters"], $fieldRow["db_column_indexed"], $fieldRow["cms_label"], $fieldRow["cms_editable"] == 1, $fieldRow["cms_editor"], $fieldRow["cms_parameters"]);
		return $fields;
	}
	
	/**
	 * @param string $_tableName
	 * @param string $_fieldName
	 * @param CMSField $_field
	 */
	public function updateField($_tableName, $_fieldName, $_field) {
		if ($_tableName == null) throw new Exception("No table name specified");
		if ($_fieldName == null) throw new Exception("No field name specified");
		if ($_field == null) throw new Exception("No field specified");
		$values = array("name" => $_field->name, "type" => $_field->type, "datatype" => $_field->datatype, "default_value" => $_field->defaultValue, "db_column_type" => $_field->dbColumnType, "db_column_allow_null" => ($_field->dbColumnAllowNull ? 1 : 0), "db_column_parameters" => $_field->dbColumnParameters, "db_column_indexed" => $_field->dbColumnIndexed, "cms_label" => $_field->cmsLabel, "cms_editable" => ($_field->cmsEditable ? 1 : 0), "cms_editor" => $_field->cmsEditor, "cms_parameters" => $_field->cmsParameters);
		$affectedRows = $this->database->updateRows($this->fieldsTable, "`table` = '" . $_tableName . "' AND `name` = `" . $_fieldName . "`", array_keys($values), array_values($values));
		if ($affectedRows == 0) throw new Exception("Specified field not found");
		$this->database->updateColumn($this->contentTablePrefix . $_tableName, new DatabaseColumn($_field->name, $_field->dbColumnType, $_field->dbColumnAllowNull, $_field->defaultValue, $_field->dbColumnParameters, $_field->dbColumnIndexed));
	}
	
	/**
	 * @param string $_tableName
	 * @param string $_fieldName
	 */
	public function deleteField($_tableName, $_fieldName) {
		if ($_tableName == null) throw new Exception("No table name specified");
		if ($_fieldName == null) throw new Exception("No field name specified");
		$affectedRows = $this->database->deleteRows($this->fieldsTable, "`table` = '" . $_tableName . "' AND `name` = `" . $_fieldName . "`");
		if ($affectedRows == 0) throw new Exception("Specified field not found");
		$this->database->deleteColumn($this->contentTablePrefix . $_tableName, $_fieldName);
	}
}

?>