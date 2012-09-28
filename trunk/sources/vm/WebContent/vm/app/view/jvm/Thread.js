/**
 * Class信息
 */
Ext.define('ExtJs.view.jvm.Thread',{
	extend : 'Ext.panel.Panel',
	alias : 'widget.thread',
	id : 'thread',
	initComponent: function() {
	var vstore = Ext.create('ExtJs.store.jvm.ThreadStore',{storeId:'vt'});
	//vstore.load();
	var threadGridStore =Ext.create('ExtJs.store.jvm.ThreadsStore',{storeId:'vts'});
	Ext.apply(this, {	
		
		items : [{
				id : 'threadchart',
				xtype : 'chart',
				width: 500,
				height: 300,
				store: vstore,
				legend:true,
					axes: [
			        {
			            title: '线程个数',
			            type: 'Numeric',
			            position: 'left',
			            fields: ['thread_count','total_started_thread_count']
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
				            title : '活动线程',
				            axis: 'left',
				            xField: 'date',
				            yField: 'thread_count',
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
				        	title : '峰',
					        axis: 'left',
				            xField: 'date',
				            yField: ['total_started_thread_count'],
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
				xtype : 'grid',
				id : 'threadgrid',
				store : threadGridStore,
				width: 620,
				title:'线程详细信息',
				columns:[
					{header:'线程名称',dataIndex:'threadName'},
					{header:'状态',dataIndex:'threadState'},
					{header:'阻塞时间',dataIndex:'blockedTime'},
					{header:'阻塞次数',dataIndex:'blockedCount'},
					{header:'等待时间',dataIndex:'waitedTime'},
					{header:'等待次数',dataIndex:'waitedCount'}
				],
				bbar: Ext.create('Ext.PagingToolbar', {
				
		            store: threadGridStore,
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