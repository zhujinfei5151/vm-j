package cn.org.vm.action;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;

import com.google.gson.Gson;
import com.google.gson.JsonObject;

import cn.org.ape.BaseAction;
import cn.org.vm.service.SummaryService;

public class SummaryAction extends BaseAction
{
	
	
	@Override
		protected void execute() throws ServletException, IOException 
		{
			SummaryService service = new SummaryService();
			Map map = new HashMap();
			map.put("os", service.getOsinfo());
			map.put("jvm", service.getJvminfo());
			map.put("classes", service.getClassinfo());
			map.put("thread", service.getThreadInfo());
			Gson gson = new Gson();
			String json=gson.toJson(map);
			printJson(json);
		
		}
	
	
	
  public static void main(String[] args) {
	
	
	
	
	
  }
}
