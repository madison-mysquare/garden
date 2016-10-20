webpackHotUpdate(0,{

/***/ 209:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _index = __webpack_require__(105);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(81);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(6);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(82);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	  Login: {
	    displayName: "Login"
	  }
	};
	
	var _UsersJimbotDropboxMAKERSQUAREGardenNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: "/Users/jimbot/Dropbox/MAKERSQUARE/garden/app/components/Login.jsx",
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	var _UsersJimbotDropboxMAKERSQUAREGardenNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: "/Users/jimbot/Dropbox/MAKERSQUARE/garden/app/components/Login.jsx",
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersJimbotDropboxMAKERSQUAREGardenNode_modulesReactTransformHmrLibIndexJs2(_UsersJimbotDropboxMAKERSQUAREGardenNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}
	
	var Login = _wrapComponent("Login")(function (_React$Component) {
	  _inherits(Login, _React$Component);
	
	  function Login(props) {
	    _classCallCheck(this, Login);
	
	    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));
	
	    console.log("constructor props ", _this);
	    _this.state = {
	      name: props.user.name,
	      password: props.user.password,
	      changeName: props.changeName
	    };
	    _this.handleClick = _this.handleClick.bind(_this);
	    // props.changeName = this.props.changeName.bind(this);
	    return _this;
	  }
	
	  _createClass(Login, [{
	    key: "handleClick",
	    value: function handleClick() {
	      var name = "Janice";
	      this.state.changeName(name);
	      this.setState({ name: name });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      console.log(this.state.name);
	      return _react3.default.createElement(
	        "div",
	        null,
	        _react3.default.createElement(
	          "div",
	          null,
	          "Hello"
	        ),
	        _react3.default.createElement(
	          "button",
	          { onClick: this.handleClick },
	          "press"
	        ),
	        _react3.default.createElement(
	          "p",
	          null,
	          this.state.name
	        )
	      );
	    }
	  }]);
	
	  return Login;
	}(_react3.default.Component));
	
	// Login.proptypes = {
	//   name: React.proptypes.string
	// };
	
	exports.default = Login;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(36)(module)))

/***/ },

