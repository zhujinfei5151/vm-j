Ext.define('ExtJs.view.Frame',{
	extend : 'Ext.container.Viewport',
	alias : 'widget.frame',
	id : 'frame',
	items : [{
				// 北
				id : 'frame_north',
				// 方位
				region : 'north',
				// 布局
				layout : 'fit',
				// 高度
				height : 78,
				// 边框
				border : false,
				bbar:[
				 	{
				 		xtype: 'splitbutton',
				 		text :'系统系信息',
				 		menu: new Ext.menu.Menu({
						        items: [
//						       	    {text: '概述',
//						            id : '0'
//						            },
						            {text: 'JVM摘要',
						            id : '1'
						            },
						            {text: '内存信息',
						             id : '2'},
						             {text: '线程信息',
						             id : '3'},
						             {text: '类信息',
						             id : '4'}
						        ]
						    })
				 		
				 		},
				 	{
				 		xtype: 'splitbutton',
				 		text :'web信息',
				 		menu: new Ext.menu.Menu({
						        items: [

						            {text: 'Web服务器信息',
						            id : '11'
						            },
						            {text: '访问信息',
						             id : '12'}
						        ]
						    })
				 	}
				 	]
				}, {
					// 中
					// 编号
					id : 'frame_center',
					// 方位
					region : 'center',
					// 布局
					layout : 'fit',
					xtype : 'tabpanel',
					items : [{
						title : '欢迎',
						html : "VM"
					}]
					
					
					
				}
						
					]
	

});