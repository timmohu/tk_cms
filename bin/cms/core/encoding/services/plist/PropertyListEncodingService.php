<?php

include_once 'core/encoding/services/IEncodingService.php';

class PropertyListEncodingService implements IEncodingService {

	/**
	 * @param mixed $_object
	 * @return string
	 */
	public function encode($_object) {
		$output = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
		$output .= "<!DOCTYPE plist PUBLIC \"-//Apple//DTD PLIST 1.0//EN\" \"http://www.apple.com/DTDs/PropertyList-1.0.dtd\">\n";
		$output .= "<plist version=\"1.0\">\n";
		$output .= $this->encode_element($_object);
		$output .= "</plist>";
		return $output;
	}

	public function encode_element($_element, $_indent = "") {
		if (is_bool($_element)) return $_indent . ($_element ? "<true/>\n" : "<false/>\n");
		if (is_int($_element)) return $_indent . "<integer>" . $_element . "</integer>\n";
		if (is_float($_element)) return $_indent . "<real>" . $_element . "</real>\n";
		if (is_string($_element)) return $_indent . "<string>" . htmlspecialchars($_element) . "</string>\n";
		if (is_array($_element) && (count($_element) == 0 || (array_keys($_element) === range(0, count($_element) - 1)))) {
			$values = "";
			foreach ($_element as $value) $values .= $this->encode_element($value, $_indent . "\t");
			return $_indent . "<array>\n" . $values . $_indent . "</array>\n";
		}
		if (is_object($_element) || is_array($_element)) {
			$values = "";
			foreach ($_element as $key => $value) $values .= $_indent . "\t" . "<key>" . $key . "</key>\n" . $this->encode_element($value, $_indent . "\t");
			return $_indent . "<dict>\n" . $values . $_indent . "</dict>\n";
		}
		return $_indent . "<false/>\n";
	}
	
	/**
	 * @param string $_object
	 * @param bool $_assoc
	 * @return mixed
	 */
	public function decode($_object, $_assoc = false) {
		$xml = simplexml_load_string($_object);
		foreach ($xml->children() as $root) return $this->decode_element($root, $_assoc);
	}

	public function decode_element($element, $_assoc = false) {
		switch($element->getName()) {
			case "true":
				return true;
			case "false":
				return false;
			case "integer":
				return intval($element);
			case "float":
				return floatval($element);
			case "string":
				return strval($element);
			case "date":
				return strval($element);
			case "array":
				$array = array();
				foreach ($element->children() as $child) $array[] = $this->decode_element($child, $_assoc);
				return $array;
			case "dict":
				$dict = ($_assoc ? array() : new stdClass());
				$key = null;
				foreach ($element->children() as $child) if ($child->getName() == "key") $key = strval($child); else if ($_assoc) $dict[$key] = $this->decode_element($child, $_assoc); else $dict->$key = $this->decode_element($child, $_assoc);
				return $dict;
			default:
				return null; 
		}
	}
}

?>