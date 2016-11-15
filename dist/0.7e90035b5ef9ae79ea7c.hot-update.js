webpackHotUpdate(0,{

/***/ 116:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var EventListEntry = function EventListEntry(_ref) {
	  var date = _ref.date;
	  var details = _ref.details;
	  var location = _ref.location;
	  var org_email = _ref.org_email;
	  var org_name = _ref.org_name;
	  var org_site = _ref.org_site;
	  var time = _ref.time;
	  var title = _ref.title;
	  var user_email = _ref.user_email;
	  var username = _ref.username;
	  var deleteEvent = _ref.deleteEvent;
	  return _react2.default.createElement(
	    "div",
	    null,
	    _react2.default.createElement(
	      "div",
	      null,
	      _react2.default.createElement(
	        "h3",
	        { className: "event-title" },
	        title
	      ),
	      _react2.default.createElement(
	        "div",
	        null,
	        "Date: ",
	        date
	      ),
	      _react2.default.createElement(
	        "div",
	        null,
	        "Time: ",
	        time
	      ),
	      _react2.default.createElement(
	        "div",
	        null,
	        "Location: ",
	        location
	      ),
	      _react2.default.createElement(
	        "div",
	        null,
	        username
	      ),
	      _react2.default.createElement(
	        "button",
	        { type: "button", onClick: function onClick() {
	            return deleteEvent(title);
	          } },
	        "Delete Event"
	      )
	    )
	  );
	};
	
	var _default = EventListEntry;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(EventListEntry, "EventListEntry", "/Users/jimbot/Dropbox/MAKERSQUARE/garden/client/components/EventListEntry.jsx");
	
	  __REACT_HOT_LOADER__.register(_default, "default", "/Users/jimbot/Dropbox/MAKERSQUARE/garden/client/components/EventListEntry.jsx");
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0V2ZW50TGlzdEVudHJ5LmpzeD8wN2M1Il0sIm5hbWVzIjpbIkV2ZW50TGlzdEVudHJ5IiwiZGF0ZSIsImRldGFpbHMiLCJsb2NhdGlvbiIsIm9yZ19lbWFpbCIsIm9yZ19uYW1lIiwib3JnX3NpdGUiLCJ0aW1lIiwidGl0bGUiLCJ1c2VyX2VtYWlsIiwidXNlcm5hbWUiLCJkZWxldGVFdmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBQ0EsS0FBSUEsaUJBQWlCLFNBQWpCQSxjQUFpQjtBQUFBLE9BQUVDLElBQUYsUUFBRUEsSUFBRjtBQUFBLE9BQVFDLE9BQVIsUUFBUUEsT0FBUjtBQUFBLE9BQWlCQyxRQUFqQixRQUFpQkEsUUFBakI7QUFBQSxPQUEyQkMsU0FBM0IsUUFBMkJBLFNBQTNCO0FBQUEsT0FBc0NDLFFBQXRDLFFBQXNDQSxRQUF0QztBQUFBLE9BQWdEQyxRQUFoRCxRQUFnREEsUUFBaEQ7QUFBQSxPQUEwREMsSUFBMUQsUUFBMERBLElBQTFEO0FBQUEsT0FBZ0VDLEtBQWhFLFFBQWdFQSxLQUFoRTtBQUFBLE9BQXVFQyxVQUF2RSxRQUF1RUEsVUFBdkU7QUFBQSxPQUFtRkMsUUFBbkYsUUFBbUZBLFFBQW5GO0FBQUEsT0FBNkZDLFdBQTdGLFFBQTZGQSxXQUE3RjtBQUFBLFVBQ25CO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxXQUFJLFdBQVUsYUFBZDtBQUE2Qkg7QUFBN0IsUUFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQVlQO0FBQVosUUFGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQVlNO0FBQVosUUFIRjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQWdCSjtBQUFoQixRQUpGO0FBS0U7QUFBQTtBQUFBO0FBQU1PO0FBQU4sUUFMRjtBQU1FO0FBQUE7QUFBQSxXQUFRLE1BQUssUUFBYixFQUFzQixTQUFTO0FBQUEsb0JBQU1DLFlBQVlILEtBQVosQ0FBTjtBQUFBLFlBQS9CO0FBQUE7QUFBQTtBQU5GO0FBREYsSUFEbUI7QUFBQSxFQUFyQjs7Z0JBYWVSLGM7Ozs7Ozs7OztpQ0FiWEEsYyIsImZpbGUiOiIwLjdlOTAwMzViNWVmOWFlNzllYTdjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG52YXIgRXZlbnRMaXN0RW50cnkgPSAoe2RhdGUsIGRldGFpbHMsIGxvY2F0aW9uLCBvcmdfZW1haWwsIG9yZ19uYW1lLCBvcmdfc2l0ZSwgdGltZSwgdGl0bGUsIHVzZXJfZW1haWwsIHVzZXJuYW1lLCBkZWxldGVFdmVudH0pID0+IChcbiAgPGRpdj5cbiAgICA8ZGl2PlxuICAgICAgPGgzIGNsYXNzTmFtZT1cImV2ZW50LXRpdGxlXCI+e3RpdGxlfTwvaDM+XG4gICAgICA8ZGl2PkRhdGU6IHtkYXRlfTwvZGl2PlxuICAgICAgPGRpdj5UaW1lOiB7dGltZX08L2Rpdj5cbiAgICAgIDxkaXY+TG9jYXRpb246IHtsb2NhdGlvbn08L2Rpdj5cbiAgICAgIDxkaXY+e3VzZXJuYW1lfTwvZGl2PlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gZGVsZXRlRXZlbnQodGl0bGUpfT5EZWxldGUgRXZlbnQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudExpc3RFbnRyeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvRXZlbnRMaXN0RW50cnkuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==