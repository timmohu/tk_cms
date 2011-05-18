<?php

interface IEncodingService {
	
	/**
	 * @param mixed $_object
	 * @return string
	 */
	public function encode($_object);
	
	/**
	 * @param string $_object
	 * @param bool $_assoc
	 * @return mixed
	 */
	public function decode($_object, $_assoc = false);
	
}

?>