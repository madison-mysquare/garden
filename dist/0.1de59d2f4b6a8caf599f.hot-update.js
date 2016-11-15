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
	        "HOST: ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0V2ZW50TGlzdEVudHJ5LmpzeD8wN2M1Il0sIm5hbWVzIjpbIkV2ZW50TGlzdEVudHJ5IiwiZGF0ZSIsImRldGFpbHMiLCJsb2NhdGlvbiIsIm9yZ19lbWFpbCIsIm9yZ19uYW1lIiwib3JnX3NpdGUiLCJ0aW1lIiwidGl0bGUiLCJ1c2VyX2VtYWlsIiwidXNlcm5hbWUiLCJkZWxldGVFdmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBQ0EsS0FBSUEsaUJBQWlCLFNBQWpCQSxjQUFpQjtBQUFBLE9BQUVDLElBQUYsUUFBRUEsSUFBRjtBQUFBLE9BQVFDLE9BQVIsUUFBUUEsT0FBUjtBQUFBLE9BQWlCQyxRQUFqQixRQUFpQkEsUUFBakI7QUFBQSxPQUEyQkMsU0FBM0IsUUFBMkJBLFNBQTNCO0FBQUEsT0FBc0NDLFFBQXRDLFFBQXNDQSxRQUF0QztBQUFBLE9BQWdEQyxRQUFoRCxRQUFnREEsUUFBaEQ7QUFBQSxPQUEwREMsSUFBMUQsUUFBMERBLElBQTFEO0FBQUEsT0FBZ0VDLEtBQWhFLFFBQWdFQSxLQUFoRTtBQUFBLE9BQXVFQyxVQUF2RSxRQUF1RUEsVUFBdkU7QUFBQSxPQUFtRkMsUUFBbkYsUUFBbUZBLFFBQW5GO0FBQUEsT0FBNkZDLFdBQTdGLFFBQTZGQSxXQUE3RjtBQUFBLFVBQ25CO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxXQUFJLFdBQVUsYUFBZDtBQUE2Qkg7QUFBN0IsUUFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQVlQO0FBQVosUUFGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQVlNO0FBQVosUUFIRjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQWdCSjtBQUFoQixRQUpGO0FBS0U7QUFBQTtBQUFBO0FBQUE7QUFBWU87QUFBWixRQUxGO0FBTUU7QUFBQTtBQUFBLFdBQVEsTUFBSyxRQUFiLEVBQXNCLFNBQVM7QUFBQSxvQkFBTUMsWUFBWUgsS0FBWixDQUFOO0FBQUEsWUFBL0I7QUFBQTtBQUFBO0FBTkY7QUFERixJQURtQjtBQUFBLEVBQXJCOztnQkFhZVIsYzs7Ozs7Ozs7O2lDQWJYQSxjIiwiZmlsZSI6IjAuMWRlNTlkMmY0YjZhOGNhZjU5OWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbnZhciBFdmVudExpc3RFbnRyeSA9ICh7ZGF0ZSwgZGV0YWlscywgbG9jYXRpb24sIG9yZ19lbWFpbCwgb3JnX25hbWUsIG9yZ19zaXRlLCB0aW1lLCB0aXRsZSwgdXNlcl9lbWFpbCwgdXNlcm5hbWUsIGRlbGV0ZUV2ZW50fSkgPT4gKFxuICA8ZGl2PlxuICAgIDxkaXY+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwiZXZlbnQtdGl0bGVcIj57dGl0bGV9PC9oMz5cbiAgICAgIDxkaXY+RGF0ZToge2RhdGV9PC9kaXY+XG4gICAgICA8ZGl2PlRpbWU6IHt0aW1lfTwvZGl2PlxuICAgICAgPGRpdj5Mb2NhdGlvbjoge2xvY2F0aW9ufTwvZGl2PlxuICAgICAgPGRpdj5IT1NUOiB7dXNlcm5hbWV9PC9kaXY+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBkZWxldGVFdmVudCh0aXRsZSl9PkRlbGV0ZSBFdmVudDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50TGlzdEVudHJ5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9FdmVudExpc3RFbnRyeS5qc3giXSwic291cmNlUm9vdCI6IiJ9