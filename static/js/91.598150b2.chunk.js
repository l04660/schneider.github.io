(this["webpackJsonpSCHNEIDER-MVP"]=this["webpackJsonpSCHNEIDER-MVP"]||[]).push([[91],{259:function(e,t,o){"use strict";o.r(t),o.d(t,"iosTransitionAnimation",(function(){return y})),o.d(t,"shadow",(function(){return i}));o(44),o(20),o(34);var a=o(32),r=(o(40),o(255)),n=function(e,t){return void 0===t&&(t="top"),"calc("+e+"px + var(--ion-safe-area-"+t+"))"},l=function(e){return document.querySelector(e+".ion-cloned-element")},i=function(e){return e.shadowRoot||e},s=function(e){return e.querySelector("ion-header:not(.header-collapse-condense-inactive) ion-title[size=large]")},c=function(e,t){for(var o=0,a=e.querySelectorAll("ion-buttons");o<a.length;o++){var r=a[o],n=r.closest("ion-header"),l=n&&!n.classList.contains("header-collapse-condense-inactive"),i=r.querySelector("ion-back-button"),s=r.classList.contains("buttons-collapse");if(null!==i&&(s&&l&&t||!s))return i}return null},f=function(e,t,o,r){var i=r.getBoundingClientRect(),s=t?"calc(100% - "+(i.right+4)+"px)":i.left-4+"px",c=t?"7px":"-7px",f=t?"-4px":"4px",d=t?"-4px":"4px",y=t?"right":"left",m=t?"left":"right",p=[{offset:0,opacity:0,transform:"translate("+c+", "+n(8)+") scale(2.1)"},{offset:1,opacity:1,transform:"translate("+f+", "+n(-40)+") scale(1)"}],u=[{offset:0,opacity:1,transform:"translate("+f+", "+n(-40)+") scale(1)"},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate("+c+", "+n(8)+") scale(2.1)"}],b=o?u:p,S=[{offset:0,opacity:0,transform:"translate3d("+d+", "+n(-35)+", 0) scale(0.6)"},{offset:1,opacity:1,transform:"translate3d("+d+", "+n(-40)+", 0) scale(1)"}],v=[{offset:0,opacity:1,transform:"translate("+d+", "+n(-40)+") scale(1)"},{offset:.2,opacity:0,transform:"translate("+d+", "+n(-35)+") scale(0.6)"},{offset:1,opacity:0,transform:"translate("+d+", "+n(-35)+") scale(0.6)"}],T=o?v:S,E=Object(a.a)(),h=Object(a.a)(),g=l("ion-back-button"),q=g.querySelector(".button-text"),A=g.querySelector("ion-icon");g.text=r.text,g.mode=r.mode,g.icon=r.icon,g.color=r.color,g.disabled=r.disabled,g.style.setProperty("display","block"),g.style.setProperty("position","fixed"),h.addElement(A),E.addElement(q),E.beforeStyles({"transform-origin":y+" center"}).beforeAddWrite((function(){r.style.setProperty("display","none"),g.style.setProperty(y,s)})).afterAddWrite((function(){r.style.setProperty("display",""),g.style.setProperty("display","none"),g.style.removeProperty(y)})).keyframes(b),h.beforeStyles({"transform-origin":m+" center"}).keyframes(T),e.addAnimation([E,h])},d=function(e,t,o,r){var i,s=r.getBoundingClientRect(),c=t?"calc(100% - "+s.right+"px)":s.left+"px",f=t?"-18px":"18px",d=t?"right":"left",y=[{offset:0,opacity:0,transform:"translate("+f+", "+n(0)+") scale(0.49)"},{offset:.1,opacity:0},{offset:1,opacity:1,transform:"translate(0, "+n(49)+") scale(1)"}],m=[{offset:0,opacity:.99,transform:"translate(0, "+n(49)+") scale(1)"},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate("+f+", "+n(0)+") scale(0.5)"}],p=o?y:m,u=l("ion-title"),b=Object(a.a)();u.innerText=r.innerText,u.size=r.size,u.color=r.color,b.addElement(u),b.beforeStyles((i={"transform-origin":d+" center",height:"46px",display:"",position:"relative"},i[d]=c,i)).beforeAddWrite((function(){r.style.setProperty("display","none")})).afterAddWrite((function(){r.style.setProperty("display",""),u.style.setProperty("display","none")})).keyframes(p),e.addAnimation(b)},y=function(e,t){try{var o="rtl"===e.ownerDocument.dir,n=o?"-99.5%":"99.5%",l=o?"33%":"-33%",y=t.enteringEl,m=t.leavingEl,p="back"===t.direction,u=y.querySelector(":scope > ion-content"),b=y.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),S=y.querySelectorAll(":scope > ion-header > ion-toolbar"),v=Object(a.a)(),T=Object(a.a)();if(v.addElement(y).duration(t.duration||540).easing(t.easing||"cubic-bezier(0.32,0.72,0,1)").fill("both").beforeRemoveClass("ion-page-invisible"),m&&e){var E=Object(a.a)();E.addElement(e),v.addAnimation(E)}if(u||0!==S.length||0!==b.length?(T.addElement(u),T.addElement(b)):T.addElement(y.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),v.addAnimation(T),p?T.beforeClearStyles(["opacity"]).fromTo("transform","translateX("+l+")","translateX(0%)").fromTo("opacity",.8,1):T.beforeClearStyles(["opacity"]).fromTo("transform","translateX("+n+")","translateX(0%)"),u){var h=i(u).querySelector(".transition-effect");if(h){var g=h.querySelector(".transition-cover"),q=h.querySelector(".transition-shadow"),A=Object(a.a)(),X=Object(a.a)(),j=Object(a.a)();A.addElement(h).beforeStyles({opacity:"1"}).afterStyles({opacity:""}),X.addElement(g).beforeClearStyles(["opacity"]).fromTo("opacity",0,.1),j.addElement(q).beforeClearStyles(["opacity"]).fromTo("opacity",.03,.7),A.addAnimation([X,j]),T.addAnimation([A])}}var O=y.querySelector("ion-header.header-collapse-condense"),x=function(e,t,o,a,r){var n=c(a,o),l=s(r),i=s(a),y=c(r,o),m=null!==n&&null!==l&&!o,p=null!==i&&null!==y&&o;return m?(d(e,t,o,l),f(e,t,o,n)):p&&(d(e,t,o,i),f(e,t,o,y)),{forward:m,backward:p}}(v,o,p,y,m),C=x.forward,k=x.backward;if(S.forEach((function(e){var t=Object(a.a)();t.addElement(e),v.addAnimation(t);var r=Object(a.a)();r.addElement(e.querySelector("ion-title"));var s,c=Object(a.a)(),f=Array.from(e.querySelectorAll("ion-buttons,[menuToggle]")),d=e.closest("ion-header"),y=d&&d.classList.contains("header-collapse-condense-inactive");s=p?f.filter((function(e){var t=e.classList.contains("buttons-collapse");return t&&!y||!t})):f.filter((function(e){return!e.classList.contains("buttons-collapse")})),c.addElement(s);var m=Object(a.a)();m.addElement(e.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));var u=Object(a.a)();u.addElement(i(e).querySelector(".toolbar-background"));var b=Object(a.a)(),S=e.querySelector("ion-back-button");if(S&&b.addElement(S),t.addAnimation([r,c,m,u,b]),c.fromTo("opacity",.01,1),m.fromTo("opacity",.01,1),p)y||r.fromTo("transform","translateX("+l+")","translateX(0%)").fromTo("opacity",.01,1),m.fromTo("transform","translateX("+l+")","translateX(0%)"),b.fromTo("opacity",.01,1);else if(O||r.fromTo("transform","translateX("+n+")","translateX(0%)").fromTo("opacity",.01,1),m.fromTo("transform","translateX("+n+")","translateX(0%)"),u.beforeClearStyles(["opacity"]).fromTo("opacity",.01,1),C||b.fromTo("opacity",.01,1),S&&!C){var T=Object(a.a)();T.addElement(i(S).querySelector(".button-text")).fromTo("transform",o?"translateX(-100px)":"translateX(100px)","translateX(0px)"),t.addAnimation(T)}})),m){var P=Object(a.a)(),w=m.querySelector(":scope > ion-content");if(P.addElement(w),P.addElement(m.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *")),v.addAnimation(P),p){P.beforeClearStyles(["opacity"]).fromTo("transform","translateX(0%)",o?"translateX(-100%)":"translateX(100%)");var L=Object(r.b)(m);v.afterAddWrite((function(){"normal"===v.getDirection()&&L.style.setProperty("display","none")}))}else P.fromTo("transform","translateX(0%)","translateX("+l+")").fromTo("opacity",1,.8);if(w){var R=i(w).querySelector(".transition-effect");if(R){var W=R.querySelector(".transition-cover"),z=R.querySelector(".transition-shadow"),D=Object(a.a)(),B=Object(a.a)(),H=Object(a.a)();D.addElement(R).beforeStyles({opacity:"1"}).afterStyles({opacity:""}),B.addElement(W).beforeClearStyles(["opacity"]).fromTo("opacity",.1,0),H.addElement(z).beforeClearStyles(["opacity"]).fromTo("opacity",.7,.03),D.addAnimation([B,H]),P.addAnimation([D])}}m.querySelectorAll(":scope > ion-header > ion-toolbar").forEach((function(e){var t=Object(a.a)();t.addElement(e);var r=Object(a.a)();r.addElement(e.querySelector("ion-title"));var n=Object(a.a)(),s=e.querySelectorAll("ion-buttons,[menuToggle]"),c=e.closest("ion-header"),f=c&&c.classList.contains("header-collapse-condense-inactive"),d=Array.from(s).filter((function(e){var t=e.classList.contains("buttons-collapse");return t&&!f||!t}));n.addElement(d);var y=Object(a.a)(),m=e.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");m.length>0&&y.addElement(m);var u=Object(a.a)();u.addElement(i(e).querySelector(".toolbar-background"));var b=Object(a.a)(),S=e.querySelector("ion-back-button");if(S&&b.addElement(S),t.addAnimation([r,n,y,b,u]),v.addAnimation(t),b.fromTo("opacity",.99,0),n.fromTo("opacity",.99,0),y.fromTo("opacity",.99,0),p){if(f||r.fromTo("transform","translateX(0%)",o?"translateX(-100%)":"translateX(100%)").fromTo("opacity",.99,0),y.fromTo("transform","translateX(0%)",o?"translateX(-100%)":"translateX(100%)"),u.beforeClearStyles(["opacity"]).fromTo("opacity",1,.01),S&&!k){var T=Object(a.a)();T.addElement(i(S).querySelector(".button-text")).fromTo("transform","translateX(0%)","translateX("+(o?-124:124)+"px)"),t.addAnimation(T)}}else f||r.fromTo("transform","translateX(0%)","translateX("+l+")").fromTo("opacity",.99,0).afterClearStyles(["transform","opacity"]),y.fromTo("transform","translateX(0%)","translateX("+l+")").afterClearStyles(["transform","opacity"]),b.afterClearStyles(["opacity"]),r.afterClearStyles(["opacity"]),n.afterClearStyles(["opacity"])}))}return v}catch(I){throw I}}}}]);
//# sourceMappingURL=91.598150b2.chunk.js.map