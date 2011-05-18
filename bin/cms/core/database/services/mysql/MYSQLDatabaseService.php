<?php

include_once "core/database/model/DatabaseColumn.php";
include_once "core/database/errors/DatabaseError.php";
include_once "core/database/services/IDatabaseService.php";

class MYSQLDatabaseService implements IDatabaseService {

	private $name;
	private $connection;


	/**
	 * @param string $_database
	 * @param resource $_connection
	 */
	public function __construct($_connection, $_database) {
		if (!$_connection) throw new DatabaseError(DatabaseErrorMessage::DATABASE_CONNECTION_FAILED, DatabaseErrorCode::DATABASE_CONNECTION_FAILED);
		if (!$_database) throw new DatabaseError(DatabaseErrorMessage::DATABASE_NOT_SPECIFIED, DatabaseErrorCode::DATABASE_NOT_SPECIFIED);
		if (!mysql_select_db($_database, $_connection)) throw new DatabaseError(DatabaseErrorMessage::DATABASE_NOT_FOUND, DatabaseErrorCode::DATABASE_NOT_FOUND);
		mysql_set_charset('utf8' , $_connection); 
		$this->connection = $_connection;
		$this->name = $_database;
	}

	/**
	 * @param string $_name
	 * @returns bool
	 */
	public function tableExists($_name) {
		$query = "SHOW TABLES LIKE `" . $_name . "`";
		$result = mysql_query($query, $this->connection);
		if (!$result) throw new DatabaseError(str_replace("{ERROR}", mysql_error($this->connection), DatabaseErrorMessage::DATABASE_ERROR), DatabaseErrorCode::DATABASE_ERROR);
		return (mysql_num_rows($result) != 0);
	}

	/**
	 * @param string $_name
	 * @param array $_columns
	 */
	public function addTable($_name, $_columns) {
		$columns = array();
		$indexes = array();
		foreach ($_columns as $column) {
			$columns[] = "`" . $column->name . "` " . $column->type . ($_column->allowNull ? "" : " NOT NULL") . (isset($_column->defaultValue) ? " DEFAULT " . (is_string($_column->defaultValue) ? "'" . $_column->defaultValue . "'" : (is_bool($_column->defaultValue) ? ($_column->defaultValue ? 1 : 0) : $_column->defaultValue)) : "");
			if (isset($_column->index)) {
				switch ($_column->index) {
					case DatabaseColumn::PRIMARY_KEY:
						$indexes[] = "PRIMARY KEY";
						break;
					case DatabaseColumn::UNIQUE:
						$indexes[] = "UNIQUE INDEX";
						break;
					case DatabaseColumn::FULLTEXT:
						$indexes[] = "FULLTEXT INDEX";
						break;
					case DatabaseColumn::INDEXED:
						$indexes[] = "INDEX";
						break;
				}
			}
		}
		$query = "CREATE TABLE `" . $_name . "` (" . explode($columns, ", ") . (count($indexes) > 0 ? ", " . explode($indexes, ", ") : "") . ")";
		$success = mysql_query($query, $this->connection);
		if (!$success) throw new DatabaseError(str_replace("{ERROR}", mysql_error($this->connection), DatabaseErrorMessage::DATABASE_ERROR), DatabaseErrorCode::DATABASE_ERROR);
	}

	/**
	 * @param string $_name
	 */
	public function deleteTable($_name) {
		$query = "DROP TABLE `" . $_name . "`";
		$success = mysql_query($query, $this->connection);
		if (!$success) throw new DatabaseError(str_replace("{ERROR}", mysql_error($this->connection), DatabaseErrorMessage::DATABASE_ERROR), DatabaseErrorCode::DATABASE_ERROR);
	}

