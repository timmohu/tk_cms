package cms.mvcs.view.controllers;

/**
 * ...
 * @author Tim Kendrick
 */

import mohu.messages.Dispatcher;

import mohu.mvcs.view.IViewController;

interface IFormViewController implements IViewController {
	
	function validate():Bool;
	function submit():Void;

	var onReset(default, null):Dispatcher;
	var onSubmit(default, null):Dispatcher;
	
}