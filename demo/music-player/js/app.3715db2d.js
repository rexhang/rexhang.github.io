(function(){"use strict";var n={4864:function(n,e,t){var i=t(6369),a=function(){var n=this,e=n._self._c;return e("div",{attrs:{id:"app"}},[e("div",{ref:"bg",staticClass:"canvas-bg"},[e("div",{staticClass:"player",on:{click:n.handlePlayerClick}},[e("i",{staticClass:"play fa fa-play"})])]),e("canvas",{ref:"music",staticClass:"canvas-music"})])},o=[],s={name:"App",data(){return{azusa:null}},mounted(){const n=this.$refs.music,e=this.$refs.bg;this.azusa=new window.Azusa({view:n,subdivisionSize:1024,cutEnd:256}),e.style.backgroundImage=`url(${t(2865)})`,this.azusa.audio.load({src:t(3597),onPrgress:n=>{const e=100*(n.loaded/n.total).toFixed(4);console.log(`--- 已加载 ${n.loaded}(${e}%) 总大小 ${n.total}`),100===e&&console.log("音乐文件已加载完成, 可以点击播放...")}}),this.azusa.audio.setVolume(1),window.addEventListener("resize",this.handleWindowResize)},destroyed(){window.removeEventListener("resize",this.handleWindowResize)},methods:{handleWindowResize(){this.azusa.resize(document.documentElement.clientWidth,document.documentElement.clientHeight)},handlePlayerClick(n){const e=n.target;Array.from(e.classList).includes("fa-play")?(this.azusa.audio.play(),e.classList.add("fa-pause"),e.classList.remove("fa-play")):(this.azusa.audio.stop(),e.classList.add("fa-play"),e.classList.remove("fa-pause"))}}},r=s,u=t(1001),c=(0,u.Z)(r,a,o,!1,null,null,null),l=c.exports;i.ZP.config.productionTip=!1,new i.ZP({render:n=>n(l)}).$mount("#app")},3597:function(n,e,t){n.exports=t.p+"media/bg.2a7fc193.mp3"},2865:function(n,e,t){n.exports=t.p+"img/bg2.371155e7.jpg"}},e={};function t(i){var a=e[i];if(void 0!==a)return a.exports;var o=e[i]={exports:{}};return n[i](o,o.exports,t),o.exports}t.m=n,function(){var n=[];t.O=function(e,i,a,o){if(!i){var s=1/0;for(l=0;l<n.length;l++){i=n[l][0],a=n[l][1],o=n[l][2];for(var r=!0,u=0;u<i.length;u++)(!1&o||s>=o)&&Object.keys(t.O).every((function(n){return t.O[n](i[u])}))?i.splice(u--,1):(r=!1,o<s&&(s=o));if(r){n.splice(l--,1);var c=a();void 0!==c&&(e=c)}}return e}o=o||0;for(var l=n.length;l>0&&n[l-1][2]>o;l--)n[l]=n[l-1];n[l]=[i,a,o]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){t.p="/"}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,i){var a,o,s=i[0],r=i[1],u=i[2],c=0;if(s.some((function(e){return 0!==n[e]}))){for(a in r)t.o(r,a)&&(t.m[a]=r[a]);if(u)var l=u(t)}for(e&&e(i);c<s.length;c++)o=s[c],t.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return t.O(l)},i=self["webpackChunkmusic"]=self["webpackChunkmusic"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(4864)}));i=t.O(i)})();
//# sourceMappingURL=app.3715db2d.js.map