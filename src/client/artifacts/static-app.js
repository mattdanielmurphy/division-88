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
/******/ 	return __webpack_require__(__webpack_require__.s = 52);
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["Router"]; });



/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(25);

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

var _requireUniversalModule = __webpack_require__(55);

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

var _reportChunks = __webpack_require__(57);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(38);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(39);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(58);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(26);

var _helpers = __webpack_require__(59);

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(24)(module)))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(26);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(56)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([// the featured artist's photo needs to be cropped for extra whitespace on the top (needs to be taller)
{
  name: 'Matt Murphy',
  page: 'matt-murphy',
  imgSrc: '/images/girl.jpg',
  fullHeight: true,
  description: {
    style: {
      backgroundColor: '#323867',
      color: '#DA876B'
    },
    align: 'right',
    bio: 'Bacon ipsum dolor amet meatloaf pig andouille kielbasa bacon picanha tenderloin. Ground round beef ribs rump, meatloaf spare ribs tongue brisket biltong leberkas pig kielbasa.'
  },
  spotifyUrl: 'https://open.spotify.com/artist/6zNQ51HIfnzskqL2R82jYD?si=rEm8CzOpQIOnzqqCJIBFYQ',
  releases: [{
    name: 'All Nighters',
    spotifyUrl: 'https://open.spotify.com/album/3t9S03TNKktyKlNysyJS8k?si=ZJk-l8WKRW692NLHGnPlow',
    cover: '/images/all-nighters.jpg'
  }]
}, {
  name: 'Skoop',
  imgSrc: '/images/skoop2.jpg',
  page: 'skoop',
  description: {
    style: {
      backgroundColor: '#220E5C',
      color: '#FFA3DE'
    },
    align: 'right',
    bio: 'Bacon ipsum dolor amet meatloaf pig andouille kielbasa bacon picanha tenderloin. Ground round beef ribs rump, meatloaf spare ribs tongue brisket biltong leberkas pig kielbasa. Ribeye picanha sausage, tongue sirloin landjaeger flank venison ham hock tri-tip pork chop shank. Brisket fatback strip steak tail.'
  },
  spotifyUrl: 'https://open.spotify.com/artist/7s0kEWdmrps2Ptqg2wAfOD?si=xdIgZCPVSVCDs7qp_A3wpw',
  releases: []
}, {
  name: 'Billy Wild',
  page: 'billy-wild',
  imgSrc: '/images/billy.jpg',
  description: {
    align: 'left',
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
    align: 'right',
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
  page: 'billy-wild',
  imgSrc: '/images/trees.jpg',
  description: {
    align: 'left',
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
}]);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridItem; });
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
/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29);









var GridItem =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(GridItem, _React$Component);

  function GridItem() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, GridItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(GridItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "state", {
      style: {
        background: "url(".concat(_this.props.imgSrc, ") center center/cover no-repeat"),
        width: '100%',
        // height: '100%'
        height: _this.props.bottomText ? "calc(100% - ".concat(_this.props.bottomText.height, ")") : '100%'
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "getChildren", function () {
      if (_this.props.backgroundText) return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "background-text"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        key: "heading"
      }, _this.props.backgroundText.heading), _this.props.backgroundText.subheading && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        key: "subheading"
      }, _this.props.backgroundText.subheading));
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "render", function () {
      var gridItemChildren = [react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _this.props.imgClassName,
        style: _this.state.style,
        children: _this.getChildren()
      }), _this.props.bottomText && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        key: "bottom-text",
        className: "bottom-text",
        style: {
          height: _this.props.bottomText.height
        }
      }, _this.props.bottomText.text)];
      return _this.props.videoSrc ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Video__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
        imgSrc: _this.props.imgSrc,
        videoSrc: _this.props.videoSrc,
        children: gridItemChildren
      }) : _this.props.link ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: _this.props.link,
        className: _this.props.imgClassName ? "".concat(_this.props.imgClassName, "-container") : '',
        children: gridItemChildren,
        onMouseEnter: function onMouseEnter() {
          return _this.props.setHovering(true);
        },
        onMouseLeave: function onMouseLeave() {
          return _this.props.setHovering(false);
        }
      }) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _this.props.imgClassName ? "".concat(_this.props.imgClassName, "-container") : '',
        children: gridItemChildren
      });
    });

    return _this;
  }

  return GridItem;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Artist; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
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
/* harmony import */ var components_jsx_Router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7);
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(28);
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_js_artists__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14);
/* harmony import */ var _components_jsx_Image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19);














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
      artist: _components_js_artists__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].find(function (artist) {
        return artist.page === _this3.props.artistName;
      })
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this3), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "artist",
        className: "main-container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "h1"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", null, _this3.state.artist.name, ": ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, "Releases"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_jsx_Image__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
        imgClassName: "artist-img",
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
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Image; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _GridItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15);








 // import ProgressiveImage from 'react-progressive-image'

var Image =
/*#__PURE__*/
function (_GridItem) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Image, _GridItem);

  function Image() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Image);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Image)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "state", {
      style: {
        background: "linear-gradient(\n\t\t\t\tto bottom,\n\t\t\t\trgba(255, 255, 255, 0) 20%,\n\t\t\t\trgba(255, 255, 255, 0.01) 21%,\n\t\t\t\trgba(0, 0, 0, 0.95) 85%,\n\t\t\t\trgba(0, 0, 0, 1) 100%\n\t\t\t), url(".concat(_this.props.src, ")"),
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: 1100
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "getChildren", function () {
      if (_this.props.backgroundText) return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "background-text"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", null, _this.props.backgroundText.heading), _this.props.backgroundText.subheading && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", null, _this.props.backgroundText.subheading));
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "render", function () {
      var gridItemChildren = [react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        key: "image",
        className: _this.props.imgClassName,
        style: _this.state.style // src={this.props.src}
        ,
        children: _this.getChildren()
      }), _this.props.bottomText && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        key: "bottom-text",
        className: "bottom-text",
        style: {
          height: _this.props.bottomText.height
        }
      }, _this.props.bottomText.text)];
      return _this.props.link ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: _this.props.link,
        className: _this.props.imgClassName ? "".concat(_this.props.imgClassName, "-container") : '',
        children: gridItemChildren,
        onMouseEnter: function onMouseEnter() {
          return _this.props.setHovering(true);
        },
        onMouseLeave: function onMouseLeave() {
          return _this.props.setHovering(false);
        }
      }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _this.props.imgClassName ? "".concat(_this.props.imgClassName, "-container") : '',
        children: gridItemChildren
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Image, [{
    key: "paddingTop",
    get: function get() {
      var imageHeight = 545;
      var imageWidth = 1276;
      var containerWidth = 100;
      return imageHeight / imageWidth * containerWidth;
    }
  }]);

  return Image;
}(_GridItem__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]);



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_jsx_Router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7);
/* harmony import */ var _components_js_producer_tools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21);











