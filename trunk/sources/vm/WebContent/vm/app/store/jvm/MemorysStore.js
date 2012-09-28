
Ext.define('ExtJs.store.jvm.MemorysStore',{
	extend:'Ext.data.Store',
	alias : 'widget.memorysStore',
	//pageSize:10,
	model:'ExtJs.model.jvm.MemorysModel',
	autoLoad:false,
	//autoSync: false,
    proxy: {
		        type: 'ajax',
		        url : '../servlet/memory.memorys',
		       
		        reader: {
		          type: 'json'
		       }
		   }
	
})