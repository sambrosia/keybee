// kaybee 0.2.1 | MIT License | Copyright (c) 2018 Sam Woodruff
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.kaybee=t()}(this,function(){"use strict";function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var e,a=(function(e){var r=Object.prototype.hasOwnProperty,y="~";function n(){}function c(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function o(e,t,n,r,o){if("function"!=typeof n)throw new TypeError("The listener must be a function");var s=new c(n,r||e,o),i=y?y+t:t;return e._events[i]?e._events[i].fn?e._events[i]=[e._events[i],s]:e._events[i].push(s):(e._events[i]=s,e._eventsCount++),e}function a(e,t){0==--e._eventsCount?e._events=new n:delete e._events[t]}function t(){this._events=new n,this._eventsCount=0}Object.create&&(n.prototype=Object.create(null),(new n).__proto__||(y=!1)),t.prototype.eventNames=function(){var e,t,n=[];if(0===this._eventsCount)return n;for(t in e=this._events)r.call(e,t)&&n.push(y?t.slice(1):t);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(e)):n},t.prototype.listeners=function(e){var t=y?y+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var r=0,o=n.length,s=new Array(o);r<o;r++)s[r]=n[r].fn;return s},t.prototype.listenerCount=function(e){var t=y?y+e:e,n=this._events[t];return n?n.fn?1:n.length:0},t.prototype.emit=function(e,t,n,r,o,s){var i=y?y+e:e;if(!this._events[i])return!1;var c,f,a=this._events[i],u=arguments.length;if(a.fn){switch(a.once&&this.removeListener(e,a.fn,void 0,!0),u){case 1:return a.fn.call(a.context),!0;case 2:return a.fn.call(a.context,t),!0;case 3:return a.fn.call(a.context,t,n),!0;case 4:return a.fn.call(a.context,t,n,r),!0;case 5:return a.fn.call(a.context,t,n,r,o),!0;case 6:return a.fn.call(a.context,t,n,r,o,s),!0}for(f=1,c=new Array(u-1);f<u;f++)c[f-1]=arguments[f];a.fn.apply(a.context,c)}else{var p,l=a.length;for(f=0;f<l;f++)switch(a[f].once&&this.removeListener(e,a[f].fn,void 0,!0),u){case 1:a[f].fn.call(a[f].context);break;case 2:a[f].fn.call(a[f].context,t);break;case 3:a[f].fn.call(a[f].context,t,n);break;case 4:a[f].fn.call(a[f].context,t,n,r);break;default:if(!c)for(p=1,c=new Array(u-1);p<u;p++)c[p-1]=arguments[p];a[f].fn.apply(a[f].context,c)}}return!0},t.prototype.on=function(e,t,n){return o(this,e,t,n,!1)},t.prototype.once=function(e,t,n){return o(this,e,t,n,!0)},t.prototype.removeListener=function(e,t,n,r){var o=y?y+e:e;if(!this._events[o])return this;if(!t)return a(this,o),this;var s=this._events[o];if(s.fn)s.fn!==t||r&&!s.once||n&&s.context!==n||a(this,o);else{for(var i=0,c=[],f=s.length;i<f;i++)(s[i].fn!==t||r&&!s[i].once||n&&s[i].context!==n)&&c.push(s[i]);c.length?this._events[o]=1===c.length?c[0]:c:a(this,o)}return this},t.prototype.removeAllListeners=function(e){var t;return e?(t=y?y+e:e,this._events[t]&&a(this,t)):(this._events=new n,this._eventsCount=0),this},t.prototype.off=t.prototype.removeListener,t.prototype.addListener=t.prototype.on,t.prefixed=y,t.EventEmitter=t,e.exports=t}(e={exports:{}},e.exports),e.exports);return function(e){function o(){var e,t,n,r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),t=this,(e=!(n=i(o).call(this))||"object"!=typeof n&&"function"!=typeof n?f(t):n).options=function(o){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},t=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),t.forEach(function(e){var t,n,r;t=o,r=s[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r})}return o}({renameKeys:!0,repeat:!0,listen:!0},r),e.pressedKeys={},e.pressedCodes={},document&&e.options.listen&&(document.addEventListener("keydown",e.handleKeyEvent.bind(f(f(e)))),document.addEventListener("keyup",e.handleKeyEvent.bind(f(f(e))))),e}var t,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(o,a),t=o,r=[{key:"transformKeyName",value:function(e){return e.toLowerCase().replace(/^arrow/,"").replace(/(^\s$)|spacebar/,"space")}}],(n=[{key:"isKeyDown",value:function(e){return this.pressedKeys[e]||!1}},{key:"isCodeDown",value:function(e){return this.pressedCodes[e]||!1}},{key:"handleKeyEvent",value:function(e){if(this.options.repeat||!e.repeat){var t="keydown"===e.type,n=this.options.renameKeys?o.transformKeyName(e.key):e.key,r=e.code;this.pressedKeys[n]=t,this.pressedCodes[r]=t,this.emit(e.type,n,r,e.repeat)}}}])&&s(t.prototype,n),r&&s(t,r),o}()});