var ProducerTool =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ProducerTool, _React$Component);

  function ProducerTool() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ProducerTool);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ProducerTool)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "render", function () {
      var thisTool = _components_js_producer_tools__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].find(function (tool) {
        return tool.page === _this.props.pageName;
      });
      Object.assign(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), thisTool);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "producer-tool",
        className: "main-container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "h1"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", null, _this.name)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, _this.description), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: _this.getDropboxDirectLink(_this.dropboxLink),
        className: "button"
      }, "Download"));
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ProducerTool, [{
    key: "getDropboxDirectLink",
    value: function getDropboxDirectLink(dropboxLink) {
      return dropboxLink.replace('www.dropbox.com', 'dl.dropboxusercontent.com');
    }
  }]);

  return ProducerTool;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ProducerTool, props);
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
  name: 'Super Duper Pack',
  page: 'super-duper-pack',
  description: 'Fuck yourself with this new pack! Available now!',
  img: 'https://picsum.photos/1500/1000',
  dropboxLink: 'https://www.dropbox.com/s/hmsrw0pyh5qgs1v/64.png?dl=0'
}, {
  name: 'This Other Pack',
  page: 'other-pack',
  description: 'Forget about the super duper pack, this pack is totally sick.',
  img: 'https://picsum.photos/1600/1000',
  dropboxLink: 'https://www.dropbox.com/s/hmsrw0pyh5qgs1v/64.png?dl=0'
}]);

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("loglevel");

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(12);

// EXTERNAL MODULE: external "react-grid-system"
var external_react_grid_system_ = __webpack_require__(28);

// EXTERNAL MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/jsx/Router.jsx
var Router = __webpack_require__(7);

// EXTERNAL MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/pages/artist.jsx
var artist = __webpack_require__(18);

// CONCATENATED MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/containers/Artist.js


/* harmony default export */ var Artist = (function (props) {
  return external_react_default.a.createElement(artist["default"], props);
});
// EXTERNAL MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/pages/producer-tool.jsx
var producer_tool = __webpack_require__(20);

// CONCATENATED MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/containers/ProducerTool.js


/* harmony default export */ var ProducerTool = (function (props) {
  return external_react_default.a.createElement(producer_tool["default"], props);
});
// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(3);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(10);
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

// EXTERNAL MODULE: external "react-burger-menu"
var external_react_burger_menu_ = __webpack_require__(51);

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
      }]
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "render", function () {
      return external_react_default.a.createElement("div", {
        id: "nav-wrapper"
      }, external_react_default.a.createElement("nav", null, _this.state.links.map(function (link) {
        return external_react_default.a.createElement(Router["a" /* Link */], {
          key: link.name,
          onClick: _this.props.toggleOpenClose,
          to: link.url
        }, link.name);
      })));
    });

    return _this;
  }

  return Nav;
}(external_react_default.a.Component);


// EXTERNAL MODULE: external "upath"
var external_upath_ = __webpack_require__(68);

// CONCATENATED MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/jsx/OffCanvas.jsx











var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '30px',
    height: '26px',
    right: '2rem',
    top: '2rem'
  },
  bmBurgerBars: {
    background: '#fff'
  },
  bmBurgerBarsHover: {
    background: '#ddd'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100vh',
    zIndex: '9999'
  },
  bmMenu: {
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
    background: 'rgba(0, 0, 0, 0.3)'
  }
};

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
      isOpen: false
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "render", function () {
      return external_react_default.a.createElement(external_react_burger_menu_["slide"], {
        right: true,
        styles: styles,
        isOpen: _this.state.isOpen
      }, external_react_default.a.createElement(Nav_Nav, {
        toggleOpenClose: _this.toggleOpenClose
      }));
    });

    return _this;
  }

  createClass_default()(OffCanvas, [{
    key: "toggleOpenClose",
    value: function toggleOpenClose() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }]);

  return OffCanvas;
}(external_react_default.a.Component);

/* harmony default export */ var jsx_OffCanvas = (function () {
  return external_react_default.a.createElement(OffCanvas_OffCanvas, null);
});
// EXTERNAL MODULE: external "react-responsive"
var external_react_responsive_ = __webpack_require__(31);
var external_react_responsive_default = /*#__PURE__*/__webpack_require__.n(external_react_responsive_);

// CONCATENATED MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/jsx/Header.jsx





/* harmony default export */ var Header = (function () {
  return external_react_default.a.createElement("div", {
    className: "header-wrapper"
  }, external_react_default.a.createElement(external_react_responsive_default.a, {
    maxWidth: 440
  }, external_react_default.a.createElement(jsx_OffCanvas, null)), external_react_default.a.createElement("header", null, external_react_default.a.createElement("div", {
    id: "logo"
  }, external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/"
  }, external_react_default.a.createElement("img", {
    src: "/images/logo.svg",
    alt: ""
  }))), external_react_default.a.createElement(external_react_responsive_default.a, {
    minWidth: 440
  }, external_react_default.a.createElement(Nav_Nav, null))));
});
// CONCATENATED MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/jsx/Footer.jsx









var Footer_Footer =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Footer, _React$Component);

  function Footer() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Footer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Footer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "getYear", function () {
      return new Date().getFullYear();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "render", function () {
      return external_react_default.a.createElement("footer", null, "\xA9 ", _this.getYear(), " Divison 88 Ltd.");
    });

    return _this;
  }

  return Footer;
}(external_react_default.a.Component);

/* harmony default export */ var jsx_Footer = (function () {
  return external_react_default.a.createElement(Footer_Footer, null);
});
// EXTERNAL MODULE: external "loglevel"
var external_loglevel_ = __webpack_require__(22);

// EXTERNAL MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/styles/app.scss
var app = __webpack_require__(69);

// CONCATENATED MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/App.jsx









external_loglevel_["warn"]('ultra-compatible');

Object(external_react_grid_system_["setConfiguration"])({
  gutterWidth: 0
}); // Any routes that start with 'dynamic' will be treated as non-static routes

