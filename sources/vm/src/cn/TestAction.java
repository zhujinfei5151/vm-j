package cn;

import java.io.IOException;

import javax.servlet.ServletException;

import cn.org.ape.BaseAction;

public class TestAction extends BaseAction 
{
	@Override
	protected void execute() throws ServletException, IOException {
		
		printHtml(" holle world!");
	}
}
