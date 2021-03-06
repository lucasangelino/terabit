webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/NoticiaCiencia.js":
/*!**************************************!*\
  !*** ./components/NoticiaCiencia.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\langelin\\OneDrive - Telefonica\\Lucas\\Bazoo\\terabit\\components\\NoticiaCiencia.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var NoticiaCiencia = function NoticiaCiencia(info) {
  var _info$info = info.info,
      title = _info$info.title,
      description = _info$info.description,
      url = _info$info.url; // obtengo primeros 200 caracteres

  var desc = description;
  {
    console.log(desc);
  }

  if (desc) {
    desc = desc.substr(0, 250) + '...';
  }

  return __jsx("div", {
    className: "card text-white bg-primary mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "card-body shadow-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("h4", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, title), __jsx("p", {
    className: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, desc)));
};

/* harmony default export */ __webpack_exports__["default"] = (NoticiaCiencia);

/***/ })

})
//# sourceMappingURL=index.js.0335be8a1ac79d45c341.hot-update.js.map