Object(external_react_static_["addPrefetchExcludes"])(['dynamic']);

function App() {
  return external_react_default.a.createElement(external_react_static_["Root"], null, external_react_default.a.createElement(Header, null), external_react_default.a.createElement("div", {
    className: "content"
  }, external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: external_react_default.a.createElement("em", null, "Loading...")
  }, external_react_default.a.createElement(Router["b" /* Router */], null, external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "*"
  }), external_react_default.a.createElement(Artist, {
    path: "/artist/:artistName"
  }), external_react_default.a.createElement(ProducerTool, {
    path: "/producer-tool/:pageName"
  })))), external_react_default.a.createElement(jsx_Footer, null));
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),
/* 24 */
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
/* 25 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(25);

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

var _requireById = __webpack_require__(13);

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
/* 27 */
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
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-grid-system");

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Video; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__);










var VideoEl = function VideoEl(_ref) {
  var videoId = _ref.videoId;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "video",
    style: {
      position: 'relative',
      paddingBottom: '56.25%'
      /* 16:9 */
      ,
      paddingTop: 25,
      height: 0
    }
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("iframe", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
    },
    src: "https://www.youtube.com/embed/".concat(videoId),
    frameBorder: "0"
  }));
};

var Video =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Video, _React$Component);

  function Video() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Video);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Video)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "state", {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "render", function () {
      return _this.state.videoId ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(VideoEl, {
        videoId: _this.state.videoId
      }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        onClick: function onClick() {
          return _this.playVideo();
        },
        className: "video-link wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _this.props.imgSrc,
        alt: "image"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaPlay"], {
        className: "icon"
      }));
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Video, [{
    key: "playVideo",
    value: function playVideo() {
      var videoId = /\?v=(.*)/.exec(this.props.videoSrc)[1];
      this.setState({
        videoId: videoId
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }]);

  return Video;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("react-grid-layout");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
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
/* 36 */
/***/ (function(module, exports) {

module.exports = require("/Users/matt/Documents/web-dev/projects/division-88/src/client/node_modules/react-static/lib/browser");

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_matt_Documents_web_dev_projects_division_88_src_client_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
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
    return Promise.all([Promise.resolve(/* import() | src/pages/404.jsx */).then(__webpack_require__.bind(null, 40))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/404.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(40);
  },
  chunkName: function chunkName() {
    return "src/pages/404.jsx";
  }
}), universalOptions);
t_0.template = '../src/pages/404.jsx';
var t_1 = _Users_matt_Documents_web_dev_projects_division_88_src_client_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/about.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/about.jsx */).then(__webpack_require__.bind(null, 41))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/about.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(41);
  },
  chunkName: function chunkName() {
    return "src/pages/about.jsx";
  }
}), universalOptions);
t_1.template = '../src/pages/about.jsx';
var t_2 = _Users_matt_Documents_web_dev_projects_division_88_src_client_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/artist.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 18))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/artist.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(18);
  },
  chunkName: function chunkName() {
    return "src/pages/artist.jsx";
  }
}), universalOptions);
t_2.template = '../src/pages/artist.jsx';
var t_3 = _Users_matt_Documents_web_dev_projects_division_88_src_client_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/artists.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/artists.jsx */).then(__webpack_require__.bind(null, 46))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/artists.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(46);
  },
  chunkName: function chunkName() {
    return "src/pages/artists.jsx";
  }
}), universalOptions);
t_3.template = '../src/pages/artists.jsx';
var t_4 = _Users_matt_Documents_web_dev_projects_division_88_src_client_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/blog.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/blog.jsx */).then(__webpack_require__.bind(null, 42))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/blog.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(42);
  },
  chunkName: function chunkName() {
    return "src/pages/blog.jsx";
  }
}), universalOptions);
t_4.template = '../src/pages/blog.jsx';
var t_5 = _Users_matt_Documents_web_dev_projects_division_88_src_client_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/index.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/index.jsx */).then(__webpack_require__.bind(null, 43))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/index.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(43);
  },
  chunkName: function chunkName() {
    return "src/pages/index.jsx";
  }
}), universalOptions);
t_5.template = '../src/pages/index.jsx';
var t_6 = _Users_matt_Documents_web_dev_projects_division_88_src_client_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/producer-tool.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 20))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/producer-tool.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(20);
  },
  chunkName: function chunkName() {
    return "src/pages/producer-tool.jsx";
  }
}), universalOptions);
t_6.template = '../src/pages/producer-tool.jsx';
var t_7 = _Users_matt_Documents_web_dev_projects_division_88_src_client_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/producer-tools.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/producer-tools.jsx */).then(__webpack_require__.bind(null, 44))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/producer-tools.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(44);
  },
  chunkName: function chunkName() {
    return "src/pages/producer-tools.jsx";
  }
}), universalOptions);
t_7.template = '../src/pages/producer-tools.jsx';
var t_8 = _Users_matt_Documents_web_dev_projects_division_88_src_client_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/containers/Post",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/containers/Post */).then(__webpack_require__.bind(null, 45))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/containers/Post');
  },
  resolve: function resolve() {
    return /*require.resolve*/(45);
  },
  chunkName: function chunkName() {
    return "src/containers/Post";
  }
}), universalOptions);
t_8.template = '../src/containers/Post'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '../src/pages/404.jsx': t_0,
  '../src/pages/about.jsx': t_1,
  '../src/pages/artist.jsx': t_2,
  '../src/pages/artists.jsx': t_3,
  '../src/pages/blog.jsx': t_4,
  '../src/pages/index.jsx': t_5,
  '../src/pages/producer-tool.jsx': t_6,
  '../src/pages/producer-tools.jsx': t_7,
  '../src/containers/Post': t_8 // Not Found Template

});
var notFoundTemplate = "../src/pages/404.jsx";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404: Page not found"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "A page does not exist at this location. Sorry about that!"));
});

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "about",
    className: "main-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "h1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "text"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "So utterly lost was he to all sense of reverence for the many marvels of their majestic bulk and mystic ways; and so dead to anything like an apprehension of any possible danger from encountering them; that in his poor opinion, the wondrous whale was but a species of magnified mouse, or at least water-rat, requiring only a little circumvention and some small application of time and trouble in order to kill and boil."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "I told him that I never liked to sleep two in a bed; that if I should ever do so, it would depend upon who the harpooneer might be, and that if he (the landlord) really had no other place for me, and the harpooneer was not decidedly objectionable, why rather than wander further about a strange town on so bitter a night, I would put up with the half of any decent man\u2019s blanket.")));
});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_jsx_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);

 //


