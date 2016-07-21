!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["vue-sticky"]=e():t["vue-sticky"]=e()}(this,function(){return function(t){function e(i){if(o[i])return o[i].exports;var n=o[i]={exports:{},id:i,loaded:!1};return t[i].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){var i,n;o(6),i=o(1),n=o(4),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{top:{type:[Number,String],"default":"auto"},bottom:{type:[Number,String],"default":"auto"},zIndex:{type:Number,"default":10}},data:function(){return{stickySupport:!1,stickyShowed:!1,stickyHeight:0,stickyStyle:{display:"none",position:"fixed",top:"-1000px",bottom:"auto",zIndex:this.zIndex}}},computed:{ptop:function(){return this.top+(/^\d+$/.test(this.top)?"px":"")},pbottom:function(){return this.bottom+(/^\d+$/.test(this.bottom)?"px":"")}},watch:{"stickyStyle.display":function(t){"block"===t&&(this.stickyShowed=!0)}},methods:{scrollHandler:function(){var t=this.$els.placeholder.getBoundingClientRect().top<this.top,e=this.$els.placeholder.parentElement.getBoundingClientRect().bottom-this.bottom<this.top+this.stickyHeight;t?e?(this.stickyStyle.display="block",this.stickyStyle.position="absolute",this.stickyStyle.top="auto",this.stickyStyle.bottom=this.bottom+"px"):(this.stickyStyle.display="block",this.stickyStyle.position="fixed",this.stickyStyle.bottom="auto",this.stickyStyle.top=this.top+"px"):this.stickyStyle.display="none"}},ready:function(){var t=window.getComputedStyle(this.$els.placeholder).position;this.stickySupport=t.indexOf("sticky")>-1,this.stickySupport||(this.$els.placeholder.parentElement.style.position="relative",this.stickyHeight=this.$els.placeholder.getBoundingClientRect().height,window.addEventListener("scroll",this.scrollHandler,!0),this.scrollHandler())},beforeDestroy:function(){this.stickySupport||window.removeEventListener("scroll",this.scrollHandler,!0)}}},function(t,e,o){e=t.exports=o(3)(),e.push([t.id,".placeholder[_v-114200c8]{position:-webkit-sticky;position:sticky}.sticky[_v-114200c8]{position:fixed;top:0;left:0;width:100%;overflow:hidden}.placeholder>div[_v-114200c8],.sticky>div[_v-114200c8]{margin:0!important}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var o=this[e];o[2]?t.push("@media "+o[2]+"{"+o[1]+"}"):t.push(o[1])}return t.join("")},t.i=function(e,o){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},n=0;n<this.length;n++){var s=this[n][0];"number"==typeof s&&(i[s]=!0)}for(n=0;n<e.length;n++){var r=e[n];"number"==typeof r[0]&&i[r[0]]||(o&&!r[2]?r[2]=o:o&&(r[2]="("+r[2]+") and ("+o+")"),t.push(r))}},t}},function(t,e){t.exports=' <div class=placeholder v-el:placeholder="" :style="{top:ptop,\'z-index\':zIndex,bottom:pbottom}" _v-114200c8=""> <slot _v-114200c8=""></slot> </div> <div class=sticky :style=stickyStyle v-if="!stickySupport &amp;&amp; stickyShowed" _v-114200c8=""> <slot _v-114200c8=""></slot> </div> '},function(t,e,o){function i(t,e){for(var o=0;o<t.length;o++){var i=t[o],n=d[i.id];if(n){n.refs++;for(var s=0;s<n.parts.length;s++)n.parts[s](i.parts[s]);for(;s<i.parts.length;s++)n.parts.push(p(i.parts[s],e))}else{for(var r=[],s=0;s<i.parts.length;s++)r.push(p(i.parts[s],e));d[i.id]={id:i.id,refs:1,parts:r}}}}function n(t){for(var e=[],o={},i=0;i<t.length;i++){var n=t[i],s=n[0],r=n[1],l=n[2],p=n[3],c={css:r,media:l,sourceMap:p};o[s]?o[s].parts.push(c):e.push(o[s]={id:s,parts:[c]})}return e}function s(t,e){var o=h(),i=m[m.length-1];if("top"===t.insertAt)i?i.nextSibling?o.insertBefore(e,i.nextSibling):o.appendChild(e):o.insertBefore(e,o.firstChild),m.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");o.appendChild(e)}}function r(t){t.parentNode.removeChild(t);var e=m.indexOf(t);e>=0&&m.splice(e,1)}function l(t){var e=document.createElement("style");return e.type="text/css",s(t,e),e}function p(t,e){var o,i,n;if(e.singleton){var s=v++;o=y||(y=l(e)),i=c.bind(null,o,s,!1),n=c.bind(null,o,s,!0)}else o=l(e),i=a.bind(null,o),n=function(){r(o)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else n()}}function c(t,e,o,i){var n=o?"":i.css;if(t.styleSheet)t.styleSheet.cssText=x(e,n);else{var s=document.createTextNode(n),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(s,r[e]):t.appendChild(s)}}function a(t,e){var o=e.css,i=e.media,n=e.sourceMap;if(i&&t.setAttribute("media",i),n&&(o+="\n/*# sourceURL="+n.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var d={},u=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},f=u(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=u(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,v=0,m=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=f()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var o=n(t);return i(o,e),function(t){for(var s=[],r=0;r<o.length;r++){var l=o[r],p=d[l.id];p.refs--,s.push(p)}if(t){var c=n(t);i(c,e)}for(var r=0;r<s.length;r++){var p=s[r];if(0===p.refs){for(var a=0;a<p.parts.length;a++)p.parts[a]();delete d[p.id]}}}};var x=function(){var t=[];return function(e,o){return t[e]=o,t.filter(Boolean).join("\n")}}()},function(t,e,o){var i=o(2);"string"==typeof i&&(i=[[t.id,i,""]]);o(5)(i,{});i.locals&&(t.exports=i.locals)}])});