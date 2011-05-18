<?php

include_once 'core/encoding/services/IEncodingService.php';

class XMLEncodingService implements IEncodingService {

	/**
	 * @var array
	 */
	private $encoderClassMappings;
	
	/**
	 * @var array
	 */
	private $decoderClassMappings;
	
	
	/**
	 * @param array $_classMappings
	 */
	public function __construct($_classMappings = null) {
		$this->encoderClassMappings = array();
		$this->decoderClassMappings = array();
		if ($_classMappings != null) {
			foreach ($_classMappings as $mappingName => $mappingValue) {
				$this->encoderClassMappings[$mappingValue] = $mappingName;
				$this->decoderClassMappings[$mappingName] = $mappingValue;
			}
		}
	}
	
	/**
	 * @param mixed $_object
	 * @return string
	 */
	public function encode($_object) {
		$references = array();
		$output = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
		$output .= $this->encode_element($_object, $references);
		return $output;
	}

	/**
	 * @param mixed $_element
	 * @param string $_indent
	 * @return string
	 */
	public function encode_element(&$_element, $_references, $_indent = "") {
		if (is_null($_element)) return $_indent . "<null/>\n";
		if (is_bool($_element)) return $_indent . "<boolean>" . ($_element ? "true" : "false") . "</boolean>\n";
		if (is_int($_element)) return $_indent . "<integer>" . $_element . "</integer>\n";
		if (is_float($_element)) return $_indent . "<float>" . $_element . "</float>\n";
		if (is_string($_element)) return $_indent . "<string>" . htmlspecialchars($_element) . "</string>\n";
		if (is_array($_element) && (count($_element) == 0 || (array_keys($_element) === range(0, count($_element) - 1)))) {
			$values = "";
			foreach ($_element as $value) $values .= $this->encode_element($value, $_references, $_indent . "\t");
			return $_indent . "<array>\n" . $values . $_indent . "</array>\n";
		}
		if (is_object($_element) || is_array($_element)) {
			if (is_object($_element)) {	
				$id = spl_object_hash($_element);
				if (isset($_references[$id])) return $_indent . "<reference id=\"" . $id. "\"/>\n"; else $_references[$id] = true;
			}
			$values = "";
			foreach ($_element as $key => $value) $values .= $_indent . "\t" . "<" . $key . ">\n" . $this->encode_element($value, $_references, $_indent . "\t\t") . $_indent . "\t" . "</" . $key . ">\n";
			return $_indent . "<object" . (is_object($_element) ? " id=\"" . $id . "\"" : "") . (is_object($_element) ? (isset($this->encoderClassMappings[get_class($_element)]) ? " class=\"" . $this->encoderClassMappings[get_class($_element)] . "\"" : "") : "") . ">\n" . $values . $_indent . "</object>\n";
		}
		return $_indent . "<null/>\n";
	}
	
	/**
	 * @param string $_object
	 * @param bool $_assoc
	 * @return mixed
	 */
	public function decode($_object, $_assoc = false) {
		$references = array();
		return $this->decode_element(simplexml_load_string($_object), $_assoc, $references);
	}

	/**
	 * @param SimpleXMLElement $element
	 * @param bool $_assoc
	 * @param array $_references
	 * @return mixed
	 */
	public function decode_element($element, $_assoc = false, &$_references = null) {
		
		if ($_references == null) $_references = array();
		$id = "";
		foreach ($element->attributes() as $key => $value) {
			if ($key != "id") continue;
			$id = intval($value);
			break;
		}
		
		switch($element->getName()) {
			case "null":
				return null;
			case "boolean":
				return (strval($element) == "true");
			case "integer":
				return intval($element);
			case "float":
				return floatval($element);
			case "string":
				return strval($element);
			case "array":
				$array = array();
				if ($id != "") $_references[$id] = &$array;
				foreach ($element->children() as $child) $array[] = $this->decode_element($child, $_assoc, $_references);
				return $array;
			case "object":
				$objectClass = ($_assoc ? null : "stdClass");
				foreach ($element->attributes() as $attributeName => $attributeValue) {
					if ($attributeName != "class") continue;
					if (isset($this->decoderClassMappings[strval($attributeValue)])) $objectClass = $this->decoderClassMappings[strval($attributeValue)];
					break;
				}
				$object = ($objectClass ? new $objectClass() : array());
				if ($id != "") $_references[$id] = &$object;
				if ($objectClass == null) {
					foreach ($element->children() as $key) foreach ($key->children() as $value) $object[$key->getName()] = $this->decode_element($value, $_assoc, $_references);
				} else {
					foreach ($element->children() as $key) foreach ($key->children() as $value) $object->{$key->getName()} = $this->decode_element($value, $_assoc, $_references);
				}
				return $object;
			case "reference":
				return $_references[$id];
		}
		return null;
	}
}

?>