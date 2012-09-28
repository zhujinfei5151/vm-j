
Ext.define('ExtJs.store.jvm.ClassStore',{
	extend:'Ext.data.Store',
	alias : 'widget.classStore',
	//pageSize:10,
	model:'ExtJs.model.jvm.ClassModel',
	autoLoad:false,
	//autoSync: false,
    proxy: {
		        type: 'ajax',
		        url : '../servlet/class',
		       
		        reader: {
		          type: 'json'
		       }
		   }
	
})