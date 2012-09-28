Ext.define('ExtJs.store.web.VisitSizeStore',{
	extend:'Ext.data.Store',
	alias : 'widget.visitStore',
	pageSize:10,
	model:'ExtJs.model.web.VisitSizeModel',
	autoLoad:false,
	//autoSync: false,
    proxy: {
		        type: 'ajax',
		        url : '../servlet/web.visitsize',
		       
		        reader: {
		          type: 'json'
		       }
		   }
	
})