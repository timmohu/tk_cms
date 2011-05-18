package cms.mvcs.modules.content.messages;
import cms.mvcs.core.api.model.vo.ReferenceVO;
import cms.mvcs.modules.content.view.components.form.IItemFieldEditor;
import mohu.messages.Message;

/**
 * ...
 * @author Tim Kendrick
 */

class AddReferenceMessage extends Message {

	public var editor:IItemFieldEditor;
	public var listIndex:Int;
	public var item:ReferenceVO;
	
	public function new(?editor:IItemFieldEditor = null, ?listIndex:Int = 0, ?item:ReferenceVO = null) {
		super();
		this.editor = editor;
		this.listIndex = listIndex;
		this.item = item;
	}
	
	override public function clone():Message {
		return new AddReferenceMessage(this.editor, this.listIndex, this.item);
	}
}