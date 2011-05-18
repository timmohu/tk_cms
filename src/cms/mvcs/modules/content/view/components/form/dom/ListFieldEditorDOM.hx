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

class ListFieldEditorDOM extends FieldEditorDOM, implements IListFieldEditor {
	
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
	
	private var _listID:String;
	private var _selectedIndex:Int;
	private var _itemIDs:Array<String>;
	
	public function new() {
		_listID = "list" + Std.random(0x7FFFFFFE);
		
		super();
		
		this.onItemSelected = new Dispatcher(this);
		this.onItemAddClicked = new Dispatcher(this);
		this.onItemRemoveClicked = new Dispatcher(this);
		
		allowAdd = false;
		allowCreate = true;
		allowRemove = false;
		allowDelete = true;
		
		_selectedIndex = -1;
		
		_itemIDs = new Array<String>();
		
		this.containerNode = Lib.document.createElement("div");
		this.containerNode.className = "listField";
		
		this.listNode = Lib.document.createElement("ul");
		this.listNode.className = "listFieldList";
		this.containerNode.appendChild(this.listNode);
		
		this.addButtonNode = Lib.document.createElement("button");
		this.addButtonNode.className = "listFieldAddButton";
		this.addButtonNode.appendChild(Lib.document.createTextNode("Add an item"));
		this.addButtonNode.onclick = _handleAddButtonClicked;
		untyped __js__("$(this.addButtonNode).button()");
		this.containerNode.appendChild(this.addButtonNode);
		
		this.valueNode.appendChild(this.containerNode);
		
		var self:ListFieldEditorDOM = this;
		untyped __js__("$(this.listNode).sortable({update: function(event, ui) { self._handleListSorted(); }})");
	}
	
	private function _handleListSorted():Void {
		var items:Array<ReferenceVO> = cast(this.value, ListVO).items;
		var itemIDs:Array<String> = untyped __js__("$(this.listNode).sortable(\"toArray\")");
		for (i in 0..._itemIDs.length) {
			if (itemIDs[i] == _itemIDs[i]) continue;
			for (j in 0..._itemIDs.length) {
				if (_itemIDs[j] != itemIDs[i]) continue;
				_itemIDs.insert(i, _itemIDs.splice(j, 1)[0]);
				items.insert(i, items.splice(j, 1)[0]);
				break;
			}
		}
		onChanged.dispatch();
	}
	
	public function insertItemAt(item:ReferenceVO, index:Int):ReferenceVO {
		var items:Array<ReferenceVO> = cast(this.value, ListVO).items;
		if (index < 0) throw "Index '" + value + "' is out of range";
		if (index > items.length) throw "Index '" + value + "' is out of range";
		_addItemNode(item, index);
		items.insert(index, item);
		if (index < _selectedIndex) _selectedIndex++;
		onChanged.dispatch();
		return item;
	}
	
	public function removeItemAt(index:Int):ReferenceVO {
		var items:Array<ReferenceVO> = cast(this.value, ListVO).items;
		if (index < 0) throw "Index '" + value + "' is out of range";
		if (index >= items.length) throw "Index '" + value + "' is out of range";
		this.listNode.removeChild(this.listNode.childNodes[index]);
		var item:ReferenceVO = items.splice(index, 1)[0];
		if (index == _selectedIndex) this.selectedIndex = _selectedIndex + 1;
		if (index < _selectedIndex) _selectedIndex--;
		onChanged.dispatch();
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
		if ((value != null) && !Std.is(value, ListVO)) throw "Specified value '" + value + "' is not a ListVO";
		
		while (this.listNode.hasChildNodes()) this.listNode.removeChild(this.listNode.firstChild);
		
		if (value != null) for (item in cast(value, ListVO).items) _addItemNode(item);
		
		super.setValue(value);
		return this.value;
	}
	
	private function _addItemNode(item:ReferenceVO, index:Int = -1):ReferenceVO {
		var listItemID:String = _listID + "-" + Std.random(0x7FFFFFFE);
		
		var itemNode:HtmlDom = Lib.document.createElement("li");
		itemNode.className = "listFieldItem";
		itemNode.id = listItemID;
		
		var radioNode:Radio = untyped Lib.document.createElement("input");
		radioNode.type = "radio";
		radioNode.name = _listID;
		radioNode.id = listItemID + "-radio";
		radioNode.value = Std.string(item.id);
		radioNode.onchange = _handleRadioNodeSelected;
		itemNode.appendChild(radioNode);
		
		var labelNode:HtmlDom = Lib.document.createElement("label");
		labelNode.className = "listFieldItemLabel";
		Reflect.setField(labelNode, "htmlFor", listItemID + "-radio");
		labelNode.innerHTML = item.table + " #" + item.id;
		itemNode.appendChild(labelNode);
		
		var removeNode:Button = untyped Lib.document.createElement("button");
		removeNode.className = "listFieldItemRemove";
		removeNode.innerHTML = "Remove this item";
		itemNode.appendChild(removeNode);
		
		if ((index == -1) || (index == this.listNode.childNodes.length)) {
			this.listNode.appendChild(itemNode);
			_itemIDs.push(listItemID);
		} else {
			this.listNode.insertBefore(itemNode, this.listNode.childNodes[index]);
			_itemIDs.insert(index, listItemID);
		}
		
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
		if (value >= (this.value == null ? 0 : cast(this.value, ListVO).items.length)) throw "Selected index '" + value + "' is out of range";
		_selectedIndex = value;
		onItemSelected.dispatch(new ItemSelectedMessage(selectedItem));
		return value;
	}
	
	private function getSelectedItem():ReferenceVO {
		return (_selectedIndex == -1 ? null : cast(this.value, ListVO).items[_selectedIndex]);
	}
	
	private function setSelectedItem(value:ReferenceVO):ReferenceVO {
		var items:Array<ReferenceVO> = cast(this.value, ListVO).items;
		if (value == null) {
			this.selectedIndex = -1;
		} else {
			for (i in 0...items.length) {
				if ((items[i].table != value.table) || (items[i].id != value.id)) continue;
				this.selectedIndex = i;
				break;
			}
		}
		return value;
	}
}