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
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvcmVkdWNlcnMvdXNlclJlZHVjZXIuanM/MGZmMyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJuYW1lIiwicGFzc3dvcmQiLCJ1c2VyUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIk9iamVjdCIsImFzc2lnbiIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxLQUFNQSxlQUFjO0FBQ2xCQyxTQUFNLEVBRFk7QUFFbEJDLGFBQVU7QUFGUSxFQUFwQjs7QUFLQSxLQUFNQyxjQUFjLFNBQWRBLFdBQWMsR0FBZ0M7QUFBQSxPQUEvQkMsS0FBK0IsdUVBQXpCSixZQUF5QjtBQUFBLE9BQVhLLE1BQVc7O0FBQ2xELFdBQVFBLE9BQU9DLElBQWY7QUFDRSxVQUFLLGFBQUw7QUFBb0I7QUFDbEJGLGlCQUFRRyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQkosS0FBbEIsRUFBeUI7QUFDL0JILGlCQUFNSSxPQUFPSTtBQURrQixVQUF6QixDQUFSO0FBR0E7QUFDRDtBQUNELFVBQUssaUJBQUw7QUFBd0I7QUFDdEJMLGlCQUFRRyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQkosS0FBbEIsRUFBeUI7QUFDakNGLHFCQUFVRyxPQUFPSTtBQURnQixVQUF6QixDQUFSO0FBR0E7QUFDRDtBQVpIO0FBY0EsVUFBT0wsS0FBUDtBQUNELEVBaEJEOzttQkFrQmVELFciLCJmaWxlIjoiMC4xYTRkZDEyZjNkMzQwZTg3OTdkMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5pdGlhbFN0YXRlID17XG4gIG5hbWU6IFwiXCIsXG4gIHBhc3N3b3JkOiBcIlwiXG59O1xuXG5jb25zdCB1c2VyUmVkdWNlciA9IChzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIkNIQU5HRV9OQU1FXCI6IHtcbiAgICAgIHN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbmFtZTogYWN0aW9uLnBheWxvYWRcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgXCJDSEFOR0VfUEFTU1dPUkRcIjoge1xuICAgICAgc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgcGFzc3dvcmQ6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RhdGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VyUmVkdWNlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYXBwL3JlZHVjZXJzL3VzZXJSZWR1Y2VyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==