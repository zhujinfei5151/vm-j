package cn.org.vm.javaee;

import java.util.Date;
import java.util.Locale;

import org.apache.commons.lang.time.DateFormatUtils;

import cn.org.ape.http.HttpRequest;
import cn.org.ape.http.RequestContext;

public class WebInfo 
{
		private String serverName;//服务器名称
		private int serverPort;//服务器端口
		private String scheme;//协议名
		private String realPath;//真实的物理路径
		private String localName;//服务器主机名
		private int localport;//服务器端口
		private String localAddr;//服务器地址 IP
		private String locale;//地域
		private String characterEncoding;//编码方式
		private String localeTime;//服务器时间
		
		public WebInfo(HttpRequest request) 
		{
			this.localAddr=request.getRemoteAddr();
			this.serverName = request.getServerName();
			this.serverPort = request.getServerPort();
			this.scheme = request.getScheme();
			this.realPath = request.getServletContext().getRealPath("");
			this.localName = request.getLocalName();
			this.localport = request.getLocalPort();
			this.locale = request.getLocale().getCountry();
			this.characterEncoding = request.getCharacterEncoding();
			this.localeTime = DateFormatUtils.format(new Date(), "yyyy-MM-dd HH:mm:ss");
		}
		
		
		public String getServerName() {
			return serverName;
		}

		public void setServerName(String serverName) {
			this.serverName = serverName;
		}

		public int getServerPort() {
			return serverPort;
		}

		public void setServerPort(int serverPort) {
			this.serverPort = serverPort;
		}

		public String getScheme() {
			return scheme;
		}

		public void setScheme(String scheme) {
			this.scheme = scheme;
		}

		public String getRealPath() {
			return realPath;
		}

		public void setRealPath(String realPath) {
			this.realPath = realPath;
		}

		public String getLocalName() {
			return localName;
		}

		public void setLocalName(String localName) {
			this.localName = localName;
		}

		public int getLocalport() {
			return localport;
		}

		public void setLocalport(int localport) {
			this.localport = localport;
		}

		public String getLocalAddr() {
			return localAddr;
		}

		public void setLocalAddr(String localAddr) {
			this.localAddr = localAddr;
		}

		public String getLocale() {
			return locale;
		}

		public void setLocale(String locale) {
			this.locale = locale;
		}

		public String getCharacterEncoding() {
			return characterEncoding;
		}

		public void setCharacterEncoding(String characterEncoding) {
			this.characterEncoding = characterEncoding;
		}

		public String getLocaleTime() {
			return localeTime;
		}

		public void setLocaleTime(String localeTime) {
			this.localeTime = localeTime;
		}

		
		
		
}
