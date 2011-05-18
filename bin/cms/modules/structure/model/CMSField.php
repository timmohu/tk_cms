<?php

class CMSField {
	
	const PROPERTY = "property";
	const REFERENCE = "reference";
	const ITEMLIST = "list";
	const SMARTLIST = "smartlist";
	const ASSET = "asset";
	const ASSETLIST = "assetlist";
	
	/**
	 * @var string
	 */
	public $name;
	
	/**
	 * @var string
	 */
	public $type;
	
	/**
	 * @var int
	 */
	public $datatype;
	
	/**
	 * @var string
	 */
	public $defaultValue;
	
	/**
	 * @var string
	 */
	public $dbColumnType;
	
	/**
	 * @var bool
	 */
	public $dbColumnAllowNull;
	
	/**
	 * @var string
	 */
	public $dbColumnParameters;
	
	/**
	 * @var string
	 */
	public $dbColumnIndexed;
	
	/**
	 * @var string
	 */
	public $cmsLabel;
	
	/**
	 * @var bool
	 */
	public $cmsEditable;
	
	/**
	 * @var string
	 */
	public $cmsEditor;
	
	/**
	 * @var string
	 */
	public $cmsParameters;
	
	/**
	 * @param string $_name
	 * @param string $_type
	 * @param int $_datatype
	 * @param string $_defaultValue
	 * @param string $_dbColumnType
	 * @param bool $_dbColumnAllowNull
	 * @param string $_dbColumnParameters
	 * @param string $_dbColumnIndexed
	 * @param string $_cmsLabel
	 * @param bool $_cmsEditable
	 * @param string $_cmsEditor
	 * @param array $_cmsParameters
	 */
	function __construct($_name = null, $_type = null, $_datatype = -1, $_defaultValue = null, $_dbColumnType = null, $_dbColumnAllowNull = true, $_dbColumnParameters = null, $_dbColumnIndexed = null, $_cmsLabel = null, $_cmsEditable = false, $_cmsEditor = null, $_cmsParameters = null) {
		$this->name = $_name;
		$this->type = $_type;
		$this->datatype = $_datatype;
		$this->defaultValue = $_defaultValue;
		$this->dbColumnType = $_dbColumnType;
		$this->dbColumnAllowNull = $_dbColumnAllowNull;
		$this->dbColumnParameters = $_dbColumnParameters;
		$this->dbColumnIndexed = $_dbColumnIndexed;
		$this->cmsLabel = $_cmsLabel;
		$this->cmsEditable = $_cmsEditable;
		$this->cmsEditor = $_cmsEditor;
		$this->cmsParameters = $_cmsParameters;
	}
	
	/*
	public function toXML() {
		$dom = new DOMDocument("1.0", "utf-8");
		$element = $dom->createElement("datatype");
		$element->setAttribute("name", $this->name);
		$element->setAttribute("type", $this->type);
		$element->setAttribute("label", $this->cmsLabel);
		$element->setAttribute("datatype", $this->datatype);
		$element->setAttribute("editable", ($this->cmsEditable ? "true" : "false"));
		$element->setAttribute("editor", $this->cmsEditor);
		$element->setAttribute("allowNull", $this->dbColumnAllowNull);
		$element->setAttribute("columnType", $this->dbColumnType);
		if ($this->dbColumnParameters) $element->setAttribute("columnParameters", $this->dbColumnParameters);
		if ($this->dbColumnIndexed) $element->setAttribute("indexed", $this->dbColumnIndexed);
		if ($this->defaultValue != null) $element->setAttribute("defaultValue", $this->defaultValue);
		if ($this->cmsParameters) {
			foreach ($this->cmsParameters as $parameterName => $parameterValue) {
				$parameter = $dom->createElement("parameter", $parameterValue);
				$parameter->setAttribute("name", $parameterName);
				$element->appendChild($parameter);
			}
		}
		return $element;
	}
	*/
}

?>