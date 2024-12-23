import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,l as a,o as s}from"./app-Bb3iUHLJ.js";const n="/blog_technical/assets/image-20210202221029440-CM1vrMRn.png",t="/blog_technical/assets/jsgct_dt_004_grbg_frst_hp-DLf39WIr.png",r={};function c(p,e){return s(),l("div",null,e[0]||(e[0]=[a(`<h1 id="垃圾收集器" tabindex="-1"><a class="header-anchor" href="#垃圾收集器"><span>垃圾收集器</span></a></h1><p>常见的垃圾收集器有三种：</p><ul><li><p>串行收集器 Serial：Serial、Serial Old</p></li><li><p>并行收集器 Parallel：Parallel Scavenge、Parallel Old 以吞吐量优先</p></li><li><p>并发收集器 Concurrent：</p><ul><li>CMS</li><li>G1</li></ul><p>停顿时间优先，也就是响应时间有限</p></li></ul><h2 id="串行收集器" tabindex="-1"><a class="header-anchor" href="#串行收集器"><span>串行收集器</span></a></h2><p>单线程的，发现 jvm 内存不够用，暂停应用程序的执行，执行垃圾回收，回收完成之后，再继续执行应用程序</p><p>主要用于嵌入式的小型内存场景中。</p><h2 id="并行-vs-并发" tabindex="-1"><a class="header-anchor" href="#并行-vs-并发"><span>并行 VS 并发</span></a></h2><p>垃圾收集器中的并行并发并不是平时高并发中的并发。</p><ul><li><p>并行（Parallel）</p><p>指多条垃圾收集线程并行工作，但此时 <strong>用户线程仍然处于等待状态</strong>。</p><p>适合科学计算、后台处理等弱交互场景。</p></li><li><p>并发（Concurrent）</p><p>指用户线程与垃圾收集器线程同时执行（但不定是并行的，可能会交替执行），垃圾收集线程在执行的时候不会停顿用户程序的运行。</p><p>适合对响应时间有要求的场景，比如 Web</p></li></ul><h2 id="停顿时间-vs-吞吐量" tabindex="-1"><a class="header-anchor" href="#停顿时间-vs-吞吐量"><span>停顿时间 VS 吞吐量</span></a></h2><p>垃圾收集器中的吞吐量也不是平时高并发中的吞吐量</p><ul><li><p>停顿时间</p><p>垃圾收集器做垃圾回收中断应用执行的时间。 <code>-XX:MaxGCPauseMillis</code></p></li><li><p>吞吐量</p><p>花在 <strong>垃圾收集</strong> 的时间和花在 <strong>应用时间</strong> 的占比。</p><p><code>-XX:GCTimeRatio=&lt;n&gt;</code>，垃圾收集时间占 <code>1/1 + n</code></p></li></ul><p>评判一个垃圾收集器的好坏：在吞吐量最佳的时候，停顿时间最少。但是在现实中，这两个指标很难同时做到都优秀，一般都是互斥的。</p><h2 id="串行收集器-1" tabindex="-1"><a class="header-anchor" href="#串行收集器-1"><span>串行收集器</span></a></h2><p>开启串行收集器：</p><ul><li><p><code>-XX:+UseSerialGC </code>：这个是对新生代开启串行，但是会将老生代默认启用下面的参数，也就是老生代的串行 GC</p></li><li><p><code>-XX:+UseSerialOldGC</code></p></li></ul><h2 id="并行收集器" tabindex="-1"><a class="header-anchor" href="#并行收集器"><span>并行收集器</span></a></h2><p>它是以 <strong>吞吐量优先</strong> 的垃圾收集器，开启方式：</p><ul><li><code>-XX:+UseParallelGC</code></li><li><code>-XX:+UseParallelOldGC</code></li></ul><p>该收集器在 Server 模式下是默认的收集器。</p><div class="hint-container tip"><p class="hint-container-title">什么是 Server 模式？</p><p>jvm 会根据当前机器的配置判定开启 server 模式还是 client 模式，一般来说，机器内存大于 2G，就会启用 server 模式</p></div><p>下面可以来看下我们启动的应用程序默认启用的垃圾收集器</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mrcode@mrcode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> %</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> jps</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -l</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">20572</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> org.gradle.launcher.daemon.bootstrap.GradleDaemon</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">20575</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cn.mrcode.stady.monitor_tuning.MonitorTuningApplication</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mrcode@mrcode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> %</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> jinfo</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -flag</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> UseParallelGC</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 20575</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-XX:+UseParallelGC</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="并发收集器" tabindex="-1"><a class="header-anchor" href="#并发收集器"><span>并发收集器</span></a></h2><p>是以响应时间有限的垃圾收集器。在 JDK 中有两种并行的收集器，开启方法如下：</p><h3 id="cms" tabindex="-1"><a class="header-anchor" href="#cms"><span>CMS</span></a></h3><ul><li><p><code>-XX:+UseConcMarkSweepGC</code></p></li><li><p><code>-XX:+UseParNewGC</code></p></li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 首先看现在的应用，该收集器并没有开启</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mrcode@mrcode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> %</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> jinfo</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -flag</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> UseConcMarkSweepGC</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 20575</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-XX:-UseConcMarkSweepGC</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 添加启动参数，并重启程序后，再次观察</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mrcode@mrcode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> %</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> jinfo</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -flag</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> UseConcMarkSweepGC</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 20801</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-XX:+UseConcMarkSweepGC</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="g1" tabindex="-1"><a class="header-anchor" href="#g1"><span>G1</span></a></h3><p>开启方式：<code>-XX:+UseG1GC</code></p><h2 id="垃圾收集器搭配" tabindex="-1"><a class="header-anchor" href="#垃圾收集器搭配"><span>垃圾收集器搭配</span></a></h2><p>在不同的区里面使用的垃圾收集器不同，前面讲过，JDK 使用的是分代垃圾回收方式</p><figure><img src="`+n+`" alt="image-20210202221029440" tabindex="0" loading="lazy"><figcaption>image-20210202221029440</figcaption></figure><p>两个区里面的收集器不一样，但是上线有连线的是成对搭配使用的。在 JDK8+ 中，建议使用 G1 收集器，性能较高</p><p>其中虚线是在某些情况下，CMS 会退化成 SerialOld 收集器。我们课程的终点是 G1 收集器。</p><h2 id="如何选择垃圾收集器" tabindex="-1"><a class="header-anchor" href="#如何选择垃圾收集器"><span>如何选择垃圾收集器</span></a></h2><p>一般有如下建议：</p><ul><li>优先调整堆的大小，让服务器自己来选择</li><li>如果内存小于 100M，使用串行收集器</li><li>如果是单核，并且没有停顿时间的要求，串行或则 JVM 自己选择</li><li>如果允许停顿时间超过 1 秒，选择并行或则 JVM 自己选择</li><li>如果响应时间最重要，并且不能超过 1 秒，使用并发收集器</li></ul><p>官方文档中有讲解，在 <a href="https://docs.oracle.com/javase/8/" target="_blank" rel="noopener noreferrer">JDK8</a> 页面中的 <a href="https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning" target="_blank" rel="noopener noreferrer"><strong>HotSpot Virtual Machine Garbage Collection Tuning Guide</strong></a> 中，专门讲解如何进行 GC 调优。非常详细</p><h2 id="parallel-collector" tabindex="-1"><a class="header-anchor" href="#parallel-collector"><span>Parallel Collector</span></a></h2><ul><li><p><code>-XX:+UseParallelGC</code> 手动开启</p><p>Server 模式默认开启</p></li><li><p><code>-XX:ParallelGCThreads=&lt;N&gt;</code> 使用 n 个 GC 线程</p><p>默认 n 为以下计算方式：</p><ul><li><code>CPU &gt; 8</code>：<code>N=5/8</code></li><li><code>CPU &lt; 8</code>：<code>N=CPU</code></li></ul></li></ul><p>垃圾收集器有一个自适应功能（Ergonomics），比如设置以下三个参数：</p><ul><li><code>-XX:MaxGCPauseMillis=&lt;N&gt;</code></li><li><code>-xx:GCTimeRatio=&lt;N&gt;</code></li><li><code>-Xmx&lt;N&gt;</code></li></ul><p>它会按照顺序平衡前两个。也就是会进行动态的调整各个区的大小</p><h3 id="动态内存调整" tabindex="-1"><a class="header-anchor" href="#动态内存调整"><span>动态内存调整</span></a></h3><ul><li><p><code>-XX:YoungGenerationSizelncrement=&lt;Y&gt;</code>：增加 Young 区内存大小，默认值为 20%</p></li><li><p><code>-XX:TenuredGenerationSizelncrement=&lt;Y&gt;</code>：增加 Old 区内存大小，默认值为 20%</p></li><li><p><code>-XX:AdaptiveSizeDecrementScaleFactor=&lt;Y&gt;</code>：：减少内存大小，默认值为 4%</p></li></ul><h2 id="cms-collector" tabindex="-1"><a class="header-anchor" href="#cms-collector"><span>CMS Collector</span></a></h2><p>它是一个 <strong>并发收集</strong>，低停顿、低延迟，是一个老年代收集器</p><h3 id="cms-垃圾收集过程" tabindex="-1"><a class="header-anchor" href="#cms-垃圾收集过程"><span>CMS 垃圾收集过程</span></a></h3><ol><li><p>CMS initial mark：初始标记 Root，STW （停止应用程序）</p></li><li><p>CMS concurrent mark：并发标记</p></li><li><p>CMS-concurrent-preclean：并发预清理</p></li><li><p>CMS remark：重新标记，STW（停止应用程序）</p><p>此时应用程序还在运行，有可能又有垃圾了，所以重新标记</p></li><li><p>CMS concurrent sweep：并发清除</p></li><li><p>CMS concurrent reset：并发重置</p></li></ol><h3 id="cms-缺点" tabindex="-1"><a class="header-anchor" href="#cms-缺点"><span>CMS 缺点</span></a></h3><ul><li><p>CPU 敏感</p><p>比如设置一个并发线程，那么只有双核的时候，垃圾收集器就会占用其中一个，这个时候就只有一个核心为应用工作了</p></li><li><p>浮动垃圾：会产生浮动垃圾</p><p>因为程序还在运行，一边回收，一边分配，就会产生浮动垃圾</p></li><li><p>空间碎片</p></li></ul><h3 id="cms-的相关参数" tabindex="-1"><a class="header-anchor" href="#cms-的相关参数"><span>CMS 的相关参数</span></a></h3><ul><li><p><code>-XX:ConcGCThreads</code>：并发的 GC 线程数</p></li><li><p><code>-XX:+UseCMSCompactAtFullCollection</code>：FullGC 之后做压缩</p><p>上面说会产生碎片，所内存压缩就相当于在清除空间碎片</p></li><li><p><code>-XX:CMSFullGCsBeforeCompaction</code>：多少次 FUllGC 之后压缩一次</p></li><li><p><code>-XX:CMSInitiatingOccupancyFraction</code>：触发 FullGC</p><p>Old 区在填满多少存活对象的时候触发一次 FullGC，该值默认值应该是 90%+</p></li><li><p><code>-XX:+UseCMSInitatingOccupancyOnly</code>：是否动态调整</p></li><li><p><code>-XX:+CMSScavengeBeforeRemark</code>：FullGC 之前先做 YGC</p><p>因为在 YGC 之后，会回收一部分垃圾，再做 Old GC 的时候就会减少很多工作。</p><p>笔者疑问：但是不是说是分代垃圾回收吗？怎么还会跨区影响？</p></li><li><p><code>-XX:CMSClassUnloadingEnabled</code>：启用回收 Perm 区</p><p>JDK7 以前有该区</p></li></ul><p>如果没有设置，显示 -1，在文档中有说明它的默认值是多少。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>mrcode@mrcode ~ % jinfo -flag CMSInitiatingOccupancyFraction 20572 </span></span>
<span class="line"><span>-XX:CMSInitiatingOccupancyFraction=-1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>CMS 还有一个 iCMS，适用于单核或则双核，因为核数少时，垃圾比较多，回收一次占用时间过长，就会影响应用程序，iCMS 就是为了优化这一点，分多次回收。</p><h2 id="g1-collector" tabindex="-1"><a class="header-anchor" href="#g1-collector"><span>G1 Collector</span></a></h2><p>JDK8 中支持的垃圾回收器，不断的在进化，在 JDK11 中又有了其他的垃圾回收器</p><p><a href="https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/g1_gc.html#garbage_first_garbage_collection" target="_blank" rel="noopener noreferrer">Garbage-First（G1）</a> 垃圾收集器是一种服务器样式的垃圾收集器，适用于具有大内存的多处理器计算机。它试图以高概率满足垃圾收集（GC）暂停时间目标，同时实现高吞吐量。全堆操作（例如全局标记）与应用程序线程同时执行。这样可以防止与堆或活动数据大小成比例的中断。</p><p>G1 收集器通过多种技术实现了高性能和暂停时间目标。</p><p>G1 的首要重点是为运行需要大堆且 GC 延迟有限的应用程序的用户提供解决方案。这意味着堆大小约为 6 GB 或更大，并且稳定且可预测的暂停时间低于 0.5 秒。</p><p>它同时是新生代和老生代收集器</p><figure><img src="`+t+'" alt="如下图9-1所示" tabindex="0" loading="lazy"><figcaption>如下图9-1所示</figcaption></figure><p>它是将堆划分成一块一块的，在逻辑上某些块组成了各种数据区，比如 Old 区。</p><h3 id="g1-的概念" tabindex="-1"><a class="header-anchor" href="#g1-的概念"><span>G1 的概念</span></a></h3><ul><li><p>Region：比如上图中的 H，几个块组成的一个区</p></li><li><p>SATB：Snapshot-At-The-Beginning</p><p>它是通过 Root Tracing 得到的，GC 开始时候存活对象的快照，后面再做垃圾回收的时候，会以此基础作为回收</p></li><li><p>Rset：记录了其他 Region 中的对应引用本 Region 中对象的关系，属于 points-into 结构（谁引用了我的对象）</p></li></ul><h3 id="younggc" tabindex="-1"><a class="header-anchor" href="#younggc"><span>YoungGC</span></a></h3><ul><li>新对象进入 Eden 区</li><li>存活对象拷贝到 Survivor 区</li><li>存活时间到达年龄阈值时，对象晋升到 Old 区</li></ul><h3 id="mixedgc" tabindex="-1"><a class="header-anchor" href="#mixedgc"><span>MixedGC</span></a></h3><ul><li><p>回收所有的 Young 和 <strong>部分 Old</strong>，所以不是 FullGC</p><p>这一部分可以通过某些参数设置</p></li><li><p>global concurrent marking：全局并发标记</p><ol><li>Initial marking phase：标记 GC Root，STW</li><li>Root region scanning phase：标记存活 Region</li><li>Concurrent marking phase：标记存活的对象</li><li>Remark phase：重新标记，STW</li><li>Cleanup phase：部分 STW</li></ol></li><li><p>MixedGC 时机，通过以下参数控制</p><ul><li><code>InitiatingHeapOccupancyPercent</code>：堆占有率达到这个数值则触发 global concurrent marking ，默认 45%</li><li><code>G1HeapWastePercent</code>：在 global concurrent marking 结束之后，可以知道区有多少空间要被回收，在每次 YGC 之后和再次发生 Mixed GC 之前，会检查垃圾占比是否达到此参数，只有达到了，下次才会发生 Mixed GC。</li></ul></li></ul><h3 id="mixedgc-相关参数" tabindex="-1"><a class="header-anchor" href="#mixedgc-相关参数"><span>MixedGC 相关参数</span></a></h3><ul><li><p><code>G1MixedGCLiveThresholdPercent</code></p><p>Old 区的 region 被回收时候的存活对象占比</p></li><li><p><code>G1MixedGCCountTarget</code></p><p>一次 global concurrent marking 之后，最多执行 Mixed GC 的次数</p></li><li><p><code>G1OldCSetRegionThresholdPercent</code></p><p>一次 Mixed GC 中能被选入 CSet 的最多 old 区的 region 数量</p></li></ul><h3 id="常用参数" tabindex="-1"><a class="header-anchor" href="#常用参数"><span>常用参数</span></a></h3><ul><li><code>-XX:+UseG1GC</code>：开启 G1</li><li><code>-XX:G1HeapRegionSize=n</code>：region 的大小，1-32M，最多 2048 个</li><li><code>-XX:MaxGCPauseMillis=200</code>：最大停顿时间</li><li><code>-XX:G1NewSizePercent</code></li><li><code>-XX:G1MaxNewSizePercent</code></li><li><code>-XX:G1ReservePercent=10</code> ：保留防止 to space 溢出，默认是百分之 10</li><li><code>-XX:ParallelGCThreads=n</code> ：SWT 线程数</li><li><code>-XX:ConcGCThreads=n</code> ：并发线程数= <code>1/4*并行</code></li></ul><h3 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a></h3><ul><li><p>年轻代大小：</p><p>避免使用 <code>-Xmn</code>、<code>-XX:NewRatio</code> 等显示设置 Young 区大小，会覆盖暂停时间目标</p></li><li><p>暂停时间目标：</p><p>暂停时间不要太严苛，其吞吐量目标是 90% 的应用程序时间和 10% 的垃圾回收时间，太严苛会直接影响到吞吐量</p></li></ul><p>MixGC 调优：</p><ul><li><code>-XX:InitiatingHeapOccupancyPercent</code></li><li><code>-XX:G1MixedGCLiveThresholdPercent</code>、<code>-XX:G1HeapWastePercent</code></li><li><code>-XX:G1MixedGCCountTarget</code></li><li><code>-XX:G1OldCSetRegionThresholdPercent</code></li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>本章笔者是第一次接触，看得有点懵逼，记录也只是硬着头皮记录下来，某些并没有看懂</p><p>后续有此需求，还是需要去阅读官方文档的调优指南来理解。</p></div><h3 id="是否需要切换到-g1" tabindex="-1"><a class="header-anchor" href="#是否需要切换到-g1"><span>是否需要切换到 G1</span></a></h3><ul><li>50% 以上的堆被存活对象占用</li><li>对象分配和晋升的速度变化非常大</li><li>垃圾回收时间特别长，超过了 1 秒</li></ul>',82)]))}const h=i(r,[["render",c],["__file","03.html.vue"]]),g=JSON.parse('{"path":"/monitor-tuning/06/03.html","title":"垃圾收集器","lang":"zh-CN","frontmatter":{"description":"垃圾收集器 常见的垃圾收集器有三种： 串行收集器 Serial：Serial、Serial Old 并行收集器 Parallel：Parallel Scavenge、Parallel Old 以吞吐量优先 并发收集器 Concurrent： CMS G1 停顿时间优先，也就是响应时间有限 串行收集器 单线程的，发现 jvm 内存不够用，暂停应用程序的执...","head":[["meta",{"property":"og:url","content":"https://www.pvzge.com/blog_technical/monitor-tuning/06/03.html"}],["meta",{"property":"og:title","content":"垃圾收集器"}],["meta",{"property":"og:description","content":"垃圾收集器 常见的垃圾收集器有三种： 串行收集器 Serial：Serial、Serial Old 并行收集器 Parallel：Parallel Scavenge、Parallel Old 以吞吐量优先 并发收集器 Concurrent： CMS G1 停顿时间优先，也就是响应时间有限 串行收集器 单线程的，发现 jvm 内存不够用，暂停应用程序的执..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-21T11:38:46.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-21T11:38:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"垃圾收集器\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-21T11:38:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Leo\\",\\"url\\":\\"https://blog.csdn.net/liao_rh\\"}]}"]]},"headers":[{"level":2,"title":"串行收集器","slug":"串行收集器","link":"#串行收集器","children":[]},{"level":2,"title":"并行 VS 并发","slug":"并行-vs-并发","link":"#并行-vs-并发","children":[]},{"level":2,"title":"停顿时间 VS 吞吐量","slug":"停顿时间-vs-吞吐量","link":"#停顿时间-vs-吞吐量","children":[]},{"level":2,"title":"串行收集器","slug":"串行收集器-1","link":"#串行收集器-1","children":[]},{"level":2,"title":"并行收集器","slug":"并行收集器","link":"#并行收集器","children":[]},{"level":2,"title":"并发收集器","slug":"并发收集器","link":"#并发收集器","children":[{"level":3,"title":"CMS","slug":"cms","link":"#cms","children":[]},{"level":3,"title":"G1","slug":"g1","link":"#g1","children":[]}]},{"level":2,"title":"垃圾收集器搭配","slug":"垃圾收集器搭配","link":"#垃圾收集器搭配","children":[]},{"level":2,"title":"如何选择垃圾收集器","slug":"如何选择垃圾收集器","link":"#如何选择垃圾收集器","children":[]},{"level":2,"title":"Parallel Collector","slug":"parallel-collector","link":"#parallel-collector","children":[{"level":3,"title":"动态内存调整","slug":"动态内存调整","link":"#动态内存调整","children":[]}]},{"level":2,"title":"CMS Collector","slug":"cms-collector","link":"#cms-collector","children":[{"level":3,"title":"CMS 垃圾收集过程","slug":"cms-垃圾收集过程","link":"#cms-垃圾收集过程","children":[]},{"level":3,"title":"CMS 缺点","slug":"cms-缺点","link":"#cms-缺点","children":[]},{"level":3,"title":"CMS 的相关参数","slug":"cms-的相关参数","link":"#cms-的相关参数","children":[]}]},{"level":2,"title":"G1 Collector","slug":"g1-collector","link":"#g1-collector","children":[{"level":3,"title":"G1 的概念","slug":"g1-的概念","link":"#g1-的概念","children":[]},{"level":3,"title":"YoungGC","slug":"younggc","link":"#younggc","children":[]},{"level":3,"title":"MixedGC","slug":"mixedgc","link":"#mixedgc","children":[]},{"level":3,"title":"MixedGC 相关参数","slug":"mixedgc-相关参数","link":"#mixedgc-相关参数","children":[]},{"level":3,"title":"常用参数","slug":"常用参数","link":"#常用参数","children":[]},{"level":3,"title":"最佳实践","slug":"最佳实践","link":"#最佳实践","children":[]},{"level":3,"title":"是否需要切换到 G1","slug":"是否需要切换到-g1","link":"#是否需要切换到-g1","children":[]}]}],"git":{"createdTime":1734781126000,"updatedTime":1734781126000,"contributors":[{"name":"liao_rh","username":"liao_rh","email":"993929808@qq.com","commits":1,"url":"https://github.com/liao_rh"}]},"readingTime":{"minutes":8.51,"words":2554},"filePathRelative":"monitor-tuning/06/03.md","localizedDate":"2024年12月21日","autoDesc":true}');export{h as comp,g as data};