webpackHotUpdate(0,{

/***/ 179:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var initialState = {
	  name: "",
	  password: ""
	};
	
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

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvcmVkdWNlcnMvdXNlclJlZHVjZXIuanM/MGZmMyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJuYW1lIiwicGFzc3dvcmQiLCJ1c2VyUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIk9iamVjdCIsImFzc2lnbiIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxLQUFNQSxlQUFjO0FBQ2xCQyxTQUFNLEVBRFk7QUFFbEJDLGFBQVU7QUFGUSxFQUFwQjs7QUFNQSxLQUFNQyxjQUFjLFNBQWRBLFdBQWMsR0FBc0I7QUFBQSxPQUFyQkMsS0FBcUIsdUVBQWYsRUFBZTtBQUFBLE9BQVhDLE1BQVc7O0FBQ3hDLFdBQVFBLE9BQU9DLElBQWY7QUFDRSxVQUFLLGFBQUw7QUFBb0I7QUFDbEJGLGlCQUFRRyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQkosS0FBbEIsRUFBeUI7QUFDL0JILGlCQUFNSSxPQUFPSTtBQURrQixVQUF6QixDQUFSO0FBR0E7QUFDRDtBQUNELFVBQUssaUJBQUw7QUFBd0I7QUFDdEJMLGlCQUFRRyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQkosS0FBbEIsRUFBeUI7QUFDakNGLHFCQUFVRyxPQUFPSTtBQURnQixVQUF6QixDQUFSO0FBR0E7QUFDRDtBQVpIO0FBY0EsVUFBT0wsS0FBUDtBQUNELEVBaEJEOzttQkFrQmVELFciLCJmaWxlIjoiMC5hYTBhNjk4ZmEzOTUyYjYxYmEyZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5pdGlhbFN0YXRlID17XG4gIG5hbWU6IFwiXCIsXG4gIHBhc3N3b3JkOiBcIlwiXG59O1xuXG5cbmNvbnN0IHVzZXJSZWR1Y2VyID0gKHN0YXRlPXt9LCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJDSEFOR0VfTkFNRVwiOiB7XG4gICAgICBzdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIG5hbWU6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIFwiQ0hBTkdFX1BBU1NXT1JEXCI6IHtcbiAgICAgIHN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgIHBhc3N3b3JkOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlclJlZHVjZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2FwcC9yZWR1Y2Vycy91c2VyUmVkdWNlci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=