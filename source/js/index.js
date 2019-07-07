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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ \"./src/ts/init.ts\");\n // @ts-ignore\n\nwindow.frilling = {\n  init: _init__WEBPACK_IMPORTED_MODULE_0__[\"init\"]\n};\n\n//# sourceURL=webpack:///./src/ts/index.ts?");

/***/ }),

/***/ "./src/ts/init.ts":
/*!************************!*\
  !*** ./src/ts/init.ts ***!
  \************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _ui_article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/article */ \"./src/ts/ui/article.ts\");\n/* harmony import */ var _ui_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/navbar */ \"./src/ts/ui/navbar.ts\");\n\n\n\nconst init = (document, layout) => {\n  Object(_ui_navbar__WEBPACK_IMPORTED_MODULE_1__[\"initNavbar\"])(document);\n\n  if (layout === \"post\" || layout === \"index\" || layout === \"archive\") {\n    Object(_ui_article__WEBPACK_IMPORTED_MODULE_0__[\"initArticle\"])(document);\n  }\n};\n\n\n\n//# sourceURL=webpack:///./src/ts/init.ts?");

/***/ }),

/***/ "./src/ts/ui/article.ts":
/*!******************************!*\
  !*** ./src/ts/ui/article.ts ***!
  \******************************/
/*! exports provided: initArticle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initArticle\", function() { return initArticle; });\nconst initArticle = document => {\n  const $tables = document.querySelectorAll(\".article-content > table\");\n  $tables.forEach($table => {\n    // Manipulate a virtual element instead of the actual one to improve performance\n    const $tableClone = $table.cloneNode(true);\n    const $tableWrapperVirtual = document.createElement(\"div\");\n    $tableClone.classList.add(\"table\", \"table-bordered\", \"table-hover\");\n    $tableWrapperVirtual.classList.add(\"table-responsive\");\n    $tableWrapperVirtual.appendChild($tableClone);\n    $table.replaceWith($tableWrapperVirtual);\n  });\n};\n\n\n\n//# sourceURL=webpack:///./src/ts/ui/article.ts?");

/***/ }),

/***/ "./src/ts/ui/navbar.ts":
/*!*****************************!*\
  !*** ./src/ts/ui/navbar.ts ***!
  \*****************************/
/*! exports provided: initNavbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initNavbar\", function() { return initNavbar; });\nconst initNavbar = document => {\n  const $navToggler = document.querySelector(\"#navbarToggler\");\n  const $navMenu = document.querySelector(\"#navbarMenu\");\n  let isNavOpen = false;\n  $navToggler.addEventListener(\"click\", () => {\n    isNavOpen = !isNavOpen;\n    $navToggler.classList.toggle(\"collapsed\");\n    $navMenu.classList.toggle(\"show\");\n    $navToggler.setAttribute(\"aria-expanded\", String(isNavOpen));\n    $navMenu.setAttribute(\"aria-hidden\", String(!isNavOpen));\n  }, false);\n};\n\n\n\n//# sourceURL=webpack:///./src/ts/ui/navbar.ts?");

/***/ })

/******/ });