	/**
	 * @param string $_name
	 * @param DatabaseColumn $_column
	 */
	public function addColumn($_table, $_column) {
		$query = "ALTER TABLE `" . $_table . "` ADD COLUMN `" . $_column->name . "` " . $_column->type . ($_column->allowNull ? "" : " NOT NULL") . (isset($_column->defaultValue) ? " DEFAULT " . (is_string($_column->defaultValue) ? "'" . $_column->defaultValue . "'" : (is_bool($_column->defaultValue) ? ($_column->defaultValue ? 1 : 0) : $_column->defaultValue)) : "");
		if (isset($_column->index)) {
			$query .= "; ALTER TABLE `" . $_table . "` ADD "; 
			switch ($_column->index) {
				case DatabaseColumn::PRIMARY_KEY:
					$query .= "PRIMARY KEY";
					break;
				case DatabaseColumn::UNIQUE:
					$query .= "UNIQUE INDEX";
					break;
				case DatabaseColumn::FULLTEXT:
					$query .= "FULLTEXT INDEX";
					break;
				case DatabaseColumn::INDEXED:
					$query .= "INDEX";
					break;
			}
			$query .= " `" . $_column->name . "` (`" . $_column->name . "`)";
		}
		$success = mysql_query($query, $this->connection);
		if (!$success) throw new DatabaseError(str_replace("{ERROR}", mysql_error($this->connection), DatabaseErrorMessage::DATABASE_ERROR), DatabaseErrorCode::DATABASE_ERROR);
	}

	/**
	 * @param string $_table
	 * @returns array
	 */
	public function getColumns($_table) {
		$query = "SHOW COLUMNS FROM `" . $_table . "`";
		$result = mysql_query($query, $this->connection);
		if (!$result) throw new DatabaseError(str_replace("{ERROR}", mysql_error($this->connection), DatabaseErrorMessage::DATABASE_ERROR), DatabaseErrorCode::DATABASE_ERROR);
		if (mysql_num_rows($result) == 0) return array();
		$columns = array();
		while ($row = mysql_fetch_array($result)) $columns[$row["Field"]] = new DatabaseColumn($row["Field"], $row["Type"], $row["Null"] == "YES", $row["Default"], $row["Extra"]);
		$query = "SHOW INDEXES FROM `" . $_table . "`";
		$result = mysql_query($query, $this->connection);
		if (!$result) throw new DatabaseError(str_replace("{ERROR}", mysql_error($this->connection), DatabaseErrorMessage::DATABASE_ERROR), DatabaseErrorCode::DATABASE_ERROR);
		while ($row = mysql_fetch_array($result)) {
			if ($row["Key_name"] == "PRIMARY") {
				$index = DatabaseColumn::PRIMARY_KEY;
			} else if ($row["Non_unique"] == 0) {
				$index = DatabaseColumn::UNIQUE;
			} else if ($row["Index_type"] == "FULLTEXT") {
				$index = DatabaseColumn::FULLTEXT;
			} else {
				$index = DatabaseColumn::INDEXED;
			}
			$columns[$row["Field"]]->index = $index;
		}
		return array_values($columns);
	}

