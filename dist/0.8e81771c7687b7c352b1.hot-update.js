webpackHotUpdate(0,{

/***/ 210:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _index = __webpack_require__(106);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(82);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(6);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(83);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _reactRedux = __webpack_require__(149);
	
	var _redux = __webpack_require__(66);
	
	var _actions = __webpack_require__(209);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _Dashboard = __webpack_require__(211);
	
	var _Dashboard2 = _interopRequireDefault(_Dashboard);
	
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
	  return {
	    user: state.user
	  };
	}
	// inject all actions as actions.
	function mapDispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)(actions, dispatch);
	}
	
	var App = _wrapComponent("App")(function (_React$Component) {
	  _inherits(App, _React$Component);
	
	  function App() {
	    _classCallCheck(this, App);
	
	    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	  }
	
	  _createClass(App, [{
	    key: "render",
	    value: function render() {
	      console.log("this.props ", this.props);
	      return _react3.default.createElement(
	        "div",
	        null,
	        _react3.default.createElement(
	          "nav",
	          null,
	          "Hi, this is the Garden!"
	        ),
	        _react3.default.cloneElement(this.props.children, this.props)
	      );
	    }
	  }]);
	
	  return App;
	}(_react3.default.Component));
	
	// It needs to be invoked two times. The first time with its arguments described above, and a second time, with the component
	
	
	App = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);
	
	exports.default = App;
	// React.cloneElement clones this.props FOR this.props.children (i.e. Login component).
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(36)(module)))

/***/ },

