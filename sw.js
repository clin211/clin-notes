if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let a={};const t=e=>n(e,l),d={module:{uri:l},exports:a,require:t};s[l]=Promise.all(i.map((e=>d[e]||t(e)))).then((e=>(r(...e),a)))}}define(["./workbox-d2706bf3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"c331d9e25af505a5756285fe93c11f42"},{url:"assets/app.BSufJ6ZF.js",revision:null},{url:"assets/backend_go_01Go的前世今生.md.BPNfKnlk.js",revision:null},{url:"assets/backend_go_01Go的前世今生.md.BPNfKnlk.lean.js",revision:null},{url:"assets/backend_go_02Go的变量、常量和作用域.md.Bu49XD26.js",revision:null},{url:"assets/backend_go_02Go的变量、常量和作用域.md.Bu49XD26.lean.js",revision:null},{url:"assets/backend_go_03Go语言中的字符串.md.Ciz77qfP.js",revision:null},{url:"assets/backend_go_03Go语言中的字符串.md.Ciz77qfP.lean.js",revision:null},{url:"assets/backend_go_index.md.CCiNBrYi.js",revision:null},{url:"assets/backend_go_index.md.CCiNBrYi.lean.js",revision:null},{url:"assets/backend_index.md.BeyusKUv.js",revision:null},{url:"assets/backend_index.md.BeyusKUv.lean.js",revision:null},{url:"assets/backend_nestjs_index.md.CVQYzFV7.js",revision:null},{url:"assets/backend_nestjs_index.md.CVQYzFV7.lean.js",revision:null},{url:"assets/chunks/@localSearchIndexroot.VvW8qO1k.js",revision:null},{url:"assets/chunks/framework.811g1O6C.js",revision:null},{url:"assets/chunks/theme.D2ZQwm2g.js",revision:null},{url:"assets/chunks/VPLocalSearchBox.DsmRvRAy.js",revision:null},{url:"assets/frontend_css_index.md.BqLU8hfm.js",revision:null},{url:"assets/frontend_css_index.md.BqLU8hfm.lean.js",revision:null},{url:"assets/frontend_flutter_index.md.WwCh9Eur.js",revision:null},{url:"assets/frontend_flutter_index.md.WwCh9Eur.lean.js",revision:null},{url:"assets/frontend_html_index.md.CqxuoONm.js",revision:null},{url:"assets/frontend_html_index.md.CqxuoONm.lean.js",revision:null},{url:"assets/frontend_index.md.Cpsq5u0-.js",revision:null},{url:"assets/frontend_index.md.Cpsq5u0-.lean.js",revision:null},{url:"assets/frontend_javascript_01初识JavaScript.md.CbX5jX1K.js",revision:null},{url:"assets/frontend_javascript_01初识JavaScript.md.CbX5jX1K.lean.js",revision:null},{url:"assets/frontend_javascript_02.md.Cm9m675V.js",revision:null},{url:"assets/frontend_javascript_02.md.Cm9m675V.lean.js",revision:null},{url:"assets/frontend_javascript_03.md.D0gpUTEU.js",revision:null},{url:"assets/frontend_javascript_03.md.D0gpUTEU.lean.js",revision:null},{url:"assets/frontend_javascript_04变量、作用域与内存.md.HLylq2BA.js",revision:null},{url:"assets/frontend_javascript_04变量、作用域与内存.md.HLylq2BA.lean.js",revision:null},{url:"assets/frontend_javascript_05引用值与原始值.md.B6zhnIMf.js",revision:null},{url:"assets/frontend_javascript_05引用值与原始值.md.B6zhnIMf.lean.js",revision:null},{url:"assets/frontend_javascript_index.md.CLq4PC0l.js",revision:null},{url:"assets/frontend_javascript_index.md.CLq4PC0l.lean.js",revision:null},{url:"assets/frontend_next_index.md.CaXmMWoB.js",revision:null},{url:"assets/frontend_next_index.md.CaXmMWoB.lean.js",revision:null},{url:"assets/frontend_react_index.md.CLsWCXsj.js",revision:null},{url:"assets/frontend_react_index.md.CLsWCXsj.lean.js",revision:null},{url:"assets/frontend_react-native_index.md.BOMrzSC2.js",revision:null},{url:"assets/frontend_react-native_index.md.BOMrzSC2.lean.js",revision:null},{url:"assets/frontend_vue_index.md.cPCa4lE5.js",revision:null},{url:"assets/frontend_vue_index.md.cPCa4lE5.lean.js",revision:null},{url:"assets/index.md.CRbKTfy3.js",revision:null},{url:"assets/index.md.CRbKTfy3.lean.js",revision:null},{url:"assets/inter-italic-cyrillic-ext.r48I6akx.woff2",revision:null},{url:"assets/inter-italic-cyrillic.By2_1cv3.woff2",revision:null},{url:"assets/inter-italic-greek-ext.1u6EdAuj.woff2",revision:null},{url:"assets/inter-italic-greek.DJ8dCoTZ.woff2",revision:null},{url:"assets/inter-italic-latin-ext.CN1xVJS-.woff2",revision:null},{url:"assets/inter-italic-latin.C2AdPX0b.woff2",revision:null},{url:"assets/inter-italic-vietnamese.BSbpV94h.woff2",revision:null},{url:"assets/inter-roman-cyrillic-ext.BBPuwvHQ.woff2",revision:null},{url:"assets/inter-roman-cyrillic.C5lxZ8CY.woff2",revision:null},{url:"assets/inter-roman-greek-ext.CqjqNYQ-.woff2",revision:null},{url:"assets/inter-roman-greek.BBVDIX6e.woff2",revision:null},{url:"assets/inter-roman-latin-ext.4ZJIpNVo.woff2",revision:null},{url:"assets/inter-roman-latin.Di8DUHzh.woff2",revision:null},{url:"assets/inter-roman-vietnamese.BjW4sHH5.woff2",revision:null},{url:"assets/style.BRXrl8_B.css",revision:null},{url:"backend/go/01Go的前世今生.html",revision:"84f25570604ed791f3f2941f5359ef39"},{url:"backend/go/02Go的变量、常量和作用域.html",revision:"38344966f3a14e035a95dd9a089d9f2e"},{url:"backend/go/03Go语言中的字符串.html",revision:"ac501d4750ec50bc77d93b826a231094"},{url:"backend/go/index.html",revision:"a97508bddd9fb25690ef0789062da1e6"},{url:"backend/index.html",revision:"2a7f634aca77f84052aa02288a569205"},{url:"backend/nestjs/index.html",revision:"880cf24ed38001074e2d8878391313b7"},{url:"css/fancybox.css",revision:"3a867c1ea947834b92530f9d57fa799a"},{url:"frontend/css/index.html",revision:"21a4707683aba3ed43674c315cafa8df"},{url:"frontend/flutter/index.html",revision:"62f2b563bd1d2b792ebeaa0092187fbe"},{url:"frontend/html/index.html",revision:"5fd463a1039af353ad9f34cadb77354b"},{url:"frontend/index.html",revision:"fc2ef5bcad452592a8b4b9b7f70108b5"},{url:"frontend/javascript/01初识JavaScript.html",revision:"f102b798d4b213730ac50b5dee1bb54a"},{url:"frontend/javascript/02.html",revision:"e7ba6c3d7d6846eae936f3f6a61323c3"},{url:"frontend/javascript/03.html",revision:"a89d39802f757d1e904ba903f9c14586"},{url:"frontend/javascript/04变量、作用域与内存.html",revision:"bad1bbe9e5d34acf5f821a412fd61679"},{url:"frontend/javascript/05引用值与原始值.html",revision:"f3099cc977f3b7f0051980f85dd4fbb8"},{url:"frontend/javascript/index.html",revision:"cccd1718d0e4f1c46e3995682c753731"},{url:"frontend/next/index.html",revision:"4342521be9c3a727847dd7c5ee9ceb54"},{url:"frontend/react-native/index.html",revision:"75b7ec672cc20fd251b89323b00db8d8"},{url:"frontend/react/index.html",revision:"ebcfc78c1969d1e2eefdedca37cd7852"},{url:"frontend/vue/index.html",revision:"a085621f953fa414e751819cce22d082"},{url:"index.html",revision:"abd49d400a758d90236c7817d8ce9887"},{url:"js/fancybox.umd.js",revision:"2f1b8cd1daab3056cda543dd0ddffce4"},{url:"registerSW.js",revision:"c65ffd4d13a42958be8d7a417882e8e4"},{url:"seal.png",revision:"4428490ece540cf796ae67a1f1b4a802"},{url:"manifest.webmanifest",revision:"efdc557ef0b1b7dd6ced77d9bd427ba8"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new e.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/i,new e.NetworkFirst({cacheName:"jsdelivr-images-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:604800}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
