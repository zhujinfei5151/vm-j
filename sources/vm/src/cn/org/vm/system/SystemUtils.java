package cn.org.vm.system;


/**
 * 取得java的相关信息
 * @author 陈磊
 * @version 2012/9/13
 *
 */
public class SystemUtils extends org.apache.commons.lang.SystemUtils
{
	
	
	/**
	 * 取得awt.toolkit
	 * @return  sun.awt.windows.WToolkit
	 */
	public static String getAwt_Toolkit() {
		return AWT_TOOLKIT;
	}
	

	/**
	 * 取得file.encoding  文件编码
	 * @return  UTF-8
	 */
	public static String getFile_Encoding() {
		return FILE_ENCODING;
	}

	/**
	 * 取得file.separator 
	 * @return  \
	 */
	public static String getFile_Separator() {
		return FILE_SEPARATOR;
	}


	/**
	 * 取得java.awt.fonts 
	 * @return  
	 */
	public static String getJava_Awt_Fomts() {
		return JAVA_AWT_FONTS;
	}


	/**
	 * 取得java.awt.graphicsenv 
	 * @return  sun.awt.Win32GraphicsEnvironment
	 */
	public static String getJava_Awt_Graphicsenv() {
		return JAVA_AWT_GRAPHICSENV;
	}


	/**
	 * 取得java.awt.headless 
	 * @return  
	 */
	public static String getJava_Awt_Headless() {
		return JAVA_AWT_HEADLESS;
	}

	
	/**
	 * 取得java.awt.printerjob
	 * @return  sun.awt.windows.WPrinterJob
	 */
	public static String getJava_Awt_Printerjob() {
		return JAVA_AWT_PRINTERJOB;
	}

	/**
	 * 取得java.class.path ；class路径
	 * @return C:\Users\clysl\Desktop\eclipse\ape\build\classes;C:\Users\clysl\Desktop\eclipse\ape\WebContent\WEB-INF\lib\ape-j.jar;……
	 */
	public static String getJava_Class_Path() {
		return JAVA_CLASS_PATH;
	}

	/**
	 * 取得java.class.version ；class版本
	 * @return 51.0
	 */
	public static String getJava_Class_Version() {
		return JAVA_CLASS_VERSION;
	}
	
	/**
	 * 取得java.compiler 
	 * @return 
	 */
	public static String getJava_Compiler() {
		return JAVA_COMPILER;
	}

	/**
	 * 取得java.endorsed.dirs :jre中endorsed目录
	 * @return C:\Program Files\Java\jre7\lib\endorsed
	 */
	public static String getJava_Endorsed_Dirs() {
		return JAVA_ENDORSED_DIRS;
	}


	/**
	 * 取得java.ext.dirs :jre中ext目录
	 * @return C:\Program Files\Java\jre7\lib\ext;C:\Windows\Sun\Java\lib\ext
	 */
	public static String getJava_Ext_Dirs() {
		return JAVA_EXT_DIRS;
	}
	
	
	/**
	 * 取得java.home :jre的安装目录
	 * @return C:\Program Files\Java\jre7
	 */
	public static String getJava_Home() {
		return JAVA_HOME;
	}
	
	/**
	 * 取得java.io.tmpair:java输入文件的临时目录
	 * @return C:\Users\clysl\AppData\Local\Temp\
	 */
	public static String getJava_Io_Tmpair() 
	{
		return JAVA_IO_TMPDIR;
	}
	
	/**
	 * 取得java.library.path:java运行库的目录列表
	 * @return C:\Program Files\Java\jre7\bin;C:\Windows\Sun\Java\bin;……
	 */
	public static String getJava_Library_Path() 
	{
		return JAVA_LIBRARY_PATH;
	}
	
	/**
	 * 取得java.runtime.name :java运行的名称 JVM名称
	 * @return  Java(TM) SE Runtime Environment
	 */
	public static String getJava_Runtime_Name () 
	{
		return JAVA_RUNTIME_NAME;
	}
	
	
	/**
	 * 取得java.runtime.version :java运行的版本 JVM版
	 * @return  1.7.0_04-b22
	 */
	public static String getJava_Runtime_Version () 
	{
		return JAVA_RUNTIME_VERSION;
	}
	
	/**
	 * 取得java.specification.name :java运行名称jdk名称
	 * @return  Java Platform API Specification
	 */
	public static String getJava_Specification_Name () 
	{
		return JAVA_SPECIFICATION_NAME;
	}
	
	/**
	 * 取得java.specification.version  :java运行版本jdk版本
	 * @return  1.7
	 */
	public static String getJava_Specification_Version  () 
	{
		return JAVA_SPECIFICATION_VERSION;
	}
	
