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
	
	store.dispatch(function (dispatch) {
	  dispatch({ type: "FOO" });
	
	  dispatch({ type: "BAR" });
	});
	
	exports.default = store;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc3RvcmUuanM/ZjM5YyJdLCJuYW1lcyI6WyJtaWRkbGV3YXJlIiwic3RvcmUiLCJzdWJzY3JpYmUiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGUiLCJkaXNwYXRjaCIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFNQSxhQUFhLGtEQUF1Qiw0QkFBdkIsQ0FBbkI7O0FBRUEsS0FBTUMsUUFBUSw0Q0FBc0JELFVBQXRCLENBQWQ7O0FBRUFDLE9BQU1DLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQkMsV0FBUUMsR0FBUixDQUFZLGdCQUFaLEVBQThCSCxNQUFNSSxRQUFOLEVBQTlCO0FBQ0QsRUFGRDs7QUFJQTtBQUNBO0FBQ0E7O0FBRUFKLE9BQU1LLFFBQU4sQ0FBZSxVQUFDQSxRQUFELEVBQWM7QUFDM0JBLFlBQVMsRUFBQ0MsTUFBTSxLQUFQLEVBQVQ7O0FBRUFELFlBQVMsRUFBQ0MsTUFBTSxLQUFQLEVBQVQ7QUFDRCxFQUpEOzttQkFTZU4sSyIsImZpbGUiOiIwLjcyMmIxNTFhNjBlMTZiNjg0ZDUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgbG9nZ2VyIGZyb20gXCJyZWR1eC1sb2dnZXJcIjtcbmltcG9ydCByZWR1Y2VycyBmcm9tIFwiLi9yZWR1Y2Vycy9yZWR1Y2Vyc1wiO1xuaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiO1xuXG4vLyBsb2dnZXIgbW9kaWZpZXMgdGhlIGFjdGlvbnMuXG4vLyBjb25zdCBsb2dnZXIgPSAoc3RvcmUpID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKFwiYWN0aW9uIGZpcmVkXCIpO1xuLy8gICBuZXh0KGFjdGlvbik7XG4vLyB9O1xuLy8gY29uc3QgZXJyb3IgPSAoc3RvcmUpID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XG4vLyAgIHRyeSB7XG4vLyAgICAgbmV4dChhY3Rpb24pO1xuLy8gICB9IGNhdGNoKGUpIHtcbi8vICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4vLyAgIH1cbi8vIH07XG5cbmNvbnN0IG1pZGRsZXdhcmUgPSBhcHBseU1pZGRsZXdhcmUodGh1bmssIGxvZ2dlcigpKTtcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VycywgbWlkZGxld2FyZSk7XG5cbnN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdzdG9yZSBjaGFuZ2VkICcsIHN0b3JlLmdldFN0YXRlKCkpO1xufSk7XG5cbi8vIHN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkNIQU5HRV9OQU1FXCIsIHBheWxvYWQ6IFwiSmltXCJ9KTtcbi8vIHN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkNIQU5HRV9QQVNTV09SRFwiLCBwYXlsb2FkOiBcIkpJTUJPTkVcIn0pO1xuLy8gc3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiQ0hBTkdFX1BBU1NXT1JEXCIsIHBheWxvYWQ6IFwiQ0hBTkdFRCBJVFwifSk7XG5cbnN0b3JlLmRpc3BhdGNoKChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaCh7dHlwZTogXCJGT09cIn0pO1xuXG4gIGRpc3BhdGNoKHt0eXBlOiBcIkJBUlwifSk7XG59KTtcblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2FwcC9zdG9yZS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=