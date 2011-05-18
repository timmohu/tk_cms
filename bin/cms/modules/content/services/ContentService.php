<?php

include_once 'modules/structure/model/CMSField.php';

include_once 'modules/content/model/CMSItem.php';
include_once 'modules/content/model/CMSList.php';
include_once 'modules/content/model/CMSReference.php';
include_once 'modules/content/model/CMSSmartlist.php';

class ContentService {
	
	/**
	 * @var IDatabaseService
	 */
	private $database;

	/**
	 * @var array
	 */
	private $fields;
	
	/**
	 * @var string
	 */
	private $contentTablePrefix;
	
	/**
	 * @var string
	 */
	private $referencesTable;
	
	/**
	 * @var string
	 */
	private $filtersTable;
	
	/**
	 * @var string
	 */
	private $usersTable;

	/**
	 * @param IDatabaseService $_database
	 * @param string $_tablesTable
	 * @param string $_fieldsTable
	 * @param string $_contentTablePrefix
	 * @param string $_referencesTable
	 * @param string $_usersTable
	 */
	public function __construct($_database, $_tablesTable, $_fieldsTable, $_contentTablePrefix, $_referencesTable, $_usersTable) {
		$this->database = $_database;
		$this->contentTablePrefix = $_contentTablePrefix;
		$this->referencesTable = $_referencesTable;
		$this->usersTable = $_usersTable;
		
		$fieldRows = $this->database->getRows($_fieldsTable, null, array("table", "name", "type", "datatype", "default_value", "db_column_type", "db_column_allow_null", "db_column_parameters", "db_column_indexed", "cms_label", "cms_editable", "cms_editor", "cms_parameters"));
		$fields = array();
		foreach ($fieldRows as $fieldRow) $fields[$fieldRow["table"]][] = new CMSField($fieldRow["name"], $fieldRow["type"], $fieldRow["datatype"], $fieldRow["default_value"], $fieldRow["db_column_type"], ($fieldRow["db_column_allow_null"] == 1), $fieldRow["db_column_parameters"], $fieldRow["db_column_indexed"], $fieldRow["cms_label"], ($fieldRow["cms_editable"] == 1), $fieldRow["cms_editor"], $fieldRow["cms_parameters"]);
		$this->fields = $fields;
	}

	/**
	 * @param int $_user
	 * @param string $_table
	 * @param CMSItem $_item
	 * @return int
	 */
	public function addItem($_user, $_table, $_item) {
		
		// Parse properties and references
		
		$properties = array();
		$references = array();
		
		foreach ($this->fields[$_table] as $field) {
			
			$fieldName = $field->name;
			$fieldValue = isset($_item->value->{$fieldName}) ? $_item->value->{$fieldName} : $field->cmsDefaultValue;
			
			switch ($field->type) {
				
				case "property":
					break;
					
				case "reference":
					if ($fieldValue && !($fieldValue instanceof CMSReference)) throw new Exception("Invalid value for field '" + $fieldName + "'");
					if ($fieldValue) {
						$fieldValue = $fieldValue->id;
						$references[] = array("field" => $fieldName, "target_table" => $field->datatype, "target_item" => $fieldValue->id);
					}
					break;
					
				case "itemlist":
					if ($fieldValue && !($fieldValue instanceof CMSList)) throw new Exception("Invalid value for field '" + $fieldName + "'");
					if ($fieldValue) {
						$listItems = array();
						foreach ($fieldValue->items as $listItem) {
							$listItems[] = $listItem->id;
							$references[] = array("field" => $fieldName, "target_table" => $field->datatype, "target_item" => $listItem->id);
						}
						$fieldValue = implode(",",$listItems);
					}
					break;
				
				case "smartlist":
					if ($fieldValue && !($fieldValue instanceof CMSSmartlist)) throw new Exception("Invalid value for field '" + $fieldName + "'");
					if ($fieldValue) {
						$fieldValue = "{\"table\":\"" . $fieldValue->table . "\",\"filter\":\"" . $fieldValue->filter . "\",\"sort\":" . ($fieldValue->sort ? "\"" . $fieldValue->sort . "\"": "null") . ",\"descending\":" . ($fieldValue->descending ? "true" : "false") . ",\"offset\":" . $fieldValue->offset . ",\"limit\":\"" . $fieldValue->limit . ",\"autoload\":" . ($fieldValue->autoload ? "true" : "false") . "}";
					}
					break;
			}
			$properties[$fieldName] = $fieldValue;
		}
		
		// Save properties
		
		$propertyColumns = array_keys($properties);
		$propertyValues = array_values($properties);
		
		$id = 0;
		if ($_item->id <= 0) {
			$id = $this->database->addRow($this->contentTablePrefix . $_table, array_merge(array("cms_alias", "cms_author"), $propertyColumns), array_merge(array(($_item->alias ? $_item->alias : null), $_user), $propertyValues));
		} else {
			$id = $this->database->addRow($this->contentTablePrefix . $_table, array_merge(array("cms_id", "cms_alias", "cms_author"), $propertyColumns), array_merge(array($_item->id, ($_item->alias ? $_item->alias : null), $_user), $propertyValues));
		}
		
		// Save references
		
		foreach ($references as $reference) $this->database->addRow($this->referencesTable, array("table", "item", "field", "target_table", "target_item"), array($_table, $id, $reference["field"], $reference["target_table"], $reference["target_item"]));

		return $id;
	}
	
