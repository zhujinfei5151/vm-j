
Ext.define('ExtJs.store.jvm.ThreadStore',{
	extend:'Ext.data.Store',
	alias : 'widget.threadStore',
	pageSize:10,
	model:'ExtJs.model.jvm.ThreadModel',
	autoLoad:false,
	//autoSync: false,
    proxy: {
		        type: 'ajax',
		        url : '../servlet/thread',
		       
		        reader: {
		          type: 'json'
		       }
		   }
	
})