/***/ 210:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(147);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _App = __webpack_require__(113);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _Login = __webpack_require__(209);
	
	var _Login2 = _interopRequireDefault(_Login);
	
	var _reactRedux = __webpack_require__(149);
	
	var _reactRouter = __webpack_require__(157);
	
	var _routes = __webpack_require__(213);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _store = __webpack_require__(214);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var app = document.getElementById('app');
	console.log("hello");
	
	var router = _react2.default.createElement(
	  _reactRedux.Provider,
	  { store: _store2.default },
	  _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.browserHistory },
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: "/", component: _App2.default },
	      _react2.default.createElement(_reactRouter.IndexRoute, { component: _Login2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: "dashboard", component: Dashboard })
	    )
	  )
	);
	
	_reactDom2.default.render(router, app);

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luLmpzeD81NDFlIiwid2VicGFjazovLy8uL21haW4uanM/N2EyYiJdLCJuYW1lcyI6WyJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsIm5hbWUiLCJ1c2VyIiwicGFzc3dvcmQiLCJjaGFuZ2VOYW1lIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwic2V0U3RhdGUiLCJDb21wb25lbnQiLCJMb2dpbiIsImFwcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb3V0ZXIiLCJEYXNoYm9hcmQiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdFLGtCQUFZQSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsK0dBQ1hBLEtBRFc7O0FBRWpCQyxhQUFRQyxHQUFSLENBQVksb0JBQVo7QUFDQSxXQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTUosTUFBTUssSUFBTixDQUFXRCxJQUROO0FBRVhFLGlCQUFVTixNQUFNSyxJQUFOLENBQVdDLFFBRlY7QUFHWEMsbUJBQVlQLE1BQU1PO0FBSFAsTUFBYjtBQUtBLFdBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbkI7QUFDQTtBQVRpQjtBQVVsQjs7OzttQ0FDYTtBQUNaLFdBQUlMLE9BQU8sUUFBWDtBQUNBLFlBQUtELEtBQUwsQ0FBV0ksVUFBWCxDQUFzQkgsSUFBdEI7QUFDQSxZQUFLTSxRQUFMLENBQWMsRUFBQ04sTUFBS0EsSUFBTixFQUFkO0FBQ0Q7Ozs4QkFFUTtBQUNQSCxlQUFRQyxHQUFSLENBQVksS0FBS0MsS0FBTCxDQUFXQyxJQUF2QjtBQUNBLGNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBRUU7QUFBQTtBQUFBLGFBQVEsU0FBUyxLQUFLSSxXQUF0QjtBQUFBO0FBQUEsVUFGRjtBQUdFO0FBQUE7QUFBQTtBQUFJLGdCQUFLTCxLQUFMLENBQVdDO0FBQWY7QUFIRixRQURGO0FBT0Q7Ozs7R0EzQmlCLGdCQUFNTyxTOztBQThCMUI7QUFDQTtBQUNBOzttQkFFZUMsSzs7Ozs7Ozs7OztBQ3BDZjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLEtBQU1DLE1BQU1DLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBWjtBQUNBZCxTQUFRQyxHQUFSLENBQVksT0FBWjs7QUFFQSxLQUFNYyxTQUNKO0FBQUE7QUFBQSxLQUFVLHNCQUFWO0FBQ0U7QUFBQTtBQUFBLE9BQVEsb0NBQVI7QUFDRTtBQUFBO0FBQUEsU0FBTyxNQUFLLEdBQVosRUFBZ0Isd0JBQWhCO0FBQ0EsZ0VBQVksMEJBQVosR0FEQTtBQUVBLDJEQUFPLE1BQUssV0FBWixFQUF3QixXQUFXQyxTQUFuQztBQUZBO0FBREY7QUFERixFQURGOztBQVlBLG9CQUFTQyxNQUFULENBQ0VGLE1BREYsRUFFRUgsR0FGRixFIiwiZmlsZSI6IjAuMGJkNDA3OGNlMmY5OTk5OGJhMzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgTG9naW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zb2xlLmxvZyhcImNvbnN0cnVjdG9yIHByb3BzIFwiLCB0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogcHJvcHMudXNlci5uYW1lLFxuICAgICAgcGFzc3dvcmQ6IHByb3BzLnVzZXIucGFzc3dvcmQsXG4gICAgICBjaGFuZ2VOYW1lOiBwcm9wcy5jaGFuZ2VOYW1lXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgIC8vIHByb3BzLmNoYW5nZU5hbWUgPSB0aGlzLnByb3BzLmNoYW5nZU5hbWUuYmluZCh0aGlzKTtcbiAgfVxuICBoYW5kbGVDbGljaygpIHtcbiAgICB2YXIgbmFtZSA9IFwiSmFuaWNlXCI7XG4gICAgdGhpcy5zdGF0ZS5jaGFuZ2VOYW1lKG5hbWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe25hbWU6bmFtZX0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubmFtZSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+SGVsbG88L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5wcmVzczwvYnV0dG9uPlxuICAgICAgICA8cD57dGhpcy5zdGF0ZS5uYW1lfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLy8gTG9naW4ucHJvcHR5cGVzID0ge1xuLy8gICBuYW1lOiBSZWFjdC5wcm9wdHlwZXMuc3RyaW5nXG4vLyB9O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29tcG9uZW50cy9Mb2dpbi5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9jb21wb25lbnRzL0FwcFwiO1xuaW1wb3J0IExvZ2luIGZyb20gXCIuL2NvbXBvbmVudHMvTG9naW5cIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBJbmRleFJvdXRlLCBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgcm91dGVzIGZyb20gXCIuL3JvdXRlc1wiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuL3N0b3JlXCI7XG5cbmNvbnN0IGFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcbmNvbnNvbGUubG9nKFwiaGVsbG9cIilcblxuY29uc3Qgcm91dGVyID0gKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8Um91dGVyIGhpc3Rvcnk9e2Jyb3dzZXJIaXN0b3J5fT5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17QXBwfT5cbiAgICAgIDxJbmRleFJvdXRlIGNvbXBvbmVudD17TG9naW59IC8+XG4gICAgICA8Um91dGUgcGF0aD1cImRhc2hib2FyZFwiIGNvbXBvbmVudD17RGFzaGJvYXJkfS8+XG4gICAgICA8L1JvdXRlPlxuICAgIDwvUm91dGVyPlxuICA8L1Byb3ZpZGVyPlxuXG4pO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIHJvdXRlcixcbiAgYXBwXG4pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9tYWluLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==