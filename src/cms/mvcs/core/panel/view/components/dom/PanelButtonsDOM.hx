package cms.mvcs.core.panel.view.components.dom;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.core.panel.view.components.IPanelButtons;
import cms.mvcs.view.components.dom.IViewComponentDOM;

import js.Dom;
import js.Lib;

import mohu.messages.Dispatcher;

class PanelButtonsDOM implements IPanelButtons, implements IViewComponentDOM {
	
	public var domNode(default, null):HtmlDom;
	public var submitNode(default, null):FormElement;
	public var resetNode(default, null):FormElement;

	public var submitDisabled(default, setSubmitDisabled):Bool;
	public var resetDisabled(default, setResetDisabled):Bool;
	
	public var onSubmitClicked(default, null):Dispatcher;
	public var onResetClicked(default, null):Dispatcher;

	public function new() {
		onSubmitClicked = new Dispatcher(this);
		onResetClicked = new Dispatcher(this);
		
		domNode = Lib.document.createElement("div");
		domNode.className = "panelButtons";
		
		resetNode = untyped Lib.document.createElement("input");
		resetNode.type = "button";
		resetNode.value = "Reset";
		resetNode.className = "resetButton";
		domNode.appendChild(resetNode);
		
		submitNode = untyped Lib.document.createElement("input");
		submitNode.type = "button";
		submitNode.value = "Submit";
		submitNode.className = "submitButton";
		domNode.appendChild(submitNode);
		
		var self:PanelButtonsDOM = this;
		
		resetNode.onclick = function(event:Event):Void { self.onResetClicked.dispatch(); };
		submitNode.onclick = function(event:Event):Void { self.onSubmitClicked.dispatch(); };
		
		untyped __js__("$(this.resetNode).button()");
		untyped __js__("$(this.submitNode).button()");
	}
	
	private function setSubmitDisabled(value:Bool):Bool {
		submitNode.disabled = value;
		return submitDisabled = value;
	}
	
	private function setResetDisabled(value:Bool):Bool {
		resetNode.disabled = value;
		return resetDisabled = value;
	}
	
}