	/**
	 * 取得java.util.prefs.PreferencesFactory   :java运行版本jak版本
	 * @return  null
	 */
	public static String getJava_Util_Prefs_PreferencesFactory () 
	{
		return JAVA_UTIL_PREFS_PREFERENCES_FACTORY;
	}
	
	/**
	 * 取得java.vendor    :java的提供者
	 * @return  Oracle Corporation
	 */
	public static String getJava_Vendor() 
	{
		return JAVA_VENDOR;
	}
	
	/**
	 * 取得java.vendor.urlr :java的提供者URL
	 * @return  http://java.oracle.com/
	 */
	public static String getJava_Vendor_Urlr() 
	{
		return JAVA_VENDOR_URL;
	}
	
	
	/**
	 * 取得java.version  :java版
	 * @return  1.7.0_04
	 */
	public static String getJava_Version () 
	{
		return JAVA_VERSION;
	}
	
	/**
	 * 取得java.vm.info  :JVM信息
	 * @return  mixed mode, sharing
	 */
	public static String getJava_Vm_Info() 
	{
		return JAVA_VM_INFO;
	}
	
	/**
	 * 取得java.vm.name  :JVM名称
	 * @return  Java HotSpot(TM) Client VM
	 */
	public static String getJava_Vm_Name() 
	{
		return JAVA_VM_NAME;
	}
	
	/**
	 * 取得java.vm.specification.name    :JVM Specification 名称
	 * @return  Java Virtual Machine Specification
	 */
	public static String getJava_Vm_Specification_Name () 
	{
		return JAVA_VM_SPECIFICATION_NAME;
	}
	
	/**
	 * 取得java.vm.specification.vendor :JVM Specification 提供者
	 * @return  Oracle Corporation
	 */
	public static String getJava_Vm_Specification_Vendor () 
	{
		return JAVA_VM_SPECIFICATION_VENDOR;
	}
	
	/**
	 * 取得java.vm.specification.version   :JVM Specification 版本
	 * @return  1.7
	 */
	public static String getJava_Vm_Specification_Version () 
	{
		return JAVA_VM_SPECIFICATION_VERSION;
	}
	
	/**
	 * 取得java.vm.vendor:JVM 提供者
	 * @return  Oracle Corporation
	 */
	public static String getJava_Vm_Vendor() 
	{
		return JAVA_VM_VENDOR;
	}
	
	
	/**
	 * 取得java.vm.version:JVM版本
	 * @return  23.0-b21
	 */
	public static String getJava_Vm_Version() 
	{
		return JAVA_VM_VERSION;
	}
	
	
	/**
	 * 取得line.separator
	 * @return  
	 */
	public static String getLine_Separator() 
	{
		return LINE_SEPARATOR;
	}
	
	/**
	 * 取得os.arch :体系结构
	 * @return   x86
	 */
	public static String getOs_Arch () 
	{
		return OS_ARCH;
	}
	
	/**
	 * 取得os.name :系统名称
	 * @return Windows 7
	 */
	public static String getOs_Name () 
	{
		return OS_NAME;
	}
	
	
	/**
	 * 取得os.version :系统版本
	 * @return 6.1
	 */
	public static String getOs_Version() 
	{
		return OS_VERSION;
	}
	
	/**
	 * 取得path.separator 
	 * @return ;
	 */
	public static String getPath_Separator() 
	{
		return PATH_SEPARATOR;
	}
	
	
	/**
	 * 取得user.country :用户城市
	 * @return CN
	 */
	public static String getUser_Country() 
	{
		return USER_COUNTRY;
	}
	
	/**
	 * 取得user.dir :用户使用目录
	 * @return C:\Users\clysl\Desktop\eclipse\ape
	 */
	public static String getUser_Dir() 
	{
		return USER_DIR;
	}
	
	
	/**
	 * 取得user.home :用户目录
	 * @return C:\Users\clysl
	 */
	public static String getUser_Home() 
	{
		return USER_HOME;
	}
	
	/**
	 * 取得user.language :用户使用语言
	 * @return zh
	 */
	public static String getUser_Language() 
	{
		return USER_HOME;
	}
	
	/**
	 * 取得user.name :用户名称
	 * @return clysl
	 */
	public static String getUser_Name() 
	{
		return USER_NAME;
	}
	
	/**
	 * 取得user.timezone :用户时间
	 * @return 
	 */
	public static String getUser_TimeZone() 
	{
		return USER_TIMEZONE;
	}
	
	
}
