(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"0e595b281d8524b0167f":function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=function(e){return 204===e.status||205===e.status?null:(e.status>=200&&e.status,e.json())}},"11e1e4c27ea227f88a0d":function(e,t,a){"use strict";a.r(t);var n,c=a("8af190b70a6bc55c6f1b"),r=(a("8a2d1b95e05b6a321e74"),a("d7dd51e1bf6bfc2c9c3d")),u=a("a28fc3c963a1d4d1a2e5"),i=a("ab4cb61bcb2dc161defb"),d=a("adc20f99e57c573c589c"),o=a("d95b0cf107403b178365"),f=a("67e70ec087957f2a0e58"),s=a("54f683fcda7806277002"),b="app/ChartInsightsPage/GET_UNIVARIATE_DATA",l="app/ChartInsightsPage/GET_UNIVARIATE_DATA_SUCCESS",g="app/ChartInsightsPage/GET_UNIVARIATE_DATA_FAILURE",p=Object(s.fromJS)({loading:!1,univariateData:null,errorMessage:null}),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return e.set("loading",!0);case l:return e.set("loading",!1).set("univariateData",t.payload);case g:return e.set("loading",!1).set("errorMessage",t.payload.message);default:return e}},j=function(e){return e.univariateChartPage||p},h=function(){return Object(u.a)(j,function(e){return e})},y=a("d782b72bc5b680c7122c"),m=a("6d7a478e7cc0d7712c31"),O=a("0e595b281d8524b0167f"),R={getUnivariateData:function(e){var t=e.surveyArea,a=e.researchArea;return fetch("".concat(m.a,"/viz/distributions/?survey=").concat(t,"&var_group=").concat(a),{method:"GET",headers:{"Content-Type":"application/json"}}).then(O.a)}},S=regeneratorRuntime.mark(A),x=regeneratorRuntime.mark(k);function A(e){var t;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(y.call)(R.getUnivariateData,e.payload);case 3:if(200===(t=a.sent).code){a.next=9;break}return a.next=7,Object(y.put)({type:g,errorMessage:t.message});case 7:a.next=11;break;case 9:return a.next=11,Object(y.put)({type:l,payload:t.data});case 11:a.next=17;break;case 13:return a.prev=13,a.t0=a.catch(0),a.next=17,Object(y.put)({type:g,errorMessage:a.t0});case 17:case"end":return a.stop()}},S,null,[[0,13]])}function k(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.takeLatest)(b,A);case 2:case"end":return e.stop()}},x)}function w(e,t,a,c){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,u=arguments.length-3;if(t||0===u||(t={children:void 0}),t&&r)for(var i in r)void 0===t[i]&&(t[i]=r[i]);else t||(t=r||{});if(1===u)t.children=c;else if(u>1){for(var d=new Array(u),o=0;o<u;o++)d[o]=arguments[o+3];t.children=d}return{$$typeof:n,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}function C(e){var t=e.univariateChartPage,a=e.getUnivariateData;return Object(o.a)({key:"univariateChartPage",reducer:v}),Object(d.a)({key:"univariateChartPage",saga:k}),w("div",{},void 0,w(f.a,{loading:t.get("loading"),getUnivariateData:a,univariateData:t.get("univariateData")}))}a.d(t,"UnivariateChartPage",function(){return C});var E=Object(u.b)({univariateChartPage:h()});var P=Object(r.connect)(E,function(e){return{dispatch:e,getUnivariateData:function(t,a){e(function(e,t){return{type:b,payload:{surveyArea:e,researchArea:t}}}(t,a))}}});t.default=Object(i.compose)(P,c.memo)(C)},"67e70ec087957f2a0e58":function(e,t,a){"use strict";var n=a("3ed81f8d24b90b29f580");t.a=Object(n.a)(function(){return a.e(33).then(a.bind(null,"88fbb881472e78bdddd1"))})},"6d7a478e7cc0d7712c31":function(e,t,a){"use strict";a.d(t,"d",function(){return n}),a.d(t,"b",function(){return c}),a.d(t,"c",function(){return r}),a.d(t,"a",function(){return u});var n="@@saga-injector/restart-on-remount",c="@@saga-injector/daemon",r="@@saga-injector/once-till-unmount",u="http://178.128.59.143:4000/api/v1"},adc20f99e57c573c589c:function(e,t,a){"use strict";var n=a("8af190b70a6bc55c6f1b"),c=a.n(n),r=(a("5ef9de3df8d92ea0e41c"),a("d7dd51e1bf6bfc2c9c3d")),u=a("f2873ecf7390fe7d7c89"),i=a.n(u),d=a("5fa3f8487e09c6182715"),o=a.n(d),f=a("f3b0ff1628e56352bcbf"),s=a.n(f),b=a("a1cf5d6fa4ed65a6ddd5"),l=a.n(b),g=a("6a4f9c383785f9168266"),p=a.n(g),v=a("cc13decd9f9c09598c2f"),j=a("6d7a478e7cc0d7712c31");function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){y(e,t,a[t])})}return e}function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var m=[j.d,j.b,j.c],O=function(e){return p()(o()(e)&&!l()(e),"(app/utils...) injectSaga: Expected `key` to be a non empty string")},R=function(e){var t={saga:s.a,mode:function(e){return o()(e)&&m.includes(e)}};p()(i()(e,t),"(app/utils...) injectSaga: Expected a valid saga descriptor")};function S(e,t){return function(a){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=arguments.length>2?arguments[2]:void 0;t||Object(v.a)(e);var r=h({},n,{mode:n.mode||j.b}),u=r.saga,i=r.mode;O(a),R(r);var d=Reflect.has(e.injectedSagas,a);(!d||d&&i!==j.b&&i!==j.c)&&(e.injectedSagas[a]=h({},r,{task:e.runSaga(u,c)}))}}function x(e,t){return function(a){if(t||Object(v.a)(e),O(a),Reflect.has(e.injectedSagas,a)){var n=e.injectedSagas[a];n.mode&&n.mode!==j.b&&(n.task.cancel(),e.injectedSagas[a]="done")}}}function A(e){return Object(v.a)(e),{injectSaga:S(e,!0),ejectSaga:x(e,!0)}}a.d(t,"a",function(){return k});var k=function(e){var t=e.key,a=e.saga,n=e.mode,u=c.a.useContext(r.ReactReduxContext);c.a.useEffect(function(){var e=A(u.store);return e.injectSaga(t,{saga:a,mode:n}),function(){e.ejectSaga(t)}},[])}},cc13decd9f9c09598c2f:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a("d3a850c4000d77bccc89"),c=a.n(n),r=a("f3b0ff1628e56352bcbf"),u=a.n(r),i=a("f2873ecf7390fe7d7c89"),d=a.n(i),o=a("6a4f9c383785f9168266"),f=a.n(o);function s(e){var t={dispatch:u.a,subscribe:u.a,getState:u.a,replaceReducer:u.a,runSaga:u.a,injectedReducers:c.a,injectedSagas:c.a};f()(d()(e,t),"(app/utils...) injectors: Expected a valid redux store")}},d95b0cf107403b178365:function(e,t,a){"use strict";var n=a("8af190b70a6bc55c6f1b"),c=a.n(n),r=(a("5ef9de3df8d92ea0e41c"),a("d7dd51e1bf6bfc2c9c3d")),u=a("5fa3f8487e09c6182715"),i=a.n(u),d=a("f3b0ff1628e56352bcbf"),o=a.n(d),f=a("a1cf5d6fa4ed65a6ddd5"),s=a.n(f),b=a("6a4f9c383785f9168266"),l=a.n(b),g=a("cc13decd9f9c09598c2f"),p=a("491cc2e27aa2b4221847");function v(e,t){return function(a,n){t||Object(g.a)(e),l()(i()(a)&&!s()(a)&&o()(n),"(app/utils...) injectReducer: Expected `reducer` to be a reducer function"),Reflect.has(e.injectedReducers,a)&&e.injectedReducers[a]===n||(e.injectedReducers[a]=n,e.replaceReducer(Object(p.a)(e.injectedReducers)))}}function j(e){return Object(g.a)(e),{injectReducer:v(e,!0)}}a.d(t,"a",function(){return h});var h=function(e){var t=e.key,a=e.reducer,n=c.a.useContext(r.ReactReduxContext);c.a.useEffect(function(){j(n.store).injectReducer(t,a)},[])}}}]);