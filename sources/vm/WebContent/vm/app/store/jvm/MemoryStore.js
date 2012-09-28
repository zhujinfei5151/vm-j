
Ext.define('ExtJs.store.jvm.MemoryStore',{
	extend:'Ext.data.Store',
	alias : 'widget.memoryStore',
	//pageSize:10,
	model:'ExtJs.model.jvm.MemoryModel',
	autoLoad:false,
	//autoSync: false,
    proxy: {
		        type: 'ajax',
		        url : '../servlet/memory.getmemorys',
		       
		        reader: {
		          type: 'json'
		       }
		   }
	
})