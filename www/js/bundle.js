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
	
	var _Check = __webpack_require__(20);
	
	var _Check2 = _interopRequireDefault(_Check);
	
	var _CheckRun = __webpack_require__(24);
	
	var _CheckRun2 = _interopRequireDefault(_CheckRun);
	
	__webpack_require__(27);
	
	__webpack_require__(31);
	
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
	_mithril2.default.route(document.body, "/home", {
	    "/home": _home2.default,
	    "/words": _words2.default,
	    "/words/new": _wordsNew2.default,
	    "/words/:id": _WordsEdit2.default,
	    "/check/:id": _CheckRun2.default,
	    "/check": _Check2.default
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
	                        return _mithril2.default.route("/home");
	                    }
	                },
	                r_btn: {
	                    label: "追加",
	                    act: function act() {
	                        return _mithril2.default.route("/words/new");
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
	                        return _mithril2.default.route("/words");
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
	                        return _mithril2.default.route("/words");
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
	                        return _mithril2.default.route("/home");
	                    }
	                },
	                r_btn: {
	                    label: "ヘルプ",
	                    act: function act() {}
	                }
	            },
	            content: {
	                select: {
	                    name: "checkLimitSelect",
	                    label: "問題数の選択",
	                    option: [{
	                        value: 5,
	                        title: "5問"
	                    }, {
	                        value: 10,
	                        title: "10問"
	                    }, {
	                        value: 15,
	                        title: "15問"
	                    }, {
	                        value: 20,
	                        title: "20問"
	                    }]
	                },
	                button: "暗記カードへ"
	            }
	        },
	        checkRun: {
	            navbar: {
	                title: "暗記カード - 実践",
	                l_btn: {
	                    label: "戻る",
	                    act: function act() {
	                        return _mithril2.default.route("/check");
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
	                        return _mithril2.default.route("/home");
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
	                        return _mithril2.default.route("/test");
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
	                        return _mithril2.default.route("/home");
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
	        return;
	    },
	    add: function add(list, addItem) {
	        if (addItem) {
	            list.push(new _words2.default.Item(addItem));
	            return;
	        }
	    },
	    addAll: function addAll(list, addList) {
	        addList.map(function (addItem) {
	            return vm.add(list, addItem);
	        });
	        return;
	    },
	    addCheck: function addCheck(addItem) {
	        vm.checkList.push(new _check2.default.Item(addItem));
	        return;
	    },
	    addCheckAll: function addCheckAll(addList) {
	        addList.map(function (addItem) {
	            return vm.addCheck(addItem);
	        });
	        return;
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
	            return;
	        } else {
	            num(num() + 1);
	            return;
	        }
	    },
	    /**
	    *@param{Function}num 配列インデックス、m.prop(0)で作成したgetter-setter関数
	    *@param{Function}incrimentFunc 配列インデックスのインクリメントを行う関数
	    *@param{Function}d m.deferredで作成したpromiseファクトリー
	    */
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
	            }
	        } catch (e) {
	            console.error(e.message);
	        }
	    },
	    checkEndFlag: function checkEndFlag(limit) {
	        var result = _underscore2.default.countBy(vm.checkList, function (item) {
	            return item.flag() === true ? "ok" : "no";
	        });
	        return limit() + 1 === result.ok;
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
	            if (_store2.default.checkList.length < res()) {
	                _this.limit(_store2.default.checkList.length - 1);
	            }
	            _this.getNextWord();
	        });
	        return;
	    }
	
	    _createClass(CheckRun, [{
	        key: "isFlag",
	        value: function isFlag() {
	            this.word().flag(true);
	            return;
	        }
	    }, {
	        key: "isView",
	        value: function isView() {
	            this.view(true);
	            return;
	        }
	    }, {
	        key: "incrimentCount",
	        value: function incrimentCount() {
	            _store2.default.incrimentCount(this.i, this.limit);
	            return;
	        }
	    }, {
	        key: "getNextWord",
	        value: function getNextWord() {
	            this.word(_store2.default.getNextWord1(this.i, this.limit));
	            this.incrimentCount();
	            this.view(false);
	            return;
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
	    return (0, _mithril2.default)("div", {
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
	
	var _limitSelectCard = __webpack_require__(21);
	
	var _limitSelectCard2 = _interopRequireDefault(_limitSelectCard);
	
	var _check = __webpack_require__(23);
	
	var _check2 = _interopRequireDefault(_check);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Check = {
	    controller: function controller() {
	        return new _check2.default();
	    },
	    view: function view(ctrl) {
	        return (0, _mithril2.default)(".flex_content displayFlex flex_column", [(0, _navbar2.default)(ctrl.navbar), (0, _mithril2.default)("form.displayFlex flex_column", {
	            "style": {
	                "flex": "1",
	                "padding": "1rem",
	                "padding-top": "6.5rem",
	                "height": "100%"
	            }
	        }, [(0, _limitSelectCard2.default)(ctrl.content.select, ctrl.checkLimit), (0, _mithril2.default)("button", {
	            "style": {
	                "background": "#ffffff"
	            },
	            "onclick": function onclick() {
	                console.log(ctrl.checkLimit());
	                return ctrl.goCheckRun();
	            }
	        }, ctrl.content.button)])]);
	    }
	};
	
	exports.default = Check;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _select = __webpack_require__(22);
	
	var _select2 = _interopRequireDefault(_select);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var limitSelectCard = function limitSelectCard(args, value) {
	    return (0, _mithril2.default)(".card", {
	        "style": {
	            "margin-bottom": "1rem"
	        }
	    }, [(0, _mithril2.default)("label", {
	        "for": args.name
	    }, args.label), (0, _select2.default)(args, value)]);
	};
	
	exports.default = limitSelectCard;

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
	@param{String} item.value 内部の値
	@param{String} item.label 選択肢として利用者に見せる値
	*/
	var option = function option(item) {
	    return (0, _mithril2.default)("option", {
	        "value": item.value
	    }, item.title);
	};
	
	var select = function select(args, value) {
	    return (0, _mithril2.default)("select.u-full-width", {
	        "name": args.name,
	        "size": args.size || 1,
	        "id": args.name,
	        "value": value()
	    }, [args.option.map(function (item) {
	        return option(item);
	    })]);
	};
	
	exports.default = select;

/***/ },
/* 23 */
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
	
	var Check = function () {
	    function Check() {
	        _classCallCheck(this, Check);
	
	        this.navbar = _store2.default.scene.check.navbar;
	        this.content = _store2.default.scene.check.content;
	        this.checkLimit = _mithril2.default.prop(5);
	    }
	
	    _createClass(Check, [{
	        key: "goCheckRun",
	        value: function goCheckRun() {
	            var url = "/check/" + this.checkLimit();
	            return _mithril2.default.route(url);
	        }
	    }]);
	
	    return Check;
	}();
	
	exports.default = Check;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _navbar = __webpack_require__(3);
	
	var _navbar2 = _interopRequireDefault(_navbar);
	
	var _checkCard = __webpack_require__(25);
	
	var _checkCard2 = _interopRequireDefault(_checkCard);
	
	var _checkRun = __webpack_require__(8);
	
	var _checkRun2 = _interopRequireDefault(_checkRun);
	
	var _checkButtons = __webpack_require__(26);
	
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
	                    } else {
	                        ctrl.getNextWord();
	                    }
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
/* 25 */
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
/* 26 */
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(30)(content, {});
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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(29)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\n* Skeleton V2.0.4\n* Copyright 2014, Dave Gamache\n* www.getskeleton.com\n* Free to use under the MIT license.\n* http://www.opensource.org/licenses/mit-license.php\n* 12/29/2014\n*/\n\n\n/* Table of contents\n––––––––––––––––––––––––––––––––––––––––––––––––––\n- Grid\n- Base Styles\n- Typography\n- Links\n- Buttons\n- Forms\n- Lists\n- Code\n- Tables\n- Spacing\n- Utilities\n- Clearing\n- Media Queries\n*/\n\n\n/* Grid\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.container {\n  position: relative;\n  width: 100%;\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 20px;\n  box-sizing: border-box; }\n.column,\n.columns {\n  width: 100%;\n  float: left;\n  box-sizing: border-box; }\n\n/* For devices larger than 400px */\n@media (min-width: 400px) {\n  .container {\n    width: 85%;\n    padding: 0; }\n}\n\n/* For devices larger than 550px */\n@media (min-width: 550px) {\n  .container {\n    width: 80%; }\n  .column,\n  .columns {\n    margin-left: 4%; }\n  .column:first-child,\n  .columns:first-child {\n    margin-left: 0; }\n\n  .one.column,\n  .one.columns                    { width: 4.66666666667%; }\n  .two.columns                    { width: 13.3333333333%; }\n  .three.columns                  { width: 22%;            }\n  .four.columns                   { width: 30.6666666667%; }\n  .five.columns                   { width: 39.3333333333%; }\n  .six.columns                    { width: 48%;            }\n  .seven.columns                  { width: 56.6666666667%; }\n  .eight.columns                  { width: 65.3333333333%; }\n  .nine.columns                   { width: 74.0%;          }\n  .ten.columns                    { width: 82.6666666667%; }\n  .eleven.columns                 { width: 91.3333333333%; }\n  .twelve.columns                 { width: 100%; margin-left: 0; }\n\n  .one-third.column               { width: 30.6666666667%; }\n  .two-thirds.column              { width: 65.3333333333%; }\n\n  .one-half.column                { width: 48%; }\n\n  /* Offsets */\n  .offset-by-one.column,\n  .offset-by-one.columns          { margin-left: 8.66666666667%; }\n  .offset-by-two.column,\n  .offset-by-two.columns          { margin-left: 17.3333333333%; }\n  .offset-by-three.column,\n  .offset-by-three.columns        { margin-left: 26%;            }\n  .offset-by-four.column,\n  .offset-by-four.columns         { margin-left: 34.6666666667%; }\n  .offset-by-five.column,\n  .offset-by-five.columns         { margin-left: 43.3333333333%; }\n  .offset-by-six.column,\n  .offset-by-six.columns          { margin-left: 52%;            }\n  .offset-by-seven.column,\n  .offset-by-seven.columns        { margin-left: 60.6666666667%; }\n  .offset-by-eight.column,\n  .offset-by-eight.columns        { margin-left: 69.3333333333%; }\n  .offset-by-nine.column,\n  .offset-by-nine.columns         { margin-left: 78.0%;          }\n  .offset-by-ten.column,\n  .offset-by-ten.columns          { margin-left: 86.6666666667%; }\n  .offset-by-eleven.column,\n  .offset-by-eleven.columns       { margin-left: 95.3333333333%; }\n\n  .offset-by-one-third.column,\n  .offset-by-one-third.columns    { margin-left: 34.6666666667%; }\n  .offset-by-two-thirds.column,\n  .offset-by-two-thirds.columns   { margin-left: 69.3333333333%; }\n\n  .offset-by-one-half.column,\n  .offset-by-one-half.columns     { margin-left: 52%; }\n\n}\n\n\n/* Base Styles\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/* NOTE\nhtml is set to 62.5% so that all the REM measurements throughout Skeleton\nare based on 10px sizing. So basically 1.5rem = 15px :) */\nhtml {\n  font-size: 62.5%; }\nbody {\n  font-size: 1.5em; /* currently ems cause chrome bug misinterpreting rems on body element */\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: \"Raleway\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: #222; }\n\n\n/* Typography\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300; }\nh1 { font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem;}\nh2 { font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }\nh3 { font-size: 3.0rem; line-height: 1.3;  letter-spacing: -.1rem; }\nh4 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -.08rem; }\nh5 { font-size: 1.8rem; line-height: 1.5;  letter-spacing: -.05rem; }\nh6 { font-size: 1.5rem; line-height: 1.6;  letter-spacing: 0; }\n\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 { font-size: 5.0rem; }\n  h2 { font-size: 4.2rem; }\n  h3 { font-size: 3.6rem; }\n  h4 { font-size: 3.0rem; }\n  h5 { font-size: 2.4rem; }\n  h6 { font-size: 1.5rem; }\n}\n\np {\n  margin-top: 0; }\n\n\n/* Links\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\na {\n  color: #1EAEDB; }\na:hover {\n  color: #0FA0CE; }\n\n\n/* Buttons\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.button,\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: .1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border-radius: 4px;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box; }\n.button:hover,\nbutton:hover,\ninput[type=\"submit\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"button\"]:hover,\n.button:focus,\nbutton:focus,\ninput[type=\"submit\"]:focus,\ninput[type=\"reset\"]:focus,\ninput[type=\"button\"]:focus {\n  color: #333;\n  border-color: #888;\n  outline: 0; }\n.button.button-primary,\nbutton.button-primary,\ninput[type=\"submit\"].button-primary,\ninput[type=\"reset\"].button-primary,\ninput[type=\"button\"].button-primary {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0; }\n.button.button-primary:hover,\nbutton.button-primary:hover,\ninput[type=\"submit\"].button-primary:hover,\ninput[type=\"reset\"].button-primary:hover,\ninput[type=\"button\"].button-primary:hover,\n.button.button-primary:focus,\nbutton.button-primary:focus,\ninput[type=\"submit\"].button-primary:focus,\ninput[type=\"reset\"].button-primary:focus,\ninput[type=\"button\"].button-primary:focus {\n  color: #FFF;\n  background-color: #1EAEDB;\n  border-color: #1EAEDB; }\n\n\n/* Forms\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\ninput[type=\"email\"],\ninput[type=\"number\"],\ninput[type=\"search\"],\ninput[type=\"text\"],\ninput[type=\"tel\"],\ninput[type=\"url\"],\ninput[type=\"password\"],\ntextarea,\nselect {\n  height: 38px;\n  padding: 6px 10px; /* The 6px vertically centers text on FF, ignored by Webkit */\n  background-color: #fff;\n  border: 1px solid #D1D1D1;\n  border-radius: 4px;\n  box-shadow: none;\n  box-sizing: border-box; }\n/* Removes awkward default styles on some inputs for iOS */\ninput[type=\"email\"],\ninput[type=\"number\"],\ninput[type=\"search\"],\ninput[type=\"text\"],\ninput[type=\"tel\"],\ninput[type=\"url\"],\ninput[type=\"password\"],\ntextarea {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\ntextarea {\n  min-height: 65px;\n  padding-top: 6px;\n  padding-bottom: 6px; }\ninput[type=\"email\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"password\"]:focus,\ntextarea:focus,\nselect:focus {\n  border: 1px solid #33C3F0;\n  outline: 0; }\nlabel,\nlegend {\n  display: block;\n  margin-bottom: .5rem;\n  font-weight: 600; }\nfieldset {\n  padding: 0;\n  border-width: 0; }\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  display: inline; }\nlabel > .label-body {\n  display: inline-block;\n  margin-left: .5rem;\n  font-weight: normal; }\n\n\n/* Lists\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nul {\n  list-style: circle inside; }\nol {\n  list-style: decimal inside; }\nol, ul {\n  padding-left: 0;\n  margin-top: 0; }\nul ul,\nul ol,\nol ol,\nol ul {\n  margin: 1.5rem 0 1.5rem 3rem;\n  font-size: 90%; }\nli {\n  margin-bottom: 1rem; }\n\n\n/* Code\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\ncode {\n  padding: .2rem .5rem;\n  margin: 0 .2rem;\n  font-size: 90%;\n  white-space: nowrap;\n  background: #F1F1F1;\n  border: 1px solid #E1E1E1;\n  border-radius: 4px; }\npre > code {\n  display: block;\n  padding: 1rem 1.5rem;\n  white-space: pre; }\n\n\n/* Tables\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nth,\ntd {\n  padding: 12px 15px;\n  text-align: left;\n  border-bottom: 1px solid #E1E1E1; }\nth:first-child,\ntd:first-child {\n  padding-left: 0; }\nth:last-child,\ntd:last-child {\n  padding-right: 0; }\n\n\n/* Spacing\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nbutton,\n.button {\n  margin-bottom: 1rem; }\ninput,\ntextarea,\nselect,\nfieldset {\n  margin-bottom: 1.5rem; }\npre,\nblockquote,\ndl,\nfigure,\ntable,\np,\nul,\nol,\nform {\n  margin-bottom: 2.5rem; }\n\n\n/* Utilities\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.u-full-width {\n  width: 100%;\n  box-sizing: border-box; }\n.u-max-full-width {\n  max-width: 100%;\n  box-sizing: border-box; }\n.u-pull-right {\n  float: right; }\n.u-pull-left {\n  float: left; }\n\n\n/* Misc\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nhr {\n  margin-top: 3rem;\n  margin-bottom: 3.5rem;\n  border-width: 0;\n  border-top: 1px solid #E1E1E1; }\n\n\n/* Clearing\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n\n/* Self Clearing Goodness */\n.container:after,\n.row:after,\n.u-cf {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n\n/* Media Queries\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/*\nNote: The best way to structure the use of media queries is to create the queries\nnear the relevant code. For example, if you wanted to change the styles for buttons\non small devices, paste the mobile query code up in the buttons section and style it\nthere.\n*/\n\n\n/* Larger than mobile */\n@media (min-width: 400px) {}\n\n/* Larger than phablet (also point when grid becomes active) */\n@media (min-width: 550px) {}\n\n/* Larger than tablet */\n@media (min-width: 750px) {}\n\n/* Larger than desktop */\n@media (min-width: 1000px) {}\n\n/* Larger than Desktop HD */\n@media (min-width: 1200px) {}\n", ""]);
	
	// exports


/***/ },
/* 29 */
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
/* 30 */
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(32);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(30)(content, {});
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(29)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\n  background: #eee;\n  margin: 0px;\n  flex: 1;\n  display: -webkit-flex;\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  flex-direction: -webkit-column;\n  flex-direction: -moz-column;\n  flex-direction: -ms-column;\n  flex-direction: -o-column;\n  flex-direction: column;\n}\n\nhtml {\n    height: 100%;\n    display: -webkit-flex;\n    display: -moz-flex;\n    display: -ms-flex;\n    display: -o-flex;\n    display: flex;\n}\n\n.displayFlex {\n  display: -webkit-flex;\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n}\n\n.displayFlexFixed {\n  display: -webkit-flex;\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  position: fixed;\n  width: 100%;\n}\n\n.flex_row {\n  flex-direction: -webkit-row;\n  flex-direction: -moz-row;\n  flex-direction: -ms-row;\n  flex-direction: -o-row;\n  flex-direction: row;\n}\n\n.flex_column {\n  flex-direction: -webkit-column;\n  flex-direction: -moz-column;\n  flex-direction: -ms-column;\n  flex-direction: -o-column;\n  flex-direction: column;\n}\n\n.flex_nowrap {\n  flex-wrap: -webkit-nowrap;\n  flex-wrap: -moz-nowrap;\n  flex-wrap: -ms-nowrap;\n  flex-wrap: -o-nowrap;\n  flex-wrap: nowrap;\n}\n\n.flex_content {\n    flex: 1;\n}\n\n.card {\n  width: auto;\n  background: #fff;\n  border-radius: 3px;\n  box-shadow: 0 2px 5px #ccc;\n  padding: 1rem;\n}\n.card-img {\n  border-radius: 5px 5px 0 0;\n  max-width: 100%;\n  height: auto;\n}\n.card-content {\n  padding: 1rem;\n}\n.card-title {\n  font-size: 20px;\n  margin-bottom: 20px;\n  text-align: center;\n  color: #333;\n}\n.card-text {\n  color: #777;\n  font-size: 14px;\n  line-height: 1.5;\n}\n.card-link {\n  text-align: center;\n  border-top: 1px solid #eee;\n  padding: 20px;\n}\n.card-link a {\n  text-decoration: none;\n  color: #0bd;\n  margin: 0 10px;\n}\n.card-link a:hover {\n  color: #0090aa;\n}\n", ""]);
	
	// exports


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWMzNDBhMjNiNTYzZDgyMGQ2ZjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL21pdGhyaWwvbWl0aHJpbC5taW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L2NvbXBvbmVudHMvbmF2YmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi91bmRlcnNjb3JlL3VuZGVyc2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9tb2RlbC93b3Jkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L21vZGVsL2NoZWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvY3RybC9jaGVja1J1bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L3NjZW5lL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9jb21wb25lbnRzL2hvbWVNZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvY3RybC9ob21lLmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvc2NlbmUvd29yZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9jb21wb25lbnRzL3dvcmRMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvY3RybC93b3Jkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L3NjZW5lL3dvcmRzTmV3LmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvY29tcG9uZW50cy93b3JkQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L2N0cmwvd29yZHNOZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9zY2VuZS9Xb3Jkc0VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9jdHJsL1dvcmRzRWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L3NjZW5lL0NoZWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvY29tcG9uZW50cy9saW1pdFNlbGVjdENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9jb21wb25lbnRzL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L2N0cmwvY2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9zY2VuZS9DaGVja1J1bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L2NvbXBvbmVudHMvY2hlY2tDYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvY29tcG9uZW50cy9jaGVja0J1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9za2VsZXRvbi9jc3Mvc2tlbGV0b24uY3NzPzAyYzQiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9za2VsZXRvbi9jc3Mvc2tlbGV0b24uY3NzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3Mvc3R5bGUuY3NzPzIxYWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7Ozs7S0FFTSxPQUNGLFNBREUsSUFDRixDQUFZLElBQVosRUFBa0I7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QUFDQTtBQUNBLHdCQUF1QixnQkFBZ0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTBDLFlBQVk7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTBDLFlBQVk7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCLGdCQUFnQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFEQUFvRDtBQUNwRCxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJD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QUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPLGVBQWU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBcUIsZUFBZTtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXNCO0FBQ3RCO0FBQ0EsMEJBQXlCLGdCQUFnQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUF5QyxZQUFZO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUF5QyxZQUFZO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSw2Q0FBNEMsbUJBQW1CO0FBQy9EO0FBQ0E7QUFDQSwwQ0FBeUMsWUFBWTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNEQUFxRDtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQTZFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXFDO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIs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R0FBRyxzQkFBc0IsbUJBQW1CLEdBQUc7O0FBRXQ2RCIsImZpbGUiOiIuL3d3dy9qcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGVjMzQwYTIzYjU2M2Q4MjBkNmYzXG4gKiovIiwiaW1wb3J0IG0gZnJvbSBcIm1pdGhyaWxcIjtcbmltcG9ydCBuYXZiYXIgZnJvbSBcIi4vY29tcG9uZW50cy9uYXZiYXJcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi9zdG9yZVwiO1xuaW1wb3J0IFRlc3QgZnJvbSBcIi4vLi9jdHJsL2NoZWNrUnVuXCI7XG5cbmltcG9ydCBIb21lIGZyb20gXCIuL3NjZW5lL2hvbWVcIjtcbmltcG9ydCBXb3JkcyBmcm9tIFwiLi9zY2VuZS93b3Jkc1wiO1xuaW1wb3J0IFdvcmRzTmV3IGZyb20gXCIuL3NjZW5lL3dvcmRzTmV3XCI7XG5pbXBvcnQgV29yZHNFZGl0IGZyb20gXCIuL3NjZW5lL1dvcmRzRWRpdFwiO1xuaW1wb3J0IENoZWNrIGZyb20gXCIuL3NjZW5lL0NoZWNrXCI7XG5pbXBvcnQgQ2hlY2tSdW4gZnJvbSBcIi4vc2NlbmUvQ2hlY2tSdW5cIjtcblxuaW1wb3J0IFwic2tlbGV0b25cIjtcbmltcG9ydCBcIi4uL2Nzcy9zdHlsZS5jc3NcIjtcblxuY2xhc3MgQ3RybCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBtLnByb3AobmFtZSk7XG4gICAgfVxufVxuXG5zdG9yZS5pbml0KCk7XG4vLyBjb25zb2xlLmxvZyhzdG9yZS53b3JkTGlzdC5sZW5ndGgpO1xuc3RvcmUuYWRkQWxsKHN0b3JlLndvcmRMaXN0LCBbXG4gICAge1xuICAgICAgICBlbjogXCJoZWxsb1wiLFxuICAgICAgICBqYTogXCLjgZPjgpPjgavjgaHjga9cIlxuICAgIH0se1xuICAgICAgICBlbjogXCJBcHBsZVwiLFxuICAgICAgICBqYTogXCLjgorjgpPjgZRcIlxuICAgIH0se1xuICAgICAgICBlbjogXCJ3aW5kb3dcIixcbiAgICAgICAgamE6IFwi56qTXCJcbiAgICB9XG5dKTtcblxuY29uc3QgdGVzdCA9IG5ldyBUZXN0KCk7XG4vLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0ZXN0LndvcmQoKSkpO1xuLy8gdGVzdC5pc0ZsYWcoKTtcbi8vIHRlc3QuZ2V0TmV4dFdvcmQoKTtcbmNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRlc3Qud29yZCgpKSk7XG4vLyBjb25zb2xlLmxvZyhzdG9yZS53b3JkTGlzdC5sZW5ndGgpO1xuLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoc3RvcmUud29yZExpc3QpKTtcblxuY29uc3QgdGVzdDEgPSB7XG4gICAgY29udHJvbGxlcjogKCkgPT4gbmV3IEN0cmwoXCJ0b21va2F6dVwiKSxcbiAgICB2aWV3OiAoY3RybCk9PntcbiAgICAgICAgcmV0dXJuIG0oXCJkaXZcIiwgW1xuICAgICAgICAgICAgbmF2YmFyKHN0b3JlLnNjZW5lLndvcmRzLm5hdmJhciksXG4gICAgICAgICAgICBtKFwiLmRpc3BsYXlGbGV4IGZsZXhfY29sdW1uIG5vd3JhcFwiLCB7XG4gICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwicGFkZGluZy10b3BcIjogXCI2cmVtXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgbShcIi5jYXJkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmdpblwiOiBcIjAuNWVtXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgbShcImxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9yXCI6IFwiaG9nZVwiXG4gICAgICAgICAgICAgICAgICAgIH0sIFwidGVzdFwiKSxcbiAgICAgICAgICAgICAgICAgICAgbShcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjpcInUtZnVsbC13aWR0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcImhvZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogY3RybC5uYW1lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9uaW5wdXRcIjogbS53aXRoQXR0cihcInZhbHVlXCIsIGN0cmwubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIG0oXCJidXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOlwidS1mdWxsLXdpZHRoXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcInN1Ym1pdFwiKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIG0oXCIuY2FyZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW5cIjogXCIwLjVlbVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICAgIG0oXCJsYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImZvclwiOiBcImhvZ2VcIlxuICAgICAgICAgICAgICAgICAgICB9LCBcInRlc3RcIiksXG4gICAgICAgICAgICAgICAgICAgIG0oXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6XCJ1LWZ1bGwtd2lkdGhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJob2dlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGN0cmwubmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvbmlucHV0XCI6IG0ud2l0aEF0dHIoXCJ2YWx1ZVwiLCBjdHJsLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBtKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjpcInUtZnVsbC13aWR0aFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXCJzdWJtaXRcIilcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBtKFwiLmNhcmRcIiwge1xuICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWFyZ2luXCI6IFwiMC41ZW1cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgICAgICBtKFwibGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JcIjogXCJob2dlXCJcbiAgICAgICAgICAgICAgICAgICAgfSwgXCJ0ZXN0XCIpLFxuICAgICAgICAgICAgICAgICAgICBtKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOlwidS1mdWxsLXdpZHRoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiaG9nZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBjdHJsLm5hbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib25pbnB1dFwiOiBtLndpdGhBdHRyKFwidmFsdWVcIiwgY3RybC5uYW1lKVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgbShcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6XCJ1LWZ1bGwtd2lkdGhcIlxuICAgICAgICAgICAgICAgICAgICB9LFwic3VibWl0XCIpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgbShcIi5jYXJkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmdpblwiOiBcIjAuNWVtXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgbShcImxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9yXCI6IFwiaG9nZVwiXG4gICAgICAgICAgICAgICAgICAgIH0sIFwidGVzdFwiKSxcbiAgICAgICAgICAgICAgICAgICAgbShcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjpcInUtZnVsbC13aWR0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcImhvZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogY3RybC5uYW1lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9uaW5wdXRcIjogbS53aXRoQXR0cihcInZhbHVlXCIsIGN0cmwubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIG0oXCJidXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOlwidS1mdWxsLXdpZHRoXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcInN1Ym1pdFwiKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICBdKTtcbiAgICB9XG59O1xuXG4vLyBmdW5jdGlvbiBnZXREYXRhKCl7XG4vLyAgICAgbS5yZXF1ZXN0KHtcbi8vICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuLy8gICAgICAgICB1cmw6IFwiaHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J5c2NyYjRyTFd6cjNpbTFXQ2RBYlFXRGwtazE0bVJ5QXlHa3VWQnpUeVB3bTl1U05RL2V4ZWNcIixcbi8vICAgICAgICAgaW5pdGlhbFZhbHVlOiBbXVxuLy8gICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzKXtcbi8vICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbi8vICAgICB9KTtcbi8vIH1cbi8vZ2V0RGF0YSgpO1xuLy8gbS5tb3VudChkb2N1bWVudC5ib2R5LCB0ZXN0KTtcbi8vIG0ucm91dGUoZG9jdW1lbnQuYm9keSwgXCIvXCIsIHtcbi8vICAgICBcIi9cIjogSG9tZSxcbi8vICAgICBcIi9ob21lXCI6IEhvbWUsXG4vLyAgICAgXCIvd29yZHNcIjogV29yZHMsXG4vLyAgICAgXCIvd29yZHMvbmV3XCI6IFdvcmRzTmV3LFxuLy8gICAgIFwiL3dvcmRzL2VkaXRcIjogV29yZHNFZGl0LFxuLy8gICAgIFwiL2NoZWNrXCI6IENoZWNrLFxuLy8gICAgIFwiL2NoZWNrL3J1blwiOiBDaGVja1J1bixcbi8vICAgICBcIi90ZXN0XCI6IFRlc3QsXG4vLyAgICAgXCIvdGVzdC9ydW5cIjogVGVzdFJ1bixcbi8vICAgICBcIi90ZXN0L3Jlc3VsdFwiOiBUZXN0UmVzdWx0XG4vLyB9KTtcbm0ucm91dGUoZG9jdW1lbnQuYm9keSwgXCIvaG9tZVwiLCB7XG4gICAgXCIvaG9tZVwiOiBIb21lLFxuICAgIFwiL3dvcmRzXCI6IFdvcmRzLFxuICAgIFwiL3dvcmRzL25ld1wiOiBXb3Jkc05ldyxcbiAgICBcIi93b3Jkcy86aWRcIjogV29yZHNFZGl0LFxuICAgIFwiL2NoZWNrLzppZFwiOiBDaGVja1J1bixcbiAgICBcIi9jaGVja1wiOiBDaGVja1xufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9lczYvaW5kZXguanNcbiAqKi8iLCIvKlxuTWl0aHJpbCB2MC4yLjNcbmh0dHA6Ly9taXRocmlsLmpzLm9yZ1xuKGMpIDIwMTQtMjAxNiBMZW8gSG9yaWVcbkxpY2Vuc2U6IE1JVFxuKi9cbiFmdW5jdGlvbihhLGIpe1widXNlIHN0cmljdFwiO3ZhciBjPWIoYSk7XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbnVsbCE9bW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1jOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZnVuY3Rpb24oKXtyZXR1cm4gY30pOmEubT1jfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp7fSxmdW5jdGlvbihhLGIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGMoYSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgYX1mdW5jdGlvbiBkKGEpe3JldHVyblwiW29iamVjdCBPYmplY3RdXCI9PT1BYS5jYWxsKGEpfWZ1bmN0aW9uIGUoYSl7cmV0dXJuXCJbb2JqZWN0IFN0cmluZ11cIj09PUFhLmNhbGwoYSl9ZnVuY3Rpb24gZigpe31mdW5jdGlvbiBnKGEpe3ZhPWEuZG9jdW1lbnQsd2E9YS5sb2NhdGlvbix5YT1hLmNhbmNlbEFuaW1hdGlvbkZyYW1lfHxhLmNsZWFyVGltZW91dCx4YT1hLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8YS5zZXRUaW1lb3V0fWZ1bmN0aW9uIGgoYSxiKXtmb3IodmFyIGMsZD1bXSxlPS8oPzooXnwjfFxcLikoW14jXFwuXFxbXFxdXSspKXwoXFxbLis/XFxdKS9nO2M9ZS5leGVjKGIpOylpZihcIlwiPT09Y1sxXSYmY1syXSlhLnRhZz1jWzJdO2Vsc2UgaWYoXCIjXCI9PT1jWzFdKWEuYXR0cnMuaWQ9Y1syXTtlbHNlIGlmKFwiLlwiPT09Y1sxXSlkLnB1c2goY1syXSk7ZWxzZSBpZihcIltcIj09PWNbM11bMF0pe3ZhciBmPS9cXFsoLis/KSg/Oj0oXCJ8J3wpKC4qPylcXDIpP1xcXS8uZXhlYyhjWzNdKTthLmF0dHJzW2ZbMV1dPWZbM118fChmWzJdP1wiXCI6ITApfXJldHVybiBkfWZ1bmN0aW9uIGkoYSxiKXt2YXIgYz1iP2Euc2xpY2UoMSk6YTtyZXR1cm4gMT09PWMubGVuZ3RoJiZCYShjWzBdKT9jWzBdOmN9ZnVuY3Rpb24gaihhLGIsYyl7dmFyIGQ9XCJjbGFzc1wiaW4gYj9cImNsYXNzXCI6XCJjbGFzc05hbWVcIjtmb3IodmFyIGUgaW4gYil6YS5jYWxsKGIsZSkmJihlPT09ZCYmbnVsbCE9YltlXSYmXCJcIiE9PWJbZV0/KGMucHVzaChiW2VdKSxhW2VdPVwiXCIpOmFbZV09YltlXSk7Yy5sZW5ndGgmJihhW2RdPWMuam9pbihcIiBcIikpfWZ1bmN0aW9uIGsoYSxiKXt2YXIgYz1bXS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKTtpZihkKGEpKXJldHVybiBiYShhLGMpO2lmKCFlKGEpKXRocm93IG5ldyBFcnJvcihcInNlbGVjdG9yIGluIG0oc2VsZWN0b3IsIGF0dHJzLCBjaGlsZHJlbikgc2hvdWxkIGJlIGEgc3RyaW5nXCIpO3ZhciBmPW51bGwhPWImJmQoYikmJiEoXCJ0YWdcImluIGJ8fFwidmlld1wiaW4gYnx8XCJzdWJ0cmVlXCJpbiBiKSxnPWY/Yjp7fSxrPXt0YWc6XCJkaXZcIixhdHRyczp7fSxjaGlsZHJlbjppKGMsZil9O3JldHVybiBqKGsuYXR0cnMsZyxoKGssYSkpLGt9ZnVuY3Rpb24gbChhLGIpe2Zvcih2YXIgYz0wO2M8YS5sZW5ndGgmJiFiKGFbY10sYysrKTspO31mdW5jdGlvbiBtKGEsYil7bChhLGZ1bmN0aW9uKGEsYyl7cmV0dXJuKGE9YSYmYS5hdHRycykmJm51bGwhPWEua2V5JiZiKGEsYyl9KX1mdW5jdGlvbiBuKGEpe3RyeXtpZihudWxsIT1hJiZudWxsIT1hLnRvU3RyaW5nKCkpcmV0dXJuIGF9Y2F0Y2goYil7fXJldHVyblwiXCJ9ZnVuY3Rpb24gbyhhLGIsYyxkKXt0cnl7cShhLGIsYyksYi5ub2RlVmFsdWU9ZH1jYXRjaChlKXt9fWZ1bmN0aW9uIHAoYSl7Zm9yKHZhciBiPTA7YjxhLmxlbmd0aDtiKyspQmEoYVtiXSkmJihhPWEuY29uY2F0LmFwcGx5KFtdLGEpLGItLSk7cmV0dXJuIGF9ZnVuY3Rpb24gcShhLGIsYyl7YS5pbnNlcnRCZWZvcmUoYixhLmNoaWxkTm9kZXNbY118fG51bGwpfWZ1bmN0aW9uIHIoYSxiLGMsZCl7bShhLGZ1bmN0aW9uKGEsZCl7YlthPWEua2V5XT1iW2FdP3thY3Rpb246RmEsaW5kZXg6ZCxmcm9tOmJbYV0uaW5kZXgsZWxlbWVudDpjLm5vZGVzW2JbYV0uaW5kZXhdfHx2YS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpfTp7YWN0aW9uOkVhLGluZGV4OmR9fSk7dmFyIGU9W107Zm9yKHZhciBmIGluIGIpemEuY2FsbChiLGYpJiZlLnB1c2goYltmXSk7dmFyIGc9ZS5zb3J0KFIpLGg9bmV3IEFycmF5KGMubGVuZ3RoKTtyZXR1cm4gaC5ub2Rlcz1jLm5vZGVzLnNsaWNlKCksbChnLGZ1bmN0aW9uKGIpe3ZhciBlPWIuaW5kZXg7aWYoYi5hY3Rpb249PT1EYSYmKFcoY1tlXS5ub2RlcyxjW2VdKSxoLnNwbGljZShlLDEpKSxiLmFjdGlvbj09PUVhKXt2YXIgZj12YS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2Yua2V5PWFbZV0uYXR0cnMua2V5LHEoZCxmLGUpLGguc3BsaWNlKGUsMCx7YXR0cnM6e2tleTphW2VdLmF0dHJzLmtleX0sbm9kZXM6W2ZdfSksaC5ub2Rlc1tlXT1mfWlmKGIuYWN0aW9uPT09RmEpe3ZhciBnPWIuZWxlbWVudCxpPWQuY2hpbGROb2Rlc1tlXTtpIT09ZyYmbnVsbCE9PWcmJmQuaW5zZXJ0QmVmb3JlKGcsaXx8bnVsbCksaFtlXT1jW2IuZnJvbV0saC5ub2Rlc1tlXT1nfX0pLGh9ZnVuY3Rpb24gcyhhLGIsYyxkKXt2YXIgZT1hLmxlbmd0aCE9PWIubGVuZ3RoO3JldHVybiBlfHxtKGEsZnVuY3Rpb24oYSxjKXt2YXIgZD1iW2NdO3JldHVybiBlPWQmJmQuYXR0cnMmJmQuYXR0cnMua2V5IT09YS5rZXl9KSxlP3IoYSxjLGIsZCk6Yn1mdW5jdGlvbiB0KGEsYixjKXtsKGEsZnVuY3Rpb24oYSxkKXtudWxsIT1iW2RdJiZjLnB1c2guYXBwbHkoYyxiW2RdLm5vZGVzKX0pLGwoYi5ub2RlcyxmdW5jdGlvbihhLGQpe251bGwhPWEucGFyZW50Tm9kZSYmYy5pbmRleE9mKGEpPDAmJlcoW2FdLFtiW2RdXSl9KSxhLmxlbmd0aDxiLmxlbmd0aCYmKGIubGVuZ3RoPWEubGVuZ3RoKSxiLm5vZGVzPWN9ZnVuY3Rpb24gdShhKXt2YXIgYj0wO20oYSxmdW5jdGlvbigpe3JldHVybiBsKGEsZnVuY3Rpb24oYSl7KGE9YSYmYS5hdHRycykmJm51bGw9PWEua2V5JiYoYS5rZXk9XCJfX21pdGhyaWxfX1wiK2IrKyl9KSwxfSl9ZnVuY3Rpb24gdihhLGIsYyl7cmV0dXJuIGEudGFnIT09Yi50YWc/ITA6Yy5zb3J0KCkuam9pbigpIT09T2JqZWN0LmtleXMoYi5hdHRycykuc29ydCgpLmpvaW4oKT8hMDphLmF0dHJzLmlkIT09Yi5hdHRycy5pZD8hMDphLmF0dHJzLmtleSE9PWIuYXR0cnMua2V5PyEwOlwiYWxsXCI9PT1rLnJlZHJhdy5zdHJhdGVneSgpPyFiLmNvbmZpZ0NvbnRleHR8fGIuY29uZmlnQ29udGV4dC5yZXRhaW4hPT0hMDpcImRpZmZcIj09PWsucmVkcmF3LnN0cmF0ZWd5KCk/Yi5jb25maWdDb250ZXh0JiZiLmNvbmZpZ0NvbnRleHQucmV0YWluPT09ITE6ITF9ZnVuY3Rpb24gdyhhLGIsZCl7dihhLGIsZCkmJihiLm5vZGVzLmxlbmd0aCYmVyhiLm5vZGVzKSxiLmNvbmZpZ0NvbnRleHQmJmMoYi5jb25maWdDb250ZXh0Lm9udW5sb2FkKSYmYi5jb25maWdDb250ZXh0Lm9udW5sb2FkKCksYi5jb250cm9sbGVycyYmbChiLmNvbnRyb2xsZXJzLGZ1bmN0aW9uKGEpe2Eub251bmxvYWQmJmEub251bmxvYWQoe3ByZXZlbnREZWZhdWx0OmZ9KX0pKX1mdW5jdGlvbiB4KGEsYil7cmV0dXJuIGEuYXR0cnMueG1sbnM/YS5hdHRycy54bWxuczpcInN2Z1wiPT09YS50YWc/XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiOlwibWF0aFwiPT09YS50YWc/XCJodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MXCI6Yn1mdW5jdGlvbiB5KGEsYixjKXtjLmxlbmd0aCYmKGEudmlld3M9YixhLmNvbnRyb2xsZXJzPWMsbChjLGZ1bmN0aW9uKGEpe2lmKGEub251bmxvYWQmJmEub251bmxvYWQuJG9sZCYmKGEub251bmxvYWQ9YS5vbnVubG9hZC4kb2xkKSxHYSYmYS5vbnVubG9hZCl7dmFyIGI9YS5vbnVubG9hZDthLm9udW5sb2FkPWYsYS5vbnVubG9hZC4kb2xkPWJ9fSkpfWZ1bmN0aW9uIHooYSxiLGQsZSxmKXtpZihjKGIuYXR0cnMuY29uZmlnKSl7dmFyIGc9Zi5jb25maWdDb250ZXh0PWYuY29uZmlnQ29udGV4dHx8e307YS5wdXNoKGZ1bmN0aW9uKCl7cmV0dXJuIGIuYXR0cnMuY29uZmlnLmNhbGwoYixkLCFlLGcsZil9KX19ZnVuY3Rpb24gQShhLGMsZCxlLGYsZyxoLGkpe3ZhciBqPWEubm9kZXNbMF07cmV0dXJuIGUmJlYoaixjLnRhZyxjLmF0dHJzLGEuYXR0cnMsZiksYS5jaGlsZHJlbj1RKGosYy50YWcsYixiLGMuY2hpbGRyZW4sYS5jaGlsZHJlbiwhMSwwLGMuYXR0cnMuY29udGVudGVkaXRhYmxlP2o6ZCxmLGgpLGEubm9kZXMuaW50YWN0PSEwLGkubGVuZ3RoJiYoYS52aWV3cz1nLGEuY29udHJvbGxlcnM9aSksan1mdW5jdGlvbiBCKGEsYixjKXt2YXIgZDthLiR0cnVzdGVkP2Q9WihiLGMsYSk6KGQ9W3ZhLmNyZWF0ZVRleHROb2RlKGEpXSxiLm5vZGVOYW1lIGluIENhfHxxKGIsZFswXSxjKSk7dmFyIGU7cmV0dXJuIGU9XCJzdHJpbmdcIj09dHlwZW9mIGF8fFwibnVtYmVyXCI9PXR5cGVvZiBhfHxcImJvb2xlYW5cIj09dHlwZW9mIGE/bmV3IGEuY29uc3RydWN0b3IoYSk6YSxlLm5vZGVzPWQsZX1mdW5jdGlvbiBDKGEsYixjLGQsZSxmKXt2YXIgZz1iLm5vZGVzO3JldHVybiBkJiZkPT09dmEuYWN0aXZlRWxlbWVudHx8KGEuJHRydXN0ZWQ/KFcoZyxiKSxnPVooYyxlLGEpKTpcInRleHRhcmVhXCI9PT1mP2MudmFsdWU9YTpkP2QuaW5uZXJIVE1MPWE6KCgxPT09Z1swXS5ub2RlVHlwZXx8Zy5sZW5ndGg+MXx8Z1swXS5ub2RlVmFsdWUudHJpbSYmIWdbMF0ubm9kZVZhbHVlLnRyaW0oKSkmJihXKGIubm9kZXMsYiksZz1bdmEuY3JlYXRlVGV4dE5vZGUoYSldKSxvKGMsZ1swXSxlLGEpKSksYj1uZXcgYS5jb25zdHJ1Y3RvcihhKSxiLm5vZGVzPWcsYn1mdW5jdGlvbiBEKGEsYixjLGQsZSxmLGcpe3JldHVybiBhLm5vZGVzLmxlbmd0aD9hLnZhbHVlT2YoKSE9PWIudmFsdWVPZigpfHxlP0MoYixhLGQsZixjLGcpOihhLm5vZGVzLmludGFjdD0hMCxhKTpCKGIsZCxjKX1mdW5jdGlvbiBFKGEpe2lmKGEuJHRydXN0ZWQpe3ZhciBiPWEubWF0Y2goLzxbXlxcL118XFw+XFxzKltePF0vZyk7aWYobnVsbCE9YilyZXR1cm4gYi5sZW5ndGh9ZWxzZSBpZihCYShhKSlyZXR1cm4gYS5sZW5ndGg7cmV0dXJuIDF9ZnVuY3Rpb24gRihhLGMsZCxlLGYsZyxoLGksail7YT1wKGEpO3ZhciBrPVtdLGw9Yy5sZW5ndGg9PT1hLmxlbmd0aCxuPTAsbz17fSxxPSExO20oYyxmdW5jdGlvbihhLGIpe3E9ITAsb1tjW2JdLmF0dHJzLmtleV09e2FjdGlvbjpEYSxpbmRleDpifX0pLHUoYSkscSYmKGM9cyhhLGMsbyxkKSk7Zm9yKHZhciByPTAsdj0wLHc9YS5sZW5ndGg7dz52O3YrKyl7dmFyIHg9UShkLGYsYyxlLGFbdl0sY1tyXSxnLGUrbnx8bixoLGksaik7eCE9PWImJihsPWwmJngubm9kZXMuaW50YWN0LG4rPUUoeCksY1tyKytdPXgpfXJldHVybiBsfHx0KGEsYyxrKSxjfWZ1bmN0aW9uIEcoYSxiLGMsZCxlKXtpZihudWxsIT1iKXtpZihBYS5jYWxsKGIpPT09QWEuY2FsbChhKSlyZXR1cm4gYjtpZihlJiZlLm5vZGVzKXt2YXIgZj1jLWQsZz1mKyhCYShhKT9hOmIubm9kZXMpLmxlbmd0aDtXKGUubm9kZXMuc2xpY2UoZixnKSxlLnNsaWNlKGYsZykpfWVsc2UgYi5ub2RlcyYmVyhiLm5vZGVzLGIpfXJldHVybiBiPW5ldyBhLmNvbnN0cnVjdG9yLGIudGFnJiYoYj17fSksYi5ub2Rlcz1bXSxifWZ1bmN0aW9uIEgoYSxiKXtyZXR1cm4gYS5hdHRycy5pcz9udWxsPT1iP3ZhLmNyZWF0ZUVsZW1lbnQoYS50YWcsYS5hdHRycy5pcyk6dmEuY3JlYXRlRWxlbWVudE5TKGIsYS50YWcsYS5hdHRycy5pcyk6bnVsbD09Yj92YS5jcmVhdGVFbGVtZW50KGEudGFnKTp2YS5jcmVhdGVFbGVtZW50TlMoYixhLnRhZyl9ZnVuY3Rpb24gSShhLGIsYyxkKXtyZXR1cm4gZD9WKGIsYS50YWcsYS5hdHRycyx7fSxjKTphLmF0dHJzfWZ1bmN0aW9uIEooYSxjLGQsZSxmLGcpe3JldHVybiBudWxsIT1hLmNoaWxkcmVuJiZhLmNoaWxkcmVuLmxlbmd0aD4wP1EoYyxhLnRhZyxiLGIsYS5jaGlsZHJlbixkLmNoaWxkcmVuLCEwLDAsYS5hdHRycy5jb250ZW50ZWRpdGFibGU/YzplLGYsZyk6YS5jaGlsZHJlbn1mdW5jdGlvbiBLKGEsYixjLGQsZSxmLGcpe3ZhciBoPXt0YWc6YS50YWcsYXR0cnM6YixjaGlsZHJlbjpjLG5vZGVzOltkXX07cmV0dXJuIHkoaCxmLGcpLGguY2hpbGRyZW4mJiFoLmNoaWxkcmVuLm5vZGVzJiYoaC5jaGlsZHJlbi5ub2Rlcz1bXSksXCJzZWxlY3RcIj09PWEudGFnJiZcInZhbHVlXCJpbiBhLmF0dHJzJiZWKGQsYS50YWcse3ZhbHVlOmEuYXR0cnMudmFsdWV9LHt9LGUpLGh9ZnVuY3Rpb24gTChhLGIsZCxlKXt2YXIgZjtyZXR1cm4gZj1cImRpZmZcIj09PWsucmVkcmF3LnN0cmF0ZWd5KCkmJmE/YS5pbmRleE9mKGIpOi0xLGY+LTE/ZFtmXTpjKGUpP25ldyBlOnt9fWZ1bmN0aW9uIE0oYSxiLGMsZCl7bnVsbCE9ZC5vbnVubG9hZCYmSWEubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhLmhhbmRsZXJ9KS5pbmRleE9mKGQub251bmxvYWQpPDAmJklhLnB1c2goe2NvbnRyb2xsZXI6ZCxoYW5kbGVyOmQub251bmxvYWR9KSxhLnB1c2goYyksYi5wdXNoKGQpfWZ1bmN0aW9uIE4oYSxiLGMsZCxlLGYpe3ZhciBnPUwoYy52aWV3cyxiLGQsYS5jb250cm9sbGVyKSxoPWEmJmEuYXR0cnMmJmEuYXR0cnMua2V5O3JldHVybiBhPTA9PT1HYXx8SmF8fGQmJmQuaW5kZXhPZihnKT4tMT9hLnZpZXcoZyk6e3RhZzpcInBsYWNlaG9sZGVyXCJ9LFwicmV0YWluXCI9PT1hLnN1YnRyZWU/YTooYS5hdHRycz1hLmF0dHJzfHx7fSxhLmF0dHJzLmtleT1oLE0oZixlLGIsZyksYSl9ZnVuY3Rpb24gTyhhLGIsYyxkKXtmb3IodmFyIGU9YiYmYi5jb250cm9sbGVycztudWxsIT1hLnZpZXc7KWE9TihhLGEudmlldy4kb3JpZ2luYWx8fGEudmlldyxiLGUsZCxjKTtyZXR1cm4gYX1mdW5jdGlvbiBQKGEsYixjLGQsZixnLGgsaSl7dmFyIGo9W10saz1bXTtpZihhPU8oYSxiLGosayksXCJyZXRhaW5cIj09PWEuc3VidHJlZSlyZXR1cm4gYjtpZighYS50YWcmJmsubGVuZ3RoKXRocm93IG5ldyBFcnJvcihcIkNvbXBvbmVudCB0ZW1wbGF0ZSBtdXN0IHJldHVybiBhIHZpcnR1YWwgZWxlbWVudCwgbm90IGFuIGFycmF5LCBzdHJpbmcsIGV0Yy5cIik7YS5hdHRycz1hLmF0dHJzfHx7fSxiLmF0dHJzPWIuYXR0cnN8fHt9O3ZhciBsPU9iamVjdC5rZXlzKGEuYXR0cnMpLG09bC5sZW5ndGg+KFwia2V5XCJpbiBhLmF0dHJzPzE6MCk7aWYodyhhLGIsbCksZShhLnRhZykpe3ZhciBuPTA9PT1iLm5vZGVzLmxlbmd0aDtoPXgoYSxoKTt2YXIgbztpZihuKXtvPUgoYSxoKTt2YXIgcD1JKGEsbyxoLG0pLHI9SihhLG8sYixjLGgsaSk7Yj1LKGEscCxyLG8saCxqLGspfWVsc2Ugbz1BKGIsYSxjLG0saCxqLGksayk7cmV0dXJuKG58fGc9PT0hMCYmbnVsbCE9bykmJnEoZCxvLGYpLHooaSxhLG8sbixiKSxifX1mdW5jdGlvbiBRKGEsYixlLGYsZyxoLGksaixrLGwsbSl7cmV0dXJuIGc9bihnKSxcInJldGFpblwiPT09Zy5zdWJ0cmVlP2g6KGg9RyhnLGgsaixmLGUpLEJhKGcpP0YoZyxoLGEsaixiLGksayxsLG0pOm51bGwhPWcmJmQoZyk/UChnLGgsayxhLGosaSxsLG0pOmMoZyk/aDpEKGgsZyxqLGEsaSxrLGIpKX1mdW5jdGlvbiBSKGEsYil7cmV0dXJuIGEuYWN0aW9uLWIuYWN0aW9ufHxhLmluZGV4LWIuaW5kZXh9ZnVuY3Rpb24gUyhhLGIsYyl7Zm9yKHZhciBkIGluIGIpemEuY2FsbChiLGQpJiYobnVsbD09Y3x8Y1tkXSE9PWJbZF0pJiYoYS5zdHlsZVtkXT1iW2RdKTtmb3IoZCBpbiBjKXphLmNhbGwoYyxkKSYmKHphLmNhbGwoYixkKXx8KGEuc3R5bGVbZF09XCJcIikpfWZ1bmN0aW9uIFQoYSxiLGUsZixnLGgpe2lmKFwiY29uZmlnXCI9PT1ifHxcImtleVwiPT09YilyZXR1cm4hMDtpZihjKGUpJiZcIm9uXCI9PT1iLnNsaWNlKDAsMikpYVtiXT0kKGUsYSk7ZWxzZSBpZihcInN0eWxlXCI9PT1iJiZudWxsIT1lJiZkKGUpKVMoYSxlLGYpO2Vsc2UgaWYobnVsbCE9aClcImhyZWZcIj09PWI/YS5zZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixcImhyZWZcIixlKTphLnNldEF0dHJpYnV0ZShcImNsYXNzTmFtZVwiPT09Yj9cImNsYXNzXCI6YixlKTtlbHNlIGlmKGIgaW4gYSYmIUthW2JdKXRyeXsoXCJpbnB1dFwiIT09Z3x8YVtiXSE9PWUpJiYoYVtiXT1lKX1jYXRjaChpKXthLnNldEF0dHJpYnV0ZShiLGUpfWVsc2UgYS5zZXRBdHRyaWJ1dGUoYixlKX1mdW5jdGlvbiBVKGEsYixjLGQsZSxmLGcpe2lmKGIgaW4gZSYmZD09PWMpXCJ2YWx1ZVwiPT09YiYmXCJpbnB1dFwiPT09ZiYmYS52YWx1ZSE9PWMmJihhLnZhbHVlPWMpO2Vsc2V7ZVtiXT1jO3RyeXtyZXR1cm4gVChhLGIsYyxkLGYsZyl9Y2F0Y2goaCl7aWYoaC5tZXNzYWdlLmluZGV4T2YoXCJJbnZhbGlkIGFyZ3VtZW50XCIpPDApdGhyb3cgaH19fWZ1bmN0aW9uIFYoYSxiLGMsZCxlKXtmb3IodmFyIGYgaW4gYylpZih6YS5jYWxsKGMsZikmJlUoYSxmLGNbZl0sZFtmXSxkLGIsZSkpY29udGludWU7cmV0dXJuIGR9ZnVuY3Rpb24gVyhhLGIpe2Zvcih2YXIgYz1hLmxlbmd0aC0xO2M+LTE7Yy0tKWlmKGFbY10mJmFbY10ucGFyZW50Tm9kZSl7dHJ5e2FbY10ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhW2NdKX1jYXRjaChkKXt9Yj1bXS5jb25jYXQoYiksYltjXSYmWChiW2NdKX1hLmxlbmd0aCYmKGEubGVuZ3RoPTApfWZ1bmN0aW9uIFgoYSl7YS5jb25maWdDb250ZXh0JiZjKGEuY29uZmlnQ29udGV4dC5vbnVubG9hZCkmJihhLmNvbmZpZ0NvbnRleHQub251bmxvYWQoKSxhLmNvbmZpZ0NvbnRleHQub251bmxvYWQ9bnVsbCksYS5jb250cm9sbGVycyYmbChhLmNvbnRyb2xsZXJzLGZ1bmN0aW9uKGEpe2MoYS5vbnVubG9hZCkmJmEub251bmxvYWQoe3ByZXZlbnREZWZhdWx0OmZ9KX0pLGEuY2hpbGRyZW4mJihCYShhLmNoaWxkcmVuKT9sKGEuY2hpbGRyZW4sWCk6YS5jaGlsZHJlbi50YWcmJlgoYS5jaGlsZHJlbikpfWZ1bmN0aW9uIFkoYSxiKXt0cnl7YS5hcHBlbmRDaGlsZCh2YS5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChiKSl9Y2F0Y2goYyl7YS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIixiKX19ZnVuY3Rpb24gWihhLGIsYyl7dmFyIGQ9YS5jaGlsZE5vZGVzW2JdO2lmKGQpe3ZhciBlPTEhPT1kLm5vZGVUeXBlLGY9dmEuY3JlYXRlRWxlbWVudChcInNwYW5cIik7ZT8oYS5pbnNlcnRCZWZvcmUoZixkfHxudWxsKSxmLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWJlZ2luXCIsYyksYS5yZW1vdmVDaGlsZChmKSk6ZC5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmViZWdpblwiLGMpfWVsc2UgWShhLGMpO2Zvcih2YXIgZz1bXTthLmNoaWxkTm9kZXNbYl0hPT1kOylnLnB1c2goYS5jaGlsZE5vZGVzW2JdKSxiKys7cmV0dXJuIGd9ZnVuY3Rpb24gJChhLGIpe3JldHVybiBmdW5jdGlvbihjKXtjPWN8fGV2ZW50LGsucmVkcmF3LnN0cmF0ZWd5KFwiZGlmZlwiKSxrLnN0YXJ0Q29tcHV0YXRpb24oKTt0cnl7cmV0dXJuIGEuY2FsbChiLGMpfWZpbmFsbHl7ZmEoKX19fWZ1bmN0aW9uIF8oYSl7dmFyIGI9TWEuaW5kZXhPZihhKTtyZXR1cm4gMD5iP01hLnB1c2goYSktMTpifWZ1bmN0aW9uIGFhKGEpe2Z1bmN0aW9uIGIoKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aCYmKGE9YXJndW1lbnRzWzBdKSxhfXJldHVybiBiLnRvSlNPTj1mdW5jdGlvbigpe3JldHVybiBhfSxifWZ1bmN0aW9uIGJhKGEsYil7ZnVuY3Rpb24gYygpe3JldHVybihhLmNvbnRyb2xsZXJ8fGYpLmFwcGx5KHRoaXMsYil8fHRoaXN9ZnVuY3Rpb24gZChjKXtmb3IodmFyIGQ9W2NdLmNvbmNhdChiKSxlPTE7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKylkLnB1c2goYXJndW1lbnRzW2VdKTtyZXR1cm4gYS52aWV3LmFwcGx5KGEsZCl9YS5jb250cm9sbGVyJiYoYy5wcm90b3R5cGU9YS5jb250cm9sbGVyLnByb3RvdHlwZSksZC4kb3JpZ2luYWw9YS52aWV3O3ZhciBlPXtjb250cm9sbGVyOmMsdmlldzpkfTtyZXR1cm4gYlswXSYmbnVsbCE9YlswXS5rZXkmJihlLmF0dHJzPXtrZXk6YlswXS5rZXl9KSxlfWZ1bmN0aW9uIGNhKGEsYixjLGQpe2lmKCFkKXtrLnJlZHJhdy5zdHJhdGVneShcImFsbFwiKSxrLnN0YXJ0Q29tcHV0YXRpb24oKSxQYVtjXT1iO3ZhciBlO2U9T2E9YT9hOmE9e2NvbnRyb2xsZXI6Zn07dmFyIGc9bmV3KGEuY29udHJvbGxlcnx8Zik7cmV0dXJuIGU9PT1PYSYmKFJhW2NdPWcsUWFbY109YSksZmEoKSxudWxsPT09YSYmZGEoYixjKSxSYVtjXX1udWxsPT1hJiZkYShiLGMpfWZ1bmN0aW9uIGRhKGEsYil7UGEuc3BsaWNlKGIsMSksUmEuc3BsaWNlKGIsMSksUWEuc3BsaWNlKGIsMSksbWEoYSksTWEuc3BsaWNlKF8oYSksMSl9ZnVuY3Rpb24gZWEoKXtVYSYmKFVhKCksVWE9bnVsbCksbChQYSxmdW5jdGlvbihhLGIpe3ZhciBjPVFhW2JdO2lmKFJhW2JdKXt2YXIgZD1bUmFbYl1dO2sucmVuZGVyKGEsYy52aWV3P2MudmlldyhSYVtiXSxkKTpcIlwiKX19KSxWYSYmKFZhKCksVmE9bnVsbCksU2E9bnVsbCxUYT1uZXcgRGF0ZSxrLnJlZHJhdy5zdHJhdGVneShcImRpZmZcIil9ZnVuY3Rpb24gZmEoKXtcIm5vbmVcIj09PWsucmVkcmF3LnN0cmF0ZWd5KCk/KEdhLS0say5yZWRyYXcuc3RyYXRlZ3koXCJkaWZmXCIpKTprLmVuZENvbXB1dGF0aW9uKCl9ZnVuY3Rpb24gZ2EoYSl7cmV0dXJuIGEuc2xpY2UoJGFbay5yb3V0ZS5tb2RlXS5sZW5ndGgpfWZ1bmN0aW9uIGhhKGEsYixjKXtZYT17fTt2YXIgZD1jLmluZGV4T2YoXCI/XCIpOy0xIT09ZCYmKFlhPWxhKGMuc3Vic3RyKGQrMSxjLmxlbmd0aCkpLGM9Yy5zdWJzdHIoMCxkKSk7dmFyIGU9T2JqZWN0LmtleXMoYiksZj1lLmluZGV4T2YoYyk7aWYoLTEhPT1mKXJldHVybiBrLm1vdW50KGEsYltlW2ZdXSksITA7Zm9yKHZhciBnIGluIGIpaWYoemEuY2FsbChiLGcpKXtpZihnPT09YylyZXR1cm4gay5tb3VudChhLGJbZ10pLCEwO3ZhciBoPW5ldyBSZWdFeHAoXCJeXCIrZy5yZXBsYWNlKC86W15cXC9dKz9cXC57M30vZyxcIiguKj8pXCIpLnJlcGxhY2UoLzpbXlxcL10rL2csXCIoW15cXFxcL10rKVwiKStcIi8/JFwiKTtpZihoLnRlc3QoYykpcmV0dXJuIGMucmVwbGFjZShoLGZ1bmN0aW9uKCl7dmFyIGM9Zy5tYXRjaCgvOlteXFwvXSsvZyl8fFtdLGQ9W10uc2xpY2UuY2FsbChhcmd1bWVudHMsMSwtMik7bChjLGZ1bmN0aW9uKGEsYil7WWFbYS5yZXBsYWNlKC86fFxcLi9nLFwiXCIpXT1kZWNvZGVVUklDb21wb25lbnQoZFtiXSl9KSxrLm1vdW50KGEsYltnXSl9KSwhMH19ZnVuY3Rpb24gaWEoYSl7aWYoYT1hfHxldmVudCwhKGEuY3RybEtleXx8YS5tZXRhS2V5fHxhLnNoaWZ0S2V5fHwyPT09YS53aGljaCkpe2EucHJldmVudERlZmF1bHQ/YS5wcmV2ZW50RGVmYXVsdCgpOmEucmV0dXJuVmFsdWU9ITE7dmFyIGIsYz1hLmN1cnJlbnRUYXJnZXR8fGEuc3JjRWxlbWVudDtmb3IoYj1cInBhdGhuYW1lXCI9PT1rLnJvdXRlLm1vZGUmJmMuc2VhcmNoP2xhKGMuc2VhcmNoLnNsaWNlKDEpKTp7fTtjJiYhL2EvaS50ZXN0KGMubm9kZU5hbWUpOyljPWMucGFyZW50Tm9kZTtHYT0wLGsucm91dGUoY1trLnJvdXRlLm1vZGVdLnNsaWNlKCRhW2sucm91dGUubW9kZV0ubGVuZ3RoKSxiKX19ZnVuY3Rpb24gamEoKXtcImhhc2hcIiE9PWsucm91dGUubW9kZSYmd2EuaGFzaD93YS5oYXNoPXdhLmhhc2g6YS5zY3JvbGxUbygwLDApfWZ1bmN0aW9uIGthKGEsYyl7dmFyIGU9e30sZj1bXTtmb3IodmFyIGcgaW4gYSlpZih6YS5jYWxsKGEsZykpe3ZhciBoPWM/YytcIltcIitnK1wiXVwiOmcsaT1hW2ddO2lmKG51bGw9PT1pKWYucHVzaChlbmNvZGVVUklDb21wb25lbnQoaCkpO2Vsc2UgaWYoZChpKSlmLnB1c2goa2EoaSxoKSk7ZWxzZSBpZihCYShpKSl7dmFyIGo9W107ZVtoXT1lW2hdfHx7fSxsKGksZnVuY3Rpb24oYSl7ZVtoXVthXXx8KGVbaF1bYV09ITAsai5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChoKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQoYSkpKX0pLGYucHVzaChqLmpvaW4oXCImXCIpKX1lbHNlIGkhPT1iJiZmLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGgpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChpKSl9cmV0dXJuIGYuam9pbihcIiZcIil9ZnVuY3Rpb24gbGEoYSl7aWYoXCJcIj09PWF8fG51bGw9PWEpcmV0dXJue307XCI/XCI9PT1hLmNoYXJBdCgwKSYmKGE9YS5zbGljZSgxKSk7dmFyIGI9YS5zcGxpdChcIiZcIiksYz17fTtyZXR1cm4gbChiLGZ1bmN0aW9uKGEpe3ZhciBiPWEuc3BsaXQoXCI9XCIpLGQ9ZGVjb2RlVVJJQ29tcG9uZW50KGJbMF0pLGU9Mj09PWIubGVuZ3RoP2RlY29kZVVSSUNvbXBvbmVudChiWzFdKTpudWxsO251bGwhPWNbZF0/KEJhKGNbZF0pfHwoY1tkXT1bY1tkXV0pLGNbZF0ucHVzaChlKSk6Y1tkXT1lfSksY31mdW5jdGlvbiBtYShhKXt2YXIgYz1fKGEpO1coYS5jaGlsZE5vZGVzLE5hW2NdKSxOYVtjXT1ifWZ1bmN0aW9uIG5hKGEsYil7dmFyIGM9ay5wcm9wKGIpO3JldHVybiBhLnRoZW4oYyksYy50aGVuPWZ1bmN0aW9uKGMsZCl7cmV0dXJuIG5hKGEudGhlbihjLGQpLGIpfSxjW1wiY2F0Y2hcIl09Yy50aGVuLmJpbmQobnVsbCxudWxsKSxjfWZ1bmN0aW9uIG9hKGEsYil7ZnVuY3Rpb24gZShhKXtpPWF8fGViLGwubWFwKGZ1bmN0aW9uKGEpe2k9PT1kYj9hLnJlc29sdmUoaik6YS5yZWplY3Qoail9KX1mdW5jdGlvbiBmKGEsYixlLGYpe2lmKChudWxsIT1qJiZkKGopfHxjKGopKSYmYyhhKSl0cnl7dmFyIGc9MDthLmNhbGwoaixmdW5jdGlvbihhKXtnKyt8fChqPWEsYigpKX0sZnVuY3Rpb24oYSl7ZysrfHwoaj1hLGUoKSl9KX1jYXRjaChoKXtrLmRlZmVycmVkLm9uZXJyb3IoaCksaj1oLGUoKX1lbHNlIGYoKX1mdW5jdGlvbiBnKCl7dmFyIGQ7dHJ5e2Q9aiYmai50aGVufWNhdGNoKGwpe3JldHVybiBrLmRlZmVycmVkLm9uZXJyb3IobCksaj1sLGk9Y2IsZygpfWk9PT1jYiYmay5kZWZlcnJlZC5vbmVycm9yKGopLGYoZCxmdW5jdGlvbigpe2k9YmIsZygpfSxmdW5jdGlvbigpe2k9Y2IsZygpfSxmdW5jdGlvbigpe3RyeXtpPT09YmImJmMoYSk/aj1hKGopOmk9PT1jYiYmYyhiKSYmKGo9YihqKSxpPWJiKX1jYXRjaChnKXtyZXR1cm4gay5kZWZlcnJlZC5vbmVycm9yKGcpLGo9ZyxlKCl9aj09PWg/KGo9VHlwZUVycm9yKCksZSgpKTpmKGQsZnVuY3Rpb24oKXtlKGRiKX0sZSxmdW5jdGlvbigpe2UoaT09PWJiJiZkYil9KX0pfXZhciBoPXRoaXMsaT0wLGo9MCxsPVtdO2gucHJvbWlzZT17fSxoLnJlc29sdmU9ZnVuY3Rpb24oYSl7cmV0dXJuIGl8fChqPWEsaT1iYixnKCkpLGh9LGgucmVqZWN0PWZ1bmN0aW9uKGEpe3JldHVybiBpfHwoaj1hLGk9Y2IsZygpKSxofSxoLnByb21pc2UudGhlbj1mdW5jdGlvbihhLGIpe3ZhciBjPW5ldyBvYShhLGIpO3JldHVybiBpPT09ZGI/Yy5yZXNvbHZlKGopOmk9PT1lYj9jLnJlamVjdChqKTpsLnB1c2goYyksYy5wcm9taXNlfX1mdW5jdGlvbiBwYShhKXtyZXR1cm4gYX1mdW5jdGlvbiBxYShjKXt2YXIgZD1cIm1pdGhyaWxfY2FsbGJhY2tfXCIrKG5ldyBEYXRlKS5nZXRUaW1lKCkrXCJfXCIrTWF0aC5yb3VuZCgxZTE2Kk1hdGgucmFuZG9tKCkpLnRvU3RyaW5nKDM2KSxlPXZhLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7YVtkXT1mdW5jdGlvbihmKXtlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSksYy5vbmxvYWQoe3R5cGU6XCJsb2FkXCIsdGFyZ2V0OntyZXNwb25zZVRleHQ6Zn19KSxhW2RdPWJ9LGUub25lcnJvcj1mdW5jdGlvbigpe3JldHVybiBlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSksYy5vbmVycm9yKHt0eXBlOlwiZXJyb3JcIix0YXJnZXQ6e3N0YXR1czo1MDAscmVzcG9uc2VUZXh0OkpTT04uc3RyaW5naWZ5KHtlcnJvcjpcIkVycm9yIG1ha2luZyBqc29ucCByZXF1ZXN0XCJ9KX19KSxhW2RdPWIsITF9LGUub25sb2FkPWZ1bmN0aW9uKCl7cmV0dXJuITF9LGUuc3JjPWMudXJsKyhjLnVybC5pbmRleE9mKFwiP1wiKT4wP1wiJlwiOlwiP1wiKSsoYy5jYWxsYmFja0tleT9jLmNhbGxiYWNrS2V5OlwiY2FsbGJhY2tcIikrXCI9XCIrZCtcIiZcIitrYShjLmRhdGF8fHt9KSx2YS5ib2R5LmFwcGVuZENoaWxkKGUpfWZ1bmN0aW9uIHJhKGIpe3ZhciBkPW5ldyBhLlhNTEh0dHBSZXF1ZXN0O2lmKGQub3BlbihiLm1ldGhvZCxiLnVybCwhMCxiLnVzZXIsYi5wYXNzd29yZCksZC5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXs0PT09ZC5yZWFkeVN0YXRlJiYoZC5zdGF0dXM+PTIwMCYmZC5zdGF0dXM8MzAwP2Iub25sb2FkKHt0eXBlOlwibG9hZFwiLHRhcmdldDpkfSk6Yi5vbmVycm9yKHt0eXBlOlwiZXJyb3JcIix0YXJnZXQ6ZH0pKX0sYi5zZXJpYWxpemU9PT1KU09OLnN0cmluZ2lmeSYmYi5kYXRhJiZcIkdFVFwiIT09Yi5tZXRob2QmJmQuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiKSxiLmRlc2VyaWFsaXplPT09SlNPTi5wYXJzZSYmZC5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0LypcIiksYyhiLmNvbmZpZykpe3ZhciBmPWIuY29uZmlnKGQsYik7bnVsbCE9ZiYmKGQ9Zil9dmFyIGc9XCJHRVRcIiE9PWIubWV0aG9kJiZiLmRhdGE/Yi5kYXRhOlwiXCI7aWYoZyYmIWUoZykmJmcuY29uc3RydWN0b3IhPT1hLkZvcm1EYXRhKXRocm93IG5ldyBFcnJvcihcIlJlcXVlc3QgZGF0YSBzaG91bGQgYmUgZWl0aGVyIGJlIGEgc3RyaW5nIG9yIEZvcm1EYXRhLiBDaGVjayB0aGUgYHNlcmlhbGl6ZWAgb3B0aW9uIGluIGBtLnJlcXVlc3RgXCIpO3JldHVybiBkLnNlbmQoZyksZH1mdW5jdGlvbiBzYShhKXtyZXR1cm4gYS5kYXRhVHlwZSYmXCJqc29ucFwiPT09YS5kYXRhVHlwZS50b0xvd2VyQ2FzZSgpP3FhKGEpOnJhKGEpfWZ1bmN0aW9uIHRhKGEsYixjKXtpZihcIkdFVFwiPT09YS5tZXRob2QmJlwianNvbnBcIiE9PWEuZGF0YVR5cGUpe3ZhciBkPWEudXJsLmluZGV4T2YoXCI/XCIpPDA/XCI/XCI6XCImXCIsZT1rYShiKTthLnVybCs9ZT9kK2U6XCJcIn1lbHNlIGEuZGF0YT1jKGIpfWZ1bmN0aW9uIHVhKGEsYil7cmV0dXJuIGImJihhPWEucmVwbGFjZSgvOlthLXpdXFx3Ky9naSxmdW5jdGlvbihhKXt2YXIgYz1hLnNsaWNlKDEpLGQ9YltjXTtyZXR1cm4gZGVsZXRlIGJbY10sZH0pKSxhfWsudmVyc2lvbj1mdW5jdGlvbigpe3JldHVyblwidjAuMi4zXCJ9O3ZhciB2YSx3YSx4YSx5YSx6YT17fS5oYXNPd25Qcm9wZXJ0eSxBYT17fS50b1N0cmluZyxCYT1BcnJheS5pc0FycmF5fHxmdW5jdGlvbihhKXtyZXR1cm5cIltvYmplY3QgQXJyYXldXCI9PT1BYS5jYWxsKGEpfSxDYT17QVJFQToxLEJBU0U6MSxCUjoxLENPTDoxLENPTU1BTkQ6MSxFTUJFRDoxLEhSOjEsSU1HOjEsSU5QVVQ6MSxLRVlHRU46MSxMSU5LOjEsTUVUQToxLFBBUkFNOjEsU09VUkNFOjEsVFJBQ0s6MSxXQlI6MX07ay5kZXBzPWZ1bmN0aW9uKGIpe3JldHVybiBnKGE9Ynx8d2luZG93KSxhfSxrLmRlcHMoYSk7dmFyIERhPTEsRWE9MixGYT0zLEdhPTA7ay5zdGFydENvbXB1dGF0aW9uPWZ1bmN0aW9uKCl7R2ErK30say5lbmRDb21wdXRhdGlvbj1mdW5jdGlvbigpe0dhPjE/R2EtLTooR2E9MCxrLnJlZHJhdygpKX07dmFyIEhhLElhPVtdLEphPSExLEthPXtsaXN0OjEsc3R5bGU6MSxmb3JtOjEsdHlwZToxLHdpZHRoOjEsaGVpZ2h0OjF9LExhPXthcHBlbmRDaGlsZDpmdW5jdGlvbihhKXtIYT09PWImJihIYT12YS5jcmVhdGVFbGVtZW50KFwiaHRtbFwiKSksdmEuZG9jdW1lbnRFbGVtZW50JiZ2YS5kb2N1bWVudEVsZW1lbnQhPT1hP3ZhLnJlcGxhY2VDaGlsZChhLHZhLmRvY3VtZW50RWxlbWVudCk6dmEuYXBwZW5kQ2hpbGQoYSksdGhpcy5jaGlsZE5vZGVzPXZhLmNoaWxkTm9kZXN9LGluc2VydEJlZm9yZTpmdW5jdGlvbihhKXt0aGlzLmFwcGVuZENoaWxkKGEpfSxjaGlsZE5vZGVzOltdfSxNYT1bXSxOYT17fTtrLnJlbmRlcj1mdW5jdGlvbihhLGMsZCl7aWYoIWEpdGhyb3cgbmV3IEVycm9yKFwiRW5zdXJlIHRoZSBET00gZWxlbWVudCBiZWluZyBwYXNzZWQgdG8gbS5yb3V0ZS9tLm1vdW50L20ucmVuZGVyIGlzIG5vdCB1bmRlZmluZWQuXCIpO3ZhciBlLGY9W10sZz1fKGEpLGg9YT09PXZhO2U9aHx8YT09PXZhLmRvY3VtZW50RWxlbWVudD9MYTphLGgmJlwiaHRtbFwiIT09Yy50YWcmJihjPXt0YWc6XCJodG1sXCIsYXR0cnM6e30sY2hpbGRyZW46Y30pLE5hW2ddPT09YiYmVyhlLmNoaWxkTm9kZXMpLGQ9PT0hMCYmbWEoYSksTmFbZ109UShlLG51bGwsYixiLGMsTmFbZ10sITEsMCxudWxsLGIsZiksbChmLGZ1bmN0aW9uKGEpe2EoKX0pfSxrLnRydXN0PWZ1bmN0aW9uKGEpe3JldHVybiBhPW5ldyBTdHJpbmcoYSksYS4kdHJ1c3RlZD0hMCxhfSxrLnByb3A9ZnVuY3Rpb24oYSl7cmV0dXJuKG51bGwhPWEmJmQoYSl8fGMoYSkpJiZjKGEudGhlbik/bmEoYSk6YWEoYSl9O3ZhciBPYSxQYT1bXSxRYT1bXSxSYT1bXSxTYT1udWxsLFRhPTAsVWE9bnVsbCxWYT1udWxsLFdhPTE2O2suY29tcG9uZW50PWZ1bmN0aW9uKGEpe3ZhciBiPVtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpO3JldHVybiBiYShhLGIpfSxrLm1vdW50PWsubW9kdWxlPWZ1bmN0aW9uKGEsYil7aWYoIWEpdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIGVuc3VyZSB0aGUgRE9NIGVsZW1lbnQgZXhpc3RzIGJlZm9yZSByZW5kZXJpbmcgYSB0ZW1wbGF0ZSBpbnRvIGl0LlwiKTt2YXIgZD1QYS5pbmRleE9mKGEpOzA+ZCYmKGQ9UGEubGVuZ3RoKTt2YXIgZT0hMSxmPXtwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe2U9ITAsVWE9VmE9bnVsbH19O3JldHVybiBsKElhLGZ1bmN0aW9uKGEpe2EuaGFuZGxlci5jYWxsKGEuY29udHJvbGxlcixmKSxhLmNvbnRyb2xsZXIub251bmxvYWQ9bnVsbH0pLGU/bChJYSxmdW5jdGlvbihhKXthLmNvbnRyb2xsZXIub251bmxvYWQ9YS5oYW5kbGVyfSk6SWE9W10sUmFbZF0mJmMoUmFbZF0ub251bmxvYWQpJiZSYVtkXS5vbnVubG9hZChmKSxjYShiLGEsZCxlKX07dmFyIFhhPSExO2sucmVkcmF3PWZ1bmN0aW9uKGIpe2lmKCFYYSl7WGE9ITAsYiYmKEphPSEwKTt0cnl7U2EmJiFiPyh4YT09PWEucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxuZXcgRGF0ZS1UYT5XYSkmJihTYT4wJiZ5YShTYSksU2E9eGEoZWEsV2EpKTooZWEoKSxTYT14YShmdW5jdGlvbigpe1NhPW51bGx9LFdhKSl9ZmluYWxseXtYYT1KYT0hMX19fSxrLnJlZHJhdy5zdHJhdGVneT1rLnByb3AoKSxrLndpdGhBdHRyPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gZnVuY3Rpb24oZCl7ZD1kfHxldmVudDt2YXIgZT1kLmN1cnJlbnRUYXJnZXR8fHRoaXMsZj1jfHx0aGlzLGc9YSBpbiBlP2VbYV06ZS5nZXRBdHRyaWJ1dGUoYSk7Yi5jYWxsKGYsZyl9fTt2YXIgWWEsWmEsJGE9e3BhdGhuYW1lOlwiXCIsaGFzaDpcIiNcIixzZWFyY2g6XCI/XCJ9LF9hPWYsYWI9ITE7ay5yb3V0ZT1mdW5jdGlvbihiLGMsZCxmKXtpZigwPT09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4gWmE7aWYoMz09PWFyZ3VtZW50cy5sZW5ndGgmJmUoYykpe19hPWZ1bmN0aW9uKGEpe3ZhciBlPVphPWdhKGEpO2lmKCFoYShiLGQsZSkpe2lmKGFiKXRocm93IG5ldyBFcnJvcihcIkVuc3VyZSB0aGUgZGVmYXVsdCByb3V0ZSBtYXRjaGVzIG9uZSBvZiB0aGUgcm91dGVzIGRlZmluZWQgaW4gbS5yb3V0ZVwiKTthYj0hMCxrLnJvdXRlKGMsITApLGFiPSExfX07dmFyIGc9XCJoYXNoXCI9PT1rLnJvdXRlLm1vZGU/XCJvbmhhc2hjaGFuZ2VcIjpcIm9ucG9wc3RhdGVcIjtyZXR1cm4gYVtnXT1mdW5jdGlvbigpe3ZhciBhPXdhW2sucm91dGUubW9kZV07XCJwYXRobmFtZVwiPT09ay5yb3V0ZS5tb2RlJiYoYSs9d2Euc2VhcmNoKSxaYSE9PWdhKGEpJiZfYShhKX0sVWE9amEsdm9pZCBhW2ddKCl9aWYoYi5hZGRFdmVudExpc3RlbmVyfHxiLmF0dGFjaEV2ZW50KXt2YXIgaD1cInBhdGhuYW1lXCIhPT1rLnJvdXRlLm1vZGU/d2EucGF0aG5hbWU6XCJcIjtyZXR1cm4gYi5ocmVmPWgrJGFbay5yb3V0ZS5tb2RlXStmLmF0dHJzLmhyZWYsdm9pZChiLmFkZEV2ZW50TGlzdGVuZXI/KGIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsaWEpLGIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsaWEpKTooYi5kZXRhY2hFdmVudChcIm9uY2xpY2tcIixpYSksYi5hdHRhY2hFdmVudChcIm9uY2xpY2tcIixpYSkpKX1pZihlKGIpKXt2YXIgaT1aYTtaYT1iO3ZhciBqLGw9Y3x8e30sbT1aYS5pbmRleE9mKFwiP1wiKTtqPW0+LTE/bGEoWmEuc2xpY2UobSsxKSk6e307Zm9yKHZhciBuIGluIGwpemEuY2FsbChsLG4pJiYoaltuXT1sW25dKTt2YXIgbyxwPWthKGopO289bT4tMT9aYS5zbGljZSgwLG0pOlphLHAmJihaYT1vKygtMT09PW8uaW5kZXhPZihcIj9cIik/XCI/XCI6XCImXCIpK3ApO3ZhciBxPSgzPT09YXJndW1lbnRzLmxlbmd0aD9kOmMpPT09ITB8fGk9PT1iO2lmKGEuaGlzdG9yeS5wdXNoU3RhdGUpe3ZhciByPXE/XCJyZXBsYWNlU3RhdGVcIjpcInB1c2hTdGF0ZVwiO1VhPWphLFZhPWZ1bmN0aW9uKCl7YS5oaXN0b3J5W3JdKG51bGwsdmEudGl0bGUsJGFbay5yb3V0ZS5tb2RlXStaYSl9LF9hKCRhW2sucm91dGUubW9kZV0rWmEpfWVsc2Ugd2Fbay5yb3V0ZS5tb2RlXT1aYSxfYSgkYVtrLnJvdXRlLm1vZGVdK1phKX19LGsucm91dGUucGFyYW09ZnVuY3Rpb24oYSl7aWYoIVlhKXRocm93IG5ldyBFcnJvcihcIllvdSBtdXN0IGNhbGwgbS5yb3V0ZShlbGVtZW50LCBkZWZhdWx0Um91dGUsIHJvdXRlcykgYmVmb3JlIGNhbGxpbmcgbS5yb3V0ZS5wYXJhbSgpXCIpO3JldHVybiBhP1lhW2FdOllhfSxrLnJvdXRlLm1vZGU9XCJzZWFyY2hcIixrLnJvdXRlLmJ1aWxkUXVlcnlTdHJpbmc9a2Esay5yb3V0ZS5wYXJzZVF1ZXJ5U3RyaW5nPWxhLGsuZGVmZXJyZWQ9ZnVuY3Rpb24oKXt2YXIgYT1uZXcgb2E7cmV0dXJuIGEucHJvbWlzZT1uYShhLnByb21pc2UpLGF9O3ZhciBiYj0xLGNiPTIsZGI9MyxlYj00O3JldHVybiBrLmRlZmVycmVkLm9uZXJyb3I9ZnVuY3Rpb24oYSl7aWYoXCJbb2JqZWN0IEVycm9yXVwiPT09QWEuY2FsbChhKSYmIS8gRXJyb3IvLnRlc3QoYS5jb25zdHJ1Y3Rvci50b1N0cmluZygpKSl0aHJvdyBHYT0wLGF9LGsuc3luYz1mdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEsYil7cmV0dXJuIGZ1bmN0aW9uKGcpe3JldHVybiBlW2FdPWcsYnx8KGY9XCJyZWplY3RcIiksMD09PS0tZCYmKGMucHJvbWlzZShlKSxjW2ZdKGUpKSxnfX12YXIgYz1rLmRlZmVycmVkKCksZD1hLmxlbmd0aCxlPW5ldyBBcnJheShkKSxmPVwicmVzb2x2ZVwiO3JldHVybiBhLmxlbmd0aD4wP2woYSxmdW5jdGlvbihhLGMpe2EudGhlbihiKGMsITApLGIoYywhMSkpfSk6Yy5yZXNvbHZlKFtdKSxjLnByb21pc2V9LGsucmVxdWVzdD1mdW5jdGlvbihhKXthLmJhY2tncm91bmQhPT0hMCYmay5zdGFydENvbXB1dGF0aW9uKCk7dmFyIGIsYyxkLGU9bmV3IG9hLGY9YS5kYXRhVHlwZSYmXCJqc29ucFwiPT09YS5kYXRhVHlwZS50b0xvd2VyQ2FzZSgpO3JldHVybiBmPyhiPWEuc2VyaWFsaXplPWM9YS5kZXNlcmlhbGl6ZT1wYSxkPWZ1bmN0aW9uKGEpe3JldHVybiBhLnJlc3BvbnNlVGV4dH0pOihiPWEuc2VyaWFsaXplPWEuc2VyaWFsaXplfHxKU09OLnN0cmluZ2lmeSxjPWEuZGVzZXJpYWxpemU9YS5kZXNlcmlhbGl6ZXx8SlNPTi5wYXJzZSxkPWEuZXh0cmFjdHx8ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVzcG9uc2VUZXh0Lmxlbmd0aHx8YyE9PUpTT04ucGFyc2U/YS5yZXNwb25zZVRleHQ6bnVsbH0pLGEubWV0aG9kPShhLm1ldGhvZHx8XCJHRVRcIikudG9VcHBlckNhc2UoKSxhLnVybD11YShhLnVybCxhLmRhdGEpLHRhKGEsYS5kYXRhLGIpLGEub25sb2FkPWEub25lcnJvcj1mdW5jdGlvbihiKXt0cnl7Yj1ifHxldmVudDt2YXIgZj1jKGQoYi50YXJnZXQsYSkpO1wibG9hZFwiPT09Yi50eXBlPyhhLnVud3JhcFN1Y2Nlc3MmJihmPWEudW53cmFwU3VjY2VzcyhmLGIudGFyZ2V0KSksQmEoZikmJmEudHlwZT9sKGYsZnVuY3Rpb24oYixjKXtmW2NdPW5ldyBhLnR5cGUoYil9KTphLnR5cGUmJihmPW5ldyBhLnR5cGUoZikpLGUucmVzb2x2ZShmKSk6KGEudW53cmFwRXJyb3ImJihmPWEudW53cmFwRXJyb3IoZixiLnRhcmdldCkpLGUucmVqZWN0KGYpKX1jYXRjaChnKXtlLnJlamVjdChnKX1maW5hbGx5e2EuYmFja2dyb3VuZCE9PSEwJiZrLmVuZENvbXB1dGF0aW9uKCl9fSxzYShhKSxlLnByb21pc2U9bmEoZS5wcm9taXNlLGEuaW5pdGlhbFZhbHVlKSxlLnByb21pc2V9LGt9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pdGhyaWwubWluLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9ib3dlcl9jb21wb25lbnRzL21pdGhyaWwvbWl0aHJpbC5taW4uanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IG0gZnJvbSBcIm1pdGhyaWxcIjtcbi8vIGltcG9ydCBoZWxwZXIgZnJvbSBcIi4vaGVscGVyXCI7XG5cbmNvbnN0IG5hdmJhciA9IGFyZ3MgPT4ge1xuICAgIHJldHVybiBtKFwiLmRpc3BsYXlGbGV4Rml4ZWRcIiwgW1xuICAgICAgICBtKFwiLmRpc3BsYXlGbGV4IGNhcmQgZmxleF9yb3dcIiwge1xuICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJmbGV4XCI6IDEsXG4gICAgICAgICAgICAgICAgXCJhbGlnbi1pdGVtc1wiOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIFwicGFkZGluZy10b3BcIjogXCIycmVtXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW1xuICAgICAgICAgICAgbShcImFcIiwge1xuICAgICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImZsZXhcIjogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dC1hbGlnblwiOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjExcHhcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJvbmNsaWNrXCI6IGFyZ3MubF9idG4uYWN0XG4gICAgICAgICAgICB9LCBhcmdzLmxfYnRuLmxhYmVsKSxcbiAgICAgICAgICAgIG0oXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImZsZXhcIjogXCIzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dC1hbGlnblwiOiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgYXJncy50aXRsZSksXG4gICAgICAgICAgICBtKFwiYVwiLCB7XG4gICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZmxleFwiOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMTFweFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIm9uY2xpY2tcIjogYXJncy5yX2J0bi5hY3RcbiAgICAgICAgICAgIH0sIGFyZ3Mucl9idG4ubGFiZWwpXG4gICAgICAgIF0pXG4gICAgXSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5hdmJhcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2VzNi9jb21wb25lbnRzL25hdmJhci5qc1xuICoqLyIsImltcG9ydCBtIGZyb20gXCJtaXRocmlsXCI7XHJcbmltcG9ydCBfIGZyb20gXCJ1bmRlcnNjb3JlXCI7XHJcbmltcG9ydCBXb3JkcyBmcm9tIFwiLi9tb2RlbC93b3Jkc1wiO1xyXG5pbXBvcnQgQ2hlY2sgZnJvbSBcIi4vbW9kZWwvY2hlY2tcIjtcclxuXHJcbmxldCB2bSA9IHtcclxuICAgIHNjZW5lOiB7XHJcbiAgICAgICAgaG9tZToge1xyXG4gICAgICAgICAgICBuYXZiYXI6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIuODm+ODvOODoFwiLFxyXG4gICAgICAgICAgICAgICAgbF9idG46IHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLoqK3lrppcIixcclxuICAgICAgICAgICAgICAgICAgICBhY3Q6IGZ1bmN0aW9uKCl7fVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJfYnRuOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi44OY44Or44OXXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0OiBmdW5jdGlvbigpe31cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgbWVudTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi5Y2Y6Kqe5biz44G4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIvd29yZHNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlwczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLljZjoqp7jga7nrqHnkIbjgYzjgafjgY3jgb7jgZnjgIJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi44G+44Ga44Gv44GT44GT44Gn5Y2Y6Kqe44KS55m76Yyy44GX44Gm44GP44Gg44GV44GE44CCXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLmmpfoqJjjgqvjg7zjg4njgbhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIi9jaGVja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXBzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIuWNmOiqnuOBruaal+iomOOBjOOBp+OBjeOBvuOBmeOAglwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLnm7TmhJ/jgajjgrnjg5Tjg7zjg4njgYzlpKfliIdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi44CO44KP44GL44KL44CP44CO44KP44GL44KJ44Gq44GE44CP44Gn5YiG44GR44KL44CCXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLjg4bjgrnjg4jjgbhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIi90ZXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpcHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi5Y2Y6Kqe44Gu5b6p57+S44GM44Gn44GN44G+44GZ44CCXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIuato+OBl+OBhOWNmOiqnuOBruaEj+WRs+OCkumBuOaKnuOBl+OBpuOBj+OBoOOBleOBhOOAglwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHdvcmRzOiB7XHJcbiAgICAgICAgICAgIG5hdmJhcjoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi5Y2Y6Kqe5bizXCIsXHJcbiAgICAgICAgICAgICAgICBsX2J0bjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIuaIu+OCi1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbS5yb3V0ZShcIi9ob21lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByX2J0bjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIui/veWKoFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbS5yb3V0ZShcIi93b3Jkcy9uZXdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICBsaXN0OiBbXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3b3Jkc05ldzoge1xyXG4gICAgICAgICAgICBuYXZiYXI6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIuWNmOiqnuOCkui/veWKoFwiLFxyXG4gICAgICAgICAgICAgICAgbF9idG46IHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLmiLvjgotcIixcclxuICAgICAgICAgICAgICAgICAgICBhY3Q6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG0ucm91dGUoXCIvd29yZHNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJfYnRuOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0OiBmdW5jdGlvbigpe31cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uMTogXCLov73liqDjgZnjgotcIixcclxuICAgICAgICAgICAgICAgIGJ1dHRvbjI6IFwi57aa44GR44Gm6L+95YqgXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd29yZHNFZGl0OiB7XHJcbiAgICAgICAgICAgIG5hdmJhcjoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi5Y2Y6Kqe44KS57eo6ZuGXCIsXHJcbiAgICAgICAgICAgICAgICBsX2J0bjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIuaIu+OCi1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbS5yb3V0ZShcIi93b3Jkc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcl9idG46IHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBhY3Q6IGZ1bmN0aW9uKCl7fVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICBidXR0b246IFwi55m76Yyy44GZ44KLXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hlY2s6IHtcclxuICAgICAgICAgICAgbmF2YmFyOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLmmpfoqJjjgqvjg7zjg4kgLSDjg6Hjg4vjg6Xjg7xcIixcclxuICAgICAgICAgICAgICAgIGxfYnRuOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi5oi744KLXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0OiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbS5yb3V0ZShcIi9ob21lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByX2J0bjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIuODmOODq+ODl1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdDogZnVuY3Rpb24oKXt9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiY2hlY2tMaW1pdFNlbGVjdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIuWVj+mhjOaVsOOBrumBuOaKnlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIjXllY9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIjEw5ZWPXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMTUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCIxNeWVj1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiMjDllY9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJ1dHRvbjogXCLmmpfoqJjjgqvjg7zjg4njgbhcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGVja1J1bjoge1xyXG4gICAgICAgICAgICBuYXZiYXI6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIuaal+iomOOCq+ODvOODiSAtIOWun+i3tVwiLFxyXG4gICAgICAgICAgICAgICAgbF9idG46IHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLmiLvjgotcIixcclxuICAgICAgICAgICAgICAgICAgICBhY3Q6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtLnJvdXRlKFwiL2NoZWNrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByX2J0bjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdDogZnVuY3Rpb24oKXt9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHt9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0ZXN0OiB7XHJcbiAgICAgICAgICAgIG5hdmJhcjoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi44OG44K544OIIC0g44Oh44OL44Ol44O8XCIsXHJcbiAgICAgICAgICAgICAgICBsX2J0bjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIuaIu+OCi1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdDogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG0ucm91dGUoXCIvaG9tZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcl9idG46IHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLjg5jjg6vjg5dcIixcclxuICAgICAgICAgICAgICAgICAgICBhY3Q6IGZ1bmN0aW9uKCl7fVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50OiB7fVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgVGVzdFJ1bjoge1xyXG4gICAgICAgICAgICBuYXZiYXI6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIuODhuOCueODiCAtIOWun+i3tVwiLFxyXG4gICAgICAgICAgICAgICAgbF9idG46IHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLmiLvjgotcIixcclxuICAgICAgICAgICAgICAgICAgICBhY3Q6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtLnJvdXRlKFwiL3Rlc3RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJfYnRuOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0OiBmdW5jdGlvbigpe31cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDoge31cclxuICAgICAgICB9LFxyXG4gICAgICAgIFRlc3RSZXN1bHQ6IHtcclxuICAgICAgICAgICAgbmF2YmFyOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLjg4bjgrnjg4ggLSDntZDmnpxcIixcclxuICAgICAgICAgICAgICAgIGxfYnRuOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi5oi744KLXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0OiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbS5yb3V0ZShcIi9ob21lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByX2J0bjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdDogZnVuY3Rpb24oKXt9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHt9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGluaXQ6ICgpID0+IHtcclxuICAgICAgICB2bS53b3JkTGlzdCA9IG5ldyBXb3Jkcy5MaXN0KCk7XHJcbiAgICAgICAgdm0uY2hlY2tMaXN0ID0gbmV3IENoZWNrLkxpc3QoKTtcclxuICAgICAgICAvLyB0aGlzLmFkZEFsbCh0aGlzLmxpc3QsIFtdKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9LFxyXG4gICAgYWRkOiAobGlzdCwgYWRkSXRlbSkgPT4ge1xyXG4gICAgICAgIGlmKGFkZEl0ZW0pe1xyXG4gICAgICAgICAgICBsaXN0LnB1c2gobmV3IFdvcmRzLkl0ZW0oYWRkSXRlbSkpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFkZEFsbDogKGxpc3QsIGFkZExpc3QpID0+IHtcclxuICAgICAgICBhZGRMaXN0Lm1hcChhZGRJdGVtID0+IHZtLmFkZChsaXN0LCBhZGRJdGVtKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSxcclxuICAgIGFkZENoZWNrOiBhZGRJdGVtID0+IHtcclxuICAgICAgICB2bS5jaGVja0xpc3QucHVzaChuZXcgQ2hlY2suSXRlbShhZGRJdGVtKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSxcclxuICAgIGFkZENoZWNrQWxsOiBhZGRMaXN0ID0+IHtcclxuICAgICAgICBhZGRMaXN0Lm1hcChhZGRJdGVtID0+IHZtLmFkZENoZWNrKGFkZEl0ZW0pKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9LFxyXG4gICAgZ2V0VXJsUGFyYW06IGtleSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGVmZXJyZWQgPSBtLmRlZmVycmVkKCk7XHJcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBOdW1iZXIobS5yb3V0ZS5wYXJhbShrZXkpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcyAtIDE7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICB9LFxyXG4gICAgZ2V0Q2hlY2tXb3JkczogKHdvcmRzLCBsaW1pdCkgID0+IHtcclxuICAgICAgICByZXR1cm4gXyh3b3Jkcykuc2FtcGxlKGxpbWl0KTtcclxuICAgIH0sXHJcbiAgICBpbmNyaW1lbnRDb3VudDogKG51bSwgbGltaXQpID0+e1xyXG4gICAgICAgIGlmKG51bSgpID09PSBsaW1pdCgpKXtcclxuICAgICAgICAgICAgbnVtKDApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbnVtKG51bSgpICsgMSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAqQHBhcmFte0Z1bmN0aW9ufW51bSDphY3liJfjgqTjg7Pjg4fjg4Pjgq/jgrnjgIFtLnByb3AoMCnjgafkvZzmiJDjgZfjgZ9nZXR0ZXItc2V0dGVy6Zai5pWwXHJcbiAgICAqQHBhcmFte0Z1bmN0aW9ufWluY3JpbWVudEZ1bmMg6YWN5YiX44Kk44Oz44OH44OD44Kv44K544Gu44Kk44Oz44Kv44Oq44Oh44Oz44OI44KS6KGM44GG6Zai5pWwXHJcbiAgICAqQHBhcmFte0Z1bmN0aW9ufWQgbS5kZWZlcnJlZOOBp+S9nOaIkOOBl+OBn3Byb21pc2Xjg5XjgqHjgq/jg4jjg6rjg7xcclxuICAgICovXHJcbiAgICBnZXROZXh0V29yZDE6IChudW0sIGxpbWl0KSA9PiB7XHJcbiAgICAgICAgLy/lvJXmlbDjga7lnovjg4Hjgqfjg4Pjgq9cclxuICAgICAgICBpZih0eXBlb2YgbnVtKCkgPT09IE51bWJlcilyZXR1cm47XHJcbiAgICAgICAgaWYodHlwZW9mIGxpbWl0KCkgPT09IE51bWJlcilyZXR1cm47XHJcbiAgICAgICAgaWYodHlwZW9mIHZtLmNoZWNrTGlzdFtudW0oKV0uZmxhZygpID09PSBCb29sZWFuKXJldHVybjtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHZtLmNoZWNrTGlzdFtudW0oKV0uZmxhZygpKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRydWU6IHtcclxuICAgICAgICAgICAgICAgICAgICB2bS5pbmNyaW1lbnRDb3VudChudW0sIGxpbWl0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdm0uZ2V0TmV4dFdvcmQxKG51bSwgbGltaXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBmYWxzZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2bS5jaGVja0xpc3RbbnVtKCldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNoZWNrRW5kRmxhZzogbGltaXQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IF8uY291bnRCeSh2bS5jaGVja0xpc3QsIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKGl0ZW0uZmxhZygpID09PSB0cnVlKSA/IFwib2tcIiA6IFwibm9cIjtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gKGxpbWl0KCkgKyAxID09PSByZXN1bHQub2spO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdm07XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2VzNi9zdG9yZS5qc1xuICoqLyIsIi8vICAgICBVbmRlcnNjb3JlLmpzIDEuOC4zXG4vLyAgICAgaHR0cDovL3VuZGVyc2NvcmVqcy5vcmdcbi8vICAgICAoYykgMjAwOS0yMDE1IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4vLyAgICAgVW5kZXJzY29yZSBtYXkgYmUgZnJlZWx5IGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cblxuKGZ1bmN0aW9uKCkge1xuXG4gIC8vIEJhc2VsaW5lIHNldHVwXG4gIC8vIC0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gRXN0YWJsaXNoIHRoZSByb290IG9iamVjdCwgYHdpbmRvd2AgaW4gdGhlIGJyb3dzZXIsIG9yIGBleHBvcnRzYCBvbiB0aGUgc2VydmVyLlxuICB2YXIgcm9vdCA9IHRoaXM7XG5cbiAgLy8gU2F2ZSB0aGUgcHJldmlvdXMgdmFsdWUgb2YgdGhlIGBfYCB2YXJpYWJsZS5cbiAgdmFyIHByZXZpb3VzVW5kZXJzY29yZSA9IHJvb3QuXztcblxuICAvLyBTYXZlIGJ5dGVzIGluIHRoZSBtaW5pZmllZCAoYnV0IG5vdCBnemlwcGVkKSB2ZXJzaW9uOlxuICB2YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZSwgT2JqUHJvdG8gPSBPYmplY3QucHJvdG90eXBlLCBGdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbiAgLy8gQ3JlYXRlIHF1aWNrIHJlZmVyZW5jZSB2YXJpYWJsZXMgZm9yIHNwZWVkIGFjY2VzcyB0byBjb3JlIHByb3RvdHlwZXMuXG4gIHZhclxuICAgIHB1c2ggICAgICAgICAgICAgPSBBcnJheVByb3RvLnB1c2gsXG4gICAgc2xpY2UgICAgICAgICAgICA9IEFycmF5UHJvdG8uc2xpY2UsXG4gICAgdG9TdHJpbmcgICAgICAgICA9IE9ialByb3RvLnRvU3RyaW5nLFxuICAgIGhhc093blByb3BlcnR5ICAgPSBPYmpQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuICAvLyBBbGwgKipFQ01BU2NyaXB0IDUqKiBuYXRpdmUgZnVuY3Rpb24gaW1wbGVtZW50YXRpb25zIHRoYXQgd2UgaG9wZSB0byB1c2VcbiAgLy8gYXJlIGRlY2xhcmVkIGhlcmUuXG4gIHZhclxuICAgIG5hdGl2ZUlzQXJyYXkgICAgICA9IEFycmF5LmlzQXJyYXksXG4gICAgbmF0aXZlS2V5cyAgICAgICAgID0gT2JqZWN0LmtleXMsXG4gICAgbmF0aXZlQmluZCAgICAgICAgID0gRnVuY1Byb3RvLmJpbmQsXG4gICAgbmF0aXZlQ3JlYXRlICAgICAgID0gT2JqZWN0LmNyZWF0ZTtcblxuICAvLyBOYWtlZCBmdW5jdGlvbiByZWZlcmVuY2UgZm9yIHN1cnJvZ2F0ZS1wcm90b3R5cGUtc3dhcHBpbmcuXG4gIHZhciBDdG9yID0gZnVuY3Rpb24oKXt9O1xuXG4gIC8vIENyZWF0ZSBhIHNhZmUgcmVmZXJlbmNlIHRvIHRoZSBVbmRlcnNjb3JlIG9iamVjdCBmb3IgdXNlIGJlbG93LlxuICB2YXIgXyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmIChvYmogaW5zdGFuY2VvZiBfKSByZXR1cm4gb2JqO1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBfKSkgcmV0dXJuIG5ldyBfKG9iaik7XG4gICAgdGhpcy5fd3JhcHBlZCA9IG9iajtcbiAgfTtcblxuICAvLyBFeHBvcnQgdGhlIFVuZGVyc2NvcmUgb2JqZWN0IGZvciAqKk5vZGUuanMqKiwgd2l0aFxuICAvLyBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSBmb3IgdGhlIG9sZCBgcmVxdWlyZSgpYCBBUEkuIElmIHdlJ3JlIGluXG4gIC8vIHRoZSBicm93c2VyLCBhZGQgYF9gIGFzIGEgZ2xvYmFsIG9iamVjdC5cbiAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gXztcbiAgICB9XG4gICAgZXhwb3J0cy5fID0gXztcbiAgfSBlbHNlIHtcbiAgICByb290Ll8gPSBfO1xuICB9XG5cbiAgLy8gQ3VycmVudCB2ZXJzaW9uLlxuICBfLlZFUlNJT04gPSAnMS44LjMnO1xuXG4gIC8vIEludGVybmFsIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBlZmZpY2llbnQgKGZvciBjdXJyZW50IGVuZ2luZXMpIHZlcnNpb25cbiAgLy8gb2YgdGhlIHBhc3NlZC1pbiBjYWxsYmFjaywgdG8gYmUgcmVwZWF0ZWRseSBhcHBsaWVkIGluIG90aGVyIFVuZGVyc2NvcmVcbiAgLy8gZnVuY3Rpb25zLlxuICB2YXIgb3B0aW1pemVDYiA9IGZ1bmN0aW9uKGZ1bmMsIGNvbnRleHQsIGFyZ0NvdW50KSB7XG4gICAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkgcmV0dXJuIGZ1bmM7XG4gICAgc3dpdGNoIChhcmdDb3VudCA9PSBudWxsID8gMyA6IGFyZ0NvdW50KSB7XG4gICAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIHZhbHVlKTtcbiAgICAgIH07XG4gICAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbih2YWx1ZSwgb3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCB2YWx1ZSwgb3RoZXIpO1xuICAgICAgfTtcbiAgICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgICAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbik7XG4gICAgICB9O1xuICAgICAgY2FzZSA0OiByZXR1cm4gZnVuY3Rpb24oYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgICAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIGFjY3VtdWxhdG9yLCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pO1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIEEgbW9zdGx5LWludGVybmFsIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIGNhbGxiYWNrcyB0aGF0IGNhbiBiZSBhcHBsaWVkXG4gIC8vIHRvIGVhY2ggZWxlbWVudCBpbiBhIGNvbGxlY3Rpb24sIHJldHVybmluZyB0aGUgZGVzaXJlZCByZXN1bHQg4oCUIGVpdGhlclxuICAvLyBpZGVudGl0eSwgYW4gYXJiaXRyYXJ5IGNhbGxiYWNrLCBhIHByb3BlcnR5IG1hdGNoZXIsIG9yIGEgcHJvcGVydHkgYWNjZXNzb3IuXG4gIHZhciBjYiA9IGZ1bmN0aW9uKHZhbHVlLCBjb250ZXh0LCBhcmdDb3VudCkge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gXy5pZGVudGl0eTtcbiAgICBpZiAoXy5pc0Z1bmN0aW9uKHZhbHVlKSkgcmV0dXJuIG9wdGltaXplQ2IodmFsdWUsIGNvbnRleHQsIGFyZ0NvdW50KTtcbiAgICBpZiAoXy5pc09iamVjdCh2YWx1ZSkpIHJldHVybiBfLm1hdGNoZXIodmFsdWUpO1xuICAgIHJldHVybiBfLnByb3BlcnR5KHZhbHVlKTtcbiAgfTtcbiAgXy5pdGVyYXRlZSA9IGZ1bmN0aW9uKHZhbHVlLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNiKHZhbHVlLCBjb250ZXh0LCBJbmZpbml0eSk7XG4gIH07XG5cbiAgLy8gQW4gaW50ZXJuYWwgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIGFzc2lnbmVyIGZ1bmN0aW9ucy5cbiAgdmFyIGNyZWF0ZUFzc2lnbmVyID0gZnVuY3Rpb24oa2V5c0Z1bmMsIHVuZGVmaW5lZE9ubHkpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqKSB7XG4gICAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIGlmIChsZW5ndGggPCAyIHx8IG9iaiA9PSBudWxsKSByZXR1cm4gb2JqO1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAxOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2luZGV4XSxcbiAgICAgICAgICAgIGtleXMgPSBrZXlzRnVuYyhzb3VyY2UpLFxuICAgICAgICAgICAgbCA9IGtleXMubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIGlmICghdW5kZWZpbmVkT25seSB8fCBvYmpba2V5XSA9PT0gdm9pZCAwKSBvYmpba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH07XG4gIH07XG5cbiAgLy8gQW4gaW50ZXJuYWwgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIGEgbmV3IG9iamVjdCB0aGF0IGluaGVyaXRzIGZyb20gYW5vdGhlci5cbiAgdmFyIGJhc2VDcmVhdGUgPSBmdW5jdGlvbihwcm90b3R5cGUpIHtcbiAgICBpZiAoIV8uaXNPYmplY3QocHJvdG90eXBlKSkgcmV0dXJuIHt9O1xuICAgIGlmIChuYXRpdmVDcmVhdGUpIHJldHVybiBuYXRpdmVDcmVhdGUocHJvdG90eXBlKTtcbiAgICBDdG9yLnByb3RvdHlwZSA9IHByb3RvdHlwZTtcbiAgICB2YXIgcmVzdWx0ID0gbmV3IEN0b3I7XG4gICAgQ3Rvci5wcm90b3R5cGUgPSBudWxsO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgdmFyIHByb3BlcnR5ID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiA9PSBudWxsID8gdm9pZCAwIDogb2JqW2tleV07XG4gICAgfTtcbiAgfTtcblxuICAvLyBIZWxwZXIgZm9yIGNvbGxlY3Rpb24gbWV0aG9kcyB0byBkZXRlcm1pbmUgd2hldGhlciBhIGNvbGxlY3Rpb25cbiAgLy8gc2hvdWxkIGJlIGl0ZXJhdGVkIGFzIGFuIGFycmF5IG9yIGFzIGFuIG9iamVjdFxuICAvLyBSZWxhdGVkOiBodHRwOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2xlbmd0aFxuICAvLyBBdm9pZHMgYSB2ZXJ5IG5hc3R5IGlPUyA4IEpJVCBidWcgb24gQVJNLTY0LiAjMjA5NFxuICB2YXIgTUFYX0FSUkFZX0lOREVYID0gTWF0aC5wb3coMiwgNTMpIC0gMTtcbiAgdmFyIGdldExlbmd0aCA9IHByb3BlcnR5KCdsZW5ndGgnKTtcbiAgdmFyIGlzQXJyYXlMaWtlID0gZnVuY3Rpb24oY29sbGVjdGlvbikge1xuICAgIHZhciBsZW5ndGggPSBnZXRMZW5ndGgoY29sbGVjdGlvbik7XG4gICAgcmV0dXJuIHR5cGVvZiBsZW5ndGggPT0gJ251bWJlcicgJiYgbGVuZ3RoID49IDAgJiYgbGVuZ3RoIDw9IE1BWF9BUlJBWV9JTkRFWDtcbiAgfTtcblxuICAvLyBDb2xsZWN0aW9uIEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFRoZSBjb3JuZXJzdG9uZSwgYW4gYGVhY2hgIGltcGxlbWVudGF0aW9uLCBha2EgYGZvckVhY2hgLlxuICAvLyBIYW5kbGVzIHJhdyBvYmplY3RzIGluIGFkZGl0aW9uIHRvIGFycmF5LWxpa2VzLiBUcmVhdHMgYWxsXG4gIC8vIHNwYXJzZSBhcnJheS1saWtlcyBhcyBpZiB0aGV5IHdlcmUgZGVuc2UuXG4gIF8uZWFjaCA9IF8uZm9yRWFjaCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICBpdGVyYXRlZSA9IG9wdGltaXplQ2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgIHZhciBpLCBsZW5ndGg7XG4gICAgaWYgKGlzQXJyYXlMaWtlKG9iaikpIHtcbiAgICAgIGZvciAoaSA9IDAsIGxlbmd0aCA9IG9iai5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpdGVyYXRlZShvYmpbaV0sIGksIG9iaik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgICBmb3IgKGkgPSAwLCBsZW5ndGggPSBrZXlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGl0ZXJhdGVlKG9ialtrZXlzW2ldXSwga2V5c1tpXSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIHJlc3VsdHMgb2YgYXBwbHlpbmcgdGhlIGl0ZXJhdGVlIHRvIGVhY2ggZWxlbWVudC5cbiAgXy5tYXAgPSBfLmNvbGxlY3QgPSBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgdmFyIGtleXMgPSAhaXNBcnJheUxpa2Uob2JqKSAmJiBfLmtleXMob2JqKSxcbiAgICAgICAgbGVuZ3RoID0gKGtleXMgfHwgb2JqKS5sZW5ndGgsXG4gICAgICAgIHJlc3VsdHMgPSBBcnJheShsZW5ndGgpO1xuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHZhciBjdXJyZW50S2V5ID0ga2V5cyA/IGtleXNbaW5kZXhdIDogaW5kZXg7XG4gICAgICByZXN1bHRzW2luZGV4XSA9IGl0ZXJhdGVlKG9ialtjdXJyZW50S2V5XSwgY3VycmVudEtleSwgb2JqKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgLy8gQ3JlYXRlIGEgcmVkdWNpbmcgZnVuY3Rpb24gaXRlcmF0aW5nIGxlZnQgb3IgcmlnaHQuXG4gIGZ1bmN0aW9uIGNyZWF0ZVJlZHVjZShkaXIpIHtcbiAgICAvLyBPcHRpbWl6ZWQgaXRlcmF0b3IgZnVuY3Rpb24gYXMgdXNpbmcgYXJndW1lbnRzLmxlbmd0aFxuICAgIC8vIGluIHRoZSBtYWluIGZ1bmN0aW9uIHdpbGwgZGVvcHRpbWl6ZSB0aGUsIHNlZSAjMTk5MS5cbiAgICBmdW5jdGlvbiBpdGVyYXRvcihvYmosIGl0ZXJhdGVlLCBtZW1vLCBrZXlzLCBpbmRleCwgbGVuZ3RoKSB7XG4gICAgICBmb3IgKDsgaW5kZXggPj0gMCAmJiBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gZGlyKSB7XG4gICAgICAgIHZhciBjdXJyZW50S2V5ID0ga2V5cyA/IGtleXNbaW5kZXhdIDogaW5kZXg7XG4gICAgICAgIG1lbW8gPSBpdGVyYXRlZShtZW1vLCBvYmpbY3VycmVudEtleV0sIGN1cnJlbnRLZXksIG9iaik7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWVtbztcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgbWVtbywgY29udGV4dCkge1xuICAgICAgaXRlcmF0ZWUgPSBvcHRpbWl6ZUNiKGl0ZXJhdGVlLCBjb250ZXh0LCA0KTtcbiAgICAgIHZhciBrZXlzID0gIWlzQXJyYXlMaWtlKG9iaikgJiYgXy5rZXlzKG9iaiksXG4gICAgICAgICAgbGVuZ3RoID0gKGtleXMgfHwgb2JqKS5sZW5ndGgsXG4gICAgICAgICAgaW5kZXggPSBkaXIgPiAwID8gMCA6IGxlbmd0aCAtIDE7XG4gICAgICAvLyBEZXRlcm1pbmUgdGhlIGluaXRpYWwgdmFsdWUgaWYgbm9uZSBpcyBwcm92aWRlZC5cbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMykge1xuICAgICAgICBtZW1vID0gb2JqW2tleXMgPyBrZXlzW2luZGV4XSA6IGluZGV4XTtcbiAgICAgICAgaW5kZXggKz0gZGlyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZXJhdG9yKG9iaiwgaXRlcmF0ZWUsIG1lbW8sIGtleXMsIGluZGV4LCBsZW5ndGgpO1xuICAgIH07XG4gIH1cblxuICAvLyAqKlJlZHVjZSoqIGJ1aWxkcyB1cCBhIHNpbmdsZSByZXN1bHQgZnJvbSBhIGxpc3Qgb2YgdmFsdWVzLCBha2EgYGluamVjdGAsXG4gIC8vIG9yIGBmb2xkbGAuXG4gIF8ucmVkdWNlID0gXy5mb2xkbCA9IF8uaW5qZWN0ID0gY3JlYXRlUmVkdWNlKDEpO1xuXG4gIC8vIFRoZSByaWdodC1hc3NvY2lhdGl2ZSB2ZXJzaW9uIG9mIHJlZHVjZSwgYWxzbyBrbm93biBhcyBgZm9sZHJgLlxuICBfLnJlZHVjZVJpZ2h0ID0gXy5mb2xkciA9IGNyZWF0ZVJlZHVjZSgtMSk7XG5cbiAgLy8gUmV0dXJuIHRoZSBmaXJzdCB2YWx1ZSB3aGljaCBwYXNzZXMgYSB0cnV0aCB0ZXN0LiBBbGlhc2VkIGFzIGBkZXRlY3RgLlxuICBfLmZpbmQgPSBfLmRldGVjdCA9IGZ1bmN0aW9uKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIGtleTtcbiAgICBpZiAoaXNBcnJheUxpa2Uob2JqKSkge1xuICAgICAga2V5ID0gXy5maW5kSW5kZXgob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBrZXkgPSBfLmZpbmRLZXkob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIH1cbiAgICBpZiAoa2V5ICE9PSB2b2lkIDAgJiYga2V5ICE9PSAtMSkgcmV0dXJuIG9ialtrZXldO1xuICB9O1xuXG4gIC8vIFJldHVybiBhbGwgdGhlIGVsZW1lbnRzIHRoYXQgcGFzcyBhIHRydXRoIHRlc3QuXG4gIC8vIEFsaWFzZWQgYXMgYHNlbGVjdGAuXG4gIF8uZmlsdGVyID0gXy5zZWxlY3QgPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgcHJlZGljYXRlID0gY2IocHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICBfLmVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBsaXN0KSkgcmVzdWx0cy5wdXNoKHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICAvLyBSZXR1cm4gYWxsIHRoZSBlbGVtZW50cyBmb3Igd2hpY2ggYSB0cnV0aCB0ZXN0IGZhaWxzLlxuICBfLnJlamVjdCA9IGZ1bmN0aW9uKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIF8uZmlsdGVyKG9iaiwgXy5uZWdhdGUoY2IocHJlZGljYXRlKSksIGNvbnRleHQpO1xuICB9O1xuXG4gIC8vIERldGVybWluZSB3aGV0aGVyIGFsbCBvZiB0aGUgZWxlbWVudHMgbWF0Y2ggYSB0cnV0aCB0ZXN0LlxuICAvLyBBbGlhc2VkIGFzIGBhbGxgLlxuICBfLmV2ZXJ5ID0gXy5hbGwgPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgdmFyIGtleXMgPSAhaXNBcnJheUxpa2Uob2JqKSAmJiBfLmtleXMob2JqKSxcbiAgICAgICAgbGVuZ3RoID0gKGtleXMgfHwgb2JqKS5sZW5ndGg7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdmFyIGN1cnJlbnRLZXkgPSBrZXlzID8ga2V5c1tpbmRleF0gOiBpbmRleDtcbiAgICAgIGlmICghcHJlZGljYXRlKG9ialtjdXJyZW50S2V5XSwgY3VycmVudEtleSwgb2JqKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvLyBEZXRlcm1pbmUgaWYgYXQgbGVhc3Qgb25lIGVsZW1lbnQgaW4gdGhlIG9iamVjdCBtYXRjaGVzIGEgdHJ1dGggdGVzdC5cbiAgLy8gQWxpYXNlZCBhcyBgYW55YC5cbiAgXy5zb21lID0gXy5hbnkgPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgdmFyIGtleXMgPSAhaXNBcnJheUxpa2Uob2JqKSAmJiBfLmtleXMob2JqKSxcbiAgICAgICAgbGVuZ3RoID0gKGtleXMgfHwgb2JqKS5sZW5ndGg7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdmFyIGN1cnJlbnRLZXkgPSBrZXlzID8ga2V5c1tpbmRleF0gOiBpbmRleDtcbiAgICAgIGlmIChwcmVkaWNhdGUob2JqW2N1cnJlbnRLZXldLCBjdXJyZW50S2V5LCBvYmopKSByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8vIERldGVybWluZSBpZiB0aGUgYXJyYXkgb3Igb2JqZWN0IGNvbnRhaW5zIGEgZ2l2ZW4gaXRlbSAodXNpbmcgYD09PWApLlxuICAvLyBBbGlhc2VkIGFzIGBpbmNsdWRlc2AgYW5kIGBpbmNsdWRlYC5cbiAgXy5jb250YWlucyA9IF8uaW5jbHVkZXMgPSBfLmluY2x1ZGUgPSBmdW5jdGlvbihvYmosIGl0ZW0sIGZyb21JbmRleCwgZ3VhcmQpIHtcbiAgICBpZiAoIWlzQXJyYXlMaWtlKG9iaikpIG9iaiA9IF8udmFsdWVzKG9iaik7XG4gICAgaWYgKHR5cGVvZiBmcm9tSW5kZXggIT0gJ251bWJlcicgfHwgZ3VhcmQpIGZyb21JbmRleCA9IDA7XG4gICAgcmV0dXJuIF8uaW5kZXhPZihvYmosIGl0ZW0sIGZyb21JbmRleCkgPj0gMDtcbiAgfTtcblxuICAvLyBJbnZva2UgYSBtZXRob2QgKHdpdGggYXJndW1lbnRzKSBvbiBldmVyeSBpdGVtIGluIGEgY29sbGVjdGlvbi5cbiAgXy5pbnZva2UgPSBmdW5jdGlvbihvYmosIG1ldGhvZCkge1xuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIHZhciBpc0Z1bmMgPSBfLmlzRnVuY3Rpb24obWV0aG9kKTtcbiAgICByZXR1cm4gXy5tYXAob2JqLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdmFyIGZ1bmMgPSBpc0Z1bmMgPyBtZXRob2QgOiB2YWx1ZVttZXRob2RdO1xuICAgICAgcmV0dXJuIGZ1bmMgPT0gbnVsbCA/IGZ1bmMgOiBmdW5jLmFwcGx5KHZhbHVlLCBhcmdzKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBDb252ZW5pZW5jZSB2ZXJzaW9uIG9mIGEgY29tbW9uIHVzZSBjYXNlIG9mIGBtYXBgOiBmZXRjaGluZyBhIHByb3BlcnR5LlxuICBfLnBsdWNrID0gZnVuY3Rpb24ob2JqLCBrZXkpIHtcbiAgICByZXR1cm4gXy5tYXAob2JqLCBfLnByb3BlcnR5KGtleSkpO1xuICB9O1xuXG4gIC8vIENvbnZlbmllbmNlIHZlcnNpb24gb2YgYSBjb21tb24gdXNlIGNhc2Ugb2YgYGZpbHRlcmA6IHNlbGVjdGluZyBvbmx5IG9iamVjdHNcbiAgLy8gY29udGFpbmluZyBzcGVjaWZpYyBga2V5OnZhbHVlYCBwYWlycy5cbiAgXy53aGVyZSA9IGZ1bmN0aW9uKG9iaiwgYXR0cnMpIHtcbiAgICByZXR1cm4gXy5maWx0ZXIob2JqLCBfLm1hdGNoZXIoYXR0cnMpKTtcbiAgfTtcblxuICAvLyBDb252ZW5pZW5jZSB2ZXJzaW9uIG9mIGEgY29tbW9uIHVzZSBjYXNlIG9mIGBmaW5kYDogZ2V0dGluZyB0aGUgZmlyc3Qgb2JqZWN0XG4gIC8vIGNvbnRhaW5pbmcgc3BlY2lmaWMgYGtleTp2YWx1ZWAgcGFpcnMuXG4gIF8uZmluZFdoZXJlID0gZnVuY3Rpb24ob2JqLCBhdHRycykge1xuICAgIHJldHVybiBfLmZpbmQob2JqLCBfLm1hdGNoZXIoYXR0cnMpKTtcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIG1heGltdW0gZWxlbWVudCAob3IgZWxlbWVudC1iYXNlZCBjb21wdXRhdGlvbikuXG4gIF8ubWF4ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIHZhciByZXN1bHQgPSAtSW5maW5pdHksIGxhc3RDb21wdXRlZCA9IC1JbmZpbml0eSxcbiAgICAgICAgdmFsdWUsIGNvbXB1dGVkO1xuICAgIGlmIChpdGVyYXRlZSA9PSBudWxsICYmIG9iaiAhPSBudWxsKSB7XG4gICAgICBvYmogPSBpc0FycmF5TGlrZShvYmopID8gb2JqIDogXy52YWx1ZXMob2JqKTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBvYmoubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFsdWUgPSBvYmpbaV07XG4gICAgICAgIGlmICh2YWx1ZSA+IHJlc3VsdCkge1xuICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgICAgXy5lYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUodmFsdWUsIGluZGV4LCBsaXN0KTtcbiAgICAgICAgaWYgKGNvbXB1dGVkID4gbGFzdENvbXB1dGVkIHx8IGNvbXB1dGVkID09PSAtSW5maW5pdHkgJiYgcmVzdWx0ID09PSAtSW5maW5pdHkpIHtcbiAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBsYXN0Q29tcHV0ZWQgPSBjb21wdXRlZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSBtaW5pbXVtIGVsZW1lbnQgKG9yIGVsZW1lbnQtYmFzZWQgY29tcHV0YXRpb24pLlxuICBfLm1pbiA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICB2YXIgcmVzdWx0ID0gSW5maW5pdHksIGxhc3RDb21wdXRlZCA9IEluZmluaXR5LFxuICAgICAgICB2YWx1ZSwgY29tcHV0ZWQ7XG4gICAgaWYgKGl0ZXJhdGVlID09IG51bGwgJiYgb2JqICE9IG51bGwpIHtcbiAgICAgIG9iaiA9IGlzQXJyYXlMaWtlKG9iaikgPyBvYmogOiBfLnZhbHVlcyhvYmopO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IG9iai5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB2YWx1ZSA9IG9ialtpXTtcbiAgICAgICAgaWYgKHZhbHVlIDwgcmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgICBfLmVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSh2YWx1ZSwgaW5kZXgsIGxpc3QpO1xuICAgICAgICBpZiAoY29tcHV0ZWQgPCBsYXN0Q29tcHV0ZWQgfHwgY29tcHV0ZWQgPT09IEluZmluaXR5ICYmIHJlc3VsdCA9PT0gSW5maW5pdHkpIHtcbiAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBsYXN0Q29tcHV0ZWQgPSBjb21wdXRlZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gU2h1ZmZsZSBhIGNvbGxlY3Rpb24sIHVzaW5nIHRoZSBtb2Rlcm4gdmVyc2lvbiBvZiB0aGVcbiAgLy8gW0Zpc2hlci1ZYXRlcyBzaHVmZmxlXShodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Zpc2hlcuKAk1lhdGVzX3NodWZmbGUpLlxuICBfLnNodWZmbGUgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgc2V0ID0gaXNBcnJheUxpa2Uob2JqKSA/IG9iaiA6IF8udmFsdWVzKG9iaik7XG4gICAgdmFyIGxlbmd0aCA9IHNldC5sZW5ndGg7XG4gICAgdmFyIHNodWZmbGVkID0gQXJyYXkobGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpbmRleCA9IDAsIHJhbmQ7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICByYW5kID0gXy5yYW5kb20oMCwgaW5kZXgpO1xuICAgICAgaWYgKHJhbmQgIT09IGluZGV4KSBzaHVmZmxlZFtpbmRleF0gPSBzaHVmZmxlZFtyYW5kXTtcbiAgICAgIHNodWZmbGVkW3JhbmRdID0gc2V0W2luZGV4XTtcbiAgICB9XG4gICAgcmV0dXJuIHNodWZmbGVkO1xuICB9O1xuXG4gIC8vIFNhbXBsZSAqKm4qKiByYW5kb20gdmFsdWVzIGZyb20gYSBjb2xsZWN0aW9uLlxuICAvLyBJZiAqKm4qKiBpcyBub3Qgc3BlY2lmaWVkLCByZXR1cm5zIGEgc2luZ2xlIHJhbmRvbSBlbGVtZW50LlxuICAvLyBUaGUgaW50ZXJuYWwgYGd1YXJkYCBhcmd1bWVudCBhbGxvd3MgaXQgdG8gd29yayB3aXRoIGBtYXBgLlxuICBfLnNhbXBsZSA9IGZ1bmN0aW9uKG9iaiwgbiwgZ3VhcmQpIHtcbiAgICBpZiAobiA9PSBudWxsIHx8IGd1YXJkKSB7XG4gICAgICBpZiAoIWlzQXJyYXlMaWtlKG9iaikpIG9iaiA9IF8udmFsdWVzKG9iaik7XG4gICAgICByZXR1cm4gb2JqW18ucmFuZG9tKG9iai5sZW5ndGggLSAxKV07XG4gICAgfVxuICAgIHJldHVybiBfLnNodWZmbGUob2JqKS5zbGljZSgwLCBNYXRoLm1heCgwLCBuKSk7XG4gIH07XG5cbiAgLy8gU29ydCB0aGUgb2JqZWN0J3MgdmFsdWVzIGJ5IGEgY3JpdGVyaW9uIHByb2R1Y2VkIGJ5IGFuIGl0ZXJhdGVlLlxuICBfLnNvcnRCeSA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICByZXR1cm4gXy5wbHVjayhfLm1hcChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIGNyaXRlcmlhOiBpdGVyYXRlZSh2YWx1ZSwgaW5kZXgsIGxpc3QpXG4gICAgICB9O1xuICAgIH0pLnNvcnQoZnVuY3Rpb24obGVmdCwgcmlnaHQpIHtcbiAgICAgIHZhciBhID0gbGVmdC5jcml0ZXJpYTtcbiAgICAgIHZhciBiID0gcmlnaHQuY3JpdGVyaWE7XG4gICAgICBpZiAoYSAhPT0gYikge1xuICAgICAgICBpZiAoYSA+IGIgfHwgYSA9PT0gdm9pZCAwKSByZXR1cm4gMTtcbiAgICAgICAgaWYgKGEgPCBiIHx8IGIgPT09IHZvaWQgMCkgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxlZnQuaW5kZXggLSByaWdodC5pbmRleDtcbiAgICB9KSwgJ3ZhbHVlJyk7XG4gIH07XG5cbiAgLy8gQW4gaW50ZXJuYWwgZnVuY3Rpb24gdXNlZCBmb3IgYWdncmVnYXRlIFwiZ3JvdXAgYnlcIiBvcGVyYXRpb25zLlxuICB2YXIgZ3JvdXAgPSBmdW5jdGlvbihiZWhhdmlvcikge1xuICAgIHJldHVybiBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICAgIF8uZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCkge1xuICAgICAgICB2YXIga2V5ID0gaXRlcmF0ZWUodmFsdWUsIGluZGV4LCBvYmopO1xuICAgICAgICBiZWhhdmlvcihyZXN1bHQsIHZhbHVlLCBrZXkpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH07XG5cbiAgLy8gR3JvdXBzIHRoZSBvYmplY3QncyB2YWx1ZXMgYnkgYSBjcml0ZXJpb24uIFBhc3MgZWl0aGVyIGEgc3RyaW5nIGF0dHJpYnV0ZVxuICAvLyB0byBncm91cCBieSwgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGNyaXRlcmlvbi5cbiAgXy5ncm91cEJ5ID0gZ3JvdXAoZnVuY3Rpb24ocmVzdWx0LCB2YWx1ZSwga2V5KSB7XG4gICAgaWYgKF8uaGFzKHJlc3VsdCwga2V5KSkgcmVzdWx0W2tleV0ucHVzaCh2YWx1ZSk7IGVsc2UgcmVzdWx0W2tleV0gPSBbdmFsdWVdO1xuICB9KTtcblxuICAvLyBJbmRleGVzIHRoZSBvYmplY3QncyB2YWx1ZXMgYnkgYSBjcml0ZXJpb24sIHNpbWlsYXIgdG8gYGdyb3VwQnlgLCBidXQgZm9yXG4gIC8vIHdoZW4geW91IGtub3cgdGhhdCB5b3VyIGluZGV4IHZhbHVlcyB3aWxsIGJlIHVuaXF1ZS5cbiAgXy5pbmRleEJ5ID0gZ3JvdXAoZnVuY3Rpb24ocmVzdWx0LCB2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgfSk7XG5cbiAgLy8gQ291bnRzIGluc3RhbmNlcyBvZiBhbiBvYmplY3QgdGhhdCBncm91cCBieSBhIGNlcnRhaW4gY3JpdGVyaW9uLiBQYXNzXG4gIC8vIGVpdGhlciBhIHN0cmluZyBhdHRyaWJ1dGUgdG8gY291bnQgYnksIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZVxuICAvLyBjcml0ZXJpb24uXG4gIF8uY291bnRCeSA9IGdyb3VwKGZ1bmN0aW9uKHJlc3VsdCwgdmFsdWUsIGtleSkge1xuICAgIGlmIChfLmhhcyhyZXN1bHQsIGtleSkpIHJlc3VsdFtrZXldKys7IGVsc2UgcmVzdWx0W2tleV0gPSAxO1xuICB9KTtcblxuICAvLyBTYWZlbHkgY3JlYXRlIGEgcmVhbCwgbGl2ZSBhcnJheSBmcm9tIGFueXRoaW5nIGl0ZXJhYmxlLlxuICBfLnRvQXJyYXkgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAoIW9iaikgcmV0dXJuIFtdO1xuICAgIGlmIChfLmlzQXJyYXkob2JqKSkgcmV0dXJuIHNsaWNlLmNhbGwob2JqKTtcbiAgICBpZiAoaXNBcnJheUxpa2Uob2JqKSkgcmV0dXJuIF8ubWFwKG9iaiwgXy5pZGVudGl0eSk7XG4gICAgcmV0dXJuIF8udmFsdWVzKG9iaik7XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gYW4gb2JqZWN0LlxuICBfLnNpemUgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiAwO1xuICAgIHJldHVybiBpc0FycmF5TGlrZShvYmopID8gb2JqLmxlbmd0aCA6IF8ua2V5cyhvYmopLmxlbmd0aDtcbiAgfTtcblxuICAvLyBTcGxpdCBhIGNvbGxlY3Rpb24gaW50byB0d28gYXJyYXlzOiBvbmUgd2hvc2UgZWxlbWVudHMgYWxsIHNhdGlzZnkgdGhlIGdpdmVuXG4gIC8vIHByZWRpY2F0ZSwgYW5kIG9uZSB3aG9zZSBlbGVtZW50cyBhbGwgZG8gbm90IHNhdGlzZnkgdGhlIHByZWRpY2F0ZS5cbiAgXy5wYXJ0aXRpb24gPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgdmFyIHBhc3MgPSBbXSwgZmFpbCA9IFtdO1xuICAgIF8uZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBrZXksIG9iaikge1xuICAgICAgKHByZWRpY2F0ZSh2YWx1ZSwga2V5LCBvYmopID8gcGFzcyA6IGZhaWwpLnB1c2godmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBbcGFzcywgZmFpbF07XG4gIH07XG5cbiAgLy8gQXJyYXkgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIEdldCB0aGUgZmlyc3QgZWxlbWVudCBvZiBhbiBhcnJheS4gUGFzc2luZyAqKm4qKiB3aWxsIHJldHVybiB0aGUgZmlyc3QgTlxuICAvLyB2YWx1ZXMgaW4gdGhlIGFycmF5LiBBbGlhc2VkIGFzIGBoZWFkYCBhbmQgYHRha2VgLiBUaGUgKipndWFyZCoqIGNoZWNrXG4gIC8vIGFsbG93cyBpdCB0byB3b3JrIHdpdGggYF8ubWFwYC5cbiAgXy5maXJzdCA9IF8uaGVhZCA9IF8udGFrZSA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIGlmIChhcnJheSA9PSBudWxsKSByZXR1cm4gdm9pZCAwO1xuICAgIGlmIChuID09IG51bGwgfHwgZ3VhcmQpIHJldHVybiBhcnJheVswXTtcbiAgICByZXR1cm4gXy5pbml0aWFsKGFycmF5LCBhcnJheS5sZW5ndGggLSBuKTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGV2ZXJ5dGhpbmcgYnV0IHRoZSBsYXN0IGVudHJ5IG9mIHRoZSBhcnJheS4gRXNwZWNpYWxseSB1c2VmdWwgb25cbiAgLy8gdGhlIGFyZ3VtZW50cyBvYmplY3QuIFBhc3NpbmcgKipuKiogd2lsbCByZXR1cm4gYWxsIHRoZSB2YWx1ZXMgaW5cbiAgLy8gdGhlIGFycmF5LCBleGNsdWRpbmcgdGhlIGxhc3QgTi5cbiAgXy5pbml0aWFsID0gZnVuY3Rpb24oYXJyYXksIG4sIGd1YXJkKSB7XG4gICAgcmV0dXJuIHNsaWNlLmNhbGwoYXJyYXksIDAsIE1hdGgubWF4KDAsIGFycmF5Lmxlbmd0aCAtIChuID09IG51bGwgfHwgZ3VhcmQgPyAxIDogbikpKTtcbiAgfTtcblxuICAvLyBHZXQgdGhlIGxhc3QgZWxlbWVudCBvZiBhbiBhcnJheS4gUGFzc2luZyAqKm4qKiB3aWxsIHJldHVybiB0aGUgbGFzdCBOXG4gIC8vIHZhbHVlcyBpbiB0aGUgYXJyYXkuXG4gIF8ubGFzdCA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIGlmIChhcnJheSA9PSBudWxsKSByZXR1cm4gdm9pZCAwO1xuICAgIGlmIChuID09IG51bGwgfHwgZ3VhcmQpIHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTtcbiAgICByZXR1cm4gXy5yZXN0KGFycmF5LCBNYXRoLm1heCgwLCBhcnJheS5sZW5ndGggLSBuKSk7XG4gIH07XG5cbiAgLy8gUmV0dXJucyBldmVyeXRoaW5nIGJ1dCB0aGUgZmlyc3QgZW50cnkgb2YgdGhlIGFycmF5LiBBbGlhc2VkIGFzIGB0YWlsYCBhbmQgYGRyb3BgLlxuICAvLyBFc3BlY2lhbGx5IHVzZWZ1bCBvbiB0aGUgYXJndW1lbnRzIG9iamVjdC4gUGFzc2luZyBhbiAqKm4qKiB3aWxsIHJldHVyblxuICAvLyB0aGUgcmVzdCBOIHZhbHVlcyBpbiB0aGUgYXJyYXkuXG4gIF8ucmVzdCA9IF8udGFpbCA9IF8uZHJvcCA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIHJldHVybiBzbGljZS5jYWxsKGFycmF5LCBuID09IG51bGwgfHwgZ3VhcmQgPyAxIDogbik7XG4gIH07XG5cbiAgLy8gVHJpbSBvdXQgYWxsIGZhbHN5IHZhbHVlcyBmcm9tIGFuIGFycmF5LlxuICBfLmNvbXBhY3QgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHJldHVybiBfLmZpbHRlcihhcnJheSwgXy5pZGVudGl0eSk7XG4gIH07XG5cbiAgLy8gSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gb2YgYSByZWN1cnNpdmUgYGZsYXR0ZW5gIGZ1bmN0aW9uLlxuICB2YXIgZmxhdHRlbiA9IGZ1bmN0aW9uKGlucHV0LCBzaGFsbG93LCBzdHJpY3QsIHN0YXJ0SW5kZXgpIHtcbiAgICB2YXIgb3V0cHV0ID0gW10sIGlkeCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IHN0YXJ0SW5kZXggfHwgMCwgbGVuZ3RoID0gZ2V0TGVuZ3RoKGlucHV0KTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdmFsdWUgPSBpbnB1dFtpXTtcbiAgICAgIGlmIChpc0FycmF5TGlrZSh2YWx1ZSkgJiYgKF8uaXNBcnJheSh2YWx1ZSkgfHwgXy5pc0FyZ3VtZW50cyh2YWx1ZSkpKSB7XG4gICAgICAgIC8vZmxhdHRlbiBjdXJyZW50IGxldmVsIG9mIGFycmF5IG9yIGFyZ3VtZW50cyBvYmplY3RcbiAgICAgICAgaWYgKCFzaGFsbG93KSB2YWx1ZSA9IGZsYXR0ZW4odmFsdWUsIHNoYWxsb3csIHN0cmljdCk7XG4gICAgICAgIHZhciBqID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoO1xuICAgICAgICBvdXRwdXQubGVuZ3RoICs9IGxlbjtcbiAgICAgICAgd2hpbGUgKGogPCBsZW4pIHtcbiAgICAgICAgICBvdXRwdXRbaWR4KytdID0gdmFsdWVbaisrXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICghc3RyaWN0KSB7XG4gICAgICAgIG91dHB1dFtpZHgrK10gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfTtcblxuICAvLyBGbGF0dGVuIG91dCBhbiBhcnJheSwgZWl0aGVyIHJlY3Vyc2l2ZWx5IChieSBkZWZhdWx0KSwgb3IganVzdCBvbmUgbGV2ZWwuXG4gIF8uZmxhdHRlbiA9IGZ1bmN0aW9uKGFycmF5LCBzaGFsbG93KSB7XG4gICAgcmV0dXJuIGZsYXR0ZW4oYXJyYXksIHNoYWxsb3csIGZhbHNlKTtcbiAgfTtcblxuICAvLyBSZXR1cm4gYSB2ZXJzaW9uIG9mIHRoZSBhcnJheSB0aGF0IGRvZXMgbm90IGNvbnRhaW4gdGhlIHNwZWNpZmllZCB2YWx1ZShzKS5cbiAgXy53aXRob3V0ID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICByZXR1cm4gXy5kaWZmZXJlbmNlKGFycmF5LCBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICB9O1xuXG4gIC8vIFByb2R1Y2UgYSBkdXBsaWNhdGUtZnJlZSB2ZXJzaW9uIG9mIHRoZSBhcnJheS4gSWYgdGhlIGFycmF5IGhhcyBhbHJlYWR5XG4gIC8vIGJlZW4gc29ydGVkLCB5b3UgaGF2ZSB0aGUgb3B0aW9uIG9mIHVzaW5nIGEgZmFzdGVyIGFsZ29yaXRobS5cbiAgLy8gQWxpYXNlZCBhcyBgdW5pcXVlYC5cbiAgXy51bmlxID0gXy51bmlxdWUgPSBmdW5jdGlvbihhcnJheSwgaXNTb3J0ZWQsIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgaWYgKCFfLmlzQm9vbGVhbihpc1NvcnRlZCkpIHtcbiAgICAgIGNvbnRleHQgPSBpdGVyYXRlZTtcbiAgICAgIGl0ZXJhdGVlID0gaXNTb3J0ZWQ7XG4gICAgICBpc1NvcnRlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoaXRlcmF0ZWUgIT0gbnVsbCkgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBzZWVuID0gW107XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGdldExlbmd0aChhcnJheSk7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHZhbHVlID0gYXJyYXlbaV0sXG4gICAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSA/IGl0ZXJhdGVlKHZhbHVlLCBpLCBhcnJheSkgOiB2YWx1ZTtcbiAgICAgIGlmIChpc1NvcnRlZCkge1xuICAgICAgICBpZiAoIWkgfHwgc2VlbiAhPT0gY29tcHV0ZWQpIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICAgICAgc2VlbiA9IGNvbXB1dGVkO1xuICAgICAgfSBlbHNlIGlmIChpdGVyYXRlZSkge1xuICAgICAgICBpZiAoIV8uY29udGFpbnMoc2VlbiwgY29tcHV0ZWQpKSB7XG4gICAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcbiAgICAgICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIV8uY29udGFpbnMocmVzdWx0LCB2YWx1ZSkpIHtcbiAgICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFByb2R1Y2UgYW4gYXJyYXkgdGhhdCBjb250YWlucyB0aGUgdW5pb246IGVhY2ggZGlzdGluY3QgZWxlbWVudCBmcm9tIGFsbCBvZlxuICAvLyB0aGUgcGFzc2VkLWluIGFycmF5cy5cbiAgXy51bmlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBfLnVuaXEoZmxhdHRlbihhcmd1bWVudHMsIHRydWUsIHRydWUpKTtcbiAgfTtcblxuICAvLyBQcm9kdWNlIGFuIGFycmF5IHRoYXQgY29udGFpbnMgZXZlcnkgaXRlbSBzaGFyZWQgYmV0d2VlbiBhbGwgdGhlXG4gIC8vIHBhc3NlZC1pbiBhcnJheXMuXG4gIF8uaW50ZXJzZWN0aW9uID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGFyZ3NMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBnZXRMZW5ndGgoYXJyYXkpOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gYXJyYXlbaV07XG4gICAgICBpZiAoXy5jb250YWlucyhyZXN1bHQsIGl0ZW0pKSBjb250aW51ZTtcbiAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgYXJnc0xlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmICghXy5jb250YWlucyhhcmd1bWVudHNbal0sIGl0ZW0pKSBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChqID09PSBhcmdzTGVuZ3RoKSByZXN1bHQucHVzaChpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBUYWtlIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gb25lIGFycmF5IGFuZCBhIG51bWJlciBvZiBvdGhlciBhcnJheXMuXG4gIC8vIE9ubHkgdGhlIGVsZW1lbnRzIHByZXNlbnQgaW4ganVzdCB0aGUgZmlyc3QgYXJyYXkgd2lsbCByZW1haW4uXG4gIF8uZGlmZmVyZW5jZSA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgdmFyIHJlc3QgPSBmbGF0dGVuKGFyZ3VtZW50cywgdHJ1ZSwgdHJ1ZSwgMSk7XG4gICAgcmV0dXJuIF8uZmlsdGVyKGFycmF5LCBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICByZXR1cm4gIV8uY29udGFpbnMocmVzdCwgdmFsdWUpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIFppcCB0b2dldGhlciBtdWx0aXBsZSBsaXN0cyBpbnRvIGEgc2luZ2xlIGFycmF5IC0tIGVsZW1lbnRzIHRoYXQgc2hhcmVcbiAgLy8gYW4gaW5kZXggZ28gdG9nZXRoZXIuXG4gIF8uemlwID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIF8udW56aXAoYXJndW1lbnRzKTtcbiAgfTtcblxuICAvLyBDb21wbGVtZW50IG9mIF8uemlwLiBVbnppcCBhY2NlcHRzIGFuIGFycmF5IG9mIGFycmF5cyBhbmQgZ3JvdXBzXG4gIC8vIGVhY2ggYXJyYXkncyBlbGVtZW50cyBvbiBzaGFyZWQgaW5kaWNlc1xuICBfLnVuemlwID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICB2YXIgbGVuZ3RoID0gYXJyYXkgJiYgXy5tYXgoYXJyYXksIGdldExlbmd0aCkubGVuZ3RoIHx8IDA7XG4gICAgdmFyIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICByZXN1bHRbaW5kZXhdID0gXy5wbHVjayhhcnJheSwgaW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIENvbnZlcnRzIGxpc3RzIGludG8gb2JqZWN0cy4gUGFzcyBlaXRoZXIgYSBzaW5nbGUgYXJyYXkgb2YgYFtrZXksIHZhbHVlXWBcbiAgLy8gcGFpcnMsIG9yIHR3byBwYXJhbGxlbCBhcnJheXMgb2YgdGhlIHNhbWUgbGVuZ3RoIC0tIG9uZSBvZiBrZXlzLCBhbmQgb25lIG9mXG4gIC8vIHRoZSBjb3JyZXNwb25kaW5nIHZhbHVlcy5cbiAgXy5vYmplY3QgPSBmdW5jdGlvbihsaXN0LCB2YWx1ZXMpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGdldExlbmd0aChsaXN0KTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodmFsdWVzKSB7XG4gICAgICAgIHJlc3VsdFtsaXN0W2ldXSA9IHZhbHVlc1tpXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdFtsaXN0W2ldWzBdXSA9IGxpc3RbaV1bMV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gR2VuZXJhdG9yIGZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgZmluZEluZGV4IGFuZCBmaW5kTGFzdEluZGV4IGZ1bmN0aW9uc1xuICBmdW5jdGlvbiBjcmVhdGVQcmVkaWNhdGVJbmRleEZpbmRlcihkaXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oYXJyYXksIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgICAgcHJlZGljYXRlID0gY2IocHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICAgIHZhciBsZW5ndGggPSBnZXRMZW5ndGgoYXJyYXkpO1xuICAgICAgdmFyIGluZGV4ID0gZGlyID4gMCA/IDAgOiBsZW5ndGggLSAxO1xuICAgICAgZm9yICg7IGluZGV4ID49IDAgJiYgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IGRpcikge1xuICAgICAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkgcmV0dXJuIGluZGV4O1xuICAgICAgfVxuICAgICAgcmV0dXJuIC0xO1xuICAgIH07XG4gIH1cblxuICAvLyBSZXR1cm5zIHRoZSBmaXJzdCBpbmRleCBvbiBhbiBhcnJheS1saWtlIHRoYXQgcGFzc2VzIGEgcHJlZGljYXRlIHRlc3RcbiAgXy5maW5kSW5kZXggPSBjcmVhdGVQcmVkaWNhdGVJbmRleEZpbmRlcigxKTtcbiAgXy5maW5kTGFzdEluZGV4ID0gY3JlYXRlUHJlZGljYXRlSW5kZXhGaW5kZXIoLTEpO1xuXG4gIC8vIFVzZSBhIGNvbXBhcmF0b3IgZnVuY3Rpb24gdG8gZmlndXJlIG91dCB0aGUgc21hbGxlc3QgaW5kZXggYXQgd2hpY2hcbiAgLy8gYW4gb2JqZWN0IHNob3VsZCBiZSBpbnNlcnRlZCBzbyBhcyB0byBtYWludGFpbiBvcmRlci4gVXNlcyBiaW5hcnkgc2VhcmNoLlxuICBfLnNvcnRlZEluZGV4ID0gZnVuY3Rpb24oYXJyYXksIG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0LCAxKTtcbiAgICB2YXIgdmFsdWUgPSBpdGVyYXRlZShvYmopO1xuICAgIHZhciBsb3cgPSAwLCBoaWdoID0gZ2V0TGVuZ3RoKGFycmF5KTtcbiAgICB3aGlsZSAobG93IDwgaGlnaCkge1xuICAgICAgdmFyIG1pZCA9IE1hdGguZmxvb3IoKGxvdyArIGhpZ2gpIC8gMik7XG4gICAgICBpZiAoaXRlcmF0ZWUoYXJyYXlbbWlkXSkgPCB2YWx1ZSkgbG93ID0gbWlkICsgMTsgZWxzZSBoaWdoID0gbWlkO1xuICAgIH1cbiAgICByZXR1cm4gbG93O1xuICB9O1xuXG4gIC8vIEdlbmVyYXRvciBmdW5jdGlvbiB0byBjcmVhdGUgdGhlIGluZGV4T2YgYW5kIGxhc3RJbmRleE9mIGZ1bmN0aW9uc1xuICBmdW5jdGlvbiBjcmVhdGVJbmRleEZpbmRlcihkaXIsIHByZWRpY2F0ZUZpbmQsIHNvcnRlZEluZGV4KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGFycmF5LCBpdGVtLCBpZHgpIHtcbiAgICAgIHZhciBpID0gMCwgbGVuZ3RoID0gZ2V0TGVuZ3RoKGFycmF5KTtcbiAgICAgIGlmICh0eXBlb2YgaWR4ID09ICdudW1iZXInKSB7XG4gICAgICAgIGlmIChkaXIgPiAwKSB7XG4gICAgICAgICAgICBpID0gaWR4ID49IDAgPyBpZHggOiBNYXRoLm1heChpZHggKyBsZW5ndGgsIGkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGVuZ3RoID0gaWR4ID49IDAgPyBNYXRoLm1pbihpZHggKyAxLCBsZW5ndGgpIDogaWR4ICsgbGVuZ3RoICsgMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzb3J0ZWRJbmRleCAmJiBpZHggJiYgbGVuZ3RoKSB7XG4gICAgICAgIGlkeCA9IHNvcnRlZEluZGV4KGFycmF5LCBpdGVtKTtcbiAgICAgICAgcmV0dXJuIGFycmF5W2lkeF0gPT09IGl0ZW0gPyBpZHggOiAtMTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtICE9PSBpdGVtKSB7XG4gICAgICAgIGlkeCA9IHByZWRpY2F0ZUZpbmQoc2xpY2UuY2FsbChhcnJheSwgaSwgbGVuZ3RoKSwgXy5pc05hTik7XG4gICAgICAgIHJldHVybiBpZHggPj0gMCA/IGlkeCArIGkgOiAtMTtcbiAgICAgIH1cbiAgICAgIGZvciAoaWR4ID0gZGlyID4gMCA/IGkgOiBsZW5ndGggLSAxOyBpZHggPj0gMCAmJiBpZHggPCBsZW5ndGg7IGlkeCArPSBkaXIpIHtcbiAgICAgICAgaWYgKGFycmF5W2lkeF0gPT09IGl0ZW0pIHJldHVybiBpZHg7XG4gICAgICB9XG4gICAgICByZXR1cm4gLTE7XG4gICAgfTtcbiAgfVxuXG4gIC8vIFJldHVybiB0aGUgcG9zaXRpb24gb2YgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgYW4gaXRlbSBpbiBhbiBhcnJheSxcbiAgLy8gb3IgLTEgaWYgdGhlIGl0ZW0gaXMgbm90IGluY2x1ZGVkIGluIHRoZSBhcnJheS5cbiAgLy8gSWYgdGhlIGFycmF5IGlzIGxhcmdlIGFuZCBhbHJlYWR5IGluIHNvcnQgb3JkZXIsIHBhc3MgYHRydWVgXG4gIC8vIGZvciAqKmlzU29ydGVkKiogdG8gdXNlIGJpbmFyeSBzZWFyY2guXG4gIF8uaW5kZXhPZiA9IGNyZWF0ZUluZGV4RmluZGVyKDEsIF8uZmluZEluZGV4LCBfLnNvcnRlZEluZGV4KTtcbiAgXy5sYXN0SW5kZXhPZiA9IGNyZWF0ZUluZGV4RmluZGVyKC0xLCBfLmZpbmRMYXN0SW5kZXgpO1xuXG4gIC8vIEdlbmVyYXRlIGFuIGludGVnZXIgQXJyYXkgY29udGFpbmluZyBhbiBhcml0aG1ldGljIHByb2dyZXNzaW9uLiBBIHBvcnQgb2ZcbiAgLy8gdGhlIG5hdGl2ZSBQeXRob24gYHJhbmdlKClgIGZ1bmN0aW9uLiBTZWVcbiAgLy8gW3RoZSBQeXRob24gZG9jdW1lbnRhdGlvbl0oaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L2Z1bmN0aW9ucy5odG1sI3JhbmdlKS5cbiAgXy5yYW5nZSA9IGZ1bmN0aW9uKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gICAgaWYgKHN0b3AgPT0gbnVsbCkge1xuICAgICAgc3RvcCA9IHN0YXJ0IHx8IDA7XG4gICAgICBzdGFydCA9IDA7XG4gICAgfVxuICAgIHN0ZXAgPSBzdGVwIHx8IDE7XG5cbiAgICB2YXIgbGVuZ3RoID0gTWF0aC5tYXgoTWF0aC5jZWlsKChzdG9wIC0gc3RhcnQpIC8gc3RlcCksIDApO1xuICAgIHZhciByYW5nZSA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBsZW5ndGg7IGlkeCsrLCBzdGFydCArPSBzdGVwKSB7XG4gICAgICByYW5nZVtpZHhdID0gc3RhcnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJhbmdlO1xuICB9O1xuXG4gIC8vIEZ1bmN0aW9uIChhaGVtKSBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGV4ZWN1dGUgYSBmdW5jdGlvbiBhcyBhIGNvbnN0cnVjdG9yXG4gIC8vIG9yIGEgbm9ybWFsIGZ1bmN0aW9uIHdpdGggdGhlIHByb3ZpZGVkIGFyZ3VtZW50c1xuICB2YXIgZXhlY3V0ZUJvdW5kID0gZnVuY3Rpb24oc291cmNlRnVuYywgYm91bmRGdW5jLCBjb250ZXh0LCBjYWxsaW5nQ29udGV4dCwgYXJncykge1xuICAgIGlmICghKGNhbGxpbmdDb250ZXh0IGluc3RhbmNlb2YgYm91bmRGdW5jKSkgcmV0dXJuIHNvdXJjZUZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgdmFyIHNlbGYgPSBiYXNlQ3JlYXRlKHNvdXJjZUZ1bmMucHJvdG90eXBlKTtcbiAgICB2YXIgcmVzdWx0ID0gc291cmNlRnVuYy5hcHBseShzZWxmLCBhcmdzKTtcbiAgICBpZiAoXy5pc09iamVjdChyZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICAgIHJldHVybiBzZWxmO1xuICB9O1xuXG4gIC8vIENyZWF0ZSBhIGZ1bmN0aW9uIGJvdW5kIHRvIGEgZ2l2ZW4gb2JqZWN0IChhc3NpZ25pbmcgYHRoaXNgLCBhbmQgYXJndW1lbnRzLFxuICAvLyBvcHRpb25hbGx5KS4gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYEZ1bmN0aW9uLmJpbmRgIGlmXG4gIC8vIGF2YWlsYWJsZS5cbiAgXy5iaW5kID0gZnVuY3Rpb24oZnVuYywgY29udGV4dCkge1xuICAgIGlmIChuYXRpdmVCaW5kICYmIGZ1bmMuYmluZCA9PT0gbmF0aXZlQmluZCkgcmV0dXJuIG5hdGl2ZUJpbmQuYXBwbHkoZnVuYywgc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICBpZiAoIV8uaXNGdW5jdGlvbihmdW5jKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQmluZCBtdXN0IGJlIGNhbGxlZCBvbiBhIGZ1bmN0aW9uJyk7XG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgdmFyIGJvdW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZXhlY3V0ZUJvdW5kKGZ1bmMsIGJvdW5kLCBjb250ZXh0LCB0aGlzLCBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgICB9O1xuICAgIHJldHVybiBib3VuZDtcbiAgfTtcblxuICAvLyBQYXJ0aWFsbHkgYXBwbHkgYSBmdW5jdGlvbiBieSBjcmVhdGluZyBhIHZlcnNpb24gdGhhdCBoYXMgaGFkIHNvbWUgb2YgaXRzXG4gIC8vIGFyZ3VtZW50cyBwcmUtZmlsbGVkLCB3aXRob3V0IGNoYW5naW5nIGl0cyBkeW5hbWljIGB0aGlzYCBjb250ZXh0LiBfIGFjdHNcbiAgLy8gYXMgYSBwbGFjZWhvbGRlciwgYWxsb3dpbmcgYW55IGNvbWJpbmF0aW9uIG9mIGFyZ3VtZW50cyB0byBiZSBwcmUtZmlsbGVkLlxuICBfLnBhcnRpYWwgPSBmdW5jdGlvbihmdW5jKSB7XG4gICAgdmFyIGJvdW5kQXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICB2YXIgYm91bmQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBwb3NpdGlvbiA9IDAsIGxlbmd0aCA9IGJvdW5kQXJncy5sZW5ndGg7XG4gICAgICB2YXIgYXJncyA9IEFycmF5KGxlbmd0aCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFyZ3NbaV0gPSBib3VuZEFyZ3NbaV0gPT09IF8gPyBhcmd1bWVudHNbcG9zaXRpb24rK10gOiBib3VuZEFyZ3NbaV07XG4gICAgICB9XG4gICAgICB3aGlsZSAocG9zaXRpb24gPCBhcmd1bWVudHMubGVuZ3RoKSBhcmdzLnB1c2goYXJndW1lbnRzW3Bvc2l0aW9uKytdKTtcbiAgICAgIHJldHVybiBleGVjdXRlQm91bmQoZnVuYywgYm91bmQsIHRoaXMsIHRoaXMsIGFyZ3MpO1xuICAgIH07XG4gICAgcmV0dXJuIGJvdW5kO1xuICB9O1xuXG4gIC8vIEJpbmQgYSBudW1iZXIgb2YgYW4gb2JqZWN0J3MgbWV0aG9kcyB0byB0aGF0IG9iamVjdC4gUmVtYWluaW5nIGFyZ3VtZW50c1xuICAvLyBhcmUgdGhlIG1ldGhvZCBuYW1lcyB0byBiZSBib3VuZC4gVXNlZnVsIGZvciBlbnN1cmluZyB0aGF0IGFsbCBjYWxsYmFja3NcbiAgLy8gZGVmaW5lZCBvbiBhbiBvYmplY3QgYmVsb25nIHRvIGl0LlxuICBfLmJpbmRBbGwgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgaSwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCwga2V5O1xuICAgIGlmIChsZW5ndGggPD0gMSkgdGhyb3cgbmV3IEVycm9yKCdiaW5kQWxsIG11c3QgYmUgcGFzc2VkIGZ1bmN0aW9uIG5hbWVzJyk7XG4gICAgZm9yIChpID0gMTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBhcmd1bWVudHNbaV07XG4gICAgICBvYmpba2V5XSA9IF8uYmluZChvYmpba2V5XSwgb2JqKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBNZW1vaXplIGFuIGV4cGVuc2l2ZSBmdW5jdGlvbiBieSBzdG9yaW5nIGl0cyByZXN1bHRzLlxuICBfLm1lbW9pemUgPSBmdW5jdGlvbihmdW5jLCBoYXNoZXIpIHtcbiAgICB2YXIgbWVtb2l6ZSA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAgdmFyIGNhY2hlID0gbWVtb2l6ZS5jYWNoZTtcbiAgICAgIHZhciBhZGRyZXNzID0gJycgKyAoaGFzaGVyID8gaGFzaGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiBrZXkpO1xuICAgICAgaWYgKCFfLmhhcyhjYWNoZSwgYWRkcmVzcykpIGNhY2hlW2FkZHJlc3NdID0gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgcmV0dXJuIGNhY2hlW2FkZHJlc3NdO1xuICAgIH07XG4gICAgbWVtb2l6ZS5jYWNoZSA9IHt9O1xuICAgIHJldHVybiBtZW1vaXplO1xuICB9O1xuXG4gIC8vIERlbGF5cyBhIGZ1bmN0aW9uIGZvciB0aGUgZ2l2ZW4gbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgYW5kIHRoZW4gY2FsbHNcbiAgLy8gaXQgd2l0aCB0aGUgYXJndW1lbnRzIHN1cHBsaWVkLlxuICBfLmRlbGF5ID0gZnVuY3Rpb24oZnVuYywgd2FpdCkge1xuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4gZnVuYy5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9LCB3YWl0KTtcbiAgfTtcblxuICAvLyBEZWZlcnMgYSBmdW5jdGlvbiwgc2NoZWR1bGluZyBpdCB0byBydW4gYWZ0ZXIgdGhlIGN1cnJlbnQgY2FsbCBzdGFjayBoYXNcbiAgLy8gY2xlYXJlZC5cbiAgXy5kZWZlciA9IF8ucGFydGlhbChfLmRlbGF5LCBfLCAxKTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIHdoZW4gaW52b2tlZCwgd2lsbCBvbmx5IGJlIHRyaWdnZXJlZCBhdCBtb3N0IG9uY2VcbiAgLy8gZHVyaW5nIGEgZ2l2ZW4gd2luZG93IG9mIHRpbWUuIE5vcm1hbGx5LCB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uIHdpbGwgcnVuXG4gIC8vIGFzIG11Y2ggYXMgaXQgY2FuLCB3aXRob3V0IGV2ZXIgZ29pbmcgbW9yZSB0aGFuIG9uY2UgcGVyIGB3YWl0YCBkdXJhdGlvbjtcbiAgLy8gYnV0IGlmIHlvdSdkIGxpa2UgdG8gZGlzYWJsZSB0aGUgZXhlY3V0aW9uIG9uIHRoZSBsZWFkaW5nIGVkZ2UsIHBhc3NcbiAgLy8gYHtsZWFkaW5nOiBmYWxzZX1gLiBUbyBkaXNhYmxlIGV4ZWN1dGlvbiBvbiB0aGUgdHJhaWxpbmcgZWRnZSwgZGl0dG8uXG4gIF8udGhyb3R0bGUgPSBmdW5jdGlvbihmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gICAgdmFyIGNvbnRleHQsIGFyZ3MsIHJlc3VsdDtcbiAgICB2YXIgdGltZW91dCA9IG51bGw7XG4gICAgdmFyIHByZXZpb3VzID0gMDtcbiAgICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHByZXZpb3VzID0gb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSA/IDAgOiBfLm5vdygpO1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgaWYgKCF0aW1lb3V0KSBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbm93ID0gXy5ub3coKTtcbiAgICAgIGlmICghcHJldmlvdXMgJiYgb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSkgcHJldmlvdXMgPSBub3c7XG4gICAgICB2YXIgcmVtYWluaW5nID0gd2FpdCAtIChub3cgLSBwcmV2aW91cyk7XG4gICAgICBjb250ZXh0ID0gdGhpcztcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICBpZiAocmVtYWluaW5nIDw9IDAgfHwgcmVtYWluaW5nID4gd2FpdCkge1xuICAgICAgICBpZiAodGltZW91dCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBwcmV2aW91cyA9IG5vdztcbiAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgaWYgKCF0aW1lb3V0KSBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgICB9IGVsc2UgaWYgKCF0aW1lb3V0ICYmIG9wdGlvbnMudHJhaWxpbmcgIT09IGZhbHNlKSB7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCByZW1haW5pbmcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgYXMgbG9uZyBhcyBpdCBjb250aW51ZXMgdG8gYmUgaW52b2tlZCwgd2lsbCBub3RcbiAgLy8gYmUgdHJpZ2dlcmVkLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgaXQgc3RvcHMgYmVpbmcgY2FsbGVkIGZvclxuICAvLyBOIG1pbGxpc2Vjb25kcy4gSWYgYGltbWVkaWF0ZWAgaXMgcGFzc2VkLCB0cmlnZ2VyIHRoZSBmdW5jdGlvbiBvbiB0aGVcbiAgLy8gbGVhZGluZyBlZGdlLCBpbnN0ZWFkIG9mIHRoZSB0cmFpbGluZy5cbiAgXy5kZWJvdW5jZSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICAgIHZhciB0aW1lb3V0LCBhcmdzLCBjb250ZXh0LCB0aW1lc3RhbXAsIHJlc3VsdDtcblxuICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGxhc3QgPSBfLm5vdygpIC0gdGltZXN0YW1wO1xuXG4gICAgICBpZiAobGFzdCA8IHdhaXQgJiYgbGFzdCA+PSAwKSB7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0IC0gbGFzdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgaWYgKCFpbW1lZGlhdGUpIHtcbiAgICAgICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgIGlmICghdGltZW91dCkgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnRleHQgPSB0aGlzO1xuICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIHRpbWVzdGFtcCA9IF8ubm93KCk7XG4gICAgICB2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICAgIGlmICghdGltZW91dCkgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgICAgaWYgKGNhbGxOb3cpIHtcbiAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyB0aGUgZmlyc3QgZnVuY3Rpb24gcGFzc2VkIGFzIGFuIGFyZ3VtZW50IHRvIHRoZSBzZWNvbmQsXG4gIC8vIGFsbG93aW5nIHlvdSB0byBhZGp1c3QgYXJndW1lbnRzLCBydW4gY29kZSBiZWZvcmUgYW5kIGFmdGVyLCBhbmRcbiAgLy8gY29uZGl0aW9uYWxseSBleGVjdXRlIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi5cbiAgXy53cmFwID0gZnVuY3Rpb24oZnVuYywgd3JhcHBlcikge1xuICAgIHJldHVybiBfLnBhcnRpYWwod3JhcHBlciwgZnVuYyk7XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIG5lZ2F0ZWQgdmVyc2lvbiBvZiB0aGUgcGFzc2VkLWluIHByZWRpY2F0ZS5cbiAgXy5uZWdhdGUgPSBmdW5jdGlvbihwcmVkaWNhdGUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gIXByZWRpY2F0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgaXMgdGhlIGNvbXBvc2l0aW9uIG9mIGEgbGlzdCBvZiBmdW5jdGlvbnMsIGVhY2hcbiAgLy8gY29uc3VtaW5nIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIHRoYXQgZm9sbG93cy5cbiAgXy5jb21wb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdmFyIHN0YXJ0ID0gYXJncy5sZW5ndGggLSAxO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBpID0gc3RhcnQ7XG4gICAgICB2YXIgcmVzdWx0ID0gYXJnc1tzdGFydF0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIHdoaWxlIChpLS0pIHJlc3VsdCA9IGFyZ3NbaV0uY2FsbCh0aGlzLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgb25seSBiZSBleGVjdXRlZCBvbiBhbmQgYWZ0ZXIgdGhlIE50aCBjYWxsLlxuICBfLmFmdGVyID0gZnVuY3Rpb24odGltZXMsIGZ1bmMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoLS10aW1lcyA8IDEpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgb25seSBiZSBleGVjdXRlZCB1cCB0byAoYnV0IG5vdCBpbmNsdWRpbmcpIHRoZSBOdGggY2FsbC5cbiAgXy5iZWZvcmUgPSBmdW5jdGlvbih0aW1lcywgZnVuYykge1xuICAgIHZhciBtZW1vO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICgtLXRpbWVzID4gMCkge1xuICAgICAgICBtZW1vID0gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgaWYgKHRpbWVzIDw9IDEpIGZ1bmMgPSBudWxsO1xuICAgICAgcmV0dXJuIG1lbW87XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGF0IG1vc3Qgb25lIHRpbWUsIG5vIG1hdHRlciBob3dcbiAgLy8gb2Z0ZW4geW91IGNhbGwgaXQuIFVzZWZ1bCBmb3IgbGF6eSBpbml0aWFsaXphdGlvbi5cbiAgXy5vbmNlID0gXy5wYXJ0aWFsKF8uYmVmb3JlLCAyKTtcblxuICAvLyBPYmplY3QgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBLZXlzIGluIElFIDwgOSB0aGF0IHdvbid0IGJlIGl0ZXJhdGVkIGJ5IGBmb3Iga2V5IGluIC4uLmAgYW5kIHRodXMgbWlzc2VkLlxuICB2YXIgaGFzRW51bUJ1ZyA9ICF7dG9TdHJpbmc6IG51bGx9LnByb3BlcnR5SXNFbnVtZXJhYmxlKCd0b1N0cmluZycpO1xuICB2YXIgbm9uRW51bWVyYWJsZVByb3BzID0gWyd2YWx1ZU9mJywgJ2lzUHJvdG90eXBlT2YnLCAndG9TdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICdoYXNPd25Qcm9wZXJ0eScsICd0b0xvY2FsZVN0cmluZyddO1xuXG4gIGZ1bmN0aW9uIGNvbGxlY3ROb25FbnVtUHJvcHMob2JqLCBrZXlzKSB7XG4gICAgdmFyIG5vbkVudW1JZHggPSBub25FbnVtZXJhYmxlUHJvcHMubGVuZ3RoO1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IG9iai5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgcHJvdG8gPSAoXy5pc0Z1bmN0aW9uKGNvbnN0cnVjdG9yKSAmJiBjb25zdHJ1Y3Rvci5wcm90b3R5cGUpIHx8IE9ialByb3RvO1xuXG4gICAgLy8gQ29uc3RydWN0b3IgaXMgYSBzcGVjaWFsIGNhc2UuXG4gICAgdmFyIHByb3AgPSAnY29uc3RydWN0b3InO1xuICAgIGlmIChfLmhhcyhvYmosIHByb3ApICYmICFfLmNvbnRhaW5zKGtleXMsIHByb3ApKSBrZXlzLnB1c2gocHJvcCk7XG5cbiAgICB3aGlsZSAobm9uRW51bUlkeC0tKSB7XG4gICAgICBwcm9wID0gbm9uRW51bWVyYWJsZVByb3BzW25vbkVudW1JZHhdO1xuICAgICAgaWYgKHByb3AgaW4gb2JqICYmIG9ialtwcm9wXSAhPT0gcHJvdG9bcHJvcF0gJiYgIV8uY29udGFpbnMoa2V5cywgcHJvcCkpIHtcbiAgICAgICAga2V5cy5wdXNoKHByb3ApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFJldHJpZXZlIHRoZSBuYW1lcyBvZiBhbiBvYmplY3QncyBvd24gcHJvcGVydGllcy5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYE9iamVjdC5rZXlzYFxuICBfLmtleXMgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAoIV8uaXNPYmplY3Qob2JqKSkgcmV0dXJuIFtdO1xuICAgIGlmIChuYXRpdmVLZXlzKSByZXR1cm4gbmF0aXZlS2V5cyhvYmopO1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikgaWYgKF8uaGFzKG9iaiwga2V5KSkga2V5cy5wdXNoKGtleSk7XG4gICAgLy8gQWhlbSwgSUUgPCA5LlxuICAgIGlmIChoYXNFbnVtQnVnKSBjb2xsZWN0Tm9uRW51bVByb3BzKG9iaiwga2V5cyk7XG4gICAgcmV0dXJuIGtleXM7XG4gIH07XG5cbiAgLy8gUmV0cmlldmUgYWxsIHRoZSBwcm9wZXJ0eSBuYW1lcyBvZiBhbiBvYmplY3QuXG4gIF8uYWxsS2V5cyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmICghXy5pc09iamVjdChvYmopKSByZXR1cm4gW107XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSBrZXlzLnB1c2goa2V5KTtcbiAgICAvLyBBaGVtLCBJRSA8IDkuXG4gICAgaWYgKGhhc0VudW1CdWcpIGNvbGxlY3ROb25FbnVtUHJvcHMob2JqLCBrZXlzKTtcbiAgICByZXR1cm4ga2V5cztcbiAgfTtcblxuICAvLyBSZXRyaWV2ZSB0aGUgdmFsdWVzIG9mIGFuIG9iamVjdCdzIHByb3BlcnRpZXMuXG4gIF8udmFsdWVzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGtleXMgPSBfLmtleXMob2JqKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIHZhbHVlcyA9IEFycmF5KGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWVzW2ldID0gb2JqW2tleXNbaV1dO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9O1xuXG4gIC8vIFJldHVybnMgdGhlIHJlc3VsdHMgb2YgYXBwbHlpbmcgdGhlIGl0ZXJhdGVlIHRvIGVhY2ggZWxlbWVudCBvZiB0aGUgb2JqZWN0XG4gIC8vIEluIGNvbnRyYXN0IHRvIF8ubWFwIGl0IHJldHVybnMgYW4gb2JqZWN0XG4gIF8ubWFwT2JqZWN0ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgIHZhciBrZXlzID0gIF8ua2V5cyhvYmopLFxuICAgICAgICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoLFxuICAgICAgICAgIHJlc3VsdHMgPSB7fSxcbiAgICAgICAgICBjdXJyZW50S2V5O1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjdXJyZW50S2V5ID0ga2V5c1tpbmRleF07XG4gICAgICAgIHJlc3VsdHNbY3VycmVudEtleV0gPSBpdGVyYXRlZShvYmpbY3VycmVudEtleV0sIGN1cnJlbnRLZXksIG9iaik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICAvLyBDb252ZXJ0IGFuIG9iamVjdCBpbnRvIGEgbGlzdCBvZiBgW2tleSwgdmFsdWVdYCBwYWlycy5cbiAgXy5wYWlycyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBwYWlycyA9IEFycmF5KGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgcGFpcnNbaV0gPSBba2V5c1tpXSwgb2JqW2tleXNbaV1dXTtcbiAgICB9XG4gICAgcmV0dXJuIHBhaXJzO1xuICB9O1xuXG4gIC8vIEludmVydCB0aGUga2V5cyBhbmQgdmFsdWVzIG9mIGFuIG9iamVjdC4gVGhlIHZhbHVlcyBtdXN0IGJlIHNlcmlhbGl6YWJsZS5cbiAgXy5pbnZlcnQgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgdmFyIGtleXMgPSBfLmtleXMob2JqKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0W29ialtrZXlzW2ldXV0gPSBrZXlzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFJldHVybiBhIHNvcnRlZCBsaXN0IG9mIHRoZSBmdW5jdGlvbiBuYW1lcyBhdmFpbGFibGUgb24gdGhlIG9iamVjdC5cbiAgLy8gQWxpYXNlZCBhcyBgbWV0aG9kc2BcbiAgXy5mdW5jdGlvbnMgPSBfLm1ldGhvZHMgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgbmFtZXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoXy5pc0Z1bmN0aW9uKG9ialtrZXldKSkgbmFtZXMucHVzaChrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZXMuc29ydCgpO1xuICB9O1xuXG4gIC8vIEV4dGVuZCBhIGdpdmVuIG9iamVjdCB3aXRoIGFsbCB0aGUgcHJvcGVydGllcyBpbiBwYXNzZWQtaW4gb2JqZWN0KHMpLlxuICBfLmV4dGVuZCA9IGNyZWF0ZUFzc2lnbmVyKF8uYWxsS2V5cyk7XG5cbiAgLy8gQXNzaWducyBhIGdpdmVuIG9iamVjdCB3aXRoIGFsbCB0aGUgb3duIHByb3BlcnRpZXMgaW4gdGhlIHBhc3NlZC1pbiBvYmplY3QocylcbiAgLy8gKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9hc3NpZ24pXG4gIF8uZXh0ZW5kT3duID0gXy5hc3NpZ24gPSBjcmVhdGVBc3NpZ25lcihfLmtleXMpO1xuXG4gIC8vIFJldHVybnMgdGhlIGZpcnN0IGtleSBvbiBhbiBvYmplY3QgdGhhdCBwYXNzZXMgYSBwcmVkaWNhdGUgdGVzdFxuICBfLmZpbmRLZXkgPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgdmFyIGtleXMgPSBfLmtleXMob2JqKSwga2V5O1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBrZXlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgaWYgKHByZWRpY2F0ZShvYmpba2V5XSwga2V5LCBvYmopKSByZXR1cm4ga2V5O1xuICAgIH1cbiAgfTtcblxuICAvLyBSZXR1cm4gYSBjb3B5IG9mIHRoZSBvYmplY3Qgb25seSBjb250YWluaW5nIHRoZSB3aGl0ZWxpc3RlZCBwcm9wZXJ0aWVzLlxuICBfLnBpY2sgPSBmdW5jdGlvbihvYmplY3QsIG9pdGVyYXRlZSwgY29udGV4dCkge1xuICAgIHZhciByZXN1bHQgPSB7fSwgb2JqID0gb2JqZWN0LCBpdGVyYXRlZSwga2V5cztcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiByZXN1bHQ7XG4gICAgaWYgKF8uaXNGdW5jdGlvbihvaXRlcmF0ZWUpKSB7XG4gICAgICBrZXlzID0gXy5hbGxLZXlzKG9iaik7XG4gICAgICBpdGVyYXRlZSA9IG9wdGltaXplQ2Iob2l0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAga2V5cyA9IGZsYXR0ZW4oYXJndW1lbnRzLCBmYWxzZSwgZmFsc2UsIDEpO1xuICAgICAgaXRlcmF0ZWUgPSBmdW5jdGlvbih2YWx1ZSwga2V5LCBvYmopIHsgcmV0dXJuIGtleSBpbiBvYmo7IH07XG4gICAgICBvYmogPSBPYmplY3Qob2JqKTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGtleXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgdmFyIHZhbHVlID0gb2JqW2tleV07XG4gICAgICBpZiAoaXRlcmF0ZWUodmFsdWUsIGtleSwgb2JqKSkgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAgLy8gUmV0dXJuIGEgY29weSBvZiB0aGUgb2JqZWN0IHdpdGhvdXQgdGhlIGJsYWNrbGlzdGVkIHByb3BlcnRpZXMuXG4gIF8ub21pdCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICBpZiAoXy5pc0Z1bmN0aW9uKGl0ZXJhdGVlKSkge1xuICAgICAgaXRlcmF0ZWUgPSBfLm5lZ2F0ZShpdGVyYXRlZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBrZXlzID0gXy5tYXAoZmxhdHRlbihhcmd1bWVudHMsIGZhbHNlLCBmYWxzZSwgMSksIFN0cmluZyk7XG4gICAgICBpdGVyYXRlZSA9IGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgcmV0dXJuICFfLmNvbnRhaW5zKGtleXMsIGtleSk7XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gXy5waWNrKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpO1xuICB9O1xuXG4gIC8vIEZpbGwgaW4gYSBnaXZlbiBvYmplY3Qgd2l0aCBkZWZhdWx0IHByb3BlcnRpZXMuXG4gIF8uZGVmYXVsdHMgPSBjcmVhdGVBc3NpZ25lcihfLmFsbEtleXMsIHRydWUpO1xuXG4gIC8vIENyZWF0ZXMgYW4gb2JqZWN0IHRoYXQgaW5oZXJpdHMgZnJvbSB0aGUgZ2l2ZW4gcHJvdG90eXBlIG9iamVjdC5cbiAgLy8gSWYgYWRkaXRpb25hbCBwcm9wZXJ0aWVzIGFyZSBwcm92aWRlZCB0aGVuIHRoZXkgd2lsbCBiZSBhZGRlZCB0byB0aGVcbiAgLy8gY3JlYXRlZCBvYmplY3QuXG4gIF8uY3JlYXRlID0gZnVuY3Rpb24ocHJvdG90eXBlLCBwcm9wcykge1xuICAgIHZhciByZXN1bHQgPSBiYXNlQ3JlYXRlKHByb3RvdHlwZSk7XG4gICAgaWYgKHByb3BzKSBfLmV4dGVuZE93bihyZXN1bHQsIHByb3BzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIENyZWF0ZSBhIChzaGFsbG93LWNsb25lZCkgZHVwbGljYXRlIG9mIGFuIG9iamVjdC5cbiAgXy5jbG9uZSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmICghXy5pc09iamVjdChvYmopKSByZXR1cm4gb2JqO1xuICAgIHJldHVybiBfLmlzQXJyYXkob2JqKSA/IG9iai5zbGljZSgpIDogXy5leHRlbmQoe30sIG9iaik7XG4gIH07XG5cbiAgLy8gSW52b2tlcyBpbnRlcmNlcHRvciB3aXRoIHRoZSBvYmosIGFuZCB0aGVuIHJldHVybnMgb2JqLlxuICAvLyBUaGUgcHJpbWFyeSBwdXJwb3NlIG9mIHRoaXMgbWV0aG9kIGlzIHRvIFwidGFwIGludG9cIiBhIG1ldGhvZCBjaGFpbiwgaW5cbiAgLy8gb3JkZXIgdG8gcGVyZm9ybSBvcGVyYXRpb25zIG9uIGludGVybWVkaWF0ZSByZXN1bHRzIHdpdGhpbiB0aGUgY2hhaW4uXG4gIF8udGFwID0gZnVuY3Rpb24ob2JqLCBpbnRlcmNlcHRvcikge1xuICAgIGludGVyY2VwdG9yKG9iaik7XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBSZXR1cm5zIHdoZXRoZXIgYW4gb2JqZWN0IGhhcyBhIGdpdmVuIHNldCBvZiBga2V5OnZhbHVlYCBwYWlycy5cbiAgXy5pc01hdGNoID0gZnVuY3Rpb24ob2JqZWN0LCBhdHRycykge1xuICAgIHZhciBrZXlzID0gXy5rZXlzKGF0dHJzKSwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgaWYgKG9iamVjdCA9PSBudWxsKSByZXR1cm4gIWxlbmd0aDtcbiAgICB2YXIgb2JqID0gT2JqZWN0KG9iamVjdCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICBpZiAoYXR0cnNba2V5XSAhPT0gb2JqW2tleV0gfHwgIShrZXkgaW4gb2JqKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuXG4gIC8vIEludGVybmFsIHJlY3Vyc2l2ZSBjb21wYXJpc29uIGZ1bmN0aW9uIGZvciBgaXNFcXVhbGAuXG4gIHZhciBlcSA9IGZ1bmN0aW9uKGEsIGIsIGFTdGFjaywgYlN0YWNrKSB7XG4gICAgLy8gSWRlbnRpY2FsIG9iamVjdHMgYXJlIGVxdWFsLiBgMCA9PT0gLTBgLCBidXQgdGhleSBhcmVuJ3QgaWRlbnRpY2FsLlxuICAgIC8vIFNlZSB0aGUgW0hhcm1vbnkgYGVnYWxgIHByb3Bvc2FsXShodHRwOi8vd2lraS5lY21hc2NyaXB0Lm9yZy9kb2t1LnBocD9pZD1oYXJtb255OmVnYWwpLlxuICAgIGlmIChhID09PSBiKSByZXR1cm4gYSAhPT0gMCB8fCAxIC8gYSA9PT0gMSAvIGI7XG4gICAgLy8gQSBzdHJpY3QgY29tcGFyaXNvbiBpcyBuZWNlc3NhcnkgYmVjYXVzZSBgbnVsbCA9PSB1bmRlZmluZWRgLlxuICAgIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKSByZXR1cm4gYSA9PT0gYjtcbiAgICAvLyBVbndyYXAgYW55IHdyYXBwZWQgb2JqZWN0cy5cbiAgICBpZiAoYSBpbnN0YW5jZW9mIF8pIGEgPSBhLl93cmFwcGVkO1xuICAgIGlmIChiIGluc3RhbmNlb2YgXykgYiA9IGIuX3dyYXBwZWQ7XG4gICAgLy8gQ29tcGFyZSBgW1tDbGFzc11dYCBuYW1lcy5cbiAgICB2YXIgY2xhc3NOYW1lID0gdG9TdHJpbmcuY2FsbChhKTtcbiAgICBpZiAoY2xhc3NOYW1lICE9PSB0b1N0cmluZy5jYWxsKGIpKSByZXR1cm4gZmFsc2U7XG4gICAgc3dpdGNoIChjbGFzc05hbWUpIHtcbiAgICAgIC8vIFN0cmluZ3MsIG51bWJlcnMsIHJlZ3VsYXIgZXhwcmVzc2lvbnMsIGRhdGVzLCBhbmQgYm9vbGVhbnMgYXJlIGNvbXBhcmVkIGJ5IHZhbHVlLlxuICAgICAgY2FzZSAnW29iamVjdCBSZWdFeHBdJzpcbiAgICAgIC8vIFJlZ0V4cHMgYXJlIGNvZXJjZWQgdG8gc3RyaW5ncyBmb3IgY29tcGFyaXNvbiAoTm90ZTogJycgKyAvYS9pID09PSAnL2EvaScpXG4gICAgICBjYXNlICdbb2JqZWN0IFN0cmluZ10nOlxuICAgICAgICAvLyBQcmltaXRpdmVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIG9iamVjdCB3cmFwcGVycyBhcmUgZXF1aXZhbGVudDsgdGh1cywgYFwiNVwiYCBpc1xuICAgICAgICAvLyBlcXVpdmFsZW50IHRvIGBuZXcgU3RyaW5nKFwiNVwiKWAuXG4gICAgICAgIHJldHVybiAnJyArIGEgPT09ICcnICsgYjtcbiAgICAgIGNhc2UgJ1tvYmplY3QgTnVtYmVyXSc6XG4gICAgICAgIC8vIGBOYU5gcyBhcmUgZXF1aXZhbGVudCwgYnV0IG5vbi1yZWZsZXhpdmUuXG4gICAgICAgIC8vIE9iamVjdChOYU4pIGlzIGVxdWl2YWxlbnQgdG8gTmFOXG4gICAgICAgIGlmICgrYSAhPT0gK2EpIHJldHVybiArYiAhPT0gK2I7XG4gICAgICAgIC8vIEFuIGBlZ2FsYCBjb21wYXJpc29uIGlzIHBlcmZvcm1lZCBmb3Igb3RoZXIgbnVtZXJpYyB2YWx1ZXMuXG4gICAgICAgIHJldHVybiArYSA9PT0gMCA/IDEgLyArYSA9PT0gMSAvIGIgOiArYSA9PT0gK2I7XG4gICAgICBjYXNlICdbb2JqZWN0IERhdGVdJzpcbiAgICAgIGNhc2UgJ1tvYmplY3QgQm9vbGVhbl0nOlxuICAgICAgICAvLyBDb2VyY2UgZGF0ZXMgYW5kIGJvb2xlYW5zIHRvIG51bWVyaWMgcHJpbWl0aXZlIHZhbHVlcy4gRGF0ZXMgYXJlIGNvbXBhcmVkIGJ5IHRoZWlyXG4gICAgICAgIC8vIG1pbGxpc2Vjb25kIHJlcHJlc2VudGF0aW9ucy4gTm90ZSB0aGF0IGludmFsaWQgZGF0ZXMgd2l0aCBtaWxsaXNlY29uZCByZXByZXNlbnRhdGlvbnNcbiAgICAgICAgLy8gb2YgYE5hTmAgYXJlIG5vdCBlcXVpdmFsZW50LlxuICAgICAgICByZXR1cm4gK2EgPT09ICtiO1xuICAgIH1cblxuICAgIHZhciBhcmVBcnJheXMgPSBjbGFzc05hbWUgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgaWYgKCFhcmVBcnJheXMpIHtcbiAgICAgIGlmICh0eXBlb2YgYSAhPSAnb2JqZWN0JyB8fCB0eXBlb2YgYiAhPSAnb2JqZWN0JykgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAvLyBPYmplY3RzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWl2YWxlbnQsIGJ1dCBgT2JqZWN0YHMgb3IgYEFycmF5YHNcbiAgICAgIC8vIGZyb20gZGlmZmVyZW50IGZyYW1lcyBhcmUuXG4gICAgICB2YXIgYUN0b3IgPSBhLmNvbnN0cnVjdG9yLCBiQ3RvciA9IGIuY29uc3RydWN0b3I7XG4gICAgICBpZiAoYUN0b3IgIT09IGJDdG9yICYmICEoXy5pc0Z1bmN0aW9uKGFDdG9yKSAmJiBhQ3RvciBpbnN0YW5jZW9mIGFDdG9yICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5pc0Z1bmN0aW9uKGJDdG9yKSAmJiBiQ3RvciBpbnN0YW5jZW9mIGJDdG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAoJ2NvbnN0cnVjdG9yJyBpbiBhICYmICdjb25zdHJ1Y3RvcicgaW4gYikpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBBc3N1bWUgZXF1YWxpdHkgZm9yIGN5Y2xpYyBzdHJ1Y3R1cmVzLiBUaGUgYWxnb3JpdGhtIGZvciBkZXRlY3RpbmcgY3ljbGljXG4gICAgLy8gc3RydWN0dXJlcyBpcyBhZGFwdGVkIGZyb20gRVMgNS4xIHNlY3Rpb24gMTUuMTIuMywgYWJzdHJhY3Qgb3BlcmF0aW9uIGBKT2AuXG5cbiAgICAvLyBJbml0aWFsaXppbmcgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXG4gICAgLy8gSXQncyBkb25lIGhlcmUgc2luY2Ugd2Ugb25seSBuZWVkIHRoZW0gZm9yIG9iamVjdHMgYW5kIGFycmF5cyBjb21wYXJpc29uLlxuICAgIGFTdGFjayA9IGFTdGFjayB8fCBbXTtcbiAgICBiU3RhY2sgPSBiU3RhY2sgfHwgW107XG4gICAgdmFyIGxlbmd0aCA9IGFTdGFjay5sZW5ndGg7XG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAvLyBMaW5lYXIgc2VhcmNoLiBQZXJmb3JtYW5jZSBpcyBpbnZlcnNlbHkgcHJvcG9ydGlvbmFsIHRvIHRoZSBudW1iZXIgb2ZcbiAgICAgIC8vIHVuaXF1ZSBuZXN0ZWQgc3RydWN0dXJlcy5cbiAgICAgIGlmIChhU3RhY2tbbGVuZ3RoXSA9PT0gYSkgcmV0dXJuIGJTdGFja1tsZW5ndGhdID09PSBiO1xuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZmlyc3Qgb2JqZWN0IHRvIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICBhU3RhY2sucHVzaChhKTtcbiAgICBiU3RhY2sucHVzaChiKTtcblxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyBhbmQgYXJyYXlzLlxuICAgIGlmIChhcmVBcnJheXMpIHtcbiAgICAgIC8vIENvbXBhcmUgYXJyYXkgbGVuZ3RocyB0byBkZXRlcm1pbmUgaWYgYSBkZWVwIGNvbXBhcmlzb24gaXMgbmVjZXNzYXJ5LlxuICAgICAgbGVuZ3RoID0gYS5sZW5ndGg7XG4gICAgICBpZiAobGVuZ3RoICE9PSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgLy8gRGVlcCBjb21wYXJlIHRoZSBjb250ZW50cywgaWdub3Jpbmcgbm9uLW51bWVyaWMgcHJvcGVydGllcy5cbiAgICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgICBpZiAoIWVxKGFbbGVuZ3RoXSwgYltsZW5ndGhdLCBhU3RhY2ssIGJTdGFjaykpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRGVlcCBjb21wYXJlIG9iamVjdHMuXG4gICAgICB2YXIga2V5cyA9IF8ua2V5cyhhKSwga2V5O1xuICAgICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgICAvLyBFbnN1cmUgdGhhdCBib3RoIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBudW1iZXIgb2YgcHJvcGVydGllcyBiZWZvcmUgY29tcGFyaW5nIGRlZXAgZXF1YWxpdHkuXG4gICAgICBpZiAoXy5rZXlzKGIpLmxlbmd0aCAhPT0gbGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgICAgLy8gRGVlcCBjb21wYXJlIGVhY2ggbWVtYmVyXG4gICAgICAgIGtleSA9IGtleXNbbGVuZ3RoXTtcbiAgICAgICAgaWYgKCEoXy5oYXMoYiwga2V5KSAmJiBlcShhW2tleV0sIGJba2V5XSwgYVN0YWNrLCBiU3RhY2spKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IG9iamVjdCBmcm9tIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICBhU3RhY2sucG9wKCk7XG4gICAgYlN0YWNrLnBvcCgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIC8vIFBlcmZvcm0gYSBkZWVwIGNvbXBhcmlzb24gdG8gY2hlY2sgaWYgdHdvIG9iamVjdHMgYXJlIGVxdWFsLlxuICBfLmlzRXF1YWwgPSBmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGVxKGEsIGIpO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gYXJyYXksIHN0cmluZywgb3Igb2JqZWN0IGVtcHR5P1xuICAvLyBBbiBcImVtcHR5XCIgb2JqZWN0IGhhcyBubyBlbnVtZXJhYmxlIG93bi1wcm9wZXJ0aWVzLlxuICBfLmlzRW1wdHkgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiB0cnVlO1xuICAgIGlmIChpc0FycmF5TGlrZShvYmopICYmIChfLmlzQXJyYXkob2JqKSB8fCBfLmlzU3RyaW5nKG9iaikgfHwgXy5pc0FyZ3VtZW50cyhvYmopKSkgcmV0dXJuIG9iai5sZW5ndGggPT09IDA7XG4gICAgcmV0dXJuIF8ua2V5cyhvYmopLmxlbmd0aCA9PT0gMDtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhbHVlIGEgRE9NIGVsZW1lbnQ/XG4gIF8uaXNFbGVtZW50ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuICEhKG9iaiAmJiBvYmoubm9kZVR5cGUgPT09IDEpO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFsdWUgYW4gYXJyYXk/XG4gIC8vIERlbGVnYXRlcyB0byBFQ01BNSdzIG5hdGl2ZSBBcnJheS5pc0FycmF5XG4gIF8uaXNBcnJheSA9IG5hdGl2ZUlzQXJyYXkgfHwgZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhcmlhYmxlIGFuIG9iamVjdD9cbiAgXy5pc09iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciB0eXBlID0gdHlwZW9mIG9iajtcbiAgICByZXR1cm4gdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlID09PSAnb2JqZWN0JyAmJiAhIW9iajtcbiAgfTtcblxuICAvLyBBZGQgc29tZSBpc1R5cGUgbWV0aG9kczogaXNBcmd1bWVudHMsIGlzRnVuY3Rpb24sIGlzU3RyaW5nLCBpc051bWJlciwgaXNEYXRlLCBpc1JlZ0V4cCwgaXNFcnJvci5cbiAgXy5lYWNoKFsnQXJndW1lbnRzJywgJ0Z1bmN0aW9uJywgJ1N0cmluZycsICdOdW1iZXInLCAnRGF0ZScsICdSZWdFeHAnLCAnRXJyb3InXSwgZnVuY3Rpb24obmFtZSkge1xuICAgIF9bJ2lzJyArIG5hbWVdID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCAnICsgbmFtZSArICddJztcbiAgICB9O1xuICB9KTtcblxuICAvLyBEZWZpbmUgYSBmYWxsYmFjayB2ZXJzaW9uIG9mIHRoZSBtZXRob2QgaW4gYnJvd3NlcnMgKGFoZW0sIElFIDwgOSksIHdoZXJlXG4gIC8vIHRoZXJlIGlzbid0IGFueSBpbnNwZWN0YWJsZSBcIkFyZ3VtZW50c1wiIHR5cGUuXG4gIGlmICghXy5pc0FyZ3VtZW50cyhhcmd1bWVudHMpKSB7XG4gICAgXy5pc0FyZ3VtZW50cyA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIF8uaGFzKG9iaiwgJ2NhbGxlZScpO1xuICAgIH07XG4gIH1cblxuICAvLyBPcHRpbWl6ZSBgaXNGdW5jdGlvbmAgaWYgYXBwcm9wcmlhdGUuIFdvcmsgYXJvdW5kIHNvbWUgdHlwZW9mIGJ1Z3MgaW4gb2xkIHY4LFxuICAvLyBJRSAxMSAoIzE2MjEpLCBhbmQgaW4gU2FmYXJpIDggKCMxOTI5KS5cbiAgaWYgKHR5cGVvZiAvLi8gIT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgSW50OEFycmF5ICE9ICdvYmplY3QnKSB7XG4gICAgXy5pc0Z1bmN0aW9uID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iaiA9PSAnZnVuY3Rpb24nIHx8IGZhbHNlO1xuICAgIH07XG4gIH1cblxuICAvLyBJcyBhIGdpdmVuIG9iamVjdCBhIGZpbml0ZSBudW1iZXI/XG4gIF8uaXNGaW5pdGUgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gaXNGaW5pdGUob2JqKSAmJiAhaXNOYU4ocGFyc2VGbG9hdChvYmopKTtcbiAgfTtcblxuICAvLyBJcyB0aGUgZ2l2ZW4gdmFsdWUgYE5hTmA/IChOYU4gaXMgdGhlIG9ubHkgbnVtYmVyIHdoaWNoIGRvZXMgbm90IGVxdWFsIGl0c2VsZikuXG4gIF8uaXNOYU4gPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gXy5pc051bWJlcihvYmopICYmIG9iaiAhPT0gK29iajtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhbHVlIGEgYm9vbGVhbj9cbiAgXy5pc0Jvb2xlYW4gPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSB0cnVlIHx8IG9iaiA9PT0gZmFsc2UgfHwgdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBCb29sZWFuXSc7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YWx1ZSBlcXVhbCB0byBudWxsP1xuICBfLmlzTnVsbCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IG51bGw7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YXJpYWJsZSB1bmRlZmluZWQ/XG4gIF8uaXNVbmRlZmluZWQgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSB2b2lkIDA7XG4gIH07XG5cbiAgLy8gU2hvcnRjdXQgZnVuY3Rpb24gZm9yIGNoZWNraW5nIGlmIGFuIG9iamVjdCBoYXMgYSBnaXZlbiBwcm9wZXJ0eSBkaXJlY3RseVxuICAvLyBvbiBpdHNlbGYgKGluIG90aGVyIHdvcmRzLCBub3Qgb24gYSBwcm90b3R5cGUpLlxuICBfLmhhcyA9IGZ1bmN0aW9uKG9iaiwga2V5KSB7XG4gICAgcmV0dXJuIG9iaiAhPSBudWxsICYmIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xuICB9O1xuXG4gIC8vIFV0aWxpdHkgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gUnVuIFVuZGVyc2NvcmUuanMgaW4gKm5vQ29uZmxpY3QqIG1vZGUsIHJldHVybmluZyB0aGUgYF9gIHZhcmlhYmxlIHRvIGl0c1xuICAvLyBwcmV2aW91cyBvd25lci4gUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgVW5kZXJzY29yZSBvYmplY3QuXG4gIF8ubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgIHJvb3QuXyA9IHByZXZpb3VzVW5kZXJzY29yZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvLyBLZWVwIHRoZSBpZGVudGl0eSBmdW5jdGlvbiBhcm91bmQgZm9yIGRlZmF1bHQgaXRlcmF0ZWVzLlxuICBfLmlkZW50aXR5ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgLy8gUHJlZGljYXRlLWdlbmVyYXRpbmcgZnVuY3Rpb25zLiBPZnRlbiB1c2VmdWwgb3V0c2lkZSBvZiBVbmRlcnNjb3JlLlxuICBfLmNvbnN0YW50ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgfTtcblxuICBfLm5vb3AgPSBmdW5jdGlvbigpe307XG5cbiAgXy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuXG4gIC8vIEdlbmVyYXRlcyBhIGZ1bmN0aW9uIGZvciBhIGdpdmVuIG9iamVjdCB0aGF0IHJldHVybnMgYSBnaXZlbiBwcm9wZXJ0eS5cbiAgXy5wcm9wZXJ0eU9mID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PSBudWxsID8gZnVuY3Rpb24oKXt9IDogZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gb2JqW2tleV07XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgcHJlZGljYXRlIGZvciBjaGVja2luZyB3aGV0aGVyIGFuIG9iamVjdCBoYXMgYSBnaXZlbiBzZXQgb2ZcbiAgLy8gYGtleTp2YWx1ZWAgcGFpcnMuXG4gIF8ubWF0Y2hlciA9IF8ubWF0Y2hlcyA9IGZ1bmN0aW9uKGF0dHJzKSB7XG4gICAgYXR0cnMgPSBfLmV4dGVuZE93bih7fSwgYXR0cnMpO1xuICAgIHJldHVybiBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBfLmlzTWF0Y2gob2JqLCBhdHRycyk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSdW4gYSBmdW5jdGlvbiAqKm4qKiB0aW1lcy5cbiAgXy50aW1lcyA9IGZ1bmN0aW9uKG4sIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgdmFyIGFjY3VtID0gQXJyYXkoTWF0aC5tYXgoMCwgbikpO1xuICAgIGl0ZXJhdGVlID0gb3B0aW1pemVDYihpdGVyYXRlZSwgY29udGV4dCwgMSk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIGFjY3VtW2ldID0gaXRlcmF0ZWUoaSk7XG4gICAgcmV0dXJuIGFjY3VtO1xuICB9O1xuXG4gIC8vIFJldHVybiBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIGFuZCBtYXggKGluY2x1c2l2ZSkuXG4gIF8ucmFuZG9tID0gZnVuY3Rpb24obWluLCBtYXgpIHtcbiAgICBpZiAobWF4ID09IG51bGwpIHtcbiAgICAgIG1heCA9IG1pbjtcbiAgICAgIG1pbiA9IDA7XG4gICAgfVxuICAgIHJldHVybiBtaW4gKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpO1xuICB9O1xuXG4gIC8vIEEgKHBvc3NpYmx5IGZhc3Rlcikgd2F5IHRvIGdldCB0aGUgY3VycmVudCB0aW1lc3RhbXAgYXMgYW4gaW50ZWdlci5cbiAgXy5ub3cgPSBEYXRlLm5vdyB8fCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIH07XG5cbiAgIC8vIExpc3Qgb2YgSFRNTCBlbnRpdGllcyBmb3IgZXNjYXBpbmcuXG4gIHZhciBlc2NhcGVNYXAgPSB7XG4gICAgJyYnOiAnJmFtcDsnLFxuICAgICc8JzogJyZsdDsnLFxuICAgICc+JzogJyZndDsnLFxuICAgICdcIic6ICcmcXVvdDsnLFxuICAgIFwiJ1wiOiAnJiN4Mjc7JyxcbiAgICAnYCc6ICcmI3g2MDsnXG4gIH07XG4gIHZhciB1bmVzY2FwZU1hcCA9IF8uaW52ZXJ0KGVzY2FwZU1hcCk7XG5cbiAgLy8gRnVuY3Rpb25zIGZvciBlc2NhcGluZyBhbmQgdW5lc2NhcGluZyBzdHJpbmdzIHRvL2Zyb20gSFRNTCBpbnRlcnBvbGF0aW9uLlxuICB2YXIgY3JlYXRlRXNjYXBlciA9IGZ1bmN0aW9uKG1hcCkge1xuICAgIHZhciBlc2NhcGVyID0gZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgIHJldHVybiBtYXBbbWF0Y2hdO1xuICAgIH07XG4gICAgLy8gUmVnZXhlcyBmb3IgaWRlbnRpZnlpbmcgYSBrZXkgdGhhdCBuZWVkcyB0byBiZSBlc2NhcGVkXG4gICAgdmFyIHNvdXJjZSA9ICcoPzonICsgXy5rZXlzKG1hcCkuam9pbignfCcpICsgJyknO1xuICAgIHZhciB0ZXN0UmVnZXhwID0gUmVnRXhwKHNvdXJjZSk7XG4gICAgdmFyIHJlcGxhY2VSZWdleHAgPSBSZWdFeHAoc291cmNlLCAnZycpO1xuICAgIHJldHVybiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICAgIHN0cmluZyA9IHN0cmluZyA9PSBudWxsID8gJycgOiAnJyArIHN0cmluZztcbiAgICAgIHJldHVybiB0ZXN0UmVnZXhwLnRlc3Qoc3RyaW5nKSA/IHN0cmluZy5yZXBsYWNlKHJlcGxhY2VSZWdleHAsIGVzY2FwZXIpIDogc3RyaW5nO1xuICAgIH07XG4gIH07XG4gIF8uZXNjYXBlID0gY3JlYXRlRXNjYXBlcihlc2NhcGVNYXApO1xuICBfLnVuZXNjYXBlID0gY3JlYXRlRXNjYXBlcih1bmVzY2FwZU1hcCk7XG5cbiAgLy8gSWYgdGhlIHZhbHVlIG9mIHRoZSBuYW1lZCBgcHJvcGVydHlgIGlzIGEgZnVuY3Rpb24gdGhlbiBpbnZva2UgaXQgd2l0aCB0aGVcbiAgLy8gYG9iamVjdGAgYXMgY29udGV4dDsgb3RoZXJ3aXNlLCByZXR1cm4gaXQuXG4gIF8ucmVzdWx0ID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSwgZmFsbGJhY2spIHtcbiAgICB2YXIgdmFsdWUgPSBvYmplY3QgPT0gbnVsbCA/IHZvaWQgMCA6IG9iamVjdFtwcm9wZXJ0eV07XG4gICAgaWYgKHZhbHVlID09PSB2b2lkIDApIHtcbiAgICAgIHZhbHVlID0gZmFsbGJhY2s7XG4gICAgfVxuICAgIHJldHVybiBfLmlzRnVuY3Rpb24odmFsdWUpID8gdmFsdWUuY2FsbChvYmplY3QpIDogdmFsdWU7XG4gIH07XG5cbiAgLy8gR2VuZXJhdGUgYSB1bmlxdWUgaW50ZWdlciBpZCAodW5pcXVlIHdpdGhpbiB0aGUgZW50aXJlIGNsaWVudCBzZXNzaW9uKS5cbiAgLy8gVXNlZnVsIGZvciB0ZW1wb3JhcnkgRE9NIGlkcy5cbiAgdmFyIGlkQ291bnRlciA9IDA7XG4gIF8udW5pcXVlSWQgPSBmdW5jdGlvbihwcmVmaXgpIHtcbiAgICB2YXIgaWQgPSArK2lkQ291bnRlciArICcnO1xuICAgIHJldHVybiBwcmVmaXggPyBwcmVmaXggKyBpZCA6IGlkO1xuICB9O1xuXG4gIC8vIEJ5IGRlZmF1bHQsIFVuZGVyc2NvcmUgdXNlcyBFUkItc3R5bGUgdGVtcGxhdGUgZGVsaW1pdGVycywgY2hhbmdlIHRoZVxuICAvLyBmb2xsb3dpbmcgdGVtcGxhdGUgc2V0dGluZ3MgdG8gdXNlIGFsdGVybmF0aXZlIGRlbGltaXRlcnMuXG4gIF8udGVtcGxhdGVTZXR0aW5ncyA9IHtcbiAgICBldmFsdWF0ZSAgICA6IC88JShbXFxzXFxTXSs/KSU+L2csXG4gICAgaW50ZXJwb2xhdGUgOiAvPCU9KFtcXHNcXFNdKz8pJT4vZyxcbiAgICBlc2NhcGUgICAgICA6IC88JS0oW1xcc1xcU10rPyklPi9nXG4gIH07XG5cbiAgLy8gV2hlbiBjdXN0b21pemluZyBgdGVtcGxhdGVTZXR0aW5nc2AsIGlmIHlvdSBkb24ndCB3YW50IHRvIGRlZmluZSBhblxuICAvLyBpbnRlcnBvbGF0aW9uLCBldmFsdWF0aW9uIG9yIGVzY2FwaW5nIHJlZ2V4LCB3ZSBuZWVkIG9uZSB0aGF0IGlzXG4gIC8vIGd1YXJhbnRlZWQgbm90IHRvIG1hdGNoLlxuICB2YXIgbm9NYXRjaCA9IC8oLileLztcblxuICAvLyBDZXJ0YWluIGNoYXJhY3RlcnMgbmVlZCB0byBiZSBlc2NhcGVkIHNvIHRoYXQgdGhleSBjYW4gYmUgcHV0IGludG8gYVxuICAvLyBzdHJpbmcgbGl0ZXJhbC5cbiAgdmFyIGVzY2FwZXMgPSB7XG4gICAgXCInXCI6ICAgICAgXCInXCIsXG4gICAgJ1xcXFwnOiAgICAgJ1xcXFwnLFxuICAgICdcXHInOiAgICAgJ3InLFxuICAgICdcXG4nOiAgICAgJ24nLFxuICAgICdcXHUyMDI4JzogJ3UyMDI4JyxcbiAgICAnXFx1MjAyOSc6ICd1MjAyOSdcbiAgfTtcblxuICB2YXIgZXNjYXBlciA9IC9cXFxcfCd8XFxyfFxcbnxcXHUyMDI4fFxcdTIwMjkvZztcblxuICB2YXIgZXNjYXBlQ2hhciA9IGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgcmV0dXJuICdcXFxcJyArIGVzY2FwZXNbbWF0Y2hdO1xuICB9O1xuXG4gIC8vIEphdmFTY3JpcHQgbWljcm8tdGVtcGxhdGluZywgc2ltaWxhciB0byBKb2huIFJlc2lnJ3MgaW1wbGVtZW50YXRpb24uXG4gIC8vIFVuZGVyc2NvcmUgdGVtcGxhdGluZyBoYW5kbGVzIGFyYml0cmFyeSBkZWxpbWl0ZXJzLCBwcmVzZXJ2ZXMgd2hpdGVzcGFjZSxcbiAgLy8gYW5kIGNvcnJlY3RseSBlc2NhcGVzIHF1b3RlcyB3aXRoaW4gaW50ZXJwb2xhdGVkIGNvZGUuXG4gIC8vIE5COiBgb2xkU2V0dGluZ3NgIG9ubHkgZXhpc3RzIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgXy50ZW1wbGF0ZSA9IGZ1bmN0aW9uKHRleHQsIHNldHRpbmdzLCBvbGRTZXR0aW5ncykge1xuICAgIGlmICghc2V0dGluZ3MgJiYgb2xkU2V0dGluZ3MpIHNldHRpbmdzID0gb2xkU2V0dGluZ3M7XG4gICAgc2V0dGluZ3MgPSBfLmRlZmF1bHRzKHt9LCBzZXR0aW5ncywgXy50ZW1wbGF0ZVNldHRpbmdzKTtcblxuICAgIC8vIENvbWJpbmUgZGVsaW1pdGVycyBpbnRvIG9uZSByZWd1bGFyIGV4cHJlc3Npb24gdmlhIGFsdGVybmF0aW9uLlxuICAgIHZhciBtYXRjaGVyID0gUmVnRXhwKFtcbiAgICAgIChzZXR0aW5ncy5lc2NhcGUgfHwgbm9NYXRjaCkuc291cmNlLFxuICAgICAgKHNldHRpbmdzLmludGVycG9sYXRlIHx8IG5vTWF0Y2gpLnNvdXJjZSxcbiAgICAgIChzZXR0aW5ncy5ldmFsdWF0ZSB8fCBub01hdGNoKS5zb3VyY2VcbiAgICBdLmpvaW4oJ3wnKSArICd8JCcsICdnJyk7XG5cbiAgICAvLyBDb21waWxlIHRoZSB0ZW1wbGF0ZSBzb3VyY2UsIGVzY2FwaW5nIHN0cmluZyBsaXRlcmFscyBhcHByb3ByaWF0ZWx5LlxuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIHNvdXJjZSA9IFwiX19wKz0nXCI7XG4gICAgdGV4dC5yZXBsYWNlKG1hdGNoZXIsIGZ1bmN0aW9uKG1hdGNoLCBlc2NhcGUsIGludGVycG9sYXRlLCBldmFsdWF0ZSwgb2Zmc2V0KSB7XG4gICAgICBzb3VyY2UgKz0gdGV4dC5zbGljZShpbmRleCwgb2Zmc2V0KS5yZXBsYWNlKGVzY2FwZXIsIGVzY2FwZUNoYXIpO1xuICAgICAgaW5kZXggPSBvZmZzZXQgKyBtYXRjaC5sZW5ndGg7XG5cbiAgICAgIGlmIChlc2NhcGUpIHtcbiAgICAgICAgc291cmNlICs9IFwiJytcXG4oKF9fdD0oXCIgKyBlc2NhcGUgKyBcIikpPT1udWxsPycnOl8uZXNjYXBlKF9fdCkpK1xcbidcIjtcbiAgICAgIH0gZWxzZSBpZiAoaW50ZXJwb2xhdGUpIHtcbiAgICAgICAgc291cmNlICs9IFwiJytcXG4oKF9fdD0oXCIgKyBpbnRlcnBvbGF0ZSArIFwiKSk9PW51bGw/Jyc6X190KStcXG4nXCI7XG4gICAgICB9IGVsc2UgaWYgKGV2YWx1YXRlKSB7XG4gICAgICAgIHNvdXJjZSArPSBcIic7XFxuXCIgKyBldmFsdWF0ZSArIFwiXFxuX19wKz0nXCI7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkb2JlIFZNcyBuZWVkIHRoZSBtYXRjaCByZXR1cm5lZCB0byBwcm9kdWNlIHRoZSBjb3JyZWN0IG9mZmVzdC5cbiAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9KTtcbiAgICBzb3VyY2UgKz0gXCInO1xcblwiO1xuXG4gICAgLy8gSWYgYSB2YXJpYWJsZSBpcyBub3Qgc3BlY2lmaWVkLCBwbGFjZSBkYXRhIHZhbHVlcyBpbiBsb2NhbCBzY29wZS5cbiAgICBpZiAoIXNldHRpbmdzLnZhcmlhYmxlKSBzb3VyY2UgPSAnd2l0aChvYmp8fHt9KXtcXG4nICsgc291cmNlICsgJ31cXG4nO1xuXG4gICAgc291cmNlID0gXCJ2YXIgX190LF9fcD0nJyxfX2o9QXJyYXkucHJvdG90eXBlLmpvaW4sXCIgK1xuICAgICAgXCJwcmludD1mdW5jdGlvbigpe19fcCs9X19qLmNhbGwoYXJndW1lbnRzLCcnKTt9O1xcblwiICtcbiAgICAgIHNvdXJjZSArICdyZXR1cm4gX19wO1xcbic7XG5cbiAgICB0cnkge1xuICAgICAgdmFyIHJlbmRlciA9IG5ldyBGdW5jdGlvbihzZXR0aW5ncy52YXJpYWJsZSB8fCAnb2JqJywgJ18nLCBzb3VyY2UpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGUuc291cmNlID0gc291cmNlO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG5cbiAgICB2YXIgdGVtcGxhdGUgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgICByZXR1cm4gcmVuZGVyLmNhbGwodGhpcywgZGF0YSwgXyk7XG4gICAgfTtcblxuICAgIC8vIFByb3ZpZGUgdGhlIGNvbXBpbGVkIHNvdXJjZSBhcyBhIGNvbnZlbmllbmNlIGZvciBwcmVjb21waWxhdGlvbi5cbiAgICB2YXIgYXJndW1lbnQgPSBzZXR0aW5ncy52YXJpYWJsZSB8fCAnb2JqJztcbiAgICB0ZW1wbGF0ZS5zb3VyY2UgPSAnZnVuY3Rpb24oJyArIGFyZ3VtZW50ICsgJyl7XFxuJyArIHNvdXJjZSArICd9JztcblxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfTtcblxuICAvLyBBZGQgYSBcImNoYWluXCIgZnVuY3Rpb24uIFN0YXJ0IGNoYWluaW5nIGEgd3JhcHBlZCBVbmRlcnNjb3JlIG9iamVjdC5cbiAgXy5jaGFpbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBpbnN0YW5jZSA9IF8ob2JqKTtcbiAgICBpbnN0YW5jZS5fY2hhaW4gPSB0cnVlO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfTtcblxuICAvLyBPT1BcbiAgLy8gLS0tLS0tLS0tLS0tLS0tXG4gIC8vIElmIFVuZGVyc2NvcmUgaXMgY2FsbGVkIGFzIGEgZnVuY3Rpb24sIGl0IHJldHVybnMgYSB3cmFwcGVkIG9iamVjdCB0aGF0XG4gIC8vIGNhbiBiZSB1c2VkIE9PLXN0eWxlLiBUaGlzIHdyYXBwZXIgaG9sZHMgYWx0ZXJlZCB2ZXJzaW9ucyBvZiBhbGwgdGhlXG4gIC8vIHVuZGVyc2NvcmUgZnVuY3Rpb25zLiBXcmFwcGVkIG9iamVjdHMgbWF5IGJlIGNoYWluZWQuXG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNvbnRpbnVlIGNoYWluaW5nIGludGVybWVkaWF0ZSByZXN1bHRzLlxuICB2YXIgcmVzdWx0ID0gZnVuY3Rpb24oaW5zdGFuY2UsIG9iaikge1xuICAgIHJldHVybiBpbnN0YW5jZS5fY2hhaW4gPyBfKG9iaikuY2hhaW4oKSA6IG9iajtcbiAgfTtcblxuICAvLyBBZGQgeW91ciBvd24gY3VzdG9tIGZ1bmN0aW9ucyB0byB0aGUgVW5kZXJzY29yZSBvYmplY3QuXG4gIF8ubWl4aW4gPSBmdW5jdGlvbihvYmopIHtcbiAgICBfLmVhY2goXy5mdW5jdGlvbnMob2JqKSwgZnVuY3Rpb24obmFtZSkge1xuICAgICAgdmFyIGZ1bmMgPSBfW25hbWVdID0gb2JqW25hbWVdO1xuICAgICAgXy5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbdGhpcy5fd3JhcHBlZF07XG4gICAgICAgIHB1c2guYXBwbHkoYXJncywgYXJndW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCh0aGlzLCBmdW5jLmFwcGx5KF8sIGFyZ3MpKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gQWRkIGFsbCBvZiB0aGUgVW5kZXJzY29yZSBmdW5jdGlvbnMgdG8gdGhlIHdyYXBwZXIgb2JqZWN0LlxuICBfLm1peGluKF8pO1xuXG4gIC8vIEFkZCBhbGwgbXV0YXRvciBBcnJheSBmdW5jdGlvbnMgdG8gdGhlIHdyYXBwZXIuXG4gIF8uZWFjaChbJ3BvcCcsICdwdXNoJywgJ3JldmVyc2UnLCAnc2hpZnQnLCAnc29ydCcsICdzcGxpY2UnLCAndW5zaGlmdCddLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIG1ldGhvZCA9IEFycmF5UHJvdG9bbmFtZV07XG4gICAgXy5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBvYmogPSB0aGlzLl93cmFwcGVkO1xuICAgICAgbWV0aG9kLmFwcGx5KG9iaiwgYXJndW1lbnRzKTtcbiAgICAgIGlmICgobmFtZSA9PT0gJ3NoaWZ0JyB8fCBuYW1lID09PSAnc3BsaWNlJykgJiYgb2JqLmxlbmd0aCA9PT0gMCkgZGVsZXRlIG9ialswXTtcbiAgICAgIHJldHVybiByZXN1bHQodGhpcywgb2JqKTtcbiAgICB9O1xuICB9KTtcblxuICAvLyBBZGQgYWxsIGFjY2Vzc29yIEFycmF5IGZ1bmN0aW9ucyB0byB0aGUgd3JhcHBlci5cbiAgXy5lYWNoKFsnY29uY2F0JywgJ2pvaW4nLCAnc2xpY2UnXSwgZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBtZXRob2QgPSBBcnJheVByb3RvW25hbWVdO1xuICAgIF8ucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcmVzdWx0KHRoaXMsIG1ldGhvZC5hcHBseSh0aGlzLl93cmFwcGVkLCBhcmd1bWVudHMpKTtcbiAgICB9O1xuICB9KTtcblxuICAvLyBFeHRyYWN0cyB0aGUgcmVzdWx0IGZyb20gYSB3cmFwcGVkIGFuZCBjaGFpbmVkIG9iamVjdC5cbiAgXy5wcm90b3R5cGUudmFsdWUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fd3JhcHBlZDtcbiAgfTtcblxuICAvLyBQcm92aWRlIHVud3JhcHBpbmcgcHJveHkgZm9yIHNvbWUgbWV0aG9kcyB1c2VkIGluIGVuZ2luZSBvcGVyYXRpb25zXG4gIC8vIHN1Y2ggYXMgYXJpdGhtZXRpYyBhbmQgSlNPTiBzdHJpbmdpZmljYXRpb24uXG4gIF8ucHJvdG90eXBlLnZhbHVlT2YgPSBfLnByb3RvdHlwZS50b0pTT04gPSBfLnByb3RvdHlwZS52YWx1ZTtcblxuICBfLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAnJyArIHRoaXMuX3dyYXBwZWQ7XG4gIH07XG5cbiAgLy8gQU1EIHJlZ2lzdHJhdGlvbiBoYXBwZW5zIGF0IHRoZSBlbmQgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBTUQgbG9hZGVyc1xuICAvLyB0aGF0IG1heSBub3QgZW5mb3JjZSBuZXh0LXR1cm4gc2VtYW50aWNzIG9uIG1vZHVsZXMuIEV2ZW4gdGhvdWdoIGdlbmVyYWxcbiAgLy8gcHJhY3RpY2UgZm9yIEFNRCByZWdpc3RyYXRpb24gaXMgdG8gYmUgYW5vbnltb3VzLCB1bmRlcnNjb3JlIHJlZ2lzdGVyc1xuICAvLyBhcyBhIG5hbWVkIG1vZHVsZSBiZWNhdXNlLCBsaWtlIGpRdWVyeSwgaXQgaXMgYSBiYXNlIGxpYnJhcnkgdGhhdCBpc1xuICAvLyBwb3B1bGFyIGVub3VnaCB0byBiZSBidW5kbGVkIGluIGEgdGhpcmQgcGFydHkgbGliLCBidXQgbm90IGJlIHBhcnQgb2ZcbiAgLy8gYW4gQU1EIGxvYWQgcmVxdWVzdC4gVGhvc2UgY2FzZXMgY291bGQgZ2VuZXJhdGUgYW4gZXJyb3Igd2hlbiBhblxuICAvLyBhbm9ueW1vdXMgZGVmaW5lKCkgaXMgY2FsbGVkIG91dHNpZGUgb2YgYSBsb2FkZXIgcmVxdWVzdC5cbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZSgndW5kZXJzY29yZScsIFtdLCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBfO1xuICAgIH0pO1xuICB9XG59LmNhbGwodGhpcykpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdW5kZXJzY29yZS91bmRlcnNjb3JlLmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IG0gZnJvbSBcIm1pdGhyaWxcIjtcblxuY29uc3QgV29yZHMgPSB7XG4gICAgSXRlbTogZnVuY3Rpb24oYXJncyl7XG4gICAgICAgIHRoaXMuamEgPSBtLnByb3AoYXJncy5qYSk7XG4gICAgICAgIHRoaXMuZW4gPSBtLnByb3AoYXJncy5lbik7XG4gICAgICAgIHRoaXMubWlzQ291bnQgPSBtLnByb3AoYXJncy5taXNDb3VudCB8fCAwKTtcbiAgICB9LFxuICAgIExpc3Q6IEFycmF5XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXb3JkcztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2VzNi9tb2RlbC93b3Jkcy5qc1xuICoqLyIsImltcG9ydCBtIGZyb20gXCJtaXRocmlsXCI7XG5cbmNvbnN0IENoZWNrID0ge1xuICAgIEl0ZW06IGZ1bmN0aW9uKGFyZ3Mpe1xuICAgICAgICB0aGlzLmphID0gbS5wcm9wKGFyZ3MuamEpO1xuICAgICAgICB0aGlzLmVuID0gbS5wcm9wKGFyZ3MuZW4pO1xuICAgICAgICB0aGlzLmZsYWcgPSBtLnByb3AoYXJncy5mbGFnIHx8IGZhbHNlKTtcbiAgICB9LFxuICAgIExpc3Q6IEFycmF5XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGVjaztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2VzNi9tb2RlbC9jaGVjay5qc1xuICoqLyIsImltcG9ydCAqIGFzIG0gZnJvbSBcIm1pdGhyaWxcIjtcbmltcG9ydCB2bSBmcm9tIFwiLi4vc3RvcmVcIjtcbmltcG9ydCBfIGZyb20gXCJ1bmRlcnNjb3JlXCI7XG5cbmNsYXNzIENoZWNrUnVuIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmkgPSBtLnByb3AoMCk7XG4gICAgICAgIHRoaXMud29yZCA9IG0ucHJvcChbXSk7XG4gICAgICAgIHRoaXMudmlldyA9IG0ucHJvcChmYWxzZSk7XG4gICAgICAgIHRoaXMubGltaXQgPSBtLnByb3AoMCk7XG4gICAgICAgIHRoaXMubmF2YmFyID0gdm0uc2NlbmUuY2hlY2tSdW4ubmF2YmFyO1xuICAgICAgICB2bS5nZXRVcmxQYXJhbShcImlkXCIpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHRoaXMubGltaXQocmVzKCkpO1xuICAgICAgICAgICAgdm0uYWRkQ2hlY2tBbGwoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShfKHZtLndvcmRMaXN0KS5zaHVmZmxlKCkpKSk7XG4gICAgICAgICAgICBpZih2bS5jaGVja0xpc3QubGVuZ3RoID09PSAwKSByZXR1cm4gbS5yb3V0ZShcIi93b3Jkc1wiKTtcbiAgICAgICAgICAgIGlmKHZtLmNoZWNrTGlzdC5sZW5ndGggPCByZXMoKSl7XG4gICAgICAgICAgICAgICAgdGhpcy5saW1pdCh2bS5jaGVja0xpc3QubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdldE5leHRXb3JkKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlzRmxhZygpe1xuICAgICAgICB0aGlzLndvcmQoKS5mbGFnKHRydWUpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlzVmlldygpe1xuICAgICAgICB0aGlzLnZpZXcodHJ1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaW5jcmltZW50Q291bnQoKXtcbiAgICAgICAgdm0uaW5jcmltZW50Q291bnQodGhpcy5pLCB0aGlzLmxpbWl0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBnZXROZXh0V29yZCgpe1xuICAgICAgICB0aGlzLndvcmQodm0uZ2V0TmV4dFdvcmQxKHRoaXMuaSwgdGhpcy5saW1pdCkpO1xuICAgICAgICB0aGlzLmluY3JpbWVudENvdW50KCk7XG4gICAgICAgIHRoaXMudmlldyhmYWxzZSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2hlY2tFbmRGbGFnKCl7XG4gICAgICAgIHJldHVybiB2bS5jaGVja0VuZEZsYWcodGhpcy5saW1pdCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGVja1J1bjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2VzNi9jdHJsL2NoZWNrUnVuLmpzXG4gKiovIiwiaW1wb3J0IG0gZnJvbSBcIm1pdGhyaWxcIjtcbmltcG9ydCBuYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2YmFyXCI7XG5pbXBvcnQgaG9tZU1lbnUgZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZU1lbnVcIjtcbmltcG9ydCBDdHJsIGZyb20gXCIuLi9jdHJsL2hvbWVcIjtcblxubGV0IEhvbWUgPSB7XG4gICAgY29udHJvbGxlcjogKCkgPT4gbmV3IEN0cmwoKSxcbiAgICB2aWV3OiBjdHJsID0+IHtcbiAgICAgICAgcmV0dXJuIG0oXCIuZmxleF9jb250ZW50IGRpc3BsYXlGbGV4IGZsZXhfY29sdW1uXCIsIFtcbiAgICAgICAgICAgIG5hdmJhcihjdHJsLm5hdmJhciksXG4gICAgICAgICAgICBtKFwiLmRpc3BsYXlGbGV4IGZsZXhfY29sdW1uXCIsIHtcbiAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJmbGV4XCI6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICBcInBhZGRpbmdcIjogXCIxcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGFkZGluZy10b3BcIjogXCI2LjVyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogXCIxMDAlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgaG9tZU1lbnUoY3RybC5tZW51KVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2VzNi9zY2VuZS9ob21lLmpzXG4gKiovIiwiaW1wb3J0IG0gZnJvbSBcIm1pdGhyaWxcIjtcblxuY29uc3QgdGlwSXRlbSA9IHRpcCA9PiB7XG4gICAgcmV0dXJuIG0oXCJsaVwiLCB0aXApO1xufVxuXG5jb25zdCBob21lTWVudUl0ZW0gPSBpdGVtID0+IHtcbiAgICByZXR1cm4gbShcIi5jYXJkXCIsIHtcbiAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICBcIm1hcmdpbi1ib3R0b21cIjogXCIxcmVtXCJcbiAgICAgICAgICAgIC8vIFwiZmxleFwiOiBcIjFcIlxuICAgICAgICB9XG4gICAgfSxbXG4gICAgICAgIG0oXCJidXR0b25cIiwge1xuICAgICAgICAgICAgXCJjbGFzc1wiOiBcInUtZnVsbC13aWR0aFwiLFxuICAgICAgICAgICAgXCJvbmNsaWNrXCI6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBtLnJvdXRlKGl0ZW0udXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgaXRlbS5sYWJlbCksXG4gICAgICAgIG0oXCJ1bFwiLCB7XG4gICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhZGRpbmdcIjogXCIwLjVyZW1cIixcbiAgICAgICAgICAgICAgICBcIm1hcmdpbi1ib3R0b21cIjogXCIwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxbXG4gICAgICAgICAgICBpdGVtLnRpcHMubWFwKHRpcCA9PiB0aXBJdGVtKHRpcCkpXG4gICAgICAgIF0pXG4gICAgXSk7XG59O1xuXG5jb25zdCBob21lTWVudSA9IGxpc3QgPT4ge1xuICAgIHJldHVybiBtKFwiZGl2XCIsIHtcbiAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICBcImZsZXhcIjogXCIxXCJcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgbGlzdC5tYXAoaXRlbSA9PiBob21lTWVudUl0ZW0oaXRlbSkpXG4gICAgXSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBob21lTWVudTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2VzNi9jb21wb25lbnRzL2hvbWVNZW51LmpzXG4gKiovIiwiaW1wb3J0IHZtIGZyb20gXCIuLi9zdG9yZVwiO1xuXG5jbGFzcyBIb21lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5uYXZiYXIgPSB2bS5zY2VuZS5ob21lLm5hdmJhcjtcbiAgICAgICAgdGhpcy5tZW51ID0gdm0uc2NlbmUuaG9tZS5jb250ZW50Lm1lbnU7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZXM2L2N0cmwvaG9tZS5qc1xuICoqLyIsImltcG9ydCBtIGZyb20gXCJtaXRocmlsXCI7XG5pbXBvcnQgbmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclwiO1xuaW1wb3J0IHdvcmRMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL3dvcmRMaXN0XCI7XG5pbXBvcnQgQ3RybCBmcm9tIFwiLi4vY3RybC93b3Jkc1wiO1xuXG5sZXQgV29yZHMgPSB7XG4gICAgY29udHJvbGxlcjogKCkgPT4gbmV3IEN0cmwoKSxcbiAgICB2aWV3OiBjdHJsID0+IHtcbiAgICAgICAgcmV0dXJuIG0oXCIuZmxleF9jb250ZW50IGRpc3BsYXlGbGV4IGZsZXhfY29sdW1uXCIsIFtcbiAgICAgICAgICAgIG5hdmJhcihjdHJsLm5hdmJhciksXG4gICAgICAgICAgICBtKFwiLmRpc3BsYXlGbGV4IGZsZXhfY29sdW1uXCIsIHtcbiAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJmbGV4XCI6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICBcInBhZGRpbmdcIjogXCIxcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGFkZGluZy10b3BcIjogXCI2LjVyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogXCIxMDAlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgd29yZExpc3QoY3RybC53b3JkTGlzdClcbiAgICAgICAgICAgIF0pXG4gICAgICAgIF0pO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmRzO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZXM2L3NjZW5lL3dvcmRzLmpzXG4gKiovIiwiaW1wb3J0IG0gZnJvbSBcIm1pdGhyaWxcIjtcbmNvbnN0IHdvcmRJdGVtID0gKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIG0oXCIuY2FyZCBkaXNwbGF5RmxleCBmbGV4X3Jvd1wiLCB7XG4gICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgXCJtYXJnaW4tYm90dG9tXCI6IFwiMXJlbVwiLFxuICAgICAgICAgICAgXCJhbGlnbi1pdGVtc1wiOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgXCJwYWRkaW5nXCI6IFwiMnJlbVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwib25jbGlja1wiOiAoKSA9PiB7XG4gICAgICAgICAgICBtLnJvdXRlKFwiL3dvcmRzL1wiICsgaW5kZXgpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaW5kZXgpO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBtKFwiZGl2XCIsIHtcbiAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgIFwiZmxleFwiOiBcIjFcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBpdGVtLmVuKCkpLFxuICAgICAgICBtKFwiZGl2XCIsIHtcbiAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgIFwiZmxleFwiOiBcIjFcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBpdGVtLmphKCkpXG4gICAgXSk7XG59O1xuXG5jb25zdCB3b3JkTGlzdCA9IGxpc3QgPT4ge1xuICAgIHJldHVybiBtKFwiZGl2XCIsIHtcbiAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICBcImZsZXhcIjogXCIxXCJcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgbGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB3b3JkSXRlbShpdGVtLCBpbmRleCkpXG4gICAgXSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3b3JkTGlzdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2VzNi9jb21wb25lbnRzL3dvcmRMaXN0LmpzXG4gKiovIiwiaW1wb3J0IHZtIGZyb20gXCIuLi9zdG9yZVwiO1xuXG5jbGFzcyBXb3JkcyB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5uYXZiYXIgPSB2bS5zY2VuZS53b3Jkcy5uYXZiYXI7XG4gICAgICAgIHRoaXMud29yZExpc3QgPSB2bS53b3JkTGlzdDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmRzO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZXM2L2N0cmwvd29yZHMuanNcbiAqKi8iLCJpbXBvcnQgbSBmcm9tIFwibWl0aHJpbFwiO1xuaW1wb3J0IG5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXJcIjtcbmltcG9ydCB3b3JkQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy93b3JkQ2FyZFwiO1xuaW1wb3J0IEN0cmwgZnJvbSBcIi4uL2N0cmwvd29yZHNOZXdcIjtcblxubGV0IFdvcmRzTmV3ID0ge1xuICAgIGNvbnRyb2xsZXI6ICgpID0+IG5ldyBDdHJsKCksXG4gICAgdmlldzogY3RybCA9PiB7XG4gICAgICAgIHJldHVybiBtKFwiLmZsZXhfY29udGVudCBkaXNwbGF5RmxleCBmbGV4X2NvbHVtblwiLCBbXG4gICAgICAgICAgICBuYXZiYXIoY3RybC5uYXZiYXIpLFxuICAgICAgICAgICAgbShcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZmxleFwiOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwYWRkaW5nXCI6IFwiMXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICBcInBhZGRpbmctdG9wXCI6IFwiNi41cmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IFwiMTAwJVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgIHdvcmRDYXJkKHtcbiAgICAgICAgICAgICAgICAgICAgZW46IGN0cmwuZW4sXG4gICAgICAgICAgICAgICAgICAgIGphOiBjdHJsLmphXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgbShcImJyXCIpLFxuICAgICAgICAgICAgICAgIG0oXCJidXR0b24uYnV0dG9uLXByaW1hcnkgdS1mdWxsLXdpZHRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmdpbi1ib3R0b21cIjogXCIycmVtXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJvbmNsaWNrXCI6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0cmwuYWRkKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIGN0cmwuYnV0dG9uMSksXG4gICAgICAgICAgICAgICAgbShcImJyXCIpLFxuICAgICAgICAgICAgICAgIG0oXCJidXR0b24uYnV0dG9uLXByaW1hcnkgdS1mdWxsLXdpZHRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmdpbi1ib3R0b21cIjogXCIycmVtXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJvbmNsaWNrXCI6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0cmwuYWRkKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgY3RybC5idXR0b24yKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgV29yZHNOZXc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9lczYvc2NlbmUvd29yZHNOZXcuanNcbiAqKi8iLCJpbXBvcnQgbSBmcm9tIFwibWl0aHJpbFwiO1xuXG5jb25zdCB3b3JkQ2FyZCA9IGFyZ3MgPT4ge1xuICAgIHJldHVybiBtKFwiLmNhcmRcIiwge1xuICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgIFwiZmxleFwiOiBhcmdzLmZsZXgsXG4gICAgICAgICAgICBcIm1hcmdpbi1ib3R0b21cIjogXCIxcmVtXCJcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgbShcImRpdlwiLCBbXG4gICAgICAgICAgICBtKFwibGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIFwiZm9yXCI6IFwiZW5fSW5wdXRcIlxuICAgICAgICAgICAgfSwgXCLoi7Hoqp5cIiksXG4gICAgICAgICAgICBtKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICBcImNsYXNzXCI6XCJ1LWZ1bGwtd2lkdGhcIixcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiZW5fSW5wdXRcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGFyZ3MuZW4oKSxcbiAgICAgICAgICAgICAgICBcIm9uaW5wdXRcIjogbS53aXRoQXR0cihcInZhbHVlXCIsIGFyZ3MuZW4pXG4gICAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgbShcImRpdlwiLCBbXG4gICAgICAgICAgICBtKFwibGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIFwiZm9yXCI6IFwiamFfSW5wdXRcIlxuICAgICAgICAgICAgfSwgXCLml6XmnKzoqp5cIiksXG4gICAgICAgICAgICBtKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICBcImNsYXNzXCI6XCJ1LWZ1bGwtd2lkdGhcIixcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiamFfSW5wdXRcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGFyZ3MuamEoKSxcbiAgICAgICAgICAgICAgICBcIm9uaW5wdXRcIjogbS53aXRoQXR0cihcInZhbHVlXCIsIGFyZ3MuamEpXG4gICAgICAgICAgICB9KVxuICAgICAgICBdKVxuICAgIF0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd29yZENhcmQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9lczYvY29tcG9uZW50cy93b3JkQ2FyZC5qc1xuICoqLyIsImltcG9ydCBtIGZyb20gXCJtaXRocmlsXCI7XG5pbXBvcnQgdm0gZnJvbSBcIi4uL3N0b3JlXCI7XG5cbmNsYXNzIFdvcmRzTmV3IHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLm5hdmJhciA9IHZtLnNjZW5lLndvcmRzTmV3Lm5hdmJhcjtcbiAgICAgICAgdGhpcy5idXR0b24xID0gdm0uc2NlbmUud29yZHNOZXcuY29udGVudC5idXR0b24xO1xuICAgICAgICB0aGlzLmJ1dHRvbjIgPSB2bS5zY2VuZS53b3Jkc05ldy5jb250ZW50LmJ1dHRvbjI7XG4gICAgICAgIHRoaXMuZW4gPSBtLnByb3AoXCJcIik7XG4gICAgICAgIHRoaXMuamEgPSBtLnByb3AoXCJcIik7XG4gICAgfVxuICAgIGFkZChjb250aW51KXtcbiAgICAgICAgaWYodGhpcy5lbigpID09PSBcIlwiIHx8IHRoaXMuamEoKSA9PT0gXCJcIikgcmV0dXJuO1xuICAgICAgICB2bS5hZGQodm0ud29yZExpc3QsIHtcbiAgICAgICAgICAgIGVuOiB0aGlzLmVuKCksXG4gICAgICAgICAgICBqYTogdGhpcy5qYSgpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVuKFwiXCIpO1xuICAgICAgICB0aGlzLmphKFwiXCIpO1xuICAgICAgICBpZighY29udGludSl7XG4gICAgICAgICAgICBtLnJvdXRlKFwiL3dvcmRzXCIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXb3Jkc05ldztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2VzNi9jdHJsL3dvcmRzTmV3LmpzXG4gKiovIiwiaW1wb3J0IG0gZnJvbSBcIm1pdGhyaWxcIjtcbmltcG9ydCBuYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2YmFyXCI7XG5pbXBvcnQgd29yZENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvd29yZENhcmRcIjtcbmltcG9ydCBDdHJsIGZyb20gXCIuLi9jdHJsL1dvcmRzRWRpdFwiO1xuXG5jb25zdCBXb3Jkc0VkaXQgPSB7XG4gICAgY29udHJvbGxlcjogKCkgPT4gbmV3IEN0cmwoKSxcbiAgICB2aWV3OiBjdHJsID0+IHtcbiAgICAgICAgcmV0dXJuIG0oXCIuZmxleF9jb250ZW50IGRpc3BsYXlGbGV4IGZsZXhfY29sdW1uXCIsIFtcbiAgICAgICAgICAgIG5hdmJhcihjdHJsLm5hdmJhciksXG4gICAgICAgICAgICBtKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJmbGV4XCI6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICBcInBhZGRpbmdcIjogXCIxcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGFkZGluZy10b3BcIjogXCI2LjVyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogXCIxMDAlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgd29yZENhcmQoe1xuICAgICAgICAgICAgICAgICAgICBlbjogY3RybC5lbixcbiAgICAgICAgICAgICAgICAgICAgamE6IGN0cmwuamFcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBtKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgbShcImJ1dHRvbi5idXR0b24tcHJpbWFyeSB1LWZ1bGwtd2lkdGhcIiwge1xuICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWFyZ2luLWJvdHRvbVwiOiBcIjJyZW1cIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcIm9uY2xpY2tcIjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3RybC5hZGQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIGN0cmwuYnV0dG9uKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgV29yZHNFZGl0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZXM2L3NjZW5lL1dvcmRzRWRpdC5qc1xuICoqLyIsImltcG9ydCBtIGZyb20gXCJtaXRocmlsXCI7XG5pbXBvcnQgdm0gZnJvbSBcIi4uL3N0b3JlXCI7XG5cbmNsYXNzIFdvcmRzRWRpdCB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdm0uZ2V0VXJsUGFyYW0oXCJpZFwiKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmkgPSByZXM7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwYXJhbTpcIiArIHJlcygpICsgXCIgZGF0YTpcIiArIHZtLndvcmRMaXN0W3JlcygpXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXZiYXIgPSB2bS5zY2VuZS53b3Jkc0VkaXQubmF2YmFyO1xuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uID0gdm0uc2NlbmUud29yZHNFZGl0LmNvbnRlbnQuYnV0dG9uO1xuICAgICAgICAgICAgICAgIHRoaXMuZW4gPSBtLnByb3Aodm0ud29yZExpc3RbcmVzKCldLmVuKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuamEgPSBtLnByb3Aodm0ud29yZExpc3RbcmVzKCldLmphKCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIGFkZCgpe1xuICAgICAgICBpZih0aGlzLmVuKCkgPT09IFwiXCIgfHwgdGhpcy5qYSgpID09PSBcIlwiKSByZXR1cm47XG4gICAgICAgIHZtLndvcmRMaXN0W3RoaXMuaSgpXS5lbih0aGlzLmVuKCkpO1xuICAgICAgICB2bS53b3JkTGlzdFt0aGlzLmkoKV0uamEodGhpcy5qYSgpKTtcbiAgICAgICAgdGhpcy5lbihcIlwiKTtcbiAgICAgICAgdGhpcy5qYShcIlwiKTtcbiAgICAgICAgbS5yb3V0ZShcIi93b3Jkc1wiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmRzRWRpdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2VzNi9jdHJsL1dvcmRzRWRpdC5qc1xuICoqLyIsImltcG9ydCBtIGZyb20gXCJtaXRocmlsXCI7XG5pbXBvcnQgbmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclwiO1xuaW1wb3J0IGxpbWl0U2VsZWN0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9saW1pdFNlbGVjdENhcmRcIjtcbmltcG9ydCBDdHJsIGZyb20gXCIuLi9jdHJsL2NoZWNrXCI7XG5cbmxldCBDaGVjayA9IHtcbiAgICBjb250cm9sbGVyOiAoKSA9PiBuZXcgQ3RybCgpLFxuICAgIHZpZXc6IGN0cmwgPT4ge1xuICAgICAgICByZXR1cm4gbShcIi5mbGV4X2NvbnRlbnQgZGlzcGxheUZsZXggZmxleF9jb2x1bW5cIiwgW1xuICAgICAgICAgICAgbmF2YmFyKGN0cmwubmF2YmFyKSxcbiAgICAgICAgICAgIG0oXCJmb3JtLmRpc3BsYXlGbGV4IGZsZXhfY29sdW1uXCIsIHtcbiAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJmbGV4XCI6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICBcInBhZGRpbmdcIjogXCIxcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGFkZGluZy10b3BcIjogXCI2LjVyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogXCIxMDAlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgbGltaXRTZWxlY3RDYXJkKGN0cmwuY29udGVudC5zZWxlY3QsIGN0cmwuY2hlY2tMaW1pdCksXG4gICAgICAgICAgICAgICAgbShcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kXCI6IFwiI2ZmZmZmZlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwib25jbGlja1wiOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjdHJsLmNoZWNrTGltaXQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3RybC5nb0NoZWNrUnVuKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBjdHJsLmNvbnRlbnQuYnV0dG9uKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2s7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9lczYvc2NlbmUvQ2hlY2suanNcbiAqKi8iLCJpbXBvcnQgbSBmcm9tIFwibWl0aHJpbFwiO1xuaW1wb3J0IHNlbGVjdCBmcm9tIFwiLi9zZWxlY3RcIjtcblxuY29uc3QgbGltaXRTZWxlY3RDYXJkID0gKGFyZ3MsIHZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIG0oXCIuY2FyZFwiLCB7XG4gICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgXCJtYXJnaW4tYm90dG9tXCI6IFwiMXJlbVwiXG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIG0oXCJsYWJlbFwiLCB7XG4gICAgICAgICAgICBcImZvclwiOiBhcmdzLm5hbWVcbiAgICAgICAgfSwgYXJncy5sYWJlbCksXG4gICAgICAgIHNlbGVjdChhcmdzLCB2YWx1ZSlcbiAgICBdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxpbWl0U2VsZWN0Q2FyZDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2VzNi9jb21wb25lbnRzL2xpbWl0U2VsZWN0Q2FyZC5qc1xuICoqLyIsImltcG9ydCBtIGZyb20gXCJtaXRocmlsXCI7XG4vKipcbkBwYXJhbXtTdHJpbmd9IGl0ZW0udmFsdWUg5YaF6YOo44Gu5YCkXG5AcGFyYW17U3RyaW5nfSBpdGVtLmxhYmVsIOmBuOaKnuiCouOBqOOBl+OBpuWIqeeUqOiAheOBq+imi+OBm+OCi+WApFxuKi9cbmNvbnN0IG9wdGlvbiA9IGl0ZW0gPT4ge1xuICAgIHJldHVybiBtKFwib3B0aW9uXCIgLHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBpdGVtLnZhbHVlXG4gICAgfSwgaXRlbS50aXRsZSk7XG59O1xuXG5jb25zdCBzZWxlY3QgPSAoYXJncywgdmFsdWUpID0+IHtcbiAgICByZXR1cm4gbShcInNlbGVjdC51LWZ1bGwtd2lkdGhcIiwge1xuICAgICAgICBcIm5hbWVcIjogYXJncy5uYW1lLFxuICAgICAgICBcInNpemVcIjogYXJncy5zaXplIHx8IDEsXG4gICAgICAgIFwiaWRcIjogYXJncy5uYW1lLFxuICAgICAgICBcInZhbHVlXCI6IHZhbHVlKClcbiAgICB9LCBbXG4gICAgICAgIGFyZ3Mub3B0aW9uLm1hcChpdGVtID0+IG9wdGlvbihpdGVtKSlcbiAgICBdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlbGVjdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2VzNi9jb21wb25lbnRzL3NlbGVjdC5qc1xuICoqLyIsImltcG9ydCBtIGZyb20gXCJtaXRocmlsXCI7XG5pbXBvcnQgdm0gZnJvbSBcIi4uL3N0b3JlXCI7XG5cbmNsYXNzIENoZWNrIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLm5hdmJhciA9IHZtLnNjZW5lLmNoZWNrLm5hdmJhcjtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gdm0uc2NlbmUuY2hlY2suY29udGVudDtcbiAgICAgICAgdGhpcy5jaGVja0xpbWl0ID0gbS5wcm9wKDUpO1xuICAgIH1cbiAgICBnb0NoZWNrUnVuKCl7XG4gICAgICAgIGNvbnN0IHVybCA9IFwiL2NoZWNrL1wiICsgdGhpcy5jaGVja0xpbWl0KCk7XG4gICAgICAgIHJldHVybiBtLnJvdXRlKHVybCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGVjaztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2VzNi9jdHJsL2NoZWNrLmpzXG4gKiovIiwiaW1wb3J0IG0gZnJvbSBcIm1pdGhyaWxcIjtcbmltcG9ydCBuYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2YmFyXCI7XG5pbXBvcnQgY2hlY2tDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL2NoZWNrQ2FyZFwiO1xuaW1wb3J0IEN0cmwgZnJvbSBcIi4uL2N0cmwvY2hlY2tSdW5cIjtcbmltcG9ydCBjaGVja0J1dHRvbnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2hlY2tCdXR0b25zXCI7XG5cbmxldCBDaGVja1J1biA9IHtcbiAgICBjb250cm9sbGVyOiAoKSA9PiBuZXcgQ3RybCgpLFxuICAgIHZpZXc6IGN0cmwgPT4ge1xuICAgICAgICByZXR1cm4gbShcIi5mbGV4X2NvbnRlbnQgZGlzcGxheUZsZXggZmxleF9jb2x1bW5cIiwgW1xuICAgICAgICAgICAgbmF2YmFyKGN0cmwubmF2YmFyKSxcbiAgICAgICAgICAgIG0oXCIuZGlzcGxheUZsZXggZmxleF9jb2x1bW5cIiwge1xuICAgICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImZsZXhcIjogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGFkZGluZ1wiOiBcIjFyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJwYWRkaW5nLXRvcFwiOiBcIjYuNXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiBcIjEwMCVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICBjaGVja0NhcmQoe1xuICAgICAgICAgICAgICAgICAgICBlbjogY3RybC53b3JkKCkuZW4sXG4gICAgICAgICAgICAgICAgICAgIGphOiBjdHJsLndvcmQoKS5qYSxcbiAgICAgICAgICAgICAgICAgICAgZmxleDogXCI0XCIsXG4gICAgICAgICAgICAgICAgICAgIGFjdDogY3RybC5pc1ZpZXcsXG4gICAgICAgICAgICAgICAgICAgIHZpZXc6IGN0cmwudmlld1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIG0oXCJoclwiKSxcbiAgICAgICAgICAgICAgICBjaGVja0J1dHRvbnMoe1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3RybC5pc0ZsYWcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihjdHJsLmNoZWNrRW5kRmxhZygpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbS5yb3V0ZShcIi9ob21lXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0cmwuZ2V0TmV4dFdvcmQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi44KP44GL44KLXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3RybC5nZXROZXh0V29yZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIuOCj+OBi+OCieOBquOBhFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tSdW47XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9lczYvc2NlbmUvQ2hlY2tSdW4uanNcbiAqKi8iLCJpbXBvcnQgbSBmcm9tIFwibWl0aHJpbFwiO1xuXG5jb25zdCBjaGVja0NhcmQgPSBhcmdzID0+IHtcbiAgICByZXR1cm4gbShcIi5jYXJkIGRpc3BsYXlGbGV4XCIsIHtcbiAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICBcImZsZXhcIjogYXJncy5mbGV4LFxuICAgICAgICAgICAgXCJtYXJnaW4tYm90dG9tXCI6IFwiMXJlbVwiLFxuICAgICAgICAgICAgXCJhbGlnbi1pdGVtc1wiOiBcImNlbnRlclwiXG4gICAgICAgIH0sXG4gICAgICAgIFwib25jbGlja1wiOiAoKSA9PiB7XG4gICAgICAgICAgICBhcmdzLmFjdCgpXG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIG0oXCIuZmxleF9jb250ZW50XCIsIFtcbiAgICAgICAgICAgIG0oXCJoM1wiLCB7XG4gICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IFwiMWVtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dC1hbGlnblwiOiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgYXJncy5lbigpKSxcbiAgICAgICAgICAgIG0oXCJoclwiKSxcbiAgICAgICAgICAgIG0oXCJoM1wiLCB7XG4gICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IFwiMWVtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dC1hbGlnblwiOiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgYXJncy52aWV3KCkgPyBhcmdzLmphKCkgOiBcIlwiKVxuICAgICAgICBdKVxuICAgIF0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2hlY2tDYXJkO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZXM2L2NvbXBvbmVudHMvY2hlY2tDYXJkLmpzXG4gKiovIiwiaW1wb3J0IG0gZnJvbSBcIm1pdGhyaWxcIjtcblxuLyoqXG5AcGFyYW17T2JqZWN0fSBhcmdzIOODnOOCv+ODs+OBruOCouOCr+OCt+ODp+ODs1xuQHJldHVybntPYmplY3R9XG4qL1xuY29uc3QgY2hlY2tCdXR0b25zID0gYXJncyA9PiB7XG4gICAgcmV0dXJuIG0oXCIuZGlzcGxheUZsZXggZmxleF9yb3dcIiwge1xuICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgIFwiZmxleFwiOiBhcmdzLmZsZXgsXG4gICAgICAgICAgICBcIm1hcmdpbi1ib3R0b21cIjogXCIzcmVtXCJcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgbShcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICBcImZsZXhcIjogXCIxXCIsXG4gICAgICAgICAgICAgICAgXCJtYXJnaW4tcmlnaHRcIjogXCIwLjVyZW1cIixcbiAgICAgICAgICAgICAgICBcImJvcmRlci1jb2xvclwiOiBcIiNmYjU5NzNcIixcbiAgICAgICAgICAgICAgICBcImJhY2tncm91bmRcIjogXCIjZmI1OTczXCIsXG4gICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwib25jbGlja1wiOiBhcmdzLmwuYWN0aW9uXG4gICAgICAgIH0sIGFyZ3MubC5sYWJlbCksXG4gICAgICAgIG0oXCJidXR0b25cIiwge1xuICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJmbGV4XCI6IFwiMVwiLFxuICAgICAgICAgICAgICAgIFwibWFyZ2luLWxlZnRcIjogXCIwLjVyZW1cIixcbiAgICAgICAgICAgICAgICBcImJvcmRlci1jb2xvclwiOiBcIiMxYmU4OWFcIixcbiAgICAgICAgICAgICAgICBcImJhY2tncm91bmRcIjogXCIjM2FlMGExXCIsXG4gICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwib25jbGlja1wiOiBhcmdzLnIuYWN0aW9uXG4gICAgICAgIH0sIGFyZ3Muci5sYWJlbClcbiAgICBdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNoZWNrQnV0dG9ucztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2VzNi9jb21wb25lbnRzL2NoZWNrQnV0dG9ucy5qc1xuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc2tlbGV0b24uY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3NrZWxldG9uLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3NrZWxldG9uLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2Jvd2VyX2NvbXBvbmVudHMvc2tlbGV0b24vY3NzL3NrZWxldG9uLmNzc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuKiBTa2VsZXRvbiBWMi4wLjRcXG4qIENvcHlyaWdodCAyMDE0LCBEYXZlIEdhbWFjaGVcXG4qIHd3dy5nZXRza2VsZXRvbi5jb21cXG4qIEZyZWUgdG8gdXNlIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cXG4qIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXFxuKiAxMi8yOS8yMDE0XFxuKi9cXG5cXG5cXG4vKiBUYWJsZSBvZiBjb250ZW50c1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk1xcbi0gR3JpZFxcbi0gQmFzZSBTdHlsZXNcXG4tIFR5cG9ncmFwaHlcXG4tIExpbmtzXFxuLSBCdXR0b25zXFxuLSBGb3Jtc1xcbi0gTGlzdHNcXG4tIENvZGVcXG4tIFRhYmxlc1xcbi0gU3BhY2luZ1xcbi0gVXRpbGl0aWVzXFxuLSBDbGVhcmluZ1xcbi0gTWVkaWEgUXVlcmllc1xcbiovXFxuXFxuXFxuLyogR3JpZFxcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbi5jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDk2MHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuLmNvbHVtbixcXG4uY29sdW1ucyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbi8qIEZvciBkZXZpY2VzIGxhcmdlciB0aGFuIDQwMHB4ICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDQwMHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgcGFkZGluZzogMDsgfVxcbn1cXG5cXG4vKiBGb3IgZGV2aWNlcyBsYXJnZXIgdGhhbiA1NTBweCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA4MCU7IH1cXG4gIC5jb2x1bW4sXFxuICAuY29sdW1ucyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0JTsgfVxcbiAgLmNvbHVtbjpmaXJzdC1jaGlsZCxcXG4gIC5jb2x1bW5zOmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4gIC5vbmUuY29sdW1uLFxcbiAgLm9uZS5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA0LjY2NjY2NjY2NjY3JTsgfVxcbiAgLnR3by5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAxMy4zMzMzMzMzMzMzJTsgfVxcbiAgLnRocmVlLmNvbHVtbnMgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAyMiU7ICAgICAgICAgICAgfVxcbiAgLmZvdXIuY29sdW1ucyAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAzMC42NjY2NjY2NjY3JTsgfVxcbiAgLmZpdmUuY29sdW1ucyAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAzOS4zMzMzMzMzMzMzJTsgfVxcbiAgLnNpeC5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA0OCU7ICAgICAgICAgICAgfVxcbiAgLnNldmVuLmNvbHVtbnMgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA1Ni42NjY2NjY2NjY3JTsgfVxcbiAgLmVpZ2h0LmNvbHVtbnMgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA2NS4zMzMzMzMzMzMzJTsgfVxcbiAgLm5pbmUuY29sdW1ucyAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA3NC4wJTsgICAgICAgICAgfVxcbiAgLnRlbi5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA4Mi42NjY2NjY2NjY3JTsgfVxcbiAgLmVsZXZlbi5jb2x1bW5zICAgICAgICAgICAgICAgICB7IHdpZHRoOiA5MS4zMzMzMzMzMzMzJTsgfVxcbiAgLnR3ZWx2ZS5jb2x1bW5zICAgICAgICAgICAgICAgICB7IHdpZHRoOiAxMDAlOyBtYXJnaW4tbGVmdDogMDsgfVxcblxcbiAgLm9uZS10aGlyZC5jb2x1bW4gICAgICAgICAgICAgICB7IHdpZHRoOiAzMC42NjY2NjY2NjY3JTsgfVxcbiAgLnR3by10aGlyZHMuY29sdW1uICAgICAgICAgICAgICB7IHdpZHRoOiA2NS4zMzMzMzMzMzMzJTsgfVxcblxcbiAgLm9uZS1oYWxmLmNvbHVtbiAgICAgICAgICAgICAgICB7IHdpZHRoOiA0OCU7IH1cXG5cXG4gIC8qIE9mZnNldHMgKi9cXG4gIC5vZmZzZXQtYnktb25lLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktb25lLmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogOC42NjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktdHdvLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktdHdvLmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogMTcuMzMzMzMzMzMzMyU7IH1cXG4gIC5vZmZzZXQtYnktdGhyZWUuY29sdW1uLFxcbiAgLm9mZnNldC1ieS10aHJlZS5jb2x1bW5zICAgICAgICB7IG1hcmdpbi1sZWZ0OiAyNiU7ICAgICAgICAgICAgfVxcbiAgLm9mZnNldC1ieS1mb3VyLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktZm91ci5jb2x1bW5zICAgICAgICAgeyBtYXJnaW4tbGVmdDogMzQuNjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktZml2ZS5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LWZpdmUuY29sdW1ucyAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDQzLjMzMzMzMzMzMzMlOyB9XFxuICAub2Zmc2V0LWJ5LXNpeC5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LXNpeC5jb2x1bW5zICAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDUyJTsgICAgICAgICAgICB9XFxuICAub2Zmc2V0LWJ5LXNldmVuLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktc2V2ZW4uY29sdW1ucyAgICAgICAgeyBtYXJnaW4tbGVmdDogNjAuNjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktZWlnaHQuY29sdW1uLFxcbiAgLm9mZnNldC1ieS1laWdodC5jb2x1bW5zICAgICAgICB7IG1hcmdpbi1sZWZ0OiA2OS4zMzMzMzMzMzMzJTsgfVxcbiAgLm9mZnNldC1ieS1uaW5lLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktbmluZS5jb2x1bW5zICAgICAgICAgeyBtYXJnaW4tbGVmdDogNzguMCU7ICAgICAgICAgIH1cXG4gIC5vZmZzZXQtYnktdGVuLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktdGVuLmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogODYuNjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktZWxldmVuLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktZWxldmVuLmNvbHVtbnMgICAgICAgeyBtYXJnaW4tbGVmdDogOTUuMzMzMzMzMzMzMyU7IH1cXG5cXG4gIC5vZmZzZXQtYnktb25lLXRoaXJkLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktb25lLXRoaXJkLmNvbHVtbnMgICAgeyBtYXJnaW4tbGVmdDogMzQuNjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktdHdvLXRoaXJkcy5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LXR3by10aGlyZHMuY29sdW1ucyAgIHsgbWFyZ2luLWxlZnQ6IDY5LjMzMzMzMzMzMzMlOyB9XFxuXFxuICAub2Zmc2V0LWJ5LW9uZS1oYWxmLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktb25lLWhhbGYuY29sdW1ucyAgICAgeyBtYXJnaW4tbGVmdDogNTIlOyB9XFxuXFxufVxcblxcblxcbi8qIEJhc2UgU3R5bGVzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuLyogTk9URVxcbmh0bWwgaXMgc2V0IHRvIDYyLjUlIHNvIHRoYXQgYWxsIHRoZSBSRU0gbWVhc3VyZW1lbnRzIHRocm91Z2hvdXQgU2tlbGV0b25cXG5hcmUgYmFzZWQgb24gMTBweCBzaXppbmcuIFNvIGJhc2ljYWxseSAxLjVyZW0gPSAxNXB4IDopICovXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlOyB9XFxuYm9keSB7XFxuICBmb250LXNpemU6IDEuNWVtOyAvKiBjdXJyZW50bHkgZW1zIGNhdXNlIGNocm9tZSBidWcgbWlzaW50ZXJwcmV0aW5nIHJlbXMgb24gYm9keSBlbGVtZW50ICovXFxuICBsaW5lLWhlaWdodDogMS42O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCIsIFxcXCJIZWx2ZXRpY2FOZXVlXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjMjIyOyB9XFxuXFxuXFxuLyogVHlwb2dyYXBoeVxcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICBmb250LXdlaWdodDogMzAwOyB9XFxuaDEgeyBmb250LXNpemU6IDQuMHJlbTsgbGluZS1oZWlnaHQ6IDEuMjsgIGxldHRlci1zcGFjaW5nOiAtLjFyZW07fVxcbmgyIHsgZm9udC1zaXplOiAzLjZyZW07IGxpbmUtaGVpZ2h0OiAxLjI1OyBsZXR0ZXItc3BhY2luZzogLS4xcmVtOyB9XFxuaDMgeyBmb250LXNpemU6IDMuMHJlbTsgbGluZS1oZWlnaHQ6IDEuMzsgIGxldHRlci1zcGFjaW5nOiAtLjFyZW07IH1cXG5oNCB7IGZvbnQtc2l6ZTogMi40cmVtOyBsaW5lLWhlaWdodDogMS4zNTsgbGV0dGVyLXNwYWNpbmc6IC0uMDhyZW07IH1cXG5oNSB7IGZvbnQtc2l6ZTogMS44cmVtOyBsaW5lLWhlaWdodDogMS41OyAgbGV0dGVyLXNwYWNpbmc6IC0uMDVyZW07IH1cXG5oNiB7IGZvbnQtc2l6ZTogMS41cmVtOyBsaW5lLWhlaWdodDogMS42OyAgbGV0dGVyLXNwYWNpbmc6IDA7IH1cXG5cXG4vKiBMYXJnZXIgdGhhbiBwaGFibGV0ICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7XFxuICBoMSB7IGZvbnQtc2l6ZTogNS4wcmVtOyB9XFxuICBoMiB7IGZvbnQtc2l6ZTogNC4ycmVtOyB9XFxuICBoMyB7IGZvbnQtc2l6ZTogMy42cmVtOyB9XFxuICBoNCB7IGZvbnQtc2l6ZTogMy4wcmVtOyB9XFxuICBoNSB7IGZvbnQtc2l6ZTogMi40cmVtOyB9XFxuICBoNiB7IGZvbnQtc2l6ZTogMS41cmVtOyB9XFxufVxcblxcbnAge1xcbiAgbWFyZ2luLXRvcDogMDsgfVxcblxcblxcbi8qIExpbmtzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuYSB7XFxuICBjb2xvcjogIzFFQUVEQjsgfVxcbmE6aG92ZXIge1xcbiAgY29sb3I6ICMwRkEwQ0U7IH1cXG5cXG5cXG4vKiBCdXR0b25zXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuLmJ1dHRvbixcXG5idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDM4cHg7XFxuICBwYWRkaW5nOiAwIDMwcHg7XFxuICBjb2xvcjogIzU1NTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsaW5lLWhlaWdodDogMzhweDtcXG4gIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcbi5idXR0b246aG92ZXIsXFxuYnV0dG9uOmhvdmVyLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyLFxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl06aG92ZXIsXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl06aG92ZXIsXFxuLmJ1dHRvbjpmb2N1cyxcXG5idXR0b246Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl06Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXTpmb2N1cyB7XFxuICBjb2xvcjogIzMzMztcXG4gIGJvcmRlci1jb2xvcjogIzg4ODtcXG4gIG91dGxpbmU6IDA7IH1cXG4uYnV0dG9uLmJ1dHRvbi1wcmltYXJ5LFxcbmJ1dHRvbi5idXR0b24tcHJpbWFyeSxcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXS5idXR0b24tcHJpbWFyeSxcXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdLmJ1dHRvbi1wcmltYXJ5LFxcbmlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdLmJ1dHRvbi1wcmltYXJ5IHtcXG4gIGNvbG9yOiAjRkZGO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzQzNGMDtcXG4gIGJvcmRlci1jb2xvcjogIzMzQzNGMDsgfVxcbi5idXR0b24uYnV0dG9uLXByaW1hcnk6aG92ZXIsXFxuYnV0dG9uLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLFxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0uYnV0dG9uLXByaW1hcnk6aG92ZXIsXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0uYnV0dG9uLXByaW1hcnk6aG92ZXIsXFxuLmJ1dHRvbi5idXR0b24tcHJpbWFyeTpmb2N1cyxcXG5idXR0b24uYnV0dG9uLXByaW1hcnk6Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0uYnV0dG9uLXByaW1hcnk6Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXS5idXR0b24tcHJpbWFyeTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXS5idXR0b24tcHJpbWFyeTpmb2N1cyB7XFxuICBjb2xvcjogI0ZGRjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxRUFFREI7XFxuICBib3JkZXItY29sb3I6ICMxRUFFREI7IH1cXG5cXG5cXG4vKiBGb3Jtc1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbmlucHV0W3R5cGU9XFxcImVtYWlsXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInRlbFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInVybFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInBhc3N3b3JkXFxcIl0sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGhlaWdodDogMzhweDtcXG4gIHBhZGRpbmc6IDZweCAxMHB4OyAvKiBUaGUgNnB4IHZlcnRpY2FsbHkgY2VudGVycyB0ZXh0IG9uIEZGLCBpZ25vcmVkIGJ5IFdlYmtpdCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEMUQxRDE7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcbi8qIFJlbW92ZXMgYXdrd2FyZCBkZWZhdWx0IHN0eWxlcyBvbiBzb21lIGlucHV0cyBmb3IgaU9TICovXFxuaW5wdXRbdHlwZT1cXFwiZW1haWxcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwidGVsXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwidXJsXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwicGFzc3dvcmRcXFwiXSxcXG50ZXh0YXJlYSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7IH1cXG50ZXh0YXJlYSB7XFxuICBtaW4taGVpZ2h0OiA2NXB4O1xcbiAgcGFkZGluZy10b3A6IDZweDtcXG4gIHBhZGRpbmctYm90dG9tOiA2cHg7IH1cXG5pbnB1dFt0eXBlPVxcXCJlbWFpbFxcXCJdOmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdOmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJ0ZWxcXFwiXTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJ1cmxcXFwiXTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJwYXNzd29yZFxcXCJdOmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzLFxcbnNlbGVjdDpmb2N1cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzNDM0YwO1xcbiAgb3V0bGluZTogMDsgfVxcbmxhYmVsLFxcbmxlZ2VuZCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDsgfVxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXItd2lkdGg6IDA7IH1cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgZGlzcGxheTogaW5saW5lOyB9XFxubGFiZWwgPiAubGFiZWwtYm9keSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogLjVyZW07XFxuICBmb250LXdlaWdodDogbm9ybWFsOyB9XFxuXFxuXFxuLyogTGlzdHNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBjaXJjbGUgaW5zaWRlOyB9XFxub2wge1xcbiAgbGlzdC1zdHlsZTogZGVjaW1hbCBpbnNpZGU7IH1cXG5vbCwgdWwge1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgbWFyZ2luLXRvcDogMDsgfVxcbnVsIHVsLFxcbnVsIG9sLFxcbm9sIG9sLFxcbm9sIHVsIHtcXG4gIG1hcmdpbjogMS41cmVtIDAgMS41cmVtIDNyZW07XFxuICBmb250LXNpemU6IDkwJTsgfVxcbmxpIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07IH1cXG5cXG5cXG4vKiBDb2RlXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuY29kZSB7XFxuICBwYWRkaW5nOiAuMnJlbSAuNXJlbTtcXG4gIG1hcmdpbjogMCAuMnJlbTtcXG4gIGZvbnQtc2l6ZTogOTAlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGJhY2tncm91bmQ6ICNGMUYxRjE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRTFFMUUxO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4OyB9XFxucHJlID4gY29kZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcbiAgd2hpdGUtc3BhY2U6IHByZTsgfVxcblxcblxcbi8qIFRhYmxlc1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbnRoLFxcbnRkIHtcXG4gIHBhZGRpbmc6IDEycHggMTVweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0UxRTFFMTsgfVxcbnRoOmZpcnN0LWNoaWxkLFxcbnRkOmZpcnN0LWNoaWxkIHtcXG4gIHBhZGRpbmctbGVmdDogMDsgfVxcbnRoOmxhc3QtY2hpbGQsXFxudGQ6bGFzdC1jaGlsZCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwOyB9XFxuXFxuXFxuLyogU3BhY2luZ1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbmJ1dHRvbixcXG4uYnV0dG9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07IH1cXG5pbnB1dCxcXG50ZXh0YXJlYSxcXG5zZWxlY3QsXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtOyB9XFxucHJlLFxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZmlndXJlLFxcbnRhYmxlLFxcbnAsXFxudWwsXFxub2wsXFxuZm9ybSB7XFxuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07IH1cXG5cXG5cXG4vKiBVdGlsaXRpZXNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG4udS1mdWxsLXdpZHRoIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcbi51LW1heC1mdWxsLXdpZHRoIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4udS1wdWxsLXJpZ2h0IHtcXG4gIGZsb2F0OiByaWdodDsgfVxcbi51LXB1bGwtbGVmdCB7XFxuICBmbG9hdDogbGVmdDsgfVxcblxcblxcbi8qIE1pc2NcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG5ociB7XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMy41cmVtO1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFMUUxRTE7IH1cXG5cXG5cXG4vKiBDbGVhcmluZ1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcblxcbi8qIFNlbGYgQ2xlYXJpbmcgR29vZG5lc3MgKi9cXG4uY29udGFpbmVyOmFmdGVyLFxcbi5yb3c6YWZ0ZXIsXFxuLnUtY2Yge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIGNsZWFyOiBib3RoOyB9XFxuXFxuXFxuLyogTWVkaWEgUXVlcmllc1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbi8qXFxuTm90ZTogVGhlIGJlc3Qgd2F5IHRvIHN0cnVjdHVyZSB0aGUgdXNlIG9mIG1lZGlhIHF1ZXJpZXMgaXMgdG8gY3JlYXRlIHRoZSBxdWVyaWVzXFxubmVhciB0aGUgcmVsZXZhbnQgY29kZS4gRm9yIGV4YW1wbGUsIGlmIHlvdSB3YW50ZWQgdG8gY2hhbmdlIHRoZSBzdHlsZXMgZm9yIGJ1dHRvbnNcXG5vbiBzbWFsbCBkZXZpY2VzLCBwYXN0ZSB0aGUgbW9iaWxlIHF1ZXJ5IGNvZGUgdXAgaW4gdGhlIGJ1dHRvbnMgc2VjdGlvbiBhbmQgc3R5bGUgaXRcXG50aGVyZS5cXG4qL1xcblxcblxcbi8qIExhcmdlciB0aGFuIG1vYmlsZSAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA0MDBweCkge31cXG5cXG4vKiBMYXJnZXIgdGhhbiBwaGFibGV0IChhbHNvIHBvaW50IHdoZW4gZ3JpZCBiZWNvbWVzIGFjdGl2ZSkgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpIHt9XFxuXFxuLyogTGFyZ2VyIHRoYW4gdGFibGV0ICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDc1MHB4KSB7fVxcblxcbi8qIExhcmdlciB0aGFuIGRlc2t0b3AgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7fVxcblxcbi8qIExhcmdlciB0aGFuIERlc2t0b3AgSEQgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7fVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9ib3dlcl9jb21wb25lbnRzL3NrZWxldG9uL2Nzcy9za2VsZXRvbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxyXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xyXG5cdFx0dmFyIG1lbW87XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRyZXR1cm4gbWVtbztcclxuXHRcdH07XHJcblx0fSxcclxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcclxuXHR9KSxcclxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG5cdH0pLFxyXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxyXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxyXG5cdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW107XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcclxuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcclxuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xyXG5cdH1cclxuXHJcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XHJcblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xyXG5cclxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgPGhlYWQ+LlxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XHJcblxyXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XHJcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcblx0XHR9XHJcblx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XHJcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcclxuXHR2YXIgc3R5bGVzID0gW107XHJcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xyXG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XHJcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XHJcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XHJcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XHJcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xyXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xyXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XHJcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xyXG5cdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xyXG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XHJcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xyXG5cdGlmKGlkeCA+PSAwKSB7XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcclxuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcblx0bGlua0VsZW1lbnQucmVsID0gXCJzdHlsZXNoZWV0XCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcclxuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xyXG5cclxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcclxuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XHJcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcclxuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxyXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcclxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcclxuXHRcdH07XHJcblx0fSBlbHNlIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShvYmopO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XHJcblx0XHRpZihuZXdPYmopIHtcclxuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZW1vdmUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xyXG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcclxuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcclxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xyXG5cdH07XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xyXG5cclxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xyXG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2RlcztcclxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblxyXG5cdGlmKG1lZGlhKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXHJcblx0fVxyXG5cclxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihzb3VyY2VNYXApIHtcclxuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XHJcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XHJcblx0fVxyXG5cclxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcclxuXHJcblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XHJcblxyXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuXHRpZihvbGRTcmMpXHJcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XHJcbn1cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY3NzL3N0eWxlLmNzc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgYmFja2dyb3VuZDogI2VlZTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tb3otZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4O1xcbiAgZGlzcGxheTogLW8tZmxleDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogLXdlYmtpdC1jb2x1bW47XFxuICBmbGV4LWRpcmVjdGlvbjogLW1vei1jb2x1bW47XFxuICBmbGV4LWRpcmVjdGlvbjogLW1zLWNvbHVtbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiAtby1jb2x1bW47XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICAgIGRpc3BsYXk6IC1tb3otZmxleDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXg7XFxuICAgIGRpc3BsYXk6IC1vLWZsZXg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kaXNwbGF5RmxleCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbW96LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleDtcXG4gIGRpc3BsYXk6IC1vLWZsZXg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZGlzcGxheUZsZXhGaXhlZCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbW96LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleDtcXG4gIGRpc3BsYXk6IC1vLWZsZXg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5mbGV4X3JvdyB7XFxuICBmbGV4LWRpcmVjdGlvbjogLXdlYmtpdC1yb3c7XFxuICBmbGV4LWRpcmVjdGlvbjogLW1vei1yb3c7XFxuICBmbGV4LWRpcmVjdGlvbjogLW1zLXJvdztcXG4gIGZsZXgtZGlyZWN0aW9uOiAtby1yb3c7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uZmxleF9jb2x1bW4ge1xcbiAgZmxleC1kaXJlY3Rpb246IC13ZWJraXQtY29sdW1uO1xcbiAgZmxleC1kaXJlY3Rpb246IC1tb3otY29sdW1uO1xcbiAgZmxleC1kaXJlY3Rpb246IC1tcy1jb2x1bW47XFxuICBmbGV4LWRpcmVjdGlvbjogLW8tY29sdW1uO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZsZXhfbm93cmFwIHtcXG4gIGZsZXgtd3JhcDogLXdlYmtpdC1ub3dyYXA7XFxuICBmbGV4LXdyYXA6IC1tb3otbm93cmFwO1xcbiAgZmxleC13cmFwOiAtbXMtbm93cmFwO1xcbiAgZmxleC13cmFwOiAtby1ub3dyYXA7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuXFxuLmZsZXhfY29udGVudCB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5jYXJkIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAjY2NjO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuLmNhcmQtaW1nIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4uY2FyZC1jb250ZW50IHtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbi5jYXJkLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzMzMztcXG59XFxuLmNhcmQtdGV4dCB7XFxuICBjb2xvcjogIzc3NztcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcbi5jYXJkLWxpbmsge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG4uY2FyZC1saW5rIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICMwYmQ7XFxuICBtYXJnaW46IDAgMTBweDtcXG59XFxuLmNhcmQtbGluayBhOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDA5MGFhO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vc3JjL2Nzcy9zdHlsZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==