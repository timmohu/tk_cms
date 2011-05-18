package cms.mvcs.core.panel.view.controllers.dom;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.view.components.dom.IViewComponentDOM;
import mohu.messages.Dispatcher;
import mohu.messages.Message;
import mohu.mvcs.view.IViewController;

import cms.mvcs.core.panel.view.components.IPanelButtons;

import cms.mvcs.core.panel.view.controllers.IPanelViewController;
import cms.mvcs.core.panel.view.controllers.IPanelContentViewController;

import cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM;

import cms.mvcs.modules.content.view.components.form.IFieldEditor;

import cms.mvcs.view.controllers.dom.ViewControllerDOM;

import js.Dom;
import js.Lib;

class PanelViewControllerDOM extends ViewControllerDOM, implements IPanelViewController {
	
	private static var __numPanels:Int;
	
	public var title(default, setTitle):String;
	public var help(default, setHelp):String;
	public var content(default, setContent):IPanelContentViewController;
	public var buttons(default, setButtons):IPanelButtons;
	public var highlighted(default, setHighlighted):Bool;
	
	public var onAdded(default, null):Dispatcher;
	
	private var _panelID:Int;
	
	private var _headerNode:HtmlDom;
	private var _titleNode:HtmlDom;
	private var _helpNode:HtmlDom;
	
	private var _contentNode:HtmlDom;
	
	private var _footerNode:HtmlDom;
	private var _separatorNode:HtmlDom;
	private var _buttonsNode:HtmlDom;
	
	public function new() {
		if (__numPanels == null) __numPanels = 0;
		_panelID = __numPanels++;
		
		onAdded = new Dispatcher(this);
		
		highlighted = false;
		
		var domNode:HtmlDom = Lib.document.createElement("div");
		domNode.className = "panel";
		
		_headerNode = Lib.document.createElement("div");
		_headerNode.className = "panelHeader";
		domNode.appendChild(_headerNode);
		
		_contentNode = Lib.document.createElement("div");
		_contentNode.className = "panelContent";
		domNode.appendChild(_contentNode);
		
		_footerNode = Lib.document.createElement("div");
		_footerNode.className = "panelFooter";
		domNode.appendChild(_footerNode);
		
		_titleNode = Lib.document.createElement("div");
		_titleNode.className = "panelTitle";
		_headerNode.appendChild(_titleNode);
		
		_helpNode = Lib.document.createElement("div");
		_helpNode.className = "panelHelp";
		_headerNode.appendChild(_helpNode);
		
		_separatorNode = Lib.document.createElement("hr");
		_separatorNode.className = "panelSeparator";
		_footerNode.appendChild(_separatorNode);
		
		_buttonsNode = Lib.document.createElement("div");
		_buttonsNode.className = "panelButtons";
		_footerNode.appendChild(_buttonsNode);
		
		super(domNode);
		
		domNode.className += " ui-widget ui-widget-content";
		_titleNode.className += " ui-widget-header";
	}
	
	private function setTitle(value:String):String {
		title = value;
		_titleNode.innerHTML = title;
		return title;
	}
	
	private function setHelp(value:String):String {
		help = value;
		_helpNode.innerHTML = help;
		return help;
	}
	
	private function setContent(value:IPanelContentViewController):IPanelContentViewController {
		if ((value != null) && !Std.is(value, IViewComponentDOM)) throw "Specified content view must implement the IViewComponentDOM interface";
		if (content != null) _contentNode.removeChild(cast(content, IViewComponentDOM).domNode);
		if (value != null) {
			_contentNode.appendChild(cast(value, IViewComponentDOM).domNode);
			cast(value, IViewComponentDOM).domNode.id = "panel" + _panelID + "-editor";
		}
		return content = value;
	}
	
	private function setButtons(value:IPanelButtons):IPanelButtons {
		if ((value != null) && !Std.is(value, IViewComponentDOM)) throw "Specified panel buttons must implement the IViewComponentDOM interface";
		if (buttons != null) _buttonsNode.removeChild(cast(buttons, IViewComponentDOM).domNode);
		buttons = value;
		if (buttons != null) _buttonsNode.appendChild(cast(value, IViewComponentDOM).domNode);
		return buttons;
	}
	
	private function setHighlighted(value:Bool):Bool {
		if (highlighted == null) highlighted = false;
		if (highlighted == value) return highlighted;
		domNode.style.border = (value ? "1px solid #FF0000" : null);
		return highlighted = value;
	}
	
}