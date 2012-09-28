package cn.org.vm.system;

import java.lang.management.ManagementFactory;
import java.lang.management.MemoryMXBean;
import java.lang.management.MemoryPoolMXBean;
import java.lang.management.MemoryUsage;
import java.lang.reflect.InvocationTargetException;
import java.util.List;
import java.util.Map;

import org.apache.commons.beanutils.PropertyUtils;

/**
 * 系统堆栈信息
 * @author 陈磊
 *
 */
public class MemoryInfo
{
	private MemoryUsage heap_memoryUsage;//返回用于对象分配的堆的当前内存使用量。
	private MemoryUsage non_memoryUsage;// 返回 Java 虚拟机使用的非堆内存的当前内存使用量。
	private  List<MemoryPoolMXBean> memoryPoolMXBeans;//内存池表示由 Java 虚拟机管理的内存资源
	
	public MemoryInfo() {
		MemoryMXBean bean = ManagementFactory.getMemoryMXBean();
		this.heap_memoryUsage = bean.getHeapMemoryUsage();
		this.non_memoryUsage = bean.getNonHeapMemoryUsage();
		this.setMemoryPoolMXBeans(ManagementFactory.getMemoryPoolMXBeans());
	}
	
	/**
	 * 返回内存 堆栈和非堆栈
	 * @return
	 * @throws IllegalAccessException
	 * @throws InvocationTargetException
	 * @throws NoSuchMethodException
	 */
	public static Map<?, ?> getMap() throws IllegalAccessException, InvocationTargetException, NoSuchMethodException
	{
	  MemoryInfo info = new MemoryInfo();
	  return PropertyUtils.describe(info);
	}

	public MemoryUsage getHeap_memoryUsage() {
		return heap_memoryUsage;
	}

	public void setHeap_memoryUsage(MemoryUsage heap_memoryUsage) {
		this.heap_memoryUsage = heap_memoryUsage;
	}

	public MemoryUsage getNon_memoryUsage() {
		return non_memoryUsage;
	}

	public void setNon_memoryUsage(MemoryUsage non_memoryUsage) {
		this.non_memoryUsage = non_memoryUsage;
	}

	public List<MemoryPoolMXBean> getMemoryPoolMXBeans() {
		return memoryPoolMXBeans;
	}

	public void setMemoryPoolMXBeans(List<MemoryPoolMXBean> memoryPoolMXBeans) {
		this.memoryPoolMXBeans = memoryPoolMXBeans;
	}
	
	
	
}