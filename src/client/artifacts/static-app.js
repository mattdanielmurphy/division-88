(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 61);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {
  apiUrl: 'https://division-88-6430e.web.app/api'
};

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["Router"]; });



/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_textfit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19);
/* harmony import */ var react_textfit__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_textfit__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20);
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_grid_layout__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_sizeme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56);
/* harmony import */ var react_sizeme__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_sizeme__WEBPACK_IMPORTED_MODULE_11__);













var Heading =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Heading, _React$Component);

  function Heading() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Heading);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Heading)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "top-heading"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_textfit__WEBPACK_IMPORTED_MODULE_9__["Textfit"], {
        mode: "single",
        max: 50
      }, _this.props.children));
    });

    return _this;
  }

  return Heading;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

var HeadingWithBackgroundImage =
/*#__PURE__*/
function (_React$Component2) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(HeadingWithBackgroundImage, _React$Component2);

  function HeadingWithBackgroundImage() {
    var _getPrototypeOf3;

    var _this2;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, HeadingWithBackgroundImage);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf3 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(HeadingWithBackgroundImage)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this2), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "top-heading background-image",
        style: {
          backgroundImage: "url(".concat(_this2.props.image, ")")
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_textfit__WEBPACK_IMPORTED_MODULE_9__["Textfit"], {
        mode: "single",
        max: 50
      }, _this2.props.children));
    });

    return _this2;
  }

  return HeadingWithBackgroundImage;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

var PageContent =
/*#__PURE__*/
function (_React$Component3) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(PageContent, _React$Component3);

  function PageContent() {
    var _getPrototypeOf4;

    var _this3;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, PageContent);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this3 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf4 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(PageContent)).call.apply(_getPrototypeOf4, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this3), "render", function () {
      return !_this3.props.noTopHeading && (_this3.props.backgroundImage ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(HeadingWithBackgroundImage, {
        image: _this3.props.backgroundImage
      }, _this3.props.state.heading.text, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, _this3.props.state.heading.spanText)) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Heading, null, _this3.props.state.heading.text, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, _this3.props.state.heading.spanText)));
    });

    return _this3;
  }

  return PageContent;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

var Page =
/*#__PURE__*/
function (_React$Component4) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Page, _React$Component4);

  function Page() {
    var _getPrototypeOf5;

    var _this4;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Page);

    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    _this4 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf5 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Page)).call.apply(_getPrototypeOf5, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this4), "getPathname", function () {
      return window.location.pathname.replace(/\/(admin)*/g, '');
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this4), "getPageName", function () {
      return _this4.getPathname().split('-').join(' ');
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this4), "state", {
      id: _this4.props.id,
      heading: '',
      pageName: ''
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this4), "render", function () {
      // const props = this.props
      // console.log(props)
      // const children = React.Children.map(this.props.children, (child) => {
      // 	return React.cloneElement(child, { ...props })
      // })
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_sizeme__WEBPACK_IMPORTED_MODULE_11__["SizeMe"], null, function (_ref) {
        var size = _ref.size;
        return _this4.state.id ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          id: _this4.state.id,
          className: _this4.getMainContainerClassName(size)
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(PageContent, {
          state: _this4.state
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("main", null, _this4.props.children)) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null);
      });
    });

    return _this4;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Page, [{
    key: "getHeading",
    value: function getHeading() {
      if (this.props.heading) {
        // if string provided instead of object, assume it heading text
        return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(this.props.heading) === 'object' ? this.props.heading : {
          text: this.props.heading
        };
      } else return {
        text: this.getPageName()
      };
    }
  }, {
    key: "getMainContainerClassName",
    value: function getMainContainerClassName(_ref2) {
      var width = _ref2.width;
      var tablet = 768;
      var desktop = 1366;
      var view = width < tablet ? 'mobile' : width < desktop ? 'tablet' : 'desktop';
      return "main-container ".concat(view);
    }
  }, {
    key: "getParentElementsBeforeBody",
    value: function getParentElementsBeforeBody(element) {
      var parentElements = [];

      var getParentElement = function getParentElement(element) {
        element = element.parentElement;
        if (element.tagName === 'BODY') return;
        parentElements.push(element);
        getParentElement(element);
      };

      getParentElement(element);
      return parentElements;
    }
  }, {
    key: "setParentElementsTo100PercentHeight",
    value: function setParentElementsTo100PercentHeight() {
      var parentElements = this.getParentElementsBeforeBody(document.querySelector('#content'));
      parentElements.forEach(function (element) {
        return element.style.height = '100%';
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setParentElementsTo100PercentHeight();
      this.setState({
        id: this.getPathname(),
        pageName: this.getPageName(),
        heading: this.getHeading()
      });
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(22);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(64);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(66);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(46);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(47);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(67);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(36);

var _helpers = __webpack_require__(68);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props, context).then(function (mod) {
          var state = {
            mod: mod,
            props: props,
            context: context
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props,
            context: context
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props,
            context: context
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod,
            context: context
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod,
          context: context
        }, context, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          context: context,
          props: props
        };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextTypes = {
    store: _propTypes2["default"].object,
    report: _propTypes2["default"].func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(35)(module)))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Image; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _index_GridItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39);







 // import ProgressiveImage from 'react-progressive-image'

var Image =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Image, _React$Component);

  function Image() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Image);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(Image)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "state", {
      style: {
        background: "url(".concat(_this.props.src, ") center/cover no-repeat")
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: _this.state.style,
        className: "img ".concat(_this.props.selected ? 'selected' : '')
      });
    });

    return _this;
  }

  return Image;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-textfit");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-grid-layout");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(36);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(65)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_jsx_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_jsx_Page__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    name: "About"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "text"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "So utterly lost was he to all sense of reverence for the many marvels of their majestic bulk and mystic ways; and so dead to anything like an apprehension of any possible danger from encountering them; that in his poor opinion, the wondrous whale was but a species of magnified mouse, or at least water-rat, requiring only a little circumvention and some small application of time and trouble in order to kill and boil."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "I told him that I never liked to sleep two in a bed; that if I should ever do so, it would depend upon who the harpooneer might be, and that if he (the landlord) really had no other place for me, and the harpooneer was not decidedly objectionable, why rather than wander further about a strange town on so bitter a night, I would put up with the half of any decent man\u2019s blanket.")));
});

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_jsx_Router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12);
/* harmony import */ var _components_jsx_Image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18);
/* harmony import */ var _components_jsx_Page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(17);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(10);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var client_env__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(11);
/* harmony import */ var client_env__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(client_env__WEBPACK_IMPORTED_MODULE_14__);














 //static:
// export default () => {
// 	const { producerTools } = useRouteData()
// 	return (
// 		<Page>
// 			<div className="grid">
// 				{producerTools.map((tool, index) => (
// 					<Link key={index} to={`producer-tools/${tool.page}`}>
// 						<img src={tool.img} alt="" />
// 						<h2>{tool.name}</h2>
// 						<div className="description">{tool.description}</div>
// 					</Link>
// 				))}
// 				<Link to="/" />
// 				<Link to="/" />
// 			</div>
// 		</Page>
// 	)
// }
// dyanmic:

var _default =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(_default, _React$Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "state", {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "getProducerTools",
    /*#__PURE__*/
    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_13___default.a.get("".concat(client_env__WEBPACK_IMPORTED_MODULE_14___default.a.apiUrl, "/producer-tools")).then(function (r) {
                return r.data;
              });

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "componentWillMount",
    /*#__PURE__*/
    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var tools;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this.getProducerTools();

            case 2:
              tools = _context2.sent;
              console.log(tools);

              _this.setState({
                tools: tools
              });

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "render", function () {
      return _this.state.tools ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_jsx_Page__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "grid"
      }, _this.state.tools.map(function (tool, index) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_jsx_Router__WEBPACK_IMPORTED_MODULE_9__[/* Link */ "a"], {
          key: index,
          to: "producer-tools/".concat(tool.page)
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
          src: tool.imgSrc,
          alt: ""
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", null, tool.name), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "description"
        }, tool.description));
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_jsx_Router__WEBPACK_IMPORTED_MODULE_9__[/* Link */ "a"], {
        to: "/"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_jsx_Router__WEBPACK_IMPORTED_MODULE_9__[/* Link */ "a"], {
        to: "/"
      }))) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null);
    });

    return _this;
  }

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var components_jsx_Router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(12);
/* harmony import */ var _components_jsx_Image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(18);
/* harmony import */ var _components_jsx_Page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(15);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(10);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var client_env__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(11);
/* harmony import */ var client_env__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(client_env__WEBPACK_IMPORTED_MODULE_16__);


















var SpotifyPlayer =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(SpotifyPlayer, _React$Component);

  function SpotifyPlayer() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, SpotifyPlayer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(SpotifyPlayer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "state", {
      loading: true
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null, _this.getIFrame());
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(SpotifyPlayer, [{
    key: "getEmbedUrl",
    value: function getEmbedUrl() {
      var regexGroups = /(.*)\/(.*)\/(.*)\?/.exec(this.props.spotifyUrl);
      if (!regexGroups) regexGroups = /(.*)\/(.*)\/(.*)/.exec(this.props.spotifyUrl);

      var _regexGroups = regexGroups,
          _regexGroups2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_regexGroups, 4),
          url = _regexGroups2[1],
          contentType = _regexGroups2[2],
          id = _regexGroups2[3];

      url = [url, 'embed', contentType, id].join('/');
      return url;
    }
  }, {
    key: "getIFrame",
    value: function getIFrame() {
      var _this2 = this;

      var src = this.getEmbedUrl();
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null, this.state.loading && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null, "Loading..."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("iframe", {
        onLoad: function onLoad() {
          return _this2.setState({
            loading: false
          });
        },
        className: "spotify-iframe",
        src: src,
        width: "300",
        height: "380",
        frameBorder: "0",
        allowtransparency: "true",
        allow: "encrypted-media"
      }));
    }
  }]);

  return SpotifyPlayer;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

var Releases = function Releases(_ref) {
  var artist = _ref.artist;
  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    id: "releases"
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "right"
  }, artist.releases.map(function (release, index) {
    return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
      key: index,
      className: "release"
    }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", null, release.name), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
      className: "left"
    }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
      src: release.cover,
      alt: "".concat(release.name, " album cover artwork")
    })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
      className: "right"
    }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(SpotifyPlayer, {
      spotifyUrl: release.spotifyUrl
    })));
  })));
};

var TopTen = function TopTen(_ref2) {
  var artist = _ref2.artist;
  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    id: "top-ten"
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", null, "Top ten tracks"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(SpotifyPlayer, {
    spotifyUrl: artist.spotifyUrl
  }));
}; // static version:
// export default () => {
// 	const { artist } = useRouteData()
// 	return (
// 		<Page id="artist" heading={{ text: `${artist.name}: `, spanText: 'releases' }} backgroundImage={artist.imgSrc}>
// 			<TopTen artist={artist} />
// 			{artist.releases.length > 0 && <Releases artist={artist} />}
// 		</Page>
// 	)
// }
// 100% dynamic (temporary)


var _default =
/*#__PURE__*/
function (_React$Component2) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(_default, _React$Component2);

  function _default() {
    var _getPrototypeOf3;

    var _this3;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, _default);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (_getPrototypeOf3 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(_default)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this3), "state", {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this3), "componentDidMount",
    /*#__PURE__*/
    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var artist;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this3.getArtist();

            case 2:
              artist = _context.sent;
              console.log(artist);

              _this3.setState({
                artist: artist
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this3), "render", function () {
      return _this3.state.artist ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_jsx_Page__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
        id: "artist",
        heading: {
          text: "".concat(_this3.state.artist.name)
        },
        backgroundImage: _this3.state.artist.imgSrc
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(TopTen, {
        artist: _this3.state.artist
      }), _this3.state.artist.releases.length > 0 && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Releases, {
        artist: _this3.state.artist
      })) : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null, "loading...");
    });

    return _this3;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(_default, [{
    key: "getArtistNameFromUrl",
    value: function getArtistNameFromUrl() {
      var location = String(window.location);
      return /.*\/(.*)$/.exec(location)[1];
    }
  }, {
    key: "getArtist",
    value: function getArtist() {
      var name = this.getArtistNameFromUrl();
      return axios__WEBPACK_IMPORTED_MODULE_15___default.a.get("".concat(client_env__WEBPACK_IMPORTED_MODULE_16___default.a.apiUrl, "/artists/").concat(name)).then(function (r) {
        return r.data;
      });
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_jsx_Page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(10);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var client_env__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(11);
/* harmony import */ var client_env__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(client_env__WEBPACK_IMPORTED_MODULE_13__);















var ProducerTool =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(ProducerTool, _React$Component);

  function ProducerTool() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, ProducerTool);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ProducerTool)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "state", {
      dropboxDirectUrl: ''
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("section", {
        className: "text"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, _this.props.description), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: _this.state.dropboxDirectUrl,
        className: "button"
      }, "Download"));
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(ProducerTool, [{
    key: "setDropboxDirectUrl",
    value: function setDropboxDirectUrl(dropboxUrl) {
      this.setState({
        dropboxDirectUrl: dropboxUrl.replace('www.dropbox.com', 'dl.dropboxusercontent.com').replace('dl=0', 'dl=1')
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setDropboxDirectUrl(this.props.dropboxUrl);
    }
  }]);

  return ProducerTool;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component); //static version:
// export default () => {
// 	const { tool } = useRouteData()
// 	return (
// 		<Page
// 			id="producer-tool"
// 			heading={{ text: `${tool.name}: `, spanText: 'producer tool' }}
// 			backgroundImage={tool.img}
// 		>
// 			<ProducerTool {...tool} />
// 		</Page>
// 	)
// }
// dyanmic version:


var _default =
/*#__PURE__*/
function (_React$Component2) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(_default, _React$Component2);

  function _default() {
    var _getPrototypeOf3;

    var _this2;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, _default);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (_getPrototypeOf3 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(_default)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this2), "state", {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this2), "componentDidMount",
    /*#__PURE__*/
    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var tool;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this2.getProducerTool();

            case 2:
              tool = _context.sent;
              console.log(tool);

              _this2.setState({
                tool: tool
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this2), "render", function () {
      return _this2.state.tool ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_jsx_Page__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
        id: "producer-tool",
        heading: {
          text: "".concat(_this2.state.tool.name, ": "),
          spanText: 'producer tool'
        },
        backgroundImage: _this2.state.tool.imgSrc
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ProducerTool, _this2.state.tool)) : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null);
    });

    return _this2;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(_default, [{
    key: "getProducerToolNameFromUrl",
    value: function getProducerToolNameFromUrl() {
      var location = String(window.location);
      return /.*\/(.*)$/.exec(location)[1];
    }
  }, {
    key: "getProducerTool",
    value: function getProducerTool() {
      var name = this.getProducerToolNameFromUrl();
      return axios__WEBPACK_IMPORTED_MODULE_12___default.a.get("".concat(client_env__WEBPACK_IMPORTED_MODULE_13___default.a.apiUrl, "/producer-tools/").concat(name)).then(function (r) {
        return r.data;
      });
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(23);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(7);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(9);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/assertThisInitialized"
var assertThisInitialized_ = __webpack_require__(1);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(2);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(3);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(8);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(4);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(5);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(6);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/jsx/Router.jsx
var Router = __webpack_require__(12);

// CONCATENATED MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/jsx/ArtistName.jsx









var ArtistName_ArtistName =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(ArtistName, _React$Component);

  function ArtistName() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, ArtistName);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(ArtistName)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {});

    defineProperty_default()(assertThisInitialized_default()(_this), "render", function () {
      return external_react_default.a.createElement("h2", {
        className: "artist-name"
      }, external_react_default.a.createElement(Router["a" /* Link */], {
        onMouseEnter: function onMouseEnter() {
          return _this.props.setHovering(true);
        },
        onMouseLeave: function onMouseLeave() {
          return _this.props.setHovering(false);
        },
        to: "artist/".concat(_this.props.artist.page)
      }, _this.props.artist.name));
    });

    return _this;
  }

  return ArtistName;
}(external_react_default.a.Component);


