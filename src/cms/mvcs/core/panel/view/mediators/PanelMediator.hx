package cms.mvcs.core.panel.view.mediators;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.core.panel.model.PanelModel;
import mohu.messages.Message;

import cms.mvcs.core.panel.view.controllers.IPanelViewController;

import cms.mvcs.modules.content.view.components.form.IFieldEditor;

import cms.mvcs.view.mediators.CMSMediator;

class PanelMediator extends CMSMediator {
	
	@inject("view") public var panelView:IPanelViewController;
	
	public var model(default, setModel):PanelModel;
	
	override public function onRemove():Void {
		this.model = null;
		super.onRemove();
	}
	
	public function setModel(value:PanelModel):PanelModel {
		if (model != null) {
			panelView.title = null;
			panelView.help = null;
			panelView.content = null;
			panelView.buttons = null;
			
			if (model.contentView != null) model.contentView.onChanged.removeListener(_handleContentViewValueChanged);
			
			model.onTitleChanged.removeListener(_handleTitleChanged);
			model.onHelpChanged.removeListener(_handleHelpChanged);
			model.onContentViewChanged.removeListener(_handleContentViewChanged);
			model.onButtonsChanged.removeListener(_handleButtonsChanged);
		}
		model = value;
		if (model != null) {
			panelView.title = model.title;
			panelView.help = model.help;
			panelView.content = model.contentView;
			panelView.buttons = model.buttons;
			
			if (model.contentView != null) model.contentView.onChanged.addListener(_handleContentViewValueChanged);
			
			model.onTitleChanged.addListener(_handleTitleChanged);
			model.onHelpChanged.addListener(_handleHelpChanged);
			model.onContentViewChanged.addListener(_handleContentViewChanged);
			model.onButtonsChanged.addListener(_handleButtonsChanged);
		}
		return model;
	}
	
	private function _handleContentViewValueChanged(message:Message):Void {
		panelView.highlighted = model.contentView.changed;
	}
	
	private function _handleTitleChanged(message:Message):Void {
		panelView.title = model.title;
	}
	
	private function _handleHelpChanged(message:Message):Void {
		panelView.help = model.help;
	}
	
	private function _handleContentViewChanged(message:Message):Void {
		if (model.contentView != null) model.contentView.onChanged.removeListener(_handleContentViewValueChanged);
		panelView.content = model.contentView;
		if (model.contentView != null) model.contentView.onChanged.addListener(_handleContentViewValueChanged);
	}
	
	private function _handleButtonsChanged(message:Message):Void {
		panelView.buttons = model.buttons;
	}
}