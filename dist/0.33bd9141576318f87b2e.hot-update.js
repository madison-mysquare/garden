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

/***/ },

/***/ 450:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.default = promiseMiddleware;
	
	var _isPromise = __webpack_require__(451);
	
	var _isPromise2 = _interopRequireDefault(_isPromise);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultTypes = ['PENDING', 'FULFILLED', 'REJECTED'];
	
	/**
	 * @function promiseMiddleware
	 * @description
	 * @returns {function} thunk
	 */
	function promiseMiddleware() {
	  var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  var promiseTypeSuffixes = config.promiseTypeSuffixes || defaultTypes;
	
	  return function (ref) {
	    var dispatch = ref.dispatch;
	
	
	    return function (next) {
	      return function (action) {
	        if (action.payload) {
	          if (!(0, _isPromise2.default)(action.payload) && !(0, _isPromise2.default)(action.payload.promise)) {
	            return next(action);
	          }
	        } else {
	          return next(action);
	        }
	
	        // Deconstruct the properties of the original action object to constants
	        var type = action.type;
	        var payload = action.payload;
	        var meta = action.meta;
	
	        // Assign values for promise type suffixes
	
	        var _promiseTypeSuffixes = _slicedToArray(promiseTypeSuffixes, 3);
	
	        var PENDING = _promiseTypeSuffixes[0];
	        var FULFILLED = _promiseTypeSuffixes[1];
	        var REJECTED = _promiseTypeSuffixes[2];
	
	        /**
	         * @function getAction
	         * @description Utility function for creating a rejected or fulfilled
	         * flux standard action object.
	         * @param {boolean} Is the action rejected?
	         * @returns {object} action
	         */
	
	        var getAction = function getAction(newPayload, isRejected) {
	          return _extends({
	            type: type + '_' + (isRejected ? REJECTED : FULFILLED)
	          }, newPayload === null || typeof newPayload === 'undefined' ? {} : {
	            payload: newPayload
	          }, !!meta ? { meta: meta } : {}, isRejected ? {
	            error: true
	          } : {});
	        };
	
	        /**
	         * Assign values for promise and data variables. In the case the payload
	         * is an object with a `promise` and `data` property, the values of those
	         * properties will be used. In the case the payload is a promise, the
	         * value of the payload will be used and data will be null.
	         */
	        var promise = void 0;
	        var data = void 0;
	
	        if (!(0, _isPromise2.default)(action.payload) && _typeof(action.payload) === 'object') {
	          promise = payload.promise;
	          data = payload.data;
	        } else {
	          promise = payload;
	          data = null;
	        }
	
	        /**
	         * First, dispatch the pending action. This flux standard action object
	         * describes the pending state of a promise and will include any data
	         * (for optimistic updates) and/or meta from the original action.
	         */
	        next(_extends({
	          type: type + '_' + PENDING
	        }, !!data ? { payload: data } : {}, !!meta ? { meta: meta } : {}));
	
	        /*
	         * @function handleReject
	         * @description Dispatch the rejected action and return
	         * an error object. The error object is the original error
	         * that was thrown. The user of the library is responsible for
	         * best practices in ensure that they are throwing an Error object.
	         * @params reason The reason the promise was rejected
	         * @returns {object}
	         */
	        var handleReject = function handleReject(reason) {
	          var rejectedAction = getAction(reason, true);
	          dispatch(rejectedAction);
	          throw reason;
	        };
	
	        /*
	         * @function handleFulfill
	         * @description Dispatch the fulfilled action and
	         * return the success object. The success object should
	         * contain the value and the dispatched action.
	         * @param value The value the promise was resloved with
	         * @returns {object}
	         */
	        var handleFulfill = function handleFulfill() {
	          var value = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	
	          var resolvedAction = getAction(value, false);
	          dispatch(resolvedAction);
	
	          return { value: value, action: resolvedAction };
	        };
	
	        /**
	         * Second, dispatch a rejected or fulfilled action. This flux standard
	         * action object will describe the resolved state of the promise. In
	         * the case of a rejected promise, it will include an `error` property.
	         *
	         * In order to allow proper chaining of actions using `then`, a new
	         * promise is constructed and returned. This promise will resolve
	         * with two properties: (1) the value (if fulfilled) or reason
	         * (if rejected) and (2) the flux standard action.
	         *
	         * Rejected object:
	         * {
	         *   reason: ...
	         *   action: {
	         *     error: true,
	         *     type: 'ACTION_REJECTED',
	         *     payload: ...
	         *   }
	         * }
	         *
	         * Fulfilled object:
	         * {
	         *   value: ...
	         *   action: {
	         *     type: 'ACTION_FULFILLED',
	         *     payload: ...
	         *   }
	         * }
	         */
	        return promise.then(handleFulfill, handleReject);
	      };
	    };
	  };
	}

