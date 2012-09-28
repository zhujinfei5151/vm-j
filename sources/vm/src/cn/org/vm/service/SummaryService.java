package cn.org.vm.service;

import cn.org.vm.system.Classinfo;
import cn.org.vm.system.JvmInfo;
import cn.org.vm.system.OsInfo;
import cn.org.vm.system.ThreadInfo;

/**
 * 摘要信息
 * @author 陈磊
 *
 */
public class SummaryService 
{
	public OsInfo getOsinfo() 
	{
		return new OsInfo();
	}
	
	public JvmInfo getJvminfo() 
	{
		return new JvmInfo();
	}
	public Classinfo getClassinfo() 
	{
		return new Classinfo();
	}
	public ThreadInfo getThreadInfo() 
	{
		return new ThreadInfo();
	}
	
}
