"use strict";(self.webpackChunktest_task_byndyusoft=self.webpackChunktest_task_byndyusoft||[]).push([[179],{555:(t,e,n)=>{var u=n(557),r=n(526),o=n(961),c="CLEAR_CALC",a="UPDATE_INPUT",i="UPDATE_RESULT",s=function(){return{type:c}},p=function(t){return{type:a,value:t}},l=function(t){return{type:i,value:t}};const f="keyboard-button-module__wrapper--LoMrW",d="keyboard-button-module__equal--eyjLK";var h=function(){return h=Object.assign||function(t){for(var e,n=1,u=arguments.length;n<u;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},h.apply(this,arguments)};const v=function(t){var e=t.value,n=t.onClick,r=t.equal,o="".concat(f," ").concat(r?d:"");return(0,u.jsx)("div",h({className:o,onClick:n},{children:e}))},k="keyboard-module__keyboard--iTvXP";var y={bracketOpen:{output:"(",token:"(",priority:0},bracketClose:{output:")",token:")",priority:0},plus:{output:"+",token:"+",priority:1},minus:{output:"-",token:"-",priority:1},multiplication:{output:"×",token:"*",priority:2},division:{output:"/",token:"/",priority:2},square:{output:"√",token:"undefined",priority:0},comma:{output:",",token:",",priority:10},percent:{output:"%",token:"%",priority:3}},b=function(t,e,n){var u,r=!1,o=!1;for(u in y)y[u].output===e[e.length-1]&&e[e.length-1]!==y.bracketClose.output&&(r=!0),y[u].token===t&&(o=!0,"multiplication"===u&&(t=y.multiplication.output));return e||(o&&(e+="0"),"00"===t&&(t="0")),"0"!==e||"00"!==t&&"0"!==t||(t=""),n&&o&&(t="0"+t),r&&o?"".concat(e.slice(0,e.length-1)).concat(t):"".concat(n?"":e).concat(t)},m={result:"",input:"",isCalculated:!1};const g=r.createContext(m);var j=function(){return j=Object.assign||function(t){for(var e,n=1,u=arguments.length;n<u;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},j.apply(this,arguments)};const O=function(t){var e=t.dispatch,n=(0,r.useContext)(g),o=n.input,c=n.isCalculated,a=(0,r.useState)(!1),i=a[0],f=a[1],d=["C",y.square.output,y.percent.output,y.division.output,"7","8","9",y.multiplication.output,"4","5","6",y.minus.output,"1","2","3",y.plus.output,"00","0",y.comma.output,"="],h=(0,r.useRef)(o),m=(0,r.useRef)(i),O=(0,r.useRef)(c),_=function(t){var e,n,u=function(t){var e="",n=[],u=[];return t.split("").forEach((function(t){if(isNaN(+t))if(t===y.comma.output)e+=".";else if(t===y.square.output)n.push(y.square);else if(t===y.bracketOpen.output)n.push(y.bracketOpen);else{""!==e&&(u.push(e),e="");var r=Object.entries(y).find((function(e){return e[1].output===t}));if(!r)return"Error";if(n.length)if(t!==y.bracketClose.token)n[n.length-1].priority>=r[1].priority&&(u.push(n[n.length-1].output),n.pop()),n.push(r[1]);else{for(var o=n.length-1;n.length&&n[o].token!==y.bracketOpen.token;)n[o].token!==y.bracketOpen.token&&u.push(n[o].output),n.pop(),o--;n[o].token===y.bracketOpen.token&&(n.pop(),u.push(n[o-1].output),n.pop())}else n.push(r[1])}else e+=t})),e&&u.push(e),n.length&&n.reverse().forEach((function(t){t.output!==y.bracketClose.output&&u.push(t.output)})),u}(t);return n=[],(e=u).forEach((function(t,u){var r=Number.parseFloat(t);if(isNaN(r)){var o=0,c=n[n.length-2],a=n[n.length-1];switch(t){case y.plus.output:o=c+a;break;case y.minus.output:o=c-a;break;case y.multiplication.output:o=c*a;break;case y.division.output:o=c/a;break;case y.square.output:o=Math.sqrt(a);break;case y.percent.output:e[u+1]!==y.plus.output&&e[u+1]!==y.minus.output||(o=c*a/100),e[u+1]!==y.multiplication.output&&e[u+1]!==y.division.output||(o=a/100)}t===y.percent.output?n.splice(n.length-1,1):n.splice(n.length-2,2),n.push(o)}else n.push(r)})),n[0].toString().replace(/\./,",").slice(0,9)},C=function(t){var n=function(t){return t===y.multiplication.output&&(t=y.multiplication.token),t||""}(t.target.textContent);switch(n){case"C":e(s());break;case y.square.output:e(p(o?"".concat(n,"(").concat(o,")"):"".concat(n,"(0)")));break;case"=":e(l(_(o)));break;default:c&&e(s()),e(p(b(n,o,c)))}},x=function(t){var n=h.current;if("string"==typeof n&&("Shift"!==t.key&&f(!0),!m.current))switch(t.key){case"Enter":e(l(_(n)));break;case"Escape":e(s());break;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case"+":case"-":case"/":case"*":case"%":O.current&&e(s()),e(p(b(t.key,n,O.current)));break;default:t.shiftKey&&"%"===t.key&&e(p(b(t.key,n,O.current)))}},w=function(){f(!1)};return(0,r.useEffect)((function(){h.current=o,m.current=i,O.current=c}),[o,i,c]),(0,r.useEffect)((function(){return document.addEventListener("keydown",(function(t){return x(t)})),document.addEventListener("keyup",(function(){return w()})),function(){document.removeEventListener("keydown",(function(t){return x(t)})),document.removeEventListener("keyup",(function(){return w()}))}}),[]),(0,u.jsx)("div",j({className:"".concat(k)},{children:d.map((function(t,e){return"="===t?(0,u.jsx)(v,{value:t,onClick:C,equal:!0},e):(0,u.jsx)(v,{value:t,onClick:C},e)}))}))},_="output-section-module__outputSection--G0AAQ",C="output-section-module__output--swxna",x="output-section-module__result--YDPBz";var w=function(){return w=Object.assign||function(t){for(var e,n=1,u=arguments.length;n<u;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},w.apply(this,arguments)};const E=function(){var t=(0,r.useContext)(g),e=t.input,n=t.result;return(0,u.jsxs)("div",w({className:"".concat(_)},{children:[(0,u.jsx)("div",w({className:"".concat(C),"data-testid":"input"},{children:e})),(0,u.jsx)("div",w({className:"".concat(x),"data-testid":"result"},{children:n}))]}))};var N=function(){return N=Object.assign||function(t){for(var e,n=1,u=arguments.length;n<u;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},N.apply(this,arguments)},P={result:"",input:"",isCalculated:!1},q=function(t,e){switch(void 0===t&&(t=P),e.type){case c:return P;case a:return N(N({},t),{input:e.value});case i:return N(N({},t),{result:e.value,isCalculated:!0});default:return t}};const L="calculator-module__wrapper--x5tSn";var S=function(){return S=Object.assign||function(t){for(var e,n=1,u=arguments.length;n<u;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},S.apply(this,arguments)};const A=function(){var t=(0,r.useReducer)(q,m),e=t[0],n=t[1];return(0,u.jsx)(g.Provider,S({value:e},{children:(0,u.jsxs)("div",S({className:"".concat(L)},{children:[(0,u.jsx)(E,{}),(0,u.jsx)(O,{dispatch:n})]}))}))},R="app-modules__calcOverlay--UsPi_";var T=function(){return T=Object.assign||function(t){for(var e,n=1,u=arguments.length;n<u;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},T.apply(this,arguments)};const U=function(){return(0,u.jsx)("div",T({className:"".concat(R)},{children:(0,u.jsx)(A,{})}))};o.render((0,u.jsx)(r.StrictMode,{children:(0,u.jsx)(U,{})}),document.getElementById("root"))}},t=>{t.O(0,[216],(()=>{return e=555,t(t.s=e);var e}));t.O()}]);
//# sourceMappingURL=main.441c1936127809020d9c.js.map