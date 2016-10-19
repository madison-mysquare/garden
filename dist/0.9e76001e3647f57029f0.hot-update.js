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

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9BcHAuanN4PzRjYzgiXSwibmFtZXMiOlsiYWN0aW9ucyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwib3duUHJvcHMiLCJjb25zb2xlIiwibG9nIiwidXNlciIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwicHJvcHMiLCJuYW1lIiwiQXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOztBQUNBOztBQUNBOztLQUFZQSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSlo7QUFDQTs7O0FBS0E7QUFDQTtBQUNBLFVBQVNDLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQWdDQyxRQUFoQyxFQUEwQztBQUN4Q0MsV0FBUUMsR0FBUixDQUFZLFFBQVosRUFBc0JILE1BQU1JLElBQTVCO0FBQ0FGLFdBQVFDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCRixRQUExQjtBQUNBLFVBQU87QUFDTEcsV0FBTUosTUFBTUk7QUFEUCxJQUFQO0FBR0Q7QUFDRDtBQUNBLFVBQVNDLGtCQUFULENBQTRCQyxRQUE1QixFQUFzQztBQUNwQ0osV0FBUUMsR0FBUixDQUFZLFdBQVosRUFBeUJHLFFBQXpCO0FBQ0EsVUFBTywrQkFBbUJSLE9BQW5CLEVBQTRCUSxRQUE1QixDQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7OEJBR1U7QUFDQ0osZUFBUUMsR0FBUixDQUFZLGFBQVosRUFBMkIsS0FBS0ksS0FBTCxDQUFXSCxJQUFYLENBQWdCSSxJQUEzQztBQUNSLGNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBZ0QsZ0JBQUtELEtBQUwsQ0FBV0gsSUFBWCxDQUFnQkk7QUFBaEU7QUFERixRQURGO0FBTUQ7Ozs7OztBQUdIOzs7QUFDQUMsT0FBTSx5QkFBUVYsZUFBUixFQUF5Qk0sa0JBQXpCLEVBQTZDSSxHQUE3QyxDQUFOOzttQkFFZUEsRyIsImZpbGUiOiIwLjllNzYwMDFlMzY0N2Y1NzAyOWYwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG4vLyB1c2UgY29ubmVjdCBzaW5jZSB3ZSBhcmUgd3JhcHBpbmcgY29tcGluZW50cyBpbiA8UHJvdmlkZXI+XG4vLyBjb25uZWN0cyBhIFJlYWN0IGNvbXBvbmVudCB0byBSZWR1eCBzdG9yZS5cbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tIFwiLi4vYWN0aW9ucy9hY3Rpb25zXCI7XG5cbi8vIFRoZSBtYXBTdGF0ZVRvUHJvcHMgZnVuY3Rpb24gdGFrZXMgYSBzaW5nbGUgYXJndW1lbnQgb2YgdGhlIGVudGlyZSBSZWR1eCBzdG9yZeKAmXMgc3RhdGUgYW5kIHJldHVybnMgYW4gb2JqZWN0IHRvIGJlIHBhc3NlZCBhcyBwcm9wcy5cbi8vIEl0IGlzIG9mdGVuIGNhbGxlZCBhIHNlbGVjdG9yLlxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICBjb25zb2xlLmxvZyhcIlNUQVRFIFwiLCBzdGF0ZS51c2VyKTtcbiAgY29uc29sZS5sb2coXCJPV04gUFJPUFMgXCIsIG93blByb3BzKTtcbiAgcmV0dXJuIHtcbiAgICB1c2VyOiBzdGF0ZS51c2VyXG4gIH07XG59XG4vLyBpbmplY3QgYWxsIGFjdGlvbnMgYXMgYWN0aW9ucy5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICBjb25zb2xlLmxvZyhcIkRJU1BBVENIIFwiLCBkaXNwYXRjaCk7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucywgZGlzcGF0Y2gpO1xufVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRISVMuUFJPUFMgXCIsIHRoaXMucHJvcHMudXNlci5uYW1lKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj5IaSwgdGhpcyBpcyBteSByZWFjdC9yZWR1eCBhcHAgY29tcG9uZW50LCB7dGhpcy5wcm9wcy51c2VyLm5hbWV9PC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLy8gSXQgbmVlZHMgdG8gYmUgaW52b2tlZCB0d28gdGltZXMuIFRoZSBmaXJzdCB0aW1lIHdpdGggaXRzIGFyZ3VtZW50cyBkZXNjcmliZWQgYWJvdmUsIGFuZCBhIHNlY29uZCB0aW1lLCB3aXRoIHRoZSBjb21wb25lbnRcbkFwcCA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFwcClcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hcHAvY29tcG9uZW50cy9BcHAuanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==