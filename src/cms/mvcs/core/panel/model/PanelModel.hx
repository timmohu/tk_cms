package cms.mvcs.core.panel.model;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.core.panel.view.components.IPanelButtons;
import cms.mvcs.core.panel.view.controllers.IPanelViewController;
import cms.mvcs.core.panel.view.controllers.IPanelContentViewController;
import mohu.mvcs.view.IViewController;

import mohu.mvcs.model.Model;
import mohu.messages.Dispatcher;

class PanelModel extends Model {
	
	public var title(default, setTitle):String;
	public var help(default, setHelp):String;
	public var contentView(default, setContentView):IPanelContentViewController;
	public var buttons(default, setButtons):IPanelButtons;
	
	public var onTitleChanged(default, null):Dispatcher;
	public var onHelpChanged(default, null):Dispatcher;
	public var onContentViewChanged(default, null):Dispatcher;
	public var onButtonsChanged(default, null):Dispatcher;
	
	public var container:PanelContainerModel;
	
	public function new(?title:String = null, ?help:String = null, ?contentView:IPanelContentViewController = null, ?buttons:IPanelButtons) {
		onTitleChanged = new Dispatcher(this);
		onHelpChanged = new Dispatcher(this);
		onContentViewChanged = new Dispatcher(this);
		onButtonsChanged = new Dispatcher(this);
		
		this.title = title;
		this.help = help;
		this.contentView = contentView;
		this.buttons = buttons;
	}
	
	private function setTitle(value:String):String {
		if (title == value) return title;
		title = value;
		onTitleChanged.dispatch();
		return title;
	}
	
	private function setHelp(value:String):String {
		if (help == value) return help;
		help = value;
		onHelpChanged.dispatch();
		return help;
	}
	
	private function setContentView(value:IPanelContentViewController):IPanelContentViewController {
		if (contentView == value) return contentView;
		contentView = value;
		onContentViewChanged.dispatch();
		return contentView;
	}
	
	private function setButtons(value:IPanelButtons):IPanelButtons {
		if (buttons == value) return buttons;
		buttons = value;
		onButtonsChanged.dispatch();
		return buttons;
	}
}