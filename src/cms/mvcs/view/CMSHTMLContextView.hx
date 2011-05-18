package cms.mvcs.view;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.core.panel.view.controllers.IPanelContainerViewController;

import js.Dom;
import js.Lib;

import cms.mvcs.view.controllers.dom.ViewControllerDOM;

import mohu.js.mvcs.view.HTMLContextView;

class CMSHTMLContextView extends HTMLContextView, implements ICMSContextView {

	public function new() {
		var domNode:HtmlDom = Lib.document.createElement("div");
		domNode.className = "container";
		super(domNode);
	}
	
	public function addPanelContainer(panelContainer:IPanelContainerViewController):Void {
		if (!Std.is(panelContainer, ViewControllerDOM)) throw "Specified panel container is not a ViewControllerDOM";
		domNode.appendChild(cast(panelContainer, ViewControllerDOM).domNode);
	}
	
}