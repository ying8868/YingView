(function(l){send_arr=window.send_arr||[];window.send_arr;window.bindPageTracker=function(){window.send_arr.push(["bindPageTracker"])};window.sendTrackLog=function(k,j,L,i,K){window.send_arr.push(["sendTrackLog",k,j,L,i,K])};window.emtjLaunch=function(){window.send_arr.push(["emtjLaunch"])};window.sendRequestLog=function(i){window.send_arr.push(["sendRequestLog",i])};var C=["stg-webjs-test.dfcfw.com","gubatopic.eastmoney.com","guba.eastmoney.com","www.eastmoney.com","gubadevelop.eastmoney.com","mgubatest.eastmoney.com"];var p=window.location.hostname;var h=false;var I=document.createElement("script");var m;var t=!!(window.attachEvent&&!window.opera);for(var B=0;B<C.length;B++){if(C[B]==p){h=true}}window.networkProtocol=window.location.protocol;function E(){var i=document.location.toString();var j=i.split("//");var k=j[1].indexOf("/");fileUrl=j[1].substring(k);if(fileUrl.indexOf("?")!=-1){fileUrl=fileUrl.split("?")[0]}return fileUrl}E();var H=["hsf10"];var z=false;for(var y=0;y<H.length;y++){if(fileUrl.indexOf(H[y])>=0&&networkProtocol.indexOf("http")<0&&networkProtocol.indexOf("https")<0){z=true}}var e=document.getElementsByTagName("script");for(var x=0;x<e.length;x++){var G=e[x].src;if(G&&G.indexOf("jump_tracker.js")>=0){var f=G.indexOf("jump_tracker.js");window.scripturl=G.substring(0,f)}}if(h){m=scripturl+"bigdata_tracker_20190123.js"}else{m=scripturl+"bigdata_tracker_20190124.js"}I.src=m;I.type="text/javascript";I.charset="UTF-8";var o;window.emtj_trueURL=window.location.href.replace(/(^\s*)|(\s*$)/g,"");window.emtj_currentHostName=window.location.hostname;window.emtj_userActionId;function w(k,N){var M=k.getMonth()+1;var K=k.getDate();var j=k.getHours();var L=k.getMinutes();var i=k.getSeconds();M=M>=10?M:"0"+M;K=K>=10?K:"0"+K;j=j>=10?j:"0"+j;L=L>=10?L:"0"+L;i=i>=10?i:"0"+i;if(N==1){currentdate=String(k.getFullYear())+String(M)+String(K)+String(j)+String(L)+String(i)+String(k.getMilliseconds());return currentdate}else{if(N==2){currentdate=String(k.getFullYear())+"-"+String(M)+"-"+String(K)+" "+String(j)+":"+String(L)+":"+String(i);return currentdate}}}function d(j){var i=Math.random();return(i+"").substr(2,j)}if(typeof(emtj_pageId)=="undefined"){emtj_pageId=0}function n(){o=w(new Date(),1);emtj_userActionId=o+"-"+emtj_pageId+"-"+d(10)}n();window.emtj_getNowFormatDate=w;window.emtj_getRandomStrBy=d;window.emtj_creUserAcId=n;function J(j){var i=Math.random()*j>>0;if(i==0){return true}return false}function c(){var j=false;if(emtj_currentHostName.indexOf("1234567")>=0){j=true}if(j){return D("UTOKEN")}var k=D("pi");if(k){var i=k.split(";");if(i&&i.length){return i[0]}}return""}function D(j){var i,k=new RegExp("(^| )"+j+"=([^;]*)(;|$)");if(i=document.cookie.match(k)){if(decodeURIComponent(i[2])=="delete"){return""}else{return decodeURIComponent(i[2])}}else{return""}}window.emtj_willHandle=J;window.emtj_getUI=c;window.emtj_getCookie=D;window.emtj_appUID="";var u=false;var A=true;function q(j){if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);j()},false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState=="complete"){if(!!A){u=true;document.detachEvent("onreadystatechange",arguments.callee);j()}}});var K=false;try{K=window.frameElement==null&&document.documentElement}catch(k){}if(K&&K.doScroll){(function i(){if(!u){try{K.doScroll("left")}catch(L){return setTimeout(i,20)}A=false;j()}})()}}}}q(function(){window.emtj_endTime=new Date().getTime();document.body.appendChild(I)});var b=["http://fund.eastmoney.com/index.html","http://fund.eastmoney.com/","http://help.1234567.com.cn/default.html","http://help.1234567.com.cn/","https://m.1234567.com.cn/index.html","https://m.1234567.com.cn/","http://simu.eastmoney.com/index.html","http://simu.eastmoney.com/","http://www.1234567.com.cn/index.html","http://www.1234567.com.cn/","http://finance.eastmoney.com/index.html","http://finance.eastmoney.com/","http://kuaixun.eastmoney.com/default.html","http://kuaixun.eastmoney.com/","http://quote.eastmoney.com/default.html","http://quote.eastmoney.com/","http://stock.eastmoney.com/index.html","http://stock.eastmoney.com/","http://topic.eastmoney.com/index.html","http://topic.eastmoney.com/","http://www.18.com.cn/default.html","http://www.18.com.cn/","http://www.eastmoney.com/default.html","http://www.eastmoney.com/","http://quote.eastmoney.com/zs000001.html","http://stg-webjs-test.dfcfw.com/hsf10/test.html","http://stg-webjs-test.eastmoney.com/hsf10/test.html","https://stg-webjs-test.eastmoney.com/hsf10/test.html"];var g=false;for(var B=0;B<b.length;B++){if(window.location.href==b[B]){g=true}}if(g){var F=document.createElement("script");var v=scripturl+"cdn_tracker.js";F.src=v;F.type="text/javascript";F.charset="UTF-8";document.body&&document.body.appendChild(F)}var a=document.createElement("script");a.src=scripturl+"jump_hotarea.js";a.type="text/javascript";a.charset="UTF-8";
document.body&&document.body.appendChild(a);if(emtj_trueURL.indexOf("isTest=1&")<0){r("load",s)}function r(j,i){if(window.addEventListener){window.addEventListener(j,i)}else{window.attachEvent("on"+j,i)}}function s(){setTimeout(function(){var O=J(1000);if(!O){return}if(typeof(emtj_startTime)!="undefined"){var j=emtj_startTime}else{j=0}var R=new Date().getTime();if(window.performance||window.webkitPerformance||window.msPerformance||window.mozPerformance){var P=window.performance||window.webkitPerformance||window.msPerformance||window.mozPerformance;var i=P.timing;j=i.navigationStart;R=i.loadEventEnd}if(j!=0&&R-j>3000){var Q={};Q.rt=0;Q.ut=0;Q.dt=0;Q.tt=0;Q.wt=0;Q.ret=0;Q.domt=0;Q.domreadyt=emtj_endTime-j;Q.olt=R-j;if(window.performance||window.webkitPerformance||window.msPerformance||window.mozPerformance){var P=window.performance||window.webkitPerformance||window.msPerformance||window.mozPerformance;var K=P.timing;Q.rt=K.redirectEnd-K.redirectStart;Q.ut=K.unloadEventEnd-K.unloadEventStart;Q.dt=K.domainLookupEnd-K.domainLookupStart;Q.tt=K.connectEnd-K.connectStart;Q.wt=K.responseStart-K.navigationStart;Q.ret=K.responseEnd-K.requestStart;Q.domt=K.domComplete-K.domInteractive;Q.domreadyt=K.domContentLoadedEventEnd-K.navigationStart;Q.olt=K.loadEventEnd-K.navigationStart}Q.pi=emtj_pageId;Q.mt=emtj_userActionId;Q.url=emtj_trueURL;Q.ua=navigator.userAgent.toLowerCase();if(!emtj_appUID){Q.ui=c()}else{Q.ui=emtj_appUID}var L=[];if(networkProtocol.indexOf("http")>=0||networkProtocol.indexOf("https")>=0){onloadUrl="//bdwblog.eastmoney.com/bd-blink-server/asyncgapi/web_loadtime.gif"}else{onloadUrl="https://bdwblog.eastmoney.com/bd-blink-server/asyncgapi/web_loadtime.gif"}if(scripturl.indexOf("stg")>=0){if(networkProtocol.indexOf("http")>=0||networkProtocol.indexOf("https")>=0){onloadUrl="//stg-bdwblog.eastmoney.com/bd-blink-server/asyncgapi/web_loadtime.gif"}else{onloadUrl="https://stg-bdwblog.eastmoney.com/bd-blink-server/asyncgapi/web_loadtime.gif"}}for(var M in Q){L.push(M+"="+encodeURIComponent(Q[M]))}var N=L.join("&");window.sendRequestLog(onloadUrl+"?"+N)}},0)}})(window);