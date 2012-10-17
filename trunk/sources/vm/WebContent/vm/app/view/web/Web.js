

Ext.define('ExtJs.view.web.Web',{

	extend : 'Ext.panel.Panel',
	alias : 'widget.web',
	id : 'web',
	initComponent: function() {
		var json='' ;
		Ext.Ajax.request({
	    url: '../servlet/web',
	    async:false,
	    success: function(response){
	    	var jsonResult = Ext.decode(response.responseText);
	        json =jsonResult;
	    }
		});
		Ext.apply(this, {	
			layout:{
				type:'table',
				columns:2
			},
			items : [
					{
						width : 550,
						height : 200,
						frame : true,
						collapsible: true,
					 	title : 'Web系统信息',
					 	items:[

					 		{
					       		 xtype: 'label',
					        	 html : '<br>'
					 		},
					 		{
					        	xtype: 'label',
					        	text: '服务器时间：',
					        	margin: '0 0 0 10',
					        	style: {
					        		fontSize: '14px' ,
					        		fontWeight :'bold'
					        	}
					        	
					        
					 		},
					 		{
					        xtype: 'label',
					        text: json.localeTime,//
					        margin: '0 30 0 10'
					 		},
					 	
					 		{
					       		 xtype: 'label',
					        	 html : '<br>'
					 		},
					 		{
					        	xtype: 'label',
					        	text: '服务器名称：',
					        	margin: '0 0 0 10',
					        	style: {
					        		fontSize: '14px' ,
					        		fontWeight :'bold'
					        	}
					        	
					        
					 		},
					 		{
					        xtype: 'label',
					        text: json.serverName,//
					        margin: '0 30 0 10'
					 		},
					 		{
					       		 xtype: 'label',
					        	 html : '<br>'
					 		},
					 		{
					        	xtype: 'label',
					        	text: '服务器端口：',
					        	margin: '0 0 0 10',
					        	style: {
					        		fontSize: '14px' ,
					        		fontWeight :'bold'
					        	}
					        	
					        
					 		},
					 		{
					        xtype: 'label',
					        text: json.serverPort,//
					        margin: '0 30 0 10'
					 		}
					 		,
					 		{
					       		 xtype: 'label',
					        	 html : '<br>'
					 		},
					 		{
					        	xtype: 'label',
					        	text: '协议名：',
					        	margin: '0 0 0 10',
					        	style: {
					        		fontSize: '14px' ,
					        		fontWeight :'bold'
					        	}
					        	
					        
					 		},
					 		{
					        xtype: 'label',
					        text: json.scheme,//
					        margin: '0 30 0 10'
					 		}
					 		,
					 		{
					       		 xtype: 'label',
					        	 html : '<br>'
					 		},
					 		{
					        	xtype: 'label',
					        	text: '真实的物理路径：',
					        	margin: '0 0 0 10',
					        	style: {
					        		fontSize: '14px' ,
					        		fontWeight :'bold'
					        	}
					        	
					        
					 		},
					 		{
					        xtype: 'label',
					        text: json.realPath,//
					        margin: '0 30 0 10'
					 		}
					 		,
					 		{
					       		 xtype: 'label',
					        	 html : '<br>'
					 		},
					 		{
					        	xtype: 'label',
					        	text: '服务器主机名：',
					        	margin: '0 0 0 10',
					        	style: {
					        		fontSize: '14px' ,
					        		fontWeight :'bold'
					        	}
					        	
					        
					 		},
					 		{
					        xtype: 'label',
					        text: json.localName,//
					        margin: '0 30 0 10'
					 		}
					 		,
					 		{
					       		 xtype: 'label',
					        	 html : '<br>'
					 		},
					 		{
					        	xtype: 'label',
					        	text: '服务器端口：',
					        	margin: '0 0 0 10',
					        	style: {
					        		fontSize: '14px' ,
					        		fontWeight :'bold'
					        	}
					        	
					        
					 		},
					 		{
					        xtype: 'label',
					        text: json.localport,//
					        margin: '0 30 0 10'
					 		}
					 		,
					 		{
					       		 xtype: 'label',
					        	 html : '<br>'
					 		},
					 		{
					        	xtype: 'label',
					        	text: '服务器地址 IP：',
					        	margin: '0 0 0 10',
					        	style: {
					        		fontSize: '14px' ,
					        		fontWeight :'bold'
					        	}
					        	
					        
					 		},
					 		{
					        xtype: 'label',
					        text: json.localAddr,//
					        margin: '0 30 0 10'
					 		}
					 		,
					 		{
					       		 xtype: 'label',
					        	 html : '<br>'
					 		},
					 		{
					        	xtype: 'label',
					        	text: '地域：',
					        	margin: '0 0 0 10',
					        	style: {
					        		fontSize: '14px' ,
					        		fontWeight :'bold'
					        	}
					        	
					        
					 		},
					 		{
					        xtype: 'label',
					        text: json.locale,//
					        margin: '0 30 0 10'
					 		}
					 		,
					 		{
					       		 xtype: 'label',
					        	 html : '<br>'
					 		},
					 		{
					        	xtype: 'label',
					        	text: '编码方式：',
					        	margin: '0 0 0 10',
					        	style: {
					        		fontSize: '14px' ,
					        		fontWeight :'bold'
					        	}
					        	
					        
					 		},
					 		{
					        xtype: 'label',
					        text: json.characterEncoding,//
					        margin: '0 30 0 10'
					 		}
					 		
					 	
					 	]
					}
					]
		});
		this.callParent(arguments);
	}
	
})