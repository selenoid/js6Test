/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/CustomApp.js":
/*!**************************!*\
  !*** ./app/CustomApp.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CustomApp; });\n\n\nclass CustomApp {\n\n\tconstructor(arr) {\n\t\tconsole.log('CustomApp instance created...');\n\t\tthis.arr = arr;\n\t\tthis.start(this.arr);\n\t}\n\n\tstart(array) {\n\t\t// traversing the cells in the  hashmap\n\t\tfor (var i = 0; i < array.length; i++) {\n\t\t\tfor (var n = 0; n < array[i].length; n++) {\n\t\t\t\tvar totals = this.addItems(this.calculateNeighbours({\n\t\t\t\t\tx: n,\n\t\t\t\t\ty: i\n\t\t\t\t}));\n\t\t\t\tthis.arr[i][n] = totals > 0 ? totals : this.arr[i][n];\n\t\t\t}\n\t\t}\n\n\t\tthis.draw();\n\t}\n\n\t//get the mines around the selected cell\n\tcalculateNeighbours(cell) {\n\t\tconst cValue = this.getCValue(cell.y, cell.x);\n\n\t\t//return if the cell is a mine.\n\t\tif (cValue === \"X\") return [];\n\n\t\tlet i, j;\n\t\tlet data = [];\n\n\t\tfor (i = cell.y - 1; i <= cell.y + 1; i++) {\n\t\t\tif (i < 0 || i >= this.arr.length) continue;\n\t\t\tfor (j = cell.x - 1; j <= cell.x + 1; j++) {\n\t\t\t\tif (j < 0 || j >= this.arr[0].length) continue;\n\t\t\t\tdata.push(this.getCValue(i, j));\n\t\t\t}\n\t\t}\n\t\treturn data;\n\t}\n\n\t//getting the sum of the neighbouring cells that are mines\n\taddItems(items) {\n\t\tlet count = 0;\n\t\tfor (var i = 0; i < items.length; i++) {\n\t\t\tcount += items[i] === \"X\" ? 1 : 0;\n\t\t}\n\t\treturn count;\n\t}\n\n\t//retrieve the value of the cell in the hash, with the index id [i][j] .\n\tgetCValue(i, j) {\n\t\treturn this.arr[i][j].toString().toUpperCase();\n\t}\n\n\t//generate console output\n\tdraw() {\n\t\tfor (var i = 0; i < this.arr.length; i++) {\n\t\t\tlet line = '';\n\t\t\tfor (var n = 0; n < this.arr[i].length; n++) {\n\t\t\t\tline += this.arr[i][n] + \" \";\n\t\t\t}\n\t\t\tconsole.log(line.toString().toUpperCase());\n\t\t}\n\t}\n}\n\n//# sourceURL=webpack:///./app/CustomApp.js?");

/***/ }),

/***/ "./app/main.js":
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CustomApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomApp */ \"./app/CustomApp.js\");\n//main.js\n\n\nlet sArr = [['x', 'O', 'O', 'x', 'X', 'x', 'O', 'O'], ['O', 'O', 'O', 'O', 'X', 'O', 'X', 'x'], ['X', 'X', 'O', 'X', 'X', 'O', 'O', 'O'], ['O', 'X', 'O', 'O', 'O', 'X', 'X', 'X'], ['O', 'o', 'X', 'X', 'X', 'X', 'O', 'x'], ['X', 'O', 'X', 'x', 'X', 'O', 'x', 'O'], ['O', 'O', 'O', 'X', 'O', 'X', 'O', 'X'], ['X', 'O', 'X', 'x', 'O', 'X', 'O', 'x']];\n\nconst app = new _CustomApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"](sArr);\n\n//# sourceURL=webpack:///./app/main.js?");

/***/ })

/******/ });