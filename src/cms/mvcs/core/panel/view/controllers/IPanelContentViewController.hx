package cms.mvcs.core.panel.view.controllers;
import mohu.mvcs.view.IViewController;

/**
 * ...
 * @author Tim Kendrick
 */

import mohu.messages.Dispatcher;

interface IPanelContentViewController implements IViewController {

	public var changed(default, null):Bool;
	
	public var onChanged(default, null):Dispatcher;
	
}