	/**
	 * @param string $_table
	 * @param string $_oldColumnName
	 * @param DatabaseColumn $_column
	 */
	public function updateColumn($_table, $_oldColumnName, $_column) {
		
		$query = "SHOW INDEXES FROM `" . $_table . "` WHERE `Key_name` = '" . $_oldColumnName . "'";
		$response = mysql_query($query, $this->connection);
		if (!$response) throw new DatabaseError(str_replace("{ERROR}", mysql_error($this->connection), DatabaseErrorMessage::DATABASE_ERROR), DatabaseErrorCode::DATABASE_ERROR);
		if (mysql_num_rows($response) != 0) {
			$query = "ALTER TABLE `" . $_table . "` DROP INDEX `" . $_oldColumnName . "`";
			$success = mysql_query($query, $this->connection);
			if (!$success) throw new DatabaseError(str_replace("{ERROR}", mysql_error($this->connection), DatabaseErrorMessage::DATABASE_ERROR), DatabaseErrorCode::DATABASE_ERROR);
		}
		
		$query = "ALTER TABLE `" . $_table . "` CHANGE `" . $_oldColumnName . "` `" . $_column->name . "` " . $_column->type . ($_column->allowNull ? "" : " NOT NULL") . (isset($_column->defaultValue) ? " DEFAULT " . (is_string($_column->defaultValue) ? "'" . $_column->defaultValue . "'" : (is_bool($_column->defaultValue) ? ($_column->defaultValue ? 1 : 0) : $_column->defaultValue)) : "");
		$success = mysql_query($query, $this->connection);
		if (!$success) throw new DatabaseError(str_replace("{ERROR}", mysql_error($this->connection), DatabaseErrorMessage::DATABASE_ERROR), DatabaseErrorCode::DATABASE_ERROR);

		if (isset($_column->index)) {
			$query = "ALTER TABLE `" . $_table . "` ADD "; 
			switch ($_column->index) {
				case DatabaseColumn::PRIMARY_KEY:
					$query .= "PRIMARY KEY";
					break;
				case DatabaseColumn::UNIQUE:
					$query .= "UNIQUE INDEX";
					break;
				case DatabaseColumn::FULLTEXT:
					$query .= "FULLTEXT INDEX";
					break;
				case DatabaseColumn::INDEXED:
					$query .= "INDEX";
					break;
			}
			$query .= " `" . $_column->name . "` (`" . $_column->name . "`)";
		}
		$success = mysql_query($query, $this->connection);
		if (!$success) throw new DatabaseError(str_replace("{ERROR}", mysql_error($this->connection), DatabaseErrorMessage::DATABASE_ERROR), DatabaseErrorCode::DATABASE_ERROR);
	}

	/**
	 * @param string $_table
	 * @param string $_columnName
	 */
	public function deleteColumn($_table, $_columnName) {
		$query = "ALTER TABLE `" . $_table . "` DROP COLUMN `" . $_columnName . "`";
		$success = mysql_query($query, $this->connection);
		if (!$success) throw new DatabaseError(str_replace("{ERROR}", mysql_error($this->connection), DatabaseErrorMessage::DATABASE_ERROR), DatabaseErrorCode::DATABASE_ERROR);	
	}

	/**
	 * @param string $_table
	 * @param array $_columns
	 * @param array $_values
	 * @return int
	 */
	public function addRow($_table, $_columns, $_values) {
		foreach ($_columns as &$column) $column = "`" . $column . "`";
		$values = array();
		foreach ($_values as $value) $values[] = (is_null($value) ? "NULL" : (is_bool($value) ? ($value ? 1 : 0) : (is_string($value) ? "\"" . mysql_real_escape_string($value) . "\"" : $value)));
		$query = "INSERT INTO `" . $_table . "`" . ($_columns ? " (" . implode($_columns, ", ") . ")": "") . " VALUES (" . implode($values, ", ") . ")";
		$success = mysql_query($query, $this->connection);
		if (!$success) throw new DatabaseError(str_replace("{ERROR}", mysql_error($this->connection), DatabaseErrorMessage::DATABASE_ERROR), DatabaseErrorCode::DATABASE_ERROR);
		return mysql_insert_id($this->connection);
	}

