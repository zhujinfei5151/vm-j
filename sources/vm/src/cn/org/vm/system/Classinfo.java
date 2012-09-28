package cn.org.vm.system;

import java.lang.management.ClassLoadingMXBean;
import java.lang.management.ManagementFactory;
import java.lang.reflect.InvocationTargetException;
import java.util.Map;

import org.apache.commons.beanutils.PropertyUtils;

/**
 * class 文件加载信息
 * @author 陈磊
 *
 */
public class Classinfo 
{
	 private long loaded_class_count;//当前class加载数
	 private long total_loaded_class_count;//开始执行到目前已经加载的类的总数。
	 private long un_loaded_class_count;//Java 虚拟机开始执行到目前已经卸载的类的总数
	 
	 public Classinfo() {
		ClassLoadingMXBean bean = ManagementFactory.getClassLoadingMXBean();
		this.loaded_class_count=bean.getLoadedClassCount();
		this.total_loaded_class_count = bean.getTotalLoadedClassCount();
		this.un_loaded_class_count = bean.getUnloadedClassCount();
	}
	 
	 /**
	  * 取得加载class信息
	  * @return
	  * @throws IllegalAccessException
	  * @throws InvocationTargetException
	  * @throws NoSuchMethodException
	  */
	 public static Map<?, ?> getMap() throws IllegalAccessException, InvocationTargetException, NoSuchMethodException 
	{
	   Classinfo classinfo = new Classinfo();
	   return PropertyUtils.describe(classinfo);
	}
	 
	public long getLoaded_class_count() {
		return loaded_class_count;
	}
	public void setLoaded_class_count(Long loaded_class_count) {
		this.loaded_class_count = loaded_class_count;
	}
	public long getTotal_loaded_class_count() {
		return total_loaded_class_count;
	}
	public void setTotal_loaded_class_count(long total_loaded_class_count) {
		this.total_loaded_class_count = total_loaded_class_count;
	}
	public long getUn_loaded_class_count() {
		return un_loaded_class_count;
	}
	public void setUn_loaded_class_count(long un_loaded_class_count) {
		this.un_loaded_class_count = un_loaded_class_count;
	}
	 
	 
	 
}
