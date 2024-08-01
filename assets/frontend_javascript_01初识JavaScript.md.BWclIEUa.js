import{_ as s,c as i,o as a,a6 as t}from"./chunks/framework.DlcOlmW9.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/javascript/01初识JavaScript.md","filePath":"frontend/javascript/01初识JavaScript.md","lastUpdated":1722526680000}'),n={name:"frontend/javascript/01初识JavaScript.md"},l=t(`<h2 id="script-元素" tabindex="-1">script 元素 <a class="header-anchor" href="#script-元素" aria-label="Permalink to &quot;script 元素&quot;">​</a></h2><h3 id="javascript-在网页中解决的问题" tabindex="-1">JavaScript 在网页中解决的问题 <a class="header-anchor" href="#javascript-在网页中解决的问题" aria-label="Permalink to &quot;JavaScript 在网页中解决的问题&quot;">​</a></h3><ul><li><strong>交互性</strong>：JavaScript允许网页与用户进行交互，比如表单验证、动态效果（例如滑动、淡入淡出等）、弹出对话框等。</li><li><strong>动态内容更新</strong>：通过 JavaScript，你可以在不刷新页面的情况下更新网页的部分内容。这是通过与后端服务器进行异步通信（通常使用 <code>XMLHttpRequest</code> 或<code>Fetch API</code>），然后使用 JavaScript 操作 DOM 来更新页面内容实现的。</li><li><strong>控制浏览器行为</strong>：JavaScript可以用来控制浏览器的行为，如改变窗口大小、导航、打开新的标签页等。</li><li><strong>访问浏览器API</strong>：JavaScript可以访问和操作浏览器提供的各种 API，包括地理位置、摄像头、音频、图形等。</li><li><strong>创建复杂的Web应用</strong>：JavaScript可以用来创建复杂的 Web 应用，比如在线文档编辑器、图像编辑器、音乐播放器等。</li><li><strong>客户端存储</strong>：JavaScript可以操作 <code>cookies</code> 和<code>Web Storage API</code>，从而在用户的浏览器上存储数据。</li><li><strong>动画和视觉效果</strong>：通过操作 <code>HTML</code> 和<code>CSS</code>，<code>JavaScript</code>可以创建各种动画和视觉效果。</li></ul><h3 id="javascript-元素中的属性" tabindex="-1">JavaScript 元素中的属性 <a class="header-anchor" href="#javascript-元素中的属性" aria-label="Permalink to &quot;JavaScript 元素中的属性&quot;">​</a></h3><ul><li><strong>async</strong>：可选，<strong>表示立即下载文件资源，不会阻止页面其他操作</strong>；比如下载资源、等待其他脚本加载。此属性只对外部脚本文件有效。</li><li><strong>charset</strong>：可选，<strong>使用 src 属性指定的代码字符集</strong>。</li><li><strong>crossorigin</strong>：可选，<strong>配置相关请求的 CORS(跨源资源共享)设置，默认不使用 CORS。</strong> <code>corsorigin=&quot;anonymous&quot;</code> 配置文件请求不比设置凭据标志。 <code>corsorigin=&quot;use-credentials&quot;</code>  设置凭据标志，意味着出站请求会包含凭据。</li><li><strong>defer</strong>：可选，<strong>表示文档解析或者显示完成之后再执行脚本</strong>；只对外部脚本文件有效，在 IE7 及更早的浏览器版本中，对行内脚本也可以指定这个属性。</li><li><strong>integrity</strong>：可选，<strong>允许比对接收到资源的签名和指定的加密签名以及验证子资源完整性，如果接收到的资源的签名与这个属性指定的签名不匹配，则页面会报错，脚本不会执行</strong>，这个属性可以用于确保内容分发网络不会提供恶意内容。</li><li><strong>language</strong>：废弃，最初用于表示代码块的脚本语言(如“JavaScript”、“JavaScript1.2”、或“VBScript”)，大多数浏览器都会忽略这个属性。</li><li><strong>src</strong>：可选，<strong>表示包含要执行的代码的外部文件</strong>。</li><li><strong>type</strong>：可选，代替 language，表示<strong>代码中脚本语言的内容类型</strong>(也称 MIME 类型)，<strong>如果这个值是 module，则代码会当成 es6 模块</strong></li></ul><blockquote><p>script 的使用方式有两种：</p><ul><li>通过它直接在网页中嵌入 JavaScript 代码，但在执行代码中不能有 <code>&lt;/script&gt;</code><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    function say(){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;say hi&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  	     console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;/script&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 报错，js解析时会将其解析为script的结束标签</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 修改后如下代码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    function say(){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;say hi&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  	     console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">script&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// \\转义</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></li><li>src 引入外部文件内；例如：<div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://cdn.jsdelivr.net/npm/vue/dist/vue.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></li></ul></blockquote><h3 id="标签的位置" tabindex="-1">标签的位置 <a class="header-anchor" href="#标签的位置" aria-label="Permalink to &quot;标签的位置&quot;">​</a></h3><p>之前都将 <code>script</code> 元素放到 <code>head</code> 标签内，这样也就意味着要将所有的 JavaScript 代码都下载、解析和解释完成之后，才能开始渲染页面，对于需要很多 JavaScript 的页面，这就会导致页面渲染的明显延迟，在此期间浏览器窗口完全空白，为解决这个问题，现代 web 应用程序通常将所有的 JavaScript 引入放在 <code>body</code> 元素中的页面内容后面。</p><h3 id="推迟执行脚本" tabindex="-1">推迟执行脚本 <a class="header-anchor" href="#推迟执行脚本" aria-label="Permalink to &quot;推迟执行脚本&quot;">​</a></h3><p>在 HTML 4.01 为 script 元素定义了一个叫 <code>defer</code> 的属性，这个属性表示脚本再执行的时候<strong>不会改变页面的结构</strong>，因此这个脚本完全可以在整个页面解析完成之后再运行，<strong>HTML5 规范要求脚本应该按照他们出现的顺序执行，因此第一个推迟的脚本会在第二个推迟的脚本之前执行，而且两者都会在 <code>DOMContentLoaded</code> 事件之前执行</strong>；不过在实际当中，推迟脚本不一定总会按照顺序执行或者再 <code>DOMContentLoad</code> 事件之前执行，因此最好只包含一个这样的脚本。</p><blockquote><p><strong>defer 属性只对外部脚本文件才生效</strong>，对 defer 属性的支持是从 IE4.0、Firefox3.5、Safari 5 和 chrome 7 开始的，其他浏览器则会忽略这一属性，考虑到这一点、还是<em>把推迟脚本放在页面底部较好</em></p></blockquote><h3 id="异步执行脚本" tabindex="-1">异步执行脚本 <a class="header-anchor" href="#异步执行脚本" aria-label="Permalink to &quot;异步执行脚本&quot;">​</a></h3><p>HTML5 为 <code>script</code> 标签定义了 <code>async</code> 属性，从改变脚本处理方式上看，<code>async</code> 属性与 <code>defer</code> 类似，两者都是只适用于外部脚本文件，都会告诉浏览器立即开始下载，不过，与 <code>defer</code> 不同的是标记为 <code>async</code> 的脚本并不能保证按照他们出现的顺序来依次执行</p><h3 id="动态加载脚本" tabindex="-1">动态加载脚本 <a class="header-anchor" href="#动态加载脚本" aria-label="Permalink to &quot;动态加载脚本&quot;">​</a></h3><p>通过向 DOM 中动态添加 <code>script</code> 元素同样可以加载指定的脚本，默认情况下，以这种方式创建的 <code>script</code> 元素是以异步加载的，相当于添加了 <code>async</code> 属性，这样可能会导致的问题是，所有浏览器都支持 <code>createElement()</code> 方法，但不是所有浏览器都支持 <code>async</code> 属性，因此，如果要统一动态脚本的加载行为，可以明确将其设置为同步加载。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> script</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;script&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">script.src </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;https://cdn.jsdelivr.net/npm/vue/dist/vue.js&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">script.async </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.head.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">appendChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(script)</span></span></code></pre></div><p>以这种方式获取的资源对浏览器预加载器是不可见的。这会<strong>严重影响它们在资源获取队列中的优先 级</strong>。根据应用程序的工作方式以及怎么使用，这种方式可能会严重影响性能。要想让预加载器知道这些 动态请求文件的存在，可以在文档头部显式声明它们：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rel</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;preload&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://cdn.jsdelivr.net/npm/vue/dist/vue.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="xhtml-中的变化" tabindex="-1">XHTML 中的变化 <a class="header-anchor" href="#xhtml-中的变化" aria-label="Permalink to &quot;XHTML 中的变化&quot;">​</a></h2><p>XHTML: 可扩展超文本标记语言（Extentsible HyperText Markup Language）是将 HTML 作文 XML 的应用重新包装的结果；与 HTML 不同的是在 XHTML 中使用 JavaScript 必须指定 <code>type</code> 属性且值为 <code>text/javascript</code>；HTML 可没有这个属性。</p><h3 id="javascript-在-xhtml-中的解析规则" tabindex="-1">JavaScript 在 XHTML 中的解析规则： <a class="header-anchor" href="#javascript-在-xhtml-中的解析规则" aria-label="Permalink to &quot;JavaScript 在 XHTML 中的解析规则：&quot;">​</a></h3><p>XHTML 中嵌套的 JavaScript 代码，若有比较运算符（&lt;）则会被解析为一个标签的开始，并且由于标签的开始的小于符号后面不能有空格，所以会导致语法错误；解决如上问题的方案有两个：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;!--</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  在 xhtml 中会报错的问题：</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、没有type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text/javascript&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">属性值声明</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、小于符号会被解析为一个标签的开始</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    function compare () {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            console.log(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a is less than b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        else if(a &gt; b) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            console.log(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a is greater than b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        else {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            console.log(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a is equal to b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/script&gt;</span></span></code></pre></div><blockquote><ul><li>将所有的小于符号都替换成对应的 HTML 实体形式(<code>&lt;</code>)。</li><li>将所有的代码都包含在 CDATA 中；<strong>在 XHTML 中，CDATA 块表示文档可以包含文档的区块</strong>，其内容不作为标签来解析，因此可以在其中包含任意字符，包括小于符号，并且不会引起语法错误。</li></ul></blockquote><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text/javascript&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;![CDATA[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        function compare () {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                console.log(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a is less than b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            else if(a &gt; b) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                console.log(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a is greater than b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            else {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                console.log(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a is equal to b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]]&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/script&gt;</span></span></code></pre></div><p>在兼容 XHTML 的浏览器中，这样能解决问题，但在不支持 CDATA 块的非 XHTML 浏览器中则不行；为此 CDATA 必须使用 JavaScript 注释来抵消：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text/javascript&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    //&lt;![CDATA[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        function compare () {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                console.log(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a is less than b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            else if(a &gt; b) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                console.log(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a is greater than b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            else {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                console.log(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a is equal to b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //]]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/script&gt;</span></span></code></pre></div><h2 id="行内的代码与外部代码" tabindex="-1">行内的代码与外部代码 <a class="header-anchor" href="#行内的代码与外部代码" aria-label="Permalink to &quot;行内的代码与外部代码&quot;">​</a></h2><p>虽然可以在 html 文件中嵌套 JavaScript 代码，但通常认为最佳实践是尽可能将 JavaScript 代码放在外部文件；不过这个最佳实践并不是明确的强制性规则，不过有一下好处：</p><ul><li>可维护：JavaScript 代码如果分散到很多 HTML 页面，会导致维护困难。而<em>用一个目录保存所有 JavaScript 文件，则更容易维护，这样开发者就可以独立于使用它们的 HTML 页面来编辑代码</em>。</li><li>缓存：浏览器会根据特定的设置缓存所有外部链接的 JavaScript 文件，这意味着如果两个页面都 用到同一个文件，则该文件只需下载一次。这最终意味着页面加载更快。</li><li>适应未来：通过把 JavaScript 放到外部文件中，就不必考虑用 XHTML 或前面提到的注释黑科技。 包含外部 JavaScript 文件的语法在 HTML 和 XHTML 中是一样的。</li></ul><h2 id="文档模式" tabindex="-1">文档模式 <a class="header-anchor" href="#文档模式" aria-label="Permalink to &quot;文档模式&quot;">​</a></h2><ul><li>混杂模式： 在所有浏览器中都以省略文档开头的 <code>doctype</code> 声明作为开关</li><li>标准模式： <ol><li>HTML 4.01 严格模式下：<div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;!</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">DOCTYPE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HTML</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PUBLIC</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;-//W3C//DTD HTML 4.01//EN&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;http://www.w3.org/TR/html4/strict.dtd&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></li><li>XHTML 1.0 严格模式下：<div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- XHTML 1.0 Strict --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;!</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">DOCTYPE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> html</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PUBLIC</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;-//W3C//DTD XHTML 1.0 Strict//EN&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></li><li>HTML 5<div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;!</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">DOCTYPE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></li></ol></li><li>准标准模式：准标准模式通过**过渡性文档类型（Transitional）和框架集文档类型（Frameset）**来触发</li></ul><h2 id="noscript-元素" tabindex="-1">noscript 元素 <a class="header-anchor" href="#noscript-元素" aria-label="Permalink to &quot;noscript 元素&quot;">​</a></h2><p>针对早期浏览器不支持 JavaScript 的问题的优雅降级的处理方案 <code>noscript</code> 中可以包含 body 中的任何元素，<code>&lt;script&gt;</code> 除外，以下情况任意一点出现浏览器将显示其内容：</p><ul><li>浏览器不执行脚本</li><li>浏览器对脚本的支持被关闭</li></ul><p>任何一个条件被满足，包含在 <code>&lt;noscript&gt;</code> 中的内容就会被渲染。否则，浏览器不会渲染 <code>&lt;noscript&gt;</code> 中的内容。</p><h2 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h2><p>JavaScript 是通过 <code>&lt;script&gt;</code> 元素插入到 HTML 页面中的。这个元素可用于把 JavaScript 代码嵌入到 HTML 页面中，跟其他标记混合在一起，也可用于引入保存在外部文件中的 JavaScript。 要包含外部 JavaScript 文件，必须将 <code>src</code> 属性设置为要包含文件的 <code>URL</code>。文件可以跟网页在同 一台服务器上，也可以位于完全不同的域。</p><ul><li>所有 <code>&lt;script&gt;</code> 元素会依照它们在网页中出现的次序被解释。在不使用 <code>defer</code> 和 <code>async</code> 属性的 情况下，包含在 <code>&lt;script&gt;</code> 元素中的代码必须严格按次序解释。</li><li>对不推迟执行的脚本，浏览器必须解释完位于 <code>&lt;script&gt;</code> 元素中的代码，然后才能继续渲染页面 的剩余部分。为此，通常应该把 <code>&lt;script&gt;</code> 元素放到页面末尾，介于主内容之后及 <code>&lt;/body&gt;</code> 标签 之前。</li><li>可以使用 <code>defer</code> 属性把脚本推迟到文档渲染完毕后再执行。推迟的脚本原则上按照它们被列出 的次序执行。</li><li>可以使用 <code>async</code> 属性表示脚本不需要等待其他脚本，同时也不阻塞文档渲染，即异步加载。异 步脚本不能保证按照它们在页面中出现的次序执行。</li><li>通过使用 <code>&lt;noscript&gt;</code> 元素，可以指定在浏览器不支持脚本时显示的内容。如果浏览器支持并启 用脚本，则 <code>&lt;noscript&gt;</code> 元素中的任何内容都不会被渲染。</li></ul>`,39),p=[l];function e(h,k,r,c,d,E){return a(),i("div",null,p)}const y=s(n,[["render",e]]);export{g as __pageData,y as default};
