!function(n){function e(e){for(var a,i,o=e[0],l=e[1],s=e[2],f=0,p=[];f<o.length;f++)i=o[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(n[a]=l[a]);for(c&&c(e);p.length;)p.shift()();return u.push.apply(u,s||[]),t()}function t(){for(var n,e=0;e<u.length;e++){for(var t=u[e],a=!0,o=1;o<t.length;o++){var l=t[o];0!==r[l]&&(a=!1)}a&&(u.splice(e--,1),n=i(i.s=t[0]))}return n}var a={},r={0:0},u=[];function i(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=a,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)i.d(t,a,function(e){return n[e]}.bind(null,a));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var s=0;s<o.length;s++)e(o[s]);var c=l;u.push([121,1]),t()}({121:function(n,e,t){t(122),n.exports=t(308)},308:function(n,e,t){"use strict";function a(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}t.r(e);var r=function(){function n(e,t){var a=this;if(function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.crackerConstructor=e,this.grains=t.map((function(n){return n.name})),100!==t.reduce((function(n,e){return n+e.default}),0))throw new Error("default sum must be 100!");this.inputs=t.map((function(n){return{name:n.name,node:e.querySelector("input[name=".concat(n.name,"]")),label:e.querySelector("[data-grain-type=".concat(n.name,"]")),value:n.default}})),this._update();var r=this.inputs.find((function(n){return n.name===a.grains[a.grains.length-1]}));r.node.value=r.value,e.addEventListener("change",this._onChangeHandler.bind(this)),e.addEventListener("input",this._onMoveThumbHandler.bind(this))}var e,t,r;return e=n,(t=[{key:"_onChangeHandler",value:function(n){var e=n.target,t=e.name,a=e.value;if(this.grains.find((function(n){return n===t}))){var r=this._getMaxInputValue(t),u=a<r?a:r;this._setValue(t,u),n.target.value=u,this._calcAndSetLastInputValue(),this._update()}}},{key:"_onMoveThumbHandler",value:function(n){var e=n.target,t=e.name,a=e.value;if(this.grains.find((function(n){return n===t}))){var r=this._getMaxInputValue(t),u=a<r?a:r;n.target.value=u,this._updateLabel(t,u)}}},{key:"_update",value:function(){var n=this;this.inputs.forEach((function(e){e.name!==n.grains[n.grains.length-1]&&(e.node.value=e.value),e.label.innerHTML=e.value+"%"}))}},{key:"_updateLabel",value:function(n,e){this.inputs.find((function(e){return e.name===n})).label.innerHTML=e+"%"}},{key:"_setValue",value:function(n,e){this.inputs.find((function(e){return e.name===n})).value=e}},{key:"_calcAndSetLastInputValue",value:function(){var n=this,e=this.grains[this.grains.length-1],t=100-this.inputs.filter((function(n){return n.name!==e})).reduce((function(n,e){return n+ +e.value}),0),a=this.inputs.find((function(n){return n.name===e})).node;this.lastInputAnimationInterval&&(clearInterval(this.lastInputAnimationInterval),this.lastInputAnimationInterval=null),this._setValue(e,t),this.lastInputAnimationInterval=setInterval((function(){a.value>t?a.stepDown():a.value<t?a.stepUp():(clearInterval(n.lastInputAnimationInterval),n.lastInputAnimationInterval=null)}),10)}},{key:"_getMaxInputValue",value:function(n){var e=this;return 100-this.inputs.filter((function(t){return t.name!==n&&t.name!==e.grains[e.grains.length-1]})).reduce((function(n,e){return n+ +e.value}),0)}}])&&a(e.prototype,t),r&&a(e,r),n}();document.addEventListener("DOMContentLoaded",(function(){var n=document.getElementById("constructor");new r(n,[{name:"soybean",default:90},{name:"sesame",default:10},{name:"wheat",default:0},{name:"corn",default:0}])}))}});