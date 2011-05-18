package cms.mvcs.core.panel.view.controllers;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.core.panel.view.components.IPanelButtons;
import mohu.messages.Dispatcher;

import mohu.mvcs.view.IViewController;

interface IPanelViewController implements IViewController {
	
	public var title(default, setTitle):String;
	public var help(default, setHelp):String;
	public var content(default, setContent):IPanelContentViewController;
	public var buttons(default, setButtons):IPanelButtons;
	public var highlighted(default, setHighlighted):Bool;
	
	public var onAdded(default, null):Dispatcher;
	
}