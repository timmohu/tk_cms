package cms.mvcs.controller;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.messages.ErrorMessage;

import haxe.Stack;

class ErrorCommand extends CMSCommand {
	
	@inject("message") public var errorMessage:ErrorMessage;

	override public function execute():Void {
		var stack:Array<StackItem> = Stack.exceptionStack().slice(0);
		stack.reverse();
		var error:String = errorMessage.message + "\n" + " at " + stack.join("\n at ");
		#if js
		js.Lib.alert(error);
		#else
		trace(error);
		#end
		
	}
	
}