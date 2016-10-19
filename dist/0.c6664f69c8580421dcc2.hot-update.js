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
	    username: state.user.name,
	    password: state.user.password
	  };
	}
	
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
	      return _react3.default.createElement(
	        "div",
	        null,
	        _react3.default.createElement(
	          "div",
	          null,
	          "Hi, this is my react/redux app component"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9BcHAuanN4PzRjYzgiXSwibmFtZXMiOlsiYWN0aW9ucyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwib3duUHJvcHMiLCJjb25zb2xlIiwibG9nIiwidXNlciIsInVzZXJuYW1lIiwibmFtZSIsInBhc3N3b3JkIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJBcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7O0FBQ0E7O0FBQ0E7O0tBQVlBLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFKWjtBQUNBOzs7QUFLQTtBQUNBO0FBQ0EsVUFBU0MsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0NDLFFBQWhDLEVBQTBDO0FBQ3hDQyxXQUFRQyxHQUFSLENBQVksUUFBWixFQUFzQkgsTUFBTUksSUFBNUI7QUFDQUYsV0FBUUMsR0FBUixDQUFZLFlBQVosRUFBMEJGLFFBQTFCO0FBQ0EsVUFBTztBQUNMSSxlQUFVTCxNQUFNSSxJQUFOLENBQVdFLElBRGhCO0FBRUxDLGVBQVVQLE1BQU1JLElBQU4sQ0FBV0c7QUFGaEIsSUFBUDtBQUlEOztBQUVELFVBQVNDLGtCQUFULENBQTRCQyxRQUE1QixFQUFzQztBQUNwQ1AsV0FBUUMsR0FBUixDQUFZLFdBQVosRUFBeUJNLFFBQXpCO0FBQ0EsVUFBTywrQkFBbUJYLE9BQW5CLEVBQTRCVyxRQUE1QixDQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7OEJBR1U7QUFDUCxjQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixRQURGO0FBTUQ7Ozs7OztBQUdIOzs7QUFDQUMsT0FBTSx5QkFBUVgsZUFBUixFQUF5QlMsa0JBQXpCLEVBQTZDRSxHQUE3QyxDQUFOOzttQkFFZUEsRyIsImZpbGUiOiIwLmM2NjY0ZjY5Yzg1ODA0MjFkY2MyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG4vLyB1c2UgY29ubmVjdCBzaW5jZSB3ZSBhcmUgd3JhcHBpbmcgY29tcGluZW50cyBpbiA8UHJvdmlkZXI+XG4vLyBjb25uZWN0cyBhIFJlYWN0IGNvbXBvbmVudCB0byBSZWR1eCBzdG9yZS5cbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tIFwiLi4vYWN0aW9ucy9hY3Rpb25zXCI7XG5cbi8vIFRoZSBtYXBTdGF0ZVRvUHJvcHMgZnVuY3Rpb24gdGFrZXMgYSBzaW5nbGUgYXJndW1lbnQgb2YgdGhlIGVudGlyZSBSZWR1eCBzdG9yZeKAmXMgc3RhdGUgYW5kIHJldHVybnMgYW4gb2JqZWN0IHRvIGJlIHBhc3NlZCBhcyBwcm9wcy5cbi8vIEl0IGlzIG9mdGVuIGNhbGxlZCBhIHNlbGVjdG9yLlxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICBjb25zb2xlLmxvZyhcIlNUQVRFIFwiLCBzdGF0ZS51c2VyKTtcbiAgY29uc29sZS5sb2coXCJPV04gUFJPUFMgXCIsIG93blByb3BzKTtcbiAgcmV0dXJuIHtcbiAgICB1c2VybmFtZTogc3RhdGUudXNlci5uYW1lLFxuICAgIHBhc3N3b3JkOiBzdGF0ZS51c2VyLnBhc3N3b3JkXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICBjb25zb2xlLmxvZyhcIkRJU1BBVENIIFwiLCBkaXNwYXRjaCk7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucywgZGlzcGF0Y2gpO1xufVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+SGksIHRoaXMgaXMgbXkgcmVhY3QvcmVkdXggYXBwIGNvbXBvbmVudDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8vIEl0IG5lZWRzIHRvIGJlIGludm9rZWQgdHdvIHRpbWVzLiBUaGUgZmlyc3QgdGltZSB3aXRoIGl0cyBhcmd1bWVudHMgZGVzY3JpYmVkIGFib3ZlLCBhbmQgYSBzZWNvbmQgdGltZSwgd2l0aCB0aGUgY29tcG9uZW50XG5BcHAgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBcHApXG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYXBwL2NvbXBvbmVudHMvQXBwLmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=