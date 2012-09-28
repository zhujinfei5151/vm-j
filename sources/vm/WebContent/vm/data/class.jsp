<%@page import="org.apache.commons.lang.time.DateUtils"%>
<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%


	
	String id=(String)session.getAttribute("id");
	String json = " ";
	if(id==null)
	{
		json = "[{'temperature' :1,'date':'1'},{'temperature' :12,'date':'2'},{'temperature':9,'date':'3'},{'temperature' :12,'date':'4'},{'temperature' :5,'date':'5'}]";
		session.setAttribute("id", "chenlei");
	}
	else{
		json = "[{'temperature' :12,'date':'1'},{'temperature' :3,'date':'2'},{'temperature':8,'date':'3'},{'temperature' :12,'date':'4'},{'temperature' :12,'date':'5'}]";
		session.removeAttribute("id");
	}
	
	
	

	
	response.getWriter().write(json);
%>