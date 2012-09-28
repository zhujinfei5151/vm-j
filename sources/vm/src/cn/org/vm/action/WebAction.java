package cn.org.vm.action;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.ServletException;

import org.apache.commons.collections.map.ListOrderedMap;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import cn.org.ape.BaseAction;
import cn.org.vm.javaee.HSListener;
import cn.org.vm.javaee.VisitInfo;
import cn.org.vm.javaee.WebInfo;
import cn.org.vm.service.ClassService;

public class WebAction extends BaseAction 
{
	
	@Override
	protected void execute() throws ServletException, IOException {
		WebInfo webInfo = new WebInfo(this.request);
		Gson gson = new Gson();
		printJson(gson.toJson(webInfo));
	}
	
	public void visit()
	{
		Map<String, VisitInfo> map = HSListener.getMap();
		JsonArray jsonArray = new JsonArray();
		
		Set<String> set = map.keySet();	
		Object[] strings= set.toArray();
		for (int i = start; i < set.size()&&i<limit+start; i++) {
		
			Gson gson = new Gson();		
			JsonObject jsonobject = gson.toJsonTree(map.get(strings[i] )).getAsJsonObject();
			jsonArray.add(jsonobject);
		}
		String json= "{"+
		          "totalCount:"+set.size()+","+
		          "resultList:"+
		          jsonArray.toString()+
       
		        "}";
		printJson(json);
		
	}
	
	public void visitsize() {
		
		
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
		list.add(HSListener.getVisitSize());
		session.setAttribute("list", list);
		
		for (Object object : list) {
			jsonArray.add((JsonObject) object);
		}
		printJson(jsonArray.toString());
		
		
	}
	
	
	private int page;
	private int start;
	private int limit;
	public int getPage() {
		return page;
	}


	public void setPage(int page) {
		this.page = page;
	}


	public int getStart() {
		return start;
	}


	public void setStart(int start) {
		this.start = start;
	}


	public int getLimit() {
		return limit;
	}


	public void setLimit(int limit) {
		this.limit = limit;
	}
	
}