	/**
	 * @param string $_table
	 * @param string $_filter
	 * @param array $_columns
	 * @param array $_joins
	 * @param string $_sort
	 * @param int $_offset
	 * @param int $_limit
	 * @param array $_joins
	 * @return array
	 */
	public function getRows($_table, $_filter = null, $_columns = null, $_sort = null, $_descending = false, $_offset = 0, $_limit = -1, $_joins = null) {
		$columns = array();
		if (isset($_columns)) foreach ($_columns as $columnAlias => $columnName) $columns[] = str_replace(".", "`.`", "`" . $columnName . "`") . (is_int($columnAlias) ? "" : " AS `" . $columnAlias . "`"); 
		$query = "SELECT " . (count($columns) > 0 ? implode($columns, ",") : "*");
		$query .= " FROM `" . $_table . "`";
		if (isset($_joins)) foreach ($_joins as $joinTable => $joinColumns) $query .= " LEFT JOIN " . $joinTable . " ON " . str_replace(".", "`.`", "`" . $joinColumns[0] . "`") . "=" . str_replace(".", "`.`", "`" . $joinColumns[1] . "`");
		if (isset($_filter) && $_filter) $query .= " WHERE " . $_filter;
		if (isset($_sort) && $_sort) $query .= " ORDER BY " . $_sort . ($_descending ? " DESC" : "");
		if ((isset($_offset) && ($_offset != 0)) || isset($_limit)) $query .= " LIMIT " . $_offset . "," . ($_limit == -1 ? "18446744073709551615" : $_limit);
		$result = mysql_query($query, $this->connection);
		if (!$result) throw new DatabaseError(str_replace("{ERROR}", mysql_error($this->connection), DatabaseErrorMessage::DATABASE_ERROR), DatabaseErrorCode::DATABASE_ERROR);
		if (mysql_num_rows($result) == 0) return array();
		$rows = array();
		while ($row = mysql_fetch_assoc($result)) $rows[] = $row;
		return $rows;
	}

	/**
	 * @param string $_table
	 * @param string $_filter
	 * @param array $_columns
	 * @param array $_values
	 * @return int
	 */
	public function updateRows($_table, $_filter, $_columns, $_values) {
		$values = array();
		$i = -1;
		foreach ($_values as $value) $values[] = "`" . $_columns[++$i] . "`=" . (is_null($value) ? "NULL" : (is_bool($value) ? ($value ? 1 : 0) : (is_string($value) ? "\"" . mysql_real_escape_string($value) . "\"" : $value)));
		$query = "UPDATE `" . $_table . "` SET " . implode($values, ", ") . " WHERE " . $_filter;
		$success = mysql_query($query, $this->connection);
		if (!$success) throw new DatabaseError(str_replace("{ERROR}", mysql_error($this->connection), DatabaseErrorMessage::DATABASE_ERROR), DatabaseErrorCode::DATABASE_ERROR);
		return mysql_affected_rows($this->connection);
	}

	/**
	 * @param string $_table
	 * @param string $_filter
	 * @return int
	 */
	public function deleteRows($_table, $_filter) {
		$query = "DELETE FROM `" . $_table . "` WHERE " . $_filter;
		$success = mysql_query($query, $this->connection);
		if (!$success) throw new DatabaseError(str_replace("{ERROR}", mysql_error($this->connection), DatabaseErrorMessage::DATABASE_ERROR), DatabaseErrorCode::DATABASE_ERROR);
		return mysql_affected_rows($this->connection);
	}
	
	/**
	 * @param string $_table
	 * @return int
	 */
	public function getNextAutonumber($_table) {
		$query = "SHOW TABLE STATUS LIKE '" . $_table . "'";
		$result = mysql_query($query, $this->connection);
		if (!$result) throw new DatabaseError(str_replace("{ERROR}", mysql_error($this->connection), DatabaseErrorMessage::DATABASE_ERROR), DatabaseErrorCode::DATABASE_ERROR);
		$row = mysql_fetch_assoc($result);
		return intval($row['Auto_increment']);
	}
	
	/**
	 * @param string $_table
	 * @param int
	 */
	public function setNextAutonumber($_table, $_autonumber) {
		$query = "ALTER TABLE `" . $_table . "` AUTO_INCREMENT=" . $_autonumber;
		$success = mysql_query($query, $this->connection);
		if (!$success) throw new DatabaseError(str_replace("{ERROR}", mysql_error($this->connection), DatabaseErrorMessage::DATABASE_ERROR), DatabaseErrorCode::DATABASE_ERROR);
	}
}

?>