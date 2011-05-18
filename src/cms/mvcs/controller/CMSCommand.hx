package cms.mvcs.controller;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.CMSHub;

import mohu.mvcs.controller.Command;

class CMSCommand extends Command {
	
	@inject("hub") public var cmsHub:CMSHub;
	
}