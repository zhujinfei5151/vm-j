package cn.org.vm.system;

import java.lang.management.ManagementFactory;
import java.lang.reflect.InvocationTargetException;
import java.util.Map;

import org.apache.commons.beanutils.PropertyUtils;

import com.sun.management.OperatingSystemMXBean;

public class OsInfo
{ 
	 private String os_name; //操作系统的名称
	 private String os_arch;//体系结构
	 private String os_version;//操作系统的版本
	 private int available_processors;//返回 Java 虚拟机可以使用的处理器数目
	 private long total_physical_memory_size;//系统总的物理内存
	 private long free_physical_memory_size;//剩余系统物理内存
	 private long total_swap_space_size;//交换空间总量
	 private long free_swap_space_size;//可用交换空间
	 private long committed_virtual_memory_size;//分配虚拟机内存
	 public OsInfo() {
		this.os_arch = SystemUtils.getOs_Arch();
		this.os_name = SystemUtils.getOs_Name();
		this.os_version = SystemUtils.getOs_Version();
		this.setAvailable_processors(ManagementFactory.getOperatingSystemMXBean().getAvailableProcessors());
		OperatingSystemMXBean bean=(OperatingSystemMXBean) ManagementFactory.getOperatingSystemMXBean();
		this.committed_virtual_memory_size = bean.getCommittedVirtualMemorySize();
		this.free_physical_memory_size = bean.getFreePhysicalMemorySize();
		this.free_swap_space_size = bean.getFreeSwapSpaceSize();
		this.total_physical_memory_size = bean.getTotalPhysicalMemorySize();
		this.total_swap_space_size = bean.getTotalSwapSpaceSize();
	}
	 
	 /**
	  * 返回 操作系统的信息
	  * @return map
	  * @throws IllegalAccessException
	  * @throws InvocationTargetException
	  * @throws NoSuchMethodException
	  */
	 public static Map<?, ?> getMap() throws IllegalAccessException, InvocationTargetException, NoSuchMethodException
	 {
		OsInfo info = new OsInfo();
		return PropertyUtils.describe(info);
	}
	 
	 
	public String getOs_name() {
		return os_name;
	}
	public void setOs_name(String os_name) {
		this.os_name = os_name;
	}
	public String getOs_arch() {
		return os_arch;
	}
	public void setOs_arch(String os_arch) {
		this.os_arch = os_arch;
	}
	public String getOs_version() {
		return os_version;
	}
	public void setOs_version(String os_version) {
		this.os_version = os_version;
	}

	public int getAvailable_processors() {
		return available_processors;
	}

	public void setAvailable_processors(int available_processors) {
		this.available_processors = available_processors;
	}

	public long getTotal_physical_memory_size() {
		return total_physical_memory_size;
	}

	public void setTotal_physical_memory_size(long total_physical_memory_size) {
		this.total_physical_memory_size = total_physical_memory_size;
	}

	public long getFree_physical_memory_size() {
		return free_physical_memory_size;
	}

	public void setFree_physical_memory_size(long free_physical_memory_size) {
		this.free_physical_memory_size = free_physical_memory_size;
	}

	public long getTotal_swap_space_size() {
		return total_swap_space_size;
	}

	public void setTotal_swap_space_size(long total_swap_space_size) {
		this.total_swap_space_size = total_swap_space_size;
	}

	public long getFree_swap_space_size() {
		return free_swap_space_size;
	}

	public void setFree_swap_space_size(long free_swap_space_size) {
		this.free_swap_space_size = free_swap_space_size;
	}

	public long getCommitted_virtual_memory_size() {
		return committed_virtual_memory_size;
	}

	public void setCommitted_virtual_memory_size(long committed_virtual_memory_size) {
		this.committed_virtual_memory_size = committed_virtual_memory_size;
	}
	 
	 
}