function Blog() {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_1__["useRouteData"])(),
      posts = _useRouteData.posts;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "It's blog time."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#bottom",
    id: "top"
  }, "Scroll to bottom!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "All Posts:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, posts.map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: post.id
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_jsx_Router__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "a"], {
      to: "/blog/post/".concat(post.id, "/")
    }, post.title));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#top",
    id: "bottom"
  }, "Scroll to top!"));
}

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Grid; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
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
/* harmony import */ var loglevel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22);
/* harmony import */ var loglevel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(loglevel__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(33);
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_grid_layout__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_jsx_GridItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15);
/* harmony import */ var _components_jsx_Video__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(29);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(34);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);










loglevel__WEBPACK_IMPORTED_MODULE_9__["warn"]('ultra-compatible');


var ResponsiveGridLayout = Object(react_grid_layout__WEBPACK_IMPORTED_MODULE_11__["WidthProvider"])(react_grid_layout__WEBPACK_IMPORTED_MODULE_11__["Responsive"]);



var defaultLayouts = {
  lg: [{
    w: 12,
    h: 5,
    x: 0,
    y: 0,
    i: '0',
    moved: false,
    "static": false,
    minW: 1,
    minH: 3
  }, {
    w: 12,
    h: 5,
    x: 0,
    y: 0,
    i: '1',
    moved: false,
    "static": false,
    minW: 1,
    minH: 3
  }, {
    w: 5,
    h: 5,
    x: 0,
    y: 10,
    i: '2',
    moved: false,
    "static": false,
    minW: 1,
    minH: 3
  }, {
    w: 5,
    h: 5,
    x: 5,
    y: 10,
    i: '3',
    moved: false,
    "static": false,
    minW: 1,
    minH: 3
  }]
};
var originalLayouts = getFromLocalStorage('layouts') || defaultLayouts;

var Grid =
/*#__PURE__*/
function (_React$PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(Grid, _React$PureComponent);

  function Grid() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Grid);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Grid)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "state", {
      layouts: JSON.parse(JSON.stringify(originalLayouts)),
      editingModeEnabled: false,
      cells: [{
        link: '',
        bottomText: {
          text: 'Hi',
          height: '50px'
        },
        imgSrc: '/images/neon-bambi.jpg'
      }, {
        link: '/artists',
        backgroundText: {
          heading: 'Heading'
        },
        imgSrc: 'https://picsum.photos/1500/1500'
      }, {
        link: '/artists',
        backgroundText: {
          heading: 'Heading',
          subheading: 'Subheading'
        },
        imgSrc: 'https://picsum.photos/1500/1600'
      }, {
        imgSrc: '/images/skoop.jpg',
        videoSrc: 'https://www.youtube.com/watch?v=aUdfLZJkqFs'
      }],
      rowHeight: _this.rowHeight
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "getLayoutsFromDatabase",
    /*#__PURE__*/
    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_14___default.a.get('http://localhost/api/layouts/index').then(function (r) {
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

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "toggleEditingMode", function () {
      _this.setState({
        editingModeEnabled: !_this.state.editingModeEnabled
      });

      console.log(_this.state.editingModeEnabled);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "getButtonStyle", function () {
      if (_this.state.editingModeEnabled) {
        return {
          backgroundColor: 'red'
        };
      } else return {};
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "handleLinkClick", function (e) {
      return _this.state.editingModeEnabled ? e.preventDefault() : null;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "handleResize", function () {
      _this.setState({
        rowHeight: _this.rowHeight
      });

      if (!_this.buffering) {
        setTimeout(function () {
          _this.buffering = false;
        }, 10);
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "setKeyBindings", function () {
      document.onkeypress = function (e) {
        if (e.key === 'e') _this.toggleEditingMode();else if (e.key === 'f') _this.resetLayout();
      };
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "componentDidMount",
    /*#__PURE__*/
    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var _ref3, layouts;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this.getLayoutsFromDatabase();

            case 2:
              _ref3 = _context2.sent;
              layouts = _ref3.layouts;

              _this.setState({
                layouts: layouts,
                layoutsLoaded: true
              });

              _this.setKeyBindings();

              _this.watchWindowResizing();

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Grid, [{
    key: "resetLayout",
    value: function resetLayout() {
      this.setState({
        layouts: defaultLayouts
      });
    }
  }, {
    key: "onLayoutChange",
    value: function onLayoutChange(layout, layouts) {
      // saveToLocalStorage('layouts', layouts)
      // console.log(JSON.stringify(layouts))
      axios__WEBPACK_IMPORTED_MODULE_14___default.a.post('http://localhost/api/layouts/index', {
        layouts: layouts
      }).then(function (response) {
        return console.log(response);
      });
      this.setState({
        layouts: layouts
      });
    }
  }, {
    key: "watchWindowResizing",
    value: function watchWindowResizing() {
      var _this2 = this;

      window.onresize = function () {
        return _this2.handleResize();
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "index"
      }, this.state.layoutsLoaded && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(ResponsiveGridLayout, {
        measureBeforeMount: true,
        className: "layout",
        layouts: this.state.layouts,
        rowHeight: this.state.rowHeight,
        nb: true,
        width: 1200,
        isDraggable: this.state.editingModeEnabled,
        isResizable: this.state.editingModeEnabled,
        breakpoints: {
          lg: 1200 // md: 996,
          // sm: 768,
          // xs: 480,
          // xxs: 0

        },
        cols: {
          lg: 12 //  md: 10, sm: 6, xs: 4, xxs: 2

        },
        containerPadding: [0, 0],
        onLayoutChange: function onLayoutChange(layout, layouts) {
          return _this3.onLayoutChange(layout, layouts);
        }
      }, this.state.cells.map(function (cell, index) {
        return cell.link && !_this3.state.editingModeEnabled ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
          href: "",
          className: "grid-item",
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_jsx_GridItem__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
          imgSrc: cell.imgSrc,
          videoSrc: cell.videoSrc,
          backgroundText: cell.backgroundText,
          bottomText: cell.bottomText
        })) : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "grid-item",
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_jsx_GridItem__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
          imgSrc: cell.imgSrc,
          videoSrc: cell.videoSrc,
          backgroundText: cell.backgroundText,
          bottomText: cell.bottomText
        }));
      })));
    }
  }, {
    key: "rowHeight",
    get: function get() {
      var vW = window.innerWidth / 100;
      return 5 * vW; // window.innerWidth / 10 = 1 vw
      // 2560
    }
  }]);

  return Grid;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.PureComponent);



