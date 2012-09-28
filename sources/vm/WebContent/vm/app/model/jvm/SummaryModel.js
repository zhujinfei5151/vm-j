Ext.define('ExtJs.model.jvm.SummaryModel', {
        extend: 'Ext.data.Model',
        fields: ['id', 'os', 'frame','count'] ,
        idProperty: 'id'
    });