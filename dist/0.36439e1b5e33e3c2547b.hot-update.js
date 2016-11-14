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
	
	var Dashboard = _wrapComponent("Dashboard")(function (_React$Component) {
	  _inherits(Dashboard, _React$Component);
	
	  function Dashboard(props) {
	    _classCallCheck(this, Dashboard);
	
	    var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));
	
	    console.log(props);
	    _this.state = {
	      events: []
	    };
	    // this.deleteEvent = this.deleteEvent.bind(this);
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
	        { className: "dash" },
	        _react3.default.createElement(
	          "h3",
	          null,
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
	
	exports.default = Dashboard;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC5qc3g/YjhhYiJdLCJuYW1lcyI6WyJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsImV2ZW50cyIsImZldGNoQWxsRXZlbnRzIiwic2V0U3RhdGUiLCJkYXRhIiwidGl0bGUiLCJkZWxldGVkRXZlbnQiLCJkZWxldGVPbmVFdmVudCIsImRlbGV0ZWQiLCJkZWxldGVFdmVudCIsImJpbmQiLCJDb21wb25lbnQiLCJEYXNoYm9hcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0Usc0JBQVlBLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx1SEFDWEEsS0FEVzs7QUFFakJDLGFBQVFDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBLFdBQUtHLEtBQUwsR0FBYTtBQUNYQyxlQUFRO0FBREcsTUFBYjtBQUdBO0FBTmlCO0FBT2xCOzs7OzBDQUNvQjtBQUFBOztBQUNuQkgsZUFBUUMsR0FBUixDQUFZLGdCQUFaO0FBQ0EsWUFBS0YsS0FBTCxDQUFXSyxjQUFYLENBQTBCLFVBQUNELE1BQUQsRUFBWTtBQUNwQyxnQkFBS0UsUUFBTCxDQUFjO0FBQ1pGLG1CQUFRQSxPQUFPRztBQURILFVBQWQ7QUFHRCxRQUpEO0FBS0Q7OztpQ0FFV0MsSyxFQUFPO0FBQUE7O0FBQ2pCLFdBQUlDLGVBQWUsRUFBRUQsT0FBT0EsS0FBVCxFQUFuQjtBQUNBO0FBQ0EsWUFBS1IsS0FBTCxDQUFXVSxjQUFYLENBQTBCRCxZQUExQixFQUF3QyxVQUFDRSxPQUFELEVBQWE7QUFDbkQsYUFBSUEsT0FBSixFQUFhO0FBQ1gsa0JBQUtYLEtBQUwsQ0FBV0ssY0FBWCxDQUEwQixVQUFDRCxNQUFELEVBQVk7QUFDcEMsb0JBQUtFLFFBQUwsQ0FBYztBQUNaRix1QkFBUUEsT0FBT0c7QUFESCxjQUFkO0FBR0QsWUFKRDtBQUtELFVBTkQsTUFNTztBQUNMTixtQkFBUUMsR0FBUixDQUFZLGtCQUFaO0FBQ0Q7QUFDRixRQVZEO0FBV0Q7Ozs4QkFFUTtBQUNQLGNBQ0U7QUFBQTtBQUFBLFdBQUssV0FBVSxNQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBRUU7QUFBQTtBQUFBO0FBQ0UsZ0VBQVcsUUFBUSxLQUFLQyxLQUFMLENBQVdDLE1BQTlCLEVBQXNDLGFBQWEsS0FBS1EsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbkQ7QUFERjtBQUZGLFFBREY7QUFRRDs7OztHQTNDcUIsZ0JBQU1DLFM7O21CQThDZkMsUyIsImZpbGUiOiIwLjM2NDM5ZTFiNWUzM2UzYzI1NDdiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRXZlbnRMaXN0IGZyb20gXCIuL0V2ZW50TGlzdFwiO1xuXG5jbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zb2xlLmxvZyhwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGV2ZW50czogW10sXG4gICAgfTtcbiAgICAvLyB0aGlzLmRlbGV0ZUV2ZW50ID0gdGhpcy5kZWxldGVFdmVudC5iaW5kKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIlJFQUNISU5HIEZFVENIXCIpO1xuICAgIHRoaXMucHJvcHMuZmV0Y2hBbGxFdmVudHMoKGV2ZW50cykgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGV2ZW50czogZXZlbnRzLmRhdGFcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlRXZlbnQodGl0bGUpIHtcbiAgICBsZXQgZGVsZXRlZEV2ZW50ID0geyB0aXRsZTogdGl0bGUgfTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIkRFTEVURUQgRVZFTlQgXCIsIGRlbGV0ZWRFdmVudCk7XG4gICAgdGhpcy5wcm9wcy5kZWxldGVPbmVFdmVudChkZWxldGVkRXZlbnQsIChkZWxldGVkKSA9PiB7XG4gICAgICBpZiAoZGVsZXRlZCkge1xuICAgICAgICB0aGlzLnByb3BzLmZldGNoQWxsRXZlbnRzKChldmVudHMpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGV2ZW50czogZXZlbnRzLmRhdGFcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNvdWxkIG5vdCBkZWxldGVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaFwiPlxuICAgICAgICA8aDM+REFTSEJPQVJEPC9oMz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8RXZlbnRMaXN0IGV2ZW50cz17dGhpcy5zdGF0ZS5ldmVudHN9IGRlbGV0ZUV2ZW50PXt0aGlzLmRlbGV0ZUV2ZW50LmJpbmQodGhpcyl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0Rhc2hib2FyZC5qc3giXSwic291cmNlUm9vdCI6IiJ9