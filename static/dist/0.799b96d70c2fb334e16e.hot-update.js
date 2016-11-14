webpackHotUpdate(0,{

/***/ 221:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(152);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _App = __webpack_require__(217);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _Login = __webpack_require__(219);
	
	var _Login2 = _interopRequireDefault(_Login);
	
	var _Dashboard = __webpack_require__(114);
	
	var _Dashboard2 = _interopRequireDefault(_Dashboard);
	
	var _EventList = __webpack_require__(115);
	
	var _EventList2 = _interopRequireDefault(_EventList);
	
	var _CreateEvents = __webpack_require__(218);
	
	var _CreateEvents2 = _interopRequireDefault(_CreateEvents);
	
	var _EventListEntry = __webpack_require__(116);
	
	var _EventListEntry2 = _interopRequireDefault(_EventListEntry);
	
	var _reactRedux = __webpack_require__(154);
	
	var _reactRouter = __webpack_require__(61);
	
	var _store = __webpack_require__(117);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var app = document.getElementById('app');
	
	// Provider "provides" all the components here with data from the store.
	// browserHistory
	var router = _react2.default.createElement(
	  _reactRedux.Provider,
	  { store: _store2.default },
	  _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.browserHistory },
	    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Dashboard2.default }),
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: "/", component: _App2.default },
	      _react2.default.createElement(_reactRouter.Route, { path: "login", component: _Login2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: "dashboard", component: _Dashboard2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: "create", component: _CreateEvents2.default })
	    )
	  )
	);
	
	_reactDom2.default.render(router, app);

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWluLmpzPzdhMmIiXSwibmFtZXMiOlsiYXBwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvdXRlciIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsS0FBTUEsTUFBTUMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUFaOztBQUVBO0FBQ0E7QUFDQSxLQUFNQyxTQUNKO0FBQUE7QUFBQSxLQUFVLHNCQUFWO0FBQ0U7QUFBQTtBQUFBLE9BQVEsb0NBQVI7QUFDQSw4REFBWSw4QkFBWixHQURBO0FBRUU7QUFBQTtBQUFBLFNBQU8sTUFBSyxHQUFaLEVBQWdCLHdCQUFoQjtBQUNFLDJEQUFPLE1BQUssT0FBWixFQUFvQiwwQkFBcEIsR0FERjtBQUVFLDJEQUFPLE1BQUssV0FBWixFQUF3Qiw4QkFBeEIsR0FGRjtBQUdFLDJEQUFPLE1BQUssUUFBWixFQUFxQixpQ0FBckI7QUFIRjtBQUZGO0FBREYsRUFERjs7QUFjQSxvQkFBU0MsTUFBVCxDQUNFRCxNQURGLEVBRUVILEdBRkYsRSIsImZpbGUiOiIwLjc5OWI5NmQ3MGMyZmIzMzRlMTZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9jb21wb25lbnRzL0FwcFwiO1xuaW1wb3J0IExvZ2luIGZyb20gXCIuL2NvbXBvbmVudHMvTG9naW5cIjtcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4vY29tcG9uZW50cy9EYXNoYm9hcmRcIjtcbmltcG9ydCBFdmVudExpc3QgZnJvbSBcIi4vY29tcG9uZW50cy9FdmVudExpc3RcIjtcbmltcG9ydCBDcmVhdGVFdmVudHMgZnJvbSBcIi4vY29tcG9uZW50cy9DcmVhdGVFdmVudHNcIjtcbmltcG9ydCBFdmVudExpc3RFbnRyeSBmcm9tIFwiLi9jb21wb25lbnRzL0V2ZW50TGlzdEVudHJ5XCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgSW5kZXhSb3V0ZSwgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuL3N0b3JlXCI7XG5cbmNvbnN0IGFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcblxuLy8gUHJvdmlkZXIgXCJwcm92aWRlc1wiIGFsbCB0aGUgY29tcG9uZW50cyBoZXJlIHdpdGggZGF0YSBmcm9tIHRoZSBzdG9yZS5cbi8vIGJyb3dzZXJIaXN0b3J5XG5jb25zdCByb3V0ZXIgPSAoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxSb3V0ZXIgaGlzdG9yeT17YnJvd3Nlckhpc3Rvcnl9PlxuICAgIDxJbmRleFJvdXRlIGNvbXBvbmVudD17RGFzaGJvYXJkfSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtBcHB9PlxuICAgICAgICA8Um91dGUgcGF0aD1cImxvZ2luXCIgY29tcG9uZW50PXtMb2dpbn0+PC9Sb3V0ZT5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCJkYXNoYm9hcmRcIiBjb21wb25lbnQ9e0Rhc2hib2FyZH0+PC9Sb3V0ZT5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCJjcmVhdGVcIiBjb21wb25lbnQ9e0NyZWF0ZUV2ZW50c30+PC9Sb3V0ZT5cbiAgICAgICAgey8qIDxSb3V0ZSBwYXRoPVwiL2V2ZW50c1wiIGNvbXBvbmVudD17RXZlbnRMaXN0RW50cnl9PjwvUm91dGU+ICovfVxuICAgICAgPC9Sb3V0ZT5cbiAgICA8L1JvdXRlcj5cbiAgPC9Qcm92aWRlcj5cbik7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgcm91dGVyLFxuICBhcHBcbik7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL21haW4uanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9