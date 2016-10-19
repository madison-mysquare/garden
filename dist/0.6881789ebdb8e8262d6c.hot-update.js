webpackHotUpdate(0,{

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(101);
	
	var _reducers = __webpack_require__(178);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	var _reduxLogger = __webpack_require__(409);
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
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
	
	var middleware = (0, _redux.applyMiddleware)((0, _reduxLogger2.default)());
	
	var store = (0, _redux.createStore)(_reducers2.default, middleware);
	
	store.subscribe(function () {
	  console.log('store changed ', store.getState());
	});
	
	// store.dispatch({type: "CHANGE_NAME", payload: "Jim"});
	// store.dispatch({type: "CHANGE_PASSWORD", payload: "JIMBONE"});
	// store.dispatch({type: "CHANGE_PASSWORD", payload: "CHANGED IT"});
	
	store.dispatch(function (dispatch) {
	  dispatch({ type: type });
	
	  dispatch({});
	});
	
	exports.default = store;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc3RvcmUuanM/ZjM5YyJdLCJuYW1lcyI6WyJtaWRkbGV3YXJlIiwic3RvcmUiLCJzdWJzY3JpYmUiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGUiLCJkaXNwYXRjaCIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQU1BLGFBQWEsNEJBQWdCLDRCQUFoQixDQUFuQjs7QUFFQSxLQUFNQyxRQUFRLDRDQUFzQkQsVUFBdEIsQ0FBZDs7QUFFQUMsT0FBTUMsU0FBTixDQUFnQixZQUFNO0FBQ3BCQyxXQUFRQyxHQUFSLENBQVksZ0JBQVosRUFBOEJILE1BQU1JLFFBQU4sRUFBOUI7QUFDRCxFQUZEOztBQUlBO0FBQ0E7QUFDQTs7QUFFQUosT0FBTUssUUFBTixDQUFlLFVBQUNBLFFBQUQsRUFBYztBQUMzQkEsWUFBUyxFQUFDQyxVQUFELEVBQVQ7O0FBRUFELFlBQVMsRUFBVDtBQUNELEVBSkQ7O21CQVNlTCxLIiwiZmlsZSI6IjAuNjg4MTc4OWViZGI4ZTgyNjJkNmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCByZWR1Y2VycyBmcm9tIFwiLi9yZWR1Y2Vycy9yZWR1Y2Vyc1wiO1xuaW1wb3J0IGxvZ2dlciBmcm9tIFwicmVkdXgtbG9nZ2VyXCI7XG5cbi8vIGxvZ2dlciBtb2RpZmllcyB0aGUgYWN0aW9ucy5cbi8vIGNvbnN0IGxvZ2dlciA9IChzdG9yZSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcbi8vICAgY29uc29sZS5sb2coXCJhY3Rpb24gZmlyZWRcIik7XG4vLyAgIG5leHQoYWN0aW9uKTtcbi8vIH07XG4vLyBjb25zdCBlcnJvciA9IChzdG9yZSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcbi8vICAgdHJ5IHtcbi8vICAgICBuZXh0KGFjdGlvbik7XG4vLyAgIH0gY2F0Y2goZSkge1xuLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbi8vICAgfVxuLy8gfTtcblxuY29uc3QgbWlkZGxld2FyZSA9IGFwcGx5TWlkZGxld2FyZShsb2dnZXIoKSk7XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMsIG1pZGRsZXdhcmUpO1xuXG5zdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICBjb25zb2xlLmxvZygnc3RvcmUgY2hhbmdlZCAnLCBzdG9yZS5nZXRTdGF0ZSgpKTtcbn0pO1xuXG4vLyBzdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJDSEFOR0VfTkFNRVwiLCBwYXlsb2FkOiBcIkppbVwifSk7XG4vLyBzdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJDSEFOR0VfUEFTU1dPUkRcIiwgcGF5bG9hZDogXCJKSU1CT05FXCJ9KTtcbi8vIHN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkNIQU5HRV9QQVNTV09SRFwiLCBwYXlsb2FkOiBcIkNIQU5HRUQgSVRcIn0pO1xuXG5zdG9yZS5kaXNwYXRjaCgoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goe3R5cGV9KVxuXG4gIGRpc3BhdGNoKHt9KTtcbn0pO1xuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYXBwL3N0b3JlLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==