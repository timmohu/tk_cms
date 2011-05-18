package cms.mvcs.core.panel.view.components;

/**
 * ...
 * @author Tim Kendrick
 */

import mohu.messages.Dispatcher;

interface IPanelButtons {

	var submitDisabled(default, setSubmitDisabled):Bool;
	var resetDisabled(default, setResetDisabled):Bool;
	
	var onSubmitClicked(default, null):Dispatcher;
	var onResetClicked(default, null):Dispatcher;
	
}