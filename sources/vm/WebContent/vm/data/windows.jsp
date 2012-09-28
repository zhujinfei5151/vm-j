<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%

	
	String json = "{id : 1,'os':'windows 7','frame':'x86','count':'2'}";
	
	
	response.getWriter().write(json);
%>