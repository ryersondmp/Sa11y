!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";const e="",n="3.0.0",t=e=>{const n=`Sa11yLang${e}`;Sa11y.Lang.addI18n(window[n].strings),new Sa11y.Sa11y({autoDetectShadowComponents:!0,customChecks:!1,detectSPArouting:!0})};"object"!=typeof Sa11y?function(s){const i=document.createElement("link"),a=document.getElementsByTagName("head")[0];i.rel="stylesheet",i.href=`https://cdn.jsdelivr.net/gh/ryersondmp/sa11y@${n}${e}/dist/css/sa11y.min.css`,i.type="text/css",a.appendChild(i);const d=document.createElement("script");d.src=`https://cdn.jsdelivr.net/combine/gh/ryersondmp/sa11y@${n}${e}/dist/js/lang/${s.toLowerCase()}.umd.min.js,gh/ryersondmp/sa11y@${n}${e}/dist/js/sa11y.umd.min.js`,document.body.appendChild(d),d.onload=()=>t(s),d.onreadystatechange=()=>t(s)}("De"):alert('Ziehen Sie die Schaltfläche "Sa11y" in Ihre Lesezeichenleiste. Klicken Sie dann auf einer beliebigen Webseite auf das Lesezeichen.')}));
