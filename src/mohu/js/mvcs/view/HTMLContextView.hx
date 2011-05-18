package mohu.js.mvcs.view;

import js.Dom;
import js.Lib;

import mohu.messages.Dispatcher;
import mohu.messages.Message;

import mohu.mvcs.view.IContextView;
import mohu.mvcs.view.IViewController;

/**
 * ...
 * @author Tim Kendrick
 */

class HTMLContextView implements IContextView {

	public var domNode(default, null):HtmlDom;
	public var view(default, null):Dynamic;
	
	public var onViewAdded(default, null):Dispatcher;
	public var onViewRemoved(default, null):Dispatcher;
	
	public function new(view:HtmlDom, ?watchAdded:Bool = false, ?watchRemoved:Bool = false) {
		if (view == null) throw "No view specified";
		this.view = view;
		domNode = view;
		
		onViewAdded = new Dispatcher(this);
		onViewRemoved = new Dispatcher(this);
		
		if (!Lib.isIE) {
			if (watchAdded) untyped view.addEventListener("DOMNodeInserted", _handleDOMNodeInserted, true);
			if (watchRemoved) untyped view.addEventListener("DOMNodeRemoved", _handleDOMNodeRemoved, true);
		}
	}
	
	private function _handleDOMNodeInserted(event:Event):Void {
		_addChildNodes(event.target);
	}
	
	private function _handleDOMNodeRemoved(event:Event):Void {
		_removeChildNodes(event.target);
	}
	
	private function _addChildNodes(parentNode:HtmlDom):Void {
		if (parentNode != view) {
			var viewController:IViewController = untyped parentNode.viewController;
			if (viewController != null) onViewAdded.dispatch(new Message(), viewController);
		}
		for (i in 0...parentNode.childNodes.length) _addChildNodes(parentNode.childNodes[i]);
	}
	
	private function _removeChildNodes(parentNode:HtmlDom):Void {
		for (i in 0...parentNode.childNodes.length) _removeChildNodes(parentNode.childNodes[i]);
		if (parentNode != view) {
			var viewController:IViewController = untyped event.target.viewController;
			if (viewController != null) onViewRemoved.dispatch(new Message(), viewController);
		}
	}
	
}