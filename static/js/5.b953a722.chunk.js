(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{936:function(e,t,r){},937:function(e,t,r){"use strict";var n=r(4),a=r(3),i=r(22),o=new(Object(n.a)(function e(){Object(a.a)(this,e),this.update=function(e){return i.a.put("/Report/StatusUpdate",e)},this.updateCategory=function(e){return i.a.put("/Report/CategoryUpdate?id="+e.id+"&categoryID="+e.categoryId+"&staffID="+e.staffId)}}));t.a=o},938:function(e,t,r){"use strict";var n=r(6),a=r(9),i=r(36),o=r(11),c=r.n(o),l=r(0),s=r(37),u=["as","disabled"];function f(e){var t=e.tagName,r=e.disabled,n=e.href,a=e.target,i=e.rel,o=e.role,c=e.onClick,l=e.tabIndex,s=void 0===l?0:l,u=e.type;t||(t=null!=n||null!=a||null!=i?"a":"button");var f={tagName:t};if("button"===t)return[{type:u||"button",disabled:r},f];var m=function(e){(r||"a"===t&&function(e){return!e||"#"===e.trim()}(n))&&e.preventDefault(),r?e.stopPropagation():null==c||c(e)};return"a"===t&&(n||(n="#"),r&&(n=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:r?void 0:s,href:n,target:"a"===t?a:void 0,"aria-disabled":r||void 0,rel:"a"===t?i:void 0,onClick:m,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),m(e))}},f]}var m=l.forwardRef(function(e,t){var r=e.as,n=e.disabled,i=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,u),o=f(Object.assign({tagName:r,disabled:n},i)),c=Object(a.a)(o,2),l=c[0],m=c[1].tagName;return Object(s.jsx)(m,Object.assign({},i,l,{ref:t}))});m.displayName="Button";var p=r(70),d=["as","bsPrefix","variant","size","active","className"];function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach(function(t){Object(n.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g=l.forwardRef(function(e,t){var r=e.as,n=e.bsPrefix,o=e.variant,l=e.size,u=e.active,m=e.className,h=Object(i.a)(e,d),g=Object(p.b)(n,"btn"),v=f(y({tagName:r},h)),b=Object(a.a)(v,2),w=b[0],E=b[1].tagName;return Object(s.jsx)(E,y(y(y({},w),h),{},{ref:t,className:c()(m,g,u&&"active",o&&"".concat(g,"-").concat(o),l&&"".concat(g,"-").concat(l),h.href&&h.disabled&&"disabled")}))});g.displayName="Button",g.defaultProps={variant:"primary",active:!1,disabled:!1};t.a=g},952:function(e,t,r){"use strict";r.r(t);var n=r(3),a=r(4),i=r(13),o=r(26),c=r(18),l=r(0),s=r.n(l),u=r(84),f=r(1),m=r(9),p=(r(440),r(936),r(937)),d=r(97),h=r(938),y=r(438),g=r(98),v=r(187),b=r(127),w=r(27),E=r.n(w),O=(r(240),r(906)),j=r(902),x=r(903),N=r(82),k=r(239),_=r(925),S=r(129),L=r(23);function I(){I=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(k){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof f?t:f,i=Object.create(a.prototype),o=new j(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(a,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw i;return N()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var c=w(o,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,o),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=l;var u={};function f(){}function m(){}function p(){}var d={};c(d,a,function(){return this});var h=Object.getPrototypeOf,y=h&&h(h(x([])));y&&y!==t&&r.call(y,a)&&(d=y);var g=p.prototype=f.prototype=Object.create(d);function v(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var n;this._invoke=function(a,i){function o(){return new t(function(n,o){!function n(a,i,o,c){var l=s(e[a],e,i);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then(function(e){n("next",e,o,c)},function(e){n("throw",e,o,c)}):t.resolve(f).then(function(e){u.value=e,o(u)},function(e){return n("throw",e,o,c)})}c(l.arg)}(a,i,n,o)})}return n=n?n.then(o,o):o()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function x(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:N}}function N(){return{value:void 0,done:!0}}return m.prototype=p,c(g,"constructor",p),c(p,"constructor",m),m.displayName=c(p,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,o,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},v(b.prototype),c(b.prototype,i,function(){return this}),e.AsyncIterator=b,e.async=function(t,r,n,a,i){void 0===i&&(i=Promise);var o=new b(l(t,r,n,a),i);return e.isGeneratorFunction(r)?o:o.next().then(function(e){return e.done?e.value:o.next()})},v(g),c(g,o,"Generator"),c(g,a,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=x,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return o.type="throw",o.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:x(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}var P=function(){var e=Object(l.useState)(),t=Object(m.a)(e,2),r=t[0],n=t[1],a=localStorage.getItem("user_info");function i(){return o.apply(this,arguments)}function o(){return(o=Object(f.a)(I().mark(function e(){var t,r,i;return I().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={status:1},e.next=4,v.a.getByStatus(t);case 4:r=e.sent,i=r.map(function(e){return e.reportViews.length>0&&e.reportViews.filter(function(e){return e.userId===JSON.parse(a).email}).length>0?Object(u.a)({},e):Object(u.a)({},e,{_props:{color:"info",align:"middle"}})}).filter(function(e){return e.reportViews.filter(function(e){return e.userId===JSON.parse(a).email}).length>0}),n(i.sort(function(e,t){return new E.a(e.createTime)-new E.a(t.createTime)}).reverse()),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),L.b.error(e.t0.message);case 12:case"end":return e.stop()}},e,null,[[0,9]])}))).apply(this,arguments)}function c(){return(c=Object(f.a)(I().mark(function e(t,r){var n,o;return I().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={reportId:t,status:r,staffId:JSON.parse(a).email},e.next=4,p.a.update(n);case 4:o=e.sent,console.log("Response",o),i(),W(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),L.b.error(e.t0.message);case 13:case"end":return e.stop()}},e,null,[[0,10]])}))).apply(this,arguments)}var w=Object(l.useState)(0),P=Object(m.a)(w,2),F=P[0],C=P[1];Object(l.useEffect)(function(){setInterval(function(){C(function(e){return e+1})},5e3)},[]),Object(l.useEffect)(function(){i()},[F]);var J=Object(l.useState)(null),T=Object(m.a)(J,2),D=T[0],R=T[1],G=Object(l.useState)(null),V=Object(m.a)(G,2),K=V[0],U=V[1],A=Object(l.useState)(!1),B=Object(m.a)(A,2),z=B[0],W=B[1],H=function(){var e=Object(f.a)(I().mark(function e(t){var r,n,i,o,c;return I().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return W(!z),e.prev=1,r={id:t},n={reportId:t,userId:JSON.parse(a).email},e.next=6,v.a.find(r);case 6:return i=e.sent,e.next=9,v.a.reportViewUpdate(n);case 9:o=JSON.stringify(i.description).replace("<img",'<img style="width:55rem;height:30rem;padding-left:2rem;padding-right:2rem"').replace("<iframe",'<iframe style="width:55rem;height:30rem;padding-left:2rem;padding-right:2rem"').replace(/\\/g,""),c=o.substring(1,o.length-1),U(c),R(i),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),L.b.error(e.t0.message);case 18:case"end":return e.stop()}},e,null,[[1,15]])}));return function(t){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(O.a,{toggle:function(){return W(!1),R(null)},isOpen:z,className:"",size:"lg",style:{maxWidth:"1600px",width:"80%"}},s.a.createElement(j.a,{className:"bg-primary",toggle:function(){return W(!1),R(null)}},"Chi ti\u1ebft b\xe1o c\xe1o"),null!==D?s.a.createElement(s.a.Fragment,null,s.a.createElement(x.a,null,s.a.createElement(N.a,{row:!0},s.a.createElement(d.a,{md:"2"},s.a.createElement(k.a,{for:"location"},s.a.createElement("b",null,"\u0110\u1ecba \u0111i\u1ec3m: "))),s.a.createElement(d.a,{md:"10"},D.location)),s.a.createElement(N.a,{row:!0},s.a.createElement(d.a,{md:"2"},s.a.createElement(k.a,{for:"timeFraud"},s.a.createElement("b",null,"Th\u1eddi gian v\u1ee5 vi\u1ec7c: "))),s.a.createElement(d.a,{md:"10"},D.timeFraud)),s.a.createElement(N.a,{row:!0},s.a.createElement(d.a,{md:"2"},s.a.createElement(k.a,{for:"createTime"},s.a.createElement("b",null,"Th\u1eddi gian vi\u1ebft: ")," ")),s.a.createElement(d.a,{md:"10"},D.createTime)),s.a.createElement(N.a,{row:!0},s.a.createElement(d.a,{md:"2"},s.a.createElement(k.a,{for:"userId"},s.a.createElement("b",null,"Ng\u01b0\u1eddi g\u1eedi: "))),s.a.createElement(d.a,{md:"10"},null===D.userId?"Kh\xf4ng c\xf3":D.userId)),s.a.createElement(N.a,{row:!0},s.a.createElement(d.a,{md:"2"},s.a.createElement(k.a,{for:"description"},s.a.createElement("b",null,"Chi ti\u1ebft: "))),s.a.createElement(d.a,{md:"12"},s.a.createElement(b.a,{content:K,allowAttributes:!0,allowElements:!0}))),s.a.createElement(N.a,{row:!0},s.a.createElement(d.a,{md:"12"},s.a.createElement(k.a,{for:"description"},s.a.createElement("b",null,"\u1ea2nh \u0111\xednh k\xe8m: "))),D.reportDetails.length>0&&(D.reportDetails.filter(function(e){return"Image"===e.type}).length>0?D.reportDetails.filter(function(e){return"Image"===e.type}).map(function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,{md:"2"},s.a.createElement(N.a,null,s.a.createElement(S.UploadContainer,null,e.media.includes("http")?s.a.createElement(S.ImgUpload,{preview:e.media}):s.a.createElement(s.a.Fragment,null,s.a.createElement(S.ImgUpload,null))))))}):"Kh\xf4ng c\xf3 \u1ea3nh \u0111\xednh k\xe8m")),s.a.createElement(N.a,{row:!0},s.a.createElement(d.a,{md:"12"},s.a.createElement(k.a,{for:"description"},s.a.createElement("b",null,"Video \u0111\xednh k\xe8m: "))),D.reportDetails.length>0&&(D.reportDetails.filter(function(e){return"Video"===e.type}).length>0?D.reportDetails.filter(function(e){return"Video"===e.type}).map(function(e){return s.a.createElement(d.a,{md:"12"},e.media.includes("http")?s.a.createElement("label",{for:"videos"},s.a.createElement("video",{width:"400",height:"150",controls:!0,style:{height:"200px",objectFit:"contain"},autoPlay:!0,loop:!0},s.a.createElement("source",{src:e.media}))):s.a.createElement("span",{className:"text-muted"},"Kh\xf4ng c\xf3 video"))}):"Kh\xf4ng c\xf3 video \u0111\xednh k\xe8m"))),s.a.createElement(_.a,null,s.a.createElement(h.a,{variant:"warning",size:"sm",onClick:function(){return function(e,t){return c.apply(this,arguments)}(D.reportId,2)}},"Ch\u1edd x\xe1c th\u1ef1c"))):s.a.createElement(y.a,{className:"d-flex justify-content-center"},s.a.createElement("div",{class:"spinner-border text-primary mb-5 mt-5",role:"status"},s.a.createElement("span",{class:"sr-only"},"Loading...")))),null!==r&&s.a.createElement(g.c,{noItemsLabel:"Kh\xf4ng c\xf3 d\u1eef li\u1ec7u...",activePage:1,clickableRows:!0,columns:[{key:"index",label:"Th\u1ee9 t\u1ef1",filter:!1,sorter:!1,_style:{width:"5%"},_props:{className:"fw-semibold"}},{key:"location",label:"\u0110\u1ecba \u0111i\u1ec3m v\u1ee5 vi\u1ec7c",_style:{width:"20%"},_props:{className:"fw-semibold"}},{key:"timeFraud",label:"Th\u1eddi \u0111i\u1ec3m v\u1ee5 vi\u1ec7c",_style:{width:"10%"},_props:{className:"fw-semibold"}},{key:"description",label:"Chi ti\u1ebft",_style:{width:"20%"},_props:{className:"fw-semibold"}},{key:"show_details",label:"Th\xeam",_style:{width:"5%"},filter:!1,sorter:!1,_props:{className:"fw-semibold"}}],columnFilter:!0,columnSorter:!0,items:r,itemsPerPageSelect:!0,itemsPerPage:10,pagination:!0,scopedColumns:{index:function(e){return JSON.stringify(e).includes("_props")?s.a.createElement("td",{className:"py-2 font-weight-bold"},e._id+1):s.a.createElement("td",{className:"py-2"},e._id+1)},description:function(e){return JSON.stringify(e).includes("_props")?s.a.createElement("td",{className:"py font-weight-bold",style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",maxWidth:"20rem"}},s.a.createElement(b.a,{content:e.description,allowAttributes:!0,allowElements:!0,blockList:["img","iframe"],noHtml:!0})):s.a.createElement("td",{className:"py",style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",maxWidth:"20rem"}},s.a.createElement(b.a,{content:e.description,allowAttributes:!0,allowElements:!0,blockList:["img","iframe"],noHtml:!0}))},timeFraud:function(e){return JSON.stringify(e).includes("_props")?s.a.createElement("td",{className:"py font-weight-bold"},JSON.stringify(e.timeFraud).replace("T"," ").substring(1,JSON.stringify(e.timeFraud).length-1)):s.a.createElement("td",{className:"py"},JSON.stringify(e.timeFraud).replace("T"," ").substring(1,JSON.stringify(e.timeFraud).length-1))},show_details:function(e){return JSON.stringify(e).includes("_props")?s.a.createElement("td",{className:"py-2 font-weight-bold"},s.a.createElement(h.a,{onClick:function(){return H(e.reportId)}},"Chi ti\u1ebft")):s.a.createElement("td",{className:"py-2"},s.a.createElement(h.a,{onClick:function(){return H(e.reportId)}},"Chi ti\u1ebft"))},location:function(e){return JSON.stringify(e).includes("_props")?s.a.createElement("td",{className:"py-2 font-weight-bold"},e.location):s.a.createElement("td",{className:"py-2"},e.location)}},tableProps:{hover:!0,responsive:!0}}))};function F(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=Object(c.a)(e);if(t){var a=Object(c.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(o.a)(this,r)}}var C=function(e){Object(i.a)(r,e);var t=F(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"render",value:function(){return s.a.createElement("div",{className:"animated fadeIn pl-3 pr-3 pt-5"},s.a.createElement(P,null))}}]),r}(l.Component);t.default=C}}]);
//# sourceMappingURL=5.b953a722.chunk.js.map