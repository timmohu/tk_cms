package cms.mvcs;

/**
 * ...
 * @author Tim Kendrick
 */

import cms.mvcs.controller.ErrorCommand;
import cms.mvcs.controller.InitCommand;
import cms.mvcs.controller.StartupCommand;
import cms.mvcs.core.api.controller.content.RetrieveItemsCommand;
import cms.mvcs.core.api.services.content.IRetrieveItemsService;
import cms.mvcs.core.api.services.content.RetrieveItemsService;
import cms.mvcs.core.popup.controller.HidePopupCommand;
import cms.mvcs.core.popup.controller.ShowPopupCommand;
import cms.mvcs.messages.ErrorMessage;
import cms.mvcs.modules.content.controller.AddReferenceCommand;


import cms.mvcs.core.api.model.vo.FieldVO;
import cms.mvcs.core.api.model.vo.ItemVO;
import cms.mvcs.core.api.model.vo.ListVO;
import cms.mvcs.core.api.model.vo.ReferenceVO;
import cms.mvcs.core.api.model.vo.SmartlistVO;
import cms.mvcs.core.api.model.vo.TypeVO;

import cms.mvcs.core.api.controller.content.RetrieveItemCommand;
import cms.mvcs.core.api.controller.content.UpdateItemCommand;

import cms.mvcs.core.api.controller.structure.RetrieveTypesCommand;

import cms.mvcs.core.api.services.content.IRetrieveItemService;
import cms.mvcs.core.api.services.content.IUpdateItemService;
import cms.mvcs.core.api.services.content.RetrieveItemService;
import cms.mvcs.core.api.services.content.UpdateItemService;

import cms.mvcs.core.api.services.structure.IRetrieveTypesService;
import cms.mvcs.core.api.services.structure.RetrieveTypesService;

import cms.mvcs.core.authentication.model.AuthenticationModel;

import cms.mvcs.core.encoding.services.IEncoderService;
import cms.mvcs.core.encoding.services.XMLEncoder;

import cms.mvcs.core.panel.controller.AddPanelCommand;
import cms.mvcs.core.panel.controller.MovePanelCommand;
import cms.mvcs.core.panel.controller.RemovePanelCommand;

import cms.mvcs.model.ConfigModel;

import cms.mvcs.modules.content.controller.AddItemEditorPanelCommand;

import cms.mvcs.modules.structure.model.TypesModel;

import mohu.messages.Dispatcher;

import mohu.mvcs.Hub;

import mohu.mvcs.view.IContextView;














class CMSHub extends Hub {
	
	public var onError(default, null):Dispatcher;
	
	public var onInit(default, null):Dispatcher;
	
	public var onStartup(default, null):Dispatcher;
	
	public var onRetrieveTypes(default, null):Dispatcher;
	public var onRetrieveTypesFailed(default, null):Dispatcher;
	public var onRetrieveTypesCompleted(default, null):Dispatcher;
	
	public var onRetrieveItem(default, null):Dispatcher;
	public var onRetrieveItemFailed(default, null):Dispatcher;
	public var onRetrieveItemCompleted(default, null):Dispatcher;
	
	public var onRetrieveItems(default, null):Dispatcher;
	public var onRetrieveItemsFailed(default, null):Dispatcher;
	public var onRetrieveItemsCompleted(default, null):Dispatcher;
	
	public var onUpdateItem(default, null):Dispatcher;
	public var onUpdateItemFailed(default, null):Dispatcher;
	public var onUpdateItemCompleted(default, null):Dispatcher;
	
	public var onShowPopup(default, null):Dispatcher;
	public var onHidePopup(default, null):Dispatcher;
	
	public var onAddPanel(default, null):Dispatcher;
	public var onMovePanel(default, null):Dispatcher;
	public var onRemovePanel(default, null):Dispatcher;
	
	public var onAddItemEditorPanel(default, null):Dispatcher;
	
	public var onAddReference(default, null):Dispatcher;
	public var onAddReferenceFailed(default, null):Dispatcher;
	public var onAddReferenceCompleted(default, null):Dispatcher;
	
