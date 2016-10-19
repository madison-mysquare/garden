webpackHotUpdate(0,{

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(101);
	
	var _axios = __webpack_require__(431);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _reduxLogger = __webpack_require__(409);
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	var _reducers = __webpack_require__(178);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	var _reduxThunk = __webpack_require__(423);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// logger modifies the actions.
	// const logger = (store) => (next) => (action) => {
	//   console.log("action fired");
	//   next(action);
	// };
	// const error = (store) => (next) => (action) => {
	//   try {
	//     next(action);
	//   } catch(e) {
	//     console.log(error);
	//   }
	// };
	
	var middleware = (0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxLogger2.default)());
	
	var store = (0, _redux.createStore)(_reducers2.default, middleware);
	
	store.subscribe(function () {
	  console.log('store changed ', store.getState());
	});
	
	// store.dispatch({type: "CHANGE_NAME", payload: "Jim"});
	// store.dispatch({type: "CHANGE_PASSWORD", payload: "JIMBONE"});
	// store.dispatch({type: "CHANGE_PASSWORD", payload: "CHANGED IT"});
	
	// store.dispatch((dispatch) => {
	//   dispatch({type: "CHANGE_NAME", payload: "jimbot"});
	//
	//   dispatch({type: "CHANGE_PASSWORD", payload: "pass"});
	// });
	//
	
	
	exports.default = store;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc3RvcmUuanM/ZjM5YyJdLCJuYW1lcyI6WyJtaWRkbGV3YXJlIiwic3RvcmUiLCJzdWJzY3JpYmUiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFNQSxhQUFhLGtEQUF1Qiw0QkFBdkIsQ0FBbkI7O0FBRUEsS0FBTUMsUUFBUSw0Q0FBc0JELFVBQXRCLENBQWQ7O0FBRUFDLE9BQU1DLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQkMsV0FBUUMsR0FBUixDQUFZLGdCQUFaLEVBQThCSCxNQUFNSSxRQUFOLEVBQTlCO0FBQ0QsRUFGRDs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7bUJBSWVKLEsiLCJmaWxlIjoiMC4zMzEwY2M0ZGQ4ZjJmN2Q2Mzk2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGxvZ2dlciBmcm9tIFwicmVkdXgtbG9nZ2VyXCI7XG5pbXBvcnQgcmVkdWNlcnMgZnJvbSBcIi4vcmVkdWNlcnMvcmVkdWNlcnNcIjtcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcblxuLy8gbG9nZ2VyIG1vZGlmaWVzIHRoZSBhY3Rpb25zLlxuLy8gY29uc3QgbG9nZ2VyID0gKHN0b3JlKSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhcImFjdGlvbiBmaXJlZFwiKTtcbi8vICAgbmV4dChhY3Rpb24pO1xuLy8gfTtcbi8vIGNvbnN0IGVycm9yID0gKHN0b3JlKSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xuLy8gICB0cnkge1xuLy8gICAgIG5leHQoYWN0aW9uKTtcbi8vICAgfSBjYXRjaChlKSB7XG4vLyAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuLy8gICB9XG4vLyB9O1xuXG5jb25zdCBtaWRkbGV3YXJlID0gYXBwbHlNaWRkbGV3YXJlKHRodW5rLCBsb2dnZXIoKSk7XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMsIG1pZGRsZXdhcmUpO1xuXG5zdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICBjb25zb2xlLmxvZygnc3RvcmUgY2hhbmdlZCAnLCBzdG9yZS5nZXRTdGF0ZSgpKTtcbn0pO1xuXG4vLyBzdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJDSEFOR0VfTkFNRVwiLCBwYXlsb2FkOiBcIkppbVwifSk7XG4vLyBzdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJDSEFOR0VfUEFTU1dPUkRcIiwgcGF5bG9hZDogXCJKSU1CT05FXCJ9KTtcbi8vIHN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkNIQU5HRV9QQVNTV09SRFwiLCBwYXlsb2FkOiBcIkNIQU5HRUQgSVRcIn0pO1xuXG4vLyBzdG9yZS5kaXNwYXRjaCgoZGlzcGF0Y2gpID0+IHtcbi8vICAgZGlzcGF0Y2goe3R5cGU6IFwiQ0hBTkdFX05BTUVcIiwgcGF5bG9hZDogXCJqaW1ib3RcIn0pO1xuLy9cbi8vICAgZGlzcGF0Y2goe3R5cGU6IFwiQ0hBTkdFX1BBU1NXT1JEXCIsIHBheWxvYWQ6IFwicGFzc1wifSk7XG4vLyB9KTtcbi8vXG5cblxuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYXBwL3N0b3JlLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==