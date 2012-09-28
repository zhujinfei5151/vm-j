package cn.org.vm.service;

import java.util.Date;

import org.apache.commons.lang.time.DateFormatUtils;

import com.google.gson.Gson;

import com.google.gson.JsonObject;

import cn.org.vm.system.Classinfo;

public class ClassService 
{

	
	public JsonObject getJson()
	{
		Classinfo classinfo= new Classinfo();
		Gson gson = new Gson();
		JsonObject jsonobject = gson.toJsonTree(classinfo).getAsJsonObject();
		jsonobject.remove("un_loaded_class_count");
		Date date = new Date();
		jsonobject.addProperty("date", DateFormatUtils.format(date, "mm:ss"));
		return jsonobject;
		
	}
	
	public String getString()
	{
		Classinfo classinfo= new Classinfo();
		Gson gson = new Gson();
		JsonObject jsonobject = gson.toJsonTree(classinfo).getAsJsonObject();
		jsonobject.addProperty("date", DateFormatUtils.format(new Date(), "yyyy-MM-dd HH:mm:ss"));
		
		return jsonobject.toString();
		
	}
	
	public static void main(String[] args) {
		
		System.out.println(DateFormatUtils.format(new Date(), "yyyy-MM-dd HH:mm:ss"));
	}
}
