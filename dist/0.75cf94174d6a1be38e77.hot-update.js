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
	  dispatch({ type: "CHANGE_NAME", payload: "jimbot" });
	  dispatch({ type: "CHANGE_PASSWORD", payload: "pass" });
	  _axios2.default.get("https://api.yelp.com/v2/search?oauth_consumer_key=UDqRCfPtj6su6jgHbVa2IA&oauth_token=o1em_rR6awlWLUgis5wLh5qaUoYwdJGN&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1474416935&oauth_nonce=RtWXw1&oauth_version=1.0&oauth_signature=r4oSh6Z6jbpL6bIFM0qOobeD2fA=&term=food&location=sanfrancisco&limit=1&oauth_consumer_key=UDqRCfPtj6su6jgHbVa2IA&oauth_token=o1em_rR6awlWLUgis5wLh5qaUoYwdJGN&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1474416935&oauth_nonce=RtWXw1&oauth_version=1.0&oauth_signature=r4oSh6Z6jbpL6bIFM0qOobeD2fA=").then(function (response) {
	    console.log(resonse);
	  });
	});
	
	exports.default = store;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc3RvcmUuanM/ZjM5YyJdLCJuYW1lcyI6WyJtaWRkbGV3YXJlIiwic3RvcmUiLCJzdWJzY3JpYmUiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGUiLCJkaXNwYXRjaCIsInR5cGUiLCJwYXlsb2FkIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwicmVzb25zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQU1BLGFBQWEsa0RBQXVCLDRCQUF2QixDQUFuQjs7QUFFQSxLQUFNQyxRQUFRLDRDQUFzQkQsVUFBdEIsQ0FBZDs7QUFFQUMsT0FBTUMsU0FBTixDQUFnQixZQUFNO0FBQ3BCQyxXQUFRQyxHQUFSLENBQVksZ0JBQVosRUFBOEJILE1BQU1JLFFBQU4sRUFBOUI7QUFDRCxFQUZEOztBQUlBO0FBQ0E7QUFDQTs7QUFFQUosT0FBTUssUUFBTixDQUFlLFVBQUNBLFFBQUQsRUFBYztBQUMzQkEsWUFBUyxFQUFDQyxNQUFNLGFBQVAsRUFBc0JDLFNBQVMsUUFBL0IsRUFBVDtBQUNBRixZQUFTLEVBQUNDLE1BQU0saUJBQVAsRUFBMEJDLFNBQVMsTUFBbkMsRUFBVDtBQUNBLG1CQUFNQyxHQUFOLENBQVUsa2hCQUFWLEVBQ0dDLElBREgsQ0FDUSxVQUFDQyxRQUFELEVBQWM7QUFDbEJSLGFBQVFDLEdBQVIsQ0FBWVEsT0FBWjtBQUNELElBSEg7QUFJRCxFQVBEOzttQkFZZVgsSyIsImZpbGUiOiIwLjc1Y2Y5NDE3NGQ2YTFiZTM4ZTc3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgbG9nZ2VyIGZyb20gXCJyZWR1eC1sb2dnZXJcIjtcbmltcG9ydCByZWR1Y2VycyBmcm9tIFwiLi9yZWR1Y2Vycy9yZWR1Y2Vyc1wiO1xuaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiO1xuXG4vLyBsb2dnZXIgbW9kaWZpZXMgdGhlIGFjdGlvbnMuXG4vLyBjb25zdCBsb2dnZXIgPSAoc3RvcmUpID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKFwiYWN0aW9uIGZpcmVkXCIpO1xuLy8gICBuZXh0KGFjdGlvbik7XG4vLyB9O1xuLy8gY29uc3QgZXJyb3IgPSAoc3RvcmUpID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XG4vLyAgIHRyeSB7XG4vLyAgICAgbmV4dChhY3Rpb24pO1xuLy8gICB9IGNhdGNoKGUpIHtcbi8vICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4vLyAgIH1cbi8vIH07XG5cbmNvbnN0IG1pZGRsZXdhcmUgPSBhcHBseU1pZGRsZXdhcmUodGh1bmssIGxvZ2dlcigpKTtcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VycywgbWlkZGxld2FyZSk7XG5cbnN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdzdG9yZSBjaGFuZ2VkICcsIHN0b3JlLmdldFN0YXRlKCkpO1xufSk7XG5cbi8vIHN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkNIQU5HRV9OQU1FXCIsIHBheWxvYWQ6IFwiSmltXCJ9KTtcbi8vIHN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkNIQU5HRV9QQVNTV09SRFwiLCBwYXlsb2FkOiBcIkpJTUJPTkVcIn0pO1xuLy8gc3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiQ0hBTkdFX1BBU1NXT1JEXCIsIHBheWxvYWQ6IFwiQ0hBTkdFRCBJVFwifSk7XG5cbnN0b3JlLmRpc3BhdGNoKChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaCh7dHlwZTogXCJDSEFOR0VfTkFNRVwiLCBwYXlsb2FkOiBcImppbWJvdFwifSk7XG4gIGRpc3BhdGNoKHt0eXBlOiBcIkNIQU5HRV9QQVNTV09SRFwiLCBwYXlsb2FkOiBcInBhc3NcIn0pO1xuICBheGlvcy5nZXQoXCJodHRwczovL2FwaS55ZWxwLmNvbS92Mi9zZWFyY2g/b2F1dGhfY29uc3VtZXJfa2V5PVVEcVJDZlB0ajZzdTZqZ0hiVmEySUEmb2F1dGhfdG9rZW49bzFlbV9yUjZhd2xXTFVnaXM1d0xoNXFhVW9Zd2RKR04mb2F1dGhfc2lnbmF0dXJlX21ldGhvZD1ITUFDLVNIQTEmb2F1dGhfdGltZXN0YW1wPTE0NzQ0MTY5MzUmb2F1dGhfbm9uY2U9UnRXWHcxJm9hdXRoX3ZlcnNpb249MS4wJm9hdXRoX3NpZ25hdHVyZT1yNG9TaDZaNmpicEw2YklGTTBxT29iZUQyZkE9JnRlcm09Zm9vZCZsb2NhdGlvbj1zYW5mcmFuY2lzY28mbGltaXQ9MSZvYXV0aF9jb25zdW1lcl9rZXk9VURxUkNmUHRqNnN1NmpnSGJWYTJJQSZvYXV0aF90b2tlbj1vMWVtX3JSNmF3bFdMVWdpczV3TGg1cWFVb1l3ZEpHTiZvYXV0aF9zaWduYXR1cmVfbWV0aG9kPUhNQUMtU0hBMSZvYXV0aF90aW1lc3RhbXA9MTQ3NDQxNjkzNSZvYXV0aF9ub25jZT1SdFdYdzEmb2F1dGhfdmVyc2lvbj0xLjAmb2F1dGhfc2lnbmF0dXJlPXI0b1NoNlo2amJwTDZiSUZNMHFPb2JlRDJmQT1cIilcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc29uc2UpO1xuICAgIH0pO1xufSk7XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hcHAvc3RvcmUuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9