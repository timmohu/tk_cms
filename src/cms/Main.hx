package cms;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.CMSHTMLHub;
import cms.mvcs.CMSHub;

import cms.mvcs.messages.InitMessage;

import haxe.rtti.Infos;

import js.Lib;

class Main implements Infos {
	
	private static var __instance:Main;
	
	private var _hub:CMSHub;

    public static function main() {
		__instance = new Main();
	}
	
	public function new() {
		_hub = new CMSHTMLHub();
		Lib.document.body.appendChild(_hub.contextView.view);
		_hub.onInit.dispatch(new InitMessage("cms/api/"));
	}
}