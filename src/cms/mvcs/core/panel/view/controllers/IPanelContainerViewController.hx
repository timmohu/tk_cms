package cms.mvcs.core.panel.view.controllers;

/**
 * ...
 * @author Tim Kendrick
 */

import mohu.mvcs.view.IViewController;

interface IPanelContainerViewController implements IViewController {
	
	function addPanelAt(panel:IPanelViewController, index:Int):Void;
	function removePanelAt(index:Int):Void;
	function movePanel(oldIndex:Int, newIndex:Int):Void;
	
}