	/**
	 * @param string $_table
	 * @param int|string $_item
	 * @param bool $_children
	 * @return CMSItem
	 */
	public function getItem($_table, $_item, $_children = -1) {
		if (is_string($_item)) {
			$itemRows = $this->database->getRows($this->contentTablePrefix . $_table, "`cms_alias` = '" . $_item . "'", array("cms_id"), null, false, 0, 1);
			if (count($itemRows) == 0) return null;
			$_item = intval($itemRows[0]["cms_id"]);
		} else if ($_item == 0) {
			$itemRows = $this->database->getRows($this->contentTablePrefix . $_table, null, array("cms_id"), "cms_id", false, 0, 1);
			if (count($itemRows) == 0) return null;
			$_item = intval($itemRows[0]["cms_id"]);
		} else if ($_item == -1) {
			$itemRows = $this->database->getRows($this->contentTablePrefix . $_table, null, array("cms_id"), "cms_id", true, 0, 1);
			if (count($itemRows) == 0) return null;
			$_item = intval($itemRows[0]["cms_id"]);
		}
		return ($_children == 0 ? new CMSReference($_table, $_item) : $this->_getItem($_table, $_item, $_children - 1));
	}
	
	/**
	 * @param int $_table
	 * @param int $_item
	 * @return array;
	 */
	public function findInstances($_table, $_item) {
		$referenceRows = $this->database->getRows($this->referencesTable, "`target_table` = '" . $_table . "' AND `target_item` = " . $_item, array("table", "item"));
		$items = array();
		$itemCache = array();
		foreach ($referenceRows as $referenceRow) $items[] = $this->_getItem($referenceRow["table"], $referenceRow["item"], 0, $itemCache);
		return $items;
	}
	
	/**
	 * @param int $_table
	 * @param string $_filter
	 * @param string $_sort
	 * @param bool $_descending
	 * @param int $_offset
	 * @param int $_limit
	 * @param int $_children
	 * @return array;
	 */
	public function listItems($_table, $_filter = null, $_sort = null, $_descending = false, $_offset = 0, $_limit = -1, $_children = 0) {
		$itemRows = $this->database->getRows($this->contentTablePrefix . $_table, $_filter, array("cms_id"), $_sort, $_descending, $_offset, $_limit);
		$items = array();
		$itemCache = array();
		foreach ($itemRows as $itemRow) $items[] = ($_children == 0 ? new CMSReference($_table, intval($itemRow["cms_id"])) : $this->_getItem($_table, $itemRow["cms_id"], $_children - 1, $itemCache));
		return $items;
	}

