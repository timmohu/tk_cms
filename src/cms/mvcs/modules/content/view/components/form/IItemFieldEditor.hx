package cms.mvcs.modules.content.view.components.form;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.core.api.model.vo.ReferenceVO;

import mohu.messages.Dispatcher;

interface IItemFieldEditor implements IFieldEditor {

	public var datatype:String;
	
	public var allowAdd:Bool;
	public var allowCreate:Bool;
	public var allowRemove:Bool;
	public var allowDelete:Bool;
	
	public var selectedIndex(getSelectedIndex, setSelectedIndex):Int;
	public var selectedItem(getSelectedItem, setSelectedItem):ReferenceVO;
	
	public var onItemSelected(default, null):Dispatcher;
	public var onItemAddClicked(default, null):Dispatcher;
	public var onItemRemoveClicked(default, null):Dispatcher;
	
	public function insertItemAt(item:ReferenceVO, index:Int):ReferenceVO;
	public function removeItemAt(index:Int):ReferenceVO;
}