(this["webpackJsonpSCHNEIDER-MVP"]=this["webpackJsonpSCHNEIDER-MVP"]||[]).push([[7],{265:function(t,e,n){"use strict";n.r(e),n.d(e,"startTapClick",(function(){return o}));var i=n(35),o=function(t){var e,n,o,v,l=10*-f,p=0,E=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),L=new WeakMap,m=function(t){l=Object(i.i)(t),w(t)},h=function(){clearTimeout(v),v=void 0,n&&(R(!1),n=void 0)},b=function(t){n||void 0!==e&&null!==e.parentElement||(e=void 0,S(a(t),t))},w=function(t){S(void 0,t)},S=function(t,e){if(!t||t!==n){clearTimeout(v),v=void 0;var o=Object(i.j)(e),a=o.x,c=o.y;if(n){if(L.has(n))throw new Error("internal error");n.classList.contains(s)||g(n,a,c),R(!0)}if(t){var d=L.get(t);d&&(clearTimeout(d),L.delete(t));var f=r(t)?0:u;t.classList.remove(s),v=setTimeout((function(){g(t,a,c),v=void 0}),f)}n=t}},g=function(t,e,n){p=Date.now(),t.classList.add(s);var i=E&&c(t);i&&i.addRipple&&(j(),o=i.addRipple(e,n))},j=function(){void 0!==o&&(o.then((function(t){return t()})),o=void 0)},R=function(t){j();var e=n;if(e){var i=d-Date.now()+p;if(t&&i>0&&!r(e)){var o=setTimeout((function(){e.classList.remove(s),L.delete(e)}),d);L.set(e,o)}else e.classList.remove(s)}},T=document;T.addEventListener("ionScrollStart",(function(t){e=t.target,h()})),T.addEventListener("ionScrollEnd",(function(){e=void 0})),T.addEventListener("ionGestureCaptured",h),T.addEventListener("touchstart",(function(t){l=Object(i.i)(t),b(t)}),!0),T.addEventListener("touchcancel",m,!0),T.addEventListener("touchend",m,!0),T.addEventListener("mousedown",(function(t){var e=Object(i.i)(t)-f;l<e&&b(t)}),!0),T.addEventListener("mouseup",(function(t){var e=Object(i.i)(t)-f;l<e&&w(t)}),!0)},a=function(t){if(!t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var i=e[n];if(i.classList&&i.classList.contains("ion-activatable"))return i}},r=function(t){return t.classList.contains("ion-activatable-instant")},c=function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},s="activated",u=200,d=200,f=2500}}]);
//# sourceMappingURL=7.f9fb4793.chunk.js.map