function getFromLocalStorage(key) {
  var ls = {};

  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem('rgl-8')) || {};
    } catch (e) {}
  }

  return ls[key];
}

function saveToLocalStorage(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem('rgl-8', JSON.stringify(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()({}, key, value)));
  }
} // export default () => (
// 	<Container style={{ padding: '0' }} fluid id="index" className="main-container">
// 		<Row>
// 			<Col xs={12}>
// 				<Wrapper>
// 					<img src="https://placeimg.com/800/300/any" alt="" />
// 				</Wrapper>
// 			</Col>
// 		</Row>
// 		<Row>
// 			<Col xs={12}>
// 				<div id="banner" className="bottom-banner">
// 					<h3>Neon Bambi</h3>
// 					<h4>New Album available</h4>
// 				</div>
// 			</Col>
// 		</Row>
// 		<Row>
// 			<Col xs={4} md={4} className="just-text">
// 				<Wrapper style={{ backgroundColor: '#333' }} className="text">
// 					<div />
// 				</Wrapper>
// 			</Col>
// 			<Col xs={8} md={8}>
// 				<Video imgSrc="https://placeimg.com/600/200" videoSrc="https://www.youtube.com/watch?v=aUdfLZJkqFs" />
// 			</Col>
// 		</Row>
// 		<Row>
// 			<Col xs={5} className="just-text">
// 				<Wrapper style={{ backgroundColor: '#666' }} className="text">
// 					<div />
// 				</Wrapper>
// 			</Col>
// 			<Col xs={7}>
// 				<img src="https://placeimg.com/500/200" alt="" />
// 			</Col>
// 		</Row>
// 	</Container>
// )

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var _components_jsx_Router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7);
/* harmony import */ var _components_jsx_Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19);
/* harmony import */ var _components_js_producer_tools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21);











var ProducerTools =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ProducerTools, _React$Component);

  function ProducerTools() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ProducerTools);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(ProducerTools)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "producer-tools",
        className: "main-container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "h1"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", null, "Producer Tools")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "grid"
      }, _components_js_producer_tools__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].map(function (tool) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_jsx_Router__WEBPACK_IMPORTED_MODULE_7__[/* Link */ "a"], {
          to: "/producer-tool/".concat(tool.page)
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
          src: tool.img,
          alt: ""
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", null, tool.name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "description"
        }, tool.description));
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_jsx_Router__WEBPACK_IMPORTED_MODULE_7__[/* Link */ "a"], {
        to: "/"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_jsx_Router__WEBPACK_IMPORTED_MODULE_7__[/* Link */ "a"], {
        to: "/"
      })));
    });

    return _this;
  }

  return ProducerTools;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ProducerTools, null);
});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_jsx_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);

 //


function Post() {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_1__["useRouteData"])(),
      post = _useRouteData.post;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_jsx_Router__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "a"], {
    to: "/blog/"
  }, '<', " Back"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, post.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, post.body));
}

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

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

// EXTERNAL MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/js/artists.js
var artists = __webpack_require__(14);

// EXTERNAL MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/jsx/Router.jsx
var Router = __webpack_require__(7);

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
        to: "/artist/".concat(_this.props.artist.page)
      }, _this.props.artist.name));
    });

    return _this;
  }

  return ArtistName;
}(external_react_default.a.Component);


// EXTERNAL MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/jsx/Image.jsx
var Image = __webpack_require__(19);

// CONCATENATED MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/components/jsx/Artist.jsx











var Artist_Artist =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Artist, _React$Component);

  function Artist() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Artist);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Artist)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      hovering: false,
      imgStyle: {
        background: "url(".concat(_this.props.artist.imgSrc, ") center center/cover no-repeat")
      },
      alignment: _this.props.artist.description.align
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getDescriptionStyle", function () {
      return _this.state.hovering ? Object.assign({
        borderColor: _this.props.artist.description.style.color || 'black'
      }, _this.props.artist.description.style) : _this.props.artist.description.style;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getSeeReleasesStyle", function () {
      return _this.state.hovering ? {
        color: _this.props.artist.description.style.color || 'black',
        opacity: 1
      } : {
        color: _this.props.artist.description.style.color || 'black'
      };
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "setHovering", function (hovering) {
      return _this.setState({
        hovering: hovering
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "render", function () {
      return external_react_default.a.createElement("div", {
        className: "".concat(_this.props.index === 0 ? 'artist first' : 'artist')
      }, external_react_default.a.createElement("div", {
        className: "artist-img",
        style: _this.state.imgStyle
      }), external_react_default.a.createElement("div", {
        className: "description-outer-wrapper align-".concat(_this.state.alignment)
      }, external_react_default.a.createElement(Router["a" /* Link */], {
        to: "/artist/".concat(_this.props.artist.page),
        onMouseOver: function onMouseOver() {
          return _this.setHovering(true);
        },
        className: "description-wrapper",
        onMouseLeave: function onMouseLeave() {
          return _this.setHovering(false);
        }
      }, external_react_default.a.createElement("div", {
        className: "description",
        style: _this.getDescriptionStyle()
      }, external_react_default.a.createElement("div", {
        className: "text"
      }, external_react_default.a.createElement("h2", null, _this.props.artist.name), external_react_default.a.createElement("div", {
        className: "bio"
      }, _this.props.artist.description.bio), external_react_default.a.createElement("div", {
        className: "see-releases",
        style: _this.getSeeReleasesStyle()
      }, external_react_default.a.createElement("span", null, ">"), " See releases"))))));
    });

    return _this;
  }

  return Artist;
}(external_react_default.a.Component);


// CONCATENATED MODULE: /Users/matt/Documents/web-dev/projects/division-88/src/client/src/pages/artists.jsx










var artists_Artists =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Artists, _React$Component);

  function Artists() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Artists);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Artists)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "getDescriptionStyle", function () {
      artists["a" /* default */];
      return {};
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "render", function () {
      return external_react_default.a.createElement("div", {
        id: "artists",
        className: "main-container"
      }, external_react_default.a.createElement("div", {
        className: "h1"
      }, external_react_default.a.createElement("h1", null, "Artists")), artists["a" /* default */].map(function (artist, index) {
        return external_react_default.a.createElement(Artist_Artist, {
          key: index,
          artist: artist,
          index: index
        });
      }));
    });

    return _this;
  }

  return Artists;
}(external_react_default.a.Component);

