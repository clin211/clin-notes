if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const a=e=>i(e,r),u={module:{uri:r},exports:t,require:a};s[r]=Promise.all(l.map((e=>u[e]||a(e)))).then((e=>(n(...e),t)))}}define(["./workbox-d2706bf3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"ff51ab78fecbb5f01d3f7d76566b8cd1"},{url:"advanced/1item.html",revision:"0e900058c27e24426ab59806cf8af5b0"},{url:"advanced/2item.html",revision:"80556682c4b7ec066c316f014dd3975e"},{url:"advanced/3item.html",revision:"e2cee72b7adb78184732e8cba9f0f4a8"},{url:"advanced/4item.html",revision:"fed7fa0dd8bcdd7d4b7a10f1c0803956"},{url:"advanced/5item.html",revision:"23cc989e3b1c2d0483ca803538aee40e"},{url:"advanced/6item.html",revision:"6375b0ba1e98e8c045b5f9937c7ea678"},{url:"advanced/7item.html",revision:"91ad7640b15e78cb58c153296b12589c"},{url:"advanced/8item.html",revision:"30e3640a0cbc6ad31afc3b5ccff77eaf"},{url:"advanced/9item.html",revision:"315415eeef7089e52ed7bf2c37f199e2"},{url:"advanced/index.html",revision:"5c0e353faea9e74a28d1493233314a6c"},{url:"article-updates/1item.html",revision:"c39a382550543175a033ab914a0a0e44"},{url:"article-updates/2item.html",revision:"2496a82d2aba6231ce1528b0baf6ca14"},{url:"article-updates/3item.html",revision:"9ceda78c07356782c637273044692eb8"},{url:"article-updates/4item.html",revision:"ff7d4560c80ea4c6c88abab3fe814aff"},{url:"article-updates/5item.html",revision:"44746ff18f82144f507f9981f17825cf"},{url:"article-updates/6item.html",revision:"32bcf3cb38b85c909deaba0cc9e644bb"},{url:"article-updates/7item.html",revision:"493c5ee4a31b01eccda929b940924fcb"},{url:"article-updates/8item.html",revision:"abc34c4b2ae8e25a33033709f8f284cf"},{url:"article-updates/9item.html",revision:"4a58d77ae61588c9aebad63022d58b44"},{url:"article-updates/index.html",revision:"886380508d61fa428c6c42bcf257ac5e"},{url:"assets/advanced_1item.md.B4SA9MQq.js",revision:null},{url:"assets/advanced_1item.md.B4SA9MQq.lean.js",revision:null},{url:"assets/advanced_2item.md.tcgBX1p5.js",revision:null},{url:"assets/advanced_2item.md.tcgBX1p5.lean.js",revision:null},{url:"assets/advanced_3item.md.Bget2mTv.js",revision:null},{url:"assets/advanced_3item.md.Bget2mTv.lean.js",revision:null},{url:"assets/advanced_4item.md.DsshFccI.js",revision:null},{url:"assets/advanced_4item.md.DsshFccI.lean.js",revision:null},{url:"assets/advanced_5item.md.DzzaR69E.js",revision:null},{url:"assets/advanced_5item.md.DzzaR69E.lean.js",revision:null},{url:"assets/advanced_6item.md.C_-Wisur.js",revision:null},{url:"assets/advanced_6item.md.C_-Wisur.lean.js",revision:null},{url:"assets/advanced_7item.md.CI2Vp6cF.js",revision:null},{url:"assets/advanced_7item.md.CI2Vp6cF.lean.js",revision:null},{url:"assets/advanced_8item.md.CgohMz1S.js",revision:null},{url:"assets/advanced_8item.md.CgohMz1S.lean.js",revision:null},{url:"assets/advanced_9item.md.C_4JyXvs.js",revision:null},{url:"assets/advanced_9item.md.C_4JyXvs.lean.js",revision:null},{url:"assets/advanced_index.md.Cz5FkU1s.js",revision:null},{url:"assets/advanced_index.md.Cz5FkU1s.lean.js",revision:null},{url:"assets/app.Cxt675ES.js",revision:null},{url:"assets/article-updates_1item.md.CeNh_reK.js",revision:null},{url:"assets/article-updates_1item.md.CeNh_reK.lean.js",revision:null},{url:"assets/article-updates_2item.md.DKvSqsBh.js",revision:null},{url:"assets/article-updates_2item.md.DKvSqsBh.lean.js",revision:null},{url:"assets/article-updates_3item.md.Dz5owj84.js",revision:null},{url:"assets/article-updates_3item.md.Dz5owj84.lean.js",revision:null},{url:"assets/article-updates_4item.md.oBrb8eWF.js",revision:null},{url:"assets/article-updates_4item.md.oBrb8eWF.lean.js",revision:null},{url:"assets/article-updates_5item.md.SBYTWvMB.js",revision:null},{url:"assets/article-updates_5item.md.SBYTWvMB.lean.js",revision:null},{url:"assets/article-updates_6item.md.B1gaUQJk.js",revision:null},{url:"assets/article-updates_6item.md.B1gaUQJk.lean.js",revision:null},{url:"assets/article-updates_7item.md.Bd1XjxfE.js",revision:null},{url:"assets/article-updates_7item.md.Bd1XjxfE.lean.js",revision:null},{url:"assets/article-updates_8item.md.4LyyRe2W.js",revision:null},{url:"assets/article-updates_8item.md.4LyyRe2W.lean.js",revision:null},{url:"assets/article-updates_9item.md.DJRTH9Dv.js",revision:null},{url:"assets/article-updates_9item.md.DJRTH9Dv.lean.js",revision:null},{url:"assets/article-updates_index.md.C_mhJFF4.js",revision:null},{url:"assets/article-updates_index.md.C_mhJFF4.lean.js",revision:null},{url:"assets/basic_1自定义主题.md.CkJIXXw2.js",revision:null},{url:"assets/basic_1自定义主题.md.CkJIXXw2.lean.js",revision:null},{url:"assets/basic_2扩展默认主题.md.B3TnePvG.js",revision:null},{url:"assets/basic_2扩展默认主题.md.B3TnePvG.lean.js",revision:null},{url:"assets/basic_3数据加载.md.XhiLyItY.js",revision:null},{url:"assets/basic_3数据加载.md.XhiLyItY.lean.js",revision:null},{url:"assets/basic_4SSR兼容.md.DVO_m6ph.js",revision:null},{url:"assets/basic_4SSR兼容.md.DVO_m6ph.lean.js",revision:null},{url:"assets/basic_5连接到CMS.md.CkTBmCYc.js",revision:null},{url:"assets/basic_5连接到CMS.md.CkTBmCYc.lean.js",revision:null},{url:"assets/basic_6item.md.DIbEtmYp.js",revision:null},{url:"assets/basic_6item.md.DIbEtmYp.lean.js",revision:null},{url:"assets/basic_7item.md.BQ-6IlW5.js",revision:null},{url:"assets/basic_7item.md.BQ-6IlW5.lean.js",revision:null},{url:"assets/basic_8item.md.CwrfcEab.js",revision:null},{url:"assets/basic_8item.md.CwrfcEab.lean.js",revision:null},{url:"assets/basic_9item.md.DadD1lJ6.js",revision:null},{url:"assets/basic_9item.md.DadD1lJ6.lean.js",revision:null},{url:"assets/basic_index.md.B-vUr95m.js",revision:null},{url:"assets/basic_index.md.B-vUr95m.lean.js",revision:null},{url:"assets/chunks/@localSearchIndexroot.Bx8MczjV.js",revision:null},{url:"assets/chunks/framework.CjM9PFrV.js",revision:null},{url:"assets/chunks/theme.2Itte035.js",revision:null},{url:"assets/chunks/VPLocalSearchBox.BRUu7-lZ.js",revision:null},{url:"assets/daily-question_1item.md.CgBIrI9r.js",revision:null},{url:"assets/daily-question_1item.md.CgBIrI9r.lean.js",revision:null},{url:"assets/daily-question_2item.md.Ba6STfGv.js",revision:null},{url:"assets/daily-question_2item.md.Ba6STfGv.lean.js",revision:null},{url:"assets/daily-question_3item.md.BZJW7p3y.js",revision:null},{url:"assets/daily-question_3item.md.BZJW7p3y.lean.js",revision:null},{url:"assets/daily-question_4item.md.W88bRuld.js",revision:null},{url:"assets/daily-question_4item.md.W88bRuld.lean.js",revision:null},{url:"assets/daily-question_5item.md.DuKv1qjw.js",revision:null},{url:"assets/daily-question_5item.md.DuKv1qjw.lean.js",revision:null},{url:"assets/daily-question_6item.md.Dt7Iv0CO.js",revision:null},{url:"assets/daily-question_6item.md.Dt7Iv0CO.lean.js",revision:null},{url:"assets/daily-question_7item.md.Cg4zDa2t.js",revision:null},{url:"assets/daily-question_7item.md.Cg4zDa2t.lean.js",revision:null},{url:"assets/daily-question_8item.md.xdS2m9TA.js",revision:null},{url:"assets/daily-question_8item.md.xdS2m9TA.lean.js",revision:null},{url:"assets/daily-question_9item.md.CvMGKZgE.js",revision:null},{url:"assets/daily-question_9item.md.CvMGKZgE.lean.js",revision:null},{url:"assets/daily-question_index.md.MPGbLGWo.js",revision:null},{url:"assets/daily-question_index.md.MPGbLGWo.lean.js",revision:null},{url:"assets/document_1item.md.BEQKW8bZ.js",revision:null},{url:"assets/document_1item.md.BEQKW8bZ.lean.js",revision:null},{url:"assets/document_2item.md.o-3D1Av0.js",revision:null},{url:"assets/document_2item.md.o-3D1Av0.lean.js",revision:null},{url:"assets/document_3item.md.BNJuh0nS.js",revision:null},{url:"assets/document_3item.md.BNJuh0nS.lean.js",revision:null},{url:"assets/document_4item.md.Bdv0bZZg.js",revision:null},{url:"assets/document_4item.md.Bdv0bZZg.lean.js",revision:null},{url:"assets/document_5item.md.Bmjs8v4Y.js",revision:null},{url:"assets/document_5item.md.Bmjs8v4Y.lean.js",revision:null},{url:"assets/document_6item.md.CO1_61Yf.js",revision:null},{url:"assets/document_6item.md.CO1_61Yf.lean.js",revision:null},{url:"assets/document_7item.md.BS6g0aXf.js",revision:null},{url:"assets/document_7item.md.BS6g0aXf.lean.js",revision:null},{url:"assets/document_8item.md.D4DQHJjL.js",revision:null},{url:"assets/document_8item.md.D4DQHJjL.lean.js",revision:null},{url:"assets/document_9item.md.DUm6S21A.js",revision:null},{url:"assets/document_9item.md.DUm6S21A.lean.js",revision:null},{url:"assets/document_index.md.BODSmGZp.js",revision:null},{url:"assets/document_index.md.BODSmGZp.lean.js",revision:null},{url:"assets/featured_1item.md.Cp08zqjI.js",revision:null},{url:"assets/featured_1item.md.Cp08zqjI.lean.js",revision:null},{url:"assets/featured_2item.md.BcJFSDJl.js",revision:null},{url:"assets/featured_2item.md.BcJFSDJl.lean.js",revision:null},{url:"assets/featured_3item.md.BOMVPcfs.js",revision:null},{url:"assets/featured_3item.md.BOMVPcfs.lean.js",revision:null},{url:"assets/featured_4item.md.Cjxb6_Z0.js",revision:null},{url:"assets/featured_4item.md.Cjxb6_Z0.lean.js",revision:null},{url:"assets/featured_5item.md.Cs9qcMla.js",revision:null},{url:"assets/featured_5item.md.Cs9qcMla.lean.js",revision:null},{url:"assets/featured_6item.md.7GIscd97.js",revision:null},{url:"assets/featured_6item.md.7GIscd97.lean.js",revision:null},{url:"assets/featured_7item.md.DM0MI_MT.js",revision:null},{url:"assets/featured_7item.md.DM0MI_MT.lean.js",revision:null},{url:"assets/featured_8item.md.Jz1A4ZNg.js",revision:null},{url:"assets/featured_8item.md.Jz1A4ZNg.lean.js",revision:null},{url:"assets/featured_9item.md.DJKoMTYI.js",revision:null},{url:"assets/featured_9item.md.DJKoMTYI.lean.js",revision:null},{url:"assets/featured_index.md.QfCD6AEU.js",revision:null},{url:"assets/featured_index.md.QfCD6AEU.lean.js",revision:null},{url:"assets/FiraCode-Regular.CRwVj4V2.woff2",revision:null},{url:"assets/handwritten_1item.md.CDWqp3cH.js",revision:null},{url:"assets/handwritten_1item.md.CDWqp3cH.lean.js",revision:null},{url:"assets/handwritten_2item.md.Df5KvaJO.js",revision:null},{url:"assets/handwritten_2item.md.Df5KvaJO.lean.js",revision:null},{url:"assets/handwritten_3item.md.KLD52jgM.js",revision:null},{url:"assets/handwritten_3item.md.KLD52jgM.lean.js",revision:null},{url:"assets/handwritten_4item.md.UxPcnZWM.js",revision:null},{url:"assets/handwritten_4item.md.UxPcnZWM.lean.js",revision:null},{url:"assets/handwritten_5item.md.BejtqrBc.js",revision:null},{url:"assets/handwritten_5item.md.BejtqrBc.lean.js",revision:null},{url:"assets/handwritten_6item.md.CFvqLOPf.js",revision:null},{url:"assets/handwritten_6item.md.CFvqLOPf.lean.js",revision:null},{url:"assets/handwritten_7item.md.D85z4JmX.js",revision:null},{url:"assets/handwritten_7item.md.D85z4JmX.lean.js",revision:null},{url:"assets/handwritten_8item.md.XS7_bq5Z.js",revision:null},{url:"assets/handwritten_8item.md.XS7_bq5Z.lean.js",revision:null},{url:"assets/handwritten_9item.md.CIsbs6jK.js",revision:null},{url:"assets/handwritten_9item.md.CIsbs6jK.lean.js",revision:null},{url:"assets/handwritten_index.md.BAbdXsQq.js",revision:null},{url:"assets/handwritten_index.md.BAbdXsQq.lean.js",revision:null},{url:"assets/high-frequency_1item.md.99nMxP6_.js",revision:null},{url:"assets/high-frequency_1item.md.99nMxP6_.lean.js",revision:null},{url:"assets/high-frequency_2item.md.iXxMyqQx.js",revision:null},{url:"assets/high-frequency_2item.md.iXxMyqQx.lean.js",revision:null},{url:"assets/high-frequency_3item.md.C9-ldbLu.js",revision:null},{url:"assets/high-frequency_3item.md.C9-ldbLu.lean.js",revision:null},{url:"assets/high-frequency_4item.md.BQK3Ehe2.js",revision:null},{url:"assets/high-frequency_4item.md.BQK3Ehe2.lean.js",revision:null},{url:"assets/high-frequency_5item.md.Cyf5_qRW.js",revision:null},{url:"assets/high-frequency_5item.md.Cyf5_qRW.lean.js",revision:null},{url:"assets/high-frequency_6item.md.Bdt_8EVO.js",revision:null},{url:"assets/high-frequency_6item.md.Bdt_8EVO.lean.js",revision:null},{url:"assets/high-frequency_7item.md.DaWl4tTF.js",revision:null},{url:"assets/high-frequency_7item.md.DaWl4tTF.lean.js",revision:null},{url:"assets/high-frequency_8item.md.CVclhpaE.js",revision:null},{url:"assets/high-frequency_8item.md.CVclhpaE.lean.js",revision:null},{url:"assets/high-frequency_9item.md.CK5zm_lg.js",revision:null},{url:"assets/high-frequency_9item.md.CK5zm_lg.lean.js",revision:null},{url:"assets/high-frequency_index.md.ihgdeEKA.js",revision:null},{url:"assets/high-frequency_index.md.ihgdeEKA.lean.js",revision:null},{url:"assets/index.md.DElSj_-v.js",revision:null},{url:"assets/index.md.DElSj_-v.lean.js",revision:null},{url:"assets/inter-italic-cyrillic-ext.r48I6akx.woff2",revision:null},{url:"assets/inter-italic-cyrillic.By2_1cv3.woff2",revision:null},{url:"assets/inter-italic-greek-ext.1u6EdAuj.woff2",revision:null},{url:"assets/inter-italic-greek.DJ8dCoTZ.woff2",revision:null},{url:"assets/inter-italic-latin-ext.CN1xVJS-.woff2",revision:null},{url:"assets/inter-italic-latin.C2AdPX0b.woff2",revision:null},{url:"assets/inter-italic-vietnamese.BSbpV94h.woff2",revision:null},{url:"assets/inter-roman-cyrillic-ext.BBPuwvHQ.woff2",revision:null},{url:"assets/inter-roman-cyrillic.C5lxZ8CY.woff2",revision:null},{url:"assets/inter-roman-greek-ext.CqjqNYQ-.woff2",revision:null},{url:"assets/inter-roman-greek.BBVDIX6e.woff2",revision:null},{url:"assets/inter-roman-latin-ext.4ZJIpNVo.woff2",revision:null},{url:"assets/inter-roman-latin.Di8DUHzh.woff2",revision:null},{url:"assets/inter-roman-vietnamese.BjW4sHH5.woff2",revision:null},{url:"assets/interview-experience_1item.md.CY4HSi0n.js",revision:null},{url:"assets/interview-experience_1item.md.CY4HSi0n.lean.js",revision:null},{url:"assets/interview-experience_2item.md.Cfl30elX.js",revision:null},{url:"assets/interview-experience_2item.md.Cfl30elX.lean.js",revision:null},{url:"assets/interview-experience_3item.md.DnD_v9Yq.js",revision:null},{url:"assets/interview-experience_3item.md.DnD_v9Yq.lean.js",revision:null},{url:"assets/interview-experience_4item.md.DtuqrT1U.js",revision:null},{url:"assets/interview-experience_4item.md.DtuqrT1U.lean.js",revision:null},{url:"assets/interview-experience_5item.md.DVwqkGcm.js",revision:null},{url:"assets/interview-experience_5item.md.DVwqkGcm.lean.js",revision:null},{url:"assets/interview-experience_6item.md.BsxuuYq-.js",revision:null},{url:"assets/interview-experience_6item.md.BsxuuYq-.lean.js",revision:null},{url:"assets/interview-experience_7item.md.DKdxH88O.js",revision:null},{url:"assets/interview-experience_7item.md.DKdxH88O.lean.js",revision:null},{url:"assets/interview-experience_8item.md.t-rR4e_Y.js",revision:null},{url:"assets/interview-experience_8item.md.t-rR4e_Y.lean.js",revision:null},{url:"assets/interview-experience_9item.md.CtAC7VBp.js",revision:null},{url:"assets/interview-experience_9item.md.CtAC7VBp.lean.js",revision:null},{url:"assets/interview-experience_index.md.Dj9xZQx3.js",revision:null},{url:"assets/interview-experience_index.md.Dj9xZQx3.lean.js",revision:null},{url:"assets/LatoLatin-Regular.Dmlz1U0B.woff2",revision:null},{url:"assets/LatoLatin-Semibold.Dbk81p2D.woff2",revision:null},{url:"assets/more_1item.md.D5D7bRK5.js",revision:null},{url:"assets/more_1item.md.D5D7bRK5.lean.js",revision:null},{url:"assets/more_2item.md.CaOaATvT.js",revision:null},{url:"assets/more_2item.md.CaOaATvT.lean.js",revision:null},{url:"assets/more_3item.md.vK_OYcH_.js",revision:null},{url:"assets/more_3item.md.vK_OYcH_.lean.js",revision:null},{url:"assets/more_4item.md.DBOQSLe3.js",revision:null},{url:"assets/more_4item.md.DBOQSLe3.lean.js",revision:null},{url:"assets/more_5item.md.FrkyDAP5.js",revision:null},{url:"assets/more_5item.md.FrkyDAP5.lean.js",revision:null},{url:"assets/more_6item.md.Dw5BAVFk.js",revision:null},{url:"assets/more_6item.md.Dw5BAVFk.lean.js",revision:null},{url:"assets/more_7item.md.DDCQvlgX.js",revision:null},{url:"assets/more_7item.md.DDCQvlgX.lean.js",revision:null},{url:"assets/more_8item.md.C2KlRZcv.js",revision:null},{url:"assets/more_8item.md.C2KlRZcv.lean.js",revision:null},{url:"assets/more_9item.md.BzjAyKwS.js",revision:null},{url:"assets/more_9item.md.BzjAyKwS.lean.js",revision:null},{url:"assets/more_index.md.CZanX0zP.js",revision:null},{url:"assets/more_index.md.CZanX0zP.lean.js",revision:null},{url:"assets/online-practice_1item.md.aHMAn6Ox.js",revision:null},{url:"assets/online-practice_1item.md.aHMAn6Ox.lean.js",revision:null},{url:"assets/online-practice_2item.md.C4H2gv-5.js",revision:null},{url:"assets/online-practice_2item.md.C4H2gv-5.lean.js",revision:null},{url:"assets/online-practice_3item.md.63DFXfEz.js",revision:null},{url:"assets/online-practice_3item.md.63DFXfEz.lean.js",revision:null},{url:"assets/online-practice_4item.md.CGS3ZVVx.js",revision:null},{url:"assets/online-practice_4item.md.CGS3ZVVx.lean.js",revision:null},{url:"assets/online-practice_5item.md.ihRVjguH.js",revision:null},{url:"assets/online-practice_5item.md.ihRVjguH.lean.js",revision:null},{url:"assets/online-practice_6item.md.XUiArsZf.js",revision:null},{url:"assets/online-practice_6item.md.XUiArsZf.lean.js",revision:null},{url:"assets/online-practice_7item.md.iMACc1d3.js",revision:null},{url:"assets/online-practice_7item.md.iMACc1d3.lean.js",revision:null},{url:"assets/online-practice_8item.md.Dyo0lq8t.js",revision:null},{url:"assets/online-practice_8item.md.Dyo0lq8t.lean.js",revision:null},{url:"assets/online-practice_9item.md.LRQmGps1.js",revision:null},{url:"assets/online-practice_9item.md.LRQmGps1.lean.js",revision:null},{url:"assets/online-practice_index.md.Bgjkpivm.js",revision:null},{url:"assets/online-practice_index.md.Bgjkpivm.lean.js",revision:null},{url:"assets/principle_1item.md.CBJA-Nx6.js",revision:null},{url:"assets/principle_1item.md.CBJA-Nx6.lean.js",revision:null},{url:"assets/principle_2item.md.CM6DLzbK.js",revision:null},{url:"assets/principle_2item.md.CM6DLzbK.lean.js",revision:null},{url:"assets/principle_3item.md.Dn5kquQk.js",revision:null},{url:"assets/principle_3item.md.Dn5kquQk.lean.js",revision:null},{url:"assets/principle_4item.md.DkudZ5wq.js",revision:null},{url:"assets/principle_4item.md.DkudZ5wq.lean.js",revision:null},{url:"assets/principle_5item.md.Cw2kgqx0.js",revision:null},{url:"assets/principle_5item.md.Cw2kgqx0.lean.js",revision:null},{url:"assets/principle_6item.md.CzBYGAsc.js",revision:null},{url:"assets/principle_6item.md.CzBYGAsc.lean.js",revision:null},{url:"assets/principle_7item.md.BOMjnRhB.js",revision:null},{url:"assets/principle_7item.md.BOMjnRhB.lean.js",revision:null},{url:"assets/principle_8item.md.BLTx-aiR.js",revision:null},{url:"assets/principle_8item.md.BLTx-aiR.lean.js",revision:null},{url:"assets/principle_9item.md.cA8Oza-M.js",revision:null},{url:"assets/principle_9item.md.cA8Oza-M.lean.js",revision:null},{url:"assets/principle_index.md.C3LLcsOa.js",revision:null},{url:"assets/principle_index.md.C3LLcsOa.lean.js",revision:null},{url:"assets/public_index.md.-Px5UKgb.js",revision:null},{url:"assets/public_index.md.-Px5UKgb.lean.js",revision:null},{url:"assets/seal.Cd6Hch1f.png",revision:null},{url:"assets/self-check_1item.md.qcAtIGlo.js",revision:null},{url:"assets/self-check_1item.md.qcAtIGlo.lean.js",revision:null},{url:"assets/self-check_2item.md.Bx9sbH9P.js",revision:null},{url:"assets/self-check_2item.md.Bx9sbH9P.lean.js",revision:null},{url:"assets/self-check_3item.md.BnyJVJY7.js",revision:null},{url:"assets/self-check_3item.md.BnyJVJY7.lean.js",revision:null},{url:"assets/self-check_4item.md.B8WO7Jnq.js",revision:null},{url:"assets/self-check_4item.md.B8WO7Jnq.lean.js",revision:null},{url:"assets/self-check_5item.md.Da3VQVWS.js",revision:null},{url:"assets/self-check_5item.md.Da3VQVWS.lean.js",revision:null},{url:"assets/self-check_6item.md.DeUHX7Rx.js",revision:null},{url:"assets/self-check_6item.md.DeUHX7Rx.lean.js",revision:null},{url:"assets/self-check_7item.md.C6gL_4ve.js",revision:null},{url:"assets/self-check_7item.md.C6gL_4ve.lean.js",revision:null},{url:"assets/self-check_8item.md.DsXtOV8x.js",revision:null},{url:"assets/self-check_8item.md.DsXtOV8x.lean.js",revision:null},{url:"assets/self-check_9item.md.CjKVebDJ.js",revision:null},{url:"assets/self-check_9item.md.CjKVebDJ.lean.js",revision:null},{url:"assets/self-check_index.md.Cr4_eoWj.js",revision:null},{url:"assets/self-check_index.md.Cr4_eoWj.lean.js",revision:null},{url:"assets/style.D0vbIetr.css",revision:null},{url:"assets/tool_1item.md.GIYN08yB.js",revision:null},{url:"assets/tool_1item.md.GIYN08yB.lean.js",revision:null},{url:"assets/tool_2item.md.BiOgscSC.js",revision:null},{url:"assets/tool_2item.md.BiOgscSC.lean.js",revision:null},{url:"assets/tool_3item.md.DHFYEEMc.js",revision:null},{url:"assets/tool_3item.md.DHFYEEMc.lean.js",revision:null},{url:"assets/tool_4item.md.DupW1e_o.js",revision:null},{url:"assets/tool_4item.md.DupW1e_o.lean.js",revision:null},{url:"assets/tool_5item.md.BKQoKoyb.js",revision:null},{url:"assets/tool_5item.md.BKQoKoyb.lean.js",revision:null},{url:"assets/tool_6item.md.B_gXFOTq.js",revision:null},{url:"assets/tool_6item.md.B_gXFOTq.lean.js",revision:null},{url:"assets/tool_7item.md.CcldS1hX.js",revision:null},{url:"assets/tool_7item.md.CcldS1hX.lean.js",revision:null},{url:"assets/tool_8item.md.DrXnaT7i.js",revision:null},{url:"assets/tool_8item.md.DrXnaT7i.lean.js",revision:null},{url:"assets/tool_9item.md.rfuYec8Q.js",revision:null},{url:"assets/tool_9item.md.rfuYec8Q.lean.js",revision:null},{url:"assets/tool_index.md.xBaKOWwz.js",revision:null},{url:"assets/tool_index.md.xBaKOWwz.lean.js",revision:null},{url:"basic/1自定义主题.html",revision:"9b5d1f049c2e70e65f85fcd8c10272f2"},{url:"basic/2扩展默认主题.html",revision:"3a933cb7bec64a09e643be8c9b94dd10"},{url:"basic/3数据加载.html",revision:"ede2007c5ea5359b6baa4b8f31d3d9cf"},{url:"basic/4SSR兼容.html",revision:"f8489a4dc5b7e76ab896e33a0c302bb4"},{url:"basic/5连接到CMS.html",revision:"70f848b63d50429e62ca0072e5606ee7"},{url:"basic/6item.html",revision:"fd53f29e625aed91ee5fa2b27aaf232c"},{url:"basic/7item.html",revision:"a19c91e87e961f122e8ac69f5e97b716"},{url:"basic/8item.html",revision:"2202582cbb28ad9afc174e1a3968da71"},{url:"basic/9item.html",revision:"7100bc5da23925e4cd66518a6d52f513"},{url:"basic/index.html",revision:"3719b27efb2618931975b2e03c177b60"},{url:"css/fancybox.css",revision:"3a867c1ea947834b92530f9d57fa799a"},{url:"daily-question/1item.html",revision:"43f5169ff2c33202f9c89a858114bcf6"},{url:"daily-question/2item.html",revision:"c6e1ce11d6fcae32f9f5d65e1176fd61"},{url:"daily-question/3item.html",revision:"66f54ee292438aae06daa1ec52ee4ac9"},{url:"daily-question/4item.html",revision:"ee507ba0738c9952660c6c7d38aeec61"},{url:"daily-question/5item.html",revision:"71aaf284d05e71d71c7c691867aaa186"},{url:"daily-question/6item.html",revision:"43dcedf261d183572928dd1d8073ffad"},{url:"daily-question/7item.html",revision:"62bfac2ae5f16995679b3039331c661b"},{url:"daily-question/8item.html",revision:"a52349d6a1ad2d4495df53d53fd476b6"},{url:"daily-question/9item.html",revision:"0d2d6cde77ecddc43f6d29fe35aafbc8"},{url:"daily-question/index.html",revision:"5d2c75f02aa40c4f7dcf8931fa7c7ca2"},{url:"document/1item.html",revision:"988899c2acfe02d866a7612423732001"},{url:"document/2item.html",revision:"cf0270ad4ebd6bc7781a7176c26222de"},{url:"document/3item.html",revision:"41d0fbba80e0d30bf307fc0007ea839b"},{url:"document/4item.html",revision:"a5aa0d2d8d526747b09c0bbe35169eab"},{url:"document/5item.html",revision:"502b71c06ded18a22cedac0b119ba0e1"},{url:"document/6item.html",revision:"fb3cb1ef97a2f197091bf9d9ec732c9a"},{url:"document/7item.html",revision:"7287dd3a70475b43e605bbf554aa5fa7"},{url:"document/8item.html",revision:"1c49abea027b3ceea9b09036e8cb3fd5"},{url:"document/9item.html",revision:"3090a08e70d1d288eea2f654af247607"},{url:"document/index.html",revision:"2321d32c1a4b366a44a3596c2807838a"},{url:"featured/1item.html",revision:"68f48a23c1921eae358637bbe72ebe08"},{url:"featured/2item.html",revision:"ce6f80870bec95d11438ad735074c5e9"},{url:"featured/3item.html",revision:"616a25d4cc2f19c7391ce8c9b4eaca33"},{url:"featured/4item.html",revision:"11323a811e8d2faca94cb84f89fafd56"},{url:"featured/5item.html",revision:"cd4111f37a6610dce17e464f55688f56"},{url:"featured/6item.html",revision:"be6d335cdba7ae98c7da4788eb55472f"},{url:"featured/7item.html",revision:"369a74c198557bf01e2980bd431f8bcd"},{url:"featured/8item.html",revision:"2bce092df6fdb3121d71aac8e078dc6b"},{url:"featured/9item.html",revision:"e115ea99725db17c861c13ac6d9ae3a2"},{url:"featured/index.html",revision:"53fd072c7560ba1ef172d387b90e67d6"},{url:"handwritten/1item.html",revision:"1f4769e15db60cc9c71e9e273a706888"},{url:"handwritten/2item.html",revision:"ce268685c20cfe2a3fc4a2fb9e567a34"},{url:"handwritten/3item.html",revision:"37cdace926b99a800534d4256c2b2945"},{url:"handwritten/4item.html",revision:"cd044e83a634785c123a8e1ee73697a7"},{url:"handwritten/5item.html",revision:"3eda131df007bf68f08908f9eed25783"},{url:"handwritten/6item.html",revision:"723cd0be9b953df583269908e1c51cfe"},{url:"handwritten/7item.html",revision:"22d050cc6623130cb5d42e5cdcfad002"},{url:"handwritten/8item.html",revision:"59fee8c8f2b0bafd528ed6851e83bfbd"},{url:"handwritten/9item.html",revision:"87087559f243716b0549a0d683086cd2"},{url:"handwritten/index.html",revision:"a6c0043c451e41f3692a3dab51c5f5e9"},{url:"high-frequency/1item.html",revision:"ec6a522aa5b4b952b4f29d60728c3892"},{url:"high-frequency/2item.html",revision:"3bc95773d2ec3f15828b0f43b304148c"},{url:"high-frequency/3item.html",revision:"6961bd470d00a79433fac95a4b747125"},{url:"high-frequency/4item.html",revision:"77bec65c56c113bd67a3fdc2fbc8634b"},{url:"high-frequency/5item.html",revision:"77b484fc0d2117325bc06650a12a92bc"},{url:"high-frequency/6item.html",revision:"98ebf2d33fe7f25e350f5cfe357aee2b"},{url:"high-frequency/7item.html",revision:"a610ae4fe7ff649c0dd3b546a27c74c3"},{url:"high-frequency/8item.html",revision:"983c7399db1cf64cd63dd4c40e29f7a4"},{url:"high-frequency/9item.html",revision:"0978c3b7be7d25f754a847325d251476"},{url:"high-frequency/index.html",revision:"cb025b9919a11b4cb7c07373468e64c4"},{url:"index.html",revision:"e2f405dd3094f48790a0397be9bfbd2b"},{url:"interview-experience/1item.html",revision:"3c18ed86bd116a1dd2acf479b0babd5b"},{url:"interview-experience/2item.html",revision:"6ffdc6a214661000f6e9dada90b5304e"},{url:"interview-experience/3item.html",revision:"251fab4b0ac15544b526a3dadb1b819b"},{url:"interview-experience/4item.html",revision:"a02728ae26fdada32125e4c34a05426a"},{url:"interview-experience/5item.html",revision:"3a200500eb7a40efbee545d5cfc8a7ef"},{url:"interview-experience/6item.html",revision:"3666701089ca1457c22ae66c09f2151f"},{url:"interview-experience/7item.html",revision:"e8e530e26672366dabc6ce86094a2583"},{url:"interview-experience/8item.html",revision:"ef755d533a4aae0dbaf94921aecd5c5d"},{url:"interview-experience/9item.html",revision:"9b6c6f764c3c8b3be7882a0c7cfcd18b"},{url:"interview-experience/index.html",revision:"8a4a8ef24d5d8371d40f47267cbc446e"},{url:"js/fancybox.umd.js",revision:"2f1b8cd1daab3056cda543dd0ddffce4"},{url:"more/1item.html",revision:"7b1e7281a505b423a2e0af5dba739614"},{url:"more/2item.html",revision:"b688d5d8e3f88e4eef7cd9f3e5876092"},{url:"more/3item.html",revision:"73bbf4898cd27f313afddac49e38ba9e"},{url:"more/4item.html",revision:"05eec2dacf56bc028d646d47209aa5e6"},{url:"more/5item.html",revision:"6a774a565ae4d9e7a8ab3e701c28cb9c"},{url:"more/6item.html",revision:"8dd9eacab29b8a59f1d883764ad94e57"},{url:"more/7item.html",revision:"7c62daf8a7979700e2fe1b9b8d154374"},{url:"more/8item.html",revision:"ab29bf3a30402c00da3612523e75f642"},{url:"more/9item.html",revision:"76b4d6257fd9b9305eaed38c21f94da4"},{url:"more/index.html",revision:"345fb21f82d127c86e96b5319d9e0af6"},{url:"online-practice/1item.html",revision:"0090fa4b88a5184863d9ceed8243961e"},{url:"online-practice/2item.html",revision:"e8149a4c993c1e7079aae95fc6885b66"},{url:"online-practice/3item.html",revision:"c27763516159984c0c5519ea000ac3a7"},{url:"online-practice/4item.html",revision:"730bb5ca7efd6a962764bf8fb970c9fb"},{url:"online-practice/5item.html",revision:"665acd261494fc3619aebe01e48782b7"},{url:"online-practice/6item.html",revision:"3cf5efd6f684a4c3a09e0b8eb9d0e7a4"},{url:"online-practice/7item.html",revision:"35b574c57378824e0e5887a88d6dc4e1"},{url:"online-practice/8item.html",revision:"cbdd023c7e4bff5479a70fde2f0264c3"},{url:"online-practice/9item.html",revision:"17e537f0bb05efbc7e2bcc3eece9e083"},{url:"online-practice/index.html",revision:"d860ae9c15649b8e758dd1dc3c254f3b"},{url:"principle/1item.html",revision:"bb85a598e0d0a471cc7dbe876a071baf"},{url:"principle/2item.html",revision:"cc155fb3df23a5ae342ad30e9da1bd9b"},{url:"principle/3item.html",revision:"cd5ab9fa86b6ff21de3b830f6bf342ea"},{url:"principle/4item.html",revision:"2ff04c175abb21aaafac62de009c6f83"},{url:"principle/5item.html",revision:"b60593c4a38e1aee64229caaeeb06f37"},{url:"principle/6item.html",revision:"5310b210f76d76994e920196b49dd513"},{url:"principle/7item.html",revision:"b6806d73e359f1c78f5c5c52bfd1a6cc"},{url:"principle/8item.html",revision:"dc4e8b649f86d37074e6354068d8a834"},{url:"principle/9item.html",revision:"48a52f40e14f3bf0860d85d08b8dce0b"},{url:"principle/index.html",revision:"3bbdf15dbe57e4c5f995350924895fe6"},{url:"public/index.html",revision:"abe58285fc5f3fb9bf8fedf3cd38791e"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"seal.png",revision:"4428490ece540cf796ae67a1f1b4a802"},{url:"self-check/1item.html",revision:"696349f8f9acf8244807145f797fef24"},{url:"self-check/2item.html",revision:"8db1ca2202b0d2270e5da09f6a80489a"},{url:"self-check/3item.html",revision:"9d1f6f690dada558e90b3d05189ea53c"},{url:"self-check/4item.html",revision:"740308db418f6e2527c1f3e04f5a5843"},{url:"self-check/5item.html",revision:"5065386ecc3acffeeaec46ce0d77a97e"},{url:"self-check/6item.html",revision:"35548e23f79cd6929036aa76d2bc5f4e"},{url:"self-check/7item.html",revision:"18448b1f452437154d960460ef23427d"},{url:"self-check/8item.html",revision:"425cb0b0722d90891c551dcf1d806b70"},{url:"self-check/9item.html",revision:"ae37ecbb4ca7fc22dd018d9114b76587"},{url:"self-check/index.html",revision:"9f94bd703fa5ba57881bd4542fbefdd3"},{url:"tool/1item.html",revision:"d106d6fec307b451d18e9c5af4f2facd"},{url:"tool/2item.html",revision:"0c5ea3ce7b3153473db5dc297bb0ef43"},{url:"tool/3item.html",revision:"738aa8cce961bdc586252fc886e10d29"},{url:"tool/4item.html",revision:"9443b49a79d4c52db3dd1524a101973a"},{url:"tool/5item.html",revision:"e364ef36dbee1c16df889571f36815ec"},{url:"tool/6item.html",revision:"56cce5d102bb85f339986e03ed62dd44"},{url:"tool/7item.html",revision:"9e742578b7afa2518024a5ff538dc7c7"},{url:"tool/8item.html",revision:"0e44e3116b491c00af1edcce79434e53"},{url:"tool/9item.html",revision:"522b7deeec29be1a6186d9744111ec1e"},{url:"tool/index.html",revision:"44eba9776616f6fc0b95927e0a3776e5"},{url:"manifest.webmanifest",revision:"a2d80c7493183fb2dc9e7af75b7e0de5"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new e.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/i,new e.NetworkFirst({cacheName:"jsdelivr-images-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:604800}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));