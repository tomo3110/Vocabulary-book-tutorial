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
	
	var _checkRun = __webpack_require__(9);
	
	var _checkRun2 = _interopRequireDefault(_checkRun);
	
	var _home = __webpack_require__(10);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _words = __webpack_require__(13);
	
	var _words2 = _interopRequireDefault(_words);
	
	var _wordsNew = __webpack_require__(16);
	
	var _wordsNew2 = _interopRequireDefault(_wordsNew);
	
	var _WordsEdit = __webpack_require__(19);
	
	var _WordsEdit2 = _interopRequireDefault(_WordsEdit);
	
	var _Check = __webpack_require__(21);
	
	var _Check2 = _interopRequireDefault(_Check);
	
	var _CheckRun = __webpack_require__(25);
	
	var _CheckRun2 = _interopRequireDefault(_CheckRun);
	
	__webpack_require__(29);
	
	__webpack_require__(33);
	
	__webpack_require__(35);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	// import Cmd from "./helper/mySqlite";
	
	var Ctrl = function Ctrl(name) {
	    _classCallCheck(this, Ctrl);
	
	    this.name = _mithril2.default.prop(name);
	};
	
	document.addEventListener("deviceready", _store2.default.init, false);
	// store.strage.set([
	//     {rowid: 0, en: "hello", ja: "こんにちは"},
	//     {rowid: 1, en: "Apple", ja: "りんご"},
	//     {rowid: 2, en: "window", ja: "窓"}
	// ]);
	// store.addAll(store.wordList, store.strage.get());
	// store.featch();
	// store.init();
	// console.log(store.wordList.length);
	// store.addAll(store.wordList, [
	//     {
	//         index: 0,
	//         en: "hello",
	//         ja: "こんにちは"
	//     },{
	//         index: 1,
	//         en: "Apple",
	//         ja: "りんご"
	//     },{
	//         index: 2,
	//         en: "window",
	//         ja: "窓"
	//     }
	// ]);
	
	// const cmd = new Cmd();
	//
	// console.log(cmd.select({
	//     name: "test"
	//     // where: "flag = " + true
	//     // data: [
	//     //     {
	//     //         colome: "id",
	//     //         value: 1
	//     //     },{
	//     //         colome: "name",
	//     //         value: "'saitou'"
	//     //     },{
	//     //         colome: "age",
	//     //         value: "'22'"
	//     //     }
	//     // ]
	// }));
	
	var test = new _checkRun2.default();
	// console.log(JSON.stringify(test.word()));
	// test.isFlag();
	// test.getNextWord();
	// console.log(JSON.stringify(test.word()));
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
	Mithril v0.2.4
	http://mithril.js.org
	(c) 2014-2016 Leo Horie
	License: MIT
	*/
	!function(a,b){"use strict";var c=b(a);"object"==typeof module&&null!=module&&module.exports?module.exports=c: true?!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return c}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):a.m=c}("undefined"!=typeof window?window:this,function(a,b){"use strict";function c(a){return"function"==typeof a}function d(a){return"[object Object]"===Aa.call(a)}function e(a){return"[object String]"===Aa.call(a)}function f(){}function g(a){va=a.document,wa=a.location,ya=a.cancelAnimationFrame||a.clearTimeout,xa=a.requestAnimationFrame||a.setTimeout}function h(a,b){for(var c,d=[],e=/(?:(^|#|\.)([^#\.\[\]]+))|(\[.+?\])/g;c=e.exec(b);)if(""===c[1]&&c[2])a.tag=c[2];else if("#"===c[1])a.attrs.id=c[2];else if("."===c[1])d.push(c[2]);else if("["===c[3][0]){var f=/\[(.+?)(?:=("|'|)(.*?)\2)?\]/.exec(c[3]);a.attrs[f[1]]=f[3]||""}return d}function i(a,b){var c=b?a.slice(1):a;return 1===c.length&&Ba(c[0])?c[0]:c}function j(a,b,c){var d="class"in b?"class":"className";for(var e in b)za.call(b,e)&&(e===d&&null!=b[e]&&""!==b[e]?(c.push(b[e]),a[e]=""):a[e]=b[e]);c.length&&(a[d]=c.join(" "))}function k(a,b){for(var c=[],f=1,g=arguments.length;g>f;f++)c[f-1]=arguments[f];if(d(a))return ba(a,c);if(!e(a))throw new Error("selector in m(selector, attrs, children) should be a string");var k=null!=b&&d(b)&&!("tag"in b||"view"in b||"subtree"in b),l=k?b:{},m={tag:"div",attrs:{},children:i(c,k)};return j(m.attrs,l,h(m,a)),m}function l(a,b){for(var c=0;c<a.length&&!b(a[c],c++););}function m(a,b){l(a,function(a,c){return(a=a&&a.attrs)&&null!=a.key&&b(a,c)})}function n(a){try{if(null!=a&&null!=a.toString())return a}catch(b){}return""}function o(a,b,c,d){try{q(a,b,c),b.nodeValue=d}catch(e){}}function p(a){for(var b=0;b<a.length;b++)Ba(a[b])&&(a=a.concat.apply([],a),b--);return a}function q(a,b,c){a.insertBefore(b,a.childNodes[c]||null)}function r(a,b,c,d){m(a,function(a,d){b[a=a.key]=b[a]?{action:Fa,index:d,from:b[a].index,element:c.nodes[b[a].index]||va.createElement("div")}:{action:Ea,index:d}});var e=[];for(var f in b)za.call(b,f)&&e.push(b[f]);var g=e.sort(R),h=new Array(c.length);return h.nodes=c.nodes.slice(),l(g,function(b){var e=b.index;if(b.action===Da&&(W(c[e].nodes,c[e]),h.splice(e,1)),b.action===Ea){var f=va.createElement("div");f.key=a[e].attrs.key,q(d,f,e),h.splice(e,0,{attrs:{key:a[e].attrs.key},nodes:[f]}),h.nodes[e]=f}if(b.action===Fa){var g=b.element,i=d.childNodes[e];i!==g&&null!==g&&d.insertBefore(g,i||null),h[e]=c[b.from],h.nodes[e]=g}}),h}function s(a,b,c,d){var e=a.length!==b.length;return e||m(a,function(a,c){var d=b[c];return e=d&&d.attrs&&d.attrs.key!==a.key}),e?r(a,c,b,d):b}function t(a,b,c){l(a,function(a,d){null!=b[d]&&c.push.apply(c,b[d].nodes)}),l(b.nodes,function(a,d){null!=a.parentNode&&c.indexOf(a)<0&&W([a],[b[d]])}),a.length<b.length&&(b.length=a.length),b.nodes=c}function u(a){var b=0;m(a,function(){return l(a,function(a){(a=a&&a.attrs)&&null==a.key&&(a.key="__mithril__"+b++)}),1})}function v(a,b,c){return a.tag!==b.tag?!0:c.sort().join()!==Object.keys(b.attrs).sort().join()?!0:a.attrs.id!==b.attrs.id?!0:a.attrs.key!==b.attrs.key?!0:"all"===k.redraw.strategy()?!b.configContext||b.configContext.retain!==!0:"diff"===k.redraw.strategy()?b.configContext&&b.configContext.retain===!1:!1}function w(a,b,d){v(a,b,d)&&(b.nodes.length&&W(b.nodes),b.configContext&&c(b.configContext.onunload)&&b.configContext.onunload(),b.controllers&&l(b.controllers,function(a){a.onunload&&a.onunload({preventDefault:f})}))}function x(a,b){return a.attrs.xmlns?a.attrs.xmlns:"svg"===a.tag?"http://www.w3.org/2000/svg":"math"===a.tag?"http://www.w3.org/1998/Math/MathML":b}function y(a,b,c){c.length&&(a.views=b,a.controllers=c,l(c,function(a){if(a.onunload&&a.onunload.$old&&(a.onunload=a.onunload.$old),Ga&&a.onunload){var b=a.onunload;a.onunload=f,a.onunload.$old=b}}))}function z(a,b,d,e,f){if(c(b.attrs.config)){var g=f.configContext=f.configContext||{};a.push(function(){return b.attrs.config.call(b,d,!e,g,f)})}}function A(a,c,d,e,f,g,h,i){var j=a.nodes[0];return e&&V(j,c.tag,c.attrs,a.attrs,f),a.children=Q(j,c.tag,b,b,c.children,a.children,!1,0,c.attrs.contenteditable?j:d,f,h),a.nodes.intact=!0,i.length&&(a.views=g,a.controllers=i),j}function B(a,b,c){var d;a.$trusted?d=Z(b,c,a):(d=[va.createTextNode(a)],b.nodeName in Ca||q(b,d[0],c));var e;return e="string"==typeof a||"number"==typeof a||"boolean"==typeof a?new a.constructor(a):a,e.nodes=d,e}function C(a,b,c,d,e,f){var g=b.nodes;return d&&d===va.activeElement||(a.$trusted?(W(g,b),g=Z(c,e,a)):"textarea"===f?c.value=a:d?d.innerHTML=a:((1===g[0].nodeType||g.length>1||g[0].nodeValue.trim&&!g[0].nodeValue.trim())&&(W(b.nodes,b),g=[va.createTextNode(a)]),o(c,g[0],e,a))),b=new a.constructor(a),b.nodes=g,b}function D(a,b,c,d,e,f,g){return a.nodes.length?a.valueOf()!==b.valueOf()||e?C(b,a,d,f,c,g):(a.nodes.intact=!0,a):B(b,d,c)}function E(a){if(a.$trusted){var b=a.match(/<[^\/]|\>\s*[^<]/g);if(null!=b)return b.length}else if(Ba(a))return a.length;return 1}function F(a,c,d,e,f,g,h,i,j){a=p(a);var k=[],l=c.length===a.length,n=0,o={},q=!1;m(c,function(a,b){q=!0,o[c[b].attrs.key]={action:Da,index:b}}),u(a),q&&(c=s(a,c,o,d));for(var r=0,v=0,w=a.length;w>v;v++){var x=Q(d,f,c,e,a[v],c[r],g,e+n||n,h,i,j);x!==b&&(l=l&&x.nodes.intact,n+=E(x),c[r++]=x)}return l||t(a,c,k),c}function G(a,b,c,d,e){if(null!=b){if(Aa.call(b)===Aa.call(a))return b;if(e&&e.nodes){var f=c-d,g=f+(Ba(a)?a:b.nodes).length;W(e.nodes.slice(f,g),e.slice(f,g))}else b.nodes&&W(b.nodes,b)}return b=new a.constructor,b.tag&&(b={}),b.nodes=[],b}function H(a,b){return a.attrs.is?null==b?va.createElement(a.tag,a.attrs.is):va.createElementNS(b,a.tag,a.attrs.is):null==b?va.createElement(a.tag):va.createElementNS(b,a.tag)}function I(a,b,c,d){return d?V(b,a.tag,a.attrs,{},c):a.attrs}function J(a,c,d,e,f,g){return null!=a.children&&a.children.length>0?Q(c,a.tag,b,b,a.children,d.children,!0,0,a.attrs.contenteditable?c:e,f,g):a.children}function K(a,b,c,d,e,f,g){var h={tag:a.tag,attrs:b,children:c,nodes:[d]};return y(h,f,g),h.children&&!h.children.nodes&&(h.children.nodes=[]),"select"===a.tag&&"value"in a.attrs&&V(d,a.tag,{value:a.attrs.value},{},e),h}function L(a,b,d,e){var f;return f="diff"===k.redraw.strategy()&&a?a.indexOf(b):-1,f>-1?d[f]:c(e)?new e:{}}function M(a,b,c,d){null!=d.onunload&&Ia.map(function(a){return a.handler}).indexOf(d.onunload)<0&&Ia.push({controller:d,handler:d.onunload}),a.push(c),b.push(d)}function N(a,b,c,d,e,f){var g=L(c.views,b,d,a.controller),h=a&&a.attrs&&a.attrs.key;return a=0===Ga||Ja||d&&d.indexOf(g)>-1?a.view(g):{tag:"placeholder"},"retain"===a.subtree?a:(a.attrs=a.attrs||{},a.attrs.key=h,M(f,e,b,g),a)}function O(a,b,c,d){for(var e=b&&b.controllers;null!=a.view;)a=N(a,a.view.$original||a.view,b,e,d,c);return a}function P(a,b,c,d,f,g,h,i){var j=[],k=[];if(a=O(a,b,j,k),"retain"===a.subtree)return b;if(!a.tag&&k.length)throw new Error("Component template must return a virtual element, not an array, string, etc.");a.attrs=a.attrs||{},b.attrs=b.attrs||{};var l=Object.keys(a.attrs),m=l.length>("key"in a.attrs?1:0);if(w(a,b,l),e(a.tag)){var n=0===b.nodes.length;h=x(a,h);var o;if(n){o=H(a,h);var p=I(a,o,h,m),r=J(a,o,b,c,h,i);b=K(a,p,r,o,h,j,k)}else o=A(b,a,c,m,h,j,i,k);return(n||g===!0&&null!=o)&&q(d,o,f),z(i,a,o,n,b),b}}function Q(a,b,e,f,g,h,i,j,k,l,m){return g=n(g),"retain"===g.subtree?h:(h=G(g,h,j,f,e),Ba(g)?F(g,h,a,j,b,i,k,l,m):null!=g&&d(g)?P(g,h,k,a,j,i,l,m):c(g)?h:D(h,g,j,a,i,k,b))}function R(a,b){return a.action-b.action||a.index-b.index}function S(a,b,c){for(var d in b)za.call(b,d)&&(null==c||c[d]!==b[d])&&(a.style[d]=b[d]);for(d in c)za.call(c,d)&&(za.call(b,d)||(a.style[d]=""))}function T(a,b,e,f,g,h){if("config"===b||"key"===b)return!0;if(c(e)&&"on"===b.slice(0,2))a[b]=$(e,a);else if("style"===b&&null!=e&&d(e))S(a,e,f);else if(null!=h)"href"===b?a.setAttributeNS("http://www.w3.org/1999/xlink","href",e):a.setAttribute("className"===b?"class":b,e);else if(b in a&&!Ka[b])try{("input"!==g||a[b]!==e)&&(a[b]=e)}catch(i){a.setAttribute(b,e)}else a.setAttribute(b,e)}function U(a,b,c,d,e,f,g){if(b in e&&d===c)"value"===b&&"input"===f&&a.value!==c&&(a.value=c);else{e[b]=c;try{return T(a,b,c,d,f,g)}catch(h){if(h.message.indexOf("Invalid argument")<0)throw h}}}function V(a,b,c,d,e){for(var f in c)!za.call(c,f)||!U(a,f,c[f],d[f],d,b,e);return d}function W(a,b){for(var c=a.length-1;c>-1;c--)if(a[c]&&a[c].parentNode){try{a[c].parentNode.removeChild(a[c])}catch(d){}b=[].concat(b),b[c]&&X(b[c])}a.length&&(a.length=0)}function X(a){a.configContext&&c(a.configContext.onunload)&&(a.configContext.onunload(),a.configContext.onunload=null),a.controllers&&l(a.controllers,function(a){c(a.onunload)&&a.onunload({preventDefault:f})}),a.children&&(Ba(a.children)?l(a.children,X):a.children.tag&&X(a.children))}function Y(a,b){try{a.appendChild(va.createRange().createContextualFragment(b))}catch(c){a.insertAdjacentHTML("beforeend",b)}}function Z(a,b,c){var d=a.childNodes[b];if(d){var e=1!==d.nodeType,f=va.createElement("span");e?(a.insertBefore(f,d||null),f.insertAdjacentHTML("beforebegin",c),a.removeChild(f)):d.insertAdjacentHTML("beforebegin",c)}else Y(a,c);for(var g=[];a.childNodes[b]!==d;)g.push(a.childNodes[b]),b++;return g}function $(a,b){return function(c){c=c||event,k.redraw.strategy("diff"),k.startComputation();try{return a.call(b,c)}finally{fa()}}}function _(a){var b=Ma.indexOf(a);return 0>b?Ma.push(a)-1:b}function aa(a){function b(){return arguments.length&&(a=arguments[0]),a}return b.toJSON=function(){return a},b}function ba(a,b){function c(){return(a.controller||f).apply(this,b)||this}function d(c){for(var d=[c].concat(b),e=1;e<arguments.length;e++)d.push(arguments[e]);return a.view.apply(a,d)}a.controller&&(c.prototype=a.controller.prototype),d.$original=a.view;var e={controller:c,view:d};return b[0]&&null!=b[0].key&&(e.attrs={key:b[0].key}),e}function ca(a,b,c,d){if(!d){k.redraw.strategy("all"),k.startComputation(),Pa[c]=b;var e;e=Oa=a?a:a={controller:f};var g=new(a.controller||f);return e===Oa&&(Ra[c]=g,Qa[c]=a),fa(),null===a&&da(b,c),Ra[c]}null==a&&da(b,c)}function da(a,b){Pa.splice(b,1),Ra.splice(b,1),Qa.splice(b,1),ma(a),Ma.splice(_(a),1)}function ea(){Ua&&(Ua(),Ua=null),l(Pa,function(a,b){var c=Qa[b];if(Ra[b]){var d=[Ra[b]];k.render(a,c.view?c.view(Ra[b],d):"")}}),Va&&(Va(),Va=null),Sa=null,Ta=new Date,k.redraw.strategy("diff")}function fa(){"none"===k.redraw.strategy()?(Ga--,k.redraw.strategy("diff")):k.endComputation()}function ga(a){return a.slice($a[k.route.mode].length)}function ha(a,b,c){Ya={};var d=c.indexOf("?");-1!==d&&(Ya=la(c.substr(d+1,c.length)),c=c.substr(0,d));var e=Object.keys(b),f=e.indexOf(c);if(-1!==f)return k.mount(a,b[e[f]]),!0;for(var g in b)if(za.call(b,g)){if(g===c)return k.mount(a,b[g]),!0;var h=new RegExp("^"+g.replace(/:[^\/]+?\.{3}/g,"(.*?)").replace(/:[^\/]+/g,"([^\\/]+)")+"/?$");if(h.test(c))return c.replace(h,function(){var c=g.match(/:[^\/]+/g)||[],d=[].slice.call(arguments,1,-2);l(c,function(a,b){Ya[a.replace(/:|\./g,"")]=decodeURIComponent(d[b])}),k.mount(a,b[g])}),!0}}function ia(a){if(a=a||event,!(a.ctrlKey||a.metaKey||a.shiftKey||2===a.which)){a.preventDefault?a.preventDefault():a.returnValue=!1;var b,c=a.currentTarget||a.srcElement;for(b="pathname"===k.route.mode&&c.search?la(c.search.slice(1)):{};c&&!/a/i.test(c.nodeName);)c=c.parentNode;Ga=0,k.route(c[k.route.mode].slice($a[k.route.mode].length),b)}}function ja(){"hash"!==k.route.mode&&wa.hash?wa.hash=wa.hash:a.scrollTo(0,0)}function ka(a,c){var e={},f=[];for(var g in a)if(za.call(a,g)){var h=c?c+"["+g+"]":g,i=a[g];if(null===i)f.push(encodeURIComponent(h));else if(d(i))f.push(ka(i,h));else if(Ba(i)){var j=[];e[h]=e[h]||{},l(i,function(a){e[h][a]||(e[h][a]=!0,j.push(encodeURIComponent(h)+"="+encodeURIComponent(a)))}),f.push(j.join("&"))}else i!==b&&f.push(encodeURIComponent(h)+"="+encodeURIComponent(i))}return f.join("&")}function la(a){if(""===a||null==a)return{};"?"===a.charAt(0)&&(a=a.slice(1));var b=a.split("&"),c={};return l(b,function(a){var b=a.split("="),d=decodeURIComponent(b[0]),e=2===b.length?decodeURIComponent(b[1]):null;null!=c[d]?(Ba(c[d])||(c[d]=[c[d]]),c[d].push(e)):c[d]=e}),c}function ma(a){var c=_(a);W(a.childNodes,Na[c]),Na[c]=b}function na(a,b){var c=k.prop(b);return a.then(c),c.then=function(c,d){return na(a.then(c,d),b)},c["catch"]=c.then.bind(null,null),c}function oa(a,b){function e(a){i=a||eb,l.map(function(a){i===db?a.resolve(j):a.reject(j)})}function f(a,b,e,f){if((null!=j&&d(j)||c(j))&&c(a))try{var g=0;a.call(j,function(a){g++||(j=a,b())},function(a){g++||(j=a,e())})}catch(h){k.deferred.onerror(h),j=h,e()}else f()}function g(){var d;try{d=j&&j.then}catch(l){return k.deferred.onerror(l),j=l,i=cb,g()}i===cb&&k.deferred.onerror(j),f(d,function(){i=bb,g()},function(){i=cb,g()},function(){try{i===bb&&c(a)?j=a(j):i===cb&&c(b)&&(j=b(j),i=bb)}catch(g){return k.deferred.onerror(g),j=g,e()}j===h?(j=TypeError(),e()):f(d,function(){e(db)},e,function(){e(i===bb&&db)})})}var h=this,i=0,j=0,l=[];h.promise={},h.resolve=function(a){return i||(j=a,i=bb,g()),h},h.reject=function(a){return i||(j=a,i=cb,g()),h},h.promise.then=function(a,b){var c=new oa(a,b);return i===db?c.resolve(j):i===eb?c.reject(j):l.push(c),c.promise}}function pa(a){return a}function qa(c){var d="mithril_callback_"+(new Date).getTime()+"_"+Math.round(1e16*Math.random()).toString(36),e=va.createElement("script");a[d]=function(f){e.parentNode.removeChild(e),c.onload({type:"load",target:{responseText:f}}),a[d]=b},e.onerror=function(){return e.parentNode.removeChild(e),c.onerror({type:"error",target:{status:500,responseText:JSON.stringify({error:"Error making jsonp request"})}}),a[d]=b,!1},e.onload=function(){return!1},e.src=c.url+(c.url.indexOf("?")>0?"&":"?")+(c.callbackKey?c.callbackKey:"callback")+"="+d+"&"+ka(c.data||{}),va.body.appendChild(e)}function ra(b){var d=new a.XMLHttpRequest;if(d.open(b.method,b.url,!0,b.user,b.password),d.onreadystatechange=function(){4===d.readyState&&(d.status>=200&&d.status<300?b.onload({type:"load",target:d}):b.onerror({type:"error",target:d}))},b.serialize===JSON.stringify&&b.data&&"GET"!==b.method&&d.setRequestHeader("Content-Type","application/json; charset=utf-8"),b.deserialize===JSON.parse&&d.setRequestHeader("Accept","application/json, text/*"),c(b.config)){var f=b.config(d,b);null!=f&&(d=f)}var g="GET"!==b.method&&b.data?b.data:"";if(g&&!e(g)&&g.constructor!==a.FormData)throw new Error("Request data should be either be a string or FormData. Check the `serialize` option in `m.request`");return d.send(g),d}function sa(a){return a.dataType&&"jsonp"===a.dataType.toLowerCase()?qa(a):ra(a)}function ta(a,b,c){if("GET"===a.method&&"jsonp"!==a.dataType){var d=a.url.indexOf("?")<0?"?":"&",e=ka(b);a.url+=e?d+e:""}else a.data=c(b)}function ua(a,b){return b&&(a=a.replace(/:[a-z]\w+/gi,function(a){var c=a.slice(1),d=b[c];return delete b[c],d})),a}k.version=function(){return"v0.2.3"};var va,wa,xa,ya,za={}.hasOwnProperty,Aa={}.toString,Ba=Array.isArray||function(a){return"[object Array]"===Aa.call(a)},Ca={AREA:1,BASE:1,BR:1,COL:1,COMMAND:1,EMBED:1,HR:1,IMG:1,INPUT:1,KEYGEN:1,LINK:1,META:1,PARAM:1,SOURCE:1,TRACK:1,WBR:1};k.deps=function(b){return g(a=b||window),a},k.deps(a);var Da=1,Ea=2,Fa=3,Ga=0;k.startComputation=function(){Ga++},k.endComputation=function(){Ga>1?Ga--:(Ga=0,k.redraw())};var Ha,Ia=[],Ja=!1,Ka={list:1,style:1,form:1,type:1,width:1,height:1},La={appendChild:function(a){Ha===b&&(Ha=va.createElement("html")),va.documentElement&&va.documentElement!==a?va.replaceChild(a,va.documentElement):va.appendChild(a),this.childNodes=va.childNodes},insertBefore:function(a){this.appendChild(a)},childNodes:[]},Ma=[],Na={};k.render=function(a,c,d){if(!a)throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");var e,f=[],g=_(a),h=a===va;e=h||a===va.documentElement?La:a,h&&"html"!==c.tag&&(c={tag:"html",attrs:{},children:c}),Na[g]===b&&W(e.childNodes),d===!0&&ma(a),Na[g]=Q(e,null,b,b,c,Na[g],!1,0,null,b,f),l(f,function(a){a()})},k.trust=function(a){return a=new String(a),a.$trusted=!0,a},k.prop=function(a){return(null!=a&&d(a)||c(a))&&c(a.then)?na(a):aa(a)};var Oa,Pa=[],Qa=[],Ra=[],Sa=null,Ta=0,Ua=null,Va=null,Wa=16;k.component=function(a){for(var b=new Array(arguments.length-1),c=1;c<arguments.length;c++)b[c-1]=arguments[c];return ba(a,b)},k.mount=k.module=function(a,b){if(!a)throw new Error("Please ensure the DOM element exists before rendering a template into it.");var d=Pa.indexOf(a);0>d&&(d=Pa.length);var e=!1,f={preventDefault:function(){e=!0,Ua=Va=null}};return l(Ia,function(a){a.handler.call(a.controller,f),a.controller.onunload=null}),e?l(Ia,function(a){a.controller.onunload=a.handler}):Ia=[],Ra[d]&&c(Ra[d].onunload)&&Ra[d].onunload(f),ca(b,a,d,e)};var Xa=!1;k.redraw=function(b){if(!Xa){Xa=!0,b&&(Ja=!0);try{Sa&&!b?(xa===a.requestAnimationFrame||new Date-Ta>Wa)&&(Sa>0&&ya(Sa),Sa=xa(ea,Wa)):(ea(),Sa=xa(function(){Sa=null},Wa))}finally{Xa=Ja=!1}}},k.redraw.strategy=k.prop(),k.withAttr=function(a,b,c){return function(d){d=d||window.event;var e=d.currentTarget||this,f=c||this,g=a in e?e[a]:e.getAttribute(a);b.call(f,g)}};var Ya,Za,$a={pathname:"",hash:"#",search:"?"},_a=f,ab=!1;k.route=function(b,c,d,f){if(0===arguments.length)return Za;if(3===arguments.length&&e(c)){_a=function(a){var e=Za=ga(a);if(!ha(b,d,e)){if(ab)throw new Error("Ensure the default route matches one of the routes defined in m.route");ab=!0,k.route(c,!0),ab=!1}};var g="hash"===k.route.mode?"onhashchange":"onpopstate";return a[g]=function(){var a=wa[k.route.mode];"pathname"===k.route.mode&&(a+=wa.search),Za!==ga(a)&&_a(a)},Ua=ja,void a[g]()}if(b.addEventListener||b.attachEvent){var h="pathname"!==k.route.mode?wa.pathname:"";return b.href=h+$a[k.route.mode]+f.attrs.href,void(b.addEventListener?(b.removeEventListener("click",ia),b.addEventListener("click",ia)):(b.detachEvent("onclick",ia),b.attachEvent("onclick",ia)))}if(e(b)){var i=Za;Za=b;var j,l=c||{},m=Za.indexOf("?");j=m>-1?la(Za.slice(m+1)):{};for(var n in l)za.call(l,n)&&(j[n]=l[n]);var o,p=ka(j);o=m>-1?Za.slice(0,m):Za,p&&(Za=o+(-1===o.indexOf("?")?"?":"&")+p);var q=(3===arguments.length?d:c)===!0||i===b;if(a.history.pushState){var r=q?"replaceState":"pushState";Ua=ja,Va=function(){a.history[r](null,va.title,$a[k.route.mode]+Za)},_a($a[k.route.mode]+Za)}else wa[k.route.mode]=Za,_a($a[k.route.mode]+Za)}},k.route.param=function(a){if(!Ya)throw new Error("You must call m.route(element, defaultRoute, routes) before calling m.route.param()");return a?Ya[a]:Ya},k.route.mode="search",k.route.buildQueryString=ka,k.route.parseQueryString=la,k.deferred=function(){var a=new oa;return a.promise=na(a.promise),a};var bb=1,cb=2,db=3,eb=4;return k.deferred.onerror=function(a){if("[object Error]"===Aa.call(a)&&!/ Error/.test(a.constructor.toString()))throw Ga=0,a},k.sync=function(a){function b(a,b){return function(g){return e[a]=g,b||(f="reject"),0===--d&&(c.promise(e),c[f](e)),g}}var c=k.deferred(),d=a.length,e=[],f="resolve";return a.length>0?l(a,function(a,c){a.then(b(c,!0),b(c,!1))}):c.resolve([]),c.promise},k.request=function(a){a.background!==!0&&k.startComputation();var b,c,d,e=new oa,f=a.dataType&&"jsonp"===a.dataType.toLowerCase();return f?(b=a.serialize=c=a.deserialize=pa,d=function(a){return a.responseText}):(b=a.serialize=a.serialize||JSON.stringify,c=a.deserialize=a.deserialize||JSON.parse,d=a.extract||function(a){return a.responseText.length||c!==JSON.parse?a.responseText:null}),a.method=(a.method||"GET").toUpperCase(),a.url=ua(a.url,a.data),ta(a,a.data,b),a.onload=a.onerror=function(b){try{b=b||event;var f=c(d(b.target,a));"load"===b.type?(a.unwrapSuccess&&(f=a.unwrapSuccess(f,b.target)),Ba(f)&&a.type?l(f,function(b,c){f[c]=new a.type(b)}):a.type&&(f=new a.type(f)),e.resolve(f)):(a.unwrapError&&(f=a.unwrapError(f,b.target)),e.reject(f))}catch(g){e.reject(g),k.deferred.onerror(g)}finally{a.background!==!0&&k.endComputation()}},sa(a),e.promise=na(e.promise,a.initialValue),e.promise},k});
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
	
	var _stgrage = __webpack_require__(8);
	
	var _stgrage2 = _interopRequireDefault(_stgrage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import DB from "./helper/db";
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
	        vm.rejectList = new _words2.default.List();
	        vm.strage.words.get().then(function (res) {
	            if (res) {
	                vm.addAll(vm.wordList, res);
	            }
	        });
	        return;
	    },
	    add: function add() {
	        var list = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	        var addItem = arguments[1];
	
	        if (addItem) {
	            list.push(new _words2.default.Item(addItem));
	            return;
	        }
	    },
	    addAll: function addAll() {
	        var list = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	        var addList = arguments[1];
	
	        addList.map(function (addItem) {
	            return vm.add(list, addItem);
	        });
	        return;
	    },
	    addCheck: function addCheck(addItem) {
	        if (addItem) {
	            vm.checkList.push(new _check2.default.Item(addItem));
	        }
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
	            return res;
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
	    * getNextWord1
	    * @param{Function} [num] 配列インデックス、m.prop(0)で作成したgetter-setter関数
	    * @param{Function} [limit] 配列インデックスのインクリメントを行う関数
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
	            // console.error(e.message);
	            return;
	        }
	    },
	    checkEndFlag: function checkEndFlag(limit) {
	        var result = _underscore2.default.countBy(vm.checkList, function (item) {
	            return item.flag() ? "ok" : "no";
	        });
	        return limit() + 1 === result.ok;
	    },
	    save: function save(data) {
	        vm.strage.set(data);
	    },
	    fetch: function fetch(key) {
	        vm.strage.key(key || "words");
	        return vm.strage.get();
	    },
	    reload: function reload() {
	        vm.wordList = undefined;
	        vm.wordList = new _words2.default.List();
	        vm.strage.words.get().then(function (res) {
	            vm.addAll(vm.wordList, res);
	        });
	    },
	    strage: {
	        words: new _stgrage2.default("words")
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
	        this.rowid = _mithril2.default.prop(args.rowid);
	        this.ja = _mithril2.default.prop(args.ja);
	        this.en = _mithril2.default.prop(args.en);
	        this.flag = _mithril2.default.prop(args.flag || false);
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
	        this.rowid = _mithril2.default.prop(args.rowid);
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
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Localstrage = function () {
	    function Localstrage(name) {
	        _classCallCheck(this, Localstrage);
	
	        this.localStorage = window.localStorage;
	        this.key = _mithril2.default.prop(name);
	    }
	
	    _createClass(Localstrage, [{
	        key: "set",
	        value: function set(value) {
	            this.localStorage.setItem(this.key(), JSON.stringify(value));
	        }
	    }, {
	        key: "get",
	        value: function get() {
	            var d = _mithril2.default.deferred();
	            d.resolve(JSON.parse(this.localStorage.getItem(this.key())));
	            return d.promise;
	        }
	    }]);
	
	    return Localstrage;
	}();
	
	exports.default = Localstrage;

/***/ },
/* 9 */
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
	
	var _check = __webpack_require__(7);
	
	var _check2 = _interopRequireDefault(_check);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// import window from "window";
	
	var CheckRun = function () {
	    function CheckRun() {
	        var _this = this;
	
	        _classCallCheck(this, CheckRun);
	
	        this.i = m.prop(0);
	        this.word = m.prop([]);
	        this.view = m.prop(false);
	        this.limit = m.prop(0);
	        this.animationFlag = m.prop(false);
	        this.navbar = _store2.default.scene.checkRun.navbar;
	        _store2.default.getUrlParam("id").then(function (res) {
	            _this.limit(res() - 1);
	            _store2.default.strage.words.get().then(function (data) {
	                var resData = (0, _underscore2.default)(data).filter(function (item) {
	                    return item.flag === false;
	                });
	                _store2.default.addCheckAll((0, _underscore2.default)(resData).shuffle());
	                _store2.default.addAll(_store2.default.rejectList, (0, _underscore2.default)(data).filter(function (item) {
	                    return item.flag === true;
	                }));
	                if (_store2.default.checkList.length === 0) return m.route("/words");
	                if (_store2.default.checkList.length < res()) {
	                    _this.limit(_store2.default.checkList.length - 1);
	                }
	                _this.getNextWord();
	                return;
	            });
	        });
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
	    }, {
	        key: "t_act",
	        value: function t_act() {
	            if (this.view()) return;
	            m.startComputation();
	            this.isView();
	            m.endComputation();
	            return;
	        }
	    }, {
	        key: "l_act",
	        value: function l_act() {
	            this.getNextWord();
	            m.endComputation();
	            return;
	        }
	    }, {
	        key: "r_act",
	        value: function r_act() {
	            m.startComputation();
	            this.isFlag();
	            if (this.checkEndFlag()) {
	                m.route("/home");
	                m.endComputation();
	            } else {
	                this.getNextWord();
	                m.endComputation();
	            }
	            return;
	        }
	    }, {
	        key: "onunload",
	        value: function onunload() {
	            _store2.default.strage.words.set(_underscore2.default.union(_store2.default.checkList, _store2.default.rejectList));
	            _store2.default.checkList = undefined;
	            _store2.default.checkList = new _check2.default.List();
	        }
	    }]);
	
	    return CheckRun;
	}();
	
	exports.default = CheckRun;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _navbar = __webpack_require__(3);
	
	var _navbar2 = _interopRequireDefault(_navbar);
	
	var _homeMenu = __webpack_require__(11);
	
	var _homeMenu2 = _interopRequireDefault(_homeMenu);
	
	var _home = __webpack_require__(12);
	
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
/* 11 */
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
/* 12 */
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
	
	    _store2.default.reload();
	    this.navbar = _store2.default.scene.home.navbar;
	    this.menu = _store2.default.scene.home.content.menu;
	};
	
	exports.default = Home;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _navbar = __webpack_require__(3);
	
	var _navbar2 = _interopRequireDefault(_navbar);
	
	var _wordList = __webpack_require__(14);
	
	var _wordList2 = _interopRequireDefault(_wordList);
	
	var _words = __webpack_require__(15);
	
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
/* 14 */
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _store = __webpack_require__(4);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// import Model from "../model/words";
	
	var Words = function () {
	    function Words() {
	        _classCallCheck(this, Words);
	
	        // vm.reload();
	        this.navbar = _store2.default.scene.words.navbar;
	        this.wordList = _store2.default.wordList;
	    }
	
	    _createClass(Words, [{
	        key: "onunload",
	        value: function onunload() {
	            _store2.default.strage.words.set(this.wordList);
	        }
	    }]);
	
	    return Words;
	}();
	
	exports.default = Words;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _navbar = __webpack_require__(3);
	
	var _navbar2 = _interopRequireDefault(_navbar);
	
	var _wordCard = __webpack_require__(17);
	
	var _wordCard2 = _interopRequireDefault(_wordCard);
	
	var _wordsNew = __webpack_require__(18);
	
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
/* 17 */
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
/* 18 */
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
	            // vm.db.insert({
	            //     name: "words",
	            //     data: {
	            //         en: "'" + this.en() + "'",
	            //         ja: "'" + this.ja() + "'",
	            //         flag: 0
	            //     }
	            // });
	            this.en("");
	            this.ja("");
	            if (!continu) {
	                _mithril2.default.route("/words");
	            }
	        }
	    }, {
	        key: "onunload",
	        value: function onunload() {
	            _store2.default.strage.words.set(_store2.default.wordList);
	        }
	    }]);
	
	    return WordsNew;
	}();
	
	exports.default = WordsNew;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _navbar = __webpack_require__(3);
	
	var _navbar2 = _interopRequireDefault(_navbar);
	
	var _wordCard = __webpack_require__(17);
	
	var _wordCard2 = _interopRequireDefault(_wordCard);
	
	var _WordsEdit = __webpack_require__(20);
	
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
/* 20 */
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
	            // this.index = m.prop(vm.wordList[res()].rowid());
	            _this.en = _mithril2.default.prop(_store2.default.wordList[res()].en());
	            _this.ja = _mithril2.default.prop(_store2.default.wordList[res()].ja());
	            // this.flag = m.prop(vm.wordList[res()].flag());
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
	    }, {
	        key: "onunload",
	        value: function onunload() {
	            _store2.default.strage.words.set(_store2.default.wordList);
	        }
	    }]);
	
	    return WordsEdit;
	}();
	
	exports.default = WordsEdit;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _navbar = __webpack_require__(3);
	
	var _navbar2 = _interopRequireDefault(_navbar);
	
	var _limitSelectCard = __webpack_require__(22);
	
	var _limitSelectCard2 = _interopRequireDefault(_limitSelectCard);
	
	var _check = __webpack_require__(24);
	
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _select = __webpack_require__(23);
	
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
/* 23 */
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
/* 24 */
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
	
	        // vm.reload();
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _navbar = __webpack_require__(3);
	
	var _navbar2 = _interopRequireDefault(_navbar);
	
	var _checkCard = __webpack_require__(26);
	
	var _checkCard2 = _interopRequireDefault(_checkCard);
	
	var _checkRun = __webpack_require__(9);
	
	var _checkRun2 = _interopRequireDefault(_checkRun);
	
	var _checkButtons = __webpack_require__(28);
	
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
	            isAnimation: ctrl.animationFlag,
	            flex: "4",
	            t_act: function t_act() {
	                return ctrl.t_act();
	            },
	            l_act: function l_act() {
	                return ctrl.l_act();
	            },
	            r_act: function r_act() {
	                return ctrl.r_act();
	            },
	            view: ctrl.view
	        }), (0, _mithril2.default)("hr"), (0, _checkButtons2.default)({
	            flex: "1",
	            r: {
	                action: function action() {
	                    return ctrl.r_act();
	                },
	                label: "わかる"
	            },
	            l: {
	                action: function action() {
	                    return ctrl.l_act();
	                },
	                label: "わからない"
	            }
	        })])]);
	    }
	};
	
	exports.default = CheckRun;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _hammerjs = __webpack_require__(27);
	
	var _hammerjs2 = _interopRequireDefault(_hammerjs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var checkCard = function checkCard(args) {
	    return (0, _mithril2.default)(".card displayFlex", {
	        // "class": args.isAnimation() ? "animated fadeOutRight" : "",
	        "style": {
	            "flex": args.flex,
	            "margin-bottom": "1rem",
	            "align-items": "center"
	        },
	        "config": function config(element, isInit) {
	            var hammer = new _hammerjs2.default(element);
	            try {
	                if (isInit) return;
	                hammer.on("swipeleft", function () {
	                    return args.l_act(element);
	                });
	                hammer.on("swiperight", function () {
	                    return args.r_act(element);
	                });
	                hammer.on("tap", function () {
	                    return args.t_act();
	                });
	                return;
	            } catch (e) {
	                console.log(e);
	                throw new Error("hammerJs swaip & tap events undefined");
	            }
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
	 * http://hammerjs.github.io/
	 *
	 * Copyright (c) 2016 Jorik Tangelder;
	 * Licensed under the MIT license */
	(function(window, document, exportName, undefined) {
	  'use strict';
	
	var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
	var TEST_ELEMENT = document.createElement('div');
	
	var TYPE_FUNCTION = 'function';
	
	var round = Math.round;
	var abs = Math.abs;
	var now = Date.now;
	
	/**
	 * set a timeout with a given scope
	 * @param {Function} fn
	 * @param {Number} timeout
	 * @param {Object} context
	 * @returns {number}
	 */
	function setTimeoutContext(fn, timeout, context) {
	    return setTimeout(bindFn(fn, context), timeout);
	}
	
	/**
	 * if the argument is an array, we want to execute the fn on each entry
	 * if it aint an array we don't want to do a thing.
	 * this is used by all the methods that accept a single and array argument.
	 * @param {*|Array} arg
	 * @param {String} fn
	 * @param {Object} [context]
	 * @returns {Boolean}
	 */
	function invokeArrayArg(arg, fn, context) {
	    if (Array.isArray(arg)) {
	        each(arg, context[fn], context);
	        return true;
	    }
	    return false;
	}
	
	/**
	 * walk objects and arrays
	 * @param {Object} obj
	 * @param {Function} iterator
	 * @param {Object} context
	 */
	function each(obj, iterator, context) {
	    var i;
	
	    if (!obj) {
	        return;
	    }
	
	    if (obj.forEach) {
	        obj.forEach(iterator, context);
	    } else if (obj.length !== undefined) {
	        i = 0;
	        while (i < obj.length) {
	            iterator.call(context, obj[i], i, obj);
	            i++;
	        }
	    } else {
	        for (i in obj) {
	            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
	        }
	    }
	}
	
	/**
	 * wrap a method with a deprecation warning and stack trace
	 * @param {Function} method
	 * @param {String} name
	 * @param {String} message
	 * @returns {Function} A new function wrapping the supplied method.
	 */
	function deprecate(method, name, message) {
	    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
	    return function() {
	        var e = new Error('get-stack-trace');
	        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
	            .replace(/^\s+at\s+/gm, '')
	            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';
	
	        var log = window.console && (window.console.warn || window.console.log);
	        if (log) {
	            log.call(window.console, deprecationMessage, stack);
	        }
	        return method.apply(this, arguments);
	    };
	}
	
	/**
	 * extend object.
	 * means that properties in dest will be overwritten by the ones in src.
	 * @param {Object} target
	 * @param {...Object} objects_to_assign
	 * @returns {Object} target
	 */
	var assign;
	if (typeof Object.assign !== 'function') {
	    assign = function assign(target) {
	        if (target === undefined || target === null) {
	            throw new TypeError('Cannot convert undefined or null to object');
	        }
	
	        var output = Object(target);
	        for (var index = 1; index < arguments.length; index++) {
	            var source = arguments[index];
	            if (source !== undefined && source !== null) {
	                for (var nextKey in source) {
	                    if (source.hasOwnProperty(nextKey)) {
	                        output[nextKey] = source[nextKey];
	                    }
	                }
	            }
	        }
	        return output;
	    };
	} else {
	    assign = Object.assign;
	}
	
	/**
	 * extend object.
	 * means that properties in dest will be overwritten by the ones in src.
	 * @param {Object} dest
	 * @param {Object} src
	 * @param {Boolean} [merge=false]
	 * @returns {Object} dest
	 */
	var extend = deprecate(function extend(dest, src, merge) {
	    var keys = Object.keys(src);
	    var i = 0;
	    while (i < keys.length) {
	        if (!merge || (merge && dest[keys[i]] === undefined)) {
	            dest[keys[i]] = src[keys[i]];
	        }
	        i++;
	    }
	    return dest;
	}, 'extend', 'Use `assign`.');
	
	/**
	 * merge the values from src in the dest.
	 * means that properties that exist in dest will not be overwritten by src
	 * @param {Object} dest
	 * @param {Object} src
	 * @returns {Object} dest
	 */
	var merge = deprecate(function merge(dest, src) {
	    return extend(dest, src, true);
	}, 'merge', 'Use `assign`.');
	
	/**
	 * simple class inheritance
	 * @param {Function} child
	 * @param {Function} base
	 * @param {Object} [properties]
	 */
	function inherit(child, base, properties) {
	    var baseP = base.prototype,
	        childP;
	
	    childP = child.prototype = Object.create(baseP);
	    childP.constructor = child;
	    childP._super = baseP;
	
	    if (properties) {
	        assign(childP, properties);
	    }
	}
	
	/**
	 * simple function bind
	 * @param {Function} fn
	 * @param {Object} context
	 * @returns {Function}
	 */
	function bindFn(fn, context) {
	    return function boundFn() {
	        return fn.apply(context, arguments);
	    };
	}
	
	/**
	 * let a boolean value also be a function that must return a boolean
	 * this first item in args will be used as the context
	 * @param {Boolean|Function} val
	 * @param {Array} [args]
	 * @returns {Boolean}
	 */
	function boolOrFn(val, args) {
	    if (typeof val == TYPE_FUNCTION) {
	        return val.apply(args ? args[0] || undefined : undefined, args);
	    }
	    return val;
	}
	
	/**
	 * use the val2 when val1 is undefined
	 * @param {*} val1
	 * @param {*} val2
	 * @returns {*}
	 */
	function ifUndefined(val1, val2) {
	    return (val1 === undefined) ? val2 : val1;
	}
	
	/**
	 * addEventListener with multiple events at once
	 * @param {EventTarget} target
	 * @param {String} types
	 * @param {Function} handler
	 */
	function addEventListeners(target, types, handler) {
	    each(splitStr(types), function(type) {
	        target.addEventListener(type, handler, false);
	    });
	}
	
	/**
	 * removeEventListener with multiple events at once
	 * @param {EventTarget} target
	 * @param {String} types
	 * @param {Function} handler
	 */
	function removeEventListeners(target, types, handler) {
	    each(splitStr(types), function(type) {
	        target.removeEventListener(type, handler, false);
	    });
	}
	
	/**
	 * find if a node is in the given parent
	 * @method hasParent
	 * @param {HTMLElement} node
	 * @param {HTMLElement} parent
	 * @return {Boolean} found
	 */
	function hasParent(node, parent) {
	    while (node) {
	        if (node == parent) {
	            return true;
	        }
	        node = node.parentNode;
	    }
	    return false;
	}
	
	/**
	 * small indexOf wrapper
	 * @param {String} str
	 * @param {String} find
	 * @returns {Boolean} found
	 */
	function inStr(str, find) {
	    return str.indexOf(find) > -1;
	}
	
	/**
	 * split string on whitespace
	 * @param {String} str
	 * @returns {Array} words
	 */
	function splitStr(str) {
	    return str.trim().split(/\s+/g);
	}
	
	/**
	 * find if a array contains the object using indexOf or a simple polyFill
	 * @param {Array} src
	 * @param {String} find
	 * @param {String} [findByKey]
	 * @return {Boolean|Number} false when not found, or the index
	 */
	function inArray(src, find, findByKey) {
	    if (src.indexOf && !findByKey) {
	        return src.indexOf(find);
	    } else {
	        var i = 0;
	        while (i < src.length) {
	            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
	                return i;
	            }
	            i++;
	        }
	        return -1;
	    }
	}
	
	/**
	 * convert array-like objects to real arrays
	 * @param {Object} obj
	 * @returns {Array}
	 */
	function toArray(obj) {
	    return Array.prototype.slice.call(obj, 0);
	}
	
	/**
	 * unique array with objects based on a key (like 'id') or just by the array's value
	 * @param {Array} src [{id:1},{id:2},{id:1}]
	 * @param {String} [key]
	 * @param {Boolean} [sort=False]
	 * @returns {Array} [{id:1},{id:2}]
	 */
	function uniqueArray(src, key, sort) {
	    var results = [];
	    var values = [];
	    var i = 0;
	
	    while (i < src.length) {
	        var val = key ? src[i][key] : src[i];
	        if (inArray(values, val) < 0) {
	            results.push(src[i]);
	        }
	        values[i] = val;
	        i++;
	    }
	
	    if (sort) {
	        if (!key) {
	            results = results.sort();
	        } else {
	            results = results.sort(function sortUniqueArray(a, b) {
	                return a[key] > b[key];
	            });
	        }
	    }
	
	    return results;
	}
	
	/**
	 * get the prefixed property
	 * @param {Object} obj
	 * @param {String} property
	 * @returns {String|Undefined} prefixed
	 */
	function prefixed(obj, property) {
	    var prefix, prop;
	    var camelProp = property[0].toUpperCase() + property.slice(1);
	
	    var i = 0;
	    while (i < VENDOR_PREFIXES.length) {
	        prefix = VENDOR_PREFIXES[i];
	        prop = (prefix) ? prefix + camelProp : property;
	
	        if (prop in obj) {
	            return prop;
	        }
	        i++;
	    }
	    return undefined;
	}
	
	/**
	 * get a unique id
	 * @returns {number} uniqueId
	 */
	var _uniqueId = 1;
	function uniqueId() {
	    return _uniqueId++;
	}
	
	/**
	 * get the window object of an element
	 * @param {HTMLElement} element
	 * @returns {DocumentView|Window}
	 */
	function getWindowForElement(element) {
	    var doc = element.ownerDocument || element;
	    return (doc.defaultView || doc.parentWindow || window);
	}
	
	var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
	
	var SUPPORT_TOUCH = ('ontouchstart' in window);
	var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
	var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
	
	var INPUT_TYPE_TOUCH = 'touch';
	var INPUT_TYPE_PEN = 'pen';
	var INPUT_TYPE_MOUSE = 'mouse';
	var INPUT_TYPE_KINECT = 'kinect';
	
	var COMPUTE_INTERVAL = 25;
	
	var INPUT_START = 1;
	var INPUT_MOVE = 2;
	var INPUT_END = 4;
	var INPUT_CANCEL = 8;
	
	var DIRECTION_NONE = 1;
	var DIRECTION_LEFT = 2;
	var DIRECTION_RIGHT = 4;
	var DIRECTION_UP = 8;
	var DIRECTION_DOWN = 16;
	
	var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
	var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
	var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
	
	var PROPS_XY = ['x', 'y'];
	var PROPS_CLIENT_XY = ['clientX', 'clientY'];
	
	/**
	 * create new input type manager
	 * @param {Manager} manager
	 * @param {Function} callback
	 * @returns {Input}
	 * @constructor
	 */
	function Input(manager, callback) {
	    var self = this;
	    this.manager = manager;
	    this.callback = callback;
	    this.element = manager.element;
	    this.target = manager.options.inputTarget;
	
	    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
	    // so when disabled the input events are completely bypassed.
	    this.domHandler = function(ev) {
	        if (boolOrFn(manager.options.enable, [manager])) {
	            self.handler(ev);
	        }
	    };
	
	    this.init();
	
	}
	
	Input.prototype = {
	    /**
	     * should handle the inputEvent data and trigger the callback
	     * @virtual
	     */
	    handler: function() { },
	
	    /**
	     * bind the events
	     */
	    init: function() {
	        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
	        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
	        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
	    },
	
	    /**
	     * unbind the events
	     */
	    destroy: function() {
	        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
	        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
	        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
	    }
	};
	
	/**
	 * create new input type manager
	 * called by the Manager constructor
	 * @param {Hammer} manager
	 * @returns {Input}
	 */
	function createInputInstance(manager) {
	    var Type;
	    var inputClass = manager.options.inputClass;
	
	    if (inputClass) {
	        Type = inputClass;
	    } else if (SUPPORT_POINTER_EVENTS) {
	        Type = PointerEventInput;
	    } else if (SUPPORT_ONLY_TOUCH) {
	        Type = TouchInput;
	    } else if (!SUPPORT_TOUCH) {
	        Type = MouseInput;
	    } else {
	        Type = TouchMouseInput;
	    }
	    return new (Type)(manager, inputHandler);
	}
	
	/**
	 * handle input events
	 * @param {Manager} manager
	 * @param {String} eventType
	 * @param {Object} input
	 */
	function inputHandler(manager, eventType, input) {
	    var pointersLen = input.pointers.length;
	    var changedPointersLen = input.changedPointers.length;
	    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
	    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));
	
	    input.isFirst = !!isFirst;
	    input.isFinal = !!isFinal;
	
	    if (isFirst) {
	        manager.session = {};
	    }
	
	    // source event is the normalized value of the domEvents
	    // like 'touchstart, mouseup, pointerdown'
	    input.eventType = eventType;
	
	    // compute scale, rotation etc
	    computeInputData(manager, input);
	
	    // emit secret event
	    manager.emit('hammer.input', input);
	
	    manager.recognize(input);
	    manager.session.prevInput = input;
	}
	
	/**
	 * extend the data with some usable properties like scale, rotate, velocity etc
	 * @param {Object} manager
	 * @param {Object} input
	 */
	function computeInputData(manager, input) {
	    var session = manager.session;
	    var pointers = input.pointers;
	    var pointersLength = pointers.length;
	
	    // store the first input to calculate the distance and direction
	    if (!session.firstInput) {
	        session.firstInput = simpleCloneInputData(input);
	    }
	
	    // to compute scale and rotation we need to store the multiple touches
	    if (pointersLength > 1 && !session.firstMultiple) {
	        session.firstMultiple = simpleCloneInputData(input);
	    } else if (pointersLength === 1) {
	        session.firstMultiple = false;
	    }
	
	    var firstInput = session.firstInput;
	    var firstMultiple = session.firstMultiple;
	    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
	
	    var center = input.center = getCenter(pointers);
	    input.timeStamp = now();
	    input.deltaTime = input.timeStamp - firstInput.timeStamp;
	
	    input.angle = getAngle(offsetCenter, center);
	    input.distance = getDistance(offsetCenter, center);
	
	    computeDeltaXY(session, input);
	    input.offsetDirection = getDirection(input.deltaX, input.deltaY);
	
	    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
	    input.overallVelocityX = overallVelocity.x;
	    input.overallVelocityY = overallVelocity.y;
	    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;
	
	    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
	    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
	
	    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
	        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);
	
	    computeIntervalInputData(session, input);
	
	    // find the correct target
	    var target = manager.element;
	    if (hasParent(input.srcEvent.target, target)) {
	        target = input.srcEvent.target;
	    }
	    input.target = target;
	}
	
	function computeDeltaXY(session, input) {
	    var center = input.center;
	    var offset = session.offsetDelta || {};
	    var prevDelta = session.prevDelta || {};
	    var prevInput = session.prevInput || {};
	
	    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
	        prevDelta = session.prevDelta = {
	            x: prevInput.deltaX || 0,
	            y: prevInput.deltaY || 0
	        };
	
	        offset = session.offsetDelta = {
	            x: center.x,
	            y: center.y
	        };
	    }
	
	    input.deltaX = prevDelta.x + (center.x - offset.x);
	    input.deltaY = prevDelta.y + (center.y - offset.y);
	}
	
	/**
	 * velocity is calculated every x ms
	 * @param {Object} session
	 * @param {Object} input
	 */
	function computeIntervalInputData(session, input) {
	    var last = session.lastInterval || input,
	        deltaTime = input.timeStamp - last.timeStamp,
	        velocity, velocityX, velocityY, direction;
	
	    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
	        var deltaX = input.deltaX - last.deltaX;
	        var deltaY = input.deltaY - last.deltaY;
	
	        var v = getVelocity(deltaTime, deltaX, deltaY);
	        velocityX = v.x;
	        velocityY = v.y;
	        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
	        direction = getDirection(deltaX, deltaY);
	
	        session.lastInterval = input;
	    } else {
	        // use latest velocity info if it doesn't overtake a minimum period
	        velocity = last.velocity;
	        velocityX = last.velocityX;
	        velocityY = last.velocityY;
	        direction = last.direction;
	    }
	
	    input.velocity = velocity;
	    input.velocityX = velocityX;
	    input.velocityY = velocityY;
	    input.direction = direction;
	}
	
	/**
	 * create a simple clone from the input used for storage of firstInput and firstMultiple
	 * @param {Object} input
	 * @returns {Object} clonedInputData
	 */
	function simpleCloneInputData(input) {
	    // make a simple copy of the pointers because we will get a reference if we don't
	    // we only need clientXY for the calculations
	    var pointers = [];
	    var i = 0;
	    while (i < input.pointers.length) {
	        pointers[i] = {
	            clientX: round(input.pointers[i].clientX),
	            clientY: round(input.pointers[i].clientY)
	        };
	        i++;
	    }
	
	    return {
	        timeStamp: now(),
	        pointers: pointers,
	        center: getCenter(pointers),
	        deltaX: input.deltaX,
	        deltaY: input.deltaY
	    };
	}
	
	/**
	 * get the center of all the pointers
	 * @param {Array} pointers
	 * @return {Object} center contains `x` and `y` properties
	 */
	function getCenter(pointers) {
	    var pointersLength = pointers.length;
	
	    // no need to loop when only one touch
	    if (pointersLength === 1) {
	        return {
	            x: round(pointers[0].clientX),
	            y: round(pointers[0].clientY)
	        };
	    }
	
	    var x = 0, y = 0, i = 0;
	    while (i < pointersLength) {
	        x += pointers[i].clientX;
	        y += pointers[i].clientY;
	        i++;
	    }
	
	    return {
	        x: round(x / pointersLength),
	        y: round(y / pointersLength)
	    };
	}
	
	/**
	 * calculate the velocity between two points. unit is in px per ms.
	 * @param {Number} deltaTime
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Object} velocity `x` and `y`
	 */
	function getVelocity(deltaTime, x, y) {
	    return {
	        x: x / deltaTime || 0,
	        y: y / deltaTime || 0
	    };
	}
	
	/**
	 * get the direction between two points
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Number} direction
	 */
	function getDirection(x, y) {
	    if (x === y) {
	        return DIRECTION_NONE;
	    }
	
	    if (abs(x) >= abs(y)) {
	        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
	    }
	    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
	}
	
	/**
	 * calculate the absolute distance between two points
	 * @param {Object} p1 {x, y}
	 * @param {Object} p2 {x, y}
	 * @param {Array} [props] containing x and y keys
	 * @return {Number} distance
	 */
	function getDistance(p1, p2, props) {
	    if (!props) {
	        props = PROPS_XY;
	    }
	    var x = p2[props[0]] - p1[props[0]],
	        y = p2[props[1]] - p1[props[1]];
	
	    return Math.sqrt((x * x) + (y * y));
	}
	
	/**
	 * calculate the angle between two coordinates
	 * @param {Object} p1
	 * @param {Object} p2
	 * @param {Array} [props] containing x and y keys
	 * @return {Number} angle
	 */
	function getAngle(p1, p2, props) {
	    if (!props) {
	        props = PROPS_XY;
	    }
	    var x = p2[props[0]] - p1[props[0]],
	        y = p2[props[1]] - p1[props[1]];
	    return Math.atan2(y, x) * 180 / Math.PI;
	}
	
	/**
	 * calculate the rotation degrees between two pointersets
	 * @param {Array} start array of pointers
	 * @param {Array} end array of pointers
	 * @return {Number} rotation
	 */
	function getRotation(start, end) {
	    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
	}
	
	/**
	 * calculate the scale factor between two pointersets
	 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
	 * @param {Array} start array of pointers
	 * @param {Array} end array of pointers
	 * @return {Number} scale
	 */
	function getScale(start, end) {
	    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
	}
	
	var MOUSE_INPUT_MAP = {
	    mousedown: INPUT_START,
	    mousemove: INPUT_MOVE,
	    mouseup: INPUT_END
	};
	
	var MOUSE_ELEMENT_EVENTS = 'mousedown';
	var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';
	
	/**
	 * Mouse events input
	 * @constructor
	 * @extends Input
	 */
	function MouseInput() {
	    this.evEl = MOUSE_ELEMENT_EVENTS;
	    this.evWin = MOUSE_WINDOW_EVENTS;
	
	    this.pressed = false; // mousedown state
	
	    Input.apply(this, arguments);
	}
	
	inherit(MouseInput, Input, {
	    /**
	     * handle mouse events
	     * @param {Object} ev
	     */
	    handler: function MEhandler(ev) {
	        var eventType = MOUSE_INPUT_MAP[ev.type];
	
	        // on start we want to have the left mouse button down
	        if (eventType & INPUT_START && ev.button === 0) {
	            this.pressed = true;
	        }
	
	        if (eventType & INPUT_MOVE && ev.which !== 1) {
	            eventType = INPUT_END;
	        }
	
	        // mouse must be down
	        if (!this.pressed) {
	            return;
	        }
	
	        if (eventType & INPUT_END) {
	            this.pressed = false;
	        }
	
	        this.callback(this.manager, eventType, {
	            pointers: [ev],
	            changedPointers: [ev],
	            pointerType: INPUT_TYPE_MOUSE,
	            srcEvent: ev
	        });
	    }
	});
	
	var POINTER_INPUT_MAP = {
	    pointerdown: INPUT_START,
	    pointermove: INPUT_MOVE,
	    pointerup: INPUT_END,
	    pointercancel: INPUT_CANCEL,
	    pointerout: INPUT_CANCEL
	};
	
	// in IE10 the pointer types is defined as an enum
	var IE10_POINTER_TYPE_ENUM = {
	    2: INPUT_TYPE_TOUCH,
	    3: INPUT_TYPE_PEN,
	    4: INPUT_TYPE_MOUSE,
	    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
	};
	
	var POINTER_ELEMENT_EVENTS = 'pointerdown';
	var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';
	
	// IE10 has prefixed support, and case-sensitive
	if (window.MSPointerEvent && !window.PointerEvent) {
	    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
	    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
	}
	
	/**
	 * Pointer events input
	 * @constructor
	 * @extends Input
	 */
	function PointerEventInput() {
	    this.evEl = POINTER_ELEMENT_EVENTS;
	    this.evWin = POINTER_WINDOW_EVENTS;
	
	    Input.apply(this, arguments);
	
	    this.store = (this.manager.session.pointerEvents = []);
	}
	
	inherit(PointerEventInput, Input, {
	    /**
	     * handle mouse events
	     * @param {Object} ev
	     */
	    handler: function PEhandler(ev) {
	        var store = this.store;
	        var removePointer = false;
	
	        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
	        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
	        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
	
	        var isTouch = (pointerType == INPUT_TYPE_TOUCH);
	
	        // get index of the event in the store
	        var storeIndex = inArray(store, ev.pointerId, 'pointerId');
	
	        // start and mouse must be down
	        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
	            if (storeIndex < 0) {
	                store.push(ev);
	                storeIndex = store.length - 1;
	            }
	        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
	            removePointer = true;
	        }
	
	        // it not found, so the pointer hasn't been down (so it's probably a hover)
	        if (storeIndex < 0) {
	            return;
	        }
	
	        // update the event in the store
	        store[storeIndex] = ev;
	
	        this.callback(this.manager, eventType, {
	            pointers: store,
	            changedPointers: [ev],
	            pointerType: pointerType,
	            srcEvent: ev
	        });
	
	        if (removePointer) {
	            // remove from the store
	            store.splice(storeIndex, 1);
	        }
	    }
	});
	
	var SINGLE_TOUCH_INPUT_MAP = {
	    touchstart: INPUT_START,
	    touchmove: INPUT_MOVE,
	    touchend: INPUT_END,
	    touchcancel: INPUT_CANCEL
	};
	
	var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
	var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';
	
	/**
	 * Touch events input
	 * @constructor
	 * @extends Input
	 */
	function SingleTouchInput() {
	    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
	    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
	    this.started = false;
	
	    Input.apply(this, arguments);
	}
	
	inherit(SingleTouchInput, Input, {
	    handler: function TEhandler(ev) {
	        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];
	
	        // should we handle the touch events?
	        if (type === INPUT_START) {
	            this.started = true;
	        }
	
	        if (!this.started) {
	            return;
	        }
	
	        var touches = normalizeSingleTouches.call(this, ev, type);
	
	        // when done, reset the started state
	        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
	            this.started = false;
	        }
	
	        this.callback(this.manager, type, {
	            pointers: touches[0],
	            changedPointers: touches[1],
	            pointerType: INPUT_TYPE_TOUCH,
	            srcEvent: ev
	        });
	    }
	});
	
	/**
	 * @this {TouchInput}
	 * @param {Object} ev
	 * @param {Number} type flag
	 * @returns {undefined|Array} [all, changed]
	 */
	function normalizeSingleTouches(ev, type) {
	    var all = toArray(ev.touches);
	    var changed = toArray(ev.changedTouches);
	
	    if (type & (INPUT_END | INPUT_CANCEL)) {
	        all = uniqueArray(all.concat(changed), 'identifier', true);
	    }
	
	    return [all, changed];
	}
	
	var TOUCH_INPUT_MAP = {
	    touchstart: INPUT_START,
	    touchmove: INPUT_MOVE,
	    touchend: INPUT_END,
	    touchcancel: INPUT_CANCEL
	};
	
	var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';
	
	/**
	 * Multi-user touch events input
	 * @constructor
	 * @extends Input
	 */
	function TouchInput() {
	    this.evTarget = TOUCH_TARGET_EVENTS;
	    this.targetIds = {};
	
	    Input.apply(this, arguments);
	}
	
	inherit(TouchInput, Input, {
	    handler: function MTEhandler(ev) {
	        var type = TOUCH_INPUT_MAP[ev.type];
	        var touches = getTouches.call(this, ev, type);
	        if (!touches) {
	            return;
	        }
	
	        this.callback(this.manager, type, {
	            pointers: touches[0],
	            changedPointers: touches[1],
	            pointerType: INPUT_TYPE_TOUCH,
	            srcEvent: ev
	        });
	    }
	});
	
	/**
	 * @this {TouchInput}
	 * @param {Object} ev
	 * @param {Number} type flag
	 * @returns {undefined|Array} [all, changed]
	 */
	function getTouches(ev, type) {
	    var allTouches = toArray(ev.touches);
	    var targetIds = this.targetIds;
	
	    // when there is only one touch, the process can be simplified
	    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
	        targetIds[allTouches[0].identifier] = true;
	        return [allTouches, allTouches];
	    }
	
	    var i,
	        targetTouches,
	        changedTouches = toArray(ev.changedTouches),
	        changedTargetTouches = [],
	        target = this.target;
	
	    // get target touches from touches
	    targetTouches = allTouches.filter(function(touch) {
	        return hasParent(touch.target, target);
	    });
	
	    // collect touches
	    if (type === INPUT_START) {
	        i = 0;
	        while (i < targetTouches.length) {
	            targetIds[targetTouches[i].identifier] = true;
	            i++;
	        }
	    }
	
	    // filter changed touches to only contain touches that exist in the collected target ids
	    i = 0;
	    while (i < changedTouches.length) {
	        if (targetIds[changedTouches[i].identifier]) {
	            changedTargetTouches.push(changedTouches[i]);
	        }
	
	        // cleanup removed touches
	        if (type & (INPUT_END | INPUT_CANCEL)) {
	            delete targetIds[changedTouches[i].identifier];
	        }
	        i++;
	    }
	
	    if (!changedTargetTouches.length) {
	        return;
	    }
	
	    return [
	        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
	        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
	        changedTargetTouches
	    ];
	}
	
	/**
	 * Combined touch and mouse input
	 *
	 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
	 * This because touch devices also emit mouse events while doing a touch.
	 *
	 * @constructor
	 * @extends Input
	 */
	
	var DEDUP_TIMEOUT = 2500;
	var DEDUP_DISTANCE = 25;
	
	function TouchMouseInput() {
	    Input.apply(this, arguments);
	
	    var handler = bindFn(this.handler, this);
	    this.touch = new TouchInput(this.manager, handler);
	    this.mouse = new MouseInput(this.manager, handler);
	
	    this.primaryTouch = null;
	    this.lastTouches = [];
	}
	
	inherit(TouchMouseInput, Input, {
	    /**
	     * handle mouse and touch events
	     * @param {Hammer} manager
	     * @param {String} inputEvent
	     * @param {Object} inputData
	     */
	    handler: function TMEhandler(manager, inputEvent, inputData) {
	        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
	            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);
	
	        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
	            return;
	        }
	
	        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
	        if (isTouch) {
	            recordTouches.call(this, inputEvent, inputData);
	        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
	            return;
	        }
	
	        this.callback(manager, inputEvent, inputData);
	    },
	
	    /**
	     * remove the event listeners
	     */
	    destroy: function destroy() {
	        this.touch.destroy();
	        this.mouse.destroy();
	    }
	});
	
	function recordTouches(eventType, eventData) {
	    if (eventType & INPUT_START) {
	        this.primaryTouch = eventData.changedPointers[0].identifier;
	        setLastTouch.call(this, eventData);
	    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
	        setLastTouch.call(this, eventData);
	    }
	}
	
	function setLastTouch(eventData) {
	    var touch = eventData.changedPointers[0];
	
	    if (touch.identifier === this.primaryTouch) {
	        var lastTouch = {x: touch.clientX, y: touch.clientY};
	        this.lastTouches.push(lastTouch);
	        var lts = this.lastTouches;
	        var removeLastTouch = function() {
	            var i = lts.indexOf(lastTouch);
	            if (i > -1) {
	                lts.splice(i, 1);
	            }
	        };
	        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
	    }
	}
	
	function isSyntheticEvent(eventData) {
	    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
	    for (var i = 0; i < this.lastTouches.length; i++) {
	        var t = this.lastTouches[i];
	        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
	        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
	            return true;
	        }
	    }
	    return false;
	}
	
	var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
	var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;
	
	// magical touchAction value
	var TOUCH_ACTION_COMPUTE = 'compute';
	var TOUCH_ACTION_AUTO = 'auto';
	var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
	var TOUCH_ACTION_NONE = 'none';
	var TOUCH_ACTION_PAN_X = 'pan-x';
	var TOUCH_ACTION_PAN_Y = 'pan-y';
	var TOUCH_ACTION_MAP = getTouchActionProps();
	
	/**
	 * Touch Action
	 * sets the touchAction property or uses the js alternative
	 * @param {Manager} manager
	 * @param {String} value
	 * @constructor
	 */
	function TouchAction(manager, value) {
	    this.manager = manager;
	    this.set(value);
	}
	
	TouchAction.prototype = {
	    /**
	     * set the touchAction value on the element or enable the polyfill
	     * @param {String} value
	     */
	    set: function(value) {
	        // find out the touch-action by the event handlers
	        if (value == TOUCH_ACTION_COMPUTE) {
	            value = this.compute();
	        }
	
	        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
	            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
	        }
	        this.actions = value.toLowerCase().trim();
	    },
	
	    /**
	     * just re-set the touchAction value
	     */
	    update: function() {
	        this.set(this.manager.options.touchAction);
	    },
	
	    /**
	     * compute the value for the touchAction property based on the recognizer's settings
	     * @returns {String} value
	     */
	    compute: function() {
	        var actions = [];
	        each(this.manager.recognizers, function(recognizer) {
	            if (boolOrFn(recognizer.options.enable, [recognizer])) {
	                actions = actions.concat(recognizer.getTouchAction());
	            }
	        });
	        return cleanTouchActions(actions.join(' '));
	    },
	
	    /**
	     * this method is called on each input cycle and provides the preventing of the browser behavior
	     * @param {Object} input
	     */
	    preventDefaults: function(input) {
	        var srcEvent = input.srcEvent;
	        var direction = input.offsetDirection;
	
	        // if the touch action did prevented once this session
	        if (this.manager.session.prevented) {
	            srcEvent.preventDefault();
	            return;
	        }
	
	        var actions = this.actions;
	        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
	        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
	        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];
	
	        if (hasNone) {
	            //do not prevent defaults if this is a tap gesture
	
	            var isTapPointer = input.pointers.length === 1;
	            var isTapMovement = input.distance < 2;
	            var isTapTouchTime = input.deltaTime < 250;
	
	            if (isTapPointer && isTapMovement && isTapTouchTime) {
	                return;
	            }
	        }
	
	        if (hasPanX && hasPanY) {
	            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
	            return;
	        }
	
	        if (hasNone ||
	            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
	            (hasPanX && direction & DIRECTION_VERTICAL)) {
	            return this.preventSrc(srcEvent);
	        }
	    },
	
	    /**
	     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
	     * @param {Object} srcEvent
	     */
	    preventSrc: function(srcEvent) {
	        this.manager.session.prevented = true;
	        srcEvent.preventDefault();
	    }
	};
	
	/**
	 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
	 * @param {String} actions
	 * @returns {*}
	 */
	function cleanTouchActions(actions) {
	    // none
	    if (inStr(actions, TOUCH_ACTION_NONE)) {
	        return TOUCH_ACTION_NONE;
	    }
	
	    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
	    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
	
	    // if both pan-x and pan-y are set (different recognizers
	    // for different directions, e.g. horizontal pan but vertical swipe?)
	    // we need none (as otherwise with pan-x pan-y combined none of these
	    // recognizers will work, since the browser would handle all panning
	    if (hasPanX && hasPanY) {
	        return TOUCH_ACTION_NONE;
	    }
	
	    // pan-x OR pan-y
	    if (hasPanX || hasPanY) {
	        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
	    }
	
	    // manipulation
	    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
	        return TOUCH_ACTION_MANIPULATION;
	    }
	
	    return TOUCH_ACTION_AUTO;
	}
	
	function getTouchActionProps() {
	    if (!NATIVE_TOUCH_ACTION) {
	        return false;
	    }
	    var touchMap = {};
	    var cssSupports = window.CSS && window.CSS.supports;
	    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {
	
	        // If css.supports is not supported but there is native touch-action assume it supports
	        // all values. This is the case for IE 10 and 11.
	        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
	    });
	    return touchMap;
	}
	
	/**
	 * Recognizer flow explained; *
	 * All recognizers have the initial state of POSSIBLE when a input session starts.
	 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
	 * Example session for mouse-input: mousedown -> mousemove -> mouseup
	 *
	 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
	 * which determines with state it should be.
	 *
	 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
	 * POSSIBLE to give it another change on the next cycle.
	 *
	 *               Possible
	 *                  |
	 *            +-----+---------------+
	 *            |                     |
	 *      +-----+-----+               |
	 *      |           |               |
	 *   Failed      Cancelled          |
	 *                          +-------+------+
	 *                          |              |
	 *                      Recognized       Began
	 *                                         |
	 *                                      Changed
	 *                                         |
	 *                                  Ended/Recognized
	 */
	var STATE_POSSIBLE = 1;
	var STATE_BEGAN = 2;
	var STATE_CHANGED = 4;
	var STATE_ENDED = 8;
	var STATE_RECOGNIZED = STATE_ENDED;
	var STATE_CANCELLED = 16;
	var STATE_FAILED = 32;
	
	/**
	 * Recognizer
	 * Every recognizer needs to extend from this class.
	 * @constructor
	 * @param {Object} options
	 */
	function Recognizer(options) {
	    this.options = assign({}, this.defaults, options || {});
	
	    this.id = uniqueId();
	
	    this.manager = null;
	
	    // default is enable true
	    this.options.enable = ifUndefined(this.options.enable, true);
	
	    this.state = STATE_POSSIBLE;
	
	    this.simultaneous = {};
	    this.requireFail = [];
	}
	
	Recognizer.prototype = {
	    /**
	     * @virtual
	     * @type {Object}
	     */
	    defaults: {},
	
	    /**
	     * set options
	     * @param {Object} options
	     * @return {Recognizer}
	     */
	    set: function(options) {
	        assign(this.options, options);
	
	        // also update the touchAction, in case something changed about the directions/enabled state
	        this.manager && this.manager.touchAction.update();
	        return this;
	    },
	
	    /**
	     * recognize simultaneous with an other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    recognizeWith: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
	            return this;
	        }
	
	        var simultaneous = this.simultaneous;
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        if (!simultaneous[otherRecognizer.id]) {
	            simultaneous[otherRecognizer.id] = otherRecognizer;
	            otherRecognizer.recognizeWith(this);
	        }
	        return this;
	    },
	
	    /**
	     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    dropRecognizeWith: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
	            return this;
	        }
	
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        delete this.simultaneous[otherRecognizer.id];
	        return this;
	    },
	
	    /**
	     * recognizer can only run when an other is failing
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    requireFailure: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
	            return this;
	        }
	
	        var requireFail = this.requireFail;
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        if (inArray(requireFail, otherRecognizer) === -1) {
	            requireFail.push(otherRecognizer);
	            otherRecognizer.requireFailure(this);
	        }
	        return this;
	    },
	
	    /**
	     * drop the requireFailure link. it does not remove the link on the other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    dropRequireFailure: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
	            return this;
	        }
	
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        var index = inArray(this.requireFail, otherRecognizer);
	        if (index > -1) {
	            this.requireFail.splice(index, 1);
	        }
	        return this;
	    },
	
	    /**
	     * has require failures boolean
	     * @returns {boolean}
	     */
	    hasRequireFailures: function() {
	        return this.requireFail.length > 0;
	    },
	
	    /**
	     * if the recognizer can recognize simultaneous with an other recognizer
	     * @param {Recognizer} otherRecognizer
	     * @returns {Boolean}
	     */
	    canRecognizeWith: function(otherRecognizer) {
	        return !!this.simultaneous[otherRecognizer.id];
	    },
	
	    /**
	     * You should use `tryEmit` instead of `emit` directly to check
	     * that all the needed recognizers has failed before emitting.
	     * @param {Object} input
	     */
	    emit: function(input) {
	        var self = this;
	        var state = this.state;
	
	        function emit(event) {
	            self.manager.emit(event, input);
	        }
	
	        // 'panstart' and 'panmove'
	        if (state < STATE_ENDED) {
	            emit(self.options.event + stateStr(state));
	        }
	
	        emit(self.options.event); // simple 'eventName' events
	
	        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
	            emit(input.additionalEvent);
	        }
	
	        // panend and pancancel
	        if (state >= STATE_ENDED) {
	            emit(self.options.event + stateStr(state));
	        }
	    },
	
	    /**
	     * Check that all the require failure recognizers has failed,
	     * if true, it emits a gesture event,
	     * otherwise, setup the state to FAILED.
	     * @param {Object} input
	     */
	    tryEmit: function(input) {
	        if (this.canEmit()) {
	            return this.emit(input);
	        }
	        // it's failing anyway
	        this.state = STATE_FAILED;
	    },
	
	    /**
	     * can we emit?
	     * @returns {boolean}
	     */
	    canEmit: function() {
	        var i = 0;
	        while (i < this.requireFail.length) {
	            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
	                return false;
	            }
	            i++;
	        }
	        return true;
	    },
	
	    /**
	     * update the recognizer
	     * @param {Object} inputData
	     */
	    recognize: function(inputData) {
	        // make a new copy of the inputData
	        // so we can change the inputData without messing up the other recognizers
	        var inputDataClone = assign({}, inputData);
	
	        // is is enabled and allow recognizing?
	        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
	            this.reset();
	            this.state = STATE_FAILED;
	            return;
	        }
	
	        // reset when we've reached the end
	        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
	            this.state = STATE_POSSIBLE;
	        }
	
	        this.state = this.process(inputDataClone);
	
	        // the recognizer has recognized a gesture
	        // so trigger an event
	        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
	            this.tryEmit(inputDataClone);
	        }
	    },
	
	    /**
	     * return the state of the recognizer
	     * the actual recognizing happens in this method
	     * @virtual
	     * @param {Object} inputData
	     * @returns {Const} STATE
	     */
	    process: function(inputData) { }, // jshint ignore:line
	
	    /**
	     * return the preferred touch-action
	     * @virtual
	     * @returns {Array}
	     */
	    getTouchAction: function() { },
	
	    /**
	     * called when the gesture isn't allowed to recognize
	     * like when another is being recognized or it is disabled
	     * @virtual
	     */
	    reset: function() { }
	};
	
	/**
	 * get a usable string, used as event postfix
	 * @param {Const} state
	 * @returns {String} state
	 */
	function stateStr(state) {
	    if (state & STATE_CANCELLED) {
	        return 'cancel';
	    } else if (state & STATE_ENDED) {
	        return 'end';
	    } else if (state & STATE_CHANGED) {
	        return 'move';
	    } else if (state & STATE_BEGAN) {
	        return 'start';
	    }
	    return '';
	}
	
	/**
	 * direction cons to string
	 * @param {Const} direction
	 * @returns {String}
	 */
	function directionStr(direction) {
	    if (direction == DIRECTION_DOWN) {
	        return 'down';
	    } else if (direction == DIRECTION_UP) {
	        return 'up';
	    } else if (direction == DIRECTION_LEFT) {
	        return 'left';
	    } else if (direction == DIRECTION_RIGHT) {
	        return 'right';
	    }
	    return '';
	}
	
	/**
	 * get a recognizer by name if it is bound to a manager
	 * @param {Recognizer|String} otherRecognizer
	 * @param {Recognizer} recognizer
	 * @returns {Recognizer}
	 */
	function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
	    var manager = recognizer.manager;
	    if (manager) {
	        return manager.get(otherRecognizer);
	    }
	    return otherRecognizer;
	}
	
	/**
	 * This recognizer is just used as a base for the simple attribute recognizers.
	 * @constructor
	 * @extends Recognizer
	 */
	function AttrRecognizer() {
	    Recognizer.apply(this, arguments);
	}
	
	inherit(AttrRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof AttrRecognizer
	     */
	    defaults: {
	        /**
	         * @type {Number}
	         * @default 1
	         */
	        pointers: 1
	    },
	
	    /**
	     * Used to check if it the recognizer receives valid input, like input.distance > 10.
	     * @memberof AttrRecognizer
	     * @param {Object} input
	     * @returns {Boolean} recognized
	     */
	    attrTest: function(input) {
	        var optionPointers = this.options.pointers;
	        return optionPointers === 0 || input.pointers.length === optionPointers;
	    },
	
	    /**
	     * Process the input and return the state for the recognizer
	     * @memberof AttrRecognizer
	     * @param {Object} input
	     * @returns {*} State
	     */
	    process: function(input) {
	        var state = this.state;
	        var eventType = input.eventType;
	
	        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
	        var isValid = this.attrTest(input);
	
	        // on cancel input and we've recognized before, return STATE_CANCELLED
	        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
	            return state | STATE_CANCELLED;
	        } else if (isRecognized || isValid) {
	            if (eventType & INPUT_END) {
	                return state | STATE_ENDED;
	            } else if (!(state & STATE_BEGAN)) {
	                return STATE_BEGAN;
	            }
	            return state | STATE_CHANGED;
	        }
	        return STATE_FAILED;
	    }
	});
	
	/**
	 * Pan
	 * Recognized when the pointer is down and moved in the allowed direction.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function PanRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	
	    this.pX = null;
	    this.pY = null;
	}
	
	inherit(PanRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof PanRecognizer
	     */
	    defaults: {
	        event: 'pan',
	        threshold: 10,
	        pointers: 1,
	        direction: DIRECTION_ALL
	    },
	
	    getTouchAction: function() {
	        var direction = this.options.direction;
	        var actions = [];
	        if (direction & DIRECTION_HORIZONTAL) {
	            actions.push(TOUCH_ACTION_PAN_Y);
	        }
	        if (direction & DIRECTION_VERTICAL) {
	            actions.push(TOUCH_ACTION_PAN_X);
	        }
	        return actions;
	    },
	
	    directionTest: function(input) {
	        var options = this.options;
	        var hasMoved = true;
	        var distance = input.distance;
	        var direction = input.direction;
	        var x = input.deltaX;
	        var y = input.deltaY;
	
	        // lock to axis?
	        if (!(direction & options.direction)) {
	            if (options.direction & DIRECTION_HORIZONTAL) {
	                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
	                hasMoved = x != this.pX;
	                distance = Math.abs(input.deltaX);
	            } else {
	                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
	                hasMoved = y != this.pY;
	                distance = Math.abs(input.deltaY);
	            }
	        }
	        input.direction = direction;
	        return hasMoved && distance > options.threshold && direction & options.direction;
	    },
	
	    attrTest: function(input) {
	        return AttrRecognizer.prototype.attrTest.call(this, input) &&
	            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
	    },
	
	    emit: function(input) {
	
	        this.pX = input.deltaX;
	        this.pY = input.deltaY;
	
	        var direction = directionStr(input.direction);
	
	        if (direction) {
	            input.additionalEvent = this.options.event + direction;
	        }
	        this._super.emit.call(this, input);
	    }
	});
	
	/**
	 * Pinch
	 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function PinchRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}
	
	inherit(PinchRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof PinchRecognizer
	     */
	    defaults: {
	        event: 'pinch',
	        threshold: 0,
	        pointers: 2
	    },
	
	    getTouchAction: function() {
	        return [TOUCH_ACTION_NONE];
	    },
	
	    attrTest: function(input) {
	        return this._super.attrTest.call(this, input) &&
	            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
	    },
	
	    emit: function(input) {
	        if (input.scale !== 1) {
	            var inOut = input.scale < 1 ? 'in' : 'out';
	            input.additionalEvent = this.options.event + inOut;
	        }
	        this._super.emit.call(this, input);
	    }
	});
	
	/**
	 * Press
	 * Recognized when the pointer is down for x ms without any movement.
	 * @constructor
	 * @extends Recognizer
	 */
	function PressRecognizer() {
	    Recognizer.apply(this, arguments);
	
	    this._timer = null;
	    this._input = null;
	}
	
	inherit(PressRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof PressRecognizer
	     */
	    defaults: {
	        event: 'press',
	        pointers: 1,
	        time: 251, // minimal time of the pointer to be pressed
	        threshold: 9 // a minimal movement is ok, but keep it low
	    },
	
	    getTouchAction: function() {
	        return [TOUCH_ACTION_AUTO];
	    },
	
	    process: function(input) {
	        var options = this.options;
	        var validPointers = input.pointers.length === options.pointers;
	        var validMovement = input.distance < options.threshold;
	        var validTime = input.deltaTime > options.time;
	
	        this._input = input;
	
	        // we only allow little movement
	        // and we've reached an end event, so a tap is possible
	        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
	            this.reset();
	        } else if (input.eventType & INPUT_START) {
	            this.reset();
	            this._timer = setTimeoutContext(function() {
	                this.state = STATE_RECOGNIZED;
	                this.tryEmit();
	            }, options.time, this);
	        } else if (input.eventType & INPUT_END) {
	            return STATE_RECOGNIZED;
	        }
	        return STATE_FAILED;
	    },
	
	    reset: function() {
	        clearTimeout(this._timer);
	    },
	
	    emit: function(input) {
	        if (this.state !== STATE_RECOGNIZED) {
	            return;
	        }
	
	        if (input && (input.eventType & INPUT_END)) {
	            this.manager.emit(this.options.event + 'up', input);
	        } else {
	            this._input.timeStamp = now();
	            this.manager.emit(this.options.event, this._input);
	        }
	    }
	});
	
	/**
	 * Rotate
	 * Recognized when two or more pointer are moving in a circular motion.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function RotateRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}
	
	inherit(RotateRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof RotateRecognizer
	     */
	    defaults: {
	        event: 'rotate',
	        threshold: 0,
	        pointers: 2
	    },
	
	    getTouchAction: function() {
	        return [TOUCH_ACTION_NONE];
	    },
	
	    attrTest: function(input) {
	        return this._super.attrTest.call(this, input) &&
	            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
	    }
	});
	
	/**
	 * Swipe
	 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function SwipeRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}
	
	inherit(SwipeRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof SwipeRecognizer
	     */
	    defaults: {
	        event: 'swipe',
	        threshold: 10,
	        velocity: 0.3,
	        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
	        pointers: 1
	    },
	
	    getTouchAction: function() {
	        return PanRecognizer.prototype.getTouchAction.call(this);
	    },
	
	    attrTest: function(input) {
	        var direction = this.options.direction;
	        var velocity;
	
	        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
	            velocity = input.overallVelocity;
	        } else if (direction & DIRECTION_HORIZONTAL) {
	            velocity = input.overallVelocityX;
	        } else if (direction & DIRECTION_VERTICAL) {
	            velocity = input.overallVelocityY;
	        }
	
	        return this._super.attrTest.call(this, input) &&
	            direction & input.offsetDirection &&
	            input.distance > this.options.threshold &&
	            input.maxPointers == this.options.pointers &&
	            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
	    },
	
	    emit: function(input) {
	        var direction = directionStr(input.offsetDirection);
	        if (direction) {
	            this.manager.emit(this.options.event + direction, input);
	        }
	
	        this.manager.emit(this.options.event, input);
	    }
	});
	
	/**
	 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
	 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
	 * a single tap.
	 *
	 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
	 * multi-taps being recognized.
	 * @constructor
	 * @extends Recognizer
	 */
	function TapRecognizer() {
	    Recognizer.apply(this, arguments);
	
	    // previous time and center,
	    // used for tap counting
	    this.pTime = false;
	    this.pCenter = false;
	
	    this._timer = null;
	    this._input = null;
	    this.count = 0;
	}
	
	inherit(TapRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof PinchRecognizer
	     */
	    defaults: {
	        event: 'tap',
	        pointers: 1,
	        taps: 1,
	        interval: 300, // max time between the multi-tap taps
	        time: 250, // max time of the pointer to be down (like finger on the screen)
	        threshold: 9, // a minimal movement is ok, but keep it low
	        posThreshold: 10 // a multi-tap can be a bit off the initial position
	    },
	
	    getTouchAction: function() {
	        return [TOUCH_ACTION_MANIPULATION];
	    },
	
	    process: function(input) {
	        var options = this.options;
	
	        var validPointers = input.pointers.length === options.pointers;
	        var validMovement = input.distance < options.threshold;
	        var validTouchTime = input.deltaTime < options.time;
	
	        this.reset();
	
	        if ((input.eventType & INPUT_START) && (this.count === 0)) {
	            return this.failTimeout();
	        }
	
	        // we only allow little movement
	        // and we've reached an end event, so a tap is possible
	        if (validMovement && validTouchTime && validPointers) {
	            if (input.eventType != INPUT_END) {
	                return this.failTimeout();
	            }
	
	            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
	            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
	
	            this.pTime = input.timeStamp;
	            this.pCenter = input.center;
	
	            if (!validMultiTap || !validInterval) {
	                this.count = 1;
	            } else {
	                this.count += 1;
	            }
	
	            this._input = input;
	
	            // if tap count matches we have recognized it,
	            // else it has began recognizing...
	            var tapCount = this.count % options.taps;
	            if (tapCount === 0) {
	                // no failing requirements, immediately trigger the tap event
	                // or wait as long as the multitap interval to trigger
	                if (!this.hasRequireFailures()) {
	                    return STATE_RECOGNIZED;
	                } else {
	                    this._timer = setTimeoutContext(function() {
	                        this.state = STATE_RECOGNIZED;
	                        this.tryEmit();
	                    }, options.interval, this);
	                    return STATE_BEGAN;
	                }
	            }
	        }
	        return STATE_FAILED;
	    },
	
	    failTimeout: function() {
	        this._timer = setTimeoutContext(function() {
	            this.state = STATE_FAILED;
	        }, this.options.interval, this);
	        return STATE_FAILED;
	    },
	
	    reset: function() {
	        clearTimeout(this._timer);
	    },
	
	    emit: function() {
	        if (this.state == STATE_RECOGNIZED) {
	            this._input.tapCount = this.count;
	            this.manager.emit(this.options.event, this._input);
	        }
	    }
	});
	
	/**
	 * Simple way to create a manager with a default set of recognizers.
	 * @param {HTMLElement} element
	 * @param {Object} [options]
	 * @constructor
	 */
	function Hammer(element, options) {
	    options = options || {};
	    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
	    return new Manager(element, options);
	}
	
	/**
	 * @const {string}
	 */
	Hammer.VERSION = '2.0.7';
	
	/**
	 * default settings
	 * @namespace
	 */
	Hammer.defaults = {
	    /**
	     * set if DOM events are being triggered.
	     * But this is slower and unused by simple implementations, so disabled by default.
	     * @type {Boolean}
	     * @default false
	     */
	    domEvents: false,
	
	    /**
	     * The value for the touchAction property/fallback.
	     * When set to `compute` it will magically set the correct value based on the added recognizers.
	     * @type {String}
	     * @default compute
	     */
	    touchAction: TOUCH_ACTION_COMPUTE,
	
	    /**
	     * @type {Boolean}
	     * @default true
	     */
	    enable: true,
	
	    /**
	     * EXPERIMENTAL FEATURE -- can be removed/changed
	     * Change the parent input target element.
	     * If Null, then it is being set the to main element.
	     * @type {Null|EventTarget}
	     * @default null
	     */
	    inputTarget: null,
	
	    /**
	     * force an input class
	     * @type {Null|Function}
	     * @default null
	     */
	    inputClass: null,
	
	    /**
	     * Default recognizer setup when calling `Hammer()`
	     * When creating a new Manager these will be skipped.
	     * @type {Array}
	     */
	    preset: [
	        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
	        [RotateRecognizer, {enable: false}],
	        [PinchRecognizer, {enable: false}, ['rotate']],
	        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
	        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
	        [TapRecognizer],
	        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
	        [PressRecognizer]
	    ],
	
	    /**
	     * Some CSS properties can be used to improve the working of Hammer.
	     * Add them to this method and they will be set when creating a new Manager.
	     * @namespace
	     */
	    cssProps: {
	        /**
	         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
	         * @type {String}
	         * @default 'none'
	         */
	        userSelect: 'none',
	
	        /**
	         * Disable the Windows Phone grippers when pressing an element.
	         * @type {String}
	         * @default 'none'
	         */
	        touchSelect: 'none',
	
	        /**
	         * Disables the default callout shown when you touch and hold a touch target.
	         * On iOS, when you touch and hold a touch target such as a link, Safari displays
	         * a callout containing information about the link. This property allows you to disable that callout.
	         * @type {String}
	         * @default 'none'
	         */
	        touchCallout: 'none',
	
	        /**
	         * Specifies whether zooming is enabled. Used by IE10>
	         * @type {String}
	         * @default 'none'
	         */
	        contentZooming: 'none',
	
	        /**
	         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
	         * @type {String}
	         * @default 'none'
	         */
	        userDrag: 'none',
	
	        /**
	         * Overrides the highlight color shown when the user taps a link or a JavaScript
	         * clickable element in iOS. This property obeys the alpha value, if specified.
	         * @type {String}
	         * @default 'rgba(0,0,0,0)'
	         */
	        tapHighlightColor: 'rgba(0,0,0,0)'
	    }
	};
	
	var STOP = 1;
	var FORCED_STOP = 2;
	
	/**
	 * Manager
	 * @param {HTMLElement} element
	 * @param {Object} [options]
	 * @constructor
	 */
	function Manager(element, options) {
	    this.options = assign({}, Hammer.defaults, options || {});
	
	    this.options.inputTarget = this.options.inputTarget || element;
	
	    this.handlers = {};
	    this.session = {};
	    this.recognizers = [];
	    this.oldCssProps = {};
	
	    this.element = element;
	    this.input = createInputInstance(this);
	    this.touchAction = new TouchAction(this, this.options.touchAction);
	
	    toggleCssProps(this, true);
	
	    each(this.options.recognizers, function(item) {
	        var recognizer = this.add(new (item[0])(item[1]));
	        item[2] && recognizer.recognizeWith(item[2]);
	        item[3] && recognizer.requireFailure(item[3]);
	    }, this);
	}
	
	Manager.prototype = {
	    /**
	     * set options
	     * @param {Object} options
	     * @returns {Manager}
	     */
	    set: function(options) {
	        assign(this.options, options);
	
	        // Options that need a little more setup
	        if (options.touchAction) {
	            this.touchAction.update();
	        }
	        if (options.inputTarget) {
	            // Clean up existing event listeners and reinitialize
	            this.input.destroy();
	            this.input.target = options.inputTarget;
	            this.input.init();
	        }
	        return this;
	    },
	
	    /**
	     * stop recognizing for this session.
	     * This session will be discarded, when a new [input]start event is fired.
	     * When forced, the recognizer cycle is stopped immediately.
	     * @param {Boolean} [force]
	     */
	    stop: function(force) {
	        this.session.stopped = force ? FORCED_STOP : STOP;
	    },
	
	    /**
	     * run the recognizers!
	     * called by the inputHandler function on every movement of the pointers (touches)
	     * it walks through all the recognizers and tries to detect the gesture that is being made
	     * @param {Object} inputData
	     */
	    recognize: function(inputData) {
	        var session = this.session;
	        if (session.stopped) {
	            return;
	        }
	
	        // run the touch-action polyfill
	        this.touchAction.preventDefaults(inputData);
	
	        var recognizer;
	        var recognizers = this.recognizers;
	
	        // this holds the recognizer that is being recognized.
	        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
	        // if no recognizer is detecting a thing, it is set to `null`
	        var curRecognizer = session.curRecognizer;
	
	        // reset when the last recognizer is recognized
	        // or when we're in a new session
	        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
	            curRecognizer = session.curRecognizer = null;
	        }
	
	        var i = 0;
	        while (i < recognizers.length) {
	            recognizer = recognizers[i];
	
	            // find out if we are allowed try to recognize the input for this one.
	            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
	            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
	            //      that is being recognized.
	            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
	            //      this can be setup with the `recognizeWith()` method on the recognizer.
	            if (session.stopped !== FORCED_STOP && ( // 1
	                    !curRecognizer || recognizer == curRecognizer || // 2
	                    recognizer.canRecognizeWith(curRecognizer))) { // 3
	                recognizer.recognize(inputData);
	            } else {
	                recognizer.reset();
	            }
	
	            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
	            // current active recognizer. but only if we don't already have an active recognizer
	            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
	                curRecognizer = session.curRecognizer = recognizer;
	            }
	            i++;
	        }
	    },
	
	    /**
	     * get a recognizer by its event name.
	     * @param {Recognizer|String} recognizer
	     * @returns {Recognizer|Null}
	     */
	    get: function(recognizer) {
	        if (recognizer instanceof Recognizer) {
	            return recognizer;
	        }
	
	        var recognizers = this.recognizers;
	        for (var i = 0; i < recognizers.length; i++) {
	            if (recognizers[i].options.event == recognizer) {
	                return recognizers[i];
	            }
	        }
	        return null;
	    },
	
	    /**
	     * add a recognizer to the manager
	     * existing recognizers with the same event name will be removed
	     * @param {Recognizer} recognizer
	     * @returns {Recognizer|Manager}
	     */
	    add: function(recognizer) {
	        if (invokeArrayArg(recognizer, 'add', this)) {
	            return this;
	        }
	
	        // remove existing
	        var existing = this.get(recognizer.options.event);
	        if (existing) {
	            this.remove(existing);
	        }
	
	        this.recognizers.push(recognizer);
	        recognizer.manager = this;
	
	        this.touchAction.update();
	        return recognizer;
	    },
	
	    /**
	     * remove a recognizer by name or instance
	     * @param {Recognizer|String} recognizer
	     * @returns {Manager}
	     */
	    remove: function(recognizer) {
	        if (invokeArrayArg(recognizer, 'remove', this)) {
	            return this;
	        }
	
	        recognizer = this.get(recognizer);
	
	        // let's make sure this recognizer exists
	        if (recognizer) {
	            var recognizers = this.recognizers;
	            var index = inArray(recognizers, recognizer);
	
	            if (index !== -1) {
	                recognizers.splice(index, 1);
	                this.touchAction.update();
	            }
	        }
	
	        return this;
	    },
	
	    /**
	     * bind event
	     * @param {String} events
	     * @param {Function} handler
	     * @returns {EventEmitter} this
	     */
	    on: function(events, handler) {
	        if (events === undefined) {
	            return;
	        }
	        if (handler === undefined) {
	            return;
	        }
	
	        var handlers = this.handlers;
	        each(splitStr(events), function(event) {
	            handlers[event] = handlers[event] || [];
	            handlers[event].push(handler);
	        });
	        return this;
	    },
	
	    /**
	     * unbind event, leave emit blank to remove all handlers
	     * @param {String} events
	     * @param {Function} [handler]
	     * @returns {EventEmitter} this
	     */
	    off: function(events, handler) {
	        if (events === undefined) {
	            return;
	        }
	
	        var handlers = this.handlers;
	        each(splitStr(events), function(event) {
	            if (!handler) {
	                delete handlers[event];
	            } else {
	                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
	            }
	        });
	        return this;
	    },
	
	    /**
	     * emit event to the listeners
	     * @param {String} event
	     * @param {Object} data
	     */
	    emit: function(event, data) {
	        // we also want to trigger dom events
	        if (this.options.domEvents) {
	            triggerDomEvent(event, data);
	        }
	
	        // no handlers, so skip it all
	        var handlers = this.handlers[event] && this.handlers[event].slice();
	        if (!handlers || !handlers.length) {
	            return;
	        }
	
	        data.type = event;
	        data.preventDefault = function() {
	            data.srcEvent.preventDefault();
	        };
	
	        var i = 0;
	        while (i < handlers.length) {
	            handlers[i](data);
	            i++;
	        }
	    },
	
	    /**
	     * destroy the manager and unbinds all events
	     * it doesn't unbind dom events, that is the user own responsibility
	     */
	    destroy: function() {
	        this.element && toggleCssProps(this, false);
	
	        this.handlers = {};
	        this.session = {};
	        this.input.destroy();
	        this.element = null;
	    }
	};
	
	/**
	 * add/remove the css properties as defined in manager.options.cssProps
	 * @param {Manager} manager
	 * @param {Boolean} add
	 */
	function toggleCssProps(manager, add) {
	    var element = manager.element;
	    if (!element.style) {
	        return;
	    }
	    var prop;
	    each(manager.options.cssProps, function(value, name) {
	        prop = prefixed(element.style, name);
	        if (add) {
	            manager.oldCssProps[prop] = element.style[prop];
	            element.style[prop] = value;
	        } else {
	            element.style[prop] = manager.oldCssProps[prop] || '';
	        }
	    });
	    if (!add) {
	        manager.oldCssProps = {};
	    }
	}
	
	/**
	 * trigger dom event
	 * @param {String} event
	 * @param {Object} data
	 */
	function triggerDomEvent(event, data) {
	    var gestureEvent = document.createEvent('Event');
	    gestureEvent.initEvent(event, true, true);
	    gestureEvent.gesture = data;
	    data.target.dispatchEvent(gestureEvent);
	}
	
	assign(Hammer, {
	    INPUT_START: INPUT_START,
	    INPUT_MOVE: INPUT_MOVE,
	    INPUT_END: INPUT_END,
	    INPUT_CANCEL: INPUT_CANCEL,
	
	    STATE_POSSIBLE: STATE_POSSIBLE,
	    STATE_BEGAN: STATE_BEGAN,
	    STATE_CHANGED: STATE_CHANGED,
	    STATE_ENDED: STATE_ENDED,
	    STATE_RECOGNIZED: STATE_RECOGNIZED,
	    STATE_CANCELLED: STATE_CANCELLED,
	    STATE_FAILED: STATE_FAILED,
	
	    DIRECTION_NONE: DIRECTION_NONE,
	    DIRECTION_LEFT: DIRECTION_LEFT,
	    DIRECTION_RIGHT: DIRECTION_RIGHT,
	    DIRECTION_UP: DIRECTION_UP,
	    DIRECTION_DOWN: DIRECTION_DOWN,
	    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
	    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
	    DIRECTION_ALL: DIRECTION_ALL,
	
	    Manager: Manager,
	    Input: Input,
	    TouchAction: TouchAction,
	
	    TouchInput: TouchInput,
	    MouseInput: MouseInput,
	    PointerEventInput: PointerEventInput,
	    TouchMouseInput: TouchMouseInput,
	    SingleTouchInput: SingleTouchInput,
	
	    Recognizer: Recognizer,
	    AttrRecognizer: AttrRecognizer,
	    Tap: TapRecognizer,
	    Pan: PanRecognizer,
	    Swipe: SwipeRecognizer,
	    Pinch: PinchRecognizer,
	    Rotate: RotateRecognizer,
	    Press: PressRecognizer,
	
	    on: addEventListeners,
	    off: removeEventListeners,
	    each: each,
	    merge: merge,
	    extend: extend,
	    assign: assign,
	    inherit: inherit,
	    bindFn: bindFn,
	    prefixed: prefixed
	});
	
	// this prevents errors when Hammer is loaded in the presence of an AMD
	//  style loader but by script tag, not by the loader.
	var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
	freeGlobal.Hammer = Hammer;
	
	if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	        return Hammer;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module != 'undefined' && module.exports) {
	    module.exports = Hammer;
	} else {
	    window[exportName] = Hammer;
	}
	
	})(window, document, 'Hammer');


/***/ },
/* 28 */
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(30);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(32)(content, {});
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\n* Skeleton V2.0.4\n* Copyright 2014, Dave Gamache\n* www.getskeleton.com\n* Free to use under the MIT license.\n* http://www.opensource.org/licenses/mit-license.php\n* 12/29/2014\n*/\n\n\n/* Table of contents\n––––––––––––––––––––––––––––––––––––––––––––––––––\n- Grid\n- Base Styles\n- Typography\n- Links\n- Buttons\n- Forms\n- Lists\n- Code\n- Tables\n- Spacing\n- Utilities\n- Clearing\n- Media Queries\n*/\n\n\n/* Grid\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.container {\n  position: relative;\n  width: 100%;\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 20px;\n  box-sizing: border-box; }\n.column,\n.columns {\n  width: 100%;\n  float: left;\n  box-sizing: border-box; }\n\n/* For devices larger than 400px */\n@media (min-width: 400px) {\n  .container {\n    width: 85%;\n    padding: 0; }\n}\n\n/* For devices larger than 550px */\n@media (min-width: 550px) {\n  .container {\n    width: 80%; }\n  .column,\n  .columns {\n    margin-left: 4%; }\n  .column:first-child,\n  .columns:first-child {\n    margin-left: 0; }\n\n  .one.column,\n  .one.columns                    { width: 4.66666666667%; }\n  .two.columns                    { width: 13.3333333333%; }\n  .three.columns                  { width: 22%;            }\n  .four.columns                   { width: 30.6666666667%; }\n  .five.columns                   { width: 39.3333333333%; }\n  .six.columns                    { width: 48%;            }\n  .seven.columns                  { width: 56.6666666667%; }\n  .eight.columns                  { width: 65.3333333333%; }\n  .nine.columns                   { width: 74.0%;          }\n  .ten.columns                    { width: 82.6666666667%; }\n  .eleven.columns                 { width: 91.3333333333%; }\n  .twelve.columns                 { width: 100%; margin-left: 0; }\n\n  .one-third.column               { width: 30.6666666667%; }\n  .two-thirds.column              { width: 65.3333333333%; }\n\n  .one-half.column                { width: 48%; }\n\n  /* Offsets */\n  .offset-by-one.column,\n  .offset-by-one.columns          { margin-left: 8.66666666667%; }\n  .offset-by-two.column,\n  .offset-by-two.columns          { margin-left: 17.3333333333%; }\n  .offset-by-three.column,\n  .offset-by-three.columns        { margin-left: 26%;            }\n  .offset-by-four.column,\n  .offset-by-four.columns         { margin-left: 34.6666666667%; }\n  .offset-by-five.column,\n  .offset-by-five.columns         { margin-left: 43.3333333333%; }\n  .offset-by-six.column,\n  .offset-by-six.columns          { margin-left: 52%;            }\n  .offset-by-seven.column,\n  .offset-by-seven.columns        { margin-left: 60.6666666667%; }\n  .offset-by-eight.column,\n  .offset-by-eight.columns        { margin-left: 69.3333333333%; }\n  .offset-by-nine.column,\n  .offset-by-nine.columns         { margin-left: 78.0%;          }\n  .offset-by-ten.column,\n  .offset-by-ten.columns          { margin-left: 86.6666666667%; }\n  .offset-by-eleven.column,\n  .offset-by-eleven.columns       { margin-left: 95.3333333333%; }\n\n  .offset-by-one-third.column,\n  .offset-by-one-third.columns    { margin-left: 34.6666666667%; }\n  .offset-by-two-thirds.column,\n  .offset-by-two-thirds.columns   { margin-left: 69.3333333333%; }\n\n  .offset-by-one-half.column,\n  .offset-by-one-half.columns     { margin-left: 52%; }\n\n}\n\n\n/* Base Styles\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/* NOTE\nhtml is set to 62.5% so that all the REM measurements throughout Skeleton\nare based on 10px sizing. So basically 1.5rem = 15px :) */\nhtml {\n  font-size: 62.5%; }\nbody {\n  font-size: 1.5em; /* currently ems cause chrome bug misinterpreting rems on body element */\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: \"Raleway\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: #222; }\n\n\n/* Typography\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300; }\nh1 { font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem;}\nh2 { font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }\nh3 { font-size: 3.0rem; line-height: 1.3;  letter-spacing: -.1rem; }\nh4 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -.08rem; }\nh5 { font-size: 1.8rem; line-height: 1.5;  letter-spacing: -.05rem; }\nh6 { font-size: 1.5rem; line-height: 1.6;  letter-spacing: 0; }\n\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 { font-size: 5.0rem; }\n  h2 { font-size: 4.2rem; }\n  h3 { font-size: 3.6rem; }\n  h4 { font-size: 3.0rem; }\n  h5 { font-size: 2.4rem; }\n  h6 { font-size: 1.5rem; }\n}\n\np {\n  margin-top: 0; }\n\n\n/* Links\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\na {\n  color: #1EAEDB; }\na:hover {\n  color: #0FA0CE; }\n\n\n/* Buttons\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.button,\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: .1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border-radius: 4px;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box; }\n.button:hover,\nbutton:hover,\ninput[type=\"submit\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"button\"]:hover,\n.button:focus,\nbutton:focus,\ninput[type=\"submit\"]:focus,\ninput[type=\"reset\"]:focus,\ninput[type=\"button\"]:focus {\n  color: #333;\n  border-color: #888;\n  outline: 0; }\n.button.button-primary,\nbutton.button-primary,\ninput[type=\"submit\"].button-primary,\ninput[type=\"reset\"].button-primary,\ninput[type=\"button\"].button-primary {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0; }\n.button.button-primary:hover,\nbutton.button-primary:hover,\ninput[type=\"submit\"].button-primary:hover,\ninput[type=\"reset\"].button-primary:hover,\ninput[type=\"button\"].button-primary:hover,\n.button.button-primary:focus,\nbutton.button-primary:focus,\ninput[type=\"submit\"].button-primary:focus,\ninput[type=\"reset\"].button-primary:focus,\ninput[type=\"button\"].button-primary:focus {\n  color: #FFF;\n  background-color: #1EAEDB;\n  border-color: #1EAEDB; }\n\n\n/* Forms\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\ninput[type=\"email\"],\ninput[type=\"number\"],\ninput[type=\"search\"],\ninput[type=\"text\"],\ninput[type=\"tel\"],\ninput[type=\"url\"],\ninput[type=\"password\"],\ntextarea,\nselect {\n  height: 38px;\n  padding: 6px 10px; /* The 6px vertically centers text on FF, ignored by Webkit */\n  background-color: #fff;\n  border: 1px solid #D1D1D1;\n  border-radius: 4px;\n  box-shadow: none;\n  box-sizing: border-box; }\n/* Removes awkward default styles on some inputs for iOS */\ninput[type=\"email\"],\ninput[type=\"number\"],\ninput[type=\"search\"],\ninput[type=\"text\"],\ninput[type=\"tel\"],\ninput[type=\"url\"],\ninput[type=\"password\"],\ntextarea {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\ntextarea {\n  min-height: 65px;\n  padding-top: 6px;\n  padding-bottom: 6px; }\ninput[type=\"email\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"password\"]:focus,\ntextarea:focus,\nselect:focus {\n  border: 1px solid #33C3F0;\n  outline: 0; }\nlabel,\nlegend {\n  display: block;\n  margin-bottom: .5rem;\n  font-weight: 600; }\nfieldset {\n  padding: 0;\n  border-width: 0; }\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  display: inline; }\nlabel > .label-body {\n  display: inline-block;\n  margin-left: .5rem;\n  font-weight: normal; }\n\n\n/* Lists\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nul {\n  list-style: circle inside; }\nol {\n  list-style: decimal inside; }\nol, ul {\n  padding-left: 0;\n  margin-top: 0; }\nul ul,\nul ol,\nol ol,\nol ul {\n  margin: 1.5rem 0 1.5rem 3rem;\n  font-size: 90%; }\nli {\n  margin-bottom: 1rem; }\n\n\n/* Code\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\ncode {\n  padding: .2rem .5rem;\n  margin: 0 .2rem;\n  font-size: 90%;\n  white-space: nowrap;\n  background: #F1F1F1;\n  border: 1px solid #E1E1E1;\n  border-radius: 4px; }\npre > code {\n  display: block;\n  padding: 1rem 1.5rem;\n  white-space: pre; }\n\n\n/* Tables\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nth,\ntd {\n  padding: 12px 15px;\n  text-align: left;\n  border-bottom: 1px solid #E1E1E1; }\nth:first-child,\ntd:first-child {\n  padding-left: 0; }\nth:last-child,\ntd:last-child {\n  padding-right: 0; }\n\n\n/* Spacing\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nbutton,\n.button {\n  margin-bottom: 1rem; }\ninput,\ntextarea,\nselect,\nfieldset {\n  margin-bottom: 1.5rem; }\npre,\nblockquote,\ndl,\nfigure,\ntable,\np,\nul,\nol,\nform {\n  margin-bottom: 2.5rem; }\n\n\n/* Utilities\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.u-full-width {\n  width: 100%;\n  box-sizing: border-box; }\n.u-max-full-width {\n  max-width: 100%;\n  box-sizing: border-box; }\n.u-pull-right {\n  float: right; }\n.u-pull-left {\n  float: left; }\n\n\n/* Misc\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nhr {\n  margin-top: 3rem;\n  margin-bottom: 3.5rem;\n  border-width: 0;\n  border-top: 1px solid #E1E1E1; }\n\n\n/* Clearing\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n\n/* Self Clearing Goodness */\n.container:after,\n.row:after,\n.u-cf {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n\n/* Media Queries\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/*\nNote: The best way to structure the use of media queries is to create the queries\nnear the relevant code. For example, if you wanted to change the styles for buttons\non small devices, paste the mobile query code up in the buttons section and style it\nthere.\n*/\n\n\n/* Larger than mobile */\n@media (min-width: 400px) {}\n\n/* Larger than phablet (also point when grid becomes active) */\n@media (min-width: 550px) {}\n\n/* Larger than tablet */\n@media (min-width: 750px) {}\n\n/* Larger than desktop */\n@media (min-width: 1000px) {}\n\n/* Larger than Desktop HD */\n@media (min-width: 1200px) {}\n", ""]);
	
	// exports


/***/ },
/* 31 */
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
/* 32 */
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(34);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(32)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./animate.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./animate.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	// imports
	
	
	// module
	exports.push([module.id, "@charset \"UTF-8\";\n\n/*!\n * animate.css -http://daneden.me/animate\n * Version - 3.5.0\n * Licensed under the MIT license - http://opensource.org/licenses/MIT\n *\n * Copyright (c) 2016 Daniel Eden\n */\n\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.animated.infinite {\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n\n.animated.hinge {\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s;\n}\n\n.animated.flipOutX,\n.animated.flipOutY,\n.animated.bounceIn,\n.animated.bounceOut {\n  -webkit-animation-duration: .75s;\n  animation-duration: .75s;\n}\n\n@-webkit-keyframes bounce {\n  from, 20%, 53%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    -webkit-transform: translate3d(0,0,0);\n    transform: translate3d(0,0,0);\n  }\n\n  40%, 43% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    -webkit-transform: translate3d(0, -30px, 0);\n    transform: translate3d(0, -30px, 0);\n  }\n\n  70% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    -webkit-transform: translate3d(0, -15px, 0);\n    transform: translate3d(0, -15px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0,-4px,0);\n    transform: translate3d(0,-4px,0);\n  }\n}\n\n@keyframes bounce {\n  from, 20%, 53%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    -webkit-transform: translate3d(0,0,0);\n    transform: translate3d(0,0,0);\n  }\n\n  40%, 43% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    -webkit-transform: translate3d(0, -30px, 0);\n    transform: translate3d(0, -30px, 0);\n  }\n\n  70% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    -webkit-transform: translate3d(0, -15px, 0);\n    transform: translate3d(0, -15px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0,-4px,0);\n    transform: translate3d(0,-4px,0);\n  }\n}\n\n.bounce {\n  -webkit-animation-name: bounce;\n  animation-name: bounce;\n  -webkit-transform-origin: center bottom;\n  transform-origin: center bottom;\n}\n\n@-webkit-keyframes flash {\n  from, 50%, to {\n    opacity: 1;\n  }\n\n  25%, 75% {\n    opacity: 0;\n  }\n}\n\n@keyframes flash {\n  from, 50%, to {\n    opacity: 1;\n  }\n\n  25%, 75% {\n    opacity: 0;\n  }\n}\n\n.flash {\n  -webkit-animation-name: flash;\n  animation-name: flash;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes pulse {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes pulse {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.pulse {\n  -webkit-animation-name: pulse;\n  animation-name: pulse;\n}\n\n@-webkit-keyframes rubberBand {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  30% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n    transform: scale3d(1.25, 0.75, 1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n    transform: scale3d(0.75, 1.25, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.15, 0.85, 1);\n    transform: scale3d(1.15, 0.85, 1);\n  }\n\n  65% {\n    -webkit-transform: scale3d(.95, 1.05, 1);\n    transform: scale3d(.95, 1.05, 1);\n  }\n\n  75% {\n    -webkit-transform: scale3d(1.05, .95, 1);\n    transform: scale3d(1.05, .95, 1);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes rubberBand {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  30% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n    transform: scale3d(1.25, 0.75, 1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n    transform: scale3d(0.75, 1.25, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.15, 0.85, 1);\n    transform: scale3d(1.15, 0.85, 1);\n  }\n\n  65% {\n    -webkit-transform: scale3d(.95, 1.05, 1);\n    transform: scale3d(.95, 1.05, 1);\n  }\n\n  75% {\n    -webkit-transform: scale3d(1.05, .95, 1);\n    transform: scale3d(1.05, .95, 1);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.rubberBand {\n  -webkit-animation-name: rubberBand;\n  animation-name: rubberBand;\n}\n\n@-webkit-keyframes shake {\n  from, to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n}\n\n@keyframes shake {\n  from, to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n}\n\n.shake {\n  -webkit-animation-name: shake;\n  animation-name: shake;\n}\n\n@-webkit-keyframes headShake {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  6.5% {\n    -webkit-transform: translateX(-6px) rotateY(-9deg);\n    transform: translateX(-6px) rotateY(-9deg);\n  }\n\n  18.5% {\n    -webkit-transform: translateX(5px) rotateY(7deg);\n    transform: translateX(5px) rotateY(7deg);\n  }\n\n  31.5% {\n    -webkit-transform: translateX(-3px) rotateY(-5deg);\n    transform: translateX(-3px) rotateY(-5deg);\n  }\n\n  43.5% {\n    -webkit-transform: translateX(2px) rotateY(3deg);\n    transform: translateX(2px) rotateY(3deg);\n  }\n\n  50% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes headShake {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  6.5% {\n    -webkit-transform: translateX(-6px) rotateY(-9deg);\n    transform: translateX(-6px) rotateY(-9deg);\n  }\n\n  18.5% {\n    -webkit-transform: translateX(5px) rotateY(7deg);\n    transform: translateX(5px) rotateY(7deg);\n  }\n\n  31.5% {\n    -webkit-transform: translateX(-3px) rotateY(-5deg);\n    transform: translateX(-3px) rotateY(-5deg);\n  }\n\n  43.5% {\n    -webkit-transform: translateX(2px) rotateY(3deg);\n    transform: translateX(2px) rotateY(3deg);\n  }\n\n  50% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.headShake {\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-name: headShake;\n  animation-name: headShake;\n}\n\n@-webkit-keyframes swing {\n  20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n    transform: rotate3d(0, 0, 1, 15deg);\n  }\n\n  40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n    transform: rotate3d(0, 0, 1, -10deg);\n  }\n\n  60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n    transform: rotate3d(0, 0, 1, 5deg);\n  }\n\n  80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n\n  to {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n}\n\n@keyframes swing {\n  20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n    transform: rotate3d(0, 0, 1, 15deg);\n  }\n\n  40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n    transform: rotate3d(0, 0, 1, -10deg);\n  }\n\n  60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n    transform: rotate3d(0, 0, 1, 5deg);\n  }\n\n  80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n\n  to {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n}\n\n.swing {\n  -webkit-transform-origin: top center;\n  transform-origin: top center;\n  -webkit-animation-name: swing;\n  animation-name: swing;\n}\n\n@-webkit-keyframes tada {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  10%, 20% {\n    -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n  }\n\n  30%, 50%, 70%, 90% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n\n  40%, 60%, 80% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes tada {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  10%, 20% {\n    -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n  }\n\n  30%, 50%, 70%, 90% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n\n  40%, 60%, 80% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.tada {\n  -webkit-animation-name: tada;\n  animation-name: tada;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes wobble {\n  from {\n    -webkit-transform: none;\n    transform: none;\n  }\n\n  15% {\n    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n  }\n\n  30% {\n    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n  }\n\n  45% {\n    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n  }\n\n  60% {\n    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes wobble {\n  from {\n    -webkit-transform: none;\n    transform: none;\n  }\n\n  15% {\n    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n  }\n\n  30% {\n    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n  }\n\n  45% {\n    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n  }\n\n  60% {\n    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.wobble {\n  -webkit-animation-name: wobble;\n  animation-name: wobble;\n}\n\n@-webkit-keyframes jello {\n  from, 11.1%, to {\n    -webkit-transform: none;\n    transform: none;\n  }\n\n  22.2% {\n    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n    transform: skewX(-12.5deg) skewY(-12.5deg);\n  }\n\n  33.3% {\n    -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n    transform: skewX(6.25deg) skewY(6.25deg);\n  }\n\n  44.4% {\n    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n    transform: skewX(-3.125deg) skewY(-3.125deg);\n  }\n\n  55.5% {\n    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n    transform: skewX(1.5625deg) skewY(1.5625deg);\n  }\n\n  66.6% {\n    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);\n    transform: skewX(-0.78125deg) skewY(-0.78125deg);\n  }\n\n  77.7% {\n    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\n    transform: skewX(0.390625deg) skewY(0.390625deg);\n  }\n\n  88.8% {\n    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n  }\n}\n\n@keyframes jello {\n  from, 11.1%, to {\n    -webkit-transform: none;\n    transform: none;\n  }\n\n  22.2% {\n    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n    transform: skewX(-12.5deg) skewY(-12.5deg);\n  }\n\n  33.3% {\n    -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n    transform: skewX(6.25deg) skewY(6.25deg);\n  }\n\n  44.4% {\n    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n    transform: skewX(-3.125deg) skewY(-3.125deg);\n  }\n\n  55.5% {\n    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n    transform: skewX(1.5625deg) skewY(1.5625deg);\n  }\n\n  66.6% {\n    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);\n    transform: skewX(-0.78125deg) skewY(-0.78125deg);\n  }\n\n  77.7% {\n    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\n    transform: skewX(0.390625deg) skewY(0.390625deg);\n  }\n\n  88.8% {\n    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n  }\n}\n\n.jello {\n  -webkit-animation-name: jello;\n  animation-name: jello;\n  -webkit-transform-origin: center;\n  transform-origin: center;\n}\n\n@-webkit-keyframes bounceIn {\n  from, 20%, 40%, 60%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(.9, .9, .9);\n    transform: scale3d(.9, .9, .9);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n    transform: scale3d(1.03, 1.03, 1.03);\n  }\n\n  80% {\n    -webkit-transform: scale3d(.97, .97, .97);\n    transform: scale3d(.97, .97, .97);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes bounceIn {\n  from, 20%, 40%, 60%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(.9, .9, .9);\n    transform: scale3d(.9, .9, .9);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n    transform: scale3d(1.03, 1.03, 1.03);\n  }\n\n  80% {\n    -webkit-transform: scale3d(.97, .97, .97);\n    transform: scale3d(.97, .97, .97);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.bounceIn {\n  -webkit-animation-name: bounceIn;\n  animation-name: bounceIn;\n}\n\n@-webkit-keyframes bounceInDown {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3000px, 0);\n    transform: translate3d(0, -3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 25px, 0);\n    transform: translate3d(0, 25px, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, 5px, 0);\n    transform: translate3d(0, 5px, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes bounceInDown {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3000px, 0);\n    transform: translate3d(0, -3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 25px, 0);\n    transform: translate3d(0, 25px, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, 5px, 0);\n    transform: translate3d(0, 5px, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.bounceInDown {\n  -webkit-animation-name: bounceInDown;\n  animation-name: bounceInDown;\n}\n\n@-webkit-keyframes bounceInLeft {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-3000px, 0, 0);\n    transform: translate3d(-3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(25px, 0, 0);\n    transform: translate3d(25px, 0, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(5px, 0, 0);\n    transform: translate3d(5px, 0, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes bounceInLeft {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-3000px, 0, 0);\n    transform: translate3d(-3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(25px, 0, 0);\n    transform: translate3d(25px, 0, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(5px, 0, 0);\n    transform: translate3d(5px, 0, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.bounceInLeft {\n  -webkit-animation-name: bounceInLeft;\n  animation-name: bounceInLeft;\n}\n\n@-webkit-keyframes bounceInRight {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(3000px, 0, 0);\n    transform: translate3d(3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(-25px, 0, 0);\n    transform: translate3d(-25px, 0, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0);\n    transform: translate3d(-5px, 0, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes bounceInRight {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(3000px, 0, 0);\n    transform: translate3d(3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(-25px, 0, 0);\n    transform: translate3d(-25px, 0, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0);\n    transform: translate3d(-5px, 0, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.bounceInRight {\n  -webkit-animation-name: bounceInRight;\n  animation-name: bounceInRight;\n}\n\n@-webkit-keyframes bounceInUp {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 3000px, 0);\n    transform: translate3d(0, 3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n    transform: translate3d(0, -5px, 0);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes bounceInUp {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 3000px, 0);\n    transform: translate3d(0, 3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n    transform: translate3d(0, -5px, 0);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.bounceInUp {\n  -webkit-animation-name: bounceInUp;\n  animation-name: bounceInUp;\n}\n\n@-webkit-keyframes bounceOut {\n  20% {\n    -webkit-transform: scale3d(.9, .9, .9);\n    transform: scale3d(.9, .9, .9);\n  }\n\n  50%, 55% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n}\n\n@keyframes bounceOut {\n  20% {\n    -webkit-transform: scale3d(.9, .9, .9);\n    transform: scale3d(.9, .9, .9);\n  }\n\n  50%, 55% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n}\n\n.bounceOut {\n  -webkit-animation-name: bounceOut;\n  animation-name: bounceOut;\n}\n\n@-webkit-keyframes bounceOutDown {\n  20% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n@keyframes bounceOutDown {\n  20% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n.bounceOutDown {\n  -webkit-animation-name: bounceOutDown;\n  animation-name: bounceOutDown;\n}\n\n@-webkit-keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(20px, 0, 0);\n    transform: translate3d(20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n@keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(20px, 0, 0);\n    transform: translate3d(20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n.bounceOutLeft {\n  -webkit-animation-name: bounceOutLeft;\n  animation-name: bounceOutLeft;\n}\n\n@-webkit-keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(-20px, 0, 0);\n    transform: translate3d(-20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n@keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(-20px, 0, 0);\n    transform: translate3d(-20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n.bounceOutRight {\n  -webkit-animation-name: bounceOutRight;\n  animation-name: bounceOutRight;\n}\n\n@-webkit-keyframes bounceOutUp {\n  20% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 20px, 0);\n    transform: translate3d(0, 20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n@keyframes bounceOutUp {\n  20% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 20px, 0);\n    transform: translate3d(0, 20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n.bounceOutUp {\n  -webkit-animation-name: bounceOutUp;\n  animation-name: bounceOutUp;\n}\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n\n@-webkit-keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n}\n\n@-webkit-keyframes fadeInDownBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInDownBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInDownBig {\n  -webkit-animation-name: fadeInDownBig;\n  animation-name: fadeInDownBig;\n}\n\n@-webkit-keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInLeft {\n  -webkit-animation-name: fadeInLeft;\n  animation-name: fadeInLeft;\n}\n\n@-webkit-keyframes fadeInLeftBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInLeftBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInLeftBig {\n  -webkit-animation-name: fadeInLeftBig;\n  animation-name: fadeInLeftBig;\n}\n\n@-webkit-keyframes fadeInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInRight {\n  -webkit-animation-name: fadeInRight;\n  animation-name: fadeInRight;\n}\n\n@-webkit-keyframes fadeInRightBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInRightBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInRightBig {\n  -webkit-animation-name: fadeInRightBig;\n  animation-name: fadeInRightBig;\n}\n\n@-webkit-keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInUp {\n  -webkit-animation-name: fadeInUp;\n  animation-name: fadeInUp;\n}\n\n@-webkit-keyframes fadeInUpBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInUpBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInUpBig {\n  -webkit-animation-name: fadeInUpBig;\n  animation-name: fadeInUpBig;\n}\n\n@-webkit-keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n.fadeOut {\n  -webkit-animation-name: fadeOut;\n  animation-name: fadeOut;\n}\n\n@-webkit-keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n@keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n.fadeOutDown {\n  -webkit-animation-name: fadeOutDown;\n  animation-name: fadeOutDown;\n}\n\n@-webkit-keyframes fadeOutDownBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n@keyframes fadeOutDownBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n.fadeOutDownBig {\n  -webkit-animation-name: fadeOutDownBig;\n  animation-name: fadeOutDownBig;\n}\n\n@-webkit-keyframes fadeOutLeft {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n@keyframes fadeOutLeft {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.fadeOutLeft {\n  -webkit-animation-name: fadeOutLeft;\n  animation-name: fadeOutLeft;\n}\n\n@-webkit-keyframes fadeOutLeftBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n@keyframes fadeOutLeftBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n.fadeOutLeftBig {\n  -webkit-animation-name: fadeOutLeftBig;\n  animation-name: fadeOutLeftBig;\n}\n\n@-webkit-keyframes fadeOutRight {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n@keyframes fadeOutRight {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n.fadeOutRight {\n  -webkit-animation-name: fadeOutRight;\n  animation-name: fadeOutRight;\n}\n\n@-webkit-keyframes fadeOutRightBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n@keyframes fadeOutRightBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n.fadeOutRightBig {\n  -webkit-animation-name: fadeOutRightBig;\n  animation-name: fadeOutRightBig;\n}\n\n@-webkit-keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n@keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n.fadeOutUp {\n  -webkit-animation-name: fadeOutUp;\n  animation-name: fadeOutUp;\n}\n\n@-webkit-keyframes fadeOutUpBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n@keyframes fadeOutUpBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n.fadeOutUpBig {\n  -webkit-animation-name: fadeOutUpBig;\n  animation-name: fadeOutUpBig;\n}\n\n@-webkit-keyframes flip {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) scale3d(.95, .95, .95);\n    transform: perspective(400px) scale3d(.95, .95, .95);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n}\n\n@keyframes flip {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) scale3d(.95, .95, .95);\n    transform: perspective(400px) scale3d(.95, .95, .95);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n}\n\n.animated.flip {\n  -webkit-backface-visibility: visible;\n  backface-visibility: visible;\n  -webkit-animation-name: flip;\n  animation-name: flip;\n}\n\n@-webkit-keyframes flipInX {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n}\n\n@keyframes flipInX {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n}\n\n.flipInX {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInX;\n  animation-name: flipInX;\n}\n\n@-webkit-keyframes flipInY {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n}\n\n@keyframes flipInY {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n}\n\n.flipInY {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInY;\n  animation-name: flipInY;\n}\n\n@-webkit-keyframes flipOutX {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes flipOutX {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n.flipOutX {\n  -webkit-animation-name: flipOutX;\n  animation-name: flipOutX;\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n}\n\n@-webkit-keyframes flipOutY {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes flipOutY {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n.flipOutY {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipOutY;\n  animation-name: flipOutY;\n}\n\n@-webkit-keyframes lightSpeedIn {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    -webkit-transform: skewX(20deg);\n    transform: skewX(20deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: skewX(-5deg);\n    transform: skewX(-5deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes lightSpeedIn {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    -webkit-transform: skewX(20deg);\n    transform: skewX(20deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: skewX(-5deg);\n    transform: skewX(-5deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.lightSpeedIn {\n  -webkit-animation-name: lightSpeedIn;\n  animation-name: lightSpeedIn;\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out;\n}\n\n@-webkit-keyframes lightSpeedOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0;\n  }\n}\n\n@keyframes lightSpeedOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0;\n  }\n}\n\n.lightSpeedOut {\n  -webkit-animation-name: lightSpeedOut;\n  animation-name: lightSpeedOut;\n  -webkit-animation-timing-function: ease-in;\n  animation-timing-function: ease-in;\n}\n\n@-webkit-keyframes rotateIn {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateIn {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateIn {\n  -webkit-animation-name: rotateIn;\n  animation-name: rotateIn;\n}\n\n@-webkit-keyframes rotateInDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInDownLeft {\n  -webkit-animation-name: rotateInDownLeft;\n  animation-name: rotateInDownLeft;\n}\n\n@-webkit-keyframes rotateInDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInDownRight {\n  -webkit-animation-name: rotateInDownRight;\n  animation-name: rotateInDownRight;\n}\n\n@-webkit-keyframes rotateInUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInUpLeft {\n  -webkit-animation-name: rotateInUpLeft;\n  animation-name: rotateInUpLeft;\n}\n\n@-webkit-keyframes rotateInUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -90deg);\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -90deg);\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInUpRight {\n  -webkit-animation-name: rotateInUpRight;\n  animation-name: rotateInUpRight;\n}\n\n@-webkit-keyframes rotateOut {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, 200deg);\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOut {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, 200deg);\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n}\n\n.rotateOut {\n  -webkit-animation-name: rotateOut;\n  animation-name: rotateOut;\n}\n\n@-webkit-keyframes rotateOutDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutDownLeft {\n  -webkit-animation-name: rotateOutDownLeft;\n  animation-name: rotateOutDownLeft;\n}\n\n@-webkit-keyframes rotateOutDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutDownRight {\n  -webkit-animation-name: rotateOutDownRight;\n  animation-name: rotateOutDownRight;\n}\n\n@-webkit-keyframes rotateOutUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutUpLeft {\n  -webkit-animation-name: rotateOutUpLeft;\n  animation-name: rotateOutUpLeft;\n}\n\n@-webkit-keyframes rotateOutUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 90deg);\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 90deg);\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutUpRight {\n  -webkit-animation-name: rotateOutUpRight;\n  animation-name: rotateOutUpRight;\n}\n\n@-webkit-keyframes hinge {\n  0% {\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  20%, 60% {\n    -webkit-transform: rotate3d(0, 0, 1, 80deg);\n    transform: rotate3d(0, 0, 1, 80deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  40%, 80% {\n    -webkit-transform: rotate3d(0, 0, 1, 60deg);\n    transform: rotate3d(0, 0, 1, 60deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 700px, 0);\n    transform: translate3d(0, 700px, 0);\n    opacity: 0;\n  }\n}\n\n@keyframes hinge {\n  0% {\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  20%, 60% {\n    -webkit-transform: rotate3d(0, 0, 1, 80deg);\n    transform: rotate3d(0, 0, 1, 80deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  40%, 80% {\n    -webkit-transform: rotate3d(0, 0, 1, 60deg);\n    transform: rotate3d(0, 0, 1, 60deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 700px, 0);\n    transform: translate3d(0, 700px, 0);\n    opacity: 0;\n  }\n}\n\n.hinge {\n  -webkit-animation-name: hinge;\n  animation-name: hinge;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes rollIn {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes rollIn {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.rollIn {\n  -webkit-animation-name: rollIn;\n  animation-name: rollIn;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes rollOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n  }\n}\n\n@keyframes rollOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n  }\n}\n\n.rollOut {\n  -webkit-animation-name: rollOut;\n  animation-name: rollOut;\n}\n\n@-webkit-keyframes zoomIn {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  50% {\n    opacity: 1;\n  }\n}\n\n@keyframes zoomIn {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  50% {\n    opacity: 1;\n  }\n}\n\n.zoomIn {\n  -webkit-animation-name: zoomIn;\n  animation-name: zoomIn;\n}\n\n@-webkit-keyframes zoomInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInDown {\n  -webkit-animation-name: zoomInDown;\n  animation-name: zoomInDown;\n}\n\n@-webkit-keyframes zoomInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInLeft {\n  -webkit-animation-name: zoomInLeft;\n  animation-name: zoomInLeft;\n}\n\n@-webkit-keyframes zoomInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\n    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\n    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInRight {\n  -webkit-animation-name: zoomInRight;\n  animation-name: zoomInRight;\n}\n\n@-webkit-keyframes zoomInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInUp {\n  -webkit-animation-name: zoomInUp;\n  animation-name: zoomInUp;\n}\n\n@-webkit-keyframes zoomOut {\n  from {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n@keyframes zoomOut {\n  from {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n.zoomOut {\n  -webkit-animation-name: zoomOut;\n  animation-name: zoomOut;\n}\n\n@-webkit-keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomOutDown {\n  -webkit-animation-name: zoomOutDown;\n  animation-name: zoomOutDown;\n}\n\n@-webkit-keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale(.1) translate3d(-2000px, 0, 0);\n    transform: scale(.1) translate3d(-2000px, 0, 0);\n    -webkit-transform-origin: left center;\n    transform-origin: left center;\n  }\n}\n\n@keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale(.1) translate3d(-2000px, 0, 0);\n    transform: scale(.1) translate3d(-2000px, 0, 0);\n    -webkit-transform-origin: left center;\n    transform-origin: left center;\n  }\n}\n\n.zoomOutLeft {\n  -webkit-animation-name: zoomOutLeft;\n  animation-name: zoomOutLeft;\n}\n\n@-webkit-keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale(.1) translate3d(2000px, 0, 0);\n    transform: scale(.1) translate3d(2000px, 0, 0);\n    -webkit-transform-origin: right center;\n    transform-origin: right center;\n  }\n}\n\n@keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale(.1) translate3d(2000px, 0, 0);\n    transform: scale(.1) translate3d(2000px, 0, 0);\n    -webkit-transform-origin: right center;\n    transform-origin: right center;\n  }\n}\n\n.zoomOutRight {\n  -webkit-animation-name: zoomOutRight;\n  animation-name: zoomOutRight;\n}\n\n@-webkit-keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomOutUp {\n  -webkit-animation-name: zoomOutUp;\n  animation-name: zoomOutUp;\n}\n\n@-webkit-keyframes slideInDown {\n  from {\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes slideInDown {\n  from {\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInDown {\n  -webkit-animation-name: slideInDown;\n  animation-name: slideInDown;\n}\n\n@-webkit-keyframes slideInLeft {\n  from {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes slideInLeft {\n  from {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInLeft {\n  -webkit-animation-name: slideInLeft;\n  animation-name: slideInLeft;\n}\n\n@-webkit-keyframes slideInRight {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes slideInRight {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInRight {\n  -webkit-animation-name: slideInRight;\n  animation-name: slideInRight;\n}\n\n@-webkit-keyframes slideInUp {\n  from {\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes slideInUp {\n  from {\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInUp {\n  -webkit-animation-name: slideInUp;\n  animation-name: slideInUp;\n}\n\n@-webkit-keyframes slideOutDown {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n@keyframes slideOutDown {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n.slideOutDown {\n  -webkit-animation-name: slideOutDown;\n  animation-name: slideOutDown;\n}\n\n@-webkit-keyframes slideOutLeft {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n@keyframes slideOutLeft {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.slideOutLeft {\n  -webkit-animation-name: slideOutLeft;\n  animation-name: slideOutLeft;\n}\n\n@-webkit-keyframes slideOutRight {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n@keyframes slideOutRight {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n.slideOutRight {\n  -webkit-animation-name: slideOutRight;\n  animation-name: slideOutRight;\n}\n\n@-webkit-keyframes slideOutUp {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n@keyframes slideOutUp {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n.slideOutUp {\n  -webkit-animation-name: slideOutUp;\n  animation-name: slideOutUp;\n}\n", ""]);
	
	// exports


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(36);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(32)(content, {});
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\n  background: #eee;\n  margin: 0px;\n  flex: 1;\n  display: -webkit-flex;\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  flex-direction: -webkit-column;\n  flex-direction: -moz-column;\n  flex-direction: -ms-column;\n  flex-direction: -o-column;\n  flex-direction: column;\n}\n\nhtml {\n    height: 100%;\n    display: -webkit-flex;\n    display: -moz-flex;\n    display: -ms-flex;\n    display: -o-flex;\n    display: flex;\n}\n\n.displayFlex {\n  display: -webkit-flex;\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n}\n\n.displayFlexFixed {\n  display: -webkit-flex;\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  position: fixed;\n  width: 100%;\n}\n\n.flex_row {\n  flex-direction: -webkit-row;\n  flex-direction: -moz-row;\n  flex-direction: -ms-row;\n  flex-direction: -o-row;\n  flex-direction: row;\n}\n\n.flex_column {\n  flex-direction: -webkit-column;\n  flex-direction: -moz-column;\n  flex-direction: -ms-column;\n  flex-direction: -o-column;\n  flex-direction: column;\n}\n\n.flex_nowrap {\n  flex-wrap: -webkit-nowrap;\n  flex-wrap: -moz-nowrap;\n  flex-wrap: -ms-nowrap;\n  flex-wrap: -o-nowrap;\n  flex-wrap: nowrap;\n}\n\n.flex_content {\n    flex: 1;\n}\n\n.card {\n  width: auto;\n  background: #fff;\n  border-radius: 3px;\n  box-shadow: 0 2px 5px #ccc;\n  padding: 1rem;\n}\n.card-img {\n  border-radius: 5px 5px 0 0;\n  max-width: 100%;\n  height: auto;\n}\n.card-content {\n  padding: 1rem;\n}\n.card-title {\n  font-size: 20px;\n  margin-bottom: 20px;\n  text-align: center;\n  color: #333;\n}\n.card-text {\n  color: #777;\n  font-size: 14px;\n  line-height: 1.5;\n}\n.card-link {\n  text-align: center;\n  border-top: 1px solid #eee;\n  padding: 20px;\n}\n.card-link a {\n  text-decoration: none;\n  color: #0bd;\n  margin: 0 10px;\n}\n.card-link a:hover {\n  color: #0090aa;\n}\n", ""]);
	
	// exports


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDhlNzA0ODEyMjY4MzViMTkyNjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL21pdGhyaWwvbWl0aHJpbC5taW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L2NvbXBvbmVudHMvbmF2YmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi91bmRlcnNjb3JlL3VuZGVyc2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9tb2RlbC93b3Jkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L21vZGVsL2NoZWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvaGVscGVyL3N0Z3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9jdHJsL2NoZWNrUnVuLmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvc2NlbmUvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L2NvbXBvbmVudHMvaG9tZU1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9jdHJsL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9zY2VuZS93b3Jkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L2NvbXBvbmVudHMvd29yZExpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9jdHJsL3dvcmRzLmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvc2NlbmUvd29yZHNOZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9jb21wb25lbnRzL3dvcmRDYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvY3RybC93b3Jkc05ldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L3NjZW5lL1dvcmRzRWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L2N0cmwvV29yZHNFZGl0LmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvc2NlbmUvQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9jb21wb25lbnRzL2xpbWl0U2VsZWN0Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L2NvbXBvbmVudHMvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvY3RybC9jaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L3NjZW5lL0NoZWNrUnVuLmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvY29tcG9uZW50cy9jaGVja0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9oYW1tZXJqcy9oYW1tZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9jb21wb25lbnRzL2NoZWNrQnV0dG9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL3NrZWxldG9uL2Nzcy9za2VsZXRvbi5jc3M/MDJjNCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL3NrZWxldG9uL2Nzcy9za2VsZXRvbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9hbmltYXRlLmNzcy9hbmltYXRlLmNzcz9mOTJiIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvYW5pbWF0ZS5jc3MvYW5pbWF0ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5jc3M/MjFhYSIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3N0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMEMsWUFBWTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMEMsWUFBWTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBNkIsZ0JBQWdCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscURBQW9EO0FBQ3BELElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTBDO0FBQzFDLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZEQUE0RCxZQUFZO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUE4QyxZQUFZO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBOEMsWUFBWTtBQUMxRDtBQUNBO0FBQ0Esc0JBQXFCLGdCQUFnQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkMsWUFBWTtBQUN6RDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWSw4QkFBOEI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEwQywwQkFBMEI7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsc0JBQXFCLGNBQWM7QUFDbkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCLFlBQVk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWUsWUFBWTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU8sZUFBZTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVcsUUFBUTtBQUNuQixZQUFXLE9BQU87QUFDbEIsWUFBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGNBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsYUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsT0FBTztBQUNsQixZQUFXLE9BQU87QUFDbEIsYUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsWUFBVyxPQUFPO0FBQ2xCLGFBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVcsT0FBTyxLQUFLO0FBQ3ZCLFlBQVcsT0FBTyxLQUFLO0FBQ3ZCLFlBQVcsTUFBTTtBQUNqQixhQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsT0FBTztBQUNsQixZQUFXLE1BQU07QUFDakIsYUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLFlBQVcsTUFBTTtBQUNqQixhQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLFlBQVcsTUFBTTtBQUNqQixhQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQXlCOztBQUV6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0EsWUFBVyxZQUFZO0FBQ3ZCLFlBQVcs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QSxpQ0FBZ0MscUJBQXFCLGdCQUFnQixZQUFZLDBCQUEwQix1QkFBdUIsc0JBQXNCLHFCQUFxQixrQkFBa0IsbUNBQW1DLGdDQUFnQywrQkFBK0IsOEJBQThCLDJCQUEyQixHQUFHLFVBQVUsbUJBQW1CLDRCQUE0Qix5QkFBeUIsd0JBQXdCLHVCQUF1QixvQkFBb0IsR0FBRyxrQkFBa0IsMEJBQTBCLHVCQUF1QixzQkFBc0IscUJBQXFCLGtCQUFrQixHQUFHLHVCQUF1QiwwQkFBMEIsdUJBQXVCLHNCQUFzQixxQkFBcUIsa0JBQWtCLG9CQUFvQixnQkFBZ0IsR0FBRyxlQUFlLGdDQUFnQyw2QkFBNkIsNEJBQTRCLDJCQUEyQix3QkFBd0IsR0FBRyxrQkFBa0IsbUNBQW1DLGdDQUFnQywrQkFBK0IsOEJBQThCLDJCQUEyQixHQUFHLGtCQUFrQiw4QkFBOEIsMkJBQTJCLDBCQUEwQix5QkFBeUIsc0JBQXNCLEdBQUcsbUJBQW1CLGNBQWMsR0FBRyxXQUFXLGdCQUFnQixxQkFBcUIsdUJBQXVCLCtCQUErQixrQkFBa0IsR0FBRyxhQUFhLCtCQUErQixvQkFBb0IsaUJBQWlCLEdBQUcsaUJBQWlCLGtCQUFrQixHQUFHLGVBQWUsb0JBQW9CLHdCQUF3Qix1QkFBdUIsZ0JBQWdCLEdBQUcsY0FBYyxnQkFBZ0Isb0JBQW9CLHFCQUFxQixHQUFHLGNBQWMsdUJBQXVCLCtCQUErQixrQkFBa0IsR0FBRyxnQkFBZ0IsMEJBQTBCLGdCQUFnQixtQkFBbUIsR0FBRyxzQkFBc0IsbUJBQW1CLEdBQUc7O0FBRXQ2RCIsImZpbGUiOiIuL3d3dy9qcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDA4ZTcwNDgxMjI2ODM1YjE5MjY4XG4gKiovIiwiaW1wb3J0IG0gZnJvbSBcIm1pdGhyaWxcIjtcbmltcG9ydCBuYXZiYXIgZnJvbSBcIi4vY29tcG9uZW50cy9uYXZiYXJcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi9zdG9yZVwiO1xuaW1wb3J0IFRlc3QgZnJvbSBcIi4vY3RybC9jaGVja1J1blwiO1xuLy8gaW1wb3J0IENtZCBmcm9tIFwiLi9oZWxwZXIvbXlTcWxpdGVcIjtcblxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vc2NlbmUvaG9tZVwiO1xuaW1wb3J0IFdvcmRzIGZyb20gXCIuL3NjZW5lL3dvcmRzXCI7XG5pbXBvcnQgV29yZHNOZXcgZnJvbSBcIi4vc2NlbmUvd29yZHNOZXdcIjtcbmltcG9ydCBXb3Jkc0VkaXQgZnJvbSBcIi4vc2NlbmUvV29yZHNFZGl0XCI7XG5pbXBvcnQgQ2hlY2sgZnJvbSBcIi4vc2NlbmUvQ2hlY2tcIjtcbmltcG9ydCBDaGVja1J1biBmcm9tIFwiLi9zY2VuZS9DaGVja1J1blwiO1xuXG5pbXBvcnQgXCJza2VsZXRvblwiO1xuaW1wb3J0IFwiYW5pbWF0ZS5jc3NcIjtcbmltcG9ydCBcIi4uL2Nzcy9zdHlsZS5jc3NcIjtcblxuY2xhc3MgQ3RybCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBtLnByb3AobmFtZSk7XG4gICAgfVxufVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRldmljZXJlYWR5XCIsIHN0b3JlLmluaXQsIGZhbHNlKTtcbi8vIHN0b3JlLnN0cmFnZS5zZXQoW1xuLy8gICAgIHtyb3dpZDogMCwgZW46IFwiaGVsbG9cIiwgamE6IFwi44GT44KT44Gr44Gh44GvXCJ9LFxuLy8gICAgIHtyb3dpZDogMSwgZW46IFwiQXBwbGVcIiwgamE6IFwi44KK44KT44GUXCJ9LFxuLy8gICAgIHtyb3dpZDogMiwgZW46IFwid2luZG93XCIsIGphOiBcIueqk1wifVxuLy8gXSk7XG4vLyBzdG9yZS5hZGRBbGwoc3RvcmUud29yZExpc3QsIHN0b3JlLnN0cmFnZS5nZXQoKSk7XG4vLyBzdG9yZS5mZWF0Y2goKTtcbi8vIHN0b3JlLmluaXQoKTtcbi8vIGNvbnNvbGUubG9nKHN0b3JlLndvcmRMaXN0Lmxlbmd0aCk7XG4vLyBzdG9yZS5hZGRBbGwoc3RvcmUud29yZExpc3QsIFtcbi8vICAgICB7XG4vLyAgICAgICAgIGluZGV4OiAwLFxuLy8gICAgICAgICBlbjogXCJoZWxsb1wiLFxuLy8gICAgICAgICBqYTogXCLjgZPjgpPjgavjgaHjga9cIlxuLy8gICAgIH0se1xuLy8gICAgICAgICBpbmRleDogMSxcbi8vICAgICAgICAgZW46IFwiQXBwbGVcIixcbi8vICAgICAgICAgamE6IFwi44KK44KT44GUXCJcbi8vICAgICB9LHtcbi8vICAgICAgICAgaW5kZXg6IDIsXG4vLyAgICAgICAgIGVuOiBcIndpbmRvd1wiLFxuLy8gICAgICAgICBqYTogXCLnqpNcIlxuLy8gICAgIH1cbi8vIF0pO1xuXG4vLyBjb25zdCBjbWQgPSBuZXcgQ21kKCk7XG4vL1xuLy8gY29uc29sZS5sb2coY21kLnNlbGVjdCh7XG4vLyAgICAgbmFtZTogXCJ0ZXN0XCJcbi8vICAgICAvLyB3aGVyZTogXCJmbGFnID0gXCIgKyB0cnVlXG4vLyAgICAgLy8gZGF0YTogW1xuLy8gICAgIC8vICAgICB7XG4vLyAgICAgLy8gICAgICAgICBjb2xvbWU6IFwiaWRcIixcbi8vICAgICAvLyAgICAgICAgIHZhbHVlOiAxXG4vLyAgICAgLy8gICAgIH0se1xuLy8gICAgIC8vICAgICAgICAgY29sb21lOiBcIm5hbWVcIixcbi8vICAgICAvLyAgICAgICAgIHZhbHVlOiBcIidzYWl0b3UnXCJcbi8vICAgICAvLyAgICAgfSx7XG4vLyAgICAgLy8gICAgICAgICBjb2xvbWU6IFwiYWdlXCIsXG4vLyAgICAgLy8gICAgICAgICB2YWx1ZTogXCInMjInXCJcbi8vICAgICAvLyAgICAgfVxuLy8gICAgIC8vIF1cbi8vIH0pKTtcblxuY29uc3QgdGVzdCA9IG5ldyBUZXN0KCk7XG4vLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0ZXN0LndvcmQoKSkpO1xuLy8gdGVzdC5pc0ZsYWcoKTtcbi8vIHRlc3QuZ2V0TmV4dFdvcmQoKTtcbi8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRlc3Qud29yZCgpKSk7XG4vLyBjb25zb2xlLmxvZyhzdG9yZS53b3JkTGlzdC5sZW5ndGgpO1xuLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoc3RvcmUud29yZExpc3QpKTtcblxuY29uc3QgdGVzdDEgPSB7XG4gICAgY29udHJvbGxlcjogKCkgPT4gbmV3IEN0cmwoXCJ0b21va2F6dVwiKSxcbiAgICB2aWV3OiAoY3RybCk9PntcbiAgICAgICAgcmV0dXJuIG0oXCJkaXZcIiwgW1xuICAgICAgICAgICAgbmF2YmFyKHN0b3JlLnNjZW5lLndvcmRzLm5hdmJhciksXG4gICAgICAgICAgICBtKFwiLmRpc3BsYXlGbGV4IGZsZXhfY29sdW1uIG5vd3JhcFwiLCB7XG4gICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwicGFkZGluZy10b3BcIjogXCI2cmVtXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgbShcIi5jYXJkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmdpblwiOiBcIjAuNWVtXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgbShcImxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9yXCI6IFwiaG9nZVwiXG4gICAgICAgICAgICAgICAgICAgIH0sIFwidGVzdFwiKSxcbiAgICAgICAgICAgICAgICAgICAgbShcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjpcInUtZnVsbC13aWR0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcImhvZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogY3RybC5uYW1lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9uaW5wdXRcIjogbS53aXRoQXR0cihcInZhbHVlXCIsIGN0cmwubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIG0oXCJidXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOlwidS1mdWxsLXdpZHRoXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcInN1Ym1pdFwiKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIG0oXCIuY2FyZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW5cIjogXCIwLjVlbVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICAgIG0oXCJsYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImZvclwiOiBcImhvZ2VcIlxuICAgICAgICAgICAgICAgICAgICB9LCBcInRlc3RcIiksXG4gICAgICAgICAgICAgICAgICAgIG0oXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6XCJ1LWZ1bGwtd2lkdGhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJob2dlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGN0cmwubmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvbmlucHV0XCI6IG0ud2l0aEF0dHIoXCJ2YWx1ZVwiLCBjdHJsLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBtKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjpcInUtZnVsbC13aWR0aFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXCJzdWJtaXRcIilcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBtKFwiLmNhcmRcIiwge1xuICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWFyZ2luXCI6IFwiMC41ZW1cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgICAgICBtKFwibGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JcIjogXCJob2dlXCJcbiAgICAgICAgICAgICAgICAgICAgfSwgXCJ0ZXN0XCIpLFxuICAgICAgICAgICAgICAgICAgICBtKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOlwidS1mdWxsLXdpZHRoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiaG9nZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBjdHJsLm5hbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib25pbnB1dFwiOiBtLndpdGhBdHRyKFwidmFsdWVcIiwgY3RybC5uYW1lKVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgbShcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6XCJ1LWZ1bGwtd2lkdGhcIlxuICAgICAgICAgICAgICAgICAgICB9LFwic3VibWl0XCIpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgbShcIi5jYXJkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmdpblwiOiBcIjAuNWVtXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgbShcImxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9yXCI6IFwiaG9nZVwiXG4gICAgICAgICAgICAgICAgICAgIH0sIFwidGVzdFwiKSxcbiAgICAgICAgICAgICAgICAgICAgbShcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjpcInUtZnVsbC13aWR0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcImhvZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogY3RybC5uYW1lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9uaW5wdXRcIjogbS53aXRoQXR0cihcInZhbHVlXCIsIGN0cmwubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIG0oXCJidXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOlwidS1mdWxsLXdpZHRoXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcInN1Ym1pdFwiKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICBdKTtcbiAgICB9XG59O1xuXG4vLyBmdW5jdGlvbiBnZXREYXRhKCl7XG4vLyAgICAgbS5yZXF1ZXN0KHtcbi8vICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuLy8gICAgICAgICB1cmw6IFwiaHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J5c2NyYjRyTFd6cjNpbTFXQ2RBYlFXRGwtazE0bVJ5QXlHa3VWQnpUeVB3bTl1U05RL2V4ZWNcIixcbi8vICAgICAgICAgaW5pdGlhbFZhbHVlOiBbXVxuLy8gICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzKXtcbi8vICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbi8vICAgICB9KTtcbi8vIH1cbi8vZ2V0RGF0YSgpO1xuLy8gbS5tb3VudChkb2N1bWVudC5ib2R5LCB0ZXN0KTtcbi8vIG0ucm91dGUoZG9jdW1lbnQuYm9keSwgXCIvXCIsIHtcbi8vICAgICBcIi9cIjogSG9tZSxcbi8vICAgICBcIi9ob21lXCI6IEhvbWUsXG4vLyAgICAgXCIvd29yZHNcIjogV29yZHMsXG4vLyAgICAgXCIvd29yZHMvbmV3XCI6IFdvcmRzTmV3LFxuLy8gICAgIFwiL3dvcmRzL2VkaXRcIjogV29yZHNFZGl0LFxuLy8gICAgIFwiL2NoZWNrXCI6IENoZWNrLFxuLy8gICAgIFwiL2NoZWNrL3J1blwiOiBDaGVja1J1bixcbi8vICAgICBcIi90ZXN0XCI6IFRlc3QsXG4vLyAgICAgXCIvdGVzdC9ydW5cIjogVGVzdFJ1bixcbi8vICAgICBcIi90ZXN0L3Jlc3VsdFwiOiBUZXN0UmVzdWx0XG4vLyB9KTtcbm0ucm91dGUoZG9jdW1lbnQuYm9keSwgXCIvaG9tZVwiLCB7XG4gICAgXCIvaG9tZVwiOiBIb21lLFxuICAgIFwiL3dvcmRzXCI6IFdvcmRzLFxuICAgIFwiL3dvcmRzL25ld1wiOiBXb3Jkc05ldyxcbiAgICBcIi93b3Jkcy86aWRcIjogV29yZHNFZGl0LFxuICAgIFwiL2NoZWNrLzppZFwiOiBDaGVja1J1bixcbiAgICBcIi9jaGVja1wiOiBDaGVja1xufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9lczYvaW5kZXguanNcbiAqKi8iLCIvKlxuTWl0aHJpbCB2MC4yLjRcbmh0dHA6Ly9taXRocmlsLmpzLm9yZ1xuKGMpIDIwMTQtMjAxNiBMZW8gSG9yaWVcbkxpY2Vuc2U6IE1JVFxuKi9cbiFmdW5jdGlvbihhLGIpe1widXNlIHN0cmljdFwiO3ZhciBjPWIoYSk7XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbnVsbCE9bW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1jOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZnVuY3Rpb24oKXtyZXR1cm4gY30pOmEubT1jfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp0aGlzLGZ1bmN0aW9uKGEsYil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYyhhKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBhfWZ1bmN0aW9uIGQoYSl7cmV0dXJuXCJbb2JqZWN0IE9iamVjdF1cIj09PUFhLmNhbGwoYSl9ZnVuY3Rpb24gZShhKXtyZXR1cm5cIltvYmplY3QgU3RyaW5nXVwiPT09QWEuY2FsbChhKX1mdW5jdGlvbiBmKCl7fWZ1bmN0aW9uIGcoYSl7dmE9YS5kb2N1bWVudCx3YT1hLmxvY2F0aW9uLHlhPWEuY2FuY2VsQW5pbWF0aW9uRnJhbWV8fGEuY2xlYXJUaW1lb3V0LHhhPWEucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxhLnNldFRpbWVvdXR9ZnVuY3Rpb24gaChhLGIpe2Zvcih2YXIgYyxkPVtdLGU9Lyg/OihefCN8XFwuKShbXiNcXC5cXFtcXF1dKykpfChcXFsuKz9cXF0pL2c7Yz1lLmV4ZWMoYik7KWlmKFwiXCI9PT1jWzFdJiZjWzJdKWEudGFnPWNbMl07ZWxzZSBpZihcIiNcIj09PWNbMV0pYS5hdHRycy5pZD1jWzJdO2Vsc2UgaWYoXCIuXCI9PT1jWzFdKWQucHVzaChjWzJdKTtlbHNlIGlmKFwiW1wiPT09Y1szXVswXSl7dmFyIGY9L1xcWyguKz8pKD86PShcInwnfCkoLio/KVxcMik/XFxdLy5leGVjKGNbM10pO2EuYXR0cnNbZlsxXV09ZlszXXx8XCJcIn1yZXR1cm4gZH1mdW5jdGlvbiBpKGEsYil7dmFyIGM9Yj9hLnNsaWNlKDEpOmE7cmV0dXJuIDE9PT1jLmxlbmd0aCYmQmEoY1swXSk/Y1swXTpjfWZ1bmN0aW9uIGooYSxiLGMpe3ZhciBkPVwiY2xhc3NcImluIGI/XCJjbGFzc1wiOlwiY2xhc3NOYW1lXCI7Zm9yKHZhciBlIGluIGIpemEuY2FsbChiLGUpJiYoZT09PWQmJm51bGwhPWJbZV0mJlwiXCIhPT1iW2VdPyhjLnB1c2goYltlXSksYVtlXT1cIlwiKTphW2VdPWJbZV0pO2MubGVuZ3RoJiYoYVtkXT1jLmpvaW4oXCIgXCIpKX1mdW5jdGlvbiBrKGEsYil7Zm9yKHZhciBjPVtdLGY9MSxnPWFyZ3VtZW50cy5sZW5ndGg7Zz5mO2YrKyljW2YtMV09YXJndW1lbnRzW2ZdO2lmKGQoYSkpcmV0dXJuIGJhKGEsYyk7aWYoIWUoYSkpdGhyb3cgbmV3IEVycm9yKFwic2VsZWN0b3IgaW4gbShzZWxlY3RvciwgYXR0cnMsIGNoaWxkcmVuKSBzaG91bGQgYmUgYSBzdHJpbmdcIik7dmFyIGs9bnVsbCE9YiYmZChiKSYmIShcInRhZ1wiaW4gYnx8XCJ2aWV3XCJpbiBifHxcInN1YnRyZWVcImluIGIpLGw9az9iOnt9LG09e3RhZzpcImRpdlwiLGF0dHJzOnt9LGNoaWxkcmVuOmkoYyxrKX07cmV0dXJuIGoobS5hdHRycyxsLGgobSxhKSksbX1mdW5jdGlvbiBsKGEsYil7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aCYmIWIoYVtjXSxjKyspOyk7fWZ1bmN0aW9uIG0oYSxiKXtsKGEsZnVuY3Rpb24oYSxjKXtyZXR1cm4oYT1hJiZhLmF0dHJzKSYmbnVsbCE9YS5rZXkmJmIoYSxjKX0pfWZ1bmN0aW9uIG4oYSl7dHJ5e2lmKG51bGwhPWEmJm51bGwhPWEudG9TdHJpbmcoKSlyZXR1cm4gYX1jYXRjaChiKXt9cmV0dXJuXCJcIn1mdW5jdGlvbiBvKGEsYixjLGQpe3RyeXtxKGEsYixjKSxiLm5vZGVWYWx1ZT1kfWNhdGNoKGUpe319ZnVuY3Rpb24gcChhKXtmb3IodmFyIGI9MDtiPGEubGVuZ3RoO2IrKylCYShhW2JdKSYmKGE9YS5jb25jYXQuYXBwbHkoW10sYSksYi0tKTtyZXR1cm4gYX1mdW5jdGlvbiBxKGEsYixjKXthLmluc2VydEJlZm9yZShiLGEuY2hpbGROb2Rlc1tjXXx8bnVsbCl9ZnVuY3Rpb24gcihhLGIsYyxkKXttKGEsZnVuY3Rpb24oYSxkKXtiW2E9YS5rZXldPWJbYV0/e2FjdGlvbjpGYSxpbmRleDpkLGZyb206YlthXS5pbmRleCxlbGVtZW50OmMubm9kZXNbYlthXS5pbmRleF18fHZhLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIil9OnthY3Rpb246RWEsaW5kZXg6ZH19KTt2YXIgZT1bXTtmb3IodmFyIGYgaW4gYil6YS5jYWxsKGIsZikmJmUucHVzaChiW2ZdKTt2YXIgZz1lLnNvcnQoUiksaD1uZXcgQXJyYXkoYy5sZW5ndGgpO3JldHVybiBoLm5vZGVzPWMubm9kZXMuc2xpY2UoKSxsKGcsZnVuY3Rpb24oYil7dmFyIGU9Yi5pbmRleDtpZihiLmFjdGlvbj09PURhJiYoVyhjW2VdLm5vZGVzLGNbZV0pLGguc3BsaWNlKGUsMSkpLGIuYWN0aW9uPT09RWEpe3ZhciBmPXZhLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Zi5rZXk9YVtlXS5hdHRycy5rZXkscShkLGYsZSksaC5zcGxpY2UoZSwwLHthdHRyczp7a2V5OmFbZV0uYXR0cnMua2V5fSxub2RlczpbZl19KSxoLm5vZGVzW2VdPWZ9aWYoYi5hY3Rpb249PT1GYSl7dmFyIGc9Yi5lbGVtZW50LGk9ZC5jaGlsZE5vZGVzW2VdO2khPT1nJiZudWxsIT09ZyYmZC5pbnNlcnRCZWZvcmUoZyxpfHxudWxsKSxoW2VdPWNbYi5mcm9tXSxoLm5vZGVzW2VdPWd9fSksaH1mdW5jdGlvbiBzKGEsYixjLGQpe3ZhciBlPWEubGVuZ3RoIT09Yi5sZW5ndGg7cmV0dXJuIGV8fG0oYSxmdW5jdGlvbihhLGMpe3ZhciBkPWJbY107cmV0dXJuIGU9ZCYmZC5hdHRycyYmZC5hdHRycy5rZXkhPT1hLmtleX0pLGU/cihhLGMsYixkKTpifWZ1bmN0aW9uIHQoYSxiLGMpe2woYSxmdW5jdGlvbihhLGQpe251bGwhPWJbZF0mJmMucHVzaC5hcHBseShjLGJbZF0ubm9kZXMpfSksbChiLm5vZGVzLGZ1bmN0aW9uKGEsZCl7bnVsbCE9YS5wYXJlbnROb2RlJiZjLmluZGV4T2YoYSk8MCYmVyhbYV0sW2JbZF1dKX0pLGEubGVuZ3RoPGIubGVuZ3RoJiYoYi5sZW5ndGg9YS5sZW5ndGgpLGIubm9kZXM9Y31mdW5jdGlvbiB1KGEpe3ZhciBiPTA7bShhLGZ1bmN0aW9uKCl7cmV0dXJuIGwoYSxmdW5jdGlvbihhKXsoYT1hJiZhLmF0dHJzKSYmbnVsbD09YS5rZXkmJihhLmtleT1cIl9fbWl0aHJpbF9fXCIrYisrKX0pLDF9KX1mdW5jdGlvbiB2KGEsYixjKXtyZXR1cm4gYS50YWchPT1iLnRhZz8hMDpjLnNvcnQoKS5qb2luKCkhPT1PYmplY3Qua2V5cyhiLmF0dHJzKS5zb3J0KCkuam9pbigpPyEwOmEuYXR0cnMuaWQhPT1iLmF0dHJzLmlkPyEwOmEuYXR0cnMua2V5IT09Yi5hdHRycy5rZXk/ITA6XCJhbGxcIj09PWsucmVkcmF3LnN0cmF0ZWd5KCk/IWIuY29uZmlnQ29udGV4dHx8Yi5jb25maWdDb250ZXh0LnJldGFpbiE9PSEwOlwiZGlmZlwiPT09ay5yZWRyYXcuc3RyYXRlZ3koKT9iLmNvbmZpZ0NvbnRleHQmJmIuY29uZmlnQ29udGV4dC5yZXRhaW49PT0hMTohMX1mdW5jdGlvbiB3KGEsYixkKXt2KGEsYixkKSYmKGIubm9kZXMubGVuZ3RoJiZXKGIubm9kZXMpLGIuY29uZmlnQ29udGV4dCYmYyhiLmNvbmZpZ0NvbnRleHQub251bmxvYWQpJiZiLmNvbmZpZ0NvbnRleHQub251bmxvYWQoKSxiLmNvbnRyb2xsZXJzJiZsKGIuY29udHJvbGxlcnMsZnVuY3Rpb24oYSl7YS5vbnVubG9hZCYmYS5vbnVubG9hZCh7cHJldmVudERlZmF1bHQ6Zn0pfSkpfWZ1bmN0aW9uIHgoYSxiKXtyZXR1cm4gYS5hdHRycy54bWxucz9hLmF0dHJzLnhtbG5zOlwic3ZnXCI9PT1hLnRhZz9cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI6XCJtYXRoXCI9PT1hLnRhZz9cImh0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUxcIjpifWZ1bmN0aW9uIHkoYSxiLGMpe2MubGVuZ3RoJiYoYS52aWV3cz1iLGEuY29udHJvbGxlcnM9YyxsKGMsZnVuY3Rpb24oYSl7aWYoYS5vbnVubG9hZCYmYS5vbnVubG9hZC4kb2xkJiYoYS5vbnVubG9hZD1hLm9udW5sb2FkLiRvbGQpLEdhJiZhLm9udW5sb2FkKXt2YXIgYj1hLm9udW5sb2FkO2Eub251bmxvYWQ9ZixhLm9udW5sb2FkLiRvbGQ9Yn19KSl9ZnVuY3Rpb24geihhLGIsZCxlLGYpe2lmKGMoYi5hdHRycy5jb25maWcpKXt2YXIgZz1mLmNvbmZpZ0NvbnRleHQ9Zi5jb25maWdDb250ZXh0fHx7fTthLnB1c2goZnVuY3Rpb24oKXtyZXR1cm4gYi5hdHRycy5jb25maWcuY2FsbChiLGQsIWUsZyxmKX0pfX1mdW5jdGlvbiBBKGEsYyxkLGUsZixnLGgsaSl7dmFyIGo9YS5ub2Rlc1swXTtyZXR1cm4gZSYmVihqLGMudGFnLGMuYXR0cnMsYS5hdHRycyxmKSxhLmNoaWxkcmVuPVEoaixjLnRhZyxiLGIsYy5jaGlsZHJlbixhLmNoaWxkcmVuLCExLDAsYy5hdHRycy5jb250ZW50ZWRpdGFibGU/ajpkLGYsaCksYS5ub2Rlcy5pbnRhY3Q9ITAsaS5sZW5ndGgmJihhLnZpZXdzPWcsYS5jb250cm9sbGVycz1pKSxqfWZ1bmN0aW9uIEIoYSxiLGMpe3ZhciBkO2EuJHRydXN0ZWQ/ZD1aKGIsYyxhKTooZD1bdmEuY3JlYXRlVGV4dE5vZGUoYSldLGIubm9kZU5hbWUgaW4gQ2F8fHEoYixkWzBdLGMpKTt2YXIgZTtyZXR1cm4gZT1cInN0cmluZ1wiPT10eXBlb2YgYXx8XCJudW1iZXJcIj09dHlwZW9mIGF8fFwiYm9vbGVhblwiPT10eXBlb2YgYT9uZXcgYS5jb25zdHJ1Y3RvcihhKTphLGUubm9kZXM9ZCxlfWZ1bmN0aW9uIEMoYSxiLGMsZCxlLGYpe3ZhciBnPWIubm9kZXM7cmV0dXJuIGQmJmQ9PT12YS5hY3RpdmVFbGVtZW50fHwoYS4kdHJ1c3RlZD8oVyhnLGIpLGc9WihjLGUsYSkpOlwidGV4dGFyZWFcIj09PWY/Yy52YWx1ZT1hOmQ/ZC5pbm5lckhUTUw9YTooKDE9PT1nWzBdLm5vZGVUeXBlfHxnLmxlbmd0aD4xfHxnWzBdLm5vZGVWYWx1ZS50cmltJiYhZ1swXS5ub2RlVmFsdWUudHJpbSgpKSYmKFcoYi5ub2RlcyxiKSxnPVt2YS5jcmVhdGVUZXh0Tm9kZShhKV0pLG8oYyxnWzBdLGUsYSkpKSxiPW5ldyBhLmNvbnN0cnVjdG9yKGEpLGIubm9kZXM9ZyxifWZ1bmN0aW9uIEQoYSxiLGMsZCxlLGYsZyl7cmV0dXJuIGEubm9kZXMubGVuZ3RoP2EudmFsdWVPZigpIT09Yi52YWx1ZU9mKCl8fGU/QyhiLGEsZCxmLGMsZyk6KGEubm9kZXMuaW50YWN0PSEwLGEpOkIoYixkLGMpfWZ1bmN0aW9uIEUoYSl7aWYoYS4kdHJ1c3RlZCl7dmFyIGI9YS5tYXRjaCgvPFteXFwvXXxcXD5cXHMqW148XS9nKTtpZihudWxsIT1iKXJldHVybiBiLmxlbmd0aH1lbHNlIGlmKEJhKGEpKXJldHVybiBhLmxlbmd0aDtyZXR1cm4gMX1mdW5jdGlvbiBGKGEsYyxkLGUsZixnLGgsaSxqKXthPXAoYSk7dmFyIGs9W10sbD1jLmxlbmd0aD09PWEubGVuZ3RoLG49MCxvPXt9LHE9ITE7bShjLGZ1bmN0aW9uKGEsYil7cT0hMCxvW2NbYl0uYXR0cnMua2V5XT17YWN0aW9uOkRhLGluZGV4OmJ9fSksdShhKSxxJiYoYz1zKGEsYyxvLGQpKTtmb3IodmFyIHI9MCx2PTAsdz1hLmxlbmd0aDt3PnY7disrKXt2YXIgeD1RKGQsZixjLGUsYVt2XSxjW3JdLGcsZStufHxuLGgsaSxqKTt4IT09YiYmKGw9bCYmeC5ub2Rlcy5pbnRhY3Qsbis9RSh4KSxjW3IrK109eCl9cmV0dXJuIGx8fHQoYSxjLGspLGN9ZnVuY3Rpb24gRyhhLGIsYyxkLGUpe2lmKG51bGwhPWIpe2lmKEFhLmNhbGwoYik9PT1BYS5jYWxsKGEpKXJldHVybiBiO2lmKGUmJmUubm9kZXMpe3ZhciBmPWMtZCxnPWYrKEJhKGEpP2E6Yi5ub2RlcykubGVuZ3RoO1coZS5ub2Rlcy5zbGljZShmLGcpLGUuc2xpY2UoZixnKSl9ZWxzZSBiLm5vZGVzJiZXKGIubm9kZXMsYil9cmV0dXJuIGI9bmV3IGEuY29uc3RydWN0b3IsYi50YWcmJihiPXt9KSxiLm5vZGVzPVtdLGJ9ZnVuY3Rpb24gSChhLGIpe3JldHVybiBhLmF0dHJzLmlzP251bGw9PWI/dmEuY3JlYXRlRWxlbWVudChhLnRhZyxhLmF0dHJzLmlzKTp2YS5jcmVhdGVFbGVtZW50TlMoYixhLnRhZyxhLmF0dHJzLmlzKTpudWxsPT1iP3ZhLmNyZWF0ZUVsZW1lbnQoYS50YWcpOnZhLmNyZWF0ZUVsZW1lbnROUyhiLGEudGFnKX1mdW5jdGlvbiBJKGEsYixjLGQpe3JldHVybiBkP1YoYixhLnRhZyxhLmF0dHJzLHt9LGMpOmEuYXR0cnN9ZnVuY3Rpb24gSihhLGMsZCxlLGYsZyl7cmV0dXJuIG51bGwhPWEuY2hpbGRyZW4mJmEuY2hpbGRyZW4ubGVuZ3RoPjA/UShjLGEudGFnLGIsYixhLmNoaWxkcmVuLGQuY2hpbGRyZW4sITAsMCxhLmF0dHJzLmNvbnRlbnRlZGl0YWJsZT9jOmUsZixnKTphLmNoaWxkcmVufWZ1bmN0aW9uIEsoYSxiLGMsZCxlLGYsZyl7dmFyIGg9e3RhZzphLnRhZyxhdHRyczpiLGNoaWxkcmVuOmMsbm9kZXM6W2RdfTtyZXR1cm4geShoLGYsZyksaC5jaGlsZHJlbiYmIWguY2hpbGRyZW4ubm9kZXMmJihoLmNoaWxkcmVuLm5vZGVzPVtdKSxcInNlbGVjdFwiPT09YS50YWcmJlwidmFsdWVcImluIGEuYXR0cnMmJlYoZCxhLnRhZyx7dmFsdWU6YS5hdHRycy52YWx1ZX0se30sZSksaH1mdW5jdGlvbiBMKGEsYixkLGUpe3ZhciBmO3JldHVybiBmPVwiZGlmZlwiPT09ay5yZWRyYXcuc3RyYXRlZ3koKSYmYT9hLmluZGV4T2YoYik6LTEsZj4tMT9kW2ZdOmMoZSk/bmV3IGU6e319ZnVuY3Rpb24gTShhLGIsYyxkKXtudWxsIT1kLm9udW5sb2FkJiZJYS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGEuaGFuZGxlcn0pLmluZGV4T2YoZC5vbnVubG9hZCk8MCYmSWEucHVzaCh7Y29udHJvbGxlcjpkLGhhbmRsZXI6ZC5vbnVubG9hZH0pLGEucHVzaChjKSxiLnB1c2goZCl9ZnVuY3Rpb24gTihhLGIsYyxkLGUsZil7dmFyIGc9TChjLnZpZXdzLGIsZCxhLmNvbnRyb2xsZXIpLGg9YSYmYS5hdHRycyYmYS5hdHRycy5rZXk7cmV0dXJuIGE9MD09PUdhfHxKYXx8ZCYmZC5pbmRleE9mKGcpPi0xP2EudmlldyhnKTp7dGFnOlwicGxhY2Vob2xkZXJcIn0sXCJyZXRhaW5cIj09PWEuc3VidHJlZT9hOihhLmF0dHJzPWEuYXR0cnN8fHt9LGEuYXR0cnMua2V5PWgsTShmLGUsYixnKSxhKX1mdW5jdGlvbiBPKGEsYixjLGQpe2Zvcih2YXIgZT1iJiZiLmNvbnRyb2xsZXJzO251bGwhPWEudmlldzspYT1OKGEsYS52aWV3LiRvcmlnaW5hbHx8YS52aWV3LGIsZSxkLGMpO3JldHVybiBhfWZ1bmN0aW9uIFAoYSxiLGMsZCxmLGcsaCxpKXt2YXIgaj1bXSxrPVtdO2lmKGE9TyhhLGIsaixrKSxcInJldGFpblwiPT09YS5zdWJ0cmVlKXJldHVybiBiO2lmKCFhLnRhZyYmay5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwiQ29tcG9uZW50IHRlbXBsYXRlIG11c3QgcmV0dXJuIGEgdmlydHVhbCBlbGVtZW50LCBub3QgYW4gYXJyYXksIHN0cmluZywgZXRjLlwiKTthLmF0dHJzPWEuYXR0cnN8fHt9LGIuYXR0cnM9Yi5hdHRyc3x8e307dmFyIGw9T2JqZWN0LmtleXMoYS5hdHRycyksbT1sLmxlbmd0aD4oXCJrZXlcImluIGEuYXR0cnM/MTowKTtpZih3KGEsYixsKSxlKGEudGFnKSl7dmFyIG49MD09PWIubm9kZXMubGVuZ3RoO2g9eChhLGgpO3ZhciBvO2lmKG4pe289SChhLGgpO3ZhciBwPUkoYSxvLGgsbSkscj1KKGEsbyxiLGMsaCxpKTtiPUsoYSxwLHIsbyxoLGosayl9ZWxzZSBvPUEoYixhLGMsbSxoLGosaSxrKTtyZXR1cm4obnx8Zz09PSEwJiZudWxsIT1vKSYmcShkLG8sZikseihpLGEsbyxuLGIpLGJ9fWZ1bmN0aW9uIFEoYSxiLGUsZixnLGgsaSxqLGssbCxtKXtyZXR1cm4gZz1uKGcpLFwicmV0YWluXCI9PT1nLnN1YnRyZWU/aDooaD1HKGcsaCxqLGYsZSksQmEoZyk/RihnLGgsYSxqLGIsaSxrLGwsbSk6bnVsbCE9ZyYmZChnKT9QKGcsaCxrLGEsaixpLGwsbSk6YyhnKT9oOkQoaCxnLGosYSxpLGssYikpfWZ1bmN0aW9uIFIoYSxiKXtyZXR1cm4gYS5hY3Rpb24tYi5hY3Rpb258fGEuaW5kZXgtYi5pbmRleH1mdW5jdGlvbiBTKGEsYixjKXtmb3IodmFyIGQgaW4gYil6YS5jYWxsKGIsZCkmJihudWxsPT1jfHxjW2RdIT09YltkXSkmJihhLnN0eWxlW2RdPWJbZF0pO2ZvcihkIGluIGMpemEuY2FsbChjLGQpJiYoemEuY2FsbChiLGQpfHwoYS5zdHlsZVtkXT1cIlwiKSl9ZnVuY3Rpb24gVChhLGIsZSxmLGcsaCl7aWYoXCJjb25maWdcIj09PWJ8fFwia2V5XCI9PT1iKXJldHVybiEwO2lmKGMoZSkmJlwib25cIj09PWIuc2xpY2UoMCwyKSlhW2JdPSQoZSxhKTtlbHNlIGlmKFwic3R5bGVcIj09PWImJm51bGwhPWUmJmQoZSkpUyhhLGUsZik7ZWxzZSBpZihudWxsIT1oKVwiaHJlZlwiPT09Yj9hLnNldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLFwiaHJlZlwiLGUpOmEuc2V0QXR0cmlidXRlKFwiY2xhc3NOYW1lXCI9PT1iP1wiY2xhc3NcIjpiLGUpO2Vsc2UgaWYoYiBpbiBhJiYhS2FbYl0pdHJ5eyhcImlucHV0XCIhPT1nfHxhW2JdIT09ZSkmJihhW2JdPWUpfWNhdGNoKGkpe2Euc2V0QXR0cmlidXRlKGIsZSl9ZWxzZSBhLnNldEF0dHJpYnV0ZShiLGUpfWZ1bmN0aW9uIFUoYSxiLGMsZCxlLGYsZyl7aWYoYiBpbiBlJiZkPT09YylcInZhbHVlXCI9PT1iJiZcImlucHV0XCI9PT1mJiZhLnZhbHVlIT09YyYmKGEudmFsdWU9Yyk7ZWxzZXtlW2JdPWM7dHJ5e3JldHVybiBUKGEsYixjLGQsZixnKX1jYXRjaChoKXtpZihoLm1lc3NhZ2UuaW5kZXhPZihcIkludmFsaWQgYXJndW1lbnRcIik8MCl0aHJvdyBofX19ZnVuY3Rpb24gVihhLGIsYyxkLGUpe2Zvcih2YXIgZiBpbiBjKSF6YS5jYWxsKGMsZil8fCFVKGEsZixjW2ZdLGRbZl0sZCxiLGUpO3JldHVybiBkfWZ1bmN0aW9uIFcoYSxiKXtmb3IodmFyIGM9YS5sZW5ndGgtMTtjPi0xO2MtLSlpZihhW2NdJiZhW2NdLnBhcmVudE5vZGUpe3RyeXthW2NdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYVtjXSl9Y2F0Y2goZCl7fWI9W10uY29uY2F0KGIpLGJbY10mJlgoYltjXSl9YS5sZW5ndGgmJihhLmxlbmd0aD0wKX1mdW5jdGlvbiBYKGEpe2EuY29uZmlnQ29udGV4dCYmYyhhLmNvbmZpZ0NvbnRleHQub251bmxvYWQpJiYoYS5jb25maWdDb250ZXh0Lm9udW5sb2FkKCksYS5jb25maWdDb250ZXh0Lm9udW5sb2FkPW51bGwpLGEuY29udHJvbGxlcnMmJmwoYS5jb250cm9sbGVycyxmdW5jdGlvbihhKXtjKGEub251bmxvYWQpJiZhLm9udW5sb2FkKHtwcmV2ZW50RGVmYXVsdDpmfSl9KSxhLmNoaWxkcmVuJiYoQmEoYS5jaGlsZHJlbik/bChhLmNoaWxkcmVuLFgpOmEuY2hpbGRyZW4udGFnJiZYKGEuY2hpbGRyZW4pKX1mdW5jdGlvbiBZKGEsYil7dHJ5e2EuYXBwZW5kQ2hpbGQodmEuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoYikpfWNhdGNoKGMpe2EuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsYil9fWZ1bmN0aW9uIFooYSxiLGMpe3ZhciBkPWEuY2hpbGROb2Rlc1tiXTtpZihkKXt2YXIgZT0xIT09ZC5ub2RlVHlwZSxmPXZhLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO2U/KGEuaW5zZXJ0QmVmb3JlKGYsZHx8bnVsbCksZi5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmViZWdpblwiLGMpLGEucmVtb3ZlQ2hpbGQoZikpOmQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlYmVnaW5cIixjKX1lbHNlIFkoYSxjKTtmb3IodmFyIGc9W107YS5jaGlsZE5vZGVzW2JdIT09ZDspZy5wdXNoKGEuY2hpbGROb2Rlc1tiXSksYisrO3JldHVybiBnfWZ1bmN0aW9uICQoYSxiKXtyZXR1cm4gZnVuY3Rpb24oYyl7Yz1jfHxldmVudCxrLnJlZHJhdy5zdHJhdGVneShcImRpZmZcIiksay5zdGFydENvbXB1dGF0aW9uKCk7dHJ5e3JldHVybiBhLmNhbGwoYixjKX1maW5hbGx5e2ZhKCl9fX1mdW5jdGlvbiBfKGEpe3ZhciBiPU1hLmluZGV4T2YoYSk7cmV0dXJuIDA+Yj9NYS5wdXNoKGEpLTE6Yn1mdW5jdGlvbiBhYShhKXtmdW5jdGlvbiBiKCl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGgmJihhPWFyZ3VtZW50c1swXSksYX1yZXR1cm4gYi50b0pTT049ZnVuY3Rpb24oKXtyZXR1cm4gYX0sYn1mdW5jdGlvbiBiYShhLGIpe2Z1bmN0aW9uIGMoKXtyZXR1cm4oYS5jb250cm9sbGVyfHxmKS5hcHBseSh0aGlzLGIpfHx0aGlzfWZ1bmN0aW9uIGQoYyl7Zm9yKHZhciBkPVtjXS5jb25jYXQoYiksZT0xO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspZC5wdXNoKGFyZ3VtZW50c1tlXSk7cmV0dXJuIGEudmlldy5hcHBseShhLGQpfWEuY29udHJvbGxlciYmKGMucHJvdG90eXBlPWEuY29udHJvbGxlci5wcm90b3R5cGUpLGQuJG9yaWdpbmFsPWEudmlldzt2YXIgZT17Y29udHJvbGxlcjpjLHZpZXc6ZH07cmV0dXJuIGJbMF0mJm51bGwhPWJbMF0ua2V5JiYoZS5hdHRycz17a2V5OmJbMF0ua2V5fSksZX1mdW5jdGlvbiBjYShhLGIsYyxkKXtpZighZCl7ay5yZWRyYXcuc3RyYXRlZ3koXCJhbGxcIiksay5zdGFydENvbXB1dGF0aW9uKCksUGFbY109Yjt2YXIgZTtlPU9hPWE/YTphPXtjb250cm9sbGVyOmZ9O3ZhciBnPW5ldyhhLmNvbnRyb2xsZXJ8fGYpO3JldHVybiBlPT09T2EmJihSYVtjXT1nLFFhW2NdPWEpLGZhKCksbnVsbD09PWEmJmRhKGIsYyksUmFbY119bnVsbD09YSYmZGEoYixjKX1mdW5jdGlvbiBkYShhLGIpe1BhLnNwbGljZShiLDEpLFJhLnNwbGljZShiLDEpLFFhLnNwbGljZShiLDEpLG1hKGEpLE1hLnNwbGljZShfKGEpLDEpfWZ1bmN0aW9uIGVhKCl7VWEmJihVYSgpLFVhPW51bGwpLGwoUGEsZnVuY3Rpb24oYSxiKXt2YXIgYz1RYVtiXTtpZihSYVtiXSl7dmFyIGQ9W1JhW2JdXTtrLnJlbmRlcihhLGMudmlldz9jLnZpZXcoUmFbYl0sZCk6XCJcIil9fSksVmEmJihWYSgpLFZhPW51bGwpLFNhPW51bGwsVGE9bmV3IERhdGUsay5yZWRyYXcuc3RyYXRlZ3koXCJkaWZmXCIpfWZ1bmN0aW9uIGZhKCl7XCJub25lXCI9PT1rLnJlZHJhdy5zdHJhdGVneSgpPyhHYS0tLGsucmVkcmF3LnN0cmF0ZWd5KFwiZGlmZlwiKSk6ay5lbmRDb21wdXRhdGlvbigpfWZ1bmN0aW9uIGdhKGEpe3JldHVybiBhLnNsaWNlKCRhW2sucm91dGUubW9kZV0ubGVuZ3RoKX1mdW5jdGlvbiBoYShhLGIsYyl7WWE9e307dmFyIGQ9Yy5pbmRleE9mKFwiP1wiKTstMSE9PWQmJihZYT1sYShjLnN1YnN0cihkKzEsYy5sZW5ndGgpKSxjPWMuc3Vic3RyKDAsZCkpO3ZhciBlPU9iamVjdC5rZXlzKGIpLGY9ZS5pbmRleE9mKGMpO2lmKC0xIT09ZilyZXR1cm4gay5tb3VudChhLGJbZVtmXV0pLCEwO2Zvcih2YXIgZyBpbiBiKWlmKHphLmNhbGwoYixnKSl7aWYoZz09PWMpcmV0dXJuIGsubW91bnQoYSxiW2ddKSwhMDt2YXIgaD1uZXcgUmVnRXhwKFwiXlwiK2cucmVwbGFjZSgvOlteXFwvXSs/XFwuezN9L2csXCIoLio/KVwiKS5yZXBsYWNlKC86W15cXC9dKy9nLFwiKFteXFxcXC9dKylcIikrXCIvPyRcIik7aWYoaC50ZXN0KGMpKXJldHVybiBjLnJlcGxhY2UoaCxmdW5jdGlvbigpe3ZhciBjPWcubWF0Y2goLzpbXlxcL10rL2cpfHxbXSxkPVtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEsLTIpO2woYyxmdW5jdGlvbihhLGIpe1lhW2EucmVwbGFjZSgvOnxcXC4vZyxcIlwiKV09ZGVjb2RlVVJJQ29tcG9uZW50KGRbYl0pfSksay5tb3VudChhLGJbZ10pfSksITB9fWZ1bmN0aW9uIGlhKGEpe2lmKGE9YXx8ZXZlbnQsIShhLmN0cmxLZXl8fGEubWV0YUtleXx8YS5zaGlmdEtleXx8Mj09PWEud2hpY2gpKXthLnByZXZlbnREZWZhdWx0P2EucHJldmVudERlZmF1bHQoKTphLnJldHVyblZhbHVlPSExO3ZhciBiLGM9YS5jdXJyZW50VGFyZ2V0fHxhLnNyY0VsZW1lbnQ7Zm9yKGI9XCJwYXRobmFtZVwiPT09ay5yb3V0ZS5tb2RlJiZjLnNlYXJjaD9sYShjLnNlYXJjaC5zbGljZSgxKSk6e307YyYmIS9hL2kudGVzdChjLm5vZGVOYW1lKTspYz1jLnBhcmVudE5vZGU7R2E9MCxrLnJvdXRlKGNbay5yb3V0ZS5tb2RlXS5zbGljZSgkYVtrLnJvdXRlLm1vZGVdLmxlbmd0aCksYil9fWZ1bmN0aW9uIGphKCl7XCJoYXNoXCIhPT1rLnJvdXRlLm1vZGUmJndhLmhhc2g/d2EuaGFzaD13YS5oYXNoOmEuc2Nyb2xsVG8oMCwwKX1mdW5jdGlvbiBrYShhLGMpe3ZhciBlPXt9LGY9W107Zm9yKHZhciBnIGluIGEpaWYoemEuY2FsbChhLGcpKXt2YXIgaD1jP2MrXCJbXCIrZytcIl1cIjpnLGk9YVtnXTtpZihudWxsPT09aSlmLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGgpKTtlbHNlIGlmKGQoaSkpZi5wdXNoKGthKGksaCkpO2Vsc2UgaWYoQmEoaSkpe3ZhciBqPVtdO2VbaF09ZVtoXXx8e30sbChpLGZ1bmN0aW9uKGEpe2VbaF1bYV18fChlW2hdW2FdPSEwLGoucHVzaChlbmNvZGVVUklDb21wb25lbnQoaCkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGEpKSl9KSxmLnB1c2goai5qb2luKFwiJlwiKSl9ZWxzZSBpIT09YiYmZi5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChoKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQoaSkpfXJldHVybiBmLmpvaW4oXCImXCIpfWZ1bmN0aW9uIGxhKGEpe2lmKFwiXCI9PT1hfHxudWxsPT1hKXJldHVybnt9O1wiP1wiPT09YS5jaGFyQXQoMCkmJihhPWEuc2xpY2UoMSkpO3ZhciBiPWEuc3BsaXQoXCImXCIpLGM9e307cmV0dXJuIGwoYixmdW5jdGlvbihhKXt2YXIgYj1hLnNwbGl0KFwiPVwiKSxkPWRlY29kZVVSSUNvbXBvbmVudChiWzBdKSxlPTI9PT1iLmxlbmd0aD9kZWNvZGVVUklDb21wb25lbnQoYlsxXSk6bnVsbDtudWxsIT1jW2RdPyhCYShjW2RdKXx8KGNbZF09W2NbZF1dKSxjW2RdLnB1c2goZSkpOmNbZF09ZX0pLGN9ZnVuY3Rpb24gbWEoYSl7dmFyIGM9XyhhKTtXKGEuY2hpbGROb2RlcyxOYVtjXSksTmFbY109Yn1mdW5jdGlvbiBuYShhLGIpe3ZhciBjPWsucHJvcChiKTtyZXR1cm4gYS50aGVuKGMpLGMudGhlbj1mdW5jdGlvbihjLGQpe3JldHVybiBuYShhLnRoZW4oYyxkKSxiKX0sY1tcImNhdGNoXCJdPWMudGhlbi5iaW5kKG51bGwsbnVsbCksY31mdW5jdGlvbiBvYShhLGIpe2Z1bmN0aW9uIGUoYSl7aT1hfHxlYixsLm1hcChmdW5jdGlvbihhKXtpPT09ZGI/YS5yZXNvbHZlKGopOmEucmVqZWN0KGopfSl9ZnVuY3Rpb24gZihhLGIsZSxmKXtpZigobnVsbCE9aiYmZChqKXx8YyhqKSkmJmMoYSkpdHJ5e3ZhciBnPTA7YS5jYWxsKGosZnVuY3Rpb24oYSl7ZysrfHwoaj1hLGIoKSl9LGZ1bmN0aW9uKGEpe2crK3x8KGo9YSxlKCkpfSl9Y2F0Y2goaCl7ay5kZWZlcnJlZC5vbmVycm9yKGgpLGo9aCxlKCl9ZWxzZSBmKCl9ZnVuY3Rpb24gZygpe3ZhciBkO3RyeXtkPWomJmoudGhlbn1jYXRjaChsKXtyZXR1cm4gay5kZWZlcnJlZC5vbmVycm9yKGwpLGo9bCxpPWNiLGcoKX1pPT09Y2ImJmsuZGVmZXJyZWQub25lcnJvcihqKSxmKGQsZnVuY3Rpb24oKXtpPWJiLGcoKX0sZnVuY3Rpb24oKXtpPWNiLGcoKX0sZnVuY3Rpb24oKXt0cnl7aT09PWJiJiZjKGEpP2o9YShqKTppPT09Y2ImJmMoYikmJihqPWIoaiksaT1iYil9Y2F0Y2goZyl7cmV0dXJuIGsuZGVmZXJyZWQub25lcnJvcihnKSxqPWcsZSgpfWo9PT1oPyhqPVR5cGVFcnJvcigpLGUoKSk6ZihkLGZ1bmN0aW9uKCl7ZShkYil9LGUsZnVuY3Rpb24oKXtlKGk9PT1iYiYmZGIpfSl9KX12YXIgaD10aGlzLGk9MCxqPTAsbD1bXTtoLnByb21pc2U9e30saC5yZXNvbHZlPWZ1bmN0aW9uKGEpe3JldHVybiBpfHwoaj1hLGk9YmIsZygpKSxofSxoLnJlamVjdD1mdW5jdGlvbihhKXtyZXR1cm4gaXx8KGo9YSxpPWNiLGcoKSksaH0saC5wcm9taXNlLnRoZW49ZnVuY3Rpb24oYSxiKXt2YXIgYz1uZXcgb2EoYSxiKTtyZXR1cm4gaT09PWRiP2MucmVzb2x2ZShqKTppPT09ZWI/Yy5yZWplY3Qoaik6bC5wdXNoKGMpLGMucHJvbWlzZX19ZnVuY3Rpb24gcGEoYSl7cmV0dXJuIGF9ZnVuY3Rpb24gcWEoYyl7dmFyIGQ9XCJtaXRocmlsX2NhbGxiYWNrX1wiKyhuZXcgRGF0ZSkuZ2V0VGltZSgpK1wiX1wiK01hdGgucm91bmQoMWUxNipNYXRoLnJhbmRvbSgpKS50b1N0cmluZygzNiksZT12YS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2FbZF09ZnVuY3Rpb24oZil7ZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpLGMub25sb2FkKHt0eXBlOlwibG9hZFwiLHRhcmdldDp7cmVzcG9uc2VUZXh0OmZ9fSksYVtkXT1ifSxlLm9uZXJyb3I9ZnVuY3Rpb24oKXtyZXR1cm4gZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpLGMub25lcnJvcih7dHlwZTpcImVycm9yXCIsdGFyZ2V0OntzdGF0dXM6NTAwLHJlc3BvbnNlVGV4dDpKU09OLnN0cmluZ2lmeSh7ZXJyb3I6XCJFcnJvciBtYWtpbmcganNvbnAgcmVxdWVzdFwifSl9fSksYVtkXT1iLCExfSxlLm9ubG9hZD1mdW5jdGlvbigpe3JldHVybiExfSxlLnNyYz1jLnVybCsoYy51cmwuaW5kZXhPZihcIj9cIik+MD9cIiZcIjpcIj9cIikrKGMuY2FsbGJhY2tLZXk/Yy5jYWxsYmFja0tleTpcImNhbGxiYWNrXCIpK1wiPVwiK2QrXCImXCIra2EoYy5kYXRhfHx7fSksdmEuYm9keS5hcHBlbmRDaGlsZChlKX1mdW5jdGlvbiByYShiKXt2YXIgZD1uZXcgYS5YTUxIdHRwUmVxdWVzdDtpZihkLm9wZW4oYi5tZXRob2QsYi51cmwsITAsYi51c2VyLGIucGFzc3dvcmQpLGQub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7ND09PWQucmVhZHlTdGF0ZSYmKGQuc3RhdHVzPj0yMDAmJmQuc3RhdHVzPDMwMD9iLm9ubG9hZCh7dHlwZTpcImxvYWRcIix0YXJnZXQ6ZH0pOmIub25lcnJvcih7dHlwZTpcImVycm9yXCIsdGFyZ2V0OmR9KSl9LGIuc2VyaWFsaXplPT09SlNPTi5zdHJpbmdpZnkmJmIuZGF0YSYmXCJHRVRcIiE9PWIubWV0aG9kJiZkLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIixcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIiksYi5kZXNlcmlhbGl6ZT09PUpTT04ucGFyc2UmJmQuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC8qXCIpLGMoYi5jb25maWcpKXt2YXIgZj1iLmNvbmZpZyhkLGIpO251bGwhPWYmJihkPWYpfXZhciBnPVwiR0VUXCIhPT1iLm1ldGhvZCYmYi5kYXRhP2IuZGF0YTpcIlwiO2lmKGcmJiFlKGcpJiZnLmNvbnN0cnVjdG9yIT09YS5Gb3JtRGF0YSl0aHJvdyBuZXcgRXJyb3IoXCJSZXF1ZXN0IGRhdGEgc2hvdWxkIGJlIGVpdGhlciBiZSBhIHN0cmluZyBvciBGb3JtRGF0YS4gQ2hlY2sgdGhlIGBzZXJpYWxpemVgIG9wdGlvbiBpbiBgbS5yZXF1ZXN0YFwiKTtyZXR1cm4gZC5zZW5kKGcpLGR9ZnVuY3Rpb24gc2EoYSl7cmV0dXJuIGEuZGF0YVR5cGUmJlwianNvbnBcIj09PWEuZGF0YVR5cGUudG9Mb3dlckNhc2UoKT9xYShhKTpyYShhKX1mdW5jdGlvbiB0YShhLGIsYyl7aWYoXCJHRVRcIj09PWEubWV0aG9kJiZcImpzb25wXCIhPT1hLmRhdGFUeXBlKXt2YXIgZD1hLnVybC5pbmRleE9mKFwiP1wiKTwwP1wiP1wiOlwiJlwiLGU9a2EoYik7YS51cmwrPWU/ZCtlOlwiXCJ9ZWxzZSBhLmRhdGE9YyhiKX1mdW5jdGlvbiB1YShhLGIpe3JldHVybiBiJiYoYT1hLnJlcGxhY2UoLzpbYS16XVxcdysvZ2ksZnVuY3Rpb24oYSl7dmFyIGM9YS5zbGljZSgxKSxkPWJbY107cmV0dXJuIGRlbGV0ZSBiW2NdLGR9KSksYX1rLnZlcnNpb249ZnVuY3Rpb24oKXtyZXR1cm5cInYwLjIuM1wifTt2YXIgdmEsd2EseGEseWEsemE9e30uaGFzT3duUHJvcGVydHksQWE9e30udG9TdHJpbmcsQmE9QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24oYSl7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT09QWEuY2FsbChhKX0sQ2E9e0FSRUE6MSxCQVNFOjEsQlI6MSxDT0w6MSxDT01NQU5EOjEsRU1CRUQ6MSxIUjoxLElNRzoxLElOUFVUOjEsS0VZR0VOOjEsTElOSzoxLE1FVEE6MSxQQVJBTToxLFNPVVJDRToxLFRSQUNLOjEsV0JSOjF9O2suZGVwcz1mdW5jdGlvbihiKXtyZXR1cm4gZyhhPWJ8fHdpbmRvdyksYX0say5kZXBzKGEpO3ZhciBEYT0xLEVhPTIsRmE9MyxHYT0wO2suc3RhcnRDb21wdXRhdGlvbj1mdW5jdGlvbigpe0dhKyt9LGsuZW5kQ29tcHV0YXRpb249ZnVuY3Rpb24oKXtHYT4xP0dhLS06KEdhPTAsay5yZWRyYXcoKSl9O3ZhciBIYSxJYT1bXSxKYT0hMSxLYT17bGlzdDoxLHN0eWxlOjEsZm9ybToxLHR5cGU6MSx3aWR0aDoxLGhlaWdodDoxfSxMYT17YXBwZW5kQ2hpbGQ6ZnVuY3Rpb24oYSl7SGE9PT1iJiYoSGE9dmEuY3JlYXRlRWxlbWVudChcImh0bWxcIikpLHZhLmRvY3VtZW50RWxlbWVudCYmdmEuZG9jdW1lbnRFbGVtZW50IT09YT92YS5yZXBsYWNlQ2hpbGQoYSx2YS5kb2N1bWVudEVsZW1lbnQpOnZhLmFwcGVuZENoaWxkKGEpLHRoaXMuY2hpbGROb2Rlcz12YS5jaGlsZE5vZGVzfSxpbnNlcnRCZWZvcmU6ZnVuY3Rpb24oYSl7dGhpcy5hcHBlbmRDaGlsZChhKX0sY2hpbGROb2RlczpbXX0sTWE9W10sTmE9e307ay5yZW5kZXI9ZnVuY3Rpb24oYSxjLGQpe2lmKCFhKXRocm93IG5ldyBFcnJvcihcIkVuc3VyZSB0aGUgRE9NIGVsZW1lbnQgYmVpbmcgcGFzc2VkIHRvIG0ucm91dGUvbS5tb3VudC9tLnJlbmRlciBpcyBub3QgdW5kZWZpbmVkLlwiKTt2YXIgZSxmPVtdLGc9XyhhKSxoPWE9PT12YTtlPWh8fGE9PT12YS5kb2N1bWVudEVsZW1lbnQ/TGE6YSxoJiZcImh0bWxcIiE9PWMudGFnJiYoYz17dGFnOlwiaHRtbFwiLGF0dHJzOnt9LGNoaWxkcmVuOmN9KSxOYVtnXT09PWImJlcoZS5jaGlsZE5vZGVzKSxkPT09ITAmJm1hKGEpLE5hW2ddPVEoZSxudWxsLGIsYixjLE5hW2ddLCExLDAsbnVsbCxiLGYpLGwoZixmdW5jdGlvbihhKXthKCl9KX0say50cnVzdD1mdW5jdGlvbihhKXtyZXR1cm4gYT1uZXcgU3RyaW5nKGEpLGEuJHRydXN0ZWQ9ITAsYX0say5wcm9wPWZ1bmN0aW9uKGEpe3JldHVybihudWxsIT1hJiZkKGEpfHxjKGEpKSYmYyhhLnRoZW4pP25hKGEpOmFhKGEpfTt2YXIgT2EsUGE9W10sUWE9W10sUmE9W10sU2E9bnVsbCxUYT0wLFVhPW51bGwsVmE9bnVsbCxXYT0xNjtrLmNvbXBvbmVudD1mdW5jdGlvbihhKXtmb3IodmFyIGI9bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgtMSksYz0xO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspYltjLTFdPWFyZ3VtZW50c1tjXTtyZXR1cm4gYmEoYSxiKX0say5tb3VudD1rLm1vZHVsZT1mdW5jdGlvbihhLGIpe2lmKCFhKXRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBlbnN1cmUgdGhlIERPTSBlbGVtZW50IGV4aXN0cyBiZWZvcmUgcmVuZGVyaW5nIGEgdGVtcGxhdGUgaW50byBpdC5cIik7dmFyIGQ9UGEuaW5kZXhPZihhKTswPmQmJihkPVBhLmxlbmd0aCk7dmFyIGU9ITEsZj17cHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXtlPSEwLFVhPVZhPW51bGx9fTtyZXR1cm4gbChJYSxmdW5jdGlvbihhKXthLmhhbmRsZXIuY2FsbChhLmNvbnRyb2xsZXIsZiksYS5jb250cm9sbGVyLm9udW5sb2FkPW51bGx9KSxlP2woSWEsZnVuY3Rpb24oYSl7YS5jb250cm9sbGVyLm9udW5sb2FkPWEuaGFuZGxlcn0pOklhPVtdLFJhW2RdJiZjKFJhW2RdLm9udW5sb2FkKSYmUmFbZF0ub251bmxvYWQoZiksY2EoYixhLGQsZSl9O3ZhciBYYT0hMTtrLnJlZHJhdz1mdW5jdGlvbihiKXtpZighWGEpe1hhPSEwLGImJihKYT0hMCk7dHJ5e1NhJiYhYj8oeGE9PT1hLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8bmV3IERhdGUtVGE+V2EpJiYoU2E+MCYmeWEoU2EpLFNhPXhhKGVhLFdhKSk6KGVhKCksU2E9eGEoZnVuY3Rpb24oKXtTYT1udWxsfSxXYSkpfWZpbmFsbHl7WGE9SmE9ITF9fX0say5yZWRyYXcuc3RyYXRlZ3k9ay5wcm9wKCksay53aXRoQXR0cj1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGZ1bmN0aW9uKGQpe2Q9ZHx8d2luZG93LmV2ZW50O3ZhciBlPWQuY3VycmVudFRhcmdldHx8dGhpcyxmPWN8fHRoaXMsZz1hIGluIGU/ZVthXTplLmdldEF0dHJpYnV0ZShhKTtiLmNhbGwoZixnKX19O3ZhciBZYSxaYSwkYT17cGF0aG5hbWU6XCJcIixoYXNoOlwiI1wiLHNlYXJjaDpcIj9cIn0sX2E9ZixhYj0hMTtrLnJvdXRlPWZ1bmN0aW9uKGIsYyxkLGYpe2lmKDA9PT1hcmd1bWVudHMubGVuZ3RoKXJldHVybiBaYTtpZigzPT09YXJndW1lbnRzLmxlbmd0aCYmZShjKSl7X2E9ZnVuY3Rpb24oYSl7dmFyIGU9WmE9Z2EoYSk7aWYoIWhhKGIsZCxlKSl7aWYoYWIpdGhyb3cgbmV3IEVycm9yKFwiRW5zdXJlIHRoZSBkZWZhdWx0IHJvdXRlIG1hdGNoZXMgb25lIG9mIHRoZSByb3V0ZXMgZGVmaW5lZCBpbiBtLnJvdXRlXCIpO2FiPSEwLGsucm91dGUoYywhMCksYWI9ITF9fTt2YXIgZz1cImhhc2hcIj09PWsucm91dGUubW9kZT9cIm9uaGFzaGNoYW5nZVwiOlwib25wb3BzdGF0ZVwiO3JldHVybiBhW2ddPWZ1bmN0aW9uKCl7dmFyIGE9d2Fbay5yb3V0ZS5tb2RlXTtcInBhdGhuYW1lXCI9PT1rLnJvdXRlLm1vZGUmJihhKz13YS5zZWFyY2gpLFphIT09Z2EoYSkmJl9hKGEpfSxVYT1qYSx2b2lkIGFbZ10oKX1pZihiLmFkZEV2ZW50TGlzdGVuZXJ8fGIuYXR0YWNoRXZlbnQpe3ZhciBoPVwicGF0aG5hbWVcIiE9PWsucm91dGUubW9kZT93YS5wYXRobmFtZTpcIlwiO3JldHVybiBiLmhyZWY9aCskYVtrLnJvdXRlLm1vZGVdK2YuYXR0cnMuaHJlZix2b2lkKGIuYWRkRXZlbnRMaXN0ZW5lcj8oYi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIixpYSksYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixpYSkpOihiLmRldGFjaEV2ZW50KFwib25jbGlja1wiLGlhKSxiLmF0dGFjaEV2ZW50KFwib25jbGlja1wiLGlhKSkpfWlmKGUoYikpe3ZhciBpPVphO1phPWI7dmFyIGosbD1jfHx7fSxtPVphLmluZGV4T2YoXCI/XCIpO2o9bT4tMT9sYShaYS5zbGljZShtKzEpKTp7fTtmb3IodmFyIG4gaW4gbCl6YS5jYWxsKGwsbikmJihqW25dPWxbbl0pO3ZhciBvLHA9a2Eoaik7bz1tPi0xP1phLnNsaWNlKDAsbSk6WmEscCYmKFphPW8rKC0xPT09by5pbmRleE9mKFwiP1wiKT9cIj9cIjpcIiZcIikrcCk7dmFyIHE9KDM9PT1hcmd1bWVudHMubGVuZ3RoP2Q6Yyk9PT0hMHx8aT09PWI7aWYoYS5oaXN0b3J5LnB1c2hTdGF0ZSl7dmFyIHI9cT9cInJlcGxhY2VTdGF0ZVwiOlwicHVzaFN0YXRlXCI7VWE9amEsVmE9ZnVuY3Rpb24oKXthLmhpc3Rvcnlbcl0obnVsbCx2YS50aXRsZSwkYVtrLnJvdXRlLm1vZGVdK1phKX0sX2EoJGFbay5yb3V0ZS5tb2RlXStaYSl9ZWxzZSB3YVtrLnJvdXRlLm1vZGVdPVphLF9hKCRhW2sucm91dGUubW9kZV0rWmEpfX0say5yb3V0ZS5wYXJhbT1mdW5jdGlvbihhKXtpZighWWEpdGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3QgY2FsbCBtLnJvdXRlKGVsZW1lbnQsIGRlZmF1bHRSb3V0ZSwgcm91dGVzKSBiZWZvcmUgY2FsbGluZyBtLnJvdXRlLnBhcmFtKClcIik7cmV0dXJuIGE/WWFbYV06WWF9LGsucm91dGUubW9kZT1cInNlYXJjaFwiLGsucm91dGUuYnVpbGRRdWVyeVN0cmluZz1rYSxrLnJvdXRlLnBhcnNlUXVlcnlTdHJpbmc9bGEsay5kZWZlcnJlZD1mdW5jdGlvbigpe3ZhciBhPW5ldyBvYTtyZXR1cm4gYS5wcm9taXNlPW5hKGEucHJvbWlzZSksYX07dmFyIGJiPTEsY2I9MixkYj0zLGViPTQ7cmV0dXJuIGsuZGVmZXJyZWQub25lcnJvcj1mdW5jdGlvbihhKXtpZihcIltvYmplY3QgRXJyb3JdXCI9PT1BYS5jYWxsKGEpJiYhLyBFcnJvci8udGVzdChhLmNvbnN0cnVjdG9yLnRvU3RyaW5nKCkpKXRocm93IEdhPTAsYX0say5zeW5jPWZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYSxiKXtyZXR1cm4gZnVuY3Rpb24oZyl7cmV0dXJuIGVbYV09ZyxifHwoZj1cInJlamVjdFwiKSwwPT09LS1kJiYoYy5wcm9taXNlKGUpLGNbZl0oZSkpLGd9fXZhciBjPWsuZGVmZXJyZWQoKSxkPWEubGVuZ3RoLGU9W10sZj1cInJlc29sdmVcIjtyZXR1cm4gYS5sZW5ndGg+MD9sKGEsZnVuY3Rpb24oYSxjKXthLnRoZW4oYihjLCEwKSxiKGMsITEpKX0pOmMucmVzb2x2ZShbXSksYy5wcm9taXNlfSxrLnJlcXVlc3Q9ZnVuY3Rpb24oYSl7YS5iYWNrZ3JvdW5kIT09ITAmJmsuc3RhcnRDb21wdXRhdGlvbigpO3ZhciBiLGMsZCxlPW5ldyBvYSxmPWEuZGF0YVR5cGUmJlwianNvbnBcIj09PWEuZGF0YVR5cGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gZj8oYj1hLnNlcmlhbGl6ZT1jPWEuZGVzZXJpYWxpemU9cGEsZD1mdW5jdGlvbihhKXtyZXR1cm4gYS5yZXNwb25zZVRleHR9KTooYj1hLnNlcmlhbGl6ZT1hLnNlcmlhbGl6ZXx8SlNPTi5zdHJpbmdpZnksYz1hLmRlc2VyaWFsaXplPWEuZGVzZXJpYWxpemV8fEpTT04ucGFyc2UsZD1hLmV4dHJhY3R8fGZ1bmN0aW9uKGEpe3JldHVybiBhLnJlc3BvbnNlVGV4dC5sZW5ndGh8fGMhPT1KU09OLnBhcnNlP2EucmVzcG9uc2VUZXh0Om51bGx9KSxhLm1ldGhvZD0oYS5tZXRob2R8fFwiR0VUXCIpLnRvVXBwZXJDYXNlKCksYS51cmw9dWEoYS51cmwsYS5kYXRhKSx0YShhLGEuZGF0YSxiKSxhLm9ubG9hZD1hLm9uZXJyb3I9ZnVuY3Rpb24oYil7dHJ5e2I9Ynx8ZXZlbnQ7dmFyIGY9YyhkKGIudGFyZ2V0LGEpKTtcImxvYWRcIj09PWIudHlwZT8oYS51bndyYXBTdWNjZXNzJiYoZj1hLnVud3JhcFN1Y2Nlc3MoZixiLnRhcmdldCkpLEJhKGYpJiZhLnR5cGU/bChmLGZ1bmN0aW9uKGIsYyl7ZltjXT1uZXcgYS50eXBlKGIpfSk6YS50eXBlJiYoZj1uZXcgYS50eXBlKGYpKSxlLnJlc29sdmUoZikpOihhLnVud3JhcEVycm9yJiYoZj1hLnVud3JhcEVycm9yKGYsYi50YXJnZXQpKSxlLnJlamVjdChmKSl9Y2F0Y2goZyl7ZS5yZWplY3QoZyksay5kZWZlcnJlZC5vbmVycm9yKGcpfWZpbmFsbHl7YS5iYWNrZ3JvdW5kIT09ITAmJmsuZW5kQ29tcHV0YXRpb24oKX19LHNhKGEpLGUucHJvbWlzZT1uYShlLnByb21pc2UsYS5pbml0aWFsVmFsdWUpLGUucHJvbWlzZX0sa30pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWl0aHJpbC5taW4uanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2Jvd2VyX2NvbXBvbmVudHMvbWl0aHJpbC9taXRocmlsLm1pbi5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn1cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgbSBmcm9tIFwibWl0aHJpbFwiO1xuLy8gaW1wb3J0IGhlbHBlciBmcm9tIFwiLi9oZWxwZXJcIjtcblxuY29uc3QgbmF2YmFyID0gYXJncyA9PiB7XG4gICAgcmV0dXJuIG0oXCIuZGlzcGxheUZsZXhGaXhlZFwiLCBbXG4gICAgICAgIG0oXCIuZGlzcGxheUZsZXggY2FyZCBmbGV4X3Jvd1wiLCB7XG4gICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICBcImZsZXhcIjogMSxcbiAgICAgICAgICAgICAgICBcImFsaWduLWl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgXCJwYWRkaW5nLXRvcFwiOiBcIjJyZW1cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbXG4gICAgICAgICAgICBtKFwiYVwiLCB7XG4gICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZmxleFwiOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMTFweFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIm9uY2xpY2tcIjogYXJncy5sX2J0bi5hY3RcbiAgICAgICAgICAgIH0sIGFyZ3MubF9idG4ubGFiZWwpLFxuICAgICAgICAgICAgbShcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZmxleFwiOiBcIjNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBhcmdzLnRpdGxlKSxcbiAgICAgICAgICAgIG0oXCJhXCIsIHtcbiAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJmbGV4XCI6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICBcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIxMXB4XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwib25jbGlja1wiOiBhcmdzLnJfYnRuLmFjdFxuICAgICAgICAgICAgfSwgYXJncy5yX2J0bi5sYWJlbClcbiAgICAgICAgXSlcbiAgICBdKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmF2YmFyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZXM2L2NvbXBvbmVudHMvbmF2YmFyLmpzXG4gKiovIiwiaW1wb3J0IG0gZnJvbSBcIm1pdGhyaWxcIjtcclxuaW1wb3J0IF8gZnJvbSBcInVuZGVyc2NvcmVcIjtcclxuaW1wb3J0IFdvcmRzIGZyb20gXCIuL21vZGVsL3dvcmRzXCI7XHJcbmltcG9ydCBDaGVjayBmcm9tIFwiLi9tb2RlbC9jaGVja1wiO1xyXG5pbXBvcnQgTFMgZnJvbSBcIi4vaGVscGVyL3N0Z3JhZ2VcIjtcclxuLy8gaW1wb3J0IERCIGZyb20gXCIuL2hlbHBlci9kYlwiO1xyXG5sZXQgdm0gPSB7XHJcbiAgICBzY2VuZToge1xyXG4gICAgICAgIGhvbWU6IHtcclxuICAgICAgICAgICAgbmF2YmFyOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLjg5vjg7zjg6BcIixcclxuICAgICAgICAgICAgICAgIGxfYnRuOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi6Kit5a6aXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0OiBmdW5jdGlvbigpe31cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByX2J0bjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIuODmOODq+ODl1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdDogZnVuY3Rpb24oKXt9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgIG1lbnU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIuWNmOiqnuW4s+OBuFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiL3dvcmRzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpcHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi5Y2Y6Kqe44Gu566h55CG44GM44Gn44GN44G+44GZ44CCXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIuOBvuOBmuOBr+OBk+OBk+OBp+WNmOiqnuOCkueZu+mMsuOBl+OBpuOBj+OBoOOBleOBhOOAglwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi5pqX6KiY44Kr44O844OJ44G4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIvY2hlY2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlwczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLljZjoqp7jga7mmpfoqJjjgYzjgafjgY3jgb7jgZnjgIJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi55u05oSf44Go44K544OU44O844OJ44GM5aSn5YiHXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIuOAjuOCj+OBi+OCi+OAj+OAjuOCj+OBi+OCieOBquOBhOOAj+OBp+WIhuOBkeOCi+OAglwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi44OG44K544OI44G4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIvdGVzdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXBzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIuWNmOiqnuOBruW+qee/kuOBjOOBp+OBjeOBvuOBmeOAglwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLmraPjgZfjgYTljZjoqp7jga7mhI/lkbPjgpLpgbjmip7jgZfjgabjgY/jgaDjgZXjgYTjgIJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3b3Jkczoge1xyXG4gICAgICAgICAgICBuYXZiYXI6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIuWNmOiqnuW4s1wiLFxyXG4gICAgICAgICAgICAgICAgbF9idG46IHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLmiLvjgotcIixcclxuICAgICAgICAgICAgICAgICAgICBhY3Q6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG0ucm91dGUoXCIvaG9tZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcl9idG46IHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLov73liqBcIixcclxuICAgICAgICAgICAgICAgICAgICBhY3Q6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG0ucm91dGUoXCIvd29yZHMvbmV3XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgbGlzdDogW11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd29yZHNOZXc6IHtcclxuICAgICAgICAgICAgbmF2YmFyOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLljZjoqp7jgpLov73liqBcIixcclxuICAgICAgICAgICAgICAgIGxfYnRuOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi5oi744KLXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtLnJvdXRlKFwiL3dvcmRzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByX2J0bjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdDogZnVuY3Rpb24oKXt9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbjE6IFwi6L+95Yqg44GZ44KLXCIsXHJcbiAgICAgICAgICAgICAgICBidXR0b24yOiBcIue2muOBkeOBpui/veWKoFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHdvcmRzRWRpdDoge1xyXG4gICAgICAgICAgICBuYXZiYXI6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIuWNmOiqnuOCkue3qOmbhlwiLFxyXG4gICAgICAgICAgICAgICAgbF9idG46IHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLmiLvjgotcIixcclxuICAgICAgICAgICAgICAgICAgICBhY3Q6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG0ucm91dGUoXCIvd29yZHNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJfYnRuOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0OiBmdW5jdGlvbigpe31cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uOiBcIueZu+mMsuOBmeOCi1wiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNoZWNrOiB7XHJcbiAgICAgICAgICAgIG5hdmJhcjoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi5pqX6KiY44Kr44O844OJIC0g44Oh44OL44Ol44O8XCIsXHJcbiAgICAgICAgICAgICAgICBsX2J0bjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIuaIu+OCi1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdDogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG0ucm91dGUoXCIvaG9tZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcl9idG46IHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLjg5jjg6vjg5dcIixcclxuICAgICAgICAgICAgICAgICAgICBhY3Q6IGZ1bmN0aW9uKCl7fVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImNoZWNrTGltaXRTZWxlY3RcIixcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLllY/poYzmlbDjga7pgbjmip5cIixcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb246IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCI15ZWPXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCIxMOWVj1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDE1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiMTXllY9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAyMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIjIw5ZWPXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBidXR0b246IFwi5pqX6KiY44Kr44O844OJ44G4XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hlY2tSdW46IHtcclxuICAgICAgICAgICAgbmF2YmFyOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLmmpfoqJjjgqvjg7zjg4kgLSDlrp/ot7VcIixcclxuICAgICAgICAgICAgICAgIGxfYnRuOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi5oi744KLXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0OiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbS5yb3V0ZShcIi9jaGVja1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcl9idG46IHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBhY3Q6IGZ1bmN0aW9uKCl7fVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50OiB7fVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGVzdDoge1xyXG4gICAgICAgICAgICBuYXZiYXI6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIuODhuOCueODiCAtIOODoeODi+ODpeODvFwiLFxyXG4gICAgICAgICAgICAgICAgbF9idG46IHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLmiLvjgotcIixcclxuICAgICAgICAgICAgICAgICAgICBhY3Q6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtLnJvdXRlKFwiL2hvbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJfYnRuOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi44OY44Or44OXXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0OiBmdW5jdGlvbigpe31cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDoge31cclxuICAgICAgICB9LFxyXG4gICAgICAgIFRlc3RSdW46IHtcclxuICAgICAgICAgICAgbmF2YmFyOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLjg4bjgrnjg4ggLSDlrp/ot7VcIixcclxuICAgICAgICAgICAgICAgIGxfYnRuOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi5oi744KLXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0OiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbS5yb3V0ZShcIi90ZXN0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByX2J0bjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdDogZnVuY3Rpb24oKXt9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHt9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBUZXN0UmVzdWx0OiB7XHJcbiAgICAgICAgICAgIG5hdmJhcjoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi44OG44K544OIIC0g57WQ5p6cXCIsXHJcbiAgICAgICAgICAgICAgICBsX2J0bjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIuaIu+OCi1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdDogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG0ucm91dGUoXCIvaG9tZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcl9idG46IHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBhY3Q6IGZ1bmN0aW9uKCl7fVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50OiB7fVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBpbml0OiAoKSA9PiB7XHJcbiAgICAgICAgdm0ud29yZExpc3QgPSBuZXcgV29yZHMuTGlzdCgpO1xyXG4gICAgICAgIHZtLmNoZWNrTGlzdCA9IG5ldyBDaGVjay5MaXN0KCk7XHJcbiAgICAgICAgdm0ucmVqZWN0TGlzdCA9IG5ldyBXb3Jkcy5MaXN0KCk7XHJcbiAgICAgICAgdm0uc3RyYWdlLndvcmRzLmdldCgpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgaWYocmVzKXtcclxuICAgICAgICAgICAgICAgIHZtLmFkZEFsbCh2bS53b3JkTGlzdCwgcmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0sXHJcbiAgICBhZGQ6IChsaXN0ID0gW10sIGFkZEl0ZW0pID0+IHtcclxuICAgICAgICBpZihhZGRJdGVtKXtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKG5ldyBXb3Jkcy5JdGVtKGFkZEl0ZW0pKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhZGRBbGw6IChsaXN0ID0gW10sIGFkZExpc3QpID0+IHtcclxuICAgICAgICBhZGRMaXN0Lm1hcChhZGRJdGVtID0+IHZtLmFkZChsaXN0LCBhZGRJdGVtKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSxcclxuICAgIGFkZENoZWNrOiBhZGRJdGVtID0+IHtcclxuICAgICAgICBpZihhZGRJdGVtKXtcclxuICAgICAgICAgICAgdm0uY2hlY2tMaXN0LnB1c2gobmV3IENoZWNrLkl0ZW0oYWRkSXRlbSkpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSxcclxuICAgIGFkZENoZWNrQWxsOiBhZGRMaXN0ID0+IHtcclxuICAgICAgICBhZGRMaXN0Lm1hcChhZGRJdGVtID0+IHZtLmFkZENoZWNrKGFkZEl0ZW0pKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9LFxyXG4gICAgZ2V0VXJsUGFyYW06IGtleSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGVmZXJyZWQgPSBtLmRlZmVycmVkKCk7XHJcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBOdW1iZXIobS5yb3V0ZS5wYXJhbShrZXkpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgIH0sXHJcbiAgICBnZXRDaGVja1dvcmRzOiAod29yZHMsIGxpbWl0KSAgPT4ge1xyXG4gICAgICAgIHJldHVybiBfKHdvcmRzKS5zYW1wbGUobGltaXQpO1xyXG4gICAgfSxcclxuICAgIGluY3JpbWVudENvdW50OiAobnVtLCBsaW1pdCkgPT57XHJcbiAgICAgICAgaWYobnVtKCkgPT09IGxpbWl0KCkpe1xyXG4gICAgICAgICAgICBudW0oMCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBudW0obnVtKCkgKyAxKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICogZ2V0TmV4dFdvcmQxXHJcbiAgICAqIEBwYXJhbXtGdW5jdGlvbn0gW251bV0g6YWN5YiX44Kk44Oz44OH44OD44Kv44K544CBbS5wcm9wKDAp44Gn5L2c5oiQ44GX44GfZ2V0dGVyLXNldHRlcumWouaVsFxyXG4gICAgKiBAcGFyYW17RnVuY3Rpb259IFtsaW1pdF0g6YWN5YiX44Kk44Oz44OH44OD44Kv44K544Gu44Kk44Oz44Kv44Oq44Oh44Oz44OI44KS6KGM44GG6Zai5pWwXHJcbiAgICAqL1xyXG4gICAgZ2V0TmV4dFdvcmQxOiAobnVtLCBsaW1pdCkgPT4ge1xyXG4gICAgICAgIC8v5byV5pWw44Gu5Z6L44OB44Kn44OD44KvXHJcbiAgICAgICAgaWYodHlwZW9mIG51bSgpID09PSBOdW1iZXIpcmV0dXJuO1xyXG4gICAgICAgIGlmKHR5cGVvZiBsaW1pdCgpID09PSBOdW1iZXIpcmV0dXJuO1xyXG4gICAgICAgIGlmKHR5cGVvZiB2bS5jaGVja0xpc3RbbnVtKCldLmZsYWcoKSA9PT0gQm9vbGVhbilyZXR1cm47XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgc3dpdGNoICh2bS5jaGVja0xpc3RbbnVtKCldLmZsYWcoKSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0cnVlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdm0uaW5jcmltZW50Q291bnQobnVtLCBsaW1pdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZtLmdldE5leHRXb3JkMShudW0sIGxpbWl0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgZmFsc2U6IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdm0uY2hlY2tMaXN0W251bSgpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNoZWNrRW5kRmxhZzogbGltaXQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IF8uY291bnRCeSh2bS5jaGVja0xpc3QsIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5mbGFnKCkgPyBcIm9rXCIgOiBcIm5vXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIChsaW1pdCgpICsgMSA9PT0gcmVzdWx0Lm9rKTtcclxuICAgIH0sXHJcbiAgICBzYXZlOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgIHZtLnN0cmFnZS5zZXQoZGF0YSk7XHJcbiAgICB9LFxyXG4gICAgZmV0Y2g6IChrZXkpID0+IHtcclxuICAgICAgICB2bS5zdHJhZ2Uua2V5KGtleSB8fCBcIndvcmRzXCIpO1xyXG4gICAgICAgIHJldHVybiB2bS5zdHJhZ2UuZ2V0KCk7XHJcbiAgICB9LFxyXG4gICAgcmVsb2FkOiAoKSA9PiB7XHJcbiAgICAgICAgdm0ud29yZExpc3QgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdm0ud29yZExpc3QgPSBuZXcgV29yZHMuTGlzdCgpO1xyXG4gICAgICAgIHZtLnN0cmFnZS53b3Jkcy5nZXQoKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHZtLmFkZEFsbCh2bS53b3JkTGlzdCwgcmVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzdHJhZ2U6IHtcclxuICAgICAgICB3b3JkczogbmV3IExTKFwid29yZHNcIilcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHZtO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9lczYvc3RvcmUuanNcbiAqKi8iLCIvLyAgICAgVW5kZXJzY29yZS5qcyAxLjguM1xuLy8gICAgIGh0dHA6Ly91bmRlcnNjb3JlanMub3JnXG4vLyAgICAgKGMpIDIwMDktMjAxNSBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuLy8gICAgIFVuZGVyc2NvcmUgbWF5IGJlIGZyZWVseSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG5cbihmdW5jdGlvbigpIHtcblxuICAvLyBCYXNlbGluZSBzZXR1cFxuICAvLyAtLS0tLS0tLS0tLS0tLVxuXG4gIC8vIEVzdGFibGlzaCB0aGUgcm9vdCBvYmplY3QsIGB3aW5kb3dgIGluIHRoZSBicm93c2VyLCBvciBgZXhwb3J0c2Agb24gdGhlIHNlcnZlci5cbiAgdmFyIHJvb3QgPSB0aGlzO1xuXG4gIC8vIFNhdmUgdGhlIHByZXZpb3VzIHZhbHVlIG9mIHRoZSBgX2AgdmFyaWFibGUuXG4gIHZhciBwcmV2aW91c1VuZGVyc2NvcmUgPSByb290Ll87XG5cbiAgLy8gU2F2ZSBieXRlcyBpbiB0aGUgbWluaWZpZWQgKGJ1dCBub3QgZ3ppcHBlZCkgdmVyc2lvbjpcbiAgdmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsIE9ialByb3RvID0gT2JqZWN0LnByb3RvdHlwZSwgRnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gIC8vIENyZWF0ZSBxdWljayByZWZlcmVuY2UgdmFyaWFibGVzIGZvciBzcGVlZCBhY2Nlc3MgdG8gY29yZSBwcm90b3R5cGVzLlxuICB2YXJcbiAgICBwdXNoICAgICAgICAgICAgID0gQXJyYXlQcm90by5wdXNoLFxuICAgIHNsaWNlICAgICAgICAgICAgPSBBcnJheVByb3RvLnNsaWNlLFxuICAgIHRvU3RyaW5nICAgICAgICAgPSBPYmpQcm90by50b1N0cmluZyxcbiAgICBoYXNPd25Qcm9wZXJ0eSAgID0gT2JqUHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbiAgLy8gQWxsICoqRUNNQVNjcmlwdCA1KiogbmF0aXZlIGZ1bmN0aW9uIGltcGxlbWVudGF0aW9ucyB0aGF0IHdlIGhvcGUgdG8gdXNlXG4gIC8vIGFyZSBkZWNsYXJlZCBoZXJlLlxuICB2YXJcbiAgICBuYXRpdmVJc0FycmF5ICAgICAgPSBBcnJheS5pc0FycmF5LFxuICAgIG5hdGl2ZUtleXMgICAgICAgICA9IE9iamVjdC5rZXlzLFxuICAgIG5hdGl2ZUJpbmQgICAgICAgICA9IEZ1bmNQcm90by5iaW5kLFxuICAgIG5hdGl2ZUNyZWF0ZSAgICAgICA9IE9iamVjdC5jcmVhdGU7XG5cbiAgLy8gTmFrZWQgZnVuY3Rpb24gcmVmZXJlbmNlIGZvciBzdXJyb2dhdGUtcHJvdG90eXBlLXN3YXBwaW5nLlxuICB2YXIgQ3RvciA9IGZ1bmN0aW9uKCl7fTtcblxuICAvLyBDcmVhdGUgYSBzYWZlIHJlZmVyZW5jZSB0byB0aGUgVW5kZXJzY29yZSBvYmplY3QgZm9yIHVzZSBiZWxvdy5cbiAgdmFyIF8gPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqIGluc3RhbmNlb2YgXykgcmV0dXJuIG9iajtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgXykpIHJldHVybiBuZXcgXyhvYmopO1xuICAgIHRoaXMuX3dyYXBwZWQgPSBvYmo7XG4gIH07XG5cbiAgLy8gRXhwb3J0IHRoZSBVbmRlcnNjb3JlIG9iamVjdCBmb3IgKipOb2RlLmpzKiosIHdpdGhcbiAgLy8gYmFja3dhcmRzLWNvbXBhdGliaWxpdHkgZm9yIHRoZSBvbGQgYHJlcXVpcmUoKWAgQVBJLiBJZiB3ZSdyZSBpblxuICAvLyB0aGUgYnJvd3NlciwgYWRkIGBfYCBhcyBhIGdsb2JhbCBvYmplY3QuXG4gIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IF87XG4gICAgfVxuICAgIGV4cG9ydHMuXyA9IF87XG4gIH0gZWxzZSB7XG4gICAgcm9vdC5fID0gXztcbiAgfVxuXG4gIC8vIEN1cnJlbnQgdmVyc2lvbi5cbiAgXy5WRVJTSU9OID0gJzEuOC4zJztcblxuICAvLyBJbnRlcm5hbCBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gZWZmaWNpZW50IChmb3IgY3VycmVudCBlbmdpbmVzKSB2ZXJzaW9uXG4gIC8vIG9mIHRoZSBwYXNzZWQtaW4gY2FsbGJhY2ssIHRvIGJlIHJlcGVhdGVkbHkgYXBwbGllZCBpbiBvdGhlciBVbmRlcnNjb3JlXG4gIC8vIGZ1bmN0aW9ucy5cbiAgdmFyIG9wdGltaXplQ2IgPSBmdW5jdGlvbihmdW5jLCBjb250ZXh0LCBhcmdDb3VudCkge1xuICAgIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHJldHVybiBmdW5jO1xuICAgIHN3aXRjaCAoYXJnQ291bnQgPT0gbnVsbCA/IDMgOiBhcmdDb3VudCkge1xuICAgICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCB2YWx1ZSk7XG4gICAgICB9O1xuICAgICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24odmFsdWUsIG90aGVyKSB7XG4gICAgICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgdmFsdWUsIG90aGVyKTtcbiAgICAgIH07XG4gICAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pO1xuICAgICAgfTtcbiAgICAgIGNhc2UgNDogcmV0dXJuIGZ1bmN0aW9uKGFjY3VtdWxhdG9yLCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCBhY2N1bXVsYXRvciwgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKTtcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBBIG1vc3RseS1pbnRlcm5hbCBmdW5jdGlvbiB0byBnZW5lcmF0ZSBjYWxsYmFja3MgdGhhdCBjYW4gYmUgYXBwbGllZFxuICAvLyB0byBlYWNoIGVsZW1lbnQgaW4gYSBjb2xsZWN0aW9uLCByZXR1cm5pbmcgdGhlIGRlc2lyZWQgcmVzdWx0IOKAlCBlaXRoZXJcbiAgLy8gaWRlbnRpdHksIGFuIGFyYml0cmFyeSBjYWxsYmFjaywgYSBwcm9wZXJ0eSBtYXRjaGVyLCBvciBhIHByb3BlcnR5IGFjY2Vzc29yLlxuICB2YXIgY2IgPSBmdW5jdGlvbih2YWx1ZSwgY29udGV4dCwgYXJnQ291bnQpIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIF8uaWRlbnRpdHk7XG4gICAgaWYgKF8uaXNGdW5jdGlvbih2YWx1ZSkpIHJldHVybiBvcHRpbWl6ZUNiKHZhbHVlLCBjb250ZXh0LCBhcmdDb3VudCk7XG4gICAgaWYgKF8uaXNPYmplY3QodmFsdWUpKSByZXR1cm4gXy5tYXRjaGVyKHZhbHVlKTtcbiAgICByZXR1cm4gXy5wcm9wZXJ0eSh2YWx1ZSk7XG4gIH07XG4gIF8uaXRlcmF0ZWUgPSBmdW5jdGlvbih2YWx1ZSwgY29udGV4dCkge1xuICAgIHJldHVybiBjYih2YWx1ZSwgY29udGV4dCwgSW5maW5pdHkpO1xuICB9O1xuXG4gIC8vIEFuIGludGVybmFsIGZ1bmN0aW9uIGZvciBjcmVhdGluZyBhc3NpZ25lciBmdW5jdGlvbnMuXG4gIHZhciBjcmVhdGVBc3NpZ25lciA9IGZ1bmN0aW9uKGtleXNGdW5jLCB1bmRlZmluZWRPbmx5KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iaikge1xuICAgICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICBpZiAobGVuZ3RoIDwgMiB8fCBvYmogPT0gbnVsbCkgcmV0dXJuIG9iajtcbiAgICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpbmRleF0sXG4gICAgICAgICAgICBrZXlzID0ga2V5c0Z1bmMoc291cmNlKSxcbiAgICAgICAgICAgIGwgPSBrZXlzLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoIXVuZGVmaW5lZE9ubHkgfHwgb2JqW2tleV0gPT09IHZvaWQgMCkgb2JqW2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuICB9O1xuXG4gIC8vIEFuIGludGVybmFsIGZ1bmN0aW9uIGZvciBjcmVhdGluZyBhIG5ldyBvYmplY3QgdGhhdCBpbmhlcml0cyBmcm9tIGFub3RoZXIuXG4gIHZhciBiYXNlQ3JlYXRlID0gZnVuY3Rpb24ocHJvdG90eXBlKSB7XG4gICAgaWYgKCFfLmlzT2JqZWN0KHByb3RvdHlwZSkpIHJldHVybiB7fTtcbiAgICBpZiAobmF0aXZlQ3JlYXRlKSByZXR1cm4gbmF0aXZlQ3JlYXRlKHByb3RvdHlwZSk7XG4gICAgQ3Rvci5wcm90b3R5cGUgPSBwcm90b3R5cGU7XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBDdG9yO1xuICAgIEN0b3IucHJvdG90eXBlID0gbnVsbDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHZhciBwcm9wZXJ0eSA9IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBvYmogPT0gbnVsbCA/IHZvaWQgMCA6IG9ialtrZXldO1xuICAgIH07XG4gIH07XG5cbiAgLy8gSGVscGVyIGZvciBjb2xsZWN0aW9uIG1ldGhvZHMgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgYSBjb2xsZWN0aW9uXG4gIC8vIHNob3VsZCBiZSBpdGVyYXRlZCBhcyBhbiBhcnJheSBvciBhcyBhbiBvYmplY3RcbiAgLy8gUmVsYXRlZDogaHR0cDovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9sZW5ndGhcbiAgLy8gQXZvaWRzIGEgdmVyeSBuYXN0eSBpT1MgOCBKSVQgYnVnIG9uIEFSTS02NC4gIzIwOTRcbiAgdmFyIE1BWF9BUlJBWV9JTkRFWCA9IE1hdGgucG93KDIsIDUzKSAtIDE7XG4gIHZhciBnZXRMZW5ndGggPSBwcm9wZXJ0eSgnbGVuZ3RoJyk7XG4gIHZhciBpc0FycmF5TGlrZSA9IGZ1bmN0aW9uKGNvbGxlY3Rpb24pIHtcbiAgICB2YXIgbGVuZ3RoID0gZ2V0TGVuZ3RoKGNvbGxlY3Rpb24pO1xuICAgIHJldHVybiB0eXBlb2YgbGVuZ3RoID09ICdudW1iZXInICYmIGxlbmd0aCA+PSAwICYmIGxlbmd0aCA8PSBNQVhfQVJSQVlfSU5ERVg7XG4gIH07XG5cbiAgLy8gQ29sbGVjdGlvbiBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBUaGUgY29ybmVyc3RvbmUsIGFuIGBlYWNoYCBpbXBsZW1lbnRhdGlvbiwgYWthIGBmb3JFYWNoYC5cbiAgLy8gSGFuZGxlcyByYXcgb2JqZWN0cyBpbiBhZGRpdGlvbiB0byBhcnJheS1saWtlcy4gVHJlYXRzIGFsbFxuICAvLyBzcGFyc2UgYXJyYXktbGlrZXMgYXMgaWYgdGhleSB3ZXJlIGRlbnNlLlxuICBfLmVhY2ggPSBfLmZvckVhY2ggPSBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0ZWUgPSBvcHRpbWl6ZUNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICB2YXIgaSwgbGVuZ3RoO1xuICAgIGlmIChpc0FycmF5TGlrZShvYmopKSB7XG4gICAgICBmb3IgKGkgPSAwLCBsZW5ndGggPSBvYmoubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaXRlcmF0ZWUob2JqW2ldLCBpLCBvYmopO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIga2V5cyA9IF8ua2V5cyhvYmopO1xuICAgICAgZm9yIChpID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpdGVyYXRlZShvYmpba2V5c1tpXV0sIGtleXNbaV0sIG9iaik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSByZXN1bHRzIG9mIGFwcGx5aW5nIHRoZSBpdGVyYXRlZSB0byBlYWNoIGVsZW1lbnQuXG4gIF8ubWFwID0gXy5jb2xsZWN0ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgIHZhciBrZXlzID0gIWlzQXJyYXlMaWtlKG9iaikgJiYgXy5rZXlzKG9iaiksXG4gICAgICAgIGxlbmd0aCA9IChrZXlzIHx8IG9iaikubGVuZ3RoLFxuICAgICAgICByZXN1bHRzID0gQXJyYXkobGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIgY3VycmVudEtleSA9IGtleXMgPyBrZXlzW2luZGV4XSA6IGluZGV4O1xuICAgICAgcmVzdWx0c1tpbmRleF0gPSBpdGVyYXRlZShvYmpbY3VycmVudEtleV0sIGN1cnJlbnRLZXksIG9iaik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIC8vIENyZWF0ZSBhIHJlZHVjaW5nIGZ1bmN0aW9uIGl0ZXJhdGluZyBsZWZ0IG9yIHJpZ2h0LlxuICBmdW5jdGlvbiBjcmVhdGVSZWR1Y2UoZGlyKSB7XG4gICAgLy8gT3B0aW1pemVkIGl0ZXJhdG9yIGZ1bmN0aW9uIGFzIHVzaW5nIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAvLyBpbiB0aGUgbWFpbiBmdW5jdGlvbiB3aWxsIGRlb3B0aW1pemUgdGhlLCBzZWUgIzE5OTEuXG4gICAgZnVuY3Rpb24gaXRlcmF0b3Iob2JqLCBpdGVyYXRlZSwgbWVtbywga2V5cywgaW5kZXgsIGxlbmd0aCkge1xuICAgICAgZm9yICg7IGluZGV4ID49IDAgJiYgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IGRpcikge1xuICAgICAgICB2YXIgY3VycmVudEtleSA9IGtleXMgPyBrZXlzW2luZGV4XSA6IGluZGV4O1xuICAgICAgICBtZW1vID0gaXRlcmF0ZWUobWVtbywgb2JqW2N1cnJlbnRLZXldLCBjdXJyZW50S2V5LCBvYmopO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1lbW87XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIG1lbW8sIGNvbnRleHQpIHtcbiAgICAgIGl0ZXJhdGVlID0gb3B0aW1pemVDYihpdGVyYXRlZSwgY29udGV4dCwgNCk7XG4gICAgICB2YXIga2V5cyA9ICFpc0FycmF5TGlrZShvYmopICYmIF8ua2V5cyhvYmopLFxuICAgICAgICAgIGxlbmd0aCA9IChrZXlzIHx8IG9iaikubGVuZ3RoLFxuICAgICAgICAgIGluZGV4ID0gZGlyID4gMCA/IDAgOiBsZW5ndGggLSAxO1xuICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBpbml0aWFsIHZhbHVlIGlmIG5vbmUgaXMgcHJvdmlkZWQuXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgbWVtbyA9IG9ialtrZXlzID8ga2V5c1tpbmRleF0gOiBpbmRleF07XG4gICAgICAgIGluZGV4ICs9IGRpcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVyYXRvcihvYmosIGl0ZXJhdGVlLCBtZW1vLCBrZXlzLCBpbmRleCwgbGVuZ3RoKTtcbiAgICB9O1xuICB9XG5cbiAgLy8gKipSZWR1Y2UqKiBidWlsZHMgdXAgYSBzaW5nbGUgcmVzdWx0IGZyb20gYSBsaXN0IG9mIHZhbHVlcywgYWthIGBpbmplY3RgLFxuICAvLyBvciBgZm9sZGxgLlxuICBfLnJlZHVjZSA9IF8uZm9sZGwgPSBfLmluamVjdCA9IGNyZWF0ZVJlZHVjZSgxKTtcblxuICAvLyBUaGUgcmlnaHQtYXNzb2NpYXRpdmUgdmVyc2lvbiBvZiByZWR1Y2UsIGFsc28ga25vd24gYXMgYGZvbGRyYC5cbiAgXy5yZWR1Y2VSaWdodCA9IF8uZm9sZHIgPSBjcmVhdGVSZWR1Y2UoLTEpO1xuXG4gIC8vIFJldHVybiB0aGUgZmlyc3QgdmFsdWUgd2hpY2ggcGFzc2VzIGEgdHJ1dGggdGVzdC4gQWxpYXNlZCBhcyBgZGV0ZWN0YC5cbiAgXy5maW5kID0gXy5kZXRlY3QgPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBrZXk7XG4gICAgaWYgKGlzQXJyYXlMaWtlKG9iaikpIHtcbiAgICAgIGtleSA9IF8uZmluZEluZGV4KG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAga2V5ID0gXy5maW5kS2V5KG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICB9XG4gICAgaWYgKGtleSAhPT0gdm9pZCAwICYmIGtleSAhPT0gLTEpIHJldHVybiBvYmpba2V5XTtcbiAgfTtcblxuICAvLyBSZXR1cm4gYWxsIHRoZSBlbGVtZW50cyB0aGF0IHBhc3MgYSB0cnV0aCB0ZXN0LlxuICAvLyBBbGlhc2VkIGFzIGBzZWxlY3RgLlxuICBfLmZpbHRlciA9IF8uc2VsZWN0ID0gZnVuY3Rpb24ob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgXy5lYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgbGlzdCkpIHJlc3VsdHMucHVzaCh2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGFsbCB0aGUgZWxlbWVudHMgZm9yIHdoaWNoIGEgdHJ1dGggdGVzdCBmYWlscy5cbiAgXy5yZWplY3QgPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHJldHVybiBfLmZpbHRlcihvYmosIF8ubmVnYXRlKGNiKHByZWRpY2F0ZSkpLCBjb250ZXh0KTtcbiAgfTtcblxuICAvLyBEZXRlcm1pbmUgd2hldGhlciBhbGwgb2YgdGhlIGVsZW1lbnRzIG1hdGNoIGEgdHJ1dGggdGVzdC5cbiAgLy8gQWxpYXNlZCBhcyBgYWxsYC5cbiAgXy5ldmVyeSA9IF8uYWxsID0gZnVuY3Rpb24ob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICBwcmVkaWNhdGUgPSBjYihwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIHZhciBrZXlzID0gIWlzQXJyYXlMaWtlKG9iaikgJiYgXy5rZXlzKG9iaiksXG4gICAgICAgIGxlbmd0aCA9IChrZXlzIHx8IG9iaikubGVuZ3RoO1xuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHZhciBjdXJyZW50S2V5ID0ga2V5cyA/IGtleXNbaW5kZXhdIDogaW5kZXg7XG4gICAgICBpZiAoIXByZWRpY2F0ZShvYmpbY3VycmVudEtleV0sIGN1cnJlbnRLZXksIG9iaikpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLy8gRGV0ZXJtaW5lIGlmIGF0IGxlYXN0IG9uZSBlbGVtZW50IGluIHRoZSBvYmplY3QgbWF0Y2hlcyBhIHRydXRoIHRlc3QuXG4gIC8vIEFsaWFzZWQgYXMgYGFueWAuXG4gIF8uc29tZSA9IF8uYW55ID0gZnVuY3Rpb24ob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICBwcmVkaWNhdGUgPSBjYihwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIHZhciBrZXlzID0gIWlzQXJyYXlMaWtlKG9iaikgJiYgXy5rZXlzKG9iaiksXG4gICAgICAgIGxlbmd0aCA9IChrZXlzIHx8IG9iaikubGVuZ3RoO1xuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHZhciBjdXJyZW50S2V5ID0ga2V5cyA/IGtleXNbaW5kZXhdIDogaW5kZXg7XG4gICAgICBpZiAocHJlZGljYXRlKG9ialtjdXJyZW50S2V5XSwgY3VycmVudEtleSwgb2JqKSkgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvLyBEZXRlcm1pbmUgaWYgdGhlIGFycmF5IG9yIG9iamVjdCBjb250YWlucyBhIGdpdmVuIGl0ZW0gKHVzaW5nIGA9PT1gKS5cbiAgLy8gQWxpYXNlZCBhcyBgaW5jbHVkZXNgIGFuZCBgaW5jbHVkZWAuXG4gIF8uY29udGFpbnMgPSBfLmluY2x1ZGVzID0gXy5pbmNsdWRlID0gZnVuY3Rpb24ob2JqLCBpdGVtLCBmcm9tSW5kZXgsIGd1YXJkKSB7XG4gICAgaWYgKCFpc0FycmF5TGlrZShvYmopKSBvYmogPSBfLnZhbHVlcyhvYmopO1xuICAgIGlmICh0eXBlb2YgZnJvbUluZGV4ICE9ICdudW1iZXInIHx8IGd1YXJkKSBmcm9tSW5kZXggPSAwO1xuICAgIHJldHVybiBfLmluZGV4T2Yob2JqLCBpdGVtLCBmcm9tSW5kZXgpID49IDA7XG4gIH07XG5cbiAgLy8gSW52b2tlIGEgbWV0aG9kICh3aXRoIGFyZ3VtZW50cykgb24gZXZlcnkgaXRlbSBpbiBhIGNvbGxlY3Rpb24uXG4gIF8uaW52b2tlID0gZnVuY3Rpb24ob2JqLCBtZXRob2QpIHtcbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICB2YXIgaXNGdW5jID0gXy5pc0Z1bmN0aW9uKG1ldGhvZCk7XG4gICAgcmV0dXJuIF8ubWFwKG9iaiwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHZhciBmdW5jID0gaXNGdW5jID8gbWV0aG9kIDogdmFsdWVbbWV0aG9kXTtcbiAgICAgIHJldHVybiBmdW5jID09IG51bGwgPyBmdW5jIDogZnVuYy5hcHBseSh2YWx1ZSwgYXJncyk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gQ29udmVuaWVuY2UgdmVyc2lvbiBvZiBhIGNvbW1vbiB1c2UgY2FzZSBvZiBgbWFwYDogZmV0Y2hpbmcgYSBwcm9wZXJ0eS5cbiAgXy5wbHVjayA9IGZ1bmN0aW9uKG9iaiwga2V5KSB7XG4gICAgcmV0dXJuIF8ubWFwKG9iaiwgXy5wcm9wZXJ0eShrZXkpKTtcbiAgfTtcblxuICAvLyBDb252ZW5pZW5jZSB2ZXJzaW9uIG9mIGEgY29tbW9uIHVzZSBjYXNlIG9mIGBmaWx0ZXJgOiBzZWxlY3Rpbmcgb25seSBvYmplY3RzXG4gIC8vIGNvbnRhaW5pbmcgc3BlY2lmaWMgYGtleTp2YWx1ZWAgcGFpcnMuXG4gIF8ud2hlcmUgPSBmdW5jdGlvbihvYmosIGF0dHJzKSB7XG4gICAgcmV0dXJuIF8uZmlsdGVyKG9iaiwgXy5tYXRjaGVyKGF0dHJzKSk7XG4gIH07XG5cbiAgLy8gQ29udmVuaWVuY2UgdmVyc2lvbiBvZiBhIGNvbW1vbiB1c2UgY2FzZSBvZiBgZmluZGA6IGdldHRpbmcgdGhlIGZpcnN0IG9iamVjdFxuICAvLyBjb250YWluaW5nIHNwZWNpZmljIGBrZXk6dmFsdWVgIHBhaXJzLlxuICBfLmZpbmRXaGVyZSA9IGZ1bmN0aW9uKG9iaiwgYXR0cnMpIHtcbiAgICByZXR1cm4gXy5maW5kKG9iaiwgXy5tYXRjaGVyKGF0dHJzKSk7XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSBtYXhpbXVtIGVsZW1lbnQgKG9yIGVsZW1lbnQtYmFzZWQgY29tcHV0YXRpb24pLlxuICBfLm1heCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICB2YXIgcmVzdWx0ID0gLUluZmluaXR5LCBsYXN0Q29tcHV0ZWQgPSAtSW5maW5pdHksXG4gICAgICAgIHZhbHVlLCBjb21wdXRlZDtcbiAgICBpZiAoaXRlcmF0ZWUgPT0gbnVsbCAmJiBvYmogIT0gbnVsbCkge1xuICAgICAgb2JqID0gaXNBcnJheUxpa2Uob2JqKSA/IG9iaiA6IF8udmFsdWVzKG9iaik7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gb2JqLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhbHVlID0gb2JqW2ldO1xuICAgICAgICBpZiAodmFsdWUgPiByZXN1bHQpIHtcbiAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICAgIF8uZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgICBjb21wdXRlZCA9IGl0ZXJhdGVlKHZhbHVlLCBpbmRleCwgbGlzdCk7XG4gICAgICAgIGlmIChjb21wdXRlZCA+IGxhc3RDb21wdXRlZCB8fCBjb21wdXRlZCA9PT0gLUluZmluaXR5ICYmIHJlc3VsdCA9PT0gLUluZmluaXR5KSB7XG4gICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgbGFzdENvbXB1dGVkID0gY29tcHV0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgbWluaW11bSBlbGVtZW50IChvciBlbGVtZW50LWJhc2VkIGNvbXB1dGF0aW9uKS5cbiAgXy5taW4gPSBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgdmFyIHJlc3VsdCA9IEluZmluaXR5LCBsYXN0Q29tcHV0ZWQgPSBJbmZpbml0eSxcbiAgICAgICAgdmFsdWUsIGNvbXB1dGVkO1xuICAgIGlmIChpdGVyYXRlZSA9PSBudWxsICYmIG9iaiAhPSBudWxsKSB7XG4gICAgICBvYmogPSBpc0FycmF5TGlrZShvYmopID8gb2JqIDogXy52YWx1ZXMob2JqKTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBvYmoubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFsdWUgPSBvYmpbaV07XG4gICAgICAgIGlmICh2YWx1ZSA8IHJlc3VsdCkge1xuICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgICAgXy5lYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUodmFsdWUsIGluZGV4LCBsaXN0KTtcbiAgICAgICAgaWYgKGNvbXB1dGVkIDwgbGFzdENvbXB1dGVkIHx8IGNvbXB1dGVkID09PSBJbmZpbml0eSAmJiByZXN1bHQgPT09IEluZmluaXR5KSB7XG4gICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgbGFzdENvbXB1dGVkID0gY29tcHV0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFNodWZmbGUgYSBjb2xsZWN0aW9uLCB1c2luZyB0aGUgbW9kZXJuIHZlcnNpb24gb2YgdGhlXG4gIC8vIFtGaXNoZXItWWF0ZXMgc2h1ZmZsZV0oaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9GaXNoZXLigJNZYXRlc19zaHVmZmxlKS5cbiAgXy5zaHVmZmxlID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIHNldCA9IGlzQXJyYXlMaWtlKG9iaikgPyBvYmogOiBfLnZhbHVlcyhvYmopO1xuICAgIHZhciBsZW5ndGggPSBzZXQubGVuZ3RoO1xuICAgIHZhciBzaHVmZmxlZCA9IEFycmF5KGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwLCByYW5kOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgcmFuZCA9IF8ucmFuZG9tKDAsIGluZGV4KTtcbiAgICAgIGlmIChyYW5kICE9PSBpbmRleCkgc2h1ZmZsZWRbaW5kZXhdID0gc2h1ZmZsZWRbcmFuZF07XG4gICAgICBzaHVmZmxlZFtyYW5kXSA9IHNldFtpbmRleF07XG4gICAgfVxuICAgIHJldHVybiBzaHVmZmxlZDtcbiAgfTtcblxuICAvLyBTYW1wbGUgKipuKiogcmFuZG9tIHZhbHVlcyBmcm9tIGEgY29sbGVjdGlvbi5cbiAgLy8gSWYgKipuKiogaXMgbm90IHNwZWNpZmllZCwgcmV0dXJucyBhIHNpbmdsZSByYW5kb20gZWxlbWVudC5cbiAgLy8gVGhlIGludGVybmFsIGBndWFyZGAgYXJndW1lbnQgYWxsb3dzIGl0IHRvIHdvcmsgd2l0aCBgbWFwYC5cbiAgXy5zYW1wbGUgPSBmdW5jdGlvbihvYmosIG4sIGd1YXJkKSB7XG4gICAgaWYgKG4gPT0gbnVsbCB8fCBndWFyZCkge1xuICAgICAgaWYgKCFpc0FycmF5TGlrZShvYmopKSBvYmogPSBfLnZhbHVlcyhvYmopO1xuICAgICAgcmV0dXJuIG9ialtfLnJhbmRvbShvYmoubGVuZ3RoIC0gMSldO1xuICAgIH1cbiAgICByZXR1cm4gXy5zaHVmZmxlKG9iaikuc2xpY2UoMCwgTWF0aC5tYXgoMCwgbikpO1xuICB9O1xuXG4gIC8vIFNvcnQgdGhlIG9iamVjdCdzIHZhbHVlcyBieSBhIGNyaXRlcmlvbiBwcm9kdWNlZCBieSBhbiBpdGVyYXRlZS5cbiAgXy5zb3J0QnkgPSBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgcmV0dXJuIF8ucGx1Y2soXy5tYXAob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICBjcml0ZXJpYTogaXRlcmF0ZWUodmFsdWUsIGluZGV4LCBsaXN0KVxuICAgICAgfTtcbiAgICB9KS5zb3J0KGZ1bmN0aW9uKGxlZnQsIHJpZ2h0KSB7XG4gICAgICB2YXIgYSA9IGxlZnQuY3JpdGVyaWE7XG4gICAgICB2YXIgYiA9IHJpZ2h0LmNyaXRlcmlhO1xuICAgICAgaWYgKGEgIT09IGIpIHtcbiAgICAgICAgaWYgKGEgPiBiIHx8IGEgPT09IHZvaWQgMCkgcmV0dXJuIDE7XG4gICAgICAgIGlmIChhIDwgYiB8fCBiID09PSB2b2lkIDApIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsZWZ0LmluZGV4IC0gcmlnaHQuaW5kZXg7XG4gICAgfSksICd2YWx1ZScpO1xuICB9O1xuXG4gIC8vIEFuIGludGVybmFsIGZ1bmN0aW9uIHVzZWQgZm9yIGFnZ3JlZ2F0ZSBcImdyb3VwIGJ5XCIgb3BlcmF0aW9ucy5cbiAgdmFyIGdyb3VwID0gZnVuY3Rpb24oYmVoYXZpb3IpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgICBfLmVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGtleSA9IGl0ZXJhdGVlKHZhbHVlLCBpbmRleCwgb2JqKTtcbiAgICAgICAgYmVoYXZpb3IocmVzdWx0LCB2YWx1ZSwga2V5KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9O1xuXG4gIC8vIEdyb3VwcyB0aGUgb2JqZWN0J3MgdmFsdWVzIGJ5IGEgY3JpdGVyaW9uLiBQYXNzIGVpdGhlciBhIHN0cmluZyBhdHRyaWJ1dGVcbiAgLy8gdG8gZ3JvdXAgYnksIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBjcml0ZXJpb24uXG4gIF8uZ3JvdXBCeSA9IGdyb3VwKGZ1bmN0aW9uKHJlc3VsdCwgdmFsdWUsIGtleSkge1xuICAgIGlmIChfLmhhcyhyZXN1bHQsIGtleSkpIHJlc3VsdFtrZXldLnB1c2godmFsdWUpOyBlbHNlIHJlc3VsdFtrZXldID0gW3ZhbHVlXTtcbiAgfSk7XG5cbiAgLy8gSW5kZXhlcyB0aGUgb2JqZWN0J3MgdmFsdWVzIGJ5IGEgY3JpdGVyaW9uLCBzaW1pbGFyIHRvIGBncm91cEJ5YCwgYnV0IGZvclxuICAvLyB3aGVuIHlvdSBrbm93IHRoYXQgeW91ciBpbmRleCB2YWx1ZXMgd2lsbCBiZSB1bmlxdWUuXG4gIF8uaW5kZXhCeSA9IGdyb3VwKGZ1bmN0aW9uKHJlc3VsdCwgdmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gIH0pO1xuXG4gIC8vIENvdW50cyBpbnN0YW5jZXMgb2YgYW4gb2JqZWN0IHRoYXQgZ3JvdXAgYnkgYSBjZXJ0YWluIGNyaXRlcmlvbi4gUGFzc1xuICAvLyBlaXRoZXIgYSBzdHJpbmcgYXR0cmlidXRlIHRvIGNvdW50IGJ5LCBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGVcbiAgLy8gY3JpdGVyaW9uLlxuICBfLmNvdW50QnkgPSBncm91cChmdW5jdGlvbihyZXN1bHQsIHZhbHVlLCBrZXkpIHtcbiAgICBpZiAoXy5oYXMocmVzdWx0LCBrZXkpKSByZXN1bHRba2V5XSsrOyBlbHNlIHJlc3VsdFtrZXldID0gMTtcbiAgfSk7XG5cbiAgLy8gU2FmZWx5IGNyZWF0ZSBhIHJlYWwsIGxpdmUgYXJyYXkgZnJvbSBhbnl0aGluZyBpdGVyYWJsZS5cbiAgXy50b0FycmF5ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKCFvYmopIHJldHVybiBbXTtcbiAgICBpZiAoXy5pc0FycmF5KG9iaikpIHJldHVybiBzbGljZS5jYWxsKG9iaik7XG4gICAgaWYgKGlzQXJyYXlMaWtlKG9iaikpIHJldHVybiBfLm1hcChvYmosIF8uaWRlbnRpdHkpO1xuICAgIHJldHVybiBfLnZhbHVlcyhvYmopO1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIGFuIG9iamVjdC5cbiAgXy5zaXplID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gMDtcbiAgICByZXR1cm4gaXNBcnJheUxpa2Uob2JqKSA/IG9iai5sZW5ndGggOiBfLmtleXMob2JqKS5sZW5ndGg7XG4gIH07XG5cbiAgLy8gU3BsaXQgYSBjb2xsZWN0aW9uIGludG8gdHdvIGFycmF5czogb25lIHdob3NlIGVsZW1lbnRzIGFsbCBzYXRpc2Z5IHRoZSBnaXZlblxuICAvLyBwcmVkaWNhdGUsIGFuZCBvbmUgd2hvc2UgZWxlbWVudHMgYWxsIGRvIG5vdCBzYXRpc2Z5IHRoZSBwcmVkaWNhdGUuXG4gIF8ucGFydGl0aW9uID0gZnVuY3Rpb24ob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICBwcmVkaWNhdGUgPSBjYihwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIHZhciBwYXNzID0gW10sIGZhaWwgPSBbXTtcbiAgICBfLmVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwga2V5LCBvYmopIHtcbiAgICAgIChwcmVkaWNhdGUodmFsdWUsIGtleSwgb2JqKSA/IHBhc3MgOiBmYWlsKS5wdXNoKHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW3Bhc3MsIGZhaWxdO1xuICB9O1xuXG4gIC8vIEFycmF5IEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS1cblxuICAvLyBHZXQgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYW4gYXJyYXkuIFBhc3NpbmcgKipuKiogd2lsbCByZXR1cm4gdGhlIGZpcnN0IE5cbiAgLy8gdmFsdWVzIGluIHRoZSBhcnJheS4gQWxpYXNlZCBhcyBgaGVhZGAgYW5kIGB0YWtlYC4gVGhlICoqZ3VhcmQqKiBjaGVja1xuICAvLyBhbGxvd3MgaXQgdG8gd29yayB3aXRoIGBfLm1hcGAuXG4gIF8uZmlyc3QgPSBfLmhlYWQgPSBfLnRha2UgPSBmdW5jdGlvbihhcnJheSwgbiwgZ3VhcmQpIHtcbiAgICBpZiAoYXJyYXkgPT0gbnVsbCkgcmV0dXJuIHZvaWQgMDtcbiAgICBpZiAobiA9PSBudWxsIHx8IGd1YXJkKSByZXR1cm4gYXJyYXlbMF07XG4gICAgcmV0dXJuIF8uaW5pdGlhbChhcnJheSwgYXJyYXkubGVuZ3RoIC0gbik7XG4gIH07XG5cbiAgLy8gUmV0dXJucyBldmVyeXRoaW5nIGJ1dCB0aGUgbGFzdCBlbnRyeSBvZiB0aGUgYXJyYXkuIEVzcGVjaWFsbHkgdXNlZnVsIG9uXG4gIC8vIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBQYXNzaW5nICoqbioqIHdpbGwgcmV0dXJuIGFsbCB0aGUgdmFsdWVzIGluXG4gIC8vIHRoZSBhcnJheSwgZXhjbHVkaW5nIHRoZSBsYXN0IE4uXG4gIF8uaW5pdGlhbCA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIHJldHVybiBzbGljZS5jYWxsKGFycmF5LCAwLCBNYXRoLm1heCgwLCBhcnJheS5sZW5ndGggLSAobiA9PSBudWxsIHx8IGd1YXJkID8gMSA6IG4pKSk7XG4gIH07XG5cbiAgLy8gR2V0IHRoZSBsYXN0IGVsZW1lbnQgb2YgYW4gYXJyYXkuIFBhc3NpbmcgKipuKiogd2lsbCByZXR1cm4gdGhlIGxhc3QgTlxuICAvLyB2YWx1ZXMgaW4gdGhlIGFycmF5LlxuICBfLmxhc3QgPSBmdW5jdGlvbihhcnJheSwgbiwgZ3VhcmQpIHtcbiAgICBpZiAoYXJyYXkgPT0gbnVsbCkgcmV0dXJuIHZvaWQgMDtcbiAgICBpZiAobiA9PSBudWxsIHx8IGd1YXJkKSByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIF8ucmVzdChhcnJheSwgTWF0aC5tYXgoMCwgYXJyYXkubGVuZ3RoIC0gbikpO1xuICB9O1xuXG4gIC8vIFJldHVybnMgZXZlcnl0aGluZyBidXQgdGhlIGZpcnN0IGVudHJ5IG9mIHRoZSBhcnJheS4gQWxpYXNlZCBhcyBgdGFpbGAgYW5kIGBkcm9wYC5cbiAgLy8gRXNwZWNpYWxseSB1c2VmdWwgb24gdGhlIGFyZ3VtZW50cyBvYmplY3QuIFBhc3NpbmcgYW4gKipuKiogd2lsbCByZXR1cm5cbiAgLy8gdGhlIHJlc3QgTiB2YWx1ZXMgaW4gdGhlIGFycmF5LlxuICBfLnJlc3QgPSBfLnRhaWwgPSBfLmRyb3AgPSBmdW5jdGlvbihhcnJheSwgbiwgZ3VhcmQpIHtcbiAgICByZXR1cm4gc2xpY2UuY2FsbChhcnJheSwgbiA9PSBudWxsIHx8IGd1YXJkID8gMSA6IG4pO1xuICB9O1xuXG4gIC8vIFRyaW0gb3V0IGFsbCBmYWxzeSB2YWx1ZXMgZnJvbSBhbiBhcnJheS5cbiAgXy5jb21wYWN0ID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICByZXR1cm4gXy5maWx0ZXIoYXJyYXksIF8uaWRlbnRpdHkpO1xuICB9O1xuXG4gIC8vIEludGVybmFsIGltcGxlbWVudGF0aW9uIG9mIGEgcmVjdXJzaXZlIGBmbGF0dGVuYCBmdW5jdGlvbi5cbiAgdmFyIGZsYXR0ZW4gPSBmdW5jdGlvbihpbnB1dCwgc2hhbGxvdywgc3RyaWN0LCBzdGFydEluZGV4KSB7XG4gICAgdmFyIG91dHB1dCA9IFtdLCBpZHggPSAwO1xuICAgIGZvciAodmFyIGkgPSBzdGFydEluZGV4IHx8IDAsIGxlbmd0aCA9IGdldExlbmd0aChpbnB1dCk7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHZhbHVlID0gaW5wdXRbaV07XG4gICAgICBpZiAoaXNBcnJheUxpa2UodmFsdWUpICYmIChfLmlzQXJyYXkodmFsdWUpIHx8IF8uaXNBcmd1bWVudHModmFsdWUpKSkge1xuICAgICAgICAvL2ZsYXR0ZW4gY3VycmVudCBsZXZlbCBvZiBhcnJheSBvciBhcmd1bWVudHMgb2JqZWN0XG4gICAgICAgIGlmICghc2hhbGxvdykgdmFsdWUgPSBmbGF0dGVuKHZhbHVlLCBzaGFsbG93LCBzdHJpY3QpO1xuICAgICAgICB2YXIgaiA9IDAsIGxlbiA9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgb3V0cHV0Lmxlbmd0aCArPSBsZW47XG4gICAgICAgIHdoaWxlIChqIDwgbGVuKSB7XG4gICAgICAgICAgb3V0cHV0W2lkeCsrXSA9IHZhbHVlW2orK107XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIXN0cmljdCkge1xuICAgICAgICBvdXRwdXRbaWR4KytdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH07XG5cbiAgLy8gRmxhdHRlbiBvdXQgYW4gYXJyYXksIGVpdGhlciByZWN1cnNpdmVseSAoYnkgZGVmYXVsdCksIG9yIGp1c3Qgb25lIGxldmVsLlxuICBfLmZsYXR0ZW4gPSBmdW5jdGlvbihhcnJheSwgc2hhbGxvdykge1xuICAgIHJldHVybiBmbGF0dGVuKGFycmF5LCBzaGFsbG93LCBmYWxzZSk7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGEgdmVyc2lvbiBvZiB0aGUgYXJyYXkgdGhhdCBkb2VzIG5vdCBjb250YWluIHRoZSBzcGVjaWZpZWQgdmFsdWUocykuXG4gIF8ud2l0aG91dCA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgcmV0dXJuIF8uZGlmZmVyZW5jZShhcnJheSwgc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgfTtcblxuICAvLyBQcm9kdWNlIGEgZHVwbGljYXRlLWZyZWUgdmVyc2lvbiBvZiB0aGUgYXJyYXkuIElmIHRoZSBhcnJheSBoYXMgYWxyZWFkeVxuICAvLyBiZWVuIHNvcnRlZCwgeW91IGhhdmUgdGhlIG9wdGlvbiBvZiB1c2luZyBhIGZhc3RlciBhbGdvcml0aG0uXG4gIC8vIEFsaWFzZWQgYXMgYHVuaXF1ZWAuXG4gIF8udW5pcSA9IF8udW5pcXVlID0gZnVuY3Rpb24oYXJyYXksIGlzU29ydGVkLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIGlmICghXy5pc0Jvb2xlYW4oaXNTb3J0ZWQpKSB7XG4gICAgICBjb250ZXh0ID0gaXRlcmF0ZWU7XG4gICAgICBpdGVyYXRlZSA9IGlzU29ydGVkO1xuICAgICAgaXNTb3J0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGl0ZXJhdGVlICE9IG51bGwpIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgc2VlbiA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBnZXRMZW5ndGgoYXJyYXkpOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB2YWx1ZSA9IGFycmF5W2ldLFxuICAgICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUgPyBpdGVyYXRlZSh2YWx1ZSwgaSwgYXJyYXkpIDogdmFsdWU7XG4gICAgICBpZiAoaXNTb3J0ZWQpIHtcbiAgICAgICAgaWYgKCFpIHx8IHNlZW4gIT09IGNvbXB1dGVkKSByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgICAgIHNlZW4gPSBjb21wdXRlZDtcbiAgICAgIH0gZWxzZSBpZiAoaXRlcmF0ZWUpIHtcbiAgICAgICAgaWYgKCFfLmNvbnRhaW5zKHNlZW4sIGNvbXB1dGVkKSkge1xuICAgICAgICAgIHNlZW4ucHVzaChjb21wdXRlZCk7XG4gICAgICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFfLmNvbnRhaW5zKHJlc3VsdCwgdmFsdWUpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBQcm9kdWNlIGFuIGFycmF5IHRoYXQgY29udGFpbnMgdGhlIHVuaW9uOiBlYWNoIGRpc3RpbmN0IGVsZW1lbnQgZnJvbSBhbGwgb2ZcbiAgLy8gdGhlIHBhc3NlZC1pbiBhcnJheXMuXG4gIF8udW5pb24gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXy51bmlxKGZsYXR0ZW4oYXJndW1lbnRzLCB0cnVlLCB0cnVlKSk7XG4gIH07XG5cbiAgLy8gUHJvZHVjZSBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIGV2ZXJ5IGl0ZW0gc2hhcmVkIGJldHdlZW4gYWxsIHRoZVxuICAvLyBwYXNzZWQtaW4gYXJyYXlzLlxuICBfLmludGVyc2VjdGlvbiA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBhcmdzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gZ2V0TGVuZ3RoKGFycmF5KTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IGFycmF5W2ldO1xuICAgICAgaWYgKF8uY29udGFpbnMocmVzdWx0LCBpdGVtKSkgY29udGludWU7XG4gICAgICBmb3IgKHZhciBqID0gMTsgaiA8IGFyZ3NMZW5ndGg7IGorKykge1xuICAgICAgICBpZiAoIV8uY29udGFpbnMoYXJndW1lbnRzW2pdLCBpdGVtKSkgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAoaiA9PT0gYXJnc0xlbmd0aCkgcmVzdWx0LnB1c2goaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gVGFrZSB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIG9uZSBhcnJheSBhbmQgYSBudW1iZXIgb2Ygb3RoZXIgYXJyYXlzLlxuICAvLyBPbmx5IHRoZSBlbGVtZW50cyBwcmVzZW50IGluIGp1c3QgdGhlIGZpcnN0IGFycmF5IHdpbGwgcmVtYWluLlxuICBfLmRpZmZlcmVuY2UgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHZhciByZXN0ID0gZmxhdHRlbihhcmd1bWVudHMsIHRydWUsIHRydWUsIDEpO1xuICAgIHJldHVybiBfLmZpbHRlcihhcnJheSwgZnVuY3Rpb24odmFsdWUpe1xuICAgICAgcmV0dXJuICFfLmNvbnRhaW5zKHJlc3QsIHZhbHVlKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBaaXAgdG9nZXRoZXIgbXVsdGlwbGUgbGlzdHMgaW50byBhIHNpbmdsZSBhcnJheSAtLSBlbGVtZW50cyB0aGF0IHNoYXJlXG4gIC8vIGFuIGluZGV4IGdvIHRvZ2V0aGVyLlxuICBfLnppcCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBfLnVuemlwKGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgLy8gQ29tcGxlbWVudCBvZiBfLnppcC4gVW56aXAgYWNjZXB0cyBhbiBhcnJheSBvZiBhcnJheXMgYW5kIGdyb3Vwc1xuICAvLyBlYWNoIGFycmF5J3MgZWxlbWVudHMgb24gc2hhcmVkIGluZGljZXNcbiAgXy51bnppcCA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgdmFyIGxlbmd0aCA9IGFycmF5ICYmIF8ubWF4KGFycmF5LCBnZXRMZW5ndGgpLmxlbmd0aCB8fCAwO1xuICAgIHZhciByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgcmVzdWx0W2luZGV4XSA9IF8ucGx1Y2soYXJyYXksIGluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBDb252ZXJ0cyBsaXN0cyBpbnRvIG9iamVjdHMuIFBhc3MgZWl0aGVyIGEgc2luZ2xlIGFycmF5IG9mIGBba2V5LCB2YWx1ZV1gXG4gIC8vIHBhaXJzLCBvciB0d28gcGFyYWxsZWwgYXJyYXlzIG9mIHRoZSBzYW1lIGxlbmd0aCAtLSBvbmUgb2Yga2V5cywgYW5kIG9uZSBvZlxuICAvLyB0aGUgY29ycmVzcG9uZGluZyB2YWx1ZXMuXG4gIF8ub2JqZWN0ID0gZnVuY3Rpb24obGlzdCwgdmFsdWVzKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBnZXRMZW5ndGgobGlzdCk7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHZhbHVlcykge1xuICAgICAgICByZXN1bHRbbGlzdFtpXV0gPSB2YWx1ZXNbaV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRbbGlzdFtpXVswXV0gPSBsaXN0W2ldWzFdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIEdlbmVyYXRvciBmdW5jdGlvbiB0byBjcmVhdGUgdGhlIGZpbmRJbmRleCBhbmQgZmluZExhc3RJbmRleCBmdW5jdGlvbnNcbiAgZnVuY3Rpb24gY3JlYXRlUHJlZGljYXRlSW5kZXhGaW5kZXIoZGlyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGFycmF5LCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICAgIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgICB2YXIgbGVuZ3RoID0gZ2V0TGVuZ3RoKGFycmF5KTtcbiAgICAgIHZhciBpbmRleCA9IGRpciA+IDAgPyAwIDogbGVuZ3RoIC0gMTtcbiAgICAgIGZvciAoOyBpbmRleCA+PSAwICYmIGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSBkaXIpIHtcbiAgICAgICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHJldHVybiBpbmRleDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAtMTtcbiAgICB9O1xuICB9XG5cbiAgLy8gUmV0dXJucyB0aGUgZmlyc3QgaW5kZXggb24gYW4gYXJyYXktbGlrZSB0aGF0IHBhc3NlcyBhIHByZWRpY2F0ZSB0ZXN0XG4gIF8uZmluZEluZGV4ID0gY3JlYXRlUHJlZGljYXRlSW5kZXhGaW5kZXIoMSk7XG4gIF8uZmluZExhc3RJbmRleCA9IGNyZWF0ZVByZWRpY2F0ZUluZGV4RmluZGVyKC0xKTtcblxuICAvLyBVc2UgYSBjb21wYXJhdG9yIGZ1bmN0aW9uIHRvIGZpZ3VyZSBvdXQgdGhlIHNtYWxsZXN0IGluZGV4IGF0IHdoaWNoXG4gIC8vIGFuIG9iamVjdCBzaG91bGQgYmUgaW5zZXJ0ZWQgc28gYXMgdG8gbWFpbnRhaW4gb3JkZXIuIFVzZXMgYmluYXJ5IHNlYXJjaC5cbiAgXy5zb3J0ZWRJbmRleCA9IGZ1bmN0aW9uKGFycmF5LCBvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCwgMSk7XG4gICAgdmFyIHZhbHVlID0gaXRlcmF0ZWUob2JqKTtcbiAgICB2YXIgbG93ID0gMCwgaGlnaCA9IGdldExlbmd0aChhcnJheSk7XG4gICAgd2hpbGUgKGxvdyA8IGhpZ2gpIHtcbiAgICAgIHZhciBtaWQgPSBNYXRoLmZsb29yKChsb3cgKyBoaWdoKSAvIDIpO1xuICAgICAgaWYgKGl0ZXJhdGVlKGFycmF5W21pZF0pIDwgdmFsdWUpIGxvdyA9IG1pZCArIDE7IGVsc2UgaGlnaCA9IG1pZDtcbiAgICB9XG4gICAgcmV0dXJuIGxvdztcbiAgfTtcblxuICAvLyBHZW5lcmF0b3IgZnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBpbmRleE9mIGFuZCBsYXN0SW5kZXhPZiBmdW5jdGlvbnNcbiAgZnVuY3Rpb24gY3JlYXRlSW5kZXhGaW5kZXIoZGlyLCBwcmVkaWNhdGVGaW5kLCBzb3J0ZWRJbmRleCkge1xuICAgIHJldHVybiBmdW5jdGlvbihhcnJheSwgaXRlbSwgaWR4KSB7XG4gICAgICB2YXIgaSA9IDAsIGxlbmd0aCA9IGdldExlbmd0aChhcnJheSk7XG4gICAgICBpZiAodHlwZW9mIGlkeCA9PSAnbnVtYmVyJykge1xuICAgICAgICBpZiAoZGlyID4gMCkge1xuICAgICAgICAgICAgaSA9IGlkeCA+PSAwID8gaWR4IDogTWF0aC5tYXgoaWR4ICsgbGVuZ3RoLCBpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IGlkeCA+PSAwID8gTWF0aC5taW4oaWR4ICsgMSwgbGVuZ3RoKSA6IGlkeCArIGxlbmd0aCArIDE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc29ydGVkSW5kZXggJiYgaWR4ICYmIGxlbmd0aCkge1xuICAgICAgICBpZHggPSBzb3J0ZWRJbmRleChhcnJheSwgaXRlbSk7XG4gICAgICAgIHJldHVybiBhcnJheVtpZHhdID09PSBpdGVtID8gaWR4IDogLTE7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbSAhPT0gaXRlbSkge1xuICAgICAgICBpZHggPSBwcmVkaWNhdGVGaW5kKHNsaWNlLmNhbGwoYXJyYXksIGksIGxlbmd0aCksIF8uaXNOYU4pO1xuICAgICAgICByZXR1cm4gaWR4ID49IDAgPyBpZHggKyBpIDogLTE7XG4gICAgICB9XG4gICAgICBmb3IgKGlkeCA9IGRpciA+IDAgPyBpIDogbGVuZ3RoIC0gMTsgaWR4ID49IDAgJiYgaWR4IDwgbGVuZ3RoOyBpZHggKz0gZGlyKSB7XG4gICAgICAgIGlmIChhcnJheVtpZHhdID09PSBpdGVtKSByZXR1cm4gaWR4O1xuICAgICAgfVxuICAgICAgcmV0dXJuIC0xO1xuICAgIH07XG4gIH1cblxuICAvLyBSZXR1cm4gdGhlIHBvc2l0aW9uIG9mIHRoZSBmaXJzdCBvY2N1cnJlbmNlIG9mIGFuIGl0ZW0gaW4gYW4gYXJyYXksXG4gIC8vIG9yIC0xIGlmIHRoZSBpdGVtIGlzIG5vdCBpbmNsdWRlZCBpbiB0aGUgYXJyYXkuXG4gIC8vIElmIHRoZSBhcnJheSBpcyBsYXJnZSBhbmQgYWxyZWFkeSBpbiBzb3J0IG9yZGVyLCBwYXNzIGB0cnVlYFxuICAvLyBmb3IgKippc1NvcnRlZCoqIHRvIHVzZSBiaW5hcnkgc2VhcmNoLlxuICBfLmluZGV4T2YgPSBjcmVhdGVJbmRleEZpbmRlcigxLCBfLmZpbmRJbmRleCwgXy5zb3J0ZWRJbmRleCk7XG4gIF8ubGFzdEluZGV4T2YgPSBjcmVhdGVJbmRleEZpbmRlcigtMSwgXy5maW5kTGFzdEluZGV4KTtcblxuICAvLyBHZW5lcmF0ZSBhbiBpbnRlZ2VyIEFycmF5IGNvbnRhaW5pbmcgYW4gYXJpdGhtZXRpYyBwcm9ncmVzc2lvbi4gQSBwb3J0IG9mXG4gIC8vIHRoZSBuYXRpdmUgUHl0aG9uIGByYW5nZSgpYCBmdW5jdGlvbi4gU2VlXG4gIC8vIFt0aGUgUHl0aG9uIGRvY3VtZW50YXRpb25dKGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS9mdW5jdGlvbnMuaHRtbCNyYW5nZSkuXG4gIF8ucmFuZ2UgPSBmdW5jdGlvbihzdGFydCwgc3RvcCwgc3RlcCkge1xuICAgIGlmIChzdG9wID09IG51bGwpIHtcbiAgICAgIHN0b3AgPSBzdGFydCB8fCAwO1xuICAgICAgc3RhcnQgPSAwO1xuICAgIH1cbiAgICBzdGVwID0gc3RlcCB8fCAxO1xuXG4gICAgdmFyIGxlbmd0aCA9IE1hdGgubWF4KE1hdGguY2VpbCgoc3RvcCAtIHN0YXJ0KSAvIHN0ZXApLCAwKTtcbiAgICB2YXIgcmFuZ2UgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgbGVuZ3RoOyBpZHgrKywgc3RhcnQgKz0gc3RlcCkge1xuICAgICAgcmFuZ2VbaWR4XSA9IHN0YXJ0O1xuICAgIH1cblxuICAgIHJldHVybiByYW5nZTtcbiAgfTtcblxuICAvLyBGdW5jdGlvbiAoYWhlbSkgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIERldGVybWluZXMgd2hldGhlciB0byBleGVjdXRlIGEgZnVuY3Rpb24gYXMgYSBjb25zdHJ1Y3RvclxuICAvLyBvciBhIG5vcm1hbCBmdW5jdGlvbiB3aXRoIHRoZSBwcm92aWRlZCBhcmd1bWVudHNcbiAgdmFyIGV4ZWN1dGVCb3VuZCA9IGZ1bmN0aW9uKHNvdXJjZUZ1bmMsIGJvdW5kRnVuYywgY29udGV4dCwgY2FsbGluZ0NvbnRleHQsIGFyZ3MpIHtcbiAgICBpZiAoIShjYWxsaW5nQ29udGV4dCBpbnN0YW5jZW9mIGJvdW5kRnVuYykpIHJldHVybiBzb3VyY2VGdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIHZhciBzZWxmID0gYmFzZUNyZWF0ZShzb3VyY2VGdW5jLnByb3RvdHlwZSk7XG4gICAgdmFyIHJlc3VsdCA9IHNvdXJjZUZ1bmMuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgaWYgKF8uaXNPYmplY3QocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICByZXR1cm4gc2VsZjtcbiAgfTtcblxuICAvLyBDcmVhdGUgYSBmdW5jdGlvbiBib3VuZCB0byBhIGdpdmVuIG9iamVjdCAoYXNzaWduaW5nIGB0aGlzYCwgYW5kIGFyZ3VtZW50cyxcbiAgLy8gb3B0aW9uYWxseSkuIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBGdW5jdGlvbi5iaW5kYCBpZlxuICAvLyBhdmFpbGFibGUuXG4gIF8uYmluZCA9IGZ1bmN0aW9uKGZ1bmMsIGNvbnRleHQpIHtcbiAgICBpZiAobmF0aXZlQmluZCAmJiBmdW5jLmJpbmQgPT09IG5hdGl2ZUJpbmQpIHJldHVybiBuYXRpdmVCaW5kLmFwcGx5KGZ1bmMsIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgaWYgKCFfLmlzRnVuY3Rpb24oZnVuYykpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JpbmQgbXVzdCBiZSBjYWxsZWQgb24gYSBmdW5jdGlvbicpO1xuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIHZhciBib3VuZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGV4ZWN1dGVCb3VuZChmdW5jLCBib3VuZCwgY29udGV4dCwgdGhpcywgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgfTtcbiAgICByZXR1cm4gYm91bmQ7XG4gIH07XG5cbiAgLy8gUGFydGlhbGx5IGFwcGx5IGEgZnVuY3Rpb24gYnkgY3JlYXRpbmcgYSB2ZXJzaW9uIHRoYXQgaGFzIGhhZCBzb21lIG9mIGl0c1xuICAvLyBhcmd1bWVudHMgcHJlLWZpbGxlZCwgd2l0aG91dCBjaGFuZ2luZyBpdHMgZHluYW1pYyBgdGhpc2AgY29udGV4dC4gXyBhY3RzXG4gIC8vIGFzIGEgcGxhY2Vob2xkZXIsIGFsbG93aW5nIGFueSBjb21iaW5hdGlvbiBvZiBhcmd1bWVudHMgdG8gYmUgcHJlLWZpbGxlZC5cbiAgXy5wYXJ0aWFsID0gZnVuY3Rpb24oZnVuYykge1xuICAgIHZhciBib3VuZEFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgdmFyIGJvdW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcG9zaXRpb24gPSAwLCBsZW5ndGggPSBib3VuZEFyZ3MubGVuZ3RoO1xuICAgICAgdmFyIGFyZ3MgPSBBcnJheShsZW5ndGgpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBhcmdzW2ldID0gYm91bmRBcmdzW2ldID09PSBfID8gYXJndW1lbnRzW3Bvc2l0aW9uKytdIDogYm91bmRBcmdzW2ldO1xuICAgICAgfVxuICAgICAgd2hpbGUgKHBvc2l0aW9uIDwgYXJndW1lbnRzLmxlbmd0aCkgYXJncy5wdXNoKGFyZ3VtZW50c1twb3NpdGlvbisrXSk7XG4gICAgICByZXR1cm4gZXhlY3V0ZUJvdW5kKGZ1bmMsIGJvdW5kLCB0aGlzLCB0aGlzLCBhcmdzKTtcbiAgICB9O1xuICAgIHJldHVybiBib3VuZDtcbiAgfTtcblxuICAvLyBCaW5kIGEgbnVtYmVyIG9mIGFuIG9iamVjdCdzIG1ldGhvZHMgdG8gdGhhdCBvYmplY3QuIFJlbWFpbmluZyBhcmd1bWVudHNcbiAgLy8gYXJlIHRoZSBtZXRob2QgbmFtZXMgdG8gYmUgYm91bmQuIFVzZWZ1bCBmb3IgZW5zdXJpbmcgdGhhdCBhbGwgY2FsbGJhY2tzXG4gIC8vIGRlZmluZWQgb24gYW4gb2JqZWN0IGJlbG9uZyB0byBpdC5cbiAgXy5iaW5kQWxsID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGksIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGgsIGtleTtcbiAgICBpZiAobGVuZ3RoIDw9IDEpIHRocm93IG5ldyBFcnJvcignYmluZEFsbCBtdXN0IGJlIHBhc3NlZCBmdW5jdGlvbiBuYW1lcycpO1xuICAgIGZvciAoaSA9IDE7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gYXJndW1lbnRzW2ldO1xuICAgICAgb2JqW2tleV0gPSBfLmJpbmQob2JqW2tleV0sIG9iaik7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgLy8gTWVtb2l6ZSBhbiBleHBlbnNpdmUgZnVuY3Rpb24gYnkgc3RvcmluZyBpdHMgcmVzdWx0cy5cbiAgXy5tZW1vaXplID0gZnVuY3Rpb24oZnVuYywgaGFzaGVyKSB7XG4gICAgdmFyIG1lbW9pemUgPSBmdW5jdGlvbihrZXkpIHtcbiAgICAgIHZhciBjYWNoZSA9IG1lbW9pemUuY2FjaGU7XG4gICAgICB2YXIgYWRkcmVzcyA9ICcnICsgKGhhc2hlciA/IGhhc2hlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIDoga2V5KTtcbiAgICAgIGlmICghXy5oYXMoY2FjaGUsIGFkZHJlc3MpKSBjYWNoZVthZGRyZXNzXSA9IGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIHJldHVybiBjYWNoZVthZGRyZXNzXTtcbiAgICB9O1xuICAgIG1lbW9pemUuY2FjaGUgPSB7fTtcbiAgICByZXR1cm4gbWVtb2l6ZTtcbiAgfTtcblxuICAvLyBEZWxheXMgYSBmdW5jdGlvbiBmb3IgdGhlIGdpdmVuIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIGFuZCB0aGVuIGNhbGxzXG4gIC8vIGl0IHdpdGggdGhlIGFyZ3VtZW50cyBzdXBwbGllZC5cbiAgXy5kZWxheSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQpIHtcbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfSwgd2FpdCk7XG4gIH07XG5cbiAgLy8gRGVmZXJzIGEgZnVuY3Rpb24sIHNjaGVkdWxpbmcgaXQgdG8gcnVuIGFmdGVyIHRoZSBjdXJyZW50IGNhbGwgc3RhY2sgaGFzXG4gIC8vIGNsZWFyZWQuXG4gIF8uZGVmZXIgPSBfLnBhcnRpYWwoXy5kZWxheSwgXywgMSk7XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCB3aGVuIGludm9rZWQsIHdpbGwgb25seSBiZSB0cmlnZ2VyZWQgYXQgbW9zdCBvbmNlXG4gIC8vIGR1cmluZyBhIGdpdmVuIHdpbmRvdyBvZiB0aW1lLiBOb3JtYWxseSwgdGhlIHRocm90dGxlZCBmdW5jdGlvbiB3aWxsIHJ1blxuICAvLyBhcyBtdWNoIGFzIGl0IGNhbiwgd2l0aG91dCBldmVyIGdvaW5nIG1vcmUgdGhhbiBvbmNlIHBlciBgd2FpdGAgZHVyYXRpb247XG4gIC8vIGJ1dCBpZiB5b3UnZCBsaWtlIHRvIGRpc2FibGUgdGhlIGV4ZWN1dGlvbiBvbiB0aGUgbGVhZGluZyBlZGdlLCBwYXNzXG4gIC8vIGB7bGVhZGluZzogZmFsc2V9YC4gVG8gZGlzYWJsZSBleGVjdXRpb24gb24gdGhlIHRyYWlsaW5nIGVkZ2UsIGRpdHRvLlxuICBfLnRocm90dGxlID0gZnVuY3Rpb24oZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICAgIHZhciBjb250ZXh0LCBhcmdzLCByZXN1bHQ7XG4gICAgdmFyIHRpbWVvdXQgPSBudWxsO1xuICAgIHZhciBwcmV2aW91cyA9IDA7XG4gICAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XG4gICAgdmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICBwcmV2aW91cyA9IG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UgPyAwIDogXy5ub3coKTtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIGlmICghdGltZW91dCkgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG5vdyA9IF8ubm93KCk7XG4gICAgICBpZiAoIXByZXZpb3VzICYmIG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UpIHByZXZpb3VzID0gbm93O1xuICAgICAgdmFyIHJlbWFpbmluZyA9IHdhaXQgLSAobm93IC0gcHJldmlvdXMpO1xuICAgICAgY29udGV4dCA9IHRoaXM7XG4gICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgaWYgKHJlbWFpbmluZyA8PSAwIHx8IHJlbWFpbmluZyA+IHdhaXQpIHtcbiAgICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcHJldmlvdXMgPSBub3c7XG4gICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIGlmICghdGltZW91dCkgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgICAgfSBlbHNlIGlmICghdGltZW91dCAmJiBvcHRpb25zLnRyYWlsaW5nICE9PSBmYWxzZSkge1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgcmVtYWluaW5nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIGFzIGxvbmcgYXMgaXQgY29udGludWVzIHRvIGJlIGludm9rZWQsIHdpbGwgbm90XG4gIC8vIGJlIHRyaWdnZXJlZC4gVGhlIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGl0IHN0b3BzIGJlaW5nIGNhbGxlZCBmb3JcbiAgLy8gTiBtaWxsaXNlY29uZHMuIElmIGBpbW1lZGlhdGVgIGlzIHBhc3NlZCwgdHJpZ2dlciB0aGUgZnVuY3Rpb24gb24gdGhlXG4gIC8vIGxlYWRpbmcgZWRnZSwgaW5zdGVhZCBvZiB0aGUgdHJhaWxpbmcuXG4gIF8uZGVib3VuY2UgPSBmdW5jdGlvbihmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgICB2YXIgdGltZW91dCwgYXJncywgY29udGV4dCwgdGltZXN0YW1wLCByZXN1bHQ7XG5cbiAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBsYXN0ID0gXy5ub3coKSAtIHRpbWVzdGFtcDtcblxuICAgICAgaWYgKGxhc3QgPCB3YWl0ICYmIGxhc3QgPj0gMCkge1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCAtIGxhc3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgIGlmICghaW1tZWRpYXRlKSB7XG4gICAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICBpZiAoIXRpbWVvdXQpIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBjb250ZXh0ID0gdGhpcztcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICB0aW1lc3RhbXAgPSBfLm5vdygpO1xuICAgICAgdmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG4gICAgICBpZiAoIXRpbWVvdXQpIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICAgIGlmIChjYWxsTm93KSB7XG4gICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgdGhlIGZpcnN0IGZ1bmN0aW9uIHBhc3NlZCBhcyBhbiBhcmd1bWVudCB0byB0aGUgc2Vjb25kLFxuICAvLyBhbGxvd2luZyB5b3UgdG8gYWRqdXN0IGFyZ3VtZW50cywgcnVuIGNvZGUgYmVmb3JlIGFuZCBhZnRlciwgYW5kXG4gIC8vIGNvbmRpdGlvbmFsbHkgZXhlY3V0ZSB0aGUgb3JpZ2luYWwgZnVuY3Rpb24uXG4gIF8ud3JhcCA9IGZ1bmN0aW9uKGZ1bmMsIHdyYXBwZXIpIHtcbiAgICByZXR1cm4gXy5wYXJ0aWFsKHdyYXBwZXIsIGZ1bmMpO1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBuZWdhdGVkIHZlcnNpb24gb2YgdGhlIHBhc3NlZC1pbiBwcmVkaWNhdGUuXG4gIF8ubmVnYXRlID0gZnVuY3Rpb24ocHJlZGljYXRlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICFwcmVkaWNhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGlzIHRoZSBjb21wb3NpdGlvbiBvZiBhIGxpc3Qgb2YgZnVuY3Rpb25zLCBlYWNoXG4gIC8vIGNvbnN1bWluZyB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiB0aGF0IGZvbGxvd3MuXG4gIF8uY29tcG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgIHZhciBzdGFydCA9IGFyZ3MubGVuZ3RoIC0gMTtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaSA9IHN0YXJ0O1xuICAgICAgdmFyIHJlc3VsdCA9IGFyZ3Nbc3RhcnRdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB3aGlsZSAoaS0tKSByZXN1bHQgPSBhcmdzW2ldLmNhbGwodGhpcywgcmVzdWx0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIG9ubHkgYmUgZXhlY3V0ZWQgb24gYW5kIGFmdGVyIHRoZSBOdGggY2FsbC5cbiAgXy5hZnRlciA9IGZ1bmN0aW9uKHRpbWVzLCBmdW5jKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKC0tdGltZXMgPCAxKSB7XG4gICAgICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIG9ubHkgYmUgZXhlY3V0ZWQgdXAgdG8gKGJ1dCBub3QgaW5jbHVkaW5nKSB0aGUgTnRoIGNhbGwuXG4gIF8uYmVmb3JlID0gZnVuY3Rpb24odGltZXMsIGZ1bmMpIHtcbiAgICB2YXIgbWVtbztcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoLS10aW1lcyA+IDApIHtcbiAgICAgICAgbWVtbyA9IGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aW1lcyA8PSAxKSBmdW5jID0gbnVsbDtcbiAgICAgIHJldHVybiBtZW1vO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBhdCBtb3N0IG9uZSB0aW1lLCBubyBtYXR0ZXIgaG93XG4gIC8vIG9mdGVuIHlvdSBjYWxsIGl0LiBVc2VmdWwgZm9yIGxhenkgaW5pdGlhbGl6YXRpb24uXG4gIF8ub25jZSA9IF8ucGFydGlhbChfLmJlZm9yZSwgMik7XG5cbiAgLy8gT2JqZWN0IEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gS2V5cyBpbiBJRSA8IDkgdGhhdCB3b24ndCBiZSBpdGVyYXRlZCBieSBgZm9yIGtleSBpbiAuLi5gIGFuZCB0aHVzIG1pc3NlZC5cbiAgdmFyIGhhc0VudW1CdWcgPSAhe3RvU3RyaW5nOiBudWxsfS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgndG9TdHJpbmcnKTtcbiAgdmFyIG5vbkVudW1lcmFibGVQcm9wcyA9IFsndmFsdWVPZicsICdpc1Byb3RvdHlwZU9mJywgJ3RvU3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAncHJvcGVydHlJc0VudW1lcmFibGUnLCAnaGFzT3duUHJvcGVydHknLCAndG9Mb2NhbGVTdHJpbmcnXTtcblxuICBmdW5jdGlvbiBjb2xsZWN0Tm9uRW51bVByb3BzKG9iaiwga2V5cykge1xuICAgIHZhciBub25FbnVtSWR4ID0gbm9uRW51bWVyYWJsZVByb3BzLmxlbmd0aDtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBvYmouY29uc3RydWN0b3I7XG4gICAgdmFyIHByb3RvID0gKF8uaXNGdW5jdGlvbihjb25zdHJ1Y3RvcikgJiYgY29uc3RydWN0b3IucHJvdG90eXBlKSB8fCBPYmpQcm90bztcblxuICAgIC8vIENvbnN0cnVjdG9yIGlzIGEgc3BlY2lhbCBjYXNlLlxuICAgIHZhciBwcm9wID0gJ2NvbnN0cnVjdG9yJztcbiAgICBpZiAoXy5oYXMob2JqLCBwcm9wKSAmJiAhXy5jb250YWlucyhrZXlzLCBwcm9wKSkga2V5cy5wdXNoKHByb3ApO1xuXG4gICAgd2hpbGUgKG5vbkVudW1JZHgtLSkge1xuICAgICAgcHJvcCA9IG5vbkVudW1lcmFibGVQcm9wc1tub25FbnVtSWR4XTtcbiAgICAgIGlmIChwcm9wIGluIG9iaiAmJiBvYmpbcHJvcF0gIT09IHByb3RvW3Byb3BdICYmICFfLmNvbnRhaW5zKGtleXMsIHByb3ApKSB7XG4gICAgICAgIGtleXMucHVzaChwcm9wKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBSZXRyaWV2ZSB0aGUgbmFtZXMgb2YgYW4gb2JqZWN0J3Mgb3duIHByb3BlcnRpZXMuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBPYmplY3Qua2V5c2BcbiAgXy5rZXlzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKCFfLmlzT2JqZWN0KG9iaikpIHJldHVybiBbXTtcbiAgICBpZiAobmF0aXZlS2V5cykgcmV0dXJuIG5hdGl2ZUtleXMob2JqKTtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIGlmIChfLmhhcyhvYmosIGtleSkpIGtleXMucHVzaChrZXkpO1xuICAgIC8vIEFoZW0sIElFIDwgOS5cbiAgICBpZiAoaGFzRW51bUJ1ZykgY29sbGVjdE5vbkVudW1Qcm9wcyhvYmosIGtleXMpO1xuICAgIHJldHVybiBrZXlzO1xuICB9O1xuXG4gIC8vIFJldHJpZXZlIGFsbCB0aGUgcHJvcGVydHkgbmFtZXMgb2YgYW4gb2JqZWN0LlxuICBfLmFsbEtleXMgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAoIV8uaXNPYmplY3Qob2JqKSkgcmV0dXJuIFtdO1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikga2V5cy5wdXNoKGtleSk7XG4gICAgLy8gQWhlbSwgSUUgPCA5LlxuICAgIGlmIChoYXNFbnVtQnVnKSBjb2xsZWN0Tm9uRW51bVByb3BzKG9iaiwga2V5cyk7XG4gICAgcmV0dXJuIGtleXM7XG4gIH07XG5cbiAgLy8gUmV0cmlldmUgdGhlIHZhbHVlcyBvZiBhbiBvYmplY3QncyBwcm9wZXJ0aWVzLlxuICBfLnZhbHVlcyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciB2YWx1ZXMgPSBBcnJheShsZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbHVlc1tpXSA9IG9ialtrZXlzW2ldXTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfTtcblxuICAvLyBSZXR1cm5zIHRoZSByZXN1bHRzIG9mIGFwcGx5aW5nIHRoZSBpdGVyYXRlZSB0byBlYWNoIGVsZW1lbnQgb2YgdGhlIG9iamVjdFxuICAvLyBJbiBjb250cmFzdCB0byBfLm1hcCBpdCByZXR1cm5zIGFuIG9iamVjdFxuICBfLm1hcE9iamVjdCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICB2YXIga2V5cyA9ICBfLmtleXMob2JqKSxcbiAgICAgICAgICBsZW5ndGggPSBrZXlzLmxlbmd0aCxcbiAgICAgICAgICByZXN1bHRzID0ge30sXG4gICAgICAgICAgY3VycmVudEtleTtcbiAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY3VycmVudEtleSA9IGtleXNbaW5kZXhdO1xuICAgICAgICByZXN1bHRzW2N1cnJlbnRLZXldID0gaXRlcmF0ZWUob2JqW2N1cnJlbnRLZXldLCBjdXJyZW50S2V5LCBvYmopO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgLy8gQ29udmVydCBhbiBvYmplY3QgaW50byBhIGxpc3Qgb2YgYFtrZXksIHZhbHVlXWAgcGFpcnMuXG4gIF8ucGFpcnMgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIga2V5cyA9IF8ua2V5cyhvYmopO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgcGFpcnMgPSBBcnJheShsZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHBhaXJzW2ldID0gW2tleXNbaV0sIG9ialtrZXlzW2ldXV07XG4gICAgfVxuICAgIHJldHVybiBwYWlycztcbiAgfTtcblxuICAvLyBJbnZlcnQgdGhlIGtleXMgYW5kIHZhbHVlcyBvZiBhbiBvYmplY3QuIFRoZSB2YWx1ZXMgbXVzdCBiZSBzZXJpYWxpemFibGUuXG4gIF8uaW52ZXJ0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGtleXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdFtvYmpba2V5c1tpXV1dID0ga2V5c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBSZXR1cm4gYSBzb3J0ZWQgbGlzdCBvZiB0aGUgZnVuY3Rpb24gbmFtZXMgYXZhaWxhYmxlIG9uIHRoZSBvYmplY3QuXG4gIC8vIEFsaWFzZWQgYXMgYG1ldGhvZHNgXG4gIF8uZnVuY3Rpb25zID0gXy5tZXRob2RzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIG5hbWVzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKF8uaXNGdW5jdGlvbihvYmpba2V5XSkpIG5hbWVzLnB1c2goa2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIG5hbWVzLnNvcnQoKTtcbiAgfTtcblxuICAvLyBFeHRlbmQgYSBnaXZlbiBvYmplY3Qgd2l0aCBhbGwgdGhlIHByb3BlcnRpZXMgaW4gcGFzc2VkLWluIG9iamVjdChzKS5cbiAgXy5leHRlbmQgPSBjcmVhdGVBc3NpZ25lcihfLmFsbEtleXMpO1xuXG4gIC8vIEFzc2lnbnMgYSBnaXZlbiBvYmplY3Qgd2l0aCBhbGwgdGhlIG93biBwcm9wZXJ0aWVzIGluIHRoZSBwYXNzZWQtaW4gb2JqZWN0KHMpXG4gIC8vIChodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvYXNzaWduKVxuICBfLmV4dGVuZE93biA9IF8uYXNzaWduID0gY3JlYXRlQXNzaWduZXIoXy5rZXlzKTtcblxuICAvLyBSZXR1cm5zIHRoZSBmaXJzdCBrZXkgb24gYW4gb2JqZWN0IHRoYXQgcGFzc2VzIGEgcHJlZGljYXRlIHRlc3RcbiAgXy5maW5kS2V5ID0gZnVuY3Rpb24ob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICBwcmVkaWNhdGUgPSBjYihwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaiksIGtleTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgIGlmIChwcmVkaWNhdGUob2JqW2tleV0sIGtleSwgb2JqKSkgcmV0dXJuIGtleTtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmV0dXJuIGEgY29weSBvZiB0aGUgb2JqZWN0IG9ubHkgY29udGFpbmluZyB0aGUgd2hpdGVsaXN0ZWQgcHJvcGVydGllcy5cbiAgXy5waWNrID0gZnVuY3Rpb24ob2JqZWN0LCBvaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICB2YXIgcmVzdWx0ID0ge30sIG9iaiA9IG9iamVjdCwgaXRlcmF0ZWUsIGtleXM7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gcmVzdWx0O1xuICAgIGlmIChfLmlzRnVuY3Rpb24ob2l0ZXJhdGVlKSkge1xuICAgICAga2V5cyA9IF8uYWxsS2V5cyhvYmopO1xuICAgICAgaXRlcmF0ZWUgPSBvcHRpbWl6ZUNiKG9pdGVyYXRlZSwgY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleXMgPSBmbGF0dGVuKGFyZ3VtZW50cywgZmFsc2UsIGZhbHNlLCAxKTtcbiAgICAgIGl0ZXJhdGVlID0gZnVuY3Rpb24odmFsdWUsIGtleSwgb2JqKSB7IHJldHVybiBrZXkgaW4gb2JqOyB9O1xuICAgICAgb2JqID0gT2JqZWN0KG9iaik7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBrZXlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgIHZhciB2YWx1ZSA9IG9ialtrZXldO1xuICAgICAgaWYgKGl0ZXJhdGVlKHZhbHVlLCBrZXksIG9iaikpIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgIC8vIFJldHVybiBhIGNvcHkgb2YgdGhlIG9iamVjdCB3aXRob3V0IHRoZSBibGFja2xpc3RlZCBwcm9wZXJ0aWVzLlxuICBfLm9taXQgPSBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgaWYgKF8uaXNGdW5jdGlvbihpdGVyYXRlZSkpIHtcbiAgICAgIGl0ZXJhdGVlID0gXy5uZWdhdGUoaXRlcmF0ZWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIga2V5cyA9IF8ubWFwKGZsYXR0ZW4oYXJndW1lbnRzLCBmYWxzZSwgZmFsc2UsIDEpLCBTdHJpbmcpO1xuICAgICAgaXRlcmF0ZWUgPSBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgICAgIHJldHVybiAhXy5jb250YWlucyhrZXlzLCBrZXkpO1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIF8ucGljayhvYmosIGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgfTtcblxuICAvLyBGaWxsIGluIGEgZ2l2ZW4gb2JqZWN0IHdpdGggZGVmYXVsdCBwcm9wZXJ0aWVzLlxuICBfLmRlZmF1bHRzID0gY3JlYXRlQXNzaWduZXIoXy5hbGxLZXlzLCB0cnVlKTtcblxuICAvLyBDcmVhdGVzIGFuIG9iamVjdCB0aGF0IGluaGVyaXRzIGZyb20gdGhlIGdpdmVuIHByb3RvdHlwZSBvYmplY3QuXG4gIC8vIElmIGFkZGl0aW9uYWwgcHJvcGVydGllcyBhcmUgcHJvdmlkZWQgdGhlbiB0aGV5IHdpbGwgYmUgYWRkZWQgdG8gdGhlXG4gIC8vIGNyZWF0ZWQgb2JqZWN0LlxuICBfLmNyZWF0ZSA9IGZ1bmN0aW9uKHByb3RvdHlwZSwgcHJvcHMpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUNyZWF0ZShwcm90b3R5cGUpO1xuICAgIGlmIChwcm9wcykgXy5leHRlbmRPd24ocmVzdWx0LCBwcm9wcyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBDcmVhdGUgYSAoc2hhbGxvdy1jbG9uZWQpIGR1cGxpY2F0ZSBvZiBhbiBvYmplY3QuXG4gIF8uY2xvbmUgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAoIV8uaXNPYmplY3Qob2JqKSkgcmV0dXJuIG9iajtcbiAgICByZXR1cm4gXy5pc0FycmF5KG9iaikgPyBvYmouc2xpY2UoKSA6IF8uZXh0ZW5kKHt9LCBvYmopO1xuICB9O1xuXG4gIC8vIEludm9rZXMgaW50ZXJjZXB0b3Igd2l0aCB0aGUgb2JqLCBhbmQgdGhlbiByZXR1cm5zIG9iai5cbiAgLy8gVGhlIHByaW1hcnkgcHVycG9zZSBvZiB0aGlzIG1ldGhvZCBpcyB0byBcInRhcCBpbnRvXCIgYSBtZXRob2QgY2hhaW4sIGluXG4gIC8vIG9yZGVyIHRvIHBlcmZvcm0gb3BlcmF0aW9ucyBvbiBpbnRlcm1lZGlhdGUgcmVzdWx0cyB3aXRoaW4gdGhlIGNoYWluLlxuICBfLnRhcCA9IGZ1bmN0aW9uKG9iaiwgaW50ZXJjZXB0b3IpIHtcbiAgICBpbnRlcmNlcHRvcihvYmopO1xuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgLy8gUmV0dXJucyB3aGV0aGVyIGFuIG9iamVjdCBoYXMgYSBnaXZlbiBzZXQgb2YgYGtleTp2YWx1ZWAgcGFpcnMuXG4gIF8uaXNNYXRjaCA9IGZ1bmN0aW9uKG9iamVjdCwgYXR0cnMpIHtcbiAgICB2YXIga2V5cyA9IF8ua2V5cyhhdHRycyksIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIGlmIChvYmplY3QgPT0gbnVsbCkgcmV0dXJuICFsZW5ndGg7XG4gICAgdmFyIG9iaiA9IE9iamVjdChvYmplY3QpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgaWYgKGF0dHJzW2tleV0gIT09IG9ialtrZXldIHx8ICEoa2V5IGluIG9iaikpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cblxuICAvLyBJbnRlcm5hbCByZWN1cnNpdmUgY29tcGFyaXNvbiBmdW5jdGlvbiBmb3IgYGlzRXF1YWxgLlxuICB2YXIgZXEgPSBmdW5jdGlvbihhLCBiLCBhU3RhY2ssIGJTdGFjaykge1xuICAgIC8vIElkZW50aWNhbCBvYmplY3RzIGFyZSBlcXVhbC4gYDAgPT09IC0wYCwgYnV0IHRoZXkgYXJlbid0IGlkZW50aWNhbC5cbiAgICAvLyBTZWUgdGhlIFtIYXJtb255IGBlZ2FsYCBwcm9wb3NhbF0oaHR0cDovL3dpa2kuZWNtYXNjcmlwdC5vcmcvZG9rdS5waHA/aWQ9aGFybW9ueTplZ2FsKS5cbiAgICBpZiAoYSA9PT0gYikgcmV0dXJuIGEgIT09IDAgfHwgMSAvIGEgPT09IDEgLyBiO1xuICAgIC8vIEEgc3RyaWN0IGNvbXBhcmlzb24gaXMgbmVjZXNzYXJ5IGJlY2F1c2UgYG51bGwgPT0gdW5kZWZpbmVkYC5cbiAgICBpZiAoYSA9PSBudWxsIHx8IGIgPT0gbnVsbCkgcmV0dXJuIGEgPT09IGI7XG4gICAgLy8gVW53cmFwIGFueSB3cmFwcGVkIG9iamVjdHMuXG4gICAgaWYgKGEgaW5zdGFuY2VvZiBfKSBhID0gYS5fd3JhcHBlZDtcbiAgICBpZiAoYiBpbnN0YW5jZW9mIF8pIGIgPSBiLl93cmFwcGVkO1xuICAgIC8vIENvbXBhcmUgYFtbQ2xhc3NdXWAgbmFtZXMuXG4gICAgdmFyIGNsYXNzTmFtZSA9IHRvU3RyaW5nLmNhbGwoYSk7XG4gICAgaWYgKGNsYXNzTmFtZSAhPT0gdG9TdHJpbmcuY2FsbChiKSkgcmV0dXJuIGZhbHNlO1xuICAgIHN3aXRjaCAoY2xhc3NOYW1lKSB7XG4gICAgICAvLyBTdHJpbmdzLCBudW1iZXJzLCByZWd1bGFyIGV4cHJlc3Npb25zLCBkYXRlcywgYW5kIGJvb2xlYW5zIGFyZSBjb21wYXJlZCBieSB2YWx1ZS5cbiAgICAgIGNhc2UgJ1tvYmplY3QgUmVnRXhwXSc6XG4gICAgICAvLyBSZWdFeHBzIGFyZSBjb2VyY2VkIHRvIHN0cmluZ3MgZm9yIGNvbXBhcmlzb24gKE5vdGU6ICcnICsgL2EvaSA9PT0gJy9hL2knKVxuICAgICAgY2FzZSAnW29iamVjdCBTdHJpbmddJzpcbiAgICAgICAgLy8gUHJpbWl0aXZlcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBvYmplY3Qgd3JhcHBlcnMgYXJlIGVxdWl2YWxlbnQ7IHRodXMsIGBcIjVcImAgaXNcbiAgICAgICAgLy8gZXF1aXZhbGVudCB0byBgbmV3IFN0cmluZyhcIjVcIilgLlxuICAgICAgICByZXR1cm4gJycgKyBhID09PSAnJyArIGI7XG4gICAgICBjYXNlICdbb2JqZWN0IE51bWJlcl0nOlxuICAgICAgICAvLyBgTmFOYHMgYXJlIGVxdWl2YWxlbnQsIGJ1dCBub24tcmVmbGV4aXZlLlxuICAgICAgICAvLyBPYmplY3QoTmFOKSBpcyBlcXVpdmFsZW50IHRvIE5hTlxuICAgICAgICBpZiAoK2EgIT09ICthKSByZXR1cm4gK2IgIT09ICtiO1xuICAgICAgICAvLyBBbiBgZWdhbGAgY29tcGFyaXNvbiBpcyBwZXJmb3JtZWQgZm9yIG90aGVyIG51bWVyaWMgdmFsdWVzLlxuICAgICAgICByZXR1cm4gK2EgPT09IDAgPyAxIC8gK2EgPT09IDEgLyBiIDogK2EgPT09ICtiO1xuICAgICAgY2FzZSAnW29iamVjdCBEYXRlXSc6XG4gICAgICBjYXNlICdbb2JqZWN0IEJvb2xlYW5dJzpcbiAgICAgICAgLy8gQ29lcmNlIGRhdGVzIGFuZCBib29sZWFucyB0byBudW1lcmljIHByaW1pdGl2ZSB2YWx1ZXMuIERhdGVzIGFyZSBjb21wYXJlZCBieSB0aGVpclxuICAgICAgICAvLyBtaWxsaXNlY29uZCByZXByZXNlbnRhdGlvbnMuIE5vdGUgdGhhdCBpbnZhbGlkIGRhdGVzIHdpdGggbWlsbGlzZWNvbmQgcmVwcmVzZW50YXRpb25zXG4gICAgICAgIC8vIG9mIGBOYU5gIGFyZSBub3QgZXF1aXZhbGVudC5cbiAgICAgICAgcmV0dXJuICthID09PSArYjtcbiAgICB9XG5cbiAgICB2YXIgYXJlQXJyYXlzID0gY2xhc3NOYW1lID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgIGlmICghYXJlQXJyYXlzKSB7XG4gICAgICBpZiAodHlwZW9mIGEgIT0gJ29iamVjdCcgfHwgdHlwZW9mIGIgIT0gJ29iamVjdCcpIHJldHVybiBmYWxzZTtcblxuICAgICAgLy8gT2JqZWN0cyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVpdmFsZW50LCBidXQgYE9iamVjdGBzIG9yIGBBcnJheWBzXG4gICAgICAvLyBmcm9tIGRpZmZlcmVudCBmcmFtZXMgYXJlLlxuICAgICAgdmFyIGFDdG9yID0gYS5jb25zdHJ1Y3RvciwgYkN0b3IgPSBiLmNvbnN0cnVjdG9yO1xuICAgICAgaWYgKGFDdG9yICE9PSBiQ3RvciAmJiAhKF8uaXNGdW5jdGlvbihhQ3RvcikgJiYgYUN0b3IgaW5zdGFuY2VvZiBhQ3RvciAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uaXNGdW5jdGlvbihiQ3RvcikgJiYgYkN0b3IgaW5zdGFuY2VvZiBiQ3RvcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCdjb25zdHJ1Y3RvcicgaW4gYSAmJiAnY29uc3RydWN0b3InIGluIGIpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gQXNzdW1lIGVxdWFsaXR5IGZvciBjeWNsaWMgc3RydWN0dXJlcy4gVGhlIGFsZ29yaXRobSBmb3IgZGV0ZWN0aW5nIGN5Y2xpY1xuICAgIC8vIHN0cnVjdHVyZXMgaXMgYWRhcHRlZCBmcm9tIEVTIDUuMSBzZWN0aW9uIDE1LjEyLjMsIGFic3RyYWN0IG9wZXJhdGlvbiBgSk9gLlxuXG4gICAgLy8gSW5pdGlhbGl6aW5nIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuICAgIC8vIEl0J3MgZG9uZSBoZXJlIHNpbmNlIHdlIG9ubHkgbmVlZCB0aGVtIGZvciBvYmplY3RzIGFuZCBhcnJheXMgY29tcGFyaXNvbi5cbiAgICBhU3RhY2sgPSBhU3RhY2sgfHwgW107XG4gICAgYlN0YWNrID0gYlN0YWNrIHx8IFtdO1xuICAgIHZhciBsZW5ndGggPSBhU3RhY2subGVuZ3RoO1xuICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgLy8gTGluZWFyIHNlYXJjaC4gUGVyZm9ybWFuY2UgaXMgaW52ZXJzZWx5IHByb3BvcnRpb25hbCB0byB0aGUgbnVtYmVyIG9mXG4gICAgICAvLyB1bmlxdWUgbmVzdGVkIHN0cnVjdHVyZXMuXG4gICAgICBpZiAoYVN0YWNrW2xlbmd0aF0gPT09IGEpIHJldHVybiBiU3RhY2tbbGVuZ3RoXSA9PT0gYjtcbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIGZpcnN0IG9iamVjdCB0byB0aGUgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXG4gICAgYVN0YWNrLnB1c2goYSk7XG4gICAgYlN0YWNrLnB1c2goYik7XG5cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgYW5kIGFycmF5cy5cbiAgICBpZiAoYXJlQXJyYXlzKSB7XG4gICAgICAvLyBDb21wYXJlIGFycmF5IGxlbmd0aHMgdG8gZGV0ZXJtaW5lIGlmIGEgZGVlcCBjb21wYXJpc29uIGlzIG5lY2Vzc2FyeS5cbiAgICAgIGxlbmd0aCA9IGEubGVuZ3RoO1xuICAgICAgaWYgKGxlbmd0aCAhPT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIC8vIERlZXAgY29tcGFyZSB0aGUgY29udGVudHMsIGlnbm9yaW5nIG5vbi1udW1lcmljIHByb3BlcnRpZXMuXG4gICAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgICAgaWYgKCFlcShhW2xlbmd0aF0sIGJbbGVuZ3RoXSwgYVN0YWNrLCBiU3RhY2spKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIERlZXAgY29tcGFyZSBvYmplY3RzLlxuICAgICAgdmFyIGtleXMgPSBfLmtleXMoYSksIGtleTtcbiAgICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgICAgLy8gRW5zdXJlIHRoYXQgYm90aCBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUgbnVtYmVyIG9mIHByb3BlcnRpZXMgYmVmb3JlIGNvbXBhcmluZyBkZWVwIGVxdWFsaXR5LlxuICAgICAgaWYgKF8ua2V5cyhiKS5sZW5ndGggIT09IGxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAgIC8vIERlZXAgY29tcGFyZSBlYWNoIG1lbWJlclxuICAgICAgICBrZXkgPSBrZXlzW2xlbmd0aF07XG4gICAgICAgIGlmICghKF8uaGFzKGIsIGtleSkgJiYgZXEoYVtrZXldLCBiW2tleV0sIGFTdGFjaywgYlN0YWNrKSkpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBvYmplY3QgZnJvbSB0aGUgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXG4gICAgYVN0YWNrLnBvcCgpO1xuICAgIGJTdGFjay5wb3AoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvLyBQZXJmb3JtIGEgZGVlcCBjb21wYXJpc29uIHRvIGNoZWNrIGlmIHR3byBvYmplY3RzIGFyZSBlcXVhbC5cbiAgXy5pc0VxdWFsID0gZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBlcShhLCBiKTtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIGFycmF5LCBzdHJpbmcsIG9yIG9iamVjdCBlbXB0eT9cbiAgLy8gQW4gXCJlbXB0eVwiIG9iamVjdCBoYXMgbm8gZW51bWVyYWJsZSBvd24tcHJvcGVydGllcy5cbiAgXy5pc0VtcHR5ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoaXNBcnJheUxpa2Uob2JqKSAmJiAoXy5pc0FycmF5KG9iaikgfHwgXy5pc1N0cmluZyhvYmopIHx8IF8uaXNBcmd1bWVudHMob2JqKSkpIHJldHVybiBvYmoubGVuZ3RoID09PSAwO1xuICAgIHJldHVybiBfLmtleXMob2JqKS5sZW5ndGggPT09IDA7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YWx1ZSBhIERPTSBlbGVtZW50P1xuICBfLmlzRWxlbWVudCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiAhIShvYmogJiYgb2JqLm5vZGVUeXBlID09PSAxKTtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhbHVlIGFuIGFycmF5P1xuICAvLyBEZWxlZ2F0ZXMgdG8gRUNNQTUncyBuYXRpdmUgQXJyYXkuaXNBcnJheVxuICBfLmlzQXJyYXkgPSBuYXRpdmVJc0FycmF5IHx8IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YXJpYWJsZSBhbiBvYmplY3Q/XG4gIF8uaXNPYmplY3QgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgdHlwZSA9IHR5cGVvZiBvYmo7XG4gICAgcmV0dXJuIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgdHlwZSA9PT0gJ29iamVjdCcgJiYgISFvYmo7XG4gIH07XG5cbiAgLy8gQWRkIHNvbWUgaXNUeXBlIG1ldGhvZHM6IGlzQXJndW1lbnRzLCBpc0Z1bmN0aW9uLCBpc1N0cmluZywgaXNOdW1iZXIsIGlzRGF0ZSwgaXNSZWdFeHAsIGlzRXJyb3IuXG4gIF8uZWFjaChbJ0FyZ3VtZW50cycsICdGdW5jdGlvbicsICdTdHJpbmcnLCAnTnVtYmVyJywgJ0RhdGUnLCAnUmVnRXhwJywgJ0Vycm9yJ10sIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBfWydpcycgKyBuYW1lXSA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgJyArIG5hbWUgKyAnXSc7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gRGVmaW5lIGEgZmFsbGJhY2sgdmVyc2lvbiBvZiB0aGUgbWV0aG9kIGluIGJyb3dzZXJzIChhaGVtLCBJRSA8IDkpLCB3aGVyZVxuICAvLyB0aGVyZSBpc24ndCBhbnkgaW5zcGVjdGFibGUgXCJBcmd1bWVudHNcIiB0eXBlLlxuICBpZiAoIV8uaXNBcmd1bWVudHMoYXJndW1lbnRzKSkge1xuICAgIF8uaXNBcmd1bWVudHMgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBfLmhhcyhvYmosICdjYWxsZWUnKTtcbiAgICB9O1xuICB9XG5cbiAgLy8gT3B0aW1pemUgYGlzRnVuY3Rpb25gIGlmIGFwcHJvcHJpYXRlLiBXb3JrIGFyb3VuZCBzb21lIHR5cGVvZiBidWdzIGluIG9sZCB2OCxcbiAgLy8gSUUgMTEgKCMxNjIxKSwgYW5kIGluIFNhZmFyaSA4ICgjMTkyOSkuXG4gIGlmICh0eXBlb2YgLy4vICE9ICdmdW5jdGlvbicgJiYgdHlwZW9mIEludDhBcnJheSAhPSAnb2JqZWN0Jykge1xuICAgIF8uaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmogPT0gJ2Z1bmN0aW9uJyB8fCBmYWxzZTtcbiAgICB9O1xuICB9XG5cbiAgLy8gSXMgYSBnaXZlbiBvYmplY3QgYSBmaW5pdGUgbnVtYmVyP1xuICBfLmlzRmluaXRlID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIGlzRmluaXRlKG9iaikgJiYgIWlzTmFOKHBhcnNlRmxvYXQob2JqKSk7XG4gIH07XG5cbiAgLy8gSXMgdGhlIGdpdmVuIHZhbHVlIGBOYU5gPyAoTmFOIGlzIHRoZSBvbmx5IG51bWJlciB3aGljaCBkb2VzIG5vdCBlcXVhbCBpdHNlbGYpLlxuICBfLmlzTmFOID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIF8uaXNOdW1iZXIob2JqKSAmJiBvYmogIT09ICtvYmo7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YWx1ZSBhIGJvb2xlYW4/XG4gIF8uaXNCb29sZWFuID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdHJ1ZSB8fCBvYmogPT09IGZhbHNlIHx8IHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQm9vbGVhbl0nO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFsdWUgZXF1YWwgdG8gbnVsbD9cbiAgXy5pc051bGwgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSBudWxsO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFyaWFibGUgdW5kZWZpbmVkP1xuICBfLmlzVW5kZWZpbmVkID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdm9pZCAwO1xuICB9O1xuXG4gIC8vIFNob3J0Y3V0IGZ1bmN0aW9uIGZvciBjaGVja2luZyBpZiBhbiBvYmplY3QgaGFzIGEgZ2l2ZW4gcHJvcGVydHkgZGlyZWN0bHlcbiAgLy8gb24gaXRzZWxmIChpbiBvdGhlciB3b3Jkcywgbm90IG9uIGEgcHJvdG90eXBlKS5cbiAgXy5oYXMgPSBmdW5jdGlvbihvYmosIGtleSkge1xuICAgIHJldHVybiBvYmogIT0gbnVsbCAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcbiAgfTtcblxuICAvLyBVdGlsaXR5IEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFJ1biBVbmRlcnNjb3JlLmpzIGluICpub0NvbmZsaWN0KiBtb2RlLCByZXR1cm5pbmcgdGhlIGBfYCB2YXJpYWJsZSB0byBpdHNcbiAgLy8gcHJldmlvdXMgb3duZXIuIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIFVuZGVyc2NvcmUgb2JqZWN0LlxuICBfLm5vQ29uZmxpY3QgPSBmdW5jdGlvbigpIHtcbiAgICByb290Ll8gPSBwcmV2aW91c1VuZGVyc2NvcmU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLy8gS2VlcCB0aGUgaWRlbnRpdHkgZnVuY3Rpb24gYXJvdW5kIGZvciBkZWZhdWx0IGl0ZXJhdGVlcy5cbiAgXy5pZGVudGl0eSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIC8vIFByZWRpY2F0ZS1nZW5lcmF0aW5nIGZ1bmN0aW9ucy4gT2Z0ZW4gdXNlZnVsIG91dHNpZGUgb2YgVW5kZXJzY29yZS5cbiAgXy5jb25zdGFudCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gIH07XG5cbiAgXy5ub29wID0gZnVuY3Rpb24oKXt9O1xuXG4gIF8ucHJvcGVydHkgPSBwcm9wZXJ0eTtcblxuICAvLyBHZW5lcmF0ZXMgYSBmdW5jdGlvbiBmb3IgYSBnaXZlbiBvYmplY3QgdGhhdCByZXR1cm5zIGEgZ2l2ZW4gcHJvcGVydHkuXG4gIF8ucHJvcGVydHlPZiA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogPT0gbnVsbCA/IGZ1bmN0aW9uKCl7fSA6IGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIHByZWRpY2F0ZSBmb3IgY2hlY2tpbmcgd2hldGhlciBhbiBvYmplY3QgaGFzIGEgZ2l2ZW4gc2V0IG9mXG4gIC8vIGBrZXk6dmFsdWVgIHBhaXJzLlxuICBfLm1hdGNoZXIgPSBfLm1hdGNoZXMgPSBmdW5jdGlvbihhdHRycykge1xuICAgIGF0dHJzID0gXy5leHRlbmRPd24oe30sIGF0dHJzKTtcbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gXy5pc01hdGNoKG9iaiwgYXR0cnMpO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUnVuIGEgZnVuY3Rpb24gKipuKiogdGltZXMuXG4gIF8udGltZXMgPSBmdW5jdGlvbihuLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIHZhciBhY2N1bSA9IEFycmF5KE1hdGgubWF4KDAsIG4pKTtcbiAgICBpdGVyYXRlZSA9IG9wdGltaXplQ2IoaXRlcmF0ZWUsIGNvbnRleHQsIDEpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSBhY2N1bVtpXSA9IGl0ZXJhdGVlKGkpO1xuICAgIHJldHVybiBhY2N1bTtcbiAgfTtcblxuICAvLyBSZXR1cm4gYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIG1pbiBhbmQgbWF4IChpbmNsdXNpdmUpLlxuICBfLnJhbmRvbSA9IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XG4gICAgaWYgKG1heCA9PSBudWxsKSB7XG4gICAgICBtYXggPSBtaW47XG4gICAgICBtaW4gPSAwO1xuICAgIH1cbiAgICByZXR1cm4gbWluICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKTtcbiAgfTtcblxuICAvLyBBIChwb3NzaWJseSBmYXN0ZXIpIHdheSB0byBnZXQgdGhlIGN1cnJlbnQgdGltZXN0YW1wIGFzIGFuIGludGVnZXIuXG4gIF8ubm93ID0gRGF0ZS5ub3cgfHwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9O1xuXG4gICAvLyBMaXN0IG9mIEhUTUwgZW50aXRpZXMgZm9yIGVzY2FwaW5nLlxuICB2YXIgZXNjYXBlTWFwID0ge1xuICAgICcmJzogJyZhbXA7JyxcbiAgICAnPCc6ICcmbHQ7JyxcbiAgICAnPic6ICcmZ3Q7JyxcbiAgICAnXCInOiAnJnF1b3Q7JyxcbiAgICBcIidcIjogJyYjeDI3OycsXG4gICAgJ2AnOiAnJiN4NjA7J1xuICB9O1xuICB2YXIgdW5lc2NhcGVNYXAgPSBfLmludmVydChlc2NhcGVNYXApO1xuXG4gIC8vIEZ1bmN0aW9ucyBmb3IgZXNjYXBpbmcgYW5kIHVuZXNjYXBpbmcgc3RyaW5ncyB0by9mcm9tIEhUTUwgaW50ZXJwb2xhdGlvbi5cbiAgdmFyIGNyZWF0ZUVzY2FwZXIgPSBmdW5jdGlvbihtYXApIHtcbiAgICB2YXIgZXNjYXBlciA9IGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICByZXR1cm4gbWFwW21hdGNoXTtcbiAgICB9O1xuICAgIC8vIFJlZ2V4ZXMgZm9yIGlkZW50aWZ5aW5nIGEga2V5IHRoYXQgbmVlZHMgdG8gYmUgZXNjYXBlZFxuICAgIHZhciBzb3VyY2UgPSAnKD86JyArIF8ua2V5cyhtYXApLmpvaW4oJ3wnKSArICcpJztcbiAgICB2YXIgdGVzdFJlZ2V4cCA9IFJlZ0V4cChzb3VyY2UpO1xuICAgIHZhciByZXBsYWNlUmVnZXhwID0gUmVnRXhwKHNvdXJjZSwgJ2cnKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgICBzdHJpbmcgPSBzdHJpbmcgPT0gbnVsbCA/ICcnIDogJycgKyBzdHJpbmc7XG4gICAgICByZXR1cm4gdGVzdFJlZ2V4cC50ZXN0KHN0cmluZykgPyBzdHJpbmcucmVwbGFjZShyZXBsYWNlUmVnZXhwLCBlc2NhcGVyKSA6IHN0cmluZztcbiAgICB9O1xuICB9O1xuICBfLmVzY2FwZSA9IGNyZWF0ZUVzY2FwZXIoZXNjYXBlTWFwKTtcbiAgXy51bmVzY2FwZSA9IGNyZWF0ZUVzY2FwZXIodW5lc2NhcGVNYXApO1xuXG4gIC8vIElmIHRoZSB2YWx1ZSBvZiB0aGUgbmFtZWQgYHByb3BlcnR5YCBpcyBhIGZ1bmN0aW9uIHRoZW4gaW52b2tlIGl0IHdpdGggdGhlXG4gIC8vIGBvYmplY3RgIGFzIGNvbnRleHQ7IG90aGVyd2lzZSwgcmV0dXJuIGl0LlxuICBfLnJlc3VsdCA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHksIGZhbGxiYWNrKSB7XG4gICAgdmFyIHZhbHVlID0gb2JqZWN0ID09IG51bGwgPyB2b2lkIDAgOiBvYmplY3RbcHJvcGVydHldO1xuICAgIGlmICh2YWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgICB2YWx1ZSA9IGZhbGxiYWNrO1xuICAgIH1cbiAgICByZXR1cm4gXy5pc0Z1bmN0aW9uKHZhbHVlKSA/IHZhbHVlLmNhbGwob2JqZWN0KSA6IHZhbHVlO1xuICB9O1xuXG4gIC8vIEdlbmVyYXRlIGEgdW5pcXVlIGludGVnZXIgaWQgKHVuaXF1ZSB3aXRoaW4gdGhlIGVudGlyZSBjbGllbnQgc2Vzc2lvbikuXG4gIC8vIFVzZWZ1bCBmb3IgdGVtcG9yYXJ5IERPTSBpZHMuXG4gIHZhciBpZENvdW50ZXIgPSAwO1xuICBfLnVuaXF1ZUlkID0gZnVuY3Rpb24ocHJlZml4KSB7XG4gICAgdmFyIGlkID0gKytpZENvdW50ZXIgKyAnJztcbiAgICByZXR1cm4gcHJlZml4ID8gcHJlZml4ICsgaWQgOiBpZDtcbiAgfTtcblxuICAvLyBCeSBkZWZhdWx0LCBVbmRlcnNjb3JlIHVzZXMgRVJCLXN0eWxlIHRlbXBsYXRlIGRlbGltaXRlcnMsIGNoYW5nZSB0aGVcbiAgLy8gZm9sbG93aW5nIHRlbXBsYXRlIHNldHRpbmdzIHRvIHVzZSBhbHRlcm5hdGl2ZSBkZWxpbWl0ZXJzLlxuICBfLnRlbXBsYXRlU2V0dGluZ3MgPSB7XG4gICAgZXZhbHVhdGUgICAgOiAvPCUoW1xcc1xcU10rPyklPi9nLFxuICAgIGludGVycG9sYXRlIDogLzwlPShbXFxzXFxTXSs/KSU+L2csXG4gICAgZXNjYXBlICAgICAgOiAvPCUtKFtcXHNcXFNdKz8pJT4vZ1xuICB9O1xuXG4gIC8vIFdoZW4gY3VzdG9taXppbmcgYHRlbXBsYXRlU2V0dGluZ3NgLCBpZiB5b3UgZG9uJ3Qgd2FudCB0byBkZWZpbmUgYW5cbiAgLy8gaW50ZXJwb2xhdGlvbiwgZXZhbHVhdGlvbiBvciBlc2NhcGluZyByZWdleCwgd2UgbmVlZCBvbmUgdGhhdCBpc1xuICAvLyBndWFyYW50ZWVkIG5vdCB0byBtYXRjaC5cbiAgdmFyIG5vTWF0Y2ggPSAvKC4pXi87XG5cbiAgLy8gQ2VydGFpbiBjaGFyYWN0ZXJzIG5lZWQgdG8gYmUgZXNjYXBlZCBzbyB0aGF0IHRoZXkgY2FuIGJlIHB1dCBpbnRvIGFcbiAgLy8gc3RyaW5nIGxpdGVyYWwuXG4gIHZhciBlc2NhcGVzID0ge1xuICAgIFwiJ1wiOiAgICAgIFwiJ1wiLFxuICAgICdcXFxcJzogICAgICdcXFxcJyxcbiAgICAnXFxyJzogICAgICdyJyxcbiAgICAnXFxuJzogICAgICduJyxcbiAgICAnXFx1MjAyOCc6ICd1MjAyOCcsXG4gICAgJ1xcdTIwMjknOiAndTIwMjknXG4gIH07XG5cbiAgdmFyIGVzY2FwZXIgPSAvXFxcXHwnfFxccnxcXG58XFx1MjAyOHxcXHUyMDI5L2c7XG5cbiAgdmFyIGVzY2FwZUNoYXIgPSBmdW5jdGlvbihtYXRjaCkge1xuICAgIHJldHVybiAnXFxcXCcgKyBlc2NhcGVzW21hdGNoXTtcbiAgfTtcblxuICAvLyBKYXZhU2NyaXB0IG1pY3JvLXRlbXBsYXRpbmcsIHNpbWlsYXIgdG8gSm9obiBSZXNpZydzIGltcGxlbWVudGF0aW9uLlxuICAvLyBVbmRlcnNjb3JlIHRlbXBsYXRpbmcgaGFuZGxlcyBhcmJpdHJhcnkgZGVsaW1pdGVycywgcHJlc2VydmVzIHdoaXRlc3BhY2UsXG4gIC8vIGFuZCBjb3JyZWN0bHkgZXNjYXBlcyBxdW90ZXMgd2l0aGluIGludGVycG9sYXRlZCBjb2RlLlxuICAvLyBOQjogYG9sZFNldHRpbmdzYCBvbmx5IGV4aXN0cyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gIF8udGVtcGxhdGUgPSBmdW5jdGlvbih0ZXh0LCBzZXR0aW5ncywgb2xkU2V0dGluZ3MpIHtcbiAgICBpZiAoIXNldHRpbmdzICYmIG9sZFNldHRpbmdzKSBzZXR0aW5ncyA9IG9sZFNldHRpbmdzO1xuICAgIHNldHRpbmdzID0gXy5kZWZhdWx0cyh7fSwgc2V0dGluZ3MsIF8udGVtcGxhdGVTZXR0aW5ncyk7XG5cbiAgICAvLyBDb21iaW5lIGRlbGltaXRlcnMgaW50byBvbmUgcmVndWxhciBleHByZXNzaW9uIHZpYSBhbHRlcm5hdGlvbi5cbiAgICB2YXIgbWF0Y2hlciA9IFJlZ0V4cChbXG4gICAgICAoc2V0dGluZ3MuZXNjYXBlIHx8IG5vTWF0Y2gpLnNvdXJjZSxcbiAgICAgIChzZXR0aW5ncy5pbnRlcnBvbGF0ZSB8fCBub01hdGNoKS5zb3VyY2UsXG4gICAgICAoc2V0dGluZ3MuZXZhbHVhdGUgfHwgbm9NYXRjaCkuc291cmNlXG4gICAgXS5qb2luKCd8JykgKyAnfCQnLCAnZycpO1xuXG4gICAgLy8gQ29tcGlsZSB0aGUgdGVtcGxhdGUgc291cmNlLCBlc2NhcGluZyBzdHJpbmcgbGl0ZXJhbHMgYXBwcm9wcmlhdGVseS5cbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBzb3VyY2UgPSBcIl9fcCs9J1wiO1xuICAgIHRleHQucmVwbGFjZShtYXRjaGVyLCBmdW5jdGlvbihtYXRjaCwgZXNjYXBlLCBpbnRlcnBvbGF0ZSwgZXZhbHVhdGUsIG9mZnNldCkge1xuICAgICAgc291cmNlICs9IHRleHQuc2xpY2UoaW5kZXgsIG9mZnNldCkucmVwbGFjZShlc2NhcGVyLCBlc2NhcGVDaGFyKTtcbiAgICAgIGluZGV4ID0gb2Zmc2V0ICsgbWF0Y2gubGVuZ3RoO1xuXG4gICAgICBpZiAoZXNjYXBlKSB7XG4gICAgICAgIHNvdXJjZSArPSBcIicrXFxuKChfX3Q9KFwiICsgZXNjYXBlICsgXCIpKT09bnVsbD8nJzpfLmVzY2FwZShfX3QpKStcXG4nXCI7XG4gICAgICB9IGVsc2UgaWYgKGludGVycG9sYXRlKSB7XG4gICAgICAgIHNvdXJjZSArPSBcIicrXFxuKChfX3Q9KFwiICsgaW50ZXJwb2xhdGUgKyBcIikpPT1udWxsPycnOl9fdCkrXFxuJ1wiO1xuICAgICAgfSBlbHNlIGlmIChldmFsdWF0ZSkge1xuICAgICAgICBzb3VyY2UgKz0gXCInO1xcblwiICsgZXZhbHVhdGUgKyBcIlxcbl9fcCs9J1wiO1xuICAgICAgfVxuXG4gICAgICAvLyBBZG9iZSBWTXMgbmVlZCB0aGUgbWF0Y2ggcmV0dXJuZWQgdG8gcHJvZHVjZSB0aGUgY29ycmVjdCBvZmZlc3QuXG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfSk7XG4gICAgc291cmNlICs9IFwiJztcXG5cIjtcblxuICAgIC8vIElmIGEgdmFyaWFibGUgaXMgbm90IHNwZWNpZmllZCwgcGxhY2UgZGF0YSB2YWx1ZXMgaW4gbG9jYWwgc2NvcGUuXG4gICAgaWYgKCFzZXR0aW5ncy52YXJpYWJsZSkgc291cmNlID0gJ3dpdGgob2JqfHx7fSl7XFxuJyArIHNvdXJjZSArICd9XFxuJztcblxuICAgIHNvdXJjZSA9IFwidmFyIF9fdCxfX3A9JycsX19qPUFycmF5LnByb3RvdHlwZS5qb2luLFwiICtcbiAgICAgIFwicHJpbnQ9ZnVuY3Rpb24oKXtfX3ArPV9fai5jYWxsKGFyZ3VtZW50cywnJyk7fTtcXG5cIiArXG4gICAgICBzb3VyY2UgKyAncmV0dXJuIF9fcDtcXG4nO1xuXG4gICAgdHJ5IHtcbiAgICAgIHZhciByZW5kZXIgPSBuZXcgRnVuY3Rpb24oc2V0dGluZ3MudmFyaWFibGUgfHwgJ29iaicsICdfJywgc291cmNlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuXG4gICAgdmFyIHRlbXBsYXRlID0gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgcmV0dXJuIHJlbmRlci5jYWxsKHRoaXMsIGRhdGEsIF8pO1xuICAgIH07XG5cbiAgICAvLyBQcm92aWRlIHRoZSBjb21waWxlZCBzb3VyY2UgYXMgYSBjb252ZW5pZW5jZSBmb3IgcHJlY29tcGlsYXRpb24uXG4gICAgdmFyIGFyZ3VtZW50ID0gc2V0dGluZ3MudmFyaWFibGUgfHwgJ29iaic7XG4gICAgdGVtcGxhdGUuc291cmNlID0gJ2Z1bmN0aW9uKCcgKyBhcmd1bWVudCArICcpe1xcbicgKyBzb3VyY2UgKyAnfSc7XG5cbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH07XG5cbiAgLy8gQWRkIGEgXCJjaGFpblwiIGZ1bmN0aW9uLiBTdGFydCBjaGFpbmluZyBhIHdyYXBwZWQgVW5kZXJzY29yZSBvYmplY3QuXG4gIF8uY2hhaW4gPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfKG9iaik7XG4gICAgaW5zdGFuY2UuX2NoYWluID0gdHJ1ZTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH07XG5cbiAgLy8gT09QXG4gIC8vIC0tLS0tLS0tLS0tLS0tLVxuICAvLyBJZiBVbmRlcnNjb3JlIGlzIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLCBpdCByZXR1cm5zIGEgd3JhcHBlZCBvYmplY3QgdGhhdFxuICAvLyBjYW4gYmUgdXNlZCBPTy1zdHlsZS4gVGhpcyB3cmFwcGVyIGhvbGRzIGFsdGVyZWQgdmVyc2lvbnMgb2YgYWxsIHRoZVxuICAvLyB1bmRlcnNjb3JlIGZ1bmN0aW9ucy4gV3JhcHBlZCBvYmplY3RzIG1heSBiZSBjaGFpbmVkLlxuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0byBjb250aW51ZSBjaGFpbmluZyBpbnRlcm1lZGlhdGUgcmVzdWx0cy5cbiAgdmFyIHJlc3VsdCA9IGZ1bmN0aW9uKGluc3RhbmNlLCBvYmopIHtcbiAgICByZXR1cm4gaW5zdGFuY2UuX2NoYWluID8gXyhvYmopLmNoYWluKCkgOiBvYmo7XG4gIH07XG5cbiAgLy8gQWRkIHlvdXIgb3duIGN1c3RvbSBmdW5jdGlvbnMgdG8gdGhlIFVuZGVyc2NvcmUgb2JqZWN0LlxuICBfLm1peGluID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgXy5lYWNoKF8uZnVuY3Rpb25zKG9iaiksIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIHZhciBmdW5jID0gX1tuYW1lXSA9IG9ialtuYW1lXTtcbiAgICAgIF8ucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhcmdzID0gW3RoaXMuX3dyYXBwZWRdO1xuICAgICAgICBwdXNoLmFwcGx5KGFyZ3MsIGFyZ3VtZW50cyk7XG4gICAgICAgIHJldHVybiByZXN1bHQodGhpcywgZnVuYy5hcHBseShfLCBhcmdzKSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIEFkZCBhbGwgb2YgdGhlIFVuZGVyc2NvcmUgZnVuY3Rpb25zIHRvIHRoZSB3cmFwcGVyIG9iamVjdC5cbiAgXy5taXhpbihfKTtcblxuICAvLyBBZGQgYWxsIG11dGF0b3IgQXJyYXkgZnVuY3Rpb25zIHRvIHRoZSB3cmFwcGVyLlxuICBfLmVhY2goWydwb3AnLCAncHVzaCcsICdyZXZlcnNlJywgJ3NoaWZ0JywgJ3NvcnQnLCAnc3BsaWNlJywgJ3Vuc2hpZnQnXSwgZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBtZXRob2QgPSBBcnJheVByb3RvW25hbWVdO1xuICAgIF8ucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgb2JqID0gdGhpcy5fd3JhcHBlZDtcbiAgICAgIG1ldGhvZC5hcHBseShvYmosIGFyZ3VtZW50cyk7XG4gICAgICBpZiAoKG5hbWUgPT09ICdzaGlmdCcgfHwgbmFtZSA9PT0gJ3NwbGljZScpICYmIG9iai5sZW5ndGggPT09IDApIGRlbGV0ZSBvYmpbMF07XG4gICAgICByZXR1cm4gcmVzdWx0KHRoaXMsIG9iaik7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gQWRkIGFsbCBhY2Nlc3NvciBBcnJheSBmdW5jdGlvbnMgdG8gdGhlIHdyYXBwZXIuXG4gIF8uZWFjaChbJ2NvbmNhdCcsICdqb2luJywgJ3NsaWNlJ10sIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgbWV0aG9kID0gQXJyYXlQcm90b1tuYW1lXTtcbiAgICBfLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHJlc3VsdCh0aGlzLCBtZXRob2QuYXBwbHkodGhpcy5fd3JhcHBlZCwgYXJndW1lbnRzKSk7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gRXh0cmFjdHMgdGhlIHJlc3VsdCBmcm9tIGEgd3JhcHBlZCBhbmQgY2hhaW5lZCBvYmplY3QuXG4gIF8ucHJvdG90eXBlLnZhbHVlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dyYXBwZWQ7XG4gIH07XG5cbiAgLy8gUHJvdmlkZSB1bndyYXBwaW5nIHByb3h5IGZvciBzb21lIG1ldGhvZHMgdXNlZCBpbiBlbmdpbmUgb3BlcmF0aW9uc1xuICAvLyBzdWNoIGFzIGFyaXRobWV0aWMgYW5kIEpTT04gc3RyaW5naWZpY2F0aW9uLlxuICBfLnByb3RvdHlwZS52YWx1ZU9mID0gXy5wcm90b3R5cGUudG9KU09OID0gXy5wcm90b3R5cGUudmFsdWU7XG5cbiAgXy5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gJycgKyB0aGlzLl93cmFwcGVkO1xuICB9O1xuXG4gIC8vIEFNRCByZWdpc3RyYXRpb24gaGFwcGVucyBhdCB0aGUgZW5kIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQU1EIGxvYWRlcnNcbiAgLy8gdGhhdCBtYXkgbm90IGVuZm9yY2UgbmV4dC10dXJuIHNlbWFudGljcyBvbiBtb2R1bGVzLiBFdmVuIHRob3VnaCBnZW5lcmFsXG4gIC8vIHByYWN0aWNlIGZvciBBTUQgcmVnaXN0cmF0aW9uIGlzIHRvIGJlIGFub255bW91cywgdW5kZXJzY29yZSByZWdpc3RlcnNcbiAgLy8gYXMgYSBuYW1lZCBtb2R1bGUgYmVjYXVzZSwgbGlrZSBqUXVlcnksIGl0IGlzIGEgYmFzZSBsaWJyYXJ5IHRoYXQgaXNcbiAgLy8gcG9wdWxhciBlbm91Z2ggdG8gYmUgYnVuZGxlZCBpbiBhIHRoaXJkIHBhcnR5IGxpYiwgYnV0IG5vdCBiZSBwYXJ0IG9mXG4gIC8vIGFuIEFNRCBsb2FkIHJlcXVlc3QuIFRob3NlIGNhc2VzIGNvdWxkIGdlbmVyYXRlIGFuIGVycm9yIHdoZW4gYW5cbiAgLy8gYW5vbnltb3VzIGRlZmluZSgpIGlzIGNhbGxlZCBvdXRzaWRlIG9mIGEgbG9hZGVyIHJlcXVlc3QuXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoJ3VuZGVyc2NvcmUnLCBbXSwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gXztcbiAgICB9KTtcbiAgfVxufS5jYWxsKHRoaXMpKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3VuZGVyc2NvcmUvdW5kZXJzY29yZS5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBtIGZyb20gXCJtaXRocmlsXCI7XG5cbmNvbnN0IFdvcmRzID0ge1xuICAgIEl0ZW06IGZ1bmN0aW9uKGFyZ3Mpe1xuICAgICAgICB0aGlzLnJvd2lkID0gbS5wcm9wKGFyZ3Mucm93aWQpO1xuICAgICAgICB0aGlzLmphID0gbS5wcm9wKGFyZ3MuamEpO1xuICAgICAgICB0aGlzLmVuID0gbS5wcm9wKGFyZ3MuZW4pO1xuICAgICAgICB0aGlzLmZsYWcgPSBtLnByb3AoYXJncy5mbGFnIHx8IGZhbHNlKTtcbiAgICB9LFxuICAgIExpc3Q6IEFycmF5XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXb3JkcztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2VzNi9tb2RlbC93b3Jkcy5qc1xuICoqLyIsImltcG9ydCBtIGZyb20gXCJtaXRocmlsXCI7XG5cbmNvbnN0IENoZWNrID0ge1xuICAgIEl0ZW06IGZ1bmN0aW9uKGFyZ3Mpe1xuICAgICAgICB0aGlzLnJvd2lkID0gbS5wcm9wKGFyZ3Mucm93aWQpO1xuICAgICAgICB0aGlzLmphID0gbS5wcm9wKGFyZ3MuamEpO1xuICAgICAgICB0aGlzLmVuID0gbS5wcm9wKGFyZ3MuZW4pO1xuICAgICAgICB0aGlzLmZsYWcgPSBtLnByb3AoYXJncy5mbGFnIHx8IGZhbHNlKTtcbiAgICB9LFxuICAgIExpc3Q6IEFycmF5XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGVjaztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2VzNi9tb2RlbC9jaGVjay5qc1xuICoqLyIsImltcG9ydCBtIGZyb20gXCJtaXRocmlsXCI7XG5cbmNsYXNzIExvY2Fsc3RyYWdlIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKXtcbiAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICAgICAgICB0aGlzLmtleSA9IG0ucHJvcChuYW1lKTtcbiAgICB9XG4gICAgc2V0KHZhbHVlKXtcbiAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmtleSgpLCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgIH1cbiAgICBnZXQoKXtcbiAgICAgICAgY29uc3QgZCA9IG0uZGVmZXJyZWQoKTtcbiAgICAgICAgZC5yZXNvbHZlKEpTT04ucGFyc2UodGhpcy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmtleSgpKSkpO1xuICAgICAgICByZXR1cm4gZC5wcm9taXNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9jYWxzdHJhZ2U7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9lczYvaGVscGVyL3N0Z3JhZ2UuanNcbiAqKi8iLCJpbXBvcnQgKiBhcyBtIGZyb20gXCJtaXRocmlsXCI7XG5pbXBvcnQgdm0gZnJvbSBcIi4uL3N0b3JlXCI7XG5pbXBvcnQgXyBmcm9tIFwidW5kZXJzY29yZVwiO1xuaW1wb3J0IENoZWNrIGZyb20gXCIuLi9tb2RlbC9jaGVja1wiO1xuLy8gaW1wb3J0IHdpbmRvdyBmcm9tIFwid2luZG93XCI7XG5cbmNsYXNzIENoZWNrUnVuIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmkgPSBtLnByb3AoMCk7XG4gICAgICAgIHRoaXMud29yZCA9IG0ucHJvcChbXSk7XG4gICAgICAgIHRoaXMudmlldyA9IG0ucHJvcChmYWxzZSk7XG4gICAgICAgIHRoaXMubGltaXQgPSBtLnByb3AoMCk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRmxhZyA9IG0ucHJvcChmYWxzZSk7XG4gICAgICAgIHRoaXMubmF2YmFyID0gdm0uc2NlbmUuY2hlY2tSdW4ubmF2YmFyO1xuICAgICAgICB2bS5nZXRVcmxQYXJhbShcImlkXCIpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHRoaXMubGltaXQocmVzKCkgLSAxKTtcbiAgICAgICAgICAgIHZtLnN0cmFnZS53b3Jkcy5nZXQoKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc0RhdGEgPSBfKGRhdGEpLmZpbHRlcihpdGVtID0+IGl0ZW0uZmxhZyA9PT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIHZtLmFkZENoZWNrQWxsKF8ocmVzRGF0YSkuc2h1ZmZsZSgpKTtcbiAgICAgICAgICAgICAgICB2bS5hZGRBbGwodm0ucmVqZWN0TGlzdCwgXyhkYXRhKS5maWx0ZXIoaXRlbSA9PiBpdGVtLmZsYWcgPT09IHRydWUpKTtcbiAgICAgICAgICAgICAgICBpZih2bS5jaGVja0xpc3QubGVuZ3RoID09PSAwKSByZXR1cm4gbS5yb3V0ZShcIi93b3Jkc1wiKTtcbiAgICAgICAgICAgICAgICBpZih2bS5jaGVja0xpc3QubGVuZ3RoIDwgcmVzKCkpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpbWl0KHZtLmNoZWNrTGlzdC5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5nZXROZXh0V29yZCgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNGbGFnKCl7XG4gICAgICAgIHRoaXMud29yZCgpLmZsYWcodHJ1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaXNWaWV3KCl7XG4gICAgICAgIHRoaXMudmlldyh0cnVlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpbmNyaW1lbnRDb3VudCgpe1xuICAgICAgICB2bS5pbmNyaW1lbnRDb3VudCh0aGlzLmksIHRoaXMubGltaXQpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGdldE5leHRXb3JkKCl7XG4gICAgICAgIHRoaXMud29yZCh2bS5nZXROZXh0V29yZDEodGhpcy5pLCB0aGlzLmxpbWl0KSk7XG4gICAgICAgIHRoaXMuaW5jcmltZW50Q291bnQoKTtcbiAgICAgICAgdGhpcy52aWV3KGZhbHNlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjaGVja0VuZEZsYWcoKXtcbiAgICAgICAgcmV0dXJuIHZtLmNoZWNrRW5kRmxhZyh0aGlzLmxpbWl0KTtcbiAgICB9XG4gICAgdF9hY3QoKXtcbiAgICAgICAgaWYodGhpcy52aWV3KCkpcmV0dXJuO1xuICAgICAgICBtLnN0YXJ0Q29tcHV0YXRpb24oKTtcbiAgICAgICAgdGhpcy5pc1ZpZXcoKTtcbiAgICAgICAgbS5lbmRDb21wdXRhdGlvbigpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxfYWN0KCl7XG4gICAgICAgIHRoaXMuZ2V0TmV4dFdvcmQoKTtcbiAgICAgICAgbS5lbmRDb21wdXRhdGlvbigpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHJfYWN0KCl7XG4gICAgICAgIG0uc3RhcnRDb21wdXRhdGlvbigpO1xuICAgICAgICB0aGlzLmlzRmxhZygpO1xuICAgICAgICBpZih0aGlzLmNoZWNrRW5kRmxhZygpKXtcbiAgICAgICAgICAgIG0ucm91dGUoXCIvaG9tZVwiKTtcbiAgICAgICAgICAgIG0uZW5kQ29tcHV0YXRpb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0TmV4dFdvcmQoKTtcbiAgICAgICAgICAgIG0uZW5kQ29tcHV0YXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIG9udW5sb2FkKCl7XG4gICAgICAgIHZtLnN0cmFnZS53b3Jkcy5zZXQoXy51bmlvbih2bS5jaGVja0xpc3QsIHZtLnJlamVjdExpc3QpKTtcbiAgICAgICAgdm0uY2hlY2tMaXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB2bS5jaGVja0xpc3QgPSBuZXcgQ2hlY2suTGlzdCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tSdW47XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9lczYvY3RybC9jaGVja1J1bi5qc1xuICoqLyIsImltcG9ydCBtIGZyb20gXCJtaXRocmlsXCI7XG5pbXBvcnQgbmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclwiO1xuaW1wb3J0IGhvbWVNZW51IGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWVNZW51XCI7XG5pbXBvcnQgQ3RybCBmcm9tIFwiLi4vY3RybC9ob21lXCI7XG5cbmxldCBIb21lID0ge1xuICAgIGNvbnRyb2xsZXI6ICgpID0+IG5ldyBDdHJsKCksXG4gICAgdmlldzogY3RybCA9PiB7XG4gICAgICAgIHJldHVybiBtKFwiLmZsZXhfY29udGVudCBkaXNwbGF5RmxleCBmbGV4X2NvbHVtblwiLCBbXG4gICAgICAgICAgICBuYXZiYXIoY3RybC5uYXZiYXIpLFxuICAgICAgICAgICAgbShcIi5kaXNwbGF5RmxleCBmbGV4X2NvbHVtblwiLCB7XG4gICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZmxleFwiOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwYWRkaW5nXCI6IFwiMXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICBcInBhZGRpbmctdG9wXCI6IFwiNi41cmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IFwiMTAwJVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgIGhvbWVNZW51KGN0cmwubWVudSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgIF0pO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9lczYvc2NlbmUvaG9tZS5qc1xuICoqLyIsImltcG9ydCBtIGZyb20gXCJtaXRocmlsXCI7XG5cbmNvbnN0IHRpcEl0ZW0gPSB0aXAgPT4ge1xuICAgIHJldHVybiBtKFwibGlcIiwgdGlwKTtcbn1cblxuY29uc3QgaG9tZU1lbnVJdGVtID0gaXRlbSA9PiB7XG4gICAgcmV0dXJuIG0oXCIuY2FyZFwiLCB7XG4gICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgXCJtYXJnaW4tYm90dG9tXCI6IFwiMXJlbVwiXG4gICAgICAgICAgICAvLyBcImZsZXhcIjogXCIxXCJcbiAgICAgICAgfVxuICAgIH0sW1xuICAgICAgICBtKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgIFwiY2xhc3NcIjogXCJ1LWZ1bGwtd2lkdGhcIixcbiAgICAgICAgICAgIFwib25jbGlja1wiOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbS5yb3V0ZShpdGVtLnVybCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGl0ZW0ubGFiZWwpLFxuICAgICAgICBtKFwidWxcIiwge1xuICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYWRkaW5nXCI6IFwiMC41cmVtXCIsXG4gICAgICAgICAgICAgICAgXCJtYXJnaW4tYm90dG9tXCI6IFwiMFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sW1xuICAgICAgICAgICAgaXRlbS50aXBzLm1hcCh0aXAgPT4gdGlwSXRlbSh0aXApKVxuICAgICAgICBdKVxuICAgIF0pO1xufTtcblxuY29uc3QgaG9tZU1lbnUgPSBsaXN0ID0+IHtcbiAgICByZXR1cm4gbShcImRpdlwiLCB7XG4gICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgXCJmbGV4XCI6IFwiMVwiXG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGxpc3QubWFwKGl0ZW0gPT4gaG9tZU1lbnVJdGVtKGl0ZW0pKVxuICAgIF0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaG9tZU1lbnU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9lczYvY29tcG9uZW50cy9ob21lTWVudS5qc1xuICoqLyIsImltcG9ydCB2bSBmcm9tIFwiLi4vc3RvcmVcIjtcblxuY2xhc3MgSG9tZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHZtLnJlbG9hZCgpO1xuICAgICAgICB0aGlzLm5hdmJhciA9IHZtLnNjZW5lLmhvbWUubmF2YmFyO1xuICAgICAgICB0aGlzLm1lbnUgPSB2bS5zY2VuZS5ob21lLmNvbnRlbnQubWVudTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9lczYvY3RybC9ob21lLmpzXG4gKiovIiwiaW1wb3J0IG0gZnJvbSBcIm1pdGhyaWxcIjtcbmltcG9ydCBuYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2YmFyXCI7XG5pbXBvcnQgd29yZExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvd29yZExpc3RcIjtcbmltcG9ydCBDdHJsIGZyb20gXCIuLi9jdHJsL3dvcmRzXCI7XG5cbmxldCBXb3JkcyA9IHtcbiAgICBjb250cm9sbGVyOiAoKSA9PiBuZXcgQ3RybCgpLFxuICAgIHZpZXc6IGN0cmwgPT4ge1xuICAgICAgICByZXR1cm4gbShcIi5mbGV4X2NvbnRlbnQgZGlzcGxheUZsZXggZmxleF9jb2x1bW5cIiwgW1xuICAgICAgICAgICAgbmF2YmFyKGN0cmwubmF2YmFyKSxcbiAgICAgICAgICAgIG0oXCIuZGlzcGxheUZsZXggZmxleF9jb2x1bW5cIiwge1xuICAgICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImZsZXhcIjogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGFkZGluZ1wiOiBcIjFyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJwYWRkaW5nLXRvcFwiOiBcIjYuNXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiBcIjEwMCVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICB3b3JkTGlzdChjdHJsLndvcmRMaXN0KVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgV29yZHM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9lczYvc2NlbmUvd29yZHMuanNcbiAqKi8iLCJpbXBvcnQgbSBmcm9tIFwibWl0aHJpbFwiO1xuY29uc3Qgd29yZEl0ZW0gPSAoaXRlbSwgaW5kZXgpID0+IHtcbiAgICByZXR1cm4gbShcIi5jYXJkIGRpc3BsYXlGbGV4IGZsZXhfcm93XCIsIHtcbiAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICBcIm1hcmdpbi1ib3R0b21cIjogXCIxcmVtXCIsXG4gICAgICAgICAgICBcImFsaWduLWl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBcInBhZGRpbmdcIjogXCIycmVtXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJvbmNsaWNrXCI6ICgpID0+IHtcbiAgICAgICAgICAgIG0ucm91dGUoXCIvd29yZHMvXCIgKyBpbmRleCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIG0oXCJkaXZcIiwge1xuICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJmbGV4XCI6IFwiMVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGl0ZW0uZW4oKSksXG4gICAgICAgIG0oXCJkaXZcIiwge1xuICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJmbGV4XCI6IFwiMVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGl0ZW0uamEoKSlcbiAgICBdKTtcbn07XG5cbmNvbnN0IHdvcmRMaXN0ID0gbGlzdCA9PiB7XG4gICAgcmV0dXJuIG0oXCJkaXZcIiwge1xuICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgIFwiZmxleFwiOiBcIjFcIlxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBsaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHdvcmRJdGVtKGl0ZW0sIGluZGV4KSlcbiAgICBdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdvcmRMaXN0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZXM2L2NvbXBvbmVudHMvd29yZExpc3QuanNcbiAqKi8iLCJpbXBvcnQgdm0gZnJvbSBcIi4uL3N0b3JlXCI7XG4vLyBpbXBvcnQgTW9kZWwgZnJvbSBcIi4uL21vZGVsL3dvcmRzXCI7XG5cbmNsYXNzIFdvcmRzIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICAvLyB2bS5yZWxvYWQoKTtcbiAgICAgICAgdGhpcy5uYXZiYXIgPSB2bS5zY2VuZS53b3Jkcy5uYXZiYXI7XG4gICAgICAgIHRoaXMud29yZExpc3QgPSB2bS53b3JkTGlzdDtcbiAgICB9XG4gICAgb251bmxvYWQoKXtcbiAgICAgICAgdm0uc3RyYWdlLndvcmRzLnNldCh0aGlzLndvcmRMaXN0KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmRzO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZXM2L2N0cmwvd29yZHMuanNcbiAqKi8iLCJpbXBvcnQgbSBmcm9tIFwibWl0aHJpbFwiO1xuaW1wb3J0IG5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXJcIjtcbmltcG9ydCB3b3JkQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy93b3JkQ2FyZFwiO1xuaW1wb3J0IEN0cmwgZnJvbSBcIi4uL2N0cmwvd29yZHNOZXdcIjtcblxubGV0IFdvcmRzTmV3ID0ge1xuICAgIGNvbnRyb2xsZXI6ICgpID0+IG5ldyBDdHJsKCksXG4gICAgdmlldzogY3RybCA9PiB7XG4gICAgICAgIHJldHVybiBtKFwiLmZsZXhfY29udGVudCBkaXNwbGF5RmxleCBmbGV4X2NvbHVtblwiLCBbXG4gICAgICAgICAgICBuYXZiYXIoY3RybC5uYXZiYXIpLFxuICAgICAgICAgICAgbShcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZmxleFwiOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwYWRkaW5nXCI6IFwiMXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICBcInBhZGRpbmctdG9wXCI6IFwiNi41cmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IFwiMTAwJVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgIHdvcmRDYXJkKHtcbiAgICAgICAgICAgICAgICAgICAgZW46IGN0cmwuZW4sXG4gICAgICAgICAgICAgICAgICAgIGphOiBjdHJsLmphXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgbShcImJyXCIpLFxuICAgICAgICAgICAgICAgIG0oXCJidXR0b24uYnV0dG9uLXByaW1hcnkgdS1mdWxsLXdpZHRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmdpbi1ib3R0b21cIjogXCIycmVtXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJvbmNsaWNrXCI6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0cmwuYWRkKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIGN0cmwuYnV0dG9uMSksXG4gICAgICAgICAgICAgICAgbShcImJyXCIpLFxuICAgICAgICAgICAgICAgIG0oXCJidXR0b24uYnV0dG9uLXByaW1hcnkgdS1mdWxsLXdpZHRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmdpbi1ib3R0b21cIjogXCIycmVtXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJvbmNsaWNrXCI6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0cmwuYWRkKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgY3RybC5idXR0b24yKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgV29yZHNOZXc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9lczYvc2NlbmUvd29yZHNOZXcuanNcbiAqKi8iLCJpbXBvcnQgbSBmcm9tIFwibWl0aHJpbFwiO1xuXG5jb25zdCB3b3JkQ2FyZCA9IGFyZ3MgPT4ge1xuICAgIHJldHVybiBtKFwiLmNhcmRcIiwge1xuICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgIFwiZmxleFwiOiBhcmdzLmZsZXgsXG4gICAgICAgICAgICBcIm1hcmdpbi1ib3R0b21cIjogXCIxcmVtXCJcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgbShcImRpdlwiLCBbXG4gICAgICAgICAgICBtKFwibGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIFwiZm9yXCI6IFwiZW5fSW5wdXRcIlxuICAgICAgICAgICAgfSwgXCLoi7Hoqp5cIiksXG4gICAgICAgICAgICBtKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICBcImNsYXNzXCI6XCJ1LWZ1bGwtd2lkdGhcIixcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiZW5fSW5wdXRcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGFyZ3MuZW4oKSxcbiAgICAgICAgICAgICAgICBcIm9uaW5wdXRcIjogbS53aXRoQXR0cihcInZhbHVlXCIsIGFyZ3MuZW4pXG4gICAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgbShcImRpdlwiLCBbXG4gICAgICAgICAgICBtKFwibGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIFwiZm9yXCI6IFwiamFfSW5wdXRcIlxuICAgICAgICAgICAgfSwgXCLml6XmnKzoqp5cIiksXG4gICAgICAgICAgICBtKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICBcImNsYXNzXCI6XCJ1LWZ1bGwtd2lkdGhcIixcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiamFfSW5wdXRcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGFyZ3MuamEoKSxcbiAgICAgICAgICAgICAgICBcIm9uaW5wdXRcIjogbS53aXRoQXR0cihcInZhbHVlXCIsIGFyZ3MuamEpXG4gICAgICAgICAgICB9KVxuICAgICAgICBdKVxuICAgIF0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd29yZENhcmQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9lczYvY29tcG9uZW50cy93b3JkQ2FyZC5qc1xuICoqLyIsImltcG9ydCBtIGZyb20gXCJtaXRocmlsXCI7XG5pbXBvcnQgdm0gZnJvbSBcIi4uL3N0b3JlXCI7XG5cbmNsYXNzIFdvcmRzTmV3IHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLm5hdmJhciA9IHZtLnNjZW5lLndvcmRzTmV3Lm5hdmJhcjtcbiAgICAgICAgdGhpcy5idXR0b24xID0gdm0uc2NlbmUud29yZHNOZXcuY29udGVudC5idXR0b24xO1xuICAgICAgICB0aGlzLmJ1dHRvbjIgPSB2bS5zY2VuZS53b3Jkc05ldy5jb250ZW50LmJ1dHRvbjI7XG4gICAgICAgIHRoaXMuZW4gPSBtLnByb3AoXCJcIik7XG4gICAgICAgIHRoaXMuamEgPSBtLnByb3AoXCJcIik7XG4gICAgfVxuICAgIGFkZChjb250aW51KXtcbiAgICAgICAgaWYodGhpcy5lbigpID09PSBcIlwiIHx8IHRoaXMuamEoKSA9PT0gXCJcIikgcmV0dXJuO1xuICAgICAgICB2bS5hZGQodm0ud29yZExpc3QsIHtcbiAgICAgICAgICAgIGVuOiB0aGlzLmVuKCksXG4gICAgICAgICAgICBqYTogdGhpcy5qYSgpXG4gICAgICAgIH0pXG4gICAgICAgIC8vIHZtLmRiLmluc2VydCh7XG4gICAgICAgIC8vICAgICBuYW1lOiBcIndvcmRzXCIsXG4gICAgICAgIC8vICAgICBkYXRhOiB7XG4gICAgICAgIC8vICAgICAgICAgZW46IFwiJ1wiICsgdGhpcy5lbigpICsgXCInXCIsXG4gICAgICAgIC8vICAgICAgICAgamE6IFwiJ1wiICsgdGhpcy5qYSgpICsgXCInXCIsXG4gICAgICAgIC8vICAgICAgICAgZmxhZzogMFxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9KTtcbiAgICAgICAgdGhpcy5lbihcIlwiKTtcbiAgICAgICAgdGhpcy5qYShcIlwiKTtcbiAgICAgICAgaWYoIWNvbnRpbnUpe1xuICAgICAgICAgICAgbS5yb3V0ZShcIi93b3Jkc1wiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbnVubG9hZCgpe1xuICAgICAgICB2bS5zdHJhZ2Uud29yZHMuc2V0KHZtLndvcmRMaXN0KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmRzTmV3O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZXM2L2N0cmwvd29yZHNOZXcuanNcbiAqKi8iLCJpbXBvcnQgbSBmcm9tIFwibWl0aHJpbFwiO1xuaW1wb3J0IG5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXJcIjtcbmltcG9ydCB3b3JkQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy93b3JkQ2FyZFwiO1xuaW1wb3J0IEN0cmwgZnJvbSBcIi4uL2N0cmwvV29yZHNFZGl0XCI7XG5cbmNvbnN0IFdvcmRzRWRpdCA9IHtcbiAgICBjb250cm9sbGVyOiAoKSA9PiBuZXcgQ3RybCgpLFxuICAgIHZpZXc6IGN0cmwgPT4ge1xuICAgICAgICByZXR1cm4gbShcIi5mbGV4X2NvbnRlbnQgZGlzcGxheUZsZXggZmxleF9jb2x1bW5cIiwgW1xuICAgICAgICAgICAgbmF2YmFyKGN0cmwubmF2YmFyKSxcbiAgICAgICAgICAgIG0oXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImZsZXhcIjogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGFkZGluZ1wiOiBcIjFyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJwYWRkaW5nLXRvcFwiOiBcIjYuNXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiBcIjEwMCVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICB3b3JkQ2FyZCh7XG4gICAgICAgICAgICAgICAgICAgIGVuOiBjdHJsLmVuLFxuICAgICAgICAgICAgICAgICAgICBqYTogY3RybC5qYVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIG0oXCJiclwiKSxcbiAgICAgICAgICAgICAgICBtKFwiYnV0dG9uLmJ1dHRvbi1wcmltYXJ5IHUtZnVsbC13aWR0aFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW4tYm90dG9tXCI6IFwiMnJlbVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwib25jbGlja1wiOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHJsLmFkZCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgY3RybC5idXR0b24pXG4gICAgICAgICAgICBdKVxuICAgICAgICBdKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXb3Jkc0VkaXQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9lczYvc2NlbmUvV29yZHNFZGl0LmpzXG4gKiovIiwiaW1wb3J0IG0gZnJvbSBcIm1pdGhyaWxcIjtcbmltcG9ydCB2bSBmcm9tIFwiLi4vc3RvcmVcIjtcblxuY2xhc3MgV29yZHNFZGl0IHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB2bS5nZXRVcmxQYXJhbShcImlkXCIpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaSA9IHJlcztcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBhcmFtOlwiICsgcmVzKCkgKyBcIiBkYXRhOlwiICsgdm0ud29yZExpc3RbcmVzKCldKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdmJhciA9IHZtLnNjZW5lLndvcmRzRWRpdC5uYXZiYXI7XG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b24gPSB2bS5zY2VuZS53b3Jkc0VkaXQuY29udGVudC5idXR0b247XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5pbmRleCA9IG0ucHJvcCh2bS53b3JkTGlzdFtyZXMoKV0ucm93aWQoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbiA9IG0ucHJvcCh2bS53b3JkTGlzdFtyZXMoKV0uZW4oKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5qYSA9IG0ucHJvcCh2bS53b3JkTGlzdFtyZXMoKV0uamEoKSk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5mbGFnID0gbS5wcm9wKHZtLndvcmRMaXN0W3JlcygpXS5mbGFnKCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIGFkZCgpe1xuICAgICAgICBpZih0aGlzLmVuKCkgPT09IFwiXCIgfHwgdGhpcy5qYSgpID09PSBcIlwiKSByZXR1cm47XG4gICAgICAgIHZtLndvcmRMaXN0W3RoaXMuaSgpXS5lbih0aGlzLmVuKCkpO1xuICAgICAgICB2bS53b3JkTGlzdFt0aGlzLmkoKV0uamEodGhpcy5qYSgpKTtcbiAgICAgICAgdGhpcy5lbihcIlwiKTtcbiAgICAgICAgdGhpcy5qYShcIlwiKTtcbiAgICAgICAgbS5yb3V0ZShcIi93b3Jkc1wiKTtcbiAgICB9XG4gICAgb251bmxvYWQoKXtcbiAgICAgICAgdm0uc3RyYWdlLndvcmRzLnNldCh2bS53b3JkTGlzdCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXb3Jkc0VkaXQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9lczYvY3RybC9Xb3Jkc0VkaXQuanNcbiAqKi8iLCJpbXBvcnQgbSBmcm9tIFwibWl0aHJpbFwiO1xuaW1wb3J0IG5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXJcIjtcbmltcG9ydCBsaW1pdFNlbGVjdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGltaXRTZWxlY3RDYXJkXCI7XG5pbXBvcnQgQ3RybCBmcm9tIFwiLi4vY3RybC9jaGVja1wiO1xuXG5sZXQgQ2hlY2sgPSB7XG4gICAgY29udHJvbGxlcjogKCkgPT4gbmV3IEN0cmwoKSxcbiAgICB2aWV3OiBjdHJsID0+IHtcbiAgICAgICAgcmV0dXJuIG0oXCIuZmxleF9jb250ZW50IGRpc3BsYXlGbGV4IGZsZXhfY29sdW1uXCIsIFtcbiAgICAgICAgICAgIG5hdmJhcihjdHJsLm5hdmJhciksXG4gICAgICAgICAgICBtKFwiZm9ybS5kaXNwbGF5RmxleCBmbGV4X2NvbHVtblwiLCB7XG4gICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZmxleFwiOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwYWRkaW5nXCI6IFwiMXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICBcInBhZGRpbmctdG9wXCI6IFwiNi41cmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IFwiMTAwJVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgIGxpbWl0U2VsZWN0Q2FyZChjdHJsLmNvbnRlbnQuc2VsZWN0LCBjdHJsLmNoZWNrTGltaXQpLFxuICAgICAgICAgICAgICAgIG0oXCJidXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZFwiOiBcIiNmZmZmZmZcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcIm9uY2xpY2tcIjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3RybC5jaGVja0xpbWl0KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN0cmwuZ29DaGVja1J1bigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgY3RybC5jb250ZW50LmJ1dHRvbilcbiAgICAgICAgICAgIF0pXG4gICAgICAgIF0pO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZXM2L3NjZW5lL0NoZWNrLmpzXG4gKiovIiwiaW1wb3J0IG0gZnJvbSBcIm1pdGhyaWxcIjtcbmltcG9ydCBzZWxlY3QgZnJvbSBcIi4vc2VsZWN0XCI7XG5cbmNvbnN0IGxpbWl0U2VsZWN0Q2FyZCA9IChhcmdzLCB2YWx1ZSkgPT4ge1xuICAgIHJldHVybiBtKFwiLmNhcmRcIiwge1xuICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgIFwibWFyZ2luLWJvdHRvbVwiOiBcIjFyZW1cIlxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBtKFwibGFiZWxcIiwge1xuICAgICAgICAgICAgXCJmb3JcIjogYXJncy5uYW1lXG4gICAgICAgIH0sIGFyZ3MubGFiZWwpLFxuICAgICAgICBzZWxlY3QoYXJncywgdmFsdWUpXG4gICAgXSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsaW1pdFNlbGVjdENhcmQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9lczYvY29tcG9uZW50cy9saW1pdFNlbGVjdENhcmQuanNcbiAqKi8iLCJpbXBvcnQgbSBmcm9tIFwibWl0aHJpbFwiO1xuLyoqXG5AcGFyYW17U3RyaW5nfSBpdGVtLnZhbHVlIOWGhemDqOOBruWApFxuQHBhcmFte1N0cmluZ30gaXRlbS5sYWJlbCDpgbjmip7ogqLjgajjgZfjgabliKnnlKjogIXjgavopovjgZvjgovlgKRcbiovXG5jb25zdCBvcHRpb24gPSBpdGVtID0+IHtcbiAgICByZXR1cm4gbShcIm9wdGlvblwiICx7XG4gICAgICAgIFwidmFsdWVcIjogaXRlbS52YWx1ZVxuICAgIH0sIGl0ZW0udGl0bGUpO1xufTtcblxuY29uc3Qgc2VsZWN0ID0gKGFyZ3MsIHZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIG0oXCJzZWxlY3QudS1mdWxsLXdpZHRoXCIsIHtcbiAgICAgICAgXCJuYW1lXCI6IGFyZ3MubmFtZSxcbiAgICAgICAgXCJzaXplXCI6IGFyZ3Muc2l6ZSB8fCAxLFxuICAgICAgICBcImlkXCI6IGFyZ3MubmFtZSxcbiAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZSgpXG4gICAgfSwgW1xuICAgICAgICBhcmdzLm9wdGlvbi5tYXAoaXRlbSA9PiBvcHRpb24oaXRlbSkpXG4gICAgXSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZWxlY3Q7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9lczYvY29tcG9uZW50cy9zZWxlY3QuanNcbiAqKi8iLCJpbXBvcnQgbSBmcm9tIFwibWl0aHJpbFwiO1xuaW1wb3J0IHZtIGZyb20gXCIuLi9zdG9yZVwiO1xuXG5jbGFzcyBDaGVjayB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgLy8gdm0ucmVsb2FkKCk7XG4gICAgICAgIHRoaXMubmF2YmFyID0gdm0uc2NlbmUuY2hlY2submF2YmFyO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSB2bS5zY2VuZS5jaGVjay5jb250ZW50O1xuICAgICAgICB0aGlzLmNoZWNrTGltaXQgPSBtLnByb3AoNSk7XG4gICAgfVxuICAgIGdvQ2hlY2tSdW4oKXtcbiAgICAgICAgY29uc3QgdXJsID0gXCIvY2hlY2svXCIgKyB0aGlzLmNoZWNrTGltaXQoKTtcbiAgICAgICAgcmV0dXJuIG0ucm91dGUodXJsKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZXM2L2N0cmwvY2hlY2suanNcbiAqKi8iLCJpbXBvcnQgbSBmcm9tIFwibWl0aHJpbFwiO1xuaW1wb3J0IG5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXJcIjtcbmltcG9ydCBjaGVja0NhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2hlY2tDYXJkXCI7XG5pbXBvcnQgQ3RybCBmcm9tIFwiLi4vY3RybC9jaGVja1J1blwiO1xuaW1wb3J0IGNoZWNrQnV0dG9ucyBmcm9tIFwiLi4vY29tcG9uZW50cy9jaGVja0J1dHRvbnNcIjtcblxubGV0IENoZWNrUnVuID0ge1xuICAgIGNvbnRyb2xsZXI6ICgpID0+IG5ldyBDdHJsKCksXG4gICAgdmlldzogY3RybCA9PiB7XG4gICAgICAgIHJldHVybiBtKFwiLmZsZXhfY29udGVudCBkaXNwbGF5RmxleCBmbGV4X2NvbHVtblwiLCBbXG4gICAgICAgICAgICBuYXZiYXIoY3RybC5uYXZiYXIpLFxuICAgICAgICAgICAgbShcIi5kaXNwbGF5RmxleCBmbGV4X2NvbHVtblwiLCB7XG4gICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZmxleFwiOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwYWRkaW5nXCI6IFwiMXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICBcInBhZGRpbmctdG9wXCI6IFwiNi41cmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IFwiMTAwJVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgIGNoZWNrQ2FyZCh7XG4gICAgICAgICAgICAgICAgICAgIGVuOiBjdHJsLndvcmQoKS5lbixcbiAgICAgICAgICAgICAgICAgICAgamE6IGN0cmwud29yZCgpLmphLFxuICAgICAgICAgICAgICAgICAgICBpc0FuaW1hdGlvbjogY3RybC5hbmltYXRpb25GbGFnLFxuICAgICAgICAgICAgICAgICAgICBmbGV4OiBcIjRcIixcbiAgICAgICAgICAgICAgICAgICAgdF9hY3Q6ICgpID0+IGN0cmwudF9hY3QoKSxcbiAgICAgICAgICAgICAgICAgICAgbF9hY3Q6ICgpID0+IGN0cmwubF9hY3QoKSxcbiAgICAgICAgICAgICAgICAgICAgcl9hY3Q6ICgpID0+IGN0cmwucl9hY3QoKSxcbiAgICAgICAgICAgICAgICAgICAgdmlldzogY3RybC52aWV3XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgbShcImhyXCIpLFxuICAgICAgICAgICAgICAgIGNoZWNrQnV0dG9ucyh7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICByOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICgpID0+IGN0cmwucl9hY3QoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIuOCj+OBi+OCi1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogKCkgPT4gY3RybC5sX2FjdCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi44KP44GL44KJ44Gq44GEXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdKVxuICAgICAgICBdKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGVja1J1bjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2VzNi9zY2VuZS9DaGVja1J1bi5qc1xuICoqLyIsImltcG9ydCBtIGZyb20gXCJtaXRocmlsXCI7XG5pbXBvcnQgSGFtbWVyIGZyb20gXCJoYW1tZXJqc1wiO1xuXG5jb25zdCBjaGVja0NhcmQgPSBhcmdzID0+IHtcbiAgICByZXR1cm4gbShcIi5jYXJkIGRpc3BsYXlGbGV4XCIsIHtcbiAgICAgICAgLy8gXCJjbGFzc1wiOiBhcmdzLmlzQW5pbWF0aW9uKCkgPyBcImFuaW1hdGVkIGZhZGVPdXRSaWdodFwiIDogXCJcIixcbiAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICBcImZsZXhcIjogYXJncy5mbGV4LFxuICAgICAgICAgICAgXCJtYXJnaW4tYm90dG9tXCI6IFwiMXJlbVwiLFxuICAgICAgICAgICAgXCJhbGlnbi1pdGVtc1wiOiBcImNlbnRlclwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiY29uZmlnXCI6IChlbGVtZW50LCBpc0luaXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhhbW1lciA9IG5ldyBIYW1tZXIoZWxlbWVudCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmKGlzSW5pdClyZXR1cm47XG4gICAgICAgICAgICAgICAgaGFtbWVyLm9uKFwic3dpcGVsZWZ0XCIsICgpID0+IGFyZ3MubF9hY3QoZWxlbWVudCkpO1xuICAgICAgICAgICAgICAgIGhhbW1lci5vbihcInN3aXBlcmlnaHRcIiwgKCkgPT4gYXJncy5yX2FjdChlbGVtZW50KSk7XG4gICAgICAgICAgICAgICAgaGFtbWVyLm9uKFwidGFwXCIsICgpID0+IGFyZ3MudF9hY3QoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaGFtbWVySnMgc3dhaXAgJiB0YXAgZXZlbnRzIHVuZGVmaW5lZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgbShcIi5mbGV4X2NvbnRlbnRcIiwgW1xuICAgICAgICAgICAgbShcImgzXCIsIHtcbiAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogXCIxZW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBhcmdzLmVuKCkpLFxuICAgICAgICAgICAgbShcImhyXCIpLFxuICAgICAgICAgICAgbShcImgzXCIsIHtcbiAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogXCIxZW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBhcmdzLnZpZXcoKSA/IGFyZ3MuamEoKSA6IFwiXCIpXG4gICAgICAgIF0pXG4gICAgXSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjaGVja0NhcmQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9lczYvY29tcG9uZW50cy9jaGVja0NhcmQuanNcbiAqKi8iLCIvKiEgSGFtbWVyLkpTIC0gdjIuMC43IC0gMjAxNi0wNC0yMlxuICogaHR0cDovL2hhbW1lcmpzLmdpdGh1Yi5pby9cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYgSm9yaWsgVGFuZ2VsZGVyO1xuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlICovXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgZXhwb3J0TmFtZSwgdW5kZWZpbmVkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxudmFyIFZFTkRPUl9QUkVGSVhFUyA9IFsnJywgJ3dlYmtpdCcsICdNb3onLCAnTVMnLCAnbXMnLCAnbyddO1xudmFyIFRFU1RfRUxFTUVOVCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG52YXIgVFlQRV9GVU5DVElPTiA9ICdmdW5jdGlvbic7XG5cbnZhciByb3VuZCA9IE1hdGgucm91bmQ7XG52YXIgYWJzID0gTWF0aC5hYnM7XG52YXIgbm93ID0gRGF0ZS5ub3c7XG5cbi8qKlxuICogc2V0IGEgdGltZW91dCB3aXRoIGEgZ2l2ZW4gc2NvcGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge051bWJlcn0gdGltZW91dFxuICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHRcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIHNldFRpbWVvdXRDb250ZXh0KGZuLCB0aW1lb3V0LCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoYmluZEZuKGZuLCBjb250ZXh0KSwgdGltZW91dCk7XG59XG5cbi8qKlxuICogaWYgdGhlIGFyZ3VtZW50IGlzIGFuIGFycmF5LCB3ZSB3YW50IHRvIGV4ZWN1dGUgdGhlIGZuIG9uIGVhY2ggZW50cnlcbiAqIGlmIGl0IGFpbnQgYW4gYXJyYXkgd2UgZG9uJ3Qgd2FudCB0byBkbyBhIHRoaW5nLlxuICogdGhpcyBpcyB1c2VkIGJ5IGFsbCB0aGUgbWV0aG9kcyB0aGF0IGFjY2VwdCBhIHNpbmdsZSBhbmQgYXJyYXkgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp8QXJyYXl9IGFyZ1xuICogQHBhcmFtIHtTdHJpbmd9IGZuXG4gKiBAcGFyYW0ge09iamVjdH0gW2NvbnRleHRdXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaW52b2tlQXJyYXlBcmcoYXJnLCBmbiwgY29udGV4dCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcbiAgICAgICAgZWFjaChhcmcsIGNvbnRleHRbZm5dLCBjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiB3YWxrIG9iamVjdHMgYW5kIGFycmF5c1xuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0b3JcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XG4gKi9cbmZ1bmN0aW9uIGVhY2gob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIHZhciBpO1xuXG4gICAgaWYgKCFvYmopIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChvYmouZm9yRWFjaCkge1xuICAgICAgICBvYmouZm9yRWFjaChpdGVyYXRvciwgY29udGV4dCk7XG4gICAgfSBlbHNlIGlmIChvYmoubGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaSA9IDA7XG4gICAgICAgIHdoaWxlIChpIDwgb2JqLmxlbmd0aCkge1xuICAgICAgICAgICAgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmpbaV0sIGksIG9iaik7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGkgaW4gb2JqKSB7XG4gICAgICAgICAgICBvYmouaGFzT3duUHJvcGVydHkoaSkgJiYgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmpbaV0sIGksIG9iaik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogd3JhcCBhIG1ldGhvZCB3aXRoIGEgZGVwcmVjYXRpb24gd2FybmluZyBhbmQgc3RhY2sgdHJhY2VcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgbmV3IGZ1bmN0aW9uIHdyYXBwaW5nIHRoZSBzdXBwbGllZCBtZXRob2QuXG4gKi9cbmZ1bmN0aW9uIGRlcHJlY2F0ZShtZXRob2QsIG5hbWUsIG1lc3NhZ2UpIHtcbiAgICB2YXIgZGVwcmVjYXRpb25NZXNzYWdlID0gJ0RFUFJFQ0FURUQgTUVUSE9EOiAnICsgbmFtZSArICdcXG4nICsgbWVzc2FnZSArICcgQVQgXFxuJztcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBlID0gbmV3IEVycm9yKCdnZXQtc3RhY2stdHJhY2UnKTtcbiAgICAgICAgdmFyIHN0YWNrID0gZSAmJiBlLnN0YWNrID8gZS5zdGFjay5yZXBsYWNlKC9eW15cXChdKz9bXFxuJF0vZ20sICcnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL15cXHMrYXRcXHMrL2dtLCAnJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eT2JqZWN0Ljxhbm9ueW1vdXM+XFxzKlxcKC9nbSwgJ3thbm9ueW1vdXN9KClAJykgOiAnVW5rbm93biBTdGFjayBUcmFjZSc7XG5cbiAgICAgICAgdmFyIGxvZyA9IHdpbmRvdy5jb25zb2xlICYmICh3aW5kb3cuY29uc29sZS53YXJuIHx8IHdpbmRvdy5jb25zb2xlLmxvZyk7XG4gICAgICAgIGlmIChsb2cpIHtcbiAgICAgICAgICAgIGxvZy5jYWxsKHdpbmRvdy5jb25zb2xlLCBkZXByZWNhdGlvbk1lc3NhZ2UsIHN0YWNrKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWV0aG9kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbn1cblxuLyoqXG4gKiBleHRlbmQgb2JqZWN0LlxuICogbWVhbnMgdGhhdCBwcm9wZXJ0aWVzIGluIGRlc3Qgd2lsbCBiZSBvdmVyd3JpdHRlbiBieSB0aGUgb25lcyBpbiBzcmMuXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0gey4uLk9iamVjdH0gb2JqZWN0c190b19hc3NpZ25cbiAqIEByZXR1cm5zIHtPYmplY3R9IHRhcmdldFxuICovXG52YXIgYXNzaWduO1xuaWYgKHR5cGVvZiBPYmplY3QuYXNzaWduICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgYXNzaWduID0gZnVuY3Rpb24gYXNzaWduKHRhcmdldCkge1xuICAgICAgICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQgfHwgdGFyZ2V0ID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3QnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvdXRwdXQgPSBPYmplY3QodGFyZ2V0KTtcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAxOyBpbmRleCA8IGFyZ3VtZW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkICYmIHNvdXJjZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG5leHRLZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkobmV4dEtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFtuZXh0S2V5XSA9IHNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH07XG59IGVsc2Uge1xuICAgIGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG59XG5cbi8qKlxuICogZXh0ZW5kIG9iamVjdC5cbiAqIG1lYW5zIHRoYXQgcHJvcGVydGllcyBpbiBkZXN0IHdpbGwgYmUgb3ZlcndyaXR0ZW4gYnkgdGhlIG9uZXMgaW4gc3JjLlxuICogQHBhcmFtIHtPYmplY3R9IGRlc3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBzcmNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW21lcmdlPWZhbHNlXVxuICogQHJldHVybnMge09iamVjdH0gZGVzdFxuICovXG52YXIgZXh0ZW5kID0gZGVwcmVjYXRlKGZ1bmN0aW9uIGV4dGVuZChkZXN0LCBzcmMsIG1lcmdlKSB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhzcmMpO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IGtleXMubGVuZ3RoKSB7XG4gICAgICAgIGlmICghbWVyZ2UgfHwgKG1lcmdlICYmIGRlc3Rba2V5c1tpXV0gPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgIGRlc3Rba2V5c1tpXV0gPSBzcmNba2V5c1tpXV07XG4gICAgICAgIH1cbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gZGVzdDtcbn0sICdleHRlbmQnLCAnVXNlIGBhc3NpZ25gLicpO1xuXG4vKipcbiAqIG1lcmdlIHRoZSB2YWx1ZXMgZnJvbSBzcmMgaW4gdGhlIGRlc3QuXG4gKiBtZWFucyB0aGF0IHByb3BlcnRpZXMgdGhhdCBleGlzdCBpbiBkZXN0IHdpbGwgbm90IGJlIG92ZXJ3cml0dGVuIGJ5IHNyY1xuICogQHBhcmFtIHtPYmplY3R9IGRlc3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBzcmNcbiAqIEByZXR1cm5zIHtPYmplY3R9IGRlc3RcbiAqL1xudmFyIG1lcmdlID0gZGVwcmVjYXRlKGZ1bmN0aW9uIG1lcmdlKGRlc3QsIHNyYykge1xuICAgIHJldHVybiBleHRlbmQoZGVzdCwgc3JjLCB0cnVlKTtcbn0sICdtZXJnZScsICdVc2UgYGFzc2lnbmAuJyk7XG5cbi8qKlxuICogc2ltcGxlIGNsYXNzIGluaGVyaXRhbmNlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjaGlsZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gYmFzZVxuICogQHBhcmFtIHtPYmplY3R9IFtwcm9wZXJ0aWVzXVxuICovXG5mdW5jdGlvbiBpbmhlcml0KGNoaWxkLCBiYXNlLCBwcm9wZXJ0aWVzKSB7XG4gICAgdmFyIGJhc2VQID0gYmFzZS5wcm90b3R5cGUsXG4gICAgICAgIGNoaWxkUDtcblxuICAgIGNoaWxkUCA9IGNoaWxkLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoYmFzZVApO1xuICAgIGNoaWxkUC5jb25zdHJ1Y3RvciA9IGNoaWxkO1xuICAgIGNoaWxkUC5fc3VwZXIgPSBiYXNlUDtcblxuICAgIGlmIChwcm9wZXJ0aWVzKSB7XG4gICAgICAgIGFzc2lnbihjaGlsZFAsIHByb3BlcnRpZXMpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBzaW1wbGUgZnVuY3Rpb24gYmluZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGJpbmRGbihmbiwgY29udGV4dCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBib3VuZEZuKCkge1xuICAgICAgICByZXR1cm4gZm4uYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcbiAgICB9O1xufVxuXG4vKipcbiAqIGxldCBhIGJvb2xlYW4gdmFsdWUgYWxzbyBiZSBhIGZ1bmN0aW9uIHRoYXQgbXVzdCByZXR1cm4gYSBib29sZWFuXG4gKiB0aGlzIGZpcnN0IGl0ZW0gaW4gYXJncyB3aWxsIGJlIHVzZWQgYXMgdGhlIGNvbnRleHRcbiAqIEBwYXJhbSB7Qm9vbGVhbnxGdW5jdGlvbn0gdmFsXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJnc11cbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBib29sT3JGbih2YWwsIGFyZ3MpIHtcbiAgICBpZiAodHlwZW9mIHZhbCA9PSBUWVBFX0ZVTkNUSU9OKSB7XG4gICAgICAgIHJldHVybiB2YWwuYXBwbHkoYXJncyA/IGFyZ3NbMF0gfHwgdW5kZWZpbmVkIDogdW5kZWZpbmVkLCBhcmdzKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbDtcbn1cblxuLyoqXG4gKiB1c2UgdGhlIHZhbDIgd2hlbiB2YWwxIGlzIHVuZGVmaW5lZFxuICogQHBhcmFtIHsqfSB2YWwxXG4gKiBAcGFyYW0geyp9IHZhbDJcbiAqIEByZXR1cm5zIHsqfVxuICovXG5mdW5jdGlvbiBpZlVuZGVmaW5lZCh2YWwxLCB2YWwyKSB7XG4gICAgcmV0dXJuICh2YWwxID09PSB1bmRlZmluZWQpID8gdmFsMiA6IHZhbDE7XG59XG5cbi8qKlxuICogYWRkRXZlbnRMaXN0ZW5lciB3aXRoIG11bHRpcGxlIGV2ZW50cyBhdCBvbmNlXG4gKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fSB0YXJnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlclxuICovXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycyh0YXJnZXQsIHR5cGVzLCBoYW5kbGVyKSB7XG4gICAgZWFjaChzcGxpdFN0cih0eXBlcyksIGZ1bmN0aW9uKHR5cGUpIHtcbiAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgZmFsc2UpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIHJlbW92ZUV2ZW50TGlzdGVuZXIgd2l0aCBtdWx0aXBsZSBldmVudHMgYXQgb25jZVxuICogQHBhcmFtIHtFdmVudFRhcmdldH0gdGFyZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZXNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXJcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcnModGFyZ2V0LCB0eXBlcywgaGFuZGxlcikge1xuICAgIGVhY2goc3BsaXRTdHIodHlwZXMpLCBmdW5jdGlvbih0eXBlKSB7XG4gICAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBmaW5kIGlmIGEgbm9kZSBpcyBpbiB0aGUgZ2l2ZW4gcGFyZW50XG4gKiBAbWV0aG9kIGhhc1BhcmVudFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50XG4gKiBAcmV0dXJuIHtCb29sZWFufSBmb3VuZFxuICovXG5mdW5jdGlvbiBoYXNQYXJlbnQobm9kZSwgcGFyZW50KSB7XG4gICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUgPT0gcGFyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogc21hbGwgaW5kZXhPZiB3cmFwcGVyXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge1N0cmluZ30gZmluZFxuICogQHJldHVybnMge0Jvb2xlYW59IGZvdW5kXG4gKi9cbmZ1bmN0aW9uIGluU3RyKHN0ciwgZmluZCkge1xuICAgIHJldHVybiBzdHIuaW5kZXhPZihmaW5kKSA+IC0xO1xufVxuXG4vKipcbiAqIHNwbGl0IHN0cmluZyBvbiB3aGl0ZXNwYWNlXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7QXJyYXl9IHdvcmRzXG4gKi9cbmZ1bmN0aW9uIHNwbGl0U3RyKHN0cikge1xuICAgIHJldHVybiBzdHIudHJpbSgpLnNwbGl0KC9cXHMrL2cpO1xufVxuXG4vKipcbiAqIGZpbmQgaWYgYSBhcnJheSBjb250YWlucyB0aGUgb2JqZWN0IHVzaW5nIGluZGV4T2Ygb3IgYSBzaW1wbGUgcG9seUZpbGxcbiAqIEBwYXJhbSB7QXJyYXl9IHNyY1xuICogQHBhcmFtIHtTdHJpbmd9IGZpbmRcbiAqIEBwYXJhbSB7U3RyaW5nfSBbZmluZEJ5S2V5XVxuICogQHJldHVybiB7Qm9vbGVhbnxOdW1iZXJ9IGZhbHNlIHdoZW4gbm90IGZvdW5kLCBvciB0aGUgaW5kZXhcbiAqL1xuZnVuY3Rpb24gaW5BcnJheShzcmMsIGZpbmQsIGZpbmRCeUtleSkge1xuICAgIGlmIChzcmMuaW5kZXhPZiAmJiAhZmluZEJ5S2V5KSB7XG4gICAgICAgIHJldHVybiBzcmMuaW5kZXhPZihmaW5kKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHdoaWxlIChpIDwgc3JjLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKChmaW5kQnlLZXkgJiYgc3JjW2ldW2ZpbmRCeUtleV0gPT0gZmluZCkgfHwgKCFmaW5kQnlLZXkgJiYgc3JjW2ldID09PSBmaW5kKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG59XG5cbi8qKlxuICogY29udmVydCBhcnJheS1saWtlIG9iamVjdHMgdG8gcmVhbCBhcnJheXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gdG9BcnJheShvYmopIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwob2JqLCAwKTtcbn1cblxuLyoqXG4gKiB1bmlxdWUgYXJyYXkgd2l0aCBvYmplY3RzIGJhc2VkIG9uIGEga2V5IChsaWtlICdpZCcpIG9yIGp1c3QgYnkgdGhlIGFycmF5J3MgdmFsdWVcbiAqIEBwYXJhbSB7QXJyYXl9IHNyYyBbe2lkOjF9LHtpZDoyfSx7aWQ6MX1dXG4gKiBAcGFyYW0ge1N0cmluZ30gW2tleV1cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NvcnQ9RmFsc2VdXG4gKiBAcmV0dXJucyB7QXJyYXl9IFt7aWQ6MX0se2lkOjJ9XVxuICovXG5mdW5jdGlvbiB1bmlxdWVBcnJheShzcmMsIGtleSwgc29ydCkge1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgIHZhciBpID0gMDtcblxuICAgIHdoaWxlIChpIDwgc3JjLmxlbmd0aCkge1xuICAgICAgICB2YXIgdmFsID0ga2V5ID8gc3JjW2ldW2tleV0gOiBzcmNbaV07XG4gICAgICAgIGlmIChpbkFycmF5KHZhbHVlcywgdmFsKSA8IDApIHtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChzcmNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlc1tpXSA9IHZhbDtcbiAgICAgICAgaSsrO1xuICAgIH1cblxuICAgIGlmIChzb3J0KSB7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXN1bHRzID0gcmVzdWx0cy5zb3J0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHRzID0gcmVzdWx0cy5zb3J0KGZ1bmN0aW9uIHNvcnRVbmlxdWVBcnJheShhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFba2V5XSA+IGJba2V5XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbi8qKlxuICogZ2V0IHRoZSBwcmVmaXhlZCBwcm9wZXJ0eVxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XG4gKiBAcmV0dXJucyB7U3RyaW5nfFVuZGVmaW5lZH0gcHJlZml4ZWRcbiAqL1xuZnVuY3Rpb24gcHJlZml4ZWQob2JqLCBwcm9wZXJ0eSkge1xuICAgIHZhciBwcmVmaXgsIHByb3A7XG4gICAgdmFyIGNhbWVsUHJvcCA9IHByb3BlcnR5WzBdLnRvVXBwZXJDYXNlKCkgKyBwcm9wZXJ0eS5zbGljZSgxKTtcblxuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IFZFTkRPUl9QUkVGSVhFUy5sZW5ndGgpIHtcbiAgICAgICAgcHJlZml4ID0gVkVORE9SX1BSRUZJWEVTW2ldO1xuICAgICAgICBwcm9wID0gKHByZWZpeCkgPyBwcmVmaXggKyBjYW1lbFByb3AgOiBwcm9wZXJ0eTtcblxuICAgICAgICBpZiAocHJvcCBpbiBvYmopIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wO1xuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBnZXQgYSB1bmlxdWUgaWRcbiAqIEByZXR1cm5zIHtudW1iZXJ9IHVuaXF1ZUlkXG4gKi9cbnZhciBfdW5pcXVlSWQgPSAxO1xuZnVuY3Rpb24gdW5pcXVlSWQoKSB7XG4gICAgcmV0dXJuIF91bmlxdWVJZCsrO1xufVxuXG4vKipcbiAqIGdldCB0aGUgd2luZG93IG9iamVjdCBvZiBhbiBlbGVtZW50XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7RG9jdW1lbnRWaWV3fFdpbmRvd31cbiAqL1xuZnVuY3Rpb24gZ2V0V2luZG93Rm9yRWxlbWVudChlbGVtZW50KSB7XG4gICAgdmFyIGRvYyA9IGVsZW1lbnQub3duZXJEb2N1bWVudCB8fCBlbGVtZW50O1xuICAgIHJldHVybiAoZG9jLmRlZmF1bHRWaWV3IHx8IGRvYy5wYXJlbnRXaW5kb3cgfHwgd2luZG93KTtcbn1cblxudmFyIE1PQklMRV9SRUdFWCA9IC9tb2JpbGV8dGFibGV0fGlwKGFkfGhvbmV8b2QpfGFuZHJvaWQvaTtcblxudmFyIFNVUFBPUlRfVE9VQ0ggPSAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KTtcbnZhciBTVVBQT1JUX1BPSU5URVJfRVZFTlRTID0gcHJlZml4ZWQod2luZG93LCAnUG9pbnRlckV2ZW50JykgIT09IHVuZGVmaW5lZDtcbnZhciBTVVBQT1JUX09OTFlfVE9VQ0ggPSBTVVBQT1JUX1RPVUNIICYmIE1PQklMRV9SRUdFWC50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG52YXIgSU5QVVRfVFlQRV9UT1VDSCA9ICd0b3VjaCc7XG52YXIgSU5QVVRfVFlQRV9QRU4gPSAncGVuJztcbnZhciBJTlBVVF9UWVBFX01PVVNFID0gJ21vdXNlJztcbnZhciBJTlBVVF9UWVBFX0tJTkVDVCA9ICdraW5lY3QnO1xuXG52YXIgQ09NUFVURV9JTlRFUlZBTCA9IDI1O1xuXG52YXIgSU5QVVRfU1RBUlQgPSAxO1xudmFyIElOUFVUX01PVkUgPSAyO1xudmFyIElOUFVUX0VORCA9IDQ7XG52YXIgSU5QVVRfQ0FOQ0VMID0gODtcblxudmFyIERJUkVDVElPTl9OT05FID0gMTtcbnZhciBESVJFQ1RJT05fTEVGVCA9IDI7XG52YXIgRElSRUNUSU9OX1JJR0hUID0gNDtcbnZhciBESVJFQ1RJT05fVVAgPSA4O1xudmFyIERJUkVDVElPTl9ET1dOID0gMTY7XG5cbnZhciBESVJFQ1RJT05fSE9SSVpPTlRBTCA9IERJUkVDVElPTl9MRUZUIHwgRElSRUNUSU9OX1JJR0hUO1xudmFyIERJUkVDVElPTl9WRVJUSUNBTCA9IERJUkVDVElPTl9VUCB8IERJUkVDVElPTl9ET1dOO1xudmFyIERJUkVDVElPTl9BTEwgPSBESVJFQ1RJT05fSE9SSVpPTlRBTCB8IERJUkVDVElPTl9WRVJUSUNBTDtcblxudmFyIFBST1BTX1hZID0gWyd4JywgJ3knXTtcbnZhciBQUk9QU19DTElFTlRfWFkgPSBbJ2NsaWVudFgnLCAnY2xpZW50WSddO1xuXG4vKipcbiAqIGNyZWF0ZSBuZXcgaW5wdXQgdHlwZSBtYW5hZ2VyXG4gKiBAcGFyYW0ge01hbmFnZXJ9IG1hbmFnZXJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7SW5wdXR9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gSW5wdXQobWFuYWdlciwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlcjtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgdGhpcy5lbGVtZW50ID0gbWFuYWdlci5lbGVtZW50O1xuICAgIHRoaXMudGFyZ2V0ID0gbWFuYWdlci5vcHRpb25zLmlucHV0VGFyZ2V0O1xuXG4gICAgLy8gc21hbGxlciB3cmFwcGVyIGFyb3VuZCB0aGUgaGFuZGxlciwgZm9yIHRoZSBzY29wZSBhbmQgdGhlIGVuYWJsZWQgc3RhdGUgb2YgdGhlIG1hbmFnZXIsXG4gICAgLy8gc28gd2hlbiBkaXNhYmxlZCB0aGUgaW5wdXQgZXZlbnRzIGFyZSBjb21wbGV0ZWx5IGJ5cGFzc2VkLlxuICAgIHRoaXMuZG9tSGFuZGxlciA9IGZ1bmN0aW9uKGV2KSB7XG4gICAgICAgIGlmIChib29sT3JGbihtYW5hZ2VyLm9wdGlvbnMuZW5hYmxlLCBbbWFuYWdlcl0pKSB7XG4gICAgICAgICAgICBzZWxmLmhhbmRsZXIoZXYpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuaW5pdCgpO1xuXG59XG5cbklucHV0LnByb3RvdHlwZSA9IHtcbiAgICAvKipcbiAgICAgKiBzaG91bGQgaGFuZGxlIHRoZSBpbnB1dEV2ZW50IGRhdGEgYW5kIHRyaWdnZXIgdGhlIGNhbGxiYWNrXG4gICAgICogQHZpcnR1YWxcbiAgICAgKi9cbiAgICBoYW5kbGVyOiBmdW5jdGlvbigpIHsgfSxcblxuICAgIC8qKlxuICAgICAqIGJpbmQgdGhlIGV2ZW50c1xuICAgICAqL1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmV2RWwgJiYgYWRkRXZlbnRMaXN0ZW5lcnModGhpcy5lbGVtZW50LCB0aGlzLmV2RWwsIHRoaXMuZG9tSGFuZGxlcik7XG4gICAgICAgIHRoaXMuZXZUYXJnZXQgJiYgYWRkRXZlbnRMaXN0ZW5lcnModGhpcy50YXJnZXQsIHRoaXMuZXZUYXJnZXQsIHRoaXMuZG9tSGFuZGxlcik7XG4gICAgICAgIHRoaXMuZXZXaW4gJiYgYWRkRXZlbnRMaXN0ZW5lcnMoZ2V0V2luZG93Rm9yRWxlbWVudCh0aGlzLmVsZW1lbnQpLCB0aGlzLmV2V2luLCB0aGlzLmRvbUhhbmRsZXIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiB1bmJpbmQgdGhlIGV2ZW50c1xuICAgICAqL1xuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmV2RWwgJiYgcmVtb3ZlRXZlbnRMaXN0ZW5lcnModGhpcy5lbGVtZW50LCB0aGlzLmV2RWwsIHRoaXMuZG9tSGFuZGxlcik7XG4gICAgICAgIHRoaXMuZXZUYXJnZXQgJiYgcmVtb3ZlRXZlbnRMaXN0ZW5lcnModGhpcy50YXJnZXQsIHRoaXMuZXZUYXJnZXQsIHRoaXMuZG9tSGFuZGxlcik7XG4gICAgICAgIHRoaXMuZXZXaW4gJiYgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoZ2V0V2luZG93Rm9yRWxlbWVudCh0aGlzLmVsZW1lbnQpLCB0aGlzLmV2V2luLCB0aGlzLmRvbUhhbmRsZXIpO1xuICAgIH1cbn07XG5cbi8qKlxuICogY3JlYXRlIG5ldyBpbnB1dCB0eXBlIG1hbmFnZXJcbiAqIGNhbGxlZCBieSB0aGUgTWFuYWdlciBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtIYW1tZXJ9IG1hbmFnZXJcbiAqIEByZXR1cm5zIHtJbnB1dH1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5wdXRJbnN0YW5jZShtYW5hZ2VyKSB7XG4gICAgdmFyIFR5cGU7XG4gICAgdmFyIGlucHV0Q2xhc3MgPSBtYW5hZ2VyLm9wdGlvbnMuaW5wdXRDbGFzcztcblxuICAgIGlmIChpbnB1dENsYXNzKSB7XG4gICAgICAgIFR5cGUgPSBpbnB1dENsYXNzO1xuICAgIH0gZWxzZSBpZiAoU1VQUE9SVF9QT0lOVEVSX0VWRU5UUykge1xuICAgICAgICBUeXBlID0gUG9pbnRlckV2ZW50SW5wdXQ7XG4gICAgfSBlbHNlIGlmIChTVVBQT1JUX09OTFlfVE9VQ0gpIHtcbiAgICAgICAgVHlwZSA9IFRvdWNoSW5wdXQ7XG4gICAgfSBlbHNlIGlmICghU1VQUE9SVF9UT1VDSCkge1xuICAgICAgICBUeXBlID0gTW91c2VJbnB1dDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBUeXBlID0gVG91Y2hNb3VzZUlucHV0O1xuICAgIH1cbiAgICByZXR1cm4gbmV3IChUeXBlKShtYW5hZ2VyLCBpbnB1dEhhbmRsZXIpO1xufVxuXG4vKipcbiAqIGhhbmRsZSBpbnB1dCBldmVudHNcbiAqIEBwYXJhbSB7TWFuYWdlcn0gbWFuYWdlclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50VHlwZVxuICogQHBhcmFtIHtPYmplY3R9IGlucHV0XG4gKi9cbmZ1bmN0aW9uIGlucHV0SGFuZGxlcihtYW5hZ2VyLCBldmVudFR5cGUsIGlucHV0KSB7XG4gICAgdmFyIHBvaW50ZXJzTGVuID0gaW5wdXQucG9pbnRlcnMubGVuZ3RoO1xuICAgIHZhciBjaGFuZ2VkUG9pbnRlcnNMZW4gPSBpbnB1dC5jaGFuZ2VkUG9pbnRlcnMubGVuZ3RoO1xuICAgIHZhciBpc0ZpcnN0ID0gKGV2ZW50VHlwZSAmIElOUFVUX1NUQVJUICYmIChwb2ludGVyc0xlbiAtIGNoYW5nZWRQb2ludGVyc0xlbiA9PT0gMCkpO1xuICAgIHZhciBpc0ZpbmFsID0gKGV2ZW50VHlwZSAmIChJTlBVVF9FTkQgfCBJTlBVVF9DQU5DRUwpICYmIChwb2ludGVyc0xlbiAtIGNoYW5nZWRQb2ludGVyc0xlbiA9PT0gMCkpO1xuXG4gICAgaW5wdXQuaXNGaXJzdCA9ICEhaXNGaXJzdDtcbiAgICBpbnB1dC5pc0ZpbmFsID0gISFpc0ZpbmFsO1xuXG4gICAgaWYgKGlzRmlyc3QpIHtcbiAgICAgICAgbWFuYWdlci5zZXNzaW9uID0ge307XG4gICAgfVxuXG4gICAgLy8gc291cmNlIGV2ZW50IGlzIHRoZSBub3JtYWxpemVkIHZhbHVlIG9mIHRoZSBkb21FdmVudHNcbiAgICAvLyBsaWtlICd0b3VjaHN0YXJ0LCBtb3VzZXVwLCBwb2ludGVyZG93bidcbiAgICBpbnB1dC5ldmVudFR5cGUgPSBldmVudFR5cGU7XG5cbiAgICAvLyBjb21wdXRlIHNjYWxlLCByb3RhdGlvbiBldGNcbiAgICBjb21wdXRlSW5wdXREYXRhKG1hbmFnZXIsIGlucHV0KTtcblxuICAgIC8vIGVtaXQgc2VjcmV0IGV2ZW50XG4gICAgbWFuYWdlci5lbWl0KCdoYW1tZXIuaW5wdXQnLCBpbnB1dCk7XG5cbiAgICBtYW5hZ2VyLnJlY29nbml6ZShpbnB1dCk7XG4gICAgbWFuYWdlci5zZXNzaW9uLnByZXZJbnB1dCA9IGlucHV0O1xufVxuXG4vKipcbiAqIGV4dGVuZCB0aGUgZGF0YSB3aXRoIHNvbWUgdXNhYmxlIHByb3BlcnRpZXMgbGlrZSBzY2FsZSwgcm90YXRlLCB2ZWxvY2l0eSBldGNcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYW5hZ2VyXG4gKiBAcGFyYW0ge09iamVjdH0gaW5wdXRcbiAqL1xuZnVuY3Rpb24gY29tcHV0ZUlucHV0RGF0YShtYW5hZ2VyLCBpbnB1dCkge1xuICAgIHZhciBzZXNzaW9uID0gbWFuYWdlci5zZXNzaW9uO1xuICAgIHZhciBwb2ludGVycyA9IGlucHV0LnBvaW50ZXJzO1xuICAgIHZhciBwb2ludGVyc0xlbmd0aCA9IHBvaW50ZXJzLmxlbmd0aDtcblxuICAgIC8vIHN0b3JlIHRoZSBmaXJzdCBpbnB1dCB0byBjYWxjdWxhdGUgdGhlIGRpc3RhbmNlIGFuZCBkaXJlY3Rpb25cbiAgICBpZiAoIXNlc3Npb24uZmlyc3RJbnB1dCkge1xuICAgICAgICBzZXNzaW9uLmZpcnN0SW5wdXQgPSBzaW1wbGVDbG9uZUlucHV0RGF0YShpbnB1dCk7XG4gICAgfVxuXG4gICAgLy8gdG8gY29tcHV0ZSBzY2FsZSBhbmQgcm90YXRpb24gd2UgbmVlZCB0byBzdG9yZSB0aGUgbXVsdGlwbGUgdG91Y2hlc1xuICAgIGlmIChwb2ludGVyc0xlbmd0aCA+IDEgJiYgIXNlc3Npb24uZmlyc3RNdWx0aXBsZSkge1xuICAgICAgICBzZXNzaW9uLmZpcnN0TXVsdGlwbGUgPSBzaW1wbGVDbG9uZUlucHV0RGF0YShpbnB1dCk7XG4gICAgfSBlbHNlIGlmIChwb2ludGVyc0xlbmd0aCA9PT0gMSkge1xuICAgICAgICBzZXNzaW9uLmZpcnN0TXVsdGlwbGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgZmlyc3RJbnB1dCA9IHNlc3Npb24uZmlyc3RJbnB1dDtcbiAgICB2YXIgZmlyc3RNdWx0aXBsZSA9IHNlc3Npb24uZmlyc3RNdWx0aXBsZTtcbiAgICB2YXIgb2Zmc2V0Q2VudGVyID0gZmlyc3RNdWx0aXBsZSA/IGZpcnN0TXVsdGlwbGUuY2VudGVyIDogZmlyc3RJbnB1dC5jZW50ZXI7XG5cbiAgICB2YXIgY2VudGVyID0gaW5wdXQuY2VudGVyID0gZ2V0Q2VudGVyKHBvaW50ZXJzKTtcbiAgICBpbnB1dC50aW1lU3RhbXAgPSBub3coKTtcbiAgICBpbnB1dC5kZWx0YVRpbWUgPSBpbnB1dC50aW1lU3RhbXAgLSBmaXJzdElucHV0LnRpbWVTdGFtcDtcblxuICAgIGlucHV0LmFuZ2xlID0gZ2V0QW5nbGUob2Zmc2V0Q2VudGVyLCBjZW50ZXIpO1xuICAgIGlucHV0LmRpc3RhbmNlID0gZ2V0RGlzdGFuY2Uob2Zmc2V0Q2VudGVyLCBjZW50ZXIpO1xuXG4gICAgY29tcHV0ZURlbHRhWFkoc2Vzc2lvbiwgaW5wdXQpO1xuICAgIGlucHV0Lm9mZnNldERpcmVjdGlvbiA9IGdldERpcmVjdGlvbihpbnB1dC5kZWx0YVgsIGlucHV0LmRlbHRhWSk7XG5cbiAgICB2YXIgb3ZlcmFsbFZlbG9jaXR5ID0gZ2V0VmVsb2NpdHkoaW5wdXQuZGVsdGFUaW1lLCBpbnB1dC5kZWx0YVgsIGlucHV0LmRlbHRhWSk7XG4gICAgaW5wdXQub3ZlcmFsbFZlbG9jaXR5WCA9IG92ZXJhbGxWZWxvY2l0eS54O1xuICAgIGlucHV0Lm92ZXJhbGxWZWxvY2l0eVkgPSBvdmVyYWxsVmVsb2NpdHkueTtcbiAgICBpbnB1dC5vdmVyYWxsVmVsb2NpdHkgPSAoYWJzKG92ZXJhbGxWZWxvY2l0eS54KSA+IGFicyhvdmVyYWxsVmVsb2NpdHkueSkpID8gb3ZlcmFsbFZlbG9jaXR5LnggOiBvdmVyYWxsVmVsb2NpdHkueTtcblxuICAgIGlucHV0LnNjYWxlID0gZmlyc3RNdWx0aXBsZSA/IGdldFNjYWxlKGZpcnN0TXVsdGlwbGUucG9pbnRlcnMsIHBvaW50ZXJzKSA6IDE7XG4gICAgaW5wdXQucm90YXRpb24gPSBmaXJzdE11bHRpcGxlID8gZ2V0Um90YXRpb24oZmlyc3RNdWx0aXBsZS5wb2ludGVycywgcG9pbnRlcnMpIDogMDtcblxuICAgIGlucHV0Lm1heFBvaW50ZXJzID0gIXNlc3Npb24ucHJldklucHV0ID8gaW5wdXQucG9pbnRlcnMubGVuZ3RoIDogKChpbnB1dC5wb2ludGVycy5sZW5ndGggPlxuICAgICAgICBzZXNzaW9uLnByZXZJbnB1dC5tYXhQb2ludGVycykgPyBpbnB1dC5wb2ludGVycy5sZW5ndGggOiBzZXNzaW9uLnByZXZJbnB1dC5tYXhQb2ludGVycyk7XG5cbiAgICBjb21wdXRlSW50ZXJ2YWxJbnB1dERhdGEoc2Vzc2lvbiwgaW5wdXQpO1xuXG4gICAgLy8gZmluZCB0aGUgY29ycmVjdCB0YXJnZXRcbiAgICB2YXIgdGFyZ2V0ID0gbWFuYWdlci5lbGVtZW50O1xuICAgIGlmIChoYXNQYXJlbnQoaW5wdXQuc3JjRXZlbnQudGFyZ2V0LCB0YXJnZXQpKSB7XG4gICAgICAgIHRhcmdldCA9IGlucHV0LnNyY0V2ZW50LnRhcmdldDtcbiAgICB9XG4gICAgaW5wdXQudGFyZ2V0ID0gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBjb21wdXRlRGVsdGFYWShzZXNzaW9uLCBpbnB1dCkge1xuICAgIHZhciBjZW50ZXIgPSBpbnB1dC5jZW50ZXI7XG4gICAgdmFyIG9mZnNldCA9IHNlc3Npb24ub2Zmc2V0RGVsdGEgfHwge307XG4gICAgdmFyIHByZXZEZWx0YSA9IHNlc3Npb24ucHJldkRlbHRhIHx8IHt9O1xuICAgIHZhciBwcmV2SW5wdXQgPSBzZXNzaW9uLnByZXZJbnB1dCB8fCB7fTtcblxuICAgIGlmIChpbnB1dC5ldmVudFR5cGUgPT09IElOUFVUX1NUQVJUIHx8IHByZXZJbnB1dC5ldmVudFR5cGUgPT09IElOUFVUX0VORCkge1xuICAgICAgICBwcmV2RGVsdGEgPSBzZXNzaW9uLnByZXZEZWx0YSA9IHtcbiAgICAgICAgICAgIHg6IHByZXZJbnB1dC5kZWx0YVggfHwgMCxcbiAgICAgICAgICAgIHk6IHByZXZJbnB1dC5kZWx0YVkgfHwgMFxuICAgICAgICB9O1xuXG4gICAgICAgIG9mZnNldCA9IHNlc3Npb24ub2Zmc2V0RGVsdGEgPSB7XG4gICAgICAgICAgICB4OiBjZW50ZXIueCxcbiAgICAgICAgICAgIHk6IGNlbnRlci55XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgaW5wdXQuZGVsdGFYID0gcHJldkRlbHRhLnggKyAoY2VudGVyLnggLSBvZmZzZXQueCk7XG4gICAgaW5wdXQuZGVsdGFZID0gcHJldkRlbHRhLnkgKyAoY2VudGVyLnkgLSBvZmZzZXQueSk7XG59XG5cbi8qKlxuICogdmVsb2NpdHkgaXMgY2FsY3VsYXRlZCBldmVyeSB4IG1zXG4gKiBAcGFyYW0ge09iamVjdH0gc2Vzc2lvblxuICogQHBhcmFtIHtPYmplY3R9IGlucHV0XG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVJbnRlcnZhbElucHV0RGF0YShzZXNzaW9uLCBpbnB1dCkge1xuICAgIHZhciBsYXN0ID0gc2Vzc2lvbi5sYXN0SW50ZXJ2YWwgfHwgaW5wdXQsXG4gICAgICAgIGRlbHRhVGltZSA9IGlucHV0LnRpbWVTdGFtcCAtIGxhc3QudGltZVN0YW1wLFxuICAgICAgICB2ZWxvY2l0eSwgdmVsb2NpdHlYLCB2ZWxvY2l0eVksIGRpcmVjdGlvbjtcblxuICAgIGlmIChpbnB1dC5ldmVudFR5cGUgIT0gSU5QVVRfQ0FOQ0VMICYmIChkZWx0YVRpbWUgPiBDT01QVVRFX0lOVEVSVkFMIHx8IGxhc3QudmVsb2NpdHkgPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgdmFyIGRlbHRhWCA9IGlucHV0LmRlbHRhWCAtIGxhc3QuZGVsdGFYO1xuICAgICAgICB2YXIgZGVsdGFZID0gaW5wdXQuZGVsdGFZIC0gbGFzdC5kZWx0YVk7XG5cbiAgICAgICAgdmFyIHYgPSBnZXRWZWxvY2l0eShkZWx0YVRpbWUsIGRlbHRhWCwgZGVsdGFZKTtcbiAgICAgICAgdmVsb2NpdHlYID0gdi54O1xuICAgICAgICB2ZWxvY2l0eVkgPSB2Lnk7XG4gICAgICAgIHZlbG9jaXR5ID0gKGFicyh2LngpID4gYWJzKHYueSkpID8gdi54IDogdi55O1xuICAgICAgICBkaXJlY3Rpb24gPSBnZXREaXJlY3Rpb24oZGVsdGFYLCBkZWx0YVkpO1xuXG4gICAgICAgIHNlc3Npb24ubGFzdEludGVydmFsID0gaW5wdXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdXNlIGxhdGVzdCB2ZWxvY2l0eSBpbmZvIGlmIGl0IGRvZXNuJ3Qgb3ZlcnRha2UgYSBtaW5pbXVtIHBlcmlvZFxuICAgICAgICB2ZWxvY2l0eSA9IGxhc3QudmVsb2NpdHk7XG4gICAgICAgIHZlbG9jaXR5WCA9IGxhc3QudmVsb2NpdHlYO1xuICAgICAgICB2ZWxvY2l0eVkgPSBsYXN0LnZlbG9jaXR5WTtcbiAgICAgICAgZGlyZWN0aW9uID0gbGFzdC5kaXJlY3Rpb247XG4gICAgfVxuXG4gICAgaW5wdXQudmVsb2NpdHkgPSB2ZWxvY2l0eTtcbiAgICBpbnB1dC52ZWxvY2l0eVggPSB2ZWxvY2l0eVg7XG4gICAgaW5wdXQudmVsb2NpdHlZID0gdmVsb2NpdHlZO1xuICAgIGlucHV0LmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbn1cblxuLyoqXG4gKiBjcmVhdGUgYSBzaW1wbGUgY2xvbmUgZnJvbSB0aGUgaW5wdXQgdXNlZCBmb3Igc3RvcmFnZSBvZiBmaXJzdElucHV0IGFuZCBmaXJzdE11bHRpcGxlXG4gKiBAcGFyYW0ge09iamVjdH0gaW5wdXRcbiAqIEByZXR1cm5zIHtPYmplY3R9IGNsb25lZElucHV0RGF0YVxuICovXG5mdW5jdGlvbiBzaW1wbGVDbG9uZUlucHV0RGF0YShpbnB1dCkge1xuICAgIC8vIG1ha2UgYSBzaW1wbGUgY29weSBvZiB0aGUgcG9pbnRlcnMgYmVjYXVzZSB3ZSB3aWxsIGdldCBhIHJlZmVyZW5jZSBpZiB3ZSBkb24ndFxuICAgIC8vIHdlIG9ubHkgbmVlZCBjbGllbnRYWSBmb3IgdGhlIGNhbGN1bGF0aW9uc1xuICAgIHZhciBwb2ludGVycyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IGlucHV0LnBvaW50ZXJzLmxlbmd0aCkge1xuICAgICAgICBwb2ludGVyc1tpXSA9IHtcbiAgICAgICAgICAgIGNsaWVudFg6IHJvdW5kKGlucHV0LnBvaW50ZXJzW2ldLmNsaWVudFgpLFxuICAgICAgICAgICAgY2xpZW50WTogcm91bmQoaW5wdXQucG9pbnRlcnNbaV0uY2xpZW50WSlcbiAgICAgICAgfTtcbiAgICAgICAgaSsrO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHRpbWVTdGFtcDogbm93KCksXG4gICAgICAgIHBvaW50ZXJzOiBwb2ludGVycyxcbiAgICAgICAgY2VudGVyOiBnZXRDZW50ZXIocG9pbnRlcnMpLFxuICAgICAgICBkZWx0YVg6IGlucHV0LmRlbHRhWCxcbiAgICAgICAgZGVsdGFZOiBpbnB1dC5kZWx0YVlcbiAgICB9O1xufVxuXG4vKipcbiAqIGdldCB0aGUgY2VudGVyIG9mIGFsbCB0aGUgcG9pbnRlcnNcbiAqIEBwYXJhbSB7QXJyYXl9IHBvaW50ZXJzXG4gKiBAcmV0dXJuIHtPYmplY3R9IGNlbnRlciBjb250YWlucyBgeGAgYW5kIGB5YCBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIGdldENlbnRlcihwb2ludGVycykge1xuICAgIHZhciBwb2ludGVyc0xlbmd0aCA9IHBvaW50ZXJzLmxlbmd0aDtcblxuICAgIC8vIG5vIG5lZWQgdG8gbG9vcCB3aGVuIG9ubHkgb25lIHRvdWNoXG4gICAgaWYgKHBvaW50ZXJzTGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiByb3VuZChwb2ludGVyc1swXS5jbGllbnRYKSxcbiAgICAgICAgICAgIHk6IHJvdW5kKHBvaW50ZXJzWzBdLmNsaWVudFkpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIHggPSAwLCB5ID0gMCwgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBwb2ludGVyc0xlbmd0aCkge1xuICAgICAgICB4ICs9IHBvaW50ZXJzW2ldLmNsaWVudFg7XG4gICAgICAgIHkgKz0gcG9pbnRlcnNbaV0uY2xpZW50WTtcbiAgICAgICAgaSsrO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHg6IHJvdW5kKHggLyBwb2ludGVyc0xlbmd0aCksXG4gICAgICAgIHk6IHJvdW5kKHkgLyBwb2ludGVyc0xlbmd0aClcbiAgICB9O1xufVxuXG4vKipcbiAqIGNhbGN1bGF0ZSB0aGUgdmVsb2NpdHkgYmV0d2VlbiB0d28gcG9pbnRzLiB1bml0IGlzIGluIHB4IHBlciBtcy5cbiAqIEBwYXJhbSB7TnVtYmVyfSBkZWx0YVRpbWVcbiAqIEBwYXJhbSB7TnVtYmVyfSB4XG4gKiBAcGFyYW0ge051bWJlcn0geVxuICogQHJldHVybiB7T2JqZWN0fSB2ZWxvY2l0eSBgeGAgYW5kIGB5YFxuICovXG5mdW5jdGlvbiBnZXRWZWxvY2l0eShkZWx0YVRpbWUsIHgsIHkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiB4IC8gZGVsdGFUaW1lIHx8IDAsXG4gICAgICAgIHk6IHkgLyBkZWx0YVRpbWUgfHwgMFxuICAgIH07XG59XG5cbi8qKlxuICogZ2V0IHRoZSBkaXJlY3Rpb24gYmV0d2VlbiB0d28gcG9pbnRzXG4gKiBAcGFyYW0ge051bWJlcn0geFxuICogQHBhcmFtIHtOdW1iZXJ9IHlcbiAqIEByZXR1cm4ge051bWJlcn0gZGlyZWN0aW9uXG4gKi9cbmZ1bmN0aW9uIGdldERpcmVjdGlvbih4LCB5KSB7XG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgICAgcmV0dXJuIERJUkVDVElPTl9OT05FO1xuICAgIH1cblxuICAgIGlmIChhYnMoeCkgPj0gYWJzKHkpKSB7XG4gICAgICAgIHJldHVybiB4IDwgMCA/IERJUkVDVElPTl9MRUZUIDogRElSRUNUSU9OX1JJR0hUO1xuICAgIH1cbiAgICByZXR1cm4geSA8IDAgPyBESVJFQ1RJT05fVVAgOiBESVJFQ1RJT05fRE9XTjtcbn1cblxuLyoqXG4gKiBjYWxjdWxhdGUgdGhlIGFic29sdXRlIGRpc3RhbmNlIGJldHdlZW4gdHdvIHBvaW50c1xuICogQHBhcmFtIHtPYmplY3R9IHAxIHt4LCB5fVxuICogQHBhcmFtIHtPYmplY3R9IHAyIHt4LCB5fVxuICogQHBhcmFtIHtBcnJheX0gW3Byb3BzXSBjb250YWluaW5nIHggYW5kIHkga2V5c1xuICogQHJldHVybiB7TnVtYmVyfSBkaXN0YW5jZVxuICovXG5mdW5jdGlvbiBnZXREaXN0YW5jZShwMSwgcDIsIHByb3BzKSB7XG4gICAgaWYgKCFwcm9wcykge1xuICAgICAgICBwcm9wcyA9IFBST1BTX1hZO1xuICAgIH1cbiAgICB2YXIgeCA9IHAyW3Byb3BzWzBdXSAtIHAxW3Byb3BzWzBdXSxcbiAgICAgICAgeSA9IHAyW3Byb3BzWzFdXSAtIHAxW3Byb3BzWzFdXTtcblxuICAgIHJldHVybiBNYXRoLnNxcnQoKHggKiB4KSArICh5ICogeSkpO1xufVxuXG4vKipcbiAqIGNhbGN1bGF0ZSB0aGUgYW5nbGUgYmV0d2VlbiB0d28gY29vcmRpbmF0ZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBwMVxuICogQHBhcmFtIHtPYmplY3R9IHAyXG4gKiBAcGFyYW0ge0FycmF5fSBbcHJvcHNdIGNvbnRhaW5pbmcgeCBhbmQgeSBrZXlzXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IGFuZ2xlXG4gKi9cbmZ1bmN0aW9uIGdldEFuZ2xlKHAxLCBwMiwgcHJvcHMpIHtcbiAgICBpZiAoIXByb3BzKSB7XG4gICAgICAgIHByb3BzID0gUFJPUFNfWFk7XG4gICAgfVxuICAgIHZhciB4ID0gcDJbcHJvcHNbMF1dIC0gcDFbcHJvcHNbMF1dLFxuICAgICAgICB5ID0gcDJbcHJvcHNbMV1dIC0gcDFbcHJvcHNbMV1dO1xuICAgIHJldHVybiBNYXRoLmF0YW4yKHksIHgpICogMTgwIC8gTWF0aC5QSTtcbn1cblxuLyoqXG4gKiBjYWxjdWxhdGUgdGhlIHJvdGF0aW9uIGRlZ3JlZXMgYmV0d2VlbiB0d28gcG9pbnRlcnNldHNcbiAqIEBwYXJhbSB7QXJyYXl9IHN0YXJ0IGFycmF5IG9mIHBvaW50ZXJzXG4gKiBAcGFyYW0ge0FycmF5fSBlbmQgYXJyYXkgb2YgcG9pbnRlcnNcbiAqIEByZXR1cm4ge051bWJlcn0gcm90YXRpb25cbiAqL1xuZnVuY3Rpb24gZ2V0Um90YXRpb24oc3RhcnQsIGVuZCkge1xuICAgIHJldHVybiBnZXRBbmdsZShlbmRbMV0sIGVuZFswXSwgUFJPUFNfQ0xJRU5UX1hZKSArIGdldEFuZ2xlKHN0YXJ0WzFdLCBzdGFydFswXSwgUFJPUFNfQ0xJRU5UX1hZKTtcbn1cblxuLyoqXG4gKiBjYWxjdWxhdGUgdGhlIHNjYWxlIGZhY3RvciBiZXR3ZWVuIHR3byBwb2ludGVyc2V0c1xuICogbm8gc2NhbGUgaXMgMSwgYW5kIGdvZXMgZG93biB0byAwIHdoZW4gcGluY2hlZCB0b2dldGhlciwgYW5kIGJpZ2dlciB3aGVuIHBpbmNoZWQgb3V0XG4gKiBAcGFyYW0ge0FycmF5fSBzdGFydCBhcnJheSBvZiBwb2ludGVyc1xuICogQHBhcmFtIHtBcnJheX0gZW5kIGFycmF5IG9mIHBvaW50ZXJzXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IHNjYWxlXG4gKi9cbmZ1bmN0aW9uIGdldFNjYWxlKHN0YXJ0LCBlbmQpIHtcbiAgICByZXR1cm4gZ2V0RGlzdGFuY2UoZW5kWzBdLCBlbmRbMV0sIFBST1BTX0NMSUVOVF9YWSkgLyBnZXREaXN0YW5jZShzdGFydFswXSwgc3RhcnRbMV0sIFBST1BTX0NMSUVOVF9YWSk7XG59XG5cbnZhciBNT1VTRV9JTlBVVF9NQVAgPSB7XG4gICAgbW91c2Vkb3duOiBJTlBVVF9TVEFSVCxcbiAgICBtb3VzZW1vdmU6IElOUFVUX01PVkUsXG4gICAgbW91c2V1cDogSU5QVVRfRU5EXG59O1xuXG52YXIgTU9VU0VfRUxFTUVOVF9FVkVOVFMgPSAnbW91c2Vkb3duJztcbnZhciBNT1VTRV9XSU5ET1dfRVZFTlRTID0gJ21vdXNlbW92ZSBtb3VzZXVwJztcblxuLyoqXG4gKiBNb3VzZSBldmVudHMgaW5wdXRcbiAqIEBjb25zdHJ1Y3RvclxuICogQGV4dGVuZHMgSW5wdXRcbiAqL1xuZnVuY3Rpb24gTW91c2VJbnB1dCgpIHtcbiAgICB0aGlzLmV2RWwgPSBNT1VTRV9FTEVNRU5UX0VWRU5UUztcbiAgICB0aGlzLmV2V2luID0gTU9VU0VfV0lORE9XX0VWRU5UUztcblxuICAgIHRoaXMucHJlc3NlZCA9IGZhbHNlOyAvLyBtb3VzZWRvd24gc3RhdGVcblxuICAgIElucHV0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmluaGVyaXQoTW91c2VJbnB1dCwgSW5wdXQsIHtcbiAgICAvKipcbiAgICAgKiBoYW5kbGUgbW91c2UgZXZlbnRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2XG4gICAgICovXG4gICAgaGFuZGxlcjogZnVuY3Rpb24gTUVoYW5kbGVyKGV2KSB7XG4gICAgICAgIHZhciBldmVudFR5cGUgPSBNT1VTRV9JTlBVVF9NQVBbZXYudHlwZV07XG5cbiAgICAgICAgLy8gb24gc3RhcnQgd2Ugd2FudCB0byBoYXZlIHRoZSBsZWZ0IG1vdXNlIGJ1dHRvbiBkb3duXG4gICAgICAgIGlmIChldmVudFR5cGUgJiBJTlBVVF9TVEFSVCAmJiBldi5idXR0b24gPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMucHJlc3NlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnRUeXBlICYgSU5QVVRfTU9WRSAmJiBldi53aGljaCAhPT0gMSkge1xuICAgICAgICAgICAgZXZlbnRUeXBlID0gSU5QVVRfRU5EO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbW91c2UgbXVzdCBiZSBkb3duXG4gICAgICAgIGlmICghdGhpcy5wcmVzc2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnRUeXBlICYgSU5QVVRfRU5EKSB7XG4gICAgICAgICAgICB0aGlzLnByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FsbGJhY2sodGhpcy5tYW5hZ2VyLCBldmVudFR5cGUsIHtcbiAgICAgICAgICAgIHBvaW50ZXJzOiBbZXZdLFxuICAgICAgICAgICAgY2hhbmdlZFBvaW50ZXJzOiBbZXZdLFxuICAgICAgICAgICAgcG9pbnRlclR5cGU6IElOUFVUX1RZUEVfTU9VU0UsXG4gICAgICAgICAgICBzcmNFdmVudDogZXZcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5cbnZhciBQT0lOVEVSX0lOUFVUX01BUCA9IHtcbiAgICBwb2ludGVyZG93bjogSU5QVVRfU1RBUlQsXG4gICAgcG9pbnRlcm1vdmU6IElOUFVUX01PVkUsXG4gICAgcG9pbnRlcnVwOiBJTlBVVF9FTkQsXG4gICAgcG9pbnRlcmNhbmNlbDogSU5QVVRfQ0FOQ0VMLFxuICAgIHBvaW50ZXJvdXQ6IElOUFVUX0NBTkNFTFxufTtcblxuLy8gaW4gSUUxMCB0aGUgcG9pbnRlciB0eXBlcyBpcyBkZWZpbmVkIGFzIGFuIGVudW1cbnZhciBJRTEwX1BPSU5URVJfVFlQRV9FTlVNID0ge1xuICAgIDI6IElOUFVUX1RZUEVfVE9VQ0gsXG4gICAgMzogSU5QVVRfVFlQRV9QRU4sXG4gICAgNDogSU5QVVRfVFlQRV9NT1VTRSxcbiAgICA1OiBJTlBVVF9UWVBFX0tJTkVDVCAvLyBzZWUgaHR0cHM6Ly90d2l0dGVyLmNvbS9qYWNvYnJvc3NpL3N0YXR1cy80ODA1OTY0Mzg0ODk4OTA4MTZcbn07XG5cbnZhciBQT0lOVEVSX0VMRU1FTlRfRVZFTlRTID0gJ3BvaW50ZXJkb3duJztcbnZhciBQT0lOVEVSX1dJTkRPV19FVkVOVFMgPSAncG9pbnRlcm1vdmUgcG9pbnRlcnVwIHBvaW50ZXJjYW5jZWwnO1xuXG4vLyBJRTEwIGhhcyBwcmVmaXhlZCBzdXBwb3J0LCBhbmQgY2FzZS1zZW5zaXRpdmVcbmlmICh3aW5kb3cuTVNQb2ludGVyRXZlbnQgJiYgIXdpbmRvdy5Qb2ludGVyRXZlbnQpIHtcbiAgICBQT0lOVEVSX0VMRU1FTlRfRVZFTlRTID0gJ01TUG9pbnRlckRvd24nO1xuICAgIFBPSU5URVJfV0lORE9XX0VWRU5UUyA9ICdNU1BvaW50ZXJNb3ZlIE1TUG9pbnRlclVwIE1TUG9pbnRlckNhbmNlbCc7XG59XG5cbi8qKlxuICogUG9pbnRlciBldmVudHMgaW5wdXRcbiAqIEBjb25zdHJ1Y3RvclxuICogQGV4dGVuZHMgSW5wdXRcbiAqL1xuZnVuY3Rpb24gUG9pbnRlckV2ZW50SW5wdXQoKSB7XG4gICAgdGhpcy5ldkVsID0gUE9JTlRFUl9FTEVNRU5UX0VWRU5UUztcbiAgICB0aGlzLmV2V2luID0gUE9JTlRFUl9XSU5ET1dfRVZFTlRTO1xuXG4gICAgSW5wdXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIHRoaXMuc3RvcmUgPSAodGhpcy5tYW5hZ2VyLnNlc3Npb24ucG9pbnRlckV2ZW50cyA9IFtdKTtcbn1cblxuaW5oZXJpdChQb2ludGVyRXZlbnRJbnB1dCwgSW5wdXQsIHtcbiAgICAvKipcbiAgICAgKiBoYW5kbGUgbW91c2UgZXZlbnRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2XG4gICAgICovXG4gICAgaGFuZGxlcjogZnVuY3Rpb24gUEVoYW5kbGVyKGV2KSB7XG4gICAgICAgIHZhciBzdG9yZSA9IHRoaXMuc3RvcmU7XG4gICAgICAgIHZhciByZW1vdmVQb2ludGVyID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIGV2ZW50VHlwZU5vcm1hbGl6ZWQgPSBldi50eXBlLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgnbXMnLCAnJyk7XG4gICAgICAgIHZhciBldmVudFR5cGUgPSBQT0lOVEVSX0lOUFVUX01BUFtldmVudFR5cGVOb3JtYWxpemVkXTtcbiAgICAgICAgdmFyIHBvaW50ZXJUeXBlID0gSUUxMF9QT0lOVEVSX1RZUEVfRU5VTVtldi5wb2ludGVyVHlwZV0gfHwgZXYucG9pbnRlclR5cGU7XG5cbiAgICAgICAgdmFyIGlzVG91Y2ggPSAocG9pbnRlclR5cGUgPT0gSU5QVVRfVFlQRV9UT1VDSCk7XG5cbiAgICAgICAgLy8gZ2V0IGluZGV4IG9mIHRoZSBldmVudCBpbiB0aGUgc3RvcmVcbiAgICAgICAgdmFyIHN0b3JlSW5kZXggPSBpbkFycmF5KHN0b3JlLCBldi5wb2ludGVySWQsICdwb2ludGVySWQnKTtcblxuICAgICAgICAvLyBzdGFydCBhbmQgbW91c2UgbXVzdCBiZSBkb3duXG4gICAgICAgIGlmIChldmVudFR5cGUgJiBJTlBVVF9TVEFSVCAmJiAoZXYuYnV0dG9uID09PSAwIHx8IGlzVG91Y2gpKSB7XG4gICAgICAgICAgICBpZiAoc3RvcmVJbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICBzdG9yZS5wdXNoKGV2KTtcbiAgICAgICAgICAgICAgICBzdG9yZUluZGV4ID0gc3RvcmUubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChldmVudFR5cGUgJiAoSU5QVVRfRU5EIHwgSU5QVVRfQ0FOQ0VMKSkge1xuICAgICAgICAgICAgcmVtb3ZlUG9pbnRlciA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpdCBub3QgZm91bmQsIHNvIHRoZSBwb2ludGVyIGhhc24ndCBiZWVuIGRvd24gKHNvIGl0J3MgcHJvYmFibHkgYSBob3ZlcilcbiAgICAgICAgaWYgKHN0b3JlSW5kZXggPCAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyB1cGRhdGUgdGhlIGV2ZW50IGluIHRoZSBzdG9yZVxuICAgICAgICBzdG9yZVtzdG9yZUluZGV4XSA9IGV2O1xuXG4gICAgICAgIHRoaXMuY2FsbGJhY2sodGhpcy5tYW5hZ2VyLCBldmVudFR5cGUsIHtcbiAgICAgICAgICAgIHBvaW50ZXJzOiBzdG9yZSxcbiAgICAgICAgICAgIGNoYW5nZWRQb2ludGVyczogW2V2XSxcbiAgICAgICAgICAgIHBvaW50ZXJUeXBlOiBwb2ludGVyVHlwZSxcbiAgICAgICAgICAgIHNyY0V2ZW50OiBldlxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVtb3ZlUG9pbnRlcikge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIGZyb20gdGhlIHN0b3JlXG4gICAgICAgICAgICBzdG9yZS5zcGxpY2Uoc3RvcmVJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxudmFyIFNJTkdMRV9UT1VDSF9JTlBVVF9NQVAgPSB7XG4gICAgdG91Y2hzdGFydDogSU5QVVRfU1RBUlQsXG4gICAgdG91Y2htb3ZlOiBJTlBVVF9NT1ZFLFxuICAgIHRvdWNoZW5kOiBJTlBVVF9FTkQsXG4gICAgdG91Y2hjYW5jZWw6IElOUFVUX0NBTkNFTFxufTtcblxudmFyIFNJTkdMRV9UT1VDSF9UQVJHRVRfRVZFTlRTID0gJ3RvdWNoc3RhcnQnO1xudmFyIFNJTkdMRV9UT1VDSF9XSU5ET1dfRVZFTlRTID0gJ3RvdWNoc3RhcnQgdG91Y2htb3ZlIHRvdWNoZW5kIHRvdWNoY2FuY2VsJztcblxuLyoqXG4gKiBUb3VjaCBldmVudHMgaW5wdXRcbiAqIEBjb25zdHJ1Y3RvclxuICogQGV4dGVuZHMgSW5wdXRcbiAqL1xuZnVuY3Rpb24gU2luZ2xlVG91Y2hJbnB1dCgpIHtcbiAgICB0aGlzLmV2VGFyZ2V0ID0gU0lOR0xFX1RPVUNIX1RBUkdFVF9FVkVOVFM7XG4gICAgdGhpcy5ldldpbiA9IFNJTkdMRV9UT1VDSF9XSU5ET1dfRVZFTlRTO1xuICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuXG4gICAgSW5wdXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuaW5oZXJpdChTaW5nbGVUb3VjaElucHV0LCBJbnB1dCwge1xuICAgIGhhbmRsZXI6IGZ1bmN0aW9uIFRFaGFuZGxlcihldikge1xuICAgICAgICB2YXIgdHlwZSA9IFNJTkdMRV9UT1VDSF9JTlBVVF9NQVBbZXYudHlwZV07XG5cbiAgICAgICAgLy8gc2hvdWxkIHdlIGhhbmRsZSB0aGUgdG91Y2ggZXZlbnRzP1xuICAgICAgICBpZiAodHlwZSA9PT0gSU5QVVRfU1RBUlQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuc3RhcnRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRvdWNoZXMgPSBub3JtYWxpemVTaW5nbGVUb3VjaGVzLmNhbGwodGhpcywgZXYsIHR5cGUpO1xuXG4gICAgICAgIC8vIHdoZW4gZG9uZSwgcmVzZXQgdGhlIHN0YXJ0ZWQgc3RhdGVcbiAgICAgICAgaWYgKHR5cGUgJiAoSU5QVVRfRU5EIHwgSU5QVVRfQ0FOQ0VMKSAmJiB0b3VjaGVzWzBdLmxlbmd0aCAtIHRvdWNoZXNbMV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FsbGJhY2sodGhpcy5tYW5hZ2VyLCB0eXBlLCB7XG4gICAgICAgICAgICBwb2ludGVyczogdG91Y2hlc1swXSxcbiAgICAgICAgICAgIGNoYW5nZWRQb2ludGVyczogdG91Y2hlc1sxXSxcbiAgICAgICAgICAgIHBvaW50ZXJUeXBlOiBJTlBVVF9UWVBFX1RPVUNILFxuICAgICAgICAgICAgc3JjRXZlbnQ6IGV2XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuXG4vKipcbiAqIEB0aGlzIHtUb3VjaElucHV0fVxuICogQHBhcmFtIHtPYmplY3R9IGV2XG4gKiBAcGFyYW0ge051bWJlcn0gdHlwZSBmbGFnXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfEFycmF5fSBbYWxsLCBjaGFuZ2VkXVxuICovXG5mdW5jdGlvbiBub3JtYWxpemVTaW5nbGVUb3VjaGVzKGV2LCB0eXBlKSB7XG4gICAgdmFyIGFsbCA9IHRvQXJyYXkoZXYudG91Y2hlcyk7XG4gICAgdmFyIGNoYW5nZWQgPSB0b0FycmF5KGV2LmNoYW5nZWRUb3VjaGVzKTtcblxuICAgIGlmICh0eXBlICYgKElOUFVUX0VORCB8IElOUFVUX0NBTkNFTCkpIHtcbiAgICAgICAgYWxsID0gdW5pcXVlQXJyYXkoYWxsLmNvbmNhdChjaGFuZ2VkKSwgJ2lkZW50aWZpZXInLCB0cnVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gW2FsbCwgY2hhbmdlZF07XG59XG5cbnZhciBUT1VDSF9JTlBVVF9NQVAgPSB7XG4gICAgdG91Y2hzdGFydDogSU5QVVRfU1RBUlQsXG4gICAgdG91Y2htb3ZlOiBJTlBVVF9NT1ZFLFxuICAgIHRvdWNoZW5kOiBJTlBVVF9FTkQsXG4gICAgdG91Y2hjYW5jZWw6IElOUFVUX0NBTkNFTFxufTtcblxudmFyIFRPVUNIX1RBUkdFVF9FVkVOVFMgPSAndG91Y2hzdGFydCB0b3VjaG1vdmUgdG91Y2hlbmQgdG91Y2hjYW5jZWwnO1xuXG4vKipcbiAqIE11bHRpLXVzZXIgdG91Y2ggZXZlbnRzIGlucHV0XG4gKiBAY29uc3RydWN0b3JcbiAqIEBleHRlbmRzIElucHV0XG4gKi9cbmZ1bmN0aW9uIFRvdWNoSW5wdXQoKSB7XG4gICAgdGhpcy5ldlRhcmdldCA9IFRPVUNIX1RBUkdFVF9FVkVOVFM7XG4gICAgdGhpcy50YXJnZXRJZHMgPSB7fTtcblxuICAgIElucHV0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmluaGVyaXQoVG91Y2hJbnB1dCwgSW5wdXQsIHtcbiAgICBoYW5kbGVyOiBmdW5jdGlvbiBNVEVoYW5kbGVyKGV2KSB7XG4gICAgICAgIHZhciB0eXBlID0gVE9VQ0hfSU5QVVRfTUFQW2V2LnR5cGVdO1xuICAgICAgICB2YXIgdG91Y2hlcyA9IGdldFRvdWNoZXMuY2FsbCh0aGlzLCBldiwgdHlwZSk7XG4gICAgICAgIGlmICghdG91Y2hlcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWxsYmFjayh0aGlzLm1hbmFnZXIsIHR5cGUsIHtcbiAgICAgICAgICAgIHBvaW50ZXJzOiB0b3VjaGVzWzBdLFxuICAgICAgICAgICAgY2hhbmdlZFBvaW50ZXJzOiB0b3VjaGVzWzFdLFxuICAgICAgICAgICAgcG9pbnRlclR5cGU6IElOUFVUX1RZUEVfVE9VQ0gsXG4gICAgICAgICAgICBzcmNFdmVudDogZXZcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5cbi8qKlxuICogQHRoaXMge1RvdWNoSW5wdXR9XG4gKiBAcGFyYW0ge09iamVjdH0gZXZcbiAqIEBwYXJhbSB7TnVtYmVyfSB0eXBlIGZsYWdcbiAqIEByZXR1cm5zIHt1bmRlZmluZWR8QXJyYXl9IFthbGwsIGNoYW5nZWRdXG4gKi9cbmZ1bmN0aW9uIGdldFRvdWNoZXMoZXYsIHR5cGUpIHtcbiAgICB2YXIgYWxsVG91Y2hlcyA9IHRvQXJyYXkoZXYudG91Y2hlcyk7XG4gICAgdmFyIHRhcmdldElkcyA9IHRoaXMudGFyZ2V0SWRzO1xuXG4gICAgLy8gd2hlbiB0aGVyZSBpcyBvbmx5IG9uZSB0b3VjaCwgdGhlIHByb2Nlc3MgY2FuIGJlIHNpbXBsaWZpZWRcbiAgICBpZiAodHlwZSAmIChJTlBVVF9TVEFSVCB8IElOUFVUX01PVkUpICYmIGFsbFRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHRhcmdldElkc1thbGxUb3VjaGVzWzBdLmlkZW50aWZpZXJdID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIFthbGxUb3VjaGVzLCBhbGxUb3VjaGVzXTtcbiAgICB9XG5cbiAgICB2YXIgaSxcbiAgICAgICAgdGFyZ2V0VG91Y2hlcyxcbiAgICAgICAgY2hhbmdlZFRvdWNoZXMgPSB0b0FycmF5KGV2LmNoYW5nZWRUb3VjaGVzKSxcbiAgICAgICAgY2hhbmdlZFRhcmdldFRvdWNoZXMgPSBbXSxcbiAgICAgICAgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG5cbiAgICAvLyBnZXQgdGFyZ2V0IHRvdWNoZXMgZnJvbSB0b3VjaGVzXG4gICAgdGFyZ2V0VG91Y2hlcyA9IGFsbFRvdWNoZXMuZmlsdGVyKGZ1bmN0aW9uKHRvdWNoKSB7XG4gICAgICAgIHJldHVybiBoYXNQYXJlbnQodG91Y2gudGFyZ2V0LCB0YXJnZXQpO1xuICAgIH0pO1xuXG4gICAgLy8gY29sbGVjdCB0b3VjaGVzXG4gICAgaWYgKHR5cGUgPT09IElOUFVUX1NUQVJUKSB7XG4gICAgICAgIGkgPSAwO1xuICAgICAgICB3aGlsZSAoaSA8IHRhcmdldFRvdWNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0YXJnZXRJZHNbdGFyZ2V0VG91Y2hlc1tpXS5pZGVudGlmaWVyXSA9IHRydWU7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBmaWx0ZXIgY2hhbmdlZCB0b3VjaGVzIHRvIG9ubHkgY29udGFpbiB0b3VjaGVzIHRoYXQgZXhpc3QgaW4gdGhlIGNvbGxlY3RlZCB0YXJnZXQgaWRzXG4gICAgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBjaGFuZ2VkVG91Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKHRhcmdldElkc1tjaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyXSkge1xuICAgICAgICAgICAgY2hhbmdlZFRhcmdldFRvdWNoZXMucHVzaChjaGFuZ2VkVG91Y2hlc1tpXSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjbGVhbnVwIHJlbW92ZWQgdG91Y2hlc1xuICAgICAgICBpZiAodHlwZSAmIChJTlBVVF9FTkQgfCBJTlBVVF9DQU5DRUwpKSB7XG4gICAgICAgICAgICBkZWxldGUgdGFyZ2V0SWRzW2NoYW5nZWRUb3VjaGVzW2ldLmlkZW50aWZpZXJdO1xuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICB9XG5cbiAgICBpZiAoIWNoYW5nZWRUYXJnZXRUb3VjaGVzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIFtcbiAgICAgICAgLy8gbWVyZ2UgdGFyZ2V0VG91Y2hlcyB3aXRoIGNoYW5nZWRUYXJnZXRUb3VjaGVzIHNvIGl0IGNvbnRhaW5zIEFMTCB0b3VjaGVzLCBpbmNsdWRpbmcgJ2VuZCcgYW5kICdjYW5jZWwnXG4gICAgICAgIHVuaXF1ZUFycmF5KHRhcmdldFRvdWNoZXMuY29uY2F0KGNoYW5nZWRUYXJnZXRUb3VjaGVzKSwgJ2lkZW50aWZpZXInLCB0cnVlKSxcbiAgICAgICAgY2hhbmdlZFRhcmdldFRvdWNoZXNcbiAgICBdO1xufVxuXG4vKipcbiAqIENvbWJpbmVkIHRvdWNoIGFuZCBtb3VzZSBpbnB1dFxuICpcbiAqIFRvdWNoIGhhcyBhIGhpZ2hlciBwcmlvcml0eSB0aGVuIG1vdXNlLCBhbmQgd2hpbGUgdG91Y2hpbmcgbm8gbW91c2UgZXZlbnRzIGFyZSBhbGxvd2VkLlxuICogVGhpcyBiZWNhdXNlIHRvdWNoIGRldmljZXMgYWxzbyBlbWl0IG1vdXNlIGV2ZW50cyB3aGlsZSBkb2luZyBhIHRvdWNoLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQGV4dGVuZHMgSW5wdXRcbiAqL1xuXG52YXIgREVEVVBfVElNRU9VVCA9IDI1MDA7XG52YXIgREVEVVBfRElTVEFOQ0UgPSAyNTtcblxuZnVuY3Rpb24gVG91Y2hNb3VzZUlucHV0KCkge1xuICAgIElucHV0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICB2YXIgaGFuZGxlciA9IGJpbmRGbih0aGlzLmhhbmRsZXIsIHRoaXMpO1xuICAgIHRoaXMudG91Y2ggPSBuZXcgVG91Y2hJbnB1dCh0aGlzLm1hbmFnZXIsIGhhbmRsZXIpO1xuICAgIHRoaXMubW91c2UgPSBuZXcgTW91c2VJbnB1dCh0aGlzLm1hbmFnZXIsIGhhbmRsZXIpO1xuXG4gICAgdGhpcy5wcmltYXJ5VG91Y2ggPSBudWxsO1xuICAgIHRoaXMubGFzdFRvdWNoZXMgPSBbXTtcbn1cblxuaW5oZXJpdChUb3VjaE1vdXNlSW5wdXQsIElucHV0LCB7XG4gICAgLyoqXG4gICAgICogaGFuZGxlIG1vdXNlIGFuZCB0b3VjaCBldmVudHNcbiAgICAgKiBAcGFyYW0ge0hhbW1lcn0gbWFuYWdlclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dEV2ZW50XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGlucHV0RGF0YVxuICAgICAqL1xuICAgIGhhbmRsZXI6IGZ1bmN0aW9uIFRNRWhhbmRsZXIobWFuYWdlciwgaW5wdXRFdmVudCwgaW5wdXREYXRhKSB7XG4gICAgICAgIHZhciBpc1RvdWNoID0gKGlucHV0RGF0YS5wb2ludGVyVHlwZSA9PSBJTlBVVF9UWVBFX1RPVUNIKSxcbiAgICAgICAgICAgIGlzTW91c2UgPSAoaW5wdXREYXRhLnBvaW50ZXJUeXBlID09IElOUFVUX1RZUEVfTU9VU0UpO1xuXG4gICAgICAgIGlmIChpc01vdXNlICYmIGlucHV0RGF0YS5zb3VyY2VDYXBhYmlsaXRpZXMgJiYgaW5wdXREYXRhLnNvdXJjZUNhcGFiaWxpdGllcy5maXJlc1RvdWNoRXZlbnRzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyB3aGVuIHdlJ3JlIGluIGEgdG91Y2ggZXZlbnQsIHJlY29yZCB0b3VjaGVzIHRvICBkZS1kdXBlIHN5bnRoZXRpYyBtb3VzZSBldmVudFxuICAgICAgICBpZiAoaXNUb3VjaCkge1xuICAgICAgICAgICAgcmVjb3JkVG91Y2hlcy5jYWxsKHRoaXMsIGlucHV0RXZlbnQsIGlucHV0RGF0YSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNNb3VzZSAmJiBpc1N5bnRoZXRpY0V2ZW50LmNhbGwodGhpcywgaW5wdXREYXRhKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWxsYmFjayhtYW5hZ2VyLCBpbnB1dEV2ZW50LCBpbnB1dERhdGEpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiByZW1vdmUgdGhlIGV2ZW50IGxpc3RlbmVyc1xuICAgICAqL1xuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudG91Y2guZGVzdHJveSgpO1xuICAgICAgICB0aGlzLm1vdXNlLmRlc3Ryb3koKTtcbiAgICB9XG59KTtcblxuZnVuY3Rpb24gcmVjb3JkVG91Y2hlcyhldmVudFR5cGUsIGV2ZW50RGF0YSkge1xuICAgIGlmIChldmVudFR5cGUgJiBJTlBVVF9TVEFSVCkge1xuICAgICAgICB0aGlzLnByaW1hcnlUb3VjaCA9IGV2ZW50RGF0YS5jaGFuZ2VkUG9pbnRlcnNbMF0uaWRlbnRpZmllcjtcbiAgICAgICAgc2V0TGFzdFRvdWNoLmNhbGwodGhpcywgZXZlbnREYXRhKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50VHlwZSAmIChJTlBVVF9FTkQgfCBJTlBVVF9DQU5DRUwpKSB7XG4gICAgICAgIHNldExhc3RUb3VjaC5jYWxsKHRoaXMsIGV2ZW50RGF0YSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZXRMYXN0VG91Y2goZXZlbnREYXRhKSB7XG4gICAgdmFyIHRvdWNoID0gZXZlbnREYXRhLmNoYW5nZWRQb2ludGVyc1swXTtcblxuICAgIGlmICh0b3VjaC5pZGVudGlmaWVyID09PSB0aGlzLnByaW1hcnlUb3VjaCkge1xuICAgICAgICB2YXIgbGFzdFRvdWNoID0ge3g6IHRvdWNoLmNsaWVudFgsIHk6IHRvdWNoLmNsaWVudFl9O1xuICAgICAgICB0aGlzLmxhc3RUb3VjaGVzLnB1c2gobGFzdFRvdWNoKTtcbiAgICAgICAgdmFyIGx0cyA9IHRoaXMubGFzdFRvdWNoZXM7XG4gICAgICAgIHZhciByZW1vdmVMYXN0VG91Y2ggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBpID0gbHRzLmluZGV4T2YobGFzdFRvdWNoKTtcbiAgICAgICAgICAgIGlmIChpID4gLTEpIHtcbiAgICAgICAgICAgICAgICBsdHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBzZXRUaW1lb3V0KHJlbW92ZUxhc3RUb3VjaCwgREVEVVBfVElNRU9VVCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc1N5bnRoZXRpY0V2ZW50KGV2ZW50RGF0YSkge1xuICAgIHZhciB4ID0gZXZlbnREYXRhLnNyY0V2ZW50LmNsaWVudFgsIHkgPSBldmVudERhdGEuc3JjRXZlbnQuY2xpZW50WTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGFzdFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzLmxhc3RUb3VjaGVzW2ldO1xuICAgICAgICB2YXIgZHggPSBNYXRoLmFicyh4IC0gdC54KSwgZHkgPSBNYXRoLmFicyh5IC0gdC55KTtcbiAgICAgICAgaWYgKGR4IDw9IERFRFVQX0RJU1RBTkNFICYmIGR5IDw9IERFRFVQX0RJU1RBTkNFKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbnZhciBQUkVGSVhFRF9UT1VDSF9BQ1RJT04gPSBwcmVmaXhlZChURVNUX0VMRU1FTlQuc3R5bGUsICd0b3VjaEFjdGlvbicpO1xudmFyIE5BVElWRV9UT1VDSF9BQ1RJT04gPSBQUkVGSVhFRF9UT1VDSF9BQ1RJT04gIT09IHVuZGVmaW5lZDtcblxuLy8gbWFnaWNhbCB0b3VjaEFjdGlvbiB2YWx1ZVxudmFyIFRPVUNIX0FDVElPTl9DT01QVVRFID0gJ2NvbXB1dGUnO1xudmFyIFRPVUNIX0FDVElPTl9BVVRPID0gJ2F1dG8nO1xudmFyIFRPVUNIX0FDVElPTl9NQU5JUFVMQVRJT04gPSAnbWFuaXB1bGF0aW9uJzsgLy8gbm90IGltcGxlbWVudGVkXG52YXIgVE9VQ0hfQUNUSU9OX05PTkUgPSAnbm9uZSc7XG52YXIgVE9VQ0hfQUNUSU9OX1BBTl9YID0gJ3Bhbi14JztcbnZhciBUT1VDSF9BQ1RJT05fUEFOX1kgPSAncGFuLXknO1xudmFyIFRPVUNIX0FDVElPTl9NQVAgPSBnZXRUb3VjaEFjdGlvblByb3BzKCk7XG5cbi8qKlxuICogVG91Y2ggQWN0aW9uXG4gKiBzZXRzIHRoZSB0b3VjaEFjdGlvbiBwcm9wZXJ0eSBvciB1c2VzIHRoZSBqcyBhbHRlcm5hdGl2ZVxuICogQHBhcmFtIHtNYW5hZ2VyfSBtYW5hZ2VyXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBUb3VjaEFjdGlvbihtYW5hZ2VyLCB2YWx1ZSkge1xuICAgIHRoaXMubWFuYWdlciA9IG1hbmFnZXI7XG4gICAgdGhpcy5zZXQodmFsdWUpO1xufVxuXG5Ub3VjaEFjdGlvbi5wcm90b3R5cGUgPSB7XG4gICAgLyoqXG4gICAgICogc2V0IHRoZSB0b3VjaEFjdGlvbiB2YWx1ZSBvbiB0aGUgZWxlbWVudCBvciBlbmFibGUgdGhlIHBvbHlmaWxsXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAvLyBmaW5kIG91dCB0aGUgdG91Y2gtYWN0aW9uIGJ5IHRoZSBldmVudCBoYW5kbGVyc1xuICAgICAgICBpZiAodmFsdWUgPT0gVE9VQ0hfQUNUSU9OX0NPTVBVVEUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5jb21wdXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoTkFUSVZFX1RPVUNIX0FDVElPTiAmJiB0aGlzLm1hbmFnZXIuZWxlbWVudC5zdHlsZSAmJiBUT1VDSF9BQ1RJT05fTUFQW3ZhbHVlXSkge1xuICAgICAgICAgICAgdGhpcy5tYW5hZ2VyLmVsZW1lbnQuc3R5bGVbUFJFRklYRURfVE9VQ0hfQUNUSU9OXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWN0aW9ucyA9IHZhbHVlLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBqdXN0IHJlLXNldCB0aGUgdG91Y2hBY3Rpb24gdmFsdWVcbiAgICAgKi9cbiAgICB1cGRhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNldCh0aGlzLm1hbmFnZXIub3B0aW9ucy50b3VjaEFjdGlvbik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIGNvbXB1dGUgdGhlIHZhbHVlIGZvciB0aGUgdG91Y2hBY3Rpb24gcHJvcGVydHkgYmFzZWQgb24gdGhlIHJlY29nbml6ZXIncyBzZXR0aW5nc1xuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IHZhbHVlXG4gICAgICovXG4gICAgY29tcHV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhY3Rpb25zID0gW107XG4gICAgICAgIGVhY2godGhpcy5tYW5hZ2VyLnJlY29nbml6ZXJzLCBmdW5jdGlvbihyZWNvZ25pemVyKSB7XG4gICAgICAgICAgICBpZiAoYm9vbE9yRm4ocmVjb2duaXplci5vcHRpb25zLmVuYWJsZSwgW3JlY29nbml6ZXJdKSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbnMgPSBhY3Rpb25zLmNvbmNhdChyZWNvZ25pemVyLmdldFRvdWNoQWN0aW9uKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNsZWFuVG91Y2hBY3Rpb25zKGFjdGlvbnMuam9pbignICcpKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogdGhpcyBtZXRob2QgaXMgY2FsbGVkIG9uIGVhY2ggaW5wdXQgY3ljbGUgYW5kIHByb3ZpZGVzIHRoZSBwcmV2ZW50aW5nIG9mIHRoZSBicm93c2VyIGJlaGF2aW9yXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGlucHV0XG4gICAgICovXG4gICAgcHJldmVudERlZmF1bHRzOiBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICB2YXIgc3JjRXZlbnQgPSBpbnB1dC5zcmNFdmVudDtcbiAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGlucHV0Lm9mZnNldERpcmVjdGlvbjtcblxuICAgICAgICAvLyBpZiB0aGUgdG91Y2ggYWN0aW9uIGRpZCBwcmV2ZW50ZWQgb25jZSB0aGlzIHNlc3Npb25cbiAgICAgICAgaWYgKHRoaXMubWFuYWdlci5zZXNzaW9uLnByZXZlbnRlZCkge1xuICAgICAgICAgICAgc3JjRXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhY3Rpb25zID0gdGhpcy5hY3Rpb25zO1xuICAgICAgICB2YXIgaGFzTm9uZSA9IGluU3RyKGFjdGlvbnMsIFRPVUNIX0FDVElPTl9OT05FKSAmJiAhVE9VQ0hfQUNUSU9OX01BUFtUT1VDSF9BQ1RJT05fTk9ORV07XG4gICAgICAgIHZhciBoYXNQYW5ZID0gaW5TdHIoYWN0aW9ucywgVE9VQ0hfQUNUSU9OX1BBTl9ZKSAmJiAhVE9VQ0hfQUNUSU9OX01BUFtUT1VDSF9BQ1RJT05fUEFOX1ldO1xuICAgICAgICB2YXIgaGFzUGFuWCA9IGluU3RyKGFjdGlvbnMsIFRPVUNIX0FDVElPTl9QQU5fWCkgJiYgIVRPVUNIX0FDVElPTl9NQVBbVE9VQ0hfQUNUSU9OX1BBTl9YXTtcblxuICAgICAgICBpZiAoaGFzTm9uZSkge1xuICAgICAgICAgICAgLy9kbyBub3QgcHJldmVudCBkZWZhdWx0cyBpZiB0aGlzIGlzIGEgdGFwIGdlc3R1cmVcblxuICAgICAgICAgICAgdmFyIGlzVGFwUG9pbnRlciA9IGlucHV0LnBvaW50ZXJzLmxlbmd0aCA9PT0gMTtcbiAgICAgICAgICAgIHZhciBpc1RhcE1vdmVtZW50ID0gaW5wdXQuZGlzdGFuY2UgPCAyO1xuICAgICAgICAgICAgdmFyIGlzVGFwVG91Y2hUaW1lID0gaW5wdXQuZGVsdGFUaW1lIDwgMjUwO1xuXG4gICAgICAgICAgICBpZiAoaXNUYXBQb2ludGVyICYmIGlzVGFwTW92ZW1lbnQgJiYgaXNUYXBUb3VjaFRpbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzUGFuWCAmJiBoYXNQYW5ZKSB7XG4gICAgICAgICAgICAvLyBgcGFuLXggcGFuLXlgIG1lYW5zIGJyb3dzZXIgaGFuZGxlcyBhbGwgc2Nyb2xsaW5nL3Bhbm5pbmcsIGRvIG5vdCBwcmV2ZW50XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzTm9uZSB8fFxuICAgICAgICAgICAgKGhhc1BhblkgJiYgZGlyZWN0aW9uICYgRElSRUNUSU9OX0hPUklaT05UQUwpIHx8XG4gICAgICAgICAgICAoaGFzUGFuWCAmJiBkaXJlY3Rpb24gJiBESVJFQ1RJT05fVkVSVElDQUwpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcmV2ZW50U3JjKHNyY0V2ZW50KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBjYWxsIHByZXZlbnREZWZhdWx0IHRvIHByZXZlbnQgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGJlaGF2aW9yIChzY3JvbGxpbmcgaW4gbW9zdCBjYXNlcylcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc3JjRXZlbnRcbiAgICAgKi9cbiAgICBwcmV2ZW50U3JjOiBmdW5jdGlvbihzcmNFdmVudCkge1xuICAgICAgICB0aGlzLm1hbmFnZXIuc2Vzc2lvbi5wcmV2ZW50ZWQgPSB0cnVlO1xuICAgICAgICBzcmNFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbn07XG5cbi8qKlxuICogd2hlbiB0aGUgdG91Y2hBY3Rpb25zIGFyZSBjb2xsZWN0ZWQgdGhleSBhcmUgbm90IGEgdmFsaWQgdmFsdWUsIHNvIHdlIG5lZWQgdG8gY2xlYW4gdGhpbmdzIHVwLiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYWN0aW9uc1xuICogQHJldHVybnMgeyp9XG4gKi9cbmZ1bmN0aW9uIGNsZWFuVG91Y2hBY3Rpb25zKGFjdGlvbnMpIHtcbiAgICAvLyBub25lXG4gICAgaWYgKGluU3RyKGFjdGlvbnMsIFRPVUNIX0FDVElPTl9OT05FKSkge1xuICAgICAgICByZXR1cm4gVE9VQ0hfQUNUSU9OX05PTkU7XG4gICAgfVxuXG4gICAgdmFyIGhhc1BhblggPSBpblN0cihhY3Rpb25zLCBUT1VDSF9BQ1RJT05fUEFOX1gpO1xuICAgIHZhciBoYXNQYW5ZID0gaW5TdHIoYWN0aW9ucywgVE9VQ0hfQUNUSU9OX1BBTl9ZKTtcblxuICAgIC8vIGlmIGJvdGggcGFuLXggYW5kIHBhbi15IGFyZSBzZXQgKGRpZmZlcmVudCByZWNvZ25pemVyc1xuICAgIC8vIGZvciBkaWZmZXJlbnQgZGlyZWN0aW9ucywgZS5nLiBob3Jpem9udGFsIHBhbiBidXQgdmVydGljYWwgc3dpcGU/KVxuICAgIC8vIHdlIG5lZWQgbm9uZSAoYXMgb3RoZXJ3aXNlIHdpdGggcGFuLXggcGFuLXkgY29tYmluZWQgbm9uZSBvZiB0aGVzZVxuICAgIC8vIHJlY29nbml6ZXJzIHdpbGwgd29yaywgc2luY2UgdGhlIGJyb3dzZXIgd291bGQgaGFuZGxlIGFsbCBwYW5uaW5nXG4gICAgaWYgKGhhc1BhblggJiYgaGFzUGFuWSkge1xuICAgICAgICByZXR1cm4gVE9VQ0hfQUNUSU9OX05PTkU7XG4gICAgfVxuXG4gICAgLy8gcGFuLXggT1IgcGFuLXlcbiAgICBpZiAoaGFzUGFuWCB8fCBoYXNQYW5ZKSB7XG4gICAgICAgIHJldHVybiBoYXNQYW5YID8gVE9VQ0hfQUNUSU9OX1BBTl9YIDogVE9VQ0hfQUNUSU9OX1BBTl9ZO1xuICAgIH1cblxuICAgIC8vIG1hbmlwdWxhdGlvblxuICAgIGlmIChpblN0cihhY3Rpb25zLCBUT1VDSF9BQ1RJT05fTUFOSVBVTEFUSU9OKSkge1xuICAgICAgICByZXR1cm4gVE9VQ0hfQUNUSU9OX01BTklQVUxBVElPTjtcbiAgICB9XG5cbiAgICByZXR1cm4gVE9VQ0hfQUNUSU9OX0FVVE87XG59XG5cbmZ1bmN0aW9uIGdldFRvdWNoQWN0aW9uUHJvcHMoKSB7XG4gICAgaWYgKCFOQVRJVkVfVE9VQ0hfQUNUSU9OKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIHRvdWNoTWFwID0ge307XG4gICAgdmFyIGNzc1N1cHBvcnRzID0gd2luZG93LkNTUyAmJiB3aW5kb3cuQ1NTLnN1cHBvcnRzO1xuICAgIFsnYXV0bycsICdtYW5pcHVsYXRpb24nLCAncGFuLXknLCAncGFuLXgnLCAncGFuLXggcGFuLXknLCAnbm9uZSddLmZvckVhY2goZnVuY3Rpb24odmFsKSB7XG5cbiAgICAgICAgLy8gSWYgY3NzLnN1cHBvcnRzIGlzIG5vdCBzdXBwb3J0ZWQgYnV0IHRoZXJlIGlzIG5hdGl2ZSB0b3VjaC1hY3Rpb24gYXNzdW1lIGl0IHN1cHBvcnRzXG4gICAgICAgIC8vIGFsbCB2YWx1ZXMuIFRoaXMgaXMgdGhlIGNhc2UgZm9yIElFIDEwIGFuZCAxMS5cbiAgICAgICAgdG91Y2hNYXBbdmFsXSA9IGNzc1N1cHBvcnRzID8gd2luZG93LkNTUy5zdXBwb3J0cygndG91Y2gtYWN0aW9uJywgdmFsKSA6IHRydWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRvdWNoTWFwO1xufVxuXG4vKipcbiAqIFJlY29nbml6ZXIgZmxvdyBleHBsYWluZWQ7ICpcbiAqIEFsbCByZWNvZ25pemVycyBoYXZlIHRoZSBpbml0aWFsIHN0YXRlIG9mIFBPU1NJQkxFIHdoZW4gYSBpbnB1dCBzZXNzaW9uIHN0YXJ0cy5cbiAqIFRoZSBkZWZpbml0aW9uIG9mIGEgaW5wdXQgc2Vzc2lvbiBpcyBmcm9tIHRoZSBmaXJzdCBpbnB1dCB1bnRpbCB0aGUgbGFzdCBpbnB1dCwgd2l0aCBhbGwgaXQncyBtb3ZlbWVudCBpbiBpdC4gKlxuICogRXhhbXBsZSBzZXNzaW9uIGZvciBtb3VzZS1pbnB1dDogbW91c2Vkb3duIC0+IG1vdXNlbW92ZSAtPiBtb3VzZXVwXG4gKlxuICogT24gZWFjaCByZWNvZ25pemluZyBjeWNsZSAoc2VlIE1hbmFnZXIucmVjb2duaXplKSB0aGUgLnJlY29nbml6ZSgpIG1ldGhvZCBpcyBleGVjdXRlZFxuICogd2hpY2ggZGV0ZXJtaW5lcyB3aXRoIHN0YXRlIGl0IHNob3VsZCBiZS5cbiAqXG4gKiBJZiB0aGUgcmVjb2duaXplciBoYXMgdGhlIHN0YXRlIEZBSUxFRCwgQ0FOQ0VMTEVEIG9yIFJFQ09HTklaRUQgKGVxdWFscyBFTkRFRCksIGl0IGlzIHJlc2V0IHRvXG4gKiBQT1NTSUJMRSB0byBnaXZlIGl0IGFub3RoZXIgY2hhbmdlIG9uIHRoZSBuZXh0IGN5Y2xlLlxuICpcbiAqICAgICAgICAgICAgICAgUG9zc2libGVcbiAqICAgICAgICAgICAgICAgICAgfFxuICogICAgICAgICAgICArLS0tLS0rLS0tLS0tLS0tLS0tLS0tK1xuICogICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgfFxuICogICAgICArLS0tLS0rLS0tLS0rICAgICAgICAgICAgICAgfFxuICogICAgICB8ICAgICAgICAgICB8ICAgICAgICAgICAgICAgfFxuICogICBGYWlsZWQgICAgICBDYW5jZWxsZWQgICAgICAgICAgfFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICstLS0tLS0tKy0tLS0tLStcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICB8XG4gKiAgICAgICAgICAgICAgICAgICAgICBSZWNvZ25pemVkICAgICAgIEJlZ2FuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoYW5nZWRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbmRlZC9SZWNvZ25pemVkXG4gKi9cbnZhciBTVEFURV9QT1NTSUJMRSA9IDE7XG52YXIgU1RBVEVfQkVHQU4gPSAyO1xudmFyIFNUQVRFX0NIQU5HRUQgPSA0O1xudmFyIFNUQVRFX0VOREVEID0gODtcbnZhciBTVEFURV9SRUNPR05JWkVEID0gU1RBVEVfRU5ERUQ7XG52YXIgU1RBVEVfQ0FOQ0VMTEVEID0gMTY7XG52YXIgU1RBVEVfRkFJTEVEID0gMzI7XG5cbi8qKlxuICogUmVjb2duaXplclxuICogRXZlcnkgcmVjb2duaXplciBuZWVkcyB0byBleHRlbmQgZnJvbSB0aGlzIGNsYXNzLlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5mdW5jdGlvbiBSZWNvZ25pemVyKG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBhc3NpZ24oe30sIHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMgfHwge30pO1xuXG4gICAgdGhpcy5pZCA9IHVuaXF1ZUlkKCk7XG5cbiAgICB0aGlzLm1hbmFnZXIgPSBudWxsO1xuXG4gICAgLy8gZGVmYXVsdCBpcyBlbmFibGUgdHJ1ZVxuICAgIHRoaXMub3B0aW9ucy5lbmFibGUgPSBpZlVuZGVmaW5lZCh0aGlzLm9wdGlvbnMuZW5hYmxlLCB0cnVlKTtcblxuICAgIHRoaXMuc3RhdGUgPSBTVEFURV9QT1NTSUJMRTtcblxuICAgIHRoaXMuc2ltdWx0YW5lb3VzID0ge307XG4gICAgdGhpcy5yZXF1aXJlRmFpbCA9IFtdO1xufVxuXG5SZWNvZ25pemVyLnByb3RvdHlwZSA9IHtcbiAgICAvKipcbiAgICAgKiBAdmlydHVhbFxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgZGVmYXVsdHM6IHt9LFxuXG4gICAgLyoqXG4gICAgICogc2V0IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge1JlY29nbml6ZXJ9XG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIGFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuXG4gICAgICAgIC8vIGFsc28gdXBkYXRlIHRoZSB0b3VjaEFjdGlvbiwgaW4gY2FzZSBzb21ldGhpbmcgY2hhbmdlZCBhYm91dCB0aGUgZGlyZWN0aW9ucy9lbmFibGVkIHN0YXRlXG4gICAgICAgIHRoaXMubWFuYWdlciAmJiB0aGlzLm1hbmFnZXIudG91Y2hBY3Rpb24udXBkYXRlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiByZWNvZ25pemUgc2ltdWx0YW5lb3VzIHdpdGggYW4gb3RoZXIgcmVjb2duaXplci5cbiAgICAgKiBAcGFyYW0ge1JlY29nbml6ZXJ9IG90aGVyUmVjb2duaXplclxuICAgICAqIEByZXR1cm5zIHtSZWNvZ25pemVyfSB0aGlzXG4gICAgICovXG4gICAgcmVjb2duaXplV2l0aDogZnVuY3Rpb24ob3RoZXJSZWNvZ25pemVyKSB7XG4gICAgICAgIGlmIChpbnZva2VBcnJheUFyZyhvdGhlclJlY29nbml6ZXIsICdyZWNvZ25pemVXaXRoJywgdGhpcykpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNpbXVsdGFuZW91cyA9IHRoaXMuc2ltdWx0YW5lb3VzO1xuICAgICAgICBvdGhlclJlY29nbml6ZXIgPSBnZXRSZWNvZ25pemVyQnlOYW1lSWZNYW5hZ2VyKG90aGVyUmVjb2duaXplciwgdGhpcyk7XG4gICAgICAgIGlmICghc2ltdWx0YW5lb3VzW290aGVyUmVjb2duaXplci5pZF0pIHtcbiAgICAgICAgICAgIHNpbXVsdGFuZW91c1tvdGhlclJlY29nbml6ZXIuaWRdID0gb3RoZXJSZWNvZ25pemVyO1xuICAgICAgICAgICAgb3RoZXJSZWNvZ25pemVyLnJlY29nbml6ZVdpdGgodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIGRyb3AgdGhlIHNpbXVsdGFuZW91cyBsaW5rLiBpdCBkb2VzbnQgcmVtb3ZlIHRoZSBsaW5rIG9uIHRoZSBvdGhlciByZWNvZ25pemVyLlxuICAgICAqIEBwYXJhbSB7UmVjb2duaXplcn0gb3RoZXJSZWNvZ25pemVyXG4gICAgICogQHJldHVybnMge1JlY29nbml6ZXJ9IHRoaXNcbiAgICAgKi9cbiAgICBkcm9wUmVjb2duaXplV2l0aDogZnVuY3Rpb24ob3RoZXJSZWNvZ25pemVyKSB7XG4gICAgICAgIGlmIChpbnZva2VBcnJheUFyZyhvdGhlclJlY29nbml6ZXIsICdkcm9wUmVjb2duaXplV2l0aCcsIHRoaXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIG90aGVyUmVjb2duaXplciA9IGdldFJlY29nbml6ZXJCeU5hbWVJZk1hbmFnZXIob3RoZXJSZWNvZ25pemVyLCB0aGlzKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2ltdWx0YW5lb3VzW290aGVyUmVjb2duaXplci5pZF07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiByZWNvZ25pemVyIGNhbiBvbmx5IHJ1biB3aGVuIGFuIG90aGVyIGlzIGZhaWxpbmdcbiAgICAgKiBAcGFyYW0ge1JlY29nbml6ZXJ9IG90aGVyUmVjb2duaXplclxuICAgICAqIEByZXR1cm5zIHtSZWNvZ25pemVyfSB0aGlzXG4gICAgICovXG4gICAgcmVxdWlyZUZhaWx1cmU6IGZ1bmN0aW9uKG90aGVyUmVjb2duaXplcikge1xuICAgICAgICBpZiAoaW52b2tlQXJyYXlBcmcob3RoZXJSZWNvZ25pemVyLCAncmVxdWlyZUZhaWx1cmUnLCB0aGlzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVxdWlyZUZhaWwgPSB0aGlzLnJlcXVpcmVGYWlsO1xuICAgICAgICBvdGhlclJlY29nbml6ZXIgPSBnZXRSZWNvZ25pemVyQnlOYW1lSWZNYW5hZ2VyKG90aGVyUmVjb2duaXplciwgdGhpcyk7XG4gICAgICAgIGlmIChpbkFycmF5KHJlcXVpcmVGYWlsLCBvdGhlclJlY29nbml6ZXIpID09PSAtMSkge1xuICAgICAgICAgICAgcmVxdWlyZUZhaWwucHVzaChvdGhlclJlY29nbml6ZXIpO1xuICAgICAgICAgICAgb3RoZXJSZWNvZ25pemVyLnJlcXVpcmVGYWlsdXJlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBkcm9wIHRoZSByZXF1aXJlRmFpbHVyZSBsaW5rLiBpdCBkb2VzIG5vdCByZW1vdmUgdGhlIGxpbmsgb24gdGhlIG90aGVyIHJlY29nbml6ZXIuXG4gICAgICogQHBhcmFtIHtSZWNvZ25pemVyfSBvdGhlclJlY29nbml6ZXJcbiAgICAgKiBAcmV0dXJucyB7UmVjb2duaXplcn0gdGhpc1xuICAgICAqL1xuICAgIGRyb3BSZXF1aXJlRmFpbHVyZTogZnVuY3Rpb24ob3RoZXJSZWNvZ25pemVyKSB7XG4gICAgICAgIGlmIChpbnZva2VBcnJheUFyZyhvdGhlclJlY29nbml6ZXIsICdkcm9wUmVxdWlyZUZhaWx1cmUnLCB0aGlzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBvdGhlclJlY29nbml6ZXIgPSBnZXRSZWNvZ25pemVyQnlOYW1lSWZNYW5hZ2VyKG90aGVyUmVjb2duaXplciwgdGhpcyk7XG4gICAgICAgIHZhciBpbmRleCA9IGluQXJyYXkodGhpcy5yZXF1aXJlRmFpbCwgb3RoZXJSZWNvZ25pemVyKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZUZhaWwuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogaGFzIHJlcXVpcmUgZmFpbHVyZXMgYm9vbGVhblxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGhhc1JlcXVpcmVGYWlsdXJlczogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVpcmVGYWlsLmxlbmd0aCA+IDA7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIGlmIHRoZSByZWNvZ25pemVyIGNhbiByZWNvZ25pemUgc2ltdWx0YW5lb3VzIHdpdGggYW4gb3RoZXIgcmVjb2duaXplclxuICAgICAqIEBwYXJhbSB7UmVjb2duaXplcn0gb3RoZXJSZWNvZ25pemVyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgY2FuUmVjb2duaXplV2l0aDogZnVuY3Rpb24ob3RoZXJSZWNvZ25pemVyKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuc2ltdWx0YW5lb3VzW290aGVyUmVjb2duaXplci5pZF07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFlvdSBzaG91bGQgdXNlIGB0cnlFbWl0YCBpbnN0ZWFkIG9mIGBlbWl0YCBkaXJlY3RseSB0byBjaGVja1xuICAgICAqIHRoYXQgYWxsIHRoZSBuZWVkZWQgcmVjb2duaXplcnMgaGFzIGZhaWxlZCBiZWZvcmUgZW1pdHRpbmcuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGlucHV0XG4gICAgICovXG4gICAgZW1pdDogZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGZ1bmN0aW9uIGVtaXQoZXZlbnQpIHtcbiAgICAgICAgICAgIHNlbGYubWFuYWdlci5lbWl0KGV2ZW50LCBpbnB1dCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAncGFuc3RhcnQnIGFuZCAncGFubW92ZSdcbiAgICAgICAgaWYgKHN0YXRlIDwgU1RBVEVfRU5ERUQpIHtcbiAgICAgICAgICAgIGVtaXQoc2VsZi5vcHRpb25zLmV2ZW50ICsgc3RhdGVTdHIoc3RhdGUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVtaXQoc2VsZi5vcHRpb25zLmV2ZW50KTsgLy8gc2ltcGxlICdldmVudE5hbWUnIGV2ZW50c1xuXG4gICAgICAgIGlmIChpbnB1dC5hZGRpdGlvbmFsRXZlbnQpIHsgLy8gYWRkaXRpb25hbCBldmVudChwYW5sZWZ0LCBwYW5yaWdodCwgcGluY2hpbiwgcGluY2hvdXQuLi4pXG4gICAgICAgICAgICBlbWl0KGlucHV0LmFkZGl0aW9uYWxFdmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwYW5lbmQgYW5kIHBhbmNhbmNlbFxuICAgICAgICBpZiAoc3RhdGUgPj0gU1RBVEVfRU5ERUQpIHtcbiAgICAgICAgICAgIGVtaXQoc2VsZi5vcHRpb25zLmV2ZW50ICsgc3RhdGVTdHIoc3RhdGUpKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayB0aGF0IGFsbCB0aGUgcmVxdWlyZSBmYWlsdXJlIHJlY29nbml6ZXJzIGhhcyBmYWlsZWQsXG4gICAgICogaWYgdHJ1ZSwgaXQgZW1pdHMgYSBnZXN0dXJlIGV2ZW50LFxuICAgICAqIG90aGVyd2lzZSwgc2V0dXAgdGhlIHN0YXRlIHRvIEZBSUxFRC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaW5wdXRcbiAgICAgKi9cbiAgICB0cnlFbWl0OiBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICBpZiAodGhpcy5jYW5FbWl0KCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVtaXQoaW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGl0J3MgZmFpbGluZyBhbnl3YXlcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFX0ZBSUxFRDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogY2FuIHdlIGVtaXQ/XG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgY2FuRW1pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgd2hpbGUgKGkgPCB0aGlzLnJlcXVpcmVGYWlsLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKCEodGhpcy5yZXF1aXJlRmFpbFtpXS5zdGF0ZSAmIChTVEFURV9GQUlMRUQgfCBTVEFURV9QT1NTSUJMRSkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiB1cGRhdGUgdGhlIHJlY29nbml6ZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaW5wdXREYXRhXG4gICAgICovXG4gICAgcmVjb2duaXplOiBmdW5jdGlvbihpbnB1dERhdGEpIHtcbiAgICAgICAgLy8gbWFrZSBhIG5ldyBjb3B5IG9mIHRoZSBpbnB1dERhdGFcbiAgICAgICAgLy8gc28gd2UgY2FuIGNoYW5nZSB0aGUgaW5wdXREYXRhIHdpdGhvdXQgbWVzc2luZyB1cCB0aGUgb3RoZXIgcmVjb2duaXplcnNcbiAgICAgICAgdmFyIGlucHV0RGF0YUNsb25lID0gYXNzaWduKHt9LCBpbnB1dERhdGEpO1xuXG4gICAgICAgIC8vIGlzIGlzIGVuYWJsZWQgYW5kIGFsbG93IHJlY29nbml6aW5nP1xuICAgICAgICBpZiAoIWJvb2xPckZuKHRoaXMub3B0aW9ucy5lbmFibGUsIFt0aGlzLCBpbnB1dERhdGFDbG9uZV0pKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gU1RBVEVfRkFJTEVEO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVzZXQgd2hlbiB3ZSd2ZSByZWFjaGVkIHRoZSBlbmRcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgJiAoU1RBVEVfUkVDT0dOSVpFRCB8IFNUQVRFX0NBTkNFTExFRCB8IFNUQVRFX0ZBSUxFRCkpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBTVEFURV9QT1NTSUJMRTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLnByb2Nlc3MoaW5wdXREYXRhQ2xvbmUpO1xuXG4gICAgICAgIC8vIHRoZSByZWNvZ25pemVyIGhhcyByZWNvZ25pemVkIGEgZ2VzdHVyZVxuICAgICAgICAvLyBzbyB0cmlnZ2VyIGFuIGV2ZW50XG4gICAgICAgIGlmICh0aGlzLnN0YXRlICYgKFNUQVRFX0JFR0FOIHwgU1RBVEVfQ0hBTkdFRCB8IFNUQVRFX0VOREVEIHwgU1RBVEVfQ0FOQ0VMTEVEKSkge1xuICAgICAgICAgICAgdGhpcy50cnlFbWl0KGlucHV0RGF0YUNsb25lKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiByZXR1cm4gdGhlIHN0YXRlIG9mIHRoZSByZWNvZ25pemVyXG4gICAgICogdGhlIGFjdHVhbCByZWNvZ25pemluZyBoYXBwZW5zIGluIHRoaXMgbWV0aG9kXG4gICAgICogQHZpcnR1YWxcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaW5wdXREYXRhXG4gICAgICogQHJldHVybnMge0NvbnN0fSBTVEFURVxuICAgICAqL1xuICAgIHByb2Nlc3M6IGZ1bmN0aW9uKGlucHV0RGF0YSkgeyB9LCAvLyBqc2hpbnQgaWdub3JlOmxpbmVcblxuICAgIC8qKlxuICAgICAqIHJldHVybiB0aGUgcHJlZmVycmVkIHRvdWNoLWFjdGlvblxuICAgICAqIEB2aXJ0dWFsXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIGdldFRvdWNoQWN0aW9uOiBmdW5jdGlvbigpIHsgfSxcblxuICAgIC8qKlxuICAgICAqIGNhbGxlZCB3aGVuIHRoZSBnZXN0dXJlIGlzbid0IGFsbG93ZWQgdG8gcmVjb2duaXplXG4gICAgICogbGlrZSB3aGVuIGFub3RoZXIgaXMgYmVpbmcgcmVjb2duaXplZCBvciBpdCBpcyBkaXNhYmxlZFxuICAgICAqIEB2aXJ0dWFsXG4gICAgICovXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKCkgeyB9XG59O1xuXG4vKipcbiAqIGdldCBhIHVzYWJsZSBzdHJpbmcsIHVzZWQgYXMgZXZlbnQgcG9zdGZpeFxuICogQHBhcmFtIHtDb25zdH0gc3RhdGVcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHN0YXRlXG4gKi9cbmZ1bmN0aW9uIHN0YXRlU3RyKHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlICYgU1RBVEVfQ0FOQ0VMTEVEKSB7XG4gICAgICAgIHJldHVybiAnY2FuY2VsJztcbiAgICB9IGVsc2UgaWYgKHN0YXRlICYgU1RBVEVfRU5ERUQpIHtcbiAgICAgICAgcmV0dXJuICdlbmQnO1xuICAgIH0gZWxzZSBpZiAoc3RhdGUgJiBTVEFURV9DSEFOR0VEKSB7XG4gICAgICAgIHJldHVybiAnbW92ZSc7XG4gICAgfSBlbHNlIGlmIChzdGF0ZSAmIFNUQVRFX0JFR0FOKSB7XG4gICAgICAgIHJldHVybiAnc3RhcnQnO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogZGlyZWN0aW9uIGNvbnMgdG8gc3RyaW5nXG4gKiBAcGFyYW0ge0NvbnN0fSBkaXJlY3Rpb25cbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGRpcmVjdGlvblN0cihkaXJlY3Rpb24pIHtcbiAgICBpZiAoZGlyZWN0aW9uID09IERJUkVDVElPTl9ET1dOKSB7XG4gICAgICAgIHJldHVybiAnZG93bic7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gRElSRUNUSU9OX1VQKSB7XG4gICAgICAgIHJldHVybiAndXAnO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09IERJUkVDVElPTl9MRUZUKSB7XG4gICAgICAgIHJldHVybiAnbGVmdCc7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gRElSRUNUSU9OX1JJR0hUKSB7XG4gICAgICAgIHJldHVybiAncmlnaHQnO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogZ2V0IGEgcmVjb2duaXplciBieSBuYW1lIGlmIGl0IGlzIGJvdW5kIHRvIGEgbWFuYWdlclxuICogQHBhcmFtIHtSZWNvZ25pemVyfFN0cmluZ30gb3RoZXJSZWNvZ25pemVyXG4gKiBAcGFyYW0ge1JlY29nbml6ZXJ9IHJlY29nbml6ZXJcbiAqIEByZXR1cm5zIHtSZWNvZ25pemVyfVxuICovXG5mdW5jdGlvbiBnZXRSZWNvZ25pemVyQnlOYW1lSWZNYW5hZ2VyKG90aGVyUmVjb2duaXplciwgcmVjb2duaXplcikge1xuICAgIHZhciBtYW5hZ2VyID0gcmVjb2duaXplci5tYW5hZ2VyO1xuICAgIGlmIChtYW5hZ2VyKSB7XG4gICAgICAgIHJldHVybiBtYW5hZ2VyLmdldChvdGhlclJlY29nbml6ZXIpO1xuICAgIH1cbiAgICByZXR1cm4gb3RoZXJSZWNvZ25pemVyO1xufVxuXG4vKipcbiAqIFRoaXMgcmVjb2duaXplciBpcyBqdXN0IHVzZWQgYXMgYSBiYXNlIGZvciB0aGUgc2ltcGxlIGF0dHJpYnV0ZSByZWNvZ25pemVycy5cbiAqIEBjb25zdHJ1Y3RvclxuICogQGV4dGVuZHMgUmVjb2duaXplclxuICovXG5mdW5jdGlvbiBBdHRyUmVjb2duaXplcigpIHtcbiAgICBSZWNvZ25pemVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmluaGVyaXQoQXR0clJlY29nbml6ZXIsIFJlY29nbml6ZXIsIHtcbiAgICAvKipcbiAgICAgKiBAbmFtZXNwYWNlXG4gICAgICogQG1lbWJlcm9mIEF0dHJSZWNvZ25pemVyXG4gICAgICovXG4gICAgZGVmYXVsdHM6IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAgICAgICAqIEBkZWZhdWx0IDFcbiAgICAgICAgICovXG4gICAgICAgIHBvaW50ZXJzOiAxXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVzZWQgdG8gY2hlY2sgaWYgaXQgdGhlIHJlY29nbml6ZXIgcmVjZWl2ZXMgdmFsaWQgaW5wdXQsIGxpa2UgaW5wdXQuZGlzdGFuY2UgPiAxMC5cbiAgICAgKiBAbWVtYmVyb2YgQXR0clJlY29nbml6ZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaW5wdXRcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gcmVjb2duaXplZFxuICAgICAqL1xuICAgIGF0dHJUZXN0OiBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICB2YXIgb3B0aW9uUG9pbnRlcnMgPSB0aGlzLm9wdGlvbnMucG9pbnRlcnM7XG4gICAgICAgIHJldHVybiBvcHRpb25Qb2ludGVycyA9PT0gMCB8fCBpbnB1dC5wb2ludGVycy5sZW5ndGggPT09IG9wdGlvblBvaW50ZXJzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzIHRoZSBpbnB1dCBhbmQgcmV0dXJuIHRoZSBzdGF0ZSBmb3IgdGhlIHJlY29nbml6ZXJcbiAgICAgKiBAbWVtYmVyb2YgQXR0clJlY29nbml6ZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaW5wdXRcbiAgICAgKiBAcmV0dXJucyB7Kn0gU3RhdGVcbiAgICAgKi9cbiAgICBwcm9jZXNzOiBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgICAgICB2YXIgZXZlbnRUeXBlID0gaW5wdXQuZXZlbnRUeXBlO1xuXG4gICAgICAgIHZhciBpc1JlY29nbml6ZWQgPSBzdGF0ZSAmIChTVEFURV9CRUdBTiB8IFNUQVRFX0NIQU5HRUQpO1xuICAgICAgICB2YXIgaXNWYWxpZCA9IHRoaXMuYXR0clRlc3QoaW5wdXQpO1xuXG4gICAgICAgIC8vIG9uIGNhbmNlbCBpbnB1dCBhbmQgd2UndmUgcmVjb2duaXplZCBiZWZvcmUsIHJldHVybiBTVEFURV9DQU5DRUxMRURcbiAgICAgICAgaWYgKGlzUmVjb2duaXplZCAmJiAoZXZlbnRUeXBlICYgSU5QVVRfQ0FOQ0VMIHx8ICFpc1ZhbGlkKSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlIHwgU1RBVEVfQ0FOQ0VMTEVEO1xuICAgICAgICB9IGVsc2UgaWYgKGlzUmVjb2duaXplZCB8fCBpc1ZhbGlkKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnRUeXBlICYgSU5QVVRfRU5EKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlIHwgU1RBVEVfRU5ERUQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCEoc3RhdGUgJiBTVEFURV9CRUdBTikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gU1RBVEVfQkVHQU47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgfCBTVEFURV9DSEFOR0VEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTVEFURV9GQUlMRUQ7XG4gICAgfVxufSk7XG5cbi8qKlxuICogUGFuXG4gKiBSZWNvZ25pemVkIHdoZW4gdGhlIHBvaW50ZXIgaXMgZG93biBhbmQgbW92ZWQgaW4gdGhlIGFsbG93ZWQgZGlyZWN0aW9uLlxuICogQGNvbnN0cnVjdG9yXG4gKiBAZXh0ZW5kcyBBdHRyUmVjb2duaXplclxuICovXG5mdW5jdGlvbiBQYW5SZWNvZ25pemVyKCkge1xuICAgIEF0dHJSZWNvZ25pemVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICB0aGlzLnBYID0gbnVsbDtcbiAgICB0aGlzLnBZID0gbnVsbDtcbn1cblxuaW5oZXJpdChQYW5SZWNvZ25pemVyLCBBdHRyUmVjb2duaXplciwge1xuICAgIC8qKlxuICAgICAqIEBuYW1lc3BhY2VcbiAgICAgKiBAbWVtYmVyb2YgUGFuUmVjb2duaXplclxuICAgICAqL1xuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIGV2ZW50OiAncGFuJyxcbiAgICAgICAgdGhyZXNob2xkOiAxMCxcbiAgICAgICAgcG9pbnRlcnM6IDEsXG4gICAgICAgIGRpcmVjdGlvbjogRElSRUNUSU9OX0FMTFxuICAgIH0sXG5cbiAgICBnZXRUb3VjaEFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSB0aGlzLm9wdGlvbnMuZGlyZWN0aW9uO1xuICAgICAgICB2YXIgYWN0aW9ucyA9IFtdO1xuICAgICAgICBpZiAoZGlyZWN0aW9uICYgRElSRUNUSU9OX0hPUklaT05UQUwpIHtcbiAgICAgICAgICAgIGFjdGlvbnMucHVzaChUT1VDSF9BQ1RJT05fUEFOX1kpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkaXJlY3Rpb24gJiBESVJFQ1RJT05fVkVSVElDQUwpIHtcbiAgICAgICAgICAgIGFjdGlvbnMucHVzaChUT1VDSF9BQ1RJT05fUEFOX1gpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY3Rpb25zO1xuICAgIH0sXG5cbiAgICBkaXJlY3Rpb25UZXN0OiBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgdmFyIGhhc01vdmVkID0gdHJ1ZTtcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gaW5wdXQuZGlzdGFuY2U7XG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSBpbnB1dC5kaXJlY3Rpb247XG4gICAgICAgIHZhciB4ID0gaW5wdXQuZGVsdGFYO1xuICAgICAgICB2YXIgeSA9IGlucHV0LmRlbHRhWTtcblxuICAgICAgICAvLyBsb2NrIHRvIGF4aXM/XG4gICAgICAgIGlmICghKGRpcmVjdGlvbiAmIG9wdGlvbnMuZGlyZWN0aW9uKSkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGlyZWN0aW9uICYgRElSRUNUSU9OX0hPUklaT05UQUwpIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSAoeCA9PT0gMCkgPyBESVJFQ1RJT05fTk9ORSA6ICh4IDwgMCkgPyBESVJFQ1RJT05fTEVGVCA6IERJUkVDVElPTl9SSUdIVDtcbiAgICAgICAgICAgICAgICBoYXNNb3ZlZCA9IHggIT0gdGhpcy5wWDtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IE1hdGguYWJzKGlucHV0LmRlbHRhWCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9ICh5ID09PSAwKSA/IERJUkVDVElPTl9OT05FIDogKHkgPCAwKSA/IERJUkVDVElPTl9VUCA6IERJUkVDVElPTl9ET1dOO1xuICAgICAgICAgICAgICAgIGhhc01vdmVkID0geSAhPSB0aGlzLnBZO1xuICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5hYnMoaW5wdXQuZGVsdGFZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpbnB1dC5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICAgIHJldHVybiBoYXNNb3ZlZCAmJiBkaXN0YW5jZSA+IG9wdGlvbnMudGhyZXNob2xkICYmIGRpcmVjdGlvbiAmIG9wdGlvbnMuZGlyZWN0aW9uO1xuICAgIH0sXG5cbiAgICBhdHRyVGVzdDogZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIEF0dHJSZWNvZ25pemVyLnByb3RvdHlwZS5hdHRyVGVzdC5jYWxsKHRoaXMsIGlucHV0KSAmJlxuICAgICAgICAgICAgKHRoaXMuc3RhdGUgJiBTVEFURV9CRUdBTiB8fCAoISh0aGlzLnN0YXRlICYgU1RBVEVfQkVHQU4pICYmIHRoaXMuZGlyZWN0aW9uVGVzdChpbnB1dCkpKTtcbiAgICB9LFxuXG4gICAgZW1pdDogZnVuY3Rpb24oaW5wdXQpIHtcblxuICAgICAgICB0aGlzLnBYID0gaW5wdXQuZGVsdGFYO1xuICAgICAgICB0aGlzLnBZID0gaW5wdXQuZGVsdGFZO1xuXG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSBkaXJlY3Rpb25TdHIoaW5wdXQuZGlyZWN0aW9uKTtcblxuICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBpbnB1dC5hZGRpdGlvbmFsRXZlbnQgPSB0aGlzLm9wdGlvbnMuZXZlbnQgKyBkaXJlY3Rpb247XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3VwZXIuZW1pdC5jYWxsKHRoaXMsIGlucHV0KTtcbiAgICB9XG59KTtcblxuLyoqXG4gKiBQaW5jaFxuICogUmVjb2duaXplZCB3aGVuIHR3byBvciBtb3JlIHBvaW50ZXJzIGFyZSBtb3ZpbmcgdG93YXJkICh6b29tLWluKSBvciBhd2F5IGZyb20gZWFjaCBvdGhlciAoem9vbS1vdXQpLlxuICogQGNvbnN0cnVjdG9yXG4gKiBAZXh0ZW5kcyBBdHRyUmVjb2duaXplclxuICovXG5mdW5jdGlvbiBQaW5jaFJlY29nbml6ZXIoKSB7XG4gICAgQXR0clJlY29nbml6ZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuaW5oZXJpdChQaW5jaFJlY29nbml6ZXIsIEF0dHJSZWNvZ25pemVyLCB7XG4gICAgLyoqXG4gICAgICogQG5hbWVzcGFjZVxuICAgICAqIEBtZW1iZXJvZiBQaW5jaFJlY29nbml6ZXJcbiAgICAgKi9cbiAgICBkZWZhdWx0czoge1xuICAgICAgICBldmVudDogJ3BpbmNoJyxcbiAgICAgICAgdGhyZXNob2xkOiAwLFxuICAgICAgICBwb2ludGVyczogMlxuICAgIH0sXG5cbiAgICBnZXRUb3VjaEFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBbVE9VQ0hfQUNUSU9OX05PTkVdO1xuICAgIH0sXG5cbiAgICBhdHRyVGVzdDogZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1cGVyLmF0dHJUZXN0LmNhbGwodGhpcywgaW5wdXQpICYmXG4gICAgICAgICAgICAoTWF0aC5hYnMoaW5wdXQuc2NhbGUgLSAxKSA+IHRoaXMub3B0aW9ucy50aHJlc2hvbGQgfHwgdGhpcy5zdGF0ZSAmIFNUQVRFX0JFR0FOKTtcbiAgICB9LFxuXG4gICAgZW1pdDogZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgaWYgKGlucHV0LnNjYWxlICE9PSAxKSB7XG4gICAgICAgICAgICB2YXIgaW5PdXQgPSBpbnB1dC5zY2FsZSA8IDEgPyAnaW4nIDogJ291dCc7XG4gICAgICAgICAgICBpbnB1dC5hZGRpdGlvbmFsRXZlbnQgPSB0aGlzLm9wdGlvbnMuZXZlbnQgKyBpbk91dDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zdXBlci5lbWl0LmNhbGwodGhpcywgaW5wdXQpO1xuICAgIH1cbn0pO1xuXG4vKipcbiAqIFByZXNzXG4gKiBSZWNvZ25pemVkIHdoZW4gdGhlIHBvaW50ZXIgaXMgZG93biBmb3IgeCBtcyB3aXRob3V0IGFueSBtb3ZlbWVudC5cbiAqIEBjb25zdHJ1Y3RvclxuICogQGV4dGVuZHMgUmVjb2duaXplclxuICovXG5mdW5jdGlvbiBQcmVzc1JlY29nbml6ZXIoKSB7XG4gICAgUmVjb2duaXplci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgdGhpcy5fdGltZXIgPSBudWxsO1xuICAgIHRoaXMuX2lucHV0ID0gbnVsbDtcbn1cblxuaW5oZXJpdChQcmVzc1JlY29nbml6ZXIsIFJlY29nbml6ZXIsIHtcbiAgICAvKipcbiAgICAgKiBAbmFtZXNwYWNlXG4gICAgICogQG1lbWJlcm9mIFByZXNzUmVjb2duaXplclxuICAgICAqL1xuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIGV2ZW50OiAncHJlc3MnLFxuICAgICAgICBwb2ludGVyczogMSxcbiAgICAgICAgdGltZTogMjUxLCAvLyBtaW5pbWFsIHRpbWUgb2YgdGhlIHBvaW50ZXIgdG8gYmUgcHJlc3NlZFxuICAgICAgICB0aHJlc2hvbGQ6IDkgLy8gYSBtaW5pbWFsIG1vdmVtZW50IGlzIG9rLCBidXQga2VlcCBpdCBsb3dcbiAgICB9LFxuXG4gICAgZ2V0VG91Y2hBY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gW1RPVUNIX0FDVElPTl9BVVRPXTtcbiAgICB9LFxuXG4gICAgcHJvY2VzczogZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIHZhciB2YWxpZFBvaW50ZXJzID0gaW5wdXQucG9pbnRlcnMubGVuZ3RoID09PSBvcHRpb25zLnBvaW50ZXJzO1xuICAgICAgICB2YXIgdmFsaWRNb3ZlbWVudCA9IGlucHV0LmRpc3RhbmNlIDwgb3B0aW9ucy50aHJlc2hvbGQ7XG4gICAgICAgIHZhciB2YWxpZFRpbWUgPSBpbnB1dC5kZWx0YVRpbWUgPiBvcHRpb25zLnRpbWU7XG5cbiAgICAgICAgdGhpcy5faW5wdXQgPSBpbnB1dDtcblxuICAgICAgICAvLyB3ZSBvbmx5IGFsbG93IGxpdHRsZSBtb3ZlbWVudFxuICAgICAgICAvLyBhbmQgd2UndmUgcmVhY2hlZCBhbiBlbmQgZXZlbnQsIHNvIGEgdGFwIGlzIHBvc3NpYmxlXG4gICAgICAgIGlmICghdmFsaWRNb3ZlbWVudCB8fCAhdmFsaWRQb2ludGVycyB8fCAoaW5wdXQuZXZlbnRUeXBlICYgKElOUFVUX0VORCB8IElOUFVUX0NBTkNFTCkgJiYgIXZhbGlkVGltZSkpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChpbnB1dC5ldmVudFR5cGUgJiBJTlBVVF9TVEFSVCkge1xuICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICAgICAgdGhpcy5fdGltZXIgPSBzZXRUaW1lb3V0Q29udGV4dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gU1RBVEVfUkVDT0dOSVpFRDtcbiAgICAgICAgICAgICAgICB0aGlzLnRyeUVtaXQoKTtcbiAgICAgICAgICAgIH0sIG9wdGlvbnMudGltZSwgdGhpcyk7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5wdXQuZXZlbnRUeXBlICYgSU5QVVRfRU5EKSB7XG4gICAgICAgICAgICByZXR1cm4gU1RBVEVfUkVDT0dOSVpFRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU1RBVEVfRkFJTEVEO1xuICAgIH0sXG5cbiAgICByZXNldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lcik7XG4gICAgfSxcblxuICAgIGVtaXQ6IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBTVEFURV9SRUNPR05JWkVEKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5wdXQgJiYgKGlucHV0LmV2ZW50VHlwZSAmIElOUFVUX0VORCkpIHtcbiAgICAgICAgICAgIHRoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCArICd1cCcsIGlucHV0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2lucHV0LnRpbWVTdGFtcCA9IG5vdygpO1xuICAgICAgICAgICAgdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50LCB0aGlzLl9pbnB1dCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuLyoqXG4gKiBSb3RhdGVcbiAqIFJlY29nbml6ZWQgd2hlbiB0d28gb3IgbW9yZSBwb2ludGVyIGFyZSBtb3ZpbmcgaW4gYSBjaXJjdWxhciBtb3Rpb24uXG4gKiBAY29uc3RydWN0b3JcbiAqIEBleHRlbmRzIEF0dHJSZWNvZ25pemVyXG4gKi9cbmZ1bmN0aW9uIFJvdGF0ZVJlY29nbml6ZXIoKSB7XG4gICAgQXR0clJlY29nbml6ZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuaW5oZXJpdChSb3RhdGVSZWNvZ25pemVyLCBBdHRyUmVjb2duaXplciwge1xuICAgIC8qKlxuICAgICAqIEBuYW1lc3BhY2VcbiAgICAgKiBAbWVtYmVyb2YgUm90YXRlUmVjb2duaXplclxuICAgICAqL1xuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIGV2ZW50OiAncm90YXRlJyxcbiAgICAgICAgdGhyZXNob2xkOiAwLFxuICAgICAgICBwb2ludGVyczogMlxuICAgIH0sXG5cbiAgICBnZXRUb3VjaEFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBbVE9VQ0hfQUNUSU9OX05PTkVdO1xuICAgIH0sXG5cbiAgICBhdHRyVGVzdDogZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1cGVyLmF0dHJUZXN0LmNhbGwodGhpcywgaW5wdXQpICYmXG4gICAgICAgICAgICAoTWF0aC5hYnMoaW5wdXQucm90YXRpb24pID4gdGhpcy5vcHRpb25zLnRocmVzaG9sZCB8fCB0aGlzLnN0YXRlICYgU1RBVEVfQkVHQU4pO1xuICAgIH1cbn0pO1xuXG4vKipcbiAqIFN3aXBlXG4gKiBSZWNvZ25pemVkIHdoZW4gdGhlIHBvaW50ZXIgaXMgbW92aW5nIGZhc3QgKHZlbG9jaXR5KSwgd2l0aCBlbm91Z2ggZGlzdGFuY2UgaW4gdGhlIGFsbG93ZWQgZGlyZWN0aW9uLlxuICogQGNvbnN0cnVjdG9yXG4gKiBAZXh0ZW5kcyBBdHRyUmVjb2duaXplclxuICovXG5mdW5jdGlvbiBTd2lwZVJlY29nbml6ZXIoKSB7XG4gICAgQXR0clJlY29nbml6ZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuaW5oZXJpdChTd2lwZVJlY29nbml6ZXIsIEF0dHJSZWNvZ25pemVyLCB7XG4gICAgLyoqXG4gICAgICogQG5hbWVzcGFjZVxuICAgICAqIEBtZW1iZXJvZiBTd2lwZVJlY29nbml6ZXJcbiAgICAgKi9cbiAgICBkZWZhdWx0czoge1xuICAgICAgICBldmVudDogJ3N3aXBlJyxcbiAgICAgICAgdGhyZXNob2xkOiAxMCxcbiAgICAgICAgdmVsb2NpdHk6IDAuMyxcbiAgICAgICAgZGlyZWN0aW9uOiBESVJFQ1RJT05fSE9SSVpPTlRBTCB8IERJUkVDVElPTl9WRVJUSUNBTCxcbiAgICAgICAgcG9pbnRlcnM6IDFcbiAgICB9LFxuXG4gICAgZ2V0VG91Y2hBY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gUGFuUmVjb2duaXplci5wcm90b3R5cGUuZ2V0VG91Y2hBY3Rpb24uY2FsbCh0aGlzKTtcbiAgICB9LFxuXG4gICAgYXR0clRlc3Q6IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSB0aGlzLm9wdGlvbnMuZGlyZWN0aW9uO1xuICAgICAgICB2YXIgdmVsb2NpdHk7XG5cbiAgICAgICAgaWYgKGRpcmVjdGlvbiAmIChESVJFQ1RJT05fSE9SSVpPTlRBTCB8IERJUkVDVElPTl9WRVJUSUNBTCkpIHtcbiAgICAgICAgICAgIHZlbG9jaXR5ID0gaW5wdXQub3ZlcmFsbFZlbG9jaXR5O1xuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiAmIERJUkVDVElPTl9IT1JJWk9OVEFMKSB7XG4gICAgICAgICAgICB2ZWxvY2l0eSA9IGlucHV0Lm92ZXJhbGxWZWxvY2l0eVg7XG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uICYgRElSRUNUSU9OX1ZFUlRJQ0FMKSB7XG4gICAgICAgICAgICB2ZWxvY2l0eSA9IGlucHV0Lm92ZXJhbGxWZWxvY2l0eVk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fc3VwZXIuYXR0clRlc3QuY2FsbCh0aGlzLCBpbnB1dCkgJiZcbiAgICAgICAgICAgIGRpcmVjdGlvbiAmIGlucHV0Lm9mZnNldERpcmVjdGlvbiAmJlxuICAgICAgICAgICAgaW5wdXQuZGlzdGFuY2UgPiB0aGlzLm9wdGlvbnMudGhyZXNob2xkICYmXG4gICAgICAgICAgICBpbnB1dC5tYXhQb2ludGVycyA9PSB0aGlzLm9wdGlvbnMucG9pbnRlcnMgJiZcbiAgICAgICAgICAgIGFicyh2ZWxvY2l0eSkgPiB0aGlzLm9wdGlvbnMudmVsb2NpdHkgJiYgaW5wdXQuZXZlbnRUeXBlICYgSU5QVVRfRU5EO1xuICAgIH0sXG5cbiAgICBlbWl0OiBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICB2YXIgZGlyZWN0aW9uID0gZGlyZWN0aW9uU3RyKGlucHV0Lm9mZnNldERpcmVjdGlvbik7XG4gICAgICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCArIGRpcmVjdGlvbiwgaW5wdXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50LCBpbnB1dCk7XG4gICAgfVxufSk7XG5cbi8qKlxuICogQSB0YXAgaXMgZWNvZ25pemVkIHdoZW4gdGhlIHBvaW50ZXIgaXMgZG9pbmcgYSBzbWFsbCB0YXAvY2xpY2suIE11bHRpcGxlIHRhcHMgYXJlIHJlY29nbml6ZWQgaWYgdGhleSBvY2N1clxuICogYmV0d2VlbiB0aGUgZ2l2ZW4gaW50ZXJ2YWwgYW5kIHBvc2l0aW9uLiBUaGUgZGVsYXkgb3B0aW9uIGNhbiBiZSB1c2VkIHRvIHJlY29nbml6ZSBtdWx0aS10YXBzIHdpdGhvdXQgZmlyaW5nXG4gKiBhIHNpbmdsZSB0YXAuXG4gKlxuICogVGhlIGV2ZW50RGF0YSBmcm9tIHRoZSBlbWl0dGVkIGV2ZW50IGNvbnRhaW5zIHRoZSBwcm9wZXJ0eSBgdGFwQ291bnRgLCB3aGljaCBjb250YWlucyB0aGUgYW1vdW50IG9mXG4gKiBtdWx0aS10YXBzIGJlaW5nIHJlY29nbml6ZWQuXG4gKiBAY29uc3RydWN0b3JcbiAqIEBleHRlbmRzIFJlY29nbml6ZXJcbiAqL1xuZnVuY3Rpb24gVGFwUmVjb2duaXplcigpIHtcbiAgICBSZWNvZ25pemVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICAvLyBwcmV2aW91cyB0aW1lIGFuZCBjZW50ZXIsXG4gICAgLy8gdXNlZCBmb3IgdGFwIGNvdW50aW5nXG4gICAgdGhpcy5wVGltZSA9IGZhbHNlO1xuICAgIHRoaXMucENlbnRlciA9IGZhbHNlO1xuXG4gICAgdGhpcy5fdGltZXIgPSBudWxsO1xuICAgIHRoaXMuX2lucHV0ID0gbnVsbDtcbiAgICB0aGlzLmNvdW50ID0gMDtcbn1cblxuaW5oZXJpdChUYXBSZWNvZ25pemVyLCBSZWNvZ25pemVyLCB7XG4gICAgLyoqXG4gICAgICogQG5hbWVzcGFjZVxuICAgICAqIEBtZW1iZXJvZiBQaW5jaFJlY29nbml6ZXJcbiAgICAgKi9cbiAgICBkZWZhdWx0czoge1xuICAgICAgICBldmVudDogJ3RhcCcsXG4gICAgICAgIHBvaW50ZXJzOiAxLFxuICAgICAgICB0YXBzOiAxLFxuICAgICAgICBpbnRlcnZhbDogMzAwLCAvLyBtYXggdGltZSBiZXR3ZWVuIHRoZSBtdWx0aS10YXAgdGFwc1xuICAgICAgICB0aW1lOiAyNTAsIC8vIG1heCB0aW1lIG9mIHRoZSBwb2ludGVyIHRvIGJlIGRvd24gKGxpa2UgZmluZ2VyIG9uIHRoZSBzY3JlZW4pXG4gICAgICAgIHRocmVzaG9sZDogOSwgLy8gYSBtaW5pbWFsIG1vdmVtZW50IGlzIG9rLCBidXQga2VlcCBpdCBsb3dcbiAgICAgICAgcG9zVGhyZXNob2xkOiAxMCAvLyBhIG11bHRpLXRhcCBjYW4gYmUgYSBiaXQgb2ZmIHRoZSBpbml0aWFsIHBvc2l0aW9uXG4gICAgfSxcblxuICAgIGdldFRvdWNoQWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFtUT1VDSF9BQ1RJT05fTUFOSVBVTEFUSU9OXTtcbiAgICB9LFxuXG4gICAgcHJvY2VzczogZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgICAgdmFyIHZhbGlkUG9pbnRlcnMgPSBpbnB1dC5wb2ludGVycy5sZW5ndGggPT09IG9wdGlvbnMucG9pbnRlcnM7XG4gICAgICAgIHZhciB2YWxpZE1vdmVtZW50ID0gaW5wdXQuZGlzdGFuY2UgPCBvcHRpb25zLnRocmVzaG9sZDtcbiAgICAgICAgdmFyIHZhbGlkVG91Y2hUaW1lID0gaW5wdXQuZGVsdGFUaW1lIDwgb3B0aW9ucy50aW1lO1xuXG4gICAgICAgIHRoaXMucmVzZXQoKTtcblxuICAgICAgICBpZiAoKGlucHV0LmV2ZW50VHlwZSAmIElOUFVUX1NUQVJUKSAmJiAodGhpcy5jb3VudCA9PT0gMCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZhaWxUaW1lb3V0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB3ZSBvbmx5IGFsbG93IGxpdHRsZSBtb3ZlbWVudFxuICAgICAgICAvLyBhbmQgd2UndmUgcmVhY2hlZCBhbiBlbmQgZXZlbnQsIHNvIGEgdGFwIGlzIHBvc3NpYmxlXG4gICAgICAgIGlmICh2YWxpZE1vdmVtZW50ICYmIHZhbGlkVG91Y2hUaW1lICYmIHZhbGlkUG9pbnRlcnMpIHtcbiAgICAgICAgICAgIGlmIChpbnB1dC5ldmVudFR5cGUgIT0gSU5QVVRfRU5EKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmFpbFRpbWVvdXQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHZhbGlkSW50ZXJ2YWwgPSB0aGlzLnBUaW1lID8gKGlucHV0LnRpbWVTdGFtcCAtIHRoaXMucFRpbWUgPCBvcHRpb25zLmludGVydmFsKSA6IHRydWU7XG4gICAgICAgICAgICB2YXIgdmFsaWRNdWx0aVRhcCA9ICF0aGlzLnBDZW50ZXIgfHwgZ2V0RGlzdGFuY2UodGhpcy5wQ2VudGVyLCBpbnB1dC5jZW50ZXIpIDwgb3B0aW9ucy5wb3NUaHJlc2hvbGQ7XG5cbiAgICAgICAgICAgIHRoaXMucFRpbWUgPSBpbnB1dC50aW1lU3RhbXA7XG4gICAgICAgICAgICB0aGlzLnBDZW50ZXIgPSBpbnB1dC5jZW50ZXI7XG5cbiAgICAgICAgICAgIGlmICghdmFsaWRNdWx0aVRhcCB8fCAhdmFsaWRJbnRlcnZhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY291bnQgPSAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50ICs9IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2lucHV0ID0gaW5wdXQ7XG5cbiAgICAgICAgICAgIC8vIGlmIHRhcCBjb3VudCBtYXRjaGVzIHdlIGhhdmUgcmVjb2duaXplZCBpdCxcbiAgICAgICAgICAgIC8vIGVsc2UgaXQgaGFzIGJlZ2FuIHJlY29nbml6aW5nLi4uXG4gICAgICAgICAgICB2YXIgdGFwQ291bnQgPSB0aGlzLmNvdW50ICUgb3B0aW9ucy50YXBzO1xuICAgICAgICAgICAgaWYgKHRhcENvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gbm8gZmFpbGluZyByZXF1aXJlbWVudHMsIGltbWVkaWF0ZWx5IHRyaWdnZXIgdGhlIHRhcCBldmVudFxuICAgICAgICAgICAgICAgIC8vIG9yIHdhaXQgYXMgbG9uZyBhcyB0aGUgbXVsdGl0YXAgaW50ZXJ2YWwgdG8gdHJpZ2dlclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5oYXNSZXF1aXJlRmFpbHVyZXMoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU1RBVEVfUkVDT0dOSVpFRDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl90aW1lciA9IHNldFRpbWVvdXRDb250ZXh0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFX1JFQ09HTklaRUQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyeUVtaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgb3B0aW9ucy5pbnRlcnZhbCwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTVEFURV9CRUdBTjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFNUQVRFX0ZBSUxFRDtcbiAgICB9LFxuXG4gICAgZmFpbFRpbWVvdXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLl90aW1lciA9IHNldFRpbWVvdXRDb250ZXh0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFX0ZBSUxFRDtcbiAgICAgICAgfSwgdGhpcy5vcHRpb25zLmludGVydmFsLCB0aGlzKTtcbiAgICAgICAgcmV0dXJuIFNUQVRFX0ZBSUxFRDtcbiAgICB9LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpO1xuICAgIH0sXG5cbiAgICBlbWl0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT0gU1RBVEVfUkVDT0dOSVpFRCkge1xuICAgICAgICAgICAgdGhpcy5faW5wdXQudGFwQ291bnQgPSB0aGlzLmNvdW50O1xuICAgICAgICAgICAgdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50LCB0aGlzLl9pbnB1dCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuLyoqXG4gKiBTaW1wbGUgd2F5IHRvIGNyZWF0ZSBhIG1hbmFnZXIgd2l0aCBhIGRlZmF1bHQgc2V0IG9mIHJlY29nbml6ZXJzLlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEhhbW1lcihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9ucy5yZWNvZ25pemVycyA9IGlmVW5kZWZpbmVkKG9wdGlvbnMucmVjb2duaXplcnMsIEhhbW1lci5kZWZhdWx0cy5wcmVzZXQpO1xuICAgIHJldHVybiBuZXcgTWFuYWdlcihlbGVtZW50LCBvcHRpb25zKTtcbn1cblxuLyoqXG4gKiBAY29uc3Qge3N0cmluZ31cbiAqL1xuSGFtbWVyLlZFUlNJT04gPSAnMi4wLjcnO1xuXG4vKipcbiAqIGRlZmF1bHQgc2V0dGluZ3NcbiAqIEBuYW1lc3BhY2VcbiAqL1xuSGFtbWVyLmRlZmF1bHRzID0ge1xuICAgIC8qKlxuICAgICAqIHNldCBpZiBET00gZXZlbnRzIGFyZSBiZWluZyB0cmlnZ2VyZWQuXG4gICAgICogQnV0IHRoaXMgaXMgc2xvd2VyIGFuZCB1bnVzZWQgYnkgc2ltcGxlIGltcGxlbWVudGF0aW9ucywgc28gZGlzYWJsZWQgYnkgZGVmYXVsdC5cbiAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIGRvbUV2ZW50czogZmFsc2UsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgZm9yIHRoZSB0b3VjaEFjdGlvbiBwcm9wZXJ0eS9mYWxsYmFjay5cbiAgICAgKiBXaGVuIHNldCB0byBgY29tcHV0ZWAgaXQgd2lsbCBtYWdpY2FsbHkgc2V0IHRoZSBjb3JyZWN0IHZhbHVlIGJhc2VkIG9uIHRoZSBhZGRlZCByZWNvZ25pemVycy5cbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAqIEBkZWZhdWx0IGNvbXB1dGVcbiAgICAgKi9cbiAgICB0b3VjaEFjdGlvbjogVE9VQ0hfQUNUSU9OX0NPTVBVVEUsXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICovXG4gICAgZW5hYmxlOiB0cnVlLFxuXG4gICAgLyoqXG4gICAgICogRVhQRVJJTUVOVEFMIEZFQVRVUkUgLS0gY2FuIGJlIHJlbW92ZWQvY2hhbmdlZFxuICAgICAqIENoYW5nZSB0aGUgcGFyZW50IGlucHV0IHRhcmdldCBlbGVtZW50LlxuICAgICAqIElmIE51bGwsIHRoZW4gaXQgaXMgYmVpbmcgc2V0IHRoZSB0byBtYWluIGVsZW1lbnQuXG4gICAgICogQHR5cGUge051bGx8RXZlbnRUYXJnZXR9XG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIGlucHV0VGFyZ2V0OiBudWxsLFxuXG4gICAgLyoqXG4gICAgICogZm9yY2UgYW4gaW5wdXQgY2xhc3NcbiAgICAgKiBAdHlwZSB7TnVsbHxGdW5jdGlvbn1cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgaW5wdXRDbGFzczogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIERlZmF1bHQgcmVjb2duaXplciBzZXR1cCB3aGVuIGNhbGxpbmcgYEhhbW1lcigpYFxuICAgICAqIFdoZW4gY3JlYXRpbmcgYSBuZXcgTWFuYWdlciB0aGVzZSB3aWxsIGJlIHNraXBwZWQuXG4gICAgICogQHR5cGUge0FycmF5fVxuICAgICAqL1xuICAgIHByZXNldDogW1xuICAgICAgICAvLyBSZWNvZ25pemVyQ2xhc3MsIG9wdGlvbnMsIFtyZWNvZ25pemVXaXRoLCAuLi5dLCBbcmVxdWlyZUZhaWx1cmUsIC4uLl1cbiAgICAgICAgW1JvdGF0ZVJlY29nbml6ZXIsIHtlbmFibGU6IGZhbHNlfV0sXG4gICAgICAgIFtQaW5jaFJlY29nbml6ZXIsIHtlbmFibGU6IGZhbHNlfSwgWydyb3RhdGUnXV0sXG4gICAgICAgIFtTd2lwZVJlY29nbml6ZXIsIHtkaXJlY3Rpb246IERJUkVDVElPTl9IT1JJWk9OVEFMfV0sXG4gICAgICAgIFtQYW5SZWNvZ25pemVyLCB7ZGlyZWN0aW9uOiBESVJFQ1RJT05fSE9SSVpPTlRBTH0sIFsnc3dpcGUnXV0sXG4gICAgICAgIFtUYXBSZWNvZ25pemVyXSxcbiAgICAgICAgW1RhcFJlY29nbml6ZXIsIHtldmVudDogJ2RvdWJsZXRhcCcsIHRhcHM6IDJ9LCBbJ3RhcCddXSxcbiAgICAgICAgW1ByZXNzUmVjb2duaXplcl1cbiAgICBdLFxuXG4gICAgLyoqXG4gICAgICogU29tZSBDU1MgcHJvcGVydGllcyBjYW4gYmUgdXNlZCB0byBpbXByb3ZlIHRoZSB3b3JraW5nIG9mIEhhbW1lci5cbiAgICAgKiBBZGQgdGhlbSB0byB0aGlzIG1ldGhvZCBhbmQgdGhleSB3aWxsIGJlIHNldCB3aGVuIGNyZWF0aW5nIGEgbmV3IE1hbmFnZXIuXG4gICAgICogQG5hbWVzcGFjZVxuICAgICAqL1xuICAgIGNzc1Byb3BzOiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNhYmxlcyB0ZXh0IHNlbGVjdGlvbiB0byBpbXByb3ZlIHRoZSBkcmFnZ2luZyBnZXN0dXJlLiBNYWlubHkgZm9yIGRlc2t0b3AgYnJvd3NlcnMuXG4gICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICAgICAqIEBkZWZhdWx0ICdub25lJ1xuICAgICAgICAgKi9cbiAgICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNhYmxlIHRoZSBXaW5kb3dzIFBob25lIGdyaXBwZXJzIHdoZW4gcHJlc3NpbmcgYW4gZWxlbWVudC5cbiAgICAgICAgICogQHR5cGUge1N0cmluZ31cbiAgICAgICAgICogQGRlZmF1bHQgJ25vbmUnXG4gICAgICAgICAqL1xuICAgICAgICB0b3VjaFNlbGVjdDogJ25vbmUnLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNhYmxlcyB0aGUgZGVmYXVsdCBjYWxsb3V0IHNob3duIHdoZW4geW91IHRvdWNoIGFuZCBob2xkIGEgdG91Y2ggdGFyZ2V0LlxuICAgICAgICAgKiBPbiBpT1MsIHdoZW4geW91IHRvdWNoIGFuZCBob2xkIGEgdG91Y2ggdGFyZ2V0IHN1Y2ggYXMgYSBsaW5rLCBTYWZhcmkgZGlzcGxheXNcbiAgICAgICAgICogYSBjYWxsb3V0IGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGxpbmsuIFRoaXMgcHJvcGVydHkgYWxsb3dzIHlvdSB0byBkaXNhYmxlIHRoYXQgY2FsbG91dC5cbiAgICAgICAgICogQHR5cGUge1N0cmluZ31cbiAgICAgICAgICogQGRlZmF1bHQgJ25vbmUnXG4gICAgICAgICAqL1xuICAgICAgICB0b3VjaENhbGxvdXQ6ICdub25lJyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU3BlY2lmaWVzIHdoZXRoZXIgem9vbWluZyBpcyBlbmFibGVkLiBVc2VkIGJ5IElFMTA+XG4gICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICAgICAqIEBkZWZhdWx0ICdub25lJ1xuICAgICAgICAgKi9cbiAgICAgICAgY29udGVudFpvb21pbmc6ICdub25lJyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU3BlY2lmaWVzIHRoYXQgYW4gZW50aXJlIGVsZW1lbnQgc2hvdWxkIGJlIGRyYWdnYWJsZSBpbnN0ZWFkIG9mIGl0cyBjb250ZW50cy4gTWFpbmx5IGZvciBkZXNrdG9wIGJyb3dzZXJzLlxuICAgICAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAgICAgKiBAZGVmYXVsdCAnbm9uZSdcbiAgICAgICAgICovXG4gICAgICAgIHVzZXJEcmFnOiAnbm9uZScsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE92ZXJyaWRlcyB0aGUgaGlnaGxpZ2h0IGNvbG9yIHNob3duIHdoZW4gdGhlIHVzZXIgdGFwcyBhIGxpbmsgb3IgYSBKYXZhU2NyaXB0XG4gICAgICAgICAqIGNsaWNrYWJsZSBlbGVtZW50IGluIGlPUy4gVGhpcyBwcm9wZXJ0eSBvYmV5cyB0aGUgYWxwaGEgdmFsdWUsIGlmIHNwZWNpZmllZC5cbiAgICAgICAgICogQHR5cGUge1N0cmluZ31cbiAgICAgICAgICogQGRlZmF1bHQgJ3JnYmEoMCwwLDAsMCknXG4gICAgICAgICAqL1xuICAgICAgICB0YXBIaWdobGlnaHRDb2xvcjogJ3JnYmEoMCwwLDAsMCknXG4gICAgfVxufTtcblxudmFyIFNUT1AgPSAxO1xudmFyIEZPUkNFRF9TVE9QID0gMjtcblxuLyoqXG4gKiBNYW5hZ2VyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gTWFuYWdlcihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gYXNzaWduKHt9LCBIYW1tZXIuZGVmYXVsdHMsIG9wdGlvbnMgfHwge30pO1xuXG4gICAgdGhpcy5vcHRpb25zLmlucHV0VGFyZ2V0ID0gdGhpcy5vcHRpb25zLmlucHV0VGFyZ2V0IHx8IGVsZW1lbnQ7XG5cbiAgICB0aGlzLmhhbmRsZXJzID0ge307XG4gICAgdGhpcy5zZXNzaW9uID0ge307XG4gICAgdGhpcy5yZWNvZ25pemVycyA9IFtdO1xuICAgIHRoaXMub2xkQ3NzUHJvcHMgPSB7fTtcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5pbnB1dCA9IGNyZWF0ZUlucHV0SW5zdGFuY2UodGhpcyk7XG4gICAgdGhpcy50b3VjaEFjdGlvbiA9IG5ldyBUb3VjaEFjdGlvbih0aGlzLCB0aGlzLm9wdGlvbnMudG91Y2hBY3Rpb24pO1xuXG4gICAgdG9nZ2xlQ3NzUHJvcHModGhpcywgdHJ1ZSk7XG5cbiAgICBlYWNoKHRoaXMub3B0aW9ucy5yZWNvZ25pemVycywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICB2YXIgcmVjb2duaXplciA9IHRoaXMuYWRkKG5ldyAoaXRlbVswXSkoaXRlbVsxXSkpO1xuICAgICAgICBpdGVtWzJdICYmIHJlY29nbml6ZXIucmVjb2duaXplV2l0aChpdGVtWzJdKTtcbiAgICAgICAgaXRlbVszXSAmJiByZWNvZ25pemVyLnJlcXVpcmVGYWlsdXJlKGl0ZW1bM10pO1xuICAgIH0sIHRoaXMpO1xufVxuXG5NYW5hZ2VyLnByb3RvdHlwZSA9IHtcbiAgICAvKipcbiAgICAgKiBzZXQgb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHJldHVybnMge01hbmFnZXJ9XG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIGFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuXG4gICAgICAgIC8vIE9wdGlvbnMgdGhhdCBuZWVkIGEgbGl0dGxlIG1vcmUgc2V0dXBcbiAgICAgICAgaWYgKG9wdGlvbnMudG91Y2hBY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMudG91Y2hBY3Rpb24udXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuaW5wdXRUYXJnZXQpIHtcbiAgICAgICAgICAgIC8vIENsZWFuIHVwIGV4aXN0aW5nIGV2ZW50IGxpc3RlbmVycyBhbmQgcmVpbml0aWFsaXplXG4gICAgICAgICAgICB0aGlzLmlucHV0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQudGFyZ2V0ID0gb3B0aW9ucy5pbnB1dFRhcmdldDtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuaW5pdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBzdG9wIHJlY29nbml6aW5nIGZvciB0aGlzIHNlc3Npb24uXG4gICAgICogVGhpcyBzZXNzaW9uIHdpbGwgYmUgZGlzY2FyZGVkLCB3aGVuIGEgbmV3IFtpbnB1dF1zdGFydCBldmVudCBpcyBmaXJlZC5cbiAgICAgKiBXaGVuIGZvcmNlZCwgdGhlIHJlY29nbml6ZXIgY3ljbGUgaXMgc3RvcHBlZCBpbW1lZGlhdGVseS5cbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtmb3JjZV1cbiAgICAgKi9cbiAgICBzdG9wOiBmdW5jdGlvbihmb3JjZSkge1xuICAgICAgICB0aGlzLnNlc3Npb24uc3RvcHBlZCA9IGZvcmNlID8gRk9SQ0VEX1NUT1AgOiBTVE9QO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBydW4gdGhlIHJlY29nbml6ZXJzIVxuICAgICAqIGNhbGxlZCBieSB0aGUgaW5wdXRIYW5kbGVyIGZ1bmN0aW9uIG9uIGV2ZXJ5IG1vdmVtZW50IG9mIHRoZSBwb2ludGVycyAodG91Y2hlcylcbiAgICAgKiBpdCB3YWxrcyB0aHJvdWdoIGFsbCB0aGUgcmVjb2duaXplcnMgYW5kIHRyaWVzIHRvIGRldGVjdCB0aGUgZ2VzdHVyZSB0aGF0IGlzIGJlaW5nIG1hZGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaW5wdXREYXRhXG4gICAgICovXG4gICAgcmVjb2duaXplOiBmdW5jdGlvbihpbnB1dERhdGEpIHtcbiAgICAgICAgdmFyIHNlc3Npb24gPSB0aGlzLnNlc3Npb247XG4gICAgICAgIGlmIChzZXNzaW9uLnN0b3BwZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJ1biB0aGUgdG91Y2gtYWN0aW9uIHBvbHlmaWxsXG4gICAgICAgIHRoaXMudG91Y2hBY3Rpb24ucHJldmVudERlZmF1bHRzKGlucHV0RGF0YSk7XG5cbiAgICAgICAgdmFyIHJlY29nbml6ZXI7XG4gICAgICAgIHZhciByZWNvZ25pemVycyA9IHRoaXMucmVjb2duaXplcnM7XG5cbiAgICAgICAgLy8gdGhpcyBob2xkcyB0aGUgcmVjb2duaXplciB0aGF0IGlzIGJlaW5nIHJlY29nbml6ZWQuXG4gICAgICAgIC8vIHNvIHRoZSByZWNvZ25pemVyJ3Mgc3RhdGUgbmVlZHMgdG8gYmUgQkVHQU4sIENIQU5HRUQsIEVOREVEIG9yIFJFQ09HTklaRURcbiAgICAgICAgLy8gaWYgbm8gcmVjb2duaXplciBpcyBkZXRlY3RpbmcgYSB0aGluZywgaXQgaXMgc2V0IHRvIGBudWxsYFxuICAgICAgICB2YXIgY3VyUmVjb2duaXplciA9IHNlc3Npb24uY3VyUmVjb2duaXplcjtcblxuICAgICAgICAvLyByZXNldCB3aGVuIHRoZSBsYXN0IHJlY29nbml6ZXIgaXMgcmVjb2duaXplZFxuICAgICAgICAvLyBvciB3aGVuIHdlJ3JlIGluIGEgbmV3IHNlc3Npb25cbiAgICAgICAgaWYgKCFjdXJSZWNvZ25pemVyIHx8IChjdXJSZWNvZ25pemVyICYmIGN1clJlY29nbml6ZXIuc3RhdGUgJiBTVEFURV9SRUNPR05JWkVEKSkge1xuICAgICAgICAgICAgY3VyUmVjb2duaXplciA9IHNlc3Npb24uY3VyUmVjb2duaXplciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHdoaWxlIChpIDwgcmVjb2duaXplcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZWNvZ25pemVyID0gcmVjb2duaXplcnNbaV07XG5cbiAgICAgICAgICAgIC8vIGZpbmQgb3V0IGlmIHdlIGFyZSBhbGxvd2VkIHRyeSB0byByZWNvZ25pemUgdGhlIGlucHV0IGZvciB0aGlzIG9uZS5cbiAgICAgICAgICAgIC8vIDEuICAgYWxsb3cgaWYgdGhlIHNlc3Npb24gaXMgTk9UIGZvcmNlZCBzdG9wcGVkIChzZWUgdGhlIC5zdG9wKCkgbWV0aG9kKVxuICAgICAgICAgICAgLy8gMi4gICBhbGxvdyBpZiB3ZSBzdGlsbCBoYXZlbid0IHJlY29nbml6ZWQgYSBnZXN0dXJlIGluIHRoaXMgc2Vzc2lvbiwgb3IgdGhlIHRoaXMgcmVjb2duaXplciBpcyB0aGUgb25lXG4gICAgICAgICAgICAvLyAgICAgIHRoYXQgaXMgYmVpbmcgcmVjb2duaXplZC5cbiAgICAgICAgICAgIC8vIDMuICAgYWxsb3cgaWYgdGhlIHJlY29nbml6ZXIgaXMgYWxsb3dlZCB0byBydW4gc2ltdWx0YW5lb3VzIHdpdGggdGhlIGN1cnJlbnQgcmVjb2duaXplZCByZWNvZ25pemVyLlxuICAgICAgICAgICAgLy8gICAgICB0aGlzIGNhbiBiZSBzZXR1cCB3aXRoIHRoZSBgcmVjb2duaXplV2l0aCgpYCBtZXRob2Qgb24gdGhlIHJlY29nbml6ZXIuXG4gICAgICAgICAgICBpZiAoc2Vzc2lvbi5zdG9wcGVkICE9PSBGT1JDRURfU1RPUCAmJiAoIC8vIDFcbiAgICAgICAgICAgICAgICAgICAgIWN1clJlY29nbml6ZXIgfHwgcmVjb2duaXplciA9PSBjdXJSZWNvZ25pemVyIHx8IC8vIDJcbiAgICAgICAgICAgICAgICAgICAgcmVjb2duaXplci5jYW5SZWNvZ25pemVXaXRoKGN1clJlY29nbml6ZXIpKSkgeyAvLyAzXG4gICAgICAgICAgICAgICAgcmVjb2duaXplci5yZWNvZ25pemUoaW5wdXREYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVjb2duaXplci5yZXNldCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiB0aGUgcmVjb2duaXplciBoYXMgYmVlbiByZWNvZ25pemluZyB0aGUgaW5wdXQgYXMgYSB2YWxpZCBnZXN0dXJlLCB3ZSB3YW50IHRvIHN0b3JlIHRoaXMgb25lIGFzIHRoZVxuICAgICAgICAgICAgLy8gY3VycmVudCBhY3RpdmUgcmVjb2duaXplci4gYnV0IG9ubHkgaWYgd2UgZG9uJ3QgYWxyZWFkeSBoYXZlIGFuIGFjdGl2ZSByZWNvZ25pemVyXG4gICAgICAgICAgICBpZiAoIWN1clJlY29nbml6ZXIgJiYgcmVjb2duaXplci5zdGF0ZSAmIChTVEFURV9CRUdBTiB8IFNUQVRFX0NIQU5HRUQgfCBTVEFURV9FTkRFRCkpIHtcbiAgICAgICAgICAgICAgICBjdXJSZWNvZ25pemVyID0gc2Vzc2lvbi5jdXJSZWNvZ25pemVyID0gcmVjb2duaXplcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBnZXQgYSByZWNvZ25pemVyIGJ5IGl0cyBldmVudCBuYW1lLlxuICAgICAqIEBwYXJhbSB7UmVjb2duaXplcnxTdHJpbmd9IHJlY29nbml6ZXJcbiAgICAgKiBAcmV0dXJucyB7UmVjb2duaXplcnxOdWxsfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24ocmVjb2duaXplcikge1xuICAgICAgICBpZiAocmVjb2duaXplciBpbnN0YW5jZW9mIFJlY29nbml6ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiByZWNvZ25pemVyO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlY29nbml6ZXJzID0gdGhpcy5yZWNvZ25pemVycztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWNvZ25pemVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHJlY29nbml6ZXJzW2ldLm9wdGlvbnMuZXZlbnQgPT0gcmVjb2duaXplcikge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWNvZ25pemVyc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogYWRkIGEgcmVjb2duaXplciB0byB0aGUgbWFuYWdlclxuICAgICAqIGV4aXN0aW5nIHJlY29nbml6ZXJzIHdpdGggdGhlIHNhbWUgZXZlbnQgbmFtZSB3aWxsIGJlIHJlbW92ZWRcbiAgICAgKiBAcGFyYW0ge1JlY29nbml6ZXJ9IHJlY29nbml6ZXJcbiAgICAgKiBAcmV0dXJucyB7UmVjb2duaXplcnxNYW5hZ2VyfVxuICAgICAqL1xuICAgIGFkZDogZnVuY3Rpb24ocmVjb2duaXplcikge1xuICAgICAgICBpZiAoaW52b2tlQXJyYXlBcmcocmVjb2duaXplciwgJ2FkZCcsIHRoaXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlbW92ZSBleGlzdGluZ1xuICAgICAgICB2YXIgZXhpc3RpbmcgPSB0aGlzLmdldChyZWNvZ25pemVyLm9wdGlvbnMuZXZlbnQpO1xuICAgICAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKGV4aXN0aW5nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVjb2duaXplcnMucHVzaChyZWNvZ25pemVyKTtcbiAgICAgICAgcmVjb2duaXplci5tYW5hZ2VyID0gdGhpcztcblxuICAgICAgICB0aGlzLnRvdWNoQWN0aW9uLnVwZGF0ZSgpO1xuICAgICAgICByZXR1cm4gcmVjb2duaXplcjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogcmVtb3ZlIGEgcmVjb2duaXplciBieSBuYW1lIG9yIGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtSZWNvZ25pemVyfFN0cmluZ30gcmVjb2duaXplclxuICAgICAqIEByZXR1cm5zIHtNYW5hZ2VyfVxuICAgICAqL1xuICAgIHJlbW92ZTogZnVuY3Rpb24ocmVjb2duaXplcikge1xuICAgICAgICBpZiAoaW52b2tlQXJyYXlBcmcocmVjb2duaXplciwgJ3JlbW92ZScsIHRoaXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJlY29nbml6ZXIgPSB0aGlzLmdldChyZWNvZ25pemVyKTtcblxuICAgICAgICAvLyBsZXQncyBtYWtlIHN1cmUgdGhpcyByZWNvZ25pemVyIGV4aXN0c1xuICAgICAgICBpZiAocmVjb2duaXplcikge1xuICAgICAgICAgICAgdmFyIHJlY29nbml6ZXJzID0gdGhpcy5yZWNvZ25pemVycztcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGluQXJyYXkocmVjb2duaXplcnMsIHJlY29nbml6ZXIpO1xuXG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmVjb2duaXplcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoQWN0aW9uLnVwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIGJpbmQgZXZlbnRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRzXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlclxuICAgICAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IHRoaXNcbiAgICAgKi9cbiAgICBvbjogZnVuY3Rpb24oZXZlbnRzLCBoYW5kbGVyKSB7XG4gICAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnM7XG4gICAgICAgIGVhY2goc3BsaXRTdHIoZXZlbnRzKSwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGhhbmRsZXJzW2V2ZW50XSA9IGhhbmRsZXJzW2V2ZW50XSB8fCBbXTtcbiAgICAgICAgICAgIGhhbmRsZXJzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIHVuYmluZCBldmVudCwgbGVhdmUgZW1pdCBibGFuayB0byByZW1vdmUgYWxsIGhhbmRsZXJzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50c1xuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFtoYW5kbGVyXVxuICAgICAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IHRoaXNcbiAgICAgKi9cbiAgICBvZmY6IGZ1bmN0aW9uKGV2ZW50cywgaGFuZGxlcikge1xuICAgICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnM7XG4gICAgICAgIGVhY2goc3BsaXRTdHIoZXZlbnRzKSwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICghaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBoYW5kbGVyc1tldmVudF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJzW2V2ZW50XSAmJiBoYW5kbGVyc1tldmVudF0uc3BsaWNlKGluQXJyYXkoaGFuZGxlcnNbZXZlbnRdLCBoYW5kbGVyKSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogZW1pdCBldmVudCB0byB0aGUgbGlzdGVuZXJzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBlbWl0OiBmdW5jdGlvbihldmVudCwgZGF0YSkge1xuICAgICAgICAvLyB3ZSBhbHNvIHdhbnQgdG8gdHJpZ2dlciBkb20gZXZlbnRzXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZG9tRXZlbnRzKSB7XG4gICAgICAgICAgICB0cmlnZ2VyRG9tRXZlbnQoZXZlbnQsIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbm8gaGFuZGxlcnMsIHNvIHNraXAgaXQgYWxsXG4gICAgICAgIHZhciBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNbZXZlbnRdICYmIHRoaXMuaGFuZGxlcnNbZXZlbnRdLnNsaWNlKCk7XG4gICAgICAgIGlmICghaGFuZGxlcnMgfHwgIWhhbmRsZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YS50eXBlID0gZXZlbnQ7XG4gICAgICAgIGRhdGEucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRhdGEuc3JjRXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHdoaWxlIChpIDwgaGFuZGxlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBoYW5kbGVyc1tpXShkYXRhKTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBkZXN0cm95IHRoZSBtYW5hZ2VyIGFuZCB1bmJpbmRzIGFsbCBldmVudHNcbiAgICAgKiBpdCBkb2Vzbid0IHVuYmluZCBkb20gZXZlbnRzLCB0aGF0IGlzIHRoZSB1c2VyIG93biByZXNwb25zaWJpbGl0eVxuICAgICAqL1xuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgJiYgdG9nZ2xlQ3NzUHJvcHModGhpcywgZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuaGFuZGxlcnMgPSB7fTtcbiAgICAgICAgdGhpcy5zZXNzaW9uID0ge307XG4gICAgICAgIHRoaXMuaW5wdXQuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgIH1cbn07XG5cbi8qKlxuICogYWRkL3JlbW92ZSB0aGUgY3NzIHByb3BlcnRpZXMgYXMgZGVmaW5lZCBpbiBtYW5hZ2VyLm9wdGlvbnMuY3NzUHJvcHNcbiAqIEBwYXJhbSB7TWFuYWdlcn0gbWFuYWdlclxuICogQHBhcmFtIHtCb29sZWFufSBhZGRcbiAqL1xuZnVuY3Rpb24gdG9nZ2xlQ3NzUHJvcHMobWFuYWdlciwgYWRkKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBtYW5hZ2VyLmVsZW1lbnQ7XG4gICAgaWYgKCFlbGVtZW50LnN0eWxlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHByb3A7XG4gICAgZWFjaChtYW5hZ2VyLm9wdGlvbnMuY3NzUHJvcHMsIGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHByb3AgPSBwcmVmaXhlZChlbGVtZW50LnN0eWxlLCBuYW1lKTtcbiAgICAgICAgaWYgKGFkZCkge1xuICAgICAgICAgICAgbWFuYWdlci5vbGRDc3NQcm9wc1twcm9wXSA9IGVsZW1lbnQuc3R5bGVbcHJvcF07XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlW3Byb3BdID0gbWFuYWdlci5vbGRDc3NQcm9wc1twcm9wXSB8fCAnJztcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmICghYWRkKSB7XG4gICAgICAgIG1hbmFnZXIub2xkQ3NzUHJvcHMgPSB7fTtcbiAgICB9XG59XG5cbi8qKlxuICogdHJpZ2dlciBkb20gZXZlbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAqL1xuZnVuY3Rpb24gdHJpZ2dlckRvbUV2ZW50KGV2ZW50LCBkYXRhKSB7XG4gICAgdmFyIGdlc3R1cmVFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgIGdlc3R1cmVFdmVudC5pbml0RXZlbnQoZXZlbnQsIHRydWUsIHRydWUpO1xuICAgIGdlc3R1cmVFdmVudC5nZXN0dXJlID0gZGF0YTtcbiAgICBkYXRhLnRhcmdldC5kaXNwYXRjaEV2ZW50KGdlc3R1cmVFdmVudCk7XG59XG5cbmFzc2lnbihIYW1tZXIsIHtcbiAgICBJTlBVVF9TVEFSVDogSU5QVVRfU1RBUlQsXG4gICAgSU5QVVRfTU9WRTogSU5QVVRfTU9WRSxcbiAgICBJTlBVVF9FTkQ6IElOUFVUX0VORCxcbiAgICBJTlBVVF9DQU5DRUw6IElOUFVUX0NBTkNFTCxcblxuICAgIFNUQVRFX1BPU1NJQkxFOiBTVEFURV9QT1NTSUJMRSxcbiAgICBTVEFURV9CRUdBTjogU1RBVEVfQkVHQU4sXG4gICAgU1RBVEVfQ0hBTkdFRDogU1RBVEVfQ0hBTkdFRCxcbiAgICBTVEFURV9FTkRFRDogU1RBVEVfRU5ERUQsXG4gICAgU1RBVEVfUkVDT0dOSVpFRDogU1RBVEVfUkVDT0dOSVpFRCxcbiAgICBTVEFURV9DQU5DRUxMRUQ6IFNUQVRFX0NBTkNFTExFRCxcbiAgICBTVEFURV9GQUlMRUQ6IFNUQVRFX0ZBSUxFRCxcblxuICAgIERJUkVDVElPTl9OT05FOiBESVJFQ1RJT05fTk9ORSxcbiAgICBESVJFQ1RJT05fTEVGVDogRElSRUNUSU9OX0xFRlQsXG4gICAgRElSRUNUSU9OX1JJR0hUOiBESVJFQ1RJT05fUklHSFQsXG4gICAgRElSRUNUSU9OX1VQOiBESVJFQ1RJT05fVVAsXG4gICAgRElSRUNUSU9OX0RPV046IERJUkVDVElPTl9ET1dOLFxuICAgIERJUkVDVElPTl9IT1JJWk9OVEFMOiBESVJFQ1RJT05fSE9SSVpPTlRBTCxcbiAgICBESVJFQ1RJT05fVkVSVElDQUw6IERJUkVDVElPTl9WRVJUSUNBTCxcbiAgICBESVJFQ1RJT05fQUxMOiBESVJFQ1RJT05fQUxMLFxuXG4gICAgTWFuYWdlcjogTWFuYWdlcixcbiAgICBJbnB1dDogSW5wdXQsXG4gICAgVG91Y2hBY3Rpb246IFRvdWNoQWN0aW9uLFxuXG4gICAgVG91Y2hJbnB1dDogVG91Y2hJbnB1dCxcbiAgICBNb3VzZUlucHV0OiBNb3VzZUlucHV0LFxuICAgIFBvaW50ZXJFdmVudElucHV0OiBQb2ludGVyRXZlbnRJbnB1dCxcbiAgICBUb3VjaE1vdXNlSW5wdXQ6IFRvdWNoTW91c2VJbnB1dCxcbiAgICBTaW5nbGVUb3VjaElucHV0OiBTaW5nbGVUb3VjaElucHV0LFxuXG4gICAgUmVjb2duaXplcjogUmVjb2duaXplcixcbiAgICBBdHRyUmVjb2duaXplcjogQXR0clJlY29nbml6ZXIsXG4gICAgVGFwOiBUYXBSZWNvZ25pemVyLFxuICAgIFBhbjogUGFuUmVjb2duaXplcixcbiAgICBTd2lwZTogU3dpcGVSZWNvZ25pemVyLFxuICAgIFBpbmNoOiBQaW5jaFJlY29nbml6ZXIsXG4gICAgUm90YXRlOiBSb3RhdGVSZWNvZ25pemVyLFxuICAgIFByZXNzOiBQcmVzc1JlY29nbml6ZXIsXG5cbiAgICBvbjogYWRkRXZlbnRMaXN0ZW5lcnMsXG4gICAgb2ZmOiByZW1vdmVFdmVudExpc3RlbmVycyxcbiAgICBlYWNoOiBlYWNoLFxuICAgIG1lcmdlOiBtZXJnZSxcbiAgICBleHRlbmQ6IGV4dGVuZCxcbiAgICBhc3NpZ246IGFzc2lnbixcbiAgICBpbmhlcml0OiBpbmhlcml0LFxuICAgIGJpbmRGbjogYmluZEZuLFxuICAgIHByZWZpeGVkOiBwcmVmaXhlZFxufSk7XG5cbi8vIHRoaXMgcHJldmVudHMgZXJyb3JzIHdoZW4gSGFtbWVyIGlzIGxvYWRlZCBpbiB0aGUgcHJlc2VuY2Ugb2YgYW4gQU1EXG4vLyAgc3R5bGUgbG9hZGVyIGJ1dCBieSBzY3JpcHQgdGFnLCBub3QgYnkgdGhlIGxvYWRlci5cbnZhciBmcmVlR2xvYmFsID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB7fSkpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbmZyZWVHbG9iYWwuSGFtbWVyID0gSGFtbWVyO1xuXG5pZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gSGFtbWVyO1xuICAgIH0pO1xufSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBIYW1tZXI7XG59IGVsc2Uge1xuICAgIHdpbmRvd1tleHBvcnROYW1lXSA9IEhhbW1lcjtcbn1cblxufSkod2luZG93LCBkb2N1bWVudCwgJ0hhbW1lcicpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaGFtbWVyanMvaGFtbWVyLmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBtIGZyb20gXCJtaXRocmlsXCI7XG5cbi8qKlxuQHBhcmFte09iamVjdH0gYXJncyDjg5zjgr/jg7Pjga7jgqLjgq/jgrfjg6fjg7NcbkByZXR1cm57T2JqZWN0fVxuKi9cbmNvbnN0IGNoZWNrQnV0dG9ucyA9IGFyZ3MgPT4ge1xuICAgIHJldHVybiBtKFwiLmRpc3BsYXlGbGV4IGZsZXhfcm93XCIsIHtcbiAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICBcImZsZXhcIjogYXJncy5mbGV4LFxuICAgICAgICAgICAgXCJtYXJnaW4tYm90dG9tXCI6IFwiM3JlbVwiXG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIG0oXCJidXR0b25cIiwge1xuICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJmbGV4XCI6IFwiMVwiLFxuICAgICAgICAgICAgICAgIFwibWFyZ2luLXJpZ2h0XCI6IFwiMC41cmVtXCIsXG4gICAgICAgICAgICAgICAgXCJib3JkZXItY29sb3JcIjogXCIjZmI1OTczXCIsXG4gICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kXCI6IFwiI2ZiNTk3M1wiLFxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm9uY2xpY2tcIjogYXJncy5sLmFjdGlvblxuICAgICAgICB9LCBhcmdzLmwubGFiZWwpLFxuICAgICAgICBtKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgIFwiZmxleFwiOiBcIjFcIixcbiAgICAgICAgICAgICAgICBcIm1hcmdpbi1sZWZ0XCI6IFwiMC41cmVtXCIsXG4gICAgICAgICAgICAgICAgXCJib3JkZXItY29sb3JcIjogXCIjMWJlODlhXCIsXG4gICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kXCI6IFwiIzNhZTBhMVwiLFxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm9uY2xpY2tcIjogYXJncy5yLmFjdGlvblxuICAgICAgICB9LCBhcmdzLnIubGFiZWwpXG4gICAgXSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjaGVja0J1dHRvbnM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9lczYvY29tcG9uZW50cy9jaGVja0J1dHRvbnMuanNcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3NrZWxldG9uLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9za2VsZXRvbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9za2VsZXRvbi5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9ib3dlcl9jb21wb25lbnRzL3NrZWxldG9uL2Nzcy9za2VsZXRvbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiogU2tlbGV0b24gVjIuMC40XFxuKiBDb3B5cmlnaHQgMjAxNCwgRGF2ZSBHYW1hY2hlXFxuKiB3d3cuZ2V0c2tlbGV0b24uY29tXFxuKiBGcmVlIHRvIHVzZSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXFxuKiBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxcbiogMTIvMjkvMjAxNFxcbiovXFxuXFxuXFxuLyogVGFibGUgb2YgY29udGVudHNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJNcXG4tIEdyaWRcXG4tIEJhc2UgU3R5bGVzXFxuLSBUeXBvZ3JhcGh5XFxuLSBMaW5rc1xcbi0gQnV0dG9uc1xcbi0gRm9ybXNcXG4tIExpc3RzXFxuLSBDb2RlXFxuLSBUYWJsZXNcXG4tIFNwYWNpbmdcXG4tIFV0aWxpdGllc1xcbi0gQ2xlYXJpbmdcXG4tIE1lZGlhIFF1ZXJpZXNcXG4qL1xcblxcblxcbi8qIEdyaWRcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG4uY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA5NjBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcbi5jb2x1bW4sXFxuLmNvbHVtbnMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbG9hdDogbGVmdDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4vKiBGb3IgZGV2aWNlcyBsYXJnZXIgdGhhbiA0MDBweCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA0MDBweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIHBhZGRpbmc6IDA7IH1cXG59XFxuXFxuLyogRm9yIGRldmljZXMgbGFyZ2VyIHRoYW4gNTUwcHggKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICB3aWR0aDogODAlOyB9XFxuICAuY29sdW1uLFxcbiAgLmNvbHVtbnMge1xcbiAgICBtYXJnaW4tbGVmdDogNCU7IH1cXG4gIC5jb2x1bW46Zmlyc3QtY2hpbGQsXFxuICAuY29sdW1uczpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwOyB9XFxuXFxuICAub25lLmNvbHVtbixcXG4gIC5vbmUuY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNC42NjY2NjY2NjY2NyU7IH1cXG4gIC50d28uY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMTMuMzMzMzMzMzMzMyU7IH1cXG4gIC50aHJlZS5jb2x1bW5zICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMjIlOyAgICAgICAgICAgIH1cXG4gIC5mb3VyLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMzAuNjY2NjY2NjY2NyU7IH1cXG4gIC5maXZlLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMzkuMzMzMzMzMzMzMyU7IH1cXG4gIC5zaXguY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNDglOyAgICAgICAgICAgIH1cXG4gIC5zZXZlbi5jb2x1bW5zICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNTYuNjY2NjY2NjY2NyU7IH1cXG4gIC5laWdodC5jb2x1bW5zICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNjUuMzMzMzMzMzMzMyU7IH1cXG4gIC5uaW5lLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNzQuMCU7ICAgICAgICAgIH1cXG4gIC50ZW4uY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogODIuNjY2NjY2NjY2NyU7IH1cXG4gIC5lbGV2ZW4uY29sdW1ucyAgICAgICAgICAgICAgICAgeyB3aWR0aDogOTEuMzMzMzMzMzMzMyU7IH1cXG4gIC50d2VsdmUuY29sdW1ucyAgICAgICAgICAgICAgICAgeyB3aWR0aDogMTAwJTsgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4gIC5vbmUtdGhpcmQuY29sdW1uICAgICAgICAgICAgICAgeyB3aWR0aDogMzAuNjY2NjY2NjY2NyU7IH1cXG4gIC50d28tdGhpcmRzLmNvbHVtbiAgICAgICAgICAgICAgeyB3aWR0aDogNjUuMzMzMzMzMzMzMyU7IH1cXG5cXG4gIC5vbmUtaGFsZi5jb2x1bW4gICAgICAgICAgICAgICAgeyB3aWR0aDogNDglOyB9XFxuXFxuICAvKiBPZmZzZXRzICovXFxuICAub2Zmc2V0LWJ5LW9uZS5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LW9uZS5jb2x1bW5zICAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDguNjY2NjY2NjY2NjclOyB9XFxuICAub2Zmc2V0LWJ5LXR3by5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LXR3by5jb2x1bW5zICAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDE3LjMzMzMzMzMzMzMlOyB9XFxuICAub2Zmc2V0LWJ5LXRocmVlLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktdGhyZWUuY29sdW1ucyAgICAgICAgeyBtYXJnaW4tbGVmdDogMjYlOyAgICAgICAgICAgIH1cXG4gIC5vZmZzZXQtYnktZm91ci5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LWZvdXIuY29sdW1ucyAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDM0LjY2NjY2NjY2NjclOyB9XFxuICAub2Zmc2V0LWJ5LWZpdmUuY29sdW1uLFxcbiAgLm9mZnNldC1ieS1maXZlLmNvbHVtbnMgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA0My4zMzMzMzMzMzMzJTsgfVxcbiAgLm9mZnNldC1ieS1zaXguY29sdW1uLFxcbiAgLm9mZnNldC1ieS1zaXguY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA1MiU7ICAgICAgICAgICAgfVxcbiAgLm9mZnNldC1ieS1zZXZlbi5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LXNldmVuLmNvbHVtbnMgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDYwLjY2NjY2NjY2NjclOyB9XFxuICAub2Zmc2V0LWJ5LWVpZ2h0LmNvbHVtbixcXG4gIC5vZmZzZXQtYnktZWlnaHQuY29sdW1ucyAgICAgICAgeyBtYXJnaW4tbGVmdDogNjkuMzMzMzMzMzMzMyU7IH1cXG4gIC5vZmZzZXQtYnktbmluZS5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LW5pbmUuY29sdW1ucyAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDc4LjAlOyAgICAgICAgICB9XFxuICAub2Zmc2V0LWJ5LXRlbi5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LXRlbi5jb2x1bW5zICAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDg2LjY2NjY2NjY2NjclOyB9XFxuICAub2Zmc2V0LWJ5LWVsZXZlbi5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LWVsZXZlbi5jb2x1bW5zICAgICAgIHsgbWFyZ2luLWxlZnQ6IDk1LjMzMzMzMzMzMzMlOyB9XFxuXFxuICAub2Zmc2V0LWJ5LW9uZS10aGlyZC5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LW9uZS10aGlyZC5jb2x1bW5zICAgIHsgbWFyZ2luLWxlZnQ6IDM0LjY2NjY2NjY2NjclOyB9XFxuICAub2Zmc2V0LWJ5LXR3by10aGlyZHMuY29sdW1uLFxcbiAgLm9mZnNldC1ieS10d28tdGhpcmRzLmNvbHVtbnMgICB7IG1hcmdpbi1sZWZ0OiA2OS4zMzMzMzMzMzMzJTsgfVxcblxcbiAgLm9mZnNldC1ieS1vbmUtaGFsZi5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LW9uZS1oYWxmLmNvbHVtbnMgICAgIHsgbWFyZ2luLWxlZnQ6IDUyJTsgfVxcblxcbn1cXG5cXG5cXG4vKiBCYXNlIFN0eWxlc1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbi8qIE5PVEVcXG5odG1sIGlzIHNldCB0byA2Mi41JSBzbyB0aGF0IGFsbCB0aGUgUkVNIG1lYXN1cmVtZW50cyB0aHJvdWdob3V0IFNrZWxldG9uXFxuYXJlIGJhc2VkIG9uIDEwcHggc2l6aW5nLiBTbyBiYXNpY2FsbHkgMS41cmVtID0gMTVweCA6KSAqL1xcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTsgfVxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxLjVlbTsgLyogY3VycmVudGx5IGVtcyBjYXVzZSBjaHJvbWUgYnVnIG1pc2ludGVycHJldGluZyByZW1zIG9uIGJvZHkgZWxlbWVudCAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiLCBcXFwiSGVsdmV0aWNhTmV1ZVxcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogIzIyMjsgfVxcblxcblxcbi8qIFR5cG9ncmFwaHlcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDsgfVxcbmgxIHsgZm9udC1zaXplOiA0LjByZW07IGxpbmUtaGVpZ2h0OiAxLjI7ICBsZXR0ZXItc3BhY2luZzogLS4xcmVtO31cXG5oMiB7IGZvbnQtc2l6ZTogMy42cmVtOyBsaW5lLWhlaWdodDogMS4yNTsgbGV0dGVyLXNwYWNpbmc6IC0uMXJlbTsgfVxcbmgzIHsgZm9udC1zaXplOiAzLjByZW07IGxpbmUtaGVpZ2h0OiAxLjM7ICBsZXR0ZXItc3BhY2luZzogLS4xcmVtOyB9XFxuaDQgeyBmb250LXNpemU6IDIuNHJlbTsgbGluZS1oZWlnaHQ6IDEuMzU7IGxldHRlci1zcGFjaW5nOiAtLjA4cmVtOyB9XFxuaDUgeyBmb250LXNpemU6IDEuOHJlbTsgbGluZS1oZWlnaHQ6IDEuNTsgIGxldHRlci1zcGFjaW5nOiAtLjA1cmVtOyB9XFxuaDYgeyBmb250LXNpemU6IDEuNXJlbTsgbGluZS1oZWlnaHQ6IDEuNjsgIGxldHRlci1zcGFjaW5nOiAwOyB9XFxuXFxuLyogTGFyZ2VyIHRoYW4gcGhhYmxldCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xcbiAgaDEgeyBmb250LXNpemU6IDUuMHJlbTsgfVxcbiAgaDIgeyBmb250LXNpemU6IDQuMnJlbTsgfVxcbiAgaDMgeyBmb250LXNpemU6IDMuNnJlbTsgfVxcbiAgaDQgeyBmb250LXNpemU6IDMuMHJlbTsgfVxcbiAgaDUgeyBmb250LXNpemU6IDIuNHJlbTsgfVxcbiAgaDYgeyBmb250LXNpemU6IDEuNXJlbTsgfVxcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbi10b3A6IDA7IH1cXG5cXG5cXG4vKiBMaW5rc1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbmEge1xcbiAgY29sb3I6ICMxRUFFREI7IH1cXG5hOmhvdmVyIHtcXG4gIGNvbG9yOiAjMEZBMENFOyB9XFxuXFxuXFxuLyogQnV0dG9uc1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbi5idXR0b24sXFxuYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiAzOHB4O1xcbiAgcGFkZGluZzogMCAzMHB4O1xcbiAgY29sb3I6ICM1NTU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XFxuICBsZXR0ZXItc3BhY2luZzogLjFyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2JiYjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4uYnV0dG9uOmhvdmVyLFxcbmJ1dHRvbjpob3ZlcixcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlcixcXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdOmhvdmVyLFxcbmlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdOmhvdmVyLFxcbi5idXR0b246Zm9jdXMsXFxuYnV0dG9uOmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdOmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl06Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl06Zm9jdXMge1xcbiAgY29sb3I6ICMzMzM7XFxuICBib3JkZXItY29sb3I6ICM4ODg7XFxuICBvdXRsaW5lOiAwOyB9XFxuLmJ1dHRvbi5idXR0b24tcHJpbWFyeSxcXG5idXR0b24uYnV0dG9uLXByaW1hcnksXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0uYnV0dG9uLXByaW1hcnksXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXS5idXR0b24tcHJpbWFyeSxcXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXS5idXR0b24tcHJpbWFyeSB7XFxuICBjb2xvcjogI0ZGRjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzM0MzRjA7XFxuICBib3JkZXItY29sb3I6ICMzM0MzRjA7IH1cXG4uYnV0dG9uLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLFxcbmJ1dHRvbi5idXR0b24tcHJpbWFyeTpob3ZlcixcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXS5idXR0b24tcHJpbWFyeTpob3ZlcixcXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLFxcbmlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLFxcbi5idXR0b24uYnV0dG9uLXByaW1hcnk6Zm9jdXMsXFxuYnV0dG9uLmJ1dHRvbi1wcmltYXJ5OmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLmJ1dHRvbi1wcmltYXJ5OmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0uYnV0dG9uLXByaW1hcnk6Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0uYnV0dG9uLXByaW1hcnk6Zm9jdXMge1xcbiAgY29sb3I6ICNGRkY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUVBRURCO1xcbiAgYm9yZGVyLWNvbG9yOiAjMUVBRURCOyB9XFxuXFxuXFxuLyogRm9ybXNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG5pbnB1dFt0eXBlPVxcXCJlbWFpbFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJ0ZWxcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJ1cmxcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJwYXNzd29yZFxcXCJdLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBoZWlnaHQ6IDM4cHg7XFxuICBwYWRkaW5nOiA2cHggMTBweDsgLyogVGhlIDZweCB2ZXJ0aWNhbGx5IGNlbnRlcnMgdGV4dCBvbiBGRiwgaWdub3JlZCBieSBXZWJraXQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRDFEMUQxO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4vKiBSZW1vdmVzIGF3a3dhcmQgZGVmYXVsdCBzdHlsZXMgb24gc29tZSBpbnB1dHMgZm9yIGlPUyAqL1xcbmlucHV0W3R5cGU9XFxcImVtYWlsXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInRlbFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInVybFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInBhc3N3b3JkXFxcIl0sXFxudGV4dGFyZWEge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgICBhcHBlYXJhbmNlOiBub25lOyB9XFxudGV4dGFyZWEge1xcbiAgbWluLWhlaWdodDogNjVweDtcXG4gIHBhZGRpbmctdG9wOiA2cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNnB4OyB9XFxuaW5wdXRbdHlwZT1cXFwiZW1haWxcXFwiXTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwidGVsXFxcIl06Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwidXJsXFxcIl06Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwicGFzc3dvcmRcXFwiXTpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyxcXG5zZWxlY3Q6Zm9jdXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzQzNGMDtcXG4gIG91dGxpbmU6IDA7IH1cXG5sYWJlbCxcXG5sZWdlbmQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7IH1cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyLXdpZHRoOiAwOyB9XFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGRpc3BsYXk6IGlubGluZTsgfVxcbmxhYmVsID4gLmxhYmVsLWJvZHkge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IC41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxcblxcblxcbi8qIExpc3RzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxudWwge1xcbiAgbGlzdC1zdHlsZTogY2lyY2xlIGluc2lkZTsgfVxcbm9sIHtcXG4gIGxpc3Qtc3R5bGU6IGRlY2ltYWwgaW5zaWRlOyB9XFxub2wsIHVsIHtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG4gIG1hcmdpbi10b3A6IDA7IH1cXG51bCB1bCxcXG51bCBvbCxcXG5vbCBvbCxcXG5vbCB1bCB7XFxuICBtYXJnaW46IDEuNXJlbSAwIDEuNXJlbSAzcmVtO1xcbiAgZm9udC1zaXplOiA5MCU7IH1cXG5saSB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtOyB9XFxuXFxuXFxuLyogQ29kZVxcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbmNvZGUge1xcbiAgcGFkZGluZzogLjJyZW0gLjVyZW07XFxuICBtYXJnaW46IDAgLjJyZW07XFxuICBmb250LXNpemU6IDkwJTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBiYWNrZ3JvdW5kOiAjRjFGMUYxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0UxRTFFMTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDsgfVxcbnByZSA+IGNvZGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBwcmU7IH1cXG5cXG5cXG4vKiBUYWJsZXNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG50aCxcXG50ZCB7XFxuICBwYWRkaW5nOiAxMnB4IDE1cHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMUUxRTE7IH1cXG50aDpmaXJzdC1jaGlsZCxcXG50ZDpmaXJzdC1jaGlsZCB7XFxuICBwYWRkaW5nLWxlZnQ6IDA7IH1cXG50aDpsYXN0LWNoaWxkLFxcbnRkOmxhc3QtY2hpbGQge1xcbiAgcGFkZGluZy1yaWdodDogMDsgfVxcblxcblxcbi8qIFNwYWNpbmdcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG5idXR0b24sXFxuLmJ1dHRvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtOyB9XFxuaW5wdXQsXFxudGV4dGFyZWEsXFxuc2VsZWN0LFxcbmZpZWxkc2V0IHtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTsgfVxcbnByZSxcXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmZpZ3VyZSxcXG50YWJsZSxcXG5wLFxcbnVsLFxcbm9sLFxcbmZvcm0ge1xcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtOyB9XFxuXFxuXFxuLyogVXRpbGl0aWVzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuLnUtZnVsbC13aWR0aCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4udS1tYXgtZnVsbC13aWR0aCB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuLnUtcHVsbC1yaWdodCB7XFxuICBmbG9hdDogcmlnaHQ7IH1cXG4udS1wdWxsLWxlZnQge1xcbiAgZmxvYXQ6IGxlZnQ7IH1cXG5cXG5cXG4vKiBNaXNjXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuaHIge1xcbiAgbWFyZ2luLXRvcDogM3JlbTtcXG4gIG1hcmdpbi1ib3R0b206IDMuNXJlbTtcXG4gIGJvcmRlci13aWR0aDogMDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTFFMUUxOyB9XFxuXFxuXFxuLyogQ2xlYXJpbmdcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG5cXG4vKiBTZWxmIENsZWFyaW5nIEdvb2RuZXNzICovXFxuLmNvbnRhaW5lcjphZnRlcixcXG4ucm93OmFmdGVyLFxcbi51LWNmIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogdGFibGU7XFxuICBjbGVhcjogYm90aDsgfVxcblxcblxcbi8qIE1lZGlhIFF1ZXJpZXNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG4vKlxcbk5vdGU6IFRoZSBiZXN0IHdheSB0byBzdHJ1Y3R1cmUgdGhlIHVzZSBvZiBtZWRpYSBxdWVyaWVzIGlzIHRvIGNyZWF0ZSB0aGUgcXVlcmllc1xcbm5lYXIgdGhlIHJlbGV2YW50IGNvZGUuIEZvciBleGFtcGxlLCBpZiB5b3Ugd2FudGVkIHRvIGNoYW5nZSB0aGUgc3R5bGVzIGZvciBidXR0b25zXFxub24gc21hbGwgZGV2aWNlcywgcGFzdGUgdGhlIG1vYmlsZSBxdWVyeSBjb2RlIHVwIGluIHRoZSBidXR0b25zIHNlY3Rpb24gYW5kIHN0eWxlIGl0XFxudGhlcmUuXFxuKi9cXG5cXG5cXG4vKiBMYXJnZXIgdGhhbiBtb2JpbGUgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIHt9XFxuXFxuLyogTGFyZ2VyIHRoYW4gcGhhYmxldCAoYWxzbyBwb2ludCB3aGVuIGdyaWQgYmVjb21lcyBhY3RpdmUpICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7fVxcblxcbi8qIExhcmdlciB0aGFuIHRhYmxldCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge31cXG5cXG4vKiBMYXJnZXIgdGhhbiBkZXNrdG9wICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge31cXG5cXG4vKiBMYXJnZXIgdGhhbiBEZXNrdG9wIEhEICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge31cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vYm93ZXJfY29tcG9uZW50cy9za2VsZXRvbi9jc3Mvc2tlbGV0b24uY3NzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcclxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xyXG5cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcclxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xyXG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcclxuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcclxuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcclxuXHRpZihpZHggPj0gMCkge1xyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XHJcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcclxuXHJcblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXHJcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwKSB7XHJcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9hbmltYXRlLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9hbmltYXRlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2FuaW1hdGUuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYm93ZXJfY29tcG9uZW50cy9hbmltYXRlLmNzcy9hbmltYXRlLmNzc1xuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuXFxuLyohXFxuICogYW5pbWF0ZS5jc3MgLWh0dHA6Ly9kYW5lZGVuLm1lL2FuaW1hdGVcXG4gKiBWZXJzaW9uIC0gMy41LjBcXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgLSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXFxuICpcXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYgRGFuaWVsIEVkZW5cXG4gKi9cXG5cXG4uYW5pbWF0ZWQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxufVxcblxcbi5hbmltYXRlZC5pbmZpbml0ZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxufVxcblxcbi5hbmltYXRlZC5oaW5nZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xcbn1cXG5cXG4uYW5pbWF0ZWQuZmxpcE91dFgsXFxuLmFuaW1hdGVkLmZsaXBPdXRZLFxcbi5hbmltYXRlZC5ib3VuY2VJbixcXG4uYW5pbWF0ZWQuYm91bmNlT3V0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAuNzVzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuNzVzO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlIHtcXG4gIGZyb20sIDIwJSwgNTMlLCA4MCUsIHRvIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcXG4gIH1cXG5cXG4gIDQwJSwgNDMlIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUwLCAwLjg1NSwgMC4wNjApO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUwLCAwLjg1NSwgMC4wNjApO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0zMHB4LCAwKTtcXG4gIH1cXG5cXG4gIDcwJSB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1MCwgMC44NTUsIDAuMDYwKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1MCwgMC44NTUsIDAuMDYwKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xNXB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTVweCwgMCk7XFxuICB9XFxuXFxuICA5MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwtNHB4LDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsLTRweCwwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBib3VuY2Uge1xcbiAgZnJvbSwgMjAlLCA1MyUsIDgwJSwgdG8ge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xcbiAgfVxcblxcbiAgNDAlLCA0MyUge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgMC4wNTAsIDAuODU1LCAwLjA2MCk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgMC4wNTAsIDAuODU1LCAwLjA2MCk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMzBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwcHgsIDApO1xcbiAgfVxcblxcbiAgNzAlIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUwLCAwLjg1NSwgMC4wNjApO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUwLCAwLjg1NSwgMC4wNjApO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTE1cHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xNXB4LCAwKTtcXG4gIH1cXG5cXG4gIDkwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLC00cHgsMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwtNHB4LDApO1xcbiAgfVxcbn1cXG5cXG4uYm91bmNlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZTtcXG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2U7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmxhc2gge1xcbiAgZnJvbSwgNTAlLCB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICAyNSUsIDc1JSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmxhc2gge1xcbiAgZnJvbSwgNTAlLCB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICAyNSUsIDc1JSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbi5mbGFzaCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmbGFzaDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmbGFzaDtcXG59XFxuXFxuLyogb3JpZ2luYWxseSBhdXRob3JlZCBieSBOaWNrIFBldHRpdCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWNrcGV0dGl0L2dsaWRlICovXFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHB1bHNlIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4wNSwgMS4wNSwgMS4wNSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjA1LCAxLjA1LCAxLjA1KTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBwdWxzZSB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIDEuMDUsIDEuMDUpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4wNSwgMS4wNSwgMS4wNSk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxufVxcblxcbi5wdWxzZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBwdWxzZTtcXG4gIGFuaW1hdGlvbi1uYW1lOiBwdWxzZTtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHJ1YmJlckJhbmQge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxuXFxuICAzMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLjI1LCAwLjc1LCAxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMjUsIDAuNzUsIDEpO1xcbiAgfVxcblxcbiAgNDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC43NSwgMS4yNSwgMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjc1LCAxLjI1LCAxKTtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMTUsIDAuODUsIDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xNSwgMC44NSwgMSk7XFxuICB9XFxuXFxuICA2NSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCguOTUsIDEuMDUsIDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjk1LCAxLjA1LCAxKTtcXG4gIH1cXG5cXG4gIDc1JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIC45NSwgMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjA1LCAuOTUsIDEpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJ1YmJlckJhbmQge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxuXFxuICAzMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLjI1LCAwLjc1LCAxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMjUsIDAuNzUsIDEpO1xcbiAgfVxcblxcbiAgNDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC43NSwgMS4yNSwgMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjc1LCAxLjI1LCAxKTtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMTUsIDAuODUsIDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xNSwgMC44NSwgMSk7XFxuICB9XFxuXFxuICA2NSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCguOTUsIDEuMDUsIDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjk1LCAxLjA1LCAxKTtcXG4gIH1cXG5cXG4gIDc1JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIC45NSwgMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjA1LCAuOTUsIDEpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcbn1cXG5cXG4ucnViYmVyQmFuZCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBydWJiZXJCYW5kO1xcbiAgYW5pbWF0aW9uLW5hbWU6IHJ1YmJlckJhbmQ7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzaGFrZSB7XFxuICBmcm9tLCB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG5cXG4gIDEwJSwgMzAlLCA1MCUsIDcwJSwgOTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCk7XFxuICB9XFxuXFxuICAyMCUsIDQwJSwgNjAlLCA4MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTBweCwgMCwgMCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2hha2Uge1xcbiAgZnJvbSwgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxuXFxuICAxMCUsIDMwJSwgNTAlLCA3MCUsIDkwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApO1xcbiAgfVxcblxcbiAgMjAlLCA0MCUsIDYwJSwgODAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwcHgsIDAsIDApO1xcbiAgfVxcbn1cXG5cXG4uc2hha2Uge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2hha2U7XFxuICBhbmltYXRpb24tbmFtZTogc2hha2U7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBoZWFkU2hha2Uge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcblxcbiAgNi41JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02cHgpIHJvdGF0ZVkoLTlkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTZweCkgcm90YXRlWSgtOWRlZyk7XFxuICB9XFxuXFxuICAxOC41JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCkgcm90YXRlWSg3ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCkgcm90YXRlWSg3ZGVnKTtcXG4gIH1cXG5cXG4gIDMxLjUlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCkgcm90YXRlWSgtNWRlZyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KSByb3RhdGVZKC01ZGVnKTtcXG4gIH1cXG5cXG4gIDQzLjUlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnB4KSByb3RhdGVZKDNkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnB4KSByb3RhdGVZKDNkZWcpO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBoZWFkU2hha2Uge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcblxcbiAgNi41JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02cHgpIHJvdGF0ZVkoLTlkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTZweCkgcm90YXRlWSgtOWRlZyk7XFxuICB9XFxuXFxuICAxOC41JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCkgcm90YXRlWSg3ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCkgcm90YXRlWSg3ZGVnKTtcXG4gIH1cXG5cXG4gIDMxLjUlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCkgcm90YXRlWSgtNWRlZyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KSByb3RhdGVZKC01ZGVnKTtcXG4gIH1cXG5cXG4gIDQzLjUlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnB4KSByb3RhdGVZKDNkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnB4KSByb3RhdGVZKDNkZWcpO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG59XFxuXFxuLmhlYWRTaGFrZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBoZWFkU2hha2U7XFxuICBhbmltYXRpb24tbmFtZTogaGVhZFNoYWtlO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3dpbmcge1xcbiAgMjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDE1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAxNWRlZyk7XFxuICB9XFxuXFxuICA0MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTEwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtMTBkZWcpO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDVkZWcpO1xcbiAgfVxcblxcbiAgODAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC01ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNWRlZyk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAwZGVnKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzd2luZyB7XFxuICAyMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMTVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDE1ZGVnKTtcXG4gIH1cXG5cXG4gIDQwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtMTBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC0xMGRlZyk7XFxuICB9XFxuXFxuICA2MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNWRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNWRlZyk7XFxuICB9XFxuXFxuICA4MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC01ZGVnKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDBkZWcpO1xcbiAgfVxcbn1cXG5cXG4uc3dpbmcge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgY2VudGVyO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGNlbnRlcjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHN3aW5nO1xcbiAgYW5pbWF0aW9uLW5hbWU6IHN3aW5nO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgdGFkYSB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG5cXG4gIDEwJSwgMjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjksIC45LCAuOSkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjksIC45LCAuOSkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xcbiAgfVxcblxcbiAgMzAlLCA1MCUsIDcwJSwgOTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSkgcm90YXRlM2QoMCwgMCwgMSwgM2RlZyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKSByb3RhdGUzZCgwLCAwLCAxLCAzZGVnKTtcXG4gIH1cXG5cXG4gIDQwJSwgNjAlLCA4MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKSByb3RhdGUzZCgwLCAwLCAxLCAtM2RlZyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKSByb3RhdGUzZCgwLCAwLCAxLCAtM2RlZyk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgdGFkYSB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG5cXG4gIDEwJSwgMjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjksIC45LCAuOSkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjksIC45LCAuOSkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xcbiAgfVxcblxcbiAgMzAlLCA1MCUsIDcwJSwgOTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSkgcm90YXRlM2QoMCwgMCwgMSwgM2RlZyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKSByb3RhdGUzZCgwLCAwLCAxLCAzZGVnKTtcXG4gIH1cXG5cXG4gIDQwJSwgNjAlLCA4MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKSByb3RhdGUzZCgwLCAwLCAxLCAtM2RlZyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKSByb3RhdGUzZCgwLCAwLCAxLCAtM2RlZyk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxufVxcblxcbi50YWRhIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHRhZGE7XFxuICBhbmltYXRpb24tbmFtZTogdGFkYTtcXG59XFxuXFxuLyogb3JpZ2luYWxseSBhdXRob3JlZCBieSBOaWNrIFBldHRpdCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWNrcGV0dGl0L2dsaWRlICovXFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHdvYmJsZSB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gIH1cXG5cXG4gIDE1JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjUlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtNWRlZyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTVkZWcpO1xcbiAgfVxcblxcbiAgMzAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgM2RlZyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAzZGVnKTtcXG4gIH1cXG5cXG4gIDQ1JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTUlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtM2RlZyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE1JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgMmRlZyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAyZGVnKTtcXG4gIH1cXG5cXG4gIDc1JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNSUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC0xZGVnKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNSUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC0xZGVnKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyB3b2JibGUge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICB9XFxuXFxuICAxNSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNSUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC01ZGVnKTtcXG4gIH1cXG5cXG4gIDMwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIDNkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgM2RlZyk7XFxuICB9XFxuXFxuICA0NSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE1JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xNSUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC0zZGVnKTtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIDJkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgMmRlZyk7XFxuICB9XFxuXFxuICA3NSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtMWRlZyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtMWRlZyk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICB9XFxufVxcblxcbi53b2JibGUge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogd29iYmxlO1xcbiAgYW5pbWF0aW9uLW5hbWU6IHdvYmJsZTtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGplbGxvIHtcXG4gIGZyb20sIDExLjElLCB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICB9XFxuXFxuICAyMi4yJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgtMTIuNWRlZykgc2tld1koLTEyLjVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC0xMi41ZGVnKSBza2V3WSgtMTIuNWRlZyk7XFxuICB9XFxuXFxuICAzMy4zJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCg2LjI1ZGVnKSBza2V3WSg2LjI1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBza2V3WCg2LjI1ZGVnKSBza2V3WSg2LjI1ZGVnKTtcXG4gIH1cXG5cXG4gIDQ0LjQlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKC0zLjEyNWRlZykgc2tld1koLTMuMTI1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMy4xMjVkZWcpIHNrZXdZKC0zLjEyNWRlZyk7XFxuICB9XFxuXFxuICA1NS41JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgxLjU2MjVkZWcpIHNrZXdZKDEuNTYyNWRlZyk7XFxuICAgIHRyYW5zZm9ybTogc2tld1goMS41NjI1ZGVnKSBza2V3WSgxLjU2MjVkZWcpO1xcbiAgfVxcblxcbiAgNjYuNiUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTAuNzgxMjVkZWcpIHNrZXdZKC0wLjc4MTI1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMC43ODEyNWRlZykgc2tld1koLTAuNzgxMjVkZWcpO1xcbiAgfVxcblxcbiAgNzcuNyUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goMC4zOTA2MjVkZWcpIHNrZXdZKDAuMzkwNjI1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBza2V3WCgwLjM5MDYyNWRlZykgc2tld1koMC4zOTA2MjVkZWcpO1xcbiAgfVxcblxcbiAgODguOCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTAuMTk1MzEyNWRlZykgc2tld1koLTAuMTk1MzEyNWRlZyk7XFxuICAgIHRyYW5zZm9ybTogc2tld1goLTAuMTk1MzEyNWRlZykgc2tld1koLTAuMTk1MzEyNWRlZyk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgamVsbG8ge1xcbiAgZnJvbSwgMTEuMSUsIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gIH1cXG5cXG4gIDIyLjIlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKC0xMi41ZGVnKSBza2V3WSgtMTIuNWRlZyk7XFxuICAgIHRyYW5zZm9ybTogc2tld1goLTEyLjVkZWcpIHNrZXdZKC0xMi41ZGVnKTtcXG4gIH1cXG5cXG4gIDMzLjMlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKDYuMjVkZWcpIHNrZXdZKDYuMjVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDYuMjVkZWcpIHNrZXdZKDYuMjVkZWcpO1xcbiAgfVxcblxcbiAgNDQuNCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTMuMTI1ZGVnKSBza2V3WSgtMy4xMjVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC0zLjEyNWRlZykgc2tld1koLTMuMTI1ZGVnKTtcXG4gIH1cXG5cXG4gIDU1LjUlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKDEuNTYyNWRlZykgc2tld1koMS41NjI1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBza2V3WCgxLjU2MjVkZWcpIHNrZXdZKDEuNTYyNWRlZyk7XFxuICB9XFxuXFxuICA2Ni42JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgtMC43ODEyNWRlZykgc2tld1koLTAuNzgxMjVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC0wLjc4MTI1ZGVnKSBza2V3WSgtMC43ODEyNWRlZyk7XFxuICB9XFxuXFxuICA3Ny43JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgwLjM5MDYyNWRlZykgc2tld1koMC4zOTA2MjVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDAuMzkwNjI1ZGVnKSBza2V3WSgwLjM5MDYyNWRlZyk7XFxuICB9XFxuXFxuICA4OC44JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgtMC4xOTUzMTI1ZGVnKSBza2V3WSgtMC4xOTUzMTI1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMC4xOTUzMTI1ZGVnKSBza2V3WSgtMC4xOTUzMTI1ZGVnKTtcXG4gIH1cXG59XFxuXFxuLmplbGxvIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGplbGxvO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGplbGxvO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VJbiB7XFxuICBmcm9tLCAyMCUsIDQwJSwgNjAlLCA4MCUsIHRvIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApO1xcbiAgfVxcblxcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCguMywgLjMsIC4zKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC4zLCAuMywgLjMpO1xcbiAgfVxcblxcbiAgMjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKTtcXG4gIH1cXG5cXG4gIDQwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKC45LCAuOSwgLjkpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjksIC45LCAuOSk7XFxuICB9XFxuXFxuICA2MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLjAzLCAxLjAzLCAxLjAzKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDMsIDEuMDMsIDEuMDMpO1xcbiAgfVxcblxcbiAgODAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjk3LCAuOTcsIC45Nyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguOTcsIC45NywgLjk3KTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBib3VuY2VJbiB7XFxuICBmcm9tLCAyMCUsIDQwJSwgNjAlLCA4MCUsIHRvIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApO1xcbiAgfVxcblxcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCguMywgLjMsIC4zKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC4zLCAuMywgLjMpO1xcbiAgfVxcblxcbiAgMjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKTtcXG4gIH1cXG5cXG4gIDQwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKC45LCAuOSwgLjkpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjksIC45LCAuOSk7XFxuICB9XFxuXFxuICA2MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLjAzLCAxLjAzLCAxLjAzKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDMsIDEuMDMsIDEuMDMpO1xcbiAgfVxcblxcbiAgODAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjk3LCAuOTcsIC45Nyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguOTcsIC45NywgLjk3KTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG59XFxuXFxuLmJvdW5jZUluIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlSW5Eb3duIHtcXG4gIGZyb20sIDYwJSwgNzUlLCA5MCUsIHRvIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApO1xcbiAgfVxcblxcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwMDBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwMDBweCwgMCk7XFxuICB9XFxuXFxuICA2MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjVweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjVweCwgMCk7XFxuICB9XFxuXFxuICA3NSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKTtcXG4gIH1cXG5cXG4gIDkwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1cHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDVweCwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYm91bmNlSW5Eb3duIHtcXG4gIGZyb20sIDYwJSwgNzUlLCA5MCUsIHRvIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApO1xcbiAgfVxcblxcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwMDBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwMDBweCwgMCk7XFxuICB9XFxuXFxuICA2MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjVweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjVweCwgMCk7XFxuICB9XFxuXFxuICA3NSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKTtcXG4gIH1cXG5cXG4gIDkwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1cHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDVweCwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICB9XFxufVxcblxcbi5ib3VuY2VJbkRvd24ge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlSW5Eb3duO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluRG93bjtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZUluTGVmdCB7XFxuICBmcm9tLCA2MCUsIDc1JSwgOTAlLCB0byB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKTtcXG4gIH1cXG5cXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zMDAwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zMDAwcHgsIDAsIDApO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDI1cHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDI1cHgsIDAsIDApO1xcbiAgfVxcblxcbiAgNzUlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCk7XFxuICB9XFxuXFxuICA5MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNXB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg1cHgsIDAsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJvdW5jZUluTGVmdCB7XFxuICBmcm9tLCA2MCUsIDc1JSwgOTAlLCB0byB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKTtcXG4gIH1cXG5cXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zMDAwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zMDAwcHgsIDAsIDApO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDI1cHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDI1cHgsIDAsIDApO1xcbiAgfVxcblxcbiAgNzUlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCk7XFxuICB9XFxuXFxuICA5MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNXB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg1cHgsIDAsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgfVxcbn1cXG5cXG4uYm91bmNlSW5MZWZ0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluTGVmdDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJbkxlZnQ7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VJblJpZ2h0IHtcXG4gIGZyb20sIDYwJSwgNzUlLCA5MCUsIHRvIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApO1xcbiAgfVxcblxcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzMDAwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDMwMDBweCwgMCwgMCk7XFxuICB9XFxuXFxuICA2MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1cHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNXB4LCAwLCAwKTtcXG4gIH1cXG5cXG4gIDc1JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKTtcXG4gIH1cXG5cXG4gIDkwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNXB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNXB4LCAwLCAwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBib3VuY2VJblJpZ2h0IHtcXG4gIGZyb20sIDYwJSwgNzUlLCA5MCUsIHRvIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApO1xcbiAgfVxcblxcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzMDAwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDMwMDBweCwgMCwgMCk7XFxuICB9XFxuXFxuICA2MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1cHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNXB4LCAwLCAwKTtcXG4gIH1cXG5cXG4gIDc1JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKTtcXG4gIH1cXG5cXG4gIDkwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNXB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNXB4LCAwLCAwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gIH1cXG59XFxuXFxuLmJvdW5jZUluUmlnaHQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlSW5SaWdodDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJblJpZ2h0O1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlSW5VcCB7XFxuICBmcm9tLCA2MCUsIDc1JSwgOTAlLCB0byB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKTtcXG4gIH1cXG5cXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMzAwMHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAzMDAwcHgsIDApO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCk7XFxuICB9XFxuXFxuICA3NSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCk7XFxuICB9XFxuXFxuICA5MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTVweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTVweCwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBib3VuY2VJblVwIHtcXG4gIGZyb20sIDYwJSwgNzUlLCA5MCUsIHRvIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApO1xcbiAgfVxcblxcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAzMDAwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDMwMDBweCwgMCk7XFxuICB9XFxuXFxuICA2MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKTtcXG4gIH1cXG5cXG4gIDc1JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKTtcXG4gIH1cXG5cXG4gIDkwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNXB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNXB4LCAwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5cXG4uYm91bmNlSW5VcCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VJblVwO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluVXA7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VPdXQge1xcbiAgMjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjksIC45LCAuOSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguOSwgLjksIC45KTtcXG4gIH1cXG5cXG4gIDUwJSwgNTUlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjMsIC4zLCAuMyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguMywgLjMsIC4zKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBib3VuY2VPdXQge1xcbiAgMjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjksIC45LCAuOSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguOSwgLjksIC45KTtcXG4gIH1cXG5cXG4gIDUwJSwgNTUlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjMsIC4zLCAuMyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguMywgLjMsIC4zKTtcXG4gIH1cXG59XFxuXFxuLmJvdW5jZU91dCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VPdXQ7XFxuICBhbmltYXRpb24tbmFtZTogYm91bmNlT3V0O1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlT3V0RG93biB7XFxuICAyMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCk7XFxuICB9XFxuXFxuICA0MCUsIDQ1JSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJvdW5jZU91dERvd24ge1xcbiAgMjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApO1xcbiAgfVxcblxcbiAgNDAlLCA0NSUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwMDBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKTtcXG4gIH1cXG59XFxuXFxuLmJvdW5jZU91dERvd24ge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlT3V0RG93bjtcXG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VPdXREb3duO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlT3V0TGVmdCB7XFxuICAyMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjBweCwgMCwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAwMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAwMHB4LCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBib3VuY2VPdXRMZWZ0IHtcXG4gIDIwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMHB4LCAwLCAwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApO1xcbiAgfVxcbn1cXG5cXG4uYm91bmNlT3V0TGVmdCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VPdXRMZWZ0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZU91dExlZnQ7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VPdXRSaWdodCB7XFxuICAyMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMHB4LCAwLCAwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwMHB4LCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBib3VuY2VPdXRSaWdodCB7XFxuICAyMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMHB4LCAwLCAwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwMHB4LCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuLmJvdW5jZU91dFJpZ2h0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZU91dFJpZ2h0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZU91dFJpZ2h0O1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlT3V0VXAge1xcbiAgMjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCk7XFxuICB9XFxuXFxuICA0MCUsIDQ1JSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMHB4LCAwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMDAwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMDAwcHgsIDApO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJvdW5jZU91dFVwIHtcXG4gIDIwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApO1xcbiAgfVxcblxcbiAgNDAlLCA0NSUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjBweCwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjAwMHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjAwMHB4LCAwKTtcXG4gIH1cXG59XFxuXFxuLmJvdW5jZU91dFVwIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZU91dFVwO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZU91dFVwO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuLmZhZGVJbiB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XFxuICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluRG93biB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluRG93biB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICB9XFxufVxcblxcbi5mYWRlSW5Eb3duIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XFxuICBhbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkRvd25CaWcge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjAwMHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjAwMHB4LCAwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW5Eb3duQmlnIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICB9XFxufVxcblxcbi5mYWRlSW5Eb3duQmlnIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd25CaWc7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZUluRG93bkJpZztcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkxlZnQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbkxlZnQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgfVxcbn1cXG5cXG4uZmFkZUluTGVmdCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5MZWZ0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkxlZnQ7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5MZWZ0QmlnIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluTGVmdEJpZyB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgfVxcbn1cXG5cXG4uZmFkZUluTGVmdEJpZyB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5MZWZ0QmlnO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkxlZnRCaWc7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5SaWdodCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJblJpZ2h0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICB9XFxufVxcblxcbi5mYWRlSW5SaWdodCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5SaWdodDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5SaWdodDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJblJpZ2h0QmlnIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAwcHgsIDAsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJblJpZ2h0QmlnIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAwcHgsIDAsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgfVxcbn1cXG5cXG4uZmFkZUluUmlnaHRCaWcge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluUmlnaHRCaWc7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZUluUmlnaHRCaWc7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5VcCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICB9XFxufVxcblxcbi5mYWRlSW5VcCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5VcDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5VcDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJblVwQmlnIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJblVwQmlnIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgfVxcbn1cXG5cXG4uZmFkZUluVXBCaWcge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluVXBCaWc7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZUluVXBCaWc7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbi5mYWRlT3V0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXQ7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZU91dDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVPdXREb3duIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZU91dERvd24ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcXG4gIH1cXG59XFxuXFxuLmZhZGVPdXREb3duIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXREb3duO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXREb3duO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dERvd25CaWcge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwMDBweCwgMCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZU91dERvd25CaWcge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwMDBweCwgMCk7XFxuICB9XFxufVxcblxcbi5mYWRlT3V0RG93bkJpZyB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0RG93bkJpZztcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0RG93bkJpZztcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVPdXRMZWZ0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlT3V0TGVmdCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XFxuICB9XFxufVxcblxcbi5mYWRlT3V0TGVmdCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0TGVmdDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0TGVmdDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVPdXRMZWZ0QmlnIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZU91dExlZnRCaWcge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAwMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAwMHB4LCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuLmZhZGVPdXRMZWZ0QmlnIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRMZWZ0QmlnO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRMZWZ0QmlnO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dFJpZ2h0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZU91dFJpZ2h0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XFxuICB9XFxufVxcblxcbi5mYWRlT3V0UmlnaHQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZU91dFJpZ2h0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRSaWdodDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVPdXRSaWdodEJpZyB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwMHB4LCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlT3V0UmlnaHRCaWcge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCk7XFxuICB9XFxufVxcblxcbi5mYWRlT3V0UmlnaHRCaWcge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZU91dFJpZ2h0QmlnO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRSaWdodEJpZztcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVPdXRVcCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZU91dFVwIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcXG4gIH1cXG59XFxuXFxuLmZhZGVPdXRVcCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0VXA7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZU91dFVwO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dFVwQmlnIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZU91dFVwQmlnIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XFxuICB9XFxufVxcblxcbi5mYWRlT3V0VXBCaWcge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZU91dFVwQmlnO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRVcEJpZztcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZsaXAge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTM2MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIC0zNjBkZWcpO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gIH1cXG5cXG4gIDQwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgdHJhbnNsYXRlM2QoMCwgMCwgMTUwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIC0xOTBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSB0cmFuc2xhdGUzZCgwLCAwLCAxNTBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTE5MGRlZyk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSB0cmFuc2xhdGUzZCgwLCAwLCAxNTBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTE3MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHRyYW5zbGF0ZTNkKDAsIDAsIDE1MHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtMTcwZGVnKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgfVxcblxcbiAgODAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKC45NSwgLjk1LCAuOTUpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKC45NSwgLjk1LCAuOTUpO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmxpcCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtMzYwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTM2MGRlZyk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgfVxcblxcbiAgNDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSB0cmFuc2xhdGUzZCgwLCAwLCAxNTBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTE5MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHRyYW5zbGF0ZTNkKDAsIDAsIDE1MHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtMTkwZGVnKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHRyYW5zbGF0ZTNkKDAsIDAsIDE1MHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtMTcwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgdHJhbnNsYXRlM2QoMCwgMCwgMTUwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIC0xNzBkZWcpO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxuICB9XFxuXFxuICA4MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoLjk1LCAuOTUsIC45NSk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoLjk1LCAuOTUsIC45NSk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gIH1cXG59XFxuXFxuLmFuaW1hdGVkLmZsaXAge1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZsaXA7XFxuICBhbmltYXRpb24tbmFtZTogZmxpcDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZsaXBJblgge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgOTBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCA5MGRlZyk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDQwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTIwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTIwZGVnKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAxMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIDEwZGVnKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAtNWRlZyk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZsaXBJblgge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgOTBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCA5MGRlZyk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDQwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTIwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTIwZGVnKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAxMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIDEwZGVnKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAtNWRlZyk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xcbiAgfVxcbn1cXG5cXG4uZmxpcEluWCB7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZsaXBJblg7XFxuICBhbmltYXRpb24tbmFtZTogZmxpcEluWDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZsaXBJblkge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgOTBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCA5MGRlZyk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDQwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTIwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTIwZGVnKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCAxMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIDEwZGVnKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtNWRlZyk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZsaXBJblkge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgOTBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCA5MGRlZyk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDQwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTIwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTIwZGVnKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCAxMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIDEwZGVnKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtNWRlZyk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xcbiAgfVxcbn1cXG5cXG4uZmxpcEluWSB7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZsaXBJblk7XFxuICBhbmltYXRpb24tbmFtZTogZmxpcEluWTtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZsaXBPdXRYIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KTtcXG4gIH1cXG5cXG4gIDMwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTIwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTIwZGVnKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCA5MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIDkwZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmbGlwT3V0WCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XFxuICB9XFxuXFxuICAzMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIC0yMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIC0yMGRlZyk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgOTBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCA5MGRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbi5mbGlwT3V0WCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmbGlwT3V0WDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmbGlwT3V0WDtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmxpcE91dFkge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xcbiAgfVxcblxcbiAgMzAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtMTVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtMTVkZWcpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIDkwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgOTBkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZsaXBPdXRZIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KTtcXG4gIH1cXG5cXG4gIDMwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTE1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTE1ZGVnKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCA5MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIDkwZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuLmZsaXBPdXRZIHtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmxpcE91dFk7XFxuICBhbmltYXRpb24tbmFtZTogZmxpcE91dFk7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBsaWdodFNwZWVkSW4ge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSBza2V3WCgtMzBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHNrZXdYKC0zMGRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICA2MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goMjBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDIwZGVnKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgtNWRlZyk7XFxuICAgIHRyYW5zZm9ybTogc2tld1goLTVkZWcpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGxpZ2h0U3BlZWRJbiB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHNrZXdYKC0zMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCkgc2tld1goLTMwZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgyMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogc2tld1goMjBkZWcpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgODAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKC01ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtNWRlZyk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbi5saWdodFNwZWVkSW4ge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogbGlnaHRTcGVlZEluO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGxpZ2h0U3BlZWRJbjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGxpZ2h0U3BlZWRPdXQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSBza2V3WCgzMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCkgc2tld1goMzBkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGxpZ2h0U3BlZWRPdXQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSBza2V3WCgzMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCkgc2tld1goMzBkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG4ubGlnaHRTcGVlZE91dCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBsaWdodFNwZWVkT3V0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGxpZ2h0U3BlZWRPdXQ7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlSW4ge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtMjAwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtMjAwZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGVJbiB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC0yMDBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC0yMDBkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4ucm90YXRlSW4ge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcm90YXRlSW47XFxuICBhbmltYXRpb24tbmFtZTogcm90YXRlSW47XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVJbkRvd25MZWZ0IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC00NWRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTQ1ZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlSW5Eb3duTGVmdCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNDVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC00NWRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4ucm90YXRlSW5Eb3duTGVmdCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb3RhdGVJbkRvd25MZWZ0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluRG93bkxlZnQ7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVJbkRvd25SaWdodCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDQ1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA0NWRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlSW5Eb3duUmlnaHQge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA0NWRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNDVkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4ucm90YXRlSW5Eb3duUmlnaHQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcm90YXRlSW5Eb3duUmlnaHQ7XFxuICBhbmltYXRpb24tbmFtZTogcm90YXRlSW5Eb3duUmlnaHQ7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVJblVwTGVmdCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA0NWRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNDVkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGVJblVwTGVmdCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA0NWRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNDVkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuLnJvdGF0ZUluVXBMZWZ0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluVXBMZWZ0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluVXBMZWZ0O1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlSW5VcFJpZ2h0IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTkwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtOTBkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZUluVXBSaWdodCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC05MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTkwZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuLnJvdGF0ZUluVXBSaWdodCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb3RhdGVJblVwUmlnaHQ7XFxuICBhbmltYXRpb24tbmFtZTogcm90YXRlSW5VcFJpZ2h0O1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlT3V0IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMjAwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAyMDBkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZU91dCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDIwMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMjAwZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuLnJvdGF0ZU91dCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb3RhdGVPdXQ7XFxuICBhbmltYXRpb24tbmFtZTogcm90YXRlT3V0O1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlT3V0RG93bkxlZnQge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDQ1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA0NWRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlT3V0RG93bkxlZnQge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDQ1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA0NWRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbi5yb3RhdGVPdXREb3duTGVmdCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb3RhdGVPdXREb3duTGVmdDtcXG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGVPdXREb3duTGVmdDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZU91dERvd25SaWdodCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC00NWRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTQ1ZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGVPdXREb3duUmlnaHQge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNDVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC00NWRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbi5yb3RhdGVPdXREb3duUmlnaHQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcm90YXRlT3V0RG93blJpZ2h0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZU91dERvd25SaWdodDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZU91dFVwTGVmdCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTQ1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNDVkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZU91dFVwTGVmdCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTQ1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNDVkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG4ucm90YXRlT3V0VXBMZWZ0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZU91dFVwTGVmdDtcXG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGVPdXRVcExlZnQ7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVPdXRVcFJpZ2h0IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgOTBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDkwZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGVPdXRVcFJpZ2h0IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgOTBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDkwZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuLnJvdGF0ZU91dFVwUmlnaHQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcm90YXRlT3V0VXBSaWdodDtcXG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGVPdXRVcFJpZ2h0O1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgaGluZ2Uge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICB9XFxuXFxuICAyMCUsIDYwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA4MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgODBkZWcpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICB9XFxuXFxuICA0MCUsIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA2MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNjBkZWcpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA3MDBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNzAwcHgsIDApO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGhpbmdlIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgfVxcblxcbiAgMjAlLCA2MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgODBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDgwZGVnKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgfVxcblxcbiAgNDAlLCA4MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNjBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDYwZGVnKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNzAwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDcwMHB4LCAwKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuLmhpbmdlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGhpbmdlO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGhpbmdlO1xcbn1cXG5cXG4vKiBvcmlnaW5hbGx5IGF1dGhvcmVkIGJ5IE5pY2sgUGV0dGl0IC0gaHR0cHM6Ly9naXRodWIuY29tL25pY2twZXR0aXQvZ2xpZGUgKi9cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm9sbEluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC0xMjBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtMTIwZGVnKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyByb2xsSW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTEyMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC0xMjBkZWcpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgfVxcbn1cXG5cXG4ucm9sbEluIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvbGxJbjtcXG4gIGFuaW1hdGlvbi1uYW1lOiByb2xsSW47XFxufVxcblxcbi8qIG9yaWdpbmFsbHkgYXV0aG9yZWQgYnkgTmljayBQZXR0aXQgLSBodHRwczovL2dpdGh1Yi5jb20vbmlja3BldHRpdC9nbGlkZSAqL1xcblxcbkAtd2Via2l0LWtleWZyYW1lcyByb2xsT3V0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgMTIwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAxMjBkZWcpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvbGxPdXQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAxMjBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIDEyMGRlZyk7XFxuICB9XFxufVxcblxcbi5yb2xsT3V0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvbGxPdXQ7XFxuICBhbmltYXRpb24tbmFtZTogcm9sbE91dDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb21JbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjMsIC4zLCAuMyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguMywgLjMsIC4zKTtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgem9vbUluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCguMywgLjMsIC4zKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC4zLCAuMywgLjMpO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuLnpvb21JbiB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tSW47XFxuICBhbmltYXRpb24tbmFtZTogem9vbUluO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgem9vbUluRG93biB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjEsIC4xLCAuMSkgdHJhbnNsYXRlM2QoMCwgLTEwMDBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguMSwgLjEsIC4xKSB0cmFuc2xhdGUzZCgwLCAtMTAwMHB4LCAwKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjQ3NSwgLjQ3NSwgLjQ3NSkgdHJhbnNsYXRlM2QoMCwgNjBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguNDc1LCAuNDc1LCAuNDc1KSB0cmFuc2xhdGUzZCgwLCA2MHB4LCAwKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyMCwgMSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIwLCAxKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyB6b29tSW5Eb3duIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCguMSwgLjEsIC4xKSB0cmFuc2xhdGUzZCgwLCAtMTAwMHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC4xLCAuMSwgLjEpIHRyYW5zbGF0ZTNkKDAsIC0xMDAwcHgsIDApO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1MCwgMC4wNTUsIDAuNjc1LCAwLjE5MCk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1MCwgMC4wNTUsIDAuNjc1LCAwLjE5MCk7XFxuICB9XFxuXFxuICA2MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCguNDc1LCAuNDc1LCAuNDc1KSB0cmFuc2xhdGUzZCgwLCA2MHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC40NzUsIC40NzUsIC40NzUpIHRyYW5zbGF0ZTNkKDAsIDYwcHgsIDApO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIwLCAxKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEpO1xcbiAgfVxcbn1cXG5cXG4uem9vbUluRG93biB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tSW5Eb3duO1xcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb21JbkRvd247XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyB6b29tSW5MZWZ0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCguMSwgLjEsIC4xKSB0cmFuc2xhdGUzZCgtMTAwMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC4xLCAuMSwgLjEpIHRyYW5zbGF0ZTNkKC0xMDAwcHgsIDAsIDApO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1MCwgMC4wNTUsIDAuNjc1LCAwLjE5MCk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1MCwgMC4wNTUsIDAuNjc1LCAwLjE5MCk7XFxuICB9XFxuXFxuICA2MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCguNDc1LCAuNDc1LCAuNDc1KSB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC40NzUsIC40NzUsIC40NzUpIHRyYW5zbGF0ZTNkKDEwcHgsIDAsIDApO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIwLCAxKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHpvb21JbkxlZnQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKC4xLCAuMSwgLjEpIHRyYW5zbGF0ZTNkKC0xMDAwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjEsIC4xLCAuMSkgdHJhbnNsYXRlM2QoLTEwMDBweCwgMCwgMCk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKTtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKC40NzUsIC40NzUsIC40NzUpIHRyYW5zbGF0ZTNkKDEwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjQ3NSwgLjQ3NSwgLjQ3NSkgdHJhbnNsYXRlM2QoMTBweCwgMCwgMCk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyMCwgMSk7XFxuICB9XFxufVxcblxcbi56b29tSW5MZWZ0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHpvb21JbkxlZnQ7XFxuICBhbmltYXRpb24tbmFtZTogem9vbUluTGVmdDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb21JblJpZ2h0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCguMSwgLjEsIC4xKSB0cmFuc2xhdGUzZCgxMDAwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjEsIC4xLCAuMSkgdHJhbnNsYXRlM2QoMTAwMHB4LCAwLCAwKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjQ3NSwgLjQ3NSwgLjQ3NSkgdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjQ3NSwgLjQ3NSwgLjQ3NSkgdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIwLCAxKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHpvb21JblJpZ2h0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCguMSwgLjEsIC4xKSB0cmFuc2xhdGUzZCgxMDAwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjEsIC4xLCAuMSkgdHJhbnNsYXRlM2QoMTAwMHB4LCAwLCAwKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjQ3NSwgLjQ3NSwgLjQ3NSkgdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjQ3NSwgLjQ3NSwgLjQ3NSkgdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIwLCAxKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEpO1xcbiAgfVxcbn1cXG5cXG4uem9vbUluUmlnaHQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogem9vbUluUmlnaHQ7XFxuICBhbmltYXRpb24tbmFtZTogem9vbUluUmlnaHQ7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyB6b29tSW5VcCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjEsIC4xLCAuMSkgdHJhbnNsYXRlM2QoMCwgMTAwMHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC4xLCAuMSwgLjEpIHRyYW5zbGF0ZTNkKDAsIDEwMDBweCwgMCk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKTtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKC40NzUsIC40NzUsIC40NzUpIHRyYW5zbGF0ZTNkKDAsIC02MHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC40NzUsIC40NzUsIC40NzUpIHRyYW5zbGF0ZTNkKDAsIC02MHB4LCAwKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyMCwgMSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIwLCAxKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyB6b29tSW5VcCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjEsIC4xLCAuMSkgdHJhbnNsYXRlM2QoMCwgMTAwMHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC4xLCAuMSwgLjEpIHRyYW5zbGF0ZTNkKDAsIDEwMDBweCwgMCk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKTtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKC40NzUsIC40NzUsIC40NzUpIHRyYW5zbGF0ZTNkKDAsIC02MHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC40NzUsIC40NzUsIC40NzUpIHRyYW5zbGF0ZTNkKDAsIC02MHB4LCAwKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyMCwgMSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIwLCAxKTtcXG4gIH1cXG59XFxuXFxuLnpvb21JblVwIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHpvb21JblVwO1xcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb21JblVwO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgem9vbU91dCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKC4zLCAuMywgLjMpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjMsIC4zLCAuMyk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgem9vbU91dCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKC4zLCAuMywgLjMpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjMsIC4zLCAuMyk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbi56b29tT3V0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHpvb21PdXQ7XFxuICBhbmltYXRpb24tbmFtZTogem9vbU91dDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb21PdXREb3duIHtcXG4gIDQwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKC40NzUsIC40NzUsIC40NzUpIHRyYW5zbGF0ZTNkKDAsIC02MHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC40NzUsIC40NzUsIC40NzUpIHRyYW5zbGF0ZTNkKDAsIC02MHB4LCAwKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCguMSwgLjEsIC4xKSB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjEsIC4xLCAuMSkgdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIwLCAxKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHpvb21PdXREb3duIHtcXG4gIDQwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKC40NzUsIC40NzUsIC40NzUpIHRyYW5zbGF0ZTNkKDAsIC02MHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC40NzUsIC40NzUsIC40NzUpIHRyYW5zbGF0ZTNkKDAsIC02MHB4LCAwKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCguMSwgLjEsIC4xKSB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjEsIC4xLCAuMSkgdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIwLCAxKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEpO1xcbiAgfVxcbn1cXG5cXG4uem9vbU91dERvd24ge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogem9vbU91dERvd247XFxuICBhbmltYXRpb24tbmFtZTogem9vbU91dERvd247XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyB6b29tT3V0TGVmdCB7XFxuICA0MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCguNDc1LCAuNDc1LCAuNDc1KSB0cmFuc2xhdGUzZCg0MnB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC40NzUsIC40NzUsIC40NzUpIHRyYW5zbGF0ZTNkKDQycHgsIDAsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjEpIHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC4xKSB0cmFuc2xhdGUzZCgtMjAwMHB4LCAwLCAwKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgem9vbU91dExlZnQge1xcbiAgNDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjQ3NSwgLjQ3NSwgLjQ3NSkgdHJhbnNsYXRlM2QoNDJweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguNDc1LCAuNDc1LCAuNDc1KSB0cmFuc2xhdGUzZCg0MnB4LCAwLCAwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC4xKSB0cmFuc2xhdGUzZCgtMjAwMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSguMSkgdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xcbiAgfVxcbn1cXG5cXG4uem9vbU91dExlZnQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogem9vbU91dExlZnQ7XFxuICBhbmltYXRpb24tbmFtZTogem9vbU91dExlZnQ7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyB6b29tT3V0UmlnaHQge1xcbiAgNDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjQ3NSwgLjQ3NSwgLjQ3NSkgdHJhbnNsYXRlM2QoLTQycHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjQ3NSwgLjQ3NSwgLjQ3NSkgdHJhbnNsYXRlM2QoLTQycHgsIDAsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjEpIHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjEpIHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBjZW50ZXI7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgem9vbU91dFJpZ2h0IHtcXG4gIDQwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKC40NzUsIC40NzUsIC40NzUpIHRyYW5zbGF0ZTNkKC00MnB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC40NzUsIC40NzUsIC40NzUpIHRyYW5zbGF0ZTNkKC00MnB4LCAwLCAwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC4xKSB0cmFuc2xhdGUzZCgyMDAwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC4xKSB0cmFuc2xhdGUzZCgyMDAwcHgsIDAsIDApO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGNlbnRlcjtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyO1xcbiAgfVxcbn1cXG5cXG4uem9vbU91dFJpZ2h0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHpvb21PdXRSaWdodDtcXG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tT3V0UmlnaHQ7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyB6b29tT3V0VXAge1xcbiAgNDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjQ3NSwgLjQ3NSwgLjQ3NSkgdHJhbnNsYXRlM2QoMCwgNjBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguNDc1LCAuNDc1LCAuNDc1KSB0cmFuc2xhdGUzZCgwLCA2MHB4LCAwKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCguMSwgLjEsIC4xKSB0cmFuc2xhdGUzZCgwLCAtMjAwMHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC4xLCAuMSwgLjEpIHRyYW5zbGF0ZTNkKDAsIC0yMDAwcHgsIDApO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyMCwgMSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgem9vbU91dFVwIHtcXG4gIDQwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKC40NzUsIC40NzUsIC40NzUpIHRyYW5zbGF0ZTNkKDAsIDYwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjQ3NSwgLjQ3NSwgLjQ3NSkgdHJhbnNsYXRlM2QoMCwgNjBweCwgMCk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjEsIC4xLCAuMSkgdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguMSwgLjEsIC4xKSB0cmFuc2xhdGUzZCgwLCAtMjAwMHB4LCAwKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIwLCAxKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEpO1xcbiAgfVxcbn1cXG5cXG4uem9vbU91dFVwIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHpvb21PdXRVcDtcXG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tT3V0VXA7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZUluRG93biB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZUluRG93biB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuLnNsaWRlSW5Eb3duIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5Eb3duO1xcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5Eb3duO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVJbkxlZnQge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVJbkxlZnQge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcblxcbi5zbGlkZUluTGVmdCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzbGlkZUluTGVmdDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluTGVmdDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlSW5SaWdodCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVJblJpZ2h0IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuLnNsaWRlSW5SaWdodCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzbGlkZUluUmlnaHQ7XFxuICBhbmltYXRpb24tbmFtZTogc2xpZGVJblJpZ2h0O1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVJblVwIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZUluVXAge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5cXG4uc2xpZGVJblVwIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5VcDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluVXA7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZU91dERvd24ge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVPdXREb3duIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xcbiAgfVxcbn1cXG5cXG4uc2xpZGVPdXREb3duIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlT3V0RG93bjtcXG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZU91dERvd247XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZU91dExlZnQge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZU91dExlZnQge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuLnNsaWRlT3V0TGVmdCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzbGlkZU91dExlZnQ7XFxuICBhbmltYXRpb24tbmFtZTogc2xpZGVPdXRMZWZ0O1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVPdXRSaWdodCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZU91dFJpZ2h0IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xcbiAgfVxcbn1cXG5cXG4uc2xpZGVPdXRSaWdodCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzbGlkZU91dFJpZ2h0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlT3V0UmlnaHQ7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZU91dFVwIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVPdXRVcCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xcbiAgfVxcbn1cXG5cXG4uc2xpZGVPdXRVcCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzbGlkZU91dFVwO1xcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlT3V0VXA7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9ib3dlcl9jb21wb25lbnRzL2FuaW1hdGUuY3NzL2FuaW1hdGUuY3NzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jc3Mvc3R5bGUuY3NzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1vei1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXg7XFxuICBkaXNwbGF5OiAtby1mbGV4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiAtd2Via2l0LWNvbHVtbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiAtbW96LWNvbHVtbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiAtbXMtY29sdW1uO1xcbiAgZmxleC1kaXJlY3Rpb246IC1vLWNvbHVtbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gICAgZGlzcGxheTogLW1vei1mbGV4O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleDtcXG4gICAgZGlzcGxheTogLW8tZmxleDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmRpc3BsYXlGbGV4IHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tb3otZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4O1xcbiAgZGlzcGxheTogLW8tZmxleDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kaXNwbGF5RmxleEZpeGVkIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tb3otZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4O1xcbiAgZGlzcGxheTogLW8tZmxleDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZsZXhfcm93IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiAtd2Via2l0LXJvdztcXG4gIGZsZXgtZGlyZWN0aW9uOiAtbW96LXJvdztcXG4gIGZsZXgtZGlyZWN0aW9uOiAtbXMtcm93O1xcbiAgZmxleC1kaXJlY3Rpb246IC1vLXJvdztcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5mbGV4X2NvbHVtbiB7XFxuICBmbGV4LWRpcmVjdGlvbjogLXdlYmtpdC1jb2x1bW47XFxuICBmbGV4LWRpcmVjdGlvbjogLW1vei1jb2x1bW47XFxuICBmbGV4LWRpcmVjdGlvbjogLW1zLWNvbHVtbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiAtby1jb2x1bW47XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZmxleF9ub3dyYXAge1xcbiAgZmxleC13cmFwOiAtd2Via2l0LW5vd3JhcDtcXG4gIGZsZXgtd3JhcDogLW1vei1ub3dyYXA7XFxuICBmbGV4LXdyYXA6IC1tcy1ub3dyYXA7XFxuICBmbGV4LXdyYXA6IC1vLW5vd3JhcDtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbn1cXG5cXG4uZmxleF9jb250ZW50IHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmNhcmQge1xcbiAgd2lkdGg6IGF1dG87XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYm94LXNoYWRvdzogMCAycHggNXB4ICNjY2M7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4uY2FyZC1pbWcge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi5jYXJkLWNvbnRlbnQge1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuLmNhcmQtdGl0bGUge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG4uY2FyZC10ZXh0IHtcXG4gIGNvbG9yOiAjNzc3O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuLmNhcmQtbGluayB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcbi5jYXJkLWxpbmsgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogIzBiZDtcXG4gIG1hcmdpbjogMCAxMHB4O1xcbn1cXG4uY2FyZC1saW5rIGE6aG92ZXIge1xcbiAgY29sb3I6ICMwMDkwYWE7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9zcmMvY3NzL3N0eWxlLmNzc1xuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9