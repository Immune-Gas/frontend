(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[47],{"Dw/z":function(e,n,r){"use strict";r.r(n);r("ls82");var t=r("odrt");r("Nwb1"),r("/TMw"),r("M39V");function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){c(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n,r,t,o,i,c){try{var a=e[i](c),u=a.value}catch(s){return void r(s)}a.done?n(u):Promise.resolve(u).then(t,o)}function u(e){return function(){var n=this,r=arguments;return new Promise((function(t,o){var i=e.apply(n,r);function c(e){a(i,t,o,c,u,"next",e)}function u(e){a(i,t,o,c,u,"throw",e)}c(void 0)}))}}n.default=function(e){var n=e.networkId,o=e.preferred,c=e.label,a=e.iconSrc,s=e.svg,l=e.buttonPosition,f=e.modalZIndex,p=e.apiKey,w=e.buildEnv,d=e.enableLogging,b=e.enabledVerifiers,g=e.loginConfig,h=e.showTorusButton,v=e.integrity,m=e.whiteLabel,y=e.loginMethod;return{name:c||"Torus",svg:s||'<svg width="257" height="277" viewBox="0 0 257 277" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect width="153.889" height="82.0741" fill="#0364FF" />\n<rect x="71.8135" width="82.0741" height="277" fill="#0364FF" />\n<path d="M215.443 82.0741C238.107 82.0741 256.48 63.7012 256.48 41.037C256.48 18.3729 238.107 0 215.443 \n0C192.779 0 174.406 18.3729 174.406 41.037C174.406 63.7012 192.779 82.0741 215.443 82.0741Z" fill="#0364FF" />\n</svg>',iconSrc:a,wallet:function(){var e=u(regeneratorRuntime.mark((function e(o){var c,a,s,O,P;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=o.createModernProviderInterface,e.next=3,Promise.all([r.e(8),r.e(1),r.e(21)]).then(r.t.bind(null,"vGOQ",7));case 3:return a=e.sent,s=a.default,O=new s({buttonPosition:l,modalZIndex:f,apiKey:p}),e.next=8,O.init({buildEnv:w,enableLogging:d,network:{host:Object(t.g)(n),chainId:n,networkName:"".concat(Object(t.g)(n)," Network")},showTorusButton:h,enabledVerifiers:b,loginConfig:g,integrity:v,whiteLabel:m});case 8:return P=O.provider,e.abrupt("return",{provider:P,interface:i(i({},c(P)),{},{name:"Torus",dashboard:function(){return O.showWallet("home")},connect:function(){var e=u(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.login({verifier:y});case 2:return n=e.sent,e.abrupt("return",{message:n[0]});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),disconnect:function(){return O.cleanUp()}}),instance:O});case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),type:"sdk",desktop:!0,mobile:!0,preferred:o}}}}]);