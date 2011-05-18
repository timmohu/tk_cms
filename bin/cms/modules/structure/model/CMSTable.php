<?php

class CMSTable {
	
	/**
	 * @var string
	 */
	public $name;
	
	/**
	 * @var string
	 */
	public $title;
	
	/**
	 * @var string
	 */
	public $help;
	
	/**
	 * @var string
	 */
	public $label;
	
	/**
	 * @var array
	 */
	public $fields;
	
	/**
	 * @param string $_name
	 * @param string $_title
	 * @param string $_help
	 * @param string $_label
	 * @param array $_fields
	 */
	function __construct($_name = null, $_title = null, $_help = null, $_label = null, $_fields = null) {
		$this->name = $_name;
		$this->title = $_title;
		$this->help = $_help;
		$this->label = $_label;
		$this->fields = $_fields;
	}

	/*
	public function toXML() {
		$dom = new DOMDocument("1.0", "utf-8");
		$element = $dom->createElement("table");
		$element->setAttribute("name", $this->name);
		$element->setAttribute("label", $this->label);
		$element->setAttribute("title", $this->title);
		$element->setAttribute("help", $this->help);
		if ($this->fields) foreach ($this->fields as $field) $dom->appendChild($dom->importNode($field->toXML(), true));
		return $element;
	}
	*/
}

?>