var background=function(){"use strict";function $(s){return s==null||typeof s=="function"?{main:s}:s}var O=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function F(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var P={exports:{}};(function(s,M){(function(b,c){c(s)})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:O,function(b){if(!(globalThis.chrome&&globalThis.chrome.runtime&&globalThis.chrome.runtime.id))throw new Error("This script should only be loaded in a browser extension.");if(globalThis.browser&&globalThis.browser.runtime&&globalThis.browser.runtime.id)b.exports=globalThis.browser;else{const c="The message port closed before a response was received.",D=x=>{const C={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(C).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class B extends WeakMap{constructor(r,g=void 0){super(g),this.createItem=r}get(r){return this.has(r)||this.set(r,this.createItem(r)),super.get(r)}}const I=e=>e&&typeof e=="object"&&typeof e.then=="function",_=(e,r)=>(...g)=>{x.runtime.lastError?e.reject(new Error(x.runtime.lastError.message)):r.singleCallbackArg||g.length<=1&&r.singleCallbackArg!==!1?e.resolve(g[0]):e.resolve(g)},h=e=>e==1?"argument":"arguments",q=(e,r)=>function(t,...i){if(i.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${h(r.minArgs)} for ${e}(), got ${i.length}`);if(i.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${h(r.maxArgs)} for ${e}(), got ${i.length}`);return new Promise((m,o)=>{if(r.fallbackToNoCallback)try{t[e](...i,_({resolve:m,reject:o},r))}catch(n){console.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,n),t[e](...i),r.fallbackToNoCallback=!1,r.noCallback=!0,m()}else r.noCallback?(t[e](...i),m()):t[e](...i,_({resolve:m,reject:o},r))})},R=(e,r,g)=>new Proxy(r,{apply(t,i,m){return g.call(i,e,...m)}});let w=Function.call.bind(Object.prototype.hasOwnProperty);const p=(e,r={},g={})=>{let t=Object.create(null),i={has(o,n){return n in e||n in t},get(o,n,A){if(n in t)return t[n];if(!(n in e))return;let a=e[n];if(typeof a=="function")if(typeof r[n]=="function")a=R(e,e[n],r[n]);else if(w(g,n)){let u=q(n,g[n]);a=R(e,e[n],u)}else a=a.bind(e);else if(typeof a=="object"&&a!==null&&(w(r,n)||w(g,n)))a=p(a,r[n],g[n]);else if(w(g,"*"))a=p(a,r[n],g["*"]);else return Object.defineProperty(t,n,{configurable:!0,enumerable:!0,get(){return e[n]},set(u){e[n]=u}}),a;return t[n]=a,a},set(o,n,A,a){return n in t?t[n]=A:e[n]=A,!0},defineProperty(o,n,A){return Reflect.defineProperty(t,n,A)},deleteProperty(o,n){return Reflect.deleteProperty(t,n)}},m=Object.create(e);return new Proxy(m,i)},v=e=>({addListener(r,g,...t){r.addListener(e.get(g),...t)},hasListener(r,g){return r.hasListener(e.get(g))},removeListener(r,g){r.removeListener(e.get(g))}}),Z=new B(e=>typeof e!="function"?e:function(g){const t=p(g,{},{getContent:{minArgs:0,maxArgs:0}});e(t)}),L=new B(e=>typeof e!="function"?e:function(g,t,i){let m=!1,o,n=new Promise(f=>{o=function(l){m=!0,f(l)}}),A;try{A=e(g,t,o)}catch(f){A=Promise.reject(f)}const a=A!==!0&&I(A);if(A!==!0&&!a&&!m)return!1;const u=f=>{f.then(l=>{i(l)},l=>{let S;l&&(l instanceof Error||typeof l.message=="string")?S=l.message:S="An unexpected error occurred",i({__mozWebExtensionPolyfillReject__:!0,message:S})}).catch(l=>{console.error("Failed to send onMessage rejected reply",l)})};return u(a?A:n),!0}),z=({reject:e,resolve:r},g)=>{x.runtime.lastError?x.runtime.lastError.message===c?r():e(new Error(x.runtime.lastError.message)):g&&g.__mozWebExtensionPolyfillReject__?e(new Error(g.message)):r(g)},N=(e,r,g,...t)=>{if(t.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${h(r.minArgs)} for ${e}(), got ${t.length}`);if(t.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${h(r.maxArgs)} for ${e}(), got ${t.length}`);return new Promise((i,m)=>{const o=z.bind(null,{resolve:i,reject:m});t.push(o),g.sendMessage(...t)})},G={devtools:{network:{onRequestFinished:v(Z)}},runtime:{onMessage:v(L),onMessageExternal:v(L),sendMessage:N.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:N.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},E={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return C.privacy={network:{"*":E},services:{"*":E},websites:{"*":E}},p(x,G,C)};b.exports=D(chrome)}})})(P);var j=P.exports;const k=F(j);var y=(s=>(s[s.QUERY_TABS=0]="QUERY_TABS",s[s.CLOSE_TABS=1]="CLOSE_TABS",s))(y||{});const U=$(()=>{chrome.sidePanel.setPanelBehavior({openPanelOnActionClick:!0}).catch(s=>console.error(s)),k.runtime.onMessage.addListener(async(s,M,b)=>{if(s.type===y.QUERY_TABS)return await k.tabs.query({});if(s.type===y.CLOSE_TABS){let c=s.tabs;if(c!=null&&c.length)return await k.tabs.remove(c)}})});function Y(){}function d(s,...M){}const W={debug:(...s)=>d(console.debug,...s),log:(...s)=>d(console.log,...s),warn:(...s)=>d(console.warn,...s),error:(...s)=>d(console.error,...s)};let T;try{T=U.main(),T instanceof Promise&&console.warn("The background's main() function return a promise, but it must be synchronous")}catch(s){throw W.error("The background crashed on startup!"),s}return T}();
background;
