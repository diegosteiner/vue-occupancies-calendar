!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["vue-occupancies-calendar"]=t():e["vue-occupancies-calendar"]=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),o=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[n].concat(o).concat([a]).join("\n")}var i;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(r[o]=!0)}for(a=0;a<e.length;a++){var i=e[a];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},a=0;a<t.length;a++){var o=t[a],i=o[0],s={id:e+":"+a,css:o[1],media:o[2],sourceMap:o[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}n.r(t),n.d(t,"default",(function(){return p}));var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},i=a&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,c=!1,l=function(){},d=null,f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e,t,n,a){c=n,d=a||{};var i=r(e,t);return v(i),function(t){for(var n=[],a=0;a<i.length;a++){var s=i[a];(u=o[s.id]).refs--,n.push(u)}t?v(i=r(e,t)):i=[];for(a=0;a<n.length;a++){var u;if(0===(u=n[a]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete o[u.id]}}}}function v(e){for(var t=0;t<e.length;t++){var n=e[t],r=o[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(h(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var i=[];for(a=0;a<n.parts.length;a++)i.push(h(n.parts[a]));o[n.id]={id:n.id,refs:1,parts:i}}}}function m(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function h(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(c)return l;r.parentNode.removeChild(r)}if(f){var a=u++;r=s||(s=m()),t=b.bind(null,r,a,!1),n=b.bind(null,r,a,!0)}else r=m(),t=_.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var g,y=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function b(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function _(e,t){var n=t.css,r=t.media,a=t.sourceMap;if(r&&e.setAttribute("media",r),d.ssrId&&e.setAttribute("data-vue-ssr-id",t.id),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},,function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(1).default)("96e00fec",r,!1,{})},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,"\n.calendar-main[data-v-12cb4c6e]{font-size:1rem\n}\n.calendar-main *[data-v-12cb4c6e],.calendar-main *[data-v-12cb4c6e]:before,.calendar-main *[data-v-12cb4c6e]:after{box-sizing:border-box\n}\n.calendar-nav[data-v-12cb4c6e]{display:flex;font-size:2em\n}\n.calendar-nav header[data-v-12cb4c6e],.calendar-nav footer[data-v-12cb4c6e]{flex:2 1;text-align:center\n}\n.calendar-nav button[data-v-12cb4c6e]{display:block;flex:1 1;text-align:center;background:transparent;border:none\n}\n.calendar-months[data-v-12cb4c6e]{display:grid;grid-template-columns:repeat(auto-fill, minmax(14em, 15em));grid-template-rows:17em;grid-gap:1em;align-content:space-evenly;justify-content:space-evenly\n}\n",""])},function(e,t,n){var r=n(6);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(1).default)("7fcbb41a",r,!1,{})},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,"\n.calendar-month header[data-v-2a57d0e2]{font-weight:bold;text-align:center;padding:0.25em 0\n}\n.calendar-month .calendar-weekday[data-v-2a57d0e2]{font-weight:bold;text-align:center;padding:0.25em;font-size:0.65em\n}\n.calendar-month .calendar-days[data-v-2a57d0e2]{display:grid;grid-template-columns:repeat(7, 2em);grid-template-rows:repeat(7, 2em);align-content:space-between;align-items:items;justify-content:space-between;grid-gap:0.15em\n}\n.calendar-month .calendar-days button[data-v-2a57d0e2]{text-align:center\n}\n",""])},function(e,t,n){"use strict";function r(e,t){if(t.length<e)throw new TypeError(e+" argument"+e>1?"s":" required, but only "+t.length+" present")}function a(e){r(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function o(e){r(1,arguments);var t=a(e);return t.setDate(1),t.setHours(0,0,0,0),t}function i(e){r(1,arguments);var t=a(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}n.r(t);var s={props:{datetime:Date,locale:Object},computed:{daysOfMonth:function(){return function(e,t){r(1,arguments);var n=e||{},o=a(n.start),i=a(n.end),s=i.getTime();if(!(o.getTime()<=s))throw new RangeError("Invalid interval");var u=[],c=o;c.setHours(0,0,0,0);var l=t&&"step"in t?Number(t.step):1;if(l<1||isNaN(l))throw new RangeError("`options.step` must be a number greater than 1");for(;c.getTime()<=s;)u.push(a(c)),c.setDate(c.getDate()+l),c.setHours(0,0,0,0);return u}({start:o(this.datetime),end:i(this.datetime)})},monthName:function(){return this.locale.months[function(e){r(1,arguments);var t=a(e),n=t.getMonth();return n}(this.datetime)]},weekdayNames:function(){var e=Array.from(this.locale.weekdays);return e.push(e.shift()),e},monthStartsAfter:function(){return(function(e){r(1,arguments);var t=a(e),n=t.getDay();return n}(o(this.datetime))+6)%7}}},u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"calendar-month"},[n("header",[e._v(e._s(e.monthName))]),e._v(" "),n("div",{staticClass:"calendar-days"},[e._l(e.weekdayNames,(function(t){return n("div",{key:t,staticClass:"calendar-weekday"},[e._v(e._s(t))])})),e._v(" "),e._l(e.monthStartsAfter,(function(e){return n("div",{key:e,staticClass:"calendar-day spacer"})})),e._v(" "),e._m(0)],2)])};function c(e,t,n,r,a,o,i,s){var u=typeof(e=e||{}).default;"object"!==u&&"function"!==u||(e=e.default);var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),o&&(l._scopeId=o),i?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=c):a&&(c=s?function(){a.call(this,this.$root.$options.shadowRoot)}:a),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(e,t){return c.call(t),d(e,t)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,c):[c]}return{exports:e,options:l}}u._withStripped=!0;var l=c(s,u,[function(){var e=this,t=e.$createElement,n=e._self._c||t;return e._l(e.daysOfMonth,(function(t){return n("time",{key:"day-"+t.toISOString(),staticClass:"calendar-day",attrs:{date:t.toISOString()}},[e._t("default",null,{date:t})],2)}))}],!1,(function(e){n(5)}),"data-v-2a57d0e2",null);l.options.__file="src/components/CalendarMonth.vue";var d=l.exports;function f(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function p(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());return t.setSeconds(0,0),6e4*n+t.getTime()%6e4}var v={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},m=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,h=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,g=/^([+-])(\d{2})(?::?(\d{2}))?$/;function y(e){var t,n={},r=e.split(v.dateTimeDelimiter);if(/:/.test(r[0])?(n.date=null,t=r[0]):(n.date=r[0],t=r[1],v.timeZoneDelimiter.test(n.date)&&(n.date=e.split(v.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var a=v.timezone.exec(t);a?(n.time=t.replace(a[1],""),n.timezone=a[1]):n.time=t}return n}function b(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:null};var a=r[1]&&parseInt(r[1]),o=r[2]&&parseInt(r[2]);return{year:null==o?a:100*o,restDateString:e.slice((r[1]||r[2]).length)}}function _(e,t){if(null===t)return null;var n=e.match(m);if(!n)return null;var r=!!n[4],a=w(n[1]),o=w(n[2])-1,i=w(n[3]),s=w(n[4]),u=w(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,s,u)?function(e,t,n){var r=new Date(0);r.setUTCFullYear(e,0,4);var a=r.getUTCDay()||7,o=7*(t-1)+n+1-a;return r.setUTCDate(r.getUTCDate()+o),r}(t,s,u):new Date(NaN);var c=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(S[t]||(x(e)?29:28))}(t,o,i)&&function(e,t){return t>=1&&t<=(x(e)?366:365)}(t,a)?(c.setUTCFullYear(t,o,Math.max(a,i)),c):new Date(NaN)}function w(e){return e?parseInt(e):1}function D(e){var t=e.match(h);if(!t)return null;var n=N(t[1]),r=N(t[2]),a=N(t[3]);return function(e,t,n){if(24===e)return 0===t&&0===n;return n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,r,a)?36e5*n+6e4*r+1e3*a:NaN}function N(e){return e&&parseFloat(e.replace(",","."))||0}function C(e){if("Z"===e)return 0;var t=e.match(g);if(!t)return 0;var n="+"===t[1]?-1:1,r=parseInt(t[2]),a=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,a)?n*(36e5*r+6e4*a):NaN}var S=[31,null,31,30,31,30,31,31,30,31,30,31];function x(e){return e%400==0||e%4==0&&e%100}function j(e){r(1,arguments);var t=a(e);return!isNaN(t)}function M(e){r(1,arguments);var t=a(e),n=t.getFullYear(),o=t.getMonth(),i=new Date(0);return i.setFullYear(n,o+1,0),i.setHours(0,0,0,0),i.getDate()}function O(e,t){r(2,arguments);var n=a(e),o=f(t),i=n.getMonth()+o,s=new Date(0);s.setFullYear(n.getFullYear(),i,1),s.setHours(0,0,0,0);var u=M(s);return n.setMonth(i,Math.min(u,n.getDate())),n}function T(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var k={components:{CalendarMonth:d},props:{displayMonths:{type:Number,default:4},firstDate:{default:null},locale:{type:Object,default:function(){return{next:"→",prev:"←",weekdays:["So","Mo","Di","Mi","Do","Fr","Sa"],months:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]}}}},data:function(){var e=function(e,t){r(1,arguments);var n=t||{},a=null==n.additionalDigits?2:f(n.additionalDigits);if(2!==a&&1!==a&&0!==a)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var o,i=y(e);if(i.date){var s=b(i.date,a);o=_(s.restDateString,s.year)}if(isNaN(o)||!o)return new Date(NaN);var u,c=o.getTime(),l=0;if(i.time&&(l=D(i.time),isNaN(l)||null===l))return new Date(NaN);if(i.timezone){if(u=C(i.timezone),isNaN(u))return new Date(NaN)}else{var d=c+l,v=new Date(d);u=p(v);var m=new Date(d);u>0?m.setDate(v.getDate()+1):m.setDate(v.getDate()-1);var h=p(m)-u;h>0&&(u+=h)}return new Date(c+l+u)}(this.firstDate);return{startOfCalendar:o(j(e)?e:new Date)}},computed:{yearName:function(){return T(new Set(this.months.map((function(e){return function(e){r(1,arguments);var t=a(e),n=t.getFullYear();return n}(e)})))).join("/")},months:function(){return function(e){r(1,arguments);var t=e||{},n=a(t.start),o=a(t.end),i=o.getTime();if(!(n.getTime()<=i))throw new RangeError("Invalid interval");var s=[],u=n;for(u.setHours(0,0,0,0),u.setDate(1);u.getTime()<=i;)s.push(a(u)),u.setMonth(u.getMonth()+1);return s}({start:o(this.startOfCalendar),end:O(this.startOfCalendar,this.displayMonths-1)})}},methods:{prev:function(){this.startOfCalendar=function(e,t){r(2,arguments);var n=f(t);return O(e,-n)}(this.startOfCalendar,1)},next:function(){this.startOfCalendar=O(this.startOfCalendar,1)}}},E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"calendar-main"},[n("nav",{staticClass:"calendar-nav"},[n("button",{on:{click:function(t){return t.preventDefault(),e.prev(t)}}},[e._v(e._s(e.locale.prev))]),e._v(" "),n("header",[e._v(e._s(e.yearName))]),e._v(" "),n("button",{on:{click:function(t){return t.preventDefault(),e.next(t)}}},[e._v(e._s(e.locale.next))])]),e._v(" "),n("div",{staticClass:"calendar-months"},e._l(e.months,(function(t){return n("calendar-month",{key:"month-"+t.toISOString(),attrs:{datetime:t,locale:e.locale},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.date;return[e._t("default",null,{date:n})]}}],null,!0)})})),1),e._v(" "),n("nav",{staticClass:"calendar-nav"},[n("button",{on:{click:function(t){return t.preventDefault(),e.prev(t)}}},[e._v(e._s(e.locale.prev))]),e._v(" "),n("footer"),e._v(" "),n("button",{on:{click:function(t){return t.preventDefault(),e.next(t)}}},[e._v(e._s(e.locale.next))])])])};E._withStripped=!0;var R=c(k,E,[],!1,(function(e){n(3)}),"data-v-12cb4c6e",null);R.options.__file="src/components/Calendar.vue";var I=R.exports;n.d(t,"Calendar",(function(){return I})),n.d(t,"CalendarMonth",(function(){return d}));t.default={install:function(e){e.component("calendar",I),e.component("calendar-month",d)}}}])}));