// EXTERNAL MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/jsx/Image.jsx
var Image = __webpack_require__(18);

// CONCATENATED MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/js/baseUrl.js
/* harmony default export */ var baseUrl = (function () {
  return /^(\/*\w*)\//.exec(window.location.pathname)[1];
});
// EXTERNAL MODULE: external "react-textfit"
var external_react_textfit_ = __webpack_require__(19);

// CONCATENATED MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/jsx/Artist.jsx













var Artist_ArtistWrapper =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(ArtistWrapper, _React$Component);

  function ArtistWrapper() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, ArtistWrapper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(ArtistWrapper)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "render", function () {
      return _this.props.isPreview ? external_react_default.a.createElement("div", {
        onClick: function onClick() {
          return _this.props.select();
        },
        className: "artist-wrapper ".concat(_this.props.selected ? 'selected' : ''),
        onMouseOver: function onMouseOver() {
          return _this.props.setHovering(true);
        },
        onMouseLeave: function onMouseLeave() {
          return _this.props.setHovering(false);
        }
      }, _this.props.children) : external_react_default.a.createElement(Router["a" /* Link */], {
        to: "".concat(baseUrl(), "/artists/").concat(_this.props.page),
        className: "artist-wrapper ".concat(_this.props.selected ? 'selected' : ''),
        onMouseOver: function onMouseOver() {
          return _this.props.setHovering(true);
        },
        onMouseLeave: function onMouseLeave() {
          return _this.props.setHovering(false);
        }
      }, _this.props.children);
    });

    return _this;
  }

  return ArtistWrapper;
}(external_react_default.a.Component);

var Artist_Artist =
/*#__PURE__*/
function (_React$Component2) {
  inherits_default()(Artist, _React$Component2);

  function Artist() {
    var _getPrototypeOf3;

    var _this2;

    classCallCheck_default()(this, Artist);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = possibleConstructorReturn_default()(this, (_getPrototypeOf3 = getPrototypeOf_default()(Artist)).call.apply(_getPrototypeOf3, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this2), "state", {
      hovering: false,
      alignment: _this2.props.index % 2 === 0 ? 'right' : 'left'
    });

    defineProperty_default()(assertThisInitialized_default()(_this2), "getDescriptionStyle", function () {
      var style = Object.assign({
        boxSizing: 'border-box'
      }, _this2.props.description.style);
      return style;
    });

    defineProperty_default()(assertThisInitialized_default()(_this2), "getSeeReleasesStyle", function () {
      return _this2.state.hovering ? {
        color: _this2.props.description.style.color || 'black',
        opacity: 1
      } : {
        color: _this2.props.description.style.color || 'black'
      };
    });

    defineProperty_default()(assertThisInitialized_default()(_this2), "setHovering", function (hovering) {
      return _this2.setState({
        hovering: hovering
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this2), "render", function () {
      return external_react_default.a.createElement(Artist_ArtistWrapper, {
        select: function select() {
          return _this2.props.selectArtist(_this2.props.index);
        },
        selected: _this2.props.selected,
        isPreview: _this2.props.isPreview,
        page: _this2.props.page,
        setHovering: function setHovering(hovering) {
          return _this2.setHovering(hovering);
        }
      }, external_react_default.a.createElement("div", {
        className: "artist"
      }, external_react_default.a.createElement(Image["a" /* default */], {
        src: _this2.props.imgSrc
      }), external_react_default.a.createElement("div", {
        className: "description-outer-wrapper align-".concat(_this2.state.alignment)
      }, external_react_default.a.createElement("div", {
        className: "description",
        style: _this2.getDescriptionStyle()
      }, external_react_default.a.createElement("div", {
        className: "text"
      }, external_react_default.a.createElement(external_react_textfit_["Textfit"], {
        mode: "single",
        className: "artist-name",
        min: 16,
        max: 40
      }, _this2.props.name), external_react_default.a.createElement(external_react_textfit_["Textfit"], {
        className: "bio",
        min: 12,
        max: 20
      }, _this2.props.description.bio), external_react_default.a.createElement(external_react_textfit_["Textfit"], {
        mode: "single",
        max: 16,
        className: "see-releases",
        style: _this2.getSeeReleasesStyle()
      }, external_react_default.a.createElement("span", null, ">"), " See releases"))))));
    });

    return _this2;
  }

  return Artist;
}(external_react_default.a.Component);


// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(17);

// EXTERNAL MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/jsx/Page.jsx
var Page = __webpack_require__(15);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(10);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/client-env.js
var client_env = __webpack_require__(11);
var client_env_default = /*#__PURE__*/__webpack_require__.n(client_env);

// CONCATENATED MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/pages/artists.jsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return artists_default; });

















var artists_ErrorHandler =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(ErrorHandler, _React$Component);

  function ErrorHandler(props) {
    var _this;

    classCallCheck_default()(this, ErrorHandler);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(ErrorHandler).call(this, props));
    _this.state = {
      errorOccurred: false
    };
    return _this;
  }

  createClass_default()(ErrorHandler, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      this.setState({
        errorOccurred: true
      });
      logErrorToMyService(error, info);
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.errorOccurred ? external_react_default.a.createElement("h1", null, "Something went wrong!") : this.props.children;
    }
  }]);

  return ErrorHandler;
}(external_react_default.a.Component); // STATIC VERSION:
// export default (props) => {
// 	let { artists } = useRouteData()
// 	artists = Object.values(artists)
// 	return (
// 		<Page backgroundImage={'/images/trees.jpg'}>
// 			{artists.map((artist, index) => <Artist key={index} {...artist} index={index} {...props} />)}
// 		</Page>
// 	)
// }
// DYNAMIC VERSION (TEMPORARY):


var artists_default =
/*#__PURE__*/
function (_React$Component2) {
  inherits_default()(_default, _React$Component2);

  function _default() {
    var _getPrototypeOf2;

    var _this2;

    classCallCheck_default()(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this2), "state", {});

    defineProperty_default()(assertThisInitialized_default()(_this2), "componentWillMount",
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee() {
      var artists;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!_this2.props.artists) {
                _context.next = 4;
                break;
              }

              _this2.setState({
                artists: _this2.props.artists,
                isPreview: true
              });

              _context.next = 8;
              break;

            case 4:
              _context.next = 6;
              return external_axios_default.a.get("".concat(client_env_default.a.apiUrl, "/artists")).then(function (r) {
                return r.data;
              });

            case 6:
              artists = _context.sent;

              _this2.setState({
                artists: artists
              });

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    defineProperty_default()(assertThisInitialized_default()(_this2), "render", function () {
      return _this2.state.artists ? external_react_default.a.createElement(Page["a" /* default */], {
        backgroundImage: '/images/trees.jpg'
      }, _this2.state.artists.map(function (artist, index) {
        return external_react_default.a.createElement(Artist_Artist, extends_default()({
          key: index,
          index: index,
          isPreview: _this2.state.isPreview
        }, artist, {
          selectArtist: function selectArtist() {
            return _this2.props.selectArtist(index);
          },
          selected: _this2.props.selectedArtist === index
        }));
      })) : external_react_default.a.createElement("div", null, "Loading...");
    });

    return _this2;
  }

  createClass_default()(_default, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.artists && JSON.stringify(prevProps.artists) !== JSON.stringify(this.props.artists)) {
        this.setState({
          artists: this.props.artists
        });
      }
    }
  }]);

  return _default;
}(external_react_default.a.Component);



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_jsx_Router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12);









var Footer =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Footer, _React$Component);

  function Footer() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Footer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(Footer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "getYear", function () {
      return new Date().getFullYear();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("footer", null, "\xA9 ", _this.getYear(), " Divison 88 Ltd.");
    });

    return _this;
  }

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Footer, null);
});

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Index; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _GridItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(39);












var Index =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(Index, _React$Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "state", {
      layoutClassName: "layout ".concat(_this.gridItemHoveredUpon !== undefined ? 'grid-item-hovered-upon' : ''),
      cellsUpToDate: true
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "componentDidMount",
    /*#__PURE__*/
    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.watchWindowResizing();

              console.log('cells', _this.props.cells);

              _this.setState({
                rowHeight: _this.rowHeight,
                cells: _this.props.cells
              });

              console.log(_this.props.gridWidth);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Index, [{
    key: "watchWindowResizing",
    value: function watchWindowResizing() {
      var _this2 = this;

      window.onresize = function () {
        _this2.setState({
          rowHeight: _this2.rowHeight
        });

        if (!_this2.buffering) {
          setTimeout(function () {
            _this2.buffering = false;
          }, 10);
        }
      };
    }
  }, {
    key: "updateGridItemHover",
    value: function updateGridItemHover(gridItemIndex) {
      this.setState({
        gridItemHoveredUpon: gridItemIndex,
        layoutClassName: "layout ".concat(gridItemIndex !== undefined ? 'grid-item-hovered-upon' : '')
      });
    }
  }, {
    key: "handleMouseOverGridItem",
    value: function handleMouseOverGridItem(gridItemIndex) {
      this.updateGridItemHover(gridItemIndex);
    }
  }, {
    key: "handleMouseLeaveGridItem",
    value: function handleMouseLeaveGridItem(gridItemIndex) {
      if (this.state.gridItemHoveredUpon === gridItemIndex) this.updateGridItemHover();
    }
  }, {
    key: "handleClickGridItem",
    value: function handleClickGridItem(index, e) {
      this.props.selectCell(index);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.gridWidth !== this.props.gridWidth) this.setState({
        rowHeight: this.rowHeight
      });

      if (this.props.updateSent) {
        console.log('updateSent');
        this.setState({
          cellsUpToDate: false,
          cells: this.props.cells
        });
        this.props.updateReceived();
      } else if (JSON.stringify(this.props.cells) !== JSON.stringify(prevProps.cells)) {
        // this.forceUpdate()
        console.log('update');
        this.setState({
          cellsUpToDate: false,
          cells: this.props.cells
        });
      } else if (!this.state.cellsUpToDate) this.setState({
        cellsUpToDate: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var ResponsiveGridLayout = this.props.ResponsiveGridLayout;
      if (this.props.updateSent) console.log('update sent');
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        id: "index"
      }, this.state.cellsUpToDate ? this.props.layouts && this.state.cells && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ResponsiveGridLayout, {
        measureBeforeMount: true,
        className: this.state.layoutClassName,
        layouts: this.props.layouts,
        rowHeight: this.state.rowHeight,
        width: this.props.gridWidth,
        nb: true,
        isDraggable: !!this.props.gridWidth,
        isResizable: !!this.props.gridWidth,
        breakpoints: {
          desktop: 1326,
          tablet: 750,
          mobile: 0
        },
        cols: {
          desktop: 12,
          tablet: 12,
          mobile: 12
        },
        rows: {
          desktop: 12,
          tablet: 12,
          mobile: 12
        },
        containerPadding: [0, 0],
        onLayoutChange: function onLayoutChange(layout, layouts) {
          return _this3.props.onLayoutChange ? _this3.props.onLayoutChange(layout, layouts) : {};
        }
      }, this.state.cells.map(function (cell, index) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "grid-item",
          onClick: function onClick(e) {
            return _this3.handleClickGridItem(index, e);
          },
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_GridItem__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
          selected: _this3.props.selectedCell === index,
          index: index,
          link: cell.link,
          imgSrc: cell.imgSrc,
          backgroundText: cell.backgroundText,
          bottomText: cell.bottomText,
          videoSrc: cell.videoSrc,
          video: cell.video,
          isPreview: _this3.props.gridWidth
        }));
      })) : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, "Loading..."));
    }
  }, {
    key: "rowHeight",
    get: function get() {
      var vW = this.props.gridWidth ? this.props.gridWidth / 100 : window.innerWidth / 100;
      return this.props.view === 'mobile' ? 10 * vW : this.props.view === 'tablet' ? 8 * vW : 4 * vW;
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(3);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(8);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(4);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(5);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/assertThisInitialized"
var assertThisInitialized_ = __webpack_require__(1);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(6);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(2);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/jsx/Router.jsx
var Router = __webpack_require__(12);

// EXTERNAL MODULE: external "react-burger-menu"
var external_react_burger_menu_ = __webpack_require__(55);

// CONCATENATED MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/jsx/Nav.jsx










var Nav_Nav =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Nav, _React$Component);

  function Nav() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Nav);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Nav)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      links: [{
        name: 'Artists',
        url: '/artists'
      }, {
        name: 'Producer Tools',
        url: '/producer-tools'
      }, {
        name: 'About',
        url: '/about'
      }],
      adminVersion: false
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getAdminLink", function (url) {
      return '/admin' + url;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "render", function () {
      return external_react_default.a.createElement("div", {
        id: "nav-wrapper"
      }, external_react_default.a.createElement("nav", null, _this.state.links.map(function (link) {
        return external_react_default.a.createElement(Router["a" /* Link */], {
          key: link.name,
          onClick: _this.props.toggleOpenClose,
          to: _this.state.adminVersion ? _this.getAdminLink(link.url) : link.url
        }, link.name);
      })));
    });

    return _this;
  }

  createClass_default()(Nav, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        adminVersion: /\/admin/.test(window.location.pathname),
        mounted: true
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.mounted) {
        if (this.state.adminVersion && this.state.adminVersion !== /\/admin/.test(window.location.pathname)) {
          this.setState({
            adminVersion: /\/admin/.test(window.location.pathname)
          });
        }
      }
    }
  }]);

  return Nav;
}(external_react_default.a.Component);


// EXTERNAL MODULE: external "upath"
var external_upath_ = __webpack_require__(76);

// CONCATENATED MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/jsx/OffCanvas.jsx












var OffCanvas_OffCanvas =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(OffCanvas, _React$Component);

  function OffCanvas() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, OffCanvas);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(OffCanvas)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      isOpen: false,
      width: 30,
      opacity: '0'
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getStyles", function () {
      return {
        bmBurgerButton: {
          position: 'absolute',
          width: _this.state.width + 'px',
          height: '26px',
          marginLeft: "calc(".concat(_this.props.previewWidth - _this.state.width, "px - 2rem)") || false,
          right: _this.props.previewWidth ? 'auto' : '2rem',
          marginTop: '2rem'
        },
        bmBurgerBars: {
          background: '#fff'
        },
        bmBurgerBarsHover: {
          background: '#ddd'
        },
        bmCrossButton: {
          height: '24px',
          width: '24px',
          display: _this.props.previewWidth ? 'none' : 'block'
        },
        bmCross: {
          background: '#bdc3c7'
        },
        bmMenuWrap: {
          position: 'fixed',
          marginLeft: "calc(".concat(_this.state.width, "px + 4rem)") || false,
          right: '0',
          height: '100vh',
          zIndex: '9999',
          display: _this.props.previewWidth ? 'none' : 'inline'
        },
        bmMenu: {
          display: _this.props.previewWidth ? 'none' : 'block',
          padding: '2.5em 1.5em 0',
          background: '#000',
          fontSize: '1.15em'
        },
        bmMorphShape: {
          fill: '#373a47'
        },
        bmItemList: {
          color: '#b8b7ad',
          padding: '0.8em',
          height: 'auto'
        },
        bmItem: {
          display: 'block'
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)',
          display: _this.props.previewWidth ? 'none' : 'inline'
        }
      };
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "render", function () {
      return external_react_default.a.createElement(external_react_burger_menu_["slide"], {
        right: true,
        styles: _this.getStyles(),
        isOpen: _this.state.isOpen
      }, external_react_default.a.createElement(Nav_Nav, {
        toggleOpenClose: function toggleOpenClose() {
          return _this.toggleOpenClose(e);
        }
      }));
    });

    return _this;
  }

  createClass_default()(OffCanvas, [{
    key: "toggleOpenClose",
    value: function toggleOpenClose(e) {
      console.log(e);
      if (!this.props.previewWidth) this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var button = document.getElementsByClassName('bm-burger-button')[0].children[1];

      button.onclick = function (e) {
        return e.preventDefault();
      };
    }
  }]);

  return OffCanvas;
}(external_react_default.a.Component);


