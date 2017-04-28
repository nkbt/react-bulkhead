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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactBulkhead = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _shallowCompare = __webpack_require__(10);

var _shallowCompare2 = _interopRequireDefault(_shallowCompare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactBulkhead = exports.ReactBulkhead = function (_React$Component) {
  _inherits(ReactBulkhead, _React$Component);

  function ReactBulkhead() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ReactBulkhead);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReactBulkhead.__proto__ || Object.getPrototypeOf(ReactBulkhead)).call.apply(_ref, [this].concat(args))), _this), _this.onRef = function (ref) {
      _this.ref = ref;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ReactBulkhead, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.ref = null;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.ref) {
        var _props = this.props,
            _element = _props.element,
            _propsWhitelist = _props.propsWhitelist,
            onCreate = _props.onCreate,
            _children = _props.children,
            props = _objectWithoutProperties(_props, ['element', 'propsWhitelist', 'onCreate', 'children']);

        var bulkhead = onCreate(_extends({ element: this.ref }, props));

        if (typeof bulkhead !== 'object') {
          return;
        }

        this.onUpdate = bulkhead.onUpdate;
        this.onDestroy = bulkhead.onDestroy;
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref2) {
      var _element = _ref2.element,
          _propsWhitelist = _ref2.propsWhitelist,
          _onCreate = _ref2.onCreate,
          _children = _ref2.children,
          newProps = _objectWithoutProperties(_ref2, ['element', 'propsWhitelist', 'onCreate', 'children']);

      if (!this.ref) {
        return;
      }

      if (this.onUpdate && (0, _shallowCompare2.default)(this, newProps)) {
        this.onUpdate(newProps);
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.onDestroy) {
        this.onDestroy();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          element = _props2.element,
          propsWhitelist = _props2.propsWhitelist,
          _onCreate = _props2.onCreate,
          _children = _props2.children,
          rest = _objectWithoutProperties(_props2, ['element', 'propsWhitelist', 'onCreate', 'children']);

      var elementProps = Object.keys(rest).filter(function (key) {
        return propsWhitelist.indexOf(key) > -1;
      }).reduce(function (props, key) {
        return Object.assign(props, _defineProperty({}, key, rest[key]));
      }, {});

      return _react2.default.createElement(element, _extends({}, elementProps, { ref: this.onRef }));
    }
  }]);

  return ReactBulkhead;
}(_react2.default.Component);

ReactBulkhead.defaultProps = {
  element: 'div',
  propsWhitelist: ['id', 'className', 'style'],
  children: null
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Simple = __webpack_require__(5);

var _WithUpdates = __webpack_require__(7);

var _WithEvents = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = exports.App = function App() {
  return _react2.default.createElement(
    'div',
    { className: 'app' },
    _react2.default.createElement(
      'h1',
      null,
      'react-bulkhead'
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        '1. Simple one-off rendering'
      ),
      _react2.default.createElement(_Simple.Simple, null)
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        '2. With data updates'
      ),
      _react2.default.createElement(_WithUpdates.WithUpdates, null)
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        '3. With event listeners and unsubscribe'
      ),
      _react2.default.createElement(_WithEvents.WithEvents, null)
    )
  );
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Simple = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Component = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-console:0 */

var onCreate = function onCreate(_ref) {
  var element = _ref.element;

  console.log('Simple: onCreate', { element: element });
  Object.assign(element, {
    innerHTML: 'Gotcha! Mutable DOM here'
  });
};

var Simple = exports.Simple = function Simple() {
  return _react2.default.createElement(_Component.ReactBulkhead, { onCreate: onCreate });
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithEvents = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Component = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-console:0 */

var onCreate = function onCreate(_ref) {
  var element = _ref.element;

  console.log('WithEvents: onCreate', { element: element });

  Object.assign(element, {
    innerHTML: 'Hover me!'
  });

  var mouseover = function mouseover() {
    Object.assign(element, {
      innerHTML: 'HOVERED'
    });
  };

  var mouseout = function mouseout() {
    Object.assign(element, {
      innerHTML: 'Hover me!'
    });
  };

  element.addEventListener('mouseover', mouseover, false);
  element.addEventListener('mouseout', mouseout, false);

  return {
    onDestroy: function onDestroy() {
      console.log('WithEvents: onDestroy');
      element.removeEventListener('mouseover', mouseover, false);
      element.removeEventListener('mouseout', mouseout, false);
    }
  };
};

var WithEvents = exports.WithEvents = function (_React$Component) {
  _inherits(WithEvents, _React$Component);

  function WithEvents() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, WithEvents);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = WithEvents.__proto__ || Object.getPrototypeOf(WithEvents)).call.apply(_ref2, [this].concat(args))), _this), _this.state = { isDestroyed: false }, _this.onDestroy = function (_ref3) {
      var checked = _ref3.target.checked;

      _this.setState({ isDestroyed: checked });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WithEvents, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'label',
          { htmlFor: 'onDestroy' },
          'Destroy!\xA0',
          _react2.default.createElement('input', {
            id: 'onDestroy',
            onChange: this.onDestroy,
            type: 'checkbox',
            value: this.state.isDestroyed })
        ),
        this.state.isDestroyed ? null : _react2.default.createElement(_Component.ReactBulkhead, { onCreate: onCreate, value: this.state.value })
      );
    }
  }]);

  return WithEvents;
}(_react2.default.Component);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithUpdates = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Component = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-console:0 */

var onCreate = function onCreate(_ref) {
  var element = _ref.element,
      value = _ref.value;

  console.log('WithUpdates: onCreate', { element: element, value: value });

  var update = function update(val) {
    Object.assign(element, {
      innerHTML: 'Set with element.innerHTML' + (val ? ': "' + val + '"' : '')
    });
  };

  update(value);

  return {
    onUpdate: function onUpdate(next) {
      console.log('WithUpdates: onUpdate', { value: next.value });
      update(next.value);
    }
  };
};

var WithUpdates = exports.WithUpdates = function (_React$Component) {
  _inherits(WithUpdates, _React$Component);

  function WithUpdates() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, WithUpdates);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = WithUpdates.__proto__ || Object.getPrototypeOf(WithUpdates)).call.apply(_ref2, [this].concat(args))), _this), _this.state = { value: '' }, _this.onChange = function (_ref3) {
      var value = _ref3.target.value;

      _this.setState({ value: value });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WithUpdates, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('input', { onChange: this.onChange, type: 'text', value: this.state.value }),
        _react2.default.createElement(_Component.ReactBulkhead, { onCreate: onCreate, value: this.state.value })
      );
    }
  }]);

  return WithUpdates;
}(_react2.default.Component);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(2);

__webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global document */

var appRoot = document.createElement('div');

appRoot.id = 'app';
document.body.appendChild(appRoot);
_reactDom2.default.render(_react2.default.createElement(_App.App, null), appRoot);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */



var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var shallowEqual = __webpack_require__(9);

/**
 * Does a shallow comparison for props and state.
 * See ReactComponentWithPureRenderMixin
 * See also https://facebook.github.io/react/docs/shallow-compare.html
 */
function shallowCompare(instance, nextProps, nextState) {
  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
}

module.exports = shallowCompare;

/***/ })
/******/ ]);