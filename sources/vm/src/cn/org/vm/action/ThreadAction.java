package cn.org.vm.action;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import cn.org.ape.BaseAction;
import cn.org.vm.service.ThreadService;

public class ThreadAction extends BaseAction
{

	
	@Override
	protected void execute() throws ServletException, IOException {
		JsonArray jsonArray = new JsonArray();
		 ThreadService  threadService = new ThreadService();
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
		
		list.add(threadService.getJson());
		session.setAttribute("list", list);
		
		for (Object object : list) {
			jsonArray.add((JsonObject) object);
		}
		printJson(jsonArray.toString());
	}
	
	
	public void getgrid()
	{
		
		ThreadService  threadService = new ThreadService();
		JsonArray jsonArray = threadService.getThreads();
		JsonArray array = new JsonArray();
		for (int i = start; i < jsonArray.size()&&i<limit+start; i++) {
			array.add(jsonArray.get(i));
		}
		String json= "{"+
		          "totalCount:"+jsonArray.size()+","+
		          "resultList:"+
		          array.toString()+
       
		        "}";
		printJson(json);
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
