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
	  console.log('store changed ', store.getState());
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
	
	// if(module.hot) {
	//   module.hot.accept('./reducers/',() => {
	//     const nextRootReducer = require('./reducers/reducers').default;
	//     store.replaceReducer(nextRootReducer);
	//   });
	// }
	
	// const history = syncHistoryWithStore(browserHistory, store);
	// history.listen(location => analyticsService.track(location.pathname));
	
	module.exports = history;
	exports.default = store;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS5qcz9jMTgyIl0sIm5hbWVzIjpbInVzZXIiLCJuYW1lIiwicGFzc3dvcmQiLCJkZWZhdWx0U3RhdGUiLCJtaWRkbGV3YXJlIiwic3RvcmUiLCJzdWJzY3JpYmUiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiaGlzdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxLQUFNQSxPQUFPO0FBQ1hDLFNBQU0sRUFESztBQUVYQyxhQUFVO0FBRkMsRUFBYjs7QUFLQSxLQUFNQyxlQUFjO0FBQ2xCSDtBQURrQixFQUFwQjs7QUFJQSxLQUFNSSxhQUFhLDRCQUFnQixvRUFBaEIsRUFBa0QsdUNBQWxELHdCQUFvRSw0QkFBcEUsQ0FBbkI7O0FBRUEsS0FBTUMsUUFBUSw0Q0FBOEJELFVBQTlCLENBQWQ7O0FBRUFDLE9BQU1DLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQkMsV0FBUUMsR0FBUixDQUFZLGdCQUFaLEVBQThCSCxNQUFNSSxRQUFOLEVBQTlCO0FBQ0QsRUFGRDs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQUMsUUFBT0MsT0FBUCxHQUFpQkMsT0FBakI7bUJBQ2VQLEsiLCJmaWxlIjoiMC4yMmRlNGM5YjA2ZTczNzZkNTkyOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgc3luY0hpc3RvcnlXaXRoU3RvcmUsIHJvdXRlck1pZGRsZXdhcmUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLXJlZHV4XCI7XG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBsb2dnZXIgZnJvbSBcInJlZHV4LWxvZ2dlclwiO1xuaW1wb3J0IGNvbWJpbmVkUmVkdWNlcnMgZnJvbSBcIi4vcmVkdWNlcnMvcmVkdWNlcnNcIjtcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcbmltcG9ydCBwcm9taXNlIGZyb20gXCJyZWR1eC1wcm9taXNlLW1pZGRsZXdhcmVcIjtcblxuY29uc3QgdXNlciA9IHtcbiAgbmFtZTogXCJcIixcbiAgcGFzc3dvcmQ6IFwiXCJcbn07XG5cbmNvbnN0IGRlZmF1bHRTdGF0ZSA9e1xuICB1c2VyLFxufTtcblxuY29uc3QgbWlkZGxld2FyZSA9IGFwcGx5TWlkZGxld2FyZShyb3V0ZXJNaWRkbGV3YXJlKGJyb3dzZXJIaXN0b3J5KSwgcHJvbWlzZSgpLCB0aHVuaywgbG9nZ2VyKCkpO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKGNvbWJpbmVkUmVkdWNlcnMsIG1pZGRsZXdhcmUpO1xuXG5zdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICBjb25zb2xlLmxvZygnc3RvcmUgY2hhbmdlZCAnLCBzdG9yZS5nZXRTdGF0ZSgpKTtcbn0pO1xuXG4vLyBzdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJDSEFOR0VfTkFNRVwiLCBwYXlsb2FkOiBcIkppbVwifSk7XG4vLyBzdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJDSEFOR0VfUEFTU1dPUkRcIiwgcGF5bG9hZDogXCJKSU1CT05FXCJ9KTtcbi8vIHN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkNIQU5HRV9QQVNTV09SRFwiLCBwYXlsb2FkOiBcIkNIQSBJVFwifSk7XG5cbi8vIHN0b3JlLmRpc3BhdGNoKChkaXNwYXRjaCkgPT4ge1xuLy8gICBkaXNwYXRjaCh7dHlwZTogXCJDSEFOR0VfTkFNRVwiLCBwYXlsb2FkOiBcImppbWJvdFwifSk7XG4vLyAgIGRpc3BhdGNoKHt0eXBlOiBcIkNIQU5HRV9QQVNTV09SRFwiLCBwYXlsb2FkOiBcInBhc3NcIn0pO1xuLy8gICBheGlvcy5nZXQoXCIvXCIpXG4vLyAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhyZXNvbnNlKTtcbi8vICAgICB9KVxuLy8gICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuLy8gICAgIH0pO1xuLy8gfSk7XG5cbi8vIGlmKG1vZHVsZS5ob3QpIHtcbi8vICAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vcmVkdWNlcnMvJywoKSA9PiB7XG4vLyAgICAgY29uc3QgbmV4dFJvb3RSZWR1Y2VyID0gcmVxdWlyZSgnLi9yZWR1Y2Vycy9yZWR1Y2VycycpLmRlZmF1bHQ7XG4vLyAgICAgc3RvcmUucmVwbGFjZVJlZHVjZXIobmV4dFJvb3RSZWR1Y2VyKTtcbi8vICAgfSk7XG4vLyB9XG5cbi8vIGNvbnN0IGhpc3RvcnkgPSBzeW5jSGlzdG9yeVdpdGhTdG9yZShicm93c2VySGlzdG9yeSwgc3RvcmUpO1xuLy8gaGlzdG9yeS5saXN0ZW4obG9jYXRpb24gPT4gYW5hbHl0aWNzU2VydmljZS50cmFjayhsb2NhdGlvbi5wYXRobmFtZSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGhpc3Rvcnk7XG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3RvcmUuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9