package cn.org.vm.action;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Timer;


import javax.servlet.ServletException;
import javax.swing.text.AbstractDocument.LeafElement;

import org.apache.commons.collections.map.ListOrderedMap;
import org.apache.commons.lang.time.DateUtils;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;

import cn.org.ape.BaseAction;
import cn.org.vm.service.ClassService;

public class ClassAction extends BaseAction
{
	
	@Override
	protected void execute() throws ServletException, IOException {
		ClassService classService = new ClassService();
		
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
		list.add(classService.getJson());
		session.setAttribute("list", list);
		
		for (Object object : list) {
			jsonArray.add((JsonObject) object);
		}
		printJson(jsonArray.toString());
		
		
	}
	
	public void getclass() 
	{
		ClassService classService = new ClassService();
		printJson(classService.getString());
	}
	
	
	
}
