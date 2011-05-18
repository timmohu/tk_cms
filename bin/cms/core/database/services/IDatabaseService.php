<?php

interface IDatabaseService {

	/**
	 * @param string $_name
	 * @return bool
	 */
	public function tableExists($_name);

	/**
	 * @param string $_name
	 * @param array $_columns
	 */
	public function addTable($_name, $_columns);
	
	/**
	 * @param string $_name
	 */
	public function deleteTable($_name);

	/**
	 * @param string $_name
	 * @param DatabaseColumn $_column
	 */
	public function addColumn($_table, $_column);

	/**
	 * @param string $_table
	 * @returns array
	 */
	public function getColumns($_table);

	/**
	 * @param string $_table
	 * @param string $_oldColumnName
	 * @param DatabaseColumn $_column
	 */
	public function updateColumn($_table, $_oldColumnName, $_column);

	/**
	 * @param string $_table
	 * @param string $_columnName
	 */
	public function deleteColumn($_table, $_columnName);
	
	/**
	 * @param string $_table
	 * @param array $_columns
	 * @param array $_values
	 * @return int
	 */
	public function addRow($_table, $_columns, $_values);
	
	/**
	 * @param string $_table
	 * @param string $_filter
	 * @param array $_columns
	 * @param string $_sort
	 * @param int $_offset
	 * @param int $_limit
	 * @param array $_joins
	 * @return array
	 */
	public function getRows($_table, $_filter = null, $_columns = null, $_sort = null, $_descending = false, $_offset = 0, $_limit = -1, $_joins = null);
	
	/**
	 * @param string $_table
	 * @param string $_filter
	 * @param array $_values
	 * @param array $_columns
	 * @return int
	 */
	public function updateRows($_table, $_filter, $_columns, $_values);
	
	/**
	 * @param string $_table
	 * @param string $_filter
	 * @return int
	 */
	public function deleteRows($_table, $_filter);
	
	/**
	 * @param string $_table
	 * @return int
	 */
	public function getNextAutonumber($_table);
	
	/**
	 * @param string $_table
	 * @param int
	 */
	public function setNextAutonumber($_table, $_autonumber);
}

?>