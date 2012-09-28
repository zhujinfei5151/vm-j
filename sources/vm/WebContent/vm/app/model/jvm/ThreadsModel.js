
Ext.define('ExtJs.model.jvm.ThreadsModel', {
        extend: 'Ext.data.Model',
        fields: ["threadName","threadId","blockedTime","blockedCount","waitedTime","waitedCount","lockOwnerId","inNative"
        ,"suspended","threadState"
        ] 
    });