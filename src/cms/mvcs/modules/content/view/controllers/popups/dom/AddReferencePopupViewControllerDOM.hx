package cms.mvcs.modules.content.view.controllers.popups.dom;
import cms.mvcs.core.api.model.vo.ReferenceVO;
import cms.mvcs.core.popup.view.controllers.dom.PopupViewControllerDOM;
import cms.mvcs.modules.content.messages.AddReferenceMessage;
import cms.mvcs.modules.content.view.controllers.popups.IAddReferencePopupViewController;
import js.Dom;
import js.Lib;
import mohu.messages.Dispatcher;

/**
 * ...
 * @author Tim Kendrick
 */

class AddReferencePopupViewControllerDOM extends PopupViewControllerDOM, implements IAddReferencePopupViewController {

	public var datatype:String;
	public var allowCreate(default, setAllowCreate):Bool;
	public var items(default, setItems):Array<ReferenceVO>;
	public var selectedItem(default, null):ReferenceVO;
	
	public var onItemSelected(default, null):Dispatcher;
	
	private var _referenceAdderID:String;
	
	private var _listNode:HtmlDom;
	private var _createButton:Button;
	private var _cancelButton:Button;
	private var _okButton:Button;
	
	public function new() {
		this.onItemSelected = new Dispatcher(this);
		
		_referenceAdderID = "referenceAdder" + Std.random(0x7FFFFFFE);
		
		var domNode:HtmlDom = Lib.document.createElement("div");
		domNode.className = "referenceAdder";
		domNode.title = "Add an item";
		
		var titleNode:HtmlDom = Lib.document.createElement("div");
		titleNode.className = "referenceAdderTitle";
		titleNode.appendChild(Lib.document.createTextNode("Choose an item from the list below:"));
		domNode.appendChild(titleNode);
		
		_listNode = Lib.document.createElement("ul");
		_listNode.className = "referenceAdderList";
		domNode.appendChild(_listNode);
		
		var separatorNode:HtmlDom = Lib.document.createElement("hr");
		separatorNode.className = "panelSeparator";
		domNode.appendChild(separatorNode);
		
		_createButton = untyped Lib.document.createElement("button");
		_createButton.className = "referenceAdderCreateButton";
		_createButton.appendChild(Lib.document.createTextNode("Create new"));
		_createButton.onclick = _handleCreateButtonClicked;
		untyped __js__("$(this._createButton).button({icons: {primary: \"ui-icon-plus\"}})");
		domNode.appendChild(_createButton);
		
		_cancelButton = untyped Lib.document.createElement("button");
		_cancelButton.className = "referenceAdderCancelButton";
		_cancelButton.appendChild(Lib.document.createTextNode("Cancel"));
		_cancelButton.onclick = _handleCancelButtonClicked;
		untyped __js__("$(this._cancelButton).button()");
		domNode.appendChild(_cancelButton);
		
		_okButton = untyped Lib.document.createElement("button");
		_okButton.className = "referenceAdderOKButton";
		_okButton.appendChild(Lib.document.createTextNode("OK"));
		_okButton.onclick = _handleOKButtonClicked;
		_okButton.disabled = true;
		untyped __js__("$(this._okButton).button()");
		domNode.appendChild(_okButton);
		
		super(domNode);
		
		this.allowCreate = false;
	}
	
	private function _handleCreateButtonClicked(event:Event):Void {
		this.selectedItem = new ReferenceVO(this.datatype, -1);
		onItemSelected.dispatch();
	}
	
	private function _handleCancelButtonClicked(event:Event):Void {
		onCloseClicked.dispatch();
	}
	
	private function _handleOKButtonClicked(event:Event):Void {
		onItemSelected.dispatch();
	}
	
	private function setItems(value:Array<ReferenceVO>):Array<ReferenceVO> {
		while (_listNode.hasChildNodes()) _listNode.removeChild(_listNode.firstChild);
		if (value != null) for (item in value) _addItemNode(item);
		return value;
	}
	
	private function _addItemNode(item:ReferenceVO):ReferenceVO {
		var referenceAdderItemID:String = _referenceAdderID + "-" + Std.random(0x7FFFFFFE);
		
		var itemNode:HtmlDom = Lib.document.createElement("li");
		itemNode.className = "referenceAdderItem";
		itemNode.id = referenceAdderItemID;
		
		var radioNode:Radio = untyped Lib.document.createElement("input");
		radioNode.type = "radio";
		radioNode.name = _referenceAdderID;
		radioNode.id = referenceAdderItemID + "-radio";
		radioNode.value = Std.string(item.id);
		radioNode.onchange = _handleRadioNodeSelected;
		itemNode.appendChild(radioNode);
		
		var labelNode:HtmlDom = Lib.document.createElement("label");
		labelNode.className = "referenceAdderItemLabel";
		Reflect.setField(labelNode, "htmlFor", referenceAdderItemID + "-radio");
		labelNode.innerHTML = item.table + " #" + item.id;
		itemNode.appendChild(labelNode);
		
		_listNode.appendChild(itemNode);
		
		untyped __js__("$(radioNode).button()");
		
		return item;
	}
	
	private function _handleRadioNodeSelected(event:Event):Void {
		this.selectedItem = new ReferenceVO(this.datatype, Std.parseInt(untyped event.target.value));
		_okButton.disabled = false;
		untyped __js__("$(this._okButton).button(\"enable\")");
	}
	
	private function setAllowCreate(value:Bool):Bool {
		this.allowCreate = value;
		//_createButton.style.visibility = (this.allowCreate ? "visible" : "hidden");
		return this.allowCreate;
	}
}