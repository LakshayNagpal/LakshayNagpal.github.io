(this["webpackJsonplakshaynagpal.github.io"]=this["webpackJsonplakshaynagpal.github.io"]||[]).push([[5],{180:function(e,a,t){"use strict";t.d(a,"a",(function(){return o})),t.d(a,"b",(function(){return l}));var n=t(198),r=t(190),i=t(189),o=function(e){return function(e){var a=e.start,t=e.end,i=e.format,o=void 0===i?["years","months"]:i,l=Object(n.a)({start:a,end:t});return Object(r.a)(l,{format:o})}({start:e.start,end:e.end}).replace("year","yr").replace("month","mo")},l=function(e){return o({start:new Date(0),end:Object(i.a)(new Date(0),e)})}},181:function(e,a,t){"use strict";t.d(a,"c",(function(){return E})),t.d(a,"a",(function(){return O})),t.d(a,"b",(function(){return z}));var n=t(154),r=t(191),i=t(192),o=t(193),l=t(194),c=t(195),m=t(0),s=t.n(m),d=t(197),p=t(189),u=t(3),b=t(180),y=t(149),h=t(175),g=Object(y.a)((function(e){return Object(h.a)({commentLikeBlock:{fontFamily:"IBM Plex Mono",color:"#a9b7c6",fontSize:e.typography.body1.fontSize,maxWidth:"800px",position:"relative"},slash:{color:e.palette.text.secondary},line:{position:"absolute",top:"1.1em",bottom:"1.4em",left:"0.8em",width:"1px",backgroundColor:e.palette.text.secondary},childrenWrapper:{fontSize:"inherit",paddingLeft:"1.5em"}})})),f=function(e){var a=g();return s.a.createElement("div",{className:Object(u.a)(a.commentLikeBlock,e.className)},s.a.createElement("div",{className:a.slash},"/** ",e.title," ",!e.children&&"*/"),e.children&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:a.line}),s.a.createElement("div",{className:a.childrenWrapper},e.children),s.a.createElement("div",{className:a.slash},"\xa0*/")))},v=Object(y.a)((function(e){return Object(h.a)({timelineItem:{"&::before":{flex:0,padding:0}},initialItem:{},dot:{".az-timeline-primary-main &":{borderColor:e.palette.primary.main},".az-timeline-primary-light &":{borderColor:e.palette.primary.light},".az-timeline-secondary-main &":{borderColor:e.palette.secondary.main},".az-timeline-secondary-light &":{borderColor:e.palette.secondary.light},"$initialItem &":{".az-timeline-primary-main &":{backgroundColor:e.palette.primary.main},".az-timeline-primary-light &":{backgroundColor:e.palette.primary.light},".az-timeline-secondary-main &":{backgroundColor:e.palette.secondary.main},".az-timeline-secondary-light &":{backgroundColor:e.palette.secondary.light}}},connector:{".az-timeline-primary-main &":{backgroundColor:e.palette.primary.main},".az-timeline-primary-light &":{backgroundColor:e.palette.primary.light},".az-timeline-secondary-main &":{backgroundColor:e.palette.secondary.main},".az-timeline-secondary-light &":{backgroundColor:e.palette.secondary.light}},content:{paddingTop:0,paddingRight:0,paddingBottom:e.spacing(2)},title:{lineHeight:1,paddingTop:"0.2em",marginBottom:"0.2em","$initialItem &":{".az-timeline-primary-main &":{color:e.palette.primary.main},".az-timeline-primary-light &":{color:e.palette.primary.light},".az-timeline-secondary-main &":{color:e.palette.secondary.main},".az-timeline-secondary-light &":{color:e.palette.secondary.light}}},subtitle:{color:"#fff",fontWeight:500},timeDiff:{color:"rgba(255,255,255,0.5)"},description:{fontSize:e.typography.body1.fontSize,height:"auto"}})})),E=s.a.memo((function(e){var a=v(e);return s.a.createElement(r.a,{className:Object(u.a)(a.timelineItem,e.className)},s.a.createElement(i.a,null,s.a.createElement(o.a,{className:a.dot,variant:"outlined"}),s.a.createElement(l.a,{className:a.connector})),s.a.createElement(c.a,{className:a.content},s.a.createElement(n.a,{className:a.title,variant:"h6",color:"primary"},e.title),s.a.createElement(n.a,{variant:"body2"},Object(d.a)(e.dateFrom,"MMM yyyy")," \u2013 ",e.dateTo?Object(d.a)(e.dateTo,"MMM yyyy"):"Present",s.a.createElement("span",{className:a.timeDiff}," < ",Object(b.a)({start:e.dateFrom,end:Object(p.a)(e.dateTo||new Date,1)})," >")),e.subtitle&&s.a.createElement(n.a,{className:a.subtitle,variant:"body1"},e.subtitle),(e.children||e.descriptionTitle)&&s.a.createElement(f,{className:a.description,title:e.descriptionTitle},e.children)))})),O=s.a.memo((function(e){var a=v(e);return s.a.createElement(r.a,{className:Object(u.a)(a.timelineItem,a.initialItem,e.className)},s.a.createElement(i.a,null,s.a.createElement(o.a,{className:a.dot})),s.a.createElement(c.a,{className:a.content},s.a.createElement(n.a,{className:a.title,variant:"h6"},e.children)))})),j=t(196),k=t(17),N=Object(y.a)((function(e){return Object(h.a)({timeline:Object(k.a)({padding:e.spacing(0,2,0,3)},e.breakpoints.down("sm"),{paddingLeft:e.spacing(2)})})})),z=s.a.memo((function(e){var a=N();return s.a.createElement(j.a,{className:Object(u.a)(a.timeline,"az-timeline-".concat(e.variant||"primary","-").concat(e.color||"main"),e.className)},e.children)}))},182:function(e,a,t){"use strict";t.d(a,"a",(function(){return O}));var n=t(1),r=t(2),i=t(0),o=t.n(i),l=(t(4),t(3)),c=t(8),m=t(5),s=t(79),d=t(10),p=t(154),u=i.forwardRef((function(e,a){var t=e.classes,o=e.className,m=e.color,u=void 0===m?"primary":m,b=e.component,y=void 0===b?"a":b,h=e.onBlur,g=e.onFocus,f=e.TypographyClasses,v=e.underline,E=void 0===v?"hover":v,O=e.variant,j=void 0===O?"inherit":O,k=Object(r.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),N=Object(s.a)(),z=N.isFocusVisible,C=N.onBlurVisible,x=N.ref,w=i.useState(!1),T=w[0],I=w[1],F=Object(d.a)(a,x);return i.createElement(p.a,Object(n.a)({className:Object(l.a)(t.root,t["underline".concat(Object(c.a)(E))],o,T&&t.focusVisible,"button"===y&&t.button),classes:f,color:u,component:y,onBlur:function(e){T&&(C(),I(!1)),h&&h(e)},onFocus:function(e){z(e)&&I(!0),g&&g(e)},ref:F,variant:j},k))})),b=Object(m.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(u),y=t(21),h=Object(y.a)(o.a.createElement("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"OpenInNew"),g=t(26),f=t(149),v=t(175),E=Object(f.a)((function(e){return Object(v.a)({linkOpen:{whiteSpace:"nowrap",color:e.palette.primary.main,"&:hover":{color:e.palette.primary.light},"& > *":{fontSize:"inherit",display:"inline-block",verticalAlign:"bottom"},"& svg":{position:"relative"}},icon:{marginLeft:"0.5em"}})})),O=function(e){var a=E(),t=Object(l.a)(a.linkOpen,e.className),n=o.a.createElement(o.a.Fragment,null,o.a.createElement("span",null,e.children),e.hasLinkIcon&&o.a.createElement(h,{className:a.icon}));return e.external?o.a.createElement(b,{className:t,href:e.to,target:"_blank",rel:"external nofollow"},n):o.a.createElement(g.b,{className:t,to:e.to},n)}},202:function(e,a,t){"use strict";t.r(a),t.d(a,"Experience",(function(){return p}));var n=t(0),r=t.n(n),i=t(57),o=t(181),l=t(182),c=r.a.memo((function(e){var a=e.company.link?r.a.createElement(l.a,{to:e.company.link,hasLinkIcon:!0,external:!0},e.company.name):e.company.name;return r.a.createElement(o.c,{title:a,subtitle:e.position,dateFrom:e.dateFrom,dateTo:e.dateTo,descriptionTitle:e.company.link?"About the company":"About"},e.company.description)})),m=t(149),s=t(175),d=Object(m.a)((function(e){return Object(s.a)({timeline:{margin:0}})})),p=function(){var e=d();return r.a.createElement(o.b,{className:e.timeline,variant:"secondary",color:"main"},i.a.map((function(e){return r.a.createElement(c,Object.assign({key:e.id},e))})),r.a.createElement(o.a,null,"Initial commit"))};a.default=p}}]);
//# sourceMappingURL=5.7531844a.chunk.js.map