/***/ },

/***/ 451:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.default = isPromise;
	function isPromise(value) {
	  if (value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
	    return value && typeof value.then === 'function';
	  }
	
	  return false;
	}

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc3RvcmUuanM/ZjM5YyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LXByb21pc2UtbWlkZGxld2FyZS9kaXN0L2luZGV4LmpzPzNhNjMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1wcm9taXNlLW1pZGRsZXdhcmUvZGlzdC9pc1Byb21pc2UuanM/ZWY5MyJdLCJuYW1lcyI6WyJtaWRkbGV3YXJlIiwic3RvcmUiLCJzdWJzY3JpYmUiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGUiLCJkaXNwYXRjaCIsInR5cGUiLCJwYXlsb2FkIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwicmVzb25zZSIsImNhdGNoIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFNQSxhQUFhLGtEQUF1Qiw0QkFBdkIsQ0FBbkI7O0FBRUEsS0FBTUMsUUFBUSw0Q0FBc0JELFVBQXRCLENBQWQ7O0FBRUFDLE9BQU1DLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQkMsV0FBUUMsR0FBUixDQUFZLGdCQUFaLEVBQThCSCxNQUFNSSxRQUFOLEVBQTlCO0FBQ0QsRUFGRDs7QUFJQTtBQUNBO0FBQ0E7O0FBRUFKLE9BQU1LLFFBQU4sQ0FBZSxVQUFDQSxRQUFELEVBQWM7QUFDM0JBLFlBQVMsRUFBQ0MsTUFBTSxhQUFQLEVBQXNCQyxTQUFTLFFBQS9CLEVBQVQ7QUFDQUYsWUFBUyxFQUFDQyxNQUFNLGlCQUFQLEVBQTBCQyxTQUFTLE1BQW5DLEVBQVQ7QUFDQSxtQkFBTUMsR0FBTixDQUFVLEdBQVYsRUFDR0MsSUFESCxDQUNRLFVBQUNDLFFBQUQsRUFBYztBQUNsQlIsYUFBUUMsR0FBUixDQUFZUSxPQUFaO0FBQ0QsSUFISCxFQUlHQyxLQUpILENBSVMsVUFBQ0MsR0FBRCxFQUFTO0FBQ2RYLGFBQVFDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELElBTkg7QUFPRCxFQVZEOzttQkFlZWIsSzs7Ozs7OztBQy9DZjs7QUFFQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRCxxR0FBb0csbUJBQW1CLEVBQUUsbUJBQW1CLGtHQUFrRzs7QUFFOU8sb0RBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVAsbUNBQWtDLGlDQUFpQyxlQUFlLGVBQWUsZ0JBQWdCLG9CQUFvQixNQUFNLDBDQUEwQywrQkFBK0IsYUFBYSxxQkFBcUIsbUNBQW1DLEVBQUUsRUFBRSxjQUFjLFdBQVcsVUFBVSxFQUFFLFVBQVUsTUFBTSx5Q0FBeUMsRUFBRSxVQUFVLGtCQUFrQixFQUFFLEVBQUUsYUFBYSxFQUFFLDJCQUEyQiwwQkFBMEIsWUFBWSxFQUFFLDJDQUEyQyw4QkFBOEIsRUFBRSxPQUFPLDZFQUE2RSxFQUFFLEdBQUcsRUFBRTs7QUFFcnBCOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBLHdFQUF1RTs7QUFFdkU7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLFFBQVE7QUFDM0Isc0JBQXFCLE9BQU87QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBVywrREFBK0Q7QUFDMUU7QUFDQSxZQUFXLFlBQVksYUFBYSxLQUFLO0FBQ3pDO0FBQ0EsWUFBVyxLQUFLO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVMsWUFBWSxnQkFBZ0IsS0FBSyxZQUFZLGFBQWEsS0FBSzs7QUFFeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ3hLQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRCxxR0FBb0csbUJBQW1CLEVBQUUsbUJBQW1CLGtHQUFrRzs7QUFFOU87QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEUiLCJmaWxlIjoiMC4zM2JkOTE0MTU3NjMxOGY4N2IyZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGxvZ2dlciBmcm9tIFwicmVkdXgtbG9nZ2VyXCI7XG5pbXBvcnQgcmVkdWNlcnMgZnJvbSBcIi4vcmVkdWNlcnMvcmVkdWNlcnNcIjtcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcbmltcG9ydCBwcm9taXNlIGZyb20gXCJyZWR1eC1wcm9taXNlLW1pZGRsZXdhcmVcIjtcblxuLy8gbG9nZ2VyIG1vZGlmaWVzIHRoZSBhY3Rpb25zLlxuLy8gY29uc3QgbG9nZ2VyID0gKHN0b3JlKSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhcImFjdGlvbiBmaXJlZFwiKTtcbi8vICAgbmV4dChhY3Rpb24pO1xuLy8gfTtcbi8vIGNvbnN0IGVycm9yID0gKHN0b3JlKSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xuLy8gICB0cnkge1xuLy8gICAgIG5leHQoYWN0aW9uKTtcbi8vICAgfSBjYXRjaChlKSB7XG4vLyAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuLy8gICB9XG4vLyB9O1xuXG5jb25zdCBtaWRkbGV3YXJlID0gYXBwbHlNaWRkbGV3YXJlKHRodW5rLCBsb2dnZXIoKSk7XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMsIG1pZGRsZXdhcmUpO1xuXG5zdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICBjb25zb2xlLmxvZygnc3RvcmUgY2hhbmdlZCAnLCBzdG9yZS5nZXRTdGF0ZSgpKTtcbn0pO1xuXG4vLyBzdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJDSEFOR0VfTkFNRVwiLCBwYXlsb2FkOiBcIkppbVwifSk7XG4vLyBzdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJDSEFOR0VfUEFTU1dPUkRcIiwgcGF5bG9hZDogXCJKSU1CT05FXCJ9KTtcbi8vIHN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkNIQU5HRV9QQVNTV09SRFwiLCBwYXlsb2FkOiBcIkNIQU5HRUQgSVRcIn0pO1xuXG5zdG9yZS5kaXNwYXRjaCgoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goe3R5cGU6IFwiQ0hBTkdFX05BTUVcIiwgcGF5bG9hZDogXCJqaW1ib3RcIn0pO1xuICBkaXNwYXRjaCh7dHlwZTogXCJDSEFOR0VfUEFTU1dPUkRcIiwgcGF5bG9hZDogXCJwYXNzXCJ9KTtcbiAgYXhpb3MuZ2V0KFwiL1wiKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzb25zZSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9KTtcbn0pO1xuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYXBwL3N0b3JlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9zbGljZWRUb0FycmF5ID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH0gfTsgfSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBwcm9taXNlTWlkZGxld2FyZTtcblxudmFyIF9pc1Byb21pc2UgPSByZXF1aXJlKCcuL2lzUHJvbWlzZScpO1xuXG52YXIgX2lzUHJvbWlzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1Byb21pc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZGVmYXVsdFR5cGVzID0gWydQRU5ESU5HJywgJ0ZVTEZJTExFRCcsICdSRUpFQ1RFRCddO1xuXG4vKipcbiAqIEBmdW5jdGlvbiBwcm9taXNlTWlkZGxld2FyZVxuICogQGRlc2NyaXB0aW9uXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259IHRodW5rXG4gKi9cbmZ1bmN0aW9uIHByb21pc2VNaWRkbGV3YXJlKCkge1xuICB2YXIgY29uZmlnID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cbiAgdmFyIHByb21pc2VUeXBlU3VmZml4ZXMgPSBjb25maWcucHJvbWlzZVR5cGVTdWZmaXhlcyB8fCBkZWZhdWx0VHlwZXM7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChyZWYpIHtcbiAgICB2YXIgZGlzcGF0Y2ggPSByZWYuZGlzcGF0Y2g7XG5cblxuICAgIHJldHVybiBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkKSB7XG4gICAgICAgICAgaWYgKCEoMCwgX2lzUHJvbWlzZTIuZGVmYXVsdCkoYWN0aW9uLnBheWxvYWQpICYmICEoMCwgX2lzUHJvbWlzZTIuZGVmYXVsdCkoYWN0aW9uLnBheWxvYWQucHJvbWlzZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXh0KGFjdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBuZXh0KGFjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZWNvbnN0cnVjdCB0aGUgcHJvcGVydGllcyBvZiB0aGUgb3JpZ2luYWwgYWN0aW9uIG9iamVjdCB0byBjb25zdGFudHNcbiAgICAgICAgdmFyIHR5cGUgPSBhY3Rpb24udHlwZTtcbiAgICAgICAgdmFyIHBheWxvYWQgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgdmFyIG1ldGEgPSBhY3Rpb24ubWV0YTtcblxuICAgICAgICAvLyBBc3NpZ24gdmFsdWVzIGZvciBwcm9taXNlIHR5cGUgc3VmZml4ZXNcblxuICAgICAgICB2YXIgX3Byb21pc2VUeXBlU3VmZml4ZXMgPSBfc2xpY2VkVG9BcnJheShwcm9taXNlVHlwZVN1ZmZpeGVzLCAzKTtcblxuICAgICAgICB2YXIgUEVORElORyA9IF9wcm9taXNlVHlwZVN1ZmZpeGVzWzBdO1xuICAgICAgICB2YXIgRlVMRklMTEVEID0gX3Byb21pc2VUeXBlU3VmZml4ZXNbMV07XG4gICAgICAgIHZhciBSRUpFQ1RFRCA9IF9wcm9taXNlVHlwZVN1ZmZpeGVzWzJdO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAZnVuY3Rpb24gZ2V0QWN0aW9uXG4gICAgICAgICAqIEBkZXNjcmlwdGlvbiBVdGlsaXR5IGZ1bmN0aW9uIGZvciBjcmVhdGluZyBhIHJlamVjdGVkIG9yIGZ1bGZpbGxlZFxuICAgICAgICAgKiBmbHV4IHN0YW5kYXJkIGFjdGlvbiBvYmplY3QuXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gSXMgdGhlIGFjdGlvbiByZWplY3RlZD9cbiAgICAgICAgICogQHJldHVybnMge29iamVjdH0gYWN0aW9uXG4gICAgICAgICAqL1xuXG4gICAgICAgIHZhciBnZXRBY3Rpb24gPSBmdW5jdGlvbiBnZXRBY3Rpb24obmV3UGF5bG9hZCwgaXNSZWplY3RlZCkge1xuICAgICAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgICAgICB0eXBlOiB0eXBlICsgJ18nICsgKGlzUmVqZWN0ZWQgPyBSRUpFQ1RFRCA6IEZVTEZJTExFRClcbiAgICAgICAgICB9LCBuZXdQYXlsb2FkID09PSBudWxsIHx8IHR5cGVvZiBuZXdQYXlsb2FkID09PSAndW5kZWZpbmVkJyA/IHt9IDoge1xuICAgICAgICAgICAgcGF5bG9hZDogbmV3UGF5bG9hZFxuICAgICAgICAgIH0sICEhbWV0YSA/IHsgbWV0YTogbWV0YSB9IDoge30sIGlzUmVqZWN0ZWQgPyB7XG4gICAgICAgICAgICBlcnJvcjogdHJ1ZVxuICAgICAgICAgIH0gOiB7fSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFzc2lnbiB2YWx1ZXMgZm9yIHByb21pc2UgYW5kIGRhdGEgdmFyaWFibGVzLiBJbiB0aGUgY2FzZSB0aGUgcGF5bG9hZFxuICAgICAgICAgKiBpcyBhbiBvYmplY3Qgd2l0aCBhIGBwcm9taXNlYCBhbmQgYGRhdGFgIHByb3BlcnR5LCB0aGUgdmFsdWVzIG9mIHRob3NlXG4gICAgICAgICAqIHByb3BlcnRpZXMgd2lsbCBiZSB1c2VkLiBJbiB0aGUgY2FzZSB0aGUgcGF5bG9hZCBpcyBhIHByb21pc2UsIHRoZVxuICAgICAgICAgKiB2YWx1ZSBvZiB0aGUgcGF5bG9hZCB3aWxsIGJlIHVzZWQgYW5kIGRhdGEgd2lsbCBiZSBudWxsLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIHByb21pc2UgPSB2b2lkIDA7XG4gICAgICAgIHZhciBkYXRhID0gdm9pZCAwO1xuXG4gICAgICAgIGlmICghKDAsIF9pc1Byb21pc2UyLmRlZmF1bHQpKGFjdGlvbi5wYXlsb2FkKSAmJiBfdHlwZW9mKGFjdGlvbi5wYXlsb2FkKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBwcm9taXNlID0gcGF5bG9hZC5wcm9taXNlO1xuICAgICAgICAgIGRhdGEgPSBwYXlsb2FkLmRhdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvbWlzZSA9IHBheWxvYWQ7XG4gICAgICAgICAgZGF0YSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRmlyc3QsIGRpc3BhdGNoIHRoZSBwZW5kaW5nIGFjdGlvbi4gVGhpcyBmbHV4IHN0YW5kYXJkIGFjdGlvbiBvYmplY3RcbiAgICAgICAgICogZGVzY3JpYmVzIHRoZSBwZW5kaW5nIHN0YXRlIG9mIGEgcHJvbWlzZSBhbmQgd2lsbCBpbmNsdWRlIGFueSBkYXRhXG4gICAgICAgICAqIChmb3Igb3B0aW1pc3RpYyB1cGRhdGVzKSBhbmQvb3IgbWV0YSBmcm9tIHRoZSBvcmlnaW5hbCBhY3Rpb24uXG4gICAgICAgICAqL1xuICAgICAgICBuZXh0KF9leHRlbmRzKHtcbiAgICAgICAgICB0eXBlOiB0eXBlICsgJ18nICsgUEVORElOR1xuICAgICAgICB9LCAhIWRhdGEgPyB7IHBheWxvYWQ6IGRhdGEgfSA6IHt9LCAhIW1ldGEgPyB7IG1ldGE6IG1ldGEgfSA6IHt9KSk7XG5cbiAgICAgICAgLypcbiAgICAgICAgICogQGZ1bmN0aW9uIGhhbmRsZVJlamVjdFxuICAgICAgICAgKiBAZGVzY3JpcHRpb24gRGlzcGF0Y2ggdGhlIHJlamVjdGVkIGFjdGlvbiBhbmQgcmV0dXJuXG4gICAgICAgICAqIGFuIGVycm9yIG9iamVjdC4gVGhlIGVycm9yIG9iamVjdCBpcyB0aGUgb3JpZ2luYWwgZXJyb3JcbiAgICAgICAgICogdGhhdCB3YXMgdGhyb3duLiBUaGUgdXNlciBvZiB0aGUgbGlicmFyeSBpcyByZXNwb25zaWJsZSBmb3JcbiAgICAgICAgICogYmVzdCBwcmFjdGljZXMgaW4gZW5zdXJlIHRoYXQgdGhleSBhcmUgdGhyb3dpbmcgYW4gRXJyb3Igb2JqZWN0LlxuICAgICAgICAgKiBAcGFyYW1zIHJlYXNvbiBUaGUgcmVhc29uIHRoZSBwcm9taXNlIHdhcyByZWplY3RlZFxuICAgICAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIGhhbmRsZVJlamVjdCA9IGZ1bmN0aW9uIGhhbmRsZVJlamVjdChyZWFzb24pIHtcbiAgICAgICAgICB2YXIgcmVqZWN0ZWRBY3Rpb24gPSBnZXRBY3Rpb24ocmVhc29uLCB0cnVlKTtcbiAgICAgICAgICBkaXNwYXRjaChyZWplY3RlZEFjdGlvbik7XG4gICAgICAgICAgdGhyb3cgcmVhc29uO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qXG4gICAgICAgICAqIEBmdW5jdGlvbiBoYW5kbGVGdWxmaWxsXG4gICAgICAgICAqIEBkZXNjcmlwdGlvbiBEaXNwYXRjaCB0aGUgZnVsZmlsbGVkIGFjdGlvbiBhbmRcbiAgICAgICAgICogcmV0dXJuIHRoZSBzdWNjZXNzIG9iamVjdC4gVGhlIHN1Y2Nlc3Mgb2JqZWN0IHNob3VsZFxuICAgICAgICAgKiBjb250YWluIHRoZSB2YWx1ZSBhbmQgdGhlIGRpc3BhdGNoZWQgYWN0aW9uLlxuICAgICAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRoZSBwcm9taXNlIHdhcyByZXNsb3ZlZCB3aXRoXG4gICAgICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICB2YXIgaGFuZGxlRnVsZmlsbCA9IGZ1bmN0aW9uIGhhbmRsZUZ1bGZpbGwoKSB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1swXTtcblxuICAgICAgICAgIHZhciByZXNvbHZlZEFjdGlvbiA9IGdldEFjdGlvbih2YWx1ZSwgZmFsc2UpO1xuICAgICAgICAgIGRpc3BhdGNoKHJlc29sdmVkQWN0aW9uKTtcblxuICAgICAgICAgIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgYWN0aW9uOiByZXNvbHZlZEFjdGlvbiB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZWNvbmQsIGRpc3BhdGNoIGEgcmVqZWN0ZWQgb3IgZnVsZmlsbGVkIGFjdGlvbi4gVGhpcyBmbHV4IHN0YW5kYXJkXG4gICAgICAgICAqIGFjdGlvbiBvYmplY3Qgd2lsbCBkZXNjcmliZSB0aGUgcmVzb2x2ZWQgc3RhdGUgb2YgdGhlIHByb21pc2UuIEluXG4gICAgICAgICAqIHRoZSBjYXNlIG9mIGEgcmVqZWN0ZWQgcHJvbWlzZSwgaXQgd2lsbCBpbmNsdWRlIGFuIGBlcnJvcmAgcHJvcGVydHkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEluIG9yZGVyIHRvIGFsbG93IHByb3BlciBjaGFpbmluZyBvZiBhY3Rpb25zIHVzaW5nIGB0aGVuYCwgYSBuZXdcbiAgICAgICAgICogcHJvbWlzZSBpcyBjb25zdHJ1Y3RlZCBhbmQgcmV0dXJuZWQuIFRoaXMgcHJvbWlzZSB3aWxsIHJlc29sdmVcbiAgICAgICAgICogd2l0aCB0d28gcHJvcGVydGllczogKDEpIHRoZSB2YWx1ZSAoaWYgZnVsZmlsbGVkKSBvciByZWFzb25cbiAgICAgICAgICogKGlmIHJlamVjdGVkKSBhbmQgKDIpIHRoZSBmbHV4IHN0YW5kYXJkIGFjdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogUmVqZWN0ZWQgb2JqZWN0OlxuICAgICAgICAgKiB7XG4gICAgICAgICAqICAgcmVhc29uOiAuLi5cbiAgICAgICAgICogICBhY3Rpb246IHtcbiAgICAgICAgICogICAgIGVycm9yOiB0cnVlLFxuICAgICAgICAgKiAgICAgdHlwZTogJ0FDVElPTl9SRUpFQ1RFRCcsXG4gICAgICAgICAqICAgICBwYXlsb2FkOiAuLi5cbiAgICAgICAgICogICB9XG4gICAgICAgICAqIH1cbiAgICAgICAgICpcbiAgICAgICAgICogRnVsZmlsbGVkIG9iamVjdDpcbiAgICAgICAgICoge1xuICAgICAgICAgKiAgIHZhbHVlOiAuLi5cbiAgICAgICAgICogICBhY3Rpb246IHtcbiAgICAgICAgICogICAgIHR5cGU6ICdBQ1RJT05fRlVMRklMTEVEJyxcbiAgICAgICAgICogICAgIHBheWxvYWQ6IC4uLlxuICAgICAgICAgKiAgIH1cbiAgICAgICAgICogfVxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbihoYW5kbGVGdWxmaWxsLCBoYW5kbGVSZWplY3QpO1xuICAgICAgfTtcbiAgICB9O1xuICB9O1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHV4LXByb21pc2UtbWlkZGxld2FyZS9kaXN0L2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNDUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBpc1Byb21pc2U7XG5mdW5jdGlvbiBpc1Byb21pc2UodmFsdWUpIHtcbiAgaWYgKHZhbHVlICE9PSBudWxsICYmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHZhbHVlKSkgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHV4LXByb21pc2UtbWlkZGxld2FyZS9kaXN0L2lzUHJvbWlzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDQ1MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==