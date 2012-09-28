/*******************************************************************************
 * MyExt 通用JS定义
 ******************************************************************************/
var MyExt = {};

/*******************************************************************************
 * 常量数据
 ******************************************************************************/
//性别常量
MyExt.SEX_DATA = [['1', '男'], ['2', '女']];

//风格常量
MyExt.THEME_DATA = [['ext-all.css','经典蓝色'],['xtheme-gray.css','简约灰色'],['xtheme-olive.css','清新绿色'],['xtheme-purple.css', '浪漫紫色']];

//默认风格
MyExt.THEME_DEFAULT = 'ext-all.css';

//星期
MyExt.WEEK_DATA_CN = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];

//分页工具条没有数据时显示信息
MyExt.PAGINGTOOLBAR_EMPTYMSG = "没有数据";

//分页工具条显示的分页信息
MyExt.PAGINGTOOLBAR_DISPLAYMSG = "显示 {0} - {1} 条 共 {2} 条";

// 弹出窗口宽度
MyExt.OPEN_WIN_WIDTH = 960;

// 弹出窗口高度
MyExt.OPEN_WIN_HEIGHT = 600;

/**
 * Ajax请求方法
 * @param		settings	配置对象
 * 包括以下参数：baseUrl		项目根目录地址 必须
 * 				baseParams	参数对象
 * 				action		请求的Action地址 必须
 * 				callback	回调方法
 * 				reload		重新数据载入方法
 * 				showMsg		处理成功时，是否显示提示信息 true:显示 false:不显示 默认:false
 * 				successMsg	请求成功时的提示消息
 * 				failureMsg  请求失败时的提示消息
 * 				showWaiting 加载过程中是否显示进度条 true:显示 false:不显示 默认:false
 */
MyExt.ajaxRequest = function (settings){
	// 参数对象
	var params = {};
	if(settings.baseParams){
		params = settings.baseParams;
	}
	// 发送请求
	var waiting = null;
	if(settings.showWaiting == true){
		waiting = Ext.Msg.wait('正在处理，请稍等...','','');
	}

	Ext.Ajax.request({
		url: settings.baseUrl + settings.action,
		params: params,
		success: function(response, options){
			if(waiting != null){
				waiting.hide();
			}
			var jsonResult = Ext.decode(response.responseText);
			if(jsonResult.success==true){
				if(settings.showMsg==true){// 显示提示信息
					// 请求成功时的提示文字
					var successMsg = '操作成功.';
					if(jsonResult.message && jsonResult.message != ''){
						successMsg = jsonResult.message;
					}else if(settings.successMsg && settings.successMsg != ''){
						successMsg = settings.successMsg;
					}
					Ext.Msg.alert('提示', successMsg, function(){
						if(settings.reload){// 加载方法
							settings.reload(jsonResult);
						}
						if(settings.callback){// 回调方法
							settings.callback(jsonResult);
						}
					});
				}else{
					if(settings.reload){// 加载方法
						settings.reload(jsonResult);
					}
					if(settings.callback){// 回调方法
						settings.callback(jsonResult);
					}
				}
			}else{
				var message = '发生异常.';
				if(jsonResult.message && jsonResult.message != ''){// 后台设定的业务消息
					message = jsonResult.message;
				}else if(settings.failureMsg && settings.failureMsg!=''){// 前台指定的错误信息
					message = settings.failureMsg;
				}
				if(jsonResult.exceptionMsg && jsonResult.exceptionMsg != ''){// 有异常信息
					
				}else{
					Ext.Msg.alert('错误', message);
				}
			}
		},
		failure: function(response, options){
			Ext.Msg.alert('错误', '请求超时.');
		}
	});
}


/**
 * 取得用户
 */
MyExt.getUser = function(){
	var user='' ;
	Ext.Ajax.request({
	    url: '../json/getUser.jsp',
	    success: function(response){
	    	var jsonResult = Ext.decode(response.responseText);
	        user =jsonResult.user;
	       
	    }
	});
	
	alert( '欢迎使用Mynote！');
	return user;

	
}

/**
 * 获得当天日期和星期
 */
MyExt.getToday = function(){
	var today=new Date();
	var year = today.getFullYear();
	var month = today.getMonth()+1;
	month = month<10?'0'+month:month;
	var date = today.getDate();
	date = date<10?'0'+date:date;
	var day = MyExt.WEEK_DATA_CN[today.getDay()];
	return year+"年"+month+"月"+date+"日 "+day;
}

/**
 * 分时问候
 */
MyExt.sayHello = function(){
	var hour = new Date().getHours();
	var hello = '';
	if(hour < 6){
		hello='凌晨好';
	}else if(hour < 9){
		hello='早上好';
	}else if(hour < 12){
		hello='上午好';
	}else if(hour < 14){
		hello='中午好';
	}else if(hour < 17){
		hello='下午好';
	}else if(hour < 19){
		hello='傍晚好';
	}else if(hour < 22){
		hello='晚上好';
	}else{
		hello='夜里好';
	}
	return hello;
}


