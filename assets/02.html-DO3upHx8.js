import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,l as t,o as n}from"./app-DN83cdpr.js";const l="/blog_technical/assets/image-20210125214202463-D0hINVuW.png",e="/blog_technical/assets/image-20210125214524106-CJOsJ0Hm.png",h={};function k(p,i){return n(),a("div",null,i[0]||(i[0]=[t(`<h1 id="tomcat-manager-监控-tomcat" tabindex="-1"><a class="header-anchor" href="#tomcat-manager-监控-tomcat"><span>Tomcat-manager 监控 Tomcat</span></a></h1><p>tomcat 自带的监控工具。低版本默认开启，高版本默认关闭（因为一些安全原因）。</p><ul><li>文档：<code>docs/manager-howto.html</code></li><li>配置文件： <ol><li><code>conf/tomcat-users.xml</code> 添加用户</li><li><code>conf/Catalina/localhost/manager.xml</code>配置运行的远程连接</li><li>重启 tomcat</li></ol></li></ul><p>为了学习后面的课程，笔者下载了 <a href="https://tomcat.apache.org/download-80.cgi" target="_blank" rel="noopener noreferrer">tomcat 8.5.6</a>，它的文档和二进制有分开的包可以下载，二进制包里面的 <code>webapps/docs</code> 目录下就是完整的文档了，就可以不需要单独下载文档包了。</p><p><code>conf/tomcat-users.xml</code> 添加用户，直接使用了他们默认的配置文件</p><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;?</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">xml</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;1.0&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> encoding</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;UTF-8&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">?&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">tomcat-users</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> xmlns</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;http://tomcat.apache.org/xml&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">              xmlns:xsi</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">              xsi:schemaLocation</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;http://tomcat.apache.org/xml tomcat-users.xsd&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">              version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;1.0&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">role</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> rolename</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;tomcat&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">role</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> rolename</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;manager-gui&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">role</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> rolename</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;manager-status&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">user</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;tomcat&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;123456&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> roles</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;tomcat,manager-gui,manager-status&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">tomcat-users</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>manager-gui</strong> 访问 HTML 界面。</li><li><strong>manager-status</strong> 仅访问 服务器状态 页面。</li><li><strong>manager-script</strong> 访问本文档中描述的工具友好的纯文本界面以及 服务器状态 页面。</li><li><strong>manager-jmx</strong> 访问 JMX 代理界面和 服务器状态 页面。</li></ul><p>上述配置文件，配置了三个角色，一个用户，并给该用户分配了角色。</p><p><code>conf/Catalina/localhost/manager.xml</code> 配置运行的远程连接，这个文件默认是不存在的，需要手动创建它，它的规则是 <code>$CATALINA_BASE/conf/[enginename]/[hostname]</code></p><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;?</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">xml</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;1.0&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> encoding</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;UTF-8&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">?&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Context</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> privileged</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;true&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> antiResourceLocking</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;false&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">         docBase</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;\${catalina.home}/webapps/manager&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CookieProcessor</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> className</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;org.apache.tomcat.util.http.Rfc6265CookieProcessor&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">                   sameSiteCookies</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;strict&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">     &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Valve</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> className</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;org.apache.catalina.valves.RemoteAddrValve&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">                allow</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;127\\.0\\.0\\.1&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Context</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上配置是文档中的配置，配置了允许访问这个管理界面的 IP 为 127.0.1.1 也就是本机才能访问。</p><p>启动 tomcat</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mrcode@mrcode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> %</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ./catalina.sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>然后访问：<code>http://127.0.0.1:8080/manager/html</code> 就弹出 http basic 认证框弹出，输入上面配置文件配置的用户名和密码，就进入了管理界面</p><figure><img src="`+l+'" alt="image-20210125214202463" tabindex="0" loading="lazy"><figcaption>image-20210125214202463</figcaption></figure><p>服务器状态里面就有内存和线程信息</p><figure><img src="'+e+'" alt="image-20210125214524106" tabindex="0" loading="lazy"><figcaption>image-20210125214524106</figcaption></figure>',17)]))}const d=s(h,[["render",k],["__file","02.html.vue"]]),g=JSON.parse('{"path":"/monitor-tuning/04/02.html","title":"Tomcat-manager 监控 Tomcat","lang":"zh-CN","frontmatter":{"description":"Tomcat-manager 监控 Tomcat tomcat 自带的监控工具。低版本默认开启，高版本默认关闭（因为一些安全原因）。 文档：docs/manager-howto.html 配置文件： conf/tomcat-users.xml 添加用户 conf/Catalina/localhost/manager.xml配置运行的远程连接 重启 to...","head":[["meta",{"property":"og:url","content":"https://www.pvzge.com/blog_technical/monitor-tuning/04/02.html"}],["meta",{"property":"og:title","content":"Tomcat-manager 监控 Tomcat"}],["meta",{"property":"og:description","content":"Tomcat-manager 监控 Tomcat tomcat 自带的监控工具。低版本默认开启，高版本默认关闭（因为一些安全原因）。 文档：docs/manager-howto.html 配置文件： conf/tomcat-users.xml 添加用户 conf/Catalina/localhost/manager.xml配置运行的远程连接 重启 to..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-21T11:38:46.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-21T11:38:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Tomcat-manager 监控 Tomcat\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-21T11:38:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LMYY\\",\\"url\\":\\"https://gaozih.com\\"}]}"]]},"headers":[],"git":{"createdTime":1734781126000,"updatedTime":1734781126000,"contributors":[{"name":"liao_rh","username":"liao_rh","email":"993929808@qq.com","commits":1,"url":"https://github.com/liao_rh"}]},"readingTime":{"minutes":1.6,"words":479},"filePathRelative":"monitor-tuning/04/02.md","localizedDate":"2024年12月21日","autoDesc":true}');export{d as comp,g as data};
