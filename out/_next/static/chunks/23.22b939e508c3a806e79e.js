(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{"6KAx":function(e,t,r){var n;!function(i){"use strict";var o,s=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,c=Math.ceil,l=Math.floor,a="[BigNumber Error] ",u=a+"Number primitive has more than 15 significant digits: ",f=1e14,h=14,g=9007199254740991,p=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],d=1e7,w=1e9;function m(e){var t=0|e;return e>0||e===t?t:t-1}function E(e){for(var t,r,n=1,i=e.length,o=e[0]+"";n<i;){for(t=e[n++]+"",r=h-t.length;r--;t="0"+t);o+=t}for(i=o.length;48===o.charCodeAt(--i););return o.slice(0,i+1||1)}function S(e,t){var r,n,i=e.c,o=t.c,s=e.s,c=t.s,l=e.e,a=t.e;if(!s||!c)return null;if(r=i&&!i[0],n=o&&!o[0],r||n)return r?n?0:-c:s;if(s!=c)return s;if(r=s<0,n=l==a,!i||!o)return n?0:!i^r?1:-1;if(!n)return l>a^r?1:-1;for(c=(l=i.length)<(a=o.length)?l:a,s=0;s<c;s++)if(i[s]!=o[s])return i[s]>o[s]^r?1:-1;return l==a?0:l>a^r?1:-1}function y(e,t,r,n){if(e<t||e>r||e!==l(e))throw Error(a+(n||"Argument")+("number"==typeof e?e<t||e>r?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function v(e){var t=e.c.length-1;return m(e.e/h)==t&&e.c[t]%2!=0}function b(e,t){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(t<0?"e":"e+")+t}function O(e,t,r){var n,i;if(t<0){for(i=r+".";++t;i+=r);e=i+e}else if(++t>(n=e.length)){for(i=r,t-=n;--t;i+=r);e+=i}else t<n&&(e=e.slice(0,t)+"."+e.slice(t));return e}(o=function e(t){var r,n,i,o=D.prototype={constructor:D,toString:null,valueOf:null},x=new D(1),N=20,I=4,B=-7,U=21,A=-1e7,P=1e7,k=!1,_=1,C=0,T={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:"\xa0",suffix:""},R="0123456789abcdefghijklmnopqrstuvwxyz";function D(e,t){var r,o,c,a,f,p,d,w,m=this;if(!(m instanceof D))return new D(e,t);if(null==t){if(e&&!0===e._isBigNumber)return m.s=e.s,void(!e.c||e.e>P?m.c=m.e=null:e.e<A?m.c=[m.e=0]:(m.e=e.e,m.c=e.c.slice()));if((p="number"==typeof e)&&0*e==0){if(m.s=1/e<0?(e=-e,-1):1,e===~~e){for(a=0,f=e;f>=10;f/=10,a++);return void(a>P?m.c=m.e=null:(m.e=a,m.c=[e]))}w=String(e)}else{if(!s.test(w=String(e)))return i(m,w,p);m.s=45==w.charCodeAt(0)?(w=w.slice(1),-1):1}(a=w.indexOf("."))>-1&&(w=w.replace(".","")),(f=w.search(/e/i))>0?(a<0&&(a=f),a+=+w.slice(f+1),w=w.substring(0,f)):a<0&&(a=w.length)}else{if(y(t,2,R.length,"Base"),10==t)return G(m=new D(e),N+m.e+1,I);if(w=String(e),p="number"==typeof e){if(0*e!=0)return i(m,w,p,t);if(m.s=1/e<0?(w=w.slice(1),-1):1,D.DEBUG&&w.replace(/^0\.0*|\./,"").length>15)throw Error(u+e)}else m.s=45===w.charCodeAt(0)?(w=w.slice(1),-1):1;for(r=R.slice(0,t),a=f=0,d=w.length;f<d;f++)if(r.indexOf(o=w.charAt(f))<0){if("."==o){if(f>a){a=d;continue}}else if(!c&&(w==w.toUpperCase()&&(w=w.toLowerCase())||w==w.toLowerCase()&&(w=w.toUpperCase()))){c=!0,f=-1,a=0;continue}return i(m,String(e),p,t)}p=!1,(a=(w=n(w,t,10,m.s)).indexOf("."))>-1?w=w.replace(".",""):a=w.length}for(f=0;48===w.charCodeAt(f);f++);for(d=w.length;48===w.charCodeAt(--d););if(w=w.slice(f,++d)){if(d-=f,p&&D.DEBUG&&d>15&&(e>g||e!==l(e)))throw Error(u+m.s*e);if((a=a-f-1)>P)m.c=m.e=null;else if(a<A)m.c=[m.e=0];else{if(m.e=a,m.c=[],f=(a+1)%h,a<0&&(f+=h),f<d){for(f&&m.c.push(+w.slice(0,f)),d-=h;f<d;)m.c.push(+w.slice(f,f+=h));f=h-(w=w.slice(f)).length}else f-=d;for(;f--;w+="0");m.c.push(+w)}}else m.c=[m.e=0]}function j(e,t,r,n){var i,o,s,c,l;if(null==r?r=I:y(r,0,8),!e.c)return e.toString();if(i=e.c[0],s=e.e,null==t)l=E(e.c),l=1==n||2==n&&(s<=B||s>=U)?b(l,s):O(l,s,"0");else if(o=(e=G(new D(e),t,r)).e,c=(l=E(e.c)).length,1==n||2==n&&(t<=o||o<=B)){for(;c<t;l+="0",c++);l=b(l,o)}else if(t-=s,l=O(l,o,"0"),o+1>c){if(--t>0)for(l+=".";t--;l+="0");}else if((t+=o-c)>0)for(o+1==c&&(l+=".");t--;l+="0");return e.s<0&&i?"-"+l:l}function L(e,t){for(var r,n=1,i=new D(e[0]);n<e.length;n++){if(!(r=new D(e[n])).s){i=r;break}t.call(i,r)&&(i=r)}return i}function M(e,t,r){for(var n=1,i=t.length;!t[--i];t.pop());for(i=t[0];i>=10;i/=10,n++);return(r=n+r*h-1)>P?e.c=e.e=null:r<A?e.c=[e.e=0]:(e.e=r,e.c=t),e}function G(e,t,r,n){var i,o,s,a,u,g,d,w=e.c,m=p;if(w){e:{for(i=1,a=w[0];a>=10;a/=10,i++);if((o=t-i)<0)o+=h,s=t,d=(u=w[g=0])/m[i-s-1]%10|0;else if((g=c((o+1)/h))>=w.length){if(!n)break e;for(;w.length<=g;w.push(0));u=d=0,i=1,s=(o%=h)-h+1}else{for(u=a=w[g],i=1;a>=10;a/=10,i++);d=(s=(o%=h)-h+i)<0?0:u/m[i-s-1]%10|0}if(n=n||t<0||null!=w[g+1]||(s<0?u:u%m[i-s-1]),n=r<4?(d||n)&&(0==r||r==(e.s<0?3:2)):d>5||5==d&&(4==r||n||6==r&&(o>0?s>0?u/m[i-s]:0:w[g-1])%10&1||r==(e.s<0?8:7)),t<1||!w[0])return w.length=0,n?(t-=e.e+1,w[0]=m[(h-t%h)%h],e.e=-t||0):w[0]=e.e=0,e;if(0==o?(w.length=g,a=1,g--):(w.length=g+1,a=m[h-o],w[g]=s>0?l(u/m[i-s]%m[s])*a:0),n)for(;;){if(0==g){for(o=1,s=w[0];s>=10;s/=10,o++);for(s=w[0]+=a,a=1;s>=10;s/=10,a++);o!=a&&(e.e++,w[0]==f&&(w[0]=1));break}if(w[g]+=a,w[g]!=f)break;w[g--]=0,a=1}for(o=w.length;0===w[--o];w.pop());}e.e>P?e.c=e.e=null:e.e<A&&(e.c=[e.e=0])}return e}function q(e){var t,r=e.e;return null===r?e.toString():(t=E(e.c),t=r<=B||r>=U?b(t,r):O(t,r,"0"),e.s<0?"-"+t:t)}return D.clone=e,D.ROUND_UP=0,D.ROUND_DOWN=1,D.ROUND_CEIL=2,D.ROUND_FLOOR=3,D.ROUND_HALF_UP=4,D.ROUND_HALF_DOWN=5,D.ROUND_HALF_EVEN=6,D.ROUND_HALF_CEIL=7,D.ROUND_HALF_FLOOR=8,D.EUCLID=9,D.config=D.set=function(e){var t,r;if(null!=e){if("object"!=typeof e)throw Error(a+"Object expected: "+e);if(e.hasOwnProperty(t="DECIMAL_PLACES")&&(y(r=e[t],0,w,t),N=r),e.hasOwnProperty(t="ROUNDING_MODE")&&(y(r=e[t],0,8,t),I=r),e.hasOwnProperty(t="EXPONENTIAL_AT")&&((r=e[t])&&r.pop?(y(r[0],-w,0,t),y(r[1],0,w,t),B=r[0],U=r[1]):(y(r,-w,w,t),B=-(U=r<0?-r:r))),e.hasOwnProperty(t="RANGE"))if((r=e[t])&&r.pop)y(r[0],-w,-1,t),y(r[1],1,w,t),A=r[0],P=r[1];else{if(y(r,-w,w,t),!r)throw Error(a+t+" cannot be zero: "+r);A=-(P=r<0?-r:r)}if(e.hasOwnProperty(t="CRYPTO")){if((r=e[t])!==!!r)throw Error(a+t+" not true or false: "+r);if(r){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw k=!r,Error(a+"crypto unavailable");k=r}else k=r}if(e.hasOwnProperty(t="MODULO_MODE")&&(y(r=e[t],0,9,t),_=r),e.hasOwnProperty(t="POW_PRECISION")&&(y(r=e[t],0,w,t),C=r),e.hasOwnProperty(t="FORMAT")){if("object"!=typeof(r=e[t]))throw Error(a+t+" not an object: "+r);T=r}if(e.hasOwnProperty(t="ALPHABET")){if("string"!=typeof(r=e[t])||/^.?$|[+\-.\s]|(.).*\1/.test(r))throw Error(a+t+" invalid: "+r);R=r}}return{DECIMAL_PLACES:N,ROUNDING_MODE:I,EXPONENTIAL_AT:[B,U],RANGE:[A,P],CRYPTO:k,MODULO_MODE:_,POW_PRECISION:C,FORMAT:T,ALPHABET:R}},D.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!D.DEBUG)return!0;var t,r,n=e.c,i=e.e,o=e.s;e:if("[object Array]"=={}.toString.call(n)){if((1===o||-1===o)&&i>=-w&&i<=w&&i===l(i)){if(0===n[0]){if(0===i&&1===n.length)return!0;break e}if((t=(i+1)%h)<1&&(t+=h),String(n[0]).length==t){for(t=0;t<n.length;t++)if((r=n[t])<0||r>=f||r!==l(r))break e;if(0!==r)return!0}}}else if(null===n&&null===i&&(null===o||1===o||-1===o))return!0;throw Error(a+"Invalid BigNumber: "+e)},D.maximum=D.max=function(){return L(arguments,o.lt)},D.minimum=D.min=function(){return L(arguments,o.gt)},D.random=function(){var e=9007199254740992,t=Math.random()*e&2097151?function(){return l(Math.random()*e)}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)};return function(e){var r,n,i,o,s,u=0,f=[],g=new D(x);if(null==e?e=N:y(e,0,w),o=c(e/h),k)if(crypto.getRandomValues){for(r=crypto.getRandomValues(new Uint32Array(o*=2));u<o;)(s=131072*r[u]+(r[u+1]>>>11))>=9e15?(n=crypto.getRandomValues(new Uint32Array(2)),r[u]=n[0],r[u+1]=n[1]):(f.push(s%1e14),u+=2);u=o/2}else{if(!crypto.randomBytes)throw k=!1,Error(a+"crypto unavailable");for(r=crypto.randomBytes(o*=7);u<o;)(s=281474976710656*(31&r[u])+1099511627776*r[u+1]+4294967296*r[u+2]+16777216*r[u+3]+(r[u+4]<<16)+(r[u+5]<<8)+r[u+6])>=9e15?crypto.randomBytes(7).copy(r,u):(f.push(s%1e14),u+=7);u=o/7}if(!k)for(;u<o;)(s=t())<9e15&&(f[u++]=s%1e14);for(o=f[--u],e%=h,o&&e&&(s=p[h-e],f[u]=l(o/s)*s);0===f[u];f.pop(),u--);if(u<0)f=[i=0];else{for(i=-1;0===f[0];f.splice(0,1),i-=h);for(u=1,s=f[0];s>=10;s/=10,u++);u<h&&(i-=h-u)}return g.e=i,g.c=f,g}}(),D.sum=function(){for(var e=1,t=arguments,r=new D(t[0]);e<t.length;)r=r.plus(t[e++]);return r},n=function(){var e="0123456789";function t(e,t,r,n){for(var i,o,s=[0],c=0,l=e.length;c<l;){for(o=s.length;o--;s[o]*=t);for(s[0]+=n.indexOf(e.charAt(c++)),i=0;i<s.length;i++)s[i]>r-1&&(null==s[i+1]&&(s[i+1]=0),s[i+1]+=s[i]/r|0,s[i]%=r)}return s.reverse()}return function(n,i,o,s,c){var l,a,u,f,h,g,p,d,w=n.indexOf("."),m=N,S=I;for(w>=0&&(f=C,C=0,n=n.replace(".",""),g=(d=new D(i)).pow(n.length-w),C=f,d.c=t(O(E(g.c),g.e,"0"),10,o,e),d.e=d.c.length),u=f=(p=t(n,i,o,c?(l=R,e):(l=e,R))).length;0==p[--f];p.pop());if(!p[0])return l.charAt(0);if(w<0?--u:(g.c=p,g.e=u,g.s=s,p=(g=r(g,d,m,S,o)).c,h=g.r,u=g.e),w=p[a=u+m+1],f=o/2,h=h||a<0||null!=p[a+1],h=S<4?(null!=w||h)&&(0==S||S==(g.s<0?3:2)):w>f||w==f&&(4==S||h||6==S&&1&p[a-1]||S==(g.s<0?8:7)),a<1||!p[0])n=h?O(l.charAt(1),-m,l.charAt(0)):l.charAt(0);else{if(p.length=a,h)for(--o;++p[--a]>o;)p[a]=0,a||(++u,p=[1].concat(p));for(f=p.length;!p[--f];);for(w=0,n="";w<=f;n+=l.charAt(p[w++]));n=O(n,u,l.charAt(0))}return n}}(),r=function(){function e(e,t,r){var n,i,o,s,c=0,l=e.length,a=t%d,u=t/d|0;for(e=e.slice();l--;)c=((i=a*(o=e[l]%d)+(n=u*o+(s=e[l]/d|0)*a)%d*d+c)/r|0)+(n/d|0)+u*s,e[l]=i%r;return c&&(e=[c].concat(e)),e}function t(e,t,r,n){var i,o;if(r!=n)o=r>n?1:-1;else for(i=o=0;i<r;i++)if(e[i]!=t[i]){o=e[i]>t[i]?1:-1;break}return o}function r(e,t,r,n){for(var i=0;r--;)e[r]-=i,i=e[r]<t[r]?1:0,e[r]=i*n+e[r]-t[r];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(n,i,o,s,c){var a,u,g,p,d,w,E,S,y,v,b,O,x,N,I,B,U,A=n.s==i.s?1:-1,P=n.c,k=i.c;if(!P||!P[0]||!k||!k[0])return new D(n.s&&i.s&&(P?!k||P[0]!=k[0]:k)?P&&0==P[0]||!k?0*A:A/0:NaN);for(y=(S=new D(A)).c=[],A=o+(u=n.e-i.e)+1,c||(c=f,u=m(n.e/h)-m(i.e/h),A=A/h|0),g=0;k[g]==(P[g]||0);g++);if(k[g]>(P[g]||0)&&u--,A<0)y.push(1),p=!0;else{for(N=P.length,B=k.length,g=0,A+=2,(d=l(c/(k[0]+1)))>1&&(k=e(k,d,c),P=e(P,d,c),B=k.length,N=P.length),x=B,b=(v=P.slice(0,B)).length;b<B;v[b++]=0);U=k.slice(),U=[0].concat(U),I=k[0],k[1]>=c/2&&I++;do{if(d=0,(a=t(k,v,B,b))<0){if(O=v[0],B!=b&&(O=O*c+(v[1]||0)),(d=l(O/I))>1)for(d>=c&&(d=c-1),E=(w=e(k,d,c)).length,b=v.length;1==t(w,v,E,b);)d--,r(w,B<E?U:k,E,c),E=w.length,a=1;else 0==d&&(a=d=1),E=(w=k.slice()).length;if(E<b&&(w=[0].concat(w)),r(v,w,b,c),b=v.length,-1==a)for(;t(k,v,B,b)<1;)d++,r(v,B<b?U:k,b,c),b=v.length}else 0===a&&(d++,v=[0]);y[g++]=d,v[0]?v[b++]=P[x]||0:(v=[P[x]],b=1)}while((x++<N||null!=v[0])&&A--);p=null!=v[0],y[0]||y.splice(0,1)}if(c==f){for(g=1,A=y[0];A>=10;A/=10,g++);G(S,o+(S.e=g+u*h-1)+1,s,p)}else S.e=u,S.r=+p;return S}}(),i=function(){var e=/^(-?)0([xbo])(?=\w[\w.]*$)/i,t=/^([^.]+)\.$/,r=/^\.([^.]+)$/,n=/^-?(Infinity|NaN)$/,i=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(o,s,c,l){var u,f=c?s:s.replace(i,"");if(n.test(f))o.s=isNaN(f)?null:f<0?-1:1;else{if(!c&&(f=f.replace(e,(function(e,t,r){return u="x"==(r=r.toLowerCase())?16:"b"==r?2:8,l&&l!=u?e:t})),l&&(u=l,f=f.replace(t,"$1").replace(r,"0.$1")),s!=f))return new D(f,u);if(D.DEBUG)throw Error(a+"Not a"+(l?" base "+l:"")+" number: "+s);o.s=null}o.c=o.e=null}}(),o.absoluteValue=o.abs=function(){var e=new D(this);return e.s<0&&(e.s=1),e},o.comparedTo=function(e,t){return S(this,new D(e,t))},o.decimalPlaces=o.dp=function(e,t){var r,n,i,o=this;if(null!=e)return y(e,0,w),null==t?t=I:y(t,0,8),G(new D(o),e+o.e+1,t);if(!(r=o.c))return null;if(n=((i=r.length-1)-m(this.e/h))*h,i=r[i])for(;i%10==0;i/=10,n--);return n<0&&(n=0),n},o.dividedBy=o.div=function(e,t){return r(this,new D(e,t),N,I)},o.dividedToIntegerBy=o.idiv=function(e,t){return r(this,new D(e,t),0,1)},o.exponentiatedBy=o.pow=function(e,t){var r,n,i,o,s,u,f,g,p=this;if((e=new D(e)).c&&!e.isInteger())throw Error(a+"Exponent not an integer: "+q(e));if(null!=t&&(t=new D(t)),s=e.e>14,!p.c||!p.c[0]||1==p.c[0]&&!p.e&&1==p.c.length||!e.c||!e.c[0])return g=new D(Math.pow(+q(p),s?2-v(e):+q(e))),t?g.mod(t):g;if(u=e.s<0,t){if(t.c?!t.c[0]:!t.s)return new D(NaN);(n=!u&&p.isInteger()&&t.isInteger())&&(p=p.mod(t))}else{if(e.e>9&&(p.e>0||p.e<-1||(0==p.e?p.c[0]>1||s&&p.c[1]>=24e7:p.c[0]<8e13||s&&p.c[0]<=9999975e7)))return o=p.s<0&&v(e)?-0:0,p.e>-1&&(o=1/o),new D(u?1/o:o);C&&(o=c(C/h+2))}for(s?(r=new D(.5),u&&(e.s=1),f=v(e)):f=(i=Math.abs(+q(e)))%2,g=new D(x);;){if(f){if(!(g=g.times(p)).c)break;o?g.c.length>o&&(g.c.length=o):n&&(g=g.mod(t))}if(i){if(0===(i=l(i/2)))break;f=i%2}else if(G(e=e.times(r),e.e+1,1),e.e>14)f=v(e);else{if(0===(i=+q(e)))break;f=i%2}p=p.times(p),o?p.c&&p.c.length>o&&(p.c.length=o):n&&(p=p.mod(t))}return n?g:(u&&(g=x.div(g)),t?g.mod(t):o?G(g,C,I,undefined):g)},o.integerValue=function(e){var t=new D(this);return null==e?e=I:y(e,0,8),G(t,t.e+1,e)},o.isEqualTo=o.eq=function(e,t){return 0===S(this,new D(e,t))},o.isFinite=function(){return!!this.c},o.isGreaterThan=o.gt=function(e,t){return S(this,new D(e,t))>0},o.isGreaterThanOrEqualTo=o.gte=function(e,t){return 1===(t=S(this,new D(e,t)))||0===t},o.isInteger=function(){return!!this.c&&m(this.e/h)>this.c.length-2},o.isLessThan=o.lt=function(e,t){return S(this,new D(e,t))<0},o.isLessThanOrEqualTo=o.lte=function(e,t){return-1===(t=S(this,new D(e,t)))||0===t},o.isNaN=function(){return!this.s},o.isNegative=function(){return this.s<0},o.isPositive=function(){return this.s>0},o.isZero=function(){return!!this.c&&0==this.c[0]},o.minus=function(e,t){var r,n,i,o,s=this,c=s.s;if(t=(e=new D(e,t)).s,!c||!t)return new D(NaN);if(c!=t)return e.s=-t,s.plus(e);var l=s.e/h,a=e.e/h,u=s.c,g=e.c;if(!l||!a){if(!u||!g)return u?(e.s=-t,e):new D(g?s:NaN);if(!u[0]||!g[0])return g[0]?(e.s=-t,e):new D(u[0]?s:3==I?-0:0)}if(l=m(l),a=m(a),u=u.slice(),c=l-a){for((o=c<0)?(c=-c,i=u):(a=l,i=g),i.reverse(),t=c;t--;i.push(0));i.reverse()}else for(n=(o=(c=u.length)<(t=g.length))?c:t,c=t=0;t<n;t++)if(u[t]!=g[t]){o=u[t]<g[t];break}if(o&&(i=u,u=g,g=i,e.s=-e.s),(t=(n=g.length)-(r=u.length))>0)for(;t--;u[r++]=0);for(t=f-1;n>c;){if(u[--n]<g[n]){for(r=n;r&&!u[--r];u[r]=t);--u[r],u[n]+=f}u[n]-=g[n]}for(;0==u[0];u.splice(0,1),--a);return u[0]?M(e,u,a):(e.s=3==I?-1:1,e.c=[e.e=0],e)},o.modulo=o.mod=function(e,t){var n,i,o=this;return e=new D(e,t),!o.c||!e.s||e.c&&!e.c[0]?new D(NaN):!e.c||o.c&&!o.c[0]?new D(o):(9==_?(i=e.s,e.s=1,n=r(o,e,0,3),e.s=i,n.s*=i):n=r(o,e,0,_),(e=o.minus(n.times(e))).c[0]||1!=_||(e.s=o.s),e)},o.multipliedBy=o.times=function(e,t){var r,n,i,o,s,c,l,a,u,g,p,w,E,S,y,v=this,b=v.c,O=(e=new D(e,t)).c;if(!b||!O||!b[0]||!O[0])return!v.s||!e.s||b&&!b[0]&&!O||O&&!O[0]&&!b?e.c=e.e=e.s=null:(e.s*=v.s,b&&O?(e.c=[0],e.e=0):e.c=e.e=null),e;for(n=m(v.e/h)+m(e.e/h),e.s*=v.s,(l=b.length)<(g=O.length)&&(E=b,b=O,O=E,i=l,l=g,g=i),i=l+g,E=[];i--;E.push(0));for(S=f,y=d,i=g;--i>=0;){for(r=0,p=O[i]%y,w=O[i]/y|0,o=i+(s=l);o>i;)r=((a=p*(a=b[--s]%y)+(c=w*a+(u=b[s]/y|0)*p)%y*y+E[o]+r)/S|0)+(c/y|0)+w*u,E[o--]=a%S;E[o]=r}return r?++n:E.splice(0,1),M(e,E,n)},o.negated=function(){var e=new D(this);return e.s=-e.s||null,e},o.plus=function(e,t){var r,n=this,i=n.s;if(t=(e=new D(e,t)).s,!i||!t)return new D(NaN);if(i!=t)return e.s=-t,n.minus(e);var o=n.e/h,s=e.e/h,c=n.c,l=e.c;if(!o||!s){if(!c||!l)return new D(i/0);if(!c[0]||!l[0])return l[0]?e:new D(c[0]?n:0*i)}if(o=m(o),s=m(s),c=c.slice(),i=o-s){for(i>0?(s=o,r=l):(i=-i,r=c),r.reverse();i--;r.push(0));r.reverse()}for((i=c.length)-(t=l.length)<0&&(r=l,l=c,c=r,t=i),i=0;t;)i=(c[--t]=c[t]+l[t]+i)/f|0,c[t]=f===c[t]?0:c[t]%f;return i&&(c=[i].concat(c),++s),M(e,c,s)},o.precision=o.sd=function(e,t){var r,n,i,o=this;if(null!=e&&e!==!!e)return y(e,1,w),null==t?t=I:y(t,0,8),G(new D(o),e,t);if(!(r=o.c))return null;if(n=(i=r.length-1)*h+1,i=r[i]){for(;i%10==0;i/=10,n--);for(i=r[0];i>=10;i/=10,n++);}return e&&o.e+1>n&&(n=o.e+1),n},o.shiftedBy=function(e){return y(e,-9007199254740991,g),this.times("1e"+e)},o.squareRoot=o.sqrt=function(){var e,t,n,i,o,s=this,c=s.c,l=s.s,a=s.e,u=N+4,f=new D("0.5");if(1!==l||!c||!c[0])return new D(!l||l<0&&(!c||c[0])?NaN:c?s:1/0);if(0==(l=Math.sqrt(+q(s)))||l==1/0?(((t=E(c)).length+a)%2==0&&(t+="0"),l=Math.sqrt(+t),a=m((a+1)/2)-(a<0||a%2),n=new D(t=l==1/0?"5e"+a:(t=l.toExponential()).slice(0,t.indexOf("e")+1)+a)):n=new D(l+""),n.c[0])for((l=(a=n.e)+u)<3&&(l=0);;)if(o=n,n=f.times(o.plus(r(s,o,u,1))),E(o.c).slice(0,l)===(t=E(n.c)).slice(0,l)){if(n.e<a&&--l,"9999"!=(t=t.slice(l-3,l+1))&&(i||"4999"!=t)){+t&&(+t.slice(1)||"5"!=t.charAt(0))||(G(n,n.e+N+2,1),e=!n.times(n).eq(s));break}if(!i&&(G(o,o.e+N+2,0),o.times(o).eq(s))){n=o;break}u+=4,l+=4,i=1}return G(n,n.e+N+1,I,e)},o.toExponential=function(e,t){return null!=e&&(y(e,0,w),e++),j(this,e,t,1)},o.toFixed=function(e,t){return null!=e&&(y(e,0,w),e=e+this.e+1),j(this,e,t)},o.toFormat=function(e,t,r){var n,i=this;if(null==r)null!=e&&t&&"object"==typeof t?(r=t,t=null):e&&"object"==typeof e?(r=e,e=t=null):r=T;else if("object"!=typeof r)throw Error(a+"Argument not an object: "+r);if(n=i.toFixed(e,t),i.c){var o,s=n.split("."),c=+r.groupSize,l=+r.secondaryGroupSize,u=r.groupSeparator||"",f=s[0],h=s[1],g=i.s<0,p=g?f.slice(1):f,d=p.length;if(l&&(o=c,c=l,l=o,d-=o),c>0&&d>0){for(o=d%c||c,f=p.substr(0,o);o<d;o+=c)f+=u+p.substr(o,c);l>0&&(f+=u+p.slice(o)),g&&(f="-"+f)}n=h?f+(r.decimalSeparator||"")+((l=+r.fractionGroupSize)?h.replace(new RegExp("\\d{"+l+"}\\B","g"),"$&"+(r.fractionGroupSeparator||"")):h):f}return(r.prefix||"")+n+(r.suffix||"")},o.toFraction=function(e){var t,n,i,o,s,c,l,u,f,g,d,w,m=this,S=m.c;if(null!=e&&(!(l=new D(e)).isInteger()&&(l.c||1!==l.s)||l.lt(x)))throw Error(a+"Argument "+(l.isInteger()?"out of range: ":"not an integer: ")+q(l));if(!S)return new D(m);for(t=new D(x),f=n=new D(x),i=u=new D(x),w=E(S),s=t.e=w.length-m.e-1,t.c[0]=p[(c=s%h)<0?h+c:c],e=!e||l.comparedTo(t)>0?s>0?t:f:l,c=P,P=1/0,l=new D(w),u.c[0]=0;g=r(l,t,0,1),1!=(o=n.plus(g.times(i))).comparedTo(e);)n=i,i=o,f=u.plus(g.times(o=f)),u=o,t=l.minus(g.times(o=t)),l=o;return o=r(e.minus(n),i,0,1),u=u.plus(o.times(f)),n=n.plus(o.times(i)),u.s=f.s=m.s,d=r(f,i,s*=2,I).minus(m).abs().comparedTo(r(u,n,s,I).minus(m).abs())<1?[f,i]:[u,n],P=c,d},o.toNumber=function(){return+q(this)},o.toPrecision=function(e,t){return null!=e&&y(e,1,w),j(this,e,t,2)},o.toString=function(e){var t,r=this,i=r.s,o=r.e;return null===o?i?(t="Infinity",i<0&&(t="-"+t)):t="NaN":(null==e?t=o<=B||o>=U?b(E(r.c),o):O(E(r.c),o,"0"):10===e?t=O(E((r=G(new D(r),N+o+1,I)).c),r.e,"0"):(y(e,2,R.length,"Base"),t=n(O(E(r.c),o,"0"),10,e,i,!0)),i<0&&r.c[0]&&(t="-"+t)),t},o.valueOf=o.toJSON=function(){return q(this)},o._isBigNumber=!0,null!=t&&D.set(t),D}()).default=o.BigNumber=o,void 0===(n=function(){return o}.call(t,r,t,e))||(e.exports=n)}()},HRdN:function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"default",(function(){return a}));var n=r("pn0g"),i=r("qPxQ"),o=(r("6KAx"),r("o8pB"));const s={eth:1,erc20:2,erc721:3,erc20mintable:4,erc721mintable:5};function c(t){return e.from(t.startsWith("0x")?t.slice(2):t,"hex")}function l(e){return e?c(e):null}class a{constructor(e,t="w0w"){this.transport=void 0,this.transport=e,e.decorateAppAPIMethods(this,["getAddress","provideERC20TokenInformation","signTransaction","signPersonalMessage","getAppConfiguration","signEIP712HashedMessage","starkGetPublicKey","starkSignOrder","starkSignOrder_v2","starkSignTransfer","starkSignTransfer_v2","starkProvideQuantum","starkProvideQuantum_v2","starkUnsafeSign","eth2GetPublicKey","eth2SetWithdrawalIndex"],t)}getAddress(t,r,i){let o=Object(n.b)(t),s=e.alloc(1+4*o.length);return s[0]=o.length,o.forEach(((e,t)=>{s.writeUInt32BE(e,1+4*t)})),this.transport.send(224,2,r?1:0,i?1:0,s).then((e=>{let t={},r=e[0],n=e[1+r];return t.publicKey=e.slice(1,1+r).toString("hex"),t.address="0x"+e.slice(1+r+1,1+r+1+n).toString("ascii"),i&&(t.chainCode=e.slice(1+r+1+n,1+r+1+n+32).toString("hex")),t}))}provideERC20TokenInformation({data:e}){return this.transport.send(224,10,0,0,e).then((()=>!0),(e=>{if(e&&27904===e.statusCode)return!1;throw e}))}signTransaction(t,r){let s,c=Object(n.b)(t),l=0,a=e.from(r,"hex"),u=[],f=Object(o.decode)(a),h=0,g="";if(f.length>6){let t=Object(o.encode)(f.slice(-3));h=a.length-(t.length-1);const r=f[6],n=e.alloc(4);r.copy(n,4-r.length),g=(2*n.readUInt32BE(0)).toString(16).slice(0,-2)}for(;l!==a.length;){let t=0===l?149-4*c.length:150,r=l+t>a.length?a.length-l:t;0!=h&&l+r==h&&r--;let n=e.alloc(0===l?1+4*c.length+r:r);0===l?(n[0]=c.length,c.forEach(((e,t)=>{n.writeUInt32BE(e,1+4*t)})),a.copy(n,1+4*c.length,l,l+r)):a.copy(n,0,l,l+r),u.push(n),l+=r}return Object(n.a)(u,((e,t)=>this.transport.send(224,4,0===t?0:128,0,e).then((e=>{s=e})))).then((()=>({v:g+s.slice(0,1).toString("hex"),r:s.slice(1,33).toString("hex"),s:s.slice(33,65).toString("hex")})),(e=>{throw(e=>e&&27264===e.statusCode?new i.a("Please enable Contract data on the Ethereum app Settings"):e)(e)}))}getAppConfiguration(){return this.transport.send(224,6,0,0).then((e=>{let t={};return t.arbitraryDataEnabled=1&e[0],t.erc20ProvisioningNecessary=2&e[0],t.starkEnabled=4&e[0],t.starkv2Supported=8&e[0],t.version=e[1]+"."+e[2]+"."+e[3],t}))}signPersonalMessage(t,r){let i,o=Object(n.b)(t),s=0,c=e.from(r,"hex"),l=[];for(;s!==c.length;){let t=0===s?149-4*o.length-4:150,r=s+t>c.length?c.length-s:t,n=e.alloc(0===s?1+4*o.length+4+r:r);0===s?(n[0]=o.length,o.forEach(((e,t)=>{n.writeUInt32BE(e,1+4*t)})),n.writeUInt32BE(c.length,1+4*o.length),c.copy(n,1+4*o.length+4,s,s+r)):c.copy(n,0,s,s+r),l.push(n),s+=r}return Object(n.a)(l,((e,t)=>this.transport.send(224,8,0===t?0:128,0,e).then((e=>{i=e})))).then((()=>({v:i[0],r:i.slice(1,33).toString("hex"),s:i.slice(33,65).toString("hex")})))}signEIP712HashedMessage(t,r,i){const o=c(r),s=c(i);let l=Object(n.b)(t),a=e.alloc(1+4*l.length+32+32,0),u=0;return a[0]=l.length,l.forEach(((e,t)=>{a.writeUInt32BE(e,1+4*t)})),u=1+4*l.length,o.copy(a,u),u+=32,s.copy(a,u),this.transport.send(224,12,0,0,a).then((e=>({v:e[0],r:e.slice(1,33).toString("hex"),s:e.slice(33,65).toString("hex")})))}starkGetPublicKey(t,r){let i=Object(n.b)(t),o=e.alloc(1+4*i.length);return o[0]=i.length,i.forEach(((e,t)=>{o.writeUInt32BE(e,1+4*t)})),this.transport.send(240,2,r?1:0,0,o).then((e=>e.slice(0,e.length-2)))}starkSignOrder(t,r,i,o,s,c,a,u,f,h,g){const p=l(r),d=l(o);let w=Object(n.b)(t),m=e.alloc(1+4*w.length+20+32+20+32+4+4+8+8+4+4,0),E=0;return m[0]=w.length,w.forEach(((e,t)=>{m.writeUInt32BE(e,1+4*t)})),E=1+4*w.length,p&&p.copy(m,E),E+=20,e.from(i.toString(16).padStart(64,"0"),"hex").copy(m,E),E+=32,d&&d.copy(m,E),E+=20,e.from(s.toString(16).padStart(64,"0"),"hex").copy(m,E),E+=32,m.writeUInt32BE(c,E),E+=4,m.writeUInt32BE(a,E),E+=4,e.from(u.toString(16).padStart(16,"0"),"hex").copy(m,E),E+=8,e.from(f.toString(16).padStart(16,"0"),"hex").copy(m,E),E+=8,m.writeUInt32BE(h,E),E+=4,m.writeUInt32BE(g,E),this.transport.send(240,4,1,0,m).then((e=>({r:e.slice(1,33).toString("hex"),s:e.slice(33,65).toString("hex")})))}starkSignOrder_v2(t,r,i,o,c,a,u,f,h,g,p,d,w,m,E){const S=l(r),y=l(a);if(!(i in s))throw new Error("eth.starkSignOrderv2 invalid source quantization type="+i);if(!(u in s))throw new Error("eth.starkSignOrderv2 invalid destination quantization type="+u);let v=Object(n.b)(t),b=e.alloc(1+4*v.length+1+20+32+32+1+20+32+32+4+4+8+8+4+4,0),O=0;return b[0]=v.length,v.forEach(((e,t)=>{b.writeUInt32BE(e,1+4*t)})),O=1+4*v.length,b[O]=s[i],O++,S&&S.copy(b,O),O+=20,o&&e.from(o.toString(16).padStart(64,"0"),"hex").copy(b,O),O+=32,c&&e.from(c.toString(16).padStart(64,"0"),"hex").copy(b,O),O+=32,b[O]=s[u],O++,y&&y.copy(b,O),O+=20,f&&e.from(f.toString(16).padStart(64,"0"),"hex").copy(b,O),O+=32,h&&e.from(h.toString(16).padStart(64,"0"),"hex").copy(b,O),O+=32,b.writeUInt32BE(g,O),O+=4,b.writeUInt32BE(p,O),O+=4,e.from(d.toString(16).padStart(16,"0"),"hex").copy(b,O),O+=8,e.from(w.toString(16).padStart(16,"0"),"hex").copy(b,O),O+=8,b.writeUInt32BE(m,O),O+=4,b.writeUInt32BE(E,O),this.transport.send(240,4,3,0,b).then((e=>({r:e.slice(1,33).toString("hex"),s:e.slice(33,65).toString("hex")})))}starkSignTransfer(t,r,i,o,s,a,u,f,h){const g=l(r),p=c(o);let d=Object(n.b)(t),w=e.alloc(1+4*d.length+20+32+32+4+4+8+4+4,0),m=0;return w[0]=d.length,d.forEach(((e,t)=>{w.writeUInt32BE(e,1+4*t)})),m=1+4*d.length,g&&g.copy(w,m),m+=20,e.from(i.toString(16).padStart(64,"0"),"hex").copy(w,m),m+=32,p.copy(w,m),m+=32,w.writeUInt32BE(s,m),m+=4,w.writeUInt32BE(a,m),m+=4,e.from(u.toString(16).padStart(16,"0"),"hex").copy(w,m),m+=8,w.writeUInt32BE(f,m),m+=4,w.writeUInt32BE(h,m),this.transport.send(240,4,2,0,w).then((e=>({r:e.slice(1,33).toString("hex"),s:e.slice(33,65).toString("hex")})))}starkSignTransfer_v2(t,r,i,o,a,u,f,h,g,p,d,w,m){const E=l(r),S=c(u),y=l(w);if(!(i in s))throw new Error("eth.starkSignTransferv2 invalid quantization type="+i);let v=Object(n.b)(t),b=e.alloc(1+4*v.length+1+20+32+32+32+4+4+8+4+4+(y?52:0),0),O=0;return b[0]=v.length,v.forEach(((e,t)=>{b.writeUInt32BE(e,1+4*t)})),O=1+4*v.length,b[O]=s[i],O++,E&&E.copy(b,O),O+=20,o&&e.from(o.toString(16).padStart(64,"0"),"hex").copy(b,O),O+=32,a&&e.from(a.toString(16).padStart(64,"0"),"hex").copy(b,O),O+=32,S.copy(b,O),O+=32,b.writeUInt32BE(f,O),O+=4,b.writeUInt32BE(h,O),O+=4,e.from(g.toString(16).padStart(16,"0"),"hex").copy(b,O),O+=8,b.writeUInt32BE(p,O),O+=4,b.writeUInt32BE(d,O),y&&m&&(O+=4,e.from(m.toString(16).padStart(64,"0"),"hex").copy(b,O),O+=32,y.copy(b,O)),this.transport.send(240,4,y?5:4,0,b).then((e=>({r:e.slice(1,33).toString("hex"),s:e.slice(33,65).toString("hex")})))}starkProvideQuantum(t,r){const n=l(t);let i=e.alloc(52,0);return n&&n.copy(i,0),e.from(r.toString(16).padStart(64,"0"),"hex").copy(i,20),this.transport.send(240,8,0,0,i).then((()=>!0),(e=>{if(e&&27904===e.statusCode)return!1;throw e}))}starkProvideQuantum_v2(t,r,n,i){const o=l(t);if(!(r in s))throw new Error("eth.starkProvideQuantumV2 invalid quantization type="+r);let c=e.alloc(84,0),a=0;return o&&o.copy(c,a),a+=20,n&&e.from(n.toString(16).padStart(64,"0"),"hex").copy(c,a),a+=32,i&&e.from(i.toString(16).padStart(64,"0"),"hex").copy(c,a),this.transport.send(240,8,s[r],0,c).then((()=>!0),(e=>{if(e&&27904===e.statusCode)return!1;throw e}))}starkUnsafeSign(t,r){const i=c(r);let o=Object(n.b)(t),s=e.alloc(1+4*o.length+32),l=0;return s[0]=o.length,o.forEach(((e,t)=>{s.writeUInt32BE(e,1+4*t)})),l=1+4*o.length,i.copy(s,l),this.transport.send(240,10,0,0,s).then((e=>({r:e.slice(1,33).toString("hex"),s:e.slice(33,65).toString("hex")})))}eth2GetPublicKey(t,r){let i=Object(n.b)(t),o=e.alloc(1+4*i.length);return o[0]=i.length,i.forEach(((e,t)=>{o.writeUInt32BE(e,1+4*t)})),this.transport.send(224,14,r?1:0,0,o).then((e=>{let t={};return t.publicKey=e.slice(0,-2).toString("hex"),t}))}eth2SetWithdrawalIndex(t){let r=e.alloc(4,0);return r.writeUInt32BE(t,0),this.transport.send(224,16,0,0,r).then((()=>!0),(e=>{if(e&&27904===e.statusCode)return!1;throw e}))}}}.call(this,r("HDXh").Buffer)},pn0g:function(e,t,r){"use strict";function n(e){let t=[];return e.split("/").forEach((e=>{let r=parseInt(e,10);isNaN(r)||(e.length>1&&"'"===e[e.length-1]&&(r+=2147483648),t.push(r))})),t}function i(e,t){function r(e,n,i){return e>=n.length?i:t(n[e],e).then((function(t){return i.push(t),r(e+1,n,i)}))}return Promise.resolve().then((()=>r(0,e,[])))}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return i}))}}]);