// EXTERNAL MODULE: external "react-responsive"
var external_react_responsive_ = __webpack_require__(41);
var external_react_responsive_default = /*#__PURE__*/__webpack_require__.n(external_react_responsive_);

// CONCATENATED MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/jsx/Header.jsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header_default; });













var Header_default =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(_default, _React$Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      adminVersion: false
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getAdminLink", function (url) {
      return '/admin' + url;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "render", function () {
      return external_react_default.a.createElement("div", {
        className: "header-wrapper"
      }, _this.props.mobilePreview ? external_react_default.a.createElement(OffCanvas_OffCanvas, {
        previewWidth: _this.props.previewWidth
      }) : external_react_default.a.createElement(external_react_responsive_default.a, {
        maxWidth: 440
      }, external_react_default.a.createElement(OffCanvas_OffCanvas, null)), external_react_default.a.createElement("header", null, external_react_default.a.createElement("div", {
        id: "logo"
      }, external_react_default.a.createElement(Router["a" /* Link */], {
        to: _this.state.adminVersion ? _this.getAdminLink('/') : '/'
      }, external_react_default.a.createElement("svg", {
        className: "icon",
        width: "921px",
        height: "921px",
        viewBox: "0 0 921 921",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }, external_react_default.a.createElement("title", null, "Artboard Copy"), external_react_default.a.createElement("desc", null, "Created with Sketch."), external_react_default.a.createElement("g", {
        id: "Artboard-Copy",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, external_react_default.a.createElement("g", {
        id: "div-88-logo-original-copy",
        fill: "white"
      }, external_react_default.a.createElement("path", {
        d: "M54.6621171,242.696265 L96.7270491,376.988498 L96.7270491,178.10107 C180.980338,69.7264603 312.597425,0 460.5,0 C714.827127,0 921,206.172873 921,460.5 C921,714.827127 714.827127,921 460.5,921 C206.172873,921 0,714.827127 0,460.5 C0,381.711281 19.7867393,307.544002 54.6621171,242.696265 Z M391.047614,457.312069 C421.379483,436.218595 432.56851,401.247649 432.56851,355.637118 C432.56851,277.988421 390.041703,232.028677 296.037374,232.028677 C202.033045,232.028677 160.973922,279.251734 160.973922,355.637118 C160.973922,400.862229 171.827049,436.163626 202.287509,457.439023 C167.13461,479.651217 150.973501,517.487542 150.973501,566.689207 C150.973501,648.007654 188.955212,702 296.190641,702 C403.426071,702 442.985802,649.352553 442.985802,566.689207 C442.985802,516.866079 426.37545,479.298217 391.047614,457.312069 Z M306.725237,435.281551 C303.282893,435.159396 299.771504,435.097981 296.190641,435.097981 C292.713523,435.097981 289.303779,435.157481 285.960895,435.275698 C234.096453,432.124393 210.326593,404.736808 207.975902,363.227827 L207.975902,350.346497 C207.975902,346.34613 210.017514,317.87211 226.645565,302.383856 C243.273617,286.895602 262.899129,279.270601 290.46391,279.270601 C293.457398,279.270601 297.754959,279.270601 300.95687,279.270601 C367.982642,279.270601 385.353407,320.743758 384.917753,350.346497 L384.917753,363.227827 C384.917753,405.690398 358.794168,432.214347 306.725228,435.281552 Z M301.445567,483.114368 C375.311586,483.114368 394.455106,528.766168 393.974991,561.351542 L393.974991,575.530735 C393.974991,625.296194 361.338949,655.173089 296.303935,655.173089 C231.220009,655.173089 201.732307,624.153212 198.975523,575.530735 L198.975523,561.351542 C198.975523,556.948116 201.22549,525.605186 219.550499,508.556408 C237.875509,491.507629 259.503883,483.114368 289.881759,483.114368 C293.180744,483.114368 297.916889,483.114368 301.445567,483.114368 Z M728.061811,457.312069 C758.39368,436.218595 769.582708,401.247649 769.582708,355.637118 C769.582708,277.988421 727.055901,232.028677 633.051572,232.028677 C539.047242,232.028677 497.98812,279.251734 497.98812,355.637118 C497.98812,400.862229 508.841246,436.163626 539.301707,457.439023 C504.148807,479.651217 487.987698,517.487542 487.987698,566.689207 C487.987698,648.007654 525.969409,702 633.204839,702 C740.440268,702 780,649.352553 780,566.689207 C780,516.866079 763.389648,479.298217 728.061811,457.312069 Z M643.739434,435.281551 C640.29709,435.159396 636.785701,435.097981 633.204839,435.097981 C629.727721,435.097981 626.317976,435.157481 622.975093,435.275698 C571.110651,432.124393 547.340791,404.736808 544.9901,363.227827 L544.9901,350.346497 C544.9901,346.34613 547.031712,317.87211 563.659763,302.383856 C580.287814,286.895602 599.913327,279.270601 627.478108,279.270601 C630.471595,279.270601 634.769157,279.270601 637.971067,279.270601 C704.99684,279.270601 722.367604,320.743758 721.93195,350.346497 L721.93195,363.227827 C721.93195,405.690398 695.808365,432.214347 643.739425,435.281552 Z M638.459765,483.114368 C712.325783,483.114368 731.469303,528.766168 730.989189,561.351542 L730.989189,575.530735 C730.989189,625.296194 698.353147,655.173089 633.318133,655.173089 C568.234206,655.173089 538.746504,624.153212 535.98972,575.530735 L535.98972,561.351542 C535.98972,556.948116 538.239687,525.605186 556.564697,508.556408 C574.889707,491.507629 596.518081,483.114368 626.895957,483.114368 C630.194942,483.114368 634.931087,483.114368 638.459765,483.114368 Z",
        id: "Combined-Shape"
      })))))), !_this.props.mobilePreview && external_react_default.a.createElement(external_react_responsive_default.a, {
        minWidth: 440
      }, external_react_default.a.createElement(Nav_Nav, null))));
    });

    return _this;
  }

  createClass_default()(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        adminVersion: /\/admin/.test(window.location.pathname),
        mounted: true
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.mounted) {
        if (this.state.adminVersion && this.state.adminVersion !== /\/admin/.test(window.location.pathname)) {
          this.setState({
            adminVersion: /\/admin/.test(window.location.pathname)
          });
        }
      }
    }
  }]);

  return _default;
}(external_react_default.a.Component);



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-grid-system"
var external_react_grid_system_ = __webpack_require__(38);

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(3);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(4);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(5);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/assertThisInitialized"
var assertThisInitialized_ = __webpack_require__(1);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(6);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(2);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(17);

// EXTERNAL MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/jsx/Router.jsx
var Router = __webpack_require__(12);

// EXTERNAL MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/jsx/Header.jsx + 2 modules
var Header = __webpack_require__(33);

// EXTERNAL MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/jsx/Footer.jsx
var Footer = __webpack_require__(30);

// CONCATENATED MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/jsx/root/Root.jsx












var Root_default =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(_default, _React$Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "render", function () {
      return external_react_default.a.createElement(external_react_static_["Root"], null, external_react_default.a.createElement(Header["a" /* default */], null), external_react_default.a.createElement("div", {
        id: "content"
      }, external_react_default.a.createElement(external_react_default.a.Suspense, {
        fallback: external_react_default.a.createElement("em", null, "Loading...")
      }, external_react_default.a.createElement(Router["b" /* Router */], null, external_react_default.a.createElement(external_react_static_["Routes"], {
        path: "*"
      })))), external_react_default.a.createElement(Footer["a" /* default */], null));
    });

    return _this;
  }

  return _default;
}(external_react_default.a.Component);


// EXTERNAL MODULE: external "loglevel"
var external_loglevel_ = __webpack_require__(48);

// EXTERNAL MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/styles/app.scss
var app = __webpack_require__(77);

// CONCATENATED MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/App.jsx


 // import { addPrefetchExcludes } from 'react-static'
// addPrefetchExcludes([ 'admin' ])



Object(external_react_grid_system_["setConfiguration"])({
  gutterWidth: 0
});
/* harmony default export */ var App = __webpack_exports__["a"] = (function () {
  return external_react_default.a.createElement(Root_default, null);
});

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(22);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(21);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("react-grid-system");

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(23);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(8);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(3);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(4);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(5);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/assertThisInitialized"
var assertThisInitialized_ = __webpack_require__(1);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(6);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(2);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(57);

// EXTERNAL MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/jsx/Image.jsx
var Image = __webpack_require__(18);

// CONCATENATED MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/jsx/Video.jsx











var Video_VideoEl =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(VideoEl, _React$Component);

  function VideoEl() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, VideoEl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(VideoEl)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "render", function () {
      return external_react_default.a.createElement("div", {
        className: "video",
        style: {
          position: 'relative',
          height: '100%',
          display: _this.props.loaded ? 'block' : 'none'
        }
      }, external_react_default.a.createElement("iframe", {
        id: "video-".concat(_this.props.videoId),
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        },
        webkitallowfullscreen: "true",
        mozallowfullscreen: "true",
        allowFullScreen: true,
        src: "https://www.youtube.com/embed/".concat(_this.props.videoId, "?enablejsapi=1&modestbranding=1?&origin=http://localhost:3000"),
        frameBorder: "0"
      }));
    });

    return _this;
  }

  return VideoEl;
}(external_react_default.a.Component);

var Video_Video =
/*#__PURE__*/
function (_React$Component2) {
  inherits_default()(Video, _React$Component2);

  function Video() {
    var _getPrototypeOf3;

    var _this2;

    classCallCheck_default()(this, Video);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = possibleConstructorReturn_default()(this, (_getPrototypeOf3 = getPrototypeOf_default()(Video)).call.apply(_getPrototypeOf3, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this2), "state", {
      videoId: _this2.props.videoSrc ? /\?v=(.*)/.exec(_this2.props.videoSrc)[1] : ''
    });

    defineProperty_default()(assertThisInitialized_default()(_this2), "getStyle", function () {
      return {
        cursor: _this2.props.isPreview ? 'default' : 'pointer',
        display: _this2.state.videoLoaded ? 'none' : 'block'
      };
    });

    defineProperty_default()(assertThisInitialized_default()(_this2), "componentDidMount", function () {
      if (!_this2.props.isPreview) {
        _this2.player = new YT.Player("video-".concat(_this2.state.videoId), {
          events: {
            onReady: function onReady() {
              return _this2.onPlayerReady();
            }
          }
        });
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this2), "render", function () {
      return external_react_default.a.createElement("div", null, _this2.state.videoLoaded && !_this2.props.isPreview ? external_react_default.a.createElement(Video_VideoEl, {
        videoId: _this2.state.videoId,
        loaded: _this2.state.videoLoaded
      }) : external_react_default.a.createElement("div", {
        onClick: function onClick() {
          return _this2.loadVideo();
        },
        id: "play-video-".concat(_this2.state.videoId),
        style: _this2.getStyle(),
        className: "video-link wrapper"
      }, external_react_default.a.createElement(Image["a" /* default */], {
        src: _this2.props.imgSrc,
        selected: _this2.props.selected
      }), external_react_default.a.createElement("div", {
        className: "icon-wrapper"
      }, external_react_default.a.createElement(fa_["FaPlay"], {
        className: "icon"
      }))));
    });

    return _this2;
  }

  createClass_default()(Video, [{
    key: "onPlayerReady",
    value: function onPlayerReady(event) {
      var _this3 = this;

      if (this.state.videoLoaded) this.player.playVideo();
      var playButton = document.getElementById("play-video-".concat(this.state.videoId));
      playButton.addEventListener('click', function () {
        return _this3.props.isPreview ? null : _this3.player.playVideo();
      });
    }
  }, {
    key: "loadVideo",
    value: function loadVideo() {
      if (this.props.isPreview) return;
      this.setState({
        videoLoaded: true
      });
    }
  }]);

  return Video;
}(external_react_default.a.Component);


// EXTERNAL MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/jsx/Router.jsx
var Router = __webpack_require__(12);

// CONCATENATED MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/jsx/index/GridItem.jsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridItem_GridItem; });












var GridItem_GridItemContentContainer =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(GridItemContentContainer, _React$Component);

  function GridItemContentContainer() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, GridItemContentContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(GridItemContentContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "render", function () {
      return _this.props.link && !_this.props.isPreview ? external_react_default.a.createElement(Router["a" /* Link */], {
        id: "grid-item-".concat(_this.props.index),
        content: _this.props.content,
        to: _this.props.link
      }, _this.props.children) : external_react_default.a.createElement("div", {
        id: "grid-item-".concat(_this.props.index),
        content: _this.props.content
      }, _this.props.children);
    });

    return _this;
  }

  return GridItemContentContainer;
}(external_react_default.a.Component);

