/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _navbar = __webpack_require__(3);
	
	var _navbar2 = _interopRequireDefault(_navbar);
	
	var _store = __webpack_require__(4);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _checkRun = __webpack_require__(8);
	
	var _checkRun2 = _interopRequireDefault(_checkRun);
	
	var _home = __webpack_require__(9);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _words = __webpack_require__(12);
	
	var _words2 = _interopRequireDefault(_words);
	
	var _wordsNew = __webpack_require__(15);
	
	var _wordsNew2 = _interopRequireDefault(_wordsNew);
	
	var _WordsEdit = __webpack_require__(18);
	
	var _WordsEdit2 = _interopRequireDefault(_WordsEdit);
	
	var _CheckRun = __webpack_require__(20);
	
	var _CheckRun2 = _interopRequireDefault(_CheckRun);
	
	__webpack_require__(23);
	
	__webpack_require__(27);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Ctrl = function Ctrl(name) {
	    _classCallCheck(this, Ctrl);
	
	    this.name = _mithril2.default.prop(name);
	};
	
	_store2.default.init();
	// console.log(store.wordList.length);
	_store2.default.addAll(_store2.default.wordList, [{
	    en: "hello",
	    ja: "こんにちは"
	}, {
	    en: "Apple",
	    ja: "りんご"
	}, {
	    en: "window",
	    ja: "窓"
	}]);
	
	var test = new _checkRun2.default();
	// console.log(JSON.stringify(test.word()));
	// test.isFlag();
	// test.getNextWord();
	console.log(JSON.stringify(test.word()));
	// console.log(store.wordList.length);
	// console.log(JSON.stringify(store.wordList));
	
	var test1 = {
	    controller: function controller() {
	        return new Ctrl("tomokazu");
	    },
	    view: function view(ctrl) {
	        return (0, _mithril2.default)("div", [(0, _navbar2.default)(_store2.default.scene.words.navbar), (0, _mithril2.default)(".displayFlex flex_column nowrap", {
	            "style": {
	                "padding-top": "6rem"
	            }
	        }, [(0, _mithril2.default)(".card", {
	            "style": {
	                "margin": "0.5em"
	            }
	        }, [(0, _mithril2.default)("label", {
	            "for": "hoge"
	        }, "test"), (0, _mithril2.default)("input", {
	            "type": "text",
	            "class": "u-full-width",
	            "id": "hoge",
	            "value": ctrl.name(),
	            "oninput": _mithril2.default.withAttr("value", ctrl.name)
	        }), (0, _mithril2.default)("button", {
	            "class": "u-full-width"
	        }, "submit")]), (0, _mithril2.default)(".card", {
	            "style": {
	                "margin": "0.5em"
	            }
	        }, [(0, _mithril2.default)("label", {
	            "for": "hoge"
	        }, "test"), (0, _mithril2.default)("input", {
	            "type": "text",
	            "class": "u-full-width",
	            "id": "hoge",
	            "value": ctrl.name(),
	            "oninput": _mithril2.default.withAttr("value", ctrl.name)
	        }), (0, _mithril2.default)("button", {
	            "class": "u-full-width"
	        }, "submit")]), (0, _mithril2.default)(".card", {
	            "style": {
	                "margin": "0.5em"
	            }
	        }, [(0, _mithril2.default)("label", {
	            "for": "hoge"
	        }, "test"), (0, _mithril2.default)("input", {
	            "type": "text",
	            "class": "u-full-width",
	            "id": "hoge",
	            "value": ctrl.name(),
	            "oninput": _mithril2.default.withAttr("value", ctrl.name)
	        }), (0, _mithril2.default)("button", {
	            "class": "u-full-width"
	        }, "submit")]), (0, _mithril2.default)(".card", {
	            "style": {
	                "margin": "0.5em"
	            }
	        }, [(0, _mithril2.default)("label", {
	            "for": "hoge"
	        }, "test"), (0, _mithril2.default)("input", {
	            "type": "text",
	            "class": "u-full-width",
	            "id": "hoge",
	            "value": ctrl.name(),
	            "oninput": _mithril2.default.withAttr("value", ctrl.name)
	        }), (0, _mithril2.default)("button", {
	            "class": "u-full-width"
	        }, "submit")])])]);
	    }
	};
	
	// function getData(){
	//     m.request({
	//         method: "GET",
	//         url: "https://script.google.com/macros/s/AKfycbyscrb4rLWzr3im1WCdAbQWDl-k14mRyAyGkuVBzTyPwm9uSNQ/exec",
	//         initialValue: []
	//     }).then(function(res){
	//         console.log(res);
	//     });
	// }
	//getData();
	// m.mount(document.body, test);
	// m.route(document.body, "/", {
	//     "/": Home,
	//     "/home": Home,
	//     "/words": Words,
	//     "/words/new": WordsNew,
	//     "/words/edit": WordsEdit,
	//     "/check": Check,
	//     "/check/run": CheckRun,
	//     "/test": Test,
	//     "/test/run": TestRun,
	//     "/test/result": TestResult
	// });
	_mithril2.default.route(document.body, "/check/2", {
	    "/home": _home2.default,
	    "/words": _words2.default,
	    "/words/new": _wordsNew2.default,
	    "/words/:id": _WordsEdit2.default,
	    "/check/:id": _CheckRun2.default
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {/*
	Mithril v0.2.3
	http://mithril.js.org
	(c) 2014-2016 Leo Horie
	License: MIT
	*/
	!function(a,b){"use strict";var c=b(a);"object"==typeof module&&null!=module&&module.exports?module.exports=c: true?!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return c}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):a.m=c}("undefined"!=typeof window?window:{},function(a,b){"use strict";function c(a){return"function"==typeof a}function d(a){return"[object Object]"===Aa.call(a)}function e(a){return"[object String]"===Aa.call(a)}function f(){}function g(a){va=a.document,wa=a.location,ya=a.cancelAnimationFrame||a.clearTimeout,xa=a.requestAnimationFrame||a.setTimeout}function h(a,b){for(var c,d=[],e=/(?:(^|#|\.)([^#\.\[\]]+))|(\[.+?\])/g;c=e.exec(b);)if(""===c[1]&&c[2])a.tag=c[2];else if("#"===c[1])a.attrs.id=c[2];else if("."===c[1])d.push(c[2]);else if("["===c[3][0]){var f=/\[(.+?)(?:=("|'|)(.*?)\2)?\]/.exec(c[3]);a.attrs[f[1]]=f[3]||(f[2]?"":!0)}return d}function i(a,b){var c=b?a.slice(1):a;return 1===c.length&&Ba(c[0])?c[0]:c}function j(a,b,c){var d="class"in b?"class":"className";for(var e in b)za.call(b,e)&&(e===d&&null!=b[e]&&""!==b[e]?(c.push(b[e]),a[e]=""):a[e]=b[e]);c.length&&(a[d]=c.join(" "))}function k(a,b){var c=[].slice.call(arguments,1);if(d(a))return ba(a,c);if(!e(a))throw new Error("selector in m(selector, attrs, children) should be a string");var f=null!=b&&d(b)&&!("tag"in b||"view"in b||"subtree"in b),g=f?b:{},k={tag:"div",attrs:{},children:i(c,f)};return j(k.attrs,g,h(k,a)),k}function l(a,b){for(var c=0;c<a.length&&!b(a[c],c++););}function m(a,b){l(a,function(a,c){return(a=a&&a.attrs)&&null!=a.key&&b(a,c)})}function n(a){try{if(null!=a&&null!=a.toString())return a}catch(b){}return""}function o(a,b,c,d){try{q(a,b,c),b.nodeValue=d}catch(e){}}function p(a){for(var b=0;b<a.length;b++)Ba(a[b])&&(a=a.concat.apply([],a),b--);return a}function q(a,b,c){a.insertBefore(b,a.childNodes[c]||null)}function r(a,b,c,d){m(a,function(a,d){b[a=a.key]=b[a]?{action:Fa,index:d,from:b[a].index,element:c.nodes[b[a].index]||va.createElement("div")}:{action:Ea,index:d}});var e=[];for(var f in b)za.call(b,f)&&e.push(b[f]);var g=e.sort(R),h=new Array(c.length);return h.nodes=c.nodes.slice(),l(g,function(b){var e=b.index;if(b.action===Da&&(W(c[e].nodes,c[e]),h.splice(e,1)),b.action===Ea){var f=va.createElement("div");f.key=a[e].attrs.key,q(d,f,e),h.splice(e,0,{attrs:{key:a[e].attrs.key},nodes:[f]}),h.nodes[e]=f}if(b.action===Fa){var g=b.element,i=d.childNodes[e];i!==g&&null!==g&&d.insertBefore(g,i||null),h[e]=c[b.from],h.nodes[e]=g}}),h}function s(a,b,c,d){var e=a.length!==b.length;return e||m(a,function(a,c){var d=b[c];return e=d&&d.attrs&&d.attrs.key!==a.key}),e?r(a,c,b,d):b}function t(a,b,c){l(a,function(a,d){null!=b[d]&&c.push.apply(c,b[d].nodes)}),l(b.nodes,function(a,d){null!=a.parentNode&&c.indexOf(a)<0&&W([a],[b[d]])}),a.length<b.length&&(b.length=a.length),b.nodes=c}function u(a){var b=0;m(a,function(){return l(a,function(a){(a=a&&a.attrs)&&null==a.key&&(a.key="__mithril__"+b++)}),1})}function v(a,b,c){return a.tag!==b.tag?!0:c.sort().join()!==Object.keys(b.attrs).sort().join()?!0:a.attrs.id!==b.attrs.id?!0:a.attrs.key!==b.attrs.key?!0:"all"===k.redraw.strategy()?!b.configContext||b.configContext.retain!==!0:"diff"===k.redraw.strategy()?b.configContext&&b.configContext.retain===!1:!1}function w(a,b,d){v(a,b,d)&&(b.nodes.length&&W(b.nodes),b.configContext&&c(b.configContext.onunload)&&b.configContext.onunload(),b.controllers&&l(b.controllers,function(a){a.onunload&&a.onunload({preventDefault:f})}))}function x(a,b){return a.attrs.xmlns?a.attrs.xmlns:"svg"===a.tag?"http://www.w3.org/2000/svg":"math"===a.tag?"http://www.w3.org/1998/Math/MathML":b}function y(a,b,c){c.length&&(a.views=b,a.controllers=c,l(c,function(a){if(a.onunload&&a.onunload.$old&&(a.onunload=a.onunload.$old),Ga&&a.onunload){var b=a.onunload;a.onunload=f,a.onunload.$old=b}}))}function z(a,b,d,e,f){if(c(b.attrs.config)){var g=f.configContext=f.configContext||{};a.push(function(){return b.attrs.config.call(b,d,!e,g,f)})}}function A(a,c,d,e,f,g,h,i){var j=a.nodes[0];return e&&V(j,c.tag,c.attrs,a.attrs,f),a.children=Q(j,c.tag,b,b,c.children,a.children,!1,0,c.attrs.contenteditable?j:d,f,h),a.nodes.intact=!0,i.length&&(a.views=g,a.controllers=i),j}function B(a,b,c){var d;a.$trusted?d=Z(b,c,a):(d=[va.createTextNode(a)],b.nodeName in Ca||q(b,d[0],c));var e;return e="string"==typeof a||"number"==typeof a||"boolean"==typeof a?new a.constructor(a):a,e.nodes=d,e}function C(a,b,c,d,e,f){var g=b.nodes;return d&&d===va.activeElement||(a.$trusted?(W(g,b),g=Z(c,e,a)):"textarea"===f?c.value=a:d?d.innerHTML=a:((1===g[0].nodeType||g.length>1||g[0].nodeValue.trim&&!g[0].nodeValue.trim())&&(W(b.nodes,b),g=[va.createTextNode(a)]),o(c,g[0],e,a))),b=new a.constructor(a),b.nodes=g,b}function D(a,b,c,d,e,f,g){return a.nodes.length?a.valueOf()!==b.valueOf()||e?C(b,a,d,f,c,g):(a.nodes.intact=!0,a):B(b,d,c)}function E(a){if(a.$trusted){var b=a.match(/<[^\/]|\>\s*[^<]/g);if(null!=b)return b.length}else if(Ba(a))return a.length;return 1}function F(a,c,d,e,f,g,h,i,j){a=p(a);var k=[],l=c.length===a.length,n=0,o={},q=!1;m(c,function(a,b){q=!0,o[c[b].attrs.key]={action:Da,index:b}}),u(a),q&&(c=s(a,c,o,d));for(var r=0,v=0,w=a.length;w>v;v++){var x=Q(d,f,c,e,a[v],c[r],g,e+n||n,h,i,j);x!==b&&(l=l&&x.nodes.intact,n+=E(x),c[r++]=x)}return l||t(a,c,k),c}function G(a,b,c,d,e){if(null!=b){if(Aa.call(b)===Aa.call(a))return b;if(e&&e.nodes){var f=c-d,g=f+(Ba(a)?a:b.nodes).length;W(e.nodes.slice(f,g),e.slice(f,g))}else b.nodes&&W(b.nodes,b)}return b=new a.constructor,b.tag&&(b={}),b.nodes=[],b}function H(a,b){return a.attrs.is?null==b?va.createElement(a.tag,a.attrs.is):va.createElementNS(b,a.tag,a.attrs.is):null==b?va.createElement(a.tag):va.createElementNS(b,a.tag)}function I(a,b,c,d){return d?V(b,a.tag,a.attrs,{},c):a.attrs}function J(a,c,d,e,f,g){return null!=a.children&&a.children.length>0?Q(c,a.tag,b,b,a.children,d.children,!0,0,a.attrs.contenteditable?c:e,f,g):a.children}function K(a,b,c,d,e,f,g){var h={tag:a.tag,attrs:b,children:c,nodes:[d]};return y(h,f,g),h.children&&!h.children.nodes&&(h.children.nodes=[]),"select"===a.tag&&"value"in a.attrs&&V(d,a.tag,{value:a.attrs.value},{},e),h}function L(a,b,d,e){var f;return f="diff"===k.redraw.strategy()&&a?a.indexOf(b):-1,f>-1?d[f]:c(e)?new e:{}}function M(a,b,c,d){null!=d.onunload&&Ia.map(function(a){return a.handler}).indexOf(d.onunload)<0&&Ia.push({controller:d,handler:d.onunload}),a.push(c),b.push(d)}function N(a,b,c,d,e,f){var g=L(c.views,b,d,a.controller),h=a&&a.attrs&&a.attrs.key;return a=0===Ga||Ja||d&&d.indexOf(g)>-1?a.view(g):{tag:"placeholder"},"retain"===a.subtree?a:(a.attrs=a.attrs||{},a.attrs.key=h,M(f,e,b,g),a)}function O(a,b,c,d){for(var e=b&&b.controllers;null!=a.view;)a=N(a,a.view.$original||a.view,b,e,d,c);return a}function P(a,b,c,d,f,g,h,i){var j=[],k=[];if(a=O(a,b,j,k),"retain"===a.subtree)return b;if(!a.tag&&k.length)throw new Error("Component template must return a virtual element, not an array, string, etc.");a.attrs=a.attrs||{},b.attrs=b.attrs||{};var l=Object.keys(a.attrs),m=l.length>("key"in a.attrs?1:0);if(w(a,b,l),e(a.tag)){var n=0===b.nodes.length;h=x(a,h);var o;if(n){o=H(a,h);var p=I(a,o,h,m),r=J(a,o,b,c,h,i);b=K(a,p,r,o,h,j,k)}else o=A(b,a,c,m,h,j,i,k);return(n||g===!0&&null!=o)&&q(d,o,f),z(i,a,o,n,b),b}}function Q(a,b,e,f,g,h,i,j,k,l,m){return g=n(g),"retain"===g.subtree?h:(h=G(g,h,j,f,e),Ba(g)?F(g,h,a,j,b,i,k,l,m):null!=g&&d(g)?P(g,h,k,a,j,i,l,m):c(g)?h:D(h,g,j,a,i,k,b))}function R(a,b){return a.action-b.action||a.index-b.index}function S(a,b,c){for(var d in b)za.call(b,d)&&(null==c||c[d]!==b[d])&&(a.style[d]=b[d]);for(d in c)za.call(c,d)&&(za.call(b,d)||(a.style[d]=""))}function T(a,b,e,f,g,h){if("config"===b||"key"===b)return!0;if(c(e)&&"on"===b.slice(0,2))a[b]=$(e,a);else if("style"===b&&null!=e&&d(e))S(a,e,f);else if(null!=h)"href"===b?a.setAttributeNS("http://www.w3.org/1999/xlink","href",e):a.setAttribute("className"===b?"class":b,e);else if(b in a&&!Ka[b])try{("input"!==g||a[b]!==e)&&(a[b]=e)}catch(i){a.setAttribute(b,e)}else a.setAttribute(b,e)}function U(a,b,c,d,e,f,g){if(b in e&&d===c)"value"===b&&"input"===f&&a.value!==c&&(a.value=c);else{e[b]=c;try{return T(a,b,c,d,f,g)}catch(h){if(h.message.indexOf("Invalid argument")<0)throw h}}}function V(a,b,c,d,e){for(var f in c)if(za.call(c,f)&&U(a,f,c[f],d[f],d,b,e))continue;return d}function W(a,b){for(var c=a.length-1;c>-1;c--)if(a[c]&&a[c].parentNode){try{a[c].parentNode.removeChild(a[c])}catch(d){}b=[].concat(b),b[c]&&X(b[c])}a.length&&(a.length=0)}function X(a){a.configContext&&c(a.configContext.onunload)&&(a.configContext.onunload(),a.configContext.onunload=null),a.controllers&&l(a.controllers,function(a){c(a.onunload)&&a.onunload({preventDefault:f})}),a.children&&(Ba(a.children)?l(a.children,X):a.children.tag&&X(a.children))}function Y(a,b){try{a.appendChild(va.createRange().createContextualFragment(b))}catch(c){a.insertAdjacentHTML("beforeend",b)}}function Z(a,b,c){var d=a.childNodes[b];if(d){var e=1!==d.nodeType,f=va.createElement("span");e?(a.insertBefore(f,d||null),f.insertAdjacentHTML("beforebegin",c),a.removeChild(f)):d.insertAdjacentHTML("beforebegin",c)}else Y(a,c);for(var g=[];a.childNodes[b]!==d;)g.push(a.childNodes[b]),b++;return g}function $(a,b){return function(c){c=c||event,k.redraw.strategy("diff"),k.startComputation();try{return a.call(b,c)}finally{fa()}}}function _(a){var b=Ma.indexOf(a);return 0>b?Ma.push(a)-1:b}function aa(a){function b(){return arguments.length&&(a=arguments[0]),a}return b.toJSON=function(){return a},b}function ba(a,b){function c(){return(a.controller||f).apply(this,b)||this}function d(c){for(var d=[c].concat(b),e=1;e<arguments.length;e++)d.push(arguments[e]);return a.view.apply(a,d)}a.controller&&(c.prototype=a.controller.prototype),d.$original=a.view;var e={controller:c,view:d};return b[0]&&null!=b[0].key&&(e.attrs={key:b[0].key}),e}function ca(a,b,c,d){if(!d){k.redraw.strategy("all"),k.startComputation(),Pa[c]=b;var e;e=Oa=a?a:a={controller:f};var g=new(a.controller||f);return e===Oa&&(Ra[c]=g,Qa[c]=a),fa(),null===a&&da(b,c),Ra[c]}null==a&&da(b,c)}function da(a,b){Pa.splice(b,1),Ra.splice(b,1),Qa.splice(b,1),ma(a),Ma.splice(_(a),1)}function ea(){Ua&&(Ua(),Ua=null),l(Pa,function(a,b){var c=Qa[b];if(Ra[b]){var d=[Ra[b]];k.render(a,c.view?c.view(Ra[b],d):"")}}),Va&&(Va(),Va=null),Sa=null,Ta=new Date,k.redraw.strategy("diff")}function fa(){"none"===k.redraw.strategy()?(Ga--,k.redraw.strategy("diff")):k.endComputation()}function ga(a){return a.slice($a[k.route.mode].length)}function ha(a,b,c){Ya={};var d=c.indexOf("?");-1!==d&&(Ya=la(c.substr(d+1,c.length)),c=c.substr(0,d));var e=Object.keys(b),f=e.indexOf(c);if(-1!==f)return k.mount(a,b[e[f]]),!0;for(var g in b)if(za.call(b,g)){if(g===c)return k.mount(a,b[g]),!0;var h=new RegExp("^"+g.replace(/:[^\/]+?\.{3}/g,"(.*?)").replace(/:[^\/]+/g,"([^\\/]+)")+"/?$");if(h.test(c))return c.replace(h,function(){var c=g.match(/:[^\/]+/g)||[],d=[].slice.call(arguments,1,-2);l(c,function(a,b){Ya[a.replace(/:|\./g,"")]=decodeURIComponent(d[b])}),k.mount(a,b[g])}),!0}}function ia(a){if(a=a||event,!(a.ctrlKey||a.metaKey||a.shiftKey||2===a.which)){a.preventDefault?a.preventDefault():a.returnValue=!1;var b,c=a.currentTarget||a.srcElement;for(b="pathname"===k.route.mode&&c.search?la(c.search.slice(1)):{};c&&!/a/i.test(c.nodeName);)c=c.parentNode;Ga=0,k.route(c[k.route.mode].slice($a[k.route.mode].length),b)}}function ja(){"hash"!==k.route.mode&&wa.hash?wa.hash=wa.hash:a.scrollTo(0,0)}function ka(a,c){var e={},f=[];for(var g in a)if(za.call(a,g)){var h=c?c+"["+g+"]":g,i=a[g];if(null===i)f.push(encodeURIComponent(h));else if(d(i))f.push(ka(i,h));else if(Ba(i)){var j=[];e[h]=e[h]||{},l(i,function(a){e[h][a]||(e[h][a]=!0,j.push(encodeURIComponent(h)+"="+encodeURIComponent(a)))}),f.push(j.join("&"))}else i!==b&&f.push(encodeURIComponent(h)+"="+encodeURIComponent(i))}return f.join("&")}function la(a){if(""===a||null==a)return{};"?"===a.charAt(0)&&(a=a.slice(1));var b=a.split("&"),c={};return l(b,function(a){var b=a.split("="),d=decodeURIComponent(b[0]),e=2===b.length?decodeURIComponent(b[1]):null;null!=c[d]?(Ba(c[d])||(c[d]=[c[d]]),c[d].push(e)):c[d]=e}),c}function ma(a){var c=_(a);W(a.childNodes,Na[c]),Na[c]=b}function na(a,b){var c=k.prop(b);return a.then(c),c.then=function(c,d){return na(a.then(c,d),b)},c["catch"]=c.then.bind(null,null),c}function oa(a,b){function e(a){i=a||eb,l.map(function(a){i===db?a.resolve(j):a.reject(j)})}function f(a,b,e,f){if((null!=j&&d(j)||c(j))&&c(a))try{var g=0;a.call(j,function(a){g++||(j=a,b())},function(a){g++||(j=a,e())})}catch(h){k.deferred.onerror(h),j=h,e()}else f()}function g(){var d;try{d=j&&j.then}catch(l){return k.deferred.onerror(l),j=l,i=cb,g()}i===cb&&k.deferred.onerror(j),f(d,function(){i=bb,g()},function(){i=cb,g()},function(){try{i===bb&&c(a)?j=a(j):i===cb&&c(b)&&(j=b(j),i=bb)}catch(g){return k.deferred.onerror(g),j=g,e()}j===h?(j=TypeError(),e()):f(d,function(){e(db)},e,function(){e(i===bb&&db)})})}var h=this,i=0,j=0,l=[];h.promise={},h.resolve=function(a){return i||(j=a,i=bb,g()),h},h.reject=function(a){return i||(j=a,i=cb,g()),h},h.promise.then=function(a,b){var c=new oa(a,b);return i===db?c.resolve(j):i===eb?c.reject(j):l.push(c),c.promise}}function pa(a){return a}function qa(c){var d="mithril_callback_"+(new Date).getTime()+"_"+Math.round(1e16*Math.random()).toString(36),e=va.createElement("script");a[d]=function(f){e.parentNode.removeChild(e),c.onload({type:"load",target:{responseText:f}}),a[d]=b},e.onerror=function(){return e.parentNode.removeChild(e),c.onerror({type:"error",target:{status:500,responseText:JSON.stringify({error:"Error making jsonp request"})}}),a[d]=b,!1},e.onload=function(){return!1},e.src=c.url+(c.url.indexOf("?")>0?"&":"?")+(c.callbackKey?c.callbackKey:"callback")+"="+d+"&"+ka(c.data||{}),va.body.appendChild(e)}function ra(b){var d=new a.XMLHttpRequest;if(d.open(b.method,b.url,!0,b.user,b.password),d.onreadystatechange=function(){4===d.readyState&&(d.status>=200&&d.status<300?b.onload({type:"load",target:d}):b.onerror({type:"error",target:d}))},b.serialize===JSON.stringify&&b.data&&"GET"!==b.method&&d.setRequestHeader("Content-Type","application/json; charset=utf-8"),b.deserialize===JSON.parse&&d.setRequestHeader("Accept","application/json, text/*"),c(b.config)){var f=b.config(d,b);null!=f&&(d=f)}var g="GET"!==b.method&&b.data?b.data:"";if(g&&!e(g)&&g.constructor!==a.FormData)throw new Error("Request data should be either be a string or FormData. Check the `serialize` option in `m.request`");return d.send(g),d}function sa(a){return a.dataType&&"jsonp"===a.dataType.toLowerCase()?qa(a):ra(a)}function ta(a,b,c){if("GET"===a.method&&"jsonp"!==a.dataType){var d=a.url.indexOf("?")<0?"?":"&",e=ka(b);a.url+=e?d+e:""}else a.data=c(b)}function ua(a,b){return b&&(a=a.replace(/:[a-z]\w+/gi,function(a){var c=a.slice(1),d=b[c];return delete b[c],d})),a}k.version=function(){return"v0.2.3"};var va,wa,xa,ya,za={}.hasOwnProperty,Aa={}.toString,Ba=Array.isArray||function(a){return"[object Array]"===Aa.call(a)},Ca={AREA:1,BASE:1,BR:1,COL:1,COMMAND:1,EMBED:1,HR:1,IMG:1,INPUT:1,KEYGEN:1,LINK:1,META:1,PARAM:1,SOURCE:1,TRACK:1,WBR:1};k.deps=function(b){return g(a=b||window),a},k.deps(a);var Da=1,Ea=2,Fa=3,Ga=0;k.startComputation=function(){Ga++},k.endComputation=function(){Ga>1?Ga--:(Ga=0,k.redraw())};var Ha,Ia=[],Ja=!1,Ka={list:1,style:1,form:1,type:1,width:1,height:1},La={appendChild:function(a){Ha===b&&(Ha=va.createElement("html")),va.documentElement&&va.documentElement!==a?va.replaceChild(a,va.documentElement):va.appendChild(a),this.childNodes=va.childNodes},insertBefore:function(a){this.appendChild(a)},childNodes:[]},Ma=[],Na={};k.render=function(a,c,d){if(!a)throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");var e,f=[],g=_(a),h=a===va;e=h||a===va.documentElement?La:a,h&&"html"!==c.tag&&(c={tag:"html",attrs:{},children:c}),Na[g]===b&&W(e.childNodes),d===!0&&ma(a),Na[g]=Q(e,null,b,b,c,Na[g],!1,0,null,b,f),l(f,function(a){a()})},k.trust=function(a){return a=new String(a),a.$trusted=!0,a},k.prop=function(a){return(null!=a&&d(a)||c(a))&&c(a.then)?na(a):aa(a)};var Oa,Pa=[],Qa=[],Ra=[],Sa=null,Ta=0,Ua=null,Va=null,Wa=16;k.component=function(a){var b=[].slice.call(arguments,1);return ba(a,b)},k.mount=k.module=function(a,b){if(!a)throw new Error("Please ensure the DOM element exists before rendering a template into it.");var d=Pa.indexOf(a);0>d&&(d=Pa.length);var e=!1,f={preventDefault:function(){e=!0,Ua=Va=null}};return l(Ia,function(a){a.handler.call(a.controller,f),a.controller.onunload=null}),e?l(Ia,function(a){a.controller.onunload=a.handler}):Ia=[],Ra[d]&&c(Ra[d].onunload)&&Ra[d].onunload(f),ca(b,a,d,e)};var Xa=!1;k.redraw=function(b){if(!Xa){Xa=!0,b&&(Ja=!0);try{Sa&&!b?(xa===a.requestAnimationFrame||new Date-Ta>Wa)&&(Sa>0&&ya(Sa),Sa=xa(ea,Wa)):(ea(),Sa=xa(function(){Sa=null},Wa))}finally{Xa=Ja=!1}}},k.redraw.strategy=k.prop(),k.withAttr=function(a,b,c){return function(d){d=d||event;var e=d.currentTarget||this,f=c||this,g=a in e?e[a]:e.getAttribute(a);b.call(f,g)}};var Ya,Za,$a={pathname:"",hash:"#",search:"?"},_a=f,ab=!1;k.route=function(b,c,d,f){if(0===arguments.length)return Za;if(3===arguments.length&&e(c)){_a=function(a){var e=Za=ga(a);if(!ha(b,d,e)){if(ab)throw new Error("Ensure the default route matches one of the routes defined in m.route");ab=!0,k.route(c,!0),ab=!1}};var g="hash"===k.route.mode?"onhashchange":"onpopstate";return a[g]=function(){var a=wa[k.route.mode];"pathname"===k.route.mode&&(a+=wa.search),Za!==ga(a)&&_a(a)},Ua=ja,void a[g]()}if(b.addEventListener||b.attachEvent){var h="pathname"!==k.route.mode?wa.pathname:"";return b.href=h+$a[k.route.mode]+f.attrs.href,void(b.addEventListener?(b.removeEventListener("click",ia),b.addEventListener("click",ia)):(b.detachEvent("onclick",ia),b.attachEvent("onclick",ia)))}if(e(b)){var i=Za;Za=b;var j,l=c||{},m=Za.indexOf("?");j=m>-1?la(Za.slice(m+1)):{};for(var n in l)za.call(l,n)&&(j[n]=l[n]);var o,p=ka(j);o=m>-1?Za.slice(0,m):Za,p&&(Za=o+(-1===o.indexOf("?")?"?":"&")+p);var q=(3===arguments.length?d:c)===!0||i===b;if(a.history.pushState){var r=q?"replaceState":"pushState";Ua=ja,Va=function(){a.history[r](null,va.title,$a[k.route.mode]+Za)},_a($a[k.route.mode]+Za)}else wa[k.route.mode]=Za,_a($a[k.route.mode]+Za)}},k.route.param=function(a){if(!Ya)throw new Error("You must call m.route(element, defaultRoute, routes) before calling m.route.param()");return a?Ya[a]:Ya},k.route.mode="search",k.route.buildQueryString=ka,k.route.parseQueryString=la,k.deferred=function(){var a=new oa;return a.promise=na(a.promise),a};var bb=1,cb=2,db=3,eb=4;return k.deferred.onerror=function(a){if("[object Error]"===Aa.call(a)&&!/ Error/.test(a.constructor.toString()))throw Ga=0,a},k.sync=function(a){function b(a,b){return function(g){return e[a]=g,b||(f="reject"),0===--d&&(c.promise(e),c[f](e)),g}}var c=k.deferred(),d=a.length,e=new Array(d),f="resolve";return a.length>0?l(a,function(a,c){a.then(b(c,!0),b(c,!1))}):c.resolve([]),c.promise},k.request=function(a){a.background!==!0&&k.startComputation();var b,c,d,e=new oa,f=a.dataType&&"jsonp"===a.dataType.toLowerCase();return f?(b=a.serialize=c=a.deserialize=pa,d=function(a){return a.responseText}):(b=a.serialize=a.serialize||JSON.stringify,c=a.deserialize=a.deserialize||JSON.parse,d=a.extract||function(a){return a.responseText.length||c!==JSON.parse?a.responseText:null}),a.method=(a.method||"GET").toUpperCase(),a.url=ua(a.url,a.data),ta(a,a.data,b),a.onload=a.onerror=function(b){try{b=b||event;var f=c(d(b.target,a));"load"===b.type?(a.unwrapSuccess&&(f=a.unwrapSuccess(f,b.target)),Ba(f)&&a.type?l(f,function(b,c){f[c]=new a.type(b)}):a.type&&(f=new a.type(f)),e.resolve(f)):(a.unwrapError&&(f=a.unwrapError(f,b.target)),e.reject(f))}catch(g){e.reject(g)}finally{a.background!==!0&&k.endComputation()}},sa(a),e.promise=na(e.promise,a.initialValue),e.promise},k});
	//# sourceMappingURL=mithril.min.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import helper from "./helper";
	
	var navbar = function navbar(args) {
	    return (0, _mithril2.default)(".displayFlexFixed", [(0, _mithril2.default)(".displayFlex card flex_row", {
	        "style": {
	            "flex": 1,
	            "align-items": "center",
	            "padding-top": "2rem"
	        }
	    }, [(0, _mithril2.default)("a", {
	        "style": {
	            "flex": "1",
	            "text-align": "center",
	            "font-size": "11px"
	        },
	        "onclick": args.l_btn.act
	    }, args.l_btn.label), (0, _mithril2.default)("div", {
	        "style": {
	            "flex": "3",
	            "text-align": "center"
	        }
	    }, args.title), (0, _mithril2.default)("a", {
	        "style": {
	            "flex": "1",
	            "text-align": "center",
	            "font-size": "11px"
	        },
	        "onclick": args.r_btn.act
	    }, args.r_btn.label)])]);
	};
	
	exports.default = navbar;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _underscore = __webpack_require__(5);
	
	var _underscore2 = _interopRequireDefault(_underscore);
	
	var _words = __webpack_require__(6);
	
	var _words2 = _interopRequireDefault(_words);
	
	var _check = __webpack_require__(7);
	
	var _check2 = _interopRequireDefault(_check);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var vm = {
	    scene: {
	        home: {
	            navbar: {
	                title: "ホーム",
	                l_btn: {
	                    label: "設定",
	                    act: function act() {}
	                },
	                r_btn: {
	                    label: "ヘルプ",
	                    act: function act() {}
	                }
	            },
	            content: {
	                menu: [{
	                    label: "単語帳へ",
	                    url: "/words",
	                    tips: ["単語の管理ができます。", "まずはここで単語を登録してください。"]
	                }, {
	                    label: "暗記カードへ",
	                    url: "/check",
	                    tips: ["単語の暗記ができます。", "直感とスピードが大切", "『わかる』『わからない』で分ける。"]
	                }, {
	                    label: "テストへ",
	                    url: "/test",
	                    tips: ["単語の復習ができます。", "正しい単語の意味を選択してください。"]
	                }]
	            }
	        },
	        words: {
	            navbar: {
	                title: "単語帳",
	                l_btn: {
	                    label: "戻る",
	                    act: function act() {
	                        _mithril2.default.route("/home");
	                    }
	                },
	                r_btn: {
	                    label: "追加",
	                    act: function act() {
	                        _mithril2.default.route("/words/new");
	                    }
	                }
	            },
	            content: {
	                list: []
	            }
	        },
	        wordsNew: {
	            navbar: {
	                title: "単語を追加",
	                l_btn: {
	                    label: "戻る",
	                    act: function act() {
	                        _mithril2.default.route("/words");
	                    }
	                },
	                r_btn: {
	                    label: "",
	                    act: function act() {}
	                }
	            },
	            content: {
	                button1: "追加する",
	                button2: "続けて追加"
	            }
	        },
	        wordsEdit: {
	            navbar: {
	                title: "単語を編集",
	                l_btn: {
	                    label: "戻る",
	                    act: function act() {
	                        _mithril2.default.route("/words");
	                    }
	                },
	                r_btn: {
	                    label: "",
	                    act: function act() {}
	                }
	            },
	            content: {
	                button: "登録する"
	            }
	        },
	        check: {
	            navbar: {
	                title: "暗記カード - メニュー",
	                l_btn: {
	                    label: "戻る",
	                    act: function act() {
	                        _mithril2.default.route("/home");
	                    }
	                },
	                r_btn: {
	                    label: "ヘルプ",
	                    act: function act() {}
	                }
	            },
	            content: {}
	        },
	        checkRun: {
	            navbar: {
	                title: "暗記カード - 実践",
	                l_btn: {
	                    label: "戻る",
	                    act: function act() {
	                        _mithril2.default.route("/check");
	                    }
	                },
	                r_btn: {
	                    label: "",
	                    act: function act() {}
	                }
	            },
	            content: {}
	        },
	        test: {
	            navbar: {
	                title: "テスト - メニュー",
	                l_btn: {
	                    label: "戻る",
	                    act: function act() {
	                        _mithril2.default.route("/home");
	                    }
	                },
	                r_btn: {
	                    label: "ヘルプ",
	                    act: function act() {}
	                }
	            },
	            content: {}
	        },
	        TestRun: {
	            navbar: {
	                title: "テスト - 実践",
	                l_btn: {
	                    label: "戻る",
	                    act: function act() {
	                        _mithril2.default.route("/test");
	                    }
	                },
	                r_btn: {
	                    label: "",
	                    act: function act() {}
	                }
	            },
	            content: {}
	        },
	        TestResult: {
	            navbar: {
	                title: "テスト - 結果",
	                l_btn: {
	                    label: "戻る",
	                    act: function act() {
	                        _mithril2.default.route("/home");
	                    }
	                },
	                r_btn: {
	                    label: "",
	                    act: function act() {}
	                }
	            },
	            content: {}
	        }
	    },
	    init: function init() {
	        vm.wordList = new _words2.default.List();
	        vm.checkList = new _check2.default.List();
	        // this.addAll(this.list, []);
	    },
	    add: function add(list, addItem) {
	        if (addItem) {
	            list.push(new _words2.default.Item(addItem));
	            // console.log("add");
	        }
	    },
	    addAll: function addAll(list, addList) {
	        addList.map(function (addItem) {
	            return vm.add(list, addItem);
	        });
	        // console.log("addAll");
	    },
	    addCheck: function addCheck(addItem) {
	        vm.checkList.push(new _check2.default.Item(addItem));
	    },
	    addCheckAll: function addCheckAll(addList) {
	        addList.map(function (addItem) {
	            return vm.addCheck(addItem);
	        });
	    },
	    getUrlParam: function getUrlParam(key) {
	        var deferred = _mithril2.default.deferred();
	        deferred.resolve(function () {
	            var res = Number(_mithril2.default.route.param(key));
	            return res - 1;
	        });
	        return deferred.promise;
	    },
	    getCheckWords: function getCheckWords(words, limit) {
	        return (0, _underscore2.default)(words).sample(limit);
	    },
	    incrimentCount: function incrimentCount(num, limit) {
	        if (num() === limit()) {
	            num(0);
	        } else {
	            num(num() + 1);
	        }
	    },
	    /**
	    *@param{Function}num 配列インデックス、m.prop(0)で作成したgetter-setter関数
	    *@param{Function}incrimentFunc 配列インデックスのインクリメントを行う関数
	    *@param{Function}d m.deferredで作成したpromiseファクトリー
	    */
	    getNextWord: function getNextWord(num, incrimentFunc, d) {
	        var def = d || _mithril2.default.deferred();
	        if (_typeof(num()) === Number) return;
	        try {
	            if (!vm.checkList[num()].flag()) {
	                def.resolve(function () {
	                    return vm.checkList[num()];
	                });
	                return def.promise;
	            } else if (vm.checkList[num()].flag()) {
	                // console.log(num++);
	                incrimentFunc();
	                vm.getNextWord(num, incrimentFunc, def);
	            }
	        } catch (e) {
	            console.error(e.message);
	        }
	    },
	    getNextWord1: function getNextWord1(num, limit) {
	        //引数の型チェック
	        if (_typeof(num()) === Number) return;
	        if (_typeof(limit()) === Number) return;
	        if (_typeof(vm.checkList[num()].flag()) === Boolean) return;
	        try {
	            switch (vm.checkList[num()].flag()) {
	                case true:
	                    {
	                        vm.incrimentCount(num, limit);
	                        return vm.getNextWord1(num, limit);
	                    }
	                case false:
	                    {
	                        return vm.checkList[num()];
	                    }
	                default:
	                    {
	                        console.error("error");
	                    }
	            }
	        } catch (e) {
	            console.error(e.message);
	        }
	    },
	    checkEndFlag: function checkEndFlag(limit) {
	        var result = _underscore2.default.countBy(vm.checkList, function (item) {
	            console.log(JSON.stringify(item));
	            return item.flag() === true ? "ok" : "no";
	        });
	        console.log(JSON.stringify(result));
	        return limit() <= result.ok;
	    }
	};
	
	exports.default = vm;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.
	
	(function() {
	
	  // Baseline setup
	  // --------------
	
	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;
	
	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;
	
	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
	
	  // Create quick reference variables for speed access to core prototypes.
	  var
	    push             = ArrayProto.push,
	    slice            = ArrayProto.slice,
	    toString         = ObjProto.toString,
	    hasOwnProperty   = ObjProto.hasOwnProperty;
	
	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind,
	    nativeCreate       = Object.create;
	
	  // Naked function reference for surrogate-prototype-swapping.
	  var Ctor = function(){};
	
	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };
	
	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }
	
	  // Current version.
	  _.VERSION = '1.8.3';
	
	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var optimizeCb = function(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1: return function(value) {
	        return func.call(context, value);
	      };
	      case 2: return function(value, other) {
	        return func.call(context, value, other);
	      };
	      case 3: return function(value, index, collection) {
	        return func.call(context, value, index, collection);
	      };
	      case 4: return function(accumulator, value, index, collection) {
	        return func.call(context, accumulator, value, index, collection);
	      };
	    }
	    return function() {
	      return func.apply(context, arguments);
	    };
	  };
	
	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  var cb = function(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
	    if (_.isObject(value)) return _.matcher(value);
	    return _.property(value);
	  };
	  _.iteratee = function(value, context) {
	    return cb(value, context, Infinity);
	  };
	
	  // An internal function for creating assigner functions.
	  var createAssigner = function(keysFunc, undefinedOnly) {
	    return function(obj) {
	      var length = arguments.length;
	      if (length < 2 || obj == null) return obj;
	      for (var index = 1; index < length; index++) {
	        var source = arguments[index],
	            keys = keysFunc(source),
	            l = keys.length;
	        for (var i = 0; i < l; i++) {
	          var key = keys[i];
	          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
	        }
	      }
	      return obj;
	    };
	  };
	
	  // An internal function for creating a new object that inherits from another.
	  var baseCreate = function(prototype) {
	    if (!_.isObject(prototype)) return {};
	    if (nativeCreate) return nativeCreate(prototype);
	    Ctor.prototype = prototype;
	    var result = new Ctor;
	    Ctor.prototype = null;
	    return result;
	  };
	
	  var property = function(key) {
	    return function(obj) {
	      return obj == null ? void 0 : obj[key];
	    };
	  };
	
	  // Helper for collection methods to determine whether a collection
	  // should be iterated as an array or as an object
	  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	  var getLength = property('length');
	  var isArrayLike = function(collection) {
	    var length = getLength(collection);
	    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	  };
	
	  // Collection Functions
	  // --------------------
	
	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function(obj, iteratee, context) {
	    iteratee = optimizeCb(iteratee, context);
	    var i, length;
	    if (isArrayLike(obj)) {
	      for (i = 0, length = obj.length; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };
	
	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length);
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };
	
	  // Create a reducing function iterating left or right.
	  function createReduce(dir) {
	    // Optimized iterator function as using arguments.length
	    // in the main function will deoptimize the, see #1991.
	    function iterator(obj, iteratee, memo, keys, index, length) {
	      for (; index >= 0 && index < length; index += dir) {
	        var currentKey = keys ? keys[index] : index;
	        memo = iteratee(memo, obj[currentKey], currentKey, obj);
	      }
	      return memo;
	    }
	
	    return function(obj, iteratee, memo, context) {
	      iteratee = optimizeCb(iteratee, context, 4);
	      var keys = !isArrayLike(obj) && _.keys(obj),
	          length = (keys || obj).length,
	          index = dir > 0 ? 0 : length - 1;
	      // Determine the initial value if none is provided.
	      if (arguments.length < 3) {
	        memo = obj[keys ? keys[index] : index];
	        index += dir;
	      }
	      return iterator(obj, iteratee, memo, keys, index, length);
	    };
	  }
	
	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = createReduce(1);
	
	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = createReduce(-1);
	
	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, predicate, context) {
	    var key;
	    if (isArrayLike(obj)) {
	      key = _.findIndex(obj, predicate, context);
	    } else {
	      key = _.findKey(obj, predicate, context);
	    }
	    if (key !== void 0 && key !== -1) return obj[key];
	  };
	
	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, predicate, context) {
	    var results = [];
	    predicate = cb(predicate, context);
	    _.each(obj, function(value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };
	
	  // Return all the elements for which a truth test fails.
	  _.reject = function(obj, predicate, context) {
	    return _.filter(obj, _.negate(cb(predicate)), context);
	  };
	
	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };
	
	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };
	
	  // Determine if the array or object contains a given item (using `===`).
	  // Aliased as `includes` and `include`.
	  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
	    if (!isArrayLike(obj)) obj = _.values(obj);
	    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
	    return _.indexOf(obj, item, fromIndex) >= 0;
	  };
	
	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function(obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function(value) {
	      var func = isFunc ? method : value[method];
	      return func == null ? func : func.apply(value, args);
	    });
	  };
	
	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function(obj, key) {
	    return _.map(obj, _.property(key));
	  };
	
	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function(obj, attrs) {
	    return _.filter(obj, _.matcher(attrs));
	  };
	
	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function(obj, attrs) {
	    return _.find(obj, _.matcher(attrs));
	  };
	
	  // Return the maximum element (or element-based computation).
	  _.max = function(obj, iteratee, context) {
	    var result = -Infinity, lastComputed = -Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };
	
	  // Return the minimum element (or element-based computation).
	  _.min = function(obj, iteratee, context) {
	    var result = Infinity, lastComputed = Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };
	
	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function(obj) {
	    var set = isArrayLike(obj) ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };
	
	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function(obj, n, guard) {
	    if (n == null || guard) {
	      if (!isArrayLike(obj)) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };
	
	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    return _.pluck(_.map(obj, function(value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function(left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };
	
	  // An internal function used for aggregate "group by" operations.
	  var group = function(behavior) {
	    return function(obj, iteratee, context) {
	      var result = {};
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };
	
	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
	  });
	
	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function(result, value, key) {
	    result[key] = value;
	  });
	
	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key]++; else result[key] = 1;
	  });
	
	  // Safely create a real, live array from anything iterable.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (isArrayLike(obj)) return _.map(obj, _.identity);
	    return _.values(obj);
	  };
	
	  // Return the number of elements in an object.
	  _.size = function(obj) {
	    if (obj == null) return 0;
	    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
	  };
	
	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var pass = [], fail = [];
	    _.each(obj, function(value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };
	
	  // Array Functions
	  // ---------------
	
	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    return _.initial(array, array.length - n);
	  };
	
	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N.
	  _.initial = function(array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };
	
	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array.
	  _.last = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return _.rest(array, Math.max(0, array.length - n));
	  };
	
	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array.
	  _.rest = _.tail = _.drop = function(array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };
	
	  // Trim out all falsy values from an array.
	  _.compact = function(array) {
	    return _.filter(array, _.identity);
	  };
	
	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, strict, startIndex) {
	    var output = [], idx = 0;
	    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
	      var value = input[i];
	      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
	        //flatten current level of array or arguments object
	        if (!shallow) value = flatten(value, shallow, strict);
	        var j = 0, len = value.length;
	        output.length += len;
	        while (j < len) {
	          output[idx++] = value[j++];
	        }
	      } else if (!strict) {
	        output[idx++] = value;
	      }
	    }
	    return output;
	  };
	
	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function(array, shallow) {
	    return flatten(array, shallow, false);
	  };
	
	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function(array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };
	
	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = cb(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var value = array[i],
	          computed = iteratee ? iteratee(value, i, array) : value;
	      if (isSorted) {
	        if (!i || seen !== computed) result.push(value);
	        seen = computed;
	      } else if (iteratee) {
	        if (!_.contains(seen, computed)) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (!_.contains(result, value)) {
	        result.push(value);
	      }
	    }
	    return result;
	  };
	
	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function() {
	    return _.uniq(flatten(arguments, true, true));
	  };
	
	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };
	
	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function(array) {
	    var rest = flatten(arguments, true, true, 1);
	    return _.filter(array, function(value){
	      return !_.contains(rest, value);
	    });
	  };
	
	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function() {
	    return _.unzip(arguments);
	  };
	
	  // Complement of _.zip. Unzip accepts an array of arrays and groups
	  // each array's elements on shared indices
	  _.unzip = function(array) {
	    var length = array && _.max(array, getLength).length || 0;
	    var result = Array(length);
	
	    for (var index = 0; index < length; index++) {
	      result[index] = _.pluck(array, index);
	    }
	    return result;
	  };
	
	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function(list, values) {
	    var result = {};
	    for (var i = 0, length = getLength(list); i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };
	
	  // Generator function to create the findIndex and findLastIndex functions
	  function createPredicateIndexFinder(dir) {
	    return function(array, predicate, context) {
	      predicate = cb(predicate, context);
	      var length = getLength(array);
	      var index = dir > 0 ? 0 : length - 1;
	      for (; index >= 0 && index < length; index += dir) {
	        if (predicate(array[index], index, array)) return index;
	      }
	      return -1;
	    };
	  }
	
	  // Returns the first index on an array-like that passes a predicate test
	  _.findIndex = createPredicateIndexFinder(1);
	  _.findLastIndex = createPredicateIndexFinder(-1);
	
	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function(array, obj, iteratee, context) {
	    iteratee = cb(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0, high = getLength(array);
	    while (low < high) {
	      var mid = Math.floor((low + high) / 2);
	      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
	    }
	    return low;
	  };
	
	  // Generator function to create the indexOf and lastIndexOf functions
	  function createIndexFinder(dir, predicateFind, sortedIndex) {
	    return function(array, item, idx) {
	      var i = 0, length = getLength(array);
	      if (typeof idx == 'number') {
	        if (dir > 0) {
	            i = idx >= 0 ? idx : Math.max(idx + length, i);
	        } else {
	            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
	        }
	      } else if (sortedIndex && idx && length) {
	        idx = sortedIndex(array, item);
	        return array[idx] === item ? idx : -1;
	      }
	      if (item !== item) {
	        idx = predicateFind(slice.call(array, i, length), _.isNaN);
	        return idx >= 0 ? idx + i : -1;
	      }
	      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
	        if (array[idx] === item) return idx;
	      }
	      return -1;
	    };
	  }
	
	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
	  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);
	
	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function(start, stop, step) {
	    if (stop == null) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;
	
	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);
	
	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }
	
	    return range;
	  };
	
	  // Function (ahem) Functions
	  // ------------------
	
	  // Determines whether to execute a function as a constructor
	  // or a normal function with the provided arguments
	  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
	    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
	    var self = baseCreate(sourceFunc.prototype);
	    var result = sourceFunc.apply(self, args);
	    if (_.isObject(result)) return result;
	    return self;
	  };
	
	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function(func, context) {
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    var args = slice.call(arguments, 2);
	    var bound = function() {
	      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
	    };
	    return bound;
	  };
	
	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function(func) {
	    var boundArgs = slice.call(arguments, 1);
	    var bound = function() {
	      var position = 0, length = boundArgs.length;
	      var args = Array(length);
	      for (var i = 0; i < length; i++) {
	        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
	      }
	      while (position < arguments.length) args.push(arguments[position++]);
	      return executeBound(func, bound, this, this, args);
	    };
	    return bound;
	  };
	
	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function(obj) {
	    var i, length = arguments.length, key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };
	
	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memoize = function(key) {
	      var cache = memoize.cache;
	      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };
	
	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){
	      return func.apply(null, args);
	    }, wait);
	  };
	
	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = _.partial(_.delay, _, 1);
	
	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function(func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function() {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        if (timeout) {
	          clearTimeout(timeout);
	          timeout = null;
	        }
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };
	
	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;
	
	    var later = function() {
	      var last = _.now() - timestamp;
	
	      if (last < wait && last >= 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };
	
	    return function() {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }
	
	      return result;
	    };
	  };
	
	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function(func, wrapper) {
	    return _.partial(wrapper, func);
	  };
	
	  // Returns a negated version of the passed-in predicate.
	  _.negate = function(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    };
	  };
	
	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function() {
	    var args = arguments;
	    var start = args.length - 1;
	    return function() {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) result = args[i].call(this, result);
	      return result;
	    };
	  };
	
	  // Returns a function that will only be executed on and after the Nth call.
	  _.after = function(times, func) {
	    return function() {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };
	
	  // Returns a function that will only be executed up to (but not including) the Nth call.
	  _.before = function(times, func) {
	    var memo;
	    return function() {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      }
	      if (times <= 1) func = null;
	      return memo;
	    };
	  };
	
	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);
	
	  // Object Functions
	  // ----------------
	
	  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
	  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
	                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
	
	  function collectNonEnumProps(obj, keys) {
	    var nonEnumIdx = nonEnumerableProps.length;
	    var constructor = obj.constructor;
	    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;
	
	    // Constructor is a special case.
	    var prop = 'constructor';
	    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);
	
	    while (nonEnumIdx--) {
	      prop = nonEnumerableProps[nonEnumIdx];
	      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
	        keys.push(prop);
	      }
	    }
	  }
	
	  // Retrieve the names of an object's own properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };
	
	  // Retrieve all the property names of an object.
	  _.allKeys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    var keys = [];
	    for (var key in obj) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };
	
	  // Retrieve the values of an object's properties.
	  _.values = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };
	
	  // Returns the results of applying the iteratee to each element of the object
	  // In contrast to _.map it returns an object
	  _.mapObject = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys =  _.keys(obj),
	          length = keys.length,
	          results = {},
	          currentKey;
	      for (var index = 0; index < length; index++) {
	        currentKey = keys[index];
	        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	      }
	      return results;
	  };
	
	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };
	
	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function(obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };
	
	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };
	
	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = createAssigner(_.allKeys);
	
	  // Assigns a given object with all the own properties in the passed-in object(s)
	  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	  _.extendOwn = _.assign = createAssigner(_.keys);
	
	  // Returns the first key on an object that passes a predicate test
	  _.findKey = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = _.keys(obj), key;
	    for (var i = 0, length = keys.length; i < length; i++) {
	      key = keys[i];
	      if (predicate(obj[key], key, obj)) return key;
	    }
	  };
	
	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function(object, oiteratee, context) {
	    var result = {}, obj = object, iteratee, keys;
	    if (obj == null) return result;
	    if (_.isFunction(oiteratee)) {
	      keys = _.allKeys(obj);
	      iteratee = optimizeCb(oiteratee, context);
	    } else {
	      keys = flatten(arguments, false, false, 1);
	      iteratee = function(value, key, obj) { return key in obj; };
	      obj = Object(obj);
	    }
	    for (var i = 0, length = keys.length; i < length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      if (iteratee(value, key, obj)) result[key] = value;
	    }
	    return result;
	  };
	
	   // Return a copy of the object without the blacklisted properties.
	  _.omit = function(obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(flatten(arguments, false, false, 1), String);
	      iteratee = function(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };
	
	  // Fill in a given object with default properties.
	  _.defaults = createAssigner(_.allKeys, true);
	
	  // Creates an object that inherits from the given prototype object.
	  // If additional properties are provided then they will be added to the
	  // created object.
	  _.create = function(prototype, props) {
	    var result = baseCreate(prototype);
	    if (props) _.extendOwn(result, props);
	    return result;
	  };
	
	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };
	
	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function(obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };
	
	  // Returns whether an object has a given set of `key:value` pairs.
	  _.isMatch = function(object, attrs) {
	    var keys = _.keys(attrs), length = keys.length;
	    if (object == null) return !length;
	    var obj = Object(object);
	    for (var i = 0; i < length; i++) {
	      var key = keys[i];
	      if (attrs[key] !== obj[key] || !(key in obj)) return false;
	    }
	    return true;
	  };
	
	
	  // Internal recursive comparison function for `isEqual`.
	  var eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }
	
	    var areArrays = className === '[object Array]';
	    if (!areArrays) {
	      if (typeof a != 'object' || typeof b != 'object') return false;
	
	      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	      // from different frames are.
	      var aCtor = a.constructor, bCtor = b.constructor;
	      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
	                               _.isFunction(bCtor) && bCtor instanceof bCtor)
	                          && ('constructor' in a && 'constructor' in b)) {
	        return false;
	      }
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
	
	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }
	
	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);
	
	    // Recursively compare objects and arrays.
	    if (areArrays) {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      length = a.length;
	      if (length !== b.length) return false;
	      // Deep compare the contents, ignoring non-numeric properties.
	      while (length--) {
	        if (!eq(a[length], b[length], aStack, bStack)) return false;
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a), key;
	      length = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      if (_.keys(b).length !== length) return false;
	      while (length--) {
	        // Deep compare each member
	        key = keys[length];
	        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	  };
	
	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function(a, b) {
	    return eq(a, b);
	  };
	
	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function(obj) {
	    if (obj == null) return true;
	    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
	    return _.keys(obj).length === 0;
	  };
	
	  // Is a given value a DOM element?
	  _.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	  };
	
	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) === '[object Array]';
	  };
	
	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  };
	
	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });
	
	  // Define a fallback version of the method in browsers (ahem, IE < 9), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return _.has(obj, 'callee');
	    };
	  }
	
	  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	  // IE 11 (#1621), and in Safari 8 (#1929).
	  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
	    _.isFunction = function(obj) {
	      return typeof obj == 'function' || false;
	    };
	  }
	
	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };
	
	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };
	
	  // Is a given value a boolean?
	  _.isBoolean = function(obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };
	
	  // Is a given value equal to null?
	  _.isNull = function(obj) {
	    return obj === null;
	  };
	
	  // Is a given variable undefined?
	  _.isUndefined = function(obj) {
	    return obj === void 0;
	  };
	
	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };
	
	  // Utility Functions
	  // -----------------
	
	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function() {
	    root._ = previousUnderscore;
	    return this;
	  };
	
	  // Keep the identity function around for default iteratees.
	  _.identity = function(value) {
	    return value;
	  };
	
	  // Predicate-generating functions. Often useful outside of Underscore.
	  _.constant = function(value) {
	    return function() {
	      return value;
	    };
	  };
	
	  _.noop = function(){};
	
	  _.property = property;
	
	  // Generates a function for a given object that returns a given property.
	  _.propertyOf = function(obj) {
	    return obj == null ? function(){} : function(key) {
	      return obj[key];
	    };
	  };
	
	  // Returns a predicate for checking whether an object has a given set of
	  // `key:value` pairs.
	  _.matcher = _.matches = function(attrs) {
	    attrs = _.extendOwn({}, attrs);
	    return function(obj) {
	      return _.isMatch(obj, attrs);
	    };
	  };
	
	  // Run a function **n** times.
	  _.times = function(n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = optimizeCb(iteratee, context, 1);
	    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
	    return accum;
	  };
	
	  // Return a random integer between min and max (inclusive).
	  _.random = function(min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };
	
	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function() {
	    return new Date().getTime();
	  };
	
	   // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);
	
	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function(map) {
	    var escaper = function(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function(string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);
	
	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function(object, property, fallback) {
	    var value = object == null ? void 0 : object[property];
	    if (value === void 0) {
	      value = fallback;
	    }
	    return _.isFunction(value) ? value.call(object) : value;
	  };
	
	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };
	
	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };
	
	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;
	
	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };
	
	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;
	
	  var escapeChar = function(match) {
	    return '\\' + escapes[match];
	  };
	
	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function(text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);
	
	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');
	
	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;
	
	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }
	
	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";
	
	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';
	
	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + 'return __p;\n';
	
	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }
	
	    var template = function(data) {
	      return render.call(this, data, _);
	    };
	
	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';
	
	    return template;
	  };
	
	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function(obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };
	
	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.
	
	  // Helper function to continue chaining intermediate results.
	  var result = function(instance, obj) {
	    return instance._chain ? _(obj).chain() : obj;
	  };
	
	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    _.each(_.functions(obj), function(name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result(this, func.apply(_, args));
	      };
	    });
	  };
	
	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);
	
	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result(this, obj);
	    };
	  });
	
	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return result(this, method.apply(this._wrapped, arguments));
	    };
	  });
	
	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function() {
	    return this._wrapped;
	  };
	
	  // Provide unwrapping proxy for some methods used in engine operations
	  // such as arithmetic and JSON stringification.
	  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
	
	  _.prototype.toString = function() {
	    return '' + this._wrapped;
	  };
	
	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}.call(this));


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Words = {
	    Item: function Item(args) {
	        this.ja = _mithril2.default.prop(args.ja);
	        this.en = _mithril2.default.prop(args.en);
	        this.misCount = _mithril2.default.prop(args.misCount || 0);
	    },
	    List: Array
	};
	
	exports.default = Words;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Check = {
	    Item: function Item(args) {
	        this.ja = _mithril2.default.prop(args.ja);
	        this.en = _mithril2.default.prop(args.en);
	        this.flag = _mithril2.default.prop(args.flag || false);
	    },
	    List: Array
	};
	
	exports.default = Check;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _mithril = __webpack_require__(1);
	
	var m = _interopRequireWildcard(_mithril);
	
	var _store = __webpack_require__(4);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _underscore = __webpack_require__(5);
	
	var _underscore2 = _interopRequireDefault(_underscore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CheckRun = function () {
	    function CheckRun() {
	        var _this = this;
	
	        _classCallCheck(this, CheckRun);
	
	        this.i = m.prop(0);
	        this.word = m.prop([]);
	        this.view = m.prop(false);
	        this.limit = m.prop(0);
	        this.navbar = _store2.default.scene.checkRun.navbar;
	        _store2.default.getUrlParam("id").then(function (res) {
	            _this.limit(res());
	            _store2.default.addCheckAll(JSON.parse(JSON.stringify((0, _underscore2.default)(_store2.default.wordList).shuffle())));
	            if (_store2.default.checkList.length === 0) return m.route("/words");
	            _this.getNextWord();
	        });
	    }
	
	    _createClass(CheckRun, [{
	        key: "isFlag",
	        value: function isFlag() {
	            this.word().flag(true);
	        }
	    }, {
	        key: "isView",
	        value: function isView() {
	            this.view(true);
	        }
	    }, {
	        key: "incrimentCount",
	        value: function incrimentCount() {
	            _store2.default.incrimentCount(this.i, this.limit);
	        }
	    }, {
	        key: "getNextWord",
	        value: function getNextWord() {
	            this.word(_store2.default.getNextWord1(this.i, this.limit));
	            this.incrimentCount();
	            this.view(false);
	        }
	    }, {
	        key: "checkEndFlag",
	        value: function checkEndFlag() {
	            return _store2.default.checkEndFlag(this.limit);
	        }
	    }]);
	
	    return CheckRun;
	}();
	
	exports.default = CheckRun;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _navbar = __webpack_require__(3);
	
	var _navbar2 = _interopRequireDefault(_navbar);
	
	var _homeMenu = __webpack_require__(10);
	
	var _homeMenu2 = _interopRequireDefault(_homeMenu);
	
	var _home = __webpack_require__(11);
	
	var _home2 = _interopRequireDefault(_home);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Home = {
	    controller: function controller() {
	        return new _home2.default();
	    },
	    view: function view(ctrl) {
	        return (0, _mithril2.default)(".flex_content displayFlex flex_column", [(0, _navbar2.default)(ctrl.navbar), (0, _mithril2.default)(".displayFlex flex_column", {
	            "style": {
	                "flex": "1",
	                "padding": "1rem",
	                "padding-top": "6.5rem",
	                "height": "100%"
	            }
	        }, [(0, _homeMenu2.default)(ctrl.menu)])]);
	    }
	};
	
	exports.default = Home;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var tipItem = function tipItem(tip) {
	    return (0, _mithril2.default)("li", tip);
	};
	
	var homeMenuItem = function homeMenuItem(item) {
	    return (0, _mithril2.default)(".card", {
	        "style": {
	            "margin-bottom": "1rem"
	            // "flex": "1"
	        }
	    }, [(0, _mithril2.default)("button", {
	        "class": "u-full-width",
	        "onclick": function onclick() {
	            _mithril2.default.route(item.url);
	        }
	    }, item.label), (0, _mithril2.default)("ul", {
	        "style": {
	            "padding": "0.5rem",
	            "margin-bottom": "0"
	        }
	    }, [item.tips.map(function (tip) {
	        return tipItem(tip);
	    })])]);
	};
	
	var homeMenu = function homeMenu(list) {
	    return (0, _mithril2.default)(".displayFlex flex_column", {
	        "style": {
	            "flex": "1"
	        }
	    }, [list.map(function (item) {
	        return homeMenuItem(item);
	    })]);
	};
	
	exports.default = homeMenu;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _store = __webpack_require__(4);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Home = function Home() {
	    _classCallCheck(this, Home);
	
	    this.navbar = _store2.default.scene.home.navbar;
	    this.menu = _store2.default.scene.home.content.menu;
	};
	
	exports.default = Home;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _navbar = __webpack_require__(3);
	
	var _navbar2 = _interopRequireDefault(_navbar);
	
	var _wordList = __webpack_require__(13);
	
	var _wordList2 = _interopRequireDefault(_wordList);
	
	var _words = __webpack_require__(14);
	
	var _words2 = _interopRequireDefault(_words);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Words = {
	    controller: function controller() {
	        return new _words2.default();
	    },
	    view: function view(ctrl) {
	        return (0, _mithril2.default)(".flex_content displayFlex flex_column", [(0, _navbar2.default)(ctrl.navbar), (0, _mithril2.default)(".displayFlex flex_column", {
	            "style": {
	                "flex": "1",
	                "padding": "1rem",
	                "padding-top": "6.5rem",
	                "height": "100%"
	            }
	        }, [(0, _wordList2.default)(ctrl.wordList)])]);
	    }
	};
	
	exports.default = Words;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var wordItem = function wordItem(item, index) {
	    return (0, _mithril2.default)(".card displayFlex flex_row", {
	        "style": {
	            "margin-bottom": "1rem",
	            "align-items": "center",
	            "padding": "2rem"
	        },
	        "onclick": function onclick() {
	            _mithril2.default.route("/words/" + index);
	            // console.log(index);
	        }
	    }, [(0, _mithril2.default)("div", {
	        "style": {
	            "flex": "1"
	        }
	    }, item.en()), (0, _mithril2.default)("div", {
	        "style": {
	            "flex": "1"
	        }
	    }, item.ja())]);
	};
	
	var wordList = function wordList(list) {
	    return (0, _mithril2.default)("div", {
	        "style": {
	            "flex": "1"
	        }
	    }, [list.map(function (item, index) {
	        return wordItem(item, index);
	    })]);
	};
	
	exports.default = wordList;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _store = __webpack_require__(4);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Words = function Words() {
	    _classCallCheck(this, Words);
	
	    this.navbar = _store2.default.scene.words.navbar;
	    this.wordList = _store2.default.wordList;
	};
	
	exports.default = Words;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _navbar = __webpack_require__(3);
	
	var _navbar2 = _interopRequireDefault(_navbar);
	
	var _wordCard = __webpack_require__(16);
	
	var _wordCard2 = _interopRequireDefault(_wordCard);
	
	var _wordsNew = __webpack_require__(17);
	
	var _wordsNew2 = _interopRequireDefault(_wordsNew);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var WordsNew = {
	    controller: function controller() {
	        return new _wordsNew2.default();
	    },
	    view: function view(ctrl) {
	        return (0, _mithril2.default)(".flex_content displayFlex flex_column", [(0, _navbar2.default)(ctrl.navbar), (0, _mithril2.default)("div", {
	            "style": {
	                "flex": "1",
	                "padding": "1rem",
	                "padding-top": "6.5rem",
	                "height": "100%"
	            }
	        }, [(0, _wordCard2.default)({
	            en: ctrl.en,
	            ja: ctrl.ja
	        }), (0, _mithril2.default)("br"), (0, _mithril2.default)("button.button-primary u-full-width", {
	            "style": {
	                "margin-bottom": "2rem"
	            },
	            "onclick": function onclick() {
	                ctrl.add(false);
	            }
	        }, ctrl.button1), (0, _mithril2.default)("br"), (0, _mithril2.default)("button.button-primary u-full-width", {
	            "style": {
	                "margin-bottom": "2rem"
	            },
	            "onclick": function onclick() {
	                ctrl.add(true);
	            }
	        }, ctrl.button2)])]);
	    }
	};
	
	exports.default = WordsNew;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var wordCard = function wordCard(args) {
	    return (0, _mithril2.default)(".card", {
	        "style": {
	            "flex": args.flex,
	            "margin-bottom": "1rem"
	        }
	    }, [(0, _mithril2.default)("div", [(0, _mithril2.default)("label", {
	        "for": "en_Input"
	    }, "英語"), (0, _mithril2.default)("input", {
	        "type": "text",
	        "class": "u-full-width",
	        "id": "en_Input",
	        "value": args.en(),
	        "oninput": _mithril2.default.withAttr("value", args.en)
	    })]), (0, _mithril2.default)("div", [(0, _mithril2.default)("label", {
	        "for": "ja_Input"
	    }, "日本語"), (0, _mithril2.default)("input", {
	        "type": "text",
	        "class": "u-full-width",
	        "id": "ja_Input",
	        "value": args.ja(),
	        "oninput": _mithril2.default.withAttr("value", args.ja)
	    })])]);
	};
	
	exports.default = wordCard;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _store = __webpack_require__(4);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var WordsNew = function () {
	    function WordsNew() {
	        _classCallCheck(this, WordsNew);
	
	        this.navbar = _store2.default.scene.wordsNew.navbar;
	        this.button1 = _store2.default.scene.wordsNew.content.button1;
	        this.button2 = _store2.default.scene.wordsNew.content.button2;
	        this.en = _mithril2.default.prop("");
	        this.ja = _mithril2.default.prop("");
	    }
	
	    _createClass(WordsNew, [{
	        key: "add",
	        value: function add(continu) {
	            if (this.en() === "" || this.ja() === "") return;
	            _store2.default.add(_store2.default.wordList, {
	                en: this.en(),
	                ja: this.ja()
	            });
	            this.en("");
	            this.ja("");
	            if (!continu) {
	                _mithril2.default.route("/words");
	            }
	        }
	    }]);
	
	    return WordsNew;
	}();
	
	exports.default = WordsNew;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _navbar = __webpack_require__(3);
	
	var _navbar2 = _interopRequireDefault(_navbar);
	
	var _wordCard = __webpack_require__(16);
	
	var _wordCard2 = _interopRequireDefault(_wordCard);
	
	var _WordsEdit = __webpack_require__(19);
	
	var _WordsEdit2 = _interopRequireDefault(_WordsEdit);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var WordsEdit = {
	    controller: function controller() {
	        return new _WordsEdit2.default();
	    },
	    view: function view(ctrl) {
	        return (0, _mithril2.default)(".flex_content displayFlex flex_column", [(0, _navbar2.default)(ctrl.navbar), (0, _mithril2.default)("div", {
	            "style": {
	                "flex": "1",
	                "padding": "1rem",
	                "padding-top": "6.5rem",
	                "height": "100%"
	            }
	        }, [(0, _wordCard2.default)({
	            en: ctrl.en,
	            ja: ctrl.ja
	        }), (0, _mithril2.default)("br"), (0, _mithril2.default)("button.button-primary u-full-width", {
	            "style": {
	                "margin-bottom": "2rem"
	            },
	            "onclick": function onclick() {
	                ctrl.add();
	            }
	        }, ctrl.button)])]);
	    }
	};
	
	exports.default = WordsEdit;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _store = __webpack_require__(4);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var WordsEdit = function () {
	    function WordsEdit() {
	        var _this = this;
	
	        _classCallCheck(this, WordsEdit);
	
	        _store2.default.getUrlParam("id").then(function (res) {
	            _this.i = res;
	            // console.log("param:" + res() + " data:" + vm.wordList[res()]);
	            _this.navbar = _store2.default.scene.wordsEdit.navbar;
	            _this.button = _store2.default.scene.wordsEdit.content.button;
	            _this.en = _mithril2.default.prop(_store2.default.wordList[res()].en());
	            _this.ja = _mithril2.default.prop(_store2.default.wordList[res()].ja());
	        });
	    }
	
	    _createClass(WordsEdit, [{
	        key: "add",
	        value: function add() {
	            if (this.en() === "" || this.ja() === "") return;
	            _store2.default.wordList[this.i()].en(this.en());
	            _store2.default.wordList[this.i()].ja(this.ja());
	            this.en("");
	            this.ja("");
	            _mithril2.default.route("/words");
	        }
	    }]);
	
	    return WordsEdit;
	}();
	
	exports.default = WordsEdit;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _navbar = __webpack_require__(3);
	
	var _navbar2 = _interopRequireDefault(_navbar);
	
	var _checkCard = __webpack_require__(21);
	
	var _checkCard2 = _interopRequireDefault(_checkCard);
	
	var _checkRun = __webpack_require__(8);
	
	var _checkRun2 = _interopRequireDefault(_checkRun);
	
	var _checkButtons = __webpack_require__(22);
	
	var _checkButtons2 = _interopRequireDefault(_checkButtons);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CheckRun = {
	    controller: function controller() {
	        return new _checkRun2.default();
	    },
	    view: function view(ctrl) {
	        return (0, _mithril2.default)(".flex_content displayFlex flex_column", [(0, _navbar2.default)(ctrl.navbar), (0, _mithril2.default)(".displayFlex flex_column", {
	            "style": {
	                "flex": "1",
	                "padding": "1rem",
	                "padding-top": "6.5rem",
	                "height": "100%"
	            }
	        }, [(0, _checkCard2.default)({
	            en: ctrl.word().en,
	            ja: ctrl.word().ja,
	            flex: "4",
	            act: ctrl.isView,
	            view: ctrl.view
	        }), (0, _mithril2.default)("hr"), (0, _checkButtons2.default)({
	            flex: "1",
	            r: {
	                action: function action() {
	                    ctrl.isFlag();
	                    if (ctrl.checkEndFlag()) {
	                        _mithril2.default.route("/home");
	                    }
	                    ctrl.getNextWord();
	                },
	                label: "わかる"
	            },
	            l: {
	                action: function action() {
	                    ctrl.getNextWord();
	                },
	                label: "わからない"
	            }
	        })])]);
	    }
	};
	
	exports.default = CheckRun;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var checkCard = function checkCard(args) {
	    return (0, _mithril2.default)(".card displayFlex", {
	        "style": {
	            "flex": args.flex,
	            "margin-bottom": "1rem",
	            "align-items": "center"
	        },
	        "onclick": function onclick() {
	            args.act();
	        }
	    }, [(0, _mithril2.default)(".flex_content", [(0, _mithril2.default)("h3", {
	        "style": {
	            "height": "1em",
	            "text-align": "center"
	        }
	    }, args.en()), (0, _mithril2.default)("hr"), (0, _mithril2.default)("h3", {
	        "style": {
	            "height": "1em",
	            "text-align": "center"
	        }
	    }, args.view() ? args.ja() : "")])]);
	};
	
	exports.default = checkCard;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	@param{Object} args ボタンのアクション
	@return{Object}
	*/
	var checkButtons = function checkButtons(args) {
	    return (0, _mithril2.default)(".displayFlex flex_row", {
	        "style": {
	            "flex": args.flex,
	            "margin-bottom": "3rem"
	        }
	    }, [(0, _mithril2.default)("button", {
	        "style": {
	            "flex": "1",
	            "margin-right": "0.5rem",
	            "border-color": "#fb5973",
	            "background": "#fb5973",
	            "color": "#ffffff"
	        },
	        "onclick": args.l.action
	    }, args.l.label), (0, _mithril2.default)("button", {
	        "style": {
	            "flex": "1",
	            "margin-left": "0.5rem",
	            "border-color": "#1be89a",
	            "background": "#3ae0a1",
	            "color": "#ffffff"
	        },
	        "onclick": args.r.action
	    }, args.r.label)]);
	};
	
	exports.default = checkButtons;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(26)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./skeleton.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./skeleton.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(25)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\n* Skeleton V2.0.4\n* Copyright 2014, Dave Gamache\n* www.getskeleton.com\n* Free to use under the MIT license.\n* http://www.opensource.org/licenses/mit-license.php\n* 12/29/2014\n*/\n\n\n/* Table of contents\n––––––––––––––––––––––––––––––––––––––––––––––––––\n- Grid\n- Base Styles\n- Typography\n- Links\n- Buttons\n- Forms\n- Lists\n- Code\n- Tables\n- Spacing\n- Utilities\n- Clearing\n- Media Queries\n*/\n\n\n/* Grid\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.container {\n  position: relative;\n  width: 100%;\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 20px;\n  box-sizing: border-box; }\n.column,\n.columns {\n  width: 100%;\n  float: left;\n  box-sizing: border-box; }\n\n/* For devices larger than 400px */\n@media (min-width: 400px) {\n  .container {\n    width: 85%;\n    padding: 0; }\n}\n\n/* For devices larger than 550px */\n@media (min-width: 550px) {\n  .container {\n    width: 80%; }\n  .column,\n  .columns {\n    margin-left: 4%; }\n  .column:first-child,\n  .columns:first-child {\n    margin-left: 0; }\n\n  .one.column,\n  .one.columns                    { width: 4.66666666667%; }\n  .two.columns                    { width: 13.3333333333%; }\n  .three.columns                  { width: 22%;            }\n  .four.columns                   { width: 30.6666666667%; }\n  .five.columns                   { width: 39.3333333333%; }\n  .six.columns                    { width: 48%;            }\n  .seven.columns                  { width: 56.6666666667%; }\n  .eight.columns                  { width: 65.3333333333%; }\n  .nine.columns                   { width: 74.0%;          }\n  .ten.columns                    { width: 82.6666666667%; }\n  .eleven.columns                 { width: 91.3333333333%; }\n  .twelve.columns                 { width: 100%; margin-left: 0; }\n\n  .one-third.column               { width: 30.6666666667%; }\n  .two-thirds.column              { width: 65.3333333333%; }\n\n  .one-half.column                { width: 48%; }\n\n  /* Offsets */\n  .offset-by-one.column,\n  .offset-by-one.columns          { margin-left: 8.66666666667%; }\n  .offset-by-two.column,\n  .offset-by-two.columns          { margin-left: 17.3333333333%; }\n  .offset-by-three.column,\n  .offset-by-three.columns        { margin-left: 26%;            }\n  .offset-by-four.column,\n  .offset-by-four.columns         { margin-left: 34.6666666667%; }\n  .offset-by-five.column,\n  .offset-by-five.columns         { margin-left: 43.3333333333%; }\n  .offset-by-six.column,\n  .offset-by-six.columns          { margin-left: 52%;            }\n  .offset-by-seven.column,\n  .offset-by-seven.columns        { margin-left: 60.6666666667%; }\n  .offset-by-eight.column,\n  .offset-by-eight.columns        { margin-left: 69.3333333333%; }\n  .offset-by-nine.column,\n  .offset-by-nine.columns         { margin-left: 78.0%;          }\n  .offset-by-ten.column,\n  .offset-by-ten.columns          { margin-left: 86.6666666667%; }\n  .offset-by-eleven.column,\n  .offset-by-eleven.columns       { margin-left: 95.3333333333%; }\n\n  .offset-by-one-third.column,\n  .offset-by-one-third.columns    { margin-left: 34.6666666667%; }\n  .offset-by-two-thirds.column,\n  .offset-by-two-thirds.columns   { margin-left: 69.3333333333%; }\n\n  .offset-by-one-half.column,\n  .offset-by-one-half.columns     { margin-left: 52%; }\n\n}\n\n\n/* Base Styles\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/* NOTE\nhtml is set to 62.5% so that all the REM measurements throughout Skeleton\nare based on 10px sizing. So basically 1.5rem = 15px :) */\nhtml {\n  font-size: 62.5%; }\nbody {\n  font-size: 1.5em; /* currently ems cause chrome bug misinterpreting rems on body element */\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: \"Raleway\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: #222; }\n\n\n/* Typography\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300; }\nh1 { font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem;}\nh2 { font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }\nh3 { font-size: 3.0rem; line-height: 1.3;  letter-spacing: -.1rem; }\nh4 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -.08rem; }\nh5 { font-size: 1.8rem; line-height: 1.5;  letter-spacing: -.05rem; }\nh6 { font-size: 1.5rem; line-height: 1.6;  letter-spacing: 0; }\n\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 { font-size: 5.0rem; }\n  h2 { font-size: 4.2rem; }\n  h3 { font-size: 3.6rem; }\n  h4 { font-size: 3.0rem; }\n  h5 { font-size: 2.4rem; }\n  h6 { font-size: 1.5rem; }\n}\n\np {\n  margin-top: 0; }\n\n\n/* Links\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\na {\n  color: #1EAEDB; }\na:hover {\n  color: #0FA0CE; }\n\n\n/* Buttons\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.button,\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: .1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border-radius: 4px;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box; }\n.button:hover,\nbutton:hover,\ninput[type=\"submit\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"button\"]:hover,\n.button:focus,\nbutton:focus,\ninput[type=\"submit\"]:focus,\ninput[type=\"reset\"]:focus,\ninput[type=\"button\"]:focus {\n  color: #333;\n  border-color: #888;\n  outline: 0; }\n.button.button-primary,\nbutton.button-primary,\ninput[type=\"submit\"].button-primary,\ninput[type=\"reset\"].button-primary,\ninput[type=\"button\"].button-primary {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0; }\n.button.button-primary:hover,\nbutton.button-primary:hover,\ninput[type=\"submit\"].button-primary:hover,\ninput[type=\"reset\"].button-primary:hover,\ninput[type=\"button\"].button-primary:hover,\n.button.button-primary:focus,\nbutton.button-primary:focus,\ninput[type=\"submit\"].button-primary:focus,\ninput[type=\"reset\"].button-primary:focus,\ninput[type=\"button\"].button-primary:focus {\n  color: #FFF;\n  background-color: #1EAEDB;\n  border-color: #1EAEDB; }\n\n\n/* Forms\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\ninput[type=\"email\"],\ninput[type=\"number\"],\ninput[type=\"search\"],\ninput[type=\"text\"],\ninput[type=\"tel\"],\ninput[type=\"url\"],\ninput[type=\"password\"],\ntextarea,\nselect {\n  height: 38px;\n  padding: 6px 10px; /* The 6px vertically centers text on FF, ignored by Webkit */\n  background-color: #fff;\n  border: 1px solid #D1D1D1;\n  border-radius: 4px;\n  box-shadow: none;\n  box-sizing: border-box; }\n/* Removes awkward default styles on some inputs for iOS */\ninput[type=\"email\"],\ninput[type=\"number\"],\ninput[type=\"search\"],\ninput[type=\"text\"],\ninput[type=\"tel\"],\ninput[type=\"url\"],\ninput[type=\"password\"],\ntextarea {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\ntextarea {\n  min-height: 65px;\n  padding-top: 6px;\n  padding-bottom: 6px; }\ninput[type=\"email\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"password\"]:focus,\ntextarea:focus,\nselect:focus {\n  border: 1px solid #33C3F0;\n  outline: 0; }\nlabel,\nlegend {\n  display: block;\n  margin-bottom: .5rem;\n  font-weight: 600; }\nfieldset {\n  padding: 0;\n  border-width: 0; }\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  display: inline; }\nlabel > .label-body {\n  display: inline-block;\n  margin-left: .5rem;\n  font-weight: normal; }\n\n\n/* Lists\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nul {\n  list-style: circle inside; }\nol {\n  list-style: decimal inside; }\nol, ul {\n  padding-left: 0;\n  margin-top: 0; }\nul ul,\nul ol,\nol ol,\nol ul {\n  margin: 1.5rem 0 1.5rem 3rem;\n  font-size: 90%; }\nli {\n  margin-bottom: 1rem; }\n\n\n/* Code\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\ncode {\n  padding: .2rem .5rem;\n  margin: 0 .2rem;\n  font-size: 90%;\n  white-space: nowrap;\n  background: #F1F1F1;\n  border: 1px solid #E1E1E1;\n  border-radius: 4px; }\npre > code {\n  display: block;\n  padding: 1rem 1.5rem;\n  white-space: pre; }\n\n\n/* Tables\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nth,\ntd {\n  padding: 12px 15px;\n  text-align: left;\n  border-bottom: 1px solid #E1E1E1; }\nth:first-child,\ntd:first-child {\n  padding-left: 0; }\nth:last-child,\ntd:last-child {\n  padding-right: 0; }\n\n\n/* Spacing\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nbutton,\n.button {\n  margin-bottom: 1rem; }\ninput,\ntextarea,\nselect,\nfieldset {\n  margin-bottom: 1.5rem; }\npre,\nblockquote,\ndl,\nfigure,\ntable,\np,\nul,\nol,\nform {\n  margin-bottom: 2.5rem; }\n\n\n/* Utilities\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.u-full-width {\n  width: 100%;\n  box-sizing: border-box; }\n.u-max-full-width {\n  max-width: 100%;\n  box-sizing: border-box; }\n.u-pull-right {\n  float: right; }\n.u-pull-left {\n  float: left; }\n\n\n/* Misc\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nhr {\n  margin-top: 3rem;\n  margin-bottom: 3.5rem;\n  border-width: 0;\n  border-top: 1px solid #E1E1E1; }\n\n\n/* Clearing\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n\n/* Self Clearing Goodness */\n.container:after,\n.row:after,\n.u-cf {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n\n/* Media Queries\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/*\nNote: The best way to structure the use of media queries is to create the queries\nnear the relevant code. For example, if you wanted to change the styles for buttons\non small devices, paste the mobile query code up in the buttons section and style it\nthere.\n*/\n\n\n/* Larger than mobile */\n@media (min-width: 400px) {}\n\n/* Larger than phablet (also point when grid becomes active) */\n@media (min-width: 550px) {}\n\n/* Larger than tablet */\n@media (min-width: 750px) {}\n\n/* Larger than desktop */\n@media (min-width: 1000px) {}\n\n/* Larger than Desktop HD */\n@media (min-width: 1200px) {}\n", ""]);
	
	// exports


/***/ },
/* 25 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(26)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(25)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\n  background: #eee;\n  margin: 0px;\n  flex: 1;\n  display: -webkit-flex;\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  flex-direction: -webkit-column;\n  flex-direction: -moz-column;\n  flex-direction: -ms-column;\n  flex-direction: -o-column;\n  flex-direction: column;\n}\n\nhtml {\n    height: 100%;\n    display: -webkit-flex;\n    display: -moz-flex;\n    display: -ms-flex;\n    display: -o-flex;\n    display: flex;\n}\n\n.displayFlex {\n  display: -webkit-flex;\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n}\n\n.displayFlexFixed {\n  display: -webkit-flex;\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  position: fixed;\n  width: 100%;\n}\n\n.flex_row {\n  flex-direction: -webkit-row;\n  flex-direction: -moz-row;\n  flex-direction: -ms-row;\n  flex-direction: -o-row;\n  flex-direction: row;\n}\n\n.flex_column {\n  flex-direction: -webkit-column;\n  flex-direction: -moz-column;\n  flex-direction: -ms-column;\n  flex-direction: -o-column;\n  flex-direction: column;\n}\n\n.flex_nowrap {\n  flex-wrap: -webkit-nowrap;\n  flex-wrap: -moz-nowrap;\n  flex-wrap: -ms-nowrap;\n  flex-wrap: -o-nowrap;\n  flex-wrap: nowrap;\n}\n\n.flex_content {\n    flex: 1;\n}\n\n.card {\n  width: auto;\n  background: #fff;\n  border-radius: 3px;\n  box-shadow: 0 2px 5px #ccc;\n  padding: 1rem;\n}\n.card-img {\n  border-radius: 5px 5px 0 0;\n  max-width: 100%;\n  height: auto;\n}\n.card-content {\n  padding: 1rem;\n}\n.card-title {\n  font-size: 20px;\n  margin-bottom: 20px;\n  text-align: center;\n  color: #333;\n}\n.card-text {\n  color: #777;\n  font-size: 14px;\n  line-height: 1.5;\n}\n.card-link {\n  text-align: center;\n  border-top: 1px solid #eee;\n  padding: 20px;\n}\n.card-link a {\n  text-decoration: none;\n  color: #0bd;\n  margin: 0 10px;\n}\n.card-link a:hover {\n  color: #0090aa;\n}\n", ""]);
	
	// exports


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWU5OTIzZTBjOGYzZjk0NjlkNzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL21pdGhyaWwvbWl0aHJpbC5taW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L2NvbXBvbmVudHMvbmF2YmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi91bmRlcnNjb3JlL3VuZGVyc2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9tb2RlbC93b3Jkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L21vZGVsL2NoZWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvY3RybC9jaGVja1J1bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L3NjZW5lL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9jb21wb25lbnRzL2hvbWVNZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvY3RybC9ob21lLmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvc2NlbmUvd29yZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9jb21wb25lbnRzL3dvcmRMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvY3RybC93b3Jkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L3NjZW5lL3dvcmRzTmV3LmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvY29tcG9uZW50cy93b3JkQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L2N0cmwvd29yZHNOZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9zY2VuZS9Xb3Jkc0VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9jdHJsL1dvcmRzRWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L3NjZW5lL0NoZWNrUnVuLmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvY29tcG9uZW50cy9jaGVja0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9jb21wb25lbnRzL2NoZWNrQnV0dG9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL3NrZWxldG9uL2Nzcy9za2VsZXRvbi5jc3M/MDJjNCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL3NrZWxldG9uL2Nzcy9za2VsZXRvbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5jc3M/MjFhYSIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3N0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7Ozs7S0FFTSxPQUNGLFNBREUsSUFDRixDQUFZLElBQVosRUFBa0I7MkJBRGhCLE1BQ2dCOztBQUNkLFVBQUssSUFBTCxHQUFZLGtCQUFFLElBQUYsQ0FBTyxJQUFQLENBQVosQ0FEYztFQUFsQjs7QUFLSixpQkFBTSxJQUFOOztBQUVBLGlCQUFNLE1BQU4sQ0FBYSxnQkFBTSxRQUFOLEVBQWdCLENBQ3pCO0FBQ0ksU0FBSSxPQUFKO0FBQ0EsU0FBSSxPQUFKO0VBSHFCLEVBSXZCO0FBQ0Us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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU8sZUFBZTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUFxQixlQUFlO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBc0I7QUFDdEI7QUFDQSwwQkFBeUIsZ0JBQWdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQXlDLFlBQVk7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQXlDLFlBQVk7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLDZDQUE0QyxtQkFBbUI7QUFDL0Q7QUFDQTtBQUNBLDBDQUF5QyxZQUFZO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0RBQXFEO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBNkU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxzQ0FBcUM7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEw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QixHQUFHLGNBQWMsdUJBQXVCLCtCQUErQixrQkFBa0IsR0FBRyxnQkFBZ0IsMEJBQTBCLGdCQUFnQixtQkFBbUIsR0FBRyxzQkFBc0IsbUJBQW1CLEdBQUc7O0FBRXQ2RCIsImZpbGUiOiIuL3d3dy9qcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGFlOTkyM2UwYzhmM2Y5NDY5ZDc4XG4gKiovIiwiaW1wb3J0IG0gZnJvbSBcIm1pdGhyaWxcIjtcbmltcG9ydCBuYXZiYXIgZnJvbSBcIi4vY29tcG9uZW50cy9uYXZiYXJcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi9zdG9yZVwiO1xuaW1wb3J0IFRlc3QgZnJvbSBcIi4vLi9jdHJsL2NoZWNrUnVuXCI7XG5cbmltcG9ydCBIb21lIGZyb20gXCIuL3NjZW5lL2hvbWVcIjtcbmltcG9ydCBXb3JkcyBmcm9tIFwiLi9zY2VuZS93b3Jkc1wiO1xuaW1wb3J0IFdvcmRzTmV3IGZyb20gXCIuL3NjZW5lL3dvcmRzTmV3XCI7XG5pbXBvcnQgV29yZHNFZGl0IGZyb20gXCIuL3NjZW5lL1dvcmRzRWRpdFwiO1xuaW1wb3J0IENoZWNrUnVuIGZyb20gXCIuL3NjZW5lL0NoZWNrUnVuXCI7XG5cbmltcG9ydCBcInNrZWxldG9uXCI7XG5pbXBvcnQgXCIuLi9jc3Mvc3R5bGUuY3NzXCI7XG5cbmNsYXNzIEN0cmwge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbS5wcm9wKG5hbWUpO1xuICAgIH1cbn1cblxuc3RvcmUuaW5pdCgpO1xuLy8gY29uc29sZS5sb2coc3RvcmUud29yZExpc3QubGVuZ3RoKTtcbnN0b3JlLmFkZEFsbChzdG9yZS53b3JkTGlzdCwgW1xuICAgIHtcbiAgICAgICAgZW46IFwiaGVsbG9cIixcbiAgICAgICAgamE6IFwi44GT44KT44Gr44Gh44GvXCJcbiAgICB9LHtcbiAgICAgICAgZW46IFwiQXBwbGVcIixcbiAgICAgICAgamE6IFwi44KK44KT44GUXCJcbiAgICB9LHtcbiAgICAgICAgZW46IFwid2luZG93XCIsXG4gICAgICAgIGphOiBcIueqk1wiXG4gICAgfVxuXSk7XG5cbmNvbnN0IHRlc3QgPSBuZXcgVGVzdCgpO1xuLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGVzdC53b3JkKCkpKTtcbi8vIHRlc3QuaXNGbGFnKCk7XG4vLyB0ZXN0LmdldE5leHRXb3JkKCk7XG5jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0ZXN0LndvcmQoKSkpO1xuLy8gY29uc29sZS5sb2coc3RvcmUud29yZExpc3QubGVuZ3RoKTtcbi8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHN0b3JlLndvcmRMaXN0KSk7XG5cbmNvbnN0IHRlc3QxID0ge1xuICAgIGNvbnRyb2xsZXI6ICgpID0+IG5ldyBDdHJsKFwidG9tb2thenVcIiksXG4gICAgdmlldzogKGN0cmwpPT57XG4gICAgICAgIHJldHVybiBtKFwiZGl2XCIsIFtcbiAgICAgICAgICAgIG5hdmJhcihzdG9yZS5zY2VuZS53b3Jkcy5uYXZiYXIpLFxuICAgICAgICAgICAgbShcIi5kaXNwbGF5RmxleCBmbGV4X2NvbHVtbiBub3dyYXBcIiwge1xuICAgICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInBhZGRpbmctdG9wXCI6IFwiNnJlbVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgIG0oXCIuY2FyZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW5cIjogXCIwLjVlbVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICAgIG0oXCJsYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImZvclwiOiBcImhvZ2VcIlxuICAgICAgICAgICAgICAgICAgICB9LCBcInRlc3RcIiksXG4gICAgICAgICAgICAgICAgICAgIG0oXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6XCJ1LWZ1bGwtd2lkdGhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJob2dlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGN0cmwubmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvbmlucHV0XCI6IG0ud2l0aEF0dHIoXCJ2YWx1ZVwiLCBjdHJsLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBtKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjpcInUtZnVsbC13aWR0aFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXCJzdWJtaXRcIilcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBtKFwiLmNhcmRcIiwge1xuICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWFyZ2luXCI6IFwiMC41ZW1cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgICAgICBtKFwibGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JcIjogXCJob2dlXCJcbiAgICAgICAgICAgICAgICAgICAgfSwgXCJ0ZXN0XCIpLFxuICAgICAgICAgICAgICAgICAgICBtKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOlwidS1mdWxsLXdpZHRoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiaG9nZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBjdHJsLm5hbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib25pbnB1dFwiOiBtLndpdGhBdHRyKFwidmFsdWVcIiwgY3RybC5uYW1lKVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgbShcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6XCJ1LWZ1bGwtd2lkdGhcIlxuICAgICAgICAgICAgICAgICAgICB9LFwic3VibWl0XCIpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgbShcIi5jYXJkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmdpblwiOiBcIjAuNWVtXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgbShcImxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9yXCI6IFwiaG9nZVwiXG4gICAgICAgICAgICAgICAgICAgIH0sIFwidGVzdFwiKSxcbiAgICAgICAgICAgICAgICAgICAgbShcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjpcInUtZnVsbC13aWR0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcImhvZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogY3RybC5uYW1lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9uaW5wdXRcIjogbS53aXRoQXR0cihcInZhbHVlXCIsIGN0cmwubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIG0oXCJidXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOlwidS1mdWxsLXdpZHRoXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcInN1Ym1pdFwiKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIG0oXCIuY2FyZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW5cIjogXCIwLjVlbVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICAgIG0oXCJsYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImZvclwiOiBcImhvZ2VcIlxuICAgICAgICAgICAgICAgICAgICB9LCBcInRlc3RcIiksXG4gICAgICAgICAgICAgICAgICAgIG0oXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6XCJ1LWZ1bGwtd2lkdGhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJob2dlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGN0cmwubmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvbmlucHV0XCI6IG0ud2l0aEF0dHIoXCJ2YWx1ZVwiLCBjdHJsLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBtKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjpcInUtZnVsbC13aWR0aFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXCJzdWJtaXRcIilcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSk7XG4gICAgfVxufTtcblxuLy8gZnVuY3Rpb24gZ2V0RGF0YSgpe1xuLy8gICAgIG0ucmVxdWVzdCh7XG4vLyAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbi8vICAgICAgICAgdXJsOiBcImh0dHBzOi8vc2NyaXB0Lmdvb2dsZS5jb20vbWFjcm9zL3MvQUtmeWNieXNjcmI0ckxXenIzaW0xV0NkQWJRV0RsLWsxNG1SeUF5R2t1VkJ6VHlQd205dVNOUS9leGVjXCIsXG4vLyAgICAgICAgIGluaXRpYWxWYWx1ZTogW11cbi8vICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlcyl7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4vLyAgICAgfSk7XG4vLyB9XG4vL2dldERhdGEoKTtcbi8vIG0ubW91bnQoZG9jdW1lbnQuYm9keSwgdGVzdCk7XG4vLyBtLnJvdXRlKGRvY3VtZW50LmJvZHksIFwiL1wiLCB7XG4vLyAgICAgXCIvXCI6IEhvbWUsXG4vLyAgICAgXCIvaG9tZVwiOiBIb21lLFxuLy8gICAgIFwiL3dvcmRzXCI6IFdvcmRzLFxuLy8gICAgIFwiL3dvcmRzL25ld1wiOiBXb3Jkc05ldyxcbi8vICAgICBcIi93b3Jkcy9lZGl0XCI6IFdvcmRzRWRpdCxcbi8vICAgICBcIi9jaGVja1wiOiBDaGVjayxcbi8vICAgICBcIi9jaGVjay9ydW5cIjogQ2hlY2tSdW4sXG4vLyAgICAgXCIvdGVzdFwiOiBUZXN0LFxuLy8gICAgIFwiL3Rlc3QvcnVuXCI6IFRlc3RSdW4sXG4vLyAgICAgXCIvdGVzdC9yZXN1bHRcIjogVGVzdFJlc3VsdFxuLy8gfSk7XG5tLnJvdXRlKGRvY3VtZW50LmJvZHksIFwiL2NoZWNrLzJcIiwge1xuICAgIFwiL2hvbWVcIjogSG9tZSxcbiAgICBcIi93b3Jkc1wiOiBXb3JkcyxcbiAgICBcIi93b3Jkcy9uZXdcIjogV29yZHNOZXcsXG4gICAgXCIvd29yZHMvOmlkXCI6IFdvcmRzRWRpdCxcbiAgICBcIi9jaGVjay86aWRcIjogQ2hlY2tSdW5cbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZXM2L2luZGV4LmpzXG4gKiovIiwiLypcbk1pdGhyaWwgdjAuMi4zXG5odHRwOi8vbWl0aHJpbC5qcy5vcmdcbihjKSAyMDE0LTIwMTYgTGVvIEhvcmllXG5MaWNlbnNlOiBNSVRcbiovXG4hZnVuY3Rpb24oYSxiKXtcInVzZSBzdHJpY3RcIjt2YXIgYz1iKGEpO1wib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm51bGwhPW1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9YzpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGZ1bmN0aW9uKCl7cmV0dXJuIGN9KTphLm09Y30oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6e30sZnVuY3Rpb24oYSxiKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBjKGEpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGF9ZnVuY3Rpb24gZChhKXtyZXR1cm5cIltvYmplY3QgT2JqZWN0XVwiPT09QWEuY2FsbChhKX1mdW5jdGlvbiBlKGEpe3JldHVyblwiW29iamVjdCBTdHJpbmddXCI9PT1BYS5jYWxsKGEpfWZ1bmN0aW9uIGYoKXt9ZnVuY3Rpb24gZyhhKXt2YT1hLmRvY3VtZW50LHdhPWEubG9jYXRpb24seWE9YS5jYW5jZWxBbmltYXRpb25GcmFtZXx8YS5jbGVhclRpbWVvdXQseGE9YS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGEuc2V0VGltZW91dH1mdW5jdGlvbiBoKGEsYil7Zm9yKHZhciBjLGQ9W10sZT0vKD86KF58I3xcXC4pKFteI1xcLlxcW1xcXV0rKSl8KFxcWy4rP1xcXSkvZztjPWUuZXhlYyhiKTspaWYoXCJcIj09PWNbMV0mJmNbMl0pYS50YWc9Y1syXTtlbHNlIGlmKFwiI1wiPT09Y1sxXSlhLmF0dHJzLmlkPWNbMl07ZWxzZSBpZihcIi5cIj09PWNbMV0pZC5wdXNoKGNbMl0pO2Vsc2UgaWYoXCJbXCI9PT1jWzNdWzBdKXt2YXIgZj0vXFxbKC4rPykoPzo9KFwifCd8KSguKj8pXFwyKT9cXF0vLmV4ZWMoY1szXSk7YS5hdHRyc1tmWzFdXT1mWzNdfHwoZlsyXT9cIlwiOiEwKX1yZXR1cm4gZH1mdW5jdGlvbiBpKGEsYil7dmFyIGM9Yj9hLnNsaWNlKDEpOmE7cmV0dXJuIDE9PT1jLmxlbmd0aCYmQmEoY1swXSk/Y1swXTpjfWZ1bmN0aW9uIGooYSxiLGMpe3ZhciBkPVwiY2xhc3NcImluIGI/XCJjbGFzc1wiOlwiY2xhc3NOYW1lXCI7Zm9yKHZhciBlIGluIGIpemEuY2FsbChiLGUpJiYoZT09PWQmJm51bGwhPWJbZV0mJlwiXCIhPT1iW2VdPyhjLnB1c2goYltlXSksYVtlXT1cIlwiKTphW2VdPWJbZV0pO2MubGVuZ3RoJiYoYVtkXT1jLmpvaW4oXCIgXCIpKX1mdW5jdGlvbiBrKGEsYil7dmFyIGM9W10uc2xpY2UuY2FsbChhcmd1bWVudHMsMSk7aWYoZChhKSlyZXR1cm4gYmEoYSxjKTtpZighZShhKSl0aHJvdyBuZXcgRXJyb3IoXCJzZWxlY3RvciBpbiBtKHNlbGVjdG9yLCBhdHRycywgY2hpbGRyZW4pIHNob3VsZCBiZSBhIHN0cmluZ1wiKTt2YXIgZj1udWxsIT1iJiZkKGIpJiYhKFwidGFnXCJpbiBifHxcInZpZXdcImluIGJ8fFwic3VidHJlZVwiaW4gYiksZz1mP2I6e30saz17dGFnOlwiZGl2XCIsYXR0cnM6e30sY2hpbGRyZW46aShjLGYpfTtyZXR1cm4gaihrLmF0dHJzLGcsaChrLGEpKSxrfWZ1bmN0aW9uIGwoYSxiKXtmb3IodmFyIGM9MDtjPGEubGVuZ3RoJiYhYihhW2NdLGMrKyk7KTt9ZnVuY3Rpb24gbShhLGIpe2woYSxmdW5jdGlvbihhLGMpe3JldHVybihhPWEmJmEuYXR0cnMpJiZudWxsIT1hLmtleSYmYihhLGMpfSl9ZnVuY3Rpb24gbihhKXt0cnl7aWYobnVsbCE9YSYmbnVsbCE9YS50b1N0cmluZygpKXJldHVybiBhfWNhdGNoKGIpe31yZXR1cm5cIlwifWZ1bmN0aW9uIG8oYSxiLGMsZCl7dHJ5e3EoYSxiLGMpLGIubm9kZVZhbHVlPWR9Y2F0Y2goZSl7fX1mdW5jdGlvbiBwKGEpe2Zvcih2YXIgYj0wO2I8YS5sZW5ndGg7YisrKUJhKGFbYl0pJiYoYT1hLmNvbmNhdC5hcHBseShbXSxhKSxiLS0pO3JldHVybiBhfWZ1bmN0aW9uIHEoYSxiLGMpe2EuaW5zZXJ0QmVmb3JlKGIsYS5jaGlsZE5vZGVzW2NdfHxudWxsKX1mdW5jdGlvbiByKGEsYixjLGQpe20oYSxmdW5jdGlvbihhLGQpe2JbYT1hLmtleV09YlthXT97YWN0aW9uOkZhLGluZGV4OmQsZnJvbTpiW2FdLmluZGV4LGVsZW1lbnQ6Yy5ub2Rlc1tiW2FdLmluZGV4XXx8dmEuY3JlYXRlRWxlbWVudChcImRpdlwiKX06e2FjdGlvbjpFYSxpbmRleDpkfX0pO3ZhciBlPVtdO2Zvcih2YXIgZiBpbiBiKXphLmNhbGwoYixmKSYmZS5wdXNoKGJbZl0pO3ZhciBnPWUuc29ydChSKSxoPW5ldyBBcnJheShjLmxlbmd0aCk7cmV0dXJuIGgubm9kZXM9Yy5ub2Rlcy5zbGljZSgpLGwoZyxmdW5jdGlvbihiKXt2YXIgZT1iLmluZGV4O2lmKGIuYWN0aW9uPT09RGEmJihXKGNbZV0ubm9kZXMsY1tlXSksaC5zcGxpY2UoZSwxKSksYi5hY3Rpb249PT1FYSl7dmFyIGY9dmEuY3JlYXRlRWxlbWVudChcImRpdlwiKTtmLmtleT1hW2VdLmF0dHJzLmtleSxxKGQsZixlKSxoLnNwbGljZShlLDAse2F0dHJzOntrZXk6YVtlXS5hdHRycy5rZXl9LG5vZGVzOltmXX0pLGgubm9kZXNbZV09Zn1pZihiLmFjdGlvbj09PUZhKXt2YXIgZz1iLmVsZW1lbnQsaT1kLmNoaWxkTm9kZXNbZV07aSE9PWcmJm51bGwhPT1nJiZkLmluc2VydEJlZm9yZShnLGl8fG51bGwpLGhbZV09Y1tiLmZyb21dLGgubm9kZXNbZV09Z319KSxofWZ1bmN0aW9uIHMoYSxiLGMsZCl7dmFyIGU9YS5sZW5ndGghPT1iLmxlbmd0aDtyZXR1cm4gZXx8bShhLGZ1bmN0aW9uKGEsYyl7dmFyIGQ9YltjXTtyZXR1cm4gZT1kJiZkLmF0dHJzJiZkLmF0dHJzLmtleSE9PWEua2V5fSksZT9yKGEsYyxiLGQpOmJ9ZnVuY3Rpb24gdChhLGIsYyl7bChhLGZ1bmN0aW9uKGEsZCl7bnVsbCE9YltkXSYmYy5wdXNoLmFwcGx5KGMsYltkXS5ub2Rlcyl9KSxsKGIubm9kZXMsZnVuY3Rpb24oYSxkKXtudWxsIT1hLnBhcmVudE5vZGUmJmMuaW5kZXhPZihhKTwwJiZXKFthXSxbYltkXV0pfSksYS5sZW5ndGg8Yi5sZW5ndGgmJihiLmxlbmd0aD1hLmxlbmd0aCksYi5ub2Rlcz1jfWZ1bmN0aW9uIHUoYSl7dmFyIGI9MDttKGEsZnVuY3Rpb24oKXtyZXR1cm4gbChhLGZ1bmN0aW9uKGEpeyhhPWEmJmEuYXR0cnMpJiZudWxsPT1hLmtleSYmKGEua2V5PVwiX19taXRocmlsX19cIitiKyspfSksMX0pfWZ1bmN0aW9uIHYoYSxiLGMpe3JldHVybiBhLnRhZyE9PWIudGFnPyEwOmMuc29ydCgpLmpvaW4oKSE9PU9iamVjdC5rZXlzKGIuYXR0cnMpLnNvcnQoKS5qb2luKCk/ITA6YS5hdHRycy5pZCE9PWIuYXR0cnMuaWQ/ITA6YS5hdHRycy5rZXkhPT1iLmF0dHJzLmtleT8hMDpcImFsbFwiPT09ay5yZWRyYXcuc3RyYXRlZ3koKT8hYi5jb25maWdDb250ZXh0fHxiLmNvbmZpZ0NvbnRleHQucmV0YWluIT09ITA6XCJkaWZmXCI9PT1rLnJlZHJhdy5zdHJhdGVneSgpP2IuY29uZmlnQ29udGV4dCYmYi5jb25maWdDb250ZXh0LnJldGFpbj09PSExOiExfWZ1bmN0aW9uIHcoYSxiLGQpe3YoYSxiLGQpJiYoYi5ub2Rlcy5sZW5ndGgmJlcoYi5ub2RlcyksYi5jb25maWdDb250ZXh0JiZjKGIuY29uZmlnQ29udGV4dC5vbnVubG9hZCkmJmIuY29uZmlnQ29udGV4dC5vbnVubG9hZCgpLGIuY29udHJvbGxlcnMmJmwoYi5jb250cm9sbGVycyxmdW5jdGlvbihhKXthLm9udW5sb2FkJiZhLm9udW5sb2FkKHtwcmV2ZW50RGVmYXVsdDpmfSl9KSl9ZnVuY3Rpb24geChhLGIpe3JldHVybiBhLmF0dHJzLnhtbG5zP2EuYXR0cnMueG1sbnM6XCJzdmdcIj09PWEudGFnP1wiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjpcIm1hdGhcIj09PWEudGFnP1wiaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTFwiOmJ9ZnVuY3Rpb24geShhLGIsYyl7Yy5sZW5ndGgmJihhLnZpZXdzPWIsYS5jb250cm9sbGVycz1jLGwoYyxmdW5jdGlvbihhKXtpZihhLm9udW5sb2FkJiZhLm9udW5sb2FkLiRvbGQmJihhLm9udW5sb2FkPWEub251bmxvYWQuJG9sZCksR2EmJmEub251bmxvYWQpe3ZhciBiPWEub251bmxvYWQ7YS5vbnVubG9hZD1mLGEub251bmxvYWQuJG9sZD1ifX0pKX1mdW5jdGlvbiB6KGEsYixkLGUsZil7aWYoYyhiLmF0dHJzLmNvbmZpZykpe3ZhciBnPWYuY29uZmlnQ29udGV4dD1mLmNvbmZpZ0NvbnRleHR8fHt9O2EucHVzaChmdW5jdGlvbigpe3JldHVybiBiLmF0dHJzLmNvbmZpZy5jYWxsKGIsZCwhZSxnLGYpfSl9fWZ1bmN0aW9uIEEoYSxjLGQsZSxmLGcsaCxpKXt2YXIgaj1hLm5vZGVzWzBdO3JldHVybiBlJiZWKGosYy50YWcsYy5hdHRycyxhLmF0dHJzLGYpLGEuY2hpbGRyZW49UShqLGMudGFnLGIsYixjLmNoaWxkcmVuLGEuY2hpbGRyZW4sITEsMCxjLmF0dHJzLmNvbnRlbnRlZGl0YWJsZT9qOmQsZixoKSxhLm5vZGVzLmludGFjdD0hMCxpLmxlbmd0aCYmKGEudmlld3M9ZyxhLmNvbnRyb2xsZXJzPWkpLGp9ZnVuY3Rpb24gQihhLGIsYyl7dmFyIGQ7YS4kdHJ1c3RlZD9kPVooYixjLGEpOihkPVt2YS5jcmVhdGVUZXh0Tm9kZShhKV0sYi5ub2RlTmFtZSBpbiBDYXx8cShiLGRbMF0sYykpO3ZhciBlO3JldHVybiBlPVwic3RyaW5nXCI9PXR5cGVvZiBhfHxcIm51bWJlclwiPT10eXBlb2YgYXx8XCJib29sZWFuXCI9PXR5cGVvZiBhP25ldyBhLmNvbnN0cnVjdG9yKGEpOmEsZS5ub2Rlcz1kLGV9ZnVuY3Rpb24gQyhhLGIsYyxkLGUsZil7dmFyIGc9Yi5ub2RlcztyZXR1cm4gZCYmZD09PXZhLmFjdGl2ZUVsZW1lbnR8fChhLiR0cnVzdGVkPyhXKGcsYiksZz1aKGMsZSxhKSk6XCJ0ZXh0YXJlYVwiPT09Zj9jLnZhbHVlPWE6ZD9kLmlubmVySFRNTD1hOigoMT09PWdbMF0ubm9kZVR5cGV8fGcubGVuZ3RoPjF8fGdbMF0ubm9kZVZhbHVlLnRyaW0mJiFnWzBdLm5vZGVWYWx1ZS50cmltKCkpJiYoVyhiLm5vZGVzLGIpLGc9W3ZhLmNyZWF0ZVRleHROb2RlKGEpXSksbyhjLGdbMF0sZSxhKSkpLGI9bmV3IGEuY29uc3RydWN0b3IoYSksYi5ub2Rlcz1nLGJ9ZnVuY3Rpb24gRChhLGIsYyxkLGUsZixnKXtyZXR1cm4gYS5ub2Rlcy5sZW5ndGg/YS52YWx1ZU9mKCkhPT1iLnZhbHVlT2YoKXx8ZT9DKGIsYSxkLGYsYyxnKTooYS5ub2Rlcy5pbnRhY3Q9ITAsYSk6QihiLGQsYyl9ZnVuY3Rpb24gRShhKXtpZihhLiR0cnVzdGVkKXt2YXIgYj1hLm1hdGNoKC88W15cXC9dfFxcPlxccypbXjxdL2cpO2lmKG51bGwhPWIpcmV0dXJuIGIubGVuZ3RofWVsc2UgaWYoQmEoYSkpcmV0dXJuIGEubGVuZ3RoO3JldHVybiAxfWZ1bmN0aW9uIEYoYSxjLGQsZSxmLGcsaCxpLGope2E9cChhKTt2YXIgaz1bXSxsPWMubGVuZ3RoPT09YS5sZW5ndGgsbj0wLG89e30scT0hMTttKGMsZnVuY3Rpb24oYSxiKXtxPSEwLG9bY1tiXS5hdHRycy5rZXldPXthY3Rpb246RGEsaW5kZXg6Yn19KSx1KGEpLHEmJihjPXMoYSxjLG8sZCkpO2Zvcih2YXIgcj0wLHY9MCx3PWEubGVuZ3RoO3c+djt2Kyspe3ZhciB4PVEoZCxmLGMsZSxhW3ZdLGNbcl0sZyxlK258fG4saCxpLGopO3ghPT1iJiYobD1sJiZ4Lm5vZGVzLmludGFjdCxuKz1FKHgpLGNbcisrXT14KX1yZXR1cm4gbHx8dChhLGMsayksY31mdW5jdGlvbiBHKGEsYixjLGQsZSl7aWYobnVsbCE9Yil7aWYoQWEuY2FsbChiKT09PUFhLmNhbGwoYSkpcmV0dXJuIGI7aWYoZSYmZS5ub2Rlcyl7dmFyIGY9Yy1kLGc9ZisoQmEoYSk/YTpiLm5vZGVzKS5sZW5ndGg7VyhlLm5vZGVzLnNsaWNlKGYsZyksZS5zbGljZShmLGcpKX1lbHNlIGIubm9kZXMmJlcoYi5ub2RlcyxiKX1yZXR1cm4gYj1uZXcgYS5jb25zdHJ1Y3RvcixiLnRhZyYmKGI9e30pLGIubm9kZXM9W10sYn1mdW5jdGlvbiBIKGEsYil7cmV0dXJuIGEuYXR0cnMuaXM/bnVsbD09Yj92YS5jcmVhdGVFbGVtZW50KGEudGFnLGEuYXR0cnMuaXMpOnZhLmNyZWF0ZUVsZW1lbnROUyhiLGEudGFnLGEuYXR0cnMuaXMpOm51bGw9PWI/dmEuY3JlYXRlRWxlbWVudChhLnRhZyk6dmEuY3JlYXRlRWxlbWVudE5TKGIsYS50YWcpfWZ1bmN0aW9uIEkoYSxiLGMsZCl7cmV0dXJuIGQ/VihiLGEudGFnLGEuYXR0cnMse30sYyk6YS5hdHRyc31mdW5jdGlvbiBKKGEsYyxkLGUsZixnKXtyZXR1cm4gbnVsbCE9YS5jaGlsZHJlbiYmYS5jaGlsZHJlbi5sZW5ndGg+MD9RKGMsYS50YWcsYixiLGEuY2hpbGRyZW4sZC5jaGlsZHJlbiwhMCwwLGEuYXR0cnMuY29udGVudGVkaXRhYmxlP2M6ZSxmLGcpOmEuY2hpbGRyZW59ZnVuY3Rpb24gSyhhLGIsYyxkLGUsZixnKXt2YXIgaD17dGFnOmEudGFnLGF0dHJzOmIsY2hpbGRyZW46Yyxub2RlczpbZF19O3JldHVybiB5KGgsZixnKSxoLmNoaWxkcmVuJiYhaC5jaGlsZHJlbi5ub2RlcyYmKGguY2hpbGRyZW4ubm9kZXM9W10pLFwic2VsZWN0XCI9PT1hLnRhZyYmXCJ2YWx1ZVwiaW4gYS5hdHRycyYmVihkLGEudGFnLHt2YWx1ZTphLmF0dHJzLnZhbHVlfSx7fSxlKSxofWZ1bmN0aW9uIEwoYSxiLGQsZSl7dmFyIGY7cmV0dXJuIGY9XCJkaWZmXCI9PT1rLnJlZHJhdy5zdHJhdGVneSgpJiZhP2EuaW5kZXhPZihiKTotMSxmPi0xP2RbZl06YyhlKT9uZXcgZTp7fX1mdW5jdGlvbiBNKGEsYixjLGQpe251bGwhPWQub251bmxvYWQmJklhLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYS5oYW5kbGVyfSkuaW5kZXhPZihkLm9udW5sb2FkKTwwJiZJYS5wdXNoKHtjb250cm9sbGVyOmQsaGFuZGxlcjpkLm9udW5sb2FkfSksYS5wdXNoKGMpLGIucHVzaChkKX1mdW5jdGlvbiBOKGEsYixjLGQsZSxmKXt2YXIgZz1MKGMudmlld3MsYixkLGEuY29udHJvbGxlciksaD1hJiZhLmF0dHJzJiZhLmF0dHJzLmtleTtyZXR1cm4gYT0wPT09R2F8fEphfHxkJiZkLmluZGV4T2YoZyk+LTE/YS52aWV3KGcpOnt0YWc6XCJwbGFjZWhvbGRlclwifSxcInJldGFpblwiPT09YS5zdWJ0cmVlP2E6KGEuYXR0cnM9YS5hdHRyc3x8e30sYS5hdHRycy5rZXk9aCxNKGYsZSxiLGcpLGEpfWZ1bmN0aW9uIE8oYSxiLGMsZCl7Zm9yKHZhciBlPWImJmIuY29udHJvbGxlcnM7bnVsbCE9YS52aWV3OylhPU4oYSxhLnZpZXcuJG9yaWdpbmFsfHxhLnZpZXcsYixlLGQsYyk7cmV0dXJuIGF9ZnVuY3Rpb24gUChhLGIsYyxkLGYsZyxoLGkpe3ZhciBqPVtdLGs9W107aWYoYT1PKGEsYixqLGspLFwicmV0YWluXCI9PT1hLnN1YnRyZWUpcmV0dXJuIGI7aWYoIWEudGFnJiZrLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJDb21wb25lbnQgdGVtcGxhdGUgbXVzdCByZXR1cm4gYSB2aXJ0dWFsIGVsZW1lbnQsIG5vdCBhbiBhcnJheSwgc3RyaW5nLCBldGMuXCIpO2EuYXR0cnM9YS5hdHRyc3x8e30sYi5hdHRycz1iLmF0dHJzfHx7fTt2YXIgbD1PYmplY3Qua2V5cyhhLmF0dHJzKSxtPWwubGVuZ3RoPihcImtleVwiaW4gYS5hdHRycz8xOjApO2lmKHcoYSxiLGwpLGUoYS50YWcpKXt2YXIgbj0wPT09Yi5ub2Rlcy5sZW5ndGg7aD14KGEsaCk7dmFyIG87aWYobil7bz1IKGEsaCk7dmFyIHA9SShhLG8saCxtKSxyPUooYSxvLGIsYyxoLGkpO2I9SyhhLHAscixvLGgsaixrKX1lbHNlIG89QShiLGEsYyxtLGgsaixpLGspO3JldHVybihufHxnPT09ITAmJm51bGwhPW8pJiZxKGQsbyxmKSx6KGksYSxvLG4sYiksYn19ZnVuY3Rpb24gUShhLGIsZSxmLGcsaCxpLGosayxsLG0pe3JldHVybiBnPW4oZyksXCJyZXRhaW5cIj09PWcuc3VidHJlZT9oOihoPUcoZyxoLGosZixlKSxCYShnKT9GKGcsaCxhLGosYixpLGssbCxtKTpudWxsIT1nJiZkKGcpP1AoZyxoLGssYSxqLGksbCxtKTpjKGcpP2g6RChoLGcsaixhLGksayxiKSl9ZnVuY3Rpb24gUihhLGIpe3JldHVybiBhLmFjdGlvbi1iLmFjdGlvbnx8YS5pbmRleC1iLmluZGV4fWZ1bmN0aW9uIFMoYSxiLGMpe2Zvcih2YXIgZCBpbiBiKXphLmNhbGwoYixkKSYmKG51bGw9PWN8fGNbZF0hPT1iW2RdKSYmKGEuc3R5bGVbZF09YltkXSk7Zm9yKGQgaW4gYyl6YS5jYWxsKGMsZCkmJih6YS5jYWxsKGIsZCl8fChhLnN0eWxlW2RdPVwiXCIpKX1mdW5jdGlvbiBUKGEsYixlLGYsZyxoKXtpZihcImNvbmZpZ1wiPT09Ynx8XCJrZXlcIj09PWIpcmV0dXJuITA7aWYoYyhlKSYmXCJvblwiPT09Yi5zbGljZSgwLDIpKWFbYl09JChlLGEpO2Vsc2UgaWYoXCJzdHlsZVwiPT09YiYmbnVsbCE9ZSYmZChlKSlTKGEsZSxmKTtlbHNlIGlmKG51bGwhPWgpXCJocmVmXCI9PT1iP2Euc2V0QXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsXCJocmVmXCIsZSk6YS5zZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIj09PWI/XCJjbGFzc1wiOmIsZSk7ZWxzZSBpZihiIGluIGEmJiFLYVtiXSl0cnl7KFwiaW5wdXRcIiE9PWd8fGFbYl0hPT1lKSYmKGFbYl09ZSl9Y2F0Y2goaSl7YS5zZXRBdHRyaWJ1dGUoYixlKX1lbHNlIGEuc2V0QXR0cmlidXRlKGIsZSl9ZnVuY3Rpb24gVShhLGIsYyxkLGUsZixnKXtpZihiIGluIGUmJmQ9PT1jKVwidmFsdWVcIj09PWImJlwiaW5wdXRcIj09PWYmJmEudmFsdWUhPT1jJiYoYS52YWx1ZT1jKTtlbHNle2VbYl09Yzt0cnl7cmV0dXJuIFQoYSxiLGMsZCxmLGcpfWNhdGNoKGgpe2lmKGgubWVzc2FnZS5pbmRleE9mKFwiSW52YWxpZCBhcmd1bWVudFwiKTwwKXRocm93IGh9fX1mdW5jdGlvbiBWKGEsYixjLGQsZSl7Zm9yKHZhciBmIGluIGMpaWYoemEuY2FsbChjLGYpJiZVKGEsZixjW2ZdLGRbZl0sZCxiLGUpKWNvbnRpbnVlO3JldHVybiBkfWZ1bmN0aW9uIFcoYSxiKXtmb3IodmFyIGM9YS5sZW5ndGgtMTtjPi0xO2MtLSlpZihhW2NdJiZhW2NdLnBhcmVudE5vZGUpe3RyeXthW2NdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYVtjXSl9Y2F0Y2goZCl7fWI9W10uY29uY2F0KGIpLGJbY10mJlgoYltjXSl9YS5sZW5ndGgmJihhLmxlbmd0aD0wKX1mdW5jdGlvbiBYKGEpe2EuY29uZmlnQ29udGV4dCYmYyhhLmNvbmZpZ0NvbnRleHQub251bmxvYWQpJiYoYS5jb25maWdDb250ZXh0Lm9udW5sb2FkKCksYS5jb25maWdDb250ZXh0Lm9udW5sb2FkPW51bGwpLGEuY29udHJvbGxlcnMmJmwoYS5jb250cm9sbGVycyxmdW5jdGlvbihhKXtjKGEub251bmxvYWQpJiZhLm9udW5sb2FkKHtwcmV2ZW50RGVmYXVsdDpmfSl9KSxhLmNoaWxkcmVuJiYoQmEoYS5jaGlsZHJlbik/bChhLmNoaWxkcmVuLFgpOmEuY2hpbGRyZW4udGFnJiZYKGEuY2hpbGRyZW4pKX1mdW5jdGlvbiBZKGEsYil7dHJ5e2EuYXBwZW5kQ2hpbGQodmEuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoYikpfWNhdGNoKGMpe2EuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsYil9fWZ1bmN0aW9uIFooYSxiLGMpe3ZhciBkPWEuY2hpbGROb2Rlc1tiXTtpZihkKXt2YXIgZT0xIT09ZC5ub2RlVHlwZSxmPXZhLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO2U/KGEuaW5zZXJ0QmVmb3JlKGYsZHx8bnVsbCksZi5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmViZWdpblwiLGMpLGEucmVtb3ZlQ2hpbGQoZikpOmQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlYmVnaW5cIixjKX1lbHNlIFkoYSxjKTtmb3IodmFyIGc9W107YS5jaGlsZE5vZGVzW2JdIT09ZDspZy5wdXNoKGEuY2hpbGROb2Rlc1tiXSksYisrO3JldHVybiBnfWZ1bmN0aW9uICQoYSxiKXtyZXR1cm4gZnVuY3Rpb24oYyl7Yz1jfHxldmVudCxrLnJlZHJhdy5zdHJhdGVneShcImRpZmZcIiksay5zdGFydENvbXB1dGF0aW9uKCk7dHJ5e3JldHVybiBhLmNhbGwoYixjKX1maW5hbGx5e2ZhKCl9fX1mdW5jdGlvbiBfKGEpe3ZhciBiPU1hLmluZGV4T2YoYSk7cmV0dXJuIDA+Yj9NYS5wdXNoKGEpLTE6Yn1mdW5jdGlvbiBhYShhKXtmdW5jdGlvbiBiKCl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGgmJihhPWFyZ3VtZW50c1swXSksYX1yZXR1cm4gYi50b0pTT049ZnVuY3Rpb24oKXtyZXR1cm4gYX0sYn1mdW5jdGlvbiBiYShhLGIpe2Z1bmN0aW9uIGMoKXtyZXR1cm4oYS5jb250cm9sbGVyfHxmKS5hcHBseSh0aGlzLGIpfHx0aGlzfWZ1bmN0aW9uIGQoYyl7Zm9yKHZhciBkPVtjXS5jb25jYXQoYiksZT0xO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspZC5wdXNoKGFyZ3VtZW50c1tlXSk7cmV0dXJuIGEudmlldy5hcHBseShhLGQpfWEuY29udHJvbGxlciYmKGMucHJvdG90eXBlPWEuY29udHJvbGxlci5wcm90b3R5cGUpLGQuJG9yaWdpbmFsPWEudmlldzt2YXIgZT17Y29udHJvbGxlcjpjLHZpZXc6ZH07cmV0dXJuIGJbMF0mJm51bGwhPWJbMF0ua2V5JiYoZS5hdHRycz17a2V5OmJbMF0ua2V5fSksZX1mdW5jdGlvbiBjYShhLGIsYyxkKXtpZighZCl7ay5yZWRyYXcuc3RyYXRlZ3koXCJhbGxcIiksay5zdGFydENvbXB1dGF0aW9uKCksUGFbY109Yjt2YXIgZTtlPU9hPWE/YTphPXtjb250cm9sbGVyOmZ9O3ZhciBnPW5ldyhhLmNvbnRyb2xsZXJ8fGYpO3JldHVybiBlPT09T2EmJihSYVtjXT1nLFFhW2NdPWEpLGZhKCksbnVsbD09PWEmJmRhKGIsYyksUmFbY119bnVsbD09YSYmZGEoYixjKX1mdW5jdGlvbiBkYShhLGIpe1BhLnNwbGljZShiLDEpLFJhLnNwbGljZShiLDEpLFFhLnNwbGljZShiLDEpLG1hKGEpLE1hLnNwbGljZShfKGEpLDEpfWZ1bmN0aW9uIGVhKCl7VWEmJihVYSgpLFVhPW51bGwpLGwoUGEsZnVuY3Rpb24oYSxiKXt2YXIgYz1RYVtiXTtpZihSYVtiXSl7dmFyIGQ9W1JhW2JdXTtrLnJlbmRlcihhLGMudmlldz9jLnZpZXcoUmFbYl0sZCk6XCJcIil9fSksVmEmJihWYSgpLFZhPW51bGwpLFNhPW51bGwsVGE9bmV3IERhdGUsay5yZWRyYXcuc3RyYXRlZ3koXCJkaWZmXCIpfWZ1bmN0aW9uIGZhKCl7XCJub25lXCI9PT1rLnJlZHJhdy5zdHJhdGVneSgpPyhHYS0tLGsucmVkcmF3LnN0cmF0ZWd5KFwiZGlmZlwiKSk6ay5lbmRDb21wdXRhdGlvbigpfWZ1bmN0aW9uIGdhKGEpe3JldHVybiBhLnNsaWNlKCRhW2sucm91dGUubW9kZV0ubGVuZ3RoKX1mdW5jdGlvbiBoYShhLGIsYyl7WWE9e307dmFyIGQ9Yy5pbmRleE9mKFwiP1wiKTstMSE9PWQmJihZYT1sYShjLnN1YnN0cihkKzEsYy5sZW5ndGgpKSxjPWMuc3Vic3RyKDAsZCkpO3ZhciBlPU9iamVjdC5rZXlzKGIpLGY9ZS5pbmRleE9mKGMpO2lmKC0xIT09ZilyZXR1cm4gay5tb3VudChhLGJbZVtmXV0pLCEwO2Zvcih2YXIgZyBpbiBiKWlmKHphLmNhbGwoYixnKSl7aWYoZz09PWMpcmV0dXJuIGsubW91bnQoYSxiW2ddKSwhMDt2YXIgaD1uZXcgUmVnRXhwKFwiXlwiK2cucmVwbGFjZSgvOlteXFwvXSs/XFwuezN9L2csXCIoLio/KVwiKS5yZXBsYWNlKC86W15cXC9dKy9nLFwiKFteXFxcXC9dKylcIikrXCIvPyRcIik7aWYoaC50ZXN0KGMpKXJldHVybiBjLnJlcGxhY2UoaCxmdW5jdGlvbigpe3ZhciBjPWcubWF0Y2goLzpbXlxcL10rL2cpfHxbXSxkPVtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEsLTIpO2woYyxmdW5jdGlvbihhLGIpe1lhW2EucmVwbGFjZSgvOnxcXC4vZyxcIlwiKV09ZGVjb2RlVVJJQ29tcG9uZW50KGRbYl0pfSksay5tb3VudChhLGJbZ10pfSksITB9fWZ1bmN0aW9uIGlhKGEpe2lmKGE9YXx8ZXZlbnQsIShhLmN0cmxLZXl8fGEubWV0YUtleXx8YS5zaGlmdEtleXx8Mj09PWEud2hpY2gpKXthLnByZXZlbnREZWZhdWx0P2EucHJldmVudERlZmF1bHQoKTphLnJldHVyblZhbHVlPSExO3ZhciBiLGM9YS5jdXJyZW50VGFyZ2V0fHxhLnNyY0VsZW1lbnQ7Zm9yKGI9XCJwYXRobmFtZVwiPT09ay5yb3V0ZS5tb2RlJiZjLnNlYXJjaD9sYShjLnNlYXJjaC5zbGljZSgxKSk6e307YyYmIS9hL2kudGVzdChjLm5vZGVOYW1lKTspYz1jLnBhcmVudE5vZGU7R2E9MCxrLnJvdXRlKGNbay5yb3V0ZS5tb2RlXS5zbGljZSgkYVtrLnJvdXRlLm1vZGVdLmxlbmd0aCksYil9fWZ1bmN0aW9uIGphKCl7XCJoYXNoXCIhPT1rLnJvdXRlLm1vZGUmJndhLmhhc2g/d2EuaGFzaD13YS5oYXNoOmEuc2Nyb2xsVG8oMCwwKX1mdW5jdGlvbiBrYShhLGMpe3ZhciBlPXt9LGY9W107Zm9yKHZhciBnIGluIGEpaWYoemEuY2FsbChhLGcpKXt2YXIgaD1jP2MrXCJbXCIrZytcIl1cIjpnLGk9YVtnXTtpZihudWxsPT09aSlmLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGgpKTtlbHNlIGlmKGQoaSkpZi5wdXNoKGthKGksaCkpO2Vsc2UgaWYoQmEoaSkpe3ZhciBqPVtdO2VbaF09ZVtoXXx8e30sbChpLGZ1bmN0aW9uKGEpe2VbaF1bYV18fChlW2hdW2FdPSEwLGoucHVzaChlbmNvZGVVUklDb21wb25lbnQoaCkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGEpKSl9KSxmLnB1c2goai5qb2luKFwiJlwiKSl9ZWxzZSBpIT09YiYmZi5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChoKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQoaSkpfXJldHVybiBmLmpvaW4oXCImXCIpfWZ1bmN0aW9uIGxhKGEpe2lmKFwiXCI9PT1hfHxudWxsPT1hKXJldHVybnt9O1wiP1wiPT09YS5jaGFyQXQoMCkmJihhPWEuc2xpY2UoMSkpO3ZhciBiPWEuc3BsaXQoXCImXCIpLGM9e307cmV0dXJuIGwoYixmdW5jdGlvbihhKXt2YXIgYj1hLnNwbGl0KFwiPVwiKSxkPWRlY29kZVVSSUNvbXBvbmVudChiWzBdKSxlPTI9PT1iLmxlbmd0aD9kZWNvZGVVUklDb21wb25lbnQoYlsxXSk6bnVsbDtudWxsIT1jW2RdPyhCYShjW2RdKXx8KGNbZF09W2NbZF1dKSxjW2RdLnB1c2goZSkpOmNbZF09ZX0pLGN9ZnVuY3Rpb24gbWEoYSl7dmFyIGM9XyhhKTtXKGEuY2hpbGROb2RlcyxOYVtjXSksTmFbY109Yn1mdW5jdGlvbiBuYShhLGIpe3ZhciBjPWsucHJvcChiKTtyZXR1cm4gYS50aGVuKGMpLGMudGhlbj1mdW5jdGlvbihjLGQpe3JldHVybiBuYShhLnRoZW4oYyxkKSxiKX0sY1tcImNhdGNoXCJdPWMudGhlbi5iaW5kKG51bGwsbnVsbCksY31mdW5jdGlvbiBvYShhLGIpe2Z1bmN0aW9uIGUoYSl7aT1hfHxlYixsLm1hcChmdW5jdGlvbihhKXtpPT09ZGI/YS5yZXNvbHZlKGopOmEucmVqZWN0KGopfSl9ZnVuY3Rpb24gZihhLGIsZSxmKXtpZigobnVsbCE9aiYmZChqKXx8YyhqKSkmJmMoYSkpdHJ5e3ZhciBnPTA7YS5jYWxsKGosZnVuY3Rpb24oYSl7ZysrfHwoaj1hLGIoKSl9LGZ1bmN0aW9uKGEpe2crK3x8KGo9YSxlKCkpfSl9Y2F0Y2goaCl7ay5kZWZlcnJlZC5vbmVycm9yKGgpLGo9aCxlKCl9ZWxzZSBmKCl9ZnVuY3Rpb24gZygpe3ZhciBkO3RyeXtkPWomJmoudGhlbn1jYXRjaChsKXtyZXR1cm4gay5kZWZlcnJlZC5vbmVycm9yKGwpLGo9bCxpPWNiLGcoKX1pPT09Y2ImJmsuZGVmZXJyZWQub25lcnJvcihqKSxmKGQsZnVuY3Rpb24oKXtpPWJiLGcoKX0sZnVuY3Rpb24oKXtpPWNiLGcoKX0sZnVuY3Rpb24oKXt0cnl7aT09PWJiJiZjKGEpP2o9YShqKTppPT09Y2ImJmMoYikmJihqPWIoaiksaT1iYil9Y2F0Y2goZyl7cmV0dXJuIGsuZGVmZXJyZWQub25lcnJvcihnKSxqPWcsZSgpfWo9PT1oPyhqPVR5cGVFcnJvcigpLGUoKSk6ZihkLGZ1bmN0aW9uKCl7ZShkYil9LGUsZnVuY3Rpb24oKXtlKGk9PT1iYiYmZGIpfSl9KX12YXIgaD10aGlzLGk9MCxqPTAsbD1bXTtoLnByb21pc2U9e30saC5yZXNvbHZlPWZ1bmN0aW9uKGEpe3JldHVybiBpfHwoaj1hLGk9YmIsZygpKSxofSxoLnJlamVjdD1mdW5jdGlvbihhKXtyZXR1cm4gaXx8KGo9YSxpPWNiLGcoKSksaH0saC5wcm9taXNlLnRoZW49ZnVuY3Rpb24oYSxiKXt2YXIgYz1uZXcgb2EoYSxiKTtyZXR1cm4gaT09PWRiP2MucmVzb2x2ZShqKTppPT09ZWI/Yy5yZWplY3Qoaik6bC5wdXNoKGMpLGMucHJvbWlzZX19ZnVuY3Rpb24gcGEoYSl7cmV0dXJuIGF9ZnVuY3Rpb24gcWEoYyl7dmFyIGQ9XCJtaXRocmlsX2NhbGxiYWNrX1wiKyhuZXcgRGF0ZSkuZ2V0VGltZSgpK1wiX1wiK01hdGgucm91bmQoMWUxNipNYXRoLnJhbmRvbSgpKS50b1N0cmluZygzNiksZT12YS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2FbZF09ZnVuY3Rpb24oZil7ZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpLGMub25sb2FkKHt0eXBlOlwibG9hZFwiLHRhcmdldDp7cmVzcG9uc2VUZXh0OmZ9fSksYVtkXT1ifSxlLm9uZXJyb3I9ZnVuY3Rpb24oKXtyZXR1cm4gZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpLGMub25lcnJvcih7dHlwZTpcImVycm9yXCIsdGFyZ2V0OntzdGF0dXM6NTAwLHJlc3BvbnNlVGV4dDpKU09OLnN0cmluZ2lmeSh7ZXJyb3I6XCJFcnJvciBtYWtpbmcganNvbnAgcmVxdWVzdFwifSl9fSksYVtkXT1iLCExfSxlLm9ubG9hZD1mdW5jdGlvbigpe3JldHVybiExfSxlLnNyYz1jLnVybCsoYy51cmwuaW5kZXhPZihcIj9cIik+MD9cIiZcIjpcIj9cIikrKGMuY2FsbGJhY2tLZXk/Yy5jYWxsYmFja0tleTpcImNhbGxiYWNrXCIpK1wiPVwiK2QrXCImXCIra2EoYy5kYXRhfHx7fSksdmEuYm9keS5hcHBlbmRDaGlsZChlKX1mdW5jdGlvbiByYShiKXt2YXIgZD1uZXcgYS5YTUxIdHRwUmVxdWVzdDtpZihkLm9wZW4oYi5tZXRob2QsYi51cmwsITAsYi51c2VyLGIucGFzc3dvcmQpLGQub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7ND09PWQucmVhZHlTdGF0ZSYmKGQuc3RhdHVzPj0yMDAmJmQuc3RhdHVzPDMwMD9iLm9ubG9hZCh7dHlwZTpcImxvYWRcIix0YXJnZXQ6ZH0pOmIub25lcnJvcih7dHlwZTpcImVycm9yXCIsdGFyZ2V0OmR9KSl9LGIuc2VyaWFsaXplPT09SlNPTi5zdHJpbmdpZnkmJmIuZGF0YSYmXCJHRVRcIiE9PWIubWV0aG9kJiZkLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIixcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIiksYi5kZXNlcmlhbGl6ZT09PUpTT04ucGFyc2UmJmQuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC8qXCIpLGMoYi5jb25maWcpKXt2YXIgZj1iLmNvbmZpZyhkLGIpO251bGwhPWYmJihkPWYpfXZhciBnPVwiR0VUXCIhPT1iLm1ldGhvZCYmYi5kYXRhP2IuZGF0YTpcIlwiO2lmKGcmJiFlKGcpJiZnLmNvbnN0cnVjdG9yIT09YS5Gb3JtRGF0YSl0aHJvdyBuZXcgRXJyb3IoXCJSZXF1ZXN0IGRhdGEgc2hvdWxkIGJlIGVpdGhlciBiZSBhIHN0cmluZyBvciBGb3JtRGF0YS4gQ2hlY2sgdGhlIGBzZXJpYWxpemVgIG9wdGlvbiBpbiBgbS5yZXF1ZXN0YFwiKTtyZXR1cm4gZC5zZW5kKGcpLGR9ZnVuY3Rpb24gc2EoYSl7cmV0dXJuIGEuZGF0YVR5cGUmJlwianNvbnBcIj09PWEuZGF0YVR5cGUudG9Mb3dlckNhc2UoKT9xYShhKTpyYShhKX1mdW5jdGlvbiB0YShhLGIsYyl7aWYoXCJHRVRcIj09PWEubWV0aG9kJiZcImpzb25wXCIhPT1hLmRhdGFUeXBlKXt2YXIgZD1hLnVybC5pbmRleE9mKFwiP1wiKTwwP1wiP1wiOlwiJlwiLGU9a2EoYik7YS51cmwrPWU/ZCtlOlwiXCJ9ZWxzZSBhLmRhdGE9YyhiKX1mdW5jdGlvbiB1YShhLGIpe3JldHVybiBiJiYoYT1hLnJlcGxhY2UoLzpbYS16XVxcdysvZ2ksZnVuY3Rpb24oYSl7dmFyIGM9YS5zbGljZSgxKSxkPWJbY107cmV0dXJuIGRlbGV0ZSBiW2NdLGR9KSksYX1rLnZlcnNpb249ZnVuY3Rpb24oKXtyZXR1cm5cInYwLjIuM1wifTt2YXIgdmEsd2EseGEseWEsemE9e30uaGFzT3duUHJvcGVydHksQWE9e30udG9TdHJpbmcsQmE9QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24oYSl7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT09QWEuY2FsbChhKX0sQ2E9e0FSRUE6MSxCQVNFOjEsQlI6MSxDT0w6MSxDT01NQU5EOjEsRU1CRUQ6MSxIUjoxLElNRzoxLElOUFVUOjEsS0VZR0VOOjEsTElOSzoxLE1FVEE6MSxQQVJBTToxLFNPVVJDRToxLFRSQUNLOjEsV0JSOjF9O2suZGVwcz1mdW5jdGlvbihiKXtyZXR1cm4gZyhhPWJ8fHdpbmRvdyksYX0say5kZXBzKGEpO3ZhciBEYT0xLEVhPTIsRmE9MyxHYT0wO2suc3RhcnRDb21wdXRhdGlvbj1mdW5jdGlvbigpe0dhKyt9LGsuZW5kQ29tcHV0YXRpb249ZnVuY3Rpb24oKXtHYT4xP0dhLS06KEdhPTAsay5yZWRyYXcoKSl9O3ZhciBIYSxJYT1bXSxKYT0hMSxLYT17bGlzdDoxLHN0eWxlOjEsZm9ybToxLHR5cGU6MSx3aWR0aDoxLGhlaWdodDoxfSxMYT17YXBwZW5kQ2hpbGQ6ZnVuY3Rpb24oYSl7SGE9PT1iJiYoSGE9dmEuY3JlYXRlRWxlbWVudChcImh0bWxcIikpLHZhLmRvY3VtZW50RWxlbWVudCYmdmEuZG9jdW1lbnRFbGVtZW50IT09YT92YS5yZXBsYWNlQ2hpbGQoYSx2YS5kb2N1bWVudEVsZW1lbnQpOnZhLmFwcGVuZENoaWxkKGEpLHRoaXMuY2hpbGROb2Rlcz12YS5jaGlsZE5vZGVzfSxpbnNlcnRCZWZvcmU6ZnVuY3Rpb24oYSl7dGhpcy5hcHBlbmRDaGlsZChhKX0sY2hpbGROb2RlczpbXX0sTWE9W10sTmE9e307ay5yZW5kZXI9ZnVuY3Rpb24oYSxjLGQpe2lmKCFhKXRocm93IG5ldyBFcnJvcihcIkVuc3VyZSB0aGUgRE9NIGVsZW1lbnQgYmVpbmcgcGFzc2VkIHRvIG0ucm91dGUvbS5tb3VudC9tLnJlbmRlciBpcyBub3QgdW5kZWZpbmVkLlwiKTt2YXIgZSxmPVtdLGc9XyhhKSxoPWE9PT12YTtlPWh8fGE9PT12YS5kb2N1bWVudEVsZW1lbnQ/TGE6YSxoJiZcImh0bWxcIiE9PWMudGFnJiYoYz17dGFnOlwiaHRtbFwiLGF0dHJzOnt9LGNoaWxkcmVuOmN9KSxOYVtnXT09PWImJlcoZS5jaGlsZE5vZGVzKSxkPT09ITAmJm1hKGEpLE5hW2ddPVEoZSxudWxsLGIsYixjLE5hW2ddLCExLDAsbnVsbCxiLGYpLGwoZixmdW5jdGlvbihhKXthKCl9KX0say50cnVzdD1mdW5jdGlvbihhKXtyZXR1cm4gYT1uZXcgU3RyaW5nKGEpLGEuJHRydXN0ZWQ9ITAsYX0say5wcm9wPWZ1bmN0aW9uKGEpe3JldHVybihudWxsIT1hJiZkKGEpfHxjKGEpKSYmYyhhLnRoZW4pP25hKGEpOmFhKGEpfTt2YXIgT2EsUGE9W10sUWE9W10sUmE9W10sU2E9bnVsbCxUYT0wLFVhPW51bGwsVmE9bnVsbCxXYT0xNjtrLmNvbXBvbmVudD1mdW5jdGlvbihhKXt2YXIgYj1bXS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKTtyZXR1cm4gYmEoYSxiKX0say5tb3VudD1rLm1vZHVsZT1mdW5jdGlvbihhLGIpe2lmKCFhKXRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBlbnN1cmUgdGhlIERPTSBlbGVtZW50IGV4aXN0cyBiZWZvcmUgcmVuZGVyaW5nIGEgdGVtcGxhdGUgaW50byBpdC5cIik7dmFyIGQ9UGEuaW5kZXhPZihhKTswPmQmJihkPVBhLmxlbmd0aCk7dmFyIGU9ITEsZj17cHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXtlPSEwLFVhPVZhPW51bGx9fTtyZXR1cm4gbChJYSxmdW5jdGlvbihhKXthLmhhbmRsZXIuY2FsbChhLmNvbnRyb2xsZXIsZiksYS5jb250cm9sbGVyLm9udW5sb2FkPW51bGx9KSxlP2woSWEsZnVuY3Rpb24oYSl7YS5jb250cm9sbGVyLm9udW5sb2FkPWEuaGFuZGxlcn0pOklhPVtdLFJhW2RdJiZjKFJhW2RdLm9udW5sb2FkKSYmUmFbZF0ub251bmxvYWQoZiksY2EoYixhLGQsZSl9O3ZhciBYYT0hMTtrLnJlZHJhdz1mdW5jdGlvbihiKXtpZighWGEpe1hhPSEwLGImJihKYT0hMCk7dHJ5e1NhJiYhYj8oeGE9PT1hLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8bmV3IERhdGUtVGE+V2EpJiYoU2E+MCYmeWEoU2EpLFNhPXhhKGVhLFdhKSk6KGVhKCksU2E9eGEoZnVuY3Rpb24oKXtTYT1udWxsfSxXYSkpfWZpbmFsbHl7WGE9SmE9ITF9fX0say5yZWRyYXcuc3RyYXRlZ3k9ay5wcm9wKCksay53aXRoQXR0cj1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGZ1bmN0aW9uKGQpe2Q9ZHx8ZXZlbnQ7dmFyIGU9ZC5jdXJyZW50VGFyZ2V0fHx0aGlzLGY9Y3x8dGhpcyxnPWEgaW4gZT9lW2FdOmUuZ2V0QXR0cmlidXRlKGEpO2IuY2FsbChmLGcpfX07dmFyIFlhLFphLCRhPXtwYXRobmFtZTpcIlwiLGhhc2g6XCIjXCIsc2VhcmNoOlwiP1wifSxfYT1mLGFiPSExO2sucm91dGU9ZnVuY3Rpb24oYixjLGQsZil7aWYoMD09PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIFphO2lmKDM9PT1hcmd1bWVudHMubGVuZ3RoJiZlKGMpKXtfYT1mdW5jdGlvbihhKXt2YXIgZT1aYT1nYShhKTtpZighaGEoYixkLGUpKXtpZihhYil0aHJvdyBuZXcgRXJyb3IoXCJFbnN1cmUgdGhlIGRlZmF1bHQgcm91dGUgbWF0Y2hlcyBvbmUgb2YgdGhlIHJvdXRlcyBkZWZpbmVkIGluIG0ucm91dGVcIik7YWI9ITAsay5yb3V0ZShjLCEwKSxhYj0hMX19O3ZhciBnPVwiaGFzaFwiPT09ay5yb3V0ZS5tb2RlP1wib25oYXNoY2hhbmdlXCI6XCJvbnBvcHN0YXRlXCI7cmV0dXJuIGFbZ109ZnVuY3Rpb24oKXt2YXIgYT13YVtrLnJvdXRlLm1vZGVdO1wicGF0aG5hbWVcIj09PWsucm91dGUubW9kZSYmKGErPXdhLnNlYXJjaCksWmEhPT1nYShhKSYmX2EoYSl9LFVhPWphLHZvaWQgYVtnXSgpfWlmKGIuYWRkRXZlbnRMaXN0ZW5lcnx8Yi5hdHRhY2hFdmVudCl7dmFyIGg9XCJwYXRobmFtZVwiIT09ay5yb3V0ZS5tb2RlP3dhLnBhdGhuYW1lOlwiXCI7cmV0dXJuIGIuaHJlZj1oKyRhW2sucm91dGUubW9kZV0rZi5hdHRycy5ocmVmLHZvaWQoYi5hZGRFdmVudExpc3RlbmVyPyhiLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGlhKSxiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGlhKSk6KGIuZGV0YWNoRXZlbnQoXCJvbmNsaWNrXCIsaWEpLGIuYXR0YWNoRXZlbnQoXCJvbmNsaWNrXCIsaWEpKSl9aWYoZShiKSl7dmFyIGk9WmE7WmE9Yjt2YXIgaixsPWN8fHt9LG09WmEuaW5kZXhPZihcIj9cIik7aj1tPi0xP2xhKFphLnNsaWNlKG0rMSkpOnt9O2Zvcih2YXIgbiBpbiBsKXphLmNhbGwobCxuKSYmKGpbbl09bFtuXSk7dmFyIG8scD1rYShqKTtvPW0+LTE/WmEuc2xpY2UoMCxtKTpaYSxwJiYoWmE9bysoLTE9PT1vLmluZGV4T2YoXCI/XCIpP1wiP1wiOlwiJlwiKStwKTt2YXIgcT0oMz09PWFyZ3VtZW50cy5sZW5ndGg/ZDpjKT09PSEwfHxpPT09YjtpZihhLmhpc3RvcnkucHVzaFN0YXRlKXt2YXIgcj1xP1wicmVwbGFjZVN0YXRlXCI6XCJwdXNoU3RhdGVcIjtVYT1qYSxWYT1mdW5jdGlvbigpe2EuaGlzdG9yeVtyXShudWxsLHZhLnRpdGxlLCRhW2sucm91dGUubW9kZV0rWmEpfSxfYSgkYVtrLnJvdXRlLm1vZGVdK1phKX1lbHNlIHdhW2sucm91dGUubW9kZV09WmEsX2EoJGFbay5yb3V0ZS5tb2RlXStaYSl9fSxrLnJvdXRlLnBhcmFtPWZ1bmN0aW9uKGEpe2lmKCFZYSl0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbXVzdCBjYWxsIG0ucm91dGUoZWxlbWVudCwgZGVmYXVsdFJvdXRlLCByb3V0ZXMpIGJlZm9yZSBjYWxsaW5nIG0ucm91dGUucGFyYW0oKVwiKTtyZXR1cm4gYT9ZYVthXTpZYX0say5yb3V0ZS5tb2RlPVwic2VhcmNoXCIsay5yb3V0ZS5idWlsZFF1ZXJ5U3RyaW5nPWthLGsucm91dGUucGFyc2VRdWVyeVN0cmluZz1sYSxrLmRlZmVycmVkPWZ1bmN0aW9uKCl7dmFyIGE9bmV3IG9hO3JldHVybiBhLnByb21pc2U9bmEoYS5wcm9taXNlKSxhfTt2YXIgYmI9MSxjYj0yLGRiPTMsZWI9NDtyZXR1cm4gay5kZWZlcnJlZC5vbmVycm9yPWZ1bmN0aW9uKGEpe2lmKFwiW29iamVjdCBFcnJvcl1cIj09PUFhLmNhbGwoYSkmJiEvIEVycm9yLy50ZXN0KGEuY29uc3RydWN0b3IudG9TdHJpbmcoKSkpdGhyb3cgR2E9MCxhfSxrLnN5bmM9ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihhLGIpe3JldHVybiBmdW5jdGlvbihnKXtyZXR1cm4gZVthXT1nLGJ8fChmPVwicmVqZWN0XCIpLDA9PT0tLWQmJihjLnByb21pc2UoZSksY1tmXShlKSksZ319dmFyIGM9ay5kZWZlcnJlZCgpLGQ9YS5sZW5ndGgsZT1uZXcgQXJyYXkoZCksZj1cInJlc29sdmVcIjtyZXR1cm4gYS5sZW5ndGg+MD9sKGEsZnVuY3Rpb24oYSxjKXthLnRoZW4oYihjLCEwKSxiKGMsITEpKX0pOmMucmVzb2x2ZShbXSksYy5wcm9taXNlfSxrLnJlcXVlc3Q9ZnVuY3Rpb24oYSl7YS5iYWNrZ3JvdW5kIT09ITAmJmsuc3RhcnRDb21wdXRhdGlvbigpO3ZhciBiLGMsZCxlPW5ldyBvYSxmPWEuZGF0YVR5cGUmJlwianNvbnBcIj09PWEuZGF0YVR5cGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gZj8oYj1hLnNlcmlhbGl6ZT1jPWEuZGVzZXJpYWxpemU9cGEsZD1mdW5jdGlvbihhKXtyZXR1cm4gYS5yZXNwb25zZVRleHR9KTooYj1hLnNlcmlhbGl6ZT1hLnNlcmlhbGl6ZXx8SlNPTi5zdHJpbmdpZnksYz1hLmRlc2VyaWFsaXplPWEuZGVzZXJpYWxpemV8fEpTT04ucGFyc2UsZD1hLmV4dHJhY3R8fGZ1bmN0aW9uKGEpe3JldHVybiBhLnJlc3BvbnNlVGV4dC5sZW5ndGh8fGMhPT1KU09OLnBhcnNlP2EucmVzcG9uc2VUZXh0Om51bGx9KSxhLm1ldGhvZD0oYS5tZXRob2R8fFwiR0VUXCIpLnRvVXBwZXJDYXNlKCksYS51cmw9dWEoYS51cmwsYS5kYXRhKSx0YShhLGEuZGF0YSxiKSxhLm9ubG9hZD1hLm9uZXJyb3I9ZnVuY3Rpb24oYil7dHJ5e2I9Ynx8ZXZlbnQ7dmFyIGY9YyhkKGIudGFyZ2V0LGEpKTtcImxvYWRcIj09PWIudHlwZT8oYS51bndyYXBTdWNjZXNzJiYoZj1hLnVud3JhcFN1Y2Nlc3MoZixiLnRhcmdldCkpLEJhKGYpJiZhLnR5cGU/bChmLGZ1bmN0aW9uKGIsYyl7ZltjXT1uZXcgYS50eXBlKGIpfSk6YS50eXBlJiYoZj1uZXcgYS50eXBlKGYpKSxlLnJlc29sdmUoZikpOihhLnVud3JhcEVycm9yJiYoZj1hLnVud3JhcEVycm9yKGYsYi50YXJnZXQpKSxlLnJlamVjdChmKSl9Y2F0Y2goZyl7ZS5yZWplY3QoZyl9ZmluYWxseXthLmJhY2tncm91bmQhPT0hMCYmay5lbmRDb21wdXRhdGlvbigpfX0sc2EoYSksZS5wcm9taXNlPW5hKGUucHJvbWlzZSxhLmluaXRpYWxWYWx1ZSksZS5wcm9taXNlfSxrfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taXRocmlsLm1pbi5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYm93ZXJfY29tcG9uZW50cy9taXRocmlsL21pdGhyaWwubWluLmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0bW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBtIGZyb20gXCJtaXRocmlsXCI7XG4vLyBpbXBvcnQgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuXG5jb25zdCBuYXZiYXIgPSBhcmdzID0+IHtcbiAgICByZXR1cm4gbShcIi5kaXNwbGF5RmxleEZpeGVkXCIsIFtcbiAgICAgICAgbShcIi5kaXNwbGF5RmxleCBjYXJkIGZsZXhfcm93XCIsIHtcbiAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgIFwiZmxleFwiOiAxLFxuICAgICAgICAgICAgICAgIFwiYWxpZ24taXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBcInBhZGRpbmctdG9wXCI6IFwiMnJlbVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIFtcbiAgICAgICAgICAgIG0oXCJhXCIsIHtcbiAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJmbGV4XCI6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICBcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIxMXB4XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwib25jbGlja1wiOiBhcmdzLmxfYnRuLmFjdFxuICAgICAgICAgICAgfSwgYXJncy5sX2J0bi5sYWJlbCksXG4gICAgICAgICAgICBtKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJmbGV4XCI6IFwiM1wiLFxuICAgICAgICAgICAgICAgICAgICBcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGFyZ3MudGl0bGUpLFxuICAgICAgICAgICAgbShcImFcIiwge1xuICAgICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImZsZXhcIjogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dC1hbGlnblwiOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjExcHhcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJvbmNsaWNrXCI6IGFyZ3Mucl9idG4uYWN0XG4gICAgICAgICAgICB9LCBhcmdzLnJfYnRuLmxhYmVsKVxuICAgICAgICBdKVxuICAgIF0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBuYXZiYXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9lczYvY29tcG9uZW50cy9uYXZiYXIuanNcbiAqKi8iLCJpbXBvcnQgbSBmcm9tIFwibWl0aHJpbFwiO1xyXG5pbXBvcnQgXyBmcm9tIFwidW5kZXJzY29yZVwiO1xyXG5pbXBvcnQgV29yZHMgZnJvbSBcIi4vbW9kZWwvd29yZHNcIjtcclxuaW1wb3J0IENoZWNrIGZyb20gXCIuL21vZGVsL2NoZWNrXCI7XHJcblxyXG5sZXQgdm0gPSB7XHJcbiAgICBzY2VuZToge1xyXG4gICAgICAgIGhvbWU6IHtcclxuICAgICAgICAgICAgbmF2YmFyOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLjg5vjg7zjg6BcIixcclxuICAgICAgICAgICAgICAgIGxfYnRuOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi6Kit5a6aXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0OiBmdW5jdGlvbigpe31cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByX2J0bjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIuODmOODq+ODl1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdDogZnVuY3Rpb24oKXt9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgIG1lbnU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIuWNmOiqnuW4s+OBuFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiL3dvcmRzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpcHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi5Y2Y6Kqe44Gu566h55CG44GM44Gn44GN44G+44GZ44CCXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIuOBvuOBmuOBr+OBk+OBk+OBp+WNmOiqnuOCkueZu+mMsuOBl+OBpuOBj+OBoOOBleOBhOOAglwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi5pqX6KiY44Kr44O844OJ44G4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIvY2hlY2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlwczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLljZjoqp7jga7mmpfoqJjjgYzjgafjgY3jgb7jgZnjgIJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi55u05oSf44Go44K544OU44O844OJ44GM5aSn5YiHXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIuOAjuOCj+OBi+OCi+OAj+OAjuOCj+OBi+OCieOBquOBhOOAj+OBp+WIhuOBkeOCi+OAglwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi44OG44K544OI44G4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIvdGVzdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXBzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIuWNmOiqnuOBruW+qee/kuOBjOOBp+OBjeOBvuOBmeOAglwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLmraPjgZfjgYTljZjoqp7jga7mhI/lkbPjgpLpgbjmip7jgZfjgabjgY/jgaDjgZXjgYTjgIJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3b3Jkczoge1xyXG4gICAgICAgICAgICBuYXZiYXI6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIuWNmOiqnuW4s1wiLFxyXG4gICAgICAgICAgICAgICAgbF9idG46IHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLmiLvjgotcIixcclxuICAgICAgICAgICAgICAgICAgICBhY3Q6ICgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG0ucm91dGUoXCIvaG9tZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcl9idG46IHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLov73liqBcIixcclxuICAgICAgICAgICAgICAgICAgICBhY3Q6ICgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG0ucm91dGUoXCIvd29yZHMvbmV3XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgbGlzdDogW11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd29yZHNOZXc6IHtcclxuICAgICAgICAgICAgbmF2YmFyOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLljZjoqp7jgpLov73liqBcIixcclxuICAgICAgICAgICAgICAgIGxfYnRuOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi5oi744KLXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG0ucm91dGUoXCIvd29yZHNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJfYnRuOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0OiBmdW5jdGlvbigpe31cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uMTogXCLov73liqDjgZnjgotcIixcclxuICAgICAgICAgICAgICAgIGJ1dHRvbjI6IFwi57aa44GR44Gm6L+95YqgXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd29yZHNFZGl0OiB7XHJcbiAgICAgICAgICAgIG5hdmJhcjoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi5Y2Y6Kqe44KS57eo6ZuGXCIsXHJcbiAgICAgICAgICAgICAgICBsX2J0bjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIuaIu+OCi1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtLnJvdXRlKFwiL3dvcmRzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByX2J0bjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdDogZnVuY3Rpb24oKXt9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbjogXCLnmbvpjLLjgZnjgotcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGVjazoge1xyXG4gICAgICAgICAgICBuYXZiYXI6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIuaal+iomOOCq+ODvOODiSAtIOODoeODi+ODpeODvFwiLFxyXG4gICAgICAgICAgICAgICAgbF9idG46IHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLmiLvjgotcIixcclxuICAgICAgICAgICAgICAgICAgICBhY3Q6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG0ucm91dGUoXCIvaG9tZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcl9idG46IHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLjg5jjg6vjg5dcIixcclxuICAgICAgICAgICAgICAgICAgICBhY3Q6IGZ1bmN0aW9uKCl7fVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50OiB7fVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hlY2tSdW46IHtcclxuICAgICAgICAgICAgbmF2YmFyOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLmmpfoqJjjgqvjg7zjg4kgLSDlrp/ot7VcIixcclxuICAgICAgICAgICAgICAgIGxfYnRuOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi5oi744KLXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0OiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtLnJvdXRlKFwiL2NoZWNrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByX2J0bjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdDogZnVuY3Rpb24oKXt9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHt9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0ZXN0OiB7XHJcbiAgICAgICAgICAgIG5hdmJhcjoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi44OG44K544OIIC0g44Oh44OL44Ol44O8XCIsXHJcbiAgICAgICAgICAgICAgICBsX2J0bjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIuaIu+OCi1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdDogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbS5yb3V0ZShcIi9ob21lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByX2J0bjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIuODmOODq+ODl1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdDogZnVuY3Rpb24oKXt9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHt9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBUZXN0UnVuOiB7XHJcbiAgICAgICAgICAgIG5hdmJhcjoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi44OG44K544OIIC0g5a6f6Le1XCIsXHJcbiAgICAgICAgICAgICAgICBsX2J0bjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIuaIu+OCi1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdDogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbS5yb3V0ZShcIi90ZXN0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByX2J0bjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdDogZnVuY3Rpb24oKXt9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHt9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBUZXN0UmVzdWx0OiB7XHJcbiAgICAgICAgICAgIG5hdmJhcjoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi44OG44K544OIIC0g57WQ5p6cXCIsXHJcbiAgICAgICAgICAgICAgICBsX2J0bjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIuaIu+OCi1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdDogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbS5yb3V0ZShcIi9ob21lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByX2J0bjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdDogZnVuY3Rpb24oKXt9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHt9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGluaXQ6ICgpID0+IHtcclxuICAgICAgICB2bS53b3JkTGlzdCA9IG5ldyBXb3Jkcy5MaXN0KCk7XHJcbiAgICAgICAgdm0uY2hlY2tMaXN0ID0gbmV3IENoZWNrLkxpc3QoKTtcclxuICAgICAgICAvLyB0aGlzLmFkZEFsbCh0aGlzLmxpc3QsIFtdKTtcclxuICAgIH0sXHJcbiAgICBhZGQ6IChsaXN0LCBhZGRJdGVtKSA9PiB7XHJcbiAgICAgICAgaWYoYWRkSXRlbSl7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChuZXcgV29yZHMuSXRlbShhZGRJdGVtKSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYWRkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhZGRBbGw6IChsaXN0LCBhZGRMaXN0KSA9PiB7XHJcbiAgICAgICAgYWRkTGlzdC5tYXAoYWRkSXRlbSA9PiB2bS5hZGQobGlzdCwgYWRkSXRlbSkpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYWRkQWxsXCIpO1xyXG4gICAgfSxcclxuICAgIGFkZENoZWNrOiBhZGRJdGVtID0+IHtcclxuICAgICAgICB2bS5jaGVja0xpc3QucHVzaChuZXcgQ2hlY2suSXRlbShhZGRJdGVtKSk7XHJcbiAgICB9LFxyXG4gICAgYWRkQ2hlY2tBbGw6IGFkZExpc3QgPT4ge1xyXG4gICAgICAgIGFkZExpc3QubWFwKGFkZEl0ZW0gPT4gdm0uYWRkQ2hlY2soYWRkSXRlbSkpO1xyXG4gICAgfSxcclxuICAgIGdldFVybFBhcmFtOiBrZXkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRlZmVycmVkID0gbS5kZWZlcnJlZCgpO1xyXG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUoKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzID0gTnVtYmVyKG0ucm91dGUucGFyYW0oa2V5KSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMgLSAxO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgfSxcclxuICAgIGdldENoZWNrV29yZHM6ICh3b3JkcywgbGltaXQpICA9PiB7XHJcbiAgICAgICAgcmV0dXJuIF8od29yZHMpLnNhbXBsZShsaW1pdCk7XHJcbiAgICB9LFxyXG4gICAgaW5jcmltZW50Q291bnQ6IChudW0sIGxpbWl0KSA9PntcclxuICAgICAgICBpZihudW0oKSA9PT0gbGltaXQoKSl7XHJcbiAgICAgICAgICAgIG51bSgwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBudW0obnVtKCkgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAqQHBhcmFte0Z1bmN0aW9ufW51bSDphY3liJfjgqTjg7Pjg4fjg4Pjgq/jgrnjgIFtLnByb3AoMCnjgafkvZzmiJDjgZfjgZ9nZXR0ZXItc2V0dGVy6Zai5pWwXHJcbiAgICAqQHBhcmFte0Z1bmN0aW9ufWluY3JpbWVudEZ1bmMg6YWN5YiX44Kk44Oz44OH44OD44Kv44K544Gu44Kk44Oz44Kv44Oq44Oh44Oz44OI44KS6KGM44GG6Zai5pWwXHJcbiAgICAqQHBhcmFte0Z1bmN0aW9ufWQgbS5kZWZlcnJlZOOBp+S9nOaIkOOBl+OBn3Byb21pc2Xjg5XjgqHjgq/jg4jjg6rjg7xcclxuICAgICovXHJcbiAgICBnZXROZXh0V29yZDogKG51bSwgaW5jcmltZW50RnVuYywgZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRlZiA9IGQgfHwgbS5kZWZlcnJlZCgpO1xyXG4gICAgICAgIGlmKHR5cGVvZiBudW0oKSA9PT0gTnVtYmVyKXJldHVybjtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZighdm0uY2hlY2tMaXN0W251bSgpXS5mbGFnKCkpe1xyXG4gICAgICAgICAgICAgICAgZGVmLnJlc29sdmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2bS5jaGVja0xpc3RbbnVtKCldO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmLnByb21pc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodm0uY2hlY2tMaXN0W251bSgpXS5mbGFnKCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG51bSsrKTtcclxuICAgICAgICAgICAgICAgIGluY3JpbWVudEZ1bmMoKTtcclxuICAgICAgICAgICAgICAgIHZtLmdldE5leHRXb3JkKG51bSwgaW5jcmltZW50RnVuYywgZGVmKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZXROZXh0V29yZDE6IChudW0sIGxpbWl0KSA9PiB7XHJcbiAgICAgICAgLy/lvJXmlbDjga7lnovjg4Hjgqfjg4Pjgq9cclxuICAgICAgICBpZih0eXBlb2YgbnVtKCkgPT09IE51bWJlcilyZXR1cm47XHJcbiAgICAgICAgaWYodHlwZW9mIGxpbWl0KCkgPT09IE51bWJlcilyZXR1cm47XHJcbiAgICAgICAgaWYodHlwZW9mIHZtLmNoZWNrTGlzdFtudW0oKV0uZmxhZygpID09PSBCb29sZWFuKXJldHVybjtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHZtLmNoZWNrTGlzdFtudW0oKV0uZmxhZygpKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRydWU6IHtcclxuICAgICAgICAgICAgICAgICAgICB2bS5pbmNyaW1lbnRDb3VudChudW0sIGxpbWl0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdm0uZ2V0TmV4dFdvcmQxKG51bSwgbGltaXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBmYWxzZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2bS5jaGVja0xpc3RbbnVtKCldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjaGVja0VuZEZsYWc6IGxpbWl0ID0+IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBfLmNvdW50Qnkodm0uY2hlY2tMaXN0LCBpdGVtID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoaXRlbSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKGl0ZW0uZmxhZygpID09PSB0cnVlKSA/IFwib2tcIiA6IFwibm9cIjtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgICByZXR1cm4gKGxpbWl0KCkgPD0gcmVzdWx0Lm9rKTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHZtO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9lczYvc3RvcmUuanNcbiAqKi8iLCIvLyAgICAgVW5kZXJzY29yZS5qcyAxLjguM1xuLy8gICAgIGh0dHA6Ly91bmRlcnNjb3JlanMub3JnXG4vLyAgICAgKGMpIDIwMDktMjAxNSBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuLy8gICAgIFVuZGVyc2NvcmUgbWF5IGJlIGZyZWVseSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG5cbihmdW5jdGlvbigpIHtcblxuICAvLyBCYXNlbGluZSBzZXR1cFxuICAvLyAtLS0tLS0tLS0tLS0tLVxuXG4gIC8vIEVzdGFibGlzaCB0aGUgcm9vdCBvYmplY3QsIGB3aW5kb3dgIGluIHRoZSBicm93c2VyLCBvciBgZXhwb3J0c2Agb24gdGhlIHNlcnZlci5cbiAgdmFyIHJvb3QgPSB0aGlzO1xuXG4gIC8vIFNhdmUgdGhlIHByZXZpb3VzIHZhbHVlIG9mIHRoZSBgX2AgdmFyaWFibGUuXG4gIHZhciBwcmV2aW91c1VuZGVyc2NvcmUgPSByb290Ll87XG5cbiAgLy8gU2F2ZSBieXRlcyBpbiB0aGUgbWluaWZpZWQgKGJ1dCBub3QgZ3ppcHBlZCkgdmVyc2lvbjpcbiAgdmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsIE9ialByb3RvID0gT2JqZWN0LnByb3RvdHlwZSwgRnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gIC8vIENyZWF0ZSBxdWljayByZWZlcmVuY2UgdmFyaWFibGVzIGZvciBzcGVlZCBhY2Nlc3MgdG8gY29yZSBwcm90b3R5cGVzLlxuICB2YXJcbiAgICBwdXNoICAgICAgICAgICAgID0gQXJyYXlQcm90by5wdXNoLFxuICAgIHNsaWNlICAgICAgICAgICAgPSBBcnJheVByb3RvLnNsaWNlLFxuICAgIHRvU3RyaW5nICAgICAgICAgPSBPYmpQcm90by50b1N0cmluZyxcbiAgICBoYXNPd25Qcm9wZXJ0eSAgID0gT2JqUHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbiAgLy8gQWxsICoqRUNNQVNjcmlwdCA1KiogbmF0aXZlIGZ1bmN0aW9uIGltcGxlbWVudGF0aW9ucyB0aGF0IHdlIGhvcGUgdG8gdXNlXG4gIC8vIGFyZSBkZWNsYXJlZCBoZXJlLlxuICB2YXJcbiAgICBuYXRpdmVJc0FycmF5ICAgICAgPSBBcnJheS5pc0FycmF5LFxuICAgIG5hdGl2ZUtleXMgICAgICAgICA9IE9iamVjdC5rZXlzLFxuICAgIG5hdGl2ZUJpbmQgICAgICAgICA9IEZ1bmNQcm90by5iaW5kLFxuICAgIG5hdGl2ZUNyZWF0ZSAgICAgICA9IE9iamVjdC5jcmVhdGU7XG5cbiAgLy8gTmFrZWQgZnVuY3Rpb24gcmVmZXJlbmNlIGZvciBzdXJyb2dhdGUtcHJvdG90eXBlLXN3YXBwaW5nLlxuICB2YXIgQ3RvciA9IGZ1bmN0aW9uKCl7fTtcblxuICAvLyBDcmVhdGUgYSBzYWZlIHJlZmVyZW5jZSB0byB0aGUgVW5kZXJzY29yZSBvYmplY3QgZm9yIHVzZSBiZWxvdy5cbiAgdmFyIF8gPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqIGluc3RhbmNlb2YgXykgcmV0dXJuIG9iajtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgXykpIHJldHVybiBuZXcgXyhvYmopO1xuICAgIHRoaXMuX3dyYXBwZWQgPSBvYmo7XG4gIH07XG5cbiAgLy8gRXhwb3J0IHRoZSBVbmRlcnNjb3JlIG9iamVjdCBmb3IgKipOb2RlLmpzKiosIHdpdGhcbiAgLy8gYmFja3dhcmRzLWNvbXBhdGliaWxpdHkgZm9yIHRoZSBvbGQgYHJlcXVpcmUoKWAgQVBJLiBJZiB3ZSdyZSBpblxuICAvLyB0aGUgYnJvd3NlciwgYWRkIGBfYCBhcyBhIGdsb2JhbCBvYmplY3QuXG4gIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IF87XG4gICAgfVxuICAgIGV4cG9ydHMuXyA9IF87XG4gIH0gZWxzZSB7XG4gICAgcm9vdC5fID0gXztcbiAgfVxuXG4gIC8vIEN1cnJlbnQgdmVyc2lvbi5cbiAgXy5WRVJTSU9OID0gJzEuOC4zJztcblxuICAvLyBJbnRlcm5hbCBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gZWZmaWNpZW50IChmb3IgY3VycmVudCBlbmdpbmVzKSB2ZXJzaW9uXG4gIC8vIG9mIHRoZSBwYXNzZWQtaW4gY2FsbGJhY2ssIHRvIGJlIHJlcGVhdGVkbHkgYXBwbGllZCBpbiBvdGhlciBVbmRlcnNjb3JlXG4gIC8vIGZ1bmN0aW9ucy5cbiAgdmFyIG9wdGltaXplQ2IgPSBmdW5jdGlvbihmdW5jLCBjb250ZXh0LCBhcmdDb3VudCkge1xuICAgIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHJldHVybiBmdW5jO1xuICAgIHN3aXRjaCAoYXJnQ291bnQgPT0gbnVsbCA/IDMgOiBhcmdDb3VudCkge1xuICAgICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCB2YWx1ZSk7XG4gICAgICB9O1xuICAgICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24odmFsdWUsIG90aGVyKSB7XG4gICAgICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgdmFsdWUsIG90aGVyKTtcbiAgICAgIH07XG4gICAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pO1xuICAgICAgfTtcbiAgICAgIGNhc2UgNDogcmV0dXJuIGZ1bmN0aW9uKGFjY3VtdWxhdG9yLCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCBhY2N1bXVsYXRvciwgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKTtcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBBIG1vc3RseS1pbnRlcm5hbCBmdW5jdGlvbiB0byBnZW5lcmF0ZSBjYWxsYmFja3MgdGhhdCBjYW4gYmUgYXBwbGllZFxuICAvLyB0byBlYWNoIGVsZW1lbnQgaW4gYSBjb2xsZWN0aW9uLCByZXR1cm5pbmcgdGhlIGRlc2lyZWQgcmVzdWx0IOKAlCBlaXRoZXJcbiAgLy8gaWRlbnRpdHksIGFuIGFyYml0cmFyeSBjYWxsYmFjaywgYSBwcm9wZXJ0eSBtYXRjaGVyLCBvciBhIHByb3BlcnR5IGFjY2Vzc29yLlxuICB2YXIgY2IgPSBmdW5jdGlvbih2YWx1ZSwgY29udGV4dCwgYXJnQ291bnQpIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIF8uaWRlbnRpdHk7XG4gICAgaWYgKF8uaXNGdW5jdGlvbih2YWx1ZSkpIHJldHVybiBvcHRpbWl6ZUNiKHZhbHVlLCBjb250ZXh0LCBhcmdDb3VudCk7XG4gICAgaWYgKF8uaXNPYmplY3QodmFsdWUpKSByZXR1cm4gXy5tYXRjaGVyKHZhbHVlKTtcbiAgICByZXR1cm4gXy5wcm9wZXJ0eSh2YWx1ZSk7XG4gIH07XG4gIF8uaXRlcmF0ZWUgPSBmdW5jdGlvbih2YWx1ZSwgY29udGV4dCkge1xuICAgIHJldHVybiBjYih2YWx1ZSwgY29udGV4dCwgSW5maW5pdHkpO1xuICB9O1xuXG4gIC8vIEFuIGludGVybmFsIGZ1bmN0aW9uIGZvciBjcmVhdGluZyBhc3NpZ25lciBmdW5jdGlvbnMuXG4gIHZhciBjcmVhdGVBc3NpZ25lciA9IGZ1bmN0aW9uKGtleXNGdW5jLCB1bmRlZmluZWRPbmx5KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iaikge1xuICAgICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICBpZiAobGVuZ3RoIDwgMiB8fCBvYmogPT0gbnVsbCkgcmV0dXJuIG9iajtcbiAgICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpbmRleF0sXG4gICAgICAgICAgICBrZXlzID0ga2V5c0Z1bmMoc291cmNlKSxcbiAgICAgICAgICAgIGwgPSBrZXlzLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoIXVuZGVmaW5lZE9ubHkgfHwgb2JqW2tleV0gPT09IHZvaWQgMCkgb2JqW2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuICB9O1xuXG4gIC8vIEFuIGludGVybmFsIGZ1bmN0aW9uIGZvciBjcmVhdGluZyBhIG5ldyBvYmplY3QgdGhhdCBpbmhlcml0cyBmcm9tIGFub3RoZXIuXG4gIHZhciBiYXNlQ3JlYXRlID0gZnVuY3Rpb24ocHJvdG90eXBlKSB7XG4gICAgaWYgKCFfLmlzT2JqZWN0KHByb3RvdHlwZSkpIHJldHVybiB7fTtcbiAgICBpZiAobmF0aXZlQ3JlYXRlKSByZXR1cm4gbmF0aXZlQ3JlYXRlKHByb3RvdHlwZSk7XG4gICAgQ3Rvci5wcm90b3R5cGUgPSBwcm90b3R5cGU7XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBDdG9yO1xuICAgIEN0b3IucHJvdG90eXBlID0gbnVsbDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHZhciBwcm9wZXJ0eSA9IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBvYmogPT0gbnVsbCA/IHZvaWQgMCA6IG9ialtrZXldO1xuICAgIH07XG4gIH07XG5cbiAgLy8gSGVscGVyIGZvciBjb2xsZWN0aW9uIG1ldGhvZHMgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgYSBjb2xsZWN0aW9uXG4gIC8vIHNob3VsZCBiZSBpdGVyYXRlZCBhcyBhbiBhcnJheSBvciBhcyBhbiBvYmplY3RcbiAgLy8gUmVsYXRlZDogaHR0cDovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9sZW5ndGhcbiAgLy8gQXZvaWRzIGEgdmVyeSBuYXN0eSBpT1MgOCBKSVQgYnVnIG9uIEFSTS02NC4gIzIwOTRcbiAgdmFyIE1BWF9BUlJBWV9JTkRFWCA9IE1hdGgucG93KDIsIDUzKSAtIDE7XG4gIHZhciBnZXRMZW5ndGggPSBwcm9wZXJ0eSgnbGVuZ3RoJyk7XG4gIHZhciBpc0FycmF5TGlrZSA9IGZ1bmN0aW9uKGNvbGxlY3Rpb24pIHtcbiAgICB2YXIgbGVuZ3RoID0gZ2V0TGVuZ3RoKGNvbGxlY3Rpb24pO1xuICAgIHJldHVybiB0eXBlb2YgbGVuZ3RoID09ICdudW1iZXInICYmIGxlbmd0aCA+PSAwICYmIGxlbmd0aCA8PSBNQVhfQVJSQVlfSU5ERVg7XG4gIH07XG5cbiAgLy8gQ29sbGVjdGlvbiBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBUaGUgY29ybmVyc3RvbmUsIGFuIGBlYWNoYCBpbXBsZW1lbnRhdGlvbiwgYWthIGBmb3JFYWNoYC5cbiAgLy8gSGFuZGxlcyByYXcgb2JqZWN0cyBpbiBhZGRpdGlvbiB0byBhcnJheS1saWtlcy4gVHJlYXRzIGFsbFxuICAvLyBzcGFyc2UgYXJyYXktbGlrZXMgYXMgaWYgdGhleSB3ZXJlIGRlbnNlLlxuICBfLmVhY2ggPSBfLmZvckVhY2ggPSBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0ZWUgPSBvcHRpbWl6ZUNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICB2YXIgaSwgbGVuZ3RoO1xuICAgIGlmIChpc0FycmF5TGlrZShvYmopKSB7XG4gICAgICBmb3IgKGkgPSAwLCBsZW5ndGggPSBvYmoubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaXRlcmF0ZWUob2JqW2ldLCBpLCBvYmopO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIga2V5cyA9IF8ua2V5cyhvYmopO1xuICAgICAgZm9yIChpID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpdGVyYXRlZShvYmpba2V5c1tpXV0sIGtleXNbaV0sIG9iaik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSByZXN1bHRzIG9mIGFwcGx5aW5nIHRoZSBpdGVyYXRlZSB0byBlYWNoIGVsZW1lbnQuXG4gIF8ubWFwID0gXy5jb2xsZWN0ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgIHZhciBrZXlzID0gIWlzQXJyYXlMaWtlKG9iaikgJiYgXy5rZXlzKG9iaiksXG4gICAgICAgIGxlbmd0aCA9IChrZXlzIHx8IG9iaikubGVuZ3RoLFxuICAgICAgICByZXN1bHRzID0gQXJyYXkobGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIgY3VycmVudEtleSA9IGtleXMgPyBrZXlzW2luZGV4XSA6IGluZGV4O1xuICAgICAgcmVzdWx0c1tpbmRleF0gPSBpdGVyYXRlZShvYmpbY3VycmVudEtleV0sIGN1cnJlbnRLZXksIG9iaik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIC8vIENyZWF0ZSBhIHJlZHVjaW5nIGZ1bmN0aW9uIGl0ZXJhdGluZyBsZWZ0IG9yIHJpZ2h0LlxuICBmdW5jdGlvbiBjcmVhdGVSZWR1Y2UoZGlyKSB7XG4gICAgLy8gT3B0aW1pemVkIGl0ZXJhdG9yIGZ1bmN0aW9uIGFzIHVzaW5nIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAvLyBpbiB0aGUgbWFpbiBmdW5jdGlvbiB3aWxsIGRlb3B0aW1pemUgdGhlLCBzZWUgIzE5OTEuXG4gICAgZnVuY3Rpb24gaXRlcmF0b3Iob2JqLCBpdGVyYXRlZSwgbWVtbywga2V5cywgaW5kZXgsIGxlbmd0aCkge1xuICAgICAgZm9yICg7IGluZGV4ID49IDAgJiYgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IGRpcikge1xuICAgICAgICB2YXIgY3VycmVudEtleSA9IGtleXMgPyBrZXlzW2luZGV4XSA6IGluZGV4O1xuICAgICAgICBtZW1vID0gaXRlcmF0ZWUobWVtbywgb2JqW2N1cnJlbnRLZXldLCBjdXJyZW50S2V5LCBvYmopO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1lbW87XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIG1lbW8sIGNvbnRleHQpIHtcbiAgICAgIGl0ZXJhdGVlID0gb3B0aW1pemVDYihpdGVyYXRlZSwgY29udGV4dCwgNCk7XG4gICAgICB2YXIga2V5cyA9ICFpc0FycmF5TGlrZShvYmopICYmIF8ua2V5cyhvYmopLFxuICAgICAgICAgIGxlbmd0aCA9IChrZXlzIHx8IG9iaikubGVuZ3RoLFxuICAgICAgICAgIGluZGV4ID0gZGlyID4gMCA/IDAgOiBsZW5ndGggLSAxO1xuICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBpbml0aWFsIHZhbHVlIGlmIG5vbmUgaXMgcHJvdmlkZWQuXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgbWVtbyA9IG9ialtrZXlzID8ga2V5c1tpbmRleF0gOiBpbmRleF07XG4gICAgICAgIGluZGV4ICs9IGRpcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVyYXRvcihvYmosIGl0ZXJhdGVlLCBtZW1vLCBrZXlzLCBpbmRleCwgbGVuZ3RoKTtcbiAgICB9O1xuICB9XG5cbiAgLy8gKipSZWR1Y2UqKiBidWlsZHMgdXAgYSBzaW5nbGUgcmVzdWx0IGZyb20gYSBsaXN0IG9mIHZhbHVlcywgYWthIGBpbmplY3RgLFxuICAvLyBvciBgZm9sZGxgLlxuICBfLnJlZHVjZSA9IF8uZm9sZGwgPSBfLmluamVjdCA9IGNyZWF0ZVJlZHVjZSgxKTtcblxuICAvLyBUaGUgcmlnaHQtYXNzb2NpYXRpdmUgdmVyc2lvbiBvZiByZWR1Y2UsIGFsc28ga25vd24gYXMgYGZvbGRyYC5cbiAgXy5yZWR1Y2VSaWdodCA9IF8uZm9sZHIgPSBjcmVhdGVSZWR1Y2UoLTEpO1xuXG4gIC8vIFJldHVybiB0aGUgZmlyc3QgdmFsdWUgd2hpY2ggcGFzc2VzIGEgdHJ1dGggdGVzdC4gQWxpYXNlZCBhcyBgZGV0ZWN0YC5cbiAgXy5maW5kID0gXy5kZXRlY3QgPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBrZXk7XG4gICAgaWYgKGlzQXJyYXlMaWtlKG9iaikpIHtcbiAgICAgIGtleSA9IF8uZmluZEluZGV4KG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAga2V5ID0gXy5maW5kS2V5KG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICB9XG4gICAgaWYgKGtleSAhPT0gdm9pZCAwICYmIGtleSAhPT0gLTEpIHJldHVybiBvYmpba2V5XTtcbiAgfTtcblxuICAvLyBSZXR1cm4gYWxsIHRoZSBlbGVtZW50cyB0aGF0IHBhc3MgYSB0cnV0aCB0ZXN0LlxuICAvLyBBbGlhc2VkIGFzIGBzZWxlY3RgLlxuICBfLmZpbHRlciA9IF8uc2VsZWN0ID0gZnVuY3Rpb24ob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgXy5lYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgbGlzdCkpIHJlc3VsdHMucHVzaCh2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGFsbCB0aGUgZWxlbWVudHMgZm9yIHdoaWNoIGEgdHJ1dGggdGVzdCBmYWlscy5cbiAgXy5yZWplY3QgPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHJldHVybiBfLmZpbHRlcihvYmosIF8ubmVnYXRlKGNiKHByZWRpY2F0ZSkpLCBjb250ZXh0KTtcbiAgfTtcblxuICAvLyBEZXRlcm1pbmUgd2hldGhlciBhbGwgb2YgdGhlIGVsZW1lbnRzIG1hdGNoIGEgdHJ1dGggdGVzdC5cbiAgLy8gQWxpYXNlZCBhcyBgYWxsYC5cbiAgXy5ldmVyeSA9IF8uYWxsID0gZnVuY3Rpb24ob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICBwcmVkaWNhdGUgPSBjYihwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIHZhciBrZXlzID0gIWlzQXJyYXlMaWtlKG9iaikgJiYgXy5rZXlzKG9iaiksXG4gICAgICAgIGxlbmd0aCA9IChrZXlzIHx8IG9iaikubGVuZ3RoO1xuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHZhciBjdXJyZW50S2V5ID0ga2V5cyA/IGtleXNbaW5kZXhdIDogaW5kZXg7XG4gICAgICBpZiAoIXByZWRpY2F0ZShvYmpbY3VycmVudEtleV0sIGN1cnJlbnRLZXksIG9iaikpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLy8gRGV0ZXJtaW5lIGlmIGF0IGxlYXN0IG9uZSBlbGVtZW50IGluIHRoZSBvYmplY3QgbWF0Y2hlcyBhIHRydXRoIHRlc3QuXG4gIC8vIEFsaWFzZWQgYXMgYGFueWAuXG4gIF8uc29tZSA9IF8uYW55ID0gZnVuY3Rpb24ob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICBwcmVkaWNhdGUgPSBjYihwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIHZhciBrZXlzID0gIWlzQXJyYXlMaWtlKG9iaikgJiYgXy5rZXlzKG9iaiksXG4gICAgICAgIGxlbmd0aCA9IChrZXlzIHx8IG9iaikubGVuZ3RoO1xuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHZhciBjdXJyZW50S2V5ID0ga2V5cyA/IGtleXNbaW5kZXhdIDogaW5kZXg7XG4gICAgICBpZiAocHJlZGljYXRlKG9ialtjdXJyZW50S2V5XSwgY3VycmVudEtleSwgb2JqKSkgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvLyBEZXRlcm1pbmUgaWYgdGhlIGFycmF5IG9yIG9iamVjdCBjb250YWlucyBhIGdpdmVuIGl0ZW0gKHVzaW5nIGA9PT1gKS5cbiAgLy8gQWxpYXNlZCBhcyBgaW5jbHVkZXNgIGFuZCBgaW5jbHVkZWAuXG4gIF8uY29udGFpbnMgPSBfLmluY2x1ZGVzID0gXy5pbmNsdWRlID0gZnVuY3Rpb24ob2JqLCBpdGVtLCBmcm9tSW5kZXgsIGd1YXJkKSB7XG4gICAgaWYgKCFpc0FycmF5TGlrZShvYmopKSBvYmogPSBfLnZhbHVlcyhvYmopO1xuICAgIGlmICh0eXBlb2YgZnJvbUluZGV4ICE9ICdudW1iZXInIHx8IGd1YXJkKSBmcm9tSW5kZXggPSAwO1xuICAgIHJldHVybiBfLmluZGV4T2Yob2JqLCBpdGVtLCBmcm9tSW5kZXgpID49IDA7XG4gIH07XG5cbiAgLy8gSW52b2tlIGEgbWV0aG9kICh3aXRoIGFyZ3VtZW50cykgb24gZXZlcnkgaXRlbSBpbiBhIGNvbGxlY3Rpb24uXG4gIF8uaW52b2tlID0gZnVuY3Rpb24ob2JqLCBtZXRob2QpIHtcbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICB2YXIgaXNGdW5jID0gXy5pc0Z1bmN0aW9uKG1ldGhvZCk7XG4gICAgcmV0dXJuIF8ubWFwKG9iaiwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHZhciBmdW5jID0gaXNGdW5jID8gbWV0aG9kIDogdmFsdWVbbWV0aG9kXTtcbiAgICAgIHJldHVybiBmdW5jID09IG51bGwgPyBmdW5jIDogZnVuYy5hcHBseSh2YWx1ZSwgYXJncyk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gQ29udmVuaWVuY2UgdmVyc2lvbiBvZiBhIGNvbW1vbiB1c2UgY2FzZSBvZiBgbWFwYDogZmV0Y2hpbmcgYSBwcm9wZXJ0eS5cbiAgXy5wbHVjayA9IGZ1bmN0aW9uKG9iaiwga2V5KSB7XG4gICAgcmV0dXJuIF8ubWFwKG9iaiwgXy5wcm9wZXJ0eShrZXkpKTtcbiAgfTtcblxuICAvLyBDb252ZW5pZW5jZSB2ZXJzaW9uIG9mIGEgY29tbW9uIHVzZSBjYXNlIG9mIGBmaWx0ZXJgOiBzZWxlY3Rpbmcgb25seSBvYmplY3RzXG4gIC8vIGNvbnRhaW5pbmcgc3BlY2lmaWMgYGtleTp2YWx1ZWAgcGFpcnMuXG4gIF8ud2hlcmUgPSBmdW5jdGlvbihvYmosIGF0dHJzKSB7XG4gICAgcmV0dXJuIF8uZmlsdGVyKG9iaiwgXy5tYXRjaGVyKGF0dHJzKSk7XG4gIH07XG5cbiAgLy8gQ29udmVuaWVuY2UgdmVyc2lvbiBvZiBhIGNvbW1vbiB1c2UgY2FzZSBvZiBgZmluZGA6IGdldHRpbmcgdGhlIGZpcnN0IG9iamVjdFxuICAvLyBjb250YWluaW5nIHNwZWNpZmljIGBrZXk6dmFsdWVgIHBhaXJzLlxuICBfLmZpbmRXaGVyZSA9IGZ1bmN0aW9uKG9iaiwgYXR0cnMpIHtcbiAgICByZXR1cm4gXy5maW5kKG9iaiwgXy5tYXRjaGVyKGF0dHJzKSk7XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSBtYXhpbXVtIGVsZW1lbnQgKG9yIGVsZW1lbnQtYmFzZWQgY29tcHV0YXRpb24pLlxuICBfLm1heCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICB2YXIgcmVzdWx0ID0gLUluZmluaXR5LCBsYXN0Q29tcHV0ZWQgPSAtSW5maW5pdHksXG4gICAgICAgIHZhbHVlLCBjb21wdXRlZDtcbiAgICBpZiAoaXRlcmF0ZWUgPT0gbnVsbCAmJiBvYmogIT0gbnVsbCkge1xuICAgICAgb2JqID0gaXNBcnJheUxpa2Uob2JqKSA/IG9iaiA6IF8udmFsdWVzKG9iaik7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gb2JqLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhbHVlID0gb2JqW2ldO1xuICAgICAgICBpZiAodmFsdWUgPiByZXN1bHQpIHtcbiAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICAgIF8uZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgICBjb21wdXRlZCA9IGl0ZXJhdGVlKHZhbHVlLCBpbmRleCwgbGlzdCk7XG4gICAgICAgIGlmIChjb21wdXRlZCA+IGxhc3RDb21wdXRlZCB8fCBjb21wdXRlZCA9PT0gLUluZmluaXR5ICYmIHJlc3VsdCA9PT0gLUluZmluaXR5KSB7XG4gICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgbGFzdENvbXB1dGVkID0gY29tcHV0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgbWluaW11bSBlbGVtZW50IChvciBlbGVtZW50LWJhc2VkIGNvbXB1dGF0aW9uKS5cbiAgXy5taW4gPSBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgdmFyIHJlc3VsdCA9IEluZmluaXR5LCBsYXN0Q29tcHV0ZWQgPSBJbmZpbml0eSxcbiAgICAgICAgdmFsdWUsIGNvbXB1dGVkO1xuICAgIGlmIChpdGVyYXRlZSA9PSBudWxsICYmIG9iaiAhPSBudWxsKSB7XG4gICAgICBvYmogPSBpc0FycmF5TGlrZShvYmopID8gb2JqIDogXy52YWx1ZXMob2JqKTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBvYmoubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFsdWUgPSBvYmpbaV07XG4gICAgICAgIGlmICh2YWx1ZSA8IHJlc3VsdCkge1xuICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgICAgXy5lYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUodmFsdWUsIGluZGV4LCBsaXN0KTtcbiAgICAgICAgaWYgKGNvbXB1dGVkIDwgbGFzdENvbXB1dGVkIHx8IGNvbXB1dGVkID09PSBJbmZpbml0eSAmJiByZXN1bHQgPT09IEluZmluaXR5KSB7XG4gICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgbGFzdENvbXB1dGVkID0gY29tcHV0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFNodWZmbGUgYSBjb2xsZWN0aW9uLCB1c2luZyB0aGUgbW9kZXJuIHZlcnNpb24gb2YgdGhlXG4gIC8vIFtGaXNoZXItWWF0ZXMgc2h1ZmZsZV0oaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9GaXNoZXLigJNZYXRlc19zaHVmZmxlKS5cbiAgXy5zaHVmZmxlID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIHNldCA9IGlzQXJyYXlMaWtlKG9iaikgPyBvYmogOiBfLnZhbHVlcyhvYmopO1xuICAgIHZhciBsZW5ndGggPSBzZXQubGVuZ3RoO1xuICAgIHZhciBzaHVmZmxlZCA9IEFycmF5KGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwLCByYW5kOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgcmFuZCA9IF8ucmFuZG9tKDAsIGluZGV4KTtcbiAgICAgIGlmIChyYW5kICE9PSBpbmRleCkgc2h1ZmZsZWRbaW5kZXhdID0gc2h1ZmZsZWRbcmFuZF07XG4gICAgICBzaHVmZmxlZFtyYW5kXSA9IHNldFtpbmRleF07XG4gICAgfVxuICAgIHJldHVybiBzaHVmZmxlZDtcbiAgfTtcblxuICAvLyBTYW1wbGUgKipuKiogcmFuZG9tIHZhbHVlcyBmcm9tIGEgY29sbGVjdGlvbi5cbiAgLy8gSWYgKipuKiogaXMgbm90IHNwZWNpZmllZCwgcmV0dXJucyBhIHNpbmdsZSByYW5kb20gZWxlbWVudC5cbiAgLy8gVGhlIGludGVybmFsIGBndWFyZGAgYXJndW1lbnQgYWxsb3dzIGl0IHRvIHdvcmsgd2l0aCBgbWFwYC5cbiAgXy5zYW1wbGUgPSBmdW5jdGlvbihvYmosIG4sIGd1YXJkKSB7XG4gICAgaWYgKG4gPT0gbnVsbCB8fCBndWFyZCkge1xuICAgICAgaWYgKCFpc0FycmF5TGlrZShvYmopKSBvYmogPSBfLnZhbHVlcyhvYmopO1xuICAgICAgcmV0dXJuIG9ialtfLnJhbmRvbShvYmoubGVuZ3RoIC0gMSldO1xuICAgIH1cbiAgICByZXR1cm4gXy5zaHVmZmxlKG9iaikuc2xpY2UoMCwgTWF0aC5tYXgoMCwgbikpO1xuICB9O1xuXG4gIC8vIFNvcnQgdGhlIG9iamVjdCdzIHZhbHVlcyBieSBhIGNyaXRlcmlvbiBwcm9kdWNlZCBieSBhbiBpdGVyYXRlZS5cbiAgXy5zb3J0QnkgPSBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgcmV0dXJuIF8ucGx1Y2soXy5tYXAob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICBjcml0ZXJpYTogaXRlcmF0ZWUodmFsdWUsIGluZGV4LCBsaXN0KVxuICAgICAgfTtcbiAgICB9KS5zb3J0KGZ1bmN0aW9uKGxlZnQsIHJpZ2h0KSB7XG4gICAgICB2YXIgYSA9IGxlZnQuY3JpdGVyaWE7XG4gICAgICB2YXIgYiA9IHJpZ2h0LmNyaXRlcmlhO1xuICAgICAgaWYgKGEgIT09IGIpIHtcbiAgICAgICAgaWYgKGEgPiBiIHx8IGEgPT09IHZvaWQgMCkgcmV0dXJuIDE7XG4gICAgICAgIGlmIChhIDwgYiB8fCBiID09PSB2b2lkIDApIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsZWZ0LmluZGV4IC0gcmlnaHQuaW5kZXg7XG4gICAgfSksICd2YWx1ZScpO1xuICB9O1xuXG4gIC8vIEFuIGludGVybmFsIGZ1bmN0aW9uIHVzZWQgZm9yIGFnZ3JlZ2F0ZSBcImdyb3VwIGJ5XCIgb3BlcmF0aW9ucy5cbiAgdmFyIGdyb3VwID0gZnVuY3Rpb24oYmVoYXZpb3IpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgICBfLmVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGtleSA9IGl0ZXJhdGVlKHZhbHVlLCBpbmRleCwgb2JqKTtcbiAgICAgICAgYmVoYXZpb3IocmVzdWx0LCB2YWx1ZSwga2V5KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9O1xuXG4gIC8vIEdyb3VwcyB0aGUgb2JqZWN0J3MgdmFsdWVzIGJ5IGEgY3JpdGVyaW9uLiBQYXNzIGVpdGhlciBhIHN0cmluZyBhdHRyaWJ1dGVcbiAgLy8gdG8gZ3JvdXAgYnksIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBjcml0ZXJpb24uXG4gIF8uZ3JvdXBCeSA9IGdyb3VwKGZ1bmN0aW9uKHJlc3VsdCwgdmFsdWUsIGtleSkge1xuICAgIGlmIChfLmhhcyhyZXN1bHQsIGtleSkpIHJlc3VsdFtrZXldLnB1c2godmFsdWUpOyBlbHNlIHJlc3VsdFtrZXldID0gW3ZhbHVlXTtcbiAgfSk7XG5cbiAgLy8gSW5kZXhlcyB0aGUgb2JqZWN0J3MgdmFsdWVzIGJ5IGEgY3JpdGVyaW9uLCBzaW1pbGFyIHRvIGBncm91cEJ5YCwgYnV0IGZvclxuICAvLyB3aGVuIHlvdSBrbm93IHRoYXQgeW91ciBpbmRleCB2YWx1ZXMgd2lsbCBiZSB1bmlxdWUuXG4gIF8uaW5kZXhCeSA9IGdyb3VwKGZ1bmN0aW9uKHJlc3VsdCwgdmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gIH0pO1xuXG4gIC8vIENvdW50cyBpbnN0YW5jZXMgb2YgYW4gb2JqZWN0IHRoYXQgZ3JvdXAgYnkgYSBjZXJ0YWluIGNyaXRlcmlvbi4gUGFzc1xuICAvLyBlaXRoZXIgYSBzdHJpbmcgYXR0cmlidXRlIHRvIGNvdW50IGJ5LCBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGVcbiAgLy8gY3JpdGVyaW9uLlxuICBfLmNvdW50QnkgPSBncm91cChmdW5jdGlvbihyZXN1bHQsIHZhbHVlLCBrZXkpIHtcbiAgICBpZiAoXy5oYXMocmVzdWx0LCBrZXkpKSByZXN1bHRba2V5XSsrOyBlbHNlIHJlc3VsdFtrZXldID0gMTtcbiAgfSk7XG5cbiAgLy8gU2FmZWx5IGNyZWF0ZSBhIHJlYWwsIGxpdmUgYXJyYXkgZnJvbSBhbnl0aGluZyBpdGVyYWJsZS5cbiAgXy50b0FycmF5ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKCFvYmopIHJldHVybiBbXTtcbiAgICBpZiAoXy5pc0FycmF5KG9iaikpIHJldHVybiBzbGljZS5jYWxsKG9iaik7XG4gICAgaWYgKGlzQXJyYXlMaWtlKG9iaikpIHJldHVybiBfLm1hcChvYmosIF8uaWRlbnRpdHkpO1xuICAgIHJldHVybiBfLnZhbHVlcyhvYmopO1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIGFuIG9iamVjdC5cbiAgXy5zaXplID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gMDtcbiAgICByZXR1cm4gaXNBcnJheUxpa2Uob2JqKSA/IG9iai5sZW5ndGggOiBfLmtleXMob2JqKS5sZW5ndGg7XG4gIH07XG5cbiAgLy8gU3BsaXQgYSBjb2xsZWN0aW9uIGludG8gdHdvIGFycmF5czogb25lIHdob3NlIGVsZW1lbnRzIGFsbCBzYXRpc2Z5IHRoZSBnaXZlblxuICAvLyBwcmVkaWNhdGUsIGFuZCBvbmUgd2hvc2UgZWxlbWVudHMgYWxsIGRvIG5vdCBzYXRpc2Z5IHRoZSBwcmVkaWNhdGUuXG4gIF8ucGFydGl0aW9uID0gZnVuY3Rpb24ob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICBwcmVkaWNhdGUgPSBjYihwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIHZhciBwYXNzID0gW10sIGZhaWwgPSBbXTtcbiAgICBfLmVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwga2V5LCBvYmopIHtcbiAgICAgIChwcmVkaWNhdGUodmFsdWUsIGtleSwgb2JqKSA/IHBhc3MgOiBmYWlsKS5wdXNoKHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW3Bhc3MsIGZhaWxdO1xuICB9O1xuXG4gIC8vIEFycmF5IEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS1cblxuICAvLyBHZXQgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYW4gYXJyYXkuIFBhc3NpbmcgKipuKiogd2lsbCByZXR1cm4gdGhlIGZpcnN0IE5cbiAgLy8gdmFsdWVzIGluIHRoZSBhcnJheS4gQWxpYXNlZCBhcyBgaGVhZGAgYW5kIGB0YWtlYC4gVGhlICoqZ3VhcmQqKiBjaGVja1xuICAvLyBhbGxvd3MgaXQgdG8gd29yayB3aXRoIGBfLm1hcGAuXG4gIF8uZmlyc3QgPSBfLmhlYWQgPSBfLnRha2UgPSBmdW5jdGlvbihhcnJheSwgbiwgZ3VhcmQpIHtcbiAgICBpZiAoYXJyYXkgPT0gbnVsbCkgcmV0dXJuIHZvaWQgMDtcbiAgICBpZiAobiA9PSBudWxsIHx8IGd1YXJkKSByZXR1cm4gYXJyYXlbMF07XG4gICAgcmV0dXJuIF8uaW5pdGlhbChhcnJheSwgYXJyYXkubGVuZ3RoIC0gbik7XG4gIH07XG5cbiAgLy8gUmV0dXJucyBldmVyeXRoaW5nIGJ1dCB0aGUgbGFzdCBlbnRyeSBvZiB0aGUgYXJyYXkuIEVzcGVjaWFsbHkgdXNlZnVsIG9uXG4gIC8vIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBQYXNzaW5nICoqbioqIHdpbGwgcmV0dXJuIGFsbCB0aGUgdmFsdWVzIGluXG4gIC8vIHRoZSBhcnJheSwgZXhjbHVkaW5nIHRoZSBsYXN0IE4uXG4gIF8uaW5pdGlhbCA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIHJldHVybiBzbGljZS5jYWxsKGFycmF5LCAwLCBNYXRoLm1heCgwLCBhcnJheS5sZW5ndGggLSAobiA9PSBudWxsIHx8IGd1YXJkID8gMSA6IG4pKSk7XG4gIH07XG5cbiAgLy8gR2V0IHRoZSBsYXN0IGVsZW1lbnQgb2YgYW4gYXJyYXkuIFBhc3NpbmcgKipuKiogd2lsbCByZXR1cm4gdGhlIGxhc3QgTlxuICAvLyB2YWx1ZXMgaW4gdGhlIGFycmF5LlxuICBfLmxhc3QgPSBmdW5jdGlvbihhcnJheSwgbiwgZ3VhcmQpIHtcbiAgICBpZiAoYXJyYXkgPT0gbnVsbCkgcmV0dXJuIHZvaWQgMDtcbiAgICBpZiAobiA9PSBudWxsIHx8IGd1YXJkKSByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIF8ucmVzdChhcnJheSwgTWF0aC5tYXgoMCwgYXJyYXkubGVuZ3RoIC0gbikpO1xuICB9O1xuXG4gIC8vIFJldHVybnMgZXZlcnl0aGluZyBidXQgdGhlIGZpcnN0IGVudHJ5IG9mIHRoZSBhcnJheS4gQWxpYXNlZCBhcyBgdGFpbGAgYW5kIGBkcm9wYC5cbiAgLy8gRXNwZWNpYWxseSB1c2VmdWwgb24gdGhlIGFyZ3VtZW50cyBvYmplY3QuIFBhc3NpbmcgYW4gKipuKiogd2lsbCByZXR1cm5cbiAgLy8gdGhlIHJlc3QgTiB2YWx1ZXMgaW4gdGhlIGFycmF5LlxuICBfLnJlc3QgPSBfLnRhaWwgPSBfLmRyb3AgPSBmdW5jdGlvbihhcnJheSwgbiwgZ3VhcmQpIHtcbiAgICByZXR1cm4gc2xpY2UuY2FsbChhcnJheSwgbiA9PSBudWxsIHx8IGd1YXJkID8gMSA6IG4pO1xuICB9O1xuXG4gIC8vIFRyaW0gb3V0IGFsbCBmYWxzeSB2YWx1ZXMgZnJvbSBhbiBhcnJheS5cbiAgXy5jb21wYWN0ID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICByZXR1cm4gXy5maWx0ZXIoYXJyYXksIF8uaWRlbnRpdHkpO1xuICB9O1xuXG4gIC8vIEludGVybmFsIGltcGxlbWVudGF0aW9uIG9mIGEgcmVjdXJzaXZlIGBmbGF0dGVuYCBmdW5jdGlvbi5cbiAgdmFyIGZsYXR0ZW4gPSBmdW5jdGlvbihpbnB1dCwgc2hhbGxvdywgc3RyaWN0LCBzdGFydEluZGV4KSB7XG4gICAgdmFyIG91dHB1dCA9IFtdLCBpZHggPSAwO1xuICAgIGZvciAodmFyIGkgPSBzdGFydEluZGV4IHx8IDAsIGxlbmd0aCA9IGdldExlbmd0aChpbnB1dCk7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHZhbHVlID0gaW5wdXRbaV07XG4gICAgICBpZiAoaXNBcnJheUxpa2UodmFsdWUpICYmIChfLmlzQXJyYXkodmFsdWUpIHx8IF8uaXNBcmd1bWVudHModmFsdWUpKSkge1xuICAgICAgICAvL2ZsYXR0ZW4gY3VycmVudCBsZXZlbCBvZiBhcnJheSBvciBhcmd1bWVudHMgb2JqZWN0XG4gICAgICAgIGlmICghc2hhbGxvdykgdmFsdWUgPSBmbGF0dGVuKHZhbHVlLCBzaGFsbG93LCBzdHJpY3QpO1xuICAgICAgICB2YXIgaiA9IDAsIGxlbiA9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgb3V0cHV0Lmxlbmd0aCArPSBsZW47XG4gICAgICAgIHdoaWxlIChqIDwgbGVuKSB7XG4gICAgICAgICAgb3V0cHV0W2lkeCsrXSA9IHZhbHVlW2orK107XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIXN0cmljdCkge1xuICAgICAgICBvdXRwdXRbaWR4KytdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH07XG5cbiAgLy8gRmxhdHRlbiBvdXQgYW4gYXJyYXksIGVpdGhlciByZWN1cnNpdmVseSAoYnkgZGVmYXVsdCksIG9yIGp1c3Qgb25lIGxldmVsLlxuICBfLmZsYXR0ZW4gPSBmdW5jdGlvbihhcnJheSwgc2hhbGxvdykge1xuICAgIHJldHVybiBmbGF0dGVuKGFycmF5LCBzaGFsbG93LCBmYWxzZSk7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGEgdmVyc2lvbiBvZiB0aGUgYXJyYXkgdGhhdCBkb2VzIG5vdCBjb250YWluIHRoZSBzcGVjaWZpZWQgdmFsdWUocykuXG4gIF8ud2l0aG91dCA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgcmV0dXJuIF8uZGlmZmVyZW5jZShhcnJheSwgc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgfTtcblxuICAvLyBQcm9kdWNlIGEgZHVwbGljYXRlLWZyZWUgdmVyc2lvbiBvZiB0aGUgYXJyYXkuIElmIHRoZSBhcnJheSBoYXMgYWxyZWFkeVxuICAvLyBiZWVuIHNvcnRlZCwgeW91IGhhdmUgdGhlIG9wdGlvbiBvZiB1c2luZyBhIGZhc3RlciBhbGdvcml0aG0uXG4gIC8vIEFsaWFzZWQgYXMgYHVuaXF1ZWAuXG4gIF8udW5pcSA9IF8udW5pcXVlID0gZnVuY3Rpb24oYXJyYXksIGlzU29ydGVkLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIGlmICghXy5pc0Jvb2xlYW4oaXNTb3J0ZWQpKSB7XG4gICAgICBjb250ZXh0ID0gaXRlcmF0ZWU7XG4gICAgICBpdGVyYXRlZSA9IGlzU29ydGVkO1xuICAgICAgaXNTb3J0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGl0ZXJhdGVlICE9IG51bGwpIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgc2VlbiA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBnZXRMZW5ndGgoYXJyYXkpOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB2YWx1ZSA9IGFycmF5W2ldLFxuICAgICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUgPyBpdGVyYXRlZSh2YWx1ZSwgaSwgYXJyYXkpIDogdmFsdWU7XG4gICAgICBpZiAoaXNTb3J0ZWQpIHtcbiAgICAgICAgaWYgKCFpIHx8IHNlZW4gIT09IGNvbXB1dGVkKSByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgICAgIHNlZW4gPSBjb21wdXRlZDtcbiAgICAgIH0gZWxzZSBpZiAoaXRlcmF0ZWUpIHtcbiAgICAgICAgaWYgKCFfLmNvbnRhaW5zKHNlZW4sIGNvbXB1dGVkKSkge1xuICAgICAgICAgIHNlZW4ucHVzaChjb21wdXRlZCk7XG4gICAgICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFfLmNvbnRhaW5zKHJlc3VsdCwgdmFsdWUpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBQcm9kdWNlIGFuIGFycmF5IHRoYXQgY29udGFpbnMgdGhlIHVuaW9uOiBlYWNoIGRpc3RpbmN0IGVsZW1lbnQgZnJvbSBhbGwgb2ZcbiAgLy8gdGhlIHBhc3NlZC1pbiBhcnJheXMuXG4gIF8udW5pb24gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXy51bmlxKGZsYXR0ZW4oYXJndW1lbnRzLCB0cnVlLCB0cnVlKSk7XG4gIH07XG5cbiAgLy8gUHJvZHVjZSBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIGV2ZXJ5IGl0ZW0gc2hhcmVkIGJldHdlZW4gYWxsIHRoZVxuICAvLyBwYXNzZWQtaW4gYXJyYXlzLlxuICBfLmludGVyc2VjdGlvbiA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBhcmdzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gZ2V0TGVuZ3RoKGFycmF5KTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IGFycmF5W2ldO1xuICAgICAgaWYgKF8uY29udGFpbnMocmVzdWx0LCBpdGVtKSkgY29udGludWU7XG4gICAgICBmb3IgKHZhciBqID0gMTsgaiA8IGFyZ3NMZW5ndGg7IGorKykge1xuICAgICAgICBpZiAoIV8uY29udGFpbnMoYXJndW1lbnRzW2pdLCBpdGVtKSkgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAoaiA9PT0gYXJnc0xlbmd0aCkgcmVzdWx0LnB1c2goaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gVGFrZSB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIG9uZSBhcnJheSBhbmQgYSBudW1iZXIgb2Ygb3RoZXIgYXJyYXlzLlxuICAvLyBPbmx5IHRoZSBlbGVtZW50cyBwcmVzZW50IGluIGp1c3QgdGhlIGZpcnN0IGFycmF5IHdpbGwgcmVtYWluLlxuICBfLmRpZmZlcmVuY2UgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHZhciByZXN0ID0gZmxhdHRlbihhcmd1bWVudHMsIHRydWUsIHRydWUsIDEpO1xuICAgIHJldHVybiBfLmZpbHRlcihhcnJheSwgZnVuY3Rpb24odmFsdWUpe1xuICAgICAgcmV0dXJuICFfLmNvbnRhaW5zKHJlc3QsIHZhbHVlKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBaaXAgdG9nZXRoZXIgbXVsdGlwbGUgbGlzdHMgaW50byBhIHNpbmdsZSBhcnJheSAtLSBlbGVtZW50cyB0aGF0IHNoYXJlXG4gIC8vIGFuIGluZGV4IGdvIHRvZ2V0aGVyLlxuICBfLnppcCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBfLnVuemlwKGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgLy8gQ29tcGxlbWVudCBvZiBfLnppcC4gVW56aXAgYWNjZXB0cyBhbiBhcnJheSBvZiBhcnJheXMgYW5kIGdyb3Vwc1xuICAvLyBlYWNoIGFycmF5J3MgZWxlbWVudHMgb24gc2hhcmVkIGluZGljZXNcbiAgXy51bnppcCA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgdmFyIGxlbmd0aCA9IGFycmF5ICYmIF8ubWF4KGFycmF5LCBnZXRMZW5ndGgpLmxlbmd0aCB8fCAwO1xuICAgIHZhciByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgcmVzdWx0W2luZGV4XSA9IF8ucGx1Y2soYXJyYXksIGluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBDb252ZXJ0cyBsaXN0cyBpbnRvIG9iamVjdHMuIFBhc3MgZWl0aGVyIGEgc2luZ2xlIGFycmF5IG9mIGBba2V5LCB2YWx1ZV1gXG4gIC8vIHBhaXJzLCBvciB0d28gcGFyYWxsZWwgYXJyYXlzIG9mIHRoZSBzYW1lIGxlbmd0aCAtLSBvbmUgb2Yga2V5cywgYW5kIG9uZSBvZlxuICAvLyB0aGUgY29ycmVzcG9uZGluZyB2YWx1ZXMuXG4gIF8ub2JqZWN0ID0gZnVuY3Rpb24obGlzdCwgdmFsdWVzKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBnZXRMZW5ndGgobGlzdCk7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHZhbHVlcykge1xuICAgICAgICByZXN1bHRbbGlzdFtpXV0gPSB2YWx1ZXNbaV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRbbGlzdFtpXVswXV0gPSBsaXN0W2ldWzFdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIEdlbmVyYXRvciBmdW5jdGlvbiB0byBjcmVhdGUgdGhlIGZpbmRJbmRleCBhbmQgZmluZExhc3RJbmRleCBmdW5jdGlvbnNcbiAgZnVuY3Rpb24gY3JlYXRlUHJlZGljYXRlSW5kZXhGaW5kZXIoZGlyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGFycmF5LCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICAgIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgICB2YXIgbGVuZ3RoID0gZ2V0TGVuZ3RoKGFycmF5KTtcbiAgICAgIHZhciBpbmRleCA9IGRpciA+IDAgPyAwIDogbGVuZ3RoIC0gMTtcbiAgICAgIGZvciAoOyBpbmRleCA+PSAwICYmIGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSBkaXIpIHtcbiAgICAgICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHJldHVybiBpbmRleDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAtMTtcbiAgICB9O1xuICB9XG5cbiAgLy8gUmV0dXJucyB0aGUgZmlyc3QgaW5kZXggb24gYW4gYXJyYXktbGlrZSB0aGF0IHBhc3NlcyBhIHByZWRpY2F0ZSB0ZXN0XG4gIF8uZmluZEluZGV4ID0gY3JlYXRlUHJlZGljYXRlSW5kZXhGaW5kZXIoMSk7XG4gIF8uZmluZExhc3RJbmRleCA9IGNyZWF0ZVByZWRpY2F0ZUluZGV4RmluZGVyKC0xKTtcblxuICAvLyBVc2UgYSBjb21wYXJhdG9yIGZ1bmN0aW9uIHRvIGZpZ3VyZSBvdXQgdGhlIHNtYWxsZXN0IGluZGV4IGF0IHdoaWNoXG4gIC8vIGFuIG9iamVjdCBzaG91bGQgYmUgaW5zZXJ0ZWQgc28gYXMgdG8gbWFpbnRhaW4gb3JkZXIuIFVzZXMgYmluYXJ5IHNlYXJjaC5cbiAgXy5zb3J0ZWRJbmRleCA9IGZ1bmN0aW9uKGFycmF5LCBvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCwgMSk7XG4gICAgdmFyIHZhbHVlID0gaXRlcmF0ZWUob2JqKTtcbiAgICB2YXIgbG93ID0gMCwgaGlnaCA9IGdldExlbmd0aChhcnJheSk7XG4gICAgd2hpbGUgKGxvdyA8IGhpZ2gpIHtcbiAgICAgIHZhciBtaWQgPSBNYXRoLmZsb29yKChsb3cgKyBoaWdoKSAvIDIpO1xuICAgICAgaWYgKGl0ZXJhdGVlKGFycmF5W21pZF0pIDwgdmFsdWUpIGxvdyA9IG1pZCArIDE7IGVsc2UgaGlnaCA9IG1pZDtcbiAgICB9XG4gICAgcmV0dXJuIGxvdztcbiAgfTtcblxuICAvLyBHZW5lcmF0b3IgZnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBpbmRleE9mIGFuZCBsYXN0SW5kZXhPZiBmdW5jdGlvbnNcbiAgZnVuY3Rpb24gY3JlYXRlSW5kZXhGaW5kZXIoZGlyLCBwcmVkaWNhdGVGaW5kLCBzb3J0ZWRJbmRleCkge1xuICAgIHJldHVybiBmdW5jdGlvbihhcnJheSwgaXRlbSwgaWR4KSB7XG4gICAgICB2YXIgaSA9IDAsIGxlbmd0aCA9IGdldExlbmd0aChhcnJheSk7XG4gICAgICBpZiAodHlwZW9mIGlkeCA9PSAnbnVtYmVyJykge1xuICAgICAgICBpZiAoZGlyID4gMCkge1xuICAgICAgICAgICAgaSA9IGlkeCA+PSAwID8gaWR4IDogTWF0aC5tYXgoaWR4ICsgbGVuZ3RoLCBpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IGlkeCA+PSAwID8gTWF0aC5taW4oaWR4ICsgMSwgbGVuZ3RoKSA6IGlkeCArIGxlbmd0aCArIDE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc29ydGVkSW5kZXggJiYgaWR4ICYmIGxlbmd0aCkge1xuICAgICAgICBpZHggPSBzb3J0ZWRJbmRleChhcnJheSwgaXRlbSk7XG4gICAgICAgIHJldHVybiBhcnJheVtpZHhdID09PSBpdGVtID8gaWR4IDogLTE7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbSAhPT0gaXRlbSkge1xuICAgICAgICBpZHggPSBwcmVkaWNhdGVGaW5kKHNsaWNlLmNhbGwoYXJyYXksIGksIGxlbmd0aCksIF8uaXNOYU4pO1xuICAgICAgICByZXR1cm4gaWR4ID49IDAgPyBpZHggKyBpIDogLTE7XG4gICAgICB9XG4gICAgICBmb3IgKGlkeCA9IGRpciA+IDAgPyBpIDogbGVuZ3RoIC0gMTsgaWR4ID49IDAgJiYgaWR4IDwgbGVuZ3RoOyBpZHggKz0gZGlyKSB7XG4gICAgICAgIGlmIChhcnJheVtpZHhdID09PSBpdGVtKSByZXR1cm4gaWR4O1xuICAgICAgfVxuICAgICAgcmV0dXJuIC0xO1xuICAgIH07XG4gIH1cblxuICAvLyBSZXR1cm4gdGhlIHBvc2l0aW9uIG9mIHRoZSBmaXJzdCBvY2N1cnJlbmNlIG9mIGFuIGl0ZW0gaW4gYW4gYXJyYXksXG4gIC8vIG9yIC0xIGlmIHRoZSBpdGVtIGlzIG5vdCBpbmNsdWRlZCBpbiB0aGUgYXJyYXkuXG4gIC8vIElmIHRoZSBhcnJheSBpcyBsYXJnZSBhbmQgYWxyZWFkeSBpbiBzb3J0IG9yZGVyLCBwYXNzIGB0cnVlYFxuICAvLyBmb3IgKippc1NvcnRlZCoqIHRvIHVzZSBiaW5hcnkgc2VhcmNoLlxuICBfLmluZGV4T2YgPSBjcmVhdGVJbmRleEZpbmRlcigxLCBfLmZpbmRJbmRleCwgXy5zb3J0ZWRJbmRleCk7XG4gIF8ubGFzdEluZGV4T2YgPSBjcmVhdGVJbmRleEZpbmRlcigtMSwgXy5maW5kTGFzdEluZGV4KTtcblxuICAvLyBHZW5lcmF0ZSBhbiBpbnRlZ2VyIEFycmF5IGNvbnRhaW5pbmcgYW4gYXJpdGhtZXRpYyBwcm9ncmVzc2lvbi4gQSBwb3J0IG9mXG4gIC8vIHRoZSBuYXRpdmUgUHl0aG9uIGByYW5nZSgpYCBmdW5jdGlvbi4gU2VlXG4gIC8vIFt0aGUgUHl0aG9uIGRvY3VtZW50YXRpb25dKGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS9mdW5jdGlvbnMuaHRtbCNyYW5nZSkuXG4gIF8ucmFuZ2UgPSBmdW5jdGlvbihzdGFydCwgc3RvcCwgc3RlcCkge1xuICAgIGlmIChzdG9wID09IG51bGwpIHtcbiAgICAgIHN0b3AgPSBzdGFydCB8fCAwO1xuICAgICAgc3RhcnQgPSAwO1xuICAgIH1cbiAgICBzdGVwID0gc3RlcCB8fCAxO1xuXG4gICAgdmFyIGxlbmd0aCA9IE1hdGgubWF4KE1hdGguY2VpbCgoc3RvcCAtIHN0YXJ0KSAvIHN0ZXApLCAwKTtcbiAgICB2YXIgcmFuZ2UgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgbGVuZ3RoOyBpZHgrKywgc3RhcnQgKz0gc3RlcCkge1xuICAgICAgcmFuZ2VbaWR4XSA9IHN0YXJ0O1xuICAgIH1cblxuICAgIHJldHVybiByYW5nZTtcbiAgfTtcblxuICAvLyBGdW5jdGlvbiAoYWhlbSkgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIERldGVybWluZXMgd2hldGhlciB0byBleGVjdXRlIGEgZnVuY3Rpb24gYXMgYSBjb25zdHJ1Y3RvclxuICAvLyBvciBhIG5vcm1hbCBmdW5jdGlvbiB3aXRoIHRoZSBwcm92aWRlZCBhcmd1bWVudHNcbiAgdmFyIGV4ZWN1dGVCb3VuZCA9IGZ1bmN0aW9uKHNvdXJjZUZ1bmMsIGJvdW5kRnVuYywgY29udGV4dCwgY2FsbGluZ0NvbnRleHQsIGFyZ3MpIHtcbiAgICBpZiAoIShjYWxsaW5nQ29udGV4dCBpbnN0YW5jZW9mIGJvdW5kRnVuYykpIHJldHVybiBzb3VyY2VGdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIHZhciBzZWxmID0gYmFzZUNyZWF0ZShzb3VyY2VGdW5jLnByb3RvdHlwZSk7XG4gICAgdmFyIHJlc3VsdCA9IHNvdXJjZUZ1bmMuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgaWYgKF8uaXNPYmplY3QocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICByZXR1cm4gc2VsZjtcbiAgfTtcblxuICAvLyBDcmVhdGUgYSBmdW5jdGlvbiBib3VuZCB0byBhIGdpdmVuIG9iamVjdCAoYXNzaWduaW5nIGB0aGlzYCwgYW5kIGFyZ3VtZW50cyxcbiAgLy8gb3B0aW9uYWxseSkuIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBGdW5jdGlvbi5iaW5kYCBpZlxuICAvLyBhdmFpbGFibGUuXG4gIF8uYmluZCA9IGZ1bmN0aW9uKGZ1bmMsIGNvbnRleHQpIHtcbiAgICBpZiAobmF0aXZlQmluZCAmJiBmdW5jLmJpbmQgPT09IG5hdGl2ZUJpbmQpIHJldHVybiBuYXRpdmVCaW5kLmFwcGx5KGZ1bmMsIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgaWYgKCFfLmlzRnVuY3Rpb24oZnVuYykpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JpbmQgbXVzdCBiZSBjYWxsZWQgb24gYSBmdW5jdGlvbicpO1xuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIHZhciBib3VuZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGV4ZWN1dGVCb3VuZChmdW5jLCBib3VuZCwgY29udGV4dCwgdGhpcywgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgfTtcbiAgICByZXR1cm4gYm91bmQ7XG4gIH07XG5cbiAgLy8gUGFydGlhbGx5IGFwcGx5IGEgZnVuY3Rpb24gYnkgY3JlYXRpbmcgYSB2ZXJzaW9uIHRoYXQgaGFzIGhhZCBzb21lIG9mIGl0c1xuICAvLyBhcmd1bWVudHMgcHJlLWZpbGxlZCwgd2l0aG91dCBjaGFuZ2luZyBpdHMgZHluYW1pYyBgdGhpc2AgY29udGV4dC4gXyBhY3RzXG4gIC8vIGFzIGEgcGxhY2Vob2xkZXIsIGFsbG93aW5nIGFueSBjb21iaW5hdGlvbiBvZiBhcmd1bWVudHMgdG8gYmUgcHJlLWZpbGxlZC5cbiAgXy5wYXJ0aWFsID0gZnVuY3Rpb24oZnVuYykge1xuICAgIHZhciBib3VuZEFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgdmFyIGJvdW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcG9zaXRpb24gPSAwLCBsZW5ndGggPSBib3VuZEFyZ3MubGVuZ3RoO1xuICAgICAgdmFyIGFyZ3MgPSBBcnJheShsZW5ndGgpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBhcmdzW2ldID0gYm91bmRBcmdzW2ldID09PSBfID8gYXJndW1lbnRzW3Bvc2l0aW9uKytdIDogYm91bmRBcmdzW2ldO1xuICAgICAgfVxuICAgICAgd2hpbGUgKHBvc2l0aW9uIDwgYXJndW1lbnRzLmxlbmd0aCkgYXJncy5wdXNoKGFyZ3VtZW50c1twb3NpdGlvbisrXSk7XG4gICAgICByZXR1cm4gZXhlY3V0ZUJvdW5kKGZ1bmMsIGJvdW5kLCB0aGlzLCB0aGlzLCBhcmdzKTtcbiAgICB9O1xuICAgIHJldHVybiBib3VuZDtcbiAgfTtcblxuICAvLyBCaW5kIGEgbnVtYmVyIG9mIGFuIG9iamVjdCdzIG1ldGhvZHMgdG8gdGhhdCBvYmplY3QuIFJlbWFpbmluZyBhcmd1bWVudHNcbiAgLy8gYXJlIHRoZSBtZXRob2QgbmFtZXMgdG8gYmUgYm91bmQuIFVzZWZ1bCBmb3IgZW5zdXJpbmcgdGhhdCBhbGwgY2FsbGJhY2tzXG4gIC8vIGRlZmluZWQgb24gYW4gb2JqZWN0IGJlbG9uZyB0byBpdC5cbiAgXy5iaW5kQWxsID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGksIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGgsIGtleTtcbiAgICBpZiAobGVuZ3RoIDw9IDEpIHRocm93IG5ldyBFcnJvcignYmluZEFsbCBtdXN0IGJlIHBhc3NlZCBmdW5jdGlvbiBuYW1lcycpO1xuICAgIGZvciAoaSA9IDE7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gYXJndW1lbnRzW2ldO1xuICAgICAgb2JqW2tleV0gPSBfLmJpbmQob2JqW2tleV0sIG9iaik7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgLy8gTWVtb2l6ZSBhbiBleHBlbnNpdmUgZnVuY3Rpb24gYnkgc3RvcmluZyBpdHMgcmVzdWx0cy5cbiAgXy5tZW1vaXplID0gZnVuY3Rpb24oZnVuYywgaGFzaGVyKSB7XG4gICAgdmFyIG1lbW9pemUgPSBmdW5jdGlvbihrZXkpIHtcbiAgICAgIHZhciBjYWNoZSA9IG1lbW9pemUuY2FjaGU7XG4gICAgICB2YXIgYWRkcmVzcyA9ICcnICsgKGhhc2hlciA/IGhhc2hlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIDoga2V5KTtcbiAgICAgIGlmICghXy5oYXMoY2FjaGUsIGFkZHJlc3MpKSBjYWNoZVthZGRyZXNzXSA9IGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIHJldHVybiBjYWNoZVthZGRyZXNzXTtcbiAgICB9O1xuICAgIG1lbW9pemUuY2FjaGUgPSB7fTtcbiAgICByZXR1cm4gbWVtb2l6ZTtcbiAgfTtcblxuICAvLyBEZWxheXMgYSBmdW5jdGlvbiBmb3IgdGhlIGdpdmVuIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIGFuZCB0aGVuIGNhbGxzXG4gIC8vIGl0IHdpdGggdGhlIGFyZ3VtZW50cyBzdXBwbGllZC5cbiAgXy5kZWxheSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQpIHtcbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfSwgd2FpdCk7XG4gIH07XG5cbiAgLy8gRGVmZXJzIGEgZnVuY3Rpb24sIHNjaGVkdWxpbmcgaXQgdG8gcnVuIGFmdGVyIHRoZSBjdXJyZW50IGNhbGwgc3RhY2sgaGFzXG4gIC8vIGNsZWFyZWQuXG4gIF8uZGVmZXIgPSBfLnBhcnRpYWwoXy5kZWxheSwgXywgMSk7XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCB3aGVuIGludm9rZWQsIHdpbGwgb25seSBiZSB0cmlnZ2VyZWQgYXQgbW9zdCBvbmNlXG4gIC8vIGR1cmluZyBhIGdpdmVuIHdpbmRvdyBvZiB0aW1lLiBOb3JtYWxseSwgdGhlIHRocm90dGxlZCBmdW5jdGlvbiB3aWxsIHJ1blxuICAvLyBhcyBtdWNoIGFzIGl0IGNhbiwgd2l0aG91dCBldmVyIGdvaW5nIG1vcmUgdGhhbiBvbmNlIHBlciBgd2FpdGAgZHVyYXRpb247XG4gIC8vIGJ1dCBpZiB5b3UnZCBsaWtlIHRvIGRpc2FibGUgdGhlIGV4ZWN1dGlvbiBvbiB0aGUgbGVhZGluZyBlZGdlLCBwYXNzXG4gIC8vIGB7bGVhZGluZzogZmFsc2V9YC4gVG8gZGlzYWJsZSBleGVjdXRpb24gb24gdGhlIHRyYWlsaW5nIGVkZ2UsIGRpdHRvLlxuICBfLnRocm90dGxlID0gZnVuY3Rpb24oZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICAgIHZhciBjb250ZXh0LCBhcmdzLCByZXN1bHQ7XG4gICAgdmFyIHRpbWVvdXQgPSBudWxsO1xuICAgIHZhciBwcmV2aW91cyA9IDA7XG4gICAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XG4gICAgdmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICBwcmV2aW91cyA9IG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UgPyAwIDogXy5ub3coKTtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIGlmICghdGltZW91dCkgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG5vdyA9IF8ubm93KCk7XG4gICAgICBpZiAoIXByZXZpb3VzICYmIG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UpIHByZXZpb3VzID0gbm93O1xuICAgICAgdmFyIHJlbWFpbmluZyA9IHdhaXQgLSAobm93IC0gcHJldmlvdXMpO1xuICAgICAgY29udGV4dCA9IHRoaXM7XG4gICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgaWYgKHJlbWFpbmluZyA8PSAwIHx8IHJlbWFpbmluZyA+IHdhaXQpIHtcbiAgICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcHJldmlvdXMgPSBub3c7XG4gICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIGlmICghdGltZW91dCkgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgICAgfSBlbHNlIGlmICghdGltZW91dCAmJiBvcHRpb25zLnRyYWlsaW5nICE9PSBmYWxzZSkge1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgcmVtYWluaW5nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIGFzIGxvbmcgYXMgaXQgY29udGludWVzIHRvIGJlIGludm9rZWQsIHdpbGwgbm90XG4gIC8vIGJlIHRyaWdnZXJlZC4gVGhlIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGl0IHN0b3BzIGJlaW5nIGNhbGxlZCBmb3JcbiAgLy8gTiBtaWxsaXNlY29uZHMuIElmIGBpbW1lZGlhdGVgIGlzIHBhc3NlZCwgdHJpZ2dlciB0aGUgZnVuY3Rpb24gb24gdGhlXG4gIC8vIGxlYWRpbmcgZWRnZSwgaW5zdGVhZCBvZiB0aGUgdHJhaWxpbmcuXG4gIF8uZGVib3VuY2UgPSBmdW5jdGlvbihmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgICB2YXIgdGltZW91dCwgYXJncywgY29udGV4dCwgdGltZXN0YW1wLCByZXN1bHQ7XG5cbiAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBsYXN0ID0gXy5ub3coKSAtIHRpbWVzdGFtcDtcblxuICAgICAgaWYgKGxhc3QgPCB3YWl0ICYmIGxhc3QgPj0gMCkge1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCAtIGxhc3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgIGlmICghaW1tZWRpYXRlKSB7XG4gICAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICBpZiAoIXRpbWVvdXQpIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBjb250ZXh0ID0gdGhpcztcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICB0aW1lc3RhbXAgPSBfLm5vdygpO1xuICAgICAgdmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG4gICAgICBpZiAoIXRpbWVvdXQpIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICAgIGlmIChjYWxsTm93KSB7XG4gICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgdGhlIGZpcnN0IGZ1bmN0aW9uIHBhc3NlZCBhcyBhbiBhcmd1bWVudCB0byB0aGUgc2Vjb25kLFxuICAvLyBhbGxvd2luZyB5b3UgdG8gYWRqdXN0IGFyZ3VtZW50cywgcnVuIGNvZGUgYmVmb3JlIGFuZCBhZnRlciwgYW5kXG4gIC8vIGNvbmRpdGlvbmFsbHkgZXhlY3V0ZSB0aGUgb3JpZ2luYWwgZnVuY3Rpb24uXG4gIF8ud3JhcCA9IGZ1bmN0aW9uKGZ1bmMsIHdyYXBwZXIpIHtcbiAgICByZXR1cm4gXy5wYXJ0aWFsKHdyYXBwZXIsIGZ1bmMpO1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBuZWdhdGVkIHZlcnNpb24gb2YgdGhlIHBhc3NlZC1pbiBwcmVkaWNhdGUuXG4gIF8ubmVnYXRlID0gZnVuY3Rpb24ocHJlZGljYXRlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICFwcmVkaWNhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGlzIHRoZSBjb21wb3NpdGlvbiBvZiBhIGxpc3Qgb2YgZnVuY3Rpb25zLCBlYWNoXG4gIC8vIGNvbnN1bWluZyB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiB0aGF0IGZvbGxvd3MuXG4gIF8uY29tcG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgIHZhciBzdGFydCA9IGFyZ3MubGVuZ3RoIC0gMTtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaSA9IHN0YXJ0O1xuICAgICAgdmFyIHJlc3VsdCA9IGFyZ3Nbc3RhcnRdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB3aGlsZSAoaS0tKSByZXN1bHQgPSBhcmdzW2ldLmNhbGwodGhpcywgcmVzdWx0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIG9ubHkgYmUgZXhlY3V0ZWQgb24gYW5kIGFmdGVyIHRoZSBOdGggY2FsbC5cbiAgXy5hZnRlciA9IGZ1bmN0aW9uKHRpbWVzLCBmdW5jKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKC0tdGltZXMgPCAxKSB7XG4gICAgICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIG9ubHkgYmUgZXhlY3V0ZWQgdXAgdG8gKGJ1dCBub3QgaW5jbHVkaW5nKSB0aGUgTnRoIGNhbGwuXG4gIF8uYmVmb3JlID0gZnVuY3Rpb24odGltZXMsIGZ1bmMpIHtcbiAgICB2YXIgbWVtbztcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoLS10aW1lcyA+IDApIHtcbiAgICAgICAgbWVtbyA9IGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aW1lcyA8PSAxKSBmdW5jID0gbnVsbDtcbiAgICAgIHJldHVybiBtZW1vO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBhdCBtb3N0IG9uZSB0aW1lLCBubyBtYXR0ZXIgaG93XG4gIC8vIG9mdGVuIHlvdSBjYWxsIGl0LiBVc2VmdWwgZm9yIGxhenkgaW5pdGlhbGl6YXRpb24uXG4gIF8ub25jZSA9IF8ucGFydGlhbChfLmJlZm9yZSwgMik7XG5cbiAgLy8gT2JqZWN0IEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gS2V5cyBpbiBJRSA8IDkgdGhhdCB3b24ndCBiZSBpdGVyYXRlZCBieSBgZm9yIGtleSBpbiAuLi5gIGFuZCB0aHVzIG1pc3NlZC5cbiAgdmFyIGhhc0VudW1CdWcgPSAhe3RvU3RyaW5nOiBudWxsfS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgndG9TdHJpbmcnKTtcbiAgdmFyIG5vbkVudW1lcmFibGVQcm9wcyA9IFsndmFsdWVPZicsICdpc1Byb3RvdHlwZU9mJywgJ3RvU3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAncHJvcGVydHlJc0VudW1lcmFibGUnLCAnaGFzT3duUHJvcGVydHknLCAndG9Mb2NhbGVTdHJpbmcnXTtcblxuICBmdW5jdGlvbiBjb2xsZWN0Tm9uRW51bVByb3BzKG9iaiwga2V5cykge1xuICAgIHZhciBub25FbnVtSWR4ID0gbm9uRW51bWVyYWJsZVByb3BzLmxlbmd0aDtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBvYmouY29uc3RydWN0b3I7XG4gICAgdmFyIHByb3RvID0gKF8uaXNGdW5jdGlvbihjb25zdHJ1Y3RvcikgJiYgY29uc3RydWN0b3IucHJvdG90eXBlKSB8fCBPYmpQcm90bztcblxuICAgIC8vIENvbnN0cnVjdG9yIGlzIGEgc3BlY2lhbCBjYXNlLlxuICAgIHZhciBwcm9wID0gJ2NvbnN0cnVjdG9yJztcbiAgICBpZiAoXy5oYXMob2JqLCBwcm9wKSAmJiAhXy5jb250YWlucyhrZXlzLCBwcm9wKSkga2V5cy5wdXNoKHByb3ApO1xuXG4gICAgd2hpbGUgKG5vbkVudW1JZHgtLSkge1xuICAgICAgcHJvcCA9IG5vbkVudW1lcmFibGVQcm9wc1tub25FbnVtSWR4XTtcbiAgICAgIGlmIChwcm9wIGluIG9iaiAmJiBvYmpbcHJvcF0gIT09IHByb3RvW3Byb3BdICYmICFfLmNvbnRhaW5zKGtleXMsIHByb3ApKSB7XG4gICAgICAgIGtleXMucHVzaChwcm9wKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBSZXRyaWV2ZSB0aGUgbmFtZXMgb2YgYW4gb2JqZWN0J3Mgb3duIHByb3BlcnRpZXMuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBPYmplY3Qua2V5c2BcbiAgXy5rZXlzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKCFfLmlzT2JqZWN0KG9iaikpIHJldHVybiBbXTtcbiAgICBpZiAobmF0aXZlS2V5cykgcmV0dXJuIG5hdGl2ZUtleXMob2JqKTtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIGlmIChfLmhhcyhvYmosIGtleSkpIGtleXMucHVzaChrZXkpO1xuICAgIC8vIEFoZW0sIElFIDwgOS5cbiAgICBpZiAoaGFzRW51bUJ1ZykgY29sbGVjdE5vbkVudW1Qcm9wcyhvYmosIGtleXMpO1xuICAgIHJldHVybiBrZXlzO1xuICB9O1xuXG4gIC8vIFJldHJpZXZlIGFsbCB0aGUgcHJvcGVydHkgbmFtZXMgb2YgYW4gb2JqZWN0LlxuICBfLmFsbEtleXMgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAoIV8uaXNPYmplY3Qob2JqKSkgcmV0dXJuIFtdO1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikga2V5cy5wdXNoKGtleSk7XG4gICAgLy8gQWhlbSwgSUUgPCA5LlxuICAgIGlmIChoYXNFbnVtQnVnKSBjb2xsZWN0Tm9uRW51bVByb3BzKG9iaiwga2V5cyk7XG4gICAgcmV0dXJuIGtleXM7XG4gIH07XG5cbiAgLy8gUmV0cmlldmUgdGhlIHZhbHVlcyBvZiBhbiBvYmplY3QncyBwcm9wZXJ0aWVzLlxuICBfLnZhbHVlcyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciB2YWx1ZXMgPSBBcnJheShsZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbHVlc1tpXSA9IG9ialtrZXlzW2ldXTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfTtcblxuICAvLyBSZXR1cm5zIHRoZSByZXN1bHRzIG9mIGFwcGx5aW5nIHRoZSBpdGVyYXRlZSB0byBlYWNoIGVsZW1lbnQgb2YgdGhlIG9iamVjdFxuICAvLyBJbiBjb250cmFzdCB0byBfLm1hcCBpdCByZXR1cm5zIGFuIG9iamVjdFxuICBfLm1hcE9iamVjdCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICB2YXIga2V5cyA9ICBfLmtleXMob2JqKSxcbiAgICAgICAgICBsZW5ndGggPSBrZXlzLmxlbmd0aCxcbiAgICAgICAgICByZXN1bHRzID0ge30sXG4gICAgICAgICAgY3VycmVudEtleTtcbiAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY3VycmVudEtleSA9IGtleXNbaW5kZXhdO1xuICAgICAgICByZXN1bHRzW2N1cnJlbnRLZXldID0gaXRlcmF0ZWUob2JqW2N1cnJlbnRLZXldLCBjdXJyZW50S2V5LCBvYmopO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgLy8gQ29udmVydCBhbiBvYmplY3QgaW50byBhIGxpc3Qgb2YgYFtrZXksIHZhbHVlXWAgcGFpcnMuXG4gIF8ucGFpcnMgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIga2V5cyA9IF8ua2V5cyhvYmopO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgcGFpcnMgPSBBcnJheShsZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHBhaXJzW2ldID0gW2tleXNbaV0sIG9ialtrZXlzW2ldXV07XG4gICAgfVxuICAgIHJldHVybiBwYWlycztcbiAgfTtcblxuICAvLyBJbnZlcnQgdGhlIGtleXMgYW5kIHZhbHVlcyBvZiBhbiBvYmplY3QuIFRoZSB2YWx1ZXMgbXVzdCBiZSBzZXJpYWxpemFibGUuXG4gIF8uaW52ZXJ0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGtleXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdFtvYmpba2V5c1tpXV1dID0ga2V5c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBSZXR1cm4gYSBzb3J0ZWQgbGlzdCBvZiB0aGUgZnVuY3Rpb24gbmFtZXMgYXZhaWxhYmxlIG9uIHRoZSBvYmplY3QuXG4gIC8vIEFsaWFzZWQgYXMgYG1ldGhvZHNgXG4gIF8uZnVuY3Rpb25zID0gXy5tZXRob2RzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIG5hbWVzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKF8uaXNGdW5jdGlvbihvYmpba2V5XSkpIG5hbWVzLnB1c2goa2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIG5hbWVzLnNvcnQoKTtcbiAgfTtcblxuICAvLyBFeHRlbmQgYSBnaXZlbiBvYmplY3Qgd2l0aCBhbGwgdGhlIHByb3BlcnRpZXMgaW4gcGFzc2VkLWluIG9iamVjdChzKS5cbiAgXy5leHRlbmQgPSBjcmVhdGVBc3NpZ25lcihfLmFsbEtleXMpO1xuXG4gIC8vIEFzc2lnbnMgYSBnaXZlbiBvYmplY3Qgd2l0aCBhbGwgdGhlIG93biBwcm9wZXJ0aWVzIGluIHRoZSBwYXNzZWQtaW4gb2JqZWN0KHMpXG4gIC8vIChodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvYXNzaWduKVxuICBfLmV4dGVuZE93biA9IF8uYXNzaWduID0gY3JlYXRlQXNzaWduZXIoXy5rZXlzKTtcblxuICAvLyBSZXR1cm5zIHRoZSBmaXJzdCBrZXkgb24gYW4gb2JqZWN0IHRoYXQgcGFzc2VzIGEgcHJlZGljYXRlIHRlc3RcbiAgXy5maW5kS2V5ID0gZnVuY3Rpb24ob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICBwcmVkaWNhdGUgPSBjYihwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaiksIGtleTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgIGlmIChwcmVkaWNhdGUob2JqW2tleV0sIGtleSwgb2JqKSkgcmV0dXJuIGtleTtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmV0dXJuIGEgY29weSBvZiB0aGUgb2JqZWN0IG9ubHkgY29udGFpbmluZyB0aGUgd2hpdGVsaXN0ZWQgcHJvcGVydGllcy5cbiAgXy5waWNrID0gZnVuY3Rpb24ob2JqZWN0LCBvaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICB2YXIgcmVzdWx0ID0ge30sIG9iaiA9IG9iamVjdCwgaXRlcmF0ZWUsIGtleXM7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gcmVzdWx0O1xuICAgIGlmIChfLmlzRnVuY3Rpb24ob2l0ZXJhdGVlKSkge1xuICAgICAga2V5cyA9IF8uYWxsS2V5cyhvYmopO1xuICAgICAgaXRlcmF0ZWUgPSBvcHRpbWl6ZUNiKG9pdGVyYXRlZSwgY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleXMgPSBmbGF0dGVuKGFyZ3VtZW50cywgZmFsc2UsIGZhbHNlLCAxKTtcbiAgICAgIGl0ZXJhdGVlID0gZnVuY3Rpb24odmFsdWUsIGtleSwgb2JqKSB7IHJldHVybiBrZXkgaW4gb2JqOyB9O1xuICAgICAgb2JqID0gT2JqZWN0KG9iaik7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBrZXlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgIHZhciB2YWx1ZSA9IG9ialtrZXldO1xuICAgICAgaWYgKGl0ZXJhdGVlKHZhbHVlLCBrZXksIG9iaikpIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgIC8vIFJldHVybiBhIGNvcHkgb2YgdGhlIG9iamVjdCB3aXRob3V0IHRoZSBibGFja2xpc3RlZCBwcm9wZXJ0aWVzLlxuICBfLm9taXQgPSBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgaWYgKF8uaXNGdW5jdGlvbihpdGVyYXRlZSkpIHtcbiAgICAgIGl0ZXJhdGVlID0gXy5uZWdhdGUoaXRlcmF0ZWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIga2V5cyA9IF8ubWFwKGZsYXR0ZW4oYXJndW1lbnRzLCBmYWxzZSwgZmFsc2UsIDEpLCBTdHJpbmcpO1xuICAgICAgaXRlcmF0ZWUgPSBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgICAgIHJldHVybiAhXy5jb250YWlucyhrZXlzLCBrZXkpO1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIF8ucGljayhvYmosIGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgfTtcblxuICAvLyBGaWxsIGluIGEgZ2l2ZW4gb2JqZWN0IHdpdGggZGVmYXVsdCBwcm9wZXJ0aWVzLlxuICBfLmRlZmF1bHRzID0gY3JlYXRlQXNzaWduZXIoXy5hbGxLZXlzLCB0cnVlKTtcblxuICAvLyBDcmVhdGVzIGFuIG9iamVjdCB0aGF0IGluaGVyaXRzIGZyb20gdGhlIGdpdmVuIHByb3RvdHlwZSBvYmplY3QuXG4gIC8vIElmIGFkZGl0aW9uYWwgcHJvcGVydGllcyBhcmUgcHJvdmlkZWQgdGhlbiB0aGV5IHdpbGwgYmUgYWRkZWQgdG8gdGhlXG4gIC8vIGNyZWF0ZWQgb2JqZWN0LlxuICBfLmNyZWF0ZSA9IGZ1bmN0aW9uKHByb3RvdHlwZSwgcHJvcHMpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUNyZWF0ZShwcm90b3R5cGUpO1xuICAgIGlmIChwcm9wcykgXy5leHRlbmRPd24ocmVzdWx0LCBwcm9wcyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBDcmVhdGUgYSAoc2hhbGxvdy1jbG9uZWQpIGR1cGxpY2F0ZSBvZiBhbiBvYmplY3QuXG4gIF8uY2xvbmUgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAoIV8uaXNPYmplY3Qob2JqKSkgcmV0dXJuIG9iajtcbiAgICByZXR1cm4gXy5pc0FycmF5KG9iaikgPyBvYmouc2xpY2UoKSA6IF8uZXh0ZW5kKHt9LCBvYmopO1xuICB9O1xuXG4gIC8vIEludm9rZXMgaW50ZXJjZXB0b3Igd2l0aCB0aGUgb2JqLCBhbmQgdGhlbiByZXR1cm5zIG9iai5cbiAgLy8gVGhlIHByaW1hcnkgcHVycG9zZSBvZiB0aGlzIG1ldGhvZCBpcyB0byBcInRhcCBpbnRvXCIgYSBtZXRob2QgY2hhaW4sIGluXG4gIC8vIG9yZGVyIHRvIHBlcmZvcm0gb3BlcmF0aW9ucyBvbiBpbnRlcm1lZGlhdGUgcmVzdWx0cyB3aXRoaW4gdGhlIGNoYWluLlxuICBfLnRhcCA9IGZ1bmN0aW9uKG9iaiwgaW50ZXJjZXB0b3IpIHtcbiAgICBpbnRlcmNlcHRvcihvYmopO1xuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgLy8gUmV0dXJucyB3aGV0aGVyIGFuIG9iamVjdCBoYXMgYSBnaXZlbiBzZXQgb2YgYGtleTp2YWx1ZWAgcGFpcnMuXG4gIF8uaXNNYXRjaCA9IGZ1bmN0aW9uKG9iamVjdCwgYXR0cnMpIHtcbiAgICB2YXIga2V5cyA9IF8ua2V5cyhhdHRycyksIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIGlmIChvYmplY3QgPT0gbnVsbCkgcmV0dXJuICFsZW5ndGg7XG4gICAgdmFyIG9iaiA9IE9iamVjdChvYmplY3QpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgaWYgKGF0dHJzW2tleV0gIT09IG9ialtrZXldIHx8ICEoa2V5IGluIG9iaikpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cblxuICAvLyBJbnRlcm5hbCByZWN1cnNpdmUgY29tcGFyaXNvbiBmdW5jdGlvbiBmb3IgYGlzRXF1YWxgLlxuICB2YXIgZXEgPSBmdW5jdGlvbihhLCBiLCBhU3RhY2ssIGJTdGFjaykge1xuICAgIC8vIElkZW50aWNhbCBvYmplY3RzIGFyZSBlcXVhbC4gYDAgPT09IC0wYCwgYnV0IHRoZXkgYXJlbid0IGlkZW50aWNhbC5cbiAgICAvLyBTZWUgdGhlIFtIYXJtb255IGBlZ2FsYCBwcm9wb3NhbF0oaHR0cDovL3dpa2kuZWNtYXNjcmlwdC5vcmcvZG9rdS5waHA/aWQ9aGFybW9ueTplZ2FsKS5cbiAgICBpZiAoYSA9PT0gYikgcmV0dXJuIGEgIT09IDAgfHwgMSAvIGEgPT09IDEgLyBiO1xuICAgIC8vIEEgc3RyaWN0IGNvbXBhcmlzb24gaXMgbmVjZXNzYXJ5IGJlY2F1c2UgYG51bGwgPT0gdW5kZWZpbmVkYC5cbiAgICBpZiAoYSA9PSBudWxsIHx8IGIgPT0gbnVsbCkgcmV0dXJuIGEgPT09IGI7XG4gICAgLy8gVW53cmFwIGFueSB3cmFwcGVkIG9iamVjdHMuXG4gICAgaWYgKGEgaW5zdGFuY2VvZiBfKSBhID0gYS5fd3JhcHBlZDtcbiAgICBpZiAoYiBpbnN0YW5jZW9mIF8pIGIgPSBiLl93cmFwcGVkO1xuICAgIC8vIENvbXBhcmUgYFtbQ2xhc3NdXWAgbmFtZXMuXG4gICAgdmFyIGNsYXNzTmFtZSA9IHRvU3RyaW5nLmNhbGwoYSk7XG4gICAgaWYgKGNsYXNzTmFtZSAhPT0gdG9TdHJpbmcuY2FsbChiKSkgcmV0dXJuIGZhbHNlO1xuICAgIHN3aXRjaCAoY2xhc3NOYW1lKSB7XG4gICAgICAvLyBTdHJpbmdzLCBudW1iZXJzLCByZWd1bGFyIGV4cHJlc3Npb25zLCBkYXRlcywgYW5kIGJvb2xlYW5zIGFyZSBjb21wYXJlZCBieSB2YWx1ZS5cbiAgICAgIGNhc2UgJ1tvYmplY3QgUmVnRXhwXSc6XG4gICAgICAvLyBSZWdFeHBzIGFyZSBjb2VyY2VkIHRvIHN0cmluZ3MgZm9yIGNvbXBhcmlzb24gKE5vdGU6ICcnICsgL2EvaSA9PT0gJy9hL2knKVxuICAgICAgY2FzZSAnW29iamVjdCBTdHJpbmddJzpcbiAgICAgICAgLy8gUHJpbWl0aXZlcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBvYmplY3Qgd3JhcHBlcnMgYXJlIGVxdWl2YWxlbnQ7IHRodXMsIGBcIjVcImAgaXNcbiAgICAgICAgLy8gZXF1aXZhbGVudCB0byBgbmV3IFN0cmluZyhcIjVcIilgLlxuICAgICAgICByZXR1cm4gJycgKyBhID09PSAnJyArIGI7XG4gICAgICBjYXNlICdbb2JqZWN0IE51bWJlcl0nOlxuICAgICAgICAvLyBgTmFOYHMgYXJlIGVxdWl2YWxlbnQsIGJ1dCBub24tcmVmbGV4aXZlLlxuICAgICAgICAvLyBPYmplY3QoTmFOKSBpcyBlcXVpdmFsZW50IHRvIE5hTlxuICAgICAgICBpZiAoK2EgIT09ICthKSByZXR1cm4gK2IgIT09ICtiO1xuICAgICAgICAvLyBBbiBgZWdhbGAgY29tcGFyaXNvbiBpcyBwZXJmb3JtZWQgZm9yIG90aGVyIG51bWVyaWMgdmFsdWVzLlxuICAgICAgICByZXR1cm4gK2EgPT09IDAgPyAxIC8gK2EgPT09IDEgLyBiIDogK2EgPT09ICtiO1xuICAgICAgY2FzZSAnW29iamVjdCBEYXRlXSc6XG4gICAgICBjYXNlICdbb2JqZWN0IEJvb2xlYW5dJzpcbiAgICAgICAgLy8gQ29lcmNlIGRhdGVzIGFuZCBib29sZWFucyB0byBudW1lcmljIHByaW1pdGl2ZSB2YWx1ZXMuIERhdGVzIGFyZSBjb21wYXJlZCBieSB0aGVpclxuICAgICAgICAvLyBtaWxsaXNlY29uZCByZXByZXNlbnRhdGlvbnMuIE5vdGUgdGhhdCBpbnZhbGlkIGRhdGVzIHdpdGggbWlsbGlzZWNvbmQgcmVwcmVzZW50YXRpb25zXG4gICAgICAgIC8vIG9mIGBOYU5gIGFyZSBub3QgZXF1aXZhbGVudC5cbiAgICAgICAgcmV0dXJuICthID09PSArYjtcbiAgICB9XG5cbiAgICB2YXIgYXJlQXJyYXlzID0gY2xhc3NOYW1lID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgIGlmICghYXJlQXJyYXlzKSB7XG4gICAgICBpZiAodHlwZW9mIGEgIT0gJ29iamVjdCcgfHwgdHlwZW9mIGIgIT0gJ29iamVjdCcpIHJldHVybiBmYWxzZTtcblxuICAgICAgLy8gT2JqZWN0cyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVpdmFsZW50LCBidXQgYE9iamVjdGBzIG9yIGBBcnJheWBzXG4gICAgICAvLyBmcm9tIGRpZmZlcmVudCBmcmFtZXMgYXJlLlxuICAgICAgdmFyIGFDdG9yID0gYS5jb25zdHJ1Y3RvciwgYkN0b3IgPSBiLmNvbnN0cnVjdG9yO1xuICAgICAgaWYgKGFDdG9yICE9PSBiQ3RvciAmJiAhKF8uaXNGdW5jdGlvbihhQ3RvcikgJiYgYUN0b3IgaW5zdGFuY2VvZiBhQ3RvciAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uaXNGdW5jdGlvbihiQ3RvcikgJiYgYkN0b3IgaW5zdGFuY2VvZiBiQ3RvcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCdjb25zdHJ1Y3RvcicgaW4gYSAmJiAnY29uc3RydWN0b3InIGluIGIpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gQXNzdW1lIGVxdWFsaXR5IGZvciBjeWNsaWMgc3RydWN0dXJlcy4gVGhlIGFsZ29yaXRobSBmb3IgZGV0ZWN0aW5nIGN5Y2xpY1xuICAgIC8vIHN0cnVjdHVyZXMgaXMgYWRhcHRlZCBmcm9tIEVTIDUuMSBzZWN0aW9uIDE1LjEyLjMsIGFic3RyYWN0IG9wZXJhdGlvbiBgSk9gLlxuXG4gICAgLy8gSW5pdGlhbGl6aW5nIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuICAgIC8vIEl0J3MgZG9uZSBoZXJlIHNpbmNlIHdlIG9ubHkgbmVlZCB0aGVtIGZvciBvYmplY3RzIGFuZCBhcnJheXMgY29tcGFyaXNvbi5cbiAgICBhU3RhY2sgPSBhU3RhY2sgfHwgW107XG4gICAgYlN0YWNrID0gYlN0YWNrIHx8IFtdO1xuICAgIHZhciBsZW5ndGggPSBhU3RhY2subGVuZ3RoO1xuICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgLy8gTGluZWFyIHNlYXJjaC4gUGVyZm9ybWFuY2UgaXMgaW52ZXJzZWx5IHByb3BvcnRpb25hbCB0byB0aGUgbnVtYmVyIG9mXG4gICAgICAvLyB1bmlxdWUgbmVzdGVkIHN0cnVjdHVyZXMuXG4gICAgICBpZiAoYVN0YWNrW2xlbmd0aF0gPT09IGEpIHJldHVybiBiU3RhY2tbbGVuZ3RoXSA9PT0gYjtcbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIGZpcnN0IG9iamVjdCB0byB0aGUgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXG4gICAgYVN0YWNrLnB1c2goYSk7XG4gICAgYlN0YWNrLnB1c2goYik7XG5cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgYW5kIGFycmF5cy5cbiAgICBpZiAoYXJlQXJyYXlzKSB7XG4gICAgICAvLyBDb21wYXJlIGFycmF5IGxlbmd0aHMgdG8gZGV0ZXJtaW5lIGlmIGEgZGVlcCBjb21wYXJpc29uIGlzIG5lY2Vzc2FyeS5cbiAgICAgIGxlbmd0aCA9IGEubGVuZ3RoO1xuICAgICAgaWYgKGxlbmd0aCAhPT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIC8vIERlZXAgY29tcGFyZSB0aGUgY29udGVudHMsIGlnbm9yaW5nIG5vbi1udW1lcmljIHByb3BlcnRpZXMuXG4gICAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgICAgaWYgKCFlcShhW2xlbmd0aF0sIGJbbGVuZ3RoXSwgYVN0YWNrLCBiU3RhY2spKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIERlZXAgY29tcGFyZSBvYmplY3RzLlxuICAgICAgdmFyIGtleXMgPSBfLmtleXMoYSksIGtleTtcbiAgICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgICAgLy8gRW5zdXJlIHRoYXQgYm90aCBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUgbnVtYmVyIG9mIHByb3BlcnRpZXMgYmVmb3JlIGNvbXBhcmluZyBkZWVwIGVxdWFsaXR5LlxuICAgICAgaWYgKF8ua2V5cyhiKS5sZW5ndGggIT09IGxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAgIC8vIERlZXAgY29tcGFyZSBlYWNoIG1lbWJlclxuICAgICAgICBrZXkgPSBrZXlzW2xlbmd0aF07XG4gICAgICAgIGlmICghKF8uaGFzKGIsIGtleSkgJiYgZXEoYVtrZXldLCBiW2tleV0sIGFTdGFjaywgYlN0YWNrKSkpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBvYmplY3QgZnJvbSB0aGUgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXG4gICAgYVN0YWNrLnBvcCgpO1xuICAgIGJTdGFjay5wb3AoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvLyBQZXJmb3JtIGEgZGVlcCBjb21wYXJpc29uIHRvIGNoZWNrIGlmIHR3byBvYmplY3RzIGFyZSBlcXVhbC5cbiAgXy5pc0VxdWFsID0gZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBlcShhLCBiKTtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIGFycmF5LCBzdHJpbmcsIG9yIG9iamVjdCBlbXB0eT9cbiAgLy8gQW4gXCJlbXB0eVwiIG9iamVjdCBoYXMgbm8gZW51bWVyYWJsZSBvd24tcHJvcGVydGllcy5cbiAgXy5pc0VtcHR5ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoaXNBcnJheUxpa2Uob2JqKSAmJiAoXy5pc0FycmF5KG9iaikgfHwgXy5pc1N0cmluZyhvYmopIHx8IF8uaXNBcmd1bWVudHMob2JqKSkpIHJldHVybiBvYmoubGVuZ3RoID09PSAwO1xuICAgIHJldHVybiBfLmtleXMob2JqKS5sZW5ndGggPT09IDA7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YWx1ZSBhIERPTSBlbGVtZW50P1xuICBfLmlzRWxlbWVudCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiAhIShvYmogJiYgb2JqLm5vZGVUeXBlID09PSAxKTtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhbHVlIGFuIGFycmF5P1xuICAvLyBEZWxlZ2F0ZXMgdG8gRUNNQTUncyBuYXRpdmUgQXJyYXkuaXNBcnJheVxuICBfLmlzQXJyYXkgPSBuYXRpdmVJc0FycmF5IHx8IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YXJpYWJsZSBhbiBvYmplY3Q/XG4gIF8uaXNPYmplY3QgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgdHlwZSA9IHR5cGVvZiBvYmo7XG4gICAgcmV0dXJuIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgdHlwZSA9PT0gJ29iamVjdCcgJiYgISFvYmo7XG4gIH07XG5cbiAgLy8gQWRkIHNvbWUgaXNUeXBlIG1ldGhvZHM6IGlzQXJndW1lbnRzLCBpc0Z1bmN0aW9uLCBpc1N0cmluZywgaXNOdW1iZXIsIGlzRGF0ZSwgaXNSZWdFeHAsIGlzRXJyb3IuXG4gIF8uZWFjaChbJ0FyZ3VtZW50cycsICdGdW5jdGlvbicsICdTdHJpbmcnLCAnTnVtYmVyJywgJ0RhdGUnLCAnUmVnRXhwJywgJ0Vycm9yJ10sIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBfWydpcycgKyBuYW1lXSA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgJyArIG5hbWUgKyAnXSc7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gRGVmaW5lIGEgZmFsbGJhY2sgdmVyc2lvbiBvZiB0aGUgbWV0aG9kIGluIGJyb3dzZXJzIChhaGVtLCBJRSA8IDkpLCB3aGVyZVxuICAvLyB0aGVyZSBpc24ndCBhbnkgaW5zcGVjdGFibGUgXCJBcmd1bWVudHNcIiB0eXBlLlxuICBpZiAoIV8uaXNBcmd1bWVudHMoYXJndW1lbnRzKSkge1xuICAgIF8uaXNBcmd1bWVudHMgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBfLmhhcyhvYmosICdjYWxsZWUnKTtcbiAgICB9O1xuICB9XG5cbiAgLy8gT3B0aW1pemUgYGlzRnVuY3Rpb25gIGlmIGFwcHJvcHJpYXRlLiBXb3JrIGFyb3VuZCBzb21lIHR5cGVvZiBidWdzIGluIG9sZCB2OCxcbiAgLy8gSUUgMTEgKCMxNjIxKSwgYW5kIGluIFNhZmFyaSA4ICgjMTkyOSkuXG4gIGlmICh0eXBlb2YgLy4vICE9ICdmdW5jdGlvbicgJiYgdHlwZW9mIEludDhBcnJheSAhPSAnb2JqZWN0Jykge1xuICAgIF8uaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmogPT0gJ2Z1bmN0aW9uJyB8fCBmYWxzZTtcbiAgICB9O1xuICB9XG5cbiAgLy8gSXMgYSBnaXZlbiBvYmplY3QgYSBmaW5pdGUgbnVtYmVyP1xuICBfLmlzRmluaXRlID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIGlzRmluaXRlKG9iaikgJiYgIWlzTmFOKHBhcnNlRmxvYXQob2JqKSk7XG4gIH07XG5cbiAgLy8gSXMgdGhlIGdpdmVuIHZhbHVlIGBOYU5gPyAoTmFOIGlzIHRoZSBvbmx5IG51bWJlciB3aGljaCBkb2VzIG5vdCBlcXVhbCBpdHNlbGYpLlxuICBfLmlzTmFOID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIF8uaXNOdW1iZXIob2JqKSAmJiBvYmogIT09ICtvYmo7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YWx1ZSBhIGJvb2xlYW4/XG4gIF8uaXNCb29sZWFuID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdHJ1ZSB8fCBvYmogPT09IGZhbHNlIHx8IHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQm9vbGVhbl0nO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFsdWUgZXF1YWwgdG8gbnVsbD9cbiAgXy5pc051bGwgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSBudWxsO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFyaWFibGUgdW5kZWZpbmVkP1xuICBfLmlzVW5kZWZpbmVkID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdm9pZCAwO1xuICB9O1xuXG4gIC8vIFNob3J0Y3V0IGZ1bmN0aW9uIGZvciBjaGVja2luZyBpZiBhbiBvYmplY3QgaGFzIGEgZ2l2ZW4gcHJvcGVydHkgZGlyZWN0bHlcbiAgLy8gb24gaXRzZWxmIChpbiBvdGhlciB3b3Jkcywgbm90IG9uIGEgcHJvdG90eXBlKS5cbiAgXy5oYXMgPSBmdW5jdGlvbihvYmosIGtleSkge1xuICAgIHJldHVybiBvYmogIT0gbnVsbCAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcbiAgfTtcblxuICAvLyBVdGlsaXR5IEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFJ1biBVbmRlcnNjb3JlLmpzIGluICpub0NvbmZsaWN0KiBtb2RlLCByZXR1cm5pbmcgdGhlIGBfYCB2YXJpYWJsZSB0byBpdHNcbiAgLy8gcHJldmlvdXMgb3duZXIuIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIFVuZGVyc2NvcmUgb2JqZWN0LlxuICBfLm5vQ29uZmxpY3QgPSBmdW5jdGlvbigpIHtcbiAgICByb290Ll8gPSBwcmV2aW91c1VuZGVyc2NvcmU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLy8gS2VlcCB0aGUgaWRlbnRpdHkgZnVuY3Rpb24gYXJvdW5kIGZvciBkZWZhdWx0IGl0ZXJhdGVlcy5cbiAgXy5pZGVudGl0eSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIC8vIFByZWRpY2F0ZS1nZW5lcmF0aW5nIGZ1bmN0aW9ucy4gT2Z0ZW4gdXNlZnVsIG91dHNpZGUgb2YgVW5kZXJzY29yZS5cbiAgXy5jb25zdGFudCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gIH07XG5cbiAgXy5ub29wID0gZnVuY3Rpb24oKXt9O1xuXG4gIF8ucHJvcGVydHkgPSBwcm9wZXJ0eTtcblxuICAvLyBHZW5lcmF0ZXMgYSBmdW5jdGlvbiBmb3IgYSBnaXZlbiBvYmplY3QgdGhhdCByZXR1cm5zIGEgZ2l2ZW4gcHJvcGVydHkuXG4gIF8ucHJvcGVydHlPZiA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogPT0gbnVsbCA/IGZ1bmN0aW9uKCl7fSA6IGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIHByZWRpY2F0ZSBmb3IgY2hlY2tpbmcgd2hldGhlciBhbiBvYmplY3QgaGFzIGEgZ2l2ZW4gc2V0IG9mXG4gIC8vIGBrZXk6dmFsdWVgIHBhaXJzLlxuICBfLm1hdGNoZXIgPSBfLm1hdGNoZXMgPSBmdW5jdGlvbihhdHRycykge1xuICAgIGF0dHJzID0gXy5leHRlbmRPd24oe30sIGF0dHJzKTtcbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gXy5pc01hdGNoKG9iaiwgYXR0cnMpO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUnVuIGEgZnVuY3Rpb24gKipuKiogdGltZXMuXG4gIF8udGltZXMgPSBmdW5jdGlvbihuLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIHZhciBhY2N1bSA9IEFycmF5KE1hdGgubWF4KDAsIG4pKTtcbiAgICBpdGVyYXRlZSA9IG9wdGltaXplQ2IoaXRlcmF0ZWUsIGNvbnRleHQsIDEpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSBhY2N1bVtpXSA9IGl0ZXJhdGVlKGkpO1xuICAgIHJldHVybiBhY2N1bTtcbiAgfTtcblxuICAvLyBSZXR1cm4gYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIG1pbiBhbmQgbWF4IChpbmNsdXNpdmUpLlxuICBfLnJhbmRvbSA9IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XG4gICAgaWYgKG1heCA9PSBudWxsKSB7XG4gICAgICBtYXggPSBtaW47XG4gICAgICBtaW4gPSAwO1xuICAgIH1cbiAgICByZXR1cm4gbWluICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKTtcbiAgfTtcblxuICAvLyBBIChwb3NzaWJseSBmYXN0ZXIpIHdheSB0byBnZXQgdGhlIGN1cnJlbnQgdGltZXN0YW1wIGFzIGFuIGludGVnZXIuXG4gIF8ubm93ID0gRGF0ZS5ub3cgfHwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9O1xuXG4gICAvLyBMaXN0IG9mIEhUTUwgZW50aXRpZXMgZm9yIGVzY2FwaW5nLlxuICB2YXIgZXNjYXBlTWFwID0ge1xuICAgICcmJzogJyZhbXA7JyxcbiAgICAnPCc6ICcmbHQ7JyxcbiAgICAnPic6ICcmZ3Q7JyxcbiAgICAnXCInOiAnJnF1b3Q7JyxcbiAgICBcIidcIjogJyYjeDI3OycsXG4gICAgJ2AnOiAnJiN4NjA7J1xuICB9O1xuICB2YXIgdW5lc2NhcGVNYXAgPSBfLmludmVydChlc2NhcGVNYXApO1xuXG4gIC8vIEZ1bmN0aW9ucyBmb3IgZXNjYXBpbmcgYW5kIHVuZXNjYXBpbmcgc3RyaW5ncyB0by9mcm9tIEhUTUwgaW50ZXJwb2xhdGlvbi5cbiAgdmFyIGNyZWF0ZUVzY2FwZXIgPSBmdW5jdGlvbihtYXApIHtcbiAgICB2YXIgZXNjYXBlciA9IGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICByZXR1cm4gbWFwW21hdGNoXTtcbiAgICB9O1xuICAgIC8vIFJlZ2V4ZXMgZm9yIGlkZW50aWZ5aW5nIGEga2V5IHRoYXQgbmVlZHMgdG8gYmUgZXNjYXBlZFxuICAgIHZhciBzb3VyY2UgPSAnKD86JyArIF8ua2V5cyhtYXApLmpvaW4oJ3wnKSArICcpJztcbiAgICB2YXIgdGVzdFJlZ2V4cCA9IFJlZ0V4cChzb3VyY2UpO1xuICAgIHZhciByZXBsYWNlUmVnZXhwID0gUmVnRXhwKHNvdXJjZSwgJ2cnKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgICBzdHJpbmcgPSBzdHJpbmcgPT0gbnVsbCA/ICcnIDogJycgKyBzdHJpbmc7XG4gICAgICByZXR1cm4gdGVzdFJlZ2V4cC50ZXN0KHN0cmluZykgPyBzdHJpbmcucmVwbGFjZShyZXBsYWNlUmVnZXhwLCBlc2NhcGVyKSA6IHN0cmluZztcbiAgICB9O1xuICB9O1xuICBfLmVzY2FwZSA9IGNyZWF0ZUVzY2FwZXIoZXNjYXBlTWFwKTtcbiAgXy51bmVzY2FwZSA9IGNyZWF0ZUVzY2FwZXIodW5lc2NhcGVNYXApO1xuXG4gIC8vIElmIHRoZSB2YWx1ZSBvZiB0aGUgbmFtZWQgYHByb3BlcnR5YCBpcyBhIGZ1bmN0aW9uIHRoZW4gaW52b2tlIGl0IHdpdGggdGhlXG4gIC8vIGBvYmplY3RgIGFzIGNvbnRleHQ7IG90aGVyd2lzZSwgcmV0dXJuIGl0LlxuICBfLnJlc3VsdCA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHksIGZhbGxiYWNrKSB7XG4gICAgdmFyIHZhbHVlID0gb2JqZWN0ID09IG51bGwgPyB2b2lkIDAgOiBvYmplY3RbcHJvcGVydHldO1xuICAgIGlmICh2YWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgICB2YWx1ZSA9IGZhbGxiYWNrO1xuICAgIH1cbiAgICByZXR1cm4gXy5pc0Z1bmN0aW9uKHZhbHVlKSA/IHZhbHVlLmNhbGwob2JqZWN0KSA6IHZhbHVlO1xuICB9O1xuXG4gIC8vIEdlbmVyYXRlIGEgdW5pcXVlIGludGVnZXIgaWQgKHVuaXF1ZSB3aXRoaW4gdGhlIGVudGlyZSBjbGllbnQgc2Vzc2lvbikuXG4gIC8vIFVzZWZ1bCBmb3IgdGVtcG9yYXJ5IERPTSBpZHMuXG4gIHZhciBpZENvdW50ZXIgPSAwO1xuICBfLnVuaXF1ZUlkID0gZnVuY3Rpb24ocHJlZml4KSB7XG4gICAgdmFyIGlkID0gKytpZENvdW50ZXIgKyAnJztcbiAgICByZXR1cm4gcHJlZml4ID8gcHJlZml4ICsgaWQgOiBpZDtcbiAgfTtcblxuICAvLyBCeSBkZWZhdWx0LCBVbmRlcnNjb3JlIHVzZXMgRVJCLXN0eWxlIHRlbXBsYXRlIGRlbGltaXRlcnMsIGNoYW5nZSB0aGVcbiAgLy8gZm9sbG93aW5nIHRlbXBsYXRlIHNldHRpbmdzIHRvIHVzZSBhbHRlcm5hdGl2ZSBkZWxpbWl0ZXJzLlxuICBfLnRlbXBsYXRlU2V0dGluZ3MgPSB7XG4gICAgZXZhbHVhdGUgICAgOiAvPCUoW1xcc1xcU10rPyklPi9nLFxuICAgIGludGVycG9sYXRlIDogLzwlPShbXFxzXFxTXSs/KSU+L2csXG4gICAgZXNjYXBlICAgICAgOiAvPCUtKFtcXHNcXFNdKz8pJT4vZ1xuICB9O1xuXG4gIC8vIFdoZW4gY3VzdG9taXppbmcgYHRlbXBsYXRlU2V0dGluZ3NgLCBpZiB5b3UgZG9uJ3Qgd2FudCB0byBkZWZpbmUgYW5cbiAgLy8gaW50ZXJwb2xhdGlvbiwgZXZhbHVhdGlvbiBvciBlc2NhcGluZyByZWdleCwgd2UgbmVlZCBvbmUgdGhhdCBpc1xuICAvLyBndWFyYW50ZWVkIG5vdCB0byBtYXRjaC5cbiAgdmFyIG5vTWF0Y2ggPSAvKC4pXi87XG5cbiAgLy8gQ2VydGFpbiBjaGFyYWN0ZXJzIG5lZWQgdG8gYmUgZXNjYXBlZCBzbyB0aGF0IHRoZXkgY2FuIGJlIHB1dCBpbnRvIGFcbiAgLy8gc3RyaW5nIGxpdGVyYWwuXG4gIHZhciBlc2NhcGVzID0ge1xuICAgIFwiJ1wiOiAgICAgIFwiJ1wiLFxuICAgICdcXFxcJzogICAgICdcXFxcJyxcbiAgICAnXFxyJzogICAgICdyJyxcbiAgICAnXFxuJzogICAgICduJyxcbiAgICAnXFx1MjAyOCc6ICd1MjAyOCcsXG4gICAgJ1xcdTIwMjknOiAndTIwMjknXG4gIH07XG5cbiAgdmFyIGVzY2FwZXIgPSAvXFxcXHwnfFxccnxcXG58XFx1MjAyOHxcXHUyMDI5L2c7XG5cbiAgdmFyIGVzY2FwZUNoYXIgPSBmdW5jdGlvbihtYXRjaCkge1xuICAgIHJldHVybiAnXFxcXCcgKyBlc2NhcGVzW21hdGNoXTtcbiAgfTtcblxuICAvLyBKYXZhU2NyaXB0IG1pY3JvLXRlbXBsYXRpbmcsIHNpbWlsYXIgdG8gSm9obiBSZXNpZydzIGltcGxlbWVudGF0aW9uLlxuICAvLyBVbmRlcnNjb3JlIHRlbXBsYXRpbmcgaGFuZGxlcyBhcmJpdHJhcnkgZGVsaW1pdGVycywgcHJlc2VydmVzIHdoaXRlc3BhY2UsXG4gIC8vIGFuZCBjb3JyZWN0bHkgZXNjYXBlcyBxdW90ZXMgd2l0aGluIGludGVycG9sYXRlZCBjb2RlLlxuICAvLyBOQjogYG9sZFNldHRpbmdzYCBvbmx5IGV4aXN0cyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gIF8udGVtcGxhdGUgPSBmdW5jdGlvbih0ZXh0LCBzZXR0aW5ncywgb2xkU2V0dGluZ3MpIHtcbiAgICBpZiAoIXNldHRpbmdzICYmIG9sZFNldHRpbmdzKSBzZXR0aW5ncyA9IG9sZFNldHRpbmdzO1xuICAgIHNldHRpbmdzID0gXy5kZWZhdWx0cyh7fSwgc2V0dGluZ3MsIF8udGVtcGxhdGVTZXR0aW5ncyk7XG5cbiAgICAvLyBDb21iaW5lIGRlbGltaXRlcnMgaW50byBvbmUgcmVndWxhciBleHByZXNzaW9uIHZpYSBhbHRlcm5hdGlvbi5cbiAgICB2YXIgbWF0Y2hlciA9IFJlZ0V4cChbXG4gICAgICAoc2V0dGluZ3MuZXNjYXBlIHx8IG5vTWF0Y2gpLnNvdXJjZSxcbiAgICAgIChzZXR0aW5ncy5pbnRlcnBvbGF0ZSB8fCBub01hdGNoKS5zb3VyY2UsXG4gICAgICAoc2V0dGluZ3MuZXZhbHVhdGUgfHwgbm9NYXRjaCkuc291cmNlXG4gICAgXS5qb2luKCd8JykgKyAnfCQnLCAnZycpO1xuXG4gICAgLy8gQ29tcGlsZSB0aGUgdGVtcGxhdGUgc291cmNlLCBlc2NhcGluZyBzdHJpbmcgbGl0ZXJhbHMgYXBwcm9wcmlhdGVseS5cbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBzb3VyY2UgPSBcIl9fcCs9J1wiO1xuICAgIHRleHQucmVwbGFjZShtYXRjaGVyLCBmdW5jdGlvbihtYXRjaCwgZXNjYXBlLCBpbnRlcnBvbGF0ZSwgZXZhbHVhdGUsIG9mZnNldCkge1xuICAgICAgc291cmNlICs9IHRleHQuc2xpY2UoaW5kZXgsIG9mZnNldCkucmVwbGFjZShlc2NhcGVyLCBlc2NhcGVDaGFyKTtcbiAgICAgIGluZGV4ID0gb2Zmc2V0ICsgbWF0Y2gubGVuZ3RoO1xuXG4gICAgICBpZiAoZXNjYXBlKSB7XG4gICAgICAgIHNvdXJjZSArPSBcIicrXFxuKChfX3Q9KFwiICsgZXNjYXBlICsgXCIpKT09bnVsbD8nJzpfLmVzY2FwZShfX3QpKStcXG4nXCI7XG4gICAgICB9IGVsc2UgaWYgKGludGVycG9sYXRlKSB7XG4gICAgICAgIHNvdXJjZSArPSBcIicrXFxuKChfX3Q9KFwiICsgaW50ZXJwb2xhdGUgKyBcIikpPT1udWxsPycnOl9fdCkrXFxuJ1wiO1xuICAgICAgfSBlbHNlIGlmIChldmFsdWF0ZSkge1xuICAgICAgICBzb3VyY2UgKz0gXCInO1xcblwiICsgZXZhbHVhdGUgKyBcIlxcbl9fcCs9J1wiO1xuICAgICAgfVxuXG4gICAgICAvLyBBZG9iZSBWTXMgbmVlZCB0aGUgbWF0Y2ggcmV0dXJuZWQgdG8gcHJvZHVjZSB0aGUgY29ycmVjdCBvZmZlc3QuXG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfSk7XG4gICAgc291cmNlICs9IFwiJztcXG5cIjtcblxuICAgIC8vIElmIGEgdmFyaWFibGUgaXMgbm90IHNwZWNpZmllZCwgcGxhY2UgZGF0YSB2YWx1ZXMgaW4gbG9jYWwgc2NvcGUuXG4gICAgaWYgKCFzZXR0aW5ncy52YXJpYWJsZSkgc291cmNlID0gJ3dpdGgob2JqfHx7fSl7XFxuJyArIHNvdXJjZSArICd9XFxuJztcblxuICAgIHNvdXJjZSA9IFwidmFyIF9fdCxfX3A9JycsX19qPUFycmF5LnByb3RvdHlwZS5qb2luLFwiICtcbiAgICAgIFwicHJpbnQ9ZnVuY3Rpb24oKXtfX3ArPV9fai5jYWxsKGFyZ3VtZW50cywnJyk7fTtcXG5cIiArXG4gICAgICBzb3VyY2UgKyAncmV0dXJuIF9fcDtcXG4nO1xuXG4gICAgdHJ5IHtcbiAgICAgIHZhciByZW5kZXIgPSBuZXcgRnVuY3Rpb24oc2V0dGluZ3MudmFyaWFibGUgfHwgJ29iaicsICdfJywgc291cmNlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuXG4gICAgdmFyIHRlbXBsYXRlID0gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgcmV0dXJuIHJlbmRlci5jYWxsKHRoaXMsIGRhdGEsIF8pO1xuICAgIH07XG5cbiAgICAvLyBQcm92aWRlIHRoZSBjb21waWxlZCBzb3VyY2UgYXMgYSBjb252ZW5pZW5jZSBmb3IgcHJlY29tcGlsYXRpb24uXG4gICAgdmFyIGFyZ3VtZW50ID0gc2V0dGluZ3MudmFyaWFibGUgfHwgJ29iaic7XG4gICAgdGVtcGxhdGUuc291cmNlID0gJ2Z1bmN0aW9uKCcgKyBhcmd1bWVudCArICcpe1xcbicgKyBzb3VyY2UgKyAnfSc7XG5cbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH07XG5cbiAgLy8gQWRkIGEgXCJjaGFpblwiIGZ1bmN0aW9uLiBTdGFydCBjaGFpbmluZyBhIHdyYXBwZWQgVW5kZXJzY29yZSBvYmplY3QuXG4gIF8uY2hhaW4gPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfKG9iaik7XG4gICAgaW5zdGFuY2UuX2NoYWluID0gdHJ1ZTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH07XG5cbiAgLy8gT09QXG4gIC8vIC0tLS0tLS0tLS0tLS0tLVxuICAvLyBJZiBVbmRlcnNjb3JlIGlzIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLCBpdCByZXR1cm5zIGEgd3JhcHBlZCBvYmplY3QgdGhhdFxuICAvLyBjYW4gYmUgdXNlZCBPTy1zdHlsZS4gVGhpcyB3cmFwcGVyIGhvbGRzIGFsdGVyZWQgdmVyc2lvbnMgb2YgYWxsIHRoZVxuICAvLyB1bmRlcnNjb3JlIGZ1bmN0aW9ucy4gV3JhcHBlZCBvYmplY3RzIG1heSBiZSBjaGFpbmVkLlxuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0byBjb250aW51ZSBjaGFpbmluZyBpbnRlcm1lZGlhdGUgcmVzdWx0cy5cbiAgdmFyIHJlc3VsdCA9IGZ1bmN0aW9uKGluc3RhbmNlLCBvYmopIHtcbiAgICByZXR1cm4gaW5zdGFuY2UuX2NoYWluID8gXyhvYmopLmNoYWluKCkgOiBvYmo7XG4gIH07XG5cbiAgLy8gQWRkIHlvdXIgb3duIGN1c3RvbSBmdW5jdGlvbnMgdG8gdGhlIFVuZGVyc2NvcmUgb2JqZWN0LlxuICBfLm1peGluID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgXy5lYWNoKF8uZnVuY3Rpb25zKG9iaiksIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIHZhciBmdW5jID0gX1tuYW1lXSA9IG9ialtuYW1lXTtcbiAgICAgIF8ucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhcmdzID0gW3RoaXMuX3dyYXBwZWRdO1xuICAgICAgICBwdXNoLmFwcGx5KGFyZ3MsIGFyZ3VtZW50cyk7XG4gICAgICAgIHJldHVybiByZXN1bHQodGhpcywgZnVuYy5hcHBseShfLCBhcmdzKSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIEFkZCBhbGwgb2YgdGhlIFVuZGVyc2NvcmUgZnVuY3Rpb25zIHRvIHRoZSB3cmFwcGVyIG9iamVjdC5cbiAgXy5taXhpbihfKTtcblxuICAvLyBBZGQgYWxsIG11dGF0b3IgQXJyYXkgZnVuY3Rpb25zIHRvIHRoZSB3cmFwcGVyLlxuICBfLmVhY2goWydwb3AnLCAncHVzaCcsICdyZXZlcnNlJywgJ3NoaWZ0JywgJ3NvcnQnLCAnc3BsaWNlJywgJ3Vuc2hpZnQnXSwgZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBtZXRob2QgPSBBcnJheVByb3RvW25hbWVdO1xuICAgIF8ucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgb2JqID0gdGhpcy5fd3JhcHBlZDtcbiAgICAgIG1ldGhvZC5hcHBseShvYmosIGFyZ3VtZW50cyk7XG4gICAgICBpZiAoKG5hbWUgPT09ICdzaGlmdCcgfHwgbmFtZSA9PT0gJ3NwbGljZScpICYmIG9iai5sZW5ndGggPT09IDApIGRlbGV0ZSBvYmpbMF07XG4gICAgICByZXR1cm4gcmVzdWx0KHRoaXMsIG9iaik7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gQWRkIGFsbCBhY2Nlc3NvciBBcnJheSBmdW5jdGlvbnMgdG8gdGhlIHdyYXBwZXIuXG4gIF8uZWFjaChbJ2NvbmNhdCcsICdqb2luJywgJ3NsaWNlJ10sIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgbWV0aG9kID0gQXJyYXlQcm90b1tuYW1lXTtcbiAgICBfLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHJlc3VsdCh0aGlzLCBtZXRob2QuYXBwbHkodGhpcy5fd3JhcHBlZCwgYXJndW1lbnRzKSk7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gRXh0cmFjdHMgdGhlIHJlc3VsdCBmcm9tIGEgd3JhcHBlZCBhbmQgY2hhaW5lZCBvYmplY3QuXG4gIF8ucHJvdG90eXBlLnZhbHVlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dyYXBwZWQ7XG4gIH07XG5cbiAgLy8gUHJvdmlkZSB1bndyYXBwaW5nIHByb3h5IGZvciBzb21lIG1ldGhvZHMgdXNlZCBpbiBlbmdpbmUgb3BlcmF0aW9uc1xuICAvLyBzdWNoIGFzIGFyaXRobWV0aWMgYW5kIEpTT04gc3RyaW5naWZpY2F0aW9uLlxuICBfLnByb3RvdHlwZS52YWx1ZU9mID0gXy5wcm90b3R5cGUudG9KU09OID0gXy5wcm90b3R5cGUudmFsdWU7XG5cbiAgXy5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gJycgKyB0aGlzLl93cmFwcGVkO1xuICB9O1xuXG4gIC8vIEFNRCByZWdpc3RyYXRpb24gaGFwcGVucyBhdCB0aGUgZW5kIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQU1EIGxvYWRlcnNcbiAgLy8gdGhhdCBtYXkgbm90IGVuZm9yY2UgbmV4dC10dXJuIHNlbWFudGljcyBvbiBtb2R1bGVzLiBFdmVuIHRob3VnaCBnZW5lcmFsXG4gIC8vIHByYWN0aWNlIGZvciBBTUQgcmVnaXN0cmF0aW9uIGlzIHRvIGJlIGFub255bW91cywgdW5kZXJzY29yZSByZWdpc3RlcnNcbiAgLy8gYXMgYSBuYW1lZCBtb2R1bGUgYmVjYXVzZSwgbGlrZSBqUXVlcnksIGl0IGlzIGEgYmFzZSBsaWJyYXJ5IHRoYXQgaXNcbiAgLy8gcG9wdWxhciBlbm91Z2ggdG8gYmUgYnVuZGxlZCBpbiBhIHRoaXJkIHBhcnR5IGxpYiwgYnV0IG5vdCBiZSBwYXJ0IG9mXG4gIC8vIGFuIEFNRCBsb2FkIHJlcXVlc3QuIFRob3NlIGNhc2VzIGNvdWxkIGdlbmVyYXRlIGFuIGVycm9yIHdoZW4gYW5cbiAgLy8gYW5vbnltb3VzIGRlZmluZSgpIGlzIGNhbGxlZCBvdXRzaWRlIG9mIGEgbG9hZGVyIHJlcXVlc3QuXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoJ3VuZGVyc2NvcmUnLCBbXSwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gXztcbiAgICB9KTtcbiAgfVxufS5jYWxsKHRoaXMpKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3VuZGVyc2NvcmUvdW5kZXJzY29yZS5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBtIGZyb20gXCJtaXRocmlsXCI7XG5cbmNvbnN0IFdvcmRzID0ge1xuICAgIEl0ZW06IGZ1bmN0aW9uKGFyZ3Mpe1xuICAgICAgICB0aGlzLmphID0gbS5wcm9wKGFyZ3MuamEpO1xuICAgICAgICB0aGlzLmVuID0gbS5wcm9wKGFyZ3MuZW4pO1xuICAgICAgICB0aGlzLm1pc0NvdW50ID0gbS5wcm9wKGFyZ3MubWlzQ291bnQgfHwgMCk7XG4gICAgfSxcbiAgICBMaXN0OiBBcnJheVxufTtcblxuZXhwb3J0IGRlZmF1bHQgV29yZHM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9lczYvbW9kZWwvd29yZHMuanNcbiAqKi8iLCJpbXBvcnQgbSBmcm9tIFwibWl0aHJpbFwiO1xuXG5jb25zdCBDaGVjayA9IHtcbiAgICBJdGVtOiBmdW5jdGlvbihhcmdzKXtcbiAgICAgICAgdGhpcy5qYSA9IG0ucHJvcChhcmdzLmphKTtcbiAgICAgICAgdGhpcy5lbiA9IG0ucHJvcChhcmdzLmVuKTtcbiAgICAgICAgdGhpcy5mbGFnID0gbS5wcm9wKGFyZ3MuZmxhZyB8fCBmYWxzZSk7XG4gICAgfSxcbiAgICBMaXN0OiBBcnJheVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2s7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9lczYvbW9kZWwvY2hlY2suanNcbiAqKi8iLCJpbXBvcnQgKiBhcyBtIGZyb20gXCJtaXRocmlsXCI7XG5pbXBvcnQgdm0gZnJvbSBcIi4uL3N0b3JlXCI7XG5pbXBvcnQgXyBmcm9tIFwidW5kZXJzY29yZVwiO1xuXG5jbGFzcyBDaGVja1J1biB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5pID0gbS5wcm9wKDApO1xuICAgICAgICB0aGlzLndvcmQgPSBtLnByb3AoW10pO1xuICAgICAgICB0aGlzLnZpZXcgPSBtLnByb3AoZmFsc2UpO1xuICAgICAgICB0aGlzLmxpbWl0ID0gbS5wcm9wKDApO1xuICAgICAgICB0aGlzLm5hdmJhciA9IHZtLnNjZW5lLmNoZWNrUnVuLm5hdmJhcjtcbiAgICAgICAgdm0uZ2V0VXJsUGFyYW0oXCJpZFwiKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICB0aGlzLmxpbWl0KHJlcygpKTtcbiAgICAgICAgICAgIHZtLmFkZENoZWNrQWxsKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoXyh2bS53b3JkTGlzdCkuc2h1ZmZsZSgpKSkpO1xuICAgICAgICAgICAgaWYodm0uY2hlY2tMaXN0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIG0ucm91dGUoXCIvd29yZHNcIik7XG4gICAgICAgICAgICB0aGlzLmdldE5leHRXb3JkKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpc0ZsYWcoKXtcbiAgICAgICAgdGhpcy53b3JkKCkuZmxhZyh0cnVlKTtcbiAgICB9XG4gICAgaXNWaWV3KCl7XG4gICAgICAgIHRoaXMudmlldyh0cnVlKTtcbiAgICB9XG4gICAgaW5jcmltZW50Q291bnQoKXtcbiAgICAgICAgdm0uaW5jcmltZW50Q291bnQodGhpcy5pLCB0aGlzLmxpbWl0KTtcbiAgICB9XG4gICAgZ2V0TmV4dFdvcmQoKXtcbiAgICAgICAgdGhpcy53b3JkKHZtLmdldE5leHRXb3JkMSh0aGlzLmksIHRoaXMubGltaXQpKTtcbiAgICAgICAgdGhpcy5pbmNyaW1lbnRDb3VudCgpO1xuICAgICAgICB0aGlzLnZpZXcoZmFsc2UpO1xuICAgIH1cbiAgICBjaGVja0VuZEZsYWcoKXtcbiAgICAgICAgcmV0dXJuIHZtLmNoZWNrRW5kRmxhZyh0aGlzLmxpbWl0KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrUnVuO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZXM2L2N0cmwvY2hlY2tSdW4uanNcbiAqKi8iLCJpbXBvcnQgbSBmcm9tIFwibWl0aHJpbFwiO1xuaW1wb3J0IG5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXJcIjtcbmltcG9ydCBob21lTWVudSBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lTWVudVwiO1xuaW1wb3J0IEN0cmwgZnJvbSBcIi4uL2N0cmwvaG9tZVwiO1xuXG5sZXQgSG9tZSA9IHtcbiAgICBjb250cm9sbGVyOiAoKSA9PiBuZXcgQ3RybCgpLFxuICAgIHZpZXc6IGN0cmwgPT4ge1xuICAgICAgICByZXR1cm4gbShcIi5mbGV4X2NvbnRlbnQgZGlzcGxheUZsZXggZmxleF9jb2x1bW5cIiwgW1xuICAgICAgICAgICAgbmF2YmFyKGN0cmwubmF2YmFyKSxcbiAgICAgICAgICAgIG0oXCIuZGlzcGxheUZsZXggZmxleF9jb2x1bW5cIiwge1xuICAgICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImZsZXhcIjogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGFkZGluZ1wiOiBcIjFyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJwYWRkaW5nLXRvcFwiOiBcIjYuNXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiBcIjEwMCVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICBob21lTWVudShjdHJsLm1lbnUpXG4gICAgICAgICAgICBdKVxuICAgICAgICBdKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZXM2L3NjZW5lL2hvbWUuanNcbiAqKi8iLCJpbXBvcnQgbSBmcm9tIFwibWl0aHJpbFwiO1xuXG5jb25zdCB0aXBJdGVtID0gdGlwID0+IHtcbiAgICByZXR1cm4gbShcImxpXCIsIHRpcCk7XG59XG5cbmNvbnN0IGhvbWVNZW51SXRlbSA9IGl0ZW0gPT4ge1xuICAgIHJldHVybiBtKFwiLmNhcmRcIiwge1xuICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgIFwibWFyZ2luLWJvdHRvbVwiOiBcIjFyZW1cIlxuICAgICAgICAgICAgLy8gXCJmbGV4XCI6IFwiMVwiXG4gICAgICAgIH1cbiAgICB9LFtcbiAgICAgICAgbShcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICBcImNsYXNzXCI6IFwidS1mdWxsLXdpZHRoXCIsXG4gICAgICAgICAgICBcIm9uY2xpY2tcIjogKCkgPT57XG4gICAgICAgICAgICAgICAgbS5yb3V0ZShpdGVtLnVybClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgaXRlbS5sYWJlbCksXG4gICAgICAgIG0oXCJ1bFwiLCB7XG4gICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhZGRpbmdcIjogXCIwLjVyZW1cIixcbiAgICAgICAgICAgICAgICBcIm1hcmdpbi1ib3R0b21cIjogXCIwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxbXG4gICAgICAgICAgICBpdGVtLnRpcHMubWFwKHRpcCA9PiB0aXBJdGVtKHRpcCkpXG4gICAgICAgIF0pXG4gICAgXSk7XG59O1xuXG5jb25zdCBob21lTWVudSA9IGxpc3QgPT4ge1xuICAgIHJldHVybiBtKFwiLmRpc3BsYXlGbGV4IGZsZXhfY29sdW1uXCIsIHtcbiAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICBcImZsZXhcIjogXCIxXCJcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgbGlzdC5tYXAoaXRlbSA9PiBob21lTWVudUl0ZW0oaXRlbSkpXG4gICAgXSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBob21lTWVudTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2VzNi9jb21wb25lbnRzL2hvbWVNZW51LmpzXG4gKiovIiwiaW1wb3J0IHZtIGZyb20gXCIuLi9zdG9yZVwiO1xuXG5jbGFzcyBIb21lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5uYXZiYXIgPSB2bS5zY2VuZS5ob21lLm5hdmJhcjtcbiAgICAgICAgdGhpcy5tZW51ID0gdm0uc2NlbmUuaG9tZS5jb250ZW50Lm1lbnU7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZXM2L2N0cmwvaG9tZS5qc1xuICoqLyIsImltcG9ydCBtIGZyb20gXCJtaXRocmlsXCI7XG5pbXBvcnQgbmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclwiO1xuaW1wb3J0IHdvcmRMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL3dvcmRMaXN0XCI7XG5pbXBvcnQgQ3RybCBmcm9tIFwiLi4vY3RybC93b3Jkc1wiO1xuXG5sZXQgV29yZHMgPSB7XG4gICAgY29udHJvbGxlcjogKCkgPT4gbmV3IEN0cmwoKSxcbiAgICB2aWV3OiBjdHJsID0+IHtcbiAgICAgICAgcmV0dXJuIG0oXCIuZmxleF9jb250ZW50IGRpc3BsYXlGbGV4IGZsZXhfY29sdW1uXCIsIFtcbiAgICAgICAgICAgIG5hdmJhcihjdHJsLm5hdmJhciksXG4gICAgICAgICAgICBtKFwiLmRpc3BsYXlGbGV4IGZsZXhfY29sdW1uXCIsIHtcbiAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJmbGV4XCI6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICBcInBhZGRpbmdcIjogXCIxcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGFkZGluZy10b3BcIjogXCI2LjVyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogXCIxMDAlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgd29yZExpc3QoY3RybC53b3JkTGlzdClcbiAgICAgICAgICAgIF0pXG4gICAgICAgIF0pO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmRzO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZXM2L3NjZW5lL3dvcmRzLmpzXG4gKiovIiwiaW1wb3J0IG0gZnJvbSBcIm1pdGhyaWxcIjtcbmNvbnN0IHdvcmRJdGVtID0gKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIG0oXCIuY2FyZCBkaXNwbGF5RmxleCBmbGV4X3Jvd1wiLCB7XG4gICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgXCJtYXJnaW4tYm90dG9tXCI6IFwiMXJlbVwiLFxuICAgICAgICAgICAgXCJhbGlnbi1pdGVtc1wiOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgXCJwYWRkaW5nXCI6IFwiMnJlbVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwib25jbGlja1wiOiAoKSA9PiB7XG4gICAgICAgICAgICBtLnJvdXRlKFwiL3dvcmRzL1wiICsgaW5kZXgpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaW5kZXgpO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBtKFwiZGl2XCIsIHtcbiAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgIFwiZmxleFwiOiBcIjFcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBpdGVtLmVuKCkpLFxuICAgICAgICBtKFwiZGl2XCIsIHtcbiAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgIFwiZmxleFwiOiBcIjFcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBpdGVtLmphKCkpXG4gICAgXSk7XG59O1xuXG5jb25zdCB3b3JkTGlzdCA9IGxpc3QgPT4ge1xuICAgIHJldHVybiBtKFwiZGl2XCIsIHtcbiAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICBcImZsZXhcIjogXCIxXCJcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgbGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB3b3JkSXRlbShpdGVtLCBpbmRleCkpXG4gICAgXSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3b3JkTGlzdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2VzNi9jb21wb25lbnRzL3dvcmRMaXN0LmpzXG4gKiovIiwiaW1wb3J0IHZtIGZyb20gXCIuLi9zdG9yZVwiO1xuXG5jbGFzcyBXb3JkcyB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5uYXZiYXIgPSB2bS5zY2VuZS53b3Jkcy5uYXZiYXI7XG4gICAgICAgIHRoaXMud29yZExpc3QgPSB2bS53b3JkTGlzdDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmRzO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZXM2L2N0cmwvd29yZHMuanNcbiAqKi8iLCJpbXBvcnQgbSBmcm9tIFwibWl0aHJpbFwiO1xuaW1wb3J0IG5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXJcIjtcbmltcG9ydCB3b3JkQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy93b3JkQ2FyZFwiO1xuaW1wb3J0IEN0cmwgZnJvbSBcIi4uL2N0cmwvd29yZHNOZXdcIjtcblxubGV0IFdvcmRzTmV3ID0ge1xuICAgIGNvbnRyb2xsZXI6ICgpID0+IG5ldyBDdHJsKCksXG4gICAgdmlldzogY3RybCA9PiB7XG4gICAgICAgIHJldHVybiBtKFwiLmZsZXhfY29udGVudCBkaXNwbGF5RmxleCBmbGV4X2NvbHVtblwiLCBbXG4gICAgICAgICAgICBuYXZiYXIoY3RybC5uYXZiYXIpLFxuICAgICAgICAgICAgbShcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZmxleFwiOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwYWRkaW5nXCI6IFwiMXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICBcInBhZGRpbmctdG9wXCI6IFwiNi41cmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IFwiMTAwJVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgIHdvcmRDYXJkKHtcbiAgICAgICAgICAgICAgICAgICAgZW46IGN0cmwuZW4sXG4gICAgICAgICAgICAgICAgICAgIGphOiBjdHJsLmphXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgbShcImJyXCIpLFxuICAgICAgICAgICAgICAgIG0oXCJidXR0b24uYnV0dG9uLXByaW1hcnkgdS1mdWxsLXdpZHRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmdpbi1ib3R0b21cIjogXCIycmVtXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJvbmNsaWNrXCI6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0cmwuYWRkKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIGN0cmwuYnV0dG9uMSksXG4gICAgICAgICAgICAgICAgbShcImJyXCIpLFxuICAgICAgICAgICAgICAgIG0oXCJidXR0b24uYnV0dG9uLXByaW1hcnkgdS1mdWxsLXdpZHRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmdpbi1ib3R0b21cIjogXCIycmVtXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJvbmNsaWNrXCI6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0cmwuYWRkKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgY3RybC5idXR0b24yKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgV29yZHNOZXc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9lczYvc2NlbmUvd29yZHNOZXcuanNcbiAqKi8iLCJpbXBvcnQgbSBmcm9tIFwibWl0aHJpbFwiO1xuXG5jb25zdCB3b3JkQ2FyZCA9IGFyZ3MgPT4ge1xuICAgIHJldHVybiBtKFwiLmNhcmRcIiwge1xuICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgIFwiZmxleFwiOiBhcmdzLmZsZXgsXG4gICAgICAgICAgICBcIm1hcmdpbi1ib3R0b21cIjogXCIxcmVtXCJcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgbShcImRpdlwiLCBbXG4gICAgICAgICAgICBtKFwibGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIFwiZm9yXCI6IFwiZW5fSW5wdXRcIlxuICAgICAgICAgICAgfSwgXCLoi7Hoqp5cIiksXG4gICAgICAgICAgICBtKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICBcImNsYXNzXCI6XCJ1LWZ1bGwtd2lkdGhcIixcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiZW5fSW5wdXRcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGFyZ3MuZW4oKSxcbiAgICAgICAgICAgICAgICBcIm9uaW5wdXRcIjogbS53aXRoQXR0cihcInZhbHVlXCIsIGFyZ3MuZW4pXG4gICAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgbShcImRpdlwiLCBbXG4gICAgICAgICAgICBtKFwibGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIFwiZm9yXCI6IFwiamFfSW5wdXRcIlxuICAgICAgICAgICAgfSwgXCLml6XmnKzoqp5cIiksXG4gICAgICAgICAgICBtKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICBcImNsYXNzXCI6XCJ1LWZ1bGwtd2lkdGhcIixcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiamFfSW5wdXRcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGFyZ3MuamEoKSxcbiAgICAgICAgICAgICAgICBcIm9uaW5wdXRcIjogbS53aXRoQXR0cihcInZhbHVlXCIsIGFyZ3MuamEpXG4gICAgICAgICAgICB9KVxuICAgICAgICBdKVxuICAgIF0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd29yZENhcmQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9lczYvY29tcG9uZW50cy93b3JkQ2FyZC5qc1xuICoqLyIsImltcG9ydCBtIGZyb20gXCJtaXRocmlsXCI7XG5pbXBvcnQgdm0gZnJvbSBcIi4uL3N0b3JlXCI7XG5cbmNsYXNzIFdvcmRzTmV3IHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLm5hdmJhciA9IHZtLnNjZW5lLndvcmRzTmV3Lm5hdmJhcjtcbiAgICAgICAgdGhpcy5idXR0b24xID0gdm0uc2NlbmUud29yZHNOZXcuY29udGVudC5idXR0b24xO1xuICAgICAgICB0aGlzLmJ1dHRvbjIgPSB2bS5zY2VuZS53b3Jkc05ldy5jb250ZW50LmJ1dHRvbjI7XG4gICAgICAgIHRoaXMuZW4gPSBtLnByb3AoXCJcIik7XG4gICAgICAgIHRoaXMuamEgPSBtLnByb3AoXCJcIik7XG4gICAgfVxuICAgIGFkZChjb250aW51KXtcbiAgICAgICAgaWYodGhpcy5lbigpID09PSBcIlwiIHx8IHRoaXMuamEoKSA9PT0gXCJcIikgcmV0dXJuO1xuICAgICAgICB2bS5hZGQodm0ud29yZExpc3QsIHtcbiAgICAgICAgICAgIGVuOiB0aGlzLmVuKCksXG4gICAgICAgICAgICBqYTogdGhpcy5qYSgpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVuKFwiXCIpO1xuICAgICAgICB0aGlzLmphKFwiXCIpO1xuICAgICAgICBpZighY29udGludSl7XG4gICAgICAgICAgICBtLnJvdXRlKFwiL3dvcmRzXCIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXb3Jkc05ldztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2VzNi9jdHJsL3dvcmRzTmV3LmpzXG4gKiovIiwiaW1wb3J0IG0gZnJvbSBcIm1pdGhyaWxcIjtcbmltcG9ydCBuYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2YmFyXCI7XG5pbXBvcnQgd29yZENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvd29yZENhcmRcIjtcbmltcG9ydCBDdHJsIGZyb20gXCIuLi9jdHJsL1dvcmRzRWRpdFwiO1xuXG5jb25zdCBXb3Jkc0VkaXQgPSB7XG4gICAgY29udHJvbGxlcjogKCkgPT4gbmV3IEN0cmwoKSxcbiAgICB2aWV3OiBjdHJsID0+IHtcbiAgICAgICAgcmV0dXJuIG0oXCIuZmxleF9jb250ZW50IGRpc3BsYXlGbGV4IGZsZXhfY29sdW1uXCIsIFtcbiAgICAgICAgICAgIG5hdmJhcihjdHJsLm5hdmJhciksXG4gICAgICAgICAgICBtKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJmbGV4XCI6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICBcInBhZGRpbmdcIjogXCIxcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGFkZGluZy10b3BcIjogXCI2LjVyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogXCIxMDAlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgd29yZENhcmQoe1xuICAgICAgICAgICAgICAgICAgICBlbjogY3RybC5lbixcbiAgICAgICAgICAgICAgICAgICAgamE6IGN0cmwuamFcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBtKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgbShcImJ1dHRvbi5idXR0b24tcHJpbWFyeSB1LWZ1bGwtd2lkdGhcIiwge1xuICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWFyZ2luLWJvdHRvbVwiOiBcIjJyZW1cIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcIm9uY2xpY2tcIjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3RybC5hZGQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIGN0cmwuYnV0dG9uKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgV29yZHNFZGl0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZXM2L3NjZW5lL1dvcmRzRWRpdC5qc1xuICoqLyIsImltcG9ydCBtIGZyb20gXCJtaXRocmlsXCI7XG5pbXBvcnQgdm0gZnJvbSBcIi4uL3N0b3JlXCI7XG5cbmNsYXNzIFdvcmRzRWRpdCB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdm0uZ2V0VXJsUGFyYW0oXCJpZFwiKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmkgPSByZXM7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwYXJhbTpcIiArIHJlcygpICsgXCIgZGF0YTpcIiArIHZtLndvcmRMaXN0W3JlcygpXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXZiYXIgPSB2bS5zY2VuZS53b3Jkc0VkaXQubmF2YmFyO1xuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uID0gdm0uc2NlbmUud29yZHNFZGl0LmNvbnRlbnQuYnV0dG9uO1xuICAgICAgICAgICAgICAgIHRoaXMuZW4gPSBtLnByb3Aodm0ud29yZExpc3RbcmVzKCldLmVuKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuamEgPSBtLnByb3Aodm0ud29yZExpc3RbcmVzKCldLmphKCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIGFkZCgpe1xuICAgICAgICBpZih0aGlzLmVuKCkgPT09IFwiXCIgfHwgdGhpcy5qYSgpID09PSBcIlwiKSByZXR1cm47XG4gICAgICAgIHZtLndvcmRMaXN0W3RoaXMuaSgpXS5lbih0aGlzLmVuKCkpO1xuICAgICAgICB2bS53b3JkTGlzdFt0aGlzLmkoKV0uamEodGhpcy5qYSgpKTtcbiAgICAgICAgdGhpcy5lbihcIlwiKTtcbiAgICAgICAgdGhpcy5qYShcIlwiKTtcbiAgICAgICAgbS5yb3V0ZShcIi93b3Jkc1wiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmRzRWRpdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2VzNi9jdHJsL1dvcmRzRWRpdC5qc1xuICoqLyIsImltcG9ydCBtIGZyb20gXCJtaXRocmlsXCI7XG5pbXBvcnQgbmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclwiO1xuaW1wb3J0IGNoZWNrQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9jaGVja0NhcmRcIjtcbmltcG9ydCBDdHJsIGZyb20gXCIuLi9jdHJsL2NoZWNrUnVuXCI7XG5pbXBvcnQgY2hlY2tCdXR0b25zIGZyb20gXCIuLi9jb21wb25lbnRzL2NoZWNrQnV0dG9uc1wiO1xuXG5sZXQgQ2hlY2tSdW4gPSB7XG4gICAgY29udHJvbGxlcjogKCkgPT4gbmV3IEN0cmwoKSxcbiAgICB2aWV3OiBjdHJsID0+IHtcbiAgICAgICAgcmV0dXJuIG0oXCIuZmxleF9jb250ZW50IGRpc3BsYXlGbGV4IGZsZXhfY29sdW1uXCIsIFtcbiAgICAgICAgICAgIG5hdmJhcihjdHJsLm5hdmJhciksXG4gICAgICAgICAgICBtKFwiLmRpc3BsYXlGbGV4IGZsZXhfY29sdW1uXCIsIHtcbiAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJmbGV4XCI6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICBcInBhZGRpbmdcIjogXCIxcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGFkZGluZy10b3BcIjogXCI2LjVyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogXCIxMDAlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgY2hlY2tDYXJkKHtcbiAgICAgICAgICAgICAgICAgICAgZW46IGN0cmwud29yZCgpLmVuLFxuICAgICAgICAgICAgICAgICAgICBqYTogY3RybC53b3JkKCkuamEsXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IFwiNFwiLFxuICAgICAgICAgICAgICAgICAgICBhY3Q6IGN0cmwuaXNWaWV3LFxuICAgICAgICAgICAgICAgICAgICB2aWV3OiBjdHJsLnZpZXdcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBtKFwiaHJcIiksXG4gICAgICAgICAgICAgICAgY2hlY2tCdXR0b25zKHtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgIHI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0cmwuaXNGbGFnKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoY3RybC5jaGVja0VuZEZsYWcoKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0ucm91dGUoXCIvaG9tZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3RybC5nZXROZXh0V29yZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIuOCj+OBi+OCi1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0cmwuZ2V0TmV4dFdvcmQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLjgo/jgYvjgonjgarjgYRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgIF0pO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrUnVuO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZXM2L3NjZW5lL0NoZWNrUnVuLmpzXG4gKiovIiwiaW1wb3J0IG0gZnJvbSBcIm1pdGhyaWxcIjtcblxuY29uc3QgY2hlY2tDYXJkID0gYXJncyA9PiB7XG4gICAgcmV0dXJuIG0oXCIuY2FyZCBkaXNwbGF5RmxleFwiLCB7XG4gICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgXCJmbGV4XCI6IGFyZ3MuZmxleCxcbiAgICAgICAgICAgIFwibWFyZ2luLWJvdHRvbVwiOiBcIjFyZW1cIixcbiAgICAgICAgICAgIFwiYWxpZ24taXRlbXNcIjogXCJjZW50ZXJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm9uY2xpY2tcIjogKCkgPT4ge1xuICAgICAgICAgICAgYXJncy5hY3QoKVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBtKFwiLmZsZXhfY29udGVudFwiLCBbXG4gICAgICAgICAgICBtKFwiaDNcIiwge1xuICAgICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiBcIjFlbVwiLFxuICAgICAgICAgICAgICAgICAgICBcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGFyZ3MuZW4oKSksXG4gICAgICAgICAgICBtKFwiaHJcIiksXG4gICAgICAgICAgICBtKFwiaDNcIiwge1xuICAgICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiBcIjFlbVwiLFxuICAgICAgICAgICAgICAgICAgICBcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGFyZ3MudmlldygpID8gYXJncy5qYSgpIDogXCJcIilcbiAgICAgICAgXSlcbiAgICBdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNoZWNrQ2FyZDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2VzNi9jb21wb25lbnRzL2NoZWNrQ2FyZC5qc1xuICoqLyIsImltcG9ydCBtIGZyb20gXCJtaXRocmlsXCI7XG5cbi8qKlxuQHBhcmFte09iamVjdH0gYXJncyDjg5zjgr/jg7Pjga7jgqLjgq/jgrfjg6fjg7NcbkByZXR1cm57T2JqZWN0fVxuKi9cbmNvbnN0IGNoZWNrQnV0dG9ucyA9IGFyZ3MgPT4ge1xuICAgIHJldHVybiBtKFwiLmRpc3BsYXlGbGV4IGZsZXhfcm93XCIsIHtcbiAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICBcImZsZXhcIjogYXJncy5mbGV4LFxuICAgICAgICAgICAgXCJtYXJnaW4tYm90dG9tXCI6IFwiM3JlbVwiXG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIG0oXCJidXR0b25cIiwge1xuICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJmbGV4XCI6IFwiMVwiLFxuICAgICAgICAgICAgICAgIFwibWFyZ2luLXJpZ2h0XCI6IFwiMC41cmVtXCIsXG4gICAgICAgICAgICAgICAgXCJib3JkZXItY29sb3JcIjogXCIjZmI1OTczXCIsXG4gICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kXCI6IFwiI2ZiNTk3M1wiLFxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm9uY2xpY2tcIjogYXJncy5sLmFjdGlvblxuICAgICAgICB9LCBhcmdzLmwubGFiZWwpLFxuICAgICAgICBtKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgIFwiZmxleFwiOiBcIjFcIixcbiAgICAgICAgICAgICAgICBcIm1hcmdpbi1sZWZ0XCI6IFwiMC41cmVtXCIsXG4gICAgICAgICAgICAgICAgXCJib3JkZXItY29sb3JcIjogXCIjMWJlODlhXCIsXG4gICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kXCI6IFwiIzNhZTBhMVwiLFxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm9uY2xpY2tcIjogYXJncy5yLmFjdGlvblxuICAgICAgICB9LCBhcmdzLnIubGFiZWwpXG4gICAgXSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjaGVja0J1dHRvbnM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9lczYvY29tcG9uZW50cy9jaGVja0J1dHRvbnMuanNcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3NrZWxldG9uLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9za2VsZXRvbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9za2VsZXRvbi5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9ib3dlcl9jb21wb25lbnRzL3NrZWxldG9uL2Nzcy9za2VsZXRvbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiogU2tlbGV0b24gVjIuMC40XFxuKiBDb3B5cmlnaHQgMjAxNCwgRGF2ZSBHYW1hY2hlXFxuKiB3d3cuZ2V0c2tlbGV0b24uY29tXFxuKiBGcmVlIHRvIHVzZSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXFxuKiBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxcbiogMTIvMjkvMjAxNFxcbiovXFxuXFxuXFxuLyogVGFibGUgb2YgY29udGVudHNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJNcXG4tIEdyaWRcXG4tIEJhc2UgU3R5bGVzXFxuLSBUeXBvZ3JhcGh5XFxuLSBMaW5rc1xcbi0gQnV0dG9uc1xcbi0gRm9ybXNcXG4tIExpc3RzXFxuLSBDb2RlXFxuLSBUYWJsZXNcXG4tIFNwYWNpbmdcXG4tIFV0aWxpdGllc1xcbi0gQ2xlYXJpbmdcXG4tIE1lZGlhIFF1ZXJpZXNcXG4qL1xcblxcblxcbi8qIEdyaWRcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG4uY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA5NjBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcbi5jb2x1bW4sXFxuLmNvbHVtbnMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbG9hdDogbGVmdDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4vKiBGb3IgZGV2aWNlcyBsYXJnZXIgdGhhbiA0MDBweCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA0MDBweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIHBhZGRpbmc6IDA7IH1cXG59XFxuXFxuLyogRm9yIGRldmljZXMgbGFyZ2VyIHRoYW4gNTUwcHggKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICB3aWR0aDogODAlOyB9XFxuICAuY29sdW1uLFxcbiAgLmNvbHVtbnMge1xcbiAgICBtYXJnaW4tbGVmdDogNCU7IH1cXG4gIC5jb2x1bW46Zmlyc3QtY2hpbGQsXFxuICAuY29sdW1uczpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwOyB9XFxuXFxuICAub25lLmNvbHVtbixcXG4gIC5vbmUuY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNC42NjY2NjY2NjY2NyU7IH1cXG4gIC50d28uY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMTMuMzMzMzMzMzMzMyU7IH1cXG4gIC50aHJlZS5jb2x1bW5zICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMjIlOyAgICAgICAgICAgIH1cXG4gIC5mb3VyLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMzAuNjY2NjY2NjY2NyU7IH1cXG4gIC5maXZlLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMzkuMzMzMzMzMzMzMyU7IH1cXG4gIC5zaXguY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNDglOyAgICAgICAgICAgIH1cXG4gIC5zZXZlbi5jb2x1bW5zICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNTYuNjY2NjY2NjY2NyU7IH1cXG4gIC5laWdodC5jb2x1bW5zICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNjUuMzMzMzMzMzMzMyU7IH1cXG4gIC5uaW5lLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNzQuMCU7ICAgICAgICAgIH1cXG4gIC50ZW4uY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogODIuNjY2NjY2NjY2NyU7IH1cXG4gIC5lbGV2ZW4uY29sdW1ucyAgICAgICAgICAgICAgICAgeyB3aWR0aDogOTEuMzMzMzMzMzMzMyU7IH1cXG4gIC50d2VsdmUuY29sdW1ucyAgICAgICAgICAgICAgICAgeyB3aWR0aDogMTAwJTsgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4gIC5vbmUtdGhpcmQuY29sdW1uICAgICAgICAgICAgICAgeyB3aWR0aDogMzAuNjY2NjY2NjY2NyU7IH1cXG4gIC50d28tdGhpcmRzLmNvbHVtbiAgICAgICAgICAgICAgeyB3aWR0aDogNjUuMzMzMzMzMzMzMyU7IH1cXG5cXG4gIC5vbmUtaGFsZi5jb2x1bW4gICAgICAgICAgICAgICAgeyB3aWR0aDogNDglOyB9XFxuXFxuICAvKiBPZmZzZXRzICovXFxuICAub2Zmc2V0LWJ5LW9uZS5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LW9uZS5jb2x1bW5zICAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDguNjY2NjY2NjY2NjclOyB9XFxuICAub2Zmc2V0LWJ5LXR3by5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LXR3by5jb2x1bW5zICAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDE3LjMzMzMzMzMzMzMlOyB9XFxuICAub2Zmc2V0LWJ5LXRocmVlLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktdGhyZWUuY29sdW1ucyAgICAgICAgeyBtYXJnaW4tbGVmdDogMjYlOyAgICAgICAgICAgIH1cXG4gIC5vZmZzZXQtYnktZm91ci5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LWZvdXIuY29sdW1ucyAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDM0LjY2NjY2NjY2NjclOyB9XFxuICAub2Zmc2V0LWJ5LWZpdmUuY29sdW1uLFxcbiAgLm9mZnNldC1ieS1maXZlLmNvbHVtbnMgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA0My4zMzMzMzMzMzMzJTsgfVxcbiAgLm9mZnNldC1ieS1zaXguY29sdW1uLFxcbiAgLm9mZnNldC1ieS1zaXguY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA1MiU7ICAgICAgICAgICAgfVxcbiAgLm9mZnNldC1ieS1zZXZlbi5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LXNldmVuLmNvbHVtbnMgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDYwLjY2NjY2NjY2NjclOyB9XFxuICAub2Zmc2V0LWJ5LWVpZ2h0LmNvbHVtbixcXG4gIC5vZmZzZXQtYnktZWlnaHQuY29sdW1ucyAgICAgICAgeyBtYXJnaW4tbGVmdDogNjkuMzMzMzMzMzMzMyU7IH1cXG4gIC5vZmZzZXQtYnktbmluZS5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LW5pbmUuY29sdW1ucyAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDc4LjAlOyAgICAgICAgICB9XFxuICAub2Zmc2V0LWJ5LXRlbi5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LXRlbi5jb2x1bW5zICAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDg2LjY2NjY2NjY2NjclOyB9XFxuICAub2Zmc2V0LWJ5LWVsZXZlbi5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LWVsZXZlbi5jb2x1bW5zICAgICAgIHsgbWFyZ2luLWxlZnQ6IDk1LjMzMzMzMzMzMzMlOyB9XFxuXFxuICAub2Zmc2V0LWJ5LW9uZS10aGlyZC5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LW9uZS10aGlyZC5jb2x1bW5zICAgIHsgbWFyZ2luLWxlZnQ6IDM0LjY2NjY2NjY2NjclOyB9XFxuICAub2Zmc2V0LWJ5LXR3by10aGlyZHMuY29sdW1uLFxcbiAgLm9mZnNldC1ieS10d28tdGhpcmRzLmNvbHVtbnMgICB7IG1hcmdpbi1sZWZ0OiA2OS4zMzMzMzMzMzMzJTsgfVxcblxcbiAgLm9mZnNldC1ieS1vbmUtaGFsZi5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LW9uZS1oYWxmLmNvbHVtbnMgICAgIHsgbWFyZ2luLWxlZnQ6IDUyJTsgfVxcblxcbn1cXG5cXG5cXG4vKiBCYXNlIFN0eWxlc1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbi8qIE5PVEVcXG5odG1sIGlzIHNldCB0byA2Mi41JSBzbyB0aGF0IGFsbCB0aGUgUkVNIG1lYXN1cmVtZW50cyB0aHJvdWdob3V0IFNrZWxldG9uXFxuYXJlIGJhc2VkIG9uIDEwcHggc2l6aW5nLiBTbyBiYXNpY2FsbHkgMS41cmVtID0gMTVweCA6KSAqL1xcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTsgfVxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxLjVlbTsgLyogY3VycmVudGx5IGVtcyBjYXVzZSBjaHJvbWUgYnVnIG1pc2ludGVycHJldGluZyByZW1zIG9uIGJvZHkgZWxlbWVudCAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiLCBcXFwiSGVsdmV0aWNhTmV1ZVxcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogIzIyMjsgfVxcblxcblxcbi8qIFR5cG9ncmFwaHlcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDsgfVxcbmgxIHsgZm9udC1zaXplOiA0LjByZW07IGxpbmUtaGVpZ2h0OiAxLjI7ICBsZXR0ZXItc3BhY2luZzogLS4xcmVtO31cXG5oMiB7IGZvbnQtc2l6ZTogMy42cmVtOyBsaW5lLWhlaWdodDogMS4yNTsgbGV0dGVyLXNwYWNpbmc6IC0uMXJlbTsgfVxcbmgzIHsgZm9udC1zaXplOiAzLjByZW07IGxpbmUtaGVpZ2h0OiAxLjM7ICBsZXR0ZXItc3BhY2luZzogLS4xcmVtOyB9XFxuaDQgeyBmb250LXNpemU6IDIuNHJlbTsgbGluZS1oZWlnaHQ6IDEuMzU7IGxldHRlci1zcGFjaW5nOiAtLjA4cmVtOyB9XFxuaDUgeyBmb250LXNpemU6IDEuOHJlbTsgbGluZS1oZWlnaHQ6IDEuNTsgIGxldHRlci1zcGFjaW5nOiAtLjA1cmVtOyB9XFxuaDYgeyBmb250LXNpemU6IDEuNXJlbTsgbGluZS1oZWlnaHQ6IDEuNjsgIGxldHRlci1zcGFjaW5nOiAwOyB9XFxuXFxuLyogTGFyZ2VyIHRoYW4gcGhhYmxldCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xcbiAgaDEgeyBmb250LXNpemU6IDUuMHJlbTsgfVxcbiAgaDIgeyBmb250LXNpemU6IDQuMnJlbTsgfVxcbiAgaDMgeyBmb250LXNpemU6IDMuNnJlbTsgfVxcbiAgaDQgeyBmb250LXNpemU6IDMuMHJlbTsgfVxcbiAgaDUgeyBmb250LXNpemU6IDIuNHJlbTsgfVxcbiAgaDYgeyBmb250LXNpemU6IDEuNXJlbTsgfVxcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbi10b3A6IDA7IH1cXG5cXG5cXG4vKiBMaW5rc1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbmEge1xcbiAgY29sb3I6ICMxRUFFREI7IH1cXG5hOmhvdmVyIHtcXG4gIGNvbG9yOiAjMEZBMENFOyB9XFxuXFxuXFxuLyogQnV0dG9uc1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbi5idXR0b24sXFxuYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiAzOHB4O1xcbiAgcGFkZGluZzogMCAzMHB4O1xcbiAgY29sb3I6ICM1NTU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XFxuICBsZXR0ZXItc3BhY2luZzogLjFyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2JiYjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4uYnV0dG9uOmhvdmVyLFxcbmJ1dHRvbjpob3ZlcixcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlcixcXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdOmhvdmVyLFxcbmlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdOmhvdmVyLFxcbi5idXR0b246Zm9jdXMsXFxuYnV0dG9uOmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdOmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl06Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl06Zm9jdXMge1xcbiAgY29sb3I6ICMzMzM7XFxuICBib3JkZXItY29sb3I6ICM4ODg7XFxuICBvdXRsaW5lOiAwOyB9XFxuLmJ1dHRvbi5idXR0b24tcHJpbWFyeSxcXG5idXR0b24uYnV0dG9uLXByaW1hcnksXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0uYnV0dG9uLXByaW1hcnksXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXS5idXR0b24tcHJpbWFyeSxcXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXS5idXR0b24tcHJpbWFyeSB7XFxuICBjb2xvcjogI0ZGRjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzM0MzRjA7XFxuICBib3JkZXItY29sb3I6ICMzM0MzRjA7IH1cXG4uYnV0dG9uLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLFxcbmJ1dHRvbi5idXR0b24tcHJpbWFyeTpob3ZlcixcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXS5idXR0b24tcHJpbWFyeTpob3ZlcixcXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLFxcbmlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLFxcbi5idXR0b24uYnV0dG9uLXByaW1hcnk6Zm9jdXMsXFxuYnV0dG9uLmJ1dHRvbi1wcmltYXJ5OmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLmJ1dHRvbi1wcmltYXJ5OmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0uYnV0dG9uLXByaW1hcnk6Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0uYnV0dG9uLXByaW1hcnk6Zm9jdXMge1xcbiAgY29sb3I6ICNGRkY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUVBRURCO1xcbiAgYm9yZGVyLWNvbG9yOiAjMUVBRURCOyB9XFxuXFxuXFxuLyogRm9ybXNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG5pbnB1dFt0eXBlPVxcXCJlbWFpbFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJ0ZWxcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJ1cmxcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJwYXNzd29yZFxcXCJdLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBoZWlnaHQ6IDM4cHg7XFxuICBwYWRkaW5nOiA2cHggMTBweDsgLyogVGhlIDZweCB2ZXJ0aWNhbGx5IGNlbnRlcnMgdGV4dCBvbiBGRiwgaWdub3JlZCBieSBXZWJraXQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRDFEMUQxO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4vKiBSZW1vdmVzIGF3a3dhcmQgZGVmYXVsdCBzdHlsZXMgb24gc29tZSBpbnB1dHMgZm9yIGlPUyAqL1xcbmlucHV0W3R5cGU9XFxcImVtYWlsXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInRlbFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInVybFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInBhc3N3b3JkXFxcIl0sXFxudGV4dGFyZWEge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgICBhcHBlYXJhbmNlOiBub25lOyB9XFxudGV4dGFyZWEge1xcbiAgbWluLWhlaWdodDogNjVweDtcXG4gIHBhZGRpbmctdG9wOiA2cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNnB4OyB9XFxuaW5wdXRbdHlwZT1cXFwiZW1haWxcXFwiXTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwidGVsXFxcIl06Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwidXJsXFxcIl06Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwicGFzc3dvcmRcXFwiXTpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyxcXG5zZWxlY3Q6Zm9jdXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzQzNGMDtcXG4gIG91dGxpbmU6IDA7IH1cXG5sYWJlbCxcXG5sZWdlbmQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7IH1cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyLXdpZHRoOiAwOyB9XFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGRpc3BsYXk6IGlubGluZTsgfVxcbmxhYmVsID4gLmxhYmVsLWJvZHkge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IC41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxcblxcblxcbi8qIExpc3RzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxudWwge1xcbiAgbGlzdC1zdHlsZTogY2lyY2xlIGluc2lkZTsgfVxcbm9sIHtcXG4gIGxpc3Qtc3R5bGU6IGRlY2ltYWwgaW5zaWRlOyB9XFxub2wsIHVsIHtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG4gIG1hcmdpbi10b3A6IDA7IH1cXG51bCB1bCxcXG51bCBvbCxcXG5vbCBvbCxcXG5vbCB1bCB7XFxuICBtYXJnaW46IDEuNXJlbSAwIDEuNXJlbSAzcmVtO1xcbiAgZm9udC1zaXplOiA5MCU7IH1cXG5saSB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtOyB9XFxuXFxuXFxuLyogQ29kZVxcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbmNvZGUge1xcbiAgcGFkZGluZzogLjJyZW0gLjVyZW07XFxuICBtYXJnaW46IDAgLjJyZW07XFxuICBmb250LXNpemU6IDkwJTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBiYWNrZ3JvdW5kOiAjRjFGMUYxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0UxRTFFMTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDsgfVxcbnByZSA+IGNvZGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBwcmU7IH1cXG5cXG5cXG4vKiBUYWJsZXNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG50aCxcXG50ZCB7XFxuICBwYWRkaW5nOiAxMnB4IDE1cHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMUUxRTE7IH1cXG50aDpmaXJzdC1jaGlsZCxcXG50ZDpmaXJzdC1jaGlsZCB7XFxuICBwYWRkaW5nLWxlZnQ6IDA7IH1cXG50aDpsYXN0LWNoaWxkLFxcbnRkOmxhc3QtY2hpbGQge1xcbiAgcGFkZGluZy1yaWdodDogMDsgfVxcblxcblxcbi8qIFNwYWNpbmdcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG5idXR0b24sXFxuLmJ1dHRvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtOyB9XFxuaW5wdXQsXFxudGV4dGFyZWEsXFxuc2VsZWN0LFxcbmZpZWxkc2V0IHtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTsgfVxcbnByZSxcXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmZpZ3VyZSxcXG50YWJsZSxcXG5wLFxcbnVsLFxcbm9sLFxcbmZvcm0ge1xcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtOyB9XFxuXFxuXFxuLyogVXRpbGl0aWVzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuLnUtZnVsbC13aWR0aCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4udS1tYXgtZnVsbC13aWR0aCB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuLnUtcHVsbC1yaWdodCB7XFxuICBmbG9hdDogcmlnaHQ7IH1cXG4udS1wdWxsLWxlZnQge1xcbiAgZmxvYXQ6IGxlZnQ7IH1cXG5cXG5cXG4vKiBNaXNjXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuaHIge1xcbiAgbWFyZ2luLXRvcDogM3JlbTtcXG4gIG1hcmdpbi1ib3R0b206IDMuNXJlbTtcXG4gIGJvcmRlci13aWR0aDogMDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTFFMUUxOyB9XFxuXFxuXFxuLyogQ2xlYXJpbmdcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG5cXG4vKiBTZWxmIENsZWFyaW5nIEdvb2RuZXNzICovXFxuLmNvbnRhaW5lcjphZnRlcixcXG4ucm93OmFmdGVyLFxcbi51LWNmIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogdGFibGU7XFxuICBjbGVhcjogYm90aDsgfVxcblxcblxcbi8qIE1lZGlhIFF1ZXJpZXNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG4vKlxcbk5vdGU6IFRoZSBiZXN0IHdheSB0byBzdHJ1Y3R1cmUgdGhlIHVzZSBvZiBtZWRpYSBxdWVyaWVzIGlzIHRvIGNyZWF0ZSB0aGUgcXVlcmllc1xcbm5lYXIgdGhlIHJlbGV2YW50IGNvZGUuIEZvciBleGFtcGxlLCBpZiB5b3Ugd2FudGVkIHRvIGNoYW5nZSB0aGUgc3R5bGVzIGZvciBidXR0b25zXFxub24gc21hbGwgZGV2aWNlcywgcGFzdGUgdGhlIG1vYmlsZSBxdWVyeSBjb2RlIHVwIGluIHRoZSBidXR0b25zIHNlY3Rpb24gYW5kIHN0eWxlIGl0XFxudGhlcmUuXFxuKi9cXG5cXG5cXG4vKiBMYXJnZXIgdGhhbiBtb2JpbGUgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIHt9XFxuXFxuLyogTGFyZ2VyIHRoYW4gcGhhYmxldCAoYWxzbyBwb2ludCB3aGVuIGdyaWQgYmVjb21lcyBhY3RpdmUpICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7fVxcblxcbi8qIExhcmdlciB0aGFuIHRhYmxldCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge31cXG5cXG4vKiBMYXJnZXIgdGhhbiBkZXNrdG9wICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge31cXG5cXG4vKiBMYXJnZXIgdGhhbiBEZXNrdG9wIEhEICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge31cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vYm93ZXJfY29tcG9uZW50cy9za2VsZXRvbi9jc3Mvc2tlbGV0b24uY3NzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcclxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xyXG5cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcclxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xyXG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcclxuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcclxuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcclxuXHRpZihpZHggPj0gMCkge1xyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XHJcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcclxuXHJcblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXHJcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwKSB7XHJcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2Nzcy9zdHlsZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxuICBtYXJnaW46IDBweDtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbW96LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleDtcXG4gIGRpc3BsYXk6IC1vLWZsZXg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IC13ZWJraXQtY29sdW1uO1xcbiAgZmxleC1kaXJlY3Rpb246IC1tb3otY29sdW1uO1xcbiAgZmxleC1kaXJlY3Rpb246IC1tcy1jb2x1bW47XFxuICBmbGV4LWRpcmVjdGlvbjogLW8tY29sdW1uO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgICBkaXNwbGF5OiAtbW96LWZsZXg7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4O1xcbiAgICBkaXNwbGF5OiAtby1mbGV4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZGlzcGxheUZsZXgge1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1vei1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXg7XFxuICBkaXNwbGF5OiAtby1mbGV4O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmRpc3BsYXlGbGV4Rml4ZWQge1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1vei1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXg7XFxuICBkaXNwbGF5OiAtby1mbGV4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZmxleF9yb3cge1xcbiAgZmxleC1kaXJlY3Rpb246IC13ZWJraXQtcm93O1xcbiAgZmxleC1kaXJlY3Rpb246IC1tb3otcm93O1xcbiAgZmxleC1kaXJlY3Rpb246IC1tcy1yb3c7XFxuICBmbGV4LWRpcmVjdGlvbjogLW8tcm93O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmZsZXhfY29sdW1uIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiAtd2Via2l0LWNvbHVtbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiAtbW96LWNvbHVtbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiAtbXMtY29sdW1uO1xcbiAgZmxleC1kaXJlY3Rpb246IC1vLWNvbHVtbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mbGV4X25vd3JhcCB7XFxuICBmbGV4LXdyYXA6IC13ZWJraXQtbm93cmFwO1xcbiAgZmxleC13cmFwOiAtbW96LW5vd3JhcDtcXG4gIGZsZXgtd3JhcDogLW1zLW5vd3JhcDtcXG4gIGZsZXgtd3JhcDogLW8tbm93cmFwO1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxufVxcblxcbi5mbGV4X2NvbnRlbnQge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4uY2FyZCB7XFxuICB3aWR0aDogYXV0bztcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3gtc2hhZG93OiAwIDJweCA1cHggI2NjYztcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbi5jYXJkLWltZyB7XFxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLmNhcmQtY29udGVudCB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4uY2FyZC10aXRsZSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICMzMzM7XFxufVxcbi5jYXJkLXRleHQge1xcbiAgY29sb3I6ICM3Nzc7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG4uY2FyZC1saW5rIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuLmNhcmQtbGluayBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjMGJkO1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxufVxcbi5jYXJkLWxpbmsgYTpob3ZlciB7XFxuICBjb2xvcjogIzAwOTBhYTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL3NyYy9jc3Mvc3R5bGUuY3NzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=