package cn.org.vm.system;

import java.lang.management.ManagementFactory;
import java.lang.management.ThreadMXBean;
import java.lang.reflect.InvocationTargetException;
import java.util.Map;

import org.apache.commons.beanutils.PropertyUtils;

/**
 * xianc信息
 * @author 陈磊
 *
 */
public class ThreadInfo 
{ 
	private int daemon_thread_count; //Java 虚拟机启动或峰值重置以来峰值活动线程计数。
	private int peak_thread_count;//返回自从 Java 虚拟机启动或峰值重置以来峰值活动线程计数。
	private long total_started_thread_count;// Java 虚拟机启动以来创建和启动的线程总数目
	private int thread_count;//返回活动线程的当前数目，包括守护线程和非守护线程。
	private long current_thread_cpu_time;//回当前线程的总 CPU 时间（以毫微秒为单位）。
	private long current_thread_user_time;//返回当前线程在用户模式中执行的 CPU 时间（以毫微秒为单位）。
	private java.lang.management.ThreadInfo[] threadInfos;// 返回所有活动线程的线程信息，并带有堆栈跟踪和同步信息。
	
	public ThreadInfo() {
		ThreadMXBean bean = ManagementFactory.getThreadMXBean();
		this.daemon_thread_count = bean.getDaemonThreadCount();
		this.total_started_thread_count = bean.getTotalStartedThreadCount();
		this.thread_count = bean.getThreadCount();
		this.peak_thread_count = bean.getPeakThreadCount();
		this.current_thread_cpu_time = bean.getCurrentThreadCpuTime();
		this.current_thread_user_time = bean.getCurrentThreadUserTime();
		this.threadInfos = bean.dumpAllThreads(true, true);
	}
	
	/**
	 * 取得进程信息
	 * @return map
	 * @throws IllegalAccessException
	 * @throws InvocationTargetException
	 * @throws NoSuchMethodException
	 */
	public static Map<?, ?> getMap() throws IllegalAccessException, InvocationTargetException, NoSuchMethodException 
	{
		ThreadInfo info = new ThreadInfo();
		return PropertyUtils.describe(info);
	}

	public int getDaemon_thread_count() {
		return daemon_thread_count;
	}

	public void setDaemon_thread_count(int daemon_thread_count) {
		this.daemon_thread_count = daemon_thread_count;
	}

	public int getPeak_thread_count() {
		return peak_thread_count;
	}

	public void setPeak_thread_count(int peak_thread_count) {
		this.peak_thread_count = peak_thread_count;
	}

	public long getTotal_started_thread_count() {
		return total_started_thread_count;
	}

	public void setTotal_started_thread_count(long total_started_thread_count) {
		this.total_started_thread_count = total_started_thread_count;
	}

	public int getThread_count() {
		return thread_count;
	}

	public void setThread_count(int thread_count) {
		this.thread_count = thread_count;
	}

	public long getCurrent_thread_cpu_time() {
		return current_thread_cpu_time;
	}

	public void setCurrent_thread_cpu_time(long current_thread_cpu_time) {
		this.current_thread_cpu_time = current_thread_cpu_time;
	}

	public long getCurrent_thread_user_time() {
		return current_thread_user_time;
	}

	public void setCurrent_thread_user_time(long current_thread_user_time) {
		this.current_thread_user_time = current_thread_user_time;
	}

	public java.lang.management.ThreadInfo[] getThreadInfos() {
		return threadInfos;
	}

	public void setThreadInfos(java.lang.management.ThreadInfo[] threadInfos) {
		this.threadInfos = threadInfos;
	}
	
//	public class Info
//	{
//		private long thread_id;//返回与此 ThreadInfo 关联的线程的 ID。
//		private String thread_name;//返回与此 ThreadInfo 关联的线程的名称。
//		private Thread.State thread_state;//返回与此 ThreadInfo 关联的线程的状态。
//		private long waited_count;//返回与此 ThreadInfo 关联的线程等待通知的总次数。
//		private long vaited_time;//返回自从启用线程争用监视以来,与此 ThreadInfo 关联的线程等待通知的近似累计时间（以毫秒为单位）。
//		private long blocked_count;//返回与此 ThreadInfo 关联的线程被阻塞进入或重进入监视器的总次数。
//		private long blocked_time;//返回自从启用线程争用监视以来，与此 ThreadInfo 关联的线程被阻塞进入或重进入监视器的近似累计时间（以毫秒为单位）。
//		private StackTraceElement[] stackTraceElements;//返回与此 ThreadInfo 关联的线程的堆栈跟踪。
//		public Info() {
//			
//		}
//		
//	}
	
	
}
