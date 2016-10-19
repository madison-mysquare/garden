webpackHotUpdate(0,{

/***/ 179:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var userReducer = function userReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var action = arguments[1];
	
	  switch (action.type) {
	    case "CHANGE_NAME":
	      {
	        state = Object.assign({}, state, {
	          name: action.payload
	        });
	        break;
	      }
	    case "CHANGE_PASSWORD":
	      {
	        state = Object.assign({}, state, {
	          password: action.payload
	        });
	        break;
	      }
	  }
	  return state;
	};
	
	exports.default = userReducer;

/***/ },

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
	  _axios2.default.get("/").then(function (response) {
	    console.log(resonse);
	  }).catch(function (err) {
	    console.log(err);
	  });
	});
	
	exports.default = store;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvcmVkdWNlcnMvdXNlclJlZHVjZXIuanM/MGZmMyIsIndlYnBhY2s6Ly8vLi9hcHAvc3RvcmUuanM/ZjM5YyJdLCJuYW1lcyI6WyJ1c2VyUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIk9iamVjdCIsImFzc2lnbiIsIm5hbWUiLCJwYXlsb2FkIiwicGFzc3dvcmQiLCJtaWRkbGV3YXJlIiwic3RvcmUiLCJzdWJzY3JpYmUiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGUiLCJkaXNwYXRjaCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsInJlc29uc2UiLCJjYXRjaCIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxLQUFNQSxjQUFjLFNBQWRBLFdBQWMsR0FBc0I7QUFBQSxPQUFyQkMsS0FBcUIsdUVBQWYsRUFBZTtBQUFBLE9BQVhDLE1BQVc7O0FBQ3hDLFdBQVFBLE9BQU9DLElBQWY7QUFDRSxVQUFLLGFBQUw7QUFBb0I7QUFDbEJGLGlCQUFRRyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQkosS0FBbEIsRUFBeUI7QUFDL0JLLGlCQUFNSixPQUFPSztBQURrQixVQUF6QixDQUFSO0FBR0E7QUFDRDtBQUNELFVBQUssaUJBQUw7QUFBd0I7QUFDdEJOLGlCQUFRRyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQkosS0FBbEIsRUFBeUI7QUFDakNPLHFCQUFVTixPQUFPSztBQURnQixVQUF6QixDQUFSO0FBR0E7QUFDRDtBQVpIO0FBY0EsVUFBT04sS0FBUDtBQUNELEVBaEJEOzttQkFrQmVELFc7Ozs7Ozs7Ozs7Ozs7QUNuQmY7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFNUyxhQUFhLGtEQUF1Qiw0QkFBdkIsQ0FBbkI7O0FBRUEsS0FBTUMsUUFBUSw0Q0FBc0JELFVBQXRCLENBQWQ7O0FBRUFDLE9BQU1DLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQkMsV0FBUUMsR0FBUixDQUFZLGdCQUFaLEVBQThCSCxNQUFNSSxRQUFOLEVBQTlCO0FBQ0QsRUFGRDs7QUFJQTtBQUNBO0FBQ0E7O0FBRUFKLE9BQU1LLFFBQU4sQ0FBZSxVQUFDQSxRQUFELEVBQWM7QUFDM0JBLFlBQVMsRUFBQ1osTUFBTSxhQUFQLEVBQXNCSSxTQUFTLFFBQS9CLEVBQVQ7QUFDQVEsWUFBUyxFQUFDWixNQUFNLGlCQUFQLEVBQTBCSSxTQUFTLE1BQW5DLEVBQVQ7QUFDQSxtQkFBTVMsR0FBTixDQUFVLEdBQVYsRUFDR0MsSUFESCxDQUNRLFVBQUNDLFFBQUQsRUFBYztBQUNsQk4sYUFBUUMsR0FBUixDQUFZTSxPQUFaO0FBQ0QsSUFISCxFQUlHQyxLQUpILENBSVMsVUFBQ0MsR0FBRCxFQUFTO0FBQ2RULGFBQVFDLEdBQVIsQ0FBWVEsR0FBWjtBQUNELElBTkg7QUFPRCxFQVZEOzttQkFlZVgsSyIsImZpbGUiOiIwLjEwYTJkZDJjYzc0NGQ1NjlkNjg3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHVzZXJSZWR1Y2VyID0gKHN0YXRlPXt9LCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJDSEFOR0VfTkFNRVwiOiB7XG4gICAgICBzdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIG5hbWU6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIFwiQ0hBTkdFX1BBU1NXT1JEXCI6IHtcbiAgICAgIHN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgIHBhc3N3b3JkOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlclJlZHVjZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2FwcC9yZWR1Y2Vycy91c2VyUmVkdWNlci5qc1xuICoqLyIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBsb2dnZXIgZnJvbSBcInJlZHV4LWxvZ2dlclwiO1xuaW1wb3J0IHJlZHVjZXJzIGZyb20gXCIuL3JlZHVjZXJzL3JlZHVjZXJzXCI7XG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCI7XG5cbi8vIGxvZ2dlciBtb2RpZmllcyB0aGUgYWN0aW9ucy5cbi8vIGNvbnN0IGxvZ2dlciA9IChzdG9yZSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcbi8vICAgY29uc29sZS5sb2coXCJhY3Rpb24gZmlyZWRcIik7XG4vLyAgIG5leHQoYWN0aW9uKTtcbi8vIH07XG4vLyBjb25zdCBlcnJvciA9IChzdG9yZSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcbi8vICAgdHJ5IHtcbi8vICAgICBuZXh0KGFjdGlvbik7XG4vLyAgIH0gY2F0Y2goZSkge1xuLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbi8vICAgfVxuLy8gfTtcblxuY29uc3QgbWlkZGxld2FyZSA9IGFwcGx5TWlkZGxld2FyZSh0aHVuaywgbG9nZ2VyKCkpO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCBtaWRkbGV3YXJlKTtcblxuc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgY29uc29sZS5sb2coJ3N0b3JlIGNoYW5nZWQgJywgc3RvcmUuZ2V0U3RhdGUoKSk7XG59KTtcblxuLy8gc3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiQ0hBTkdFX05BTUVcIiwgcGF5bG9hZDogXCJKaW1cIn0pO1xuLy8gc3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiQ0hBTkdFX1BBU1NXT1JEXCIsIHBheWxvYWQ6IFwiSklNQk9ORVwifSk7XG4vLyBzdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJDSEFOR0VfUEFTU1dPUkRcIiwgcGF5bG9hZDogXCJDSEFOR0VEIElUXCJ9KTtcblxuc3RvcmUuZGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHt0eXBlOiBcIkNIQU5HRV9OQU1FXCIsIHBheWxvYWQ6IFwiamltYm90XCJ9KTtcbiAgZGlzcGF0Y2goe3R5cGU6IFwiQ0hBTkdFX1BBU1NXT1JEXCIsIHBheWxvYWQ6IFwicGFzc1wifSk7XG4gIGF4aW9zLmdldChcIi9cIilcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc29uc2UpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfSk7XG59KTtcblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2FwcC9zdG9yZS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=