/***/ 211:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _index = __webpack_require__(106);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(82);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(6);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(83);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _FilterLink = __webpack_require__(212);
	
	var _FilterLink2 = _interopRequireDefault(_FilterLink);
	
	var _reactRouter = __webpack_require__(58);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	  Dashboard: {
	    displayName: "Dashboard"
	  }
	};
	
	var _UsersJimbotDropboxMAKERSQUAREGardenNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: "/Users/jimbot/Dropbox/MAKERSQUARE/garden/app/components/Dashboard.jsx",
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	var _UsersJimbotDropboxMAKERSQUAREGardenNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: "/Users/jimbot/Dropbox/MAKERSQUARE/garden/app/components/Dashboard.jsx",
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersJimbotDropboxMAKERSQUAREGardenNode_modulesReactTransformHmrLibIndexJs2(_UsersJimbotDropboxMAKERSQUAREGardenNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}
	
	var Dashboard = _wrapComponent("Dashboard")(function (_React$Component) {
	  _inherits(Dashboard, _React$Component);
	
	  function Dashboard(props) {
	    _classCallCheck(this, Dashboard);
	
	    var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));
	
	    console.log("Dashboard props ", props);
	    _this.state = {};
	    return _this;
	  }
	
	  _createClass(Dashboard, [{
	    key: "render",
	    value: function render() {
	      return _react3.default.createElement(
	        "div",
	        null,
	        _react3.default.createElement(
	          "p",
	          null,
	          "DASHBOARD"
	        ),
	        _react3.default.createElement(
	          _FilterLink2.default,
	          { filter: "login" },
	          "LOGIN"
	        ),
	        _react3.default.createElement(
	          "div",
	          null,
	          _react3.default.createElement(
	            _reactRouter.Link,
	            { to: "/login" },
	            "login link"
	          )
	        )
	      );
	    }
	  }]);
	
	  return Dashboard;
	}(_react3.default.Component));
	
	exports.default = Dashboard;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(36)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qc3g/OWJjYyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC5qc3g/YjhhYiJdLCJuYW1lcyI6WyJhY3Rpb25zIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJvd25Qcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJwcm9wcyIsImNsb25lRWxlbWVudCIsImNoaWxkcmVuIiwiQ29tcG9uZW50IiwiQXBwIiwiRGFzaGJvYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOztBQUNBOztBQUNBOztLQUFZQSxPOztBQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFMQTtBQUNBOzs7QUFNQTtBQUNBO0FBQ0EsVUFBU0MsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0NDLFFBQWhDLEVBQTBDO0FBQ3hDQyxXQUFRQyxHQUFSLENBQVksUUFBWixFQUFzQkgsTUFBTUksSUFBNUI7QUFDQSxVQUFPO0FBQ0xBLFdBQU1KLE1BQU1JO0FBRFAsSUFBUDtBQUdEO0FBQ0Q7QUFDQSxVQUFTQyxrQkFBVCxDQUE0QkMsUUFBNUIsRUFBc0M7QUFDcEMsVUFBTywrQkFBbUJSLE9BQW5CLEVBQTRCUSxRQUE1QixDQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7OEJBR1U7QUFDUEosZUFBUUMsR0FBUixDQUFZLGFBQVosRUFBMkIsS0FBS0ksS0FBaEM7QUFDQSxjQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUlJLHlCQUFNQyxZQUFOLENBQW1CLEtBQUtELEtBQUwsQ0FBV0UsUUFBOUIsRUFBd0MsS0FBS0YsS0FBN0M7QUFKSixRQURGO0FBUUQ7Ozs7R0FYZSxnQkFBTUcsUzs7QUFjeEI7OztBQUNBQyxPQUFNLHlCQUFRWixlQUFSLEVBQXlCTSxrQkFBekIsRUFBNkNNLEdBQTdDLENBQU47O21CQUVlQSxHO0FBQ2Ysd0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdFLHNCQUFZSixLQUFaLEVBQW1CO0FBQUE7O0FBQUEsdUhBQ1hBLEtBRFc7O0FBRWpCTCxhQUFRQyxHQUFSLENBQVksa0JBQVosRUFBZ0NJLEtBQWhDO0FBQ0EsV0FBS1AsS0FBTCxHQUFhLEVBQWI7QUFIaUI7QUFNbEI7Ozs7OEJBRVE7QUFDUCxjQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUVFO0FBQUE7QUFBQSxhQUFZLFFBQU8sT0FBbkI7QUFBQTtBQUFBLFVBRkY7QUFHRTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUEsZUFBTSxZQUFOO0FBQUE7QUFBQTtBQURBO0FBSEYsUUFERjtBQVVEOzs7O0dBcEJxQixnQkFBTVUsUzs7bUJBdUJmRSxTIiwiZmlsZSI6IjAuOGU4MTc3MWM3Njg3YjdjMzUyYjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbi8vIHVzZSBjb25uZWN0IHNpbmNlIHdlIGFyZSB3cmFwcGluZyBjb21waW5lbnRzIGluIDxQcm92aWRlcj5cbi8vIGNvbm5lY3RzIGEgUmVhY3QgY29tcG9uZW50IHRvIFJlZHV4IHN0b3JlLlxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuLi9hY3Rpb25zL2FjdGlvbnNcIjtcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4vRGFzaGJvYXJkXCI7XG5cbi8vIFRoZSBtYXBTdGF0ZVRvUHJvcHMgZnVuY3Rpb24gdGFrZXMgYSBzaW5nbGUgYXJndW1lbnQgb2YgdGhlIGVudGlyZSBSZWR1eCBzdG9yZeKAmXMgc3RhdGUgYW5kIHJldHVybnMgYW4gb2JqZWN0IHRvIGJlIHBhc3NlZCBhcyBwcm9wcy5cbi8vIEl0IGlzIG9mdGVuIGNhbGxlZCBhIHNlbGVjdG9yLlxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICBjb25zb2xlLmxvZyhcIlNUQVRFIFwiLCBzdGF0ZS51c2VyKTtcbiAgcmV0dXJuIHtcbiAgICB1c2VyOiBzdGF0ZS51c2VyXG4gIH07XG59XG4vLyBpbmplY3QgYWxsIGFjdGlvbnMgYXMgYWN0aW9ucy5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbnMsIGRpc3BhdGNoKTtcbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKFwidGhpcy5wcm9wcyBcIiwgdGhpcy5wcm9wcyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgSGksIHRoaXMgaXMgdGhlIEdhcmRlbiFcbiAgICAgICAgPC9uYXY+XG4gICAgICAgIHsgUmVhY3QuY2xvbmVFbGVtZW50KHRoaXMucHJvcHMuY2hpbGRyZW4sIHRoaXMucHJvcHMpIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLy8gSXQgbmVlZHMgdG8gYmUgaW52b2tlZCB0d28gdGltZXMuIFRoZSBmaXJzdCB0aW1lIHdpdGggaXRzIGFyZ3VtZW50cyBkZXNjcmliZWQgYWJvdmUsIGFuZCBhIHNlY29uZCB0aW1lLCB3aXRoIHRoZSBjb21wb25lbnRcbkFwcCA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFwcCk7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbi8vIFJlYWN0LmNsb25lRWxlbWVudCBjbG9uZXMgdGhpcy5wcm9wcyBGT1IgdGhpcy5wcm9wcy5jaGlsZHJlbiAoaS5lLiBMb2dpbiBjb21wb25lbnQpLlxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb21wb25lbnRzL0FwcC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmlsdGVyTGluayBmcm9tIFwiLi9GaWx0ZXJMaW5rXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xuXG5jbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zb2xlLmxvZyhcIkRhc2hib2FyZCBwcm9wcyBcIiwgcHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8cD5EQVNIQk9BUkQ8L3A+XG4gICAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj1cImxvZ2luXCI+TE9HSU48L0ZpbHRlckxpbms+XG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxMaW5rIHRvPXtgL2xvZ2luYH0+bG9naW4gbGluazwvTGluaz5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb21wb25lbnRzL0Rhc2hib2FyZC5qc3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9