var dist;
(self["webpackChunkdist"] = self["webpackChunkdist"] || []).push([["home"],{

/***/ "./img/header-light-mode-logo.png":
/*!****************************************!*\
  !*** ./img/header-light-mode-logo.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fecdfcae8402e2e71e91.png";

/***/ }),

/***/ "./img/header-logo.png":
/*!*****************************!*\
  !*** ./img/header-logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "301237dc9274605ba3db.png";

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _scss_header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/header.scss */ "./scss/header.scss");
/* harmony import */ var _scss_homePage_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/homePage.scss */ "./scss/homePage.scss");
/* harmony import */ var _mods_welcome_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mods/welcome.js */ "./mods/welcome.js");




document.getElementById('localization-switch').onclick = myFunction;

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");

    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}; // const button = document.querySelector('.button')
// button.addEventListener('click', ()=>{
//     click();
// });

/***/ }),

/***/ "./mods/welcome.js":
/*!*************************!*\
  !*** ./mods/welcome.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var click = function click() {
  console.log("click");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (click);

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/header-logo.png */ "./img/header-logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/header-light-mode-logo.png */ "./img/header-light-mode-logo.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <title>Home Page</title>\r\n    <!-- <link rel=\"stylesheet\" href=\"../css/homePage.css\">\r\n    <link rel=\"stylesheet\" href=\"../css/header.css\"> -->\r\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\">\r\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\" rel=\"stylesheet\">\r\n</head>\r\n<body>\r\n<header>\r\n    <div class=\"container\">\r\n        <div class=\"container__name block\">\r\n            <div class=\"block__left\">\r\n                <img class=\"block__left-logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\r\n                <h2 class=\"block__left-name\">ByDefault</h2>  \r\n            </div>\r\n            <div class=\"block__right\">\r\n                <div class=\"dropdown\">\r\n                    <a href=\"./createAccount.html\">NEXT</a>\r\n                    <button class=\"dropbtn\" id=\"localization-switch\">\r\n                        En\r\n                    </button>\r\n                    <div class=\"dropdown-content\" id=\"myDropdown\">\r\n                        <a href=\"#\">Russian</a>\r\n                        <hr>\r\n                        <a href=\"#\">English</a>\r\n                    </div>\r\n                </div>\r\n                <button class=\"topic\"><img class=\"topic\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\"></button> \r\n            </div>\r\n        </div>\r\n    </div>\r\n</header>\r\n<!--<button id=\"SignInButton_HomePage\"> Sign In</button>\r\n<button id=\"RegisterButton\"> Register now</button>-->\r\n\r\n\r\n<footer>\r\n\r\n</footer>\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./scss/header.scss":
/*!**************************!*\
  !*** ./scss/header.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./scss/homePage.scss":
/*!****************************!*\
  !*** ./scss/homePage.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./js/script.js"));
/******/ dist = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=home.js.map