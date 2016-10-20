webpackHotUpdate(0,{

/***/ 210:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(147);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _App = __webpack_require__(113);
	
	var _App2 = _interopRequireDefault(_App);
	
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
	      _react2.default.createElement(_reactRouter.IndexRoute, { component: Login }),
	      _react2.default.createElement(_reactRouter.Route, { path: "dashboard", component: Dashboard })
	    )
	  )
	);
	
	_reactDom2.default.render(router, app);

/***/ },

/***/ 213:
/***/ function(module, exports) {

	// import React from "react";
	// import { Route, IndexRoute } from "react-router";
	//
	// import App from "./components/App";
	// import Dashboard from "./components/Dashboard";
	// import Login from "./components/Login";
	//
	// export default (
	//   <Route path="/" component={App}>
	//     <IndexRoute component={Login} />
	//     <Route path="dashboard" component={Dashboard}/>
	//   </Route>
	// );
	"use strict";

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWluLmpzPzdhMmIiLCJ3ZWJwYWNrOi8vLy4vcm91dGVzLmpzPzgxN2MiXSwibmFtZXMiOlsiYXBwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXIiLCJMb2dpbiIsIkRhc2hib2FyZCIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLEtBQU1BLE1BQU1DLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBWjtBQUNBQyxTQUFRQyxHQUFSLENBQVksT0FBWjs7QUFFQSxLQUFNQyxTQUNKO0FBQUE7QUFBQSxLQUFVLHNCQUFWO0FBQ0U7QUFBQTtBQUFBLE9BQVEsb0NBQVI7QUFDRTtBQUFBO0FBQUEsU0FBTyxNQUFLLEdBQVosRUFBZ0Isd0JBQWhCO0FBQ0EsZ0VBQVksV0FBV0MsS0FBdkIsR0FEQTtBQUVBLDJEQUFPLE1BQUssV0FBWixFQUF3QixXQUFXQyxTQUFuQztBQUZBO0FBREY7QUFERixFQURGOztBQVlBLG9CQUFTQyxNQUFULENBQ0VILE1BREYsRUFFRUwsR0FGRixFOzs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjAuNWJiNmFlOWI0YjM0YzUyZTUxMDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL2NvbXBvbmVudHMvQXBwXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgSW5kZXhSb3V0ZSwgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHJvdXRlcyBmcm9tIFwiLi9yb3V0ZXNcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi9zdG9yZVwiO1xuXG5jb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG5jb25zb2xlLmxvZyhcImhlbGxvXCIpXG5cbmNvbnN0IHJvdXRlciA9IChcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPFJvdXRlciBoaXN0b3J5PXticm93c2VySGlzdG9yeX0+XG4gICAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0FwcH0+XG4gICAgICA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0xvZ2lufSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCJkYXNoYm9hcmRcIiBjb21wb25lbnQ9e0Rhc2hib2FyZH0vPlxuICAgICAgPC9Sb3V0ZT5cbiAgICA8L1JvdXRlcj5cbiAgPC9Qcm92aWRlcj5cblxuKTtcblxuUmVhY3RET00ucmVuZGVyKFxuICByb3V0ZXIsXG4gIGFwcFxuKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbWFpbi5qc1xuICoqLyIsIi8vIGltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCB7IFJvdXRlLCBJbmRleFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xuLy9cbi8vIGltcG9ydCBBcHAgZnJvbSBcIi4vY29tcG9uZW50cy9BcHBcIjtcbi8vIGltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4vY29tcG9uZW50cy9EYXNoYm9hcmRcIjtcbi8vIGltcG9ydCBMb2dpbiBmcm9tIFwiLi9jb21wb25lbnRzL0xvZ2luXCI7XG4vL1xuLy8gZXhwb3J0IGRlZmF1bHQgKFxuLy8gICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0FwcH0+XG4vLyAgICAgPEluZGV4Um91dGUgY29tcG9uZW50PXtMb2dpbn0gLz5cbi8vICAgICA8Um91dGUgcGF0aD1cImRhc2hib2FyZFwiIGNvbXBvbmVudD17RGFzaGJvYXJkfS8+XG4vLyAgIDwvUm91dGU+XG4vLyApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9yb3V0ZXMuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9