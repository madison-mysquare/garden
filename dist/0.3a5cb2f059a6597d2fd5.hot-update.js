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
	
	
	exports.default = store;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS5qcz9jMTgyIl0sIm5hbWVzIjpbInVzZXIiLCJuYW1lIiwicGFzc3dvcmQiLCJkZWZhdWx0U3RhdGUiLCJtaWRkbGV3YXJlIiwic3RvcmUiLCJzdWJzY3JpYmUiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsS0FBTUEsT0FBTztBQUNYQyxTQUFNLEVBREs7QUFFWEMsYUFBVTtBQUZDLEVBQWI7O0FBS0EsS0FBTUMsZUFBYztBQUNsQkg7QUFEa0IsRUFBcEI7O0FBSUEsS0FBTUksYUFBYSw0QkFBZ0Isb0VBQWhCLEVBQWtELHVDQUFsRCx3QkFBb0UsNEJBQXBFLENBQW5COztBQUVBLEtBQU1DLFFBQVEsNENBQXlCRCxVQUF6QixDQUFkOztBQUVBQyxPQUFNQyxTQUFOLENBQWdCLFlBQU07QUFDcEJDLFdBQVFDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QkgsTUFBTUksUUFBTixFQUE5QjtBQUNELEVBRkQ7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OzttQkFHZUosSyIsImZpbGUiOiIwLjNhNWNiMmYwNTlhNjU5N2QyZmQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyBzeW5jSGlzdG9yeVdpdGhTdG9yZSwgcm91dGVyTWlkZGxld2FyZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItcmVkdXhcIjtcbmltcG9ydCB7IGJyb3dzZXJIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGxvZ2dlciBmcm9tIFwicmVkdXgtbG9nZ2VyXCI7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnMvcmVkdWNlcnNcIjtcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcbmltcG9ydCBwcm9taXNlIGZyb20gXCJyZWR1eC1wcm9taXNlLW1pZGRsZXdhcmVcIjtcblxuY29uc3QgdXNlciA9IHtcbiAgbmFtZTogXCJcIixcbiAgcGFzc3dvcmQ6IFwiXCJcbn07XG5cbmNvbnN0IGRlZmF1bHRTdGF0ZSA9e1xuICB1c2VyLFxufTtcblxuY29uc3QgbWlkZGxld2FyZSA9IGFwcGx5TWlkZGxld2FyZShyb3V0ZXJNaWRkbGV3YXJlKGJyb3dzZXJIaXN0b3J5KSwgcHJvbWlzZSgpLCB0aHVuaywgbG9nZ2VyKCkpO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBtaWRkbGV3YXJlKTtcblxuc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgY29uc29sZS5sb2coJ3N0b3JlIGNoYW5nZWQgJywgc3RvcmUuZ2V0U3RhdGUoKSk7XG59KTtcblxuLy8gc3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiQ0hBTkdFX05BTUVcIiwgcGF5bG9hZDogXCJKaW1cIn0pO1xuLy8gc3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiQ0hBTkdFX1BBU1NXT1JEXCIsIHBheWxvYWQ6IFwiSklNQk9ORVwifSk7XG4vLyBzdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJDSEFOR0VfUEFTU1dPUkRcIiwgcGF5bG9hZDogXCJDSEEgSVRcIn0pO1xuXG4vLyBzdG9yZS5kaXNwYXRjaCgoZGlzcGF0Y2gpID0+IHtcbi8vICAgZGlzcGF0Y2goe3R5cGU6IFwiQ0hBTkdFX05BTUVcIiwgcGF5bG9hZDogXCJqaW1ib3RcIn0pO1xuLy8gICBkaXNwYXRjaCh7dHlwZTogXCJDSEFOR0VfUEFTU1dPUkRcIiwgcGF5bG9hZDogXCJwYXNzXCJ9KTtcbi8vICAgYXhpb3MuZ2V0KFwiL1wiKVxuLy8gICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuLy8gICAgICAgY29uc29sZS5sb2cocmVzb25zZSk7XG4vLyAgICAgfSlcbi8vICAgICAuY2F0Y2goKGVycikgPT4ge1xuLy8gICAgICAgY29uc29sZS5sb2coZXJyKTtcbi8vICAgICB9KTtcbi8vIH0pO1xuXG4vLyBpZihtb2R1bGUuaG90KSB7XG4vLyAgIG1vZHVsZS5ob3QuYWNjZXB0KCcuL3JlZHVjZXJzLycsKCkgPT4ge1xuLy8gICAgIGNvbnN0IG5leHRSb290UmVkdWNlciA9IHJlcXVpcmUoJy4vcmVkdWNlcnMvcmVkdWNlcnMnKS5kZWZhdWx0O1xuLy8gICAgIHN0b3JlLnJlcGxhY2VSZWR1Y2VyKG5leHRSb290UmVkdWNlcik7XG4vLyAgIH0pO1xuLy8gfVxuXG4vLyBjb25zdCBoaXN0b3J5ID0gc3luY0hpc3RvcnlXaXRoU3RvcmUoYnJvd3Nlckhpc3RvcnksIHN0b3JlKTtcbi8vIGhpc3RvcnkubGlzdGVuKGxvY2F0aW9uID0+IGFuYWx5dGljc1NlcnZpY2UudHJhY2sobG9jYXRpb24ucGF0aG5hbWUpKTtcblxuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3RvcmUuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9