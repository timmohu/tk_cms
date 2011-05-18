package cms.mvcs.core.panel.model;
import mohu.messages.Dispatcher;
import mohu.mvcs.model.Model;

/**
 * ...
 * @author Tim Kendrick
 */

class PanelContentModel extends Model {

	private var changed(default, null):Bool;
	private var onChanged(default, null):Dispatcher;
	
	public function new() {
		onChanged = new Dispatcher(this);
	}
	
}