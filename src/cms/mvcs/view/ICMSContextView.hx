package cms.mvcs.view;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.core.panel.view.controllers.IPanelContainerViewController;

import mohu.mvcs.view.IContextView;

interface ICMSContextView implements IContextView {

	function addPanelContainer(panelContainer:IPanelContainerViewController):Void;
	
}