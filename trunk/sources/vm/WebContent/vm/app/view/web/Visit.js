/**
 * Class信息
 */
Ext.define('ExtJs.view.web.Visit',{
	extend : 'Ext.panel.Panel',
	alias : 'widget.visit',
	id : 'thread',
	initComponent: function() {
	var vstore = Ext.create('ExtJs.store.web.VisitSizeStore',{storeId:'vit'});
	//vstore.load();
	var visitGridStore =Ext.create('ExtJs.store.web.VisitStore',{storeId:'vits'});
	Ext.apply(this, {	
		
		items : [{
				id : 'visitsizechart',
				xtype : 'chart',
				width: 500,
				height: 300,
				store: vstore,
				legend:true,
					axes: [
			        {
			            title: '访问量',
			            type: 'Numeric',
			            position: 'left',
			            fields: ['size']
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
				            title : '访问量',
				            axis: 'left',
				            xField: 'date',
				            yField: 'size',
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
				     
			    ]
				},
				{
				xtype : 'grid',
				id : 'visitgrid',
				store : visitGridStore,
				width: 620,
				title:'访问详细信息',
				columns:[
					{header:'ID标号',dataIndex:'id'},
					{header:'创建时间',dataIndex:'createTime'}
					
				],
				bbar: Ext.create('Ext.PagingToolbar', {
				
		            store: visitGridStore,
		            displayInfo: true,
		            displayMsg: '当前 {0} - {1} / {2}',
		            emptyMsg: "没有数据"
		        })
				
				}
				
				]
			    

	});
	this.callParent(arguments);
	}
	
})