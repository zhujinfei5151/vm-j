package cn.org.vm.action;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.ServletException;

import org.apache.commons.lang.time.DateFormatUtils;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import cn.org.ape.BaseAction;
import cn.org.vm.service.MemoryService;
import cn.org.vm.system.MemoryInfo;


public class MemoryAction extends BaseAction
{
	
	@Override
	protected void execute() throws ServletException, IOException {
		
	}
	
	public void getmemorys() 
	{
		MemoryService memoryService = new MemoryService();
		JsonArray jsonArray = new JsonArray();
		List list=(List) session.getAttribute("list");
		if (list!=null) 
		{
			if (list.size()>12) {
				//list = null;
				//list = new ArrayList();
				list.remove(0);
			}
			
		}else {
			list = new ArrayList();
		}
		list.add(memoryService.getHeap_memoryUsage());
		session.setAttribute("list", list);
		
		for (Object object : list) {
			jsonArray.add((JsonObject) object);
		}
		printJson(jsonArray.toString());
		
	}
	
	public void getmemory() 
	{
		MemoryService memoryService = new MemoryService();
		JsonObject json = memoryService.getHeap_memoryUsage();
		
		json.addProperty("date", DateFormatUtils.format(new Date(), "yyyy-MM-dd HH:mm:ss"));
		printJson(json.toString());
		
	}
	
	public void memorys() 
	{
		MemoryService memoryService = new MemoryService();
		JsonArray json = memoryService.getMemoryPool();
		
	
		printJson(json.toString());
		
	}
	
}
