package cms.mvcs.core.panel.model;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.core.panel.messages.PanelContainerMessage;
import js.Lib;

import mohu.messages.Dispatcher;

import mohu.mvcs.model.Model;

class PanelContainerModel extends Model {

	public var onPanelAdded(default, null):Dispatcher;
	public var onPanelRemoved(default, null):Dispatcher;
	public var onPanelMoved(default, null):Dispatcher;
	
	public var panels(getPanels, never):Array<PanelModel>;
	public var numPanels(getNumPanels, never):Int;
	
	private var _panels:Array<PanelModel>;
	
	public function new() {
		_panels = new Array<PanelModel>();
		
		onPanelAdded = new Dispatcher(this);
		onPanelRemoved = new Dispatcher(this);
		onPanelMoved = new Dispatcher(this);
	}
	
	public function getPanelAt(index:Int):PanelModel {
		return _panels[index];
	}
	
	public function getPanelIndex(panel:PanelModel):Int {
		for (i in 0..._panels.length) if (_panels[i] == panel) return i;
		return -1;
	}
	
	public function addPanel(panel:PanelModel):PanelModel {
		if (panel == null) throw "No panel specified";
		for (i in 0..._panels.length) if (_panels[i] == panel) return movePanelAt(i, _panels.length - 1);
		_panels.push(panel);
		panel.container = this;
		onPanelAdded.dispatch(new PanelContainerMessage(this, panel, -1, _panels.length - 1), panel);
		return panel;
	}
	
	public function addPanelAt(panel:PanelModel, index:Int):PanelModel {
		if (panel == null) throw "No panel specified";
		if ((index < 0) || (index > _panels.length)) throw "Index out of range";
		for (i in 0..._panels.length) if (_panels[i] == panel) return movePanelAt(i, index);
		_panels.insert(index, panel);
		panel.container = this;
		onPanelAdded.dispatch(new PanelContainerMessage(this, panel, -1, index), panel);
		return panel;
	}
	
	public function movePanel(panel:PanelModel, newIndex:Int):PanelModel {
		if (panel == null) throw "No panel specified";
		if ((newIndex < 0) || (newIndex >= _panels.length)) throw "Index out of range";
		for (i in 0..._panels.length) {
			if (_panels[i] != panel) continue;
			var panel:PanelModel = _panels.splice(i, 1)[0];
			_panels.insert(newIndex, panel);
			onPanelMoved.dispatch(new PanelContainerMessage(this, panel, i, newIndex), panel);
			return panel;
		}
		throw "Specified panel is not a child of this container";
		return null;
	}
	
	public function movePanelAt(oldIndex:Int, newIndex:Int):PanelModel {
		if ((oldIndex < 0) || (oldIndex >= _panels.length)) throw "Index out of range";
		if ((newIndex < 0) || (newIndex >= _panels.length)) throw "Index out of range";
		var panel:PanelModel = _panels.splice(oldIndex, 1)[0];
		_panels.insert(newIndex, panel);
		onPanelMoved.dispatch(new PanelContainerMessage(this, panel, oldIndex, newIndex), panel);
		return panel;
	}
	
	public function removePanel(panel:PanelModel):PanelModel {
		if (panel == null) throw "No panel specified";
		for (i in 0..._panels.length) {
			if (_panels[i] != panel) continue;
			var panel:PanelModel = _panels.splice(i, 1)[0];
			panel.container = null;
			onPanelRemoved.dispatch(new PanelContainerMessage(this, panel, i, -1), panel);
			return panel;
		}
		throw "Specified panel is not a child of this container";
		return null;
	}
	
	public function removePanelAt(index:Int):PanelModel {
		if ((index < 0) || (index >= _panels.length)) throw "Index out of range";
		var panel:PanelModel = _panels.splice(index, 1)[0];
		panel.container = null;
		onPanelRemoved.dispatch(new PanelContainerMessage(this, panel, index, -1), panel);
		return panel;
	}
	
	private function getPanels():Array<PanelModel> {
		return _panels.slice(0);
	}
	
	private function getNumPanels():Int {
		return _panels.length;
	}
	
}