	/**
	 * @param int $_user
	 * @param int $_table
	 * @param int $_id
	 * @param CMSItem $_item
	 */
	public function updateItem($_user, $_table, $_id, $_item) {
		
		// Parse properties and references
		
		$properties = array();
		$references = array();
		
		foreach ($this->fields[$_table] as $field) {

			$fieldName = $field->name;
			$fieldValue = isset($_item->value->{$fieldName}) ? $_item->value->{$fieldName} : $field->cmsDefaultValue;
			
			switch ($field->type) {
				
				case "property":
					break;
					
				case "reference":
					if ($fieldValue && !($fieldValue instanceof CMSReference)) throw new Exception("Invalid value for field '" + $fieldName + "'");
					if ($fieldValue) {
						$fieldValue = $fieldValue->id;
						$references[] = array("field" => $fieldName, "target_table" => $field->datatype, "target_item" => $fieldValue->id);
					}
					break;
					
				case "itemlist":
					if ($fieldValue && !($fieldValue instanceof CMSList)) throw new Exception("Invalid value for field '" + $fieldName + "'");
					if ($fieldValue) {
						$listItems = array();
						foreach ($fieldValue->items as $listItem) {
							$listItems[] = $listItem->id;
							$references[] = array("field" => $fieldName, "target_table" => $field->datatype, "target_item" => $listItem->id);
						}
						$fieldValue = implode(",", $listItems);
					}
					break;
				
				case "smartlist":
					if ($fieldValue && !($fieldValue instanceof CMSSmartlist)) throw new Exception("Invalid value for field '" + $fieldName + "'");
					if ($fieldValue) {
						$fieldValue = "{\"table\":\"" . $fieldValue->table . "\",\"filter\":\"" . $fieldValue->filter . "\",\"sort\":" . ($fieldValue->sort ? "\"" . $fieldValue->sort . "\"": "null") . ",\"descending\":" . ($fieldValue->descending ? "true" : "false") . ",\"offset\":" . $fieldValue->offset . ",\"limit\":\"" . $fieldValue->limit . ",\"autoload\":" . ($fieldValue->autoload ? "true" : "false") . "}";
					}
					break;
			}
			$properties[$fieldName] = $fieldValue;
		}
		
		
		// Save properties
		
		$propertyColumns = array_keys($properties);
		$propertyValues = array_values($properties);
		
		$this->database->updateRows($this->contentTablePrefix . $_table, "`cms_id` = " . $_id, array_merge(array("cms_alias", "cms_author"), $propertyColumns), array_merge(array(($_item->alias ? $_item->alias : null), $_user), $propertyValues));

		// Remove old references
		
		$this->database->deleteRows($this->referencesTable, "`table` = '" . $_table . "' AND `item` = " . $_id);
		
		// Save references
		
			foreach ($references as $reference) $this->database->addRow($this->referencesTable, array("table", "item", "field", "target_table", "target_item"), array($_table, $_id, $reference["field"], $reference["target_table"], $reference["target_item"]));
	}

	/**
	 * @param int $_table
	 * @param int $_item
	 */
	public function deleteItem($_table, $_item) {

		// Remove item
		
		$this->database->deleteRows($this->contentTablePrefix . $_table, "`cms_id` = " . $_item);		
		
		// Remove references
		
		$this->database->deleteRows($this->referencesTable, "`table` = '" . $_table . "' AND `item` = " . $_item);
		
	}
		
