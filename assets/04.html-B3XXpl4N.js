import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,l as o,b as n,d as t,e as l,g as s,r as a,o as T}from"./app-B5S879k5.js";const d="/blog_technical/assets/261bac84bfb1f957c3e9fd45021a5d73-DmaDoSqV.png",c={};function P(g,e){const r=a("RouteLink");return T(),p("div",null,[e[4]||(e[4]=o('<h1 id="_04-http-世界全览-与-http-相关的各种协议" tabindex="-1"><a class="header-anchor" href="#_04-http-世界全览-与-http-相关的各种协议"><span>04 | HTTP 世界全览：与 HTTP 相关的各种协议</span></a></h1><p>在上一讲中，我介绍了与 HTTP 相关的浏览器、服务器、CDN、网络爬虫等应用技术。</p><p>今天要讲的则是比较偏向于理论的各种 HTTP 相关协议，重点是 TCP/IP、DNS、URI、HTTPS 等，希望能够帮你理清楚它们与 HTTP 的关系。</p><p>同样的，我还是画了一张详细的思维导图，你可以点击后仔细查看。</p><figure><img src="'+d+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="tcp-ip" tabindex="-1"><a class="header-anchor" href="#tcp-ip"><span>TCP/IP</span></a></h2><p>TCP/IP 协议是目前网络世界「事实上」的标准通信协议，即使你没有用过也一定听说过，因为它太著名了。</p><p>TCP/IP 协议实际上是一系列网络通信协议的统称，其中最核心的两个协议是 <strong>TCP</strong> 和 <strong>IP</strong> ，其他的还有 UDP、ICMP、ARP 等等，共同构成了一个复杂但有层次的协议栈。</p><p>这个协议栈有四层，最上层是 <strong>应用层</strong>，最下层是 <strong>链接层</strong> ，TCP 和 IP 则在中间：<strong>TCP 属于传输层，IP 属于网际层</strong> 。协议的层级关系模型非常重要，我会在下一讲中再专门讲解，这里先暂时放一放。</p><p><strong>IP 协议</strong> 是 <strong>I</strong> nternet <strong>P</strong>rotocol 的缩写，<strong>主要目的是解决寻址和路由问题，以及如何在两点间传送数据包</strong> 。IP 协议使用 <strong>IP 地址</strong> 的概念来定位互联网上的每一台计算机。可以对比一下现实中的电话系统，你拿着的手机相当于互联网上的计算机，而要打电话就必须接入电话网，由通信公司给你分配一个号码，这个号码就相当于 IP 地址。</p><p>现在我们使用的 IP 协议大多数是 v4 版，地址是四个用 <code>.</code> 分隔的数字，例如 <code>192.168.0.1</code> ，总共有 2^32，大约 42 亿个可以分配的地址。看上去好像很多，但互联网的快速发展让地址的分配管理很快就捉襟见肘。所以，就又出现了 v6 版，使用 8 组 <code>:</code> 分隔的数字作为地址，容量扩大了很多，有 2^128 个，在未来的几十年里应该是足够用了。</p><p><strong>TCP 协议</strong>是 <code>Transmission Control Protocol</code> 的缩写，意思是 <strong>传输控制协议</strong> ，它位于 IP 协议之上，基于 IP 协议提供可靠的、字节流形式的通信，是 HTTP 协议得以实现的基础。</p><p>「可靠」是指保证数据不丢失，「字节流」是指保证数据完整，所以在 TCP 协议的两端可以如同操作文件一样访问传输的数据，就像是读写在一个密闭的管道里「流动」的字节。</p>',13)),n("p",null,[e[1]||(e[1]=t("在 ")),l(r,{to:"/http-protocol/02/02.html"},{default:s(()=>e[0]||(e[0]=[t("第 2 讲")])),_:1}),e[2]||(e[2]=t(" 时我曾经说过，HTTP 是一个传输协议，但它不关心寻址、路由、数据完整性等传输细节，而要求这些工作都由下层来处理。因为互联网上最流行的是 TCP/IP 协议，而它刚好满足 HTTP 的要求，所以互联网上的 HTTP 协议就运行在了 TCP/IP 上，HTTP 也就可以更准确地称为 ")),e[3]||(e[3]=n("strong",null,"HTTP over TCP/IP",-1))]),e[5]||(e[5]=o('<h2 id="dns" tabindex="-1"><a class="header-anchor" href="#dns"><span>DNS</span></a></h2><p>在 TCP/IP 协议中使用 IP 地址来标识计算机，数字形式的地址对于计算机来说是方便了，但对于人类来说却既难以记忆又难以输入。</p><p>于是 <strong>域名系统</strong> （Domain Name System）出现了，用有意义的名字来作为 IP 地址的等价替代。设想一下，你是愿意记 <code>95.211.80.227</code> 这样枯燥的数字，还是 <code>nginx.org</code> 这样的词组呢？</p><p>在 DNS 中，域名（Domain Name）又称为主机名（Host），为了更好地标记不同国家或组织的主机，让名字更好记，所以被设计成了一个有层次的结构。</p><p>域名用 <code>.</code> 分隔成多个单词，级别从左到右逐级升高，最右边的被称为 <strong>顶级域名</strong> 。对于顶级域名，可能你随口就能说出几个，例如表示商业公司的 <code>com</code>、表示教育机构的 <code>edu</code>，表示国家的 <code>cn</code>、<code>uk</code> 等，买火车票时的域名还记得吗？是 <code>www.12306.cn</code> 。</p><p>但想要使用 TCP/IP 协议来通信仍然要使用 IP 地址，所以需要把域名做一个转换，<strong>映射</strong> 到它的真实 IP，这就是所谓的 <strong>域名解析</strong> 。</p><p>继续用刚才的打电话做个比喻，你想要打电话给小明，但不知道电话号码，就得在手机里的号码簿里一项一项地找，直到找到小明那一条记录，然后才能查到号码。这里的 「小明」就相当于域名，而「电话号码」就相当于 IP 地址，这个 <strong>查找的过程就是域名解析</strong>。</p><p>域名解析的实际操作要比刚才的例子复杂很多，因为互联网上的电脑实在是太多了。目前全世界有 13 组根 DNS 服务器，下面再有许多的顶级 DNS、权威 DNS 和更小的本地 DNS，逐层递归地实现域名查询。</p><p>HTTP 协议中并没有明确要求必须使用 DNS，但实际上为了方便访问互联网上的 Web 服务器，通常都会使用 DNS 来定位或标记主机名，间接地把 DNS 与 HTTP 绑在了一起。</p><h2 id="uri-url" tabindex="-1"><a class="header-anchor" href="#uri-url"><span>URI/URL</span></a></h2><p>有了 TCP/IP 和 DNS，是不是我们就可以任意访问网络上的资源了呢？</p><p>还不行，DNS 和 IP 地址只是标记了互联网上的主机，但主机上有那么多文本、图片、页面，到底要找哪一个呢？就像小明管理了一大堆文档，你怎么告诉他是哪个呢？</p><p>所以就出现了 URI（Uniform Resource Identifier），中文名称是 <strong>统一资源标识符</strong> ，使用它就能够唯一地标记互联网上资源。</p><p>URI 另一个更常用的表现形式是 URL（Uniform Resource Locator）， <strong>统一资源定位符</strong> ，也就是我们俗称的「网址」，它实际上是 URI 的一个子集，不过因为这两者几乎是相同的，差异不大，所以通常不会做严格的区分。</p><p>我就拿 Nginx 网站来举例，看一下 URI 是什么样子的。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>http://nginx.org/en/download.html</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>你可以看到，URI 主要有三个基本的部分构成：</p><ol><li>协议名：即访问该资源应当使用的协议，在这里是 <code>http</code>；</li><li>主机名：即互联网上主机的标记，可以是域名或 IP 地址，在这里是 <code>nginx.org</code>；</li><li>路径：即资源在主机上的位置，使用 <code>/</code> 分隔多级目录，在这里是 <code>/en/download.html</code> 。</li></ol><p>还是用打电话来做比喻，你通过电话簿找到了小明，让他把昨天做好的宣传文案快递过来。那么这个过程中你就完成了一次 URI 资源访问，小明就是主机名，昨天做好的宣传文案就是路径，而快递，就是你要访问这个资源的协议名。</p><h2 id="https" tabindex="-1"><a class="header-anchor" href="#https"><span>HTTPS</span></a></h2><p>在 TCP/IP、DNS 和 URI 的加持之下，HTTP 协议终于可以自由地穿梭在互联网世界里，顺利地访问任意的网页了，真的是好生快活。</p><p>但且慢，互联网上不仅有「美女」，还有很多的「野兽」。</p><p>假设你打电话找小明要一份广告创意，很不幸，电话被商业间谍给窃听了，他立刻动用种种手段偷窃了你的快递，就在你还在等包裹的时候，他抢先发布了这份广告，给你的公司造成了无形或有形的损失。</p><p>有没有什么办法能够防止这种情况的发生呢？确实有。你可以使用 <strong>加密</strong> 的方法，比如这样打电话：</p><blockquote><p>你：喂，小明啊，接下来我们改用火星文通话吧。 小明：好啊好啊，就用火星文吧。 你：巴拉巴拉巴拉巴拉…… 小明：巴拉巴拉巴拉巴拉……</p></blockquote><p>如果你和小明说的火星文只有你们两个才懂，那么即使窃听到了这段谈话，他也不会知道你们到底在说什么，也就无从破坏你们的通话过程。</p><p>HTTPS 就相当于这个比喻中的「火星文」，它的全称是 <strong>HTTP over SSL/TLS</strong> ，也就是运行在 SSL/TLS 协议上的 HTTP。</p><p>注意它的名字，这里是 SSL/TLS，而不是 TCP/IP，它是一个 <strong>负责加密通信的安全协议</strong> ，建立在 TCP/IP 之上，所以也是个可靠的传输协议，可以被用作 HTTP 的下层。</p><p>因为 HTTPS 相当于 <code>HTTP+SSL/TLS+TCP/IP</code> ，其中的 <code>HTTP</code> 和 <code>TCP/IP</code> 我们都已经明白了，只要再了解一下 SSL/TLS，HTTPS 也就能够轻松掌握。</p><p>SSL 的全称是 <code>Secure Socket Layer</code> ，由网景公司发明，当发展到 3.0 时被标准化，改名为 TLS，即 <code>Transport Layer Security</code>，但由于历史的原因还是有很多人称之为 SSL/TLS，或者直接简称为 SSL。</p><p>SSL 使用了许多密码学最先进的研究成果，综合了对称加密、非对称加密、摘要算法、数字签名、数字证书等技术，能够在不安全的环境中为通信的双方创建出一个秘密的、安全的传输通道，为 HTTP 套上一副坚固的盔甲。</p><p>你可以在今后上网时留心看一下浏览器地址栏，如果有一个小锁头标志，那就表明网站启用了安全的 HTTPS 协议，而 URI 里的协议名，也从 http 变成了 https 。</p><h2 id="代理" tabindex="-1"><a class="header-anchor" href="#代理"><span>代理</span></a></h2><p>代理（Proxy）是 HTTP 协议中请求方和应答方中间的一个环节，作为 <strong>中转站</strong> ，既可以转发客户端的请求，也可以转发服务器的应答。</p><p>代理有很多的种类，常见的有：</p><ol><li>匿名代理：完全 <strong>隐匿</strong> 了被代理的机器，外界看到的只是代理服务器；</li><li>透明代理：顾名思义，它在传输过程中是 <strong>透明开放</strong> 的，外界既知道代理，也知道客户端；</li><li>正向代理：靠近客户端，代表客户端向服务器发送请求；</li><li>反向代理：靠近服务器端，代表服务器响应客户端的请求；</li></ol><p>上一讲提到的 CDN，实际上就是一种代理，它代替源站服务器响应客户端的请求，通常扮演着透明代理和反向代理的角色。</p><p>由于代理在传输过程中插入了一个中间层，所以可以在这个环节做很多有意思的事情，比如：</p><ol><li>负载均衡：把访问请求均匀分散到多台机器，实现访问集群化；</li><li>内容缓存：暂存上下行的数据，减轻后端的压力；</li><li>安全防护：隐匿 IP，使用 WAF 等工具抵御网络攻击，保护被代理的机器；</li><li>数据处理：提供压缩、加密等额外的功能。</li></ol><p>关于 HTTP 的代理还有一个特殊的「代理协议」（proxy protocol），它由知名的代理软件 HAProxy 制订，但并不是 RFC 标准，我也会在之后的课程里专门讲解。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2><p>这次我介绍了与 HTTP 相关的各种协议，在这里简单小结一下今天的内容。</p><ol><li>TCP/IP 是网络世界最常用的协议，HTTP 通常运行在 TCP/IP 提供的可靠传输基础上；</li><li>DNS 域名是 IP 地址的等价替代，需要用域名解析实现到 IP 地址的映射；</li><li>URI 是用来标记互联网上资源的一个名字，由 <code>协议名 + 主机名 + 路径</code> 构成，俗称 URL；</li><li>HTTPS 相当于 <code>HTTP+SSL/TLS+TCP/IP</code> ，为 HTTP 套了一个安全的外壳；</li><li>代理是 HTTP 传输过程中的中转站，可以实现缓存加速、负载均衡等功能。</li></ol><p>经过这两讲的学习，相信你应该对 HTTP 有了一个比较全面的了解，虽然还不是很深入，但已经为后续的学习扫清了障碍。</p><h2 id="课下作业" tabindex="-1"><a class="header-anchor" href="#课下作业"><span>课下作业</span></a></h2><ol><li><p>DNS 与 URI 有什么关系？</p><p>URL 中的主机名部分是需要转换到 IP 协议中需要的 IP 地址</p></li><li><p>在讲 <strong>代理</strong> 时我特意没有举例说明，你能够用引入一个「小强」的角色，通过打电话来比喻一下吗？</p></li></ol><h2 id="课外小贴士" tabindex="-1"><a class="header-anchor" href="#课外小贴士"><span>课外小贴士</span></a></h2><ul><li><p>IP 协议曾有 v1、v2、v3 等早期版本，但因为不够完善而么有对外发布，而 v5 则是仅用于实验室内部研究，也从未公开，所以我们看到的只有 v4 和 v6 两个版本</p></li><li><p>2011 年 2 月，会联网管理组织 ICANN 正式宣布 IPv4 的地址段被 「用尽」</p></li><li><p>如果使用 UNIX/Linux 操作系统，HTTP 可以运行在本机的 UNIX Domain Socket 上，它是一种进程间通信机制，但也满足 HTTP 对下层的 <strong>可靠传输</strong> 要求，所以就成了 <code>HTTP over UNIX Domain Socket</code></p></li></ul>',48))])}const m=i(c,[["render",P],["__file","04.html.vue"]]),S=JSON.parse('{"path":"/http-protocol/02/04.html","title":"04 | HTTP 世界全览：与 HTTP 相关的各种协议","lang":"zh-CN","frontmatter":{"description":"04 | HTTP 世界全览：与 HTTP 相关的各种协议 在上一讲中，我介绍了与 HTTP 相关的浏览器、服务器、CDN、网络爬虫等应用技术。 今天要讲的则是比较偏向于理论的各种 HTTP 相关协议，重点是 TCP/IP、DNS、URI、HTTPS 等，希望能够帮你理清楚它们与 HTTP 的关系。 同样的，我还是画了一张详细的思维导图，你可以点击后仔...","head":[["meta",{"property":"og:url","content":"https://www.pvzge.com/blog_technical/http-protocol/02/04.html"}],["meta",{"property":"og:title","content":"04 | HTTP 世界全览：与 HTTP 相关的各种协议"}],["meta",{"property":"og:description","content":"04 | HTTP 世界全览：与 HTTP 相关的各种协议 在上一讲中，我介绍了与 HTTP 相关的浏览器、服务器、CDN、网络爬虫等应用技术。 今天要讲的则是比较偏向于理论的各种 HTTP 相关协议，重点是 TCP/IP、DNS、URI、HTTPS 等，希望能够帮你理清楚它们与 HTTP 的关系。 同样的，我还是画了一张详细的思维导图，你可以点击后仔..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-21T11:38:46.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-21T11:38:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"04 | HTTP 世界全览：与 HTTP 相关的各种协议\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-21T11:38:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Leo\\",\\"url\\":\\"https://blog.csdn.net/liao_rh\\"}]}"]]},"headers":[{"level":2,"title":"TCP/IP","slug":"tcp-ip","link":"#tcp-ip","children":[]},{"level":2,"title":"DNS","slug":"dns","link":"#dns","children":[]},{"level":2,"title":"URI/URL","slug":"uri-url","link":"#uri-url","children":[]},{"level":2,"title":"HTTPS","slug":"https","link":"#https","children":[]},{"level":2,"title":"代理","slug":"代理","link":"#代理","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]},{"level":2,"title":"课下作业","slug":"课下作业","link":"#课下作业","children":[]},{"level":2,"title":"课外小贴士","slug":"课外小贴士","link":"#课外小贴士","children":[]}],"git":{"createdTime":1734781126000,"updatedTime":1734781126000,"contributors":[{"name":"liao_rh","username":"liao_rh","email":"993929808@qq.com","commits":1,"url":"https://github.com/liao_rh"}]},"readingTime":{"minutes":10.71,"words":3214},"filePathRelative":"http-protocol/02/04.md","localizedDate":"2024年12月21日","autoDesc":true}');export{m as comp,S as data};