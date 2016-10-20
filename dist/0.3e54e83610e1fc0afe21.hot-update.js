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
	
	var middleware = (0, _redux.applyMiddleware)((0, _reactRouterRedux.routerMiddleware)(_reactRouter.browserHistory), (0, _reduxPromiseMiddleware2.default)(), (0, _reduxThunk2.default)(), (0, _reduxLogger2.default)());
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS5qcz9jMTgyIl0sIm5hbWVzIjpbInVzZXIiLCJuYW1lIiwicGFzc3dvcmQiLCJkZWZhdWx0U3RhdGUiLCJtaWRkbGV3YXJlIiwic3RvcmUiLCJzdWJzY3JpYmUiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGUiLCJoaXN0b3J5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxLQUFNQSxPQUFPO0FBQ1hDLFNBQU0sRUFESztBQUVYQyxhQUFVO0FBRkMsRUFBYjs7QUFLQSxLQUFNQyxlQUFjO0FBQ2xCSDtBQURrQixFQUFwQjs7QUFJQSxLQUFNSSxhQUFhLDRCQUFnQixvRUFBaEIsRUFBa0QsdUNBQWxELEVBQTZELDJCQUE3RCxFQUFzRSw0QkFBdEUsQ0FBbkI7O0FBRUEsS0FBTUMsUUFBUSw0Q0FBeUJELFVBQXpCLENBQWQ7O0FBRUFDLE9BQU1DLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQkMsV0FBUUMsR0FBUixDQUFZLGdCQUFaLEVBQThCSCxNQUFNSSxRQUFOLEVBQTlCO0FBQ0QsRUFGRDs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBTUMsVUFBVSx5RUFBcUNMLEtBQXJDLENBQWhCO0FBQ0E7O0FBRUFNLFFBQU9DLE9BQVAsR0FBaUJGLE9BQWpCO21CQUNlTCxLIiwiZmlsZSI6IjAuM2U1NGU4MzYxMGUxZmMwYWZlMjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7IHN5bmNIaXN0b3J5V2l0aFN0b3JlLCByb3V0ZXJNaWRkbGV3YXJlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1yZWR1eFwiO1xuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgbG9nZ2VyIGZyb20gXCJyZWR1eC1sb2dnZXJcIjtcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi9yZWR1Y2Vycy9yZWR1Y2Vyc1wiO1xuaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiO1xuaW1wb3J0IHByb21pc2UgZnJvbSBcInJlZHV4LXByb21pc2UtbWlkZGxld2FyZVwiO1xuXG5jb25zdCB1c2VyID0ge1xuICBuYW1lOiBcIlwiLFxuICBwYXNzd29yZDogXCJcIlxufTtcblxuY29uc3QgZGVmYXVsdFN0YXRlID17XG4gIHVzZXIsXG59O1xuXG5jb25zdCBtaWRkbGV3YXJlID0gYXBwbHlNaWRkbGV3YXJlKHJvdXRlck1pZGRsZXdhcmUoYnJvd3Nlckhpc3RvcnkpLCBwcm9taXNlKCksIHRodW5rKCksIGxvZ2dlcigpKTtcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgbWlkZGxld2FyZSk7XG5cbnN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdzdG9yZSBjaGFuZ2VkICcsIHN0b3JlLmdldFN0YXRlKCkpO1xufSk7XG5cbi8vIHN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkNIQU5HRV9OQU1FXCIsIHBheWxvYWQ6IFwiSmltXCJ9KTtcbi8vIHN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkNIQU5HRV9QQVNTV09SRFwiLCBwYXlsb2FkOiBcIkpJTUJPTkVcIn0pO1xuLy8gc3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiQ0hBTkdFX1BBU1NXT1JEXCIsIHBheWxvYWQ6IFwiQ0hBIElUXCJ9KTtcblxuLy8gc3RvcmUuZGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG4vLyAgIGRpc3BhdGNoKHt0eXBlOiBcIkNIQU5HRV9OQU1FXCIsIHBheWxvYWQ6IFwiamltYm90XCJ9KTtcbi8vICAgZGlzcGF0Y2goe3R5cGU6IFwiQ0hBTkdFX1BBU1NXT1JEXCIsIHBheWxvYWQ6IFwicGFzc1wifSk7XG4vLyAgIGF4aW9zLmdldChcIi9cIilcbi8vICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbi8vICAgICAgIGNvbnNvbGUubG9nKHJlc29uc2UpO1xuLy8gICAgIH0pXG4vLyAgICAgLmNhdGNoKChlcnIpID0+IHtcbi8vICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4vLyAgICAgfSk7XG4vLyB9KTtcblxuLy8gaWYobW9kdWxlLmhvdCkge1xuLy8gICBtb2R1bGUuaG90LmFjY2VwdCgnLi9yZWR1Y2Vycy8nLCgpID0+IHtcbi8vICAgICBjb25zdCBuZXh0Um9vdFJlZHVjZXIgPSByZXF1aXJlKCcuL3JlZHVjZXJzL3JlZHVjZXJzJykuZGVmYXVsdDtcbi8vICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcihuZXh0Um9vdFJlZHVjZXIpO1xuLy8gICB9KTtcbi8vIH1cblxuY29uc3QgaGlzdG9yeSA9IHN5bmNIaXN0b3J5V2l0aFN0b3JlKGJyb3dzZXJIaXN0b3J5LCBzdG9yZSk7XG4vLyBoaXN0b3J5Lmxpc3Rlbihsb2NhdGlvbiA9PiBhbmFseXRpY3NTZXJ2aWNlLnRyYWNrKGxvY2F0aW9uLnBhdGhuYW1lKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gaGlzdG9yeTtcbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zdG9yZS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=