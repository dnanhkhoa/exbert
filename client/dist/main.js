/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./ts/main.ts","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/main.scss":
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=exBERT.html!./exBERT.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=exBERT.html!./exBERT.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "exBERT.html";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=index.html!./index.html":
/*!***************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=index.html!./index.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index.html";

/***/ }),

/***/ "./ts/api/demoAPI.ts":
/*!***************************!*\
  !*** ./ts/api/demoAPI.ts ***!
  \***************************/
/*! exports provided: DemoAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoAPI", function() { return DemoAPI; });
const DemoAPI = {
    "527fdac4404bf9ba5412646ad457950d4482762c": "527fdac4404bf9ba5412646ad457950d4482762c.json",
    "59b4acc05f1d80ecbef1c23eaf2fda10222cb257": "59b4acc05f1d80ecbef1c23eaf2fda10222cb257.json",
    "354992f2ee236604c874a3a627e4042bc68586f8": "354992f2ee236604c874a3a627e4042bc68586f8.json",
    "5015e5a318605cea6808538db14d8af16887b076": "5015e5a318605cea6808538db14d8af16887b076.json",
    "3c9aa152ac894306040703c5095599b199cad1a9": "3c9aa152ac894306040703c5095599b199cad1a9.json",
    "0fece0c87203e83afd1674b5aeebaed0f5fa0562": "0fece0c87203e83afd1674b5aeebaed0f5fa0562.json",
    "d3a0e4045ea48a275ce51a6af0280406060f47cf": "d3a0e4045ea48a275ce51a6af0280406060f47cf.json",
    "ed98d751ab9b6a4a0e85e9332b420a4c13ab75a7": "ed98d751ab9b6a4a0e85e9332b420a4c13ab75a7.json",
    "0d24ae08eeb21af82c666cbe2ac0646ed9c9d9a6": "0d24ae08eeb21af82c666cbe2ac0646ed9c9d9a6.json",
    "6de053b3b8a4d904780c9a6545a0a63cbbb2b144": "6de053b3b8a4d904780c9a6545a0a63cbbb2b144.json",
    "f68df23365faf02f9c01439345bed66936ed85f7": "f68df23365faf02f9c01439345bed66936ed85f7.json",
    "4608cb4fc00b43fff68098e85676fad57c940f02": "4608cb4fc00b43fff68098e85676fad57c940f02.json",
    "dfcd50146da8d8122a5a57c2a3c0abce503ba94b": "dfcd50146da8d8122a5a57c2a3c0abce503ba94b.json",
    "34c8629d4265d7f3ede3add42f3613b205d94c1c": "34c8629d4265d7f3ede3add42f3613b205d94c1c.json",
    "db2dc252a786650f64395a0f5d181c0831019cbf": "db2dc252a786650f64395a0f5d181c0831019cbf.json",
    "da4597d73d444757bde9176395bf31aad3334131": "da4597d73d444757bde9176395bf31aad3334131.json",
    "a2ebf13d3c9371fcf738b9651824e2c3cd1ff8e0": "a2ebf13d3c9371fcf738b9651824e2c3cd1ff8e0.json",
    "bc419238c20dd1c5cfe1cc427ab3d1e31353436a": "bc419238c20dd1c5cfe1cc427ab3d1e31353436a.json",
    "84e8be9fe562fbd0487c03b55cc6b4f3fb8cd787": "84e8be9fe562fbd0487c03b55cc6b4f3fb8cd787.json",
    "207e6c98a0e149dc7e6ed67118296d8a8c89b3c3": "207e6c98a0e149dc7e6ed67118296d8a8c89b3c3.json",
    "c185a9349ba5a325acf8514e9b50de71280488aa": "c185a9349ba5a325acf8514e9b50de71280488aa.json",
    "dde481a5cd3667ae8c6c5b5e1421dc882b6a2dd6": "dde481a5cd3667ae8c6c5b5e1421dc882b6a2dd6.json",
    "f63e14e935d98948b4a0ebc9663400dbe4263348": "f63e14e935d98948b4a0ebc9663400dbe4263348.json",
    "79b964d1a5c854deaeace26813f96994bb82aef2": "79b964d1a5c854deaeace26813f96994bb82aef2.json",
    "3b1168ec96af00c4e887341e92a878f8752e1d17": "3b1168ec96af00c4e887341e92a878f8752e1d17.json",
    "8c462bc298e3183efa8d9e863e25ea5d89806b03": "8c462bc298e3183efa8d9e863e25ea5d89806b03.json",
    "9939698edaa25bbae9ee1d27864e698f13963f06": "9939698edaa25bbae9ee1d27864e698f13963f06.json",
    "73f1ee497b3e7b6394e55726b18dbf9d514dcea6": "73f1ee497b3e7b6394e55726b18dbf9d514dcea6.json",
    "c7cdb80bf813e1de241260aede6cd28ea65ccfae": "c7cdb80bf813e1de241260aede6cd28ea65ccfae.json",
    "a96fed16eab1bf6d08e4001c02894d9c549df627": "a96fed16eab1bf6d08e4001c02894d9c549df627.json",
    "a8eaf10da8dc75b42e72bdc7091776247fff9657": "a8eaf10da8dc75b42e72bdc7091776247fff9657.json",
    "a8194f2309e1c71e977ef8d3be572ae00b0e91f2": "a8194f2309e1c71e977ef8d3be572ae00b0e91f2.json",
    "2f4a15b66fcfb0c7a43a33d93763990282bfc5aa": "2f4a15b66fcfb0c7a43a33d93763990282bfc5aa.json",
    "06095cef4a7f49b18f153e67e33fddb831a15b46": "06095cef4a7f49b18f153e67e33fddb831a15b46.json",
    "4c93eaf0c0ce56f1e5d5100916abf4d31eb35da5": "4c93eaf0c0ce56f1e5d5100916abf4d31eb35da5.json",
    "f8c40c67c851a0489f7480c99b31b4f606c0184b": "f8c40c67c851a0489f7480c99b31b4f606c0184b.json",
    "e4e71f6ea57be2e05d62af0825a80f144421e02d": "e4e71f6ea57be2e05d62af0825a80f144421e02d.json",
    "e7d9d520882782c7cfbffeadaaf22b4c0a081c7c": "e7d9d520882782c7cfbffeadaaf22b4c0a081c7c.json",
    "4aa4eb10ead44a0a3c2dd95407017a928138b32b": "4aa4eb10ead44a0a3c2dd95407017a928138b32b.json",
    "da31d55ee8cb01bcdb29572cb902b8e799685be2": "da31d55ee8cb01bcdb29572cb902b8e799685be2.json",
    "e427181fb02bbf19f7bbb65c9d9389d2d9a41812": "e427181fb02bbf19f7bbb65c9d9389d2d9a41812.json",
    "bbcab9e1ca60a851fd7ecfda80de470afa740936": "bbcab9e1ca60a851fd7ecfda80de470afa740936.json",
    "4de96aa205076863c9fb4ea99e2ba86fa131ff76": "4de96aa205076863c9fb4ea99e2ba86fa131ff76.json",
    "e4c6d1b3004e3cdd0c879a59639b5ce993207a99": "e4c6d1b3004e3cdd0c879a59639b5ce993207a99.json",
    "fbc9da79b8bf39dc9998408526741f811a13e6aa": "fbc9da79b8bf39dc9998408526741f811a13e6aa.json",
    "528554ee4e615c61287c40ed9a2aea69b91af6c9": "528554ee4e615c61287c40ed9a2aea69b91af6c9.json",
    "5e7073c03c37d19826b2fb4a6599ccaedde492e4": "5e7073c03c37d19826b2fb4a6599ccaedde492e4.json",
    "71c4a886cdee58a371ae2115311b150e84e555f6": "71c4a886cdee58a371ae2115311b150e84e555f6.json",
    "4bce0970a465fe9b96305e06af19c5d9c97d7cc3": "4bce0970a465fe9b96305e06af19c5d9c97d7cc3.json",
    "efdb1f0a70f22f80ff3cea0cb79bec717fc8b6f7": "efdb1f0a70f22f80ff3cea0cb79bec717fc8b6f7.json",
    "174c6f786d139ce111381045d60d25682a168b99": "174c6f786d139ce111381045d60d25682a168b99.json",
    "a8c23e88d6ca6d4efd2646b0742c0fa32dbd55a4": "a8c23e88d6ca6d4efd2646b0742c0fa32dbd55a4.json",
    "f6949c28752de35a870efde308585acd46a25278": "f6949c28752de35a870efde308585acd46a25278.json",
    "c1bdb8cbafd5d5d8f6bda2b4db16b6bc2d62e18a": "c1bdb8cbafd5d5d8f6bda2b4db16b6bc2d62e18a.json",
    "2b81a8f602251cf40b4682c8cedb3966b912d7c6": "2b81a8f602251cf40b4682c8cedb3966b912d7c6.json",
    "8f94e843d2510047fd1af46f249afe87ff49cc2f": "8f94e843d2510047fd1af46f249afe87ff49cc2f.json",
    "4e3ddb51550c03c64fdbe5592526665100d32930": "4e3ddb51550c03c64fdbe5592526665100d32930.json",
    "f816b23af9aa4312c80e668a66a156c934cb330c": "f816b23af9aa4312c80e668a66a156c934cb330c.json",
    "2fe05a911a574b8a6d4b05eb13db9e09aaacad2d": "2fe05a911a574b8a6d4b05eb13db9e09aaacad2d.json",
    "5c71496726395aaa4d0a65373fd1651b5a0e6b1f": "5c71496726395aaa4d0a65373fd1651b5a0e6b1f.json",
};


/***/ }),

/***/ "./ts/api/mainApi.ts":
/*!***************************!*\
  !*** ./ts/api/mainApi.ts ***!
  \***************************/
/*! exports provided: emptyTokenDisplay, API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyTokenDisplay", function() { return emptyTokenDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _data_TokenWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/TokenWrapper */ "./ts/data/TokenWrapper.ts");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _demoAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demoAPI */ "./ts/api/demoAPI.ts");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! object-hash */ "./node_modules/object-hash/dist/object_hash.js");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(object_hash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _etc_apiHelpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../etc/apiHelpers */ "./ts/etc/apiHelpers.ts");
/* harmony import */ var _etc_URLHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../etc/URLHandler */ "./ts/etc/URLHandler.ts");







const emptyTokenDisplay = new _data_TokenWrapper__WEBPACK_IMPORTED_MODULE_1__["TokenDisplay"]();
const baseurl = _etc_URLHandler__WEBPACK_IMPORTED_MODULE_6__["URLHandler"].basicURL();
/**
 * A rewrite of `d3-fetch`'s `d3.json` callback. If an api call fails, make a backup call to specified url and payload, if specified.
 *
 * @param response Object expected at time of callback
 * @param backupUrl Backup url in the event of fail
 * @param backupPayload Backup payload if making a post request
 */
function responseJson(response, backupUrl = null, backupPayload = null) {
    if (!response.ok) {
        if (backupUrl != null) {
            console.log("STATIC FILE NOT FOUND");
            return fetch(backupUrl, backupPayload).then(responseJson);
        }
        throw new Error(response.status + " " + response.statusText);
    }
    return response.json();
}
/**
 * Check first if the information being sent exists in a static demo file. If it does, send that. Otherwise, make a normal call to the server.
 *
 * @param toSend The packet of information to send to an API endpoint
 * @param backupUrl Backup url in the event that the demo file is not found
 * @param backupPayload Backup payload if demo file not found, for POST requests only
 */
function checkDemoAPI(toSend, backupUrl = null, backupPayload = null) {
    const hsh = object_hash__WEBPACK_IMPORTED_MODULE_4__["sha1"](toSend);
    console.log("CHECKING DEMOAPI: " + hsh);
    if (_demoAPI__WEBPACK_IMPORTED_MODULE_3__["DemoAPI"].hasOwnProperty(hsh)) {
        // Relies on a symbolic link being present in the dist folder to the demo folder
        const path = './demo/' + _demoAPI__WEBPACK_IMPORTED_MODULE_3__["DemoAPI"][hsh];
        console.log("TRYING TO SENDING STATIC: ", path);
        const follow = (response) => responseJson(response, backupUrl, backupPayload);
        return fetch(path).then(follow);
    }
    return d3__WEBPACK_IMPORTED_MODULE_0__["json"](backupUrl, backupPayload);
}
class API {
    constructor(baseURL = null) {
        this.baseURL = baseURL;
        if (this.baseURL == null) {
            this.baseURL = baseurl + '/api';
        }
    }
    getModelDetails(model, hashObj = null) {
        const toSend = {
            model: model
        };
        const url = Object(_etc_apiHelpers__WEBPACK_IMPORTED_MODULE_5__["makeUrl"])(this.baseURL + "/get-model-details", toSend);
        console.log("--- GET " + url);
        if (hashObj != null) {
            const key = object_hash__WEBPACK_IMPORTED_MODULE_4__["sha1"](toSend);
            d3__WEBPACK_IMPORTED_MODULE_0__["json"](url).then(r => {
                hashObj[key] = r;
            });
        }
        return checkDemoAPI(toSend, url);
    }
    getMetaAttentions(model, sentence, layer, hashObj = null) {
        const toSend = {
            model: model,
            sentence: sentence,
            layer: layer
        };
        const url = Object(_etc_apiHelpers__WEBPACK_IMPORTED_MODULE_5__["makeUrl"])(this.baseURL + "/attend+meta", toSend);
        console.log("--- GET " + url);
        // Add hash and value to hashObj
        if (hashObj != null) {
            const key = object_hash__WEBPACK_IMPORTED_MODULE_4__["sha1"](toSend);
            d3__WEBPACK_IMPORTED_MODULE_0__["json"](url).then(r => {
                hashObj[key] = r;
            });
        }
        return checkDemoAPI(toSend, url);
    }
    /**
     * Update the display based on the information that was already parsed from the passed sentence.
     *
     * @param a The displayed tokens in the columns
     * @param sentenceA The original sentence that led to the tokenized information in `a`
     * @param layer Which layer to search at
     * @param hashObj If not null, store the information of the responses into the passed object. Used for creating demos.
     */
    updateMaskedAttentions(model, tokens, sentence, layer, hashObj = null) {
        const toSend = {
            model: model,
            tokens: ramda__WEBPACK_IMPORTED_MODULE_2__["map"](ramda__WEBPACK_IMPORTED_MODULE_2__["prop"]('text'), tokens.tokenData),
            sentence: sentence,
            // Empty masks need to be sent as a number, unfortunately. Choosing -1 for this
            mask: tokens.maskInds.length ? tokens.maskInds : [-1],
            layer: layer,
        };
        const url = Object(_etc_apiHelpers__WEBPACK_IMPORTED_MODULE_5__["makeUrl"])(this.baseURL + '/update-mask');
        const payload = Object(_etc_apiHelpers__WEBPACK_IMPORTED_MODULE_5__["toPayload"])(toSend);
        if (hashObj != null) {
            // Add hash and value to hashObj for demo purposes
            const key = object_hash__WEBPACK_IMPORTED_MODULE_4__["sha1"](toSend);
            d3__WEBPACK_IMPORTED_MODULE_0__["json"](url, payload).then(r => {
                hashObj[key] = r;
            });
        }
        console.log("--- POST " + url, payload);
        return checkDemoAPI(toSend, url, payload);
    }
    /**
     *
     * @param embedding Embedding of the word
     * @param layer In the l'th layer
     * @param k how many results to retrieve
     */
    getNearestEmbeddings(model, corpus, embedding, layer, heads, k = 10, hashObj = null) {
        const toSend = {
            model: model,
            corpus: corpus,
            embedding: embedding,
            layer: layer,
            heads: heads,
            k: k,
        };
        const url = Object(_etc_apiHelpers__WEBPACK_IMPORTED_MODULE_5__["makeUrl"])(this.baseURL + '/k-nearest-embeddings', toSend);
        console.log("--- GET " + url);
        if (hashObj != null) {
            const key = object_hash__WEBPACK_IMPORTED_MODULE_4__["sha1"](toSend);
            d3__WEBPACK_IMPORTED_MODULE_0__["json"](url).then(r => {
                hashObj[key] = r;
            });
        }
        return checkDemoAPI(toSend, url);
    }
    getNearestContexts(model, corpus, context, layer, heads, k = 10, hashObj = null) {
        const toSend = {
            model: model,
            corpus: corpus,
            context: context,
            layer: layer,
            heads: heads,
            k: k,
        };
        const url = Object(_etc_apiHelpers__WEBPACK_IMPORTED_MODULE_5__["makeUrl"])(this.baseURL + '/k-nearest-contexts', toSend);
        console.log("--- GET " + url);
        if (hashObj != null) {
            const key = object_hash__WEBPACK_IMPORTED_MODULE_4__["sha1"](toSend);
            d3__WEBPACK_IMPORTED_MODULE_0__["json"](url).then(r => {
                hashObj[key] = r;
            });
        }
        return checkDemoAPI(toSend, url);
    }
}
;


/***/ }),

/***/ "./ts/data/AttentionCapsule.ts":
/*!*************************************!*\
  !*** ./ts/data/AttentionCapsule.ts ***!
  \*************************************/
/*! exports provided: makeFromMetaResponse, AttentionWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeFromMetaResponse", function() { return makeFromMetaResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttentionWrapper", function() { return AttentionWrapper; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _etc_Tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../etc/_Tools */ "./ts/etc/_Tools.ts");
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tensorflow/tfjs */ "./node_modules/@tensorflow/tfjs/dist/tf.esm.js");



/**
 * Notes:
 *
 * - Also encapsulate the CLS/SEP info vs. no CLS/SEP info
 * - When layer format changes from list, drop the index into conf.layer
 */
const bpeTokens = ["[CLS]", "[SEP]", "<s>", "</s>", "<|endoftext|>"];
const findBadIndexes = (x) => _etc_Tools__WEBPACK_IMPORTED_MODULE_1__["findAllIndexes"](x.map(t => t.text), (a) => lodash__WEBPACK_IMPORTED_MODULE_0__["includes"](bpeTokens, a));
function makeFromMetaResponse(r, isZeroed) {
    const key = 'aa'; // Change this if backend response changes to be simpler
    const currPair = r[key];
    const left = currPair.left;
    const right = currPair.right;
    const leftZero = _etc_Tools__WEBPACK_IMPORTED_MODULE_1__["findAllIndexes"](left.map(t => t.text), (a) => lodash__WEBPACK_IMPORTED_MODULE_0__["includes"](bpeTokens, a));
    const rightZero = _etc_Tools__WEBPACK_IMPORTED_MODULE_1__["findAllIndexes"](right.map(t => t.text), (a) => lodash__WEBPACK_IMPORTED_MODULE_0__["includes"](bpeTokens, a));
    return new AttentionWrapper(currPair.att, [leftZero, rightZero], isZeroed);
}
class AttentionWrapper {
    constructor(att, badToks = [[], []], isZeroed = true) {
        this.nLayers = 12;
        this.nHeads = 12;
        this.init(att, badToks, isZeroed);
    }
    init(att, badToks = [[], []], isZeroed) {
        this.isZeroed = isZeroed;
        this._att = att;
        this._zeroedAttTensor = zeroRowCol(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["tensor3d"](att), badToks[0], badToks[1]);
        this._attTensor = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["tensor3d"](att); // If I put this first, buffer modifications change this too.
        this.badToks = badToks;
    }
    updateFromNormal(r, isZeroed) {
        const key = 'aa'; // Change this if backend response changes to be simpler
        const currPair = r[key];
        const left = currPair.left;
        const right = currPair.right;
        const leftZero = findBadIndexes(left);
        const rightZero = findBadIndexes(right);
        this.init(currPair.att, [leftZero, rightZero], isZeroed);
    }
    get attTensor() {
        const tens = this.isZeroed ? this._zeroedAttTensor : this._attTensor;
        return tens;
    }
    get att() {
        return this.attTensor.arraySync();
    }
    zeroed(val) {
        if (val == null)
            return this.isZeroed;
        this.isZeroed = val;
        return this;
    }
    toggleZeroing() {
        this.zeroed(!this.zeroed());
    }
    _byHeads(heads) {
        if (heads.length == 0) {
            return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["zerosLike"](this._byHead(0));
        }
        return this.attTensor.gather(heads, 0).sum(0);
    }
    _byHead(head) {
        return this.attTensor.gather([head], 0).squeeze([0]);
    }
    byHeads(heads) {
        return this._byHeads(heads).arraySync();
    }
    byHead(head) {
        return this._byHead(head).arraySync();
    }
}
function zeroRowCol(tens, rows, cols) {
    let outTens = tens.clone();
    let atb = outTens.bufferSync();
    lodash__WEBPACK_IMPORTED_MODULE_0__["range"](atb.shape[0]).forEach((head) => {
        lodash__WEBPACK_IMPORTED_MODULE_0__["range"](atb.shape[1]).forEach((i) => {
            // Set rows to 0
            if (lodash__WEBPACK_IMPORTED_MODULE_0__["includes"](rows, i)) {
                lodash__WEBPACK_IMPORTED_MODULE_0__["range"](atb.shape[2]).forEach((j) => {
                    atb.set(0, head, i, j);
                });
            }
            // Set cols to 0
            lodash__WEBPACK_IMPORTED_MODULE_0__["range"](atb.shape[2]).forEach((j) => {
                if (lodash__WEBPACK_IMPORTED_MODULE_0__["includes"](cols, j))
                    lodash__WEBPACK_IMPORTED_MODULE_0__["range"](atb.shape[1]).forEach((i) => {
                        atb.set(0, head, i, j);
                    });
            });
        });
    });
    return outTens;
}


/***/ }),

/***/ "./ts/data/FaissSearchWrapper.ts":
/*!***************************************!*\
  !*** ./ts/data/FaissSearchWrapper.ts ***!
  \***************************************/
/*! exports provided: FaissSearchResultWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaissSearchResultWrapper", function() { return FaissSearchResultWrapper; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _etc_SpacyInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../etc/SpacyInfo */ "./ts/etc/SpacyInfo.ts");
/* harmony import */ var _etc_xramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../etc/xramda */ "./ts/etc/xramda.ts");




// If value is not a string, don't try to make lowercase
const makeStringLower = ramda__WEBPACK_IMPORTED_MODULE_1__["ifElse"](ramda__WEBPACK_IMPORTED_MODULE_1__["is"](String), ramda__WEBPACK_IMPORTED_MODULE_1__["toLower"], ramda__WEBPACK_IMPORTED_MODULE_1__["identity"]);
function argMax(array) {
    return [].map.call(array, (x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1];
}
const getMaxToken = (d) => d.tokens[argMax(d.matched_att.out.att)];
class FaissSearchResultWrapper {
    constructor(data) {
        this.data = data;
    }
    /**
     * Add position info interpretable by the histogram
     *
     * @param countObj Represents the inforrmation to be displayed by the histogram
     */
    countPosInfo() {
        const attOffsets = this.data.map((d, i) => +d.matched_att.out.offset_to_max);
        const ctObj = {
            offset: Object(_etc_xramda__WEBPACK_IMPORTED_MODULE_3__["initZero"])(attOffsets)
        };
        attOffsets.forEach(v => {
            Object.keys(ctObj).forEach((k) => {
                ctObj[k][v] += 1;
            });
        });
        return ctObj;
    }
    countMaxAttKeys(indexOffset = 0) {
        // The keys in the below object dictate what we count
        const countObj = {
            pos: Object(_etc_xramda__WEBPACK_IMPORTED_MODULE_3__["initZero"])(_etc_SpacyInfo__WEBPACK_IMPORTED_MODULE_2__["SpacyInfo"].TotalMetaOptions.pos),
            dep: Object(_etc_xramda__WEBPACK_IMPORTED_MODULE_3__["initZero"])(_etc_SpacyInfo__WEBPACK_IMPORTED_MODULE_2__["SpacyInfo"].TotalMetaOptions.dep),
            is_ent: Object(_etc_xramda__WEBPACK_IMPORTED_MODULE_3__["initZero"])(_etc_SpacyInfo__WEBPACK_IMPORTED_MODULE_2__["SpacyInfo"].TotalMetaOptions.is_ent),
        };
        this.data.forEach(d => {
            const maxMatch = getMaxToken(d);
            Object.keys(countObj).forEach(k => {
                const val = makeStringLower(String(maxMatch[k]));
                countObj[k][val] += 1;
            });
        });
        const newCountObj = Object.assign(countObj, this.countPosInfo());
        return newCountObj;
    }
    countMatchedKeys(indexOffset = 0) {
        // The keys in the below object dictate what we count
        const countObj = {
            pos: Object(_etc_xramda__WEBPACK_IMPORTED_MODULE_3__["initZero"])(_etc_SpacyInfo__WEBPACK_IMPORTED_MODULE_2__["SpacyInfo"].TotalMetaOptions.pos),
            dep: Object(_etc_xramda__WEBPACK_IMPORTED_MODULE_3__["initZero"])(_etc_SpacyInfo__WEBPACK_IMPORTED_MODULE_2__["SpacyInfo"].TotalMetaOptions.dep),
            is_ent: Object(_etc_xramda__WEBPACK_IMPORTED_MODULE_3__["initZero"])(_etc_SpacyInfo__WEBPACK_IMPORTED_MODULE_2__["SpacyInfo"].TotalMetaOptions.is_ent),
        };
        this.data.forEach(d => {
            const match = d.tokens[d.index + indexOffset];
            Object.keys(countObj).forEach(k => {
                const val = makeStringLower(String(match[k]));
                countObj[k][val] += 1;
            });
        });
        return countObj;
    }
    getMatchedHistogram(indexOffset = 0) {
        const totalHist = this.countMatchedKeys(indexOffset);
        const filterZeros = (val, key) => val != 0;
        const nonZero = ramda__WEBPACK_IMPORTED_MODULE_1__["map"](ramda__WEBPACK_IMPORTED_MODULE_1__["pickBy"](filterZeros), totalHist);
        return nonZero;
    }
    getMaxAttHistogram() {
        // const totalHist = this.countPosInfo()
        const newHist = this.countMaxAttKeys();
        const filterZeros = (val, key) => val != 0;
        const nonZero = ramda__WEBPACK_IMPORTED_MODULE_1__["map"](ramda__WEBPACK_IMPORTED_MODULE_1__["pickBy"](filterZeros), newHist);
        return nonZero;
    }
}


/***/ }),

/***/ "./ts/data/TokenWrapper.ts":
/*!*********************************!*\
  !*** ./ts/data/TokenWrapper.ts ***!
  \*********************************/
/*! exports provided: TokenDisplay, TokenWrapper, sideToLetter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenDisplay", function() { return TokenDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenWrapper", function() { return TokenWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sideToLetter", function() { return sideToLetter; });
/* harmony import */ var _etc_Tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../etc/_Tools */ "./ts/etc/_Tools.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");



/**
 * The original tokens, and the indexes that need to be masked
 */
const emptyFullResponse = [{
        text: '[SEP]',
        embeddings: [],
        contexts: [],
        bpe_token: '',
        bpe_pos: '',
        bpe_dep: '',
        bpe_is_ent: null,
        topk_words: [],
        topk_probs: []
    }];
class TokenDisplay {
    constructor(tokens = emptyFullResponse, maskInds = []) {
        this.tokenData = tokens;
        this.maskInds = maskInds;
    }
    /**
     * Push idx to the mask idx list in order from smallest to largest
     */
    mask(val) {
        const currInd = lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"](this.maskInds, val);
        if (currInd == -1) {
            _etc_Tools__WEBPACK_IMPORTED_MODULE_0__["orderedInsert_"](this.maskInds, val);
        }
        else {
            console.log(`${val} already in maskInds!`);
            console.log(this.maskInds);
        }
    }
    toggle(val) {
        const currInd = lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"](this.maskInds, val);
        if (currInd == -1) {
            console.log(`Masking ${val}`);
            this.mask(val);
        }
        else {
            console.log(`Unmasking ${val}`);
            this.unmask(val);
        }
    }
    unmask(val) {
        lodash__WEBPACK_IMPORTED_MODULE_1__["pull"](this.maskInds, val);
    }
    resetMask() {
        this.maskInds = [];
    }
    length() {
        return this.tokenData.length;
    }
    concat(other) {
        const newTokens = lodash__WEBPACK_IMPORTED_MODULE_1__["concat"](this.tokenData, other.tokenData);
        const newMask = lodash__WEBPACK_IMPORTED_MODULE_1__["concat"](this.maskInds, other.maskInds.map(x => x + this.length()));
        return new TokenDisplay(newTokens, newMask);
    }
}
class TokenWrapper {
    constructor(r) {
        this.updateFromResponse(r);
    }
    updateFromResponse(r) {
        const tokensA = r.aa.left;
        this.updateFromComponents(tokensA, []);
    }
    updateFromComponents(a, maskA) {
        this.a = new TokenDisplay(a, maskA);
    }
    updateTokens(r) {
        const desiredKeys = ['contexts', 'embeddings', 'topk_probs', 'topk_words'];
        const newTokens = r.aa.left.map(v => ramda__WEBPACK_IMPORTED_MODULE_2__["pick"](desiredKeys, v));
        const pairs = ramda__WEBPACK_IMPORTED_MODULE_2__["zip"](this.a.tokenData, newTokens);
        pairs.forEach((d, i) => {
            Object.keys(d[1]).map(k => {
                d[0][k] = d[1][k];
            });
        });
    }
    /**
     * Mask the appropriate sentence at the index indicated
     */
    mask(sID, idx) {
        this[sID].mask(idx);
        const opts = ["a", "b"];
        const Na = this.a.length();
    }
}
function sideToLetter(side, atype) {
    // const atype = conf.attType;
    if (atype == "all") {
        return "all";
    }
    const out = side == "left" ? atype[0] : atype[1]; // No type checking?
    return out;
}


/***/ }),

/***/ "./ts/etc/SVGplus.ts":
/*!***************************!*\
  !*** ./ts/etc/SVGplus.ts ***!
  \***************************/
/*! exports provided: SVG, SVGMeasurements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVG", function() { return SVG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGMeasurements", function() { return SVGMeasurements; });
/* harmony import */ var d3_selection_multi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection-multi */ "./node_modules/d3-selection-multi/index.js");

/**
 * Created by hen on 5/15/17.
 * Modified by hoo on 4/16/19.
 */
class SVG {
    static translate({ x, y }) {
        return "translate(" + x + "," + y + ")";
    }
    static rotate(deg) {
        return `rotate(${deg})`;
    }
    static group(parent, classes, pos = { x: 0, y: 0 }) {
        return parent.append('g').attrs({
            class: classes,
            "transform": SVG.translate(pos)
        });
    }
}
class SVGMeasurements {
    constructor(baseElement, classes = '') {
        this.measureElement = baseElement.append('text')
            .attrs({ x: 0, y: -20, class: classes });
    }
    textLength(text, style = null) {
        this.measureElement.attr('style', style);
        this.measureElement.text(text);
        const tl = this.measureElement.node().getComputedTextLength();
        this.measureElement.text('');
        return tl;
    }
}


/***/ }),

/***/ "./ts/etc/SimpleEventHandler.ts":
/*!**************************************!*\
  !*** ./ts/etc/SimpleEventHandler.ts ***!
  \**************************************/
/*! exports provided: SimpleEventHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleEventHandler", function() { return SimpleEventHandler; });
/**
 * Created by hen on 5/15/17.
 * Modified by hoo on 4/16/19.
 */
class SimpleEventHandler {
    constructor(element) {
        this.element = element;
        this.eventListeners = [];
    }
    bind(eventNames, eventFunction) {
        for (const eventName of eventNames.split(' ')) {
            this.eventListeners.push({ eventName, eventFunction });
            const eventFunctionWrap = e => eventFunction(e.detail, e);
            this.element.addEventListener(eventName, eventFunctionWrap, false);
        }
    }
    getListeners() {
        return this.eventListeners;
    }
    trigger(eventName, detail) {
        this.element.dispatchEvent(new CustomEvent(eventName, { detail }));
    }
}


/***/ }),

/***/ "./ts/etc/SpacyInfo.ts":
/*!*****************************!*\
  !*** ./ts/etc/SpacyInfo.ts ***!
  \*****************************/
/*! exports provided: SpacyInfo, spacyColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpacyInfo", function() { return SpacyInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spacyColors", function() { return spacyColors; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _etc_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../etc/colors */ "./ts/etc/colors.ts");



class SpacyInfo {
    constructor() {
        this.colorScale = this.createColorScales();
    }
    createColorScales() {
        const toScale = (keys) => {
            const obj = ramda__WEBPACK_IMPORTED_MODULE_1__["zipObj"](ramda__WEBPACK_IMPORTED_MODULE_1__["map"](String, keys), _etc_colors__WEBPACK_IMPORTED_MODULE_2__["COLORS200"].slice(0, keys.length));
            return k => ramda__WEBPACK_IMPORTED_MODULE_1__["propOr"]("black", k, obj);
        };
        const myColors = {
            pos: toScale(SpacyInfo.TotalMetaOptions.pos),
            dep: toScale(SpacyInfo.TotalMetaOptions.dep),
            is_ent: toScale(SpacyInfo.TotalMetaOptions.is_ent),
            ents: toScale(SpacyInfo.TotalMetaOptions.ents),
            offset: d3__WEBPACK_IMPORTED_MODULE_0__["scaleOrdinal"]().range(['black'])
        };
        return myColors;
    }
}
SpacyInfo.EnglishMetaOptions = {
    pos: ['punct', 'sym', 'x', 'adj', 'verb', 'conj', 'num', 'et', 'adv', 'x', 'adp', 'noun', 'propn', 'part', 'pron', 'space', 'intj'],
    dep: ['root', 'ROOT', 'acl', 'acomp', 'advcl', 'advmod', 'agent', 'amod', 'appos', 'attr', 'aux', 'auxpass', 'case', 'cc', 'ccomp', 'compound', 'conj', 'cop', 'csubj',
        'csubjpass', 'dative', 'dep', 'det', 'dobj', 'expl', 'intj', 'mark', 'meta', 'neg', 'nn', 'nounmod', 'npmod', 'nsubj', 'nsubjpass', 'nummod', 'oprd',
        'obj', 'obl', 'parataxis', 'pcomp', 'pobj', 'poss', 'preconj', 'predet', 'prep', 'prt', 'punct', 'quantmod', 'relcl', 'root', 'xcomp', 'npadvmod'],
    is_ent: [true, false],
    ents: ['person', 'norp', 'fac', 'org', 'gpe', 'loc', 'product', 'event', 'work_of_art', 'law', 'language', 'date', 'time', 'percent', 'money', 'quantity', 'ordinal',
        'cardinal'],
};
/**
 * Obsolete. Represents the information that is included when trained on the universal corpus
 */
SpacyInfo.UniversalMetaOptions = {
    pos: ['adj', 'adp', 'adv', 'aux', 'conj', 'cconj', 'det', 'intj', 'noun', 'num', 'part', 'pron', 'propn', 'punct', 'sconj', 'sym', 'verb', 'x', 'space'],
    dep: ['acl', 'advcl', 'advmod', 'amod', 'appos', 'aux', 'case', 'cc', 'ccomp', 'clf', 'compound', 'conj', 'cop', 'csubj', 'dep', 'det', 'discourse',
        'dislocated', 'expl', 'fixed', 'flat', 'goeswith', 'iobj', 'list', 'mark', 'nmod', 'nsubj', 'nummod', 'obj', 'obl', 'orphan', 'parataxis', 'punct', 'reparandum',
        'root', 'vocative', 'xcomp'],
    is_ent: [true, false],
    ents: ['person', 'norp', 'fac', 'org', 'gpe', 'loc', 'product', 'event', 'work_of_art', 'law', 'language', 'date', 'time', 'percent', 'money', 'quantity', 'ordinal',
        'cardinal'],
};
SpacyInfo.TotalMetaOptions = {
    pos: ramda__WEBPACK_IMPORTED_MODULE_1__["union"](SpacyInfo.EnglishMetaOptions.pos, SpacyInfo.UniversalMetaOptions.pos),
    dep: SpacyInfo.EnglishMetaOptions.dep,
    is_ent: SpacyInfo.EnglishMetaOptions.is_ent,
    ents: SpacyInfo.EnglishMetaOptions.ents,
};
const spacyColors = new SpacyInfo();


/***/ }),

/***/ "./ts/etc/URLHandler.ts":
/*!******************************!*\
  !*** ./ts/etc/URLHandler.ts ***!
  \******************************/
/*! exports provided: URLHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLHandler", function() { return URLHandler; });
/**
 * Created by hen on 5/15/17.
 */
class URLHandler {
    static basicURL() {
        const url_path = window.location.pathname.split('/').slice(0, -2).join('/');
        return window.location.origin + (url_path.length ? url_path : '');
    }
    /**
     * Read all URL parameters into a map.
     * @returns {Map} the url parameters as a key-value store (ES6 map)
     */
    static get parameters() {
        // Adapted from:  http://stackoverflow.com/questions/2090551/parse-query-string-in-javascript
        const query = window.location.search.substring(1);
        const vars = query.split('&');
        console.log(vars, "--- vars");
        const urlParameters = {};
        const isInt = x => (/^[0-9]+$/).test(x);
        const isFloat = x => (/^[0-9]+\.[0-9]*$/).test(x);
        const typeCast = val => {
            if (isInt(val)) {
                return Number.parseInt(val, 10);
            }
            else if (isFloat(val)) {
                return Number.parseFloat(val);
            }
            // else:
            return val;
        };
        vars.forEach(v => {
            if (v.length > 0) {
                const splits = v.split('=');
                const key = decodeURIComponent(splits[0]);
                let raw_value = decodeURIComponent(splits[1]);
                const isArray = raw_value.startsWith('..');
                if (isArray) {
                    raw_value = raw_value.slice(2);
                }
                if (raw_value.length < 1) {
                    urlParameters[key] = isArray ? [] : '';
                }
                else if (isArray) {
                    urlParameters[key] = raw_value.split(',')
                        .map(val => typeCast(val));
                }
                else {
                    urlParameters[key] = typeCast(raw_value);
                }
            }
        });
        return urlParameters;
    }
    /**
     * Generates an URL string from a map of url parameters
     * @param {{}} urlParameters - the map of parameters
     * @returns {string} - an URI string
     */
    static urlString(urlParameters) {
        const attr = [];
        Object.keys(urlParameters).forEach(k => {
            const v = urlParameters[k];
            if (v !== undefined) {
                let value = v;
                if (Array.isArray(v))
                    value = '..' + v.join(',');
                attr.push(encodeURI(k + '=' + value));
            }
        });
        const url = window.location.pathname;
        let res = url.substring(url.lastIndexOf('/') + 1);
        if (attr.length > 0) {
            res += '?' + attr.join('&');
        }
        return res;
    }
    static updateURLParam(key, value, addToBrowserHistory = true) {
        const currentParams = URLHandler.parameters;
        currentParams[key] = value;
        URLHandler.updateUrl(currentParams, addToBrowserHistory);
    }
    // /**
    //  * Generates a key-value map of all URL params and replaces replaceKeys
    //  * @param updateKeys
    //  */
    // static updateURLParams(updateKeys) {
    //     const currentParams = URLHandler.parameters;
    //     Object.keys(updateKeys).forEach((k) => currentParams[k] = updateKeys[k])
    //     return currentParams;
    // }
    static updateUrl(urlParameters, addToBrowserHistory = true) {
        if (addToBrowserHistory) {
            window.history.pushState(urlParameters, '', URLHandler.urlString(urlParameters));
        }
        else {
            window.history.replaceState(urlParameters, '', URLHandler.urlString(urlParameters));
        }
    }
}


/***/ }),

/***/ "./ts/etc/Util.ts":
/*!************************!*\
  !*** ./ts/etc/Util.ts ***!
  \************************/
/*! exports provided: Util, Sel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Util", function() { return Util; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sel", function() { return Sel; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");

/**
 * Created by hen on 5/15/17.
 * Modifyed by hoo on 4/16/19.
 */
let the_unique_id_counter = 0;
class Util {
    static simpleUId({ prefix = '' }) {
        the_unique_id_counter += 1;
        return prefix + the_unique_id_counter;
    }
}
/**
 * Selection utility functions should be static methods in the below class
 */
class Sel {
}
Sel.setSelVisible = (x) => x.attr("visibility", "visible");
Sel.setSelHidden = (x) => x.attr("visibility", "hidden");
Sel.setVisible = (x) => Sel.setSelVisible(d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"](x));
Sel.setHidden = (x) => Sel.setSelHidden(d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"](x));
Sel.hideElement = (hE) => hE.transition().styles({
    'opacity': 0,
    'pointer-events': 'none',
    'display': 'none'
});
Sel.unhideElement = (hE) => hE.transition().styles({
    'opacity': 1,
    'pointer-events': null,
    'display': null
});


/***/ }),

/***/ "./ts/etc/_Tools.ts":
/*!**************************!*\
  !*** ./ts/etc/_Tools.ts ***!
  \**************************/
/*! exports provided: findAllIndexes, insertAt_, orderedInsert_, set2SortedArray, makeRandom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findAllIndexes", function() { return findAllIndexes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertAt_", function() { return insertAt_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderedInsert_", function() { return orderedInsert_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set2SortedArray", function() { return set2SortedArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeRandom", function() { return makeRandom; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

function ascOrder(n1, n2) {
    if (n1 < n2) {
        return -1;
    }
    else if (n1 > n2) {
        return 1;
    }
    return 0;
}

/**
 * Find all indexes that match a particular predicate
 */
function findAllIndexes(array, predicate) {
    let fromIndex = 0;
    let results = [];
    let i = lodash__WEBPACK_IMPORTED_MODULE_0__["findIndex"](array, predicate, fromIndex);
    while (i != -1) {
        results.push(i);
        i = lodash__WEBPACK_IMPORTED_MODULE_0__["findIndex"](array, predicate, i + 1);
    }
    return results;
}
;
function insertAt_(array, val, ind) {
    array.splice(ind, 0, val);
    return array;
}
/**
 * Convert a set to an ordered array
 */
function set2SortedArray(input) {
    return Array.from(input).sort(ascOrder);
}
/**
 * Insert a value into array in sorted order IN PLACE
 *
 * WARNING: Only handles numbers, sorted from least to greatest
 * - Assumes already sorted array
 */
function orderedInsert_(array, val, coldstart = false) {
    // Resort array if desired
    if (coldstart) {
        array.sort(ascOrder);
    }
    const ind = lodash__WEBPACK_IMPORTED_MODULE_0__["sortedIndex"](array, val);
    return insertAt_(array, val, ind);
}
function makeRandom(len) {
    const a = new Array(len).fill(0);
    return a.map((x) => { return lodash__WEBPACK_IMPORTED_MODULE_0__["random"](-5, 5, true); });
}


/***/ }),

/***/ "./ts/etc/apiHelpers.ts":
/*!******************************!*\
  !*** ./ts/etc/apiHelpers.ts ***!
  \******************************/
/*! exports provided: makeUrl, toPayload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeUrl", function() { return makeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPayload", function() { return toPayload; });
/**
 * Convert a JS object into GET URL parameters
 *
 * @param base Base URL atop which to add GET parameters
 * @param params Object to insert into a URL string
 */
function makeUrl(base, params) {
    if (params) {
        let out = base + "?";
        Object.keys(params).forEach(k => {
            out += k;
            out += '=';
            out += params[k];
            out += "&";
        });
        return out.replace(/&$/g, "");
    }
    else {
        return base;
    }
}
;
/**
 * Convert information in GET request into the message for a POST request
 */
const toPayload = (toSend) => {
    return {
        method: "POST",
        body: JSON.stringify(toSend),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    };
};


/***/ }),

/***/ "./ts/etc/arrayUtils.ts":
/*!******************************!*\
  !*** ./ts/etc/arrayUtils.ts ***!
  \******************************/
/*! exports provided: sortWithIndices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortWithIndices", function() { return sortWithIndices; });
/**
 * Copies and sorts an array while keeping track of the indices. Currently only supports sorting max -> min.
 *
 * @param arr - Array to be copied and sorted
 */
function sortWithIndices(arr, fn) {
    // If fn is not provided, default to sorting by max value
    if (!fn) {
        fn = function (left, right) {
            return left[0] > right[0] ? -1 : 1;
        };
    }
    let out = {
        arr: [],
        sortIndices: []
    };
    let idxTracker = [];
    for (let i = 0; i < arr.length; i++) {
        idxTracker[i] = [arr[i], i];
    }
    idxTracker.sort(function (left, right) {
        return left[0] > right[0] ? -1 : 1;
    });
    for (var j = 0; j < arr.length; j++) {
        out.sortIndices.push(idxTracker[j][1]);
        out.arr[j] = idxTracker[j][0];
    }
    return out;
}


/***/ }),

/***/ "./ts/etc/colors.ts":
/*!**************************!*\
  !*** ./ts/etc/colors.ts ***!
  \**************************/
/*! exports provided: COLORS200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORS200", function() { return COLORS200; });
// Colors were generated to be as visually distinct as possible by: http://jnnnnn.github.io/category-colors-constrained.html
const COLORS200 = [
    "#3957ff", "#d3fe14", "#c9080a", "#fec7f8", "#0b7b3e", "#0bf0e9", "#c203c8", "#fd9b39",
    "#888593", "#906407", "#98ba7f", "#fe6794", "#10b0ff", "#ac7bff", "#fee7c0", "#964c63",
    "#1da49c", "#0ad811", "#bbd9fd", "#fe6cfe", "#297192", "#d1a09c", "#78579e", "#81ffad",
    "#739400", "#ca6949", "#d9bf01", "#646a58", "#d5097e", "#bb73a9", "#ccf6e9", "#9cb4b6",
    "#b6a7d4", "#9e8c62", "#6e83c8", "#01af64", "#a71afd", "#cfe589", "#d4ccd1", "#fd4109",
    "#bf8f0e", "#2f786e", "#4ed1a5", "#d8bb7d", "#a54509", "#6a9276", "#a4777a", "#fc12c9",
    "#606f15", "#3cc4d9", "#f31c4e", "#73616f", "#f097c6", "#fc8772", "#92a6fe", "#875b44",
    "#699ab3", "#94bc19", "#7d5bf0", "#d24dfe", "#c85b74", "#68ff57", "#b62347", "#994b91",
    "#646b8c", "#977ab4", "#d694fd", "#c4d5b5", "#fdc4bd", "#1cae05", "#7bd972", "#e9700a",
    "#d08f5d", "#8bb9e1", "#fde945", "#a29d98", "#1682fb", "#9ad9e0", "#d6cafe", "#8d8328",
    "#b091a7", "#647579", "#1f8d11", "#e7eafd", "#b9660b", "#a4a644", "#fec24c", "#b1168c",
    "#188cc1", "#7ab297", "#4468ae", "#c949a6", "#d48295", "#eb6dc2", "#d5b0cb", "#ff9ffb",
    "#fdb082", "#af4d44", "#a759c4", "#a9e03a", "#0d906b", "#9ee3bd", "#5b8846", "#0d8995",
    "#f25c58", "#70ae4f", "#847f74", "#9094bb", "#ffe2f1", "#a67149", "#936c8e", "#d04907",
    "#c3b8a6", "#cef8c4", "#7a9293", "#fda2ab", "#2ef6c5", "#807242", "#cb94cc", "#b6bdd0",
    "#b5c75d", "#fde189", "#b7ff80", "#fa2d8e", "#839a5f", "#28c2b5", "#e5e9e1", "#bc79d8",
    "#7ed8fe", "#9f20c3", "#4f7a5b", "#f511fd", "#09c959", "#bcd0ce", "#8685fd", "#98fcff",
    "#afbff9", "#6d69b4", "#5f99fd", "#aaa87e", "#b59dfb", "#5d809d", "#d9a742", "#ac5c86",
    "#9468d5", "#a4a2b2", "#b1376e", "#d43f3d", "#05a9d1", "#c38375", "#24b58e", "#6eabaf",
    "#66bf7f", "#92cbbb", "#ddb1ee", "#1be895", "#c7ecf9", "#a6baa6", "#8045cd", "#5f70f1",
    "#a9d796", "#ce62cb", "#0e954d", "#a97d2f", "#fcb8d3", "#9bfee3", "#4e8d84", "#fc6d3f",
    "#7b9fd4", "#8c6165", "#72805e", "#d53762", "#f00a1b", "#de5c97", "#8ea28b", "#fccd95",
    "#ba9c57", "#b79a82", "#7c5a82", "#7d7ca4", "#958ad6", "#cd8126", "#bdb0b7", "#10e0f8",
    "#dccc69", "#d6de0f", "#616d3d", "#985a25", "#30c7fd", "#0aeb65", "#e3cdb4", "#bd1bee",
    "#ad665d", "#d77070", "#8ea5b8", "#5b5ad0", "#76655e", "#598100", "#86757e", "#5ea068",
];


/***/ }),

/***/ "./ts/etc/types.ts":
/*!*************************!*\
  !*** ./ts/etc/types.ts ***!
  \*************************/
/*! exports provided: Toggled, NormBy, ModelKind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toggled", function() { return Toggled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormBy", function() { return NormBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelKind", function() { return ModelKind; });
var Toggled;
(function (Toggled) {
    Toggled[Toggled["ADDED"] = 0] = "ADDED";
    Toggled[Toggled["REMOVED"] = 1] = "REMOVED";
})(Toggled || (Toggled = {}));
var NormBy;
(function (NormBy) {
    NormBy[NormBy["Row"] = 0] = "Row";
    NormBy[NormBy["Col"] = 1] = "Col";
    NormBy[NormBy["All"] = 2] = "All";
})(NormBy || (NormBy = {}));
var ModelKind;
(function (ModelKind) {
    ModelKind["Bidirectional"] = "bidirectional";
    ModelKind["Autoregressive"] = "autoregressive";
})(ModelKind || (ModelKind = {}));


/***/ }),

/***/ "./ts/etc/xd3.ts":
/*!***********************!*\
  !*** ./ts/etc/xd3.ts ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");

d3__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.clear = function () {
    this.selectAll('*').remove();
    return this;
};
d3__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.toggleClass = function (className) {
    this.classed(className, !this.classed(className));
    return this;
};
d3__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.show = function () {
    this.style('display', 'initial');
    return this;
};
d3__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.hide = function () {
    this.style('display', 'none');
    return this;
};
d3__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.toggle = function () {
    var isHidden = this.style('display') == 'none';
    return this.style('display', isHidden ? 'inherit' : 'none');
};
d3__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.after = function (tagName) {
    var elements = [];
    this.each(function () {
        var element = document.createElement(tagName);
        this.parentNode.insertBefore(element, this.nextSibling);
        elements.push(element);
    });
    return d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"](elements);
};
d3__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.before = function (tagName) {
    var elements = [];
    this.each(function () {
        var element = document.createElement(tagName);
        this.parentNode.insertBefore(element, this);
        elements.push(element);
    });
    return d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"](elements);
};


/***/ }),

/***/ "./ts/etc/xramda.ts":
/*!**************************!*\
  !*** ./ts/etc/xramda.ts ***!
  \**************************/
/*! exports provided: objFromKeys, assignZero, initZero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objFromKeys", function() { return objFromKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignZero", function() { return assignZero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initZero", function() { return initZero; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");

/**
 * Map a list as values to an object whose keys are the original list
 */
// (String -> b)  -> [String] -> {String: b}
const objFromKeys = ramda__WEBPACK_IMPORTED_MODULE_0__["curry"]((fn, keys) => ramda__WEBPACK_IMPORTED_MODULE_0__["zipObj"](keys, ramda__WEBPACK_IMPORTED_MODULE_0__["map"](fn, keys)));
const assignZero = x => 0;
/**
 * Given an list, create an object whose values are all 0
 */
const initZero = objFromKeys(assignZero);


/***/ }),

/***/ "./ts/main.ts":
/*!********************!*\
  !*** ./ts/main.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vis_myMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vis/myMain */ "./ts/vis/myMain.ts");
/* harmony import */ var _api_mainApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/mainApi */ "./ts/api/mainApi.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_TokenWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/TokenWrapper */ "./ts/data/TokenWrapper.ts");
/* harmony import */ var _file_loader_name_exBERT_html_exBERT_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-loader?name=exBERT.html!../exBERT.html */ "./node_modules/file-loader/dist/cjs.js?name=exBERT.html!./exBERT.html");
/* harmony import */ var _file_loader_name_exBERT_html_exBERT_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_exBERT_html_exBERT_html__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _file_loader_name_index_html_index_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! file-loader?name=index.html!../index.html */ "./node_modules/file-loader/dist/cjs.js?name=index.html!./index.html");
/* harmony import */ var _file_loader_name_index_html_index_html__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_index_html_index_html__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/main.scss */ "./css/main.scss");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_main_scss__WEBPACK_IMPORTED_MODULE_6__);




// import { Tester } from "../ts/test"



function doMySvg() {
    return new _vis_myMain__WEBPACK_IMPORTED_MODULE_0__["MainGraphic"]();
}
;
/**
 * Create the static files needed for the demo. Save the keys and file paths to a json object that is then written to a file
 *
 * This will print the object after every call. When the key length is the expected length, right click in chrome and select "save as global variable"
 *
 * Then, in the console, type "copy(temp1)". Use sublime text (it is the best for handling large files) to paste this into the code and save it as ____.json
 *
 * @param sentence - The sentence to analyze
 * @param maskInd - Which index to mask in the sentence. Atm, can only record one masking
 * @param outDictPath - Where to save the object of hashkey: filepath
 */
function createDemos(sentence, maskInd, modelName, corpusName, outDictPath) {
    const api = new _api_mainApi__WEBPACK_IMPORTED_MODULE_1__["API"]();
    const layers = lodash__WEBPACK_IMPORTED_MODULE_2__["range"](12);
    const L = 0;
    const contentHash = {}; // Map hash -> contents
    // Get the base return for all page initializations
    lodash__WEBPACK_IMPORTED_MODULE_2__["range"](12).forEach(L => {
        api.getMetaAttentions(modelName, sentence, L, contentHash).then(r0 => {
            const tokCapsule = new _data_TokenWrapper__WEBPACK_IMPORTED_MODULE_3__["TokenWrapper"](r0.payload);
            // Unmasked response:
            api.updateMaskedAttentions(modelName, tokCapsule.a, sentence, L, contentHash).then(r1 => {
                // Masked word and searching responses:
                tokCapsule.a.mask(maskInd);
                api.updateMaskedAttentions(modelName, tokCapsule.a, sentence, L, contentHash).then(r2 => {
                    // Get search results by embedding
                    const embedding = r2['aa']['left'][maskInd].embeddings;
                    api.getNearestEmbeddings(modelName, corpusName, embedding, L, lodash__WEBPACK_IMPORTED_MODULE_2__["range"](12), 50, contentHash).then(x => {
                    });
                    // Get search results by context
                    const context = r2['aa']['left'][maskInd].contexts;
                    api.getNearestContexts(modelName, corpusName, context, L, lodash__WEBPACK_IMPORTED_MODULE_2__["range"](12), 50, contentHash).then(x => {
                        console.log(Object.keys(contentHash).length);
                        console.log(contentHash);
                    });
                });
            });
        });
    });
}
/**
 *
 * Observe how the demo creation process works.
 *
 * If desired to mask multiple words in the input for demo purposes, try looping over the mask inds and masking each one individually
 *
 * @param sentence The demo sentence
 * @param maskInd Desired index to mask (can currently only accept a single mask index)
 * @param outDictPath
 */
function inspectDemos(sentence, maskInd, modelName, corpusName, outDictPath) {
    const api = new _api_mainApi__WEBPACK_IMPORTED_MODULE_1__["API"]();
    const contentHash = {};
    // Get the base return for all page initializations
    lodash__WEBPACK_IMPORTED_MODULE_2__["range"](1).forEach(L => {
        api.getMetaAttentions(modelName, sentence, L, "").then(r0 => {
            const tokCapsule = new _data_TokenWrapper__WEBPACK_IMPORTED_MODULE_3__["TokenWrapper"](r0.payload);
            // Unmasked response:
            api.updateMaskedAttentions(modelName, tokCapsule.a, sentence, L, _api_mainApi__WEBPACK_IMPORTED_MODULE_1__["emptyTokenDisplay"]).then(r1 => {
                // Masked word and searching responses:
                tokCapsule.a.mask(maskInd);
                api.updateMaskedAttentions(modelName, tokCapsule.a, sentence, L, _api_mainApi__WEBPACK_IMPORTED_MODULE_1__["emptyTokenDisplay"]).then(r2 => {
                    console.log(r2);
                    // Get search results by embedding
                    const embedding = r2['aa']['left'][maskInd].embeddings;
                    api.getNearestEmbeddings(modelName, corpusName, embedding, L, lodash__WEBPACK_IMPORTED_MODULE_2__["range"](12), 50, contentHash).then(x => {
                    });
                    // Get search results by context
                    const context = r2['aa']['left'][maskInd].contexts;
                    api.getNearestContexts(modelName, corpusName, context, L, lodash__WEBPACK_IMPORTED_MODULE_2__["range"](12), 50).then(x => {
                    });
                });
            });
        });
    });
}
function replTest() {
    // Tester.testAttWrapperConstructor()
    // Tester.testUpdateMaskedAttention()
    // Tester.testNjAray();
    // Tester.testRandomArrayCreation();
    // Tester.testFaissWrapper();
    // Tester.testD3Ordinal();
    // Tester.testFaissSearchResultsHist();
    // Tester.testReadingJSON();
}
window.onload = () => {
    doMySvg();
    // replTest();
    // createDemos("Chicken tastes absolutely delicious if you know what you're doing", 4, "")
    console.log("Done loading window");
};


/***/ }),

/***/ "./ts/uiConfig.ts":
/*!************************!*\
  !*** ./ts/uiConfig.ts ***!
  \************************/
/*! exports provided: UIConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIConfig", function() { return UIConfig; });
/* harmony import */ var _etc_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./etc/types */ "./ts/etc/types.ts");
/* harmony import */ var _etc_Tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./etc/_Tools */ "./ts/etc/_Tools.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _etc_URLHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./etc/URLHandler */ "./ts/etc/URLHandler.ts");





const falsey = val => (new Set(['false', 0, "no", false, null, ""])).has(val);
const truthy = val => !falsey(val);
const toNumber = x => +x;
class UIConfig {
    constructor() {
        this._conf = {};
        this._nHeads = 12; // How do I automate this?
        this._nLayers = null;
        this.attType = 'aa'; // Don't allow this to be modified by the user.
        this.fromURL();
        this.toURL(false);
    }
    fromURL() {
        const params = _etc_URLHandler__WEBPACK_IMPORTED_MODULE_4__["URLHandler"].parameters;
        this._conf = {
            model: params['model'] || 'bert-base-cased',
            modelKind: params['modelKind'] || _etc_types__WEBPACK_IMPORTED_MODULE_0__["ModelKind"].Bidirectional,
            sentence: params['sentence'] || "The girl ran to a local pub to escape the din of her city.",
            corpus: params['corpus'] || 'woz',
            layer: params['layer'] || 1,
            heads: this._initHeads(params['heads']),
            threshold: params['threshold'] || 0.7,
            tokenInd: params['tokenInd'] || null,
            tokenSide: params['tokenSide'] || null,
            maskInds: params['maskInds'] || [9],
            metaMatch: params['metaMatch'] || "pos",
            metaMax: params['metaMax'] || "pos",
            displayInspector: params['displayInspector'] || null,
            offsetIdxs: this._initOffsetIdxs(params['offsetIdxs']),
            hideClsSep: truthy(params['hideClsSep']) || true,
        };
        this._token = { side: this._conf.tokenSide, ind: this._conf.tokenInd };
    }
    toURL(updateHistory = false) {
        _etc_URLHandler__WEBPACK_IMPORTED_MODULE_4__["URLHandler"].updateUrl(this._conf, updateHistory);
    }
    _initOffsetIdxs(v) {
        if (v == null) {
            return [-1, 0, 1];
        }
        else {
            const numberArr = ramda__WEBPACK_IMPORTED_MODULE_3__["map"](toNumber, v);
            return numberArr;
        }
    }
    _initHeads(v) {
        if (v == null || v.length < 1) {
            this.selectAllHeads();
        }
        else {
            console.log(this.headSet(new Set(v))._conf.heads);
        }
        return this.heads();
    }
    nHeads(val) {
        if (val == null)
            return this._nHeads;
        this._nHeads = val;
        return this;
    }
    nLayers(val) {
        if (val == null)
            return this._nLayers;
        this._nLayers = val;
        return this;
    }
    toggleSelectAllHeads() {
        if (this.heads().length == 0) {
            this.selectAllHeads();
        }
        else {
            this.selectNoHeads();
        }
    }
    selectAllHeads() {
        this.headSet(new Set(lodash__WEBPACK_IMPORTED_MODULE_2__["range"](0, this._nHeads)));
    }
    selectNoHeads() {
        this.headSet(new Set([]));
    }
    toggleHead(head) {
        let out;
        if (this.headSet().has(head)) {
            this.headSet().delete(head);
            out = _etc_types__WEBPACK_IMPORTED_MODULE_0__["Toggled"].REMOVED;
        }
        else {
            this.headSet().add(head);
            out = _etc_types__WEBPACK_IMPORTED_MODULE_0__["Toggled"].ADDED;
        }
        // Set through setter function to ensure url is updated
        this.headSet(this.headSet()); // I hate mutable datastructures... This is confusing.
        return out;
    }
    toggleToken(e) {
        const picker = ramda__WEBPACK_IMPORTED_MODULE_3__["pick"](['ind', 'side']);
        const compareEvent = picker(e);
        const compareToken = picker(this.token());
        if (ramda__WEBPACK_IMPORTED_MODULE_3__["equals"](compareToken, compareEvent)) {
            this.rmToken();
        }
        else {
            this.token(e);
        }
        return this;
    }
    token(val) {
        if (val == null)
            return this._token;
        this._token = val;
        this._conf.tokenInd = val.ind;
        this._conf.tokenSide = val.side;
        this.toURL();
        return this;
    }
    hasToken() {
        const conf = this._conf;
        const actuallyNull = ((conf.tokenInd == null) && (conf.tokenSide == null));
        const strNull = (conf.tokenInd == "null");
        return (!actuallyNull) && (!strNull);
    }
    rmToken() {
        this.token({ ind: null, side: null });
        return this;
    }
    sentence(val) {
        if (val == null)
            return this._conf.sentence;
        this._conf.sentence = val;
        this.toURL(true);
        return this;
    }
    threshold(val) {
        if (val == null)
            return this._conf.threshold;
        this._conf.threshold = val;
        this.toURL();
        return this;
    }
    heads() {
        return this._conf.heads;
    }
    layer(val) {
        if (val == null)
            return this._conf.layer;
        this._conf.layer = val;
        this.toURL();
        return this;
    }
    headSet(val) {
        if (val == null) {
            return this._headSet;
        }
        this._headSet = val;
        this._conf.heads = _etc_Tools__WEBPACK_IMPORTED_MODULE_1__["set2SortedArray"](this._headSet);
        this.toURL();
        return this;
    }
    metaMatch(val) {
        if (val == null)
            return this._conf.metaMax;
        this._conf.metaMax = val;
        this.toURL();
        return this;
    }
    metaMax(val) {
        if (val == null)
            return this._conf.metaMatch;
        this._conf.metaMatch = val;
        this.toURL();
        return this;
    }
    maskInds(val) {
        if (val == null)
            return this._conf.maskInds;
        this._conf.maskInds = val;
        this.toURL();
        return this;
    }
    displayInspector(val) {
        if (val == null)
            return this._conf.displayInspector;
        this._conf.displayInspector = val;
        this.toURL();
        return this;
    }
    offsetIdxs(val) {
        if (val == null)
            return this._conf.offsetIdxs;
        // convert to numbers
        this._conf.offsetIdxs = ramda__WEBPACK_IMPORTED_MODULE_3__["map"](toNumber, val);
        this.toURL();
        return this;
    }
    hideClsSep(val) {
        if (val == null)
            return this._conf.hideClsSep;
        this._conf.hideClsSep = truthy(val);
        this.toURL();
        return this;
    }
    model(val) {
        if (val == null)
            return this._conf.model;
        this._conf.model = val;
        this.toURL();
        return this;
    }
    modelKind(val) {
        if (val == null)
            return this._conf.modelKind;
        this._conf.modelKind = val;
        this.toURL();
        return this;
    }
    /**
     * Return the offset needed for the modelKind in the configuration
     */
    get offset() {
        switch (this.modelKind()) {
            case _etc_types__WEBPACK_IMPORTED_MODULE_0__["ModelKind"].Bidirectional: {
                return 0;
            }
            case _etc_types__WEBPACK_IMPORTED_MODULE_0__["ModelKind"].Autoregressive: {
                return 0;
            }
            default: {
                return 0;
            }
        }
    }
    corpus(val) {
        if (val == null)
            return this._conf.corpus;
        this._conf.corpus = val;
        this.toURL();
        return this;
    }
}


/***/ }),

/***/ "./ts/vis/AttentionConnector.ts":
/*!**************************************!*\
  !*** ./ts/vis/AttentionConnector.ts ***!
  \**************************************/
/*! exports provided: scaleLinearWidth, AttentionGraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleLinearWidth", function() { return scaleLinearWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttentionGraph", function() { return AttentionGraph; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var d3_selection_multi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection-multi */ "./node_modules/d3-selection-multi/index.js");
/* harmony import */ var _EdgeConnector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EdgeConnector */ "./ts/vis/EdgeConnector.ts");
/* harmony import */ var _VisComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VisComponent */ "./ts/vis/VisComponent.ts");
/* harmony import */ var _etc_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../etc/types */ "./ts/etc/types.ts");





const scaleLinearWidth = opacity => 5 * opacity ^ 0.33;
class AttentionGraph extends _VisComponent__WEBPACK_IMPORTED_MODULE_3__["VComponent"] {
    constructor(d3Parent, eventHandler, options = {}) {
        super(d3Parent, eventHandler);
        this.css_name = '';
        // OPTIONS WITH DEFAULTS
        this._threshold = 0.7; // Accumulation threshold. Between 0-1
        this.options = {
            boxheight: 26,
            height: 500,
            width: 200,
            offset: 0,
        };
        /**
         * Scale the opacity according to the values of the data, from 0 to max of contained data
         * Normalize by each source target, or across the whole
         */
        this.createScales = () => {
            this.opacityScales = [];
            let arr = [];
            // Group normalization
            switch (this.normBy) {
                case _etc_types__WEBPACK_IMPORTED_MODULE_4__["NormBy"].Row:
                    arr = this.edgeData.extent(1);
                    this.opacityScales = [];
                    arr.forEach((v, i) => {
                        this.opacityScales.push(d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
                            .domain([0, v[1]])
                            .range([0, 0.9]));
                    });
                    break;
                case _etc_types__WEBPACK_IMPORTED_MODULE_4__["NormBy"].Col:
                    arr = this.edgeData.extent(0);
                    this.opacityScales = [];
                    arr.forEach((v, i) => {
                        this.opacityScales.push(d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
                            .domain([0, v[1]])
                            .range([0, 0.9]));
                    });
                    break;
                case _etc_types__WEBPACK_IMPORTED_MODULE_4__["NormBy"].All:
                    const maxIn = d3__WEBPACK_IMPORTED_MODULE_0__["max"](this.plotData.map((d) => d.v));
                    for (let i = 0; i < this._data.length; i++) {
                        this.opacityScales.push(d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
                            .domain([0, maxIn])
                            .range([0, 1]));
                    }
                    break;
                default:
                    console.log("Nor norming specified");
                    break;
            }
        };
        this.superInitSVG(options);
        this._init();
    }
    _init() {
        this.svg = this.parent;
        this.graph = this.svg.selectAll(`.atn-curve`);
        this.linkGen = d3__WEBPACK_IMPORTED_MODULE_0__["linkHorizontal"]()
            .x(d => d[0])
            .y(d => d[1]);
    }
    // Define whether to use the 'j' or 'i' attribute to calculate opacities
    scaleIdx() {
        switch (this.normBy) {
            case _etc_types__WEBPACK_IMPORTED_MODULE_4__["NormBy"].Col:
                return 'j';
            case _etc_types__WEBPACK_IMPORTED_MODULE_4__["NormBy"].Row:
                return 'i';
            case _etc_types__WEBPACK_IMPORTED_MODULE_4__["NormBy"].All:
                return 'i';
        }
    }
    /**
     * Create connections between locations of the SVG using D3's linkGen
     */
    createConnections() {
        const self = this;
        const op = this.options;
        if (this.paths) {
            this.paths.attrs({
                'd': (d, i) => {
                    const data = {
                        source: [0, op.boxheight * (d.i + 0.5 + op.offset)],
                        target: [op.width, op.boxheight * (d.j + 0.5)] // + 2 allows small offset
                    };
                    return this.linkGen(data);
                },
                'class': 'atn-curve'
            })
                .attr("src-idx", (d, i) => d.i)
                .attr("target-idx", (d, i) => d.j);
        }
    }
    /**
     * Change the height of the SVG
     */
    updateHeight() {
        const op = this.options;
        if (this.svg != null) {
            this.svg.attr("height", this.options.height + (op.offset * this.options.boxheight));
        }
        return this;
    }
    /**
     * Change the width of the SVG
     */
    updateWidth() {
        if (this.svg != null) {
            this.svg.attr("width", this.options.width);
        }
        return this;
    }
    /**
     * Change the Opacity of the lines according to the value of the data
     */
    updateOpacity() {
        const self = this;
        if (this.paths != null) {
            // paths.transition().duration(500).attr('opacity', (d) => {
            this.paths.attr('opacity', (d) => {
                const val = this.opacityScales[d[self.scaleIdx()]](d.v);
                return val;
            });
            this.paths.attr('stroke-width', (d) => {
                const val = this.opacityScales[d[self.scaleIdx()]](d.v);
                return scaleLinearWidth(val); //5 * val^0.33;
            });
        }
        return this;
    }
    /**
     * Rerender the graph in the event that the data changes
     */
    updateData() {
        if (this.graph != null) {
            d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"](".atn-curve").remove();
            const data = this.plotData;
            this.paths = this.graph
                .data(data)
                .join('path');
            this.createConnections();
            this.updateOpacity();
            return this;
        }
    }
    data(value) {
        if (value == null) {
            return this._data;
        }
        this._data = value;
        this.edgeData = new _EdgeConnector__WEBPACK_IMPORTED_MODULE_2__["EdgeData"](value);
        this.plotData = this.edgeData.format(this._threshold);
        this.createScales();
        this.updateData();
        return this;
    }
    height(value) {
        if (value == null) {
            return this.options.height;
        }
        this.options.height = value;
        this.updateHeight();
        return this;
    }
    width(value) {
        if (value == null) {
            return this.options.width;
        }
        this.options.width = value;
        this.updateWidth();
        return this;
    }
    threshold(value) {
        if (value == null) {
            return this._threshold;
        }
        this._threshold = value;
        this.plotData = this.edgeData.format(this._threshold);
        this.createScales();
        this.updateData();
        return this;
    }
    _wrangle(data) {
        return data;
    }
    _render(data) {
        this.svg.html('');
        this.updateHeight();
        this.updateWidth();
        this.updateData();
        return this;
    }
}
AttentionGraph.events = {}; // No events needed for this one


/***/ }),

/***/ "./ts/vis/AttentionHeadBox.ts":
/*!************************************!*\
  !*** ./ts/vis/AttentionHeadBox.ts ***!
  \************************************/
/*! exports provided: getAttentionInfo, AttentionHeadBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttentionInfo", function() { return getAttentionInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttentionHeadBox", function() { return AttentionHeadBox; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _VisComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VisComponent */ "./ts/vis/VisComponent.ts");
/* harmony import */ var _etc_SVGplus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../etc/SVGplus */ "./ts/etc/SVGplus.ts");
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tensorflow/tfjs */ "./node_modules/@tensorflow/tfjs/dist/tf.esm.js");




/**
 * From an attention matrix selected by layer, show a summary of the attentions belonging to each head.
 *
 * @param headMat The matrix representing all the attentions by head (layer already selected) <head, from, to>
 * @param headList The heads that are selected
 * @param side Is this the right or the left display?
 * @param tokenInd If not null, select just the information from a single token across heads
 * @returns Information needed to label the headbox
 */
function getAttentionInfo(headMat, headList, side = "left", token = null) {
    // Collect only from headlist, average each head, transpose to ease iteration
    if (headList.length == 0) {
        return {
            rows: [[]],
            labels: [],
            max: 0,
        };
    }
    let dim = null;
    // Only change the attention graph opposite selected token
    if (token != null && (token.side != side)) {
        dim = token.side == "left" ? -2 : -1; // Assign to "from" direction if "left" 
    }
    let axis = side == "left" ? 2 : 1;
    // average across the axis representing the attentions.
    let gatheredMat = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_3__["tensor3d"](headMat);
    if (dim != null) {
        gatheredMat = gatheredMat.gather([token.ind], dim);
    }
    console.log("SHAPE: ", gatheredMat.gather(8, -2).shape);
    let newMat = gatheredMat.gather(headList, 0).mean([axis]).transpose();
    const rowInfo = newMat.arraySync();
    const out = {
        rows: rowInfo,
        labels: headList,
        max: newMat.max().arraySync(),
    };
    return out;
}
;
class AttentionHeadBox extends _VisComponent__WEBPACK_IMPORTED_MODULE_1__["VComponent"] {
    constructor(d3Parent, eventHandler, options = {}) {
        super(d3Parent, eventHandler);
        this.css_name = '';
        this.rowCssName = 'att-head';
        this.boxCssName = 'att-rect';
        this._current = {};
        this.options = {
            boxDim: 26,
            yscale: 1,
            xscale: 0.5,
            side: "left",
            maxWidth: 200,
            offset: 0,
        };
        this.superInitSVG(options);
        this._init();
    }
    _init() {
        this.headRows = this.base.selectAll(`.${this.rowCssName}`);
        this.headCells = this.headRows.selectAll(`${this.boxCssName}`);
        this.opacityScale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().range([0, 1]);
    }
    updateCurrent() {
        const op = this.options;
        const cur = this._current;
        const nHeads = this._data.rows[0].length;
        const baseHeadWidth = op.boxDim * op.xscale;
        // Scale headwidth according to maximum width
        const getHeadScale = (nH) => (Math.min(op.maxWidth / nH, baseHeadWidth) / baseHeadWidth) * op.xscale;
        cur.headHeight = op.boxDim * op.yscale;
        cur.headWidth = getHeadScale(nHeads) * op.boxDim;
        cur.xPad = cur.headWidth;
        cur.yPad = (op.boxDim - cur.headHeight) / 2;
        const getBoxWidth = (headWidth) => {
            const maxBwidth = 100;
            const bwidth = this._data.rows[0].length * cur.headWidth;
            const scale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"];
            if (bwidth > maxBwidth) {
                return;
            }
        };
        cur.boxWidth = (this._data.rows[0].length * cur.headWidth);
        cur.totalWidth = (2 * cur.xPad) + cur.boxWidth;
        cur.totalHeight = (op.boxDim * (this._data.rows.length + op.offset));
        return this._current;
    }
    updateData() {
        const op = this.options;
        const self = this;
        const boxEvent = (i) => { return { ind: i, side: op.side, head: self._data.labels[i] }; };
        const cur = this.updateCurrent();
        const getBaseX = () => self.base.node().getBoundingClientRect().left;
        const getBaseY = () => self.base.node().getBoundingClientRect().top;
        this.base.html('');
        this.parent
            .attr("width", cur.totalWidth)
            .attr("height", cur.totalHeight);
        this.headRows = this.base.selectAll(`.${self.rowCssName}`)
            .data(self._data.rows)
            .join("g")
            .attrs({
            class: (d, i) => `${self.rowCssName} ${self.rowCssName}-${i}`,
            transform: (d, i) => {
                return _etc_SVGplus__WEBPACK_IMPORTED_MODULE_2__["SVG"].translate({
                    x: cur.xPad,
                    y: (op.boxDim * (i + op.offset)) + cur.yPad,
                });
            },
            width: cur.boxWidth,
            height: cur.headHeight,
        })
            .on("mouseover", (d, i) => {
            self.eventHandler.trigger(AttentionHeadBox.events.rowMouseOver, { ind: i, side: op.side });
        })
            .on("mouseout", (d, i) => {
            self.eventHandler.trigger(AttentionHeadBox.events.rowMouseOut, { ind: i, side: op.side });
        });
        this.headCells = this.headRows
            .selectAll(`${this.boxCssName}`)
            .data(d => d)
            .join('rect')
            .attrs({
            x: (d, i) => i * cur.headWidth,
            y: 0,
            class: this.boxCssName,
            head: (d, i) => self._data.labels[i],
            width: cur.headWidth,
            height: cur.headHeight,
            opacity: (d) => this.opacityScale(d),
            fill: "blue"
        })
            .on("mouseover", (d, i) => {
            self.eventHandler.trigger(AttentionHeadBox.events.boxMouseOver, boxEvent(i));
        })
            .on("mouseout", (d, i) => {
            self.eventHandler.trigger(AttentionHeadBox.events.boxMouseOut, boxEvent(i));
        })
            .on("click", (d, i) => {
            self.eventHandler.trigger(AttentionHeadBox.events.boxClick, boxEvent(i));
        })
            .on("mousemove", function (d, i) {
            const op = self.options;
            const mouse = d3__WEBPACK_IMPORTED_MODULE_0__["mouse"](self.base.node());
            self.eventHandler.trigger(AttentionHeadBox.events.boxMouseMove, { ind: i, side: op.side, baseX: getBaseX(), baseY: getBaseY(), mouse: mouse });
        })
            .append("svg:title")
            .text((d, i) => "Head " + (self._data.labels[i] + 1));
    }
    _wrangle(data) {
        this._data = data;
        this.opacityScale = this.opacityScale.domain([0, data.max]);
        return data;
    }
    _render(data) {
        this.updateData();
    }
}
AttentionHeadBox.events = {
    rowMouseOver: "AttentionHeadBox_RowMouseOver",
    rowMouseOut: "AttentionHeadBox_RowMouseOut",
    boxMouseOver: "AttentionHeadBox_BoxMouseOver",
    boxMouseOut: "AttentionHeadBox_BoxMouseOut",
    boxMouseMove: "AttentionHeadBox_BoxMouseMove",
    boxClick: "AttentionHeadBox_BoxClick",
};


/***/ }),

/***/ "./ts/vis/CorpusHistogram.ts":
/*!***********************************!*\
  !*** ./ts/vis/CorpusHistogram.ts ***!
  \***********************************/
/*! exports provided: CorpusHistogram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorpusHistogram", function() { return CorpusHistogram; });
/* harmony import */ var _VisComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VisComponent */ "./ts/vis/VisComponent.ts");
/* harmony import */ var _etc_SpacyInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../etc/SpacyInfo */ "./ts/etc/SpacyInfo.ts");
/* harmony import */ var _etc_SVGplus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../etc/SVGplus */ "./ts/etc/SVGplus.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");





/**
 *  Data formatting functions
 */
const toRenderData = (obj) => Object.keys(obj).map((k, i) => {
    return { label: k, count: obj[k] };
});
const toStringOrNum = (a) => {
    const na = +a;
    if (isNaN(na)) {
        return a;
    }
    return na;
};
const sortByLabel = ramda__WEBPACK_IMPORTED_MODULE_4__["sortBy"](ramda__WEBPACK_IMPORTED_MODULE_4__["compose"](toStringOrNum, ramda__WEBPACK_IMPORTED_MODULE_4__["prop"]('label')));
const sortByCount = ramda__WEBPACK_IMPORTED_MODULE_4__["sortBy"](ramda__WEBPACK_IMPORTED_MODULE_4__["prop"]('count'));
const toOrderedRender = ramda__WEBPACK_IMPORTED_MODULE_4__["compose"](ramda__WEBPACK_IMPORTED_MODULE_4__["reverse"], 
// @ts-ignore -- TODO: fix
sortByCount, toRenderData);
class CorpusHistogram extends _VisComponent__WEBPACK_IMPORTED_MODULE_0__["VComponent"] {
    constructor(d3parent, eventHandler, options = {}) {
        super(d3parent, eventHandler);
        this.css_name = '';
        this._current = {
            chart: {
                height: null,
                width: null
            }
        };
        this.axes = {
            x: d3__WEBPACK_IMPORTED_MODULE_3__["scaleBand"](),
            y: d3__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"](),
        };
        this.options = {
            margin: {
                top: 10,
                right: 30,
                bottom: 50,
                left: 40
            },
            barWidth: 25,
            width: 185,
            height: 230,
            val: "pos",
            xLabelRot: 45,
            xLabelOffset: 15,
            yLabelOffset: 5,
        };
        this.superInitSVG();
    }
    meta(val) {
        if (val == null) {
            return this.options.val;
        }
        this.options.val = val;
        this.update(this._data);
        return this;
    }
    _init() { }
    createXAxis() {
        const self = this;
        const op = this.options;
        const width = op.width - op.margin.left - op.margin.right;
        this.axes.x
            .domain(ramda__WEBPACK_IMPORTED_MODULE_4__["map"](ramda__WEBPACK_IMPORTED_MODULE_4__["prop"]('label'), self.renderData))
            .rangeRound([0, width])
            .padding(0.1);
        this._current.chart.width = width;
    }
    createYAxis() {
        const self = this;
        const op = this.options;
        const height = op.height - op.margin.top - op.margin.bottom;
        this.axes.y
            .domain([0, +d3__WEBPACK_IMPORTED_MODULE_3__["max"](ramda__WEBPACK_IMPORTED_MODULE_4__["map"](ramda__WEBPACK_IMPORTED_MODULE_4__["prop"]('count'), self.renderData))])
            .rangeRound([height, 0]);
        this._current.chart.height = height;
    }
    createAxes() {
        this.createXAxis();
        this.createYAxis();
    }
    _wrangle(data) {
        const out = data[this.options.val];
        return toOrderedRender(out);
    }
    width(val) {
        if (val == null) {
            return this.options.width;
        }
        this.options.width = val;
        this.updateWidth();
        this.createXAxis();
        return this;
    }
    height(val) {
        if (val == null) {
            return this.options.height;
        }
        this.options.height = val;
        this.updateHeight();
        this.createYAxis();
        return this;
    }
    updateWidth() {
        this.svg.attr('width', this.options.width);
    }
    updateHeight() {
        this.svg.attr('height', this.options.height);
    }
    figWidth(data) {
        const op = this.options;
        return (data.length * op.barWidth) + op.margin.left + op.margin.right;
    }
    _render(data) {
        const self = this;
        const op = this.options;
        const curr = this._current;
        this.parent.html('');
        this.svg = this.parent;
        this.createAxes();
        this.width(this.figWidth(data));
        this.updateHeight();
        // Initialize axes
        const g = self.svg.append("g")
            .attr("transform", _etc_SVGplus__WEBPACK_IMPORTED_MODULE_2__["SVG"].translate({ x: op.margin.left, y: op.margin.top }));
        // Hack to allow clearing this histograms to work
        self.base = g;
        // Fix below for positional changing
        const axisBottom = g.append("g")
            .attr("transform", _etc_SVGplus__WEBPACK_IMPORTED_MODULE_2__["SVG"].translate({ x: 0, y: curr.chart.height }))
            .call(d3__WEBPACK_IMPORTED_MODULE_3__["axisBottom"](self.axes.x));
        if (op.val != "offset") {
            axisBottom
                .selectAll("text")
                .attr("y", op.yLabelOffset) // Move below the axis
                .attr("x", op.xLabelOffset) // Offset to the right a bit
                .attr("transform", _etc_SVGplus__WEBPACK_IMPORTED_MODULE_2__["SVG"].rotate(op.xLabelRot));
        }
        g.append("g")
            .call(d3__WEBPACK_IMPORTED_MODULE_3__["axisLeft"](self.axes.y));
        g.selectAll(".bar")
            .data(data)
            .join('rect')
            .attr("class", "bar")
            .attr("x", function (d) { return self.axes.x(d.label); })
            .attr("y", function (d) { return self.axes.y(d.count); })
            .attr("width", self.axes.x.bandwidth())
            .attr("height", function (d) { return curr.chart.height - self.axes.y(d.count); })
            .style('fill', k => _etc_SpacyInfo__WEBPACK_IMPORTED_MODULE_1__["spacyColors"].colorScale[op.val](k.label));
    }
}
CorpusHistogram.events = {};


/***/ }),

/***/ "./ts/vis/CorpusInspector.ts":
/*!***********************************!*\
  !*** ./ts/vis/CorpusInspector.ts ***!
  \***********************************/
/*! exports provided: CorpusInspector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorpusInspector", function() { return CorpusInspector; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var d3_selection_multi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection-multi */ "./node_modules/d3-selection-multi/index.js");
/* harmony import */ var _VisComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VisComponent */ "./ts/vis/VisComponent.ts");
/* harmony import */ var _etc_xd3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../etc/xd3 */ "./ts/etc/xd3.ts");




// Helpers
const currMatchIdx = (elem) => +elem.parentNode.getAttribute('matchidx');
const currRowNum = (elem) => +elem.parentNode.getAttribute('rownum');
const backgroundColor = x => `rgba(128, 0, 150, ${0.6 * x})`;
class CorpusInspector extends _VisComponent__WEBPACK_IMPORTED_MODULE_2__["VComponent"] {
    constructor(d3Parent, eventHandler, options = {}) {
        super(d3Parent, eventHandler);
        this.css_name = 'corpus-inspector';
        this.options = {};
        this.scaler = d3__WEBPACK_IMPORTED_MODULE_0__["scalePow"]().range([0, 0.9]).exponent(2);
        this.superInitHTML(options);
        this._init();
    }
    createRows() {
        const data = this._data;
        this.inspectorRows = this.base.selectAll(".inspector-row")
            .data(data)
            .join('div')
            .classed('inspector-row', true)
            .attrs({
            matchIdx: d => d.index,
            rowNum: (d, i) => i,
        })
            .on("mouseover", (d, i) => {
            this.eventHandler.trigger(CorpusInspector.events.rowMouseOver, {});
        });
    }
    addTooltip() {
        this.inspectorCells = this.inspectorCells
            .classed('celltooltip', true)
            .append('span')
            .classed('tooltiptext', true)
            .html((d, i, n) => {
            const entityStr = d.is_ent ? "<br>Entity" : "";
            const att = n[i].parentNode.getAttribute('att').slice(0, 7);
            const attStr = `<br>Attention: ${att}`;
            return `POS: ${d.pos.toLowerCase()}<br>DEP: ${d.dep.toLowerCase()}` + entityStr + attStr;
        });
    }
    createCells() {
        const self = this;
        this.inspectorCells = this.inspectorRows.selectAll('.inspector-cell')
            .data((d) => d.tokens)
            .join('div')
            .classed('inspector-cell', true)
            .attr('index-offset', (d, i, n) => {
            const matchIdx = currMatchIdx(n[i]);
            return i - matchIdx;
        })
            .attrs({
            pos: d => d.pos.toLowerCase(),
            dep: d => d.dep.toLowerCase(),
            is_ent: d => d.is_ent
        })
            .text(d => d.token.replace("\u0120", " "))
            .classed('matched-cell', d => d.is_match);
        // Highlight the cells appropriately
        this.inspectorCells.each((d, i, n) => {
            const idx = currMatchIdx(n[i]);
            if (i == idx) {
                const att = d.inward;
                const maxAtt = +d3__WEBPACK_IMPORTED_MODULE_0__["max"](att);
                const currRow = currRowNum(n[i]);
                const scaler = self.scaler.domain([0, maxAtt]);
                d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"](`.inspector-row[rownum='${currRow}']`)
                    .selectAll(`.inspector-cell`)
                    .style('background', (d, i) => {
                    return backgroundColor(scaler(att[i]));
                })
                    .attr('att', (d, i) => att[i]);
            }
        });
        self.addTooltip();
    }
    updateData() {
        this.createRows();
        this.createCells();
    }
    _init() { }
    _wrangle(data) {
        this._data = data;
        return data;
    }
    _render(data) {
        // Remember that this._data is defined in wrangle which should always be called before render
        // as is defined in the update function
        this.updateData();
    }
}
CorpusInspector.events = {
    rowMouseOver: "CorpusInspector_rowMouseOver",
    rowMouseOut: "CorpusInspector_rowMouseOut",
    rowClick: "CorpusInspector_rowClick",
    rowDblClick: "CorpusInspector_rowDblClick",
    cellMouseOver: "CorpusInspector_cellMouseOver",
    cellMouseOut: "CorpusInspector_cellMouseOut",
    cellClick: "CorpusInspector_cellClick",
    cellDblClick: "CorpusInspector_cellDblClick",
};


/***/ }),

/***/ "./ts/vis/CorpusMatManager.ts":
/*!************************************!*\
  !*** ./ts/vis/CorpusMatManager.ts ***!
  \************************************/
/*! exports provided: CorpusMatManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorpusMatManager", function() { return CorpusMatManager; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _vis_VisComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vis/VisComponent */ "./ts/vis/VisComponent.ts");
/* harmony import */ var _etc_SVGplus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../etc/SVGplus */ "./ts/etc/SVGplus.ts");
/* harmony import */ var _etc_SpacyInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../etc/SpacyInfo */ "./ts/etc/SpacyInfo.ts");
/* harmony import */ var _etc_xd3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../etc/xd3 */ "./ts/etc/xd3.ts");






function managerData2MatData(dataIn, indexOffset = 0, toPick = ['pos']) {
    const outOfRangeObj = {
        pos: null,
        dep: null,
        is_ent: null,
        token: null,
    };
    const chooseProps = ramda__WEBPACK_IMPORTED_MODULE_1__["pick"](toPick);
    const dataOut = dataIn.map(d => {
        const wordIdx = d.index + indexOffset;
        if ((wordIdx < 0) || (wordIdx >= d.tokens.length)) {
            return ramda__WEBPACK_IMPORTED_MODULE_1__["assoc"]('height', d.height, outOfRangeObj);
        }
        const newObj = chooseProps(d.tokens[wordIdx]);
        return ramda__WEBPACK_IMPORTED_MODULE_1__["assoc"]('height', d.height, newObj);
    });
    return dataOut;
}
class CorpusMatManager extends _vis_VisComponent__WEBPACK_IMPORTED_MODULE_2__["VComponent"] {
    // Selections
    constructor(d3parent, eventHandler, options = {}) {
        super(d3parent, eventHandler);
        this.css_name = 'corpus-mat-container';
        this.options = {
            cellWidth: 10,
            toPick: ['pos'],
            idxs: [-1, 0, 1],
            divHover: {
                width: 60,
                height: 40
            }
        };
        this._current = {};
        this.rowCssName = 'index-match-results';
        this.cellCssName = 'index-cell-result';
        this.idxs = [-1, 0, 1];
        this.superInitHTML(options);
        this._init();
    }
    get idxs() {
        return this.options.idxs;
    }
    set idxs(val) {
        this.options.idxs = val;
    }
    // Create static dom elements
    _init() {
        const self = this;
        this.corpusMats = this.base.selectAll('.corpus-mat');
        this.rowGroups = this.corpusMats.selectAll(`.${this.rowCssName}`);
        this.divHover = this.base.append('div')
            .classed('mat-hover-display', true)
            .classed('text-center', true)
            .style('width', String(this.options.divHover.width) + 'px')
            .style('height', String(this.options.divHover.height) + 'px');
        this.divHover.append('p');
    }
    pick(val) {
        this.options.toPick = [val];
        this.redraw();
    }
    addRight() {
        const addedIdx = ramda__WEBPACK_IMPORTED_MODULE_1__["last"](this.idxs) + 1;
        this.idxs.push(addedIdx);
        this.addCorpusMat(addedIdx, "right");
    }
    addLeft() {
        const addedIdx = this.idxs[0] - 1;
        const addDecrementedHead = x => ramda__WEBPACK_IMPORTED_MODULE_1__["insert"](0, ramda__WEBPACK_IMPORTED_MODULE_1__["head"](x) - 1)(x);
        this.idxs = addDecrementedHead(this.idxs);
        this.addCorpusMat(addedIdx, "left");
    }
    killRight() {
        this.kill(Math.max(...this.idxs));
    }
    killLeft() {
        this.kill(Math.min(...this.idxs));
    }
    /**
     * Remove edge value from contained indexes
     *
     * @param d Index to remove
     */
    kill(d) {
        if (d != 0) {
            if (d == Math.min(...this.idxs) || d == Math.max(...this.idxs)) {
                this.idxs = ramda__WEBPACK_IMPORTED_MODULE_1__["without"]([d], this.idxs);
                this.base.selectAll(`.offset-${d}`).remove();
            }
        }
    }
    _wrangle(data) {
        return data;
    }
    data(val) {
        if (val == null) {
            return this._data;
        }
        this._data = val;
        this._updateData();
        return this;
    }
    /**
     * The main rendering code, called whenever the data changes.
     */
    _updateData() {
        const self = this;
        const op = this.options;
        this.base.selectAll('.corpus-mat').remove();
        this.idxs.forEach((idxOffset, i) => {
            self.addCorpusMat(idxOffset);
        });
    }
    /**
     * Add another word's meta information matrix column to either side of the index
     *
     * @param idxOffset Distance of word from matched word in the sentence
     * @param toThe Indicates adding to the "left" or to the "right" of the index
     */
    addCorpusMat(idxOffset, toThe = "right") {
        const self = this;
        const op = this.options;
        const boxWidth = op.cellWidth * op.toPick.length;
        const boxHeight = ramda__WEBPACK_IMPORTED_MODULE_1__["sum"](ramda__WEBPACK_IMPORTED_MODULE_1__["map"](ramda__WEBPACK_IMPORTED_MODULE_1__["prop"]('height'), this._data));
        let corpusMat;
        if (toThe == "right") {
            corpusMat = this.base.append('div');
        }
        else if (toThe == "left") {
            corpusMat = this.base.insert('div', ":first-child");
        }
        else {
            throw Error("toThe must have argument of 'left' or 'right'");
        }
        corpusMat = corpusMat
            .data([idxOffset])
            .attr('class', `corpus-mat offset-${idxOffset}`)
            .attr('offset', idxOffset)
            .append('svg')
            .attrs({
            width: boxWidth,
            height: boxHeight,
        })
            .on('mouseover', function (d, i) {
            self.eventHandler.trigger(CorpusMatManager.events.mouseOver, { idx: i, offset: d, val: self.options.toPick[0] });
        })
            .on('mouseout', (d, i) => {
            this.eventHandler.trigger(CorpusMatManager.events.mouseOut, { idx: i, offset: d });
        });
        this.addRowGroup(corpusMat);
    }
    /**
     *
     * @param mat The base div on which to add matrices and rows
     */
    addRowGroup(mat) {
        const self = this;
        const op = this.options;
        const heights = ramda__WEBPACK_IMPORTED_MODULE_1__["map"](ramda__WEBPACK_IMPORTED_MODULE_1__["prop"]('height'), this._data);
        const [heightSum, rawHeightList] = ramda__WEBPACK_IMPORTED_MODULE_1__["mapAccum"]((x, y) => [ramda__WEBPACK_IMPORTED_MODULE_1__["add"](x, y), ramda__WEBPACK_IMPORTED_MODULE_1__["add"](x, y)], 0, heights);
        const fixList = ramda__WEBPACK_IMPORTED_MODULE_1__["compose"](ramda__WEBPACK_IMPORTED_MODULE_1__["dropLast"](1), 
        // @ts-ignore
        ramda__WEBPACK_IMPORTED_MODULE_1__["prepend"](0));
        const heightList = fixList(rawHeightList);
        const rowGroup = mat.selectAll(`.${self.rowCssName}`)
            .data(d => managerData2MatData(self._data, d, op.toPick))
            .join("g")
            .attr("class", (d, i) => {
            return `${self.rowCssName} ${self.rowCssName}-${i}`;
        })
            .attr("row-num", (d, i) => i)
            .attr("height", d => d.height)
            .attr("transform", (d, i) => {
            const out = _etc_SVGplus__WEBPACK_IMPORTED_MODULE_3__["SVG"].translate({
                x: 0,
                y: heightList[i],
            });
            return out;
        });
        op.toPick.forEach(prop => {
            self.addRect(rowGroup, 0, prop);
        });
    }
    addRect(g, xShift, prop) {
        const self = this;
        const op = this.options;
        const rects = g.append('rect')
            .attrs({
            width: op.cellWidth,
            height: d => d.height - 3,
            transform: (d, i) => {
                return _etc_SVGplus__WEBPACK_IMPORTED_MODULE_3__["SVG"].translate({
                    x: xShift,
                    y: 1.5,
                });
            },
        })
            .style('fill', d => CorpusMatManager.colorScale[prop](d[prop]));
        const getBaseX = () => self.base.node().getBoundingClientRect().left;
        const getBaseY = () => self.base.node().getBoundingClientRect().top;
        g.on('mouseover', function (d, i) {
            self.divHover.style('visibility', 'visible');
            // Get offset
            const col = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this.parentNode.parentNode); // Column
            const offset = +col.attr('offset');
            self.eventHandler.trigger(CorpusMatManager.events.rectMouseOver, { idx: i, offset: offset });
        })
            .on('mouseout', function (d, i) {
            self.divHover.style('visibility', 'hidden');
            const col = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this.parentNode.parentNode); // Column
            const offset = +col.attr('offset');
            self.eventHandler.trigger(CorpusMatManager.events.rectMouseOut, { idx: i, offset: offset });
        })
            .on('mousemove', function (d, i) {
            const mouse = d3__WEBPACK_IMPORTED_MODULE_0__["mouse"](self.base.node());
            const divOffset = [3, 3];
            const left = mouse[0] + getBaseX() - (op.divHover.width + divOffset[0]);
            const top = mouse[1] + getBaseY() - (op.divHover.height + divOffset[1]);
            self.divHover
                .style('left', String(left) + 'px')
                .style('top', String(top) + 'px')
                .selectAll('p')
                .text(d[prop]);
        });
    }
    /**
     * @param data Data to display
     */
    _render(data) {
        this._updateData();
    }
}
CorpusMatManager.events = {
    mouseOver: "CorpusMatManager_MouseOver",
    mouseOut: "CorpusMatManager_MouseOut",
    click: "CorpusMatManager_Click",
    dblClick: "CorpusMatManager_DblClick",
    rectMouseOver: "CorpusMatManager_RectMouseOver",
    rectMouseOut: "CorpusMatManager_RectMouseOut",
    rectClick: "CorpusMatManager_RectClick",
    rectDblClick: "CorpusMatManager_RectDblClick",
};
CorpusMatManager.colorScale = _etc_SpacyInfo__WEBPACK_IMPORTED_MODULE_4__["spacyColors"].colorScale;


/***/ }),

/***/ "./ts/vis/EdgeConnector.ts":
/*!*********************************!*\
  !*** ./ts/vis/EdgeConnector.ts ***!
  \*********************************/
/*! exports provided: toEdges, EdgeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toEdges", function() { return toEdges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdgeData", function() { return EdgeData; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _etc_arrayUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../etc/arrayUtils */ "./ts/etc/arrayUtils.ts");
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tensorflow/tfjs */ "./node_modules/@tensorflow/tfjs/dist/tf.esm.js");




/**
 * Convert data matrix to necessary data array to pass to SVG connections
 */
function toEdges(data, cutoffAmt = 1) {
    let outArr = [];
    let cutoff;
    data.forEach((row, i) => {
        cutoff = cutoffAmt * d3__WEBPACK_IMPORTED_MODULE_0__["sum"](row);
        let counter = 0;
        const sortedArr = _etc_arrayUtils__WEBPACK_IMPORTED_MODULE_2__["sortWithIndices"](row);
        sortedArr.arr.forEach((v, j) => {
            if (counter < cutoff) {
                const obj = {
                    i: i,
                    j: sortedArr.sortIndices[j],
                    v: v,
                };
                outArr.push(obj);
                counter += v;
            }
        });
    });
    return outArr;
}
/**
 * Class for implementing operations on AttentionGraph implementation.
 * Closely tied to [[AttentionConnector]]
 */
class EdgeData {
    constructor(data) {
        this.data = data;
        this.tensData = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_3__["tensor"](data);
    }
    min(axis) {
        return this.tensData.min(axis).dataSync();
    }
    max(axis) {
        return this.tensData.max(axis).dataSync();
    }
    extent(axis) {
        return d3__WEBPACK_IMPORTED_MODULE_0__["zip"](this.min(axis), this.max(axis));
    }
    /**
     * Format the data to send to SVG chart.
     *
     * @param accumulateThresh - A float between 0 and 1, indicating the amount of weight to display. Defaults to 0.7.
     */
    format(accumulateThresh = 0.7) {
        return toEdges(this.data, accumulateThresh);
    }
}


/***/ }),

/***/ "./ts/vis/TextToken.ts":
/*!*****************************!*\
  !*** ./ts/vis/TextToken.ts ***!
  \*****************************/
/*! exports provided: TextTokens, LeftTextToken, RightTextToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextTokens", function() { return TextTokens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftTextToken", function() { return LeftTextToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightTextToken", function() { return RightTextToken; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _VisComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VisComponent */ "./ts/vis/VisComponent.ts");




class TextTokens extends _VisComponent__WEBPACK_IMPORTED_MODULE_3__["VComponent"] {
    constructor(d3Parent, eventHandler, options = {}) {
        super(d3Parent, eventHandler);
        this.eInfo = (sel, i) => { return { sel: sel, side: this.side, ind: i }; };
        this.eEmbedding = (sel, i, embed) => { return { sel: sel, side: this.side, ind: i, embeddings: embed }; };
        this.options = {
            boxheight: 26,
            offset: 0,
            divHover: {
                width: 150,
                height: 150,
                offset: [3, 3],
                textInfo: "Would predict..."
            },
        };
        this.superInitHTML(options);
    }
    mask(maskInds) {
        this.parent.selectAll(`.${this.css_name}`)
            .each((d, i, n) => {
            const sel = d3__WEBPACK_IMPORTED_MODULE_0__["select"](n[i]);
            sel.classed("masked-token", lodash__WEBPACK_IMPORTED_MODULE_2__["includes"](maskInds, i));
        });
    }
    getEmbedding(ind) {
        return this._data[ind];
    }
    _init() { }
    _wrangle(data) {
        this.data = this._data;
        return this._data;
    }
    _divPlacement() {
        const getBaseX = () => self.base.node().getBoundingClientRect().left;
        const getBaseY = () => self.base.node().getBoundingClientRect().top;
        const self = this;
        const op = this.options;
        const mouse = d3__WEBPACK_IMPORTED_MODULE_0__["mouse"](self.base.node());
        const divOffset = [3, 3];
        const left = mouse[0] + getBaseX() - (op.divHover.width + divOffset[0]);
        const top = mouse[1] + getBaseY() + divOffset[1];
        return [left, top];
    }
    _render(data) {
        const op = this.options;
        const self = this;
        // Reset token display
        this.base.selectAll("*").remove();
        this.divHover = this.base.append('div')
            .classed('tok-info', true)
            .classed('mat-hover-display', true)
            .classed(this.hover_css_name, true)
            .style('width', String(this.options.divHover.width) + 'px')
            .style('height', String(this.options.divHover.height) + 'px');
        this.divHover
            .append('p')
            .classed('p-info', true)
            .style('font-weight', 'bold')
            .text(op.divHover.textInfo);
        // Add blank divs
        console.log(`Internal offset (${this.side}): `, op.offset);
        const blankDivs = this.base.selectAll(`.blank-text-box`);
        blankDivs.data(ramda__WEBPACK_IMPORTED_MODULE_1__["range"](0, op.offset))
            .join("div")
            .classed("blank-text-box", true)
            .classed("token", true)
            .style("height", op.boxheight + 'px')
            .text((d) => "  ");
        // Render normal text box data
        self.textBoxes = this.base.selectAll(`.${this.css_name}`)
            .data(data)
            .join("div")
            .attr("class", (d, i) => `token ${this.css_name} token-${i}`)
            .attr("id", (d, i) => `${this.css_name}-${i}`)
            .style('height', op.boxheight + 'px')
            .text((d) => {
            return d.text.replace("\u0120", " ").replace("\u010A", "\\n");
        })
            .on('mouseover', function (d, i) {
            const sel = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
            sel.style('background', 'lightblue');
            self.eventHandler.trigger(TextTokens.events.tokenMouseOver, self.eInfo(sel, i));
            self.divHover.style('visibility', 'visible');
        })
            .on('mouseout', function (d, i) {
            let sel = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
            sel.style('background', 0);
            self.eventHandler.trigger(TextTokens.events.tokenMouseOut, self.eInfo(sel, i));
            self.divHover.style('visibility', 'hidden');
        })
            .on('mousemove', function (d, i) {
            const s = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
            const [left, top] = self._divPlacement();
            self.divHover
                .style('left', String(left) + 'px')
                .style('top', String(top) + 'px')
                .selectAll(".topk-word-box")
                //@ts-ignore
                .data(d3__WEBPACK_IMPORTED_MODULE_0__["zip"](d.topk_words, d.topk_probs))
                .join('p')
                .classed("topk-word-box", true)
                .text(w => {
                const name = w[0].replace(/\u0120/g, " ").replace(/\u010A/g, "\\n");
                const prob = w[1].toFixed(2);
                return name + ": " + prob;
            });
        });
        self.addClick(self.textBoxes);
    }
    addClick(textboxes) {
        const self = this;
        self.textBoxes = textboxes
            .on('click', (d, i, n) => {
            const sel = d3__WEBPACK_IMPORTED_MODULE_0__["select"](n[i]);
            self.eventHandler.trigger(TextTokens.events.tokenClick, self.eEmbedding(sel, i, d.embeddings));
        })
            .on('dblclick', (d, i, n) => {
            const sel = d3__WEBPACK_IMPORTED_MODULE_0__["select"](n[i]);
            self.eventHandler.trigger(TextTokens.events.tokenDblClick, self.eInfo(sel, i));
        });
    }
}
TextTokens.events = {
    tokenMouseOver: "TextToken_TokenMouseOver",
    tokenMouseOut: "TextToken_TokenMouseOut",
    tokenClick: "TextToken_TokenClick",
    tokenDblClick: "TextToken_TokenDblClick",
};
class LeftTextToken extends TextTokens {
    constructor(d3Parent, eventHandler, options = {}) {
        super(d3Parent, eventHandler);
        this.css_name = 'left-token';
        this.hover_css_name = 'left-token-hover';
        this.side = 'left';
        this.offset = 1;
    }
}
class RightTextToken extends TextTokens {
    constructor(d3Parent, eventHandler, options = {}) {
        super(d3Parent, eventHandler);
        this.css_name = 'right-token';
        this.hover_css_name = 'right-token-hover';
        this.side = 'right';
        this.offset = 0;
    }
    _divPlacement() {
        const getBaseX = () => self.base.node().getBoundingClientRect().left;
        const getBaseY = () => self.base.node().getBoundingClientRect().top;
        const self = this;
        const op = this.options;
        const mouse = d3__WEBPACK_IMPORTED_MODULE_0__["mouse"](self.base.node());
        const divOffset = [3, 3];
        const left = mouse[0] + getBaseX() + divOffset[0];
        const top = mouse[1] + getBaseY() + divOffset[1];
        return [left, top];
    }
}


/***/ }),

/***/ "./ts/vis/VisComponent.ts":
/*!********************************!*\
  !*** ./ts/vis/VisComponent.ts ***!
  \********************************/
/*! exports provided: VComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VComponent", function() { return VComponent; });
/* harmony import */ var _etc_Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../etc/Util */ "./ts/etc/Util.ts");
/* harmony import */ var _etc_SimpleEventHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../etc/SimpleEventHandler */ "./ts/etc/SimpleEventHandler.ts");
/* harmony import */ var _etc_SVGplus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../etc/SVGplus */ "./ts/etc/SVGplus.ts");



/**
 * Should have VComponentHTML and VComponentSVG
 *
 * Common Properties:
 * - events
 * - eventHandler (V important)
 * - options (Maintains public state. Can expose these with get/set functions with auto update)
 * - _current (Maintains private state)
 * - cssName (synced with corresponding CSS file)
 * - parent (HTML is div containing the base, SVG is SVG element)
 * - base (HTML is div with css_name established)
 * - _data (Data used to create and render the component)
 * - _renderData (Data needed to display. This may not be needed, but is currently used in histogram)
 *
 * Common Methods:
 * - constructor
 * - _render()      Consider replacing with `_updateData()` that updates all data at once
 * - update()       Consider replacing this with `data()` that auto updates data
 * - redraw()
 * - destroy()
 */
class VComponent {
    // CONSTRUCTOR ============================================================
    /**
     * Simple constructor. Subclasses should call @superInit(options) as well.
     * see why here: https://stackoverflow.com/questions/43595943/why-are-derived-class-property-values-not-seen-in-the-base-class-constructor
     *
     * template:
     constructor(d3Parent: D3Sel, eventHandler?: SimpleEventHandler, options: {} = {}) {
        super(d3Parent, eventHandler);
        // -- access to subclass params:
        this.superInit(options);
     }
     *
     * @param {D3Sel} d3parent  D3 selection of parent SVG DOM Element
     * @param {SimpleEventHandler} eventHandler a global event handler object or 'null' for local event handler
     */
    constructor(d3parent, eventHandler) {
        this.id = _etc_Util__WEBPACK_IMPORTED_MODULE_0__["Util"].simpleUId({});
        this.parent = d3parent;
        // If not further specified - create a local event handler bound to the bas element
        this.eventHandler = eventHandler ||
            new _etc_SimpleEventHandler__WEBPACK_IMPORTED_MODULE_1__["SimpleEventHandler"](this.parent.node());
        // Object for storing internal states and variables
        this._visibility = { hidden: false };
    }
    superInitHTML(options = {}) {
        Object.keys(options).forEach(key => this.options[key] = options[key]);
        this.base = this.parent.append('div')
            .classed(this.css_name, true);
    }
    /**
     * Has to be called as last call in subclass constructor.
     *
     * @param {{}} options
     * @param defaultLayers -- create the default <g> layers: bg -> main -> fg
     */
    superInitSVG(options = {}, defaultLayers = ['bg', 'main', 'fg']) {
        // Set default options if not specified in constructor call
        // const defaults = this.defaultOptions;
        // this.options = {};
        // const keys = new Set([...Object.keys(defaults), ...Object.keys(options)]);
        // keys.forEach(key => this.options[key] = (key in options) ? options[key] : defaults[key]);
        Object.keys(options).forEach(key => this.options[key] = options[key]);
        this.layers = {};
        // Create the base group element
        const svg = this.parent;
        this.base = _etc_SVGplus__WEBPACK_IMPORTED_MODULE_2__["SVG"].group(svg, this.css_name + ' ID' + this.id, this.options.pos);
        // create default layers: background, main, foreground
        if (defaultLayers) {
            // construction order is important !
            defaultLayers.forEach(layer => {
                this.layers[layer] = _etc_SVGplus__WEBPACK_IMPORTED_MODULE_2__["SVG"].group(this.base, layer);
            });
        }
    }
    // DATA UPDATE & RENDER ============================================================
    /**
     * Every time data has changed, update is called and
     * triggers wrangling and re-rendering
     * @param {Object} data data object
     * @return {*} ---
     */
    update(data) {
        this._data = data;
        if (this._visibility.hidden)
            return;
        this.renderData = this._wrangle(data);
        this._render(this.renderData);
    }
    // UPDATE OPTIONS ============================================================
    /**
     * Updates instance options
     * @param {Object} options only the options that should be updated
     * @param {Boolean} reRender if option change requires a re-rendering (default:false)
     * @returns {*} ---
     */
    updateOptions({ options, reRender = false }) {
        Object.keys(options).forEach(k => this.options[k] = options[k]);
        if (reRender)
            this._render(this.renderData);
    }
    // === CONVENIENCE ====
    redraw() {
        this._render(this.renderData);
    }
    setHideElement(hE) {
        this._visibility.hideElement = hE;
    }
    hideView() {
        if (!this._visibility.hidden) {
            const hE = this._visibility.hideElement || this.parent;
            hE.transition().styles({
                'opacity': 0,
                'pointer-events': 'none'
            }).style('display', 'none');
            this._visibility.hidden = true;
        }
    }
    unhideView() {
        if (this._visibility.hidden) {
            const hE = this._visibility.hideElement || this.parent;
            hE.transition().styles({
                'opacity': 1,
                'pointer-events': null,
                'display': null
            });
            this._visibility.hidden = false;
            // this.update(this.data);
        }
    }
    destroy() {
        this.base.remove();
    }
    clear() {
        this.base.html('');
    }
}
// STATIC FIELDS ============================================================
/**
 * The static property that contains all class related events.
 * Should be overwritten and event strings have to be unique!!
 */
VComponent.events = { noEvent: 'VComponent_noEvent' };


/***/ }),

/***/ "./ts/vis/myMain.ts":
/*!**************************!*\
  !*** ./ts/vis/myMain.ts ***!
  \**************************/
/*! exports provided: MainGraphic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainGraphic", function() { return MainGraphic; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _etc_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../etc/types */ "./ts/etc/types.ts");
/* harmony import */ var _etc_xd3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../etc/xd3 */ "./ts/etc/xd3.ts");
/* harmony import */ var _api_mainApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/mainApi */ "./ts/api/mainApi.ts");
/* harmony import */ var _uiConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../uiConfig */ "./ts/uiConfig.ts");
/* harmony import */ var _TextToken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TextToken */ "./ts/vis/TextToken.ts");
/* harmony import */ var _AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AttentionHeadBox */ "./ts/vis/AttentionHeadBox.ts");
/* harmony import */ var _AttentionConnector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AttentionConnector */ "./ts/vis/AttentionConnector.ts");
/* harmony import */ var _CorpusInspector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CorpusInspector */ "./ts/vis/CorpusInspector.ts");
/* harmony import */ var _data_TokenWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data/TokenWrapper */ "./ts/data/TokenWrapper.ts");
/* harmony import */ var _data_AttentionCapsule__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../data/AttentionCapsule */ "./ts/data/AttentionCapsule.ts");
/* harmony import */ var _etc_SimpleEventHandler__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../etc/SimpleEventHandler */ "./ts/etc/SimpleEventHandler.ts");
/* harmony import */ var _vis_CorpusMatManager__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../vis/CorpusMatManager */ "./ts/vis/CorpusMatManager.ts");
/* harmony import */ var _vis_CorpusHistogram__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../vis/CorpusHistogram */ "./ts/vis/CorpusHistogram.ts");
/* harmony import */ var _data_FaissSearchWrapper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../data/FaissSearchWrapper */ "./ts/data/FaissSearchWrapper.ts");
/* harmony import */ var _etc_Util__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../etc/Util */ "./ts/etc/Util.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




















function isNullToken(tok) {
    const isSomeNull = x => {
        return (x == null) || (x == "null");
    };
    const tokIsNull = tok == null;
    const tokHasNull = isSomeNull(tok.side) || isSomeNull(tok.ind);
    return tokIsNull || tokHasNull;
}
function showBySide(e) {
    // Check if saved token in uiConf is null
    if (!isNullToken(e)) {
        const classSelector = e.side == "left" ? "src-idx" : "target-idx";
        _etc_Util__WEBPACK_IMPORTED_MODULE_17__["Sel"].setHidden(".atn-curve");
        _etc_Util__WEBPACK_IMPORTED_MODULE_17__["Sel"].setVisible(`.atn-curve[${classSelector}='${e.ind}']`);
    }
}
function chooseShowBySide(savedEvent, newEvent) {
    if (isNullToken(savedEvent)) {
        showBySide(newEvent);
    }
}
function chooseShowAll(savedEvent) {
    if (isNullToken(savedEvent))
        _etc_Util__WEBPACK_IMPORTED_MODULE_17__["Sel"].setVisible(".atn-curve");
}
function unselectHead(head) {
    const affectedHeads = d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"](`.att-rect[head='${head}']`);
    affectedHeads.classed("unselected", true);
}
function selectHead(head) {
    const affectedHeads = d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"](`.att-rect[head='${head}']`);
    affectedHeads.classed("unselected", false);
}
function setSelDisabled(attr, sel) {
    const val = attr ? true : null;
    sel.attr('disabled', val);
}
class MainGraphic {
    constructor() {
        this.api = new _api_mainApi__WEBPACK_IMPORTED_MODULE_5__["API"]();
        this.uiConf = new _uiConfig__WEBPACK_IMPORTED_MODULE_6__["UIConfig"]();
        this.skeletonInit();
        this.mainInit();
    }
    /**
     * Functions that can be called without any information of a response.
     *
     * This should be called once and only once
     */
    skeletonInit() {
        this.sels = {
            body: d3__WEBPACK_IMPORTED_MODULE_0__["select"]('body'),
            atnContainer: d3__WEBPACK_IMPORTED_MODULE_0__["select"]('#atn-container'),
            atnDisplay: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#atn-display"),
            modelSelector: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#model-option-selector"),
            corpusSelector: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#corpus-select"),
            atnHeads: {
                left: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#left-att-heads"),
                right: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#right-att-heads"),
                headInfo: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#head-info-box")
                    .classed('mat-hover-display', true)
                    .classed('text-center', true)
                    .style('width', String(70) + 'px')
                    .style('height', String(30) + 'px')
                    .style('visibillity', 'hidden')
            },
            form: {
                sentenceA: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#form-sentence-a"),
                button: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#update-sentence"),
            },
            tokens: {
                left: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#left-tokens"),
                right: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#right-tokens"),
            },
            clsToggle: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#cls-toggle").select(".switch"),
            layerCheckboxes: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#layer-select"),
            headCheckboxes: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#head-select"),
            contextQuery: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#search-contexts"),
            embeddingQuery: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#search-embeddings"),
            selectedHeads: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#selected-heads"),
            headSelectAll: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#select-all-heads"),
            headSelectNone: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#select-no-heads"),
            testCheckbox: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#simple-embed-query"),
            threshSlider: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#my-range"),
            corpusInspector: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#corpus-similar-sentences-div"),
            corpusMatManager: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#corpus-mat-container"),
            corpusMsgBox: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#corpus-msg-box"),
            histograms: {
                matchedWord: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#matched-histogram-container"),
                maxAtt: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#max-att-histogram-container"),
            },
            buttons: {
                killLeft: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#kill-left"),
                addLeft: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#minus-left"),
                addRight: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#plus-right"),
                killRight: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#kill-right"),
                refresh: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#mat-refresh")
            },
            metaSelector: {
                matchedWord: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#matched-meta-select"),
                maxAtt: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#max-att-meta-select")
            }
        };
        this.eventHandler = new _etc_SimpleEventHandler__WEBPACK_IMPORTED_MODULE_13__["SimpleEventHandler"](this.sels.body.node());
        this.vizs = {
            leftHeads: new _AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["AttentionHeadBox"](this.sels.atnHeads.left, this.eventHandler, { side: "left", }),
            rightHeads: new _AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["AttentionHeadBox"](this.sels.atnHeads.right, this.eventHandler, { side: "right" }),
            tokens: {
                left: new _TextToken__WEBPACK_IMPORTED_MODULE_7__["LeftTextToken"](this.sels.tokens.left, this.eventHandler),
                right: new _TextToken__WEBPACK_IMPORTED_MODULE_7__["RightTextToken"](this.sels.tokens.right, this.eventHandler),
            },
            attentionSvg: new _AttentionConnector__WEBPACK_IMPORTED_MODULE_9__["AttentionGraph"](this.sels.atnDisplay, this.eventHandler),
            corpusInspector: new _CorpusInspector__WEBPACK_IMPORTED_MODULE_10__["CorpusInspector"](this.sels.corpusInspector, this.eventHandler),
            corpusMatManager: new _vis_CorpusMatManager__WEBPACK_IMPORTED_MODULE_14__["CorpusMatManager"](this.sels.corpusMatManager, this.eventHandler, { idxs: this.uiConf.offsetIdxs() }),
            histograms: {
                matchedWord: new _vis_CorpusHistogram__WEBPACK_IMPORTED_MODULE_15__["CorpusHistogram"](this.sels.histograms.matchedWord, this.eventHandler),
                maxAtt: new _vis_CorpusHistogram__WEBPACK_IMPORTED_MODULE_15__["CorpusHistogram"](this.sels.histograms.maxAtt, this.eventHandler),
            },
        };
        this._bindEventHandler();
    }
    mainInit() {
        const self = this;
        this.sels.body.style("cursor", "progress");
        this.api.getModelDetails(this.uiConf.model()).then(md => {
            const val = md.payload;
            this.uiConf.nLayers(val.nlayers).nHeads(val.nheads);
            this.initLayers(this.uiConf.nLayers());
            this.api.getMetaAttentions(this.uiConf.model(), this.uiConf.sentence(), this.uiConf.layer()).then(attention => {
                const att = attention.payload;
                this.initFromResponse(att);
                // Wrap postInit into function so asynchronous call does not mess with necessary inits
                const postResponseDisplayCleanup = () => {
                    this._toggleTokenSel();
                    const toDisplay = this.uiConf.displayInspector();
                    this._searchDisabler();
                    if (toDisplay == 'context') {
                        this._queryContext();
                    }
                    else if (toDisplay == 'embeddings') {
                        this._queryEmbeddings();
                    }
                };
                let normBy;
                if ((this.uiConf.modelKind() == _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Autoregressive) && (!this.uiConf.hideClsSep())) {
                    normBy = _etc_types__WEBPACK_IMPORTED_MODULE_3__["NormBy"].Col;
                }
                else {
                    normBy = _etc_types__WEBPACK_IMPORTED_MODULE_3__["NormBy"].All;
                }
                this.vizs.attentionSvg.normBy = normBy;
                if (this.uiConf.maskInds().length > 0) {
                    this.tokCapsule.a.maskInds = this.uiConf.maskInds();
                    this.api.updateMaskedAttentions(this.uiConf.model(), this.tokCapsule.a, this.uiConf.sentence(), this.uiConf.layer()).then(resp => {
                        const r = resp.payload;
                        this.attCapsule.updateFromNormal(r, this.uiConf.hideClsSep());
                        this.tokCapsule.updateTokens(r);
                        this.update();
                        postResponseDisplayCleanup();
                    });
                }
                else {
                    this.update();
                    postResponseDisplayCleanup();
                }
                if (this.uiConf.modelKind() == _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Autoregressive) {
                    // Ensure only 1 mask ind is present for autoregressive models
                    if (this.uiConf.hasToken()) {
                        this.grayToggle(this.uiConf.token().ind);
                    }
                    self.vizs.tokens.left.options.divHover.textInfo = "Would predict next...";
                    self.vizs.tokens.right.options.divHover.textInfo = "Would predict next...";
                }
                else {
                    self.vizs.tokens.left.options.divHover.textInfo = "Would predict here...";
                    self.vizs.tokens.right.options.divHover.textInfo = "Would predict here...";
                }
                this.sels.body.style("cursor", "default");
            });
        });
    }
    initFromResponse(attention) {
        this.attCapsule = Object(_data_AttentionCapsule__WEBPACK_IMPORTED_MODULE_12__["makeFromMetaResponse"])(attention, this.uiConf.hideClsSep());
        this.tokCapsule = new _data_TokenWrapper__WEBPACK_IMPORTED_MODULE_11__["TokenWrapper"](attention);
        this._staticInits();
    }
    leaveCorpusMsg(msg) {
        this.vizs.corpusInspector.hideView();
        this.vizs.corpusMatManager.hideView();
        console.log("Running leave msg");
        _etc_Util__WEBPACK_IMPORTED_MODULE_17__["Sel"].unhideElement(this.sels.corpusMsgBox);
        this.sels.corpusMsgBox.text(msg);
    }
    _bindEventHandler() {
        const self = this;
        this.eventHandler.bind(_TextToken__WEBPACK_IMPORTED_MODULE_7__["TextTokens"].events.tokenDblClick, (e) => {
            switch (self.uiConf.modelKind()) {
                case _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Bidirectional: {
                    e.sel.classed("masked-token", !e.sel.classed("masked-token"));
                    const letter = Object(_data_TokenWrapper__WEBPACK_IMPORTED_MODULE_11__["sideToLetter"])(e.side, this.uiConf.attType);
                    self.tokCapsule[letter].toggle(e.ind);
                    self.sels.body.style("cursor", "progress");
                    self.api.updateMaskedAttentions(this.uiConf.model(), this.tokCapsule.a, this.uiConf.sentence(), this.uiConf.layer()).then((resp) => {
                        const r = resp.payload;
                        self.attCapsule.updateFromNormal(r, this.uiConf.hideClsSep());
                        self.tokCapsule.updateTokens(r);
                        self.uiConf.maskInds(this.tokCapsule.a.maskInds);
                        self.update();
                        self.sels.body.style("cursor", "default");
                    });
                    break;
                }
                case _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Autoregressive: {
                    console.log("Autoregressive model doesn't do masking");
                    break;
                }
                default: {
                    console.log("What kind of model is this?");
                    break;
                }
            }
        });
        this.eventHandler.bind(_TextToken__WEBPACK_IMPORTED_MODULE_7__["TextTokens"].events.tokenMouseOver, (e) => {
            chooseShowBySide(this.uiConf.token(), e);
        });
        this.eventHandler.bind(_TextToken__WEBPACK_IMPORTED_MODULE_7__["TextTokens"].events.tokenMouseOut, (e) => {
            chooseShowAll(this.uiConf.token());
        });
        this.eventHandler.bind(_TextToken__WEBPACK_IMPORTED_MODULE_7__["TextTokens"].events.tokenClick, (e) => {
            const tokToggle = () => {
                this.uiConf.toggleToken(e);
                this._toggleTokenSel();
                showBySide(e);
            };
            tokToggle();
            this.renderAttHead();
        });
        this.eventHandler.bind(_AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["AttentionHeadBox"].events.rowMouseOver, (e) => {
            self.sels.atnHeads.headInfo.style('visibility', 'visible');
        });
        this.eventHandler.bind(_AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["AttentionHeadBox"].events.rowMouseOut, () => {
            self.sels.atnHeads.headInfo.style('visibility', 'hidden');
            // Don't do anything special on row mouse out
        });
        this.eventHandler.bind(_AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["AttentionHeadBox"].events.boxMouseOver, (e) => {
            const updateMat = this.attCapsule.byHead(e.head);
            this.vizs.attentionSvg.data(updateMat);
            this.vizs.attentionSvg.update(updateMat);
            showBySide(this.uiConf.token());
        });
        this.eventHandler.bind(_AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["AttentionHeadBox"].events.boxMouseOut, () => {
            const att = this.attCapsule.byHeads(this.uiConf.heads());
            this.vizs.attentionSvg.data(att);
            this.vizs.attentionSvg.update(att);
            showBySide(this.uiConf.token());
        });
        this.eventHandler.bind(_AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["AttentionHeadBox"].events.boxMouseMove, (e) => {
            const headInfo = self.sels.atnHeads.headInfo;
            let left, top, borderRadius;
            if (e.side == "left") {
                const divOffset = [13, 3];
                left = e.mouse[0] + e.baseX - (+headInfo.style('width').replace('px', '') + divOffset[0]);
                top = e.mouse[1] + e.baseY - (+headInfo.style('height').replace('px', '') + divOffset[1]);
                borderRadius = "8px 8px 1px 8px";
            }
            else {
                const divOffset = [-4, 3];
                left = e.mouse[0] + e.baseX + (divOffset[0]);
                top = e.mouse[1] + e.baseY - (+headInfo.style('height').replace('px', '') + divOffset[1]);
                borderRadius = "8px 8px 8px 1px";
            }
            headInfo
                .style('visibility', 'visible')
                .style('left', String(left) + 'px')
                .style('top', String(top) + 'px')
                .style('border-radius', borderRadius)
                .text(`Head: ${e.ind + 1}`);
            // Don't do anything special on row mouse over
        });
        this.eventHandler.bind(_AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["AttentionHeadBox"].events.boxClick, (e) => {
            const result = this.uiConf.toggleHead(e.head);
            if (result == _etc_types__WEBPACK_IMPORTED_MODULE_3__["Toggled"].ADDED) {
                selectHead(e.head);
            }
            else if (result == _etc_types__WEBPACK_IMPORTED_MODULE_3__["Toggled"].REMOVED) {
                unselectHead(e.head);
            }
            this._searchDisabler();
            this._renderHeadSummary();
            this.renderSvg();
        });
        this.eventHandler.bind(_vis_CorpusMatManager__WEBPACK_IMPORTED_MODULE_14__["CorpusMatManager"].events.mouseOver, (e) => {
            // Uncomment the below if you want to modify the whole column
            // const selector = `.inspector-cell[index-offset='${e.offset}']`
            // d3.selectAll(selector).classed("hovered-col", true)
        });
        this.eventHandler.bind(_vis_CorpusMatManager__WEBPACK_IMPORTED_MODULE_14__["CorpusMatManager"].events.mouseOut, (e) => {
            // Uncomment the below if you want to modify the whole column
            // const selector = `.inspector-cell[index-offset='${e.offset}']`
            // d3.selectAll(selector).classed("hovered-col", false)
        });
        this.eventHandler.bind(_vis_CorpusMatManager__WEBPACK_IMPORTED_MODULE_14__["CorpusMatManager"].events.rectMouseOver, (e) => {
            const row = d3__WEBPACK_IMPORTED_MODULE_0__["select"](`.inspector-row[rownum='${e.idx}']`);
            const word = row.select(`.inspector-cell[index-offset='${e.offset}']`);
            word.classed("hovered-col", true);
        });
        this.eventHandler.bind(_vis_CorpusMatManager__WEBPACK_IMPORTED_MODULE_14__["CorpusMatManager"].events.rectMouseOut, (e) => {
            const row = d3__WEBPACK_IMPORTED_MODULE_0__["select"](`.inspector-row[rownum='${e.idx}']`);
            const word = row.select(`.inspector-cell[index-offset='${e.offset}']`);
            word.classed("hovered-col", false);
        });
    }
    _toggleTokenSel() {
        const e = this.uiConf.token();
        const alreadySelected = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('.selected-token');
        // If no token should be selected, unselect all tokens
        if (!this.uiConf.hasToken()) {
            const newSel = d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('.selected-token');
            if (!newSel.empty())
                newSel.classed('selected-token', false);
        }
        // Otherwise, select the indicated token
        else {
            const token2String = (e) => `#${e.side}-token-${e.ind}`;
            const newSel = d3__WEBPACK_IMPORTED_MODULE_0__["select"](token2String(e));
            // Check that selection exists
            if (!newSel.empty())
                newSel.classed('selected-token', true);
        }
        // Remove previous token selection, if any
        if (!alreadySelected.empty()) {
            alreadySelected.classed('selected-token', false);
        }
        if (this.uiConf.modelKind() == _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Autoregressive) {
            this.grayToggle(+e.ind);
        }
        this._searchDisabler();
    }
    /** Gray all tokens that have index greater than ind */
    grayBadToks(ind) {
        if (this.uiConf.modelKind() == _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Autoregressive) {
            const grayToks = function (d, i) {
                const s = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
                s.classed("masked-token", i > ind);
            };
            d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('.right-token').each(grayToks);
            d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('.left-token').each(grayToks);
        }
    }
    grayToggle(ind) {
        if (this.uiConf.hasToken())
            this.grayBadToks(ind);
        else
            d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('.token').classed('masked-token', false);
    }
    _initModelSelection() {
        const self = this;
        // Below are the available models. Will need to choose 3 to be available ONLY
        const data = [
            { name: "bert-base-cased", kind: _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Bidirectional },
            // { name: "bert-base-uncased", kind: tp.ModelKind.Bidirectional },
            // { name: "distilbert-base-uncased", kind: tp.ModelKind.Bidirectional },
            // { name: "distilroberta-base", kind: tp.ModelKind.Bidirectional },
            { name: "roberta-base", kind: _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Bidirectional },
            { name: "gpt2", kind: _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Autoregressive },
            // { name: "gpt2-medium", kind: tp.ModelKind.Autoregressive },
            { name: "distilgpt2", kind: _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Autoregressive },
        ];
        const names = ramda__WEBPACK_IMPORTED_MODULE_2__["map"](ramda__WEBPACK_IMPORTED_MODULE_2__["prop"]('name'))(data);
        const kinds = ramda__WEBPACK_IMPORTED_MODULE_2__["map"](ramda__WEBPACK_IMPORTED_MODULE_2__["prop"]('kind'))(data);
        const kindmap = ramda__WEBPACK_IMPORTED_MODULE_2__["zipObj"](names, kinds);
        this.sels.modelSelector.selectAll('.model-option')
            .data(data)
            .join('option')
            .classed('model-option', true)
            .property('value', d => d.name)
            .attr("modelkind", d => d.kind)
            .text(d => d.name);
        this.sels.modelSelector.property('value', this.uiConf.model());
        this.sels.modelSelector.on('change', function () {
            const me = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
            const mname = me.property('value');
            self.uiConf.model(mname);
            self.uiConf.modelKind(kindmap[mname]);
            if (kindmap[mname] == _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Autoregressive) {
                console.log("RESETTING MASK INDS");
                self.uiConf.maskInds([]);
            }
            self.mainInit();
        });
    }
    _initCorpusSelection() {
        const data = [
            { code: "woz", display: "Wizard of Oz" },
            { code: "wiki", display: "Wikipedia" },
        ];
        const self = this;
        self.sels.corpusSelector.selectAll('option')
            .data(data)
            .join('option')
            .property('value', d => d.code)
            .text(d => d.display);
        this.sels.corpusSelector.on('change', function () {
            const me = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
            self.uiConf.corpus(me.property('value'));
            console.log(self.uiConf.corpus());
        });
    }
    _staticInits() {
        this._initSentenceForm();
        this._initModelSelection();
        this._initCorpusSelection();
        this._initQueryForm();
        this._initAdder();
        this._renderHeadSummary();
        this._initMetaSelectors();
        this._initToggle();
        this.renderAttHead();
        this.renderTokens();
    }
    _initAdder() {
        const updateUrlOffsetIdxs = () => {
            this.uiConf.offsetIdxs(this.vizs.corpusMatManager.idxs);
        };
        const fixCorpusMatHeights = () => {
            const newWrapped = this._wrapResults(this.vizs.corpusMatManager.data());
            this.vizs.corpusMatManager.data(newWrapped.data);
            updateUrlOffsetIdxs();
        };
        this.sels.buttons.addRight.on('click', () => {
            this.vizs.corpusMatManager.addRight();
            updateUrlOffsetIdxs();
        });
        this.sels.buttons.addLeft.on('click', () => {
            this.vizs.corpusMatManager.addLeft();
            updateUrlOffsetIdxs();
        });
        this.sels.buttons.killRight.on('click', () => {
            this.vizs.corpusMatManager.killRight();
            updateUrlOffsetIdxs();
        });
        this.sels.buttons.killLeft.on('click', () => {
            this.vizs.corpusMatManager.killLeft();
            updateUrlOffsetIdxs();
        });
        this.sels.buttons.refresh.on('click', () => {
            fixCorpusMatHeights();
        });
        const onresize = () => {
            if (this.sels.corpusInspector.text() != '')
                fixCorpusMatHeights();
        };
        window.onresize = onresize;
    }
    _initMetaSelectors() {
        this._initMatchedWordSelector(this.sels.metaSelector.matchedWord);
        this._initMaxAttSelector(this.sels.metaSelector.maxAtt);
    }
    _initMaxAttSelector(sel) {
        const self = this;
        const chooseSelected = (value) => {
            const ms = sel.selectAll('label');
            ms.classed('active', false);
            const el = sel.selectAll(`label[value=${value}]`);
            el.classed('active', true);
        };
        chooseSelected(this.uiConf.metaMax());
        const el = sel.selectAll('label');
        el.on('click', function () {
            const val = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).attr('value');
            // Do toggle
            sel.selectAll('.active').classed('active', false);
            d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).classed('active', true);
            self.uiConf.metaMax(val);
            self.vizs.histograms.maxAtt.meta(val);
        });
    }
    _initMatchedWordSelector(sel) {
        const self = this;
        const chooseSelected = (value) => {
            const ms = sel.selectAll('label');
            ms.classed('active', false);
            const el = sel.selectAll(`label[value=${value}]`);
            el.classed('active', true);
        };
        chooseSelected(this.uiConf.metaMatch());
        const el = sel.selectAll('label');
        el.on('click', function () {
            const val = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).attr('value');
            // Do toggle
            sel.selectAll('.active').classed('active', false);
            d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).classed('active', true);
            self.uiConf.metaMatch(val);
            self._updateCorpusInspectorFromMeta(val);
        });
    }
    _disableSearching(attr) {
        setSelDisabled(attr, this.sels.contextQuery);
        setSelDisabled(attr, this.sels.embeddingQuery);
    }
    _updateCorpusInspectorFromMeta(val) {
        this.vizs.corpusMatManager.pick(val);
        this.vizs.histograms.matchedWord.meta(val);
    }
    _initSentenceForm() {
        const self = this;
        this.sels.form.sentenceA.attr('placeholder', "Enter new sentence to analyze");
        this.sels.form.sentenceA.attr('value', this.uiConf.sentence());
        const clearInspector = () => {
            self.vizs.corpusMatManager.clear();
            self.vizs.corpusInspector.clear();
            self.vizs.histograms.matchedWord.clear();
            self.vizs.histograms.maxAtt.clear();
        };
        const submitNewSentence = () => {
            // replace all occurences of '#' in sentence as this causes the API to break
            const sentence_a = this.sels.form.sentenceA.property("value").replace(/\#/g, '');
            // Only update if the form is filled correctly
            if (sentence_a.length) {
                this.sels.body.style("cursor", "progress");
                this.api.getMetaAttentions(this.uiConf.model(), sentence_a, this.uiConf.layer())
                    .then((resp) => {
                    const r = resp.payload;
                    this.uiConf.sentence(sentence_a);
                    this.uiConf.rmToken();
                    this.attCapsule.updateFromNormal(r, this.uiConf.hideClsSep());
                    this.tokCapsule.updateFromResponse(r);
                    this._toggleTokenSel();
                    this.update();
                    clearInspector();
                    this.sels.body.style("cursor", "default");
                });
            }
        };
        const onEnter = ramda__WEBPACK_IMPORTED_MODULE_2__["curry"]((keyCode, f, event) => {
            const e = event || window.event;
            if (e.keyCode !== keyCode)
                return;
            e.preventDefault();
            f();
        });
        const onEnterSubmit = onEnter(13, submitNewSentence);
        const btn = this.sels.form.button;
        const inputBox = this.sels.form.sentenceA;
        btn.on("click", submitNewSentence);
        inputBox.on('keypress', onEnterSubmit);
    }
    _getSearchEmbeds() {
        const savedToken = this.uiConf.token();
        const out = this.vizs.tokens[savedToken.side].getEmbedding(savedToken.ind);
        return out.embeddings;
    }
    _getSearchContext() {
        const savedToken = this.uiConf.token();
        const out = this.vizs.tokens[savedToken.side].getEmbedding(savedToken.ind);
        return out.contexts;
    }
    _searchEmbeddings() {
        const self = this;
        console.log("SEARCHING EMBEDDINGS");
        const embed = this._getSearchEmbeds();
        const layer = self.uiConf.layer();
        const heads = self.uiConf.heads();
        const k = 50;
        this.sels.body.style("cursor", "progress");
        self.api.getNearestEmbeddings(self.uiConf.model(), self.uiConf.corpus(), embed, layer, heads, k)
            .then((val) => {
            if (val.status == 406) {
                self.leaveCorpusMsg(`Embeddings are not available for model '${self.uiConf.model()}' and corpus '${self.uiConf.corpus()}' at this time.`);
            }
            else {
                const v = val.payload;
                self.vizs.corpusInspector.unhideView();
                self.vizs.corpusMatManager.unhideView();
                // Get heights of corpus inspector rows.
                self.vizs.corpusInspector.update(v);
                const wrappedVals = self._wrapResults(v);
                const countedVals = wrappedVals.getMatchedHistogram();
                const offsetVals = wrappedVals.getMaxAttHistogram();
                self.vizs.corpusMatManager.update(wrappedVals.data);
                self.vizs.histograms.matchedWord.update(countedVals);
                self.vizs.histograms.maxAtt.update(offsetVals);
                self.uiConf.displayInspector('embeddings');
                this._updateCorpusInspectorFromMeta(this.uiConf.metaMatch());
            }
            this.sels.body.style("cursor", "default");
        });
    }
    _searchContext() {
        const self = this;
        console.log("SEARCHING CONTEXTS");
        const context = this._getSearchContext();
        const layer = self.uiConf.layer();
        const heads = self.uiConf.heads();
        const k = 50;
        this.sels.body.style("cursor", "progress");
        self.api.getNearestContexts(self.uiConf.model(), self.uiConf.corpus(), context, layer, heads, k)
            .then((val) => {
            // Get heights of corpus inspector rows.
            if (val.status == 406) {
                console.log("Contexts are not available!");
                self.leaveCorpusMsg(`Contexts are not available for model '${self.uiConf.model()}' and corpus '${self.uiConf.corpus()}' at this time.`);
            }
            else {
                const v = val.payload;
                console.log("HIDING");
                self.vizs.corpusInspector.update(v);
                _etc_Util__WEBPACK_IMPORTED_MODULE_17__["Sel"].hideElement(self.sels.corpusMsgBox);
                self.vizs.corpusInspector.unhideView();
                self.vizs.corpusMatManager.unhideView();
                const wrappedVals = self._wrapResults(v);
                const countedVals = wrappedVals.getMatchedHistogram();
                const offsetVals = wrappedVals.getMaxAttHistogram();
                self.vizs.corpusMatManager.update(wrappedVals.data);
                self.vizs.histograms.matchedWord.update(countedVals);
                self.vizs.histograms.maxAtt.update(offsetVals);
                self.uiConf.displayInspector('context');
                this._updateCorpusInspectorFromMeta(this.uiConf.metaMatch());
                self.vizs.histograms.maxAtt.meta(self.uiConf.metaMax());
            }
            this.sels.body.style("cursor", "default");
        });
    }
    _queryContext() {
        const self = this;
        if (this.uiConf.hasToken()) {
            this._searchContext();
        }
        else {
            console.log("Was told to show inspector but was not given a selected token embedding");
        }
    }
    _queryEmbeddings() {
        const self = this;
        if (this.uiConf.hasToken()) {
            console.log("token: ", this.uiConf.token());
            this._searchEmbeddings();
        }
        else {
            console.log("Was told to show inspector but was not given a selected token embedding");
        }
    }
    _searchingDisabled() {
        return (this.uiConf.heads().length == 0) || (!this.uiConf.hasToken());
    }
    _searchDisabler() {
        this._disableSearching(this._searchingDisabled());
    }
    _initQueryForm() {
        const self = this;
        this._searchDisabler();
        this.sels.contextQuery.on("click", () => {
            self._queryContext();
        });
        this.sels.embeddingQuery.on("click", () => {
            self._queryEmbeddings();
        });
    }
    _renderHeadSummary() {
        this.sels.selectedHeads
            .html(ramda__WEBPACK_IMPORTED_MODULE_2__["join"](', ', this.uiConf.heads().map(h => h + 1)));
    }
    // Modify faiss results with corresponding heights
    _wrapResults(returnedFaissResults) {
        const rows = d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('.inspector-row');
        // Don't just use offsetHeight since that rounds to the nearest integer
        const heights = rows.nodes().map((n) => n.getBoundingClientRect().height);
        const newVals = returnedFaissResults.map((v, i) => {
            return ramda__WEBPACK_IMPORTED_MODULE_2__["assoc"]('height', heights[i], v);
        });
        const wrappedVals = new _data_FaissSearchWrapper__WEBPACK_IMPORTED_MODULE_16__["FaissSearchResultWrapper"](newVals);
        return wrappedVals;
    }
    initLayers(nLayers) {
        const self = this;
        let hasActive = false;
        const checkboxes = self.sels.layerCheckboxes.selectAll(".layerCheckbox")
            .data(lodash__WEBPACK_IMPORTED_MODULE_1__["range"](0, nLayers))
            .join("label")
            .attr("class", "btn button layerCheckbox")
            .classed('active', (d, i) => {
            // Assign to largest layer available if uiConf.layer() > new nLayers
            if (d == self.uiConf.layer()) { // Javascript is 0 indexed!
                hasActive = true;
                return true;
            }
            if (!hasActive && d == nLayers) {
                self.uiConf.layer(d);
                hasActive = true;
                return true;
            }
            return false;
        })
            .text((d) => d + 1)
            .append("input")
            .attr("type", "radio")
            .attr("class", "checkbox-inline")
            .attr("name", "layerbox")
            // .attr("head", d => d)
            .attr("id", (d, i) => "layerCheckbox" + i);
        // .text((d, i) => d + " ")
        Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["fromEvent"])(checkboxes.nodes(), 'change').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["tap"])((e) => {
            const myData = d3__WEBPACK_IMPORTED_MODULE_0__["select"](e.target).datum();
            console.log(myData, "--- myData");
            this.sels.layerCheckboxes.selectAll(".layerCheckbox")
                .classed('active', d => d === myData);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])((v) => +d3__WEBPACK_IMPORTED_MODULE_0__["select"](v.target).datum()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["tap"])(v => {
            console.log("New layer: ", v);
            self.uiConf.layer(v);
            self.sels.body.style("cursor", "progress");
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["switchMap"])((v) => Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["from"])(self.api.updateMaskedAttentions(self.uiConf.model(), self.tokCapsule.a, self.uiConf.sentence(), v)))).subscribe({
            next: (resp) => {
                const r = resp.payload;
                self.attCapsule.updateFromNormal(r, this.uiConf.hideClsSep());
                self.tokCapsule.updateTokens(r);
                self.uiConf.maskInds(self.tokCapsule.a.maskInds);
                self.update();
                self.sels.body.style("cursor", "default");
                self._toggleTokenSel();
            }
        });
        const layerId = `#layerCheckbox${this.uiConf.layer()}`;
        console.log("Layer ID: ", layerId);
        d3__WEBPACK_IMPORTED_MODULE_0__["select"](layerId).attr("checked", "checked");
        // Init threshold stuff
        const dispThresh = (thresh) => Math.round(thresh * 100);
        d3__WEBPACK_IMPORTED_MODULE_0__["select"]('#my-range-value').text(dispThresh(self.uiConf.threshold()));
        this.sels.threshSlider.on("input", lodash__WEBPACK_IMPORTED_MODULE_1__["throttle"](function () {
            const node = this;
            self.uiConf.threshold(+node.value / 100);
            d3__WEBPACK_IMPORTED_MODULE_0__["select"]('#my-range-value').text(dispThresh(self.uiConf.threshold()));
            self.vizs.attentionSvg.threshold(self.uiConf.threshold());
        }, 100));
        this.sels.headSelectAll.on("click", function () {
            self.uiConf.selectAllHeads();
            self._searchDisabler();
            self.renderSvg();
            self.renderAttHead();
        });
        this.sels.headSelectNone.on("click", function () {
            self.uiConf.selectNoHeads();
            self._searchDisabler();
            self.renderSvg();
            self.renderAttHead();
            _etc_Util__WEBPACK_IMPORTED_MODULE_17__["Sel"].setHidden(".atn-curve");
        });
    }
    _initToggle() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["fromEvent"])(this.sels.clsToggle.node(), 'input').pipe(
        // @ts-ignore -- TODO: FIX !
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(e => e.srcElement.checked)).subscribe({
            next: v => {
                this.uiConf.hideClsSep(v);
                this.attCapsule.zeroed(v);
                this.renderSvg();
                this.renderAttHead();
            }
        });
    }
    renderAttHead() {
        const heads = lodash__WEBPACK_IMPORTED_MODULE_1__["range"](0, this.uiConf._nHeads);
        const focusAtt = this.attCapsule.att;
        const token = this.uiConf.hasToken() ? this.uiConf.token() : null;
        //@ts-ignore
        const leftAttInfo = Object(_AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["getAttentionInfo"])(focusAtt, heads, "left", token);
        //@ts-ignore
        const rightAttInfo = Object(_AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["getAttentionInfo"])(focusAtt, heads, "right", token);
        this.vizs.leftHeads.options.offset = this.uiConf.offset;
        this.vizs.leftHeads.update(leftAttInfo);
        this.vizs.rightHeads.update(rightAttInfo);
        this._renderHeadSummary();
        // Make sure
        heads.forEach((h) => {
            if (this.uiConf.headSet().has(h)) {
                selectHead(h);
            }
            else {
                unselectHead(h);
            }
        });
    }
    ;
    renderTokens() {
        const left = this.tokCapsule[this.uiConf.attType[0]];
        const right = this.tokCapsule[this.uiConf.attType[1]];
        console.log("now: ", this.uiConf.offset);
        this.vizs.tokens.left.options.offset = this.uiConf.offset;
        this.vizs.tokens.left.update(left.tokenData);
        this.vizs.tokens.left.mask(left.maskInds);
        this.vizs.tokens.right.update(right.tokenData);
        this.vizs.tokens.right.mask(right.maskInds);
        // displaySelectedToken
    }
    renderSvg() {
        const att = this.attCapsule.byHeads(this.uiConf.heads());
        this.vizs.attentionSvg.options.offset = this.uiConf.offset;
        const svg = this.vizs.attentionSvg.data(att);
        svg.update(att);
        const maxTokens = lodash__WEBPACK_IMPORTED_MODULE_1__["max"]([this.tokCapsule.a.length()]);
        const newHeight = svg.options.boxheight * maxTokens;
        svg.height(newHeight);
        // Don't redisplay everything if one token is selected
        showBySide(this.uiConf.token());
    }
    ;
    render() {
        this.renderTokens();
        this.renderSvg();
        this.renderAttHead();
    }
    update() {
        this.render();
    }
}


/***/ }),

/***/ 0:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!****************************!*\
  !*** node-fetch (ignored) ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** string_decoder (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY3NzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9leEJFUlQuaHRtbCIsIndlYnBhY2s6Ly8vLi9pbmRleC5odG1sIiwid2VicGFjazovLy8uL3RzL2FwaS9kZW1vQVBJLnRzIiwid2VicGFjazovLy8uL3RzL2FwaS9tYWluQXBpLnRzIiwid2VicGFjazovLy8uL3RzL2RhdGEvQXR0ZW50aW9uQ2Fwc3VsZS50cyIsIndlYnBhY2s6Ly8vLi90cy9kYXRhL0ZhaXNzU2VhcmNoV3JhcHBlci50cyIsIndlYnBhY2s6Ly8vLi90cy9kYXRhL1Rva2VuV3JhcHBlci50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvU1ZHcGx1cy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvU2ltcGxlRXZlbnRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3RzL2V0Yy9TcGFjeUluZm8udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZXRjL1VSTEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZXRjL1V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZXRjL19Ub29scy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvYXBpSGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvYXJyYXlVdGlscy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvY29sb3JzLnRzIiwid2VicGFjazovLy8uL3RzL2V0Yy90eXBlcy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMveGQzLnRzIiwid2VicGFjazovLy8uL3RzL2V0Yy94cmFtZGEudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi90cy91aUNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvQXR0ZW50aW9uQ29ubmVjdG9yLnRzIiwid2VicGFjazovLy8uL3RzL3Zpcy9BdHRlbnRpb25IZWFkQm94LnRzIiwid2VicGFjazovLy8uL3RzL3Zpcy9Db3JwdXNIaXN0b2dyYW0udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdmlzL0NvcnB1c0luc3BlY3Rvci50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvQ29ycHVzTWF0TWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvRWRnZUNvbm5lY3Rvci50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvVGV4dFRva2VuLnRzIiwid2VicGFjazovLy8uL3RzL3Zpcy9WaXNDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdmlzL215TWFpbi50cyIsIndlYnBhY2s6Ly8vY3J5cHRvIChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vbm9kZS1mZXRjaCAoaWdub3JlZCkiLCJ3ZWJwYWNrOi8vL3V0aWwgKGlnbm9yZWQpIiwid2VicGFjazovLy9jcnlwdG8gKGlnbm9yZWQpP2E4YjciLCJ3ZWJwYWNrOi8vL3N0cmluZ19kZWNvZGVyIChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vZnMgKGlnbm9yZWQpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQix1QkFBdUI7UUFDdkM7OztRQUdBO1FBQ0E7UUFDQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN2SkEsdUM7Ozs7Ozs7Ozs7O0FDQUEsaUJBQWlCLHFCQUF1QixpQjs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QixnQjs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQUE7QUFBTyxNQUFNLE9BQU8sR0FBRztJQUN0QiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFF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QUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNuQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDN0I7SUFFRCxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSSxFQUFFLEtBQUs7UUFDbEMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBRUgsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbkMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDL0I7SUFFRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN6Q0g7QUFBQTtBQUFBLDRIQUE0SDtBQUNySCxNQUFNLFNBQVMsR0FBRztJQUNyQixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztDQUN6Rjs7Ozs7Ozs7Ozs7OztBQzhFRDtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQVks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VSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3hELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO1FBQzFELE1BQU0sR0FBRyxHQUFtQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDZixNQUFNLFNBQVMsR0FBRywwQ0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNyRCxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxTQUFTO1FBQ25ELEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBRXJCLHNEQUFzRDtRQUN0RCxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBQUEsQ0FBQztJQUVGLE1BQU07UUFDRixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsTUFBTTtRQUNGLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7OztBQ24rQkQsZTs7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi90cy9tYWluLnRzXCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJleEJFUlQuaHRtbFwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImluZGV4Lmh0bWxcIjsiLCJleHBvcnQgY29uc3QgRGVtb0FQSSA9IHtcblx0XCI1MjdmZGFjNDQwNGJmOWJhNTQxMjY0NmFkNDU3OTUwZDQ0ODI3NjJjXCI6IFwiNTI3ZmRhYzQ0MDRiZjliYTU0MTI2NDZhZDQ1Nzk1MGQ0NDgyNzYyYy5qc29uXCIsXG5cdFwiNTliNGFjYzA1ZjFkODBlY2JlZjFjMjNlYWYyZmRhMTAyMjJjYjI1N1wiOiBcIjU5YjRhY2MwNWYxZDgwZWNiZWYxYzIzZWFmMmZkYTEwMjIyY2IyNTcuanNvblwiLFxuXHRcIjM1NDk5MmYyZWUyMzY2MDRjODc0YTNhNjI3ZTQwNDJiYzY4NTg2ZjhcIjogXCIzNTQ5OTJmMmVlMjM2NjA0Yzg3NGEzYTYyN2U0MDQyYmM2ODU4NmY4Lmpzb25cIixcblx0XCI1MDE1ZTVhMzE4NjA1Y2VhNjgwODUzOGRiMTRkOGFmMTY4ODdiMDc2XCI6IFwiNTAxNWU1YTMxODYwNWNlYTY4MDg1MzhkYjE0ZDhhZjE2ODg3YjA3Ni5qc29uXCIsXG5cdFwiM2M5YWExNTJhYzg5NDMwNjA0MDcwM2M1MDk1NTk5YjE5OWNhZDFhOVwiOiBcIjNjOWFhMTUyYWM4OTQzMDYwNDA3MDNjNTA5NTU5OWIxOTljYWQxYTkuanNvblwiLFxuXHRcIjBmZWNlMGM4NzIwM2U4M2FmZDE2NzRiNWFlZWJhZWQwZjVmYTA1NjJcIjogXCIwZmVjZTBjODcyMDNlODNhZmQxNjc0YjVhZWViYWVkMGY1ZmEwNTYyLmpzb25cIixcblx0XCJkM2EwZTQwNDVlYTQ4YTI3NWNlNTFhNmFmMDI4MDQwNjA2MGY0N2NmXCI6IFwiZDNhMGU0MDQ1ZWE0OGEyNzVjZTUxYTZhZjAyODA0MDYwNjBmNDdjZi5qc29uXCIsXG5cdFwiZWQ5OGQ3NTFhYjliNmE0YTBlODVlOTMzMmI0MjBhNGMxM2FiNzVhN1wiOiBcImVkOThkNzUxYWI5YjZhNGEwZTg1ZTkzMzJiNDIwYTRjMTNhYjc1YTcuanNvblwiLFxuXHRcIjBkMjRhZTA4ZWViMjFhZjgyYzY2NmNiZTJhYzA2NDZlZDljOWQ5YTZcIjogXCIwZDI0YWUwOGVlYjIxYWY4MmM2NjZjYmUyYWMwNjQ2ZWQ5YzlkOWE2Lmpzb25cIixcblx0XCI2ZGUwNTNiM2I4YTRkOTA0NzgwYzlhNjU0NWEwYTYzY2JiYjJiMTQ0XCI6IFwiNmRlMDUzYjNiOGE0ZDkwNDc4MGM5YTY1NDVhMGE2M2NiYmIyYjE0NC5qc29uXCIsXG5cdFwiZjY4ZGYyMzM2NWZhZjAyZjljMDE0MzkzNDViZWQ2NjkzNmVkODVmN1wiOiBcImY2OGRmMjMzNjVmYWYwMmY5YzAxNDM5MzQ1YmVkNjY5MzZlZDg1ZjcuanNvblwiLFxuXHRcIjQ2MDhjYjRmYzAwYjQzZmZmNjgwOThlODU2NzZmYWQ1N2M5NDBmMDJcIjogXCI0NjA4Y2I0ZmMwMGI0M2ZmZjY4MDk4ZTg1Njc2ZmFkNTdjOTQwZjAyLmpzb25cIixcblx0XCJkZmNkNTAxNDZkYThkODEyMmE1YTU3YzJhM2MwYWJjZTUwM2JhOTRiXCI6IFwiZGZjZDUwMTQ2ZGE4ZDgxMjJhNWE1N2MyYTNjMGFiY2U1MDNiYTk0Yi5qc29uXCIsXG5cdFwiMzRjODYyOWQ0MjY1ZDdmM2VkZTNhZGQ0MmYzNjEzYjIwNWQ5NGMxY1wiOiBcIjM0Yzg2MjlkNDI2NWQ3ZjNlZGUzYWRkNDJmMzYxM2IyMDVkOTRjMWMuanNvblwiLFxuXHRcImRiMmRjMjUyYTc4NjY1MGY2NDM5NWEwZjVkMTgxYzA4MzEwMTljYmZcIjogXCJkYjJkYzI1MmE3ODY2NTBmNjQzOTVhMGY1ZDE4MWMwODMxMDE5Y2JmLmpzb25cIixcblx0XCJkYTQ1OTdkNzNkNDQ0NzU3YmRlOTE3NjM5NWJmMzFhYWQzMzM0MTMxXCI6IFwiZGE0NTk3ZDczZDQ0NDc1N2JkZTkxNzYzOTViZjMxYWFkMzMzNDEzMS5qc29uXCIsXG5cdFwiYTJlYmYxM2QzYzkzNzFmY2Y3MzhiOTY1MTgyNGUyYzNjZDFmZjhlMFwiOiBcImEyZWJmMTNkM2M5MzcxZmNmNzM4Yjk2NTE4MjRlMmMzY2QxZmY4ZTAuanNvblwiLFxuXHRcImJjNDE5MjM4YzIwZGQxYzVjZmUxY2M0MjdhYjNkMWUzMTM1MzQzNmFcIjogXCJiYzQxOTIzOGMyMGRkMWM1Y2ZlMWNjNDI3YWIzZDFlMzEzNTM0MzZhLmpzb25cIixcblx0XCI4NGU4YmU5ZmU1NjJmYmQwNDg3YzAzYjU1Y2M2YjRmM2ZiOGNkNzg3XCI6IFwiODRlOGJlOWZlNTYyZmJkMDQ4N2MwM2I1NWNjNmI0ZjNmYjhjZDc4Ny5qc29uXCIsXG5cdFwiMjA3ZTZjOThhMGUxNDlkYzdlNmVkNjcxMTgyOTZkOGE4Yzg5YjNjM1wiOiBcIjIwN2U2Yzk4YTBlMTQ5ZGM3ZTZlZDY3MTE4Mjk2ZDhhOGM4OWIzYzMuanNvblwiLFxuXHRcImMxODVhOTM0OWJhNWEzMjVhY2Y4NTE0ZTliNTBkZTcxMjgwNDg4YWFcIjogXCJjMTg1YTkzNDliYTVhMzI1YWNmODUxNGU5YjUwZGU3MTI4MDQ4OGFhLmpzb25cIixcblx0XCJkZGU0ODFhNWNkMzY2N2FlOGM2YzViNWUxNDIxZGM4ODJiNmEyZGQ2XCI6IFwiZGRlNDgxYTVjZDM2NjdhZThjNmM1YjVlMTQyMWRjODgyYjZhMmRkNi5qc29uXCIsXG5cdFwiZjYzZTE0ZTkzNWQ5ODk0OGI0YTBlYmM5NjYzNDAwZGJlNDI2MzM0OFwiOiBcImY2M2UxNGU5MzVkOTg5NDhiNGEwZWJjOTY2MzQwMGRiZTQyNjMzNDguanNvblwiLFxuXHRcIjc5Yjk2NGQxYTVjODU0ZGVhZWFjZTI2ODEzZjk2OTk0YmI4MmFlZjJcIjogXCI3OWI5NjRkMWE1Yzg1NGRlYWVhY2UyNjgxM2Y5Njk5NGJiODJhZWYyLmpzb25cIixcblx0XCIzYjExNjhlYzk2YWYwMGM0ZTg4NzM0MWU5MmE4NzhmODc1MmUxZDE3XCI6IFwiM2IxMTY4ZWM5NmFmMDBjNGU4ODczNDFlOTJhODc4Zjg3NTJlMWQxNy5qc29uXCIsXG5cdFwiOGM0NjJiYzI5OGUzMTgzZWZhOGQ5ZTg2M2UyNWVhNWQ4OTgwNmIwM1wiOiBcIjhjNDYyYmMyOThlMzE4M2VmYThkOWU4NjNlMjVlYTVkODk4MDZiMDMuanNvblwiLFxuXHRcIjk5Mzk2OThlZGFhMjViYmFlOWVlMWQyNzg2NGU2OThmMTM5NjNmMDZcIjogXCI5OTM5Njk4ZWRhYTI1YmJhZTllZTFkMjc4NjRlNjk4ZjEzOTYzZjA2Lmpzb25cIixcblx0XCI3M2YxZWU0OTdiM2U3YjYzOTRlNTU3MjZiMThkYmY5ZDUxNGRjZWE2XCI6IFwiNzNmMWVlNDk3YjNlN2I2Mzk0ZTU1NzI2YjE4ZGJmOWQ1MTRkY2VhNi5qc29uXCIsXG5cdFwiYzdjZGI4MGJmODEzZTFkZTI0MTI2MGFlZGU2Y2QyOGVhNjVjY2ZhZVwiOiBcImM3Y2RiODBiZjgxM2UxZGUyNDEyNjBhZWRlNmNkMjhlYTY1Y2NmYWUuanNvblwiLFxuXHRcImE5NmZlZDE2ZWFiMWJmNmQwOGU0MDAxYzAyODk0ZDljNTQ5ZGY2MjdcIjogXCJhOTZmZWQxNmVhYjFiZjZkMDhlNDAwMWMwMjg5NGQ5YzU0OWRmNjI3Lmpzb25cIixcblx0XCJhOGVhZjEwZGE4ZGM3NWI0MmU3MmJkYzcwOTE3NzYyNDdmZmY5NjU3XCI6IFwiYThlYWYxMGRhOGRjNzViNDJlNzJiZGM3MDkxNzc2MjQ3ZmZmOTY1Ny5qc29uXCIsXG5cdFwiYTgxOTRmMjMwOWUxYzcxZTk3N2VmOGQzYmU1NzJhZTAwYjBlOTFmMlwiOiBcImE4MTk0ZjIzMDllMWM3MWU5NzdlZjhkM2JlNTcyYWUwMGIwZTkxZjIuanNvblwiLFxuXHRcIjJmNGExNWI2NmZjZmIwYzdhNDNhMzNkOTM3NjM5OTAyODJiZmM1YWFcIjogXCIyZjRhMTViNjZmY2ZiMGM3YTQzYTMzZDkzNzYzOTkwMjgyYmZjNWFhLmpzb25cIixcblx0XCIwNjA5NWNlZjRhN2Y0OWIxOGYxNTNlNjdlMzNmZGRiODMxYTE1YjQ2XCI6IFwiMDYwOTVjZWY0YTdmNDliMThmMTUzZTY3ZTMzZmRkYjgzMWExNWI0Ni5qc29uXCIsXG5cdFwiNGM5M2VhZjBjMGNlNTZmMWU1ZDUxMDA5MTZhYmY0ZDMxZWIzNWRhNVwiOiBcIjRjOTNlYWYwYzBjZTU2ZjFlNWQ1MTAwOTE2YWJmNGQzMWViMzVkYTUuanNvblwiLFxuXHRcImY4YzQwYzY3Yzg1MWEwNDg5Zjc0ODBjOTliMzFiNGY2MDZjMDE4NGJcIjogXCJmOGM0MGM2N2M4NTFhMDQ4OWY3NDgwYzk5YjMxYjRmNjA2YzAxODRiLmpzb25cIixcblx0XCJlNGU3MWY2ZWE1N2JlMmUwNWQ2MmFmMDgyNWE4MGYxNDQ0MjFlMDJkXCI6IFwiZTRlNzFmNmVhNTdiZTJlMDVkNjJhZjA4MjVhODBmMTQ0NDIxZTAyZC5qc29uXCIsXG5cdFwiZTdkOWQ1MjA4ODI3ODJjN2NmYmZmZWFkYWFmMjJiNGMwYTA4MWM3Y1wiOiBcImU3ZDlkNTIwODgyNzgyYzdjZmJmZmVhZGFhZjIyYjRjMGEwODFjN2MuanNvblwiLFxuXHRcIjRhYTRlYjEwZWFkNDRhMGEzYzJkZDk1NDA3MDE3YTkyODEzOGIzMmJcIjogXCI0YWE0ZWIxMGVhZDQ0YTBhM2MyZGQ5NTQwNzAxN2E5MjgxMzhiMzJiLmpzb25cIixcblx0XCJkYTMxZDU1ZWU4Y2IwMWJjZGIyOTU3MmNiOTAyYjhlNzk5Njg1YmUyXCI6IFwiZGEzMWQ1NWVlOGNiMDFiY2RiMjk1NzJjYjkwMmI4ZTc5OTY4NWJlMi5qc29uXCIsXG5cdFwiZTQyNzE4MWZiMDJiYmYxOWY3YmJiNjVjOWQ5Mzg5ZDJkOWE0MTgxMlwiOiBcImU0MjcxODFmYjAyYmJmMTlmN2JiYjY1YzlkOTM4OWQyZDlhNDE4MTIuanNvblwiLFxuXHRcImJiY2FiOWUxY2E2MGE4NTFmZDdlY2ZkYTgwZGU0NzBhZmE3NDA5MzZcIjogXCJiYmNhYjllMWNhNjBhODUxZmQ3ZWNmZGE4MGRlNDcwYWZhNzQwOTM2Lmpzb25cIixcblx0XCI0ZGU5NmFhMjA1MDc2ODYzYzlmYjRlYTk5ZTJiYTg2ZmExMzFmZjc2XCI6IFwiNGRlOTZhYTIwNTA3Njg2M2M5ZmI0ZWE5OWUyYmE4NmZhMTMxZmY3Ni5qc29uXCIsXG5cdFwiZTRjNmQxYjMwMDRlM2NkZDBjODc5YTU5NjM5YjVjZTk5MzIwN2E5OVwiOiBcImU0YzZkMWIzMDA0ZTNjZGQwYzg3OWE1OTYzOWI1Y2U5OTMyMDdhOTkuanNvblwiLFxuXHRcImZiYzlkYTc5YjhiZjM5ZGM5OTk4NDA4NTI2NzQxZjgxMWExM2U2YWFcIjogXCJmYmM5ZGE3OWI4YmYzOWRjOTk5ODQwODUyNjc0MWY4MTFhMTNlNmFhLmpzb25cIixcblx0XCI1Mjg1NTRlZTRlNjE1YzYxMjg3YzQwZWQ5YTJhZWE2OWI5MWFmNmM5XCI6IFwiNTI4NTU0ZWU0ZTYxNWM2MTI4N2M0MGVkOWEyYWVhNjliOTFhZjZjOS5qc29uXCIsXG5cdFwiNWU3MDczYzAzYzM3ZDE5ODI2YjJmYjRhNjU5OWNjYWVkZGU0OTJlNFwiOiBcIjVlNzA3M2MwM2MzN2QxOTgyNmIyZmI0YTY1OTljY2FlZGRlNDkyZTQuanNvblwiLFxuXHRcIjcxYzRhODg2Y2RlZTU4YTM3MWFlMjExNTMxMWIxNTBlODRlNTU1ZjZcIjogXCI3MWM0YTg4NmNkZWU1OGEzNzFhZTIxMTUzMTFiMTUwZTg0ZTU1NWY2Lmpzb25cIixcblx0XCI0YmNlMDk3MGE0NjVmZTliOTYzMDVlMDZhZjE5YzVkOWM5N2Q3Y2MzXCI6IFwiNGJjZTA5NzBhNDY1ZmU5Yjk2MzA1ZTA2YWYxOWM1ZDljOTdkN2NjMy5qc29uXCIsXG5cdFwiZWZkYjFmMGE3MGYyMmY4MGZmM2NlYTBjYjc5YmVjNzE3ZmM4YjZmN1wiOiBcImVmZGIxZjBhNzBmMjJmODBmZjNjZWEwY2I3OWJlYzcxN2ZjOGI2ZjcuanNvblwiLFxuXHRcIjE3NGM2Zjc4NmQxMzljZTExMTM4MTA0NWQ2MGQyNTY4MmExNjhiOTlcIjogXCIxNzRjNmY3ODZkMTM5Y2UxMTEzODEwNDVkNjBkMjU2ODJhMTY4Yjk5Lmpzb25cIixcblx0XCJhOGMyM2U4OGQ2Y2E2ZDRlZmQyNjQ2YjA3NDJjMGZhMzJkYmQ1NWE0XCI6IFwiYThjMjNlODhkNmNhNmQ0ZWZkMjY0NmIwNzQyYzBmYTMyZGJkNTVhNC5qc29uXCIsXG5cdFwiZjY5NDljMjg3NTJkZTM1YTg3MGVmZGUzMDg1ODVhY2Q0NmEyNTI3OFwiOiBcImY2OTQ5YzI4NzUyZGUzNWE4NzBlZmRlMzA4NTg1YWNkNDZhMjUyNzguanNvblwiLFxuXHRcImMxYmRiOGNiYWZkNWQ1ZDhmNmJkYTJiNGRiMTZiNmJjMmQ2MmUxOGFcIjogXCJjMWJkYjhjYmFmZDVkNWQ4ZjZiZGEyYjRkYjE2YjZiYzJkNjJlMThhLmpzb25cIixcblx0XCIyYjgxYThmNjAyMjUxY2Y0MGI0NjgyYzhjZWRiMzk2NmI5MTJkN2M2XCI6IFwiMmI4MWE4ZjYwMjI1MWNmNDBiNDY4MmM4Y2VkYjM5NjZiOTEyZDdjNi5qc29uXCIsXG5cdFwiOGY5NGU4NDNkMjUxMDA0N2ZkMWFmNDZmMjQ5YWZlODdmZjQ5Y2MyZlwiOiBcIjhmOTRlODQzZDI1MTAwNDdmZDFhZjQ2ZjI0OWFmZTg3ZmY0OWNjMmYuanNvblwiLFxuXHRcIjRlM2RkYjUxNTUwYzAzYzY0ZmRiZTU1OTI1MjY2NjUxMDBkMzI5MzBcIjogXCI0ZTNkZGI1MTU1MGMwM2M2NGZkYmU1NTkyNTI2NjY1MTAwZDMyOTMwLmpzb25cIixcblx0XCJmODE2YjIzYWY5YWE0MzEyYzgwZTY2OGE2NmExNTZjOTM0Y2IzMzBjXCI6IFwiZjgxNmIyM2FmOWFhNDMxMmM4MGU2NjhhNjZhMTU2YzkzNGNiMzMwYy5qc29uXCIsXG5cdFwiMmZlMDVhOTExYTU3NGI4YTZkNGIwNWViMTNkYjllMDlhYWFjYWQyZFwiOiBcIjJmZTA1YTkxMWE1NzRiOGE2ZDRiMDVlYjEzZGI5ZTA5YWFhY2FkMmQuanNvblwiLFxuXHRcIjVjNzE0OTY3MjYzOTVhYWE0ZDBhNjUzNzNmZDE2NTFiNWEwZTZiMWZcIjogXCI1YzcxNDk2NzI2Mzk1YWFhNGQwYTY1MzczZmQxNjUxYjVhMGU2YjFmLmpzb25cIixcbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5pbXBvcnQgeyBkZWJ1ZyB9IGZyb20gJ3V0aWwnO1xuaW1wb3J0IHsgVG9rZW5EaXNwbGF5IH0gZnJvbSAnLi4vZGF0YS9Ub2tlbldyYXBwZXInXG5pbXBvcnQgKiBhcyB0cCBmcm9tICcuLi9ldGMvdHlwZXMnXG5pbXBvcnQgKiBhcyByc3AgZnJvbSAnLi9yZXNwb25zZXMnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgRGVtb0FQSSB9IGZyb20gJy4vZGVtb0FQSSdcbmltcG9ydCAqIGFzIGhhc2ggZnJvbSAnb2JqZWN0LWhhc2gnXG5pbXBvcnQgeyBtYWtlVXJsLCB0b1BheWxvYWQgfSBmcm9tICcuLi9ldGMvYXBpSGVscGVycydcbmltcG9ydCB7IFVSTEhhbmRsZXIgfSBmcm9tICcuLi9ldGMvVVJMSGFuZGxlcic7XG5cbmV4cG9ydCBjb25zdCBlbXB0eVRva2VuRGlzcGxheSA9IG5ldyBUb2tlbkRpc3BsYXkoKVxuXG5jb25zdCBiYXNldXJsID0gVVJMSGFuZGxlci5iYXNpY1VSTCgpXG5cbi8qKlxuICogQSByZXdyaXRlIG9mIGBkMy1mZXRjaGAncyBgZDMuanNvbmAgY2FsbGJhY2suIElmIGFuIGFwaSBjYWxsIGZhaWxzLCBtYWtlIGEgYmFja3VwIGNhbGwgdG8gc3BlY2lmaWVkIHVybCBhbmQgcGF5bG9hZCwgaWYgc3BlY2lmaWVkLlxuICogXG4gKiBAcGFyYW0gcmVzcG9uc2UgT2JqZWN0IGV4cGVjdGVkIGF0IHRpbWUgb2YgY2FsbGJhY2tcbiAqIEBwYXJhbSBiYWNrdXBVcmwgQmFja3VwIHVybCBpbiB0aGUgZXZlbnQgb2YgZmFpbFxuICogQHBhcmFtIGJhY2t1cFBheWxvYWQgQmFja3VwIHBheWxvYWQgaWYgbWFraW5nIGEgcG9zdCByZXF1ZXN0XG4gKi9cbmZ1bmN0aW9uIHJlc3BvbnNlSnNvbihyZXNwb25zZSwgYmFja3VwVXJsID0gbnVsbCwgYmFja3VwUGF5bG9hZCA9IG51bGwpIHtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGlmIChiYWNrdXBVcmwgIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTVEFUSUMgRklMRSBOT1QgRk9VTkRcIik7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2goYmFja3VwVXJsLCBiYWNrdXBQYXlsb2FkKS50aGVuKHJlc3BvbnNlSnNvbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1cyArIFwiIFwiICsgcmVzcG9uc2Uuc3RhdHVzVGV4dClcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxufVxuXG4vKipcbiAqIENoZWNrIGZpcnN0IGlmIHRoZSBpbmZvcm1hdGlvbiBiZWluZyBzZW50IGV4aXN0cyBpbiBhIHN0YXRpYyBkZW1vIGZpbGUuIElmIGl0IGRvZXMsIHNlbmQgdGhhdC4gT3RoZXJ3aXNlLCBtYWtlIGEgbm9ybWFsIGNhbGwgdG8gdGhlIHNlcnZlci5cbiAqIFxuICogQHBhcmFtIHRvU2VuZCBUaGUgcGFja2V0IG9mIGluZm9ybWF0aW9uIHRvIHNlbmQgdG8gYW4gQVBJIGVuZHBvaW50XG4gKiBAcGFyYW0gYmFja3VwVXJsIEJhY2t1cCB1cmwgaW4gdGhlIGV2ZW50IHRoYXQgdGhlIGRlbW8gZmlsZSBpcyBub3QgZm91bmRcbiAqIEBwYXJhbSBiYWNrdXBQYXlsb2FkIEJhY2t1cCBwYXlsb2FkIGlmIGRlbW8gZmlsZSBub3QgZm91bmQsIGZvciBQT1NUIHJlcXVlc3RzIG9ubHlcbiAqL1xuZnVuY3Rpb24gY2hlY2tEZW1vQVBJKHRvU2VuZCwgYmFja3VwVXJsID0gbnVsbCwgYmFja3VwUGF5bG9hZCA9IG51bGwpIHtcbiAgICBjb25zdCBoc2ggPSBoYXNoLnNoYTEodG9TZW5kKTtcbiAgICBjb25zb2xlLmxvZyhcIkNIRUNLSU5HIERFTU9BUEk6IFwiICsgaHNoKTtcbiAgICBpZiAoRGVtb0FQSS5oYXNPd25Qcm9wZXJ0eShoc2gpKSB7XG4gICAgICAgIC8vIFJlbGllcyBvbiBhIHN5bWJvbGljIGxpbmsgYmVpbmcgcHJlc2VudCBpbiB0aGUgZGlzdCBmb2xkZXIgdG8gdGhlIGRlbW8gZm9sZGVyXG4gICAgICAgIGNvbnN0IHBhdGggPSAnLi9kZW1vLycgKyBEZW1vQVBJW2hzaF1cbiAgICAgICAgY29uc29sZS5sb2coXCJUUllJTkcgVE8gU0VORElORyBTVEFUSUM6IFwiLCBwYXRoKTtcbiAgICAgICAgY29uc3QgZm9sbG93ID0gKHJlc3BvbnNlKSA9PiByZXNwb25zZUpzb24ocmVzcG9uc2UsIGJhY2t1cFVybCwgYmFja3VwUGF5bG9hZClcbiAgICAgICAgcmV0dXJuIGZldGNoKHBhdGgpLnRoZW4oZm9sbG93KVxuICAgIH1cbiAgICByZXR1cm4gZDMuanNvbihiYWNrdXBVcmwsIGJhY2t1cFBheWxvYWQpXG59XG5cblxuZXhwb3J0IGNsYXNzIEFQSSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhc2VVUkw6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgaWYgKHRoaXMuYmFzZVVSTCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmJhc2VVUkwgPSBiYXNldXJsICsgJy9hcGknO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TW9kZWxEZXRhaWxzKG1vZGVsOiBzdHJpbmcsIGhhc2hPYmo6IHt9IHwgbnVsbCA9IG51bGwpOiBQcm9taXNlPHJzcC5Nb2RlbERldGFpbFJlc3BvbnNlPiB7XG4gICAgICAgIGNvbnN0IHRvU2VuZCA9IHtcbiAgICAgICAgICAgIG1vZGVsOiBtb2RlbFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsID0gbWFrZVVybCh0aGlzLmJhc2VVUkwgKyBcIi9nZXQtbW9kZWwtZGV0YWlsc1wiLCB0b1NlbmQpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tIEdFVCBcIiArIHVybCk7XG5cbiAgICAgICAgaWYgKGhhc2hPYmogIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gaGFzaC5zaGExKHRvU2VuZClcbiAgICAgICAgICAgIGQzLmpzb24odXJsKS50aGVuKHIgPT4ge1xuICAgICAgICAgICAgICAgIGhhc2hPYmpba2V5XSA9IHI7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNoZWNrRGVtb0FQSSh0b1NlbmQsIHVybClcbiAgICB9XG5cbiAgICBnZXRNZXRhQXR0ZW50aW9ucyhtb2RlbDogc3RyaW5nLCBzZW50ZW5jZTogc3RyaW5nLCBsYXllcjogbnVtYmVyLCBoYXNoT2JqOiB7fSB8IG51bGwgPSBudWxsKTogUHJvbWlzZTxyc3AuQXR0ZW50aW9uRGV0YWlsc1Jlc3BvbnNlPiB7XG4gICAgICAgIGNvbnN0IHRvU2VuZCA9IHtcbiAgICAgICAgICAgIG1vZGVsOiBtb2RlbCxcbiAgICAgICAgICAgIHNlbnRlbmNlOiBzZW50ZW5jZSxcbiAgICAgICAgICAgIGxheWVyOiBsYXllclxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHVybCA9IG1ha2VVcmwodGhpcy5iYXNlVVJMICsgXCIvYXR0ZW5kK21ldGFcIiwgdG9TZW5kKVxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLSBHRVQgXCIgKyB1cmwpO1xuXG4gICAgICAgIC8vIEFkZCBoYXNoIGFuZCB2YWx1ZSB0byBoYXNoT2JqXG4gICAgICAgIGlmIChoYXNoT2JqICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGhhc2guc2hhMSh0b1NlbmQpXG4gICAgICAgICAgICBkMy5qc29uKHVybCkudGhlbihyID0+IHtcbiAgICAgICAgICAgICAgICBoYXNoT2JqW2tleV0gPSByO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGVja0RlbW9BUEkodG9TZW5kLCB1cmwpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBkaXNwbGF5IGJhc2VkIG9uIHRoZSBpbmZvcm1hdGlvbiB0aGF0IHdhcyBhbHJlYWR5IHBhcnNlZCBmcm9tIHRoZSBwYXNzZWQgc2VudGVuY2UuXG4gICAgICogXG4gICAgICogQHBhcmFtIGEgVGhlIGRpc3BsYXllZCB0b2tlbnMgaW4gdGhlIGNvbHVtbnMgXG4gICAgICogQHBhcmFtIHNlbnRlbmNlQSBUaGUgb3JpZ2luYWwgc2VudGVuY2UgdGhhdCBsZWQgdG8gdGhlIHRva2VuaXplZCBpbmZvcm1hdGlvbiBpbiBgYWBcbiAgICAgKiBAcGFyYW0gbGF5ZXIgV2hpY2ggbGF5ZXIgdG8gc2VhcmNoIGF0XG4gICAgICogQHBhcmFtIGhhc2hPYmogSWYgbm90IG51bGwsIHN0b3JlIHRoZSBpbmZvcm1hdGlvbiBvZiB0aGUgcmVzcG9uc2VzIGludG8gdGhlIHBhc3NlZCBvYmplY3QuIFVzZWQgZm9yIGNyZWF0aW5nIGRlbW9zLlxuICAgICAqL1xuICAgIHVwZGF0ZU1hc2tlZEF0dGVudGlvbnMobW9kZWw6IHN0cmluZywgdG9rZW5zOiBUb2tlbkRpc3BsYXksIHNlbnRlbmNlOiBzdHJpbmcsIGxheWVyOiBudW1iZXIsIGhhc2hPYmo6IHt9IHwgbnVsbCA9IG51bGwpOiBQcm9taXNlPHJzcC5BdHRlbnRpb25EZXRhaWxzUmVzcG9uc2U+IHtcbiAgICAgICAgY29uc3QgdG9TZW5kID0ge1xuICAgICAgICAgICAgbW9kZWw6IG1vZGVsLFxuICAgICAgICAgICAgdG9rZW5zOiBSLm1hcChSLnByb3AoJ3RleHQnKSwgdG9rZW5zLnRva2VuRGF0YSksXG4gICAgICAgICAgICBzZW50ZW5jZTogc2VudGVuY2UsXG5cbiAgICAgICAgICAgIC8vIEVtcHR5IG1hc2tzIG5lZWQgdG8gYmUgc2VudCBhcyBhIG51bWJlciwgdW5mb3J0dW5hdGVseS4gQ2hvb3NpbmcgLTEgZm9yIHRoaXNcbiAgICAgICAgICAgIG1hc2s6IHRva2Vucy5tYXNrSW5kcy5sZW5ndGggPyB0b2tlbnMubWFza0luZHMgOiBbLTFdLFxuICAgICAgICAgICAgbGF5ZXI6IGxheWVyLFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsID0gbWFrZVVybCh0aGlzLmJhc2VVUkwgKyAnL3VwZGF0ZS1tYXNrJyk7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB0b1BheWxvYWQodG9TZW5kKVxuXG5cbiAgICAgICAgaWYgKGhhc2hPYmogIT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gQWRkIGhhc2ggYW5kIHZhbHVlIHRvIGhhc2hPYmogZm9yIGRlbW8gcHVycG9zZXNcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGhhc2guc2hhMSh0b1NlbmQpXG4gICAgICAgICAgICBkMy5qc29uKHVybCwgcGF5bG9hZCkudGhlbihyID0+IHtcbiAgICAgICAgICAgICAgICBoYXNoT2JqW2tleV0gPSByO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tIFBPU1QgXCIgKyB1cmwsIHBheWxvYWQpO1xuXG4gICAgICAgIHJldHVybiBjaGVja0RlbW9BUEkodG9TZW5kLCB1cmwsIHBheWxvYWQpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIGVtYmVkZGluZyBFbWJlZGRpbmcgb2YgdGhlIHdvcmRcbiAgICAgKiBAcGFyYW0gbGF5ZXIgSW4gdGhlIGwndGggbGF5ZXJcbiAgICAgKiBAcGFyYW0gayBob3cgbWFueSByZXN1bHRzIHRvIHJldHJpZXZlXG4gICAgICovXG4gICAgZ2V0TmVhcmVzdEVtYmVkZGluZ3MobW9kZWw6IHN0cmluZywgY29ycHVzOiBzdHJpbmcsIGVtYmVkZGluZzogbnVtYmVyW10sIGxheWVyOiBudW1iZXIsIGhlYWRzOiBudW1iZXJbXSwgayA9IDEwLCBoYXNoT2JqOiB7fSB8IG51bGwgPSBudWxsKTogUHJvbWlzZTxyc3AuTmVhcmVzdE5laWdoYm9yUmVzcG9uc2U+IHtcbiAgICAgICAgY29uc3QgdG9TZW5kID0ge1xuICAgICAgICAgICAgbW9kZWw6IG1vZGVsLFxuICAgICAgICAgICAgY29ycHVzOiBjb3JwdXMsXG4gICAgICAgICAgICBlbWJlZGRpbmc6IGVtYmVkZGluZyxcbiAgICAgICAgICAgIGxheWVyOiBsYXllcixcbiAgICAgICAgICAgIGhlYWRzOiBoZWFkcyxcbiAgICAgICAgICAgIGs6IGssXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1cmwgPSBtYWtlVXJsKHRoaXMuYmFzZVVSTCArICcvay1uZWFyZXN0LWVtYmVkZGluZ3MnLCB0b1NlbmQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLSBHRVQgXCIgKyB1cmwpO1xuXG4gICAgICAgIGlmIChoYXNoT2JqICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGhhc2guc2hhMSh0b1NlbmQpXG4gICAgICAgICAgICBkMy5qc29uKHVybCkudGhlbihyID0+IHtcbiAgICAgICAgICAgICAgICBoYXNoT2JqW2tleV0gPSByO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGVja0RlbW9BUEkodG9TZW5kLCB1cmwpXG4gICAgfVxuXG4gICAgZ2V0TmVhcmVzdENvbnRleHRzKG1vZGVsOiBzdHJpbmcsIGNvcnB1czogc3RyaW5nLCBjb250ZXh0OiBudW1iZXJbXSwgbGF5ZXI6IG51bWJlciwgaGVhZHM6IG51bWJlcltdLCBrID0gMTAsIGhhc2hPYmo6IHt9IHwgbnVsbCA9IG51bGwpOiBQcm9taXNlPHJzcC5OZWFyZXN0TmVpZ2hib3JSZXNwb25zZT4ge1xuICAgICAgICBjb25zdCB0b1NlbmQgPSB7XG4gICAgICAgICAgICBtb2RlbDogbW9kZWwsXG4gICAgICAgICAgICBjb3JwdXM6IGNvcnB1cyxcbiAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICBsYXllcjogbGF5ZXIsXG4gICAgICAgICAgICBoZWFkczogaGVhZHMsXG4gICAgICAgICAgICBrOiBrLFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsID0gbWFrZVVybCh0aGlzLmJhc2VVUkwgKyAnL2stbmVhcmVzdC1jb250ZXh0cycsIHRvU2VuZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tIEdFVCBcIiArIHVybCk7XG5cbiAgICAgICAgaWYgKGhhc2hPYmogIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gaGFzaC5zaGExKHRvU2VuZClcbiAgICAgICAgICAgIGQzLmpzb24odXJsKS50aGVuKHIgPT4ge1xuICAgICAgICAgICAgICAgIGhhc2hPYmpba2V5XSA9IHI7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNoZWNrRGVtb0FQSSh0b1NlbmQsIHVybClcbiAgICB9XG59O1xuIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgKiBhcyB4XyBmcm9tICcuLi9ldGMvX1Rvb2xzJ1xuaW1wb3J0ICogYXMgdHAgZnJvbSAnLi4vZXRjL3R5cGVzJ1xuaW1wb3J0ICogYXMgdGYgZnJvbSAnQHRlbnNvcmZsb3cvdGZqcydcblxuLyoqXG4gKiBOb3RlczpcbiAqIFxuICogLSBBbHNvIGVuY2Fwc3VsYXRlIHRoZSBDTFMvU0VQIGluZm8gdnMuIG5vIENMUy9TRVAgaW5mb1xuICogLSBXaGVuIGxheWVyIGZvcm1hdCBjaGFuZ2VzIGZyb20gbGlzdCwgZHJvcCB0aGUgaW5kZXggaW50byBjb25mLmxheWVyXG4gKi9cblxuY29uc3QgYnBlVG9rZW5zID0gW1wiW0NMU11cIiwgXCJbU0VQXVwiLCBcIjxzPlwiLCBcIjwvcz5cIiwgXCI8fGVuZG9mdGV4dHw+XCJdXG5jb25zdCBmaW5kQmFkSW5kZXhlcyA9ICh4OiB0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW10pID0+IHhfLmZpbmRBbGxJbmRleGVzKHgubWFwKHQgPT4gdC50ZXh0KSwgKGEpID0+IF8uaW5jbHVkZXMoYnBlVG9rZW5zLCBhKSlcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VGcm9tTWV0YVJlc3BvbnNlKHI6dHAuQXR0ZW50aW9uUmVzcG9uc2UsIGlzWmVyb2VkKXtcbiAgICBjb25zdCBrZXkgPSAnYWEnIC8vIENoYW5nZSB0aGlzIGlmIGJhY2tlbmQgcmVzcG9uc2UgY2hhbmdlcyB0byBiZSBzaW1wbGVyXG4gICAgY29uc3QgY3VyclBhaXIgPSByW2tleV1cbiAgICBjb25zdCBsZWZ0ID0gPHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXT5jdXJyUGFpci5sZWZ0XG4gICAgY29uc3QgcmlnaHQgPSA8dHAuRnVsbFNpbmdsZVRva2VuSW5mb1tdPmN1cnJQYWlyLnJpZ2h0XG4gICAgY29uc3QgbGVmdFplcm8gPSB4Xy5maW5kQWxsSW5kZXhlcyhsZWZ0Lm1hcCh0ID0+IHQudGV4dCksIChhKSA9PiBfLmluY2x1ZGVzKGJwZVRva2VucywgYSkpXG4gICAgY29uc3QgcmlnaHRaZXJvID0geF8uZmluZEFsbEluZGV4ZXMocmlnaHQubWFwKHQgPT4gdC50ZXh0KSwgKGEpID0+IF8uaW5jbHVkZXMoYnBlVG9rZW5zLCBhKSlcbiAgICByZXR1cm4gbmV3IEF0dGVudGlvbldyYXBwZXIoY3VyclBhaXIuYXR0LCBbbGVmdFplcm8sIHJpZ2h0WmVyb10sIGlzWmVyb2VkKVxufVxuXG5leHBvcnQgY2xhc3MgQXR0ZW50aW9uV3JhcHBlciB7XG4gICAgcHJvdGVjdGVkIF9hdHQ6bnVtYmVyW11bXVtdXG4gICAgcHJvdGVjdGVkIF9hdHRUZW5zb3I6dGYuVGVuc29yM0RcbiAgICBwcm90ZWN0ZWQgX3plcm9lZEF0dFRlbnNvcjp0Zi5UZW5zb3IzRFxuXG4gICAgYmFkVG9rczpbbnVtYmVyW10sIG51bWJlcltdXSAvLyBJbmRleGVzIGZvciB0aGUgQ0xTIGFuZCBTRVAgdG9rZW5zXG4gICAgaXNaZXJvZWQ6IGJvb2xlYW5cbiAgICBuTGF5ZXJzID0gMTI7XG4gICAgbkhlYWRzID0gMTI7XG5cbiAgICBjb25zdHJ1Y3RvcihhdHQ6bnVtYmVyW11bXVtdLCBiYWRUb2tzOltudW1iZXJbXSwgbnVtYmVyW11dPVtbXSxbXV0sIGlzWmVyb2VkPXRydWUpe1xuICAgICAgICB0aGlzLmluaXQoYXR0LCBiYWRUb2tzLCBpc1plcm9lZClcbiAgICB9XG5cbiAgICBpbml0KGF0dDpudW1iZXJbXVtdW10sIGJhZFRva3M6W251bWJlcltdLCBudW1iZXJbXV09W1tdLFtdXSwgaXNaZXJvZWQpIHtcbiAgICAgICAgdGhpcy5pc1plcm9lZCA9IGlzWmVyb2VkXG4gICAgICAgIHRoaXMuX2F0dCA9IGF0dDtcbiAgICAgICAgdGhpcy5femVyb2VkQXR0VGVuc29yID0gemVyb1Jvd0NvbCh0Zi50ZW5zb3IzZChhdHQpLCBiYWRUb2tzWzBdLCBiYWRUb2tzWzFdKVxuICAgICAgICB0aGlzLl9hdHRUZW5zb3IgPSB0Zi50ZW5zb3IzZChhdHQpIC8vIElmIEkgcHV0IHRoaXMgZmlyc3QsIGJ1ZmZlciBtb2RpZmljYXRpb25zIGNoYW5nZSB0aGlzIHRvby5cbiAgICAgICAgdGhpcy5iYWRUb2tzID0gYmFkVG9rcztcbiAgICB9XG5cbiAgICB1cGRhdGVGcm9tTm9ybWFsKHI6dHAuQXR0ZW50aW9uUmVzcG9uc2UsIGlzWmVyb2VkKXtcbiAgICAgICAgY29uc3Qga2V5ID0gJ2FhJyAvLyBDaGFuZ2UgdGhpcyBpZiBiYWNrZW5kIHJlc3BvbnNlIGNoYW5nZXMgdG8gYmUgc2ltcGxlclxuICAgICAgICBjb25zdCBjdXJyUGFpciA9IHJba2V5XVxuICAgICAgICBjb25zdCBsZWZ0ID0gPHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXT5jdXJyUGFpci5sZWZ0XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gPHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXT5jdXJyUGFpci5yaWdodFxuXG4gICAgICAgIGNvbnN0IGxlZnRaZXJvID0gZmluZEJhZEluZGV4ZXMobGVmdClcbiAgICAgICAgY29uc3QgcmlnaHRaZXJvID0gZmluZEJhZEluZGV4ZXMocmlnaHQpXG4gICAgICAgIHRoaXMuaW5pdChjdXJyUGFpci5hdHQsIFtsZWZ0WmVybywgcmlnaHRaZXJvXSwgaXNaZXJvZWQpXG4gICAgfVxuXG4gICAgZ2V0IGF0dFRlbnNvcigpIHtcbiAgICAgICAgY29uc3QgdGVucyA9IHRoaXMuaXNaZXJvZWQgPyB0aGlzLl96ZXJvZWRBdHRUZW5zb3IgOiB0aGlzLl9hdHRUZW5zb3JcbiAgICAgICAgcmV0dXJuIHRlbnNcbiAgICB9XG5cbiAgICBnZXQgYXR0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRUZW5zb3IuYXJyYXlTeW5jKClcbiAgICB9XG5cbiAgICB6ZXJvZWQoKTogYm9vbGVhblxuICAgIHplcm9lZCh2YWw6Ym9vbGVhbik6IHRoaXNcbiAgICB6ZXJvZWQodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLmlzWmVyb2VkXG4gICAgICAgIHRoaXMuaXNaZXJvZWQgPSB2YWxcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICB0b2dnbGVaZXJvaW5nKCkge1xuICAgICAgICB0aGlzLnplcm9lZCghdGhpcy56ZXJvZWQoKSlcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2J5SGVhZHMoaGVhZHM6bnVtYmVyW10pOnRmLlRlbnNvcjJEIHtcbiAgICAgICAgaWYgKGhlYWRzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGYuemVyb3NMaWtlKHRoaXMuX2J5SGVhZCgwKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoPHRmLlRlbnNvcjJEPnRoaXMuYXR0VGVuc29yLmdhdGhlcihoZWFkcywgMCkuc3VtKDApKVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBfYnlIZWFkKGhlYWQ6bnVtYmVyKTp0Zi5UZW5zb3IyRCB7XG4gICAgICAgIHJldHVybiAoPHRmLlRlbnNvcjJEPnRoaXMuYXR0VGVuc29yLmdhdGhlcihbaGVhZF0sIDApLnNxdWVlemUoWzBdKSlcbiAgICB9XG5cbiAgICBieUhlYWRzKGhlYWRzOm51bWJlcltdKTpudW1iZXJbXVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J5SGVhZHMoaGVhZHMpLmFycmF5U3luYygpXG4gICAgfVxuXG4gICAgYnlIZWFkKGhlYWQ6bnVtYmVyKTpudW1iZXJbXVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J5SGVhZChoZWFkKS5hcnJheVN5bmMoKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gemVyb1Jvd0NvbCh0ZW5zOnRmLlRlbnNvcjNELCByb3dzOm51bWJlcltdLCBjb2xzOm51bWJlcltdKTp0Zi5UZW5zb3IzRCB7XG4gICAgbGV0IG91dFRlbnMgPSB0ZW5zLmNsb25lKClcbiAgICBsZXQgYXRiID0gb3V0VGVucy5idWZmZXJTeW5jKClcbiAgICBfLnJhbmdlKGF0Yi5zaGFwZVswXSkuZm9yRWFjaCgoaGVhZCkgPT4ge1xuICAgICAgICBfLnJhbmdlKGF0Yi5zaGFwZVsxXSkuZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgICAgICAgLy8gU2V0IHJvd3MgdG8gMFxuICAgICAgICAgICAgaWYgKF8uaW5jbHVkZXMocm93cywgaSkpIHtcbiAgICAgICAgICAgICAgICBfLnJhbmdlKGF0Yi5zaGFwZVsyXSkuZm9yRWFjaCgoaikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhdGIuc2V0KDAsIGhlYWQsIGksIGopXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2V0IGNvbHMgdG8gMFxuICAgICAgICAgICAgXy5yYW5nZShhdGIuc2hhcGVbMl0pLmZvckVhY2goKGopID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXy5pbmNsdWRlcyhjb2xzLCBqKSlcbiAgICAgICAgICAgICAgICAgICAgXy5yYW5nZShhdGIuc2hhcGVbMV0pLmZvckVhY2goKGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0Yi5zZXQoMCwgaGVhZCwgaSwgailcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIHJldHVybiBvdXRUZW5zXG59IiwiaW1wb3J0ICogYXMgdHAgZnJvbSAnLi4vZXRjL3R5cGVzJ1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgJ2QzLWFycmF5J1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7U3BhY3lJbmZvfSBmcm9tICcuLi9ldGMvU3BhY3lJbmZvJ1xuaW1wb3J0IHtpbml0WmVyb30gZnJvbSAnLi4vZXRjL3hyYW1kYSdcblxuLy8gSWYgdmFsdWUgaXMgbm90IGEgc3RyaW5nLCBkb24ndCB0cnkgdG8gbWFrZSBsb3dlcmNhc2VcbmNvbnN0IG1ha2VTdHJpbmdMb3dlciA9IFIuaWZFbHNlKFIuaXMoU3RyaW5nKSwgUi50b0xvd2VyLCBSLmlkZW50aXR5KVxuXG5mdW5jdGlvbiBhcmdNYXgoYXJyYXk6bnVtYmVyW10pIHtcbiAgcmV0dXJuIFtdLm1hcC5jYWxsKGFycmF5LCAoeCwgaSkgPT4gW3gsIGldKS5yZWR1Y2UoKHIsIGEpID0+IChhWzBdID4gclswXSA/IGEgOiByKSlbMV07XG59XG5cbmNvbnN0IGdldE1heFRva2VuID0gKGQ6IHRwLkZhaXNzU2VhcmNoUmVzdWx0cykgPT4gZC50b2tlbnNbYXJnTWF4KGQubWF0Y2hlZF9hdHQub3V0LmF0dCldXG5cblxuZXhwb3J0IGNsYXNzIEZhaXNzU2VhcmNoUmVzdWx0V3JhcHBlciB7XG4gICAgZGF0YTogdHAuRmFpc3NTZWFyY2hSZXN1bHRzW11cblxuICAgIGNvbnN0cnVjdG9yKGRhdGE6IHRwLkZhaXNzU2VhcmNoUmVzdWx0c1tdKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGFcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgcG9zaXRpb24gaW5mbyBpbnRlcnByZXRhYmxlIGJ5IHRoZSBoaXN0b2dyYW1cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gY291bnRPYmogUmVwcmVzZW50cyB0aGUgaW5mb3JybWF0aW9uIHRvIGJlIGRpc3BsYXllZCBieSB0aGUgaGlzdG9ncmFtXG4gICAgICovXG4gICAgY291bnRQb3NJbmZvKCkge1xuICAgICAgICBjb25zdCBhdHRPZmZzZXRzID0gdGhpcy5kYXRhLm1hcCgoZCxpKSA9PiArZC5tYXRjaGVkX2F0dC5vdXQub2Zmc2V0X3RvX21heClcblxuICAgICAgICBjb25zdCBjdE9iaiA9IHtcbiAgICAgICAgICAgIG9mZnNldDogaW5pdFplcm8oYXR0T2Zmc2V0cylcbiAgICAgICAgfVxuXG4gICAgICAgIGF0dE9mZnNldHMuZm9yRWFjaCh2ID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGN0T2JqKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgICAgICAgICAgY3RPYmpba11bdl0gKz0gMVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gY3RPYmpcbiAgICB9XG5cbiAgICBjb3VudE1heEF0dEtleXMoaW5kZXhPZmZzZXQ9MCkge1xuICAgICAgICAvLyBUaGUga2V5cyBpbiB0aGUgYmVsb3cgb2JqZWN0IGRpY3RhdGUgd2hhdCB3ZSBjb3VudFxuICAgICAgICBjb25zdCBjb3VudE9iaiA9IHtcbiAgICAgICAgICAgIHBvczogaW5pdFplcm8oU3BhY3lJbmZvLlRvdGFsTWV0YU9wdGlvbnMucG9zKSxcbiAgICAgICAgICAgIGRlcDogaW5pdFplcm8oU3BhY3lJbmZvLlRvdGFsTWV0YU9wdGlvbnMuZGVwKSxcbiAgICAgICAgICAgIGlzX2VudDogaW5pdFplcm8oU3BhY3lJbmZvLlRvdGFsTWV0YU9wdGlvbnMuaXNfZW50KSxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKGQgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF4TWF0Y2ggPSBnZXRNYXhUb2tlbihkKVxuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb3VudE9iaikuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBtYWtlU3RyaW5nTG93ZXIoU3RyaW5nKG1heE1hdGNoW2tdKSlcbiAgICAgICAgICAgICAgICBjb3VudE9ialtrXVt2YWxdICs9IDE7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IG5ld0NvdW50T2JqID0gT2JqZWN0LmFzc2lnbihjb3VudE9iaiwgdGhpcy5jb3VudFBvc0luZm8oKSlcbiAgICAgICAgcmV0dXJuIG5ld0NvdW50T2JqXG4gICAgfVxuXG4gICAgY291bnRNYXRjaGVkS2V5cyhpbmRleE9mZnNldD0wKSB7XG4gICAgICAgIC8vIFRoZSBrZXlzIGluIHRoZSBiZWxvdyBvYmplY3QgZGljdGF0ZSB3aGF0IHdlIGNvdW50XG4gICAgICAgIGNvbnN0IGNvdW50T2JqID0ge1xuICAgICAgICAgICAgcG9zOiBpbml0WmVybyhTcGFjeUluZm8uVG90YWxNZXRhT3B0aW9ucy5wb3MpLFxuICAgICAgICAgICAgZGVwOiBpbml0WmVybyhTcGFjeUluZm8uVG90YWxNZXRhT3B0aW9ucy5kZXApLFxuICAgICAgICAgICAgaXNfZW50OiBpbml0WmVybyhTcGFjeUluZm8uVG90YWxNZXRhT3B0aW9ucy5pc19lbnQpLFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kYXRhLmZvckVhY2goZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IGQudG9rZW5zW2QuaW5kZXggKyBpbmRleE9mZnNldF1cblxuICAgICAgICAgICAgT2JqZWN0LmtleXMoY291bnRPYmopLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gbWFrZVN0cmluZ0xvd2VyKFN0cmluZyhtYXRjaFtrXSkpXG4gICAgICAgICAgICAgICAgY291bnRPYmpba11bdmFsXSArPSAxO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gY291bnRPYmpcbiAgICB9XG5cbiAgICBnZXRNYXRjaGVkSGlzdG9ncmFtKGluZGV4T2Zmc2V0PTApIHtcbiAgICAgICAgY29uc3QgdG90YWxIaXN0ID0gdGhpcy5jb3VudE1hdGNoZWRLZXlzKGluZGV4T2Zmc2V0KVxuICAgICAgICBjb25zdCBmaWx0ZXJaZXJvcyA9ICh2YWwsIGtleSkgPT4gdmFsICE9IDA7XG4gICAgICAgIGNvbnN0IG5vblplcm8gPSBSLm1hcChSLnBpY2tCeShmaWx0ZXJaZXJvcyksIHRvdGFsSGlzdClcblxuICAgICAgICByZXR1cm4gbm9uWmVyb1xuICAgIH1cblxuICAgIGdldE1heEF0dEhpc3RvZ3JhbSgpIHtcbiAgICAgICAgLy8gY29uc3QgdG90YWxIaXN0ID0gdGhpcy5jb3VudFBvc0luZm8oKVxuICAgICAgICBjb25zdCBuZXdIaXN0ID0gdGhpcy5jb3VudE1heEF0dEtleXMoKVxuICAgICAgICBjb25zdCBmaWx0ZXJaZXJvcyA9ICh2YWwsIGtleSkgPT4gdmFsICE9IDA7XG4gICAgICAgIGNvbnN0IG5vblplcm8gPSBSLm1hcChSLnBpY2tCeShmaWx0ZXJaZXJvcyksIG5ld0hpc3QpXG5cbiAgICAgICAgcmV0dXJuIG5vblplcm9cbiAgICB9XG59IiwiaW1wb3J0ICogYXMgeF8gZnJvbSAnLi4vZXRjL19Ub29scydcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0ICogYXMgdHAgZnJvbSAnLi4vZXRjL3R5cGVzJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcblxuLyoqXG4gKiBUaGUgb3JpZ2luYWwgdG9rZW5zLCBhbmQgdGhlIGluZGV4ZXMgdGhhdCBuZWVkIHRvIGJlIG1hc2tlZFxuICovXG4gY29uc3QgZW1wdHlGdWxsUmVzcG9uc2U6IHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXSA9IFt7XG4gICAgIHRleHQ6ICdbU0VQXScsXG4gICAgIGVtYmVkZGluZ3M6IFtdLFxuICAgICBjb250ZXh0czogW10sXG4gICAgIGJwZV90b2tlbjogJycsXG4gICAgIGJwZV9wb3M6ICcnLFxuICAgICBicGVfZGVwOiAnJyxcbiAgICAgYnBlX2lzX2VudDogbnVsbCxcbiAgICAgdG9wa193b3JkczogW10sXG4gICAgIHRvcGtfcHJvYnM6IFtdXG4gfV1cblxuZXhwb3J0IGNsYXNzIFRva2VuRGlzcGxheSAge1xuICAgIHRva2VuRGF0YTp0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW11cbiAgICBtYXNrSW5kczpudW1iZXJbXVxuXG4gICAgY29uc3RydWN0b3IodG9rZW5zPWVtcHR5RnVsbFJlc3BvbnNlLCBtYXNrSW5kcz1bXSl7XG4gICAgICAgIHRoaXMudG9rZW5EYXRhID0gdG9rZW5zO1xuICAgICAgICB0aGlzLm1hc2tJbmRzID0gbWFza0luZHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHVzaCBpZHggdG8gdGhlIG1hc2sgaWR4IGxpc3QgaW4gb3JkZXIgZnJvbSBzbWFsbGVzdCB0byBsYXJnZXN0XG4gICAgICovXG4gICAgbWFzayh2YWwpIHtcbiAgICAgICAgY29uc3QgY3VyckluZCA9IF8uaW5kZXhPZih0aGlzLm1hc2tJbmRzLCB2YWwpXG4gICAgICAgIGlmIChjdXJySW5kID09IC0xKSB7XG4gICAgICAgICAgICB4Xy5vcmRlcmVkSW5zZXJ0Xyh0aGlzLm1hc2tJbmRzLCB2YWwpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt2YWx9IGFscmVhZHkgaW4gbWFza0luZHMhYCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1hc2tJbmRzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZSh2YWwpIHtcbiAgICAgICAgY29uc3QgY3VyckluZCA9IF8uaW5kZXhPZih0aGlzLm1hc2tJbmRzLCB2YWwpXG4gICAgICAgIGlmIChjdXJySW5kID09IC0xKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgTWFza2luZyAke3ZhbH1gKTtcbiAgICAgICAgICAgIHRoaXMubWFzayh2YWwpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgVW5tYXNraW5nICR7dmFsfWApO1xuICAgICAgICAgICAgdGhpcy51bm1hc2sodmFsKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5tYXNrKHZhbCkge1xuICAgICAgICBfLnB1bGwodGhpcy5tYXNrSW5kcywgdmFsKTtcbiAgICB9XG5cbiAgICByZXNldE1hc2soKSB7XG4gICAgICAgIHRoaXMubWFza0luZHMgPSBbXTtcbiAgICB9XG5cbiAgICBsZW5ndGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VuRGF0YS5sZW5ndGg7XG4gICAgfVxuXG4gICAgY29uY2F0KG90aGVyOiBUb2tlbkRpc3BsYXkpIHtcbiAgICAgICAgY29uc3QgbmV3VG9rZW5zID0gXy5jb25jYXQodGhpcy50b2tlbkRhdGEsIG90aGVyLnRva2VuRGF0YSk7XG4gICAgICAgIGNvbnN0IG5ld01hc2sgPSBfLmNvbmNhdCh0aGlzLm1hc2tJbmRzLCBvdGhlci5tYXNrSW5kcy5tYXAoeCA9PiB4ICsgdGhpcy5sZW5ndGgoKSkpO1xuICAgICAgICByZXR1cm4gbmV3IFRva2VuRGlzcGxheShuZXdUb2tlbnMsIG5ld01hc2spO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRva2VuV3JhcHBlciB7XG4gICAgYTogVG9rZW5EaXNwbGF5XG5cbiAgICBjb25zdHJ1Y3RvcihyOnRwLkF0dGVudGlvblJlc3BvbnNlKXtcbiAgICAgICAgdGhpcy51cGRhdGVGcm9tUmVzcG9uc2Uocik7XG4gICAgfVxuXG4gICAgdXBkYXRlRnJvbVJlc3BvbnNlKHI6dHAuQXR0ZW50aW9uUmVzcG9uc2UpIHtcbiAgICAgICAgY29uc3QgdG9rZW5zQSA9IHIuYWEubGVmdDtcbiAgICAgICAgdGhpcy51cGRhdGVGcm9tQ29tcG9uZW50cyh0b2tlbnNBLCBbXSlcbiAgICB9XG5cbiAgICB1cGRhdGVGcm9tQ29tcG9uZW50cyhhOnRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXSwgbWFza0E6bnVtYmVyW10pe1xuICAgICAgICB0aGlzLmEgPSBuZXcgVG9rZW5EaXNwbGF5KGEsIG1hc2tBKVxuICAgIH1cblxuICAgIHVwZGF0ZVRva2VucyhyOiB0cC5BdHRlbnRpb25SZXNwb25zZSkge1xuICAgICAgICBjb25zdCBkZXNpcmVkS2V5cyA9IFsnY29udGV4dHMnLCAnZW1iZWRkaW5ncycsICd0b3BrX3Byb2JzJywgJ3RvcGtfd29yZHMnXVxuICAgICAgICBjb25zdCBuZXdUb2tlbnMgPSByLmFhLmxlZnQubWFwKHYgPT4gUi5waWNrKGRlc2lyZWRLZXlzLCB2KSlcblxuICAgICAgICBjb25zdCBwYWlycyA9IFIuemlwKHRoaXMuYS50b2tlbkRhdGEsIG5ld1Rva2VucylcblxuICAgICAgICBwYWlycy5mb3JFYWNoKChkLCBpKSA9PiB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhkWzFdKS5tYXAoayA9PiB7XG4gICAgICAgICAgICAgICAgZFswXVtrXSA9IGRbMV1ba11cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYXNrIHRoZSBhcHByb3ByaWF0ZSBzZW50ZW5jZSBhdCB0aGUgaW5kZXggaW5kaWNhdGVkXG4gICAgICovXG4gICAgbWFzayhzSUQ6dHAuVG9rZW5PcHRpb25zLCBpZHg6bnVtYmVyKXtcbiAgICAgICAgdGhpc1tzSURdLm1hc2soaWR4KVxuICAgICAgICBjb25zdCBvcHRzID0gW1wiYVwiLCBcImJcIl1cbiAgICAgICAgY29uc3QgTmEgPSB0aGlzLmEubGVuZ3RoKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lkZVRvTGV0dGVyKHNpZGU6dHAuU2lkZU9wdGlvbnMsIGF0eXBlOnRwLlNlbnRlbmNlT3B0aW9ucyl7XG4gICAgLy8gY29uc3QgYXR5cGUgPSBjb25mLmF0dFR5cGU7XG4gICAgaWYgKGF0eXBlID09IFwiYWxsXCIpIHtcbiAgICAgICAgcmV0dXJuIFwiYWxsXCJcbiAgICB9XG4gICAgY29uc3Qgb3V0ID0gc2lkZSA9PSBcImxlZnRcIiA/IGF0eXBlWzBdIDogYXR5cGVbMV0gLy8gTm8gdHlwZSBjaGVja2luZz9cbiAgICByZXR1cm4gb3V0XG59XG4iLCJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIlxuaW1wb3J0ICdkMy1zZWxlY3Rpb24tbXVsdGknXG5pbXBvcnQgeyBEM1NlbCB9IGZyb20gJy4uL2V0Yy9VdGlsJ1xuXG4vKipcbiAqIENyZWF0ZWQgYnkgaGVuIG9uIDUvMTUvMTcuXG4gKiBNb2RpZmllZCBieSBob28gb24gNC8xNi8xOS5cbiAqL1xuZXhwb3J0IGNsYXNzIFNWRyB7XG4gICAgc3RhdGljIHRyYW5zbGF0ZSh7eCwgeX0pOnN0cmluZyB7XG4gICAgICAgIHJldHVybiBcInRyYW5zbGF0ZShcIiArIHggKyBcIixcIiArIHkgKyBcIilcIlxuICAgIH1cblxuICAgIHN0YXRpYyByb3RhdGUoZGVnKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gYHJvdGF0ZSgke2RlZ30pYFxuICAgIH1cblxuICAgIHN0YXRpYyBncm91cChwYXJlbnQsIGNsYXNzZXMsIHBvcyA9IHt4OiAwLCB5OiAwfSkge1xuICAgICAgICByZXR1cm4gcGFyZW50LmFwcGVuZCgnZycpLmF0dHJzKHtcbiAgICAgICAgICAgIGNsYXNzOiBjbGFzc2VzLFxuICAgICAgICAgICAgXCJ0cmFuc2Zvcm1cIjogU1ZHLnRyYW5zbGF0ZShwb3MpXG4gICAgICAgIH0pXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBTVkdNZWFzdXJlbWVudHMge1xuXG4gICAgcHJpdmF0ZSBtZWFzdXJlRWxlbWVudDogZDMuU2VsZWN0aW9uPGFueSwgYW55LCBhbnksIGFueT47XG5cbiAgICBjb25zdHJ1Y3RvcihiYXNlRWxlbWVudCwgY2xhc3NlcyA9ICcnKSB7XG4gICAgICAgIHRoaXMubWVhc3VyZUVsZW1lbnQgPSBiYXNlRWxlbWVudC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLmF0dHJzKHt4OiAwLCB5OiAtMjAsIGNsYXNzOiBjbGFzc2VzfSlcblxuICAgIH1cblxuICAgIHRleHRMZW5ndGgodGV4dCwgc3R5bGUgPSBudWxsKSB7XG4gICAgICAgIHRoaXMubWVhc3VyZUVsZW1lbnQuYXR0cignc3R5bGUnLCBzdHlsZSk7XG4gICAgICAgIHRoaXMubWVhc3VyZUVsZW1lbnQudGV4dCh0ZXh0KTtcbiAgICAgICAgY29uc3QgdGwgPSAoPFNWR1RleHRFbGVtZW50PiB0aGlzLm1lYXN1cmVFbGVtZW50Lm5vZGUoKSkuZ2V0Q29tcHV0ZWRUZXh0TGVuZ3RoKCk7XG4gICAgICAgIHRoaXMubWVhc3VyZUVsZW1lbnQudGV4dCgnJyk7XG5cbiAgICAgICAgcmV0dXJuIHRsO1xuICAgIH1cbn0iLCIvKipcbiAqIENyZWF0ZWQgYnkgaGVuIG9uIDUvMTUvMTcuXG4gKiBNb2RpZmllZCBieSBob28gb24gNC8xNi8xOS5cbiAqL1xuZXhwb3J0IGNsYXNzIFNpbXBsZUV2ZW50SGFuZGxlciB7XG5cbiAgICBlbGVtZW50OiBFbGVtZW50O1xuICAgIGV2ZW50TGlzdGVuZXJzOiBvYmplY3RbXTtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycyA9IFtdXG4gICAgfVxuXG4gICAgYmluZChldmVudE5hbWVzOiBzdHJpbmcsIGV2ZW50RnVuY3Rpb246IEZ1bmN0aW9uKSB7XG4gICAgICAgIGZvciAoY29uc3QgZXZlbnROYW1lIG9mIGV2ZW50TmFtZXMuc3BsaXQoJyAnKSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycy5wdXNoKHtldmVudE5hbWUsIGV2ZW50RnVuY3Rpb259KTtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50RnVuY3Rpb25XcmFwID0gZSA9PiBldmVudEZ1bmN0aW9uKGUuZGV0YWlsLCBlKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRGdW5jdGlvbldyYXAsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldExpc3RlbmVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRMaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgdHJpZ2dlcihldmVudE5hbWU6IHN0cmluZywgZGV0YWlsOiBvYmplY3QpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwge2RldGFpbH0pKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdHAgZnJvbSAnLi90eXBlcydcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7Q09MT1JTMjAwfSBmcm9tICcuLi9ldGMvY29sb3JzJyBcblxuZXhwb3J0IGNsYXNzIFNwYWN5SW5mbyB7XG4gICAgY29sb3JTY2FsZTp0cC5Db2xvck1ldGFTY2FsZVxuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5jb2xvclNjYWxlID0gdGhpcy5jcmVhdGVDb2xvclNjYWxlcygpO1xuICAgIH1cblxuICAgIHN0YXRpYyBFbmdsaXNoTWV0YU9wdGlvbnM6IHRwLk1ldGFPcHRpb25zID0ge1xuICAgICAgICBwb3M6IFsncHVuY3QnLCAnc3ltJywgJ3gnLCAnYWRqJywgJ3ZlcmInLCAnY29uaicsICdudW0nLCAnZXQnLCAnYWR2JywgJ3gnLCAnYWRwJywgJ25vdW4nLCAncHJvcG4nLCAncGFydCcsICdwcm9uJywgJ3NwYWNlJywgJ2ludGonXSxcbiAgICAgICAgZGVwOiBbJ3Jvb3QnLCAnUk9PVCcsICdhY2wnLCAnYWNvbXAnLCAnYWR2Y2wnLCAnYWR2bW9kJywgJ2FnZW50JywgJ2Ftb2QnLCAnYXBwb3MnLCAnYXR0cicsICdhdXgnLCAnYXV4cGFzcycsICdjYXNlJywgJ2NjJywgJ2Njb21wJywgJ2NvbXBvdW5kJywgJ2NvbmonLCAnY29wJywgJ2NzdWJqJywgXG4gICAgICAgICdjc3VianBhc3MnLCAnZGF0aXZlJywgJ2RlcCcsICdkZXQnLCAnZG9iaicsICdleHBsJywgJ2ludGonLCAnbWFyaycsICdtZXRhJywgJ25lZycsICdubicsICdub3VubW9kJywgJ25wbW9kJywgJ25zdWJqJywgJ25zdWJqcGFzcycsICdudW1tb2QnLCAnb3ByZCcsIFxuICAgICAgICAnb2JqJywgJ29ibCcsICdwYXJhdGF4aXMnLCAncGNvbXAnLCAncG9iaicsICdwb3NzJywgJ3ByZWNvbmonLCAncHJlZGV0JywgJ3ByZXAnLCAncHJ0JywgJ3B1bmN0JywgJ3F1YW50bW9kJywgJ3JlbGNsJywgJ3Jvb3QnLCAneGNvbXAnLCAnbnBhZHZtb2QnXSxcbiAgICAgICAgaXNfZW50OiBbdHJ1ZSwgZmFsc2VdLFxuICAgICAgICBlbnRzOiBbJ3BlcnNvbicsICdub3JwJywgJ2ZhYycsICdvcmcnLCAnZ3BlJywgJ2xvYycsICdwcm9kdWN0JywgJ2V2ZW50JywgJ3dvcmtfb2ZfYXJ0JywgJ2xhdycsICdsYW5ndWFnZScsICdkYXRlJywgJ3RpbWUnLCAncGVyY2VudCcsICdtb25leScsICdxdWFudGl0eScsICdvcmRpbmFsJywgXG4gICAgICAgICAgICAgICAgJ2NhcmRpbmFsJ10sXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT2Jzb2xldGUuIFJlcHJlc2VudHMgdGhlIGluZm9ybWF0aW9uIHRoYXQgaXMgaW5jbHVkZWQgd2hlbiB0cmFpbmVkIG9uIHRoZSB1bml2ZXJzYWwgY29ycHVzXG4gICAgICovXG4gICAgc3RhdGljIFVuaXZlcnNhbE1ldGFPcHRpb25zOiB0cC5NZXRhT3B0aW9ucyA9IHtcbiAgICAgICAgcG9zOiBbJ2FkaicsICdhZHAnLCAnYWR2JywgJ2F1eCcsICdjb25qJywgJ2Njb25qJywgJ2RldCcsICdpbnRqJywgJ25vdW4nLCAnbnVtJywgJ3BhcnQnLCAncHJvbicsICdwcm9wbicsICdwdW5jdCcsICdzY29uaicsICdzeW0nLCAndmVyYicsICd4JywgJ3NwYWNlJ10sXG4gICAgICAgIGRlcDogWydhY2wnLCAnYWR2Y2wnLCAnYWR2bW9kJywgJ2Ftb2QnLCAnYXBwb3MnLCAnYXV4JywgJ2Nhc2UnLCAnY2MnLCAnY2NvbXAnLCAnY2xmJywgJ2NvbXBvdW5kJywgJ2NvbmonLCAnY29wJywgJ2NzdWJqJywgJ2RlcCcsICdkZXQnLCAnZGlzY291cnNlJywgXG4gICAgICAgICAgICAgICAgJ2Rpc2xvY2F0ZWQnLCAnZXhwbCcsICdmaXhlZCcsICdmbGF0JywgJ2dvZXN3aXRoJywgJ2lvYmonLCAnbGlzdCcsICdtYXJrJywgJ25tb2QnLCAnbnN1YmonLCAnbnVtbW9kJywgJ29iaicsICdvYmwnLCAnb3JwaGFuJywgJ3BhcmF0YXhpcycsICdwdW5jdCcsICdyZXBhcmFuZHVtJywgXG4gICAgICAgICAgICAgICAgJ3Jvb3QnLCAndm9jYXRpdmUnLCAneGNvbXAnXSxcbiAgICAgICAgaXNfZW50OiBbdHJ1ZSwgZmFsc2VdLFxuICAgICAgICBlbnRzOiBbJ3BlcnNvbicsICdub3JwJywgJ2ZhYycsICdvcmcnLCAnZ3BlJywgJ2xvYycsICdwcm9kdWN0JywgJ2V2ZW50JywgJ3dvcmtfb2ZfYXJ0JywgJ2xhdycsICdsYW5ndWFnZScsICdkYXRlJywgJ3RpbWUnLCAncGVyY2VudCcsICdtb25leScsICdxdWFudGl0eScsICdvcmRpbmFsJywgXG4gICAgICAgICAgICAgICAgJ2NhcmRpbmFsJ10sXG4gICAgfVxuXG4gICAgc3RhdGljIFRvdGFsTWV0YU9wdGlvbnM6IHRwLk1ldGFPcHRpb25zID0ge1xuICAgICAgICBwb3M6IFIudW5pb24oU3BhY3lJbmZvLkVuZ2xpc2hNZXRhT3B0aW9ucy5wb3MsIFNwYWN5SW5mby5Vbml2ZXJzYWxNZXRhT3B0aW9ucy5wb3MpLFxuICAgICAgICBkZXA6IFNwYWN5SW5mby5FbmdsaXNoTWV0YU9wdGlvbnMuZGVwLFxuICAgICAgICBpc19lbnQ6IFNwYWN5SW5mby5FbmdsaXNoTWV0YU9wdGlvbnMuaXNfZW50LFxuICAgICAgICBlbnRzOiBTcGFjeUluZm8uRW5nbGlzaE1ldGFPcHRpb25zLmVudHMsXG4gICAgfVxuXG4gICAgY3JlYXRlQ29sb3JTY2FsZXMoKTogdHAuQ29sb3JNZXRhU2NhbGV7XG4gICAgICAgIGNvbnN0IHRvU2NhbGUgPSAoa2V5czogQXJyYXk8bnVtYmVyfHN0cmluZ3xib29sZWFuPikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb2JqID0gUi56aXBPYmooUi5tYXAoU3RyaW5nLCBrZXlzKSwgQ09MT1JTMjAwLnNsaWNlKDAsIGtleXMubGVuZ3RoKSlcbiAgICAgICAgICAgIHJldHVybiBrID0+IFIucHJvcE9yKFwiYmxhY2tcIiwgaywgb2JqKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbXlDb2xvcnMgPSB7XG4gICAgICAgICAgICBwb3M6IHRvU2NhbGUoU3BhY3lJbmZvLlRvdGFsTWV0YU9wdGlvbnMucG9zKSxcbiAgICAgICAgICAgIGRlcDogdG9TY2FsZShTcGFjeUluZm8uVG90YWxNZXRhT3B0aW9ucy5kZXApLFxuICAgICAgICAgICAgaXNfZW50OiB0b1NjYWxlKFNwYWN5SW5mby5Ub3RhbE1ldGFPcHRpb25zLmlzX2VudCksXG4gICAgICAgICAgICBlbnRzOiB0b1NjYWxlKFNwYWN5SW5mby5Ub3RhbE1ldGFPcHRpb25zLmVudHMpLFxuICAgICAgICAgICAgb2Zmc2V0OiBkMy5zY2FsZU9yZGluYWwoKS5yYW5nZShbJ2JsYWNrJ10pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gPHRwLkNvbG9yTWV0YVNjYWxlPjx1bmtub3duPm15Q29sb3JzXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3Qgc3BhY3lDb2xvcnMgPSBuZXcgU3BhY3lJbmZvKCk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGhlbiBvbiA1LzE1LzE3LlxuICovXG5cbmV4cG9ydCBjbGFzcyBVUkxIYW5kbGVyIHtcblxuICAgIHN0YXRpYyBiYXNpY1VSTCgpIHtcbiAgICAgICAgY29uc3QgdXJsX3BhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKS5zbGljZSgwLCAtMikuam9pbignLycpO1xuXG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgKHVybF9wYXRoLmxlbmd0aCA/IHVybF9wYXRoIDogJycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlYWQgYWxsIFVSTCBwYXJhbWV0ZXJzIGludG8gYSBtYXAuXG4gICAgICogQHJldHVybnMge01hcH0gdGhlIHVybCBwYXJhbWV0ZXJzIGFzIGEga2V5LXZhbHVlIHN0b3JlIChFUzYgbWFwKVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgcGFyYW1ldGVycygpOiBvYmplY3Qge1xuICAgICAgICAvLyBBZGFwdGVkIGZyb206ICBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIwOTA1NTEvcGFyc2UtcXVlcnktc3RyaW5nLWluLWphdmFzY3JpcHRcbiAgICAgICAgY29uc3QgcXVlcnkgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKTtcbiAgICAgICAgY29uc3QgdmFycyA9IHF1ZXJ5LnNwbGl0KCcmJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHZhcnMsIFwiLS0tIHZhcnNcIik7XG5cbiAgICAgICAgY29uc3QgdXJsUGFyYW1ldGVycyA9IHt9O1xuXG4gICAgICAgIGNvbnN0IGlzSW50ID0geCA9PiAoL15bMC05XSskLykudGVzdCh4KTtcbiAgICAgICAgY29uc3QgaXNGbG9hdCA9IHggPT4gKC9eWzAtOV0rXFwuWzAtOV0qJC8pLnRlc3QoeCk7XG5cbiAgICAgICAgY29uc3QgdHlwZUNhc3QgPSB2YWwgPT4ge1xuICAgICAgICAgICAgaWYgKGlzSW50KHZhbCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyLnBhcnNlSW50KHZhbCwgMTApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0Zsb2F0KHZhbCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyLnBhcnNlRmxvYXQodmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGVsc2U6XG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9XG5cblxuICAgICAgICB2YXJzLmZvckVhY2godiA9PiB7XG4gICAgICAgICAgICBpZiAodi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRzID0gdi5zcGxpdCgnPScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGRlY29kZVVSSUNvbXBvbmVudChzcGxpdHNbMF0pO1xuICAgICAgICAgICAgICAgIGxldCByYXdfdmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQoc3BsaXRzWzFdKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGlzQXJyYXkgPSByYXdfdmFsdWUuc3RhcnRzV2l0aCgnLi4nKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICByYXdfdmFsdWUgPSByYXdfdmFsdWUuc2xpY2UoMik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJhd192YWx1ZS5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHVybFBhcmFtZXRlcnNba2V5XSA9IGlzQXJyYXkgPyBbXSA6ICcnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICB1cmxQYXJhbWV0ZXJzW2tleV0gPSByYXdfdmFsdWUuc3BsaXQoJywnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCh2YWwgPT4gdHlwZUNhc3QodmFsKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsUGFyYW1ldGVyc1trZXldID0gdHlwZUNhc3QocmF3X3ZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB1cmxQYXJhbWV0ZXJzO1xuXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYW4gVVJMIHN0cmluZyBmcm9tIGEgbWFwIG9mIHVybCBwYXJhbWV0ZXJzXG4gICAgICogQHBhcmFtIHt7fX0gdXJsUGFyYW1ldGVycyAtIHRoZSBtYXAgb2YgcGFyYW1ldGVyc1xuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IC0gYW4gVVJJIHN0cmluZ1xuICAgICAqL1xuICAgIHN0YXRpYyB1cmxTdHJpbmcodXJsUGFyYW1ldGVyczogb2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IGF0dHIgPSBbXTtcbiAgICAgICAgT2JqZWN0LmtleXModXJsUGFyYW1ldGVycykuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSB1cmxQYXJhbWV0ZXJzW2tdO1xuICAgICAgICAgICAgaWYgKHYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHY7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodikpIHZhbHVlID0gJy4uJyArIHYuam9pbignLCcpO1xuICAgICAgICAgICAgICAgIGF0dHIucHVzaChlbmNvZGVVUkkoayArICc9JyArIHZhbHVlKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgICAgIGxldCByZXMgPSB1cmwuc3Vic3RyaW5nKHVybC5sYXN0SW5kZXhPZignLycpICsgMSk7XG4gICAgICAgIGlmIChhdHRyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJlcyArPSAnPycgKyBhdHRyLmpvaW4oJyYnKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBzdGF0aWMgdXBkYXRlVVJMUGFyYW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBhbnlbXSwgYWRkVG9Ccm93c2VySGlzdG9yeSA9IHRydWUpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFBhcmFtcyA9IFVSTEhhbmRsZXIucGFyYW1ldGVycztcbiAgICAgICAgY3VycmVudFBhcmFtc1trZXldID0gdmFsdWU7XG4gICAgICAgIFVSTEhhbmRsZXIudXBkYXRlVXJsKGN1cnJlbnRQYXJhbXMsIGFkZFRvQnJvd3Nlckhpc3RvcnkpO1xuICAgIH1cblxuICAgIC8vIC8qKlxuICAgIC8vICAqIEdlbmVyYXRlcyBhIGtleS12YWx1ZSBtYXAgb2YgYWxsIFVSTCBwYXJhbXMgYW5kIHJlcGxhY2VzIHJlcGxhY2VLZXlzXG4gICAgLy8gICogQHBhcmFtIHVwZGF0ZUtleXNcbiAgICAvLyAgKi9cbiAgICAvLyBzdGF0aWMgdXBkYXRlVVJMUGFyYW1zKHVwZGF0ZUtleXMpIHtcbiAgICAvLyAgICAgY29uc3QgY3VycmVudFBhcmFtcyA9IFVSTEhhbmRsZXIucGFyYW1ldGVycztcbiAgICAvLyAgICAgT2JqZWN0LmtleXModXBkYXRlS2V5cykuZm9yRWFjaCgoaykgPT4gY3VycmVudFBhcmFtc1trXSA9IHVwZGF0ZUtleXNba10pXG4gICAgLy8gICAgIHJldHVybiBjdXJyZW50UGFyYW1zO1xuICAgIC8vIH1cblxuXG4gICAgc3RhdGljIHVwZGF0ZVVybCh1cmxQYXJhbWV0ZXJzOiBvYmplY3QsIGFkZFRvQnJvd3Nlckhpc3RvcnkgPSB0cnVlKSB7XG4gICAgICAgIGlmIChhZGRUb0Jyb3dzZXJIaXN0b3J5KSB7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUodXJsUGFyYW1ldGVycywgJycsXG4gICAgICAgICAgICAgICAgVVJMSGFuZGxlci51cmxTdHJpbmcodXJsUGFyYW1ldGVycykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUodXJsUGFyYW1ldGVycywgJycsXG4gICAgICAgICAgICAgICAgVVJMSGFuZGxlci51cmxTdHJpbmcodXJsUGFyYW1ldGVycykpXG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCB7IEJhc2VUeXBlIH0gZnJvbSBcImQzXCI7XG5cbi8qKlxuICogQ3JlYXRlZCBieSBoZW4gb24gNS8xNS8xNy5cbiAqIE1vZGlmeWVkIGJ5IGhvbyBvbiA0LzE2LzE5LlxuICovXG5sZXQgdGhlX3VuaXF1ZV9pZF9jb3VudGVyID0gMDtcblxuZXhwb3J0IGNsYXNzIFV0aWwge1xuICAgIHN0YXRpYyBzaW1wbGVVSWQoeyBwcmVmaXggPSAnJyB9KTogc3RyaW5nIHtcbiAgICAgICAgdGhlX3VuaXF1ZV9pZF9jb3VudGVyICs9IDE7XG5cbiAgICAgICAgcmV0dXJuIHByZWZpeCArIHRoZV91bmlxdWVfaWRfY291bnRlcjtcbiAgICB9XG59XG5cbmV4cG9ydCB0eXBlIEQzU2VsID0gZDMuU2VsZWN0aW9uPGFueSwgYW55LCBhbnksIGFueT5cblxuLyoqXG4gKiBTZWxlY3Rpb24gdXRpbGl0eSBmdW5jdGlvbnMgc2hvdWxkIGJlIHN0YXRpYyBtZXRob2RzIGluIHRoZSBiZWxvdyBjbGFzc1xuICovXG5leHBvcnQgY2xhc3MgU2VsIHtcbiAgICBzdGF0aWMgc2V0U2VsVmlzaWJsZSA9ICh4OiBEM1NlbCkgPT4geC5hdHRyKFwidmlzaWJpbGl0eVwiLCBcInZpc2libGVcIilcbiAgICBzdGF0aWMgc2V0U2VsSGlkZGVuID0gKHg6IEQzU2VsKSA9PiB4LmF0dHIoXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCIpXG4gICAgc3RhdGljIHNldFZpc2libGUgPSAoeDogc3RyaW5nKSA9PiBTZWwuc2V0U2VsVmlzaWJsZShkMy5zZWxlY3RBbGwoeCkpXG4gICAgc3RhdGljIHNldEhpZGRlbiA9ICh4OiBzdHJpbmcpID0+IFNlbC5zZXRTZWxIaWRkZW4oZDMuc2VsZWN0QWxsKHgpKVxuICAgIHN0YXRpYyBoaWRlRWxlbWVudCA9IChoRTogRDNTZWwpID0+IGhFLnRyYW5zaXRpb24oKS5zdHlsZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwb2ludGVyLWV2ZW50cyc6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXknOiAnbm9uZSd9KVxuICAgIHN0YXRpYyB1bmhpZGVFbGVtZW50ID0gKGhFOiBEM1NlbCkgPT4gaEUudHJhbnNpdGlvbigpLnN0eWxlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogMSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwb2ludGVyLWV2ZW50cyc6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaXNwbGF5JzogbnVsbH0pXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9vc2VPYmplY3Qge1xuICAgIFtrZXk6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBkM1M8VCBleHRlbmRzIEJhc2VUeXBlLCBVID0gYW55PiA9IGQzLlNlbGVjdGlvbjxULCBVLCBhbnksIGFueT4iLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuZnVuY3Rpb24gYXNjT3JkZXIobjEsIG4yKSB7XG4gICAgaWYgKG4xIDwgbjIpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBlbHNlIGlmIChuMSA+IG4yKSB7IFxuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG59XG5cbmV4cG9ydCB7ZmluZEFsbEluZGV4ZXMsIGluc2VydEF0Xywgb3JkZXJlZEluc2VydF8sIHNldDJTb3J0ZWRBcnJheX1cblxuLyoqXG4gKiBGaW5kIGFsbCBpbmRleGVzIHRoYXQgbWF0Y2ggYSBwYXJ0aWN1bGFyIHByZWRpY2F0ZVxuICovXG5mdW5jdGlvbiBmaW5kQWxsSW5kZXhlczxUPihhcnJheTpBcnJheTxUPiwgcHJlZGljYXRlOihhOlQpID0+IGJvb2xlYW4pOiBudW1iZXJbXSB7XG4gICAgbGV0IGZyb21JbmRleD0wO1xuICAgIGxldCByZXN1bHRzID0gW107XG5cbiAgICBsZXQgaSA9IF8uZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUsIGZyb21JbmRleCk7XG4gICAgd2hpbGUgKGkgIT0gLTEpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKGkpO1xuICAgICAgICBpID0gXy5maW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSwgaSsxKVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xufTtcblxuZnVuY3Rpb24gaW5zZXJ0QXRfPFQ+KGFycmF5OkFycmF5PFQ+LCB2YWw6VCwgaW5kOm51bWJlcik6QXJyYXk8VD4ge1xuICAgIGFycmF5LnNwbGljZShpbmQsIDAsIHZhbCk7XG4gICAgcmV0dXJuIGFycmF5XG59XG5cbi8qKlxuICogQ29udmVydCBhIHNldCB0byBhbiBvcmRlcmVkIGFycmF5XG4gKi9cbmZ1bmN0aW9uIHNldDJTb3J0ZWRBcnJheTxUPihpbnB1dDpTZXQ8VD4pOkFycmF5PFQ+IHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShpbnB1dCkuc29ydChhc2NPcmRlcilcbn1cblxuLyoqXG4gKiBJbnNlcnQgYSB2YWx1ZSBpbnRvIGFycmF5IGluIHNvcnRlZCBvcmRlciBJTiBQTEFDRVxuICogXG4gKiBXQVJOSU5HOiBPbmx5IGhhbmRsZXMgbnVtYmVycywgc29ydGVkIGZyb20gbGVhc3QgdG8gZ3JlYXRlc3RcbiAqIC0gQXNzdW1lcyBhbHJlYWR5IHNvcnRlZCBhcnJheVxuICovXG5mdW5jdGlvbiBvcmRlcmVkSW5zZXJ0XzxUPihhcnJheTpBcnJheTxUPiwgdmFsOlQsIGNvbGRzdGFydD1mYWxzZSk6QXJyYXk8VD4ge1xuICAgIC8vIFJlc29ydCBhcnJheSBpZiBkZXNpcmVkXG4gICAgaWYgKGNvbGRzdGFydCkge1xuICAgICAgICBhcnJheS5zb3J0KGFzY09yZGVyKVxuICAgIH1cblxuICAgIGNvbnN0IGluZCA9IF8uc29ydGVkSW5kZXgoYXJyYXksIHZhbCk7XG4gICAgcmV0dXJuIGluc2VydEF0XyhhcnJheSwgdmFsLCBpbmQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlUmFuZG9tKGxlbjpudW1iZXIpe1xuICBjb25zdCBhOm51bWJlcltdID0gbmV3IEFycmF5KGxlbikuZmlsbCgwKVxuXG4gIHJldHVybiBhLm1hcCgoeCkgPT4ge3JldHVybiBfLnJhbmRvbSgtNSwgNSwgdHJ1ZSl9KVxufSIsIi8qKlxuICogQ29udmVydCBhIEpTIG9iamVjdCBpbnRvIEdFVCBVUkwgcGFyYW1ldGVyc1xuICogXG4gKiBAcGFyYW0gYmFzZSBCYXNlIFVSTCBhdG9wIHdoaWNoIHRvIGFkZCBHRVQgcGFyYW1ldGVyc1xuICogQHBhcmFtIHBhcmFtcyBPYmplY3QgdG8gaW5zZXJ0IGludG8gYSBVUkwgc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlVXJsKGJhc2U6IHN0cmluZywgcGFyYW1zPzogb2JqZWN0KTpzdHJpbmcge1xuICAgIGlmIChwYXJhbXMpe1xuICAgICAgICBsZXQgb3V0OiBzdHJpbmcgPSBiYXNlICsgXCI/XCI7XG5cbiAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKCBrID0+IHtcbiAgICAgICAgICAgIG91dCArPSBrO1xuICAgICAgICAgICAgb3V0ICs9ICc9JztcbiAgICAgICAgICAgIG91dCArPSBwYXJhbXNba107XG4gICAgICAgICAgICBvdXQgKz0gXCImXCI7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBvdXQucmVwbGFjZSgvJiQvZywgXCJcIik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gYmFzZTtcbiAgICB9XG59O1xuXG4vKipcbiAqIENvbnZlcnQgaW5mb3JtYXRpb24gaW4gR0VUIHJlcXVlc3QgaW50byB0aGUgbWVzc2FnZSBmb3IgYSBQT1NUIHJlcXVlc3QgICAgXG4gKi9cbmV4cG9ydCBjb25zdCB0b1BheWxvYWQgPSAodG9TZW5kKSA9PiB7cmV0dXJuIHtcbiAgICBtZXRob2Q6XCJQT1NUXCIsXG4gICAgYm9keTpKU09OLnN0cmluZ2lmeSh0b1NlbmQpLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiXG4gICAgICAgIH1cbn19IiwiLy8gW1t2YWwsIGluZF0sIFt2YWwsIGluZF0uLi5dXG50eXBlIENvbXBGbkluZCA9IChhOm51bWJlcltdLCBiOm51bWJlcltdKSA9PiBudW1iZXI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU29ydEFycmF5IHtcbiAgICBhcnI6IG51bWJlcltdLFxuICAgIHNvcnRJbmRpY2VzOiBudW1iZXJbXSxcbn1cblxuLyoqXG4gKiBDb3BpZXMgYW5kIHNvcnRzIGFuIGFycmF5IHdoaWxlIGtlZXBpbmcgdHJhY2sgb2YgdGhlIGluZGljZXMuIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIHNvcnRpbmcgbWF4IC0+IG1pbi5cbiAqIFxuICogQHBhcmFtIGFyciAtIEFycmF5IHRvIGJlIGNvcGllZCBhbmQgc29ydGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzb3J0V2l0aEluZGljZXMoYXJyOm51bWJlcltdLCBmbj86Q29tcEZuSW5kKTogU29ydEFycmF5IHtcbiAgICAvLyBJZiBmbiBpcyBub3QgcHJvdmlkZWQsIGRlZmF1bHQgdG8gc29ydGluZyBieSBtYXggdmFsdWVcbiAgICBpZiAoIWZuKSB7XG4gICAgICAgIGZuID0gZnVuY3Rpb24obGVmdCwgcmlnaHQpIHtcbiAgICAgICAgcmV0dXJuIGxlZnRbMF0gPiByaWdodFswXSA/IC0xIDogMTtcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBsZXQgb3V0OlNvcnRBcnJheSA9IHtcbiAgICAgICAgYXJyOiBbXSxcbiAgICAgICAgc29ydEluZGljZXM6IFtdXG4gICAgfTtcblxuICAgIGxldCBpZHhUcmFja2VyOiBudW1iZXJbXVtdID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgaWR4VHJhY2tlcltpXSA9IFthcnJbaV0sIGldO1xuICAgIH1cblxuICAgIGlkeFRyYWNrZXIuc29ydChmdW5jdGlvbihsZWZ0LCByaWdodCkge1xuICAgICAgcmV0dXJuIGxlZnRbMF0gPiByaWdodFswXSA/IC0xIDogMTtcbiAgICB9KTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgYXJyLmxlbmd0aDsgaisrKSB7XG4gICAgICBvdXQuc29ydEluZGljZXMucHVzaChpZHhUcmFja2VyW2pdWzFdKTtcbiAgICAgIG91dC5hcnJbal0gPSBpZHhUcmFja2VyW2pdWzBdO1xuICAgIH1cblxuICAgIHJldHVybiBvdXQ7XG4gIH0iLCIvLyBDb2xvcnMgd2VyZSBnZW5lcmF0ZWQgdG8gYmUgYXMgdmlzdWFsbHkgZGlzdGluY3QgYXMgcG9zc2libGUgYnk6IGh0dHA6Ly9qbm5ubm4uZ2l0aHViLmlvL2NhdGVnb3J5LWNvbG9ycy1jb25zdHJhaW5lZC5odG1sXG5leHBvcnQgY29uc3QgQ09MT1JTMjAwID0gW1xuICAgIFwiIzM5NTdmZlwiLCBcIiNkM2ZlMTRcIiwgXCIjYzkwODBhXCIsIFwiI2ZlYzdmOFwiLCBcIiMwYjdiM2VcIiwgXCIjMGJmMGU5XCIsIFwiI2MyMDNjOFwiLCBcIiNmZDliMzlcIiwgXG4gICAgXCIjODg4NTkzXCIsIFwiIzkwNjQwN1wiLCBcIiM5OGJhN2ZcIiwgXCIjZmU2Nzk0XCIsIFwiIzEwYjBmZlwiLCBcIiNhYzdiZmZcIiwgXCIjZmVlN2MwXCIsIFwiIzk2NGM2M1wiLFxuICAgIFwiIzFkYTQ5Y1wiLCBcIiMwYWQ4MTFcIiwgXCIjYmJkOWZkXCIsIFwiI2ZlNmNmZVwiLCBcIiMyOTcxOTJcIiwgXCIjZDFhMDljXCIsIFwiIzc4NTc5ZVwiLCBcIiM4MWZmYWRcIixcbiAgICBcIiM3Mzk0MDBcIiwgXCIjY2E2OTQ5XCIsIFwiI2Q5YmYwMVwiLCBcIiM2NDZhNThcIiwgXCIjZDUwOTdlXCIsIFwiI2JiNzNhOVwiLCBcIiNjY2Y2ZTlcIiwgXCIjOWNiNGI2XCIsXG4gICAgXCIjYjZhN2Q0XCIsIFwiIzllOGM2MlwiLCBcIiM2ZTgzYzhcIiwgXCIjMDFhZjY0XCIsIFwiI2E3MWFmZFwiLCBcIiNjZmU1ODlcIiwgXCIjZDRjY2QxXCIsIFwiI2ZkNDEwOVwiLFxuICAgIFwiI2JmOGYwZVwiLCBcIiMyZjc4NmVcIiwgXCIjNGVkMWE1XCIsIFwiI2Q4YmI3ZFwiLCBcIiNhNTQ1MDlcIiwgXCIjNmE5Mjc2XCIsIFwiI2E0Nzc3YVwiLCBcIiNmYzEyYzlcIixcbiAgICBcIiM2MDZmMTVcIiwgXCIjM2NjNGQ5XCIsIFwiI2YzMWM0ZVwiLCBcIiM3MzYxNmZcIiwgXCIjZjA5N2M2XCIsIFwiI2ZjODc3MlwiLCBcIiM5MmE2ZmVcIiwgXCIjODc1YjQ0XCIsXG4gICAgXCIjNjk5YWIzXCIsIFwiIzk0YmMxOVwiLCBcIiM3ZDViZjBcIiwgXCIjZDI0ZGZlXCIsIFwiI2M4NWI3NFwiLCBcIiM2OGZmNTdcIiwgXCIjYjYyMzQ3XCIsIFwiIzk5NGI5MVwiLFxuICAgIFwiIzY0NmI4Y1wiLCBcIiM5NzdhYjRcIiwgXCIjZDY5NGZkXCIsIFwiI2M0ZDViNVwiLCBcIiNmZGM0YmRcIiwgXCIjMWNhZTA1XCIsIFwiIzdiZDk3MlwiLCBcIiNlOTcwMGFcIixcbiAgICBcIiNkMDhmNWRcIiwgXCIjOGJiOWUxXCIsIFwiI2ZkZTk0NVwiLCBcIiNhMjlkOThcIiwgXCIjMTY4MmZiXCIsIFwiIzlhZDllMFwiLCBcIiNkNmNhZmVcIiwgXCIjOGQ4MzI4XCIsXG4gICAgXCIjYjA5MWE3XCIsIFwiIzY0NzU3OVwiLCBcIiMxZjhkMTFcIiwgXCIjZTdlYWZkXCIsIFwiI2I5NjYwYlwiLCBcIiNhNGE2NDRcIiwgXCIjZmVjMjRjXCIsIFwiI2IxMTY4Y1wiLFxuICAgIFwiIzE4OGNjMVwiLCBcIiM3YWIyOTdcIiwgXCIjNDQ2OGFlXCIsIFwiI2M5NDlhNlwiLCBcIiNkNDgyOTVcIiwgXCIjZWI2ZGMyXCIsIFwiI2Q1YjBjYlwiLCBcIiNmZjlmZmJcIixcbiAgICBcIiNmZGIwODJcIiwgXCIjYWY0ZDQ0XCIsIFwiI2E3NTljNFwiLCBcIiNhOWUwM2FcIiwgXCIjMGQ5MDZiXCIsIFwiIzllZTNiZFwiLCBcIiM1Yjg4NDZcIiwgXCIjMGQ4OTk1XCIsXG4gICAgXCIjZjI1YzU4XCIsIFwiIzcwYWU0ZlwiLCBcIiM4NDdmNzRcIiwgXCIjOTA5NGJiXCIsIFwiI2ZmZTJmMVwiLCBcIiNhNjcxNDlcIiwgXCIjOTM2YzhlXCIsIFwiI2QwNDkwN1wiLFxuICAgIFwiI2MzYjhhNlwiLCBcIiNjZWY4YzRcIiwgXCIjN2E5MjkzXCIsIFwiI2ZkYTJhYlwiLCBcIiMyZWY2YzVcIiwgXCIjODA3MjQyXCIsIFwiI2NiOTRjY1wiLCBcIiNiNmJkZDBcIixcbiAgICBcIiNiNWM3NWRcIiwgXCIjZmRlMTg5XCIsIFwiI2I3ZmY4MFwiLCBcIiNmYTJkOGVcIiwgXCIjODM5YTVmXCIsIFwiIzI4YzJiNVwiLCBcIiNlNWU5ZTFcIiwgXCIjYmM3OWQ4XCIsXG4gICAgXCIjN2VkOGZlXCIsIFwiIzlmMjBjM1wiLCBcIiM0ZjdhNWJcIiwgXCIjZjUxMWZkXCIsIFwiIzA5Yzk1OVwiLCBcIiNiY2QwY2VcIiwgXCIjODY4NWZkXCIsIFwiIzk4ZmNmZlwiLFxuICAgIFwiI2FmYmZmOVwiLCBcIiM2ZDY5YjRcIiwgXCIjNWY5OWZkXCIsIFwiI2FhYTg3ZVwiLCBcIiNiNTlkZmJcIiwgXCIjNWQ4MDlkXCIsIFwiI2Q5YTc0MlwiLCBcIiNhYzVjODZcIixcbiAgICBcIiM5NDY4ZDVcIiwgXCIjYTRhMmIyXCIsIFwiI2IxMzc2ZVwiLCBcIiNkNDNmM2RcIiwgXCIjMDVhOWQxXCIsIFwiI2MzODM3NVwiLCBcIiMyNGI1OGVcIiwgXCIjNmVhYmFmXCIsXG4gICAgXCIjNjZiZjdmXCIsIFwiIzkyY2JiYlwiLCBcIiNkZGIxZWVcIiwgXCIjMWJlODk1XCIsIFwiI2M3ZWNmOVwiLCBcIiNhNmJhYTZcIiwgXCIjODA0NWNkXCIsIFwiIzVmNzBmMVwiLFxuICAgIFwiI2E5ZDc5NlwiLCBcIiNjZTYyY2JcIiwgXCIjMGU5NTRkXCIsIFwiI2E5N2QyZlwiLCBcIiNmY2I4ZDNcIiwgXCIjOWJmZWUzXCIsIFwiIzRlOGQ4NFwiLCBcIiNmYzZkM2ZcIixcbiAgICBcIiM3YjlmZDRcIiwgXCIjOGM2MTY1XCIsIFwiIzcyODA1ZVwiLCBcIiNkNTM3NjJcIiwgXCIjZjAwYTFiXCIsIFwiI2RlNWM5N1wiLCBcIiM4ZWEyOGJcIiwgXCIjZmNjZDk1XCIsXG4gICAgXCIjYmE5YzU3XCIsIFwiI2I3OWE4MlwiLCBcIiM3YzVhODJcIiwgXCIjN2Q3Y2E0XCIsIFwiIzk1OGFkNlwiLCBcIiNjZDgxMjZcIiwgXCIjYmRiMGI3XCIsIFwiIzEwZTBmOFwiLFxuICAgIFwiI2RjY2M2OVwiLCBcIiNkNmRlMGZcIiwgXCIjNjE2ZDNkXCIsIFwiIzk4NWEyNVwiLCBcIiMzMGM3ZmRcIiwgXCIjMGFlYjY1XCIsIFwiI2UzY2RiNFwiLCBcIiNiZDFiZWVcIixcbiAgICBcIiNhZDY2NWRcIiwgXCIjZDc3MDcwXCIsIFwiIzhlYTViOFwiLCBcIiM1YjVhZDBcIiwgXCIjNzY2NTVlXCIsIFwiIzU5ODEwMFwiLCBcIiM4Njc1N2VcIiwgXCIjNWVhMDY4XCIsXG5dIiwiaW1wb3J0IHsgRDNTZWwgfSBmcm9tIFwiLi9VdGlsXCJcblxuLyoqXG4gKiBBVFRFTlRJT04gUkVTUE9OU0VTIEZST00gQkFDS0VORFxuICpcbiAqIENvbnRhaW4gdGhlIGF0dGVudGlvbnMgYW5kIGVtYmVkZGluZ3MgZm9yIGFsbCBjb21iaW5hdGlvbnMgb2YgcmV0dXJucyBmcm9tIHRoZSBiYWNrZW5kXG4gKi9cblxuZXhwb3J0IHR5cGUgTW9kZWxJbmZvID0ge1xuICAgIG5sYXllcnM6IG51bWJlclxuICAgIG5oZWFkczogbnVtYmVyXG59XG5cbnR5cGUgQWJzdHJhY3RBdHRlbnRpb25SZXNwb25zZTxUPiA9IHtcbiAgICBhYTogVFxufVxuXG4vKipcbiAqIEFUVEVOVElPTiBSRVNVTFRTIEZST00gQkFDS0VORFxuICpcbiAqIFRoZXNlIGFyZSB0aGUgcmVzdWx0cyB0aGF0IGFyZSBlbmNhc2VkIGluIHRoZSAnYWEnIGFuZCAnYWInIGtleXMgcmV0dXJuZWRcbiAqL1xuZXhwb3J0IHR5cGUgQXR0ZW50aW9uUmVzcG9uc2UgPSBBYnN0cmFjdEF0dGVudGlvblJlc3BvbnNlPEF0dGVudGlvbk1ldGFSZXN1bHQ+XG5leHBvcnQgdHlwZSBBdHRlbnRpb25NZXRhUmVzdWx0ID0gQWJzdHJhY3RBdHRlbnRpb25SZXN1bHQ8RnVsbFNpbmdsZVRva2VuSW5mb1tdPlxuXG5leHBvcnQgdHlwZSBGdWxsU2luZ2xlVG9rZW5JbmZvID0ge1xuICAgIHRleHQ6IHN0cmluZyxcbiAgICBlbWJlZGRpbmdzOiBudW1iZXJbXSxcbiAgICBjb250ZXh0czogbnVtYmVyW10sXG4gICAgYnBlX3Rva2VuOiBzdHJpbmcsXG4gICAgYnBlX3Bvczogc3RyaW5nLFxuICAgIGJwZV9kZXA6IHN0cmluZyxcbiAgICBicGVfaXNfZW50OiBib29sZWFuLFxuICAgIHRvcGtfd29yZHM6IHN0cmluZ1tdLFxuICAgIHRvcGtfcHJvYnM6IG51bWJlcltdXG59XG5cbmludGVyZmFjZSBBYnN0cmFjdEF0dGVudGlvblJlc3VsdDxUPiB7XG4gICAgYXR0OiBudW1iZXJbXVtdW10sXG4gICAgbGVmdDogVCxcbiAgICByaWdodDogVCxcbn1cblxuLyoqXG4gKiBTRUFSQ0ggUkVTVUxUIFRZUEVTXG4gKi9cblxuaW50ZXJmYWNlIE1hdGNoZWRUb2tBdHQge1xuICAgIGF0dDogbnVtYmVyW11cbiAgICBvZmZzZXRfdG9fbWF4OiBudW1iZXJcbiAgICBsb2Nfb2ZfbWF4OiBudW1iZXJcbn1cblxuXG5pbnRlcmZhY2UgTWF0Y2hlZEF0dGVudGlvbnMge1xuICAgIGluOiBNYXRjaGVkVG9rQXR0LFxuICAgIG91dDogTWF0Y2hlZFRva0F0dCxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGYWlzc1NlYXJjaFJlc3VsdHMge1xuICAgIHNlbnRlbmNlOiBzdHJpbmdcbiAgICBpbmRleDogbnVtYmVyXG4gICAgbWF0Y2g6IHN0cmluZ1xuICAgIG1hdGNoZWRfYXR0OiBNYXRjaGVkQXR0ZW50aW9uc1xuICAgIHRva2VuczogVG9rZW5GYWlzc01hdGNoW11cbn1cblxuZXhwb3J0IGludGVyZmFjZSBUb2tlbkZhaXNzTWF0Y2gge1xuICAgIHRva2VuOiBzdHJpbmdcbiAgICBwb3M6IHN0cmluZ1xuICAgIGRlcDogc3RyaW5nXG4gICAgaXNfZW50OiBzdHJpbmdcbiAgICBpc19tYXRjaDogYm9vbGVhblxuICAgIGlud2FyZDogbnVtYmVyW11cbiAgICBvdXR3YXJkOiBudW1iZXJbXVxufVxuXG4vKipcbiAqIEVWRU5UIFRZUEVTXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVG9rZW5FdmVudCB7XG4gICAgc2VsPzogRDNTZWwsXG4gICAgc2lkZTogU2lkZU9wdGlvbnMsXG4gICAgaW5kOiBudW1iZXIgfCBcIm51bGxcIixcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUb2tlbkVtYmVkZGluZ0V2ZW50IGV4dGVuZHMgVG9rZW5FdmVudCB7XG4gICAgZW1iZWRkaW5nczogbnVtYmVyW11cbn1cblxuZXhwb3J0IHR5cGUgSGVhZEJveEV2ZW50ID0ge1xuICAgIHNpZGU6IFNpZGVPcHRpb25zLFxuICAgIGluZDogbnVtYmVyLFxuICAgIGhlYWQ6IG51bWJlcixcbn1cblxuLyoqXG4gKiBNSVNDRUxMQU5FT1VTIFRZUEVTXG4gKi9cblxuZXhwb3J0IHR5cGUgU2VudGVuY2VPcHRpb25zID0gXCJhYlwiIHwgXCJiYVwiIHwgXCJhYVwiIHwgXCJiYlwiIHwgXCJhbGxcIjtcbmV4cG9ydCB0eXBlIFNpZGVPcHRpb25zID0gXCJsZWZ0XCIgfCBcInJpZ2h0XCJcbmV4cG9ydCB0eXBlIFNpbXBsZU1ldGEgPSBcInBvc1wiIHwgXCJkZXBcIiB8IFwiaXNfZW50XCJcbmV4cG9ydCB0eXBlIFRva2VuT3B0aW9ucyA9IFwiYVwiIHwgXCJiXCIgfCBcImFsbFwiXG5cbmV4cG9ydCBlbnVtIFRvZ2dsZWQge1xuICAgIEFEREVEID0gMCxcbiAgICBSRU1PVkVELFxufVxuXG5leHBvcnQgZW51bSBOb3JtQnkge1xuICAgIFJvdyA9IDAsXG4gICAgQ29sLFxuICAgIEFsbFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFic3RyYWN0TWV0YU9wdGlvbnMge1xuICAgIHBvczogc3RyaW5nW10sXG4gICAgZGVwOiBzdHJpbmdbXSxcbiAgICBpc19lbnQ6IGFueSxcbiAgICBlbnRzOiBzdHJpbmdbXSxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXRhT3B0aW9ucyBleHRlbmRzIEFic3RyYWN0TWV0YU9wdGlvbnMge1xuICAgIGlzX2VudDogYm9vbGVhbltdLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbG9yTWV0YU9wdGlvbnMgZXh0ZW5kcyBBYnN0cmFjdE1ldGFPcHRpb25zIHtcbiAgICBpc19lbnQ6IHN0cmluZ1tdIC8vIFJlcHJlc2VudGluZyBoZXggY29sb3JzXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29sb3JNZXRhU2NhbGUge1xuICAgIHBvczogKGQ6IHN0cmluZykgPT4gc3RyaW5nLFxuICAgIGRlcDogKGQ6IHN0cmluZykgPT4gc3RyaW5nLFxuICAgIGlzX2VudDogKGQ6IHN0cmluZykgPT4gc3RyaW5nLFxuICAgIGVudHM6IChkOiBzdHJpbmcpID0+IHN0cmluZyxcbiAgICBvZmZzZXQ/OiAoZDogc3RyaW5nKSA9PiBzdHJpbmcsXG59XG5cbmV4cG9ydCBlbnVtIE1vZGVsS2luZCB7XG4gICAgQmlkaXJlY3Rpb25hbCA9IFwiYmlkaXJlY3Rpb25hbFwiLFxuICAgIEF1dG9yZWdyZXNzaXZlID0gXCJhdXRvcmVncmVzc2l2ZVwiXG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5cbmQzLnNlbGVjdGlvbi5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbigpIHsgIFxuICAgIHRoaXMuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmQzLnNlbGVjdGlvbi5wcm90b3R5cGUudG9nZ2xlQ2xhc3MgPSBmdW5jdGlvbihjbGFzc05hbWUpIHsgIFxuICAgIHRoaXMuY2xhc3NlZChjbGFzc05hbWUsICF0aGlzLmNsYXNzZWQoY2xhc3NOYW1lKSk7XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmQzLnNlbGVjdGlvbi5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uKCkgeyAgXG4gICAgdGhpcy5zdHlsZSgnZGlzcGxheScsICdpbml0aWFsJyk7XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmQzLnNlbGVjdGlvbi5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uKCkgeyAgXG4gICAgdGhpcy5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmQzLnNlbGVjdGlvbi5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24oKSB7ICBcbiAgICB2YXIgaXNIaWRkZW4gPSB0aGlzLnN0eWxlKCdkaXNwbGF5JykgPT0gJ25vbmUnO1xuICAgIHJldHVybiB0aGlzLnN0eWxlKCdkaXNwbGF5JywgaXNIaWRkZW4gPyAnaW5oZXJpdCcgOiAnbm9uZScpO1xufVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLmFmdGVyID0gZnVuY3Rpb24odGFnTmFtZSkgeyAgXG4gICAgdmFyIGVsZW1lbnRzID0gW107XG4gIFxuICAgIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICAgIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgdGhpcy5uZXh0U2libGluZyk7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH0pO1xuICBcbiAgICByZXR1cm4gZDMuc2VsZWN0QWxsKGVsZW1lbnRzKTtcbiAgfVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLmJlZm9yZSA9IGZ1bmN0aW9uKHRhZ05hbWUpIHsgIFxuICAgIHZhciBlbGVtZW50cyA9IFtdO1xuICBcbiAgICB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gICAgICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIHRoaXMpO1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9KTtcbiAgXG4gICAgcmV0dXJuIGQzLnNlbGVjdEFsbChlbGVtZW50cyk7XG59IiwiaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcblxuLyoqXG4gKiBNYXAgYSBsaXN0IGFzIHZhbHVlcyB0byBhbiBvYmplY3Qgd2hvc2Uga2V5cyBhcmUgdGhlIG9yaWdpbmFsIGxpc3RcbiAqL1xuLy8gKFN0cmluZyAtPiBiKSAgLT4gW1N0cmluZ10gLT4ge1N0cmluZzogYn1cbmV4cG9ydCBjb25zdCBvYmpGcm9tS2V5cyA9IFIuY3VycnkoKGZuLCBrZXlzKSA9PiBSLnppcE9iaihrZXlzLCBSLm1hcChmbiwga2V5cykpKSBcblxuZXhwb3J0IGNvbnN0IGFzc2lnblplcm86ICh4OmFueSkgPT4gbnVtYmVyID0geCA9PiAwO1xuXG4vKipcbiAqIEdpdmVuIGFuIGxpc3QsIGNyZWF0ZSBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhbGwgMFxuICovXG5leHBvcnQgY29uc3QgaW5pdFplcm8gPSBvYmpGcm9tS2V5cyhhc3NpZ25aZXJvKSIsImltcG9ydCB7IE1haW5HcmFwaGljIH0gZnJvbSAnLi92aXMvbXlNYWluJ1xuaW1wb3J0IHsgQVBJLCBlbXB0eVRva2VuRGlzcGxheSB9IGZyb20gJy4vYXBpL21haW5BcGknXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7IFRva2VuV3JhcHBlciB9IGZyb20gJy4vZGF0YS9Ub2tlbldyYXBwZXInXG4vLyBpbXBvcnQgeyBUZXN0ZXIgfSBmcm9tIFwiLi4vdHMvdGVzdFwiXG5cbmltcG9ydCBcIiFmaWxlLWxvYWRlcj9uYW1lPWV4QkVSVC5odG1sIS4uL2V4QkVSVC5odG1sXCI7XG5pbXBvcnQgXCIhZmlsZS1sb2FkZXI/bmFtZT1pbmRleC5odG1sIS4uL2luZGV4Lmh0bWxcIjtcbmltcG9ydCBcIi4uL2Nzcy9tYWluLnNjc3NcIlxuXG5cbmZ1bmN0aW9uIGRvTXlTdmcoKSB7XG4gICAgcmV0dXJuIG5ldyBNYWluR3JhcGhpYygpXG59O1xuXG4vKipcbiAqIENyZWF0ZSB0aGUgc3RhdGljIGZpbGVzIG5lZWRlZCBmb3IgdGhlIGRlbW8uIFNhdmUgdGhlIGtleXMgYW5kIGZpbGUgcGF0aHMgdG8gYSBqc29uIG9iamVjdCB0aGF0IGlzIHRoZW4gd3JpdHRlbiB0byBhIGZpbGVcbiAqXG4gKiBUaGlzIHdpbGwgcHJpbnQgdGhlIG9iamVjdCBhZnRlciBldmVyeSBjYWxsLiBXaGVuIHRoZSBrZXkgbGVuZ3RoIGlzIHRoZSBleHBlY3RlZCBsZW5ndGgsIHJpZ2h0IGNsaWNrIGluIGNocm9tZSBhbmQgc2VsZWN0IFwic2F2ZSBhcyBnbG9iYWwgdmFyaWFibGVcIlxuICpcbiAqIFRoZW4sIGluIHRoZSBjb25zb2xlLCB0eXBlIFwiY29weSh0ZW1wMSlcIi4gVXNlIHN1YmxpbWUgdGV4dCAoaXQgaXMgdGhlIGJlc3QgZm9yIGhhbmRsaW5nIGxhcmdlIGZpbGVzKSB0byBwYXN0ZSB0aGlzIGludG8gdGhlIGNvZGUgYW5kIHNhdmUgaXQgYXMgX19fXy5qc29uXG4gKlxuICogQHBhcmFtIHNlbnRlbmNlIC0gVGhlIHNlbnRlbmNlIHRvIGFuYWx5emVcbiAqIEBwYXJhbSBtYXNrSW5kIC0gV2hpY2ggaW5kZXggdG8gbWFzayBpbiB0aGUgc2VudGVuY2UuIEF0bSwgY2FuIG9ubHkgcmVjb3JkIG9uZSBtYXNraW5nXG4gKiBAcGFyYW0gb3V0RGljdFBhdGggLSBXaGVyZSB0byBzYXZlIHRoZSBvYmplY3Qgb2YgaGFzaGtleTogZmlsZXBhdGhcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRGVtb3Moc2VudGVuY2UsIG1hc2tJbmQ6IG51bWJlciwgbW9kZWxOYW1lOiBzdHJpbmcsIGNvcnB1c05hbWU6IHN0cmluZywgb3V0RGljdFBhdGgpIHtcbiAgICBjb25zdCBhcGkgPSBuZXcgQVBJKClcbiAgICBjb25zdCBsYXllcnMgPSBfLnJhbmdlKDEyKVxuXG4gICAgY29uc3QgTCA9IDBcblxuICAgIGNvbnN0IGNvbnRlbnRIYXNoID0ge30gICAgICAgICAgLy8gTWFwIGhhc2ggLT4gY29udGVudHNcblxuICAgIC8vIEdldCB0aGUgYmFzZSByZXR1cm4gZm9yIGFsbCBwYWdlIGluaXRpYWxpemF0aW9uc1xuICAgIF8ucmFuZ2UoMTIpLmZvckVhY2goTCA9PiB7XG4gICAgICAgIGFwaS5nZXRNZXRhQXR0ZW50aW9ucyhtb2RlbE5hbWUsIHNlbnRlbmNlLCBMLCBjb250ZW50SGFzaCkudGhlbihyMCA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b2tDYXBzdWxlID0gbmV3IFRva2VuV3JhcHBlcihyMC5wYXlsb2FkKTtcblxuICAgICAgICAgICAgLy8gVW5tYXNrZWQgcmVzcG9uc2U6XG4gICAgICAgICAgICBhcGkudXBkYXRlTWFza2VkQXR0ZW50aW9ucyhtb2RlbE5hbWUsIHRva0NhcHN1bGUuYSwgc2VudGVuY2UsIEwsIGNvbnRlbnRIYXNoKS50aGVuKHIxID0+IHtcbiAgICAgICAgICAgICAgICAvLyBNYXNrZWQgd29yZCBhbmQgc2VhcmNoaW5nIHJlc3BvbnNlczpcbiAgICAgICAgICAgICAgICB0b2tDYXBzdWxlLmEubWFzayhtYXNrSW5kKVxuICAgICAgICAgICAgICAgIGFwaS51cGRhdGVNYXNrZWRBdHRlbnRpb25zKG1vZGVsTmFtZSwgdG9rQ2Fwc3VsZS5hLCBzZW50ZW5jZSwgTCwgY29udGVudEhhc2gpLnRoZW4ocjIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgc2VhcmNoIHJlc3VsdHMgYnkgZW1iZWRkaW5nXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVtYmVkZGluZyA9IHIyWydhYSddWydsZWZ0J11bbWFza0luZF0uZW1iZWRkaW5nc1xuICAgICAgICAgICAgICAgICAgICBhcGkuZ2V0TmVhcmVzdEVtYmVkZGluZ3MobW9kZWxOYW1lLCBjb3JwdXNOYW1lLCBlbWJlZGRpbmcsIEwsIF8ucmFuZ2UoMTIpLCA1MCwgY29udGVudEhhc2gpLnRoZW4oeCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHNlYXJjaCByZXN1bHRzIGJ5IGNvbnRleHRcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHIyWydhYSddWydsZWZ0J11bbWFza0luZF0uY29udGV4dHNcbiAgICAgICAgICAgICAgICAgICAgYXBpLmdldE5lYXJlc3RDb250ZXh0cyhtb2RlbE5hbWUsIGNvcnB1c05hbWUsIGNvbnRleHQsIEwsIF8ucmFuZ2UoMTIpLCA1MCwgY29udGVudEhhc2gpLnRoZW4oeCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhPYmplY3Qua2V5cyhjb250ZW50SGFzaCkubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbnRlbnRIYXNoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG4vKipcbiAqIFxuICogT2JzZXJ2ZSBob3cgdGhlIGRlbW8gY3JlYXRpb24gcHJvY2VzcyB3b3Jrcy5cbiAqIFxuICogSWYgZGVzaXJlZCB0byBtYXNrIG11bHRpcGxlIHdvcmRzIGluIHRoZSBpbnB1dCBmb3IgZGVtbyBwdXJwb3NlcywgdHJ5IGxvb3Bpbmcgb3ZlciB0aGUgbWFzayBpbmRzIGFuZCBtYXNraW5nIGVhY2ggb25lIGluZGl2aWR1YWxseVxuICogXG4gKiBAcGFyYW0gc2VudGVuY2UgVGhlIGRlbW8gc2VudGVuY2VcbiAqIEBwYXJhbSBtYXNrSW5kIERlc2lyZWQgaW5kZXggdG8gbWFzayAoY2FuIGN1cnJlbnRseSBvbmx5IGFjY2VwdCBhIHNpbmdsZSBtYXNrIGluZGV4KVxuICogQHBhcmFtIG91dERpY3RQYXRoIFxuICovXG5mdW5jdGlvbiBpbnNwZWN0RGVtb3Moc2VudGVuY2UsIG1hc2tJbmQ6IG51bWJlciwgbW9kZWxOYW1lOiBzdHJpbmcsIGNvcnB1c05hbWU6IHN0cmluZywgb3V0RGljdFBhdGgpIHtcbiAgICBjb25zdCBhcGkgPSBuZXcgQVBJKClcblxuICAgIGNvbnN0IGNvbnRlbnRIYXNoID0ge31cblxuICAgIC8vIEdldCB0aGUgYmFzZSByZXR1cm4gZm9yIGFsbCBwYWdlIGluaXRpYWxpemF0aW9uc1xuICAgIF8ucmFuZ2UoMSkuZm9yRWFjaChMID0+IHtcbiAgICAgICAgYXBpLmdldE1ldGFBdHRlbnRpb25zKG1vZGVsTmFtZSwgc2VudGVuY2UsIEwsIFwiXCIpLnRoZW4ocjAgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9rQ2Fwc3VsZSA9IG5ldyBUb2tlbldyYXBwZXIocjAucGF5bG9hZCk7XG5cbiAgICAgICAgICAgIC8vIFVubWFza2VkIHJlc3BvbnNlOlxuICAgICAgICAgICAgYXBpLnVwZGF0ZU1hc2tlZEF0dGVudGlvbnMobW9kZWxOYW1lLCB0b2tDYXBzdWxlLmEsIHNlbnRlbmNlLCBMLCBlbXB0eVRva2VuRGlzcGxheSkudGhlbihyMSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gTWFza2VkIHdvcmQgYW5kIHNlYXJjaGluZyByZXNwb25zZXM6XG4gICAgICAgICAgICAgICAgdG9rQ2Fwc3VsZS5hLm1hc2sobWFza0luZClcbiAgICAgICAgICAgICAgICBhcGkudXBkYXRlTWFza2VkQXR0ZW50aW9ucyhtb2RlbE5hbWUsIHRva0NhcHN1bGUuYSwgc2VudGVuY2UsIEwsIGVtcHR5VG9rZW5EaXNwbGF5KS50aGVuKHIyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocjIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgc2VhcmNoIHJlc3VsdHMgYnkgZW1iZWRkaW5nXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVtYmVkZGluZyA9IHIyWydhYSddWydsZWZ0J11bbWFza0luZF0uZW1iZWRkaW5nc1xuICAgICAgICAgICAgICAgICAgICBhcGkuZ2V0TmVhcmVzdEVtYmVkZGluZ3MobW9kZWxOYW1lLCBjb3JwdXNOYW1lLCBlbWJlZGRpbmcsIEwsIF8ucmFuZ2UoMTIpLCA1MCwgY29udGVudEhhc2gpLnRoZW4oeCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHNlYXJjaCByZXN1bHRzIGJ5IGNvbnRleHRcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHIyWydhYSddWydsZWZ0J11bbWFza0luZF0uY29udGV4dHNcbiAgICAgICAgICAgICAgICAgICAgYXBpLmdldE5lYXJlc3RDb250ZXh0cyhtb2RlbE5hbWUsIGNvcnB1c05hbWUsIGNvbnRleHQsIEwsIF8ucmFuZ2UoMTIpLCA1MCkudGhlbih4ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiByZXBsVGVzdCgpIHtcbiAgICAvLyBUZXN0ZXIudGVzdEF0dFdyYXBwZXJDb25zdHJ1Y3RvcigpXG4gICAgLy8gVGVzdGVyLnRlc3RVcGRhdGVNYXNrZWRBdHRlbnRpb24oKVxuICAgIC8vIFRlc3Rlci50ZXN0TmpBcmF5KCk7XG4gICAgLy8gVGVzdGVyLnRlc3RSYW5kb21BcnJheUNyZWF0aW9uKCk7XG4gICAgLy8gVGVzdGVyLnRlc3RGYWlzc1dyYXBwZXIoKTtcbiAgICAvLyBUZXN0ZXIudGVzdEQzT3JkaW5hbCgpO1xuICAgIC8vIFRlc3Rlci50ZXN0RmFpc3NTZWFyY2hSZXN1bHRzSGlzdCgpO1xuICAgIC8vIFRlc3Rlci50ZXN0UmVhZGluZ0pTT04oKTtcbn1cblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICBkb015U3ZnKCk7XG4gICAgLy8gcmVwbFRlc3QoKTtcbiAgICAvLyBjcmVhdGVEZW1vcyhcIkNoaWNrZW4gdGFzdGVzIGFic29sdXRlbHkgZGVsaWNpb3VzIGlmIHlvdSBrbm93IHdoYXQgeW91J3JlIGRvaW5nXCIsIDQsIFwiXCIpXG4gICAgY29uc29sZS5sb2coXCJEb25lIGxvYWRpbmcgd2luZG93XCIpO1xufVxuIiwiaW1wb3J0ICogYXMgdHAgZnJvbSBcIi4vZXRjL3R5cGVzXCJcbmltcG9ydCAqIGFzIHhfIGZyb20gXCIuL2V0Yy9fVG9vbHNcIlxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCJcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBVUkxIYW5kbGVyIH0gZnJvbSBcIi4vZXRjL1VSTEhhbmRsZXJcIjtcblxuY29uc3QgZmFsc2V5ID0gdmFsID0+IChuZXcgU2V0KFsnZmFsc2UnLCAwLCBcIm5vXCIsIGZhbHNlLCBudWxsLCBcIlwiXSkpLmhhcyh2YWwpXG5jb25zdCB0cnV0aHkgPSB2YWwgPT4gIWZhbHNleSh2YWwpXG5jb25zdCB0b051bWJlciA9IHggPT4gK3g7XG5cblxudHlwZSBJbnNwZWN0b3JPcHRpb25zID0gXCJjb250ZXh0XCIgfCBcImVtYmVkZGluZ3NcIiB8IG51bGxcblxuLy8gTXVzdCBiZSBvcHRpb25hbCBwYXJhbXMgZm9yIGluaXRpYWxpemF0aW9uc1xuaW50ZXJmYWNlIFVSTFBhcmFtZXRlcnMge1xuICAgIHNlbnRlbmNlPzogc3RyaW5nXG4gICAgbW9kZWw/OiBzdHJpbmdcbiAgICBtb2RlbEtpbmQ/OiBzdHJpbmdcbiAgICBjb3JwdXM/OiBzdHJpbmdcbiAgICBsYXllcj86IG51bWJlclxuICAgIGhlYWRzPzogbnVtYmVyW11cbiAgICB0aHJlc2hvbGQ/OiBudW1iZXJcbiAgICB0b2tlbkluZD86IG51bWJlciB8ICdudWxsJ1xuICAgIHRva2VuU2lkZT86IHRwLlNpZGVPcHRpb25zXG4gICAgbWV0YU1hdGNoPzogdHAuU2ltcGxlTWV0YSB8IG51bGxcbiAgICBtZXRhTWF4PzogdHAuU2ltcGxlTWV0YSB8IG51bGxcbiAgICBkaXNwbGF5SW5zcGVjdG9yPzogSW5zcGVjdG9yT3B0aW9uc1xuICAgIG9mZnNldElkeHM/OiBudW1iZXJbXVxuICAgIG1hc2tJbmRzPzogbnVtYmVyW11cbiAgICBoaWRlQ2xzU2VwPzogYm9vbGVhblxufVxuXG5leHBvcnQgY2xhc3MgVUlDb25maWcge1xuXG4gICAgcHJpdmF0ZSBfY29uZjogVVJMUGFyYW1ldGVycyA9IHt9XG4gICAgcHJpdmF0ZSBfaGVhZFNldDogU2V0PG51bWJlcj47XG4gICAgYXR0VHlwZTogdHAuU2VudGVuY2VPcHRpb25zO1xuICAgIF9uSGVhZHM6IG51bWJlciB8IG51bGw7XG4gICAgX25MYXllcnM6IG51bWJlciB8IG51bGw7XG4gICAgcHJpdmF0ZSBfdG9rZW46IHRwLlRva2VuRXZlbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fbkhlYWRzID0gMTI7IC8vIEhvdyBkbyBJIGF1dG9tYXRlIHRoaXM/XG4gICAgICAgIHRoaXMuX25MYXllcnMgPSBudWxsO1xuICAgICAgICB0aGlzLmF0dFR5cGUgPSAnYWEnOyAvLyBEb24ndCBhbGxvdyB0aGlzIHRvIGJlIG1vZGlmaWVkIGJ5IHRoZSB1c2VyLlxuICAgICAgICB0aGlzLmZyb21VUkwoKVxuICAgICAgICB0aGlzLnRvVVJMKGZhbHNlKVxuICAgIH1cblxuXG4gICAgZnJvbVVSTCgpIHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gVVJMSGFuZGxlci5wYXJhbWV0ZXJzXG5cbiAgICAgICAgdGhpcy5fY29uZiA9IHtcbiAgICAgICAgICAgIG1vZGVsOiBwYXJhbXNbJ21vZGVsJ10gfHwgJ2JlcnQtYmFzZS1jYXNlZCcsXG4gICAgICAgICAgICBtb2RlbEtpbmQ6IHBhcmFtc1snbW9kZWxLaW5kJ10gfHwgdHAuTW9kZWxLaW5kLkJpZGlyZWN0aW9uYWwsXG4gICAgICAgICAgICBzZW50ZW5jZTogcGFyYW1zWydzZW50ZW5jZSddIHx8IFwiVGhlIGdpcmwgcmFuIHRvIGEgbG9jYWwgcHViIHRvIGVzY2FwZSB0aGUgZGluIG9mIGhlciBjaXR5LlwiLFxuICAgICAgICAgICAgY29ycHVzOiBwYXJhbXNbJ2NvcnB1cyddIHx8ICd3b3onLFxuICAgICAgICAgICAgbGF5ZXI6IHBhcmFtc1snbGF5ZXInXSB8fCAxLFxuICAgICAgICAgICAgaGVhZHM6IHRoaXMuX2luaXRIZWFkcyhwYXJhbXNbJ2hlYWRzJ10pLFxuICAgICAgICAgICAgdGhyZXNob2xkOiBwYXJhbXNbJ3RocmVzaG9sZCddIHx8IDAuNyxcbiAgICAgICAgICAgIHRva2VuSW5kOiBwYXJhbXNbJ3Rva2VuSW5kJ10gfHwgbnVsbCxcbiAgICAgICAgICAgIHRva2VuU2lkZTogcGFyYW1zWyd0b2tlblNpZGUnXSB8fCBudWxsLFxuICAgICAgICAgICAgbWFza0luZHM6IHBhcmFtc1snbWFza0luZHMnXSB8fCBbOV0sXG4gICAgICAgICAgICBtZXRhTWF0Y2g6IHBhcmFtc1snbWV0YU1hdGNoJ10gfHwgXCJwb3NcIixcbiAgICAgICAgICAgIG1ldGFNYXg6IHBhcmFtc1snbWV0YU1heCddIHx8IFwicG9zXCIsXG4gICAgICAgICAgICBkaXNwbGF5SW5zcGVjdG9yOiBwYXJhbXNbJ2Rpc3BsYXlJbnNwZWN0b3InXSB8fCBudWxsLFxuICAgICAgICAgICAgb2Zmc2V0SWR4czogdGhpcy5faW5pdE9mZnNldElkeHMocGFyYW1zWydvZmZzZXRJZHhzJ10pLFxuICAgICAgICAgICAgaGlkZUNsc1NlcDogdHJ1dGh5KHBhcmFtc1snaGlkZUNsc1NlcCddKSB8fCB0cnVlLFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdG9rZW4gPSB7IHNpZGU6IHRoaXMuX2NvbmYudG9rZW5TaWRlLCBpbmQ6IHRoaXMuX2NvbmYudG9rZW5JbmQgfVxuXG4gICAgfVxuXG4gICAgdG9VUkwodXBkYXRlSGlzdG9yeSA9IGZhbHNlKSB7XG4gICAgICAgIFVSTEhhbmRsZXIudXBkYXRlVXJsKHRoaXMuX2NvbmYsIHVwZGF0ZUhpc3RvcnkpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdE9mZnNldElkeHModjogKHN0cmluZyB8IG51bWJlcilbXSB8IG51bGwpIHtcbiAgICAgICAgaWYgKHYgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIFstMSwgMCwgMV1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG51bWJlckFyciA9IFIubWFwKHRvTnVtYmVyLCB2KTtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJBcnI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0SGVhZHModjogbnVtYmVyW10gfCBudWxsKSB7XG4gICAgICAgIGlmICh2ID09IG51bGwgfHwgdi5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEFsbEhlYWRzKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaGVhZFNldChuZXcgU2V0KHYpKS5fY29uZi5oZWFkcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5oZWFkcygpXG4gICAgfVxuXG4gICAgbkhlYWRzKCk6IG51bWJlclxuICAgIG5IZWFkcyh2YWw6IG51bWJlcik6IHRoaXNcbiAgICBuSGVhZHModmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9uSGVhZHNcbiAgICAgICAgdGhpcy5fbkhlYWRzID0gdmFsXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgbkxheWVycygpOiBudW1iZXJcbiAgICBuTGF5ZXJzKHZhbDogbnVtYmVyKTogdGhpc1xuICAgIG5MYXllcnModmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9uTGF5ZXJzXG4gICAgICAgIHRoaXMuX25MYXllcnMgPSB2YWxcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICB0b2dnbGVTZWxlY3RBbGxIZWFkcygpIHtcbiAgICAgICAgaWYgKHRoaXMuaGVhZHMoKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RBbGxIZWFkcygpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdE5vSGVhZHMoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VsZWN0QWxsSGVhZHMoKSB7XG4gICAgICAgIHRoaXMuaGVhZFNldChuZXcgU2V0KF8ucmFuZ2UoMCwgdGhpcy5fbkhlYWRzKSkpXG4gICAgfVxuXG4gICAgc2VsZWN0Tm9IZWFkcygpIHtcbiAgICAgICAgdGhpcy5oZWFkU2V0KG5ldyBTZXQoW10pKVxuICAgIH1cblxuICAgIHRvZ2dsZUhlYWQoaGVhZDogbnVtYmVyKTogdHAuVG9nZ2xlZCB7XG4gICAgICAgIGxldCBvdXQ7XG4gICAgICAgIGlmICh0aGlzLmhlYWRTZXQoKS5oYXMoaGVhZCkpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZFNldCgpLmRlbGV0ZShoZWFkKTtcbiAgICAgICAgICAgIG91dCA9IHRwLlRvZ2dsZWQuUkVNT1ZFRFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oZWFkU2V0KCkuYWRkKGhlYWQpO1xuICAgICAgICAgICAgb3V0ID0gdHAuVG9nZ2xlZC5BRERFRFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHRocm91Z2ggc2V0dGVyIGZ1bmN0aW9uIHRvIGVuc3VyZSB1cmwgaXMgdXBkYXRlZFxuICAgICAgICB0aGlzLmhlYWRTZXQodGhpcy5oZWFkU2V0KCkpOyAvLyBJIGhhdGUgbXV0YWJsZSBkYXRhc3RydWN0dXJlcy4uLiBUaGlzIGlzIGNvbmZ1c2luZy5cblxuICAgICAgICByZXR1cm4gb3V0XG4gICAgfVxuXG4gICAgdG9nZ2xlVG9rZW4oZTogdHAuVG9rZW5FdmVudCk6IHRoaXMge1xuICAgICAgICBjb25zdCBwaWNrZXIgPSBSLnBpY2soWydpbmQnLCAnc2lkZSddKVxuICAgICAgICBjb25zdCBjb21wYXJlRXZlbnQgPSBwaWNrZXIoZSlcbiAgICAgICAgY29uc3QgY29tcGFyZVRva2VuID0gcGlja2VyKHRoaXMudG9rZW4oKSlcblxuICAgICAgICBpZiAoUi5lcXVhbHMoY29tcGFyZVRva2VuLCBjb21wYXJlRXZlbnQpKSB7XG4gICAgICAgICAgICB0aGlzLnJtVG9rZW4oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudG9rZW4oZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdG9rZW4oKTogdHAuVG9rZW5FdmVudDtcbiAgICB0b2tlbih2YWw6IHRwLlRva2VuRXZlbnQpOiB0aGlzO1xuICAgIHRva2VuKHZhbD86IHRwLlRva2VuRXZlbnQpIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Rva2VuXG5cbiAgICAgICAgdGhpcy5fdG9rZW4gPSB2YWw7XG4gICAgICAgIHRoaXMuX2NvbmYudG9rZW5JbmQgPSB2YWwuaW5kO1xuICAgICAgICB0aGlzLl9jb25mLnRva2VuU2lkZSA9IHZhbC5zaWRlO1xuICAgICAgICB0aGlzLnRvVVJMKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBoYXNUb2tlbigpIHtcbiAgICAgICAgY29uc3QgY29uZiA9IHRoaXMuX2NvbmZcbiAgICAgICAgY29uc3QgYWN0dWFsbHlOdWxsID0gKChjb25mLnRva2VuSW5kID09IG51bGwpICYmIChjb25mLnRva2VuU2lkZSA9PSBudWxsKSlcbiAgICAgICAgY29uc3Qgc3RyTnVsbCA9IChjb25mLnRva2VuSW5kID09IFwibnVsbFwiKVxuICAgICAgICByZXR1cm4gKCFhY3R1YWxseU51bGwpICYmICghc3RyTnVsbClcbiAgICB9XG5cbiAgICBybVRva2VuKCkge1xuICAgICAgICB0aGlzLnRva2VuKHsgaW5kOiBudWxsLCBzaWRlOiBudWxsIH0pO1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHNlbnRlbmNlKCk6IHN0cmluZztcbiAgICBzZW50ZW5jZSh2YWw6IHN0cmluZyk6IHRoaXM7XG4gICAgc2VudGVuY2UodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29uZi5zZW50ZW5jZVxuXG4gICAgICAgIHRoaXMuX2NvbmYuc2VudGVuY2UgPSB2YWxcbiAgICAgICAgdGhpcy50b1VSTCh0cnVlKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHRocmVzaG9sZCgpOiBudW1iZXI7XG4gICAgdGhyZXNob2xkKHZhbDogbnVtYmVyKTogdGhpcztcbiAgICB0aHJlc2hvbGQodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9jb25mLnRocmVzaG9sZDtcblxuICAgICAgICB0aGlzLl9jb25mLnRocmVzaG9sZCA9IHZhbDtcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBoZWFkcygpOiBudW1iZXJbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25mLmhlYWRzXG4gICAgfVxuXG4gICAgbGF5ZXIoKTogbnVtYmVyXG4gICAgbGF5ZXIodmFsOiBudW1iZXIpOiB0aGlzXG4gICAgbGF5ZXIodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29uZi5sYXllclxuXG4gICAgICAgIHRoaXMuX2NvbmYubGF5ZXIgPSB2YWw7XG4gICAgICAgIHRoaXMudG9VUkwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBoZWFkU2V0KCk6IFNldDxudW1iZXI+O1xuICAgIGhlYWRTZXQodmFsOiBTZXQ8bnVtYmVyPik6IHRoaXM7XG4gICAgaGVhZFNldCh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hlYWRTZXQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9oZWFkU2V0ID0gdmFsO1xuICAgICAgICB0aGlzLl9jb25mLmhlYWRzID0geF8uc2V0MlNvcnRlZEFycmF5KHRoaXMuX2hlYWRTZXQpXG4gICAgICAgIHRoaXMudG9VUkwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBtZXRhTWF0Y2goKTogdHAuU2ltcGxlTWV0YTtcbiAgICBtZXRhTWF0Y2godmFsOiB0cC5TaW1wbGVNZXRhKTogdGhpcztcbiAgICBtZXRhTWF0Y2godmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9jb25mLm1ldGFNYXg7XG5cbiAgICAgICAgdGhpcy5fY29uZi5tZXRhTWF4ID0gdmFsO1xuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1ldGFNYXgoKTogdHAuU2ltcGxlTWV0YTtcbiAgICBtZXRhTWF4KHZhbDogdHAuU2ltcGxlTWV0YSk6IHRoaXM7XG4gICAgbWV0YU1heCh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2NvbmYubWV0YU1hdGNoO1xuXG4gICAgICAgIHRoaXMuX2NvbmYubWV0YU1hdGNoID0gdmFsO1xuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1hc2tJbmRzKCk6IG51bWJlcltdO1xuICAgIG1hc2tJbmRzKHZhbDogbnVtYmVyW10pOiB0aGlzO1xuICAgIG1hc2tJbmRzKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fY29uZi5tYXNrSW5kcztcblxuICAgICAgICB0aGlzLl9jb25mLm1hc2tJbmRzID0gdmFsO1xuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRpc3BsYXlJbnNwZWN0b3IoKTogSW5zcGVjdG9yT3B0aW9ucztcbiAgICBkaXNwbGF5SW5zcGVjdG9yKHZhbDogSW5zcGVjdG9yT3B0aW9ucyk6IHRoaXM7XG4gICAgZGlzcGxheUluc3BlY3Rvcih2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2NvbmYuZGlzcGxheUluc3BlY3RvcjtcblxuICAgICAgICB0aGlzLl9jb25mLmRpc3BsYXlJbnNwZWN0b3IgPSB2YWw7XG4gICAgICAgIHRoaXMudG9VUkwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb2Zmc2V0SWR4cygpOiBudW1iZXJbXTtcbiAgICBvZmZzZXRJZHhzKHZhbDogbnVtYmVyW10pOiB0aGlzO1xuICAgIG9mZnNldElkeHModmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9jb25mLm9mZnNldElkeHM7XG5cbiAgICAgICAgLy8gY29udmVydCB0byBudW1iZXJzXG5cbiAgICAgICAgdGhpcy5fY29uZi5vZmZzZXRJZHhzID0gUi5tYXAodG9OdW1iZXIsIHZhbCk7XG4gICAgICAgIHRoaXMudG9VUkwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaGlkZUNsc1NlcCgpOiBib29sZWFuO1xuICAgIGhpZGVDbHNTZXAodmFsOiBib29sZWFuKTogdGhpcztcbiAgICBoaWRlQ2xzU2VwKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fY29uZi5oaWRlQ2xzU2VwO1xuXG4gICAgICAgIHRoaXMuX2NvbmYuaGlkZUNsc1NlcCA9IHRydXRoeSh2YWwpO1xuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1vZGVsKCk6IHN0cmluZztcbiAgICBtb2RlbCh2YWw6IHN0cmluZyk6IHRoaXM7XG4gICAgbW9kZWwodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9jb25mLm1vZGVsXG4gICAgICAgIHRoaXMuX2NvbmYubW9kZWwgPSB2YWxcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIG1vZGVsS2luZCgpOiBzdHJpbmc7XG4gICAgbW9kZWxLaW5kKHZhbDogc3RyaW5nKTogdGhpcztcbiAgICBtb2RlbEtpbmQodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9jb25mLm1vZGVsS2luZFxuICAgICAgICB0aGlzLl9jb25mLm1vZGVsS2luZCA9IHZhbFxuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBvZmZzZXQgbmVlZGVkIGZvciB0aGUgbW9kZWxLaW5kIGluIHRoZSBjb25maWd1cmF0aW9uXG4gICAgICovXG4gICAgZ2V0IG9mZnNldCgpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLm1vZGVsS2luZCgpKSB7XG4gICAgICAgICAgICBjYXNlIHRwLk1vZGVsS2luZC5CaWRpcmVjdGlvbmFsOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgdHAuTW9kZWxLaW5kLkF1dG9yZWdyZXNzaXZlOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29ycHVzKCk6IHN0cmluZztcbiAgICBjb3JwdXModmFsOiBzdHJpbmcpOiB0aGlzO1xuICAgIGNvcnB1cyh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2NvbmYuY29ycHVzXG4gICAgICAgIHRoaXMuX2NvbmYuY29ycHVzID0gdmFsXG4gICAgICAgIHRoaXMudG9VUkwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCAnZDMtc2VsZWN0aW9uLW11bHRpJ1xuaW1wb3J0IHsgRDNTZWwgfSBmcm9tIFwiLi4vZXRjL1V0aWxcIjtcbmltcG9ydCB7IEVkZ2UsIEVkZ2VEYXRhIH0gZnJvbSBcIi4vRWRnZUNvbm5lY3RvclwiXG5pbXBvcnQgeyBWQ29tcG9uZW50IH0gZnJvbSBcIi4vVmlzQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi4vZXRjL1NpbXBsZUV2ZW50SGFuZGxlclwiO1xuaW1wb3J0ICogYXMgdHAgZnJvbSBcIi4uL2V0Yy90eXBlc1wiXG5cbmV4cG9ydCB0eXBlIEF0dGVudGlvbkRhdGEgPSBudW1iZXJbXVtdXG5cbmV4cG9ydCBjb25zdCBzY2FsZUxpbmVhcldpZHRoID0gb3BhY2l0eSA9PiA1ICogb3BhY2l0eV4wLjMzO1xuXG5leHBvcnQgY2xhc3MgQXR0ZW50aW9uR3JhcGggZXh0ZW5kcyBWQ29tcG9uZW50PEF0dGVudGlvbkRhdGE+e1xuICAgIGNzc19uYW1lID0gJyc7XG4gICAgX2N1cnJlbnQ6IHt9O1xuXG4gICAgX2RhdGE6IEF0dGVudGlvbkRhdGE7IC8vIFRoZSBwYXNzZWQgZGF0YVxuICAgIGVkZ2VEYXRhOiBFZGdlRGF0YTsgLy8gQSB3cmFwcGVyIGFyb3VuZCBfZGF0YS4gVXNlciBzaG91bGQgbm90IG1pbmRcbiAgICBwbG90RGF0YTogRWRnZVtdOyAvLyBOZWVkZWQgZm9yIHBsb3R0aW5nXG5cbiAgICAvKiogQ09NUE9ORU5UU1xuICAgICAqIEV4cG9zZSB0aGUgY29tcG9uZW50cyBiZWxvbmdpbmcgdG8gdGhlIGNsYXNzIGFzIHByb3BlcnRpZXMgb2YgdGhlIGNsYXNzLiBcbiAgICAgKiBUaGlzIGlzIHVzZWZ1bCB0byBjcmVhdGUgbWV0aG9kcyB0aGF0IHNwZWNpZmljYWxseSBtb2RpZnkgYSBzaW5nbGUgcGFydCBvciBjb21wb25lbnQgd2l0aG91dCBoYXZpbmcgdG8gcmVzZWxlY3QgaXQuIFxuICAgICAqIE1ha2VzIGZvciBtb3JlIHJlc3BvbnNpdmUgYXBwbGljYXRpb25zXG4gICAgICogKi9cbiAgICBzdmc6IEQzU2VsO1xuICAgIGdyYXBoOiBEM1NlbDtcblxuICAgIC8vIFRoZSBiZWxvdyBjb21wb25lbnRzIHJlcXVpcmUgZGF0YVxuICAgIHBhdGhzOiBEM1NlbDtcbiAgICBvcGFjaXR5U2NhbGVzOiBkMy5TY2FsZUxpbmVhcjxhbnksIGFueT5bXTtcbiAgICBsaW5rR2VuOiBkMy5MaW5rPGFueSwgYW55LCBhbnk+XG5cbiAgICAvLyBPUFRJT05TIFdJVEggREVGQVVMVFNcbiAgICBfdGhyZXNob2xkID0gMC43OyAvLyBBY2N1bXVsYXRpb24gdGhyZXNob2xkLiBCZXR3ZWVuIDAtMVxuICAgIG5vcm1CeTogdHAuTm9ybUJ5XG5cbiAgICBzdGF0aWMgZXZlbnRzID0ge30gLy8gTm8gZXZlbnRzIG5lZWRlZCBmb3IgdGhpcyBvbmVcblxuICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIGJveGhlaWdodDogMjYsIC8vIFRoZSBoZWlnaHQgb2YgdGhlIGRpdiBib3hlcyBhcm91bmQgdGhlIFNWRyBlbGVtZW50XG4gICAgICAgIGhlaWdodDogNTAwLFxuICAgICAgICB3aWR0aDogMjAwLFxuICAgICAgICBvZmZzZXQ6IDAsIC8vIFNob3VsZCBJIG9mZnNldCB0aGUgbGVmdCBzaWRlIGJ5IDEgb3Igbm90P1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGQzUGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zOiB7fSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzUGFyZW50LCBldmVudEhhbmRsZXIpXG4gICAgICAgIHRoaXMuc3VwZXJJbml0U1ZHKG9wdGlvbnMpXG4gICAgICAgIHRoaXMuX2luaXQoKVxuICAgIH1cblxuICAgIF9pbml0KCkge1xuICAgICAgICB0aGlzLnN2ZyA9IHRoaXMucGFyZW50O1xuICAgICAgICB0aGlzLmdyYXBoID0gdGhpcy5zdmcuc2VsZWN0QWxsKGAuYXRuLWN1cnZlYCk7XG4gICAgICAgIHRoaXMubGlua0dlbiA9IGQzLmxpbmtIb3Jpem9udGFsKClcbiAgICAgICAgICAgIC54KGQgPT4gZFswXSlcbiAgICAgICAgICAgIC55KGQgPT4gZFsxXSk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHdoZXRoZXIgdG8gdXNlIHRoZSAnaicgb3IgJ2knIGF0dHJpYnV0ZSB0byBjYWxjdWxhdGUgb3BhY2l0aWVzXG4gICAgcHJpdmF0ZSBzY2FsZUlkeCgpOiBcImlcIiB8IFwialwiIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLm5vcm1CeSkge1xuICAgICAgICAgICAgY2FzZSB0cC5Ob3JtQnkuQ29sOlxuICAgICAgICAgICAgICAgIHJldHVybiAnaidcbiAgICAgICAgICAgIGNhc2UgdHAuTm9ybUJ5LlJvdzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2knXG4gICAgICAgICAgICBjYXNlIHRwLk5vcm1CeS5BbGw6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdpJ1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBjb25uZWN0aW9ucyBiZXR3ZWVuIGxvY2F0aW9ucyBvZiB0aGUgU1ZHIHVzaW5nIEQzJ3MgbGlua0dlblxuICAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlQ29ubmVjdGlvbnMoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgaWYgKHRoaXMucGF0aHMpIHtcbiAgICAgICAgICAgIHRoaXMucGF0aHMuYXR0cnMoe1xuICAgICAgICAgICAgICAgICdkJzogKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YTogeyBzb3VyY2U6IFtudW1iZXIsIG51bWJlcl0sIHRhcmdldDogW251bWJlciwgbnVtYmVyXSB9ID1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiBbMCwgb3AuYm94aGVpZ2h0ICogKGQuaSArIDAuNSArIG9wLm9mZnNldCldLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBbb3Aud2lkdGgsIG9wLmJveGhlaWdodCAqIChkLmogKyAwLjUpXSAvLyArIDIgYWxsb3dzIHNtYWxsIG9mZnNldFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5saW5rR2VuKGRhdGEpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2F0bi1jdXJ2ZSdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJzcmMtaWR4XCIsIChkLCBpKSA9PiBkLmkpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0YXJnZXQtaWR4XCIsIChkLCBpKSA9PiBkLmopO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHRoZSBoZWlnaHQgb2YgdGhlIFNWR1xuICAgICAqL1xuICAgIHByaXZhdGUgdXBkYXRlSGVpZ2h0KCkge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgaWYgKHRoaXMuc3ZnICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc3ZnLmF0dHIoXCJoZWlnaHRcIiwgdGhpcy5vcHRpb25zLmhlaWdodCArIChvcC5vZmZzZXQgKiB0aGlzLm9wdGlvbnMuYm94aGVpZ2h0KSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIHdpZHRoIG9mIHRoZSBTVkdcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZVdpZHRoKCkge1xuICAgICAgICBpZiAodGhpcy5zdmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zdmcuYXR0cihcIndpZHRoXCIsIHRoaXMub3B0aW9ucy53aWR0aClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIE9wYWNpdHkgb2YgdGhlIGxpbmVzIGFjY29yZGluZyB0byB0aGUgdmFsdWUgb2YgdGhlIGRhdGFcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZU9wYWNpdHkoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5wYXRocyAhPSBudWxsKSB7XG4gICAgICAgICAgICAvLyBwYXRocy50cmFuc2l0aW9uKCkuZHVyYXRpb24oNTAwKS5hdHRyKCdvcGFjaXR5JywgKGQpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGF0aHMuYXR0cignb3BhY2l0eScsIChkKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gdGhpcy5vcGFjaXR5U2NhbGVzW2Rbc2VsZi5zY2FsZUlkeCgpXV0oZC52KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMucGF0aHMuYXR0cignc3Ryb2tlLXdpZHRoJywgKGQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSB0aGlzLm9wYWNpdHlTY2FsZXNbZFtzZWxmLnNjYWxlSWR4KCldXShkLnYpO1xuICAgICAgICAgICAgICAgIHJldHVybiBzY2FsZUxpbmVhcldpZHRoKHZhbCkgLy81ICogdmFsXjAuMzM7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcmVuZGVyIHRoZSBncmFwaCBpbiB0aGUgZXZlbnQgdGhhdCB0aGUgZGF0YSBjaGFuZ2VzXG4gICAgICovXG4gICAgcHJpdmF0ZSB1cGRhdGVEYXRhKCkge1xuICAgICAgICBpZiAodGhpcy5ncmFwaCAhPSBudWxsKSB7XG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIuYXRuLWN1cnZlXCIpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5wbG90RGF0YVxuXG4gICAgICAgICAgICB0aGlzLnBhdGhzID0gdGhpcy5ncmFwaFxuICAgICAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAgICAgLmpvaW4oJ3BhdGgnKTtcblxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb25uZWN0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVPcGFjaXR5KCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2NhbGUgdGhlIG9wYWNpdHkgYWNjb3JkaW5nIHRvIHRoZSB2YWx1ZXMgb2YgdGhlIGRhdGEsIGZyb20gMCB0byBtYXggb2YgY29udGFpbmVkIGRhdGFcbiAgICAgKiBOb3JtYWxpemUgYnkgZWFjaCBzb3VyY2UgdGFyZ2V0LCBvciBhY3Jvc3MgdGhlIHdob2xlXG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVTY2FsZXMgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMub3BhY2l0eVNjYWxlcyA9IFtdO1xuICAgICAgICBsZXQgYXJyID0gW11cblxuICAgICAgICAvLyBHcm91cCBub3JtYWxpemF0aW9uXG4gICAgICAgIHN3aXRjaCAodGhpcy5ub3JtQnkpe1xuICAgICAgICAgICAgY2FzZSB0cC5Ob3JtQnkuUm93OlxuICAgICAgICAgICAgICAgIGFyciA9IHRoaXMuZWRnZURhdGEuZXh0ZW50KDEpO1xuICAgICAgICAgICAgICAgIHRoaXMub3BhY2l0eVNjYWxlcyA9IFtdO1xuICAgICAgICAgICAgICAgIGFyci5mb3JFYWNoKCh2LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLm9wYWNpdHlTY2FsZXMgYXMgZDMuU2NhbGVMaW5lYXI8YW55LCBhbnk+W10pLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRvbWFpbihbMCwgdlsxXV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJhbmdlKFswLCAwLjldKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHAuTm9ybUJ5LkNvbDpcbiAgICAgICAgICAgICAgICBhcnIgPSB0aGlzLmVkZ2VEYXRhLmV4dGVudCgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wYWNpdHlTY2FsZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBhcnIuZm9yRWFjaCgodiwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAodGhpcy5vcGFjaXR5U2NhbGVzIGFzIGQzLlNjYWxlTGluZWFyPGFueSwgYW55PltdKS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kb21haW4oWzAsIHZbMV1dKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yYW5nZShbMCwgMC45XSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHRwLk5vcm1CeS5BbGw6XG4gICAgICAgICAgICAgICAgY29uc3QgbWF4SW4gPSBkMy5tYXgodGhpcy5wbG90RGF0YS5tYXAoKGQpID0+IGQudikpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BhY2l0eVNjYWxlcy5wdXNoKGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kb21haW4oWzAsIG1heEluXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yYW5nZShbMCwgMV0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm9yIG5vcm1pbmcgc3BlY2lmaWVkXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWNjZXNzIC8gbW9kaWZ5IHRoZSBkYXRhIGluIGEgRDMgc3R5bGUgd2F5LiBJZiBtb2RpZmllZCwgdGhlIGNvbXBvbmVudCB3aWxsIHVwZGF0ZSBqdXN0IHRoZSBwYXJ0IHRoYXQgaXMgbmVlZGVkIHRvIGJlIHVwZGF0ZWRcbiAgICAgKi9cbiAgICBkYXRhKCk6IEF0dGVudGlvbkRhdGFcbiAgICBkYXRhKHZhbHVlOiBBdHRlbnRpb25EYXRhKTogdGhpc1xuICAgIGRhdGEodmFsdWU/KSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2RhdGEgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5lZGdlRGF0YSA9IG5ldyBFZGdlRGF0YSh2YWx1ZSk7XG4gICAgICAgIHRoaXMucGxvdERhdGEgPSB0aGlzLmVkZ2VEYXRhLmZvcm1hdCh0aGlzLl90aHJlc2hvbGQpO1xuICAgICAgICB0aGlzLmNyZWF0ZVNjYWxlcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZURhdGEoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWNjZXNzIC8gbW9kaWZ5IHRoZSBoZWlnaHQgaW4gYSBEMyBzdHlsZSB3YXkuIElmIG1vZGlmaWVkLCB0aGUgY29tcG9uZW50IHdpbGwgdXBkYXRlIGp1c3QgdGhlIHBhcnQgdGhhdCBpcyBuZWVkZWQgdG8gYmUgdXBkYXRlZFxuICAgICAqL1xuICAgIGhlaWdodCgpOiBudW1iZXJcbiAgICBoZWlnaHQodmFsdWU6IG51bWJlcik6IHRoaXNcbiAgICBoZWlnaHQodmFsdWU/KSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmhlaWdodFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vcHRpb25zLmhlaWdodCA9IHZhbHVlXG4gICAgICAgIHRoaXMudXBkYXRlSGVpZ2h0KClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWNjZXNzIC8gbW9kaWZ5IHRoZSB3aWR0aCBpbiBhIEQzIHN0eWxlIHdheS4gSWYgbW9kaWZpZWQsIHRoZSBjb21wb25lbnQgd2lsbCB1cGRhdGUganVzdCB0aGUgcGFydCB0aGF0IGlzIG5lZWRlZCB0byBiZSB1cGRhdGVkXG4gICAgICovXG4gICAgd2lkdGgoKTogbnVtYmVyXG4gICAgd2lkdGgodmFsdWU6IG51bWJlcik6IHRoaXNcbiAgICB3aWR0aCh2YWx1ZT86IG51bWJlcik6IHRoaXMgfCBudW1iZXIge1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy53aWR0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wdGlvbnMud2lkdGggPSB2YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVXaWR0aCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY2Nlc3MgLyBtb2RpZnkgdGhlIHRocmVzaG9sZCBpbiBhIEQzIHN0eWxlIHdheS4gSWYgbW9kaWZpZWQsIHRoZSBjb21wb25lbnQgd2lsbCB1cGRhdGUganVzdCB0aGUgcGFydCB0aGF0IGlzIG5lZWRlZCB0byBiZSB1cGRhdGVkXG4gICAgICovXG4gICAgdGhyZXNob2xkKCk6IG51bWJlclxuICAgIHRocmVzaG9sZCh2YWx1ZTogbnVtYmVyKTogdGhpc1xuICAgIHRocmVzaG9sZCh2YWx1ZT8pIHtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90aHJlc2hvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl90aHJlc2hvbGQgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5wbG90RGF0YSA9IHRoaXMuZWRnZURhdGEuZm9ybWF0KHRoaXMuX3RocmVzaG9sZCk7XG4gICAgICAgIHRoaXMuY3JlYXRlU2NhbGVzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlRGF0YSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBfd3JhbmdsZShkYXRhOiBBdHRlbnRpb25EYXRhKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIF9yZW5kZXIoZGF0YTogQXR0ZW50aW9uRGF0YSkge1xuICAgICAgICB0aGlzLnN2Zy5odG1sKCcnKVxuICAgICAgICB0aGlzLnVwZGF0ZUhlaWdodCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVdpZHRoKCk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVEYXRhKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCB7IFZDb21wb25lbnQgfSBmcm9tIFwiLi9WaXNDb21wb25lbnRcIjtcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gXCIuLi9ldGMvU2ltcGxlRXZlbnRIYW5kbGVyXCI7XG5pbXBvcnQgeyBEM1NlbCB9IGZyb20gXCIuLi9ldGMvVXRpbFwiO1xuaW1wb3J0IHsgU1ZHIH0gZnJvbSBcIi4uL2V0Yy9TVkdwbHVzXCJcbmltcG9ydCAqIGFzIHRmIGZyb20gJ0B0ZW5zb3JmbG93L3RmanMnXG5pbXBvcnQgeyBUZW5zb3IzRCB9IGZyb20gXCJAdGVuc29yZmxvdy90ZmpzXCI7XG5cbi8vIFRoZSBiZWxvdyB0d28gKGludGVyZmFjZSBhbmQgZnVuY3Rpb24pIGNhbiBiZWNvbWUgYSBjbGFzc1xuZXhwb3J0IHR5cGUgQXR0ZW50aW9uSGVhZEJveEkgPSB7XG4gICAgcm93czogbnVtYmVyW11bXSxcbiAgICBsYWJlbHM6IG51bWJlcltdLFxuICAgIG1heDogbnVtYmVyLFxufVxuXG4vKipcbiAqIEZyb20gYW4gYXR0ZW50aW9uIG1hdHJpeCBzZWxlY3RlZCBieSBsYXllciwgc2hvdyBhIHN1bW1hcnkgb2YgdGhlIGF0dGVudGlvbnMgYmVsb25naW5nIHRvIGVhY2ggaGVhZC5cbiAqIFxuICogQHBhcmFtIGhlYWRNYXQgVGhlIG1hdHJpeCByZXByZXNlbnRpbmcgYWxsIHRoZSBhdHRlbnRpb25zIGJ5IGhlYWQgKGxheWVyIGFscmVhZHkgc2VsZWN0ZWQpIDxoZWFkLCBmcm9tLCB0bz5cbiAqIEBwYXJhbSBoZWFkTGlzdCBUaGUgaGVhZHMgdGhhdCBhcmUgc2VsZWN0ZWRcbiAqIEBwYXJhbSBzaWRlIElzIHRoaXMgdGhlIHJpZ2h0IG9yIHRoZSBsZWZ0IGRpc3BsYXk/XG4gKiBAcGFyYW0gdG9rZW5JbmQgSWYgbm90IG51bGwsIHNlbGVjdCBqdXN0IHRoZSBpbmZvcm1hdGlvbiBmcm9tIGEgc2luZ2xlIHRva2VuIGFjcm9zcyBoZWFkc1xuICogQHJldHVybnMgSW5mb3JtYXRpb24gbmVlZGVkIHRvIGxhYmVsIHRoZSBoZWFkYm94XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdHRlbnRpb25JbmZvKGhlYWRNYXQ6IG51bWJlcltdW11bXSwgaGVhZExpc3Q6IG51bWJlcltdLCBzaWRlOiBcInJpZ2h0XCIgfCBcImxlZnRcIiA9IFwibGVmdFwiLCB0b2tlbjogbnVsbCB8IHtpbmQ6IG51bWJlciwgc2lkZTogXCJsZWZ0XCIgfCBcInJpZ2h0XCJ9PW51bGwpOiBBdHRlbnRpb25IZWFkQm94SSB7XG4gICAgLy8gQ29sbGVjdCBvbmx5IGZyb20gaGVhZGxpc3QsIGF2ZXJhZ2UgZWFjaCBoZWFkLCB0cmFuc3Bvc2UgdG8gZWFzZSBpdGVyYXRpb25cbiAgICBpZiAoaGVhZExpc3QubGVuZ3RoID09IDApIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJvd3M6IFtbXV0sXG4gICAgICAgICAgICBsYWJlbHM6IFtdLFxuICAgICAgICAgICAgbWF4OiAwLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGRpbSA9IG51bGxcbiAgICAvLyBPbmx5IGNoYW5nZSB0aGUgYXR0ZW50aW9uIGdyYXBoIG9wcG9zaXRlIHNlbGVjdGVkIHRva2VuXG4gICAgaWYgKHRva2VuICE9IG51bGwgJiYgKHRva2VuLnNpZGUgIT0gc2lkZSkpIHtcbiAgICAgICAgZGltID0gdG9rZW4uc2lkZSA9PSBcImxlZnRcIiA/IC0yIDogLTEgLy8gQXNzaWduIHRvIFwiZnJvbVwiIGRpcmVjdGlvbiBpZiBcImxlZnRcIiBcbiAgICB9XG5cbiAgICBsZXQgYXhpczogbnVtYmVyID0gc2lkZSA9PSBcImxlZnRcIiA/IDIgOiAxO1xuXG4gICAgLy8gYXZlcmFnZSBhY3Jvc3MgdGhlIGF4aXMgcmVwcmVzZW50aW5nIHRoZSBhdHRlbnRpb25zLlxuICAgIGxldCBnYXRoZXJlZE1hdCA9IHRmLnRlbnNvcjNkKGhlYWRNYXQpXG4gICAgaWYgKGRpbSAhPSBudWxsKSB7XG4gICAgICAgIGdhdGhlcmVkTWF0ID0gZ2F0aGVyZWRNYXQuZ2F0aGVyKFt0b2tlbi5pbmRdLCBkaW0pXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiU0hBUEU6IFwiLCBnYXRoZXJlZE1hdC5nYXRoZXIoOCwgLTIpLnNoYXBlKTtcbiAgICBsZXQgbmV3TWF0ID0gZ2F0aGVyZWRNYXQuZ2F0aGVyKGhlYWRMaXN0LCAwKS5tZWFuKFtheGlzXSkudHJhbnNwb3NlKCk7XG5cbiAgICBjb25zdCByb3dJbmZvID0gPG51bWJlcltdW10+bmV3TWF0LmFycmF5U3luYygpO1xuXG4gICAgY29uc3Qgb3V0OiBBdHRlbnRpb25IZWFkQm94SSA9IHtcbiAgICAgICAgcm93czogcm93SW5mbyxcbiAgICAgICAgbGFiZWxzOiBoZWFkTGlzdCxcbiAgICAgICAgbWF4OiA8bnVtYmVyPm5ld01hdC5tYXgoKS5hcnJheVN5bmMoKSxcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0XG59XG5cbmludGVyZmFjZSBDdXJyZW50T3B0aW9ucyB7XG4gICAgaGVhZEhlaWdodDogbnVtYmVyXG4gICAgaGVhZFdpZHRoOiBudW1iZXJcbiAgICB4UGFkOiBudW1iZXJcbiAgICB5UGFkOiBudW1iZXJcbiAgICBib3hXaWR0aDogbnVtYmVyXG4gICAgdG90YWxXaWR0aDogbnVtYmVyXG4gICAgdG90YWxIZWlnaHQ6IG51bWJlclxufTtcblxuZXhwb3J0IGNsYXNzIEF0dGVudGlvbkhlYWRCb3ggZXh0ZW5kcyBWQ29tcG9uZW50PEF0dGVudGlvbkhlYWRCb3hJPntcbiAgICBjc3NfbmFtZSA9ICcnO1xuICAgIHJvd0Nzc05hbWUgPSAnYXR0LWhlYWQnO1xuICAgIGJveENzc05hbWUgPSAnYXR0LXJlY3QnO1xuXG4gICAgc3RhdGljIGV2ZW50cyA9IHtcbiAgICAgICAgcm93TW91c2VPdmVyOiBcIkF0dGVudGlvbkhlYWRCb3hfUm93TW91c2VPdmVyXCIsXG4gICAgICAgIHJvd01vdXNlT3V0OiBcIkF0dGVudGlvbkhlYWRCb3hfUm93TW91c2VPdXRcIixcbiAgICAgICAgYm94TW91c2VPdmVyOiBcIkF0dGVudGlvbkhlYWRCb3hfQm94TW91c2VPdmVyXCIsXG4gICAgICAgIGJveE1vdXNlT3V0OiBcIkF0dGVudGlvbkhlYWRCb3hfQm94TW91c2VPdXRcIixcbiAgICAgICAgYm94TW91c2VNb3ZlOiBcIkF0dGVudGlvbkhlYWRCb3hfQm94TW91c2VNb3ZlXCIsXG4gICAgICAgIGJveENsaWNrOiBcIkF0dGVudGlvbkhlYWRCb3hfQm94Q2xpY2tcIixcbiAgICB9O1xuXG4gICAgX2RhdGE6IEF0dGVudGlvbkhlYWRCb3hJO1xuXG4gICAgX2N1cnJlbnQ6IFBhcnRpYWw8Q3VycmVudE9wdGlvbnM+ID0ge31cblxuICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIGJveERpbTogMjYsXG4gICAgICAgIHlzY2FsZTogMSwgLy8gQW1vdW50IHRvIHNjYWxlIGJveGhlaWdodCB0byBnZXQgaW5kaXZpZHVhbCBoZWFkc1xuICAgICAgICB4c2NhbGU6IDAuNSwgLy8gQW1vdW50IHRvIHNjYWxlIGJveHdpZHRoIHRvIGdldCBpbmRpdmlkdWFsIGhlYWRzXG4gICAgICAgIHNpZGU6IFwibGVmdFwiLFxuICAgICAgICBtYXhXaWR0aDogMjAwLCAvLyBNYXhpbXVtIHdpZHRoIG9mIFNWR1xuICAgICAgICBvZmZzZXQ6IDAsIC8vIDEgaWYgZm9yIGF1dG9yZWdyZXNzaXZlIG1vZGVsc1xuICAgIH07XG5cbiAgICAvLyBEMyBDb21wb25lbnRzXG4gICAgaGVhZFJvd3M6IEQzU2VsO1xuICAgIGhlYWRDZWxsczogRDNTZWw7XG4gICAgb3BhY2l0eVNjYWxlOiBkMy5TY2FsZUxpbmVhcjxhbnksIGFueT47XG5cbiAgICBjb25zdHJ1Y3RvcihkM1BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9uczoge30gPSB7fSkge1xuICAgICAgICBzdXBlcihkM1BhcmVudCwgZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgdGhpcy5zdXBlckluaXRTVkcob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX2luaXQoKVxuICAgIH1cblxuICAgIF9pbml0KCkge1xuICAgICAgICB0aGlzLmhlYWRSb3dzID0gdGhpcy5iYXNlLnNlbGVjdEFsbChgLiR7dGhpcy5yb3dDc3NOYW1lfWApXG4gICAgICAgIHRoaXMuaGVhZENlbGxzID0gdGhpcy5oZWFkUm93cy5zZWxlY3RBbGwoYCR7dGhpcy5ib3hDc3NOYW1lfWApXG4gICAgICAgIHRoaXMub3BhY2l0eVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwgMV0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlQ3VycmVudCgpOiBQYXJ0aWFsPEN1cnJlbnRPcHRpb25zPiB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG4gICAgICAgIGNvbnN0IGN1ciA9IHRoaXMuX2N1cnJlbnRcblxuICAgICAgICBjb25zdCBuSGVhZHMgPSB0aGlzLl9kYXRhLnJvd3NbMF0ubGVuZ3RoXG4gICAgICAgIGNvbnN0IGJhc2VIZWFkV2lkdGggPSBvcC5ib3hEaW0gKiBvcC54c2NhbGVcblxuICAgICAgICAvLyBTY2FsZSBoZWFkd2lkdGggYWNjb3JkaW5nIHRvIG1heGltdW0gd2lkdGhcbiAgICAgICAgY29uc3QgZ2V0SGVhZFNjYWxlID0gKG5IKSA9PiAoTWF0aC5taW4ob3AubWF4V2lkdGggLyBuSCwgYmFzZUhlYWRXaWR0aCkgLyBiYXNlSGVhZFdpZHRoKSAqIG9wLnhzY2FsZTtcblxuICAgICAgICBjdXIuaGVhZEhlaWdodCA9IG9wLmJveERpbSAqIG9wLnlzY2FsZTtcbiAgICAgICAgY3VyLmhlYWRXaWR0aCA9IGdldEhlYWRTY2FsZShuSGVhZHMpICogb3AuYm94RGltO1xuICAgICAgICBjdXIueFBhZCA9IGN1ci5oZWFkV2lkdGg7XG4gICAgICAgIGN1ci55UGFkID0gKG9wLmJveERpbSAtIGN1ci5oZWFkSGVpZ2h0KSAvIDI7XG5cbiAgICAgICAgY29uc3QgZ2V0Qm94V2lkdGggPSAoaGVhZFdpZHRoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXhCd2lkdGggPSAxMDA7XG4gICAgICAgICAgICBjb25zdCBid2lkdGggPSB0aGlzLl9kYXRhLnJvd3NbMF0ubGVuZ3RoICogY3VyLmhlYWRXaWR0aFxuICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSBkMy5zY2FsZUxpbmVhclxuICAgICAgICAgICAgaWYgKGJ3aWR0aCA+IG1heEJ3aWR0aCkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBjdXIuYm94V2lkdGggPSAodGhpcy5fZGF0YS5yb3dzWzBdLmxlbmd0aCAqIGN1ci5oZWFkV2lkdGgpO1xuICAgICAgICBjdXIudG90YWxXaWR0aCA9ICgyICogY3VyLnhQYWQpICsgY3VyLmJveFdpZHRoO1xuICAgICAgICBjdXIudG90YWxIZWlnaHQgPSAob3AuYm94RGltICogKHRoaXMuX2RhdGEucm93cy5sZW5ndGggKyBvcC5vZmZzZXQpKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudFxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlRGF0YSgpIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBib3hFdmVudCA9IChpKSA9PiB7IHJldHVybiB7IGluZDogaSwgc2lkZTogb3Auc2lkZSwgaGVhZDogc2VsZi5fZGF0YS5sYWJlbHNbaV0gfSB9XG4gICAgICAgIGNvbnN0IGN1ciA9IHRoaXMudXBkYXRlQ3VycmVudCgpXG5cbiAgICAgICAgY29uc3QgZ2V0QmFzZVggPSAoKSA9PiAoPEhUTUxFbGVtZW50PnNlbGYuYmFzZS5ub2RlKCkpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnRcbiAgICAgICAgY29uc3QgZ2V0QmFzZVkgPSAoKSA9PiAoPEhUTUxFbGVtZW50PnNlbGYuYmFzZS5ub2RlKCkpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcFxuXG4gICAgICAgIHRoaXMuYmFzZS5odG1sKCcnKTtcblxuICAgICAgICB0aGlzLnBhcmVudFxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBjdXIudG90YWxXaWR0aClcbiAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGN1ci50b3RhbEhlaWdodClcblxuICAgICAgICB0aGlzLmhlYWRSb3dzID0gdGhpcy5iYXNlLnNlbGVjdEFsbChgLiR7c2VsZi5yb3dDc3NOYW1lfWApXG4gICAgICAgICAgICAuZGF0YShzZWxmLl9kYXRhLnJvd3MpXG4gICAgICAgICAgICAuam9pbihcImdcIilcbiAgICAgICAgICAgIC5hdHRycyh7XG4gICAgICAgICAgICAgICAgY2xhc3M6IChkLCBpKSA9PiBgJHtzZWxmLnJvd0Nzc05hbWV9ICR7c2VsZi5yb3dDc3NOYW1lfS0ke2l9YCxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTVkcudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IGN1ci54UGFkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IChvcC5ib3hEaW0gKiAoaSArIG9wLm9mZnNldCkpICsgY3VyLnlQYWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgd2lkdGg6IGN1ci5ib3hXaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGN1ci5oZWFkSGVpZ2h0LFxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKFwibW91c2VvdmVyXCIsIChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5yb3dNb3VzZU92ZXIsIHsgaW5kOiBpLCBzaWRlOiBvcC5zaWRlIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKFwibW91c2VvdXRcIiwgKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKEF0dGVudGlvbkhlYWRCb3guZXZlbnRzLnJvd01vdXNlT3V0LCB7IGluZDogaSwgc2lkZTogb3Auc2lkZSB9KVxuICAgICAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmhlYWRDZWxscyA9IHRoaXMuaGVhZFJvd3NcbiAgICAgICAgICAgIC5zZWxlY3RBbGwoYCR7dGhpcy5ib3hDc3NOYW1lfWApXG4gICAgICAgICAgICAuZGF0YShkID0+IGQpXG4gICAgICAgICAgICAuam9pbigncmVjdCcpXG4gICAgICAgICAgICAuYXR0cnMoe1xuICAgICAgICAgICAgICAgIHg6IChkLCBpKSA9PiBpICogY3VyLmhlYWRXaWR0aCxcbiAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICAgIGNsYXNzOiB0aGlzLmJveENzc05hbWUsXG4gICAgICAgICAgICAgICAgaGVhZDogKGQsIGkpID0+IHNlbGYuX2RhdGEubGFiZWxzW2ldLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBjdXIuaGVhZFdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogY3VyLmhlYWRIZWlnaHQsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogKGQ6IG51bWJlcikgPT4gdGhpcy5vcGFjaXR5U2NhbGUoZCksXG4gICAgICAgICAgICAgICAgZmlsbDogXCJibHVlXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKEF0dGVudGlvbkhlYWRCb3guZXZlbnRzLmJveE1vdXNlT3ZlciwgYm94RXZlbnQoaSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKFwibW91c2VvdXRcIiwgKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKEF0dGVudGlvbkhlYWRCb3guZXZlbnRzLmJveE1vdXNlT3V0LCBib3hFdmVudChpKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJjbGlja1wiLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMuYm94Q2xpY2ssIGJveEV2ZW50KGkpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3AgPSBzZWxmLm9wdGlvbnNcbiAgICAgICAgICAgICAgICBjb25zdCBtb3VzZSA9IGQzLm1vdXNlKHNlbGYuYmFzZS5ub2RlKCkpXG5cbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKEF0dGVudGlvbkhlYWRCb3guZXZlbnRzLmJveE1vdXNlTW92ZSwgeyBpbmQ6IGksIHNpZGU6IG9wLnNpZGUsIGJhc2VYOiBnZXRCYXNlWCgpLCBiYXNlWTogZ2V0QmFzZVkoKSwgbW91c2U6IG1vdXNlIH0pXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYXBwZW5kKFwic3ZnOnRpdGxlXCIpXG4gICAgICAgICAgICAudGV4dCgoZCwgaSkgPT4gXCJIZWFkIFwiICsgKHNlbGYuX2RhdGEubGFiZWxzW2ldICsgMSkpXG4gICAgfVxuXG5cbiAgICBfd3JhbmdsZShkYXRhOiBBdHRlbnRpb25IZWFkQm94SSkge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5vcGFjaXR5U2NhbGUgPSB0aGlzLm9wYWNpdHlTY2FsZS5kb21haW4oWzAsIGRhdGEubWF4XSlcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgX3JlbmRlcihkYXRhOiBBdHRlbnRpb25IZWFkQm94SSkge1xuICAgICAgICB0aGlzLnVwZGF0ZURhdGEoKTtcbiAgICB9XG59IiwiaW1wb3J0IHtWQ29tcG9uZW50fSBmcm9tICcuL1Zpc0NvbXBvbmVudCdcbmltcG9ydCB7c3BhY3lDb2xvcnN9IGZyb20gJy4uL2V0Yy9TcGFjeUluZm8nXG5pbXBvcnQge1NWR30gZnJvbSAnLi4vZXRjL1NWR3BsdXMnXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBEM1NlbCB9IGZyb20gJy4uL2V0Yy9VdGlsJztcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2V0Yy9TaW1wbGVFdmVudEhhbmRsZXInO1xuXG5pbnRlcmZhY2UgTWFyZ2luSW5mbyB7XG4gICAgdG9wOiBudW1iZXIsXG4gICAgYm90dG9tOiBudW1iZXIsXG4gICAgcmlnaHQ6IG51bWJlcixcbiAgICBsZWZ0OiBudW1iZXJcbn1cblxuLy8gRGVwZW5kZW50IG9uIHRoZSBvcHRpb25zIGluIHRoZSByZXNwb25zZVxudHlwZSBNYXRjaGVkTWV0YVNlbGVjdGlvbnMgPSBcInBvc1wiIHwgXCJkZXBcIiB8IFwiZW50XCJcblxuaW50ZXJmYWNlIE1hdGNoZWRNZXRhQ291bnQge1xuICAgIHBvczogbnVtYmVyXG4gICAgZGVwOiBudW1iZXJcbiAgICBpc19lbnQ6IG51bWJlclxufVxuXG5pbnRlcmZhY2UgTWF4QXR0TWV0YUNvdW50IHtcbiAgICBvZmZzZXQ6IG51bWJlclxufVxuXG50eXBlIE1hdGNoZWREYXRhSW50ZXJmYWNlID0gTWF0Y2hlZE1ldGFDb3VudFxudHlwZSBNYXhBdHREYXRhSW50ZXJmYWNlID0gTWF4QXR0TWV0YUNvdW50XG50eXBlIERhdGFJbnRlcmZhY2UgPSBNYXRjaGVkRGF0YUludGVyZmFjZSB8IE1heEF0dERhdGFJbnRlcmZhY2VcblxuaW50ZXJmYWNlIENvdW50ZWRIaXN0IHtcbiAgICBsYWJlbDogc3RyaW5nLFxuICAgIGNvdW50OiBudW1iZXJcbn1cblxudHlwZSBSZW5kZXJEYXRhSW50ZXJmYWNlID0gQ291bnRlZEhpc3RbXVxuXG5cbi8qKlxuICogIERhdGEgZm9ybWF0dGluZyBmdW5jdGlvbnNcbiAqL1xuY29uc3QgdG9SZW5kZXJEYXRhID0gKG9iajoge1tzOiBzdHJpbmddOiBudW1iZXJ9KTogUmVuZGVyRGF0YUludGVyZmFjZSA9PiBPYmplY3Qua2V5cyhvYmopLm1hcCgoaywgaSkgPT4ge1xuICAgIHJldHVybiB7bGFiZWw6IGssIGNvdW50OiBvYmpba119XG59KVxuXG5jb25zdCB0b1N0cmluZ09yTnVtID0gKGE6c3RyaW5nKSA9PiB7XG4gICAgY29uc3QgbmEgPSArYVxuICAgIGlmIChpc05hTihuYSkpIHtcbiAgICAgICAgcmV0dXJuIGFcbiAgICB9XG4gICAgcmV0dXJuIG5hXG59XG5cbmNvbnN0IHNvcnRCeUxhYmVsID0gUi5zb3J0QnkoUi5jb21wb3NlKHRvU3RyaW5nT3JOdW0sIFIucHJvcCgnbGFiZWwnKSkpXG5jb25zdCBzb3J0QnlDb3VudCA9IFIuc29ydEJ5KFIucHJvcCgnY291bnQnKSlcblxuY29uc3QgdG9PcmRlcmVkUmVuZGVyID0gUi5jb21wb3NlKFxuICAgIFIucmV2ZXJzZSxcbiAgICAvLyBAdHMtaWdub3JlIC0tIFRPRE86IGZpeFxuICAgIHNvcnRCeUNvdW50LFxuICAgIHRvUmVuZGVyRGF0YVxuKVxuXG5leHBvcnQgY2xhc3MgQ29ycHVzSGlzdG9ncmFtPFQ+IGV4dGVuZHMgVkNvbXBvbmVudDxUPiB7XG5cbiAgICBjc3NfbmFtZSA9ICcnXG5cbiAgICBzdGF0aWMgZXZlbnRzID0ge31cblxuICAgIF9jdXJyZW50ID0ge1xuICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgaGVpZ2h0OiBudWxsLFxuICAgICAgICAgICAgd2lkdGg6IG51bGxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEQzIENPTVBPTkVOVFNcbiAgICBzdmc6IEQzU2VsXG5cbiAgICBvcHRpb25zOiB7XG4gICAgICAgIG1hcmdpbjogTWFyZ2luSW5mb1xuICAgICAgICBiYXJXaWR0aDogbnVtYmVyXG4gICAgICAgIHdpZHRoOiBudW1iZXJcbiAgICAgICAgaGVpZ2h0OiBudW1iZXJcbiAgICAgICAgdmFsOiBzdHJpbmdcbiAgICAgICAgeExhYmVsUm90OiBudW1iZXJcbiAgICAgICAgeExhYmVsT2Zmc2V0OiBudW1iZXJcbiAgICAgICAgeUxhYmVsT2Zmc2V0OiBudW1iZXJcbiAgICB9XG5cbiAgICBheGVzID0ge1xuICAgICAgICB4OiBkMy5zY2FsZUJhbmQoKSxcbiAgICAgICAgeTogZDMuc2NhbGVMaW5lYXIoKSxcbiAgICB9XG5cblxuICAgIGNvbnN0cnVjdG9yKGQzcGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zPXt9KSB7XG4gICAgICAgIHN1cGVyKGQzcGFyZW50LCBldmVudEhhbmRsZXIpXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1hcmdpbjoge1xuICAgICAgICAgICAgICAgIHRvcDogMTAsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogNTAsXG4gICAgICAgICAgICAgICAgbGVmdDogNDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiYXJXaWR0aDogMjUsXG4gICAgICAgICAgICB3aWR0aDogMTg1LFxuICAgICAgICAgICAgaGVpZ2h0OiAyMzAsXG4gICAgICAgICAgICB2YWw6IFwicG9zXCIsIC8vIENoYW5nZSBEZWZhdWx0LCBwYXNzIHRocm91Z2ggY29uc3RydWN0b3JcbiAgICAgICAgICAgIHhMYWJlbFJvdDogNDUsXG4gICAgICAgICAgICB4TGFiZWxPZmZzZXQ6IDE1LFxuICAgICAgICAgICAgeUxhYmVsT2Zmc2V0OiA1LFxuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdXBlckluaXRTVkcoKVxuICAgIH1cblxuICAgIG1ldGEoKTpNYXRjaGVkTWV0YVNlbGVjdGlvbnNcbiAgICBtZXRhKHZhbDpNYXRjaGVkTWV0YVNlbGVjdGlvbnMpOiB0aGlzXG4gICAgbWV0YSh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy52YWw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9wdGlvbnMudmFsID0gdmFsO1xuICAgICAgICB0aGlzLnVwZGF0ZSh0aGlzLl9kYXRhKVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIF9pbml0KCkge31cblxuICAgIHByaXZhdGUgY3JlYXRlWEF4aXMoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3Qgd2lkdGggPSBvcC53aWR0aCAtIG9wLm1hcmdpbi5sZWZ0IC0gb3AubWFyZ2luLnJpZ2h0XG5cbiAgICAgICAgdGhpcy5heGVzLnhcbiAgICAgICAgICAgIC5kb21haW4oUi5tYXAoUi5wcm9wKCdsYWJlbCcpLCBzZWxmLnJlbmRlckRhdGEpKVxuICAgICAgICAgICAgLnJhbmdlUm91bmQoWzAsIHdpZHRoXSlcbiAgICAgICAgICAgIC5wYWRkaW5nKDAuMSlcblxuICAgICAgICB0aGlzLl9jdXJyZW50LmNoYXJ0LndpZHRoID0gd2lkdGg7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVZQXhpcygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBvcC5oZWlnaHQgLSBvcC5tYXJnaW4udG9wIC0gb3AubWFyZ2luLmJvdHRvbVxuXG4gICAgICAgIHRoaXMuYXhlcy55XG4gICAgICAgICAgICAuZG9tYWluKFswLCArZDMubWF4KFIubWFwKFIucHJvcCgnY291bnQnKSwgc2VsZi5yZW5kZXJEYXRhKSldKVxuICAgICAgICAgICAgLnJhbmdlUm91bmQoW2hlaWdodCwgMF0pXG5cbiAgICAgICAgdGhpcy5fY3VycmVudC5jaGFydC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVBeGVzKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZVhBeGlzKClcbiAgICAgICAgdGhpcy5jcmVhdGVZQXhpcygpXG4gICAgfVxuXG4gICAgX3dyYW5nbGUoZGF0YTogRGF0YUludGVyZmFjZSkge1xuICAgICAgICBjb25zdCBvdXQgPSBkYXRhW3RoaXMub3B0aW9ucy52YWxdXG4gICAgICAgIHJldHVybiB0b09yZGVyZWRSZW5kZXIob3V0KVxuICAgIH1cblxuICAgIHdpZHRoKCk6bnVtYmVyXG4gICAgd2lkdGgodmFsOm51bWJlcik6dGhpc1xuICAgIHdpZHRoKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW9ucy53aWR0aCA9IHZhbDtcbiAgICAgICAgdGhpcy51cGRhdGVXaWR0aCgpO1xuICAgICAgICB0aGlzLmNyZWF0ZVhBeGlzKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGhlaWdodCgpOm51bWJlclxuICAgIGhlaWdodCh2YWw6bnVtYmVyKTp0aGlzXG4gICAgaGVpZ2h0KHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub3B0aW9ucy5oZWlnaHQgPSB2YWw7XG4gICAgICAgIHRoaXMudXBkYXRlSGVpZ2h0KCk7XG4gICAgICAgIHRoaXMuY3JlYXRlWUF4aXMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVXaWR0aCgpIHtcbiAgICAgICAgdGhpcy5zdmcuYXR0cignd2lkdGgnLCB0aGlzLm9wdGlvbnMud2lkdGgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVIZWlnaHQoKSB7XG4gICAgICAgIHRoaXMuc3ZnLmF0dHIoJ2hlaWdodCcsIHRoaXMub3B0aW9ucy5oZWlnaHQpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaWdXaWR0aChkYXRhOiBSZW5kZXJEYXRhSW50ZXJmYWNlKSB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICByZXR1cm4gKGRhdGEubGVuZ3RoICogb3AuYmFyV2lkdGgpICsgb3AubWFyZ2luLmxlZnQgKyBvcC5tYXJnaW4ucmlnaHRcbiAgICB9XG5cbiAgICBfcmVuZGVyKGRhdGE6UmVuZGVyRGF0YUludGVyZmFjZSkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IGN1cnIgPSB0aGlzLl9jdXJyZW50O1xuXG4gICAgICAgIHRoaXMucGFyZW50Lmh0bWwoJycpXG4gICAgICAgIHRoaXMuc3ZnID0gdGhpcy5wYXJlbnRcblxuICAgICAgICB0aGlzLmNyZWF0ZUF4ZXMoKTtcbiAgICAgICAgdGhpcy53aWR0aCh0aGlzLmZpZ1dpZHRoKGRhdGEpKTtcbiAgICAgICAgdGhpcy51cGRhdGVIZWlnaHQoKTtcblxuICAgICAgICAvLyBJbml0aWFsaXplIGF4ZXNcbiAgICAgICAgY29uc3QgZyA9IHNlbGYuc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUoe3g6IG9wLm1hcmdpbi5sZWZ0LCB5Om9wLm1hcmdpbi50b3B9KSlcblxuICAgICAgICAvLyBIYWNrIHRvIGFsbG93IGNsZWFyaW5nIHRoaXMgaGlzdG9ncmFtcyB0byB3b3JrXG4gICAgICAgIHNlbGYuYmFzZSA9IGdcblxuICAgICAgICAvLyBGaXggYmVsb3cgZm9yIHBvc2l0aW9uYWwgY2hhbmdpbmdcbiAgICAgICAgICAgIGNvbnN0IGF4aXNCb3R0b20gPSBnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKHt4OiAwLCB5OmN1cnIuY2hhcnQuaGVpZ2h0fSkpXG4gICAgICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbShzZWxmLmF4ZXMueCkpXG5cbiAgICAgICAgICAgIGlmIChvcC52YWwgIT0gXCJvZmZzZXRcIikge1xuICAgICAgICAgICAgICAgIGF4aXNCb3R0b21cbiAgICAgICAgICAgICAgICAgICAgLnNlbGVjdEFsbChcInRleHRcIilcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIG9wLnlMYWJlbE9mZnNldCkgICAvLyBNb3ZlIGJlbG93IHRoZSBheGlzXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwieFwiLCBvcC54TGFiZWxPZmZzZXQpICAvLyBPZmZzZXQgdG8gdGhlIHJpZ2h0IGEgYml0XG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy5yb3RhdGUob3AueExhYmVsUm90KSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoc2VsZi5heGVzLnkpKVxuXG4gICAgICAgIGcuc2VsZWN0QWxsKFwiLmJhclwiKVxuICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgLmpvaW4oJ3JlY3QnKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImJhclwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHNlbGYuYXhlcy54KGQubGFiZWwpOyB9KVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHNlbGYuYXhlcy55KGQuY291bnQpOyB9KVxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBzZWxmLmF4ZXMueC5iYW5kd2lkdGgoKSlcbiAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGN1cnIuY2hhcnQuaGVpZ2h0IC0gc2VsZi5heGVzLnkoZC5jb3VudCk7IH0pXG4gICAgICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBrID0+IHNwYWN5Q29sb3JzLmNvbG9yU2NhbGVbb3AudmFsXShrLmxhYmVsKSlcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgJ2QzLXNlbGVjdGlvbi1tdWx0aSdcbmltcG9ydCB7ZDNTLCBEM1NlbH0gZnJvbSBcIi4uL2V0Yy9VdGlsXCI7XG5pbXBvcnQgeyBWQ29tcG9uZW50IH0gZnJvbSBcIi4vVmlzQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi4vZXRjL1NpbXBsZUV2ZW50SGFuZGxlclwiO1xuaW1wb3J0ICogYXMgdHAgZnJvbSBcIi4uL2V0Yy90eXBlc1wiXG5pbXBvcnQgJy4uL2V0Yy94ZDMnXG5cbi8vIEhlbHBlcnNcbmNvbnN0IGN1cnJNYXRjaElkeCA9IChlbGVtKSA9PiArKDxFbGVtZW50PmVsZW0ucGFyZW50Tm9kZSkuZ2V0QXR0cmlidXRlKCdtYXRjaGlkeCcpXG5jb25zdCBjdXJyUm93TnVtID0gKGVsZW0pID0+ICsoPEVsZW1lbnQ+ZWxlbS5wYXJlbnROb2RlKS5nZXRBdHRyaWJ1dGUoJ3Jvd251bScpXG5jb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSB4ID0+IGByZ2JhKDEyOCwgMCwgMTUwLCAkezAuNip4fSlgXG5cbmV4cG9ydCBjbGFzcyBDb3JwdXNJbnNwZWN0b3IgZXh0ZW5kcyBWQ29tcG9uZW50PHRwLkZhaXNzU2VhcmNoUmVzdWx0c1tdPntcbiAgICBjc3NfbmFtZSA9ICdjb3JwdXMtaW5zcGVjdG9yJztcbiAgICBfY3VycmVudDoge307XG5cbiAgICBfZGF0YTogdHAuRmFpc3NTZWFyY2hSZXN1bHRzW107IC8vIFRoZSBwYXNzZWQgZGF0YVxuXG4gICAgc3RhdGljIGV2ZW50cyA9IHtcbiAgICAgICAgcm93TW91c2VPdmVyOiBcIkNvcnB1c0luc3BlY3Rvcl9yb3dNb3VzZU92ZXJcIixcbiAgICAgICAgcm93TW91c2VPdXQ6IFwiQ29ycHVzSW5zcGVjdG9yX3Jvd01vdXNlT3V0XCIsXG4gICAgICAgIHJvd0NsaWNrOiBcIkNvcnB1c0luc3BlY3Rvcl9yb3dDbGlja1wiLFxuICAgICAgICByb3dEYmxDbGljazogXCJDb3JwdXNJbnNwZWN0b3Jfcm93RGJsQ2xpY2tcIixcbiAgICAgICAgY2VsbE1vdXNlT3ZlcjogXCJDb3JwdXNJbnNwZWN0b3JfY2VsbE1vdXNlT3ZlclwiLFxuICAgICAgICBjZWxsTW91c2VPdXQ6IFwiQ29ycHVzSW5zcGVjdG9yX2NlbGxNb3VzZU91dFwiLFxuICAgICAgICBjZWxsQ2xpY2s6IFwiQ29ycHVzSW5zcGVjdG9yX2NlbGxDbGlja1wiLFxuICAgICAgICBjZWxsRGJsQ2xpY2s6IFwiQ29ycHVzSW5zcGVjdG9yX2NlbGxEYmxDbGlja1wiLFxuICAgIH1cblxuICAgIG9wdGlvbnMgPSB7fVxuXG4gICAgLy8gQ09NUE9ORU5UU1xuICAgIGluc3BlY3RvclJvd3M6IEQzU2VsXG4gICAgaW5zcGVjdG9yQ2VsbHM6IEQzU2VsXG4gICAgc2NhbGVyID0gZDMuc2NhbGVQb3coKS5yYW5nZShbMCwwLjldKS5leHBvbmVudCgyKVxuXG4gICAgY29uc3RydWN0b3IoZDNQYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OlNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9uczoge30gPSB7fSkge1xuICAgICAgICBzdXBlcihkM1BhcmVudCwgZXZlbnRIYW5kbGVyKVxuICAgICAgICB0aGlzLnN1cGVySW5pdEhUTUwob3B0aW9ucylcbiAgICAgICAgdGhpcy5faW5pdCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVSb3dzKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5fZGF0YVxuXG4gICAgICAgIHRoaXMuaW5zcGVjdG9yUm93cyA9IHRoaXMuYmFzZS5zZWxlY3RBbGwoXCIuaW5zcGVjdG9yLXJvd1wiKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5qb2luKCdkaXYnKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2luc3BlY3Rvci1yb3cnLCB0cnVlKVxuICAgICAgICAgICAgLmF0dHJzKHtcbiAgICAgICAgICAgICAgICBtYXRjaElkeDogZCA9PiBkLmluZGV4LFxuICAgICAgICAgICAgICAgIHJvd051bTogKGQsIGkpID0+IGksXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKFwibW91c2VvdmVyXCIsIChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQ29ycHVzSW5zcGVjdG9yLmV2ZW50cy5yb3dNb3VzZU92ZXIsIHt9KVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZFRvb2x0aXAoKSB7XG4gICAgICAgIHRoaXMuaW5zcGVjdG9yQ2VsbHMgPSB0aGlzLmluc3BlY3RvckNlbGxzXG4gICAgICAgICAgICAuY2xhc3NlZCgnY2VsbHRvb2x0aXAnLCB0cnVlKVxuICAgICAgICAgICAgLmFwcGVuZCgnc3BhbicpXG4gICAgICAgICAgICAuY2xhc3NlZCgndG9vbHRpcHRleHQnLCB0cnVlKVxuICAgICAgICAgICAgLmh0bWwoKGQsIGksIG4pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbnRpdHlTdHIgPSBkLmlzX2VudCA/IFwiPGJyPkVudGl0eVwiIDogXCJcIlxuICAgICAgICAgICAgICAgIGNvbnN0IGF0dCA9ICg8RWxlbWVudD5uW2ldLnBhcmVudE5vZGUpLmdldEF0dHJpYnV0ZSgnYXR0Jykuc2xpY2UoMCwgNylcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRTdHIgPSBgPGJyPkF0dGVudGlvbjogJHthdHR9YFxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBQT1M6ICR7ZC5wb3MudG9Mb3dlckNhc2UoKX08YnI+REVQOiAke2QuZGVwLnRvTG93ZXJDYXNlKCl9YCArIGVudGl0eVN0ciArIGF0dFN0clxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUNlbGxzKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xuXG4gICAgICAgIHRoaXMuaW5zcGVjdG9yQ2VsbHMgPSB0aGlzLmluc3BlY3RvclJvd3Muc2VsZWN0QWxsKCcuaW5zcGVjdG9yLWNlbGwnKVxuICAgICAgICAgICAgLmRhdGEoKGQ6dHAuRmFpc3NTZWFyY2hSZXN1bHRzKSA9PiBkLnRva2VucylcbiAgICAgICAgICAgIC5qb2luKCdkaXYnKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2luc3BlY3Rvci1jZWxsJywgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKCdpbmRleC1vZmZzZXQnLCAoZCwgaSwgbjpIVE1MRWxlbWVudFtdKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hJZHggPSBjdXJyTWF0Y2hJZHgobltpXSlcbiAgICAgICAgICAgICAgICByZXR1cm4gaSAtIG1hdGNoSWR4IFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hdHRycyh7XG4gICAgICAgICAgICAgICAgcG9zOiBkID0+IGQucG9zLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgZGVwOiBkID0+IGQuZGVwLnRvTG93ZXJDYXNlKCksIFxuICAgICAgICAgICAgICAgIGlzX2VudDogZCA9PiBkLmlzX2VudFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gZC50b2tlbi5yZXBsYWNlKFwiXFx1MDEyMFwiLCBcIiBcIikpXG4gICAgICAgICAgICAuY2xhc3NlZCgnbWF0Y2hlZC1jZWxsJywgZCA9PiBkLmlzX21hdGNoKVxuXG4gICAgICAgIC8vIEhpZ2hsaWdodCB0aGUgY2VsbHMgYXBwcm9wcmlhdGVseVxuICAgICAgICB0aGlzLmluc3BlY3RvckNlbGxzLmVhY2goKGQsaSxuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpZHggPSBjdXJyTWF0Y2hJZHgobltpXSlcbiAgICAgICAgICAgIGlmIChpID09IGlkeCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dCA9IGQuaW53YXJkXG4gICAgICAgICAgICAgICAgY29uc3QgbWF4QXR0ID0gK2QzLm1heChhdHQpXG4gICAgICAgICAgICAgICAgY29uc3QgY3VyclJvdyA9IGN1cnJSb3dOdW0obltpXSlcbiAgICAgICAgICAgICAgICBjb25zdCBzY2FsZXIgPSBzZWxmLnNjYWxlci5kb21haW4oWzAsIG1heEF0dF0pXG5cbiAgICAgICAgICAgICAgICBkMy5zZWxlY3RBbGwoYC5pbnNwZWN0b3Itcm93W3Jvd251bT0nJHtjdXJyUm93fSddYClcbiAgICAgICAgICAgICAgICAgICAgLnNlbGVjdEFsbChgLmluc3BlY3Rvci1jZWxsYClcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdiYWNrZ3JvdW5kJywgKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiYWNrZ3JvdW5kQ29sb3Ioc2NhbGVyKGF0dFtpXSkpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhdHQnLCAoZCwgaSkgPT4gYXR0W2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHNlbGYuYWRkVG9vbHRpcCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVEYXRhKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZVJvd3MoKVxuICAgICAgICB0aGlzLmNyZWF0ZUNlbGxzKClcbiAgICB9XG5cbiAgICBfaW5pdCgpIHt9XG5cbiAgICBfd3JhbmdsZShkYXRhOiB0cC5GYWlzc1NlYXJjaFJlc3VsdHNbXSkge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBfcmVuZGVyKGRhdGE6IHRwLkZhaXNzU2VhcmNoUmVzdWx0c1tdKSB7XG4gICAgICAgIC8vIFJlbWVtYmVyIHRoYXQgdGhpcy5fZGF0YSBpcyBkZWZpbmVkIGluIHdyYW5nbGUgd2hpY2ggc2hvdWxkIGFsd2F5cyBiZSBjYWxsZWQgYmVmb3JlIHJlbmRlclxuICAgICAgICAvLyBhcyBpcyBkZWZpbmVkIGluIHRoZSB1cGRhdGUgZnVuY3Rpb25cbiAgICAgICAgdGhpcy51cGRhdGVEYXRhKClcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0ICogYXMgdHAgZnJvbSAnLi4vZXRjL3R5cGVzJ1xuaW1wb3J0IHsgRDNTZWwgfSBmcm9tICcuLi9ldGMvVXRpbCdcbmltcG9ydCB7IFZDb21wb25lbnQgfSBmcm9tICcuLi92aXMvVmlzQ29tcG9uZW50J1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4uL2V0Yy9TaW1wbGVFdmVudEhhbmRsZXJcIjtcbmltcG9ydCB7IFNWRyB9IGZyb20gXCIuLi9ldGMvU1ZHcGx1c1wiXG5pbXBvcnQgeyBzcGFjeUNvbG9ycyB9IGZyb20gXCIuLi9ldGMvU3BhY3lJbmZvXCJcbmltcG9ydCBcIi4uL2V0Yy94ZDNcIlxuXG4vLyBOZWVkIGFkZGl0b2luYWwgaGVpZ2h0IGluZm9ybWF0aW9uIHRvIHJlbmRlciBib3hlc1xuaW50ZXJmYWNlIEJhc2VEYXRhSW50ZXJmYWNlIGV4dGVuZHMgdHAuRmFpc3NTZWFyY2hSZXN1bHRzIHtcbiAgICBoZWlnaHQ6IG51bWJlclxufVxudHlwZSBEYXRhSW50ZXJmYWNlID0gQmFzZURhdGFJbnRlcmZhY2VbXVxuXG5pbnRlcmZhY2UgQ29sb3JNZXRhQmFzZURhdGEge1xuICAgIHBvczogc3RyaW5nXG4gICAgZGVwOiBzdHJpbmdcbiAgICBpc19lbnQ6IGJvb2xlYW5cbiAgICB0b2tlbjogc3RyaW5nXG59XG5cbnR5cGUgRGlzcGxheU9wdGlvbnMgPSBcInBvc1wiIHwgXCJkZXBcIiB8IFwiZW50XCJcblxuZnVuY3Rpb24gbWFuYWdlckRhdGEyTWF0RGF0YShkYXRhSW46IERhdGFJbnRlcmZhY2UsIGluZGV4T2Zmc2V0ID0gMCwgdG9QaWNrID0gWydwb3MnXSkge1xuXG4gICAgY29uc3Qgb3V0T2ZSYW5nZU9iajogQ29sb3JNZXRhQmFzZURhdGEgPSB7XG4gICAgICAgIHBvczogbnVsbCxcbiAgICAgICAgZGVwOiBudWxsLFxuICAgICAgICBpc19lbnQ6IG51bGwsXG4gICAgICAgIHRva2VuOiBudWxsLFxuICAgIH1cblxuICAgIGNvbnN0IGNob29zZVByb3BzID0gUi5waWNrKHRvUGljaylcblxuICAgIGNvbnN0IGRhdGFPdXQgPSBkYXRhSW4ubWFwKGQgPT4ge1xuICAgICAgICBjb25zdCB3b3JkSWR4ID0gZC5pbmRleCArIGluZGV4T2Zmc2V0O1xuICAgICAgICBpZiAoKHdvcmRJZHggPCAwKSB8fCAod29yZElkeCA+PSBkLnRva2Vucy5sZW5ndGgpKSB7XG4gICAgICAgICAgICByZXR1cm4gUi5hc3NvYygnaGVpZ2h0JywgZC5oZWlnaHQsIG91dE9mUmFuZ2VPYmopXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXdPYmogPSBjaG9vc2VQcm9wcyhkLnRva2Vuc1t3b3JkSWR4XSlcblxuICAgICAgICByZXR1cm4gUi5hc3NvYygnaGVpZ2h0JywgZC5oZWlnaHQsIG5ld09iailcbiAgICB9KVxuXG4gICAgcmV0dXJuIGRhdGFPdXRcbn1cblxuXG5leHBvcnQgY2xhc3MgQ29ycHVzTWF0TWFuYWdlciBleHRlbmRzIFZDb21wb25lbnQ8RGF0YUludGVyZmFjZT57XG4gICAgY3NzX25hbWUgPSAnY29ycHVzLW1hdC1jb250YWluZXInXG4gICAgb3B0aW9ucyA9IHtcbiAgICAgICAgY2VsbFdpZHRoOiAxMCxcbiAgICAgICAgdG9QaWNrOiBbJ3BvcyddLFxuICAgICAgICBpZHhzOiBbLTEsIDAsIDFdLFxuICAgICAgICBkaXZIb3Zlcjoge1xuICAgICAgICAgICAgd2lkdGg6IDYwLFxuICAgICAgICAgICAgaGVpZ2h0OiA0MCBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBldmVudHMgPSB7XG4gICAgICAgIG1vdXNlT3ZlcjogXCJDb3JwdXNNYXRNYW5hZ2VyX01vdXNlT3ZlclwiLFxuICAgICAgICBtb3VzZU91dDogXCJDb3JwdXNNYXRNYW5hZ2VyX01vdXNlT3V0XCIsXG4gICAgICAgIGNsaWNrOiBcIkNvcnB1c01hdE1hbmFnZXJfQ2xpY2tcIixcbiAgICAgICAgZGJsQ2xpY2s6IFwiQ29ycHVzTWF0TWFuYWdlcl9EYmxDbGlja1wiLFxuICAgICAgICByZWN0TW91c2VPdmVyOiBcIkNvcnB1c01hdE1hbmFnZXJfUmVjdE1vdXNlT3ZlclwiLFxuICAgICAgICByZWN0TW91c2VPdXQ6IFwiQ29ycHVzTWF0TWFuYWdlcl9SZWN0TW91c2VPdXRcIixcbiAgICAgICAgcmVjdENsaWNrOiBcIkNvcnB1c01hdE1hbmFnZXJfUmVjdENsaWNrXCIsXG4gICAgICAgIHJlY3REYmxDbGljazogXCJDb3JwdXNNYXRNYW5hZ2VyX1JlY3REYmxDbGlja1wiLFxuICAgIH1cblxuICAgIC8vIFRoZSBkMyBjb21wb25lbnRzIHRoYXQgYXJlIHNhdmVkIHRvIG1ha2UgcmVuZGVyaW5nIGZhc3RlclxuICAgIGNvcnB1c01hdHM6IEQzU2VsXG4gICAgcm93R3JvdXBzOiBEM1NlbFxuICAgIGRpdkhvdmVyOiBEM1NlbFxuXG4gICAgX2N1cnJlbnQgPSB7fVxuICAgIHJvd0Nzc05hbWUgPSAnaW5kZXgtbWF0Y2gtcmVzdWx0cydcbiAgICBjZWxsQ3NzTmFtZSA9ICdpbmRleC1jZWxsLXJlc3VsdCdcblxuICAgIF9kYXRhOiBEYXRhSW50ZXJmYWNlXG5cbiAgICBzdGF0aWMgY29sb3JTY2FsZTogdHAuQ29sb3JNZXRhU2NhbGUgPSBzcGFjeUNvbG9ycy5jb2xvclNjYWxlO1xuXG4gICAgLy8gU2VsZWN0aW9uc1xuICAgIGNvbnN0cnVjdG9yKGQzcGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgc3VwZXIoZDNwYXJlbnQsIGV2ZW50SGFuZGxlcilcbiAgICAgICAgdGhpcy5pZHhzID0gWy0xLCAwLCAxXTtcbiAgICAgICAgdGhpcy5zdXBlckluaXRIVE1MKG9wdGlvbnMpXG4gICAgICAgIHRoaXMuX2luaXQoKVxuICAgIH1cblxuICAgIGdldCBpZHhzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmlkeHM7XG4gICAgfVxuXG4gICAgc2V0IGlkeHModmFsOiBudW1iZXJbXSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuaWR4cyA9IHZhbFxuICAgIH1cblxuICAgIC8vIENyZWF0ZSBzdGF0aWMgZG9tIGVsZW1lbnRzXG4gICAgX2luaXQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmNvcnB1c01hdHMgPSB0aGlzLmJhc2Uuc2VsZWN0QWxsKCcuY29ycHVzLW1hdCcpXG4gICAgICAgIHRoaXMucm93R3JvdXBzID0gdGhpcy5jb3JwdXNNYXRzLnNlbGVjdEFsbChgLiR7dGhpcy5yb3dDc3NOYW1lfWApXG4gICAgICAgIHRoaXMuZGl2SG92ZXIgPSB0aGlzLmJhc2UuYXBwZW5kKCdkaXYnKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ21hdC1ob3Zlci1kaXNwbGF5JywgdHJ1ZSlcbiAgICAgICAgICAgIC5jbGFzc2VkKCd0ZXh0LWNlbnRlcicsIHRydWUpXG4gICAgICAgICAgICAuc3R5bGUoJ3dpZHRoJywgU3RyaW5nKHRoaXMub3B0aW9ucy5kaXZIb3Zlci53aWR0aCkgKyAncHgnKVxuICAgICAgICAgICAgLnN0eWxlKCdoZWlnaHQnLCBTdHJpbmcodGhpcy5vcHRpb25zLmRpdkhvdmVyLmhlaWdodCkgKyAncHgnKVxuXG4gICAgICAgIHRoaXMuZGl2SG92ZXIuYXBwZW5kKCdwJylcbiAgICB9XG5cbiAgICBwaWNrKHZhbDogRGlzcGxheU9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnRvUGljayA9IFt2YWxdXG4gICAgICAgIHRoaXMucmVkcmF3KClcbiAgICB9XG5cbiAgICBhZGRSaWdodCgpIHtcbiAgICAgICAgY29uc3QgYWRkZWRJZHggPSBSLmxhc3QodGhpcy5pZHhzKSArIDE7XG4gICAgICAgIHRoaXMuaWR4cy5wdXNoKGFkZGVkSWR4KVxuICAgICAgICB0aGlzLmFkZENvcnB1c01hdChhZGRlZElkeCwgXCJyaWdodFwiKVxuICAgIH1cblxuICAgIGFkZExlZnQoKSB7XG4gICAgICAgIGNvbnN0IGFkZGVkSWR4ID0gdGhpcy5pZHhzWzBdIC0gMTtcbiAgICAgICAgY29uc3QgYWRkRGVjcmVtZW50ZWRIZWFkOiAoeDogbnVtYmVyW10pID0+IG51bWJlcltdID0geCA9PiBSLmluc2VydCgwLCBSLmhlYWQoeCkgLSAxKSh4KVxuICAgICAgICB0aGlzLmlkeHMgPSBhZGREZWNyZW1lbnRlZEhlYWQodGhpcy5pZHhzKVxuICAgICAgICB0aGlzLmFkZENvcnB1c01hdChhZGRlZElkeCwgXCJsZWZ0XCIpXG4gICAgfVxuXG4gICAga2lsbFJpZ2h0KCkge1xuICAgICAgICB0aGlzLmtpbGwoTWF0aC5tYXgoLi4udGhpcy5pZHhzKSlcbiAgICB9XG5cbiAgICBraWxsTGVmdCgpIHtcbiAgICAgICAgdGhpcy5raWxsKE1hdGgubWluKC4uLnRoaXMuaWR4cykpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGVkZ2UgdmFsdWUgZnJvbSBjb250YWluZWQgaW5kZXhlc1xuICAgICAqXG4gICAgICogQHBhcmFtIGQgSW5kZXggdG8gcmVtb3ZlXG4gICAgICovXG4gICAga2lsbChkOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKGQgIT0gMCkge1xuICAgICAgICAgICAgaWYgKGQgPT0gTWF0aC5taW4oLi4udGhpcy5pZHhzKSB8fCBkID09IE1hdGgubWF4KC4uLnRoaXMuaWR4cykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlkeHMgPSBSLndpdGhvdXQoW2RdLCB0aGlzLmlkeHMpXG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlLnNlbGVjdEFsbChgLm9mZnNldC0ke2R9YCkucmVtb3ZlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIF93cmFuZ2xlKGRhdGE6IERhdGFJbnRlcmZhY2UpIHtcbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG5cbiAgICBkYXRhKHZhbD86IERhdGFJbnRlcmZhY2UpIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2RhdGEgPSB2YWw7XG4gICAgICAgIHRoaXMuX3VwZGF0ZURhdGEoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIG1haW4gcmVuZGVyaW5nIGNvZGUsIGNhbGxlZCB3aGVuZXZlciB0aGUgZGF0YSBjaGFuZ2VzLlxuICAgICAqL1xuICAgIHByaXZhdGUgX3VwZGF0ZURhdGEoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcblxuICAgICAgICB0aGlzLmJhc2Uuc2VsZWN0QWxsKCcuY29ycHVzLW1hdCcpLnJlbW92ZSgpXG5cbiAgICAgICAgdGhpcy5pZHhzLmZvckVhY2goKGlkeE9mZnNldCwgaSkgPT4ge1xuICAgICAgICAgICAgc2VsZi5hZGRDb3JwdXNNYXQoaWR4T2Zmc2V0KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhbm90aGVyIHdvcmQncyBtZXRhIGluZm9ybWF0aW9uIG1hdHJpeCBjb2x1bW4gdG8gZWl0aGVyIHNpZGUgb2YgdGhlIGluZGV4XG4gICAgICpcbiAgICAgKiBAcGFyYW0gaWR4T2Zmc2V0IERpc3RhbmNlIG9mIHdvcmQgZnJvbSBtYXRjaGVkIHdvcmQgaW4gdGhlIHNlbnRlbmNlXG4gICAgICogQHBhcmFtIHRvVGhlIEluZGljYXRlcyBhZGRpbmcgdG8gdGhlIFwibGVmdFwiIG9yIHRvIHRoZSBcInJpZ2h0XCIgb2YgdGhlIGluZGV4XG4gICAgICovXG4gICAgYWRkQ29ycHVzTWF0KGlkeE9mZnNldDogbnVtYmVyLCB0b1RoZTogXCJyaWdodFwiIHwgXCJsZWZ0XCIgPSBcInJpZ2h0XCIpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCBib3hXaWR0aCA9IG9wLmNlbGxXaWR0aCAqIG9wLnRvUGljay5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGJveEhlaWdodCA9IFIuc3VtKFIubWFwKFIucHJvcCgnaGVpZ2h0JyksIHRoaXMuX2RhdGEpKVxuXG4gICAgICAgIGxldCBjb3JwdXNNYXQ7XG5cbiAgICAgICAgaWYgKHRvVGhlID09IFwicmlnaHRcIikge1xuICAgICAgICAgICAgY29ycHVzTWF0ID0gdGhpcy5iYXNlLmFwcGVuZCgnZGl2JylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0b1RoZSA9PSBcImxlZnRcIikge1xuICAgICAgICAgICAgY29ycHVzTWF0ID0gdGhpcy5iYXNlLmluc2VydCgnZGl2JywgXCI6Zmlyc3QtY2hpbGRcIilcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwidG9UaGUgbXVzdCBoYXZlIGFyZ3VtZW50IG9mICdsZWZ0JyBvciAncmlnaHQnXCIpXG4gICAgICAgIH1cblxuICAgICAgICBjb3JwdXNNYXQgPSBjb3JwdXNNYXRcbiAgICAgICAgICAgIC5kYXRhKFtpZHhPZmZzZXRdKVxuICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgYGNvcnB1cy1tYXQgb2Zmc2V0LSR7aWR4T2Zmc2V0fWApXG4gICAgICAgICAgICAuYXR0cignb2Zmc2V0JywgaWR4T2Zmc2V0KVxuICAgICAgICAgICAgLmFwcGVuZCgnc3ZnJylcbiAgICAgICAgICAgIC5hdHRycyh7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGJveFdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogYm94SGVpZ2h0LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKENvcnB1c01hdE1hbmFnZXIuZXZlbnRzLm1vdXNlT3ZlciwgeyBpZHg6IGksIG9mZnNldDogZCwgdmFsOiBzZWxmLm9wdGlvbnMudG9QaWNrWzBdIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdtb3VzZW91dCcsIChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIudHJpZ2dlcihDb3JwdXNNYXRNYW5hZ2VyLmV2ZW50cy5tb3VzZU91dCwgeyBpZHg6IGksIG9mZnNldDogZCB9KVxuICAgICAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmFkZFJvd0dyb3VwKGNvcnB1c01hdClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBtYXQgVGhlIGJhc2UgZGl2IG9uIHdoaWNoIHRvIGFkZCBtYXRyaWNlcyBhbmQgcm93c1xuICAgICAqL1xuICAgIGFkZFJvd0dyb3VwKG1hdDogRDNTZWwpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuXG4gICAgICAgIGNvbnN0IGhlaWdodHMgPSBSLm1hcChSLnByb3AoJ2hlaWdodCcpLCB0aGlzLl9kYXRhKVxuXG4gICAgICAgIGNvbnN0IFtoZWlnaHRTdW0sIHJhd0hlaWdodExpc3RdID0gUi5tYXBBY2N1bSgoeCwgeSkgPT4gW1IuYWRkKHgsIHkpLCBSLmFkZCh4LCB5KV0sIDAsIGhlaWdodHMpXG4gICAgICAgIGNvbnN0IGZpeExpc3Q6ICh4OiBudW1iZXJbXSkgPT4gbnVtYmVyW10gPSBSLmNvbXBvc2UoUi5kcm9wTGFzdCgxKSxcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIFIucHJlcGVuZCgwKVxuICAgICAgICApXG4gICAgICAgIGNvbnN0IGhlaWdodExpc3QgPSBmaXhMaXN0KHJhd0hlaWdodExpc3QpXG5cbiAgICAgICAgY29uc3Qgcm93R3JvdXAgPSBtYXQuc2VsZWN0QWxsKGAuJHtzZWxmLnJvd0Nzc05hbWV9YClcbiAgICAgICAgICAgIC5kYXRhKGQgPT4gbWFuYWdlckRhdGEyTWF0RGF0YShzZWxmLl9kYXRhLCBkLCBvcC50b1BpY2spKVxuICAgICAgICAgICAgLmpvaW4oXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke3NlbGYucm93Q3NzTmFtZX0gJHtzZWxmLnJvd0Nzc05hbWV9LSR7aX1gXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmF0dHIoXCJyb3ctbnVtXCIsIChkLGkpID0+IGkpXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBkID0+IGQuaGVpZ2h0KVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBvdXQgPSBTVkcudHJhbnNsYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgeTogaGVpZ2h0TGlzdFtpXSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHJldHVybiBvdXRcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgb3AudG9QaWNrLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICAgICAgICBzZWxmLmFkZFJlY3Qocm93R3JvdXAsIDAsIHByb3ApXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkUmVjdChnOiBEM1NlbCwgeFNoaWZ0OiBudW1iZXIsIHByb3A6IHN0cmluZykge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuXG4gICAgICAgIGNvbnN0IHJlY3RzID0gZy5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgICAgLmF0dHJzKHtcbiAgICAgICAgICAgICAgICB3aWR0aDogb3AuY2VsbFdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogZCA9PiBkLmhlaWdodCAtIDMsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU1ZHLnRyYW5zbGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiB4U2hpZnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAxLjUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IENvcnB1c01hdE1hbmFnZXIuY29sb3JTY2FsZVtwcm9wXShkW3Byb3BdKSlcblxuICAgICAgICBcbiAgICAgICAgY29uc3QgZ2V0QmFzZVggPSAoKSA9PiAoPEhUTUxFbGVtZW50PnNlbGYuYmFzZS5ub2RlKCkpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnRcbiAgICAgICAgY29uc3QgZ2V0QmFzZVkgPSAoKSA9PiAoPEhUTUxFbGVtZW50PnNlbGYuYmFzZS5ub2RlKCkpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcFxuXG4gICAgICAgIGcub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5kaXZIb3Zlci5zdHlsZSgndmlzaWJpbGl0eScsICd2aXNpYmxlJylcbiAgICAgICAgICAgICAgICAvLyBHZXQgb2Zmc2V0XG4gICAgICAgICAgICAgICAgY29uc3QgY29sID0gZDMuc2VsZWN0KHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlKSAvLyBDb2x1bW5cbiAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXQgPSArY29sLmF0dHIoJ29mZnNldCcpXG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihDb3JwdXNNYXRNYW5hZ2VyLmV2ZW50cy5yZWN0TW91c2VPdmVyLCB7aWR4OiBpLCBvZmZzZXQ6IG9mZnNldH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5kaXZIb3Zlci5zdHlsZSgndmlzaWJpbGl0eScsICdoaWRkZW4nKVxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbCA9IGQzLnNlbGVjdCh0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZSkgLy8gQ29sdW1uXG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gK2NvbC5hdHRyKCdvZmZzZXQnKVxuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQ29ycHVzTWF0TWFuYWdlci5ldmVudHMucmVjdE1vdXNlT3V0LCB7aWR4OiBpLCBvZmZzZXQ6IG9mZnNldH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdtb3VzZW1vdmUnLCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW91c2UgPSBkMy5tb3VzZShzZWxmLmJhc2Uubm9kZSgpKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRpdk9mZnNldCA9IFszLCAzXVxuICAgICAgICAgICAgICAgIGNvbnN0IGxlZnQgPSBtb3VzZVswXSArIGdldEJhc2VYKCkgLSAob3AuZGl2SG92ZXIud2lkdGggKyBkaXZPZmZzZXRbMF0pXG4gICAgICAgICAgICAgICAgY29uc3QgdG9wID0gbW91c2VbMV0gKyBnZXRCYXNlWSgpIC0gKG9wLmRpdkhvdmVyLmhlaWdodCArIGRpdk9mZnNldFsxXSlcbiAgICAgICAgICAgICAgICBzZWxmLmRpdkhvdmVyXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnbGVmdCcsIFN0cmluZyhsZWZ0KSArICdweCcpXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgndG9wJywgU3RyaW5nKHRvcCkgKyAncHgnKVxuICAgICAgICAgICAgICAgICAgICAuc2VsZWN0QWxsKCdwJylcbiAgICAgICAgICAgICAgICAgICAgLnRleHQoZFtwcm9wXSlcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGRhdGEgRGF0YSB0byBkaXNwbGF5XG4gICAgICovXG4gICAgX3JlbmRlcihkYXRhOiBEYXRhSW50ZXJmYWNlKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZURhdGEoKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0ICdkMy1hcnJheSdcbmltcG9ydCAqIGFzIGF1IGZyb20gJy4uL2V0Yy9hcnJheVV0aWxzJ1xuaW1wb3J0ICogYXMgdGYgZnJvbSAnQHRlbnNvcmZsb3cvdGZqcydcbmltcG9ydCB7IFR5cGVkQXJyYXkgfSBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUvZGlzdC90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWRnZSB7XG4gICAgaTogbnVtYmVyLCAvLyBTb3VyY2UgaW5kZXhcbiAgICBqOiBudW1iZXIsIC8vIFRhcmdldCBpbmRleFxuICAgIHY6IG51bWJlciwgLy8gVmFsdWVcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGRhdGEgbWF0cml4IHRvIG5lY2Vzc2FyeSBkYXRhIGFycmF5IHRvIHBhc3MgdG8gU1ZHIGNvbm5lY3Rpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0VkZ2VzIChkYXRhOm51bWJlcltdW10sIGN1dG9mZkFtdD0xKSA6IEVkZ2VbXSB7XG4gICAgbGV0IG91dEFycjogRWRnZVtdID0gW107XG4gICAgbGV0IGN1dG9mZjogbnVtYmVyO1xuICAgIGRhdGEuZm9yRWFjaCgocm93LCBpKSA9PiB7XG4gICAgICAgIGN1dG9mZiA9IGN1dG9mZkFtdCAqIGQzLnN1bShyb3cpO1xuICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgIGNvbnN0IHNvcnRlZEFycjphdS5Tb3J0QXJyYXkgPSBhdS5zb3J0V2l0aEluZGljZXMocm93KTtcblxuICAgICAgICBzb3J0ZWRBcnIuYXJyLmZvckVhY2goKHYsaikgPT4ge1xuICAgICAgICAgICAgaWYgKGNvdW50ZXIgPCBjdXRvZmYpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvYmo6IEVkZ2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIGk6IGksXG4gICAgICAgICAgICAgICAgICAgIGo6IHNvcnRlZEFyci5zb3J0SW5kaWNlc1tqXSxcbiAgICAgICAgICAgICAgICAgICAgdjogdixcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3V0QXJyLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICBjb3VudGVyICs9IHY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgcmV0dXJuIG91dEFycjtcbn1cbi8qKlxuICogQ2xhc3MgZm9yIGltcGxlbWVudGluZyBvcGVyYXRpb25zIG9uIEF0dGVudGlvbkdyYXBoIGltcGxlbWVudGF0aW9uLiBcbiAqIENsb3NlbHkgdGllZCB0byBbW0F0dGVudGlvbkNvbm5lY3Rvcl1dXG4gKi9cbmV4cG9ydCBjbGFzcyBFZGdlRGF0YSB7XG4gICAgcmVhZG9ubHkgdGVuc0RhdGE6dGYuVGVuc29yO1xuXG4gICAgY29uc3RydWN0b3IgKHB1YmxpYyBkYXRhOm51bWJlcltdW10pe1xuICAgICAgICB0aGlzLnRlbnNEYXRhID0gdGYudGVuc29yKGRhdGEpO1xuICAgIH1cblxuICAgIG1pbihheGlzPzpudW1iZXIpOlR5cGVkQXJyYXkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZW5zRGF0YS5taW4oYXhpcykuZGF0YVN5bmMoKTtcbiAgICB9XG5cbiAgICBtYXgoYXhpcz86bnVtYmVyKTpUeXBlZEFycmF5e1xuICAgICAgICByZXR1cm4gdGhpcy50ZW5zRGF0YS5tYXgoYXhpcykuZGF0YVN5bmMoKTtcbiAgICB9XG5cbiAgICBleHRlbnQoYXhpcz86bnVtYmVyKTpudW1iZXJbXVtdIHtcbiAgICAgICAgcmV0dXJuIGQzLnppcCh0aGlzLm1pbihheGlzKSwgdGhpcy5tYXgoYXhpcykpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRm9ybWF0IHRoZSBkYXRhIHRvIHNlbmQgdG8gU1ZHIGNoYXJ0LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBhY2N1bXVsYXRlVGhyZXNoIC0gQSBmbG9hdCBiZXR3ZWVuIDAgYW5kIDEsIGluZGljYXRpbmcgdGhlIGFtb3VudCBvZiB3ZWlnaHQgdG8gZGlzcGxheS4gRGVmYXVsdHMgdG8gMC43LlxuICAgICAqL1xuICAgIGZvcm1hdCAoYWNjdW11bGF0ZVRocmVzaD0wLjcpOkVkZ2VbXSB7XG4gICAgICAgIHJldHVybiB0b0VkZ2VzKHRoaXMuZGF0YSwgYWNjdW11bGF0ZVRocmVzaCk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0ICogYXMgUiBmcm9tIFwicmFtZGFcIlxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCJcbmltcG9ydCB7IFZDb21wb25lbnQgfSBmcm9tIFwiLi9WaXNDb21wb25lbnRcIjtcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gXCIuLi9ldGMvU2ltcGxlRXZlbnRIYW5kbGVyXCI7XG5pbXBvcnQgeyBEM1NlbCB9IGZyb20gXCIuLi9ldGMvVXRpbFwiO1xuaW1wb3J0ICogYXMgdHAgZnJvbSBcIi4uL2V0Yy90eXBlc1wiXG5cbnR5cGUgaW5mb0V2ZW50RnJvbUkgPSAoc2VsOiBEM1NlbCwgaTogbnVtYmVyKSA9PiB0cC5Ub2tlbkV2ZW50XG50eXBlIGluZm9FbWJlZGRpbmdFdmVudEZyb21JID0gKHNlbDogRDNTZWwsIGk6IG51bWJlciwgZW1iZWQ6IG51bWJlcltdKSA9PiB0cC5Ub2tlbkVtYmVkZGluZ0V2ZW50XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUZXh0VG9rZW5zIGV4dGVuZHMgVkNvbXBvbmVudDx0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW10+e1xuXG4gICAgYWJzdHJhY3QgY3NzX25hbWU6IHN0cmluZ1xuICAgIGFic3RyYWN0IGhvdmVyX2Nzc19uYW1lOiBzdHJpbmdcbiAgICBhYnN0cmFjdCBzaWRlOiB0cC5TaWRlT3B0aW9uc1xuICAgIGVJbmZvOiBpbmZvRXZlbnRGcm9tSSA9IChzZWwsIGkpID0+IHsgcmV0dXJuIHsgc2VsOiBzZWwsIHNpZGU6IHRoaXMuc2lkZSwgaW5kOiBpIH0gfVxuICAgIGVFbWJlZGRpbmc6IGluZm9FbWJlZGRpbmdFdmVudEZyb21JID0gKHNlbCwgaSwgZW1iZWQpID0+IHsgcmV0dXJuIHsgc2VsOiBzZWwsIHNpZGU6IHRoaXMuc2lkZSwgaW5kOiBpLCBlbWJlZGRpbmdzOiBlbWJlZCB9IH1cbiAgICBkaXZIb3ZlcjogRDNTZWxcblxuICAgIHN0YXRpYyBldmVudHMgPSB7XG4gICAgICAgIHRva2VuTW91c2VPdmVyOiBcIlRleHRUb2tlbl9Ub2tlbk1vdXNlT3ZlclwiLFxuICAgICAgICB0b2tlbk1vdXNlT3V0OiBcIlRleHRUb2tlbl9Ub2tlbk1vdXNlT3V0XCIsXG4gICAgICAgIHRva2VuQ2xpY2s6IFwiVGV4dFRva2VuX1Rva2VuQ2xpY2tcIixcbiAgICAgICAgdG9rZW5EYmxDbGljazogXCJUZXh0VG9rZW5fVG9rZW5EYmxDbGlja1wiLFxuICAgIH07XG5cbiAgICBkYXRhOiB0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW107XG5cbiAgICBfY3VycmVudDoge307XG5cbiAgICBvcHRpb25zID0ge1xuICAgICAgICBib3hoZWlnaHQ6IDI2LFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIGRpdkhvdmVyOiB7XG4gICAgICAgICAgICB3aWR0aDogMTUwLFxuICAgICAgICAgICAgaGVpZ2h0OiAxNTAsXG4gICAgICAgICAgICBvZmZzZXQ6IFszLCAzXSxcbiAgICAgICAgICAgIHRleHRJbmZvOiBcIldvdWxkIHByZWRpY3QuLi5cIlxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICB0ZXh0Qm94ZXM6IEQzU2VsXG5cbiAgICBjb25zdHJ1Y3RvcihkM1BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9uczoge30gPSB7fSkge1xuICAgICAgICBzdXBlcihkM1BhcmVudCwgZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgdGhpcy5zdXBlckluaXRIVE1MKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIG1hc2sobWFza0luZHM6IG51bWJlcltdKSB7XG4gICAgICAgIHRoaXMucGFyZW50LnNlbGVjdEFsbChgLiR7dGhpcy5jc3NfbmFtZX1gKVxuICAgICAgICAgICAgLmVhY2goKGQsIGksIG4pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWwgPSBkMy5zZWxlY3QobltpXSlcbiAgICAgICAgICAgICAgICBzZWwuY2xhc3NlZChcIm1hc2tlZC10b2tlblwiLCBfLmluY2x1ZGVzKG1hc2tJbmRzLCBpKSlcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0RW1iZWRkaW5nKGluZDogbnVtYmVyKTogdHAuRnVsbFNpbmdsZVRva2VuSW5mbyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhW2luZF1cbiAgICB9XG5cbiAgICBfaW5pdCgpIHsgfVxuXG4gICAgX3dyYW5nbGUoZGF0YTogdHAuRnVsbFNpbmdsZVRva2VuSW5mb1tdKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuX2RhdGE7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgIH1cblxuICAgIF9kaXZQbGFjZW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IGdldEJhc2VYID0gKCkgPT4gKDxIVE1MRWxlbWVudD5zZWxmLmJhc2Uubm9kZSgpKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0XG4gICAgICAgIGNvbnN0IGdldEJhc2VZID0gKCkgPT4gKDxIVE1MRWxlbWVudD5zZWxmLmJhc2Uubm9kZSgpKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3BcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgY29uc3QgbW91c2UgPSBkMy5tb3VzZShzZWxmLmJhc2Uubm9kZSgpKVxuICAgICAgICBjb25zdCBkaXZPZmZzZXQgPSBbMywgM11cbiAgICAgICAgY29uc3QgbGVmdCA9IG1vdXNlWzBdICsgZ2V0QmFzZVgoKSAtIChvcC5kaXZIb3Zlci53aWR0aCArIGRpdk9mZnNldFswXSlcbiAgICAgICAgY29uc3QgdG9wID0gbW91c2VbMV0gKyBnZXRCYXNlWSgpICsgZGl2T2Zmc2V0WzFdXG4gICAgICAgIHJldHVybiBbbGVmdCwgdG9wXVxuICAgIH1cblxuICAgIF9yZW5kZXIoZGF0YTogdHAuRnVsbFNpbmdsZVRva2VuSW5mb1tdKSB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgLy8gUmVzZXQgdG9rZW4gZGlzcGxheVxuICAgICAgICB0aGlzLmJhc2Uuc2VsZWN0QWxsKFwiKlwiKS5yZW1vdmUoKVxuXG4gICAgICAgIHRoaXMuZGl2SG92ZXIgPSB0aGlzLmJhc2UuYXBwZW5kKCdkaXYnKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ3Rvay1pbmZvJywgdHJ1ZSlcbiAgICAgICAgICAgIC5jbGFzc2VkKCdtYXQtaG92ZXItZGlzcGxheScsIHRydWUpXG4gICAgICAgICAgICAuY2xhc3NlZCh0aGlzLmhvdmVyX2Nzc19uYW1lLCB0cnVlKVxuICAgICAgICAgICAgLnN0eWxlKCd3aWR0aCcsIFN0cmluZyh0aGlzLm9wdGlvbnMuZGl2SG92ZXIud2lkdGgpICsgJ3B4JylcbiAgICAgICAgICAgIC5zdHlsZSgnaGVpZ2h0JywgU3RyaW5nKHRoaXMub3B0aW9ucy5kaXZIb3Zlci5oZWlnaHQpICsgJ3B4JylcblxuICAgICAgICB0aGlzLmRpdkhvdmVyXG4gICAgICAgICAgICAuYXBwZW5kKCdwJylcbiAgICAgICAgICAgIC5jbGFzc2VkKCdwLWluZm8nLCB0cnVlKVxuICAgICAgICAgICAgLnN0eWxlKCdmb250LXdlaWdodCcsICdib2xkJylcbiAgICAgICAgICAgIC50ZXh0KG9wLmRpdkhvdmVyLnRleHRJbmZvKVxuXG5cbiAgICAgICAgLy8gQWRkIGJsYW5rIGRpdnNcbiAgICAgICAgY29uc29sZS5sb2coYEludGVybmFsIG9mZnNldCAoJHt0aGlzLnNpZGV9KTogYCwgb3Aub2Zmc2V0KTtcbiAgICAgICAgY29uc3QgYmxhbmtEaXZzID0gdGhpcy5iYXNlLnNlbGVjdEFsbChgLmJsYW5rLXRleHQtYm94YClcblxuICAgICAgICBibGFua0RpdnMuZGF0YShSLnJhbmdlKDAsIG9wLm9mZnNldCkpXG4gICAgICAgICAgICAuam9pbihcImRpdlwiKVxuICAgICAgICAgICAgLmNsYXNzZWQoXCJibGFuay10ZXh0LWJveFwiLCB0cnVlKVxuICAgICAgICAgICAgLmNsYXNzZWQoXCJ0b2tlblwiLCB0cnVlKVxuICAgICAgICAgICAgLnN0eWxlKFwiaGVpZ2h0XCIsIG9wLmJveGhlaWdodCArICdweCcpXG4gICAgICAgICAgICAudGV4dCgoZCkgPT4gXCIgIFwiKVxuXG4gICAgICAgIC8vIFJlbmRlciBub3JtYWwgdGV4dCBib3ggZGF0YVxuICAgICAgICBzZWxmLnRleHRCb3hlcyA9IDxEM1NlbD50aGlzLmJhc2Uuc2VsZWN0QWxsKGAuJHt0aGlzLmNzc19uYW1lfWApXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLmpvaW4oXCJkaXZcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgKGQsIGkpID0+IGB0b2tlbiAke3RoaXMuY3NzX25hbWV9IHRva2VuLSR7aX1gKVxuICAgICAgICAgICAgLmF0dHIoXCJpZFwiLCAoZCwgaSkgPT4gYCR7dGhpcy5jc3NfbmFtZX0tJHtpfWApXG4gICAgICAgICAgICAuc3R5bGUoJ2hlaWdodCcsIG9wLmJveGhlaWdodCArICdweCcpXG4gICAgICAgICAgICAudGV4dCgoZCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBkLnRleHQucmVwbGFjZShcIlxcdTAxMjBcIiwgXCIgXCIpLnJlcGxhY2UoXCJcXHUwMTBBXCIsIFwiXFxcXG5cIilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsID0gZDMuc2VsZWN0KHRoaXMpO1xuICAgICAgICAgICAgICAgIHNlbC5zdHlsZSgnYmFja2dyb3VuZCcsICdsaWdodGJsdWUnKTtcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKFRleHRUb2tlbnMuZXZlbnRzLnRva2VuTW91c2VPdmVyLCBzZWxmLmVJbmZvKHNlbCwgaSkpXG4gICAgICAgICAgICAgICAgc2VsZi5kaXZIb3Zlci5zdHlsZSgndmlzaWJpbGl0eScsICd2aXNpYmxlJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgICAgICBsZXQgc2VsID0gZDMuc2VsZWN0KHRoaXMpO1xuICAgICAgICAgICAgICAgIHNlbC5zdHlsZSgnYmFja2dyb3VuZCcsIDApXG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihUZXh0VG9rZW5zLmV2ZW50cy50b2tlbk1vdXNlT3V0LCBzZWxmLmVJbmZvKHNlbCwgaSkpXG4gICAgICAgICAgICAgICAgc2VsZi5kaXZIb3Zlci5zdHlsZSgndmlzaWJpbGl0eScsICdoaWRkZW4nKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAgICAgY29uc3QgW2xlZnQsIHRvcF0gPSBzZWxmLl9kaXZQbGFjZW1lbnQoKVxuXG4gICAgICAgICAgICAgICAgc2VsZi5kaXZIb3ZlclxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2xlZnQnLCBTdHJpbmcobGVmdCkgKyAncHgnKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ3RvcCcsIFN0cmluZyh0b3ApICsgJ3B4JylcbiAgICAgICAgICAgICAgICAgICAgLnNlbGVjdEFsbChcIi50b3BrLXdvcmQtYm94XCIpXG4gICAgICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICAuZGF0YShkMy56aXAoZC50b3BrX3dvcmRzLCBkLnRvcGtfcHJvYnMpKVxuICAgICAgICAgICAgICAgICAgICAuam9pbigncCcpXG4gICAgICAgICAgICAgICAgICAgIC5jbGFzc2VkKFwidG9way13b3JkLWJveFwiLCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAudGV4dCh3ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB3WzBdLnJlcGxhY2UoL1xcdTAxMjAvZywgXCIgXCIpLnJlcGxhY2UoL1xcdTAxMEEvZywgXCJcXFxcblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvYiA9IHdbMV0udG9GaXhlZCgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5hbWUgKyBcIjogXCIgKyBwcm9iXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIHNlbGYuYWRkQ2xpY2soc2VsZi50ZXh0Qm94ZXMpXG4gICAgfVxuXG4gICAgYWRkQ2xpY2sodGV4dGJveGVzOiBEM1NlbCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBzZWxmLnRleHRCb3hlcyA9IHRleHRib3hlc1xuICAgICAgICAgICAgLm9uKCdjbGljaycsIChkLCBpLCBuKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsID0gZDMuc2VsZWN0KG5baV0pO1xuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoVGV4dFRva2Vucy5ldmVudHMudG9rZW5DbGljaywgc2VsZi5lRW1iZWRkaW5nKHNlbCwgaSwgZC5lbWJlZGRpbmdzKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ2RibGNsaWNrJywgKGQsIGksIG4pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWwgPSBkMy5zZWxlY3QobltpXSk7XG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihUZXh0VG9rZW5zLmV2ZW50cy50b2tlbkRibENsaWNrLCBzZWxmLmVJbmZvKHNlbCwgaSkpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMZWZ0VGV4dFRva2VuIGV4dGVuZHMgVGV4dFRva2VucyB7XG5cbiAgICBjc3NfbmFtZSA9ICdsZWZ0LXRva2VuJztcbiAgICBob3Zlcl9jc3NfbmFtZSA9ICdsZWZ0LXRva2VuLWhvdmVyJ1xuICAgIHNpZGU6IHRwLlNpZGVPcHRpb25zID0gJ2xlZnQnO1xuICAgIG9mZnNldDogbnVtYmVyID0gMTtcblxuICAgIGNvbnN0cnVjdG9yKGQzUGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zOiB7fSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzUGFyZW50LCBldmVudEhhbmRsZXIpO1xuICAgIH1cblxuXG59XG5cbmV4cG9ydCBjbGFzcyBSaWdodFRleHRUb2tlbiBleHRlbmRzIFRleHRUb2tlbnMge1xuICAgIGNzc19uYW1lID0gJ3JpZ2h0LXRva2VuJztcbiAgICBob3Zlcl9jc3NfbmFtZSA9ICdyaWdodC10b2tlbi1ob3ZlcidcbiAgICBzaWRlOiB0cC5TaWRlT3B0aW9ucyA9ICdyaWdodCdcbiAgICBvZmZzZXQ6IG51bWJlciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcihkM1BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9uczoge30gPSB7fSkge1xuICAgICAgICBzdXBlcihkM1BhcmVudCwgZXZlbnRIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBfZGl2UGxhY2VtZW50KCkge1xuICAgICAgICBjb25zdCBnZXRCYXNlWCA9ICgpID0+ICg8SFRNTEVsZW1lbnQ+c2VsZi5iYXNlLm5vZGUoKSkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdFxuICAgICAgICBjb25zdCBnZXRCYXNlWSA9ICgpID0+ICg8SFRNTEVsZW1lbnQ+c2VsZi5iYXNlLm5vZGUoKSkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG4gICAgICAgIGNvbnN0IG1vdXNlID0gZDMubW91c2Uoc2VsZi5iYXNlLm5vZGUoKSlcbiAgICAgICAgY29uc3QgZGl2T2Zmc2V0ID0gWzMsIDNdXG4gICAgICAgIGNvbnN0IGxlZnQgPSBtb3VzZVswXSArIGdldEJhc2VYKCkgKyBkaXZPZmZzZXRbMF1cbiAgICAgICAgY29uc3QgdG9wID0gbW91c2VbMV0gKyBnZXRCYXNlWSgpICsgZGl2T2Zmc2V0WzFdXG4gICAgICAgIHJldHVybiBbbGVmdCwgdG9wXVxuICAgIH1cbn1cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBIZW5kcmlrIFN0cm9iZWx0IChoZW5kcmlrLnN0cm9iZWx0LmNvbSkgb24gMTIvMy8xNi5cbiAqIE1vZGlmaWVkIGJ5IEJlbiBIb292ZXIgb24gNC8xNi8yMDE5XG4gKi9cbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHtEM1NlbCwgVXRpbH0gZnJvbSBcIi4uL2V0Yy9VdGlsXCI7XG5pbXBvcnQge1NpbXBsZUV2ZW50SGFuZGxlcn0gZnJvbSBcIi4uL2V0Yy9TaW1wbGVFdmVudEhhbmRsZXJcIjtcbmltcG9ydCB7U1ZHfSBmcm9tIFwiLi4vZXRjL1NWR3BsdXNcIjtcblxuLyoqXG4gKiBTaG91bGQgaGF2ZSBWQ29tcG9uZW50SFRNTCBhbmQgVkNvbXBvbmVudFNWR1xuICogXG4gKiBDb21tb24gUHJvcGVydGllczpcbiAqIC0gZXZlbnRzXG4gKiAtIGV2ZW50SGFuZGxlciAoViBpbXBvcnRhbnQpXG4gKiAtIG9wdGlvbnMgKE1haW50YWlucyBwdWJsaWMgc3RhdGUuIENhbiBleHBvc2UgdGhlc2Ugd2l0aCBnZXQvc2V0IGZ1bmN0aW9ucyB3aXRoIGF1dG8gdXBkYXRlKVxuICogLSBfY3VycmVudCAoTWFpbnRhaW5zIHByaXZhdGUgc3RhdGUpXG4gKiAtIGNzc05hbWUgKHN5bmNlZCB3aXRoIGNvcnJlc3BvbmRpbmcgQ1NTIGZpbGUpXG4gKiAtIHBhcmVudCAoSFRNTCBpcyBkaXYgY29udGFpbmluZyB0aGUgYmFzZSwgU1ZHIGlzIFNWRyBlbGVtZW50KVxuICogLSBiYXNlIChIVE1MIGlzIGRpdiB3aXRoIGNzc19uYW1lIGVzdGFibGlzaGVkKVxuICogLSBfZGF0YSAoRGF0YSB1c2VkIHRvIGNyZWF0ZSBhbmQgcmVuZGVyIHRoZSBjb21wb25lbnQpXG4gKiAtIF9yZW5kZXJEYXRhIChEYXRhIG5lZWRlZCB0byBkaXNwbGF5LiBUaGlzIG1heSBub3QgYmUgbmVlZGVkLCBidXQgaXMgY3VycmVudGx5IHVzZWQgaW4gaGlzdG9ncmFtKVxuICogXG4gKiBDb21tb24gTWV0aG9kczpcbiAqIC0gY29uc3RydWN0b3JcbiAqIC0gX3JlbmRlcigpICAgICAgQ29uc2lkZXIgcmVwbGFjaW5nIHdpdGggYF91cGRhdGVEYXRhKClgIHRoYXQgdXBkYXRlcyBhbGwgZGF0YSBhdCBvbmNlXG4gKiAtIHVwZGF0ZSgpICAgICAgIENvbnNpZGVyIHJlcGxhY2luZyB0aGlzIHdpdGggYGRhdGEoKWAgdGhhdCBhdXRvIHVwZGF0ZXMgZGF0YVxuICogLSByZWRyYXcoKVxuICogLSBkZXN0cm95KClcbiAqL1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVkNvbXBvbmVudDxEYXRhSW50ZXJmYWNlPiB7XG5cbiAgICAvLyBTVEFUSUMgRklFTERTID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgLyoqXG4gICAgICogVGhlIHN0YXRpYyBwcm9wZXJ0eSB0aGF0IGNvbnRhaW5zIGFsbCBjbGFzcyByZWxhdGVkIGV2ZW50cy5cbiAgICAgKiBTaG91bGQgYmUgb3ZlcndyaXR0ZW4gYW5kIGV2ZW50IHN0cmluZ3MgaGF2ZSB0byBiZSB1bmlxdWUhIVxuICAgICAqL1xuXG4gICAgc3RhdGljIGV2ZW50czoge30gPSB7bm9FdmVudDogJ1ZDb21wb25lbnRfbm9FdmVudCd9O1xuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyB0aGUgbGF5ZXJzIGluIFNWRyAgZm9yIGJnLG1haW4sZmcsLi4uXG4gICAgICovXG4gICAgLy8gcHJvdGVjdGVkIGFic3RyYWN0IHJlYWRvbmx5IGxheW91dDogeyBuYW1lOiBzdHJpbmcsIHBvczogbnVtYmVyW10gfVtdID0gW3tuYW1lOiAnbWFpbicsIHBvczogWzAsIDBdfV07XG5cbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZzsgLy8gTW9zdGx5IG9ic29sZXRlLCBuaWNlIHRvIGhhdmUgc2ltcGxlIElEIHRvIGFzc2lnbiBpbiBDU1NcbiAgICBwcm90ZWN0ZWQgcGFyZW50OiBEM1NlbDtcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3Qgb3B0aW9uczogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbiAgICBwcm90ZWN0ZWQgYmFzZTogRDNTZWw7IC8vIE1vc3RseSBvYnNvbGV0ZSwgcmVwcmVzZW50cyA8Zz4gaW4gc3ZnXG4gICAgcHJvdGVjdGVkIGxheWVyczogeyBtYWluPzogRDNTZWwsIGZnPzogRDNTZWwsIGJnPzogRDNTZWwsIFtrZXk6IHN0cmluZ106IEQzU2VsIH07IC8vIFN0aWxsIHVzZWZ1bFxuICAgIHByb3RlY3RlZCBldmVudEhhbmRsZXI6IFNpbXBsZUV2ZW50SGFuZGxlcjtcbiAgICBwcm90ZWN0ZWQgX3Zpc2liaWxpdHk6IHsgaGlkZGVuOiBib29sZWFuLCBoaWRlRWxlbWVudD86IEQzU2VsIHwgbnVsbDsgW2tleTogc3RyaW5nXTogYW55IH07IC8vIEVuYWJsZXMgdHJhbnNpdGlvbnMgZnJvbSB2aXNpYmxlIHRvIGludmlzaWJsZS4gTW9zdGx5IG9ic29sZXRlLlxuICAgIHByb3RlY3RlZCBfZGF0YTogRGF0YUludGVyZmFjZTtcbiAgICBwcm90ZWN0ZWQgcmVuZGVyRGF0YTogYW55OyAvLyBVbm5lY2Vzc2FyeVxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBjc3NfbmFtZTogc3RyaW5nOyAvLyBNYWtlIHRoZSBzYW1lIGFzIHRoZSBjb3JyZXNwb25kaW5nIGNzcyBmaWxlXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF9jdXJyZW50OiB7fTsgLy8gUHJpdmF0ZSBzdGF0ZSBpbmZvcm1hdGlvbiBjb250YWluZWQgaW4gdGhlIG9iamVjdCBpdHNlbGYuXG5cbiAgICAvLyBDT05TVFJVQ1RPUiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIC8qKlxuICAgICAqIFNpbXBsZSBjb25zdHJ1Y3Rvci4gU3ViY2xhc3NlcyBzaG91bGQgY2FsbCBAc3VwZXJJbml0KG9wdGlvbnMpIGFzIHdlbGwuXG4gICAgICogc2VlIHdoeSBoZXJlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80MzU5NTk0My93aHktYXJlLWRlcml2ZWQtY2xhc3MtcHJvcGVydHktdmFsdWVzLW5vdC1zZWVuLWluLXRoZS1iYXNlLWNsYXNzLWNvbnN0cnVjdG9yXG4gICAgICpcbiAgICAgKiB0ZW1wbGF0ZTpcbiAgICAgY29uc3RydWN0b3IoZDNQYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnM6IHt9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoZDNQYXJlbnQsIGV2ZW50SGFuZGxlcik7XG4gICAgICAgIC8vIC0tIGFjY2VzcyB0byBzdWJjbGFzcyBwYXJhbXM6XG4gICAgICAgIHRoaXMuc3VwZXJJbml0KG9wdGlvbnMpO1xuICAgICB9XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0QzU2VsfSBkM3BhcmVudCAgRDMgc2VsZWN0aW9uIG9mIHBhcmVudCBTVkcgRE9NIEVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge1NpbXBsZUV2ZW50SGFuZGxlcn0gZXZlbnRIYW5kbGVyIGEgZ2xvYmFsIGV2ZW50IGhhbmRsZXIgb2JqZWN0IG9yICdudWxsJyBmb3IgbG9jYWwgZXZlbnQgaGFuZGxlclxuICAgICAqL1xuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlcikge1xuICAgICAgICB0aGlzLmlkID0gVXRpbC5zaW1wbGVVSWQoe30pO1xuXG4gICAgICAgIHRoaXMucGFyZW50ID0gZDNwYXJlbnQ7XG5cbiAgICAgICAgLy8gSWYgbm90IGZ1cnRoZXIgc3BlY2lmaWVkIC0gY3JlYXRlIGEgbG9jYWwgZXZlbnQgaGFuZGxlciBib3VuZCB0byB0aGUgYmFzIGVsZW1lbnRcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIgPSBldmVudEhhbmRsZXIgfHxcbiAgICAgICAgICAgIG5ldyBTaW1wbGVFdmVudEhhbmRsZXIodGhpcy5wYXJlbnQubm9kZSgpKTtcblxuICAgICAgICAvLyBPYmplY3QgZm9yIHN0b3JpbmcgaW50ZXJuYWwgc3RhdGVzIGFuZCB2YXJpYWJsZXNcbiAgICAgICAgdGhpcy5fdmlzaWJpbGl0eSA9IHtoaWRkZW46IGZhbHNlfTtcblxuICAgIH1cblxuICAgIHByb3RlY3RlZCBzdXBlckluaXRIVE1MKG9wdGlvbnM6IHt9ID0ge30pIHtcbiAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChrZXkgPT4gdGhpcy5vcHRpb25zW2tleV0gPSBvcHRpb25zW2tleV0pO1xuICAgICAgICB0aGlzLmJhc2UgPSB0aGlzLnBhcmVudC5hcHBlbmQoJ2RpdicpXG4gICAgICAgICAgICAuY2xhc3NlZCh0aGlzLmNzc19uYW1lLCB0cnVlKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhcyB0byBiZSBjYWxsZWQgYXMgbGFzdCBjYWxsIGluIHN1YmNsYXNzIGNvbnN0cnVjdG9yLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7e319IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0gZGVmYXVsdExheWVycyAtLSBjcmVhdGUgdGhlIGRlZmF1bHQgPGc+IGxheWVyczogYmcgLT4gbWFpbiAtPiBmZ1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBzdXBlckluaXRTVkcob3B0aW9uczoge30gPSB7fSwgZGVmYXVsdExheWVycyA9IFsnYmcnLCAnbWFpbicsICdmZyddKSB7XG4gICAgICAgIC8vIFNldCBkZWZhdWx0IG9wdGlvbnMgaWYgbm90IHNwZWNpZmllZCBpbiBjb25zdHJ1Y3RvciBjYWxsXG4gICAgICAgIC8vIGNvbnN0IGRlZmF1bHRzID0gdGhpcy5kZWZhdWx0T3B0aW9ucztcbiAgICAgICAgLy8gdGhpcy5vcHRpb25zID0ge307XG4gICAgICAgIC8vIGNvbnN0IGtleXMgPSBuZXcgU2V0KFsuLi5PYmplY3Qua2V5cyhkZWZhdWx0cyksIC4uLk9iamVjdC5rZXlzKG9wdGlvbnMpXSk7XG4gICAgICAgIC8vIGtleXMuZm9yRWFjaChrZXkgPT4gdGhpcy5vcHRpb25zW2tleV0gPSAoa2V5IGluIG9wdGlvbnMpID8gb3B0aW9uc1trZXldIDogZGVmYXVsdHNba2V5XSk7XG4gICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goa2V5ID0+IHRoaXMub3B0aW9uc1trZXldID0gb3B0aW9uc1trZXldKTtcblxuICAgICAgICB0aGlzLmxheWVycyA9IHt9O1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgYmFzZSBncm91cCBlbGVtZW50XG4gICAgICAgIGNvbnN0IHN2ZyA9IHRoaXMucGFyZW50O1xuICAgICAgICB0aGlzLmJhc2UgPSBTVkcuZ3JvdXAoc3ZnLFxuICAgICAgICAgICAgdGhpcy5jc3NfbmFtZSArICcgSUQnICsgdGhpcy5pZCxcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wb3MpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBkZWZhdWx0IGxheWVyczogYmFja2dyb3VuZCwgbWFpbiwgZm9yZWdyb3VuZFxuICAgICAgICBpZiAoZGVmYXVsdExheWVycykge1xuICAgICAgICAgICAgLy8gY29uc3RydWN0aW9uIG9yZGVyIGlzIGltcG9ydGFudCAhXG4gICAgICAgICAgICBkZWZhdWx0TGF5ZXJzLmZvckVhY2gobGF5ZXIgPT57XG4gICAgICAgICAgICAgICAgdGhpcy5sYXllcnNbbGF5ZXJdID0gU1ZHLmdyb3VwKHRoaXMuYmFzZSwgbGF5ZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNob3VsZCBiZSBvdmVyd3JpdHRlbiB0byBjcmVhdGUgdGhlIHN0YXRpYyBET00gZWxlbWVudHNcbiAgICAgKiBAYWJzdHJhY3RcbiAgICAgKiBAcmV0dXJuIHsqfSAtLS1cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgX2luaXQoKTtcblxuICAgIC8vIERBVEEgVVBEQVRFICYgUkVOREVSID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgLyoqXG4gICAgICogRXZlcnkgdGltZSBkYXRhIGhhcyBjaGFuZ2VkLCB1cGRhdGUgaXMgY2FsbGVkIGFuZFxuICAgICAqIHRyaWdnZXJzIHdyYW5nbGluZyBhbmQgcmUtcmVuZGVyaW5nXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgZGF0YSBvYmplY3RcbiAgICAgKiBAcmV0dXJuIHsqfSAtLS1cbiAgICAgKi9cbiAgICB1cGRhdGUoZGF0YTogRGF0YUludGVyZmFjZSkge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICAgICAgaWYgKHRoaXMuX3Zpc2liaWxpdHkuaGlkZGVuKSByZXR1cm47XG4gICAgICAgIHRoaXMucmVuZGVyRGF0YSA9IHRoaXMuX3dyYW5nbGUoZGF0YSk7XG4gICAgICAgIHRoaXMuX3JlbmRlcih0aGlzLnJlbmRlckRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERhdGEgd3JhbmdsaW5nIG1ldGhvZCAtLSBpbXBsZW1lbnQgaW4gc3ViY2xhc3MuIFJldHVybnMgdGhpcy5yZW5kZXJEYXRhLlxuICAgICAqIFNpbXBsZXN0IGltcGxlbWVudGF0aW9uOiBgcmV0dXJuIGRhdGE7YFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIGRhdGFcbiAgICAgKiBAcmV0dXJucyB7Kn0gLS0gZGF0YSBpbiByZW5kZXIgZm9ybWF0XG4gICAgICogQGFic3RyYWN0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF93cmFuZ2xlKGRhdGEpO1xuXG5cbiAgICAvKipcbiAgICAgKiBJcyByZXNwb25zaWJsZSBmb3IgbWFwcGluZyBkYXRhIHRvIERPTSBlbGVtZW50c1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZW5kZXJEYXRhIHByZS1wcm9jZXNzZWQgKHdyYW5nbGVkKSBkYXRhXG4gICAgICogQGFic3RyYWN0XG4gICAgICogQHJldHVybnMgeyp9IC0tLVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBfcmVuZGVyKHJlbmRlckRhdGEpOiB2b2lkO1xuXG5cbiAgICAvLyBVUERBVEUgT1BUSU9OUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGluc3RhbmNlIG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBvbmx5IHRoZSBvcHRpb25zIHRoYXQgc2hvdWxkIGJlIHVwZGF0ZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHJlUmVuZGVyIGlmIG9wdGlvbiBjaGFuZ2UgcmVxdWlyZXMgYSByZS1yZW5kZXJpbmcgKGRlZmF1bHQ6ZmFsc2UpXG4gICAgICogQHJldHVybnMgeyp9IC0tLVxuICAgICAqL1xuICAgIHVwZGF0ZU9wdGlvbnMoe29wdGlvbnMsIHJlUmVuZGVyID0gZmFsc2V9KSB7XG4gICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goayA9PiB0aGlzLm9wdGlvbnNba10gPSBvcHRpb25zW2tdKTtcbiAgICAgICAgaWYgKHJlUmVuZGVyKSB0aGlzLl9yZW5kZXIodGhpcy5yZW5kZXJEYXRhKTtcbiAgICB9XG5cblxuICAgIC8vID09PSBDT05WRU5JRU5DRSA9PT09XG4gICAgcmVkcmF3KCl7XG4gICAgICAgIHRoaXMuX3JlbmRlcih0aGlzLnJlbmRlckRhdGEpO1xuICAgIH1cblxuICAgIHNldEhpZGVFbGVtZW50KGhFOiBEM1NlbCkge1xuICAgICAgICB0aGlzLl92aXNpYmlsaXR5LmhpZGVFbGVtZW50ID0gaEU7XG4gICAgfVxuXG4gICAgaGlkZVZpZXcoKSB7XG4gICAgICAgIGlmICghdGhpcy5fdmlzaWJpbGl0eS5oaWRkZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGhFID0gdGhpcy5fdmlzaWJpbGl0eS5oaWRlRWxlbWVudCB8fCB0aGlzLnBhcmVudDtcbiAgICAgICAgICAgIGhFLnRyYW5zaXRpb24oKS5zdHlsZXMoe1xuICAgICAgICAgICAgICAgICdvcGFjaXR5JzogMCxcbiAgICAgICAgICAgICAgICAncG9pbnRlci1ldmVudHMnOiAnbm9uZSdcbiAgICAgICAgICAgIH0pLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgICAgIHRoaXMuX3Zpc2liaWxpdHkuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVuaGlkZVZpZXcoKSB7XG4gICAgICAgIGlmICh0aGlzLl92aXNpYmlsaXR5LmhpZGRlbikge1xuICAgICAgICAgICAgY29uc3QgaEUgPSB0aGlzLl92aXNpYmlsaXR5LmhpZGVFbGVtZW50IHx8IHRoaXMucGFyZW50O1xuICAgICAgICAgICAgaEUudHJhbnNpdGlvbigpLnN0eWxlcyh7XG4gICAgICAgICAgICAgICAgJ29wYWNpdHknOiAxLFxuICAgICAgICAgICAgICAgICdwb2ludGVyLWV2ZW50cyc6IG51bGwsXG4gICAgICAgICAgICAgICAgJ2Rpc3BsYXknOiBudWxsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX3Zpc2liaWxpdHkuaGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZSh0aGlzLmRhdGEpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2UucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuYmFzZS5odG1sKCcnKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIlxuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCAqIGFzIHRwIGZyb20gJy4uL2V0Yy90eXBlcyc7XG5pbXBvcnQgKiBhcyByc3AgZnJvbSAnLi4vYXBpL3Jlc3BvbnNlcyc7XG5pbXBvcnQgJy4uL2V0Yy94ZDMnXG5pbXBvcnQgeyBBUEkgfSBmcm9tICcuLi9hcGkvbWFpbkFwaSdcbmltcG9ydCB7IFVJQ29uZmlnIH0gZnJvbSAnLi4vdWlDb25maWcnXG5pbXBvcnQgeyBUZXh0VG9rZW5zLCBMZWZ0VGV4dFRva2VuLCBSaWdodFRleHRUb2tlbiB9IGZyb20gJy4vVGV4dFRva2VuJ1xuaW1wb3J0IHsgQXR0ZW50aW9uSGVhZEJveCwgZ2V0QXR0ZW50aW9uSW5mbyB9IGZyb20gJy4vQXR0ZW50aW9uSGVhZEJveCdcbmltcG9ydCB7IEF0dGVudGlvbkdyYXBoIH0gZnJvbSAnLi9BdHRlbnRpb25Db25uZWN0b3InXG5pbXBvcnQgeyBDb3JwdXNJbnNwZWN0b3IgfSBmcm9tICcuL0NvcnB1c0luc3BlY3RvcidcbmltcG9ydCB7IFRva2VuV3JhcHBlciwgc2lkZVRvTGV0dGVyIH0gZnJvbSAnLi4vZGF0YS9Ub2tlbldyYXBwZXInXG5pbXBvcnQgeyBBdHRlbnRpb25XcmFwcGVyLCBtYWtlRnJvbU1ldGFSZXNwb25zZSB9IGZyb20gJy4uL2RhdGEvQXR0ZW50aW9uQ2Fwc3VsZSdcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2V0Yy9TaW1wbGVFdmVudEhhbmRsZXInXG5pbXBvcnQgeyBDb3JwdXNNYXRNYW5hZ2VyIH0gZnJvbSAnLi4vdmlzL0NvcnB1c01hdE1hbmFnZXInXG5pbXBvcnQgeyBDb3JwdXNIaXN0b2dyYW0gfSBmcm9tICcuLi92aXMvQ29ycHVzSGlzdG9ncmFtJ1xuaW1wb3J0IHsgRmFpc3NTZWFyY2hSZXN1bHRXcmFwcGVyIH0gZnJvbSAnLi4vZGF0YS9GYWlzc1NlYXJjaFdyYXBwZXInXG5pbXBvcnQgeyBEM1NlbCwgU2VsIH0gZnJvbSAnLi4vZXRjL1V0aWwnO1xuaW1wb3J0IHsgZnJvbSwgZnJvbUV2ZW50LCBpbnRlcnZhbCB9IGZyb20gJ3J4anMnXG5pbXBvcnQgeyBzd2l0Y2hNYXAsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5pbXBvcnQgeyBCYXNlVHlwZSB9IGZyb20gXCJkM1wiO1xuaW1wb3J0IHsgU2ltcGxlTWV0YSB9IGZyb20gXCIuLi9ldGMvdHlwZXNcIjtcbmltcG9ydCBDaGFuZ2VFdmVudCA9IEpRdWVyeS5DaGFuZ2VFdmVudDtcblxuXG5mdW5jdGlvbiBpc051bGxUb2tlbih0b2s6IHRwLlRva2VuRXZlbnQpIHtcbiAgICBjb25zdCBpc1NvbWVOdWxsID0geCA9PiB7XG4gICAgICAgIHJldHVybiAoeCA9PSBudWxsKSB8fCAoeCA9PSBcIm51bGxcIilcbiAgICB9XG4gICAgY29uc3QgdG9rSXNOdWxsID0gdG9rID09IG51bGw7XG4gICAgY29uc3QgdG9rSGFzTnVsbCA9IGlzU29tZU51bGwodG9rLnNpZGUpIHx8IGlzU29tZU51bGwodG9rLmluZClcbiAgICByZXR1cm4gdG9rSXNOdWxsIHx8IHRva0hhc051bGxcbn1cblxuZnVuY3Rpb24gc2hvd0J5U2lkZShlOiB0cC5Ub2tlbkV2ZW50KSB7XG4gICAgLy8gQ2hlY2sgaWYgc2F2ZWQgdG9rZW4gaW4gdWlDb25mIGlzIG51bGxcbiAgICBpZiAoIWlzTnVsbFRva2VuKGUpKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzU2VsZWN0b3IgPSBlLnNpZGUgPT0gXCJsZWZ0XCIgPyBcInNyYy1pZHhcIiA6IFwidGFyZ2V0LWlkeFwiO1xuXG4gICAgICAgIFNlbC5zZXRIaWRkZW4oXCIuYXRuLWN1cnZlXCIpXG4gICAgICAgIFNlbC5zZXRWaXNpYmxlKGAuYXRuLWN1cnZlWyR7Y2xhc3NTZWxlY3Rvcn09JyR7ZS5pbmR9J11gKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2hvb3NlU2hvd0J5U2lkZShzYXZlZEV2ZW50OiB0cC5Ub2tlbkV2ZW50LCBuZXdFdmVudDogdHAuVG9rZW5FdmVudCkge1xuICAgIGlmIChpc051bGxUb2tlbihzYXZlZEV2ZW50KSkge1xuICAgICAgICBzaG93QnlTaWRlKG5ld0V2ZW50KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2hvb3NlU2hvd0FsbChzYXZlZEV2ZW50OiB0cC5Ub2tlbkV2ZW50KSB7XG4gICAgaWYgKGlzTnVsbFRva2VuKHNhdmVkRXZlbnQpKVxuICAgICAgICBTZWwuc2V0VmlzaWJsZShcIi5hdG4tY3VydmVcIilcbn1cblxuZnVuY3Rpb24gdW5zZWxlY3RIZWFkKGhlYWQ6IG51bWJlcikge1xuICAgIGNvbnN0IGFmZmVjdGVkSGVhZHMgPSBkMy5zZWxlY3RBbGwoYC5hdHQtcmVjdFtoZWFkPScke2hlYWR9J11gKTtcbiAgICBhZmZlY3RlZEhlYWRzLmNsYXNzZWQoXCJ1bnNlbGVjdGVkXCIsIHRydWUpXG59XG5cbmZ1bmN0aW9uIHNlbGVjdEhlYWQoaGVhZDogbnVtYmVyKSB7XG4gICAgY29uc3QgYWZmZWN0ZWRIZWFkcyA9IGQzLnNlbGVjdEFsbChgLmF0dC1yZWN0W2hlYWQ9JyR7aGVhZH0nXWApO1xuICAgIGFmZmVjdGVkSGVhZHMuY2xhc3NlZChcInVuc2VsZWN0ZWRcIiwgZmFsc2UpXG59XG5cbmZ1bmN0aW9uIHNldFNlbERpc2FibGVkKGF0dHI6IGJvb2xlYW4sIHNlbDogRDNTZWwpIHtcbiAgICBjb25zdCB2YWwgPSBhdHRyID8gdHJ1ZSA6IG51bGxcbiAgICBzZWwuYXR0cignZGlzYWJsZWQnLCB2YWwpXG59XG5cblxuZXhwb3J0IGNsYXNzIE1haW5HcmFwaGljIHtcbiAgICBhcGk6IEFQSVxuICAgIHVpQ29uZjogVUlDb25maWdcbiAgICBhdHRDYXBzdWxlOiBBdHRlbnRpb25XcmFwcGVyXG4gICAgdG9rQ2Fwc3VsZTogVG9rZW5XcmFwcGVyXG4gICAgc2VsczogYW55ICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29udGFpbnMgaW5pdGlhbCBkMyBzZWxlY3Rpb25zIG9mIG9iamVjdHNcbiAgICB2aXpzOiBhbnkgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDb250YWlucyB2aXMgY29tcG9uZW50cyB3cmFwcGVkIGFyb3VuZCBwYXJlbnQgc2VsXG4gICAgZXZlbnRIYW5kbGVyOiBTaW1wbGVFdmVudEhhbmRsZXIgICAgLy8gT3JjaGVzdHJhdGVzIGV2ZW50cyByYWlzZWQgZnJvbSBjb21wb25lbnRzXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hcGkgPSBuZXcgQVBJKClcbiAgICAgICAgdGhpcy51aUNvbmYgPSBuZXcgVUlDb25maWcoKVxuICAgICAgICB0aGlzLnNrZWxldG9uSW5pdCgpXG4gICAgICAgIHRoaXMubWFpbkluaXQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbnMgdGhhdCBjYW4gYmUgY2FsbGVkIHdpdGhvdXQgYW55IGluZm9ybWF0aW9uIG9mIGEgcmVzcG9uc2UuXG4gICAgICogXG4gICAgICogVGhpcyBzaG91bGQgYmUgY2FsbGVkIG9uY2UgYW5kIG9ubHkgb25jZVxuICAgICAqL1xuICAgIHNrZWxldG9uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zZWxzID0ge1xuICAgICAgICAgICAgYm9keTogZDMuc2VsZWN0KCdib2R5JyksXG4gICAgICAgICAgICBhdG5Db250YWluZXI6IGQzLnNlbGVjdCgnI2F0bi1jb250YWluZXInKSxcbiAgICAgICAgICAgIGF0bkRpc3BsYXk6IGQzLnNlbGVjdChcIiNhdG4tZGlzcGxheVwiKSxcbiAgICAgICAgICAgIG1vZGVsU2VsZWN0b3I6IGQzLnNlbGVjdChcIiNtb2RlbC1vcHRpb24tc2VsZWN0b3JcIiksXG4gICAgICAgICAgICBjb3JwdXNTZWxlY3RvcjogZDMuc2VsZWN0KFwiI2NvcnB1cy1zZWxlY3RcIiksXG4gICAgICAgICAgICBhdG5IZWFkczoge1xuICAgICAgICAgICAgICAgIGxlZnQ6IGQzLnNlbGVjdChcIiNsZWZ0LWF0dC1oZWFkc1wiKSxcbiAgICAgICAgICAgICAgICByaWdodDogZDMuc2VsZWN0KFwiI3JpZ2h0LWF0dC1oZWFkc1wiKSxcbiAgICAgICAgICAgICAgICBoZWFkSW5mbzogZDMuc2VsZWN0KFwiI2hlYWQtaW5mby1ib3hcIilcbiAgICAgICAgICAgICAgICAgICAgLmNsYXNzZWQoJ21hdC1ob3Zlci1kaXNwbGF5JywgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgLmNsYXNzZWQoJ3RleHQtY2VudGVyJywgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCd3aWR0aCcsIFN0cmluZyg3MCkgKyAncHgnKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2hlaWdodCcsIFN0cmluZygzMCkgKyAncHgnKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ3Zpc2liaWxsaXR5JywgJ2hpZGRlbicpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9ybToge1xuICAgICAgICAgICAgICAgIHNlbnRlbmNlQTogZDMuc2VsZWN0KFwiI2Zvcm0tc2VudGVuY2UtYVwiKSxcbiAgICAgICAgICAgICAgICBidXR0b246IGQzLnNlbGVjdChcIiN1cGRhdGUtc2VudGVuY2VcIiksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9rZW5zOiB7XG4gICAgICAgICAgICAgICAgbGVmdDogZDMuc2VsZWN0KFwiI2xlZnQtdG9rZW5zXCIpLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiBkMy5zZWxlY3QoXCIjcmlnaHQtdG9rZW5zXCIpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsc1RvZ2dsZTogZDMuc2VsZWN0KFwiI2Nscy10b2dnbGVcIikuc2VsZWN0KFwiLnN3aXRjaFwiKSxcbiAgICAgICAgICAgIGxheWVyQ2hlY2tib3hlczogZDMuc2VsZWN0KFwiI2xheWVyLXNlbGVjdFwiKSxcbiAgICAgICAgICAgIGhlYWRDaGVja2JveGVzOiBkMy5zZWxlY3QoXCIjaGVhZC1zZWxlY3RcIiksXG4gICAgICAgICAgICBjb250ZXh0UXVlcnk6IGQzLnNlbGVjdChcIiNzZWFyY2gtY29udGV4dHNcIiksXG4gICAgICAgICAgICBlbWJlZGRpbmdRdWVyeTogZDMuc2VsZWN0KFwiI3NlYXJjaC1lbWJlZGRpbmdzXCIpLFxuICAgICAgICAgICAgc2VsZWN0ZWRIZWFkczogZDMuc2VsZWN0KFwiI3NlbGVjdGVkLWhlYWRzXCIpLFxuICAgICAgICAgICAgaGVhZFNlbGVjdEFsbDogZDMuc2VsZWN0KFwiI3NlbGVjdC1hbGwtaGVhZHNcIiksXG4gICAgICAgICAgICBoZWFkU2VsZWN0Tm9uZTogZDMuc2VsZWN0KFwiI3NlbGVjdC1uby1oZWFkc1wiKSxcbiAgICAgICAgICAgIHRlc3RDaGVja2JveDogZDMuc2VsZWN0KFwiI3NpbXBsZS1lbWJlZC1xdWVyeVwiKSxcbiAgICAgICAgICAgIHRocmVzaFNsaWRlcjogZDMuc2VsZWN0KFwiI215LXJhbmdlXCIpLFxuICAgICAgICAgICAgY29ycHVzSW5zcGVjdG9yOiBkMy5zZWxlY3QoXCIjY29ycHVzLXNpbWlsYXItc2VudGVuY2VzLWRpdlwiKSxcbiAgICAgICAgICAgIGNvcnB1c01hdE1hbmFnZXI6IGQzLnNlbGVjdChcIiNjb3JwdXMtbWF0LWNvbnRhaW5lclwiKSxcbiAgICAgICAgICAgIGNvcnB1c01zZ0JveDogZDMuc2VsZWN0KFwiI2NvcnB1cy1tc2ctYm94XCIpLFxuICAgICAgICAgICAgaGlzdG9ncmFtczoge1xuICAgICAgICAgICAgICAgIG1hdGNoZWRXb3JkOiBkMy5zZWxlY3QoXCIjbWF0Y2hlZC1oaXN0b2dyYW0tY29udGFpbmVyXCIpLFxuICAgICAgICAgICAgICAgIG1heEF0dDogZDMuc2VsZWN0KFwiI21heC1hdHQtaGlzdG9ncmFtLWNvbnRhaW5lclwiKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidXR0b25zOiB7XG4gICAgICAgICAgICAgICAga2lsbExlZnQ6IGQzLnNlbGVjdChcIiNraWxsLWxlZnRcIiksXG4gICAgICAgICAgICAgICAgYWRkTGVmdDogZDMuc2VsZWN0KFwiI21pbnVzLWxlZnRcIiksXG4gICAgICAgICAgICAgICAgYWRkUmlnaHQ6IGQzLnNlbGVjdChcIiNwbHVzLXJpZ2h0XCIpLFxuICAgICAgICAgICAgICAgIGtpbGxSaWdodDogZDMuc2VsZWN0KFwiI2tpbGwtcmlnaHRcIiksXG4gICAgICAgICAgICAgICAgcmVmcmVzaDogZDMuc2VsZWN0KFwiI21hdC1yZWZyZXNoXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0YVNlbGVjdG9yOiB7XG4gICAgICAgICAgICAgICAgbWF0Y2hlZFdvcmQ6IGQzLnNlbGVjdChcIiNtYXRjaGVkLW1ldGEtc2VsZWN0XCIpLFxuICAgICAgICAgICAgICAgIG1heEF0dDogZDMuc2VsZWN0KFwiI21heC1hdHQtbWV0YS1zZWxlY3RcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyID0gbmV3IFNpbXBsZUV2ZW50SGFuZGxlcig8RWxlbWVudD50aGlzLnNlbHMuYm9keS5ub2RlKCkpO1xuXG4gICAgICAgIHRoaXMudml6cyA9IHtcbiAgICAgICAgICAgIGxlZnRIZWFkczogbmV3IEF0dGVudGlvbkhlYWRCb3godGhpcy5zZWxzLmF0bkhlYWRzLmxlZnQsIHRoaXMuZXZlbnRIYW5kbGVyLCB7IHNpZGU6IFwibGVmdFwiLCB9KSxcbiAgICAgICAgICAgIHJpZ2h0SGVhZHM6IG5ldyBBdHRlbnRpb25IZWFkQm94KHRoaXMuc2Vscy5hdG5IZWFkcy5yaWdodCwgdGhpcy5ldmVudEhhbmRsZXIsIHsgc2lkZTogXCJyaWdodFwiIH0pLFxuICAgICAgICAgICAgdG9rZW5zOiB7XG4gICAgICAgICAgICAgICAgbGVmdDogbmV3IExlZnRUZXh0VG9rZW4odGhpcy5zZWxzLnRva2Vucy5sZWZ0LCB0aGlzLmV2ZW50SGFuZGxlciksXG4gICAgICAgICAgICAgICAgcmlnaHQ6IG5ldyBSaWdodFRleHRUb2tlbih0aGlzLnNlbHMudG9rZW5zLnJpZ2h0LCB0aGlzLmV2ZW50SGFuZGxlciksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXR0ZW50aW9uU3ZnOiBuZXcgQXR0ZW50aW9uR3JhcGgodGhpcy5zZWxzLmF0bkRpc3BsYXksIHRoaXMuZXZlbnRIYW5kbGVyKSxcbiAgICAgICAgICAgIGNvcnB1c0luc3BlY3RvcjogbmV3IENvcnB1c0luc3BlY3Rvcih0aGlzLnNlbHMuY29ycHVzSW5zcGVjdG9yLCB0aGlzLmV2ZW50SGFuZGxlciksXG4gICAgICAgICAgICBjb3JwdXNNYXRNYW5hZ2VyOiBuZXcgQ29ycHVzTWF0TWFuYWdlcih0aGlzLnNlbHMuY29ycHVzTWF0TWFuYWdlciwgdGhpcy5ldmVudEhhbmRsZXIsIHsgaWR4czogdGhpcy51aUNvbmYub2Zmc2V0SWR4cygpIH0pLFxuICAgICAgICAgICAgaGlzdG9ncmFtczoge1xuICAgICAgICAgICAgICAgIG1hdGNoZWRXb3JkOiBuZXcgQ29ycHVzSGlzdG9ncmFtKHRoaXMuc2Vscy5oaXN0b2dyYW1zLm1hdGNoZWRXb3JkLCB0aGlzLmV2ZW50SGFuZGxlciksXG4gICAgICAgICAgICAgICAgbWF4QXR0OiBuZXcgQ29ycHVzSGlzdG9ncmFtKHRoaXMuc2Vscy5oaXN0b2dyYW1zLm1heEF0dCwgdGhpcy5ldmVudEhhbmRsZXIpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2JpbmRFdmVudEhhbmRsZXIoKVxuICAgIH1cblxuICAgIHByaXZhdGUgbWFpbkluaXQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcInByb2dyZXNzXCIpXG4gICAgICAgIHRoaXMuYXBpLmdldE1vZGVsRGV0YWlscyh0aGlzLnVpQ29uZi5tb2RlbCgpKS50aGVuKG1kID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IG1kLnBheWxvYWRcbiAgICAgICAgICAgIHRoaXMudWlDb25mLm5MYXllcnModmFsLm5sYXllcnMpLm5IZWFkcyh2YWwubmhlYWRzKVxuICAgICAgICAgICAgdGhpcy5pbml0TGF5ZXJzKHRoaXMudWlDb25mLm5MYXllcnMoKSlcblxuICAgICAgICAgICAgdGhpcy5hcGkuZ2V0TWV0YUF0dGVudGlvbnModGhpcy51aUNvbmYubW9kZWwoKSwgdGhpcy51aUNvbmYuc2VudGVuY2UoKSwgdGhpcy51aUNvbmYubGF5ZXIoKSkudGhlbihhdHRlbnRpb24gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dCA9IGF0dGVudGlvbi5wYXlsb2FkO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdEZyb21SZXNwb25zZShhdHQpXG5cbiAgICAgICAgICAgICAgICAvLyBXcmFwIHBvc3RJbml0IGludG8gZnVuY3Rpb24gc28gYXN5bmNocm9ub3VzIGNhbGwgZG9lcyBub3QgbWVzcyB3aXRoIG5lY2Vzc2FyeSBpbml0c1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3RSZXNwb25zZURpc3BsYXlDbGVhbnVwID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl90b2dnbGVUb2tlblNlbCgpXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9EaXNwbGF5ID0gdGhpcy51aUNvbmYuZGlzcGxheUluc3BlY3RvcigpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlYXJjaERpc2FibGVyKClcblxuICAgICAgICAgICAgICAgICAgICBpZiAodG9EaXNwbGF5ID09ICdjb250ZXh0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcXVlcnlDb250ZXh0KClcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0b0Rpc3BsYXkgPT0gJ2VtYmVkZGluZ3MnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9xdWVyeUVtYmVkZGluZ3MoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IG5vcm1CeVxuICAgICAgICAgICAgICAgIGlmICgodGhpcy51aUNvbmYubW9kZWxLaW5kKCkgPT0gdHAuTW9kZWxLaW5kLkF1dG9yZWdyZXNzaXZlKSAmJiAoIXRoaXMudWlDb25mLmhpZGVDbHNTZXAoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9ybUJ5ID0gdHAuTm9ybUJ5LkNvbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbm9ybUJ5ID0gdHAuTm9ybUJ5LkFsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnZpenMuYXR0ZW50aW9uU3ZnLm5vcm1CeSA9IG5vcm1CeVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudWlDb25mLm1hc2tJbmRzKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRva0NhcHN1bGUuYS5tYXNrSW5kcyA9IHRoaXMudWlDb25mLm1hc2tJbmRzKClcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaS51cGRhdGVNYXNrZWRBdHRlbnRpb25zKHRoaXMudWlDb25mLm1vZGVsKCksIHRoaXMudG9rQ2Fwc3VsZS5hLCB0aGlzLnVpQ29uZi5zZW50ZW5jZSgpLCB0aGlzLnVpQ29uZi5sYXllcigpKS50aGVuKHJlc3AgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgciA9IHJlc3AucGF5bG9hZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0Q2Fwc3VsZS51cGRhdGVGcm9tTm9ybWFsKHIsIHRoaXMudWlDb25mLmhpZGVDbHNTZXAoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRva0NhcHN1bGUudXBkYXRlVG9rZW5zKHIpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0UmVzcG9uc2VEaXNwbGF5Q2xlYW51cCgpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKVxuICAgICAgICAgICAgICAgICAgICBwb3N0UmVzcG9uc2VEaXNwbGF5Q2xlYW51cCgpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudWlDb25mLm1vZGVsS2luZCgpID09IHRwLk1vZGVsS2luZC5BdXRvcmVncmVzc2l2ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBFbnN1cmUgb25seSAxIG1hc2sgaW5kIGlzIHByZXNlbnQgZm9yIGF1dG9yZWdyZXNzaXZlIG1vZGVsc1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51aUNvbmYuaGFzVG9rZW4oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmF5VG9nZ2xlKDxudW1iZXI+dGhpcy51aUNvbmYudG9rZW4oKS5pbmQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLnRva2Vucy5sZWZ0Lm9wdGlvbnMuZGl2SG92ZXIudGV4dEluZm8gPSBcIldvdWxkIHByZWRpY3QgbmV4dC4uLlwiXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudml6cy50b2tlbnMucmlnaHQub3B0aW9ucy5kaXZIb3Zlci50ZXh0SW5mbyA9IFwiV291bGQgcHJlZGljdCBuZXh0Li4uXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYudml6cy50b2tlbnMubGVmdC5vcHRpb25zLmRpdkhvdmVyLnRleHRJbmZvID0gXCJXb3VsZCBwcmVkaWN0IGhlcmUuLi5cIlxuICAgICAgICAgICAgICAgICAgICBzZWxmLnZpenMudG9rZW5zLnJpZ2h0Lm9wdGlvbnMuZGl2SG92ZXIudGV4dEluZm8gPSBcIldvdWxkIHByZWRpY3QgaGVyZS4uLlwiXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxzLmJvZHkuc3R5bGUoXCJjdXJzb3JcIiwgXCJkZWZhdWx0XCIpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdEZyb21SZXNwb25zZShhdHRlbnRpb246IHRwLkF0dGVudGlvblJlc3BvbnNlKSB7XG4gICAgICAgIHRoaXMuYXR0Q2Fwc3VsZSA9IG1ha2VGcm9tTWV0YVJlc3BvbnNlKGF0dGVudGlvbiwgdGhpcy51aUNvbmYuaGlkZUNsc1NlcCgpKVxuICAgICAgICB0aGlzLnRva0NhcHN1bGUgPSBuZXcgVG9rZW5XcmFwcGVyKGF0dGVudGlvbik7XG4gICAgICAgIHRoaXMuX3N0YXRpY0luaXRzKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGxlYXZlQ29ycHVzTXNnKG1zZzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudml6cy5jb3JwdXNJbnNwZWN0b3IuaGlkZVZpZXcoKVxuICAgICAgICB0aGlzLnZpenMuY29ycHVzTWF0TWFuYWdlci5oaWRlVmlldygpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUnVubmluZyBsZWF2ZSBtc2dcIik7XG4gICAgICAgIFNlbC51bmhpZGVFbGVtZW50KHRoaXMuc2Vscy5jb3JwdXNNc2dCb3gpXG4gICAgICAgIHRoaXMuc2Vscy5jb3JwdXNNc2dCb3gudGV4dChtc2cpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfYmluZEV2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoVGV4dFRva2Vucy5ldmVudHMudG9rZW5EYmxDbGljaywgKGUpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoc2VsZi51aUNvbmYubW9kZWxLaW5kKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHRwLk1vZGVsS2luZC5CaWRpcmVjdGlvbmFsOiB7XG4gICAgICAgICAgICAgICAgICAgIGUuc2VsLmNsYXNzZWQoXCJtYXNrZWQtdG9rZW5cIiwgIWUuc2VsLmNsYXNzZWQoXCJtYXNrZWQtdG9rZW5cIikpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsZXR0ZXIgPSBzaWRlVG9MZXR0ZXIoZS5zaWRlLCB0aGlzLnVpQ29uZi5hdHRUeXBlKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnRva0NhcHN1bGVbbGV0dGVyXS50b2dnbGUoZS5pbmQpXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwicHJvZ3Jlc3NcIilcblxuICAgICAgICAgICAgICAgICAgICBzZWxmLmFwaS51cGRhdGVNYXNrZWRBdHRlbnRpb25zKHRoaXMudWlDb25mLm1vZGVsKCksIHRoaXMudG9rQ2Fwc3VsZS5hLCB0aGlzLnVpQ29uZi5zZW50ZW5jZSgpLCB0aGlzLnVpQ29uZi5sYXllcigpKS50aGVuKChyZXNwOiByc3AuQXR0ZW50aW9uRGV0YWlsc1Jlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByID0gcmVzcC5wYXlsb2FkO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hdHRDYXBzdWxlLnVwZGF0ZUZyb21Ob3JtYWwociwgdGhpcy51aUNvbmYuaGlkZUNsc1NlcCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudG9rQ2Fwc3VsZS51cGRhdGVUb2tlbnMocik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudWlDb25mLm1hc2tJbmRzKHRoaXMudG9rQ2Fwc3VsZS5hLm1hc2tJbmRzKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxzLmJvZHkuc3R5bGUoXCJjdXJzb3JcIiwgXCJkZWZhdWx0XCIpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIHRwLk1vZGVsS2luZC5BdXRvcmVncmVzc2l2ZToge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF1dG9yZWdyZXNzaXZlIG1vZGVsIGRvZXNuJ3QgZG8gbWFza2luZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJXaGF0IGtpbmQgb2YgbW9kZWwgaXMgdGhpcz9cIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKFRleHRUb2tlbnMuZXZlbnRzLnRva2VuTW91c2VPdmVyLCAoZTogdHAuVG9rZW5FdmVudCkgPT4ge1xuICAgICAgICAgICAgY2hvb3NlU2hvd0J5U2lkZSh0aGlzLnVpQ29uZi50b2tlbigpLCBlKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoVGV4dFRva2Vucy5ldmVudHMudG9rZW5Nb3VzZU91dCwgKGUpID0+IHtcbiAgICAgICAgICAgIGNob29zZVNob3dBbGwodGhpcy51aUNvbmYudG9rZW4oKSlcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKFRleHRUb2tlbnMuZXZlbnRzLnRva2VuQ2xpY2ssIChlOiB0cC5Ub2tlbkV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b2tUb2dnbGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51aUNvbmYudG9nZ2xlVG9rZW4oZSlcbiAgICAgICAgICAgICAgICB0aGlzLl90b2dnbGVUb2tlblNlbCgpXG4gICAgICAgICAgICAgICAgc2hvd0J5U2lkZShlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9rVG9nZ2xlKClcbiAgICAgICAgICAgIHRoaXMucmVuZGVyQXR0SGVhZCgpXG4gICAgICAgIH0pXG5cblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKEF0dGVudGlvbkhlYWRCb3guZXZlbnRzLnJvd01vdXNlT3ZlciwgKGU6IHRwLkhlYWRCb3hFdmVudCkgPT4ge1xuICAgICAgICAgICAgc2VsZi5zZWxzLmF0bkhlYWRzLmhlYWRJbmZvLnN0eWxlKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKVxuICAgICAgICB9KVxuXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5yb3dNb3VzZU91dCwgKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi5zZWxzLmF0bkhlYWRzLmhlYWRJbmZvLnN0eWxlKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpXG4gICAgICAgICAgICAvLyBEb24ndCBkbyBhbnl0aGluZyBzcGVjaWFsIG9uIHJvdyBtb3VzZSBvdXRcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKEF0dGVudGlvbkhlYWRCb3guZXZlbnRzLmJveE1vdXNlT3ZlciwgKGU6IHRwLkhlYWRCb3hFdmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlTWF0ID0gdGhpcy5hdHRDYXBzdWxlLmJ5SGVhZChlLmhlYWQpXG4gICAgICAgICAgICB0aGlzLnZpenMuYXR0ZW50aW9uU3ZnLmRhdGEodXBkYXRlTWF0KVxuICAgICAgICAgICAgdGhpcy52aXpzLmF0dGVudGlvblN2Zy51cGRhdGUodXBkYXRlTWF0KVxuXG4gICAgICAgICAgICBzaG93QnlTaWRlKHRoaXMudWlDb25mLnRva2VuKCkpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5ib3hNb3VzZU91dCwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXR0ID0gdGhpcy5hdHRDYXBzdWxlLmJ5SGVhZHModGhpcy51aUNvbmYuaGVhZHMoKSlcbiAgICAgICAgICAgIHRoaXMudml6cy5hdHRlbnRpb25TdmcuZGF0YShhdHQpXG4gICAgICAgICAgICB0aGlzLnZpenMuYXR0ZW50aW9uU3ZnLnVwZGF0ZShhdHQpXG4gICAgICAgICAgICBzaG93QnlTaWRlKHRoaXMudWlDb25mLnRva2VuKCkpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5ib3hNb3VzZU1vdmUsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBoZWFkSW5mbyA9IHNlbGYuc2Vscy5hdG5IZWFkcy5oZWFkSW5mb1xuICAgICAgICAgICAgbGV0IGxlZnQsIHRvcCwgYm9yZGVyUmFkaXVzXG5cbiAgICAgICAgICAgIGlmIChlLnNpZGUgPT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXZPZmZzZXQgPSBbMTMsIDNdXG4gICAgICAgICAgICAgICAgbGVmdCA9IGUubW91c2VbMF0gKyBlLmJhc2VYIC0gKCtoZWFkSW5mby5zdHlsZSgnd2lkdGgnKS5yZXBsYWNlKCdweCcsICcnKSArIGRpdk9mZnNldFswXSlcbiAgICAgICAgICAgICAgICB0b3AgPSBlLm1vdXNlWzFdICsgZS5iYXNlWSAtICgraGVhZEluZm8uc3R5bGUoJ2hlaWdodCcpLnJlcGxhY2UoJ3B4JywgJycpICsgZGl2T2Zmc2V0WzFdKVxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cyA9IFwiOHB4IDhweCAxcHggOHB4XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpdk9mZnNldCA9IFstNCwgM11cbiAgICAgICAgICAgICAgICBsZWZ0ID0gZS5tb3VzZVswXSArIGUuYmFzZVggKyAoZGl2T2Zmc2V0WzBdKVxuICAgICAgICAgICAgICAgIHRvcCA9IGUubW91c2VbMV0gKyBlLmJhc2VZIC0gKCtoZWFkSW5mby5zdHlsZSgnaGVpZ2h0JykucmVwbGFjZSgncHgnLCAnJykgKyBkaXZPZmZzZXRbMV0pXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzID0gXCI4cHggOHB4IDhweCAxcHhcIlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoZWFkSW5mb1xuICAgICAgICAgICAgICAgIC5zdHlsZSgndmlzaWJpbGl0eScsICd2aXNpYmxlJylcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ2xlZnQnLCBTdHJpbmcobGVmdCkgKyAncHgnKVxuICAgICAgICAgICAgICAgIC5zdHlsZSgndG9wJywgU3RyaW5nKHRvcCkgKyAncHgnKVxuICAgICAgICAgICAgICAgIC5zdHlsZSgnYm9yZGVyLXJhZGl1cycsIGJvcmRlclJhZGl1cylcbiAgICAgICAgICAgICAgICAudGV4dChgSGVhZDogJHtlLmluZCArIDF9YClcblxuICAgICAgICAgICAgLy8gRG9uJ3QgZG8gYW55dGhpbmcgc3BlY2lhbCBvbiByb3cgbW91c2Ugb3ZlclxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMuYm94Q2xpY2ssIChlOiB7IGhlYWQgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy51aUNvbmYudG9nZ2xlSGVhZChlLmhlYWQpXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09IHRwLlRvZ2dsZWQuQURERUQpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RIZWFkKGUuaGVhZClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09IHRwLlRvZ2dsZWQuUkVNT1ZFRCkge1xuICAgICAgICAgICAgICAgIHVuc2VsZWN0SGVhZChlLmhlYWQpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3NlYXJjaERpc2FibGVyKClcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlckhlYWRTdW1tYXJ5KCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclN2ZygpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoQ29ycHVzTWF0TWFuYWdlci5ldmVudHMubW91c2VPdmVyLCAoZTogeyB2YWw6IFwicG9zXCIgfCBcImRlcFwiIHwgXCJpc19lbnRcIiwgb2Zmc2V0OiBudW1iZXIgfSkgPT4ge1xuICAgICAgICAgICAgLy8gVW5jb21tZW50IHRoZSBiZWxvdyBpZiB5b3Ugd2FudCB0byBtb2RpZnkgdGhlIHdob2xlIGNvbHVtblxuICAgICAgICAgICAgLy8gY29uc3Qgc2VsZWN0b3IgPSBgLmluc3BlY3Rvci1jZWxsW2luZGV4LW9mZnNldD0nJHtlLm9mZnNldH0nXWBcbiAgICAgICAgICAgIC8vIGQzLnNlbGVjdEFsbChzZWxlY3RvcikuY2xhc3NlZChcImhvdmVyZWQtY29sXCIsIHRydWUpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChDb3JwdXNNYXRNYW5hZ2VyLmV2ZW50cy5tb3VzZU91dCwgKGU6IHsgb2Zmc2V0OiBudW1iZXIsIGlkeDogbnVtYmVyIH0pID0+IHtcbiAgICAgICAgICAgIC8vIFVuY29tbWVudCB0aGUgYmVsb3cgaWYgeW91IHdhbnQgdG8gbW9kaWZ5IHRoZSB3aG9sZSBjb2x1bW5cbiAgICAgICAgICAgIC8vIGNvbnN0IHNlbGVjdG9yID0gYC5pbnNwZWN0b3ItY2VsbFtpbmRleC1vZmZzZXQ9JyR7ZS5vZmZzZXR9J11gXG4gICAgICAgICAgICAvLyBkMy5zZWxlY3RBbGwoc2VsZWN0b3IpLmNsYXNzZWQoXCJob3ZlcmVkLWNvbFwiLCBmYWxzZSlcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKENvcnB1c01hdE1hbmFnZXIuZXZlbnRzLnJlY3RNb3VzZU92ZXIsIChlOiB7IG9mZnNldDogbnVtYmVyLCBpZHg6IG51bWJlciB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBkMy5zZWxlY3QoYC5pbnNwZWN0b3Itcm93W3Jvd251bT0nJHtlLmlkeH0nXWApXG4gICAgICAgICAgICBjb25zdCB3b3JkID0gcm93LnNlbGVjdChgLmluc3BlY3Rvci1jZWxsW2luZGV4LW9mZnNldD0nJHtlLm9mZnNldH0nXWApXG4gICAgICAgICAgICB3b3JkLmNsYXNzZWQoXCJob3ZlcmVkLWNvbFwiLCB0cnVlKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoQ29ycHVzTWF0TWFuYWdlci5ldmVudHMucmVjdE1vdXNlT3V0LCAoZTogeyBvZmZzZXQ6IG51bWJlciwgaWR4OiBudW1iZXIgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gZDMuc2VsZWN0KGAuaW5zcGVjdG9yLXJvd1tyb3dudW09JyR7ZS5pZHh9J11gKVxuICAgICAgICAgICAgY29uc3Qgd29yZCA9IHJvdy5zZWxlY3QoYC5pbnNwZWN0b3ItY2VsbFtpbmRleC1vZmZzZXQ9JyR7ZS5vZmZzZXR9J11gKVxuICAgICAgICAgICAgd29yZC5jbGFzc2VkKFwiaG92ZXJlZC1jb2xcIiwgZmFsc2UpXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBwcml2YXRlIF90b2dnbGVUb2tlblNlbCgpIHtcbiAgICAgICAgY29uc3QgZSA9IHRoaXMudWlDb25mLnRva2VuKClcbiAgICAgICAgY29uc3QgYWxyZWFkeVNlbGVjdGVkID0gZDMuc2VsZWN0KCcuc2VsZWN0ZWQtdG9rZW4nKVxuXG4gICAgICAgIC8vIElmIG5vIHRva2VuIHNob3VsZCBiZSBzZWxlY3RlZCwgdW5zZWxlY3QgYWxsIHRva2Vuc1xuICAgICAgICBpZiAoIXRoaXMudWlDb25mLmhhc1Rva2VuKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1NlbDogZDMuU2VsZWN0aW9uPEJhc2VUeXBlLCBhbnksIEJhc2VUeXBlLCBhbnk+ID0gZDMuc2VsZWN0QWxsKCcuc2VsZWN0ZWQtdG9rZW4nKVxuICAgICAgICAgICAgaWYgKCFuZXdTZWwuZW1wdHkoKSkgbmV3U2VsLmNsYXNzZWQoJ3NlbGVjdGVkLXRva2VuJywgZmFsc2UpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBPdGhlcndpc2UsIHNlbGVjdCB0aGUgaW5kaWNhdGVkIHRva2VuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdG9rZW4yU3RyaW5nID0gKGU6IHRwLlRva2VuRXZlbnQpID0+IGAjJHtlLnNpZGV9LXRva2VuLSR7ZS5pbmR9YFxuICAgICAgICAgICAgY29uc3QgbmV3U2VsID0gZDMuc2VsZWN0KHRva2VuMlN0cmluZyhlKSlcbiAgICAgICAgICAgIC8vIENoZWNrIHRoYXQgc2VsZWN0aW9uIGV4aXN0c1xuICAgICAgICAgICAgaWYgKCFuZXdTZWwuZW1wdHkoKSkgbmV3U2VsLmNsYXNzZWQoJ3NlbGVjdGVkLXRva2VuJywgdHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBwcmV2aW91cyB0b2tlbiBzZWxlY3Rpb24sIGlmIGFueVxuICAgICAgICBpZiAoIWFscmVhZHlTZWxlY3RlZC5lbXB0eSgpKSB7XG4gICAgICAgICAgICBhbHJlYWR5U2VsZWN0ZWQuY2xhc3NlZCgnc2VsZWN0ZWQtdG9rZW4nLCBmYWxzZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnVpQ29uZi5tb2RlbEtpbmQoKSA9PSB0cC5Nb2RlbEtpbmQuQXV0b3JlZ3Jlc3NpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JheVRvZ2dsZSgrZS5pbmQpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zZWFyY2hEaXNhYmxlcigpXG4gICAgfVxuXG4gICAgLyoqIEdyYXkgYWxsIHRva2VucyB0aGF0IGhhdmUgaW5kZXggZ3JlYXRlciB0aGFuIGluZCAqL1xuICAgIHByaXZhdGUgZ3JheUJhZFRva3MoaW5kOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMudWlDb25mLm1vZGVsS2luZCgpID09IHRwLk1vZGVsS2luZC5BdXRvcmVncmVzc2l2ZSkge1xuICAgICAgICAgICAgY29uc3QgZ3JheVRva3MgPSBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHMgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgICBzLmNsYXNzZWQoXCJtYXNrZWQtdG9rZW5cIiwgaSA+IGluZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbCgnLnJpZ2h0LXRva2VuJykuZWFjaChncmF5VG9rcylcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbCgnLmxlZnQtdG9rZW4nKS5lYWNoKGdyYXlUb2tzKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBncmF5VG9nZ2xlKGluZDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLnVpQ29uZi5oYXNUb2tlbigpKVxuICAgICAgICAgICAgdGhpcy5ncmF5QmFkVG9rcyhpbmQpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbCgnLnRva2VuJykuY2xhc3NlZCgnbWFza2VkLXRva2VuJywgZmFsc2UpXG5cbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0TW9kZWxTZWxlY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzXG5cbiAgICAgICAgLy8gQmVsb3cgYXJlIHRoZSBhdmFpbGFibGUgbW9kZWxzLiBXaWxsIG5lZWQgdG8gY2hvb3NlIDMgdG8gYmUgYXZhaWxhYmxlIE9OTFlcbiAgICAgICAgY29uc3QgZGF0YSA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogXCJiZXJ0LWJhc2UtY2FzZWRcIiwga2luZDogdHAuTW9kZWxLaW5kLkJpZGlyZWN0aW9uYWwgfSxcbiAgICAgICAgICAgIC8vIHsgbmFtZTogXCJiZXJ0LWJhc2UtdW5jYXNlZFwiLCBraW5kOiB0cC5Nb2RlbEtpbmQuQmlkaXJlY3Rpb25hbCB9LFxuICAgICAgICAgICAgLy8geyBuYW1lOiBcImRpc3RpbGJlcnQtYmFzZS11bmNhc2VkXCIsIGtpbmQ6IHRwLk1vZGVsS2luZC5CaWRpcmVjdGlvbmFsIH0sXG4gICAgICAgICAgICAvLyB7IG5hbWU6IFwiZGlzdGlscm9iZXJ0YS1iYXNlXCIsIGtpbmQ6IHRwLk1vZGVsS2luZC5CaWRpcmVjdGlvbmFsIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwicm9iZXJ0YS1iYXNlXCIsIGtpbmQ6IHRwLk1vZGVsS2luZC5CaWRpcmVjdGlvbmFsIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiZ3B0MlwiLCBraW5kOiB0cC5Nb2RlbEtpbmQuQXV0b3JlZ3Jlc3NpdmUgfSxcbiAgICAgICAgICAgIC8vIHsgbmFtZTogXCJncHQyLW1lZGl1bVwiLCBraW5kOiB0cC5Nb2RlbEtpbmQuQXV0b3JlZ3Jlc3NpdmUgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJkaXN0aWxncHQyXCIsIGtpbmQ6IHRwLk1vZGVsS2luZC5BdXRvcmVncmVzc2l2ZSB9LFxuICAgICAgICBdXG5cbiAgICAgICAgY29uc3QgbmFtZXMgPSBSLm1hcChSLnByb3AoJ25hbWUnKSkoZGF0YSlcbiAgICAgICAgY29uc3Qga2luZHMgPSBSLm1hcChSLnByb3AoJ2tpbmQnKSkoZGF0YSlcbiAgICAgICAgY29uc3Qga2luZG1hcCA9IFIuemlwT2JqKG5hbWVzLCBraW5kcylcblxuICAgICAgICB0aGlzLnNlbHMubW9kZWxTZWxlY3Rvci5zZWxlY3RBbGwoJy5tb2RlbC1vcHRpb24nKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5qb2luKCdvcHRpb24nKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ21vZGVsLW9wdGlvbicsIHRydWUpXG4gICAgICAgICAgICAucHJvcGVydHkoJ3ZhbHVlJywgZCA9PiBkLm5hbWUpXG4gICAgICAgICAgICAuYXR0cihcIm1vZGVsa2luZFwiLCBkID0+IGQua2luZClcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gZC5uYW1lKVxuXG4gICAgICAgIHRoaXMuc2Vscy5tb2RlbFNlbGVjdG9yLnByb3BlcnR5KCd2YWx1ZScsIHRoaXMudWlDb25mLm1vZGVsKCkpO1xuXG4gICAgICAgIHRoaXMuc2Vscy5tb2RlbFNlbGVjdG9yLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBtZSA9IGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgY29uc3QgbW5hbWUgPSBtZS5wcm9wZXJ0eSgndmFsdWUnKVxuICAgICAgICAgICAgc2VsZi51aUNvbmYubW9kZWwobW5hbWUpO1xuICAgICAgICAgICAgc2VsZi51aUNvbmYubW9kZWxLaW5kKGtpbmRtYXBbbW5hbWVdKTtcbiAgICAgICAgICAgIGlmIChraW5kbWFwW21uYW1lXSA9PSB0cC5Nb2RlbEtpbmQuQXV0b3JlZ3Jlc3NpdmUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJFU0VUVElORyBNQVNLIElORFNcIik7XG4gICAgICAgICAgICAgICAgc2VsZi51aUNvbmYubWFza0luZHMoW10pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLm1haW5Jbml0KCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdENvcnB1c1NlbGVjdGlvbigpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IFtcbiAgICAgICAgICAgIHsgY29kZTogXCJ3b3pcIiwgZGlzcGxheTogXCJXaXphcmQgb2YgT3pcIiB9LFxuICAgICAgICAgICAgeyBjb2RlOiBcIndpa2lcIiwgZGlzcGxheTogXCJXaWtpcGVkaWFcIiB9LFxuICAgICAgICBdXG5cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICAgICAgc2VsZi5zZWxzLmNvcnB1c1NlbGVjdG9yLnNlbGVjdEFsbCgnb3B0aW9uJylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuam9pbignb3B0aW9uJylcbiAgICAgICAgICAgIC5wcm9wZXJ0eSgndmFsdWUnLCBkID0+IGQuY29kZSlcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gZC5kaXNwbGF5KVxuXG4gICAgICAgIHRoaXMuc2Vscy5jb3JwdXNTZWxlY3Rvci5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgbWUgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgIHNlbGYudWlDb25mLmNvcnB1cyhtZS5wcm9wZXJ0eSgndmFsdWUnKSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGYudWlDb25mLmNvcnB1cygpKTtcbiAgICAgICAgfSlcblxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc3RhdGljSW5pdHMoKSB7XG4gICAgICAgIHRoaXMuX2luaXRTZW50ZW5jZUZvcm0oKTtcbiAgICAgICAgdGhpcy5faW5pdE1vZGVsU2VsZWN0aW9uKCk7XG4gICAgICAgIHRoaXMuX2luaXRDb3JwdXNTZWxlY3Rpb24oKTtcbiAgICAgICAgdGhpcy5faW5pdFF1ZXJ5Rm9ybSgpO1xuICAgICAgICB0aGlzLl9pbml0QWRkZXIoKTtcbiAgICAgICAgdGhpcy5fcmVuZGVySGVhZFN1bW1hcnkoKTtcbiAgICAgICAgdGhpcy5faW5pdE1ldGFTZWxlY3RvcnMoKTtcbiAgICAgICAgdGhpcy5faW5pdFRvZ2dsZSgpO1xuICAgICAgICB0aGlzLnJlbmRlckF0dEhlYWQoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJUb2tlbnMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0QWRkZXIoKSB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZVVybE9mZnNldElkeHMgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVpQ29uZi5vZmZzZXRJZHhzKHRoaXMudml6cy5jb3JwdXNNYXRNYW5hZ2VyLmlkeHMpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaXhDb3JwdXNNYXRIZWlnaHRzID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3V3JhcHBlZCA9IHRoaXMuX3dyYXBSZXN1bHRzKHRoaXMudml6cy5jb3JwdXNNYXRNYW5hZ2VyLmRhdGEoKSlcbiAgICAgICAgICAgIHRoaXMudml6cy5jb3JwdXNNYXRNYW5hZ2VyLmRhdGEobmV3V3JhcHBlZC5kYXRhKVxuICAgICAgICAgICAgdXBkYXRlVXJsT2Zmc2V0SWR4cygpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNlbHMuYnV0dG9ucy5hZGRSaWdodC5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnZpenMuY29ycHVzTWF0TWFuYWdlci5hZGRSaWdodCgpXG4gICAgICAgICAgICB1cGRhdGVVcmxPZmZzZXRJZHhzKClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnNlbHMuYnV0dG9ucy5hZGRMZWZ0Lm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudml6cy5jb3JwdXNNYXRNYW5hZ2VyLmFkZExlZnQoKVxuICAgICAgICAgICAgdXBkYXRlVXJsT2Zmc2V0SWR4cygpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5zZWxzLmJ1dHRvbnMua2lsbFJpZ2h0Lm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudml6cy5jb3JwdXNNYXRNYW5hZ2VyLmtpbGxSaWdodCgpXG4gICAgICAgICAgICB1cGRhdGVVcmxPZmZzZXRJZHhzKClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnNlbHMuYnV0dG9ucy5raWxsTGVmdC5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnZpenMuY29ycHVzTWF0TWFuYWdlci5raWxsTGVmdCgpXG4gICAgICAgICAgICB1cGRhdGVVcmxPZmZzZXRJZHhzKClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnNlbHMuYnV0dG9ucy5yZWZyZXNoLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGZpeENvcnB1c01hdEhlaWdodHMoKTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBvbnJlc2l6ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbHMuY29ycHVzSW5zcGVjdG9yLnRleHQoKSAhPSAnJykgZml4Q29ycHVzTWF0SGVpZ2h0cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93Lm9ucmVzaXplID0gb25yZXNpemVcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0TWV0YVNlbGVjdG9ycygpIHtcbiAgICAgICAgdGhpcy5faW5pdE1hdGNoZWRXb3JkU2VsZWN0b3IodGhpcy5zZWxzLm1ldGFTZWxlY3Rvci5tYXRjaGVkV29yZClcbiAgICAgICAgdGhpcy5faW5pdE1heEF0dFNlbGVjdG9yKHRoaXMuc2Vscy5tZXRhU2VsZWN0b3IubWF4QXR0KVxuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRNYXhBdHRTZWxlY3RvcihzZWw6IEQzU2VsKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGNvbnN0IGNob29zZVNlbGVjdGVkID0gKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtcyA9IHNlbC5zZWxlY3RBbGwoJ2xhYmVsJylcbiAgICAgICAgICAgIG1zLmNsYXNzZWQoJ2FjdGl2ZScsIGZhbHNlKVxuICAgICAgICAgICAgY29uc3QgZWwgPSBzZWwuc2VsZWN0QWxsKGBsYWJlbFt2YWx1ZT0ke3ZhbHVlfV1gKVxuICAgICAgICAgICAgZWwuY2xhc3NlZCgnYWN0aXZlJywgdHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNob29zZVNlbGVjdGVkKHRoaXMudWlDb25mLm1ldGFNYXgoKSlcblxuICAgICAgICBjb25zdCBlbCA9IHNlbC5zZWxlY3RBbGwoJ2xhYmVsJylcbiAgICAgICAgZWwub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgdmFsID0gPFNpbXBsZU1ldGE+ZDMuc2VsZWN0KHRoaXMpLmF0dHIoJ3ZhbHVlJyk7XG5cbiAgICAgICAgICAgIC8vIERvIHRvZ2dsZVxuICAgICAgICAgICAgc2VsLnNlbGVjdEFsbCgnLmFjdGl2ZScpLmNsYXNzZWQoJ2FjdGl2ZScsIGZhbHNlKVxuICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmNsYXNzZWQoJ2FjdGl2ZScsIHRydWUpXG4gICAgICAgICAgICBzZWxmLnVpQ29uZi5tZXRhTWF4KHZhbClcbiAgICAgICAgICAgIHNlbGYudml6cy5oaXN0b2dyYW1zLm1heEF0dC5tZXRhKHZhbClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0TWF0Y2hlZFdvcmRTZWxlY3RvcihzZWw6IEQzU2VsKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGNvbnN0IGNob29zZVNlbGVjdGVkID0gKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtcyA9IHNlbC5zZWxlY3RBbGwoJ2xhYmVsJylcbiAgICAgICAgICAgIG1zLmNsYXNzZWQoJ2FjdGl2ZScsIGZhbHNlKVxuICAgICAgICAgICAgY29uc3QgZWwgPSBzZWwuc2VsZWN0QWxsKGBsYWJlbFt2YWx1ZT0ke3ZhbHVlfV1gKVxuICAgICAgICAgICAgZWwuY2xhc3NlZCgnYWN0aXZlJywgdHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNob29zZVNlbGVjdGVkKHRoaXMudWlDb25mLm1ldGFNYXRjaCgpKVxuXG4gICAgICAgIGNvbnN0IGVsID0gc2VsLnNlbGVjdEFsbCgnbGFiZWwnKVxuICAgICAgICBlbC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSA8U2ltcGxlTWV0YT5kMy5zZWxlY3QodGhpcykuYXR0cigndmFsdWUnKVxuXG4gICAgICAgICAgICAvLyBEbyB0b2dnbGVcbiAgICAgICAgICAgIHNlbC5zZWxlY3RBbGwoJy5hY3RpdmUnKS5jbGFzc2VkKCdhY3RpdmUnLCBmYWxzZSlcbiAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5jbGFzc2VkKCdhY3RpdmUnLCB0cnVlKVxuICAgICAgICAgICAgc2VsZi51aUNvbmYubWV0YU1hdGNoKHZhbClcbiAgICAgICAgICAgIHNlbGYuX3VwZGF0ZUNvcnB1c0luc3BlY3RvckZyb21NZXRhKHZhbClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9kaXNhYmxlU2VhcmNoaW5nKGF0dHI6IGJvb2xlYW4pIHtcbiAgICAgICAgc2V0U2VsRGlzYWJsZWQoYXR0ciwgdGhpcy5zZWxzLmNvbnRleHRRdWVyeSlcbiAgICAgICAgc2V0U2VsRGlzYWJsZWQoYXR0ciwgdGhpcy5zZWxzLmVtYmVkZGluZ1F1ZXJ5KVxuICAgIH1cblxuICAgIHByaXZhdGUgX3VwZGF0ZUNvcnB1c0luc3BlY3RvckZyb21NZXRhKHZhbDogdHAuU2ltcGxlTWV0YSkge1xuICAgICAgICB0aGlzLnZpenMuY29ycHVzTWF0TWFuYWdlci5waWNrKHZhbClcbiAgICAgICAgdGhpcy52aXpzLmhpc3RvZ3JhbXMubWF0Y2hlZFdvcmQubWV0YSh2YWwpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdFNlbnRlbmNlRm9ybSgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5zZWxzLmZvcm0uc2VudGVuY2VBLmF0dHIoJ3BsYWNlaG9sZGVyJywgXCJFbnRlciBuZXcgc2VudGVuY2UgdG8gYW5hbHl6ZVwiKVxuICAgICAgICB0aGlzLnNlbHMuZm9ybS5zZW50ZW5jZUEuYXR0cigndmFsdWUnLCB0aGlzLnVpQ29uZi5zZW50ZW5jZSgpKVxuXG4gICAgICAgIGNvbnN0IGNsZWFySW5zcGVjdG9yID0gKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi52aXpzLmNvcnB1c01hdE1hbmFnZXIuY2xlYXIoKTtcbiAgICAgICAgICAgIHNlbGYudml6cy5jb3JwdXNJbnNwZWN0b3IuY2xlYXIoKTtcbiAgICAgICAgICAgIHNlbGYudml6cy5oaXN0b2dyYW1zLm1hdGNoZWRXb3JkLmNsZWFyKCk7XG4gICAgICAgICAgICBzZWxmLnZpenMuaGlzdG9ncmFtcy5tYXhBdHQuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN1Ym1pdE5ld1NlbnRlbmNlID0gKCkgPT4ge1xuICAgICAgICAgICAgLy8gcmVwbGFjZSBhbGwgb2NjdXJlbmNlcyBvZiAnIycgaW4gc2VudGVuY2UgYXMgdGhpcyBjYXVzZXMgdGhlIEFQSSB0byBicmVha1xuICAgICAgICAgICAgY29uc3Qgc2VudGVuY2VfYTogc3RyaW5nID0gdGhpcy5zZWxzLmZvcm0uc2VudGVuY2VBLnByb3BlcnR5KFwidmFsdWVcIikucmVwbGFjZSgvXFwjL2csICcnKVxuXG4gICAgICAgICAgICAvLyBPbmx5IHVwZGF0ZSBpZiB0aGUgZm9ybSBpcyBmaWxsZWQgY29ycmVjdGx5XG4gICAgICAgICAgICBpZiAoc2VudGVuY2VfYS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcInByb2dyZXNzXCIpXG4gICAgICAgICAgICAgICAgdGhpcy5hcGkuZ2V0TWV0YUF0dGVudGlvbnModGhpcy51aUNvbmYubW9kZWwoKSwgc2VudGVuY2VfYSwgdGhpcy51aUNvbmYubGF5ZXIoKSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3A6IHJzcC5BdHRlbnRpb25EZXRhaWxzUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHIgPSByZXNwLnBheWxvYWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudWlDb25mLnNlbnRlbmNlKHNlbnRlbmNlX2EpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVpQ29uZi5ybVRva2VuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dENhcHN1bGUudXBkYXRlRnJvbU5vcm1hbChyLCB0aGlzLnVpQ29uZi5oaWRlQ2xzU2VwKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tDYXBzdWxlLnVwZGF0ZUZyb21SZXNwb25zZShyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3RvZ2dsZVRva2VuU2VsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnNwZWN0b3IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwiZGVmYXVsdFwiKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb25FbnRlciA9IFIuY3VycnkoKGtleUNvZGUsIGYsIGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSAhPT0ga2V5Q29kZSkgcmV0dXJuO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZigpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IG9uRW50ZXJTdWJtaXQgPSBvbkVudGVyKDEzLCBzdWJtaXROZXdTZW50ZW5jZSlcblxuICAgICAgICBjb25zdCBidG4gPSB0aGlzLnNlbHMuZm9ybS5idXR0b247XG4gICAgICAgIGNvbnN0IGlucHV0Qm94ID0gdGhpcy5zZWxzLmZvcm0uc2VudGVuY2VBO1xuXG4gICAgICAgIGJ0bi5vbihcImNsaWNrXCIsIHN1Ym1pdE5ld1NlbnRlbmNlKVxuICAgICAgICBpbnB1dEJveC5vbigna2V5cHJlc3MnLCBvbkVudGVyU3VibWl0KVxuICAgIH1cblxuICAgIHByaXZhdGUgX2dldFNlYXJjaEVtYmVkcygpIHtcbiAgICAgICAgY29uc3Qgc2F2ZWRUb2tlbiA9IHRoaXMudWlDb25mLnRva2VuKCk7XG4gICAgICAgIGNvbnN0IG91dCA9IHRoaXMudml6cy50b2tlbnNbc2F2ZWRUb2tlbi5zaWRlXS5nZXRFbWJlZGRpbmcoc2F2ZWRUb2tlbi5pbmQpXG4gICAgICAgIHJldHVybiBvdXQuZW1iZWRkaW5nc1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldFNlYXJjaENvbnRleHQoKSB7XG4gICAgICAgIGNvbnN0IHNhdmVkVG9rZW4gPSB0aGlzLnVpQ29uZi50b2tlbigpO1xuICAgICAgICBjb25zdCBvdXQgPSB0aGlzLnZpenMudG9rZW5zW3NhdmVkVG9rZW4uc2lkZV0uZ2V0RW1iZWRkaW5nKHNhdmVkVG9rZW4uaW5kKVxuICAgICAgICByZXR1cm4gb3V0LmNvbnRleHRzXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2VhcmNoRW1iZWRkaW5ncygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU0VBUkNISU5HIEVNQkVERElOR1NcIik7XG4gICAgICAgIGNvbnN0IGVtYmVkID0gdGhpcy5fZ2V0U2VhcmNoRW1iZWRzKClcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBzZWxmLnVpQ29uZi5sYXllcigpXG4gICAgICAgIGNvbnN0IGhlYWRzID0gc2VsZi51aUNvbmYuaGVhZHMoKVxuICAgICAgICBjb25zdCBrID0gNTBcblxuICAgICAgICB0aGlzLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcInByb2dyZXNzXCIpXG4gICAgICAgIHNlbGYuYXBpLmdldE5lYXJlc3RFbWJlZGRpbmdzKHNlbGYudWlDb25mLm1vZGVsKCksIHNlbGYudWlDb25mLmNvcnB1cygpLCBlbWJlZCwgbGF5ZXIsIGhlYWRzLCBrKVxuICAgICAgICAgICAgLnRoZW4oKHZhbDogcnNwLk5lYXJlc3ROZWlnaGJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbC5zdGF0dXMgPT0gNDA2KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubGVhdmVDb3JwdXNNc2coYEVtYmVkZGluZ3MgYXJlIG5vdCBhdmFpbGFibGUgZm9yIG1vZGVsICcke3NlbGYudWlDb25mLm1vZGVsKCl9JyBhbmQgY29ycHVzICcke3NlbGYudWlDb25mLmNvcnB1cygpfScgYXQgdGhpcyB0aW1lLmApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2ID0gdmFsLnBheWxvYWRcblxuICAgICAgICAgICAgICAgICAgICBzZWxmLnZpenMuY29ycHVzSW5zcGVjdG9yLnVuaGlkZVZpZXcoKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnZpenMuY29ycHVzTWF0TWFuYWdlci51bmhpZGVWaWV3KClcblxuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgaGVpZ2h0cyBvZiBjb3JwdXMgaW5zcGVjdG9yIHJvd3MuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudml6cy5jb3JwdXNJbnNwZWN0b3IudXBkYXRlKHYpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdyYXBwZWRWYWxzID0gc2VsZi5fd3JhcFJlc3VsdHModilcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY291bnRlZFZhbHMgPSB3cmFwcGVkVmFscy5nZXRNYXRjaGVkSGlzdG9ncmFtKClcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0VmFscyA9IHdyYXBwZWRWYWxzLmdldE1heEF0dEhpc3RvZ3JhbSgpXG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmNvcnB1c01hdE1hbmFnZXIudXBkYXRlKHdyYXBwZWRWYWxzLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudml6cy5oaXN0b2dyYW1zLm1hdGNoZWRXb3JkLnVwZGF0ZShjb3VudGVkVmFscylcbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmhpc3RvZ3JhbXMubWF4QXR0LnVwZGF0ZShvZmZzZXRWYWxzKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnVpQ29uZi5kaXNwbGF5SW5zcGVjdG9yKCdlbWJlZGRpbmdzJylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQ29ycHVzSW5zcGVjdG9yRnJvbU1ldGEodGhpcy51aUNvbmYubWV0YU1hdGNoKCkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwiZGVmYXVsdFwiKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zZWFyY2hDb250ZXh0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc29sZS5sb2coXCJTRUFSQ0hJTkcgQ09OVEVYVFNcIik7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9nZXRTZWFyY2hDb250ZXh0KClcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBzZWxmLnVpQ29uZi5sYXllcigpXG4gICAgICAgIGNvbnN0IGhlYWRzID0gc2VsZi51aUNvbmYuaGVhZHMoKVxuICAgICAgICBjb25zdCBrID0gNTBcblxuICAgICAgICB0aGlzLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcInByb2dyZXNzXCIpXG5cbiAgICAgICAgc2VsZi5hcGkuZ2V0TmVhcmVzdENvbnRleHRzKHNlbGYudWlDb25mLm1vZGVsKCksIHNlbGYudWlDb25mLmNvcnB1cygpLCBjb250ZXh0LCBsYXllciwgaGVhZHMsIGspXG4gICAgICAgICAgICAudGhlbigodmFsOiByc3AuTmVhcmVzdE5laWdoYm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBHZXQgaGVpZ2h0cyBvZiBjb3JwdXMgaW5zcGVjdG9yIHJvd3MuXG4gICAgICAgICAgICAgICAgaWYgKHZhbC5zdGF0dXMgPT0gNDA2KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29udGV4dHMgYXJlIG5vdCBhdmFpbGFibGUhXCIpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmxlYXZlQ29ycHVzTXNnKGBDb250ZXh0cyBhcmUgbm90IGF2YWlsYWJsZSBmb3IgbW9kZWwgJyR7c2VsZi51aUNvbmYubW9kZWwoKX0nIGFuZCBjb3JwdXMgJyR7c2VsZi51aUNvbmYuY29ycHVzKCl9JyBhdCB0aGlzIHRpbWUuYClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHYgPSB2YWwucGF5bG9hZDtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJISURJTkdcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmNvcnB1c0luc3BlY3Rvci51cGRhdGUodilcblxuICAgICAgICAgICAgICAgICAgICBTZWwuaGlkZUVsZW1lbnQoc2VsZi5zZWxzLmNvcnB1c01zZ0JveClcbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmNvcnB1c0luc3BlY3Rvci51bmhpZGVWaWV3KClcbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmNvcnB1c01hdE1hbmFnZXIudW5oaWRlVmlldygpXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd3JhcHBlZFZhbHMgPSBzZWxmLl93cmFwUmVzdWx0cyh2KVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3VudGVkVmFscyA9IHdyYXBwZWRWYWxzLmdldE1hdGNoZWRIaXN0b2dyYW0oKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXRWYWxzID0gd3JhcHBlZFZhbHMuZ2V0TWF4QXR0SGlzdG9ncmFtKClcbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmNvcnB1c01hdE1hbmFnZXIudXBkYXRlKHdyYXBwZWRWYWxzLmRhdGEpXG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmhpc3RvZ3JhbXMubWF0Y2hlZFdvcmQudXBkYXRlKGNvdW50ZWRWYWxzKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnZpenMuaGlzdG9ncmFtcy5tYXhBdHQudXBkYXRlKG9mZnNldFZhbHMpXG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi51aUNvbmYuZGlzcGxheUluc3BlY3RvcignY29udGV4dCcpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvcnB1c0luc3BlY3RvckZyb21NZXRhKHRoaXMudWlDb25mLm1ldGFNYXRjaCgpKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnZpenMuaGlzdG9ncmFtcy5tYXhBdHQubWV0YShzZWxmLnVpQ29uZi5tZXRhTWF4KCkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwiZGVmYXVsdFwiKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9xdWVyeUNvbnRleHQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLnVpQ29uZi5oYXNUb2tlbigpKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWFyY2hDb250ZXh0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIldhcyB0b2xkIHRvIHNob3cgaW5zcGVjdG9yIGJ1dCB3YXMgbm90IGdpdmVuIGEgc2VsZWN0ZWQgdG9rZW4gZW1iZWRkaW5nXCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9xdWVyeUVtYmVkZGluZ3MoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLnVpQ29uZi5oYXNUb2tlbigpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuOiBcIiwgdGhpcy51aUNvbmYudG9rZW4oKSk7XG4gICAgICAgICAgICB0aGlzLl9zZWFyY2hFbWJlZGRpbmdzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIldhcyB0b2xkIHRvIHNob3cgaW5zcGVjdG9yIGJ1dCB3YXMgbm90IGdpdmVuIGEgc2VsZWN0ZWQgdG9rZW4gZW1iZWRkaW5nXCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9zZWFyY2hpbmdEaXNhYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnVpQ29uZi5oZWFkcygpLmxlbmd0aCA9PSAwKSB8fCAoIXRoaXMudWlDb25mLmhhc1Rva2VuKCkpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2VhcmNoRGlzYWJsZXIoKSB7XG4gICAgICAgIHRoaXMuX2Rpc2FibGVTZWFyY2hpbmcodGhpcy5fc2VhcmNoaW5nRGlzYWJsZWQoKSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0UXVlcnlGb3JtKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5fc2VhcmNoRGlzYWJsZXIoKVxuXG4gICAgICAgIHRoaXMuc2Vscy5jb250ZXh0UXVlcnkub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLl9xdWVyeUNvbnRleHQoKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuc2Vscy5lbWJlZGRpbmdRdWVyeS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHNlbGYuX3F1ZXJ5RW1iZWRkaW5ncygpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcmVuZGVySGVhZFN1bW1hcnkoKSB7XG4gICAgICAgIHRoaXMuc2Vscy5zZWxlY3RlZEhlYWRzXG4gICAgICAgICAgICAuaHRtbChSLmpvaW4oJywgJywgdGhpcy51aUNvbmYuaGVhZHMoKS5tYXAoaCA9PiBoICsgMSkpKVxuICAgIH1cblxuICAgIC8vIE1vZGlmeSBmYWlzcyByZXN1bHRzIHdpdGggY29ycmVzcG9uZGluZyBoZWlnaHRzXG4gICAgcHJpdmF0ZSBfd3JhcFJlc3VsdHMocmV0dXJuZWRGYWlzc1Jlc3VsdHM6IHRwLkZhaXNzU2VhcmNoUmVzdWx0c1tdKSB7XG5cbiAgICAgICAgY29uc3Qgcm93cyA9IGQzLnNlbGVjdEFsbCgnLmluc3BlY3Rvci1yb3cnKVxuXG4gICAgICAgIC8vIERvbid0IGp1c3QgdXNlIG9mZnNldEhlaWdodCBzaW5jZSB0aGF0IHJvdW5kcyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gICAgICAgIGNvbnN0IGhlaWdodHMgPSByb3dzLm5vZGVzKCkubWFwKChuOiBIVE1MRWxlbWVudCkgPT4gbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQpXG5cbiAgICAgICAgY29uc3QgbmV3VmFscyA9IHJldHVybmVkRmFpc3NSZXN1bHRzLm1hcCgodiwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFIuYXNzb2MoJ2hlaWdodCcsIGhlaWdodHNbaV0sIHYpXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHdyYXBwZWRWYWxzID0gbmV3IEZhaXNzU2VhcmNoUmVzdWx0V3JhcHBlcihuZXdWYWxzKVxuXG4gICAgICAgIHJldHVybiB3cmFwcGVkVmFsc1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdExheWVycyhuTGF5ZXJzOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBoYXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBjaGVja2JveGVzID0gc2VsZi5zZWxzLmxheWVyQ2hlY2tib3hlcy5zZWxlY3RBbGwoXCIubGF5ZXJDaGVja2JveFwiKVxuICAgICAgICAgICAgLmRhdGEoXy5yYW5nZSgwLCBuTGF5ZXJzKSlcbiAgICAgICAgICAgIC5qb2luKFwibGFiZWxcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJidG4gYnV0dG9uIGxheWVyQ2hlY2tib3hcIilcbiAgICAgICAgICAgIC5jbGFzc2VkKCdhY3RpdmUnLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEFzc2lnbiB0byBsYXJnZXN0IGxheWVyIGF2YWlsYWJsZSBpZiB1aUNvbmYubGF5ZXIoKSA+IG5ldyBuTGF5ZXJzXG4gICAgICAgICAgICAgICAgaWYgKGQgPT0gc2VsZi51aUNvbmYubGF5ZXIoKSkgeyAvLyBKYXZhc2NyaXB0IGlzIDAgaW5kZXhlZCFcbiAgICAgICAgICAgICAgICAgICAgaGFzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWhhc0FjdGl2ZSAmJiBkID09IG5MYXllcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi51aUNvbmYubGF5ZXIoZClcbiAgICAgICAgICAgICAgICAgICAgaGFzQWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRleHQoKGQpID0+IGQgKyAxKVxuICAgICAgICAgICAgLmFwcGVuZChcImlucHV0XCIpXG4gICAgICAgICAgICAuYXR0cihcInR5cGVcIiwgXCJyYWRpb1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImNoZWNrYm94LWlubGluZVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJuYW1lXCIsIFwibGF5ZXJib3hcIilcbiAgICAgICAgICAgIC8vIC5hdHRyKFwiaGVhZFwiLCBkID0+IGQpXG4gICAgICAgICAgICAuYXR0cihcImlkXCIsIChkLCBpKSA9PiBcImxheWVyQ2hlY2tib3hcIiArIGkpXG4gICAgICAgIC8vIC50ZXh0KChkLCBpKSA9PiBkICsgXCIgXCIpXG5cbiAgICAgICAgZnJvbUV2ZW50KGNoZWNrYm94ZXMubm9kZXMoKSwgJ2NoYW5nZScpLnBpcGUoXG4gICAgICAgICAgICB0YXAoKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbXlEYXRhID0gZDMuc2VsZWN0KDxCYXNlVHlwZT5lLnRhcmdldCkuZGF0dW0oKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhteURhdGEsIFwiLS0tIG15RGF0YVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbHMubGF5ZXJDaGVja2JveGVzLnNlbGVjdEFsbChcIi5sYXllckNoZWNrYm94XCIpXG4gICAgICAgICAgICAgICAgICAgIC5jbGFzc2VkKCdhY3RpdmUnLCBkID0+IGQgPT09IG15RGF0YSlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbWFwKCh2OiBFdmVudCkgPT4gK2QzLnNlbGVjdCg8QmFzZVR5cGU+di50YXJnZXQpLmRhdHVtKCkpLFxuICAgICAgICAgICAgdGFwKHYgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTmV3IGxheWVyOiBcIiwgdik7XG4gICAgICAgICAgICAgICAgc2VsZi51aUNvbmYubGF5ZXIodik7XG4gICAgICAgICAgICAgICAgc2VsZi5zZWxzLmJvZHkuc3R5bGUoXCJjdXJzb3JcIiwgXCJwcm9ncmVzc1wiKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgc3dpdGNoTWFwKCh2KSA9PiBmcm9tKHNlbGYuYXBpLnVwZGF0ZU1hc2tlZEF0dGVudGlvbnMoc2VsZi51aUNvbmYubW9kZWwoKSwgc2VsZi50b2tDYXBzdWxlLmEsIHNlbGYudWlDb25mLnNlbnRlbmNlKCksIHYpKSlcbiAgICAgICAgKS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgbmV4dDogKHJlc3A6IHJzcC5BdHRlbnRpb25EZXRhaWxzUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByID0gcmVzcC5wYXlsb2FkO1xuICAgICAgICAgICAgICAgIHNlbGYuYXR0Q2Fwc3VsZS51cGRhdGVGcm9tTm9ybWFsKHIsIHRoaXMudWlDb25mLmhpZGVDbHNTZXAoKSk7XG4gICAgICAgICAgICAgICAgc2VsZi50b2tDYXBzdWxlLnVwZGF0ZVRva2VucyhyKTtcbiAgICAgICAgICAgICAgICBzZWxmLnVpQ29uZi5tYXNrSW5kcyhzZWxmLnRva0NhcHN1bGUuYS5tYXNrSW5kcylcbiAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIHNlbGYuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwiZGVmYXVsdFwiKVxuICAgICAgICAgICAgICAgIHNlbGYuX3RvZ2dsZVRva2VuU2VsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgbGF5ZXJJZCA9IGAjbGF5ZXJDaGVja2JveCR7dGhpcy51aUNvbmYubGF5ZXIoKX1gXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTGF5ZXIgSUQ6IFwiLCBsYXllcklkKTtcbiAgICAgICAgZDMuc2VsZWN0KGxheWVySWQpLmF0dHIoXCJjaGVja2VkXCIsIFwiY2hlY2tlZFwiKVxuXG4gICAgICAgIC8vIEluaXQgdGhyZXNob2xkIHN0dWZmXG4gICAgICAgIGNvbnN0IGRpc3BUaHJlc2ggPSAodGhyZXNoKSA9PiBNYXRoLnJvdW5kKHRocmVzaCAqIDEwMClcbiAgICAgICAgZDMuc2VsZWN0KCcjbXktcmFuZ2UtdmFsdWUnKS50ZXh0KGRpc3BUaHJlc2goc2VsZi51aUNvbmYudGhyZXNob2xkKCkpKVxuXG4gICAgICAgIHRoaXMuc2Vscy50aHJlc2hTbGlkZXIub24oXCJpbnB1dFwiLCBfLnRocm90dGxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSA8SFRNTElucHV0RWxlbWVudD50aGlzO1xuICAgICAgICAgICAgc2VsZi51aUNvbmYudGhyZXNob2xkKCtub2RlLnZhbHVlIC8gMTAwKTtcbiAgICAgICAgICAgIGQzLnNlbGVjdCgnI215LXJhbmdlLXZhbHVlJykudGV4dChkaXNwVGhyZXNoKHNlbGYudWlDb25mLnRocmVzaG9sZCgpKSlcbiAgICAgICAgICAgIHNlbGYudml6cy5hdHRlbnRpb25TdmcudGhyZXNob2xkKHNlbGYudWlDb25mLnRocmVzaG9sZCgpKVxuICAgICAgICB9LCAxMDApKVxuXG4gICAgICAgIHRoaXMuc2Vscy5oZWFkU2VsZWN0QWxsLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi51aUNvbmYuc2VsZWN0QWxsSGVhZHMoKTtcbiAgICAgICAgICAgIHNlbGYuX3NlYXJjaERpc2FibGVyKClcbiAgICAgICAgICAgIHNlbGYucmVuZGVyU3ZnKClcbiAgICAgICAgICAgIHNlbGYucmVuZGVyQXR0SGVhZCgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5zZWxzLmhlYWRTZWxlY3ROb25lLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi51aUNvbmYuc2VsZWN0Tm9IZWFkcygpO1xuICAgICAgICAgICAgc2VsZi5fc2VhcmNoRGlzYWJsZXIoKTtcbiAgICAgICAgICAgIHNlbGYucmVuZGVyU3ZnKClcbiAgICAgICAgICAgIHNlbGYucmVuZGVyQXR0SGVhZCgpXG4gICAgICAgICAgICBTZWwuc2V0SGlkZGVuKFwiLmF0bi1jdXJ2ZVwiKVxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgX2luaXRUb2dnbGUoKSB7XG4gICAgICAgIGZyb21FdmVudCh0aGlzLnNlbHMuY2xzVG9nZ2xlLm5vZGUoKSwgJ2lucHV0JykucGlwZShcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgLS0gVE9ETzogRklYICFcbiAgICAgICAgICAgIG1hcChlID0+IGUuc3JjRWxlbWVudC5jaGVja2VkKSxcbiAgICAgICAgKS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgbmV4dDogdiA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51aUNvbmYuaGlkZUNsc1NlcCh2KVxuICAgICAgICAgICAgICAgIHRoaXMuYXR0Q2Fwc3VsZS56ZXJvZWQodilcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclN2ZygpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQXR0SGVhZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlckF0dEhlYWQoKSB7XG4gICAgICAgIGNvbnN0IGhlYWRzID0gXy5yYW5nZSgwLCB0aGlzLnVpQ29uZi5fbkhlYWRzKVxuICAgICAgICBjb25zdCBmb2N1c0F0dCA9IHRoaXMuYXR0Q2Fwc3VsZS5hdHRcbiAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLnVpQ29uZi5oYXNUb2tlbigpID8gdGhpcy51aUNvbmYudG9rZW4oKSA6IG51bGxcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGxlZnRBdHRJbmZvID0gZ2V0QXR0ZW50aW9uSW5mbyhmb2N1c0F0dCwgaGVhZHMsIFwibGVmdFwiLCB0b2tlbik7XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCByaWdodEF0dEluZm8gPSBnZXRBdHRlbnRpb25JbmZvKGZvY3VzQXR0LCBoZWFkcywgXCJyaWdodFwiLCB0b2tlbik7XG4gICAgICAgIHRoaXMudml6cy5sZWZ0SGVhZHMub3B0aW9ucy5vZmZzZXQgPSB0aGlzLnVpQ29uZi5vZmZzZXRcbiAgICAgICAgdGhpcy52aXpzLmxlZnRIZWFkcy51cGRhdGUobGVmdEF0dEluZm8pXG4gICAgICAgIHRoaXMudml6cy5yaWdodEhlYWRzLnVwZGF0ZShyaWdodEF0dEluZm8pXG4gICAgICAgIHRoaXMuX3JlbmRlckhlYWRTdW1tYXJ5KCk7XG5cbiAgICAgICAgLy8gTWFrZSBzdXJlXG4gICAgICAgIGhlYWRzLmZvckVhY2goKGgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVpQ29uZi5oZWFkU2V0KCkuaGFzKGgpKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0SGVhZChoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1bnNlbGVjdEhlYWQoaClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmVuZGVyVG9rZW5zKCkge1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy50b2tDYXBzdWxlW3RoaXMudWlDb25mLmF0dFR5cGVbMF1dXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy50b2tDYXBzdWxlW3RoaXMudWlDb25mLmF0dFR5cGVbMV1dXG5cbiAgICAgICAgY29uc29sZS5sb2coXCJub3c6IFwiLCB0aGlzLnVpQ29uZi5vZmZzZXQpO1xuICAgICAgICB0aGlzLnZpenMudG9rZW5zLmxlZnQub3B0aW9ucy5vZmZzZXQgPSB0aGlzLnVpQ29uZi5vZmZzZXRcbiAgICAgICAgdGhpcy52aXpzLnRva2Vucy5sZWZ0LnVwZGF0ZShsZWZ0LnRva2VuRGF0YSk7XG4gICAgICAgIHRoaXMudml6cy50b2tlbnMubGVmdC5tYXNrKGxlZnQubWFza0luZHMpO1xuICAgICAgICB0aGlzLnZpenMudG9rZW5zLnJpZ2h0LnVwZGF0ZShyaWdodC50b2tlbkRhdGEpO1xuICAgICAgICB0aGlzLnZpenMudG9rZW5zLnJpZ2h0Lm1hc2socmlnaHQubWFza0luZHMpO1xuICAgICAgICAvLyBkaXNwbGF5U2VsZWN0ZWRUb2tlblxuICAgIH1cblxuICAgIHJlbmRlclN2ZygpIHtcbiAgICAgICAgY29uc3QgYXR0ID0gdGhpcy5hdHRDYXBzdWxlLmJ5SGVhZHModGhpcy51aUNvbmYuaGVhZHMoKSlcbiAgICAgICAgdGhpcy52aXpzLmF0dGVudGlvblN2Zy5vcHRpb25zLm9mZnNldCA9IHRoaXMudWlDb25mLm9mZnNldFxuICAgICAgICBjb25zdCBzdmcgPSA8QXR0ZW50aW9uR3JhcGg+dGhpcy52aXpzLmF0dGVudGlvblN2Zy5kYXRhKGF0dCk7XG4gICAgICAgIHN2Zy51cGRhdGUoYXR0KVxuICAgICAgICBjb25zdCBtYXhUb2tlbnMgPSBfLm1heChbdGhpcy50b2tDYXBzdWxlLmEubGVuZ3RoKCldKVxuICAgICAgICBjb25zdCBuZXdIZWlnaHQgPSBzdmcub3B0aW9ucy5ib3hoZWlnaHQgKiBtYXhUb2tlbnNcbiAgICAgICAgc3ZnLmhlaWdodChuZXdIZWlnaHQpXG5cbiAgICAgICAgLy8gRG9uJ3QgcmVkaXNwbGF5IGV2ZXJ5dGhpbmcgaWYgb25lIHRva2VuIGlzIHNlbGVjdGVkXG4gICAgICAgIHNob3dCeVNpZGUodGhpcy51aUNvbmYudG9rZW4oKSlcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLnJlbmRlclRva2VucygpO1xuICAgICAgICB0aGlzLnJlbmRlclN2ZygpO1xuICAgICAgICB0aGlzLnJlbmRlckF0dEhlYWQoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxufVxuIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==