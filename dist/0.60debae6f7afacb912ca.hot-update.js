webpackHotUpdate(0,{

/***/ 214:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(147);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _App = __webpack_require__(210);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _Login = __webpack_require__(213);
	
	var _Login2 = _interopRequireDefault(_Login);
	
	var _Dashboard = __webpack_require__(211);
	
	var _Dashboard2 = _interopRequireDefault(_Dashboard);
	
	var _reactRedux = __webpack_require__(149);
	
	var _reactRouter = __webpack_require__(58);
	
	var _routes = __webpack_require__(217);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _store = __webpack_require__(218);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var app = document.getElementById('app');
	
	var root = _react2.default.createElement(
	  _reactRedux.Provider,
	  { store: _store2.default },
	  _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.browserHistory },
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: "/(:filter)", component: _App2.default },
	      _react2.default.createElement(_reactRouter.IndexRoute, { component: _Dashboard2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: "/login", component: _Login2.default })
	    )
	  )
	);
	
	_reactDom2.default.render(root, app);

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWluLmpzPzdhMmIiXSwibmFtZXMiOlsiYXBwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsS0FBTUEsTUFBTUMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUFaOztBQUVBLEtBQU1DLE9BQ0o7QUFBQTtBQUFBLEtBQVUsc0JBQVY7QUFDRTtBQUFBO0FBQUEsT0FBUSxvQ0FBUjtBQUNFO0FBQUE7QUFBQSxTQUFPLE1BQUssWUFBWixFQUF5Qix3QkFBekI7QUFDRSxnRUFBWSw4QkFBWixHQURGO0FBRUUsMkRBQU8sTUFBSyxRQUFaLEVBQXFCLDBCQUFyQjtBQUZGO0FBREY7QUFERixFQURGOztBQVdBLG9CQUFTQyxNQUFULENBQ0VELElBREYsRUFFRUgsR0FGRixFIiwiZmlsZSI6IjAuNjBkZWJhZTZmN2FmYWNiOTEyY2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL2NvbXBvbmVudHMvQXBwXCI7XG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vY29tcG9uZW50cy9Mb2dpblwiO1xuaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiLi9jb21wb25lbnRzL0Rhc2hib2FyZFwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIEluZGV4Um91dGUsIGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCByb3V0ZXMgZnJvbSBcIi4vcm91dGVzXCI7XG5pbXBvcnQgc3RvcmUsIHtoaXN0b3J5fSBmcm9tIFwiLi9zdG9yZVwiO1xuXG5jb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG5cbmNvbnN0IHJvb3QgPSAoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxSb3V0ZXIgaGlzdG9yeT17YnJvd3Nlckhpc3Rvcnl9PlxuICAgICAgPFJvdXRlIHBhdGg9XCIvKDpmaWx0ZXIpXCIgY29tcG9uZW50PXtBcHB9PlxuICAgICAgICA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0Rhc2hib2FyZH0vPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9sb2dpblwiIGNvbXBvbmVudD17TG9naW59Lz5cbiAgICAgIDwvUm91dGU+XG4gICAgPC9Sb3V0ZXI+XG4gIDwvUHJvdmlkZXI+XG4pO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIHJvb3QsXG4gIGFwcFxuKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbWFpbi5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=