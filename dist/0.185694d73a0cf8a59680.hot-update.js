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
	
	    console.log("constructor props ", props);
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

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luLmpzeD81NDFlIl0sIm5hbWVzIjpbInByb3BzIiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwibmFtZSIsInVzZXIiLCJwYXNzd29yZCIsImNoYW5nZU5hbWUiLCJoYW5kbGVDbGljayIsImJpbmQiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCIsIkxvZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHRSxrQkFBWUEsS0FBWixFQUFtQjtBQUFBOztBQUFBLCtHQUNYQSxLQURXOztBQUVqQkMsYUFBUUMsR0FBUixDQUFZLG9CQUFaLEVBQWtDRixLQUFsQztBQUNBLFdBQUtHLEtBQUwsR0FBYTtBQUNYQyxhQUFNSixNQUFNSyxJQUFOLENBQVdELElBRE47QUFFWEUsaUJBQVVOLE1BQU1LLElBQU4sQ0FBV0MsUUFGVjtBQUdYQyxtQkFBWVAsTUFBTU87QUFIUCxNQUFiO0FBS0EsV0FBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixPQUFuQjtBQUNBO0FBVGlCO0FBVWxCOzs7O21DQUNhO0FBQ1osV0FBSUwsT0FBTyxRQUFYO0FBQ0EsWUFBS0QsS0FBTCxDQUFXSSxVQUFYLENBQXNCSCxJQUF0QjtBQUNBLFlBQUtNLFFBQUwsQ0FBYyxFQUFDTixNQUFLQSxJQUFOLEVBQWQ7QUFDRDs7OzhCQUVRO0FBQ1BILGVBQVFDLEdBQVIsQ0FBWSxLQUFLQyxLQUFMLENBQVdDLElBQXZCO0FBQ0EsY0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFFRTtBQUFBO0FBQUEsYUFBUSxTQUFTLEtBQUtJLFdBQXRCO0FBQUE7QUFBQSxVQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUksZ0JBQUtMLEtBQUwsQ0FBV0M7QUFBZjtBQUhGLFFBREY7QUFPRDs7OztHQTNCaUIsZ0JBQU1PLFM7O0FBOEIxQjtBQUNBO0FBQ0E7O21CQUVlQyxLIiwiZmlsZSI6IjAuMTg1Njk0ZDczYTBjZjhhNTk2ODAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgTG9naW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zb2xlLmxvZyhcImNvbnN0cnVjdG9yIHByb3BzIFwiLCBwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6IHByb3BzLnVzZXIubmFtZSxcbiAgICAgIHBhc3N3b3JkOiBwcm9wcy51c2VyLnBhc3N3b3JkLFxuICAgICAgY2hhbmdlTmFtZTogcHJvcHMuY2hhbmdlTmFtZVxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICAvLyBwcm9wcy5jaGFuZ2VOYW1lID0gdGhpcy5wcm9wcy5jaGFuZ2VOYW1lLmJpbmQodGhpcyk7XG4gIH1cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgdmFyIG5hbWUgPSBcIkphbmljZVwiO1xuICAgIHRoaXMuc3RhdGUuY2hhbmdlTmFtZShuYW1lKTtcbiAgICB0aGlzLnNldFN0YXRlKHtuYW1lOm5hbWV9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm5hbWUpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PkhlbGxvPC9kaXY+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+cHJlc3M8L2J1dHRvbj5cbiAgICAgICAgPHA+e3RoaXMuc3RhdGUubmFtZX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8vIExvZ2luLnByb3B0eXBlcyA9IHtcbi8vICAgbmFtZTogUmVhY3QucHJvcHR5cGVzLnN0cmluZ1xuLy8gfTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvbXBvbmVudHMvTG9naW4uanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==