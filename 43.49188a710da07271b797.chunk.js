(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{c0b845da9a58a163d05d:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return j});var a,r=t("8af190b70a6bc55c6f1b"),o=t.n(r),i=t("988b7bbe4d0c07f69a17"),c=t.n(i),l=t("6938d226fd372a75cbf9"),d=t("892f9172ef76fe2cc613"),s=t.n(d),b=t("eb67a544b56841e9798f"),u=t.n(b),f=t("7e2d3986206db5cafc09"),p=t.n(f),v=t("921c0b8c557fe6ba5da8"),m=t.n(v),y=t("30d4618c93dd28193de1");function g(){return(g=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function h(e,n,t,r){a||(a="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(n||0===i||(n={children:void 0}),n&&o)for(var c in o)void 0===n[c]&&(n[c]=o[c]);else n||(n=o||{});if(1===i)n.children=r;else if(i>1){for(var l=new Array(i),d=0;d<i;d++)l[d]=arguments[d+3];n.children=l}return{$$typeof:a,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}var w=Object(l.makeStyles)(function(e){return{root:{width:"100%",opacity:"0.9"},button:{marginRight:e.spacing(1)},backButton:{marginRight:e.spacing(1)},completed:{display:"inline-block"},instructions:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},icon:{display:"none"}}});var k=Object(l.makeStyles)({root:{color:"#eaeaf0",display:"flex",height:22,alignItems:"center"},active:{color:y.b},circle:{width:12,height:12,borderRadius:"50%",backgroundColor:"currentColor"},completed:{width:12,height:12,borderRadius:"50%",backgroundColor:y.b}});function S(e){var n,t,a,r=k(),o=e.active,i=e.completed;return h("div",{className:c()(r.root,(n={},t=r.active,a=o,t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n))},void 0,h("div",i?{className:r.completed}:{className:r.circle}))}var O=h("br",{});function j(e){var n=e.timeIndex,t=e.setTimeIndex,a=w(),r=function(e){return function(){t(e)}};return h("div",{className:a.root},void 0,h(s.a,{alternativeLabel:!0,activeStep:n},void 0,[{label:"Form deployed",date:"22nd April, 2020"},{label:"Lockdown started",date:"29th April, 2020"},{label:"Last survey response",date:"1st June, 2020"}].map(function(e,n){return o.a.createElement(u.a,g({key:e.label},{},{disabled:!0}),h(p.a,{disabled:!0,onClick:r(n),style:{cursor:"pointer"},StepIconComponent:S},void 0,e.label,O,h(m.a,{variant:"caption"},void 0,e.date)))})))}}}]);