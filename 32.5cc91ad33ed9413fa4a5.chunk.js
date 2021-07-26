(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"51eb9a1ac0a6d97087a0":function(n,e,i){e=n.exports=i("0e326f80368fd0b1333e")(!1);var t=i("f728176e63b408a85aea"),o=t(i("8a17b125ad84dbe05fcd")),r=t(i("8e13bf7baaa75309074f"));e.push([n.i,".selections-container {\n  display: flex;\n  justify-content: center;\n  gap: 5rem;\n  flex-wrap: wrap;\n  margin-top: 3rem;\n  overflow: hidden;\n  position: relative;\n}\n\n.selections-container a {\n  text-decoration: none;\n}\n\n.insight-selection {\n  position: relative;\n  height: 25rem;\n  width: 25rem;\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 2rem;\n  color: white !important;\n  text-shadow: 2px 2px 4px #000000;\n}\n\n.insight-container {\n  height: 25rem;\n  width: 25rem;\n  overflow: hidden;\n}\n\n/* .chart-img-holder {\n  background-image: url('../../images/chart-insights.png');\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  transition: all 1s;\n} */\n\n.chart-img-holder {\n  position: relative;\n}\n\n.chart-img-holder::before {\n  content: '';\n  background-image: url("+o+");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  transition: all 0.5s;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  filter: brightness(0.6);\n}\n\n.chart-img-holder:hover::before {\n  transform: scale(1.03);\n  opacity: 1;\n  border-radius: 10px;\n  filter: brightness(0.8);\n}\n\n.map-img-holder::before {\n  content: '';\n  background-image: url("+r+");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  transition: all 0.5s;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  filter: brightness(0.6);\n}\n\n.map-img-holder:hover::before {\n  transform: scale(1.03);\n  opacity: 1;\n  border-radius: 10px;\n  filter: brightness(0.8);\n}\n\n/* .map-img-holder {\n  background-image: url('../../images/map-insights.png');\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  transition: all 1s;\n  filter: brightness(0.8);\n}\n\n.map-img-holder:hover {\n  transform: scale(1.1);\n  opacity: 1;\n  border-radius: 10px;\n} */\n\n.insight-selection h5 {\n  position: relative;\n  font-size: 2rem;\n  padding: 2rem;\n  color: ghostwhite;\n  font-weight: 700;\n  line-height: 2.5rem;\n  letter-spacing: 2px;\n}\n",""])},"82631a9dc6faffea4200":function(n,e,i){var t=i("51eb9a1ac0a6d97087a0");"string"===typeof t&&(t=[[n.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};i("1e4534d1d62a11482e97")(t,o);t.locals&&(n.exports=t.locals)},"9ac84c9d948f93dec250":function(n,e,i){"use strict";i.r(e);var t,o=i("8af190b70a6bc55c6f1b"),r=i.n(o),a=i("e95a63b25fb92ed15721"),s=i("921c0b8c557fe6ba5da8"),c=i.n(s);i("82631a9dc6faffea4200");function l(n,e,i,o){t||(t="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=n&&n.defaultProps,a=arguments.length-3;if(e||0===a||(e={children:void 0}),e&&r)for(var s in r)void 0===e[s]&&(e[s]=r[s]);else e||(e=r||{});if(1===a)e.children=o;else if(a>1){for(var c=new Array(a),l=0;l<a;l++)c[l]=arguments[l+3];e.children=c}return{$$typeof:t,type:n,key:void 0===i?null:""+i,ref:null,props:e,_owner:null}}var d=l("div",{className:"insight-selection chart-selection chart-img-holder"},void 0,l("h5",{},void 0,"COVID-19 AND KATHMANDU\u2019S TOURISM INDUSTRY IN CHARTS")),g=l("div",{className:"insight-selection map-selection map-img-holder"},void 0,l("h5",{},void 0,"COVID-19 AND KATHMANDU\u2019S TOURISM INDUSTRY IN MAPS"));e.default=Object(o.memo)(function(){return r.a.createElement(r.a.Fragment,null,l(c.a,{variant:"subtitle1",gutterBottom:!0,style:{textAlign:"center",marginTop:"3rem",fontWeight:"600"}},void 0,"Select one to proceed"),l("div",{className:"selections-container"},void 0,l(a.Link,{to:"/visualizations/chart-insights"},void 0,l("div",{className:"insight-container",style:{backgroundColor:"#FFFFFF"}},void 0,d)),l(a.Link,{to:"/visualizations/map-insights"},void 0,l("div",{className:"insight-container",style:{backgroundColor:"#FFFFFF"}},void 0,g))))})}}]);