var GridItem_BottomText =
/*#__PURE__*/
function (_React$Component2) {
  inherits_default()(BottomText, _React$Component2);

  function BottomText() {
    var _getPrototypeOf3;

    var _this2;

    classCallCheck_default()(this, BottomText);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = possibleConstructorReturn_default()(this, (_getPrototypeOf3 = getPrototypeOf_default()(BottomText)).call.apply(_getPrototypeOf3, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this2), "state", {
      style: {
        height: _this2.props.height,
        backgroundColor: _this2.props.backgroundColor
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this2), "render", function () {
      return external_react_default.a.createElement("div", {
        className: "bottom-text",
        style: _this2.state.style
      }, _this2.props.text);
    });

    return _this2;
  }

  return BottomText;
}(external_react_default.a.Component);

var GridItem_BackgroundText = function BackgroundText(props) {
  return external_react_default.a.createElement("div", {
    className: "background-text"
  }, external_react_default.a.createElement("div", {
    className: "heading",
    key: "heading"
  }, props.heading), props.subheading && external_react_default.a.createElement("div", {
    className: "subheading",
    key: "subheading"
  }, props.subheading));
};

var GridItem_GridItemContent =
/*#__PURE__*/
function (_React$Component3) {
  inherits_default()(GridItemContent, _React$Component3);

  function GridItemContent() {
    var _getPrototypeOf4;

    var _this3;

    classCallCheck_default()(this, GridItemContent);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this3 = possibleConstructorReturn_default()(this, (_getPrototypeOf4 = getPrototypeOf_default()(GridItemContent)).call.apply(_getPrototypeOf4, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this3), "bottomTextHasText", function () {
      return _this3.props.bottomText.text;
    });

    defineProperty_default()(assertThisInitialized_default()(_this3), "backgroundTextHasText", function () {
      return _this3.props.backgroundText.heading || _this3.props.backgroundText.subheading;
    });

    defineProperty_default()(assertThisInitialized_default()(_this3), "state", {
      style: {
        background: "url(".concat(_this3.props.imgSrc, ") center center/cover no-repeat"),
        height: _this3.props.bottomText && _this3.bottomTextHasText() ? "calc(100% - ".concat(_this3.props.bottomText.height || '25px', ")") : '100%'
      },
      backgroundText: _this3.props.backgroundText
    });

    defineProperty_default()(assertThisInitialized_default()(_this3), "render", function () {
      return external_react_default.a.createElement(GridItem_GridItemContentContainer, {
        link: _this3.props.link,
        index: _this3.props.index,
        content: _this3.props,
        isPreview: _this3.props.isPreview
      }, external_react_default.a.createElement("div", {
        className: "background ".concat(_this3.props.selected ? 'selected' : ''),
        style: _this3.state.style
      }), _this3.props.backgroundText && _this3.backgroundTextHasText() && external_react_default.a.createElement(GridItem_BackgroundText, extends_default()({
        updateBackgroundText: function updateBackgroundText(bgTxt) {
          return _this3.updateBackgroundText(bgTxt);
        }
      }, _this3.state.backgroundText)), _this3.props.bottomText && _this3.bottomTextHasText() && external_react_default.a.createElement(GridItem_BottomText, _this3.props.bottomText));
    });

    return _this3;
  }

  createClass_default()(GridItemContent, [{
    key: "updateBackgroundText",
    value: function updateBackgroundText(bgT) {
      console.log(bgT);
    }
  }]);

  return GridItemContent;
}(external_react_default.a.Component);

var GridItem_GridItem =
/*#__PURE__*/
function (_React$Component4) {
  inherits_default()(GridItem, _React$Component4);

  function GridItem() {
    var _getPrototypeOf5;

    var _this4;

    classCallCheck_default()(this, GridItem);

    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    _this4 = possibleConstructorReturn_default()(this, (_getPrototypeOf5 = getPrototypeOf_default()(GridItem)).call.apply(_getPrototypeOf5, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this4), "render", function () {
      return _this4.props.video ? external_react_default.a.createElement(Video_Video, _this4.props) : external_react_default.a.createElement(GridItem_GridItemContent, _this4.props);
    });

    return _this4;
  }

  return GridItem;
}(external_react_default.a.Component);



/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = [{
  name: 'Skoop',
  imgSrc: '/images/skoop2.jpg',
  page: 'skoop',
  description: {
    style: {
      backgroundColor: '#220E5C',
      color: '#FFA3DE'
    },
    bio: 'Bacon ipsum dolor amet meatloaf pig andouille kielbasa bacon picanha tenderloin. Ground round beef ribs rump, meatloaf spare ribs tongue brisket biltong leberkas pig kielbasa. Ribeye picanha sausage, tongue sirloin landjaeger flank venison ham hock tri-tip pork chop shank. Brisket fatback strip steak tail.'
  },
  spotifyUrl: 'https://open.spotify.com/artist/7s0kEWdmrps2Ptqg2wAfOD?si=xdIgZCPVSVCDs7qp_A3wpw',
  releases: []
}, {
  name: 'Billy Wild',
  page: 'billy-wild',
  imgSrc: '/images/billy.jpg',
  description: {
    style: {
      backgroundColor: '#D2CFC1',
      color: '#2C25C5'
    },
    bio: 'Bacon ipsum dolor amet meatloaf pig andouille kielbasa bacon picanha tenderloin. Ground round beef ribs rump, meatloaf spare ribs tongue brisket biltong leberkas pig kielbasa. Ribeye picanha sausage, tongue sirloin landjaeger flank venison ham hock tri-tip pork chop shank. Brisket fatback strip steak tail.'
  },
  spotifyUrl: 'https://open.spotify.com/artist/6zNQ51HIfnzskqL2R82jYD?si=rEm8CzOpQIOnzqqCJIBFYQ',
  releases: [{
    name: 'All Nighters',
    spotifyUrl: 'https://open.spotify.com/album/3t9S03TNKktyKlNysyJS8k?si=ZJk-l8WKRW692NLHGnPlow',
    cover: '/images/all-nighters.jpg'
  }]
}, {
  name: 'Creedence Clearwater Revival',
  page: 'ccr',
  imgSrc: '/images/ccr.jpg',
  description: {
    style: {
      backgroundColor: '#333',
      color: '#fff'
    },
    bio: 'Bacon ipsum dolor amet meatloaf pig andouille kielbasa bacon picanha tenderloin. Ground round beef ribs rump, meatloaf spare ribs tongue brisket biltong leberkas pig kielbasa. Ribeye picanha sausage, tongue sirloin landjaeger flank venison ham hock tri-tip pork chop shank.'
  },
  spotifyUrl: 'https://open.spotify.com/artist/3IYUhFvPQItj6xySrBmZkd',
  releases: [{
    name: 'Live in Europe',
    spotifyUrl: 'https://open.spotify.com/album/6s22OUJ3b1y5NRQ3BPZLZw',
    cover: '/images/ccr-cover.jpg'
  }]
}, {
  name: 'Someone Else',
  page: 'someone-else',
  imgSrc: '/images/trees.jpg',
  description: {
    style: {
      backgroundColor: '#61691E',
      color: '#fff'
    },
    bio: 'Bacon ipsum dolor amet meatloaf pig andouille kielbasa bacon picanha tenderloin. Ground round beef ribs rump, meatloaf spare ribs tongue brisket biltong leberkas pig kielbasa. Ribeye picanha sausage, tongue sirloin landjaeger flank venison ham hock tri-tip pork chop shank. Brisket fatback strip steak tail.'
  },
  spotifyUrl: 'https://open.spotify.com/artist/6zNQ51HIfnzskqL2R82jYD?si=rEm8CzOpQIOnzqqCJIBFYQ',
  releases: [{
    name: 'All Nighters',
    spotifyUrl: 'https://open.spotify.com/album/3t9S03TNKktyKlNysyJS8k?si=ZJk-l8WKRW692NLHGnPlow'
  }]
}];

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "../node_modules/react-static-plugin-sass",
  plugins: [],
  hooks: {}
}, {
  location: "../node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "../node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "../node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "..",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("/Users/matt/Documents/web-dev/projects/division-88/src/client/node_modules/react-static/lib/browser");

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_matt_Documents_web_dev_projects_division_88_src_client_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _Users_matt_Documents_web_dev_projects_division_88_src_client_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_matt_Documents_web_dev_projects_division_88_src_client_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__);




















Object(_Users_matt_Documents_web_dev_projects_division_88_src_client_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = _Users_matt_Documents_web_dev_projects_division_88_src_client_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/404.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/404.jsx */).then(__webpack_require__.bind(null, 49))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/404.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(49);
  },
  chunkName: function chunkName() {
    return "src/pages/404.jsx";
  }
}), universalOptions);
t_0.template = '../src/pages/404.jsx';
var t_1 = _Users_matt_Documents_web_dev_projects_division_88_src_client_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/about.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/about.jsx */).then(__webpack_require__.bind(null, 25))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/about.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(25);
  },
  chunkName: function chunkName() {
    return "src/pages/about.jsx";
  }
}), universalOptions);
t_1.template = '../src/pages/about.jsx';
var t_2 = _Users_matt_Documents_web_dev_projects_division_88_src_client_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/artist.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/artist.jsx */).then(__webpack_require__.bind(null, 50))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/artist.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(50);
  },
  chunkName: function chunkName() {
    return "src/pages/artist.jsx";
  }
}), universalOptions);
t_2.template = '../src/pages/artist.jsx';
var t_3 = _Users_matt_Documents_web_dev_projects_division_88_src_client_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/artists.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/artists.jsx */).then(__webpack_require__.bind(null, 29))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/artists.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(29);
  },
  chunkName: function chunkName() {
    return "src/pages/artists.jsx";
  }
}), universalOptions);
t_3.template = '../src/pages/artists.jsx';
var t_4 = _Users_matt_Documents_web_dev_projects_division_88_src_client_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/index.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/index.jsx */).then(__webpack_require__.bind(null, 51))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/index.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(51);
  },
  chunkName: function chunkName() {
    return "src/pages/index.jsx";
  }
}), universalOptions);
t_4.template = '../src/pages/index.jsx';
var t_5 = _Users_matt_Documents_web_dev_projects_division_88_src_client_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/producer-tools.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/producer-tools.jsx */).then(__webpack_require__.bind(null, 26))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/producer-tools.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(26);
  },
  chunkName: function chunkName() {
    return "src/pages/producer-tools.jsx";
  }
}), universalOptions);
t_5.template = '../src/pages/producer-tools.jsx';
var t_6 = _Users_matt_Documents_web_dev_projects_division_88_src_client_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/containers/Admin",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/containers/Admin */).then(__webpack_require__.bind(null, 52))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/containers/Admin');
  },
  resolve: function resolve() {
    return /*require.resolve*/(52);
  },
  chunkName: function chunkName() {
    return "src/containers/Admin";
  }
}), universalOptions);
t_6.template = '../src/containers/Admin';
var t_7 = _Users_matt_Documents_web_dev_projects_division_88_src_client_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/containers/Artist",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/containers/Artist */).then(__webpack_require__.bind(null, 27))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/containers/Artist');
  },
  resolve: function resolve() {
    return /*require.resolve*/(27);
  },
  chunkName: function chunkName() {
    return "src/containers/Artist";
  }
}), universalOptions);
t_7.template = '../src/containers/Artist';
var t_8 = _Users_matt_Documents_web_dev_projects_division_88_src_client_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/containers/ProducerTool",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/containers/ProducerTool */).then(__webpack_require__.bind(null, 28))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/containers/ProducerTool');
  },
  resolve: function resolve() {
    return /*require.resolve*/(28);
  },
  chunkName: function chunkName() {
    return "src/containers/ProducerTool";
  }
}), universalOptions);
t_8.template = '../src/containers/ProducerTool'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '../src/pages/404.jsx': t_0,
  '../src/pages/about.jsx': t_1,
  '../src/pages/artist.jsx': t_2,
  '../src/pages/artists.jsx': t_3,
  '../src/pages/index.jsx': t_4,
  '../src/pages/producer-tools.jsx': t_5,
  '../src/containers/Admin': t_6,
  '../src/containers/Artist': t_7,
  '../src/containers/ProducerTool': t_8 // Not Found Template

});
var notFoundTemplate = "../src/pages/404.jsx";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("loglevel");

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_jsx_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_jsx_Page__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    id: "404",
    heading: "404: Page not found"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "text"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "A page does not exist at this location. Sorry about that!")));
});

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Artist; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_jsx_Router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12);
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38);
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_js_artists__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(42);
/* harmony import */ var _components_js_artists__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_components_js_artists__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_jsx_Image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(18);














var SpotifyPlayer =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(SpotifyPlayer, _React$Component);

  function SpotifyPlayer() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SpotifyPlayer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(SpotifyPlayer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "state", {
      loading: true
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, _this.getIFrame());
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(SpotifyPlayer, [{
    key: "getEmbedUrl",
    value: function getEmbedUrl() {
      var regexGroups = /(.*)\/(.*)\/(.*)\?/.exec(this.props.spotifyUrl);
      if (!regexGroups) regexGroups = /(.*)\/(.*)\/(.*)/.exec(this.props.spotifyUrl);

      var _regexGroups = regexGroups,
          _regexGroups2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_regexGroups, 4),
          url = _regexGroups2[1],
          contentType = _regexGroups2[2],
          id = _regexGroups2[3];

      url = [url, 'embed', contentType, id].join('/');
      return url;
    }
  }, {
    key: "getIFrame",
    value: function getIFrame() {
      var _this2 = this;

      var src = this.getEmbedUrl();
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, this.state.loading && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, "Loading..."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("iframe", {
        onLoad: function onLoad() {
          return _this2.setState({
            loading: false
          });
        },
        className: "spotify-iframe",
        src: src,
        width: "300",
        height: "380",
        frameBorder: "0",
        allowtransparency: "true",
        allow: "encrypted-media"
      }));
    }
  }]);

  return SpotifyPlayer;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

var Releases = function Releases(_ref) {
  var artist = _ref.artist;
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    id: "releases"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "right"
  }, artist.releases.map(function (release, index) {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
      key: index,
      className: "release"
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", null, release.name), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
      className: "left"
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
      src: release.cover,
      alt: "".concat(release.name, " album cover artwork")
    })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
      className: "right"
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(SpotifyPlayer, {
      spotifyUrl: release.spotifyUrl
    })));
  })));
};

var TopTen = function TopTen(_ref2) {
  var artist = _ref2.artist;
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    id: "top-ten"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", null, "Top ten tracks"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(SpotifyPlayer, {
    spotifyUrl: artist.spotifyUrl
  }));
};

var Artist =
/*#__PURE__*/
function (_React$Component2) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Artist, _React$Component2);

  function Artist() {
    var _getPrototypeOf3;

    var _this3;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Artist);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf3 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Artist)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this3), "state", {
      artist: _components_js_artists__WEBPACK_IMPORTED_MODULE_11___default.a.find(function (artist) {
        return artist.page === _this3.props.artistName;
      }) || _components_js_artists__WEBPACK_IMPORTED_MODULE_11___default.a[0]
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this3), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "artist",
        className: "main-container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "h1"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", null, _this3.state.artist.name, ": ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, "Releases"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_jsx_Image__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
        src: _this3.state.artist.imgSrc
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TopTen, {
        artist: _this3.state.artist
      }), _this3.state.artist.releases.length > 0 && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Releases, {
        artist: _this3.state.artist
      }));
    });

    return _this3;
  }

  return Artist;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ClientIndex; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20);
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_grid_layout__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_jsx_index_Index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(32);
/* harmony import */ var _components_jsx_Page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15);















var env = __webpack_require__(11);

var ClientIndex =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(ClientIndex, _React$Component);

  function ClientIndex() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, ClientIndex);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ClientIndex)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "state", {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "getGridFromDatabase",
    /*#__PURE__*/
    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var layouts, cells;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("".concat(env.apiUrl, "/grids/index/layouts")).then(function (r) {
                return r.data;
              });

            case 2:
              layouts = _context.sent;
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("".concat(env.apiUrl, "/grids/index/cells")).then(function (r) {
                return r.data;
              });

            case 5:
              cells = _context.sent;
              return _context.abrupt("return", {
                layouts: layouts,
                cells: cells
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "render", function () {
      return _this.state.cells ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_jsx_Page__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
        noTopHeading: true
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_jsx_index_Index__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
        layouts: _this.state.layouts,
        cells: _this.state.cells,
        ResponsiveGridLayout: Object(react_grid_layout__WEBPACK_IMPORTED_MODULE_11__["WidthProvider"])(react_grid_layout__WEBPACK_IMPORTED_MODULE_11__["Responsive"])
      })) : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null, "Loading...");
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(ClientIndex, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      console.log(this.props);
      this.getGridFromDatabase().then(function (_ref2) {
        var cells = _ref2.cells,
            layouts = _ref2.layouts;

        _this2.setState({
          cells: cells,
          layouts: layouts,
          layoutsLoaded: true
        });
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      console.log(this.props);
      console.log(JSON.stringify(this.props) !== JSON.stringify(prevProps));
    }
  }]);

  return ClientIndex;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(7);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(9);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(3);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(8);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(4);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(5);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/assertThisInitialized"
var assertThisInitialized_ = __webpack_require__(1);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(6);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(2);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(17);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(10);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "auth0-lock"
var external_auth0_lock_ = __webpack_require__(58);
var external_auth0_lock_default = /*#__PURE__*/__webpack_require__.n(external_auth0_lock_);

// CONCATENATED MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/jsx/admin/ChangeView.jsx









