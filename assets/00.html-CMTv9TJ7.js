import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,l as a,o as t}from"./app-Bb3iUHLJ.js";const n={};function p(r,l){return t(),e("div",null,l[0]||(l[0]=[a('<h1 id="为什么要学习这课程" tabindex="-1"><a class="header-anchor" href="#为什么要学习这课程"><span>为什么要学习这课程？</span></a></h1><p><strong>JAVA 性能监控与调优</strong>，在开发阶段下基本上不用，但是在 <strong>生产环境</strong> 下就比较重要了。</p><p>生产环境比较复杂：</p><ol><li><p>硬件问题、网络问题、CPU 利用率高</p></li><li><p>出现问题后不好进行定位</p><p>因为无法像开发环境下那样随随便便就重启应用、修改日志增加日志输出等手段，来进行定位</p></li></ol><p>所以对生产环境进行监控是非常有必要的。这里不讲解基于硬件的监控，我们聚焦在 <strong>对 JAVA 应用的性能做监控与调优</strong></p><h2 id="你将迈过哪些坎" tabindex="-1"><a class="header-anchor" href="#你将迈过哪些坎"><span>你将迈过哪些坎？</span></a></h2><ul><li>生产环境发生了内存溢出如何处理？</li><li>生产环境应该给服务器分配多少内存合适？</li><li>如何对垃圾收集器的性能进行调优？</li><li>生产环境 CPU 负载彪高该如何处理？</li><li>生产环境应该给应用分配多少线程合适？</li><li>不加 log 如何确定请求是否执行了某一行代码？</li><li>不加 log 如何实时查看某个方法的入参与返回值？</li><li>JVM 的字节码是什么东西？</li><li>循环体中做字符串 <code>+</code> 拼接为什么效率低？</li><li>字符串 <code>+</code> 拼接一定就是 StringBuilder.append 吗？</li><li>String 常量池是咋回事？</li><li><code>i++</code> 与 <code>++i</code> 到底哪种写法效率更高？</li></ul><h2 id="你能收获什么" tabindex="-1"><a class="header-anchor" href="#你能收获什么"><span>你能收获什么？</span></a></h2><ul><li><p>熟练使用各种监控和调试工具</p></li><li><p>从容应对生产环境中遇到的各种调试和性能问题</p></li><li><p>熟悉 JVM 的字节码指令</p><p>因为在源码层面上很多问题无法看的很清楚，编译器将很多语法糖都消除了，真正执行的是什么在源码里面不一定能看出来</p></li><li><p>深入理解 JVM 的自动内存回收机制，学会 GC 调优</p></li><li><p>从容应对面试中关于性能调优和调试的问题</p></li><li><p>独当一面走向高级工程师很重要的一步</p></li></ul><h2 id="适合人群" tabindex="-1"><a class="header-anchor" href="#适合人群"><span>适合人群</span></a></h2><ul><li>如果你不熟悉 JAVA 应用监控调优</li><li>如果你对 JAVA 应用监控调优感兴趣</li><li>如果你想跳槽面试高级工程师</li></ul><h2 id="课程如何安排" tabindex="-1"><a class="header-anchor" href="#课程如何安排"><span>课程如何安排？</span></a></h2><ul><li><p>基于 JDK 命令行工具的监控</p><ul><li>如何定位内存溢出</li><li>如何定位 CPU 利用率高</li></ul></li><li><p>基于 JVisualVM 的可视化监控</p><p>相当于将各种命令行工具做了一个集成</p></li><li><p>基于 Btrace 的监控调试</p><p>在不重启应用的情况下，如何知道某个方法的入参和返回值等问题</p></li><li><p>Tomcat 性能监控与调优</p></li><li><p>Nginx 性能监控与调优</p></li><li><p>JVM 层 GC 调优</p><p>详细的讲解 JVM 内存结构、垃圾回收器、垃圾回收器日志以及如何分析这些日志、如何评价垃圾回收器的性能高低？</p></li><li><p>Java 代码层优化</p></li></ul><h3 id="基于-jdk-命令行工具的监控" tabindex="-1"><a class="header-anchor" href="#基于-jdk-命令行工具的监控"><span>基于 JDK 命令行工具的监控</span></a></h3><ul><li><p>JVM 参数类型</p></li><li><p>查看运行时 JVM 参数</p></li><li><p>查看 JVM 统计信息</p><p>如类加载信息</p></li><li><p>jmap + MAT 实战内存溢出</p></li><li><p>jstack 实战死循环与死锁</p></li></ul><h3 id="基于-jvisualvm-的可视化监控" tabindex="-1"><a class="header-anchor" href="#基于-jvisualvm-的可视化监控"><span>基于 JVisualVM 的可视化监控</span></a></h3><p>相当于是前面那些命令的一个集成</p><ul><li>监控本地 JAVA 进程</li><li>监控远程 JAVA 进程</li></ul><h3 id="基于-btrace-的监控调试" tabindex="-1"><a class="header-anchor" href="#基于-btrace-的监控调试"><span>基于 Btrace 的监控调试</span></a></h3><ul><li>Btrace 安装使用入门</li><li>Btrace 使用详解</li></ul><p>它类似 AOP 的机制，原理很复杂利用了很多高级的知识，本课程还是以使用为主。</p><h3 id="tomcat-性能监控与调优" tabindex="-1"><a class="header-anchor" href="#tomcat-性能监控与调优"><span>Tomcat 性能监控与调优</span></a></h3><ul><li>Tomcat 远程 debug</li><li>Tomcat-manager 监控 Tomcat</li><li>psi-probe 监控 Tomcat</li><li>Tomcat 调优</li></ul><h3 id="nginx-性能监控与调优" tabindex="-1"><a class="header-anchor" href="#nginx-性能监控与调优"><span>Nginx 性能监控与调优</span></a></h3><ul><li>ngx_http_stub_status 监控链接信息</li><li>ngxtop 监控请求信息</li><li>nginx-rrd 图形化监控</li><li>nginx 调优</li></ul><h3 id="jvm-层-gc-调优" tabindex="-1"><a class="header-anchor" href="#jvm-层-gc-调优"><span>JVM 层 GC 调优</span></a></h3><ul><li>JVM 内存结构：基于 JDK 1.8</li><li>垃圾回收算法</li><li>垃圾收集器</li><li>GC 日志格式与可视化日志分析工具</li><li>Tomcat 的 GC 调优实战</li></ul><h3 id="java-代码层优化" tabindex="-1"><a class="header-anchor" href="#java-代码层优化"><span>Java 代码层优化</span></a></h3><ul><li><p>JVM 字节码指令与 javap</p><p>javap 可以将 class 文件中的一些字节码指令打印出来</p></li><li><p>i++ 与 ++i，字符串 + 拼接原理，string 常量池、intern 方法</p></li><li><p>常用代码优化方法</p></li></ul>',29)]))}const s=i(n,[["render",p],["__file","00.html.vue"]]),h=JSON.parse('{"path":"/monitor-tuning/00.html","title":"为什么要学习这课程？","lang":"zh-CN","frontmatter":{"description":"为什么要学习这课程？ JAVA 性能监控与调优，在开发阶段下基本上不用，但是在 生产环境 下就比较重要了。 生产环境比较复杂： 硬件问题、网络问题、CPU 利用率高 出现问题后不好进行定位 因为无法像开发环境下那样随随便便就重启应用、修改日志增加日志输出等手段，来进行定位 所以对生产环境进行监控是非常有必要的。这里不讲解基于硬件的监控，我们聚焦在 对 ...","head":[["meta",{"property":"og:url","content":"https://www.pvzge.com/blog_technical/monitor-tuning/00.html"}],["meta",{"property":"og:title","content":"为什么要学习这课程？"}],["meta",{"property":"og:description","content":"为什么要学习这课程？ JAVA 性能监控与调优，在开发阶段下基本上不用，但是在 生产环境 下就比较重要了。 生产环境比较复杂： 硬件问题、网络问题、CPU 利用率高 出现问题后不好进行定位 因为无法像开发环境下那样随随便便就重启应用、修改日志增加日志输出等手段，来进行定位 所以对生产环境进行监控是非常有必要的。这里不讲解基于硬件的监控，我们聚焦在 对 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-21T11:38:46.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-21T11:38:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"为什么要学习这课程？\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-21T11:38:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Leo\\",\\"url\\":\\"https://blog.csdn.net/liao_rh\\"}]}"]]},"headers":[{"level":2,"title":"你将迈过哪些坎？","slug":"你将迈过哪些坎","link":"#你将迈过哪些坎","children":[]},{"level":2,"title":"你能收获什么？","slug":"你能收获什么","link":"#你能收获什么","children":[]},{"level":2,"title":"适合人群","slug":"适合人群","link":"#适合人群","children":[]},{"level":2,"title":"课程如何安排？","slug":"课程如何安排","link":"#课程如何安排","children":[{"level":3,"title":"基于 JDK 命令行工具的监控","slug":"基于-jdk-命令行工具的监控","link":"#基于-jdk-命令行工具的监控","children":[]},{"level":3,"title":"基于 JVisualVM 的可视化监控","slug":"基于-jvisualvm-的可视化监控","link":"#基于-jvisualvm-的可视化监控","children":[]},{"level":3,"title":"基于 Btrace 的监控调试","slug":"基于-btrace-的监控调试","link":"#基于-btrace-的监控调试","children":[]},{"level":3,"title":"Tomcat 性能监控与调优","slug":"tomcat-性能监控与调优","link":"#tomcat-性能监控与调优","children":[]},{"level":3,"title":"Nginx 性能监控与调优","slug":"nginx-性能监控与调优","link":"#nginx-性能监控与调优","children":[]},{"level":3,"title":"JVM 层 GC 调优","slug":"jvm-层-gc-调优","link":"#jvm-层-gc-调优","children":[]},{"level":3,"title":"Java 代码层优化","slug":"java-代码层优化","link":"#java-代码层优化","children":[]}]}],"git":{"createdTime":1734781126000,"updatedTime":1734781126000,"contributors":[{"name":"liao_rh","username":"liao_rh","email":"993929808@qq.com","commits":1,"url":"https://github.com/liao_rh"}]},"readingTime":{"minutes":3.41,"words":1022},"filePathRelative":"monitor-tuning/00.md","localizedDate":"2024年12月21日","autoDesc":true}');export{s as comp,h as data};