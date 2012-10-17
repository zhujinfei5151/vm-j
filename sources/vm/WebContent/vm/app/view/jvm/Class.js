/**
 * Class信息
 */
Ext.define('ExtJs.view.jvm.Class',{
	extend : 'Ext.panel.Panel',
	alias : 'widget.class',
	id : 'class',
	initComponent: function() {
	var vstore = Ext.create('ExtJs.store.jvm.ClassStore',{storeId:'v'});
	//vstore.load();
	
	Ext.apply(this, {	
		layout:{
			type:'table',
			columns:2
		},
		items : [{
				id : 'classchart',
				xtype : 'chart',
				width: 500,
				height: 300,
				store: vstore,
				legend:true,
					axes: [
			        {
			            title: '类个数',
			            type: 'Numeric',
			            position: 'left',
			            fields: ['loaded_class_count','total_loaded_class_count']
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
				           type: 'line',
				              highlight: {
				                size: 7,
				                radius: 7
				            },
				            title : '已装入类总数',
				            axis: 'left',
				            xField: 'date',
				            yField: 'total_loaded_class_count',
				            tips: {
			                    trackMouse: true,
			                    width: 110,
			                    height: 25,
			                    renderer: function(storeItem, item) {
			                        this.setTitle(item.value[1] +' 个');
			                    }
			                },
				            markerConfig: {
			                    radius: 1,
			                    size: 1
			                }
				           
				        }
				        ,
				        {
				            type: 'line',
				        	title : '当前装入类',
					        axis: 'left',
				            xField: 'date',
				            yField: ['loaded_class_count'],
				             tips: {
			                    trackMouse: true,
			                    width: 110,
			                    height: 25,
			                    renderer: function(storeItem, item) {
			                        this.setTitle(item.value[1]+' 个' );
			                    }
			                },
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
						            	name:'loaded_class_count',	
						                fieldLabel: '当前装入类',
						                anchor:'95%',
						                readOnly: true,
						                maxLength: 20
						           },{// 已装入类总数
						        	   xtype:'textfield',
						        	   name:'total_loaded_class_count',
						               fieldLabel:'已装入类总数',
						               anchor:'95%',
						               readOnly: true,
						          		 maxLength: 20
						           }
						           ,{// 已卸载类总数
						        	   xtype:'textfield',
						        	   name:'un_loaded_class_count',
						               fieldLabel:'已卸载类总数',
						               anchor:'95%',
						               readOnly: true,
						          		 maxLength: 20
						           }
						           
						           ]
						    }]
				
				}
				
				]
			    

	});
	this.callParent(arguments);
	}
	
})