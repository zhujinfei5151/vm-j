Ext.define('ExtJs.store.web.VisitStore',{
	extend:'Ext.data.Store',
	alias : 'widget.visitStore',
	pageSize:10,
	model:'ExtJs.model.web.VisitModel',
	autoLoad:false,
	//autoSync: false,
    proxy: {
		        type: 'ajax',
		        url : '../servlet/web.visit',
		       
		        reader: {
			            type: 'json',
			            root: 'resultList',
			            totalProperty:'totalCount'
			        }
		   }
	
})