!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";const e="3.0.6",t=e=>{const t=`Sa11yLang${e.charAt(0).toUpperCase()+e.slice(1)}`;Sa11y.Lang.addI18n(window[t].strings),new Sa11y.Sa11y({autoDetectShadowComponents:!0,customChecks:!1,exportResultsPlugin:!0,detectSPArouting:!0})};"object"==typeof Sa11y?window.location.pathname.includes("sa11y")?alert("Sa11y」ボタンをブックマークバーにドラッグしてください。その後、任意のウェブページでブックマークをクリックします。"):alert("Sa11yはすでにこのページにロードされています。しばらくお待ちいただくか、ページを再読み込みして再度お試しください。"):function(n){const s=document.createElement("link"),a=document.getElementsByTagName("head")[0];s.rel="stylesheet",s.href=`https://cdn.jsdelivr.net/gh/ryersondmp/sa11y@${e}/dist/css/sa11y.min.css`,s.type="text/css",a.appendChild(s);const d=document.createElement("script");d.src=`https://cdn.jsdelivr.net/combine/gh/ryersondmp/sa11y@${e}/dist/js/lang/${n}.umd.min.js,gh/ryersondmp/sa11y@${e}/dist/js/sa11y.umd.min.js`,document.body.appendChild(d),d.onload=()=>t(n),d.onreadystatechange=()=>t(n)}("ja")}));
