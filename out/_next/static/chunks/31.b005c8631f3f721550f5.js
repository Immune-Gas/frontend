(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[31],{HNOk:function(n,e,r){"use strict";r.r(e);r("ls82");var t=r("odrt");r("Nwb1"),r("/TMw"),r("M39V");function o(n,e,r,t,o,u,i){try{var a=n[u](i),c=a.value}catch(s){return void r(s)}a.done?e(c):Promise.resolve(c).then(t,o)}function u(n){return function(){var e=this,r=arguments;return new Promise((function(t,u){var i=n.apply(e,r);function a(n){o(i,t,u,a,c,"next",n)}function c(n){o(i,t,u,a,c,"throw",n)}a(void 0)}))}}e.default=function(n){var e=n.apiKey,o=n.networkId,i=n.preferred,a=n.label,c=n.iconSrc;return{name:a||"Fortmatic",svg:n.svg||'\n  <svg \n    height="40" \n    viewBox="0 0 40 40" \n    width="40" \n    xmlns="http://www.w3.org/2000/svg"\n  >\n    <path d="m2744.99995 1155h9.99997 10.00008v9.98139h-10.00008-9.99997-9.99998v9.9814.64001 9.28323.05815 9.9234h-9.99997v-9.9234-.05815-9.28323-.64001-9.9814-9.98139h9.99997zm9.99961 29.88552h-9.94167v-9.92324h19.93595v10.27235c0 2.55359-1.01622 5.00299-2.82437 6.80909-1.80867 1.8061-4.26182 2.82181-6.82018 2.82335h-.34973z" \n      fill="#617bff" \n      fill-rule="evenodd" \n      transform="translate(-2725 -1155)"/>\n  </svg>\n',iconSrc:c,wallet:function(){var n=u(regeneratorRuntime.mark((function n(i){var a,c,s,f,v,d,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.e(53).then(r.t.bind(null,"n8m1",7));case 2:return a=n.sent,c=a.default,s=new c(e,1===o?void 0:Object(t.g)(o)),f=s.getProvider(),v=i.BigNumber,d=i.getAddress,n.abrupt("return",{provider:f,instance:s,interface:{name:"Fortmatic",connect:function(){return s.user.login().then((function(n){return l=!0,n}))},disconnect:function(){return s.user.logout()},address:{get:function(){return l?d(f):Promise.resolve()}},network:{get:function(){return Promise.resolve(o)}},balance:{get:function(){var n=u(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",l&&s.user.getBalances().then((function(n){return n[0]?v(n[0].crypto_amount).times(v("1000000000000000000")).toString(10):null})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},dashboard:function(){return s.user.settings()}}});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),type:"sdk",desktop:!0,mobile:!0,preferred:i}}}}]);