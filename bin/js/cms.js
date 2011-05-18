$estr = function() { return js.Boot.__string_rec(this,''); }
if(typeof core=='undefined') core = {}
if(typeof haxe=='undefined') haxe = {}
if(!haxe.rtti) haxe.rtti = {}
haxe.rtti.Infos = function() { }
haxe.rtti.Infos.__name__ = ["haxe","rtti","Infos"];
haxe.rtti.Infos.prototype.__class__ = haxe.rtti.Infos;
if(typeof mohu=='undefined') mohu = {}
if(!mohu.mvcs) mohu.mvcs = {}
mohu.mvcs.Actor = function() { }
mohu.mvcs.Actor.__name__ = ["mohu","mvcs","Actor"];
mohu.mvcs.Actor.prototype.injector = null;
mohu.mvcs.Actor.prototype._injector = null;
mohu.mvcs.Actor.prototype.onRegister = function() {
	$s.push("mohu.mvcs.Actor::onRegister");
	var $spos = $s.length;
	null;
	$s.pop();
}
mohu.mvcs.Actor.prototype.onRemove = function() {
	$s.push("mohu.mvcs.Actor::onRemove");
	var $spos = $s.length;
	null;
	$s.pop();
}
mohu.mvcs.Actor.prototype.__class__ = mohu.mvcs.Actor;
mohu.mvcs.Actor.__interfaces__ = [haxe.rtti.Infos];
if(!mohu.mvcs.controller) mohu.mvcs.controller = {}
mohu.mvcs.controller.Command = function() { }
mohu.mvcs.controller.Command.__name__ = ["mohu","mvcs","controller","Command"];
mohu.mvcs.controller.Command.__super__ = mohu.mvcs.Actor;
for(var k in mohu.mvcs.Actor.prototype ) mohu.mvcs.controller.Command.prototype[k] = mohu.mvcs.Actor.prototype[k];
mohu.mvcs.controller.Command.prototype.message = null;
mohu.mvcs.controller.Command.prototype.hub = null;
mohu.mvcs.controller.Command.prototype.execute = function() {
	$s.push("mohu.mvcs.controller.Command::execute");
	var $spos = $s.length;
	null;
	$s.pop();
}
mohu.mvcs.controller.Command.prototype.__class__ = mohu.mvcs.controller.Command;
if(typeof cms=='undefined') cms = {}
if(!cms.mvcs) cms.mvcs = {}
if(!cms.mvcs.controller) cms.mvcs.controller = {}
cms.mvcs.controller.CMSCommand = function() { }
cms.mvcs.controller.CMSCommand.__name__ = ["cms","mvcs","controller","CMSCommand"];
cms.mvcs.controller.CMSCommand.__super__ = mohu.mvcs.controller.Command;
for(var k in mohu.mvcs.controller.Command.prototype ) cms.mvcs.controller.CMSCommand.prototype[k] = mohu.mvcs.controller.Command.prototype[k];
cms.mvcs.controller.CMSCommand.prototype.cmsHub = null;
cms.mvcs.controller.CMSCommand.prototype.__class__ = cms.mvcs.controller.CMSCommand;
cms.mvcs.controller.InitCommand = function() { }
cms.mvcs.controller.InitCommand.__name__ = ["cms","mvcs","controller","InitCommand"];
cms.mvcs.controller.InitCommand.__super__ = cms.mvcs.controller.CMSCommand;
for(var k in cms.mvcs.controller.CMSCommand.prototype ) cms.mvcs.controller.InitCommand.prototype[k] = cms.mvcs.controller.CMSCommand.prototype[k];
cms.mvcs.controller.InitCommand.prototype.initMessage = null;
cms.mvcs.controller.InitCommand.prototype.configModel = null;
cms.mvcs.controller.InitCommand.prototype.structureModel = null;
cms.mvcs.controller.InitCommand.prototype.execute = function() {
	$s.push("cms.mvcs.controller.InitCommand::execute");
	var $spos = $s.length;
	this.configModel.apiURL = this.initMessage.apiURL;
	this.cmsHub.onRetrieveTypesFailed.addListener($closure(this,"_handleRetrieveTypesFailed"));
	this.cmsHub.onRetrieveTypesCompleted.addListener($closure(this,"_handleRetrieveTypesCompleted"));
	this.cmsHub.onRetrieveTypes.dispatch(new cms.mvcs.core.api.messages.structure.RetrieveTypesMessage());
	$s.pop();
}
cms.mvcs.controller.InitCommand.prototype._handleRetrieveTypesFailed = function(message) {
	$s.push("cms.mvcs.controller.InitCommand::_handleRetrieveTypesFailed");
	var $spos = $s.length;
	this.cmsHub.onRetrieveTypesFailed.removeListener($closure(this,"_handleRetrieveTypesFailed"));
	this.cmsHub.onRetrieveTypesCompleted.removeListener($closure(this,"_handleRetrieveTypesCompleted"));
	$s.pop();
}
cms.mvcs.controller.InitCommand.prototype._handleRetrieveTypesCompleted = function(message) {
	$s.push("cms.mvcs.controller.InitCommand::_handleRetrieveTypesCompleted");
	var $spos = $s.length;
	this.cmsHub.onRetrieveTypesFailed.removeListener($closure(this,"_handleRetrieveTypesFailed"));
	this.cmsHub.onRetrieveTypesCompleted.removeListener($closure(this,"_handleRetrieveTypesCompleted"));
	var retrieveTypesMessage = (function($this) {
		var $r;
		var $t = message;
		if(core.Std["is"]($t,cms.mvcs.core.api.messages.structure.RetrieveTypesMessage)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this));
	this.structureModel.setTypes(retrieveTypesMessage.types);
	this.structureModel.rootType = retrieveTypesMessage.rootType;
	this.cmsHub.onStartup.dispatch();
	$s.pop();
}
cms.mvcs.controller.InitCommand.prototype.__class__ = cms.mvcs.controller.InitCommand;
if(!mohu.mvcs.view) mohu.mvcs.view = {}
mohu.mvcs.view.Mediator = function() { }
mohu.mvcs.view.Mediator.__name__ = ["mohu","mvcs","view","Mediator"];
mohu.mvcs.view.Mediator.__super__ = mohu.mvcs.Actor;
for(var k in mohu.mvcs.Actor.prototype ) mohu.mvcs.view.Mediator.prototype[k] = mohu.mvcs.Actor.prototype[k];
mohu.mvcs.view.Mediator.prototype.viewController = null;
mohu.mvcs.view.Mediator.prototype.__class__ = mohu.mvcs.view.Mediator;
if(!cms.mvcs.view) cms.mvcs.view = {}
if(!cms.mvcs.view.mediators) cms.mvcs.view.mediators = {}
cms.mvcs.view.mediators.CMSMediator = function() { }
cms.mvcs.view.mediators.CMSMediator.__name__ = ["cms","mvcs","view","mediators","CMSMediator"];
cms.mvcs.view.mediators.CMSMediator.__super__ = mohu.mvcs.view.Mediator;
for(var k in mohu.mvcs.view.Mediator.prototype ) cms.mvcs.view.mediators.CMSMediator.prototype[k] = mohu.mvcs.view.Mediator.prototype[k];
cms.mvcs.view.mediators.CMSMediator.prototype.cmsHub = null;
cms.mvcs.view.mediators.CMSMediator.prototype.__class__ = cms.mvcs.view.mediators.CMSMediator;
if(!cms.mvcs.core) cms.mvcs.core = {}
if(!cms.mvcs.core.panel) cms.mvcs.core.panel = {}
if(!cms.mvcs.core.panel.view) cms.mvcs.core.panel.view = {}
if(!cms.mvcs.core.panel.view.mediators) cms.mvcs.core.panel.view.mediators = {}
cms.mvcs.core.panel.view.mediators.PanelContainerMediator = function(p) { if( p === $_ ) return; {
	$s.push("cms.mvcs.core.panel.view.mediators.PanelContainerMediator::new");
	var $spos = $s.length;
	this._panelViewControllers = new core.Array();
	$s.pop();
}}
cms.mvcs.core.panel.view.mediators.PanelContainerMediator.__name__ = ["cms","mvcs","core","panel","view","mediators","PanelContainerMediator"];
cms.mvcs.core.panel.view.mediators.PanelContainerMediator.__super__ = cms.mvcs.view.mediators.CMSMediator;
for(var k in cms.mvcs.view.mediators.CMSMediator.prototype ) cms.mvcs.core.panel.view.mediators.PanelContainerMediator.prototype[k] = cms.mvcs.view.mediators.CMSMediator.prototype[k];
cms.mvcs.core.panel.view.mediators.PanelContainerMediator.prototype.hub = null;
cms.mvcs.core.panel.view.mediators.PanelContainerMediator.prototype.panelContainerViewController = null;
cms.mvcs.core.panel.view.mediators.PanelContainerMediator.prototype.model = null;
cms.mvcs.core.panel.view.mediators.PanelContainerMediator.prototype._panelViewControllers = null;
cms.mvcs.core.panel.view.mediators.PanelContainerMediator.prototype.onRemove = function() {
	$s.push("cms.mvcs.core.panel.view.mediators.PanelContainerMediator::onRemove");
	var $spos = $s.length;
	this.setModel(null);
	cms.mvcs.view.mediators.CMSMediator.prototype.onRemove.call(this);
	$s.pop();
}
cms.mvcs.core.panel.view.mediators.PanelContainerMediator.prototype.setModel = function(value) {
	$s.push("cms.mvcs.core.panel.view.mediators.PanelContainerMediator::setModel");
	var $spos = $s.length;
	if(this.model != null) {
		this.model.onPanelAdded.removeListener($closure(this,"_handlePanelAdded"));
		this.model.onPanelRemoved.removeListener($closure(this,"_handlePanelRemoved"));
		this.model.onPanelMoved.removeListener($closure(this,"_handlePanelMoved"));
		{
			var _g1 = 0, _g = this._panelViewControllers.length;
			while(_g1 < _g) {
				var i = _g1++;
				this.panelContainerViewController.removePanelAt(0);
			}
		}
		this._panelViewControllers = new core.Array();
	}
	this.model = value;
	if(this.model != null) {
		this.model.onPanelAdded.addListener($closure(this,"_handlePanelAdded"));
		this.model.onPanelRemoved.addListener($closure(this,"_handlePanelRemoved"));
		this.model.onPanelMoved.addListener($closure(this,"_handlePanelMoved"));
		{
			var _g = 0, _g1 = this.model.getPanels();
			while(_g < _g1.length) {
				var panelModel = _g1[_g];
				++_g;
				var panelViewController = this.injector.getClassInstance(cms.mvcs.core.panel.view.controllers.IPanelViewController);
				this.panelContainerViewController.addPanelAt(panelViewController,this._panelViewControllers.length);
				this._panelViewControllers.push(panelViewController);
			}
		}
	}
	{
		var $tmp = this.model;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.core.panel.view.mediators.PanelContainerMediator.prototype._handlePanelAdded = function(message) {
	$s.push("cms.mvcs.core.panel.view.mediators.PanelContainerMediator::_handlePanelAdded");
	var $spos = $s.length;
	var panelContainerMessage = (function($this) {
		var $r;
		var $t = message;
		if(core.Std["is"]($t,cms.mvcs.core.panel.messages.PanelContainerMessage)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this));
	var panelViewController = this.injector.getClassInstance(cms.mvcs.core.panel.view.controllers.IPanelViewController);
	var panelMediator = (function($this) {
		var $r;
		var $t = $this.cmsHub.mediatorMap.createMediator(panelViewController,cms.mvcs.core.panel.view.mediators.PanelMediator);
		if(core.Std["is"]($t,cms.mvcs.core.panel.view.mediators.PanelMediator)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this));
	panelMediator.setModel(panelContainerMessage.panelModel);
	this.panelContainerViewController.addPanelAt(panelViewController,panelContainerMessage.newIndex);
	this._panelViewControllers.insert(panelContainerMessage.newIndex,panelViewController);
	$s.pop();
}
cms.mvcs.core.panel.view.mediators.PanelContainerMediator.prototype._handlePanelMoved = function(message) {
	$s.push("cms.mvcs.core.panel.view.mediators.PanelContainerMediator::_handlePanelMoved");
	var $spos = $s.length;
	var panelContainerMessage = (function($this) {
		var $r;
		var $t = message;
		if(core.Std["is"]($t,cms.mvcs.core.panel.messages.PanelContainerMessage)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this));
	var panelViewController = this._panelViewControllers[panelContainerMessage.oldIndex];
	this.panelContainerViewController.movePanel(panelContainerMessage.oldIndex,panelContainerMessage.newIndex);
	this._panelViewControllers.splice(panelContainerMessage.oldIndex,1);
	this._panelViewControllers.insert(panelContainerMessage.newIndex,panelViewController);
	$s.pop();
}
cms.mvcs.core.panel.view.mediators.PanelContainerMediator.prototype._handlePanelRemoved = function(message) {
	$s.push("cms.mvcs.core.panel.view.mediators.PanelContainerMediator::_handlePanelRemoved");
	var $spos = $s.length;
	var panelContainerMessage = (function($this) {
		var $r;
		var $t = message;
		if(core.Std["is"]($t,cms.mvcs.core.panel.messages.PanelContainerMessage)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this));
	var panelViewController = this._panelViewControllers[panelContainerMessage.oldIndex];
	this.panelContainerViewController.removePanelAt(panelContainerMessage.oldIndex);
	this._panelViewControllers.splice(panelContainerMessage.oldIndex,1);
	$s.pop();
}
cms.mvcs.core.panel.view.mediators.PanelContainerMediator.prototype.__class__ = cms.mvcs.core.panel.view.mediators.PanelContainerMediator;
if(!cms.mvcs.core.api) cms.mvcs.core.api = {}
if(!cms.mvcs.core.api.services) cms.mvcs.core.api.services = {}
cms.mvcs.core.api.services.IHttpService = function() { }
cms.mvcs.core.api.services.IHttpService.__name__ = ["cms","mvcs","core","api","services","IHttpService"];
cms.mvcs.core.api.services.IHttpService.prototype.data = null;
cms.mvcs.core.api.services.IHttpService.prototype.error = null;
cms.mvcs.core.api.services.IHttpService.prototype.onLoadFailed = null;
cms.mvcs.core.api.services.IHttpService.prototype.onLoadCompleted = null;
cms.mvcs.core.api.services.IHttpService.prototype.load = null;
cms.mvcs.core.api.services.IHttpService.prototype.__class__ = cms.mvcs.core.api.services.IHttpService;
if(!cms.mvcs.core.api.services.content) cms.mvcs.core.api.services.content = {}
cms.mvcs.core.api.services.content.IRetrieveItemsService = function() { }
cms.mvcs.core.api.services.content.IRetrieveItemsService.__name__ = ["cms","mvcs","core","api","services","content","IRetrieveItemsService"];
cms.mvcs.core.api.services.content.IRetrieveItemsService.prototype.items = null;
cms.mvcs.core.api.services.content.IRetrieveItemsService.prototype.retrieveItems = null;
cms.mvcs.core.api.services.content.IRetrieveItemsService.prototype.__class__ = cms.mvcs.core.api.services.content.IRetrieveItemsService;
cms.mvcs.core.api.services.content.IRetrieveItemsService.__interfaces__ = [cms.mvcs.core.api.services.IHttpService];
if(!mohu.mvcs.model) mohu.mvcs.model = {}
mohu.mvcs.model.Model = function() { }
mohu.mvcs.model.Model.__name__ = ["mohu","mvcs","model","Model"];
mohu.mvcs.model.Model.__super__ = mohu.mvcs.Actor;
for(var k in mohu.mvcs.Actor.prototype ) mohu.mvcs.model.Model.prototype[k] = mohu.mvcs.Actor.prototype[k];
mohu.mvcs.model.Model.prototype.__class__ = mohu.mvcs.model.Model;
if(!cms.mvcs.core.panel.model) cms.mvcs.core.panel.model = {}
cms.mvcs.core.panel.model.PanelContentModel = function(p) { if( p === $_ ) return; {
	$s.push("cms.mvcs.core.panel.model.PanelContentModel::new");
	var $spos = $s.length;
	this.onChanged = new mohu.messages.Dispatcher(this);
	$s.pop();
}}
cms.mvcs.core.panel.model.PanelContentModel.__name__ = ["cms","mvcs","core","panel","model","PanelContentModel"];
cms.mvcs.core.panel.model.PanelContentModel.__super__ = mohu.mvcs.model.Model;
for(var k in mohu.mvcs.model.Model.prototype ) cms.mvcs.core.panel.model.PanelContentModel.prototype[k] = mohu.mvcs.model.Model.prototype[k];
cms.mvcs.core.panel.model.PanelContentModel.prototype.changed = null;
cms.mvcs.core.panel.model.PanelContentModel.prototype.onChanged = null;
cms.mvcs.core.panel.model.PanelContentModel.prototype.__class__ = cms.mvcs.core.panel.model.PanelContentModel;
cms.mvcs.controller.StartupCommand = function() { }
cms.mvcs.controller.StartupCommand.__name__ = ["cms","mvcs","controller","StartupCommand"];
cms.mvcs.controller.StartupCommand.__super__ = cms.mvcs.controller.CMSCommand;
for(var k in cms.mvcs.controller.CMSCommand.prototype ) cms.mvcs.controller.StartupCommand.prototype[k] = cms.mvcs.controller.CMSCommand.prototype[k];
cms.mvcs.controller.StartupCommand.prototype.authenticationModel = null;
cms.mvcs.controller.StartupCommand.prototype.structureModel = null;
cms.mvcs.controller.StartupCommand.prototype.execute = function() {
	$s.push("cms.mvcs.controller.StartupCommand::execute");
	var $spos = $s.length;
	cms.mvcs.controller.CMSCommand.prototype.execute.call(this);
	this.authenticationModel.setCurrentUser(new cms.mvcs.core.api.model.vo.UserVO(1,"tkmaxxx","7159e6b9604e2f68e697818c26fa180f",true));
	var popupContainerViewController = this.injector.getClassInstance(cms.mvcs.core.popup.view.controllers.IPopupContainerViewController);
	this.injector.mapMetadataInstance("popup",popupContainerViewController);
	var panelContainerViewController = this.injector.getClassInstance(cms.mvcs.core.panel.view.controllers.IPanelContainerViewController);
	var panelContainerMediator = (function($this) {
		var $r;
		var $t = $this.hub.mediatorMap.createMediator(panelContainerViewController,cms.mvcs.core.panel.view.mediators.PanelContainerMediator);
		if(core.Std["is"]($t,cms.mvcs.core.panel.view.mediators.PanelContainerMediator)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this));
	var panelContainerModel = new cms.mvcs.core.panel.model.PanelContainerModel();
	panelContainerMediator.setModel(panelContainerModel);
	this.hub.contextView.view.appendChild(panelContainerViewController.view);
	this.cmsHub.onAddItemEditorPanel.dispatch(new cms.mvcs.modules.content.messages.AddItemEditorPanelMessage(panelContainerModel,this.structureModel.rootType.name,0));
	$s.pop();
}
cms.mvcs.controller.StartupCommand.prototype.__class__ = cms.mvcs.controller.StartupCommand;
if(!cms.mvcs.core.api.model) cms.mvcs.core.api.model = {}
if(!cms.mvcs.core.api.model.vo) cms.mvcs.core.api.model.vo = {}
cms.mvcs.core.api.model.vo.FieldVO = function(name,type,datatype,defaultValue,dbColumnType,dbColumnAllowNull,dbColumnParameters,dbColumnIndexed,cmsLabel,cmsEditable,cmsEditor,cmsParameters) { if( name === $_ ) return; {
	$s.push("cms.mvcs.core.api.model.vo.FieldVO::new");
	var $spos = $s.length;
	if(cmsEditable == null) cmsEditable = false;
	if(dbColumnAllowNull == null) dbColumnAllowNull = false;
	this.name = name;
	this.type = type;
	this.datatype = datatype;
	this.defaultValue = defaultValue;
	this.dbColumnType = dbColumnType;
	this.dbColumnAllowNull = dbColumnAllowNull;
	this.dbColumnParameters = dbColumnParameters;
	this.dbColumnIndexed = dbColumnIndexed;
	this.cmsLabel = cmsLabel;
	this.cmsEditable = cmsEditable;
	this.cmsEditor = cmsEditor;
	this.cmsParameters = cmsParameters;
	$s.pop();
}}
cms.mvcs.core.api.model.vo.FieldVO.__name__ = ["cms","mvcs","core","api","model","vo","FieldVO"];
cms.mvcs.core.api.model.vo.FieldVO.prototype.name = null;
cms.mvcs.core.api.model.vo.FieldVO.prototype.type = null;
cms.mvcs.core.api.model.vo.FieldVO.prototype.datatype = null;
cms.mvcs.core.api.model.vo.FieldVO.prototype.defaultValue = null;
cms.mvcs.core.api.model.vo.FieldVO.prototype.dbColumnType = null;
cms.mvcs.core.api.model.vo.FieldVO.prototype.dbColumnAllowNull = null;
cms.mvcs.core.api.model.vo.FieldVO.prototype.dbColumnParameters = null;
cms.mvcs.core.api.model.vo.FieldVO.prototype.dbColumnIndexed = null;
cms.mvcs.core.api.model.vo.FieldVO.prototype.cmsLabel = null;
cms.mvcs.core.api.model.vo.FieldVO.prototype.cmsEditable = null;
cms.mvcs.core.api.model.vo.FieldVO.prototype.cmsEditor = null;
cms.mvcs.core.api.model.vo.FieldVO.prototype.cmsParameters = null;
cms.mvcs.core.api.model.vo.FieldVO.prototype.__class__ = cms.mvcs.core.api.model.vo.FieldVO;
cms.mvcs.core.api.model.vo.FieldType = { __ename__ : ["cms","mvcs","core","api","model","vo","FieldType"], __constructs__ : ["property","reference","list","smartlist"] }
cms.mvcs.core.api.model.vo.FieldType.property = ["property",0];
cms.mvcs.core.api.model.vo.FieldType.property.toString = $estr;
cms.mvcs.core.api.model.vo.FieldType.property.__enum__ = cms.mvcs.core.api.model.vo.FieldType;
cms.mvcs.core.api.model.vo.FieldType.reference = ["reference",1];
cms.mvcs.core.api.model.vo.FieldType.reference.toString = $estr;
cms.mvcs.core.api.model.vo.FieldType.reference.__enum__ = cms.mvcs.core.api.model.vo.FieldType;
cms.mvcs.core.api.model.vo.FieldType.list = ["list",2];
cms.mvcs.core.api.model.vo.FieldType.list.toString = $estr;
cms.mvcs.core.api.model.vo.FieldType.list.__enum__ = cms.mvcs.core.api.model.vo.FieldType;
cms.mvcs.core.api.model.vo.FieldType.smartlist = ["smartlist",3];
cms.mvcs.core.api.model.vo.FieldType.smartlist.toString = $estr;
cms.mvcs.core.api.model.vo.FieldType.smartlist.__enum__ = cms.mvcs.core.api.model.vo.FieldType;
mohu.mvcs.view.MediatorMap = function(injector,contextView,mapSubclasses) { if( injector === $_ ) return; {
	$s.push("mohu.mvcs.view.MediatorMap::new");
	var $spos = $s.length;
	if(mapSubclasses == null) mapSubclasses = true;
	this._injector = injector;
	this._contextView = contextView;
	this._mapSubclasses = mapSubclasses;
	this._mediatorMappings = new core.Array();
	this._activeMediators = new core.Array();
	this._contextView.onViewAdded.addListener($closure(this,"handleViewAdded"));
	this._contextView.onViewRemoved.addListener($closure(this,"handleViewRemoved"));
	$s.pop();
}}
mohu.mvcs.view.MediatorMap.__name__ = ["mohu","mvcs","view","MediatorMap"];
mohu.mvcs.view.MediatorMap.prototype._injector = null;
mohu.mvcs.view.MediatorMap.prototype._contextView = null;
mohu.mvcs.view.MediatorMap.prototype._mapSubclasses = null;
mohu.mvcs.view.MediatorMap.prototype._mediatorMappings = null;
mohu.mvcs.view.MediatorMap.prototype._activeMediators = null;
mohu.mvcs.view.MediatorMap.prototype.mapMediator = function(viewControllerClass,mediatorClass,autoCreate,autoRemove) {
	$s.push("mohu.mvcs.view.MediatorMap::mapMediator");
	var $spos = $s.length;
	if(autoRemove == null) autoRemove = true;
	if(autoCreate == null) autoCreate = true;
	if(viewControllerClass == null) throw "No view class specified";
	if(mediatorClass == null) throw "No mediator class specified";
	{
		var _g = 0, _g1 = this._mediatorMappings;
		while(_g < _g1.length) {
			var mediatorMapping = _g1[_g];
			++_g;
			if(mediatorMapping.viewControllerClass == viewControllerClass) throw "View class " + core.Type.getClassName(viewControllerClass) + " is already mapped to " + core.Type.getClassName(mediatorMapping.mediatorClass);
		}
	}
	var mediatorMapping = { viewControllerClass : viewControllerClass, mediatorClass : mediatorClass, autoCreate : autoCreate, autoRemove : autoRemove};
	this._mediatorMappings.push(mediatorMapping);
	$s.pop();
}
mohu.mvcs.view.MediatorMap.prototype.unmapMediator = function(viewControllerClass) {
	$s.push("mohu.mvcs.view.MediatorMap::unmapMediator");
	var $spos = $s.length;
	if(viewControllerClass == null) throw "No view class specified";
	var i = -1;
	while(++i < this._mediatorMappings.length) {
		if(this._mediatorMappings[i].viewControllerClass != viewControllerClass) continue;
		this._mediatorMappings.splice(i,1);
		break;
	}
	$s.pop();
}
mohu.mvcs.view.MediatorMap.prototype.hasMediatorClass = function(viewControllerClass) {
	$s.push("mohu.mvcs.view.MediatorMap::hasMediatorClass");
	var $spos = $s.length;
	if(viewControllerClass == null) throw "No view controller class specified";
	{
		var _g = 0, _g1 = this._mediatorMappings;
		while(_g < _g1.length) {
			var mediatorMapping = _g1[_g];
			++_g;
			if(mediatorMapping.viewControllerClass == viewControllerClass) {
				$s.pop();
				return true;
			}
		}
	}
	{
		$s.pop();
		return false;
	}
	$s.pop();
}
mohu.mvcs.view.MediatorMap.prototype.getMediatorClass = function(viewControllerClass) {
	$s.push("mohu.mvcs.view.MediatorMap::getMediatorClass");
	var $spos = $s.length;
	if(viewControllerClass == null) throw "No view controller class specified";
	{
		var _g = 0, _g1 = this._mediatorMappings;
		while(_g < _g1.length) {
			var mediatorMapping = _g1[_g];
			++_g;
			if(mediatorMapping.viewControllerClass == viewControllerClass) {
				var $tmp = mediatorMapping.mediatorClass;
				$s.pop();
				return $tmp;
			}
		}
	}
	{
		$s.pop();
		return null;
	}
	$s.pop();
}
mohu.mvcs.view.MediatorMap.prototype.createMappedMediator = function(viewController,autoRemove) {
	$s.push("mohu.mvcs.view.MediatorMap::createMappedMediator");
	var $spos = $s.length;
	if(autoRemove == null) autoRemove = true;
	if(viewController == null) throw "No view controller specified";
	{
		var _g = 0, _g1 = this._activeMediators;
		while(_g < _g1.length) {
			var activeMediator = _g1[_g];
			++_g;
			if(activeMediator.viewController == viewController) throw "View controller " + core.Type.getClassName(core.Type.getClass(viewController)) + " is already being mediated by " + core.Type.getClassName(core.Type.getClass(activeMediator.mediator));
		}
	}
	var viewControllerClass = core.Type.getClass(viewController);
	{
		var _g = 0, _g1 = this._mediatorMappings;
		while(_g < _g1.length) {
			var mediatorMapping = _g1[_g];
			++_g;
			if(!(mediatorMapping.viewControllerClass == viewControllerClass) && !(this._mapSubclasses && core.Std["is"](viewController,mediatorMapping.viewControllerClass))) continue;
			{
				var $tmp = this.createMediator(viewController,mediatorMapping.mediatorClass,mediatorMapping.autoRemove);
				$s.pop();
				return $tmp;
			}
		}
	}
	throw "Unable to find a mediatior mapping for view class " + core.Type.getClassName(viewControllerClass);
	{
		$s.pop();
		return null;
	}
	$s.pop();
}
mohu.mvcs.view.MediatorMap.prototype.createMediator = function(viewController,mediatorClass,autoRemove) {
	$s.push("mohu.mvcs.view.MediatorMap::createMediator");
	var $spos = $s.length;
	if(autoRemove == null) autoRemove = true;
	if(viewController == null) throw "No view controller specified";
	if(mediatorClass == null) throw "No mediator class specified";
	{
		var _g = 0, _g1 = this._activeMediators;
		while(_g < _g1.length) {
			var activeMediator = _g1[_g];
			++_g;
			if(activeMediator.viewController == viewController) throw "View controller " + core.Type.getClassName(core.Type.getClass(viewController)) + " is already being mediated by " + core.Type.getClassName(core.Type.getClass(activeMediator.mediator));
		}
	}
	var mediator = core.Type.createInstance(mediatorClass,[]);
	{
		var $tmp = this.registerMediator(viewController,mediator,autoRemove);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
mohu.mvcs.view.MediatorMap.prototype.registerMediator = function(viewController,mediator,autoRemove) {
	$s.push("mohu.mvcs.view.MediatorMap::registerMediator");
	var $spos = $s.length;
	if(autoRemove == null) autoRemove = true;
	if(viewController == null) throw "No view controller specified";
	if(mediator == null) throw "No mediator specified";
	{
		var _g = 0, _g1 = this._activeMediators;
		while(_g < _g1.length) {
			var activeMediator = _g1[_g];
			++_g;
			if(activeMediator.viewController == viewController) throw "View controller " + core.Type.getClassName(core.Type.getClass(viewController)) + " is already being mediated by " + core.Type.getClassName(core.Type.getClass(activeMediator.mediator));
		}
	}
	var activeMediator = { viewController : viewController, mediator : mediator, autoRemove : autoRemove};
	this._activeMediators.push(activeMediator);
	this._injector.mapMetadataInstance("view",viewController);
	this._injector.injectInto(mediator,false);
	this._injector.unmapMetadata("view");
	mediator.onRegister();
	{
		$s.pop();
		return mediator;
	}
	$s.pop();
}
mohu.mvcs.view.MediatorMap.prototype.removeMediator = function(viewController) {
	$s.push("mohu.mvcs.view.MediatorMap::removeMediator");
	var $spos = $s.length;
	if(viewController == null) throw "No view controller specified";
	var i = -1;
	while(++i < this._activeMediators.length) {
		var activeMediator = this._activeMediators[i];
		if(activeMediator.viewController != viewController) continue;
		this._activeMediators.splice(i,1);
		activeMediator.mediator.onRemove();
		{
			var $tmp = activeMediator.mediator;
			$s.pop();
			return $tmp;
		}
	}
	{
		$s.pop();
		return null;
	}
	$s.pop();
}
mohu.mvcs.view.MediatorMap.prototype.hasMediator = function(viewController) {
	$s.push("mohu.mvcs.view.MediatorMap::hasMediator");
	var $spos = $s.length;
	if(viewController == null) throw "No view controller specified";
	{
		var _g = 0, _g1 = this._activeMediators;
		while(_g < _g1.length) {
			var activeMediator = _g1[_g];
			++_g;
			if(activeMediator.viewController == viewController) {
				$s.pop();
				return true;
			}
		}
	}
	{
		$s.pop();
		return false;
	}
	$s.pop();
}
mohu.mvcs.view.MediatorMap.prototype.getMediator = function(viewController) {
	$s.push("mohu.mvcs.view.MediatorMap::getMediator");
	var $spos = $s.length;
	if(viewController == null) throw "No view controller specified";
	{
		var _g = 0, _g1 = this._activeMediators;
		while(_g < _g1.length) {
			var activeMediator = _g1[_g];
			++_g;
			if(activeMediator.viewController == viewController) {
				var $tmp = activeMediator.mediator;
				$s.pop();
				return $tmp;
			}
		}
	}
	{
		$s.pop();
		return null;
	}
	$s.pop();
}
mohu.mvcs.view.MediatorMap.prototype.handleViewAdded = function(message) {
	$s.push("mohu.mvcs.view.MediatorMap::handleViewAdded");
	var $spos = $s.length;
	var viewController = message.getTarget();
	{
		var _g = 0, _g1 = this._activeMediators;
		while(_g < _g1.length) {
			var activeMediator = _g1[_g];
			++_g;
			if(activeMediator.viewController == viewController) {
				$s.pop();
				return;
			}
		}
	}
	var viewControllerClass = core.Type.getClass(viewController);
	{
		var _g = 0, _g1 = this._mediatorMappings;
		while(_g < _g1.length) {
			var mediatorMapping = _g1[_g];
			++_g;
			if(!(mediatorMapping.viewControllerClass == viewControllerClass) && !(this._mapSubclasses && core.Std["is"](viewController,mediatorMapping.viewControllerClass))) continue;
			if(mediatorMapping.autoCreate) this.createMediator(viewController,mediatorMapping.mediatorClass,mediatorMapping.autoRemove);
			break;
		}
	}
	{
		$s.pop();
		return;
	}
	$s.pop();
}
mohu.mvcs.view.MediatorMap.prototype.handleViewRemoved = function(message) {
	$s.push("mohu.mvcs.view.MediatorMap::handleViewRemoved");
	var $spos = $s.length;
	var viewController = message.getTarget();
	{
		var _g = 0, _g1 = this._activeMediators;
		while(_g < _g1.length) {
			var activeMediator = _g1[_g];
			++_g;
			if(activeMediator.viewController != viewController) continue;
			if(activeMediator.autoRemove) this.removeMediator(message.getCurrentTarget());
			{
				$s.pop();
				return;
			}
		}
	}
	$s.pop();
}
mohu.mvcs.view.MediatorMap.prototype.__class__ = mohu.mvcs.view.MediatorMap;
if(!mohu.mvcs.injection) mohu.mvcs.injection = {}
mohu.mvcs.injection.IInjectionRule = function() { }
mohu.mvcs.injection.IInjectionRule.__name__ = ["mohu","mvcs","injection","IInjectionRule"];
mohu.mvcs.injection.IInjectionRule.prototype.instance = null;
mohu.mvcs.injection.IInjectionRule.prototype.createInstance = null;
mohu.mvcs.injection.IInjectionRule.prototype.__class__ = mohu.mvcs.injection.IInjectionRule;
mohu.mvcs.injection.InjectionRule = function(suppliedClass,singleton,instance) { if( suppliedClass === $_ ) return; {
	$s.push("mohu.mvcs.injection.InjectionRule::new");
	var $spos = $s.length;
	this._suppliedClass = suppliedClass;
	this._singleton = singleton;
	this._instance = instance;
	$s.pop();
}}
mohu.mvcs.injection.InjectionRule.__name__ = ["mohu","mvcs","injection","InjectionRule"];
mohu.mvcs.injection.InjectionRule.prototype.instance = null;
mohu.mvcs.injection.InjectionRule.prototype._suppliedClass = null;
mohu.mvcs.injection.InjectionRule.prototype._singleton = null;
mohu.mvcs.injection.InjectionRule.prototype._instance = null;
mohu.mvcs.injection.InjectionRule.prototype.createInstance = function() {
	$s.push("mohu.mvcs.injection.InjectionRule::createInstance");
	var $spos = $s.length;
	var instance = this._instance != null?this._instance:core.Type.createInstance(this._suppliedClass,[]);
	if(this._singleton) this._instance = instance;
	{
		$s.pop();
		return instance;
	}
	$s.pop();
}
mohu.mvcs.injection.InjectionRule.prototype.getInstance = function() {
	$s.push("mohu.mvcs.injection.InjectionRule::getInstance");
	var $spos = $s.length;
	{
		var $tmp = this._instance;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
mohu.mvcs.injection.InjectionRule.prototype.__class__ = mohu.mvcs.injection.InjectionRule;
mohu.mvcs.injection.InjectionRule.__interfaces__ = [mohu.mvcs.injection.IInjectionRule];
core.List = function(p) { if( p === $_ ) return; {
	$s.push("List::new");
	var $spos = $s.length;
	this.length = 0;
	$s.pop();
}}
core.List.__name__ = ["List"];
core.List.prototype.h = null;
core.List.prototype.q = null;
core.List.prototype.length = null;
core.List.prototype.add = function(item) {
	$s.push("List::add");
	var $spos = $s.length;
	var x = [item];
	if(this.h == null) this.h = x;
	else this.q[1] = x;
	this.q = x;
	this.length++;
	$s.pop();
}
core.List.prototype.push = function(item) {
	$s.push("List::push");
	var $spos = $s.length;
	var x = [item,this.h];
	this.h = x;
	if(this.q == null) this.q = x;
	this.length++;
	$s.pop();
}
core.List.prototype.first = function() {
	$s.push("List::first");
	var $spos = $s.length;
	{
		var $tmp = this.h == null?null:this.h[0];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.List.prototype.last = function() {
	$s.push("List::last");
	var $spos = $s.length;
	{
		var $tmp = this.q == null?null:this.q[0];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.List.prototype.pop = function() {
	$s.push("List::pop");
	var $spos = $s.length;
	if(this.h == null) {
		$s.pop();
		return null;
	}
	var x = this.h[0];
	this.h = this.h[1];
	if(this.h == null) this.q = null;
	this.length--;
	{
		$s.pop();
		return x;
	}
	$s.pop();
}
core.List.prototype.isEmpty = function() {
	$s.push("List::isEmpty");
	var $spos = $s.length;
	{
		var $tmp = this.h == null;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.List.prototype.clear = function() {
	$s.push("List::clear");
	var $spos = $s.length;
	this.h = null;
	this.q = null;
	this.length = 0;
	$s.pop();
}
core.List.prototype.remove = function(v) {
	$s.push("List::remove");
	var $spos = $s.length;
	var prev = null;
	var l = this.h;
	while(l != null) {
		if(l[0] == v) {
			if(prev == null) this.h = l[1];
			else prev[1] = l[1];
			if(this.q == l) this.q = prev;
			this.length--;
			{
				$s.pop();
				return true;
			}
		}
		prev = l;
		l = l[1];
	}
	{
		$s.pop();
		return false;
	}
	$s.pop();
}
core.List.prototype.iterator = function() {
	$s.push("List::iterator");
	var $spos = $s.length;
	{
		var $tmp = { h : this.h, hasNext : function() {
			$s.push("List::iterator@155");
			var $spos = $s.length;
			{
				var $tmp = this.h != null;
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}, next : function() {
			$s.push("List::iterator@158");
			var $spos = $s.length;
			if(this.h == null) {
				$s.pop();
				return null;
			}
			var x = this.h[0];
			this.h = this.h[1];
			{
				$s.pop();
				return x;
			}
			$s.pop();
		}};
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.List.prototype.toString = function() {
	$s.push("List::toString");
	var $spos = $s.length;
	var s = new core.StringBuf();
	var first = true;
	var l = this.h;
	s.b[s.b.length] = "{";
	while(l != null) {
		if(first) first = false;
		else s.b[s.b.length] = ", ";
		s.b[s.b.length] = core.Std.string(l[0]);
		l = l[1];
	}
	s.b[s.b.length] = "}";
	{
		var $tmp = s.b.join("");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.List.prototype.join = function(sep) {
	$s.push("List::join");
	var $spos = $s.length;
	var s = new core.StringBuf();
	var first = true;
	var l = this.h;
	while(l != null) {
		if(first) first = false;
		else s.b[s.b.length] = sep;
		s.b[s.b.length] = l[0];
		l = l[1];
	}
	{
		var $tmp = s.b.join("");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.List.prototype.filter = function(f) {
	$s.push("List::filter");
	var $spos = $s.length;
	var l2 = new core.List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		if(f(v)) l2.add(v);
	}
	{
		$s.pop();
		return l2;
	}
	$s.pop();
}
core.List.prototype.map = function(f) {
	$s.push("List::map");
	var $spos = $s.length;
	var b = new core.List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		b.add(f(v));
	}
	{
		$s.pop();
		return b;
	}
	$s.pop();
}
core.List.prototype.__class__ = core.List;
if(!cms.mvcs.core.api.controller) cms.mvcs.core.api.controller = {}
if(!cms.mvcs.core.api.controller.content) cms.mvcs.core.api.controller.content = {}
cms.mvcs.core.api.controller.content.RetrieveItemCommand = function() { }
cms.mvcs.core.api.controller.content.RetrieveItemCommand.__name__ = ["cms","mvcs","core","api","controller","content","RetrieveItemCommand"];
cms.mvcs.core.api.controller.content.RetrieveItemCommand.__super__ = cms.mvcs.controller.CMSCommand;
for(var k in cms.mvcs.controller.CMSCommand.prototype ) cms.mvcs.core.api.controller.content.RetrieveItemCommand.prototype[k] = cms.mvcs.controller.CMSCommand.prototype[k];
cms.mvcs.core.api.controller.content.RetrieveItemCommand.prototype.retrieveItemMessage = null;
cms.mvcs.core.api.controller.content.RetrieveItemCommand.prototype.configModel = null;
cms.mvcs.core.api.controller.content.RetrieveItemCommand.prototype.service = null;
cms.mvcs.core.api.controller.content.RetrieveItemCommand.prototype.execute = function() {
	$s.push("cms.mvcs.core.api.controller.content.RetrieveItemCommand::execute");
	var $spos = $s.length;
	this.service.onLoadFailed.addListener($closure(this,"_handleLoadFailed"));
	this.service.onLoadCompleted.addListener($closure(this,"_handleLoadCompleted"));
	this.service.retrieveItem(this.retrieveItemMessage.item.table,this.retrieveItemMessage.item.id);
	$s.pop();
}
cms.mvcs.core.api.controller.content.RetrieveItemCommand.prototype._handleLoadFailed = function(message) {
	$s.push("cms.mvcs.core.api.controller.content.RetrieveItemCommand::_handleLoadFailed");
	var $spos = $s.length;
	this.service.onLoadFailed.removeListener($closure(this,"_handleLoadFailed"));
	this.service.onLoadCompleted.removeListener($closure(this,"_handleLoadCompleted"));
	this.cmsHub.onError.dispatch(new cms.mvcs.messages.ErrorMessage("Failed to retrieve item: " + this.service.error));
	this.cmsHub.onRetrieveItemFailed.dispatch(this.retrieveItemMessage);
	$s.pop();
}
cms.mvcs.core.api.controller.content.RetrieveItemCommand.prototype._handleLoadCompleted = function(message) {
	$s.push("cms.mvcs.core.api.controller.content.RetrieveItemCommand::_handleLoadCompleted");
	var $spos = $s.length;
	this.service.onLoadFailed.removeListener($closure(this,"_handleLoadFailed"));
	this.service.onLoadCompleted.removeListener($closure(this,"_handleLoadCompleted"));
	this.retrieveItemMessage.item.table = this.service.item.table;
	this.retrieveItemMessage.item.id = this.service.item.id;
	this.retrieveItemMessage.item.alias = this.service.item.alias;
	this.retrieveItemMessage.item.author = this.service.item.author;
	this.retrieveItemMessage.item.username = this.service.item.username;
	this.retrieveItemMessage.item.date = this.service.item.date;
	this.retrieveItemMessage.item.value = this.service.item.value;
	this.cmsHub.onRetrieveItemCompleted.dispatch(this.retrieveItemMessage);
	$s.pop();
}
cms.mvcs.core.api.controller.content.RetrieveItemCommand.prototype.__class__ = cms.mvcs.core.api.controller.content.RetrieveItemCommand;
cms.mvcs.core.api.model.vo.TypeVO = function(name,title,help,label,fields) { if( name === $_ ) return; {
	$s.push("cms.mvcs.core.api.model.vo.TypeVO::new");
	var $spos = $s.length;
	this.name = name;
	this.title = title;
	this.help = help;
	this.label = label;
	this.fields = fields;
	$s.pop();
}}
cms.mvcs.core.api.model.vo.TypeVO.__name__ = ["cms","mvcs","core","api","model","vo","TypeVO"];
cms.mvcs.core.api.model.vo.TypeVO.prototype.name = null;
cms.mvcs.core.api.model.vo.TypeVO.prototype.title = null;
cms.mvcs.core.api.model.vo.TypeVO.prototype.help = null;
cms.mvcs.core.api.model.vo.TypeVO.prototype.label = null;
cms.mvcs.core.api.model.vo.TypeVO.prototype.fields = null;
cms.mvcs.core.api.model.vo.TypeVO.prototype.__class__ = cms.mvcs.core.api.model.vo.TypeVO;
core.IntIter = function(min,max) { if( min === $_ ) return; {
	$s.push("IntIter::new");
	var $spos = $s.length;
	this.min = min;
	this.max = max;
	$s.pop();
}}
core.IntIter.__name__ = ["IntIter"];
core.IntIter.prototype.min = null;
core.IntIter.prototype.max = null;
core.IntIter.prototype.hasNext = function() {
	$s.push("IntIter::hasNext");
	var $spos = $s.length;
	{
		var $tmp = this.min < this.max;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.IntIter.prototype.next = function() {
	$s.push("IntIter::next");
	var $spos = $s.length;
	{
		var $tmp = this.min++;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.IntIter.prototype.__class__ = core.IntIter;
mohu.mvcs.view.IViewController = function() { }
mohu.mvcs.view.IViewController.__name__ = ["mohu","mvcs","view","IViewController"];
mohu.mvcs.view.IViewController.prototype.view = null;
mohu.mvcs.view.IViewController.prototype.__class__ = mohu.mvcs.view.IViewController;
if(!cms.mvcs.core.popup) cms.mvcs.core.popup = {}
if(!cms.mvcs.core.popup.view) cms.mvcs.core.popup.view = {}
if(!cms.mvcs.core.popup.view.controllers) cms.mvcs.core.popup.view.controllers = {}
cms.mvcs.core.popup.view.controllers.IPopupContainerViewController = function() { }
cms.mvcs.core.popup.view.controllers.IPopupContainerViewController.__name__ = ["cms","mvcs","core","popup","view","controllers","IPopupContainerViewController"];
cms.mvcs.core.popup.view.controllers.IPopupContainerViewController.prototype.currentPopup = null;
cms.mvcs.core.popup.view.controllers.IPopupContainerViewController.prototype.popupQueue = null;
cms.mvcs.core.popup.view.controllers.IPopupContainerViewController.prototype.showPopup = null;
cms.mvcs.core.popup.view.controllers.IPopupContainerViewController.prototype.hidePopup = null;
cms.mvcs.core.popup.view.controllers.IPopupContainerViewController.prototype.__class__ = cms.mvcs.core.popup.view.controllers.IPopupContainerViewController;
cms.mvcs.core.popup.view.controllers.IPopupContainerViewController.__interfaces__ = [mohu.mvcs.view.IViewController];
if(!cms.mvcs.modules) cms.mvcs.modules = {}
if(!cms.mvcs.modules.content) cms.mvcs.modules.content = {}
if(!cms.mvcs.modules.content.view) cms.mvcs.modules.content.view = {}
if(!cms.mvcs.modules.content.view.components) cms.mvcs.modules.content.view.components = {}
if(!cms.mvcs.modules.content.view.components.form) cms.mvcs.modules.content.view.components.form = {}
cms.mvcs.modules.content.view.components.form.IFieldEditor = function() { }
cms.mvcs.modules.content.view.components.form.IFieldEditor.__name__ = ["cms","mvcs","modules","content","view","components","form","IFieldEditor"];
cms.mvcs.modules.content.view.components.form.IFieldEditor.prototype.name = null;
cms.mvcs.modules.content.view.components.form.IFieldEditor.prototype.label = null;
cms.mvcs.modules.content.view.components.form.IFieldEditor.prototype.disabled = null;
cms.mvcs.modules.content.view.components.form.IFieldEditor.prototype.parameters = null;
cms.mvcs.modules.content.view.components.form.IFieldEditor.prototype.value = null;
cms.mvcs.modules.content.view.components.form.IFieldEditor.prototype.onChanged = null;
cms.mvcs.modules.content.view.components.form.IFieldEditor.prototype.__class__ = cms.mvcs.modules.content.view.components.form.IFieldEditor;
cms.mvcs.modules.content.view.components.form.IItemFieldEditor = function() { }
cms.mvcs.modules.content.view.components.form.IItemFieldEditor.__name__ = ["cms","mvcs","modules","content","view","components","form","IItemFieldEditor"];
cms.mvcs.modules.content.view.components.form.IItemFieldEditor.prototype.datatype = null;
cms.mvcs.modules.content.view.components.form.IItemFieldEditor.prototype.allowAdd = null;
cms.mvcs.modules.content.view.components.form.IItemFieldEditor.prototype.allowCreate = null;
cms.mvcs.modules.content.view.components.form.IItemFieldEditor.prototype.allowRemove = null;
cms.mvcs.modules.content.view.components.form.IItemFieldEditor.prototype.allowDelete = null;
cms.mvcs.modules.content.view.components.form.IItemFieldEditor.prototype.selectedIndex = null;
cms.mvcs.modules.content.view.components.form.IItemFieldEditor.prototype.selectedItem = null;
cms.mvcs.modules.content.view.components.form.IItemFieldEditor.prototype.onItemSelected = null;
cms.mvcs.modules.content.view.components.form.IItemFieldEditor.prototype.onItemAddClicked = null;
cms.mvcs.modules.content.view.components.form.IItemFieldEditor.prototype.onItemRemoveClicked = null;
cms.mvcs.modules.content.view.components.form.IItemFieldEditor.prototype.insertItemAt = null;
cms.mvcs.modules.content.view.components.form.IItemFieldEditor.prototype.removeItemAt = null;
cms.mvcs.modules.content.view.components.form.IItemFieldEditor.prototype.__class__ = cms.mvcs.modules.content.view.components.form.IItemFieldEditor;
cms.mvcs.modules.content.view.components.form.IItemFieldEditor.__interfaces__ = [cms.mvcs.modules.content.view.components.form.IFieldEditor];
cms.mvcs.modules.content.view.components.form.IReferenceFieldEditor = function() { }
cms.mvcs.modules.content.view.components.form.IReferenceFieldEditor.__name__ = ["cms","mvcs","modules","content","view","components","form","IReferenceFieldEditor"];
cms.mvcs.modules.content.view.components.form.IReferenceFieldEditor.prototype.__class__ = cms.mvcs.modules.content.view.components.form.IReferenceFieldEditor;
cms.mvcs.modules.content.view.components.form.IReferenceFieldEditor.__interfaces__ = [cms.mvcs.modules.content.view.components.form.IItemFieldEditor];
if(!mohu.messages) mohu.messages = {}
mohu.messages.Message = function(p) { if( p === $_ ) return; {
	$s.push("mohu.messages.Message::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
mohu.messages.Message.__name__ = ["mohu","messages","Message"];
mohu.messages.Message.prototype.target = null;
mohu.messages.Message.prototype.currentTarget = null;
mohu.messages.Message.prototype.dispatcher = null;
mohu.messages.Message.prototype._target = null;
mohu.messages.Message.prototype._currentTarget = null;
mohu.messages.Message.prototype._dispatcher = null;
mohu.messages.Message.prototype.clone = function() {
	$s.push("mohu.messages.Message::clone");
	var $spos = $s.length;
	if(core.Type.getClass(this) != mohu.messages.Message) throw "All Message subclasses must override the clone() method";
	{
		var $tmp = new mohu.messages.Message();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
mohu.messages.Message.prototype.getTarget = function() {
	$s.push("mohu.messages.Message::getTarget");
	var $spos = $s.length;
	{
		var $tmp = this._target;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
mohu.messages.Message.prototype.getCurrentTarget = function() {
	$s.push("mohu.messages.Message::getCurrentTarget");
	var $spos = $s.length;
	{
		var $tmp = this._currentTarget;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
mohu.messages.Message.prototype.getDispatcher = function() {
	$s.push("mohu.messages.Message::getDispatcher");
	var $spos = $s.length;
	{
		var $tmp = this._dispatcher;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
mohu.messages.Message.prototype.__class__ = mohu.messages.Message;
if(!cms.mvcs.core.api.messages) cms.mvcs.core.api.messages = {}
if(!cms.mvcs.core.api.messages.content) cms.mvcs.core.api.messages.content = {}
cms.mvcs.core.api.messages.content.RetrieveItemsMessage = function(table,items) { if( table === $_ ) return; {
	$s.push("cms.mvcs.core.api.messages.content.RetrieveItemsMessage::new");
	var $spos = $s.length;
	mohu.messages.Message.call(this);
	this.table = table;
	this.items = items;
	$s.pop();
}}
cms.mvcs.core.api.messages.content.RetrieveItemsMessage.__name__ = ["cms","mvcs","core","api","messages","content","RetrieveItemsMessage"];
cms.mvcs.core.api.messages.content.RetrieveItemsMessage.__super__ = mohu.messages.Message;
for(var k in mohu.messages.Message.prototype ) cms.mvcs.core.api.messages.content.RetrieveItemsMessage.prototype[k] = mohu.messages.Message.prototype[k];
cms.mvcs.core.api.messages.content.RetrieveItemsMessage.prototype.table = null;
cms.mvcs.core.api.messages.content.RetrieveItemsMessage.prototype.items = null;
cms.mvcs.core.api.messages.content.RetrieveItemsMessage.prototype.clone = function() {
	$s.push("cms.mvcs.core.api.messages.content.RetrieveItemsMessage::clone");
	var $spos = $s.length;
	{
		var $tmp = new cms.mvcs.core.api.messages.content.RetrieveItemsMessage(this.table,this.items);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.core.api.messages.content.RetrieveItemsMessage.prototype.__class__ = cms.mvcs.core.api.messages.content.RetrieveItemsMessage;
core.Hash = function(p) { if( p === $_ ) return; {
	$s.push("Hash::new");
	var $spos = $s.length;
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
	else null;
	$s.pop();
}}
core.Hash.__name__ = ["Hash"];
core.Hash.prototype.h = null;
core.Hash.prototype.set = function(key,value) {
	$s.push("Hash::set");
	var $spos = $s.length;
	this.h["$" + key] = value;
	$s.pop();
}
core.Hash.prototype.get = function(key) {
	$s.push("Hash::get");
	var $spos = $s.length;
	{
		var $tmp = this.h["$" + key];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Hash.prototype.exists = function(key) {
	$s.push("Hash::exists");
	var $spos = $s.length;
	try {
		key = "$" + key;
		{
			var $tmp = this.hasOwnProperty.call(this.h,key);
			$s.pop();
			return $tmp;
		}
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				
				for(var i in this.h)
					if( i == key ) return true;
			;
				{
					$s.pop();
					return false;
				}
			}
		}
	}
	$s.pop();
}
core.Hash.prototype.remove = function(key) {
	$s.push("Hash::remove");
	var $spos = $s.length;
	if(!this.exists(key)) {
		$s.pop();
		return false;
	}
	delete(this.h["$" + key]);
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
core.Hash.prototype.keys = function() {
	$s.push("Hash::keys");
	var $spos = $s.length;
	var a = new core.Array();
	
			for(var i in this.h)
				a.push(i.substr(1));
		;
	{
		var $tmp = a.iterator();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Hash.prototype.iterator = function() {
	$s.push("Hash::iterator");
	var $spos = $s.length;
	{
		var $tmp = { ref : this.h, it : this.keys(), hasNext : function() {
			$s.push("Hash::iterator@81");
			var $spos = $s.length;
			{
				var $tmp = this.it.hasNext();
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}, next : function() {
			$s.push("Hash::iterator@82");
			var $spos = $s.length;
			var i = this.it.next();
			{
				var $tmp = this.ref["$" + i];
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}};
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Hash.prototype.toString = function() {
	$s.push("Hash::toString");
	var $spos = $s.length;
	var s = new core.StringBuf();
	s.b[s.b.length] = "{";
	var it = this.keys();
	{ var $it0 = it;
	while( $it0.hasNext() ) { var i = $it0.next();
	{
		s.b[s.b.length] = i;
		s.b[s.b.length] = " => ";
		s.b[s.b.length] = core.Std.string(this.get(i));
		if(it.hasNext()) s.b[s.b.length] = ", ";
	}
	}}
	s.b[s.b.length] = "}";
	{
		var $tmp = s.b.join("");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Hash.prototype.__class__ = core.Hash;
cms.mvcs.core.panel.view.mediators.PanelMediator = function() { }
cms.mvcs.core.panel.view.mediators.PanelMediator.__name__ = ["cms","mvcs","core","panel","view","mediators","PanelMediator"];
cms.mvcs.core.panel.view.mediators.PanelMediator.__super__ = cms.mvcs.view.mediators.CMSMediator;
for(var k in cms.mvcs.view.mediators.CMSMediator.prototype ) cms.mvcs.core.panel.view.mediators.PanelMediator.prototype[k] = cms.mvcs.view.mediators.CMSMediator.prototype[k];
cms.mvcs.core.panel.view.mediators.PanelMediator.prototype.panelView = null;
cms.mvcs.core.panel.view.mediators.PanelMediator.prototype.model = null;
cms.mvcs.core.panel.view.mediators.PanelMediator.prototype.onRemove = function() {
	$s.push("cms.mvcs.core.panel.view.mediators.PanelMediator::onRemove");
	var $spos = $s.length;
	this.setModel(null);
	cms.mvcs.view.mediators.CMSMediator.prototype.onRemove.call(this);
	$s.pop();
}
cms.mvcs.core.panel.view.mediators.PanelMediator.prototype.setModel = function(value) {
	$s.push("cms.mvcs.core.panel.view.mediators.PanelMediator::setModel");
	var $spos = $s.length;
	if(this.model != null) {
		this.panelView.setTitle(null);
		this.panelView.setHelp(null);
		this.panelView.setContent(null);
		this.panelView.setButtons(null);
		if(this.model.contentView != null) this.model.contentView.onChanged.removeListener($closure(this,"_handleContentViewValueChanged"));
		this.model.onTitleChanged.removeListener($closure(this,"_handleTitleChanged"));
		this.model.onHelpChanged.removeListener($closure(this,"_handleHelpChanged"));
		this.model.onContentViewChanged.removeListener($closure(this,"_handleContentViewChanged"));
		this.model.onButtonsChanged.removeListener($closure(this,"_handleButtonsChanged"));
	}
	this.model = value;
	if(this.model != null) {
		this.panelView.setTitle(this.model.title);
		this.panelView.setHelp(this.model.help);
		this.panelView.setContent(this.model.contentView);
		this.panelView.setButtons(this.model.buttons);
		if(this.model.contentView != null) this.model.contentView.onChanged.addListener($closure(this,"_handleContentViewValueChanged"));
		this.model.onTitleChanged.addListener($closure(this,"_handleTitleChanged"));
		this.model.onHelpChanged.addListener($closure(this,"_handleHelpChanged"));
		this.model.onContentViewChanged.addListener($closure(this,"_handleContentViewChanged"));
		this.model.onButtonsChanged.addListener($closure(this,"_handleButtonsChanged"));
	}
	{
		var $tmp = this.model;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.core.panel.view.mediators.PanelMediator.prototype._handleContentViewValueChanged = function(message) {
	$s.push("cms.mvcs.core.panel.view.mediators.PanelMediator::_handleContentViewValueChanged");
	var $spos = $s.length;
	this.panelView.setHighlighted(this.model.contentView.changed);
	$s.pop();
}
cms.mvcs.core.panel.view.mediators.PanelMediator.prototype._handleTitleChanged = function(message) {
	$s.push("cms.mvcs.core.panel.view.mediators.PanelMediator::_handleTitleChanged");
	var $spos = $s.length;
	this.panelView.setTitle(this.model.title);
	$s.pop();
}
cms.mvcs.core.panel.view.mediators.PanelMediator.prototype._handleHelpChanged = function(message) {
	$s.push("cms.mvcs.core.panel.view.mediators.PanelMediator::_handleHelpChanged");
	var $spos = $s.length;
	this.panelView.setHelp(this.model.help);
	$s.pop();
}
cms.mvcs.core.panel.view.mediators.PanelMediator.prototype._handleContentViewChanged = function(message) {
	$s.push("cms.mvcs.core.panel.view.mediators.PanelMediator::_handleContentViewChanged");
	var $spos = $s.length;
	if(this.model.contentView != null) this.model.contentView.onChanged.removeListener($closure(this,"_handleContentViewValueChanged"));
	this.panelView.setContent(this.model.contentView);
	if(this.model.contentView != null) this.model.contentView.onChanged.addListener($closure(this,"_handleContentViewValueChanged"));
	$s.pop();
}
cms.mvcs.core.panel.view.mediators.PanelMediator.prototype._handleButtonsChanged = function(message) {
	$s.push("cms.mvcs.core.panel.view.mediators.PanelMediator::_handleButtonsChanged");
	var $spos = $s.length;
	this.panelView.setButtons(this.model.buttons);
	$s.pop();
}
cms.mvcs.core.panel.view.mediators.PanelMediator.prototype.__class__ = cms.mvcs.core.panel.view.mediators.PanelMediator;
if(!cms.mvcs.modules.content.controller) cms.mvcs.modules.content.controller = {}
cms.mvcs.modules.content.controller.AddItemEditorPanelCommand = function() { }
cms.mvcs.modules.content.controller.AddItemEditorPanelCommand.__name__ = ["cms","mvcs","modules","content","controller","AddItemEditorPanelCommand"];
cms.mvcs.modules.content.controller.AddItemEditorPanelCommand.__super__ = cms.mvcs.controller.CMSCommand;
for(var k in cms.mvcs.controller.CMSCommand.prototype ) cms.mvcs.modules.content.controller.AddItemEditorPanelCommand.prototype[k] = cms.mvcs.controller.CMSCommand.prototype[k];
cms.mvcs.modules.content.controller.AddItemEditorPanelCommand.prototype.addItemEditorPanelMessage = null;
cms.mvcs.modules.content.controller.AddItemEditorPanelCommand.prototype.structureModel = null;
cms.mvcs.modules.content.controller.AddItemEditorPanelCommand.prototype._itemEditorModel = null;
cms.mvcs.modules.content.controller.AddItemEditorPanelCommand.prototype._panelModel = null;
cms.mvcs.modules.content.controller.AddItemEditorPanelCommand.prototype.execute = function() {
	$s.push("cms.mvcs.modules.content.controller.AddItemEditorPanelCommand::execute");
	var $spos = $s.length;
	var itemEditorModel = new cms.mvcs.modules.content.model.ItemEditorModel(this.structureModel.getType(this.addItemEditorPanelMessage.table),this.addItemEditorPanelMessage.id);
	var itemEditorViewController = this.injector.getClassInstance(cms.mvcs.modules.content.view.controllers.panels.IItemEditorViewController);
	var itemEditorMediator = (function($this) {
		var $r;
		var $t = $this.cmsHub.mediatorMap.createMediator(itemEditorViewController,cms.mvcs.modules.content.view.mediators.ItemEditorMediator);
		if(core.Std["is"]($t,cms.mvcs.modules.content.view.mediators.ItemEditorMediator)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this));
	var buttons = this.injector.getClassInstance(cms.mvcs.core.panel.view.components.IPanelButtons);
	var panelModel = new cms.mvcs.core.panel.model.PanelModel(itemEditorModel.type.title,itemEditorModel.type.help,itemEditorViewController,buttons);
	itemEditorMediator.setPanel(panelModel);
	itemEditorMediator.setModel(itemEditorModel);
	this._itemEditorModel = itemEditorModel;
	this._panelModel = panelModel;
	var panelContainer = this.addItemEditorPanelMessage.panelContainer;
	var panelIndex = this.addItemEditorPanelMessage.index;
	if(panelIndex > -1) while(panelContainer.getNumPanels() > panelIndex) this.cmsHub.onRemovePanel.dispatch(new cms.mvcs.core.panel.messages.PanelContainerMessage(panelContainer,null,panelContainer.getNumPanels() - 1));
	this.cmsHub.onAddPanel.dispatch(new cms.mvcs.core.panel.messages.PanelContainerMessage(panelContainer,panelModel,-1,panelIndex));
	this.cmsHub.onRetrieveItemFailed.addListener($closure(this,"_handleRetrieveItemFailed"));
	this.cmsHub.onRetrieveItemCompleted.addListener($closure(this,"_handleRetrieveItemCompleted"));
	this.cmsHub.onRetrieveItem.dispatch(new cms.mvcs.core.api.messages.content.RetrieveItemMessage(new cms.mvcs.core.api.model.vo.ItemVO(this.addItemEditorPanelMessage.table,this.addItemEditorPanelMessage.id)),itemEditorModel);
	$s.pop();
}
cms.mvcs.modules.content.controller.AddItemEditorPanelCommand.prototype._handleRetrieveItemFailed = function(message) {
	$s.push("cms.mvcs.modules.content.controller.AddItemEditorPanelCommand::_handleRetrieveItemFailed");
	var $spos = $s.length;
	this.cmsHub.onRetrieveItemFailed.removeListener($closure(this,"_handleRetrieveItemFailed"));
	this.cmsHub.onRetrieveItemCompleted.removeListener($closure(this,"_handleRetrieveItemCompleted"));
	this.cmsHub.onRemovePanel.dispatch(new cms.mvcs.core.panel.messages.PanelContainerMessage(this.addItemEditorPanelMessage.panelContainer,this._panelModel));
	$s.pop();
}
cms.mvcs.modules.content.controller.AddItemEditorPanelCommand.prototype._handleRetrieveItemCompleted = function(message) {
	$s.push("cms.mvcs.modules.content.controller.AddItemEditorPanelCommand::_handleRetrieveItemCompleted");
	var $spos = $s.length;
	this.cmsHub.onRetrieveItemFailed.removeListener($closure(this,"_handleRetrieveItemFailed"));
	this.cmsHub.onRetrieveItemCompleted.removeListener($closure(this,"_handleRetrieveItemCompleted"));
	var retrieveItemMessage = (function($this) {
		var $r;
		var $t = message;
		if(core.Std["is"]($t,cms.mvcs.core.api.messages.content.RetrieveItemMessage)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this));
	this._itemEditorModel.setID(retrieveItemMessage.item.id);
	this._itemEditorModel.setAlias(retrieveItemMessage.item.alias);
	this._itemEditorModel.setValue(retrieveItemMessage.item.value);
	$s.pop();
}
cms.mvcs.modules.content.controller.AddItemEditorPanelCommand.prototype.__class__ = cms.mvcs.modules.content.controller.AddItemEditorPanelCommand;
cms.mvcs.modules.content.view.components.form.IPasswordFieldEditor = function() { }
cms.mvcs.modules.content.view.components.form.IPasswordFieldEditor.__name__ = ["cms","mvcs","modules","content","view","components","form","IPasswordFieldEditor"];
cms.mvcs.modules.content.view.components.form.IPasswordFieldEditor.prototype.maxLength = null;
cms.mvcs.modules.content.view.components.form.IPasswordFieldEditor.prototype.__class__ = cms.mvcs.modules.content.view.components.form.IPasswordFieldEditor;
cms.mvcs.modules.content.view.components.form.IPasswordFieldEditor.__interfaces__ = [cms.mvcs.modules.content.view.components.form.IFieldEditor];
mohu.messages.Dispatcher = function(target) { if( target === $_ ) return; {
	$s.push("mohu.messages.Dispatcher::new");
	var $spos = $s.length;
	this._target = target;
	this._listeners = new core.Array();
	$s.pop();
}}
mohu.messages.Dispatcher.__name__ = ["mohu","messages","Dispatcher"];
mohu.messages.Dispatcher.prototype.target = null;
mohu.messages.Dispatcher.prototype.listeners = null;
mohu.messages.Dispatcher.prototype.numListeners = null;
mohu.messages.Dispatcher.prototype._target = null;
mohu.messages.Dispatcher.prototype._listeners = null;
mohu.messages.Dispatcher.prototype.addListener = function(listener,runOnce) {
	$s.push("mohu.messages.Dispatcher::addListener");
	var $spos = $s.length;
	if(runOnce == null) runOnce = false;
	if(listener == null) throw "No listener specified";
	{
		var _g = 0, _g1 = this._listeners;
		while(_g < _g1.length) {
			var listenerMapping = _g1[_g];
			++_g;
			if(!core.Reflect.compareMethods(listenerMapping.listener,listener)) continue;
			if(listenerMapping.runOnce && !runOnce) listenerMapping.runOnce = false;
			{
				$s.pop();
				return;
			}
		}
	}
	var listenerMapping = { listener : listener, runOnce : runOnce};
	this._listeners.push(listenerMapping);
	$s.pop();
}
mohu.messages.Dispatcher.prototype.hasListener = function(listener) {
	$s.push("mohu.messages.Dispatcher::hasListener");
	var $spos = $s.length;
	if(listener == null) throw "No listener specified";
	{
		var _g = 0, _g1 = this._listeners;
		while(_g < _g1.length) {
			var listenerMapping = _g1[_g];
			++_g;
			if(core.Reflect.compareMethods(listenerMapping.listener,listener)) {
				$s.pop();
				return true;
			}
		}
	}
	{
		$s.pop();
		return false;
	}
	$s.pop();
}
mohu.messages.Dispatcher.prototype.removeListener = function(listener) {
	$s.push("mohu.messages.Dispatcher::removeListener");
	var $spos = $s.length;
	if(listener == null) throw "No listener specified";
	var i = -1;
	while(++i < this._listeners.length) {
		if(!core.Reflect.compareMethods(this._listeners[i].listener,listener)) continue;
		this._listeners.splice(i--,1);
		{
			$s.pop();
			return;
		}
	}
	$s.pop();
}
mohu.messages.Dispatcher.prototype.removeAllListeners = function() {
	$s.push("mohu.messages.Dispatcher::removeAllListeners");
	var $spos = $s.length;
	this._listeners = new core.Array();
	$s.pop();
}
mohu.messages.Dispatcher.prototype.dispatch = function(message,customTarget) {
	$s.push("mohu.messages.Dispatcher::dispatch");
	var $spos = $s.length;
	if(this._listeners.length == 0) {
		$s.pop();
		return;
	}
	if(message == null) message = new mohu.messages.Message();
	var newMessage = message.clone();
	newMessage._target = customTarget?customTarget:message.getTarget()?message.getTarget():this._target;
	newMessage._currentTarget = this._target;
	newMessage._dispatcher = this;
	var i = -1;
	while(++i < this._listeners.length) {
		var listenerMapping = this._listeners[i];
		if(listenerMapping.runOnce) this._listeners.splice(i--,1);
		listenerMapping.listener((function($this) {
			var $r;
			var $t = newMessage;
			if(core.Std["is"]($t,mohu.messages.Message)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)));
	}
	{
		$s.pop();
		return;
	}
	$s.pop();
}
mohu.messages.Dispatcher.prototype.redispatch = function(message) {
	$s.push("mohu.messages.Dispatcher::redispatch");
	var $spos = $s.length;
	this.dispatch(message);
	$s.pop();
}
mohu.messages.Dispatcher.prototype.getTarget = function() {
	$s.push("mohu.messages.Dispatcher::getTarget");
	var $spos = $s.length;
	{
		var $tmp = this._target;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
mohu.messages.Dispatcher.prototype.setTarget = function(value) {
	$s.push("mohu.messages.Dispatcher::setTarget");
	var $spos = $s.length;
	{
		var $tmp = this._target = value;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
mohu.messages.Dispatcher.prototype.getListeners = function() {
	$s.push("mohu.messages.Dispatcher::getListeners");
	var $spos = $s.length;
	var listeners = new core.Array();
	{
		var _g = 0, _g1 = this._listeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listeners.push(listener.listener);
		}
	}
	{
		$s.pop();
		return listeners;
	}
	$s.pop();
}
mohu.messages.Dispatcher.prototype.getNumListeners = function() {
	$s.push("mohu.messages.Dispatcher::getNumListeners");
	var $spos = $s.length;
	{
		var $tmp = this._listeners.length;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
mohu.messages.Dispatcher.prototype.__class__ = mohu.messages.Dispatcher;
if(!cms.mvcs.core.api.messages.structure) cms.mvcs.core.api.messages.structure = {}
cms.mvcs.core.api.messages.structure.RetrieveTypesMessage = function(types,rootType) { if( types === $_ ) return; {
	$s.push("cms.mvcs.core.api.messages.structure.RetrieveTypesMessage::new");
	var $spos = $s.length;
	mohu.messages.Message.call(this);
	this.types = types;
	this.rootType = rootType;
	$s.pop();
}}
cms.mvcs.core.api.messages.structure.RetrieveTypesMessage.__name__ = ["cms","mvcs","core","api","messages","structure","RetrieveTypesMessage"];
cms.mvcs.core.api.messages.structure.RetrieveTypesMessage.__super__ = mohu.messages.Message;
for(var k in mohu.messages.Message.prototype ) cms.mvcs.core.api.messages.structure.RetrieveTypesMessage.prototype[k] = mohu.messages.Message.prototype[k];
cms.mvcs.core.api.messages.structure.RetrieveTypesMessage.prototype.types = null;
cms.mvcs.core.api.messages.structure.RetrieveTypesMessage.prototype.rootType = null;
cms.mvcs.core.api.messages.structure.RetrieveTypesMessage.prototype.clone = function() {
	$s.push("cms.mvcs.core.api.messages.structure.RetrieveTypesMessage::clone");
	var $spos = $s.length;
	{
		var $tmp = new cms.mvcs.core.api.messages.structure.RetrieveTypesMessage(this.types,this.rootType);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.core.api.messages.structure.RetrieveTypesMessage.prototype.__class__ = cms.mvcs.core.api.messages.structure.RetrieveTypesMessage;
core.StringTools = function() { }
core.StringTools.__name__ = ["StringTools"];
core.StringTools.urlEncode = function(s) {
	$s.push("StringTools::urlEncode");
	var $spos = $s.length;
	{
		var $tmp = encodeURIComponent(s);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.StringTools.urlDecode = function(s) {
	$s.push("StringTools::urlDecode");
	var $spos = $s.length;
	{
		var $tmp = decodeURIComponent(s.split("+").join(" "));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.StringTools.htmlEscape = function(s) {
	$s.push("StringTools::htmlEscape");
	var $spos = $s.length;
	{
		var $tmp = s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.StringTools.htmlUnescape = function(s) {
	$s.push("StringTools::htmlUnescape");
	var $spos = $s.length;
	{
		var $tmp = s.split("&gt;").join(">").split("&lt;").join("<").split("&amp;").join("&");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.StringTools.startsWith = function(s,start) {
	$s.push("StringTools::startsWith");
	var $spos = $s.length;
	{
		var $tmp = s.length >= start.length && s.substr(0,start.length) == start;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.StringTools.endsWith = function(s,end) {
	$s.push("StringTools::endsWith");
	var $spos = $s.length;
	var elen = end.length;
	var slen = s.length;
	{
		var $tmp = slen >= elen && s.substr(slen - elen,elen) == end;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.StringTools.isSpace = function(s,pos) {
	$s.push("StringTools::isSpace");
	var $spos = $s.length;
	var c = s.charCodeAt(pos);
	{
		var $tmp = c >= 9 && c <= 13 || c == 32;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.StringTools.ltrim = function(s) {
	$s.push("StringTools::ltrim");
	var $spos = $s.length;
	var l = s.length;
	var r = 0;
	while(r < l && core.StringTools.isSpace(s,r)) {
		r++;
	}
	if(r > 0) {
		var $tmp = s.substr(r,l - r);
		$s.pop();
		return $tmp;
	}
	else {
		$s.pop();
		return s;
	}
	$s.pop();
}
core.StringTools.rtrim = function(s) {
	$s.push("StringTools::rtrim");
	var $spos = $s.length;
	var l = s.length;
	var r = 0;
	while(r < l && core.StringTools.isSpace(s,l - r - 1)) {
		r++;
	}
	if(r > 0) {
		{
			var $tmp = s.substr(0,l - r);
			$s.pop();
			return $tmp;
		}
	}
	else {
		{
			$s.pop();
			return s;
		}
	}
	$s.pop();
}
core.StringTools.trim = function(s) {
	$s.push("StringTools::trim");
	var $spos = $s.length;
	{
		var $tmp = core.StringTools.ltrim(core.StringTools.rtrim(s));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.StringTools.rpad = function(s,c,l) {
	$s.push("StringTools::rpad");
	var $spos = $s.length;
	var sl = s.length;
	var cl = c.length;
	while(sl < l) {
		if(l - sl < cl) {
			s += c.substr(0,l - sl);
			sl = l;
		}
		else {
			s += c;
			sl += cl;
		}
	}
	{
		$s.pop();
		return s;
	}
	$s.pop();
}
core.StringTools.lpad = function(s,c,l) {
	$s.push("StringTools::lpad");
	var $spos = $s.length;
	var ns = "";
	var sl = s.length;
	if(sl >= l) {
		$s.pop();
		return s;
	}
	var cl = c.length;
	while(sl < l) {
		if(l - sl < cl) {
			ns += c.substr(0,l - sl);
			sl = l;
		}
		else {
			ns += c;
			sl += cl;
		}
	}
	{
		var $tmp = ns + s;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.StringTools.replace = function(s,sub,by) {
	$s.push("StringTools::replace");
	var $spos = $s.length;
	{
		var $tmp = s.split(sub).join(by);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.StringTools.hex = function(n,digits) {
	$s.push("StringTools::hex");
	var $spos = $s.length;
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	{
		$s.pop();
		return s;
	}
	$s.pop();
}
core.StringTools.fastCodeAt = function(s,index) {
	$s.push("StringTools::fastCodeAt");
	var $spos = $s.length;
	{
		var $tmp = s.cca(index);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.StringTools.isEOF = function(c) {
	$s.push("StringTools::isEOF");
	var $spos = $s.length;
	{
		var $tmp = c != c;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.StringTools.prototype.__class__ = core.StringTools;
if(!mohu.mvcs.service) mohu.mvcs.service = {}
mohu.mvcs.service.Service = function() { }
mohu.mvcs.service.Service.__name__ = ["mohu","mvcs","service","Service"];
mohu.mvcs.service.Service.__super__ = mohu.mvcs.Actor;
for(var k in mohu.mvcs.Actor.prototype ) mohu.mvcs.service.Service.prototype[k] = mohu.mvcs.Actor.prototype[k];
mohu.mvcs.service.Service.prototype.__class__ = mohu.mvcs.service.Service;
cms.mvcs.core.api.services.HttpService = function(p) { if( p === $_ ) return; {
	$s.push("cms.mvcs.core.api.services.HttpService::new");
	var $spos = $s.length;
	this.onLoadFailed = new mohu.messages.Dispatcher(this);
	this.onLoadCompleted = new mohu.messages.Dispatcher(this);
	$s.pop();
}}
cms.mvcs.core.api.services.HttpService.__name__ = ["cms","mvcs","core","api","services","HttpService"];
cms.mvcs.core.api.services.HttpService.__super__ = mohu.mvcs.service.Service;
for(var k in mohu.mvcs.service.Service.prototype ) cms.mvcs.core.api.services.HttpService.prototype[k] = mohu.mvcs.service.Service.prototype[k];
cms.mvcs.core.api.services.HttpService.prototype.data = null;
cms.mvcs.core.api.services.HttpService.prototype.error = null;
cms.mvcs.core.api.services.HttpService.prototype.onLoadFailed = null;
cms.mvcs.core.api.services.HttpService.prototype.onLoadCompleted = null;
cms.mvcs.core.api.services.HttpService.prototype.load = function(url,parameters,method,contentType) {
	$s.push("cms.mvcs.core.api.services.HttpService::load");
	var $spos = $s.length;
	if(contentType == null) contentType = "application/x-www-form-urlencoded";
	if(method == null) method = "GET";
	this.data = null;
	this.error = null;
	var request = new mohu.net.HttpRequest(url);
	if(contentType != null) request.setHeader("Content-Type",contentType != null?contentType:"application/x-www-form-urlencoded");
	if(parameters != null) {
		if(core.Std["is"](parameters,core.String)) {
			request.setPostData(parameters);
		}
		else if(core.Std["is"](parameters,core.Hash)) {
			var hash = parameters;
			{ var $it0 = hash.keys();
			while( $it0.hasNext() ) { var field = $it0.next();
			request.setParameter(field,hash.get(field));
			}}
		}
		else {
			{
				var _g = 0, _g1 = core.Reflect.fields(parameters);
				while(_g < _g1.length) {
					var field = _g1[_g];
					++_g;
					request.setParameter(field,core.Reflect.field(parameters,field));
				}
			}
		}
	}
	request.onError = $closure(this,"_handleLoadFailed");
	request.onData = $closure(this,"_handleLoadCompleted");
	request.request(method);
	$s.pop();
}
cms.mvcs.core.api.services.HttpService.prototype._handleLoadFailed = function(error) {
	$s.push("cms.mvcs.core.api.services.HttpService::_handleLoadFailed");
	var $spos = $s.length;
	this.error = error;
	this.onLoadFailed.dispatch();
	$s.pop();
}
cms.mvcs.core.api.services.HttpService.prototype._handleLoadCompleted = function(data) {
	$s.push("cms.mvcs.core.api.services.HttpService::_handleLoadCompleted");
	var $spos = $s.length;
	var success = false;
	try {
		this._parseData(data);
		this.data = data;
		success = true;
	}
	catch( $e0 ) {
		if( js.Boot.__instanceof($e0,core.String) ) {
			var error = $e0;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				this.error = error;
			}
		} else throw($e0);
	}
	if(success) this.onLoadCompleted.dispatch();
	else this.onLoadFailed.dispatch();
	$s.pop();
}
cms.mvcs.core.api.services.HttpService.prototype._parseData = function(data) {
	$s.push("cms.mvcs.core.api.services.HttpService::_parseData");
	var $spos = $s.length;
	null;
	$s.pop();
}
cms.mvcs.core.api.services.HttpService.prototype.__class__ = cms.mvcs.core.api.services.HttpService;
cms.mvcs.core.api.services.HttpService.__interfaces__ = [cms.mvcs.core.api.services.IHttpService];
cms.mvcs.core.api.services.APIService = function(p) { if( p === $_ ) return; {
	$s.push("cms.mvcs.core.api.services.APIService::new");
	var $spos = $s.length;
	cms.mvcs.core.api.services.HttpService.call(this);
	$s.pop();
}}
cms.mvcs.core.api.services.APIService.__name__ = ["cms","mvcs","core","api","services","APIService"];
cms.mvcs.core.api.services.APIService.__super__ = cms.mvcs.core.api.services.HttpService;
for(var k in cms.mvcs.core.api.services.HttpService.prototype ) cms.mvcs.core.api.services.APIService.prototype[k] = cms.mvcs.core.api.services.HttpService.prototype[k];
cms.mvcs.core.api.services.APIService.prototype.encoder = null;
cms.mvcs.core.api.services.APIService.prototype.configModel = null;
cms.mvcs.core.api.services.APIService.prototype.response = null;
cms.mvcs.core.api.services.APIService.prototype.api = function(module,method,path,parameters) {
	$s.push("cms.mvcs.core.api.services.APIService::api");
	var $spos = $s.length;
	if(path == null) path = "";
	cms.mvcs.core.api.services.HttpService.prototype.load.call(this,this.configModel.apiURL + module + "/" + path,parameters,method,this.encoder.getContentType());
	$s.pop();
}
cms.mvcs.core.api.services.APIService.prototype._parseData = function(data) {
	$s.push("cms.mvcs.core.api.services.APIService::_parseData");
	var $spos = $s.length;
	var response = this.encoder.decode(data);
	if(core.Std["is"](response,core.String)) throw response;
	this.response = response;
	$s.pop();
}
cms.mvcs.core.api.services.APIService.prototype.__class__ = cms.mvcs.core.api.services.APIService;
cms.mvcs.core.api.services.content.IRetrieveItemService = function() { }
cms.mvcs.core.api.services.content.IRetrieveItemService.__name__ = ["cms","mvcs","core","api","services","content","IRetrieveItemService"];
cms.mvcs.core.api.services.content.IRetrieveItemService.prototype.item = null;
cms.mvcs.core.api.services.content.IRetrieveItemService.prototype.retrieveItem = null;
cms.mvcs.core.api.services.content.IRetrieveItemService.prototype.__class__ = cms.mvcs.core.api.services.content.IRetrieveItemService;
cms.mvcs.core.api.services.content.IRetrieveItemService.__interfaces__ = [cms.mvcs.core.api.services.IHttpService];
cms.mvcs.core.api.services.content.RetrieveItemService = function(p) { if( p === $_ ) return; {
	$s.push("cms.mvcs.core.api.services.content.RetrieveItemService::new");
	var $spos = $s.length;
	cms.mvcs.core.api.services.APIService.call(this);
	$s.pop();
}}
cms.mvcs.core.api.services.content.RetrieveItemService.__name__ = ["cms","mvcs","core","api","services","content","RetrieveItemService"];
cms.mvcs.core.api.services.content.RetrieveItemService.__super__ = cms.mvcs.core.api.services.APIService;
for(var k in cms.mvcs.core.api.services.APIService.prototype ) cms.mvcs.core.api.services.content.RetrieveItemService.prototype[k] = cms.mvcs.core.api.services.APIService.prototype[k];
cms.mvcs.core.api.services.content.RetrieveItemService.prototype.item = null;
cms.mvcs.core.api.services.content.RetrieveItemService.prototype.retrieveItem = function(table,item) {
	$s.push("cms.mvcs.core.api.services.content.RetrieveItemService::retrieveItem");
	var $spos = $s.length;
	cms.mvcs.core.api.services.APIService.prototype.api.call(this,"content","GET",table + "/" + item + "/1/");
	$s.pop();
}
cms.mvcs.core.api.services.content.RetrieveItemService.prototype._parseData = function(data) {
	$s.push("cms.mvcs.core.api.services.content.RetrieveItemService::_parseData");
	var $spos = $s.length;
	cms.mvcs.core.api.services.APIService.prototype._parseData.call(this,data);
	this.item = this.response;
	$s.pop();
}
cms.mvcs.core.api.services.content.RetrieveItemService.prototype.__class__ = cms.mvcs.core.api.services.content.RetrieveItemService;
cms.mvcs.core.api.services.content.RetrieveItemService.__interfaces__ = [cms.mvcs.core.api.services.content.IRetrieveItemService];
if(!cms.mvcs.core.authentication) cms.mvcs.core.authentication = {}
if(!cms.mvcs.core.authentication.model) cms.mvcs.core.authentication.model = {}
cms.mvcs.core.authentication.model.AuthenticationModel = function(currentUser) { if( currentUser === $_ ) return; {
	$s.push("cms.mvcs.core.authentication.model.AuthenticationModel::new");
	var $spos = $s.length;
	this.onCurrentUserChanged = new mohu.messages.Dispatcher(this);
	this.setCurrentUser(currentUser);
	$s.pop();
}}
cms.mvcs.core.authentication.model.AuthenticationModel.__name__ = ["cms","mvcs","core","authentication","model","AuthenticationModel"];
cms.mvcs.core.authentication.model.AuthenticationModel.__super__ = mohu.mvcs.model.Model;
for(var k in mohu.mvcs.model.Model.prototype ) cms.mvcs.core.authentication.model.AuthenticationModel.prototype[k] = mohu.mvcs.model.Model.prototype[k];
cms.mvcs.core.authentication.model.AuthenticationModel.prototype.currentUser = null;
cms.mvcs.core.authentication.model.AuthenticationModel.prototype.onCurrentUserChanged = null;
cms.mvcs.core.authentication.model.AuthenticationModel.prototype.setCurrentUser = function(value) {
	$s.push("cms.mvcs.core.authentication.model.AuthenticationModel::setCurrentUser");
	var $spos = $s.length;
	this.currentUser = value;
	this.onCurrentUserChanged.dispatch();
	{
		var $tmp = this.currentUser;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.core.authentication.model.AuthenticationModel.prototype.__class__ = cms.mvcs.core.authentication.model.AuthenticationModel;
if(!cms.mvcs.messages) cms.mvcs.messages = {}
cms.mvcs.messages.InitMessage = function(apiURL) { if( apiURL === $_ ) return; {
	$s.push("cms.mvcs.messages.InitMessage::new");
	var $spos = $s.length;
	mohu.messages.Message.call(this);
	this.apiURL = apiURL;
	$s.pop();
}}
cms.mvcs.messages.InitMessage.__name__ = ["cms","mvcs","messages","InitMessage"];
cms.mvcs.messages.InitMessage.__super__ = mohu.messages.Message;
for(var k in mohu.messages.Message.prototype ) cms.mvcs.messages.InitMessage.prototype[k] = mohu.messages.Message.prototype[k];
cms.mvcs.messages.InitMessage.prototype.apiURL = null;
cms.mvcs.messages.InitMessage.prototype.clone = function() {
	$s.push("cms.mvcs.messages.InitMessage::clone");
	var $spos = $s.length;
	{
		var $tmp = new cms.mvcs.messages.InitMessage(this.apiURL);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.messages.InitMessage.prototype.__class__ = cms.mvcs.messages.InitMessage;
cms.mvcs.core.api.services.content.IUpdateItemService = function() { }
cms.mvcs.core.api.services.content.IUpdateItemService.__name__ = ["cms","mvcs","core","api","services","content","IUpdateItemService"];
cms.mvcs.core.api.services.content.IUpdateItemService.prototype.item = null;
cms.mvcs.core.api.services.content.IUpdateItemService.prototype.updateItem = null;
cms.mvcs.core.api.services.content.IUpdateItemService.prototype.__class__ = cms.mvcs.core.api.services.content.IUpdateItemService;
cms.mvcs.core.api.services.content.IUpdateItemService.__interfaces__ = [cms.mvcs.core.api.services.IHttpService];
if(!cms.mvcs.view.components) cms.mvcs.view.components = {}
if(!cms.mvcs.view.components.dom) cms.mvcs.view.components.dom = {}
cms.mvcs.view.components.dom.IViewComponentDOM = function() { }
cms.mvcs.view.components.dom.IViewComponentDOM.__name__ = ["cms","mvcs","view","components","dom","IViewComponentDOM"];
cms.mvcs.view.components.dom.IViewComponentDOM.prototype.domNode = null;
cms.mvcs.view.components.dom.IViewComponentDOM.prototype.__class__ = cms.mvcs.view.components.dom.IViewComponentDOM;
if(!cms.mvcs.modules.content.view.components.form.dom) cms.mvcs.modules.content.view.components.form.dom = {}
cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM = function(p) { if( p === $_ ) return; {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM::new");
	var $spos = $s.length;
	this.onChanged = new mohu.messages.Dispatcher(this);
	this.domNode = js.Lib.document.createElement("tr");
	this.domNode.className = "formField";
	this.labelNode = js.Lib.document.createElement("th");
	this.labelNode.scope = "row";
	this.labelNode.className = "formFieldLabel";
	this.domNode.appendChild(this.labelNode);
	this.valueNode = js.Lib.document.createElement("td");
	this.valueNode.className = "formFieldValue";
	this.domNode.appendChild(this.valueNode);
	$s.pop();
}}
cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.__name__ = ["cms","mvcs","modules","content","view","components","form","dom","FieldEditorDOM"];
cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype.name = null;
cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype.label = null;
cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype.disabled = null;
cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype.parameters = null;
cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype.value = null;
cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype.onChanged = null;
cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype.domNode = null;
cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype.labelNode = null;
cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype.valueNode = null;
cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype.setName = function(value) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM::setName");
	var $spos = $s.length;
	{
		var $tmp = this.name = value;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype.setLabel = function(value) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM::setLabel");
	var $spos = $s.length;
	this.labelNode.innerHTML = value;
	this.label = value;
	{
		var $tmp = this.label;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype.setDisabled = function(value) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM::setDisabled");
	var $spos = $s.length;
	{
		var $tmp = this.disabled = value;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype.setParameters = function(value) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM::setParameters");
	var $spos = $s.length;
	{
		var $tmp = this.parameters = value;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype.setValue = function(value) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM::setValue");
	var $spos = $s.length;
	if(this.value == value) {
		var $tmp = this.value;
		$s.pop();
		return $tmp;
	}
	this.value = value;
	this.onChanged.dispatch();
	{
		$s.pop();
		return value;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype.__class__ = cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM;
cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.__interfaces__ = [cms.mvcs.view.components.dom.IViewComponentDOM,cms.mvcs.modules.content.view.components.form.IFieldEditor];
cms.mvcs.modules.content.view.components.form.IHiddenFieldEditor = function() { }
cms.mvcs.modules.content.view.components.form.IHiddenFieldEditor.__name__ = ["cms","mvcs","modules","content","view","components","form","IHiddenFieldEditor"];
cms.mvcs.modules.content.view.components.form.IHiddenFieldEditor.prototype.__class__ = cms.mvcs.modules.content.view.components.form.IHiddenFieldEditor;
cms.mvcs.modules.content.view.components.form.IHiddenFieldEditor.__interfaces__ = [cms.mvcs.modules.content.view.components.form.IFieldEditor];
cms.mvcs.modules.content.view.components.form.dom.HiddenFieldEditorDOM = function(p) { if( p === $_ ) return; {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.HiddenFieldEditorDOM::new");
	var $spos = $s.length;
	cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.call(this);
	this.hiddenNode = js.Lib.document.createElement("input");
	this.hiddenNode.type = "hidden";
	this.valueNode.appendChild(this.hiddenNode);
	$s.pop();
}}
cms.mvcs.modules.content.view.components.form.dom.HiddenFieldEditorDOM.__name__ = ["cms","mvcs","modules","content","view","components","form","dom","HiddenFieldEditorDOM"];
cms.mvcs.modules.content.view.components.form.dom.HiddenFieldEditorDOM.__super__ = cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM;
for(var k in cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype ) cms.mvcs.modules.content.view.components.form.dom.HiddenFieldEditorDOM.prototype[k] = cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype[k];
cms.mvcs.modules.content.view.components.form.dom.HiddenFieldEditorDOM.prototype.hiddenNode = null;
cms.mvcs.modules.content.view.components.form.dom.HiddenFieldEditorDOM.prototype.setName = function(value) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.HiddenFieldEditorDOM::setName");
	var $spos = $s.length;
	this.hiddenNode.name = value;
	{
		var $tmp = cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype.setName.call(this,value);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.HiddenFieldEditorDOM.prototype.setValue = function(value) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.HiddenFieldEditorDOM::setValue");
	var $spos = $s.length;
	if(this.value == value) {
		$s.pop();
		return;
	}
	this.hiddenNode.value = value.toString();
	{
		var $tmp = cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype.setValue.call(this,value);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.HiddenFieldEditorDOM.prototype.__class__ = cms.mvcs.modules.content.view.components.form.dom.HiddenFieldEditorDOM;
cms.mvcs.modules.content.view.components.form.dom.HiddenFieldEditorDOM.__interfaces__ = [cms.mvcs.modules.content.view.components.form.IHiddenFieldEditor];
cms.mvcs.modules.content.view.components.form.dom.PasswordFieldEditorDOM = function(p) { if( p === $_ ) return; {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.PasswordFieldEditorDOM::new");
	var $spos = $s.length;
	cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.call(this);
	this.textNode = js.Lib.document.createElement("input");
	this.textNode.type = "password";
	this.textNode.className = "passwordField";
	this.textNode.onchange = $closure(this,"_handleTextChanged");
	this.valueNode.appendChild(this.textNode);
	$s.pop();
}}
cms.mvcs.modules.content.view.components.form.dom.PasswordFieldEditorDOM.__name__ = ["cms","mvcs","modules","content","view","components","form","dom","PasswordFieldEditorDOM"];
cms.mvcs.modules.content.view.components.form.dom.PasswordFieldEditorDOM.__super__ = cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM;
for(var k in cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype ) cms.mvcs.modules.content.view.components.form.dom.PasswordFieldEditorDOM.prototype[k] = cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype[k];
cms.mvcs.modules.content.view.components.form.dom.PasswordFieldEditorDOM.prototype.maxLength = null;
cms.mvcs.modules.content.view.components.form.dom.PasswordFieldEditorDOM.prototype.textNode = null;
cms.mvcs.modules.content.view.components.form.dom.PasswordFieldEditorDOM.prototype._handleTextChanged = function(event) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.PasswordFieldEditorDOM::_handleTextChanged");
	var $spos = $s.length;
	this.setValue(this.textNode.value);
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.PasswordFieldEditorDOM.prototype.setMaxLength = function(value) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.PasswordFieldEditorDOM::setMaxLength");
	var $spos = $s.length;
	this.maxLength = value;
	this.textNode.maxLength = this.maxLength;
	{
		var $tmp = this.maxLength;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.PasswordFieldEditorDOM.prototype.setName = function(value) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.PasswordFieldEditorDOM::setName");
	var $spos = $s.length;
	cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype.setName.call(this,value);
	this.textNode.name = this.name;
	{
		var $tmp = this.name;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.PasswordFieldEditorDOM.prototype.setDisabled = function(value) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.PasswordFieldEditorDOM::setDisabled");
	var $spos = $s.length;
	cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype.setDisabled.call(this,value);
	this.textNode.disabled = this.disabled;
	{
		var $tmp = this.disabled;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.PasswordFieldEditorDOM.prototype.setParameters = function(value) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.PasswordFieldEditorDOM::setParameters");
	var $spos = $s.length;
	cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype.setParameters.call(this,value);
	if(this.parameters != null) if(this.parameters.exists("maxLength")) this.setMaxLength(this.parameters.get("maxLength"));
	{
		var $tmp = this.parameters;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.PasswordFieldEditorDOM.prototype.setValue = function(value) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.PasswordFieldEditorDOM::setValue");
	var $spos = $s.length;
	this.textNode.value = value;
	cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype.setValue.call(this,value);
	{
		var $tmp = this.value;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.PasswordFieldEditorDOM.prototype.__class__ = cms.mvcs.modules.content.view.components.form.dom.PasswordFieldEditorDOM;
cms.mvcs.modules.content.view.components.form.dom.PasswordFieldEditorDOM.__interfaces__ = [cms.mvcs.modules.content.view.components.form.IPasswordFieldEditor];
if(!cms.mvcs.core.popup.controller) cms.mvcs.core.popup.controller = {}
cms.mvcs.core.popup.controller.HidePopupCommand = function() { }
cms.mvcs.core.popup.controller.HidePopupCommand.__name__ = ["cms","mvcs","core","popup","controller","HidePopupCommand"];
cms.mvcs.core.popup.controller.HidePopupCommand.__super__ = cms.mvcs.controller.CMSCommand;
for(var k in cms.mvcs.controller.CMSCommand.prototype ) cms.mvcs.core.popup.controller.HidePopupCommand.prototype[k] = cms.mvcs.controller.CMSCommand.prototype[k];
cms.mvcs.core.popup.controller.HidePopupCommand.prototype.popupMessage = null;
cms.mvcs.core.popup.controller.HidePopupCommand.prototype.popupContainer = null;
cms.mvcs.core.popup.controller.HidePopupCommand.prototype.execute = function() {
	$s.push("cms.mvcs.core.popup.controller.HidePopupCommand::execute");
	var $spos = $s.length;
	this.popupContainer.hidePopup(this.popupMessage.popup);
	$s.pop();
}
cms.mvcs.core.popup.controller.HidePopupCommand.prototype.__class__ = cms.mvcs.core.popup.controller.HidePopupCommand;
if(!cms.mvcs.core.encoding) cms.mvcs.core.encoding = {}
if(!cms.mvcs.core.encoding.services) cms.mvcs.core.encoding.services = {}
cms.mvcs.core.encoding.services.IEncoderService = function() { }
cms.mvcs.core.encoding.services.IEncoderService.__name__ = ["cms","mvcs","core","encoding","services","IEncoderService"];
cms.mvcs.core.encoding.services.IEncoderService.prototype.contentType = null;
cms.mvcs.core.encoding.services.IEncoderService.prototype.encode = null;
cms.mvcs.core.encoding.services.IEncoderService.prototype.decode = null;
cms.mvcs.core.encoding.services.IEncoderService.prototype.__class__ = cms.mvcs.core.encoding.services.IEncoderService;
cms.mvcs.core.encoding.services.XMLEncoder = function(classMappings) { if( classMappings === $_ ) return; {
	$s.push("cms.mvcs.core.encoding.services.XMLEncoder::new");
	var $spos = $s.length;
	this._decoderClassMappings = classMappings;
	this._encoderClassMappings = new core.Hash();
	{ var $it0 = classMappings.keys();
	while( $it0.hasNext() ) { var key = $it0.next();
	this._encoderClassMappings.set(core.Type.getClassName(classMappings.get(key)),key);
	}}
	$s.pop();
}}
cms.mvcs.core.encoding.services.XMLEncoder.__name__ = ["cms","mvcs","core","encoding","services","XMLEncoder"];
cms.mvcs.core.encoding.services.XMLEncoder.prototype.contentType = null;
cms.mvcs.core.encoding.services.XMLEncoder.prototype._decoderClassMappings = null;
cms.mvcs.core.encoding.services.XMLEncoder.prototype._encoderClassMappings = null;
cms.mvcs.core.encoding.services.XMLEncoder.prototype.encode = function(object) {
	$s.push("cms.mvcs.core.encoding.services.XMLEncoder::encode");
	var $spos = $s.length;
	var output = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
	output += this._encodeElement(object);
	{
		$s.pop();
		return output;
	}
	$s.pop();
}
cms.mvcs.core.encoding.services.XMLEncoder.prototype.decode = function(object) {
	$s.push("cms.mvcs.core.encoding.services.XMLEncoder::decode");
	var $spos = $s.length;
	{
		var $tmp = this._decodeElement(core.Xml.parse(object).firstElement());
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.core.encoding.services.XMLEncoder.prototype._encodeElement = function(element,references,indent) {
	$s.push("cms.mvcs.core.encoding.services.XMLEncoder::_encodeElement");
	var $spos = $s.length;
	if(indent == null) indent = "";
	if(references == null) references = new core.Array();
	if(element == null) {
		var $tmp = indent + "<null/>\n";
		$s.pop();
		return $tmp;
	}
	if(core.Std["is"](element,core.Bool)) {
		var $tmp = indent + "<boolean>" + (element?"true":"false") + "</boolean>\n";
		$s.pop();
		return $tmp;
	}
	if(core.Std["is"](element,core.Int)) {
		var $tmp = indent + "<integer>" + element + "</integer>\n";
		$s.pop();
		return $tmp;
	}
	if(core.Std["is"](element,core.Float)) {
		var $tmp = indent + "<float>" + element + "</float>\n";
		$s.pop();
		return $tmp;
	}
	if(core.Std["is"](element,core.String)) {
		var $tmp = indent + "<string>" + core.StringTools.htmlEscape(element) + "</string>\n";
		$s.pop();
		return $tmp;
	}
	var id = references.length;
	{
		var _g1 = 0, _g = references.length;
		while(_g1 < _g) {
			var index = _g1++;
			if(references[index] != element) continue;
			id = index;
			break;
		}
	}
	if(id < references.length) {
		var $tmp = indent + "<reference id=\"" + id + "\"/>\n";
		$s.pop();
		return $tmp;
	}
	else references.push(element);
	if(core.Std["is"](element,core.Array)) {
		var values = "";
		{
			var _g = 0, _g1 = (function($this) {
				var $r;
				var $t = element;
				if(core.Std["is"]($t,core.Array)) $t;
				else throw "Class cast error";
				$r = $t;
				return $r;
			}(this));
			while(_g < _g1.length) {
				var value = _g1[_g];
				++_g;
				values += this._encodeElement(value,references.slice(0),indent + "\t");
			}
		}
		{
			var $tmp = indent + "<array id=\"" + id + "\">\n" + values + indent + "</array>\n";
			$s.pop();
			return $tmp;
		}
	}
	if(core.Std["is"](element,core.Hash)) {
		var values = "";
		var object = element;
		{ var $it0 = object.keys();
		while( $it0.hasNext() ) { var key = $it0.next();
		values += indent + "\t" + "<" + key + ">\n" + this._encodeElement(object.get(key),references.slice(0),indent + "\t\t") + indent + "\t" + "</" + key + ">\n";
		}}
		{
			var $tmp = indent + "<object id=\"" + id + "\">\n" + values + indent + "</object>\n";
			$s.pop();
			return $tmp;
		}
	}
	if(core.Std["is"](element,core.Dynamic)) {
		var values = "";
		var className = core.Type.getClassName(core.Type.getClass(element));
		{
			var _g = 0, _g1 = core.Reflect.fields(element);
			while(_g < _g1.length) {
				var key = _g1[_g];
				++_g;
				values += indent + "\t" + "<" + key + ">\n" + this._encodeElement(core.Reflect.field(element,key),references.slice(0),indent + "\t\t") + indent + "\t" + "</" + key + ">\n";
			}
		}
		{
			var $tmp = indent + "<object id=\"" + id + "\"" + (this._encoderClassMappings.exists(className)?" class=\"" + this._encoderClassMappings.get(className) + "\"":"") + ">\n" + values + indent + "</object>\n";
			$s.pop();
			return $tmp;
		}
	}
	{
		var $tmp = indent + "<null/>\n";
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.core.encoding.services.XMLEncoder.prototype._decodeElement = function(element,references) {
	$s.push("cms.mvcs.core.encoding.services.XMLEncoder::_decodeElement");
	var $spos = $s.length;
	if(references == null) references = new core.Hash();
	switch(element.getNodeName()) {
	case "null":{
		{
			$s.pop();
			return null;
		}
	}break;
	case "boolean":{
		{
			var $tmp = element.firstChild().getNodeValue() == "true";
			$s.pop();
			return $tmp;
		}
	}break;
	case "integer":{
		{
			var $tmp = core.Std.parseInt(element.firstChild().getNodeValue());
			$s.pop();
			return $tmp;
		}
	}break;
	case "float":{
		{
			var $tmp = core.Std.parseFloat(element.firstChild().getNodeValue());
			$s.pop();
			return $tmp;
		}
	}break;
	case "string":{
		{
			var $tmp = element.firstChild().getNodeValue();
			$s.pop();
			return $tmp;
		}
	}break;
	case "array":{
		var array = new core.Array();
		if(element.exists("id")) references.set(element.get("id"),array);
		{ var $it0 = element.elements();
		while( $it0.hasNext() ) { var child = $it0.next();
		array.push(this._decodeElement(child));
		}}
		{
			$s.pop();
			return array;
		}
	}break;
	case "object":{
		var objectClass = element.exists("class") && this._decoderClassMappings.exists(element.get("class"))?this._decoderClassMappings.get(element.get("class")):core.Hash;
		var object = core.Type.createInstance(objectClass,[]);
		if(element.exists("id")) references.set(element.get("id"),object);
		{ var $it1 = element.elements();
		while( $it1.hasNext() ) { var key = $it1.next();
		if(core.Std["is"](object,core.Hash)) ((function($this) {
			var $r;
			var $t = object;
			if(core.Std["is"]($t,core.Hash)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).set(key.getNodeName(),this._decodeElement(key.firstElement()));
		else object[key.getNodeName()] = this._decodeElement(key.firstElement());
		}}
		{
			$s.pop();
			return object;
		}
	}break;
	case "reference":{
		{
			var $tmp = references.get(element.get("id"));
			$s.pop();
			return $tmp;
		}
	}break;
	}
	{
		$s.pop();
		return null;
	}
	$s.pop();
}
cms.mvcs.core.encoding.services.XMLEncoder.prototype.getContentType = function() {
	$s.push("cms.mvcs.core.encoding.services.XMLEncoder::getContentType");
	var $spos = $s.length;
	{
		$s.pop();
		return "text/xml";
	}
	$s.pop();
}
cms.mvcs.core.encoding.services.XMLEncoder.prototype.__class__ = cms.mvcs.core.encoding.services.XMLEncoder;
cms.mvcs.core.encoding.services.XMLEncoder.__interfaces__ = [cms.mvcs.core.encoding.services.IEncoderService];
cms.mvcs.modules.content.view.components.form.ISmartlistFieldEditor = function() { }
cms.mvcs.modules.content.view.components.form.ISmartlistFieldEditor.__name__ = ["cms","mvcs","modules","content","view","components","form","ISmartlistFieldEditor"];
cms.mvcs.modules.content.view.components.form.ISmartlistFieldEditor.prototype.__class__ = cms.mvcs.modules.content.view.components.form.ISmartlistFieldEditor;
cms.mvcs.modules.content.view.components.form.ISmartlistFieldEditor.__interfaces__ = [cms.mvcs.modules.content.view.components.form.IItemFieldEditor];
cms.mvcs.modules.content.view.components.form.IListFieldEditor = function() { }
cms.mvcs.modules.content.view.components.form.IListFieldEditor.__name__ = ["cms","mvcs","modules","content","view","components","form","IListFieldEditor"];
cms.mvcs.modules.content.view.components.form.IListFieldEditor.prototype.__class__ = cms.mvcs.modules.content.view.components.form.IListFieldEditor;
cms.mvcs.modules.content.view.components.form.IListFieldEditor.__interfaces__ = [cms.mvcs.modules.content.view.components.form.IItemFieldEditor];
cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM = function(p) { if( p === $_ ) return; {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM::new");
	var $spos = $s.length;
	this._listID = "list" + core.Std.random(2147483646);
	cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.call(this);
	this.onItemSelected = new mohu.messages.Dispatcher(this);
	this.onItemAddClicked = new mohu.messages.Dispatcher(this);
	this.onItemRemoveClicked = new mohu.messages.Dispatcher(this);
	this.allowAdd = false;
	this.allowCreate = true;
	this.allowRemove = false;
	this.allowDelete = true;
	this._selectedIndex = -1;
	this._itemIDs = new core.Array();
	this.containerNode = js.Lib.document.createElement("div");
	this.containerNode.className = "listField";
	this.listNode = js.Lib.document.createElement("ul");
	this.listNode.className = "listFieldList";
	this.containerNode.appendChild(this.listNode);
	this.addButtonNode = js.Lib.document.createElement("button");
	this.addButtonNode.className = "listFieldAddButton";
	this.addButtonNode.appendChild(js.Lib.document.createTextNode("Add an item"));
	this.addButtonNode.onclick = $closure(this,"_handleAddButtonClicked");
	$(this.addButtonNode).button();
	this.containerNode.appendChild(this.addButtonNode);
	this.valueNode.appendChild(this.containerNode);
	var self = this;
	$(this.listNode).sortable({update: function(event, ui) { self._handleListSorted(); }});
	$s.pop();
}}
cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM.__name__ = ["cms","mvcs","modules","content","view","components","form","dom","ListFieldEditorDOM"];
cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM.__super__ = cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM;
for(var k in cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype ) cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM.prototype[k] = cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype[k];
cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM.prototype.datatype = null;
cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM.prototype.allowAdd = null;
cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM.prototype.allowCreate = null;
cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM.prototype.allowRemove = null;
cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM.prototype.allowDelete = null;
cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM.prototype.selectedIndex = null;
cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM.prototype.selectedItem = null;
cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM.prototype.containerNode = null;
cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM.prototype.addButtonNode = null;
cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM.prototype.listNode = null;
cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM.prototype.onItemSelected = null;
cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM.prototype.onItemAddClicked = null;
cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM.prototype.onItemRemoveClicked = null;
cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM.prototype._listID = null;
cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM.prototype._selectedIndex = null;
cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM.prototype._itemIDs = null;
cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM.prototype._handleListSorted = function() {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM::_handleListSorted");
	var $spos = $s.length;
	var items = ((function($this) {
		var $r;
		var $t = $this.value;
		if(core.Std["is"]($t,cms.mvcs.core.api.model.vo.ListVO)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this))).items;
	var itemIDs = $(this.listNode).sortable("toArray");
	{
		var _g1 = 0, _g = this._itemIDs.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(itemIDs[i] == this._itemIDs[i]) continue;
			{
				var _g3 = 0, _g2 = this._itemIDs.length;
				while(_g3 < _g2) {
					var j = _g3++;
					if(this._itemIDs[j] != itemIDs[i]) continue;
					this._itemIDs.insert(i,this._itemIDs.splice(j,1)[0]);
					items.insert(i,items.splice(j,1)[0]);
					break;
				}
			}
		}
	}
	this.onChanged.dispatch();
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM.prototype.insertItemAt = function(item,index) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM::insertItemAt");
	var $spos = $s.length;
	var items = ((function($this) {
		var $r;
		var $t = $this.value;
		if(core.Std["is"]($t,cms.mvcs.core.api.model.vo.ListVO)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this))).items;
	if(index < 0) throw "Index '" + this.value + "' is out of range";
	if(index > items.length) throw "Index '" + this.value + "' is out of range";
	this._addItemNode(item,index);
	items.insert(index,item);
	if(index < this._selectedIndex) this._selectedIndex++;
	this.onChanged.dispatch();
	{
		$s.pop();
		return item;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM.prototype.removeItemAt = function(index) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM::removeItemAt");
	var $spos = $s.length;
	var items = ((function($this) {
		var $r;
		var $t = $this.value;
		if(core.Std["is"]($t,cms.mvcs.core.api.model.vo.ListVO)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this))).items;
	if(index < 0) throw "Index '" + this.value + "' is out of range";
	if(index >= items.length) throw "Index '" + this.value + "' is out of range";
	this.listNode.removeChild(this.listNode.childNodes[index]);
	var item = items.splice(index,1)[0];
	if(index == this._selectedIndex) this.setSelectedIndex(this._selectedIndex + 1);
	if(index < this._selectedIndex) this._selectedIndex--;
	this.onChanged.dispatch();
	{
		$s.pop();
		return item;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM.prototype._handleRadioNodeSelected = function(event) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM::_handleRadioNodeSelected");
	var $spos = $s.length;
	this.setSelectedItem(new cms.mvcs.core.api.model.vo.ReferenceVO(this.datatype,core.Std.parseInt(event.target.value)));
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM.prototype._handleAddButtonClicked = function(event) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM::_handleAddButtonClicked");
	var $spos = $s.length;
	this.onItemAddClicked.dispatch(new cms.mvcs.modules.content.messages.AddReferenceMessage(this));
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM.prototype._handleRemoveButtonClicked = function(event) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM::_handleRemoveButtonClicked");
	var $spos = $s.length;
	this.onItemRemoveClicked.dispatch();
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM.prototype.setValue = function(value) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM::setValue");
	var $spos = $s.length;
	if(value != null && !core.Std["is"](value,cms.mvcs.core.api.model.vo.ListVO)) throw "Specified value '" + value + "' is not a ListVO";
	while(this.listNode.hasChildNodes()) this.listNode.removeChild(this.listNode.firstChild);
	if(value != null) {
		var _g = 0, _g1 = ((function($this) {
			var $r;
			var $t = value;
			if(core.Std["is"]($t,cms.mvcs.core.api.model.vo.ListVO)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).items;
		while(_g < _g1.length) {
			var item = _g1[_g];
			++_g;
			this._addItemNode(item);
		}
	}
	cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype.setValue.call(this,value);
	{
		var $tmp = this.value;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM.prototype._addItemNode = function(item,index) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM::_addItemNode");
	var $spos = $s.length;
	if(index == null) index = -1;
	var listItemID = this._listID + "-" + core.Std.random(2147483646);
	var itemNode = js.Lib.document.createElement("li");
	itemNode.className = "listFieldItem";
	itemNode.id = listItemID;
	var radioNode = js.Lib.document.createElement("input");
	radioNode.type = "radio";
	radioNode.name = this._listID;
	radioNode.id = listItemID + "-radio";
	radioNode.value = core.Std.string(item.id);
	radioNode.onchange = $closure(this,"_handleRadioNodeSelected");
	itemNode.appendChild(radioNode);
	var labelNode = js.Lib.document.createElement("label");
	labelNode.className = "listFieldItemLabel";
	labelNode["htmlFor"] = listItemID + "-radio";
	labelNode.innerHTML = item.table + " #" + item.id;
	itemNode.appendChild(labelNode);
	var removeNode = js.Lib.document.createElement("button");
	removeNode.className = "listFieldItemRemove";
	removeNode.innerHTML = "Remove this item";
	itemNode.appendChild(removeNode);
	if(index == -1 || index == this.listNode.childNodes.length) {
		this.listNode.appendChild(itemNode);
		this._itemIDs.push(listItemID);
	}
	else {
		this.listNode.insertBefore(itemNode,this.listNode.childNodes[index]);
		this._itemIDs.insert(index,listItemID);
	}
	$(removeNode).button({icons:{primary:"ui-icon-close"}, text: false});
	$(radioNode).button();
	$(itemNode).buttonset();
	{
		$s.pop();
		return item;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM.prototype.getSelectedIndex = function() {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM::getSelectedIndex");
	var $spos = $s.length;
	{
		var $tmp = this._selectedIndex;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM.prototype.setSelectedIndex = function(value) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM::setSelectedIndex");
	var $spos = $s.length;
	if(value < -1) throw "Selected index '" + value + "' is out of range";
	if(value >= (this.value == null?0:((function($this) {
		var $r;
		var $t = $this.value;
		if(core.Std["is"]($t,cms.mvcs.core.api.model.vo.ListVO)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this))).items.length)) throw "Selected index '" + value + "' is out of range";
	this._selectedIndex = value;
	this.onItemSelected.dispatch(new cms.mvcs.modules.content.messages.ItemSelectedMessage(this.getSelectedItem()));
	{
		$s.pop();
		return value;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM.prototype.getSelectedItem = function() {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM::getSelectedItem");
	var $spos = $s.length;
	{
		var $tmp = this._selectedIndex == -1?null:((function($this) {
			var $r;
			var $t = $this.value;
			if(core.Std["is"]($t,cms.mvcs.core.api.model.vo.ListVO)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).items[this._selectedIndex];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM.prototype.setSelectedItem = function(value) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM::setSelectedItem");
	var $spos = $s.length;
	var items = ((function($this) {
		var $r;
		var $t = $this.value;
		if(core.Std["is"]($t,cms.mvcs.core.api.model.vo.ListVO)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this))).items;
	if(value == null) {
		this.setSelectedIndex(-1);
	}
	else {
		{
			var _g1 = 0, _g = items.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(items[i].table != value.table || items[i].id != value.id) continue;
				this.setSelectedIndex(i);
				break;
			}
		}
	}
	{
		$s.pop();
		return value;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM.prototype.__class__ = cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM;
cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM.__interfaces__ = [cms.mvcs.modules.content.view.components.form.IListFieldEditor];
cms.mvcs.modules.content.controller.AddReferenceCommand = function() { }
cms.mvcs.modules.content.controller.AddReferenceCommand.__name__ = ["cms","mvcs","modules","content","controller","AddReferenceCommand"];
cms.mvcs.modules.content.controller.AddReferenceCommand.__super__ = cms.mvcs.controller.CMSCommand;
for(var k in cms.mvcs.controller.CMSCommand.prototype ) cms.mvcs.modules.content.controller.AddReferenceCommand.prototype[k] = cms.mvcs.controller.CMSCommand.prototype[k];
cms.mvcs.modules.content.controller.AddReferenceCommand.prototype.addReferenceMessage = null;
cms.mvcs.modules.content.controller.AddReferenceCommand.prototype.popup = null;
cms.mvcs.modules.content.controller.AddReferenceCommand.prototype.execute = function() {
	$s.push("cms.mvcs.modules.content.controller.AddReferenceCommand::execute");
	var $spos = $s.length;
	this.popup.datatype = this.addReferenceMessage.editor.datatype;
	this.popup.onCloseClicked.addListener($closure(this,"_handleCloseClicked"));
	this.popup.onItemSelected.addListener($closure(this,"_handleItemSelected"));
	this.cmsHub.onShowPopup.dispatch(new cms.mvcs.core.popup.messages.PopupMessage(this.popup));
	this.cmsHub.onRetrieveItemsFailed.addListener($closure(this,"_handleRetrieveItemFailed"));
	this.cmsHub.onRetrieveItemsCompleted.addListener($closure(this,"_handleRetrieveItemCompleted"));
	this.cmsHub.onRetrieveItems.dispatch(new cms.mvcs.core.api.messages.content.RetrieveItemsMessage(this.addReferenceMessage.editor.datatype));
	$s.pop();
}
cms.mvcs.modules.content.controller.AddReferenceCommand.prototype._handleRetrieveItemFailed = function(message) {
	$s.push("cms.mvcs.modules.content.controller.AddReferenceCommand::_handleRetrieveItemFailed");
	var $spos = $s.length;
	this.cmsHub.onRetrieveItemsFailed.removeListener($closure(this,"_handleRetrieveItemFailed"));
	this.cmsHub.onRetrieveItemsCompleted.removeListener($closure(this,"_handleRetrieveItemCompleted"));
	this.popup.onCloseClicked.removeListener($closure(this,"_handleCloseClicked"));
	this.popup.onItemSelected.removeListener($closure(this,"_handleItemSelected"));
	this.cmsHub.onHidePopup.dispatch(new cms.mvcs.core.popup.messages.PopupMessage(this.popup));
	$s.pop();
}
cms.mvcs.modules.content.controller.AddReferenceCommand.prototype._handleRetrieveItemCompleted = function(message) {
	$s.push("cms.mvcs.modules.content.controller.AddReferenceCommand::_handleRetrieveItemCompleted");
	var $spos = $s.length;
	this.cmsHub.onRetrieveItemsFailed.removeListener($closure(this,"_handleRetrieveItemFailed"));
	this.cmsHub.onRetrieveItemsCompleted.removeListener($closure(this,"_handleRetrieveItemCompleted"));
	this.popup.setItems(((function($this) {
		var $r;
		var $t = message;
		if(core.Std["is"]($t,cms.mvcs.core.api.messages.content.RetrieveItemsMessage)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this))).items);
	$s.pop();
}
cms.mvcs.modules.content.controller.AddReferenceCommand.prototype._handleCloseClicked = function(message) {
	$s.push("cms.mvcs.modules.content.controller.AddReferenceCommand::_handleCloseClicked");
	var $spos = $s.length;
	this.popup.onCloseClicked.removeListener($closure(this,"_handleCloseClicked"));
	this.popup.onItemSelected.removeListener($closure(this,"_handleItemSelected"));
	$s.pop();
}
cms.mvcs.modules.content.controller.AddReferenceCommand.prototype._handleItemSelected = function(message) {
	$s.push("cms.mvcs.modules.content.controller.AddReferenceCommand::_handleItemSelected");
	var $spos = $s.length;
	this.popup.onCloseClicked.removeListener($closure(this,"_handleCloseClicked"));
	this.popup.onItemSelected.removeListener($closure(this,"_handleItemSelected"));
	this.addReferenceMessage.item = this.popup.selectedItem;
	this.cmsHub.onHidePopup.dispatch(new cms.mvcs.core.popup.messages.PopupMessage(this.popup));
	this.cmsHub.onAddReferenceCompleted.dispatch(this.addReferenceMessage);
	$s.pop();
}
cms.mvcs.modules.content.controller.AddReferenceCommand.prototype.__class__ = cms.mvcs.modules.content.controller.AddReferenceCommand;
cms.mvcs.core.api.controller.content.UpdateItemCommand = function() { }
cms.mvcs.core.api.controller.content.UpdateItemCommand.__name__ = ["cms","mvcs","core","api","controller","content","UpdateItemCommand"];
cms.mvcs.core.api.controller.content.UpdateItemCommand.__super__ = cms.mvcs.controller.CMSCommand;
for(var k in cms.mvcs.controller.CMSCommand.prototype ) cms.mvcs.core.api.controller.content.UpdateItemCommand.prototype[k] = cms.mvcs.controller.CMSCommand.prototype[k];
cms.mvcs.core.api.controller.content.UpdateItemCommand.prototype.updateItemMessage = null;
cms.mvcs.core.api.controller.content.UpdateItemCommand.prototype.service = null;
cms.mvcs.core.api.controller.content.UpdateItemCommand.prototype.authenticationModel = null;
cms.mvcs.core.api.controller.content.UpdateItemCommand.prototype.execute = function() {
	$s.push("cms.mvcs.core.api.controller.content.UpdateItemCommand::execute");
	var $spos = $s.length;
	var value = new core.Hash();
	{ var $it0 = this.updateItemMessage.item.value.keys();
	while( $it0.hasNext() ) { var field = $it0.next();
	{
		var fieldValue = this.updateItemMessage.item.value.get(field);
		if(core.Std["is"](fieldValue,cms.mvcs.core.api.model.vo.ReferenceVO)) {
			var reference = fieldValue;
			fieldValue = new cms.mvcs.core.api.model.vo.ReferenceVO(reference.table,reference.id);
		}
		else if(core.Std["is"](fieldValue,cms.mvcs.core.api.model.vo.ListVO)) {
			var list = fieldValue;
			fieldValue = new cms.mvcs.core.api.model.vo.ListVO(list.table,list.items);
		}
		else if(core.Std["is"](fieldValue,cms.mvcs.core.api.model.vo.SmartlistVO)) {
			var smartList = fieldValue;
			fieldValue = new cms.mvcs.core.api.model.vo.SmartlistVO(smartList.table,smartList.filter,smartList.sort,smartList.descending,smartList.offset,smartList.limit,smartList.autoload);
		}
		value.set(field,fieldValue);
	}
	}}
	this.service.onLoadFailed.addListener($closure(this,"_handleLoadFailed"));
	this.service.onLoadCompleted.addListener($closure(this,"_handleLoadCompleted"));
	this.service.updateItem(this.updateItemMessage.item.table,this.updateItemMessage.item.id,this.updateItemMessage.item);
	$s.pop();
}
cms.mvcs.core.api.controller.content.UpdateItemCommand.prototype._handleLoadFailed = function(message) {
	$s.push("cms.mvcs.core.api.controller.content.UpdateItemCommand::_handleLoadFailed");
	var $spos = $s.length;
	this.service.onLoadFailed.removeListener($closure(this,"_handleLoadFailed"));
	this.service.onLoadCompleted.removeListener($closure(this,"_handleLoadCompleted"));
	this.cmsHub.onError.dispatch(new cms.mvcs.messages.ErrorMessage("Failed to update item: " + this.service.error));
	this.cmsHub.onUpdateItemFailed.dispatch(this.updateItemMessage);
	$s.pop();
}
cms.mvcs.core.api.controller.content.UpdateItemCommand.prototype._handleLoadCompleted = function(message) {
	$s.push("cms.mvcs.core.api.controller.content.UpdateItemCommand::_handleLoadCompleted");
	var $spos = $s.length;
	this.service.onLoadFailed.removeListener($closure(this,"_handleLoadFailed"));
	this.service.onLoadCompleted.removeListener($closure(this,"_handleLoadCompleted"));
	this.updateItemMessage.item.author = this.authenticationModel.currentUser.id;
	this.updateItemMessage.item.username = this.authenticationModel.currentUser.username;
	this.updateItemMessage.item.date = core.Std["int"](core.Date.now().getTime());
	this.cmsHub.onUpdateItemCompleted.dispatch(this.updateItemMessage);
	$s.pop();
}
cms.mvcs.core.api.controller.content.UpdateItemCommand.prototype.__class__ = cms.mvcs.core.api.controller.content.UpdateItemCommand;
if(!cms.mvcs.core.panel.controller) cms.mvcs.core.panel.controller = {}
cms.mvcs.core.panel.controller.MovePanelCommand = function() { }
cms.mvcs.core.panel.controller.MovePanelCommand.__name__ = ["cms","mvcs","core","panel","controller","MovePanelCommand"];
cms.mvcs.core.panel.controller.MovePanelCommand.__super__ = cms.mvcs.controller.CMSCommand;
for(var k in cms.mvcs.controller.CMSCommand.prototype ) cms.mvcs.core.panel.controller.MovePanelCommand.prototype[k] = cms.mvcs.controller.CMSCommand.prototype[k];
cms.mvcs.core.panel.controller.MovePanelCommand.prototype.panelContainerMessage = null;
cms.mvcs.core.panel.controller.MovePanelCommand.prototype.execute = function() {
	$s.push("cms.mvcs.core.panel.controller.MovePanelCommand::execute");
	var $spos = $s.length;
	cms.mvcs.controller.CMSCommand.prototype.execute.call(this);
	var panelContainerModel = this.panelContainerMessage.getTarget();
	panelContainerModel.movePanelAt(this.panelContainerMessage.oldIndex,this.panelContainerMessage.newIndex);
	$s.pop();
}
cms.mvcs.core.panel.controller.MovePanelCommand.prototype.__class__ = cms.mvcs.core.panel.controller.MovePanelCommand;
cms.mvcs.core.api.services.content.UpdateItemService = function(p) { if( p === $_ ) return; {
	$s.push("cms.mvcs.core.api.services.content.UpdateItemService::new");
	var $spos = $s.length;
	cms.mvcs.core.api.services.APIService.call(this);
	$s.pop();
}}
cms.mvcs.core.api.services.content.UpdateItemService.__name__ = ["cms","mvcs","core","api","services","content","UpdateItemService"];
cms.mvcs.core.api.services.content.UpdateItemService.__super__ = cms.mvcs.core.api.services.APIService;
for(var k in cms.mvcs.core.api.services.APIService.prototype ) cms.mvcs.core.api.services.content.UpdateItemService.prototype[k] = cms.mvcs.core.api.services.APIService.prototype[k];
cms.mvcs.core.api.services.content.UpdateItemService.prototype.updateItem = function(table,id,item) {
	$s.push("cms.mvcs.core.api.services.content.UpdateItemService::updateItem");
	var $spos = $s.length;
	cms.mvcs.core.api.services.APIService.prototype.api.call(this,"content","PUT",table + "/" + id + "/",this.encoder.encode(item));
	$s.pop();
}
cms.mvcs.core.api.services.content.UpdateItemService.prototype.__class__ = cms.mvcs.core.api.services.content.UpdateItemService;
cms.mvcs.core.popup.view.controllers.IPopupViewController = function() { }
cms.mvcs.core.popup.view.controllers.IPopupViewController.__name__ = ["cms","mvcs","core","popup","view","controllers","IPopupViewController"];
cms.mvcs.core.popup.view.controllers.IPopupViewController.prototype.onCloseClicked = null;
cms.mvcs.core.popup.view.controllers.IPopupViewController.prototype.__class__ = cms.mvcs.core.popup.view.controllers.IPopupViewController;
cms.mvcs.core.popup.view.controllers.IPopupViewController.__interfaces__ = [mohu.mvcs.view.IViewController];
if(typeof js=='undefined') js = {}
js.Boot = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	$s.push("js.Boot::__unhtml");
	var $spos = $s.length;
	{
		var $tmp = s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.Boot.__trace = function(v,i) {
	$s.push("js.Boot::__trace");
	var $spos = $s.length;
	var msg = i != null?i.fileName + ":" + i.lineNumber + ": ":"";
	msg += js.Boot.__unhtml(js.Boot.__string_rec(v,"")) + "<br/>";
	var d = document.getElementById("haxe:trace");
	if(d == null) alert("No haxe:trace element defined\n" + msg);
	else d.innerHTML += msg;
	$s.pop();
}
js.Boot.__clear_trace = function() {
	$s.push("js.Boot::__clear_trace");
	var $spos = $s.length;
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
	else null;
	$s.pop();
}
js.Boot.__closure = function(o,f) {
	$s.push("js.Boot::__closure");
	var $spos = $s.length;
	var m = o[f];
	if(m == null) {
		$s.pop();
		return null;
	}
	var f1 = function() {
		$s.push("js.Boot::__closure@67");
		var $spos = $s.length;
		{
			var $tmp = m.apply(o,arguments);
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	f1.scope = o;
	f1.method = m;
	{
		$s.pop();
		return f1;
	}
	$s.pop();
}
js.Boot.__string_rec = function(o,s) {
	$s.push("js.Boot::__string_rec");
	var $spos = $s.length;
	if(o == null) {
		$s.pop();
		return "null";
	}
	if(s.length >= 5) {
		$s.pop();
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ != null || o.__ename__ != null)) t = "object";
	switch(t) {
	case "object":{
		if(o instanceof Array) {
			if(o.__enum__ != null) {
				if(o.length == 2) {
					var $tmp = o[0];
					$s.pop();
					return $tmp;
				}
				var str = o[0] + "(";
				s += "\t";
				{
					var _g1 = 2, _g = o.length;
					while(_g1 < _g) {
						var i = _g1++;
						if(i != 2) str += "," + js.Boot.__string_rec(o[i],s);
						else str += js.Boot.__string_rec(o[i],s);
					}
				}
				{
					var $tmp = str + ")";
					$s.pop();
					return $tmp;
				}
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			{
				var _g = 0;
				while(_g < l) {
					var i1 = _g++;
					str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
				}
			}
			str += "]";
			{
				$s.pop();
				return str;
			}
		}
		var tostr;
		try {
			tostr = o.toString;
		}
		catch( $e0 ) {
			{
				var e = $e0;
				{
					$e = [];
					while($s.length >= $spos) $e.unshift($s.pop());
					$s.push($e[0]);
					{
						$s.pop();
						return "???";
					}
				}
			}
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				$s.pop();
				return s2;
			}
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) continue;
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__") continue;
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		{
			$s.pop();
			return str;
		}
	}break;
	case "function":{
		{
			$s.pop();
			return "<function>";
		}
	}break;
	case "string":{
		{
			$s.pop();
			return o;
		}
	}break;
	default:{
		{
			var $tmp = core.String(o);
			$s.pop();
			return $tmp;
		}
	}break;
	}
	$s.pop();
}
js.Boot.__interfLoop = function(cc,cl) {
	$s.push("js.Boot::__interfLoop");
	var $spos = $s.length;
	if(cc == null) {
		$s.pop();
		return false;
	}
	if(cc == cl) {
		$s.pop();
		return true;
	}
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) {
				$s.pop();
				return true;
			}
		}
	}
	{
		var $tmp = js.Boot.__interfLoop(cc.__super__,cl);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.Boot.__instanceof = function(o,cl) {
	$s.push("js.Boot::__instanceof");
	var $spos = $s.length;
	try {
		if(o instanceof cl) {
			if(cl == core.Array) {
				var $tmp = o.__enum__ == null;
				$s.pop();
				return $tmp;
			}
			{
				$s.pop();
				return true;
			}
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) {
			$s.pop();
			return true;
		}
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				if(cl == null) {
					$s.pop();
					return false;
				}
			}
		}
	}
	switch(cl) {
	case core.Int:{
		{
			var $tmp = Math.ceil(o%2147483648.0) === o;
			$s.pop();
			return $tmp;
		}
	}break;
	case core.Float:{
		{
			var $tmp = typeof(o) == "number";
			$s.pop();
			return $tmp;
		}
	}break;
	case core.Bool:{
		{
			var $tmp = o === true || o === false;
			$s.pop();
			return $tmp;
		}
	}break;
	case core.String:{
		{
			var $tmp = typeof(o) == "string";
			$s.pop();
			return $tmp;
		}
	}break;
	case core.Dynamic:{
		{
			$s.pop();
			return true;
		}
	}break;
	default:{
		if(o == null) {
			$s.pop();
			return false;
		}
		{
			var $tmp = o.__enum__ == cl || cl == core.Class && o.__name__ != null || cl == core.Enum && o.__ename__ != null;
			$s.pop();
			return $tmp;
		}
	}break;
	}
	$s.pop();
}
js.Boot.__init = function() {
	$s.push("js.Boot::__init");
	var $spos = $s.length;
	js.Lib.isIE = typeof document!='undefined' && document.all != null && typeof window!='undefined' && window.opera == null;
	js.Lib.isOpera = typeof window!='undefined' && window.opera != null;
	eval(js.Boot.__ns).Array = Array;
	eval(js.Boot.__ns).String = String;
	eval(js.Boot.__ns).Math = Math;
	eval(js.Boot.__ns).Date = Date;
	core.Array.prototype.copy = core.Array.prototype.slice;
	core.Array.prototype.insert = function(i,x) {
		$s.push("js.Boot::__init@205");
		var $spos = $s.length;
		this.splice(i,0,x);
		$s.pop();
	}
	core.Array.prototype.remove = core.Array.prototype.indexOf?function(obj) {
		$s.push("js.Boot::__init@208");
		var $spos = $s.length;
		var idx = this.indexOf(obj);
		if(idx == -1) {
			$s.pop();
			return false;
		}
		this.splice(idx,1);
		{
			$s.pop();
			return true;
		}
		$s.pop();
	}:function(obj) {
		$s.push("js.Boot::__init@213");
		var $spos = $s.length;
		var i = 0;
		var l = this.length;
		while(i < l) {
			if(this[i] == obj) {
				this.splice(i,1);
				{
					$s.pop();
					return true;
				}
			}
			i++;
		}
		{
			$s.pop();
			return false;
		}
		$s.pop();
	}
	core.Array.prototype.iterator = function() {
		$s.push("js.Boot::__init@225");
		var $spos = $s.length;
		{
			var $tmp = { cur : 0, arr : this, hasNext : function() {
				$s.push("js.Boot::__init@225@229");
				var $spos = $s.length;
				{
					var $tmp = this.cur < this.arr.length;
					$s.pop();
					return $tmp;
				}
				$s.pop();
			}, next : function() {
				$s.push("js.Boot::__init@225@232");
				var $spos = $s.length;
				{
					var $tmp = this.arr[this.cur++];
					$s.pop();
					return $tmp;
				}
				$s.pop();
			}};
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	if(core.String.prototype.cca == null) core.String.prototype.cca = core.String.prototype.charCodeAt;
	core.String.prototype.charCodeAt = function(i) {
		$s.push("js.Boot::__init@239");
		var $spos = $s.length;
		var x = this.cca(i);
		if(x != x) {
			$s.pop();
			return null;
		}
		{
			$s.pop();
			return x;
		}
		$s.pop();
	}
	var oldsub = core.String.prototype.substr;
	core.String.prototype.substr = function(pos,len) {
		$s.push("js.Boot::__init@246");
		var $spos = $s.length;
		if(pos != null && pos != 0 && len != null && len < 0) {
			$s.pop();
			return "";
		}
		if(len == null) len = this.length;
		if(pos < 0) {
			pos = this.length + pos;
			if(pos < 0) pos = 0;
		}
		else if(len < 0) {
			len = this.length + len - pos;
		}
		{
			var $tmp = oldsub.apply(this,[pos,len]);
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	$closure = js.Boot.__closure;
	$s.pop();
}
js.Boot.prototype.__class__ = js.Boot;
mohu.mvcs.view.ViewController = function(view) { if( view === $_ ) return; {
	$s.push("mohu.mvcs.view.ViewController::new");
	var $spos = $s.length;
	this.view = view;
	$s.pop();
}}
mohu.mvcs.view.ViewController.__name__ = ["mohu","mvcs","view","ViewController"];
mohu.mvcs.view.ViewController.prototype.view = null;
mohu.mvcs.view.ViewController.prototype.__class__ = mohu.mvcs.view.ViewController;
mohu.mvcs.view.ViewController.__interfaces__ = [mohu.mvcs.view.IViewController];
if(!cms.mvcs.modules.structure) cms.mvcs.modules.structure = {}
if(!cms.mvcs.modules.structure.model) cms.mvcs.modules.structure.model = {}
cms.mvcs.modules.structure.model.TypesModel = function(types) { if( types === $_ ) return; {
	$s.push("cms.mvcs.modules.structure.model.TypesModel::new");
	var $spos = $s.length;
	this.onUpdated = new mohu.messages.Dispatcher(this);
	this.setTypes(types);
	$s.pop();
}}
cms.mvcs.modules.structure.model.TypesModel.__name__ = ["cms","mvcs","modules","structure","model","TypesModel"];
cms.mvcs.modules.structure.model.TypesModel.__super__ = mohu.mvcs.model.Model;
for(var k in mohu.mvcs.model.Model.prototype ) cms.mvcs.modules.structure.model.TypesModel.prototype[k] = mohu.mvcs.model.Model.prototype[k];
cms.mvcs.modules.structure.model.TypesModel.prototype.types = null;
cms.mvcs.modules.structure.model.TypesModel.prototype.rootType = null;
cms.mvcs.modules.structure.model.TypesModel.prototype.onUpdated = null;
cms.mvcs.modules.structure.model.TypesModel.prototype.getType = function(name) {
	$s.push("cms.mvcs.modules.structure.model.TypesModel::getType");
	var $spos = $s.length;
	{
		var $tmp = this.types.get(name);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.structure.model.TypesModel.prototype.addType = function(type,name) {
	$s.push("cms.mvcs.modules.structure.model.TypesModel::addType");
	var $spos = $s.length;
	if(this.types.exists(name)) throw "A type named '" + name + "' already exists in this model";
	this.types.set(name,type);
	this.onUpdated.dispatch();
	{
		$s.pop();
		return type;
	}
	$s.pop();
}
cms.mvcs.modules.structure.model.TypesModel.prototype.removeType = function(type) {
	$s.push("cms.mvcs.modules.structure.model.TypesModel::removeType");
	var $spos = $s.length;
	{ var $it0 = { iterator : $closure(this.types,"keys")}.iterator();
	while( $it0.hasNext() ) { var typeName = $it0.next();
	{
		if(this.types.get(typeName) != type) continue;
		this.types.remove(typeName);
		this.onUpdated.dispatch();
		{
			$s.pop();
			return type;
		}
	}
	}}
	throw "Specified type does not exist in this model";
	{
		$s.pop();
		return type;
	}
	$s.pop();
}
cms.mvcs.modules.structure.model.TypesModel.prototype.setTypes = function(value) {
	$s.push("cms.mvcs.modules.structure.model.TypesModel::setTypes");
	var $spos = $s.length;
	this.types = value;
	this.onUpdated.dispatch();
	{
		var $tmp = this.types;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.structure.model.TypesModel.prototype.__class__ = cms.mvcs.modules.structure.model.TypesModel;
cms.mvcs.core.panel.model.PanelContainerModel = function(p) { if( p === $_ ) return; {
	$s.push("cms.mvcs.core.panel.model.PanelContainerModel::new");
	var $spos = $s.length;
	this._panels = new core.Array();
	this.onPanelAdded = new mohu.messages.Dispatcher(this);
	this.onPanelRemoved = new mohu.messages.Dispatcher(this);
	this.onPanelMoved = new mohu.messages.Dispatcher(this);
	$s.pop();
}}
cms.mvcs.core.panel.model.PanelContainerModel.__name__ = ["cms","mvcs","core","panel","model","PanelContainerModel"];
cms.mvcs.core.panel.model.PanelContainerModel.__super__ = mohu.mvcs.model.Model;
for(var k in mohu.mvcs.model.Model.prototype ) cms.mvcs.core.panel.model.PanelContainerModel.prototype[k] = mohu.mvcs.model.Model.prototype[k];
cms.mvcs.core.panel.model.PanelContainerModel.prototype.onPanelAdded = null;
cms.mvcs.core.panel.model.PanelContainerModel.prototype.onPanelRemoved = null;
cms.mvcs.core.panel.model.PanelContainerModel.prototype.onPanelMoved = null;
cms.mvcs.core.panel.model.PanelContainerModel.prototype.panels = null;
cms.mvcs.core.panel.model.PanelContainerModel.prototype.numPanels = null;
cms.mvcs.core.panel.model.PanelContainerModel.prototype._panels = null;
cms.mvcs.core.panel.model.PanelContainerModel.prototype.getPanelAt = function(index) {
	$s.push("cms.mvcs.core.panel.model.PanelContainerModel::getPanelAt");
	var $spos = $s.length;
	{
		var $tmp = this._panels[index];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.core.panel.model.PanelContainerModel.prototype.getPanelIndex = function(panel) {
	$s.push("cms.mvcs.core.panel.model.PanelContainerModel::getPanelIndex");
	var $spos = $s.length;
	{
		var _g1 = 0, _g = this._panels.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this._panels[i] == panel) {
				$s.pop();
				return i;
			}
		}
	}
	{
		$s.pop();
		return -1;
	}
	$s.pop();
}
cms.mvcs.core.panel.model.PanelContainerModel.prototype.addPanel = function(panel) {
	$s.push("cms.mvcs.core.panel.model.PanelContainerModel::addPanel");
	var $spos = $s.length;
	if(panel == null) throw "No panel specified";
	{
		var _g1 = 0, _g = this._panels.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this._panels[i] == panel) {
				var $tmp = this.movePanelAt(i,this._panels.length - 1);
				$s.pop();
				return $tmp;
			}
		}
	}
	this._panels.push(panel);
	panel.container = this;
	this.onPanelAdded.dispatch(new cms.mvcs.core.panel.messages.PanelContainerMessage(this,panel,-1,this._panels.length - 1),panel);
	{
		$s.pop();
		return panel;
	}
	$s.pop();
}
cms.mvcs.core.panel.model.PanelContainerModel.prototype.addPanelAt = function(panel,index) {
	$s.push("cms.mvcs.core.panel.model.PanelContainerModel::addPanelAt");
	var $spos = $s.length;
	if(panel == null) throw "No panel specified";
	if(index < 0 || index > this._panels.length) throw "Index out of range";
	{
		var _g1 = 0, _g = this._panels.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this._panels[i] == panel) {
				var $tmp = this.movePanelAt(i,index);
				$s.pop();
				return $tmp;
			}
		}
	}
	this._panels.insert(index,panel);
	panel.container = this;
	this.onPanelAdded.dispatch(new cms.mvcs.core.panel.messages.PanelContainerMessage(this,panel,-1,index),panel);
	{
		$s.pop();
		return panel;
	}
	$s.pop();
}
cms.mvcs.core.panel.model.PanelContainerModel.prototype.movePanel = function(panel,newIndex) {
	$s.push("cms.mvcs.core.panel.model.PanelContainerModel::movePanel");
	var $spos = $s.length;
	if(panel == null) throw "No panel specified";
	if(newIndex < 0 || newIndex >= this._panels.length) throw "Index out of range";
	{
		var _g1 = 0, _g = this._panels.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this._panels[i] != panel) continue;
			var panel1 = this._panels.splice(i,1)[0];
			this._panels.insert(newIndex,panel1);
			this.onPanelMoved.dispatch(new cms.mvcs.core.panel.messages.PanelContainerMessage(this,panel1,i,newIndex),panel1);
			{
				$s.pop();
				return panel1;
			}
		}
	}
	throw "Specified panel is not a child of this container";
	{
		$s.pop();
		return null;
	}
	$s.pop();
}
cms.mvcs.core.panel.model.PanelContainerModel.prototype.movePanelAt = function(oldIndex,newIndex) {
	$s.push("cms.mvcs.core.panel.model.PanelContainerModel::movePanelAt");
	var $spos = $s.length;
	if(oldIndex < 0 || oldIndex >= this._panels.length) throw "Index out of range";
	if(newIndex < 0 || newIndex >= this._panels.length) throw "Index out of range";
	var panel = this._panels.splice(oldIndex,1)[0];
	this._panels.insert(newIndex,panel);
	this.onPanelMoved.dispatch(new cms.mvcs.core.panel.messages.PanelContainerMessage(this,panel,oldIndex,newIndex),panel);
	{
		$s.pop();
		return panel;
	}
	$s.pop();
}
cms.mvcs.core.panel.model.PanelContainerModel.prototype.removePanel = function(panel) {
	$s.push("cms.mvcs.core.panel.model.PanelContainerModel::removePanel");
	var $spos = $s.length;
	if(panel == null) throw "No panel specified";
	{
		var _g1 = 0, _g = this._panels.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this._panels[i] != panel) continue;
			var panel1 = this._panels.splice(i,1)[0];
			panel1.container = null;
			this.onPanelRemoved.dispatch(new cms.mvcs.core.panel.messages.PanelContainerMessage(this,panel1,i,-1),panel1);
			{
				$s.pop();
				return panel1;
			}
		}
	}
	throw "Specified panel is not a child of this container";
	{
		$s.pop();
		return null;
	}
	$s.pop();
}
cms.mvcs.core.panel.model.PanelContainerModel.prototype.removePanelAt = function(index) {
	$s.push("cms.mvcs.core.panel.model.PanelContainerModel::removePanelAt");
	var $spos = $s.length;
	if(index < 0 || index >= this._panels.length) throw "Index out of range";
	var panel = this._panels.splice(index,1)[0];
	panel.container = null;
	this.onPanelRemoved.dispatch(new cms.mvcs.core.panel.messages.PanelContainerMessage(this,panel,index,-1),panel);
	{
		$s.pop();
		return panel;
	}
	$s.pop();
}
cms.mvcs.core.panel.model.PanelContainerModel.prototype.getPanels = function() {
	$s.push("cms.mvcs.core.panel.model.PanelContainerModel::getPanels");
	var $spos = $s.length;
	{
		var $tmp = this._panels.slice(0);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.core.panel.model.PanelContainerModel.prototype.getNumPanels = function() {
	$s.push("cms.mvcs.core.panel.model.PanelContainerModel::getNumPanels");
	var $spos = $s.length;
	{
		var $tmp = this._panels.length;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.core.panel.model.PanelContainerModel.prototype.__class__ = cms.mvcs.core.panel.model.PanelContainerModel;
mohu.mvcs.view.IContextView = function() { }
mohu.mvcs.view.IContextView.__name__ = ["mohu","mvcs","view","IContextView"];
mohu.mvcs.view.IContextView.prototype.view = null;
mohu.mvcs.view.IContextView.prototype.onViewAdded = null;
mohu.mvcs.view.IContextView.prototype.onViewRemoved = null;
mohu.mvcs.view.IContextView.prototype.__class__ = mohu.mvcs.view.IContextView;
if(!mohu.js) mohu.js = {}
if(!mohu.js.mvcs) mohu.js.mvcs = {}
if(!mohu.js.mvcs.view) mohu.js.mvcs.view = {}
mohu.js.mvcs.view.HTMLContextView = function(view,watchAdded,watchRemoved) { if( view === $_ ) return; {
	$s.push("mohu.js.mvcs.view.HTMLContextView::new");
	var $spos = $s.length;
	if(watchRemoved == null) watchRemoved = false;
	if(watchAdded == null) watchAdded = false;
	if(view == null) throw "No view specified";
	this.view = view;
	this.domNode = view;
	this.onViewAdded = new mohu.messages.Dispatcher(this);
	this.onViewRemoved = new mohu.messages.Dispatcher(this);
	if(!js.Lib.isIE) {
		if(watchAdded) view.addEventListener("DOMNodeInserted",$closure(this,"_handleDOMNodeInserted"),true);
		if(watchRemoved) view.addEventListener("DOMNodeRemoved",$closure(this,"_handleDOMNodeRemoved"),true);
	}
	$s.pop();
}}
mohu.js.mvcs.view.HTMLContextView.__name__ = ["mohu","js","mvcs","view","HTMLContextView"];
mohu.js.mvcs.view.HTMLContextView.prototype.domNode = null;
mohu.js.mvcs.view.HTMLContextView.prototype.view = null;
mohu.js.mvcs.view.HTMLContextView.prototype.onViewAdded = null;
mohu.js.mvcs.view.HTMLContextView.prototype.onViewRemoved = null;
mohu.js.mvcs.view.HTMLContextView.prototype._handleDOMNodeInserted = function(event) {
	$s.push("mohu.js.mvcs.view.HTMLContextView::_handleDOMNodeInserted");
	var $spos = $s.length;
	this._addChildNodes(event.target);
	$s.pop();
}
mohu.js.mvcs.view.HTMLContextView.prototype._handleDOMNodeRemoved = function(event) {
	$s.push("mohu.js.mvcs.view.HTMLContextView::_handleDOMNodeRemoved");
	var $spos = $s.length;
	this._removeChildNodes(event.target);
	$s.pop();
}
mohu.js.mvcs.view.HTMLContextView.prototype._addChildNodes = function(parentNode) {
	$s.push("mohu.js.mvcs.view.HTMLContextView::_addChildNodes");
	var $spos = $s.length;
	if(parentNode != this.view) {
		var viewController = parentNode.viewController;
		if(viewController != null) this.onViewAdded.dispatch(new mohu.messages.Message(),viewController);
	}
	{
		var _g1 = 0, _g = parentNode.childNodes.length;
		while(_g1 < _g) {
			var i = _g1++;
			this._addChildNodes(parentNode.childNodes[i]);
		}
	}
	$s.pop();
}
mohu.js.mvcs.view.HTMLContextView.prototype._removeChildNodes = function(parentNode) {
	$s.push("mohu.js.mvcs.view.HTMLContextView::_removeChildNodes");
	var $spos = $s.length;
	{
		var _g1 = 0, _g = parentNode.childNodes.length;
		while(_g1 < _g) {
			var i = _g1++;
			this._removeChildNodes(parentNode.childNodes[i]);
		}
	}
	if(parentNode != this.view) {
		var viewController = event.target.viewController;
		if(viewController != null) this.onViewRemoved.dispatch(new mohu.messages.Message(),viewController);
	}
	$s.pop();
}
mohu.js.mvcs.view.HTMLContextView.prototype.__class__ = mohu.js.mvcs.view.HTMLContextView;
mohu.js.mvcs.view.HTMLContextView.__interfaces__ = [mohu.mvcs.view.IContextView];
cms.mvcs.view.ICMSContextView = function() { }
cms.mvcs.view.ICMSContextView.__name__ = ["cms","mvcs","view","ICMSContextView"];
cms.mvcs.view.ICMSContextView.prototype.addPanelContainer = null;
cms.mvcs.view.ICMSContextView.prototype.__class__ = cms.mvcs.view.ICMSContextView;
cms.mvcs.view.ICMSContextView.__interfaces__ = [mohu.mvcs.view.IContextView];
cms.mvcs.view.CMSHTMLContextView = function(p) { if( p === $_ ) return; {
	$s.push("cms.mvcs.view.CMSHTMLContextView::new");
	var $spos = $s.length;
	var domNode = js.Lib.document.createElement("div");
	domNode.className = "container";
	mohu.js.mvcs.view.HTMLContextView.call(this,domNode);
	$s.pop();
}}
cms.mvcs.view.CMSHTMLContextView.__name__ = ["cms","mvcs","view","CMSHTMLContextView"];
cms.mvcs.view.CMSHTMLContextView.__super__ = mohu.js.mvcs.view.HTMLContextView;
for(var k in mohu.js.mvcs.view.HTMLContextView.prototype ) cms.mvcs.view.CMSHTMLContextView.prototype[k] = mohu.js.mvcs.view.HTMLContextView.prototype[k];
cms.mvcs.view.CMSHTMLContextView.prototype.addPanelContainer = function(panelContainer) {
	$s.push("cms.mvcs.view.CMSHTMLContextView::addPanelContainer");
	var $spos = $s.length;
	if(!core.Std["is"](panelContainer,cms.mvcs.view.controllers.dom.ViewControllerDOM)) throw "Specified panel container is not a ViewControllerDOM";
	this.domNode.appendChild(((function($this) {
		var $r;
		var $t = panelContainer;
		if(core.Std["is"]($t,cms.mvcs.view.controllers.dom.ViewControllerDOM)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this))).domNode);
	$s.pop();
}
cms.mvcs.view.CMSHTMLContextView.prototype.__class__ = cms.mvcs.view.CMSHTMLContextView;
cms.mvcs.view.CMSHTMLContextView.__interfaces__ = [cms.mvcs.view.ICMSContextView];
if(!cms.mvcs.view.controllers) cms.mvcs.view.controllers = {}
if(!cms.mvcs.view.controllers.dom) cms.mvcs.view.controllers.dom = {}
cms.mvcs.view.controllers.dom.ViewControllerDOM = function(view) { if( view === $_ ) return; {
	$s.push("cms.mvcs.view.controllers.dom.ViewControllerDOM::new");
	var $spos = $s.length;
	mohu.mvcs.view.ViewController.call(this,view);
	this.domNode = view;
	if(this.domNode != null) this.domNode.viewController = this;
	$s.pop();
}}
cms.mvcs.view.controllers.dom.ViewControllerDOM.__name__ = ["cms","mvcs","view","controllers","dom","ViewControllerDOM"];
cms.mvcs.view.controllers.dom.ViewControllerDOM.__super__ = mohu.mvcs.view.ViewController;
for(var k in mohu.mvcs.view.ViewController.prototype ) cms.mvcs.view.controllers.dom.ViewControllerDOM.prototype[k] = mohu.mvcs.view.ViewController.prototype[k];
cms.mvcs.view.controllers.dom.ViewControllerDOM.prototype.domNode = null;
cms.mvcs.view.controllers.dom.ViewControllerDOM.prototype.__class__ = cms.mvcs.view.controllers.dom.ViewControllerDOM;
cms.mvcs.view.controllers.dom.ViewControllerDOM.__interfaces__ = [cms.mvcs.view.components.dom.IViewComponentDOM,mohu.mvcs.view.IViewController];
if(!cms.mvcs.core.panel.view.controllers) cms.mvcs.core.panel.view.controllers = {}
cms.mvcs.core.panel.view.controllers.IPanelContentViewController = function() { }
cms.mvcs.core.panel.view.controllers.IPanelContentViewController.__name__ = ["cms","mvcs","core","panel","view","controllers","IPanelContentViewController"];
cms.mvcs.core.panel.view.controllers.IPanelContentViewController.prototype.changed = null;
cms.mvcs.core.panel.view.controllers.IPanelContentViewController.prototype.onChanged = null;
cms.mvcs.core.panel.view.controllers.IPanelContentViewController.prototype.__class__ = cms.mvcs.core.panel.view.controllers.IPanelContentViewController;
cms.mvcs.core.panel.view.controllers.IPanelContentViewController.__interfaces__ = [mohu.mvcs.view.IViewController];
if(!cms.mvcs.modules.content.view.controllers) cms.mvcs.modules.content.view.controllers = {}
if(!cms.mvcs.modules.content.view.controllers.panels) cms.mvcs.modules.content.view.controllers.panels = {}
cms.mvcs.modules.content.view.controllers.panels.IItemEditorViewController = function() { }
cms.mvcs.modules.content.view.controllers.panels.IItemEditorViewController.__name__ = ["cms","mvcs","modules","content","view","controllers","panels","IItemEditorViewController"];
cms.mvcs.modules.content.view.controllers.panels.IItemEditorViewController.prototype.fieldEditors = null;
cms.mvcs.modules.content.view.controllers.panels.IItemEditorViewController.prototype.value = null;
cms.mvcs.modules.content.view.controllers.panels.IItemEditorViewController.prototype.selectedItem = null;
cms.mvcs.modules.content.view.controllers.panels.IItemEditorViewController.prototype.onItemSelected = null;
cms.mvcs.modules.content.view.controllers.panels.IItemEditorViewController.prototype.onItemAddClicked = null;
cms.mvcs.modules.content.view.controllers.panels.IItemEditorViewController.prototype.onItemRemoveClicked = null;
cms.mvcs.modules.content.view.controllers.panels.IItemEditorViewController.prototype.__class__ = cms.mvcs.modules.content.view.controllers.panels.IItemEditorViewController;
cms.mvcs.modules.content.view.controllers.panels.IItemEditorViewController.__interfaces__ = [cms.mvcs.core.panel.view.controllers.IPanelContentViewController];
if(!cms.mvcs.modules.content.view.controllers.panels.dom) cms.mvcs.modules.content.view.controllers.panels.dom = {}
cms.mvcs.modules.content.view.controllers.panels.dom.ItemEditorViewControllerDOM = function(p) { if( p === $_ ) return; {
	$s.push("cms.mvcs.modules.content.view.controllers.panels.dom.ItemEditorViewControllerDOM::new");
	var $spos = $s.length;
	this.onChanged = new mohu.messages.Dispatcher(this);
	this.onItemSelected = new mohu.messages.Dispatcher(this);
	this.onItemAddClicked = new mohu.messages.Dispatcher(this);
	this.onItemRemoveClicked = new mohu.messages.Dispatcher(this);
	this.changed = false;
	this.setValue(new core.Hash());
	var domNode = js.Lib.document.createElement("table");
	domNode.className = "panelFields";
	cms.mvcs.view.controllers.dom.ViewControllerDOM.call(this,domNode);
	$s.pop();
}}
cms.mvcs.modules.content.view.controllers.panels.dom.ItemEditorViewControllerDOM.__name__ = ["cms","mvcs","modules","content","view","controllers","panels","dom","ItemEditorViewControllerDOM"];
cms.mvcs.modules.content.view.controllers.panels.dom.ItemEditorViewControllerDOM.__super__ = cms.mvcs.view.controllers.dom.ViewControllerDOM;
for(var k in cms.mvcs.view.controllers.dom.ViewControllerDOM.prototype ) cms.mvcs.modules.content.view.controllers.panels.dom.ItemEditorViewControllerDOM.prototype[k] = cms.mvcs.view.controllers.dom.ViewControllerDOM.prototype[k];
cms.mvcs.modules.content.view.controllers.panels.dom.ItemEditorViewControllerDOM.prototype.fieldEditors = null;
cms.mvcs.modules.content.view.controllers.panels.dom.ItemEditorViewControllerDOM.prototype.value = null;
cms.mvcs.modules.content.view.controllers.panels.dom.ItemEditorViewControllerDOM.prototype.changed = null;
cms.mvcs.modules.content.view.controllers.panels.dom.ItemEditorViewControllerDOM.prototype.selectedItem = null;
cms.mvcs.modules.content.view.controllers.panels.dom.ItemEditorViewControllerDOM.prototype.onChanged = null;
cms.mvcs.modules.content.view.controllers.panels.dom.ItemEditorViewControllerDOM.prototype.onItemSelected = null;
cms.mvcs.modules.content.view.controllers.panels.dom.ItemEditorViewControllerDOM.prototype.onItemAddClicked = null;
cms.mvcs.modules.content.view.controllers.panels.dom.ItemEditorViewControllerDOM.prototype.onItemRemoveClicked = null;
cms.mvcs.modules.content.view.controllers.panels.dom.ItemEditorViewControllerDOM.prototype._changing = null;
cms.mvcs.modules.content.view.controllers.panels.dom.ItemEditorViewControllerDOM.prototype._selecting = null;
cms.mvcs.modules.content.view.controllers.panels.dom.ItemEditorViewControllerDOM.prototype.setFieldEditors = function(value) {
	$s.push("cms.mvcs.modules.content.view.controllers.panels.dom.ItemEditorViewControllerDOM::setFieldEditors");
	var $spos = $s.length;
	if(this.fieldEditors != null) {
		{
			var _g = 0, _g1 = this.fieldEditors;
			while(_g < _g1.length) {
				var fieldEditor = _g1[_g];
				++_g;
				fieldEditor.onChanged.removeListener($closure(this,"_handleFieldEditorChanged"));
				if(core.Std["is"](fieldEditor,cms.mvcs.modules.content.view.components.form.IItemFieldEditor)) {
					((function($this) {
						var $r;
						var $t = fieldEditor;
						if(core.Std["is"]($t,cms.mvcs.modules.content.view.components.form.IItemFieldEditor)) $t;
						else throw "Class cast error";
						$r = $t;
						return $r;
					}(this))).onItemSelected.removeListener($closure(this,"_handleFieldEditorItemSelected"));
					((function($this) {
						var $r;
						var $t = fieldEditor;
						if(core.Std["is"]($t,cms.mvcs.modules.content.view.components.form.IItemFieldEditor)) $t;
						else throw "Class cast error";
						$r = $t;
						return $r;
					}(this))).onItemAddClicked.removeListener($closure(this.onItemAddClicked,"redispatch"));
					((function($this) {
						var $r;
						var $t = fieldEditor;
						if(core.Std["is"]($t,cms.mvcs.modules.content.view.components.form.IItemFieldEditor)) $t;
						else throw "Class cast error";
						$r = $t;
						return $r;
					}(this))).onItemRemoveClicked.removeListener($closure(this.onItemRemoveClicked,"redispatch"));
				}
			}
		}
	}
	this.fieldEditors = value;
	while(this.domNode.hasChildNodes()) this.domNode.removeChild(this.domNode.lastChild);
	if(this.fieldEditors == null) {
		$s.pop();
		return null;
	}
	{
		var _g = 0, _g1 = this.fieldEditors;
		while(_g < _g1.length) {
			var fieldEditor = _g1[_g];
			++_g;
			if(!core.Std["is"](fieldEditor,cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM)) throw "Input field for '" + fieldEditor.name + "' is not a DOM input field";
			fieldEditor.onChanged.addListener($closure(this,"_handleFieldEditorChanged"));
			if(core.Std["is"](fieldEditor,cms.mvcs.modules.content.view.components.form.IItemFieldEditor)) {
				((function($this) {
					var $r;
					var $t = fieldEditor;
					if(core.Std["is"]($t,cms.mvcs.modules.content.view.components.form.IItemFieldEditor)) $t;
					else throw "Class cast error";
					$r = $t;
					return $r;
				}(this))).onItemSelected.addListener($closure(this,"_handleFieldEditorItemSelected"));
				((function($this) {
					var $r;
					var $t = fieldEditor;
					if(core.Std["is"]($t,cms.mvcs.modules.content.view.components.form.IItemFieldEditor)) $t;
					else throw "Class cast error";
					$r = $t;
					return $r;
				}(this))).onItemAddClicked.addListener($closure(this.onItemAddClicked,"redispatch"));
				((function($this) {
					var $r;
					var $t = fieldEditor;
					if(core.Std["is"]($t,cms.mvcs.modules.content.view.components.form.IItemFieldEditor)) $t;
					else throw "Class cast error";
					$r = $t;
					return $r;
				}(this))).onItemRemoveClicked.addListener($closure(this.onItemRemoveClicked,"redispatch"));
			}
			this.domNode.appendChild(((function($this) {
				var $r;
				var $t = fieldEditor;
				if(core.Std["is"]($t,cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM)) $t;
				else throw "Class cast error";
				$r = $t;
				return $r;
			}(this))).domNode);
		}
	}
	{
		var $tmp = this.fieldEditors;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.controllers.panels.dom.ItemEditorViewControllerDOM.prototype._handleFieldEditorChanged = function(message) {
	$s.push("cms.mvcs.modules.content.view.controllers.panels.dom.ItemEditorViewControllerDOM::_handleFieldEditorChanged");
	var $spos = $s.length;
	if(this._changing) {
		$s.pop();
		return;
	}
	this.changed = true;
	var fieldEditor = (function($this) {
		var $r;
		var $t = message.getCurrentTarget();
		if(core.Std["is"]($t,cms.mvcs.modules.content.view.components.form.IFieldEditor)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this));
	this.value.set(fieldEditor.name,fieldEditor.value);
	this.onChanged.dispatch();
	$s.pop();
}
cms.mvcs.modules.content.view.controllers.panels.dom.ItemEditorViewControllerDOM.prototype._handleFieldEditorItemSelected = function(message) {
	$s.push("cms.mvcs.modules.content.view.controllers.panels.dom.ItemEditorViewControllerDOM::_handleFieldEditorItemSelected");
	var $spos = $s.length;
	if(this._selecting) {
		$s.pop();
		return;
	}
	this._selecting = true;
	{
		var _g = 0, _g1 = this.fieldEditors;
		while(_g < _g1.length) {
			var fieldEditor = _g1[_g];
			++_g;
			if(fieldEditor != message.getCurrentTarget() && core.Std["is"](fieldEditor,cms.mvcs.modules.content.view.components.form.IItemFieldEditor)) ((function($this) {
				var $r;
				var $t = fieldEditor;
				if(core.Std["is"]($t,cms.mvcs.modules.content.view.components.form.IItemFieldEditor)) $t;
				else throw "Class cast error";
				$r = $t;
				return $r;
			}(this))).setSelectedItem(null);
		}
	}
	this.selectedItem = ((function($this) {
		var $r;
		var $t = message;
		if(core.Std["is"]($t,cms.mvcs.modules.content.messages.ItemSelectedMessage)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this))).reference;
	this._selecting = false;
	this.onItemSelected.dispatch(message);
	$s.pop();
}
cms.mvcs.modules.content.view.controllers.panels.dom.ItemEditorViewControllerDOM.prototype.setValue = function(value) {
	$s.push("cms.mvcs.modules.content.view.controllers.panels.dom.ItemEditorViewControllerDOM::setValue");
	var $spos = $s.length;
	this._changing = true;
	this.value = new core.Hash();
	if(this.selectedItem != null) {
		this.selectedItem = null;
		this.onItemSelected.dispatch(new cms.mvcs.modules.content.messages.ItemSelectedMessage(null));
	}
	if(this.fieldEditors == null) {
		$s.pop();
		return value;
	}
	{
		var _g = 0, _g1 = this.fieldEditors;
		while(_g < _g1.length) {
			var fieldEditor = _g1[_g];
			++_g;
			var fieldName = fieldEditor.name;
			var fieldValue = value.exists(fieldName)?value.get(fieldName):null;
			this.value.set(fieldName,fieldValue);
			fieldEditor.setValue(fieldValue);
		}
	}
	this.changed = false;
	this._changing = false;
	this.onChanged.dispatch();
	{
		var $tmp = this.value;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.controllers.panels.dom.ItemEditorViewControllerDOM.prototype.__class__ = cms.mvcs.modules.content.view.controllers.panels.dom.ItemEditorViewControllerDOM;
cms.mvcs.modules.content.view.controllers.panels.dom.ItemEditorViewControllerDOM.__interfaces__ = [cms.mvcs.modules.content.view.controllers.panels.IItemEditorViewController];
cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM = function(p) { if( p === $_ ) return; {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM::new");
	var $spos = $s.length;
	cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.call(this);
	this.onItemSelected = new mohu.messages.Dispatcher(this);
	this.onItemAddClicked = new mohu.messages.Dispatcher(this);
	this.onItemRemoveClicked = new mohu.messages.Dispatcher(this);
	this.allowAdd = false;
	this.allowCreate = true;
	this.allowRemove = false;
	this.allowDelete = true;
	this._selectedIndex = -1;
	this.containerNode = js.Lib.document.createElement("div");
	this.containerNode.className = "referenceField";
	this.addButtonNode = js.Lib.document.createElement("button");
	this.addButtonNode.className = "listFieldAddButton";
	this.addButtonNode.appendChild(js.Lib.document.createTextNode("Add an item"));
	this.addButtonNode.onclick = $closure(this,"_handleAddButtonClicked");
	$(this.addButtonNode).button();
	this.containerNode.appendChild(this.addButtonNode);
	this.valueNode.appendChild(this.containerNode);
	$s.pop();
}}
cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM.__name__ = ["cms","mvcs","modules","content","view","components","form","dom","ReferenceFieldEditorDOM"];
cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM.__super__ = cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM;
for(var k in cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype ) cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM.prototype[k] = cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype[k];
cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM.prototype.datatype = null;
cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM.prototype.allowAdd = null;
cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM.prototype.allowCreate = null;
cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM.prototype.allowRemove = null;
cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM.prototype.allowDelete = null;
cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM.prototype.selectedIndex = null;
cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM.prototype.selectedItem = null;
cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM.prototype.containerNode = null;
cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM.prototype.addButtonNode = null;
cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM.prototype.listNode = null;
cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM.prototype.onItemSelected = null;
cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM.prototype.onItemAddClicked = null;
cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM.prototype.onItemRemoveClicked = null;
cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM.prototype._selectedIndex = null;
cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM.prototype.insertItemAt = function(item,index) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM::insertItemAt");
	var $spos = $s.length;
	if(index != 0) throw "Index '" + this.value + "' is out of range";
	this.setValue(item);
	{
		$s.pop();
		return item;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM.prototype.removeItemAt = function(index) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM::removeItemAt");
	var $spos = $s.length;
	if(index != 0) throw "Index '" + this.value + "' is out of range";
	var item = this.value;
	if(item != null) this.setValue(null);
	{
		$s.pop();
		return item;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM.prototype._handleRadioNodeSelected = function(event) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM::_handleRadioNodeSelected");
	var $spos = $s.length;
	this.setSelectedItem(new cms.mvcs.core.api.model.vo.ReferenceVO(this.datatype,core.Std.parseInt(event.target.value)));
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM.prototype._handleAddButtonClicked = function(event) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM::_handleAddButtonClicked");
	var $spos = $s.length;
	this.onItemAddClicked.dispatch(new cms.mvcs.modules.content.messages.AddReferenceMessage(this));
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM.prototype._handleRemoveButtonClicked = function(event) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM::_handleRemoveButtonClicked");
	var $spos = $s.length;
	this.onItemRemoveClicked.dispatch();
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM.prototype.setValue = function(value) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM::setValue");
	var $spos = $s.length;
	if(value == this.value) {
		$s.pop();
		return;
	}
	if(value != null && !core.Std["is"](value,cms.mvcs.core.api.model.vo.ReferenceVO)) throw "Specified value '" + value + "' is not a ReferenceVO";
	while(this.listNode.hasChildNodes()) this.listNode.removeChild(this.listNode.firstChild);
	if(value != null) this._addItemNode(value);
	else this.listNode.appendChild(this.addButtonNode);
	cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype.setValue.call(this,value);
	{
		var $tmp = this.value;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM.prototype._addItemNode = function(item,index) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM::_addItemNode");
	var $spos = $s.length;
	if(index == null) index = -1;
	var referenceID = "referenceField" + core.Std.random(2147483646);
	var itemNode = js.Lib.document.createElement("div");
	itemNode.className = "referenceFieldItem";
	itemNode.id = referenceID;
	var radioNode = js.Lib.document.createElement("input");
	radioNode.type = "radio";
	radioNode.name = referenceID;
	radioNode.id = referenceID + "-radio";
	radioNode.value = core.Std.string(item.id);
	radioNode.onchange = $closure(this,"_handleRadioNodeSelected");
	itemNode.appendChild(radioNode);
	var labelNode = js.Lib.document.createElement("label");
	labelNode.className = "referenceFieldItemLabel";
	labelNode["htmlFor"] = referenceID + "-radio";
	labelNode.innerHTML = item.table + " #" + item.id;
	itemNode.appendChild(labelNode);
	var removeNode = js.Lib.document.createElement("button");
	removeNode.className = "referenceFieldItemRemove";
	removeNode.innerHTML = "Remove this item";
	itemNode.appendChild(removeNode);
	this.listNode.appendChild(itemNode);
	$(removeNode).button({icons:{primary:"ui-icon-close"}, text: false});
	$(radioNode).button();
	$(itemNode).buttonset();
	{
		$s.pop();
		return item;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM.prototype.getSelectedIndex = function() {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM::getSelectedIndex");
	var $spos = $s.length;
	{
		var $tmp = this._selectedIndex;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM.prototype.setSelectedIndex = function(value) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM::setSelectedIndex");
	var $spos = $s.length;
	if(value < -1) throw "Selected index '" + value + "' is out of range";
	if(value >= 1) throw "Selected index '" + value + "' is out of range";
	this._selectedIndex = value;
	this.onItemSelected.dispatch(new cms.mvcs.modules.content.messages.ItemSelectedMessage(this.getSelectedItem()));
	{
		$s.pop();
		return value;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM.prototype.getSelectedItem = function() {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM::getSelectedItem");
	var $spos = $s.length;
	{
		var $tmp = this._selectedIndex == -1?null:this.value;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM.prototype.setSelectedItem = function(value) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM::setSelectedItem");
	var $spos = $s.length;
	if(value == null) {
		this.setSelectedIndex(-1);
	}
	else {
		if(value == this.value) this.setSelectedIndex(0);
	}
	{
		$s.pop();
		return value;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM.prototype.__class__ = cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM;
cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM.__interfaces__ = [cms.mvcs.modules.content.view.components.form.IReferenceFieldEditor];
cms.Main = function(p) { if( p === $_ ) return; {
	$s.push("cms.Main::new");
	var $spos = $s.length;
	this._hub = new cms.mvcs.CMSHTMLHub();
	js.Lib.document.body.appendChild(this._hub.contextView.view);
	this._hub.onInit.dispatch(new cms.mvcs.messages.InitMessage("cms/api/"));
	$s.pop();
}}
cms.Main.__name__ = ["cms","Main"];
cms.Main.__instance = null;
cms.Main.main = function() {
	$s.push("cms.Main::main");
	var $spos = $s.length;
	cms.Main.__instance = new cms.Main();
	$s.pop();
}
cms.Main.prototype._hub = null;
cms.Main.prototype.__class__ = cms.Main;
cms.Main.__interfaces__ = [haxe.rtti.Infos];
if(!cms.mvcs.model) cms.mvcs.model = {}
cms.mvcs.model.ConfigModel = function(apiURL) { if( apiURL === $_ ) return; {
	$s.push("cms.mvcs.model.ConfigModel::new");
	var $spos = $s.length;
	this.apiURL = apiURL;
	$s.pop();
}}
cms.mvcs.model.ConfigModel.__name__ = ["cms","mvcs","model","ConfigModel"];
cms.mvcs.model.ConfigModel.__super__ = mohu.mvcs.model.Model;
for(var k in mohu.mvcs.model.Model.prototype ) cms.mvcs.model.ConfigModel.prototype[k] = mohu.mvcs.model.Model.prototype[k];
cms.mvcs.model.ConfigModel.prototype.apiURL = null;
cms.mvcs.model.ConfigModel.prototype.__class__ = cms.mvcs.model.ConfigModel;
if(!cms.mvcs.core.popup.messages) cms.mvcs.core.popup.messages = {}
cms.mvcs.core.popup.messages.PopupMessage = function(popup,prioritise) { if( popup === $_ ) return; {
	$s.push("cms.mvcs.core.popup.messages.PopupMessage::new");
	var $spos = $s.length;
	if(prioritise == null) prioritise = true;
	mohu.messages.Message.call(this);
	this.popup = popup;
	this.prioritise = prioritise;
	$s.pop();
}}
cms.mvcs.core.popup.messages.PopupMessage.__name__ = ["cms","mvcs","core","popup","messages","PopupMessage"];
cms.mvcs.core.popup.messages.PopupMessage.__super__ = mohu.messages.Message;
for(var k in mohu.messages.Message.prototype ) cms.mvcs.core.popup.messages.PopupMessage.prototype[k] = mohu.messages.Message.prototype[k];
cms.mvcs.core.popup.messages.PopupMessage.prototype.popup = null;
cms.mvcs.core.popup.messages.PopupMessage.prototype.prioritise = null;
cms.mvcs.core.popup.messages.PopupMessage.prototype.clone = function() {
	$s.push("cms.mvcs.core.popup.messages.PopupMessage::clone");
	var $spos = $s.length;
	{
		var $tmp = new cms.mvcs.core.popup.messages.PopupMessage(this.popup,this.prioritise);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.core.popup.messages.PopupMessage.prototype.__class__ = cms.mvcs.core.popup.messages.PopupMessage;
haxe.StackItem = { __ename__ : ["haxe","StackItem"], __constructs__ : ["CFunction","Module","FilePos","Method","Lambda"] }
haxe.StackItem.CFunction = ["CFunction",0];
haxe.StackItem.CFunction.toString = $estr;
haxe.StackItem.CFunction.__enum__ = haxe.StackItem;
haxe.StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Lambda = function(v) { var $x = ["Lambda",4,v]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.Stack = function() { }
haxe.Stack.__name__ = ["haxe","Stack"];
haxe.Stack.callStack = function() {
	$s.push("haxe.Stack::callStack");
	var $spos = $s.length;
	{
		var $tmp = haxe.Stack.makeStack("$s");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.Stack.exceptionStack = function() {
	$s.push("haxe.Stack::exceptionStack");
	var $spos = $s.length;
	{
		var $tmp = haxe.Stack.makeStack("$e");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.Stack.toString = function(stack) {
	$s.push("haxe.Stack::toString");
	var $spos = $s.length;
	var b = new core.StringBuf();
	{
		var _g = 0;
		while(_g < stack.length) {
			var s = stack[_g];
			++_g;
			b.b[b.b.length] = "\nCalled from ";
			haxe.Stack.itemToString(b,s);
		}
	}
	{
		var $tmp = b.b.join("");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.Stack.itemToString = function(b,s) {
	$s.push("haxe.Stack::itemToString");
	var $spos = $s.length;
	var $e = s;
	switch( $e[1] ) {
	case 0:
	{
		b.b[b.b.length] = "a C function";
	}break;
	case 1:
	var m = $e[2];
	{
		b.b[b.b.length] = "module ";
		b.b[b.b.length] = m;
	}break;
	case 2:
	var line = $e[4], file = $e[3], s1 = $e[2];
	{
		if(s1 != null) {
			haxe.Stack.itemToString(b,s1);
			b.b[b.b.length] = " (";
		}
		b.b[b.b.length] = file;
		b.b[b.b.length] = " line ";
		b.b[b.b.length] = line;
		if(s1 != null) b.b[b.b.length] = ")";
	}break;
	case 3:
	var meth = $e[3], cname = $e[2];
	{
		b.b[b.b.length] = cname;
		b.b[b.b.length] = ".";
		b.b[b.b.length] = meth;
	}break;
	case 4:
	var n = $e[2];
	{
		b.b[b.b.length] = "local function #";
		b.b[b.b.length] = n;
	}break;
	}
	$s.pop();
}
haxe.Stack.makeStack = function(s) {
	$s.push("haxe.Stack::makeStack");
	var $spos = $s.length;
	var a = (function($this) {
		var $r;
		try {
			$r = eval(s);
		}
		catch( $e0 ) {
			{
				var e = $e0;
				$r = (function($this) {
					var $r;
					$e = [];
					while($s.length >= $spos) $e.unshift($s.pop());
					$s.push($e[0]);
					$r = [];
					return $r;
				}($this));
			}
		}
		return $r;
	}(this));
	var m = new core.Array();
	{
		var _g1 = 0, _g = a.length - (s == "$s"?2:0);
		while(_g1 < _g) {
			var i = _g1++;
			var d = a[i].split("::");
			m.unshift(haxe.StackItem.Method(d[0],d[1]));
		}
	}
	{
		$s.pop();
		return m;
	}
	$s.pop();
}
haxe.Stack.prototype.__class__ = haxe.Stack;
core.ValueType = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] }
core.ValueType.TNull = ["TNull",0];
core.ValueType.TNull.toString = $estr;
core.ValueType.TNull.__enum__ = core.ValueType;
core.ValueType.TInt = ["TInt",1];
core.ValueType.TInt.toString = $estr;
core.ValueType.TInt.__enum__ = core.ValueType;
core.ValueType.TFloat = ["TFloat",2];
core.ValueType.TFloat.toString = $estr;
core.ValueType.TFloat.__enum__ = core.ValueType;
core.ValueType.TBool = ["TBool",3];
core.ValueType.TBool.toString = $estr;
core.ValueType.TBool.__enum__ = core.ValueType;
core.ValueType.TObject = ["TObject",4];
core.ValueType.TObject.toString = $estr;
core.ValueType.TObject.__enum__ = core.ValueType;
core.ValueType.TFunction = ["TFunction",5];
core.ValueType.TFunction.toString = $estr;
core.ValueType.TFunction.__enum__ = core.ValueType;
core.ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = core.ValueType; $x.toString = $estr; return $x; }
core.ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = core.ValueType; $x.toString = $estr; return $x; }
core.ValueType.TUnknown = ["TUnknown",8];
core.ValueType.TUnknown.toString = $estr;
core.ValueType.TUnknown.__enum__ = core.ValueType;
core.Type = function() { }
core.Type.__name__ = ["Type"];
core.Type.getClass = function(o) {
	$s.push("Type::getClass");
	var $spos = $s.length;
	if(o == null) {
		$s.pop();
		return null;
	}
	if(o.__enum__ != null) {
		$s.pop();
		return null;
	}
	{
		var $tmp = o.__class__;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Type.getEnum = function(o) {
	$s.push("Type::getEnum");
	var $spos = $s.length;
	if(o == null) {
		$s.pop();
		return null;
	}
	{
		var $tmp = o.__enum__;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Type.getSuperClass = function(c) {
	$s.push("Type::getSuperClass");
	var $spos = $s.length;
	{
		var $tmp = c.__super__;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Type.getClassName = function(c) {
	$s.push("Type::getClassName");
	var $spos = $s.length;
	var a = c.__name__;
	{
		var $tmp = a.join(".");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Type.getEnumName = function(e) {
	$s.push("Type::getEnumName");
	var $spos = $s.length;
	var a = e.__ename__;
	{
		var $tmp = a.join(".");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Type.resolveClass = function(name) {
	$s.push("Type::resolveClass");
	var $spos = $s.length;
	var cl;
	try {
		if(name.indexOf(".") < 0) cl = eval(js.Boot.__ns + "." + name);
		else cl = eval(name);
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				cl = null;
			}
		}
	}
	if(cl == null || cl.__name__ == null) {
		$s.pop();
		return null;
	}
	{
		$s.pop();
		return cl;
	}
	$s.pop();
}
core.Type.resolveEnum = function(name) {
	$s.push("Type::resolveEnum");
	var $spos = $s.length;
	var e;
	try {
		if(name.indexOf(".") < 0) e = eval(js.Boot.__ns + "." + name);
		else e = eval(name);
	}
	catch( $e0 ) {
		{
			var err = $e0;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				e = null;
			}
		}
	}
	if(e == null || e.__ename__ == null) {
		$s.pop();
		return null;
	}
	{
		$s.pop();
		return e;
	}
	$s.pop();
}
core.Type.createInstance = function(cl,args) {
	$s.push("Type::createInstance");
	var $spos = $s.length;
	if(args.length <= 3) {
		var $tmp = new cl(args[0],args[1],args[2]);
		$s.pop();
		return $tmp;
	}
	if(args.length > 8) throw "Too many arguments";
	{
		var $tmp = new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Type.createEmptyInstance = function(cl) {
	$s.push("Type::createEmptyInstance");
	var $spos = $s.length;
	{
		var $tmp = new cl($_);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Type.createEnum = function(e,constr,params) {
	$s.push("Type::createEnum");
	var $spos = $s.length;
	var f = core.Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(core.Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		{
			var $tmp = f.apply(e,params);
			$s.pop();
			return $tmp;
		}
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	{
		$s.pop();
		return f;
	}
	$s.pop();
}
core.Type.createEnumIndex = function(e,index,params) {
	$s.push("Type::createEnumIndex");
	var $spos = $s.length;
	var c = core.Type.getEnumConstructs(e)[index];
	if(c == null) throw index + " is not a valid enum constructor index";
	{
		var $tmp = core.Type.createEnum(e,c,params);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Type.getInstanceFields = function(c) {
	$s.push("Type::getInstanceFields");
	var $spos = $s.length;
	var a = core.Reflect.fields(c.prototype);
	a.remove("__class__");
	{
		$s.pop();
		return a;
	}
	$s.pop();
}
core.Type.getClassFields = function(c) {
	$s.push("Type::getClassFields");
	var $spos = $s.length;
	var a = core.Reflect.fields(c);
	a.remove("__name__");
	a.remove("__interfaces__");
	a.remove("__super__");
	a.remove("prototype");
	{
		$s.pop();
		return a;
	}
	$s.pop();
}
core.Type.getEnumConstructs = function(e) {
	$s.push("Type::getEnumConstructs");
	var $spos = $s.length;
	{
		var $tmp = e.__constructs__;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Type["typeof"] = function(v) {
	$s.push("Type::typeof");
	var $spos = $s.length;
	switch(typeof(v)) {
	case "boolean":{
		{
			var $tmp = core.ValueType.TBool;
			$s.pop();
			return $tmp;
		}
	}break;
	case "string":{
		{
			var $tmp = core.ValueType.TClass(core.String);
			$s.pop();
			return $tmp;
		}
	}break;
	case "number":{
		if(core.Math.ceil(v) == v % 2147483648.0) {
			var $tmp = core.ValueType.TInt;
			$s.pop();
			return $tmp;
		}
		{
			var $tmp = core.ValueType.TFloat;
			$s.pop();
			return $tmp;
		}
	}break;
	case "object":{
		if(v == null) {
			var $tmp = core.ValueType.TNull;
			$s.pop();
			return $tmp;
		}
		var e = v.__enum__;
		if(e != null) {
			var $tmp = core.ValueType.TEnum(e);
			$s.pop();
			return $tmp;
		}
		var c = v.__class__;
		if(c != null) {
			var $tmp = core.ValueType.TClass(c);
			$s.pop();
			return $tmp;
		}
		{
			var $tmp = core.ValueType.TObject;
			$s.pop();
			return $tmp;
		}
	}break;
	case "function":{
		if(v.__name__ != null) {
			var $tmp = core.ValueType.TObject;
			$s.pop();
			return $tmp;
		}
		{
			var $tmp = core.ValueType.TFunction;
			$s.pop();
			return $tmp;
		}
	}break;
	case "undefined":{
		{
			var $tmp = core.ValueType.TNull;
			$s.pop();
			return $tmp;
		}
	}break;
	default:{
		{
			var $tmp = core.ValueType.TUnknown;
			$s.pop();
			return $tmp;
		}
	}break;
	}
	$s.pop();
}
core.Type.enumEq = function(a,b) {
	$s.push("Type::enumEq");
	var $spos = $s.length;
	if(a == b) {
		$s.pop();
		return true;
	}
	try {
		if(a[0] != b[0]) {
			$s.pop();
			return false;
		}
		{
			var _g1 = 2, _g = a.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(!core.Type.enumEq(a[i],b[i])) {
					$s.pop();
					return false;
				}
			}
		}
		var e = a.__enum__;
		if(e != b.__enum__ || e == null) {
			$s.pop();
			return false;
		}
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				{
					$s.pop();
					return false;
				}
			}
		}
	}
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
core.Type.enumConstructor = function(e) {
	$s.push("Type::enumConstructor");
	var $spos = $s.length;
	{
		var $tmp = e[0];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Type.enumParameters = function(e) {
	$s.push("Type::enumParameters");
	var $spos = $s.length;
	{
		var $tmp = e.slice(2);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Type.enumIndex = function(e) {
	$s.push("Type::enumIndex");
	var $spos = $s.length;
	{
		var $tmp = e[1];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Type.prototype.__class__ = core.Type;
js.Lib = function() { }
js.Lib.__name__ = ["js","Lib"];
js.Lib.isIE = null;
js.Lib.isOpera = null;
js.Lib.document = null;
js.Lib.window = null;
js.Lib.alert = function(v) {
	$s.push("js.Lib::alert");
	var $spos = $s.length;
	alert(js.Boot.__string_rec(v,""));
	$s.pop();
}
js.Lib.eval = function(code) {
	$s.push("js.Lib::eval");
	var $spos = $s.length;
	{
		var $tmp = eval(code);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.Lib.setErrorHandler = function(f) {
	$s.push("js.Lib::setErrorHandler");
	var $spos = $s.length;
	js.Lib.onerror = f;
	$s.pop();
}
js.Lib.prototype.__class__ = js.Lib;
mohu.mvcs.Hub = function(contextView,customInjector) { if( contextView === $_ ) return; {
	$s.push("mohu.mvcs.Hub::new");
	var $spos = $s.length;
	this.contextView = contextView;
	this.injector = customInjector == null?new mohu.mvcs.injection.Injector():customInjector;
	this.mediatorMap = new mohu.mvcs.view.MediatorMap(this.injector,contextView);
	this.commandMap = new mohu.mvcs.controller.CommandMap(this.injector);
	if(!this.injector.hasMetadataMapping("hub")) this.injector.mapMetadataInstance("hub",this);
	if(!this.injector.hasMetadataMapping("injector")) this.injector.mapMetadataInstance("injector",this.injector);
	$s.pop();
}}
mohu.mvcs.Hub.__name__ = ["mohu","mvcs","Hub"];
mohu.mvcs.Hub.prototype.contextView = null;
mohu.mvcs.Hub.prototype.injector = null;
mohu.mvcs.Hub.prototype.mediatorMap = null;
mohu.mvcs.Hub.prototype.commandMap = null;
mohu.mvcs.Hub.prototype.__class__ = mohu.mvcs.Hub;
mohu.mvcs.Hub.__interfaces__ = [haxe.rtti.Infos];
cms.mvcs.core.api.controller.content.RetrieveItemsCommand = function() { }
cms.mvcs.core.api.controller.content.RetrieveItemsCommand.__name__ = ["cms","mvcs","core","api","controller","content","RetrieveItemsCommand"];
cms.mvcs.core.api.controller.content.RetrieveItemsCommand.__super__ = cms.mvcs.controller.CMSCommand;
for(var k in cms.mvcs.controller.CMSCommand.prototype ) cms.mvcs.core.api.controller.content.RetrieveItemsCommand.prototype[k] = cms.mvcs.controller.CMSCommand.prototype[k];
cms.mvcs.core.api.controller.content.RetrieveItemsCommand.prototype.retrieveItemsMessage = null;
cms.mvcs.core.api.controller.content.RetrieveItemsCommand.prototype.configModel = null;
cms.mvcs.core.api.controller.content.RetrieveItemsCommand.prototype.service = null;
cms.mvcs.core.api.controller.content.RetrieveItemsCommand.prototype.execute = function() {
	$s.push("cms.mvcs.core.api.controller.content.RetrieveItemsCommand::execute");
	var $spos = $s.length;
	this.service.onLoadFailed.addListener($closure(this,"_handleLoadFailed"));
	this.service.onLoadCompleted.addListener($closure(this,"_handleLoadCompleted"));
	this.service.retrieveItems(this.retrieveItemsMessage.table);
	$s.pop();
}
cms.mvcs.core.api.controller.content.RetrieveItemsCommand.prototype._handleLoadFailed = function(message) {
	$s.push("cms.mvcs.core.api.controller.content.RetrieveItemsCommand::_handleLoadFailed");
	var $spos = $s.length;
	this.service.onLoadFailed.removeListener($closure(this,"_handleLoadFailed"));
	this.service.onLoadCompleted.removeListener($closure(this,"_handleLoadCompleted"));
	this.cmsHub.onError.dispatch(new cms.mvcs.messages.ErrorMessage("Failed to retrieve items: " + this.service.error));
	this.cmsHub.onRetrieveItemsFailed.dispatch(this.retrieveItemsMessage);
	$s.pop();
}
cms.mvcs.core.api.controller.content.RetrieveItemsCommand.prototype._handleLoadCompleted = function(message) {
	$s.push("cms.mvcs.core.api.controller.content.RetrieveItemsCommand::_handleLoadCompleted");
	var $spos = $s.length;
	this.service.onLoadFailed.removeListener($closure(this,"_handleLoadFailed"));
	this.service.onLoadCompleted.removeListener($closure(this,"_handleLoadCompleted"));
	this.retrieveItemsMessage.items = this.service.items;
	this.cmsHub.onRetrieveItemsCompleted.dispatch(this.retrieveItemsMessage);
	$s.pop();
}
cms.mvcs.core.api.controller.content.RetrieveItemsCommand.prototype.__class__ = cms.mvcs.core.api.controller.content.RetrieveItemsCommand;
cms.mvcs.CMSHub = function(contextView) { if( contextView === $_ ) return; {
	$s.push("cms.mvcs.CMSHub::new");
	var $spos = $s.length;
	mohu.mvcs.Hub.call(this,contextView);
	this.initModel();
	this.initView();
	this.initController();
	this.initServices();
	$s.pop();
}}
cms.mvcs.CMSHub.__name__ = ["cms","mvcs","CMSHub"];
cms.mvcs.CMSHub.__super__ = mohu.mvcs.Hub;
for(var k in mohu.mvcs.Hub.prototype ) cms.mvcs.CMSHub.prototype[k] = mohu.mvcs.Hub.prototype[k];
cms.mvcs.CMSHub.prototype.onError = null;
cms.mvcs.CMSHub.prototype.onInit = null;
cms.mvcs.CMSHub.prototype.onStartup = null;
cms.mvcs.CMSHub.prototype.onRetrieveTypes = null;
cms.mvcs.CMSHub.prototype.onRetrieveTypesFailed = null;
cms.mvcs.CMSHub.prototype.onRetrieveTypesCompleted = null;
cms.mvcs.CMSHub.prototype.onRetrieveItem = null;
cms.mvcs.CMSHub.prototype.onRetrieveItemFailed = null;
cms.mvcs.CMSHub.prototype.onRetrieveItemCompleted = null;
cms.mvcs.CMSHub.prototype.onRetrieveItems = null;
cms.mvcs.CMSHub.prototype.onRetrieveItemsFailed = null;
cms.mvcs.CMSHub.prototype.onRetrieveItemsCompleted = null;
cms.mvcs.CMSHub.prototype.onUpdateItem = null;
cms.mvcs.CMSHub.prototype.onUpdateItemFailed = null;
cms.mvcs.CMSHub.prototype.onUpdateItemCompleted = null;
cms.mvcs.CMSHub.prototype.onShowPopup = null;
cms.mvcs.CMSHub.prototype.onHidePopup = null;
cms.mvcs.CMSHub.prototype.onAddPanel = null;
cms.mvcs.CMSHub.prototype.onMovePanel = null;
cms.mvcs.CMSHub.prototype.onRemovePanel = null;
cms.mvcs.CMSHub.prototype.onAddItemEditorPanel = null;
cms.mvcs.CMSHub.prototype.onAddReference = null;
cms.mvcs.CMSHub.prototype.onAddReferenceFailed = null;
cms.mvcs.CMSHub.prototype.onAddReferenceCompleted = null;
cms.mvcs.CMSHub.prototype.onRemoveReference = null;
cms.mvcs.CMSHub.prototype.onRemoveReferenceFailed = null;
cms.mvcs.CMSHub.prototype.onRemoveReferenceCompleted = null;
cms.mvcs.CMSHub.prototype.initModel = function() {
	$s.push("cms.mvcs.CMSHub::initModel");
	var $spos = $s.length;
	this.injector.mapSingleton(cms.mvcs.model.ConfigModel);
	this.injector.mapSingleton(cms.mvcs.core.authentication.model.AuthenticationModel);
	this.injector.mapSingleton(cms.mvcs.modules.structure.model.TypesModel);
	$s.pop();
}
cms.mvcs.CMSHub.prototype.initView = function() {
	$s.push("cms.mvcs.CMSHub::initView");
	var $spos = $s.length;
	null;
	$s.pop();
}
cms.mvcs.CMSHub.prototype.initController = function() {
	$s.push("cms.mvcs.CMSHub::initController");
	var $spos = $s.length;
	this.onError = new mohu.messages.Dispatcher(this);
	this.onInit = new mohu.messages.Dispatcher(this);
	this.onStartup = new mohu.messages.Dispatcher(this);
	this.onRetrieveTypes = new mohu.messages.Dispatcher(this);
	this.onRetrieveTypesFailed = new mohu.messages.Dispatcher(this);
	this.onRetrieveTypesCompleted = new mohu.messages.Dispatcher(this);
	this.onRetrieveItem = new mohu.messages.Dispatcher(this);
	this.onRetrieveItemFailed = new mohu.messages.Dispatcher(this);
	this.onRetrieveItemCompleted = new mohu.messages.Dispatcher(this);
	this.onRetrieveItems = new mohu.messages.Dispatcher(this);
	this.onRetrieveItemsFailed = new mohu.messages.Dispatcher(this);
	this.onRetrieveItemsCompleted = new mohu.messages.Dispatcher(this);
	this.onUpdateItem = new mohu.messages.Dispatcher(this);
	this.onUpdateItemFailed = new mohu.messages.Dispatcher(this);
	this.onUpdateItemCompleted = new mohu.messages.Dispatcher(this);
	this.onShowPopup = new mohu.messages.Dispatcher(this);
	this.onHidePopup = new mohu.messages.Dispatcher(this);
	this.onAddPanel = new mohu.messages.Dispatcher(this);
	this.onMovePanel = new mohu.messages.Dispatcher(this);
	this.onRemovePanel = new mohu.messages.Dispatcher(this);
	this.onAddItemEditorPanel = new mohu.messages.Dispatcher(this);
	this.onAddReference = new mohu.messages.Dispatcher(this);
	this.onAddReferenceFailed = new mohu.messages.Dispatcher(this);
	this.onAddReferenceCompleted = new mohu.messages.Dispatcher(this);
	this.onRemoveReference = new mohu.messages.Dispatcher(this);
	this.onRemoveReferenceFailed = new mohu.messages.Dispatcher(this);
	this.onRemoveReferenceCompleted = new mohu.messages.Dispatcher(this);
	this.commandMap.mapCommand(this.onError,cms.mvcs.controller.ErrorCommand);
	this.commandMap.mapCommand(this.onInit,cms.mvcs.controller.InitCommand);
	this.commandMap.mapCommand(this.onStartup,cms.mvcs.controller.StartupCommand);
	this.commandMap.mapCommand(this.onRetrieveTypes,cms.mvcs.core.api.controller.structure.RetrieveTypesCommand);
	this.commandMap.mapCommand(this.onRetrieveItem,cms.mvcs.core.api.controller.content.RetrieveItemCommand);
	this.commandMap.mapCommand(this.onRetrieveItems,cms.mvcs.core.api.controller.content.RetrieveItemsCommand);
	this.commandMap.mapCommand(this.onUpdateItem,cms.mvcs.core.api.controller.content.UpdateItemCommand);
	this.commandMap.mapCommand(this.onShowPopup,cms.mvcs.core.popup.controller.ShowPopupCommand);
	this.commandMap.mapCommand(this.onHidePopup,cms.mvcs.core.popup.controller.HidePopupCommand);
	this.commandMap.mapCommand(this.onAddPanel,cms.mvcs.core.panel.controller.AddPanelCommand);
	this.commandMap.mapCommand(this.onMovePanel,cms.mvcs.core.panel.controller.MovePanelCommand);
	this.commandMap.mapCommand(this.onRemovePanel,cms.mvcs.core.panel.controller.RemovePanelCommand);
	this.commandMap.mapCommand(this.onAddItemEditorPanel,cms.mvcs.modules.content.controller.AddItemEditorPanelCommand);
	this.commandMap.mapCommand(this.onAddReference,cms.mvcs.modules.content.controller.AddReferenceCommand);
	$s.pop();
}
cms.mvcs.CMSHub.prototype.initServices = function() {
	$s.push("cms.mvcs.CMSHub::initServices");
	var $spos = $s.length;
	var classMappings = new core.Hash();
	classMappings.set("CMSTable",cms.mvcs.core.api.model.vo.TypeVO);
	classMappings.set("CMSField",cms.mvcs.core.api.model.vo.FieldVO);
	classMappings.set("CMSItem",cms.mvcs.core.api.model.vo.ItemVO);
	classMappings.set("CMSReference",cms.mvcs.core.api.model.vo.ReferenceVO);
	classMappings.set("CMSList",cms.mvcs.core.api.model.vo.ListVO);
	classMappings.set("CMSSmartlist",cms.mvcs.core.api.model.vo.SmartlistVO);
	this.injector.mapInstance(cms.mvcs.core.encoding.services.IEncoderService,new cms.mvcs.core.encoding.services.XMLEncoder(classMappings));
	this.injector.mapClass(cms.mvcs.core.api.services.structure.IRetrieveTypesService,cms.mvcs.core.api.services.structure.RetrieveTypesService);
	this.injector.mapClass(cms.mvcs.core.api.services.content.IRetrieveItemService,cms.mvcs.core.api.services.content.RetrieveItemService);
	this.injector.mapClass(cms.mvcs.core.api.services.content.IRetrieveItemsService,cms.mvcs.core.api.services.content.RetrieveItemsService);
	this.injector.mapClass(cms.mvcs.core.api.services.content.IUpdateItemService,cms.mvcs.core.api.services.content.UpdateItemService);
	$s.pop();
}
cms.mvcs.CMSHub.prototype.__class__ = cms.mvcs.CMSHub;
cms.mvcs.CMSHTMLHub = function(p) { if( p === $_ ) return; {
	$s.push("cms.mvcs.CMSHTMLHub::new");
	var $spos = $s.length;
	js.Lib.setErrorHandler($closure(this,"_handleError"));
	cms.mvcs.CMSHub.call(this,new cms.mvcs.view.CMSHTMLContextView());
	$s.pop();
}}
cms.mvcs.CMSHTMLHub.__name__ = ["cms","mvcs","CMSHTMLHub"];
cms.mvcs.CMSHTMLHub.__super__ = cms.mvcs.CMSHub;
for(var k in cms.mvcs.CMSHub.prototype ) cms.mvcs.CMSHTMLHub.prototype[k] = cms.mvcs.CMSHub.prototype[k];
cms.mvcs.CMSHTMLHub.prototype._handleError = function(message,stack) {
	$s.push("cms.mvcs.CMSHTMLHub::_handleError");
	var $spos = $s.length;
	stack = stack.slice(0);
	stack.reverse();
	js.Lib.alert(message + "\n" + " at " + stack.join("\n at "));
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
cms.mvcs.CMSHTMLHub.prototype.initView = function() {
	$s.push("cms.mvcs.CMSHTMLHub::initView");
	var $spos = $s.length;
	cms.mvcs.CMSHub.prototype.initView.call(this);
	this.injector.mapClass(cms.mvcs.core.popup.view.controllers.IPopupContainerViewController,cms.mvcs.core.popup.view.controllers.dom.PopupContainerViewControllerDOM);
	this.injector.mapClass(cms.mvcs.modules.content.view.controllers.popups.IAddReferencePopupViewController,cms.mvcs.modules.content.view.controllers.popups.dom.AddReferencePopupViewControllerDOM);
	this.injector.mapClass(cms.mvcs.core.panel.view.controllers.IPanelContainerViewController,cms.mvcs.core.panel.view.controllers.dom.PanelContainerViewControllerDOM);
	this.injector.mapClass(cms.mvcs.core.panel.view.controllers.IPanelViewController,cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM);
	this.injector.mapClass(cms.mvcs.modules.content.view.controllers.panels.IItemEditorViewController,cms.mvcs.modules.content.view.controllers.panels.dom.ItemEditorViewControllerDOM);
	this.injector.mapClass(cms.mvcs.core.panel.view.components.IPanelButtons,cms.mvcs.core.panel.view.components.dom.PanelButtonsDOM);
	this.injector.mapClass(cms.mvcs.modules.content.view.components.form.IHiddenFieldEditor,cms.mvcs.modules.content.view.components.form.dom.HiddenFieldEditorDOM);
	this.injector.mapClass(cms.mvcs.modules.content.view.components.form.ILabelFieldEditor,cms.mvcs.modules.content.view.components.form.dom.LabelFieldEditorDOM);
	this.injector.mapClass(cms.mvcs.modules.content.view.components.form.ITextFieldEditor,cms.mvcs.modules.content.view.components.form.dom.TextFieldEditorDOM);
	this.injector.mapClass(cms.mvcs.modules.content.view.components.form.IPasswordFieldEditor,cms.mvcs.modules.content.view.components.form.dom.PasswordFieldEditorDOM);
	this.injector.mapClass(cms.mvcs.modules.content.view.components.form.ITextareaFieldEditor,cms.mvcs.modules.content.view.components.form.dom.TextareaFieldEditorDOM);
	this.injector.mapClass(cms.mvcs.modules.content.view.components.form.IListFieldEditor,cms.mvcs.modules.content.view.components.form.dom.ListFieldEditorDOM);
	this.injector.mapClass(cms.mvcs.modules.content.view.components.form.ISmartlistFieldEditor,cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM);
	this.injector.mapClass(cms.mvcs.modules.content.view.components.form.IReferenceFieldEditor,cms.mvcs.modules.content.view.components.form.dom.ReferenceFieldEditorDOM);
	$s.pop();
}
cms.mvcs.CMSHTMLHub.prototype.__class__ = cms.mvcs.CMSHTMLHub;
cms.mvcs.modules.content.view.components.form.ITextFieldEditor = function() { }
cms.mvcs.modules.content.view.components.form.ITextFieldEditor.__name__ = ["cms","mvcs","modules","content","view","components","form","ITextFieldEditor"];
cms.mvcs.modules.content.view.components.form.ITextFieldEditor.prototype.maxLength = null;
cms.mvcs.modules.content.view.components.form.ITextFieldEditor.prototype.__class__ = cms.mvcs.modules.content.view.components.form.ITextFieldEditor;
cms.mvcs.modules.content.view.components.form.ITextFieldEditor.__interfaces__ = [cms.mvcs.modules.content.view.components.form.IFieldEditor];
cms.mvcs.modules.content.view.components.form.dom.TextFieldEditorDOM = function(p) { if( p === $_ ) return; {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.TextFieldEditorDOM::new");
	var $spos = $s.length;
	cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.call(this);
	this.textNode = js.Lib.document.createElement("input");
	this.textNode.type = "text";
	this.textNode.className = "textField";
	this.textNode.onchange = $closure(this,"_handleTextChanged");
	this.valueNode.appendChild(this.textNode);
	$s.pop();
}}
cms.mvcs.modules.content.view.components.form.dom.TextFieldEditorDOM.__name__ = ["cms","mvcs","modules","content","view","components","form","dom","TextFieldEditorDOM"];
cms.mvcs.modules.content.view.components.form.dom.TextFieldEditorDOM.__super__ = cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM;
for(var k in cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype ) cms.mvcs.modules.content.view.components.form.dom.TextFieldEditorDOM.prototype[k] = cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype[k];
cms.mvcs.modules.content.view.components.form.dom.TextFieldEditorDOM.prototype.maxLength = null;
cms.mvcs.modules.content.view.components.form.dom.TextFieldEditorDOM.prototype.textNode = null;
cms.mvcs.modules.content.view.components.form.dom.TextFieldEditorDOM.prototype._handleTextChanged = function(event) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.TextFieldEditorDOM::_handleTextChanged");
	var $spos = $s.length;
	this.setValue(this.textNode.value);
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.TextFieldEditorDOM.prototype.setMaxLength = function(value) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.TextFieldEditorDOM::setMaxLength");
	var $spos = $s.length;
	this.maxLength = value;
	this.textNode.maxLength = this.maxLength;
	{
		var $tmp = this.maxLength;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.TextFieldEditorDOM.prototype.setName = function(value) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.TextFieldEditorDOM::setName");
	var $spos = $s.length;
	cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype.setName.call(this,value);
	this.textNode.name = this.name;
	{
		var $tmp = this.name;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.TextFieldEditorDOM.prototype.setDisabled = function(value) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.TextFieldEditorDOM::setDisabled");
	var $spos = $s.length;
	cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype.setDisabled.call(this,value);
	this.textNode.disabled = this.disabled;
	{
		var $tmp = this.disabled;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.TextFieldEditorDOM.prototype.setParameters = function(value) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.TextFieldEditorDOM::setParameters");
	var $spos = $s.length;
	cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype.setParameters.call(this,value);
	if(this.parameters != null) if(this.parameters.exists("maxLength")) this.setMaxLength(this.parameters.get("maxLength"));
	{
		var $tmp = this.parameters;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.TextFieldEditorDOM.prototype.setValue = function(value) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.TextFieldEditorDOM::setValue");
	var $spos = $s.length;
	this.textNode.value = value;
	cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype.setValue.call(this,value);
	{
		var $tmp = this.value;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.TextFieldEditorDOM.prototype.__class__ = cms.mvcs.modules.content.view.components.form.dom.TextFieldEditorDOM;
cms.mvcs.modules.content.view.components.form.dom.TextFieldEditorDOM.__interfaces__ = [cms.mvcs.modules.content.view.components.form.ITextFieldEditor];
if(!cms.mvcs.modules.content.messages) cms.mvcs.modules.content.messages = {}
cms.mvcs.modules.content.messages.AddItemEditorPanelMessage = function(panelContainer,table,id,index) { if( panelContainer === $_ ) return; {
	$s.push("cms.mvcs.modules.content.messages.AddItemEditorPanelMessage::new");
	var $spos = $s.length;
	if(index == null) index = -1;
	if(id == null) id = 0;
	mohu.messages.Message.call(this);
	this.panelContainer = panelContainer;
	this.table = table;
	this.id = id;
	this.index = index;
	$s.pop();
}}
cms.mvcs.modules.content.messages.AddItemEditorPanelMessage.__name__ = ["cms","mvcs","modules","content","messages","AddItemEditorPanelMessage"];
cms.mvcs.modules.content.messages.AddItemEditorPanelMessage.__super__ = mohu.messages.Message;
for(var k in mohu.messages.Message.prototype ) cms.mvcs.modules.content.messages.AddItemEditorPanelMessage.prototype[k] = mohu.messages.Message.prototype[k];
cms.mvcs.modules.content.messages.AddItemEditorPanelMessage.prototype.panelContainer = null;
cms.mvcs.modules.content.messages.AddItemEditorPanelMessage.prototype.table = null;
cms.mvcs.modules.content.messages.AddItemEditorPanelMessage.prototype.id = null;
cms.mvcs.modules.content.messages.AddItemEditorPanelMessage.prototype.index = null;
cms.mvcs.modules.content.messages.AddItemEditorPanelMessage.prototype.clone = function() {
	$s.push("cms.mvcs.modules.content.messages.AddItemEditorPanelMessage::clone");
	var $spos = $s.length;
	{
		var $tmp = new cms.mvcs.modules.content.messages.AddItemEditorPanelMessage(this.panelContainer,this.table,this.id,this.index);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.messages.AddItemEditorPanelMessage.prototype.__class__ = cms.mvcs.modules.content.messages.AddItemEditorPanelMessage;
cms.mvcs.core.panel.controller.RemovePanelCommand = function() { }
cms.mvcs.core.panel.controller.RemovePanelCommand.__name__ = ["cms","mvcs","core","panel","controller","RemovePanelCommand"];
cms.mvcs.core.panel.controller.RemovePanelCommand.__super__ = cms.mvcs.controller.CMSCommand;
for(var k in cms.mvcs.controller.CMSCommand.prototype ) cms.mvcs.core.panel.controller.RemovePanelCommand.prototype[k] = cms.mvcs.controller.CMSCommand.prototype[k];
cms.mvcs.core.panel.controller.RemovePanelCommand.prototype.panelContainerMessage = null;
cms.mvcs.core.panel.controller.RemovePanelCommand.prototype.execute = function() {
	$s.push("cms.mvcs.core.panel.controller.RemovePanelCommand::execute");
	var $spos = $s.length;
	cms.mvcs.controller.CMSCommand.prototype.execute.call(this);
	if(this.panelContainerMessage.panelModel != null) {
		this.panelContainerMessage.panelContainerModel.removePanel(this.panelContainerMessage.panelModel);
	}
	else {
		this.panelContainerMessage.panelContainerModel.removePanelAt(this.panelContainerMessage.oldIndex);
	}
	$s.pop();
}
cms.mvcs.core.panel.controller.RemovePanelCommand.prototype.__class__ = cms.mvcs.core.panel.controller.RemovePanelCommand;
core.Reflect = function() { }
core.Reflect.__name__ = ["Reflect"];
core.Reflect.hasField = function(o,field) {
	$s.push("Reflect::hasField");
	var $spos = $s.length;
	if(o.hasOwnProperty != null) {
		var $tmp = o.hasOwnProperty(field);
		$s.pop();
		return $tmp;
	}
	var arr = core.Reflect.fields(o);
	{ var $it0 = arr.iterator();
	while( $it0.hasNext() ) { var t = $it0.next();
	if(t == field) {
		$s.pop();
		return true;
	}
	}}
	{
		$s.pop();
		return false;
	}
	$s.pop();
}
core.Reflect.field = function(o,field) {
	$s.push("Reflect::field");
	var $spos = $s.length;
	var v = null;
	try {
		v = o[field];
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				null;
			}
		}
	}
	{
		$s.pop();
		return v;
	}
	$s.pop();
}
core.Reflect.setField = function(o,field,value) {
	$s.push("Reflect::setField");
	var $spos = $s.length;
	o[field] = value;
	$s.pop();
}
core.Reflect.callMethod = function(o,func,args) {
	$s.push("Reflect::callMethod");
	var $spos = $s.length;
	{
		var $tmp = func.apply(o,args);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Reflect.fields = function(o) {
	$s.push("Reflect::fields");
	var $spos = $s.length;
	if(o == null) {
		var $tmp = new core.Array();
		$s.pop();
		return $tmp;
	}
	var a = new core.Array();
	if(o.hasOwnProperty) {
		
				for(var i in o)
					if( o.hasOwnProperty(i) )
						a.push(i);
			;
	}
	else {
		var t;
		try {
			t = o.__proto__;
		}
		catch( $e0 ) {
			{
				var e = $e0;
				{
					$e = [];
					while($s.length >= $spos) $e.unshift($s.pop());
					$s.push($e[0]);
					t = null;
				}
			}
		}
		if(t != null) o.__proto__ = null;
		
				for(var i in o)
					if( i != "__proto__" )
						a.push(i);
			;
		if(t != null) o.__proto__ = t;
	}
	{
		$s.pop();
		return a;
	}
	$s.pop();
}
core.Reflect.isFunction = function(f) {
	$s.push("Reflect::isFunction");
	var $spos = $s.length;
	{
		var $tmp = typeof(f) == "function" && f.__name__ == null;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Reflect.compare = function(a,b) {
	$s.push("Reflect::compare");
	var $spos = $s.length;
	{
		var $tmp = a == b?0:a > b?1:-1;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Reflect.compareMethods = function(f1,f2) {
	$s.push("Reflect::compareMethods");
	var $spos = $s.length;
	if(f1 == f2) {
		$s.pop();
		return true;
	}
	if(!core.Reflect.isFunction(f1) || !core.Reflect.isFunction(f2)) {
		$s.pop();
		return false;
	}
	{
		var $tmp = f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Reflect.isObject = function(v) {
	$s.push("Reflect::isObject");
	var $spos = $s.length;
	if(v == null) {
		$s.pop();
		return false;
	}
	var t = typeof(v);
	{
		var $tmp = t == "string" || t == "object" && !v.__enum__ || t == "function" && v.__name__ != null;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Reflect.deleteField = function(o,f) {
	$s.push("Reflect::deleteField");
	var $spos = $s.length;
	if(!core.Reflect.hasField(o,f)) {
		$s.pop();
		return false;
	}
	delete(o[f]);
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
core.Reflect.copy = function(o) {
	$s.push("Reflect::copy");
	var $spos = $s.length;
	var o2 = { };
	{
		var _g = 0, _g1 = core.Reflect.fields(o);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			o2[f] = core.Reflect.field(o,f);
		}
	}
	{
		$s.pop();
		return o2;
	}
	$s.pop();
}
core.Reflect.makeVarArgs = function(f) {
	$s.push("Reflect::makeVarArgs");
	var $spos = $s.length;
	{
		var $tmp = function() {
			$s.push("Reflect::makeVarArgs@116");
			var $spos = $s.length;
			var a = new core.Array();
			{
				var _g1 = 0, _g = arguments.length;
				while(_g1 < _g) {
					var i = _g1++;
					a.push(arguments[i]);
				}
			}
			{
				var $tmp = f(a);
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Reflect.prototype.__class__ = core.Reflect;
if(!cms.mvcs.core.panel.view.components) cms.mvcs.core.panel.view.components = {}
cms.mvcs.core.panel.view.components.IPanelButtons = function() { }
cms.mvcs.core.panel.view.components.IPanelButtons.__name__ = ["cms","mvcs","core","panel","view","components","IPanelButtons"];
cms.mvcs.core.panel.view.components.IPanelButtons.prototype.submitDisabled = null;
cms.mvcs.core.panel.view.components.IPanelButtons.prototype.resetDisabled = null;
cms.mvcs.core.panel.view.components.IPanelButtons.prototype.onSubmitClicked = null;
cms.mvcs.core.panel.view.components.IPanelButtons.prototype.onResetClicked = null;
cms.mvcs.core.panel.view.components.IPanelButtons.prototype.__class__ = cms.mvcs.core.panel.view.components.IPanelButtons;
if(!cms.mvcs.core.panel.view.components.dom) cms.mvcs.core.panel.view.components.dom = {}
cms.mvcs.core.panel.view.components.dom.PanelButtonsDOM = function(p) { if( p === $_ ) return; {
	$s.push("cms.mvcs.core.panel.view.components.dom.PanelButtonsDOM::new");
	var $spos = $s.length;
	this.onSubmitClicked = new mohu.messages.Dispatcher(this);
	this.onResetClicked = new mohu.messages.Dispatcher(this);
	this.domNode = js.Lib.document.createElement("div");
	this.domNode.className = "panelButtons";
	this.resetNode = js.Lib.document.createElement("input");
	this.resetNode.type = "button";
	this.resetNode.value = "Reset";
	this.resetNode.className = "resetButton";
	this.domNode.appendChild(this.resetNode);
	this.submitNode = js.Lib.document.createElement("input");
	this.submitNode.type = "button";
	this.submitNode.value = "Submit";
	this.submitNode.className = "submitButton";
	this.domNode.appendChild(this.submitNode);
	var self = this;
	this.resetNode.onclick = function(event) {
		$s.push("cms.mvcs.core.panel.view.components.dom.PanelButtonsDOM::new@49");
		var $spos = $s.length;
		self.onResetClicked.dispatch();
		$s.pop();
	}
	this.submitNode.onclick = function(event) {
		$s.push("cms.mvcs.core.panel.view.components.dom.PanelButtonsDOM::new@50");
		var $spos = $s.length;
		self.onSubmitClicked.dispatch();
		$s.pop();
	}
	$(this.resetNode).button();
	$(this.submitNode).button();
	$s.pop();
}}
cms.mvcs.core.panel.view.components.dom.PanelButtonsDOM.__name__ = ["cms","mvcs","core","panel","view","components","dom","PanelButtonsDOM"];
cms.mvcs.core.panel.view.components.dom.PanelButtonsDOM.prototype.domNode = null;
cms.mvcs.core.panel.view.components.dom.PanelButtonsDOM.prototype.submitNode = null;
cms.mvcs.core.panel.view.components.dom.PanelButtonsDOM.prototype.resetNode = null;
cms.mvcs.core.panel.view.components.dom.PanelButtonsDOM.prototype.submitDisabled = null;
cms.mvcs.core.panel.view.components.dom.PanelButtonsDOM.prototype.resetDisabled = null;
cms.mvcs.core.panel.view.components.dom.PanelButtonsDOM.prototype.onSubmitClicked = null;
cms.mvcs.core.panel.view.components.dom.PanelButtonsDOM.prototype.onResetClicked = null;
cms.mvcs.core.panel.view.components.dom.PanelButtonsDOM.prototype.setSubmitDisabled = function(value) {
	$s.push("cms.mvcs.core.panel.view.components.dom.PanelButtonsDOM::setSubmitDisabled");
	var $spos = $s.length;
	this.submitNode.disabled = value;
	{
		var $tmp = this.submitDisabled = value;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.core.panel.view.components.dom.PanelButtonsDOM.prototype.setResetDisabled = function(value) {
	$s.push("cms.mvcs.core.panel.view.components.dom.PanelButtonsDOM::setResetDisabled");
	var $spos = $s.length;
	this.resetNode.disabled = value;
	{
		var $tmp = this.resetDisabled = value;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.core.panel.view.components.dom.PanelButtonsDOM.prototype.__class__ = cms.mvcs.core.panel.view.components.dom.PanelButtonsDOM;
cms.mvcs.core.panel.view.components.dom.PanelButtonsDOM.__interfaces__ = [cms.mvcs.view.components.dom.IViewComponentDOM,cms.mvcs.core.panel.view.components.IPanelButtons];
cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM = function(p) { if( p === $_ ) return; {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM::new");
	var $spos = $s.length;
	this._smartlistID = "smartlist" + core.Std.random(2147483646);
	cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.call(this);
	this.onItemSelected = new mohu.messages.Dispatcher(this);
	this.onItemAddClicked = new mohu.messages.Dispatcher(this);
	this.onItemRemoveClicked = new mohu.messages.Dispatcher(this);
	this.allowAdd = false;
	this.allowCreate = true;
	this.allowRemove = false;
	this.allowDelete = true;
	this._selectedIndex = -1;
	this.containerNode = js.Lib.document.createElement("div");
	this.containerNode.className = "smartlistField";
	this.listNode = js.Lib.document.createElement("ul");
	this.listNode.className = "smartlistFieldList";
	this.containerNode.appendChild(this.listNode);
	this.addButtonNode = js.Lib.document.createElement("button");
	this.addButtonNode.className = "smartlistFieldAddButton";
	this.addButtonNode.appendChild(js.Lib.document.createTextNode("Add an item"));
	this.addButtonNode.onclick = $closure(this,"_handleAddButtonClicked");
	$(this.addButtonNode).button();
	this.containerNode.appendChild(this.addButtonNode);
	this.valueNode.appendChild(this.containerNode);
	$s.pop();
}}
cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM.__name__ = ["cms","mvcs","modules","content","view","components","form","dom","SmartlistFieldEditorDOM"];
cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM.__super__ = cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM;
for(var k in cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype ) cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM.prototype[k] = cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype[k];
cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM.prototype.datatype = null;
cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM.prototype.allowAdd = null;
cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM.prototype.allowCreate = null;
cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM.prototype.allowRemove = null;
cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM.prototype.allowDelete = null;
cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM.prototype.selectedIndex = null;
cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM.prototype.selectedItem = null;
cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM.prototype.containerNode = null;
cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM.prototype.addButtonNode = null;
cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM.prototype.listNode = null;
cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM.prototype.onItemSelected = null;
cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM.prototype.onItemAddClicked = null;
cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM.prototype.onItemRemoveClicked = null;
cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM.prototype._smartlistID = null;
cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM.prototype._selectedIndex = null;
cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM.prototype.insertItemAt = function(item,index) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM::insertItemAt");
	var $spos = $s.length;
	var items = ((function($this) {
		var $r;
		var $t = $this.value;
		if(core.Std["is"]($t,cms.mvcs.core.api.model.vo.SmartlistVO)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this))).items;
	if(index < 0) throw "Index '" + this.value + "' is out of range";
	if(index > items.length) throw "Index '" + this.value + "' is out of range";
	this._addItemNode(item,index);
	items.insert(index,item);
	if(index < this._selectedIndex) this._selectedIndex++;
	{
		$s.pop();
		return item;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM.prototype.removeItemAt = function(index) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM::removeItemAt");
	var $spos = $s.length;
	var items = ((function($this) {
		var $r;
		var $t = $this.value;
		if(core.Std["is"]($t,cms.mvcs.core.api.model.vo.SmartlistVO)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this))).items;
	if(index < 0) throw "Index '" + this.value + "' is out of range";
	if(index >= items.length) throw "Index '" + this.value + "' is out of range";
	this.listNode.removeChild(this.listNode.childNodes[index]);
	var item = items.splice(index,1)[0];
	if(index == this._selectedIndex) this.setSelectedIndex(this._selectedIndex + 1);
	if(index < this._selectedIndex) this._selectedIndex--;
	{
		$s.pop();
		return item;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM.prototype._handleRadioNodeSelected = function(event) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM::_handleRadioNodeSelected");
	var $spos = $s.length;
	this.setSelectedItem(new cms.mvcs.core.api.model.vo.ReferenceVO(this.datatype,core.Std.parseInt(event.target.value)));
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM.prototype._handleAddButtonClicked = function(event) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM::_handleAddButtonClicked");
	var $spos = $s.length;
	this.onItemAddClicked.dispatch(new cms.mvcs.modules.content.messages.AddReferenceMessage(this));
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM.prototype._handleRemoveButtonClicked = function(event) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM::_handleRemoveButtonClicked");
	var $spos = $s.length;
	this.onItemRemoveClicked.dispatch();
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM.prototype.setValue = function(value) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM::setValue");
	var $spos = $s.length;
	if(value != null && !core.Std["is"](value,cms.mvcs.core.api.model.vo.SmartlistVO)) throw "Specified value '" + value + "' is not a SmartlistVO";
	while(this.listNode.hasChildNodes()) this.listNode.removeChild(this.listNode.firstChild);
	if(value != null) {
		var _g = 0, _g1 = ((function($this) {
			var $r;
			var $t = value;
			if(core.Std["is"]($t,cms.mvcs.core.api.model.vo.SmartlistVO)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).items;
		while(_g < _g1.length) {
			var item = _g1[_g];
			++_g;
			this._addItemNode(item);
		}
	}
	cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype.setValue.call(this,value);
	{
		var $tmp = this.value;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM.prototype._addItemNode = function(item,index) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM::_addItemNode");
	var $spos = $s.length;
	if(index == null) index = -1;
	var smartlistItemID = this._smartlistID + "-" + core.Std.random(2147483646);
	var itemNode = js.Lib.document.createElement("li");
	itemNode.className = "smartlistFieldItem";
	itemNode.id = smartlistItemID;
	var radioNode = js.Lib.document.createElement("input");
	radioNode.type = "radio";
	radioNode.name = this._smartlistID;
	radioNode.id = smartlistItemID + "-radio";
	radioNode.value = core.Std.string(item.id);
	radioNode.onchange = $closure(this,"_handleRadioNodeSelected");
	itemNode.appendChild(radioNode);
	var labelNode = js.Lib.document.createElement("label");
	labelNode.className = "smartlistFieldItemLabel";
	labelNode["htmlFor"] = smartlistItemID + "-radio";
	labelNode.innerHTML = item.table + " #" + item.id;
	itemNode.appendChild(labelNode);
	var removeNode = js.Lib.document.createElement("button");
	removeNode.className = "smartlistFieldItemRemove";
	removeNode.innerHTML = "Remove this item";
	itemNode.appendChild(removeNode);
	if(index == -1 || index == this.listNode.childNodes.length) {
		this.listNode.appendChild(itemNode);
	}
	else {
		this.listNode.insertBefore(itemNode,this.listNode.childNodes[index]);
	}
	$(removeNode).button({icons:{primary:"ui-icon-close"}, text: false});
	$(radioNode).button();
	$(itemNode).buttonset();
	{
		$s.pop();
		return item;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM.prototype.getSelectedIndex = function() {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM::getSelectedIndex");
	var $spos = $s.length;
	{
		var $tmp = this._selectedIndex;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM.prototype.setSelectedIndex = function(value) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM::setSelectedIndex");
	var $spos = $s.length;
	if(value < -1) throw "Selected index '" + value + "' is out of range";
	if(value >= (this.value == null?0:((function($this) {
		var $r;
		var $t = $this.value;
		if(core.Std["is"]($t,cms.mvcs.core.api.model.vo.SmartlistVO)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this))).items.length)) throw "Selected index '" + value + "' is out of range";
	this._selectedIndex = value;
	this.onItemSelected.dispatch(new cms.mvcs.modules.content.messages.ItemSelectedMessage(this.getSelectedItem()));
	{
		$s.pop();
		return value;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM.prototype.getSelectedItem = function() {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM::getSelectedItem");
	var $spos = $s.length;
	{
		var $tmp = this._selectedIndex == -1?null:((function($this) {
			var $r;
			var $t = $this.value;
			if(core.Std["is"]($t,cms.mvcs.core.api.model.vo.SmartlistVO)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).items[this._selectedIndex];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM.prototype.setSelectedItem = function(value) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM::setSelectedItem");
	var $spos = $s.length;
	var items = ((function($this) {
		var $r;
		var $t = $this.value;
		if(core.Std["is"]($t,cms.mvcs.core.api.model.vo.SmartlistVO)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this))).items;
	if(value == null) {
		this.setSelectedIndex(-1);
	}
	else {
		{
			var _g1 = 0, _g = items.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(items[i].table != value.table || items[i].id != value.id) continue;
				this.setSelectedIndex(i);
				break;
			}
		}
	}
	{
		$s.pop();
		return value;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM.prototype.__class__ = cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM;
cms.mvcs.modules.content.view.components.form.dom.SmartlistFieldEditorDOM.__interfaces__ = [cms.mvcs.modules.content.view.components.form.ISmartlistFieldEditor];
cms.mvcs.core.panel.view.controllers.IPanelViewController = function() { }
cms.mvcs.core.panel.view.controllers.IPanelViewController.__name__ = ["cms","mvcs","core","panel","view","controllers","IPanelViewController"];
cms.mvcs.core.panel.view.controllers.IPanelViewController.prototype.title = null;
cms.mvcs.core.panel.view.controllers.IPanelViewController.prototype.help = null;
cms.mvcs.core.panel.view.controllers.IPanelViewController.prototype.content = null;
cms.mvcs.core.panel.view.controllers.IPanelViewController.prototype.buttons = null;
cms.mvcs.core.panel.view.controllers.IPanelViewController.prototype.highlighted = null;
cms.mvcs.core.panel.view.controllers.IPanelViewController.prototype.onAdded = null;
cms.mvcs.core.panel.view.controllers.IPanelViewController.prototype.__class__ = cms.mvcs.core.panel.view.controllers.IPanelViewController;
cms.mvcs.core.panel.view.controllers.IPanelViewController.__interfaces__ = [mohu.mvcs.view.IViewController];
if(!cms.mvcs.modules.content.view.controllers.popups) cms.mvcs.modules.content.view.controllers.popups = {}
cms.mvcs.modules.content.view.controllers.popups.IAddReferencePopupViewController = function() { }
cms.mvcs.modules.content.view.controllers.popups.IAddReferencePopupViewController.__name__ = ["cms","mvcs","modules","content","view","controllers","popups","IAddReferencePopupViewController"];
cms.mvcs.modules.content.view.controllers.popups.IAddReferencePopupViewController.prototype.datatype = null;
cms.mvcs.modules.content.view.controllers.popups.IAddReferencePopupViewController.prototype.allowCreate = null;
cms.mvcs.modules.content.view.controllers.popups.IAddReferencePopupViewController.prototype.items = null;
cms.mvcs.modules.content.view.controllers.popups.IAddReferencePopupViewController.prototype.selectedItem = null;
cms.mvcs.modules.content.view.controllers.popups.IAddReferencePopupViewController.prototype.onItemSelected = null;
cms.mvcs.modules.content.view.controllers.popups.IAddReferencePopupViewController.prototype.__class__ = cms.mvcs.modules.content.view.controllers.popups.IAddReferencePopupViewController;
cms.mvcs.modules.content.view.controllers.popups.IAddReferencePopupViewController.__interfaces__ = [cms.mvcs.core.popup.view.controllers.IPopupViewController];
cms.mvcs.core.api.messages.content.RetrieveItemMessage = function(item) { if( item === $_ ) return; {
	$s.push("cms.mvcs.core.api.messages.content.RetrieveItemMessage::new");
	var $spos = $s.length;
	mohu.messages.Message.call(this);
	this.item = item;
	$s.pop();
}}
cms.mvcs.core.api.messages.content.RetrieveItemMessage.__name__ = ["cms","mvcs","core","api","messages","content","RetrieveItemMessage"];
cms.mvcs.core.api.messages.content.RetrieveItemMessage.__super__ = mohu.messages.Message;
for(var k in mohu.messages.Message.prototype ) cms.mvcs.core.api.messages.content.RetrieveItemMessage.prototype[k] = mohu.messages.Message.prototype[k];
cms.mvcs.core.api.messages.content.RetrieveItemMessage.prototype.item = null;
cms.mvcs.core.api.messages.content.RetrieveItemMessage.prototype.clone = function() {
	$s.push("cms.mvcs.core.api.messages.content.RetrieveItemMessage::clone");
	var $spos = $s.length;
	{
		var $tmp = new cms.mvcs.core.api.messages.content.RetrieveItemMessage(this.item);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.core.api.messages.content.RetrieveItemMessage.prototype.__class__ = cms.mvcs.core.api.messages.content.RetrieveItemMessage;
cms.mvcs.core.panel.view.controllers.IPanelContainerViewController = function() { }
cms.mvcs.core.panel.view.controllers.IPanelContainerViewController.__name__ = ["cms","mvcs","core","panel","view","controllers","IPanelContainerViewController"];
cms.mvcs.core.panel.view.controllers.IPanelContainerViewController.prototype.addPanelAt = null;
cms.mvcs.core.panel.view.controllers.IPanelContainerViewController.prototype.removePanelAt = null;
cms.mvcs.core.panel.view.controllers.IPanelContainerViewController.prototype.movePanel = null;
cms.mvcs.core.panel.view.controllers.IPanelContainerViewController.prototype.__class__ = cms.mvcs.core.panel.view.controllers.IPanelContainerViewController;
cms.mvcs.core.panel.view.controllers.IPanelContainerViewController.__interfaces__ = [mohu.mvcs.view.IViewController];
if(!cms.mvcs.core.panel.view.controllers.dom) cms.mvcs.core.panel.view.controllers.dom = {}
cms.mvcs.core.panel.view.controllers.dom.PanelContainerViewControllerDOM = function(p) { if( p === $_ ) return; {
	$s.push("cms.mvcs.core.panel.view.controllers.dom.PanelContainerViewControllerDOM::new");
	var $spos = $s.length;
	this._panels = new core.Array();
	var domNode = js.Lib.document.createElement("div");
	domNode.className = "panelContainer";
	cms.mvcs.view.controllers.dom.ViewControllerDOM.call(this,domNode);
	this._table = js.Lib.document.createElement("table");
	this._table.className = "panelContainerTable";
	domNode.appendChild(this._table);
	this._tableRow = js.Lib.document.createElement("tr");
	this._tableRow.className = "panelContainerRow";
	this._table.appendChild(this._tableRow);
	var self = this;
	$(window).resize(function() { self._updateHeight(); } );
	$s.pop();
}}
cms.mvcs.core.panel.view.controllers.dom.PanelContainerViewControllerDOM.__name__ = ["cms","mvcs","core","panel","view","controllers","dom","PanelContainerViewControllerDOM"];
cms.mvcs.core.panel.view.controllers.dom.PanelContainerViewControllerDOM.__super__ = cms.mvcs.view.controllers.dom.ViewControllerDOM;
for(var k in cms.mvcs.view.controllers.dom.ViewControllerDOM.prototype ) cms.mvcs.core.panel.view.controllers.dom.PanelContainerViewControllerDOM.prototype[k] = cms.mvcs.view.controllers.dom.ViewControllerDOM.prototype[k];
cms.mvcs.core.panel.view.controllers.dom.PanelContainerViewControllerDOM.prototype._table = null;
cms.mvcs.core.panel.view.controllers.dom.PanelContainerViewControllerDOM.prototype._tableRow = null;
cms.mvcs.core.panel.view.controllers.dom.PanelContainerViewControllerDOM.prototype._panels = null;
cms.mvcs.core.panel.view.controllers.dom.PanelContainerViewControllerDOM.prototype._panelHeight = null;
cms.mvcs.core.panel.view.controllers.dom.PanelContainerViewControllerDOM.prototype._panelContainerHeight = null;
cms.mvcs.core.panel.view.controllers.dom.PanelContainerViewControllerDOM.prototype._updateHeight = function() {
	$s.push("cms.mvcs.core.panel.view.controllers.dom.PanelContainerViewControllerDOM::_updateHeight");
	var $spos = $s.length;
	this._table.style.display = "none";
	this._panelContainerHeight = this.domNode.offsetHeight;
	this._table.style.display = "";
	{
		var _g = 0, _g1 = this._panels;
		while(_g < _g1.length) {
			var panel = _g1[_g];
			++_g;
			((function($this) {
				var $r;
				var $t = panel.content;
				if(core.Std["is"]($t,cms.mvcs.view.components.dom.IViewComponentDOM)) $t;
				else throw "Class cast error";
				$r = $t;
				return $r;
			}(this))).domNode.parentNode.style.height = core.Math.max(0,this._panelContainerHeight - this._panelHeight) + "px";
		}
	}
	$s.pop();
}
cms.mvcs.core.panel.view.controllers.dom.PanelContainerViewControllerDOM.prototype.addPanelAt = function(panel,index) {
	$s.push("cms.mvcs.core.panel.view.controllers.dom.PanelContainerViewControllerDOM::addPanelAt");
	var $spos = $s.length;
	if(!core.Std["is"](panel,cms.mvcs.view.controllers.dom.ViewControllerDOM)) throw "Specified panel is not a ViewControllerDOM";
	var tableCell = js.Lib.document.createElement("td");
	tableCell.className = "panelContainerCell";
	if(index == this._tableRow.childNodes.length) this._tableRow.appendChild(tableCell);
	else this._tableRow.insertBefore(tableCell,this._tableRow.childNodes[index]);
	if(this._panelContainerHeight == null) this._panelContainerHeight = this.domNode.offsetHeight;
	var panelNode = ((function($this) {
		var $r;
		var $t = panel;
		if(core.Std["is"]($t,cms.mvcs.view.controllers.dom.ViewControllerDOM)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this))).domNode;
	tableCell.appendChild(panelNode);
	if(this._panelHeight == null) {
		((function($this) {
			var $r;
			var $t = panel.content;
			if(core.Std["is"]($t,cms.mvcs.view.components.dom.IViewComponentDOM)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).domNode.parentNode.style.display = "none";
		this._panelHeight = core.Std["int"]($(panel.domNode).outerHeight(true)) + 1 + 1;
		((function($this) {
			var $r;
			var $t = panel.content;
			if(core.Std["is"]($t,cms.mvcs.view.components.dom.IViewComponentDOM)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).domNode.parentNode.style.display = "";
	}
	((function($this) {
		var $r;
		var $t = panel.content;
		if(core.Std["is"]($t,cms.mvcs.view.components.dom.IViewComponentDOM)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this))).domNode.parentNode.style.height = this._panelContainerHeight - this._panelHeight + "px";
	this._panels.insert(index,panel);
	var currentScroll = js.Lib.document.body.scrollLeft;
	currentScroll = document.documentElement.scrollLeft || currentScroll;
	var maxScroll = this.domNode.offsetWidth - js.Lib.document.body.clientWidth;
	if(currentScroll <= maxScroll) $("html,body").animate({scrollLeft : maxScroll}, "fast");
	$(panel.domNode).css({opacity:0, position:'relative', left: '-50px'}).animate({opacity: 1, left: 0}, "fast");
	$s.pop();
}
cms.mvcs.core.panel.view.controllers.dom.PanelContainerViewControllerDOM.prototype.removePanelAt = function(index) {
	$s.push("cms.mvcs.core.panel.view.controllers.dom.PanelContainerViewControllerDOM::removePanelAt");
	var $spos = $s.length;
	var originalWidth = this._tableRow.style.width;
	$(this._tableRow).css({width: this._tableRow.offsetWidth}).delay("fast").css({width: originalWidth});
	this._tableRow.removeChild(this._tableRow.childNodes[index]);
	this._panels.splice(index,1);
	$s.pop();
}
cms.mvcs.core.panel.view.controllers.dom.PanelContainerViewControllerDOM.prototype.movePanel = function(oldIndex,newIndex) {
	$s.push("cms.mvcs.core.panel.view.controllers.dom.PanelContainerViewControllerDOM::movePanel");
	var $spos = $s.length;
	var tableCell = this._tableRow.childNodes[oldIndex];
	this._tableRow.removeChild(tableCell);
	if(newIndex == this._tableRow.childNodes.length) this._tableRow.appendChild(tableCell);
	else this._tableRow.insertBefore(tableCell,this._tableRow.childNodes[newIndex]);
	this._panels.insert(newIndex,this._panels.splice(oldIndex,1)[0]);
	$s.pop();
}
cms.mvcs.core.panel.view.controllers.dom.PanelContainerViewControllerDOM.prototype.__class__ = cms.mvcs.core.panel.view.controllers.dom.PanelContainerViewControllerDOM;
cms.mvcs.core.panel.view.controllers.dom.PanelContainerViewControllerDOM.__interfaces__ = [cms.mvcs.core.panel.view.controllers.IPanelContainerViewController];
if(!cms.mvcs.core.api.services.structure) cms.mvcs.core.api.services.structure = {}
cms.mvcs.core.api.services.structure.IRetrieveTypesService = function() { }
cms.mvcs.core.api.services.structure.IRetrieveTypesService.__name__ = ["cms","mvcs","core","api","services","structure","IRetrieveTypesService"];
cms.mvcs.core.api.services.structure.IRetrieveTypesService.prototype.types = null;
cms.mvcs.core.api.services.structure.IRetrieveTypesService.prototype.rootType = null;
cms.mvcs.core.api.services.structure.IRetrieveTypesService.prototype.retrieveTypes = null;
cms.mvcs.core.api.services.structure.IRetrieveTypesService.prototype.__class__ = cms.mvcs.core.api.services.structure.IRetrieveTypesService;
cms.mvcs.core.api.services.structure.IRetrieveTypesService.__interfaces__ = [cms.mvcs.core.api.services.IHttpService];
cms.mvcs.modules.content.messages.ItemSelectedMessage = function(reference) { if( reference === $_ ) return; {
	$s.push("cms.mvcs.modules.content.messages.ItemSelectedMessage::new");
	var $spos = $s.length;
	mohu.messages.Message.call(this);
	this.reference = reference;
	$s.pop();
}}
cms.mvcs.modules.content.messages.ItemSelectedMessage.__name__ = ["cms","mvcs","modules","content","messages","ItemSelectedMessage"];
cms.mvcs.modules.content.messages.ItemSelectedMessage.__super__ = mohu.messages.Message;
for(var k in mohu.messages.Message.prototype ) cms.mvcs.modules.content.messages.ItemSelectedMessage.prototype[k] = mohu.messages.Message.prototype[k];
cms.mvcs.modules.content.messages.ItemSelectedMessage.prototype.reference = null;
cms.mvcs.modules.content.messages.ItemSelectedMessage.prototype.clone = function() {
	$s.push("cms.mvcs.modules.content.messages.ItemSelectedMessage::clone");
	var $spos = $s.length;
	{
		var $tmp = new cms.mvcs.modules.content.messages.ItemSelectedMessage(this.reference);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.messages.ItemSelectedMessage.prototype.__class__ = cms.mvcs.modules.content.messages.ItemSelectedMessage;
if(!cms.mvcs.core.popup.view.controllers.dom) cms.mvcs.core.popup.view.controllers.dom = {}
cms.mvcs.core.popup.view.controllers.dom.PopupContainerViewControllerDOM = function(p) { if( p === $_ ) return; {
	$s.push("cms.mvcs.core.popup.view.controllers.dom.PopupContainerViewControllerDOM::new");
	var $spos = $s.length;
	this._popupQueue = new core.Array();
	cms.mvcs.view.controllers.dom.ViewControllerDOM.call(this,null);
	$s.pop();
}}
cms.mvcs.core.popup.view.controllers.dom.PopupContainerViewControllerDOM.__name__ = ["cms","mvcs","core","popup","view","controllers","dom","PopupContainerViewControllerDOM"];
cms.mvcs.core.popup.view.controllers.dom.PopupContainerViewControllerDOM.__super__ = cms.mvcs.view.controllers.dom.ViewControllerDOM;
for(var k in cms.mvcs.view.controllers.dom.ViewControllerDOM.prototype ) cms.mvcs.core.popup.view.controllers.dom.PopupContainerViewControllerDOM.prototype[k] = cms.mvcs.view.controllers.dom.ViewControllerDOM.prototype[k];
cms.mvcs.core.popup.view.controllers.dom.PopupContainerViewControllerDOM.prototype.currentPopup = null;
cms.mvcs.core.popup.view.controllers.dom.PopupContainerViewControllerDOM.prototype.popupQueue = null;
cms.mvcs.core.popup.view.controllers.dom.PopupContainerViewControllerDOM.prototype._popupQueue = null;
cms.mvcs.core.popup.view.controllers.dom.PopupContainerViewControllerDOM.prototype.showPopup = function(popup,prioritise) {
	$s.push("cms.mvcs.core.popup.view.controllers.dom.PopupContainerViewControllerDOM::showPopup");
	var $spos = $s.length;
	if(prioritise == null) prioritise = true;
	if(popup == null) throw "No popup specified";
	if(!core.Std["is"](popup,cms.mvcs.view.components.dom.IViewComponentDOM)) throw "Specified popup does not implement the IPopupViewController interface";
	if(this.currentPopup == null && this.getPopupQueue().length == 0) {
		this._createPopup(popup);
	}
	else {
		if(prioritise) this.getPopupQueue().unshift(popup);
		else this.getPopupQueue().push(popup);
	}
	{
		$s.pop();
		return popup;
	}
	$s.pop();
}
cms.mvcs.core.popup.view.controllers.dom.PopupContainerViewControllerDOM.prototype.hidePopup = function(popup) {
	$s.push("cms.mvcs.core.popup.view.controllers.dom.PopupContainerViewControllerDOM::hidePopup");
	var $spos = $s.length;
	if(popup == null) throw "No popup specified";
	if(!core.Std["is"](popup,cms.mvcs.view.components.dom.IViewComponentDOM)) throw "Specified popup does not implement the IPopupViewController interface";
	var queueIndex = -1;
	if(popup != this.currentPopup) {
		{
			var _g1 = 0, _g = this._popupQueue.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(this._popupQueue[i] != popup) continue;
				queueIndex = i;
				break;
			}
		}
		if(queueIndex == -1) throw "Specified popup is not active in this PopupViewContainer";
	}
	if(queueIndex == -1) {
		this._destroyPopup(popup);
		if(this._popupQueue.length > 0) this._createPopup(this._popupQueue.shift());
	}
	else {
		this._popupQueue.splice(queueIndex,1);
	}
	{
		$s.pop();
		return popup;
	}
	$s.pop();
}
cms.mvcs.core.popup.view.controllers.dom.PopupContainerViewControllerDOM.prototype._createPopup = function(popup) {
	$s.push("cms.mvcs.core.popup.view.controllers.dom.PopupContainerViewControllerDOM::_createPopup");
	var $spos = $s.length;
	popup.onCloseClicked.addListener($closure(this,"_handlePopupClosed"));
	$(popup.domNode).dialog({modal: true, resizable: false, draggable: false, beforeclose: function(event, ui) { popup.onCloseClicked.dispatch(); return false; }});
	this.currentPopup = popup;
	$s.pop();
}
cms.mvcs.core.popup.view.controllers.dom.PopupContainerViewControllerDOM.prototype._destroyPopup = function(popup) {
	$s.push("cms.mvcs.core.popup.view.controllers.dom.PopupContainerViewControllerDOM::_destroyPopup");
	var $spos = $s.length;
	popup.onCloseClicked.removeListener($closure(this,"_handlePopupClosed"));
	$(popup.domNode).unbind("dialogbeforeclose"); $(popup.domNode).dialog("close"); $(popup.domNode).dialog("destroy");
	this.currentPopup = null;
	$s.pop();
}
cms.mvcs.core.popup.view.controllers.dom.PopupContainerViewControllerDOM.prototype._handlePopupClosed = function(message) {
	$s.push("cms.mvcs.core.popup.view.controllers.dom.PopupContainerViewControllerDOM::_handlePopupClosed");
	var $spos = $s.length;
	this.hidePopup((function($this) {
		var $r;
		var $t = message.getCurrentTarget();
		if(core.Std["is"]($t,cms.mvcs.core.popup.view.controllers.IPopupViewController)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this)));
	$s.pop();
}
cms.mvcs.core.popup.view.controllers.dom.PopupContainerViewControllerDOM.prototype.getPopupQueue = function() {
	$s.push("cms.mvcs.core.popup.view.controllers.dom.PopupContainerViewControllerDOM::getPopupQueue");
	var $spos = $s.length;
	{
		var $tmp = this._popupQueue.slice(0);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.core.popup.view.controllers.dom.PopupContainerViewControllerDOM.prototype.__class__ = cms.mvcs.core.popup.view.controllers.dom.PopupContainerViewControllerDOM;
cms.mvcs.core.popup.view.controllers.dom.PopupContainerViewControllerDOM.__interfaces__ = [cms.mvcs.core.popup.view.controllers.IPopupContainerViewController];
cms.mvcs.modules.content.view.components.form.ILabelFieldEditor = function() { }
cms.mvcs.modules.content.view.components.form.ILabelFieldEditor.__name__ = ["cms","mvcs","modules","content","view","components","form","ILabelFieldEditor"];
cms.mvcs.modules.content.view.components.form.ILabelFieldEditor.prototype.__class__ = cms.mvcs.modules.content.view.components.form.ILabelFieldEditor;
cms.mvcs.modules.content.view.components.form.ILabelFieldEditor.__interfaces__ = [cms.mvcs.modules.content.view.components.form.IFieldEditor];
cms.mvcs.modules.content.view.components.form.dom.LabelFieldEditorDOM = function(p) { if( p === $_ ) return; {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.LabelFieldEditorDOM::new");
	var $spos = $s.length;
	cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.call(this);
	this.hiddenNode = js.Lib.document.createElement("input");
	this.hiddenNode.type = "hidden";
	this.valueNode.appendChild(this.hiddenNode);
	this.textNode = js.Lib.document.createElement("div");
	this.valueNode.appendChild(this.textNode);
	$s.pop();
}}
cms.mvcs.modules.content.view.components.form.dom.LabelFieldEditorDOM.__name__ = ["cms","mvcs","modules","content","view","components","form","dom","LabelFieldEditorDOM"];
cms.mvcs.modules.content.view.components.form.dom.LabelFieldEditorDOM.__super__ = cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM;
for(var k in cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype ) cms.mvcs.modules.content.view.components.form.dom.LabelFieldEditorDOM.prototype[k] = cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype[k];
cms.mvcs.modules.content.view.components.form.dom.LabelFieldEditorDOM.prototype.hiddenNode = null;
cms.mvcs.modules.content.view.components.form.dom.LabelFieldEditorDOM.prototype.textNode = null;
cms.mvcs.modules.content.view.components.form.dom.LabelFieldEditorDOM.prototype.setName = function(value) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.LabelFieldEditorDOM::setName");
	var $spos = $s.length;
	this.hiddenNode.name = value;
	{
		var $tmp = cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype.setName.call(this,value);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.LabelFieldEditorDOM.prototype.setValue = function(value) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.LabelFieldEditorDOM::setValue");
	var $spos = $s.length;
	if(this.value == value) {
		$s.pop();
		return;
	}
	if(value != null && !core.Std["is"](value,core.String)) throw "Label input field value must be a String";
	this.hiddenNode.value = value;
	this.textNode.innerHTML = value;
	{
		var $tmp = cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype.setValue.call(this,value);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.LabelFieldEditorDOM.prototype.__class__ = cms.mvcs.modules.content.view.components.form.dom.LabelFieldEditorDOM;
cms.mvcs.modules.content.view.components.form.dom.LabelFieldEditorDOM.__interfaces__ = [cms.mvcs.modules.content.view.components.form.ILabelFieldEditor];
cms.mvcs.core.panel.controller.AddPanelCommand = function() { }
cms.mvcs.core.panel.controller.AddPanelCommand.__name__ = ["cms","mvcs","core","panel","controller","AddPanelCommand"];
cms.mvcs.core.panel.controller.AddPanelCommand.__super__ = cms.mvcs.controller.CMSCommand;
for(var k in cms.mvcs.controller.CMSCommand.prototype ) cms.mvcs.core.panel.controller.AddPanelCommand.prototype[k] = cms.mvcs.controller.CMSCommand.prototype[k];
cms.mvcs.core.panel.controller.AddPanelCommand.prototype.panelContainerMessage = null;
cms.mvcs.core.panel.controller.AddPanelCommand.prototype.execute = function() {
	$s.push("cms.mvcs.core.panel.controller.AddPanelCommand::execute");
	var $spos = $s.length;
	if(this.panelContainerMessage.newIndex == -1) {
		this.panelContainerMessage.panelContainerModel.addPanel(this.panelContainerMessage.panelModel);
	}
	else {
		this.panelContainerMessage.panelContainerModel.addPanelAt(this.panelContainerMessage.panelModel,this.panelContainerMessage.newIndex);
	}
	$s.pop();
}
cms.mvcs.core.panel.controller.AddPanelCommand.prototype.__class__ = cms.mvcs.core.panel.controller.AddPanelCommand;
core.StringBuf = function(p) { if( p === $_ ) return; {
	$s.push("StringBuf::new");
	var $spos = $s.length;
	this.b = new core.Array();
	$s.pop();
}}
core.StringBuf.__name__ = ["StringBuf"];
core.StringBuf.prototype.add = function(x) {
	$s.push("StringBuf::add");
	var $spos = $s.length;
	this.b[this.b.length] = x;
	$s.pop();
}
core.StringBuf.prototype.addSub = function(s,pos,len) {
	$s.push("StringBuf::addSub");
	var $spos = $s.length;
	this.b[this.b.length] = s.substr(pos,len);
	$s.pop();
}
core.StringBuf.prototype.addChar = function(c) {
	$s.push("StringBuf::addChar");
	var $spos = $s.length;
	this.b[this.b.length] = core.String.fromCharCode(c);
	$s.pop();
}
core.StringBuf.prototype.toString = function() {
	$s.push("StringBuf::toString");
	var $spos = $s.length;
	{
		var $tmp = this.b.join("");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.StringBuf.prototype.b = null;
core.StringBuf.prototype.__class__ = core.StringBuf;
mohu.mvcs.controller.CommandMap = function(injector) { if( injector === $_ ) return; {
	$s.push("mohu.mvcs.controller.CommandMap::new");
	var $spos = $s.length;
	this._injector = injector;
	this._commandMappings = new core.Array();
	$s.pop();
}}
mohu.mvcs.controller.CommandMap.__name__ = ["mohu","mvcs","controller","CommandMap"];
mohu.mvcs.controller.CommandMap.prototype._injector = null;
mohu.mvcs.controller.CommandMap.prototype._commandMappings = null;
mohu.mvcs.controller.CommandMap.prototype.hasCommand = function(dispatcher,command) {
	$s.push("mohu.mvcs.controller.CommandMap::hasCommand");
	var $spos = $s.length;
	if(dispatcher == null) throw "No dispatcher specified";
	if(command == null) throw "No command specified";
	{
		var _g = 0, _g1 = this._commandMappings;
		while(_g < _g1.length) {
			var commandMapping = _g1[_g];
			++_g;
			if(commandMapping.dispatcher == dispatcher && commandMapping.command == command) {
				$s.pop();
				return true;
			}
		}
	}
	{
		$s.pop();
		return false;
	}
	$s.pop();
}
mohu.mvcs.controller.CommandMap.prototype.mapCommand = function(dispatcher,command,runOnce) {
	$s.push("mohu.mvcs.controller.CommandMap::mapCommand");
	var $spos = $s.length;
	if(runOnce == null) runOnce = false;
	if(dispatcher == null) throw "No dispatcher specified";
	if(command == null) throw "No command specified";
	{
		var _g = 0, _g1 = this._commandMappings;
		while(_g < _g1.length) {
			var commandMapping = _g1[_g];
			++_g;
			if(commandMapping.dispatcher != dispatcher || commandMapping.command != command) continue;
			if(commandMapping.runOnce && !runOnce) commandMapping.runOnce = false;
			{
				$s.pop();
				return;
			}
		}
	}
	var commandMapping = { dispatcher : dispatcher, command : command, runOnce : runOnce};
	this._commandMappings.push(commandMapping);
	dispatcher.addListener($closure(this,"handleMessageDispatched"));
	$s.pop();
}
mohu.mvcs.controller.CommandMap.prototype.unmapCommand = function(dispatcher,command) {
	$s.push("mohu.mvcs.controller.CommandMap::unmapCommand");
	var $spos = $s.length;
	if(dispatcher == null) throw "No dispatcher specified";
	if(command == null) throw "No command specified";
	var i = -1;
	while(i < this._commandMappings.length) {
		var commandMapping = this._commandMappings[++i];
		if(commandMapping.dispatcher != dispatcher || commandMapping.command != command) continue;
		this._commandMappings.splice(i,1);
		commandMapping.dispatcher.removeListener($closure(this,"handleMessageDispatched"));
		{
			$s.pop();
			return;
		}
	}
	$s.pop();
}
mohu.mvcs.controller.CommandMap.prototype.handleMessageDispatched = function(message) {
	$s.push("mohu.mvcs.controller.CommandMap::handleMessageDispatched");
	var $spos = $s.length;
	var dispatcher = message.getDispatcher();
	var commands = new core.Array();
	this._injector.mapMetadataInstance("message",message);
	{
		var _g = 0, _g1 = this._commandMappings;
		while(_g < _g1.length) {
			var commandMapping = _g1[_g];
			++_g;
			if(commandMapping.dispatcher != dispatcher) continue;
			var command = core.Type.createInstance(commandMapping.command,[]);
			this._injector.injectInto(command);
			commands.push(command);
		}
	}
	this._injector.unmapMetadata("message");
	{
		var _g = 0;
		while(_g < commands.length) {
			var command = commands[_g];
			++_g;
			command.onRegister();
			command.execute();
		}
	}
	$s.pop();
}
mohu.mvcs.controller.CommandMap.prototype.__class__ = mohu.mvcs.controller.CommandMap;
cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM = function(p) { if( p === $_ ) return; {
	$s.push("cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM::new");
	var $spos = $s.length;
	if(cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM.__numPanels == null) cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM.__numPanels = 0;
	this._panelID = cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM.__numPanels++;
	this.onAdded = new mohu.messages.Dispatcher(this);
	this.setHighlighted(false);
	var domNode = js.Lib.document.createElement("div");
	domNode.className = "panel";
	this._headerNode = js.Lib.document.createElement("div");
	this._headerNode.className = "panelHeader";
	domNode.appendChild(this._headerNode);
	this._contentNode = js.Lib.document.createElement("div");
	this._contentNode.className = "panelContent";
	domNode.appendChild(this._contentNode);
	this._footerNode = js.Lib.document.createElement("div");
	this._footerNode.className = "panelFooter";
	domNode.appendChild(this._footerNode);
	this._titleNode = js.Lib.document.createElement("div");
	this._titleNode.className = "panelTitle";
	this._headerNode.appendChild(this._titleNode);
	this._helpNode = js.Lib.document.createElement("div");
	this._helpNode.className = "panelHelp";
	this._headerNode.appendChild(this._helpNode);
	this._separatorNode = js.Lib.document.createElement("hr");
	this._separatorNode.className = "panelSeparator";
	this._footerNode.appendChild(this._separatorNode);
	this._buttonsNode = js.Lib.document.createElement("div");
	this._buttonsNode.className = "panelButtons";
	this._footerNode.appendChild(this._buttonsNode);
	cms.mvcs.view.controllers.dom.ViewControllerDOM.call(this,domNode);
	domNode.className += " ui-widget ui-widget-content";
	this._titleNode.className += " ui-widget-header";
	$s.pop();
}}
cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM.__name__ = ["cms","mvcs","core","panel","view","controllers","dom","PanelViewControllerDOM"];
cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM.__super__ = cms.mvcs.view.controllers.dom.ViewControllerDOM;
for(var k in cms.mvcs.view.controllers.dom.ViewControllerDOM.prototype ) cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM.prototype[k] = cms.mvcs.view.controllers.dom.ViewControllerDOM.prototype[k];
cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM.__numPanels = null;
cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM.prototype.title = null;
cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM.prototype.help = null;
cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM.prototype.content = null;
cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM.prototype.buttons = null;
cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM.prototype.highlighted = null;
cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM.prototype.onAdded = null;
cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM.prototype._panelID = null;
cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM.prototype._headerNode = null;
cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM.prototype._titleNode = null;
cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM.prototype._helpNode = null;
cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM.prototype._contentNode = null;
cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM.prototype._footerNode = null;
cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM.prototype._separatorNode = null;
cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM.prototype._buttonsNode = null;
cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM.prototype.setTitle = function(value) {
	$s.push("cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM::setTitle");
	var $spos = $s.length;
	this.title = value;
	this._titleNode.innerHTML = this.title;
	{
		var $tmp = this.title;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM.prototype.setHelp = function(value) {
	$s.push("cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM::setHelp");
	var $spos = $s.length;
	this.help = value;
	this._helpNode.innerHTML = this.help;
	{
		var $tmp = this.help;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM.prototype.setContent = function(value) {
	$s.push("cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM::setContent");
	var $spos = $s.length;
	if(value != null && !core.Std["is"](value,cms.mvcs.view.components.dom.IViewComponentDOM)) throw "Specified content view must implement the IViewComponentDOM interface";
	if(this.content != null) this._contentNode.removeChild(((function($this) {
		var $r;
		var $t = $this.content;
		if(core.Std["is"]($t,cms.mvcs.view.components.dom.IViewComponentDOM)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this))).domNode);
	if(value != null) {
		this._contentNode.appendChild(((function($this) {
			var $r;
			var $t = value;
			if(core.Std["is"]($t,cms.mvcs.view.components.dom.IViewComponentDOM)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).domNode);
		((function($this) {
			var $r;
			var $t = value;
			if(core.Std["is"]($t,cms.mvcs.view.components.dom.IViewComponentDOM)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).domNode.id = "panel" + this._panelID + "-editor";
	}
	{
		var $tmp = this.content = value;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM.prototype.setButtons = function(value) {
	$s.push("cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM::setButtons");
	var $spos = $s.length;
	if(value != null && !core.Std["is"](value,cms.mvcs.view.components.dom.IViewComponentDOM)) throw "Specified panel buttons must implement the IViewComponentDOM interface";
	if(this.buttons != null) this._buttonsNode.removeChild(((function($this) {
		var $r;
		var $t = $this.buttons;
		if(core.Std["is"]($t,cms.mvcs.view.components.dom.IViewComponentDOM)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this))).domNode);
	this.buttons = value;
	if(this.buttons != null) this._buttonsNode.appendChild(((function($this) {
		var $r;
		var $t = value;
		if(core.Std["is"]($t,cms.mvcs.view.components.dom.IViewComponentDOM)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this))).domNode);
	{
		var $tmp = this.buttons;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM.prototype.setHighlighted = function(value) {
	$s.push("cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM::setHighlighted");
	var $spos = $s.length;
	if(this.highlighted == null) this.highlighted = false;
	if(this.highlighted == value) {
		var $tmp = this.highlighted;
		$s.pop();
		return $tmp;
	}
	this.domNode.style.border = value?"1px solid #FF0000":null;
	{
		var $tmp = this.highlighted = value;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM.prototype.__class__ = cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM;
cms.mvcs.core.panel.view.controllers.dom.PanelViewControllerDOM.__interfaces__ = [cms.mvcs.core.panel.view.controllers.IPanelViewController];
cms.mvcs.modules.content.view.components.form.ITextareaFieldEditor = function() { }
cms.mvcs.modules.content.view.components.form.ITextareaFieldEditor.__name__ = ["cms","mvcs","modules","content","view","components","form","ITextareaFieldEditor"];
cms.mvcs.modules.content.view.components.form.ITextareaFieldEditor.prototype.rows = null;
cms.mvcs.modules.content.view.components.form.ITextareaFieldEditor.prototype.__class__ = cms.mvcs.modules.content.view.components.form.ITextareaFieldEditor;
cms.mvcs.modules.content.view.components.form.ITextareaFieldEditor.__interfaces__ = [cms.mvcs.modules.content.view.components.form.IFieldEditor];
cms.mvcs.core.api.model.vo.ItemVO = function(table,id,alias,author,username,date,value) { if( table === $_ ) return; {
	$s.push("cms.mvcs.core.api.model.vo.ItemVO::new");
	var $spos = $s.length;
	if(date == null) date = 0;
	if(author == null) author = 0;
	if(id == null) id = 0;
	this.table = table;
	this.id = id;
	this.alias = alias;
	this.author = author;
	this.username = username;
	this.date = date;
	this.value = value;
	$s.pop();
}}
cms.mvcs.core.api.model.vo.ItemVO.__name__ = ["cms","mvcs","core","api","model","vo","ItemVO"];
cms.mvcs.core.api.model.vo.ItemVO.prototype.table = null;
cms.mvcs.core.api.model.vo.ItemVO.prototype.id = null;
cms.mvcs.core.api.model.vo.ItemVO.prototype.alias = null;
cms.mvcs.core.api.model.vo.ItemVO.prototype.author = null;
cms.mvcs.core.api.model.vo.ItemVO.prototype.username = null;
cms.mvcs.core.api.model.vo.ItemVO.prototype.date = null;
cms.mvcs.core.api.model.vo.ItemVO.prototype.value = null;
cms.mvcs.core.api.model.vo.ItemVO.prototype.__class__ = cms.mvcs.core.api.model.vo.ItemVO;
mohu.mvcs.injection.IInjector = function() { }
mohu.mvcs.injection.IInjector.__name__ = ["mohu","mvcs","injection","IInjector"];
mohu.mvcs.injection.IInjector.prototype.mapInstance = null;
mohu.mvcs.injection.IInjector.prototype.mapClass = null;
mohu.mvcs.injection.IInjector.prototype.mapSingleton = null;
mohu.mvcs.injection.IInjector.prototype.mapRule = null;
mohu.mvcs.injection.IInjector.prototype.unmapClass = null;
mohu.mvcs.injection.IInjector.prototype.hasClassMapping = null;
mohu.mvcs.injection.IInjector.prototype.getClassInstance = null;
mohu.mvcs.injection.IInjector.prototype.mapMetadataInstance = null;
mohu.mvcs.injection.IInjector.prototype.mapMetadataClass = null;
mohu.mvcs.injection.IInjector.prototype.mapMetadataSingleton = null;
mohu.mvcs.injection.IInjector.prototype.unmapMetadata = null;
mohu.mvcs.injection.IInjector.prototype.hasMetadataMapping = null;
mohu.mvcs.injection.IInjector.prototype.getMetadataInstance = null;
mohu.mvcs.injection.IInjector.prototype.injectInto = null;
mohu.mvcs.injection.IInjector.prototype.__class__ = mohu.mvcs.injection.IInjector;
mohu.mvcs.injection.Injector = function(p) { if( p === $_ ) return; {
	$s.push("mohu.mvcs.injection.Injector::new");
	var $spos = $s.length;
	this._classInjectionRules = new core.Hash();
	this._metadataInjectionRules = new core.Hash();
	$s.pop();
}}
mohu.mvcs.injection.Injector.__name__ = ["mohu","mvcs","injection","Injector"];
mohu.mvcs.injection.Injector.prototype._classInjectionRules = null;
mohu.mvcs.injection.Injector.prototype._metadataInjectionRules = null;
mohu.mvcs.injection.Injector.prototype.mapInstance = function(requestedClass,instance) {
	$s.push("mohu.mvcs.injection.Injector::mapInstance");
	var $spos = $s.length;
	if(requestedClass == null) throw "No class specified";
	if(instance == null) throw "No instance specified";
	var requestedClassName = core.Type.getClassName(requestedClass);
	if(this._classInjectionRules.exists(requestedClassName)) throw "An injection mapping already exists for class " + requestedClassName;
	this._classInjectionRules.set(requestedClassName,new mohu.mvcs.injection.InjectionRule(instance.constructor,true,instance));
	{
		$s.pop();
		return instance;
	}
	$s.pop();
}
mohu.mvcs.injection.Injector.prototype.mapClass = function(requestedClass,suppliedClass) {
	$s.push("mohu.mvcs.injection.Injector::mapClass");
	var $spos = $s.length;
	if(requestedClass == null) throw "No class specified";
	var requestedClassName = core.Type.getClassName(requestedClass);
	if(this._classInjectionRules.exists(requestedClassName)) throw "An injection mapping already exists for class " + requestedClassName;
	if(suppliedClass == null) suppliedClass = requestedClass;
	this._classInjectionRules.set(requestedClassName,new mohu.mvcs.injection.InjectionRule(suppliedClass,false));
	$s.pop();
}
mohu.mvcs.injection.Injector.prototype.mapSingleton = function(requestedClass,suppliedClass) {
	$s.push("mohu.mvcs.injection.Injector::mapSingleton");
	var $spos = $s.length;
	if(requestedClass == null) throw "No class specified";
	var requestedClassName = core.Type.getClassName(requestedClass);
	if(this._classInjectionRules.exists(requestedClassName)) throw "An injection mapping already exists for class " + requestedClassName;
	if(suppliedClass == null) suppliedClass = requestedClass;
	this._classInjectionRules.set(requestedClassName,new mohu.mvcs.injection.InjectionRule(suppliedClass,true));
	$s.pop();
}
mohu.mvcs.injection.Injector.prototype.mapRule = function(requestedClass,rule) {
	$s.push("mohu.mvcs.injection.Injector::mapRule");
	var $spos = $s.length;
	if(requestedClass == null) throw "No class specified";
	if(rule == null) throw "No rule specified";
	var requestedClassName = core.Type.getClassName(requestedClass);
	if(this._classInjectionRules.exists(requestedClassName)) throw "An injection mapping already exists for class " + requestedClassName;
	this._classInjectionRules.set(requestedClassName,rule);
	$s.pop();
}
mohu.mvcs.injection.Injector.prototype.unmapClass = function(requestedClass) {
	$s.push("mohu.mvcs.injection.Injector::unmapClass");
	var $spos = $s.length;
	if(requestedClass == null) throw "No class specified";
	var requestedClassName = core.Type.getClassName(requestedClass);
	this._classInjectionRules.remove(requestedClassName);
	$s.pop();
}
mohu.mvcs.injection.Injector.prototype.hasClassMapping = function(requestedClass) {
	$s.push("mohu.mvcs.injection.Injector::hasClassMapping");
	var $spos = $s.length;
	{
		var $tmp = this._classInjectionRules.exists(core.Type.getClassName(requestedClass));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
mohu.mvcs.injection.Injector.prototype.getClassInstance = function(requestedClass) {
	$s.push("mohu.mvcs.injection.Injector::getClassInstance");
	var $spos = $s.length;
	if(requestedClass == null) throw "No class specified";
	var requestedClassName = core.Type.getClassName(requestedClass);
	var rule = this._classInjectionRules.get(requestedClassName);
	if(rule == null) throw "No injection mapping specified for class " + requestedClassName;
	{
		var $tmp = rule.getInstance() != null?rule.getInstance():this.injectInto(rule.createInstance());
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
mohu.mvcs.injection.Injector.prototype.mapMetadataInstance = function(tag,instance) {
	$s.push("mohu.mvcs.injection.Injector::mapMetadataInstance");
	var $spos = $s.length;
	if(tag == null) throw "No tag specified";
	if(instance == null) throw "No instance specified";
	if(this._metadataInjectionRules.exists(tag)) throw "An injection mapping already exists for metadata tag '" + tag + "'";
	this._metadataInjectionRules.set(tag,new mohu.mvcs.injection.InjectionRule(instance.constructor,true,instance));
	$s.pop();
}
mohu.mvcs.injection.Injector.prototype.mapMetadataClass = function(tag,suppliedClass) {
	$s.push("mohu.mvcs.injection.Injector::mapMetadataClass");
	var $spos = $s.length;
	if(tag == null) throw "No tag specified";
	if(suppliedClass == null) throw "No class specified";
	if(this._metadataInjectionRules.exists(tag)) throw "An injection mapping already exists for metadata tag '" + tag + "'";
	this._metadataInjectionRules.set(tag,new mohu.mvcs.injection.InjectionRule(suppliedClass,false));
	$s.pop();
}
mohu.mvcs.injection.Injector.prototype.mapMetadataSingleton = function(tag,suppliedClass) {
	$s.push("mohu.mvcs.injection.Injector::mapMetadataSingleton");
	var $spos = $s.length;
	if(tag == null) throw "No tag specified";
	if(suppliedClass == null) throw "No class specified";
	if(this._metadataInjectionRules.exists(tag)) throw "An injection mapping already exists for metadata tag '" + tag + "'";
	this._metadataInjectionRules.set(tag,new mohu.mvcs.injection.InjectionRule(suppliedClass,true));
	$s.pop();
}
mohu.mvcs.injection.Injector.prototype.mapMetadataRule = function(tag,rule) {
	$s.push("mohu.mvcs.injection.Injector::mapMetadataRule");
	var $spos = $s.length;
	if(tag == null) throw "No tag specified";
	if(rule == null) throw "No rule specified";
	if(this._metadataInjectionRules.exists(tag)) throw "An injection mapping already exists for metadata tag '" + tag + "'";
	this._metadataInjectionRules.set(tag,rule);
	$s.pop();
}
mohu.mvcs.injection.Injector.prototype.getMetadataInstance = function(tag) {
	$s.push("mohu.mvcs.injection.Injector::getMetadataInstance");
	var $spos = $s.length;
	if(tag == null) throw "No tag specified";
	var rule = this._metadataInjectionRules.get(tag);
	if(rule == null) throw "No injection mapping specified for tag " + tag;
	{
		var $tmp = rule.getInstance() != null?rule.getInstance():this.injectInto(rule.createInstance());
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
mohu.mvcs.injection.Injector.prototype.hasMetadataMapping = function(tag) {
	$s.push("mohu.mvcs.injection.Injector::hasMetadataMapping");
	var $spos = $s.length;
	{
		var $tmp = this._metadataInjectionRules.exists(tag);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
mohu.mvcs.injection.Injector.prototype.unmapMetadata = function(tag) {
	$s.push("mohu.mvcs.injection.Injector::unmapMetadata");
	var $spos = $s.length;
	this._metadataInjectionRules.remove(tag);
	$s.pop();
}
mohu.mvcs.injection.Injector.prototype.injectInto = function(instance,register) {
	$s.push("mohu.mvcs.injection.Injector::injectInto");
	var $spos = $s.length;
	if(register == null) register = true;
	if(instance == null) throw "No instance specified";
	var instanceClass = core.Type.getClass(instance);
	var instanceClassName = core.Type.getClassName(instanceClass);
	var metadata = haxe.rtti.Meta.getFields(instanceClass);
	var metadataFieldNames = core.Reflect.fields(metadata);
	var metadataFieldValues = new core.Array();
	{
		var _g = 0;
		while(_g < metadataFieldNames.length) {
			var metadataFieldName = metadataFieldNames[_g];
			++_g;
			metadataFieldValues.push(core.Reflect.field(metadata,metadataFieldName));
		}
	}
	var superClass = instanceClass;
	while((superClass = core.Type.getSuperClass(superClass)) != null) {
		var superClassMetadata = haxe.rtti.Meta.getFields(superClass);
		var superClassMetadataFieldNames = core.Reflect.fields(superClassMetadata);
		{
			var _g = 0;
			while(_g < superClassMetadataFieldNames.length) {
				var superClassMetadataFieldName = superClassMetadataFieldNames[_g];
				++_g;
				metadataFieldNames.push(superClassMetadataFieldName);
				metadataFieldValues.push(core.Reflect.field(superClassMetadata,superClassMetadataFieldName));
			}
		}
	}
	var instanceClassInfo = null;
	var i = -1;
	{
		var _g = 0;
		while(_g < metadataFieldNames.length) {
			var metadataFieldName = metadataFieldNames[_g];
			++_g;
			var fieldMetadata = metadataFieldValues[++i];
			if(!core.Reflect.hasField(fieldMetadata,"inject")) continue;
			var tag = core.Reflect.field(fieldMetadata,"inject");
			var rule;
			if(tag != null) {
				rule = this._metadataInjectionRules.get(tag);
			}
			else {
				if(instanceClassInfo == null) {
					instanceClassInfo = instanceClass.__rtti;
					var superClass1 = instanceClass;
					while((superClass1 = core.Type.getSuperClass(superClass1)) != null) instanceClassInfo += superClass1.__rtti;
				}
				if(instanceClassInfo == null) throw "Unable to get field types - class " + instanceClassName + " must implement haxe.rtti.Infos";
				var search = new core.EReg("<" + metadataFieldName + " public=\"1\"[^>]*><c path=\"(.*?)\"","");
				if(!search.match(instanceClassInfo)) throw "Unable to determine type of field " + instanceClassName + "::" + metadataFieldName;
				rule = this._classInjectionRules.get(search.matched(1));
			}
			if(rule == null) throw "Cannot satisfy injection dependencies for " + instanceClassName + "::" + metadataFieldName;
			var injectee = rule.getInstance() != null?rule.getInstance():this.injectInto(rule.createInstance());
			instance[metadataFieldName] = injectee;
		}
	}
	{
		$s.pop();
		return instance;
	}
	$s.pop();
}
mohu.mvcs.injection.Injector.prototype.__class__ = mohu.mvcs.injection.Injector;
mohu.mvcs.injection.Injector.__interfaces__ = [mohu.mvcs.injection.IInjector];
cms.mvcs.core.api.messages.content.UpdateItemMessage = function(item) { if( item === $_ ) return; {
	$s.push("cms.mvcs.core.api.messages.content.UpdateItemMessage::new");
	var $spos = $s.length;
	mohu.messages.Message.call(this);
	this.item = item;
	$s.pop();
}}
cms.mvcs.core.api.messages.content.UpdateItemMessage.__name__ = ["cms","mvcs","core","api","messages","content","UpdateItemMessage"];
cms.mvcs.core.api.messages.content.UpdateItemMessage.__super__ = mohu.messages.Message;
for(var k in mohu.messages.Message.prototype ) cms.mvcs.core.api.messages.content.UpdateItemMessage.prototype[k] = mohu.messages.Message.prototype[k];
cms.mvcs.core.api.messages.content.UpdateItemMessage.prototype.item = null;
cms.mvcs.core.api.messages.content.UpdateItemMessage.prototype.clone = function() {
	$s.push("cms.mvcs.core.api.messages.content.UpdateItemMessage::clone");
	var $spos = $s.length;
	{
		var $tmp = new cms.mvcs.core.api.messages.content.UpdateItemMessage(this.item);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.core.api.messages.content.UpdateItemMessage.prototype.__class__ = cms.mvcs.core.api.messages.content.UpdateItemMessage;
if(!cms.mvcs.core.api.controller.structure) cms.mvcs.core.api.controller.structure = {}
cms.mvcs.core.api.controller.structure.RetrieveTypesCommand = function() { }
cms.mvcs.core.api.controller.structure.RetrieveTypesCommand.__name__ = ["cms","mvcs","core","api","controller","structure","RetrieveTypesCommand"];
cms.mvcs.core.api.controller.structure.RetrieveTypesCommand.__super__ = cms.mvcs.controller.CMSCommand;
for(var k in cms.mvcs.controller.CMSCommand.prototype ) cms.mvcs.core.api.controller.structure.RetrieveTypesCommand.prototype[k] = cms.mvcs.controller.CMSCommand.prototype[k];
cms.mvcs.core.api.controller.structure.RetrieveTypesCommand.prototype.retrieveTypesMessage = null;
cms.mvcs.core.api.controller.structure.RetrieveTypesCommand.prototype.configModel = null;
cms.mvcs.core.api.controller.structure.RetrieveTypesCommand.prototype.service = null;
cms.mvcs.core.api.controller.structure.RetrieveTypesCommand.prototype.execute = function() {
	$s.push("cms.mvcs.core.api.controller.structure.RetrieveTypesCommand::execute");
	var $spos = $s.length;
	this.service.onLoadFailed.addListener($closure(this,"_handleLoadFailed"));
	this.service.onLoadCompleted.addListener($closure(this,"_handleLoadCompleted"));
	this.service.retrieveTypes();
	$s.pop();
}
cms.mvcs.core.api.controller.structure.RetrieveTypesCommand.prototype._handleLoadFailed = function(message) {
	$s.push("cms.mvcs.core.api.controller.structure.RetrieveTypesCommand::_handleLoadFailed");
	var $spos = $s.length;
	this.service.onLoadFailed.removeListener($closure(this,"_handleLoadFailed"));
	this.service.onLoadCompleted.removeListener($closure(this,"_handleLoadCompleted"));
	this.cmsHub.onError.dispatch(new cms.mvcs.messages.ErrorMessage("Failed to retrieve types: " + this.service.error));
	this.cmsHub.onRetrieveTypesFailed.dispatch(this.message);
	$s.pop();
}
cms.mvcs.core.api.controller.structure.RetrieveTypesCommand.prototype._handleLoadCompleted = function(message) {
	$s.push("cms.mvcs.core.api.controller.structure.RetrieveTypesCommand::_handleLoadCompleted");
	var $spos = $s.length;
	this.service.onLoadFailed.removeListener($closure(this,"_handleLoadFailed"));
	this.service.onLoadCompleted.removeListener($closure(this,"_handleLoadCompleted"));
	this.retrieveTypesMessage.types = this.service.types;
	this.retrieveTypesMessage.rootType = this.service.rootType;
	this.cmsHub.onRetrieveTypesCompleted.dispatch(this.retrieveTypesMessage);
	$s.pop();
}
cms.mvcs.core.api.controller.structure.RetrieveTypesCommand.prototype.__class__ = cms.mvcs.core.api.controller.structure.RetrieveTypesCommand;
cms.mvcs.core.api.services.content.RetrieveItemsService = function(p) { if( p === $_ ) return; {
	$s.push("cms.mvcs.core.api.services.content.RetrieveItemsService::new");
	var $spos = $s.length;
	cms.mvcs.core.api.services.APIService.call(this);
	$s.pop();
}}
cms.mvcs.core.api.services.content.RetrieveItemsService.__name__ = ["cms","mvcs","core","api","services","content","RetrieveItemsService"];
cms.mvcs.core.api.services.content.RetrieveItemsService.__super__ = cms.mvcs.core.api.services.APIService;
for(var k in cms.mvcs.core.api.services.APIService.prototype ) cms.mvcs.core.api.services.content.RetrieveItemsService.prototype[k] = cms.mvcs.core.api.services.APIService.prototype[k];
cms.mvcs.core.api.services.content.RetrieveItemsService.prototype.items = null;
cms.mvcs.core.api.services.content.RetrieveItemsService.prototype.retrieveItems = function(table) {
	$s.push("cms.mvcs.core.api.services.content.RetrieveItemsService::retrieveItems");
	var $spos = $s.length;
	cms.mvcs.core.api.services.APIService.prototype.api.call(this,"content","GET",table + "/");
	$s.pop();
}
cms.mvcs.core.api.services.content.RetrieveItemsService.prototype._parseData = function(data) {
	$s.push("cms.mvcs.core.api.services.content.RetrieveItemsService::_parseData");
	var $spos = $s.length;
	cms.mvcs.core.api.services.APIService.prototype._parseData.call(this,data);
	this.items = this.response;
	$s.pop();
}
cms.mvcs.core.api.services.content.RetrieveItemsService.prototype.__class__ = cms.mvcs.core.api.services.content.RetrieveItemsService;
cms.mvcs.core.api.services.content.RetrieveItemsService.__interfaces__ = [cms.mvcs.core.api.services.content.IRetrieveItemsService];
core.Std = function() { }
core.Std.__name__ = ["Std"];
core.Std["is"] = function(v,t) {
	$s.push("Std::is");
	var $spos = $s.length;
	{
		var $tmp = js.Boot.__instanceof(v,t);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Std.string = function(s) {
	$s.push("Std::string");
	var $spos = $s.length;
	{
		var $tmp = js.Boot.__string_rec(s,"");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Std["int"] = function(x) {
	$s.push("Std::int");
	var $spos = $s.length;
	if(x < 0) {
		var $tmp = core.Math.ceil(x);
		$s.pop();
		return $tmp;
	}
	{
		var $tmp = core.Math.floor(x);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Std.parseInt = function(x) {
	$s.push("Std::parseInt");
	var $spos = $s.length;
	var v = parseInt(x,10);
	if(v == 0 && x.charCodeAt(1) == 120) v = parseInt(x);
	if(isNaN(v)) {
		$s.pop();
		return null;
	}
	{
		var $tmp = v;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Std.parseFloat = function(x) {
	$s.push("Std::parseFloat");
	var $spos = $s.length;
	{
		var $tmp = parseFloat(x);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Std.random = function(x) {
	$s.push("Std::random");
	var $spos = $s.length;
	{
		var $tmp = core.Math.floor(core.Math.random() * x);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Std.prototype.__class__ = core.Std;
cms.mvcs.modules.content.view.components.form.dom.TextareaFieldEditorDOM = function(p) { if( p === $_ ) return; {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.TextareaFieldEditorDOM::new");
	var $spos = $s.length;
	cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.call(this);
	this.textareaNode = js.Lib.document.createElement("textarea");
	this.textareaNode.rows = 6;
	this.textareaNode.className = "textareaField";
	this.textareaNode.onchange = $closure(this,"_handleTextChanged");
	this.valueNode.appendChild(this.textareaNode);
	$s.pop();
}}
cms.mvcs.modules.content.view.components.form.dom.TextareaFieldEditorDOM.__name__ = ["cms","mvcs","modules","content","view","components","form","dom","TextareaFieldEditorDOM"];
cms.mvcs.modules.content.view.components.form.dom.TextareaFieldEditorDOM.__super__ = cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM;
for(var k in cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype ) cms.mvcs.modules.content.view.components.form.dom.TextareaFieldEditorDOM.prototype[k] = cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype[k];
cms.mvcs.modules.content.view.components.form.dom.TextareaFieldEditorDOM.prototype.textareaNode = null;
cms.mvcs.modules.content.view.components.form.dom.TextareaFieldEditorDOM.prototype.rows = null;
cms.mvcs.modules.content.view.components.form.dom.TextareaFieldEditorDOM.prototype._handleTextChanged = function(event) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.TextareaFieldEditorDOM::_handleTextChanged");
	var $spos = $s.length;
	this.setValue(this.textareaNode.value);
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.TextareaFieldEditorDOM.prototype.setRows = function(value) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.TextareaFieldEditorDOM::setRows");
	var $spos = $s.length;
	this.rows = value;
	this.textareaNode.rows = this.rows;
	{
		var $tmp = this.rows;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.TextareaFieldEditorDOM.prototype.setName = function(value) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.TextareaFieldEditorDOM::setName");
	var $spos = $s.length;
	cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype.setName.call(this,value);
	this.textareaNode.name = this.name;
	{
		var $tmp = this.name;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.TextareaFieldEditorDOM.prototype.setDisabled = function(value) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.TextareaFieldEditorDOM::setDisabled");
	var $spos = $s.length;
	cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype.setDisabled.call(this,value);
	this.textareaNode.disabled = this.disabled;
	{
		var $tmp = this.disabled;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.TextareaFieldEditorDOM.prototype.setParameters = function(value) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.TextareaFieldEditorDOM::setParameters");
	var $spos = $s.length;
	cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype.setParameters.call(this,value);
	if(this.parameters != null) if(this.parameters.exists("rows")) this.setRows(this.parameters.get("rows"));
	{
		var $tmp = this.parameters;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.TextareaFieldEditorDOM.prototype.setValue = function(value) {
	$s.push("cms.mvcs.modules.content.view.components.form.dom.TextareaFieldEditorDOM::setValue");
	var $spos = $s.length;
	this.textareaNode.value = value;
	cms.mvcs.modules.content.view.components.form.dom.FieldEditorDOM.prototype.setValue.call(this,value);
	{
		var $tmp = this.value;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.components.form.dom.TextareaFieldEditorDOM.prototype.__class__ = cms.mvcs.modules.content.view.components.form.dom.TextareaFieldEditorDOM;
cms.mvcs.modules.content.view.components.form.dom.TextareaFieldEditorDOM.__interfaces__ = [cms.mvcs.modules.content.view.components.form.ITextareaFieldEditor];
cms.mvcs.core.popup.view.controllers.dom.PopupViewControllerDOM = function(view) { if( view === $_ ) return; {
	$s.push("cms.mvcs.core.popup.view.controllers.dom.PopupViewControllerDOM::new");
	var $spos = $s.length;
	this.onCloseClicked = new mohu.messages.Dispatcher(this);
	cms.mvcs.view.controllers.dom.ViewControllerDOM.call(this,view);
	$s.pop();
}}
cms.mvcs.core.popup.view.controllers.dom.PopupViewControllerDOM.__name__ = ["cms","mvcs","core","popup","view","controllers","dom","PopupViewControllerDOM"];
cms.mvcs.core.popup.view.controllers.dom.PopupViewControllerDOM.__super__ = cms.mvcs.view.controllers.dom.ViewControllerDOM;
for(var k in cms.mvcs.view.controllers.dom.ViewControllerDOM.prototype ) cms.mvcs.core.popup.view.controllers.dom.PopupViewControllerDOM.prototype[k] = cms.mvcs.view.controllers.dom.ViewControllerDOM.prototype[k];
cms.mvcs.core.popup.view.controllers.dom.PopupViewControllerDOM.prototype.onCloseClicked = null;
cms.mvcs.core.popup.view.controllers.dom.PopupViewControllerDOM.prototype.__class__ = cms.mvcs.core.popup.view.controllers.dom.PopupViewControllerDOM;
cms.mvcs.core.popup.view.controllers.dom.PopupViewControllerDOM.__interfaces__ = [cms.mvcs.core.popup.view.controllers.IPopupViewController];
if(!cms.mvcs.modules.content.view.controllers.popups.dom) cms.mvcs.modules.content.view.controllers.popups.dom = {}
cms.mvcs.modules.content.view.controllers.popups.dom.AddReferencePopupViewControllerDOM = function(p) { if( p === $_ ) return; {
	$s.push("cms.mvcs.modules.content.view.controllers.popups.dom.AddReferencePopupViewControllerDOM::new");
	var $spos = $s.length;
	this.onItemSelected = new mohu.messages.Dispatcher(this);
	this._referenceAdderID = "referenceAdder" + core.Std.random(2147483646);
	var domNode = js.Lib.document.createElement("div");
	domNode.className = "referenceAdder";
	domNode.title = "Add an item";
	var titleNode = js.Lib.document.createElement("div");
	titleNode.className = "referenceAdderTitle";
	titleNode.appendChild(js.Lib.document.createTextNode("Choose an item from the list below:"));
	domNode.appendChild(titleNode);
	this._listNode = js.Lib.document.createElement("ul");
	this._listNode.className = "referenceAdderList";
	domNode.appendChild(this._listNode);
	var separatorNode = js.Lib.document.createElement("hr");
	separatorNode.className = "panelSeparator";
	domNode.appendChild(separatorNode);
	this._createButton = js.Lib.document.createElement("button");
	this._createButton.className = "referenceAdderCreateButton";
	this._createButton.appendChild(js.Lib.document.createTextNode("Create new"));
	this._createButton.onclick = $closure(this,"_handleCreateButtonClicked");
	$(this._createButton).button({icons: {primary: "ui-icon-plus"}});
	domNode.appendChild(this._createButton);
	this._cancelButton = js.Lib.document.createElement("button");
	this._cancelButton.className = "referenceAdderCancelButton";
	this._cancelButton.appendChild(js.Lib.document.createTextNode("Cancel"));
	this._cancelButton.onclick = $closure(this,"_handleCancelButtonClicked");
	$(this._cancelButton).button();
	domNode.appendChild(this._cancelButton);
	this._okButton = js.Lib.document.createElement("button");
	this._okButton.className = "referenceAdderOKButton";
	this._okButton.appendChild(js.Lib.document.createTextNode("OK"));
	this._okButton.onclick = $closure(this,"_handleOKButtonClicked");
	this._okButton.disabled = true;
	$(this._okButton).button();
	domNode.appendChild(this._okButton);
	cms.mvcs.core.popup.view.controllers.dom.PopupViewControllerDOM.call(this,domNode);
	this.setAllowCreate(false);
	$s.pop();
}}
cms.mvcs.modules.content.view.controllers.popups.dom.AddReferencePopupViewControllerDOM.__name__ = ["cms","mvcs","modules","content","view","controllers","popups","dom","AddReferencePopupViewControllerDOM"];
cms.mvcs.modules.content.view.controllers.popups.dom.AddReferencePopupViewControllerDOM.__super__ = cms.mvcs.core.popup.view.controllers.dom.PopupViewControllerDOM;
for(var k in cms.mvcs.core.popup.view.controllers.dom.PopupViewControllerDOM.prototype ) cms.mvcs.modules.content.view.controllers.popups.dom.AddReferencePopupViewControllerDOM.prototype[k] = cms.mvcs.core.popup.view.controllers.dom.PopupViewControllerDOM.prototype[k];
cms.mvcs.modules.content.view.controllers.popups.dom.AddReferencePopupViewControllerDOM.prototype.datatype = null;
cms.mvcs.modules.content.view.controllers.popups.dom.AddReferencePopupViewControllerDOM.prototype.allowCreate = null;
cms.mvcs.modules.content.view.controllers.popups.dom.AddReferencePopupViewControllerDOM.prototype.items = null;
cms.mvcs.modules.content.view.controllers.popups.dom.AddReferencePopupViewControllerDOM.prototype.selectedItem = null;
cms.mvcs.modules.content.view.controllers.popups.dom.AddReferencePopupViewControllerDOM.prototype.onItemSelected = null;
cms.mvcs.modules.content.view.controllers.popups.dom.AddReferencePopupViewControllerDOM.prototype._referenceAdderID = null;
cms.mvcs.modules.content.view.controllers.popups.dom.AddReferencePopupViewControllerDOM.prototype._listNode = null;
cms.mvcs.modules.content.view.controllers.popups.dom.AddReferencePopupViewControllerDOM.prototype._createButton = null;
cms.mvcs.modules.content.view.controllers.popups.dom.AddReferencePopupViewControllerDOM.prototype._cancelButton = null;
cms.mvcs.modules.content.view.controllers.popups.dom.AddReferencePopupViewControllerDOM.prototype._okButton = null;
cms.mvcs.modules.content.view.controllers.popups.dom.AddReferencePopupViewControllerDOM.prototype._handleCreateButtonClicked = function(event) {
	$s.push("cms.mvcs.modules.content.view.controllers.popups.dom.AddReferencePopupViewControllerDOM::_handleCreateButtonClicked");
	var $spos = $s.length;
	this.selectedItem = new cms.mvcs.core.api.model.vo.ReferenceVO(this.datatype,-1);
	this.onItemSelected.dispatch();
	$s.pop();
}
cms.mvcs.modules.content.view.controllers.popups.dom.AddReferencePopupViewControllerDOM.prototype._handleCancelButtonClicked = function(event) {
	$s.push("cms.mvcs.modules.content.view.controllers.popups.dom.AddReferencePopupViewControllerDOM::_handleCancelButtonClicked");
	var $spos = $s.length;
	this.onCloseClicked.dispatch();
	$s.pop();
}
cms.mvcs.modules.content.view.controllers.popups.dom.AddReferencePopupViewControllerDOM.prototype._handleOKButtonClicked = function(event) {
	$s.push("cms.mvcs.modules.content.view.controllers.popups.dom.AddReferencePopupViewControllerDOM::_handleOKButtonClicked");
	var $spos = $s.length;
	this.onItemSelected.dispatch();
	$s.pop();
}
cms.mvcs.modules.content.view.controllers.popups.dom.AddReferencePopupViewControllerDOM.prototype.setItems = function(value) {
	$s.push("cms.mvcs.modules.content.view.controllers.popups.dom.AddReferencePopupViewControllerDOM::setItems");
	var $spos = $s.length;
	while(this._listNode.hasChildNodes()) this._listNode.removeChild(this._listNode.firstChild);
	if(value != null) {
		var _g = 0;
		while(_g < value.length) {
			var item = value[_g];
			++_g;
			this._addItemNode(item);
		}
	}
	{
		$s.pop();
		return value;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.controllers.popups.dom.AddReferencePopupViewControllerDOM.prototype._addItemNode = function(item) {
	$s.push("cms.mvcs.modules.content.view.controllers.popups.dom.AddReferencePopupViewControllerDOM::_addItemNode");
	var $spos = $s.length;
	var referenceAdderItemID = this._referenceAdderID + "-" + core.Std.random(2147483646);
	var itemNode = js.Lib.document.createElement("li");
	itemNode.className = "referenceAdderItem";
	itemNode.id = referenceAdderItemID;
	var radioNode = js.Lib.document.createElement("input");
	radioNode.type = "radio";
	radioNode.name = this._referenceAdderID;
	radioNode.id = referenceAdderItemID + "-radio";
	radioNode.value = core.Std.string(item.id);
	radioNode.onchange = $closure(this,"_handleRadioNodeSelected");
	itemNode.appendChild(radioNode);
	var labelNode = js.Lib.document.createElement("label");
	labelNode.className = "referenceAdderItemLabel";
	labelNode["htmlFor"] = referenceAdderItemID + "-radio";
	labelNode.innerHTML = item.table + " #" + item.id;
	itemNode.appendChild(labelNode);
	this._listNode.appendChild(itemNode);
	$(radioNode).button();
	{
		$s.pop();
		return item;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.controllers.popups.dom.AddReferencePopupViewControllerDOM.prototype._handleRadioNodeSelected = function(event) {
	$s.push("cms.mvcs.modules.content.view.controllers.popups.dom.AddReferencePopupViewControllerDOM::_handleRadioNodeSelected");
	var $spos = $s.length;
	this.selectedItem = new cms.mvcs.core.api.model.vo.ReferenceVO(this.datatype,core.Std.parseInt(event.target.value));
	this._okButton.disabled = false;
	$(this._okButton).button("enable");
	$s.pop();
}
cms.mvcs.modules.content.view.controllers.popups.dom.AddReferencePopupViewControllerDOM.prototype.setAllowCreate = function(value) {
	$s.push("cms.mvcs.modules.content.view.controllers.popups.dom.AddReferencePopupViewControllerDOM::setAllowCreate");
	var $spos = $s.length;
	this.allowCreate = value;
	{
		var $tmp = this.allowCreate;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.controllers.popups.dom.AddReferencePopupViewControllerDOM.prototype.__class__ = cms.mvcs.modules.content.view.controllers.popups.dom.AddReferencePopupViewControllerDOM;
cms.mvcs.modules.content.view.controllers.popups.dom.AddReferencePopupViewControllerDOM.__interfaces__ = [cms.mvcs.modules.content.view.controllers.popups.IAddReferencePopupViewController];
cms.mvcs.core.panel.model.PanelModel = function(title,help,contentView,buttons) { if( title === $_ ) return; {
	$s.push("cms.mvcs.core.panel.model.PanelModel::new");
	var $spos = $s.length;
	this.onTitleChanged = new mohu.messages.Dispatcher(this);
	this.onHelpChanged = new mohu.messages.Dispatcher(this);
	this.onContentViewChanged = new mohu.messages.Dispatcher(this);
	this.onButtonsChanged = new mohu.messages.Dispatcher(this);
	this.setTitle(title);
	this.setHelp(help);
	this.setContentView(contentView);
	this.setButtons(buttons);
	$s.pop();
}}
cms.mvcs.core.panel.model.PanelModel.__name__ = ["cms","mvcs","core","panel","model","PanelModel"];
cms.mvcs.core.panel.model.PanelModel.__super__ = mohu.mvcs.model.Model;
for(var k in mohu.mvcs.model.Model.prototype ) cms.mvcs.core.panel.model.PanelModel.prototype[k] = mohu.mvcs.model.Model.prototype[k];
cms.mvcs.core.panel.model.PanelModel.prototype.title = null;
cms.mvcs.core.panel.model.PanelModel.prototype.help = null;
cms.mvcs.core.panel.model.PanelModel.prototype.contentView = null;
cms.mvcs.core.panel.model.PanelModel.prototype.buttons = null;
cms.mvcs.core.panel.model.PanelModel.prototype.onTitleChanged = null;
cms.mvcs.core.panel.model.PanelModel.prototype.onHelpChanged = null;
cms.mvcs.core.panel.model.PanelModel.prototype.onContentViewChanged = null;
cms.mvcs.core.panel.model.PanelModel.prototype.onButtonsChanged = null;
cms.mvcs.core.panel.model.PanelModel.prototype.container = null;
cms.mvcs.core.panel.model.PanelModel.prototype.setTitle = function(value) {
	$s.push("cms.mvcs.core.panel.model.PanelModel::setTitle");
	var $spos = $s.length;
	if(this.title == value) {
		var $tmp = this.title;
		$s.pop();
		return $tmp;
	}
	this.title = value;
	this.onTitleChanged.dispatch();
	{
		var $tmp = this.title;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.core.panel.model.PanelModel.prototype.setHelp = function(value) {
	$s.push("cms.mvcs.core.panel.model.PanelModel::setHelp");
	var $spos = $s.length;
	if(this.help == value) {
		var $tmp = this.help;
		$s.pop();
		return $tmp;
	}
	this.help = value;
	this.onHelpChanged.dispatch();
	{
		var $tmp = this.help;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.core.panel.model.PanelModel.prototype.setContentView = function(value) {
	$s.push("cms.mvcs.core.panel.model.PanelModel::setContentView");
	var $spos = $s.length;
	if(this.contentView == value) {
		var $tmp = this.contentView;
		$s.pop();
		return $tmp;
	}
	this.contentView = value;
	this.onContentViewChanged.dispatch();
	{
		var $tmp = this.contentView;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.core.panel.model.PanelModel.prototype.setButtons = function(value) {
	$s.push("cms.mvcs.core.panel.model.PanelModel::setButtons");
	var $spos = $s.length;
	if(this.buttons == value) {
		var $tmp = this.buttons;
		$s.pop();
		return $tmp;
	}
	this.buttons = value;
	this.onButtonsChanged.dispatch();
	{
		var $tmp = this.buttons;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.core.panel.model.PanelModel.prototype.__class__ = cms.mvcs.core.panel.model.PanelModel;
cms.mvcs.core.api.model.vo.ReferenceVO = function(table,id) { if( table === $_ ) return; {
	$s.push("cms.mvcs.core.api.model.vo.ReferenceVO::new");
	var $spos = $s.length;
	if(id == null) id = 0;
	this.table = table;
	this.id = id;
	$s.pop();
}}
cms.mvcs.core.api.model.vo.ReferenceVO.__name__ = ["cms","mvcs","core","api","model","vo","ReferenceVO"];
cms.mvcs.core.api.model.vo.ReferenceVO.prototype.table = null;
cms.mvcs.core.api.model.vo.ReferenceVO.prototype.id = null;
cms.mvcs.core.api.model.vo.ReferenceVO.prototype.__class__ = cms.mvcs.core.api.model.vo.ReferenceVO;
cms.mvcs.core.api.services.structure.RetrieveTypesService = function(p) { if( p === $_ ) return; {
	$s.push("cms.mvcs.core.api.services.structure.RetrieveTypesService::new");
	var $spos = $s.length;
	cms.mvcs.core.api.services.APIService.call(this);
	$s.pop();
}}
cms.mvcs.core.api.services.structure.RetrieveTypesService.__name__ = ["cms","mvcs","core","api","services","structure","RetrieveTypesService"];
cms.mvcs.core.api.services.structure.RetrieveTypesService.__super__ = cms.mvcs.core.api.services.APIService;
for(var k in cms.mvcs.core.api.services.APIService.prototype ) cms.mvcs.core.api.services.structure.RetrieveTypesService.prototype[k] = cms.mvcs.core.api.services.APIService.prototype[k];
cms.mvcs.core.api.services.structure.RetrieveTypesService.prototype.types = null;
cms.mvcs.core.api.services.structure.RetrieveTypesService.prototype.rootType = null;
cms.mvcs.core.api.services.structure.RetrieveTypesService.prototype.retrieveTypes = function() {
	$s.push("cms.mvcs.core.api.services.structure.RetrieveTypesService::retrieveTypes");
	var $spos = $s.length;
	cms.mvcs.core.api.services.APIService.prototype.api.call(this,"structure","GET");
	$s.pop();
}
cms.mvcs.core.api.services.structure.RetrieveTypesService.prototype._parseData = function(data) {
	$s.push("cms.mvcs.core.api.services.structure.RetrieveTypesService::_parseData");
	var $spos = $s.length;
	cms.mvcs.core.api.services.APIService.prototype._parseData.call(this,data);
	var typesArray = this.response;
	this.types = new core.Hash();
	{
		var _g = 0;
		while(_g < typesArray.length) {
			var type = typesArray[_g];
			++_g;
			this.types.set(type.name,type);
		}
	}
	this.rootType = typesArray[0];
	$s.pop();
}
cms.mvcs.core.api.services.structure.RetrieveTypesService.prototype.__class__ = cms.mvcs.core.api.services.structure.RetrieveTypesService;
cms.mvcs.core.api.services.structure.RetrieveTypesService.__interfaces__ = [cms.mvcs.core.api.services.structure.IRetrieveTypesService];
cms.mvcs.core.api.model.vo.ListVO = function(table,items) { if( table === $_ ) return; {
	$s.push("cms.mvcs.core.api.model.vo.ListVO::new");
	var $spos = $s.length;
	this.table = table;
	this.items = items != null?items:new core.Array();
	$s.pop();
}}
cms.mvcs.core.api.model.vo.ListVO.__name__ = ["cms","mvcs","core","api","model","vo","ListVO"];
cms.mvcs.core.api.model.vo.ListVO.prototype.table = null;
cms.mvcs.core.api.model.vo.ListVO.prototype.items = null;
cms.mvcs.core.api.model.vo.ListVO.prototype.__class__ = cms.mvcs.core.api.model.vo.ListVO;
haxe.rtti.Meta = function() { }
haxe.rtti.Meta.__name__ = ["haxe","rtti","Meta"];
haxe.rtti.Meta.getType = function(t) {
	$s.push("haxe.rtti.Meta::getType");
	var $spos = $s.length;
	var meta = t.__meta__;
	{
		var $tmp = meta == null?meta:meta.obj;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.rtti.Meta.getStatics = function(t) {
	$s.push("haxe.rtti.Meta::getStatics");
	var $spos = $s.length;
	var meta = t.__meta__;
	{
		var $tmp = meta == null?meta:meta.statics;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.rtti.Meta.getFields = function(t) {
	$s.push("haxe.rtti.Meta::getFields");
	var $spos = $s.length;
	var meta = t.__meta__;
	{
		var $tmp = meta == null?meta:meta.fields;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.rtti.Meta.prototype.__class__ = haxe.rtti.Meta;
if(!cms.mvcs.modules.content.view.mediators) cms.mvcs.modules.content.view.mediators = {}
cms.mvcs.modules.content.view.mediators.ItemEditorMediator = function() { }
cms.mvcs.modules.content.view.mediators.ItemEditorMediator.__name__ = ["cms","mvcs","modules","content","view","mediators","ItemEditorMediator"];
cms.mvcs.modules.content.view.mediators.ItemEditorMediator.__super__ = cms.mvcs.view.mediators.CMSMediator;
for(var k in cms.mvcs.view.mediators.CMSMediator.prototype ) cms.mvcs.modules.content.view.mediators.ItemEditorMediator.prototype[k] = cms.mvcs.view.mediators.CMSMediator.prototype[k];
cms.mvcs.modules.content.view.mediators.ItemEditorMediator.prototype.itemEditorView = null;
cms.mvcs.modules.content.view.mediators.ItemEditorMediator.prototype.model = null;
cms.mvcs.modules.content.view.mediators.ItemEditorMediator.prototype.panel = null;
cms.mvcs.modules.content.view.mediators.ItemEditorMediator.prototype._updating = null;
cms.mvcs.modules.content.view.mediators.ItemEditorMediator.prototype.onRegister = function() {
	$s.push("cms.mvcs.modules.content.view.mediators.ItemEditorMediator::onRegister");
	var $spos = $s.length;
	cms.mvcs.view.mediators.CMSMediator.prototype.onRegister.call(this);
	this.itemEditorView.onItemSelected.addListener($closure(this,"_handleItemSelected"));
	this.itemEditorView.onItemAddClicked.addListener($closure(this,"_handleItemAddClicked"));
	this.itemEditorView.onItemRemoveClicked.addListener($closure(this,"_handleItemRemoveClicked"));
	$s.pop();
}
cms.mvcs.modules.content.view.mediators.ItemEditorMediator.prototype.onRemove = function() {
	$s.push("cms.mvcs.modules.content.view.mediators.ItemEditorMediator::onRemove");
	var $spos = $s.length;
	this.itemEditorView.onItemSelected.removeListener($closure(this,"_handleItemSelected"));
	this.itemEditorView.onItemAddClicked.removeListener($closure(this,"_handleItemAddClicked"));
	this.itemEditorView.onItemRemoveClicked.removeListener($closure(this,"_handleItemRemoveClicked"));
	this.itemEditorView.setFieldEditors(null);
	this.setPanel(null);
	this.setModel(null);
	cms.mvcs.view.mediators.CMSMediator.prototype.onRemove.call(this);
	$s.pop();
}
cms.mvcs.modules.content.view.mediators.ItemEditorMediator.prototype._handleItemSelected = function(message) {
	$s.push("cms.mvcs.modules.content.view.mediators.ItemEditorMediator::_handleItemSelected");
	var $spos = $s.length;
	var itemSelectedMessage = (function($this) {
		var $r;
		var $t = message;
		if(core.Std["is"]($t,cms.mvcs.modules.content.messages.ItemSelectedMessage)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this));
	var panelIndex = this.panel.container.getPanelIndex(this.panel);
	if(itemSelectedMessage.reference != null) {
		this.cmsHub.onAddItemEditorPanel.dispatch(new cms.mvcs.modules.content.messages.AddItemEditorPanelMessage(this.panel.container,itemSelectedMessage.reference.table,itemSelectedMessage.reference.id,panelIndex + 1));
	}
	else if(this.panel.container.getNumPanels() > panelIndex + 1) {
		this.cmsHub.onRemovePanel.dispatch(new cms.mvcs.core.panel.messages.PanelContainerMessage(this.panel.container,null,panelIndex + 1));
	}
	$s.pop();
}
cms.mvcs.modules.content.view.mediators.ItemEditorMediator.prototype._handleItemAddClicked = function(message) {
	$s.push("cms.mvcs.modules.content.view.mediators.ItemEditorMediator::_handleItemAddClicked");
	var $spos = $s.length;
	this.cmsHub.onAddReferenceCompleted.addListener($closure(this,"_handleItemAddCompleted"));
	this.cmsHub.onAddReferenceFailed.addListener($closure(this,"_handleItemAddFailed"));
	this.cmsHub.onAddReference.dispatch(message);
	$s.pop();
}
cms.mvcs.modules.content.view.mediators.ItemEditorMediator.prototype._handleItemAddCompleted = function(message) {
	$s.push("cms.mvcs.modules.content.view.mediators.ItemEditorMediator::_handleItemAddCompleted");
	var $spos = $s.length;
	this.cmsHub.onAddReferenceCompleted.removeListener($closure(this,"_handleItemAddCompleted"));
	this.cmsHub.onAddReferenceFailed.removeListener($closure(this,"_handleItemAddFailed"));
	$s.pop();
}
cms.mvcs.modules.content.view.mediators.ItemEditorMediator.prototype._handleItemAddFailed = function(message) {
	$s.push("cms.mvcs.modules.content.view.mediators.ItemEditorMediator::_handleItemAddFailed");
	var $spos = $s.length;
	this.cmsHub.onAddReferenceCompleted.removeListener($closure(this,"_handleItemAddCompleted"));
	this.cmsHub.onAddReferenceFailed.removeListener($closure(this,"_handleItemAddFailed"));
	$s.pop();
}
cms.mvcs.modules.content.view.mediators.ItemEditorMediator.prototype._handleItemRemoveClicked = function(message) {
	$s.push("cms.mvcs.modules.content.view.mediators.ItemEditorMediator::_handleItemRemoveClicked");
	var $spos = $s.length;
	this.cmsHub.onRemoveReferenceCompleted.removeListener($closure(this,"_handleItemRemoveCompleted"));
	this.cmsHub.onRemoveReferenceFailed.removeListener($closure(this,"_handleItemRemoveFailed"));
	this.cmsHub.onRemoveReference.dispatch(message);
	$s.pop();
}
cms.mvcs.modules.content.view.mediators.ItemEditorMediator.prototype._handleItemRemoveCompleted = function(message) {
	$s.push("cms.mvcs.modules.content.view.mediators.ItemEditorMediator::_handleItemRemoveCompleted");
	var $spos = $s.length;
	this.cmsHub.onRemoveReferenceCompleted.removeListener($closure(this,"_handleItemRemoveCompleted"));
	this.cmsHub.onRemoveReferenceFailed.removeListener($closure(this,"_handleItemRemoveFailed"));
	$s.pop();
}
cms.mvcs.modules.content.view.mediators.ItemEditorMediator.prototype._handleItemRemoveFailed = function(message) {
	$s.push("cms.mvcs.modules.content.view.mediators.ItemEditorMediator::_handleItemRemoveFailed");
	var $spos = $s.length;
	this.cmsHub.onRemoveReferenceCompleted.removeListener($closure(this,"_handleItemRemoveCompleted"));
	this.cmsHub.onRemoveReferenceFailed.removeListener($closure(this,"_handleItemRemoveFailed"));
	$s.pop();
}
cms.mvcs.modules.content.view.mediators.ItemEditorMediator.prototype.setModel = function(value) {
	$s.push("cms.mvcs.modules.content.view.mediators.ItemEditorMediator::setModel");
	var $spos = $s.length;
	if(this.model != null) {
		this.model.onValueUpdated.removeListener($closure(this,"_handleModelValueUpdated"));
	}
	this.model = value;
	if(this.model != null) {
		this.model.onValueUpdated.addListener($closure(this,"_handleModelValueUpdated"));
	}
	var fieldEditors = new core.Array();
	if(this.model.type.fields != null) {
		{
			var _g = 0, _g1 = this.model.type.fields;
			while(_g < _g1.length) {
				var field = _g1[_g];
				++_g;
				var fieldEditorClass = core.Type.resolveClass(field.cmsEditor);
				if(fieldEditorClass == null) throw "Field editor '" + field.cmsEditor + "' not found";
				var fieldEditor = this.injector.getClassInstance(fieldEditorClass);
				fieldEditor.setName(field.name);
				fieldEditor.setLabel(field.cmsLabel);
				fieldEditor.setDisabled(!field.cmsEditable);
				fieldEditor.setParameters(field.cmsParameters);
				if(core.Std["is"](fieldEditor,cms.mvcs.modules.content.view.components.form.IItemFieldEditor)) ((function($this) {
					var $r;
					var $t = fieldEditor;
					if(core.Std["is"]($t,cms.mvcs.modules.content.view.components.form.IItemFieldEditor)) $t;
					else throw "Class cast error";
					$r = $t;
					return $r;
				}(this))).datatype = field.datatype;
				fieldEditors.push(fieldEditor);
			}
		}
	}
	this.itemEditorView.setFieldEditors(fieldEditors);
	{
		var $tmp = this.model;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.mediators.ItemEditorMediator.prototype._handleModelValueUpdated = function(message) {
	$s.push("cms.mvcs.modules.content.view.mediators.ItemEditorMediator::_handleModelValueUpdated");
	var $spos = $s.length;
	if(this._updating) {
		$s.pop();
		return;
	}
	this.itemEditorView.setValue(this.model.value);
	$s.pop();
}
cms.mvcs.modules.content.view.mediators.ItemEditorMediator.prototype.setPanel = function(value) {
	$s.push("cms.mvcs.modules.content.view.mediators.ItemEditorMediator::setPanel");
	var $spos = $s.length;
	if(this.panel != null && this.panel.buttons != null) {
		this.panel.buttons.onResetClicked.removeListener($closure(this,"_handleResetClicked"));
		this.panel.buttons.onSubmitClicked.removeListener($closure(this,"_handleSubmitClicked"));
	}
	this.panel = value;
	if(this.panel != null && this.panel.buttons != null) {
		this.panel.buttons.onResetClicked.addListener($closure(this,"_handleResetClicked"));
		this.panel.buttons.onSubmitClicked.addListener($closure(this,"_handleSubmitClicked"));
	}
	{
		var $tmp = this.panel;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.view.mediators.ItemEditorMediator.prototype._handleResetClicked = function(message) {
	$s.push("cms.mvcs.modules.content.view.mediators.ItemEditorMediator::_handleResetClicked");
	var $spos = $s.length;
	this.itemEditorView.setValue(this.model.value);
	$s.pop();
}
cms.mvcs.modules.content.view.mediators.ItemEditorMediator.prototype._handleSubmitClicked = function(message) {
	$s.push("cms.mvcs.modules.content.view.mediators.ItemEditorMediator::_handleSubmitClicked");
	var $spos = $s.length;
	this.cmsHub.onUpdateItemFailed.addListener($closure(this,"_handleUpdateItemFailed"));
	this.cmsHub.onUpdateItemCompleted.addListener($closure(this,"_handleUpdateItemCompleted"));
	this.cmsHub.onUpdateItem.dispatch(new cms.mvcs.core.api.messages.content.UpdateItemMessage(new cms.mvcs.core.api.model.vo.ItemVO(this.model.type.name,this.model.id,this.model.alias,0,null,0,this.itemEditorView.value)),this.model);
	$s.pop();
}
cms.mvcs.modules.content.view.mediators.ItemEditorMediator.prototype._handleUpdateItemFailed = function(message) {
	$s.push("cms.mvcs.modules.content.view.mediators.ItemEditorMediator::_handleUpdateItemFailed");
	var $spos = $s.length;
	this.cmsHub.onUpdateItemFailed.removeListener($closure(this,"_handleUpdateItemFailed"));
	this.cmsHub.onUpdateItemCompleted.removeListener($closure(this,"_handleUpdateItemCompleted"));
	$s.pop();
}
cms.mvcs.modules.content.view.mediators.ItemEditorMediator.prototype._handleUpdateItemCompleted = function(message) {
	$s.push("cms.mvcs.modules.content.view.mediators.ItemEditorMediator::_handleUpdateItemCompleted");
	var $spos = $s.length;
	this.cmsHub.onUpdateItemFailed.removeListener($closure(this,"_handleUpdateItemFailed"));
	this.cmsHub.onUpdateItemCompleted.removeListener($closure(this,"_handleUpdateItemCompleted"));
	this._updating = true;
	var updateItemMessage = (function($this) {
		var $r;
		var $t = message;
		if(core.Std["is"]($t,cms.mvcs.core.api.messages.content.UpdateItemMessage)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this));
	this.model.setAlias(updateItemMessage.item.alias);
	this.model.setValue(updateItemMessage.item.value);
	this._updating = false;
	$s.pop();
}
cms.mvcs.modules.content.view.mediators.ItemEditorMediator.prototype.__class__ = cms.mvcs.modules.content.view.mediators.ItemEditorMediator;
cms.mvcs.messages.ErrorMessage = function(message) { if( message === $_ ) return; {
	$s.push("cms.mvcs.messages.ErrorMessage::new");
	var $spos = $s.length;
	mohu.messages.Message.call(this);
	this.message = message;
	$s.pop();
}}
cms.mvcs.messages.ErrorMessage.__name__ = ["cms","mvcs","messages","ErrorMessage"];
cms.mvcs.messages.ErrorMessage.__super__ = mohu.messages.Message;
for(var k in mohu.messages.Message.prototype ) cms.mvcs.messages.ErrorMessage.prototype[k] = mohu.messages.Message.prototype[k];
cms.mvcs.messages.ErrorMessage.prototype.message = null;
cms.mvcs.messages.ErrorMessage.prototype.clone = function() {
	$s.push("cms.mvcs.messages.ErrorMessage::clone");
	var $spos = $s.length;
	{
		var $tmp = new cms.mvcs.messages.ErrorMessage(this.message);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.messages.ErrorMessage.prototype.__class__ = cms.mvcs.messages.ErrorMessage;
cms.mvcs.core.popup.controller.ShowPopupCommand = function() { }
cms.mvcs.core.popup.controller.ShowPopupCommand.__name__ = ["cms","mvcs","core","popup","controller","ShowPopupCommand"];
cms.mvcs.core.popup.controller.ShowPopupCommand.__super__ = cms.mvcs.controller.CMSCommand;
for(var k in cms.mvcs.controller.CMSCommand.prototype ) cms.mvcs.core.popup.controller.ShowPopupCommand.prototype[k] = cms.mvcs.controller.CMSCommand.prototype[k];
cms.mvcs.core.popup.controller.ShowPopupCommand.prototype.popupMessage = null;
cms.mvcs.core.popup.controller.ShowPopupCommand.prototype.popupContainer = null;
cms.mvcs.core.popup.controller.ShowPopupCommand.prototype.execute = function() {
	$s.push("cms.mvcs.core.popup.controller.ShowPopupCommand::execute");
	var $spos = $s.length;
	this.popupContainer.showPopup(this.popupMessage.popup,this.popupMessage.prioritise);
	$s.pop();
}
cms.mvcs.core.popup.controller.ShowPopupCommand.prototype.__class__ = cms.mvcs.core.popup.controller.ShowPopupCommand;
if(!mohu.net) mohu.net = {}
mohu.net.HttpRequest = function(url) { if( url === $_ ) return; {
	$s.push("mohu.net.HttpRequest::new");
	var $spos = $s.length;
	this.url = url;
	this.headers = new core.Hash();
	this.params = new core.Hash();
	this.async = true;
	$s.pop();
}}
mohu.net.HttpRequest.__name__ = ["mohu","net","HttpRequest"];
mohu.net.HttpRequest.requestUrl = function(url) {
	$s.push("mohu.net.HttpRequest::requestUrl");
	var $spos = $s.length;
	var h = new mohu.net.HttpRequest(url);
	h.async = false;
	var r = null;
	h.onData = function(d) {
		$s.push("mohu.net.HttpRequest::requestUrl@638");
		var $spos = $s.length;
		r = d;
		$s.pop();
	}
	h.onError = function(e) {
		$s.push("mohu.net.HttpRequest::requestUrl@641");
		var $spos = $s.length;
		throw e;
		$s.pop();
	}
	h.request("GET");
	{
		$s.pop();
		return r;
	}
	$s.pop();
}
mohu.net.HttpRequest.prototype.url = null;
mohu.net.HttpRequest.prototype.async = null;
mohu.net.HttpRequest.prototype.postData = null;
mohu.net.HttpRequest.prototype.headers = null;
mohu.net.HttpRequest.prototype.params = null;
mohu.net.HttpRequest.prototype.setHeader = function(header,value) {
	$s.push("mohu.net.HttpRequest::setHeader");
	var $spos = $s.length;
	this.headers.set(header,value);
	$s.pop();
}
mohu.net.HttpRequest.prototype.setParameter = function(param,value) {
	$s.push("mohu.net.HttpRequest::setParameter");
	var $spos = $s.length;
	this.params.set(param,value);
	$s.pop();
}
mohu.net.HttpRequest.prototype.setPostData = function(data) {
	$s.push("mohu.net.HttpRequest::setPostData");
	var $spos = $s.length;
	this.postData = data;
	$s.pop();
}
mohu.net.HttpRequest.prototype.request = function(method) {
	$s.push("mohu.net.HttpRequest::request");
	var $spos = $s.length;
	var me = this;
	if(method == null || method == "") method = "GET";
	var post = method != "GET";
	var r = new js.XMLHttpRequest();
	var onreadystatechange = function() {
		$s.push("mohu.net.HttpRequest::request@110");
		var $spos = $s.length;
		if(r.readyState != 4) {
			$s.pop();
			return;
		}
		var s = (function($this) {
			var $r;
			try {
				$r = r.status;
			}
			catch( $e0 ) {
				{
					var e = $e0;
					$r = (function($this) {
						var $r;
						$e = [];
						while($s.length >= $spos) $e.unshift($s.pop());
						$s.push($e[0]);
						$r = null;
						return $r;
					}($this));
				}
			}
			return $r;
		}(this));
		if(s == undefined) s = null;
		if(s != null) me.onStatus(s);
		if(s != null && s >= 200 && s < 400) me.onData(r.responseText);
		else switch(s) {
		case null: case undefined:{
			me.onError("Failed to connect or resolve host");
		}break;
		case 12029:{
			me.onError("Failed to connect to host");
		}break;
		case 12007:{
			me.onError("Unknown host");
		}break;
		default:{
			me.onError("Http Error #" + r.status);
		}break;
		}
		$s.pop();
	}
	if(this.async) r.onreadystatechange = onreadystatechange;
	var uri = this.postData;
	if(uri != null) {
		if(method == "GET") method = "POST";
		post = true;
	}
	else { var $it1 = this.params.keys();
	while( $it1.hasNext() ) { var p = $it1.next();
	{
		if(uri == null) uri = "";
		else uri += "&";
		uri += core.StringTools.urlDecode(p) + "=" + core.StringTools.urlEncode(this.params.get(p));
	}
	}}
	try {
		if(!post && uri != null) {
			var question = this.url.split("?").length <= 1;
			r.open(method,this.url + (question?"?":"&") + uri,this.async);
			uri = null;
		}
		else r.open(method,this.url,this.async);
	}
	catch( $e2 ) {
		{
			var e = $e2;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				this.onError(e.toString());
				{
					$s.pop();
					return;
				}
			}
		}
	}
	if(this.headers.get("Content-Type") == null && post && this.postData == null) r.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	{ var $it3 = this.headers.keys();
	while( $it3.hasNext() ) { var h = $it3.next();
	r.setRequestHeader(h,this.headers.get(h));
	}}
	r.send(uri);
	if(!this.async) onreadystatechange();
	$s.pop();
}
mohu.net.HttpRequest.prototype.onData = function(data) {
	$s.push("mohu.net.HttpRequest::onData");
	var $spos = $s.length;
	null;
	$s.pop();
}
mohu.net.HttpRequest.prototype.onError = function(msg) {
	$s.push("mohu.net.HttpRequest::onError");
	var $spos = $s.length;
	null;
	$s.pop();
}
mohu.net.HttpRequest.prototype.onStatus = function(status) {
	$s.push("mohu.net.HttpRequest::onStatus");
	var $spos = $s.length;
	null;
	$s.pop();
}
mohu.net.HttpRequest.prototype.__class__ = mohu.net.HttpRequest;
cms.mvcs.core.api.model.vo.SmartlistVO = function(table,filter,sort,descending,offset,limit,autoload,items) { if( table === $_ ) return; {
	$s.push("cms.mvcs.core.api.model.vo.SmartlistVO::new");
	var $spos = $s.length;
	if(autoload == null) autoload = true;
	if(limit == null) limit = 0;
	if(offset == null) offset = 0;
	if(descending == null) descending = false;
	this.table = table;
	this.filter = filter;
	this.sort = sort;
	this.descending = descending;
	this.offset = offset;
	this.limit = limit;
	this.autoload = autoload;
	this.items = items != null?items:new core.Array();
	$s.pop();
}}
cms.mvcs.core.api.model.vo.SmartlistVO.__name__ = ["cms","mvcs","core","api","model","vo","SmartlistVO"];
cms.mvcs.core.api.model.vo.SmartlistVO.prototype.table = null;
cms.mvcs.core.api.model.vo.SmartlistVO.prototype.filter = null;
cms.mvcs.core.api.model.vo.SmartlistVO.prototype.sort = null;
cms.mvcs.core.api.model.vo.SmartlistVO.prototype.descending = null;
cms.mvcs.core.api.model.vo.SmartlistVO.prototype.offset = null;
cms.mvcs.core.api.model.vo.SmartlistVO.prototype.limit = null;
cms.mvcs.core.api.model.vo.SmartlistVO.prototype.autoload = null;
cms.mvcs.core.api.model.vo.SmartlistVO.prototype.items = null;
cms.mvcs.core.api.model.vo.SmartlistVO.prototype.__class__ = cms.mvcs.core.api.model.vo.SmartlistVO;
if(!haxe.io) haxe.io = {}
haxe.io.Error = { __ename__ : ["haxe","io","Error"], __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] }
haxe.io.Error.Blocked = ["Blocked",0];
haxe.io.Error.Blocked.toString = $estr;
haxe.io.Error.Blocked.__enum__ = haxe.io.Error;
haxe.io.Error.Overflow = ["Overflow",1];
haxe.io.Error.Overflow.toString = $estr;
haxe.io.Error.Overflow.__enum__ = haxe.io.Error;
haxe.io.Error.OutsideBounds = ["OutsideBounds",2];
haxe.io.Error.OutsideBounds.toString = $estr;
haxe.io.Error.OutsideBounds.__enum__ = haxe.io.Error;
haxe.io.Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe.io.Error; $x.toString = $estr; return $x; }
if(!cms.mvcs.core.panel.messages) cms.mvcs.core.panel.messages = {}
cms.mvcs.core.panel.messages.PanelContainerMessage = function(panelContainerModel,panelModel,oldIndex,newIndex) { if( panelContainerModel === $_ ) return; {
	$s.push("cms.mvcs.core.panel.messages.PanelContainerMessage::new");
	var $spos = $s.length;
	if(newIndex == null) newIndex = -1;
	if(oldIndex == null) oldIndex = -1;
	mohu.messages.Message.call(this);
	this.panelContainerModel = panelContainerModel;
	this.panelModel = panelModel;
	this.oldIndex = oldIndex;
	this.newIndex = newIndex;
	$s.pop();
}}
cms.mvcs.core.panel.messages.PanelContainerMessage.__name__ = ["cms","mvcs","core","panel","messages","PanelContainerMessage"];
cms.mvcs.core.panel.messages.PanelContainerMessage.__super__ = mohu.messages.Message;
for(var k in mohu.messages.Message.prototype ) cms.mvcs.core.panel.messages.PanelContainerMessage.prototype[k] = mohu.messages.Message.prototype[k];
cms.mvcs.core.panel.messages.PanelContainerMessage.prototype.panelModel = null;
cms.mvcs.core.panel.messages.PanelContainerMessage.prototype.panelContainerModel = null;
cms.mvcs.core.panel.messages.PanelContainerMessage.prototype.oldIndex = null;
cms.mvcs.core.panel.messages.PanelContainerMessage.prototype.newIndex = null;
cms.mvcs.core.panel.messages.PanelContainerMessage.prototype.clone = function() {
	$s.push("cms.mvcs.core.panel.messages.PanelContainerMessage::clone");
	var $spos = $s.length;
	{
		var $tmp = new cms.mvcs.core.panel.messages.PanelContainerMessage(this.panelContainerModel,this.panelModel,this.oldIndex,this.newIndex);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.core.panel.messages.PanelContainerMessage.prototype.__class__ = cms.mvcs.core.panel.messages.PanelContainerMessage;
cms.mvcs.modules.content.messages.AddReferenceMessage = function(editor,listIndex,item) { if( editor === $_ ) return; {
	$s.push("cms.mvcs.modules.content.messages.AddReferenceMessage::new");
	var $spos = $s.length;
	if(listIndex == null) listIndex = 0;
	mohu.messages.Message.call(this);
	this.editor = editor;
	this.listIndex = listIndex;
	this.item = item;
	$s.pop();
}}
cms.mvcs.modules.content.messages.AddReferenceMessage.__name__ = ["cms","mvcs","modules","content","messages","AddReferenceMessage"];
cms.mvcs.modules.content.messages.AddReferenceMessage.__super__ = mohu.messages.Message;
for(var k in mohu.messages.Message.prototype ) cms.mvcs.modules.content.messages.AddReferenceMessage.prototype[k] = mohu.messages.Message.prototype[k];
cms.mvcs.modules.content.messages.AddReferenceMessage.prototype.editor = null;
cms.mvcs.modules.content.messages.AddReferenceMessage.prototype.listIndex = null;
cms.mvcs.modules.content.messages.AddReferenceMessage.prototype.item = null;
cms.mvcs.modules.content.messages.AddReferenceMessage.prototype.clone = function() {
	$s.push("cms.mvcs.modules.content.messages.AddReferenceMessage::clone");
	var $spos = $s.length;
	{
		var $tmp = new cms.mvcs.modules.content.messages.AddReferenceMessage(this.editor,this.listIndex,this.item);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.messages.AddReferenceMessage.prototype.__class__ = cms.mvcs.modules.content.messages.AddReferenceMessage;
if(!cms.mvcs.modules.content.model) cms.mvcs.modules.content.model = {}
cms.mvcs.modules.content.model.ItemEditorModel = function(type,id,alias,value) { if( type === $_ ) return; {
	$s.push("cms.mvcs.modules.content.model.ItemEditorModel::new");
	var $spos = $s.length;
	if(id == null) id = 0;
	cms.mvcs.core.panel.model.PanelContentModel.call(this);
	this.onTypeUpdated = new mohu.messages.Dispatcher(this);
	this.onIDUpdated = new mohu.messages.Dispatcher(this);
	this.onAliasUpdated = new mohu.messages.Dispatcher(this);
	this.onValueUpdated = new mohu.messages.Dispatcher(this);
	this.setType(type);
	this.setID(id);
	this.setAlias(alias);
	this.setValue(value);
	$s.pop();
}}
cms.mvcs.modules.content.model.ItemEditorModel.__name__ = ["cms","mvcs","modules","content","model","ItemEditorModel"];
cms.mvcs.modules.content.model.ItemEditorModel.__super__ = cms.mvcs.core.panel.model.PanelContentModel;
for(var k in cms.mvcs.core.panel.model.PanelContentModel.prototype ) cms.mvcs.modules.content.model.ItemEditorModel.prototype[k] = cms.mvcs.core.panel.model.PanelContentModel.prototype[k];
cms.mvcs.modules.content.model.ItemEditorModel.prototype.type = null;
cms.mvcs.modules.content.model.ItemEditorModel.prototype.id = null;
cms.mvcs.modules.content.model.ItemEditorModel.prototype.alias = null;
cms.mvcs.modules.content.model.ItemEditorModel.prototype.value = null;
cms.mvcs.modules.content.model.ItemEditorModel.prototype.onTypeUpdated = null;
cms.mvcs.modules.content.model.ItemEditorModel.prototype.onIDUpdated = null;
cms.mvcs.modules.content.model.ItemEditorModel.prototype.onAliasUpdated = null;
cms.mvcs.modules.content.model.ItemEditorModel.prototype.onValueUpdated = null;
cms.mvcs.modules.content.model.ItemEditorModel.prototype.setType = function(value) {
	$s.push("cms.mvcs.modules.content.model.ItemEditorModel::setType");
	var $spos = $s.length;
	if(this.type == value) {
		var $tmp = this.type;
		$s.pop();
		return $tmp;
	}
	this.type = value;
	this.onTypeUpdated.dispatch();
	{
		var $tmp = this.type;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.model.ItemEditorModel.prototype.setID = function(value) {
	$s.push("cms.mvcs.modules.content.model.ItemEditorModel::setID");
	var $spos = $s.length;
	if(this.id == value) {
		var $tmp = this.id;
		$s.pop();
		return $tmp;
	}
	this.id = value;
	this.onIDUpdated.dispatch();
	{
		var $tmp = this.id;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.model.ItemEditorModel.prototype.setAlias = function(value) {
	$s.push("cms.mvcs.modules.content.model.ItemEditorModel::setAlias");
	var $spos = $s.length;
	if(this.alias == value) {
		$s.pop();
		return value;
	}
	this.alias = value;
	this.onAliasUpdated.dispatch();
	{
		var $tmp = this.alias;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.model.ItemEditorModel.prototype.setValue = function(value) {
	$s.push("cms.mvcs.modules.content.model.ItemEditorModel::setValue");
	var $spos = $s.length;
	this.value = value;
	this.onValueUpdated.dispatch();
	{
		var $tmp = this.value;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
cms.mvcs.modules.content.model.ItemEditorModel.prototype.__class__ = cms.mvcs.modules.content.model.ItemEditorModel;
cms.mvcs.core.api.model.vo.UserVO = function(id,username,password,admin) { if( id === $_ ) return; {
	$s.push("cms.mvcs.core.api.model.vo.UserVO::new");
	var $spos = $s.length;
	if(admin == null) admin = false;
	if(username == null) username = "anonymous";
	if(id == null) id = 0;
	this.id = id;
	this.username = username;
	this.password = password;
	this.admin = admin;
	$s.pop();
}}
cms.mvcs.core.api.model.vo.UserVO.__name__ = ["cms","mvcs","core","api","model","vo","UserVO"];
cms.mvcs.core.api.model.vo.UserVO.prototype.id = null;
cms.mvcs.core.api.model.vo.UserVO.prototype.username = null;
cms.mvcs.core.api.model.vo.UserVO.prototype.password = null;
cms.mvcs.core.api.model.vo.UserVO.prototype.admin = null;
cms.mvcs.core.api.model.vo.UserVO.prototype.__class__ = cms.mvcs.core.api.model.vo.UserVO;
cms.mvcs.controller.ErrorCommand = function() { }
cms.mvcs.controller.ErrorCommand.__name__ = ["cms","mvcs","controller","ErrorCommand"];
cms.mvcs.controller.ErrorCommand.__super__ = cms.mvcs.controller.CMSCommand;
for(var k in cms.mvcs.controller.CMSCommand.prototype ) cms.mvcs.controller.ErrorCommand.prototype[k] = cms.mvcs.controller.CMSCommand.prototype[k];
cms.mvcs.controller.ErrorCommand.prototype.errorMessage = null;
cms.mvcs.controller.ErrorCommand.prototype.execute = function() {
	$s.push("cms.mvcs.controller.ErrorCommand::execute");
	var $spos = $s.length;
	var stack = haxe.Stack.exceptionStack().slice(0);
	stack.reverse();
	var error = this.errorMessage.message + "\n" + " at " + stack.join("\n at ");
	js.Lib.alert(error);
	$s.pop();
}
cms.mvcs.controller.ErrorCommand.prototype.__class__ = cms.mvcs.controller.ErrorCommand;
core.EReg = function(r,opt) { if( r === $_ ) return; {
	$s.push("EReg::new");
	var $spos = $s.length;
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
	$s.pop();
}}
core.EReg.__name__ = ["EReg"];
core.EReg.prototype.r = null;
core.EReg.prototype.match = function(s) {
	$s.push("EReg::match");
	var $spos = $s.length;
	this.r.m = this.r.exec(s);
	this.r.s = s;
	this.r.l = RegExp.leftContext;
	this.r.r = RegExp.rightContext;
	{
		var $tmp = this.r.m != null;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.EReg.prototype.matched = function(n) {
	$s.push("EReg::matched");
	var $spos = $s.length;
	{
		var $tmp = this.r.m != null && n >= 0 && n < this.r.m.length?this.r.m[n]:(function($this) {
			var $r;
			throw "EReg::matched";
			return $r;
		}(this));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.EReg.prototype.matchedLeft = function() {
	$s.push("EReg::matchedLeft");
	var $spos = $s.length;
	if(this.r.m == null) throw "No string matched";
	if(this.r.l == null) {
		var $tmp = this.r.s.substr(0,this.r.m.index);
		$s.pop();
		return $tmp;
	}
	{
		var $tmp = this.r.l;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.EReg.prototype.matchedRight = function() {
	$s.push("EReg::matchedRight");
	var $spos = $s.length;
	if(this.r.m == null) throw "No string matched";
	if(this.r.r == null) {
		var sz = this.r.m.index + this.r.m[0].length;
		{
			var $tmp = this.r.s.substr(sz,this.r.s.length - sz);
			$s.pop();
			return $tmp;
		}
	}
	{
		var $tmp = this.r.r;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.EReg.prototype.matchedPos = function() {
	$s.push("EReg::matchedPos");
	var $spos = $s.length;
	if(this.r.m == null) throw "No string matched";
	{
		var $tmp = { pos : this.r.m.index, len : this.r.m[0].length};
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.EReg.prototype.split = function(s) {
	$s.push("EReg::split");
	var $spos = $s.length;
	var d = "#__delim__#";
	{
		var $tmp = s.replace(this.r,d).split(d);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.EReg.prototype.replace = function(s,by) {
	$s.push("EReg::replace");
	var $spos = $s.length;
	{
		var $tmp = s.replace(this.r,by);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.EReg.prototype.customReplace = function(s,f) {
	$s.push("EReg::customReplace");
	var $spos = $s.length;
	var buf = new core.StringBuf();
	while(true) {
		if(!this.match(s)) break;
		buf.b[buf.b.length] = this.matchedLeft();
		buf.b[buf.b.length] = f(this);
		s = this.matchedRight();
	}
	buf.b[buf.b.length] = s;
	{
		var $tmp = buf.b.join("");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.EReg.prototype.__class__ = core.EReg;
core.Xml = function(p) { if( p === $_ ) return; {
	$s.push("Xml::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
core.Xml.__name__ = ["Xml"];
core.Xml.Element = null;
core.Xml.PCData = null;
core.Xml.CData = null;
core.Xml.Comment = null;
core.Xml.DocType = null;
core.Xml.Prolog = null;
core.Xml.Document = null;
core.Xml.parse = function(str) {
	$s.push("Xml::parse");
	var $spos = $s.length;
	var rules = [core.Xml.enode,core.Xml.epcdata,core.Xml.eend,core.Xml.ecdata,core.Xml.edoctype,core.Xml.ecomment,core.Xml.eprolog];
	var nrules = rules.length;
	var current = core.Xml.createDocument();
	var stack = new core.List();
	while(str.length > 0) {
		var i = 0;
		try {
			while(i < nrules) {
				var r = rules[i];
				if(r.match(str)) {
					switch(i) {
					case 0:{
						var x = core.Xml.createElement(r.matched(1));
						current.addChild(x);
						str = r.matchedRight();
						while(core.Xml.eattribute.match(str)) {
							x.set(core.Xml.eattribute.matched(1),core.Xml.eattribute.matched(3));
							str = core.Xml.eattribute.matchedRight();
						}
						if(!core.Xml.eclose.match(str)) {
							i = nrules;
							throw "__break__";
						}
						if(core.Xml.eclose.matched(1) == ">") {
							stack.push(current);
							current = x;
						}
						str = core.Xml.eclose.matchedRight();
					}break;
					case 1:{
						var x = core.Xml.createPCData(r.matched(0));
						current.addChild(x);
						str = r.matchedRight();
					}break;
					case 2:{
						if(current._children != null && current._children.length == 0) {
							var e = core.Xml.createPCData("");
							current.addChild(e);
						}
						else null;
						if(r.matched(1) != current._nodeName || stack.isEmpty()) {
							i = nrules;
							throw "__break__";
						}
						else null;
						current = stack.pop();
						str = r.matchedRight();
					}break;
					case 3:{
						str = r.matchedRight();
						if(!core.Xml.ecdata_end.match(str)) throw "End of CDATA section not found";
						var x = core.Xml.createCData(core.Xml.ecdata_end.matchedLeft());
						current.addChild(x);
						str = core.Xml.ecdata_end.matchedRight();
					}break;
					case 4:{
						var pos = 0;
						var count = 0;
						var old = str;
						try {
							while(true) {
								if(!core.Xml.edoctype_elt.match(str)) throw "End of DOCTYPE section not found";
								var p = core.Xml.edoctype_elt.matchedPos();
								pos += p.pos + p.len;
								str = core.Xml.edoctype_elt.matchedRight();
								switch(core.Xml.edoctype_elt.matched(0)) {
								case "[":{
									count++;
								}break;
								case "]":{
									count--;
									if(count < 0) throw "Invalid ] found in DOCTYPE declaration";
								}break;
								default:{
									if(count == 0) throw "__break__";
								}break;
								}
							}
						} catch( e ) { if( e != "__break__" ) throw e; }
						var x = core.Xml.createDocType(old.substr(10,pos - 11));
						current.addChild(x);
					}break;
					case 5:{
						if(!core.Xml.ecomment_end.match(str)) throw "Unclosed Comment";
						var p = core.Xml.ecomment_end.matchedPos();
						var x = core.Xml.createComment(str.substr(4,p.pos + p.len - 7));
						current.addChild(x);
						str = core.Xml.ecomment_end.matchedRight();
					}break;
					case 6:{
						var prolog = r.matched(0);
						var x = core.Xml.createProlog(prolog.substr(2,prolog.length - 4));
						current.addChild(x);
						str = r.matchedRight();
					}break;
					}
					throw "__break__";
				}
				i += 1;
			}
		} catch( e ) { if( e != "__break__" ) throw e; }
		if(i == nrules) {
			if(str.length > 10) throw "Xml parse error : Unexpected " + str.substr(0,10) + "...";
			else throw "Xml parse error : Unexpected " + str;
		}
	}
	if(!stack.isEmpty()) throw "Xml parse error : Unclosed " + stack.last().getNodeName();
	{
		$s.pop();
		return current;
	}
	$s.pop();
}
core.Xml.createElement = function(name) {
	$s.push("Xml::createElement");
	var $spos = $s.length;
	var r = new core.Xml();
	r.nodeType = core.Xml.Element;
	r._children = new core.Array();
	r._attributes = new core.Hash();
	r.setNodeName(name);
	{
		$s.pop();
		return r;
	}
	$s.pop();
}
core.Xml.createPCData = function(data) {
	$s.push("Xml::createPCData");
	var $spos = $s.length;
	var r = new core.Xml();
	r.nodeType = core.Xml.PCData;
	r.setNodeValue(data);
	{
		$s.pop();
		return r;
	}
	$s.pop();
}
core.Xml.createCData = function(data) {
	$s.push("Xml::createCData");
	var $spos = $s.length;
	var r = new core.Xml();
	r.nodeType = core.Xml.CData;
	r.setNodeValue(data);
	{
		$s.pop();
		return r;
	}
	$s.pop();
}
core.Xml.createComment = function(data) {
	$s.push("Xml::createComment");
	var $spos = $s.length;
	var r = new core.Xml();
	r.nodeType = core.Xml.Comment;
	r.setNodeValue(data);
	{
		$s.pop();
		return r;
	}
	$s.pop();
}
core.Xml.createDocType = function(data) {
	$s.push("Xml::createDocType");
	var $spos = $s.length;
	var r = new core.Xml();
	r.nodeType = core.Xml.DocType;
	r.setNodeValue(data);
	{
		$s.pop();
		return r;
	}
	$s.pop();
}
core.Xml.createProlog = function(data) {
	$s.push("Xml::createProlog");
	var $spos = $s.length;
	var r = new core.Xml();
	r.nodeType = core.Xml.Prolog;
	r.setNodeValue(data);
	{
		$s.pop();
		return r;
	}
	$s.pop();
}
core.Xml.createDocument = function() {
	$s.push("Xml::createDocument");
	var $spos = $s.length;
	var r = new core.Xml();
	r.nodeType = core.Xml.Document;
	r._children = new core.Array();
	{
		$s.pop();
		return r;
	}
	$s.pop();
}
core.Xml.prototype.nodeType = null;
core.Xml.prototype.nodeName = null;
core.Xml.prototype.nodeValue = null;
core.Xml.prototype.parent = null;
core.Xml.prototype._nodeName = null;
core.Xml.prototype._nodeValue = null;
core.Xml.prototype._attributes = null;
core.Xml.prototype._children = null;
core.Xml.prototype._parent = null;
core.Xml.prototype.getNodeName = function() {
	$s.push("Xml::getNodeName");
	var $spos = $s.length;
	if(this.nodeType != core.Xml.Element) throw "bad nodeType";
	{
		var $tmp = this._nodeName;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Xml.prototype.setNodeName = function(n) {
	$s.push("Xml::setNodeName");
	var $spos = $s.length;
	if(this.nodeType != core.Xml.Element) throw "bad nodeType";
	{
		var $tmp = this._nodeName = n;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Xml.prototype.getNodeValue = function() {
	$s.push("Xml::getNodeValue");
	var $spos = $s.length;
	if(this.nodeType == core.Xml.Element || this.nodeType == core.Xml.Document) throw "bad nodeType";
	{
		var $tmp = this._nodeValue;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Xml.prototype.setNodeValue = function(v) {
	$s.push("Xml::setNodeValue");
	var $spos = $s.length;
	if(this.nodeType == core.Xml.Element || this.nodeType == core.Xml.Document) throw "bad nodeType";
	{
		var $tmp = this._nodeValue = v;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Xml.prototype.getParent = function() {
	$s.push("Xml::getParent");
	var $spos = $s.length;
	{
		var $tmp = this._parent;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Xml.prototype.get = function(att) {
	$s.push("Xml::get");
	var $spos = $s.length;
	if(this.nodeType != core.Xml.Element) throw "bad nodeType";
	{
		var $tmp = this._attributes.get(att);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Xml.prototype.set = function(att,value) {
	$s.push("Xml::set");
	var $spos = $s.length;
	if(this.nodeType != core.Xml.Element) throw "bad nodeType";
	this._attributes.set(att,value);
	$s.pop();
}
core.Xml.prototype.remove = function(att) {
	$s.push("Xml::remove");
	var $spos = $s.length;
	if(this.nodeType != core.Xml.Element) throw "bad nodeType";
	this._attributes.remove(att);
	$s.pop();
}
core.Xml.prototype.exists = function(att) {
	$s.push("Xml::exists");
	var $spos = $s.length;
	if(this.nodeType != core.Xml.Element) throw "bad nodeType";
	{
		var $tmp = this._attributes.exists(att);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Xml.prototype.attributes = function() {
	$s.push("Xml::attributes");
	var $spos = $s.length;
	if(this.nodeType != core.Xml.Element) throw "bad nodeType";
	{
		var $tmp = this._attributes.keys();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Xml.prototype.iterator = function() {
	$s.push("Xml::iterator");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	{
		var $tmp = { cur : 0, x : this._children, hasNext : function() {
			$s.push("Xml::iterator@281");
			var $spos = $s.length;
			{
				var $tmp = this.cur < this.x.length;
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}, next : function() {
			$s.push("Xml::iterator@284");
			var $spos = $s.length;
			{
				var $tmp = this.x[this.cur++];
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}};
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Xml.prototype.elements = function() {
	$s.push("Xml::elements");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	{
		var $tmp = { cur : 0, x : this._children, hasNext : function() {
			$s.push("Xml::elements@295");
			var $spos = $s.length;
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				if(this.x[k].nodeType == core.Xml.Element) break;
				k += 1;
			}
			this.cur = k;
			{
				var $tmp = k < l;
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}, next : function() {
			$s.push("Xml::elements@306");
			var $spos = $s.length;
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				var n = this.x[k];
				k += 1;
				if(n.nodeType == core.Xml.Element) {
					this.cur = k;
					{
						$s.pop();
						return n;
					}
				}
			}
			{
				$s.pop();
				return null;
			}
			$s.pop();
		}};
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Xml.prototype.elementsNamed = function(name) {
	$s.push("Xml::elementsNamed");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	{
		var $tmp = { cur : 0, x : this._children, hasNext : function() {
			$s.push("Xml::elementsNamed@327");
			var $spos = $s.length;
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				var n = this.x[k];
				if(n.nodeType == core.Xml.Element && n._nodeName == name) break;
				k++;
			}
			this.cur = k;
			{
				var $tmp = k < l;
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}, next : function() {
			$s.push("Xml::elementsNamed@339");
			var $spos = $s.length;
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				var n = this.x[k];
				k++;
				if(n.nodeType == core.Xml.Element && n._nodeName == name) {
					this.cur = k;
					{
						$s.pop();
						return n;
					}
				}
			}
			{
				$s.pop();
				return null;
			}
			$s.pop();
		}};
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Xml.prototype.firstChild = function() {
	$s.push("Xml::firstChild");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	{
		var $tmp = this._children[0];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Xml.prototype.firstElement = function() {
	$s.push("Xml::firstElement");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	var cur = 0;
	var l = this._children.length;
	while(cur < l) {
		var n = this._children[cur];
		if(n.nodeType == core.Xml.Element) {
			$s.pop();
			return n;
		}
		cur++;
	}
	{
		$s.pop();
		return null;
	}
	$s.pop();
}
core.Xml.prototype.addChild = function(x) {
	$s.push("Xml::addChild");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	if(x._parent != null) x._parent._children.remove(x);
	x._parent = this;
	this._children.push(x);
	$s.pop();
}
core.Xml.prototype.removeChild = function(x) {
	$s.push("Xml::removeChild");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	var b = this._children.remove(x);
	if(b) x._parent = null;
	{
		$s.pop();
		return b;
	}
	$s.pop();
}
core.Xml.prototype.insertChild = function(x,pos) {
	$s.push("Xml::insertChild");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	if(x._parent != null) x._parent._children.remove(x);
	x._parent = this;
	this._children.insert(pos,x);
	$s.pop();
}
core.Xml.prototype.toString = function() {
	$s.push("Xml::toString");
	var $spos = $s.length;
	if(this.nodeType == core.Xml.PCData) {
		var $tmp = this._nodeValue;
		$s.pop();
		return $tmp;
	}
	if(this.nodeType == core.Xml.CData) {
		var $tmp = "<![CDATA[" + this._nodeValue + "]]>";
		$s.pop();
		return $tmp;
	}
	if(this.nodeType == core.Xml.Comment) {
		var $tmp = "<!--" + this._nodeValue + "-->";
		$s.pop();
		return $tmp;
	}
	if(this.nodeType == core.Xml.DocType) {
		var $tmp = "<!DOCTYPE " + this._nodeValue + ">";
		$s.pop();
		return $tmp;
	}
	if(this.nodeType == core.Xml.Prolog) {
		var $tmp = "<?" + this._nodeValue + "?>";
		$s.pop();
		return $tmp;
	}
	var s = new core.StringBuf();
	if(this.nodeType == core.Xml.Element) {
		s.b[s.b.length] = "<";
		s.b[s.b.length] = this._nodeName;
		{ var $it0 = this._attributes.keys();
		while( $it0.hasNext() ) { var k = $it0.next();
		{
			s.b[s.b.length] = " ";
			s.b[s.b.length] = k;
			s.b[s.b.length] = "=\"";
			s.b[s.b.length] = this._attributes.get(k);
			s.b[s.b.length] = "\"";
		}
		}}
		if(this._children.length == 0) {
			s.b[s.b.length] = "/>";
			{
				var $tmp = s.b.join("");
				$s.pop();
				return $tmp;
			}
		}
		s.b[s.b.length] = ">";
	}
	{ var $it1 = this.iterator();
	while( $it1.hasNext() ) { var x = $it1.next();
	s.b[s.b.length] = x.toString();
	}}
	if(this.nodeType == core.Xml.Element) {
		s.b[s.b.length] = "</";
		s.b[s.b.length] = this._nodeName;
		s.b[s.b.length] = ">";
	}
	{
		var $tmp = s.b.join("");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
core.Xml.prototype.__class__ = core.Xml;
$_ = {}
js.Boot.__res = {}
js.Boot.__ns = 'core';
$s = [];
$e = [];
js.Boot.__init();
{
	js.Lib.document = document;
	js.Lib.window = window;
	onerror = function(msg,url,line) {
		var stack = $s.copy();
		var f = js.Lib.onerror;
		$s.splice(0,$s.length);
		if( f == null ) {
			var i = stack.length;
			var s = "";
			while( --i >= 0 )
				s += "Called from "+stack[i]+"\n";
			alert(msg+"\n\n"+s);
			return false;
		}
		return f(msg,stack);
	}
}
{
	var d = core.Date;
	d.now = function() {
		$s.push("Xml::toString");
		var $spos = $s.length;
		{
			var $tmp = new core.Date();
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	d.fromTime = function(t) {
		$s.push("Xml::toString");
		var $spos = $s.length;
		var d1 = new core.Date();
		d1["setTime"](t);
		{
			$s.pop();
			return d1;
		}
		$s.pop();
	}
	d.fromString = function(s) {
		$s.push("Xml::toString");
		var $spos = $s.length;
		switch(s.length) {
		case 8:{
			var k = s.split(":");
			var d1 = new core.Date();
			d1["setTime"](0);
			d1["setUTCHours"](k[0]);
			d1["setUTCMinutes"](k[1]);
			d1["setUTCSeconds"](k[2]);
			{
				$s.pop();
				return d1;
			}
		}break;
		case 10:{
			var k = s.split("-");
			{
				var $tmp = new core.Date(k[0],k[1] - 1,k[2],0,0,0);
				$s.pop();
				return $tmp;
			}
		}break;
		case 19:{
			var k = s.split(" ");
			var y = k[0].split("-");
			var t = k[1].split(":");
			{
				var $tmp = new core.Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
				$s.pop();
				return $tmp;
			}
		}break;
		default:{
			throw "Invalid date format : " + s;
		}break;
		}
		$s.pop();
	}
	d.prototype["toString"] = function() {
		$s.push("Xml::toString");
		var $spos = $s.length;
		var date = this;
		var m = date.getMonth() + 1;
		var d1 = date.getDate();
		var h = date.getHours();
		var mi = date.getMinutes();
		var s = date.getSeconds();
		{
			var $tmp = date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d1 < 10?"0" + d1:"" + d1) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	d.prototype.__class__ = d;
	d.__name__ = ["Date"];
}
{
	core.Math.__name__ = ["Math"];
	core.Math.NaN = Number["NaN"];
	core.Math.NEGATIVE_INFINITY = Number["NEGATIVE_INFINITY"];
	core.Math.POSITIVE_INFINITY = Number["POSITIVE_INFINITY"];
	core.Math.isFinite = function(i) {
		$s.push("Xml::toString");
		var $spos = $s.length;
		{
			var $tmp = isFinite(i);
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	core.Math.isNaN = function(i) {
		$s.push("Xml::toString");
		var $spos = $s.length;
		{
			var $tmp = isNaN(i);
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
}
{
	js["XMLHttpRequest"] = window.XMLHttpRequest?XMLHttpRequest:window.ActiveXObject?function() {
		$s.push("Xml::toString");
		var $spos = $s.length;
		try {
			{
				var $tmp = new ActiveXObject("Msxml2.XMLHTTP");
				$s.pop();
				return $tmp;
			}
		}
		catch( $e2 ) {
			{
				var e = $e2;
				{
					$e = [];
					while($s.length >= $spos) $e.unshift($s.pop());
					$s.push($e[0]);
					try {
						{
							var $tmp = new ActiveXObject("Microsoft.XMLHTTP");
							$s.pop();
							return $tmp;
						}
					}
					catch( $e3 ) {
						{
							var e1 = $e3;
							{
								$e = [];
								while($s.length >= $spos) $e.unshift($s.pop());
								$s.push($e[0]);
								throw "Unable to create XMLHttpRequest object.";
							}
						}
					}
				}
			}
		}
		$s.pop();
	}:(function($this) {
		var $r;
		throw "Unable to create XMLHttpRequest object.";
		return $r;
	}(this));
}
{
	core.String.prototype.__class__ = core.String;
	core.String.__name__ = ["String"];
	core.Array.prototype.__class__ = core.Array;
	core.Array.__name__ = ["Array"];
	core.Int = { __name__ : ["Int"]};
	core.Dynamic = { __name__ : ["Dynamic"]};
	core.Float = Number;
	core.Float.__name__ = ["Float"];
	core.Bool = { __ename__ : ["Bool"]};
	core.Class = { __name__ : ["Class"]};
	core.Enum = { };
	core.Void = { __ename__ : ["Void"]};
}
{
	core.Xml.Element = "element";
	core.Xml.PCData = "pcdata";
	core.Xml.CData = "cdata";
	core.Xml.Comment = "comment";
	core.Xml.DocType = "doctype";
	core.Xml.Prolog = "prolog";
	core.Xml.Document = "document";
}
mohu.mvcs.Actor.__meta__ = { fields : { injector : { inject : ["injector"]}}};
mohu.mvcs.Actor.__rtti = "<class path=\"mohu.mvcs.Actor\" params=\"\">\n\t<implements path=\"haxe.rtti.Infos\"/>\n\t<injector public=\"1\"><c path=\"mohu.mvcs.injection.IInjector\"/></injector>\n\t<_injector><c path=\"mohu.mvcs.injection.IInjector\"/></_injector>\n\t<onRegister public=\"1\" set=\"method\" line=\"18\"><f a=\"\"><e path=\"Void\"/></f></onRegister>\n\t<onRemove public=\"1\" set=\"method\" line=\"22\"><f a=\"\"><e path=\"Void\"/></f></onRemove>\n</class>";
mohu.mvcs.controller.Command.__meta__ = { fields : { message : { inject : ["hub"]}, hub : { inject : ["hub"]}}};
mohu.mvcs.controller.Command.__rtti = "<class path=\"mohu.mvcs.controller.Command\" params=\"\">\n\t<extends path=\"mohu.mvcs.Actor\"/>\n\t<message public=\"1\"><c path=\"mohu.messages.Message\"/></message>\n\t<hub public=\"1\"><c path=\"mohu.mvcs.Hub\"/></hub>\n\t<execute public=\"1\" set=\"method\" line=\"19\"><f a=\"\"><e path=\"Void\"/></f></execute>\n</class>";
cms.mvcs.controller.CMSCommand.__meta__ = { fields : { cmsHub : { inject : ["hub"]}}};
cms.mvcs.controller.CMSCommand.__rtti = "<class path=\"cms.mvcs.controller.CMSCommand\" params=\"\">\n\t<extends path=\"mohu.mvcs.controller.Command\"/>\n\t<cmsHub public=\"1\"><c path=\"cms.mvcs.CMSHub\"/></cmsHub>\n</class>";
cms.mvcs.controller.InitCommand.__meta__ = { fields : { initMessage : { inject : ["message"]}, configModel : { inject : null}, structureModel : { inject : null}}};
cms.mvcs.controller.InitCommand.__rtti = "<class path=\"cms.mvcs.controller.InitCommand\" params=\"\">\n\t<extends path=\"cms.mvcs.controller.CMSCommand\"/>\n\t<initMessage public=\"1\"><c path=\"cms.mvcs.messages.InitMessage\"/></initMessage>\n\t<configModel public=\"1\"><c path=\"cms.mvcs.model.ConfigModel\"/></configModel>\n\t<structureModel public=\"1\"><c path=\"cms.mvcs.modules.structure.model.TypesModel\"/></structureModel>\n\t<execute public=\"1\" set=\"method\" line=\"23\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></execute>\n\t<_handleRetrieveTypesFailed set=\"method\" line=\"31\"><f a=\"message\">\n\t<c path=\"mohu.messages.Message\"/>\n\t<e path=\"Void\"/>\n</f></_handleRetrieveTypesFailed>\n\t<_handleRetrieveTypesCompleted set=\"method\" line=\"36\"><f a=\"message\">\n\t<c path=\"mohu.messages.Message\"/>\n\t<e path=\"Void\"/>\n</f></_handleRetrieveTypesCompleted>\n</class>";
mohu.mvcs.view.Mediator.__meta__ = { fields : { viewController : { inject : ["view"]}}};
mohu.mvcs.view.Mediator.__rtti = "<class path=\"mohu.mvcs.view.Mediator\" params=\"\">\n\t<extends path=\"mohu.mvcs.Actor\"/>\n\t<viewController public=\"1\"><c path=\"mohu.mvcs.view.IViewController\"/></viewController>\n</class>";
cms.mvcs.view.mediators.CMSMediator.__meta__ = { fields : { cmsHub : { inject : ["hub"]}}};
cms.mvcs.view.mediators.CMSMediator.__rtti = "<class path=\"cms.mvcs.view.mediators.CMSMediator\" params=\"\">\n\t<extends path=\"mohu.mvcs.view.Mediator\"/>\n\t<cmsHub public=\"1\"><c path=\"cms.mvcs.CMSHub\"/></cmsHub>\n</class>";
cms.mvcs.core.panel.view.mediators.PanelContainerMediator.__meta__ = { fields : { hub : { inject : ["hub"]}, panelContainerViewController : { inject : ["view"]}}};
cms.mvcs.core.panel.view.mediators.PanelContainerMediator.__rtti = "<class path=\"cms.mvcs.core.panel.view.mediators.PanelContainerMediator\" params=\"\">\n\t<extends path=\"cms.mvcs.view.mediators.CMSMediator\"/>\n\t<hub public=\"1\"><c path=\"cms.mvcs.CMSHub\"/></hub>\n\t<panelContainerViewController public=\"1\"><c path=\"cms.mvcs.core.panel.view.controllers.IPanelContainerViewController\"/></panelContainerViewController>\n\t<model public=\"1\" set=\"setModel\"><c path=\"cms.mvcs.core.panel.model.PanelContainerModel\"/></model>\n\t<_panelViewControllers><c path=\"Array\"><c path=\"cms.mvcs.core.panel.view.controllers.IPanelViewController\"/></c></_panelViewControllers>\n\t<onRemove public=\"1\" set=\"method\" line=\"34\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></onRemove>\n\t<setModel set=\"method\" line=\"39\"><f a=\"value\">\n\t<c path=\"cms.mvcs.core.panel.model.PanelContainerModel\"/>\n\t<c path=\"cms.mvcs.core.panel.model.PanelContainerModel\"/>\n</f></setModel>\n\t<_handlePanelAdded set=\"method\" line=\"66\"><f a=\"message\">\n\t<c path=\"mohu.messages.Message\"/>\n\t<e path=\"Void\"/>\n</f></_handlePanelAdded>\n\t<_handlePanelMoved set=\"method\" line=\"75\"><f a=\"message\">\n\t<c path=\"mohu.messages.Message\"/>\n\t<e path=\"Void\"/>\n</f></_handlePanelMoved>\n\t<_handlePanelRemoved set=\"method\" line=\"83\"><f a=\"message\">\n\t<c path=\"mohu.messages.Message\"/>\n\t<e path=\"Void\"/>\n</f></_handlePanelRemoved>\n\t<new public=\"1\" set=\"method\" line=\"30\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
mohu.mvcs.model.Model.__rtti = "<class path=\"mohu.mvcs.model.Model\" params=\"\"><extends path=\"mohu.mvcs.Actor\"/></class>";
cms.mvcs.core.panel.model.PanelContentModel.__rtti = "<class path=\"cms.mvcs.core.panel.model.PanelContentModel\" params=\"\">\n\t<extends path=\"mohu.mvcs.model.Model\"/>\n\t<changed set=\"null\"><e path=\"Bool\"/></changed>\n\t<onChanged set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onChanged>\n\t<new public=\"1\" set=\"method\" line=\"15\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
cms.mvcs.controller.StartupCommand.__meta__ = { fields : { authenticationModel : { inject : null}, structureModel : { inject : null}}};
cms.mvcs.controller.StartupCommand.__rtti = "<class path=\"cms.mvcs.controller.StartupCommand\" params=\"\">\n\t<extends path=\"cms.mvcs.controller.CMSCommand\"/>\n\t<authenticationModel public=\"1\"><c path=\"cms.mvcs.core.authentication.model.AuthenticationModel\"/></authenticationModel>\n\t<structureModel public=\"1\"><c path=\"cms.mvcs.modules.structure.model.TypesModel\"/></structureModel>\n\t<execute public=\"1\" set=\"method\" line=\"33\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></execute>\n</class>";
cms.mvcs.core.api.controller.content.RetrieveItemCommand.__meta__ = { fields : { retrieveItemMessage : { inject : ["message"]}, configModel : { inject : null}, service : { inject : null}}};
cms.mvcs.core.api.controller.content.RetrieveItemCommand.__rtti = "<class path=\"cms.mvcs.core.api.controller.content.RetrieveItemCommand\" params=\"\">\n\t<extends path=\"cms.mvcs.controller.CMSCommand\"/>\n\t<retrieveItemMessage public=\"1\"><c path=\"cms.mvcs.core.api.messages.content.RetrieveItemMessage\"/></retrieveItemMessage>\n\t<configModel public=\"1\"><c path=\"cms.mvcs.model.ConfigModel\"/></configModel>\n\t<service public=\"1\"><c path=\"cms.mvcs.core.api.services.content.IRetrieveItemService\"/></service>\n\t<execute public=\"1\" set=\"method\" line=\"30\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></execute>\n\t<_handleLoadFailed set=\"method\" line=\"37\"><f a=\"message\">\n\t<c path=\"mohu.messages.Message\"/>\n\t<e path=\"Void\"/>\n</f></_handleLoadFailed>\n\t<_handleLoadCompleted set=\"method\" line=\"46\"><f a=\"message\">\n\t<c path=\"mohu.messages.Message\"/>\n\t<e path=\"Void\"/>\n</f></_handleLoadCompleted>\n</class>";
cms.mvcs.core.panel.view.mediators.PanelMediator.__meta__ = { fields : { panelView : { inject : ["view"]}}};
cms.mvcs.core.panel.view.mediators.PanelMediator.__rtti = "<class path=\"cms.mvcs.core.panel.view.mediators.PanelMediator\" params=\"\">\n\t<extends path=\"cms.mvcs.view.mediators.CMSMediator\"/>\n\t<panelView public=\"1\"><c path=\"cms.mvcs.core.panel.view.controllers.IPanelViewController\"/></panelView>\n\t<model public=\"1\" set=\"setModel\"><c path=\"cms.mvcs.core.panel.model.PanelModel\"/></model>\n\t<onRemove public=\"1\" set=\"method\" line=\"23\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></onRemove>\n\t<setModel public=\"1\" set=\"method\" line=\"28\"><f a=\"value\">\n\t<c path=\"cms.mvcs.core.panel.model.PanelModel\"/>\n\t<c path=\"cms.mvcs.core.panel.model.PanelModel\"/>\n</f></setModel>\n\t<_handleContentViewValueChanged set=\"method\" line=\"59\"><f a=\"message\">\n\t<c path=\"mohu.messages.Message\"/>\n\t<e path=\"Void\"/>\n</f></_handleContentViewValueChanged>\n\t<_handleTitleChanged set=\"method\" line=\"63\"><f a=\"message\">\n\t<c path=\"mohu.messages.Message\"/>\n\t<e path=\"Void\"/>\n</f></_handleTitleChanged>\n\t<_handleHelpChanged set=\"method\" line=\"67\"><f a=\"message\">\n\t<c path=\"mohu.messages.Message\"/>\n\t<e path=\"Void\"/>\n</f></_handleHelpChanged>\n\t<_handleContentViewChanged set=\"method\" line=\"71\"><f a=\"message\">\n\t<c path=\"mohu.messages.Message\"/>\n\t<e path=\"Void\"/>\n</f></_handleContentViewChanged>\n\t<_handleButtonsChanged set=\"method\" line=\"77\"><f a=\"message\">\n\t<c path=\"mohu.messages.Message\"/>\n\t<e path=\"Void\"/>\n</f></_handleButtonsChanged>\n</class>";
cms.mvcs.modules.content.controller.AddItemEditorPanelCommand.__meta__ = { fields : { addItemEditorPanelMessage : { inject : ["message"]}, structureModel : { inject : null}}};
cms.mvcs.modules.content.controller.AddItemEditorPanelCommand.__rtti = "<class path=\"cms.mvcs.modules.content.controller.AddItemEditorPanelCommand\" params=\"\">\n\t<extends path=\"cms.mvcs.controller.CMSCommand\"/>\n\t<addItemEditorPanelMessage public=\"1\"><c path=\"cms.mvcs.modules.content.messages.AddItemEditorPanelMessage\"/></addItemEditorPanelMessage>\n\t<structureModel public=\"1\"><c path=\"cms.mvcs.modules.structure.model.TypesModel\"/></structureModel>\n\t<_itemEditorModel><c path=\"cms.mvcs.modules.content.model.ItemEditorModel\"/></_itemEditorModel>\n\t<_panelModel><c path=\"cms.mvcs.core.panel.model.PanelModel\"/></_panelModel>\n\t<execute public=\"1\" set=\"method\" line=\"41\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></execute>\n\t<_handleRetrieveItemFailed set=\"method\" line=\"67\"><f a=\"message\">\n\t<c path=\"mohu.messages.Message\"/>\n\t<e path=\"Void\"/>\n</f></_handleRetrieveItemFailed>\n\t<_handleRetrieveItemCompleted set=\"method\" line=\"74\"><f a=\"message\">\n\t<c path=\"mohu.messages.Message\"/>\n\t<e path=\"Void\"/>\n</f></_handleRetrieveItemCompleted>\n</class>";
mohu.mvcs.service.Service.__rtti = "<class path=\"mohu.mvcs.service.Service\" params=\"\"><extends path=\"mohu.mvcs.Actor\"/></class>";
cms.mvcs.core.api.services.HttpService.__rtti = "<class path=\"cms.mvcs.core.api.services.HttpService\" params=\"\">\n\t<extends path=\"mohu.mvcs.service.Service\"/>\n\t<implements path=\"cms.mvcs.core.api.services.IHttpService\"/>\n\t<GET public=\"1\" get=\"inline\" set=\"null\" line=\"16\" static=\"1\"><c path=\"String\"/></GET>\n\t<POST public=\"1\" get=\"inline\" set=\"null\" line=\"17\" static=\"1\"><c path=\"String\"/></POST>\n\t<PUT public=\"1\" get=\"inline\" set=\"null\" line=\"18\" static=\"1\"><c path=\"String\"/></PUT>\n\t<DELETE public=\"1\" get=\"inline\" set=\"null\" line=\"19\" static=\"1\"><c path=\"String\"/></DELETE>\n\t<data public=\"1\" set=\"null\"><c path=\"String\"/></data>\n\t<error public=\"1\" set=\"null\"><c path=\"String\"/></error>\n\t<onLoadFailed public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onLoadFailed>\n\t<onLoadCompleted public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onLoadCompleted>\n\t<load public=\"1\" set=\"method\" line=\"32\"><f a=\"url:?parameters:?method:?contentType\">\n\t<c path=\"String\"/>\n\t<d/>\n\t<c path=\"String\"/>\n\t<c path=\"String\"/>\n\t<e path=\"Void\"/>\n</f></load>\n\t<_handleLoadFailed set=\"method\" line=\"52\"><f a=\"error\">\n\t<c path=\"String\"/>\n\t<e path=\"Void\"/>\n</f></_handleLoadFailed>\n\t<_handleLoadCompleted set=\"method\" line=\"57\"><f a=\"data\">\n\t<c path=\"String\"/>\n\t<e path=\"Void\"/>\n</f></_handleLoadCompleted>\n\t<_parseData set=\"method\" line=\"69\"><f a=\"data\">\n\t<c path=\"String\"/>\n\t<e path=\"Void\"/>\n</f></_parseData>\n\t<new public=\"1\" set=\"method\" line=\"27\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
cms.mvcs.core.api.services.HttpService.GET = "GET";
cms.mvcs.core.api.services.HttpService.POST = "POST";
cms.mvcs.core.api.services.HttpService.PUT = "PUT";
cms.mvcs.core.api.services.HttpService.DELETE = "DELETE";
cms.mvcs.core.api.services.APIService.__meta__ = { fields : { encoder : { inject : null}, configModel : { inject : null}}};
cms.mvcs.core.api.services.APIService.__rtti = "<class path=\"cms.mvcs.core.api.services.APIService\" params=\"\">\n\t<extends path=\"cms.mvcs.core.api.services.HttpService\"/>\n\t<RETRIEVE public=\"1\" get=\"inline\" set=\"null\" line=\"16\" static=\"1\"><c path=\"String\"/></RETRIEVE>\n\t<CREATE public=\"1\" get=\"inline\" set=\"null\" line=\"17\" static=\"1\"><c path=\"String\"/></CREATE>\n\t<UPDATE public=\"1\" get=\"inline\" set=\"null\" line=\"18\" static=\"1\"><c path=\"String\"/></UPDATE>\n\t<DELETE public=\"1\" get=\"inline\" set=\"null\" line=\"19\" static=\"1\"><c path=\"String\"/></DELETE>\n\t<encoder public=\"1\"><c path=\"cms.mvcs.core.encoding.services.IEncoderService\"/></encoder>\n\t<configModel public=\"1\"><c path=\"cms.mvcs.model.ConfigModel\"/></configModel>\n\t<response set=\"null\"><d/></response>\n\t<api public=\"1\" set=\"method\" line=\"30\"><f a=\"module:method:?path:?parameters\">\n\t<c path=\"String\"/>\n\t<c path=\"String\"/>\n\t<c path=\"String\"/>\n\t<d/>\n\t<e path=\"Void\"/>\n</f></api>\n\t<_parseData set=\"method\" line=\"34\" override=\"1\"><f a=\"data\">\n\t<c path=\"String\"/>\n\t<e path=\"Void\"/>\n</f></_parseData>\n\t<new public=\"1\" set=\"method\" line=\"26\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
cms.mvcs.core.api.services.APIService.RETRIEVE = "GET";
cms.mvcs.core.api.services.APIService.CREATE = "POST";
cms.mvcs.core.api.services.APIService.UPDATE = "PUT";
cms.mvcs.core.api.services.APIService.DELETE = "DELETE";
cms.mvcs.core.api.services.content.RetrieveItemService.__rtti = "<class path=\"cms.mvcs.core.api.services.content.RetrieveItemService\" params=\"\">\n\t<extends path=\"cms.mvcs.core.api.services.APIService\"/>\n\t<implements path=\"cms.mvcs.core.api.services.content.IRetrieveItemService\"/>\n\t<item public=\"1\" set=\"null\"><c path=\"cms.mvcs.core.api.model.vo.ItemVO\"/></item>\n\t<retrieveItem public=\"1\" set=\"method\" line=\"14\"><f a=\"table:item\">\n\t<c path=\"String\"/>\n\t<c path=\"Int\"/>\n\t<e path=\"Void\"/>\n</f></retrieveItem>\n\t<_parseData set=\"method\" line=\"18\" override=\"1\"><f a=\"data\">\n\t<c path=\"String\"/>\n\t<e path=\"Void\"/>\n</f></_parseData>\n\t<new public=\"1\" set=\"method\" line=\"10\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
cms.mvcs.core.authentication.model.AuthenticationModel.__rtti = "<class path=\"cms.mvcs.core.authentication.model.AuthenticationModel\" params=\"\">\n\t<extends path=\"mohu.mvcs.model.Model\"/>\n\t<currentUser public=\"1\" set=\"setCurrentUser\"><c path=\"cms.mvcs.core.api.model.vo.UserVO\"/></currentUser>\n\t<onCurrentUserChanged public=\"1\"><c path=\"mohu.messages.Dispatcher\"/></onCurrentUserChanged>\n\t<setCurrentUser set=\"method\" line=\"26\"><f a=\"value\">\n\t<c path=\"cms.mvcs.core.api.model.vo.UserVO\"/>\n\t<c path=\"cms.mvcs.core.api.model.vo.UserVO\"/>\n</f></setCurrentUser>\n\t<new public=\"1\" set=\"method\" line=\"20\"><f a=\"?currentUser\">\n\t<c path=\"cms.mvcs.core.api.model.vo.UserVO\"/>\n\t<e path=\"Void\"/>\n</f></new>\n</class>";
cms.mvcs.core.popup.controller.HidePopupCommand.__meta__ = { fields : { popupMessage : { inject : ["message"]}, popupContainer : { inject : ["popup"]}}};
cms.mvcs.core.popup.controller.HidePopupCommand.__rtti = "<class path=\"cms.mvcs.core.popup.controller.HidePopupCommand\" params=\"\">\n\t<extends path=\"cms.mvcs.controller.CMSCommand\"/>\n\t<popupMessage public=\"1\"><c path=\"cms.mvcs.core.popup.messages.PopupMessage\"/></popupMessage>\n\t<popupContainer public=\"1\"><c path=\"cms.mvcs.core.popup.view.controllers.IPopupContainerViewController\"/></popupContainer>\n\t<execute public=\"1\" set=\"method\" line=\"18\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></execute>\n</class>";
cms.mvcs.modules.content.controller.AddReferenceCommand.__meta__ = { fields : { addReferenceMessage : { inject : ["message"]}, popup : { inject : null}}};
cms.mvcs.modules.content.controller.AddReferenceCommand.__rtti = "<class path=\"cms.mvcs.modules.content.controller.AddReferenceCommand\" params=\"\">\n\t<extends path=\"cms.mvcs.controller.CMSCommand\"/>\n\t<addReferenceMessage public=\"1\"><c path=\"cms.mvcs.modules.content.messages.AddReferenceMessage\"/></addReferenceMessage>\n\t<popup public=\"1\"><c path=\"cms.mvcs.modules.content.view.controllers.popups.IAddReferencePopupViewController\"/></popup>\n\t<execute public=\"1\" set=\"method\" line=\"24\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></execute>\n\t<_handleRetrieveItemFailed set=\"method\" line=\"36\"><f a=\"message\">\n\t<c path=\"mohu.messages.Message\"/>\n\t<e path=\"Void\"/>\n</f></_handleRetrieveItemFailed>\n\t<_handleRetrieveItemCompleted set=\"method\" line=\"46\"><f a=\"message\">\n\t<c path=\"mohu.messages.Message\"/>\n\t<e path=\"Void\"/>\n</f></_handleRetrieveItemCompleted>\n\t<_handleCloseClicked set=\"method\" line=\"53\"><f a=\"message\">\n\t<c path=\"mohu.messages.Message\"/>\n\t<e path=\"Void\"/>\n</f></_handleCloseClicked>\n\t<_handleItemSelected set=\"method\" line=\"58\"><f a=\"message\">\n\t<c path=\"mohu.messages.Message\"/>\n\t<e path=\"Void\"/>\n</f></_handleItemSelected>\n</class>";
cms.mvcs.core.api.controller.content.UpdateItemCommand.__meta__ = { fields : { updateItemMessage : { inject : ["message"]}, service : { inject : null}, authenticationModel : { inject : null}}};
cms.mvcs.core.api.controller.content.UpdateItemCommand.__rtti = "<class path=\"cms.mvcs.core.api.controller.content.UpdateItemCommand\" params=\"\">\n\t<extends path=\"cms.mvcs.controller.CMSCommand\"/>\n\t<updateItemMessage public=\"1\"><c path=\"cms.mvcs.core.api.messages.content.UpdateItemMessage\"/></updateItemMessage>\n\t<service public=\"1\"><c path=\"cms.mvcs.core.api.services.content.IUpdateItemService\"/></service>\n\t<authenticationModel public=\"1\"><c path=\"cms.mvcs.core.authentication.model.AuthenticationModel\"/></authenticationModel>\n\t<execute public=\"1\" set=\"method\" line=\"28\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></execute>\n\t<_handleLoadFailed set=\"method\" line=\"51\"><f a=\"message\">\n\t<c path=\"mohu.messages.Message\"/>\n\t<e path=\"Void\"/>\n</f></_handleLoadFailed>\n\t<_handleLoadCompleted set=\"method\" line=\"60\"><f a=\"message\">\n\t<c path=\"mohu.messages.Message\"/>\n\t<e path=\"Void\"/>\n</f></_handleLoadCompleted>\n</class>";
cms.mvcs.core.panel.controller.MovePanelCommand.__meta__ = { fields : { panelContainerMessage : { inject : ["message"]}}};
cms.mvcs.core.panel.controller.MovePanelCommand.__rtti = "<class path=\"cms.mvcs.core.panel.controller.MovePanelCommand\" params=\"\">\n\t<extends path=\"cms.mvcs.controller.CMSCommand\"/>\n\t<panelContainerMessage public=\"1\"><c path=\"cms.mvcs.core.panel.messages.PanelContainerMessage\"/></panelContainerMessage>\n\t<execute public=\"1\" set=\"method\" line=\"18\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></execute>\n</class>";
cms.mvcs.core.api.services.content.UpdateItemService.__rtti = "<class path=\"cms.mvcs.core.api.services.content.UpdateItemService\" params=\"\">\n\t<extends path=\"cms.mvcs.core.api.services.APIService\"/>\n\t<updateItem public=\"1\" set=\"method\" line=\"12\"><f a=\"table:id:item\">\n\t<c path=\"String\"/>\n\t<c path=\"Int\"/>\n\t<c path=\"cms.mvcs.core.api.model.vo.ItemVO\"/>\n\t<e path=\"Void\"/>\n</f></updateItem>\n\t<new public=\"1\" set=\"method\" line=\"10\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
cms.mvcs.modules.structure.model.TypesModel.__rtti = "<class path=\"cms.mvcs.modules.structure.model.TypesModel\" params=\"\">\n\t<extends path=\"mohu.mvcs.model.Model\"/>\n\t<types public=\"1\" set=\"setTypes\"><c path=\"Hash\"><c path=\"cms.mvcs.core.api.model.vo.TypeVO\"/></c></types>\n\t<rootType public=\"1\"><c path=\"cms.mvcs.core.api.model.vo.TypeVO\"/></rootType>\n\t<onUpdated public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onUpdated>\n\t<getType public=\"1\" set=\"method\" line=\"28\"><f a=\"name\">\n\t<c path=\"String\"/>\n\t<c path=\"cms.mvcs.core.api.model.vo.TypeVO\"/>\n</f></getType>\n\t<addType public=\"1\" set=\"method\" line=\"32\"><f a=\"type:name\">\n\t<c path=\"cms.mvcs.core.api.model.vo.TypeVO\"/>\n\t<c path=\"String\"/>\n\t<c path=\"cms.mvcs.core.api.model.vo.TypeVO\"/>\n</f></addType>\n\t<removeType public=\"1\" set=\"method\" line=\"39\"><f a=\"type\">\n\t<c path=\"cms.mvcs.core.api.model.vo.TypeVO\"/>\n\t<c path=\"cms.mvcs.core.api.model.vo.TypeVO\"/>\n</f></removeType>\n\t<setTypes public=\"1\" set=\"method\" line=\"50\"><f a=\"value\">\n\t<c path=\"Hash\"><c path=\"cms.mvcs.core.api.model.vo.TypeVO\"/></c>\n\t<c path=\"Hash\"><c path=\"cms.mvcs.core.api.model.vo.TypeVO\"/></c>\n</f></setTypes>\n\t<new public=\"1\" set=\"method\" line=\"22\"><f a=\"?types\">\n\t<c path=\"Hash\"><c path=\"cms.mvcs.core.api.model.vo.TypeVO\"/></c>\n\t<e path=\"Void\"/>\n</f></new>\n</class>";
cms.mvcs.core.panel.model.PanelContainerModel.__rtti = "<class path=\"cms.mvcs.core.panel.model.PanelContainerModel\" params=\"\">\n\t<extends path=\"mohu.mvcs.model.Model\"/>\n\t<onPanelAdded public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onPanelAdded>\n\t<onPanelRemoved public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onPanelRemoved>\n\t<onPanelMoved public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onPanelMoved>\n\t<panels public=\"1\" get=\"getPanels\" set=\"null\"><c path=\"Array\"><c path=\"cms.mvcs.core.panel.model.PanelModel\"/></c></panels>\n\t<numPanels public=\"1\" get=\"getNumPanels\" set=\"null\"><c path=\"Int\"/></numPanels>\n\t<_panels><c path=\"Array\"><c path=\"cms.mvcs.core.panel.model.PanelModel\"/></c></_panels>\n\t<getPanelAt public=\"1\" set=\"method\" line=\"34\"><f a=\"index\">\n\t<c path=\"Int\"/>\n\t<c path=\"cms.mvcs.core.panel.model.PanelModel\"/>\n</f></getPanelAt>\n\t<getPanelIndex public=\"1\" set=\"method\" line=\"38\"><f a=\"panel\">\n\t<c path=\"cms.mvcs.core.panel.model.PanelModel\"/>\n\t<c path=\"Int\"/>\n</f></getPanelIndex>\n\t<addPanel public=\"1\" set=\"method\" line=\"43\"><f a=\"panel\">\n\t<c path=\"cms.mvcs.core.panel.model.PanelModel\"/>\n\t<c path=\"cms.mvcs.core.panel.model.PanelModel\"/>\n</f></addPanel>\n\t<addPanelAt public=\"1\" set=\"method\" line=\"52\"><f a=\"panel:index\">\n\t<c path=\"cms.mvcs.core.panel.model.PanelModel\"/>\n\t<c path=\"Int\"/>\n\t<c path=\"cms.mvcs.core.panel.model.PanelModel\"/>\n</f></addPanelAt>\n\t<movePanel public=\"1\" set=\"method\" line=\"62\"><f a=\"panel:newIndex\">\n\t<c path=\"cms.mvcs.core.panel.model.PanelModel\"/>\n\t<c path=\"Int\"/>\n\t<c path=\"cms.mvcs.core.panel.model.PanelModel\"/>\n</f></movePanel>\n\t<movePanelAt public=\"1\" set=\"method\" line=\"76\"><f a=\"oldIndex:newIndex\">\n\t<c path=\"Int\"/>\n\t<c path=\"Int\"/>\n\t<c path=\"cms.mvcs.core.panel.model.PanelModel\"/>\n</f></movePanelAt>\n\t<removePanel public=\"1\" set=\"method\" line=\"85\"><f a=\"panel\">\n\t<c path=\"cms.mvcs.core.panel.model.PanelModel\"/>\n\t<c path=\"cms.mvcs.core.panel.model.PanelModel\"/>\n</f></removePanel>\n\t<removePanelAt public=\"1\" set=\"method\" line=\"98\"><f a=\"index\">\n\t<c path=\"Int\"/>\n\t<c path=\"cms.mvcs.core.panel.model.PanelModel\"/>\n</f></removePanelAt>\n\t<getPanels set=\"method\" line=\"106\"><f a=\"\"><c path=\"Array\"><c path=\"cms.mvcs.core.panel.model.PanelModel\"/></c></f></getPanels>\n\t<getNumPanels set=\"method\" line=\"110\"><f a=\"\"><c path=\"Int\"/></f></getNumPanels>\n\t<new public=\"1\" set=\"method\" line=\"26\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
cms.Main.__rtti = "<class path=\"cms.Main\" params=\"\">\n\t<implements path=\"haxe.rtti.Infos\"/>\n\t<__instance static=\"1\"><c path=\"cms.Main\"/></__instance>\n\t<main public=\"1\" set=\"method\" line=\"23\" static=\"1\"><f a=\"\"><e path=\"Void\"/></f></main>\n\t<_hub><c path=\"cms.mvcs.CMSHub\"/></_hub>\n\t<new public=\"1\" set=\"method\" line=\"27\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
cms.mvcs.model.ConfigModel.__rtti = "<class path=\"cms.mvcs.model.ConfigModel\" params=\"\">\n\t<extends path=\"mohu.mvcs.model.Model\"/>\n\t<apiURL public=\"1\"><c path=\"String\"/></apiURL>\n\t<new public=\"1\" set=\"method\" line=\"14\"><f a=\"apiURL\">\n\t<c path=\"String\"/>\n\t<e path=\"Void\"/>\n</f></new>\n</class>";
js.Lib.onerror = null;
mohu.mvcs.Hub.__rtti = "<class path=\"mohu.mvcs.Hub\" params=\"\">\n\t<implements path=\"haxe.rtti.Infos\"/>\n\t<contextView public=\"1\" set=\"null\"><c path=\"mohu.mvcs.view.IContextView\"/></contextView>\n\t<injector public=\"1\" set=\"null\"><c path=\"mohu.mvcs.injection.IInjector\"/></injector>\n\t<mediatorMap public=\"1\" set=\"null\"><c path=\"mohu.mvcs.view.MediatorMap\"/></mediatorMap>\n\t<commandMap public=\"1\" set=\"null\"><c path=\"mohu.mvcs.controller.CommandMap\"/></commandMap>\n\t<new public=\"1\" set=\"method\" line=\"24\"><f a=\"contextView:?customInjector\">\n\t<c path=\"mohu.mvcs.view.IContextView\"/>\n\t<c path=\"mohu.mvcs.injection.IInjector\"/>\n\t<e path=\"Void\"/>\n</f></new>\n</class>";
cms.mvcs.core.api.controller.content.RetrieveItemsCommand.__meta__ = { fields : { retrieveItemsMessage : { inject : ["message"]}, configModel : { inject : null}, service : { inject : null}}};
cms.mvcs.core.api.controller.content.RetrieveItemsCommand.__rtti = "<class path=\"cms.mvcs.core.api.controller.content.RetrieveItemsCommand\" params=\"\">\n\t<extends path=\"cms.mvcs.controller.CMSCommand\"/>\n\t<retrieveItemsMessage public=\"1\"><c path=\"cms.mvcs.core.api.messages.content.RetrieveItemsMessage\"/></retrieveItemsMessage>\n\t<configModel public=\"1\"><c path=\"cms.mvcs.model.ConfigModel\"/></configModel>\n\t<service public=\"1\"><c path=\"cms.mvcs.core.api.services.content.IRetrieveItemsService\"/></service>\n\t<execute public=\"1\" set=\"method\" line=\"28\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></execute>\n\t<_handleLoadFailed set=\"method\" line=\"35\"><f a=\"message\">\n\t<c path=\"mohu.messages.Message\"/>\n\t<e path=\"Void\"/>\n</f></_handleLoadFailed>\n\t<_handleLoadCompleted set=\"method\" line=\"44\"><f a=\"message\">\n\t<c path=\"mohu.messages.Message\"/>\n\t<e path=\"Void\"/>\n</f></_handleLoadCompleted>\n</class>";
cms.mvcs.CMSHub.__rtti = "<class path=\"cms.mvcs.CMSHub\" params=\"\">\n\t<extends path=\"mohu.mvcs.Hub\"/>\n\t<onError public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onError>\n\t<onInit public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onInit>\n\t<onStartup public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onStartup>\n\t<onRetrieveTypes public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onRetrieveTypes>\n\t<onRetrieveTypesFailed public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onRetrieveTypesFailed>\n\t<onRetrieveTypesCompleted public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onRetrieveTypesCompleted>\n\t<onRetrieveItem public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onRetrieveItem>\n\t<onRetrieveItemFailed public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onRetrieveItemFailed>\n\t<onRetrieveItemCompleted public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onRetrieveItemCompleted>\n\t<onRetrieveItems public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onRetrieveItems>\n\t<onRetrieveItemsFailed public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onRetrieveItemsFailed>\n\t<onRetrieveItemsCompleted public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onRetrieveItemsCompleted>\n\t<onUpdateItem public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onUpdateItem>\n\t<onUpdateItemFailed public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onUpdateItemFailed>\n\t<onUpdateItemCompleted public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onUpdateItemCompleted>\n\t<onShowPopup public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onShowPopup>\n\t<onHidePopup public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onHidePopup>\n\t<onAddPanel public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onAddPanel>\n\t<onMovePanel public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onMovePanel>\n\t<onRemovePanel public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onRemovePanel>\n\t<onAddItemEditorPanel public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onAddItemEditorPanel>\n\t<onAddReference public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onAddReference>\n\t<onAddReferenceFailed public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onAddReferenceFailed>\n\t<onAddReferenceCompleted public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onAddReferenceCompleted>\n\t<onRemoveReference public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onRemoveReference>\n\t<onRemoveReferenceFailed public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onRemoveReferenceFailed>\n\t<onRemoveReferenceCompleted public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onRemoveReferenceCompleted>\n\t<initModel set=\"method\" line=\"124\"><f a=\"\"><e path=\"Void\"/></f></initModel>\n\t<initView set=\"method\" line=\"130\"><f a=\"\"><e path=\"Void\"/></f></initView>\n\t<initController set=\"method\" line=\"134\"><f a=\"\"><e path=\"Void\"/></f></initController>\n\t<initServices set=\"method\" line=\"196\"><f a=\"\"><e path=\"Void\"/></f></initServices>\n\t<new public=\"1\" set=\"method\" line=\"115\"><f a=\"contextView\">\n\t<c path=\"mohu.mvcs.view.IContextView\"/>\n\t<e path=\"Void\"/>\n</f></new>\n</class>";
cms.mvcs.CMSHTMLHub.__rtti = "<class path=\"cms.mvcs.CMSHTMLHub\" params=\"\">\n\t<extends path=\"cms.mvcs.CMSHub\"/>\n\t<_handleError set=\"method\" line=\"67\"><f a=\"message:stack\">\n\t<c path=\"String\"/>\n\t<c path=\"Array\"><c path=\"String\"/></c>\n\t<e path=\"Bool\"/>\n</f></_handleError>\n\t<initView set=\"method\" line=\"74\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></initView>\n\t<new public=\"1\" set=\"method\" line=\"61\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
cms.mvcs.core.panel.controller.RemovePanelCommand.__meta__ = { fields : { panelContainerMessage : { inject : ["message"]}}};
cms.mvcs.core.panel.controller.RemovePanelCommand.__rtti = "<class path=\"cms.mvcs.core.panel.controller.RemovePanelCommand\" params=\"\">\n\t<extends path=\"cms.mvcs.controller.CMSCommand\"/>\n\t<panelContainerMessage public=\"1\"><c path=\"cms.mvcs.core.panel.messages.PanelContainerMessage\"/></panelContainerMessage>\n\t<execute public=\"1\" set=\"method\" line=\"18\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></execute>\n</class>";
cms.mvcs.core.panel.controller.AddPanelCommand.__meta__ = { fields : { panelContainerMessage : { inject : ["message"]}}};
cms.mvcs.core.panel.controller.AddPanelCommand.__rtti = "<class path=\"cms.mvcs.core.panel.controller.AddPanelCommand\" params=\"\">\n\t<extends path=\"cms.mvcs.controller.CMSCommand\"/>\n\t<panelContainerMessage public=\"1\"><c path=\"cms.mvcs.core.panel.messages.PanelContainerMessage\"/></panelContainerMessage>\n\t<execute public=\"1\" set=\"method\" line=\"19\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></execute>\n</class>";
cms.mvcs.core.api.controller.structure.RetrieveTypesCommand.__meta__ = { fields : { retrieveTypesMessage : { inject : ["message"]}, configModel : { inject : null}, service : { inject : null}}};
cms.mvcs.core.api.controller.structure.RetrieveTypesCommand.__rtti = "<class path=\"cms.mvcs.core.api.controller.structure.RetrieveTypesCommand\" params=\"\">\n\t<extends path=\"cms.mvcs.controller.CMSCommand\"/>\n\t<retrieveTypesMessage public=\"1\"><c path=\"cms.mvcs.core.api.messages.structure.RetrieveTypesMessage\"/></retrieveTypesMessage>\n\t<configModel public=\"1\"><c path=\"cms.mvcs.model.ConfigModel\"/></configModel>\n\t<service public=\"1\"><c path=\"cms.mvcs.core.api.services.structure.IRetrieveTypesService\"/></service>\n\t<execute public=\"1\" set=\"method\" line=\"29\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></execute>\n\t<_handleLoadFailed set=\"method\" line=\"36\"><f a=\"message\">\n\t<c path=\"mohu.messages.Message\"/>\n\t<e path=\"Void\"/>\n</f></_handleLoadFailed>\n\t<_handleLoadCompleted set=\"method\" line=\"45\"><f a=\"message\">\n\t<c path=\"mohu.messages.Message\"/>\n\t<e path=\"Void\"/>\n</f></_handleLoadCompleted>\n</class>";
cms.mvcs.core.api.services.content.RetrieveItemsService.__rtti = "<class path=\"cms.mvcs.core.api.services.content.RetrieveItemsService\" params=\"\">\n\t<extends path=\"cms.mvcs.core.api.services.APIService\"/>\n\t<implements path=\"cms.mvcs.core.api.services.content.IRetrieveItemsService\"/>\n\t<items public=\"1\" set=\"null\"><c path=\"Array\"><c path=\"cms.mvcs.core.api.model.vo.ReferenceVO\"/></c></items>\n\t<retrieveItems public=\"1\" set=\"method\" line=\"15\"><f a=\"table\">\n\t<c path=\"String\"/>\n\t<e path=\"Void\"/>\n</f></retrieveItems>\n\t<_parseData set=\"method\" line=\"19\" override=\"1\"><f a=\"data\">\n\t<c path=\"String\"/>\n\t<e path=\"Void\"/>\n</f></_parseData>\n\t<new public=\"1\" set=\"method\" line=\"11\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
cms.mvcs.core.panel.model.PanelModel.__rtti = "<class path=\"cms.mvcs.core.panel.model.PanelModel\" params=\"\">\n\t<extends path=\"mohu.mvcs.model.Model\"/>\n\t<title public=\"1\" set=\"setTitle\"><c path=\"String\"/></title>\n\t<help public=\"1\" set=\"setHelp\"><c path=\"String\"/></help>\n\t<contentView public=\"1\" set=\"setContentView\"><c path=\"cms.mvcs.core.panel.view.controllers.IPanelContentViewController\"/></contentView>\n\t<buttons public=\"1\" set=\"setButtons\"><c path=\"cms.mvcs.core.panel.view.components.IPanelButtons\"/></buttons>\n\t<onTitleChanged public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onTitleChanged>\n\t<onHelpChanged public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onHelpChanged>\n\t<onContentViewChanged public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onContentViewChanged>\n\t<onButtonsChanged public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onButtonsChanged>\n\t<container public=\"1\"><c path=\"cms.mvcs.core.panel.model.PanelContainerModel\"/></container>\n\t<setTitle set=\"method\" line=\"42\"><f a=\"value\">\n\t<c path=\"String\"/>\n\t<c path=\"String\"/>\n</f></setTitle>\n\t<setHelp set=\"method\" line=\"49\"><f a=\"value\">\n\t<c path=\"String\"/>\n\t<c path=\"String\"/>\n</f></setHelp>\n\t<setContentView set=\"method\" line=\"56\"><f a=\"value\">\n\t<c path=\"cms.mvcs.core.panel.view.controllers.IPanelContentViewController\"/>\n\t<c path=\"cms.mvcs.core.panel.view.controllers.IPanelContentViewController\"/>\n</f></setContentView>\n\t<setButtons set=\"method\" line=\"63\"><f a=\"value\">\n\t<c path=\"cms.mvcs.core.panel.view.components.IPanelButtons\"/>\n\t<c path=\"cms.mvcs.core.panel.view.components.IPanelButtons\"/>\n</f></setButtons>\n\t<new public=\"1\" set=\"method\" line=\"30\"><f a=\"?title:?help:?contentView:?buttons\">\n\t<c path=\"String\"/>\n\t<c path=\"String\"/>\n\t<c path=\"cms.mvcs.core.panel.view.controllers.IPanelContentViewController\"/>\n\t<c path=\"cms.mvcs.core.panel.view.components.IPanelButtons\"/>\n\t<e path=\"Void\"/>\n</f></new>\n</class>";
cms.mvcs.core.api.services.structure.RetrieveTypesService.__rtti = "<class path=\"cms.mvcs.core.api.services.structure.RetrieveTypesService\" params=\"\">\n\t<extends path=\"cms.mvcs.core.api.services.APIService\"/>\n\t<implements path=\"cms.mvcs.core.api.services.structure.IRetrieveTypesService\"/>\n\t<MODULE_NAME get=\"inline\" set=\"null\" line=\"14\" static=\"1\"><c path=\"String\"/></MODULE_NAME>\n\t<types public=\"1\" set=\"null\"><c path=\"Hash\"><c path=\"cms.mvcs.core.api.model.vo.TypeVO\"/></c></types>\n\t<rootType public=\"1\" set=\"null\"><c path=\"cms.mvcs.core.api.model.vo.TypeVO\"/></rootType>\n\t<retrieveTypes public=\"1\" set=\"method\" line=\"23\"><f a=\"\"><e path=\"Void\"/></f></retrieveTypes>\n\t<_parseData set=\"method\" line=\"27\" override=\"1\"><f a=\"data\">\n\t<c path=\"String\"/>\n\t<e path=\"Void\"/>\n</f></_parseData>\n\t<new public=\"1\" set=\"method\" line=\"19\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
cms.mvcs.core.api.services.structure.RetrieveTypesService.MODULE_NAME = "structure";
cms.mvcs.modules.content.view.mediators.ItemEditorMediator.__meta__ = { fields : { itemEditorView : { inject : ["view"]}}};
cms.mvcs.modules.content.view.mediators.ItemEditorMediator.__rtti = "<class path=\"cms.mvcs.modules.content.view.mediators.ItemEditorMediator\" params=\"\">\n\t<extends path=\"cms.mvcs.view.mediators.CMSMediator\"/>\n\t<itemEditorView public=\"1\"><c path=\"cms.mvcs.modules.content.view.controllers.panels.IItemEditorViewController\"/></itemEditorView>\n\t<model public=\"1\" set=\"setModel\"><c path=\"cms.mvcs.modules.content.model.ItemEditorModel\"/></model>\n\t<panel public=\"1\" set=\"setPanel\"><c path=\"cms.mvcs.core.panel.model.PanelModel\"/></panel>\n\t<_updating><e path=\"Bool\"/></_updating>\n\t<onRegister public=\"1\" set=\"method\" line=\"44\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></onRegister>\n\t<onRemove public=\"1\" set=\"method\" line=\"52\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></onRemove>\n\t<_handleItemSelected set=\"method\" line=\"63\"><f a=\"message\">\n\t<c path=\"mohu.messages.Message\"/>\n\t<e path=\"Void\"/>\n</f></_handleItemSelected>\n\t<_handleItemAddClicked set=\"method\" line=\"73\"><f a=\"message\">\n\t<c path=\"mohu.messages.Message\"/>\n\t<e path=\"Void\"/>\n</f></_handleItemAddClicked>\n\t<_handleItemAddCompleted set=\"method\" line=\"79\"><f a=\"message\">\n\t<c path=\"mohu.messages.Message\"/>\n\t<e path=\"Void\"/>\n</f></_handleItemAddCompleted>\n\t<_handleItemAddFailed set=\"method\" line=\"84\"><f a=\"message\">\n\t<c path=\"mohu.messages.Message\"/>\n\t<e path=\"Void\"/>\n</f></_handleItemAddFailed>\n\t<_handleItemRemoveClicked set=\"method\" line=\"89\"><f a=\"message\">\n\t<c path=\"mohu.messages.Message\"/>\n\t<e path=\"Void\"/>\n</f></_handleItemRemoveClicked>\n\t<_handleItemRemoveCompleted set=\"method\" line=\"95\"><f a=\"message\">\n\t<c path=\"mohu.messages.Message\"/>\n\t<e path=\"Void\"/>\n</f></_handleItemRemoveCompleted>\n\t<_handleItemRemoveFailed set=\"method\" line=\"100\"><f a=\"message\">\n\t<c path=\"mohu.messages.Message\"/>\n\t<e path=\"Void\"/>\n</f></_handleItemRemoveFailed>\n\t<setModel set=\"method\" line=\"105\"><f a=\"value\">\n\t<c path=\"cms.mvcs.modules.content.model.ItemEditorModel\"/>\n\t<c path=\"cms.mvcs.modules.content.model.ItemEditorModel\"/>\n</f></setModel>\n\t<_handleModelValueUpdated set=\"method\" line=\"133\"><f a=\"message\">\n\t<c path=\"mohu.messages.Message\"/>\n\t<e path=\"Void\"/>\n</f></_handleModelValueUpdated>\n\t<setPanel set=\"method\" line=\"138\"><f a=\"value\">\n\t<c path=\"cms.mvcs.core.panel.model.PanelModel\"/>\n\t<c path=\"cms.mvcs.core.panel.model.PanelModel\"/>\n</f></setPanel>\n\t<_handleResetClicked set=\"method\" line=\"151\"><f a=\"message\">\n\t<c path=\"mohu.messages.Message\"/>\n\t<e path=\"Void\"/>\n</f></_handleResetClicked>\n\t<_handleSubmitClicked set=\"method\" line=\"155\"><f a=\"message\">\n\t<c path=\"mohu.messages.Message\"/>\n\t<e path=\"Void\"/>\n</f></_handleSubmitClicked>\n\t<_handleUpdateItemFailed set=\"method\" line=\"161\"><f a=\"message\">\n\t<c path=\"mohu.messages.Message\"/>\n\t<e path=\"Void\"/>\n</f></_handleUpdateItemFailed>\n\t<_handleUpdateItemCompleted set=\"method\" line=\"166\"><f a=\"message\">\n\t<c path=\"mohu.messages.Message\"/>\n\t<e path=\"Void\"/>\n</f></_handleUpdateItemCompleted>\n</class>";
cms.mvcs.core.popup.controller.ShowPopupCommand.__meta__ = { fields : { popupMessage : { inject : ["message"]}, popupContainer : { inject : ["popup"]}}};
cms.mvcs.core.popup.controller.ShowPopupCommand.__rtti = "<class path=\"cms.mvcs.core.popup.controller.ShowPopupCommand\" params=\"\">\n\t<extends path=\"cms.mvcs.controller.CMSCommand\"/>\n\t<popupMessage public=\"1\"><c path=\"cms.mvcs.core.popup.messages.PopupMessage\"/></popupMessage>\n\t<popupContainer public=\"1\"><c path=\"cms.mvcs.core.popup.view.controllers.IPopupContainerViewController\"/></popupContainer>\n\t<execute public=\"1\" set=\"method\" line=\"18\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></execute>\n</class>";
cms.mvcs.modules.content.model.ItemEditorModel.__rtti = "<class path=\"cms.mvcs.modules.content.model.ItemEditorModel\" params=\"\">\n\t<extends path=\"cms.mvcs.core.panel.model.PanelContentModel\"/>\n\t<type public=\"1\" set=\"setType\"><c path=\"cms.mvcs.core.api.model.vo.TypeVO\"/></type>\n\t<id public=\"1\" set=\"setID\"><c path=\"Int\"/></id>\n\t<alias public=\"1\" set=\"setAlias\"><c path=\"String\"/></alias>\n\t<value public=\"1\" set=\"setValue\"><c path=\"Hash\"><d/></c></value>\n\t<onTypeUpdated public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onTypeUpdated>\n\t<onIDUpdated public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onIDUpdated>\n\t<onAliasUpdated public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onAliasUpdated>\n\t<onValueUpdated public=\"1\" set=\"null\"><c path=\"mohu.messages.Dispatcher\"/></onValueUpdated>\n\t<setType set=\"method\" line=\"40\"><f a=\"value\">\n\t<c path=\"cms.mvcs.core.api.model.vo.TypeVO\"/>\n\t<c path=\"cms.mvcs.core.api.model.vo.TypeVO\"/>\n</f></setType>\n\t<setID set=\"method\" line=\"47\"><f a=\"value\">\n\t<c path=\"Int\"/>\n\t<c path=\"Int\"/>\n</f></setID>\n\t<setAlias set=\"method\" line=\"54\"><f a=\"value\">\n\t<c path=\"String\"/>\n\t<c path=\"String\"/>\n</f></setAlias>\n\t<setValue set=\"method\" line=\"61\"><f a=\"value\">\n\t<c path=\"Hash\"><d/></c>\n\t<c path=\"Hash\"><d/></c>\n</f></setValue>\n\t<new public=\"1\" set=\"method\" line=\"26\"><f a=\"?type:?id:?alias:?value\">\n\t<c path=\"cms.mvcs.core.api.model.vo.TypeVO\"/>\n\t<c path=\"Int\"/>\n\t<c path=\"String\"/>\n\t<c path=\"Hash\"><d/></c>\n\t<e path=\"Void\"/>\n</f></new>\n</class>";
cms.mvcs.controller.ErrorCommand.__meta__ = { fields : { errorMessage : { inject : ["message"]}}};
cms.mvcs.controller.ErrorCommand.__rtti = "<class path=\"cms.mvcs.controller.ErrorCommand\" params=\"\">\n\t<extends path=\"cms.mvcs.controller.CMSCommand\"/>\n\t<errorMessage public=\"1\"><c path=\"cms.mvcs.messages.ErrorMessage\"/></errorMessage>\n\t<execute public=\"1\" set=\"method\" line=\"16\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></execute>\n</class>";
core.Xml.enode = new core.EReg("^<([a-zA-Z0-9:_-]+)","");
core.Xml.ecdata = new core.EReg("^<!\\[CDATA\\[","i");
core.Xml.edoctype = new core.EReg("^<!DOCTYPE ","i");
core.Xml.eend = new core.EReg("^</([a-zA-Z0-9:_-]+)>","");
core.Xml.epcdata = new core.EReg("^[^<]+","");
core.Xml.ecomment = new core.EReg("^<!--","");
core.Xml.eprolog = new core.EReg("^<\\?[^\\?]+\\?>","");
core.Xml.eattribute = new core.EReg("^\\s*([a-zA-Z0-9:_-]+)\\s*=\\s*([\"'])([^\\2]*?)\\2","");
core.Xml.eclose = new core.EReg("^[ \r\n\t]*(>|(/>))","");
core.Xml.ecdata_end = new core.EReg("\\]\\]>","");
core.Xml.edoctype_elt = new core.EReg("[\\[|\\]>]","");
core.Xml.ecomment_end = new core.EReg("-->","");
cms.Main.main()