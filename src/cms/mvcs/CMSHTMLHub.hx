package cms.mvcs;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.core.panel.view.components.dom.PanelButtonsDOM;

import cms.mvcs.core.panel.view.components.IPanelButtons;

import cms.mvcs.core.panel.view.controllers.dom.PanelContainerViewControllerDOM;
import cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM;

import cms.mvcs.core.panel.view.controllers.IPanelContainerViewController;
import cms.mvcs.core.panel.view.controllers.IPanelViewController;

import cms.mvcs.core.popup.view.controllers.dom.PopupContainerViewControllerDOM;

import cms.mvcs.core.popup.view.controllers.IPopupContainerViewController;

import cms.mvcs.modules.content.view.components.form.dom.HiddenFieldEditorDOM;
import cms.mvcs.modules.content.view.components.form.dom.LabelFieldEditorDOM;
import cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM;
import cms.mvcs.modules.content.view.components.form.dom.PasswordFieldEditorDOM;
import cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM;
import cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM;
import cms.mvcs.modules.content.view.components.form.dom.TextareaFieldEditorDOM;
import cms.mvcs.modules.content.view.components.form.dom.TextFieldEditorDOM;

import cms.mvcs.modules.content.view.components.form.IHiddenFieldEditor;
import cms.mvcs.modules.content.view.components.form.ILabelFieldEditor;
import cms.mvcs.modules.content.view.components.form.IListFieldEditor;
import cms.mvcs.modules.content.view.components.form.IPasswordFieldEditor;
import cms.mvcs.modules.content.view.components.form.IReferenceFieldEditor;
import cms.mvcs.modules.content.view.components.form.ISmartlistFieldEditor;
import cms.mvcs.modules.content.view.components.form.ITextareaFieldEditor;
import cms.mvcs.modules.content.view.components.form.ITextFieldEditor;

import cms.mvcs.modules.content.view.controllers.panels.dom.ItemEditorViewControllerDOM;

import cms.mvcs.modules.content.view.controllers.panels.IItemEditorViewController;

import cms.mvcs.modules.content.view.controllers.popups.dom.AddReferencePopupViewControllerDOM;

import cms.mvcs.modules.content.view.controllers.popups.IAddReferencePopupViewController;

import cms.mvcs.view.CMSHTMLContextView;

import js.Lib;








class CMSHTMLHub extends CMSHub {

	public function new() {
		Lib.setErrorHandler(_handleError);
		
		super(new CMSHTMLContextView());
	}
	
	private function _handleError(message:String, stack:Array<String>):Bool {
		stack = stack.slice(0);
		stack.reverse();
		Lib.alert(message + "\n" + " at " + stack.join("\n at "));
		return true;
	}
	
	override private function initView():Void {
		super.initView();
		
		injector.mapClass(IPopupContainerViewController, PopupContainerViewControllerDOM);
		injector.mapClass(IAddReferencePopupViewController, AddReferencePopupViewControllerDOM);
		
		injector.mapClass(IPanelContainerViewController, PanelContainerViewControllerDOM);
		injector.mapClass(IPanelViewController, PanelViewControllerDOM);
		injector.mapClass(IItemEditorViewController, ItemEditorViewControllerDOM);
		injector.mapClass(IPanelButtons, PanelButtonsDOM);
		
		injector.mapClass(IHiddenFieldEditor, HiddenFieldEditorDOM);
		injector.mapClass(ILabelFieldEditor, LabelFieldEditorDOM);
		injector.mapClass(ITextFieldEditor, TextFieldEditorDOM);
		injector.mapClass(IPasswordFieldEditor, PasswordFieldEditorDOM);
		injector.mapClass(ITextareaFieldEditor, TextareaFieldEditorDOM);
		injector.mapClass(IListFieldEditor, ListFieldEditorDOM);
		injector.mapClass(ISmartlistFieldEditor, SmartlistFieldEditorDOM);
		injector.mapClass(IReferenceFieldEditor, ReferenceFieldEditorDOM);
	}
}