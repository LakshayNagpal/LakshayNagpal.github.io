(this["webpackJsonplakshaynagpal.github.io"]=this["webpackJsonplakshaynagpal.github.io"]||[]).push([[9],{180:function(e,t,l){"use strict";l.d(t,"a",(function(){return r})),l.d(t,"b",(function(){return i}));var n=l(198),a=l(190),c=l(189),r=function(e){return function(e){var t=e.start,l=e.end,c=e.format,r=void 0===c?["years","months"]:c,i=Object(n.a)({start:t,end:l});return Object(a.a)(i,{format:r})}({start:e.start,end:e.end}).replace("year","yr").replace("month","mo")},i=function(e){return r({start:new Date(0),end:Object(c.a)(new Date(0),e)})}},200:function(e,t,l){"use strict";l.r(t),l.d(t,"Projects",(function(){return b}));var n=l(59),a=l(0),c=l.n(a),r=l(37),i=l(53),s=l(40),o=function(){return c.a.createElement(i.e,null,"\u2014 ".repeat((r.a+22)/2))},m=function(e){return c.a.createElement(c.a.Fragment,null,e.name,"\xa0".repeat(r.a+1+(e.gap||0)-e.name.length))},u=l(3),d=l(180),k=l(149),p=l(175),h=Object(k.a)((function(e){return Object(p.a)({projects:{width:"100%"},line:{maxWidth:"42em"},skillTableWrapper:{overflowX:"auto",width:"100%"},skillTable:{width:"100%",minWidth:"440px"},selectedSkill:{color:e.palette.text.primary},skillIcon:{width:"1.2em",height:"1.2em",display:"inline",marginBottom:"0.25em"}})})),f=c.a.memo((function(e){var t=h(),l=r.c[e.skillId],n=l.icon,s=e.monthsOfExperience,o=s>6?s>=24?s>=36?i.d:i.c:i.f:c.a.Fragment,k=Object(a.useCallback)((function(){var t;return null===(t=e.onClick)||void 0===t?void 0:t.call(e,e.skillId)}),[e.skillId,e.onClick]);return c.a.createElement(i.e,{className:Object(u.a)(t.selectedSkill,e.className),onClick:k,hover:!0},c.a.createElement(n,{className:t.skillIcon})," ",c.a.createElement(m,{name:l.name}),"|",s>=120||0===s?" ":"\xa0".repeat(2),c.a.createElement(o,null,Object(d.b)(s)||"non-commercial"))})),b=function(){var e=h(),t=Object(s.b)(),l=t.selectedSkills,u=t.selectedSkillsExperience,d=t.selectAllSkills,k=t.unselectSkill,p=Object(a.useMemo)((function(){return Object(n.a)(l).sort((function(e,t){return u[t]-u[e]||r.b.indexOf(r.c[e])-r.b.indexOf(r.c[t])}))}),[l]);return c.a.createElement(i.b,{className:e.projects},c.a.createElement(i.e,{className:e.line},"I would like to show you projects in which selected skills were used, but unfortunately I'm not allowed to do this because of NDA-s :("),c.a.createElement(i.a,null),!l.length&&c.a.createElement(i.e,{className:e.line},"Select some ",c.a.createElement(i.f,null,"skills")," to see my ",c.a.createElement(i.c,null,"expertise")," in them..."),c.a.createElement(i.e,{hover:!0,onClick:d},c.a.createElement(i.d,null,"Select All Skills")),!!l.length&&c.a.createElement(i.a,null),!!l.length&&c.a.createElement("div",{className:e.skillTableWrapper},c.a.createElement("div",{className:e.skillTable},c.a.createElement(i.e,null,c.a.createElement(m,{name:"Selected skills",gap:3}),"| ~Experience"),c.a.createElement(o,null),p.map((function(e){return c.a.createElement(f,{key:e,skillId:e,monthsOfExperience:u[e],onClick:k})})))))};t.default=b}}]);
//# sourceMappingURL=9.8abcde67.chunk.js.map