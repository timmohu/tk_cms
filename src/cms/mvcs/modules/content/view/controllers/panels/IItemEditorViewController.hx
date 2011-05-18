package cms.mvcs.modules.content.view.controllers.panels;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.core.api.model.vo.ReferenceVO;
import cms.mvcs.core.panel.view.controllers.IPanelContentViewController;

import cms.mvcs.modules.content.view.components.form.IFieldEditor;

import mohu.messages.Dispatcher;

interface IItemEditorViewController implements IPanelContentViewController {
	
	public var fieldEditors(default, setFieldEditors):Array<IFieldEditor>;
	public var value(default, setValue):Hash<Dynamic>;
	public var selectedItem(default, null):ReferenceVO;
	
	public var onItemSelected(default, null):Dispatcher;
	public var onItemAddClicked(default, null):Dispatcher;
	public var onItemRemoveClicked(default, null):Dispatcher;
	
}