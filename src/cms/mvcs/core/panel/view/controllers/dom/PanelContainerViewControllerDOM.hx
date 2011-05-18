package cms.mvcs.core.panel.view.controllers.dom;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.core.panel.view.controllers.IPanelContainerViewController;
import cms.mvcs.core.panel.view.controllers.IPanelContentViewController;
import cms.mvcs.core.panel.view.controllers.IPanelViewController;
import cms.mvcs.view.components.dom.IViewComponentDOM;

import js.Dom;
import js.Lib;

import cms.mvcs.view.controllers.dom.ViewControllerDOM;

class PanelContainerViewControllerDOM extends ViewControllerDOM, implements IPanelContainerViewController {
	
	private var _table:HtmlDom;
	private var _tableRow:HtmlDom;
	
	private var _panels:Array<IPanelViewController>;
	
	private var _panelHeight:Int;
	private var _panelContainerHeight:Int;
	
	public function new() {
		_panels = new Array<IPanelViewController>();
		
		var domNode:HtmlDom = Lib.document.createElement("div");
		domNode.className = "panelContainer";
		
		super(domNode);
		
		_table = Lib.document.createElement("table");
		_table.className = "panelContainerTable";
		domNode.appendChild(_table);
		
		_tableRow = Lib.document.createElement("tr");
		_tableRow.className = "panelContainerRow";
		_table.appendChild(_tableRow);
		
		var self:PanelContainerViewControllerDOM = this;
		untyped __js__("$(window).resize(function() { self._updateHeight(); } )");
	}
	
	private function _updateHeight():Void {
		_table.style.display = 'none';
		_panelContainerHeight = this.domNode.offsetHeight;
		_table.style.display = '';
		for (panel in _panels) cast(panel.content, IViewComponentDOM).domNode.parentNode.style.height = Math.max(0, _panelContainerHeight - _panelHeight) + "px";
	}
	
	public function addPanelAt(panel:IPanelViewController, index:Int):Void {
		if (!Std.is(panel, ViewControllerDOM)) throw "Specified panel is not a ViewControllerDOM";
		
		var tableCell:HtmlDom = Lib.document.createElement("td");
		tableCell.className = "panelContainerCell";
		if (index == _tableRow.childNodes.length) _tableRow.appendChild(tableCell); else _tableRow.insertBefore(tableCell, _tableRow.childNodes[index]);
				
		if (_panelContainerHeight == null) _panelContainerHeight = this.domNode.offsetHeight;
		
		var panelNode:HtmlDom = cast(panel, ViewControllerDOM).domNode;
		tableCell.appendChild(panelNode);
		
		if (_panelHeight == null) {
			cast(panel.content, IViewComponentDOM).domNode.parentNode.style.display = "none";
			_panelHeight = Std.int(untyped __js__("$(panel.domNode).outerHeight(true)")) + 1 + 1;
			cast(panel.content, IViewComponentDOM).domNode.parentNode.style.display = "";
		}
		
		cast(panel.content, IViewComponentDOM).domNode.parentNode.style.height = (_panelContainerHeight - _panelHeight) + "px";
		
		_panels.insert(index, panel);
		
		var currentScroll:Int = Lib.document.body.scrollLeft;
		untyped __js__("currentScroll = document.documentElement.scrollLeft || currentScroll");
		var maxScroll:Int = this.domNode.offsetWidth - Lib.document.body.clientWidth;
		if (currentScroll <= maxScroll) untyped __js__("$(\"html,body\").animate({scrollLeft : maxScroll}, \"fast\")");
		
		untyped __js__("$(panel.domNode).css({opacity:0, position:'relative', left: '-50px'}).animate({opacity: 1, left: 0}, \"fast\")");
	}
	
	public function removePanelAt(index:Int):Void {
		var originalWidth:String = _tableRow.style.width;
		untyped __js__("$(this._tableRow).css({width: this._tableRow.offsetWidth}).delay(\"fast\").css({width: originalWidth})");
		_tableRow.removeChild(_tableRow.childNodes[index]);
		
		_panels.splice(index, 1);
	}
	
	public function movePanel(oldIndex:Int, newIndex:Int):Void {
		var tableCell:HtmlDom = _tableRow.childNodes[oldIndex];
		_tableRow.removeChild(tableCell);
		if (newIndex == _tableRow.childNodes.length) _tableRow.appendChild(tableCell); else _tableRow.insertBefore(tableCell, _tableRow.childNodes[newIndex]);
		_panels.insert(newIndex, _panels.splice(oldIndex, 1)[0]);
	}
	
}
