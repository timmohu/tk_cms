<?php

require_once 'core/encoding/services/IEncodingService.php';

class JSONEncodingService implements IEncodingService {
	
	/**
	 * @param mixed $_object
	 * @return string
	 */
	public function encode($_object) {
		return json_encode($_object);
	}

	/**
	 * @param string $_object
	 * @param bool $_assoc
	 * @return mixed
	 */
	public function decode($_object, $_assoc = false) {
		return json_decode($_object, $_assoc);
	}


}

?>