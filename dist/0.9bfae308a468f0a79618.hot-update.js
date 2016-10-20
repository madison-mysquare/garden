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
	
	var _Login = __webpack_require__(209);
	
	var _Login2 = _interopRequireDefault(_Login);
	
	var _Dashboard = __webpack_require__(208);
	
	var _Dashboard2 = _interopRequireDefault(_Dashboard);
	
	var _reactRedux = __webpack_require__(149);
	
	var _reactRouter = __webpack_require__(157);
	
	var _routes = __webpack_require__(213);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _store = __webpack_require__(214);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var app = document.getElementById('app');
	
	var router = _react2.default.createElement(
	  _reactRedux.Provider,
	  { store: _store2.default },
	  _react2.default.createElement(
	    _reactRouter.Router,
	    { history: history },
	    _react2.default.createElement(_reactRouter.Route, { path: "/", component: _App2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: "dashboard", component: _Dashboard2.default })
	  )
	);
	
	_reactDom2.default.render(router, app);

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWluLmpzPzdhMmIiXSwibmFtZXMiOlsiYXBwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvdXRlciIsImhpc3RvcnkiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsS0FBTUEsTUFBTUMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUFaOztBQUVBLEtBQU1DLFNBQ0o7QUFBQTtBQUFBLEtBQVUsc0JBQVY7QUFDRTtBQUFBO0FBQUEsT0FBUSxTQUFTQyxPQUFqQjtBQUNFLHlEQUFPLE1BQUssR0FBWixFQUFnQix3QkFBaEIsR0FERjtBQUVFLHlEQUFPLE1BQUssV0FBWixFQUF3Qiw4QkFBeEI7QUFGRjtBQURGLEVBREY7O0FBVUEsb0JBQVNDLE1BQVQsQ0FDRUYsTUFERixFQUVFSCxHQUZGLEUiLCJmaWxlIjoiMC45YmZhZTMwOGE0NjhmMGE3OTYxOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vY29tcG9uZW50cy9BcHBcIjtcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9jb21wb25lbnRzL0xvZ2luXCI7XG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gXCIuL2NvbXBvbmVudHMvRGFzaGJvYXJkXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgSW5kZXhSb3V0ZSwgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHJvdXRlcyBmcm9tIFwiLi9yb3V0ZXNcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi9zdG9yZVwiO1xuXG5jb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG5cbmNvbnN0IHJvdXRlciA9IChcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fT5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17QXBwfS8+XG4gICAgICA8Um91dGUgcGF0aD1cImRhc2hib2FyZFwiIGNvbXBvbmVudD17RGFzaGJvYXJkfS8+XG5cbiAgICA8L1JvdXRlcj5cbiAgPC9Qcm92aWRlcj5cbik7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgcm91dGVyLFxuICBhcHBcbik7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL21haW4uanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9