webpackHotUpdate(0,{

/***/ 202:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _index = __webpack_require__(428);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(351);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(6);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(352);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _reactRedux = __webpack_require__(326);
	
	var _redux = __webpack_require__(102);
	
	var _actions = __webpack_require__(451);
	
	var actions = _interopRequireWildcard(_actions);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	  App: {
	    displayName: "App"
	  }
	};
	
	var _UsersJimbotDropboxMAKERSQUAREGardenNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: "/Users/jimbot/Dropbox/MAKERSQUARE/garden/app/components/App.jsx",
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	var _UsersJimbotDropboxMAKERSQUAREGardenNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: "/Users/jimbot/Dropbox/MAKERSQUARE/garden/app/components/App.jsx",
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersJimbotDropboxMAKERSQUAREGardenNode_modulesReactTransformHmrLibIndexJs2(_UsersJimbotDropboxMAKERSQUAREGardenNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}
	// use connect since we are wrapping compinents in <Provider>
	// connects a React component to Redux store.
	
	
	function mapStateToProps(state) {
	  return {
	    username: state.name,
	    password: state.password
	  };
	}
	
	function mapDispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)(actionCreators, dispatch);
	}
	
	var App = _wrapComponent("App")(function (_Component) {
	  _inherits(App, _Component);
	
	  function App() {
	    _classCallCheck(this, App);
	
	    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	  }
	
	  _createClass(App, [{
	    key: "render",
	    value: function render() {
	      return _react3.default.createElement(
	        "div",
	        null,
	        "Hi, this is my react/redux app component"
	      );
	    }
	  }]);
	
	  return App;
	}(_react2.Component));
	
	App = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);
	
	exports.default = App;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(64)(module)))

/***/ },

/***/ 451:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.changeName = changeName;
	exports.changePassword = changePassword;
	
	var _axios = __webpack_require__(183);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function changeName(name) {
	  return {
	    type: "CHANGE_NAME",
	    payload: {
	      name: name
	    }
	  };
	}
	
	function changePassword(password) {
	  return {
	    type: "CHANGE_PASSWORD",
	    payload: {
	      password: password
	    }
	  };
	}

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9BcHAuanN4PzRjYzgiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FjdGlvbnMvYWN0aW9ucy5qcz8zYWFkIl0sIm5hbWVzIjpbImFjdGlvbnMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInVzZXJuYW1lIiwibmFtZSIsInBhc3N3b3JkIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJhY3Rpb25DcmVhdG9ycyIsIkFwcCIsImNoYW5nZU5hbWUiLCJjaGFuZ2VQYXNzd29yZCIsInR5cGUiLCJwYXlsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOztBQUNBOztBQUNBOztLQUFZQSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSlo7QUFDQTs7O0FBS0EsVUFBU0MsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0M7QUFDOUIsVUFBTztBQUNMQyxlQUFVRCxNQUFNRSxJQURYO0FBRUxDLGVBQVVILE1BQU1HO0FBRlgsSUFBUDtBQUlEOztBQUVELFVBQVNDLGtCQUFULENBQTRCQyxRQUE1QixFQUFzQztBQUNwQyxVQUFPLCtCQUFtQkMsY0FBbkIsRUFBbUNELFFBQW5DLENBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs4QkFHVTtBQUNQLGNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGO0FBR0Q7Ozs7OztBQUdIRSxPQUFNLHlCQUFRUixlQUFSLEVBQXlCSyxrQkFBekIsRUFBNkNHLEdBQTdDLENBQU47O21CQUVlQSxHOzs7Ozs7Ozs7Ozs7O1NDekJDQyxVLEdBQUFBLFU7U0FTQUMsYyxHQUFBQSxjOztBQVpoQjs7Ozs7O0FBR08sVUFBU0QsVUFBVCxDQUFvQk4sSUFBcEIsRUFBMEI7QUFDL0IsVUFBTztBQUNMUSxXQUFNLGFBREQ7QUFFTEMsY0FBUztBQUNQVCxhQUFNQTtBQURDO0FBRkosSUFBUDtBQU1EOztBQUVNLFVBQVNPLGNBQVQsQ0FBd0JOLFFBQXhCLEVBQWtDO0FBQ3ZDLFVBQU87QUFDTE8sV0FBTSxpQkFERDtBQUVMQyxjQUFTO0FBQ1BSLGlCQUFVQTtBQURIO0FBRkosSUFBUDtBQU1ELEUiLCJmaWxlIjoiMC5hYzhlZjY1ZDBkMDNlODJjNGRhYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuLy8gdXNlIGNvbm5lY3Qgc2luY2Ugd2UgYXJlIHdyYXBwaW5nIGNvbXBpbmVudHMgaW4gPFByb3ZpZGVyPlxuLy8gY29ubmVjdHMgYSBSZWFjdCBjb21wb25lbnQgdG8gUmVkdXggc3RvcmUuXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4uL2FjdGlvbnMvYWN0aW9uc1wiO1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICB1c2VybmFtZTogc3RhdGUubmFtZSxcbiAgICBwYXNzd29yZDogc3RhdGUucGFzc3dvcmRcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKTtcbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PkhpLCB0aGlzIGlzIG15IHJlYWN0L3JlZHV4IGFwcCBjb21wb25lbnQ8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkFwcCA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFwcClcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hcHAvY29tcG9uZW50cy9BcHAuanN4XG4gKiovIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VOYW1lKG5hbWUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBcIkNIQU5HRV9OQU1FXCIsXG4gICAgcGF5bG9hZDoge1xuICAgICAgbmFtZTogbmFtZVxuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVBhc3N3b3JkKHBhc3N3b3JkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogXCJDSEFOR0VfUEFTU1dPUkRcIixcbiAgICBwYXlsb2FkOiB7XG4gICAgICBwYXNzd29yZDogcGFzc3dvcmRcbiAgICB9XG4gIH07XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2FwcC9hY3Rpb25zL2FjdGlvbnMuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9