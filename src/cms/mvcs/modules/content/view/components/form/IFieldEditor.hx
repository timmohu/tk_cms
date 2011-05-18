package cms.mvcs.modules.content.view.components.form;

/**
 * ...
 * @author Tim Kendrick
 */

import mohu.messages.Dispatcher;

interface IFieldEditor {

	var name(default, setName):String;
	var label(default, setLabel):String;
	var disabled(default, setDisabled):Bool;
	var parameters(default, setParameters):Hash<Dynamic>;
	var value(default, setValue):Dynamic;
	
	var onChanged(default, null):Dispatcher;
	
}