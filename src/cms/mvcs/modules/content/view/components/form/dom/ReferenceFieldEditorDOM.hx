package cms.mvcs.modules.content.view.components.form.dom;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.core.api.model.vo.ListVO;
import cms.mvcs.modules.content.messages.AddReferenceMessage;
import cms.mvcs.modules.content.messages.ItemSelectedMessage;
import cms.mvcs.modules.content.view.components.form.IListFieldEditor;
import js.Dom;
import js.Lib;
import cms.mvcs.core.api.model.vo.ListVO;
import cms.mvcs.core.api.model.vo.ReferenceVO;
import mohu.messages.Dispatcher;

class ReferenceFieldEditorDOM extends FieldEditorDOM, implements IReferenceFieldEditor {
	
	public var datatype:String;
	
	public var allowAdd:Bool;
	public var allowCreate:Bool;
	public var allowRemove:Bool;
	public var allowDelete:Bool;
	
	public var selectedIndex(getSelectedIndex, setSelectedIndex):Int;
	public var selectedItem(getSelectedItem, setSelectedItem):ReferenceVO;
	
	public var containerNode(default, null):HtmlDom;
	public var addButtonNode(default, null):HtmlDom;
	public var listNode(default, null):HtmlDom;
	
	public var onItemSelected(default, null):Dispatcher;
	public var onItemAddClicked(default, null):Dispatcher;
	public var onItemRemoveClicked(default, null):Dispatcher;
	
	private var _selectedIndex:Int;
	
	public function new() {
		super();
		
		this.onItemSelected = new Dispatcher(this);
		this.onItemAddClicked = new Dispatcher(this);
		this.onItemRemoveClicked = new Dispatcher(this);
		
		allowAdd = false;
		allowCreate = true;
		allowRemove = false;
		allowDelete = true;
		
		_selectedIndex = -1;
		
		this.containerNode = Lib.document.createElement("div");
		this.containerNode.className = "referenceField";
		
		this.addButtonNode = Lib.document.createElement("button");
		this.addButtonNode.className = "listFieldAddButton";
		this.addButtonNode.appendChild(Lib.document.createTextNode("Add an item"));
		this.addButtonNode.onclick = _handleAddButtonClicked;
		untyped __js__("$(this.addButtonNode).button()");
		this.containerNode.appendChild(this.addButtonNode);
		
		this.valueNode.appendChild(this.containerNode);
	}
	
	public function insertItemAt(item:ReferenceVO, index:Int):ReferenceVO {
		if (index != 0) throw "Index '" + value + "' is out of range";
		this.value = item;
		return item;
	}
	
	public function removeItemAt(index:Int):ReferenceVO {
		if (index != 0) throw "Index '" + value + "' is out of range";
		var item:ReferenceVO = this.value;
		if (item != null) this.value = null;
		return item;
	}
	
	private function _handleRadioNodeSelected(event:Event):Void {
		this.selectedItem = new ReferenceVO(this.datatype, Std.parseInt(untyped event.target.value));
	}
	
	private function _handleAddButtonClicked(event:Event):Void {
		this.onItemAddClicked.dispatch(new AddReferenceMessage(this));
	}
	
	private function _handleRemoveButtonClicked(event:Event):Void {
		this.onItemRemoveClicked.dispatch();
	}
	
	override private function setValue(value:Dynamic):Dynamic {
		if (value == this.value) return;
		if ((value != null) && !Std.is(value, ReferenceVO)) throw "Specified value '" + value + "' is not a ReferenceVO";
		
		while (this.listNode.hasChildNodes()) this.listNode.removeChild(this.listNode.firstChild);
		
		if (value != null) _addItemNode(value); else this.listNode.appendChild(this.addButtonNode);
		
		super.setValue(value);
		return this.value;
	}
	
	private function _addItemNode(item:ReferenceVO, index:Int = -1):ReferenceVO {
		var referenceID:String = "referenceField" + Std.random(0x7FFFFFFE);
		
		var itemNode:HtmlDom = Lib.document.createElement("div");
		itemNode.className = "referenceFieldItem";
		itemNode.id = referenceID;
		
		var radioNode:Radio = untyped Lib.document.createElement("input");
		radioNode.type = "radio";
		radioNode.name = referenceID;
		radioNode.id = referenceID + "-radio";
		radioNode.value = Std.string(item.id);
		radioNode.onchange = _handleRadioNodeSelected;
		itemNode.appendChild(radioNode);
		
		var labelNode:HtmlDom = Lib.document.createElement("label");
		labelNode.className = "referenceFieldItemLabel";
		Reflect.setField(labelNode, "htmlFor", referenceID + "-radio");
		labelNode.innerHTML = item.table + " #" + item.id;
		itemNode.appendChild(labelNode);
		
		var removeNode:Button = untyped Lib.document.createElement("button");
		removeNode.className = "referenceFieldItemRemove";
		removeNode.innerHTML = "Remove this item";
		itemNode.appendChild(removeNode);
		
		this.listNode.appendChild(itemNode);
		
		untyped __js__("$(removeNode).button({icons:{primary:\"ui-icon-close\"}, text: false})");
		untyped __js__("$(radioNode).button()");
		untyped __js__("$(itemNode).buttonset()");
		
		return item;
	}
	
	private function getSelectedIndex():Int {
		return _selectedIndex;
	}
	
	private function setSelectedIndex(value:Int):Int {
		if (value < -1) throw "Selected index '" + value + "' is out of range";
		if (value >= 1) throw "Selected index '" + value + "' is out of range";
		_selectedIndex = value;
		onItemSelected.dispatch(new ItemSelectedMessage(selectedItem));
		return value;
	}
	
	private function getSelectedItem():ReferenceVO {
		return (_selectedIndex == -1 ? null : this.value);
	}
	
	private function setSelectedItem(value:ReferenceVO):ReferenceVO {
		if (value == null) {
			this.selectedIndex = -1;
		} else {
			if (value == this.value) this.selectedIndex = 0;
		}
		return value;
	}
}