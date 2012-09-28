
/**
 * Jvm的摘要信息
 */
Ext.define('ExtJs.view.jvm.Summary',{
	extend : 'Ext.panel.Panel',
	alias : 'widget.summary',
	id : 'summary',
	initComponent: function() {

		var json='' ;
		Ext.Ajax.request({
	    url: '../servlet/summary',
	    async:false,
	    success: function(response){
	    	var jsonResult = Ext.decode(response.responseText);
	        json =jsonResult;
	    }
		});
		Ext.apply(this, {		
				items : [
					{
						width : 550,
						height : 200,
						frame : true,
						collapsible: true,
					 	title : '操作系统信息',
					 	items:[
					 		{
					       		 xtype: 'label',
					        	 html : '<br>'
					 		},
					 		{
					        	xtype: 'label',
					        	text: '操作系统：',
					        	margin: '0 0 0 10',
					        	style: {
					        		fontSize: '14px' ,
					        		fontWeight :'bold'
					        	}
					        	
					        
					 		},
					 		{
					        xtype: 'label',
					        text: json.os.os_name + ' ' + json.os.os_version,//系统名称
					        margin: '0 30 0 10'
					 		}
					 		,{
					        xtype: 'label',
					       
					        text: '体系结构：',
					      	margin: '0 0 0 10',
					        style: {
					        		fontSize: '14px' ,
					        		fontWeight: 'bold'
					        	}
					 		},
					 		
					 		{
					        xtype: 'label',
					        text: json.os.os_arch,// 架构
					        margin: '0 0 0 10'
					        
					 		},
					 		
					 		{
					       		 xtype: 'label',
					        	 html : '<br><br>'
					 		},
					 		
					 		{
					        	xtype: 'label',
					        	text: '物理内存总量：',
					        	margin: '0 0 0 10',
					        	
					        	style: {
					        		fontSize: '14px' ,
					        		fontWeight :'bold'
					        	}
					        
					 		},
					 		{
						        xtype: 'label',
						        text: json.os.total_physical_memory_size,
						        margin: '0 30 0 10'
					 		}
					 		,{
						        xtype: 'label',
						        text: '可用物理内存：',
						     	
						        style: {
						        		fontSize: '14px' ,
						        		fontWeight :'bold'
						        		
						        	}
					 		},
					 		
					 		{
					        xtype: 'label',
					        text: json.os.free_physical_memory_size,
					        margin: '0 0 0 10'
					        
					 		},
					 		
					 		{
					       		 xtype: 'label',
					        	 html : '<br><br>'
					 		},
					 		
					 		{
					        	xtype: 'label',
					        	text: '处理器数目：',
					        	margin: '0 0 0 10',
					        
					        	style: {
					        		fontSize: '14px' ,
					        		fontWeight :'bold'
					        	}
					        
					 		},
					 		{
						        xtype: 'label',
						        text: json.os.available_processors,
						        margin: '0 30 0 10'
					 		}
					 		,{
						        xtype: 'label',
						        text: '分配的虚拟内存：',
						     	
						        style: {
						        		fontSize: '14px' ,
						        		fontWeight :'bold'
						        		
						        	}
					 		},
					 		
					 		{
					        xtype: 'label',
					        text: json.os.committed_virtual_memory_size,
					        margin: '0 0 0 10'
					        
					 		},
					 		
					 		{
					       		 xtype: 'label',
					        	 html : '<br><br>'
					 		},
					 		
					 		{
					        	xtype: 'label',
					        	text: '交换空间总量：',
					        	margin: '0 0 0 10',
					        	
					        	style: {
					        		fontSize: '14px' ,
					        		fontWeight :'bold'
					        	}
					        
					 		},
					 		{
						        xtype: 'label',
						        text: json.os.total_swap_space_size,
						        margin: '0 30 0 10',
						        format:'0,000'
					 		}
					 		,{
						        xtype: 'label',
						        text: '可交换空间：',
						     	
						        style: {
						        		fontSize: '14px' ,
						        		fontWeight :'bold'
						        		
						        	}
					 		},
					 		
					 		{
					        xtype: 'label',
					        text: json.os.free_swap_space_size,
					        margin: '0 0 0 10'
					        
					 		},
					 		
					 		{
					       		 xtype: 'label',
					        	 html : '<br><br>'
					 		}
					 		
					 		
					 		]
					 
					
					},
					{
					width : 550,
					height : 200,
					frame : true,
					collapsible: true,
				
					 title : 'JVM虚拟机信息',
					 items:[
					 		{
					       		 xtype: 'label',
					        	 html : '<br>'
					 		},
					 		{
					        	xtype: 'label',
					        	text: '虚拟机：',
					        	margin: '0 0 0 10',
					        	style: {
					        		fontSize: '14px' ,
					        		fontWeight :'bold'
					        	}
					        	
					        
					 		},
					 		{
					        xtype: 'label',
					        text: json.jvm.jvm_name+ " "+json.jvm.jvm_version,
					        margin: '0 30 0 10'
					 		}
					 		,{
					        xtype: 'label',
					       
					        text: '供应商：',
					      	margin: '0 0 0 10',
					        style: {
					        		fontSize: '14px' ,
					        		fontWeight: 'bold'
					        	}
					 		},
					 		
					 		{
					        xtype: 'label',
					        text: json.jvm.jvm_vendor,
					        margin: '0 0 0 10'
					        
					 		},
					 		
					 		{
					       		 xtype: 'label',
					        	 html : '<br><br>'
					 		},
					 		
					 		{
					        	xtype: 'label',
					        	text: '名称：',
					        	margin: '0 0 0 10',
					        	
					        	style: {
					        		fontSize: '14px' ,
					        		fontWeight :'bold'
					        	}
					        
					 		},
					 		{
						        xtype: 'label',
						        text: json.jvm.jvm_info,
						        margin: '0 30 0 10'
					 		}
					 		,{
						        xtype: 'label',
						        text: '连接名称：',
						     	
						        style: {
						        		fontSize: '14px' ,
						        		fontWeight :'bold'
						        		
						        	}
					 		},
					 		
					 		{
					        xtype: 'label',
					        text: json.jvm.jvm_specification_name,
					        margin: '0 0 0 10'
					        
					 		},
					 		
					 		{
					       		 xtype: 'label',
					        	 html : '<br><br>'
					 		},
					 		
					 		{
					        	xtype: 'label',
					        	text: '正常运行时间：',
					        	margin: '0 0 0 10',
					        
					        	style: {
					        		fontSize: '14px' ,
					        		fontWeight :'bold'
					        	}
					        
					 		},
					 		{
						        xtype: 'label',
						        text: json.os,
						        margin: '0 30 0 10'
					 		}
					 		,{
						        xtype: 'label',
						        text: '处理CUP时间：',
						     	
						        style: {
						        		fontSize: '14px' ,
						        		fontWeight :'bold'
						        		
						        	}
					 		},
					 		
					 		{
					        xtype: 'label',
					        text: json.thread.current_thread_cpu_time,
					        margin: '0 0 0 10'
					        
					 		},
					 		
					 		{
					       		 xtype: 'label',
					        	 html : '<br><br>'
					 		},
					 		
					 		{
					        	xtype: 'label',
					        	text: 'JIT编辑时间：',
					        	margin: '0 0 0 10',
					        	
					        	style: {
					        		fontSize: '14px' ,
					        		fontWeight :'bold'
					        	}
					        
					 		},
					 		{
						        xtype: 'label',
						        text: json.os,
						        margin: '0 30 0 10'
					 		}
					 		,{
						        xtype: 'label',
						        text: '编辑总时间：',
						     	
						        style: {
						        		fontSize: '14px' ,
						        		fontWeight :'bold'
						        		
						        	}
					 		},
					 		
					 		{
					        xtype: 'label',
					        text: json.thread.current_thread_user_time,
					        margin: '0 0 0 10'
					        
					 		},
					 		
					 		{
					       		 xtype: 'label',
					        	 html : '<br><br>'
					 		}
					 		
					 		
					 		
					 		]
					 
					
					},
					{
					width : 550,
					height : 200,
					frame : true,
					collapsible: true,
					
					 title : 'JAVA运行信息',
					 items:[
					 		{
					       		 xtype: 'label',
					        	 html : '<br>'
					 		},
					 		{
					        	xtype: 'label',
					        	text: '活动线程：',
					        	margin: '0 0 0 10',
					        	style: {
					        		fontSize: '14px' ,
					        		fontWeight :'bold'
					        	}
					        	
					        
					 		},
					 		{
					        xtype: 'label',
					        text: json.thread.thread_count,
					        margin: '0 30 0 10'
					 		}
					 		,{
					        xtype: 'label',
					       
					        text: '峰：',
					      	margin: '0 0 0 10',
					        style: {
					        		fontSize: '14px' ,
					        		fontWeight: 'bold '
					        	}
					 		},
					 		
					 		{
					        xtype: 'label',
					        text: json.thread.daemon_thread_count,
					        margin: '0 0 0 10'
					        
					 		},
					 		
					 		{
					       		 xtype: 'label',
					        	 html : '<br><br>'
					 		},
					 		
					 		{
					        	xtype: 'label',
					        	text: '守护线程：',
					        	margin: '0 0 0 10',
					        	
					        	style: {
					        		fontSize: '14px' ,
					        		fontWeight :'bold'
					        	}
					        
					 		},
					 		{
						        xtype: 'label',
						        text: json.thread.peak_thread_count,
						        margin: '0 30 0 10'
					 		}
					 		,{
						        xtype: 'label',
						        text: '已启动的线程总数：',
						     	
						        style: {
						        		fontSize: '14px' ,
						        		fontWeight :'bold'
						        		
						        	}
					 		},
					 		
					 		{
					        xtype: 'label',
					        text: json.thread.total_started_thread_count,
					        margin: '0 0 0 10'
					        
					 		},
					 		
					 		{
					       		 xtype: 'label',
					        	 html : '<br><br>'
					 		},
					 		
					 		{
					        	xtype: 'label',
					        	text: '当前类已装入：',
					        	margin: '0 0 0 10',
					        
					        	style: {
					        		fontSize: '14px' ,
					        		fontWeight :'bold'
					        	}
					        
					 		},
					 		{
						        xtype: 'label',
						        text: json.classes.loaded_class_count,
						        margin: '0 30 0 10'
					 		}
					 		,{
						        xtype: 'label',
						        text: '已装入类的总数：',
						     	
						        style: {
						        		fontSize: '14px' ,
						        		fontWeight :'bold'
						        		
						        	}
					 		},
					 		
					 		{
					        xtype: 'label',
					        text: json.classes.total_loaded_class_count,
					        margin: '0 0 0 10'
					        
					 		},
					 		
					 		{
					       		 xtype: 'label',
					        	 html : '<br><br>'
					 		},
					 		
					 		{
					        	xtype: 'label',
					        	text: '已卸载类的总数：',
					        	margin: '0 0 0 10',
					        	
					        	style: {
					        		fontSize: '14px' ,
					        		fontWeight :'bold'
					        	}
					        
					 		},
					 		{
						        xtype: 'label',
						        text: json.classes.un_loaded_class_count,
						        margin: '0 30 0 10'
					 		},
					 		
					 		
					 		{
					       		 xtype: 'label',
					        	 html : '<br><br>'
					 		}
					 		
					 		
					 		
					 		]
					 
					
					 
					
					}
					
					]
				});

		this.callParent(arguments);

	}
	
})