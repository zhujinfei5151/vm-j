/**
 * 框架控制层
 */
Ext.define('ExtJs.controller.FrameControl',{
	extend: 'Ext.app.Controller',
	views: [
		//框架
		'Frame',
		'jvm.Summary',
		'jvm.Class',
		'jvm.Thread',
		'jvm.Memory',
		'web.Web',
		'web.Visit'
    ],
    stores:['jvm.ClassStore','jvm.ThreadStore','jvm.MemoryStore','jvm.MemorysStore',
    'web.VisitStore','web.VisitSizeStore'
    ],
    models:['jvm.ClassModel','jvm.ThreadModel','jvm.MemoryModel','jvm.MemorysModel',
    'web.VisitModel','web.VisitSizeModel'
    ],
    refs: [
    	{
            ref: 'frame',
            selector: 'frame'
    	}
//        },
//        {
//            ref: 'summary',
//            selector: 'summary'
//        },
//        {
//            ref: 'class',
//            selector: 'class'
//        }
//        ,
//        {
//            ref: 'thread',
//            selector: 'thread'
//        }
//        ,
//        {
//            ref: 'classStore',
//            selector: 'classStore'
//        }
//        ,
//        {
//            ref: 'threadStore',
//            selector: 'threadStore'
//        }
        
    ]
    ,
     init: function () {
        this.control({
            'viewport > panel splitbutton > menu': {
                click: this.onPanelRendered
            }
        	
        	
        });
     },
     
     onPanelRendered: function(meun, item,e,eOpts) {
       // console.log('The panel was rendered'+item.text+item.id);
        var moduleTabId = "meun"+item.id;
        //获得tabpanel对象
        var frame_center = Ext.getCmp('frame').getComponent('frame_center');
        //通过编号获得面板
        var tab = frame_center.getComponent(moduleTabId);
        
        if(!tab&&item.id==1){//JVM摘要
        		tab = frame_center.add({
        					xtype:'summary',
        					title:item.text,
        					id:moduleTabId,
        					closable:true,
        					x:200	
        				});
 
        }else if(!tab&&item.id==4){
        	tab = frame_center.add({
        					xtype:'class',
        					title:item.text,
        					id:moduleTabId,
        					closable:true,
        					x:200
        						
        				});
        	tab.getComponent('classchart').store.load();
        	
        	//5秒循环加载
	        setInterval(function() {
	        	if(tab.getComponent('classchart')==null)
	        	  return false;
	        	tab.getComponent('classchart').store.load();
	        	
	        	Ext.Ajax.request({
				    url: '../servlet/class.getclass',
				    async:false,
				    success: function(response){
				    	var jsonResult = Ext.decode(response.responseText);
				       tab.getComponent('formname').getForm().setValues(jsonResult);
				    }
				});
	         }, 5000);
	         
        }
        else if(!tab&&item.id==3){
        	tab = frame_center.add({
        					xtype:'thread',
        					title:item.text,
        					id:moduleTabId,
        					closable:true,
        					x:200
        						
        				});
        	var vstore =tab.getComponent('threadchart').store;
        	vstore.load();
        	tab.getComponent('threadgrid').store.load();
        	//5秒循环加载
	        setInterval(function() {
	        	if(tab.getComponent('threadchart')==null)
	        	  return false;
	        	vstore.load();
	         }, 5000);
	         
	         
        
        }
        else if(!tab&&item.id==2){
        	tab = frame_center.add({
        					xtype:'memory',
        					title:item.text,
        					id:moduleTabId,
        					closable:true,
        					x:200
        						
        				});
        	var vstore =tab.getComponent('memorychart').store;
        	vstore.load();
        	var vstores =tab.getComponent('memoryschart').store;
        	vstores.load();
        	//5秒循环加载
	        setInterval(function() {
	        	if(tab.getComponent('memorychart')==null)
	        	  return false;
	        	vstore.load();
	        	vstores.load();
	        	Ext.Ajax.request({
				    url: '../servlet/memory.getmemory',
				    async:false,
				    success: function(response){
				    	var jsonResult = Ext.decode(response.responseText);
				       tab.getComponent('formname').getForm().setValues(jsonResult);
				    }
				    })
	         }, 5000);
	         
	         
        
        }
         else if(!tab&&item.id==11){
        	tab = frame_center.add({
        					xtype:'web',
        					title:item.text,
        					id:moduleTabId,
        					closable:true,
        					x:200
        						
        				});
        	

        }
        else if(!tab&&item.id==12){
        	tab = frame_center.add({
        					xtype:'visit',
        					title:item.text,
        					id:moduleTabId,
        					closable:true,
        					x:200
        						
        				});
        	var vstore =tab.getComponent('visitsizechart').store;
        	vstore.load();
        	tab.getComponent('visitgrid').store.load();
        	//5秒循环加载
	        setInterval(function() {
	        	if(tab.getComponent('visitsizechart')==null)
	        	  return false;
	        	vstore.load();
	         }, 5000);
	         
	         
        
        }
        
        frame_center.setActiveTab(tab);
    }
     
});