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
	      _react2.default.createElement(_reactRouter.Route, { path: "dashboard", component: _Dashboard2.default })
	    )
	  )
	);
	
	_reactDom2.default.render(router, app);

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWluLmpzPzdhMmIiXSwibmFtZXMiOlsiYXBwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXIiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsS0FBTUEsTUFBTUMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUFaO0FBQ0FDLFNBQVFDLEdBQVIsQ0FBWSxPQUFaOztBQUVBLEtBQU1DLFNBQ0o7QUFBQTtBQUFBLEtBQVUsc0JBQVY7QUFDRTtBQUFBO0FBQUEsT0FBUSxvQ0FBUjtBQUNFO0FBQUE7QUFBQSxTQUFPLE1BQUssR0FBWixFQUFnQix3QkFBaEI7QUFDRSxnRUFBWSwwQkFBWixHQURGO0FBRUUsMkRBQU8sTUFBSyxXQUFaLEVBQXdCLDhCQUF4QjtBQUZGO0FBREY7QUFERixFQURGOztBQVlBLG9CQUFTQyxNQUFULENBQ0VELE1BREYsRUFFRUwsR0FGRixFIiwiZmlsZSI6IjAuN2U3NDNlZDI4YjVhMGM1Y2ViMDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL2NvbXBvbmVudHMvQXBwXCI7XG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vY29tcG9uZW50cy9Mb2dpblwiO1xuaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiLi9jb21wb25lbnRzL0Rhc2hib2FyZFwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIEluZGV4Um91dGUsIGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCByb3V0ZXMgZnJvbSBcIi4vcm91dGVzXCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4vc3RvcmVcIjtcblxuY29uc3QgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuY29uc29sZS5sb2coXCJoZWxsb1wiKVxuXG5jb25zdCByb3V0ZXIgPSAoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxSb3V0ZXIgaGlzdG9yeT17YnJvd3Nlckhpc3Rvcnl9PlxuICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtBcHB9PlxuICAgICAgICA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0xvZ2lufSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cImRhc2hib2FyZFwiIGNvbXBvbmVudD17RGFzaGJvYXJkfS8+XG4gICAgICAgIDwvUm91dGU+XG4gICAgPC9Sb3V0ZXI+XG4gIDwvUHJvdmlkZXI+XG5cbik7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgcm91dGVyLFxuICBhcHBcbik7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL21haW4uanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9