	public var onRemoveReference(default, null):Dispatcher;
	public var onRemoveReferenceFailed(default, null):Dispatcher;
	public var onRemoveReferenceCompleted(default, null):Dispatcher;
	
	public function new(contextView:IContextView) {
		super(contextView);
		
		initModel();
		initView();
		initController();
		initServices();
	}
	
	private function initModel():Void {
		injector.mapSingleton(ConfigModel);
		injector.mapSingleton(AuthenticationModel);
		injector.mapSingleton(TypesModel);
	}
	
	private function initView():Void {
		
	}
	
	private function initController():Void {
		
		onError = new Dispatcher(this);
		
		onInit = new Dispatcher(this);
		onStartup = new Dispatcher(this);
		
		onRetrieveTypes = new Dispatcher(this);
		onRetrieveTypesFailed = new Dispatcher(this);
		onRetrieveTypesCompleted = new Dispatcher(this);
		
		onRetrieveItem = new Dispatcher(this);
		onRetrieveItemFailed = new Dispatcher(this);
		onRetrieveItemCompleted = new Dispatcher(this);
		
		onRetrieveItems = new Dispatcher(this);
		onRetrieveItemsFailed = new Dispatcher(this);
		onRetrieveItemsCompleted = new Dispatcher(this);
		
		onUpdateItem = new Dispatcher(this);
		onUpdateItemFailed = new Dispatcher(this);
		onUpdateItemCompleted = new Dispatcher(this);
		
		onShowPopup = new Dispatcher(this);
		onHidePopup = new Dispatcher(this);
		
		onAddPanel = new Dispatcher(this);
		onMovePanel = new Dispatcher(this);
		onRemovePanel = new Dispatcher(this);
		
		onAddItemEditorPanel = new Dispatcher(this);
		
		onAddReference = new Dispatcher(this);
		onAddReferenceFailed = new Dispatcher(this);
		onAddReferenceCompleted = new Dispatcher(this);
		
		onRemoveReference = new Dispatcher(this);
		onRemoveReferenceFailed = new Dispatcher(this);
		onRemoveReferenceCompleted = new Dispatcher(this);
		
		commandMap.mapCommand(onError, ErrorCommand);
		commandMap.mapCommand(onInit, InitCommand);
		commandMap.mapCommand(onStartup, StartupCommand);
		
		commandMap.mapCommand(onRetrieveTypes, RetrieveTypesCommand);
		
		commandMap.mapCommand(onRetrieveItem, RetrieveItemCommand);
		commandMap.mapCommand(onRetrieveItems, RetrieveItemsCommand);
		commandMap.mapCommand(onUpdateItem, UpdateItemCommand);
		
		commandMap.mapCommand(onShowPopup, ShowPopupCommand);
		commandMap.mapCommand(onHidePopup, HidePopupCommand);
		
		commandMap.mapCommand(onAddPanel, AddPanelCommand);
		commandMap.mapCommand(onMovePanel, MovePanelCommand);
		commandMap.mapCommand(onRemovePanel, RemovePanelCommand);
		
		commandMap.mapCommand(onAddItemEditorPanel, AddItemEditorPanelCommand);
		
		commandMap.mapCommand(onAddReference, AddReferenceCommand);
	}
	
	private function initServices():Void {
		var classMappings:Hash<Class<Dynamic>> = new Hash<Class<Dynamic>>();
		classMappings.set("CMSTable", TypeVO);
		classMappings.set("CMSField", FieldVO);
		classMappings.set("CMSItem", ItemVO);
		classMappings.set("CMSReference", ReferenceVO);
		classMappings.set("CMSList", ListVO);
		classMappings.set("CMSSmartlist", SmartlistVO);
		injector.mapInstance(IEncoderService, new XMLEncoder(classMappings));
		
		injector.mapClass(IRetrieveTypesService, RetrieveTypesService);
		injector.mapClass(IRetrieveItemService, RetrieveItemService);
		injector.mapClass(IRetrieveItemsService, RetrieveItemsService);
		injector.mapClass(IUpdateItemService, UpdateItemService);
	}
	
}