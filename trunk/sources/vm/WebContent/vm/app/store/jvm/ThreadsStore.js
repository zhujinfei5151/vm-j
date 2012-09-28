
Ext.define('ExtJs.store.jvm.ThreadsStore',{
	extend:'Ext.data.Store',
	alias : 'widget.threadsStore',
	pageSize:10,
	model:'ExtJs.model.jvm.ThreadsModel',
	autoLoad:false,
	//autoSync: false,
    proxy: {
		        type: 'ajax',
		        url : '../servlet/thread.getgrid',
		       
		         reader: {
			            type: 'json',
			            root: 'resultList',
			            totalProperty:'totalCount'
			        }
		   }
	
})