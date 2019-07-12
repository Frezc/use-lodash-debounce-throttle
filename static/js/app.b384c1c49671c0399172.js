!function(e){function n(n){for(var r,o,c=n[0],d=n[1],i=n[2],s=n[3]||[],a=0,u=[];a<c.length;a++)o=c[a],H[o]&&u.push(H[o][0]),H[o]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);for(C&&C(n),A.push.apply(A,s);u.length;)u.shift()();return I.push.apply(I,i||[]),t()}function t(){for(var e,n=0;n<I.length;n++){for(var t=I[n],r=!0,o=1;o<t.length;o++){var c=t[o];0!==H[c]&&(r=!1)}r&&(I.splice(n--,1),e=S(S.s=t[0]))}return 0===I.length&&(A.forEach(function(e){if(void 0===H[e]){H[e]=null;var n=document.createElement("link");n.crossOrigin="anonymous",S.nc&&n.setAttribute("nonce",S.nc),n.rel="prefetch",n.as="script",n.href=M(e),document.head.appendChild(n)}}),A.length=0),e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!x[e]||!O[e])return;for(var t in O[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(v[t]=n[t]);0===--y&&0===g&&D()}(e,n),r&&r(e,n)};var o,c=!0,d="b384c1c49671c0399172",i=1e4,s={},a=[],u=[];function l(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"===typeof e)n._selfAccepted=e;else if("object"===typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"===typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:_,apply:P,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var n=p.indexOf(e);n>=0&&p.splice(n,1)},data:s[e]};return o=void 0,n}var p=[],f="idle";function h(e){f=e;for(var n=0;n<p.length;n++)p[n].call(null,e)}var m,v,b,y=0,g=0,w={},O={},x={};function j(e){return+e+""===e?+e:e}function _(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return c=e,h("check"),(n=i,n=n||1e4,new Promise(function(e,t){if("undefined"===typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,o=S.p+""+d+".hot-update.json";r.open("GET",o,!0),r.timeout=n,r.send(null)}catch(c){return t(c)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+o+" failed."));else{try{var n=JSON.parse(r.responseText)}catch(c){return void t(c)}e(n)}}})).then(function(e){if(!e)return h("idle"),null;O={},w={},x=e.c,b=e.h,h("prepare");var n=new Promise(function(e,n){m={resolve:e,reject:n}});for(var t in v={},H)E(t);return"prepare"===f&&0===g&&0===y&&D(),n});var n}function E(e){x[e]?(O[e]=!0,y++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=S.p+""+e+"."+d+".hot-update.js",n.crossOrigin="anonymous",document.head.appendChild(n)}(e)):w[e]=!0}function D(){h("ready");var e=m;if(m=null,e)if(c)Promise.resolve().then(function(){return P(c)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in v)Object.prototype.hasOwnProperty.call(v,t)&&n.push(j(t));e.resolve(n)}}function P(n){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var t,r,o,c,i;function u(e){for(var n=[e],t={},r=n.map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),d=o.id,i=o.chain;if((c=k[d])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:d};if(c.hot._main)return{type:"unaccepted",chain:i,moduleId:d};for(var s=0;s<c.parents.length;s++){var a=c.parents[s],u=k[a];if(u){if(u.hot._declinedDependencies[d])return{type:"declined",chain:i.concat([a]),moduleId:d,parentId:a};-1===n.indexOf(a)&&(u.hot._acceptedDependencies[d]?(t[a]||(t[a]=[]),l(t[a],[d])):(delete t[a],n.push(a),r.push({chain:i.concat([a]),id:a})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function l(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var p={},m=[],y={},g=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var w in v)if(Object.prototype.hasOwnProperty.call(v,w)){var O;i=j(w);var _=!1,E=!1,D=!1,P="";switch((O=v[w]?u(i):{type:"disposed",moduleId:w}).chain&&(P="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(_=new Error("Aborted because of self decline: "+O.moduleId+P));break;case"declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(_=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+P));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(O),n.ignoreUnaccepted||(_=new Error("Aborted because "+i+" is not accepted"+P));break;case"accepted":n.onAccepted&&n.onAccepted(O),E=!0;break;case"disposed":n.onDisposed&&n.onDisposed(O),D=!0;break;default:throw new Error("Unexception type "+O.type)}if(_)return h("abort"),Promise.reject(_);if(E)for(i in y[i]=v[i],l(m,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,i)&&(p[i]||(p[i]=[]),l(p[i],O.outdatedDependencies[i]));D&&(l(m,[O.moduleId]),y[i]=g)}var I,A=[];for(r=0;r<m.length;r++)i=m[r],k[i]&&k[i].hot._selfAccepted&&y[i]!==g&&A.push({module:i,errorHandler:k[i].hot._selfAccepted});h("dispose"),Object.keys(x).forEach(function(e){!1===x[e]&&function(e){delete H[e]}(e)});for(var M,z,q=m.slice();q.length>0;)if(i=q.pop(),c=k[i]){var U={},C=c.hot._disposeHandlers;for(o=0;o<C.length;o++)(t=C[o])(U);for(s[i]=U,c.hot.active=!1,delete k[i],delete p[i],o=0;o<c.children.length;o++){var T=k[c.children[o]];T&&((I=T.parents.indexOf(i))>=0&&T.parents.splice(I,1))}}for(i in p)if(Object.prototype.hasOwnProperty.call(p,i)&&(c=k[i]))for(z=p[i],o=0;o<z.length;o++)M=z[o],(I=c.children.indexOf(M))>=0&&c.children.splice(I,1);for(i in h("apply"),d=b,y)Object.prototype.hasOwnProperty.call(y,i)&&(e[i]=y[i]);var J=null;for(i in p)if(Object.prototype.hasOwnProperty.call(p,i)&&(c=k[i])){z=p[i];var L=[];for(r=0;r<z.length;r++)if(M=z[r],t=c.hot._acceptedDependencies[M]){if(-1!==L.indexOf(t))continue;L.push(t)}for(r=0;r<L.length;r++){t=L[r];try{t(z)}catch(F){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:i,dependencyId:z[r],error:F}),n.ignoreErrored||J||(J=F)}}}for(r=0;r<A.length;r++){var R=A[r];i=R.module,a=[i];try{S(i)}catch(F){if("function"===typeof R.errorHandler)try{R.errorHandler(F)}catch(N){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:i,error:N,originalError:F}),n.ignoreErrored||J||(J=N),J||(J=F)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:i,error:F}),n.ignoreErrored||J||(J=F)}}return J?(h("fail"),Promise.reject(J)):(h("idle"),new Promise(function(e){e(m)}))}var k={},H={1:0},I=[],A=[];function M(e){return S.p+"static/js/"+({2:"src-use-debounce",3:"src-use-throttle"}[e]||e)+"."+{2:"f57a9bce",3:"f1d6e7c3"}[e]+".js"}function S(n){if(k[n])return k[n].exports;var t=k[n]={i:n,l:!1,exports:{},hot:l(n),parents:(u=a,a=[],u),children:[]};return e[n].call(t.exports,t,t.exports,function(e){var n=k[e];if(!n)return S;var t=function(t){return n.hot.active?(k[t]?-1===k[t].parents.indexOf(e)&&k[t].parents.push(e):(a=[e],o=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),a=[]),S(t)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return S[e]},set:function(n){S[e]=n}}};for(var c in S)Object.prototype.hasOwnProperty.call(S,c)&&"e"!==c&&"t"!==c&&Object.defineProperty(t,c,r(c));return t.e=function(e){return"ready"===f&&h("prepare"),g++,S.e(e).then(n,function(e){throw n(),e});function n(){g--,"prepare"===f&&(w[e]||E(e),0===g&&0===y&&D())}},t.t=function(e,n){return 1&n&&(e=t(e)),S.t(e,-2&n)},t}(n)),t.l=!0,t.exports}S.e=function(e){var n=[],t=H[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise(function(n,r){t=H[e]=[n,r]});n.push(t[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,S.nc&&c.setAttribute("nonce",S.nc),c.src=M(e),0!==c.src.indexOf(window.location.origin+"/")&&(c.crossOrigin="anonymous");var d=new Error;o=function(n){c.onerror=c.onload=null,clearTimeout(i);var t=H[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,t[1](d)}H[e]=void 0}};var i=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(n)},S.m=e,S.c=k,S.d=function(e,n,t){S.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},S.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},S.t=function(e,n){if(1&n&&(e=S(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(S.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)S.d(t,r,function(n){return e[n]}.bind(null,r));return t},S.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return S.d(n,"a",n),n},S.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},S.p="/use-lodash-debounce-throttle/",S.oe=function(e){throw console.error(e),e},S.h=function(){return d};var z=window.webpackJsonp=window.webpackJsonp||[],q=z.push.bind(z);z.push=n,z=z.slice();for(var U=0;U<z.length;U++)n(z[U]);var C=q,T=(I.push([0,0]),t());n([[],{},0,[0,2,3]])}({"./.docz/app/db.json":function(e){e.exports=JSON.parse('{"config":{"title":"demo","description":"Bring debounce & throttle of lodash version to react-hooks","menu":[],"version":"0.3.5","repository":"https://github.com/Frezc/use-lodash-debounce-throttle","native":false,"codeSandbox":false,"themeConfig":{},"separator":"-","base":"/use-lodash-debounce-throttle/","files":"**/*.{md,markdown,mdx}","typescript":true},"props":[],"entries":[{"key":"src/use-debounce.mdx","value":{"name":"use-debounce","route":"/use-lodash-debounce-throttle/","id":"1de4845e3a0e40d2ee0120f3a17a4ed6","filepath":"src/use-debounce.mdx","link":"https://github.com/Frezc/use-lodash-debounce-throttle/edit/master/src/use-debounce.mdx","slug":"src-use-debounce","menu":"","headings":[{"slug":"use-debounce","depth":1,"value":"use-debounce"}]}},{"key":"src/use-throttle.mdx","value":{"name":"use-throttle","id":"1a36c77ec3ab81fd788184940304aa83","filepath":"src/use-throttle.mdx","link":"https://github.com/Frezc/use-lodash-debounce-throttle/edit/master/src/use-throttle.mdx","slug":"src-use-throttle","route":"/use-lodash-debounce-throttle/src-use-throttle","menu":"","headings":[{"slug":"use-throttle","depth":1,"value":"use-throttle"}]}}]}')},"./.docz/app/index.jsx":function(e,n,t){"use strict";t.r(n);var r=t("./node_modules/react/index.js"),o=t.n(r),c=t("./node_modules/react-dom/index.js"),d=t.n(c),i=t("./node_modules/docz/dist/index.esm.js"),s=t("./node_modules/docz-theme-default/dist/index.esm.js"),a={"src/use-debounce.mdx":function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"./src/use-debounce.mdx"))},"src/use-throttle.mdx":function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"./src/use-throttle.mdx"))}},u=t("./.docz/app/db.json"),l=function(){return o.a.createElement(s.a,{linkComponent:i.b,db:u},o.a.createElement(i.d,{imports:a}))},p=[],f=[],h=function(){return p.forEach(function(e){return e&&e()})},m=function(){return f.forEach(function(e){return e&&e()})},v=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;h(),d.a.render(o.a.createElement(e,null),v,m)}(l)},0:function(e,n,t){e.exports=t("./.docz/app/index.jsx")}});
//# sourceMappingURL=app.b384c1c49671c0399172.js.map