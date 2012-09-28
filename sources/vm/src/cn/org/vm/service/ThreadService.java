package cn.org.vm.service;

import java.util.Date;

import org.apache.commons.lang.time.DateFormatUtils;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import cn.org.vm.system.ThreadInfo;

public class ThreadService 
{
		
	public JsonObject getJson()
	{
		ThreadInfo info = new ThreadInfo();
		Gson gson = new Gson();
		JsonObject jsonobject = gson.toJsonTree(info).getAsJsonObject();
		jsonobject.remove("threadInfos");
		jsonobject.remove("daemon_thread_count");
		jsonobject.remove("peak_thread_count");
		jsonobject.remove("current_thread_cpu_time");
		jsonobject.remove("current_thread_user_time");
		Date date = new Date();
		jsonobject.addProperty("date", DateFormatUtils.format(date, "mm:ss"));
		return jsonobject;
		
	}
	
	public JsonArray getThreads() {
		ThreadInfo info = new ThreadInfo();
		Gson gson = new Gson();
		JsonObject jsonobject = gson.toJsonTree(info).getAsJsonObject();
		return jsonobject.getAsJsonArray("threadInfos");
	}
	public static void main(String[] args) {
		ThreadInfo info = new ThreadInfo();
		Gson gson = new Gson();
		JsonObject jsonobject = gson.toJsonTree(info).getAsJsonObject();
//		//jsonobject.remove("threadInfos");
//		jsonobject.remove("daemon_thread_count");
//		jsonobject.remove("peak_thread_count");
//		jsonobject.remove("current_thread_cpu_time");
//		jsonobject.remove("current_thread_user_time");
		JsonArray jsonArray = jsonobject.getAsJsonArray("threadInfos");
		
		System.out.println(jsonArray.toString());
	}
}
