(this["webpackJsonpaspect-ratio-calc"]=this["webpackJsonpaspect-ratio-calc"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/add.0e3e08bc.svg"},function(e,t,a){e.exports=a.p+"static/media/copy.72dd793a.svg"},function(e,t,a){e.exports=a.p+"static/media/remove.a24d83e3.svg"},function(e,t,a){e.exports=a.p+"static/media/rotate.c91fa003.svg"},,,,function(e,t,a){e.exports=a(29)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(10),o=a.n(i),r=(a(23),a(1)),l=a(7),s=a(3),m=a(16),u=a(2);var d=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)([]),o=Object(s.a)(i,2),l=o[0],d=o[1],p=Object(n.useState)(0),h=Object(s.a)(p,2),g=h[0],f=h[1];return{data:a,idOrder:l,add:function(e){var t=g;f(g+1);var n=Object(r.a)({id:t,width:"",height:"",diagonal:""},e),i=Object(r.a)({},a,Object(u.a)({},t,n));c(i);var o=[].concat(Object(m.a)(l),[t]);d(o)},update:function(e,t){if(!(e>=g)){var n=Object(r.a)({},a[e],{},t),i=Object(r.a)({},a,Object(u.a)({},e,n));c(i)}},replace:function(e){Object.keys(e).length===Object.keys(a).length&&c(e)},remove:function(e){var t=Object(r.a)({},a);delete t[e],c(t);var n=l.filter((function(t){return t!==e}));d(n)}}},p=function(e){var t=document.createElement("textarea");if(t){t.contentEditable="true",t.readOnly=!1,t.value=e,document.body.appendChild(t);var a=document.createRange();a.selectNodeContents(t);var n=window.getSelection();n&&(n.removeAllRanges(),n.addRange(a),t.select(),t.setSelectionRange(0,t.value.length),document.execCommand("copy"),t.blur(),document.body.removeChild(t))}},h=function(e,t){var a=Math.floor(e);if(a===e)return e.toString();var n=t-a.toString().length-1;return e.toFixed(n).replace(/\.?0+$/,"")},g=function(e){if("number"===typeof e){if(isFinite(e)&&e>0)return e}else if("string"===typeof e){var t=parseFloat(e);if(isFinite(t)&&t>0)return t}return null},f=a(6),v=a(15),E=a(17),b=a(8),S={"3:2":13.5,"4:3":12,"5:3":15,"5:4":11.25,"16:10":14.4,"17:10":15.3},N=function e(t){if(t<=0)throw new RangeError("`ratio` should be a positive number.");if(1===t)return"1:1";if(t<1)return e(1/t).split(":").reverse().join(":");for(var a=9*t,n=0,c=Object.keys(S);n<c.length;n++){var i=c[n];if(Math.abs(S[i]-a)<=.0078125)return i}return"".concat(Math.round(10*a)/10,":9")},F=function(e){return e/2.54},y=function(e){return 2.54*e},x=function e(t,a){var n=this;Object(b.a)(this,e),this.map=void 0,this.pixelCount=void 0,this.ratio=void 0,this.toMap=function(e){if(n.map)return n.map;var t=n.pixelCount,a=n.ratio,c=new Map;return c.set("Screen","".concat(t.width," x ").concat(t.height)),c.set("AspectRatio","".concat(a.toFixed(2),":1 (").concat(N(a),")")),c.set("PixelCount","".concat(t.total)),n.map=c,c};var c=Math.floor(t),i=Math.floor(a);this.pixelCount={width:c,height:i,total:c*i},this.ratio=c/i,this.map=null},w=function(e){Object(E.a)(a,e);var t=Object(v.a)(a);function a(e,n,c){var i;return Object(b.a)(this,a),(i=t.call(this,e,n)).diagonal=void 0,i.dpi=void 0,i.dotPitch=void 0,i.size=void 0,i.toMap=function(e){if(i.map)return i.map;var t="in",a="cm";if(e){var n=e.diagonalUnit;t=void 0===n?"in":n;var c=e.sizeUnit;a=void 0===c?"cm":c}var o=Object(f.a)(i),r=o.pixelCount,l=o.diagonal,s=o.ratio,m=o.dpi,u=o.dotPitch,d=o.size,p=new Map;return p.set("Screen","".concat(r.width," x ").concat(r.height)),p.set("Diagonal","cm"===t?"".concat(y(l)," cm"):"".concat(l,'"')),p.set("AspectRatio","".concat(s.toFixed(2),":1 (").concat(N(s),")")),p.set("DPI","".concat(m.toFixed(2))),p.set("DotPitch","".concat(u.toFixed(4))),p.set("Size","cm"===a?"".concat(d.width.toFixed(2)," cm x ").concat(d.height.toFixed(2)," cm"):"".concat(F(d.width).toFixed(2),'" x ').concat(F(d.height).toFixed(2),'"')),p.set("PixelCount","".concat(r.total)),i.map=p,p},i.diagonal=c,i.dpi=Math.sqrt(Math.pow(i.pixelCount.width,2)+Math.pow(i.pixelCount.height,2))/c,i.dotPitch=10*y(1/i.dpi),i.size={width:i.pixelCount.width*i.dotPitch/10,height:i.pixelCount.height*i.dotPitch/10},i}return a}(x),j=function(e,t,a,n){var c="number"===typeof e?Math.floor(e):parseInt(e,10),i="number"===typeof t?Math.floor(t):parseInt(t,10);if([c,i].some(isNaN))return null;if([c,i].some((function(e){return e<=0})))return null;if(![c,i].every(Number.isSafeInteger))return null;var o=g(a);return o&&n&&"cm"===n&&(o/=2.54),null===o?new x(c,i):new w(c,i,o)},M=function(e,t){var a=e.toMap(t);return"- "+Array.from(a.keys()).map((function(e){return"".concat(e,": ").concat(a.get(e))})).join("\n  ")},O=function(e){return e<9/22?3240/22:e<1?360*e:360},k=function(e){return e>22/9?3240/22:e<=1?360:360/e},C=10,A=20*Math.PI/180,B=function(e,t){var a=5*t/6;return{x1:C,y1:a,x2:e-C,y2:a}};a(24);var U=function(e){var t=e.width,a=e.height,n=B(t,a),i=function(e){var t=e.x1,a=e.y1,n=e.x2;return{x1:a,y1:t,x2:e.y2,y2:n}}(B(a,t)),o=function(e,t){return{x1:C,y1:t-C,x2:e-C,y2:C}}(t,a),r=function(e,t){var a=5*t/6,n=10*Math.sin(A),c=10*Math.cos(A);return[[C,a,C+c,a-n,C+c,a+n,C,a].join(" "),[e-C,a,e-(C+c),a+n,e-(C+c),a-n,e-C,a].join(" ")]}(t,a),l=function(e,t){var a=5*e/6,n=10*Math.sin(A),c=10*Math.cos(A);return[[a,C,a+n,C+c,a-n,C+c,a,C].join(" "),[a,t-C,a-n,t-(C+c),a+n,t-(C+c),a,t-C].join(" ")]}(t,a),s=function(e,t){var a=Math.acos((e-2*C)/Math.sqrt(Math.pow(e-2*C,2)+Math.pow(t-2*C,2))),n=10*Math.cos(a+A),c=10*Math.sin(a+A),i=10*Math.cos(a-A),o=10*Math.sin(a-A);return[[C,t-C,C+n,t-C-c,C+i,t-C-o,C,t-C].join(" "),[e-C,C,e-C-n,C+c,e-C-i,C+o,e-C,C].join(" ")]}(t,a);return c.a.createElement("svg",{className:"ScreenFormBg",viewBox:"0 0 ".concat(e.width," ").concat(e.height),width:"100%"},c.a.createElement("line",Object.assign({},n,{className:"ScreenFormBg-svg-stroke"})),c.a.createElement("line",Object.assign({},i,{className:"ScreenFormBg-svg-stroke"})),c.a.createElement("line",Object.assign({},o,{className:"ScreenFormBg-svg-stroke"})),c.a.createElement("polygon",{points:r[0],className:"ScreenFormBg-svg-fill"}),c.a.createElement("polygon",{points:r[1],className:"ScreenFormBg-svg-fill"}),c.a.createElement("polygon",{points:l[0],className:"ScreenFormBg-svg-fill"}),c.a.createElement("polygon",{points:l[1],className:"ScreenFormBg-svg-fill"}),c.a.createElement("polygon",{points:s[0],className:"ScreenFormBg-svg-fill"}),c.a.createElement("polygon",{points:s[1],className:"ScreenFormBg-svg-fill"}))},P=a(11),R=a.n(P),z=a(12),D=a.n(z),I=a(13),L=a.n(I),T=a(14),W=a.n(T),q={add:R.a,copy:D.a,remove:L.a,rotate:W.a};a(25),a(26);var H=function(e){var t=e.ratio,a=e.dpi,n=e.dotPitch,i=e.totalPixels;return c.a.createElement("div",{className:"ScreenFormMisc"},c.a.createElement("ul",{className:"ScreenFormMisc-info"},c.a.createElement("li",{className:"ScreenFormMisc-pairs"},c.a.createElement("span",{className:"ScreenFormMisc-pair"},c.a.createElement("span",{className:"ScreenFormMisc-key"},"Aspect\xa0ratio\xa0"),c.a.createElement("span",{className:"ScreenFormMisc-value"},t?"".concat(t.toFixed(2),":1 (").concat(N(t),")"):"-"))),c.a.createElement("li",{className:"ScreenFormMisc-pairs"},c.a.createElement("span",{className:"ScreenFormMisc-pair"},c.a.createElement("span",{className:"ScreenFormMisc-key"},"DPI\xa0"),c.a.createElement("span",{className:"ScreenFormMisc-value"},a?a.toFixed(2):"-"))," ",c.a.createElement("span",{className:"ScreenFormMisc-pair"},c.a.createElement("span",{className:"ScreenFormMisc-key"},"Dot\xa0pitch\xa0"),c.a.createElement("span",{className:"ScreenFormMisc-value"},n?"".concat(n.toFixed(4),"mm"):"-"))),c.a.createElement("li",{className:"ScreenFormMisc-pairs"},c.a.createElement("span",{className:"ScreenFormMisc-pair"},c.a.createElement("span",{className:"ScreenFormMisc-key"},"Pixel\xa0count\xa0"),c.a.createElement("span",{className:"ScreenFormMisc-value"},i?i.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g,","):"-")))))},J=j(1920,1080).ratio;var $=function(e){var t=Object(n.useRef)(null),a=Object(n.useRef)(null),i=Object(n.useRef)(null),o=e.width,r=e.height,l=e.diagonal,s=e.diagonalUnit,m=e.sizeUnit,d=g(l),h="-";d&&(h="in"===s?"".concat(y(d).toFixed(2),"cm"):"".concat(F(d).toFixed(2),'"'));var f=j(o,r,l,s),v=null,E=null,b=null,S=null,N=null;f instanceof w?(v=f.ratio,E=f.dpi,b=f.dotPitch,S=f.size,N=f.pixelCount.total,"in"===m&&(S={width:F(S.width),height:F(S.height)})):f instanceof x&&(v=f.ratio,N=f.pixelCount.total);var M=v||J,C=function(e){return e<9/22?{width:"".concat(900/22,"%")}:e<1?{width:"".concat(100*e,"%")}:{width:"100%"}}(M),A=function(e){return e>22/9?{paddingBottom:"".concat(900/22,"%")}:e<9/22?{paddingBottom:"".concat(2200/9,"%")}:{paddingBottom:"".concat(100/e,"%")}}(M),B=function(t){return function(a){e.onChange(e.id,Object(u.a)({},t,a.target.value))}},P=function(){var n,c,o,r=""===(null===(n=t.current)||void 0===n?void 0:n.value),l=""===(null===(c=a.current)||void 0===c?void 0:c.value),s=""===(null===(o=i.current)||void 0===o?void 0:o.value);r&&l&&s&&e.onRemove(e.id)};return Object(n.useEffect)((function(){var e;null===(e=t.current)||void 0===e||e.focus()}),[]),c.a.createElement("div",{"data-testid":"ScreenForm",style:C},c.a.createElement("div",{className:"ScreenForm-function"},c.a.createElement("button",{className:"ScreenForm-function-button",type:"button",onClick:function(){e.onChange(e.id,{width:r,height:o})}},c.a.createElement("img",{src:q.rotate,alt:"Rotate"})),c.a.createElement("button",{className:"ScreenForm-function-button",type:"button",onClick:function(){null!==f&&p("".concat(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{diagonalUnit:"in",sizeUnit:"cm"},a=e.toMap(t);return Array.from(a.keys()).map((function(e){return"".concat(e,": ").concat(a.get(e))})).join("\n")}(f,{diagonalUnit:s,sizeUnit:m}),"\n"))}},c.a.createElement("img",{src:q.copy,alt:"Copy"})),c.a.createElement("button",{className:"ScreenForm-function-button-negative",type:"button",onClick:function(){e.onRemove(e.id)}},c.a.createElement("img",{src:q.remove,alt:"Remove"}))),c.a.createElement("div",{className:"ScreenForm-screen"},c.a.createElement("div",{className:"ScreenForm-ratio",style:A}),c.a.createElement("div",{className:"ScreenForm-content"},c.a.createElement(U,{width:O(M),height:k(M)}),c.a.createElement("div",{className:"ScreenForm-grid"},c.a.createElement("ul",{className:"ScreenForm-grid-item ScreenForm-width"},c.a.createElement("li",null,c.a.createElement("input",{ref:t,className:"ScreenForm-input",type:"text",value:o,inputMode:"numeric",title:"Width",onChange:B("width"),onBlur:P}),"\xa0px"),c.a.createElement("li",null,S?"".concat(S.width.toFixed(2)).concat("in"===m?'"':m):"-")),c.a.createElement("ul",{className:"ScreenForm-grid-item ScreenForm-height"},c.a.createElement("li",null,c.a.createElement("input",{ref:a,className:"ScreenForm-input",type:"text",value:r,inputMode:"numeric",title:"Height",onChange:B("height"),onBlur:P}),"\xa0px"),c.a.createElement("li",null,S?"".concat(S.height.toFixed(2)).concat("in"===m?'"':m):"-")),c.a.createElement("ul",{className:"ScreenForm-grid-item ScreenForm-diagonal"},c.a.createElement("li",null,c.a.createElement("input",{ref:i,className:"ScreenForm-input",type:"text",value:l,inputMode:"decimal",title:"Diagonal",onChange:B("diagonal"),onBlur:P}),"\xa0",s),c.a.createElement("li",null,h))),c.a.createElement(H,{ratio:v,dpi:E,dotPitch:b,totalPixels:N}))))};a(27);var G=function(e){var t=e.uncheckedSideLabel,a=e.checkedSideLabel,n=e.checked;return c.a.createElement("label",{className:"ToggleSwitch"},c.a.createElement("span",{className:"ToggleSwitch-label"},t),c.a.createElement("input",{className:"ToggleSwitch-checkbox",type:"checkbox",checked:n,onChange:function(t){e.onChange(t.target.checked)}}),c.a.createElement("span",{className:"ToggleSwitch-switch"},c.a.createElement("span",{className:"ToggleSwitch-switch-knob"})),c.a.createElement("span",{className:"ToggleSwitch-label"},a))};a(28);var K=function(){var e=d(),t=Object(n.useState)("in"),a=Object(s.a)(t,2),i=a[0],o=a[1],m=Object(n.useState)("cm"),u=Object(s.a)(m,2),f=u[0],v=u[1],E=function(t,a){e.update(t,a)},b=function(t){e.remove(t)},S=e.idOrder.map((function(t){return c.a.createElement($,Object.assign({},e.data[t],{key:t,onChange:E,onRemove:b}))}));return c.a.createElement("div",{className:"App","data-testid":"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("h1",{className:"App-header-title"},"Aspect Ratio Calculator"),c.a.createElement("div",{className:"App-header-button-container"},c.a.createElement("button",{className:"App-header-button",type:"button",onClick:function(){p(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{diagonalUnit:"in",sizeUnit:"cm"},a=e.reduce((function(e,a){var n=a.width,c=a.height,i=a.diagonal,o=j(n,c,i,t.diagonalUnit);return null!==o&&e.push(o),e}),[]),n=a.map((function(e){return M(e,t)}));return n.join("\n\n")+"\n"}(e.idOrder.map((function(t){return e.data[t]})),{diagonalUnit:i,sizeUnit:f}))}},c.a.createElement("img",{src:q.copy,alt:"Copy all"})))),c.a.createElement("main",{className:"App-main"},S,c.a.createElement("div",{className:"App-main-add"},c.a.createElement("div",{className:"App-main-add-ratio"}),c.a.createElement("button",{className:"App-main-add-button",type:"button",onClick:function(){e.add({diagonalUnit:i,sizeUnit:f,width:"",height:"",diagonal:""})}},c.a.createElement("img",{src:q.add,alt:"Add"})))),c.a.createElement("footer",{className:"App-footer"},c.a.createElement("h2",{className:"App-footer-title"},"Options"),c.a.createElement("ul",{className:"App-footer-config"},c.a.createElement("li",{className:"App-footer-config-list"},c.a.createElement("span",{className:"App-footer-config-key"},"Width/Height"),c.a.createElement("span",{className:"App-footer-config-value"},c.a.createElement(G,{checkedSideLabel:"in",uncheckedSideLabel:"cm",checked:"in"===f,onChange:function(t){var a=t?"in":"cm";v(a);var n,c={},i=Object(l.a)(e.idOrder);try{for(i.s();!(n=i.n()).done;){var o=n.value;c[o]=Object(r.a)({},e.data[o],{sizeUnit:a})}}catch(s){i.e(s)}finally{i.f()}e.replace(c)}}))),c.a.createElement("li",{className:"App-footer-config-list"},c.a.createElement("span",{className:"App-footer-config-key"},"Diagonal"),c.a.createElement("span",{className:"App-footer-config-value"},c.a.createElement(G,{checkedSideLabel:"in",uncheckedSideLabel:"cm",checked:"in"===i,onChange:function(t){var a=t?"in":"cm";o(a);var n,c={},i=Object(l.a)(e.idOrder);try{for(i.s();!(n=i.n()).done;){var s,m=n.value,u=g(null===(s=e.data[m])||void 0===s?void 0:s.diagonal);c[m]="number"===typeof u?Object(r.a)({},e.data[m],{diagonal:h("in"===a?F(u):y(u),6),diagonalUnit:a}):Object(r.a)({},e.data[m],{diagonalUnit:a})}}catch(d){i.e(d)}finally{i.f()}e.replace(c)}}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[18,1,2]]]);
//# sourceMappingURL=main.95106b05.chunk.js.map