var qe=Object.defineProperty;var Oe=(f,t,e)=>t in f?qe(f,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):f[t]=e;var te=(f,t,e)=>Oe(f,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function e(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(r){if(r.ep)return;r.ep=!0;const l=e(r);fetch(r.href,l)}})();/*!
 * reveal.js 5.2.0
 * https://revealjs.com
 * MIT licensed
 *
 * Copyright (C) 2011-2024 Hakim El Hattab, https://hakim.se
 */const zt=(f,t)=>{for(let e in t)f[e]=t[e];return f},$=(f,t)=>Array.from(f.querySelectorAll(t)),ee=(f,t,e)=>{e?f.classList.add(t):f.classList.remove(t)},Mt=f=>{if(typeof f=="string"){if(f==="null")return null;if(f==="true")return!0;if(f==="false")return!1;if(f.match(/^-?[\d\.]+$/))return parseFloat(f)}return f},Ct=(f,t)=>{f.style.transform=t},jt=(f,t)=>{let e=f.matches||f.matchesSelector||f.msMatchesSelector;return!(!e||!e.call(f,t))},rt=(f,t)=>{if(typeof f.closest=="function")return f.closest(t);for(;f;){if(jt(f,t))return f;f=f.parentNode}return null},Ne=f=>{let t=(f=f||document.documentElement).requestFullscreen||f.webkitRequestFullscreen||f.webkitRequestFullScreen||f.mozRequestFullScreen||f.msRequestFullscreen;t&&t.apply(f)},se=f=>{let t=document.createElement("style");return t.type="text/css",f&&f.length>0&&(t.styleSheet?t.styleSheet.cssText=f:t.appendChild(document.createTextNode(f))),document.head.appendChild(t),t},Ee=()=>{let f={};location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi,t=>{f[t.split("=").shift()]=t.split("=").pop()});for(let t in f){let e=f[t];f[t]=Mt(unescape(e))}return f.dependencies!==void 0&&delete f.dependencies,f},Fe={mp4:"video/mp4",m4a:"video/mp4",ogv:"video/ogg",mpeg:"video/mpeg",webm:"video/webm"},Me=navigator.userAgent,Bt=/(iphone|ipod|ipad|android)/gi.test(Me)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,ze=/android/gi.test(Me);var Ue=function(f){if(f){var t=function(m){return[].slice.call(m)},e=3,n=[],r=null,l="requestAnimationFrame"in f?function(){f.cancelAnimationFrame(r),r=f.requestAnimationFrame(function(){return g(n.filter(function(m){return m.dirty&&m.active}))})}:function(){},d=function(m){return function(){n.forEach(function(D){return D.dirty=m}),l()}},g=function(m){m.filter(function(R){return!R.styleComputed}).forEach(function(R){R.styleComputed=x(R)}),m.filter(L).forEach(v);var D=m.filter(y);D.forEach(I),D.forEach(function(R){v(R),c(R)}),D.forEach(P)},c=function(m){return m.dirty=0},I=function(m){m.availableWidth=m.element.parentNode.clientWidth,m.currentWidth=m.element.scrollWidth,m.previousFontSize=m.currentFontSize,m.currentFontSize=Math.min(Math.max(m.minSize,m.availableWidth/m.currentWidth*m.previousFontSize),m.maxSize),m.whiteSpace=m.multiLine&&m.currentFontSize===m.minSize?"normal":"nowrap"},y=function(m){return m.dirty!==2||m.dirty===2&&m.element.parentNode.clientWidth!==m.availableWidth},x=function(m){var D=f.getComputedStyle(m.element,null);return m.currentFontSize=parseFloat(D.getPropertyValue("font-size")),m.display=D.getPropertyValue("display"),m.whiteSpace=D.getPropertyValue("white-space"),!0},L=function(m){var D=!1;return!m.preStyleTestCompleted&&(/inline-/.test(m.display)||(D=!0,m.display="inline-block"),m.whiteSpace!=="nowrap"&&(D=!0,m.whiteSpace="nowrap"),m.preStyleTestCompleted=!0,D)},v=function(m){m.element.style.whiteSpace=m.whiteSpace,m.element.style.display=m.display,m.element.style.fontSize=m.currentFontSize+"px"},P=function(m){m.element.dispatchEvent(new CustomEvent("fit",{detail:{oldValue:m.previousFontSize,newValue:m.currentFontSize,scaleFactor:m.currentFontSize/m.previousFontSize}}))},u=function(m,D){return function(){m.dirty=D,m.active&&l()}},ot=function(m){return function(){n=n.filter(function(D){return D.element!==m.element}),m.observeMutations&&m.observer.disconnect(),m.element.style.whiteSpace=m.originalStyle.whiteSpace,m.element.style.display=m.originalStyle.display,m.element.style.fontSize=m.originalStyle.fontSize}},Y=function(m){return function(){m.active||(m.active=!0,l())}},G=function(m){return function(){return m.active=!1}},yt=function(m){m.observeMutations&&(m.observer=new MutationObserver(u(m,1)),m.observer.observe(m.element,m.observeMutations))},et={minSize:16,maxSize:512,multiLine:!0,observeMutations:"MutationObserver"in f&&{subtree:!0,childList:!0,characterData:!0}},O=null,j=function(){f.clearTimeout(O),O=f.setTimeout(d(2),F.observeWindowDelay)},it=["resize","orientationchange"];return Object.defineProperty(F,"observeWindow",{set:function(m){var D="".concat(m?"add":"remove","EventListener");it.forEach(function(R){f[D](R,j)})}}),F.observeWindow=!0,F.observeWindowDelay=100,F.fitAll=d(e),F}function tt(m,D){var R=Object.assign({},et,D),A=m.map(function(st){var nt=Object.assign({},R,{element:st,active:!0});return function(K){K.originalStyle={whiteSpace:K.element.style.whiteSpace,display:K.element.style.display,fontSize:K.element.style.fontSize},yt(K),K.newbie=!0,K.dirty=!0,n.push(K)}(nt),{element:st,fit:u(nt,e),unfreeze:Y(nt),freeze:G(nt),unsubscribe:ot(nt)}});return l(),A}function F(m){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return typeof m=="string"?tt(t(document.querySelectorAll(m)),D):tt([m],D)[0]}}(typeof window>"u"?null:window);class Ve{constructor(t){this.Reveal=t,this.startEmbeddedIframe=this.startEmbeddedIframe.bind(this)}shouldPreload(t){if(this.Reveal.isScrollView())return!0;let e=this.Reveal.getConfig().preloadIframes;return typeof e!="boolean"&&(e=t.hasAttribute("data-preload")),e}load(t,e={}){t.style.display=this.Reveal.getConfig().display,$(t,"img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach(r=>{(r.tagName!=="IFRAME"||this.shouldPreload(r))&&(r.setAttribute("src",r.getAttribute("data-src")),r.setAttribute("data-lazy-loaded",""),r.removeAttribute("data-src"))}),$(t,"video, audio").forEach(r=>{let l=0;$(r,"source[data-src]").forEach(d=>{d.setAttribute("src",d.getAttribute("data-src")),d.removeAttribute("data-src"),d.setAttribute("data-lazy-loaded",""),l+=1}),Bt&&r.tagName==="VIDEO"&&r.setAttribute("playsinline",""),l>0&&r.load()});let n=t.slideBackgroundElement;if(n){n.style.display="block";let r=t.slideBackgroundContentElement,l=t.getAttribute("data-background-iframe");if(n.hasAttribute("data-loaded")===!1){n.setAttribute("data-loaded","true");let g=t.getAttribute("data-background-image"),c=t.getAttribute("data-background-video"),I=t.hasAttribute("data-background-video-loop"),y=t.hasAttribute("data-background-video-muted");if(g)/^data:/.test(g.trim())?r.style.backgroundImage=`url(${g.trim()})`:r.style.backgroundImage=g.split(",").map(x=>`url(${((L="")=>encodeURI(L).replace(/%5B/g,"[").replace(/%5D/g,"]").replace(/[!'()*]/g,v=>`%${v.charCodeAt(0).toString(16).toUpperCase()}`))(decodeURI(x.trim()))})`).join(",");else if(c){let x=document.createElement("video");I&&x.setAttribute("loop",""),(y||this.Reveal.isSpeakerNotes())&&(x.muted=!0),Bt&&(x.muted=!0,x.setAttribute("playsinline","")),c.split(",").forEach(L=>{const v=document.createElement("source");v.setAttribute("src",L);let P=((u="")=>Fe[u.split(".").pop()])(L);P&&v.setAttribute("type",P),x.appendChild(v)}),r.appendChild(x)}else if(l&&e.excludeIframes!==!0){let x=document.createElement("iframe");x.setAttribute("allowfullscreen",""),x.setAttribute("mozallowfullscreen",""),x.setAttribute("webkitallowfullscreen",""),x.setAttribute("allow","autoplay"),x.setAttribute("data-src",l),x.style.width="100%",x.style.height="100%",x.style.maxHeight="100%",x.style.maxWidth="100%",r.appendChild(x)}}let d=r.querySelector("iframe[data-src]");d&&this.shouldPreload(n)&&!/autoplay=(1|true|yes)/gi.test(l)&&d.getAttribute("src")!==l&&d.setAttribute("src",l)}this.layout(t)}layout(t){Array.from(t.querySelectorAll(".r-fit-text")).forEach(e=>{Ue(e,{minSize:24,maxSize:.8*this.Reveal.getConfig().height,observeMutations:!1,observeWindow:!1})})}unload(t){t.style.display="none";let e=this.Reveal.getSlideBackground(t);e&&(e.style.display="none",$(e,"iframe[src]").forEach(n=>{n.removeAttribute("src")})),$(t,"video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]").forEach(n=>{n.setAttribute("data-src",n.getAttribute("src")),n.removeAttribute("src")}),$(t,"video[data-lazy-loaded] source[src], audio source[src]").forEach(n=>{n.setAttribute("data-src",n.getAttribute("src")),n.removeAttribute("src")})}formatEmbeddedContent(){let t=(e,n,r)=>{$(this.Reveal.getSlidesElement(),"iframe["+e+'*="'+n+'"]').forEach(l=>{let d=l.getAttribute(e);d&&d.indexOf(r)===-1&&l.setAttribute(e,d+(/\?/.test(d)?"&":"?")+r)})};t("src","youtube.com/embed/","enablejsapi=1"),t("data-src","youtube.com/embed/","enablejsapi=1"),t("src","player.vimeo.com/","api=1"),t("data-src","player.vimeo.com/","api=1")}startEmbeddedContent(t){if(t){const e=this.Reveal.isSpeakerNotes();$(t,'img[src$=".gif"]').forEach(n=>{n.setAttribute("src",n.getAttribute("src"))}),$(t,"video, audio").forEach(n=>{if(rt(n,".fragment")&&!rt(n,".fragment.visible"))return;let r=this.Reveal.getConfig().autoPlayMedia;if(typeof r!="boolean"&&(r=n.hasAttribute("data-autoplay")||!!rt(n,".slide-background")),r&&typeof n.play=="function"){if(e&&!n.muted)return;if(n.readyState>1)this.startEmbeddedMedia({target:n});else if(Bt){let l=n.play();l&&typeof l.catch=="function"&&n.controls===!1&&l.catch(()=>{n.controls=!0,n.addEventListener("play",()=>{n.controls=!1})})}else n.removeEventListener("loadeddata",this.startEmbeddedMedia),n.addEventListener("loadeddata",this.startEmbeddedMedia)}}),e||($(t,"iframe[src]").forEach(n=>{rt(n,".fragment")&&!rt(n,".fragment.visible")||this.startEmbeddedIframe({target:n})}),$(t,"iframe[data-src]").forEach(n=>{rt(n,".fragment")&&!rt(n,".fragment.visible")||n.getAttribute("src")!==n.getAttribute("data-src")&&(n.removeEventListener("load",this.startEmbeddedIframe),n.addEventListener("load",this.startEmbeddedIframe),n.setAttribute("src",n.getAttribute("data-src")))}))}}startEmbeddedMedia(t){let e=!!rt(t.target,"html"),n=!!rt(t.target,".present");e&&n&&(t.target.paused||t.target.ended)&&(t.target.currentTime=0,t.target.play()),t.target.removeEventListener("loadeddata",this.startEmbeddedMedia)}startEmbeddedIframe(t){let e=t.target;if(e&&e.contentWindow){let n=!!rt(t.target,"html"),r=!!rt(t.target,".present");if(n&&r){let l=this.Reveal.getConfig().autoPlayMedia;typeof l!="boolean"&&(l=e.hasAttribute("data-autoplay")||!!rt(e,".slide-background")),/youtube\.com\/embed\//.test(e.getAttribute("src"))&&l?e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"):/player\.vimeo\.com\//.test(e.getAttribute("src"))&&l?e.contentWindow.postMessage('{"method":"play"}',"*"):e.contentWindow.postMessage("slide:start","*")}}}stopEmbeddedContent(t,e={}){e=zt({unloadIframes:!0},e),t&&t.parentNode&&($(t,"video, audio").forEach(n=>{n.hasAttribute("data-ignore")||typeof n.pause!="function"||(n.setAttribute("data-paused-by-reveal",""),n.pause())}),$(t,"iframe").forEach(n=>{n.contentWindow&&n.contentWindow.postMessage("slide:stop","*"),n.removeEventListener("load",this.startEmbeddedIframe)}),$(t,'iframe[src*="youtube.com/embed/"]').forEach(n=>{!n.hasAttribute("data-ignore")&&n.contentWindow&&typeof n.contentWindow.postMessage=="function"&&n.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}),$(t,'iframe[src*="player.vimeo.com/"]').forEach(n=>{!n.hasAttribute("data-ignore")&&n.contentWindow&&typeof n.contentWindow.postMessage=="function"&&n.contentWindow.postMessage('{"method":"pause"}',"*")}),e.unloadIframes===!0&&$(t,"iframe[data-src]").forEach(n=>{n.setAttribute("src","about:blank"),n.removeAttribute("src")}))}}const Pt=".slides section",Rt=".slides>section",Ae=".slides>section.present>section",We=/registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener|showPreview/;class je{constructor(t){this.Reveal=t}render(){this.element=document.createElement("div"),this.element.className="slide-number",this.Reveal.getRevealElement().appendChild(this.element)}configure(t,e){let n="none";t.slideNumber&&!this.Reveal.isPrintView()&&(t.showSlideNumber==="all"||t.showSlideNumber==="speaker"&&this.Reveal.isSpeakerNotes())&&(n="block"),this.element.style.display=n}update(){this.Reveal.getConfig().slideNumber&&this.element&&(this.element.innerHTML=this.getSlideNumber())}getSlideNumber(t=this.Reveal.getCurrentSlide()){let e,n=this.Reveal.getConfig(),r="h.v";if(typeof n.slideNumber=="function")e=n.slideNumber(t);else{typeof n.slideNumber=="string"&&(r=n.slideNumber),/c/.test(r)||this.Reveal.getHorizontalSlides().length!==1||(r="c");let d=t&&t.dataset.visibility==="uncounted"?0:1;switch(e=[],r){case"c":e.push(this.Reveal.getSlidePastCount(t)+d);break;case"c/t":e.push(this.Reveal.getSlidePastCount(t)+d,"/",this.Reveal.getTotalSlides());break;default:let g=this.Reveal.getIndices(t);e.push(g.h+d);let c=r==="h/v"?"/":".";this.Reveal.isVerticalSlide(t)&&e.push(c,g.v+1)}}let l="#"+this.Reveal.location.getHash(t);return this.formatNumber(e[0],e[1],e[2],l)}formatNumber(t,e,n,r="#"+this.Reveal.location.getHash()){return typeof n!="number"||isNaN(n)?`<a href="${r}">
					<span class="slide-number-a">${t}</span>
					</a>`:`<a href="${r}">
					<span class="slide-number-a">${t}</span>
					<span class="slide-number-delimiter">${e}</span>
					<span class="slide-number-b">${n}</span>
					</a>`}destroy(){this.element.remove()}}class Ke{constructor(t){this.Reveal=t,this.onInput=this.onInput.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this)}render(){this.element=document.createElement("div"),this.element.className="jump-to-slide",this.jumpInput=document.createElement("input"),this.jumpInput.type="text",this.jumpInput.className="jump-to-slide-input",this.jumpInput.placeholder="Jump to slide",this.jumpInput.addEventListener("input",this.onInput),this.jumpInput.addEventListener("keydown",this.onKeyDown),this.jumpInput.addEventListener("blur",this.onBlur),this.element.appendChild(this.jumpInput)}show(){this.indicesOnShow=this.Reveal.getIndices(),this.Reveal.getRevealElement().appendChild(this.element),this.jumpInput.focus()}hide(){this.isVisible()&&(this.element.remove(),this.jumpInput.value="",clearTimeout(this.jumpTimeout),delete this.jumpTimeout)}isVisible(){return!!this.element.parentNode}jump(){clearTimeout(this.jumpTimeout),delete this.jumpTimeout;let t,e=this.jumpInput.value.trim("");if(/^\d+$/.test(e)){const n=this.Reveal.getConfig().slideNumber;if(n==="c"||n==="c/t"){const r=this.Reveal.getSlides()[parseInt(e,10)-1];r&&(t=this.Reveal.getIndices(r))}}return t||(/^\d+\.\d+$/.test(e)&&(e=e.replace(".","/")),t=this.Reveal.location.getIndicesFromHash(e,{oneBasedIndex:!0})),!t&&/\S+/i.test(e)&&e.length>1&&(t=this.search(e)),t&&e!==""?(this.Reveal.slide(t.h,t.v,t.f),!0):(this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),!1)}jumpAfter(t){clearTimeout(this.jumpTimeout),this.jumpTimeout=setTimeout(()=>this.jump(),t)}search(t){const e=new RegExp("\\b"+t.trim()+"\\b","i"),n=this.Reveal.getSlides().find(r=>e.test(r.innerText));return n?this.Reveal.getIndices(n):null}cancel(){this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),this.hide()}confirm(){this.jump(),this.hide()}destroy(){this.jumpInput.removeEventListener("input",this.onInput),this.jumpInput.removeEventListener("keydown",this.onKeyDown),this.jumpInput.removeEventListener("blur",this.onBlur),this.element.remove()}onKeyDown(t){t.keyCode===13?this.confirm():t.keyCode===27&&(this.cancel(),t.stopImmediatePropagation())}onInput(t){this.jumpAfter(200)}onBlur(){setTimeout(()=>this.hide(),1)}}const ne=f=>{let t=f.match(/^#([0-9a-f]{3})$/i);if(t&&t[1])return t=t[1],{r:17*parseInt(t.charAt(0),16),g:17*parseInt(t.charAt(1),16),b:17*parseInt(t.charAt(2),16)};let e=f.match(/^#([0-9a-f]{6})$/i);if(e&&e[1])return e=e[1],{r:parseInt(e.slice(0,2),16),g:parseInt(e.slice(2,4),16),b:parseInt(e.slice(4,6),16)};let n=f.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);if(n)return{r:parseInt(n[1],10),g:parseInt(n[2],10),b:parseInt(n[3],10)};let r=f.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);return r?{r:parseInt(r[1],10),g:parseInt(r[2],10),b:parseInt(r[3],10),a:parseFloat(r[4])}:null};class Xe{constructor(t){this.Reveal=t}render(){this.element=document.createElement("div"),this.element.className="backgrounds",this.Reveal.getRevealElement().appendChild(this.element)}create(){this.element.innerHTML="",this.element.classList.add("no-transition"),this.Reveal.getHorizontalSlides().forEach(t=>{let e=this.createBackground(t,this.element);$(t,"section").forEach(n=>{this.createBackground(n,e),e.classList.add("stack")})}),this.Reveal.getConfig().parallaxBackgroundImage?(this.element.style.backgroundImage='url("'+this.Reveal.getConfig().parallaxBackgroundImage+'")',this.element.style.backgroundSize=this.Reveal.getConfig().parallaxBackgroundSize,this.element.style.backgroundRepeat=this.Reveal.getConfig().parallaxBackgroundRepeat,this.element.style.backgroundPosition=this.Reveal.getConfig().parallaxBackgroundPosition,setTimeout(()=>{this.Reveal.getRevealElement().classList.add("has-parallax-background")},1)):(this.element.style.backgroundImage="",this.Reveal.getRevealElement().classList.remove("has-parallax-background"))}createBackground(t,e){let n=document.createElement("div");n.className="slide-background "+t.className.replace(/present|past|future/,"");let r=document.createElement("div");return r.className="slide-background-content",n.appendChild(r),e.appendChild(n),t.slideBackgroundElement=n,t.slideBackgroundContentElement=r,this.sync(t),n}sync(t){const e=t.slideBackgroundElement,n=t.slideBackgroundContentElement,r={background:t.getAttribute("data-background"),backgroundSize:t.getAttribute("data-background-size"),backgroundImage:t.getAttribute("data-background-image"),backgroundVideo:t.getAttribute("data-background-video"),backgroundIframe:t.getAttribute("data-background-iframe"),backgroundColor:t.getAttribute("data-background-color"),backgroundGradient:t.getAttribute("data-background-gradient"),backgroundRepeat:t.getAttribute("data-background-repeat"),backgroundPosition:t.getAttribute("data-background-position"),backgroundTransition:t.getAttribute("data-background-transition"),backgroundOpacity:t.getAttribute("data-background-opacity")},l=t.hasAttribute("data-preload");t.classList.remove("has-dark-background"),t.classList.remove("has-light-background"),e.removeAttribute("data-loaded"),e.removeAttribute("data-background-hash"),e.removeAttribute("data-background-size"),e.removeAttribute("data-background-transition"),e.style.backgroundColor="",n.style.backgroundSize="",n.style.backgroundRepeat="",n.style.backgroundPosition="",n.style.backgroundImage="",n.style.opacity="",n.innerHTML="",r.background&&(/^(http|file|\/\/)/gi.test(r.background)||/\.(svg|png|jpg|jpeg|gif|bmp|webp)([?#\s]|$)/gi.test(r.background)?t.setAttribute("data-background-image",r.background):e.style.background=r.background),(r.background||r.backgroundColor||r.backgroundGradient||r.backgroundImage||r.backgroundVideo||r.backgroundIframe)&&e.setAttribute("data-background-hash",r.background+r.backgroundSize+r.backgroundImage+r.backgroundVideo+r.backgroundIframe+r.backgroundColor+r.backgroundGradient+r.backgroundRepeat+r.backgroundPosition+r.backgroundTransition+r.backgroundOpacity),r.backgroundSize&&e.setAttribute("data-background-size",r.backgroundSize),r.backgroundColor&&(e.style.backgroundColor=r.backgroundColor),r.backgroundGradient&&(e.style.backgroundImage=r.backgroundGradient),r.backgroundTransition&&e.setAttribute("data-background-transition",r.backgroundTransition),l&&e.setAttribute("data-preload",""),r.backgroundSize&&(n.style.backgroundSize=r.backgroundSize),r.backgroundRepeat&&(n.style.backgroundRepeat=r.backgroundRepeat),r.backgroundPosition&&(n.style.backgroundPosition=r.backgroundPosition),r.backgroundOpacity&&(n.style.opacity=r.backgroundOpacity);const d=this.getContrastClass(t);typeof d=="string"&&t.classList.add(d)}getContrastClass(t){const e=t.slideBackgroundElement;let n=t.getAttribute("data-background-color");if(!n||!ne(n)){let l=window.getComputedStyle(e);l&&l.backgroundColor&&(n=l.backgroundColor)}if(n){const l=ne(n);if(l&&l.a!==0)return typeof(r=n)=="string"&&(r=ne(r)),(r?(299*r.r+587*r.g+114*r.b)/1e3:null)<128?"has-dark-background":"has-light-background"}var r;return null}bubbleSlideContrastClassToElement(t,e){["has-light-background","has-dark-background"].forEach(n=>{t.classList.contains(n)?e.classList.add(n):e.classList.remove(n)},this)}update(t=!1){let e=this.Reveal.getConfig(),n=this.Reveal.getCurrentSlide(),r=this.Reveal.getIndices(),l=null,d=e.rtl?"future":"past",g=e.rtl?"past":"future";if(Array.from(this.element.childNodes).forEach((I,y)=>{I.classList.remove("past","present","future"),y<r.h?I.classList.add(d):y>r.h?I.classList.add(g):(I.classList.add("present"),l=I),(t||y===r.h)&&$(I,".slide-background").forEach((x,L)=>{x.classList.remove("past","present","future");const v=typeof r.v=="number"?r.v:0;L<v?x.classList.add("past"):L>v?x.classList.add("future"):(x.classList.add("present"),y===r.h&&(l=x))})}),this.previousBackground&&!this.previousBackground.closest("body")&&(this.previousBackground=null),l&&this.previousBackground){let I=this.previousBackground.getAttribute("data-background-hash"),y=l.getAttribute("data-background-hash");if(y&&y===I&&l!==this.previousBackground){this.element.classList.add("no-transition");const x=l.querySelector("video"),L=this.previousBackground.querySelector("video");if(x&&L){const v=x.parentNode;L.parentNode.appendChild(x),v.appendChild(L)}}}const c=l!==this.previousBackground;if(c&&this.previousBackground&&this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground,{unloadIframes:!this.Reveal.slideContent.shouldPreload(this.previousBackground)}),c&&l){this.Reveal.slideContent.startEmbeddedContent(l);let I=l.querySelector(".slide-background-content");if(I){let y=I.style.backgroundImage||"";/\.gif/i.test(y)&&(I.style.backgroundImage="",window.getComputedStyle(I).opacity,I.style.backgroundImage=y)}this.previousBackground=l}n&&this.bubbleSlideContrastClassToElement(n,this.Reveal.getRevealElement()),setTimeout(()=>{this.element.classList.remove("no-transition")},10)}updateParallax(){let t=this.Reveal.getIndices();if(this.Reveal.getConfig().parallaxBackgroundImage){let e,n,r=this.Reveal.getHorizontalSlides(),l=this.Reveal.getVerticalSlides(),d=this.element.style.backgroundSize.split(" ");d.length===1?e=n=parseInt(d[0],10):(e=parseInt(d[0],10),n=parseInt(d[1],10));let g,c,I=this.element.offsetWidth,y=r.length;g=typeof this.Reveal.getConfig().parallaxBackgroundHorizontal=="number"?this.Reveal.getConfig().parallaxBackgroundHorizontal:y>1?(e-I)/(y-1):0,c=g*t.h*-1;let x,L,v=this.element.offsetHeight,P=l.length;x=typeof this.Reveal.getConfig().parallaxBackgroundVertical=="number"?this.Reveal.getConfig().parallaxBackgroundVertical:(n-v)/(P-1),L=P>0?x*t.v:0,this.element.style.backgroundPosition=c+"px "+-L+"px"}}destroy(){this.element.remove()}}let Re=0;class Ye{constructor(t){this.Reveal=t}run(t,e){this.reset();let n=this.Reveal.getSlides(),r=n.indexOf(e),l=n.indexOf(t);if(t&&e&&t.hasAttribute("data-auto-animate")&&e.hasAttribute("data-auto-animate")&&t.getAttribute("data-auto-animate-id")===e.getAttribute("data-auto-animate-id")&&!(r>l?e:t).hasAttribute("data-auto-animate-restart")){this.autoAnimateStyleSheet=this.autoAnimateStyleSheet||se();let d=this.getAutoAnimateOptions(e);t.dataset.autoAnimate="pending",e.dataset.autoAnimate="pending",d.slideDirection=r>l?"forward":"backward";let g=t.style.display==="none";g&&(t.style.display=this.Reveal.getConfig().display);let c=this.getAutoAnimatableElements(t,e).map(I=>this.autoAnimateElements(I.from,I.to,I.options||{},d,Re++));if(g&&(t.style.display="none"),e.dataset.autoAnimateUnmatched!=="false"&&this.Reveal.getConfig().autoAnimateUnmatched===!0){let I=.8*d.duration,y=.2*d.duration;this.getUnmatchedAutoAnimateElements(e).forEach(x=>{let L=this.getAutoAnimateOptions(x,d),v="unmatched";L.duration===d.duration&&L.delay===d.delay||(v="unmatched-"+Re++,c.push(`[data-auto-animate="running"] [data-auto-animate-target="${v}"] { transition: opacity ${L.duration}s ease ${L.delay}s; }`)),x.dataset.autoAnimateTarget=v},this),c.push(`[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity ${I}s ease ${y}s; }`)}this.autoAnimateStyleSheet.innerHTML=c.join(""),requestAnimationFrame(()=>{this.autoAnimateStyleSheet&&(getComputedStyle(this.autoAnimateStyleSheet).fontWeight,e.dataset.autoAnimate="running")}),this.Reveal.dispatchEvent({type:"autoanimate",data:{fromSlide:t,toSlide:e,sheet:this.autoAnimateStyleSheet}})}}reset(){$(this.Reveal.getRevealElement(),'[data-auto-animate]:not([data-auto-animate=""])').forEach(t=>{t.dataset.autoAnimate=""}),$(this.Reveal.getRevealElement(),"[data-auto-animate-target]").forEach(t=>{delete t.dataset.autoAnimateTarget}),this.autoAnimateStyleSheet&&this.autoAnimateStyleSheet.parentNode&&(this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet),this.autoAnimateStyleSheet=null)}autoAnimateElements(t,e,n,r,l){t.dataset.autoAnimateTarget="",e.dataset.autoAnimateTarget=l;let d=this.getAutoAnimateOptions(e,r);n.delay!==void 0&&(d.delay=n.delay),n.duration!==void 0&&(d.duration=n.duration),n.easing!==void 0&&(d.easing=n.easing);let g=this.getAutoAnimatableProperties("from",t,n),c=this.getAutoAnimatableProperties("to",e,n);if(e.classList.contains("fragment")&&delete c.styles.opacity,n.translate!==!1||n.scale!==!1){let x=this.Reveal.getScale(),L={x:(g.x-c.x)/x,y:(g.y-c.y)/x,scaleX:g.width/c.width,scaleY:g.height/c.height};L.x=Math.round(1e3*L.x)/1e3,L.y=Math.round(1e3*L.y)/1e3,L.scaleX=Math.round(1e3*L.scaleX)/1e3,L.scaleX=Math.round(1e3*L.scaleX)/1e3;let v=n.translate!==!1&&(L.x!==0||L.y!==0),P=n.scale!==!1&&(L.scaleX!==0||L.scaleY!==0);if(v||P){let u=[];v&&u.push(`translate(${L.x}px, ${L.y}px)`),P&&u.push(`scale(${L.scaleX}, ${L.scaleY})`),g.styles.transform=u.join(" "),g.styles["transform-origin"]="top left",c.styles.transform="none"}}for(let x in c.styles){const L=c.styles[x],v=g.styles[x];L===v?delete c.styles[x]:(L.explicitValue===!0&&(c.styles[x]=L.value),v.explicitValue===!0&&(g.styles[x]=v.value))}let I="",y=Object.keys(c.styles);return y.length>0&&(g.styles.transition="none",c.styles.transition=`all ${d.duration}s ${d.easing} ${d.delay}s`,c.styles["transition-property"]=y.join(", "),c.styles["will-change"]=y.join(", "),I='[data-auto-animate-target="'+l+'"] {'+Object.keys(g.styles).map(x=>x+": "+g.styles[x]+" !important;").join("")+'}[data-auto-animate="running"] [data-auto-animate-target="'+l+'"] {'+Object.keys(c.styles).map(x=>x+": "+c.styles[x]+" !important;").join("")+"}"),I}getAutoAnimateOptions(t,e){let n={easing:this.Reveal.getConfig().autoAnimateEasing,duration:this.Reveal.getConfig().autoAnimateDuration,delay:0};if(n=zt(n,e),t.parentNode){let r=rt(t.parentNode,"[data-auto-animate-target]");r&&(n=this.getAutoAnimateOptions(r,n))}return t.dataset.autoAnimateEasing&&(n.easing=t.dataset.autoAnimateEasing),t.dataset.autoAnimateDuration&&(n.duration=parseFloat(t.dataset.autoAnimateDuration)),t.dataset.autoAnimateDelay&&(n.delay=parseFloat(t.dataset.autoAnimateDelay)),n}getAutoAnimatableProperties(t,e,n){let r=this.Reveal.getConfig(),l={styles:[]};if(n.translate!==!1||n.scale!==!1){let g;if(typeof n.measure=="function")g=n.measure(e);else if(r.center)g=e.getBoundingClientRect();else{let c=this.Reveal.getScale();g={x:e.offsetLeft*c,y:e.offsetTop*c,width:e.offsetWidth*c,height:e.offsetHeight*c}}l.x=g.x,l.y=g.y,l.width=g.width,l.height=g.height}const d=getComputedStyle(e);return(n.styles||r.autoAnimateStyles).forEach(g=>{let c;typeof g=="string"&&(g={property:g}),g.from!==void 0&&t==="from"?c={value:g.from,explicitValue:!0}:g.to!==void 0&&t==="to"?c={value:g.to,explicitValue:!0}:(g.property==="line-height"&&(c=parseFloat(d["line-height"])/parseFloat(d["font-size"])),isNaN(c)&&(c=d[g.property])),c!==""&&(l.styles[g.property]=c)}),l}getAutoAnimatableElements(t,e){let n=(typeof this.Reveal.getConfig().autoAnimateMatcher=="function"?this.Reveal.getConfig().autoAnimateMatcher:this.getAutoAnimatePairs).call(this,t,e),r=[];return n.filter((l,d)=>{if(r.indexOf(l.to)===-1)return r.push(l.to),!0})}getAutoAnimatePairs(t,e){let n=[];const r="h1, h2, h3, h4, h5, h6, p, li";return this.findAutoAnimateMatches(n,t,e,"[data-id]",l=>l.nodeName+":::"+l.getAttribute("data-id")),this.findAutoAnimateMatches(n,t,e,r,l=>l.nodeName+":::"+l.textContent.trim()),this.findAutoAnimateMatches(n,t,e,"img, video, iframe",l=>l.nodeName+":::"+(l.getAttribute("src")||l.getAttribute("data-src"))),this.findAutoAnimateMatches(n,t,e,"pre",l=>l.nodeName+":::"+l.textContent.trim()),n.forEach(l=>{jt(l.from,r)?l.options={scale:!1}:jt(l.from,"pre")&&(l.options={scale:!1,styles:["width","height"]},this.findAutoAnimateMatches(n,l.from,l.to,".hljs .hljs-ln-code",d=>d.textContent,{scale:!1,styles:[],measure:this.getLocalBoundingBox.bind(this)}),this.findAutoAnimateMatches(n,l.from,l.to,".hljs .hljs-ln-numbers[data-line-number]",d=>d.getAttribute("data-line-number"),{scale:!1,styles:["width"],measure:this.getLocalBoundingBox.bind(this)}))},this),n}getLocalBoundingBox(t){const e=this.Reveal.getScale();return{x:Math.round(t.offsetLeft*e*100)/100,y:Math.round(t.offsetTop*e*100)/100,width:Math.round(t.offsetWidth*e*100)/100,height:Math.round(t.offsetHeight*e*100)/100}}findAutoAnimateMatches(t,e,n,r,l,d){let g={},c={};[].slice.call(e.querySelectorAll(r)).forEach((I,y)=>{const x=l(I);typeof x=="string"&&x.length&&(g[x]=g[x]||[],g[x].push(I))}),[].slice.call(n.querySelectorAll(r)).forEach((I,y)=>{const x=l(I);let L;if(c[x]=c[x]||[],c[x].push(I),g[x]){const v=c[x].length-1,P=g[x].length-1;g[x][v]?(L=g[x][v],g[x][v]=null):g[x][P]&&(L=g[x][P],g[x][P]=null)}L&&t.push({from:L,to:I,options:d})})}getUnmatchedAutoAnimateElements(t){return[].slice.call(t.children).reduce((e,n)=>{const r=n.querySelector("[data-auto-animate-target]");return n.hasAttribute("data-auto-animate-target")||r||e.push(n),n.querySelector("[data-auto-animate-target]")&&(e=e.concat(this.getUnmatchedAutoAnimateElements(n))),e},[])}}class Ze{constructor(t){this.Reveal=t,this.active=!1,this.activatedCallbacks=[],this.onScroll=this.onScroll.bind(this)}activate(){if(this.active)return;const t=this.Reveal.getState();this.active=!0,this.slideHTMLBeforeActivation=this.Reveal.getSlidesElement().innerHTML;const e=$(this.Reveal.getRevealElement(),Rt),n=$(this.Reveal.getRevealElement(),".backgrounds>.slide-background");let r;this.viewportElement.classList.add("loading-scroll-mode","reveal-scroll");const l=window.getComputedStyle(this.viewportElement);l&&l.background&&(r=l.background);const d=[],g=e[0].parentNode;let c;const I=(y,x,L,v)=>{let P;if(c&&this.Reveal.shouldAutoAnimateBetween(c,y))P=document.createElement("div"),P.className="scroll-page-content scroll-auto-animate-page",P.style.display="none",c.closest(".scroll-page-content").parentNode.appendChild(P);else{const u=document.createElement("div");if(u.className="scroll-page",d.push(u),v&&n.length>x){const Y=n[x],G=window.getComputedStyle(Y);G&&G.background?u.style.background=G.background:r&&(u.style.background=r)}else r&&(u.style.background=r);const ot=document.createElement("div");ot.className="scroll-page-sticky",u.appendChild(ot),P=document.createElement("div"),P.className="scroll-page-content",ot.appendChild(P)}P.appendChild(y),y.classList.remove("past","future"),y.setAttribute("data-index-h",x),y.setAttribute("data-index-v",L),y.slideBackgroundElement&&(y.slideBackgroundElement.remove("past","future"),P.insertBefore(y.slideBackgroundElement,y)),c=y};e.forEach((y,x)=>{this.Reveal.isVerticalStack(y)?y.querySelectorAll("section").forEach((L,v)=>{I(L,x,v,!0)}):I(y,x,0)},this),this.createProgressBar(),$(this.Reveal.getRevealElement(),".stack").forEach(y=>y.remove()),d.forEach(y=>g.appendChild(y)),this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()),this.Reveal.layout(),this.Reveal.setState(t),this.activatedCallbacks.forEach(y=>y()),this.activatedCallbacks=[],this.restoreScrollPosition(),this.viewportElement.classList.remove("loading-scroll-mode"),this.viewportElement.addEventListener("scroll",this.onScroll,{passive:!0})}deactivate(){if(!this.active)return;const t=this.Reveal.getState();this.active=!1,this.viewportElement.removeEventListener("scroll",this.onScroll),this.viewportElement.classList.remove("reveal-scroll"),this.removeProgressBar(),this.Reveal.getSlidesElement().innerHTML=this.slideHTMLBeforeActivation,this.Reveal.sync(),this.Reveal.setState(t),this.slideHTMLBeforeActivation=null}toggle(t){typeof t=="boolean"?t?this.activate():this.deactivate():this.isActive()?this.deactivate():this.activate()}isActive(){return this.active}createProgressBar(){this.progressBar=document.createElement("div"),this.progressBar.className="scrollbar",this.progressBarInner=document.createElement("div"),this.progressBarInner.className="scrollbar-inner",this.progressBar.appendChild(this.progressBarInner),this.progressBarPlayhead=document.createElement("div"),this.progressBarPlayhead.className="scrollbar-playhead",this.progressBarInner.appendChild(this.progressBarPlayhead),this.viewportElement.insertBefore(this.progressBar,this.viewportElement.firstChild);const t=n=>{let r=(n.clientY-this.progressBarInner.getBoundingClientRect().top)/this.progressBarHeight;r=Math.max(Math.min(r,1),0),this.viewportElement.scrollTop=r*(this.viewportElement.scrollHeight-this.viewportElement.offsetHeight)},e=n=>{this.draggingProgressBar=!1,this.showProgressBar(),document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",e)};this.progressBarInner.addEventListener("mousedown",n=>{n.preventDefault(),this.draggingProgressBar=!0,document.addEventListener("mousemove",t),document.addEventListener("mouseup",e),t(n)})}removeProgressBar(){this.progressBar&&(this.progressBar.remove(),this.progressBar=null)}layout(){this.isActive()&&(this.syncPages(),this.syncScrollPosition())}syncPages(){const t=this.Reveal.getConfig(),e=this.Reveal.getComputedSlideSize(window.innerWidth,window.innerHeight),n=this.Reveal.getScale(),r=t.scrollLayout==="compact",l=this.viewportElement.offsetHeight,d=e.height*n,g=r?d:l;this.scrollTriggerHeight=r?d:l,this.viewportElement.style.setProperty("--page-height",g+"px"),this.viewportElement.style.scrollSnapType=typeof t.scrollSnap=="string"?`y ${t.scrollSnap}`:"",this.slideTriggers=[];const c=Array.from(this.Reveal.getRevealElement().querySelectorAll(".scroll-page"));this.pages=c.map(I=>{const y=this.createPage({pageElement:I,slideElement:I.querySelector("section"),stickyElement:I.querySelector(".scroll-page-sticky"),contentElement:I.querySelector(".scroll-page-content"),backgroundElement:I.querySelector(".slide-background"),autoAnimateElements:I.querySelectorAll(".scroll-auto-animate-page"),autoAnimatePages:[]});y.pageElement.style.setProperty("--slide-height",t.center===!0?"auto":e.height+"px"),this.slideTriggers.push({page:y,activate:()=>this.activatePage(y),deactivate:()=>this.deactivatePage(y)}),this.createFragmentTriggersForPage(y),y.autoAnimateElements.length>0&&this.createAutoAnimateTriggersForPage(y);let x=Math.max(y.scrollTriggers.length-1,0);x+=y.autoAnimatePages.reduce((L,v)=>L+Math.max(v.scrollTriggers.length-1,0),y.autoAnimatePages.length),y.pageElement.querySelectorAll(".scroll-snap-point").forEach(L=>L.remove());for(let L=0;L<x+1;L++){const v=document.createElement("div");v.className="scroll-snap-point",v.style.height=this.scrollTriggerHeight+"px",v.style.scrollSnapAlign=r?"center":"start",y.pageElement.appendChild(v),L===0&&(v.style.marginTop=-this.scrollTriggerHeight+"px")}return r&&y.scrollTriggers.length>0?(y.pageHeight=l,y.pageElement.style.setProperty("--page-height",l+"px")):(y.pageHeight=g,y.pageElement.style.removeProperty("--page-height")),y.scrollPadding=this.scrollTriggerHeight*x,y.totalHeight=y.pageHeight+y.scrollPadding,y.pageElement.style.setProperty("--page-scroll-padding",y.scrollPadding+"px"),x>0?(y.stickyElement.style.position="sticky",y.stickyElement.style.top=Math.max((l-y.pageHeight)/2,0)+"px"):(y.stickyElement.style.position="relative",y.pageElement.style.scrollSnapAlign=y.pageHeight<l?"center":"start"),y}),this.setTriggerRanges(),this.viewportElement.setAttribute("data-scrollbar",t.scrollProgress),t.scrollProgress&&this.totalScrollTriggerCount>1?(this.progressBar||this.createProgressBar(),this.syncProgressBar()):this.removeProgressBar()}setTriggerRanges(){this.totalScrollTriggerCount=this.slideTriggers.reduce((e,n)=>e+Math.max(n.page.scrollTriggers.length,1),0);let t=0;this.slideTriggers.forEach((e,n)=>{e.range=[t,t+Math.max(e.page.scrollTriggers.length,1)/this.totalScrollTriggerCount];const r=(e.range[1]-e.range[0])/e.page.scrollTriggers.length;e.page.scrollTriggers.forEach((l,d)=>{l.range=[t+d*r,t+(d+1)*r]}),t=e.range[1]}),this.slideTriggers[this.slideTriggers.length-1].range[1]=1}createFragmentTriggersForPage(t,e){e=e||t.slideElement;const n=this.Reveal.fragments.sort(e.querySelectorAll(".fragment"),!0);return n.length&&(t.fragments=this.Reveal.fragments.sort(e.querySelectorAll(".fragment:not(.disabled)")),t.scrollTriggers.push({activate:()=>{this.Reveal.fragments.update(-1,t.fragments,e)}}),n.forEach((r,l)=>{t.scrollTriggers.push({activate:()=>{this.Reveal.fragments.update(l,t.fragments,e)}})})),t.scrollTriggers.length}createAutoAnimateTriggersForPage(t){t.autoAnimateElements.length>0&&this.slideTriggers.push(...Array.from(t.autoAnimateElements).map((e,n)=>{let r=this.createPage({slideElement:e.querySelector("section"),contentElement:e,backgroundElement:e.querySelector(".slide-background")});return this.createFragmentTriggersForPage(r,r.slideElement),t.autoAnimatePages.push(r),{page:r,activate:()=>this.activatePage(r),deactivate:()=>this.deactivatePage(r)}}))}createPage(t){return t.scrollTriggers=[],t.indexh=parseInt(t.slideElement.getAttribute("data-index-h"),10),t.indexv=parseInt(t.slideElement.getAttribute("data-index-v"),10),t}syncProgressBar(){this.progressBarInner.querySelectorAll(".scrollbar-slide").forEach(d=>d.remove());const t=this.viewportElement.scrollHeight,e=this.viewportElement.offsetHeight,n=e/t;this.progressBarHeight=this.progressBarInner.offsetHeight,this.playheadHeight=Math.max(n*this.progressBarHeight,8),this.progressBarScrollableHeight=this.progressBarHeight-this.playheadHeight;const r=e/t*this.progressBarHeight,l=Math.min(r/8,4);this.progressBarPlayhead.style.height=this.playheadHeight-l+"px",r>6?this.slideTriggers.forEach(d=>{const{page:g}=d;g.progressBarSlide=document.createElement("div"),g.progressBarSlide.className="scrollbar-slide",g.progressBarSlide.style.top=d.range[0]*this.progressBarHeight+"px",g.progressBarSlide.style.height=(d.range[1]-d.range[0])*this.progressBarHeight-l+"px",g.progressBarSlide.classList.toggle("has-triggers",g.scrollTriggers.length>0),this.progressBarInner.appendChild(g.progressBarSlide),g.scrollTriggerElements=g.scrollTriggers.map((c,I)=>{const y=document.createElement("div");return y.className="scrollbar-trigger",y.style.top=(c.range[0]-d.range[0])*this.progressBarHeight+"px",y.style.height=(c.range[1]-c.range[0])*this.progressBarHeight-l+"px",g.progressBarSlide.appendChild(y),I===0&&(y.style.display="none"),y})}):this.pages.forEach(d=>d.progressBarSlide=null)}syncScrollPosition(){const t=this.viewportElement.offsetHeight,e=t/this.viewportElement.scrollHeight,n=this.viewportElement.scrollTop,r=this.viewportElement.scrollHeight-t,l=Math.max(Math.min(n/r,1),0),d=Math.max(Math.min((n+t/2)/this.viewportElement.scrollHeight,1),0);let g;this.slideTriggers.forEach(c=>{const{page:I}=c;l>=c.range[0]-2*e&&l<=c.range[1]+2*e&&!I.loaded?(I.loaded=!0,this.Reveal.slideContent.load(I.slideElement)):I.loaded&&(I.loaded=!1,this.Reveal.slideContent.unload(I.slideElement)),l>=c.range[0]&&l<=c.range[1]?(this.activateTrigger(c),g=c.page):c.active&&this.deactivateTrigger(c)}),g&&g.scrollTriggers.forEach(c=>{d>=c.range[0]&&d<=c.range[1]?this.activateTrigger(c):c.active&&this.deactivateTrigger(c)}),this.setProgressBarValue(n/(this.viewportElement.scrollHeight-t))}setProgressBarValue(t){this.progressBar&&(this.progressBarPlayhead.style.transform=`translateY(${t*this.progressBarScrollableHeight}px)`,this.getAllPages().filter(e=>e.progressBarSlide).forEach(e=>{e.progressBarSlide.classList.toggle("active",e.active===!0),e.scrollTriggers.forEach((n,r)=>{e.scrollTriggerElements[r].classList.toggle("active",e.active===!0&&n.active===!0)})}),this.showProgressBar())}showProgressBar(){this.progressBar.classList.add("visible"),clearTimeout(this.hideProgressBarTimeout),this.Reveal.getConfig().scrollProgress!=="auto"||this.draggingProgressBar||(this.hideProgressBarTimeout=setTimeout(()=>{this.progressBar&&this.progressBar.classList.remove("visible")},500))}prev(){this.viewportElement.scrollTop-=this.scrollTriggerHeight}next(){this.viewportElement.scrollTop+=this.scrollTriggerHeight}scrollToSlide(t){if(this.active){const e=this.getScrollTriggerBySlide(t);e&&(this.viewportElement.scrollTop=e.range[0]*(this.viewportElement.scrollHeight-this.viewportElement.offsetHeight))}else this.activatedCallbacks.push(()=>this.scrollToSlide(t))}storeScrollPosition(){clearTimeout(this.storeScrollPositionTimeout),this.storeScrollPositionTimeout=setTimeout(()=>{sessionStorage.setItem("reveal-scroll-top",this.viewportElement.scrollTop),sessionStorage.setItem("reveal-scroll-origin",location.origin+location.pathname),this.storeScrollPositionTimeout=null},50)}restoreScrollPosition(){const t=sessionStorage.getItem("reveal-scroll-top"),e=sessionStorage.getItem("reveal-scroll-origin");t&&e===location.origin+location.pathname&&(this.viewportElement.scrollTop=parseInt(t,10))}activatePage(t){if(!t.active){t.active=!0;const{slideElement:e,backgroundElement:n,contentElement:r,indexh:l,indexv:d}=t;r.style.display="block",e.classList.add("present"),n&&n.classList.add("present"),this.Reveal.setCurrentScrollPage(e,l,d),this.Reveal.backgrounds.bubbleSlideContrastClassToElement(e,this.viewportElement),Array.from(r.parentNode.querySelectorAll(".scroll-page-content")).forEach(g=>{g!==r&&(g.style.display="none")})}}deactivatePage(t){t.active&&(t.active=!1,t.slideElement&&t.slideElement.classList.remove("present"),t.backgroundElement&&t.backgroundElement.classList.remove("present"))}activateTrigger(t){t.active||(t.active=!0,t.activate())}deactivateTrigger(t){t.active&&(t.active=!1,t.deactivate&&t.deactivate())}getSlideByIndices(t,e){const n=this.getAllPages().find(r=>r.indexh===t&&r.indexv===e);return n?n.slideElement:null}getScrollTriggerBySlide(t){return this.slideTriggers.find(e=>e.page.slideElement===t)}getAllPages(){return this.pages.flatMap(t=>[t,...t.autoAnimatePages||[]])}onScroll(){this.syncScrollPosition(),this.storeScrollPosition()}get viewportElement(){return this.Reveal.getViewportElement()}}class Je{constructor(t){this.Reveal=t}async activate(){const t=this.Reveal.getConfig(),e=$(this.Reveal.getRevealElement(),Pt),n=t.slideNumber&&/all|print/i.test(t.showSlideNumber),r=this.Reveal.getComputedSlideSize(window.innerWidth,window.innerHeight),l=Math.floor(r.width*(1+t.margin)),d=Math.floor(r.height*(1+t.margin)),g=r.width,c=r.height;await new Promise(requestAnimationFrame),se("@page{size:"+l+"px "+d+"px; margin: 0px;}"),se(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: "+g+"px; max-height:"+c+"px}"),document.documentElement.classList.add("reveal-print","print-pdf"),document.body.style.width=l+"px",document.body.style.height=d+"px";const I=this.Reveal.getViewportElement();let y;if(I){const u=window.getComputedStyle(I);u&&u.background&&(y=u.background)}await new Promise(requestAnimationFrame),this.Reveal.layoutSlideContents(g,c),await new Promise(requestAnimationFrame);const x=e.map(u=>u.scrollHeight),L=[],v=e[0].parentNode;let P=1;e.forEach(function(u,ot){if(u.classList.contains("stack")===!1){let Y=(l-g)/2,G=(d-c)/2;const yt=x[ot];let et=Math.max(Math.ceil(yt/d),1);et=Math.min(et,t.pdfMaxPagesPerSlide),(et===1&&t.center||u.classList.contains("center"))&&(G=Math.max((d-yt)/2,0));const O=document.createElement("div");if(L.push(O),O.className="pdf-page",O.style.height=(d+t.pdfPageHeightOffset)*et+"px",y&&(O.style.background=y),O.appendChild(u),u.style.left=Y+"px",u.style.top=G+"px",u.style.width=g+"px",this.Reveal.slideContent.layout(u),u.slideBackgroundElement&&O.insertBefore(u.slideBackgroundElement,u),t.showNotes){const j=this.Reveal.getSlideNotes(u);if(j){const tt=typeof t.showNotes=="string"?t.showNotes:"inline",F=document.createElement("div");F.classList.add("speaker-notes"),F.classList.add("speaker-notes-pdf"),F.setAttribute("data-layout",tt),F.innerHTML=j,tt==="separate-page"?L.push(F):(F.style.left="8px",F.style.bottom="8px",F.style.width=l-2*8+"px",O.appendChild(F))}}if(n){const j=document.createElement("div");j.classList.add("slide-number"),j.classList.add("slide-number-pdf"),j.innerHTML=P++,O.appendChild(j)}if(t.pdfSeparateFragments){const j=this.Reveal.fragments.sort(O.querySelectorAll(".fragment"),!0);let it;j.forEach(function(tt,F){it&&it.forEach(function(D){D.classList.remove("current-fragment")}),tt.forEach(function(D){D.classList.add("visible","current-fragment")},this);const m=O.cloneNode(!0);if(n){const D=F+1;m.querySelector(".slide-number-pdf").innerHTML+="."+D}L.push(m),it=tt},this),j.forEach(function(tt){tt.forEach(function(F){F.classList.remove("visible","current-fragment")})})}else $(O,".fragment:not(.fade-out)").forEach(function(j){j.classList.add("visible")})}},this),await new Promise(requestAnimationFrame),L.forEach(u=>v.appendChild(u)),this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()),this.Reveal.dispatchEvent({type:"pdf-ready"}),I.classList.remove("loading-scroll-mode")}isActive(){return this.Reveal.getConfig().view==="print"}}class Qe{constructor(t){this.Reveal=t}configure(t,e){t.fragments===!1?this.disable():e.fragments===!1&&this.enable()}disable(){$(this.Reveal.getSlidesElement(),".fragment").forEach(t=>{t.classList.add("visible"),t.classList.remove("current-fragment")})}enable(){$(this.Reveal.getSlidesElement(),".fragment").forEach(t=>{t.classList.remove("visible"),t.classList.remove("current-fragment")})}availableRoutes(){let t=this.Reveal.getCurrentSlide();if(t&&this.Reveal.getConfig().fragments){let e=t.querySelectorAll(".fragment:not(.disabled)"),n=t.querySelectorAll(".fragment:not(.disabled):not(.visible)");return{prev:e.length-n.length>0,next:!!n.length}}return{prev:!1,next:!1}}sort(t,e=!1){t=Array.from(t);let n=[],r=[],l=[];t.forEach(g=>{if(g.hasAttribute("data-fragment-index")){let c=parseInt(g.getAttribute("data-fragment-index"),10);n[c]||(n[c]=[]),n[c].push(g)}else r.push([g])}),n=n.concat(r);let d=0;return n.forEach(g=>{g.forEach(c=>{l.push(c),c.setAttribute("data-fragment-index",d)}),d++}),e===!0?n:l}sortAll(){this.Reveal.getHorizontalSlides().forEach(t=>{let e=$(t,"section");e.forEach((n,r)=>{this.sort(n.querySelectorAll(".fragment"))},this),e.length===0&&this.sort(t.querySelectorAll(".fragment"))})}update(t,e,n=this.Reveal.getCurrentSlide()){let r={shown:[],hidden:[]};if(n&&this.Reveal.getConfig().fragments&&(e=e||this.sort(n.querySelectorAll(".fragment"))).length){let l=0;if(typeof t!="number"){let d=this.sort(n.querySelectorAll(".fragment.visible")).pop();d&&(t=parseInt(d.getAttribute("data-fragment-index")||0,10))}Array.from(e).forEach((d,g)=>{if(d.hasAttribute("data-fragment-index")&&(g=parseInt(d.getAttribute("data-fragment-index"),10)),l=Math.max(l,g),g<=t){let c=d.classList.contains("visible");d.classList.add("visible"),d.classList.remove("current-fragment"),g===t&&(this.Reveal.announceStatus(this.Reveal.getStatusText(d)),d.classList.add("current-fragment"),this.Reveal.slideContent.startEmbeddedContent(d)),c||(r.shown.push(d),this.Reveal.dispatchEvent({target:d,type:"visible",bubbles:!1}))}else{let c=d.classList.contains("visible");d.classList.remove("visible"),d.classList.remove("current-fragment"),c&&(this.Reveal.slideContent.stopEmbeddedContent(d),r.hidden.push(d),this.Reveal.dispatchEvent({target:d,type:"hidden",bubbles:!1}))}}),t=typeof t=="number"?t:-1,t=Math.max(Math.min(t,l),-1),n.setAttribute("data-fragment",t)}return r.hidden.length&&this.Reveal.dispatchEvent({type:"fragmenthidden",data:{fragment:r.hidden[0],fragments:r.hidden}}),r.shown.length&&this.Reveal.dispatchEvent({type:"fragmentshown",data:{fragment:r.shown[0],fragments:r.shown}}),r}sync(t=this.Reveal.getCurrentSlide()){return this.sort(t.querySelectorAll(".fragment"))}goto(t,e=0){let n=this.Reveal.getCurrentSlide();if(n&&this.Reveal.getConfig().fragments){let r=this.sort(n.querySelectorAll(".fragment:not(.disabled)"));if(r.length){if(typeof t!="number"){let d=this.sort(n.querySelectorAll(".fragment:not(.disabled).visible")).pop();t=d?parseInt(d.getAttribute("data-fragment-index")||0,10):-1}t+=e;let l=this.update(t,r);return this.Reveal.controls.update(),this.Reveal.progress.update(),this.Reveal.getConfig().fragmentInURL&&this.Reveal.location.writeURL(),!(!l.shown.length&&!l.hidden.length)}}return!1}next(){return this.goto(null,1)}prev(){return this.goto(null,-1)}}class Ge{constructor(t){this.Reveal=t,this.active=!1,this.onSlideClicked=this.onSlideClicked.bind(this)}activate(){if(this.Reveal.getConfig().overview&&!this.Reveal.isScrollView()&&!this.isActive()){this.active=!0,this.Reveal.getRevealElement().classList.add("overview"),this.Reveal.cancelAutoSlide(),this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()),$(this.Reveal.getRevealElement(),Pt).forEach(r=>{r.classList.contains("stack")||r.addEventListener("click",this.onSlideClicked,!0)});const t=70,e=this.Reveal.getComputedSlideSize();this.overviewSlideWidth=e.width+t,this.overviewSlideHeight=e.height+t,this.Reveal.getConfig().rtl&&(this.overviewSlideWidth=-this.overviewSlideWidth),this.Reveal.updateSlidesVisibility(),this.layout(),this.update(),this.Reveal.layout();const n=this.Reveal.getIndices();this.Reveal.dispatchEvent({type:"overviewshown",data:{indexh:n.h,indexv:n.v,currentSlide:this.Reveal.getCurrentSlide()}})}}layout(){this.Reveal.getHorizontalSlides().forEach((t,e)=>{t.setAttribute("data-index-h",e),Ct(t,"translate3d("+e*this.overviewSlideWidth+"px, 0, 0)"),t.classList.contains("stack")&&$(t,"section").forEach((n,r)=>{n.setAttribute("data-index-h",e),n.setAttribute("data-index-v",r),Ct(n,"translate3d(0, "+r*this.overviewSlideHeight+"px, 0)")})}),Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach((t,e)=>{Ct(t,"translate3d("+e*this.overviewSlideWidth+"px, 0, 0)"),$(t,".slide-background").forEach((n,r)=>{Ct(n,"translate3d(0, "+r*this.overviewSlideHeight+"px, 0)")})})}update(){const t=Math.min(window.innerWidth,window.innerHeight),e=Math.max(t/5,150)/t,n=this.Reveal.getIndices();this.Reveal.transformSlides({overview:["scale("+e+")","translateX("+-n.h*this.overviewSlideWidth+"px)","translateY("+-n.v*this.overviewSlideHeight+"px)"].join(" ")})}deactivate(){if(this.Reveal.getConfig().overview){this.active=!1,this.Reveal.getRevealElement().classList.remove("overview"),this.Reveal.getRevealElement().classList.add("overview-deactivating"),setTimeout(()=>{this.Reveal.getRevealElement().classList.remove("overview-deactivating")},1),this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()),$(this.Reveal.getRevealElement(),Pt).forEach(e=>{Ct(e,""),e.removeEventListener("click",this.onSlideClicked,!0)}),$(this.Reveal.getBackgroundsElement(),".slide-background").forEach(e=>{Ct(e,"")}),this.Reveal.transformSlides({overview:""});const t=this.Reveal.getIndices();this.Reveal.slide(t.h,t.v),this.Reveal.layout(),this.Reveal.cueAutoSlide(),this.Reveal.dispatchEvent({type:"overviewhidden",data:{indexh:t.h,indexv:t.v,currentSlide:this.Reveal.getCurrentSlide()}})}}toggle(t){typeof t=="boolean"?t?this.activate():this.deactivate():this.isActive()?this.deactivate():this.activate()}isActive(){return this.active}onSlideClicked(t){if(this.isActive()){t.preventDefault();let e=t.target;for(;e&&!e.nodeName.match(/section/gi);)e=e.parentNode;if(e&&!e.classList.contains("disabled")&&(this.deactivate(),e.nodeName.match(/section/gi))){let n=parseInt(e.getAttribute("data-index-h"),10),r=parseInt(e.getAttribute("data-index-v"),10);this.Reveal.slide(n,r)}}}}class tn{constructor(t){this.Reveal=t,this.shortcuts={},this.bindings={},this.onDocumentKeyDown=this.onDocumentKeyDown.bind(this)}configure(t,e){t.navigationMode==="linear"?(this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"]="Next slide",this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"]="Previous slide"):(this.shortcuts["N  ,  SPACE"]="Next slide",this.shortcuts["P  ,  Shift SPACE"]="Previous slide",this.shortcuts["&#8592;  ,  H"]="Navigate left",this.shortcuts["&#8594;  ,  L"]="Navigate right",this.shortcuts["&#8593;  ,  K"]="Navigate up",this.shortcuts["&#8595;  ,  J"]="Navigate down"),this.shortcuts["Alt + &#8592;/&#8593/&#8594;/&#8595;"]="Navigate without fragments",this.shortcuts["Shift + &#8592;/&#8593/&#8594;/&#8595;"]="Jump to first/last slide",this.shortcuts["B  ,  ."]="Pause",this.shortcuts.F="Fullscreen",this.shortcuts.G="Jump to slide",this.shortcuts["ESC, O"]="Slide overview"}bind(){document.addEventListener("keydown",this.onDocumentKeyDown,!1)}unbind(){document.removeEventListener("keydown",this.onDocumentKeyDown,!1)}addKeyBinding(t,e){typeof t=="object"&&t.keyCode?this.bindings[t.keyCode]={callback:e,key:t.key,description:t.description}:this.bindings[t]={callback:e,key:null,description:null}}removeKeyBinding(t){delete this.bindings[t]}triggerKey(t){this.onDocumentKeyDown({keyCode:t})}registerKeyboardShortcut(t,e){this.shortcuts[t]=e}getShortcuts(){return this.shortcuts}getBindings(){return this.bindings}onDocumentKeyDown(t){let e=this.Reveal.getConfig();if(typeof e.keyboardCondition=="function"&&e.keyboardCondition(t)===!1||e.keyboardCondition==="focused"&&!this.Reveal.isFocused())return!0;let n=t.keyCode,r=!this.Reveal.isAutoSliding();this.Reveal.onUserInput(t);let l=document.activeElement&&document.activeElement.isContentEditable===!0,d=document.activeElement&&document.activeElement.tagName&&/input|textarea/i.test(document.activeElement.tagName),g=document.activeElement&&document.activeElement.className&&/speaker-notes/i.test(document.activeElement.className),c=!([32,37,38,39,40,63,78,80,191].indexOf(t.keyCode)!==-1&&t.shiftKey||t.altKey)&&(t.shiftKey||t.altKey||t.ctrlKey||t.metaKey);if(l||d||g||c)return;let I,y=[66,86,190,191,112];if(typeof e.keyboard=="object")for(I in e.keyboard)e.keyboard[I]==="togglePause"&&y.push(parseInt(I,10));if(this.Reveal.isOverlayOpen()&&!["Escape","f","c","b","."].includes(t.key)||this.Reveal.isPaused()&&y.indexOf(n)===-1)return!1;let x=e.navigationMode==="linear"||!this.Reveal.hasHorizontalSlides()||!this.Reveal.hasVerticalSlides(),L=!1;if(typeof e.keyboard=="object"){for(I in e.keyboard)if(parseInt(I,10)===n){let v=e.keyboard[I];typeof v=="function"?v.apply(null,[t]):typeof v=="string"&&typeof this.Reveal[v]=="function"&&this.Reveal[v].call(),L=!0}}if(L===!1){for(I in this.bindings)if(parseInt(I,10)===n){let v=this.bindings[I].callback;typeof v=="function"?v.apply(null,[t]):typeof v=="string"&&typeof this.Reveal[v]=="function"&&this.Reveal[v].call(),L=!0}}L===!1&&(L=!0,n===80||n===33?this.Reveal.prev({skipFragments:t.altKey}):n===78||n===34?this.Reveal.next({skipFragments:t.altKey}):n===72||n===37?t.shiftKey?this.Reveal.slide(0):!this.Reveal.overview.isActive()&&x?e.rtl?this.Reveal.next({skipFragments:t.altKey}):this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.left({skipFragments:t.altKey}):n===76||n===39?t.shiftKey?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):!this.Reveal.overview.isActive()&&x?e.rtl?this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.next({skipFragments:t.altKey}):this.Reveal.right({skipFragments:t.altKey}):n===75||n===38?t.shiftKey?this.Reveal.slide(void 0,0):!this.Reveal.overview.isActive()&&x?this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.up({skipFragments:t.altKey}):n===74||n===40?t.shiftKey?this.Reveal.slide(void 0,Number.MAX_VALUE):!this.Reveal.overview.isActive()&&x?this.Reveal.next({skipFragments:t.altKey}):this.Reveal.down({skipFragments:t.altKey}):n===36?this.Reveal.slide(0):n===35?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):n===32?(this.Reveal.overview.isActive()&&this.Reveal.overview.deactivate(),t.shiftKey?this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.next({skipFragments:t.altKey})):[58,59,66,86,190].includes(n)||n===191&&!t.shiftKey?this.Reveal.togglePause():n===70?Ne(e.embedded?this.Reveal.getViewportElement():document.documentElement):n===65?e.autoSlideStoppable&&this.Reveal.toggleAutoSlide(r):n===71?e.jumpToSlide&&this.Reveal.toggleJumpToSlide():n===67&&this.Reveal.isOverlayOpen()?this.Reveal.closeOverlay():n!==63&&n!==191||!t.shiftKey?n===112?this.Reveal.toggleHelp():L=!1:this.Reveal.toggleHelp()),L?t.preventDefault&&t.preventDefault():n!==27&&n!==79||(this.Reveal.closeOverlay()===!1&&this.Reveal.overview.toggle(),t.preventDefault&&t.preventDefault()),this.Reveal.cueAutoSlide()}}class en{constructor(t){te(this,"MAX_REPLACE_STATE_FREQUENCY",1e3);this.Reveal=t,this.writeURLTimeout=0,this.replaceStateTimestamp=0,this.onWindowHashChange=this.onWindowHashChange.bind(this)}bind(){window.addEventListener("hashchange",this.onWindowHashChange,!1)}unbind(){window.removeEventListener("hashchange",this.onWindowHashChange,!1)}getIndicesFromHash(t=window.location.hash,e={}){let n=t.replace(/^#\/?/,""),r=n.split("/");if(/^[0-9]*$/.test(r[0])||!n.length){const l=this.Reveal.getConfig();let d,g=l.hashOneBasedIndex||e.oneBasedIndex?1:0,c=parseInt(r[0],10)-g||0,I=parseInt(r[1],10)-g||0;return l.fragmentInURL&&(d=parseInt(r[2],10),isNaN(d)&&(d=void 0)),{h:c,v:I,f:d}}{let l,d;/\/[-\d]+$/g.test(n)&&(d=parseInt(n.split("/").pop(),10),d=isNaN(d)?void 0:d,n=n.split("/").shift());try{l=document.getElementById(decodeURIComponent(n)).closest(".slides section")}catch{}if(l)return{...this.Reveal.getIndices(l),f:d}}return null}readURL(){const t=this.Reveal.getIndices(),e=this.getIndicesFromHash();e?e.h===t.h&&e.v===t.v&&e.f===void 0||this.Reveal.slide(e.h,e.v,e.f):this.Reveal.slide(t.h||0,t.v||0)}writeURL(t){let e=this.Reveal.getConfig(),n=this.Reveal.getCurrentSlide();if(clearTimeout(this.writeURLTimeout),typeof t=="number")this.writeURLTimeout=setTimeout(this.writeURL,t);else if(n){let r=this.getHash();e.history?window.location.hash=r:e.hash&&(r==="/"?this.debouncedReplaceState(window.location.pathname+window.location.search):this.debouncedReplaceState("#"+r))}}replaceState(t){window.history.replaceState(null,null,t),this.replaceStateTimestamp=Date.now()}debouncedReplaceState(t){clearTimeout(this.replaceStateTimeout),Date.now()-this.replaceStateTimestamp>this.MAX_REPLACE_STATE_FREQUENCY?this.replaceState(t):this.replaceStateTimeout=setTimeout(()=>this.replaceState(t),this.MAX_REPLACE_STATE_FREQUENCY)}getHash(t){let e="/",n=t||this.Reveal.getCurrentSlide(),r=n?n.getAttribute("id"):null;r&&(r=encodeURIComponent(r));let l=this.Reveal.getIndices(t);if(this.Reveal.getConfig().fragmentInURL||(l.f=void 0),typeof r=="string"&&r.length)e="/"+r,l.f>=0&&(e+="/"+l.f);else{let d=this.Reveal.getConfig().hashOneBasedIndex?1:0;(l.h>0||l.v>0||l.f>=0)&&(e+=l.h+d),(l.v>0||l.f>=0)&&(e+="/"+(l.v+d)),l.f>=0&&(e+="/"+l.f)}return e}onWindowHashChange(t){this.readURL()}}class nn{constructor(t){this.Reveal=t,this.onNavigateLeftClicked=this.onNavigateLeftClicked.bind(this),this.onNavigateRightClicked=this.onNavigateRightClicked.bind(this),this.onNavigateUpClicked=this.onNavigateUpClicked.bind(this),this.onNavigateDownClicked=this.onNavigateDownClicked.bind(this),this.onNavigatePrevClicked=this.onNavigatePrevClicked.bind(this),this.onNavigateNextClicked=this.onNavigateNextClicked.bind(this),this.onEnterFullscreen=this.onEnterFullscreen.bind(this)}render(){const t=this.Reveal.getConfig().rtl,e=this.Reveal.getRevealElement();this.element=document.createElement("aside"),this.element.className="controls",this.element.innerHTML=`<button class="navigate-left" aria-label="${t?"next slide":"previous slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-right" aria-label="${t?"previous slide":"next slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>
			<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>`,this.Reveal.getRevealElement().appendChild(this.element),this.controlsLeft=$(e,".navigate-left"),this.controlsRight=$(e,".navigate-right"),this.controlsUp=$(e,".navigate-up"),this.controlsDown=$(e,".navigate-down"),this.controlsPrev=$(e,".navigate-prev"),this.controlsNext=$(e,".navigate-next"),this.controlsFullscreen=$(e,".enter-fullscreen"),this.controlsRightArrow=this.element.querySelector(".navigate-right"),this.controlsLeftArrow=this.element.querySelector(".navigate-left"),this.controlsDownArrow=this.element.querySelector(".navigate-down")}configure(t,e){this.element.style.display=t.controls&&(t.controls!=="speaker-only"||this.Reveal.isSpeakerNotes())?"block":"none",this.element.setAttribute("data-controls-layout",t.controlsLayout),this.element.setAttribute("data-controls-back-arrows",t.controlsBackArrows)}bind(){let t=["touchstart","click"];ze&&(t=["touchstart"]),t.forEach(e=>{this.controlsLeft.forEach(n=>n.addEventListener(e,this.onNavigateLeftClicked,!1)),this.controlsRight.forEach(n=>n.addEventListener(e,this.onNavigateRightClicked,!1)),this.controlsUp.forEach(n=>n.addEventListener(e,this.onNavigateUpClicked,!1)),this.controlsDown.forEach(n=>n.addEventListener(e,this.onNavigateDownClicked,!1)),this.controlsPrev.forEach(n=>n.addEventListener(e,this.onNavigatePrevClicked,!1)),this.controlsNext.forEach(n=>n.addEventListener(e,this.onNavigateNextClicked,!1)),this.controlsFullscreen.forEach(n=>n.addEventListener(e,this.onEnterFullscreen,!1))})}unbind(){["touchstart","click"].forEach(t=>{this.controlsLeft.forEach(e=>e.removeEventListener(t,this.onNavigateLeftClicked,!1)),this.controlsRight.forEach(e=>e.removeEventListener(t,this.onNavigateRightClicked,!1)),this.controlsUp.forEach(e=>e.removeEventListener(t,this.onNavigateUpClicked,!1)),this.controlsDown.forEach(e=>e.removeEventListener(t,this.onNavigateDownClicked,!1)),this.controlsPrev.forEach(e=>e.removeEventListener(t,this.onNavigatePrevClicked,!1)),this.controlsNext.forEach(e=>e.removeEventListener(t,this.onNavigateNextClicked,!1)),this.controlsFullscreen.forEach(e=>e.removeEventListener(t,this.onEnterFullscreen,!1))})}update(){let t=this.Reveal.availableRoutes();[...this.controlsLeft,...this.controlsRight,...this.controlsUp,...this.controlsDown,...this.controlsPrev,...this.controlsNext].forEach(n=>{n.classList.remove("enabled","fragmented"),n.setAttribute("disabled","disabled")}),t.left&&this.controlsLeft.forEach(n=>{n.classList.add("enabled"),n.removeAttribute("disabled")}),t.right&&this.controlsRight.forEach(n=>{n.classList.add("enabled"),n.removeAttribute("disabled")}),t.up&&this.controlsUp.forEach(n=>{n.classList.add("enabled"),n.removeAttribute("disabled")}),t.down&&this.controlsDown.forEach(n=>{n.classList.add("enabled"),n.removeAttribute("disabled")}),(t.left||t.up)&&this.controlsPrev.forEach(n=>{n.classList.add("enabled"),n.removeAttribute("disabled")}),(t.right||t.down)&&this.controlsNext.forEach(n=>{n.classList.add("enabled"),n.removeAttribute("disabled")});let e=this.Reveal.getCurrentSlide();if(e){let n=this.Reveal.fragments.availableRoutes();n.prev&&this.controlsPrev.forEach(d=>{d.classList.add("fragmented","enabled"),d.removeAttribute("disabled")}),n.next&&this.controlsNext.forEach(d=>{d.classList.add("fragmented","enabled"),d.removeAttribute("disabled")});const r=this.Reveal.isVerticalSlide(e),l=r&&e.parentElement&&e.parentElement.querySelectorAll(":scope > section").length>1;r&&l?(n.prev&&this.controlsUp.forEach(d=>{d.classList.add("fragmented","enabled"),d.removeAttribute("disabled")}),n.next&&this.controlsDown.forEach(d=>{d.classList.add("fragmented","enabled"),d.removeAttribute("disabled")})):(n.prev&&this.controlsLeft.forEach(d=>{d.classList.add("fragmented","enabled"),d.removeAttribute("disabled")}),n.next&&this.controlsRight.forEach(d=>{d.classList.add("fragmented","enabled"),d.removeAttribute("disabled")}))}if(this.Reveal.getConfig().controlsTutorial){let n=this.Reveal.getIndices();!this.Reveal.hasNavigatedVertically()&&t.down?this.controlsDownArrow.classList.add("highlight"):(this.controlsDownArrow.classList.remove("highlight"),this.Reveal.getConfig().rtl?!this.Reveal.hasNavigatedHorizontally()&&t.left&&n.v===0?this.controlsLeftArrow.classList.add("highlight"):this.controlsLeftArrow.classList.remove("highlight"):!this.Reveal.hasNavigatedHorizontally()&&t.right&&n.v===0?this.controlsRightArrow.classList.add("highlight"):this.controlsRightArrow.classList.remove("highlight"))}}destroy(){this.unbind(),this.element.remove()}onNavigateLeftClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.prev():this.Reveal.left()}onNavigateRightClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.next():this.Reveal.right()}onNavigateUpClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.up()}onNavigateDownClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.down()}onNavigatePrevClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.prev()}onNavigateNextClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.next()}onEnterFullscreen(t){const e=this.Reveal.getConfig(),n=this.Reveal.getViewportElement();Ne(e.embedded?n:n.parentElement)}}class sn{constructor(t){this.Reveal=t,this.onProgressClicked=this.onProgressClicked.bind(this)}render(){this.element=document.createElement("div"),this.element.className="progress",this.Reveal.getRevealElement().appendChild(this.element),this.bar=document.createElement("span"),this.element.appendChild(this.bar)}configure(t,e){this.element.style.display=t.progress?"block":"none"}bind(){this.Reveal.getConfig().progress&&this.element&&this.element.addEventListener("click",this.onProgressClicked,!1)}unbind(){this.Reveal.getConfig().progress&&this.element&&this.element.removeEventListener("click",this.onProgressClicked,!1)}update(){if(this.Reveal.getConfig().progress&&this.bar){let t=this.Reveal.getProgress();this.Reveal.getTotalSlides()<2&&(t=0),this.bar.style.transform="scaleX("+t+")"}}getMaxWidth(){return this.Reveal.getRevealElement().offsetWidth}onProgressClicked(t){this.Reveal.onUserInput(t),t.preventDefault();let e=this.Reveal.getSlides(),n=e.length,r=Math.floor(t.clientX/this.getMaxWidth()*n);this.Reveal.getConfig().rtl&&(r=n-r);let l=this.Reveal.getIndices(e[r]);this.Reveal.slide(l.h,l.v)}destroy(){this.element.remove()}}class an{constructor(t){this.Reveal=t,this.lastMouseWheelStep=0,this.cursorHidden=!1,this.cursorInactiveTimeout=0,this.onDocumentCursorActive=this.onDocumentCursorActive.bind(this),this.onDocumentMouseScroll=this.onDocumentMouseScroll.bind(this)}configure(t,e){t.mouseWheel?document.addEventListener("wheel",this.onDocumentMouseScroll,!1):document.removeEventListener("wheel",this.onDocumentMouseScroll,!1),t.hideInactiveCursor?(document.addEventListener("mousemove",this.onDocumentCursorActive,!1),document.addEventListener("mousedown",this.onDocumentCursorActive,!1)):(this.showCursor(),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1))}showCursor(){this.cursorHidden&&(this.cursorHidden=!1,this.Reveal.getRevealElement().style.cursor="")}hideCursor(){this.cursorHidden===!1&&(this.cursorHidden=!0,this.Reveal.getRevealElement().style.cursor="none")}destroy(){this.showCursor(),document.removeEventListener("wheel",this.onDocumentMouseScroll,!1),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1)}onDocumentCursorActive(t){this.showCursor(),clearTimeout(this.cursorInactiveTimeout),this.cursorInactiveTimeout=setTimeout(this.hideCursor.bind(this),this.Reveal.getConfig().hideCursorTime)}onDocumentMouseScroll(t){if(Date.now()-this.lastMouseWheelStep>1e3){this.lastMouseWheelStep=Date.now();let e=t.detail||-t.wheelDelta;e>0?this.Reveal.next():e<0&&this.Reveal.prev()}}}const Le=(f,t)=>{const e=document.createElement("script");e.type="text/javascript",e.async=!1,e.defer=!1,e.src=f,typeof t=="function"&&(e.onload=e.onreadystatechange=r=>{(r.type==="load"||/loaded|complete/.test(e.readyState))&&(e.onload=e.onreadystatechange=e.onerror=null,t())},e.onerror=r=>{e.onload=e.onreadystatechange=e.onerror=null,t(new Error("Failed loading script: "+e.src+`
`+r))});const n=document.querySelector("head");n.insertBefore(e,n.lastChild)};class rn{constructor(t){this.Reveal=t,this.state="idle",this.registeredPlugins={},this.asyncDependencies=[]}load(t,e){return this.state="loading",t.forEach(this.registerPlugin.bind(this)),new Promise(n=>{let r=[],l=0;if(e.forEach(d=>{d.condition&&!d.condition()||(d.async?this.asyncDependencies.push(d):r.push(d))}),r.length){l=r.length;const d=g=>{g&&typeof g.callback=="function"&&g.callback(),--l==0&&this.initPlugins().then(n)};r.forEach(g=>{typeof g.id=="string"?(this.registerPlugin(g),d(g)):typeof g.src=="string"?Le(g.src,()=>d(g)):(console.warn("Unrecognized plugin format",g),d())})}else this.initPlugins().then(n)})}initPlugins(){return new Promise(t=>{let e=Object.values(this.registeredPlugins),n=e.length;if(n===0)this.loadAsync().then(t);else{let r,l=()=>{--n==0?this.loadAsync().then(t):r()},d=0;r=()=>{let g=e[d++];if(typeof g.init=="function"){let c=g.init(this.Reveal);c&&typeof c.then=="function"?c.then(l):l()}else l()},r()}})}loadAsync(){return this.state="loaded",this.asyncDependencies.length&&this.asyncDependencies.forEach(t=>{Le(t.src,t.callback)}),Promise.resolve()}registerPlugin(t){arguments.length===2&&typeof arguments[0]=="string"?(t=arguments[1]).id=arguments[0]:typeof t=="function"&&(t=t());let e=t.id;typeof e!="string"?console.warn("Unrecognized plugin format; can't find plugin.id",t):this.registeredPlugins[e]===void 0?(this.registeredPlugins[e]=t,this.state==="loaded"&&typeof t.init=="function"&&t.init(this.Reveal)):console.warn('reveal.js: "'+e+'" plugin has already been registered')}hasPlugin(t){return!!this.registeredPlugins[t]}getPlugin(t){return this.registeredPlugins[t]}getRegisteredPlugins(){return this.registeredPlugins}destroy(){Object.values(this.registeredPlugins).forEach(t=>{typeof t.destroy=="function"&&t.destroy()}),this.registeredPlugins={},this.asyncDependencies=[]}}class on{constructor(t){this.Reveal=t,this.onSlidesClicked=this.onSlidesClicked.bind(this),this.iframeTriggerSelector=null,this.mediaTriggerSelector="[data-preview-image], [data-preview-video]",this.stateProps=["previewIframe","previewImage","previewVideo","previewFit"],this.state={}}update(){this.Reveal.getConfig().previewLinks?this.iframeTriggerSelector="a[href]:not([data-preview-link=false]), [data-preview-link]:not(a):not([data-preview-link=false])":this.iframeTriggerSelector="[data-preview-link]:not([data-preview-link=false])";const t=this.Reveal.getSlidesElement().querySelectorAll(this.iframeTriggerSelector).length>0,e=this.Reveal.getSlidesElement().querySelectorAll(this.mediaTriggerSelector).length>0;t||e?this.Reveal.getSlidesElement().addEventListener("click",this.onSlidesClicked,!1):this.Reveal.getSlidesElement().removeEventListener("click",this.onSlidesClicked,!1)}createOverlay(t){this.dom=document.createElement("div"),this.dom.classList.add("r-overlay"),this.dom.classList.add(t),this.viewport=document.createElement("div"),this.viewport.classList.add("r-overlay-viewport"),this.dom.appendChild(this.viewport),this.Reveal.getRevealElement().appendChild(this.dom)}previewIframe(t){this.close(),this.state={previewIframe:t},this.createOverlay("r-overlay-preview"),this.dom.dataset.state="loading",this.viewport.innerHTML=`<header class="r-overlay-header">
				<a class="r-overlay-button r-overlay-external" href="${t}" target="_blank"><span class="icon"></span></a>
				<button class="r-overlay-button r-overlay-close"><span class="icon"></span></button>
			</header>
			<div class="r-overlay-spinner"></div>
			<div class="r-overlay-content">
				<iframe src="${t}"></iframe>
				<small class="r-overlay-content-inner">
					<span class="r-overlay-error x-frame-error">Unable to load iframe. This is likely due to the site's policy (x-frame-options).</span>
				</small>
			</div>`,this.dom.querySelector("iframe").addEventListener("load",e=>{this.dom.dataset.state="loaded"},!1),this.dom.querySelector(".r-overlay-close").addEventListener("click",e=>{this.close(),e.preventDefault()},!1),this.dom.querySelector(".r-overlay-external").addEventListener("click",e=>{this.close()},!1),this.Reveal.dispatchEvent({type:"previewiframe",data:{url:t}})}previewMedia(t,e,n){if(e!=="image"&&e!=="video")return void console.warn("Please specify a valid media type to preview (image|video)");this.close(),n=n||"scale-down",this.createOverlay("r-overlay-preview"),this.dom.dataset.state="loading",this.dom.dataset.previewFit=n,this.viewport.innerHTML=`<header class="r-overlay-header">
				<button class="r-overlay-button r-overlay-close">Esc <span class="icon"></span></button>
			</header>
			<div class="r-overlay-spinner"></div>
			<div class="r-overlay-content"></div>`;const r=this.dom.querySelector(".r-overlay-content");if(e==="image"){this.state={previewImage:t,previewFit:n};const l=document.createElement("img",{});l.src=t,r.appendChild(l),l.addEventListener("load",()=>{this.dom.dataset.state="loaded"},!1),l.addEventListener("error",()=>{this.dom.dataset.state="error",r.innerHTML='<span class="r-overlay-error">Unable to load image.</span>'},!1),this.dom.style.cursor="zoom-out",this.dom.addEventListener("click",d=>{this.close()},!1),this.Reveal.dispatchEvent({type:"previewimage",data:{url:t}})}else{if(e!=="video")throw new Error("Please specify a valid media type to preview");{this.state={previewVideo:t,previewFit:n};const l=document.createElement("video");l.autoplay=this.dom.dataset.previewAutoplay!=="false",l.controls=this.dom.dataset.previewControls!=="false",l.loop=this.dom.dataset.previewLoop==="true",l.muted=this.dom.dataset.previewMuted==="true",l.playsInline=!0,l.src=t,r.appendChild(l),l.addEventListener("loadeddata",()=>{this.dom.dataset.state="loaded"},!1),l.addEventListener("error",()=>{this.dom.dataset.state="error",r.innerHTML='<span class="r-overlay-error">Unable to load video.</span>'},!1),this.Reveal.dispatchEvent({type:"previewvideo",data:{url:t}})}}this.dom.querySelector(".r-overlay-close").addEventListener("click",l=>{this.close(),l.preventDefault()},!1)}previewImage(t,e){this.previewMedia(t,"image",e)}previewVideo(t,e){this.previewMedia(t,"video",e)}toggleHelp(t){typeof t=="boolean"?t?this.showHelp():this.close():this.dom?this.close():this.showHelp()}showHelp(){if(this.Reveal.getConfig().help){this.close(),this.createOverlay("r-overlay-help");let t='<p class="title">Keyboard Shortcuts</p>',e=this.Reveal.keyboard.getShortcuts(),n=this.Reveal.keyboard.getBindings();t+="<table><th>KEY</th><th>ACTION</th>";for(let r in e)t+=`<tr><td>${r}</td><td>${e[r]}</td></tr>`;for(let r in n)n[r].key&&n[r].description&&(t+=`<tr><td>${n[r].key}</td><td>${n[r].description}</td></tr>`);t+="</table>",this.viewport.innerHTML=`
				<header class="r-overlay-header">
					<button class="r-overlay-button r-overlay-close">Esc <span class="icon"></span></button>
				</header>
				<div class="r-overlay-content">
					<div class="r-overlay-help-content">${t}</div>
				</div>
			`,this.dom.querySelector(".r-overlay-close").addEventListener("click",r=>{this.close(),r.preventDefault()},!1),this.Reveal.dispatchEvent({type:"showhelp"})}}isOpen(){return!!this.dom}close(){return!!this.dom&&(this.dom.remove(),this.dom=null,this.state={},this.Reveal.dispatchEvent({type:"closeoverlay"}),!0)}getState(){return this.state}setState(t){this.stateProps.every(e=>this.state[e]===t[e])||(t.previewIframe?this.previewIframe(t.previewIframe):t.previewImage?this.previewImage(t.previewImage,t.previewFit):t.previewVideo?this.previewVideo(t.previewVideo,t.previewFit):this.close())}onSlidesClicked(t){const e=t.target,n=e.closest(this.iframeTriggerSelector),r=e.closest(this.mediaTriggerSelector);if(n){if(t.metaKey||t.shiftKey||t.altKey)return;let l=n.getAttribute("href")||n.getAttribute("data-preview-link");l&&(this.previewIframe(l),t.preventDefault())}else if(r){if(r.hasAttribute("data-preview-image")){let l=r.dataset.previewImage||r.getAttribute("src");l&&(this.previewImage(l,r.dataset.previewFit),t.preventDefault())}else if(r.hasAttribute("data-preview-video")){let l=r.dataset.previewVideo||r.getAttribute("src");if(!l){let d=r.querySelector("source");d&&(l=d.getAttribute("src"))}l&&(this.previewVideo(l,r.dataset.previewFit),t.preventDefault())}}}destroy(){this.close()}}class ln{constructor(t){this.Reveal=t,this.touchStartX=0,this.touchStartY=0,this.touchStartCount=0,this.touchCaptured=!1,this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this)}bind(){let t=this.Reveal.getRevealElement();"onpointerdown"in window?(t.addEventListener("pointerdown",this.onPointerDown,!1),t.addEventListener("pointermove",this.onPointerMove,!1),t.addEventListener("pointerup",this.onPointerUp,!1)):window.navigator.msPointerEnabled?(t.addEventListener("MSPointerDown",this.onPointerDown,!1),t.addEventListener("MSPointerMove",this.onPointerMove,!1),t.addEventListener("MSPointerUp",this.onPointerUp,!1)):(t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1))}unbind(){let t=this.Reveal.getRevealElement();t.removeEventListener("pointerdown",this.onPointerDown,!1),t.removeEventListener("pointermove",this.onPointerMove,!1),t.removeEventListener("pointerup",this.onPointerUp,!1),t.removeEventListener("MSPointerDown",this.onPointerDown,!1),t.removeEventListener("MSPointerMove",this.onPointerMove,!1),t.removeEventListener("MSPointerUp",this.onPointerUp,!1),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1)}isSwipePrevented(t){if(jt(t,"video[controls], audio[controls]"))return!0;for(;t&&typeof t.hasAttribute=="function";){if(t.hasAttribute("data-prevent-swipe"))return!0;t=t.parentNode}return!1}onTouchStart(t){if(this.touchCaptured=!1,this.isSwipePrevented(t.target))return!0;this.touchStartX=t.touches[0].clientX,this.touchStartY=t.touches[0].clientY,this.touchStartCount=t.touches.length}onTouchMove(t){if(this.isSwipePrevented(t.target))return!0;let e=this.Reveal.getConfig();if(this.touchCaptured)ze&&t.preventDefault();else{this.Reveal.onUserInput(t);let n=t.touches[0].clientX,r=t.touches[0].clientY;if(t.touches.length===1&&this.touchStartCount!==2){let l=this.Reveal.availableRoutes({includeFragments:!0}),d=n-this.touchStartX,g=r-this.touchStartY;d>40&&Math.abs(d)>Math.abs(g)?(this.touchCaptured=!0,e.navigationMode==="linear"?e.rtl?this.Reveal.next():this.Reveal.prev():this.Reveal.left()):d<-40&&Math.abs(d)>Math.abs(g)?(this.touchCaptured=!0,e.navigationMode==="linear"?e.rtl?this.Reveal.prev():this.Reveal.next():this.Reveal.right()):g>40&&l.up?(this.touchCaptured=!0,e.navigationMode==="linear"?this.Reveal.prev():this.Reveal.up()):g<-40&&l.down&&(this.touchCaptured=!0,e.navigationMode==="linear"?this.Reveal.next():this.Reveal.down()),e.embedded?(this.touchCaptured||this.Reveal.isVerticalSlide())&&t.preventDefault():t.preventDefault()}}}onTouchEnd(t){this.touchCaptured=!1}onPointerDown(t){t.pointerType!==t.MSPOINTER_TYPE_TOUCH&&t.pointerType!=="touch"||(t.touches=[{clientX:t.clientX,clientY:t.clientY}],this.onTouchStart(t))}onPointerMove(t){t.pointerType!==t.MSPOINTER_TYPE_TOUCH&&t.pointerType!=="touch"||(t.touches=[{clientX:t.clientX,clientY:t.clientY}],this.onTouchMove(t))}onPointerUp(t){t.pointerType!==t.MSPOINTER_TYPE_TOUCH&&t.pointerType!=="touch"||(t.touches=[{clientX:t.clientX,clientY:t.clientY}],this.onTouchEnd(t))}}const ie="focus",Ce="blur";class dn{constructor(t){this.Reveal=t,this.onRevealPointerDown=this.onRevealPointerDown.bind(this),this.onDocumentPointerDown=this.onDocumentPointerDown.bind(this)}configure(t,e){t.embedded?this.blur():(this.focus(),this.unbind())}bind(){this.Reveal.getConfig().embedded&&this.Reveal.getRevealElement().addEventListener("pointerdown",this.onRevealPointerDown,!1)}unbind(){this.Reveal.getRevealElement().removeEventListener("pointerdown",this.onRevealPointerDown,!1),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)}focus(){this.state!==ie&&(this.Reveal.getRevealElement().classList.add("focused"),document.addEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state=ie}blur(){this.state!==Ce&&(this.Reveal.getRevealElement().classList.remove("focused"),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state=Ce}isFocused(){return this.state===ie}destroy(){this.Reveal.getRevealElement().classList.remove("focused")}onRevealPointerDown(t){this.focus()}onDocumentPointerDown(t){let e=rt(t.target,".reveal");e&&e===this.Reveal.getRevealElement()||this.blur()}}class cn{constructor(t){this.Reveal=t}render(){this.element=document.createElement("div"),this.element.className="speaker-notes",this.element.setAttribute("data-prevent-swipe",""),this.element.setAttribute("tabindex","0"),this.Reveal.getRevealElement().appendChild(this.element)}configure(t,e){t.showNotes&&this.element.setAttribute("data-layout",typeof t.showNotes=="string"?t.showNotes:"inline")}update(){this.Reveal.getConfig().showNotes&&this.element&&this.Reveal.getCurrentSlide()&&!this.Reveal.isScrollView()&&!this.Reveal.isPrintView()&&(this.element.innerHTML=this.getSlideNotes()||'<span class="notes-placeholder">No notes on this slide.</span>')}updateVisibility(){this.Reveal.getConfig().showNotes&&this.hasNotes()&&!this.Reveal.isScrollView()&&!this.Reveal.isPrintView()?this.Reveal.getRevealElement().classList.add("show-notes"):this.Reveal.getRevealElement().classList.remove("show-notes")}hasNotes(){return this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length>0}isSpeakerNotesWindow(){return!!window.location.search.match(/receiver/gi)}getSlideNotes(t=this.Reveal.getCurrentSlide()){if(t.hasAttribute("data-notes"))return t.getAttribute("data-notes");let e=t.querySelectorAll("aside.notes");return e?Array.from(e).map(n=>n.innerHTML).join(`
`):null}destroy(){this.element.remove()}}class hn{constructor(t,e){this.diameter=100,this.diameter2=this.diameter/2,this.thickness=6,this.playing=!1,this.progress=0,this.progressOffset=1,this.container=t,this.progressCheck=e,this.canvas=document.createElement("canvas"),this.canvas.className="playback",this.canvas.width=this.diameter,this.canvas.height=this.diameter,this.canvas.style.width=this.diameter2+"px",this.canvas.style.height=this.diameter2+"px",this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas),this.render()}setPlaying(t){const e=this.playing;this.playing=t,!e&&this.playing?this.animate():this.render()}animate(){const t=this.progress;this.progress=this.progressCheck(),t>.8&&this.progress<.2&&(this.progressOffset=this.progress),this.render(),this.playing&&requestAnimationFrame(this.animate.bind(this))}render(){let t=this.playing?this.progress:0,e=this.diameter2-this.thickness,n=this.diameter2,r=this.diameter2,l=28;this.progressOffset+=.1*(1-this.progressOffset);const d=-Math.PI/2+t*(2*Math.PI),g=-Math.PI/2+this.progressOffset*(2*Math.PI);this.context.save(),this.context.clearRect(0,0,this.diameter,this.diameter),this.context.beginPath(),this.context.arc(n,r,e+4,0,2*Math.PI,!1),this.context.fillStyle="rgba( 0, 0, 0, 0.4 )",this.context.fill(),this.context.beginPath(),this.context.arc(n,r,e,0,2*Math.PI,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="rgba( 255, 255, 255, 0.2 )",this.context.stroke(),this.playing&&(this.context.beginPath(),this.context.arc(n,r,e,g,d,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="#fff",this.context.stroke()),this.context.translate(n-14,r-14),this.playing?(this.context.fillStyle="#fff",this.context.fillRect(0,0,10,l),this.context.fillRect(18,0,10,l)):(this.context.beginPath(),this.context.translate(4,0),this.context.moveTo(0,0),this.context.lineTo(24,14),this.context.lineTo(0,l),this.context.fillStyle="#fff",this.context.fill()),this.context.restore()}on(t,e){this.canvas.addEventListener(t,e,!1)}off(t,e){this.canvas.removeEventListener(t,e,!1)}destroy(){this.playing=!1,this.canvas.parentNode&&this.container.removeChild(this.canvas)}}var un={width:960,height:700,margin:.04,minScale:.2,maxScale:2,controls:!0,controlsTutorial:!0,controlsLayout:"bottom-right",controlsBackArrows:"faded",progress:!0,slideNumber:!1,showSlideNumber:"all",hashOneBasedIndex:!1,hash:!1,respondToHashChanges:!0,jumpToSlide:!0,history:!1,keyboard:!0,keyboardCondition:null,disableLayout:!1,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,navigationMode:"default",shuffle:!1,fragments:!0,fragmentInURL:!0,embedded:!1,help:!0,pause:!0,showNotes:!1,showHiddenSlides:!1,autoPlayMedia:null,preloadIframes:null,autoAnimate:!0,autoAnimateMatcher:null,autoAnimateEasing:"ease",autoAnimateDuration:1,autoAnimateUnmatched:!0,autoAnimateStyles:["opacity","color","background-color","padding","font-size","line-height","letter-spacing","border-width","border-color","border-radius","outline","outline-offset"],autoSlide:0,autoSlideStoppable:!0,autoSlideMethod:null,defaultTiming:null,mouseWheel:!1,previewLinks:!1,postMessage:!0,postMessageEvents:!1,focusBodyOnPageVisibilityChange:!0,transition:"slide",transitionSpeed:"default",backgroundTransition:"fade",parallaxBackgroundImage:"",parallaxBackgroundSize:"",parallaxBackgroundRepeat:"",parallaxBackgroundPosition:"",parallaxBackgroundHorizontal:null,parallaxBackgroundVertical:null,view:null,scrollLayout:"full",scrollSnap:"mandatory",scrollProgress:"auto",scrollActivationWidth:435,pdfMaxPagesPerSlide:Number.POSITIVE_INFINITY,pdfSeparateFragments:!0,pdfPageHeightOffset:-1,viewDistance:3,mobileViewDistance:2,display:"block",hideInactiveCursor:!0,hideCursorTime:5e3,sortFragmentsOnSync:!0,dependencies:[],plugins:[]};const Be="5.2.1";function He(f,t){arguments.length<2&&(t=arguments[0],f=document.querySelector(".reveal"));const e={};let n,r,l,d,g,c={},I=!1,y=!1,x={hasNavigatedHorizontally:!1,hasNavigatedVertically:!1},L=[],v=1,P={layout:"",overview:""},u={},ot="idle",Y=0,G=0,yt=-1,et=!1,O=new Ve(e),j=new je(e),it=new Ke(e),tt=new Ye(e),F=new Xe(e),m=new Ze(e),D=new Je(e),R=new Qe(e),A=new Ge(e),st=new tn(e),nt=new en(e),K=new nn(e),ht=new sn(e),Ht=new an(e),ut=new rn(e),V=new on(e),gt=new dn(e),It=new ln(e),H=new cn(e);function _(){I!==!1&&(y=!0,c.showHiddenSlides||$(u.wrapper,'section[data-visibility="hidden"]').forEach(h=>{const p=h.parentNode;p.childElementCount===1&&/section/i.test(p.nodeName)?p.remove():h.remove()}),function(){u.slides.classList.add("no-transition"),Bt?u.wrapper.classList.add("no-hover"):u.wrapper.classList.remove("no-hover"),F.render(),j.render(),it.render(),K.render(),ht.render(),H.render(),u.pauseOverlay=((h,p,E,T="")=>{let N=h.querySelectorAll("."+E);for(let W=0;W<N.length;W++){let Z=N[W];if(Z.parentNode===h)return Z}let U=document.createElement(p);return U.className=E,U.innerHTML=T,h.appendChild(U),U})(u.wrapper,"div","pause-overlay",c.controls?'<button class="resume-button">Resume presentation</button>':null),u.statusElement=function(){let h=u.wrapper.querySelector(".aria-status");return h||(h=document.createElement("div"),h.style.position="absolute",h.style.height="1px",h.style.width="1px",h.style.overflow="hidden",h.style.clip="rect( 1px, 1px, 1px, 1px )",h.classList.add("aria-status"),h.setAttribute("aria-live","polite"),h.setAttribute("aria-atomic","true"),u.wrapper.appendChild(h)),h}(),u.wrapper.setAttribute("role","application")}(),c.postMessage&&window.addEventListener("message",ye,!1),setInterval(()=>{(!m.isActive()&&u.wrapper.scrollTop!==0||u.wrapper.scrollLeft!==0)&&(u.wrapper.scrollTop=0,u.wrapper.scrollLeft=0)},1e3),document.addEventListener("fullscreenchange",Ft),document.addEventListener("webkitfullscreenchange",Ft),At().forEach(h=>{$(h,"section").forEach((p,E)=>{E>0&&(p.classList.remove("present"),p.classList.remove("past"),p.classList.add("future"),p.setAttribute("aria-hidden","true"))})}),s(),F.update(!0),function(){const h=c.view==="print",p=c.view==="scroll"||c.view==="reader";(h||p)&&(h?k():It.unbind(),u.viewport.classList.add("loading-scroll-mode"),h?document.readyState==="complete"?D.activate():window.addEventListener("load",()=>D.activate()):m.activate())}(),nt.readURL(),setTimeout(()=>{u.slides.classList.remove("no-transition"),u.wrapper.classList.add("ready"),C({type:"ready",data:{indexh:n,indexv:r,currentSlide:d}})},1))}function a(h){u.statusElement.textContent=h}function i(h){let p="";if(h.nodeType===3)p+=h.textContent;else if(h.nodeType===1){let E=h.getAttribute("aria-hidden"),T=window.getComputedStyle(h).display==="none";E==="true"||T||Array.from(h.childNodes).forEach(N=>{p+=i(N)})}return p=p.trim(),p===""?"":p+" "}function s(h){const p={...c};if(typeof h=="object"&&zt(c,h),e.isReady()===!1)return;const E=u.wrapper.querySelectorAll(Pt).length;u.wrapper.classList.remove(p.transition),u.wrapper.classList.add(c.transition),u.wrapper.setAttribute("data-transition-speed",c.transitionSpeed),u.wrapper.setAttribute("data-background-transition",c.backgroundTransition),u.viewport.style.setProperty("--slide-width",typeof c.width=="string"?c.width:c.width+"px"),u.viewport.style.setProperty("--slide-height",typeof c.height=="string"?c.height:c.height+"px"),c.shuffle&&Xt(),ee(u.wrapper,"embedded",c.embedded),ee(u.wrapper,"rtl",c.rtl),ee(u.wrapper,"center",c.center),c.pause===!1&&J(),tt.reset(),g&&(g.destroy(),g=null),E>1&&c.autoSlide&&c.autoSlideStoppable&&(g=new hn(u.wrapper,()=>Math.min(Math.max((Date.now()-yt)/Y,0),1)),g.on("click",$e),et=!1),c.navigationMode!=="default"?u.wrapper.setAttribute("data-navigation-mode",c.navigationMode):u.wrapper.removeAttribute("data-navigation-mode"),H.configure(c,p),gt.configure(c,p),Ht.configure(c,p),K.configure(c,p),ht.configure(c,p),st.configure(c,p),R.configure(c,p),j.configure(c,p),ae()}function o(){window.addEventListener("resize",ke,!1),c.touch&&It.bind(),c.keyboard&&st.bind(),c.progress&&ht.bind(),c.respondToHashChanges&&nt.bind(),K.bind(),gt.bind(),u.slides.addEventListener("click",we,!1),u.slides.addEventListener("transitionend",be,!1),u.pauseOverlay.addEventListener("click",J,!1),c.focusBodyOnPageVisibilityChange&&document.addEventListener("visibilitychange",Se,!1)}function k(){It.unbind(),gt.unbind(),st.unbind(),K.unbind(),ht.unbind(),nt.unbind(),window.removeEventListener("resize",ke,!1),u.slides.removeEventListener("click",we,!1),u.slides.removeEventListener("transitionend",be,!1),u.pauseOverlay.removeEventListener("click",J,!1)}function w(h,p,E){f.addEventListener(h,p,E)}function b(h,p,E){f.removeEventListener(h,p,E)}function S(h){typeof h.layout=="string"&&(P.layout=h.layout),typeof h.overview=="string"&&(P.overview=h.overview),P.layout?Ct(u.slides,P.layout+" "+P.overview):Ct(u.slides,P.overview)}function C({target:h=u.wrapper,type:p,data:E,bubbles:T=!0}){let N=document.createEvent("HTMLEvents",1,2);return N.initEvent(p,T,!0),zt(N,E),h.dispatchEvent(N),h===u.wrapper&&M(p),N}function B(h){C({type:"slidechanged",data:{indexh:n,indexv:r,previousSlide:l,currentSlide:d,origin:h}})}function M(h,p){if(c.postMessageEvents&&window.parent!==window.self){let E={namespace:"reveal",eventName:h,state:fe()};zt(E,p),window.parent.postMessage(JSON.stringify(E),"*")}}function z(){if(u.wrapper&&!D.isActive()){const h=u.viewport.offsetWidth,p=u.viewport.offsetHeight;if(!c.disableLayout){Bt&&!c.embedded&&document.documentElement.style.setProperty("--vh",.01*window.innerHeight+"px");const E=m.isActive()?ct(h,p):ct(),T=v;X(c.width,c.height),u.slides.style.width=E.width+"px",u.slides.style.height=E.height+"px",v=Math.min(E.presentationWidth/E.width,E.presentationHeight/E.height),v=Math.max(v,c.minScale),v=Math.min(v,c.maxScale),v===1||m.isActive()?(u.slides.style.zoom="",u.slides.style.left="",u.slides.style.top="",u.slides.style.bottom="",u.slides.style.right="",S({layout:""})):(u.slides.style.zoom="",u.slides.style.left="50%",u.slides.style.top="50%",u.slides.style.bottom="auto",u.slides.style.right="auto",S({layout:"translate(-50%, -50%) scale("+v+")"}));const N=Array.from(u.wrapper.querySelectorAll(Pt));for(let U=0,W=N.length;U<W;U++){const Z=N[U];Z.style.display!=="none"&&(c.center||Z.classList.contains("center")?Z.classList.contains("stack")?Z.style.top=0:Z.style.top=Math.max((E.height-Z.scrollHeight)/2,0)+"px":Z.style.top="")}T!==v&&C({type:"resize",data:{oldScale:T,scale:v,size:E}})}(function(){if(u.wrapper&&!c.disableLayout&&!D.isActive()&&typeof c.scrollActivationWidth=="number"&&c.view!=="scroll"){const E=ct();E.presentationWidth>0&&E.presentationWidth<=c.scrollActivationWidth?m.isActive()||(F.create(),m.activate()):m.isActive()&&m.deactivate()}})(),u.viewport.style.setProperty("--slide-scale",v),u.viewport.style.setProperty("--viewport-width",h+"px"),u.viewport.style.setProperty("--viewport-height",p+"px"),m.layout(),ht.update(),F.updateParallax(),A.isActive()&&A.update()}}function X(h,p){$(u.slides,"section > .stretch, section > .r-stretch").forEach(E=>{let T=((N,U=0)=>{if(N){let W,Z=N.style.height;return N.style.height="0px",N.parentNode.style.height="auto",W=U-N.parentNode.offsetHeight,N.style.height=Z+"px",N.parentNode.style.removeProperty("height"),W}return U})(E,p);if(/(img|video)/gi.test(E.nodeName)){const N=E.naturalWidth||E.videoWidth,U=E.naturalHeight||E.videoHeight,W=Math.min(h/N,T/U);E.style.width=N*W+"px",E.style.height=U*W+"px"}else E.style.width=h+"px",E.style.height=T+"px"})}function ct(h,p){let E=c.width,T=c.height;c.disableLayout&&(E=u.slides.offsetWidth,T=u.slides.offsetHeight);const N={width:E,height:T,presentationWidth:h||u.wrapper.offsetWidth,presentationHeight:p||u.wrapper.offsetHeight};return N.presentationWidth-=N.presentationWidth*c.margin,N.presentationHeight-=N.presentationHeight*c.margin,typeof N.width=="string"&&/%$/.test(N.width)&&(N.width=parseInt(N.width,10)/100*N.presentationWidth),typeof N.height=="string"&&/%$/.test(N.height)&&(N.height=parseInt(N.height,10)/100*N.presentationHeight),N}function lt(h,p){typeof h=="object"&&typeof h.setAttribute=="function"&&h.setAttribute("data-previous-indexv",p||0)}function mt(h){if(typeof h=="object"&&typeof h.setAttribute=="function"&&h.classList.contains("stack")){const p=h.hasAttribute("data-start-indexv")?"data-start-indexv":"data-previous-indexv";return parseInt(h.getAttribute(p)||0,10)}return 0}function q(h=d){return h&&h.parentNode&&!!h.parentNode.nodeName.match(/section/i)}function kt(){return!(!d||!q(d))&&!d.nextElementSibling}function St(){return n===0&&r===0}function at(){return!!d&&!d.nextElementSibling&&(!q(d)||!d.parentNode.nextElementSibling)}function ft(){if(c.pause){const h=u.wrapper.classList.contains("paused");_t(),u.wrapper.classList.add("paused"),h===!1&&C({type:"paused"})}}function J(){const h=u.wrapper.classList.contains("paused");u.wrapper.classList.remove("paused"),Nt(),h&&C({type:"resumed"})}function xt(h){typeof h=="boolean"?h?ft():J():Et()?J():ft()}function Et(){return u.wrapper.classList.contains("paused")}function vt(h,p,E,T){if(C({type:"beforeslidechange",data:{indexh:h===void 0?n:h,indexv:p===void 0?r:p,origin:T}}).defaultPrevented)return;l=d;const N=u.wrapper.querySelectorAll(Rt);if(m.isActive()){const pt=m.getSlideByIndices(h,p);return void(pt&&m.scrollToSlide(pt))}if(N.length===0)return;p!==void 0||A.isActive()||(p=mt(N[h])),l&&l.parentNode&&l.parentNode.classList.contains("stack")&&lt(l.parentNode,r);const U=L.concat();L.length=0;let W=n||0,Z=r||0;n=re(Rt,h===void 0?n:h),r=re(Ae,p===void 0?r:p);let wt=n!==W||r!==Z;wt||(l=null);let Tt=N[n],dt=Tt.querySelectorAll("section");f.classList.toggle("is-vertical-slide",dt.length>1),d=dt[r]||Tt;let Q=!1;wt&&l&&d&&!A.isActive()&&(ot="running",Q=Kt(l,d,W,Z),Q&&u.slides.classList.add("disable-slide-transitions")),Yt(),z(),A.isActive()&&A.update(),E!==void 0&&R.goto(E),l&&l!==d&&(l.classList.remove("present"),l.setAttribute("aria-hidden","true"),St()&&setTimeout(()=>{$(u.wrapper,Rt+".stack").forEach(pt=>{lt(pt,0)})},0));t:for(let pt=0,De=L.length;pt<De;pt++){for(let Ut=0;Ut<U.length;Ut++)if(U[Ut]===L[pt]){U.splice(Ut,1);continue t}u.viewport.classList.add(L[pt]),C({type:L[pt]})}for(;U.length;)u.viewport.classList.remove(U.pop());wt&&B(T),!wt&&l||(O.stopEmbeddedContent(l),O.startEmbeddedContent(d)),requestAnimationFrame(()=>{a(i(d))}),ht.update(),K.update(),H.update(),F.update(),F.updateParallax(),j.update(),R.update(),nt.writeURL(),Nt(),Q&&(setTimeout(()=>{u.slides.classList.remove("disable-slide-transitions")},0),c.autoAnimate&&tt.run(l,d))}function Kt(h,p,E,T){return h.hasAttribute("data-auto-animate")&&p.hasAttribute("data-auto-animate")&&h.getAttribute("data-auto-animate-id")===p.getAttribute("data-auto-animate-id")&&!(n>E||r>T?p:h).hasAttribute("data-auto-animate-restart")}function ae(){k(),o(),z(),Y=c.autoSlide,Nt(),F.create(),nt.writeURL(),c.sortFragmentsOnSync===!0&&R.sortAll(),K.update(),ht.update(),Yt(),H.update(),H.updateVisibility(),V.update(),F.update(!0),j.update(),O.formatEmbeddedContent(),c.autoPlayMedia===!1?O.stopEmbeddedContent(d,{unloadIframes:!1}):O.startEmbeddedContent(d),A.isActive()&&A.layout()}function Xt(h=At()){h.forEach((p,E)=>{let T=h[Math.floor(Math.random()*h.length)];T.parentNode===p.parentNode&&p.parentNode.insertBefore(p,T);let N=p.querySelectorAll("section");N.length&&Xt(N)})}function re(h,p){let E=$(u.wrapper,h),T=E.length,N=m.isActive()||D.isActive(),U=!1,W=!1;if(T){c.loop&&(p>=T&&(U=!0),(p%=T)<0&&(p=T+p,W=!0)),p=Math.max(Math.min(p,T-1),0);for(let dt=0;dt<T;dt++){let Q=E[dt],pt=c.rtl&&!q(Q);Q.classList.remove("past"),Q.classList.remove("present"),Q.classList.remove("future"),Q.setAttribute("hidden",""),Q.setAttribute("aria-hidden","true"),Q.querySelector("section")&&Q.classList.add("stack"),N?Q.classList.add("present"):dt<p?(Q.classList.add(pt?"future":"past"),c.fragments&&oe(Q)):dt>p?(Q.classList.add(pt?"past":"future"),c.fragments&&le(Q)):dt===p&&c.fragments&&(U?le(Q):W&&oe(Q))}let Z=E[p],wt=Z.classList.contains("present");Z.classList.add("present"),Z.removeAttribute("hidden"),Z.removeAttribute("aria-hidden"),wt||C({target:Z,type:"visible",bubbles:!1});let Tt=Z.getAttribute("data-state");Tt&&(L=L.concat(Tt.split(" ")))}else p=0;return p}function oe(h){$(h,".fragment").forEach(p=>{p.classList.add("visible"),p.classList.remove("current-fragment")})}function le(h){$(h,".fragment.visible").forEach(p=>{p.classList.remove("visible","current-fragment")})}function Yt(){let h,p,E=At(),T=E.length;if(T&&n!==void 0){let N=A.isActive()?10:c.viewDistance;Bt&&(N=A.isActive()?6:c.mobileViewDistance),D.isActive()&&(N=Number.MAX_VALUE);for(let U=0;U<T;U++){let W=E[U],Z=$(W,"section"),wt=Z.length;if(h=Math.abs((n||0)-U)||0,c.loop&&(h=Math.abs(((n||0)-U)%(T-N))||0),h<N?O.load(W):O.unload(W),wt){let Tt=mt(W);for(let dt=0;dt<wt;dt++){let Q=Z[dt];p=Math.abs(U===(n||0)?(r||0)-dt:dt-Tt),h+p<N?O.load(Q):O.unload(Q)}}}pe()?u.wrapper.classList.add("has-vertical-slides"):u.wrapper.classList.remove("has-vertical-slides"),ue()?u.wrapper.classList.add("has-horizontal-slides"):u.wrapper.classList.remove("has-horizontal-slides")}}function bt({includeFragments:h=!1}={}){let p=u.wrapper.querySelectorAll(Rt),E=u.wrapper.querySelectorAll(Ae),T={left:n>0,right:n<p.length-1,up:r>0,down:r<E.length-1};if(c.loop&&(p.length>1&&(T.left=!0,T.right=!0),E.length>1&&(T.up=!0,T.down=!0)),p.length>1&&c.navigationMode==="linear"&&(T.right=T.right||T.down,T.left=T.left||T.up),h===!0){let N=R.availableRoutes();T.left=T.left||N.prev,T.up=T.up||N.prev,T.down=T.down||N.next,T.right=T.right||N.next}if(c.rtl){let N=T.left;T.left=T.right,T.right=N}return T}function de(h=d){let p=At(),E=0;t:for(let T=0;T<p.length;T++){let N=p[T],U=N.querySelectorAll("section");for(let W=0;W<U.length;W++){if(U[W]===h)break t;U[W].dataset.visibility!=="uncounted"&&E++}if(N===h)break;N.classList.contains("stack")===!1&&N.dataset.visibility!=="uncounted"&&E++}return E}function ce(h){let p,E=n,T=r;if(h)if(m.isActive())E=parseInt(h.getAttribute("data-index-h"),10),h.getAttribute("data-index-v")&&(T=parseInt(h.getAttribute("data-index-v"),10));else{let N=q(h),U=N?h.parentNode:h,W=At();E=Math.max(W.indexOf(U),0),T=void 0,N&&(T=Math.max($(h.parentNode,"section").indexOf(h),0))}if(!h&&d&&d.querySelectorAll(".fragment").length>0){let N=d.querySelector(".current-fragment");p=N&&N.hasAttribute("data-fragment-index")?parseInt(N.getAttribute("data-fragment-index"),10):d.querySelectorAll(".fragment.visible").length-1}return{h:E,v:T,f:p}}function Zt(){return $(u.wrapper,Pt+':not(.stack):not([data-visibility="uncounted"])')}function At(){return $(u.wrapper,Rt)}function he(){return $(u.wrapper,".slides>section>section")}function ue(){return At().length>1}function pe(){return he().length>1}function ge(){return Zt().length}function me(h,p){let E=At()[h],T=E&&E.querySelectorAll("section");return T&&T.length&&typeof p=="number"?T?T[p]:void 0:E}function fe(){let h=ce();return{indexh:h.h,indexv:h.v,indexf:h.f,paused:Et(),overview:A.isActive(),...V.getState()}}function Nt(){if(_t(),d&&c.autoSlide!==!1){let h=d.querySelector(".current-fragment[data-autoslide]"),p=h?h.getAttribute("data-autoslide"):null,E=d.parentNode?d.parentNode.getAttribute("data-autoslide"):null,T=d.getAttribute("data-autoslide");p?Y=parseInt(p,10):T?Y=parseInt(T,10):E?Y=parseInt(E,10):(Y=c.autoSlide,d.querySelectorAll(".fragment").length===0&&$(d,"video, audio").forEach(N=>{N.hasAttribute("data-autoplay")&&Y&&1e3*N.duration/N.playbackRate>Y&&(Y=1e3*N.duration/N.playbackRate+1e3)})),!Y||et||Et()||A.isActive()||at()&&!R.availableRoutes().next&&c.loop!==!0||(G=setTimeout(()=>{typeof c.autoSlideMethod=="function"?c.autoSlideMethod():Gt(),Nt()},Y),yt=Date.now()),g&&g.setPlaying(G!==-1)}}function _t(){clearTimeout(G),G=-1}function $t(){Y&&!et&&(et=!0,C({type:"autoslidepaused"}),clearTimeout(G),g&&g.setPlaying(!1))}function Dt(){Y&&et&&(et=!1,C({type:"autoslideresumed"}),Nt())}function qt({skipFragments:h=!1}={}){if(x.hasNavigatedHorizontally=!0,m.isActive())return m.prev();c.rtl?(A.isActive()||h||R.next()===!1)&&bt().left&&vt(n+1,c.navigationMode==="grid"?r:void 0):(A.isActive()||h||R.prev()===!1)&&bt().left&&vt(n-1,c.navigationMode==="grid"?r:void 0)}function Ot({skipFragments:h=!1}={}){if(x.hasNavigatedHorizontally=!0,m.isActive())return m.next();c.rtl?(A.isActive()||h||R.prev()===!1)&&bt().right&&vt(n-1,c.navigationMode==="grid"?r:void 0):(A.isActive()||h||R.next()===!1)&&bt().right&&vt(n+1,c.navigationMode==="grid"?r:void 0)}function Jt({skipFragments:h=!1}={}){if(m.isActive())return m.prev();(A.isActive()||h||R.prev()===!1)&&bt().up&&vt(n,r-1)}function Qt({skipFragments:h=!1}={}){if(x.hasNavigatedVertically=!0,m.isActive())return m.next();(A.isActive()||h||R.next()===!1)&&bt().down&&vt(n,r+1)}function ve({skipFragments:h=!1}={}){if(m.isActive())return m.prev();if(h||R.prev()===!1)if(bt().up)Jt({skipFragments:h});else{let p;if(p=c.rtl?$(u.wrapper,Rt+".future").pop():$(u.wrapper,Rt+".past").pop(),p&&p.classList.contains("stack")){let E=p.querySelectorAll("section").length-1||void 0;vt(n-1,E)}else c.rtl?Ot({skipFragments:h}):qt({skipFragments:h})}}function Gt({skipFragments:h=!1}={}){if(x.hasNavigatedHorizontally=!0,x.hasNavigatedVertically=!0,m.isActive())return m.next();if(h||R.next()===!1){let p=bt();p.down&&p.right&&c.loop&&kt()&&(p.down=!1),p.down?Qt({skipFragments:h}):c.rtl?qt({skipFragments:h}):Ot({skipFragments:h})}}function ye(h){let p=h.data;if(typeof p=="string"&&p.charAt(0)==="{"&&p.charAt(p.length-1)==="}"&&(p=JSON.parse(p),p.method&&typeof e[p.method]=="function"))if(We.test(p.method)===!1){const E=e[p.method].apply(e,p.args);M("callback",{method:p.method,result:E})}else console.warn('reveal.js: "'+p.method+'" is is blacklisted from the postMessage API')}function be(h){ot==="running"&&/section/gi.test(h.target.nodeName)&&(ot="idle",C({type:"slidetransitionend",data:{indexh:n,indexv:r,previousSlide:l,currentSlide:d}}))}function we(h){const p=rt(h.target,'a[href^="#"]');if(p){const E=p.getAttribute("href"),T=nt.getIndicesFromHash(E);T&&(e.slide(T.h,T.v,T.f),h.preventDefault())}}function ke(h){z()}function Se(h){document.hidden===!1&&document.activeElement!==document.body&&(typeof document.activeElement.blur=="function"&&document.activeElement.blur(),document.body.focus())}function Ft(h){(document.fullscreenElement||document.webkitFullscreenElement)===u.wrapper&&(h.stopImmediatePropagation(),setTimeout(()=>{e.layout(),e.focus.focus()},1))}function $e(h){at()&&c.loop===!1?(vt(0,0),Dt()):et?Dt():$t()}const xe={VERSION:Be,initialize:function(h){if(!f)throw'Unable to find presentation root (<div class="reveal">).';if(I)throw"Reveal.js has already been initialized.";if(I=!0,u.wrapper=f,u.slides=f.querySelector(".slides"),!u.slides)throw'Unable to find slides container (<div class="slides">).';return c={...un,...c,...t,...h,...Ee()},/print-pdf/gi.test(window.location.search)&&(c.view="print"),function(){c.embedded===!0?u.viewport=rt(f,".reveal-viewport")||f:(u.viewport=document.body,document.documentElement.classList.add("reveal-full-page")),u.viewport.classList.add("reveal-viewport")}(),window.addEventListener("load",z,!1),ut.load(c.plugins,c.dependencies).then(_),new Promise(p=>e.on("ready",p))},configure:s,destroy:function(){I=!1,y!==!1&&(k(),_t(),H.destroy(),gt.destroy(),V.destroy(),ut.destroy(),Ht.destroy(),K.destroy(),ht.destroy(),F.destroy(),j.destroy(),it.destroy(),document.removeEventListener("fullscreenchange",Ft),document.removeEventListener("webkitfullscreenchange",Ft),document.removeEventListener("visibilitychange",Se,!1),window.removeEventListener("message",ye,!1),window.removeEventListener("load",z,!1),u.pauseOverlay&&u.pauseOverlay.remove(),u.statusElement&&u.statusElement.remove(),document.documentElement.classList.remove("reveal-full-page"),u.wrapper.classList.remove("ready","center","has-horizontal-slides","has-vertical-slides"),u.wrapper.removeAttribute("data-transition-speed"),u.wrapper.removeAttribute("data-background-transition"),u.viewport.classList.remove("reveal-viewport"),u.viewport.style.removeProperty("--slide-width"),u.viewport.style.removeProperty("--slide-height"),u.slides.style.removeProperty("width"),u.slides.style.removeProperty("height"),u.slides.style.removeProperty("zoom"),u.slides.style.removeProperty("left"),u.slides.style.removeProperty("top"),u.slides.style.removeProperty("bottom"),u.slides.style.removeProperty("right"),u.slides.style.removeProperty("transform"),Array.from(u.wrapper.querySelectorAll(Pt)).forEach(h=>{h.style.removeProperty("display"),h.style.removeProperty("top"),h.removeAttribute("hidden"),h.removeAttribute("aria-hidden")}))},sync:ae,syncSlide:function(h=d){F.sync(h),R.sync(h),O.load(h),F.update(),H.update()},syncFragments:R.sync.bind(R),slide:vt,left:qt,right:Ot,up:Jt,down:Qt,prev:ve,next:Gt,navigateLeft:qt,navigateRight:Ot,navigateUp:Jt,navigateDown:Qt,navigatePrev:ve,navigateNext:Gt,navigateFragment:R.goto.bind(R),prevFragment:R.prev.bind(R),nextFragment:R.next.bind(R),on:w,off:b,addEventListener:w,removeEventListener:b,layout:z,shuffle:Xt,availableRoutes:bt,availableFragments:R.availableRoutes.bind(R),toggleHelp:V.toggleHelp.bind(V),toggleOverview:A.toggle.bind(A),toggleScrollView:m.toggle.bind(m),togglePause:xt,toggleAutoSlide:function(h){typeof h=="boolean"?h?Dt():$t():et?Dt():$t()},toggleJumpToSlide:function(h){typeof h=="boolean"?h?it.show():it.hide():it.isVisible()?it.hide():it.show()},isFirstSlide:St,isLastSlide:at,isLastVerticalSlide:kt,isVerticalSlide:q,isVerticalStack:function(h=d){return h.classList.contains(".stack")||h.querySelector("section")!==null},isPaused:Et,isAutoSliding:function(){return!(!Y||et)},isSpeakerNotes:H.isSpeakerNotesWindow.bind(H),isOverview:A.isActive.bind(A),isFocused:gt.isFocused.bind(gt),isOverlayOpen:V.isOpen.bind(V),isScrollView:m.isActive.bind(m),isPrintView:D.isActive.bind(D),isReady:()=>y,loadSlide:O.load.bind(O),unloadSlide:O.unload.bind(O),startEmbeddedContent:()=>O.startEmbeddedContent(d),stopEmbeddedContent:()=>O.stopEmbeddedContent(d,{unloadIframes:!1}),previewIframe:V.previewIframe.bind(V),previewImage:V.previewImage.bind(V),previewVideo:V.previewVideo.bind(V),showPreview:V.previewIframe.bind(V),hidePreview:V.close.bind(V),addEventListeners:o,removeEventListeners:k,dispatchEvent:C,getState:fe,setState:function(h){if(typeof h=="object"){vt(Mt(h.indexh),Mt(h.indexv),Mt(h.indexf));let p=Mt(h.paused),E=Mt(h.overview);typeof p=="boolean"&&p!==Et()&&xt(p),typeof E=="boolean"&&E!==A.isActive()&&A.toggle(E),V.setState(h)}},getProgress:function(){let h=ge(),p=de();if(d){let E=d.querySelectorAll(".fragment");E.length>0&&(p+=d.querySelectorAll(".fragment.visible").length/E.length*.9)}return Math.min(p/(h-1),1)},getIndices:ce,getSlidesAttributes:function(){return Zt().map(h=>{let p={};for(let E=0;E<h.attributes.length;E++){let T=h.attributes[E];p[T.name]=T.value}return p})},getSlidePastCount:de,getTotalSlides:ge,getSlide:me,getPreviousSlide:()=>l,getCurrentSlide:()=>d,getSlideBackground:function(h,p){let E=typeof h=="number"?me(h,p):h;if(E)return E.slideBackgroundElement},getSlideNotes:H.getSlideNotes.bind(H),getSlides:Zt,getHorizontalSlides:At,getVerticalSlides:he,hasHorizontalSlides:ue,hasVerticalSlides:pe,hasNavigatedHorizontally:()=>x.hasNavigatedHorizontally,hasNavigatedVertically:()=>x.hasNavigatedVertically,shouldAutoAnimateBetween:Kt,addKeyBinding:st.addKeyBinding.bind(st),removeKeyBinding:st.removeKeyBinding.bind(st),triggerKey:st.triggerKey.bind(st),registerKeyboardShortcut:st.registerKeyboardShortcut.bind(st),getComputedSlideSize:ct,setCurrentScrollPage:function(h,p,E){let T=n||0;n=p,r=E;const N=d!==h;l=d,d=h,d&&l&&c.autoAnimate&&Kt(l,d,T,r)&&tt.run(l,d),N&&(l&&(O.stopEmbeddedContent(l),O.stopEmbeddedContent(l.slideBackgroundElement)),O.startEmbeddedContent(d),O.startEmbeddedContent(d.slideBackgroundElement)),requestAnimationFrame(()=>{a(i(d))}),B()},getScale:()=>v,getConfig:()=>c,getQueryHash:Ee,getSlidePath:nt.getHash.bind(nt),getRevealElement:()=>f,getSlidesElement:()=>u.slides,getViewportElement:()=>u.viewport,getBackgroundsElement:()=>F.element,registerPlugin:ut.registerPlugin.bind(ut),hasPlugin:ut.hasPlugin.bind(ut),getPlugin:ut.getPlugin.bind(ut),getPlugins:ut.getRegisteredPlugins.bind(ut)};return zt(e,{...xe,announceStatus:a,getStatusText:i,focus:gt,scroll:m,progress:ht,controls:K,location:nt,overview:A,keyboard:st,fragments:R,backgrounds:F,slideContent:O,slideNumber:j,onUserInput:function(h){c.autoSlideStoppable&&$t()},closeOverlay:V.close.bind(V),updateSlidesVisibility:Yt,layoutSlideContents:X,transformSlides:S,cueAutoSlide:Nt,cancelAutoSlide:_t}),xe}let Lt=He,Te=[];Lt.initialize=f=>(Object.assign(Lt,new He(document.querySelector(".reveal"),f)),Te.map(t=>t(Lt)),Lt.initialize()),["configure","on","off","addEventListener","removeEventListener","registerPlugin"].forEach(f=>{Lt[f]=(...t)=>{Te.push(e=>e[f].call(null,...t))}}),Lt.isReady=()=>!1,Lt.VERSION=Be;function _e(f){return f&&f.__esModule&&Object.prototype.hasOwnProperty.call(f,"default")?f.default:f}var Vt={exports:{}},pn=Vt.exports,Pe;function gn(){return Pe||(Pe=1,function(f,t){(function(e,n){f.exports=n()})(pn,function(){function e(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let n={async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const r=/[&<>"']/,l=new RegExp(r.source,"g"),d=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,g=new RegExp(d.source,"g"),c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},I=_=>c[_];function y(_,a){if(a){if(r.test(_))return _.replace(l,I)}else if(d.test(_))return _.replace(g,I);return _}const x=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function L(_){return _.replace(x,(a,i)=>(i=i.toLowerCase())==="colon"?":":i.charAt(0)==="#"?i.charAt(1)==="x"?String.fromCharCode(parseInt(i.substring(2),16)):String.fromCharCode(+i.substring(1)):"")}const v=/(^|[^\[])\^/g;function P(_,a){_=typeof _=="string"?_:_.source,a=a||"";const i={replace:(s,o)=>(o=(o=o.source||o).replace(v,"$1"),_=_.replace(s,o),i),getRegex:()=>new RegExp(_,a)};return i}const u=/[^\w:]/g,ot=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Y(_,a,i){if(_){let s;try{s=decodeURIComponent(L(i)).replace(u,"").toLowerCase()}catch{return null}if(s.indexOf("javascript:")===0||s.indexOf("vbscript:")===0||s.indexOf("data:")===0)return null}a&&!ot.test(i)&&(i=function(s,o){G[" "+s]||(yt.test(s)?G[" "+s]=s+"/":G[" "+s]=tt(s,"/",!0)),s=G[" "+s];const k=s.indexOf(":")===-1;return o.substring(0,2)==="//"?k?o:s.replace(et,"$1")+o:o.charAt(0)==="/"?k?o:s.replace(O,"$1")+o:s+o}(a,i));try{i=encodeURI(i).replace(/%25/g,"%")}catch{return null}return i}const G={},yt=/^[^:]+:\/*[^/]*$/,et=/^([^:]+:)[\s\S]*$/,O=/^([^:]+:\/*[^/]*)[\s\S]*$/,j={exec:function(){}};function it(_,a){const i=_.replace(/\|/g,(o,k,w)=>{let b=!1,S=k;for(;--S>=0&&w[S]==="\\";)b=!b;return b?"|":" |"}).split(/ \|/);let s=0;if(i[0].trim()||i.shift(),i.length>0&&!i[i.length-1].trim()&&i.pop(),i.length>a)i.splice(a);else for(;i.length<a;)i.push("");for(;s<i.length;s++)i[s]=i[s].trim().replace(/\\\|/g,"|");return i}function tt(_,a,i){const s=_.length;if(s===0)return"";let o=0;for(;o<s;){const k=_.charAt(s-o-1);if(k!==a||i){if(k===a||!i)break;o++}else o++}return _.slice(0,s-o)}function F(_,a){if(a<1)return"";let i="";for(;a>1;)1&a&&(i+=_),a>>=1,_+=_;return i+_}function m(_,a,i,s){const o=a.href,k=a.title?y(a.title):null,w=_[1].replace(/\\([\[\]])/g,"$1");if(_[0].charAt(0)!=="!"){s.state.inLink=!0;const b={type:"link",raw:i,href:o,title:k,text:w,tokens:s.inlineTokens(w)};return s.state.inLink=!1,b}return{type:"image",raw:i,href:o,title:k,text:y(w)}}class D{constructor(a){this.options=a||n}space(a){const i=this.rules.block.newline.exec(a);if(i&&i[0].length>0)return{type:"space",raw:i[0]}}code(a){const i=this.rules.block.code.exec(a);if(i){const s=i[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:i[0],codeBlockStyle:"indented",text:this.options.pedantic?s:tt(s,`
`)}}}fences(a){const i=this.rules.block.fences.exec(a);if(i){const s=i[0],o=function(k,w){const b=k.match(/^(\s+)(?:```)/);if(b===null)return w;const S=b[1];return w.split(`
`).map(C=>{const B=C.match(/^\s+/);if(B===null)return C;const[M]=B;return M.length>=S.length?C.slice(S.length):C}).join(`
`)}(s,i[3]||"");return{type:"code",raw:s,lang:i[2]?i[2].trim().replace(this.rules.inline._escapes,"$1"):i[2],text:o}}}heading(a){const i=this.rules.block.heading.exec(a);if(i){let s=i[2].trim();if(/#$/.test(s)){const o=tt(s,"#");this.options.pedantic?s=o.trim():o&&!/ $/.test(o)||(s=o.trim())}return{type:"heading",raw:i[0],depth:i[1].length,text:s,tokens:this.lexer.inline(s)}}}hr(a){const i=this.rules.block.hr.exec(a);if(i)return{type:"hr",raw:i[0]}}blockquote(a){const i=this.rules.block.blockquote.exec(a);if(i){const s=i[0].replace(/^ *>[ \t]?/gm,""),o=this.lexer.state.top;this.lexer.state.top=!0;const k=this.lexer.blockTokens(s);return this.lexer.state.top=o,{type:"blockquote",raw:i[0],tokens:k,text:s}}}list(a){let i=this.rules.block.list.exec(a);if(i){let s,o,k,w,b,S,C,B,M,z,X,ct,lt=i[1].trim();const mt=lt.length>1,q={type:"list",raw:"",ordered:mt,start:mt?+lt.slice(0,-1):"",loose:!1,items:[]};lt=mt?`\\d{1,9}\\${lt.slice(-1)}`:`\\${lt}`,this.options.pedantic&&(lt=mt?lt:"[*+-]");const kt=new RegExp(`^( {0,3}${lt})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;a&&(ct=!1,i=kt.exec(a))&&!this.rules.block.hr.test(a);){if(s=i[0],a=a.substring(s.length),B=i[2].split(`
`,1)[0].replace(/^\t+/,at=>" ".repeat(3*at.length)),M=a.split(`
`,1)[0],this.options.pedantic?(w=2,X=B.trimLeft()):(w=i[2].search(/[^ ]/),w=w>4?1:w,X=B.slice(w),w+=i[1].length),S=!1,!B&&/^ *$/.test(M)&&(s+=M+`
`,a=a.substring(M.length+1),ct=!0),!ct){const at=new RegExp(`^ {0,${Math.min(3,w-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),ft=new RegExp(`^ {0,${Math.min(3,w-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),J=new RegExp(`^ {0,${Math.min(3,w-1)}}(?:\`\`\`|~~~)`),xt=new RegExp(`^ {0,${Math.min(3,w-1)}}#`);for(;a&&(z=a.split(`
`,1)[0],M=z,this.options.pedantic&&(M=M.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!J.test(M))&&!xt.test(M)&&!at.test(M)&&!ft.test(a);){if(M.search(/[^ ]/)>=w||!M.trim())X+=`
`+M.slice(w);else{if(S||B.search(/[^ ]/)>=4||J.test(B)||xt.test(B)||ft.test(B))break;X+=`
`+M}S||M.trim()||(S=!0),s+=z+`
`,a=a.substring(z.length+1),B=M.slice(w)}}q.loose||(C?q.loose=!0:/\n *\n *$/.test(s)&&(C=!0)),this.options.gfm&&(o=/^\[[ xX]\] /.exec(X),o&&(k=o[0]!=="[ ] ",X=X.replace(/^\[[ xX]\] +/,""))),q.items.push({type:"list_item",raw:s,task:!!o,checked:k,loose:!1,text:X}),q.raw+=s}q.items[q.items.length-1].raw=s.trimRight(),q.items[q.items.length-1].text=X.trimRight(),q.raw=q.raw.trimRight();const St=q.items.length;for(b=0;b<St;b++)if(this.lexer.state.top=!1,q.items[b].tokens=this.lexer.blockTokens(q.items[b].text,[]),!q.loose){const at=q.items[b].tokens.filter(J=>J.type==="space"),ft=at.length>0&&at.some(J=>/\n.*\n/.test(J.raw));q.loose=ft}if(q.loose)for(b=0;b<St;b++)q.items[b].loose=!0;return q}}html(a){const i=this.rules.block.html.exec(a);if(i){const s={type:"html",raw:i[0],pre:!this.options.sanitizer&&(i[1]==="pre"||i[1]==="script"||i[1]==="style"),text:i[0]};if(this.options.sanitize){const o=this.options.sanitizer?this.options.sanitizer(i[0]):y(i[0]);s.type="paragraph",s.text=o,s.tokens=this.lexer.inline(o)}return s}}def(a){const i=this.rules.block.def.exec(a);if(i){const s=i[1].toLowerCase().replace(/\s+/g," "),o=i[2]?i[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",k=i[3]?i[3].substring(1,i[3].length-1).replace(this.rules.inline._escapes,"$1"):i[3];return{type:"def",tag:s,raw:i[0],href:o,title:k}}}table(a){const i=this.rules.block.table.exec(a);if(i){const s={type:"table",header:it(i[1]).map(o=>({text:o})),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:i[3]&&i[3].trim()?i[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(s.header.length===s.align.length){s.raw=i[0];let o,k,w,b,S=s.align.length;for(o=0;o<S;o++)/^ *-+: *$/.test(s.align[o])?s.align[o]="right":/^ *:-+: *$/.test(s.align[o])?s.align[o]="center":/^ *:-+ *$/.test(s.align[o])?s.align[o]="left":s.align[o]=null;for(S=s.rows.length,o=0;o<S;o++)s.rows[o]=it(s.rows[o],s.header.length).map(C=>({text:C}));for(S=s.header.length,k=0;k<S;k++)s.header[k].tokens=this.lexer.inline(s.header[k].text);for(S=s.rows.length,k=0;k<S;k++)for(b=s.rows[k],w=0;w<b.length;w++)b[w].tokens=this.lexer.inline(b[w].text);return s}}}lheading(a){const i=this.rules.block.lheading.exec(a);if(i)return{type:"heading",raw:i[0],depth:i[2].charAt(0)==="="?1:2,text:i[1],tokens:this.lexer.inline(i[1])}}paragraph(a){const i=this.rules.block.paragraph.exec(a);if(i){const s=i[1].charAt(i[1].length-1)===`
`?i[1].slice(0,-1):i[1];return{type:"paragraph",raw:i[0],text:s,tokens:this.lexer.inline(s)}}}text(a){const i=this.rules.block.text.exec(a);if(i)return{type:"text",raw:i[0],text:i[0],tokens:this.lexer.inline(i[0])}}escape(a){const i=this.rules.inline.escape.exec(a);if(i)return{type:"escape",raw:i[0],text:y(i[1])}}tag(a){const i=this.rules.inline.tag.exec(a);if(i)return!this.lexer.state.inLink&&/^<a /i.test(i[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(i[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(i[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(i[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:i[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):y(i[0]):i[0]}}link(a){const i=this.rules.inline.link.exec(a);if(i){const s=i[2].trim();if(!this.options.pedantic&&/^</.test(s)){if(!/>$/.test(s))return;const w=tt(s.slice(0,-1),"\\");if((s.length-w.length)%2==0)return}else{const w=function(b,S){if(b.indexOf(S[1])===-1)return-1;const C=b.length;let B=0,M=0;for(;M<C;M++)if(b[M]==="\\")M++;else if(b[M]===S[0])B++;else if(b[M]===S[1]&&(B--,B<0))return M;return-1}(i[2],"()");if(w>-1){const b=(i[0].indexOf("!")===0?5:4)+i[1].length+w;i[2]=i[2].substring(0,w),i[0]=i[0].substring(0,b).trim(),i[3]=""}}let o=i[2],k="";if(this.options.pedantic){const w=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);w&&(o=w[1],k=w[3])}else k=i[3]?i[3].slice(1,-1):"";return o=o.trim(),/^</.test(o)&&(o=this.options.pedantic&&!/>$/.test(s)?o.slice(1):o.slice(1,-1)),m(i,{href:o&&o.replace(this.rules.inline._escapes,"$1"),title:k&&k.replace(this.rules.inline._escapes,"$1")},i[0],this.lexer)}}reflink(a,i){let s;if((s=this.rules.inline.reflink.exec(a))||(s=this.rules.inline.nolink.exec(a))){let o=(s[2]||s[1]).replace(/\s+/g," ");if(o=i[o.toLowerCase()],!o){const k=s[0].charAt(0);return{type:"text",raw:k,text:k}}return m(s,o,s[0],this.lexer)}}emStrong(a,i,s=""){let o=this.rules.inline.emStrong.lDelim.exec(a);if(!o||o[3]&&s.match(/[\p{L}\p{N}]/u))return;const k=o[1]||o[2]||"";if(!k||k&&(s===""||this.rules.inline.punctuation.exec(s))){const w=o[0].length-1;let b,S,C=w,B=0;const M=o[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(M.lastIndex=0,i=i.slice(-1*a.length+w);(o=M.exec(i))!=null;){if(b=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!b)continue;if(S=b.length,o[3]||o[4]){C+=S;continue}if((o[5]||o[6])&&w%3&&!((w+S)%3)){B+=S;continue}if(C-=S,C>0)continue;S=Math.min(S,S+C+B);const z=a.slice(0,w+o.index+(o[0].length-b.length)+S);if(Math.min(w,S)%2){const ct=z.slice(1,-1);return{type:"em",raw:z,text:ct,tokens:this.lexer.inlineTokens(ct)}}const X=z.slice(2,-2);return{type:"strong",raw:z,text:X,tokens:this.lexer.inlineTokens(X)}}}}codespan(a){const i=this.rules.inline.code.exec(a);if(i){let s=i[2].replace(/\n/g," ");const o=/[^ ]/.test(s),k=/^ /.test(s)&&/ $/.test(s);return o&&k&&(s=s.substring(1,s.length-1)),s=y(s,!0),{type:"codespan",raw:i[0],text:s}}}br(a){const i=this.rules.inline.br.exec(a);if(i)return{type:"br",raw:i[0]}}del(a){const i=this.rules.inline.del.exec(a);if(i)return{type:"del",raw:i[0],text:i[2],tokens:this.lexer.inlineTokens(i[2])}}autolink(a,i){const s=this.rules.inline.autolink.exec(a);if(s){let o,k;return s[2]==="@"?(o=y(this.options.mangle?i(s[1]):s[1]),k="mailto:"+o):(o=y(s[1]),k=o),{type:"link",raw:s[0],text:o,href:k,tokens:[{type:"text",raw:o,text:o}]}}}url(a,i){let s;if(s=this.rules.inline.url.exec(a)){let o,k;if(s[2]==="@")o=y(this.options.mangle?i(s[0]):s[0]),k="mailto:"+o;else{let w;do w=s[0],s[0]=this.rules.inline._backpedal.exec(s[0])[0];while(w!==s[0]);o=y(s[0]),k=s[1]==="www."?"http://"+s[0]:s[0]}return{type:"link",raw:s[0],text:o,href:k,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(a,i){const s=this.rules.inline.text.exec(a);if(s){let o;return o=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):y(s[0]):s[0]:y(this.options.smartypants?i(s[0]):s[0]),{type:"text",raw:s[0],text:o}}}}const R={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:j,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};R.def=P(R.def).replace("label",R._label).replace("title",R._title).getRegex(),R.bullet=/(?:[*+-]|\d{1,9}[.)])/,R.listItemStart=P(/^( *)(bull) */).replace("bull",R.bullet).getRegex(),R.list=P(R.list).replace(/bull/g,R.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+R.def.source+")").getRegex(),R._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",R._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,R.html=P(R.html,"i").replace("comment",R._comment).replace("tag",R._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),R.paragraph=P(R._paragraph).replace("hr",R.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",R._tag).getRegex(),R.blockquote=P(R.blockquote).replace("paragraph",R.paragraph).getRegex(),R.normal={...R},R.gfm={...R.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"},R.gfm.table=P(R.gfm.table).replace("hr",R.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",R._tag).getRegex(),R.gfm.paragraph=P(R._paragraph).replace("hr",R.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",R.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",R._tag).getRegex(),R.pedantic={...R.normal,html:P(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",R._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:j,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:P(R.normal._paragraph).replace("hr",R.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",R.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const A={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:j,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:j,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function st(_){return _.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function nt(_){let a,i,s="";const o=_.length;for(a=0;a<o;a++)i=_.charCodeAt(a),Math.random()>.5&&(i="x"+i.toString(16)),s+="&#"+i+";";return s}A._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",A.punctuation=P(A.punctuation).replace(/punctuation/g,A._punctuation).getRegex(),A.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,A.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g,A._comment=P(R._comment).replace("(?:-->|$)","-->").getRegex(),A.emStrong.lDelim=P(A.emStrong.lDelim).replace(/punct/g,A._punctuation).getRegex(),A.emStrong.rDelimAst=P(A.emStrong.rDelimAst,"g").replace(/punct/g,A._punctuation).getRegex(),A.emStrong.rDelimUnd=P(A.emStrong.rDelimUnd,"g").replace(/punct/g,A._punctuation).getRegex(),A._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,A._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,A._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,A.autolink=P(A.autolink).replace("scheme",A._scheme).replace("email",A._email).getRegex(),A._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,A.tag=P(A.tag).replace("comment",A._comment).replace("attribute",A._attribute).getRegex(),A._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,A._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,A._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,A.link=P(A.link).replace("label",A._label).replace("href",A._href).replace("title",A._title).getRegex(),A.reflink=P(A.reflink).replace("label",A._label).replace("ref",R._label).getRegex(),A.nolink=P(A.nolink).replace("ref",R._label).getRegex(),A.reflinkSearch=P(A.reflinkSearch,"g").replace("reflink",A.reflink).replace("nolink",A.nolink).getRegex(),A.normal={...A},A.pedantic={...A.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:P(/^!?\[(label)\]\((.*?)\)/).replace("label",A._label).getRegex(),reflink:P(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",A._label).getRegex()},A.gfm={...A.normal,escape:P(A.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},A.gfm.url=P(A.gfm.url,"i").replace("email",A.gfm._extended_email).getRegex(),A.breaks={...A.gfm,br:P(A.br).replace("{2,}","*").getRegex(),text:P(A.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class K{constructor(a){this.tokens=[],this.tokens.links=Object.create(null),this.options=a||n,this.options.tokenizer=this.options.tokenizer||new D,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const i={block:R.normal,inline:A.normal};this.options.pedantic?(i.block=R.pedantic,i.inline=A.pedantic):this.options.gfm&&(i.block=R.gfm,this.options.breaks?i.inline=A.breaks:i.inline=A.gfm),this.tokenizer.rules=i}static get rules(){return{block:R,inline:A}}static lex(a,i){return new K(i).lex(a)}static lexInline(a,i){return new K(i).inlineTokens(a)}lex(a){let i;for(a=a.replace(/\r\n|\r/g,`
`),this.blockTokens(a,this.tokens);i=this.inlineQueue.shift();)this.inlineTokens(i.src,i.tokens);return this.tokens}blockTokens(a,i=[]){let s,o,k,w;for(a=this.options.pedantic?a.replace(/\t/g,"    ").replace(/^ +$/gm,""):a.replace(/^( *)(\t+)/gm,(b,S,C)=>S+"    ".repeat(C.length));a;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(b=>!!(s=b.call({lexer:this},a,i))&&(a=a.substring(s.raw.length),i.push(s),!0))))if(s=this.tokenizer.space(a))a=a.substring(s.raw.length),s.raw.length===1&&i.length>0?i[i.length-1].raw+=`
`:i.push(s);else if(s=this.tokenizer.code(a))a=a.substring(s.raw.length),o=i[i.length-1],!o||o.type!=="paragraph"&&o.type!=="text"?i.push(s):(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text);else if(s=this.tokenizer.fences(a))a=a.substring(s.raw.length),i.push(s);else if(s=this.tokenizer.heading(a))a=a.substring(s.raw.length),i.push(s);else if(s=this.tokenizer.hr(a))a=a.substring(s.raw.length),i.push(s);else if(s=this.tokenizer.blockquote(a))a=a.substring(s.raw.length),i.push(s);else if(s=this.tokenizer.list(a))a=a.substring(s.raw.length),i.push(s);else if(s=this.tokenizer.html(a))a=a.substring(s.raw.length),i.push(s);else if(s=this.tokenizer.def(a))a=a.substring(s.raw.length),o=i[i.length-1],!o||o.type!=="paragraph"&&o.type!=="text"?this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title}):(o.raw+=`
`+s.raw,o.text+=`
`+s.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text);else if(s=this.tokenizer.table(a))a=a.substring(s.raw.length),i.push(s);else if(s=this.tokenizer.lheading(a))a=a.substring(s.raw.length),i.push(s);else{if(k=a,this.options.extensions&&this.options.extensions.startBlock){let b=1/0;const S=a.slice(1);let C;this.options.extensions.startBlock.forEach(function(B){C=B.call({lexer:this},S),typeof C=="number"&&C>=0&&(b=Math.min(b,C))}),b<1/0&&b>=0&&(k=a.substring(0,b+1))}if(this.state.top&&(s=this.tokenizer.paragraph(k)))o=i[i.length-1],w&&o.type==="paragraph"?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):i.push(s),w=k.length!==a.length,a=a.substring(s.raw.length);else if(s=this.tokenizer.text(a))a=a.substring(s.raw.length),o=i[i.length-1],o&&o.type==="text"?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):i.push(s);else if(a){const b="Infinite loop on byte: "+a.charCodeAt(0);if(this.options.silent){console.error(b);break}throw new Error(b)}}return this.state.top=!0,i}inline(a,i=[]){return this.inlineQueue.push({src:a,tokens:i}),i}inlineTokens(a,i=[]){let s,o,k,w,b,S,C=a;if(this.tokens.links){const B=Object.keys(this.tokens.links);if(B.length>0)for(;(w=this.tokenizer.rules.inline.reflinkSearch.exec(C))!=null;)B.includes(w[0].slice(w[0].lastIndexOf("[")+1,-1))&&(C=C.slice(0,w.index)+"["+F("a",w[0].length-2)+"]"+C.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(w=this.tokenizer.rules.inline.blockSkip.exec(C))!=null;)C=C.slice(0,w.index)+"["+F("a",w[0].length-2)+"]"+C.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(w=this.tokenizer.rules.inline.escapedEmSt.exec(C))!=null;)C=C.slice(0,w.index+w[0].length-2)+"++"+C.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;a;)if(b||(S=""),b=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(B=>!!(s=B.call({lexer:this},a,i))&&(a=a.substring(s.raw.length),i.push(s),!0))))if(s=this.tokenizer.escape(a))a=a.substring(s.raw.length),i.push(s);else if(s=this.tokenizer.tag(a))a=a.substring(s.raw.length),o=i[i.length-1],o&&s.type==="text"&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):i.push(s);else if(s=this.tokenizer.link(a))a=a.substring(s.raw.length),i.push(s);else if(s=this.tokenizer.reflink(a,this.tokens.links))a=a.substring(s.raw.length),o=i[i.length-1],o&&s.type==="text"&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):i.push(s);else if(s=this.tokenizer.emStrong(a,C,S))a=a.substring(s.raw.length),i.push(s);else if(s=this.tokenizer.codespan(a))a=a.substring(s.raw.length),i.push(s);else if(s=this.tokenizer.br(a))a=a.substring(s.raw.length),i.push(s);else if(s=this.tokenizer.del(a))a=a.substring(s.raw.length),i.push(s);else if(s=this.tokenizer.autolink(a,nt))a=a.substring(s.raw.length),i.push(s);else if(this.state.inLink||!(s=this.tokenizer.url(a,nt))){if(k=a,this.options.extensions&&this.options.extensions.startInline){let B=1/0;const M=a.slice(1);let z;this.options.extensions.startInline.forEach(function(X){z=X.call({lexer:this},M),typeof z=="number"&&z>=0&&(B=Math.min(B,z))}),B<1/0&&B>=0&&(k=a.substring(0,B+1))}if(s=this.tokenizer.inlineText(k,st))a=a.substring(s.raw.length),s.raw.slice(-1)!=="_"&&(S=s.raw.slice(-1)),b=!0,o=i[i.length-1],o&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):i.push(s);else if(a){const B="Infinite loop on byte: "+a.charCodeAt(0);if(this.options.silent){console.error(B);break}throw new Error(B)}}else a=a.substring(s.raw.length),i.push(s);return i}}class ht{constructor(a){this.options=a||n}code(a,i,s){const o=(i||"").match(/\S*/)[0];if(this.options.highlight){const k=this.options.highlight(a,o);k!=null&&k!==a&&(s=!0,a=k)}return a=a.replace(/\n$/,"")+`
`,o?'<pre><code class="'+this.options.langPrefix+y(o)+'">'+(s?a:y(a,!0))+`</code></pre>
`:"<pre><code>"+(s?a:y(a,!0))+`</code></pre>
`}blockquote(a){return`<blockquote>
${a}</blockquote>
`}html(a){return a}heading(a,i,s,o){return this.options.headerIds?`<h${i} id="${this.options.headerPrefix+o.slug(s)}">${a}</h${i}>
`:`<h${i}>${a}</h${i}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(a,i,s){const o=i?"ol":"ul";return"<"+o+(i&&s!==1?' start="'+s+'"':"")+`>
`+a+"</"+o+`>
`}listitem(a){return`<li>${a}</li>
`}checkbox(a){return"<input "+(a?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(a){return`<p>${a}</p>
`}table(a,i){return i&&(i=`<tbody>${i}</tbody>`),`<table>
<thead>
`+a+`</thead>
`+i+`</table>
`}tablerow(a){return`<tr>
${a}</tr>
`}tablecell(a,i){const s=i.header?"th":"td";return(i.align?`<${s} align="${i.align}">`:`<${s}>`)+a+`</${s}>
`}strong(a){return`<strong>${a}</strong>`}em(a){return`<em>${a}</em>`}codespan(a){return`<code>${a}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(a){return`<del>${a}</del>`}link(a,i,s){if((a=Y(this.options.sanitize,this.options.baseUrl,a))===null)return s;let o='<a href="'+a+'"';return i&&(o+=' title="'+i+'"'),o+=">"+s+"</a>",o}image(a,i,s){if((a=Y(this.options.sanitize,this.options.baseUrl,a))===null)return s;let o=`<img src="${a}" alt="${s}"`;return i&&(o+=` title="${i}"`),o+=this.options.xhtml?"/>":">",o}text(a){return a}}class Ht{strong(a){return a}em(a){return a}codespan(a){return a}del(a){return a}html(a){return a}text(a){return a}link(a,i,s){return""+s}image(a,i,s){return""+s}br(){return""}}class ut{constructor(){this.seen={}}serialize(a){return a.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(a,i){let s=a,o=0;if(this.seen.hasOwnProperty(s)){o=this.seen[a];do o++,s=a+"-"+o;while(this.seen.hasOwnProperty(s))}return i||(this.seen[a]=o,this.seen[s]=0),s}slug(a,i={}){const s=this.serialize(a);return this.getNextSafeSlug(s,i.dryrun)}}class V{constructor(a){this.options=a||n,this.options.renderer=this.options.renderer||new ht,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Ht,this.slugger=new ut}static parse(a,i){return new V(i).parse(a)}static parseInline(a,i){return new V(i).parseInline(a)}parse(a,i=!0){let s,o,k,w,b,S,C,B,M,z,X,ct,lt,mt,q,kt,St,at,ft,J="";const xt=a.length;for(s=0;s<xt;s++)if(z=a[s],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[z.type]&&(ft=this.options.extensions.renderers[z.type].call({parser:this},z),ft!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(z.type)))J+=ft||"";else switch(z.type){case"space":continue;case"hr":J+=this.renderer.hr();continue;case"heading":J+=this.renderer.heading(this.parseInline(z.tokens),z.depth,L(this.parseInline(z.tokens,this.textRenderer)),this.slugger);continue;case"code":J+=this.renderer.code(z.text,z.lang,z.escaped);continue;case"table":for(B="",C="",w=z.header.length,o=0;o<w;o++)C+=this.renderer.tablecell(this.parseInline(z.header[o].tokens),{header:!0,align:z.align[o]});for(B+=this.renderer.tablerow(C),M="",w=z.rows.length,o=0;o<w;o++){for(S=z.rows[o],C="",b=S.length,k=0;k<b;k++)C+=this.renderer.tablecell(this.parseInline(S[k].tokens),{header:!1,align:z.align[k]});M+=this.renderer.tablerow(C)}J+=this.renderer.table(B,M);continue;case"blockquote":M=this.parse(z.tokens),J+=this.renderer.blockquote(M);continue;case"list":for(X=z.ordered,ct=z.start,lt=z.loose,w=z.items.length,M="",o=0;o<w;o++)q=z.items[o],kt=q.checked,St=q.task,mt="",q.task&&(at=this.renderer.checkbox(kt),lt?q.tokens.length>0&&q.tokens[0].type==="paragraph"?(q.tokens[0].text=at+" "+q.tokens[0].text,q.tokens[0].tokens&&q.tokens[0].tokens.length>0&&q.tokens[0].tokens[0].type==="text"&&(q.tokens[0].tokens[0].text=at+" "+q.tokens[0].tokens[0].text)):q.tokens.unshift({type:"text",text:at}):mt+=at),mt+=this.parse(q.tokens,lt),M+=this.renderer.listitem(mt,St,kt);J+=this.renderer.list(M,X,ct);continue;case"html":J+=this.renderer.html(z.text);continue;case"paragraph":J+=this.renderer.paragraph(this.parseInline(z.tokens));continue;case"text":for(M=z.tokens?this.parseInline(z.tokens):z.text;s+1<xt&&a[s+1].type==="text";)z=a[++s],M+=`
`+(z.tokens?this.parseInline(z.tokens):z.text);J+=i?this.renderer.paragraph(M):M;continue;default:{const Et='Token with "'+z.type+'" type was not found.';if(this.options.silent)return void console.error(Et);throw new Error(Et)}}return J}parseInline(a,i){i=i||this.renderer;let s,o,k,w="";const b=a.length;for(s=0;s<b;s++)if(o=a[s],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]&&(k=this.options.extensions.renderers[o.type].call({parser:this},o),k!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)))w+=k||"";else switch(o.type){case"escape":case"text":w+=i.text(o.text);break;case"html":w+=i.html(o.text);break;case"link":w+=i.link(o.href,o.title,this.parseInline(o.tokens,i));break;case"image":w+=i.image(o.href,o.title,o.text);break;case"strong":w+=i.strong(this.parseInline(o.tokens,i));break;case"em":w+=i.em(this.parseInline(o.tokens,i));break;case"codespan":w+=i.codespan(o.text);break;case"br":w+=i.br();break;case"del":w+=i.del(this.parseInline(o.tokens,i));break;default:{const S='Token with "'+o.type+'" type was not found.';if(this.options.silent)return void console.error(S);throw new Error(S)}}return w}}class gt{constructor(a){this.options=a||n}preprocess(a){return a}postprocess(a){return a}}te(gt,"passThroughHooks",new Set(["preprocess","postprocess"]));function It(_,a){return(i,s,o)=>{typeof s=="function"&&(o=s,s=null);const k={...s},w=function(b,S,C){return B=>{if(B.message+=`
Please report this to https://github.com/markedjs/marked.`,b){const M="<p>An error occurred:</p><pre>"+y(B.message+"",!0)+"</pre>";return S?Promise.resolve(M):C?void C(null,M):M}if(S)return Promise.reject(B);if(!C)throw B;C(B)}}((s={...H.defaults,...k}).silent,s.async,o);if(i==null)return w(new Error("marked(): input parameter is undefined or null"));if(typeof i!="string")return w(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(i)+", string expected"));if(function(b){b&&b.sanitize&&!b.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}(s),s.hooks&&(s.hooks.options=s),o){const b=s.highlight;let S;try{s.hooks&&(i=s.hooks.preprocess(i)),S=_(i,s)}catch(M){return w(M)}const C=function(M){let z;if(!M)try{s.walkTokens&&H.walkTokens(S,s.walkTokens),z=a(S,s),s.hooks&&(z=s.hooks.postprocess(z))}catch(X){M=X}return s.highlight=b,M?w(M):o(null,z)};if(!b||b.length<3||(delete s.highlight,!S.length))return C();let B=0;return H.walkTokens(S,function(M){M.type==="code"&&(B++,setTimeout(()=>{b(M.text,M.lang,function(z,X){if(z)return C(z);X!=null&&X!==M.text&&(M.text=X,M.escaped=!0),B--,B===0&&C()})},0))}),void(B===0&&C())}if(s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(i):i).then(b=>_(b,s)).then(b=>s.walkTokens?Promise.all(H.walkTokens(b,s.walkTokens)).then(()=>b):b).then(b=>a(b,s)).then(b=>s.hooks?s.hooks.postprocess(b):b).catch(w);try{s.hooks&&(i=s.hooks.preprocess(i));const b=_(i,s);s.walkTokens&&H.walkTokens(b,s.walkTokens);let S=a(b,s);return s.hooks&&(S=s.hooks.postprocess(S)),S}catch(b){return w(b)}}}function H(_,a,i){return It(K.lex,V.parse)(_,a,i)}return H.options=H.setOptions=function(_){var a;return H.defaults={...H.defaults,..._},a=H.defaults,n=a,H},H.getDefaults=e,H.defaults=n,H.use=function(..._){const a=H.defaults.extensions||{renderers:{},childTokens:{}};_.forEach(i=>{const s={...i};if(s.async=H.defaults.async||s.async||!1,i.extensions&&(i.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if(o.renderer){const k=a.renderers[o.name];a.renderers[o.name]=k?function(...w){let b=o.renderer.apply(this,w);return b===!1&&(b=k.apply(this,w)),b}:o.renderer}if(o.tokenizer){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");a[o.level]?a[o.level].unshift(o.tokenizer):a[o.level]=[o.tokenizer],o.start&&(o.level==="block"?a.startBlock?a.startBlock.push(o.start):a.startBlock=[o.start]:o.level==="inline"&&(a.startInline?a.startInline.push(o.start):a.startInline=[o.start]))}o.childTokens&&(a.childTokens[o.name]=o.childTokens)}),s.extensions=a),i.renderer){const o=H.defaults.renderer||new ht;for(const k in i.renderer){const w=o[k];o[k]=(...b)=>{let S=i.renderer[k].apply(o,b);return S===!1&&(S=w.apply(o,b)),S}}s.renderer=o}if(i.tokenizer){const o=H.defaults.tokenizer||new D;for(const k in i.tokenizer){const w=o[k];o[k]=(...b)=>{let S=i.tokenizer[k].apply(o,b);return S===!1&&(S=w.apply(o,b)),S}}s.tokenizer=o}if(i.hooks){const o=H.defaults.hooks||new gt;for(const k in i.hooks){const w=o[k];gt.passThroughHooks.has(k)?o[k]=b=>{if(H.defaults.async)return Promise.resolve(i.hooks[k].call(o,b)).then(C=>w.call(o,C));const S=i.hooks[k].call(o,b);return w.call(o,S)}:o[k]=(...b)=>{let S=i.hooks[k].apply(o,b);return S===!1&&(S=w.apply(o,b)),S}}s.hooks=o}if(i.walkTokens){const o=H.defaults.walkTokens;s.walkTokens=function(k){let w=[];return w.push(i.walkTokens.call(this,k)),o&&(w=w.concat(o.call(this,k))),w}}H.setOptions(s)})},H.walkTokens=function(_,a){let i=[];for(const s of _)switch(i=i.concat(a.call(H,s)),s.type){case"table":for(const o of s.header)i=i.concat(H.walkTokens(o.tokens,a));for(const o of s.rows)for(const k of o)i=i.concat(H.walkTokens(k.tokens,a));break;case"list":i=i.concat(H.walkTokens(s.items,a));break;default:H.defaults.extensions&&H.defaults.extensions.childTokens&&H.defaults.extensions.childTokens[s.type]?H.defaults.extensions.childTokens[s.type].forEach(function(o){i=i.concat(H.walkTokens(s[o],a))}):s.tokens&&(i=i.concat(H.walkTokens(s.tokens,a)))}return i},H.parseInline=It(K.lexInline,V.parseInline),H.Parser=V,H.parser=V.parse,H.Renderer=ht,H.TextRenderer=Ht,H.Lexer=K,H.lexer=K.lex,H.Tokenizer=D,H.Slugger=ut,H.Hooks=gt,H.parse=H,H.options,H.setOptions,H.use,H.walkTokens,H.parseInline,V.parse,K.lex,()=>{let _,a,i=null;function s(){if(i&&!i.closed)i.focus();else{if(i=window.open("about:blank","reveal.js - Notes","width=1100,height=700"),i.marked=H,i.document.write(`<!--
	NOTE: You need to build the notes plugin after making changes to this file.
-->
<html lang="en">
	<head>
		<meta charset="utf-8">

		<title>reveal.js - Speaker View</title>

		<style>
			body {
				font-family: Helvetica;
				font-size: 18px;
			}

			#current-slide,
			#upcoming-slide,
			#speaker-controls {
				padding: 6px;
				box-sizing: border-box;
				-moz-box-sizing: border-box;
			}

			#current-slide iframe,
			#upcoming-slide iframe {
				width: 100%;
				height: 100%;
				border: 1px solid #ddd;
			}

			#current-slide .label,
			#upcoming-slide .label {
				position: absolute;
				top: 10px;
				left: 10px;
				z-index: 2;
			}

			#connection-status {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 20;
				padding: 30% 20% 20% 20%;
				font-size: 18px;
				color: #222;
				background: #fff;
				text-align: center;
				box-sizing: border-box;
				line-height: 1.4;
			}

			.overlay-element {
				height: 34px;
				line-height: 34px;
				padding: 0 10px;
				text-shadow: none;
				background: rgba( 220, 220, 220, 0.8 );
				color: #222;
				font-size: 14px;
			}

			.overlay-element.interactive:hover {
				background: rgba( 220, 220, 220, 1 );
			}

			#current-slide {
				position: absolute;
				width: 60%;
				height: 100%;
				top: 0;
				left: 0;
				padding-right: 0;
			}

			#upcoming-slide {
				position: absolute;
				width: 40%;
				height: 40%;
				right: 0;
				top: 0;
			}

			/* Speaker controls */
			#speaker-controls {
				position: absolute;
				top: 40%;
				right: 0;
				width: 40%;
				height: 60%;
				overflow: auto;
				font-size: 18px;
			}

				.speaker-controls-time.hidden,
				.speaker-controls-notes.hidden {
					display: none;
				}

				.speaker-controls-time .label,
				.speaker-controls-pace .label,
				.speaker-controls-notes .label {
					text-transform: uppercase;
					font-weight: normal;
					font-size: 0.66em;
					color: #666;
					margin: 0;
				}

				.speaker-controls-time, .speaker-controls-pace {
					border-bottom: 1px solid rgba( 200, 200, 200, 0.5 );
					margin-bottom: 10px;
					padding: 10px 16px;
					padding-bottom: 20px;
					cursor: pointer;
				}

				.speaker-controls-time .reset-button {
					opacity: 0;
					float: right;
					color: #666;
					text-decoration: none;
				}
				.speaker-controls-time:hover .reset-button {
					opacity: 1;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock {
					width: 50%;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock,
				.speaker-controls-time .pacing .hours-value,
				.speaker-controls-time .pacing .minutes-value,
				.speaker-controls-time .pacing .seconds-value {
					font-size: 1.9em;
				}

				.speaker-controls-time .timer {
					float: left;
				}

				.speaker-controls-time .clock {
					float: right;
					text-align: right;
				}

				.speaker-controls-time span.mute {
					opacity: 0.3;
				}

				.speaker-controls-time .pacing-title {
					margin-top: 5px;
				}

				.speaker-controls-time .pacing.ahead {
					color: blue;
				}

				.speaker-controls-time .pacing.on-track {
					color: green;
				}

				.speaker-controls-time .pacing.behind {
					color: red;
				}

				.speaker-controls-notes {
					padding: 10px 16px;
				}

				.speaker-controls-notes .value {
					margin-top: 5px;
					line-height: 1.4;
					font-size: 1.2em;
				}

			/* Layout selector */
			#speaker-layout {
				position: absolute;
				top: 10px;
				right: 10px;
				color: #222;
				z-index: 10;
			}
				#speaker-layout select {
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					border: 0;
					box-shadow: 0;
					cursor: pointer;
					opacity: 0;

					font-size: 1em;
					background-color: transparent;

					-moz-appearance: none;
					-webkit-appearance: none;
					-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
				}

				#speaker-layout select:focus {
					outline: none;
					box-shadow: none;
				}

			.clear {
				clear: both;
			}

			/* Speaker layout: Wide */
			body[data-speaker-layout="wide"] #current-slide,
			body[data-speaker-layout="wide"] #upcoming-slide {
				width: 50%;
				height: 45%;
				padding: 6px;
			}

			body[data-speaker-layout="wide"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="wide"] #upcoming-slide {
				top: 0;
				left: 50%;
			}

			body[data-speaker-layout="wide"] #speaker-controls {
				top: 45%;
				left: 0;
				width: 100%;
				height: 50%;
				font-size: 1.25em;
			}

			/* Speaker layout: Tall */
			body[data-speaker-layout="tall"] #current-slide,
			body[data-speaker-layout="tall"] #upcoming-slide {
				width: 45%;
				height: 50%;
				padding: 6px;
			}

			body[data-speaker-layout="tall"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="tall"] #upcoming-slide {
				top: 50%;
				left: 0;
			}

			body[data-speaker-layout="tall"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 45%;
				width: 55%;
				height: 100%;
				font-size: 1.25em;
			}

			/* Speaker layout: Notes only */
			body[data-speaker-layout="notes-only"] #current-slide,
			body[data-speaker-layout="notes-only"] #upcoming-slide {
				display: none;
			}

			body[data-speaker-layout="notes-only"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				font-size: 1.25em;
			}

			@media screen and (max-width: 1080px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 16px;
				}
			}

			@media screen and (max-width: 900px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 14px;
				}
			}

			@media screen and (max-width: 800px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 12px;
				}
			}

		</style>
	</head>

	<body>

		<div id="connection-status">Loading speaker view...</div>

		<div id="current-slide"></div>
		<div id="upcoming-slide"><span class="overlay-element label">Upcoming</span></div>
		<div id="speaker-controls">
			<div class="speaker-controls-time">
				<h4 class="label">Time <span class="reset-button">Click to Reset</span></h4>
				<div class="clock">
					<span class="clock-value">0:00 AM</span>
				</div>
				<div class="timer">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
				<div class="clear"></div>

				<h4 class="label pacing-title" style="display: none">Pacing – Time to finish current slide</h4>
				<div class="pacing" style="display: none">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
			</div>

			<div class="speaker-controls-notes hidden">
				<h4 class="label">Notes</h4>
				<div class="value"></div>
			</div>
		</div>
		<div id="speaker-layout" class="overlay-element interactive">
			<span class="speaker-layout-label"></span>
			<select class="speaker-layout-dropdown"></select>
		</div>

		<script>

			(function() {

				var notes,
					notesValue,
					currentState,
					currentSlide,
					upcomingSlide,
					layoutLabel,
					layoutDropdown,
					pendingCalls = {},
					lastRevealApiCallId = 0,
					connected = false

				var connectionStatus = document.querySelector( '#connection-status' );

				var SPEAKER_LAYOUTS = {
					'default': 'Default',
					'wide': 'Wide',
					'tall': 'Tall',
					'notes-only': 'Notes only'
				};

				setupLayout();

				let openerOrigin;

				try {
					openerOrigin = window.opener.location.origin;
				}
				catch ( error ) { console.warn( error ) }

				// In order to prevent XSS, the speaker view will only run if its
				// opener has the same origin as itself
				if( window.location.origin !== openerOrigin ) {
					connectionStatus.innerHTML = 'Cross origin error.<br>The speaker window can only be opened from the same origin.';
					return;
				}

				var connectionTimeout = setTimeout( function() {
					connectionStatus.innerHTML = 'Error connecting to main window.<br>Please try closing and reopening the speaker view.';
				}, 5000 );

				window.addEventListener( 'message', function( event ) {

					// Validate the origin of all messages to avoid parsing messages
					// that aren't meant for us. Ignore when running off file:// so
					// that the speaker view continues to work without a web server.
					if( window.location.origin !== event.origin && window.location.origin !== 'file://' ) {
						return
					}

					clearTimeout( connectionTimeout );
					connectionStatus.style.display = 'none';

					var data = JSON.parse( event.data );

					// The overview mode is only useful to the reveal.js instance
					// where navigation occurs so we don't sync it
					if( data.state ) delete data.state.overview;

					// Messages sent by the notes plugin inside of the main window
					if( data && data.namespace === 'reveal-notes' ) {
						if( data.type === 'connect' ) {
							handleConnectMessage( data );
						}
						else if( data.type === 'state' ) {
							handleStateMessage( data );
						}
						else if( data.type === 'return' ) {
							pendingCalls[data.callId](data.result);
							delete pendingCalls[data.callId];
						}
					}
					// Messages sent by the reveal.js inside of the current slide preview
					else if( data && data.namespace === 'reveal' ) {
						const supportedEvents = [
							'slidechanged',
							'fragmentshown',
							'fragmenthidden',
							'paused',
							'resumed',
							'previewiframe',
							'previewimage',
							'previewvideo',
							'closeoverlay'
						];

						if( /ready/.test( data.eventName ) ) {
							// Send a message back to notify that the handshake is complete
							window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'connected'} ), '*' );
						}
						else if( supportedEvents.includes( data.eventName ) && currentState !== JSON.stringify( data.state ) ) {
							dispatchStateToMainWindow( data.state );
						}
					}

				} );

				/**
				 * Updates the presentation in the main window to match the state
				 * of the presentation in the notes window.
				 */
				const dispatchStateToMainWindow = debounce(( state ) => {
					window.opener.postMessage( JSON.stringify({ method: 'setState', args: [ state ]} ), '*' );
				}, 500);

				/**
				 * Asynchronously calls the Reveal.js API of the main frame.
				 */
				function callRevealApi( methodName, methodArguments, callback ) {

					var callId = ++lastRevealApiCallId;
					pendingCalls[callId] = callback;
					window.opener.postMessage( JSON.stringify( {
						namespace: 'reveal-notes',
						type: 'call',
						callId: callId,
						methodName: methodName,
						arguments: methodArguments
					} ), '*' );

				}

				/**
				 * Called when the main window is trying to establish a
				 * connection.
				 */
				function handleConnectMessage( data ) {

					if( connected === false ) {
						connected = true;

						setupIframes( data );
						setupKeyboard();
						setupNotes();
						setupTimer();
						setupHeartbeat();
					}

				}

				/**
				 * Called when the main window sends an updated state.
				 */
				function handleStateMessage( data ) {

					// Store the most recently set state to avoid circular loops
					// applying the same state
					currentState = JSON.stringify( data.state );

					// No need for updating the notes in case of fragment changes
					if ( data.notes ) {
						notes.classList.remove( 'hidden' );
						notesValue.style.whiteSpace = data.whitespace;
						if( data.markdown ) {
							notesValue.innerHTML = marked( data.notes );
						}
						else {
							notesValue.innerHTML = data.notes;
						}
					}
					else {
						notes.classList.add( 'hidden' );
					}

					// Don't show lightboxes in the upcoming slide
					const { previewVideo, previewImage, previewIframe, ...upcomingState } = data.state;

					// Update the note slides
					currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ upcomingState ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'next' }), '*' );

				}

				// Limit to max one state update per X ms
				handleStateMessage = debounce( handleStateMessage, 200 );

				/**
				 * Forward keyboard events to the current slide window.
				 * This enables keyboard events to work even if focus
				 * isn't set on the current slide iframe.
				 *
				 * Block F5 default handling, it reloads and disconnects
				 * the speaker notes window.
				 */
				function setupKeyboard() {

					document.addEventListener( 'keydown', function( event ) {
						if( event.keyCode === 116 || ( event.metaKey && event.keyCode === 82 ) ) {
							event.preventDefault();
							return false;
						}
						currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'triggerKey', args: [ event.keyCode ] }), '*' );
					} );

				}

				/**
				 * Creates the preview iframes.
				 */
				function setupIframes( data ) {

					var params = [
						'receiver',
						'progress=false',
						'history=false',
						'transition=none',
						'autoSlide=0',
						'backgroundTransition=none'
					].join( '&' );

					var urlSeparator = /\\?/.test(data.url) ? '&' : '?';
					var hash = '#/' + data.state.indexh + '/' + data.state.indexv;
					var currentURL = data.url + urlSeparator + params + '&scrollActivationWidth=false&postMessageEvents=true' + hash;
					var upcomingURL = data.url + urlSeparator + params + '&scrollActivationWidth=false&controls=false' + hash;

					currentSlide = document.createElement( 'iframe' );
					currentSlide.setAttribute( 'width', 1280 );
					currentSlide.setAttribute( 'height', 1024 );
					currentSlide.setAttribute( 'src', currentURL );
					document.querySelector( '#current-slide' ).appendChild( currentSlide );

					upcomingSlide = document.createElement( 'iframe' );
					upcomingSlide.setAttribute( 'width', 640 );
					upcomingSlide.setAttribute( 'height', 512 );
					upcomingSlide.setAttribute( 'src', upcomingURL );
					document.querySelector( '#upcoming-slide' ).appendChild( upcomingSlide );

				}

				/**
				 * Setup the notes UI.
				 */
				function setupNotes() {

					notes = document.querySelector( '.speaker-controls-notes' );
					notesValue = document.querySelector( '.speaker-controls-notes .value' );

				}

				/**
				 * We send out a heartbeat at all times to ensure we can
				 * reconnect with the main presentation window after reloads.
				 */
				function setupHeartbeat() {

					setInterval( () => {
						window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'heartbeat'} ), '*' );
					}, 1000 );

				}

				function getTimings( callback ) {

					callRevealApi( 'getSlidesAttributes', [], function ( slideAttributes ) {
						callRevealApi( 'getConfig', [], function ( config ) {
							var totalTime = config.totalTime;
							var minTimePerSlide = config.minimumTimePerSlide || 0;
							var defaultTiming = config.defaultTiming;
							if ((defaultTiming == null) && (totalTime == null)) {
								callback(null);
								return;
							}
							// Setting totalTime overrides defaultTiming
							if (totalTime) {
								defaultTiming = 0;
							}
							var timings = [];
							for ( var i in slideAttributes ) {
								var slide = slideAttributes[ i ];
								var timing = defaultTiming;
								if( slide.hasOwnProperty( 'data-timing' )) {
									var t = slide[ 'data-timing' ];
									timing = parseInt(t);
									if( isNaN(timing) ) {
										console.warn("Could not parse timing '" + t + "' of slide " + i + "; using default of " + defaultTiming);
										timing = defaultTiming;
									}
								}
								timings.push(timing);
							}
							if ( totalTime ) {
								// After we've allocated time to individual slides, we summarize it and
								// subtract it from the total time
								var remainingTime = totalTime - timings.reduce( function(a, b) { return a + b; }, 0 );
								// The remaining time is divided by the number of slides that have 0 seconds
								// allocated at the moment, giving the average time-per-slide on the remaining slides
								var remainingSlides = (timings.filter( function(x) { return x == 0 }) ).length
								var timePerSlide = Math.round( remainingTime / remainingSlides, 0 )
								// And now we replace every zero-value timing with that average
								timings = timings.map( function(x) { return (x==0 ? timePerSlide : x) } );
							}
							var slidesUnderMinimum = timings.filter( function(x) { return (x < minTimePerSlide) } ).length
							if ( slidesUnderMinimum ) {
								message = "The pacing time for " + slidesUnderMinimum + " slide(s) is under the configured minimum of " + minTimePerSlide + " seconds. Check the data-timing attribute on individual slides, or consider increasing the totalTime or minimumTimePerSlide configuration options (or removing some slides).";
								alert(message);
							}
							callback( timings );
						} );
					} );

				}

				/**
				 * Return the number of seconds allocated for presenting
				 * all slides up to and including this one.
				 */
				function getTimeAllocated( timings, callback ) {

					callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
						var allocated = 0;
						for (var i in timings.slice(0, currentSlide + 1)) {
							allocated += timings[i];
						}
						callback( allocated );
					} );

				}

				/**
				 * Create the timer and clock and start updating them
				 * at an interval.
				 */
				function setupTimer() {

					var start = new Date(),
					timeEl = document.querySelector( '.speaker-controls-time' ),
					clockEl = timeEl.querySelector( '.clock-value' ),
					hoursEl = timeEl.querySelector( '.hours-value' ),
					minutesEl = timeEl.querySelector( '.minutes-value' ),
					secondsEl = timeEl.querySelector( '.seconds-value' ),
					pacingTitleEl = timeEl.querySelector( '.pacing-title' ),
					pacingEl = timeEl.querySelector( '.pacing' ),
					pacingHoursEl = pacingEl.querySelector( '.hours-value' ),
					pacingMinutesEl = pacingEl.querySelector( '.minutes-value' ),
					pacingSecondsEl = pacingEl.querySelector( '.seconds-value' );

					var timings = null;
					getTimings( function ( _timings ) {

						timings = _timings;
						if (_timings !== null) {
							pacingTitleEl.style.removeProperty('display');
							pacingEl.style.removeProperty('display');
						}

						// Update once directly
						_updateTimer();

						// Then update every second
						setInterval( _updateTimer, 1000 );

					} );


					function _resetTimer() {

						if (timings == null) {
							start = new Date();
							_updateTimer();
						}
						else {
							// Reset timer to beginning of current slide
							getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
								var slideEndTiming = slideEndTimingSeconds * 1000;
								callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
									var currentSlideTiming = timings[currentSlide] * 1000;
									var previousSlidesTiming = slideEndTiming - currentSlideTiming;
									var now = new Date();
									start = new Date(now.getTime() - previousSlidesTiming);
									_updateTimer();
								} );
							} );
						}

					}

					timeEl.addEventListener( 'click', function() {
						_resetTimer();
						return false;
					} );

					function _displayTime( hrEl, minEl, secEl, time) {

						var sign = Math.sign(time) == -1 ? "-" : "";
						time = Math.abs(Math.round(time / 1000));
						var seconds = time % 60;
						var minutes = Math.floor( time / 60 ) % 60 ;
						var hours = Math.floor( time / ( 60 * 60 )) ;
						hrEl.innerHTML = sign + zeroPadInteger( hours );
						if (hours == 0) {
							hrEl.classList.add( 'mute' );
						}
						else {
							hrEl.classList.remove( 'mute' );
						}
						minEl.innerHTML = ':' + zeroPadInteger( minutes );
						if (hours == 0 && minutes == 0) {
							minEl.classList.add( 'mute' );
						}
						else {
							minEl.classList.remove( 'mute' );
						}
						secEl.innerHTML = ':' + zeroPadInteger( seconds );
					}

					function _updateTimer() {

						var diff, hours, minutes, seconds,
						now = new Date();

						diff = now.getTime() - start.getTime();

						clockEl.innerHTML = now.toLocaleTimeString( 'en-US', { hour12: true, hour: '2-digit', minute:'2-digit' } );
						_displayTime( hoursEl, minutesEl, secondsEl, diff );
						if (timings !== null) {
							_updatePacing(diff);
						}

					}

					function _updatePacing(diff) {

						getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
							var slideEndTiming = slideEndTimingSeconds * 1000;

							callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
								var currentSlideTiming = timings[currentSlide] * 1000;
								var timeLeftCurrentSlide = slideEndTiming - diff;
								if (timeLeftCurrentSlide < 0) {
									pacingEl.className = 'pacing behind';
								}
								else if (timeLeftCurrentSlide < currentSlideTiming) {
									pacingEl.className = 'pacing on-track';
								}
								else {
									pacingEl.className = 'pacing ahead';
								}
								_displayTime( pacingHoursEl, pacingMinutesEl, pacingSecondsEl, timeLeftCurrentSlide );
							} );
						} );
					}

				}

				/**
				 * Sets up the speaker view layout and layout selector.
				 */
				function setupLayout() {

					layoutDropdown = document.querySelector( '.speaker-layout-dropdown' );
					layoutLabel = document.querySelector( '.speaker-layout-label' );

					// Render the list of available layouts
					for( var id in SPEAKER_LAYOUTS ) {
						var option = document.createElement( 'option' );
						option.setAttribute( 'value', id );
						option.textContent = SPEAKER_LAYOUTS[ id ];
						layoutDropdown.appendChild( option );
					}

					// Monitor the dropdown for changes
					layoutDropdown.addEventListener( 'change', function( event ) {

						setLayout( layoutDropdown.value );

					}, false );

					// Restore any currently persisted layout
					setLayout( getLayout() );

				}

				/**
				 * Sets a new speaker view layout. The layout is persisted
				 * in local storage.
				 */
				function setLayout( value ) {

					var title = SPEAKER_LAYOUTS[ value ];

					layoutLabel.innerHTML = 'Layout' + ( title ? ( ': ' + title ) : '' );
					layoutDropdown.value = value;

					document.body.setAttribute( 'data-speaker-layout', value );

					// Persist locally
					if( supportsLocalStorage() ) {
						window.localStorage.setItem( 'reveal-speaker-layout', value );
					}

				}

				/**
				 * Returns the ID of the most recently set speaker layout
				 * or our default layout if none has been set.
				 */
				function getLayout() {

					if( supportsLocalStorage() ) {
						var layout = window.localStorage.getItem( 'reveal-speaker-layout' );
						if( layout ) {
							return layout;
						}
					}

					// Default to the first record in the layouts hash
					for( var id in SPEAKER_LAYOUTS ) {
						return id;
					}

				}

				function supportsLocalStorage() {

					try {
						localStorage.setItem('test', 'test');
						localStorage.removeItem('test');
						return true;
					}
					catch( e ) {
						return false;
					}

				}

				function zeroPadInteger( num ) {

					var str = '00' + parseInt( num );
					return str.substring( str.length - 2 );

				}

				/**
				 * Limits the frequency at which a function can be called.
				 */
				function debounce( fn, ms ) {

					var lastTime = 0,
						timeout;

					return function() {

						var args = arguments;
						var context = this;

						clearTimeout( timeout );

						var timeSinceLastCall = Date.now() - lastTime;
						if( timeSinceLastCall > ms ) {
							fn.apply( context, args );
							lastTime = Date.now();
						}
						else {
							timeout = setTimeout( function() {
								fn.apply( context, args );
								lastTime = Date.now();
							}, ms - timeSinceLastCall );
						}

					}

				}

			})();

		<\/script>
	</body>
