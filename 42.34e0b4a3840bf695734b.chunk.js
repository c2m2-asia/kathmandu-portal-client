(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"8bd7d6daf0916f096535":function(e,t,a){"use strict";a.r(t);var i=a("8af190b70a6bc55c6f1b"),o=(a("8a2d1b95e05b6a321e74"),a("999b8422c18ed8d20c8d")),r=a("72cf7144696bc44c8023"),n=a("0d939196e59ed73c94e6"),l=a("78acefda81a69304ce3d");var d,c=a("e1cac6eb736baa197b91"),s=a("a94eb86da21a09c95b30");function p(e,t,a,i){d||(d="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,r=arguments.length-3;if(t||0===r||(t={children:void 0}),t&&o)for(var n in o)void 0===t[n]&&(t[n]=o[n]);else t||(t=o||{});if(1===r)t.children=i;else if(r>1){for(var l=new Array(r),c=0;c<r;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:d,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var f=p("br",{}),v=p(s.FacebookIcon,{size:40,round:!0}),m=p(s.TwitterIcon,{size:40,round:!0}),b=p(s.EmailIcon,{size:40,round:!0});var h,y=Object(n.withStyles)(function(e){var t;return{blogContentWrapper:(t={marginLeft:e.spacing(1),marginRight:e.spacing(1)},u(t,e.breakpoints.up("sm"),{marginLeft:e.spacing(4),marginRight:e.spacing(4)}),u(t,"maxWidth",1280),u(t,"width","100%"),t),wrapper:{minHeight:"60vh",overflow:"hidden",paddingBottom:"2rem"},card:{boxShadow:e.shadows[4]}}},{withTheme:!0})(function(e){var t="http://www.kathmandulivinglabs.org/",a=e.classes,o=e.date,r=e.title,d=e.src,u=e.content,h=e.otherArticles,y=e.author;return Object(i.useEffect)(function(){window.scrollTo(0,0)},[e.title]),p(n.Box,{className:a.wrapper,display:"flex",justifyContent:"center"},void 0,p("div",{className:a.blogContentWrapper},void 0,p(n.Grid,{container:!0,spacing:5},void 0,p(n.Grid,{item:!0,md:9},void 0,p(n.Card,{className:a.card},void 0,p(n.Box,{pt:3,pr:3,pl:3,pb:2},void 0,p(n.Typography,{variant:"h4"},void 0,p("b",{},void 0,r)),p("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},void 0,p("div",{},void 0,p(n.Typography,{variant:"body1",color:"textSecondary",className:"pt-3"},void 0,y," ",f,o)),p("div",{style:{display:"flex"}},void 0,p(n.Tooltip,{title:"Share on Facebook"},void 0,p(n.IconButton,{"aria-label":"delete",size:"small"},void 0,p(s.FacebookShareButton,{url:t,className:"emailShareClassname"},void 0,v))),p(n.Tooltip,{title:"Share on Twitter"},void 0,p(n.IconButton,{"aria-label":"delete",size:"small"},void 0,p(s.TwitterShareButton,{url:t,className:"emailShareClassname"},void 0,m))),p(n.Tooltip,{title:"Share by Email"},void 0,p(n.IconButton,{"aria-label":"delete",size:"small"},void 0,p(s.EmailShareButton,{url:t,className:"emailShareClassname"},void 0,b)))))),p(c.a,{src:d,alt:""}),p(n.Box,{p:3},void 0,u))),p(n.Grid,{item:!0,md:3},void 0,h.map(function(e){return p(n.Box,{mb:3},e.id,p(l.a,{title:e.title,snippet:e.snippet,date:e.date,url:"/stories/".concat(e.id)}))})))))});function w(e,t,a,i){h||(h="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,r=arguments.length-3;if(t||0===r||(t={children:void 0}),t&&o)for(var n in o)void 0===t[n]&&(t[n]=o[n]);else t||(t=o||{});if(1===r)t.children=i;else if(r>1){for(var l=new Array(r),d=0;d<r;d++)l[d]=arguments[d+3];t.children=l}return{$$typeof:h,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}t.default=Object(i.memo)(Object(o.withRouter)(function(e){var t=r.a.find(function(t){return t.id===parseInt(e.match.params.id)}),a=r.a.filter(function(t){return t.id!==parseInt(e.match.params.id)});return w("div",{className:"bg-white"},void 0,w("div",{className:"py-5"},void 0,w(y,{title:t.title,src:t.src,content:t.content,author:t.author,date:t.date,otherArticles:a})))}))}}]);