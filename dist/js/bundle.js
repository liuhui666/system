webpackJsonp([0],{

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var PropTypes = _interopRequireWildcard(__webpack_require__(2));

var _default = _interopRequireDefault(__webpack_require__(580));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LocaleReceiver =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LocaleReceiver, _React$Component);

  function LocaleReceiver() {
    _classCallCheck(this, LocaleReceiver);

    return _possibleConstructorReturn(this, _getPrototypeOf(LocaleReceiver).apply(this, arguments));
  }

  _createClass(LocaleReceiver, [{
    key: "getLocale",
    value: function getLocale() {
      var _this$props = this.props,
          componentName = _this$props.componentName,
          defaultLocale = _this$props.defaultLocale;
      var locale = defaultLocale || _default["default"][componentName || 'global'];
      var antLocale = this.context.antLocale;
      var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
      return _extends({}, typeof locale === 'function' ? locale() : locale, localeFromContext || {});
    }
  }, {
    key: "getLocaleCode",
    value: function getLocaleCode() {
      var antLocale = this.context.antLocale;
      var localeCode = antLocale && antLocale.locale; // Had use LocaleProvide but didn't set locale

      if (antLocale && antLocale.exist && !localeCode) {
        return _default["default"].locale;
      }

      return localeCode;
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children(this.getLocale(), this.getLocaleCode(), this.context.antLocale);
    }
  }]);

  return LocaleReceiver;
}(React.Component);

exports["default"] = LocaleReceiver;
LocaleReceiver.defaultProps = {
  componentName: 'global'
};
LocaleReceiver.contextTypes = {
  antLocale: PropTypes.object
};
//# sourceMappingURL=LocaleReceiver.js.map


/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SiderContext = void 0;

var _createReactContext = _interopRequireDefault(__webpack_require__(30));

var _configProvider = __webpack_require__(21);

var _layout = __webpack_require__(233);

var React = _interopRequireWildcard(__webpack_require__(0));

var _reactLifecyclesCompat = __webpack_require__(9);

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _omit = _interopRequireDefault(__webpack_require__(14));

var _icon = _interopRequireDefault(__webpack_require__(40));

var _isNumeric = _interopRequireDefault(__webpack_require__(633));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

// matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82
if (typeof window !== 'undefined') {
  var matchMediaPolyfill = function matchMediaPolyfill(mediaQuery) {
    return {
      media: mediaQuery,
      matches: false,
      addListener: function addListener() {},
      removeListener: function removeListener() {}
    };
  };

  window.matchMedia = window.matchMedia || matchMediaPolyfill;
}

var dimensionMap = {
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px'
};
var SiderContext = (0, _createReactContext["default"])({});
exports.SiderContext = SiderContext;

var generateId = function () {
  var i = 0;
  return function () {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    i += 1;
    return "".concat(prefix).concat(i);
  };
}();

var InternalSider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InternalSider, _React$Component);

  function InternalSider(props) {
    var _this;

    _classCallCheck(this, InternalSider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InternalSider).call(this, props));

    _this.responsiveHandler = function (mql) {
      _this.setState({
        below: mql.matches
      });

      var onBreakpoint = _this.props.onBreakpoint;

      if (onBreakpoint) {
        onBreakpoint(mql.matches);
      }

      if (_this.state.collapsed !== mql.matches) {
        _this.setCollapsed(mql.matches, 'responsive');
      }
    };

    _this.setCollapsed = function (collapsed, type) {
      if (!('collapsed' in _this.props)) {
        _this.setState({
          collapsed: collapsed
        });
      }

      var onCollapse = _this.props.onCollapse;

      if (onCollapse) {
        onCollapse(collapsed, type);
      }
    };

    _this.toggle = function () {
      var collapsed = !_this.state.collapsed;

      _this.setCollapsed(collapsed, 'clickTrigger');
    };

    _this.belowShowChange = function () {
      _this.setState({
        belowShow: !_this.state.belowShow
      });
    };

    _this.renderSider = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          className = _a.className,
          theme = _a.theme,
          collapsible = _a.collapsible,
          reverseArrow = _a.reverseArrow,
          trigger = _a.trigger,
          style = _a.style,
          width = _a.width,
          collapsedWidth = _a.collapsedWidth,
          others = __rest(_a, ["prefixCls", "className", "theme", "collapsible", "reverseArrow", "trigger", "style", "width", "collapsedWidth"]);

      var prefixCls = getPrefixCls('layout-sider', customizePrefixCls);
      var divProps = (0, _omit["default"])(others, ['collapsed', 'defaultCollapsed', 'onCollapse', 'breakpoint', 'onBreakpoint', 'siderHook']);
      var rawWidth = _this.state.collapsed ? collapsedWidth : width; // use "px" as fallback unit for width

      var siderWidth = (0, _isNumeric["default"])(rawWidth) ? "".concat(rawWidth, "px") : String(rawWidth); // special trigger when collapsedWidth == 0

      var zeroWidthTrigger = parseFloat(String(collapsedWidth || 0)) === 0 ? React.createElement("span", {
        onClick: _this.toggle,
        className: "".concat(prefixCls, "-zero-width-trigger ").concat(prefixCls, "-zero-width-trigger-").concat(reverseArrow ? 'right' : 'left')
      }, React.createElement(_icon["default"], {
        type: "bars"
      })) : null;
      var iconObj = {
        expanded: reverseArrow ? React.createElement(_icon["default"], {
          type: "right"
        }) : React.createElement(_icon["default"], {
          type: "left"
        }),
        collapsed: reverseArrow ? React.createElement(_icon["default"], {
          type: "left"
        }) : React.createElement(_icon["default"], {
          type: "right"
        })
      };
      var status = _this.state.collapsed ? 'collapsed' : 'expanded';
      var defaultTrigger = iconObj[status];
      var triggerDom = trigger !== null ? zeroWidthTrigger || React.createElement("div", {
        className: "".concat(prefixCls, "-trigger"),
        onClick: _this.toggle,
        style: {
          width: siderWidth
        }
      }, trigger || defaultTrigger) : null;

      var divStyle = _extends({}, style, {
        flex: "0 0 ".concat(siderWidth),
        maxWidth: siderWidth,
        minWidth: siderWidth,
        width: siderWidth
      });

      var siderCls = (0, _classnames["default"])(className, prefixCls, "".concat(prefixCls, "-").concat(theme), (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-collapsed"), !!_this.state.collapsed), _defineProperty(_classNames, "".concat(prefixCls, "-has-trigger"), collapsible && trigger !== null && !zeroWidthTrigger), _defineProperty(_classNames, "".concat(prefixCls, "-below"), !!_this.state.below), _defineProperty(_classNames, "".concat(prefixCls, "-zero-width"), parseFloat(siderWidth) === 0), _classNames));
      return React.createElement("aside", _extends({
        className: siderCls
      }, divProps, {
        style: divStyle
      }), React.createElement("div", {
        className: "".concat(prefixCls, "-children")
      }, _this.props.children), collapsible || _this.state.below && zeroWidthTrigger ? triggerDom : null);
    };

    _this.uniqueId = generateId('ant-sider-');
    var matchMedia;

    if (typeof window !== 'undefined') {
      matchMedia = window.matchMedia;
    }

    if (matchMedia && props.breakpoint && props.breakpoint in dimensionMap) {
      _this.mql = matchMedia("(max-width: ".concat(dimensionMap[props.breakpoint], ")"));
    }

    var collapsed;

    if ('collapsed' in props) {
      collapsed = props.collapsed;
    } else {
      collapsed = props.defaultCollapsed;
    }

    _this.state = {
      collapsed: collapsed,
      below: false
    };
    return _this;
  }

  _createClass(InternalSider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.mql) {
        this.mql.addListener(this.responsiveHandler);
        this.responsiveHandler(this.mql);
      }

      if (this.props.siderHook) {
        this.props.siderHook.addSider(this.uniqueId);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.mql) {
        this.mql.removeListener(this.responsiveHandler);
      }

      if (this.props.siderHook) {
        this.props.siderHook.removeSider(this.uniqueId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var collapsed = this.state.collapsed;
      var collapsedWidth = this.props.collapsedWidth;
      return React.createElement(SiderContext.Provider, {
        value: {
          siderCollapsed: collapsed,
          collapsedWidth: collapsedWidth
        }
      }, React.createElement(_configProvider.ConfigConsumer, null, this.renderSider));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('collapsed' in nextProps) {
        return {
          collapsed: nextProps.collapsed
        };
      }

      return null;
    }
  }]);

  return InternalSider;
}(React.Component);

InternalSider.defaultProps = {
  collapsible: false,
  defaultCollapsed: false,
  reverseArrow: false,
  width: 200,
  collapsedWidth: 80,
  style: {},
  theme: 'dark'
};
(0, _reactLifecyclesCompat.polyfill)(InternalSider);

var Sider =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Sider, _React$Component2);

  function Sider() {
    _classCallCheck(this, Sider);

    return _possibleConstructorReturn(this, _getPrototypeOf(Sider).apply(this, arguments));
  }

  _createClass(Sider, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(_layout.LayoutContext.Consumer, null, function (context) {
        return React.createElement(InternalSider, _extends({}, context, _this2.props));
      });
    }
  }]);

  return Sider;
}(React.Component);

exports["default"] = Sider;
//# sourceMappingURL=Sider.js.map


/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _createReactContext = _interopRequireDefault(__webpack_require__(30));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MenuContext = (0, _createReactContext["default"])({
  inlineCollapsed: false
});
var _default = MenuContext;
exports["default"] = _default;
//# sourceMappingURL=MenuContext.js.map


/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var PropTypes = _interopRequireWildcard(__webpack_require__(2));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _omit = _interopRequireDefault(__webpack_require__(14));

var _reactLifecyclesCompat = __webpack_require__(9);

var _configProvider = __webpack_require__(21);

var _icon = _interopRequireDefault(__webpack_require__(40));

var _type = __webpack_require__(92);

var _warning = _interopRequireDefault(__webpack_require__(63));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }

  return value;
}

function hasPrefixSuffix(props) {
  return !!('prefix' in props || props.suffix || props.allowClear);
}

var InputSizes = (0, _type.tuple)('small', 'default', 'large');

var Input =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Input).call(this, props));

    _this.handleKeyDown = function (e) {
      var _this$props = _this.props,
          onPressEnter = _this$props.onPressEnter,
          onKeyDown = _this$props.onKeyDown;

      if (e.keyCode === 13 && onPressEnter) {
        onPressEnter(e);
      }

      if (onKeyDown) {
        onKeyDown(e);
      }
    };

    _this.saveInput = function (node) {
      _this.input = node;
    };

    _this.handleReset = function (e) {
      _this.setValue('', e, function () {
        _this.focus();
      });
    };

    _this.handleChange = function (e) {
      _this.setValue(e.target.value, e);
    };

    _this.renderComponent = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;
      var customizePrefixCls = _this.props.prefixCls;
      var prefixCls = getPrefixCls('input', customizePrefixCls);
      return _this.renderLabeledInput(prefixCls, _this.renderInput(prefixCls));
    };

    var value = typeof props.value === 'undefined' ? props.defaultValue : props.value;
    _this.state = {
      value: value
    };
    return _this;
  }

  _createClass(Input, [{
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps) {
      if (hasPrefixSuffix(prevProps) !== hasPrefixSuffix(this.props)) {
        (0, _warning["default"])(this.input !== document.activeElement, 'Input', "When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ");
      }

      return null;
    } // Since polyfill `getSnapshotBeforeUpdate` need work with `componentDidUpdate`.
    // We keep an empty function here.

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {}
  }, {
    key: "focus",
    value: function focus() {
      this.input.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.input.blur();
    }
  }, {
    key: "select",
    value: function select() {
      this.input.select();
    }
  }, {
    key: "getInputClassName",
    value: function getInputClassName(prefixCls) {
      var _classNames;

      var _this$props2 = this.props,
          size = _this$props2.size,
          disabled = _this$props2.disabled;
      return (0, _classnames["default"])(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), _defineProperty(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
    }
  }, {
    key: "setValue",
    value: function setValue(value, e, callback) {
      if (!('value' in this.props)) {
        this.setState({
          value: value
        }, callback);
      }

      var onChange = this.props.onChange;

      if (onChange) {
        var event = e;

        if (e.type === 'click') {
          // click clear icon
          event = Object.create(e);
          event.target = this.input;
          event.currentTarget = this.input;
          var originalInputValue = this.input.value; // change input value cause e.target.value should be '' when clear input

          this.input.value = '';
          onChange(event); // reset input value

          this.input.value = originalInputValue;
          return;
        }

        onChange(event);
      }
    }
  }, {
    key: "renderClearIcon",
    value: function renderClearIcon(prefixCls) {
      var allowClear = this.props.allowClear;
      var value = this.state.value;

      if (!allowClear || value === undefined || value === null || value === '') {
        return null;
      }

      return React.createElement(_icon["default"], {
        type: "close-circle",
        theme: "filled",
        onClick: this.handleReset,
        className: "".concat(prefixCls, "-clear-icon"),
        role: "button"
      });
    }
  }, {
    key: "renderSuffix",
    value: function renderSuffix(prefixCls) {
      var _this$props3 = this.props,
          suffix = _this$props3.suffix,
          allowClear = _this$props3.allowClear;

      if (suffix || allowClear) {
        return React.createElement("span", {
          className: "".concat(prefixCls, "-suffix")
        }, this.renderClearIcon(prefixCls), suffix);
      }

      return null;
    }
  }, {
    key: "renderLabeledInput",
    value: function renderLabeledInput(prefixCls, children) {
      var _classNames3;

      var _this$props4 = this.props,
          addonBefore = _this$props4.addonBefore,
          addonAfter = _this$props4.addonAfter,
          style = _this$props4.style,
          size = _this$props4.size,
          className = _this$props4.className; // Not wrap when there is not addons

      if (!addonBefore && !addonAfter) {
        return children;
      }

      var wrapperClassName = "".concat(prefixCls, "-group");
      var addonClassName = "".concat(wrapperClassName, "-addon");
      var addonBeforeNode = addonBefore ? React.createElement("span", {
        className: addonClassName
      }, addonBefore) : null;
      var addonAfterNode = addonAfter ? React.createElement("span", {
        className: addonClassName
      }, addonAfter) : null;
      var mergedWrapperClassName = (0, _classnames["default"])("".concat(prefixCls, "-wrapper"), _defineProperty({}, wrapperClassName, addonBefore || addonAfter));
      var mergedGroupClassName = (0, _classnames["default"])(className, "".concat(prefixCls, "-group-wrapper"), (_classNames3 = {}, _defineProperty(_classNames3, "".concat(prefixCls, "-group-wrapper-sm"), size === 'small'), _defineProperty(_classNames3, "".concat(prefixCls, "-group-wrapper-lg"), size === 'large'), _classNames3)); // Need another wrapper for changing display:table to display:inline-block
      // and put style prop in wrapper

      return React.createElement("span", {
        className: mergedGroupClassName,
        style: style
      }, React.createElement("span", {
        className: mergedWrapperClassName
      }, addonBeforeNode, React.cloneElement(children, {
        style: null
      }), addonAfterNode));
    }
  }, {
    key: "renderLabeledIcon",
    value: function renderLabeledIcon(prefixCls, children) {
      var _classNames4;

      var props = this.props;
      var suffix = this.renderSuffix(prefixCls);

      if (!hasPrefixSuffix(props)) {
        return children;
      }

      var prefix = props.prefix ? React.createElement("span", {
        className: "".concat(prefixCls, "-prefix")
      }, props.prefix) : null;
      var affixWrapperCls = (0, _classnames["default"])(props.className, "".concat(prefixCls, "-affix-wrapper"), (_classNames4 = {}, _defineProperty(_classNames4, "".concat(prefixCls, "-affix-wrapper-sm"), props.size === 'small'), _defineProperty(_classNames4, "".concat(prefixCls, "-affix-wrapper-lg"), props.size === 'large'), _defineProperty(_classNames4, "".concat(prefixCls, "-affix-wrapper-with-clear-btn"), props.suffix && props.allowClear && this.state.value), _classNames4));
      return React.createElement("span", {
        className: affixWrapperCls,
        style: props.style
      }, prefix, React.cloneElement(children, {
        style: null,
        className: this.getInputClassName(prefixCls)
      }), suffix);
    }
  }, {
    key: "renderInput",
    value: function renderInput(prefixCls) {
      var _this$props5 = this.props,
          className = _this$props5.className,
          addonBefore = _this$props5.addonBefore,
          addonAfter = _this$props5.addonAfter;
      var value = this.state.value; // Fix https://fb.me/react-unknown-prop

      var otherProps = (0, _omit["default"])(this.props, ['prefixCls', 'onPressEnter', 'addonBefore', 'addonAfter', 'prefix', 'suffix', 'allowClear', // Input elements must be either controlled or uncontrolled,
      // specify either the value prop, or the defaultValue prop, but not both.
      'defaultValue']);
      return this.renderLabeledIcon(prefixCls, React.createElement("input", _extends({}, otherProps, {
        value: fixControlledValue(value),
        onChange: this.handleChange,
        className: (0, _classnames["default"])(this.getInputClassName(prefixCls), _defineProperty({}, className, className && !addonBefore && !addonAfter)),
        onKeyDown: this.handleKeyDown,
        ref: this.saveInput
      })));
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderComponent);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('value' in nextProps) {
        return {
          value: nextProps.value
        };
      }

      return null;
    }
  }]);

  return Input;
}(React.Component);

Input.defaultProps = {
  type: 'text'
};
Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.oneOf(InputSizes),
  maxLength: PropTypes.number,
  disabled: PropTypes.bool,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  className: PropTypes.string,
  addonBefore: PropTypes.node,
  addonAfter: PropTypes.node,
  prefixCls: PropTypes.string,
  onPressEnter: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  allowClear: PropTypes.bool
};
(0, _reactLifecyclesCompat.polyfill)(Input);
var _default = Input;
exports["default"] = _default;
//# sourceMappingURL=Input.js.map


/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withConfigConsumer = withConfigConsumer;
exports["default"] = exports.ConfigConsumer = exports.configConsumerProps = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _createReactContext = _interopRequireDefault(__webpack_require__(30));

var _renderEmpty = _interopRequireDefault(__webpack_require__(578));

var _localeProvider = _interopRequireWildcard(__webpack_require__(585));

var _LocaleReceiver = _interopRequireDefault(__webpack_require__(104));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var configConsumerProps = ['getPopupContainer', 'rootPrefixCls', 'getPrefixCls', 'renderEmpty', 'csp', 'autoInsertSpaceInButton', 'locale'];
exports.configConsumerProps = configConsumerProps;
var ConfigContext = (0, _createReactContext["default"])({
  // We provide a default function for Context without provider
  getPrefixCls: function getPrefixCls(suffixCls, customizePrefixCls) {
    if (customizePrefixCls) return customizePrefixCls;
    return "ant-".concat(suffixCls);
  },
  renderEmpty: _renderEmpty["default"]
});
var ConfigConsumer = ConfigContext.Consumer;
exports.ConfigConsumer = ConfigConsumer;

var ConfigProvider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ConfigProvider, _React$Component);

  function ConfigProvider() {
    var _this;

    _classCallCheck(this, ConfigProvider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConfigProvider).apply(this, arguments));

    _this.getPrefixCls = function (suffixCls, customizePrefixCls) {
      var _this$props$prefixCls = _this.props.prefixCls,
          prefixCls = _this$props$prefixCls === void 0 ? 'ant' : _this$props$prefixCls;
      if (customizePrefixCls) return customizePrefixCls;
      return suffixCls ? "".concat(prefixCls, "-").concat(suffixCls) : prefixCls;
    };

    _this.renderProvider = function (context, legacyLocale) {
      var _this$props = _this.props,
          children = _this$props.children,
          getPopupContainer = _this$props.getPopupContainer,
          renderEmpty = _this$props.renderEmpty,
          csp = _this$props.csp,
          autoInsertSpaceInButton = _this$props.autoInsertSpaceInButton,
          locale = _this$props.locale;

      var config = _extends({}, context, {
        getPrefixCls: _this.getPrefixCls,
        csp: csp,
        autoInsertSpaceInButton: autoInsertSpaceInButton
      });

      if (getPopupContainer) {
        config.getPopupContainer = getPopupContainer;
      }

      if (renderEmpty) {
        config.renderEmpty = renderEmpty;
      }

      return React.createElement(ConfigContext.Provider, {
        value: config
      }, React.createElement(_localeProvider["default"], {
        locale: locale || legacyLocale,
        _ANT_MARK__: _localeProvider.ANT_MARK
      }, children));
    };

    return _this;
  }

  _createClass(ConfigProvider, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(_LocaleReceiver["default"], null, function (_, __, legacyLocale) {
        return React.createElement(ConfigConsumer, null, function (context) {
          return _this2.renderProvider(context, legacyLocale);
        });
      });
    }
  }]);

  return ConfigProvider;
}(React.Component);

function withConfigConsumer(config) {
  return function (Component) {
    // Wrap with ConfigConsumer. Since we need compatible with react 15, be care when using ref methods
    var SFC = function SFC(props) {
      return React.createElement(ConfigConsumer, null, function (configProps) {
        var basicPrefixCls = config.prefixCls;
        var getPrefixCls = configProps.getPrefixCls;
        var customizePrefixCls = props.prefixCls;
        var prefixCls = getPrefixCls(basicPrefixCls, customizePrefixCls);
        return React.createElement(Component, _extends({}, configProps, props, {
          prefixCls: prefixCls
        }));
      });
    };

    var cons = Component.constructor;
    var name = cons && cons.displayName || Component.name || 'Component';
    SFC.displayName = "withConfigConsumer(".concat(name, ")");
    return SFC;
  };
}

var _default = ConfigProvider;
exports["default"] = _default;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _layout = __webpack_require__(232);

var _layout2 = _interopRequireDefault(_layout);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(377);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Sider = __webpack_require__(635);

var _Sider2 = _interopRequireDefault(_Sider);

var _Header = __webpack_require__(678);

var _Header2 = _interopRequireDefault(_Header);

var _index = __webpack_require__(686);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Content = _layout2.default.Content;

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _layout2.default,
        { className: _index2.default.container },
        _react2.default.createElement(_Sider2.default, null),
        _react2.default.createElement(
          _layout2.default,
          null,
          _react2.default.createElement(_Header2.default, null),
          _react2.default.createElement(
            Content,
            {
              style: {
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 280
              }
            },
            '\u8FD9\u91CC\u662F\u5185\u5BB9',
            this.props.children
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

App.propTypes = {
  children: _propTypes2.default.element
};

exports.default = App;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _layout = _interopRequireDefault(__webpack_require__(233));

var _Sider = _interopRequireDefault(__webpack_require__(138));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_layout["default"].Sider = _Sider["default"];
var _default = _layout["default"];
exports["default"] = _default;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LayoutContext = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _createReactContext = _interopRequireDefault(__webpack_require__(30));

var _configProvider = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var LayoutContext = (0, _createReactContext["default"])({
  siderHook: {
    addSider: function addSider() {
      return null;
    },
    removeSider: function removeSider() {
      return null;
    }
  }
});
exports.LayoutContext = LayoutContext;

function generator(_ref) {
  var suffixCls = _ref.suffixCls,
      tagName = _ref.tagName;
  return function (BasicComponent) {
    return (
      /*#__PURE__*/
      function (_React$Component) {
        _inherits(Adapter, _React$Component);

        function Adapter() {
          var _this;

          _classCallCheck(this, Adapter);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(Adapter).apply(this, arguments));

          _this.renderComponent = function (_ref2) {
            var getPrefixCls = _ref2.getPrefixCls;
            var customizePrefixCls = _this.props.prefixCls;
            var prefixCls = getPrefixCls(suffixCls, customizePrefixCls);
            return React.createElement(BasicComponent, _extends({
              prefixCls: prefixCls,
              tagName: tagName
            }, _this.props));
          };

          return _this;
        }

        _createClass(Adapter, [{
          key: "render",
          value: function render() {
            return React.createElement(_configProvider.ConfigConsumer, null, this.renderComponent);
          }
        }]);

        return Adapter;
      }(React.Component)
    );
  };
}

var Basic =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Basic, _React$Component2);

  function Basic() {
    _classCallCheck(this, Basic);

    return _possibleConstructorReturn(this, _getPrototypeOf(Basic).apply(this, arguments));
  }

  _createClass(Basic, [{
    key: "render",
    value: function render() {
      var _a = this.props,
          prefixCls = _a.prefixCls,
          className = _a.className,
          children = _a.children,
          tagName = _a.tagName,
          others = __rest(_a, ["prefixCls", "className", "children", "tagName"]);

      var classString = (0, _classnames["default"])(className, prefixCls);
      return React.createElement(tagName, _extends({
        className: classString
      }, others), children);
    }
  }]);

  return Basic;
}(React.Component);

var BasicLayout =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(BasicLayout, _React$Component3);

  function BasicLayout() {
    var _this2;

    _classCallCheck(this, BasicLayout);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(BasicLayout).apply(this, arguments));
    _this2.state = {
      siders: []
    };
    return _this2;
  }

  _createClass(BasicLayout, [{
    key: "getSiderHook",
    value: function getSiderHook() {
      var _this3 = this;

      return {
        addSider: function addSider(id) {
          _this3.setState(function (state) {
            return {
              siders: [].concat(_toConsumableArray(state.siders), [id])
            };
          });
        },
        removeSider: function removeSider(id) {
          _this3.setState(function (state) {
            return {
              siders: state.siders.filter(function (currentId) {
                return currentId !== id;
              })
            };
          });
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
          prefixCls = _a.prefixCls,
          className = _a.className,
          children = _a.children,
          hasSider = _a.hasSider,
          Tag = _a.tagName,
          others = __rest(_a, ["prefixCls", "className", "children", "hasSider", "tagName"]);

      var classString = (0, _classnames["default"])(className, prefixCls, _defineProperty({}, "".concat(prefixCls, "-has-sider"), typeof hasSider === 'boolean' ? hasSider : this.state.siders.length > 0));
      return React.createElement(LayoutContext.Provider, {
        value: {
          siderHook: this.getSiderHook()
        }
      }, React.createElement(Tag, _extends({
        className: classString
      }, others), children));
    }
  }]);

  return BasicLayout;
}(React.Component);

var Layout = generator({
  suffixCls: 'layout',
  tagName: 'section'
})(BasicLayout);
var Header = generator({
  suffixCls: 'layout-header',
  tagName: 'header'
})(Basic);
var Footer = generator({
  suffixCls: 'layout-footer',
  tagName: 'footer'
})(Basic);
var Content = generator({
  suffixCls: 'layout-content',
  tagName: 'main'
})(Basic);
Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
var _default = Layout;
exports["default"] = _default;
//# sourceMappingURL=layout.js.map


/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _en_US = _interopRequireDefault(__webpack_require__(235));

var _en_US2 = _interopRequireDefault(__webpack_require__(236));

var _en_US3 = _interopRequireDefault(__webpack_require__(237));

var _en_US4 = _interopRequireDefault(__webpack_require__(582));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  locale: 'en',
  Pagination: _en_US["default"],
  DatePicker: _en_US2["default"],
  TimePicker: _en_US3["default"],
  Calendar: _en_US4["default"],
  global: {
    placeholder: 'Please select'
  },
  Table: {
    filterTitle: 'Filter menu',
    filterConfirm: 'OK',
    filterReset: 'Reset',
    selectAll: 'Select current page',
    selectInvert: 'Invert current page',
    sortTitle: 'Sort',
    expand: 'Expand row',
    collapse: 'Collapse row'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancel',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Cancel'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Search here',
    itemUnit: 'item',
    itemsUnit: 'items'
  },
  Upload: {
    uploading: 'Uploading...',
    removeFile: 'Remove file',
    uploadError: 'Upload error',
    previewFile: 'Preview file'
  },
  Empty: {
    description: 'No Data'
  },
  Icon: {
    icon: 'icon'
  },
  Text: {
    edit: 'edit',
    copy: 'copy',
    copied: 'copy success',
    expand: 'expand'
  },
  PageHeader: {
    back: 'back'
  }
};
exports["default"] = _default;
//# sourceMappingURL=default.js.map


/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = {
  // Options.jsx
  items_per_page: '/ page',
  jump_to: 'Goto',
  jump_to_confirm: 'confirm',
  page: '',

  // Pagination.jsx
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages'
};
module.exports = exports['default'];

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _en_US = _interopRequireDefault(__webpack_require__(581));

var _en_US2 = _interopRequireDefault(__webpack_require__(237));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// Merge into a locale object
var locale = {
  lang: _extends({
    placeholder: 'Select date',
    rangePlaceholder: ['Start date', 'End date']
  }, _en_US["default"]),
  timePickerLocale: _extends({}, _en_US2["default"])
}; // All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

var _default = locale;
exports["default"] = _default;
//# sourceMappingURL=en_US.js.map


/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var locale = {
  placeholder: 'Select time'
};
var _default = locale;
exports["default"] = _default;
//# sourceMappingURL=en_US.js.map


/***/ }),

/***/ 31:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(31);

__webpack_require__(634);
//# sourceMappingURL=css.js.map


/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(31);

__webpack_require__(636);
//# sourceMappingURL=css.js.map


/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _reactLifecyclesCompat = __webpack_require__(9);

var _rcTooltip = _interopRequireDefault(__webpack_require__(389));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _placements = _interopRequireDefault(__webpack_require__(667));

var _configProvider = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var splitObject = function splitObject(obj, keys) {
  var picked = {};

  var omitted = _extends({}, obj);

  keys.forEach(function (key) {
    if (obj && key in obj) {
      picked[key] = obj[key];
      delete omitted[key];
    }
  });
  return {
    picked: picked,
    omitted: omitted
  };
};

var Tooltip =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip(props) {
    var _this;

    _classCallCheck(this, Tooltip);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).call(this, props));

    _this.onVisibleChange = function (visible) {
      var onVisibleChange = _this.props.onVisibleChange;

      if (!('visible' in _this.props)) {
        _this.setState({
          visible: _this.isNoTitle() ? false : visible
        });
      }

      if (onVisibleChange && !_this.isNoTitle()) {
        onVisibleChange(visible);
      }
    }; // 动态设置动画点


    _this.onPopupAlign = function (domNode, align) {
      var placements = _this.getPlacements(); // 当前返回的位置


      var placement = Object.keys(placements).filter(function (key) {
        return placements[key].points[0] === align.points[0] && placements[key].points[1] === align.points[1];
      })[0];

      if (!placement) {
        return;
      } // 根据当前坐标设置动画点


      var rect = domNode.getBoundingClientRect();
      var transformOrigin = {
        top: '50%',
        left: '50%'
      };

      if (placement.indexOf('top') >= 0 || placement.indexOf('Bottom') >= 0) {
        transformOrigin.top = "".concat(rect.height - align.offset[1], "px");
      } else if (placement.indexOf('Top') >= 0 || placement.indexOf('bottom') >= 0) {
        transformOrigin.top = "".concat(-align.offset[1], "px");
      }

      if (placement.indexOf('left') >= 0 || placement.indexOf('Right') >= 0) {
        transformOrigin.left = "".concat(rect.width - align.offset[0], "px");
      } else if (placement.indexOf('right') >= 0 || placement.indexOf('Left') >= 0) {
        transformOrigin.left = "".concat(-align.offset[0], "px");
      }

      domNode.style.transformOrigin = "".concat(transformOrigin.left, " ").concat(transformOrigin.top);
    };

    _this.saveTooltip = function (node) {
      _this.tooltip = node;
    };

    _this.renderTooltip = function (_ref) {
      var getContextPopupContainer = _ref.getPopupContainer,
          getPrefixCls = _ref.getPrefixCls;

      var _assertThisInitialize = _assertThisInitialized(_this),
          props = _assertThisInitialize.props,
          state = _assertThisInitialize.state;

      var customizePrefixCls = props.prefixCls,
          title = props.title,
          overlay = props.overlay,
          openClassName = props.openClassName,
          getPopupContainer = props.getPopupContainer,
          getTooltipContainer = props.getTooltipContainer;
      var children = props.children;
      var prefixCls = getPrefixCls('tooltip', customizePrefixCls);
      var visible = state.visible; // Hide tooltip when there is no title

      if (!('visible' in props) && _this.isNoTitle()) {
        visible = false;
      }

      var child = _this.getDisabledCompatibleChildren(React.isValidElement(children) ? children : React.createElement("span", null, children));

      var childProps = child.props;
      var childCls = (0, _classnames["default"])(childProps.className, _defineProperty({}, openClassName || "".concat(prefixCls, "-open"), true));
      return React.createElement(_rcTooltip["default"], _extends({}, _this.props, {
        prefixCls: prefixCls,
        getTooltipContainer: getPopupContainer || getTooltipContainer || getContextPopupContainer,
        ref: _this.saveTooltip,
        builtinPlacements: _this.getPlacements(),
        overlay: overlay || title || '',
        visible: visible,
        onVisibleChange: _this.onVisibleChange,
        onPopupAlign: _this.onPopupAlign
      }), visible ? (0, React.cloneElement)(child, {
        className: childCls
      }) : child);
    };

    _this.state = {
      visible: !!props.visible || !!props.defaultVisible
    };
    return _this;
  }

  _createClass(Tooltip, [{
    key: "getPopupDomNode",
    value: function getPopupDomNode() {
      return this.tooltip.getPopupDomNode();
    }
  }, {
    key: "getPlacements",
    value: function getPlacements() {
      var _this$props = this.props,
          builtinPlacements = _this$props.builtinPlacements,
          arrowPointAtCenter = _this$props.arrowPointAtCenter,
          autoAdjustOverflow = _this$props.autoAdjustOverflow;
      return builtinPlacements || (0, _placements["default"])({
        arrowPointAtCenter: arrowPointAtCenter,
        verticalArrowShift: 8,
        autoAdjustOverflow: autoAdjustOverflow
      });
    } // Fix Tooltip won't hide at disabled button
    // mouse events don't trigger at disabled button in Chrome
    // https://github.com/react-component/tooltip/issues/18

  }, {
    key: "getDisabledCompatibleChildren",
    value: function getDisabledCompatibleChildren(element) {
      var elementType = element.type;

      if ((elementType.__ANT_BUTTON || elementType.__ANT_SWITCH || element.type === 'button') && element.props.disabled) {
        // Pick some layout related style properties up to span
        // Prevent layout bugs like https://github.com/ant-design/ant-design/issues/5254
        var _splitObject = splitObject(element.props.style, ['position', 'left', 'right', 'top', 'bottom', 'float', 'display', 'zIndex']),
            picked = _splitObject.picked,
            omitted = _splitObject.omitted;

        var spanStyle = _extends({
          display: 'inline-block'
        }, picked, {
          cursor: 'not-allowed',
          width: element.props.block ? '100%' : null
        });

        var buttonStyle = _extends({}, omitted, {
          pointerEvents: 'none'
        });

        var child = (0, React.cloneElement)(element, {
          style: buttonStyle,
          className: null
        });
        return React.createElement("span", {
          style: spanStyle,
          className: element.props.className
        }, child);
      }

      return element;
    }
  }, {
    key: "isNoTitle",
    value: function isNoTitle() {
      var _this$props2 = this.props,
          title = _this$props2.title,
          overlay = _this$props2.overlay;
      return !title && !overlay; // overlay for old version compatibility
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderTooltip);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('visible' in nextProps) {
        return {
          visible: nextProps.visible
        };
      }

      return null;
    }
  }]);

  return Tooltip;
}(React.Component);

Tooltip.defaultProps = {
  placement: 'top',
  transitionName: 'zoom-big-fast',
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  arrowPointAtCenter: false,
  autoAdjustOverflow: true
};
(0, _reactLifecyclesCompat.polyfill)(Tooltip);
var _default = Tooltip;
exports["default"] = _default;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = wrapperRaf;

var _raf = _interopRequireDefault(__webpack_require__(27));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var id = 0;
var ids = {}; // Support call raf with delay specified frame

function wrapperRaf(callback) {
  var delayFrames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var myId = id++;
  var restFrames = delayFrames;

  function internalCallback() {
    restFrames -= 1;

    if (restFrames <= 0) {
      callback();
      delete ids[myId];
    } else {
      ids[myId] = (0, _raf["default"])(internalCallback);
    }
  }

  ids[myId] = (0, _raf["default"])(internalCallback);
  return myId;
}

wrapperRaf.cancel = function (pid) {
  if (pid === undefined) return;

  _raf["default"].cancel(ids[pid]);

  delete ids[pid];
};

wrapperRaf.ids = ids; // export this for test usage
//# sourceMappingURL=raf.js.map


/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var PropTypes = _interopRequireWildcard(__webpack_require__(2));

var _rcSelect = _interopRequireWildcard(__webpack_require__(157));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _configProvider = __webpack_require__(21);

var _omit = _interopRequireDefault(__webpack_require__(14));

var _warning = _interopRequireDefault(__webpack_require__(63));

var _icon = _interopRequireDefault(__webpack_require__(40));

var _type = __webpack_require__(92);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var SelectSizes = (0, _type.tuple)('default', 'large', 'small');
var SelectPropTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(SelectSizes),
  notFoundContent: PropTypes.any,
  showSearch: PropTypes.bool,
  optionLabelProp: PropTypes.string,
  transitionName: PropTypes.string,
  choiceTransitionName: PropTypes.string,
  id: PropTypes.string
}; // => It is needless to export the declaration of below two inner components.
// export { Option, OptGroup };

var Select =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this, props));

    _this.saveSelect = function (node) {
      _this.rcSelect = node;
    };

    _this.renderSelect = function (_ref) {
      var _classNames;

      var getContextPopupContainer = _ref.getPopupContainer,
          getPrefixCls = _ref.getPrefixCls,
          renderEmpty = _ref.renderEmpty;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          _a$className = _a.className,
          className = _a$className === void 0 ? '' : _a$className,
          size = _a.size,
          mode = _a.mode,
          getPopupContainer = _a.getPopupContainer,
          removeIcon = _a.removeIcon,
          clearIcon = _a.clearIcon,
          menuItemSelectedIcon = _a.menuItemSelectedIcon,
          showArrow = _a.showArrow,
          restProps = __rest(_a, ["prefixCls", "className", "size", "mode", "getPopupContainer", "removeIcon", "clearIcon", "menuItemSelectedIcon", "showArrow"]);

      var rest = (0, _omit["default"])(restProps, ['inputIcon']);
      var prefixCls = getPrefixCls('select', customizePrefixCls);
      var cls = (0, _classnames["default"])((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), _defineProperty(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), _defineProperty(_classNames, "".concat(prefixCls, "-show-arrow"), showArrow), _classNames), className);
      var optionLabelProp = _this.props.optionLabelProp;

      if (_this.isCombobox()) {
        // children 带 dom 结构时，无法填入输入框
        optionLabelProp = optionLabelProp || 'value';
      }

      var modeConfig = {
        multiple: mode === 'multiple',
        tags: mode === 'tags',
        combobox: _this.isCombobox()
      };
      var finalRemoveIcon = removeIcon && (React.isValidElement(removeIcon) ? React.cloneElement(removeIcon, {
        className: (0, _classnames["default"])(removeIcon.props.className, "".concat(prefixCls, "-remove-icon"))
      }) : removeIcon) || React.createElement(_icon["default"], {
        type: "close",
        className: "".concat(prefixCls, "-remove-icon")
      });
      var finalClearIcon = clearIcon && (React.isValidElement(clearIcon) ? React.cloneElement(clearIcon, {
        className: (0, _classnames["default"])(clearIcon.props.className, "".concat(prefixCls, "-clear-icon"))
      }) : clearIcon) || React.createElement(_icon["default"], {
        type: "close-circle",
        theme: "filled",
        className: "".concat(prefixCls, "-clear-icon")
      });
      var finalMenuItemSelectedIcon = menuItemSelectedIcon && (React.isValidElement(menuItemSelectedIcon) ? React.cloneElement(menuItemSelectedIcon, {
        className: (0, _classnames["default"])(menuItemSelectedIcon.props.className, "".concat(prefixCls, "-selected-icon"))
      }) : menuItemSelectedIcon) || React.createElement(_icon["default"], {
        type: "check",
        className: "".concat(prefixCls, "-selected-icon")
      });
      return React.createElement(_rcSelect["default"], _extends({
        inputIcon: _this.renderSuffixIcon(prefixCls),
        removeIcon: finalRemoveIcon,
        clearIcon: finalClearIcon,
        menuItemSelectedIcon: finalMenuItemSelectedIcon,
        showArrow: showArrow
      }, rest, modeConfig, {
        prefixCls: prefixCls,
        className: cls,
        optionLabelProp: optionLabelProp || 'children',
        notFoundContent: _this.getNotFoundContent(renderEmpty),
        getPopupContainer: getPopupContainer || getContextPopupContainer,
        ref: _this.saveSelect
      }));
    };

    (0, _warning["default"])(props.mode !== 'combobox', 'Select', 'The combobox mode is deprecated, ' + 'it will be removed in next major version, ' + 'please use AutoComplete instead');
    return _this;
  }

  _createClass(Select, [{
    key: "focus",
    value: function focus() {
      this.rcSelect.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.rcSelect.blur();
    }
  }, {
    key: "getNotFoundContent",
    value: function getNotFoundContent(renderEmpty) {
      var notFoundContent = this.props.notFoundContent;

      if (notFoundContent !== undefined) {
        return notFoundContent;
      }

      if (this.isCombobox()) {
        return null;
      }

      return renderEmpty('Select'); // if (this.isCombobox()) {
      //   // AutoComplete don't have notFoundContent defaultly
      //   return notFoundContent === undefined ? null : notFoundContent;
      // }
      // return renderEmpty('Select');
      // // return notFoundContent === undefined ? locale.notFoundContent : notFoundContent;
    }
  }, {
    key: "isCombobox",
    value: function isCombobox() {
      var mode = this.props.mode;
      return mode === 'combobox' || mode === Select.SECRET_COMBOBOX_MODE_DO_NOT_USE;
    }
  }, {
    key: "renderSuffixIcon",
    value: function renderSuffixIcon(prefixCls) {
      var _this$props = this.props,
          loading = _this$props.loading,
          suffixIcon = _this$props.suffixIcon;

      if (suffixIcon) {
        return React.isValidElement(suffixIcon) ? React.cloneElement(suffixIcon, {
          className: (0, _classnames["default"])(suffixIcon.props.className, "".concat(prefixCls, "-arrow-icon"))
        }) : suffixIcon;
      }

      if (loading) {
        return React.createElement(_icon["default"], {
          type: "loading"
        });
      }

      return React.createElement(_icon["default"], {
        type: "down",
        className: "".concat(prefixCls, "-arrow-icon")
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderSelect);
    }
  }]);

  return Select;
}(React.Component);

exports["default"] = Select;
Select.Option = _rcSelect.Option;
Select.OptGroup = _rcSelect.OptGroup;
Select.SECRET_COMBOBOX_MODE_DO_NOT_USE = 'SECRET_COMBOBOX_MODE_DO_NOT_USE';
Select.defaultProps = {
  showSearch: false,
  transitionName: 'slide-up',
  choiceTransitionName: 'zoom'
};
Select.propTypes = SelectPropTypes;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Row", {
  enumerable: true,
  get: function get() {
    return _row["default"];
  }
});
Object.defineProperty(exports, "Col", {
  enumerable: true,
  get: function get() {
    return _col["default"];
  }
});

var _row = _interopRequireDefault(__webpack_require__(704));

var _col = _interopRequireDefault(__webpack_require__(709));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var allIcons = _interopRequireWildcard(__webpack_require__(370));

var _iconsReact = _interopRequireDefault(__webpack_require__(109));

var _IconFont = _interopRequireDefault(__webpack_require__(630));

var _utils = __webpack_require__(631);

var _warning = _interopRequireDefault(__webpack_require__(63));

var _LocaleReceiver = _interopRequireDefault(__webpack_require__(104));

var _twoTonePrimaryColor = __webpack_require__(632);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

// Initial setting
_iconsReact["default"].add.apply(_iconsReact["default"], _toConsumableArray(Object.keys(allIcons).map(function (key) {
  return allIcons[key];
})));

(0, _twoTonePrimaryColor.setTwoToneColor)('#1890ff');
var defaultTheme = 'outlined';
var dangerousTheme = undefined;

var Icon = function Icon(props) {
  var _classNames;

  var className = props.className,
      type = props.type,
      Component = props.component,
      viewBox = props.viewBox,
      spin = props.spin,
      rotate = props.rotate,
      tabIndex = props.tabIndex,
      onClick = props.onClick,
      children = props.children,
      theme = props.theme,
      twoToneColor = props.twoToneColor,
      restProps = __rest(props, ["className", "type", "component", "viewBox", "spin", "rotate", "tabIndex", "onClick", "children", "theme", "twoToneColor"]);

  (0, _warning["default"])(Boolean(type || Component || children), 'Icon', 'Should have `type` prop or `component` prop or `children`.');
  var classString = (0, _classnames["default"])((_classNames = {}, _defineProperty(_classNames, "anticon", true), _defineProperty(_classNames, "anticon-".concat(type), Boolean(type)), _classNames), className);
  var svgClassString = (0, _classnames["default"])(_defineProperty({}, "anticon-spin", !!spin || type === 'loading'));
  var innerNode;
  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;

  var innerSvgProps = _extends({}, _utils.svgBaseProps, {
    className: svgClassString,
    style: svgStyle,
    viewBox: viewBox
  });

  if (!viewBox) {
    delete innerSvgProps.viewBox;
  } // component > children > type


  if (Component) {
    innerNode = React.createElement(Component, innerSvgProps, children);
  }

  if (children) {
    (0, _warning["default"])(Boolean(viewBox) || React.Children.count(children) === 1 && React.isValidElement(children) && React.Children.only(children).type === 'use', 'Icon', 'Make sure that you provide correct `viewBox`' + ' prop (default `0 0 1024 1024`) to the icon.');
    innerNode = React.createElement("svg", _extends({}, innerSvgProps, {
      viewBox: viewBox
    }), children);
  }

  if (typeof type === 'string') {
    var computedType = type;

    if (theme) {
      var themeInName = (0, _utils.getThemeFromTypeName)(type);
      (0, _warning["default"])(!themeInName || theme === themeInName, 'Icon', "The icon name '".concat(type, "' already specify a theme '").concat(themeInName, "',") + " the 'theme' prop '".concat(theme, "' will be ignored."));
    }

    computedType = (0, _utils.withThemeSuffix)((0, _utils.removeTypeTheme)((0, _utils.alias)(computedType)), dangerousTheme || theme || defaultTheme);
    innerNode = React.createElement(_iconsReact["default"], {
      className: svgClassString,
      type: computedType,
      primaryColor: twoToneColor,
      style: svgStyle
    });
  }

  var iconTabIndex = tabIndex;

  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  return React.createElement(_LocaleReceiver["default"], {
    componentName: "Icon"
  }, function (locale) {
    return React.createElement("i", _extends({
      "aria-label": type && "".concat(locale.icon, ": ").concat(type)
    }, restProps, {
      tabIndex: iconTabIndex,
      onClick: onClick,
      className: classString
    }), innerNode);
  });
};

function unstable_ChangeThemeOfIconsDangerously(theme) {
  (0, _warning["default"])(false, 'Icon', "You are using the unstable method 'Icon.unstable_ChangeThemeOfAllIconsDangerously', " + "make sure that all the icons with theme '".concat(theme, "' display correctly."));
  dangerousTheme = theme;
}

function unstable_ChangeDefaultThemeOfIcons(theme) {
  (0, _warning["default"])(false, 'Icon', "You are using the unstable method 'Icon.unstable_ChangeDefaultThemeOfIcons', " + "make sure that all the icons with theme '".concat(theme, "' display correctly."));
  defaultTheme = theme;
}

Icon.createFromIconfontCN = _IconFont["default"];
Icon.getTwoToneColor = _twoTonePrimaryColor.getTwoToneColor;
Icon.setTwoToneColor = _twoTonePrimaryColor.setTwoToneColor;
var _default = Icon;
exports["default"] = _default;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _createReactContext = _interopRequireDefault(__webpack_require__(30));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RowContext = (0, _createReactContext["default"])({});
var _default = RowContext;
exports["default"] = _default;
//# sourceMappingURL=RowContext.js.map


/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _button = _interopRequireDefault(__webpack_require__(712));

var _buttonGroup = _interopRequireDefault(__webpack_require__(715));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_button["default"].Group = _buttonGroup["default"];
var _default = _button["default"];
exports["default"] = _default;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(31);

__webpack_require__(725);
//# sourceMappingURL=css.js.map


/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(31);

__webpack_require__(734);
//# sourceMappingURL=css.js.map


/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _router = __webpack_require__(565);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_router2.default, null), document.getElementById('app'));

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(134);

var _Home = __webpack_require__(576);

var _Home2 = _interopRequireDefault(_Home);

var _TodoList = __webpack_require__(687);

var _TodoList2 = _interopRequireDefault(_TodoList);

var _NotFound = __webpack_require__(737);

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Login from './view/Login';


var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _react2.default.createElement(_reactRouterDom.Redirect, { from: '/', to: '/Home', exact: true }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/Home', exact: true, component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/ReduxDemo/TodoList', exact: true, component: _TodoList2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '*', component: _NotFound2.default })
        )
      );
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;

/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(231);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _App2.default,
        null,
        '\u6211\u662F\u9996\u9875\u554A'
      );
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;

/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _empty = _interopRequireDefault(__webpack_require__(579));

var _ = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var renderEmpty = function renderEmpty(componentName) {
  return React.createElement(_.ConfigConsumer, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;
    var prefix = getPrefixCls('empty');

    switch (componentName) {
      case 'Table':
      case 'List':
        return React.createElement(_empty["default"], {
          image: _empty["default"].PRESENTED_IMAGE_SIMPLE
        });

      case 'Select':
      case 'TreeSelect':
      case 'Cascader':
      case 'Transfer':
      case 'Mentions':
        return React.createElement(_empty["default"], {
          image: _empty["default"].PRESENTED_IMAGE_SIMPLE,
          className: "".concat(prefix, "-small")
        });

      default:
        return React.createElement(_empty["default"], null);
    }
  });
};

var _default = renderEmpty;
exports["default"] = _default;
//# sourceMappingURL=renderEmpty.js.map


/***/ }),

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _configProvider = __webpack_require__(21);

var _LocaleReceiver = _interopRequireDefault(__webpack_require__(104));

var _empty = _interopRequireDefault(__webpack_require__(583));

var _simple = _interopRequireDefault(__webpack_require__(584));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var defaultEmptyImg = React.createElement(_empty["default"], null);
var simpleEmptyImg = React.createElement(_simple["default"], null);

var Empty = function Empty(props) {
  return React.createElement(_configProvider.ConfigConsumer, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;

    var className = props.className,
        customizePrefixCls = props.prefixCls,
        _props$image = props.image,
        image = _props$image === void 0 ? defaultEmptyImg : _props$image,
        description = props.description,
        children = props.children,
        imageStyle = props.imageStyle,
        restProps = __rest(props, ["className", "prefixCls", "image", "description", "children", "imageStyle"]);

    return React.createElement(_LocaleReceiver["default"], {
      componentName: "Empty"
    }, function (locale) {
      var prefixCls = getPrefixCls('empty', customizePrefixCls);
      var des = typeof description !== 'undefined' ? description : locale.description;
      var alt = typeof des === 'string' ? des : 'empty';
      var imageNode = null;

      if (typeof image === 'string') {
        imageNode = React.createElement("img", {
          alt: alt,
          src: image
        });
      } else {
        imageNode = image;
      }

      return React.createElement("div", _extends({
        className: (0, _classnames["default"])(prefixCls, _defineProperty({}, "".concat(prefixCls, "-normal"), image === simpleEmptyImg), className)
      }, restProps), React.createElement("div", {
        className: "".concat(prefixCls, "-image"),
        style: imageStyle
      }, imageNode), des && React.createElement("p", {
        className: "".concat(prefixCls, "-description")
      }, des), children && React.createElement("div", {
        className: "".concat(prefixCls, "-footer")
      }, children));
    });
  });
};

Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
var _default = Empty;
exports["default"] = _default;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default2 = _interopRequireDefault(__webpack_require__(234));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _default2["default"];
exports["default"] = _default;
//# sourceMappingURL=default.js.map


/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'Ok',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'select time',
  dateSelect: 'select date',
  weekSelect: 'Choose a week',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century'
};
module.exports = exports['default'];

/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _en_US = _interopRequireDefault(__webpack_require__(236));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _en_US["default"];
exports["default"] = _default;
//# sourceMappingURL=en_US.js.map


/***/ }),

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var _default = function _default() {
  return React.createElement("svg", {
    width: "184",
    height: "152",
    viewBox: "0 0 184 152",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("g", {
    transform: "translate(24 31.67)"
  }, React.createElement("ellipse", {
    fillOpacity: ".8",
    fill: "#F5F5F7",
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }), React.createElement("path", {
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
    fill: "#AEB8C2"
  }), React.createElement("path", {
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    fill: "url(#linearGradient-1)",
    transform: "translate(13.56)"
  }), React.createElement("path", {
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
    fill: "#F5F5F7"
  }), React.createElement("path", {
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
    fill: "#DCE0E6"
  })), React.createElement("path", {
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
    fill: "#DCE0E6"
  }), React.createElement("g", {
    transform: "translate(149.65 15.383)",
    fill: "#FFF"
  }, React.createElement("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }), React.createElement("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }))));
};

exports["default"] = _default;
//# sourceMappingURL=empty.js.map


/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var _default = function _default() {
  return React.createElement("svg", {
    width: "64",
    height: "41",
    viewBox: "0 0 64 41",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    transform: "translate(0 1)",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("ellipse", {
    fill: "#F5F5F5",
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }), React.createElement("g", {
    fillRule: "nonzero",
    stroke: "#D9D9D9"
  }, React.createElement("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }), React.createElement("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    fill: "#FAFAFA"
  }))));
};

exports["default"] = _default;
//# sourceMappingURL=simple.js.map


/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ANT_MARK = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var PropTypes = _interopRequireWildcard(__webpack_require__(2));

var moment = _interopRequireWildcard(__webpack_require__(3));

var _interopDefault = _interopRequireDefault(__webpack_require__(587));

var _locale = __webpack_require__(588);

var _warning = _interopRequireDefault(__webpack_require__(63));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ANT_MARK = 'internalMark';
exports.ANT_MARK = ANT_MARK;

function setMomentLocale(locale) {
  if (locale && locale.locale) {
    (0, _interopDefault["default"])(moment).locale(locale.locale);
  } else {
    (0, _interopDefault["default"])(moment).locale('en');
  }
}

var LocaleProvider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LocaleProvider, _React$Component);

  function LocaleProvider(props) {
    var _this;

    _classCallCheck(this, LocaleProvider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LocaleProvider).call(this, props));
    setMomentLocale(props.locale);
    (0, _locale.changeConfirmLocale)(props.locale && props.locale.Modal);
    (0, _warning["default"])(props._ANT_MARK__ === ANT_MARK, 'LocaleProvider', '`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale');
    return _this;
  }

  _createClass(LocaleProvider, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        antLocale: _extends({}, this.props.locale, {
          exist: true
        })
      };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var locale = this.props.locale;

      if (prevProps.locale !== locale) {
        setMomentLocale(locale);
      }

      (0, _locale.changeConfirmLocale)(locale && locale.Modal);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _locale.changeConfirmLocale)();
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return LocaleProvider;
}(React.Component);

exports["default"] = LocaleProvider;
LocaleProvider.propTypes = {
  locale: PropTypes.object
};
LocaleProvider.defaultProps = {
  locale: {}
};
LocaleProvider.childContextTypes = {
  antLocale: PropTypes.object
};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = interopDefault;

// https://github.com/moment/moment/issues/3650
// since we are using ts 3.5.1, it should be safe to remove.
function interopDefault(m) {
  return m["default"] || m;
}
//# sourceMappingURL=interopDefault.js.map


/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeConfirmLocale = changeConfirmLocale;
exports.getConfirmLocale = getConfirmLocale;

var _default = _interopRequireDefault(__webpack_require__(234));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var runtimeLocale = _extends({}, _default["default"].Modal);

function changeConfirmLocale(newLocale) {
  if (newLocale) {
    runtimeLocale = _extends({}, runtimeLocale, newLocale);
  } else {
    runtimeLocale = _extends({}, _default["default"].Modal);
  }
}

function getConfirmLocale() {
  return runtimeLocale;
}
//# sourceMappingURL=locale.js.map


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetWarned = resetWarned;
exports["default"] = void 0;

var _warning = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var warned = {};

function resetWarned() {
  warned = {};
}

var _default = function _default(valid, component, message) {
  if (!valid && !warned[message]) {
    (0, _warning["default"])(false, "[antd: ".concat(component, "] ").concat(message));
    warned[message] = true;
  }
};

exports["default"] = _default;
//# sourceMappingURL=warning.js.map


/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = create;

var _index = _interopRequireDefault(__webpack_require__(40));

var React = _interopRequireWildcard(__webpack_require__(0));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var customCache = new Set();

function create() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var scriptUrl = options.scriptUrl,
      _options$extraCommonP = options.extraCommonProps,
      extraCommonProps = _options$extraCommonP === void 0 ? {} : _options$extraCommonP;
  /**
   * DOM API required.
   * Make sure in browser environment.
   * The Custom Icon will create a <script/>
   * that loads SVG symbols and insert the SVG Element into the document body.
   */

  if (typeof document !== 'undefined' && typeof window !== 'undefined' && typeof document.createElement === 'function' && typeof scriptUrl === 'string' && scriptUrl.length && !customCache.has(scriptUrl)) {
    var script = document.createElement('script');
    script.setAttribute('src', scriptUrl);
    script.setAttribute('data-namespace', scriptUrl);
    customCache.add(scriptUrl);
    document.body.appendChild(script);
  }

  var Iconfont = function Iconfont(props) {
    var type = props.type,
        children = props.children,
        restProps = __rest(props, ["type", "children"]); // component > children > type


    var content = null;

    if (props.type) {
      content = React.createElement("use", {
        xlinkHref: "#".concat(type)
      });
    }

    if (children) {
      content = children;
    }

    return React.createElement(_index["default"], _extends({}, restProps, extraCommonProps), content);
  };

  Iconfont.displayName = 'Iconfont';
  return Iconfont;
}
//# sourceMappingURL=IconFont.js.map


/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getThemeFromTypeName = getThemeFromTypeName;
exports.removeTypeTheme = removeTypeTheme;
exports.withThemeSuffix = withThemeSuffix;
exports.alias = alias;
exports.svgBaseProps = void 0;

var _warning = _interopRequireDefault(__webpack_require__(63));

var _svgBaseProps;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// These props make sure that the SVG behaviours like general text.
// Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
var svgBaseProps = (_svgBaseProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor'
}, _defineProperty(_svgBaseProps, 'aria-hidden', true), _defineProperty(_svgBaseProps, "focusable", 'false'), _svgBaseProps);
exports.svgBaseProps = svgBaseProps;
var fillTester = /-fill$/;
var outlineTester = /-o$/;
var twoToneTester = /-twotone$/;

function getThemeFromTypeName(type) {
  var result = null;

  if (fillTester.test(type)) {
    result = 'filled';
  } else if (outlineTester.test(type)) {
    result = 'outlined';
  } else if (twoToneTester.test(type)) {
    result = 'twoTone';
  }

  return result;
}

function removeTypeTheme(type) {
  return type.replace(fillTester, '').replace(outlineTester, '').replace(twoToneTester, '');
}

function withThemeSuffix(type, theme) {
  var result = type;

  if (theme === 'filled') {
    result += '-fill';
  } else if (theme === 'outlined') {
    result += '-o';
  } else if (theme === 'twoTone') {
    result += '-twotone';
  } else {
    (0, _warning["default"])(false, 'Icon', "This icon '".concat(type, "' has unknown theme '").concat(theme, "'"));
  }

  return result;
} // For alias or compatibility


function alias(type) {
  var newType = type;

  switch (type) {
    case 'cross':
      newType = 'close';
      break;
    // https://github.com/ant-design/ant-design/issues/13007

    case 'interation':
      newType = 'interaction';
      break;
    // https://github.com/ant-design/ant-design/issues/16810

    case 'canlendar':
      newType = 'calendar';
      break;
    // https://github.com/ant-design/ant-design/issues/17448

    case 'colum-height':
      newType = 'column-height';
      break;

    default:
  }

  (0, _warning["default"])(newType === type, 'Icon', "Icon '".concat(type, "' was a typo and is now deprecated, please use '").concat(newType, "' instead."));
  return newType;
}
//# sourceMappingURL=utils.js.map


/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTwoToneColor = setTwoToneColor;
exports.getTwoToneColor = getTwoToneColor;

var _iconsReact = _interopRequireDefault(__webpack_require__(109));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function setTwoToneColor(primaryColor) {
  return _iconsReact["default"].setTwoToneColors({
    primaryColor: primaryColor
  });
}

function getTwoToneColor() {
  var colors = _iconsReact["default"].getTwoToneColors();

  return colors.primaryColor;
}
//# sourceMappingURL=twoTonePrimaryColor.js.map


/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var isNumeric = function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

var _default = isNumeric;
exports["default"] = _default;
//# sourceMappingURL=isNumeric.js.map


/***/ }),

/***/ 634:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = __webpack_require__(40);

var _icon2 = _interopRequireDefault(_icon);

var _layout = __webpack_require__(232);

var _layout2 = _interopRequireDefault(_layout);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(378);

__webpack_require__(377);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Menu = __webpack_require__(637);

var _Menu2 = _interopRequireDefault(_Menu);

var _index = __webpack_require__(677);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sider = _layout2.default.Sider;

var AppSider = function (_Component) {
  _inherits(AppSider, _Component);

  function AppSider(props) {
    _classCallCheck(this, AppSider);

    var _this = _possibleConstructorReturn(this, (AppSider.__proto__ || Object.getPrototypeOf(AppSider)).call(this, props));

    _this.toggle = function () {
      _this.setState({
        collapsed: !_this.state.collapsed
      });
    };

    _this.state = {
      collapsed: false
    };
    return _this;
  }

  _createClass(AppSider, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        Sider,
        { trigger: null, collapsible: true, collapsed: this.state.collapsed, className: _index2.default.sider },
        _react2.default.createElement(
          'div',
          { className: _index2.default.siderTop },
          !this.state.collapsed && _react2.default.createElement('img', {
            src: 'http://5b0988e595225.cdn.sohucs.com/images/20171231/629cec9d19eb4c729847ae4ed34194bc.jpeg',
            alt: 'logo',
            className: _index2.default.logo
          }),
          _react2.default.createElement(_icon2.default, {
            className: _index2.default.trigger,
            type: this.state.collapsed ? 'menu-unfold' : 'menu-fold',
            onClick: this.toggle
          })
        ),
        _react2.default.createElement(_Menu2.default, null)
      );
    }
  }]);

  return AppSider;
}(_react.Component);

exports.default = AppSider;

/***/ }),

/***/ 636:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu = __webpack_require__(638);

var _menu2 = _interopRequireDefault(_menu);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(671);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(134);

var _data = __webpack_require__(675);

var _data2 = _interopRequireDefault(_data);

var _index = __webpack_require__(676);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubMenu = _menu2.default.SubMenu,
    MenuItem = _menu2.default.Item;


var sort = function sort(a, b) {
  return a.sort - b.sort;
}; // 升序排序

var AppMenu = function (_Component) {
  _inherits(AppMenu, _Component);

  function AppMenu() {
    _classCallCheck(this, AppMenu);

    return _possibleConstructorReturn(this, (AppMenu.__proto__ || Object.getPrototypeOf(AppMenu)).apply(this, arguments));
  }

  _createClass(AppMenu, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _index2.default.menuList },
        _react2.default.createElement(
          _menu2.default,
          {
            defaultSelectedKeys: ['1']
            // defaultOpenKeys={['sub1']}
            , mode: 'inline',
            theme: 'dark'
          },
          _data2.default.data.sort(sort).map(function (item) {
            if (item.childList.length > 0) {
              return _react2.default.createElement(
                SubMenu,
                { title: item.name, key: item.id },
                item.childList.sort(sort).map(function (subItem) {
                  return _react2.default.createElement(
                    MenuItem,
                    { title: subItem.name, key: subItem.id },
                    _react2.default.createElement(
                      _reactRouterDom.Link,
                      { to: subItem.path },
                      subItem.name
                    )
                  );
                })
              );
            }
            return _react2.default.createElement(
              MenuItem,
              { title: item.name, key: item.id },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: item.path },
                item.name
              )
            );
          })
        )
      );
    }
  }]);

  return AppMenu;
}(_react.Component);

exports.default = AppMenu;

/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _rcMenu = _interopRequireWildcard(__webpack_require__(45));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _omit = _interopRequireDefault(__webpack_require__(14));

var _SubMenu = _interopRequireDefault(__webpack_require__(663));

var _MenuItem = _interopRequireDefault(__webpack_require__(664));

var _configProvider = __webpack_require__(21);

var _openAnimation = _interopRequireDefault(__webpack_require__(669));

var _warning = _interopRequireDefault(__webpack_require__(63));

var _reactLifecyclesCompat = __webpack_require__(9);

var _Sider = __webpack_require__(138);

var _raf = _interopRequireDefault(__webpack_require__(391));

var _MenuContext = _interopRequireDefault(__webpack_require__(156));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var InternalMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InternalMenu, _React$Component);

  function InternalMenu(props) {
    var _this;

    _classCallCheck(this, InternalMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InternalMenu).call(this, props)); // Restore vertical mode when menu is collapsed responsively when mounted
    // https://github.com/ant-design/ant-design/issues/13104
    // TODO: not a perfect solution, looking a new way to avoid setting switchingModeFromInline in this situation

    _this.handleMouseEnter = function (e) {
      _this.restoreModeVerticalFromInline();

      var onMouseEnter = _this.props.onMouseEnter;

      if (onMouseEnter) {
        onMouseEnter(e);
      }
    };

    _this.handleTransitionEnd = function (e) {
      // when inlineCollapsed menu width animation finished
      // https://github.com/ant-design/ant-design/issues/12864
      var widthCollapsed = e.propertyName === 'width' && e.target === e.currentTarget; // Fix SVGElement e.target.className.indexOf is not a function
      // https://github.com/ant-design/ant-design/issues/15699

      var className = e.target.className; // SVGAnimatedString.animVal should be identical to SVGAnimatedString.baseVal, unless during an animation.

      var classNameValue = Object.prototype.toString.call(className) === '[object SVGAnimatedString]' ? className.animVal : className; // Fix for <Menu style={{ width: '100%' }} />, the width transition won't trigger when menu is collapsed
      // https://github.com/ant-design/ant-design-pro/issues/2783

      var iconScaled = e.propertyName === 'font-size' && classNameValue.indexOf('anticon') >= 0;

      if (widthCollapsed || iconScaled) {
        _this.restoreModeVerticalFromInline();
      }
    };

    _this.handleClick = function (e) {
      _this.handleOpenChange([]);

      var onClick = _this.props.onClick;

      if (onClick) {
        onClick(e);
      }
    };

    _this.handleOpenChange = function (openKeys) {
      _this.setOpenKeys(openKeys);

      var onOpenChange = _this.props.onOpenChange;

      if (onOpenChange) {
        onOpenChange(openKeys);
      }
    };

    _this.renderMenu = function (_ref) {
      var getPopupContainer = _ref.getPopupContainer,
          getPrefixCls = _ref.getPrefixCls;
      var mounted = _this.state.mounted;
      var _this$props = _this.props,
          customizePrefixCls = _this$props.prefixCls,
          className = _this$props.className,
          theme = _this$props.theme,
          collapsedWidth = _this$props.collapsedWidth;
      var passProps = (0, _omit["default"])(_this.props, ['collapsedWidth', 'siderCollapsed']);

      var menuMode = _this.getRealMenuMode();

      var menuOpenAnimation = _this.getMenuOpenAnimation(menuMode);

      var prefixCls = getPrefixCls('menu', customizePrefixCls);
      var menuClassName = (0, _classnames["default"])(className, "".concat(prefixCls, "-").concat(theme), _defineProperty({}, "".concat(prefixCls, "-inline-collapsed"), _this.getInlineCollapsed()));
      var menuProps = {
        openKeys: _this.state.openKeys,
        onOpenChange: _this.handleOpenChange,
        className: menuClassName,
        mode: menuMode
      };

      if (menuMode !== 'inline') {
        // closing vertical popup submenu after click it
        menuProps.onClick = _this.handleClick;
        menuProps.openTransitionName = mounted ? menuOpenAnimation : '';
      } else {
        menuProps.openAnimation = mounted ? menuOpenAnimation : {};
      } // https://github.com/ant-design/ant-design/issues/8587


      if (_this.getInlineCollapsed() && (collapsedWidth === 0 || collapsedWidth === '0' || collapsedWidth === '0px')) {
        return null;
      }

      return React.createElement(_rcMenu["default"], _extends({
        getPopupContainer: getPopupContainer
      }, passProps, menuProps, {
        prefixCls: prefixCls,
        onTransitionEnd: _this.handleTransitionEnd,
        onMouseEnter: _this.handleMouseEnter
      }));
    };

    (0, _warning["default"])(!('onOpen' in props || 'onClose' in props), 'Menu', '`onOpen` and `onClose` are removed, please use `onOpenChange` instead, ' + 'see: https://u.ant.design/menu-on-open-change.');
    (0, _warning["default"])(!('inlineCollapsed' in props && props.mode !== 'inline'), 'Menu', '`inlineCollapsed` should only be used when `mode` is inline.');
    (0, _warning["default"])(!(props.siderCollapsed !== undefined && 'inlineCollapsed' in props), 'Menu', '`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.');
    var openKeys;

    if ('openKeys' in props) {
      openKeys = props.openKeys;
    } else if ('defaultOpenKeys' in props) {
      openKeys = props.defaultOpenKeys;
    }

    _this.state = {
      openKeys: openKeys || [],
      switchingModeFromInline: false,
      inlineOpenKeys: [],
      prevProps: props,
      mounted: false
    };
    return _this;
  }

  _createClass(InternalMenu, [{
    key: "componentDidMount",
    // [Legacy] Origin code can render full defaultOpenKeys is caused by `rc-animate` bug.
    // We have to workaround this to prevent animation on first render.
    // https://github.com/ant-design/ant-design/issues/15966
    value: function componentDidMount() {
      var _this2 = this;

      this.mountRafId = (0, _raf["default"])(function () {
        _this2.setState({
          mounted: true
        });
      }, 10);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _raf["default"].cancel(this.mountRafId);
    }
  }, {
    key: "restoreModeVerticalFromInline",
    value: function restoreModeVerticalFromInline() {
      var switchingModeFromInline = this.state.switchingModeFromInline;

      if (switchingModeFromInline) {
        this.setState({
          switchingModeFromInline: false
        });
      }
    }
  }, {
    key: "setOpenKeys",
    value: function setOpenKeys(openKeys) {
      if (!('openKeys' in this.props)) {
        this.setState({
          openKeys: openKeys
        });
      }
    }
  }, {
    key: "getRealMenuMode",
    value: function getRealMenuMode() {
      var inlineCollapsed = this.getInlineCollapsed();

      if (this.state.switchingModeFromInline && inlineCollapsed) {
        return 'inline';
      }

      var mode = this.props.mode;
      return inlineCollapsed ? 'vertical' : mode;
    }
  }, {
    key: "getInlineCollapsed",
    value: function getInlineCollapsed() {
      var inlineCollapsed = this.props.inlineCollapsed;

      if (this.props.siderCollapsed !== undefined) {
        return this.props.siderCollapsed;
      }

      return inlineCollapsed;
    }
  }, {
    key: "getMenuOpenAnimation",
    value: function getMenuOpenAnimation(menuMode) {
      var _this$props2 = this.props,
          openAnimation = _this$props2.openAnimation,
          openTransitionName = _this$props2.openTransitionName;
      var menuOpenAnimation = openAnimation || openTransitionName;

      if (openAnimation === undefined && openTransitionName === undefined) {
        if (menuMode === 'horizontal') {
          menuOpenAnimation = 'slide-up';
        } else if (menuMode === 'inline') {
          menuOpenAnimation = _openAnimation["default"];
        } else {
          // When mode switch from inline
          // submenu should hide without animation
          if (this.state.switchingModeFromInline) {
            menuOpenAnimation = '';
          } else {
            menuOpenAnimation = 'zoom-big';
          }
        }
      }

      return menuOpenAnimation;
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_MenuContext["default"].Provider, {
        value: {
          inlineCollapsed: this.getInlineCollapsed() || false,
          antdMenuTheme: this.props.theme
        }
      }, React.createElement(_configProvider.ConfigConsumer, null, this.renderMenu));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var prevProps = prevState.prevProps;
      var newState = {
        prevProps: nextProps
      };

      if (prevProps.mode === 'inline' && nextProps.mode !== 'inline') {
        newState.switchingModeFromInline = true;
      }

      if ('openKeys' in nextProps) {
        newState.openKeys = nextProps.openKeys;
      } else {
        // [Legacy] Old code will return after `openKeys` changed.
        // Not sure the reason, we should keep this logic still.
        if (nextProps.inlineCollapsed && !prevProps.inlineCollapsed || nextProps.siderCollapsed && !prevProps.siderCollapsed) {
          newState.switchingModeFromInline = true;
          newState.inlineOpenKeys = prevState.openKeys;
          newState.openKeys = [];
        }

        if (!nextProps.inlineCollapsed && prevProps.inlineCollapsed || !nextProps.siderCollapsed && prevProps.siderCollapsed) {
          newState.openKeys = prevState.inlineOpenKeys;
          newState.inlineOpenKeys = [];
        }
      }

      return newState;
    }
  }]);

  return InternalMenu;
}(React.Component);

InternalMenu.defaultProps = {
  className: '',
  theme: 'light',
  focusable: false
};
(0, _reactLifecyclesCompat.polyfill)(InternalMenu); // We should keep this as ref-able

var Menu =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Menu, _React$Component2);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, _getPrototypeOf(Menu).apply(this, arguments));
  }

  _createClass(Menu, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(_Sider.SiderContext.Consumer, null, function (context) {
        return React.createElement(InternalMenu, _extends({}, _this3.props, context));
      });
    }
  }]);

  return Menu;
}(React.Component);

exports["default"] = Menu;
Menu.Divider = _rcMenu.Divider;
Menu.Item = _MenuItem["default"];
Menu.SubMenu = _SubMenu["default"];
Menu.ItemGroup = _rcMenu.ItemGroup;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 663:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var PropTypes = _interopRequireWildcard(__webpack_require__(2));

var _rcMenu = __webpack_require__(45);

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _MenuContext = _interopRequireDefault(__webpack_require__(156));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SubMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SubMenu, _React$Component);

  function SubMenu() {
    var _this;

    _classCallCheck(this, SubMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SubMenu).apply(this, arguments));

    _this.onKeyDown = function (e) {
      _this.subMenu.onKeyDown(e);
    };

    _this.saveSubMenu = function (subMenu) {
      _this.subMenu = subMenu;
    };

    return _this;
  }

  _createClass(SubMenu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          rootPrefixCls = _this$props.rootPrefixCls,
          className = _this$props.className;
      return React.createElement(_MenuContext["default"].Consumer, null, function (_ref) {
        var antdMenuTheme = _ref.antdMenuTheme;
        return React.createElement(_rcMenu.SubMenu, _extends({}, _this2.props, {
          ref: _this2.saveSubMenu,
          popupClassName: (0, _classnames["default"])("".concat(rootPrefixCls, "-").concat(antdMenuTheme), className)
        }));
      });
    }
  }]);

  return SubMenu;
}(React.Component);

SubMenu.contextTypes = {
  antdMenuTheme: PropTypes.string
}; // fix issue:https://github.com/ant-design/ant-design/issues/8666

SubMenu.isSubMenu = 1;
var _default = SubMenu;
exports["default"] = _default;
//# sourceMappingURL=SubMenu.js.map


/***/ }),

/***/ 664:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _rcMenu = __webpack_require__(45);

var _MenuContext = _interopRequireDefault(__webpack_require__(156));

var _tooltip = _interopRequireDefault(__webpack_require__(388));

var _Sider = __webpack_require__(138);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var MenuItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MenuItem, _React$Component);

  function MenuItem() {
    var _this;

    _classCallCheck(this, MenuItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MenuItem).apply(this, arguments));

    _this.onKeyDown = function (e) {
      _this.menuItem.onKeyDown(e);
    };

    _this.saveMenuItem = function (menuItem) {
      _this.menuItem = menuItem;
    };

    _this.renderItem = function (_ref) {
      var siderCollapsed = _ref.siderCollapsed;
      var _this$props = _this.props,
          level = _this$props.level,
          children = _this$props.children,
          rootPrefixCls = _this$props.rootPrefixCls;

      var _a = _this.props,
          title = _a.title,
          rest = __rest(_a, ["title"]);

      return React.createElement(_MenuContext["default"].Consumer, null, function (_ref2) {
        var inlineCollapsed = _ref2.inlineCollapsed;
        var tooltipProps = {};
        var titleNode = title || (level === 1 ? children : '');

        if (!siderCollapsed && !inlineCollapsed) {
          titleNode = null; // Reset `visible` to fix control mode tooltip display not correct
          // ref: https://github.com/ant-design/ant-design/issues/16742

          tooltipProps.visible = false;
        }

        return React.createElement(_tooltip["default"], _extends({}, tooltipProps, {
          title: titleNode,
          placement: "right",
          overlayClassName: "".concat(rootPrefixCls, "-inline-collapsed-tooltip")
        }), React.createElement(_rcMenu.Item, _extends({}, rest, {
          title: title,
          ref: _this.saveMenuItem
        })));
      });
    };

    return _this;
  }

  _createClass(MenuItem, [{
    key: "render",
    value: function render() {
      return React.createElement(_Sider.SiderContext.Consumer, null, this.renderItem);
    }
  }]);

  return MenuItem;
}(React.Component);

exports["default"] = MenuItem;
MenuItem.isMenuItem = true;
//# sourceMappingURL=MenuItem.js.map


/***/ }),

/***/ 667:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOverflowOptions = getOverflowOptions;
exports["default"] = getPlacements;

var _placements = __webpack_require__(668);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var autoAdjustOverflowEnabled = {
  adjustX: 1,
  adjustY: 1
};
var autoAdjustOverflowDisabled = {
  adjustX: 0,
  adjustY: 0
};
var targetOffset = [0, 0];

function getOverflowOptions(autoAdjustOverflow) {
  if (typeof autoAdjustOverflow === 'boolean') {
    return autoAdjustOverflow ? autoAdjustOverflowEnabled : autoAdjustOverflowDisabled;
  }

  return _extends({}, autoAdjustOverflowDisabled, autoAdjustOverflow);
}

function getPlacements() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _config$arrowWidth = config.arrowWidth,
      arrowWidth = _config$arrowWidth === void 0 ? 5 : _config$arrowWidth,
      _config$horizontalArr = config.horizontalArrowShift,
      horizontalArrowShift = _config$horizontalArr === void 0 ? 16 : _config$horizontalArr,
      _config$verticalArrow = config.verticalArrowShift,
      verticalArrowShift = _config$verticalArrow === void 0 ? 12 : _config$verticalArrow,
      _config$autoAdjustOve = config.autoAdjustOverflow,
      autoAdjustOverflow = _config$autoAdjustOve === void 0 ? true : _config$autoAdjustOve;
  var placementMap = {
    left: {
      points: ['cr', 'cl'],
      offset: [-4, 0]
    },
    right: {
      points: ['cl', 'cr'],
      offset: [4, 0]
    },
    top: {
      points: ['bc', 'tc'],
      offset: [0, -4]
    },
    bottom: {
      points: ['tc', 'bc'],
      offset: [0, 4]
    },
    topLeft: {
      points: ['bl', 'tc'],
      offset: [-(horizontalArrowShift + arrowWidth), -4]
    },
    leftTop: {
      points: ['tr', 'cl'],
      offset: [-4, -(verticalArrowShift + arrowWidth)]
    },
    topRight: {
      points: ['br', 'tc'],
      offset: [horizontalArrowShift + arrowWidth, -4]
    },
    rightTop: {
      points: ['tl', 'cr'],
      offset: [4, -(verticalArrowShift + arrowWidth)]
    },
    bottomRight: {
      points: ['tr', 'bc'],
      offset: [horizontalArrowShift + arrowWidth, 4]
    },
    rightBottom: {
      points: ['bl', 'cr'],
      offset: [4, verticalArrowShift + arrowWidth]
    },
    bottomLeft: {
      points: ['tl', 'bc'],
      offset: [-(horizontalArrowShift + arrowWidth), 4]
    },
    leftBottom: {
      points: ['br', 'cl'],
      offset: [-4, verticalArrowShift + arrowWidth]
    }
  };
  Object.keys(placementMap).forEach(function (key) {
    placementMap[key] = config.arrowPointAtCenter ? _extends({}, placementMap[key], {
      overflow: getOverflowOptions(autoAdjustOverflow),
      targetOffset: targetOffset
    }) : _extends({}, _placements.placements[key], {
      overflow: getOverflowOptions(autoAdjustOverflow)
    });
    placementMap[key].ignoreShake = true;
  });
  return placementMap;
}
//# sourceMappingURL=placements.js.map


/***/ }),

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};

var targetOffset = [0, 0];

var placements = exports.placements = {
  left: {
    points: ['cr', 'cl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  right: {
    points: ['cl', 'cr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  top: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  bottom: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  rightBottom: {
    points: ['bl', 'br'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  leftBottom: {
    points: ['br', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  }
};

exports['default'] = placements;

/***/ }),

/***/ 669:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _cssAnimation = _interopRequireDefault(__webpack_require__(112));

var _raf = _interopRequireDefault(__webpack_require__(27));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Deprecated. We should replace the animation with pure react motion instead of modify style directly.
 * If you are creating new component with animation, please use `./motion`.
 */
function animate(node, show, done) {
  var height;
  var requestAnimationFrameId;
  return (0, _cssAnimation["default"])(node, 'ant-motion-collapse-legacy', {
    start: function start() {
      if (!show) {
        node.style.height = "".concat(node.offsetHeight, "px");
        node.style.opacity = '1';
      } else {
        height = node.offsetHeight;
        node.style.height = '0px';
        node.style.opacity = '0';
      }
    },
    active: function active() {
      if (requestAnimationFrameId) {
        _raf["default"].cancel(requestAnimationFrameId);
      }

      requestAnimationFrameId = (0, _raf["default"])(function () {
        node.style.height = "".concat(show ? height : 0, "px");
        node.style.opacity = show ? '1' : '0';
      });
    },
    end: function end() {
      if (requestAnimationFrameId) {
        _raf["default"].cancel(requestAnimationFrameId);
      }

      node.style.height = '';
      node.style.opacity = '';
      done();
    }
  });
}

var animation = {
  enter: function enter(node, done) {
    return animate(node, true, done);
  },
  leave: function leave(node, done) {
    return animate(node, false, done);
  },
  appear: function appear(node, done) {
    return animate(node, true, done);
  }
};
var _default = animation;
exports["default"] = _default;
//# sourceMappingURL=openAnimation.js.map


/***/ }),

/***/ 671:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(31);

__webpack_require__(672);

__webpack_require__(673);
//# sourceMappingURL=css.js.map


/***/ }),

/***/ 672:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 673:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(31);

__webpack_require__(674);
//# sourceMappingURL=css.js.map


/***/ }),

/***/ 674:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = {"ret":true,"status":0,"data":[{"id":11458,"parentId":0,"name":"首页","path":"/Home","desc":"e987","treeCode":"#0#11458#","sort":0,"showType":"NAV","appSource":"moliere","rippleOpenFlow":false,"tags":[],"state":"VALID","securityLevel":"C2","nodeLevel":2,"checked":false,"open":false,"hasChild":false,"childList":[]},{"id":14736,"parentId":0,"name":"Redux Demo","path":"/Redux","desc":"e981","treeCode":"#0#14736#","sort":1,"showType":"NAV","appSource":"moliere","rippleOpenFlow":false,"tags":[],"state":"VALID","securityLevel":"C2","nodeLevel":2,"checked":false,"open":false,"hasChild":true,"childList":[{"id":14737,"parentId":14736,"name":"TODOList","path":"/ReduxDemo/TODOList","desc":"","treeCode":"#0#14736#14737#","sort":0,"showType":"NAV","appSource":"moliere","rippleOpenFlow":false,"tags":[],"state":"VALID","securityLevel":"C2","nodeLevel":3,"checked":false,"open":false,"hasChild":false,"childList":[]},{"id":14747,"parentId":14736,"name":"采购收货查询","path":"/moliere/web/InStorage/Entry/Purchase/ReceiveQuery/List","desc":"","treeCode":"#0#14736#14747#","sort":1,"showType":"NAV","appSource":"moliere","rippleOpenFlow":false,"tags":[],"state":"VALID","securityLevel":"C2","nodeLevel":3,"checked":false,"open":false,"hasChild":false,"childList":[]},{"id":32450,"parentId":14736,"name":"打印二维码","path":"/moliere/web/InStorage/Entry/Purchase/PrintQrcode/List","desc":"","treeCode":"#0#14736#32450#","sort":2,"showType":"NAV","appSource":"moliere","rippleOpenFlow":false,"tags":[],"state":"VALID","securityLevel":"C2","nodeLevel":3,"checked":false,"open":false,"hasChild":false,"childList":[]},{"id":34549,"parentId":14736,"name":"抽检任务查询","path":"/moliere/web/InStorage/Entry/Purchase/CheckQrcode/List","desc":"","treeCode":"#0#14736#34549#","sort":3,"showType":"NAV","appSource":"moliere","rippleOpenFlow":false,"tags":[],"state":"VALID","securityLevel":"C2","nodeLevel":3,"checked":false,"open":false,"hasChild":false,"childList":[]},{"id":34710,"parentId":14736,"name":"核对任务查询","path":"/moliere/web/InStorage/Entry/Purchase/QRCodeConfirm/List","desc":"","treeCode":"#0#14736#34710#","sort":4,"showType":"NAV","appSource":"moliere","rippleOpenFlow":false,"tags":[],"state":"VALID","securityLevel":"C2","nodeLevel":3,"checked":false,"open":false,"hasChild":false,"childList":[]},{"id":34933,"parentId":14736,"name":"交接抽检","path":"/moliere/web/InStorage/SpotCheck/List","desc":"","treeCode":"#0#14736#34933#","sort":5,"showType":"NAV","appSource":"moliere","rippleOpenFlow":false,"tags":[],"state":"VALID","securityLevel":"C2","nodeLevel":3,"checked":false,"open":false,"hasChild":false,"childList":[]}]},{"id":25528,"parentId":0,"name":"生产监控","path":"/moliere/web/Monitor","desc":"ebf6","treeCode":"#0#25528#","sort":3,"showType":"NAV","appSource":"moliere","rippleOpenFlow":false,"tags":[],"state":"VALID","securityLevel":"C2","nodeLevel":2,"checked":false,"open":false,"hasChild":true,"childList":[{"id":25529,"parentId":25528,"name":"生产进度","path":"/moliere/web/Monitor/Process","desc":"","treeCode":"#0#25528#25529#","sort":0,"showType":"NAV","appSource":"moliere","rippleOpenFlow":false,"tags":[],"state":"VALID","securityLevel":"C2","nodeLevel":3,"checked":false,"open":false,"hasChild":false,"childList":[]},{"id":30083,"parentId":25528,"name":"采购收货监控","path":"/moliere/web/Monitor/Receive","desc":"","treeCode":"#0#25528#30083#","sort":2,"showType":"NAV","appSource":"moliere","rippleOpenFlow":false,"tags":[],"state":"VALID","securityLevel":"C2","nodeLevel":3,"checked":false,"open":false,"hasChild":false,"childList":[]},{"id":30221,"parentId":25528,"name":"预测看板","path":"/moliere/web/Monitor/Forcast","desc":"","treeCode":"#0#25528#30221#","sort":3,"showType":"NAV","appSource":"moliere","rippleOpenFlow":false,"tags":[],"state":"VALID","securityLevel":"C2","nodeLevel":3,"checked":false,"open":false,"hasChild":false,"childList":[]},{"id":33107,"parentId":25528,"name":"TOT-作业看板","path":"/moliere/web/Monitor/TOT/WorkingPanel","desc":"","treeCode":"#0#25528#33107#","sort":7,"showType":"NAV","appSource":"moliere","rippleOpenFlow":false,"tags":[],"state":"VALID","securityLevel":"C2","nodeLevel":3,"checked":false,"open":false,"hasChild":false,"childList":[]},{"id":32217,"parentId":25528,"name":"TOT-工时看板","path":"/moliere/web/Monitor/TOT/WorkingHoursHistory","desc":"","treeCode":"#0#25528#32217#","sort":8,"showType":"NAV","appSource":"moliere","rippleOpenFlow":false,"tags":[],"state":"VALID","securityLevel":"C2","nodeLevel":3,"checked":false,"open":false,"hasChild":false,"childList":[]},{"id":32512,"parentId":25528,"name":"TOT-人效报表","path":"/moliere/web/Monitor/TOT/WorkingReport","desc":"","treeCode":"#0#25528#32512#","sort":9,"showType":"NAV","appSource":"moliere","rippleOpenFlow":false,"tags":[],"state":"VALID","securityLevel":"C2","nodeLevel":3,"checked":false,"open":false,"hasChild":false,"childList":[]}]},{"id":15773,"parentId":0,"name":"在库管理","path":"/moliere/web/InStock","desc":"ea0e","treeCode":"#0#15773#","sort":4,"showType":"NAV","appSource":"moliere","rippleOpenFlow":false,"tags":[],"state":"VALID","securityLevel":"C2","nodeLevel":2,"checked":false,"open":false,"hasChild":true,"childList":[{"id":15817,"parentId":15773,"name":"补货监控","path":"/moliere/web/OnStorage/ReplenishMonitorBoard","desc":"","treeCode":"#0#15773#15817#","sort":0,"showType":"NAV","appSource":"moliere","rippleOpenFlow":false,"tags":[],"state":"VALID","securityLevel":"C2","nodeLevel":3,"checked":false,"open":false,"hasChild":false,"childList":[]},{"id":15996,"parentId":15773,"name":"差异中心","path":"/moliere/web/OnStorage/DiffCenter/List","desc":"","treeCode":"#0#15773#15996#","sort":0,"showType":"NAV","appSource":"moliere","rippleOpenFlow":false,"tags":[],"state":"VALID","securityLevel":"C2","nodeLevel":3,"checked":false,"open":false,"hasChild":false,"childList":[]},{"id":15823,"parentId":15773,"name":"补货任务查询","path":"/moliere/web/OnStorage/ReplenishManage/List","desc":"","treeCode":"#0#15773#15823#","sort":1,"showType":"NAV","appSource":"moliere","rippleOpenFlow":false,"tags":[],"state":"VALID","securityLevel":"C2","nodeLevel":3,"checked":false,"open":false,"hasChild":false,"childList":[]},{"id":15786,"parentId":15773,"name":"盘点管理--废弃","path":"/moliere/web/InStock/Check/CheckOrder/List","desc":"","treeCode":"#0#15773#15786#","sort":2,"showType":"NAV","appSource":"moliere","rippleOpenFlow":false,"tags":[],"state":"VALID","securityLevel":"C2","nodeLevel":3,"checked":false,"open":false,"hasChild":false,"childList":[]},{"id":18479,"parentId":15773,"name":"移位查询","path":"/moliere/web/OnStorage/MovementQuery/List","desc":"","treeCode":"#0#15773#18479#","sort":4,"showType":"NAV","appSource":"moliere","rippleOpenFlow":false,"tags":[],"state":"VALID","securityLevel":"C2","nodeLevel":3,"checked":false,"open":false,"hasChild":false,"childList":[]},{"id":21280,"parentId":15773,"name":"商品盘点管理--废弃","path":"/moliere/web/InStock/CheckBySKU/List","desc":"","treeCode":"#0#15773#21280#","sort":5,"showType":"NAV","appSource":"moliere","rippleOpenFlow":false,"tags":[],"state":"VALID","securityLevel":"C2","nodeLevel":3,"checked":false,"open":false,"hasChild":false,"childList":[]},{"id":24557,"parentId":15773,"name":"盘点管理","path":"/moliere/web/InStock/NewCheck/List","desc":"","treeCode":"#0#15773#24557#","sort":6,"showType":"NAV","appSource":"moliere","rippleOpenFlow":false,"tags":[],"state":"VALID","securityLevel":"C2","nodeLevel":3,"checked":false,"open":false,"hasChild":false,"childList":[]},{"id":32604,"parentId":15773,"name":"盘点报告列表","path":"/moliere/web/InStock/NewCheck/Report/List","desc":"","treeCode":"#0#15773#32604#","sort":7,"showType":"NAV","appSource":"moliere","rippleOpenFlow":false,"tags":[],"state":"VALID","securityLevel":"C2","nodeLevel":3,"checked":false,"open":false,"hasChild":false,"childList":[]}]},{"id":11472,"parentId":0,"name":"库存管理","path":"/moliere/web/OnStorage","desc":"e985","treeCode":"#0#11472#","sort":5,"showType":"NAV","appSource":"moliere","rippleOpenFlow":false,"tags":[],"state":"VALID","securityLevel":"C2","nodeLevel":2,"checked":false,"open":false,"hasChild":true,"childList":[{"id":11473,"parentId":11472,"name":"库存查询","path":"/moliere/web/OnStorage/InventoryQuery/List","desc":"","treeCode":"#0#11472#11473#","sort":0,"showType":"NAV","appSource":"moliere","rippleOpenFlow":false,"tags":[],"state":"VALID","securityLevel":"C2","nodeLevel":3,"checked":false,"open":false,"hasChild":false,"childList":[]},{"id":17643,"parentId":11472,"name":"库存流水","path":"/moliere/web/OnStorage/InventoryFlow/List","desc":"","treeCode":"#0#11472#17643#","sort":1,"showType":"NAV","appSource":"moliere","rippleOpenFlow":false,"tags":[],"state":"VALID","securityLevel":"C2","nodeLevel":3,"checked":false,"open":false,"hasChild":false,"childList":[]},{"id":14389,"parentId":11472,"name":"库存调整","path":"/moliere/web/OnStorage/InventoryAdjust/List","desc":"","treeCode":"#0#11472#14389#","sort":2,"showType":"NAV","appSource":"moliere","rippleOpenFlow":false,"tags":[],"state":"VALID","securityLevel":"C2","nodeLevel":3,"checked":false,"open":false,"hasChild":false,"childList":[]}]}]}

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"menuList":"dh2ocFB1KYmAm7ePUCCrL"};

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"sider":"Ji9NyLJ7zuH3-Yn7YCYsq","siderTop":"zD3wHVfzXN_ycYbtwoII4","trigger":"_2g9lGwgxtFmBAW18zZ7tSm","logo":"_3Hvrc8AbCk8nTSPewTrmon","rotation":"_3_D7qYFsgyIr-NjeR9q0HJ"};

/***/ }),

/***/ 678:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _popover = __webpack_require__(679);

var _popover2 = _interopRequireDefault(_popover);

var _avatar = __webpack_require__(680);

var _avatar2 = _interopRequireDefault(_avatar);

var _icon = __webpack_require__(40);

var _icon2 = _interopRequireDefault(_icon);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(681);

__webpack_require__(683);

__webpack_require__(378);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(685);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppHeader = function (_Component) {
  _inherits(AppHeader, _Component);

  function AppHeader() {
    _classCallCheck(this, AppHeader);

    return _possibleConstructorReturn(this, (AppHeader.__proto__ || Object.getPrototypeOf(AppHeader)).apply(this, arguments));
  }

  _createClass(AppHeader, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _index2.default.header },
        _react2.default.createElement(
          _popover2.default,
          {
            placement: 'bottomRight',
            title: 'hui.liu',
            content: _react2.default.createElement(
              'div',
              { className: _index2.default.exitContainer },
              _react2.default.createElement(
                'div',
                { className: _index2.default.exit, onClick: function onClick() {} },
                '\u9000\u51FA\u767B\u5F55 ',
                _react2.default.createElement(_icon2.default, { type: 'logout' })
              )
            ),
            trigger: 'hover'
          },
          _react2.default.createElement(_avatar2.default, {
            icon: 'user',
            style: { backgroundColor: '#739BFF', cursor: 'pointer' },
            className: _index2.default.order_comp
          })
        )
      );
    }
  }]);

  return AppHeader;
}(_react.Component);

exports.default = AppHeader;

/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _tooltip = _interopRequireDefault(__webpack_require__(388));

var _configProvider = __webpack_require__(21);

var _warning = _interopRequireDefault(__webpack_require__(63));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var Popover =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Popover, _React$Component);

  function Popover() {
    var _this;

    _classCallCheck(this, Popover);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Popover).apply(this, arguments));

    _this.saveTooltip = function (node) {
      _this.tooltip = node;
    };

    _this.renderPopover = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          props = __rest(_a, ["prefixCls"]);

      delete props.title;
      var prefixCls = getPrefixCls('popover', customizePrefixCls);
      return React.createElement(_tooltip["default"], _extends({}, props, {
        prefixCls: prefixCls,
        ref: _this.saveTooltip,
        overlay: _this.getOverlay(prefixCls)
      }));
    };

    return _this;
  }

  _createClass(Popover, [{
    key: "getPopupDomNode",
    value: function getPopupDomNode() {
      return this.tooltip.getPopupDomNode();
    }
  }, {
    key: "getOverlay",
    value: function getOverlay(prefixCls) {
      var _this$props = this.props,
          title = _this$props.title,
          content = _this$props.content;
      (0, _warning["default"])(!('overlay' in this.props), 'Popover', '`overlay` is removed, please use `content` instead, ' + 'see: https://u.ant.design/popover-content');
      return React.createElement("div", null, title && React.createElement("div", {
        className: "".concat(prefixCls, "-title")
      }, title), React.createElement("div", {
        className: "".concat(prefixCls, "-inner-content")
      }, content));
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderPopover);
    }
  }]);

  return Popover;
}(React.Component);

exports["default"] = Popover;
Popover.defaultProps = {
  placement: 'top',
  transitionName: 'zoom-big',
  trigger: 'hover',
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  overlayStyle: {}
};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _icon = _interopRequireDefault(__webpack_require__(40));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _configProvider = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var Avatar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Avatar, _React$Component);

  function Avatar() {
    var _this;

    _classCallCheck(this, Avatar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Avatar).apply(this, arguments));
    _this.state = {
      scale: 1,
      isImgExist: true
    };

    _this.setScale = function () {
      if (!_this.avatarChildren || !_this.avatarNode) {
        return;
      }

      var childrenWidth = _this.avatarChildren.offsetWidth; // offsetWidth avoid affecting be transform scale

      var nodeWidth = _this.avatarNode.offsetWidth; // denominator is 0 is no meaning

      if (childrenWidth === 0 || nodeWidth === 0 || _this.lastChildrenWidth === childrenWidth && _this.lastNodeWidth === nodeWidth) {
        return;
      }

      _this.lastChildrenWidth = childrenWidth;
      _this.lastNodeWidth = nodeWidth; // add 4px gap for each side to get better performance

      _this.setState({
        scale: nodeWidth - 8 < childrenWidth ? (nodeWidth - 8) / childrenWidth : 1
      });
    };

    _this.handleImgLoadError = function () {
      var onError = _this.props.onError;
      var errorFlag = onError ? onError() : undefined;

      if (errorFlag !== false) {
        _this.setState({
          isImgExist: false
        });
      }
    };

    _this.renderAvatar = function (_ref) {
      var _classNames, _classNames2;

      var getPrefixCls = _ref.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          shape = _a.shape,
          size = _a.size,
          src = _a.src,
          srcSet = _a.srcSet,
          icon = _a.icon,
          className = _a.className,
          alt = _a.alt,
          others = __rest(_a, ["prefixCls", "shape", "size", "src", "srcSet", "icon", "className", "alt"]);

      var _this$state = _this.state,
          isImgExist = _this$state.isImgExist,
          scale = _this$state.scale;
      var prefixCls = getPrefixCls('avatar', customizePrefixCls);
      var sizeCls = (0, _classnames["default"])((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), _defineProperty(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), _classNames));
      var classString = (0, _classnames["default"])(prefixCls, className, sizeCls, (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-").concat(shape), shape), _defineProperty(_classNames2, "".concat(prefixCls, "-image"), src && isImgExist), _defineProperty(_classNames2, "".concat(prefixCls, "-icon"), icon), _classNames2));
      var sizeStyle = typeof size === 'number' ? {
        width: size,
        height: size,
        lineHeight: "".concat(size, "px"),
        fontSize: icon ? size / 2 : 18
      } : {};
      var children = _this.props.children;

      if (src && isImgExist) {
        children = React.createElement("img", {
          src: src,
          srcSet: srcSet,
          onError: _this.handleImgLoadError,
          alt: alt
        });
      } else if (icon) {
        children = React.createElement(_icon["default"], {
          type: icon
        });
      } else {
        var childrenNode = _this.avatarChildren;

        if (childrenNode || scale !== 1) {
          var transformString = "scale(".concat(scale, ") translateX(-50%)");
          var childrenStyle = {
            msTransform: transformString,
            WebkitTransform: transformString,
            transform: transformString
          };
          var sizeChildrenStyle = typeof size === 'number' ? {
            lineHeight: "".concat(size, "px")
          } : {};
          children = React.createElement("span", {
            className: "".concat(prefixCls, "-string"),
            ref: function ref(node) {
              return _this.avatarChildren = node;
            },
            style: _extends({}, sizeChildrenStyle, childrenStyle)
          }, children);
        } else {
          children = React.createElement("span", {
            className: "".concat(prefixCls, "-string"),
            ref: function ref(node) {
              return _this.avatarChildren = node;
            }
          }, children);
        }
      }

      return React.createElement("span", _extends({}, others, {
        style: _extends({}, sizeStyle, others.style),
        className: classString,
        ref: function ref(node) {
          return _this.avatarNode = node;
        }
      }), children);
    };

    return _this;
  }

  _createClass(Avatar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setScale();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.setScale();

      if (prevProps.src !== this.props.src) {
        this.setState({
          isImgExist: true,
          scale: 1
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderAvatar);
    }
  }]);

  return Avatar;
}(React.Component);

exports["default"] = Avatar;
Avatar.defaultProps = {
  shape: 'circle',
  size: 'default'
};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 681:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(31);

__webpack_require__(682);
//# sourceMappingURL=css.js.map


/***/ }),

/***/ 682:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 683:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(31);

__webpack_require__(684);
//# sourceMappingURL=css.js.map


/***/ }),

/***/ 684:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"header":"_1Ho1-bYCcoQIRM9fH0oaP2","exitContainer":"_1G8LVF6C6stmHnf9nWcU4l","avatarTitle":"_1GszJlHL0Kwi7-sd3J_ZKy","exit":"yQikINEobveHRJlNYkgeT","name":"_3STEMq2f_ff3Qw-41wZe0i","order_comp":"_2OcFtDIBdaZ9zHBbZhR3dy"};

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"_34ESr_e9esgCYXR1ONUzes"};

/***/ }),

/***/ 687:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _list = __webpack_require__(688);

var _list2 = _interopRequireDefault(_list);

var _button = __webpack_require__(402);

var _button2 = _interopRequireDefault(_button);

var _input = __webpack_require__(716);

var _input2 = _interopRequireDefault(_input);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(723);

__webpack_require__(404);

__webpack_require__(735);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(231);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoList = function (_Component) {
  _inherits(TodoList, _Component);

  function TodoList() {
    _classCallCheck(this, TodoList);

    return _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).apply(this, arguments));
  }

  _createClass(TodoList, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _App2.default,
        null,
        _react2.default.createElement(
          'div',
          { style: { marginTop: '10px', marginLeft: '10px' } },
          _react2.default.createElement(_input2.default, { placeholder: '\u8BF7\u8F93\u5165\u5F85\u529E\u4E8B\u9879' }),
          _react2.default.createElement(
            _button2.default,
            null,
            '\u63D0\u4EA4'
          )
        ),
        _react2.default.createElement(_list2.default, {
          style: { marginTop: '10px', width: '300px' },
          bordered: true,
          dataSource: [],
          renderItem: function renderItem(item) {
            return _react2.default.createElement(
              _list2.default.Item,
              null,
              item
            );
          }
        })
      );
    }
  }]);

  return TodoList;
}(_react.Component);

exports.default = TodoList;

/***/ }),

/***/ 688:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var PropTypes = _interopRequireWildcard(__webpack_require__(2));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _configProvider = __webpack_require__(21);

var _spin = _interopRequireDefault(__webpack_require__(689));

var _pagination = _interopRequireDefault(__webpack_require__(693));

var _grid = __webpack_require__(399);

var _Item = _interopRequireDefault(__webpack_require__(710));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var List =
/*#__PURE__*/
function (_React$Component) {
  _inherits(List, _React$Component);

  function List(props) {
    var _this;

    _classCallCheck(this, List);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(List).call(this, props));
    _this.defaultPaginationProps = {
      current: 1,
      total: 0
    };
    _this.keys = {};
    _this.onPaginationChange = _this.triggerPaginationEvent('onChange');
    _this.onPaginationShowSizeChange = _this.triggerPaginationEvent('onShowSizeChange');

    _this.renderItem = function (item, index) {
      var _this$props = _this.props,
          renderItem = _this$props.renderItem,
          rowKey = _this$props.rowKey;
      if (!renderItem) return null;
      var key;

      if (typeof rowKey === 'function') {
        key = rowKey(item);
      } else if (typeof rowKey === 'string') {
        key = item[rowKey];
      } else {
        key = item.key;
      }

      if (!key) {
        key = "list-item-".concat(index);
      }

      _this.keys[index] = key;
      return renderItem(item, index);
    };

    _this.renderEmpty = function (prefixCls, renderEmpty) {
      var locale = _this.props.locale;
      return React.createElement("div", {
        className: "".concat(prefixCls, "-empty-text")
      }, locale && locale.emptyText || renderEmpty('List'));
    };

    _this.renderList = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls,
          renderEmpty = _ref.renderEmpty;
      var _this$state = _this.state,
          paginationCurrent = _this$state.paginationCurrent,
          paginationSize = _this$state.paginationSize;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          bordered = _a.bordered,
          split = _a.split,
          className = _a.className,
          children = _a.children,
          itemLayout = _a.itemLayout,
          loadMore = _a.loadMore,
          pagination = _a.pagination,
          grid = _a.grid,
          _a$dataSource = _a.dataSource,
          dataSource = _a$dataSource === void 0 ? [] : _a$dataSource,
          size = _a.size,
          rowKey = _a.rowKey,
          renderItem = _a.renderItem,
          header = _a.header,
          footer = _a.footer,
          loading = _a.loading,
          locale = _a.locale,
          rest = __rest(_a, ["prefixCls", "bordered", "split", "className", "children", "itemLayout", "loadMore", "pagination", "grid", "dataSource", "size", "rowKey", "renderItem", "header", "footer", "loading", "locale"]);

      var prefixCls = getPrefixCls('list', customizePrefixCls);
      var loadingProp = loading;

      if (typeof loadingProp === 'boolean') {
        loadingProp = {
          spinning: loadingProp
        };
      }

      var isLoading = loadingProp && loadingProp.spinning; // large => lg
      // small => sm

      var sizeCls = '';

      switch (size) {
        case 'large':
          sizeCls = 'lg';
          break;

        case 'small':
          sizeCls = 'sm';

        default:
          break;
      }

      var classString = (0, _classnames["default"])(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-vertical"), itemLayout === 'vertical'), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), _defineProperty(_classNames, "".concat(prefixCls, "-split"), split), _defineProperty(_classNames, "".concat(prefixCls, "-bordered"), bordered), _defineProperty(_classNames, "".concat(prefixCls, "-loading"), isLoading), _defineProperty(_classNames, "".concat(prefixCls, "-grid"), grid), _defineProperty(_classNames, "".concat(prefixCls, "-something-after-last-item"), _this.isSomethingAfterLastItem()), _classNames));

      var paginationProps = _extends({}, _this.defaultPaginationProps, {
        total: dataSource.length,
        current: paginationCurrent,
        pageSize: paginationSize
      }, pagination || {});

      var largestPage = Math.ceil(paginationProps.total / paginationProps.pageSize);

      if (paginationProps.current > largestPage) {
        paginationProps.current = largestPage;
      }

      var paginationContent = pagination ? React.createElement("div", {
        className: "".concat(prefixCls, "-pagination")
      }, React.createElement(_pagination["default"], _extends({}, paginationProps, {
        onChange: _this.onPaginationChange,
        onShowSizeChange: _this.onPaginationShowSizeChange
      }))) : null;

      var splitDataSource = _toConsumableArray(dataSource);

      if (pagination) {
        if (dataSource.length > (paginationProps.current - 1) * paginationProps.pageSize) {
          splitDataSource = _toConsumableArray(dataSource).splice((paginationProps.current - 1) * paginationProps.pageSize, paginationProps.pageSize);
        }
      }

      var childrenContent;
      childrenContent = isLoading && React.createElement("div", {
        style: {
          minHeight: 53
        }
      });

      if (splitDataSource.length > 0) {
        var items = splitDataSource.map(function (item, index) {
          return _this.renderItem(item, index);
        });
        var childrenList = [];
        React.Children.forEach(items, function (child, index) {
          childrenList.push(React.cloneElement(child, {
            key: _this.keys[index]
          }));
        });
        childrenContent = grid ? React.createElement(_grid.Row, {
          gutter: grid.gutter
        }, childrenList) : React.createElement("ul", {
          className: "".concat(prefixCls, "-items")
        }, childrenList);
      } else if (!children && !isLoading) {
        childrenContent = _this.renderEmpty(prefixCls, renderEmpty);
      }

      var paginationPosition = paginationProps.position || 'bottom';
      return React.createElement("div", _extends({
        className: classString
      }, rest), (paginationPosition === 'top' || paginationPosition === 'both') && paginationContent, header && React.createElement("div", {
        className: "".concat(prefixCls, "-header")
      }, header), React.createElement(_spin["default"], loadingProp, childrenContent, children), footer && React.createElement("div", {
        className: "".concat(prefixCls, "-footer")
      }, footer), loadMore || (paginationPosition === 'bottom' || paginationPosition === 'both') && paginationContent);
    };

    var pagination = props.pagination;
    var paginationObj = pagination && _typeof(pagination) === 'object' ? pagination : {};
    _this.state = {
      paginationCurrent: paginationObj.defaultCurrent || 1,
      paginationSize: paginationObj.defaultPageSize || 10
    };
    return _this;
  }

  _createClass(List, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        grid: this.props.grid,
        itemLayout: this.props.itemLayout
      };
    }
  }, {
    key: "triggerPaginationEvent",
    value: function triggerPaginationEvent(eventName) {
      var _this2 = this;

      return function (page, pageSize) {
        var pagination = _this2.props.pagination;

        _this2.setState({
          paginationCurrent: page,
          paginationSize: pageSize
        });

        if (pagination && pagination[eventName]) {
          pagination[eventName](page, pageSize);
        }
      };
    }
  }, {
    key: "isSomethingAfterLastItem",
    value: function isSomethingAfterLastItem() {
      var _this$props2 = this.props,
          loadMore = _this$props2.loadMore,
          pagination = _this$props2.pagination,
          footer = _this$props2.footer;
      return !!(loadMore || pagination || footer);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderList);
    }
  }]);

  return List;
}(React.Component);

exports["default"] = List;
List.Item = _Item["default"];
List.childContextTypes = {
  grid: PropTypes.any,
  itemLayout: PropTypes.string
};
List.defaultProps = {
  dataSource: [],
  bordered: false,
  split: true,
  loading: false,
  pagination: false
};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 689:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var PropTypes = _interopRequireWildcard(__webpack_require__(2));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _omit = _interopRequireDefault(__webpack_require__(14));

var _debounce = _interopRequireDefault(__webpack_require__(78));

var _configProvider = __webpack_require__(21);

var _type = __webpack_require__(92);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var SpinSizes = (0, _type.tuple)('small', 'default', 'large'); // Render indicator

var defaultIndicator = null;

function renderIndicator(prefixCls, props) {
  var indicator = props.indicator;
  var dotClassName = "".concat(prefixCls, "-dot");

  if (React.isValidElement(indicator)) {
    return React.cloneElement(indicator, {
      className: (0, _classnames["default"])(indicator.props.className, dotClassName)
    });
  }

  if (React.isValidElement(defaultIndicator)) {
    return React.cloneElement(defaultIndicator, {
      className: (0, _classnames["default"])(defaultIndicator.props.className, dotClassName)
    });
  }

  return React.createElement("span", {
    className: (0, _classnames["default"])(dotClassName, "".concat(prefixCls, "-dot-spin"))
  }, React.createElement("i", {
    className: "".concat(prefixCls, "-dot-item")
  }), React.createElement("i", {
    className: "".concat(prefixCls, "-dot-item")
  }), React.createElement("i", {
    className: "".concat(prefixCls, "-dot-item")
  }), React.createElement("i", {
    className: "".concat(prefixCls, "-dot-item")
  }));
}

function shouldDelay(spinning, delay) {
  return !!spinning && !!delay && !isNaN(Number(delay));
}

var Spin =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Spin, _React$Component);

  function Spin(props) {
    var _this;

    _classCallCheck(this, Spin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Spin).call(this, props));

    _this.debouncifyUpdateSpinning = function (props) {
      var _ref = props || _this.props,
          delay = _ref.delay;

      if (delay) {
        _this.cancelExistingSpin();

        _this.updateSpinning = (0, _debounce["default"])(_this.originalUpdateSpinning, delay);
      }
    };

    _this.updateSpinning = function () {
      var spinning = _this.props.spinning;
      var currentSpinning = _this.state.spinning;

      if (currentSpinning !== spinning) {
        _this.setState({
          spinning: spinning
        });
      }
    };

    _this.renderSpin = function (_ref2) {
      var _classNames;

      var getPrefixCls = _ref2.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          className = _a.className,
          size = _a.size,
          tip = _a.tip,
          wrapperClassName = _a.wrapperClassName,
          style = _a.style,
          restProps = __rest(_a, ["prefixCls", "className", "size", "tip", "wrapperClassName", "style"]);

      var spinning = _this.state.spinning;
      var prefixCls = getPrefixCls('spin', customizePrefixCls);
      var spinClassName = (0, _classnames["default"])(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), _defineProperty(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), _defineProperty(_classNames, "".concat(prefixCls, "-spinning"), spinning), _defineProperty(_classNames, "".concat(prefixCls, "-show-text"), !!tip), _classNames), className); // fix https://fb.me/react-unknown-prop

      var divProps = (0, _omit["default"])(restProps, ['spinning', 'delay', 'indicator']);
      var spinElement = React.createElement("div", _extends({}, divProps, {
        style: style,
        className: spinClassName
      }), renderIndicator(prefixCls, _this.props), tip ? React.createElement("div", {
        className: "".concat(prefixCls, "-text")
      }, tip) : null);

      if (_this.isNestedPattern()) {
        var containerClassName = (0, _classnames["default"])("".concat(prefixCls, "-container"), _defineProperty({}, "".concat(prefixCls, "-blur"), spinning));
        return React.createElement("div", _extends({}, divProps, {
          className: (0, _classnames["default"])("".concat(prefixCls, "-nested-loading"), wrapperClassName)
        }), spinning && React.createElement("div", {
          key: "loading"
        }, spinElement), React.createElement("div", {
          className: containerClassName,
          key: "container"
        }, _this.props.children));
      }

      return spinElement;
    };

    var spinning = props.spinning,
        delay = props.delay;
    var shouldBeDelayed = shouldDelay(spinning, delay);
    _this.state = {
      spinning: spinning && !shouldBeDelayed
    };
    _this.originalUpdateSpinning = _this.updateSpinning;

    _this.debouncifyUpdateSpinning(props);

    return _this;
  }

  _createClass(Spin, [{
    key: "isNestedPattern",
    value: function isNestedPattern() {
      return !!(this.props && this.props.children);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cancelExistingSpin();
    }
  }, {
    key: "cancelExistingSpin",
    value: function cancelExistingSpin() {
      var updateSpinning = this.updateSpinning;

      if (updateSpinning && updateSpinning.cancel) {
        updateSpinning.cancel();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateSpinning();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.debouncifyUpdateSpinning();
      this.updateSpinning();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderSpin);
    }
  }], [{
    key: "setDefaultIndicator",
    value: function setDefaultIndicator(indicator) {
      defaultIndicator = indicator;
    }
  }]);

  return Spin;
}(React.Component);

Spin.defaultProps = {
  spinning: true,
  size: 'default',
  wrapperClassName: ''
};
Spin.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  spinning: PropTypes.bool,
  size: PropTypes.oneOf(SpinSizes),
  wrapperClassName: PropTypes.string,
  indicator: PropTypes.element
};
var _default = Spin;
exports["default"] = _default;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 693:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Pagination = _interopRequireDefault(__webpack_require__(694));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _Pagination["default"];
exports["default"] = _default;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 694:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _rcPagination = _interopRequireDefault(__webpack_require__(394));

var _en_US = _interopRequireDefault(__webpack_require__(235));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _MiniSelect = _interopRequireDefault(__webpack_require__(699));

var _icon = _interopRequireDefault(__webpack_require__(40));

var _select = _interopRequireDefault(__webpack_require__(396));

var _LocaleReceiver = _interopRequireDefault(__webpack_require__(104));

var _configProvider = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var Pagination =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Pagination, _React$Component);

  function Pagination() {
    var _this;

    _classCallCheck(this, Pagination);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Pagination).apply(this, arguments));

    _this.getIconsProps = function (prefixCls) {
      var prevIcon = React.createElement("a", {
        className: "".concat(prefixCls, "-item-link")
      }, React.createElement(_icon["default"], {
        type: "left"
      }));
      var nextIcon = React.createElement("a", {
        className: "".concat(prefixCls, "-item-link")
      }, React.createElement(_icon["default"], {
        type: "right"
      }));
      var jumpPrevIcon = React.createElement("a", {
        className: "".concat(prefixCls, "-item-link")
      }, React.createElement("div", {
        className: "".concat(prefixCls, "-item-container")
      }, React.createElement(_icon["default"], {
        className: "".concat(prefixCls, "-item-link-icon"),
        type: "double-left"
      }), React.createElement("span", {
        className: "".concat(prefixCls, "-item-ellipsis")
      }, "\u2022\u2022\u2022")));
      var jumpNextIcon = React.createElement("a", {
        className: "".concat(prefixCls, "-item-link")
      }, React.createElement("div", {
        className: "".concat(prefixCls, "-item-container")
      }, React.createElement(_icon["default"], {
        className: "".concat(prefixCls, "-item-link-icon"),
        type: "double-right"
      }), React.createElement("span", {
        className: "".concat(prefixCls, "-item-ellipsis")
      }, "\u2022\u2022\u2022")));
      return {
        prevIcon: prevIcon,
        nextIcon: nextIcon,
        jumpPrevIcon: jumpPrevIcon,
        jumpNextIcon: jumpNextIcon
      };
    };

    _this.renderPagination = function (contextLocale) {
      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          customizeSelectPrefixCls = _a.selectPrefixCls,
          className = _a.className,
          size = _a.size,
          customLocale = _a.locale,
          restProps = __rest(_a, ["prefixCls", "selectPrefixCls", "className", "size", "locale"]);

      var locale = _extends({}, contextLocale, customLocale);

      var isSmall = size === 'small';
      return React.createElement(_configProvider.ConfigConsumer, null, function (_ref) {
        var getPrefixCls = _ref.getPrefixCls;
        var prefixCls = getPrefixCls('pagination', customizePrefixCls);
        var selectPrefixCls = getPrefixCls('select', customizeSelectPrefixCls);
        return React.createElement(_rcPagination["default"], _extends({}, restProps, {
          prefixCls: prefixCls,
          selectPrefixCls: selectPrefixCls
        }, _this.getIconsProps(prefixCls), {
          className: (0, _classnames["default"])(className, {
            mini: isSmall
          }),
          selectComponentClass: isSmall ? _MiniSelect["default"] : _select["default"],
          locale: locale
        }));
      });
    };

    return _this;
  }

  _createClass(Pagination, [{
    key: "render",
    value: function render() {
      return React.createElement(_LocaleReceiver["default"], {
        componentName: "Pagination",
        defaultLocale: _en_US["default"]
      }, this.renderPagination);
    }
  }]);

  return Pagination;
}(React.Component);

exports["default"] = Pagination;
//# sourceMappingURL=Pagination.js.map


/***/ }),

/***/ 699:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _select = _interopRequireDefault(__webpack_require__(396));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MiniSelect =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MiniSelect, _React$Component);

  function MiniSelect() {
    _classCallCheck(this, MiniSelect);

    return _possibleConstructorReturn(this, _getPrototypeOf(MiniSelect).apply(this, arguments));
  }

  _createClass(MiniSelect, [{
    key: "render",
    value: function render() {
      return React.createElement(_select["default"], _extends({
        size: "small"
      }, this.props));
    }
  }]);

  return MiniSelect;
}(React.Component);

exports["default"] = MiniSelect;
MiniSelect.Option = _select["default"].Option;
//# sourceMappingURL=MiniSelect.js.map


/***/ }),

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _configProvider = __webpack_require__(21);

var React = _interopRequireWildcard(__webpack_require__(0));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var PropTypes = _interopRequireWildcard(__webpack_require__(2));

var _RowContext = _interopRequireDefault(__webpack_require__(400));

var _type = __webpack_require__(92);

var _responsiveObserve = _interopRequireWildcard(__webpack_require__(705));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var RowAligns = (0, _type.tuple)('top', 'middle', 'bottom');
var RowJustify = (0, _type.tuple)('start', 'end', 'center', 'space-around', 'space-between');

var Row =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Row, _React$Component);

  function Row() {
    var _this;

    _classCallCheck(this, Row);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Row).apply(this, arguments));
    _this.state = {
      screens: {}
    };

    _this.renderRow = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          type = _a.type,
          justify = _a.justify,
          align = _a.align,
          className = _a.className,
          style = _a.style,
          children = _a.children,
          others = __rest(_a, ["prefixCls", "type", "justify", "align", "className", "style", "children"]);

      var prefixCls = getPrefixCls('row', customizePrefixCls);

      var gutter = _this.getGutter();

      var classes = (0, _classnames["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls, !type), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(type), type), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(type, "-").concat(justify), type && justify), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(type, "-").concat(align), type && align), _classNames), className);
      var rowStyle = gutter > 0 ? _extends({
        marginLeft: gutter / -2,
        marginRight: gutter / -2
      }, style) : style;

      var otherProps = _extends({}, others);

      delete otherProps.gutter;
      return React.createElement(_RowContext["default"].Provider, {
        value: {
          gutter: gutter
        }
      }, React.createElement("div", _extends({}, otherProps, {
        className: classes,
        style: rowStyle
      }), children));
    };

    return _this;
  }

  _createClass(Row, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.token = _responsiveObserve["default"].subscribe(function (screens) {
        if (_typeof(_this2.props.gutter) === 'object') {
          _this2.setState({
            screens: screens
          });
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _responsiveObserve["default"].unsubscribe(this.token);
    }
  }, {
    key: "getGutter",
    value: function getGutter() {
      var gutter = this.props.gutter;

      if (_typeof(gutter) === 'object') {
        for (var i = 0; i < _responsiveObserve.responsiveArray.length; i++) {
          var breakpoint = _responsiveObserve.responsiveArray[i];

          if (this.state.screens[breakpoint] && gutter[breakpoint] !== undefined) {
            return gutter[breakpoint];
          }
        }
      }

      return gutter;
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderRow);
    }
  }]);

  return Row;
}(React.Component);

exports["default"] = Row;
Row.defaultProps = {
  gutter: 0
};
Row.propTypes = {
  type: PropTypes.oneOf(['flex']),
  align: PropTypes.oneOf(RowAligns),
  justify: PropTypes.oneOf(RowJustify),
  className: PropTypes.string,
  children: PropTypes.node,
  gutter: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  prefixCls: PropTypes.string
};
//# sourceMappingURL=row.js.map


/***/ }),

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.responsiveMap = exports.responsiveArray = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82
var enquire;

if (typeof window !== 'undefined') {
  var matchMediaPolyfill = function matchMediaPolyfill(mediaQuery) {
    return {
      media: mediaQuery,
      matches: false,
      addListener: function addListener() {},
      removeListener: function removeListener() {}
    };
  };

  window.matchMedia = window.matchMedia || matchMediaPolyfill;
  enquire = __webpack_require__(159);
}

var responsiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
exports.responsiveArray = responsiveArray;
var responsiveMap = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)'
};
exports.responsiveMap = responsiveMap;
var subscribers = [];
var subUid = -1;
var screens = {};
var responsiveObserve = {
  dispatch: function dispatch(pointMap) {
    screens = pointMap;

    if (subscribers.length < 1) {
      return false;
    }

    subscribers.forEach(function (item) {
      item.func(screens);
    });
    return true;
  },
  subscribe: function subscribe(func) {
    if (subscribers.length === 0) {
      this.register();
    }

    var token = (++subUid).toString();
    subscribers.push({
      token: token,
      func: func
    });
    func(screens);
    return token;
  },
  unsubscribe: function unsubscribe(token) {
    subscribers = subscribers.filter(function (item) {
      return item.token !== token;
    });

    if (subscribers.length === 0) {
      this.unregister();
    }
  },
  unregister: function unregister() {
    Object.keys(responsiveMap).map(function (screen) {
      return enquire.unregister(responsiveMap[screen]);
    });
  },
  register: function register() {
    var _this = this;

    Object.keys(responsiveMap).map(function (screen) {
      return enquire.register(responsiveMap[screen], {
        match: function match() {
          var pointMap = _extends({}, screens, _defineProperty({}, screen, true));

          _this.dispatch(pointMap);
        },
        unmatch: function unmatch() {
          var pointMap = _extends({}, screens, _defineProperty({}, screen, false));

          _this.dispatch(pointMap);
        },
        // Keep a empty destory to avoid triggering unmatch when unregister
        destroy: function destroy() {}
      });
    });
  }
};
var _default = responsiveObserve;
exports["default"] = _default;
//# sourceMappingURL=responsiveObserve.js.map


/***/ }),

/***/ 709:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var PropTypes = _interopRequireWildcard(__webpack_require__(2));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _RowContext = _interopRequireDefault(__webpack_require__(400));

var _configProvider = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var objectOrNumber = PropTypes.oneOfType([PropTypes.object, PropTypes.number]);

var Col =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Col, _React$Component);

  function Col() {
    var _this;

    _classCallCheck(this, Col);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Col).apply(this, arguments));

    _this.renderCol = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls;
      var props = _this.props;

      var customizePrefixCls = props.prefixCls,
          span = props.span,
          order = props.order,
          offset = props.offset,
          push = props.push,
          pull = props.pull,
          className = props.className,
          children = props.children,
          others = __rest(props, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children"]);

      var prefixCls = getPrefixCls('col', customizePrefixCls);
      var sizeClassObj = {};
      ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].forEach(function (size) {
        var _extends2;

        var sizeProps = {};

        if (typeof props[size] === 'number') {
          sizeProps.span = props[size];
        } else if (_typeof(props[size]) === 'object') {
          sizeProps = props[size] || {};
        }

        delete others[size];
        sizeClassObj = _extends({}, sizeClassObj, (_extends2 = {}, _defineProperty(_extends2, "".concat(prefixCls, "-").concat(size, "-").concat(sizeProps.span), sizeProps.span !== undefined), _defineProperty(_extends2, "".concat(prefixCls, "-").concat(size, "-order-").concat(sizeProps.order), sizeProps.order || sizeProps.order === 0), _defineProperty(_extends2, "".concat(prefixCls, "-").concat(size, "-offset-").concat(sizeProps.offset), sizeProps.offset || sizeProps.offset === 0), _defineProperty(_extends2, "".concat(prefixCls, "-").concat(size, "-push-").concat(sizeProps.push), sizeProps.push || sizeProps.push === 0), _defineProperty(_extends2, "".concat(prefixCls, "-").concat(size, "-pull-").concat(sizeProps.pull), sizeProps.pull || sizeProps.pull === 0), _extends2));
      });
      var classes = (0, _classnames["default"])(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(span), span !== undefined), _defineProperty(_classNames, "".concat(prefixCls, "-order-").concat(order), order), _defineProperty(_classNames, "".concat(prefixCls, "-offset-").concat(offset), offset), _defineProperty(_classNames, "".concat(prefixCls, "-push-").concat(push), push), _defineProperty(_classNames, "".concat(prefixCls, "-pull-").concat(pull), pull), _classNames), className, sizeClassObj);
      return React.createElement(_RowContext["default"].Consumer, null, function (_ref2) {
        var gutter = _ref2.gutter;
        var style = others.style;

        if (gutter > 0) {
          style = _extends({
            paddingLeft: gutter / 2,
            paddingRight: gutter / 2
          }, style);
        }

        return React.createElement("div", _extends({}, others, {
          style: style,
          className: classes
        }), children);
      });
    };

    return _this;
  }

  _createClass(Col, [{
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderCol);
    }
  }]);

  return Col;
}(React.Component);

exports["default"] = Col;
Col.propTypes = {
  span: PropTypes.number,
  order: PropTypes.number,
  offset: PropTypes.number,
  push: PropTypes.number,
  pull: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node,
  xs: objectOrNumber,
  sm: objectOrNumber,
  md: objectOrNumber,
  lg: objectOrNumber,
  xl: objectOrNumber,
  xxl: objectOrNumber
};
//# sourceMappingURL=col.js.map


/***/ }),

/***/ 710:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Meta = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var PropTypes = _interopRequireWildcard(__webpack_require__(2));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _grid = __webpack_require__(399);

var _configProvider = __webpack_require__(21);

var _reactNode = __webpack_require__(711);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var Meta = function Meta(props) {
  return React.createElement(_configProvider.ConfigConsumer, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;

    var customizePrefixCls = props.prefixCls,
        className = props.className,
        avatar = props.avatar,
        title = props.title,
        description = props.description,
        others = __rest(props, ["prefixCls", "className", "avatar", "title", "description"]);

    var prefixCls = getPrefixCls('list', customizePrefixCls);
    var classString = (0, _classnames["default"])("".concat(prefixCls, "-item-meta"), className);
    var content = React.createElement("div", {
      className: "".concat(prefixCls, "-item-meta-content")
    }, title && React.createElement("h4", {
      className: "".concat(prefixCls, "-item-meta-title")
    }, title), description && React.createElement("div", {
      className: "".concat(prefixCls, "-item-meta-description")
    }, description));
    return React.createElement("div", _extends({}, others, {
      className: classString
    }), avatar && React.createElement("div", {
      className: "".concat(prefixCls, "-item-meta-avatar")
    }, avatar), (title || description) && content);
  });
};

exports.Meta = Meta;

function getGrid(grid, t) {
  return grid[t] && Math.floor(24 / grid[t]);
}

var Item =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Item, _React$Component);

  function Item() {
    var _this;

    _classCallCheck(this, Item);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Item).apply(this, arguments));

    _this.renderItem = function (_ref2) {
      var getPrefixCls = _ref2.getPrefixCls;
      var _this$context = _this.context,
          grid = _this$context.grid,
          itemLayout = _this$context.itemLayout;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          children = _a.children,
          actions = _a.actions,
          extra = _a.extra,
          className = _a.className,
          others = __rest(_a, ["prefixCls", "children", "actions", "extra", "className"]);

      var prefixCls = getPrefixCls('list', customizePrefixCls);
      var actionsContent = actions && actions.length > 0 && React.createElement("ul", {
        className: "".concat(prefixCls, "-item-action"),
        key: "actions"
      }, actions.map(function (action, i) {
        return React.createElement("li", {
          key: "".concat(prefixCls, "-item-action-").concat(i)
        }, action, i !== actions.length - 1 && React.createElement("em", {
          className: "".concat(prefixCls, "-item-action-split")
        }));
      }));
      var Tag = grid ? 'div' : 'li';
      var itemChildren = React.createElement(Tag, _extends({}, others, {
        // `li` element `onCopy` prop args is not same as `div`
        className: (0, _classnames["default"])("".concat(prefixCls, "-item"), className, _defineProperty({}, "".concat(prefixCls, "-item-no-flex"), !_this.isFlexMode()))
      }), itemLayout === 'vertical' && extra ? [React.createElement("div", {
        className: "".concat(prefixCls, "-item-main"),
        key: "content"
      }, children, actionsContent), React.createElement("div", {
        className: "".concat(prefixCls, "-item-extra"),
        key: "extra"
      }, extra)] : [children, actionsContent, (0, _reactNode.cloneElement)(extra, {
        key: 'extra'
      })]);
      return grid ? React.createElement(_grid.Col, {
        span: getGrid(grid, 'column'),
        xs: getGrid(grid, 'xs'),
        sm: getGrid(grid, 'sm'),
        md: getGrid(grid, 'md'),
        lg: getGrid(grid, 'lg'),
        xl: getGrid(grid, 'xl'),
        xxl: getGrid(grid, 'xxl')
      }, itemChildren) : itemChildren;
    };

    return _this;
  }

  _createClass(Item, [{
    key: "isItemContainsTextNode",
    value: function isItemContainsTextNode() {
      var children = this.props.children;
      var result;
      React.Children.forEach(children, function (element) {
        if (typeof element === 'string') {
          result = true;
        }
      });
      return result;
    }
  }, {
    key: "isFlexMode",
    value: function isFlexMode() {
      var extra = this.props.extra;
      var itemLayout = this.context.itemLayout;

      if (itemLayout === 'vertical') {
        return !!extra;
      }

      return !this.isItemContainsTextNode();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderItem);
    }
  }]);

  return Item;
}(React.Component);

exports["default"] = Item;
Item.Meta = Meta;
Item.contextTypes = {
  grid: PropTypes.any,
  itemLayout: PropTypes.string
};
//# sourceMappingURL=Item.js.map


/***/ }),

/***/ 711:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cloneElement = cloneElement;

var React = _interopRequireWildcard(__webpack_require__(0));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function cloneElement(element) {
  if (!React.isValidElement(element)) return element;

  for (var _len = arguments.length, restArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    restArgs[_key - 1] = arguments[_key];
  }

  return React.cloneElement.apply(React, [element].concat(restArgs));
}
//# sourceMappingURL=reactNode.js.map


/***/ }),

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var PropTypes = _interopRequireWildcard(__webpack_require__(2));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _reactLifecyclesCompat = __webpack_require__(9);

var _omit = _interopRequireDefault(__webpack_require__(14));

var _icon = _interopRequireDefault(__webpack_require__(40));

var _configProvider = __webpack_require__(21);

var _wave = _interopRequireDefault(__webpack_require__(713));

var _type = __webpack_require__(92);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);

function isString(str) {
  return typeof str === 'string';
}

function spaceChildren(children, needInserted) {
  var isPrevChildPure = false;
  var childList = [];
  React.Children.forEach(children, function (child) {
    var type = _typeof(child);

    var isCurrentChildPure = type === 'string' || type === 'number';

    if (isPrevChildPure && isCurrentChildPure) {
      var lastIndex = childList.length - 1;
      var lastChild = childList[lastIndex];
      childList[lastIndex] = "".concat(lastChild).concat(child);
    } else {
      childList.push(child);
    }

    isPrevChildPure = isCurrentChildPure;
  }); // Pass to React.Children.map to auto fill key

  return React.Children.map(childList, function (child) {
    return insertSpace(child, needInserted);
  });
} // Insert one space between two chinese characters automatically.


function insertSpace(child, needInserted) {
  // Check the child if is undefined or null.
  if (child == null) {
    return;
  }

  var SPACE = needInserted ? ' ' : ''; // strictNullChecks oops.

  if (typeof child !== 'string' && typeof child !== 'number' && isString(child.type) && isTwoCNChar(child.props.children)) {
    return React.cloneElement(child, {}, child.props.children.split('').join(SPACE));
  }

  if (typeof child === 'string') {
    if (isTwoCNChar(child)) {
      child = child.split('').join(SPACE);
    }

    return React.createElement("span", null, child);
  }

  return child;
}

var ButtonTypes = (0, _type.tuple)('default', 'primary', 'ghost', 'dashed', 'danger', 'link');
var ButtonShapes = (0, _type.tuple)('circle', 'circle-outline', 'round');
var ButtonSizes = (0, _type.tuple)('large', 'default', 'small');
var ButtonHTMLTypes = (0, _type.tuple)('submit', 'button', 'reset');

var Button =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button(props) {
    var _this;

    _classCallCheck(this, Button);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Button).call(this, props));

    _this.saveButtonRef = function (node) {
      _this.buttonNode = node;
    };

    _this.handleClick = function (e) {
      var loading = _this.state.loading;
      var onClick = _this.props.onClick;

      if (!!loading) {
        return;
      }

      if (onClick) {
        onClick(e);
      }
    };

    _this.renderButton = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls,
          autoInsertSpaceInButton = _ref.autoInsertSpaceInButton;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          type = _a.type,
          shape = _a.shape,
          size = _a.size,
          className = _a.className,
          children = _a.children,
          icon = _a.icon,
          ghost = _a.ghost,
          _loadingProp = _a.loading,
          block = _a.block,
          rest = __rest(_a, ["prefixCls", "type", "shape", "size", "className", "children", "icon", "ghost", "loading", "block"]);

      var _this$state = _this.state,
          loading = _this$state.loading,
          hasTwoCNChar = _this$state.hasTwoCNChar;
      var prefixCls = getPrefixCls('btn', customizePrefixCls);
      var autoInsertSpace = autoInsertSpaceInButton !== false; // large => lg
      // small => sm

      var sizeCls = '';

      switch (size) {
        case 'large':
          sizeCls = 'lg';
          break;

        case 'small':
          sizeCls = 'sm';
          break;

        default:
          break;
      }

      var classes = (0, _classnames["default"])(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(type), type), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(shape), shape), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), _defineProperty(_classNames, "".concat(prefixCls, "-icon-only"), !children && children !== 0 && icon), _defineProperty(_classNames, "".concat(prefixCls, "-loading"), loading), _defineProperty(_classNames, "".concat(prefixCls, "-background-ghost"), ghost), _defineProperty(_classNames, "".concat(prefixCls, "-two-chinese-chars"), hasTwoCNChar && autoInsertSpace), _defineProperty(_classNames, "".concat(prefixCls, "-block"), block), _classNames));
      var iconType = loading ? 'loading' : icon;
      var iconNode = iconType ? React.createElement(_icon["default"], {
        type: iconType
      }) : null;
      var kids = children || children === 0 ? spaceChildren(children, _this.isNeedInserted() && autoInsertSpace) : null;
      var linkButtonRestProps = (0, _omit["default"])(rest, ['htmlType']);

      if (linkButtonRestProps.href !== undefined) {
        return React.createElement("a", _extends({}, linkButtonRestProps, {
          className: classes,
          onClick: _this.handleClick,
          ref: _this.saveButtonRef
        }), iconNode, kids);
      } // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.


      var _b = rest,
          htmlType = _b.htmlType,
          otherProps = __rest(_b, ["htmlType"]);

      var buttonNode = React.createElement("button", _extends({}, otherProps, {
        type: htmlType,
        className: classes,
        onClick: _this.handleClick,
        ref: _this.saveButtonRef
      }), iconNode, kids);

      if (type === 'link') {
        return buttonNode;
      }

      return React.createElement(_wave["default"], null, buttonNode);
    };

    _this.state = {
      loading: props.loading,
      hasTwoCNChar: false
    };
    return _this;
  }

  _createClass(Button, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fixTwoCNChar();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      this.fixTwoCNChar();

      if (prevProps.loading && typeof prevProps.loading !== 'boolean') {
        clearTimeout(this.delayTimeout);
      }

      var loading = this.props.loading;

      if (loading && typeof loading !== 'boolean' && loading.delay) {
        this.delayTimeout = window.setTimeout(function () {
          return _this2.setState({
            loading: loading
          });
        }, loading.delay);
      } else if (prevProps.loading === this.props.loading) {
        return;
      } else {
        this.setState({
          loading: loading
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.delayTimeout) {
        clearTimeout(this.delayTimeout);
      }
    }
  }, {
    key: "fixTwoCNChar",
    value: function fixTwoCNChar() {
      // Fix for HOC usage like <FormatMessage />
      if (!this.buttonNode) {
        return;
      }

      var buttonText = this.buttonNode.textContent || this.buttonNode.innerText;

      if (this.isNeedInserted() && isTwoCNChar(buttonText)) {
        if (!this.state.hasTwoCNChar) {
          this.setState({
            hasTwoCNChar: true
          });
        }
      } else if (this.state.hasTwoCNChar) {
        this.setState({
          hasTwoCNChar: false
        });
      }
    }
  }, {
    key: "isNeedInserted",
    value: function isNeedInserted() {
      var _this$props = this.props,
          icon = _this$props.icon,
          children = _this$props.children;
      return React.Children.count(children) === 1 && !icon;
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderButton);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.loading instanceof Boolean) {
        return _extends({}, prevState, {
          loading: nextProps.loading
        });
      }

      return null;
    }
  }]);

  return Button;
}(React.Component);

Button.__ANT_BUTTON = true;
Button.defaultProps = {
  loading: false,
  ghost: false,
  block: false,
  htmlType: 'button'
};
Button.propTypes = {
  type: PropTypes.string,
  shape: PropTypes.oneOf(ButtonShapes),
  size: PropTypes.oneOf(ButtonSizes),
  htmlType: PropTypes.oneOf(ButtonHTMLTypes),
  onClick: PropTypes.func,
  loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  className: PropTypes.string,
  icon: PropTypes.string,
  block: PropTypes.bool
};
(0, _reactLifecyclesCompat.polyfill)(Button);
var _default = Button;
exports["default"] = _default;
//# sourceMappingURL=button.js.map


/***/ }),

/***/ 713:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _reactDom = __webpack_require__(11);

var _Event = _interopRequireDefault(__webpack_require__(714));

var _raf = _interopRequireDefault(__webpack_require__(391));

var _configProvider = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleForPesudo; // Where el is the DOM element you'd like to test for visibility

function isHidden(element) {
  if (process.env.NODE_ENV === 'test') {
    return false;
  }

  return !element || element.offsetParent === null;
}

var Wave =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Wave, _React$Component);

  function Wave() {
    var _this;

    _classCallCheck(this, Wave);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Wave).apply(this, arguments));
    _this.animationStart = false;
    _this.destroy = false;

    _this.onClick = function (node, waveColor) {
      if (!node || isHidden(node) || node.className.indexOf('-leave') >= 0) {
        return;
      }

      var insertExtraNode = _this.props.insertExtraNode;
      _this.extraNode = document.createElement('div');
      var extraNode = _this.extraNode;
      extraNode.className = 'ant-click-animating-node';

      var attributeName = _this.getAttributeName();

      node.setAttribute(attributeName, 'true'); // Not white or transparnt or grey

      styleForPesudo = styleForPesudo || document.createElement('style');

      if (waveColor && waveColor !== '#ffffff' && waveColor !== 'rgb(255, 255, 255)' && _this.isNotGrey(waveColor) && !/rgba\(\d*, \d*, \d*, 0\)/.test(waveColor) && // any transparent rgba color
      waveColor !== 'transparent') {
        // Add nonce if CSP exist
        if (_this.csp && _this.csp.nonce) {
          styleForPesudo.nonce = _this.csp.nonce;
        }

        extraNode.style.borderColor = waveColor;
        styleForPesudo.innerHTML = "\n      [ant-click-animating-without-extra-node='true']::after, .ant-click-animating-node {\n        --antd-wave-shadow-color: ".concat(waveColor, ";\n      }");

        if (!document.body.contains(styleForPesudo)) {
          document.body.appendChild(styleForPesudo);
        }
      }

      if (insertExtraNode) {
        node.appendChild(extraNode);
      }

      _Event["default"].addStartEventListener(node, _this.onTransitionStart);

      _Event["default"].addEndEventListener(node, _this.onTransitionEnd);
    };

    _this.bindAnimationEvent = function (node) {
      if (!node || !node.getAttribute || node.getAttribute('disabled') || node.className.indexOf('disabled') >= 0) {
        return;
      }

      var onClick = function onClick(e) {
        // Fix radio button click twice
        if (e.target.tagName === 'INPUT' || isHidden(e.target)) {
          return;
        }

        _this.resetEffect(node); // Get wave color from target


        var waveColor = getComputedStyle(node).getPropertyValue('border-top-color') || // Firefox Compatible
        getComputedStyle(node).getPropertyValue('border-color') || getComputedStyle(node).getPropertyValue('background-color');
        _this.clickWaveTimeoutId = window.setTimeout(function () {
          return _this.onClick(node, waveColor);
        }, 0);

        _raf["default"].cancel(_this.animationStartId);

        _this.animationStart = true; // Render to trigger transition event cost 3 frames. Let's delay 10 frames to reset this.

        _this.animationStartId = (0, _raf["default"])(function () {
          _this.animationStart = false;
        }, 10);
      };

      node.addEventListener('click', onClick, true);
      return {
        cancel: function cancel() {
          node.removeEventListener('click', onClick, true);
        }
      };
    };

    _this.onTransitionStart = function (e) {
      if (_this.destroy) return;
      var node = (0, _reactDom.findDOMNode)(_assertThisInitialized(_this));

      if (!e || e.target !== node) {
        return;
      }

      if (!_this.animationStart) {
        _this.resetEffect(node);
      }
    };

    _this.onTransitionEnd = function (e) {
      if (!e || e.animationName !== 'fadeEffect') {
        return;
      }

      _this.resetEffect(e.target);
    };

    _this.renderWave = function (_ref) {
      var csp = _ref.csp;
      var children = _this.props.children;
      _this.csp = csp;
      return children;
    };

    return _this;
  }

  _createClass(Wave, [{
    key: "isNotGrey",
    value: function isNotGrey(color) {
      var match = (color || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);

      if (match && match[1] && match[2] && match[3]) {
        return !(match[1] === match[2] && match[2] === match[3]);
      }

      return true;
    }
  }, {
    key: "getAttributeName",
    value: function getAttributeName() {
      var insertExtraNode = this.props.insertExtraNode;
      return insertExtraNode ? 'ant-click-animating' : 'ant-click-animating-without-extra-node';
    }
  }, {
    key: "resetEffect",
    value: function resetEffect(node) {
      if (!node || node === this.extraNode || !(node instanceof Element)) {
        return;
      }

      var insertExtraNode = this.props.insertExtraNode;
      var attributeName = this.getAttributeName();
      node.setAttribute(attributeName, 'false'); // edge has bug on `removeAttribute` #14466

      this.removeExtraStyleNode();

      if (insertExtraNode && this.extraNode && node.contains(this.extraNode)) {
        node.removeChild(this.extraNode);
      }

      _Event["default"].removeStartEventListener(node, this.onTransitionStart);

      _Event["default"].removeEndEventListener(node, this.onTransitionEnd);
    }
  }, {
    key: "removeExtraStyleNode",
    value: function removeExtraStyleNode() {
      if (styleForPesudo) {
        styleForPesudo.innerHTML = '';
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var node = (0, _reactDom.findDOMNode)(this);

      if (!node || node.nodeType !== 1) {
        return;
      }

      this.instance = this.bindAnimationEvent(node);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.instance) {
        this.instance.cancel();
      }

      if (this.clickWaveTimeoutId) {
        clearTimeout(this.clickWaveTimeoutId);
      }

      this.destroy = true;
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderWave);
    }
  }]);

  return Wave;
}(React.Component);

exports["default"] = Wave;
//# sourceMappingURL=wave.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),

/***/ 714:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var START_EVENT_NAME_MAP = {
  transitionstart: {
    transition: 'transitionstart',
    WebkitTransition: 'webkitTransitionStart',
    MozTransition: 'mozTransitionStart',
    OTransition: 'oTransitionStart',
    msTransition: 'MSTransitionStart'
  },

  animationstart: {
    animation: 'animationstart',
    WebkitAnimation: 'webkitAnimationStart',
    MozAnimation: 'mozAnimationStart',
    OAnimation: 'oAnimationStart',
    msAnimation: 'MSAnimationStart'
  }
};

var END_EVENT_NAME_MAP = {
  transitionend: {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd'
  },

  animationend: {
    animation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    OAnimation: 'oAnimationEnd',
    msAnimation: 'MSAnimationEnd'
  }
};

var startEvents = [];
var endEvents = [];

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  if (!('AnimationEvent' in window)) {
    delete START_EVENT_NAME_MAP.animationstart.animation;
    delete END_EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete START_EVENT_NAME_MAP.transitionstart.transition;
    delete END_EVENT_NAME_MAP.transitionend.transition;
  }

  function process(EVENT_NAME_MAP, events) {
    for (var baseEventName in EVENT_NAME_MAP) {
      if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
        var baseEvents = EVENT_NAME_MAP[baseEventName];
        for (var styleName in baseEvents) {
          if (styleName in style) {
            events.push(baseEvents[styleName]);
            break;
          }
        }
      }
    }
  }

  process(START_EVENT_NAME_MAP, startEvents);
  process(END_EVENT_NAME_MAP, endEvents);
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  detectEvents();
}

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var TransitionEvents = {
  // Start events
  startEvents: startEvents,

  addStartEventListener: function addStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    startEvents.forEach(function (startEvent) {
      addEventListener(node, startEvent, eventListener);
    });
  },
  removeStartEventListener: function removeStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      return;
    }
    startEvents.forEach(function (startEvent) {
      removeEventListener(node, startEvent, eventListener);
    });
  },


  // End events
  endEvents: endEvents,

  addEndEventListener: function addEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },
  removeEndEventListener: function removeEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};

exports['default'] = TransitionEvents;
module.exports = exports['default'];

/***/ }),

/***/ 715:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _configProvider = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var ButtonGroup = function ButtonGroup(props) {
  return React.createElement(_configProvider.ConfigConsumer, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;

    var customizePrefixCls = props.prefixCls,
        size = props.size,
        className = props.className,
        others = __rest(props, ["prefixCls", "size", "className"]);

    var prefixCls = getPrefixCls('btn-group', customizePrefixCls); // large => lg
    // small => sm

    var sizeCls = '';

    switch (size) {
      case 'large':
        sizeCls = 'lg';
        break;

      case 'small':
        sizeCls = 'sm';

      default:
        break;
    }

    var classes = (0, _classnames["default"])(prefixCls, _defineProperty({}, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), className);
    return React.createElement("div", _extends({}, others, {
      className: classes
    }));
  });
};

var _default = ButtonGroup;
exports["default"] = _default;
//# sourceMappingURL=button-group.js.map


/***/ }),

/***/ 716:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Input = _interopRequireDefault(__webpack_require__(160));

var _Group = _interopRequireDefault(__webpack_require__(717));

var _Search = _interopRequireDefault(__webpack_require__(718));

var _TextArea = _interopRequireDefault(__webpack_require__(719));

var _Password = _interopRequireDefault(__webpack_require__(722));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_Input["default"].Group = _Group["default"];
_Input["default"].Search = _Search["default"];
_Input["default"].TextArea = _TextArea["default"];
_Input["default"].Password = _Password["default"];
var _default = _Input["default"];
exports["default"] = _default;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 717:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _configProvider = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Group = function Group(props) {
  return React.createElement(_configProvider.ConfigConsumer, null, function (_ref) {
    var _classNames;

    var getPrefixCls = _ref.getPrefixCls;
    var customizePrefixCls = props.prefixCls,
        _props$className = props.className,
        className = _props$className === void 0 ? '' : _props$className;
    var prefixCls = getPrefixCls('input-group', customizePrefixCls);
    var cls = (0, _classnames["default"])(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-lg"), props.size === 'large'), _defineProperty(_classNames, "".concat(prefixCls, "-sm"), props.size === 'small'), _defineProperty(_classNames, "".concat(prefixCls, "-compact"), props.compact), _classNames), className);
    return React.createElement("span", {
      className: cls,
      style: props.style,
      onMouseEnter: props.onMouseEnter,
      onMouseLeave: props.onMouseLeave,
      onFocus: props.onFocus,
      onBlur: props.onBlur
    }, props.children);
  });
};

var _default = Group;
exports["default"] = _default;
//# sourceMappingURL=Group.js.map


/***/ }),

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _Input = _interopRequireDefault(__webpack_require__(160));

var _icon = _interopRequireDefault(__webpack_require__(40));

var _button = _interopRequireDefault(__webpack_require__(402));

var _configProvider = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var Search =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search() {
    var _this;

    _classCallCheck(this, Search);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Search).apply(this, arguments));

    _this.onSearch = function (e) {
      var onSearch = _this.props.onSearch;

      if (onSearch) {
        onSearch(_this.input.input.value, e);
      }

      _this.input.focus();
    };

    _this.saveInput = function (node) {
      _this.input = node;
    };

    _this.renderSuffix = function (prefixCls) {
      var _this$props = _this.props,
          suffix = _this$props.suffix,
          enterButton = _this$props.enterButton;
      if (enterButton) return suffix;
      var node = React.createElement(_icon["default"], {
        className: "".concat(prefixCls, "-icon"),
        type: "search",
        key: "searchIcon",
        onClick: _this.onSearch
      });

      if (suffix) {
        var cloneSuffix = suffix;

        if (React.isValidElement(cloneSuffix) && !cloneSuffix.key) {
          cloneSuffix = React.cloneElement(cloneSuffix, {
            key: 'originSuffix'
          });
        }

        return [cloneSuffix, node];
      }

      return node;
    };

    _this.renderAddonAfter = function (prefixCls) {
      var _this$props2 = _this.props,
          enterButton = _this$props2.enterButton,
          size = _this$props2.size,
          disabled = _this$props2.disabled,
          addonAfter = _this$props2.addonAfter;
      if (!enterButton) return addonAfter;
      var btnClassName = "".concat(prefixCls, "-button");
      var button;
      var enterButtonAsElement = enterButton;

      if (enterButtonAsElement.type === _button["default"] || enterButtonAsElement.type === 'button') {
        button = React.cloneElement(enterButtonAsElement, _extends({
          onClick: _this.onSearch,
          key: 'enterButton'
        }, enterButtonAsElement.type === _button["default"] ? {
          className: btnClassName,
          size: size
        } : {}));
      } else {
        button = React.createElement(_button["default"], {
          className: btnClassName,
          type: "primary",
          size: size,
          disabled: disabled,
          key: "enterButton",
          onClick: _this.onSearch
        }, enterButton === true ? React.createElement(_icon["default"], {
          type: "search"
        }) : enterButton);
      }

      if (addonAfter) {
        return [button, addonAfter];
      }

      return button;
    };

    _this.renderSearch = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          customizeInputPrefixCls = _a.inputPrefixCls,
          size = _a.size,
          enterButton = _a.enterButton,
          className = _a.className,
          restProps = __rest(_a, ["prefixCls", "inputPrefixCls", "size", "enterButton", "className"]);

      delete restProps.onSearch;
      var prefixCls = getPrefixCls('input-search', customizePrefixCls);
      var inputPrefixCls = getPrefixCls('input', customizeInputPrefixCls);
      var inputClassName;

      if (enterButton) {
        var _classNames;

        inputClassName = (0, _classnames["default"])(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-enter-button"), !!enterButton), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(size), !!size), _classNames));
      } else {
        inputClassName = (0, _classnames["default"])(prefixCls, className);
      }

      return React.createElement(_Input["default"], _extends({
        onPressEnter: _this.onSearch
      }, restProps, {
        size: size,
        prefixCls: inputPrefixCls,
        addonAfter: _this.renderAddonAfter(prefixCls),
        suffix: _this.renderSuffix(prefixCls),
        ref: _this.saveInput,
        className: inputClassName
      }));
    };

    return _this;
  }

  _createClass(Search, [{
    key: "focus",
    value: function focus() {
      this.input.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.input.blur();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderSearch);
    }
  }]);

  return Search;
}(React.Component);

exports["default"] = Search;
Search.defaultProps = {
  enterButton: false
};
//# sourceMappingURL=Search.js.map


/***/ }),

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _omit = _interopRequireDefault(__webpack_require__(14));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _reactLifecyclesCompat = __webpack_require__(9);

var _calculateNodeHeight = _interopRequireDefault(__webpack_require__(720));

var _configProvider = __webpack_require__(21);

var _resizeObserver = _interopRequireDefault(__webpack_require__(721));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

function onNextFrame(cb) {
  if (window.requestAnimationFrame) {
    return window.requestAnimationFrame(cb);
  }

  return window.setTimeout(cb, 1);
}

function clearNextFrameAction(nextFrameId) {
  if (window.cancelAnimationFrame) {
    window.cancelAnimationFrame(nextFrameId);
  } else {
    window.clearTimeout(nextFrameId);
  }
}

var TextArea =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TextArea, _React$Component);

  function TextArea() {
    var _this;

    _classCallCheck(this, TextArea);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextArea).apply(this, arguments));
    _this.state = {
      textareaStyles: {}
    };

    _this.resizeOnNextFrame = function () {
      if (_this.nextFrameActionId) {
        clearNextFrameAction(_this.nextFrameActionId);
      }

      _this.nextFrameActionId = onNextFrame(_this.resizeTextarea);
    };

    _this.resizeTextarea = function () {
      var autosize = _this.props.autosize;

      if (!autosize || !_this.textAreaRef) {
        return;
      }

      var minRows = autosize.minRows,
          maxRows = autosize.maxRows;
      var textareaStyles = (0, _calculateNodeHeight["default"])(_this.textAreaRef, false, minRows, maxRows);

      _this.setState({
        textareaStyles: textareaStyles
      });
    };

    _this.handleTextareaChange = function (e) {
      if (!('value' in _this.props)) {
        _this.resizeTextarea();
      }

      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(e);
      }
    };

    _this.handleKeyDown = function (e) {
      var _this$props = _this.props,
          onPressEnter = _this$props.onPressEnter,
          onKeyDown = _this$props.onKeyDown;

      if (e.keyCode === 13 && onPressEnter) {
        onPressEnter(e);
      }

      if (onKeyDown) {
        onKeyDown(e);
      }
    };

    _this.saveTextAreaRef = function (textArea) {
      _this.textAreaRef = textArea;
    };

    _this.renderTextArea = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;
      var _this$props2 = _this.props,
          customizePrefixCls = _this$props2.prefixCls,
          className = _this$props2.className,
          disabled = _this$props2.disabled,
          autosize = _this$props2.autosize;

      var props = __rest(_this.props, []);

      var otherProps = (0, _omit["default"])(props, ['prefixCls', 'onPressEnter', 'autosize']);
      var prefixCls = getPrefixCls('input', customizePrefixCls);
      var cls = (0, _classnames["default"])(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-disabled"), disabled));

      var style = _extends({}, props.style, _this.state.textareaStyles); // Fix https://github.com/ant-design/ant-design/issues/6776
      // Make sure it could be reset when using form.getFieldDecorator


      if ('value' in otherProps) {
        otherProps.value = otherProps.value || '';
      }

      return React.createElement(_resizeObserver["default"], {
        onResize: _this.resizeOnNextFrame,
        disabled: !autosize
      }, React.createElement("textarea", _extends({}, otherProps, {
        className: cls,
        style: style,
        onKeyDown: _this.handleKeyDown,
        onChange: _this.handleTextareaChange,
        ref: _this.saveTextAreaRef
      })));
    };

    return _this;
  }

  _createClass(TextArea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.resizeTextarea();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // Re-render with the new content then recalculate the height as required.
      if (prevProps.value !== this.props.value) {
        this.resizeOnNextFrame();
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      this.textAreaRef.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.textAreaRef.blur();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderTextArea);
    }
  }]);

  return TextArea;
}(React.Component);

(0, _reactLifecyclesCompat.polyfill)(TextArea);
var _default = TextArea;
exports["default"] = _default;
//# sourceMappingURL=TextArea.js.map


/***/ }),

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateNodeStyling = calculateNodeStyling;
exports["default"] = calculateNodeHeight;
// Thanks to https://github.com/andreypopp/react-textarea-autosize/

/**
 * calculateNodeHeight(uiTextNode, useCache = false)
 */
var HIDDEN_TEXTAREA_STYLE = "\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n";
var SIZING_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'font-variant', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];
var computedStyleCache = {};
var hiddenTextarea;

function calculateNodeStyling(node) {
  var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var nodeRef = node.getAttribute('id') || node.getAttribute('data-reactid') || node.getAttribute('name');

  if (useCache && computedStyleCache[nodeRef]) {
    return computedStyleCache[nodeRef];
  }

  var style = window.getComputedStyle(node);
  var boxSizing = style.getPropertyValue('box-sizing') || style.getPropertyValue('-moz-box-sizing') || style.getPropertyValue('-webkit-box-sizing');
  var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));
  var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));
  var sizingStyle = SIZING_STYLE.map(function (name) {
    return "".concat(name, ":").concat(style.getPropertyValue(name));
  }).join(';');
  var nodeInfo = {
    sizingStyle: sizingStyle,
    paddingSize: paddingSize,
    borderSize: borderSize,
    boxSizing: boxSizing
  };

  if (useCache && nodeRef) {
    computedStyleCache[nodeRef] = nodeInfo;
  }

  return nodeInfo;
}

function calculateNodeHeight(uiTextNode) {
  var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var minRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var maxRows = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    document.body.appendChild(hiddenTextarea);
  } // Fix wrap="off" issue
  // https://github.com/ant-design/ant-design/issues/6577


  if (uiTextNode.getAttribute('wrap')) {
    hiddenTextarea.setAttribute('wrap', uiTextNode.getAttribute('wrap'));
  } else {
    hiddenTextarea.removeAttribute('wrap');
  } // Copy all CSS properties that have an impact on the height of the content in
  // the textbox


  var _calculateNodeStyling = calculateNodeStyling(uiTextNode, useCache),
      paddingSize = _calculateNodeStyling.paddingSize,
      borderSize = _calculateNodeStyling.borderSize,
      boxSizing = _calculateNodeStyling.boxSizing,
      sizingStyle = _calculateNodeStyling.sizingStyle; // Need to have the overflow attribute to hide the scrollbar otherwise
  // text-lines will not calculated properly as the shadow will technically be
  // narrower for content


  hiddenTextarea.setAttribute('style', "".concat(sizingStyle, ";").concat(HIDDEN_TEXTAREA_STYLE));
  hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || '';
  var minHeight = Number.MIN_SAFE_INTEGER;
  var maxHeight = Number.MAX_SAFE_INTEGER;
  var height = hiddenTextarea.scrollHeight;
  var overflowY;

  if (boxSizing === 'border-box') {
    // border-box: add border, since height = content + padding + border
    height = height + borderSize;
  } else if (boxSizing === 'content-box') {
    // remove padding, since height = content
    height = height - paddingSize;
  }

  if (minRows !== null || maxRows !== null) {
    // measure height of a textarea with a single row
    hiddenTextarea.value = ' ';
    var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;

    if (minRows !== null) {
      minHeight = singleRowHeight * minRows;

      if (boxSizing === 'border-box') {
        minHeight = minHeight + paddingSize + borderSize;
      }

      height = Math.max(minHeight, height);
    }

    if (maxRows !== null) {
      maxHeight = singleRowHeight * maxRows;

      if (boxSizing === 'border-box') {
        maxHeight = maxHeight + paddingSize + borderSize;
      }

      overflowY = height > maxHeight ? '' : 'hidden';
      height = Math.min(maxHeight, height);
    }
  }

  return {
    height: height,
    minHeight: minHeight,
    maxHeight: maxHeight,
    overflowY: overflowY
  };
}
//# sourceMappingURL=calculateNodeHeight.js.map


/***/ }),

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _reactDom = __webpack_require__(11);

var _resizeObserverPolyfill = _interopRequireDefault(__webpack_require__(89));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ReactResizeObserver =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ReactResizeObserver, _React$Component);

  function ReactResizeObserver() {
    var _this;

    _classCallCheck(this, ReactResizeObserver);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactResizeObserver).apply(this, arguments));
    _this.resizeObserver = null;

    _this.onResize = function () {
      var onResize = _this.props.onResize;

      if (onResize) {
        onResize();
      }
    };

    return _this;
  }

  _createClass(ReactResizeObserver, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.onComponentUpdated();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.onComponentUpdated();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroyObserver();
    }
  }, {
    key: "onComponentUpdated",
    value: function onComponentUpdated() {
      var disabled = this.props.disabled;
      var element = (0, _reactDom.findDOMNode)(this);

      if (!this.resizeObserver && !disabled && element) {
        // Add resize observer
        this.resizeObserver = new _resizeObserverPolyfill["default"](this.onResize);
        this.resizeObserver.observe(element);
      } else if (disabled) {
        // Remove resize observer
        this.destroyObserver();
      }
    }
  }, {
    key: "destroyObserver",
    value: function destroyObserver() {
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
        this.resizeObserver = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$children = this.props.children,
          children = _this$props$children === void 0 ? null : _this$props$children;
      return children;
    }
  }]);

  return ReactResizeObserver;
}(React.Component);

var _default = ReactResizeObserver;
exports["default"] = _default;
//# sourceMappingURL=resizeObserver.js.map


/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _Input = _interopRequireDefault(__webpack_require__(160));

var _icon = _interopRequireDefault(__webpack_require__(40));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var ActionMap = {
  click: 'onClick',
  hover: 'onMouseOver'
};

var Password =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Password, _React$Component);

  function Password() {
    var _this;

    _classCallCheck(this, Password);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Password).apply(this, arguments));
    _this.state = {
      visible: false
    };

    _this.onChange = function () {
      _this.setState({
        visible: !_this.state.visible
      });
    };

    return _this;
  }

  _createClass(Password, [{
    key: "getIcon",
    value: function getIcon() {
      var _iconProps;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          action = _this$props.action;
      var iconTrigger = ActionMap[action] || '';
      var iconProps = (_iconProps = {}, _defineProperty(_iconProps, iconTrigger, this.onChange), _defineProperty(_iconProps, "className", "".concat(prefixCls, "-icon")), _defineProperty(_iconProps, "type", this.state.visible ? 'eye' : 'eye-invisible'), _defineProperty(_iconProps, "key", 'passwordIcon'), _defineProperty(_iconProps, "onMouseDown", function onMouseDown(e) {
        // Prevent focused state lost
        // https://github.com/ant-design/ant-design/issues/15173
        e.preventDefault();
      }), _iconProps);
      return React.createElement(_icon["default"], iconProps);
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
          className = _a.className,
          prefixCls = _a.prefixCls,
          inputPrefixCls = _a.inputPrefixCls,
          size = _a.size,
          suffix = _a.suffix,
          visibilityToggle = _a.visibilityToggle,
          restProps = __rest(_a, ["className", "prefixCls", "inputPrefixCls", "size", "suffix", "visibilityToggle"]);

      var suffixIcon = visibilityToggle && this.getIcon();
      var inputClassName = (0, _classnames["default"])(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-").concat(size), !!size));
      return React.createElement(_Input["default"], _extends({}, restProps, {
        type: this.state.visible ? 'text' : 'password',
        size: size,
        className: inputClassName,
        prefixCls: inputPrefixCls,
        suffix: suffixIcon
      }));
    }
  }]);

  return Password;
}(React.Component);

exports["default"] = Password;
Password.defaultProps = {
  inputPrefixCls: 'ant-input',
  prefixCls: 'ant-input-password',
  action: 'click',
  visibilityToggle: true
};
//# sourceMappingURL=Password.js.map


/***/ }),

/***/ 723:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(31);

__webpack_require__(724);

__webpack_require__(403);

__webpack_require__(726);

__webpack_require__(728);

__webpack_require__(732);
//# sourceMappingURL=css.js.map


/***/ }),

/***/ 724:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 725:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 726:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(31);

__webpack_require__(727);
//# sourceMappingURL=css.js.map


/***/ }),

/***/ 727:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 728:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(31);

__webpack_require__(729);

__webpack_require__(730);
//# sourceMappingURL=css.js.map


/***/ }),

/***/ 729:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 730:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(31);

__webpack_require__(731);

__webpack_require__(403);
//# sourceMappingURL=css.js.map


/***/ }),

/***/ 731:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 732:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(31);

__webpack_require__(733);
//# sourceMappingURL=css.js.map


/***/ }),

/***/ 733:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 734:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 735:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(31);

__webpack_require__(736);

__webpack_require__(404);
//# sourceMappingURL=css.js.map


/***/ }),

/***/ 736:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 737:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(738);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFound = function (_Component) {
  _inherits(NotFound, _Component);

  function NotFound() {
    _classCallCheck(this, NotFound);

    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
  }

  _createClass(NotFound, [{
    key: 'render',


    // onClick = () => {
    //   History.push('/Home');
    // }

    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _index2.default.forbiddenWrapper },
        _react2.default.createElement(
          'div',
          { className: _index2.default.forbiddenInner },
          _react2.default.createElement('div', { className: _index2.default.forbiddenMoon }),
          _react2.default.createElement(
            'div',
            { className: _index2.default.forbiddenTextBox },
            _react2.default.createElement(
              'p',
              { className: _index2.default.forbiddenStatus },
              '404'
            ),
            _react2.default.createElement(
              'p',
              { className: _index2.default.forbiddenErr },
              '\u5F88\u62B1\u6B49,\u60A8\u8BBF\u95EE\u7684\u9875\u9762\u627E\u4E0D\u5230\u4E86'
            ),
            _react2.default.createElement(
              'div',
              { className: _index2.default.goHome, id: 'rbacInfo' },
              _react2.default.createElement(
                'a',
                { onClick: this.onClick },
                '\u56DE\u5230\u9996\u9875'
              )
            )
          ),
          _react2.default.createElement('div', { className: _index2.default.forbiddenCloudLeft }),
          _react2.default.createElement('div', { className: _index2.default.forbiddenCloudRight })
        )
      );
    }
  }]);

  return NotFound;
}(_react.Component);

exports.default = NotFound;

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"forbiddenWrapper":"_2fCkHC4R9eJ5UnanV9q9Xu","forbiddenInner":"_1qoykXtC7HjQ9IHedv__CB","goHome":"iBH-O1XZKiCJg5DHg8vEc","forbiddenMoon":"_3Usw7bM4ja6S2wON8cBbiX","forbiddenTextBox":"_2jttFAuZuM4lGHpzBMqfyC","forbiddenStatus":"_1AZcb4Gt8WSIAwmpn8t67P","forbiddenErr":"_29oSYG9idrjttJKpI7Oe-F","forbiddenRbacInfo":"_1mIBIGFvNZf5SMwGIiSOOn","forbiddenTitle":"_2ARkbTM8IwC_W6SpvL2mBP","forbiddenRbacName":"_3KkXm_58mOaU7-YLW-61HI","forbiddenEmail":"_2dy_wDpFXCEthqk9kPukck","forbiddenBtn":"_2TEILbMf05omD17iHLmJI-","forbiddenBtnBack":"_3iPtIOHD-GaUOY_oQfB5TI","forbiddenCloudLeft":"_1jD80ROQLePhJLXxU-vumV","forbiddenCloudRight":"ScQ-L9ep7_qFTgPyAOZwZ"};

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tupleNum = exports.tuple = void 0;

// https://stackoverflow.com/questions/46176165/ways-to-get-string-literal-type-of-array-values-without-enum-overhead
var tuple = function tuple() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args;
};

exports.tuple = tuple;

var tupleNum = function tupleNum() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return args;
};

exports.tupleNum = tupleNum;
//# sourceMappingURL=type.js.map


/***/ })

},[555]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyL0xvY2FsZVJlY2VpdmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9sYXlvdXQvU2lkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL21lbnUvTWVudUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2lucHV0L0lucHV0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9jb25maWctcHJvdmlkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9BcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2xheW91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbGF5b3V0L2xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbG9jYWxlL2RlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXBhZ2luYXRpb24vbGliL2xvY2FsZS9lbl9VUy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZGF0ZS1waWNrZXIvbG9jYWxlL2VuX1VTLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi90aW1lLXBpY2tlci9sb2NhbGUvZW5fVVMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3N0eWxlL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbGF5b3V0L3N0eWxlL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvaWNvbi9zdHlsZS9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3Rvb2x0aXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL191dGlsL3JhZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvc2VsZWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9ncmlkL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9pY29uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9ncmlkL1Jvd0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2J1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZW1wdHkvc3R5bGUvY3NzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9idXR0b24vc3R5bGUvY3NzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L0hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2NvbmZpZy1wcm92aWRlci9yZW5kZXJFbXB0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZW1wdHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2xvY2FsZS1wcm92aWRlci9kZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1jYWxlbmRhci9saWIvbG9jYWxlL2VuX1VTLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9jYWxlbmRhci9sb2NhbGUvZW5fVVMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2VtcHR5L2VtcHR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9lbXB0eS9zaW1wbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2xvY2FsZS1wcm92aWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvX3V0aWwvaW50ZXJvcERlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL21vZGFsL2xvY2FsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvX3V0aWwvd2FybmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvaWNvbi9JY29uRm9udC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvaWNvbi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvaWNvbi90d29Ub25lUHJpbWFyeUNvbG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9fdXRpbC9pc051bWVyaWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2xheW91dC9zdHlsZS9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9BcHAvU2lkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2ljb24vc3R5bGUvaW5kZXguY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvQXBwL01lbnUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL21lbnUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL21lbnUvU3ViTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbWVudS9NZW51SXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvdG9vbHRpcC9wbGFjZW1lbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy10b29sdGlwL2xpYi9wbGFjZW1lbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9fdXRpbC9vcGVuQW5pbWF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9tZW51L3N0eWxlL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbWVudS9zdHlsZS9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3Rvb2x0aXAvc3R5bGUvY3NzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi90b29sdGlwL3N0eWxlL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0FwcC9NZW51L2RhdGEuanNvbiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0FwcC9NZW51L2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0FwcC9TaWRlci9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9BcHAvSGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9wb3BvdmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9hdmF0YXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3BvcG92ZXIvc3R5bGUvY3NzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9wb3BvdmVyL3N0eWxlL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvYXZhdGFyL3N0eWxlL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvYXZhdGFyL3N0eWxlL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0FwcC9IZWFkZXIvaW5kZXguY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvQXBwL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9SZWR1eERlbW8vVG9kb0xpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2xpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3NwaW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3BhZ2luYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3BhZ2luYXRpb24vUGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvcGFnaW5hdGlvbi9NaW5pU2VsZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9ncmlkL3Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvX3V0aWwvcmVzcG9uc2l2ZU9ic2VydmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2dyaWQvY29sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9saXN0L0l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL191dGlsL3JlYWN0Tm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvYnV0dG9uL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvX3V0aWwvd2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWFuaW1hdGlvbi9saWIvRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2J1dHRvbi9idXR0b24tZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2lucHV0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9pbnB1dC9Hcm91cC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvaW5wdXQvU2VhcmNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9pbnB1dC9UZXh0QXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvaW5wdXQvY2FsY3VsYXRlTm9kZUhlaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvX3V0aWwvcmVzaXplT2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2lucHV0L1Bhc3N3b3JkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9saXN0L3N0eWxlL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbGlzdC9zdHlsZS9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2VtcHR5L3N0eWxlL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvc3Bpbi9zdHlsZS9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3NwaW4vc3R5bGUvaW5kZXguY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9wYWdpbmF0aW9uL3N0eWxlL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvcGFnaW5hdGlvbi9zdHlsZS9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3NlbGVjdC9zdHlsZS9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3NlbGVjdC9zdHlsZS9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2dyaWQvc3R5bGUvY3NzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9ncmlkL3N0eWxlL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvYnV0dG9uL3N0eWxlL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvaW5wdXQvc3R5bGUvY3NzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9pbnB1dC9zdHlsZS9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvQ29tbW9uL05vdEZvdW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L0NvbW1vbi9Ob3RGb3VuZC9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL191dGlsL3R5cGUuanMiXSwibmFtZXMiOlsiQ29udGVudCIsIkFwcCIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1hcmdpbiIsInBhZGRpbmciLCJiYWNrZ3JvdW5kIiwibWluSGVpZ2h0IiwicHJvcHMiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSb3V0ZXMiLCJIb21lIiwiVG9kb0xpc3QiLCJOb3RGb3VuZCIsIlNpZGVyIiwiQXBwU2lkZXIiLCJ0b2dnbGUiLCJzZXRTdGF0ZSIsImNvbGxhcHNlZCIsInN0YXRlIiwic2lkZXIiLCJzaWRlclRvcCIsImxvZ28iLCJ0cmlnZ2VyIiwiU3ViTWVudSIsIk1lbnVJdGVtIiwiSXRlbSIsInNvcnQiLCJhIiwiYiIsIkFwcE1lbnUiLCJtZW51TGlzdCIsImRhdGEiLCJtYXAiLCJpdGVtIiwiY2hpbGRMaXN0IiwibGVuZ3RoIiwibmFtZSIsImlkIiwic3ViSXRlbSIsInBhdGgiLCJBcHBIZWFkZXIiLCJoZWFkZXIiLCJleGl0Q29udGFpbmVyIiwiZXhpdCIsImJhY2tncm91bmRDb2xvciIsImN1cnNvciIsIm9yZGVyX2NvbXAiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0Iiwid2lkdGgiLCJmb3JiaWRkZW5XcmFwcGVyIiwiZm9yYmlkZGVuSW5uZXIiLCJmb3JiaWRkZW5Nb29uIiwiZm9yYmlkZGVuVGV4dEJveCIsImZvcmJpZGRlblN0YXR1cyIsImZvcmJpZGRlbkVyciIsImdvSG9tZSIsIm9uQ2xpY2siLCJmb3JiaWRkZW5DbG91ZExlZnQiLCJmb3JiaWRkZW5DbG91ZFJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLG9DQUFvQyxtQkFBTyxDQUFDLENBQU87O0FBRW5ELHdDQUF3QyxtQkFBTyxDQUFDLENBQVk7O0FBRTVELHNDQUFzQyxtQkFBTyxDQUFDLEdBQVc7O0FBRXpELHNDQUFzQyx1Q0FBdUMsa0JBQWtCOztBQUUvRix1Q0FBdUMsNkJBQTZCLFlBQVksRUFBRSxPQUFPLGlCQUFpQixtQkFBbUIsdUJBQXVCLHNEQUFzRCxzSEFBc0gsNEJBQTRCLDBDQUEwQyxFQUFFLE9BQU8sd0JBQXdCLEVBQUUsRUFBRSxFQUFFLEVBQUUseUJBQXlCLGVBQWUsRUFBRTs7QUFFemQsdUJBQXVCLDJFQUEyRSxrQ0FBa0MsbUJBQW1CLEdBQUcsRUFBRSxPQUFPLGtDQUFrQyw4SEFBOEgsR0FBRyxFQUFFLHFCQUFxQjs7QUFFN1YscUJBQXFCLGdEQUFnRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWUsR0FBRyx3Q0FBd0M7O0FBRTNULGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLDJDQUEy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QUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0REFBNEQ7QUFDNUQsT0FBTztBQUNQ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Qzs7QUFFM1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBLEtBQUssZUFBZTtBQUNwQjtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFH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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0M7OztBQUdoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUEsb0NBQW9DOztBQUVwQztBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRDs7QUFFaEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7Ozs7Ozs7OztBQzNQYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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SUFBRyxVQUFsQztBQUNFO0FBQUE7QUFBQSxrQkFBRyxTQUFTLEtBQUtDLE9BQWpCO0FBQUE7QUFBQTtBQURGO0FBSEYsV0FGRjtBQVNFLGlEQUFLLFdBQVdoRSxnQkFBT2lFLGtCQUF2QixHQVRGO0FBVUUsaURBQUssV0FBV2pFLGdCQUFPa0UsbUJBQXZCO0FBVkY7QUFETSxPQUFSO0FBY0Q7Ozs7RUFyQm9CMUQsZ0I7O2tCQXVCUlcsUTs7Ozs7OztBQzNCZjtBQUNBLGtCQUFrQiwyb0I7Ozs7Ozs7O0FDREw7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0EscUVBQXFFLGFBQWE7QUFDbEY7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esd0VBQXdFLGVBQWU7QUFDdkY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EiLCJmaWxlIjoianMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIFByb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9kZWZhdWx0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9kZWZhdWx0XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDoge307IGlmIChkZXNjLmdldCB8fCBkZXNjLnNldCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxudmFyIExvY2FsZVJlY2VpdmVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhMb2NhbGVSZWNlaXZlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTG9jYWxlUmVjZWl2ZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExvY2FsZVJlY2VpdmVyKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoTG9jYWxlUmVjZWl2ZXIpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKExvY2FsZVJlY2VpdmVyLCBbe1xuICAgIGtleTogXCJnZXRMb2NhbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TG9jYWxlKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjb21wb25lbnROYW1lID0gX3RoaXMkcHJvcHMuY29tcG9uZW50TmFtZSxcbiAgICAgICAgICBkZWZhdWx0TG9jYWxlID0gX3RoaXMkcHJvcHMuZGVmYXVsdExvY2FsZTtcbiAgICAgIHZhciBsb2NhbGUgPSBkZWZhdWx0TG9jYWxlIHx8IF9kZWZhdWx0W1wiZGVmYXVsdFwiXVtjb21wb25lbnROYW1lIHx8ICdnbG9iYWwnXTtcbiAgICAgIHZhciBhbnRMb2NhbGUgPSB0aGlzLmNvbnRleHQuYW50TG9jYWxlO1xuICAgICAgdmFyIGxvY2FsZUZyb21Db250ZXh0ID0gY29tcG9uZW50TmFtZSAmJiBhbnRMb2NhbGUgPyBhbnRMb2NhbGVbY29tcG9uZW50TmFtZV0gOiB7fTtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgdHlwZW9mIGxvY2FsZSA9PT0gJ2Z1bmN0aW9uJyA/IGxvY2FsZSgpIDogbG9jYWxlLCBsb2NhbGVGcm9tQ29udGV4dCB8fCB7fSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldExvY2FsZUNvZGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TG9jYWxlQ29kZSgpIHtcbiAgICAgIHZhciBhbnRMb2NhbGUgPSB0aGlzLmNvbnRleHQuYW50TG9jYWxlO1xuICAgICAgdmFyIGxvY2FsZUNvZGUgPSBhbnRMb2NhbGUgJiYgYW50TG9jYWxlLmxvY2FsZTsgLy8gSGFkIHVzZSBMb2NhbGVQcm92aWRlIGJ1dCBkaWRuJ3Qgc2V0IGxvY2FsZVxuXG4gICAgICBpZiAoYW50TG9jYWxlICYmIGFudExvY2FsZS5leGlzdCAmJiAhbG9jYWxlQ29kZSkge1xuICAgICAgICByZXR1cm4gX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmxvY2FsZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxvY2FsZUNvZGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbih0aGlzLmdldExvY2FsZSgpLCB0aGlzLmdldExvY2FsZUNvZGUoKSwgdGhpcy5jb250ZXh0LmFudExvY2FsZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExvY2FsZVJlY2VpdmVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IExvY2FsZVJlY2VpdmVyO1xuTG9jYWxlUmVjZWl2ZXIuZGVmYXVsdFByb3BzID0ge1xuICBjb21wb25lbnROYW1lOiAnZ2xvYmFsJ1xufTtcbkxvY2FsZVJlY2VpdmVyLmNvbnRleHRUeXBlcyA9IHtcbiAgYW50TG9jYWxlOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TG9jYWxlUmVjZWl2ZXIuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvTG9jYWxlUmVjZWl2ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZXhwb3J0cy5TaWRlckNvbnRleHQgPSB2b2lkIDA7XG5cbnZhciBfY3JlYXRlUmVhY3RDb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vY3JlYXRlLXJlYWN0LWNvbnRleHRcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF9sYXlvdXQgPSByZXF1aXJlKFwiLi9sYXlvdXRcIik7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmVhY3RMaWZlY3ljbGVzQ29tcGF0ID0gcmVxdWlyZShcInJlYWN0LWxpZmVjeWNsZXMtY29tcGF0XCIpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9vbWl0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwib21pdC5qc1wiKSk7XG5cbnZhciBfaWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2ljb25cIikpO1xuXG52YXIgX2lzTnVtZXJpYyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL2lzTnVtZXJpY1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDoge307IGlmIChkZXNjLmdldCB8fCBkZXNjLnNldCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG4vLyBtYXRjaE1lZGlhIHBvbHlmaWxsIGZvclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL1dpY2t5TmlsbGlhbXMvZW5xdWlyZS5qcy9pc3N1ZXMvODJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB2YXIgbWF0Y2hNZWRpYVBvbHlmaWxsID0gZnVuY3Rpb24gbWF0Y2hNZWRpYVBvbHlmaWxsKG1lZGlhUXVlcnkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVkaWE6IG1lZGlhUXVlcnksXG4gICAgICBtYXRjaGVzOiBmYWxzZSxcbiAgICAgIGFkZExpc3RlbmVyOiBmdW5jdGlvbiBhZGRMaXN0ZW5lcigpIHt9LFxuICAgICAgcmVtb3ZlTGlzdGVuZXI6IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKCkge31cbiAgICB9O1xuICB9O1xuXG4gIHdpbmRvdy5tYXRjaE1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWEgfHwgbWF0Y2hNZWRpYVBvbHlmaWxsO1xufVxuXG52YXIgZGltZW5zaW9uTWFwID0ge1xuICB4czogJzQ4MHB4JyxcbiAgc206ICc1NzZweCcsXG4gIG1kOiAnNzY4cHgnLFxuICBsZzogJzk5MnB4JyxcbiAgeGw6ICcxMjAwcHgnLFxuICB4eGw6ICcxNjAwcHgnXG59O1xudmFyIFNpZGVyQ29udGV4dCA9ICgwLCBfY3JlYXRlUmVhY3RDb250ZXh0W1wiZGVmYXVsdFwiXSkoe30pO1xuZXhwb3J0cy5TaWRlckNvbnRleHQgPSBTaWRlckNvbnRleHQ7XG5cbnZhciBnZW5lcmF0ZUlkID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaSA9IDA7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByZWZpeCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJyc7XG4gICAgaSArPSAxO1xuICAgIHJldHVybiBcIlwiLmNvbmNhdChwcmVmaXgpLmNvbmNhdChpKTtcbiAgfTtcbn0oKTtcblxudmFyIEludGVybmFsU2lkZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEludGVybmFsU2lkZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEludGVybmFsU2lkZXIocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW50ZXJuYWxTaWRlcik7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihJbnRlcm5hbFNpZGVyKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5yZXNwb25zaXZlSGFuZGxlciA9IGZ1bmN0aW9uIChtcWwpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYmVsb3c6IG1xbC5tYXRjaGVzXG4gICAgICB9KTtcblxuICAgICAgdmFyIG9uQnJlYWtwb2ludCA9IF90aGlzLnByb3BzLm9uQnJlYWtwb2ludDtcblxuICAgICAgaWYgKG9uQnJlYWtwb2ludCkge1xuICAgICAgICBvbkJyZWFrcG9pbnQobXFsLm1hdGNoZXMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMuc3RhdGUuY29sbGFwc2VkICE9PSBtcWwubWF0Y2hlcykge1xuICAgICAgICBfdGhpcy5zZXRDb2xsYXBzZWQobXFsLm1hdGNoZXMsICdyZXNwb25zaXZlJyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnNldENvbGxhcHNlZCA9IGZ1bmN0aW9uIChjb2xsYXBzZWQsIHR5cGUpIHtcbiAgICAgIGlmICghKCdjb2xsYXBzZWQnIGluIF90aGlzLnByb3BzKSkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY29sbGFwc2VkOiBjb2xsYXBzZWRcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBvbkNvbGxhcHNlID0gX3RoaXMucHJvcHMub25Db2xsYXBzZTtcblxuICAgICAgaWYgKG9uQ29sbGFwc2UpIHtcbiAgICAgICAgb25Db2xsYXBzZShjb2xsYXBzZWQsIHR5cGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy50b2dnbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY29sbGFwc2VkID0gIV90aGlzLnN0YXRlLmNvbGxhcHNlZDtcblxuICAgICAgX3RoaXMuc2V0Q29sbGFwc2VkKGNvbGxhcHNlZCwgJ2NsaWNrVHJpZ2dlcicpO1xuICAgIH07XG5cbiAgICBfdGhpcy5iZWxvd1Nob3dDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGJlbG93U2hvdzogIV90aGlzLnN0YXRlLmJlbG93U2hvd1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLnJlbmRlclNpZGVyID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgdmFyIGdldFByZWZpeENscyA9IF9yZWYuZ2V0UHJlZml4Q2xzO1xuXG4gICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBjdXN0b21pemVQcmVmaXhDbHMgPSBfYS5wcmVmaXhDbHMsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLFxuICAgICAgICAgIHRoZW1lID0gX2EudGhlbWUsXG4gICAgICAgICAgY29sbGFwc2libGUgPSBfYS5jb2xsYXBzaWJsZSxcbiAgICAgICAgICByZXZlcnNlQXJyb3cgPSBfYS5yZXZlcnNlQXJyb3csXG4gICAgICAgICAgdHJpZ2dlciA9IF9hLnRyaWdnZXIsXG4gICAgICAgICAgc3R5bGUgPSBfYS5zdHlsZSxcbiAgICAgICAgICB3aWR0aCA9IF9hLndpZHRoLFxuICAgICAgICAgIGNvbGxhcHNlZFdpZHRoID0gX2EuY29sbGFwc2VkV2lkdGgsXG4gICAgICAgICAgb3RoZXJzID0gX19yZXN0KF9hLCBbXCJwcmVmaXhDbHNcIiwgXCJjbGFzc05hbWVcIiwgXCJ0aGVtZVwiLCBcImNvbGxhcHNpYmxlXCIsIFwicmV2ZXJzZUFycm93XCIsIFwidHJpZ2dlclwiLCBcInN0eWxlXCIsIFwid2lkdGhcIiwgXCJjb2xsYXBzZWRXaWR0aFwiXSk7XG5cbiAgICAgIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2xheW91dC1zaWRlcicsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gICAgICB2YXIgZGl2UHJvcHMgPSAoMCwgX29taXRbXCJkZWZhdWx0XCJdKShvdGhlcnMsIFsnY29sbGFwc2VkJywgJ2RlZmF1bHRDb2xsYXBzZWQnLCAnb25Db2xsYXBzZScsICdicmVha3BvaW50JywgJ29uQnJlYWtwb2ludCcsICdzaWRlckhvb2snXSk7XG4gICAgICB2YXIgcmF3V2lkdGggPSBfdGhpcy5zdGF0ZS5jb2xsYXBzZWQgPyBjb2xsYXBzZWRXaWR0aCA6IHdpZHRoOyAvLyB1c2UgXCJweFwiIGFzIGZhbGxiYWNrIHVuaXQgZm9yIHdpZHRoXG5cbiAgICAgIHZhciBzaWRlcldpZHRoID0gKDAsIF9pc051bWVyaWNbXCJkZWZhdWx0XCJdKShyYXdXaWR0aCkgPyBcIlwiLmNvbmNhdChyYXdXaWR0aCwgXCJweFwiKSA6IFN0cmluZyhyYXdXaWR0aCk7IC8vIHNwZWNpYWwgdHJpZ2dlciB3aGVuIGNvbGxhcHNlZFdpZHRoID09IDBcblxuICAgICAgdmFyIHplcm9XaWR0aFRyaWdnZXIgPSBwYXJzZUZsb2F0KFN0cmluZyhjb2xsYXBzZWRXaWR0aCB8fCAwKSkgPT09IDAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIG9uQ2xpY2s6IF90aGlzLnRvZ2dsZSxcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXplcm8td2lkdGgtdHJpZ2dlciBcIikuY29uY2F0KHByZWZpeENscywgXCItemVyby13aWR0aC10cmlnZ2VyLVwiKS5jb25jYXQocmV2ZXJzZUFycm93ID8gJ3JpZ2h0JyA6ICdsZWZ0JylcbiAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2ljb25bXCJkZWZhdWx0XCJdLCB7XG4gICAgICAgIHR5cGU6IFwiYmFyc1wiXG4gICAgICB9KSkgOiBudWxsO1xuICAgICAgdmFyIGljb25PYmogPSB7XG4gICAgICAgIGV4cGFuZGVkOiByZXZlcnNlQXJyb3cgPyBSZWFjdC5jcmVhdGVFbGVtZW50KF9pY29uW1wiZGVmYXVsdFwiXSwge1xuICAgICAgICAgIHR5cGU6IFwicmlnaHRcIlxuICAgICAgICB9KSA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2ljb25bXCJkZWZhdWx0XCJdLCB7XG4gICAgICAgICAgdHlwZTogXCJsZWZ0XCJcbiAgICAgICAgfSksXG4gICAgICAgIGNvbGxhcHNlZDogcmV2ZXJzZUFycm93ID8gUmVhY3QuY3JlYXRlRWxlbWVudChfaWNvbltcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgICB0eXBlOiBcImxlZnRcIlxuICAgICAgICB9KSA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2ljb25bXCJkZWZhdWx0XCJdLCB7XG4gICAgICAgICAgdHlwZTogXCJyaWdodFwiXG4gICAgICAgIH0pXG4gICAgICB9O1xuICAgICAgdmFyIHN0YXR1cyA9IF90aGlzLnN0YXRlLmNvbGxhcHNlZCA/ICdjb2xsYXBzZWQnIDogJ2V4cGFuZGVkJztcbiAgICAgIHZhciBkZWZhdWx0VHJpZ2dlciA9IGljb25PYmpbc3RhdHVzXTtcbiAgICAgIHZhciB0cmlnZ2VyRG9tID0gdHJpZ2dlciAhPT0gbnVsbCA/IHplcm9XaWR0aFRyaWdnZXIgfHwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi10cmlnZ2VyXCIpLFxuICAgICAgICBvbkNsaWNrOiBfdGhpcy50b2dnbGUsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgd2lkdGg6IHNpZGVyV2lkdGhcbiAgICAgICAgfVxuICAgICAgfSwgdHJpZ2dlciB8fCBkZWZhdWx0VHJpZ2dlcikgOiBudWxsO1xuXG4gICAgICB2YXIgZGl2U3R5bGUgPSBfZXh0ZW5kcyh7fSwgc3R5bGUsIHtcbiAgICAgICAgZmxleDogXCIwIDAgXCIuY29uY2F0KHNpZGVyV2lkdGgpLFxuICAgICAgICBtYXhXaWR0aDogc2lkZXJXaWR0aCxcbiAgICAgICAgbWluV2lkdGg6IHNpZGVyV2lkdGgsXG4gICAgICAgIHdpZHRoOiBzaWRlcldpZHRoXG4gICAgICB9KTtcblxuICAgICAgdmFyIHNpZGVyQ2xzID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoY2xhc3NOYW1lLCBwcmVmaXhDbHMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdCh0aGVtZSksIChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY29sbGFwc2VkXCIpLCAhIV90aGlzLnN0YXRlLmNvbGxhcHNlZCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1oYXMtdHJpZ2dlclwiKSwgY29sbGFwc2libGUgJiYgdHJpZ2dlciAhPT0gbnVsbCAmJiAhemVyb1dpZHRoVHJpZ2dlciksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1iZWxvd1wiKSwgISFfdGhpcy5zdGF0ZS5iZWxvdyksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi16ZXJvLXdpZHRoXCIpLCBwYXJzZUZsb2F0KHNpZGVyV2lkdGgpID09PSAwKSwgX2NsYXNzTmFtZXMpKTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYXNpZGVcIiwgX2V4dGVuZHMoe1xuICAgICAgICBjbGFzc05hbWU6IHNpZGVyQ2xzXG4gICAgICB9LCBkaXZQcm9wcywge1xuICAgICAgICBzdHlsZTogZGl2U3R5bGVcbiAgICAgIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNoaWxkcmVuXCIpXG4gICAgICB9LCBfdGhpcy5wcm9wcy5jaGlsZHJlbiksIGNvbGxhcHNpYmxlIHx8IF90aGlzLnN0YXRlLmJlbG93ICYmIHplcm9XaWR0aFRyaWdnZXIgPyB0cmlnZ2VyRG9tIDogbnVsbCk7XG4gICAgfTtcblxuICAgIF90aGlzLnVuaXF1ZUlkID0gZ2VuZXJhdGVJZCgnYW50LXNpZGVyLScpO1xuICAgIHZhciBtYXRjaE1lZGlhO1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBtYXRjaE1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWE7XG4gICAgfVxuXG4gICAgaWYgKG1hdGNoTWVkaWEgJiYgcHJvcHMuYnJlYWtwb2ludCAmJiBwcm9wcy5icmVha3BvaW50IGluIGRpbWVuc2lvbk1hcCkge1xuICAgICAgX3RoaXMubXFsID0gbWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IFwiLmNvbmNhdChkaW1lbnNpb25NYXBbcHJvcHMuYnJlYWtwb2ludF0sIFwiKVwiKSk7XG4gICAgfVxuXG4gICAgdmFyIGNvbGxhcHNlZDtcblxuICAgIGlmICgnY29sbGFwc2VkJyBpbiBwcm9wcykge1xuICAgICAgY29sbGFwc2VkID0gcHJvcHMuY29sbGFwc2VkO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2xsYXBzZWQgPSBwcm9wcy5kZWZhdWx0Q29sbGFwc2VkO1xuICAgIH1cblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgY29sbGFwc2VkOiBjb2xsYXBzZWQsXG4gICAgICBiZWxvdzogZmFsc2VcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhJbnRlcm5hbFNpZGVyLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLm1xbCkge1xuICAgICAgICB0aGlzLm1xbC5hZGRMaXN0ZW5lcih0aGlzLnJlc3BvbnNpdmVIYW5kbGVyKTtcbiAgICAgICAgdGhpcy5yZXNwb25zaXZlSGFuZGxlcih0aGlzLm1xbCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLnNpZGVySG9vaykge1xuICAgICAgICB0aGlzLnByb3BzLnNpZGVySG9vay5hZGRTaWRlcih0aGlzLnVuaXF1ZUlkKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5tcWwpIHtcbiAgICAgICAgdGhpcy5tcWwucmVtb3ZlTGlzdGVuZXIodGhpcy5yZXNwb25zaXZlSGFuZGxlcik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLnNpZGVySG9vaykge1xuICAgICAgICB0aGlzLnByb3BzLnNpZGVySG9vay5yZW1vdmVTaWRlcih0aGlzLnVuaXF1ZUlkKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBjb2xsYXBzZWQgPSB0aGlzLnN0YXRlLmNvbGxhcHNlZDtcbiAgICAgIHZhciBjb2xsYXBzZWRXaWR0aCA9IHRoaXMucHJvcHMuY29sbGFwc2VkV2lkdGg7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChTaWRlckNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICBzaWRlckNvbGxhcHNlZDogY29sbGFwc2VkLFxuICAgICAgICAgIGNvbGxhcHNlZFdpZHRoOiBjb2xsYXBzZWRXaWR0aFxuICAgICAgICB9XG4gICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KF9jb25maWdQcm92aWRlci5Db25maWdDb25zdW1lciwgbnVsbCwgdGhpcy5yZW5kZXJTaWRlcikpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAoJ2NvbGxhcHNlZCcgaW4gbmV4dFByb3BzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY29sbGFwc2VkOiBuZXh0UHJvcHMuY29sbGFwc2VkXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBJbnRlcm5hbFNpZGVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5JbnRlcm5hbFNpZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29sbGFwc2libGU6IGZhbHNlLFxuICBkZWZhdWx0Q29sbGFwc2VkOiBmYWxzZSxcbiAgcmV2ZXJzZUFycm93OiBmYWxzZSxcbiAgd2lkdGg6IDIwMCxcbiAgY29sbGFwc2VkV2lkdGg6IDgwLFxuICBzdHlsZToge30sXG4gIHRoZW1lOiAnZGFyaydcbn07XG4oMCwgX3JlYWN0TGlmZWN5Y2xlc0NvbXBhdC5wb2x5ZmlsbCkoSW50ZXJuYWxTaWRlcik7XG5cbnZhciBTaWRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudDIpIHtcbiAgX2luaGVyaXRzKFNpZGVyLCBfUmVhY3QkQ29tcG9uZW50Mik7XG5cbiAgZnVuY3Rpb24gU2lkZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNpZGVyKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoU2lkZXIpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFNpZGVyLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9sYXlvdXQuTGF5b3V0Q29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW50ZXJuYWxTaWRlciwgX2V4dGVuZHMoe30sIGNvbnRleHQsIF90aGlzMi5wcm9wcykpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNpZGVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFNpZGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U2lkZXIuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9sYXlvdXQvU2lkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2NyZWF0ZVJlYWN0Q29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2NyZWF0ZS1yZWFjdC1jb250ZXh0XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBNZW51Q29udGV4dCA9ICgwLCBfY3JlYXRlUmVhY3RDb250ZXh0W1wiZGVmYXVsdFwiXSkoe1xuICBpbmxpbmVDb2xsYXBzZWQ6IGZhbHNlXG59KTtcbnZhciBfZGVmYXVsdCA9IE1lbnVDb250ZXh0O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU1lbnVDb250ZXh0LmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbWVudS9NZW51Q29udGV4dC5qc1xuLy8gbW9kdWxlIGlkID0gMTU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBQcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX29taXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJvbWl0LmpzXCIpKTtcblxudmFyIF9yZWFjdExpZmVjeWNsZXNDb21wYXQgPSByZXF1aXJlKFwicmVhY3QtbGlmZWN5Y2xlcy1jb21wYXRcIik7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG52YXIgX2ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9pY29uXCIpKTtcblxudmFyIF90eXBlID0gcmVxdWlyZShcIi4uL191dGlsL3R5cGVcIik7XG5cbnZhciBfd2FybmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL3dhcm5pbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTsgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBmaXhDb250cm9sbGVkVmFsdWUodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZpeFN1ZmZpeChwcm9wcykge1xuICByZXR1cm4gISEoJ3ByZWZpeCcgaW4gcHJvcHMgfHwgcHJvcHMuc3VmZml4IHx8IHByb3BzLmFsbG93Q2xlYXIpO1xufVxuXG52YXIgSW5wdXRTaXplcyA9ICgwLCBfdHlwZS50dXBsZSkoJ3NtYWxsJywgJ2RlZmF1bHQnLCAnbGFyZ2UnKTtcblxudmFyIElucHV0ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhJbnB1dCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSW5wdXQocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5wdXQpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoSW5wdXQpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLmhhbmRsZUtleURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgb25QcmVzc0VudGVyID0gX3RoaXMkcHJvcHMub25QcmVzc0VudGVyLFxuICAgICAgICAgIG9uS2V5RG93biA9IF90aGlzJHByb3BzLm9uS2V5RG93bjtcblxuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgJiYgb25QcmVzc0VudGVyKSB7XG4gICAgICAgIG9uUHJlc3NFbnRlcihlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9uS2V5RG93bikge1xuICAgICAgICBvbktleURvd24oZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnNhdmVJbnB1dCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBfdGhpcy5pbnB1dCA9IG5vZGU7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZVJlc2V0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIF90aGlzLnNldFZhbHVlKCcnLCBlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLmZvY3VzKCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIF90aGlzLnNldFZhbHVlKGUudGFyZ2V0LnZhbHVlLCBlKTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVyQ29tcG9uZW50ID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBnZXRQcmVmaXhDbHMgPSBfcmVmLmdldFByZWZpeENscztcbiAgICAgIHZhciBjdXN0b21pemVQcmVmaXhDbHMgPSBfdGhpcy5wcm9wcy5wcmVmaXhDbHM7XG4gICAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdpbnB1dCcsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gICAgICByZXR1cm4gX3RoaXMucmVuZGVyTGFiZWxlZElucHV0KHByZWZpeENscywgX3RoaXMucmVuZGVySW5wdXQocHJlZml4Q2xzKSk7XG4gICAgfTtcblxuICAgIHZhciB2YWx1ZSA9IHR5cGVvZiBwcm9wcy52YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyBwcm9wcy5kZWZhdWx0VmFsdWUgOiBwcm9wcy52YWx1ZTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKElucHV0LCBbe1xuICAgIGtleTogXCJnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIGlmIChoYXNQcmVmaXhTdWZmaXgocHJldlByb3BzKSAhPT0gaGFzUHJlZml4U3VmZml4KHRoaXMucHJvcHMpKSB7XG4gICAgICAgICgwLCBfd2FybmluZ1tcImRlZmF1bHRcIl0pKHRoaXMuaW5wdXQgIT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQsICdJbnB1dCcsIFwiV2hlbiBJbnB1dCBpcyBmb2N1c2VkLCBkeW5hbWljIGFkZCBvciByZW1vdmUgcHJlZml4IC8gc3VmZml4IHdpbGwgbWFrZSBpdCBsb3NlIGZvY3VzIGNhdXNlZCBieSBkb20gc3RydWN0dXJlIGNoYW5nZS4gUmVhZCBtb3JlOiBodHRwczovL2FudC5kZXNpZ24vY29tcG9uZW50cy9pbnB1dC8jRkFRXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IC8vIFNpbmNlIHBvbHlmaWxsIGBnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZWAgbmVlZCB3b3JrIHdpdGggYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gICAgLy8gV2Uga2VlcCBhbiBlbXB0eSBmdW5jdGlvbiBoZXJlLlxuXG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiZm9jdXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgICB0aGlzLmlucHV0LmZvY3VzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImJsdXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmx1cigpIHtcbiAgICAgIHRoaXMuaW5wdXQuYmx1cigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZWxlY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VsZWN0KCkge1xuICAgICAgdGhpcy5pbnB1dC5zZWxlY3QoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0SW5wdXRDbGFzc05hbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5wdXRDbGFzc05hbWUocHJlZml4Q2xzKSB7XG4gICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHNpemUgPSBfdGhpcyRwcm9wczIuc2l6ZSxcbiAgICAgICAgICBkaXNhYmxlZCA9IF90aGlzJHByb3BzMi5kaXNhYmxlZDtcbiAgICAgIHJldHVybiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShwcmVmaXhDbHMsIChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc21cIiksIHNpemUgPT09ICdzbWFsbCcpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbGdcIiksIHNpemUgPT09ICdsYXJnZScpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZGlzYWJsZWRcIiksIGRpc2FibGVkKSwgX2NsYXNzTmFtZXMpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0VmFsdWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VmFsdWUodmFsdWUsIGUsIGNhbGxiYWNrKSB7XG4gICAgICBpZiAoISgndmFsdWUnIGluIHRoaXMucHJvcHMpKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9LCBjYWxsYmFjayk7XG4gICAgICB9XG5cbiAgICAgIHZhciBvbkNoYW5nZSA9IHRoaXMucHJvcHMub25DaGFuZ2U7XG5cbiAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICB2YXIgZXZlbnQgPSBlO1xuXG4gICAgICAgIGlmIChlLnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAvLyBjbGljayBjbGVhciBpY29uXG4gICAgICAgICAgZXZlbnQgPSBPYmplY3QuY3JlYXRlKGUpO1xuICAgICAgICAgIGV2ZW50LnRhcmdldCA9IHRoaXMuaW5wdXQ7XG4gICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldCA9IHRoaXMuaW5wdXQ7XG4gICAgICAgICAgdmFyIG9yaWdpbmFsSW5wdXRWYWx1ZSA9IHRoaXMuaW5wdXQudmFsdWU7IC8vIGNoYW5nZSBpbnB1dCB2YWx1ZSBjYXVzZSBlLnRhcmdldC52YWx1ZSBzaG91bGQgYmUgJycgd2hlbiBjbGVhciBpbnB1dFxuXG4gICAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgIG9uQ2hhbmdlKGV2ZW50KTsgLy8gcmVzZXQgaW5wdXQgdmFsdWVcblxuICAgICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSBvcmlnaW5hbElucHV0VmFsdWU7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgb25DaGFuZ2UoZXZlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJDbGVhckljb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQ2xlYXJJY29uKHByZWZpeENscykge1xuICAgICAgdmFyIGFsbG93Q2xlYXIgPSB0aGlzLnByb3BzLmFsbG93Q2xlYXI7XG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuXG4gICAgICBpZiAoIWFsbG93Q2xlYXIgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9pY29uW1wiZGVmYXVsdFwiXSwge1xuICAgICAgICB0eXBlOiBcImNsb3NlLWNpcmNsZVwiLFxuICAgICAgICB0aGVtZTogXCJmaWxsZWRcIixcbiAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVSZXNldCxcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNsZWFyLWljb25cIiksXG4gICAgICAgIHJvbGU6IFwiYnV0dG9uXCJcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJTdWZmaXhcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyU3VmZml4KHByZWZpeENscykge1xuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgc3VmZml4ID0gX3RoaXMkcHJvcHMzLnN1ZmZpeCxcbiAgICAgICAgICBhbGxvd0NsZWFyID0gX3RoaXMkcHJvcHMzLmFsbG93Q2xlYXI7XG5cbiAgICAgIGlmIChzdWZmaXggfHwgYWxsb3dDbGVhcikge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zdWZmaXhcIilcbiAgICAgICAgfSwgdGhpcy5yZW5kZXJDbGVhckljb24ocHJlZml4Q2xzKSwgc3VmZml4KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckxhYmVsZWRJbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJMYWJlbGVkSW5wdXQocHJlZml4Q2xzLCBjaGlsZHJlbikge1xuICAgICAgdmFyIF9jbGFzc05hbWVzMztcblxuICAgICAgdmFyIF90aGlzJHByb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYWRkb25CZWZvcmUgPSBfdGhpcyRwcm9wczQuYWRkb25CZWZvcmUsXG4gICAgICAgICAgYWRkb25BZnRlciA9IF90aGlzJHByb3BzNC5hZGRvbkFmdGVyLFxuICAgICAgICAgIHN0eWxlID0gX3RoaXMkcHJvcHM0LnN0eWxlLFxuICAgICAgICAgIHNpemUgPSBfdGhpcyRwcm9wczQuc2l6ZSxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wczQuY2xhc3NOYW1lOyAvLyBOb3Qgd3JhcCB3aGVuIHRoZXJlIGlzIG5vdCBhZGRvbnNcblxuICAgICAgaWYgKCFhZGRvbkJlZm9yZSAmJiAhYWRkb25BZnRlcikge1xuICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgICB9XG5cbiAgICAgIHZhciB3cmFwcGVyQ2xhc3NOYW1lID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ncm91cFwiKTtcbiAgICAgIHZhciBhZGRvbkNsYXNzTmFtZSA9IFwiXCIuY29uY2F0KHdyYXBwZXJDbGFzc05hbWUsIFwiLWFkZG9uXCIpO1xuICAgICAgdmFyIGFkZG9uQmVmb3JlTm9kZSA9IGFkZG9uQmVmb3JlID8gUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IGFkZG9uQ2xhc3NOYW1lXG4gICAgICB9LCBhZGRvbkJlZm9yZSkgOiBudWxsO1xuICAgICAgdmFyIGFkZG9uQWZ0ZXJOb2RlID0gYWRkb25BZnRlciA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBhZGRvbkNsYXNzTmFtZVxuICAgICAgfSwgYWRkb25BZnRlcikgOiBudWxsO1xuICAgICAgdmFyIG1lcmdlZFdyYXBwZXJDbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXdyYXBwZXJcIiksIF9kZWZpbmVQcm9wZXJ0eSh7fSwgd3JhcHBlckNsYXNzTmFtZSwgYWRkb25CZWZvcmUgfHwgYWRkb25BZnRlcikpO1xuICAgICAgdmFyIG1lcmdlZEdyb3VwQ2xhc3NOYW1lID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoY2xhc3NOYW1lLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWdyb3VwLXdyYXBwZXJcIiksIChfY2xhc3NOYW1lczMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzMywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ncm91cC13cmFwcGVyLXNtXCIpLCBzaXplID09PSAnc21hbGwnKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzMywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ncm91cC13cmFwcGVyLWxnXCIpLCBzaXplID09PSAnbGFyZ2UnKSwgX2NsYXNzTmFtZXMzKSk7IC8vIE5lZWQgYW5vdGhlciB3cmFwcGVyIGZvciBjaGFuZ2luZyBkaXNwbGF5OnRhYmxlIHRvIGRpc3BsYXk6aW5saW5lLWJsb2NrXG4gICAgICAvLyBhbmQgcHV0IHN0eWxlIHByb3AgaW4gd3JhcHBlclxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IG1lcmdlZEdyb3VwQ2xhc3NOYW1lLFxuICAgICAgICBzdHlsZTogc3R5bGVcbiAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBtZXJnZWRXcmFwcGVyQ2xhc3NOYW1lXG4gICAgICB9LCBhZGRvbkJlZm9yZU5vZGUsIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgICAgICBzdHlsZTogbnVsbFxuICAgICAgfSksIGFkZG9uQWZ0ZXJOb2RlKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckxhYmVsZWRJY29uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckxhYmVsZWRJY29uKHByZWZpeENscywgY2hpbGRyZW4pIHtcbiAgICAgIHZhciBfY2xhc3NOYW1lczQ7XG5cbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgc3VmZml4ID0gdGhpcy5yZW5kZXJTdWZmaXgocHJlZml4Q2xzKTtcblxuICAgICAgaWYgKCFoYXNQcmVmaXhTdWZmaXgocHJvcHMpKSB7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgIH1cblxuICAgICAgdmFyIHByZWZpeCA9IHByb3BzLnByZWZpeCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXByZWZpeFwiKVxuICAgICAgfSwgcHJvcHMucHJlZml4KSA6IG51bGw7XG4gICAgICB2YXIgYWZmaXhXcmFwcGVyQ2xzID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkocHJvcHMuY2xhc3NOYW1lLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWFmZml4LXdyYXBwZXJcIiksIChfY2xhc3NOYW1lczQgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzNCwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1hZmZpeC13cmFwcGVyLXNtXCIpLCBwcm9wcy5zaXplID09PSAnc21hbGwnKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzNCwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1hZmZpeC13cmFwcGVyLWxnXCIpLCBwcm9wcy5zaXplID09PSAnbGFyZ2UnKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzNCwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1hZmZpeC13cmFwcGVyLXdpdGgtY2xlYXItYnRuXCIpLCBwcm9wcy5zdWZmaXggJiYgcHJvcHMuYWxsb3dDbGVhciAmJiB0aGlzLnN0YXRlLnZhbHVlKSwgX2NsYXNzTmFtZXM0KSk7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IGFmZml4V3JhcHBlckNscyxcbiAgICAgICAgc3R5bGU6IHByb3BzLnN0eWxlXG4gICAgICB9LCBwcmVmaXgsIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgICAgICBzdHlsZTogbnVsbCxcbiAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmdldElucHV0Q2xhc3NOYW1lKHByZWZpeENscylcbiAgICAgIH0pLCBzdWZmaXgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJJbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJJbnB1dChwcmVmaXhDbHMpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczUgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzNS5jbGFzc05hbWUsXG4gICAgICAgICAgYWRkb25CZWZvcmUgPSBfdGhpcyRwcm9wczUuYWRkb25CZWZvcmUsXG4gICAgICAgICAgYWRkb25BZnRlciA9IF90aGlzJHByb3BzNS5hZGRvbkFmdGVyO1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTsgLy8gRml4IGh0dHBzOi8vZmIubWUvcmVhY3QtdW5rbm93bi1wcm9wXG5cbiAgICAgIHZhciBvdGhlclByb3BzID0gKDAsIF9vbWl0W1wiZGVmYXVsdFwiXSkodGhpcy5wcm9wcywgWydwcmVmaXhDbHMnLCAnb25QcmVzc0VudGVyJywgJ2FkZG9uQmVmb3JlJywgJ2FkZG9uQWZ0ZXInLCAncHJlZml4JywgJ3N1ZmZpeCcsICdhbGxvd0NsZWFyJywgLy8gSW5wdXQgZWxlbWVudHMgbXVzdCBiZSBlaXRoZXIgY29udHJvbGxlZCBvciB1bmNvbnRyb2xsZWQsXG4gICAgICAvLyBzcGVjaWZ5IGVpdGhlciB0aGUgdmFsdWUgcHJvcCwgb3IgdGhlIGRlZmF1bHRWYWx1ZSBwcm9wLCBidXQgbm90IGJvdGguXG4gICAgICAnZGVmYXVsdFZhbHVlJ10pO1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyTGFiZWxlZEljb24ocHJlZml4Q2xzLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgX2V4dGVuZHMoe30sIG90aGVyUHJvcHMsIHtcbiAgICAgICAgdmFsdWU6IGZpeENvbnRyb2xsZWRWYWx1ZSh2YWx1ZSksXG4gICAgICAgIG9uQ2hhbmdlOiB0aGlzLmhhbmRsZUNoYW5nZSxcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKSh0aGlzLmdldElucHV0Q2xhc3NOYW1lKHByZWZpeENscyksIF9kZWZpbmVQcm9wZXJ0eSh7fSwgY2xhc3NOYW1lLCBjbGFzc05hbWUgJiYgIWFkZG9uQmVmb3JlICYmICFhZGRvbkFmdGVyKSksXG4gICAgICAgIG9uS2V5RG93bjogdGhpcy5oYW5kbGVLZXlEb3duLFxuICAgICAgICByZWY6IHRoaXMuc2F2ZUlucHV0XG4gICAgICB9KSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnN1bWVyLCBudWxsLCB0aGlzLnJlbmRlckNvbXBvbmVudCk7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmICgndmFsdWUnIGluIG5leHRQcm9wcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiBuZXh0UHJvcHMudmFsdWVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIElucHV0O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5JbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG4gIHR5cGU6ICd0ZXh0J1xufTtcbklucHV0LnByb3BUeXBlcyA9IHtcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihJbnB1dFNpemVzKSxcbiAgbWF4TGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5hbnksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYWRkb25CZWZvcmU6IFByb3BUeXBlcy5ub2RlLFxuICBhZGRvbkFmdGVyOiBQcm9wVHlwZXMubm9kZSxcbiAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvblByZXNzRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuICBvbktleVVwOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gIHByZWZpeDogUHJvcFR5cGVzLm5vZGUsXG4gIHN1ZmZpeDogUHJvcFR5cGVzLm5vZGUsXG4gIGFsbG93Q2xlYXI6IFByb3BUeXBlcy5ib29sXG59O1xuKDAsIF9yZWFjdExpZmVjeWNsZXNDb21wYXQucG9seWZpbGwpKElucHV0KTtcbnZhciBfZGVmYXVsdCA9IElucHV0O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlucHV0LmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvaW5wdXQvSW5wdXQuanNcbi8vIG1vZHVsZSBpZCA9IDE2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMud2l0aENvbmZpZ0NvbnN1bWVyID0gd2l0aENvbmZpZ0NvbnN1bWVyO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBleHBvcnRzLkNvbmZpZ0NvbnN1bWVyID0gZXhwb3J0cy5jb25maWdDb25zdW1lclByb3BzID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NyZWF0ZVJlYWN0Q29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2NyZWF0ZS1yZWFjdC1jb250ZXh0XCIpKTtcblxudmFyIF9yZW5kZXJFbXB0eSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcmVuZGVyRW1wdHlcIikpO1xuXG52YXIgX2xvY2FsZVByb3ZpZGVyID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL2xvY2FsZS1wcm92aWRlclwiKSk7XG5cbnZhciBfTG9jYWxlUmVjZWl2ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9sb2NhbGUtcHJvdmlkZXIvTG9jYWxlUmVjZWl2ZXJcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTsgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG52YXIgY29uZmlnQ29uc3VtZXJQcm9wcyA9IFsnZ2V0UG9wdXBDb250YWluZXInLCAncm9vdFByZWZpeENscycsICdnZXRQcmVmaXhDbHMnLCAncmVuZGVyRW1wdHknLCAnY3NwJywgJ2F1dG9JbnNlcnRTcGFjZUluQnV0dG9uJywgJ2xvY2FsZSddO1xuZXhwb3J0cy5jb25maWdDb25zdW1lclByb3BzID0gY29uZmlnQ29uc3VtZXJQcm9wcztcbnZhciBDb25maWdDb250ZXh0ID0gKDAsIF9jcmVhdGVSZWFjdENvbnRleHRbXCJkZWZhdWx0XCJdKSh7XG4gIC8vIFdlIHByb3ZpZGUgYSBkZWZhdWx0IGZ1bmN0aW9uIGZvciBDb250ZXh0IHdpdGhvdXQgcHJvdmlkZXJcbiAgZ2V0UHJlZml4Q2xzOiBmdW5jdGlvbiBnZXRQcmVmaXhDbHMoc3VmZml4Q2xzLCBjdXN0b21pemVQcmVmaXhDbHMpIHtcbiAgICBpZiAoY3VzdG9taXplUHJlZml4Q2xzKSByZXR1cm4gY3VzdG9taXplUHJlZml4Q2xzO1xuICAgIHJldHVybiBcImFudC1cIi5jb25jYXQoc3VmZml4Q2xzKTtcbiAgfSxcbiAgcmVuZGVyRW1wdHk6IF9yZW5kZXJFbXB0eVtcImRlZmF1bHRcIl1cbn0pO1xudmFyIENvbmZpZ0NvbnN1bWVyID0gQ29uZmlnQ29udGV4dC5Db25zdW1lcjtcbmV4cG9ydHMuQ29uZmlnQ29uc3VtZXIgPSBDb25maWdDb25zdW1lcjtcblxudmFyIENvbmZpZ1Byb3ZpZGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhDb25maWdQcm92aWRlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ29uZmlnUHJvdmlkZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbmZpZ1Byb3ZpZGVyKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKENvbmZpZ1Byb3ZpZGVyKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblxuICAgIF90aGlzLmdldFByZWZpeENscyA9IGZ1bmN0aW9uIChzdWZmaXhDbHMsIGN1c3RvbWl6ZVByZWZpeENscykge1xuICAgICAgdmFyIF90aGlzJHByb3BzJHByZWZpeENscyA9IF90aGlzLnByb3BzLnByZWZpeENscyxcbiAgICAgICAgICBwcmVmaXhDbHMgPSBfdGhpcyRwcm9wcyRwcmVmaXhDbHMgPT09IHZvaWQgMCA/ICdhbnQnIDogX3RoaXMkcHJvcHMkcHJlZml4Q2xzO1xuICAgICAgaWYgKGN1c3RvbWl6ZVByZWZpeENscykgcmV0dXJuIGN1c3RvbWl6ZVByZWZpeENscztcbiAgICAgIHJldHVybiBzdWZmaXhDbHMgPyBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoc3VmZml4Q2xzKSA6IHByZWZpeENscztcbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVyUHJvdmlkZXIgPSBmdW5jdGlvbiAoY29udGV4dCwgbGVnYWN5TG9jYWxlKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIGdldFBvcHVwQ29udGFpbmVyID0gX3RoaXMkcHJvcHMuZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICAgICAgcmVuZGVyRW1wdHkgPSBfdGhpcyRwcm9wcy5yZW5kZXJFbXB0eSxcbiAgICAgICAgICBjc3AgPSBfdGhpcyRwcm9wcy5jc3AsXG4gICAgICAgICAgYXV0b0luc2VydFNwYWNlSW5CdXR0b24gPSBfdGhpcyRwcm9wcy5hdXRvSW5zZXJ0U3BhY2VJbkJ1dHRvbixcbiAgICAgICAgICBsb2NhbGUgPSBfdGhpcyRwcm9wcy5sb2NhbGU7XG5cbiAgICAgIHZhciBjb25maWcgPSBfZXh0ZW5kcyh7fSwgY29udGV4dCwge1xuICAgICAgICBnZXRQcmVmaXhDbHM6IF90aGlzLmdldFByZWZpeENscyxcbiAgICAgICAgY3NwOiBjc3AsXG4gICAgICAgIGF1dG9JbnNlcnRTcGFjZUluQnV0dG9uOiBhdXRvSW5zZXJ0U3BhY2VJbkJ1dHRvblxuICAgICAgfSk7XG5cbiAgICAgIGlmIChnZXRQb3B1cENvbnRhaW5lcikge1xuICAgICAgICBjb25maWcuZ2V0UG9wdXBDb250YWluZXIgPSBnZXRQb3B1cENvbnRhaW5lcjtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlbmRlckVtcHR5KSB7XG4gICAgICAgIGNvbmZpZy5yZW5kZXJFbXB0eSA9IHJlbmRlckVtcHR5O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb25maWdDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgIHZhbHVlOiBjb25maWdcbiAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2xvY2FsZVByb3ZpZGVyW1wiZGVmYXVsdFwiXSwge1xuICAgICAgICBsb2NhbGU6IGxvY2FsZSB8fCBsZWdhY3lMb2NhbGUsXG4gICAgICAgIF9BTlRfTUFSS19fOiBfbG9jYWxlUHJvdmlkZXIuQU5UX01BUktcbiAgICAgIH0sIGNoaWxkcmVuKSk7XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDb25maWdQcm92aWRlciwgW3tcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfTG9jYWxlUmVjZWl2ZXJbXCJkZWZhdWx0XCJdLCBudWxsLCBmdW5jdGlvbiAoXywgX18sIGxlZ2FjeUxvY2FsZSkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb25maWdDb25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLnJlbmRlclByb3ZpZGVyKGNvbnRleHQsIGxlZ2FjeUxvY2FsZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENvbmZpZ1Byb3ZpZGVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5mdW5jdGlvbiB3aXRoQ29uZmlnQ29uc3VtZXIoY29uZmlnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoQ29tcG9uZW50KSB7XG4gICAgLy8gV3JhcCB3aXRoIENvbmZpZ0NvbnN1bWVyLiBTaW5jZSB3ZSBuZWVkIGNvbXBhdGlibGUgd2l0aCByZWFjdCAxNSwgYmUgY2FyZSB3aGVuIHVzaW5nIHJlZiBtZXRob2RzXG4gICAgdmFyIFNGQyA9IGZ1bmN0aW9uIFNGQyhwcm9wcykge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29uZmlnQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb25maWdQcm9wcykge1xuICAgICAgICB2YXIgYmFzaWNQcmVmaXhDbHMgPSBjb25maWcucHJlZml4Q2xzO1xuICAgICAgICB2YXIgZ2V0UHJlZml4Q2xzID0gY29uZmlnUHJvcHMuZ2V0UHJlZml4Q2xzO1xuICAgICAgICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzO1xuICAgICAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKGJhc2ljUHJlZml4Q2xzLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHt9LCBjb25maWdQcm9wcywgcHJvcHMsIHtcbiAgICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENsc1xuICAgICAgICB9KSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIGNvbnMgPSBDb21wb25lbnQuY29uc3RydWN0b3I7XG4gICAgdmFyIG5hbWUgPSBjb25zICYmIGNvbnMuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG4gICAgU0ZDLmRpc3BsYXlOYW1lID0gXCJ3aXRoQ29uZmlnQ29uc3VtZXIoXCIuY29uY2F0KG5hbWUsIFwiKVwiKTtcbiAgICByZXR1cm4gU0ZDO1xuICB9O1xufVxuXG52YXIgX2RlZmF1bHQgPSBDb25maWdQcm92aWRlcjtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2NvbmZpZy1wcm92aWRlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBTaWRlciBmcm9tICcuL1NpZGVyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4LmNzcyc7XG5cblxuY29uc3QgeyBDb250ZW50IH0gPSBMYXlvdXQ7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dCBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8U2lkZXIgLz5cbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgPENvbnRlbnRcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIG1hcmdpbjogJzI0cHggMTZweCcsXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDI0LFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgICAgICAgICAgIG1pbkhlaWdodDogMjgwLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDov5nph4zmmK/lhoXlrrlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvQ29udGVudD5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5BcHAucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQsXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnQvQXBwL2luZGV4LmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9sYXlvdXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xheW91dFwiKSk7XG5cbnZhciBfU2lkZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1NpZGVyXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbl9sYXlvdXRbXCJkZWZhdWx0XCJdLlNpZGVyID0gX1NpZGVyW1wiZGVmYXVsdFwiXTtcbnZhciBfZGVmYXVsdCA9IF9sYXlvdXRbXCJkZWZhdWx0XCJdO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbGF5b3V0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGV4cG9ydHMuTGF5b3V0Q29udGV4dCA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfY3JlYXRlUmVhY3RDb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vY3JlYXRlLXJlYWN0LWNvbnRleHRcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDoge307IGlmIChkZXNjLmdldCB8fCBkZXNjLnNldCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgTGF5b3V0Q29udGV4dCA9ICgwLCBfY3JlYXRlUmVhY3RDb250ZXh0W1wiZGVmYXVsdFwiXSkoe1xuICBzaWRlckhvb2s6IHtcbiAgICBhZGRTaWRlcjogZnVuY3Rpb24gYWRkU2lkZXIoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIHJlbW92ZVNpZGVyOiBmdW5jdGlvbiByZW1vdmVTaWRlcigpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxufSk7XG5leHBvcnRzLkxheW91dENvbnRleHQgPSBMYXlvdXRDb250ZXh0O1xuXG5mdW5jdGlvbiBnZW5lcmF0b3IoX3JlZikge1xuICB2YXIgc3VmZml4Q2xzID0gX3JlZi5zdWZmaXhDbHMsXG4gICAgICB0YWdOYW1lID0gX3JlZi50YWdOYW1lO1xuICByZXR1cm4gZnVuY3Rpb24gKEJhc2ljQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIC8qI19fUFVSRV9fKi9cbiAgICAgIGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgICAgIF9pbmhlcml0cyhBZGFwdGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgICAgICBmdW5jdGlvbiBBZGFwdGVyKCkge1xuICAgICAgICAgIHZhciBfdGhpcztcblxuICAgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBZGFwdGVyKTtcblxuICAgICAgICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKEFkYXB0ZXIpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXG4gICAgICAgICAgX3RoaXMucmVuZGVyQ29tcG9uZW50ID0gZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgICAgICB2YXIgZ2V0UHJlZml4Q2xzID0gX3JlZjIuZ2V0UHJlZml4Q2xzO1xuICAgICAgICAgICAgdmFyIGN1c3RvbWl6ZVByZWZpeENscyA9IF90aGlzLnByb3BzLnByZWZpeENscztcbiAgICAgICAgICAgIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoc3VmZml4Q2xzLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmFzaWNDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICAgICAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgICAgICAgIHRhZ05hbWU6IHRhZ05hbWVcbiAgICAgICAgICAgIH0sIF90aGlzLnByb3BzKSk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIF9jcmVhdGVDbGFzcyhBZGFwdGVyLCBbe1xuICAgICAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnN1bWVyLCBudWxsLCB0aGlzLnJlbmRlckNvbXBvbmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XSk7XG5cbiAgICAgICAgcmV0dXJuIEFkYXB0ZXI7XG4gICAgICB9KFJlYWN0LkNvbXBvbmVudClcbiAgICApO1xuICB9O1xufVxuXG52YXIgQmFzaWMgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQyKSB7XG4gIF9pbmhlcml0cyhCYXNpYywgX1JlYWN0JENvbXBvbmVudDIpO1xuXG4gIGZ1bmN0aW9uIEJhc2ljKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCYXNpYyk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKEJhc2ljKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhCYXNpYywgW3tcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgcHJlZml4Q2xzID0gX2EucHJlZml4Q2xzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLFxuICAgICAgICAgIHRhZ05hbWUgPSBfYS50YWdOYW1lLFxuICAgICAgICAgIG90aGVycyA9IF9fcmVzdChfYSwgW1wicHJlZml4Q2xzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY2hpbGRyZW5cIiwgXCJ0YWdOYW1lXCJdKTtcblxuICAgICAgdmFyIGNsYXNzU3RyaW5nID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoY2xhc3NOYW1lLCBwcmVmaXhDbHMpO1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSwgX2V4dGVuZHMoe1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzU3RyaW5nXG4gICAgICB9LCBvdGhlcnMpLCBjaGlsZHJlbik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEJhc2ljO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG52YXIgQmFzaWNMYXlvdXQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQzKSB7XG4gIF9pbmhlcml0cyhCYXNpY0xheW91dCwgX1JlYWN0JENvbXBvbmVudDMpO1xuXG4gIGZ1bmN0aW9uIEJhc2ljTGF5b3V0KCkge1xuICAgIHZhciBfdGhpczI7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQmFzaWNMYXlvdXQpO1xuXG4gICAgX3RoaXMyID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKEJhc2ljTGF5b3V0KS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICBfdGhpczIuc3RhdGUgPSB7XG4gICAgICBzaWRlcnM6IFtdXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXMyO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEJhc2ljTGF5b3V0LCBbe1xuICAgIGtleTogXCJnZXRTaWRlckhvb2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2lkZXJIb29rKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFkZFNpZGVyOiBmdW5jdGlvbiBhZGRTaWRlcihpZCkge1xuICAgICAgICAgIF90aGlzMy5zZXRTdGF0ZShmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHNpZGVyczogW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShzdGF0ZS5zaWRlcnMpLCBbaWRdKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlU2lkZXI6IGZ1bmN0aW9uIHJlbW92ZVNpZGVyKGlkKSB7XG4gICAgICAgICAgX3RoaXMzLnNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgc2lkZXJzOiBzdGF0ZS5zaWRlcnMuZmlsdGVyKGZ1bmN0aW9uIChjdXJyZW50SWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudElkICE9PSBpZDtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHByZWZpeENscyA9IF9hLnByZWZpeENscyxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbixcbiAgICAgICAgICBoYXNTaWRlciA9IF9hLmhhc1NpZGVyLFxuICAgICAgICAgIFRhZyA9IF9hLnRhZ05hbWUsXG4gICAgICAgICAgb3RoZXJzID0gX19yZXN0KF9hLCBbXCJwcmVmaXhDbHNcIiwgXCJjbGFzc05hbWVcIiwgXCJjaGlsZHJlblwiLCBcImhhc1NpZGVyXCIsIFwidGFnTmFtZVwiXSk7XG5cbiAgICAgIHZhciBjbGFzc1N0cmluZyA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKGNsYXNzTmFtZSwgcHJlZml4Q2xzLCBfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaGFzLXNpZGVyXCIpLCB0eXBlb2YgaGFzU2lkZXIgPT09ICdib29sZWFuJyA/IGhhc1NpZGVyIDogdGhpcy5zdGF0ZS5zaWRlcnMubGVuZ3RoID4gMCkpO1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGF5b3V0Q29udGV4dC5Qcm92aWRlciwge1xuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIHNpZGVySG9vazogdGhpcy5nZXRTaWRlckhvb2soKVxuICAgICAgICB9XG4gICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzU3RyaW5nXG4gICAgICB9LCBvdGhlcnMpLCBjaGlsZHJlbikpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBCYXNpY0xheW91dDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxudmFyIExheW91dCA9IGdlbmVyYXRvcih7XG4gIHN1ZmZpeENsczogJ2xheW91dCcsXG4gIHRhZ05hbWU6ICdzZWN0aW9uJ1xufSkoQmFzaWNMYXlvdXQpO1xudmFyIEhlYWRlciA9IGdlbmVyYXRvcih7XG4gIHN1ZmZpeENsczogJ2xheW91dC1oZWFkZXInLFxuICB0YWdOYW1lOiAnaGVhZGVyJ1xufSkoQmFzaWMpO1xudmFyIEZvb3RlciA9IGdlbmVyYXRvcih7XG4gIHN1ZmZpeENsczogJ2xheW91dC1mb290ZXInLFxuICB0YWdOYW1lOiAnZm9vdGVyJ1xufSkoQmFzaWMpO1xudmFyIENvbnRlbnQgPSBnZW5lcmF0b3Ioe1xuICBzdWZmaXhDbHM6ICdsYXlvdXQtY29udGVudCcsXG4gIHRhZ05hbWU6ICdtYWluJ1xufSkoQmFzaWMpO1xuTGF5b3V0LkhlYWRlciA9IEhlYWRlcjtcbkxheW91dC5Gb290ZXIgPSBGb290ZXI7XG5MYXlvdXQuQ29udGVudCA9IENvbnRlbnQ7XG52YXIgX2RlZmF1bHQgPSBMYXlvdXQ7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGF5b3V0LmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbGF5b3V0L2xheW91dC5qc1xuLy8gbW9kdWxlIGlkID0gMjMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZW5fVVMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy1wYWdpbmF0aW9uL2xpYi9sb2NhbGUvZW5fVVNcIikpO1xuXG52YXIgX2VuX1VTMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2RhdGUtcGlja2VyL2xvY2FsZS9lbl9VU1wiKSk7XG5cbnZhciBfZW5fVVMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vdGltZS1waWNrZXIvbG9jYWxlL2VuX1VTXCIpKTtcblxudmFyIF9lbl9VUzQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9jYWxlbmRhci9sb2NhbGUvZW5fVVNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIF9kZWZhdWx0ID0ge1xuICBsb2NhbGU6ICdlbicsXG4gIFBhZ2luYXRpb246IF9lbl9VU1tcImRlZmF1bHRcIl0sXG4gIERhdGVQaWNrZXI6IF9lbl9VUzJbXCJkZWZhdWx0XCJdLFxuICBUaW1lUGlja2VyOiBfZW5fVVMzW1wiZGVmYXVsdFwiXSxcbiAgQ2FsZW5kYXI6IF9lbl9VUzRbXCJkZWZhdWx0XCJdLFxuICBnbG9iYWw6IHtcbiAgICBwbGFjZWhvbGRlcjogJ1BsZWFzZSBzZWxlY3QnXG4gIH0sXG4gIFRhYmxlOiB7XG4gICAgZmlsdGVyVGl0bGU6ICdGaWx0ZXIgbWVudScsXG4gICAgZmlsdGVyQ29uZmlybTogJ09LJyxcbiAgICBmaWx0ZXJSZXNldDogJ1Jlc2V0JyxcbiAgICBzZWxlY3RBbGw6ICdTZWxlY3QgY3VycmVudCBwYWdlJyxcbiAgICBzZWxlY3RJbnZlcnQ6ICdJbnZlcnQgY3VycmVudCBwYWdlJyxcbiAgICBzb3J0VGl0bGU6ICdTb3J0JyxcbiAgICBleHBhbmQ6ICdFeHBhbmQgcm93JyxcbiAgICBjb2xsYXBzZTogJ0NvbGxhcHNlIHJvdydcbiAgfSxcbiAgTW9kYWw6IHtcbiAgICBva1RleHQ6ICdPSycsXG4gICAgY2FuY2VsVGV4dDogJ0NhbmNlbCcsXG4gICAganVzdE9rVGV4dDogJ09LJ1xuICB9LFxuICBQb3Bjb25maXJtOiB7XG4gICAgb2tUZXh0OiAnT0snLFxuICAgIGNhbmNlbFRleHQ6ICdDYW5jZWwnXG4gIH0sXG4gIFRyYW5zZmVyOiB7XG4gICAgdGl0bGVzOiBbJycsICcnXSxcbiAgICBzZWFyY2hQbGFjZWhvbGRlcjogJ1NlYXJjaCBoZXJlJyxcbiAgICBpdGVtVW5pdDogJ2l0ZW0nLFxuICAgIGl0ZW1zVW5pdDogJ2l0ZW1zJ1xuICB9LFxuICBVcGxvYWQ6IHtcbiAgICB1cGxvYWRpbmc6ICdVcGxvYWRpbmcuLi4nLFxuICAgIHJlbW92ZUZpbGU6ICdSZW1vdmUgZmlsZScsXG4gICAgdXBsb2FkRXJyb3I6ICdVcGxvYWQgZXJyb3InLFxuICAgIHByZXZpZXdGaWxlOiAnUHJldmlldyBmaWxlJ1xuICB9LFxuICBFbXB0eToge1xuICAgIGRlc2NyaXB0aW9uOiAnTm8gRGF0YSdcbiAgfSxcbiAgSWNvbjoge1xuICAgIGljb246ICdpY29uJ1xuICB9LFxuICBUZXh0OiB7XG4gICAgZWRpdDogJ2VkaXQnLFxuICAgIGNvcHk6ICdjb3B5JyxcbiAgICBjb3BpZWQ6ICdjb3B5IHN1Y2Nlc3MnLFxuICAgIGV4cGFuZDogJ2V4cGFuZCdcbiAgfSxcbiAgUGFnZUhlYWRlcjoge1xuICAgIGJhY2s6ICdiYWNrJ1xuICB9XG59O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlZmF1bHQuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9sb2NhbGUvZGVmYXVsdC5qc1xuLy8gbW9kdWxlIGlkID0gMjM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHtcbiAgLy8gT3B0aW9ucy5qc3hcbiAgaXRlbXNfcGVyX3BhZ2U6ICcvIHBhZ2UnLFxuICBqdW1wX3RvOiAnR290bycsXG4gIGp1bXBfdG9fY29uZmlybTogJ2NvbmZpcm0nLFxuICBwYWdlOiAnJyxcblxuICAvLyBQYWdpbmF0aW9uLmpzeFxuICBwcmV2X3BhZ2U6ICdQcmV2aW91cyBQYWdlJyxcbiAgbmV4dF9wYWdlOiAnTmV4dCBQYWdlJyxcbiAgcHJldl81OiAnUHJldmlvdXMgNSBQYWdlcycsXG4gIG5leHRfNTogJ05leHQgNSBQYWdlcycsXG4gIHByZXZfMzogJ1ByZXZpb3VzIDMgUGFnZXMnLFxuICBuZXh0XzM6ICdOZXh0IDMgUGFnZXMnXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmMtcGFnaW5hdGlvbi9saWIvbG9jYWxlL2VuX1VTLmpzXG4vLyBtb2R1bGUgaWQgPSAyMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9lbl9VUyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLWNhbGVuZGFyL2xpYi9sb2NhbGUvZW5fVVNcIikpO1xuXG52YXIgX2VuX1VTMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL3RpbWUtcGlja2VyL2xvY2FsZS9lbl9VU1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG4vLyBNZXJnZSBpbnRvIGEgbG9jYWxlIG9iamVjdFxudmFyIGxvY2FsZSA9IHtcbiAgbGFuZzogX2V4dGVuZHMoe1xuICAgIHBsYWNlaG9sZGVyOiAnU2VsZWN0IGRhdGUnLFxuICAgIHJhbmdlUGxhY2Vob2xkZXI6IFsnU3RhcnQgZGF0ZScsICdFbmQgZGF0ZSddXG4gIH0sIF9lbl9VU1tcImRlZmF1bHRcIl0pLFxuICB0aW1lUGlja2VyTG9jYWxlOiBfZXh0ZW5kcyh7fSwgX2VuX1VTMltcImRlZmF1bHRcIl0pXG59OyAvLyBBbGwgc2V0dGluZ3MgYXQ6XG4vLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2Jsb2IvbWFzdGVyL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvbG9jYWxlL2V4YW1wbGUuanNvblxuXG52YXIgX2RlZmF1bHQgPSBsb2NhbGU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW5fVVMuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9kYXRlLXBpY2tlci9sb2NhbGUvZW5fVVMuanNcbi8vIG1vZHVsZSBpZCA9IDIzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIGxvY2FsZSA9IHtcbiAgcGxhY2Vob2xkZXI6ICdTZWxlY3QgdGltZSdcbn07XG52YXIgX2RlZmF1bHQgPSBsb2NhbGU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW5fVVMuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hbnRkL2xpYi90aW1lLXBpY2tlci9sb2NhbGUvZW5fVVMuanNcbi8vIG1vZHVsZSBpZCA9IDIzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3N0eWxlL2luZGV4LmNzc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnJlcXVpcmUoXCIuLi8uLi9zdHlsZS9pbmRleC5jc3NcIik7XG5cbnJlcXVpcmUoXCIuL2luZGV4LmNzc1wiKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNzcy5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2xheW91dC9zdHlsZS9jc3MuanNcbi8vIG1vZHVsZSBpZCA9IDM3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxucmVxdWlyZShcIi4uLy4uL3N0eWxlL2luZGV4LmNzc1wiKTtcblxucmVxdWlyZShcIi4vaW5kZXguY3NzXCIpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3NzLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvaWNvbi9zdHlsZS9jc3MuanNcbi8vIG1vZHVsZSBpZCA9IDM3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JlYWN0TGlmZWN5Y2xlc0NvbXBhdCA9IHJlcXVpcmUoXCJyZWFjdC1saWZlY3ljbGVzLWNvbXBhdFwiKTtcblxudmFyIF9yY1Rvb2x0aXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy10b29sdGlwXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfcGxhY2VtZW50cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcGxhY2VtZW50c1wiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTsgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG52YXIgc3BsaXRPYmplY3QgPSBmdW5jdGlvbiBzcGxpdE9iamVjdChvYmosIGtleXMpIHtcbiAgdmFyIHBpY2tlZCA9IHt9O1xuXG4gIHZhciBvbWl0dGVkID0gX2V4dGVuZHMoe30sIG9iaik7XG5cbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAob2JqICYmIGtleSBpbiBvYmopIHtcbiAgICAgIHBpY2tlZFtrZXldID0gb2JqW2tleV07XG4gICAgICBkZWxldGUgb21pdHRlZFtrZXldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7XG4gICAgcGlja2VkOiBwaWNrZWQsXG4gICAgb21pdHRlZDogb21pdHRlZFxuICB9O1xufTtcblxudmFyIFRvb2x0aXAgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFRvb2x0aXAsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRvb2x0aXAocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVG9vbHRpcCk7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihUb29sdGlwKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5vblZpc2libGVDaGFuZ2UgPSBmdW5jdGlvbiAodmlzaWJsZSkge1xuICAgICAgdmFyIG9uVmlzaWJsZUNoYW5nZSA9IF90aGlzLnByb3BzLm9uVmlzaWJsZUNoYW5nZTtcblxuICAgICAgaWYgKCEoJ3Zpc2libGUnIGluIF90aGlzLnByb3BzKSkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdmlzaWJsZTogX3RoaXMuaXNOb1RpdGxlKCkgPyBmYWxzZSA6IHZpc2libGVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvblZpc2libGVDaGFuZ2UgJiYgIV90aGlzLmlzTm9UaXRsZSgpKSB7XG4gICAgICAgIG9uVmlzaWJsZUNoYW5nZSh2aXNpYmxlKTtcbiAgICAgIH1cbiAgICB9OyAvLyDliqjmgIHorr7nva7liqjnlLvngrlcblxuXG4gICAgX3RoaXMub25Qb3B1cEFsaWduID0gZnVuY3Rpb24gKGRvbU5vZGUsIGFsaWduKSB7XG4gICAgICB2YXIgcGxhY2VtZW50cyA9IF90aGlzLmdldFBsYWNlbWVudHMoKTsgLy8g5b2T5YmN6L+U5Zue55qE5L2N572uXG5cblxuICAgICAgdmFyIHBsYWNlbWVudCA9IE9iamVjdC5rZXlzKHBsYWNlbWVudHMpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiBwbGFjZW1lbnRzW2tleV0ucG9pbnRzWzBdID09PSBhbGlnbi5wb2ludHNbMF0gJiYgcGxhY2VtZW50c1trZXldLnBvaW50c1sxXSA9PT0gYWxpZ24ucG9pbnRzWzFdO1xuICAgICAgfSlbMF07XG5cbiAgICAgIGlmICghcGxhY2VtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8g5qC55o2u5b2T5YmN5Z2Q5qCH6K6+572u5Yqo55S754K5XG5cblxuICAgICAgdmFyIHJlY3QgPSBkb21Ob2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdmFyIHRyYW5zZm9ybU9yaWdpbiA9IHtcbiAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgbGVmdDogJzUwJSdcbiAgICAgIH07XG5cbiAgICAgIGlmIChwbGFjZW1lbnQuaW5kZXhPZigndG9wJykgPj0gMCB8fCBwbGFjZW1lbnQuaW5kZXhPZignQm90dG9tJykgPj0gMCkge1xuICAgICAgICB0cmFuc2Zvcm1PcmlnaW4udG9wID0gXCJcIi5jb25jYXQocmVjdC5oZWlnaHQgLSBhbGlnbi5vZmZzZXRbMV0sIFwicHhcIik7XG4gICAgICB9IGVsc2UgaWYgKHBsYWNlbWVudC5pbmRleE9mKCdUb3AnKSA+PSAwIHx8IHBsYWNlbWVudC5pbmRleE9mKCdib3R0b20nKSA+PSAwKSB7XG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbi50b3AgPSBcIlwiLmNvbmNhdCgtYWxpZ24ub2Zmc2V0WzFdLCBcInB4XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAocGxhY2VtZW50LmluZGV4T2YoJ2xlZnQnKSA+PSAwIHx8IHBsYWNlbWVudC5pbmRleE9mKCdSaWdodCcpID49IDApIHtcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luLmxlZnQgPSBcIlwiLmNvbmNhdChyZWN0LndpZHRoIC0gYWxpZ24ub2Zmc2V0WzBdLCBcInB4XCIpO1xuICAgICAgfSBlbHNlIGlmIChwbGFjZW1lbnQuaW5kZXhPZigncmlnaHQnKSA+PSAwIHx8IHBsYWNlbWVudC5pbmRleE9mKCdMZWZ0JykgPj0gMCkge1xuICAgICAgICB0cmFuc2Zvcm1PcmlnaW4ubGVmdCA9IFwiXCIuY29uY2F0KC1hbGlnbi5vZmZzZXRbMF0sIFwicHhcIik7XG4gICAgICB9XG5cbiAgICAgIGRvbU5vZGUuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gXCJcIi5jb25jYXQodHJhbnNmb3JtT3JpZ2luLmxlZnQsIFwiIFwiKS5jb25jYXQodHJhbnNmb3JtT3JpZ2luLnRvcCk7XG4gICAgfTtcblxuICAgIF90aGlzLnNhdmVUb29sdGlwID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIF90aGlzLnRvb2x0aXAgPSBub2RlO1xuICAgIH07XG5cbiAgICBfdGhpcy5yZW5kZXJUb29sdGlwID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBnZXRDb250ZXh0UG9wdXBDb250YWluZXIgPSBfcmVmLmdldFBvcHVwQ29udGFpbmVyLFxuICAgICAgICAgIGdldFByZWZpeENscyA9IF9yZWYuZ2V0UHJlZml4Q2xzO1xuXG4gICAgICB2YXIgX2Fzc2VydFRoaXNJbml0aWFsaXplID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksXG4gICAgICAgICAgcHJvcHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemUucHJvcHMsXG4gICAgICAgICAgc3RhdGUgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemUuc3RhdGU7XG5cbiAgICAgIHZhciBjdXN0b21pemVQcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgdGl0bGUgPSBwcm9wcy50aXRsZSxcbiAgICAgICAgICBvdmVybGF5ID0gcHJvcHMub3ZlcmxheSxcbiAgICAgICAgICBvcGVuQ2xhc3NOYW1lID0gcHJvcHMub3BlbkNsYXNzTmFtZSxcbiAgICAgICAgICBnZXRQb3B1cENvbnRhaW5lciA9IHByb3BzLmdldFBvcHVwQ29udGFpbmVyLFxuICAgICAgICAgIGdldFRvb2x0aXBDb250YWluZXIgPSBwcm9wcy5nZXRUb29sdGlwQ29udGFpbmVyO1xuICAgICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG4gICAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCd0b29sdGlwJywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgICAgIHZhciB2aXNpYmxlID0gc3RhdGUudmlzaWJsZTsgLy8gSGlkZSB0b29sdGlwIHdoZW4gdGhlcmUgaXMgbm8gdGl0bGVcblxuICAgICAgaWYgKCEoJ3Zpc2libGUnIGluIHByb3BzKSAmJiBfdGhpcy5pc05vVGl0bGUoKSkge1xuICAgICAgICB2aXNpYmxlID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBjaGlsZCA9IF90aGlzLmdldERpc2FibGVkQ29tcGF0aWJsZUNoaWxkcmVuKFJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgY2hpbGRyZW4pKTtcblxuICAgICAgdmFyIGNoaWxkUHJvcHMgPSBjaGlsZC5wcm9wcztcbiAgICAgIHZhciBjaGlsZENscyA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKGNoaWxkUHJvcHMuY2xhc3NOYW1lLCBfZGVmaW5lUHJvcGVydHkoe30sIG9wZW5DbGFzc05hbWUgfHwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1vcGVuXCIpLCB0cnVlKSk7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfcmNUb29sdGlwW1wiZGVmYXVsdFwiXSwgX2V4dGVuZHMoe30sIF90aGlzLnByb3BzLCB7XG4gICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICBnZXRUb29sdGlwQ29udGFpbmVyOiBnZXRQb3B1cENvbnRhaW5lciB8fCBnZXRUb29sdGlwQ29udGFpbmVyIHx8IGdldENvbnRleHRQb3B1cENvbnRhaW5lcixcbiAgICAgICAgcmVmOiBfdGhpcy5zYXZlVG9vbHRpcCxcbiAgICAgICAgYnVpbHRpblBsYWNlbWVudHM6IF90aGlzLmdldFBsYWNlbWVudHMoKSxcbiAgICAgICAgb3ZlcmxheTogb3ZlcmxheSB8fCB0aXRsZSB8fCAnJyxcbiAgICAgICAgdmlzaWJsZTogdmlzaWJsZSxcbiAgICAgICAgb25WaXNpYmxlQ2hhbmdlOiBfdGhpcy5vblZpc2libGVDaGFuZ2UsXG4gICAgICAgIG9uUG9wdXBBbGlnbjogX3RoaXMub25Qb3B1cEFsaWduXG4gICAgICB9KSwgdmlzaWJsZSA/ICgwLCBSZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2hpbGRDbHNcbiAgICAgIH0pIDogY2hpbGQpO1xuICAgIH07XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZpc2libGU6ICEhcHJvcHMudmlzaWJsZSB8fCAhIXByb3BzLmRlZmF1bHRWaXNpYmxlXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVG9vbHRpcCwgW3tcbiAgICBrZXk6IFwiZ2V0UG9wdXBEb21Ob2RlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBvcHVwRG9tTm9kZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvb2x0aXAuZ2V0UG9wdXBEb21Ob2RlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFBsYWNlbWVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UGxhY2VtZW50cygpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYnVpbHRpblBsYWNlbWVudHMgPSBfdGhpcyRwcm9wcy5idWlsdGluUGxhY2VtZW50cyxcbiAgICAgICAgICBhcnJvd1BvaW50QXRDZW50ZXIgPSBfdGhpcyRwcm9wcy5hcnJvd1BvaW50QXRDZW50ZXIsXG4gICAgICAgICAgYXV0b0FkanVzdE92ZXJmbG93ID0gX3RoaXMkcHJvcHMuYXV0b0FkanVzdE92ZXJmbG93O1xuICAgICAgcmV0dXJuIGJ1aWx0aW5QbGFjZW1lbnRzIHx8ICgwLCBfcGxhY2VtZW50c1tcImRlZmF1bHRcIl0pKHtcbiAgICAgICAgYXJyb3dQb2ludEF0Q2VudGVyOiBhcnJvd1BvaW50QXRDZW50ZXIsXG4gICAgICAgIHZlcnRpY2FsQXJyb3dTaGlmdDogOCxcbiAgICAgICAgYXV0b0FkanVzdE92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3dcbiAgICAgIH0pO1xuICAgIH0gLy8gRml4IFRvb2x0aXAgd29uJ3QgaGlkZSBhdCBkaXNhYmxlZCBidXR0b25cbiAgICAvLyBtb3VzZSBldmVudHMgZG9uJ3QgdHJpZ2dlciBhdCBkaXNhYmxlZCBidXR0b24gaW4gQ2hyb21lXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC90b29sdGlwL2lzc3Vlcy8xOFxuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0RGlzYWJsZWRDb21wYXRpYmxlQ2hpbGRyZW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGlzYWJsZWRDb21wYXRpYmxlQ2hpbGRyZW4oZWxlbWVudCkge1xuICAgICAgdmFyIGVsZW1lbnRUeXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgICBpZiAoKGVsZW1lbnRUeXBlLl9fQU5UX0JVVFRPTiB8fCBlbGVtZW50VHlwZS5fX0FOVF9TV0lUQ0ggfHwgZWxlbWVudC50eXBlID09PSAnYnV0dG9uJykgJiYgZWxlbWVudC5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICAvLyBQaWNrIHNvbWUgbGF5b3V0IHJlbGF0ZWQgc3R5bGUgcHJvcGVydGllcyB1cCB0byBzcGFuXG4gICAgICAgIC8vIFByZXZlbnQgbGF5b3V0IGJ1Z3MgbGlrZSBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy81MjU0XG4gICAgICAgIHZhciBfc3BsaXRPYmplY3QgPSBzcGxpdE9iamVjdChlbGVtZW50LnByb3BzLnN0eWxlLCBbJ3Bvc2l0aW9uJywgJ2xlZnQnLCAncmlnaHQnLCAndG9wJywgJ2JvdHRvbScsICdmbG9hdCcsICdkaXNwbGF5JywgJ3pJbmRleCddKSxcbiAgICAgICAgICAgIHBpY2tlZCA9IF9zcGxpdE9iamVjdC5waWNrZWQsXG4gICAgICAgICAgICBvbWl0dGVkID0gX3NwbGl0T2JqZWN0Lm9taXR0ZWQ7XG5cbiAgICAgICAgdmFyIHNwYW5TdHlsZSA9IF9leHRlbmRzKHtcbiAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xuICAgICAgICB9LCBwaWNrZWQsIHtcbiAgICAgICAgICBjdXJzb3I6ICdub3QtYWxsb3dlZCcsXG4gICAgICAgICAgd2lkdGg6IGVsZW1lbnQucHJvcHMuYmxvY2sgPyAnMTAwJScgOiBudWxsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBidXR0b25TdHlsZSA9IF9leHRlbmRzKHt9LCBvbWl0dGVkLCB7XG4gICAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBjaGlsZCA9ICgwLCBSZWFjdC5jbG9uZUVsZW1lbnQpKGVsZW1lbnQsIHtcbiAgICAgICAgICBzdHlsZTogYnV0dG9uU3R5bGUsXG4gICAgICAgICAgY2xhc3NOYW1lOiBudWxsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICAgIHN0eWxlOiBzcGFuU3R5bGUsXG4gICAgICAgICAgY2xhc3NOYW1lOiBlbGVtZW50LnByb3BzLmNsYXNzTmFtZVxuICAgICAgICB9LCBjaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc05vVGl0bGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNOb1RpdGxlKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgdGl0bGUgPSBfdGhpcyRwcm9wczIudGl0bGUsXG4gICAgICAgICAgb3ZlcmxheSA9IF90aGlzJHByb3BzMi5vdmVybGF5O1xuICAgICAgcmV0dXJuICF0aXRsZSAmJiAhb3ZlcmxheTsgLy8gb3ZlcmxheSBmb3Igb2xkIHZlcnNpb24gY29tcGF0aWJpbGl0eVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnN1bWVyLCBudWxsLCB0aGlzLnJlbmRlclRvb2x0aXApO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAoJ3Zpc2libGUnIGluIG5leHRQcm9wcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZpc2libGU6IG5leHRQcm9wcy52aXNpYmxlXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBUb29sdGlwO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5Ub29sdGlwLmRlZmF1bHRQcm9wcyA9IHtcbiAgcGxhY2VtZW50OiAndG9wJyxcbiAgdHJhbnNpdGlvbk5hbWU6ICd6b29tLWJpZy1mYXN0JyxcbiAgbW91c2VFbnRlckRlbGF5OiAwLjEsXG4gIG1vdXNlTGVhdmVEZWxheTogMC4xLFxuICBhcnJvd1BvaW50QXRDZW50ZXI6IGZhbHNlLFxuICBhdXRvQWRqdXN0T3ZlcmZsb3c6IHRydWVcbn07XG4oMCwgX3JlYWN0TGlmZWN5Y2xlc0NvbXBhdC5wb2x5ZmlsbCkoVG9vbHRpcCk7XG52YXIgX2RlZmF1bHQgPSBUb29sdGlwO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvdG9vbHRpcC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB3cmFwcGVyUmFmO1xuXG52YXIgX3JhZiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJhZlwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgaWQgPSAwO1xudmFyIGlkcyA9IHt9OyAvLyBTdXBwb3J0IGNhbGwgcmFmIHdpdGggZGVsYXkgc3BlY2lmaWVkIGZyYW1lXG5cbmZ1bmN0aW9uIHdyYXBwZXJSYWYoY2FsbGJhY2spIHtcbiAgdmFyIGRlbGF5RnJhbWVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxO1xuICB2YXIgbXlJZCA9IGlkKys7XG4gIHZhciByZXN0RnJhbWVzID0gZGVsYXlGcmFtZXM7XG5cbiAgZnVuY3Rpb24gaW50ZXJuYWxDYWxsYmFjaygpIHtcbiAgICByZXN0RnJhbWVzIC09IDE7XG5cbiAgICBpZiAocmVzdEZyYW1lcyA8PSAwKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgICAgZGVsZXRlIGlkc1tteUlkXTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWRzW215SWRdID0gKDAsIF9yYWZbXCJkZWZhdWx0XCJdKShpbnRlcm5hbENhbGxiYWNrKTtcbiAgICB9XG4gIH1cblxuICBpZHNbbXlJZF0gPSAoMCwgX3JhZltcImRlZmF1bHRcIl0pKGludGVybmFsQ2FsbGJhY2spO1xuICByZXR1cm4gbXlJZDtcbn1cblxud3JhcHBlclJhZi5jYW5jZWwgPSBmdW5jdGlvbiAocGlkKSB7XG4gIGlmIChwaWQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG4gIF9yYWZbXCJkZWZhdWx0XCJdLmNhbmNlbChpZHNbcGlkXSk7XG5cbiAgZGVsZXRlIGlkc1twaWRdO1xufTtcblxud3JhcHBlclJhZi5pZHMgPSBpZHM7IC8vIGV4cG9ydCB0aGlzIGZvciB0ZXN0IHVzYWdlXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yYWYuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9fdXRpbC9yYWYuanNcbi8vIG1vZHVsZSBpZCA9IDM5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgUHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX3JjU2VsZWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJjLXNlbGVjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF9vbWl0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwib21pdC5qc1wiKSk7XG5cbnZhciBfd2FybmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL3dhcm5pbmdcIikpO1xuXG52YXIgX2ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9pY29uXCIpKTtcblxudmFyIF90eXBlID0gcmVxdWlyZShcIi4uL191dGlsL3R5cGVcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHt9OyBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgU2VsZWN0U2l6ZXMgPSAoMCwgX3R5cGUudHVwbGUpKCdkZWZhdWx0JywgJ2xhcmdlJywgJ3NtYWxsJyk7XG52YXIgU2VsZWN0UHJvcFR5cGVzID0ge1xuICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFNlbGVjdFNpemVzKSxcbiAgbm90Rm91bmRDb250ZW50OiBQcm9wVHlwZXMuYW55LFxuICBzaG93U2VhcmNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgb3B0aW9uTGFiZWxQcm9wOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0cmFuc2l0aW9uTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hvaWNlVHJhbnNpdGlvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nXG59OyAvLyA9PiBJdCBpcyBuZWVkbGVzcyB0byBleHBvcnQgdGhlIGRlY2xhcmF0aW9uIG9mIGJlbG93IHR3byBpbm5lciBjb21wb25lbnRzLlxuLy8gZXhwb3J0IHsgT3B0aW9uLCBPcHRHcm91cCB9O1xuXG52YXIgU2VsZWN0ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhTZWxlY3QsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFNlbGVjdChwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTZWxlY3QpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoU2VsZWN0KS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zYXZlU2VsZWN0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIF90aGlzLnJjU2VsZWN0ID0gbm9kZTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVyU2VsZWN0ID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgdmFyIGdldENvbnRleHRQb3B1cENvbnRhaW5lciA9IF9yZWYuZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICAgICAgZ2V0UHJlZml4Q2xzID0gX3JlZi5nZXRQcmVmaXhDbHMsXG4gICAgICAgICAgcmVuZGVyRW1wdHkgPSBfcmVmLnJlbmRlckVtcHR5O1xuXG4gICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBjdXN0b21pemVQcmVmaXhDbHMgPSBfYS5wcmVmaXhDbHMsXG4gICAgICAgICAgX2EkY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9hJGNsYXNzTmFtZSA9PT0gdm9pZCAwID8gJycgOiBfYSRjbGFzc05hbWUsXG4gICAgICAgICAgc2l6ZSA9IF9hLnNpemUsXG4gICAgICAgICAgbW9kZSA9IF9hLm1vZGUsXG4gICAgICAgICAgZ2V0UG9wdXBDb250YWluZXIgPSBfYS5nZXRQb3B1cENvbnRhaW5lcixcbiAgICAgICAgICByZW1vdmVJY29uID0gX2EucmVtb3ZlSWNvbixcbiAgICAgICAgICBjbGVhckljb24gPSBfYS5jbGVhckljb24sXG4gICAgICAgICAgbWVudUl0ZW1TZWxlY3RlZEljb24gPSBfYS5tZW51SXRlbVNlbGVjdGVkSWNvbixcbiAgICAgICAgICBzaG93QXJyb3cgPSBfYS5zaG93QXJyb3csXG4gICAgICAgICAgcmVzdFByb3BzID0gX19yZXN0KF9hLCBbXCJwcmVmaXhDbHNcIiwgXCJjbGFzc05hbWVcIiwgXCJzaXplXCIsIFwibW9kZVwiLCBcImdldFBvcHVwQ29udGFpbmVyXCIsIFwicmVtb3ZlSWNvblwiLCBcImNsZWFySWNvblwiLCBcIm1lbnVJdGVtU2VsZWN0ZWRJY29uXCIsIFwic2hvd0Fycm93XCJdKTtcblxuICAgICAgdmFyIHJlc3QgPSAoMCwgX29taXRbXCJkZWZhdWx0XCJdKShyZXN0UHJvcHMsIFsnaW5wdXRJY29uJ10pO1xuICAgICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnc2VsZWN0JywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgICAgIHZhciBjbHMgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKSgoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWxnXCIpLCBzaXplID09PSAnbGFyZ2UnKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNtXCIpLCBzaXplID09PSAnc21hbGwnKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNob3ctYXJyb3dcIiksIHNob3dBcnJvdyksIF9jbGFzc05hbWVzKSwgY2xhc3NOYW1lKTtcbiAgICAgIHZhciBvcHRpb25MYWJlbFByb3AgPSBfdGhpcy5wcm9wcy5vcHRpb25MYWJlbFByb3A7XG5cbiAgICAgIGlmIChfdGhpcy5pc0NvbWJvYm94KCkpIHtcbiAgICAgICAgLy8gY2hpbGRyZW4g5bimIGRvbSDnu5PmnoTml7bvvIzml6Dms5XloavlhaXovpPlhaXmoYZcbiAgICAgICAgb3B0aW9uTGFiZWxQcm9wID0gb3B0aW9uTGFiZWxQcm9wIHx8ICd2YWx1ZSc7XG4gICAgICB9XG5cbiAgICAgIHZhciBtb2RlQ29uZmlnID0ge1xuICAgICAgICBtdWx0aXBsZTogbW9kZSA9PT0gJ211bHRpcGxlJyxcbiAgICAgICAgdGFnczogbW9kZSA9PT0gJ3RhZ3MnLFxuICAgICAgICBjb21ib2JveDogX3RoaXMuaXNDb21ib2JveCgpXG4gICAgICB9O1xuICAgICAgdmFyIGZpbmFsUmVtb3ZlSWNvbiA9IHJlbW92ZUljb24gJiYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KHJlbW92ZUljb24pID8gUmVhY3QuY2xvbmVFbGVtZW50KHJlbW92ZUljb24sIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShyZW1vdmVJY29uLnByb3BzLmNsYXNzTmFtZSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1yZW1vdmUtaWNvblwiKSlcbiAgICAgIH0pIDogcmVtb3ZlSWNvbikgfHwgUmVhY3QuY3JlYXRlRWxlbWVudChfaWNvbltcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgdHlwZTogXCJjbG9zZVwiLFxuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcmVtb3ZlLWljb25cIilcbiAgICAgIH0pO1xuICAgICAgdmFyIGZpbmFsQ2xlYXJJY29uID0gY2xlYXJJY29uICYmIChSZWFjdC5pc1ZhbGlkRWxlbWVudChjbGVhckljb24pID8gUmVhY3QuY2xvbmVFbGVtZW50KGNsZWFySWNvbiwge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKGNsZWFySWNvbi5wcm9wcy5jbGFzc05hbWUsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY2xlYXItaWNvblwiKSlcbiAgICAgIH0pIDogY2xlYXJJY29uKSB8fCBSZWFjdC5jcmVhdGVFbGVtZW50KF9pY29uW1wiZGVmYXVsdFwiXSwge1xuICAgICAgICB0eXBlOiBcImNsb3NlLWNpcmNsZVwiLFxuICAgICAgICB0aGVtZTogXCJmaWxsZWRcIixcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNsZWFyLWljb25cIilcbiAgICAgIH0pO1xuICAgICAgdmFyIGZpbmFsTWVudUl0ZW1TZWxlY3RlZEljb24gPSBtZW51SXRlbVNlbGVjdGVkSWNvbiAmJiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQobWVudUl0ZW1TZWxlY3RlZEljb24pID8gUmVhY3QuY2xvbmVFbGVtZW50KG1lbnVJdGVtU2VsZWN0ZWRJY29uLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkobWVudUl0ZW1TZWxlY3RlZEljb24ucHJvcHMuY2xhc3NOYW1lLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNlbGVjdGVkLWljb25cIikpXG4gICAgICB9KSA6IG1lbnVJdGVtU2VsZWN0ZWRJY29uKSB8fCBSZWFjdC5jcmVhdGVFbGVtZW50KF9pY29uW1wiZGVmYXVsdFwiXSwge1xuICAgICAgICB0eXBlOiBcImNoZWNrXCIsXG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zZWxlY3RlZC1pY29uXCIpXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9yY1NlbGVjdFtcImRlZmF1bHRcIl0sIF9leHRlbmRzKHtcbiAgICAgICAgaW5wdXRJY29uOiBfdGhpcy5yZW5kZXJTdWZmaXhJY29uKHByZWZpeENscyksXG4gICAgICAgIHJlbW92ZUljb246IGZpbmFsUmVtb3ZlSWNvbixcbiAgICAgICAgY2xlYXJJY29uOiBmaW5hbENsZWFySWNvbixcbiAgICAgICAgbWVudUl0ZW1TZWxlY3RlZEljb246IGZpbmFsTWVudUl0ZW1TZWxlY3RlZEljb24sXG4gICAgICAgIHNob3dBcnJvdzogc2hvd0Fycm93XG4gICAgICB9LCByZXN0LCBtb2RlQ29uZmlnLCB7XG4gICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICBjbGFzc05hbWU6IGNscyxcbiAgICAgICAgb3B0aW9uTGFiZWxQcm9wOiBvcHRpb25MYWJlbFByb3AgfHwgJ2NoaWxkcmVuJyxcbiAgICAgICAgbm90Rm91bmRDb250ZW50OiBfdGhpcy5nZXROb3RGb3VuZENvbnRlbnQocmVuZGVyRW1wdHkpLFxuICAgICAgICBnZXRQb3B1cENvbnRhaW5lcjogZ2V0UG9wdXBDb250YWluZXIgfHwgZ2V0Q29udGV4dFBvcHVwQ29udGFpbmVyLFxuICAgICAgICByZWY6IF90aGlzLnNhdmVTZWxlY3RcbiAgICAgIH0pKTtcbiAgICB9O1xuXG4gICAgKDAsIF93YXJuaW5nW1wiZGVmYXVsdFwiXSkocHJvcHMubW9kZSAhPT0gJ2NvbWJvYm94JywgJ1NlbGVjdCcsICdUaGUgY29tYm9ib3ggbW9kZSBpcyBkZXByZWNhdGVkLCAnICsgJ2l0IHdpbGwgYmUgcmVtb3ZlZCBpbiBuZXh0IG1ham9yIHZlcnNpb24sICcgKyAncGxlYXNlIHVzZSBBdXRvQ29tcGxldGUgaW5zdGVhZCcpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTZWxlY3QsIFt7XG4gICAga2V5OiBcImZvY3VzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvY3VzKCkge1xuICAgICAgdGhpcy5yY1NlbGVjdC5mb2N1cygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJibHVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJsdXIoKSB7XG4gICAgICB0aGlzLnJjU2VsZWN0LmJsdXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Tm90Rm91bmRDb250ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE5vdEZvdW5kQ29udGVudChyZW5kZXJFbXB0eSkge1xuICAgICAgdmFyIG5vdEZvdW5kQ29udGVudCA9IHRoaXMucHJvcHMubm90Rm91bmRDb250ZW50O1xuXG4gICAgICBpZiAobm90Rm91bmRDb250ZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIG5vdEZvdW5kQ29udGVudDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaXNDb21ib2JveCgpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVuZGVyRW1wdHkoJ1NlbGVjdCcpOyAvLyBpZiAodGhpcy5pc0NvbWJvYm94KCkpIHtcbiAgICAgIC8vICAgLy8gQXV0b0NvbXBsZXRlIGRvbid0IGhhdmUgbm90Rm91bmRDb250ZW50IGRlZmF1bHRseVxuICAgICAgLy8gICByZXR1cm4gbm90Rm91bmRDb250ZW50ID09PSB1bmRlZmluZWQgPyBudWxsIDogbm90Rm91bmRDb250ZW50O1xuICAgICAgLy8gfVxuICAgICAgLy8gcmV0dXJuIHJlbmRlckVtcHR5KCdTZWxlY3QnKTtcbiAgICAgIC8vIC8vIHJldHVybiBub3RGb3VuZENvbnRlbnQgPT09IHVuZGVmaW5lZCA/IGxvY2FsZS5ub3RGb3VuZENvbnRlbnQgOiBub3RGb3VuZENvbnRlbnQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzQ29tYm9ib3hcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNDb21ib2JveCgpIHtcbiAgICAgIHZhciBtb2RlID0gdGhpcy5wcm9wcy5tb2RlO1xuICAgICAgcmV0dXJuIG1vZGUgPT09ICdjb21ib2JveCcgfHwgbW9kZSA9PT0gU2VsZWN0LlNFQ1JFVF9DT01CT0JPWF9NT0RFX0RPX05PVF9VU0U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclN1ZmZpeEljb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyU3VmZml4SWNvbihwcmVmaXhDbHMpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgbG9hZGluZyA9IF90aGlzJHByb3BzLmxvYWRpbmcsXG4gICAgICAgICAgc3VmZml4SWNvbiA9IF90aGlzJHByb3BzLnN1ZmZpeEljb247XG5cbiAgICAgIGlmIChzdWZmaXhJY29uKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5pc1ZhbGlkRWxlbWVudChzdWZmaXhJY29uKSA/IFJlYWN0LmNsb25lRWxlbWVudChzdWZmaXhJY29uLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShzdWZmaXhJY29uLnByb3BzLmNsYXNzTmFtZSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1hcnJvdy1pY29uXCIpKVxuICAgICAgICB9KSA6IHN1ZmZpeEljb247XG4gICAgICB9XG5cbiAgICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9pY29uW1wiZGVmYXVsdFwiXSwge1xuICAgICAgICAgIHR5cGU6IFwibG9hZGluZ1wiXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfaWNvbltcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgdHlwZTogXCJkb3duXCIsXG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1hcnJvdy1pY29uXCIpXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9jb25maWdQcm92aWRlci5Db25maWdDb25zdW1lciwgbnVsbCwgdGhpcy5yZW5kZXJTZWxlY3QpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTZWxlY3Q7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gU2VsZWN0O1xuU2VsZWN0Lk9wdGlvbiA9IF9yY1NlbGVjdC5PcHRpb247XG5TZWxlY3QuT3B0R3JvdXAgPSBfcmNTZWxlY3QuT3B0R3JvdXA7XG5TZWxlY3QuU0VDUkVUX0NPTUJPQk9YX01PREVfRE9fTk9UX1VTRSA9ICdTRUNSRVRfQ09NQk9CT1hfTU9ERV9ET19OT1RfVVNFJztcblNlbGVjdC5kZWZhdWx0UHJvcHMgPSB7XG4gIHNob3dTZWFyY2g6IGZhbHNlLFxuICB0cmFuc2l0aW9uTmFtZTogJ3NsaWRlLXVwJyxcbiAgY2hvaWNlVHJhbnNpdGlvbk5hbWU6ICd6b29tJ1xufTtcblNlbGVjdC5wcm9wVHlwZXMgPSBTZWxlY3RQcm9wVHlwZXM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3NlbGVjdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUm93XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9yb3dbXCJkZWZhdWx0XCJdO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkNvbFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfY29sW1wiZGVmYXVsdFwiXTtcbiAgfVxufSk7XG5cbnZhciBfcm93ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yb3dcIikpO1xuXG52YXIgX2NvbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY29sXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2dyaWQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIGFsbEljb25zID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL2xpYi9kaXN0XCIpKTtcblxudmFyIF9pY29uc1JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMtcmVhY3RcIikpO1xuXG52YXIgX0ljb25Gb250ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9JY29uRm9udFwiKSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcblxudmFyIF93YXJuaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vX3V0aWwvd2FybmluZ1wiKSk7XG5cbnZhciBfTG9jYWxlUmVjZWl2ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9sb2NhbGUtcHJvdmlkZXIvTG9jYWxlUmVjZWl2ZXJcIikpO1xuXG52YXIgX3R3b1RvbmVQcmltYXJ5Q29sb3IgPSByZXF1aXJlKFwiLi90d29Ub25lUHJpbWFyeUNvbG9yXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTsgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHsgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSB9XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG4vLyBJbml0aWFsIHNldHRpbmdcbl9pY29uc1JlYWN0W1wiZGVmYXVsdFwiXS5hZGQuYXBwbHkoX2ljb25zUmVhY3RbXCJkZWZhdWx0XCJdLCBfdG9Db25zdW1hYmxlQXJyYXkoT2JqZWN0LmtleXMoYWxsSWNvbnMpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBhbGxJY29uc1trZXldO1xufSkpKTtcblxuKDAsIF90d29Ub25lUHJpbWFyeUNvbG9yLnNldFR3b1RvbmVDb2xvcikoJyMxODkwZmYnKTtcbnZhciBkZWZhdWx0VGhlbWUgPSAnb3V0bGluZWQnO1xudmFyIGRhbmdlcm91c1RoZW1lID0gdW5kZWZpbmVkO1xuXG52YXIgSWNvbiA9IGZ1bmN0aW9uIEljb24ocHJvcHMpIHtcbiAgdmFyIF9jbGFzc05hbWVzO1xuXG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICB0eXBlID0gcHJvcHMudHlwZSxcbiAgICAgIENvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudCxcbiAgICAgIHZpZXdCb3ggPSBwcm9wcy52aWV3Qm94LFxuICAgICAgc3BpbiA9IHByb3BzLnNwaW4sXG4gICAgICByb3RhdGUgPSBwcm9wcy5yb3RhdGUsXG4gICAgICB0YWJJbmRleCA9IHByb3BzLnRhYkluZGV4LFxuICAgICAgb25DbGljayA9IHByb3BzLm9uQ2xpY2ssXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgdGhlbWUgPSBwcm9wcy50aGVtZSxcbiAgICAgIHR3b1RvbmVDb2xvciA9IHByb3BzLnR3b1RvbmVDb2xvcixcbiAgICAgIHJlc3RQcm9wcyA9IF9fcmVzdChwcm9wcywgW1wiY2xhc3NOYW1lXCIsIFwidHlwZVwiLCBcImNvbXBvbmVudFwiLCBcInZpZXdCb3hcIiwgXCJzcGluXCIsIFwicm90YXRlXCIsIFwidGFiSW5kZXhcIiwgXCJvbkNsaWNrXCIsIFwiY2hpbGRyZW5cIiwgXCJ0aGVtZVwiLCBcInR3b1RvbmVDb2xvclwiXSk7XG5cbiAgKDAsIF93YXJuaW5nW1wiZGVmYXVsdFwiXSkoQm9vbGVhbih0eXBlIHx8IENvbXBvbmVudCB8fCBjaGlsZHJlbiksICdJY29uJywgJ1Nob3VsZCBoYXZlIGB0eXBlYCBwcm9wIG9yIGBjb21wb25lbnRgIHByb3Agb3IgYGNoaWxkcmVuYC4nKTtcbiAgdmFyIGNsYXNzU3RyaW5nID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJhbnRpY29uXCIsIHRydWUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiYW50aWNvbi1cIi5jb25jYXQodHlwZSksIEJvb2xlYW4odHlwZSkpLCBfY2xhc3NOYW1lcyksIGNsYXNzTmFtZSk7XG4gIHZhciBzdmdDbGFzc1N0cmluZyA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJhbnRpY29uLXNwaW5cIiwgISFzcGluIHx8IHR5cGUgPT09ICdsb2FkaW5nJykpO1xuICB2YXIgaW5uZXJOb2RlO1xuICB2YXIgc3ZnU3R5bGUgPSByb3RhdGUgPyB7XG4gICAgbXNUcmFuc2Zvcm06IFwicm90YXRlKFwiLmNvbmNhdChyb3RhdGUsIFwiZGVnKVwiKSxcbiAgICB0cmFuc2Zvcm06IFwicm90YXRlKFwiLmNvbmNhdChyb3RhdGUsIFwiZGVnKVwiKVxuICB9IDogdW5kZWZpbmVkO1xuXG4gIHZhciBpbm5lclN2Z1Byb3BzID0gX2V4dGVuZHMoe30sIF91dGlscy5zdmdCYXNlUHJvcHMsIHtcbiAgICBjbGFzc05hbWU6IHN2Z0NsYXNzU3RyaW5nLFxuICAgIHN0eWxlOiBzdmdTdHlsZSxcbiAgICB2aWV3Qm94OiB2aWV3Qm94XG4gIH0pO1xuXG4gIGlmICghdmlld0JveCkge1xuICAgIGRlbGV0ZSBpbm5lclN2Z1Byb3BzLnZpZXdCb3g7XG4gIH0gLy8gY29tcG9uZW50ID4gY2hpbGRyZW4gPiB0eXBlXG5cblxuICBpZiAoQ29tcG9uZW50KSB7XG4gICAgaW5uZXJOb2RlID0gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIGlubmVyU3ZnUHJvcHMsIGNoaWxkcmVuKTtcbiAgfVxuXG4gIGlmIChjaGlsZHJlbikge1xuICAgICgwLCBfd2FybmluZ1tcImRlZmF1bHRcIl0pKEJvb2xlYW4odmlld0JveCkgfHwgUmVhY3QuQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pID09PSAxICYmIFJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSAmJiBSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKS50eXBlID09PSAndXNlJywgJ0ljb24nLCAnTWFrZSBzdXJlIHRoYXQgeW91IHByb3ZpZGUgY29ycmVjdCBgdmlld0JveGAnICsgJyBwcm9wIChkZWZhdWx0IGAwIDAgMTAyNCAxMDI0YCkgdG8gdGhlIGljb24uJyk7XG4gICAgaW5uZXJOb2RlID0gUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7fSwgaW5uZXJTdmdQcm9wcywge1xuICAgICAgdmlld0JveDogdmlld0JveFxuICAgIH0pLCBjaGlsZHJlbik7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIGNvbXB1dGVkVHlwZSA9IHR5cGU7XG5cbiAgICBpZiAodGhlbWUpIHtcbiAgICAgIHZhciB0aGVtZUluTmFtZSA9ICgwLCBfdXRpbHMuZ2V0VGhlbWVGcm9tVHlwZU5hbWUpKHR5cGUpO1xuICAgICAgKDAsIF93YXJuaW5nW1wiZGVmYXVsdFwiXSkoIXRoZW1lSW5OYW1lIHx8IHRoZW1lID09PSB0aGVtZUluTmFtZSwgJ0ljb24nLCBcIlRoZSBpY29uIG5hbWUgJ1wiLmNvbmNhdCh0eXBlLCBcIicgYWxyZWFkeSBzcGVjaWZ5IGEgdGhlbWUgJ1wiKS5jb25jYXQodGhlbWVJbk5hbWUsIFwiJyxcIikgKyBcIiB0aGUgJ3RoZW1lJyBwcm9wICdcIi5jb25jYXQodGhlbWUsIFwiJyB3aWxsIGJlIGlnbm9yZWQuXCIpKTtcbiAgICB9XG5cbiAgICBjb21wdXRlZFR5cGUgPSAoMCwgX3V0aWxzLndpdGhUaGVtZVN1ZmZpeCkoKDAsIF91dGlscy5yZW1vdmVUeXBlVGhlbWUpKCgwLCBfdXRpbHMuYWxpYXMpKGNvbXB1dGVkVHlwZSkpLCBkYW5nZXJvdXNUaGVtZSB8fCB0aGVtZSB8fCBkZWZhdWx0VGhlbWUpO1xuICAgIGlubmVyTm9kZSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2ljb25zUmVhY3RbXCJkZWZhdWx0XCJdLCB7XG4gICAgICBjbGFzc05hbWU6IHN2Z0NsYXNzU3RyaW5nLFxuICAgICAgdHlwZTogY29tcHV0ZWRUeXBlLFxuICAgICAgcHJpbWFyeUNvbG9yOiB0d29Ub25lQ29sb3IsXG4gICAgICBzdHlsZTogc3ZnU3R5bGVcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBpY29uVGFiSW5kZXggPSB0YWJJbmRleDtcblxuICBpZiAoaWNvblRhYkluZGV4ID09PSB1bmRlZmluZWQgJiYgb25DbGljaykge1xuICAgIGljb25UYWJJbmRleCA9IC0xO1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX0xvY2FsZVJlY2VpdmVyW1wiZGVmYXVsdFwiXSwge1xuICAgIGNvbXBvbmVudE5hbWU6IFwiSWNvblwiXG4gIH0sIGZ1bmN0aW9uIChsb2NhbGUpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImlcIiwgX2V4dGVuZHMoe1xuICAgICAgXCJhcmlhLWxhYmVsXCI6IHR5cGUgJiYgXCJcIi5jb25jYXQobG9jYWxlLmljb24sIFwiOiBcIikuY29uY2F0KHR5cGUpXG4gICAgfSwgcmVzdFByb3BzLCB7XG4gICAgICB0YWJJbmRleDogaWNvblRhYkluZGV4LFxuICAgICAgb25DbGljazogb25DbGljayxcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NTdHJpbmdcbiAgICB9KSwgaW5uZXJOb2RlKTtcbiAgfSk7XG59O1xuXG5mdW5jdGlvbiB1bnN0YWJsZV9DaGFuZ2VUaGVtZU9mSWNvbnNEYW5nZXJvdXNseSh0aGVtZSkge1xuICAoMCwgX3dhcm5pbmdbXCJkZWZhdWx0XCJdKShmYWxzZSwgJ0ljb24nLCBcIllvdSBhcmUgdXNpbmcgdGhlIHVuc3RhYmxlIG1ldGhvZCAnSWNvbi51bnN0YWJsZV9DaGFuZ2VUaGVtZU9mQWxsSWNvbnNEYW5nZXJvdXNseScsIFwiICsgXCJtYWtlIHN1cmUgdGhhdCBhbGwgdGhlIGljb25zIHdpdGggdGhlbWUgJ1wiLmNvbmNhdCh0aGVtZSwgXCInIGRpc3BsYXkgY29ycmVjdGx5LlwiKSk7XG4gIGRhbmdlcm91c1RoZW1lID0gdGhlbWU7XG59XG5cbmZ1bmN0aW9uIHVuc3RhYmxlX0NoYW5nZURlZmF1bHRUaGVtZU9mSWNvbnModGhlbWUpIHtcbiAgKDAsIF93YXJuaW5nW1wiZGVmYXVsdFwiXSkoZmFsc2UsICdJY29uJywgXCJZb3UgYXJlIHVzaW5nIHRoZSB1bnN0YWJsZSBtZXRob2QgJ0ljb24udW5zdGFibGVfQ2hhbmdlRGVmYXVsdFRoZW1lT2ZJY29ucycsIFwiICsgXCJtYWtlIHN1cmUgdGhhdCBhbGwgdGhlIGljb25zIHdpdGggdGhlbWUgJ1wiLmNvbmNhdCh0aGVtZSwgXCInIGRpc3BsYXkgY29ycmVjdGx5LlwiKSk7XG4gIGRlZmF1bHRUaGVtZSA9IHRoZW1lO1xufVxuXG5JY29uLmNyZWF0ZUZyb21JY29uZm9udENOID0gX0ljb25Gb250W1wiZGVmYXVsdFwiXTtcbkljb24uZ2V0VHdvVG9uZUNvbG9yID0gX3R3b1RvbmVQcmltYXJ5Q29sb3IuZ2V0VHdvVG9uZUNvbG9yO1xuSWNvbi5zZXRUd29Ub25lQ29sb3IgPSBfdHdvVG9uZVByaW1hcnlDb2xvci5zZXRUd29Ub25lQ29sb3I7XG52YXIgX2RlZmF1bHQgPSBJY29uO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvaWNvbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9jcmVhdGVSZWFjdENvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9jcmVhdGUtcmVhY3QtY29udGV4dFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgUm93Q29udGV4dCA9ICgwLCBfY3JlYXRlUmVhY3RDb250ZXh0W1wiZGVmYXVsdFwiXSkoe30pO1xudmFyIF9kZWZhdWx0ID0gUm93Q29udGV4dDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Sb3dDb250ZXh0LmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZ3JpZC9Sb3dDb250ZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSA0MDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9idXR0b24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2J1dHRvblwiKSk7XG5cbnZhciBfYnV0dG9uR3JvdXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2J1dHRvbi1ncm91cFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5fYnV0dG9uW1wiZGVmYXVsdFwiXS5Hcm91cCA9IF9idXR0b25Hcm91cFtcImRlZmF1bHRcIl07XG52YXIgX2RlZmF1bHQgPSBfYnV0dG9uW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2J1dHRvbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5yZXF1aXJlKFwiLi4vLi4vc3R5bGUvaW5kZXguY3NzXCIpO1xuXG5yZXF1aXJlKFwiLi9pbmRleC5jc3NcIik7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jc3MuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9lbXB0eS9zdHlsZS9jc3MuanNcbi8vIG1vZHVsZSBpZCA9IDQwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxucmVxdWlyZShcIi4uLy4uL3N0eWxlL2luZGV4LmNzc1wiKTtcblxucmVxdWlyZShcIi4vaW5kZXguY3NzXCIpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3NzLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvYnV0dG9uL3N0eWxlL2Nzcy5qc1xuLy8gbW9kdWxlIGlkID0gNDA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSb3V0ZXMgZnJvbSAnLi9yb3V0ZXInO1xuXG5SZWFjdERPTS5yZW5kZXIoPFJvdXRlcyAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUsIFN3aXRjaCwgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbi8vIGltcG9ydCBMb2dpbiBmcm9tICcuL3ZpZXcvTG9naW4nO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi92aWV3L0hvbWUnO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4vdmlldy9SZWR1eERlbW8vVG9kb0xpc3QnO1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4vdmlldy9Db21tb24vTm90Rm91bmQnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKDxSb3V0ZXI+XG4gICAgICA8U3dpdGNoPlxuICAgICAgICB7Lyoge1xuICAgICAgICAgIXdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcl9uYW1lJykgJiZcbiAgICAgICAgIDxSZWRpcmVjdCBmcm9tPVwiKlwiIHRvPVwiL21vbGllcmUvTG9naW5cIiBleGFjdCAvPlxuICAgICAgIH1cbiAgICAgICAgKi99XG4gICAgICAgIDxSZWRpcmVjdCBmcm9tPVwiL1wiIHRvPVwiL0hvbWVcIiBleGFjdCAvPlxuICAgICAgICB7LyogPFJvdXRlIHBhdGg9XCIvbW9saWVyZS9Mb2dpblwiIGV4YWN0IGNvbXBvbmVudD17TG9naW59IC8+ICovfVxuICAgICAgICA8Um91dGUgcGF0aD1cIi9Ib21lXCIgZXhhY3QgY29tcG9uZW50PXtIb21lfSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9SZWR1eERlbW8vVG9kb0xpc3RcIiBleGFjdCBjb21wb25lbnQ9e1RvZG9MaXN0fSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cIipcIiBjb21wb25lbnQ9e05vdEZvdW5kfSAvPlxuICAgICAgPC9Td2l0Y2g+XG4gICAgPC9Sb3V0ZXI+KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JvdXRlci5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwIGZyb20gJ0JpekNvbXBvbmVudC9BcHAnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPEFwcD7miJHmmK/pppbpobXllYo8L0FwcD47XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aWV3L0hvbWUvaW5kZXguanMiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2VtcHR5ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vZW1wdHlcIikpO1xuXG52YXIgXyA9IHJlcXVpcmUoXCIuXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTsgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciByZW5kZXJFbXB0eSA9IGZ1bmN0aW9uIHJlbmRlckVtcHR5KGNvbXBvbmVudE5hbWUpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXy5Db25maWdDb25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZ2V0UHJlZml4Q2xzID0gX3JlZi5nZXRQcmVmaXhDbHM7XG4gICAgdmFyIHByZWZpeCA9IGdldFByZWZpeENscygnZW1wdHknKTtcblxuICAgIHN3aXRjaCAoY29tcG9uZW50TmFtZSkge1xuICAgICAgY2FzZSAnVGFibGUnOlxuICAgICAgY2FzZSAnTGlzdCc6XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9lbXB0eVtcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgICBpbWFnZTogX2VtcHR5W1wiZGVmYXVsdFwiXS5QUkVTRU5URURfSU1BR0VfU0lNUExFXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdTZWxlY3QnOlxuICAgICAgY2FzZSAnVHJlZVNlbGVjdCc6XG4gICAgICBjYXNlICdDYXNjYWRlcic6XG4gICAgICBjYXNlICdUcmFuc2Zlcic6XG4gICAgICBjYXNlICdNZW50aW9ucyc6XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9lbXB0eVtcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgICBpbWFnZTogX2VtcHR5W1wiZGVmYXVsdFwiXS5QUkVTRU5URURfSU1BR0VfU0lNUExFLFxuICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4LCBcIi1zbWFsbFwiKVxuICAgICAgICB9KTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2VtcHR5W1wiZGVmYXVsdFwiXSwgbnVsbCk7XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IHJlbmRlckVtcHR5O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlbmRlckVtcHR5LmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvY29uZmlnLXByb3ZpZGVyL3JlbmRlckVtcHR5LmpzXG4vLyBtb2R1bGUgaWQgPSA1Nzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG52YXIgX0xvY2FsZVJlY2VpdmVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbG9jYWxlLXByb3ZpZGVyL0xvY2FsZVJlY2VpdmVyXCIpKTtcblxudmFyIF9lbXB0eSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZW1wdHlcIikpO1xuXG52YXIgX3NpbXBsZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc2ltcGxlXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDoge307IGlmIChkZXNjLmdldCB8fCBkZXNjLnNldCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgX19yZXN0ID0gdm9pZCAwICYmICh2b2lkIDApLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxudmFyIGRlZmF1bHRFbXB0eUltZyA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2VtcHR5W1wiZGVmYXVsdFwiXSwgbnVsbCk7XG52YXIgc2ltcGxlRW1wdHlJbWcgPSBSZWFjdC5jcmVhdGVFbGVtZW50KF9zaW1wbGVbXCJkZWZhdWx0XCJdLCBudWxsKTtcblxudmFyIEVtcHR5ID0gZnVuY3Rpb24gRW1wdHkocHJvcHMpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBnZXRQcmVmaXhDbHMgPSBfcmVmLmdldFByZWZpeENscztcblxuICAgIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGN1c3RvbWl6ZVByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgICAgX3Byb3BzJGltYWdlID0gcHJvcHMuaW1hZ2UsXG4gICAgICAgIGltYWdlID0gX3Byb3BzJGltYWdlID09PSB2b2lkIDAgPyBkZWZhdWx0RW1wdHlJbWcgOiBfcHJvcHMkaW1hZ2UsXG4gICAgICAgIGRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIGltYWdlU3R5bGUgPSBwcm9wcy5pbWFnZVN0eWxlLFxuICAgICAgICByZXN0UHJvcHMgPSBfX3Jlc3QocHJvcHMsIFtcImNsYXNzTmFtZVwiLCBcInByZWZpeENsc1wiLCBcImltYWdlXCIsIFwiZGVzY3JpcHRpb25cIiwgXCJjaGlsZHJlblwiLCBcImltYWdlU3R5bGVcIl0pO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX0xvY2FsZVJlY2VpdmVyW1wiZGVmYXVsdFwiXSwge1xuICAgICAgY29tcG9uZW50TmFtZTogXCJFbXB0eVwiXG4gICAgfSwgZnVuY3Rpb24gKGxvY2FsZSkge1xuICAgICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnZW1wdHknLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgICAgdmFyIGRlcyA9IHR5cGVvZiBkZXNjcmlwdGlvbiAhPT0gJ3VuZGVmaW5lZCcgPyBkZXNjcmlwdGlvbiA6IGxvY2FsZS5kZXNjcmlwdGlvbjtcbiAgICAgIHZhciBhbHQgPSB0eXBlb2YgZGVzID09PSAnc3RyaW5nJyA/IGRlcyA6ICdlbXB0eSc7XG4gICAgICB2YXIgaW1hZ2VOb2RlID0gbnVsbDtcblxuICAgICAgaWYgKHR5cGVvZiBpbWFnZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaW1hZ2VOb2RlID0gUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG4gICAgICAgICAgYWx0OiBhbHQsXG4gICAgICAgICAgc3JjOiBpbWFnZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGltYWdlTm9kZSA9IGltYWdlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkocHJlZml4Q2xzLCBfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbm9ybWFsXCIpLCBpbWFnZSA9PT0gc2ltcGxlRW1wdHlJbWcpLCBjbGFzc05hbWUpXG4gICAgICB9LCByZXN0UHJvcHMpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWltYWdlXCIpLFxuICAgICAgICBzdHlsZTogaW1hZ2VTdHlsZVxuICAgICAgfSwgaW1hZ2VOb2RlKSwgZGVzICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWRlc2NyaXB0aW9uXCIpXG4gICAgICB9LCBkZXMpLCBjaGlsZHJlbiAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWZvb3RlclwiKVxuICAgICAgfSwgY2hpbGRyZW4pKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5FbXB0eS5QUkVTRU5URURfSU1BR0VfREVGQVVMVCA9IGRlZmF1bHRFbXB0eUltZztcbkVtcHR5LlBSRVNFTlRFRF9JTUFHRV9TSU1QTEUgPSBzaW1wbGVFbXB0eUltZztcbnZhciBfZGVmYXVsdCA9IEVtcHR5O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZW1wdHkvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDU3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2RlZmF1bHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbG9jYWxlL2RlZmF1bHRcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIF9kZWZhdWx0ID0gX2RlZmF1bHQyW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWZhdWx0LmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyL2RlZmF1bHQuanNcbi8vIG1vZHVsZSBpZCA9IDU4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSB7XG4gIHRvZGF5OiAnVG9kYXknLFxuICBub3c6ICdOb3cnLFxuICBiYWNrVG9Ub2RheTogJ0JhY2sgdG8gdG9kYXknLFxuICBvazogJ09rJyxcbiAgY2xlYXI6ICdDbGVhcicsXG4gIG1vbnRoOiAnTW9udGgnLFxuICB5ZWFyOiAnWWVhcicsXG4gIHRpbWVTZWxlY3Q6ICdzZWxlY3QgdGltZScsXG4gIGRhdGVTZWxlY3Q6ICdzZWxlY3QgZGF0ZScsXG4gIHdlZWtTZWxlY3Q6ICdDaG9vc2UgYSB3ZWVrJyxcbiAgbW9udGhTZWxlY3Q6ICdDaG9vc2UgYSBtb250aCcsXG4gIHllYXJTZWxlY3Q6ICdDaG9vc2UgYSB5ZWFyJyxcbiAgZGVjYWRlU2VsZWN0OiAnQ2hvb3NlIGEgZGVjYWRlJyxcbiAgeWVhckZvcm1hdDogJ1lZWVknLFxuICBkYXRlRm9ybWF0OiAnTS9EL1lZWVknLFxuICBkYXlGb3JtYXQ6ICdEJyxcbiAgZGF0ZVRpbWVGb3JtYXQ6ICdNL0QvWVlZWSBISDptbTpzcycsXG4gIG1vbnRoQmVmb3JlWWVhcjogdHJ1ZSxcbiAgcHJldmlvdXNNb250aDogJ1ByZXZpb3VzIG1vbnRoIChQYWdlVXApJyxcbiAgbmV4dE1vbnRoOiAnTmV4dCBtb250aCAoUGFnZURvd24pJyxcbiAgcHJldmlvdXNZZWFyOiAnTGFzdCB5ZWFyIChDb250cm9sICsgbGVmdCknLFxuICBuZXh0WWVhcjogJ05leHQgeWVhciAoQ29udHJvbCArIHJpZ2h0KScsXG4gIHByZXZpb3VzRGVjYWRlOiAnTGFzdCBkZWNhZGUnLFxuICBuZXh0RGVjYWRlOiAnTmV4dCBkZWNhZGUnLFxuICBwcmV2aW91c0NlbnR1cnk6ICdMYXN0IGNlbnR1cnknLFxuICBuZXh0Q2VudHVyeTogJ05leHQgY2VudHVyeSdcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yYy1jYWxlbmRhci9saWIvbG9jYWxlL2VuX1VTLmpzXG4vLyBtb2R1bGUgaWQgPSA1ODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9lbl9VUyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL2RhdGUtcGlja2VyL2xvY2FsZS9lbl9VU1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgX2RlZmF1bHQgPSBfZW5fVVNbXCJkZWZhdWx0XCJdO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuX1VTLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvY2FsZW5kYXIvbG9jYWxlL2VuX1VTLmpzXG4vLyBtb2R1bGUgaWQgPSA1ODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTsgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7XG4gICAgd2lkdGg6IFwiMTg0XCIsXG4gICAgaGVpZ2h0OiBcIjE1MlwiLFxuICAgIHZpZXdCb3g6IFwiMCAwIDE4NCAxNTJcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBmaWxsUnVsZTogXCJldmVub2RkXCJcbiAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIiwge1xuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoMjQgMzEuNjcpXCJcbiAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImVsbGlwc2VcIiwge1xuICAgIGZpbGxPcGFjaXR5OiBcIi44XCIsXG4gICAgZmlsbDogXCIjRjVGNUY3XCIsXG4gICAgY3g6IFwiNjcuNzk3XCIsXG4gICAgY3k6IFwiMTA2Ljg5XCIsXG4gICAgcng6IFwiNjcuNzk3XCIsXG4gICAgcnk6IFwiMTIuNjY4XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xMjIuMDM0IDY5LjY3NEw5OC4xMDkgNDAuMjI5Yy0xLjE0OC0xLjM4Ni0yLjgyNi0yLjIyNS00LjU5My0yLjIyNWgtNTEuNDRjLTEuNzY2IDAtMy40NDQuODM5LTQuNTkyIDIuMjI1TDEzLjU2IDY5LjY3NHYxNS4zODNoMTA4LjQ3NVY2OS42NzR6XCIsXG4gICAgZmlsbDogXCIjQUVCOEMyXCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xMDEuNTM3IDg2LjIxNEw4MC42MyA2MS4xMDJjLTEuMDAxLTEuMjA3LTIuNTA3LTEuODY3LTQuMDQ4LTEuODY3SDMxLjcyNGMtMS41NCAwLTMuMDQ3LjY2LTQuMDQ4IDEuODY3TDYuNzY5IDg2LjIxNHYxMy43OTJoOTQuNzY4Vjg2LjIxNHpcIixcbiAgICBmaWxsOiBcInVybCgjbGluZWFyR3JhZGllbnQtMSlcIixcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDEzLjU2KVwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMzMuODMgMGg2Ny45MzNhNCA0IDAgMCAxIDQgNHY5My4zNDRhNCA0IDAgMCAxLTQgNEgzMy44M2E0IDQgMCAwIDEtNC00VjRhNCA0IDAgMCAxIDQtNHpcIixcbiAgICBmaWxsOiBcIiNGNUY1RjdcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTQyLjY3OCA5Ljk1M2g1MC4yMzdhMiAyIDAgMCAxIDIgMlYzNi45MWEyIDIgMCAwIDEtMiAySDQyLjY3OGEyIDIgMCAwIDEtMi0yVjExLjk1M2EyIDIgMCAwIDEgMi0yek00Mi45NCA0OS43NjdoNDkuNzEzYTIuMjYyIDIuMjYyIDAgMSAxIDAgNC41MjRINDIuOTRhMi4yNjIgMi4yNjIgMCAwIDEgMC00LjUyNHpNNDIuOTQgNjEuNTNoNDkuNzEzYTIuMjYyIDIuMjYyIDAgMSAxIDAgNC41MjVINDIuOTRhMi4yNjIgMi4yNjIgMCAwIDEgMC00LjUyNXpNMTIxLjgxMyAxMDUuMDMyYy0uNzc1IDMuMDcxLTMuNDk3IDUuMzYtNi43MzUgNS4zNkgyMC41MTVjLTMuMjM4IDAtNS45Ni0yLjI5LTYuNzM0LTUuMzZhNy4zMDkgNy4zMDkgMCAwIDEtLjIyMi0xLjc5VjY5LjY3NWgyNi4zMThjMi45MDcgMCA1LjI1IDIuNDQ4IDUuMjUgNS40MnYuMDRjMCAyLjk3MSAyLjM3IDUuMzcgNS4yNzcgNS4zN2gzNC43ODVjMi45MDcgMCA1LjI3Ny0yLjQyMSA1LjI3Ny01LjM5M1Y3NS4xYzAtMi45NzIgMi4zNDMtNS40MjYgNS4yNS01LjQyNmgyNi4zMTh2MzMuNTY5YzAgLjYxNy0uMDc3IDEuMjE2LS4yMjEgMS43ODl6XCIsXG4gICAgZmlsbDogXCIjRENFMEU2XCJcbiAgfSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTQ5LjEyMSAzMy4yOTJsLTYuODMgMi42NWExIDEgMCAwIDEtMS4zMTctMS4yM2wxLjkzNy02LjIwN2MtMi41ODktMi45NDQtNC4xMDktNi41MzQtNC4xMDktMTAuNDA4QzEzOC44MDIgOC4xMDIgMTQ4LjkyIDAgMTYxLjQwMiAwIDE3My44ODEgMCAxODQgOC4xMDIgMTg0IDE4LjA5N2MwIDkuOTk1LTEwLjExOCAxOC4wOTctMjIuNTk5IDE4LjA5Ny00LjUyOCAwLTguNzQ0LTEuMDY2LTEyLjI4LTIuOTAyelwiLFxuICAgIGZpbGw6IFwiI0RDRTBFNlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgxNDkuNjUgMTUuMzgzKVwiLFxuICAgIGZpbGw6IFwiI0ZGRlwiXG4gIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJlbGxpcHNlXCIsIHtcbiAgICBjeDogXCIyMC42NTRcIixcbiAgICBjeTogXCIzLjE2N1wiLFxuICAgIHJ4OiBcIjIuODQ5XCIsXG4gICAgcnk6IFwiMi44MTVcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTUuNjk4IDUuNjNIMEwyLjg5OC43MDR6TTkuMjU5LjcwNGg0Ljk4NVY1LjYzSDkuMjU5elwiXG4gIH0pKSkpO1xufTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVtcHR5LmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZW1wdHkvZW1wdHkuanNcbi8vIG1vZHVsZSBpZCA9IDU4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHt9OyBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHtcbiAgICB3aWR0aDogXCI2NFwiLFxuICAgIGhlaWdodDogXCI0MVwiLFxuICAgIHZpZXdCb3g6IFwiMCAwIDY0IDQxXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgwIDEpXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiXG4gIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJlbGxpcHNlXCIsIHtcbiAgICBmaWxsOiBcIiNGNUY1RjVcIixcbiAgICBjeDogXCIzMlwiLFxuICAgIGN5OiBcIjMzXCIsXG4gICAgcng6IFwiMzJcIixcbiAgICByeTogXCI3XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgICBmaWxsUnVsZTogXCJub256ZXJvXCIsXG4gICAgc3Ryb2tlOiBcIiNEOUQ5RDlcIlxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNNTUgMTIuNzZMNDQuODU0IDEuMjU4QzQ0LjM2Ny40NzQgNDMuNjU2IDAgNDIuOTA3IDBIMjEuMDkzYy0uNzQ5IDAtMS40Ni40NzQtMS45NDcgMS4yNTdMOSAxMi43NjFWMjJoNDZ2LTkuMjR6XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk00MS42MTMgMTUuOTMxYzAtMS42MDUuOTk0LTIuOTMgMi4yMjctMi45MzFINTV2MTguMTM3QzU1IDMzLjI2IDUzLjY4IDM1IDUyLjA1IDM1aC00MC4xQzEwLjMyIDM1IDkgMzMuMjU5IDkgMzEuMTM3VjEzaDExLjE2YzEuMjMzIDAgMi4yMjcgMS4zMjMgMi4yMjcgMi45Mjh2LjAyMmMwIDEuNjA1IDEuMDA1IDIuOTAxIDIuMjM3IDIuOTAxaDE0Ljc1MmMxLjIzMiAwIDIuMjM3LTEuMzA4IDIuMjM3LTIuOTEzdi0uMDA3elwiLFxuICAgIGZpbGw6IFwiI0ZBRkFGQVwiXG4gIH0pKSkpO1xufTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNpbXBsZS5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2VtcHR5L3NpbXBsZS5qc1xuLy8gbW9kdWxlIGlkID0gNTg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBleHBvcnRzLkFOVF9NQVJLID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgUHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgbW9tZW50ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIm1vbWVudFwiKSk7XG5cbnZhciBfaW50ZXJvcERlZmF1bHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9fdXRpbC9pbnRlcm9wRGVmYXVsdFwiKSk7XG5cbnZhciBfbG9jYWxlID0gcmVxdWlyZShcIi4uL21vZGFsL2xvY2FsZVwiKTtcblxudmFyIF93YXJuaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vX3V0aWwvd2FybmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHt9OyBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbnZhciBBTlRfTUFSSyA9ICdpbnRlcm5hbE1hcmsnO1xuZXhwb3J0cy5BTlRfTUFSSyA9IEFOVF9NQVJLO1xuXG5mdW5jdGlvbiBzZXRNb21lbnRMb2NhbGUobG9jYWxlKSB7XG4gIGlmIChsb2NhbGUgJiYgbG9jYWxlLmxvY2FsZSkge1xuICAgICgwLCBfaW50ZXJvcERlZmF1bHRbXCJkZWZhdWx0XCJdKShtb21lbnQpLmxvY2FsZShsb2NhbGUubG9jYWxlKTtcbiAgfSBlbHNlIHtcbiAgICAoMCwgX2ludGVyb3BEZWZhdWx0W1wiZGVmYXVsdFwiXSkobW9tZW50KS5sb2NhbGUoJ2VuJyk7XG4gIH1cbn1cblxudmFyIExvY2FsZVByb3ZpZGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhMb2NhbGVQcm92aWRlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTG9jYWxlUHJvdmlkZXIocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTG9jYWxlUHJvdmlkZXIpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoTG9jYWxlUHJvdmlkZXIpLmNhbGwodGhpcywgcHJvcHMpKTtcbiAgICBzZXRNb21lbnRMb2NhbGUocHJvcHMubG9jYWxlKTtcbiAgICAoMCwgX2xvY2FsZS5jaGFuZ2VDb25maXJtTG9jYWxlKShwcm9wcy5sb2NhbGUgJiYgcHJvcHMubG9jYWxlLk1vZGFsKTtcbiAgICAoMCwgX3dhcm5pbmdbXCJkZWZhdWx0XCJdKShwcm9wcy5fQU5UX01BUktfXyA9PT0gQU5UX01BUkssICdMb2NhbGVQcm92aWRlcicsICdgTG9jYWxlUHJvdmlkZXJgIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgYGxvY2FsZWAgd2l0aCBgQ29uZmlnUHJvdmlkZXJgIGluc3RlYWQ6IGh0dHA6Ly91LmFudC5kZXNpZ24vbG9jYWxlJyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKExvY2FsZVByb3ZpZGVyLCBbe1xuICAgIGtleTogXCJnZXRDaGlsZENvbnRleHRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYW50TG9jYWxlOiBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcy5sb2NhbGUsIHtcbiAgICAgICAgICBleGlzdDogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIHZhciBsb2NhbGUgPSB0aGlzLnByb3BzLmxvY2FsZTtcblxuICAgICAgaWYgKHByZXZQcm9wcy5sb2NhbGUgIT09IGxvY2FsZSkge1xuICAgICAgICBzZXRNb21lbnRMb2NhbGUobG9jYWxlKTtcbiAgICAgIH1cblxuICAgICAgKDAsIF9sb2NhbGUuY2hhbmdlQ29uZmlybUxvY2FsZSkobG9jYWxlICYmIGxvY2FsZS5Nb2RhbCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgKDAsIF9sb2NhbGUuY2hhbmdlQ29uZmlybUxvY2FsZSkoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMb2NhbGVQcm92aWRlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBMb2NhbGVQcm92aWRlcjtcbkxvY2FsZVByb3ZpZGVyLnByb3BUeXBlcyA9IHtcbiAgbG9jYWxlOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuTG9jYWxlUHJvdmlkZXIuZGVmYXVsdFByb3BzID0ge1xuICBsb2NhbGU6IHt9XG59O1xuTG9jYWxlUHJvdmlkZXIuY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gIGFudExvY2FsZTogUHJvcFR5cGVzLm9iamVjdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1ODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGludGVyb3BEZWZhdWx0O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9pc3N1ZXMvMzY1MFxuLy8gc2luY2Ugd2UgYXJlIHVzaW5nIHRzIDMuNS4xLCBpdCBzaG91bGQgYmUgc2FmZSB0byByZW1vdmUuXG5mdW5jdGlvbiBpbnRlcm9wRGVmYXVsdChtKSB7XG4gIHJldHVybiBtW1wiZGVmYXVsdFwiXSB8fCBtO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW50ZXJvcERlZmF1bHQuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9fdXRpbC9pbnRlcm9wRGVmYXVsdC5qc1xuLy8gbW9kdWxlIGlkID0gNTg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jaGFuZ2VDb25maXJtTG9jYWxlID0gY2hhbmdlQ29uZmlybUxvY2FsZTtcbmV4cG9ydHMuZ2V0Q29uZmlybUxvY2FsZSA9IGdldENvbmZpcm1Mb2NhbGU7XG5cbnZhciBfZGVmYXVsdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2xvY2FsZS9kZWZhdWx0XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbnZhciBydW50aW1lTG9jYWxlID0gX2V4dGVuZHMoe30sIF9kZWZhdWx0W1wiZGVmYXVsdFwiXS5Nb2RhbCk7XG5cbmZ1bmN0aW9uIGNoYW5nZUNvbmZpcm1Mb2NhbGUobmV3TG9jYWxlKSB7XG4gIGlmIChuZXdMb2NhbGUpIHtcbiAgICBydW50aW1lTG9jYWxlID0gX2V4dGVuZHMoe30sIHJ1bnRpbWVMb2NhbGUsIG5ld0xvY2FsZSk7XG4gIH0gZWxzZSB7XG4gICAgcnVudGltZUxvY2FsZSA9IF9leHRlbmRzKHt9LCBfZGVmYXVsdFtcImRlZmF1bHRcIl0uTW9kYWwpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldENvbmZpcm1Mb2NhbGUoKSB7XG4gIHJldHVybiBydW50aW1lTG9jYWxlO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bG9jYWxlLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbW9kYWwvbG9jYWxlLmpzXG4vLyBtb2R1bGUgaWQgPSA1ODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlc2V0V2FybmVkID0gcmVzZXRXYXJuZWQ7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF93YXJuaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwid2FybmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgd2FybmVkID0ge307XG5cbmZ1bmN0aW9uIHJlc2V0V2FybmVkKCkge1xuICB3YXJuZWQgPSB7fTtcbn1cblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQodmFsaWQsIGNvbXBvbmVudCwgbWVzc2FnZSkge1xuICBpZiAoIXZhbGlkICYmICF3YXJuZWRbbWVzc2FnZV0pIHtcbiAgICAoMCwgX3dhcm5pbmdbXCJkZWZhdWx0XCJdKShmYWxzZSwgXCJbYW50ZDogXCIuY29uY2F0KGNvbXBvbmVudCwgXCJdIFwiKS5jb25jYXQobWVzc2FnZSkpO1xuICAgIHdhcm5lZFttZXNzYWdlXSA9IHRydWU7XG4gIH1cbn07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD13YXJuaW5nLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvX3V0aWwvd2FybmluZy5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGNyZWF0ZTtcblxudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaW5kZXhcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHt9OyBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgY3VzdG9tQ2FjaGUgPSBuZXcgU2V0KCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgc2NyaXB0VXJsID0gb3B0aW9ucy5zY3JpcHRVcmwsXG4gICAgICBfb3B0aW9ucyRleHRyYUNvbW1vblAgPSBvcHRpb25zLmV4dHJhQ29tbW9uUHJvcHMsXG4gICAgICBleHRyYUNvbW1vblByb3BzID0gX29wdGlvbnMkZXh0cmFDb21tb25QID09PSB2b2lkIDAgPyB7fSA6IF9vcHRpb25zJGV4dHJhQ29tbW9uUDtcbiAgLyoqXG4gICAqIERPTSBBUEkgcmVxdWlyZWQuXG4gICAqIE1ha2Ugc3VyZSBpbiBicm93c2VyIGVudmlyb25tZW50LlxuICAgKiBUaGUgQ3VzdG9tIEljb24gd2lsbCBjcmVhdGUgYSA8c2NyaXB0Lz5cbiAgICogdGhhdCBsb2FkcyBTVkcgc3ltYm9scyBhbmQgaW5zZXJ0IHRoZSBTVkcgRWxlbWVudCBpbnRvIHRoZSBkb2N1bWVudCBib2R5LlxuICAgKi9cblxuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygc2NyaXB0VXJsID09PSAnc3RyaW5nJyAmJiBzY3JpcHRVcmwubGVuZ3RoICYmICFjdXN0b21DYWNoZS5oYXMoc2NyaXB0VXJsKSkge1xuICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCBzY3JpcHRVcmwpO1xuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZXNwYWNlJywgc2NyaXB0VXJsKTtcbiAgICBjdXN0b21DYWNoZS5hZGQoc2NyaXB0VXJsKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gIH1cblxuICB2YXIgSWNvbmZvbnQgPSBmdW5jdGlvbiBJY29uZm9udChwcm9wcykge1xuICAgIHZhciB0eXBlID0gcHJvcHMudHlwZSxcbiAgICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgcmVzdFByb3BzID0gX19yZXN0KHByb3BzLCBbXCJ0eXBlXCIsIFwiY2hpbGRyZW5cIl0pOyAvLyBjb21wb25lbnQgPiBjaGlsZHJlbiA+IHR5cGVcblxuXG4gICAgdmFyIGNvbnRlbnQgPSBudWxsO1xuXG4gICAgaWYgKHByb3BzLnR5cGUpIHtcbiAgICAgIGNvbnRlbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFwidXNlXCIsIHtcbiAgICAgICAgeGxpbmtIcmVmOiBcIiNcIi5jb25jYXQodHlwZSlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgY29udGVudCA9IGNoaWxkcmVuO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9pbmRleFtcImRlZmF1bHRcIl0sIF9leHRlbmRzKHt9LCByZXN0UHJvcHMsIGV4dHJhQ29tbW9uUHJvcHMpLCBjb250ZW50KTtcbiAgfTtcblxuICBJY29uZm9udC5kaXNwbGF5TmFtZSA9ICdJY29uZm9udCc7XG4gIHJldHVybiBJY29uZm9udDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUljb25Gb250LmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvaWNvbi9JY29uRm9udC5qc1xuLy8gbW9kdWxlIGlkID0gNjMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXRUaGVtZUZyb21UeXBlTmFtZSA9IGdldFRoZW1lRnJvbVR5cGVOYW1lO1xuZXhwb3J0cy5yZW1vdmVUeXBlVGhlbWUgPSByZW1vdmVUeXBlVGhlbWU7XG5leHBvcnRzLndpdGhUaGVtZVN1ZmZpeCA9IHdpdGhUaGVtZVN1ZmZpeDtcbmV4cG9ydHMuYWxpYXMgPSBhbGlhcztcbmV4cG9ydHMuc3ZnQmFzZVByb3BzID0gdm9pZCAwO1xuXG52YXIgX3dhcm5pbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9fdXRpbC93YXJuaW5nXCIpKTtcblxudmFyIF9zdmdCYXNlUHJvcHM7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG4vLyBUaGVzZSBwcm9wcyBtYWtlIHN1cmUgdGhhdCB0aGUgU1ZHIGJlaGF2aW91cnMgbGlrZSBnZW5lcmFsIHRleHQuXG4vLyBSZWZlcmVuY2U6IGh0dHBzOi8vYmxvZy5wcm90b3R5cHIuaW8vYWxpZ24tc3ZnLWljb25zLXRvLXRleHQtYW5kLXNheS1nb29kYnllLXRvLWZvbnQtaWNvbnMtZDQ0YjNkN2IyNmI0XG52YXIgc3ZnQmFzZVByb3BzID0gKF9zdmdCYXNlUHJvcHMgPSB7XG4gIHdpZHRoOiAnMWVtJyxcbiAgaGVpZ2h0OiAnMWVtJyxcbiAgZmlsbDogJ2N1cnJlbnRDb2xvcidcbn0sIF9kZWZpbmVQcm9wZXJ0eShfc3ZnQmFzZVByb3BzLCAnYXJpYS1oaWRkZW4nLCB0cnVlKSwgX2RlZmluZVByb3BlcnR5KF9zdmdCYXNlUHJvcHMsIFwiZm9jdXNhYmxlXCIsICdmYWxzZScpLCBfc3ZnQmFzZVByb3BzKTtcbmV4cG9ydHMuc3ZnQmFzZVByb3BzID0gc3ZnQmFzZVByb3BzO1xudmFyIGZpbGxUZXN0ZXIgPSAvLWZpbGwkLztcbnZhciBvdXRsaW5lVGVzdGVyID0gLy1vJC87XG52YXIgdHdvVG9uZVRlc3RlciA9IC8tdHdvdG9uZSQvO1xuXG5mdW5jdGlvbiBnZXRUaGVtZUZyb21UeXBlTmFtZSh0eXBlKSB7XG4gIHZhciByZXN1bHQgPSBudWxsO1xuXG4gIGlmIChmaWxsVGVzdGVyLnRlc3QodHlwZSkpIHtcbiAgICByZXN1bHQgPSAnZmlsbGVkJztcbiAgfSBlbHNlIGlmIChvdXRsaW5lVGVzdGVyLnRlc3QodHlwZSkpIHtcbiAgICByZXN1bHQgPSAnb3V0bGluZWQnO1xuICB9IGVsc2UgaWYgKHR3b1RvbmVUZXN0ZXIudGVzdCh0eXBlKSkge1xuICAgIHJlc3VsdCA9ICd0d29Ub25lJztcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVR5cGVUaGVtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLnJlcGxhY2UoZmlsbFRlc3RlciwgJycpLnJlcGxhY2Uob3V0bGluZVRlc3RlciwgJycpLnJlcGxhY2UodHdvVG9uZVRlc3RlciwgJycpO1xufVxuXG5mdW5jdGlvbiB3aXRoVGhlbWVTdWZmaXgodHlwZSwgdGhlbWUpIHtcbiAgdmFyIHJlc3VsdCA9IHR5cGU7XG5cbiAgaWYgKHRoZW1lID09PSAnZmlsbGVkJykge1xuICAgIHJlc3VsdCArPSAnLWZpbGwnO1xuICB9IGVsc2UgaWYgKHRoZW1lID09PSAnb3V0bGluZWQnKSB7XG4gICAgcmVzdWx0ICs9ICctbyc7XG4gIH0gZWxzZSBpZiAodGhlbWUgPT09ICd0d29Ub25lJykge1xuICAgIHJlc3VsdCArPSAnLXR3b3RvbmUnO1xuICB9IGVsc2Uge1xuICAgICgwLCBfd2FybmluZ1tcImRlZmF1bHRcIl0pKGZhbHNlLCAnSWNvbicsIFwiVGhpcyBpY29uICdcIi5jb25jYXQodHlwZSwgXCInIGhhcyB1bmtub3duIHRoZW1lICdcIikuY29uY2F0KHRoZW1lLCBcIidcIikpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn0gLy8gRm9yIGFsaWFzIG9yIGNvbXBhdGliaWxpdHlcblxuXG5mdW5jdGlvbiBhbGlhcyh0eXBlKSB7XG4gIHZhciBuZXdUeXBlID0gdHlwZTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdjcm9zcyc6XG4gICAgICBuZXdUeXBlID0gJ2Nsb3NlJztcbiAgICAgIGJyZWFrO1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzEzMDA3XG5cbiAgICBjYXNlICdpbnRlcmF0aW9uJzpcbiAgICAgIG5ld1R5cGUgPSAnaW50ZXJhY3Rpb24nO1xuICAgICAgYnJlYWs7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTY4MTBcblxuICAgIGNhc2UgJ2NhbmxlbmRhcic6XG4gICAgICBuZXdUeXBlID0gJ2NhbGVuZGFyJztcbiAgICAgIGJyZWFrO1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzE3NDQ4XG5cbiAgICBjYXNlICdjb2x1bS1oZWlnaHQnOlxuICAgICAgbmV3VHlwZSA9ICdjb2x1bW4taGVpZ2h0JztcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgfVxuXG4gICgwLCBfd2FybmluZ1tcImRlZmF1bHRcIl0pKG5ld1R5cGUgPT09IHR5cGUsICdJY29uJywgXCJJY29uICdcIi5jb25jYXQodHlwZSwgXCInIHdhcyBhIHR5cG8gYW5kIGlzIG5vdyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlICdcIikuY29uY2F0KG5ld1R5cGUsIFwiJyBpbnN0ZWFkLlwiKSk7XG4gIHJldHVybiBuZXdUeXBlO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9pY29uL3V0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnNldFR3b1RvbmVDb2xvciA9IHNldFR3b1RvbmVDb2xvcjtcbmV4cG9ydHMuZ2V0VHdvVG9uZUNvbG9yID0gZ2V0VHdvVG9uZUNvbG9yO1xuXG52YXIgX2ljb25zUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy1yZWFjdFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBzZXRUd29Ub25lQ29sb3IocHJpbWFyeUNvbG9yKSB7XG4gIHJldHVybiBfaWNvbnNSZWFjdFtcImRlZmF1bHRcIl0uc2V0VHdvVG9uZUNvbG9ycyh7XG4gICAgcHJpbWFyeUNvbG9yOiBwcmltYXJ5Q29sb3JcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFR3b1RvbmVDb2xvcigpIHtcbiAgdmFyIGNvbG9ycyA9IF9pY29uc1JlYWN0W1wiZGVmYXVsdFwiXS5nZXRUd29Ub25lQ29sb3JzKCk7XG5cbiAgcmV0dXJuIGNvbG9ycy5wcmltYXJ5Q29sb3I7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD10d29Ub25lUHJpbWFyeUNvbG9yLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvaWNvbi90d29Ub25lUHJpbWFyeUNvbG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA2MzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIGlzTnVtZXJpYyA9IGZ1bmN0aW9uIGlzTnVtZXJpYyh2YWx1ZSkge1xuICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQodmFsdWUpKSAmJiBpc0Zpbml0ZSh2YWx1ZSk7XG59O1xuXG52YXIgX2RlZmF1bHQgPSBpc051bWVyaWM7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNOdW1lcmljLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvX3V0aWwvaXNOdW1lcmljLmpzXG4vLyBtb2R1bGUgaWQgPSA2MzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9sYXlvdXQvc3R5bGUvaW5kZXguY3NzXG4vLyBtb2R1bGUgaWQgPSA2MzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExheW91dCwgSWNvbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vTWVudSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXguY3NzJztcblxuY29uc3QgeyBTaWRlciB9ID0gTGF5b3V0O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcFNpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIHRvZ2dsZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvbGxhcHNlZDogIXRoaXMuc3RhdGUuY29sbGFwc2VkLFxuICAgIH0pO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTaWRlciB0cmlnZ2VyPXtudWxsfSBjb2xsYXBzaWJsZSBjb2xsYXBzZWQ9e3RoaXMuc3RhdGUuY29sbGFwc2VkfSBjbGFzc05hbWU9e3N0eWxlcy5zaWRlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZXJUb3B9ID5cbiAgICAgICAgICB7XG4gICAgICAgICAgIXRoaXMuc3RhdGUuY29sbGFwc2VkICYmIDxpbWdcbiAgICAgICAgICAgIHNyYz17J2h0dHA6Ly81YjA5ODhlNTk1MjI1LmNkbi5zb2h1Y3MuY29tL2ltYWdlcy8yMDE3MTIzMS82MjljZWM5ZDE5ZWI0YzcyOTg0N2FlNGVkMzQxOTRiYy5qcGVnJ31cbiAgICAgICAgICAgIGFsdD1cImxvZ29cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubG9nb31cbiAgICAgICAgICAvPlxuICAgICAgICAgfVxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50cmlnZ2VyfVxuICAgICAgICAgICAgdHlwZT17dGhpcy5zdGF0ZS5jb2xsYXBzZWQgPyAnbWVudS11bmZvbGQnIDogJ21lbnUtZm9sZCd9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8TWVudSAvPlxuICAgICAgPC9TaWRlcj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50L0FwcC9TaWRlci9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvaWNvbi9zdHlsZS9pbmRleC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDYzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9kYXRhLmpzb24nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4LmNzcyc7XG5cbmNvbnN0IHsgU3ViTWVudSwgSXRlbTogTWVudUl0ZW0gfSA9IE1lbnU7XG5cbmNvbnN0IHNvcnQgPSAoYSwgYikgPT4gYS5zb3J0IC0gYi5zb3J0OyAgLy8g5Y2H5bqP5o6S5bqPXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcE1lbnUgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudUxpc3R9PlxuICAgICAgICA8TWVudVxuICAgICAgICAgIGRlZmF1bHRTZWxlY3RlZEtleXM9e1snMSddfVxuICAgICAgICAgIC8vIGRlZmF1bHRPcGVuS2V5cz17WydzdWIxJ119XG4gICAgICAgICAgbW9kZT1cImlubGluZVwiXG4gICAgICAgICAgdGhlbWU9XCJkYXJrXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRhdGEuZGF0YS5zb3J0KHNvcnQpLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoaXRlbS5jaGlsZExpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoPFN1Yk1lbnUgdGl0bGU9e2l0ZW0ubmFtZX0ga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLmNoaWxkTGlzdC5zb3J0KHNvcnQpLm1hcChzdWJJdGVtID0+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB0aXRsZT17c3ViSXRlbS5uYW1lfSBrZXk9e3N1Ykl0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtzdWJJdGVtLnBhdGh9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3N1Ykl0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvU3ViTWVudT4pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiAoPE1lbnVJdGVtIHRpdGxlPXtpdGVtLm5hbWV9IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89e2l0ZW0ucGF0aH0+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9NZW51SXRlbT4pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvTWVudT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnQvQXBwL01lbnUvaW5kZXguanMiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JjTWVudSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyYy1tZW51XCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfb21pdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIm9taXQuanNcIikpO1xuXG52YXIgX1N1Yk1lbnUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1N1Yk1lbnVcIikpO1xuXG52YXIgX01lbnVJdGVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9NZW51SXRlbVwiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG52YXIgX29wZW5BbmltYXRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9fdXRpbC9vcGVuQW5pbWF0aW9uXCIpKTtcblxudmFyIF93YXJuaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vX3V0aWwvd2FybmluZ1wiKSk7XG5cbnZhciBfcmVhY3RMaWZlY3ljbGVzQ29tcGF0ID0gcmVxdWlyZShcInJlYWN0LWxpZmVjeWNsZXMtY29tcGF0XCIpO1xuXG52YXIgX1NpZGVyID0gcmVxdWlyZShcIi4uL2xheW91dC9TaWRlclwiKTtcblxudmFyIF9yYWYgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9fdXRpbC9yYWZcIikpO1xuXG52YXIgX01lbnVDb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9NZW51Q29udGV4dFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHt9OyBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbnZhciBJbnRlcm5hbE1lbnUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEludGVybmFsTWVudSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSW50ZXJuYWxNZW51KHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEludGVybmFsTWVudSk7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihJbnRlcm5hbE1lbnUpLmNhbGwodGhpcywgcHJvcHMpKTsgLy8gUmVzdG9yZSB2ZXJ0aWNhbCBtb2RlIHdoZW4gbWVudSBpcyBjb2xsYXBzZWQgcmVzcG9uc2l2ZWx5IHdoZW4gbW91bnRlZFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzEzMTA0XG4gICAgLy8gVE9ETzogbm90IGEgcGVyZmVjdCBzb2x1dGlvbiwgbG9va2luZyBhIG5ldyB3YXkgdG8gYXZvaWQgc2V0dGluZyBzd2l0Y2hpbmdNb2RlRnJvbUlubGluZSBpbiB0aGlzIHNpdHVhdGlvblxuXG4gICAgX3RoaXMuaGFuZGxlTW91c2VFbnRlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBfdGhpcy5yZXN0b3JlTW9kZVZlcnRpY2FsRnJvbUlubGluZSgpO1xuXG4gICAgICB2YXIgb25Nb3VzZUVudGVyID0gX3RoaXMucHJvcHMub25Nb3VzZUVudGVyO1xuXG4gICAgICBpZiAob25Nb3VzZUVudGVyKSB7XG4gICAgICAgIG9uTW91c2VFbnRlcihlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAvLyB3aGVuIGlubGluZUNvbGxhcHNlZCBtZW51IHdpZHRoIGFuaW1hdGlvbiBmaW5pc2hlZFxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTI4NjRcbiAgICAgIHZhciB3aWR0aENvbGxhcHNlZCA9IGUucHJvcGVydHlOYW1lID09PSAnd2lkdGgnICYmIGUudGFyZ2V0ID09PSBlLmN1cnJlbnRUYXJnZXQ7IC8vIEZpeCBTVkdFbGVtZW50IGUudGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mIGlzIG5vdCBhIGZ1bmN0aW9uXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy8xNTY5OVxuXG4gICAgICB2YXIgY2xhc3NOYW1lID0gZS50YXJnZXQuY2xhc3NOYW1lOyAvLyBTVkdBbmltYXRlZFN0cmluZy5hbmltVmFsIHNob3VsZCBiZSBpZGVudGljYWwgdG8gU1ZHQW5pbWF0ZWRTdHJpbmcuYmFzZVZhbCwgdW5sZXNzIGR1cmluZyBhbiBhbmltYXRpb24uXG5cbiAgICAgIHZhciBjbGFzc05hbWVWYWx1ZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChjbGFzc05hbWUpID09PSAnW29iamVjdCBTVkdBbmltYXRlZFN0cmluZ10nID8gY2xhc3NOYW1lLmFuaW1WYWwgOiBjbGFzc05hbWU7IC8vIEZpeCBmb3IgPE1lbnUgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSAvPiwgdGhlIHdpZHRoIHRyYW5zaXRpb24gd29uJ3QgdHJpZ2dlciB3aGVuIG1lbnUgaXMgY29sbGFwc2VkXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduLXByby9pc3N1ZXMvMjc4M1xuXG4gICAgICB2YXIgaWNvblNjYWxlZCA9IGUucHJvcGVydHlOYW1lID09PSAnZm9udC1zaXplJyAmJiBjbGFzc05hbWVWYWx1ZS5pbmRleE9mKCdhbnRpY29uJykgPj0gMDtcblxuICAgICAgaWYgKHdpZHRoQ29sbGFwc2VkIHx8IGljb25TY2FsZWQpIHtcbiAgICAgICAgX3RoaXMucmVzdG9yZU1vZGVWZXJ0aWNhbEZyb21JbmxpbmUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgX3RoaXMuaGFuZGxlT3BlbkNoYW5nZShbXSk7XG5cbiAgICAgIHZhciBvbkNsaWNrID0gX3RoaXMucHJvcHMub25DbGljaztcblxuICAgICAgaWYgKG9uQ2xpY2spIHtcbiAgICAgICAgb25DbGljayhlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlT3BlbkNoYW5nZSA9IGZ1bmN0aW9uIChvcGVuS2V5cykge1xuICAgICAgX3RoaXMuc2V0T3BlbktleXMob3BlbktleXMpO1xuXG4gICAgICB2YXIgb25PcGVuQ2hhbmdlID0gX3RoaXMucHJvcHMub25PcGVuQ2hhbmdlO1xuXG4gICAgICBpZiAob25PcGVuQ2hhbmdlKSB7XG4gICAgICAgIG9uT3BlbkNoYW5nZShvcGVuS2V5cyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnJlbmRlck1lbnUgPSBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIGdldFBvcHVwQ29udGFpbmVyID0gX3JlZi5nZXRQb3B1cENvbnRhaW5lcixcbiAgICAgICAgICBnZXRQcmVmaXhDbHMgPSBfcmVmLmdldFByZWZpeENscztcbiAgICAgIHZhciBtb3VudGVkID0gX3RoaXMuc3RhdGUubW91bnRlZDtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGN1c3RvbWl6ZVByZWZpeENscyA9IF90aGlzJHByb3BzLnByZWZpeENscyxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgdGhlbWUgPSBfdGhpcyRwcm9wcy50aGVtZSxcbiAgICAgICAgICBjb2xsYXBzZWRXaWR0aCA9IF90aGlzJHByb3BzLmNvbGxhcHNlZFdpZHRoO1xuICAgICAgdmFyIHBhc3NQcm9wcyA9ICgwLCBfb21pdFtcImRlZmF1bHRcIl0pKF90aGlzLnByb3BzLCBbJ2NvbGxhcHNlZFdpZHRoJywgJ3NpZGVyQ29sbGFwc2VkJ10pO1xuXG4gICAgICB2YXIgbWVudU1vZGUgPSBfdGhpcy5nZXRSZWFsTWVudU1vZGUoKTtcblxuICAgICAgdmFyIG1lbnVPcGVuQW5pbWF0aW9uID0gX3RoaXMuZ2V0TWVudU9wZW5BbmltYXRpb24obWVudU1vZGUpO1xuXG4gICAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdtZW51JywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgICAgIHZhciBtZW51Q2xhc3NOYW1lID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoY2xhc3NOYW1lLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQodGhlbWUpLCBfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaW5saW5lLWNvbGxhcHNlZFwiKSwgX3RoaXMuZ2V0SW5saW5lQ29sbGFwc2VkKCkpKTtcbiAgICAgIHZhciBtZW51UHJvcHMgPSB7XG4gICAgICAgIG9wZW5LZXlzOiBfdGhpcy5zdGF0ZS5vcGVuS2V5cyxcbiAgICAgICAgb25PcGVuQ2hhbmdlOiBfdGhpcy5oYW5kbGVPcGVuQ2hhbmdlLFxuICAgICAgICBjbGFzc05hbWU6IG1lbnVDbGFzc05hbWUsXG4gICAgICAgIG1vZGU6IG1lbnVNb2RlXG4gICAgICB9O1xuXG4gICAgICBpZiAobWVudU1vZGUgIT09ICdpbmxpbmUnKSB7XG4gICAgICAgIC8vIGNsb3NpbmcgdmVydGljYWwgcG9wdXAgc3VibWVudSBhZnRlciBjbGljayBpdFxuICAgICAgICBtZW51UHJvcHMub25DbGljayA9IF90aGlzLmhhbmRsZUNsaWNrO1xuICAgICAgICBtZW51UHJvcHMub3BlblRyYW5zaXRpb25OYW1lID0gbW91bnRlZCA/IG1lbnVPcGVuQW5pbWF0aW9uIDogJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZW51UHJvcHMub3BlbkFuaW1hdGlvbiA9IG1vdW50ZWQgPyBtZW51T3BlbkFuaW1hdGlvbiA6IHt9O1xuICAgICAgfSAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy84NTg3XG5cblxuICAgICAgaWYgKF90aGlzLmdldElubGluZUNvbGxhcHNlZCgpICYmIChjb2xsYXBzZWRXaWR0aCA9PT0gMCB8fCBjb2xsYXBzZWRXaWR0aCA9PT0gJzAnIHx8IGNvbGxhcHNlZFdpZHRoID09PSAnMHB4JykpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9yY01lbnVbXCJkZWZhdWx0XCJdLCBfZXh0ZW5kcyh7XG4gICAgICAgIGdldFBvcHVwQ29udGFpbmVyOiBnZXRQb3B1cENvbnRhaW5lclxuICAgICAgfSwgcGFzc1Byb3BzLCBtZW51UHJvcHMsIHtcbiAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgIG9uVHJhbnNpdGlvbkVuZDogX3RoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZCxcbiAgICAgICAgb25Nb3VzZUVudGVyOiBfdGhpcy5oYW5kbGVNb3VzZUVudGVyXG4gICAgICB9KSk7XG4gICAgfTtcblxuICAgICgwLCBfd2FybmluZ1tcImRlZmF1bHRcIl0pKCEoJ29uT3BlbicgaW4gcHJvcHMgfHwgJ29uQ2xvc2UnIGluIHByb3BzKSwgJ01lbnUnLCAnYG9uT3BlbmAgYW5kIGBvbkNsb3NlYCBhcmUgcmVtb3ZlZCwgcGxlYXNlIHVzZSBgb25PcGVuQ2hhbmdlYCBpbnN0ZWFkLCAnICsgJ3NlZTogaHR0cHM6Ly91LmFudC5kZXNpZ24vbWVudS1vbi1vcGVuLWNoYW5nZS4nKTtcbiAgICAoMCwgX3dhcm5pbmdbXCJkZWZhdWx0XCJdKSghKCdpbmxpbmVDb2xsYXBzZWQnIGluIHByb3BzICYmIHByb3BzLm1vZGUgIT09ICdpbmxpbmUnKSwgJ01lbnUnLCAnYGlubGluZUNvbGxhcHNlZGAgc2hvdWxkIG9ubHkgYmUgdXNlZCB3aGVuIGBtb2RlYCBpcyBpbmxpbmUuJyk7XG4gICAgKDAsIF93YXJuaW5nW1wiZGVmYXVsdFwiXSkoIShwcm9wcy5zaWRlckNvbGxhcHNlZCAhPT0gdW5kZWZpbmVkICYmICdpbmxpbmVDb2xsYXBzZWQnIGluIHByb3BzKSwgJ01lbnUnLCAnYGlubGluZUNvbGxhcHNlZGAgbm90IGNvbnRyb2wgTWVudSB1bmRlciBTaWRlci4gU2hvdWxkIHNldCBgY29sbGFwc2VkYCBvbiBTaWRlciBpbnN0ZWFkLicpO1xuICAgIHZhciBvcGVuS2V5cztcblxuICAgIGlmICgnb3BlbktleXMnIGluIHByb3BzKSB7XG4gICAgICBvcGVuS2V5cyA9IHByb3BzLm9wZW5LZXlzO1xuICAgIH0gZWxzZSBpZiAoJ2RlZmF1bHRPcGVuS2V5cycgaW4gcHJvcHMpIHtcbiAgICAgIG9wZW5LZXlzID0gcHJvcHMuZGVmYXVsdE9wZW5LZXlzO1xuICAgIH1cblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbktleXM6IG9wZW5LZXlzIHx8IFtdLFxuICAgICAgc3dpdGNoaW5nTW9kZUZyb21JbmxpbmU6IGZhbHNlLFxuICAgICAgaW5saW5lT3BlbktleXM6IFtdLFxuICAgICAgcHJldlByb3BzOiBwcm9wcyxcbiAgICAgIG1vdW50ZWQ6IGZhbHNlXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSW50ZXJuYWxNZW51LCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIC8vIFtMZWdhY3ldIE9yaWdpbiBjb2RlIGNhbiByZW5kZXIgZnVsbCBkZWZhdWx0T3BlbktleXMgaXMgY2F1c2VkIGJ5IGByYy1hbmltYXRlYCBidWcuXG4gICAgLy8gV2UgaGF2ZSB0byB3b3JrYXJvdW5kIHRoaXMgdG8gcHJldmVudCBhbmltYXRpb24gb24gZmlyc3QgcmVuZGVyLlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzE1OTY2XG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHRoaXMubW91bnRSYWZJZCA9ICgwLCBfcmFmW1wiZGVmYXVsdFwiXSkoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIuc2V0U3RhdGUoe1xuICAgICAgICAgIG1vdW50ZWQ6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9LCAxMCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgX3JhZltcImRlZmF1bHRcIl0uY2FuY2VsKHRoaXMubW91bnRSYWZJZCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlc3RvcmVNb2RlVmVydGljYWxGcm9tSW5saW5lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc3RvcmVNb2RlVmVydGljYWxGcm9tSW5saW5lKCkge1xuICAgICAgdmFyIHN3aXRjaGluZ01vZGVGcm9tSW5saW5lID0gdGhpcy5zdGF0ZS5zd2l0Y2hpbmdNb2RlRnJvbUlubGluZTtcblxuICAgICAgaWYgKHN3aXRjaGluZ01vZGVGcm9tSW5saW5lKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHN3aXRjaGluZ01vZGVGcm9tSW5saW5lOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0T3BlbktleXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0T3BlbktleXMob3BlbktleXMpIHtcbiAgICAgIGlmICghKCdvcGVuS2V5cycgaW4gdGhpcy5wcm9wcykpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgb3BlbktleXM6IG9wZW5LZXlzXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRSZWFsTWVudU1vZGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UmVhbE1lbnVNb2RlKCkge1xuICAgICAgdmFyIGlubGluZUNvbGxhcHNlZCA9IHRoaXMuZ2V0SW5saW5lQ29sbGFwc2VkKCk7XG5cbiAgICAgIGlmICh0aGlzLnN0YXRlLnN3aXRjaGluZ01vZGVGcm9tSW5saW5lICYmIGlubGluZUNvbGxhcHNlZCkge1xuICAgICAgICByZXR1cm4gJ2lubGluZSc7XG4gICAgICB9XG5cbiAgICAgIHZhciBtb2RlID0gdGhpcy5wcm9wcy5tb2RlO1xuICAgICAgcmV0dXJuIGlubGluZUNvbGxhcHNlZCA/ICd2ZXJ0aWNhbCcgOiBtb2RlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRJbmxpbmVDb2xsYXBzZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5saW5lQ29sbGFwc2VkKCkge1xuICAgICAgdmFyIGlubGluZUNvbGxhcHNlZCA9IHRoaXMucHJvcHMuaW5saW5lQ29sbGFwc2VkO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5zaWRlckNvbGxhcHNlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLnNpZGVyQ29sbGFwc2VkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5saW5lQ29sbGFwc2VkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRNZW51T3BlbkFuaW1hdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRNZW51T3BlbkFuaW1hdGlvbihtZW51TW9kZSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgb3BlbkFuaW1hdGlvbiA9IF90aGlzJHByb3BzMi5vcGVuQW5pbWF0aW9uLFxuICAgICAgICAgIG9wZW5UcmFuc2l0aW9uTmFtZSA9IF90aGlzJHByb3BzMi5vcGVuVHJhbnNpdGlvbk5hbWU7XG4gICAgICB2YXIgbWVudU9wZW5BbmltYXRpb24gPSBvcGVuQW5pbWF0aW9uIHx8IG9wZW5UcmFuc2l0aW9uTmFtZTtcblxuICAgICAgaWYgKG9wZW5BbmltYXRpb24gPT09IHVuZGVmaW5lZCAmJiBvcGVuVHJhbnNpdGlvbk5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAobWVudU1vZGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgIG1lbnVPcGVuQW5pbWF0aW9uID0gJ3NsaWRlLXVwJztcbiAgICAgICAgfSBlbHNlIGlmIChtZW51TW9kZSA9PT0gJ2lubGluZScpIHtcbiAgICAgICAgICBtZW51T3BlbkFuaW1hdGlvbiA9IF9vcGVuQW5pbWF0aW9uW1wiZGVmYXVsdFwiXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBXaGVuIG1vZGUgc3dpdGNoIGZyb20gaW5saW5lXG4gICAgICAgICAgLy8gc3VibWVudSBzaG91bGQgaGlkZSB3aXRob3V0IGFuaW1hdGlvblxuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnN3aXRjaGluZ01vZGVGcm9tSW5saW5lKSB7XG4gICAgICAgICAgICBtZW51T3BlbkFuaW1hdGlvbiA9ICcnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZW51T3BlbkFuaW1hdGlvbiA9ICd6b29tLWJpZyc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtZW51T3BlbkFuaW1hdGlvbjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9NZW51Q29udGV4dFtcImRlZmF1bHRcIl0uUHJvdmlkZXIsIHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICBpbmxpbmVDb2xsYXBzZWQ6IHRoaXMuZ2V0SW5saW5lQ29sbGFwc2VkKCkgfHwgZmFsc2UsXG4gICAgICAgICAgYW50ZE1lbnVUaGVtZTogdGhpcy5wcm9wcy50aGVtZVxuICAgICAgICB9XG4gICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KF9jb25maWdQcm92aWRlci5Db25maWdDb25zdW1lciwgbnVsbCwgdGhpcy5yZW5kZXJNZW51KSk7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgdmFyIHByZXZQcm9wcyA9IHByZXZTdGF0ZS5wcmV2UHJvcHM7XG4gICAgICB2YXIgbmV3U3RhdGUgPSB7XG4gICAgICAgIHByZXZQcm9wczogbmV4dFByb3BzXG4gICAgICB9O1xuXG4gICAgICBpZiAocHJldlByb3BzLm1vZGUgPT09ICdpbmxpbmUnICYmIG5leHRQcm9wcy5tb2RlICE9PSAnaW5saW5lJykge1xuICAgICAgICBuZXdTdGF0ZS5zd2l0Y2hpbmdNb2RlRnJvbUlubGluZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICgnb3BlbktleXMnIGluIG5leHRQcm9wcykge1xuICAgICAgICBuZXdTdGF0ZS5vcGVuS2V5cyA9IG5leHRQcm9wcy5vcGVuS2V5cztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFtMZWdhY3ldIE9sZCBjb2RlIHdpbGwgcmV0dXJuIGFmdGVyIGBvcGVuS2V5c2AgY2hhbmdlZC5cbiAgICAgICAgLy8gTm90IHN1cmUgdGhlIHJlYXNvbiwgd2Ugc2hvdWxkIGtlZXAgdGhpcyBsb2dpYyBzdGlsbC5cbiAgICAgICAgaWYgKG5leHRQcm9wcy5pbmxpbmVDb2xsYXBzZWQgJiYgIXByZXZQcm9wcy5pbmxpbmVDb2xsYXBzZWQgfHwgbmV4dFByb3BzLnNpZGVyQ29sbGFwc2VkICYmICFwcmV2UHJvcHMuc2lkZXJDb2xsYXBzZWQpIHtcbiAgICAgICAgICBuZXdTdGF0ZS5zd2l0Y2hpbmdNb2RlRnJvbUlubGluZSA9IHRydWU7XG4gICAgICAgICAgbmV3U3RhdGUuaW5saW5lT3BlbktleXMgPSBwcmV2U3RhdGUub3BlbktleXM7XG4gICAgICAgICAgbmV3U3RhdGUub3BlbktleXMgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbmV4dFByb3BzLmlubGluZUNvbGxhcHNlZCAmJiBwcmV2UHJvcHMuaW5saW5lQ29sbGFwc2VkIHx8ICFuZXh0UHJvcHMuc2lkZXJDb2xsYXBzZWQgJiYgcHJldlByb3BzLnNpZGVyQ29sbGFwc2VkKSB7XG4gICAgICAgICAgbmV3U3RhdGUub3BlbktleXMgPSBwcmV2U3RhdGUuaW5saW5lT3BlbktleXM7XG4gICAgICAgICAgbmV3U3RhdGUuaW5saW5lT3BlbktleXMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEludGVybmFsTWVudTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuSW50ZXJuYWxNZW51LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiAnJyxcbiAgdGhlbWU6ICdsaWdodCcsXG4gIGZvY3VzYWJsZTogZmFsc2Vcbn07XG4oMCwgX3JlYWN0TGlmZWN5Y2xlc0NvbXBhdC5wb2x5ZmlsbCkoSW50ZXJuYWxNZW51KTsgLy8gV2Ugc2hvdWxkIGtlZXAgdGhpcyBhcyByZWYtYWJsZVxuXG52YXIgTWVudSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudDIpIHtcbiAgX2luaGVyaXRzKE1lbnUsIF9SZWFjdCRDb21wb25lbnQyKTtcblxuICBmdW5jdGlvbiBNZW51KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNZW51KTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoTWVudSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWVudSwgW3tcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfU2lkZXIuU2lkZXJDb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChJbnRlcm5hbE1lbnUsIF9leHRlbmRzKHt9LCBfdGhpczMucHJvcHMsIGNvbnRleHQpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNZW51O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IE1lbnU7XG5NZW51LkRpdmlkZXIgPSBfcmNNZW51LkRpdmlkZXI7XG5NZW51Lkl0ZW0gPSBfTWVudUl0ZW1bXCJkZWZhdWx0XCJdO1xuTWVudS5TdWJNZW51ID0gX1N1Yk1lbnVbXCJkZWZhdWx0XCJdO1xuTWVudS5JdGVtR3JvdXAgPSBfcmNNZW51Lkl0ZW1Hcm91cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbWVudS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBQcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfcmNNZW51ID0gcmVxdWlyZShcInJjLW1lbnVcIik7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX01lbnVDb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9NZW51Q29udGV4dFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHt9OyBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbnZhciBTdWJNZW51ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhTdWJNZW51LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTdWJNZW51KCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdWJNZW51KTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKFN1Yk1lbnUpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXG4gICAgX3RoaXMub25LZXlEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIF90aGlzLnN1Yk1lbnUub25LZXlEb3duKGUpO1xuICAgIH07XG5cbiAgICBfdGhpcy5zYXZlU3ViTWVudSA9IGZ1bmN0aW9uIChzdWJNZW51KSB7XG4gICAgICBfdGhpcy5zdWJNZW51ID0gc3ViTWVudTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFN1Yk1lbnUsIFt7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICByb290UHJlZml4Q2xzID0gX3RoaXMkcHJvcHMucm9vdFByZWZpeENscyxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5jbGFzc05hbWU7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfTWVudUNvbnRleHRbXCJkZWZhdWx0XCJdLkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICB2YXIgYW50ZE1lbnVUaGVtZSA9IF9yZWYuYW50ZE1lbnVUaGVtZTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX3JjTWVudS5TdWJNZW51LCBfZXh0ZW5kcyh7fSwgX3RoaXMyLnByb3BzLCB7XG4gICAgICAgICAgcmVmOiBfdGhpczIuc2F2ZVN1Yk1lbnUsXG4gICAgICAgICAgcG9wdXBDbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKFwiXCIuY29uY2F0KHJvb3RQcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoYW50ZE1lbnVUaGVtZSksIGNsYXNzTmFtZSlcbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFN1Yk1lbnU7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cblN1Yk1lbnUuY29udGV4dFR5cGVzID0ge1xuICBhbnRkTWVudVRoZW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59OyAvLyBmaXggaXNzdWU6aHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvODY2NlxuXG5TdWJNZW51LmlzU3ViTWVudSA9IDE7XG52YXIgX2RlZmF1bHQgPSBTdWJNZW51O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN1Yk1lbnUuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9tZW51L1N1Yk1lbnUuanNcbi8vIG1vZHVsZSBpZCA9IDY2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JjTWVudSA9IHJlcXVpcmUoXCJyYy1tZW51XCIpO1xuXG52YXIgX01lbnVDb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9NZW51Q29udGV4dFwiKSk7XG5cbnZhciBfdG9vbHRpcCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3Rvb2x0aXBcIikpO1xuXG52YXIgX1NpZGVyID0gcmVxdWlyZShcIi4uL2xheW91dC9TaWRlclwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDoge307IGlmIChkZXNjLmdldCB8fCBkZXNjLnNldCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxudmFyIF9fcmVzdCA9IHZvaWQgMCAmJiAodm9pZCAwKS5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbnZhciBNZW51SXRlbSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTWVudUl0ZW0sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE1lbnVJdGVtKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNZW51SXRlbSk7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihNZW51SXRlbSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cbiAgICBfdGhpcy5vbktleURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgX3RoaXMubWVudUl0ZW0ub25LZXlEb3duKGUpO1xuICAgIH07XG5cbiAgICBfdGhpcy5zYXZlTWVudUl0ZW0gPSBmdW5jdGlvbiAobWVudUl0ZW0pIHtcbiAgICAgIF90aGlzLm1lbnVJdGVtID0gbWVudUl0ZW07XG4gICAgfTtcblxuICAgIF90aGlzLnJlbmRlckl0ZW0gPSBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIHNpZGVyQ29sbGFwc2VkID0gX3JlZi5zaWRlckNvbGxhcHNlZDtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGxldmVsID0gX3RoaXMkcHJvcHMubGV2ZWwsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICByb290UHJlZml4Q2xzID0gX3RoaXMkcHJvcHMucm9vdFByZWZpeENscztcblxuICAgICAgdmFyIF9hID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgdGl0bGUgPSBfYS50aXRsZSxcbiAgICAgICAgICByZXN0ID0gX19yZXN0KF9hLCBbXCJ0aXRsZVwiXSk7XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9NZW51Q29udGV4dFtcImRlZmF1bHRcIl0uQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICB2YXIgaW5saW5lQ29sbGFwc2VkID0gX3JlZjIuaW5saW5lQ29sbGFwc2VkO1xuICAgICAgICB2YXIgdG9vbHRpcFByb3BzID0ge307XG4gICAgICAgIHZhciB0aXRsZU5vZGUgPSB0aXRsZSB8fCAobGV2ZWwgPT09IDEgPyBjaGlsZHJlbiA6ICcnKTtcblxuICAgICAgICBpZiAoIXNpZGVyQ29sbGFwc2VkICYmICFpbmxpbmVDb2xsYXBzZWQpIHtcbiAgICAgICAgICB0aXRsZU5vZGUgPSBudWxsOyAvLyBSZXNldCBgdmlzaWJsZWAgdG8gZml4IGNvbnRyb2wgbW9kZSB0b29sdGlwIGRpc3BsYXkgbm90IGNvcnJlY3RcbiAgICAgICAgICAvLyByZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzE2NzQyXG5cbiAgICAgICAgICB0b29sdGlwUHJvcHMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX3Rvb2x0aXBbXCJkZWZhdWx0XCJdLCBfZXh0ZW5kcyh7fSwgdG9vbHRpcFByb3BzLCB7XG4gICAgICAgICAgdGl0bGU6IHRpdGxlTm9kZSxcbiAgICAgICAgICBwbGFjZW1lbnQ6IFwicmlnaHRcIixcbiAgICAgICAgICBvdmVybGF5Q2xhc3NOYW1lOiBcIlwiLmNvbmNhdChyb290UHJlZml4Q2xzLCBcIi1pbmxpbmUtY29sbGFwc2VkLXRvb2x0aXBcIilcbiAgICAgICAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX3JjTWVudS5JdGVtLCBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICByZWY6IF90aGlzLnNhdmVNZW51SXRlbVxuICAgICAgICB9KSkpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNZW51SXRlbSwgW3tcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9TaWRlci5TaWRlckNvbnRleHQuQ29uc3VtZXIsIG51bGwsIHRoaXMucmVuZGVySXRlbSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1lbnVJdGVtO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IE1lbnVJdGVtO1xuTWVudUl0ZW0uaXNNZW51SXRlbSA9IHRydWU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1NZW51SXRlbS5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2FudGQvbGliL21lbnUvTWVudUl0ZW0uanNcbi8vIG1vZHVsZSBpZCA9IDY2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0T3ZlcmZsb3dPcHRpb25zID0gZ2V0T3ZlcmZsb3dPcHRpb25zO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBnZXRQbGFjZW1lbnRzO1xuXG52YXIgX3BsYWNlbWVudHMgPSByZXF1aXJlKFwicmMtdG9vbHRpcC9saWIvcGxhY2VtZW50c1wiKTtcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxudmFyIGF1dG9BZGp1c3RPdmVyZmxvd0VuYWJsZWQgPSB7XG4gIGFkanVzdFg6IDEsXG4gIGFkanVzdFk6IDFcbn07XG52YXIgYXV0b0FkanVzdE92ZXJmbG93RGlzYWJsZWQgPSB7XG4gIGFkanVzdFg6IDAsXG4gIGFkanVzdFk6IDBcbn07XG52YXIgdGFyZ2V0T2Zmc2V0ID0gWzAsIDBdO1xuXG5mdW5jdGlvbiBnZXRPdmVyZmxvd09wdGlvbnMoYXV0b0FkanVzdE92ZXJmbG93KSB7XG4gIGlmICh0eXBlb2YgYXV0b0FkanVzdE92ZXJmbG93ID09PSAnYm9vbGVhbicpIHtcbiAgICByZXR1cm4gYXV0b0FkanVzdE92ZXJmbG93ID8gYXV0b0FkanVzdE92ZXJmbG93RW5hYmxlZCA6IGF1dG9BZGp1c3RPdmVyZmxvd0Rpc2FibGVkO1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBhdXRvQWRqdXN0T3ZlcmZsb3dEaXNhYmxlZCwgYXV0b0FkanVzdE92ZXJmbG93KTtcbn1cblxuZnVuY3Rpb24gZ2V0UGxhY2VtZW50cygpIHtcbiAgdmFyIGNvbmZpZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHZhciBfY29uZmlnJGFycm93V2lkdGggPSBjb25maWcuYXJyb3dXaWR0aCxcbiAgICAgIGFycm93V2lkdGggPSBfY29uZmlnJGFycm93V2lkdGggPT09IHZvaWQgMCA/IDUgOiBfY29uZmlnJGFycm93V2lkdGgsXG4gICAgICBfY29uZmlnJGhvcml6b250YWxBcnIgPSBjb25maWcuaG9yaXpvbnRhbEFycm93U2hpZnQsXG4gICAgICBob3Jpem9udGFsQXJyb3dTaGlmdCA9IF9jb25maWckaG9yaXpvbnRhbEFyciA9PT0gdm9pZCAwID8gMTYgOiBfY29uZmlnJGhvcml6b250YWxBcnIsXG4gICAgICBfY29uZmlnJHZlcnRpY2FsQXJyb3cgPSBjb25maWcudmVydGljYWxBcnJvd1NoaWZ0LFxuICAgICAgdmVydGljYWxBcnJvd1NoaWZ0ID0gX2NvbmZpZyR2ZXJ0aWNhbEFycm93ID09PSB2b2lkIDAgPyAxMiA6IF9jb25maWckdmVydGljYWxBcnJvdyxcbiAgICAgIF9jb25maWckYXV0b0FkanVzdE92ZSA9IGNvbmZpZy5hdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgICBhdXRvQWRqdXN0T3ZlcmZsb3cgPSBfY29uZmlnJGF1dG9BZGp1c3RPdmUgPT09IHZvaWQgMCA/IHRydWUgOiBfY29uZmlnJGF1dG9BZGp1c3RPdmU7XG4gIHZhciBwbGFjZW1lbnRNYXAgPSB7XG4gICAgbGVmdDoge1xuICAgICAgcG9pbnRzOiBbJ2NyJywgJ2NsJ10sXG4gICAgICBvZmZzZXQ6IFstNCwgMF1cbiAgICB9LFxuICAgIHJpZ2h0OiB7XG4gICAgICBwb2ludHM6IFsnY2wnLCAnY3InXSxcbiAgICAgIG9mZnNldDogWzQsIDBdXG4gICAgfSxcbiAgICB0b3A6IHtcbiAgICAgIHBvaW50czogWydiYycsICd0YyddLFxuICAgICAgb2Zmc2V0OiBbMCwgLTRdXG4gICAgfSxcbiAgICBib3R0b206IHtcbiAgICAgIHBvaW50czogWyd0YycsICdiYyddLFxuICAgICAgb2Zmc2V0OiBbMCwgNF1cbiAgICB9LFxuICAgIHRvcExlZnQ6IHtcbiAgICAgIHBvaW50czogWydibCcsICd0YyddLFxuICAgICAgb2Zmc2V0OiBbLShob3Jpem9udGFsQXJyb3dTaGlmdCArIGFycm93V2lkdGgpLCAtNF1cbiAgICB9LFxuICAgIGxlZnRUb3A6IHtcbiAgICAgIHBvaW50czogWyd0cicsICdjbCddLFxuICAgICAgb2Zmc2V0OiBbLTQsIC0odmVydGljYWxBcnJvd1NoaWZ0ICsgYXJyb3dXaWR0aCldXG4gICAgfSxcbiAgICB0b3BSaWdodDoge1xuICAgICAgcG9pbnRzOiBbJ2JyJywgJ3RjJ10sXG4gICAgICBvZmZzZXQ6IFtob3Jpem9udGFsQXJyb3dTaGlmdCArIGFycm93V2lkdGgsIC00XVxuICAgIH0sXG4gICAgcmlnaHRUb3A6IHtcbiAgICAgIHBvaW50czogWyd0bCcsICdjciddLFxuICAgICAgb2Zmc2V0OiBbNCwgLSh2ZXJ0aWNhbEFycm93U2hpZnQgKyBhcnJvd1dpZHRoKV1cbiAgICB9LFxuICAgIGJvdHRvbVJpZ2h0OiB7XG4gICAgICBwb2ludHM6IFsndHInLCAnYmMnXSxcbiAgICAgIG9mZnNldDogW2hvcml6b250YWxBcnJvd1NoaWZ0ICsgYXJyb3dXaWR0aCwgNF1cbiAgICB9LFxuICAgIHJpZ2h0Qm90dG9tOiB7XG4gICAgICBwb2ludHM6IFsnYmwnLCAnY3InXSxcbiAgICAgIG9mZnNldDogWzQsIHZlcnRpY2FsQXJyb3dTaGlmdCArIGFycm93V2lkdGhdXG4gICAgfSxcbiAgICBib3R0b21MZWZ0OiB7XG4gICAgICBwb2ludHM6IFsndGwnLCAnYmMnXSxcbiAgICAgIG9mZnNldDogWy0oaG9yaXpvbnRhbEFycm93U2hpZnQgKyBhcnJvd1dpZHRoKSwgNF1cbiAgICB9LFxuICAgIGxlZnRCb3R0b206IHtcbiAgICAgIHBvaW50czogWydicicsICdjbCddLFxuICAgICAgb2Zmc2V0OiBbLTQsIHZlcnRpY2FsQXJyb3dTaGlmdCArIGFycm93V2lkdGhdXG4gICAgfVxuICB9O1xuICBPYmplY3Qua2V5cyhwbGFjZW1lbnRNYXApLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHBsYWNlbWVudE1hcFtrZXldID0gY29uZmlnLmFycm93UG9pbnRBdENlbnRlciA/IF9leHRlbmRzKHt9LCBwbGFjZW1lbnRNYXBba2V5XSwge1xuICAgICAgb3ZlcmZsb3c6IGdldE92ZXJmbG93T3B0aW9ucyhhdXRvQWRqdXN0T3ZlcmZsb3cpLFxuICAgICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgICB9KSA6IF9leHRlbmRzKHt9LCBfcGxhY2VtZW50cy5wbGFjZW1lbnRzW2tleV0sIHtcbiAgICAgIG92ZXJmbG93OiBnZXRPdmVyZmxvd09wdGlvbnMoYXV0b0FkanVzdE92ZXJmbG93KVxuICAgIH0pO1xuICAgIHBsYWNlbWVudE1hcFtrZXldLmlnbm9yZVNoYWtlID0gdHJ1ZTtcbiAgfSk7XG4gIHJldHVybiBwbGFjZW1lbnRNYXA7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wbGFjZW1lbnRzLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvdG9vbHRpcC9wbGFjZW1lbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA2Njdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGF1dG9BZGp1c3RPdmVyZmxvdyA9IHtcbiAgYWRqdXN0WDogMSxcbiAgYWRqdXN0WTogMVxufTtcblxudmFyIHRhcmdldE9mZnNldCA9IFswLCAwXTtcblxudmFyIHBsYWNlbWVudHMgPSBleHBvcnRzLnBsYWNlbWVudHMgPSB7XG4gIGxlZnQ6IHtcbiAgICBwb2ludHM6IFsnY3InLCAnY2wnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWy00LCAwXSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICByaWdodDoge1xuICAgIHBvaW50czogWydjbCcsICdjciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgdG9wOiB7XG4gICAgcG9pbnRzOiBbJ2JjJywgJ3RjJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCAtNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgYm90dG9tOiB7XG4gICAgcG9pbnRzOiBbJ3RjJywgJ2JjJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCA0XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICB0b3BMZWZ0OiB7XG4gICAgcG9pbnRzOiBbJ2JsJywgJ3RsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCAtNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgbGVmdFRvcDoge1xuICAgIHBvaW50czogWyd0cicsICd0bCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbLTQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIHRvcFJpZ2h0OiB7XG4gICAgcG9pbnRzOiBbJ2JyJywgJ3RyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCAtNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgcmlnaHRUb3A6IHtcbiAgICBwb2ludHM6IFsndGwnLCAndHInXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIGJvdHRvbVJpZ2h0OiB7XG4gICAgcG9pbnRzOiBbJ3RyJywgJ2JyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCA0XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICByaWdodEJvdHRvbToge1xuICAgIHBvaW50czogWydibCcsICdiciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgYm90dG9tTGVmdDoge1xuICAgIHBvaW50czogWyd0bCcsICdibCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgbGVmdEJvdHRvbToge1xuICAgIHBvaW50czogWydicicsICdibCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbLTQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH1cbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHBsYWNlbWVudHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmMtdG9vbHRpcC9saWIvcGxhY2VtZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gNjY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfY3NzQW5pbWF0aW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY3NzLWFuaW1hdGlvblwiKSk7XG5cbnZhciBfcmFmID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmFmXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbi8qKlxuICogRGVwcmVjYXRlZC4gV2Ugc2hvdWxkIHJlcGxhY2UgdGhlIGFuaW1hdGlvbiB3aXRoIHB1cmUgcmVhY3QgbW90aW9uIGluc3RlYWQgb2YgbW9kaWZ5IHN0eWxlIGRpcmVjdGx5LlxuICogSWYgeW91IGFyZSBjcmVhdGluZyBuZXcgY29tcG9uZW50IHdpdGggYW5pbWF0aW9uLCBwbGVhc2UgdXNlIGAuL21vdGlvbmAuXG4gKi9cbmZ1bmN0aW9uIGFuaW1hdGUobm9kZSwgc2hvdywgZG9uZSkge1xuICB2YXIgaGVpZ2h0O1xuICB2YXIgcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQ7XG4gIHJldHVybiAoMCwgX2Nzc0FuaW1hdGlvbltcImRlZmF1bHRcIl0pKG5vZGUsICdhbnQtbW90aW9uLWNvbGxhcHNlLWxlZ2FjeScsIHtcbiAgICBzdGFydDogZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICBpZiAoIXNob3cpIHtcbiAgICAgICAgbm9kZS5zdHlsZS5oZWlnaHQgPSBcIlwiLmNvbmNhdChub2RlLm9mZnNldEhlaWdodCwgXCJweFwiKTtcbiAgICAgICAgbm9kZS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGVpZ2h0ID0gbm9kZS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgICAgIG5vZGUuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgIH1cbiAgICB9LFxuICAgIGFjdGl2ZTogZnVuY3Rpb24gYWN0aXZlKCkge1xuICAgICAgaWYgKHJlcXVlc3RBbmltYXRpb25GcmFtZUlkKSB7XG4gICAgICAgIF9yYWZbXCJkZWZhdWx0XCJdLmNhbmNlbChyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCk7XG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gKDAsIF9yYWZbXCJkZWZhdWx0XCJdKShmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gXCJcIi5jb25jYXQoc2hvdyA/IGhlaWdodCA6IDAsIFwicHhcIik7XG4gICAgICAgIG5vZGUuc3R5bGUub3BhY2l0eSA9IHNob3cgPyAnMScgOiAnMCc7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGVuZDogZnVuY3Rpb24gZW5kKCkge1xuICAgICAgaWYgKHJlcXVlc3RBbmltYXRpb25GcmFtZUlkKSB7XG4gICAgICAgIF9yYWZbXCJkZWZhdWx0XCJdLmNhbmNlbChyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCk7XG4gICAgICB9XG5cbiAgICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgICBub2RlLnN0eWxlLm9wYWNpdHkgPSAnJztcbiAgICAgIGRvbmUoKTtcbiAgICB9XG4gIH0pO1xufVxuXG52YXIgYW5pbWF0aW9uID0ge1xuICBlbnRlcjogZnVuY3Rpb24gZW50ZXIobm9kZSwgZG9uZSkge1xuICAgIHJldHVybiBhbmltYXRlKG5vZGUsIHRydWUsIGRvbmUpO1xuICB9LFxuICBsZWF2ZTogZnVuY3Rpb24gbGVhdmUobm9kZSwgZG9uZSkge1xuICAgIHJldHVybiBhbmltYXRlKG5vZGUsIGZhbHNlLCBkb25lKTtcbiAgfSxcbiAgYXBwZWFyOiBmdW5jdGlvbiBhcHBlYXIobm9kZSwgZG9uZSkge1xuICAgIHJldHVybiBhbmltYXRlKG5vZGUsIHRydWUsIGRvbmUpO1xuICB9XG59O1xudmFyIF9kZWZhdWx0ID0gYW5pbWF0aW9uO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9wZW5BbmltYXRpb24uanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9fdXRpbC9vcGVuQW5pbWF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA2Njlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnJlcXVpcmUoXCIuLi8uLi9zdHlsZS9pbmRleC5jc3NcIik7XG5cbnJlcXVpcmUoXCIuL2luZGV4LmNzc1wiKTtcblxucmVxdWlyZShcIi4uLy4uL3Rvb2x0aXAvc3R5bGUvY3NzXCIpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3NzLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbWVudS9zdHlsZS9jc3MuanNcbi8vIG1vZHVsZSBpZCA9IDY3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2FudGQvbGliL21lbnUvc3R5bGUvaW5kZXguY3NzXG4vLyBtb2R1bGUgaWQgPSA2NzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnJlcXVpcmUoXCIuLi8uLi9zdHlsZS9pbmRleC5jc3NcIik7XG5cbnJlcXVpcmUoXCIuL2luZGV4LmNzc1wiKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNzcy5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3Rvb2x0aXAvc3R5bGUvY3NzLmpzXG4vLyBtb2R1bGUgaWQgPSA2NzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hbnRkL2xpYi90b29sdGlwL3N0eWxlL2luZGV4LmNzc1xuLy8gbW9kdWxlIGlkID0gNjc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1wicmV0XCI6dHJ1ZSxcInN0YXR1c1wiOjAsXCJkYXRhXCI6W3tcImlkXCI6MTE0NTgsXCJwYXJlbnRJZFwiOjAsXCJuYW1lXCI6XCLpppbpobVcIixcInBhdGhcIjpcIi9Ib21lXCIsXCJkZXNjXCI6XCJlOTg3XCIsXCJ0cmVlQ29kZVwiOlwiIzAjMTE0NTgjXCIsXCJzb3J0XCI6MCxcInNob3dUeXBlXCI6XCJOQVZcIixcImFwcFNvdXJjZVwiOlwibW9saWVyZVwiLFwicmlwcGxlT3BlbkZsb3dcIjpmYWxzZSxcInRhZ3NcIjpbXSxcInN0YXRlXCI6XCJWQUxJRFwiLFwic2VjdXJpdHlMZXZlbFwiOlwiQzJcIixcIm5vZGVMZXZlbFwiOjIsXCJjaGVja2VkXCI6ZmFsc2UsXCJvcGVuXCI6ZmFsc2UsXCJoYXNDaGlsZFwiOmZhbHNlLFwiY2hpbGRMaXN0XCI6W119LHtcImlkXCI6MTQ3MzYsXCJwYXJlbnRJZFwiOjAsXCJuYW1lXCI6XCJSZWR1eCBEZW1vXCIsXCJwYXRoXCI6XCIvUmVkdXhcIixcImRlc2NcIjpcImU5ODFcIixcInRyZWVDb2RlXCI6XCIjMCMxNDczNiNcIixcInNvcnRcIjoxLFwic2hvd1R5cGVcIjpcIk5BVlwiLFwiYXBwU291cmNlXCI6XCJtb2xpZXJlXCIsXCJyaXBwbGVPcGVuRmxvd1wiOmZhbHNlLFwidGFnc1wiOltdLFwic3RhdGVcIjpcIlZBTElEXCIsXCJzZWN1cml0eUxldmVsXCI6XCJDMlwiLFwibm9kZUxldmVsXCI6MixcImNoZWNrZWRcIjpmYWxzZSxcIm9wZW5cIjpmYWxzZSxcImhhc0NoaWxkXCI6dHJ1ZSxcImNoaWxkTGlzdFwiOlt7XCJpZFwiOjE0NzM3LFwicGFyZW50SWRcIjoxNDczNixcIm5hbWVcIjpcIlRPRE9MaXN0XCIsXCJwYXRoXCI6XCIvUmVkdXhEZW1vL1RPRE9MaXN0XCIsXCJkZXNjXCI6XCJcIixcInRyZWVDb2RlXCI6XCIjMCMxNDczNiMxNDczNyNcIixcInNvcnRcIjowLFwic2hvd1R5cGVcIjpcIk5BVlwiLFwiYXBwU291cmNlXCI6XCJtb2xpZXJlXCIsXCJyaXBwbGVPcGVuRmxvd1wiOmZhbHNlLFwidGFnc1wiOltdLFwic3RhdGVcIjpcIlZBTElEXCIsXCJzZWN1cml0eUxldmVsXCI6XCJDMlwiLFwibm9kZUxldmVsXCI6MyxcImNoZWNrZWRcIjpmYWxzZSxcIm9wZW5cIjpmYWxzZSxcImhhc0NoaWxkXCI6ZmFsc2UsXCJjaGlsZExpc3RcIjpbXX0se1wiaWRcIjoxNDc0NyxcInBhcmVudElkXCI6MTQ3MzYsXCJuYW1lXCI6XCLph4fotK3mlLbotKfmn6Xor6JcIixcInBhdGhcIjpcIi9tb2xpZXJlL3dlYi9JblN0b3JhZ2UvRW50cnkvUHVyY2hhc2UvUmVjZWl2ZVF1ZXJ5L0xpc3RcIixcImRlc2NcIjpcIlwiLFwidHJlZUNvZGVcIjpcIiMwIzE0NzM2IzE0NzQ3I1wiLFwic29ydFwiOjEsXCJzaG93VHlwZVwiOlwiTkFWXCIsXCJhcHBTb3VyY2VcIjpcIm1vbGllcmVcIixcInJpcHBsZU9wZW5GbG93XCI6ZmFsc2UsXCJ0YWdzXCI6W10sXCJzdGF0ZVwiOlwiVkFMSURcIixcInNlY3VyaXR5TGV2ZWxcIjpcIkMyXCIsXCJub2RlTGV2ZWxcIjozLFwiY2hlY2tlZFwiOmZhbHNlLFwib3BlblwiOmZhbHNlLFwiaGFzQ2hpbGRcIjpmYWxzZSxcImNoaWxkTGlzdFwiOltdfSx7XCJpZFwiOjMyNDUwLFwicGFyZW50SWRcIjoxNDczNixcIm5hbWVcIjpcIuaJk+WNsOS6jOe7tOeggVwiLFwicGF0aFwiOlwiL21vbGllcmUvd2ViL0luU3RvcmFnZS9FbnRyeS9QdXJjaGFzZS9QcmludFFyY29kZS9MaXN0XCIsXCJkZXNjXCI6XCJcIixcInRyZWVDb2RlXCI6XCIjMCMxNDczNiMzMjQ1MCNcIixcInNvcnRcIjoyLFwic2hvd1R5cGVcIjpcIk5BVlwiLFwiYXBwU291cmNlXCI6XCJtb2xpZXJlXCIsXCJyaXBwbGVPcGVuRmxvd1wiOmZhbHNlLFwidGFnc1wiOltdLFwic3RhdGVcIjpcIlZBTElEXCIsXCJzZWN1cml0eUxldmVsXCI6XCJDMlwiLFwibm9kZUxldmVsXCI6MyxcImNoZWNrZWRcIjpmYWxzZSxcIm9wZW5cIjpmYWxzZSxcImhhc0NoaWxkXCI6ZmFsc2UsXCJjaGlsZExpc3RcIjpbXX0se1wiaWRcIjozNDU0OSxcInBhcmVudElkXCI6MTQ3MzYsXCJuYW1lXCI6XCLmir3mo4Dku7vliqHmn6Xor6JcIixcInBhdGhcIjpcIi9tb2xpZXJlL3dlYi9JblN0b3JhZ2UvRW50cnkvUHVyY2hhc2UvQ2hlY2tRcmNvZGUvTGlzdFwiLFwiZGVzY1wiOlwiXCIsXCJ0cmVlQ29kZVwiOlwiIzAjMTQ3MzYjMzQ1NDkjXCIsXCJzb3J0XCI6MyxcInNob3dUeXBlXCI6XCJOQVZcIixcImFwcFNvdXJjZVwiOlwibW9saWVyZVwiLFwicmlwcGxlT3BlbkZsb3dcIjpmYWxzZSxcInRhZ3NcIjpbXSxcInN0YXRlXCI6XCJWQUxJRFwiLFwic2VjdXJpdHlMZXZlbFwiOlwiQzJcIixcIm5vZGVMZXZlbFwiOjMsXCJjaGVja2VkXCI6ZmFsc2UsXCJvcGVuXCI6ZmFsc2UsXCJoYXNDaGlsZFwiOmZhbHNlLFwiY2hpbGRMaXN0XCI6W119LHtcImlkXCI6MzQ3MTAsXCJwYXJlbnRJZFwiOjE0NzM2LFwibmFtZVwiOlwi5qC45a+55Lu75Yqh5p+l6K+iXCIsXCJwYXRoXCI6XCIvbW9saWVyZS93ZWIvSW5TdG9yYWdlL0VudHJ5L1B1cmNoYXNlL1FSQ29kZUNvbmZpcm0vTGlzdFwiLFwiZGVzY1wiOlwiXCIsXCJ0cmVlQ29kZVwiOlwiIzAjMTQ3MzYjMzQ3MTAjXCIsXCJzb3J0XCI6NCxcInNob3dUeXBlXCI6XCJOQVZcIixcImFwcFNvdXJjZVwiOlwibW9saWVyZVwiLFwicmlwcGxlT3BlbkZsb3dcIjpmYWxzZSxcInRhZ3NcIjpbXSxcInN0YXRlXCI6XCJWQUxJRFwiLFwic2VjdXJpdHlMZXZlbFwiOlwiQzJcIixcIm5vZGVMZXZlbFwiOjMsXCJjaGVja2VkXCI6ZmFsc2UsXCJvcGVuXCI6ZmFsc2UsXCJoYXNDaGlsZFwiOmZhbHNlLFwiY2hpbGRMaXN0XCI6W119LHtcImlkXCI6MzQ5MzMsXCJwYXJlbnRJZFwiOjE0NzM2LFwibmFtZVwiOlwi5Lqk5o6l5oq95qOAXCIsXCJwYXRoXCI6XCIvbW9saWVyZS93ZWIvSW5TdG9yYWdlL1Nwb3RDaGVjay9MaXN0XCIsXCJkZXNjXCI6XCJcIixcInRyZWVDb2RlXCI6XCIjMCMxNDczNiMzNDkzMyNcIixcInNvcnRcIjo1LFwic2hvd1R5cGVcIjpcIk5BVlwiLFwiYXBwU291cmNlXCI6XCJtb2xpZXJlXCIsXCJyaXBwbGVPcGVuRmxvd1wiOmZhbHNlLFwidGFnc1wiOltdLFwic3RhdGVcIjpcIlZBTElEXCIsXCJzZWN1cml0eUxldmVsXCI6XCJDMlwiLFwibm9kZUxldmVsXCI6MyxcImNoZWNrZWRcIjpmYWxzZSxcIm9wZW5cIjpmYWxzZSxcImhhc0NoaWxkXCI6ZmFsc2UsXCJjaGlsZExpc3RcIjpbXX1dfSx7XCJpZFwiOjI1NTI4LFwicGFyZW50SWRcIjowLFwibmFtZVwiOlwi55Sf5Lqn55uR5o6nXCIsXCJwYXRoXCI6XCIvbW9saWVyZS93ZWIvTW9uaXRvclwiLFwiZGVzY1wiOlwiZWJmNlwiLFwidHJlZUNvZGVcIjpcIiMwIzI1NTI4I1wiLFwic29ydFwiOjMsXCJzaG93VHlwZVwiOlwiTkFWXCIsXCJhcHBTb3VyY2VcIjpcIm1vbGllcmVcIixcInJpcHBsZU9wZW5GbG93XCI6ZmFsc2UsXCJ0YWdzXCI6W10sXCJzdGF0ZVwiOlwiVkFMSURcIixcInNlY3VyaXR5TGV2ZWxcIjpcIkMyXCIsXCJub2RlTGV2ZWxcIjoyLFwiY2hlY2tlZFwiOmZhbHNlLFwib3BlblwiOmZhbHNlLFwiaGFzQ2hpbGRcIjp0cnVlLFwiY2hpbGRMaXN0XCI6W3tcImlkXCI6MjU1MjksXCJwYXJlbnRJZFwiOjI1NTI4LFwibmFtZVwiOlwi55Sf5Lqn6L+b5bqmXCIsXCJwYXRoXCI6XCIvbW9saWVyZS93ZWIvTW9uaXRvci9Qcm9jZXNzXCIsXCJkZXNjXCI6XCJcIixcInRyZWVDb2RlXCI6XCIjMCMyNTUyOCMyNTUyOSNcIixcInNvcnRcIjowLFwic2hvd1R5cGVcIjpcIk5BVlwiLFwiYXBwU291cmNlXCI6XCJtb2xpZXJlXCIsXCJyaXBwbGVPcGVuRmxvd1wiOmZhbHNlLFwidGFnc1wiOltdLFwic3RhdGVcIjpcIlZBTElEXCIsXCJzZWN1cml0eUxldmVsXCI6XCJDMlwiLFwibm9kZUxldmVsXCI6MyxcImNoZWNrZWRcIjpmYWxzZSxcIm9wZW5cIjpmYWxzZSxcImhhc0NoaWxkXCI6ZmFsc2UsXCJjaGlsZExpc3RcIjpbXX0se1wiaWRcIjozMDA4MyxcInBhcmVudElkXCI6MjU1MjgsXCJuYW1lXCI6XCLph4fotK3mlLbotKfnm5HmjqdcIixcInBhdGhcIjpcIi9tb2xpZXJlL3dlYi9Nb25pdG9yL1JlY2VpdmVcIixcImRlc2NcIjpcIlwiLFwidHJlZUNvZGVcIjpcIiMwIzI1NTI4IzMwMDgzI1wiLFwic29ydFwiOjIsXCJzaG93VHlwZVwiOlwiTkFWXCIsXCJhcHBTb3VyY2VcIjpcIm1vbGllcmVcIixcInJpcHBsZU9wZW5GbG93XCI6ZmFsc2UsXCJ0YWdzXCI6W10sXCJzdGF0ZVwiOlwiVkFMSURcIixcInNlY3VyaXR5TGV2ZWxcIjpcIkMyXCIsXCJub2RlTGV2ZWxcIjozLFwiY2hlY2tlZFwiOmZhbHNlLFwib3BlblwiOmZhbHNlLFwiaGFzQ2hpbGRcIjpmYWxzZSxcImNoaWxkTGlzdFwiOltdfSx7XCJpZFwiOjMwMjIxLFwicGFyZW50SWRcIjoyNTUyOCxcIm5hbWVcIjpcIumihOa1i+eci+adv1wiLFwicGF0aFwiOlwiL21vbGllcmUvd2ViL01vbml0b3IvRm9yY2FzdFwiLFwiZGVzY1wiOlwiXCIsXCJ0cmVlQ29kZVwiOlwiIzAjMjU1MjgjMzAyMjEjXCIsXCJzb3J0XCI6MyxcInNob3dUeXBlXCI6XCJOQVZcIixcImFwcFNvdXJjZVwiOlwibW9saWVyZVwiLFwicmlwcGxlT3BlbkZsb3dcIjpmYWxzZSxcInRhZ3NcIjpbXSxcInN0YXRlXCI6XCJWQUxJRFwiLFwic2VjdXJpdHlMZXZlbFwiOlwiQzJcIixcIm5vZGVMZXZlbFwiOjMsXCJjaGVja2VkXCI6ZmFsc2UsXCJvcGVuXCI6ZmFsc2UsXCJoYXNDaGlsZFwiOmZhbHNlLFwiY2hpbGRMaXN0XCI6W119LHtcImlkXCI6MzMxMDcsXCJwYXJlbnRJZFwiOjI1NTI4LFwibmFtZVwiOlwiVE9ULeS9nOS4mueci+adv1wiLFwicGF0aFwiOlwiL21vbGllcmUvd2ViL01vbml0b3IvVE9UL1dvcmtpbmdQYW5lbFwiLFwiZGVzY1wiOlwiXCIsXCJ0cmVlQ29kZVwiOlwiIzAjMjU1MjgjMzMxMDcjXCIsXCJzb3J0XCI6NyxcInNob3dUeXBlXCI6XCJOQVZcIixcImFwcFNvdXJjZVwiOlwibW9saWVyZVwiLFwicmlwcGxlT3BlbkZsb3dcIjpmYWxzZSxcInRhZ3NcIjpbXSxcInN0YXRlXCI6XCJWQUxJRFwiLFwic2VjdXJpdHlMZXZlbFwiOlwiQzJcIixcIm5vZGVMZXZlbFwiOjMsXCJjaGVja2VkXCI6ZmFsc2UsXCJvcGVuXCI6ZmFsc2UsXCJoYXNDaGlsZFwiOmZhbHNlLFwiY2hpbGRMaXN0XCI6W119LHtcImlkXCI6MzIyMTcsXCJwYXJlbnRJZFwiOjI1NTI4LFwibmFtZVwiOlwiVE9ULeW3peaXtueci+adv1wiLFwicGF0aFwiOlwiL21vbGllcmUvd2ViL01vbml0b3IvVE9UL1dvcmtpbmdIb3Vyc0hpc3RvcnlcIixcImRlc2NcIjpcIlwiLFwidHJlZUNvZGVcIjpcIiMwIzI1NTI4IzMyMjE3I1wiLFwic29ydFwiOjgsXCJzaG93VHlwZVwiOlwiTkFWXCIsXCJhcHBTb3VyY2VcIjpcIm1vbGllcmVcIixcInJpcHBsZU9wZW5GbG93XCI6ZmFsc2UsXCJ0YWdzXCI6W10sXCJzdGF0ZVwiOlwiVkFMSURcIixcInNlY3VyaXR5TGV2ZWxcIjpcIkMyXCIsXCJub2RlTGV2ZWxcIjozLFwiY2hlY2tlZFwiOmZhbHNlLFwib3BlblwiOmZhbHNlLFwiaGFzQ2hpbGRcIjpmYWxzZSxcImNoaWxkTGlzdFwiOltdfSx7XCJpZFwiOjMyNTEyLFwicGFyZW50SWRcIjoyNTUyOCxcIm5hbWVcIjpcIlRPVC3kurrmlYjmiqXooahcIixcInBhdGhcIjpcIi9tb2xpZXJlL3dlYi9Nb25pdG9yL1RPVC9Xb3JraW5nUmVwb3J0XCIsXCJkZXNjXCI6XCJcIixcInRyZWVDb2RlXCI6XCIjMCMyNTUyOCMzMjUxMiNcIixcInNvcnRcIjo5LFwic2hvd1R5cGVcIjpcIk5BVlwiLFwiYXBwU291cmNlXCI6XCJtb2xpZXJlXCIsXCJyaXBwbGVPcGVuRmxvd1wiOmZhbHNlLFwidGFnc1wiOltdLFwic3RhdGVcIjpcIlZBTElEXCIsXCJzZWN1cml0eUxldmVsXCI6XCJDMlwiLFwibm9kZUxldmVsXCI6MyxcImNoZWNrZWRcIjpmYWxzZSxcIm9wZW5cIjpmYWxzZSxcImhhc0NoaWxkXCI6ZmFsc2UsXCJjaGlsZExpc3RcIjpbXX1dfSx7XCJpZFwiOjE1NzczLFwicGFyZW50SWRcIjowLFwibmFtZVwiOlwi5Zyo5bqT566h55CGXCIsXCJwYXRoXCI6XCIvbW9saWVyZS93ZWIvSW5TdG9ja1wiLFwiZGVzY1wiOlwiZWEwZVwiLFwidHJlZUNvZGVcIjpcIiMwIzE1NzczI1wiLFwic29ydFwiOjQsXCJzaG93VHlwZVwiOlwiTkFWXCIsXCJhcHBTb3VyY2VcIjpcIm1vbGllcmVcIixcInJpcHBsZU9wZW5GbG93XCI6ZmFsc2UsXCJ0YWdzXCI6W10sXCJzdGF0ZVwiOlwiVkFMSURcIixcInNlY3VyaXR5TGV2ZWxcIjpcIkMyXCIsXCJub2RlTGV2ZWxcIjoyLFwiY2hlY2tlZFwiOmZhbHNlLFwib3BlblwiOmZhbHNlLFwiaGFzQ2hpbGRcIjp0cnVlLFwiY2hpbGRMaXN0XCI6W3tcImlkXCI6MTU4MTcsXCJwYXJlbnRJZFwiOjE1NzczLFwibmFtZVwiOlwi6KGl6LSn55uR5o6nXCIsXCJwYXRoXCI6XCIvbW9saWVyZS93ZWIvT25TdG9yYWdlL1JlcGxlbmlzaE1vbml0b3JCb2FyZFwiLFwiZGVzY1wiOlwiXCIsXCJ0cmVlQ29kZVwiOlwiIzAjMTU3NzMjMTU4MTcjXCIsXCJzb3J0XCI6MCxcInNob3dUeXBlXCI6XCJOQVZcIixcImFwcFNvdXJjZVwiOlwibW9saWVyZVwiLFwicmlwcGxlT3BlbkZsb3dcIjpmYWxzZSxcInRhZ3NcIjpbXSxcInN0YXRlXCI6XCJWQUxJRFwiLFwic2VjdXJpdHlMZXZlbFwiOlwiQzJcIixcIm5vZGVMZXZlbFwiOjMsXCJjaGVja2VkXCI6ZmFsc2UsXCJvcGVuXCI6ZmFsc2UsXCJoYXNDaGlsZFwiOmZhbHNlLFwiY2hpbGRMaXN0XCI6W119LHtcImlkXCI6MTU5OTYsXCJwYXJlbnRJZFwiOjE1NzczLFwibmFtZVwiOlwi5beu5byC5Lit5b+DXCIsXCJwYXRoXCI6XCIvbW9saWVyZS93ZWIvT25TdG9yYWdlL0RpZmZDZW50ZXIvTGlzdFwiLFwiZGVzY1wiOlwiXCIsXCJ0cmVlQ29kZVwiOlwiIzAjMTU3NzMjMTU5OTYjXCIsXCJzb3J0XCI6MCxcInNob3dUeXBlXCI6XCJOQVZcIixcImFwcFNvdXJjZVwiOlwibW9saWVyZVwiLFwicmlwcGxlT3BlbkZsb3dcIjpmYWxzZSxcInRhZ3NcIjpbXSxcInN0YXRlXCI6XCJWQUxJRFwiLFwic2VjdXJpdHlMZXZlbFwiOlwiQzJcIixcIm5vZGVMZXZlbFwiOjMsXCJjaGVja2VkXCI6ZmFsc2UsXCJvcGVuXCI6ZmFsc2UsXCJoYXNDaGlsZFwiOmZhbHNlLFwiY2hpbGRMaXN0XCI6W119LHtcImlkXCI6MTU4MjMsXCJwYXJlbnRJZFwiOjE1NzczLFwibmFtZVwiOlwi6KGl6LSn5Lu75Yqh5p+l6K+iXCIsXCJwYXRoXCI6XCIvbW9saWVyZS93ZWIvT25TdG9yYWdlL1JlcGxlbmlzaE1hbmFnZS9MaXN0XCIsXCJkZXNjXCI6XCJcIixcInRyZWVDb2RlXCI6XCIjMCMxNTc3MyMxNTgyMyNcIixcInNvcnRcIjoxLFwic2hvd1R5cGVcIjpcIk5BVlwiLFwiYXBwU291cmNlXCI6XCJtb2xpZXJlXCIsXCJyaXBwbGVPcGVuRmxvd1wiOmZhbHNlLFwidGFnc1wiOltdLFwic3RhdGVcIjpcIlZBTElEXCIsXCJzZWN1cml0eUxldmVsXCI6XCJDMlwiLFwibm9kZUxldmVsXCI6MyxcImNoZWNrZWRcIjpmYWxzZSxcIm9wZW5cIjpmYWxzZSxcImhhc0NoaWxkXCI6ZmFsc2UsXCJjaGlsZExpc3RcIjpbXX0se1wiaWRcIjoxNTc4NixcInBhcmVudElkXCI6MTU3NzMsXCJuYW1lXCI6XCLnm5jngrnnrqHnkIYtLeW6n+W8g1wiLFwicGF0aFwiOlwiL21vbGllcmUvd2ViL0luU3RvY2svQ2hlY2svQ2hlY2tPcmRlci9MaXN0XCIsXCJkZXNjXCI6XCJcIixcInRyZWVDb2RlXCI6XCIjMCMxNTc3MyMxNTc4NiNcIixcInNvcnRcIjoyLFwic2hvd1R5cGVcIjpcIk5BVlwiLFwiYXBwU291cmNlXCI6XCJtb2xpZXJlXCIsXCJyaXBwbGVPcGVuRmxvd1wiOmZhbHNlLFwidGFnc1wiOltdLFwic3RhdGVcIjpcIlZBTElEXCIsXCJzZWN1cml0eUxldmVsXCI6XCJDMlwiLFwibm9kZUxldmVsXCI6MyxcImNoZWNrZWRcIjpmYWxzZSxcIm9wZW5cIjpmYWxzZSxcImhhc0NoaWxkXCI6ZmFsc2UsXCJjaGlsZExpc3RcIjpbXX0se1wiaWRcIjoxODQ3OSxcInBhcmVudElkXCI6MTU3NzMsXCJuYW1lXCI6XCLnp7vkvY3mn6Xor6JcIixcInBhdGhcIjpcIi9tb2xpZXJlL3dlYi9PblN0b3JhZ2UvTW92ZW1lbnRRdWVyeS9MaXN0XCIsXCJkZXNjXCI6XCJcIixcInRyZWVDb2RlXCI6XCIjMCMxNTc3MyMxODQ3OSNcIixcInNvcnRcIjo0LFwic2hvd1R5cGVcIjpcIk5BVlwiLFwiYXBwU291cmNlXCI6XCJtb2xpZXJlXCIsXCJyaXBwbGVPcGVuRmxvd1wiOmZhbHNlLFwidGFnc1wiOltdLFwic3RhdGVcIjpcIlZBTElEXCIsXCJzZWN1cml0eUxldmVsXCI6XCJDMlwiLFwibm9kZUxldmVsXCI6MyxcImNoZWNrZWRcIjpmYWxzZSxcIm9wZW5cIjpmYWxzZSxcImhhc0NoaWxkXCI6ZmFsc2UsXCJjaGlsZExpc3RcIjpbXX0se1wiaWRcIjoyMTI4MCxcInBhcmVudElkXCI6MTU3NzMsXCJuYW1lXCI6XCLllYblk4Hnm5jngrnnrqHnkIYtLeW6n+W8g1wiLFwicGF0aFwiOlwiL21vbGllcmUvd2ViL0luU3RvY2svQ2hlY2tCeVNLVS9MaXN0XCIsXCJkZXNjXCI6XCJcIixcInRyZWVDb2RlXCI6XCIjMCMxNTc3MyMyMTI4MCNcIixcInNvcnRcIjo1LFwic2hvd1R5cGVcIjpcIk5BVlwiLFwiYXBwU291cmNlXCI6XCJtb2xpZXJlXCIsXCJyaXBwbGVPcGVuRmxvd1wiOmZhbHNlLFwidGFnc1wiOltdLFwic3RhdGVcIjpcIlZBTElEXCIsXCJzZWN1cml0eUxldmVsXCI6XCJDMlwiLFwibm9kZUxldmVsXCI6MyxcImNoZWNrZWRcIjpmYWxzZSxcIm9wZW5cIjpmYWxzZSxcImhhc0NoaWxkXCI6ZmFsc2UsXCJjaGlsZExpc3RcIjpbXX0se1wiaWRcIjoyNDU1NyxcInBhcmVudElkXCI6MTU3NzMsXCJuYW1lXCI6XCLnm5jngrnnrqHnkIZcIixcInBhdGhcIjpcIi9tb2xpZXJlL3dlYi9JblN0b2NrL05ld0NoZWNrL0xpc3RcIixcImRlc2NcIjpcIlwiLFwidHJlZUNvZGVcIjpcIiMwIzE1NzczIzI0NTU3I1wiLFwic29ydFwiOjYsXCJzaG93VHlwZVwiOlwiTkFWXCIsXCJhcHBTb3VyY2VcIjpcIm1vbGllcmVcIixcInJpcHBsZU9wZW5GbG93XCI6ZmFsc2UsXCJ0YWdzXCI6W10sXCJzdGF0ZVwiOlwiVkFMSURcIixcInNlY3VyaXR5TGV2ZWxcIjpcIkMyXCIsXCJub2RlTGV2ZWxcIjozLFwiY2hlY2tlZFwiOmZhbHNlLFwib3BlblwiOmZhbHNlLFwiaGFzQ2hpbGRcIjpmYWxzZSxcImNoaWxkTGlzdFwiOltdfSx7XCJpZFwiOjMyNjA0LFwicGFyZW50SWRcIjoxNTc3MyxcIm5hbWVcIjpcIuebmOeCueaKpeWRiuWIl+ihqFwiLFwicGF0aFwiOlwiL21vbGllcmUvd2ViL0luU3RvY2svTmV3Q2hlY2svUmVwb3J0L0xpc3RcIixcImRlc2NcIjpcIlwiLFwidHJlZUNvZGVcIjpcIiMwIzE1NzczIzMyNjA0I1wiLFwic29ydFwiOjcsXCJzaG93VHlwZVwiOlwiTkFWXCIsXCJhcHBTb3VyY2VcIjpcIm1vbGllcmVcIixcInJpcHBsZU9wZW5GbG93XCI6ZmFsc2UsXCJ0YWdzXCI6W10sXCJzdGF0ZVwiOlwiVkFMSURcIixcInNlY3VyaXR5TGV2ZWxcIjpcIkMyXCIsXCJub2RlTGV2ZWxcIjozLFwiY2hlY2tlZFwiOmZhbHNlLFwib3BlblwiOmZhbHNlLFwiaGFzQ2hpbGRcIjpmYWxzZSxcImNoaWxkTGlzdFwiOltdfV19LHtcImlkXCI6MTE0NzIsXCJwYXJlbnRJZFwiOjAsXCJuYW1lXCI6XCLlupPlrZjnrqHnkIZcIixcInBhdGhcIjpcIi9tb2xpZXJlL3dlYi9PblN0b3JhZ2VcIixcImRlc2NcIjpcImU5ODVcIixcInRyZWVDb2RlXCI6XCIjMCMxMTQ3MiNcIixcInNvcnRcIjo1LFwic2hvd1R5cGVcIjpcIk5BVlwiLFwiYXBwU291cmNlXCI6XCJtb2xpZXJlXCIsXCJyaXBwbGVPcGVuRmxvd1wiOmZhbHNlLFwidGFnc1wiOltdLFwic3RhdGVcIjpcIlZBTElEXCIsXCJzZWN1cml0eUxldmVsXCI6XCJDMlwiLFwibm9kZUxldmVsXCI6MixcImNoZWNrZWRcIjpmYWxzZSxcIm9wZW5cIjpmYWxzZSxcImhhc0NoaWxkXCI6dHJ1ZSxcImNoaWxkTGlzdFwiOlt7XCJpZFwiOjExNDczLFwicGFyZW50SWRcIjoxMTQ3MixcIm5hbWVcIjpcIuW6k+WtmOafpeivolwiLFwicGF0aFwiOlwiL21vbGllcmUvd2ViL09uU3RvcmFnZS9JbnZlbnRvcnlRdWVyeS9MaXN0XCIsXCJkZXNjXCI6XCJcIixcInRyZWVDb2RlXCI6XCIjMCMxMTQ3MiMxMTQ3MyNcIixcInNvcnRcIjowLFwic2hvd1R5cGVcIjpcIk5BVlwiLFwiYXBwU291cmNlXCI6XCJtb2xpZXJlXCIsXCJyaXBwbGVPcGVuRmxvd1wiOmZhbHNlLFwidGFnc1wiOltdLFwic3RhdGVcIjpcIlZBTElEXCIsXCJzZWN1cml0eUxldmVsXCI6XCJDMlwiLFwibm9kZUxldmVsXCI6MyxcImNoZWNrZWRcIjpmYWxzZSxcIm9wZW5cIjpmYWxzZSxcImhhc0NoaWxkXCI6ZmFsc2UsXCJjaGlsZExpc3RcIjpbXX0se1wiaWRcIjoxNzY0MyxcInBhcmVudElkXCI6MTE0NzIsXCJuYW1lXCI6XCLlupPlrZjmtYHmsLRcIixcInBhdGhcIjpcIi9tb2xpZXJlL3dlYi9PblN0b3JhZ2UvSW52ZW50b3J5Rmxvdy9MaXN0XCIsXCJkZXNjXCI6XCJcIixcInRyZWVDb2RlXCI6XCIjMCMxMTQ3MiMxNzY0MyNcIixcInNvcnRcIjoxLFwic2hvd1R5cGVcIjpcIk5BVlwiLFwiYXBwU291cmNlXCI6XCJtb2xpZXJlXCIsXCJyaXBwbGVPcGVuRmxvd1wiOmZhbHNlLFwidGFnc1wiOltdLFwic3RhdGVcIjpcIlZBTElEXCIsXCJzZWN1cml0eUxldmVsXCI6XCJDMlwiLFwibm9kZUxldmVsXCI6MyxcImNoZWNrZWRcIjpmYWxzZSxcIm9wZW5cIjpmYWxzZSxcImhhc0NoaWxkXCI6ZmFsc2UsXCJjaGlsZExpc3RcIjpbXX0se1wiaWRcIjoxNDM4OSxcInBhcmVudElkXCI6MTE0NzIsXCJuYW1lXCI6XCLlupPlrZjosIPmlbRcIixcInBhdGhcIjpcIi9tb2xpZXJlL3dlYi9PblN0b3JhZ2UvSW52ZW50b3J5QWRqdXN0L0xpc3RcIixcImRlc2NcIjpcIlwiLFwidHJlZUNvZGVcIjpcIiMwIzExNDcyIzE0Mzg5I1wiLFwic29ydFwiOjIsXCJzaG93VHlwZVwiOlwiTkFWXCIsXCJhcHBTb3VyY2VcIjpcIm1vbGllcmVcIixcInJpcHBsZU9wZW5GbG93XCI6ZmFsc2UsXCJ0YWdzXCI6W10sXCJzdGF0ZVwiOlwiVkFMSURcIixcInNlY3VyaXR5TGV2ZWxcIjpcIkMyXCIsXCJub2RlTGV2ZWxcIjozLFwiY2hlY2tlZFwiOmZhbHNlLFwib3BlblwiOmZhbHNlLFwiaGFzQ2hpbGRcIjpmYWxzZSxcImNoaWxkTGlzdFwiOltdfV19XX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnQvQXBwL01lbnUvZGF0YS5qc29uXG4vLyBtb2R1bGUgaWQgPSA2NzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wibWVudUxpc3RcIjpcImRoMm9jRkIxS1ltQW03ZVBVQ0NyTFwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnQvQXBwL01lbnUvaW5kZXguY3NzXG4vLyBtb2R1bGUgaWQgPSA2NzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wic2lkZXJcIjpcIkppOU55TEo3enVIMy1ZbjdZQ1lzcVwiLFwic2lkZXJUb3BcIjpcInpEM3dIVmZ6WE5feWNZYnR3b0lJNFwiLFwidHJpZ2dlclwiOlwiXzJnOWxHd2d4dEZtQkFXMTh6Wjd0U21cIixcImxvZ29cIjpcIl8zSHZyYzhBYkNrOG5UU1Bld1RybW9uXCIsXCJyb3RhdGlvblwiOlwiXzNfRDdxWUZzZ3lJci1OamVSOXEwSEpcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50L0FwcC9TaWRlci9pbmRleC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDY3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXZhdGFyLCBQb3BvdmVyLCBJY29uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXguY3NzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiXG4gICAgICAgICAgdGl0bGU9eydodWkubGl1J31cbiAgICAgICAgICBjb250ZW50PXs8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV4aXRDb250YWluZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5leGl0fSBvbkNsaWNrPXsoKSA9PiB7fX0+XG4gICAgICAgICAgICAgIOmAgOWHuueZu+W9lSA8SWNvbiB0eXBlPVwibG9nb3V0XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgICB0cmlnZ2VyPVwiaG92ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgaWNvbj1cInVzZXJcIlxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzczOUJGRicsIGN1cnNvcjogJ3BvaW50ZXInIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5vcmRlcl9jb21wfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnQvQXBwL0hlYWRlci9pbmRleC5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfdG9vbHRpcCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3Rvb2x0aXBcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF93YXJuaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vX3V0aWwvd2FybmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHt9OyBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgUG9wb3ZlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUG9wb3ZlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUG9wb3ZlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUG9wb3Zlcik7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihQb3BvdmVyKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblxuICAgIF90aGlzLnNhdmVUb29sdGlwID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIF90aGlzLnRvb2x0aXAgPSBub2RlO1xuICAgIH07XG5cbiAgICBfdGhpcy5yZW5kZXJQb3BvdmVyID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBnZXRQcmVmaXhDbHMgPSBfcmVmLmdldFByZWZpeENscztcblxuICAgICAgdmFyIF9hID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgY3VzdG9taXplUHJlZml4Q2xzID0gX2EucHJlZml4Q2xzLFxuICAgICAgICAgIHByb3BzID0gX19yZXN0KF9hLCBbXCJwcmVmaXhDbHNcIl0pO1xuXG4gICAgICBkZWxldGUgcHJvcHMudGl0bGU7XG4gICAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdwb3BvdmVyJywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF90b29sdGlwW1wiZGVmYXVsdFwiXSwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICByZWY6IF90aGlzLnNhdmVUb29sdGlwLFxuICAgICAgICBvdmVybGF5OiBfdGhpcy5nZXRPdmVybGF5KHByZWZpeENscylcbiAgICAgIH0pKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFBvcG92ZXIsIFt7XG4gICAga2V5OiBcImdldFBvcHVwRG9tTm9kZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQb3B1cERvbU5vZGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy50b29sdGlwLmdldFBvcHVwRG9tTm9kZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRPdmVybGF5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE92ZXJsYXkocHJlZml4Q2xzKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHRpdGxlID0gX3RoaXMkcHJvcHMudGl0bGUsXG4gICAgICAgICAgY29udGVudCA9IF90aGlzJHByb3BzLmNvbnRlbnQ7XG4gICAgICAoMCwgX3dhcm5pbmdbXCJkZWZhdWx0XCJdKSghKCdvdmVybGF5JyBpbiB0aGlzLnByb3BzKSwgJ1BvcG92ZXInLCAnYG92ZXJsYXlgIGlzIHJlbW92ZWQsIHBsZWFzZSB1c2UgYGNvbnRlbnRgIGluc3RlYWQsICcgKyAnc2VlOiBodHRwczovL3UuYW50LmRlc2lnbi9wb3BvdmVyLWNvbnRlbnQnKTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIHRpdGxlICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItdGl0bGVcIilcbiAgICAgIH0sIHRpdGxlKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pbm5lci1jb250ZW50XCIpXG4gICAgICB9LCBjb250ZW50KSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29uc3VtZXIsIG51bGwsIHRoaXMucmVuZGVyUG9wb3Zlcik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFBvcG92ZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gUG9wb3ZlcjtcblBvcG92ZXIuZGVmYXVsdFByb3BzID0ge1xuICBwbGFjZW1lbnQ6ICd0b3AnLFxuICB0cmFuc2l0aW9uTmFtZTogJ3pvb20tYmlnJyxcbiAgdHJpZ2dlcjogJ2hvdmVyJyxcbiAgbW91c2VFbnRlckRlbGF5OiAwLjEsXG4gIG1vdXNlTGVhdmVEZWxheTogMC4xLFxuICBvdmVybGF5U3R5bGU6IHt9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9wb3BvdmVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2Nzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9pY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vaWNvblwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDoge307IGlmIChkZXNjLmdldCB8fCBkZXNjLnNldCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxudmFyIF9fcmVzdCA9IHZvaWQgMCAmJiAodm9pZCAwKS5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbnZhciBBdmF0YXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEF2YXRhciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQXZhdGFyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBdmF0YXIpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoQXZhdGFyKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNjYWxlOiAxLFxuICAgICAgaXNJbWdFeGlzdDogdHJ1ZVxuICAgIH07XG5cbiAgICBfdGhpcy5zZXRTY2FsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghX3RoaXMuYXZhdGFyQ2hpbGRyZW4gfHwgIV90aGlzLmF2YXRhck5vZGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2hpbGRyZW5XaWR0aCA9IF90aGlzLmF2YXRhckNoaWxkcmVuLm9mZnNldFdpZHRoOyAvLyBvZmZzZXRXaWR0aCBhdm9pZCBhZmZlY3RpbmcgYmUgdHJhbnNmb3JtIHNjYWxlXG5cbiAgICAgIHZhciBub2RlV2lkdGggPSBfdGhpcy5hdmF0YXJOb2RlLm9mZnNldFdpZHRoOyAvLyBkZW5vbWluYXRvciBpcyAwIGlzIG5vIG1lYW5pbmdcblxuICAgICAgaWYgKGNoaWxkcmVuV2lkdGggPT09IDAgfHwgbm9kZVdpZHRoID09PSAwIHx8IF90aGlzLmxhc3RDaGlsZHJlbldpZHRoID09PSBjaGlsZHJlbldpZHRoICYmIF90aGlzLmxhc3ROb2RlV2lkdGggPT09IG5vZGVXaWR0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmxhc3RDaGlsZHJlbldpZHRoID0gY2hpbGRyZW5XaWR0aDtcbiAgICAgIF90aGlzLmxhc3ROb2RlV2lkdGggPSBub2RlV2lkdGg7IC8vIGFkZCA0cHggZ2FwIGZvciBlYWNoIHNpZGUgdG8gZ2V0IGJldHRlciBwZXJmb3JtYW5jZVxuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNjYWxlOiBub2RlV2lkdGggLSA4IDwgY2hpbGRyZW5XaWR0aCA/IChub2RlV2lkdGggLSA4KSAvIGNoaWxkcmVuV2lkdGggOiAxXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlSW1nTG9hZEVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG9uRXJyb3IgPSBfdGhpcy5wcm9wcy5vbkVycm9yO1xuICAgICAgdmFyIGVycm9yRmxhZyA9IG9uRXJyb3IgPyBvbkVycm9yKCkgOiB1bmRlZmluZWQ7XG5cbiAgICAgIGlmIChlcnJvckZsYWcgIT09IGZhbHNlKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpc0ltZ0V4aXN0OiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVyQXZhdGFyID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBfY2xhc3NOYW1lcywgX2NsYXNzTmFtZXMyO1xuXG4gICAgICB2YXIgZ2V0UHJlZml4Q2xzID0gX3JlZi5nZXRQcmVmaXhDbHM7XG5cbiAgICAgIHZhciBfYSA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGN1c3RvbWl6ZVByZWZpeENscyA9IF9hLnByZWZpeENscyxcbiAgICAgICAgICBzaGFwZSA9IF9hLnNoYXBlLFxuICAgICAgICAgIHNpemUgPSBfYS5zaXplLFxuICAgICAgICAgIHNyYyA9IF9hLnNyYyxcbiAgICAgICAgICBzcmNTZXQgPSBfYS5zcmNTZXQsXG4gICAgICAgICAgaWNvbiA9IF9hLmljb24sXG4gICAgICAgICAgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLFxuICAgICAgICAgIGFsdCA9IF9hLmFsdCxcbiAgICAgICAgICBvdGhlcnMgPSBfX3Jlc3QoX2EsIFtcInByZWZpeENsc1wiLCBcInNoYXBlXCIsIFwic2l6ZVwiLCBcInNyY1wiLCBcInNyY1NldFwiLCBcImljb25cIiwgXCJjbGFzc05hbWVcIiwgXCJhbHRcIl0pO1xuXG4gICAgICB2YXIgX3RoaXMkc3RhdGUgPSBfdGhpcy5zdGF0ZSxcbiAgICAgICAgICBpc0ltZ0V4aXN0ID0gX3RoaXMkc3RhdGUuaXNJbWdFeGlzdCxcbiAgICAgICAgICBzY2FsZSA9IF90aGlzJHN0YXRlLnNjYWxlO1xuICAgICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnYXZhdGFyJywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgICAgIHZhciBzaXplQ2xzID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1sZ1wiKSwgc2l6ZSA9PT0gJ2xhcmdlJyksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zbVwiKSwgc2l6ZSA9PT0gJ3NtYWxsJyksIF9jbGFzc05hbWVzKSk7XG4gICAgICB2YXIgY2xhc3NTdHJpbmcgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShwcmVmaXhDbHMsIGNsYXNzTmFtZSwgc2l6ZUNscywgKF9jbGFzc05hbWVzMiA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoc2hhcGUpLCBzaGFwZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaW1hZ2VcIiksIHNyYyAmJiBpc0ltZ0V4aXN0KSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pY29uXCIpLCBpY29uKSwgX2NsYXNzTmFtZXMyKSk7XG4gICAgICB2YXIgc2l6ZVN0eWxlID0gdHlwZW9mIHNpemUgPT09ICdudW1iZXInID8ge1xuICAgICAgICB3aWR0aDogc2l6ZSxcbiAgICAgICAgaGVpZ2h0OiBzaXplLFxuICAgICAgICBsaW5lSGVpZ2h0OiBcIlwiLmNvbmNhdChzaXplLCBcInB4XCIpLFxuICAgICAgICBmb250U2l6ZTogaWNvbiA/IHNpemUgLyAyIDogMThcbiAgICAgIH0gOiB7fTtcbiAgICAgIHZhciBjaGlsZHJlbiA9IF90aGlzLnByb3BzLmNoaWxkcmVuO1xuXG4gICAgICBpZiAoc3JjICYmIGlzSW1nRXhpc3QpIHtcbiAgICAgICAgY2hpbGRyZW4gPSBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtcbiAgICAgICAgICBzcmM6IHNyYyxcbiAgICAgICAgICBzcmNTZXQ6IHNyY1NldCxcbiAgICAgICAgICBvbkVycm9yOiBfdGhpcy5oYW5kbGVJbWdMb2FkRXJyb3IsXG4gICAgICAgICAgYWx0OiBhbHRcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGljb24pIHtcbiAgICAgICAgY2hpbGRyZW4gPSBSZWFjdC5jcmVhdGVFbGVtZW50KF9pY29uW1wiZGVmYXVsdFwiXSwge1xuICAgICAgICAgIHR5cGU6IGljb25cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY2hpbGRyZW5Ob2RlID0gX3RoaXMuYXZhdGFyQ2hpbGRyZW47XG5cbiAgICAgICAgaWYgKGNoaWxkcmVuTm9kZSB8fCBzY2FsZSAhPT0gMSkge1xuICAgICAgICAgIHZhciB0cmFuc2Zvcm1TdHJpbmcgPSBcInNjYWxlKFwiLmNvbmNhdChzY2FsZSwgXCIpIHRyYW5zbGF0ZVgoLTUwJSlcIik7XG4gICAgICAgICAgdmFyIGNoaWxkcmVuU3R5bGUgPSB7XG4gICAgICAgICAgICBtc1RyYW5zZm9ybTogdHJhbnNmb3JtU3RyaW5nLFxuICAgICAgICAgICAgV2Via2l0VHJhbnNmb3JtOiB0cmFuc2Zvcm1TdHJpbmcsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybVN0cmluZ1xuICAgICAgICAgIH07XG4gICAgICAgICAgdmFyIHNpemVDaGlsZHJlblN0eWxlID0gdHlwZW9mIHNpemUgPT09ICdudW1iZXInID8ge1xuICAgICAgICAgICAgbGluZUhlaWdodDogXCJcIi5jb25jYXQoc2l6ZSwgXCJweFwiKVxuICAgICAgICAgIH0gOiB7fTtcbiAgICAgICAgICBjaGlsZHJlbiA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zdHJpbmdcIiksXG4gICAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihub2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpcy5hdmF0YXJDaGlsZHJlbiA9IG5vZGU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3R5bGU6IF9leHRlbmRzKHt9LCBzaXplQ2hpbGRyZW5TdHlsZSwgY2hpbGRyZW5TdHlsZSlcbiAgICAgICAgICB9LCBjaGlsZHJlbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGRyZW4gPSBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc3RyaW5nXCIpLFxuICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYobm9kZSkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuYXZhdGFyQ2hpbGRyZW4gPSBub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIGNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgX2V4dGVuZHMoe30sIG90aGVycywge1xuICAgICAgICBzdHlsZTogX2V4dGVuZHMoe30sIHNpemVTdHlsZSwgb3RoZXJzLnN0eWxlKSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc1N0cmluZyxcbiAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYobm9kZSkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5hdmF0YXJOb2RlID0gbm9kZTtcbiAgICAgICAgfVxuICAgICAgfSksIGNoaWxkcmVuKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEF2YXRhciwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnNldFNjYWxlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICB0aGlzLnNldFNjYWxlKCk7XG5cbiAgICAgIGlmIChwcmV2UHJvcHMuc3JjICE9PSB0aGlzLnByb3BzLnNyYykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpc0ltZ0V4aXN0OiB0cnVlLFxuICAgICAgICAgIHNjYWxlOiAxXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnN1bWVyLCBudWxsLCB0aGlzLnJlbmRlckF2YXRhcik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEF2YXRhcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBBdmF0YXI7XG5BdmF0YXIuZGVmYXVsdFByb3BzID0ge1xuICBzaGFwZTogJ2NpcmNsZScsXG4gIHNpemU6ICdkZWZhdWx0J1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvYXZhdGFyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2ODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnJlcXVpcmUoXCIuLi8uLi9zdHlsZS9pbmRleC5jc3NcIik7XG5cbnJlcXVpcmUoXCIuL2luZGV4LmNzc1wiKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNzcy5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3BvcG92ZXIvc3R5bGUvY3NzLmpzXG4vLyBtb2R1bGUgaWQgPSA2ODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9wb3BvdmVyL3N0eWxlL2luZGV4LmNzc1xuLy8gbW9kdWxlIGlkID0gNjgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5yZXF1aXJlKFwiLi4vLi4vc3R5bGUvaW5kZXguY3NzXCIpO1xuXG5yZXF1aXJlKFwiLi9pbmRleC5jc3NcIik7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jc3MuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9hdmF0YXIvc3R5bGUvY3NzLmpzXG4vLyBtb2R1bGUgaWQgPSA2ODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9hdmF0YXIvc3R5bGUvaW5kZXguY3NzXG4vLyBtb2R1bGUgaWQgPSA2ODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiaGVhZGVyXCI6XCJfMUhvMS1iWUNjb1FJUk05Zkgwb2FQMlwiLFwiZXhpdENvbnRhaW5lclwiOlwiXzFHOExWRjZDNnN0bUhuZjluV2NVNGxcIixcImF2YXRhclRpdGxlXCI6XCJfMUdzekpsSEwwS3dpNy1zZDNKX1pLeVwiLFwiZXhpdFwiOlwieVFpa0lORW9idmVIUkpsTllrZ2VUXCIsXCJuYW1lXCI6XCJfM1NURU1xMmZfZmYzUXctNDF3WmUwaVwiLFwib3JkZXJfY29tcFwiOlwiXzJPY0Z0RElCZGFaOXpIQmJaaFIzZHlcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50L0FwcC9IZWFkZXIvaW5kZXguY3NzXG4vLyBtb2R1bGUgaWQgPSA2ODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiY29udGFpbmVyXCI6XCJfMzRFU3JfZTllc2dDWVhSMU9OVXplc1wifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnQvQXBwL2luZGV4LmNzc1xuLy8gbW9kdWxlIGlkID0gNjg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbnB1dCwgQnV0dG9uLCBMaXN0IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgQXBwIGZyb20gJ0JpekNvbXBvbmVudC9BcHAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEFwcD5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxMHB4JywgbWFyZ2luTGVmdDogJzEwcHgnIH19PlxuICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeW+heWKnuS6i+mhuVwiIC8+XG4gICAgICAgICAgPEJ1dHRvbj7mj5DkuqQ8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxMaXN0XG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTBweCcsIHdpZHRoOiAnMzAwcHgnIH19XG4gICAgICAgICAgYm9yZGVyZWRcbiAgICAgICAgICBkYXRhU291cmNlPXtbXX1cbiAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+ICg8TGlzdC5JdGVtPntpdGVtfTwvTGlzdC5JdGVtPil9XG4gICAgICAgIC8+XG4gICAgICA8L0FwcD5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlldy9SZWR1eERlbW8vVG9kb0xpc3QvaW5kZXguanMiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgUHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfc3BpbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NwaW5cIikpO1xuXG52YXIgX3BhZ2luYXRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9wYWdpbmF0aW9uXCIpKTtcblxudmFyIF9ncmlkID0gcmVxdWlyZShcIi4uL2dyaWRcIik7XG5cbnZhciBfSXRlbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSXRlbVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHt9OyBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgTGlzdCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTGlzdCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTGlzdChwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMaXN0KTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKExpc3QpLmNhbGwodGhpcywgcHJvcHMpKTtcbiAgICBfdGhpcy5kZWZhdWx0UGFnaW5hdGlvblByb3BzID0ge1xuICAgICAgY3VycmVudDogMSxcbiAgICAgIHRvdGFsOiAwXG4gICAgfTtcbiAgICBfdGhpcy5rZXlzID0ge307XG4gICAgX3RoaXMub25QYWdpbmF0aW9uQ2hhbmdlID0gX3RoaXMudHJpZ2dlclBhZ2luYXRpb25FdmVudCgnb25DaGFuZ2UnKTtcbiAgICBfdGhpcy5vblBhZ2luYXRpb25TaG93U2l6ZUNoYW5nZSA9IF90aGlzLnRyaWdnZXJQYWdpbmF0aW9uRXZlbnQoJ29uU2hvd1NpemVDaGFuZ2UnKTtcblxuICAgIF90aGlzLnJlbmRlckl0ZW0gPSBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHJlbmRlckl0ZW0gPSBfdGhpcyRwcm9wcy5yZW5kZXJJdGVtLFxuICAgICAgICAgIHJvd0tleSA9IF90aGlzJHByb3BzLnJvd0tleTtcbiAgICAgIGlmICghcmVuZGVySXRlbSkgcmV0dXJuIG51bGw7XG4gICAgICB2YXIga2V5O1xuXG4gICAgICBpZiAodHlwZW9mIHJvd0tleSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBrZXkgPSByb3dLZXkoaXRlbSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiByb3dLZXkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGtleSA9IGl0ZW1bcm93S2V5XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGtleSA9IGl0ZW0ua2V5O1xuICAgICAgfVxuXG4gICAgICBpZiAoIWtleSkge1xuICAgICAgICBrZXkgPSBcImxpc3QtaXRlbS1cIi5jb25jYXQoaW5kZXgpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5rZXlzW2luZGV4XSA9IGtleTtcbiAgICAgIHJldHVybiByZW5kZXJJdGVtKGl0ZW0sIGluZGV4KTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVyRW1wdHkgPSBmdW5jdGlvbiAocHJlZml4Q2xzLCByZW5kZXJFbXB0eSkge1xuICAgICAgdmFyIGxvY2FsZSA9IF90aGlzLnByb3BzLmxvY2FsZTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWVtcHR5LXRleHRcIilcbiAgICAgIH0sIGxvY2FsZSAmJiBsb2NhbGUuZW1wdHlUZXh0IHx8IHJlbmRlckVtcHR5KCdMaXN0JykpO1xuICAgIH07XG5cbiAgICBfdGhpcy5yZW5kZXJMaXN0ID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgdmFyIGdldFByZWZpeENscyA9IF9yZWYuZ2V0UHJlZml4Q2xzLFxuICAgICAgICAgIHJlbmRlckVtcHR5ID0gX3JlZi5yZW5kZXJFbXB0eTtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZSA9IF90aGlzLnN0YXRlLFxuICAgICAgICAgIHBhZ2luYXRpb25DdXJyZW50ID0gX3RoaXMkc3RhdGUucGFnaW5hdGlvbkN1cnJlbnQsXG4gICAgICAgICAgcGFnaW5hdGlvblNpemUgPSBfdGhpcyRzdGF0ZS5wYWdpbmF0aW9uU2l6ZTtcblxuICAgICAgdmFyIF9hID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgY3VzdG9taXplUHJlZml4Q2xzID0gX2EucHJlZml4Q2xzLFxuICAgICAgICAgIGJvcmRlcmVkID0gX2EuYm9yZGVyZWQsXG4gICAgICAgICAgc3BsaXQgPSBfYS5zcGxpdCxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbixcbiAgICAgICAgICBpdGVtTGF5b3V0ID0gX2EuaXRlbUxheW91dCxcbiAgICAgICAgICBsb2FkTW9yZSA9IF9hLmxvYWRNb3JlLFxuICAgICAgICAgIHBhZ2luYXRpb24gPSBfYS5wYWdpbmF0aW9uLFxuICAgICAgICAgIGdyaWQgPSBfYS5ncmlkLFxuICAgICAgICAgIF9hJGRhdGFTb3VyY2UgPSBfYS5kYXRhU291cmNlLFxuICAgICAgICAgIGRhdGFTb3VyY2UgPSBfYSRkYXRhU291cmNlID09PSB2b2lkIDAgPyBbXSA6IF9hJGRhdGFTb3VyY2UsXG4gICAgICAgICAgc2l6ZSA9IF9hLnNpemUsXG4gICAgICAgICAgcm93S2V5ID0gX2Eucm93S2V5LFxuICAgICAgICAgIHJlbmRlckl0ZW0gPSBfYS5yZW5kZXJJdGVtLFxuICAgICAgICAgIGhlYWRlciA9IF9hLmhlYWRlcixcbiAgICAgICAgICBmb290ZXIgPSBfYS5mb290ZXIsXG4gICAgICAgICAgbG9hZGluZyA9IF9hLmxvYWRpbmcsXG4gICAgICAgICAgbG9jYWxlID0gX2EubG9jYWxlLFxuICAgICAgICAgIHJlc3QgPSBfX3Jlc3QoX2EsIFtcInByZWZpeENsc1wiLCBcImJvcmRlcmVkXCIsIFwic3BsaXRcIiwgXCJjbGFzc05hbWVcIiwgXCJjaGlsZHJlblwiLCBcIml0ZW1MYXlvdXRcIiwgXCJsb2FkTW9yZVwiLCBcInBhZ2luYXRpb25cIiwgXCJncmlkXCIsIFwiZGF0YVNvdXJjZVwiLCBcInNpemVcIiwgXCJyb3dLZXlcIiwgXCJyZW5kZXJJdGVtXCIsIFwiaGVhZGVyXCIsIFwiZm9vdGVyXCIsIFwibG9hZGluZ1wiLCBcImxvY2FsZVwiXSk7XG5cbiAgICAgIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2xpc3QnLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgICAgdmFyIGxvYWRpbmdQcm9wID0gbG9hZGluZztcblxuICAgICAgaWYgKHR5cGVvZiBsb2FkaW5nUHJvcCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIGxvYWRpbmdQcm9wID0ge1xuICAgICAgICAgIHNwaW5uaW5nOiBsb2FkaW5nUHJvcFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB2YXIgaXNMb2FkaW5nID0gbG9hZGluZ1Byb3AgJiYgbG9hZGluZ1Byb3Auc3Bpbm5pbmc7IC8vIGxhcmdlID0+IGxnXG4gICAgICAvLyBzbWFsbCA9PiBzbVxuXG4gICAgICB2YXIgc2l6ZUNscyA9ICcnO1xuXG4gICAgICBzd2l0Y2ggKHNpemUpIHtcbiAgICAgICAgY2FzZSAnbGFyZ2UnOlxuICAgICAgICAgIHNpemVDbHMgPSAnbGcnO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3NtYWxsJzpcbiAgICAgICAgICBzaXplQ2xzID0gJ3NtJztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2xhc3NTdHJpbmcgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShwcmVmaXhDbHMsIGNsYXNzTmFtZSwgKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi12ZXJ0aWNhbFwiKSwgaXRlbUxheW91dCA9PT0gJ3ZlcnRpY2FsJyksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHNpemVDbHMpLCBzaXplQ2xzKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNwbGl0XCIpLCBzcGxpdCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ib3JkZXJlZFwiKSwgYm9yZGVyZWQpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbG9hZGluZ1wiKSwgaXNMb2FkaW5nKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWdyaWRcIiksIGdyaWQpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc29tZXRoaW5nLWFmdGVyLWxhc3QtaXRlbVwiKSwgX3RoaXMuaXNTb21ldGhpbmdBZnRlckxhc3RJdGVtKCkpLCBfY2xhc3NOYW1lcykpO1xuXG4gICAgICB2YXIgcGFnaW5hdGlvblByb3BzID0gX2V4dGVuZHMoe30sIF90aGlzLmRlZmF1bHRQYWdpbmF0aW9uUHJvcHMsIHtcbiAgICAgICAgdG90YWw6IGRhdGFTb3VyY2UubGVuZ3RoLFxuICAgICAgICBjdXJyZW50OiBwYWdpbmF0aW9uQ3VycmVudCxcbiAgICAgICAgcGFnZVNpemU6IHBhZ2luYXRpb25TaXplXG4gICAgICB9LCBwYWdpbmF0aW9uIHx8IHt9KTtcblxuICAgICAgdmFyIGxhcmdlc3RQYWdlID0gTWF0aC5jZWlsKHBhZ2luYXRpb25Qcm9wcy50b3RhbCAvIHBhZ2luYXRpb25Qcm9wcy5wYWdlU2l6ZSk7XG5cbiAgICAgIGlmIChwYWdpbmF0aW9uUHJvcHMuY3VycmVudCA+IGxhcmdlc3RQYWdlKSB7XG4gICAgICAgIHBhZ2luYXRpb25Qcm9wcy5jdXJyZW50ID0gbGFyZ2VzdFBhZ2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBwYWdpbmF0aW9uQ29udGVudCA9IHBhZ2luYXRpb24gPyBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXBhZ2luYXRpb25cIilcbiAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX3BhZ2luYXRpb25bXCJkZWZhdWx0XCJdLCBfZXh0ZW5kcyh7fSwgcGFnaW5hdGlvblByb3BzLCB7XG4gICAgICAgIG9uQ2hhbmdlOiBfdGhpcy5vblBhZ2luYXRpb25DaGFuZ2UsXG4gICAgICAgIG9uU2hvd1NpemVDaGFuZ2U6IF90aGlzLm9uUGFnaW5hdGlvblNob3dTaXplQ2hhbmdlXG4gICAgICB9KSkpIDogbnVsbDtcblxuICAgICAgdmFyIHNwbGl0RGF0YVNvdXJjZSA9IF90b0NvbnN1bWFibGVBcnJheShkYXRhU291cmNlKTtcblxuICAgICAgaWYgKHBhZ2luYXRpb24pIHtcbiAgICAgICAgaWYgKGRhdGFTb3VyY2UubGVuZ3RoID4gKHBhZ2luYXRpb25Qcm9wcy5jdXJyZW50IC0gMSkgKiBwYWdpbmF0aW9uUHJvcHMucGFnZVNpemUpIHtcbiAgICAgICAgICBzcGxpdERhdGFTb3VyY2UgPSBfdG9Db25zdW1hYmxlQXJyYXkoZGF0YVNvdXJjZSkuc3BsaWNlKChwYWdpbmF0aW9uUHJvcHMuY3VycmVudCAtIDEpICogcGFnaW5hdGlvblByb3BzLnBhZ2VTaXplLCBwYWdpbmF0aW9uUHJvcHMucGFnZVNpemUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBjaGlsZHJlbkNvbnRlbnQ7XG4gICAgICBjaGlsZHJlbkNvbnRlbnQgPSBpc0xvYWRpbmcgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgbWluSGVpZ2h0OiA1M1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHNwbGl0RGF0YVNvdXJjZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IHNwbGl0RGF0YVNvdXJjZS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLnJlbmRlckl0ZW0oaXRlbSwgaW5kZXgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGNoaWxkcmVuTGlzdCA9IFtdO1xuICAgICAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGl0ZW1zLCBmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgICAgICAgY2hpbGRyZW5MaXN0LnB1c2goUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgICAgICBrZXk6IF90aGlzLmtleXNbaW5kZXhdXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgY2hpbGRyZW5Db250ZW50ID0gZ3JpZCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2dyaWQuUm93LCB7XG4gICAgICAgICAgZ3V0dGVyOiBncmlkLmd1dHRlclxuICAgICAgICB9LCBjaGlsZHJlbkxpc3QpIDogUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaXRlbXNcIilcbiAgICAgICAgfSwgY2hpbGRyZW5MaXN0KTtcbiAgICAgIH0gZWxzZSBpZiAoIWNoaWxkcmVuICYmICFpc0xvYWRpbmcpIHtcbiAgICAgICAgY2hpbGRyZW5Db250ZW50ID0gX3RoaXMucmVuZGVyRW1wdHkocHJlZml4Q2xzLCByZW5kZXJFbXB0eSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBwYWdpbmF0aW9uUG9zaXRpb24gPSBwYWdpbmF0aW9uUHJvcHMucG9zaXRpb24gfHwgJ2JvdHRvbSc7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NTdHJpbmdcbiAgICAgIH0sIHJlc3QpLCAocGFnaW5hdGlvblBvc2l0aW9uID09PSAndG9wJyB8fCBwYWdpbmF0aW9uUG9zaXRpb24gPT09ICdib3RoJykgJiYgcGFnaW5hdGlvbkNvbnRlbnQsIGhlYWRlciAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWhlYWRlclwiKVxuICAgICAgfSwgaGVhZGVyKSwgUmVhY3QuY3JlYXRlRWxlbWVudChfc3BpbltcImRlZmF1bHRcIl0sIGxvYWRpbmdQcm9wLCBjaGlsZHJlbkNvbnRlbnQsIGNoaWxkcmVuKSwgZm9vdGVyICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZm9vdGVyXCIpXG4gICAgICB9LCBmb290ZXIpLCBsb2FkTW9yZSB8fCAocGFnaW5hdGlvblBvc2l0aW9uID09PSAnYm90dG9tJyB8fCBwYWdpbmF0aW9uUG9zaXRpb24gPT09ICdib3RoJykgJiYgcGFnaW5hdGlvbkNvbnRlbnQpO1xuICAgIH07XG5cbiAgICB2YXIgcGFnaW5hdGlvbiA9IHByb3BzLnBhZ2luYXRpb247XG4gICAgdmFyIHBhZ2luYXRpb25PYmogPSBwYWdpbmF0aW9uICYmIF90eXBlb2YocGFnaW5hdGlvbikgPT09ICdvYmplY3QnID8gcGFnaW5hdGlvbiA6IHt9O1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgcGFnaW5hdGlvbkN1cnJlbnQ6IHBhZ2luYXRpb25PYmouZGVmYXVsdEN1cnJlbnQgfHwgMSxcbiAgICAgIHBhZ2luYXRpb25TaXplOiBwYWdpbmF0aW9uT2JqLmRlZmF1bHRQYWdlU2l6ZSB8fCAxMFxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKExpc3QsIFt7XG4gICAga2V5OiBcImdldENoaWxkQ29udGV4dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBncmlkOiB0aGlzLnByb3BzLmdyaWQsXG4gICAgICAgIGl0ZW1MYXlvdXQ6IHRoaXMucHJvcHMuaXRlbUxheW91dFxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidHJpZ2dlclBhZ2luYXRpb25FdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0cmlnZ2VyUGFnaW5hdGlvbkV2ZW50KGV2ZW50TmFtZSkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAocGFnZSwgcGFnZVNpemUpIHtcbiAgICAgICAgdmFyIHBhZ2luYXRpb24gPSBfdGhpczIucHJvcHMucGFnaW5hdGlvbjtcblxuICAgICAgICBfdGhpczIuc2V0U3RhdGUoe1xuICAgICAgICAgIHBhZ2luYXRpb25DdXJyZW50OiBwYWdlLFxuICAgICAgICAgIHBhZ2luYXRpb25TaXplOiBwYWdlU2l6ZVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocGFnaW5hdGlvbiAmJiBwYWdpbmF0aW9uW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgICBwYWdpbmF0aW9uW2V2ZW50TmFtZV0ocGFnZSwgcGFnZVNpemUpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc1NvbWV0aGluZ0FmdGVyTGFzdEl0ZW1cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNTb21ldGhpbmdBZnRlckxhc3RJdGVtKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgbG9hZE1vcmUgPSBfdGhpcyRwcm9wczIubG9hZE1vcmUsXG4gICAgICAgICAgcGFnaW5hdGlvbiA9IF90aGlzJHByb3BzMi5wYWdpbmF0aW9uLFxuICAgICAgICAgIGZvb3RlciA9IF90aGlzJHByb3BzMi5mb290ZXI7XG4gICAgICByZXR1cm4gISEobG9hZE1vcmUgfHwgcGFnaW5hdGlvbiB8fCBmb290ZXIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnN1bWVyLCBudWxsLCB0aGlzLnJlbmRlckxpc3QpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMaXN0O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IExpc3Q7XG5MaXN0Lkl0ZW0gPSBfSXRlbVtcImRlZmF1bHRcIl07XG5MaXN0LmNoaWxkQ29udGV4dFR5cGVzID0ge1xuICBncmlkOiBQcm9wVHlwZXMuYW55LFxuICBpdGVtTGF5b3V0OiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuTGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gIGRhdGFTb3VyY2U6IFtdLFxuICBib3JkZXJlZDogZmFsc2UsXG4gIHNwbGl0OiB0cnVlLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgcGFnaW5hdGlvbjogZmFsc2Vcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2xpc3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgUHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9vbWl0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwib21pdC5qc1wiKSk7XG5cbnZhciBfZGVib3VuY2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJsb2Rhc2gvZGVib3VuY2VcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF90eXBlID0gcmVxdWlyZShcIi4uL191dGlsL3R5cGVcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHt9OyBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgU3BpblNpemVzID0gKDAsIF90eXBlLnR1cGxlKSgnc21hbGwnLCAnZGVmYXVsdCcsICdsYXJnZScpOyAvLyBSZW5kZXIgaW5kaWNhdG9yXG5cbnZhciBkZWZhdWx0SW5kaWNhdG9yID0gbnVsbDtcblxuZnVuY3Rpb24gcmVuZGVySW5kaWNhdG9yKHByZWZpeENscywgcHJvcHMpIHtcbiAgdmFyIGluZGljYXRvciA9IHByb3BzLmluZGljYXRvcjtcbiAgdmFyIGRvdENsYXNzTmFtZSA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZG90XCIpO1xuXG4gIGlmIChSZWFjdC5pc1ZhbGlkRWxlbWVudChpbmRpY2F0b3IpKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChpbmRpY2F0b3IsIHtcbiAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoaW5kaWNhdG9yLnByb3BzLmNsYXNzTmFtZSwgZG90Q2xhc3NOYW1lKVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KGRlZmF1bHRJbmRpY2F0b3IpKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChkZWZhdWx0SW5kaWNhdG9yLCB7XG4gICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKGRlZmF1bHRJbmRpY2F0b3IucHJvcHMuY2xhc3NOYW1lLCBkb3RDbGFzc05hbWUpXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoZG90Q2xhc3NOYW1lLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWRvdC1zcGluXCIpKVxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaVwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWRvdC1pdGVtXCIpXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaVwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWRvdC1pdGVtXCIpXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaVwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWRvdC1pdGVtXCIpXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaVwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWRvdC1pdGVtXCIpXG4gIH0pKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkRGVsYXkoc3Bpbm5pbmcsIGRlbGF5KSB7XG4gIHJldHVybiAhIXNwaW5uaW5nICYmICEhZGVsYXkgJiYgIWlzTmFOKE51bWJlcihkZWxheSkpO1xufVxuXG52YXIgU3BpbiA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoU3BpbiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gU3Bpbihwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTcGluKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKFNwaW4pLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLmRlYm91bmNpZnlVcGRhdGVTcGlubmluZyA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgdmFyIF9yZWYgPSBwcm9wcyB8fCBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBkZWxheSA9IF9yZWYuZGVsYXk7XG5cbiAgICAgIGlmIChkZWxheSkge1xuICAgICAgICBfdGhpcy5jYW5jZWxFeGlzdGluZ1NwaW4oKTtcblxuICAgICAgICBfdGhpcy51cGRhdGVTcGlubmluZyA9ICgwLCBfZGVib3VuY2VbXCJkZWZhdWx0XCJdKShfdGhpcy5vcmlnaW5hbFVwZGF0ZVNwaW5uaW5nLCBkZWxheSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnVwZGF0ZVNwaW5uaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHNwaW5uaW5nID0gX3RoaXMucHJvcHMuc3Bpbm5pbmc7XG4gICAgICB2YXIgY3VycmVudFNwaW5uaW5nID0gX3RoaXMuc3RhdGUuc3Bpbm5pbmc7XG5cbiAgICAgIGlmIChjdXJyZW50U3Bpbm5pbmcgIT09IHNwaW5uaW5nKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzcGlubmluZzogc3Bpbm5pbmdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnJlbmRlclNwaW4gPSBmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgdmFyIGdldFByZWZpeENscyA9IF9yZWYyLmdldFByZWZpeENscztcblxuICAgICAgdmFyIF9hID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgY3VzdG9taXplUHJlZml4Q2xzID0gX2EucHJlZml4Q2xzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSxcbiAgICAgICAgICBzaXplID0gX2Euc2l6ZSxcbiAgICAgICAgICB0aXAgPSBfYS50aXAsXG4gICAgICAgICAgd3JhcHBlckNsYXNzTmFtZSA9IF9hLndyYXBwZXJDbGFzc05hbWUsXG4gICAgICAgICAgc3R5bGUgPSBfYS5zdHlsZSxcbiAgICAgICAgICByZXN0UHJvcHMgPSBfX3Jlc3QoX2EsIFtcInByZWZpeENsc1wiLCBcImNsYXNzTmFtZVwiLCBcInNpemVcIiwgXCJ0aXBcIiwgXCJ3cmFwcGVyQ2xhc3NOYW1lXCIsIFwic3R5bGVcIl0pO1xuXG4gICAgICB2YXIgc3Bpbm5pbmcgPSBfdGhpcy5zdGF0ZS5zcGlubmluZztcbiAgICAgIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ3NwaW4nLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgICAgdmFyIHNwaW5DbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShwcmVmaXhDbHMsIChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc21cIiksIHNpemUgPT09ICdzbWFsbCcpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbGdcIiksIHNpemUgPT09ICdsYXJnZScpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc3Bpbm5pbmdcIiksIHNwaW5uaW5nKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNob3ctdGV4dFwiKSwgISF0aXApLCBfY2xhc3NOYW1lcyksIGNsYXNzTmFtZSk7IC8vIGZpeCBodHRwczovL2ZiLm1lL3JlYWN0LXVua25vd24tcHJvcFxuXG4gICAgICB2YXIgZGl2UHJvcHMgPSAoMCwgX29taXRbXCJkZWZhdWx0XCJdKShyZXN0UHJvcHMsIFsnc3Bpbm5pbmcnLCAnZGVsYXknLCAnaW5kaWNhdG9yJ10pO1xuICAgICAgdmFyIHNwaW5FbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgZGl2UHJvcHMsIHtcbiAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICBjbGFzc05hbWU6IHNwaW5DbGFzc05hbWVcbiAgICAgIH0pLCByZW5kZXJJbmRpY2F0b3IocHJlZml4Q2xzLCBfdGhpcy5wcm9wcyksIHRpcCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItdGV4dFwiKVxuICAgICAgfSwgdGlwKSA6IG51bGwpO1xuXG4gICAgICBpZiAoX3RoaXMuaXNOZXN0ZWRQYXR0ZXJuKCkpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lckNsYXNzTmFtZSA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY29udGFpbmVyXCIpLCBfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYmx1clwiKSwgc3Bpbm5pbmcpKTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe30sIGRpdlByb3BzLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW5lc3RlZC1sb2FkaW5nXCIpLCB3cmFwcGVyQ2xhc3NOYW1lKVxuICAgICAgICB9KSwgc3Bpbm5pbmcgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAga2V5OiBcImxvYWRpbmdcIlxuICAgICAgICB9LCBzcGluRWxlbWVudCksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogY29udGFpbmVyQ2xhc3NOYW1lLFxuICAgICAgICAgIGtleTogXCJjb250YWluZXJcIlxuICAgICAgICB9LCBfdGhpcy5wcm9wcy5jaGlsZHJlbikpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3BpbkVsZW1lbnQ7XG4gICAgfTtcblxuICAgIHZhciBzcGlubmluZyA9IHByb3BzLnNwaW5uaW5nLFxuICAgICAgICBkZWxheSA9IHByb3BzLmRlbGF5O1xuICAgIHZhciBzaG91bGRCZURlbGF5ZWQgPSBzaG91bGREZWxheShzcGlubmluZywgZGVsYXkpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgc3Bpbm5pbmc6IHNwaW5uaW5nICYmICFzaG91bGRCZURlbGF5ZWRcbiAgICB9O1xuICAgIF90aGlzLm9yaWdpbmFsVXBkYXRlU3Bpbm5pbmcgPSBfdGhpcy51cGRhdGVTcGlubmluZztcblxuICAgIF90aGlzLmRlYm91bmNpZnlVcGRhdGVTcGlubmluZyhwcm9wcyk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU3BpbiwgW3tcbiAgICBrZXk6IFwiaXNOZXN0ZWRQYXR0ZXJuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzTmVzdGVkUGF0dGVybigpIHtcbiAgICAgIHJldHVybiAhISh0aGlzLnByb3BzICYmIHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuY2FuY2VsRXhpc3RpbmdTcGluKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNhbmNlbEV4aXN0aW5nU3BpblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYW5jZWxFeGlzdGluZ1NwaW4oKSB7XG4gICAgICB2YXIgdXBkYXRlU3Bpbm5pbmcgPSB0aGlzLnVwZGF0ZVNwaW5uaW5nO1xuXG4gICAgICBpZiAodXBkYXRlU3Bpbm5pbmcgJiYgdXBkYXRlU3Bpbm5pbmcuY2FuY2VsKSB7XG4gICAgICAgIHVwZGF0ZVNwaW5uaW5nLmNhbmNlbCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMudXBkYXRlU3Bpbm5pbmcoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIHRoaXMuZGVib3VuY2lmeVVwZGF0ZVNwaW5uaW5nKCk7XG4gICAgICB0aGlzLnVwZGF0ZVNwaW5uaW5nKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29uc3VtZXIsIG51bGwsIHRoaXMucmVuZGVyU3Bpbik7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwic2V0RGVmYXVsdEluZGljYXRvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXREZWZhdWx0SW5kaWNhdG9yKGluZGljYXRvcikge1xuICAgICAgZGVmYXVsdEluZGljYXRvciA9IGluZGljYXRvcjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3Bpbjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuU3Bpbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHNwaW5uaW5nOiB0cnVlLFxuICBzaXplOiAnZGVmYXVsdCcsXG4gIHdyYXBwZXJDbGFzc05hbWU6ICcnXG59O1xuU3Bpbi5wcm9wVHlwZXMgPSB7XG4gIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzcGlubmluZzogUHJvcFR5cGVzLmJvb2wsXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihTcGluU2l6ZXMpLFxuICB3cmFwcGVyQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpbmRpY2F0b3I6IFByb3BUeXBlcy5lbGVtZW50XG59O1xudmFyIF9kZWZhdWx0ID0gU3BpbjtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3NwaW4vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX1BhZ2luYXRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1BhZ2luYXRpb25cIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIF9kZWZhdWx0ID0gX1BhZ2luYXRpb25bXCJkZWZhdWx0XCJdO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvcGFnaW5hdGlvbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmNQYWdpbmF0aW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtcGFnaW5hdGlvblwiKSk7XG5cbnZhciBfZW5fVVMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy1wYWdpbmF0aW9uL2xpYi9sb2NhbGUvZW5fVVNcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9NaW5pU2VsZWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9NaW5pU2VsZWN0XCIpKTtcblxudmFyIF9pY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vaWNvblwiKSk7XG5cbnZhciBfc2VsZWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2VsZWN0XCIpKTtcblxudmFyIF9Mb2NhbGVSZWNlaXZlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2xvY2FsZS1wcm92aWRlci9Mb2NhbGVSZWNlaXZlclwiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTsgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG52YXIgX19yZXN0ID0gdm9pZCAwICYmICh2b2lkIDApLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxudmFyIFBhZ2luYXRpb24gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFBhZ2luYXRpb24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFBhZ2luYXRpb24oKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhZ2luYXRpb24pO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoUGFnaW5hdGlvbikuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cbiAgICBfdGhpcy5nZXRJY29uc1Byb3BzID0gZnVuY3Rpb24gKHByZWZpeENscykge1xuICAgICAgdmFyIHByZXZJY29uID0gUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaXRlbS1saW5rXCIpXG4gICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KF9pY29uW1wiZGVmYXVsdFwiXSwge1xuICAgICAgICB0eXBlOiBcImxlZnRcIlxuICAgICAgfSkpO1xuICAgICAgdmFyIG5leHRJY29uID0gUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaXRlbS1saW5rXCIpXG4gICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KF9pY29uW1wiZGVmYXVsdFwiXSwge1xuICAgICAgICB0eXBlOiBcInJpZ2h0XCJcbiAgICAgIH0pKTtcbiAgICAgIHZhciBqdW1wUHJldkljb24gPSBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtLWxpbmtcIilcbiAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaXRlbS1jb250YWluZXJcIilcbiAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2ljb25bXCJkZWZhdWx0XCJdLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtLWxpbmstaWNvblwiKSxcbiAgICAgICAgdHlwZTogXCJkb3VibGUtbGVmdFwiXG4gICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaXRlbS1lbGxpcHNpc1wiKVxuICAgICAgfSwgXCJcXHUyMDIyXFx1MjAyMlxcdTIwMjJcIikpKTtcbiAgICAgIHZhciBqdW1wTmV4dEljb24gPSBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtLWxpbmtcIilcbiAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaXRlbS1jb250YWluZXJcIilcbiAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2ljb25bXCJkZWZhdWx0XCJdLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtLWxpbmstaWNvblwiKSxcbiAgICAgICAgdHlwZTogXCJkb3VibGUtcmlnaHRcIlxuICAgICAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0tZWxsaXBzaXNcIilcbiAgICAgIH0sIFwiXFx1MjAyMlxcdTIwMjJcXHUyMDIyXCIpKSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcmV2SWNvbjogcHJldkljb24sXG4gICAgICAgIG5leHRJY29uOiBuZXh0SWNvbixcbiAgICAgICAganVtcFByZXZJY29uOiBqdW1wUHJldkljb24sXG4gICAgICAgIGp1bXBOZXh0SWNvbjoganVtcE5leHRJY29uXG4gICAgICB9O1xuICAgIH07XG5cbiAgICBfdGhpcy5yZW5kZXJQYWdpbmF0aW9uID0gZnVuY3Rpb24gKGNvbnRleHRMb2NhbGUpIHtcbiAgICAgIHZhciBfYSA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGN1c3RvbWl6ZVByZWZpeENscyA9IF9hLnByZWZpeENscyxcbiAgICAgICAgICBjdXN0b21pemVTZWxlY3RQcmVmaXhDbHMgPSBfYS5zZWxlY3RQcmVmaXhDbHMsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLFxuICAgICAgICAgIHNpemUgPSBfYS5zaXplLFxuICAgICAgICAgIGN1c3RvbUxvY2FsZSA9IF9hLmxvY2FsZSxcbiAgICAgICAgICByZXN0UHJvcHMgPSBfX3Jlc3QoX2EsIFtcInByZWZpeENsc1wiLCBcInNlbGVjdFByZWZpeENsc1wiLCBcImNsYXNzTmFtZVwiLCBcInNpemVcIiwgXCJsb2NhbGVcIl0pO1xuXG4gICAgICB2YXIgbG9jYWxlID0gX2V4dGVuZHMoe30sIGNvbnRleHRMb2NhbGUsIGN1c3RvbUxvY2FsZSk7XG5cbiAgICAgIHZhciBpc1NtYWxsID0gc2l6ZSA9PT0gJ3NtYWxsJztcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9jb25maWdQcm92aWRlci5Db25maWdDb25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgdmFyIGdldFByZWZpeENscyA9IF9yZWYuZ2V0UHJlZml4Q2xzO1xuICAgICAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdwYWdpbmF0aW9uJywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgICAgICAgdmFyIHNlbGVjdFByZWZpeENscyA9IGdldFByZWZpeENscygnc2VsZWN0JywgY3VzdG9taXplU2VsZWN0UHJlZml4Q2xzKTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX3JjUGFnaW5hdGlvbltcImRlZmF1bHRcIl0sIF9leHRlbmRzKHt9LCByZXN0UHJvcHMsIHtcbiAgICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgICBzZWxlY3RQcmVmaXhDbHM6IHNlbGVjdFByZWZpeENsc1xuICAgICAgICB9LCBfdGhpcy5nZXRJY29uc1Byb3BzKHByZWZpeENscyksIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKGNsYXNzTmFtZSwge1xuICAgICAgICAgICAgbWluaTogaXNTbWFsbFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHNlbGVjdENvbXBvbmVudENsYXNzOiBpc1NtYWxsID8gX01pbmlTZWxlY3RbXCJkZWZhdWx0XCJdIDogX3NlbGVjdFtcImRlZmF1bHRcIl0sXG4gICAgICAgICAgbG9jYWxlOiBsb2NhbGVcbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQYWdpbmF0aW9uLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX0xvY2FsZVJlY2VpdmVyW1wiZGVmYXVsdFwiXSwge1xuICAgICAgICBjb21wb25lbnROYW1lOiBcIlBhZ2luYXRpb25cIixcbiAgICAgICAgZGVmYXVsdExvY2FsZTogX2VuX1VTW1wiZGVmYXVsdFwiXVxuICAgICAgfSwgdGhpcy5yZW5kZXJQYWdpbmF0aW9uKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUGFnaW5hdGlvbjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBQYWdpbmF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UGFnaW5hdGlvbi5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3BhZ2luYXRpb24vUGFnaW5hdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNjk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfc2VsZWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2VsZWN0XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDoge307IGlmIChkZXNjLmdldCB8fCBkZXNjLnNldCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxudmFyIE1pbmlTZWxlY3QgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKE1pbmlTZWxlY3QsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE1pbmlTZWxlY3QoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1pbmlTZWxlY3QpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihNaW5pU2VsZWN0KS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNaW5pU2VsZWN0LCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX3NlbGVjdFtcImRlZmF1bHRcIl0sIF9leHRlbmRzKHtcbiAgICAgICAgc2l6ZTogXCJzbWFsbFwiXG4gICAgICB9LCB0aGlzLnByb3BzKSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1pbmlTZWxlY3Q7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gTWluaVNlbGVjdDtcbk1pbmlTZWxlY3QuT3B0aW9uID0gX3NlbGVjdFtcImRlZmF1bHRcIl0uT3B0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TWluaVNlbGVjdC5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3BhZ2luYXRpb24vTWluaVNlbGVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNjk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIFByb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9Sb3dDb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Sb3dDb250ZXh0XCIpKTtcblxudmFyIF90eXBlID0gcmVxdWlyZShcIi4uL191dGlsL3R5cGVcIik7XG5cbnZhciBfcmVzcG9uc2l2ZU9ic2VydmUgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vX3V0aWwvcmVzcG9uc2l2ZU9ic2VydmVcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTsgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG52YXIgX19yZXN0ID0gdm9pZCAwICYmICh2b2lkIDApLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxudmFyIFJvd0FsaWducyA9ICgwLCBfdHlwZS50dXBsZSkoJ3RvcCcsICdtaWRkbGUnLCAnYm90dG9tJyk7XG52YXIgUm93SnVzdGlmeSA9ICgwLCBfdHlwZS50dXBsZSkoJ3N0YXJ0JywgJ2VuZCcsICdjZW50ZXInLCAnc3BhY2UtYXJvdW5kJywgJ3NwYWNlLWJldHdlZW4nKTtcblxudmFyIFJvdyA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUm93LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBSb3coKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJvdyk7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihSb3cpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgc2NyZWVuczoge31cbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVyUm93ID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgdmFyIGdldFByZWZpeENscyA9IF9yZWYuZ2V0UHJlZml4Q2xzO1xuXG4gICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBjdXN0b21pemVQcmVmaXhDbHMgPSBfYS5wcmVmaXhDbHMsXG4gICAgICAgICAgdHlwZSA9IF9hLnR5cGUsXG4gICAgICAgICAganVzdGlmeSA9IF9hLmp1c3RpZnksXG4gICAgICAgICAgYWxpZ24gPSBfYS5hbGlnbixcbiAgICAgICAgICBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsXG4gICAgICAgICAgc3R5bGUgPSBfYS5zdHlsZSxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLFxuICAgICAgICAgIG90aGVycyA9IF9fcmVzdChfYSwgW1wicHJlZml4Q2xzXCIsIFwidHlwZVwiLCBcImp1c3RpZnlcIiwgXCJhbGlnblwiLCBcImNsYXNzTmFtZVwiLCBcInN0eWxlXCIsIFwiY2hpbGRyZW5cIl0pO1xuXG4gICAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdyb3cnLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuXG4gICAgICB2YXIgZ3V0dGVyID0gX3RoaXMuZ2V0R3V0dGVyKCk7XG5cbiAgICAgIHZhciBjbGFzc2VzID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzLCAhdHlwZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHR5cGUpLCB0eXBlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQodHlwZSwgXCItXCIpLmNvbmNhdChqdXN0aWZ5KSwgdHlwZSAmJiBqdXN0aWZ5KSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQodHlwZSwgXCItXCIpLmNvbmNhdChhbGlnbiksIHR5cGUgJiYgYWxpZ24pLCBfY2xhc3NOYW1lcyksIGNsYXNzTmFtZSk7XG4gICAgICB2YXIgcm93U3R5bGUgPSBndXR0ZXIgPiAwID8gX2V4dGVuZHMoe1xuICAgICAgICBtYXJnaW5MZWZ0OiBndXR0ZXIgLyAtMixcbiAgICAgICAgbWFyZ2luUmlnaHQ6IGd1dHRlciAvIC0yXG4gICAgICB9LCBzdHlsZSkgOiBzdHlsZTtcblxuICAgICAgdmFyIG90aGVyUHJvcHMgPSBfZXh0ZW5kcyh7fSwgb3RoZXJzKTtcblxuICAgICAgZGVsZXRlIG90aGVyUHJvcHMuZ3V0dGVyO1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX1Jvd0NvbnRleHRbXCJkZWZhdWx0XCJdLlByb3ZpZGVyLCB7XG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgZ3V0dGVyOiBndXR0ZXJcbiAgICAgICAgfVxuICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgb3RoZXJQcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgICAgIHN0eWxlOiByb3dTdHlsZVxuICAgICAgfSksIGNoaWxkcmVuKSk7XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSb3csIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHRoaXMudG9rZW4gPSBfcmVzcG9uc2l2ZU9ic2VydmVbXCJkZWZhdWx0XCJdLnN1YnNjcmliZShmdW5jdGlvbiAoc2NyZWVucykge1xuICAgICAgICBpZiAoX3R5cGVvZihfdGhpczIucHJvcHMuZ3V0dGVyKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBfdGhpczIuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2NyZWVuczogc2NyZWVuc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBfcmVzcG9uc2l2ZU9ic2VydmVbXCJkZWZhdWx0XCJdLnVuc3Vic2NyaWJlKHRoaXMudG9rZW4pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRHdXR0ZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0R3V0dGVyKCkge1xuICAgICAgdmFyIGd1dHRlciA9IHRoaXMucHJvcHMuZ3V0dGVyO1xuXG4gICAgICBpZiAoX3R5cGVvZihndXR0ZXIpID09PSAnb2JqZWN0Jykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF9yZXNwb25zaXZlT2JzZXJ2ZS5yZXNwb25zaXZlQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgYnJlYWtwb2ludCA9IF9yZXNwb25zaXZlT2JzZXJ2ZS5yZXNwb25zaXZlQXJyYXlbaV07XG5cbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5zY3JlZW5zW2JyZWFrcG9pbnRdICYmIGd1dHRlclticmVha3BvaW50XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZ3V0dGVyW2JyZWFrcG9pbnRdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZ3V0dGVyO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnN1bWVyLCBudWxsLCB0aGlzLnJlbmRlclJvdyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJvdztcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBSb3c7XG5Sb3cuZGVmYXVsdFByb3BzID0ge1xuICBndXR0ZXI6IDBcbn07XG5Sb3cucHJvcFR5cGVzID0ge1xuICB0eXBlOiBQcm9wVHlwZXMub25lT2YoWydmbGV4J10pLFxuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFJvd0FsaWducyksXG4gIGp1c3RpZnk6IFByb3BUeXBlcy5vbmVPZihSb3dKdXN0aWZ5KSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGd1dHRlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLm51bWJlcl0pLFxuICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmdcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3cuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9ncmlkL3Jvdy5qc1xuLy8gbW9kdWxlIGlkID0gNzA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBleHBvcnRzLnJlc3BvbnNpdmVNYXAgPSBleHBvcnRzLnJlc3BvbnNpdmVBcnJheSA9IHZvaWQgMDtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuLy8gbWF0Y2hNZWRpYSBwb2x5ZmlsbCBmb3Jcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9XaWNreU5pbGxpYW1zL2VucXVpcmUuanMvaXNzdWVzLzgyXG52YXIgZW5xdWlyZTtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHZhciBtYXRjaE1lZGlhUG9seWZpbGwgPSBmdW5jdGlvbiBtYXRjaE1lZGlhUG9seWZpbGwobWVkaWFRdWVyeSkge1xuICAgIHJldHVybiB7XG4gICAgICBtZWRpYTogbWVkaWFRdWVyeSxcbiAgICAgIG1hdGNoZXM6IGZhbHNlLFxuICAgICAgYWRkTGlzdGVuZXI6IGZ1bmN0aW9uIGFkZExpc3RlbmVyKCkge30sXG4gICAgICByZW1vdmVMaXN0ZW5lcjogZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIoKSB7fVxuICAgIH07XG4gIH07XG5cbiAgd2luZG93Lm1hdGNoTWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYSB8fCBtYXRjaE1lZGlhUG9seWZpbGw7XG4gIGVucXVpcmUgPSByZXF1aXJlKCdlbnF1aXJlLmpzJyk7XG59XG5cbnZhciByZXNwb25zaXZlQXJyYXkgPSBbJ3h4bCcsICd4bCcsICdsZycsICdtZCcsICdzbScsICd4cyddO1xuZXhwb3J0cy5yZXNwb25zaXZlQXJyYXkgPSByZXNwb25zaXZlQXJyYXk7XG52YXIgcmVzcG9uc2l2ZU1hcCA9IHtcbiAgeHM6ICcobWF4LXdpZHRoOiA1NzVweCknLFxuICBzbTogJyhtaW4td2lkdGg6IDU3NnB4KScsXG4gIG1kOiAnKG1pbi13aWR0aDogNzY4cHgpJyxcbiAgbGc6ICcobWluLXdpZHRoOiA5OTJweCknLFxuICB4bDogJyhtaW4td2lkdGg6IDEyMDBweCknLFxuICB4eGw6ICcobWluLXdpZHRoOiAxNjAwcHgpJ1xufTtcbmV4cG9ydHMucmVzcG9uc2l2ZU1hcCA9IHJlc3BvbnNpdmVNYXA7XG52YXIgc3Vic2NyaWJlcnMgPSBbXTtcbnZhciBzdWJVaWQgPSAtMTtcbnZhciBzY3JlZW5zID0ge307XG52YXIgcmVzcG9uc2l2ZU9ic2VydmUgPSB7XG4gIGRpc3BhdGNoOiBmdW5jdGlvbiBkaXNwYXRjaChwb2ludE1hcCkge1xuICAgIHNjcmVlbnMgPSBwb2ludE1hcDtcblxuICAgIGlmIChzdWJzY3JpYmVycy5sZW5ndGggPCAxKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgaXRlbS5mdW5jKHNjcmVlbnMpO1xuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBzdWJzY3JpYmU6IGZ1bmN0aW9uIHN1YnNjcmliZShmdW5jKSB7XG4gICAgaWYgKHN1YnNjcmliZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5yZWdpc3RlcigpO1xuICAgIH1cblxuICAgIHZhciB0b2tlbiA9ICgrK3N1YlVpZCkudG9TdHJpbmcoKTtcbiAgICBzdWJzY3JpYmVycy5wdXNoKHtcbiAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgIGZ1bmM6IGZ1bmNcbiAgICB9KTtcbiAgICBmdW5jKHNjcmVlbnMpO1xuICAgIHJldHVybiB0b2tlbjtcbiAgfSxcbiAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKHRva2VuKSB7XG4gICAgc3Vic2NyaWJlcnMgPSBzdWJzY3JpYmVycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLnRva2VuICE9PSB0b2tlbjtcbiAgICB9KTtcblxuICAgIGlmIChzdWJzY3JpYmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMudW5yZWdpc3RlcigpO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlcjogZnVuY3Rpb24gdW5yZWdpc3RlcigpIHtcbiAgICBPYmplY3Qua2V5cyhyZXNwb25zaXZlTWFwKS5tYXAoZnVuY3Rpb24gKHNjcmVlbikge1xuICAgICAgcmV0dXJuIGVucXVpcmUudW5yZWdpc3RlcihyZXNwb25zaXZlTWFwW3NjcmVlbl0pO1xuICAgIH0pO1xuICB9LFxuICByZWdpc3RlcjogZnVuY3Rpb24gcmVnaXN0ZXIoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIE9iamVjdC5rZXlzKHJlc3BvbnNpdmVNYXApLm1hcChmdW5jdGlvbiAoc2NyZWVuKSB7XG4gICAgICByZXR1cm4gZW5xdWlyZS5yZWdpc3RlcihyZXNwb25zaXZlTWFwW3NjcmVlbl0sIHtcbiAgICAgICAgbWF0Y2g6IGZ1bmN0aW9uIG1hdGNoKCkge1xuICAgICAgICAgIHZhciBwb2ludE1hcCA9IF9leHRlbmRzKHt9LCBzY3JlZW5zLCBfZGVmaW5lUHJvcGVydHkoe30sIHNjcmVlbiwgdHJ1ZSkpO1xuXG4gICAgICAgICAgX3RoaXMuZGlzcGF0Y2gocG9pbnRNYXApO1xuICAgICAgICB9LFxuICAgICAgICB1bm1hdGNoOiBmdW5jdGlvbiB1bm1hdGNoKCkge1xuICAgICAgICAgIHZhciBwb2ludE1hcCA9IF9leHRlbmRzKHt9LCBzY3JlZW5zLCBfZGVmaW5lUHJvcGVydHkoe30sIHNjcmVlbiwgZmFsc2UpKTtcblxuICAgICAgICAgIF90aGlzLmRpc3BhdGNoKHBvaW50TWFwKTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gS2VlcCBhIGVtcHR5IGRlc3RvcnkgdG8gYXZvaWQgdHJpZ2dlcmluZyB1bm1hdGNoIHdoZW4gdW5yZWdpc3RlclxuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge31cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59O1xudmFyIF9kZWZhdWx0ID0gcmVzcG9uc2l2ZU9ic2VydmU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVzcG9uc2l2ZU9ic2VydmUuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9fdXRpbC9yZXNwb25zaXZlT2JzZXJ2ZS5qc1xuLy8gbW9kdWxlIGlkID0gNzA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBQcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX1Jvd0NvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1Jvd0NvbnRleHRcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDoge307IGlmIChkZXNjLmdldCB8fCBkZXNjLnNldCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxudmFyIF9fcmVzdCA9IHZvaWQgMCAmJiAodm9pZCAwKS5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbnZhciBvYmplY3RPck51bWJlciA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5udW1iZXJdKTtcblxudmFyIENvbCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ29sLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDb2woKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbCk7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihDb2wpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXG4gICAgX3RoaXMucmVuZGVyQ29sID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgdmFyIGdldFByZWZpeENscyA9IF9yZWYuZ2V0UHJlZml4Q2xzO1xuICAgICAgdmFyIHByb3BzID0gX3RoaXMucHJvcHM7XG5cbiAgICAgIHZhciBjdXN0b21pemVQcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgc3BhbiA9IHByb3BzLnNwYW4sXG4gICAgICAgICAgb3JkZXIgPSBwcm9wcy5vcmRlcixcbiAgICAgICAgICBvZmZzZXQgPSBwcm9wcy5vZmZzZXQsXG4gICAgICAgICAgcHVzaCA9IHByb3BzLnB1c2gsXG4gICAgICAgICAgcHVsbCA9IHByb3BzLnB1bGwsXG4gICAgICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgb3RoZXJzID0gX19yZXN0KHByb3BzLCBbXCJwcmVmaXhDbHNcIiwgXCJzcGFuXCIsIFwib3JkZXJcIiwgXCJvZmZzZXRcIiwgXCJwdXNoXCIsIFwicHVsbFwiLCBcImNsYXNzTmFtZVwiLCBcImNoaWxkcmVuXCJdKTtcblxuICAgICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnY29sJywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgICAgIHZhciBzaXplQ2xhc3NPYmogPSB7fTtcbiAgICAgIFsneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnLCAneHhsJ10uZm9yRWFjaChmdW5jdGlvbiAoc2l6ZSkge1xuICAgICAgICB2YXIgX2V4dGVuZHMyO1xuXG4gICAgICAgIHZhciBzaXplUHJvcHMgPSB7fTtcblxuICAgICAgICBpZiAodHlwZW9mIHByb3BzW3NpemVdID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHNpemVQcm9wcy5zcGFuID0gcHJvcHNbc2l6ZV07XG4gICAgICAgIH0gZWxzZSBpZiAoX3R5cGVvZihwcm9wc1tzaXplXSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgc2l6ZVByb3BzID0gcHJvcHNbc2l6ZV0gfHwge307XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgb3RoZXJzW3NpemVdO1xuICAgICAgICBzaXplQ2xhc3NPYmogPSBfZXh0ZW5kcyh7fSwgc2l6ZUNsYXNzT2JqLCAoX2V4dGVuZHMyID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfZXh0ZW5kczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChzaXplLCBcIi1cIikuY29uY2F0KHNpemVQcm9wcy5zcGFuKSwgc2l6ZVByb3BzLnNwYW4gIT09IHVuZGVmaW5lZCksIF9kZWZpbmVQcm9wZXJ0eShfZXh0ZW5kczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChzaXplLCBcIi1vcmRlci1cIikuY29uY2F0KHNpemVQcm9wcy5vcmRlciksIHNpemVQcm9wcy5vcmRlciB8fCBzaXplUHJvcHMub3JkZXIgPT09IDApLCBfZGVmaW5lUHJvcGVydHkoX2V4dGVuZHMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoc2l6ZSwgXCItb2Zmc2V0LVwiKS5jb25jYXQoc2l6ZVByb3BzLm9mZnNldCksIHNpemVQcm9wcy5vZmZzZXQgfHwgc2l6ZVByb3BzLm9mZnNldCA9PT0gMCksIF9kZWZpbmVQcm9wZXJ0eShfZXh0ZW5kczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChzaXplLCBcIi1wdXNoLVwiKS5jb25jYXQoc2l6ZVByb3BzLnB1c2gpLCBzaXplUHJvcHMucHVzaCB8fCBzaXplUHJvcHMucHVzaCA9PT0gMCksIF9kZWZpbmVQcm9wZXJ0eShfZXh0ZW5kczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChzaXplLCBcIi1wdWxsLVwiKS5jb25jYXQoc2l6ZVByb3BzLnB1bGwpLCBzaXplUHJvcHMucHVsbCB8fCBzaXplUHJvcHMucHVsbCA9PT0gMCksIF9leHRlbmRzMikpO1xuICAgICAgfSk7XG4gICAgICB2YXIgY2xhc3NlcyA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKHByZWZpeENscywgKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHNwYW4pLCBzcGFuICE9PSB1bmRlZmluZWQpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItb3JkZXItXCIpLmNvbmNhdChvcmRlciksIG9yZGVyKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW9mZnNldC1cIikuY29uY2F0KG9mZnNldCksIG9mZnNldCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1wdXNoLVwiKS5jb25jYXQocHVzaCksIHB1c2gpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcHVsbC1cIikuY29uY2F0KHB1bGwpLCBwdWxsKSwgX2NsYXNzTmFtZXMpLCBjbGFzc05hbWUsIHNpemVDbGFzc09iaik7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfUm93Q29udGV4dFtcImRlZmF1bHRcIl0uQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICB2YXIgZ3V0dGVyID0gX3JlZjIuZ3V0dGVyO1xuICAgICAgICB2YXIgc3R5bGUgPSBvdGhlcnMuc3R5bGU7XG5cbiAgICAgICAgaWYgKGd1dHRlciA+IDApIHtcbiAgICAgICAgICBzdHlsZSA9IF9leHRlbmRzKHtcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBndXR0ZXIgLyAyLFxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBndXR0ZXIgLyAyXG4gICAgICAgICAgfSwgc3R5bGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe30sIG90aGVycywge1xuICAgICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgICAgICAgfSksIGNoaWxkcmVuKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ29sLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnN1bWVyLCBudWxsLCB0aGlzLnJlbmRlckNvbCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENvbDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBDb2w7XG5Db2wucHJvcFR5cGVzID0ge1xuICBzcGFuOiBQcm9wVHlwZXMubnVtYmVyLFxuICBvcmRlcjogUHJvcFR5cGVzLm51bWJlcixcbiAgb2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICBwdXNoOiBQcm9wVHlwZXMubnVtYmVyLFxuICBwdWxsOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgeHM6IG9iamVjdE9yTnVtYmVyLFxuICBzbTogb2JqZWN0T3JOdW1iZXIsXG4gIG1kOiBvYmplY3RPck51bWJlcixcbiAgbGc6IG9iamVjdE9yTnVtYmVyLFxuICB4bDogb2JqZWN0T3JOdW1iZXIsXG4gIHh4bDogb2JqZWN0T3JOdW1iZXJcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb2wuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9ncmlkL2NvbC5qc1xuLy8gbW9kdWxlIGlkID0gNzA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBleHBvcnRzLk1ldGEgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBQcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX2dyaWQgPSByZXF1aXJlKFwiLi4vZ3JpZFwiKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfcmVhY3ROb2RlID0gcmVxdWlyZShcIi4uL191dGlsL3JlYWN0Tm9kZVwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDoge307IGlmIChkZXNjLmdldCB8fCBkZXNjLnNldCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxudmFyIF9fcmVzdCA9IHZvaWQgMCAmJiAodm9pZCAwKS5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbnZhciBNZXRhID0gZnVuY3Rpb24gTWV0YShwcm9wcykge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGdldFByZWZpeENscyA9IF9yZWYuZ2V0UHJlZml4Q2xzO1xuXG4gICAgdmFyIGN1c3RvbWl6ZVByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBhdmF0YXIgPSBwcm9wcy5hdmF0YXIsXG4gICAgICAgIHRpdGxlID0gcHJvcHMudGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgIG90aGVycyA9IF9fcmVzdChwcm9wcywgW1wicHJlZml4Q2xzXCIsIFwiY2xhc3NOYW1lXCIsIFwiYXZhdGFyXCIsIFwidGl0bGVcIiwgXCJkZXNjcmlwdGlvblwiXSk7XG5cbiAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdsaXN0JywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgICB2YXIgY2xhc3NTdHJpbmcgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0tbWV0YVwiKSwgY2xhc3NOYW1lKTtcbiAgICB2YXIgY29udGVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0tbWV0YS1jb250ZW50XCIpXG4gICAgfSwgdGl0bGUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcImg0XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtLW1ldGEtdGl0bGVcIilcbiAgICB9LCB0aXRsZSksIGRlc2NyaXB0aW9uICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0tbWV0YS1kZXNjcmlwdGlvblwiKVxuICAgIH0sIGRlc2NyaXB0aW9uKSk7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe30sIG90aGVycywge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc1N0cmluZ1xuICAgIH0pLCBhdmF0YXIgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaXRlbS1tZXRhLWF2YXRhclwiKVxuICAgIH0sIGF2YXRhciksICh0aXRsZSB8fCBkZXNjcmlwdGlvbikgJiYgY29udGVudCk7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5NZXRhID0gTWV0YTtcblxuZnVuY3Rpb24gZ2V0R3JpZChncmlkLCB0KSB7XG4gIHJldHVybiBncmlkW3RdICYmIE1hdGguZmxvb3IoMjQgLyBncmlkW3RdKTtcbn1cblxudmFyIEl0ZW0gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEl0ZW0sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEl0ZW0oKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEl0ZW0pO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoSXRlbSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cbiAgICBfdGhpcy5yZW5kZXJJdGVtID0gZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICB2YXIgZ2V0UHJlZml4Q2xzID0gX3JlZjIuZ2V0UHJlZml4Q2xzO1xuICAgICAgdmFyIF90aGlzJGNvbnRleHQgPSBfdGhpcy5jb250ZXh0LFxuICAgICAgICAgIGdyaWQgPSBfdGhpcyRjb250ZXh0LmdyaWQsXG4gICAgICAgICAgaXRlbUxheW91dCA9IF90aGlzJGNvbnRleHQuaXRlbUxheW91dDtcblxuICAgICAgdmFyIF9hID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgY3VzdG9taXplUHJlZml4Q2xzID0gX2EucHJlZml4Q2xzLFxuICAgICAgICAgIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sXG4gICAgICAgICAgYWN0aW9ucyA9IF9hLmFjdGlvbnMsXG4gICAgICAgICAgZXh0cmEgPSBfYS5leHRyYSxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsXG4gICAgICAgICAgb3RoZXJzID0gX19yZXN0KF9hLCBbXCJwcmVmaXhDbHNcIiwgXCJjaGlsZHJlblwiLCBcImFjdGlvbnNcIiwgXCJleHRyYVwiLCBcImNsYXNzTmFtZVwiXSk7XG5cbiAgICAgIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2xpc3QnLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgICAgdmFyIGFjdGlvbnNDb250ZW50ID0gYWN0aW9ucyAmJiBhY3Rpb25zLmxlbmd0aCA+IDAgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0tYWN0aW9uXCIpLFxuICAgICAgICBrZXk6IFwiYWN0aW9uc1wiXG4gICAgICB9LCBhY3Rpb25zLm1hcChmdW5jdGlvbiAoYWN0aW9uLCBpKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge1xuICAgICAgICAgIGtleTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtLWFjdGlvbi1cIikuY29uY2F0KGkpXG4gICAgICAgIH0sIGFjdGlvbiwgaSAhPT0gYWN0aW9ucy5sZW5ndGggLSAxICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJlbVwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0tYWN0aW9uLXNwbGl0XCIpXG4gICAgICAgIH0pKTtcbiAgICAgIH0pKTtcbiAgICAgIHZhciBUYWcgPSBncmlkID8gJ2RpdicgOiAnbGknO1xuICAgICAgdmFyIGl0ZW1DaGlsZHJlbiA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgb3RoZXJzLCB7XG4gICAgICAgIC8vIGBsaWAgZWxlbWVudCBgb25Db3B5YCBwcm9wIGFyZ3MgaXMgbm90IHNhbWUgYXMgYGRpdmBcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW1cIiksIGNsYXNzTmFtZSwgX2RlZmluZVByb3BlcnR5KHt9LCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0tbm8tZmxleFwiKSwgIV90aGlzLmlzRmxleE1vZGUoKSkpXG4gICAgICB9KSwgaXRlbUxheW91dCA9PT0gJ3ZlcnRpY2FsJyAmJiBleHRyYSA/IFtSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0tbWFpblwiKSxcbiAgICAgICAga2V5OiBcImNvbnRlbnRcIlxuICAgICAgfSwgY2hpbGRyZW4sIGFjdGlvbnNDb250ZW50KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtLWV4dHJhXCIpLFxuICAgICAgICBrZXk6IFwiZXh0cmFcIlxuICAgICAgfSwgZXh0cmEpXSA6IFtjaGlsZHJlbiwgYWN0aW9uc0NvbnRlbnQsICgwLCBfcmVhY3ROb2RlLmNsb25lRWxlbWVudCkoZXh0cmEsIHtcbiAgICAgICAga2V5OiAnZXh0cmEnXG4gICAgICB9KV0pO1xuICAgICAgcmV0dXJuIGdyaWQgPyBSZWFjdC5jcmVhdGVFbGVtZW50KF9ncmlkLkNvbCwge1xuICAgICAgICBzcGFuOiBnZXRHcmlkKGdyaWQsICdjb2x1bW4nKSxcbiAgICAgICAgeHM6IGdldEdyaWQoZ3JpZCwgJ3hzJyksXG4gICAgICAgIHNtOiBnZXRHcmlkKGdyaWQsICdzbScpLFxuICAgICAgICBtZDogZ2V0R3JpZChncmlkLCAnbWQnKSxcbiAgICAgICAgbGc6IGdldEdyaWQoZ3JpZCwgJ2xnJyksXG4gICAgICAgIHhsOiBnZXRHcmlkKGdyaWQsICd4bCcpLFxuICAgICAgICB4eGw6IGdldEdyaWQoZ3JpZCwgJ3h4bCcpXG4gICAgICB9LCBpdGVtQ2hpbGRyZW4pIDogaXRlbUNoaWxkcmVuO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSXRlbSwgW3tcbiAgICBrZXk6IFwiaXNJdGVtQ29udGFpbnNUZXh0Tm9kZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0l0ZW1Db250YWluc1RleHROb2RlKCkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICAgIHZhciByZXN1bHQ7XG4gICAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc0ZsZXhNb2RlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzRmxleE1vZGUoKSB7XG4gICAgICB2YXIgZXh0cmEgPSB0aGlzLnByb3BzLmV4dHJhO1xuICAgICAgdmFyIGl0ZW1MYXlvdXQgPSB0aGlzLmNvbnRleHQuaXRlbUxheW91dDtcblxuICAgICAgaWYgKGl0ZW1MYXlvdXQgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgcmV0dXJuICEhZXh0cmE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAhdGhpcy5pc0l0ZW1Db250YWluc1RleHROb2RlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29uc3VtZXIsIG51bGwsIHRoaXMucmVuZGVySXRlbSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEl0ZW07XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gSXRlbTtcbkl0ZW0uTWV0YSA9IE1ldGE7XG5JdGVtLmNvbnRleHRUeXBlcyA9IHtcbiAgZ3JpZDogUHJvcFR5cGVzLmFueSxcbiAgaXRlbUxheW91dDogUHJvcFR5cGVzLnN0cmluZ1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUl0ZW0uanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9saXN0L0l0ZW0uanNcbi8vIG1vZHVsZSBpZCA9IDcxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2xvbmVFbGVtZW50ID0gY2xvbmVFbGVtZW50O1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHt9OyBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gY2xvbmVFbGVtZW50KGVsZW1lbnQpIHtcbiAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChlbGVtZW50KSkgcmV0dXJuIGVsZW1lbnQ7XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3RBcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICByZXN0QXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50LmFwcGx5KFJlYWN0LCBbZWxlbWVudF0uY29uY2F0KHJlc3RBcmdzKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWFjdE5vZGUuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9fdXRpbC9yZWFjdE5vZGUuanNcbi8vIG1vZHVsZSBpZCA9IDcxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgUHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9yZWFjdExpZmVjeWNsZXNDb21wYXQgPSByZXF1aXJlKFwicmVhY3QtbGlmZWN5Y2xlcy1jb21wYXRcIik7XG5cbnZhciBfb21pdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIm9taXQuanNcIikpO1xuXG52YXIgX2ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9pY29uXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfd2F2ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL3dhdmVcIikpO1xuXG52YXIgX3R5cGUgPSByZXF1aXJlKFwiLi4vX3V0aWwvdHlwZVwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDoge307IGlmIChkZXNjLmdldCB8fCBkZXNjLnNldCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxudmFyIF9fcmVzdCA9IHZvaWQgMCAmJiAodm9pZCAwKS5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbnZhciByeFR3b0NOQ2hhciA9IC9eW1xcdTRlMDAtXFx1OWZhNV17Mn0kLztcbnZhciBpc1R3b0NOQ2hhciA9IHJ4VHdvQ05DaGFyLnRlc3QuYmluZChyeFR3b0NOQ2hhcik7XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKHN0cikge1xuICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XG59XG5cbmZ1bmN0aW9uIHNwYWNlQ2hpbGRyZW4oY2hpbGRyZW4sIG5lZWRJbnNlcnRlZCkge1xuICB2YXIgaXNQcmV2Q2hpbGRQdXJlID0gZmFsc2U7XG4gIHZhciBjaGlsZExpc3QgPSBbXTtcbiAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgdmFyIHR5cGUgPSBfdHlwZW9mKGNoaWxkKTtcblxuICAgIHZhciBpc0N1cnJlbnRDaGlsZFB1cmUgPSB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlID09PSAnbnVtYmVyJztcblxuICAgIGlmIChpc1ByZXZDaGlsZFB1cmUgJiYgaXNDdXJyZW50Q2hpbGRQdXJlKSB7XG4gICAgICB2YXIgbGFzdEluZGV4ID0gY2hpbGRMaXN0Lmxlbmd0aCAtIDE7XG4gICAgICB2YXIgbGFzdENoaWxkID0gY2hpbGRMaXN0W2xhc3RJbmRleF07XG4gICAgICBjaGlsZExpc3RbbGFzdEluZGV4XSA9IFwiXCIuY29uY2F0KGxhc3RDaGlsZCkuY29uY2F0KGNoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGRMaXN0LnB1c2goY2hpbGQpO1xuICAgIH1cblxuICAgIGlzUHJldkNoaWxkUHVyZSA9IGlzQ3VycmVudENoaWxkUHVyZTtcbiAgfSk7IC8vIFBhc3MgdG8gUmVhY3QuQ2hpbGRyZW4ubWFwIHRvIGF1dG8gZmlsbCBrZXlcblxuICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkTGlzdCwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGluc2VydFNwYWNlKGNoaWxkLCBuZWVkSW5zZXJ0ZWQpO1xuICB9KTtcbn0gLy8gSW5zZXJ0IG9uZSBzcGFjZSBiZXR3ZWVuIHR3byBjaGluZXNlIGNoYXJhY3RlcnMgYXV0b21hdGljYWxseS5cblxuXG5mdW5jdGlvbiBpbnNlcnRTcGFjZShjaGlsZCwgbmVlZEluc2VydGVkKSB7XG4gIC8vIENoZWNrIHRoZSBjaGlsZCBpZiBpcyB1bmRlZmluZWQgb3IgbnVsbC5cbiAgaWYgKGNoaWxkID09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgU1BBQ0UgPSBuZWVkSW5zZXJ0ZWQgPyAnICcgOiAnJzsgLy8gc3RyaWN0TnVsbENoZWNrcyBvb3BzLlxuXG4gIGlmICh0eXBlb2YgY2hpbGQgIT09ICdzdHJpbmcnICYmIHR5cGVvZiBjaGlsZCAhPT0gJ251bWJlcicgJiYgaXNTdHJpbmcoY2hpbGQudHlwZSkgJiYgaXNUd29DTkNoYXIoY2hpbGQucHJvcHMuY2hpbGRyZW4pKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge30sIGNoaWxkLnByb3BzLmNoaWxkcmVuLnNwbGl0KCcnKS5qb2luKFNQQUNFKSk7XG4gIH1cblxuICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJykge1xuICAgIGlmIChpc1R3b0NOQ2hhcihjaGlsZCkpIHtcbiAgICAgIGNoaWxkID0gY2hpbGQuc3BsaXQoJycpLmpvaW4oU1BBQ0UpO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBjaGlsZCk7XG4gIH1cblxuICByZXR1cm4gY2hpbGQ7XG59XG5cbnZhciBCdXR0b25UeXBlcyA9ICgwLCBfdHlwZS50dXBsZSkoJ2RlZmF1bHQnLCAncHJpbWFyeScsICdnaG9zdCcsICdkYXNoZWQnLCAnZGFuZ2VyJywgJ2xpbmsnKTtcbnZhciBCdXR0b25TaGFwZXMgPSAoMCwgX3R5cGUudHVwbGUpKCdjaXJjbGUnLCAnY2lyY2xlLW91dGxpbmUnLCAncm91bmQnKTtcbnZhciBCdXR0b25TaXplcyA9ICgwLCBfdHlwZS50dXBsZSkoJ2xhcmdlJywgJ2RlZmF1bHQnLCAnc21hbGwnKTtcbnZhciBCdXR0b25IVE1MVHlwZXMgPSAoMCwgX3R5cGUudHVwbGUpKCdzdWJtaXQnLCAnYnV0dG9uJywgJ3Jlc2V0Jyk7XG5cbnZhciBCdXR0b24gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEJ1dHRvbiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQnV0dG9uKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJ1dHRvbik7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihCdXR0b24pLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLnNhdmVCdXR0b25SZWYgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgX3RoaXMuYnV0dG9uTm9kZSA9IG5vZGU7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBsb2FkaW5nID0gX3RoaXMuc3RhdGUubG9hZGluZztcbiAgICAgIHZhciBvbkNsaWNrID0gX3RoaXMucHJvcHMub25DbGljaztcblxuICAgICAgaWYgKCEhbG9hZGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICAgIG9uQ2xpY2soZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnJlbmRlckJ1dHRvbiA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgIHZhciBnZXRQcmVmaXhDbHMgPSBfcmVmLmdldFByZWZpeENscyxcbiAgICAgICAgICBhdXRvSW5zZXJ0U3BhY2VJbkJ1dHRvbiA9IF9yZWYuYXV0b0luc2VydFNwYWNlSW5CdXR0b247XG5cbiAgICAgIHZhciBfYSA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGN1c3RvbWl6ZVByZWZpeENscyA9IF9hLnByZWZpeENscyxcbiAgICAgICAgICB0eXBlID0gX2EudHlwZSxcbiAgICAgICAgICBzaGFwZSA9IF9hLnNoYXBlLFxuICAgICAgICAgIHNpemUgPSBfYS5zaXplLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLFxuICAgICAgICAgIGljb24gPSBfYS5pY29uLFxuICAgICAgICAgIGdob3N0ID0gX2EuZ2hvc3QsXG4gICAgICAgICAgX2xvYWRpbmdQcm9wID0gX2EubG9hZGluZyxcbiAgICAgICAgICBibG9jayA9IF9hLmJsb2NrLFxuICAgICAgICAgIHJlc3QgPSBfX3Jlc3QoX2EsIFtcInByZWZpeENsc1wiLCBcInR5cGVcIiwgXCJzaGFwZVwiLCBcInNpemVcIiwgXCJjbGFzc05hbWVcIiwgXCJjaGlsZHJlblwiLCBcImljb25cIiwgXCJnaG9zdFwiLCBcImxvYWRpbmdcIiwgXCJibG9ja1wiXSk7XG5cbiAgICAgIHZhciBfdGhpcyRzdGF0ZSA9IF90aGlzLnN0YXRlLFxuICAgICAgICAgIGxvYWRpbmcgPSBfdGhpcyRzdGF0ZS5sb2FkaW5nLFxuICAgICAgICAgIGhhc1R3b0NOQ2hhciA9IF90aGlzJHN0YXRlLmhhc1R3b0NOQ2hhcjtcbiAgICAgIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2J0bicsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gICAgICB2YXIgYXV0b0luc2VydFNwYWNlID0gYXV0b0luc2VydFNwYWNlSW5CdXR0b24gIT09IGZhbHNlOyAvLyBsYXJnZSA9PiBsZ1xuICAgICAgLy8gc21hbGwgPT4gc21cblxuICAgICAgdmFyIHNpemVDbHMgPSAnJztcblxuICAgICAgc3dpdGNoIChzaXplKSB7XG4gICAgICAgIGNhc2UgJ2xhcmdlJzpcbiAgICAgICAgICBzaXplQ2xzID0gJ2xnJztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdzbWFsbCc6XG4gICAgICAgICAgc2l6ZUNscyA9ICdzbSc7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgdmFyIGNsYXNzZXMgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShwcmVmaXhDbHMsIGNsYXNzTmFtZSwgKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHR5cGUpLCB0eXBlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoc2hhcGUpLCBzaGFwZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHNpemVDbHMpLCBzaXplQ2xzKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWljb24tb25seVwiKSwgIWNoaWxkcmVuICYmIGNoaWxkcmVuICE9PSAwICYmIGljb24pLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbG9hZGluZ1wiKSwgbG9hZGluZyksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1iYWNrZ3JvdW5kLWdob3N0XCIpLCBnaG9zdCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi10d28tY2hpbmVzZS1jaGFyc1wiKSwgaGFzVHdvQ05DaGFyICYmIGF1dG9JbnNlcnRTcGFjZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ibG9ja1wiKSwgYmxvY2spLCBfY2xhc3NOYW1lcykpO1xuICAgICAgdmFyIGljb25UeXBlID0gbG9hZGluZyA/ICdsb2FkaW5nJyA6IGljb247XG4gICAgICB2YXIgaWNvbk5vZGUgPSBpY29uVHlwZSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2ljb25bXCJkZWZhdWx0XCJdLCB7XG4gICAgICAgIHR5cGU6IGljb25UeXBlXG4gICAgICB9KSA6IG51bGw7XG4gICAgICB2YXIga2lkcyA9IGNoaWxkcmVuIHx8IGNoaWxkcmVuID09PSAwID8gc3BhY2VDaGlsZHJlbihjaGlsZHJlbiwgX3RoaXMuaXNOZWVkSW5zZXJ0ZWQoKSAmJiBhdXRvSW5zZXJ0U3BhY2UpIDogbnVsbDtcbiAgICAgIHZhciBsaW5rQnV0dG9uUmVzdFByb3BzID0gKDAsIF9vbWl0W1wiZGVmYXVsdFwiXSkocmVzdCwgWydodG1sVHlwZSddKTtcblxuICAgICAgaWYgKGxpbmtCdXR0b25SZXN0UHJvcHMuaHJlZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBfZXh0ZW5kcyh7fSwgbGlua0J1dHRvblJlc3RQcm9wcywge1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgICAgICBvbkNsaWNrOiBfdGhpcy5oYW5kbGVDbGljayxcbiAgICAgICAgICByZWY6IF90aGlzLnNhdmVCdXR0b25SZWZcbiAgICAgICAgfSksIGljb25Ob2RlLCBraWRzKTtcbiAgICAgIH0gLy8gUmVhY3QgZG9lcyBub3QgcmVjb2duaXplIHRoZSBgaHRtbFR5cGVgIHByb3Agb24gYSBET00gZWxlbWVudC4gSGVyZSB3ZSBwaWNrIGl0IG91dCBvZiBgcmVzdGAuXG5cblxuICAgICAgdmFyIF9iID0gcmVzdCxcbiAgICAgICAgICBodG1sVHlwZSA9IF9iLmh0bWxUeXBlLFxuICAgICAgICAgIG90aGVyUHJvcHMgPSBfX3Jlc3QoX2IsIFtcImh0bWxUeXBlXCJdKTtcblxuICAgICAgdmFyIGJ1dHRvbk5vZGUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIF9leHRlbmRzKHt9LCBvdGhlclByb3BzLCB7XG4gICAgICAgIHR5cGU6IGh0bWxUeXBlLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgICAgIG9uQ2xpY2s6IF90aGlzLmhhbmRsZUNsaWNrLFxuICAgICAgICByZWY6IF90aGlzLnNhdmVCdXR0b25SZWZcbiAgICAgIH0pLCBpY29uTm9kZSwga2lkcyk7XG5cbiAgICAgIGlmICh0eXBlID09PSAnbGluaycpIHtcbiAgICAgICAgcmV0dXJuIGJ1dHRvbk5vZGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF93YXZlW1wiZGVmYXVsdFwiXSwgbnVsbCwgYnV0dG9uTm9kZSk7XG4gICAgfTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgbG9hZGluZzogcHJvcHMubG9hZGluZyxcbiAgICAgIGhhc1R3b0NOQ2hhcjogZmFsc2VcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhCdXR0b24sIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5maXhUd29DTkNoYXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB0aGlzLmZpeFR3b0NOQ2hhcigpO1xuXG4gICAgICBpZiAocHJldlByb3BzLmxvYWRpbmcgJiYgdHlwZW9mIHByZXZQcm9wcy5sb2FkaW5nICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVsYXlUaW1lb3V0KTtcbiAgICAgIH1cblxuICAgICAgdmFyIGxvYWRpbmcgPSB0aGlzLnByb3BzLmxvYWRpbmc7XG5cbiAgICAgIGlmIChsb2FkaW5nICYmIHR5cGVvZiBsb2FkaW5nICE9PSAnYm9vbGVhbicgJiYgbG9hZGluZy5kZWxheSkge1xuICAgICAgICB0aGlzLmRlbGF5VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxvYWRpbmc6IGxvYWRpbmdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgbG9hZGluZy5kZWxheSk7XG4gICAgICB9IGVsc2UgaWYgKHByZXZQcm9wcy5sb2FkaW5nID09PSB0aGlzLnByb3BzLmxvYWRpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbG9hZGluZzogbG9hZGluZ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5kZWxheVRpbWVvdXQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVsYXlUaW1lb3V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZml4VHdvQ05DaGFyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZpeFR3b0NOQ2hhcigpIHtcbiAgICAgIC8vIEZpeCBmb3IgSE9DIHVzYWdlIGxpa2UgPEZvcm1hdE1lc3NhZ2UgLz5cbiAgICAgIGlmICghdGhpcy5idXR0b25Ob2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGJ1dHRvblRleHQgPSB0aGlzLmJ1dHRvbk5vZGUudGV4dENvbnRlbnQgfHwgdGhpcy5idXR0b25Ob2RlLmlubmVyVGV4dDtcblxuICAgICAgaWYgKHRoaXMuaXNOZWVkSW5zZXJ0ZWQoKSAmJiBpc1R3b0NOQ2hhcihidXR0b25UZXh0KSkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaGFzVHdvQ05DaGFyKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBoYXNUd29DTkNoYXI6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmhhc1R3b0NOQ2hhcikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBoYXNUd29DTkNoYXI6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc05lZWRJbnNlcnRlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc05lZWRJbnNlcnRlZCgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaWNvbiA9IF90aGlzJHByb3BzLmljb24sXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbjtcbiAgICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi5jb3VudChjaGlsZHJlbikgPT09IDEgJiYgIWljb247XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29uc3VtZXIsIG51bGwsIHRoaXMucmVuZGVyQnV0dG9uKTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICBpZiAobmV4dFByb3BzLmxvYWRpbmcgaW5zdGFuY2VvZiBCb29sZWFuKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgcHJldlN0YXRlLCB7XG4gICAgICAgICAgbG9hZGluZzogbmV4dFByb3BzLmxvYWRpbmdcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBCdXR0b247XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkJ1dHRvbi5fX0FOVF9CVVRUT04gPSB0cnVlO1xuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgbG9hZGluZzogZmFsc2UsXG4gIGdob3N0OiBmYWxzZSxcbiAgYmxvY2s6IGZhbHNlLFxuICBodG1sVHlwZTogJ2J1dHRvbidcbn07XG5CdXR0b24ucHJvcFR5cGVzID0ge1xuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaGFwZTogUHJvcFR5cGVzLm9uZU9mKEJ1dHRvblNoYXBlcyksXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihCdXR0b25TaXplcyksXG4gIGh0bWxUeXBlOiBQcm9wVHlwZXMub25lT2YoQnV0dG9uSFRNTFR5cGVzKSxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgYmxvY2s6IFByb3BUeXBlcy5ib29sXG59O1xuKDAsIF9yZWFjdExpZmVjeWNsZXNDb21wYXQucG9seWZpbGwpKEJ1dHRvbik7XG52YXIgX2RlZmF1bHQgPSBCdXR0b247XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnV0dG9uLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvYnV0dG9uL2J1dHRvbi5qc1xuLy8gbW9kdWxlIGlkID0gNzEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpO1xuXG52YXIgX0V2ZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY3NzLWFuaW1hdGlvbi9saWIvRXZlbnRcIikpO1xuXG52YXIgX3JhZiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL3JhZlwiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTsgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG52YXIgc3R5bGVGb3JQZXN1ZG87IC8vIFdoZXJlIGVsIGlzIHRoZSBET00gZWxlbWVudCB5b3UnZCBsaWtlIHRvIHRlc3QgZm9yIHZpc2liaWxpdHlcblxuZnVuY3Rpb24gaXNIaWRkZW4oZWxlbWVudCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0Jykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiAhZWxlbWVudCB8fCBlbGVtZW50Lm9mZnNldFBhcmVudCA9PT0gbnVsbDtcbn1cblxudmFyIFdhdmUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFdhdmUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFdhdmUoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdhdmUpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoV2F2ZSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgX3RoaXMuYW5pbWF0aW9uU3RhcnQgPSBmYWxzZTtcbiAgICBfdGhpcy5kZXN0cm95ID0gZmFsc2U7XG5cbiAgICBfdGhpcy5vbkNsaWNrID0gZnVuY3Rpb24gKG5vZGUsIHdhdmVDb2xvcikge1xuICAgICAgaWYgKCFub2RlIHx8IGlzSGlkZGVuKG5vZGUpIHx8IG5vZGUuY2xhc3NOYW1lLmluZGV4T2YoJy1sZWF2ZScpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5zZXJ0RXh0cmFOb2RlID0gX3RoaXMucHJvcHMuaW5zZXJ0RXh0cmFOb2RlO1xuICAgICAgX3RoaXMuZXh0cmFOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB2YXIgZXh0cmFOb2RlID0gX3RoaXMuZXh0cmFOb2RlO1xuICAgICAgZXh0cmFOb2RlLmNsYXNzTmFtZSA9ICdhbnQtY2xpY2stYW5pbWF0aW5nLW5vZGUnO1xuXG4gICAgICB2YXIgYXR0cmlidXRlTmFtZSA9IF90aGlzLmdldEF0dHJpYnV0ZU5hbWUoKTtcblxuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgJ3RydWUnKTsgLy8gTm90IHdoaXRlIG9yIHRyYW5zcGFybnQgb3IgZ3JleVxuXG4gICAgICBzdHlsZUZvclBlc3VkbyA9IHN0eWxlRm9yUGVzdWRvIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgICAgIGlmICh3YXZlQ29sb3IgJiYgd2F2ZUNvbG9yICE9PSAnI2ZmZmZmZicgJiYgd2F2ZUNvbG9yICE9PSAncmdiKDI1NSwgMjU1LCAyNTUpJyAmJiBfdGhpcy5pc05vdEdyZXkod2F2ZUNvbG9yKSAmJiAhL3JnYmFcXChcXGQqLCBcXGQqLCBcXGQqLCAwXFwpLy50ZXN0KHdhdmVDb2xvcikgJiYgLy8gYW55IHRyYW5zcGFyZW50IHJnYmEgY29sb3JcbiAgICAgIHdhdmVDb2xvciAhPT0gJ3RyYW5zcGFyZW50Jykge1xuICAgICAgICAvLyBBZGQgbm9uY2UgaWYgQ1NQIGV4aXN0XG4gICAgICAgIGlmIChfdGhpcy5jc3AgJiYgX3RoaXMuY3NwLm5vbmNlKSB7XG4gICAgICAgICAgc3R5bGVGb3JQZXN1ZG8ubm9uY2UgPSBfdGhpcy5jc3Aubm9uY2U7XG4gICAgICAgIH1cblxuICAgICAgICBleHRyYU5vZGUuc3R5bGUuYm9yZGVyQ29sb3IgPSB3YXZlQ29sb3I7XG4gICAgICAgIHN0eWxlRm9yUGVzdWRvLmlubmVySFRNTCA9IFwiXFxuICAgICAgW2FudC1jbGljay1hbmltYXRpbmctd2l0aG91dC1leHRyYS1ub2RlPSd0cnVlJ106OmFmdGVyLCAuYW50LWNsaWNrLWFuaW1hdGluZy1ub2RlIHtcXG4gICAgICAgIC0tYW50ZC13YXZlLXNoYWRvdy1jb2xvcjogXCIuY29uY2F0KHdhdmVDb2xvciwgXCI7XFxuICAgICAgfVwiKTtcblxuICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY29udGFpbnMoc3R5bGVGb3JQZXN1ZG8pKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdHlsZUZvclBlc3Vkbyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGluc2VydEV4dHJhTm9kZSkge1xuICAgICAgICBub2RlLmFwcGVuZENoaWxkKGV4dHJhTm9kZSk7XG4gICAgICB9XG5cbiAgICAgIF9FdmVudFtcImRlZmF1bHRcIl0uYWRkU3RhcnRFdmVudExpc3RlbmVyKG5vZGUsIF90aGlzLm9uVHJhbnNpdGlvblN0YXJ0KTtcblxuICAgICAgX0V2ZW50W1wiZGVmYXVsdFwiXS5hZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIF90aGlzLm9uVHJhbnNpdGlvbkVuZCk7XG4gICAgfTtcblxuICAgIF90aGlzLmJpbmRBbmltYXRpb25FdmVudCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBpZiAoIW5vZGUgfHwgIW5vZGUuZ2V0QXR0cmlidXRlIHx8IG5vZGUuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpIHx8IG5vZGUuY2xhc3NOYW1lLmluZGV4T2YoJ2Rpc2FibGVkJykgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBvbkNsaWNrID0gZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgIC8vIEZpeCByYWRpbyBidXR0b24gY2xpY2sgdHdpY2VcbiAgICAgICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgPT09ICdJTlBVVCcgfHwgaXNIaWRkZW4oZS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMucmVzZXRFZmZlY3Qobm9kZSk7IC8vIEdldCB3YXZlIGNvbG9yIGZyb20gdGFyZ2V0XG5cblxuICAgICAgICB2YXIgd2F2ZUNvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5nZXRQcm9wZXJ0eVZhbHVlKCdib3JkZXItdG9wLWNvbG9yJykgfHwgLy8gRmlyZWZveCBDb21wYXRpYmxlXG4gICAgICAgIGdldENvbXB1dGVkU3R5bGUobm9kZSkuZ2V0UHJvcGVydHlWYWx1ZSgnYm9yZGVyLWNvbG9yJykgfHwgZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XG4gICAgICAgIF90aGlzLmNsaWNrV2F2ZVRpbWVvdXRJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMub25DbGljayhub2RlLCB3YXZlQ29sb3IpO1xuICAgICAgICB9LCAwKTtcblxuICAgICAgICBfcmFmW1wiZGVmYXVsdFwiXS5jYW5jZWwoX3RoaXMuYW5pbWF0aW9uU3RhcnRJZCk7XG5cbiAgICAgICAgX3RoaXMuYW5pbWF0aW9uU3RhcnQgPSB0cnVlOyAvLyBSZW5kZXIgdG8gdHJpZ2dlciB0cmFuc2l0aW9uIGV2ZW50IGNvc3QgMyBmcmFtZXMuIExldCdzIGRlbGF5IDEwIGZyYW1lcyB0byByZXNldCB0aGlzLlxuXG4gICAgICAgIF90aGlzLmFuaW1hdGlvblN0YXJ0SWQgPSAoMCwgX3JhZltcImRlZmF1bHRcIl0pKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5hbmltYXRpb25TdGFydCA9IGZhbHNlO1xuICAgICAgICB9LCAxMCk7XG4gICAgICB9O1xuXG4gICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGljaywgdHJ1ZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjYW5jZWw6IGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGljaywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcblxuICAgIF90aGlzLm9uVHJhbnNpdGlvblN0YXJ0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChfdGhpcy5kZXN0cm95KSByZXR1cm47XG4gICAgICB2YXIgbm9kZSA9ICgwLCBfcmVhY3REb20uZmluZERPTU5vZGUpKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcblxuICAgICAgaWYgKCFlIHx8IGUudGFyZ2V0ICE9PSBub2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFfdGhpcy5hbmltYXRpb25TdGFydCkge1xuICAgICAgICBfdGhpcy5yZXNldEVmZmVjdChub2RlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25UcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmICghZSB8fCBlLmFuaW1hdGlvbk5hbWUgIT09ICdmYWRlRWZmZWN0Jykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnJlc2V0RWZmZWN0KGUudGFyZ2V0KTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVyV2F2ZSA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgY3NwID0gX3JlZi5jc3A7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBfdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICAgIF90aGlzLmNzcCA9IGNzcDtcbiAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFdhdmUsIFt7XG4gICAga2V5OiBcImlzTm90R3JleVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc05vdEdyZXkoY29sb3IpIHtcbiAgICAgIHZhciBtYXRjaCA9IChjb2xvciB8fCAnJykubWF0Y2goL3JnYmE/XFwoKFxcZCopLCAoXFxkKiksIChcXGQqKSgsIFtcXC5cXGRdKik/XFwpLyk7XG5cbiAgICAgIGlmIChtYXRjaCAmJiBtYXRjaFsxXSAmJiBtYXRjaFsyXSAmJiBtYXRjaFszXSkge1xuICAgICAgICByZXR1cm4gIShtYXRjaFsxXSA9PT0gbWF0Y2hbMl0gJiYgbWF0Y2hbMl0gPT09IG1hdGNoWzNdKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEF0dHJpYnV0ZU5hbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QXR0cmlidXRlTmFtZSgpIHtcbiAgICAgIHZhciBpbnNlcnRFeHRyYU5vZGUgPSB0aGlzLnByb3BzLmluc2VydEV4dHJhTm9kZTtcbiAgICAgIHJldHVybiBpbnNlcnRFeHRyYU5vZGUgPyAnYW50LWNsaWNrLWFuaW1hdGluZycgOiAnYW50LWNsaWNrLWFuaW1hdGluZy13aXRob3V0LWV4dHJhLW5vZGUnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZXNldEVmZmVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldEVmZmVjdChub2RlKSB7XG4gICAgICBpZiAoIW5vZGUgfHwgbm9kZSA9PT0gdGhpcy5leHRyYU5vZGUgfHwgIShub2RlIGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5zZXJ0RXh0cmFOb2RlID0gdGhpcy5wcm9wcy5pbnNlcnRFeHRyYU5vZGU7XG4gICAgICB2YXIgYXR0cmlidXRlTmFtZSA9IHRoaXMuZ2V0QXR0cmlidXRlTmFtZSgpO1xuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgJ2ZhbHNlJyk7IC8vIGVkZ2UgaGFzIGJ1ZyBvbiBgcmVtb3ZlQXR0cmlidXRlYCAjMTQ0NjZcblxuICAgICAgdGhpcy5yZW1vdmVFeHRyYVN0eWxlTm9kZSgpO1xuXG4gICAgICBpZiAoaW5zZXJ0RXh0cmFOb2RlICYmIHRoaXMuZXh0cmFOb2RlICYmIG5vZGUuY29udGFpbnModGhpcy5leHRyYU5vZGUpKSB7XG4gICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQodGhpcy5leHRyYU5vZGUpO1xuICAgICAgfVxuXG4gICAgICBfRXZlbnRbXCJkZWZhdWx0XCJdLnJlbW92ZVN0YXJ0RXZlbnRMaXN0ZW5lcihub2RlLCB0aGlzLm9uVHJhbnNpdGlvblN0YXJ0KTtcblxuICAgICAgX0V2ZW50W1wiZGVmYXVsdFwiXS5yZW1vdmVFbmRFdmVudExpc3RlbmVyKG5vZGUsIHRoaXMub25UcmFuc2l0aW9uRW5kKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlRXh0cmFTdHlsZU5vZGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlRXh0cmFTdHlsZU5vZGUoKSB7XG4gICAgICBpZiAoc3R5bGVGb3JQZXN1ZG8pIHtcbiAgICAgICAgc3R5bGVGb3JQZXN1ZG8uaW5uZXJIVE1MID0gJyc7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIG5vZGUgPSAoMCwgX3JlYWN0RG9tLmZpbmRET01Ob2RlKSh0aGlzKTtcblxuICAgICAgaWYgKCFub2RlIHx8IG5vZGUubm9kZVR5cGUgIT09IDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmluc3RhbmNlID0gdGhpcy5iaW5kQW5pbWF0aW9uRXZlbnQobm9kZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5jYW5jZWwoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY2xpY2tXYXZlVGltZW91dElkKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsaWNrV2F2ZVRpbWVvdXRJZCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGVzdHJveSA9IHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29uc3VtZXIsIG51bGwsIHRoaXMucmVuZGVyV2F2ZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFdhdmU7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gV2F2ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhdmUuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9fdXRpbC93YXZlLmpzXG4vLyBtb2R1bGUgaWQgPSA3MTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIFNUQVJUX0VWRU5UX05BTUVfTUFQID0ge1xuICB0cmFuc2l0aW9uc3RhcnQ6IHtcbiAgICB0cmFuc2l0aW9uOiAndHJhbnNpdGlvbnN0YXJ0JyxcbiAgICBXZWJraXRUcmFuc2l0aW9uOiAnd2Via2l0VHJhbnNpdGlvblN0YXJ0JyxcbiAgICBNb3pUcmFuc2l0aW9uOiAnbW96VHJhbnNpdGlvblN0YXJ0JyxcbiAgICBPVHJhbnNpdGlvbjogJ29UcmFuc2l0aW9uU3RhcnQnLFxuICAgIG1zVHJhbnNpdGlvbjogJ01TVHJhbnNpdGlvblN0YXJ0J1xuICB9LFxuXG4gIGFuaW1hdGlvbnN0YXJ0OiB7XG4gICAgYW5pbWF0aW9uOiAnYW5pbWF0aW9uc3RhcnQnLFxuICAgIFdlYmtpdEFuaW1hdGlvbjogJ3dlYmtpdEFuaW1hdGlvblN0YXJ0JyxcbiAgICBNb3pBbmltYXRpb246ICdtb3pBbmltYXRpb25TdGFydCcsXG4gICAgT0FuaW1hdGlvbjogJ29BbmltYXRpb25TdGFydCcsXG4gICAgbXNBbmltYXRpb246ICdNU0FuaW1hdGlvblN0YXJ0J1xuICB9XG59O1xuXG52YXIgRU5EX0VWRU5UX05BTUVfTUFQID0ge1xuICB0cmFuc2l0aW9uZW5kOiB7XG4gICAgdHJhbnNpdGlvbjogJ3RyYW5zaXRpb25lbmQnLFxuICAgIFdlYmtpdFRyYW5zaXRpb246ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICBNb3pUcmFuc2l0aW9uOiAnbW96VHJhbnNpdGlvbkVuZCcsXG4gICAgT1RyYW5zaXRpb246ICdvVHJhbnNpdGlvbkVuZCcsXG4gICAgbXNUcmFuc2l0aW9uOiAnTVNUcmFuc2l0aW9uRW5kJ1xuICB9LFxuXG4gIGFuaW1hdGlvbmVuZDoge1xuICAgIGFuaW1hdGlvbjogJ2FuaW1hdGlvbmVuZCcsXG4gICAgV2Via2l0QW5pbWF0aW9uOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICBNb3pBbmltYXRpb246ICdtb3pBbmltYXRpb25FbmQnLFxuICAgIE9BbmltYXRpb246ICdvQW5pbWF0aW9uRW5kJyxcbiAgICBtc0FuaW1hdGlvbjogJ01TQW5pbWF0aW9uRW5kJ1xuICB9XG59O1xuXG52YXIgc3RhcnRFdmVudHMgPSBbXTtcbnZhciBlbmRFdmVudHMgPSBbXTtcblxuZnVuY3Rpb24gZGV0ZWN0RXZlbnRzKCkge1xuICB2YXIgdGVzdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZhciBzdHlsZSA9IHRlc3RFbC5zdHlsZTtcblxuICBpZiAoISgnQW5pbWF0aW9uRXZlbnQnIGluIHdpbmRvdykpIHtcbiAgICBkZWxldGUgU1RBUlRfRVZFTlRfTkFNRV9NQVAuYW5pbWF0aW9uc3RhcnQuYW5pbWF0aW9uO1xuICAgIGRlbGV0ZSBFTkRfRVZFTlRfTkFNRV9NQVAuYW5pbWF0aW9uZW5kLmFuaW1hdGlvbjtcbiAgfVxuXG4gIGlmICghKCdUcmFuc2l0aW9uRXZlbnQnIGluIHdpbmRvdykpIHtcbiAgICBkZWxldGUgU1RBUlRfRVZFTlRfTkFNRV9NQVAudHJhbnNpdGlvbnN0YXJ0LnRyYW5zaXRpb247XG4gICAgZGVsZXRlIEVORF9FVkVOVF9OQU1FX01BUC50cmFuc2l0aW9uZW5kLnRyYW5zaXRpb247XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzKEVWRU5UX05BTUVfTUFQLCBldmVudHMpIHtcbiAgICBmb3IgKHZhciBiYXNlRXZlbnROYW1lIGluIEVWRU5UX05BTUVfTUFQKSB7XG4gICAgICBpZiAoRVZFTlRfTkFNRV9NQVAuaGFzT3duUHJvcGVydHkoYmFzZUV2ZW50TmFtZSkpIHtcbiAgICAgICAgdmFyIGJhc2VFdmVudHMgPSBFVkVOVF9OQU1FX01BUFtiYXNlRXZlbnROYW1lXTtcbiAgICAgICAgZm9yICh2YXIgc3R5bGVOYW1lIGluIGJhc2VFdmVudHMpIHtcbiAgICAgICAgICBpZiAoc3R5bGVOYW1lIGluIHN0eWxlKSB7XG4gICAgICAgICAgICBldmVudHMucHVzaChiYXNlRXZlbnRzW3N0eWxlTmFtZV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvY2VzcyhTVEFSVF9FVkVOVF9OQU1FX01BUCwgc3RhcnRFdmVudHMpO1xuICBwcm9jZXNzKEVORF9FVkVOVF9OQU1FX01BUCwgZW5kRXZlbnRzKTtcbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgZGV0ZWN0RXZlbnRzKCk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnROYW1lLCBldmVudExpc3RlbmVyKSB7XG4gIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xufVxuXG52YXIgVHJhbnNpdGlvbkV2ZW50cyA9IHtcbiAgLy8gU3RhcnQgZXZlbnRzXG4gIHN0YXJ0RXZlbnRzOiBzdGFydEV2ZW50cyxcblxuICBhZGRTdGFydEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIGFkZFN0YXJ0RXZlbnRMaXN0ZW5lcihub2RlLCBldmVudExpc3RlbmVyKSB7XG4gICAgaWYgKHN0YXJ0RXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoZXZlbnRMaXN0ZW5lciwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN0YXJ0RXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKHN0YXJ0RXZlbnQpIHtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgc3RhcnRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH0sXG4gIHJlbW92ZVN0YXJ0RXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gcmVtb3ZlU3RhcnRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgICBpZiAoc3RhcnRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN0YXJ0RXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKHN0YXJ0RXZlbnQpIHtcbiAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgc3RhcnRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH0sXG5cblxuICAvLyBFbmQgZXZlbnRzXG4gIGVuZEV2ZW50czogZW5kRXZlbnRzLFxuXG4gIGFkZEVuZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIGFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgIGlmIChlbmRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dChldmVudExpc3RlbmVyLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZW5kRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGVuZEV2ZW50KSB7XG4gICAgICBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGVuZEV2ZW50LCBldmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgfSxcbiAgcmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gcmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudExpc3RlbmVyKSB7XG4gICAgaWYgKGVuZEV2ZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZW5kRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGVuZEV2ZW50KSB7XG4gICAgICByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGVuZEV2ZW50LCBldmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gVHJhbnNpdGlvbkV2ZW50cztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1hbmltYXRpb24vbGliL0V2ZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA3MTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTsgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgQnV0dG9uR3JvdXAgPSBmdW5jdGlvbiBCdXR0b25Hcm91cChwcm9wcykge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGdldFByZWZpeENscyA9IF9yZWYuZ2V0UHJlZml4Q2xzO1xuXG4gICAgdmFyIGN1c3RvbWl6ZVByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgICAgc2l6ZSA9IHByb3BzLnNpemUsXG4gICAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgb3RoZXJzID0gX19yZXN0KHByb3BzLCBbXCJwcmVmaXhDbHNcIiwgXCJzaXplXCIsIFwiY2xhc3NOYW1lXCJdKTtcblxuICAgIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2J0bi1ncm91cCcsIGN1c3RvbWl6ZVByZWZpeENscyk7IC8vIGxhcmdlID0+IGxnXG4gICAgLy8gc21hbGwgPT4gc21cblxuICAgIHZhciBzaXplQ2xzID0gJyc7XG5cbiAgICBzd2l0Y2ggKHNpemUpIHtcbiAgICAgIGNhc2UgJ2xhcmdlJzpcbiAgICAgICAgc2l6ZUNscyA9ICdsZyc7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdzbWFsbCc6XG4gICAgICAgIHNpemVDbHMgPSAnc20nO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICB2YXIgY2xhc3NlcyA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKHByZWZpeENscywgX2RlZmluZVByb3BlcnR5KHt9LCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoc2l6ZUNscyksIHNpemVDbHMpLCBjbGFzc05hbWUpO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBvdGhlcnMsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICAgIH0pKTtcbiAgfSk7XG59O1xuXG52YXIgX2RlZmF1bHQgPSBCdXR0b25Hcm91cDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1idXR0b24tZ3JvdXAuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9idXR0b24vYnV0dG9uLWdyb3VwLmpzXG4vLyBtb2R1bGUgaWQgPSA3MTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9JbnB1dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSW5wdXRcIikpO1xuXG52YXIgX0dyb3VwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Hcm91cFwiKSk7XG5cbnZhciBfU2VhcmNoID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9TZWFyY2hcIikpO1xuXG52YXIgX1RleHRBcmVhID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9UZXh0QXJlYVwiKSk7XG5cbnZhciBfUGFzc3dvcmQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1Bhc3N3b3JkXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbl9JbnB1dFtcImRlZmF1bHRcIl0uR3JvdXAgPSBfR3JvdXBbXCJkZWZhdWx0XCJdO1xuX0lucHV0W1wiZGVmYXVsdFwiXS5TZWFyY2ggPSBfU2VhcmNoW1wiZGVmYXVsdFwiXTtcbl9JbnB1dFtcImRlZmF1bHRcIl0uVGV4dEFyZWEgPSBfVGV4dEFyZWFbXCJkZWZhdWx0XCJdO1xuX0lucHV0W1wiZGVmYXVsdFwiXS5QYXNzd29yZCA9IF9QYXNzd29yZFtcImRlZmF1bHRcIl07XG52YXIgX2RlZmF1bHQgPSBfSW5wdXRbXCJkZWZhdWx0XCJdO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvaW5wdXQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDcxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHt9OyBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIEdyb3VwID0gZnVuY3Rpb24gR3JvdXAocHJvcHMpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgIHZhciBnZXRQcmVmaXhDbHMgPSBfcmVmLmdldFByZWZpeENscztcbiAgICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICBfcHJvcHMkY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMkY2xhc3NOYW1lID09PSB2b2lkIDAgPyAnJyA6IF9wcm9wcyRjbGFzc05hbWU7XG4gICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnaW5wdXQtZ3JvdXAnLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgIHZhciBjbHMgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShwcmVmaXhDbHMsIChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbGdcIiksIHByb3BzLnNpemUgPT09ICdsYXJnZScpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc21cIiksIHByb3BzLnNpemUgPT09ICdzbWFsbCcpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY29tcGFjdFwiKSwgcHJvcHMuY29tcGFjdCksIF9jbGFzc05hbWVzKSwgY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBjbHMsXG4gICAgICBzdHlsZTogcHJvcHMuc3R5bGUsXG4gICAgICBvbk1vdXNlRW50ZXI6IHByb3BzLm9uTW91c2VFbnRlcixcbiAgICAgIG9uTW91c2VMZWF2ZTogcHJvcHMub25Nb3VzZUxlYXZlLFxuICAgICAgb25Gb2N1czogcHJvcHMub25Gb2N1cyxcbiAgICAgIG9uQmx1cjogcHJvcHMub25CbHVyXG4gICAgfSwgcHJvcHMuY2hpbGRyZW4pO1xuICB9KTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IEdyb3VwO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUdyb3VwLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvaW5wdXQvR3JvdXAuanNcbi8vIG1vZHVsZSBpZCA9IDcxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9JbnB1dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSW5wdXRcIikpO1xuXG52YXIgX2ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9pY29uXCIpKTtcblxudmFyIF9idXR0b24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9idXR0b25cIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDoge307IGlmIChkZXNjLmdldCB8fCBkZXNjLnNldCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxudmFyIF9fcmVzdCA9IHZvaWQgMCAmJiAodm9pZCAwKS5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbnZhciBTZWFyY2ggPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFNlYXJjaCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gU2VhcmNoKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTZWFyY2gpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoU2VhcmNoKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblxuICAgIF90aGlzLm9uU2VhcmNoID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBvblNlYXJjaCA9IF90aGlzLnByb3BzLm9uU2VhcmNoO1xuXG4gICAgICBpZiAob25TZWFyY2gpIHtcbiAgICAgICAgb25TZWFyY2goX3RoaXMuaW5wdXQuaW5wdXQudmFsdWUsIGUpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgIH07XG5cbiAgICBfdGhpcy5zYXZlSW5wdXQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgX3RoaXMuaW5wdXQgPSBub2RlO1xuICAgIH07XG5cbiAgICBfdGhpcy5yZW5kZXJTdWZmaXggPSBmdW5jdGlvbiAocHJlZml4Q2xzKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBzdWZmaXggPSBfdGhpcyRwcm9wcy5zdWZmaXgsXG4gICAgICAgICAgZW50ZXJCdXR0b24gPSBfdGhpcyRwcm9wcy5lbnRlckJ1dHRvbjtcbiAgICAgIGlmIChlbnRlckJ1dHRvbikgcmV0dXJuIHN1ZmZpeDtcbiAgICAgIHZhciBub2RlID0gUmVhY3QuY3JlYXRlRWxlbWVudChfaWNvbltcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWljb25cIiksXG4gICAgICAgIHR5cGU6IFwic2VhcmNoXCIsXG4gICAgICAgIGtleTogXCJzZWFyY2hJY29uXCIsXG4gICAgICAgIG9uQ2xpY2s6IF90aGlzLm9uU2VhcmNoXG4gICAgICB9KTtcblxuICAgICAgaWYgKHN1ZmZpeCkge1xuICAgICAgICB2YXIgY2xvbmVTdWZmaXggPSBzdWZmaXg7XG5cbiAgICAgICAgaWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KGNsb25lU3VmZml4KSAmJiAhY2xvbmVTdWZmaXgua2V5KSB7XG4gICAgICAgICAgY2xvbmVTdWZmaXggPSBSZWFjdC5jbG9uZUVsZW1lbnQoY2xvbmVTdWZmaXgsIHtcbiAgICAgICAgICAgIGtleTogJ29yaWdpblN1ZmZpeCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbY2xvbmVTdWZmaXgsIG5vZGVdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVyQWRkb25BZnRlciA9IGZ1bmN0aW9uIChwcmVmaXhDbHMpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBlbnRlckJ1dHRvbiA9IF90aGlzJHByb3BzMi5lbnRlckJ1dHRvbixcbiAgICAgICAgICBzaXplID0gX3RoaXMkcHJvcHMyLnNpemUsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRwcm9wczIuZGlzYWJsZWQsXG4gICAgICAgICAgYWRkb25BZnRlciA9IF90aGlzJHByb3BzMi5hZGRvbkFmdGVyO1xuICAgICAgaWYgKCFlbnRlckJ1dHRvbikgcmV0dXJuIGFkZG9uQWZ0ZXI7XG4gICAgICB2YXIgYnRuQ2xhc3NOYW1lID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1idXR0b25cIik7XG4gICAgICB2YXIgYnV0dG9uO1xuICAgICAgdmFyIGVudGVyQnV0dG9uQXNFbGVtZW50ID0gZW50ZXJCdXR0b247XG5cbiAgICAgIGlmIChlbnRlckJ1dHRvbkFzRWxlbWVudC50eXBlID09PSBfYnV0dG9uW1wiZGVmYXVsdFwiXSB8fCBlbnRlckJ1dHRvbkFzRWxlbWVudC50eXBlID09PSAnYnV0dG9uJykge1xuICAgICAgICBidXR0b24gPSBSZWFjdC5jbG9uZUVsZW1lbnQoZW50ZXJCdXR0b25Bc0VsZW1lbnQsIF9leHRlbmRzKHtcbiAgICAgICAgICBvbkNsaWNrOiBfdGhpcy5vblNlYXJjaCxcbiAgICAgICAgICBrZXk6ICdlbnRlckJ1dHRvbidcbiAgICAgICAgfSwgZW50ZXJCdXR0b25Bc0VsZW1lbnQudHlwZSA9PT0gX2J1dHRvbltcImRlZmF1bHRcIl0gPyB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBidG5DbGFzc05hbWUsXG4gICAgICAgICAgc2l6ZTogc2l6ZVxuICAgICAgICB9IDoge30pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvbiA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2J1dHRvbltcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGJ0bkNsYXNzTmFtZSxcbiAgICAgICAgICB0eXBlOiBcInByaW1hcnlcIixcbiAgICAgICAgICBzaXplOiBzaXplLFxuICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgICBrZXk6IFwiZW50ZXJCdXR0b25cIixcbiAgICAgICAgICBvbkNsaWNrOiBfdGhpcy5vblNlYXJjaFxuICAgICAgICB9LCBlbnRlckJ1dHRvbiA9PT0gdHJ1ZSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2ljb25bXCJkZWZhdWx0XCJdLCB7XG4gICAgICAgICAgdHlwZTogXCJzZWFyY2hcIlxuICAgICAgICB9KSA6IGVudGVyQnV0dG9uKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFkZG9uQWZ0ZXIpIHtcbiAgICAgICAgcmV0dXJuIFtidXR0b24sIGFkZG9uQWZ0ZXJdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH07XG5cbiAgICBfdGhpcy5yZW5kZXJTZWFyY2ggPSBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIGdldFByZWZpeENscyA9IF9yZWYuZ2V0UHJlZml4Q2xzO1xuXG4gICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBjdXN0b21pemVQcmVmaXhDbHMgPSBfYS5wcmVmaXhDbHMsXG4gICAgICAgICAgY3VzdG9taXplSW5wdXRQcmVmaXhDbHMgPSBfYS5pbnB1dFByZWZpeENscyxcbiAgICAgICAgICBzaXplID0gX2Euc2l6ZSxcbiAgICAgICAgICBlbnRlckJ1dHRvbiA9IF9hLmVudGVyQnV0dG9uLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSxcbiAgICAgICAgICByZXN0UHJvcHMgPSBfX3Jlc3QoX2EsIFtcInByZWZpeENsc1wiLCBcImlucHV0UHJlZml4Q2xzXCIsIFwic2l6ZVwiLCBcImVudGVyQnV0dG9uXCIsIFwiY2xhc3NOYW1lXCJdKTtcblxuICAgICAgZGVsZXRlIHJlc3RQcm9wcy5vblNlYXJjaDtcbiAgICAgIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2lucHV0LXNlYXJjaCcsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gICAgICB2YXIgaW5wdXRQcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2lucHV0JywgY3VzdG9taXplSW5wdXRQcmVmaXhDbHMpO1xuICAgICAgdmFyIGlucHV0Q2xhc3NOYW1lO1xuXG4gICAgICBpZiAoZW50ZXJCdXR0b24pIHtcbiAgICAgICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgICAgIGlucHV0Q2xhc3NOYW1lID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkocHJlZml4Q2xzLCBjbGFzc05hbWUsIChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZW50ZXItYnV0dG9uXCIpLCAhIWVudGVyQnV0dG9uKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoc2l6ZSksICEhc2l6ZSksIF9jbGFzc05hbWVzKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dENsYXNzTmFtZSA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKHByZWZpeENscywgY2xhc3NOYW1lKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX0lucHV0W1wiZGVmYXVsdFwiXSwgX2V4dGVuZHMoe1xuICAgICAgICBvblByZXNzRW50ZXI6IF90aGlzLm9uU2VhcmNoXG4gICAgICB9LCByZXN0UHJvcHMsIHtcbiAgICAgICAgc2l6ZTogc2l6ZSxcbiAgICAgICAgcHJlZml4Q2xzOiBpbnB1dFByZWZpeENscyxcbiAgICAgICAgYWRkb25BZnRlcjogX3RoaXMucmVuZGVyQWRkb25BZnRlcihwcmVmaXhDbHMpLFxuICAgICAgICBzdWZmaXg6IF90aGlzLnJlbmRlclN1ZmZpeChwcmVmaXhDbHMpLFxuICAgICAgICByZWY6IF90aGlzLnNhdmVJbnB1dCxcbiAgICAgICAgY2xhc3NOYW1lOiBpbnB1dENsYXNzTmFtZVxuICAgICAgfSkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU2VhcmNoLCBbe1xuICAgIGtleTogXCJmb2N1c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYmx1clwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBibHVyKCkge1xuICAgICAgdGhpcy5pbnB1dC5ibHVyKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29uc3VtZXIsIG51bGwsIHRoaXMucmVuZGVyU2VhcmNoKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU2VhcmNoO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFNlYXJjaDtcblNlYXJjaC5kZWZhdWx0UHJvcHMgPSB7XG4gIGVudGVyQnV0dG9uOiBmYWxzZVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNlYXJjaC5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2lucHV0L1NlYXJjaC5qc1xuLy8gbW9kdWxlIGlkID0gNzE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfb21pdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIm9taXQuanNcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9yZWFjdExpZmVjeWNsZXNDb21wYXQgPSByZXF1aXJlKFwicmVhY3QtbGlmZWN5Y2xlcy1jb21wYXRcIik7XG5cbnZhciBfY2FsY3VsYXRlTm9kZUhlaWdodCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY2FsY3VsYXRlTm9kZUhlaWdodFwiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG52YXIgX3Jlc2l6ZU9ic2VydmVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vX3V0aWwvcmVzaXplT2JzZXJ2ZXJcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTsgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG52YXIgX19yZXN0ID0gdm9pZCAwICYmICh2b2lkIDApLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxuZnVuY3Rpb24gb25OZXh0RnJhbWUoY2IpIHtcbiAgaWYgKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShjYik7XG4gIH1cblxuICByZXR1cm4gd2luZG93LnNldFRpbWVvdXQoY2IsIDEpO1xufVxuXG5mdW5jdGlvbiBjbGVhck5leHRGcmFtZUFjdGlvbihuZXh0RnJhbWVJZCkge1xuICBpZiAod2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKG5leHRGcmFtZUlkKTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KG5leHRGcmFtZUlkKTtcbiAgfVxufVxuXG52YXIgVGV4dEFyZWEgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFRleHRBcmVhLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUZXh0QXJlYSgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGV4dEFyZWEpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoVGV4dEFyZWEpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgdGV4dGFyZWFTdHlsZXM6IHt9XG4gICAgfTtcblxuICAgIF90aGlzLnJlc2l6ZU9uTmV4dEZyYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLm5leHRGcmFtZUFjdGlvbklkKSB7XG4gICAgICAgIGNsZWFyTmV4dEZyYW1lQWN0aW9uKF90aGlzLm5leHRGcmFtZUFjdGlvbklkKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMubmV4dEZyYW1lQWN0aW9uSWQgPSBvbk5leHRGcmFtZShfdGhpcy5yZXNpemVUZXh0YXJlYSk7XG4gICAgfTtcblxuICAgIF90aGlzLnJlc2l6ZVRleHRhcmVhID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGF1dG9zaXplID0gX3RoaXMucHJvcHMuYXV0b3NpemU7XG5cbiAgICAgIGlmICghYXV0b3NpemUgfHwgIV90aGlzLnRleHRBcmVhUmVmKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG1pblJvd3MgPSBhdXRvc2l6ZS5taW5Sb3dzLFxuICAgICAgICAgIG1heFJvd3MgPSBhdXRvc2l6ZS5tYXhSb3dzO1xuICAgICAgdmFyIHRleHRhcmVhU3R5bGVzID0gKDAsIF9jYWxjdWxhdGVOb2RlSGVpZ2h0W1wiZGVmYXVsdFwiXSkoX3RoaXMudGV4dEFyZWFSZWYsIGZhbHNlLCBtaW5Sb3dzLCBtYXhSb3dzKTtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0ZXh0YXJlYVN0eWxlczogdGV4dGFyZWFTdHlsZXNcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVUZXh0YXJlYUNoYW5nZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoISgndmFsdWUnIGluIF90aGlzLnByb3BzKSkge1xuICAgICAgICBfdGhpcy5yZXNpemVUZXh0YXJlYSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgb25DaGFuZ2UgPSBfdGhpcy5wcm9wcy5vbkNoYW5nZTtcblxuICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgIG9uQ2hhbmdlKGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG9uUHJlc3NFbnRlciA9IF90aGlzJHByb3BzLm9uUHJlc3NFbnRlcixcbiAgICAgICAgICBvbktleURvd24gPSBfdGhpcyRwcm9wcy5vbktleURvd247XG5cbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzICYmIG9uUHJlc3NFbnRlcikge1xuICAgICAgICBvblByZXNzRW50ZXIoZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvbktleURvd24pIHtcbiAgICAgICAgb25LZXlEb3duKGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5zYXZlVGV4dEFyZWFSZWYgPSBmdW5jdGlvbiAodGV4dEFyZWEpIHtcbiAgICAgIF90aGlzLnRleHRBcmVhUmVmID0gdGV4dEFyZWE7XG4gICAgfTtcblxuICAgIF90aGlzLnJlbmRlclRleHRBcmVhID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBnZXRQcmVmaXhDbHMgPSBfcmVmLmdldFByZWZpeENscztcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBjdXN0b21pemVQcmVmaXhDbHMgPSBfdGhpcyRwcm9wczIucHJlZml4Q2xzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzMi5jbGFzc05hbWUsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRwcm9wczIuZGlzYWJsZWQsXG4gICAgICAgICAgYXV0b3NpemUgPSBfdGhpcyRwcm9wczIuYXV0b3NpemU7XG5cbiAgICAgIHZhciBwcm9wcyA9IF9fcmVzdChfdGhpcy5wcm9wcywgW10pO1xuXG4gICAgICB2YXIgb3RoZXJQcm9wcyA9ICgwLCBfb21pdFtcImRlZmF1bHRcIl0pKHByb3BzLCBbJ3ByZWZpeENscycsICdvblByZXNzRW50ZXInLCAnYXV0b3NpemUnXSk7XG4gICAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdpbnB1dCcsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gICAgICB2YXIgY2xzID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkocHJlZml4Q2xzLCBjbGFzc05hbWUsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kaXNhYmxlZFwiKSwgZGlzYWJsZWQpKTtcblxuICAgICAgdmFyIHN0eWxlID0gX2V4dGVuZHMoe30sIHByb3BzLnN0eWxlLCBfdGhpcy5zdGF0ZS50ZXh0YXJlYVN0eWxlcyk7IC8vIEZpeCBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy82Nzc2XG4gICAgICAvLyBNYWtlIHN1cmUgaXQgY291bGQgYmUgcmVzZXQgd2hlbiB1c2luZyBmb3JtLmdldEZpZWxkRGVjb3JhdG9yXG5cblxuICAgICAgaWYgKCd2YWx1ZScgaW4gb3RoZXJQcm9wcykge1xuICAgICAgICBvdGhlclByb3BzLnZhbHVlID0gb3RoZXJQcm9wcy52YWx1ZSB8fCAnJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX3Jlc2l6ZU9ic2VydmVyW1wiZGVmYXVsdFwiXSwge1xuICAgICAgICBvblJlc2l6ZTogX3RoaXMucmVzaXplT25OZXh0RnJhbWUsXG4gICAgICAgIGRpc2FibGVkOiAhYXV0b3NpemVcbiAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCBfZXh0ZW5kcyh7fSwgb3RoZXJQcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6IGNscyxcbiAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICBvbktleURvd246IF90aGlzLmhhbmRsZUtleURvd24sXG4gICAgICAgIG9uQ2hhbmdlOiBfdGhpcy5oYW5kbGVUZXh0YXJlYUNoYW5nZSxcbiAgICAgICAgcmVmOiBfdGhpcy5zYXZlVGV4dEFyZWFSZWZcbiAgICAgIH0pKSk7XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhUZXh0QXJlYSwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnJlc2l6ZVRleHRhcmVhKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAvLyBSZS1yZW5kZXIgd2l0aCB0aGUgbmV3IGNvbnRlbnQgdGhlbiByZWNhbGN1bGF0ZSB0aGUgaGVpZ2h0IGFzIHJlcXVpcmVkLlxuICAgICAgaWYgKHByZXZQcm9wcy52YWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgICB0aGlzLnJlc2l6ZU9uTmV4dEZyYW1lKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZvY3VzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvY3VzKCkge1xuICAgICAgdGhpcy50ZXh0QXJlYVJlZi5mb2N1cygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJibHVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJsdXIoKSB7XG4gICAgICB0aGlzLnRleHRBcmVhUmVmLmJsdXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9jb25maWdQcm92aWRlci5Db25maWdDb25zdW1lciwgbnVsbCwgdGhpcy5yZW5kZXJUZXh0QXJlYSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRleHRBcmVhO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG4oMCwgX3JlYWN0TGlmZWN5Y2xlc0NvbXBhdC5wb2x5ZmlsbCkoVGV4dEFyZWEpO1xudmFyIF9kZWZhdWx0ID0gVGV4dEFyZWE7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VGV4dEFyZWEuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9pbnB1dC9UZXh0QXJlYS5qc1xuLy8gbW9kdWxlIGlkID0gNzE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jYWxjdWxhdGVOb2RlU3R5bGluZyA9IGNhbGN1bGF0ZU5vZGVTdHlsaW5nO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBjYWxjdWxhdGVOb2RlSGVpZ2h0O1xuLy8gVGhhbmtzIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmRyZXlwb3BwL3JlYWN0LXRleHRhcmVhLWF1dG9zaXplL1xuXG4vKipcbiAqIGNhbGN1bGF0ZU5vZGVIZWlnaHQodWlUZXh0Tm9kZSwgdXNlQ2FjaGUgPSBmYWxzZSlcbiAqL1xudmFyIEhJRERFTl9URVhUQVJFQV9TVFlMRSA9IFwiXFxuICBtaW4taGVpZ2h0OjAgIWltcG9ydGFudDtcXG4gIG1heC1oZWlnaHQ6bm9uZSAhaW1wb3J0YW50O1xcbiAgaGVpZ2h0OjAgIWltcG9ydGFudDtcXG4gIHZpc2liaWxpdHk6aGlkZGVuICFpbXBvcnRhbnQ7XFxuICBvdmVyZmxvdzpoaWRkZW4gIWltcG9ydGFudDtcXG4gIHBvc2l0aW9uOmFic29sdXRlICFpbXBvcnRhbnQ7XFxuICB6LWluZGV4Oi0xMDAwICFpbXBvcnRhbnQ7XFxuICB0b3A6MCAhaW1wb3J0YW50O1xcbiAgcmlnaHQ6MCAhaW1wb3J0YW50XFxuXCI7XG52YXIgU0laSU5HX1NUWUxFID0gWydsZXR0ZXItc3BhY2luZycsICdsaW5lLWhlaWdodCcsICdwYWRkaW5nLXRvcCcsICdwYWRkaW5nLWJvdHRvbScsICdmb250LWZhbWlseScsICdmb250LXdlaWdodCcsICdmb250LXNpemUnLCAnZm9udC12YXJpYW50JywgJ3RleHQtcmVuZGVyaW5nJywgJ3RleHQtdHJhbnNmb3JtJywgJ3dpZHRoJywgJ3RleHQtaW5kZW50JywgJ3BhZGRpbmctbGVmdCcsICdwYWRkaW5nLXJpZ2h0JywgJ2JvcmRlci13aWR0aCcsICdib3gtc2l6aW5nJ107XG52YXIgY29tcHV0ZWRTdHlsZUNhY2hlID0ge307XG52YXIgaGlkZGVuVGV4dGFyZWE7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU5vZGVTdHlsaW5nKG5vZGUpIHtcbiAgdmFyIHVzZUNhY2hlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgdmFyIG5vZGVSZWYgPSBub2RlLmdldEF0dHJpYnV0ZSgnaWQnKSB8fCBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1yZWFjdGlkJykgfHwgbm9kZS5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcblxuICBpZiAodXNlQ2FjaGUgJiYgY29tcHV0ZWRTdHlsZUNhY2hlW25vZGVSZWZdKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVkU3R5bGVDYWNoZVtub2RlUmVmXTtcbiAgfVxuXG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICB2YXIgYm94U2l6aW5nID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYm94LXNpemluZycpIHx8IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJy1tb3otYm94LXNpemluZycpIHx8IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJy13ZWJraXQtYm94LXNpemluZycpO1xuICB2YXIgcGFkZGluZ1NpemUgPSBwYXJzZUZsb2F0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctYm90dG9tJykpICsgcGFyc2VGbG9hdChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXRvcCcpKTtcbiAgdmFyIGJvcmRlclNpemUgPSBwYXJzZUZsb2F0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JvcmRlci1ib3R0b20td2lkdGgnKSkgKyBwYXJzZUZsb2F0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JvcmRlci10b3Atd2lkdGgnKSk7XG4gIHZhciBzaXppbmdTdHlsZSA9IFNJWklOR19TVFlMRS5tYXAoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gXCJcIi5jb25jYXQobmFtZSwgXCI6XCIpLmNvbmNhdChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpKTtcbiAgfSkuam9pbignOycpO1xuICB2YXIgbm9kZUluZm8gPSB7XG4gICAgc2l6aW5nU3R5bGU6IHNpemluZ1N0eWxlLFxuICAgIHBhZGRpbmdTaXplOiBwYWRkaW5nU2l6ZSxcbiAgICBib3JkZXJTaXplOiBib3JkZXJTaXplLFxuICAgIGJveFNpemluZzogYm94U2l6aW5nXG4gIH07XG5cbiAgaWYgKHVzZUNhY2hlICYmIG5vZGVSZWYpIHtcbiAgICBjb21wdXRlZFN0eWxlQ2FjaGVbbm9kZVJlZl0gPSBub2RlSW5mbztcbiAgfVxuXG4gIHJldHVybiBub2RlSW5mbztcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTm9kZUhlaWdodCh1aVRleHROb2RlKSB7XG4gIHZhciB1c2VDYWNoZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gIHZhciBtaW5Sb3dzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBudWxsO1xuICB2YXIgbWF4Um93cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogbnVsbDtcblxuICBpZiAoIWhpZGRlblRleHRhcmVhKSB7XG4gICAgaGlkZGVuVGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGlkZGVuVGV4dGFyZWEpO1xuICB9IC8vIEZpeCB3cmFwPVwib2ZmXCIgaXNzdWVcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvNjU3N1xuXG5cbiAgaWYgKHVpVGV4dE5vZGUuZ2V0QXR0cmlidXRlKCd3cmFwJykpIHtcbiAgICBoaWRkZW5UZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ3dyYXAnLCB1aVRleHROb2RlLmdldEF0dHJpYnV0ZSgnd3JhcCcpKTtcbiAgfSBlbHNlIHtcbiAgICBoaWRkZW5UZXh0YXJlYS5yZW1vdmVBdHRyaWJ1dGUoJ3dyYXAnKTtcbiAgfSAvLyBDb3B5IGFsbCBDU1MgcHJvcGVydGllcyB0aGF0IGhhdmUgYW4gaW1wYWN0IG9uIHRoZSBoZWlnaHQgb2YgdGhlIGNvbnRlbnQgaW5cbiAgLy8gdGhlIHRleHRib3hcblxuXG4gIHZhciBfY2FsY3VsYXRlTm9kZVN0eWxpbmcgPSBjYWxjdWxhdGVOb2RlU3R5bGluZyh1aVRleHROb2RlLCB1c2VDYWNoZSksXG4gICAgICBwYWRkaW5nU2l6ZSA9IF9jYWxjdWxhdGVOb2RlU3R5bGluZy5wYWRkaW5nU2l6ZSxcbiAgICAgIGJvcmRlclNpemUgPSBfY2FsY3VsYXRlTm9kZVN0eWxpbmcuYm9yZGVyU2l6ZSxcbiAgICAgIGJveFNpemluZyA9IF9jYWxjdWxhdGVOb2RlU3R5bGluZy5ib3hTaXppbmcsXG4gICAgICBzaXppbmdTdHlsZSA9IF9jYWxjdWxhdGVOb2RlU3R5bGluZy5zaXppbmdTdHlsZTsgLy8gTmVlZCB0byBoYXZlIHRoZSBvdmVyZmxvdyBhdHRyaWJ1dGUgdG8gaGlkZSB0aGUgc2Nyb2xsYmFyIG90aGVyd2lzZVxuICAvLyB0ZXh0LWxpbmVzIHdpbGwgbm90IGNhbGN1bGF0ZWQgcHJvcGVybHkgYXMgdGhlIHNoYWRvdyB3aWxsIHRlY2huaWNhbGx5IGJlXG4gIC8vIG5hcnJvd2VyIGZvciBjb250ZW50XG5cblxuICBoaWRkZW5UZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgXCJcIi5jb25jYXQoc2l6aW5nU3R5bGUsIFwiO1wiKS5jb25jYXQoSElEREVOX1RFWFRBUkVBX1NUWUxFKSk7XG4gIGhpZGRlblRleHRhcmVhLnZhbHVlID0gdWlUZXh0Tm9kZS52YWx1ZSB8fCB1aVRleHROb2RlLnBsYWNlaG9sZGVyIHx8ICcnO1xuICB2YXIgbWluSGVpZ2h0ID0gTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVI7XG4gIHZhciBtYXhIZWlnaHQgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcbiAgdmFyIGhlaWdodCA9IGhpZGRlblRleHRhcmVhLnNjcm9sbEhlaWdodDtcbiAgdmFyIG92ZXJmbG93WTtcblxuICBpZiAoYm94U2l6aW5nID09PSAnYm9yZGVyLWJveCcpIHtcbiAgICAvLyBib3JkZXItYm94OiBhZGQgYm9yZGVyLCBzaW5jZSBoZWlnaHQgPSBjb250ZW50ICsgcGFkZGluZyArIGJvcmRlclxuICAgIGhlaWdodCA9IGhlaWdodCArIGJvcmRlclNpemU7XG4gIH0gZWxzZSBpZiAoYm94U2l6aW5nID09PSAnY29udGVudC1ib3gnKSB7XG4gICAgLy8gcmVtb3ZlIHBhZGRpbmcsIHNpbmNlIGhlaWdodCA9IGNvbnRlbnRcbiAgICBoZWlnaHQgPSBoZWlnaHQgLSBwYWRkaW5nU2l6ZTtcbiAgfVxuXG4gIGlmIChtaW5Sb3dzICE9PSBudWxsIHx8IG1heFJvd3MgIT09IG51bGwpIHtcbiAgICAvLyBtZWFzdXJlIGhlaWdodCBvZiBhIHRleHRhcmVhIHdpdGggYSBzaW5nbGUgcm93XG4gICAgaGlkZGVuVGV4dGFyZWEudmFsdWUgPSAnICc7XG4gICAgdmFyIHNpbmdsZVJvd0hlaWdodCA9IGhpZGRlblRleHRhcmVhLnNjcm9sbEhlaWdodCAtIHBhZGRpbmdTaXplO1xuXG4gICAgaWYgKG1pblJvd3MgIT09IG51bGwpIHtcbiAgICAgIG1pbkhlaWdodCA9IHNpbmdsZVJvd0hlaWdodCAqIG1pblJvd3M7XG5cbiAgICAgIGlmIChib3hTaXppbmcgPT09ICdib3JkZXItYm94Jykge1xuICAgICAgICBtaW5IZWlnaHQgPSBtaW5IZWlnaHQgKyBwYWRkaW5nU2l6ZSArIGJvcmRlclNpemU7XG4gICAgICB9XG5cbiAgICAgIGhlaWdodCA9IE1hdGgubWF4KG1pbkhlaWdodCwgaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBpZiAobWF4Um93cyAhPT0gbnVsbCkge1xuICAgICAgbWF4SGVpZ2h0ID0gc2luZ2xlUm93SGVpZ2h0ICogbWF4Um93cztcblxuICAgICAgaWYgKGJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnKSB7XG4gICAgICAgIG1heEhlaWdodCA9IG1heEhlaWdodCArIHBhZGRpbmdTaXplICsgYm9yZGVyU2l6ZTtcbiAgICAgIH1cblxuICAgICAgb3ZlcmZsb3dZID0gaGVpZ2h0ID4gbWF4SGVpZ2h0ID8gJycgOiAnaGlkZGVuJztcbiAgICAgIGhlaWdodCA9IE1hdGgubWluKG1heEhlaWdodCwgaGVpZ2h0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIG1pbkhlaWdodDogbWluSGVpZ2h0LFxuICAgIG1heEhlaWdodDogbWF4SGVpZ2h0LFxuICAgIG92ZXJmbG93WTogb3ZlcmZsb3dZXG4gIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jYWxjdWxhdGVOb2RlSGVpZ2h0LmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvaW5wdXQvY2FsY3VsYXRlTm9kZUhlaWdodC5qc1xuLy8gbW9kdWxlIGlkID0gNzIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpO1xuXG52YXIgX3Jlc2l6ZU9ic2VydmVyUG9seWZpbGwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZXNpemUtb2JzZXJ2ZXItcG9seWZpbGxcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTsgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG52YXIgUmVhY3RSZXNpemVPYnNlcnZlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUmVhY3RSZXNpemVPYnNlcnZlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUmVhY3RSZXNpemVPYnNlcnZlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVhY3RSZXNpemVPYnNlcnZlcik7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihSZWFjdFJlc2l6ZU9ic2VydmVyKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICBfdGhpcy5yZXNpemVPYnNlcnZlciA9IG51bGw7XG5cbiAgICBfdGhpcy5vblJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBvblJlc2l6ZSA9IF90aGlzLnByb3BzLm9uUmVzaXplO1xuXG4gICAgICBpZiAob25SZXNpemUpIHtcbiAgICAgICAgb25SZXNpemUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFJlYWN0UmVzaXplT2JzZXJ2ZXIsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5vbkNvbXBvbmVudFVwZGF0ZWQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIHRoaXMub25Db21wb25lbnRVcGRhdGVkKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5kZXN0cm95T2JzZXJ2ZXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25Db21wb25lbnRVcGRhdGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ29tcG9uZW50VXBkYXRlZCgpIHtcbiAgICAgIHZhciBkaXNhYmxlZCA9IHRoaXMucHJvcHMuZGlzYWJsZWQ7XG4gICAgICB2YXIgZWxlbWVudCA9ICgwLCBfcmVhY3REb20uZmluZERPTU5vZGUpKHRoaXMpO1xuXG4gICAgICBpZiAoIXRoaXMucmVzaXplT2JzZXJ2ZXIgJiYgIWRpc2FibGVkICYmIGVsZW1lbnQpIHtcbiAgICAgICAgLy8gQWRkIHJlc2l6ZSBvYnNlcnZlclxuICAgICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gbmV3IF9yZXNpemVPYnNlcnZlclBvbHlmaWxsW1wiZGVmYXVsdFwiXSh0aGlzLm9uUmVzaXplKTtcbiAgICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgfSBlbHNlIGlmIChkaXNhYmxlZCkge1xuICAgICAgICAvLyBSZW1vdmUgcmVzaXplIG9ic2VydmVyXG4gICAgICAgIHRoaXMuZGVzdHJveU9ic2VydmVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRlc3Ryb3lPYnNlcnZlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95T2JzZXJ2ZXIoKSB7XG4gICAgICBpZiAodGhpcy5yZXNpemVPYnNlcnZlcikge1xuICAgICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMkY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMkY2hpbGRyZW4gPT09IHZvaWQgMCA/IG51bGwgOiBfdGhpcyRwcm9wcyRjaGlsZHJlbjtcbiAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUmVhY3RSZXNpemVPYnNlcnZlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxudmFyIF9kZWZhdWx0ID0gUmVhY3RSZXNpemVPYnNlcnZlcjtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXNpemVPYnNlcnZlci5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2FudGQvbGliL191dGlsL3Jlc2l6ZU9ic2VydmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA3MjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfSW5wdXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0lucHV0XCIpKTtcblxudmFyIF9pY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vaWNvblwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHt9OyBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgQWN0aW9uTWFwID0ge1xuICBjbGljazogJ29uQ2xpY2snLFxuICBob3ZlcjogJ29uTW91c2VPdmVyJ1xufTtcblxudmFyIFBhc3N3b3JkID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhQYXNzd29yZCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUGFzc3dvcmQoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhc3N3b3JkKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKFBhc3N3b3JkKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgfTtcblxuICAgIF90aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICB2aXNpYmxlOiAhX3RoaXMuc3RhdGUudmlzaWJsZVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQYXNzd29yZCwgW3tcbiAgICBrZXk6IFwiZ2V0SWNvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJY29uKCkge1xuICAgICAgdmFyIF9pY29uUHJvcHM7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgcHJlZml4Q2xzID0gX3RoaXMkcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgIGFjdGlvbiA9IF90aGlzJHByb3BzLmFjdGlvbjtcbiAgICAgIHZhciBpY29uVHJpZ2dlciA9IEFjdGlvbk1hcFthY3Rpb25dIHx8ICcnO1xuICAgICAgdmFyIGljb25Qcm9wcyA9IChfaWNvblByb3BzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfaWNvblByb3BzLCBpY29uVHJpZ2dlciwgdGhpcy5vbkNoYW5nZSksIF9kZWZpbmVQcm9wZXJ0eShfaWNvblByb3BzLCBcImNsYXNzTmFtZVwiLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWljb25cIikpLCBfZGVmaW5lUHJvcGVydHkoX2ljb25Qcm9wcywgXCJ0eXBlXCIsIHRoaXMuc3RhdGUudmlzaWJsZSA/ICdleWUnIDogJ2V5ZS1pbnZpc2libGUnKSwgX2RlZmluZVByb3BlcnR5KF9pY29uUHJvcHMsIFwia2V5XCIsICdwYXNzd29yZEljb24nKSwgX2RlZmluZVByb3BlcnR5KF9pY29uUHJvcHMsIFwib25Nb3VzZURvd25cIiwgZnVuY3Rpb24gb25Nb3VzZURvd24oZSkge1xuICAgICAgICAvLyBQcmV2ZW50IGZvY3VzZWQgc3RhdGUgbG9zdFxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy8xNTE3M1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9KSwgX2ljb25Qcm9wcyk7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfaWNvbltcImRlZmF1bHRcIl0sIGljb25Qcm9wcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSxcbiAgICAgICAgICBwcmVmaXhDbHMgPSBfYS5wcmVmaXhDbHMsXG4gICAgICAgICAgaW5wdXRQcmVmaXhDbHMgPSBfYS5pbnB1dFByZWZpeENscyxcbiAgICAgICAgICBzaXplID0gX2Euc2l6ZSxcbiAgICAgICAgICBzdWZmaXggPSBfYS5zdWZmaXgsXG4gICAgICAgICAgdmlzaWJpbGl0eVRvZ2dsZSA9IF9hLnZpc2liaWxpdHlUb2dnbGUsXG4gICAgICAgICAgcmVzdFByb3BzID0gX19yZXN0KF9hLCBbXCJjbGFzc05hbWVcIiwgXCJwcmVmaXhDbHNcIiwgXCJpbnB1dFByZWZpeENsc1wiLCBcInNpemVcIiwgXCJzdWZmaXhcIiwgXCJ2aXNpYmlsaXR5VG9nZ2xlXCJdKTtcblxuICAgICAgdmFyIHN1ZmZpeEljb24gPSB2aXNpYmlsaXR5VG9nZ2xlICYmIHRoaXMuZ2V0SWNvbigpO1xuICAgICAgdmFyIGlucHV0Q2xhc3NOYW1lID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkocHJlZml4Q2xzLCBjbGFzc05hbWUsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHNpemUpLCAhIXNpemUpKTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9JbnB1dFtcImRlZmF1bHRcIl0sIF9leHRlbmRzKHt9LCByZXN0UHJvcHMsIHtcbiAgICAgICAgdHlwZTogdGhpcy5zdGF0ZS52aXNpYmxlID8gJ3RleHQnIDogJ3Bhc3N3b3JkJyxcbiAgICAgICAgc2l6ZTogc2l6ZSxcbiAgICAgICAgY2xhc3NOYW1lOiBpbnB1dENsYXNzTmFtZSxcbiAgICAgICAgcHJlZml4Q2xzOiBpbnB1dFByZWZpeENscyxcbiAgICAgICAgc3VmZml4OiBzdWZmaXhJY29uXG4gICAgICB9KSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFBhc3N3b3JkO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFBhc3N3b3JkO1xuUGFzc3dvcmQuZGVmYXVsdFByb3BzID0ge1xuICBpbnB1dFByZWZpeENsczogJ2FudC1pbnB1dCcsXG4gIHByZWZpeENsczogJ2FudC1pbnB1dC1wYXNzd29yZCcsXG4gIGFjdGlvbjogJ2NsaWNrJyxcbiAgdmlzaWJpbGl0eVRvZ2dsZTogdHJ1ZVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVBhc3N3b3JkLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvaW5wdXQvUGFzc3dvcmQuanNcbi8vIG1vZHVsZSBpZCA9IDcyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxucmVxdWlyZShcIi4uLy4uL3N0eWxlL2luZGV4LmNzc1wiKTtcblxucmVxdWlyZShcIi4vaW5kZXguY3NzXCIpO1xuXG5yZXF1aXJlKFwiLi4vLi4vZW1wdHkvc3R5bGUvY3NzXCIpO1xuXG5yZXF1aXJlKFwiLi4vLi4vc3Bpbi9zdHlsZS9jc3NcIik7XG5cbnJlcXVpcmUoXCIuLi8uLi9wYWdpbmF0aW9uL3N0eWxlL2Nzc1wiKTtcblxucmVxdWlyZShcIi4uLy4uL2dyaWQvc3R5bGUvY3NzXCIpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3NzLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbGlzdC9zdHlsZS9jc3MuanNcbi8vIG1vZHVsZSBpZCA9IDcyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2xpc3Qvc3R5bGUvaW5kZXguY3NzXG4vLyBtb2R1bGUgaWQgPSA3MjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9lbXB0eS9zdHlsZS9pbmRleC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDcyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxucmVxdWlyZShcIi4uLy4uL3N0eWxlL2luZGV4LmNzc1wiKTtcblxucmVxdWlyZShcIi4vaW5kZXguY3NzXCIpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3NzLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvc3Bpbi9zdHlsZS9jc3MuanNcbi8vIG1vZHVsZSBpZCA9IDcyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3NwaW4vc3R5bGUvaW5kZXguY3NzXG4vLyBtb2R1bGUgaWQgPSA3Mjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnJlcXVpcmUoXCIuLi8uLi9zdHlsZS9pbmRleC5jc3NcIik7XG5cbnJlcXVpcmUoXCIuL2luZGV4LmNzc1wiKTtcblxucmVxdWlyZShcIi4uLy4uL3NlbGVjdC9zdHlsZS9jc3NcIik7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jc3MuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9wYWdpbmF0aW9uL3N0eWxlL2Nzcy5qc1xuLy8gbW9kdWxlIGlkID0gNzI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvcGFnaW5hdGlvbi9zdHlsZS9pbmRleC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDcyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxucmVxdWlyZShcIi4uLy4uL3N0eWxlL2luZGV4LmNzc1wiKTtcblxucmVxdWlyZShcIi4vaW5kZXguY3NzXCIpO1xuXG5yZXF1aXJlKFwiLi4vLi4vZW1wdHkvc3R5bGUvY3NzXCIpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3NzLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvc2VsZWN0L3N0eWxlL2Nzcy5qc1xuLy8gbW9kdWxlIGlkID0gNzMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvc2VsZWN0L3N0eWxlL2luZGV4LmNzc1xuLy8gbW9kdWxlIGlkID0gNzMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5yZXF1aXJlKFwiLi4vLi4vc3R5bGUvaW5kZXguY3NzXCIpO1xuXG5yZXF1aXJlKFwiLi9pbmRleC5jc3NcIik7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jc3MuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9ncmlkL3N0eWxlL2Nzcy5qc1xuLy8gbW9kdWxlIGlkID0gNzMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZ3JpZC9zdHlsZS9pbmRleC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDczM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2J1dHRvbi9zdHlsZS9pbmRleC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDczNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxucmVxdWlyZShcIi4uLy4uL3N0eWxlL2luZGV4LmNzc1wiKTtcblxucmVxdWlyZShcIi4vaW5kZXguY3NzXCIpO1xuXG5yZXF1aXJlKFwiLi4vLi4vYnV0dG9uL3N0eWxlL2Nzc1wiKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNzcy5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2lucHV0L3N0eWxlL2Nzcy5qc1xuLy8gbW9kdWxlIGlkID0gNzM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvaW5wdXQvc3R5bGUvaW5kZXguY3NzXG4vLyBtb2R1bGUgaWQgPSA3MzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5jc3MnO1xuXG5cbmNsYXNzIE5vdEZvdW5kIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAvLyBvbkNsaWNrID0gKCkgPT4ge1xuICAvLyAgIEhpc3RvcnkucHVzaCgnL0hvbWUnKTtcbiAgLy8gfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9yYmlkZGVuV3JhcHBlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcmJpZGRlbklubmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JiaWRkZW5Nb29ufSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcmJpZGRlblRleHRCb3h9PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmZvcmJpZGRlblN0YXR1c30+NDA0PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmZvcmJpZGRlbkVycn0+5b6I5oqx5q2JLOaCqOiuv+mXrueahOmhtemdouaJvuS4jeWIsOS6hjwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdvSG9tZX0gaWQ9XCJyYmFjSW5mb1wiPlxuICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5vbkNsaWNrfT7lm57liLDpppbpobU8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcmJpZGRlbkNsb3VkTGVmdH0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JiaWRkZW5DbG91ZFJpZ2h0fSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+KTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTm90Rm91bmQ7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aWV3L0NvbW1vbi9Ob3RGb3VuZC9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImZvcmJpZGRlbldyYXBwZXJcIjpcIl8yZkNrSEM0UjllSjVVbmFuVjlxOVh1XCIsXCJmb3JiaWRkZW5Jbm5lclwiOlwiXzFxb3lrWHRDN0hqUTlJSGVkdl9fQ0JcIixcImdvSG9tZVwiOlwiaUJILU8xWFpLaUNKZzVESGc4dkVjXCIsXCJmb3JiaWRkZW5Nb29uXCI6XCJfM1VzdzdiTTRqYTZTMndPTjhjQmJpWFwiLFwiZm9yYmlkZGVuVGV4dEJveFwiOlwiXzJqdHRGQXVadU00bEdIcHpCTXFmeUNcIixcImZvcmJpZGRlblN0YXR1c1wiOlwiXzFBWmNiNEd0OFdTSUF3bXBuOHQ2N1BcIixcImZvcmJpZGRlbkVyclwiOlwiXzI5b1NZRzlpZHJqdHRKS3BJN09lLUZcIixcImZvcmJpZGRlblJiYWNJbmZvXCI6XCJfMW1JQklHRnZOWmY1U013R0lpU09PblwiLFwiZm9yYmlkZGVuVGl0bGVcIjpcIl8yQVJrYlRNOEl3Q19XNlNwdkwybUJQXCIsXCJmb3JiaWRkZW5SYmFjTmFtZVwiOlwiXzNLa1htXzU4bU9hVTctWUxXLTYxSElcIixcImZvcmJpZGRlbkVtYWlsXCI6XCJfMmR5X3dEcEZYQ0V0aHFrOWtQdWtja1wiLFwiZm9yYmlkZGVuQnRuXCI6XCJfMlRFSUxiTWYwNW9tRDE3aUhMbUpJLVwiLFwiZm9yYmlkZGVuQnRuQmFja1wiOlwiXzNpUHRJT0hELUdhVU9ZX29RZkI1VElcIixcImZvcmJpZGRlbkNsb3VkTGVmdFwiOlwiXzFqRDgwUk9RTGVQaEpMWHhVLXZ1bVZcIixcImZvcmJpZGRlbkNsb3VkUmlnaHRcIjpcIlNjUS1MOWVwN19xRlRnUHlBT1p3WlwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3L0NvbW1vbi9Ob3RGb3VuZC9pbmRleC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDczOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudHVwbGVOdW0gPSBleHBvcnRzLnR1cGxlID0gdm9pZCAwO1xuXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80NjE3NjE2NS93YXlzLXRvLWdldC1zdHJpbmctbGl0ZXJhbC10eXBlLW9mLWFycmF5LXZhbHVlcy13aXRob3V0LWVudW0tb3ZlcmhlYWRcbnZhciB0dXBsZSA9IGZ1bmN0aW9uIHR1cGxlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGFyZ3M7XG59O1xuXG5leHBvcnRzLnR1cGxlID0gdHVwbGU7XG5cbnZhciB0dXBsZU51bSA9IGZ1bmN0aW9uIHR1cGxlTnVtKCkge1xuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cblxuICByZXR1cm4gYXJncztcbn07XG5cbmV4cG9ydHMudHVwbGVOdW0gPSB0dXBsZU51bTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXR5cGUuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9fdXRpbC90eXBlLmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9