</html>`),!i)return void alert("Speaker view popup failed to open. Please make sure popups are allowed and reopen the speaker view.");(function(){const b=a.getConfig().url,S=typeof b=="string"?b:window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search;_=setInterval(function(){i.postMessage(JSON.stringify({namespace:"reveal-notes",type:"connect",state:a.getState(),url:S}),"*")},500),window.addEventListener("message",k)})()}}function o(b){let S=a.getCurrentSlide(),C=S.querySelectorAll("aside.notes"),B=S.querySelector(".current-fragment"),M={namespace:"reveal-notes",type:"state",notes:"",markdown:!1,whitespace:"normal",state:a.getState()};if(S.hasAttribute("data-notes")&&(M.notes=S.getAttribute("data-notes"),M.whitespace="pre-wrap"),B){let z=B.querySelector("aside.notes");z?(M.notes=z.innerHTML,M.markdown=typeof z.getAttribute("data-markdown")=="string",C=null):B.hasAttribute("data-notes")&&(M.notes=B.getAttribute("data-notes"),M.whitespace="pre-wrap",C=null)}C&&C.length&&(C=Array.from(C).filter(z=>z.closest(".fragment")===null),M.notes=C.map(z=>z.innerHTML).join(`
`),M.markdown=C[0]&&typeof C[0].getAttribute("data-markdown")=="string"),i.postMessage(JSON.stringify(M),"*")}function k(b){if(function(S){try{return window.location.origin===S.source.location.origin}catch{return!1}}(b))try{let S=JSON.parse(b.data);S&&S.namespace==="reveal-notes"&&S.type==="connected"?(clearInterval(_),w()):S&&S.namespace==="reveal-notes"&&S.type==="call"&&function(C,B,M){let z=a[C].apply(a,B);i.postMessage(JSON.stringify({namespace:"reveal-notes",type:"return",result:z,callId:M}),"*")}(S.methodName,S.arguments,S.callId)}catch{}}function w(){a.on("slidechanged",o),a.on("fragmentshown",o),a.on("fragmenthidden",o),a.on("overviewhidden",o),a.on("overviewshown",o),a.on("paused",o),a.on("resumed",o),a.on("previewiframe",o),a.on("previewimage",o),a.on("previewvideo",o),a.on("closeoverlay",o),o()}return{id:"notes",init:function(b){a=b,/receiver/i.test(window.location.search)||(window.location.search.match(/(\?|\&)notes/gi)!==null?s():window.addEventListener("message",S=>{if(!i&&typeof S.data=="string"){let B;try{B=JSON.parse(S.data)}catch{}B&&B.namespace==="reveal-notes"&&B.type==="heartbeat"&&(C=S.source,i&&!i.closed?i.focus():(i=C,window.addEventListener("message",k),w()))}var C}),a.addKeyBinding({keyCode:83,key:"S",description:"Speaker notes view"},function(){s()}))},open:s}}})}(Vt)),Vt.exports}var mn=gn();const fn=_e(mn);var Wt={exports:{}},vn=Wt.exports,Ie;function yn(){return Ie||(Ie=1,function(f,t){(function(e,n){f.exports=n()})(vn,function(){/*!
* reveal.js Zoom plugin
*/const e={id:"zoom",init:function(r){r.getRevealElement().addEventListener("mousedown",function(l){var d=/Linux/.test(window.navigator.platform)?"ctrl":"alt",g=(r.getConfig().zoomKey?r.getConfig().zoomKey:d)+"Key",c=r.getConfig().zoomLevel?r.getConfig().zoomLevel:2;l[g]&&!r.isOverview()&&(l.preventDefault(),n.to({x:l.clientX,y:l.clientY,scale:c,pan:!1}))})},destroy:()=>{n.reset()}};var n=function(){var r=1,l=0,d=0,g=-1,c=-1,I="transform"in document.body.style;function y(v,P){var u=L();if(v.width=v.width||1,v.height=v.height||1,v.x-=(window.innerWidth-v.width*P)/2,v.y-=(window.innerHeight-v.height*P)/2,I)if(P===1)document.body.style.transform="";else{var ot=u.x+"px "+u.y+"px",Y="translate("+-v.x+"px,"+-v.y+"px) scale("+P+")";document.body.style.transformOrigin=ot,document.body.style.transform=Y}else P===1?(document.body.style.position="",document.body.style.left="",document.body.style.top="",document.body.style.width="",document.body.style.height="",document.body.style.zoom=""):(document.body.style.position="relative",document.body.style.left=-(u.x+v.x)/P+"px",document.body.style.top=-(u.y+v.y)/P+"px",document.body.style.width=100*P+"%",document.body.style.height=100*P+"%",document.body.style.zoom=P);r=P,document.documentElement.classList&&(r!==1?document.documentElement.classList.add("zoomed"):document.documentElement.classList.remove("zoomed"))}function x(){var v=.12*window.innerWidth,P=.12*window.innerHeight,u=L();d<P?window.scroll(u.x,u.y-14/r*(1-d/P)):d>window.innerHeight-P&&window.scroll(u.x,u.y+(1-(window.innerHeight-d)/P)*(14/r)),l<v?window.scroll(u.x-14/r*(1-l/v),u.y):l>window.innerWidth-v&&window.scroll(u.x+(1-(window.innerWidth-l)/v)*(14/r),u.y)}function L(){return{x:window.scrollX!==void 0?window.scrollX:window.pageXOffset,y:window.scrollY!==void 0?window.scrollY:window.pageYOffset}}return I&&(document.body.style.transition="transform 0.8s ease"),document.addEventListener("keyup",function(v){r!==1&&v.keyCode===27&&n.out()}),document.addEventListener("mousemove",function(v){r!==1&&(l=v.clientX,d=v.clientY)}),{to:function(v){if(r!==1)n.out();else{if(v.x=v.x||0,v.y=v.y||0,v.element){var P=v.element.getBoundingClientRect();v.x=P.left-20,v.y=P.top-20,v.width=P.width+40,v.height=P.height+40}v.width!==void 0&&v.height!==void 0&&(v.scale=Math.max(Math.min(window.innerWidth/v.width,window.innerHeight/v.height),1)),v.scale>1&&(v.x*=v.scale,v.y*=v.scale,y(v,v.scale),v.pan!==!1&&(g=setTimeout(function(){c=setInterval(x,1e3/60)},800)))}},out:function(){clearTimeout(g),clearInterval(c),y({x:0,y:0},1),r=1},magnify:function(v){this.to(v)},reset:function(){this.out()},zoomLevel:function(){return r}}}();/*!
	 * zoom.js 0.3 (modified for use with reveal.js)
	 * http://lab.hakim.se/zoom-js
	 * MIT licensed
	 *
	 * Copyright (C) 2011-2014 Hakim El Hattab, http://hakim.se
	 */return()=>e})}(Wt)),Wt.exports}var bn=yn();const wn=_e(bn),kn=new Lt;kn.initialize({hash:!0,slideNumber:!0,plugins:[fn,wn]});
