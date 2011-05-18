package cms.mvcs.core.popup.view.controllers.dom;
import cms.mvcs.view.controllers.dom.ViewControllerDOM;
import js.Dom;
import mohu.messages.Dispatcher;

/**
 * ...
 * @author Tim Kendrick
 */

class PopupViewControllerDOM extends ViewControllerDOM, implements IPopupViewController {

	public var onCloseClicked(default, null):Dispatcher;
	
	public function new(view:HtmlDom) {
		onCloseClicked = new Dispatcher(this);
		
		super(view);
	}
	
}