webpackHotUpdate(0,{

/***/ 114:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _index = __webpack_require__(46);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(39);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(5);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(40);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _EventList = __webpack_require__(115);
	
	var _EventList2 = _interopRequireDefault(_EventList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	  Dashboard: {
	    displayName: "Dashboard"
	  }
	};
	
	var _UsersJimbotDropboxMAKERSQUAREGardenNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: "/Users/jimbot/Dropbox/MAKERSQUARE/garden/client/components/Dashboard.jsx",
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	var _UsersJimbotDropboxMAKERSQUAREGardenNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: "/Users/jimbot/Dropbox/MAKERSQUARE/garden/client/components/Dashboard.jsx",
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersJimbotDropboxMAKERSQUAREGardenNode_modulesReactTransformHmrLibIndexJs2(_UsersJimbotDropboxMAKERSQUAREGardenNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}
	
	__webpack_require__(467);
	
	var Dashboard = _wrapComponent("Dashboard")(function (_React$Component) {
	  _inherits(Dashboard, _React$Component);
	
	  function Dashboard(props) {
	    _classCallCheck(this, Dashboard);
	
	    var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));
	
	    console.log(props);
	    _this.state = {
	      events: []
	    };
	    return _this;
	  }
	
	  _createClass(Dashboard, [{
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      var _this2 = this;
	
	      console.log("REACHING FETCH");
	      this.props.fetchAllEvents(function (events) {
	        _this2.setState({
	          events: events.data
	        });
	      });
	    }
	  }, {
	    key: "deleteEvent",
	    value: function deleteEvent(title) {
	      var _this3 = this;
	
	      var deletedEvent = { title: title };
	      // console.log("DELETED EVENT ", deletedEvent);
	      this.props.deleteOneEvent(deletedEvent, function (deleted) {
	        if (deleted) {
	          _this3.props.fetchAllEvents(function (events) {
	            _this3.setState({
	              events: events.data
	            });
	          });
	        } else {
	          console.log("Could not delete");
	        }
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react3.default.createElement(
	        "div",
	        { id: "dashboard" },
	        _react3.default.createElement(
	          "h2",
	          { className: "title" },
	          "DASHBOARD"
	        ),
	        _react3.default.createElement(
	          "div",
	          null,
	          _react3.default.createElement(_EventList2.default, { events: this.state.events, deleteEvent: this.deleteEvent.bind(this) })
	        )
	      );
	    }
	  }]);
	
	  return Dashboard;
	}(_react3.default.Component));
	
	var _default = Dashboard;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(Dashboard, "Dashboard", "/Users/jimbot/Dropbox/MAKERSQUARE/garden/client/components/Dashboard.jsx");
	
	  __REACT_HOT_LOADER__.register(_default, "default", "/Users/jimbot/Dropbox/MAKERSQUARE/garden/client/components/Dashboard.jsx");
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC5qc3g/YjhhYiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJldmVudHMiLCJmZXRjaEFsbEV2ZW50cyIsInNldFN0YXRlIiwiZGF0YSIsInRpdGxlIiwiZGVsZXRlZEV2ZW50IiwiZGVsZXRlT25lRXZlbnQiLCJkZWxldGVkIiwiZGVsZXRlRXZlbnQiLCJiaW5kIiwiQ29tcG9uZW50IiwiRGFzaGJvYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLG9CQUFBQSxDQUFRLEdBQVI7Ozs7O0FBR0Usc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx1SEFDWEEsS0FEVzs7QUFFakJDLGFBQVFDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBLFdBQUtHLEtBQUwsR0FBYTtBQUNYQyxlQUFRO0FBREcsTUFBYjtBQUhpQjtBQU1sQjs7OzswQ0FDb0I7QUFBQTs7QUFDbkJILGVBQVFDLEdBQVIsQ0FBWSxnQkFBWjtBQUNBLFlBQUtGLEtBQUwsQ0FBV0ssY0FBWCxDQUEwQixVQUFDRCxNQUFELEVBQVk7QUFDcEMsZ0JBQUtFLFFBQUwsQ0FBYztBQUNaRixtQkFBUUEsT0FBT0c7QUFESCxVQUFkO0FBR0QsUUFKRDtBQUtEOzs7aUNBQ1dDLEssRUFBTztBQUFBOztBQUNqQixXQUFJQyxlQUFlLEVBQUVELE9BQU9BLEtBQVQsRUFBbkI7QUFDQTtBQUNBLFlBQUtSLEtBQUwsQ0FBV1UsY0FBWCxDQUEwQkQsWUFBMUIsRUFBd0MsVUFBQ0UsT0FBRCxFQUFhO0FBQ25ELGFBQUlBLE9BQUosRUFBYTtBQUNYLGtCQUFLWCxLQUFMLENBQVdLLGNBQVgsQ0FBMEIsVUFBQ0QsTUFBRCxFQUFZO0FBQ3BDLG9CQUFLRSxRQUFMLENBQWM7QUFDWkYsdUJBQVFBLE9BQU9HO0FBREgsY0FBZDtBQUdELFlBSkQ7QUFLRCxVQU5ELE1BTU87QUFDTE4sbUJBQVFDLEdBQVIsQ0FBWSxrQkFBWjtBQUNEO0FBQ0YsUUFWRDtBQVdEOzs7OEJBRVE7QUFDUCxjQUNFO0FBQUE7QUFBQSxXQUFLLElBQUcsV0FBUjtBQUNFO0FBQUE7QUFBQSxhQUFJLFdBQVUsT0FBZDtBQUFBO0FBQUEsVUFERjtBQUVFO0FBQUE7QUFBQTtBQUNFLGdFQUFXLFFBQVEsS0FBS0MsS0FBTCxDQUFXQyxNQUE5QixFQUFzQyxhQUFhLEtBQUtRLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQW5EO0FBREY7QUFGRixRQURGO0FBUUQ7Ozs7R0F6Q3FCLGdCQUFNQyxTOztnQkE0Q2ZDLFM7Ozs7Ozs7OztpQ0E1Q1RBLFMiLCJmaWxlIjoiMC4wOGY3N2Q1ZTAwODQ1ZTQ3ZjQzZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEV2ZW50TGlzdCBmcm9tIFwiLi9FdmVudExpc3RcIjtcbnJlcXVpcmUoXCIuLi9zYXNzL2Rhc2hib2FyZC5zY3NzXCIpO1xuXG5jbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zb2xlLmxvZyhwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGV2ZW50czogW10sXG4gICAgfTtcbiAgfVxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgY29uc29sZS5sb2coXCJSRUFDSElORyBGRVRDSFwiKTtcbiAgICB0aGlzLnByb3BzLmZldGNoQWxsRXZlbnRzKChldmVudHMpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBldmVudHM6IGV2ZW50cy5kYXRhXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBkZWxldGVFdmVudCh0aXRsZSkge1xuICAgIGxldCBkZWxldGVkRXZlbnQgPSB7IHRpdGxlOiB0aXRsZSB9O1xuICAgIC8vIGNvbnNvbGUubG9nKFwiREVMRVRFRCBFVkVOVCBcIiwgZGVsZXRlZEV2ZW50KTtcbiAgICB0aGlzLnByb3BzLmRlbGV0ZU9uZUV2ZW50KGRlbGV0ZWRFdmVudCwgKGRlbGV0ZWQpID0+IHtcbiAgICAgIGlmIChkZWxldGVkKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hBbGxFdmVudHMoKGV2ZW50cykgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZXZlbnRzOiBldmVudHMuZGF0YVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ291bGQgbm90IGRlbGV0ZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cImRhc2hib2FyZFwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj5EQVNIQk9BUkQ8L2gyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxFdmVudExpc3QgZXZlbnRzPXt0aGlzLnN0YXRlLmV2ZW50c30gZGVsZXRlRXZlbnQ9e3RoaXMuZGVsZXRlRXZlbnQuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvRGFzaGJvYXJkLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=