
Ext.define('ExtJs.model.jvm.ThreadModel', {
        extend: 'Ext.data.Model',
        fields: [
        	{name :'total_started_thread_count',type: 'int'}, 
        	{name :'thread_count',type: 'int'}, 
        	{name : 'date',type: 'string'}
        ] 
    });