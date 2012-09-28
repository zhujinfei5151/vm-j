Ext.define('ExtJs.store.jvm.SummaryStore',{
	extend:'Ext.data.Store',
	alias : 'widget.summaryStore',
	pageSize:10,
	model:'ExtJs.model.jvm.SummaryModel',
	autoLoad:false,
	//autoSync: false,
    proxy: {
		        type: 'ajax',
		        url : 'data/windows.jsp',
		       
		        reader: {
		          type: 'json'
		       }
		   }
})