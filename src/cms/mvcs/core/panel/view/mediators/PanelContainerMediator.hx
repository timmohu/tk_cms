package cms.mvcs.core.panel.view.mediators;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.CMSHub;

import cms.mvcs.core.panel.messages.PanelContainerMessage;

import cms.mvcs.core.panel.model.PanelContainerModel;

import cms.mvcs.core.panel.view.controllers.IPanelContainerViewController;
import cms.mvcs.core.panel.view.controllers.IPanelViewController;

import cms.mvcs.view.mediators.CMSMediator;

import mohu.messages.Message;

class PanelContainerMediator extends CMSMediator {

	@inject("hub") public var hub:CMSHub;
	@inject("view") public var panelContainerViewController:IPanelContainerViewController;
	
	public var model(default, setModel):PanelContainerModel;
	
	private var _panelViewControllers:Array<IPanelViewController>;
	
	public function new() {
		_panelViewControllers = new Array<IPanelViewController>();
	}
	
	override public function onRemove():Void {
		this.model = null;
		super.onRemove();
	}
	
	private function setModel(value:PanelContainerModel):PanelContainerModel {
		if (model != null) {
			model.onPanelAdded.removeListener(_handlePanelAdded);
			model.onPanelRemoved.removeListener(_handlePanelRemoved);
			model.onPanelMoved.removeListener(_handlePanelMoved);
			
			for (i in 0..._panelViewControllers.length) panelContainerViewController.removePanelAt(0);
			
			_panelViewControllers = new Array<IPanelViewController>();
		}
		
		model = value;
		
		if (model != null) {
			model.onPanelAdded.addListener(_handlePanelAdded);
			model.onPanelRemoved.addListener(_handlePanelRemoved);
			model.onPanelMoved.addListener(_handlePanelMoved);
			
			for (panelModel in model.panels) {
				var panelViewController:IPanelViewController = injector.getClassInstance(IPanelViewController);
				panelContainerViewController.addPanelAt(panelViewController, _panelViewControllers.length);
				_panelViewControllers.push(panelViewController);
			}
		}
		return model;
	}
	
	private function _handlePanelAdded(message:Message):Void {
		var panelContainerMessage:PanelContainerMessage = cast(message, PanelContainerMessage);
		var panelViewController:IPanelViewController = injector.getClassInstance(IPanelViewController);
		var panelMediator:PanelMediator = cast(cmsHub.mediatorMap.createMediator(panelViewController, PanelMediator), PanelMediator);
		panelMediator.model = panelContainerMessage.panelModel;
		panelContainerViewController.addPanelAt(panelViewController, panelContainerMessage.newIndex);
		_panelViewControllers.insert(panelContainerMessage.newIndex, panelViewController);
	}
	
	private function _handlePanelMoved(message:Message):Void {
		var panelContainerMessage:PanelContainerMessage = cast(message, PanelContainerMessage);
		var panelViewController:IPanelViewController = _panelViewControllers[panelContainerMessage.oldIndex];
		panelContainerViewController.movePanel(panelContainerMessage.oldIndex, panelContainerMessage.newIndex);
		_panelViewControllers.splice(panelContainerMessage.oldIndex, 1);
		_panelViewControllers.insert(panelContainerMessage.newIndex, panelViewController);
	}
	
	private function _handlePanelRemoved(message:Message):Void {
		var panelContainerMessage:PanelContainerMessage = cast(message, PanelContainerMessage);
		var panelViewController:IPanelViewController = _panelViewControllers[panelContainerMessage.oldIndex];
		panelContainerViewController.removePanelAt(panelContainerMessage.oldIndex);
		_panelViewControllers.splice(panelContainerMessage.oldIndex, 1);
	}
}