	/**
	 * @param string $_table
	 * @param int $_item
	 * @param bool $_children
	 * @param array $_itemCache
	 * @return CMSItem
	 */
	private function &_getItem($_table, $_item, $_children, &$_itemCache = null) {		

		if (!$_itemCache) $_itemCache = array();
		
		// Check whether item has already been cached
		
		if (isset($_itemCache[$_table]) && isset($_itemCache[$_table][$_item])) return $_itemCache[$_table][$_item];

		// Create an empty item
		
		$item = new CMSItem($_table, $_item);
		
		// Add item to the item cache
		
		if (!isset($_itemCache[$_table])) $_itemCache[$_table] = array();
		$_itemCache[$_table][$_item] = &$item;
		
		// Get item fields
		
		$fields = array();
		$itemsTable = $this->contentTablePrefix . $_table;
		$columns = array($itemsTable . ".cms_alias", $itemsTable . ".cms_date", $itemsTable . ".cms_author", "cms_username" => $this->usersTable . ".username");

		foreach ($this->fields[$_table] as $field) {
			$fields[$field->name] = $field;
			$columns[] = $itemsTable . "." . $field->name;
		}
		
		$joins = array($this->usersTable => array($itemsTable . ".cms_author", $this->usersTable . ".id"));
		
		// Get item data
		
		$itemRows = $this->database->getRows($itemsTable, "`" . $itemsTable . "`.`cms_id` = " . $_item, $columns, null, false, 0, -1, $joins);
		if (count($itemRows) == 0) return $item;
		$itemRow = $itemRows[0];
		
		// Populate information
		
		$information = array_splice($itemRow, 0, 4);
		$item->alias = $information["cms_alias"];
		$item->author = intval($information["cms_author"]);
		$item->username = $information["cms_username"];
		$item->date = strtotime($information["cms_date"]);
		
		// Populate properties
		
		$item->value = array();
	
		foreach ($fields as $fieldName => $field) {

			$fieldValue = $itemRow[$fieldName];
			
			switch ($field->type) {
				
				case "property":
					break;
					
				case "reference":
					if ($fieldValue) {
						if ($_children == 0) {
							$fieldValue = new CMSReference($field->datatype, $fieldValue);
						} else {
							$fieldValue = &$this->_getItem($field->datatype, intval($fieldValue), $_children - 1, $_itemCache);
						}
					} else {
						$fieldValue = null;
					}
					break;
					
				case "itemlist":
					$fieldValue = $fieldValue ? explode(",", $fieldValue) : array();
					$itemlist = new CMSList($field->datatype);
					foreach ($fieldValue as $listItem) {
						if ($_children == 0) {
							$itemlist->items[] = new CMSReference($field->datatype, $listItem);
						} else {
							$itemlist->items[] = &$this->_getItem($field->datatype, intval($listItem), $_children - 1, $_itemCache);
						}
						$items[] = new CMSItem($field->datatype, $listItem);
					}
					$fieldValue = $itemlist;
					break;
				
				case "smartlist":
					$fieldValue = $fieldValue ? json_decode($fieldValue, true) : array();
					$smartlist = new CMSSmartlist($field->datatype, isset($fieldValue["filter"]) ? $fieldValue["filter"] : null, isset($fieldValue["sort"]) ? $fieldValue["sort"] : null, isset($fieldValue["descending"]) ? $fieldValue["descending"] : false, isset($fieldValue["offset"]) ? $fieldValue["offset"] : 0, isset($fieldValue["limit"]) ? $fieldValue["limit"] : -1, isset($fieldValue["autoload"]) ? $fieldValue["autoload"] : true);
					$smartlistItemRows = $this->database->getRows($this->contentTablePrefix . $smartlist->table, $smartlist->filter, array("cms_id"), ($smartlist->sort ? $smartlist->sort : "cms_id"), $smartlist->descending, $smartlist->offset, $smartlist->limit);
					$smartlistItems = array();
					foreach ($smartlistItemRows as $smartlistItemRow) {
						if (($_children == 0) || !$smartlist->autoload) {
							$smartlist->items[] = new CMSReference($field->datatype, $smartlistItemRow["cms_id"]);
						} else {
							$smartlist->items[] = &$this->_getItem($field->datatype, intval($smartlistItemRow["cms_id"]), $_children - 1, $_itemCache);
						}
					}
					$fieldValue = $smartlist;
					break;
			}

			$item->value[$fieldName] = $fieldValue;
		}
		
		return $item;
	}
}

?>