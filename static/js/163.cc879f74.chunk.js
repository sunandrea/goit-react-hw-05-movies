"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[163],{163:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}r.r(t),r.d(t,{default:function(){return O}});var i,a=r(439),c=r(168),o=r(791),l=r(87),u=r(689),h=r(444),p=r(980),d="MoviesDetails_posterImg__fCE1M",j="MoviesDetails_contentWrapper__45tnK",f="MoviesDetails_detailsWrapper__hBgKe",v="MoviesDetails_goBackLink__1OTuv",m="MoviesDetails_genresList__2UzGj",_="MoviesDetails_linkList__DmG6K",b=r(184),x=(0,h.ZP)(l.OL)(i||(i=(0,c.Z)(["\n  text-decoration: none;\n  color: #120b3d;\n  font-weight: 500;\n  list-style: none;\n\n  &.active {\n    color: #a70960;\n  }\n  &:hover {\n    color: #a70960;\n  }\n"]))),O=function(e){var t=e.onCast,r=e.onReviews,i=(0,o.useState)({}),c=(0,a.Z)(i,2),h=c[0],O=c[1],g=(0,o.useState)(null),w=(0,a.Z)(g,2),y=w[0],k=w[1],D=(0,u.UO)().id,P=(0,u.TH)();return(0,o.useEffect)((function(){(0,p.Pg)(D).then((function(e){return O(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.data))})),(0,p.M1)(D).then((function(e){return t(e.data.cast)})),(0,p.tx)(D).then((function(e){return r(e.data.results)})),P.state&&P.state.from&&k(P.state.from)}),[D,P]),(0,b.jsxs)("div",{children:[(0,b.jsx)(l.rU,{className:v,to:{pathname:y||"/"},children:"Go back"}),(0,b.jsxs)("div",{className:j,children:[(0,b.jsx)("img",{className:d,src:h.poster_path&&"https://image.tmdb.org/t/p/w500/"+h.poster_path,width:"100px",height:"100px",alt:h.title}),(0,b.jsxs)("div",{className:f,children:[(0,b.jsx)("h1",{children:h.title}),(0,b.jsxs)("p",{children:["User Score: ",Math.ceil(10*h.vote_average),"%"]}),(0,b.jsx)("h2",{children:"Overview"}),(0,b.jsx)("p",{children:h.overview}),(0,b.jsx)("h3",{children:"Genres"}),(0,b.jsx)("ul",{className:m,children:h.genres&&h.genres.map((function(e){return(0,b.jsx)("li",{className:m,children:e.name},e.id)}))}),(0,b.jsx)("p",{})]})]}),(0,b.jsxs)("ul",{className:_,children:[(0,b.jsx)("li",{children:(0,b.jsx)(x,{to:"cast",children:"Cast"})}),(0,b.jsx)("li",{children:(0,b.jsx)(x,{to:"reviews",children:"Reviews"})})]}),(0,b.jsx)(u.j3,{})]})}}}]);
//# sourceMappingURL=163.cc879f74.chunk.js.map