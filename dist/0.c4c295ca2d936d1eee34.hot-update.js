webpackHotUpdate(0,{

/***/ 208:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _index = __webpack_require__(105);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(81);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(6);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(82);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
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
	        )
	      );
	    }
	  }]);
	
	  return Dashboard;
	}(_react3.default.Component));
	
	exports.default = Dashboard;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(36)(module)))

/***/ },

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC5qc3g/YjhhYiIsIndlYnBhY2s6Ly8vLi9tYWluLmpzPzdhMmIiXSwibmFtZXMiOlsicHJvcHMiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJDb21wb25lbnQiLCJEYXNoYm9hcmQiLCJhcHAiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm91dGVyIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJRSxzQkFBWUEsS0FBWixFQUFtQjtBQUFBOztBQUFBLHVIQUNYQSxLQURXOztBQUVqQkMsYUFBUUMsR0FBUixDQUFZLGtCQUFaLEVBQWdDRixLQUFoQztBQUNBLFdBQUtHLEtBQUwsR0FBYSxFQUFiO0FBSGlCO0FBTWxCOzs7OzhCQUVRO0FBQ1AsY0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsUUFERjtBQUtEOzs7O0dBZnFCLGdCQUFNQyxTOzttQkFrQmZDLFM7Ozs7Ozs7Ozs7QUNyQmY7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLEtBQU1DLE1BQU1DLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBWjtBQUNBUCxTQUFRQyxHQUFSLENBQVksT0FBWjs7QUFFQSxLQUFNTyxTQUNKO0FBQUE7QUFBQSxLQUFVLHNCQUFWO0FBQ0U7QUFBQTtBQUFBLE9BQVEsb0NBQVI7QUFDRTtBQUFBO0FBQUEsU0FBTyxNQUFLLEdBQVosRUFBZ0Isd0JBQWhCO0FBQ0EsZ0VBQVksMEJBQVosR0FEQTtBQUVBLDJEQUFPLE1BQUssV0FBWixFQUF3Qiw4QkFBeEI7QUFGQTtBQURGO0FBREYsRUFERjs7QUFZQSxvQkFBU0MsTUFBVCxDQUNFRCxNQURGLEVBRUVILEdBRkYsRSIsImZpbGUiOiIwLmM0YzI5NWNhMmQ5MzZkMWVlZTM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cblxuY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc29sZS5sb2coXCJEYXNoYm9hcmQgcHJvcHMgXCIsIHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+REFTSEJPQVJEPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvbXBvbmVudHMvRGFzaGJvYXJkLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL2NvbXBvbmVudHMvQXBwXCI7XG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vY29tcG9uZW50cy9Mb2dpblwiO1xuaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiLi9jb21wb25lbnRzL0Rhc2hib2FyZFwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIEluZGV4Um91dGUsIGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCByb3V0ZXMgZnJvbSBcIi4vcm91dGVzXCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4vc3RvcmVcIjtcblxuY29uc3QgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuY29uc29sZS5sb2coXCJoZWxsb1wiKVxuXG5jb25zdCByb3V0ZXIgPSAoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxSb3V0ZXIgaGlzdG9yeT17YnJvd3Nlckhpc3Rvcnl9PlxuICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtBcHB9PlxuICAgICAgPEluZGV4Um91dGUgY29tcG9uZW50PXtMb2dpbn0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiZGFzaGJvYXJkXCIgY29tcG9uZW50PXtEYXNoYm9hcmR9Lz5cbiAgICAgIDwvUm91dGU+XG4gICAgPC9Sb3V0ZXI+XG4gIDwvUHJvdmlkZXI+XG5cbik7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgcm91dGVyLFxuICBhcHBcbik7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL21haW4uanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9