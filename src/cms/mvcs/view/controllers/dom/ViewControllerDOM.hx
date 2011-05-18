package cms.mvcs.view.controllers.dom;

/**
 * ...
 * @author Tim Kendrick
 */


import cms.mvcs.view.components.dom.IViewComponentDOM;
import js.Dom;
import mohu.mvcs.view.IViewController;

import mohu.messages.Dispatcher;

import mohu.mvcs.view.ViewController;

class ViewControllerDOM extends ViewController, implements IViewController, implements IViewComponentDOM {
	
	public var domNode(default, null):HtmlDom;
	
	public function new(view:HtmlDom) {
		super(view);
		
		this.domNode = view;
		
		if (this.domNode != null) untyped this.domNode.viewController = this;
	}
}