"use strict";(self.webpackChunknhtsa=self.webpackChunknhtsa||[]).push([[143],{143:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var s=n(885),a=n(791),i=n(184),r=function(e){return(0,i.jsx)("div",{children:e.items.map((function(e,t){return(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:e.Model_Name})},t)}))})},u=n(880),o=n(425),c=n(725),l=function(){var e=(0,u.UO)().makeid,t="https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/".concat(e,"?format=json"),n=(0,a.useState)([]),l=(0,s.Z)(n,2),d=l[0],h=l[1],f=(0,a.useState)(!1),m=(0,s.Z)(f,2),v=m[0],g=m[1],k=(0,a.useState)(!0),p=(0,s.Z)(k,2),j=p[0],M=p[1];return(0,a.useEffect)((function(){o.Z.get(t).then((function(e){var t=e.data;console.log(t);var n=[];for(var s in t.Results)n.push({Make_Name:t.Results[s].Make_Name,Model_Name:t.Results[s].Model_Name});h(n),g(!1),M(!1)})).catch((function(e){0!==e.message.length&&g(!0)}))}),[t]),(0,i.jsxs)(a.Fragment,{children:[v&&"Something is Wrong Please try again later",!v&&(0,i.jsx)(r,{items:d}),j&&(0,i.jsx)(c.Z,{})]})}}}]);
//# sourceMappingURL=143.aaa2bb55.chunk.js.map