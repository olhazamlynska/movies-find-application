"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[702],{3754:function(n,t,e){var r=e(184);t.Z=function(){return(0,r.jsx)("p",{style:{color:"red"},children:"Someting went wrong! Please, try again..."})}},4702:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r=e(9439),a=e(2791),u=e(7689),c=e(4635),i=e(3754),o=e(559),s=e(184),f=function(){var n=(0,a.useState)([]),t=(0,r.Z)(n,2),e=t[0],f=t[1],p=(0,a.useState)(null),d=(0,r.Z)(p,2),h=d[0],l=d[1],v=(0,u.UO)().id;return(0,a.useEffect)((function(){(0,c.E9)(v).then((function(n){var t=n.results.map((function(n){return{author:n.author,review:n.content,id:n.id}}));f(t)})).catch((function(n){console.log(n.message),l(n.message),f([])}))}),[v]),(0,s.jsxs)("div",{children:[h&&(0,s.jsx)(i.Z,{}),0===e.length&&!h&&(0,s.jsx)(o.xv,{children:"There no reviews yet...Please, try another film!"}),e.length>0&&!h&&(0,s.jsx)("div",{children:e&&(0,s.jsx)(o.aV,{children:e.map((function(n){var t=n.author,e=n.review,r=n.id;return(0,s.jsxs)(o.ck,{children:[(0,s.jsxs)(o.VG,{children:["Author: ",(0,s.jsx)("span",{children:t})]}),(0,s.jsx)(o.xv,{children:e})]},r)}))})})]})}},559:function(n,t,e){e.d(t,{VG:function(){return p},aV:function(){return s},ck:function(){return f},xv:function(){return d}});var r,a,u,c,i=e(168),o=e(6444),s=o.ZP.ul(r||(r=(0,i.Z)(["\n  margin-top: ","px;\n"])),(function(n){return n.theme.space[5]})),f=o.ZP.li(a||(a=(0,i.Z)(["\n  width: 100%;\n  height: auto;\n  margin-bottom: ","px;\n  border-radius: ",";\n  border: 2px solid ",";\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.accentColor})),p=o.ZP.p(u||(u=(0,i.Z)(["\n  padding-left: ","px;\n  font-weight: ",";\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.fontWeights.medium})),d=o.ZP.p(c||(c=(0,i.Z)(["\n  padding-left: ","px;\n"])),(function(n){return n.theme.space[3]}))},4635:function(n,t,e){e.d(t,{Df:function(){return f},E9:function(){return l},h$:function(){return p},r1:function(){return s},ri:function(){return h},w7:function(){return d}});var r=e(5861),a=e(7757),u=e.n(a),c=e(2388);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="d8f6c8593dac3d35659165785d083845",o="/movie",s="https://image.tmdb.org/t/p/w500",f=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat("/trending/all/day","?page=1&api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat("/search/movie","?query=").concat(t,"&api_key=").concat(i,"&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=702.3391d857.chunk.js.map