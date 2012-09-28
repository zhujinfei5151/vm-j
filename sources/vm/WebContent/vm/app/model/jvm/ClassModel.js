
Ext.define('ExtJs.model.jvm.ClassModel', {
        extend: 'Ext.data.Model',
        fields: [
        	{name :'loaded_class_count',type: 'int'}, 
        	{name :'total_loaded_class_count',type: 'int'}, 
        	{name : 'date',type: 'string'}
        ] 
    });