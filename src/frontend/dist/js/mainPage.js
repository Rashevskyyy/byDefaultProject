var dist;
(self["webpackChunkdist"] = self["webpackChunkdist"] || []).push([["mainPage"],{

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

/***/ "./js/mainPage.js":
/*!************************!*\
  !*** ./js/mainPage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mainPage_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mainPage.html */ "./mainPage.html");
/* harmony import */ var _scss_header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/header.scss */ "./scss/header.scss");
/* harmony import */ var _scss_mainPage_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/mainPage.scss */ "./scss/mainPage.scss");




/***/ }),

/***/ "./mainPage.html":
/*!***********************!*\
  !*** ./mainPage.html ***!
  \***********************/
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
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <title>Main Page</title>\r\n    <!-- <link rel=\"stylesheet\" href=\"../css/mainPage.css\">\r\n    <link rel=\"stylesheet\" href=\"../css/header.css\"> -->\r\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\">\r\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\" rel=\"stylesheet\">\r\n</head>\r\n<body>\r\n    <header>\r\n        <div class=\"container\">\r\n            <div class=\"container__name block\">\r\n                <div class=\"block__left\">\r\n                    <img class=\"block__left-logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\r\n                    <h2 class=\"block__left-name\">ByDefault</h2>  \r\n                </div>\r\n                <div class=\"block__right\">\r\n                    <div class=\"dropdown\">\r\n                        <button class=\"dropbtn\" onclick=\"myFunction()\" id=\"localization-switch\">\r\n                            En\r\n                        </button>\r\n                        <div class=\"dropdown-content\" id=\"myDropdown\">\r\n                            <a href=\"#\">Russian</a>\r\n                            <hr>\r\n                            <a href=\"#\">English</a>\r\n                        </div>\r\n                    </div>\r\n                    <button class=\"topic\"></button>\r\n                     <div class=\"dropdown\">\r\n                        <button class=\"setting\" onclick=\"settingFunc()\"></button>\r\n                        <div class=\"dropdown-content\" id=\"settingDropdown\"> <!---->\r\n                            <a href=\"#\">Change password</a>\r\n                            <hr>\r\n                            <a href=\"#\">Change login</a>\r\n                        </div>\r\n                    </div>\r\n                    <button class=\"signout\"><img class=\"topic\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\"></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </header>\r\n<!--<select id=\"DataBasesDropDown\">\r\n    <option id=\"MySQL_option\" value=\"MySQL\">MySQL</option>\r\n    <option id=\"PostgreSQL_option\" value=\"PostgreSQL\">PostgreSQL</option>\r\n    <option id=\"H2_option\" value=\"H2\">H2</option>\r\n    <option id=\"MongoDB_option\" value=\"MongoDB\">MongoDB</option>\r\n    <option id=\"Redis_option\" value=\"Redis\">Redis</option>\r\n    <option id=\"Cassandra_option\" value=\"Cassandra\">Cassandra</option>\r\n    <option id=\"GraphDB_option\" value=\"GraphDB\">GraphDB</option>\r\n</select>\r\n<select id=\"SortDropDown\">\r\n    <option id=\"ID_option\" value=\"ID\">ID</option>\r\n    <option id=\"FirstName_option\" value=\"FirstName\">FirstName</option>\r\n    <option id=\"LastName_option\" value=\"LastName\">LastName</option>\r\n    <option id=\"Age_option\" value=\"Age\">Age</option>\r\n    <option id=\"City_option\" value=\"City\">City</option>\r\n    <option id=\"PhoneNumber_option\" value=\"PhoneNumber\">PhoneNumber</option>\r\n    <option id=\"Email_option\" value=\"Email\">Email</option>\r\n    <option id=\"CompanyName_option\" value=\"CompanyName\">CompanyName</option>\r\n</select>\r\n<button id=\"CreateButton\">Create</button>\r\n<button id=\"UpdateButton\">Update</button>\r\n<button id=\"DeleteButton\">Delete</button>\r\n<button id=\"ClearAllButton\">Clear All</button>\r\n<input id=\"SearchInput\">-->\r\n\r\n\r\n<footer class=\"footer\"> </footer>\r\n\r\n<!-- <script src=\"../script/localization.js\"></script> -->\r\n</body>\r\n</html>";
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

/***/ "./scss/mainPage.scss":
/*!****************************!*\
  !*** ./scss/mainPage.scss ***!
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
/******/ var __webpack_exports__ = (__webpack_exec__("./js/mainPage.js"));
/******/ dist = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=mainPage.js.map