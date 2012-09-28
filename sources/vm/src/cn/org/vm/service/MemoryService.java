package cn.org.vm.service;

import java.lang.management.MemoryPoolMXBean;
import java.lang.management.MemoryUsage;
import java.util.Date;
import java.util.List;

import org.apache.commons.lang.time.DateFormatUtils;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import cn.org.vm.system.MemoryInfo;

public class MemoryService 
{
	
	/**
	 * 堆的当前内存使用量
	 * @return
	 */
	public JsonObject getHeap_memoryUsage() 
	{
		MemoryInfo info = new MemoryInfo();
		Gson gson= new Gson();
		MemoryUsage memoryUsage = info.getHeap_memoryUsage();
		JsonObject jsonobject = gson.toJsonTree(memoryUsage).getAsJsonObject();
		Date date = new Date();
		jsonobject.addProperty("date", DateFormatUtils.format(date, "mm:ss"));
		return jsonobject ;
		
	}
	/**
	 * 非堆内存的当前内存使用量
	 * @return
	 */
	public JsonObject getNon_memoryUsage() 
	{
		MemoryInfo info = new MemoryInfo();
		Gson gson= new Gson();
		MemoryUsage memoryUsage = info.getNon_memoryUsage();
		JsonObject jsonobject = gson.toJsonTree(memoryUsage).getAsJsonObject();
		return jsonobject;
		
	}
	/**
	 * 内存的连内存池
	 * @return
	 */
	public JsonArray getMemoryPool() 
	{
		MemoryInfo info = new MemoryInfo();
		Gson gson= new Gson();
		MemoryUsage memoryUsage = info.getNon_memoryUsage();
		List<MemoryPoolMXBean> mxBeans = info.getMemoryPoolMXBeans();
		JsonArray jsonArray = new JsonArray();
		for (MemoryPoolMXBean memoryPoolMXBean : mxBeans) 
		{
			if (memoryPoolMXBean.getCollectionUsage()!=null) {
				JsonObject jsonobject = gson.toJsonTree(memoryPoolMXBean.getCollectionUsage()).getAsJsonObject();
				jsonobject.addProperty("name", memoryPoolMXBean.getName());
				jsonArray .add(jsonobject);
			}
		}
		return jsonArray;
		
	}
	
		public static void main(String[] args) {
			MemoryInfo info = new MemoryInfo();
			Gson gson= new Gson();
			MemoryUsage memoryUsage = info.getNon_memoryUsage();
			List<MemoryPoolMXBean> mxBeans = info.getMemoryPoolMXBeans();
			JsonArray jsonArray = new JsonArray();
			for (MemoryPoolMXBean memoryPoolMXBean : mxBeans) 
			{
				if (memoryPoolMXBean.getCollectionUsage()!=null) {
					JsonObject jsonobject = gson.toJsonTree(memoryPoolMXBean.getCollectionUsage()).getAsJsonObject();
					jsonobject.addProperty("name", memoryPoolMXBean.getName());
					jsonArray .add(jsonobject);
				}
			}
			System.out.println(jsonArray);
//			MemoryInfo info = new MemoryInfo();
//			Gson gson= new Gson();
//			MemoryUsage memoryUsage = info.getHeap_memoryUsage();
//			JsonObject jsonobject = gson.toJsonTree(memoryUsage).getAsJsonObject();
//			System.out.println(jsonobject);
		}
		
}
