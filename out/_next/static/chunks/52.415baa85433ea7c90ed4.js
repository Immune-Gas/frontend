(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[52],{dkG3:function(e,n,r){"use strict";r.r(n);var t=r("kl0C");function o(e,n,r,t,o,a,c){try{var u=e[a](c),i=u.value}catch(s){return void r(s)}u.done?n(i):Promise.resolve(i).then(t,o)}n.default=function(e){var n=e.rpcUrl,a=e.appName,c=e.appLogoUrl,u=e.networkId,i=e.preferred,s=e.label,p=e.iconSrc;return{name:s||"WalletLink",svg:e.svg||t.a,iconSrc:p,wallet:function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var o,i,s,p,f,d,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.getBalance,i=t.getAddress,s=t.getNetwork,e.next=3,r.e(18).then(r.t.bind(null,"Py8h",7));case 3:return p=e.sent,f=p.default,d=new f({appName:a,appLogoUrl:c}),l=d.makeWeb3Provider(n,u),e.abrupt("return",{provider:l,interface:{name:"WalletConnect",connect:function(){return new Promise((function(e,n){l.enable().then((function(n){return e(n)})).catch((function(){return n({message:"This dapp needs access to your account information."})}))}))},disconnect:function(){l.disconnect()},address:{get:function(){return i(l)}},network:{get:function(){return s(l)}},balance:{get:function(){return o(l)}}}});case 8:case"end":return e.stop()}}),e)})),function(){var n=this,r=arguments;return new Promise((function(t,a){var c=e.apply(n,r);function u(e){o(c,t,a,u,i,"next",e)}function i(e){o(c,t,a,u,i,"throw",e)}u(void 0)}))});return function(e){return t.apply(this,arguments)}}(),type:"sdk",desktop:!0,preferred:i}}}}]);