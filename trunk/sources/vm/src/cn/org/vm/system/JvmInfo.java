package cn.org.vm.system;

import java.lang.reflect.InvocationTargetException;
import java.util.Map;
import org.apache.commons.beanutils.PropertyUtils;


public class JvmInfo 
{
	private String jvm_info;//jvm 信息
	private String jvm_name;//jvm名称
	private String jvm_vendor;//jvm特供者
	private String jvm_version;//jvm版本
	private String jvm_specification_name;//jvm详细名称
	private String jvm_specification_vendor;//jvm详细提供者
	private String jvm_specification_version;//jvm详细版本
	
	public JvmInfo() {
		this.jvm_info = SystemUtils.getJava_Vm_Info();
		this.jvm_name = SystemUtils.getJava_Vm_Name();
		this.jvm_vendor = SystemUtils.getJava_Vm_Vendor();
		this.jvm_version = SystemUtils.getJava_Vm_Version();
		this.jvm_specification_name = SystemUtils.getJava_Vm_Specification_Name();
		this.jvm_specification_vendor = SystemUtils.getJava_Vm_Specification_Vendor();
		this.jvm_specification_version = SystemUtils.getJava_Vm_Specification_Version();
	}
	
	/**
	 * 取得Jvm的信息 
	 * @return  map的详细信息
	 * @throws IllegalAccessException
	 * @throws InvocationTargetException
	 * @throws NoSuchMethodException
	 */
	public static Map<?, ?> getmap() throws IllegalAccessException, InvocationTargetException, NoSuchMethodException
	{
		JvmInfo info = new JvmInfo();
		return PropertyUtils.describe(info);
	}
	
	
	
	public String getJvm_info() {
		return jvm_info;
	}
	public void setJvm_info(String jvm_info) {
		this.jvm_info = jvm_info;
	}
	public String getJvm_name() {
		return jvm_name;
	}
	public void setJvm_name(String jvm_name) {
		this.jvm_name = jvm_name;
	}
	public String getJvm_vendor() {
		return jvm_vendor;
	}
	public void setJvm_vendor(String jvm_vendor) {
		this.jvm_vendor = jvm_vendor;
	}
	public String getJvm_version() {
		return jvm_version;
	}
	public void setJvm_version(String jvm_version) {
		this.jvm_version = jvm_version;
	}
	public String getJvm_specification_name() {
		return jvm_specification_name;
	}
	public void setJvm_specification_name(String jvm_specification_name) {
		this.jvm_specification_name = jvm_specification_name;
	}
	public String getJvm_specification_vendor() {
		return jvm_specification_vendor;
	}
	public void setJvm_specification_vendor(String jvm_specification_vendor) {
		this.jvm_specification_vendor = jvm_specification_vendor;
	}
	public String getJvm_specification_version() {
		return jvm_specification_version;
	}
	public void setJvm_specification_version(String jvm_specification_version) {
		this.jvm_specification_version = jvm_specification_version;
	}
	

}
