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
	
	var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);
	// history.listen(location => analyticsService.track(location.pathname));
	
	module.exports = history;
	exports.default = store;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS5qcz9jMTgyIl0sIm5hbWVzIjpbInVzZXIiLCJuYW1lIiwicGFzc3dvcmQiLCJkZWZhdWx0U3RhdGUiLCJtaWRkbGV3YXJlIiwic3RvcmUiLCJzdWJzY3JpYmUiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGUiLCJoaXN0b3J5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxLQUFNQSxPQUFPO0FBQ1hDLFNBQU0sRUFESztBQUVYQyxhQUFVO0FBRkMsRUFBYjs7QUFLQSxLQUFNQyxlQUFjO0FBQ2xCSDtBQURrQixFQUFwQjs7QUFJQSxLQUFNSSxhQUFhLDRCQUFnQixvRUFBaEIsRUFBa0QsdUNBQWxELHdCQUFvRSw0QkFBcEUsQ0FBbkI7O0FBRUEsS0FBTUMsUUFBUSw0Q0FBeUJELFVBQXpCLENBQWQ7O0FBRUFDLE9BQU1DLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQkMsV0FBUUMsR0FBUixDQUFZLGdCQUFaLEVBQThCSCxNQUFNSSxRQUFOLEVBQTlCO0FBQ0QsRUFGRDs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBTUMsVUFBVSx5RUFBcUNMLEtBQXJDLENBQWhCO0FBQ0E7O0FBRUFNLFFBQU9DLE9BQVAsR0FBaUJGLE9BQWpCO21CQUNlTCxLIiwiZmlsZSI6IjAuM2NmZGRkMTRiM2NjODcyNGFkZTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7IHN5bmNIaXN0b3J5V2l0aFN0b3JlLCByb3V0ZXJNaWRkbGV3YXJlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1yZWR1eFwiO1xuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgbG9nZ2VyIGZyb20gXCJyZWR1eC1sb2dnZXJcIjtcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi9yZWR1Y2Vycy9yZWR1Y2Vyc1wiO1xuaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiO1xuaW1wb3J0IHByb21pc2UgZnJvbSBcInJlZHV4LXByb21pc2UtbWlkZGxld2FyZVwiO1xuXG5jb25zdCB1c2VyID0ge1xuICBuYW1lOiBcIlwiLFxuICBwYXNzd29yZDogXCJcIlxufTtcblxuY29uc3QgZGVmYXVsdFN0YXRlID17XG4gIHVzZXIsXG59O1xuXG5jb25zdCBtaWRkbGV3YXJlID0gYXBwbHlNaWRkbGV3YXJlKHJvdXRlck1pZGRsZXdhcmUoYnJvd3Nlckhpc3RvcnkpLCBwcm9taXNlKCksIHRodW5rLCBsb2dnZXIoKSk7XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIG1pZGRsZXdhcmUpO1xuXG5zdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICBjb25zb2xlLmxvZygnc3RvcmUgY2hhbmdlZCAnLCBzdG9yZS5nZXRTdGF0ZSgpKTtcbn0pO1xuXG4vLyBzdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJDSEFOR0VfTkFNRVwiLCBwYXlsb2FkOiBcIkppbVwifSk7XG4vLyBzdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJDSEFOR0VfUEFTU1dPUkRcIiwgcGF5bG9hZDogXCJKSU1CT05FXCJ9KTtcbi8vIHN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkNIQU5HRV9QQVNTV09SRFwiLCBwYXlsb2FkOiBcIkNIQSBJVFwifSk7XG5cbi8vIHN0b3JlLmRpc3BhdGNoKChkaXNwYXRjaCkgPT4ge1xuLy8gICBkaXNwYXRjaCh7dHlwZTogXCJDSEFOR0VfTkFNRVwiLCBwYXlsb2FkOiBcImppbWJvdFwifSk7XG4vLyAgIGRpc3BhdGNoKHt0eXBlOiBcIkNIQU5HRV9QQVNTV09SRFwiLCBwYXlsb2FkOiBcInBhc3NcIn0pO1xuLy8gICBheGlvcy5nZXQoXCIvXCIpXG4vLyAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhyZXNvbnNlKTtcbi8vICAgICB9KVxuLy8gICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuLy8gICAgIH0pO1xuLy8gfSk7XG5cbi8vIGlmKG1vZHVsZS5ob3QpIHtcbi8vICAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vcmVkdWNlcnMvJywoKSA9PiB7XG4vLyAgICAgY29uc3QgbmV4dFJvb3RSZWR1Y2VyID0gcmVxdWlyZSgnLi9yZWR1Y2Vycy9yZWR1Y2VycycpLmRlZmF1bHQ7XG4vLyAgICAgc3RvcmUucmVwbGFjZVJlZHVjZXIobmV4dFJvb3RSZWR1Y2VyKTtcbi8vICAgfSk7XG4vLyB9XG5cbmNvbnN0IGhpc3RvcnkgPSBzeW5jSGlzdG9yeVdpdGhTdG9yZShicm93c2VySGlzdG9yeSwgc3RvcmUpO1xuLy8gaGlzdG9yeS5saXN0ZW4obG9jYXRpb24gPT4gYW5hbHl0aWNzU2VydmljZS50cmFjayhsb2NhdGlvbi5wYXRobmFtZSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGhpc3Rvcnk7XG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3RvcmUuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9