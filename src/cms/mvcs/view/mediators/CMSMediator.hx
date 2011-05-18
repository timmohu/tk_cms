package cms.mvcs.view.mediators;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.CMSHub;

import mohu.mvcs.view.Mediator;

class CMSMediator extends Mediator {

	@inject("hub") public var cmsHub:CMSHub;
	
}