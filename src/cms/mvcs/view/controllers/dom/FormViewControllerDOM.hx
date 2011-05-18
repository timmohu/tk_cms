package cms.mvcs.view.controllers.dom;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.view.components.dom.IViewComponentDOM;
import cms.mvcs.view.controllers.IFormViewController;

import js.Dom;

import mohu.messages.Dispatcher;

class FormViewControllerDOM extends ViewControllerDOM, implements IFormViewController {
	
	public var formNode(default, null):Form;

	public var onReset(default, null):Dispatcher;
	public var onSubmit(default, null):Dispatcher;
	
	public function new(view:Form) {
		onReset = new Dispatcher(this);
		onSubmit = new Dispatcher(this);
		
		super(view);
		
		var self:FormViewControllerDOM = this;
		
		view.onreset = function(event:Event):Void {
			self.onReset.dispatch();
		};
		
		view.onsubmit = function(event:Event):Bool {
			if (!self.validate()) return false;
			self.onSubmit.dispatch();
			return true;
		};
	}
	
	public function validate():Bool {
		return true;
	}
	
	public function submit():Void {
		formNode.submit();
	}
	
}