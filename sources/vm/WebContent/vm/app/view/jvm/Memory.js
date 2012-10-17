/**
 * Class信息
 */
Ext.define('ExtJs.view.jvm.Memory',{
	extend : 'Ext.panel.Panel',
	alias : 'widget.memory',
	id : 'memory',
	initComponent: function() {
	var vstore = Ext.create('ExtJs.store.jvm.MemoryStore',{storeId:'m'});
	//vstore.load();
	var vstores = Ext.create('ExtJs.store.jvm.MemorysStore',{storeId:'ms'});
	Ext.apply(this, {	
		layout:{
			type:'table',
			columns:2
		},
		items : [{
				id : 'memorychart',
				xtype : 'chart',
				width: 500,
				height: 300,
				store: vstore,
				legend:true,
					axes: [
			        {
			            title: '内存',
			            type: 'Numeric',
			            position: 'left',
			            fields: ['used']
			        },
			        {
			            title: '时间',
			            type: 'Category',
			            position: 'bottom',
			            fields: ['date']
			            //grid: true
			        }
			   	
			        ],
			        series: [
				        {
				           type: 'area',
				             
				            title : '使用内存',
				            axis: 'left',
				            xField: 'date',
				            yField: 'used',
//				            tips: {
//			                    trackMouse: true,
//			                    width: 110,
//			                    height: 25,
//			                    renderer: function(storeItem, item) {
//			                        this.setTitle(item.value[1] );
//			                    }
//			                },
				            markerConfig: {
			                    radius: 1,
			                    size: 1
			                }
				           
				        }

			    ]
				},
				{
				 
					id : 'formname',
					xtype: 'form',
					width: 500,
					height: 200,
					 items: [{
						            border: false,
						            bodyStyle: 'padding:5px;background-color:transparent;',
						            title: '详细信息',
						            items:[
						            	
						            {// 当前时间
						            	xtype:'textfield',
						            	name:'date',	
						                fieldLabel: '当前时间',
						                anchor:'95%',
						                readOnly: true,
						                maxLength: 20
						           },
						            {// 当前装入类
						            	xtype:'textfield',
						            	name:'init',	
						                fieldLabel: '初始化大小',
						                anchor:'95%',
						                readOnly: true,
						                maxLength: 20
						           },{// 已装入类总数
						        	   xtype:'textfield',
						        	   name:'used',
						               fieldLabel:'使用大小',
						               anchor:'95%',
						               readOnly: true,
						          		 maxLength: 20
						           }
						           ,{// 已卸载类总数
						        	   xtype:'textfield',
						        	   name:'max',
						               fieldLabel:'最大分配大小',
						               anchor:'95%',
						               readOnly: true,
						          		 maxLength: 20
						           }
						           
						           ]
						    }]
				
				},
				{
				id : 'memoryschart',
				xtype : 'chart',
				width: 500,
				height: 300,
				store: vstores,
				legend:true,
					axes: [
			        {
			            title: '内存',
			            type: 'Numeric',
			            position: 'left',
			            fields: ['used']
			        },
			        {
			            title: '内存池',
			            type: 'Category',
			            position: 'bottom',
			            fields: ['name']
			            //grid: true
			        }
			   	
			        ],
			        series: [
				        {
				           type: 'column',
            				axis: 'left',
            				 xField: 'name',
           					 yField: 'used'
				           
				        }

			    ]
				}
				
				]
			    

	});
	this.callParent(arguments);
	}
	
})