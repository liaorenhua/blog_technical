import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,b as i,d as s,e as l,g as r,l as o,r as p,o as d}from"./app-DN83cdpr.js";const c="/blog_technical/assets/69493b53f1b1d540acf886ebf021a26c-DRO4yJly.png",h="/blog_technical/assets/image-20210310105548742-KAI2QUPu.png",g="/blog_technical/assets/70b36338611d5a249a7d2fc448f06d42-C34SlqkK.png",m="/blog_technical/assets/image-20210310111820297-Dkn9LztS.png",k="/blog_technical/assets/0274e31e74e92b61892ec11cc3cd58e7-BhjriYMo.png",u="/blog_technical/assets/9caba6d4b527052bbe7168ed4013011e-DZJSbyjg.png",S="/blog_technical/assets/image-20210310112426920-BiSN7KkG.png",b="/blog_technical/assets/image-20210310113404586-hnk4Zwg_.png",v="/blog_technical/assets/cb9a89055eadb452b7835ba8db7c3ad2-Diw78Plm.png",T={};function A(f,e){const a=p("RouteLink");return d(),t("div",null,[e[7]||(e[7]=i("h1",{id:"_04-信任始于握手-tls-1-2-连接过程解析",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#_04-信任始于握手-tls-1-2-连接过程解析"},[i("span",null,"04 | 信任始于握手: TLS 1.2 连接过程解析")])],-1)),e[8]||(e[8]=i("p",null,"经过前几讲的介绍，你应该已经熟悉了对称加密与非对称加密、数字签名与证书等密码学知识。",-1)),e[9]||(e[9]=i("p",null,"有了这些知识打底，现在我们就可以正式开始研究 HTTPS 和 TLS 协议了。",-1)),e[10]||(e[10]=i("h2",{id:"https-建立连接",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#https-建立连接"},[i("span",null,"HTTPS 建立连接")])],-1)),e[11]||(e[11]=i("p",null,[s("当你在浏览器地址栏里键入"),i("strong",null,"https"),s(" 开头的 URI，再按下回车，会发生什么呢？")],-1)),i("p",null,[e[1]||(e[1]=s("回忆一下 ")),l(a,{to:"/http-protocol/03/01.html"},{default:r(()=>e[0]||(e[0]=[s("键入网址再按下回车，后面究竟发生了什么？")])),_:1}),e[2]||(e[2]=s(" 的内容，你应该知道，浏览器首先要从 URI 里提取出协议名和域名。因为协议名是 ")),e[3]||(e[3]=i("code",null,"https",-1)),e[4]||(e[4]=s(" ，所以浏览器就知道了端口号是默认的 443，它再用 DNS 解析域名，得到目标的 IP 地址，然后就可以使用 ")),e[5]||(e[5]=i("strong",null,"三次握手与网站建立 TCP 连接",-1)),e[6]||(e[6]=s(" 了。"))]),e[12]||(e[12]=o('<p>在 HTTP 协议里，建立连接后，浏览器会立即发送请求报文。但现在是 HTTPS 协议，它需要再用另外一个 「<strong>握手</strong>」过程，在 TCP 上建立安全连接，之后才是收发 HTTP 报文。</p><p>这个其实就类似于 mysql 服务端客户端交互协议中的登录握手了，也是当 TCP 建立连接后，还需要发送握手包协商登录密码相关的加密解密算法，验证之后确定该连接可以进行后面的通信。</p><p>这个「握手」过程与 TCP 有些类似，是 HTTPS 和 TLS 协议里最重要、最核心的部分，懂了它，你就可以自豪地说自己 「掌握了 HTTPS」。</p><h2 id="tls-协议的组成" tabindex="-1"><a class="header-anchor" href="#tls-协议的组成"><span>TLS 协议的组成</span></a></h2><p>在讲 TLS 握手之前，我先简单介绍一下 TLS 协议的组成。</p><p>TLS 包含几个子协议，你也可以理解为它是由几个不同职责的模块组成，比较常用的有记录协议、警报协议、握手协议、变更密码规范协议等。</p><h3 id="记录协议" tabindex="-1"><a class="header-anchor" href="#记录协议"><span>记录协议</span></a></h3><p><strong>记录协议</strong>（Record Protocol）规定了 TLS 收发数据的基本单位：记录（record）。它有点像是 TCP 里的 segment，所有的其他子协议都需要通过记录协议发出。但多个记录数据可以在一个 TCP 包里一次性发出，也并不需要像 TCP 那样返回 ACK。</p><h3 id="警报协议" tabindex="-1"><a class="header-anchor" href="#警报协议"><span>警报协议</span></a></h3><p><strong>警报协议</strong>（Alert Protocol）的职责是向对方发出警报信息，有点像是 HTTP 协议里的状态码。比如，protocol_version 就是不支持旧版本，bad_certificate 就是证书有问题，收到警报后另一方可以选择继续，也可以立即终止连接。</p><h3 id="握手协议" tabindex="-1"><a class="header-anchor" href="#握手协议"><span>握手协议</span></a></h3><p><strong>握手协议</strong>（Handshake Protocol）是 TLS 里最复杂的子协议，要比 TCP 的 SYN/ACK 复杂的多，浏览器和服务器会在握手过程中协商 TLS 版本号、随机数、密码套件等信息，然后交换证书和密钥参数，最终双方协商得到会话密钥，用于后续的混合加密系统。</p><h3 id="变更密码规范协议" tabindex="-1"><a class="header-anchor" href="#变更密码规范协议"><span>变更密码规范协议</span></a></h3><p>最后一个是 <strong>变更密码规范协议</strong>（Change Cipher Spec Protocol），它非常简单，就是一个「通知」，告诉对方，后续的数据都将使用加密保护。那么反过来，在它之前，数据都是明文的。</p><h3 id="tls-的握手过程" tabindex="-1"><a class="header-anchor" href="#tls-的握手过程"><span>TLS 的握手过程</span></a></h3><p>下面的这张图简要地描述了 TLS 的握手过程，其中每一个「框」都是一个记录，多个记录组合成一个 TCP 包发送。所以，最多经过两次消息往返（4 个消息）就可以完成握手，然后就可以在安全的通信环境里发送 HTTP 报文，实现 HTTPS 协议。</p><figure><img src="'+c+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="抓包的准备工作" tabindex="-1"><a class="header-anchor" href="#抓包的准备工作"><span>抓包的准备工作</span></a></h2><p>这次我们在实验环境里测试 TLS 握手的 URI 是 <code>https://www.chrono.com//26-1</code>，看了上面的图你就可以知道，TLS 握手的前几个消息都是明文的，能够在 Wireshark 里直接看。但只要出现了 <code>Change Cipher Spec</code> ，后面的数据就都是密文了，看到的也就会是乱码，不知道究竟是什么东西。</p><figure><img src="'+h+'" alt="image-20210310105548742" tabindex="0" loading="lazy"><figcaption>image-20210310105548742</figcaption></figure><p>上述笔者抓包和上面图的流程是一致的，从最前面的标示线来看，也的确是这样。Change Cipher Spec 后面就是密文了</p><p>为了更好地分析 TLS 握手过程，你可以再对系统和 Wireshark 做一下设置，让浏览器导出握手过程中的秘密信息，这样 Wireshark 就可以把密文解密，还原出明文。</p><p>首先，你需要在 Windows 的设置里新增一个系统变量 <strong>SSLKEYLOGFILE</strong> ，设置浏览器日志文件的路径，比如 <code>D:\\http_study\\www\\temp\\sslkey.log</code> （具体的设置过程就不详细说了，可以在设置里搜索“系统变量”）。</p><figure><img src="'+g+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>然后在 Wireshark 设置 <code>Protocols-TLS</code>（较早版本的 Wireshark 里是 <code>SSL</code> ），在 <code>(Pre)-Master-Secret log filename</code> 里填上刚才的日志文件。</p><p>设置好之后，过滤器选择 <strong>tcp port 443</strong>，就可以抓到实验环境里的所有 HTTPS 数据了。</p><figure><img src="'+m+'" alt="image-20210310111820297" tabindex="0" loading="lazy"><figcaption>image-20210310111820297</figcaption></figure><figure><img src="'+k+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="hint-container tip"><p class="hint-container-title">提示</p><p>日志配置后，需要知道的事情有：</p><ol><li>环境变量的配置只支持 Chrome 浏览器</li><li>浏览器需要重新启动后，访问实验室环境的 https 才会往 log 中写入数据</li></ol></div><p>如果你觉得麻烦也没关系，GitHub 上有抓好的包和相应的日志，用 Wireshark 直接打开就行。</p><h2 id="ecdhe-握手过程" tabindex="-1"><a class="header-anchor" href="#ecdhe-握手过程"><span>ECDHE 握手过程</span></a></h2><p>刚才你看到的是握手过程的简要图，我又画了一个详细图，对应 Wireshark 的抓包，下面我就用这个图来仔细剖析 TLS 的握手过程。</p><figure><img src="'+u+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><figure><img src="'+S+`" alt="image-20210310112426920" tabindex="0" loading="lazy"><figcaption>image-20210310112426920</figcaption></figure><p>如果你需要自己抓包查看，笔者这边写了过滤参数是 <code>tcp.port == 443 || ip eq 127.0.0.1</code> 因为可能计算器上链接了其他的 443 端口之类的，只过滤出本机的。另外看它的握手包所在位置，不然不好对应文章中的讲解</p><p>在 TCP 建立连接之后，浏览器会首先发一个 <strong>Client Hello</strong> 消息，也就是跟服务器打招呼。里面有客户端的版本号、支持的密码套件，还有一个 <strong>随机数（Client Random）</strong> ，用于后续生成会话密钥。</p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Handshake Protocol: Client Hello</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Version: TLS 1.2 (0x0303)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Random: 1cbf803321fd2623408dfe…</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Cipher Suites (17 suites)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        Cipher Suite: TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 (0xc02f)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        Cipher Suite: TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 (0xc030)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个的意思就是：我这边有这些这些信息，你看看哪些是能用的，关键的 <strong>随机数可得留着</strong> 。</p><p>作为礼尚往来，服务器收到 <code>Client Hello</code> 后，会返回一个 <code>Server Hello</code> 消息。把版本号对一下，也给出一个 <strong>随机数（Server Random）</strong> ，然后从客户端的列表里选一个作为本次通信使用的密码套件，在这里它选择了 <code>TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384</code></p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Handshake Protocol: Server Hello</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Version: TLS 1.2 (0x0303)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Random: 0e6320f21bae50842e96…</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Cipher Suite: TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 (0xc030)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个的意思就是：版本号对上了，可以加密，你的密码套件挺多，我选一个最合适的吧，用椭圆曲线加 RSA、AES、SHA384。我也 <strong>给你一个随机数，你也得留着</strong></p><p>然后，服务器为了证明自己的身份，就把证书也发给了客户端（Server Certificate）</p><figure><img src="`+b+`" alt="image-20210310113404586" tabindex="0" loading="lazy"><figcaption>image-20210310113404586</figcaption></figure><p>接下来是一个关键的操作，因为服务器选择了 ECDHE 算法，所以它会在证书后发送 <strong>Server Key Exchange</strong> 消息，里面是 <strong>椭圆曲线的公钥（Server Params）</strong> ，用来实现密钥交换算法，再加上自己的私钥签名认证。</p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Handshake Protocol: Server Key Exchange</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    EC Diffie-Hellman Server Params</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        Curve Type: named_curve (0x03)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        Named Curve: x25519 (0x001d)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        Pubkey: 3b39deaf00217894e...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        Signature Algorithm: rsa_pkcs1_sha512 (0x0601)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        Signature: 37141adac38ea4...</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这相当于说：刚才我选的密码套件有点复杂，所以再给你个算法的参数，和刚才的随机数一样有用，别丢了。为了防止别人冒充，我又盖了个章。</p><p>之后是 <strong>Server Hello Done</strong> 消息，服务器说：我的信息就是这些，打招呼完毕。</p><p>这样第一个消息往返就结束了（两个 TCP 包），结果是客户端和服务器通过明文共享了三个信息：<strong>Client Random、Server Random 和 Server Params</strong> 。</p><p>客户端这时也拿到了服务器的证书，那这个证书是不是真实有效的呢？</p><p>这就要用到上一讲里的知识了，开始走证书链逐级验证，确认证书的真实性，再用证书公钥验证签名，就确认了服务器的身份：刚才跟我打招呼的不是骗子，可以接着往下走。</p><p>然后，客户端按照密码套件的要求，也生成一个 <strong>椭圆曲线的公钥（Client Params）</strong> ，用 <strong>Client Key Exchange</strong> 消息发给服务器。</p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Handshake Protocol: Client Key Exchange</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    EC Diffie-Hellman Client Params</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        Pubkey: 8c674d0e08dc27b5eaa…</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在客户端和服务器手里都拿到了密钥交换算法的两个参数（Client Params、Server Params），就用 ECDHE 算法一阵算，算出了一个新的东西，叫 <strong>Pre-Master</strong> ，其实也是一个随机数。</p><p>至于具体的计算原理和过程，因为太复杂就不细说了，但算法可以保证即使黑客截获了之前的参数，也是绝对算不出这个随机数的。</p><p>现在客户端和服务器手里有了三个随机数：<strong>Client Random、Server Random 和 Pre-Master</strong> 。用这三个作为原始材料，就可以生成用于加密会 话的主密钥，叫 <strong>Master Secret</strong> 。而黑客因为拿不到 <code>Pre-Master</code> ，所以也就得不到主密钥。</p><p>为什么非得这么麻烦，非要三个随机数呢？</p><p>这就必须说 TLS 的设计者考虑得非常周到了，<strong>他们不信任客户端或服务器伪随机数的可靠性</strong> ，为了保证真正的 <strong>完全随机、不可预测</strong> ，把三个不可靠的随机数混合起来，那么随机的程度就非常高了，足够让黑客难以猜测。</p><p>你一定很想知道 <code>Master Secret</code> 究竟是怎么算出来的吧，贴一下 RFC 里的公式：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>master_secret = PRF(pre_master_secret, &quot;master secret&quot;,</span></span>
<span class="line"><span>                    ClientHello.random + ServerHello.random)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的 <code>PRF</code> 就是伪随机数函数，它基于密码套件里的最后一个参数，比如这次的 SHA384，通过摘要算法来再一次强化 <code>Master Secret</code> 的随机性。</p><p>主密钥有 48 字节，但它也不是最终用于通信的会话密钥，还会再用 PRF 扩展出更多的密钥，比如客户端发送用的会话密钥（client_write_key）、服务器发送用的会话密钥（server_write_key）等等，避免只用一个密钥带来的安全隐患。</p><p>有了主密钥和派生的会话密钥，握手就快结束了。客户端发一个 <strong>Change Cipher Spec</strong> ，然后再发一个 <strong>Finished</strong> 消息，把之前所有发送的数据做个摘要，再加密一下，让服务器做个验证。</p><p>意思就是告诉服务器：后面都改用对称算法加密通信了啊，用的就是打招呼时说的 AES，加密对不对还得你测一下。</p><p>服务器也是同样的操作，发 <strong>Change Cipher Spec</strong> 和 <strong>Finished</strong> 消息，双方都验证加密解密 OK，握手正式结束，后面就收发被加密的 HTTP 请求和响应了。</p><h2 id="rsa-握手过程" tabindex="-1"><a class="header-anchor" href="#rsa-握手过程"><span>RSA 握手过程</span></a></h2><p>整个握手过程可真是够复杂的，但你可能会问了，好像这个过程和其他地方看到的不一样呢？</p><p>刚才说的其实是如今主流的 TLS 握手过程，这与传统的握手有两点不同。</p><p>第一个，使用 ECDHE 实现密钥交换，而不是 RSA，所以会在服务器端发出 <code>Server Key Exchange</code> 消息。</p><p>第二个，因为使用了 ECDHE，客户端可以不用等到服务器发回 <code>Finished</code> 确认握手完毕，立即就发出 HTTP 报文，省去了一个消息往返的时间浪费。这个叫 <strong>TLS False Start</strong> ，意思就是抢跑，和 <code>TCP Fast Open</code> 有点像，都是不等连接完全建立就提前发应用数据，提高传输的效率。</p><p>实验环境在 440 端口（<code>https://www.chrono.com:440/26-1</code>）实现了传统的 RSA 密钥交换，没有 <code>False Start</code> ，你可以课后自己抓包看一下，这里我也画了个图。</p><figure><img src="`+v+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>大体的流程没有变，只是 <code>Pre-Master</code> 不再需要用算法生成，而是客户端直接生成随机数，然后用服务器的公钥加密，通过 <strong>Client Key Exchange</strong> 消息发给服务器。服务器再用私钥解密，这样双方也实现了共享三个随机数，就可以生成主密钥。</p><p>这个相对简单一点，下面是流程：</p><ol><li><p>客户端连上服务端</p></li><li><p>服务端发送 CA 证书给客户端</p><p>发送的是一个 CA 链，不包含 ROOT 证书</p></li><li><p>客户端验证该证书的可靠性</p><p>解析 CA 链，用链条上的 CA 进行验证，一层层地验证，直到找到根证书，就能够确定证书是可信的</p></li><li><p>客户端从 CA 证书中取出公钥</p></li><li><p>客户端生成一个随机密钥 k，并用这个公钥加密得到 <code>k*</code></p></li><li><p>客户端把 <code>k*</code> 发送给服务端</p></li><li><p>服务端收到 <code>k*</code> 后用自己的私钥解密得到 k</p></li><li><p>此时双方都得到了密钥 k，协商完成</p></li><li><p>后续使用密钥 <code>k*</code> 加密信息</p></li></ol><p>攻击方式：</p><ul><li><p>防偷窥（嗅探）</p><p>攻击者虽然可以监视网络流量并拿到公钥，但是 <strong>无法</strong> 通过公钥推算出私钥（这点由 RSA 算法保证）</p><p>攻击者虽然可以监视网络流量并拿到 <code>k*</code>，但是攻击者没有私钥，<strong>无法解密 <code>k*</code></strong> ，因此也就无法得到 k</p></li><li><p>如何防范篡改（假冒身份）</p><p>如果攻击者在第 2 步篡改数据，伪造了证书，那么客户端在第 3 步会发现（这点由证书体系保证）</p><p>如果攻击者在第 6 步篡改数据，伪造了 <code>k*</code> ，那么服务端收到假的 <code>k*</code> 之后，解密会失败（这点由 RSA 算法保证）。服务端就知道被攻击了。</p></li></ul><h2 id="双向认证" tabindex="-1"><a class="header-anchor" href="#双向认证"><span>双向认证</span></a></h2><p>到这里 TLS 握手就基本讲完了。</p><p>不过上面说的是 <strong>单向认证</strong> 握手过程，只认证了服务器的身份，而没有认证客户端的身份。这是因为通常单向认证通过后已经建立了安全通信，用账号、密码等简单的手段就能够确认用户的真实身份。</p><p>但为了防止账号、密码被盗，有的时候（比如网上银行）还会使用 U 盾给用户颁发客户端证书，实现 <strong>双向认证</strong> ，这样会更加安全。</p><p>双向认证的流程也没有太多变化，只是在 <strong>Server Hello Done</strong> 之后，<strong>Client Key Exchange</strong> 之前，客户端要发送 <strong>Client Certificate</strong> 消息，服务器收到后也把证书链走一遍，验证客户端的身份。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2><p>今天我们学习了 HTTPS/TLS 的握手，内容比较多、比较难，不过记住下面四点就可以。</p><ol><li>HTTPS 协议会先与服务器执行 TCP 握手，然后执行 TLS 握手，才能建立安全连接；</li><li>握手的目标是安全地交换对称密钥，需要三个随机数，第三个随机数 <code>Pre-Master</code> 必须加密传输，绝对不能让黑客破解；</li><li><code>Hello</code> 消息交换随机数，<code>Key Exchange</code> 消息交换 <code>Pre-Master</code> ；</li><li><code>Change Cipher Spec</code> 之前传输的都是明文，之后都是对称密钥加密的密文。</li></ol><h2 id="课下作业" tabindex="-1"><a class="header-anchor" href="#课下作业"><span>课下作业</span></a></h2><ol><li>密码套件里的那些算法分别在握手过程中起了什么作用？</li><li>你能完整地描述一下 RSA 的握手过程吗？</li><li>你能画出双向认证的流程图吗？</li></ol><h2 id="拓展阅读" tabindex="-1"><a class="header-anchor" href="#拓展阅读"><span>拓展阅读</span></a></h2><ul><li>TLS 中记录协议原本定义有压缩方式，但后来发现存在安全漏洞（CRME 攻击），所以现在这个字段总是 NULL，即不压缩。</li><li>在 TLS1.2 里,客户端和随机数的长度都是 28 字节，前面的四个字节是 UNX 时间戳，但并没有实际意义。</li><li>Chrome 开发者工具的 <code>Security</code> 面板里可以看到 Https 握手时选择的版本号、密码套件和椭圆曲线，例如 <code>ECDHE_RSA With X25519，and AES_256_GCM</code></li><li>ECDHE 即 「短暂-椭圆曲线-迪菲-赫尔曼」(ephemeral Elliptic Curve Diffe-Hellman) 算法，使用椭圆曲线增强了DH 算法的安全性和性能，公钥和私钥都是临时生成的。</li><li>在 Wireshark 抓包里你还会看见 <code>Session iD</code>、<code>Extension</code> 等字段，涉及会话复用和扩展协议，后面会讲到。</li></ul>',88))])}const _=n(T,[["render",A],["__file","04.html.vue"]]),P=JSON.parse('{"path":"/http-protocol/05/04.html","title":"04 | 信任始于握手: TLS 1.2 连接过程解析","lang":"zh-CN","frontmatter":{"description":"04 | 信任始于握手: TLS 1.2 连接过程解析 经过前几讲的介绍，你应该已经熟悉了对称加密与非对称加密、数字签名与证书等密码学知识。 有了这些知识打底，现在我们就可以正式开始研究 HTTPS 和 TLS 协议了。 HTTPS 建立连接 当你在浏览器地址栏里键入https 开头的 URI，再按下回车，会发生什么呢？ 回忆一下 的内容，你应该知道，...","head":[["meta",{"property":"og:url","content":"https://www.pvzge.com/blog_technical/http-protocol/05/04.html"}],["meta",{"property":"og:title","content":"04 | 信任始于握手: TLS 1.2 连接过程解析"}],["meta",{"property":"og:description","content":"04 | 信任始于握手: TLS 1.2 连接过程解析 经过前几讲的介绍，你应该已经熟悉了对称加密与非对称加密、数字签名与证书等密码学知识。 有了这些知识打底，现在我们就可以正式开始研究 HTTPS 和 TLS 协议了。 HTTPS 建立连接 当你在浏览器地址栏里键入https 开头的 URI，再按下回车，会发生什么呢？ 回忆一下 的内容，你应该知道，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-21T11:38:46.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-21T11:38:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"04 | 信任始于握手: TLS 1.2 连接过程解析\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-21T11:38:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LMYY\\",\\"url\\":\\"https://gaozih.com\\"}]}"]]},"headers":[{"level":2,"title":"HTTPS 建立连接","slug":"https-建立连接","link":"#https-建立连接","children":[]},{"level":2,"title":"TLS 协议的组成","slug":"tls-协议的组成","link":"#tls-协议的组成","children":[{"level":3,"title":"记录协议","slug":"记录协议","link":"#记录协议","children":[]},{"level":3,"title":"警报协议","slug":"警报协议","link":"#警报协议","children":[]},{"level":3,"title":"握手协议","slug":"握手协议","link":"#握手协议","children":[]},{"level":3,"title":"变更密码规范协议","slug":"变更密码规范协议","link":"#变更密码规范协议","children":[]},{"level":3,"title":"TLS 的握手过程","slug":"tls-的握手过程","link":"#tls-的握手过程","children":[]}]},{"level":2,"title":"抓包的准备工作","slug":"抓包的准备工作","link":"#抓包的准备工作","children":[]},{"level":2,"title":"ECDHE 握手过程","slug":"ecdhe-握手过程","link":"#ecdhe-握手过程","children":[]},{"level":2,"title":"RSA 握手过程","slug":"rsa-握手过程","link":"#rsa-握手过程","children":[]},{"level":2,"title":"双向认证","slug":"双向认证","link":"#双向认证","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]},{"level":2,"title":"课下作业","slug":"课下作业","link":"#课下作业","children":[]},{"level":2,"title":"拓展阅读","slug":"拓展阅读","link":"#拓展阅读","children":[]}],"git":{"createdTime":1734781126000,"updatedTime":1734781126000,"contributors":[{"name":"liao_rh","username":"liao_rh","email":"993929808@qq.com","commits":1,"url":"https://github.com/liao_rh"}]},"readingTime":{"minutes":13.74,"words":4122},"filePathRelative":"http-protocol/05/04.md","localizedDate":"2024年12月21日","autoDesc":true}');export{_ as comp,P as data};
