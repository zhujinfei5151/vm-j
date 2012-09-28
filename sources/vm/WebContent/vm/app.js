Ext.Loader.setConfig({enabled:true});
Ext.application({
    name: 'ExtJs',
	controllers: [
	        'FrameControl'
	    ],
    appFolder: 'app',
    launch: function() {
        Ext.create('ExtJs.view.Frame',{id:'frame'});
    }

});
