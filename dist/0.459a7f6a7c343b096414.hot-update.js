webpackHotUpdate(0,{

/***/ 218:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(66);
	
	var _reactRouterRedux = __webpack_require__(153);
	
	var _reactRouter = __webpack_require__(58);
	
	var _axios = __webpack_require__(107);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _reduxLogger = __webpack_require__(444);
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	var _reducers = __webpack_require__(215);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	var _reduxThunk = __webpack_require__(447);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reduxPromiseMiddleware = __webpack_require__(445);
	
	var _reduxPromiseMiddleware2 = _interopRequireDefault(_reduxPromiseMiddleware);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var user = {
	  name: "",
	  password: ""
	};
	
	var defaultState = {
	  user: user
	};
	
	var middleware = (0, _redux.applyMiddleware)((0, _reactRouterRedux.routerMiddleware)(_reactRouter.browserHistory), (0, _reduxPromiseMiddleware2.default)(), _reduxThunk2.default, (0, _reduxLogger2.default)());
	
	var store = (0, _redux.createStore)(_reducers2.default, middleware);
	
	store.subscribe(function () {
	  console.log('store changed ++> ', store.getState());
	});
	
	// store.dispatch({type: "CHANGE_NAME", payload: "Jim"});
	// store.dispatch({type: "CHANGE_PASSWORD", payload: "JIMBONE"});
	// store.dispatch({type: "CHANGE_PASSWORD", payload: "CHA IT"});
	
	// store.dispatch((dispatch) => {
	//   dispatch({type: "CHANGE_NAME", payload: "jimbot"});
	//   dispatch({type: "CHANGE_PASSWORD", payload: "pass"});
	//   axios.get("/")
	//     .then((response) => {
	//       console.log(resonse);
	//     })
	//     .catch((err) => {
	//       console.log(err);
	//     });
	// });
	
	var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);
	exports.default = store;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS5qcz9jMTgyIl0sIm5hbWVzIjpbInVzZXIiLCJuYW1lIiwicGFzc3dvcmQiLCJkZWZhdWx0U3RhdGUiLCJtaWRkbGV3YXJlIiwic3RvcmUiLCJzdWJzY3JpYmUiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGUiLCJoaXN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLEtBQU1BLE9BQU87QUFDWEMsU0FBTSxFQURLO0FBRVhDLGFBQVU7QUFGQyxFQUFiOztBQUtBLEtBQU1DLGVBQWM7QUFDbEJIO0FBRGtCLEVBQXBCOztBQUlBLEtBQU1JLGFBQWEsNEJBQWdCLG9FQUFoQixFQUFrRCx1Q0FBbEQsd0JBQW9FLDRCQUFwRSxDQUFuQjs7QUFFQSxLQUFNQyxRQUFRLDRDQUF5QkQsVUFBekIsQ0FBZDs7QUFFQUMsT0FBTUMsU0FBTixDQUFnQixZQUFNO0FBQ3BCQyxXQUFRQyxHQUFSLENBQVksb0JBQVosRUFBa0NILE1BQU1JLFFBQU4sRUFBbEM7QUFDRCxFQUZEOztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQU1DLFVBQVUseUVBQXFDTCxLQUFyQyxDQUFoQjttQkFDZUEsSyIsImZpbGUiOiIwLjQ1OWE3ZjZhN2MzNDNiMDk2NDE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyBzeW5jSGlzdG9yeVdpdGhTdG9yZSwgcm91dGVyTWlkZGxld2FyZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItcmVkdXhcIjtcbmltcG9ydCB7IGJyb3dzZXJIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGxvZ2dlciBmcm9tIFwicmVkdXgtbG9nZ2VyXCI7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnMvcmVkdWNlcnNcIjtcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcbmltcG9ydCBwcm9taXNlIGZyb20gXCJyZWR1eC1wcm9taXNlLW1pZGRsZXdhcmVcIjtcblxuY29uc3QgdXNlciA9IHtcbiAgbmFtZTogXCJcIixcbiAgcGFzc3dvcmQ6IFwiXCJcbn07XG5cbmNvbnN0IGRlZmF1bHRTdGF0ZSA9e1xuICB1c2VyLFxufTtcblxuY29uc3QgbWlkZGxld2FyZSA9IGFwcGx5TWlkZGxld2FyZShyb3V0ZXJNaWRkbGV3YXJlKGJyb3dzZXJIaXN0b3J5KSwgcHJvbWlzZSgpLCB0aHVuaywgbG9nZ2VyKCkpO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBtaWRkbGV3YXJlKTtcblxuc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgY29uc29sZS5sb2coJ3N0b3JlIGNoYW5nZWQgKys+ICcsIHN0b3JlLmdldFN0YXRlKCkpO1xufSk7XG5cbi8vIHN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkNIQU5HRV9OQU1FXCIsIHBheWxvYWQ6IFwiSmltXCJ9KTtcbi8vIHN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkNIQU5HRV9QQVNTV09SRFwiLCBwYXlsb2FkOiBcIkpJTUJPTkVcIn0pO1xuLy8gc3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiQ0hBTkdFX1BBU1NXT1JEXCIsIHBheWxvYWQ6IFwiQ0hBIElUXCJ9KTtcblxuLy8gc3RvcmUuZGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG4vLyAgIGRpc3BhdGNoKHt0eXBlOiBcIkNIQU5HRV9OQU1FXCIsIHBheWxvYWQ6IFwiamltYm90XCJ9KTtcbi8vICAgZGlzcGF0Y2goe3R5cGU6IFwiQ0hBTkdFX1BBU1NXT1JEXCIsIHBheWxvYWQ6IFwicGFzc1wifSk7XG4vLyAgIGF4aW9zLmdldChcIi9cIilcbi8vICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbi8vICAgICAgIGNvbnNvbGUubG9nKHJlc29uc2UpO1xuLy8gICAgIH0pXG4vLyAgICAgLmNhdGNoKChlcnIpID0+IHtcbi8vICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4vLyAgICAgfSk7XG4vLyB9KTtcblxuY29uc3QgaGlzdG9yeSA9IHN5bmNIaXN0b3J5V2l0aFN0b3JlKGJyb3dzZXJIaXN0b3J5LCBzdG9yZSk7XG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3RvcmUuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9