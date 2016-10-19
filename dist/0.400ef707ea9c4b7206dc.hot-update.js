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
	      console.log("THIS.PROPS ", this.props);
	      return _react3.default.createElement(
	        "div",
	        null,
	        _react3.default.createElement(
	          "div",
	          null,
	          "Hi, this is my react/redux app component, ",
	          this.props.username
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

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9BcHAuanN4PzRjYzgiXSwibmFtZXMiOlsiYWN0aW9ucyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwib3duUHJvcHMiLCJjb25zb2xlIiwibG9nIiwidXNlciIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwicHJvcHMiLCJ1c2VybmFtZSIsIkFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7QUFDQTs7QUFDQTs7S0FBWUEsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUpaO0FBQ0E7OztBQUtBO0FBQ0E7QUFDQSxVQUFTQyxlQUFULENBQXlCQyxLQUF6QixFQUFnQ0MsUUFBaEMsRUFBMEM7QUFDeENDLFdBQVFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCSCxNQUFNSSxJQUE1QjtBQUNBRixXQUFRQyxHQUFSLENBQVksWUFBWixFQUEwQkYsUUFBMUI7QUFDQSxVQUFPO0FBQ0xHLFdBQU1KLE1BQU1JO0FBRFAsSUFBUDtBQUdEO0FBQ0Q7QUFDQSxVQUFTQyxrQkFBVCxDQUE0QkMsUUFBNUIsRUFBc0M7QUFDcENKLFdBQVFDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCRyxRQUF6QjtBQUNBLFVBQU8sK0JBQW1CUixPQUFuQixFQUE0QlEsUUFBNUIsQ0FBUDtBQUNEOzs7Ozs7Ozs7Ozs7OzhCQUdVO0FBQ0NKLGVBQVFDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCLEtBQUtJLEtBQWhDO0FBQ1IsY0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFnRCxnQkFBS0EsS0FBTCxDQUFXQztBQUEzRDtBQURGLFFBREY7QUFNRDs7Ozs7O0FBR0g7OztBQUNBQyxPQUFNLHlCQUFRVixlQUFSLEVBQXlCTSxrQkFBekIsRUFBNkNJLEdBQTdDLENBQU47O21CQUVlQSxHIiwiZmlsZSI6IjAuNDAwZWY3MDdlYTljNGI3MjA2ZGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbi8vIHVzZSBjb25uZWN0IHNpbmNlIHdlIGFyZSB3cmFwcGluZyBjb21waW5lbnRzIGluIDxQcm92aWRlcj5cbi8vIGNvbm5lY3RzIGEgUmVhY3QgY29tcG9uZW50IHRvIFJlZHV4IHN0b3JlLlxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuLi9hY3Rpb25zL2FjdGlvbnNcIjtcblxuLy8gVGhlIG1hcFN0YXRlVG9Qcm9wcyBmdW5jdGlvbiB0YWtlcyBhIHNpbmdsZSBhcmd1bWVudCBvZiB0aGUgZW50aXJlIFJlZHV4IHN0b3Jl4oCZcyBzdGF0ZSBhbmQgcmV0dXJucyBhbiBvYmplY3QgdG8gYmUgcGFzc2VkIGFzIHByb3BzLlxuLy8gSXQgaXMgb2Z0ZW4gY2FsbGVkIGEgc2VsZWN0b3IuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gIGNvbnNvbGUubG9nKFwiU1RBVEUgXCIsIHN0YXRlLnVzZXIpO1xuICBjb25zb2xlLmxvZyhcIk9XTiBQUk9QUyBcIiwgb3duUHJvcHMpO1xuICByZXR1cm4ge1xuICAgIHVzZXI6IHN0YXRlLnVzZXJcbiAgfTtcbn1cbi8vIGluamVjdCBhbGwgYWN0aW9ucyBhcyBhY3Rpb25zLlxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gIGNvbnNvbGUubG9nKFwiRElTUEFUQ0ggXCIsIGRpc3BhdGNoKTtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25zLCBkaXNwYXRjaCk7XG59XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVEhJUy5QUk9QUyBcIiwgdGhpcy5wcm9wcyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+SGksIHRoaXMgaXMgbXkgcmVhY3QvcmVkdXggYXBwIGNvbXBvbmVudCwge3RoaXMucHJvcHMudXNlcm5hbWV9PC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLy8gSXQgbmVlZHMgdG8gYmUgaW52b2tlZCB0d28gdGltZXMuIFRoZSBmaXJzdCB0aW1lIHdpdGggaXRzIGFyZ3VtZW50cyBkZXNjcmliZWQgYWJvdmUsIGFuZCBhIHNlY29uZCB0aW1lLCB3aXRoIHRoZSBjb21wb25lbnRcbkFwcCA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFwcClcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hcHAvY29tcG9uZW50cy9BcHAuanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==