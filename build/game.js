/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
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
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		"game": 0
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "/build/";
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
/******/ 	deferredModules.push(["./src/Game.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var Preloader_1 = __webpack_require__(/*! ./scenes/Preloader */ "./src/scenes/Preloader.ts");
var Main_1 = __webpack_require__(/*! ./scenes/Main */ "./src/scenes/Main.ts");
var config = {
    type: Phaser.AUTO,
    parent: "canvas",
    width: 960,
    height: 540,
    scene: [
        Preloader_1.Preloader,
        Main_1.Main
    ]
};
var game = new Phaser.Game(config);


/***/ }),

/***/ "./src/config/preload.ts":
/*!*******************************!*\
  !*** ./src/config/preload.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * MP3 and OGG-Vorbis are the most heavily supported
 * audio formats for modern browsers
 *
 * OGG-Vorbis is optionally set as the fallback audio
 */
var AudioFile = /** @class */ (function () {
    function AudioFile(key, mp3, ogg) {
        this.key = key;
        this.mp3 = mp3;
        this.ogg = ogg;
    }
    return AudioFile;
}());
exports.AudioFile = AudioFile;
var assetDir = "../../assets";
exports.config = {
    // spritesheets
    ssPath: assetDir + "/spritesheets/",
    sheets: [
        "sheet1"
    ],
    // audio
    audioPath: assetDir + "/audio/",
    audioFiles: [
        new AudioFile('DOG', 'DOG.mp3', 'DOG.ogg')
    ]
};


/***/ }),

/***/ "./src/scenes/Main.ts":
/*!****************************!*\
  !*** ./src/scenes/Main.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super.call(this, "main") || this;
    }
    Main.prototype.create = function () {
        var logo = this.add.sprite(this.sys.canvas.width / 2, this.sys.canvas.height / 2, 'sheet1', 'phaser-logo');
        var music = this.sound.add('DOG');
        this.input.on('pointerdown', function (pointer) {
            if (!music.isPlaying) {
                music.play();
            }
            logo.setPosition(pointer.x, pointer.y);
        });
    };
    return Main;
}(Phaser.Scene));
exports.Main = Main;


/***/ }),

/***/ "./src/scenes/Preloader.ts":
/*!*********************************!*\
  !*** ./src/scenes/Preloader.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preload_1 = __webpack_require__(/*! ../config/preload */ "./src/config/preload.ts");
var Preloader = /** @class */ (function (_super) {
    __extends(Preloader, _super);
    function Preloader() {
        return _super.call(this, {
            key: 'preloader',
            files: [
                { type: 'image', key: 'bar', url: '../../assets/images/loadBar.png' },
                { type: 'image', key: 'barBg', url: '../../assets/images/barBg.png' }
            ]
        }) || this;
    }
    Preloader.prototype.preload = function () {
        // add the loading bar to use as a display for the loading progress of the remainder of the assets
        var barBg = this.add.image(this.sys.canvas.width / 2, this.sys.canvas.height / 2, 'barBg');
        var bar = this.add.sprite(this.sys.canvas.width / 2, this.sys.canvas.height / 2, 'bar');
        bar.setOrigin(0, 0.5);
        bar.setPosition(bar.x - (bar.width / 2), bar.y);
        bar.setScale(0, 1);
        this.load.on('progress', function (progress) {
            bar.setScale(progress, 1);
        });
        this.load.on('complete', function () {
            barBg.destroy();
            bar.destroy();
        });
        // load assets declared in the preload config
        this.loadAtlas();
        this.loadAudio();
    };
    Preloader.prototype.create = function () {
        this.scene.start('main');
        this.scene.remove('preloader');
    };
    Preloader.prototype.loadAtlas = function () {
        var sheetPath = preload_1.config.ssPath;
        var sheets = preload_1.config.sheets;
        this.load.setPath(sheetPath);
        for (var i = 0; i < sheets.length; i++) {
            this.load.atlas(sheets[i], sheetPath + sheets[i] + ".png", sheetPath + sheets[i] + ".json");
        }
    };
    Preloader.prototype.loadAudio = function () {
        var audioPath = preload_1.config.audioPath;
        var audioFiles = preload_1.config.audioFiles;
        this.load.setPath(audioPath);
        for (var i = 0; i < audioFiles.length; i++) {
            this.load.audio(audioFiles[i].key, audioPath + audioFiles[i].mp3, audioPath + audioFiles[i].ogg);
        }
    };
    return Preloader;
}(Phaser.Scene));
exports.Preloader = Preloader;


/***/ })

/******/ });
//# sourceMappingURL=game.js.map