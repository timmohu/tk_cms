package cms.mvcs.core.popup.messages;
import cms.mvcs.core.popup.view.controllers.IPopupViewController;
import mohu.messages.Message;

/**
 * ...
 * @author Tim Kendrick
 */

class PopupMessage extends Message {

	public var popup:IPopupViewController;
	public var prioritise:Bool;
	
	public function new(?popup:IPopupViewController, ?prioritise:Bool = true) {
		super();
		this.popup = popup;
		this.prioritise = prioritise;
	}
	
	override public function clone():Message {
		return new PopupMessage(this.popup, this.prioritise);
	}
}