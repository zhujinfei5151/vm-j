
Ext.define('ExtJs.model.jvm.MemoryModel', {
        extend: 'Ext.data.Model',
        fields: [
        	{name :'init',type: 'int'}, 
        	{name :'used',type: 'int'}, 
        	{name :'committed',type: 'int'}, 
        	{name :'max',type: 'int'}, 
        	{name : 'date',type: 'string'}
        ] 
    });