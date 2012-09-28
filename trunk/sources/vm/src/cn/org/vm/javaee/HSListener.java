package cn.org.vm.javaee;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.annotation.WebListener;
import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

import org.apache.commons.lang.time.DateFormatUtils;

import com.google.gson.JsonObject;

@WebListener
public class HSListener implements HttpSessionListener {

	private static Map<String, VisitInfo> map = new HashMap<String, VisitInfo>();
	@Override
	public void sessionCreated(HttpSessionEvent event) {
		HttpSession session = event.getSession();
		VisitInfo info = new VisitInfo();
		info.setCreateTime(DateFormatUtils.format(new Date(session.getCreationTime()), "yyyy-MM-dd HH:mm:ss"));
		info.setId(session.getId());
		map.put(session.getId(), info);
	}

	@Override
	public void sessionDestroyed(HttpSessionEvent event) {
		map.remove(event.getSession().getId());

	}

	public static Map<String, VisitInfo> getMap() {
		return map;
	}

	public static void setMap(Map<String, VisitInfo> map) {
		HSListener.map = map;
	}
	

	public static JsonObject getVisitSize() 
	{
		JsonObject jsonObject = new JsonObject();
		jsonObject.addProperty("size", map.size());
		jsonObject.addProperty("date", DateFormatUtils.format( new Date(), "mm:ss"));
		return jsonObject;
		
	}

}
