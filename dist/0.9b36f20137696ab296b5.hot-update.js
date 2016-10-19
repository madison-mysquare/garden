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
	
	var _reduxPromiseMiddleware = __webpack_require__(450);
	
	var _reduxPromiseMiddleware2 = _interopRequireDefault(_reduxPromiseMiddleware);
	
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
	
	var middleware = (0, _redux.applyMiddleware)((0, _reduxPromiseMiddleware2.default)(), _reduxThunk2.default, (0, _reduxLogger2.default)());
	
	var store = (0, _redux.createStore)(_reducers2.default, middleware);
	
	store.subscribe(function () {
	  console.log('store changed ', store.getState());
	});
	
	// store.dispatch({type: "CHANGE_NAME", payload: "Jim"});
	// store.dispatch({type: "CHANGE_PASSWORD", payload: "JIMBONE"});
	// store.dispatch({type: "CHANGE_PASSWORD", payload: "CHANGED IT"});
	
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
	
	store.dispatch({
	  type: "CHANGE_NAME",
	  payload: "JIMbot"
	});
	
	exports.default = store;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc3RvcmUuanM/ZjM5YyJdLCJuYW1lcyI6WyJtaWRkbGV3YXJlIiwic3RvcmUiLCJzdWJzY3JpYmUiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGUiLCJkaXNwYXRjaCIsInR5cGUiLCJwYXlsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFNQSxhQUFhLDRCQUFnQix1Q0FBaEIsd0JBQWtDLDRCQUFsQyxDQUFuQjs7QUFFQSxLQUFNQyxRQUFRLDRDQUFzQkQsVUFBdEIsQ0FBZDs7QUFFQUMsT0FBTUMsU0FBTixDQUFnQixZQUFNO0FBQ3BCQyxXQUFRQyxHQUFSLENBQVksZ0JBQVosRUFBOEJILE1BQU1JLFFBQU4sRUFBOUI7QUFDRCxFQUZEOztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBSixPQUFNSyxRQUFOLENBQWU7QUFDYkMsU0FBTSxhQURPO0FBRWJDLFlBQVM7QUFGSSxFQUFmOzttQkFRZVAsSyIsImZpbGUiOiIwLjliMzZmMjAxMzc2OTZhYjI5NmI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgbG9nZ2VyIGZyb20gXCJyZWR1eC1sb2dnZXJcIjtcbmltcG9ydCByZWR1Y2VycyBmcm9tIFwiLi9yZWR1Y2Vycy9yZWR1Y2Vyc1wiO1xuaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiO1xuaW1wb3J0IHByb21pc2UgZnJvbSBcInJlZHV4LXByb21pc2UtbWlkZGxld2FyZVwiO1xuXG4vLyBsb2dnZXIgbW9kaWZpZXMgdGhlIGFjdGlvbnMuXG4vLyBjb25zdCBsb2dnZXIgPSAoc3RvcmUpID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKFwiYWN0aW9uIGZpcmVkXCIpO1xuLy8gICBuZXh0KGFjdGlvbik7XG4vLyB9O1xuLy8gY29uc3QgZXJyb3IgPSAoc3RvcmUpID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XG4vLyAgIHRyeSB7XG4vLyAgICAgbmV4dChhY3Rpb24pO1xuLy8gICB9IGNhdGNoKGUpIHtcbi8vICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4vLyAgIH1cbi8vIH07XG5cbmNvbnN0IG1pZGRsZXdhcmUgPSBhcHBseU1pZGRsZXdhcmUocHJvbWlzZSgpLCB0aHVuaywgbG9nZ2VyKCkpO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCBtaWRkbGV3YXJlKTtcblxuc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgY29uc29sZS5sb2coJ3N0b3JlIGNoYW5nZWQgJywgc3RvcmUuZ2V0U3RhdGUoKSk7XG59KTtcblxuLy8gc3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiQ0hBTkdFX05BTUVcIiwgcGF5bG9hZDogXCJKaW1cIn0pO1xuLy8gc3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiQ0hBTkdFX1BBU1NXT1JEXCIsIHBheWxvYWQ6IFwiSklNQk9ORVwifSk7XG4vLyBzdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJDSEFOR0VfUEFTU1dPUkRcIiwgcGF5bG9hZDogXCJDSEFOR0VEIElUXCJ9KTtcblxuLy8gc3RvcmUuZGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG4vLyAgIGRpc3BhdGNoKHt0eXBlOiBcIkNIQU5HRV9OQU1FXCIsIHBheWxvYWQ6IFwiamltYm90XCJ9KTtcbi8vICAgZGlzcGF0Y2goe3R5cGU6IFwiQ0hBTkdFX1BBU1NXT1JEXCIsIHBheWxvYWQ6IFwicGFzc1wifSk7XG4vLyAgIGF4aW9zLmdldChcIi9cIilcbi8vICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbi8vICAgICAgIGNvbnNvbGUubG9nKHJlc29uc2UpO1xuLy8gICAgIH0pXG4vLyAgICAgLmNhdGNoKChlcnIpID0+IHtcbi8vICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4vLyAgICAgfSk7XG4vLyB9KTtcblxuc3RvcmUuZGlzcGF0Y2goe1xuICB0eXBlOiBcIkNIQU5HRV9OQU1FXCIsXG4gIHBheWxvYWQ6IFwiSklNYm90XCJcbn0pO1xuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYXBwL3N0b3JlLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==