var ChangeView_AdminControls =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(AdminControls, _React$Component);

  function AdminControls() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, AdminControls);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(AdminControls)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "render", function () {
      return external_react_default.a.createElement("div", {
        id: "change-view"
      }, external_react_default.a.createElement("h3", null, "Change view"), external_react_default.a.createElement("div", null, external_react_default.a.createElement("button", {
        onClick: function onClick() {
          return _this.props.setView('mobile');
        }
      }, "Mobile [m]"), external_react_default.a.createElement("button", {
        onClick: function onClick() {
          return _this.props.setView('tablet');
        }
      }, "Tablet [t]"), external_react_default.a.createElement("button", {
        onClick: function onClick() {
          return _this.props.setView('desktop');
        }
      }, "Desktop [d]"), external_react_default.a.createElement("label", null, "Scale: "), external_react_default.a.createElement("select", {
        onChange: function onChange(e) {
          return _this.handleScaleSelect(e);
        }
      }, external_react_default.a.createElement("option", {
        value: "1"
      }, "100%"), external_react_default.a.createElement("option", {
        value: "0.9"
      }, "90%"), external_react_default.a.createElement("option", {
        value: "0.8"
      }, "80%"), external_react_default.a.createElement("option", {
        value: "0.7"
      }, "70%"), external_react_default.a.createElement("option", {
        value: "0.6"
      }, "60%"), external_react_default.a.createElement("option", {
        value: "0.5"
      }, "50%"))));
    });

    return _this;
  }

  createClass_default()(AdminControls, [{
    key: "handleScaleSelect",
    value: function handleScaleSelect(e) {
      var i = e.target.selectedIndex;
      var scale = e.target.options[i].value;
      this.props.setScale(scale);
    }
  }]);

  return AdminControls;
}(external_react_default.a.Component);


// CONCATENATED MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/jsx/ToggleButton.jsx









var ToggleButton_default =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(_default, _React$Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "render", function () {
      return external_react_default.a.createElement("button", {
        className: _this.props.enabled ? 'enabled' : '',
        onClick: function onClick(e) {
          return _this.handleClick(e);
        }
      }, _this.props.children);
    });

    return _this;
  }

  createClass_default()(_default, [{
    key: "handleClick",
    value: function handleClick(e) {
      this.props.toggle();
      e.target.classList.toggle('enabled');
    }
  }]);

  return _default;
}(external_react_default.a.Component);


// CONCATENATED MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/jsx/admin/AdminControls.jsx











var AdminControls_AdminControls =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(AdminControls, _React$Component);

  function AdminControls() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, AdminControls);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(AdminControls)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "render", function () {
      return external_react_default.a.createElement("div", {
        id: "admin-panel"
      }, external_react_default.a.createElement(ChangeView_AdminControls, {
        setView: _this.props.setView,
        setScale: _this.props.setScale
      }), _this.props.pageName === 'index' && external_react_default.a.createElement("div", {
        className: "undo-redo"
      }, external_react_default.a.createElement("button", {
        onClick: function onClick() {
          return _this.props.undoLayoutChange();
        }
      }, "Undo [u]"), external_react_default.a.createElement("button", {
        onClick: function onClick() {
          return _this.props.redoLayoutChange();
        }
      }, "Redo [r]")));
    });

    return _this;
  }

  createClass_default()(AdminControls, [{
    key: "handleScaleSelect",
    value: function handleScaleSelect(e) {
      var i = e.target.selectedIndex;
      var scale = e.target.options[i].value;
      this.props.setScale(scale);
    }
  }]);

  return AdminControls;
}(external_react_default.a.Component);


// EXTERNAL MODULE: external "react-grid-layout"
var external_react_grid_layout_ = __webpack_require__(20);

// EXTERNAL MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/jsx/index/Index.jsx
var Index = __webpack_require__(32);

// CONCATENATED MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/containers/AdminIndex.jsx










var AdminIndex_AdminIndex =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(AdminIndex, _React$Component);

  function AdminIndex() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, AdminIndex);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(AdminIndex)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "render", function () {
      return _this.props.cells ? external_react_default.a.createElement(Index["a" /* default */], {
        selectCell: function selectCell(index) {
          return _this.props.selectCell(index);
        },
        selectedCell: _this.props.selectedCell,
        view: _this.props.view,
        layouts: _this.props.layouts,
        cells: _this.props.cells,
        ResponsiveGridLayout: external_react_grid_layout_["Responsive"],
        gridWidth: _this.props.gridWidth,
        onLayoutChange: function onLayoutChange(layout, layouts) {
          return _this.props.onLayoutChange(layout, layouts);
        }
      }) : external_react_default.a.createElement("div", null, "Loading...");
    });

    return _this;
  }

  return AdminIndex;
}(external_react_default.a.Component);


// EXTERNAL MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/jsx/Header.jsx + 2 modules
var Header = __webpack_require__(33);

// EXTERNAL MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/jsx/Footer.jsx
var Footer = __webpack_require__(30);

// CONCATENATED MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/jsx/admin/PagePreview.jsx











var PagePreview_PagePreview =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(PagePreview, _React$Component);

  function PagePreview() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, PagePreview);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(PagePreview)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      dimensions: {
        mobile: {
          width: 375,
          height: 667
        },
        tablet: {
          width: 768,
          height: 1024
        },
        desktop: {
          width: 1366,
          height: 768
        }
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getWidth", function () {
      return _this.state.dimensions[_this.props.view].width;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getHeight", function () {
      return _this.state.dimensions[_this.props.view].height;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "render", function () {
      var Page = _this.props.page;
      return external_react_default.a.createElement("div", {
        id: "preview-wrapper",
        style: {
          width: _this.getWidth() * _this.props.scale,
          height: _this.getHeight() * _this.props.scale
        }
      }, external_react_default.a.createElement("div", {
        id: "preview",
        className: _this.props.view,
        style: {
          width: _this.getWidth(),
          height: _this.getHeight(),
          transform: "scale(".concat(_this.props.scale, ")"),
          transformOrigin: 'left top'
        }
      }, external_react_default.a.createElement(Header["a" /* default */], {
        mobilePreview: _this.props.view === 'mobile',
        previewWidth: _this.getWidth()
      }), external_react_default.a.createElement(Page, {
        layouts: _this.props.layouts,
        view: _this.props.view,
        onLayoutChange: function onLayoutChange(layout, layouts) {
          return _this.props.onLayoutChange(layout, layouts);
        },
        selectCell: function selectCell(index) {
          return _this.props.selectCell(index);
        },
        selectArtist: function selectArtist(index) {
          return _this.props.selectArtist(index);
        },
        selectedArtist: _this.props.selectedArtist,
        selectedCell: _this.props.selectedCell,
        artists: _this.props.artists,
        cells: _this.props.cells,
        gridWidth: _this.getWidth(),
        updateSent: _this.props.updateSent,
        updateReceived: function updateReceived() {
          return _this.props.updateReceived();
        }
      }), external_react_default.a.createElement(Footer["a" /* default */], null)));
    });

    return _this;
  }

  return PagePreview;
}(external_react_default.a.Component);


// EXTERNAL MODULE: external "react-color"
var external_react_color_ = __webpack_require__(59);

// CONCATENATED MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/jsx/admin/ColorPicker.jsx









var ColorPicker_Component =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Component, _React$Component);

  function Component() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Component);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Component)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "handleChangeComplete", function (color) {
      return _this.props.setColor(color);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "render", function () {
      return external_react_default.a.createElement(external_react_color_["SketchPicker"], {
        color: _this.props.color,
        onChangeComplete: _this.handleChangeComplete
      });
    });

    return _this;
  }

  return Component;
}(external_react_default.a.Component);


// CONCATENATED MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/jsx/admin/NonVideoOptions.jsx









var NonVideoOptions_default =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(_default, _React$Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "render", function () {
      return external_react_default.a.createElement("div", {
        className: "non-video-options"
      }, external_react_default.a.createElement("div", {
        className: "property-input"
      }, external_react_default.a.createElement("label", null, "link"), external_react_default.a.createElement("input", {
        onKeyPress: function onKeyPress(e) {
          return _this.props.handleKeyPress(e);
        },
        onChange: function onChange(e) {
          return _this.props.handleInputChange({
            e: e
          });
        },
        type: "text",
        id: "link",
        value: _this.props.state.cell.link || ''
      })), external_react_default.a.createElement("div", {
        className: "property-input"
      }, external_react_default.a.createElement("label", null, "backgroundText: heading"), external_react_default.a.createElement("input", {
        onKeyPress: function onKeyPress(e) {
          return _this.props.handleKeyPress(e);
        },
        onChange: function onChange(e) {
          return _this.props.handleInputChange({
            e: e
          });
        },
        type: "text",
        id: "backgroundText.heading",
        value: _this.props.state.cell.backgroundText ? _this.props.state.cell.backgroundText.heading || '' : ''
      })), external_react_default.a.createElement("div", {
        className: "property-input"
      }, external_react_default.a.createElement("label", null, "backgroundText: subheading"), external_react_default.a.createElement("input", {
        onKeyPress: function onKeyPress(e) {
          return _this.props.handleKeyPress(e);
        },
        onChange: function onChange(e) {
          return _this.props.handleInputChange({
            e: e
          });
        },
        type: "text",
        id: "backgroundText.subheading",
        value: _this.props.state.cell.backgroundText ? _this.props.state.cell.backgroundText.subheading || '' : ''
      })), external_react_default.a.createElement("br", null), external_react_default.a.createElement("div", {
        className: "property-input"
      }, external_react_default.a.createElement("label", null, "bottomText: background color"), external_react_default.a.createElement(ColorPicker_Component, {
        color: _this.props.state.cell.bottomText && _this.props.state.cell.bottomText.backgroundColor || '#fff',
        setColor: function setColor(color) {
          var _color$rgb = color.rgb,
              r = _color$rgb.r,
              g = _color$rgb.g,
              b = _color$rgb.b,
              a = _color$rgb.a;
          var rgbaString = "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(a, ")");

          _this.props.handleInputChange({
            path: 'bottomText.backgroundColor',
            value: rgbaString,
            colorChange: true
          });
        }
      })), external_react_default.a.createElement("div", {
        className: "property-input"
      }, external_react_default.a.createElement("label", null, "bottomText: height (example: 10px)"), external_react_default.a.createElement("input", {
        onKeyPress: function onKeyPress(e) {
          return _this.props.handleKeyPress(e);
        },
        onChange: function onChange(e) {
          return _this.props.handleInputChange({
            e: e
          });
        },
        type: "text",
        id: "bottomText.height",
        value: _this.props.state.cell.bottomText ? _this.props.state.cell.bottomText.height || '' : ''
      })), external_react_default.a.createElement("div", {
        className: "property-input"
      }, external_react_default.a.createElement("label", null, "bottomText: text"), external_react_default.a.createElement("input", {
        onKeyPress: function onKeyPress(e) {
          return _this.props.handleKeyPress(e);
        },
        onChange: function onChange(e) {
          return _this.props.handleInputChange({
            e: e
          });
        },
        type: "text",
        id: "bottomText.text",
        value: _this.props.state.cell.bottomText ? _this.props.state.cell.bottomText.text || '' : ''
      })));
    });

    return _this;
  }

  return _default;
}(external_react_default.a.Component);


// EXTERNAL MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/client-env.js
var client_env = __webpack_require__(11);
var client_env_default = /*#__PURE__*/__webpack_require__.n(client_env);

// CONCATENATED MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/jsx/admin/CellEditor.jsx















