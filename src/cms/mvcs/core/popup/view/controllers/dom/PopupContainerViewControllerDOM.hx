package cms.mvcs.core.popup.view.controllers.dom;
import cms.mvcs.core.popup.view.controllers.IPopupViewController;
import cms.mvcs.view.components.dom.IViewComponentDOM;
import cms.mvcs.view.controllers.dom.ViewControllerDOM;
import mohu.messages.Dispatcher;
import mohu.messages.Message;

/**
 * ...
 * @author Tim Kendrick
 */

class PopupContainerViewControllerDOM extends ViewControllerDOM, implements IPopupContainerViewController {
	
	public var currentPopup(default, null):IPopupViewController;
	public var popupQueue(getPopupQueue, null):Array<IPopupViewController>;
	
	private var _popupQueue:Array<IPopupViewController>;
	
	public function new() {
		
		_popupQueue = new Array<IPopupViewController>();
		
		super(null);
		
	}
	
	public function showPopup(popup:IPopupViewController, ?prioritise:Bool = true):IPopupViewController {
		if (popup == null) throw "No popup specified";
		if (!Std.is(popup, IViewComponentDOM)) throw "Specified popup does not implement the IPopupViewController interface";
		if ((currentPopup == null) && (popupQueue.length == 0)) {
			_createPopup(popup);
		} else {
			if (prioritise) popupQueue.unshift(popup); else popupQueue.push(popup);
		}
		return popup;
	}
	
	public function hidePopup(popup:IPopupViewController):IPopupViewController {
		if (popup == null) throw "No popup specified";
		if (!Std.is(popup, IViewComponentDOM)) throw "Specified popup does not implement the IPopupViewController interface";
		var queueIndex:Int = -1;
		if (popup != this.currentPopup) {
			for (i in 0..._popupQueue.length) {
				if (_popupQueue[i] != popup) continue;
				queueIndex = i;
				break;
			}
			if (queueIndex == -1) throw "Specified popup is not active in this PopupViewContainer";
		}
		if (queueIndex == -1) {
			_destroyPopup(popup);
			if (_popupQueue.length > 0) _createPopup(_popupQueue.shift());
		} else {
			_popupQueue.splice(queueIndex, 1);
		}
		return popup;
	}
	
	private function _createPopup(popup:IPopupViewController):Void {
		popup.onCloseClicked.addListener(_handlePopupClosed);
		untyped __js__("$(popup.domNode).dialog({modal: true, resizable: false, draggable: false, beforeclose: function(event, ui) { popup.onCloseClicked.dispatch(); return false; }})");
		this.currentPopup = popup;
	}
	
	private function _destroyPopup(popup:IPopupViewController):Void {
		popup.onCloseClicked.removeListener(_handlePopupClosed);
		untyped __js__("$(popup.domNode).unbind(\"dialogbeforeclose\"); $(popup.domNode).dialog(\"close\"); $(popup.domNode).dialog(\"destroy\")");
		this.currentPopup = null;
	}
	
	private function _handlePopupClosed(message:Message):Void {
		this.hidePopup(cast(message.currentTarget, IPopupViewController));
	}
	
	private function getPopupQueue():Array<IPopupViewController> {
		return _popupQueue.slice(0);
	}
}