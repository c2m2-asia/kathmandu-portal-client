(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"0e595b281d8524b0167f":function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=function(e){return 204===e.status||205===e.status?null:(e.status>=200&&e.status,e.json())}},"6d7a478e7cc0d7712c31":function(e,t,n){"use strict";n.d(t,"d",function(){return a}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return r}),n.d(t,"a",function(){return u});var a="@@saga-injector/restart-on-remount",c="@@saga-injector/daemon",r="@@saga-injector/once-till-unmount",u="http://178.128.59.143:4000/api/v1"},"8352a949a6e3bbb8b931":function(e,t,n){"use strict";n.r(t);var a=n("8af190b70a6bc55c6f1b"),c=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),r=n("a28fc3c963a1d4d1a2e5"),u=n("ab4cb61bcb2dc161defb"),d=n("adc20f99e57c573c589c"),i=n("d95b0cf107403b178365"),o=n("54f683fcda7806277002"),f="app/ChartInsightsPage/GET_MAP_DATA",s="app/ChartInsightsPage/GET_MAP_DATA_SUCCESS",b="app/ChartInsightsPage/GET_MAP_DATA_FAILURE",p=Object(o.fromJS)({loading:!1,mapData:null,errorMessage:null}),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return e.set("loading",!0);case s:return e.set("loading",!1).set("mapData",t.payload);case b:return e.set("loading",!1).set("errorMessage",t.payload.message);default:return e}},l=function(e){return e.mapInsightsPage||p},j=function(){return Object(r.a)(l,function(e){return e})},v=n("d782b72bc5b680c7122c"),m=n("6d7a478e7cc0d7712c31"),h=n("0e595b281d8524b0167f"),y={getMapData:function(e){var t=e.timeIndex;return fetch("".concat(m.a,"/viz/businessmapinsights/?timeindex=").concat(t),{method:"GET",headers:{"Content-Type":"application/json"}}).then(h.a)}},O=regeneratorRuntime.mark(S),x=regeneratorRuntime.mark(R);function S(e){var t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(v.call)(y.getMapData,e.payload);case 3:if(200===(t=n.sent).code){n.next=9;break}return n.next=7,Object(v.put)({type:b,errorMessage:t.message});case 7:n.next=11;break;case 9:return n.next=11,Object(v.put)({type:s,payload:t.data});case 11:n.next=17;break;case 13:return n.prev=13,n.t0=n.catch(0),n.next=17,Object(v.put)({type:b,errorMessage:n.t0});case 17:case"end":return n.stop()}},O,null,[[0,13]])}function R(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.takeLatest)(f,S);case 2:case"end":return e.stop()}},x)}var k,w=n("3ed81f8d24b90b29f580"),P=Object(w.a)(function(){return n.e(31).then(n.bind(null,"248eb25a6b795d99cdba"))});function D(e,t,n,a){k||(k="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var c=e&&e.defaultProps,r=arguments.length-3;if(t||0===r||(t={children:void 0}),t&&c)for(var u in c)void 0===t[u]&&(t[u]=c[u]);else t||(t=c||{});if(1===r)t.children=a;else if(r>1){for(var d=new Array(r),i=0;i<r;i++)d[i]=arguments[i+3];t.children=d}return{$$typeof:k,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function E(e){var t=e.mapInsightsPage,n=e.getMapData;return Object(i.a)({key:"mapInsightsPage",reducer:g}),Object(d.a)({key:"mapInsightsPage",saga:R}),D("div",{},void 0,D(P,{getMapData:n,mapData:t.get("mapData")}))}n.d(t,"MapInsightsPage",function(){return E});var M=Object(r.b)({mapInsightsPage:j()});var I=Object(c.connect)(M,function(e){return{dispatch:e,getMapData:function(t){e(function(e){return{type:f,payload:{timeIndex:e}}}(t))}}});t.default=Object(u.compose)(I,a.memo)(E)},adc20f99e57c573c589c:function(e,t,n){"use strict";var a=n("8af190b70a6bc55c6f1b"),c=n.n(a),r=(n("5ef9de3df8d92ea0e41c"),n("d7dd51e1bf6bfc2c9c3d")),u=n("f2873ecf7390fe7d7c89"),d=n.n(u),i=n("5fa3f8487e09c6182715"),o=n.n(i),f=n("f3b0ff1628e56352bcbf"),s=n.n(f),b=n("a1cf5d6fa4ed65a6ddd5"),p=n.n(b),g=n("6a4f9c383785f9168266"),l=n.n(g),j=n("cc13decd9f9c09598c2f"),v=n("6d7a478e7cc0d7712c31");function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){h(e,t,n[t])})}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=[v.d,v.b,v.c],O=function(e){return l()(o()(e)&&!p()(e),"(app/utils...) injectSaga: Expected `key` to be a non empty string")},x=function(e){var t={saga:s.a,mode:function(e){return o()(e)&&y.includes(e)}};l()(d()(e,t),"(app/utils...) injectSaga: Expected a valid saga descriptor")};function S(e,t){return function(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=arguments.length>2?arguments[2]:void 0;t||Object(j.a)(e);var r=m({},a,{mode:a.mode||v.b}),u=r.saga,d=r.mode;O(n),x(r);var i=Reflect.has(e.injectedSagas,n);(!i||i&&d!==v.b&&d!==v.c)&&(e.injectedSagas[n]=m({},r,{task:e.runSaga(u,c)}))}}function R(e,t){return function(n){if(t||Object(j.a)(e),O(n),Reflect.has(e.injectedSagas,n)){var a=e.injectedSagas[n];a.mode&&a.mode!==v.b&&(a.task.cancel(),e.injectedSagas[n]="done")}}}function k(e){return Object(j.a)(e),{injectSaga:S(e,!0),ejectSaga:R(e,!0)}}n.d(t,"a",function(){return w});var w=function(e){var t=e.key,n=e.saga,a=e.mode,u=c.a.useContext(r.ReactReduxContext);c.a.useEffect(function(){var e=k(u.store);return e.injectSaga(t,{saga:n,mode:a}),function(){e.ejectSaga(t)}},[])}},cc13decd9f9c09598c2f:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n("d3a850c4000d77bccc89"),c=n.n(a),r=n("f3b0ff1628e56352bcbf"),u=n.n(r),d=n("f2873ecf7390fe7d7c89"),i=n.n(d),o=n("6a4f9c383785f9168266"),f=n.n(o);function s(e){var t={dispatch:u.a,subscribe:u.a,getState:u.a,replaceReducer:u.a,runSaga:u.a,injectedReducers:c.a,injectedSagas:c.a};f()(i()(e,t),"(app/utils...) injectors: Expected a valid redux store")}},d95b0cf107403b178365:function(e,t,n){"use strict";var a=n("8af190b70a6bc55c6f1b"),c=n.n(a),r=(n("5ef9de3df8d92ea0e41c"),n("d7dd51e1bf6bfc2c9c3d")),u=n("5fa3f8487e09c6182715"),d=n.n(u),i=n("f3b0ff1628e56352bcbf"),o=n.n(i),f=n("a1cf5d6fa4ed65a6ddd5"),s=n.n(f),b=n("6a4f9c383785f9168266"),p=n.n(b),g=n("cc13decd9f9c09598c2f"),l=n("491cc2e27aa2b4221847");function j(e,t){return function(n,a){t||Object(g.a)(e),p()(d()(n)&&!s()(n)&&o()(a),"(app/utils...) injectReducer: Expected `reducer` to be a reducer function"),Reflect.has(e.injectedReducers,n)&&e.injectedReducers[n]===a||(e.injectedReducers[n]=a,e.replaceReducer(Object(l.a)(e.injectedReducers)))}}function v(e){return Object(g.a)(e),{injectReducer:j(e,!0)}}n.d(t,"a",function(){return m});var m=function(e){var t=e.key,n=e.reducer,a=c.a.useContext(r.ReactReduxContext);c.a.useEffect(function(){v(a.store).injectReducer(t,n)},[])}}}]);