var CellEditor_CellEditor =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(CellEditor, _React$Component);

  function CellEditor() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, CellEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(CellEditor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {});

    defineProperty_default()(assertThisInitialized_default()(_this), "getCell",
    /*#__PURE__*/
    function () {
      var _ref = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(index) {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return external_axios_default.a.get("".concat(client_env_default.a.apiUrl, "/grids/index/cells/").concat(index)).then(function (r) {
                  return r.data;
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    defineProperty_default()(assertThisInitialized_default()(_this), "updateCell",
    /*#__PURE__*/
    function () {
      var _ref2 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(index, cell) {
        var result;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return external_axios_default.a.post("".concat(client_env_default.a.apiUrl, "/grids/index/cells/").concat(index), cell).then(function (r) {
                  _this.setState({
                    cellFromDatabase: cell
                  });

                  return r.data;
                });

              case 2:
                result = _context2.sent;
                return _context2.abrupt("return", result);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }());

    defineProperty_default()(assertThisInitialized_default()(_this), "handleSubmit",
    /*#__PURE__*/
    function () {
      var _ref3 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee3(e) {
        var result;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (e) e.preventDefault(); // just submit this modified value

                _context3.next = 3;
                return external_axios_default.a.post("".concat(client_env_default.a.apiUrl, "/grids/index/cells/").concat(_this.state.index), _this.state.cell).then(function (r) {
                  var cells = _this.state.cells.slice();

                  _this.setState({
                    cellFromDatabase: _this.state.cell,
                    cells: cells,
                    unsavedChanges: false
                  });

                  cells[_this.state.index] = _this.state.cell;

                  if (_this.state.colorChange) {
                    _this.props.refreshGrid({
                      cells: cells
                    });

                    _this.setState({
                      colorChange: false
                    });
                  } else {
                    _this.props.updateGrid({
                      cells: cells
                    });
                  }

                  return r.data;
                });

              case 3:
                result = _context3.sent;
                return _context3.abrupt("return", result);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x4) {
        return _ref3.apply(this, arguments);
      };
    }());

    defineProperty_default()(assertThisInitialized_default()(_this), "handleKeyPress", function (e) {
      if (e.key !== 'Enter') return;

      _this.handleSubmit(e);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleInputChange", function (_ref4) {
      var e = _ref4.e,
          path = _ref4.path,
          value = _ref4.value,
          colorChange = _ref4.colorChange;

      if (e) {
        var _path = e.target.id;
        var _value = e.target.value;

        _this.updateCellValue(_path, _value);
      } else {
        console.log(value);

        _this.updateCellValue(path, value);

        if (colorChange) _this.setState({
          colorChange: true
        });
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getCellsFromDatabase",
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee4() {
      return regenerator_default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return external_axios_default.a.get("".concat(client_env_default.a.apiUrl, "/grids/index/cells")).then(function (r) {
                return r.data;
              });

            case 2:
              return _context4.abrupt("return", _context4.sent);

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));

    defineProperty_default()(assertThisInitialized_default()(_this), "componentDidMount",
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee5() {
      var cell, cells;
      return regenerator_default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _this.getCell(_this.props.index);

            case 2:
              cell = _context5.sent;
              _context5.next = 5;
              return _this.getCellsFromDatabase();

            case 5:
              cells = _context5.sent;

              _this.setState({
                index: _this.props.index,
                cell: cell,
                cells: cells,
                cellFromDatabase: cell
              });

              window.onbeforeunload = null;

            case 8:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })));

    defineProperty_default()(assertThisInitialized_default()(_this), "changeIndex",
    /*#__PURE__*/
    function () {
      var _ref7 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee6(index) {
        var cell;
        return regenerator_default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _this.getCell(index);

              case 2:
                cell = _context6.sent;

                _this.setState({
                  index: index,
                  cell: cell,
                  cellFromDatabase: cell,
                  unsavedChanges: false
                });

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x5) {
        return _ref7.apply(this, arguments);
      };
    }());

    defineProperty_default()(assertThisInitialized_default()(_this), "newCell",
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee7() {
      var layouts, obj;
      return regenerator_default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (!_this.validateCell()) {
                _context7.next = 6;
                break;
              }

              _context7.next = 3;
              return external_axios_default.a.get("".concat(client_env_default.a.apiUrl, "/grids/index/layouts")).then(function (r) {
                return r.data;
              });

            case 3:
              layouts = _context7.sent;
              obj = {
                newLayouts: {
                  desktop: {
                    w: 12,
                    h: 4,
                    x: 0,
                    minW: 4,
                    minH: 2
                  },
                  tablet: {
                    w: 12,
                    h: 4,
                    x: 0,
                    minW: 4,
                    minH: 2
                  },
                  mobile: {
                    w: 12,
                    h: 4,
                    x: 0,
                    minW: 4,
                    minH: 2
                  }
                },
                newCell: _this.state.cell
              };
              external_axios_default.a.post("".concat(client_env_default.a.apiUrl, "/grids/index/layouts/newCell"), obj).then(function (r) {
                var _r$data = r.data,
                    layouts = _r$data.layouts,
                    cells = _r$data.cells;

                _this.props.updateGrid({
                  layouts: layouts,
                  cells: cells
                });

                _this.changeIndex(r.data.index);
              });

            case 6:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    })));

    defineProperty_default()(assertThisInitialized_default()(_this), "toggleVideoMode", function () {
      _this.updateCellValue('video', !_this.state.cell.video);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "componentDidUpdate",
    /*#__PURE__*/
    function () {
      var _ref9 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee8(prevProps) {
        var discardChanges;
        return regenerator_default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                // update index when a new cell is selected
                if (_this.props.index !== prevProps.index) {
                  if (_this.state.unsavedChanges) {
                    discardChanges = confirm("You've made unsaved changes for this cell. Proceed and discard?");
                    if (discardChanges) _this.changeIndex();
                  } else _this.changeIndex(_this.props.index);
                }

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      return function (_x6) {
        return _ref9.apply(this, arguments);
      };
    }());

    defineProperty_default()(assertThisInitialized_default()(_this), "render", function () {
      return _this.state.cell ? external_react_default.a.createElement("div", {
        id: "property-editor"
      }, external_react_default.a.createElement("div", {
        className: "video-toggle"
      }, external_react_default.a.createElement(ToggleButton_default, {
        enabled: _this.state.cell.video,
        toggle: _this.toggleVideoMode
      }, "Toggle Video")), external_react_default.a.createElement("br", null), external_react_default.a.createElement("form", {
        onSubmit: function onSubmit(e) {
          return _this.handleSubmit(e);
        }
      }, external_react_default.a.createElement("div", {
        className: "property-input"
      }, external_react_default.a.createElement("label", null, "Image url"), external_react_default.a.createElement("input", {
        onKeyPress: function onKeyPress(e) {
          return _this.handleKeyPress(e);
        },
        onChange: function onChange(e) {
          return _this.handleInputChange({
            e: e
          });
        },
        type: "text",
        id: "imgSrc",
        value: _this.state.cell.imgSrc || ''
      })), external_react_default.a.createElement("br", null), _this.state.cell.video ? external_react_default.a.createElement("div", {
        className: "property-input"
      }, external_react_default.a.createElement("label", null, "Video link:"), external_react_default.a.createElement("input", {
        onKeyPress: function onKeyPress(e) {
          return _this.handleKeyPress(e);
        },
        onChange: function onChange(e) {
          return _this.handleInputChange({
            e: e
          });
        },
        type: "text",
        id: "videoSrc",
        value: _this.state.cell.videoSrc || ''
      })) : external_react_default.a.createElement(NonVideoOptions_default, {
        handleKeyPress: function handleKeyPress(e) {
          return _this.handleKeyPress(e);
        },
        handleInputChange: function handleInputChange(e) {
          return _this.handleInputChange(e);
        },
        state: _this.state,
        refreshGrid: function refreshGrid() {
          return _this.props.refreshGrid();
        }
      }), external_react_default.a.createElement("br", null), _this.state.error, external_react_default.a.createElement("button", null, "Submit changes")), external_react_default.a.createElement("div", {
        id: "create-new"
      }, external_react_default.a.createElement("button", {
        onClick: function onClick() {
          return _this.newCell();
        }
      }, "Submit as new cell")), external_react_default.a.createElement("button", {
        onClick: function onClick() {
          return confirm("Are you sure you want to delete this cell? (There's no going back!)") && _this.deleteCell();
        }
      }, "Delete cell")) : external_react_default.a.createElement("div", null, "loading...");
    });

    return _this;
  }

  createClass_default()(CellEditor, [{
    key: "updateCellValue",
    value: function updateCellValue(path, value) {
      var cell = Object.assign({}, this.state.cell);

      function set(path, value) {
        var schema = cell; // a moving reference to internal objects within obj

        var pList = path.split('.');
        var length = pList.length;

        for (var i = 0; i < length - 1; i++) {
          var elem = pList[i];
          if (!schema[elem]) schema[elem] = {};
          schema = schema[elem];
        }

        schema[pList[length - 1]] = value;
      }

      set(path, value);
      this.setState({
        cell: cell,
        unsavedChanges: true
      }); // if (this.inputChangeInterval) clearInterval(this.inputChangeInterval)
      // this.inputChangeInterval = setInterval(() => {
      // 	this.handleSubmit()
      // }, 500)
    }
  }, {
    key: "validateCell",
    value: function validateCell() {
      var cell = this.state.cell;
      var valid = cell.video ? cell.videoSrc : cell.imgSrc;

      if (valid) {
        this.setState({
          error: undefined
        });
      } else {
        this.setState({
          error: 'Error: You must provide at least a background image'
        });
      }

      return valid;
    }
  }, {
    key: "deleteCell",
    value: function deleteCell() {
      var _this2 = this;

      external_axios_default.a.get("".concat(client_env_default.a.apiUrl, "/grids/index/cells/").concat(this.state.index, "/delete")).then(function (r) {
        var _r$data2 = r.data,
            layouts = _r$data2.layouts,
            cells = _r$data2.cells;

        _this2.props.updateGrid({
          layouts: layouts,
          cells: cells
        });
      });
    }
  }]);

  return CellEditor;
}(external_react_default.a.Component);


// EXTERNAL MODULE: external "material-table"
var external_material_table_ = __webpack_require__(60);
var external_material_table_default = /*#__PURE__*/__webpack_require__.n(external_material_table_);

// CONCATENATED MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/jsx/admin/ReleasesTable.jsx








var ReleasesTable_Editable =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Editable, _React$Component);

  function Editable(props) {
    var _this;

    classCallCheck_default()(this, Editable);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Editable).call(this, props));
    _this.state = {
      columns: [{
        title: 'Name',
        field: 'name'
      }, {
        title: 'Spotify URL',
        field: 'spotifyUrl'
      }, {
        title: 'Album cover image URL',
        field: 'cover'
      }]
    };
    return _this;
  }

  createClass_default()(Editable, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log(this.props.data);
      return external_react_default.a.createElement(external_material_table_default.a, {
        title: "Releases",
        columns: this.state.columns,
        data: this.props.data,
        editable: {
          onRowAdd: function onRowAdd(newData) {
            return new Promise(function (resolve, reject) {
              setTimeout(function () {
                {
                  var data = _this2.props.data;
                  data.push(newData);

                  _this2.props.updateData(data);

                  resolve();
                }
                resolve();
              }, 1000);
            });
          },
          onRowUpdate: function onRowUpdate(newData, oldData) {
            return new Promise(function (resolve, reject) {
              setTimeout(function () {
                {
                  var data = _this2.props.data;
                  var index = data.indexOf(oldData);
                  data[index] = newData;

                  _this2.props.updateData(data);

                  resolve();
                }
                resolve();
              }, 1000);
            });
          },
          onRowDelete: function onRowDelete(oldData) {
            return new Promise(function (resolve, reject) {
              setTimeout(function () {
                {
                  var data = _this2.props.data;
                  var index = data.indexOf(oldData);
                  data.splice(index, 1);

                  _this2.props.updateData(data);

                  resolve();
                }
                resolve();
              }, 1000);
            });
          }
        }
      });
    }
  }]);

  return Editable;
}(external_react_default.a.Component);


// CONCATENATED MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/jsx/admin/ArtistEditor.jsx

















