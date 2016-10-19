webpackHotUpdate(0,{

/***/ 201:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(142);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _App = __webpack_require__(202);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _reactRedux = __webpack_require__(326);
	
	var _reactRouter = __webpack_require__(345);
	
	var _store = __webpack_require__(205);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var app = document.getElementById('app');
	
	var routes = _react2.default.createElement(
	  _reactRedux.Provider,
	  { store: _store2.default },
	  _react2.default.createElement(_App2.default, null)
	);
	
	_reactDom2.default.render(routes, app);

/***/ },

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
	
	
	// The mapStateToProps function takes a single argument of the entire Redux store’s state and returns an object to be passed as props.
	// It is often called a selector.
	function mapStateToProps(state, ownProps) {
	  console.log("STATE ", state.user);
	  console.log("OWN PROPS ", ownProps);
	  return {
	    user: state.user
	  };
	}
	// inject all actions as actions.
	function mapDispatchToProps(dispatch) {
	  console.log("DISPATCH ", dispatch);
	  return (0, _redux.bindActionCreators)(actions, dispatch);
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
	      console.log("THIS.PROPS ", this.props.user.name);
	      return _react3.default.createElement(
	        "div",
	        null,
	        _react3.default.createElement(
	          "div",
	          null,
	          "Hi, this is my react/redux app component, ",
	          this.props.user.name
	        )
	      );
	    }
	  }]);
	
	  return App;
	}(_react2.Component));
	
	// It needs to be invoked two times. The first time with its arguments described above, and a second time, with the component
	
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvTWFpbi5qc3g/YmU0MyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9BcHAuanN4PzRjYzgiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FjdGlvbnMvYWN0aW9ucy5qcz8zYWFkIl0sIm5hbWVzIjpbImFwcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb3V0ZXMiLCJyZW5kZXIiLCJhY3Rpb25zIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJvd25Qcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJwcm9wcyIsIm5hbWUiLCJBcHAiLCJjaGFuZ2VOYW1lIiwiY2hhbmdlUGFzc3dvcmQiLCJ0eXBlIiwicGF5bG9hZCIsInBhc3N3b3JkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLEtBQU1BLE1BQU1DLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBWjs7QUFFQSxLQUFNQyxTQUNKO0FBQUE7QUFBQSxLQUFVLHNCQUFWO0FBQ0U7QUFERixFQURGOztBQU1BLG9CQUFTQyxNQUFULENBQ0VELE1BREYsRUFFRUgsR0FGRixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7O0FBQ0E7O0FBQ0E7O0tBQVlLLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFKWjtBQUNBOzs7QUFLQTtBQUNBO0FBQ0EsVUFBU0MsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0NDLFFBQWhDLEVBQTBDO0FBQ3hDQyxXQUFRQyxHQUFSLENBQVksUUFBWixFQUFzQkgsTUFBTUksSUFBNUI7QUFDQUYsV0FBUUMsR0FBUixDQUFZLFlBQVosRUFBMEJGLFFBQTFCO0FBQ0EsVUFBTztBQUNMRyxXQUFNSixNQUFNSTtBQURQLElBQVA7QUFHRDtBQUNEO0FBQ0EsVUFBU0Msa0JBQVQsQ0FBNEJDLFFBQTVCLEVBQXNDO0FBQ3BDSixXQUFRQyxHQUFSLENBQVksV0FBWixFQUF5QkcsUUFBekI7QUFDQSxVQUFPLCtCQUFtQlIsT0FBbkIsRUFBNEJRLFFBQTVCLENBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs4QkFHVTtBQUNDSixlQUFRQyxHQUFSLENBQVksYUFBWixFQUEyQixLQUFLSSxLQUFMLENBQVdILElBQVgsQ0FBZ0JJLElBQTNDO0FBQ1IsY0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFnRCxnQkFBS0QsS0FBTCxDQUFXSCxJQUFYLENBQWdCSTtBQUFoRTtBQURGLFFBREY7QUFNRDs7Ozs7O0FBR0g7OztBQUNBQyxPQUFNLHlCQUFRVixlQUFSLEVBQXlCTSxrQkFBekIsRUFBNkNJLEdBQTdDLENBQU47O21CQUVlQSxHOzs7Ozs7Ozs7Ozs7O1NDbENDQyxVLEdBQUFBLFU7U0FTQUMsYyxHQUFBQSxjOztBQVpoQjs7Ozs7O0FBR08sVUFBU0QsVUFBVCxDQUFvQkYsSUFBcEIsRUFBMEI7QUFDL0IsVUFBTztBQUNMSSxXQUFNLGFBREQ7QUFFTEMsY0FBUztBQUNQTCxhQUFNQTtBQURDO0FBRkosSUFBUDtBQU1EOztBQUVNLFVBQVNHLGNBQVQsQ0FBd0JHLFFBQXhCLEVBQWtDO0FBQ3ZDLFVBQU87QUFDTEYsV0FBTSxpQkFERDtBQUVMQyxjQUFTO0FBQ1BDLGlCQUFVQTtBQURIO0FBRkosSUFBUDtBQU1ELEUiLCJmaWxlIjoiMC5kYzFmOTgwY2JhYmVjZTlmYTRjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vY29tcG9uZW50cy9BcHBcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBJbmRleFJvdXRlLCBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4vc3RvcmVcIjtcblxuY29uc3QgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuXG5jb25zdCByb3V0ZXMgPSAoXG4gIDxQcm92aWRlciBzdG9yZT17IHN0b3JlIH0+XG4gICAgPEFwcCAvPlxuICA8L1Byb3ZpZGVyPlxuKTtcblxuUmVhY3RET00ucmVuZGVyKFxuICByb3V0ZXMsXG4gIGFwcFxuKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYXBwL01haW4uanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuLy8gdXNlIGNvbm5lY3Qgc2luY2Ugd2UgYXJlIHdyYXBwaW5nIGNvbXBpbmVudHMgaW4gPFByb3ZpZGVyPlxuLy8gY29ubmVjdHMgYSBSZWFjdCBjb21wb25lbnQgdG8gUmVkdXggc3RvcmUuXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4uL2FjdGlvbnMvYWN0aW9uc1wiO1xuXG4vLyBUaGUgbWFwU3RhdGVUb1Byb3BzIGZ1bmN0aW9uIHRha2VzIGEgc2luZ2xlIGFyZ3VtZW50IG9mIHRoZSBlbnRpcmUgUmVkdXggc3RvcmXigJlzIHN0YXRlIGFuZCByZXR1cm5zIGFuIG9iamVjdCB0byBiZSBwYXNzZWQgYXMgcHJvcHMuXG4vLyBJdCBpcyBvZnRlbiBjYWxsZWQgYSBzZWxlY3Rvci5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgY29uc29sZS5sb2coXCJTVEFURSBcIiwgc3RhdGUudXNlcik7XG4gIGNvbnNvbGUubG9nKFwiT1dOIFBST1BTIFwiLCBvd25Qcm9wcyk7XG4gIHJldHVybiB7XG4gICAgdXNlcjogc3RhdGUudXNlclxuICB9O1xufVxuLy8gaW5qZWN0IGFsbCBhY3Rpb25zIGFzIGFjdGlvbnMuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgY29uc29sZS5sb2coXCJESVNQQVRDSCBcIiwgZGlzcGF0Y2gpO1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbnMsIGRpc3BhdGNoKTtcbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUSElTLlBST1BTIFwiLCB0aGlzLnByb3BzLnVzZXIubmFtZSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+SGksIHRoaXMgaXMgbXkgcmVhY3QvcmVkdXggYXBwIGNvbXBvbmVudCwge3RoaXMucHJvcHMudXNlci5uYW1lfTwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8vIEl0IG5lZWRzIHRvIGJlIGludm9rZWQgdHdvIHRpbWVzLiBUaGUgZmlyc3QgdGltZSB3aXRoIGl0cyBhcmd1bWVudHMgZGVzY3JpYmVkIGFib3ZlLCBhbmQgYSBzZWNvbmQgdGltZSwgd2l0aCB0aGUgY29tcG9uZW50XG5BcHAgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBcHApXG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYXBwL2NvbXBvbmVudHMvQXBwLmpzeFxuICoqLyIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlTmFtZShuYW1lKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogXCJDSEFOR0VfTkFNRVwiLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIG5hbWU6IG5hbWVcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VQYXNzd29yZChwYXNzd29yZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFwiQ0hBTkdFX1BBU1NXT1JEXCIsXG4gICAgcGF5bG9hZDoge1xuICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgfVxuICB9O1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hcHAvYWN0aW9ucy9hY3Rpb25zLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==