
Ext.define('ExtJs.model.jvm.MemorysModel', {
        extend: 'Ext.data.Model',
        fields: [
        	{name :'init',type: 'int'}, 
        	{name :'used',type: 'int'}, 
        	{name :'committed',type: 'int'}, 
        	{name :'max',type: 'int'}, 
        	{name : 'name',type: 'string'}
        ] 
    });