var ArtistEditor_ArtistEditor =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(ArtistEditor, _React$Component);

  function ArtistEditor() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, ArtistEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(ArtistEditor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {});

    defineProperty_default()(assertThisInitialized_default()(_this), "getArtist",
    /*#__PURE__*/
    function () {
      var _ref = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(index) {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return external_axios_default.a.get("".concat(client_env_default.a.apiUrl, "/artists/index/").concat(index)).then(function (r) {
                  return r.data;
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    defineProperty_default()(assertThisInitialized_default()(_this), "handleSubmit",
    /*#__PURE__*/
    function () {
      var _ref2 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(e) {
        var result;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (e) e.preventDefault(); // just submit this modified value

                console.log('submit', _this.state.artist, _this.state.index);
                _context2.next = 4;
                return external_axios_default.a.post("".concat(client_env_default.a.apiUrl, "/artists/").concat(_this.state.index), _this.state.artist).then(function (r) {
                  _this.setState({
                    artistFromDatabase: _this.state.artist,
                    unsavedChanges: false
                  });

                  if (_this.state.colorChange) {
                    _this.props.refreshArtists(_this.state.index, _this.state.artist);

                    _this.setState({
                      colorChange: false
                    });
                  } else {
                    _this.props.updateArtists(_this.state.index, _this.state.artist);
                  }

                  return r.data;
                });

              case 4:
                result = _context2.sent;
                console.log(result);
                return _context2.abrupt("return", result);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    defineProperty_default()(assertThisInitialized_default()(_this), "handleInputChange", function (_ref3) {
      var e = _ref3.e,
          path = _ref3.path,
          value = _ref3.value,
          colorChange = _ref3.colorChange;

      if (e) {
        var _path = e.target.id;
        var _value = e.target.value;

        _this.updateArtistValue(_path, _value);
      } else {
        if (colorChange) _this.setState({
          colorChange: true
        });

        _this.updateArtistValue(path, value);
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "changeIndex",
    /*#__PURE__*/
    function () {
      var _ref4 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee3(index) {
        var artist;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this.getArtist(index);

              case 2:
                artist = _context3.sent;

                _this.setState({
                  index: index,
                  artist: artist,
                  artistFromDatabase: artist,
                  unsavedChanges: false
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());

    defineProperty_default()(assertThisInitialized_default()(_this), "newArtist",
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee4() {
      return regenerator_default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (_this.validateArtist()) {
                external_axios_default.a.post("".concat(client_env_default.a.apiUrl, "/artists/new"), _this.state.artist).then(function (r) {
                  var _r$data = r.data,
                      layouts = _r$data.layouts,
                      artists = _r$data.artists;

                  _this.props.updateGrid({
                    layouts: layouts,
                    artists: artists
                  });

                  _this.changeIndex(r.data.index);
                });
              }

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));

    defineProperty_default()(assertThisInitialized_default()(_this), "componentDidUpdate",
    /*#__PURE__*/
    function () {
      var _ref6 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee5(prevProps) {
        var discardChanges;
        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                // update index when a new artist is selected
                if (_this.props.index !== prevProps.index) {
                  if (_this.state.unsavedChanges) {
                    discardChanges = confirm("You've made unsaved changes for this artist. Proceed and discard?");
                    if (discardChanges) _this.changeIndex();
                  } else _this.changeIndex(_this.props.index);
                }

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x4) {
        return _ref6.apply(this, arguments);
      };
    }());

    defineProperty_default()(assertThisInitialized_default()(_this), "componentWillMount",
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee6() {
      var artist;
      return regenerator_default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _this.getArtist(_this.props.index);

            case 2:
              artist = _context6.sent;

              _this.setState({
                artist: artist,
                index: _this.props.index
              });

              window.onbeforeunload = null;

            case 5:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    })));

    defineProperty_default()(assertThisInitialized_default()(_this), "updateReleases", function (data) {
      console.log(data);
      var artist = _this.state.artist;
      artist.releases = data;

      _this.setState({
        artist: artist
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "render", function () {
      return _this.state.artist ? external_react_default.a.createElement("div", {
        id: "property-editor"
      }, external_react_default.a.createElement("form", {
        onSubmit: function onSubmit(e) {
          return _this.handleSubmit(e);
        }
      }, external_react_default.a.createElement("div", {
        className: "property-input"
      }, external_react_default.a.createElement("label", null, "name"), external_react_default.a.createElement("input", {
        onChange: function onChange(e) {
          return _this.handleInputChange({
            e: e
          });
        },
        id: "name",
        value: _this.state.artist.name || 'artist name'
      })), external_react_default.a.createElement("div", {
        className: "property-input"
      }, external_react_default.a.createElement("label", null, "page name"), external_react_default.a.createElement("input", {
        onChange: function onChange(e) {
          return _this.handleInputChange({
            e: e
          });
        },
        id: "page",
        value: _this.state.artist.page || _this.state.artist.name && _this.state.artist.name.toLowerCase().split(' ').join('-') || ''
      })), external_react_default.a.createElement("br", null), external_react_default.a.createElement("div", {
        className: "property-input"
      }, external_react_default.a.createElement("label", null, "bio"), external_react_default.a.createElement("textarea", {
        rows: 6,
        cols: 60,
        onKeyPress: function onKeyPress(e) {
          return _this.handleTextareaKeyPress(e);
        },
        onChange: function onChange(e) {
          return _this.handleInputChange({
            e: e
          });
        },
        id: "description.bio",
        value: _this.state.artist.description && _this.state.artist.description.bio || ''
      })), external_react_default.a.createElement("br", null), external_react_default.a.createElement("div", {
        className: "property-input"
      }, external_react_default.a.createElement("label", null, "description background color (default: darkgrey)"), external_react_default.a.createElement(ColorPicker_Component, {
        color: _this.state.artist.description && _this.state.artist.description.style && _this.state.artist.description.style.backgroundColor || 'darkgrey',
        setColor: function setColor(color) {
          var _color$rgb = color.rgb,
              r = _color$rgb.r,
              g = _color$rgb.g,
              b = _color$rgb.b,
              a = _color$rgb.a;
          var rgbaString = "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(a, ")");

          _this.handleInputChange({
            path: 'description.style.backgroundColor',
            value: rgbaString,
            colorChange: true
          });
        }
      })), external_react_default.a.createElement("div", {
        className: "property-input"
      }, external_react_default.a.createElement("label", null, "description text color (default: white)"), external_react_default.a.createElement(ColorPicker_Component, {
        color: _this.state.artist.description && _this.state.artist.description.style && _this.state.artist.description.style.color || '#fff',
        setColor: function setColor(color) {
          var _color$rgb2 = color.rgb,
              r = _color$rgb2.r,
              g = _color$rgb2.g,
              b = _color$rgb2.b,
              a = _color$rgb2.a;
          var rgbaString = "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(a, ")");

          _this.handleInputChange({
            path: 'description.style.color',
            value: rgbaString,
            colorChange: true
          });
        }
      })), external_react_default.a.createElement("div", {
        className: "property-input"
      }, external_react_default.a.createElement("label", null, "description text (bio)"), external_react_default.a.createElement("textarea", {
        rows: 6,
        cols: 60,
        onKeyPress: function onKeyPress(e) {
          return _this.handleTextareaKeyPress(e);
        },
        onChange: function onChange(e) {
          return _this.handleInputChange({
            e: e
          });
        },
        id: "description.bio",
        value: _this.state.artist.description && _this.state.artist.description.bio || ''
      })), external_react_default.a.createElement("br", null), external_react_default.a.createElement(ReleasesTable_Editable, {
        data: _this.state.artist.releases,
        updateData: function updateData(data) {
          return _this.updateReleases(data);
        }
      }), _this.state.error, external_react_default.a.createElement("button", null, "Submit changes")), external_react_default.a.createElement("div", {
        id: "create-new"
      }, external_react_default.a.createElement("button", {
        onClick: function onClick() {
          return _this.newArtist();
        }
      }, "Submit as new artist")), external_react_default.a.createElement("button", {
        onClick: function onClick() {
          return confirm("Are you sure you want to delete this artist? (There's no going back!)") && _this.deleteArtist();
        }
      }, "Delete artist")) : external_react_default.a.createElement("div", null, "loading...");
    });

    return _this;
  }

  createClass_default()(ArtistEditor, [{
    key: "updateArtistValue",
    value: function updateArtistValue(path, value) {
      var artist = Object.assign({}, this.state.artist);

      function set(path, value) {
        var schema = artist; // a moving reference to internal objects within obj

        var pList = path.split('.');
        var length = pList.length;

        for (var i = 0; i < length - 1; i++) {
          var elem = pList[i];
          if (!schema[elem]) schema[elem] = {};
          schema = schema[elem];
        }

        schema[pList[length - 1]] = value;
      }

      set(path, value);
      this.setState({
        artist: artist,
        unsavedChanges: true
      });
    }
  }, {
    key: "validateArtist",
    value: function validateArtist() {
      var cell = this.state.artist;
      var valid = cell.video ? cell.videoSrc : cell.imgSrc;

      if (valid) {
        this.setState({
          error: undefined
        });
      } else {
        this.setState({
          error: 'Error: You must provide at least a background image'
        });
      }

      return valid;
    }
  }, {
    key: "deleteArtist",
    value: function deleteArtist() {
      var _this2 = this;

      external_axios_default.a.get("".concat(client_env_default.a.apiUrl, "/grids/index/artists/").concat(this.props.index, "/delete")).then(function (r) {
        var _r$data2 = r.data,
            layouts = _r$data2.layouts,
            artists = _r$data2.artists;

        _this2.props.updateGrid({
          layouts: layouts,
          artists: artists
        });
      });
    }
  }, {
    key: "handleTextareaKeyPress",
    value: function handleTextareaKeyPress(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.handleSubmit();
      }
    }
  }]);

  return ArtistEditor;
}(external_react_default.a.Component);


var ex = {
  description: {
    style: {
      backgroundColor: '#D2CFC1',
      color: '#2C25C5'
    },
    bio: 'Bacon ipsum dolor amet meatloaf pig andouille kielbasa bacon picanha tenderloin. Ground round beef ribs rump, meatloaf spare ribs tongue brisket biltong leberkas pig kielbasa. Ribeye picanha sausage, tongue sirloin landjaeger flank venison ham hock tri-tip pork chop shank. Brisket fatback strip steak tail.'
  },
  releases: [{
    name: 'All Nighters',
    spotifyUrl: 'https://open.spotify.com/album/3t9S03TNKktyKlNysyJS8k?si=ZJk-l8WKRW692NLHGnPlow',
    cover: '/images/all-nighters.jpg'
  }],
  name: 'Billy Wild',
  page: 'billy-wild',
  imgSrc: '/images/billy.jpg',
  spotifyUrl: 'https://open.spotify.com/artist/6zNQ51HIfnzskqL2R82jYD?si=rEm8CzOpQIOnzqqCJIBFYQ'
};
// EXTERNAL MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/pages/artists.jsx + 3 modules
var pages_artists = __webpack_require__(29);

// EXTERNAL MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/containers/Artist.jsx
var Artist = __webpack_require__(27);

// EXTERNAL MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/pages/producer-tools.jsx
var producer_tools = __webpack_require__(26);

// EXTERNAL MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/containers/ProducerTool.jsx
var ProducerTool = __webpack_require__(28);

// EXTERNAL MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/pages/about.jsx
var about = __webpack_require__(25);

// CONCATENATED MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/containers/Admin.jsx














var env = __webpack_require__(11);











var pages = {
  index: AdminIndex_AdminIndex,
  artists: pages_artists["default"],
  artist: Artist["default"],
  'producer-tools': producer_tools["default"],
  'producer-tool': ProducerTool["default"],
  about: about["default"]
};

var Admin_Admin =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Admin, _React$Component);

  function Admin() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Admin);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Admin)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      view: 'mobile',
      scale: 1,
      countdown: 2,
      selectedCell: 0,
      selectedArtist: 0,
      dataReady: false // authenticated: true // REMOVE FOR PRODUCTION REMOVE FOR PRODUCTION REMOVE FOR PRODUCTION REMOVE FOR PRODUCTION REMOVE FOR PRODUCTION

    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getGridFromDatabase",
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee() {
      var layouts, cells;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return external_axios_default.a.get("".concat(env.apiUrl, "/grids/index/layouts")).then(function (r) {
                return r.data;
              });

            case 2:
              layouts = _context.sent;
              _context.next = 5;
              return external_axios_default.a.get("".concat(env.apiUrl, "/grids/index/cells")).then(function (r) {
                return r.data;
              });

            case 5:
              cells = _context.sent;
              return _context.abrupt("return", {
                layouts: layouts,
                cells: cells
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    defineProperty_default()(assertThisInitialized_default()(_this), "getArtistsFromDatabase",
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee2() {
      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return external_axios_default.a.get("".concat(env.apiUrl, "/artists")).then(function (r) {
                return r.data;
              });

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    defineProperty_default()(assertThisInitialized_default()(_this), "getArtistFromDatabase",
    /*#__PURE__*/
    function () {
      var _ref3 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee3(index) {
        var artists;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return external_axios_default.a.get("".concat(env.apiUrl, "/artist/index/").concat(index)).then(function (r) {
                  return r.data;
                });

              case 2:
                artists = _context3.sent;
                return _context3.abrupt("return", artists);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());

    defineProperty_default()(assertThisInitialized_default()(_this), "getProducerToolsFromDatabase",
    /*#__PURE__*/
    function () {
      var _ref4 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee4(index) {
        var artists;
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return external_axios_default.a.get("".concat(env.apiUrl, "/producer-tools")).then(function (r) {
                  return r.data;
                });

              case 2:
                artists = _context4.sent;
                return _context4.abrupt("return", artists);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }());

    defineProperty_default()(assertThisInitialized_default()(_this), "setScale", function (scale) {
      return _this.setState({
        scale: scale
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "setView", function (view) {
      return _this.setState({
        view: view
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "cancelCountdown", function () {
      return clearInterval(_this.interval);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "updateReceived", function () {
      return _this.setState({
        updateSent: false
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "updateGrid", function (_ref5) {
      var layouts = _ref5.layouts,
          cells = _ref5.cells;
      if (layouts && cells) _this.setState({
        layouts: layouts,
        cells: cells,
        updateSent: true
      });else if (layouts) _this.setState({
        layouts: layouts,
        updateSent: true
      });else if (cells) _this.setState({
        cells: cells,
        updateSent: true
      });
      console.log(cells);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "refreshGrid", function (_ref6) {
      var cells = _ref6.cells;
      console.log('refresh grid');

      _this.setState({
        cells: {},
        cellsTemp: cells
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "updateArtists", function (index, artist) {
      var artists = _this.state.artists;
      artists[index] = artist;

      _this.setState({
        artists: artists
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "refreshArtists", function (index, artist) {
      var artists = _this.state.artists;
      artists[index] = artist;

      _this.setState({
        artists: undefined,
        artistsTemp: artists
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "setBodyBackground", function () {
      return document.getElementsByTagName('body')[0].style.backgroundColor = '#222';
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "setKeyBindings", function () {
      document.onkeypress = function (e) {
        if (e.target.tagName === 'INPUT') return;else if (e.key === 'u') _this.undoLayoutChange();else if (e.key === 'r') _this.redoLayoutChange();else if (e.key === 'm') _this.setView('mobile');else if (e.key === 't') _this.setView('tablet');else if (e.key === 'd') _this.setView('desktop');
      };
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "render", function () {
      if (_this.state.authenticated) {
        return external_react_default.a.createElement("div", {
          id: "admin-root"
        }, external_react_default.a.createElement(AdminControls_AdminControls, {
          setScale: function setScale(scale) {
            return _this.setScale(scale);
          },
          setView: function setView(view) {
            return _this.setView(view);
          },
          pageName: _this.props.pageName,
          undoLayoutChange: function undoLayoutChange() {
            return _this.undoLayoutChange();
          },
          redoLayoutChange: function redoLayoutChange() {
            return _this.redoLayoutChange();
          }
        }), _this.state.dataReady && external_react_default.a.createElement(PagePreview_PagePreview, {
          page: _this.props.page,
          view: _this.state.view,
          scale: _this.state.scale,
          selectCell: function selectCell(index) {
            return _this.selectCell(index);
          },
          selectedCell: _this.state.selectedCell,
          layouts: _this.state.layouts,
          cells: _this.state.cells,
          onLayoutChange: function onLayoutChange(layout, layouts) {
            return _this.onLayoutChange(layout, layouts);
          },
          selectArtist: function selectArtist(artist) {
            return _this.selectArtist(artist);
          },
          selectedArtist: _this.state.selectedArtist,
          artists: _this.state.artists,
          updateSent: _this.state.updateSent,
          updateReceived: function updateReceived() {
            return _this.updateReceived();
          }
        }), _this.props.pageName === 'artists' && external_react_default.a.createElement(ArtistEditor_ArtistEditor, {
          index: _this.state.selectedArtist,
          updateArtists: function updateArtists(index, artist) {
            return _this.updateArtists(index, artist);
          },
          refreshArtists: function refreshArtists(index, artist) {
            return _this.refreshArtists(index, artist);
          }
        }), _this.props.pageName === 'index' && external_react_default.a.createElement(CellEditor_CellEditor, {
          videoMode: _this.state.selectedCell.video,
          updateGrid: function updateGrid(_ref7) {
            var layouts = _ref7.layouts,
                cells = _ref7.cells;
            return _this.updateGrid({
              layouts: layouts,
              cells: cells
            });
          },
          index: _this.state.selectedCell,
          refreshGrid: function refreshGrid(_ref8) {
            var cells = _ref8.cells;
            return _this.refreshGrid({
              cells: cells
            });
          }
        }));
      } else {
        _this.authenticate();

        return external_react_default.a.createElement("div", null, "not authenticated", external_react_default.a.createElement("button", {
          onClick: function onClick() {
            return _this.signIn();
          }
        }, "Sign in"), external_react_default.a.createElement("div", null, "Signing in automatically in ", _this.state.countdown, "..."));
      }
    });

    return _this;
  }

  createClass_default()(Admin, [{
    key: "signIn",
    value: function signIn() {
      this.cancelCountdown();
      this.lock.show();
    }
  }, {
    key: "startCountdown",
    value: function startCountdown() {
      var _this2 = this;

      if (this.interval) return;
      this.interval = setInterval(function () {
        _this2.setState({
          countdown: _this2.state.countdown - 1
        });

        if (_this2.state.countdown === 0) _this2.signIn();
      }, 1000);
    }
  }, {
    key: "setTokenIfProvided",
    value: function setTokenIfProvided() {
      var _this3 = this;

      this.lock.on('authenticated', function (_ref9) {
        var accessToken = _ref9.accessToken;

        _this3.setState({
          authenticated: true
        });

        _this3.cancelCountdown();
      });
    }
  }, {
    key: "authenticate",
    value: function authenticate() {
      this.lock = new external_auth0_lock_default.a('kWHysVBkljt5AhDWF62CKNK46HQSCkkw', 'dvsn88.auth0.com', {
        allowSignUp: false
      });
      this.setTokenIfProvided();
      this.startCountdown();
    }
  }, {
    key: "addSpaceToTopOfBody",
    value: function addSpaceToTopOfBody() {
      var body = document.getElementsByTagName('body')[0];
      body.style.marginTop = '6rem';
    }
  }, {
    key: "selectCell",
    value: function selectCell(index) {
      this.setState({
        selectedCell: index
      });
    }
  }, {
    key: "selectArtist",
    value: function selectArtist(index) {
      this.setState({
        selectedArtist: index
      });
    }
  }, {
    key: "updateCell",
    value: function updateCell(index, cell) {
      console.log('update cell');
      this.setState({
        updatedCell: {
          index: index,
          cell: cell
        }
      });
    }
  }, {
    key: "undoLayoutChange",
    // grid-specific
    value: function undoLayoutChange() {
      var layouts = this.layoutsHistory[this.layoutsHistory.length - 2];

      if (layouts) {
        this.layoutsUndone.push(this.layoutsHistory[this.layoutsHistory.length - 1]);
        this.layoutsHistory = this.layoutsHistory.slice(0, this.layoutsHistory.length - 2);
        this.setState({
          layouts: layouts
        });
      }
    }
  }, {
    key: "redoLayoutChange",
    value: function redoLayoutChange() {
      var layouts = this.layoutsUndone[this.layoutsUndone.length - 1];

      if (layouts) {
        this.layoutsUndone = this.layoutsUndone.slice(0, this.layoutsUndone.length - 1);
        this.setState({
          layouts: layouts
        });
      }
    }
  }, {
    key: "onLayoutChange",
    value: function onLayoutChange(layout, layouts) {
      if (JSON.stringify(layout) === JSON.stringify(this.lastLayoutChange)) return;
      this.setState({
        layouts: layouts
      });
      this.lastLayoutChange = layout;
      if (!this.layoutsHistory) this.layoutsHistory = [layout];
      this.layoutsHistory.push(layouts);
      external_axios_default.a.post("".concat(env.apiUrl, "/grids/index"), {
        layouts: layouts
      });
    }
  }, {
    key: "selectArtist",
    value: function selectArtist(index) {
      this.setState({
        selectedArtist: index
      });
    }
  }, {
    key: "getDataForPage",
    value: function getDataForPage() {
      var _this4 = this;

      if (this.props.pageName === 'artists') {
        console.log('getting data for artists...');
        this.getArtistsFromDatabase().then(function (artists) {
          _this4.setState({
            artists: artists,
            dataReady: true
          });
        });
      } else if (this.props.pageName === 'artist') {
        console.log('getting data for artist...');
        this.getArtistsFromDatabase().then(function (artists) {
          _this4.setState({
            artists: artists,
            dataReady: true
          });
        });
      } else if (this.props.pageName === 'producer-tools') {
        console.log('getting data for producer-tools...');
        this.getProducerToolsFromDatabase().then(function (tools) {
          _this4.setState({
            tools: tools,
            dataReady: true
          });
        });
      } else if (this.props.pageName === 'index') {
        console.log('getting data for index...');
        this.getGridFromDatabase().then(function (_ref10) {
          var cells = _ref10.cells,
              layouts = _ref10.layouts;

          _this4.setState({
            cells: cells,
            layouts: layouts,
            dataReady: true
          });

          _this4.layoutsHistory = [layouts];
          _this4.layoutsUndone = [];
        });
      }
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.getDataForPage();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.pageName !== prevProps.pageName) {
        this.getDataForPage();
      } else if (this.state.cellsTemp) {
        this.setState({
          cells: this.state.cellsTemp,
          cellsTemp: undefined
        });
      } else if (this.state.artistsTemp) {
        this.setState({
          artists: this.state.artistsTemp,
          artistsTemp: undefined
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.addSpaceToTopOfBody();
      this.setKeyBindings();
      this.setBodyBackground();
    }
  }]);

  return Admin;
}(external_react_default.a.Component);

/* harmony default export */ var containers_Admin = __webpack_exports__["default"] = (function () {
  var _useRouteData = Object(external_react_static_["useRouteData"])(),
      page = _useRouteData.page,
      index = _useRouteData.index;

  console.log(page, index);
  return external_react_default.a.createElement(Admin_Admin, {
    page: pages[page],
    pageName: page,
    index: index
  });
});

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(17);

var _router = __webpack_require__(24);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return _react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren = // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), _react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? _react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)(staticInfo.path)
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (// Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return _react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("react-burger-menu");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("react-sizeme");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("auth0-lock");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("react-color");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("material-table");

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(62);
__webpack_require__(63);
module.exports = __webpack_require__(69);


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(43)["default"];

var _require = __webpack_require__(44),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/matt/Documents/web-dev/projects/division-88/src/client/artifacts/react-static-browser-plugins.js", function () {
    registerPlugins(__webpack_require__(43)["default"]);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(35)(module)))

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(44),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(45),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/matt/Documents/web-dev/projects/division-88/src/client/artifacts/react-static-templates.js", function () {
    var _require3 = __webpack_require__(45),
        templates = _require3["default"],
        notFoundTemplate = _require3.notFoundTemplate;

    registerTemplates(templates, notFoundTemplate);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(35)(module)))

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(36);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 21,
	"./": 21,
	"./index": 21,
	"./index.js": 21
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 65;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(22);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(46);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2["default"].Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(47);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(16);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(70);

var _interopRequireDefault = __webpack_require__(71);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(23));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(72));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(73);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(74)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("/Users/matt/Documents/web-dev/projects/division-88/src/client/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var loglevel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var loglevel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(loglevel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34);
// Error logging:



 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render;

  var render = function render(Comp) {
    renderMethod(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_3__["AppContainer"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(75)(module)))

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("upath");

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)(false);
// Imports
exports.i(__webpack_require__(78), "");
exports.i(__webpack_require__(79), "");

// Module
exports.push([module.i, "html,\nbody,\n#root {\n  height: 100%; }\n\n#content {\n  min-height: calc(100% - 10rem);\n  overflow: hidden; }\n\n.top-heading {\n  width: 100%;\n  padding: 8rem 0 2rem 0;\n  text-align: center;\n  font-family: 'Libre Baskerville', serif;\n  font-weight: 700; }\n  .top-heading div {\n    padding: 0 1rem; }\n  .top-heading span {\n    text-transform: lowercase;\n    font-weight: 300; }\n\n.desktop .top-heading {\n  padding: 11rem 0 4rem 0; }\n\n.tablet .top-heading {\n  padding: 8rem 0 3rem 0; }\n\nmain {\n  margin: 0 auto; }\n\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: 'Roboto Condensed', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: white;\n  background: black; }\n\na {\n  text-decoration: none;\n  color: white; }\n  a[aria-current='page']:hover {\n    color: white; }\n  a:hover {\n    color: #ddd; }\n\nsection.text {\n  margin: 0 auto;\n  max-width: 800px;\n  padding: 1rem; }\n\nbutton {\n  background: #444;\n  padding: 1em;\n  font-family: 'Roboto Condensed', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;\n  text-transform: uppercase;\n  font-size: 16px;\n  color: white;\n  border: none;\n  margin: .2em; }\n  button.enabled {\n    background: red; }\n\n.spotify-iframe {\n  margin-bottom: 2rem; }\n\nspan.arrow {\n  position: relative;\n  top: .05rem;\n  font-size: 1.5em;\n  font-weight: 400; }\n\n.button {\n  color: white;\n  padding: 3px 10px 2px 10px;\n  border: 2px solid white;\n  border-radius: .4rem;\n  font-weight: 600;\n  font-size: .8rem;\n  text-transform: uppercase; }\n\n.background-image {\n  background-position: center center;\n  background-size: cover;\n  background-repeat: no-repeat; }\n\n.page-container {\n  margin: 0 auto;\n  padding: 0;\n  width: 100%;\n  max-width: 2560px; }\n  .page-container .wrapper {\n    height: 100%;\n    width: 100%; }\n  .page-container .video-link:hover {\n    cursor: pointer; }\n  .page-container .video-link div {\n    height: 100%; }\n  .page-container .video-link .icon {\n    color: white;\n    position: absolute;\n    left: 0;\n    width: 100%;\n    top: 50%;\n    height: 50px;\n    margin-top: -25px;\n    text-align: center; }\n\n#index {\n  overflow: hidden;\n  text-transform: uppercase;\n  margin: 0 auto; }\n  #index img {\n    height: 100%;\n    width: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    max-width: 100%; }\n  #index .layout.grid-item-hovered-upon .grid-item a {\n    color: white; }\n    #index .layout.grid-item-hovered-upon .grid-item a:hover .background {\n      opacity: 0.8; }\n  #index .grid-item {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    display: grid;\n    color: white;\n    text-align: center; }\n    #index .grid-item .background {\n      width: 100%; }\n    #index .grid-item .heading {\n      font-size: 2rem;\n      font-weight: 700;\n      font-family: 'Libre Baskerville', serif;\n      text-transform: initial; }\n    #index .grid-item a .background {\n      -webkit-transition: .4s ease-in-out opacity;\n      -o-transition: .4s ease-in-out opacity;\n      transition: .4s ease-in-out opacity; }\n    #index .grid-item .react-resizable-handle {\n      background: rgba(255, 255, 255, 0.5); }\n    #index .grid-item .bottom-text {\n      background: #222;\n      display: grid;\n      -ms-flex-line-pack: center;\n          align-content: center; }\n    #index .grid-item .background-text {\n      position: absolute;\n      top: 0;\n      width: 100%;\n      height: 100%;\n      display: grid;\n      -ms-flex-line-pack: center;\n          align-content: center; }\n    #index .grid-item .video {\n      -ms-flex-item-align: center;\n          align-self: center; }\n    #index .grid-item .video-link {\n      overflow: hidden; }\n      #index .grid-item .video-link .img {\n        background: url(\"/images/trees.jpg\") no-repeat center/cover;\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        -webkit-transition: .4s ease-in-out opacity;\n        -o-transition: .4s ease-in-out opacity;\n        transition: .4s ease-in-out opacity; }\n      #index .grid-item .video-link:hover .img {\n        opacity: 0.8; }\n      #index .grid-item .video-link .icon-wrapper {\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 100%;\n        width: 100%;\n        display: grid;\n        -ms-flex-line-pack: center;\n            align-content: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n      #index .grid-item .video-link .icon {\n        font-size: 2rem; }\n    #index .grid-item img {\n      width: 100%;\n      overflow: hidden; }\n\n#admin-root {\n  margin: 0 auto;\n  max-width: 1400px;\n  padding: 0 2rem; }\n\n#root-wrapper {\n  position: relative;\n  margin: 0 auto; }\n\n#change-view {\n  display: grid;\n  grid-template-columns: auto auto; }\n\n#preview-wrapper {\n  background: black;\n  position: relative;\n  margin: 0 auto;\n  padding-right: 15px;\n  overflow-x: hidden; }\n  #preview-wrapper #preview {\n    position: relative; }\n\n#admin-panel {\n  display: grid;\n  grid-template-columns: 1fr 1fr; }\n\n#property-editor {\n  margin: 2rem auto 0 auto;\n  max-width: 800px; }\n\n.property-input {\n  display: grid;\n  grid-column-gap: 1rem;\n  grid-template-columns: 300px 1fr; }\n  .property-input label {\n    text-align: right; }\n\n.video-link .img.selected,\n.background.selected {\n  border: 2px solid red; }\n\n#artists .background-image {\n  background: url(\"/images/trees.jpg\") no-repeat center/cover;\n  height: 10rem; }\n\n#artists main {\n  display: grid;\n  grid-template-columns: 100%;\n  grid-gap: .3rem; }\n\n#artists .artist-wrapper.selected {\n  border: 2px solid red; }\n\n#artists .artist {\n  position: relative;\n  -ms-flex-align: center;\n      align-items: center;\n  font-size: 14px; }\n  #artists .artist:hover .img {\n    opacity: .8; }\n  #artists .artist .img {\n    -webkit-transition: .3s ease;\n    -o-transition: .3s ease;\n    transition: .3s ease;\n    grid-column: 1 / span 2;\n    height: 25%;\n    min-height: 300px; }\n  #artists .artist .description-outer-wrapper {\n    max-width: 100%; }\n  #artists .artist .description {\n    padding: 2rem 1rem;\n    display: grid;\n    color: black;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    height: 22rem; }\n    #artists .artist .description .bio {\n      margin: 0.8rem 0 1.3rem 0; }\n    #artists .artist .description .see-releases {\n      text-transform: uppercase;\n      font-weight: 700;\n      -webkit-transition: ease-in-out .5s;\n      -o-transition: ease-in-out .5s;\n      transition: ease-in-out .5s; }\n      #artists .artist .description .see-releases span {\n        position: relative;\n        top: -.03rem; }\n  #artists .artist .text {\n    display: inline;\n    overflow: hidden; }\n  #artists .artist h2 {\n    margin: .5rem 0 0 0;\n    line-height: 1;\n    display: inline-block;\n    font-weight: 300; }\n\n#artists.tablet main {\n  grid-template-columns: 50% 50%; }\n\n#artists.tablet .artist .description-outer-wrapper {\n  overflow: hidden; }\n  #artists.tablet .artist .description-outer-wrapper.align-left {\n    grid-column: 1 / span 1; }\n  #artists.tablet .artist .description-outer-wrapper.align-right {\n    grid-column: 2; }\n\n#artists.desktop main {\n  grid-template-columns: 50% 50%; }\n\n#artists.desktop .artist {\n  display: grid;\n  grid-template-columns: 50% 50%; }\n  #artists.desktop .artist .img {\n    height: 22rem; }\n  #artists.desktop .artist .description-outer-wrapper {\n    overflow: hidden;\n    position: absolute;\n    max-width: 500px; }\n    #artists.desktop .artist .description-outer-wrapper.align-left {\n      grid-column: 1 / span 1;\n      justify-self: start; }\n    #artists.desktop .artist .description-outer-wrapper.align-right {\n      grid-column: 2;\n      justify-self: end; }\n\n#artist h2 {\n  margin: 1rem 0 1rem 0; }\n\n#artist #top-ten {\n  margin: 2rem auto 0 auto;\n  max-width: 800px;\n  text-align: center; }\n\n#artist #releases {\n  margin: 2rem auto 0 auto;\n  text-align: center; }\n  #artist #releases .release {\n    display: grid;\n    grid-template-columns: 100%;\n    -ms-flex-line-pack: center;\n        align-content: center; }\n    #artist #releases .release img {\n      width: 100%;\n      margin-bottom: 2rem; }\n  #artist #releases .left,\n  #artist #releases .right {\n    display: inline-grid;\n    -ms-flex-line-pack: center;\n        align-content: center; }\n    @media (max-width: 800px) {\n      #artist #releases .left,\n      #artist #releases .right {\n        display: block; } }\n\n#artist.tablet #releases {\n  max-width: 800px; }\n  #artist.tablet #releases .release {\n    grid-template-columns: minmax(30px, 500px) 1fr;\n    grid-column-gap: 2rem; }\n    #artist.tablet #releases .release h2 {\n      grid-column: 1 / span 2; }\n\n#artist.desktop #releases {\n  max-width: 800px; }\n  #artist.desktop #releases .release {\n    grid-template-columns: minmax(30px, 500px) 1fr;\n    grid-column-gap: 2rem; }\n    #artist.desktop #releases .release h2 {\n      grid-column: 1 / span 2; }\n\n#producer-tools .producer-tool-img {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: -99; }\n\n#producer-tools .grid {\n  position: relative;\n  max-width: 1200px;\n  width: 90vw;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 1vw; }\n  #producer-tools .grid a h2 {\n    font-size: 3rem; }\n  #producer-tools .grid a img {\n    width: 100%; }\n\n.header-wrapper {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 999; }\n\nheader {\n  max-width: 2560px;\n  display: grid;\n  -ms-flex-align: center;\n      align-items: center;\n  text-align: center;\n  text-transform: uppercase;\n  margin: 0 auto;\n  padding: 1.5rem 2rem 0 2rem;\n  grid-template-columns: minmax(35px, 70px) 3fr;\n  justify-items: stretch; }\n  header #logo {\n    text-align: center;\n    justify-self: right;\n    color: inherit; }\n    header #logo a {\n      display: block;\n      height: 100%;\n      width: 100%;\n      color: inherit; }\n      header #logo a .icon {\n        max-width: 100%;\n        max-height: 40px; }\n        @media (min-width: 700px) {\n          header #logo a .icon {\n            max-height: 55px; } }\n  header #nav-wrapper {\n    display: inline-grid;\n    justify-items: end; }\n    header #nav-wrapper nav {\n      display: inline-grid;\n      grid-template-columns: auto auto auto;\n      justify-items: stretch;\n      width: 100%;\n      max-width: 360px;\n      font-size: .9rem; }\n      header #nav-wrapper nav a {\n        font-weight: 300;\n        padding-top: .4rem;\n        display: inline-block;\n        color: inherit; }\n\n@media (max-width: 440px) {\n  nav a {\n    display: block;\n    padding: .5rem; }\n    nav a:hover, nav a[aria-current='page']:hover {\n      background: white;\n      color: black; } }\n\nfooter {\n  width: 100%;\n  height: 10rem;\n  clear: both;\n  text-align: center;\n  display: grid;\n  -ms-flex-line-pack: center;\n      align-content: center; }\n", ""]);



/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)(false);
// Module
exports.push([module.i, ".react-grid-layout {\n  position: relative;\n  -webkit-transition: height 200ms ease;\n  -o-transition: height 200ms ease;\n  transition: height 200ms ease;\n}\n.react-grid-item {\n  -webkit-transition: all 200ms ease;\n  -o-transition: all 200ms ease;\n  transition: all 200ms ease;\n  -webkit-transition-property: left, top;\n  -o-transition-property: left, top;\n  transition-property: left, top;\n}\n.react-grid-item.cssTransforms {\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  -o-transition-property: transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n}\n.react-grid-item.resizing {\n  z-index: 1;\n  will-change: width, height;\n}\n\n.react-grid-item.react-draggable-dragging {\n  -webkit-transition: none;\n  -o-transition: none;\n  transition: none;\n  z-index: 3;\n  will-change: transform;\n}\n\n.react-grid-item.react-grid-placeholder {\n  background: red;\n  opacity: 0.2;\n  -webkit-transition-duration: 100ms;\n       -o-transition-duration: 100ms;\n          transition-duration: 100ms;\n  z-index: 2;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n\n.react-grid-item > .react-resizable-handle {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  bottom: 0;\n  right: 0;\n  cursor: se-resize;\n}\n\n.react-grid-item > .react-resizable-handle::after {\n  content: \"\";\n  position: absolute;\n  right: 3px;\n  bottom: 3px;\n  width: 5px;\n  height: 5px;\n  border-right: 2px solid rgba(0, 0, 0, 0.4);\n  border-bottom: 2px solid rgba(0, 0, 0, 0.4);\n}\n", ""]);



/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)(false);
// Module
exports.push([module.i, ".react-resizable {\n  position: relative;\n}\n.react-resizable-handle {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  background-repeat: no-repeat;\n  background-origin: content-box;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+');\n  background-position: bottom right;\n  padding: 0 3px 3px 0;\n}\n.react-resizable-handle-sw {\n  bottom: 0;\n  left: 0;\n  cursor: sw-resize;\n  -webkit-transform: rotate(90deg);\n      -ms-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n.react-resizable-handle-se {\n  bottom: 0;\n  right: 0;\n  cursor: se-resize;\n}\n.react-resizable-handle-nw {\n  top: 0;\n  left: 0;\n  cursor: nw-resize;\n  -webkit-transform: rotate(180deg);\n      -ms-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n.react-resizable-handle-ne {\n  top: 0;\n  right: 0;\n  cursor: ne-resize;\n  -webkit-transform: rotate(270deg);\n      -ms-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n.react-resizable-handle-w,\n.react-resizable-handle-e {\n  top: 50%;\n  margin-top: -10px;\n  cursor: ew-resize;\n}\n.react-resizable-handle-w {\n  left: 0;\n  -webkit-transform: rotate(135deg);\n      -ms-transform: rotate(135deg);\n          transform: rotate(135deg);\n}\n.react-resizable-handle-e {\n  right: 0;\n  -webkit-transform: rotate(315deg);\n      -ms-transform: rotate(315deg);\n          transform: rotate(315deg);\n}\n.react-resizable-handle-n,\n.react-resizable-handle-s {\n  left: 50%;\n  margin-left: -10px;\n  cursor: ns-resize;\n}\n.react-resizable-handle-n {\n  top: 0;\n  -webkit-transform: rotate(225deg);\n      -ms-transform: rotate(225deg);\n          transform: rotate(225deg);\n}\n.react-resizable-handle-s {\n  bottom: 0;\n  -webkit-transform: rotate(45deg);\n      -ms-transform: rotate(45deg);\n          transform: rotate(45deg);\n}", ""]);



/***/ })
/******/ ]);
});