/* harmony default export */ var pages_artists = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement(artists_Artists, null);
});

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(12);

var _router = __webpack_require__(17);

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
/* 48 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("react-burger-menu");

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(53);
__webpack_require__(54);
module.exports = __webpack_require__(60);


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(35)["default"];

var _require = __webpack_require__(36),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/matt/Documents/web-dev/projects/division-88/src/client/artifacts/react-static-browser-plugins.js", function () {
    registerPlugins(__webpack_require__(35)["default"]);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(24)(module)))

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(36),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(37),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/matt/Documents/web-dev/projects/division-88/src/client/artifacts/react-static-templates.js", function () {
    var _require3 = __webpack_require__(37),
        templates = _require3["default"],
        notFoundTemplate = _require3.notFoundTemplate;

    registerTemplates(templates, notFoundTemplate);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(24)(module)))

/***/ }),
/* 55 */
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

var _utils = __webpack_require__(26);

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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 13,
	"./": 13,
	"./index": 13,
	"./index.js": 13
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
webpackContext.id = 56;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(25);

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

var _propTypes = __webpack_require__(38);

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
/* 58 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(39);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(11);

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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(61);

var _interopRequireDefault = __webpack_require__(62);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(63));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(64));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(65);
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

var App = __webpack_require__(66)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("/Users/matt/Documents/web-dev/projects/division-88/src/client/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(67)(module)))

/***/ }),
/* 67 */
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
/* 68 */
/***/ (function(module, exports) {

module.exports = require("upath");

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Nunito:200,300,400,600,700,800,900&display=swap);", ""]);
exports.i(__webpack_require__(70), "");
exports.i(__webpack_require__(71), "");

// Module
exports.push([module.i, "html {\n  height: 100%; }\n\nbody {\n  padding: 0;\n  margin: 0;\n  position: relative;\n  min-height: 100%;\n  font-family: 'Nunito', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.5;\n  color: white;\n  background: black; }\n  body::after {\n    content: '';\n    display: block;\n    height: 10vw; }\n\na {\n  text-decoration: none;\n  color: white; }\n  a[aria-current='page']:hover {\n    color: white; }\n  a:hover {\n    color: #ddd; }\n\nsection.text {\n  margin: 0 auto; }\n\nbutton {\n  background: #444;\n  padding: 1em;\n  font-family: 'Nunito', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;\n  font-size: 16px;\n  color: white;\n  border: none;\n  margin: .2em; }\n\nh1,\nh2 {\n  margin: 0; }\n\n.h1 {\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  top: 6rem;\n  z-index: 998; }\n  .h1 h1 {\n    margin: 0;\n    display: inline-block;\n    font-size: 40px;\n    font-weight: 700;\n    text-transform: uppercase; }\n    @media (min-width: 800px) {\n      .h1 h1 {\n        font-size: calc( 40px + 40 * (100vw - 800px) / 1760); } }\n    @media (min-width: 2560px) {\n      .h1 h1 {\n        font-size: 80px; } }\n  .h1 h2 {\n    font-size: 2.4rem;\n    margin: 0; }\n\n.spotify-iframe {\n  margin-bottom: 2rem; }\n\nspan.arrow {\n  position: relative;\n  top: .05rem;\n  font-size: 1.5em;\n  font-weight: 400; }\n\n.button {\n  color: white;\n  padding: 3px 10px 2px 10px;\n  border: 2px solid white;\n  border-radius: .4rem;\n  font-weight: 600;\n  font-size: .8rem;\n  text-transform: uppercase; }\n\n.bg-img {\n  width: 100%;\n  height: 50vw;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat; }\n\n.main-container {\n  margin: 0 auto;\n  padding: 0;\n  width: 100%; }\n  .main-container .wrapper {\n    height: 100%;\n    width: 100%; }\n  .main-container .video-link:hover {\n    cursor: pointer; }\n  .main-container .video-link div {\n    height: 100%; }\n  .main-container .video-link .icon {\n    color: white;\n    position: absolute;\n    left: 0;\n    width: 100%;\n    top: 50%;\n    height: 50px;\n    margin-top: -25px;\n    text-align: center; }\n\nhtml {\n  overflow-x: hidden; }\n\n#index {\n  text-transform: uppercase;\n  margin: 0 auto; }\n  #index img {\n    height: 100%;\n    width: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    max-width: 100%; }\n  #index a.grid-item:hover {\n    opacity: 0.9; }\n  #index .grid-item {\n    display: grid;\n    color: white;\n    text-align: center; }\n    #index .grid-item .react-resizable-handle {\n      background: rgba(255, 255, 255, 0.5); }\n    #index .grid-item .bottom-text {\n      background: #222;\n      display: grid;\n      -ms-flex-line-pack: center;\n          align-content: center; }\n    #index .grid-item .background-text {\n      height: 100%;\n      display: grid;\n      -ms-flex-line-pack: center;\n          align-content: center; }\n    #index .grid-item .video-link {\n      overflow: hidden; }\n    #index .grid-item img {\n      width: 100%;\n      overflow: hidden; }\n\n#artists {\n  display: grid;\n  grid-template-columns: 1fr 1fr; }\n  #artists .artist {\n    position: relative;\n    display: grid;\n    -ms-flex-align: center;\n        align-items: center;\n    grid-template-columns: 1fr 1fr;\n    font-size: 12px; }\n    @media (min-width: 1000px) {\n      #artists .artist {\n        font-size: calc( 12px + 8 * (100vw - 1000px) / 1560); } }\n    @media (min-width: 2560px) {\n      #artists .artist {\n        font-size: 20px; } }\n    #artists .artist.first .description-outer-wrapper {\n      height: auto; }\n      #artists .artist.first .description-outer-wrapper .description {\n        height: auto; }\n    #artists .artist .artist-img {\n      grid-column: 1 / span 2;\n      background: url(\"/images/girl.jpg\") no-repeat center/cover;\n      position: relative;\n      width: 100%;\n      height: 25vw;\n      min-height: 300px; }\n    #artists .artist .description-outer-wrapper {\n      overflow: hidden; }\n      #artists .artist .description-outer-wrapper.align-left {\n        left: 1vw; }\n      #artists .artist .description-outer-wrapper.align-right {\n        grid-column: 2;\n        right: 1vw; }\n    #artists .artist .description {\n      padding: 0 4vw;\n      display: grid;\n      width: 40vw;\n      color: black;\n      -ms-flex-line-pack: center;\n          align-content: center; }\n      #artists .artist .description .bio {\n        margin: 1vw 0 1.3vw 0; }\n      #artists .artist .description .see-releases {\n        text-transform: uppercase;\n        font-weight: 700;\n        -webkit-transition: ease-in-out .5s;\n        -o-transition: ease-in-out .5s;\n        transition: ease-in-out .5s;\n        font-size: 10px; }\n        @media (min-width: 1200px) {\n          #artists .artist .description .see-releases {\n            font-size: calc( 10px + 6 * (100vw - 1200px) / 1360); } }\n        @media (min-width: 2560px) {\n          #artists .artist .description .see-releases {\n            font-size: 16px; } }\n        #artists .artist .description .see-releases span {\n          position: relative;\n          top: -.03rem; }\n    #artists .artist .text {\n      display: inline; }\n    #artists .artist h2 {\n      margin: 2vh 0 0 0;\n      line-height: 1;\n      display: inline-block;\n      font-weight: 300;\n      font-size: 24px; }\n      @media (min-width: 800px) {\n        #artists .artist h2 {\n          font-size: calc( 24px + 22 * (100vw - 800px) / 1760); } }\n      @media (min-width: 2560px) {\n        #artists .artist h2 {\n          font-size: 46px; } }\n\n@media (min-width: 530px) {\n  #artists .artist.first {\n    grid-column: 1 / span 2;\n    display: relative; }\n    #artists .artist.first .artist-img {\n      min-height: 400px;\n      height: 40vw; }\n    #artists .artist.first .description {\n      height: 30vw; }\n    #artists .artist.first .description-outer-wrapper {\n      top: auto;\n      bottom: 5vw; }\n      #artists .artist.first .description-outer-wrapper.align-left {\n        bottom: 3vh;\n        left: 5vw; }\n      #artists .artist.first .description-outer-wrapper.align-right {\n        bottom: 8vw;\n        right: 5vw; }\n      #artists .artist.first .description-outer-wrapper .description {\n        width: 40vw;\n        padding: 2vw 2vw 3vw 2vw; } }\n\n#artists .artist {\n  grid-column-gap: 1vw; }\n  #artists .artist.first .artist-img {\n    height: 50vw; }\n  #artists .artist .description-outer-wrapper {\n    height: 100%;\n    position: absolute; }\n    #artists .artist .description-outer-wrapper.align-left {\n      left: 0; }\n    #artists .artist .description-outer-wrapper.align-right {\n      right: 0; }\n    #artists .artist .description-outer-wrapper .description {\n      height: 100%; }\n\n@media (max-width: 1250px) {\n  #artists .artist .description-outer-wrapper {\n    position: absolute; }\n    #artists .artist .description-outer-wrapper.align-left {\n      bottom: 0;\n      left: 0; }\n    #artists .artist .description-outer-wrapper.align-right {\n      bottom: 0;\n      right: 0; } }\n\n@media (min-width: 1400px) {\n  #artists .artist {\n    display: grid;\n    -ms-flex-align: center;\n        align-items: center; }\n    #artists .artist .description {\n      padding: 0 2vw;\n      width: 20vw; } }\n\n@media (min-width: 1200px) and (max-width: 1400px) {\n  #artists .artist .description {\n    width: 20vw;\n    padding: 0 2vw; } }\n\n@media (max-width: 1200px) {\n  #artists {\n    display: block; }\n    #artists .artist .description-outer-wrapper.align-left {\n      left: 0; }\n    #artists .artist .description-outer-wrapper.align-right {\n      right: 0; }\n    #artists .artist .description {\n      -ms-flex-line-pack: center;\n          align-content: center; } }\n\n@media (max-width: 530px) {\n  #artists .artist {\n    display: block;\n    margin-bottom: 5vw; }\n    #artists .artist.first .artist-img {\n      position: static;\n      height: 90vw; }\n    #artists .artist .description-outer-wrapper {\n      position: static;\n      width: 100%; }\n      #artists .artist .description-outer-wrapper.align-left {\n        left: 4vw; }\n      #artists .artist .description-outer-wrapper.align-right {\n        right: 4vw; }\n    #artists .artist .description {\n      -ms-flex-line-pack: start;\n          align-content: start;\n      padding-top: 5vw;\n      padding-bottom: 7vw;\n      width: auto; } }\n\n#artist h2 {\n  margin: 1rem 0 1rem 0; }\n\n#artist #top-ten {\n  margin: 8rem auto 0 auto;\n  max-width: 800px;\n  text-align: center; }\n\n#artist .artist-img-container {\n  position: absolute;\n  height: 50vw;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: -999; }\n\n#artist .h1 {\n  position: relative; }\n  #artist .h1 span {\n    text-transform: lowercase;\n    font-weight: 300; }\n\n#artist #releases {\n  max-width: 800px;\n  margin: 2rem auto 0 auto;\n  text-align: center; }\n  #artist #releases .release {\n    display: grid;\n    grid-template-columns: minmax(30px, 500px) 1fr;\n    grid-column-gap: 2rem;\n    -ms-flex-line-pack: center;\n        align-content: center; }\n    #artist #releases .release h2 {\n      grid-column: 1 / span 2; }\n    #artist #releases .release img {\n      width: 100%; }\n    @media (max-width: 800px) {\n      #artist #releases .release {\n        display: block; }\n        #artist #releases .release img {\n          width: 50vw;\n          margin-bottom: 2rem; } }\n  #artist #releases .left,\n  #artist #releases .right {\n    display: inline-grid;\n    -ms-flex-line-pack: center;\n        align-content: center; }\n    @media (max-width: 800px) {\n      #artist #releases .left,\n      #artist #releases .right {\n        display: block; } }\n\n#producer-tools .producer-tool-img {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: -99; }\n\n#producer-tools .h1 {\n  margin-top: 2rem; }\n\n#producer-tools .grid {\n  position: relative;\n  top: 18rem;\n  max-width: 1200px;\n  width: 90vw;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 1vw; }\n  #producer-tools .grid a h2 {\n    font-size: 3rem; }\n  #producer-tools .grid a img {\n    width: 100%; }\n\n#about .h1 {\n  margin-top: 0; }\n  @media (min-width: 1000px) {\n    #about .h1 {\n      margin-top: 2rem; } }\n  @media (min-width: 1500px) {\n    #about .h1 {\n      margin-top: 4rem; } }\n\n#about .text {\n  font-size: 16px;\n  position: relative;\n  top: 12rem;\n  max-width: 1000px;\n  width: 50vw;\n  margin: 0 auto; }\n  @media (min-width: 1000px) {\n    #about .text {\n      font-size: calc( 16px + 8 * (100vw - 1000px) / 1560); } }\n  @media (min-width: 2560px) {\n    #about .text {\n      font-size: 24px; } }\n  @media (min-width: 1000px) {\n    #about .text {\n      top: 16rem; } }\n  @media (min-width: 1500px) {\n    #about .text {\n      top: 18rem; } }\n  @media (max-width: 1200px) {\n    #about .text {\n      width: 70vw; } }\n  @media (max-width: 800px) {\n    #about .text {\n      width: 80vw; } }\n  @media (max-width: 500px) {\n    #about .text {\n      width: 90vw; } }\n\n.header-wrapper {\n  position: absolute;\n  right: 0;\n  left: 0;\n  z-index: 999; }\n\nheader {\n  max-width: 2560px;\n  display: grid;\n  -ms-flex-align: center;\n      align-items: center;\n  text-align: center;\n  text-transform: uppercase;\n  margin: 0 auto;\n  padding: 1.5rem 2rem 0 2rem;\n  grid-template-columns: minmax(35px, 70px) 3fr;\n  justify-items: stretch; }\n  header #logo {\n    text-align: center;\n    justify-self: right; }\n    header #logo a {\n      display: block;\n      height: 100%;\n      width: 100%; }\n      header #logo a img {\n        max-width: 100%;\n        max-height: 40px; }\n        @media (min-width: 700px) {\n          header #logo a img {\n            max-height: 55px; } }\n  header #nav-wrapper {\n    display: inline-grid;\n    justify-items: end; }\n    header #nav-wrapper nav {\n      display: inline-grid;\n      grid-template-columns: auto auto auto;\n      justify-items: stretch;\n      width: 100%;\n      max-width: 360px;\n      font-size: .9rem; }\n      header #nav-wrapper nav a {\n        font-weight: 300;\n        padding-top: .4rem;\n        display: inline-block; }\n\n@media (max-width: 440px) {\n  nav a {\n    display: block;\n    padding: .5rem; }\n    nav a:hover, nav a[aria-current='page']:hover {\n      background: white;\n      color: black; } }\n\nfooter {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 8vw;\n  clear: both;\n  bottom: 0;\n  text-align: center;\n  display: grid;\n  -ms-flex-line-pack: center;\n      align-content: center; }\n", ""]);



/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// Module
exports.push([module.i, ".react-grid-layout {\n  position: relative;\n  -webkit-transition: height 200ms ease;\n  -o-transition: height 200ms ease;\n  transition: height 200ms ease;\n}\n.react-grid-item {\n  -webkit-transition: all 200ms ease;\n  -o-transition: all 200ms ease;\n  transition: all 200ms ease;\n  -webkit-transition-property: left, top;\n  -o-transition-property: left, top;\n  transition-property: left, top;\n}\n.react-grid-item.cssTransforms {\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  -o-transition-property: transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n}\n.react-grid-item.resizing {\n  z-index: 1;\n  will-change: width, height;\n}\n\n.react-grid-item.react-draggable-dragging {\n  -webkit-transition: none;\n  -o-transition: none;\n  transition: none;\n  z-index: 3;\n  will-change: transform;\n}\n\n.react-grid-item.react-grid-placeholder {\n  background: red;\n  opacity: 0.2;\n  -webkit-transition-duration: 100ms;\n       -o-transition-duration: 100ms;\n          transition-duration: 100ms;\n  z-index: 2;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n\n.react-grid-item > .react-resizable-handle {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  bottom: 0;\n  right: 0;\n  cursor: se-resize;\n}\n\n.react-grid-item > .react-resizable-handle::after {\n  content: \"\";\n  position: absolute;\n  right: 3px;\n  bottom: 3px;\n  width: 5px;\n  height: 5px;\n  border-right: 2px solid rgba(0, 0, 0, 0.4);\n  border-bottom: 2px solid rgba(0, 0, 0, 0.4);\n}\n", ""]);



/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// Module
exports.push([module.i, ".react-resizable {\n  position: relative;\n}\n.react-resizable-handle {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  background-repeat: no-repeat;\n  background-origin: content-box;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+');\n  background-position: bottom right;\n  padding: 0 3px 3px 0;\n}\n.react-resizable-handle-sw {\n  bottom: 0;\n  left: 0;\n  cursor: sw-resize;\n  -webkit-transform: rotate(90deg);\n      -ms-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n.react-resizable-handle-se {\n  bottom: 0;\n  right: 0;\n  cursor: se-resize;\n}\n.react-resizable-handle-nw {\n  top: 0;\n  left: 0;\n  cursor: nw-resize;\n  -webkit-transform: rotate(180deg);\n      -ms-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n.react-resizable-handle-ne {\n  top: 0;\n  right: 0;\n  cursor: ne-resize;\n  -webkit-transform: rotate(270deg);\n      -ms-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n.react-resizable-handle-w,\n.react-resizable-handle-e {\n  top: 50%;\n  margin-top: -10px;\n  cursor: ew-resize;\n}\n.react-resizable-handle-w {\n  left: 0;\n  -webkit-transform: rotate(135deg);\n      -ms-transform: rotate(135deg);\n          transform: rotate(135deg);\n}\n.react-resizable-handle-e {\n  right: 0;\n  -webkit-transform: rotate(315deg);\n      -ms-transform: rotate(315deg);\n          transform: rotate(315deg);\n}\n.react-resizable-handle-n,\n.react-resizable-handle-s {\n  left: 50%;\n  margin-left: -10px;\n  cursor: ns-resize;\n}\n.react-resizable-handle-n {\n  top: 0;\n  -webkit-transform: rotate(225deg);\n      -ms-transform: rotate(225deg);\n          transform: rotate(225deg);\n}\n.react-resizable-handle-s {\n  bottom: 0;\n  -webkit-transform: rotate(45deg);\n      -ms-transform: rotate(45deg);\n          transform: rotate(45deg);\n}", ""]);



/***/ })
/******/ ]);
});