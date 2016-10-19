webpackHotUpdate(0,{

/***/ 202:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _index = __webpack_require__(428);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(351);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(6);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(352);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _reactRedux = __webpack_require__(326);
	
	var _redux = __webpack_require__(102);
	
	var _actions = __webpack_require__(451);
	
	var actions = _interopRequireWildcard(_actions);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	  App: {
	    displayName: "App"
	  }
	};
	
	var _UsersJimbotDropboxMAKERSQUAREGardenNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: "/Users/jimbot/Dropbox/MAKERSQUARE/garden/app/components/App.jsx",
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	var _UsersJimbotDropboxMAKERSQUAREGardenNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: "/Users/jimbot/Dropbox/MAKERSQUARE/garden/app/components/App.jsx",
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersJimbotDropboxMAKERSQUAREGardenNode_modulesReactTransformHmrLibIndexJs2(_UsersJimbotDropboxMAKERSQUAREGardenNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}
	// use connect since we are wrapping compinents in <Provider>
	// connects a React component to Redux store.
	
	
	// The mapStateToProps function takes a single argument of the entire Redux store’s state and returns an object to be passed as props.
	// It is often called a selector.
	function mapStateToProps(state, ownProps) {
	  console.log("STATE ", state.user);
	  console.log("OWN PROPS ", ownProps);
	  return {
	    username: state.user.name,
	    password: state.user.password
	  };
	}
	// inject all actions as actions.
	function mapDispatchToProps(dispatch) {
	  console.log("DISPATCH ", dispatch);
	  return (0, _redux.bindActionCreators)(actions, dispatch);
	}
	
	var App = _wrapComponent("App")(function (_Component) {
	  _inherits(App, _Component);
	
	  function App() {
	    _classCallCheck(this, App);
	
	    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	  }
	
	  _createClass(App, [{
	    key: "render",
	    value: function render() {
	      console.log("THIS.PROPS ", this.props);
	      return _react3.default.createElement(
	        "div",
	        null,
	        _react3.default.createElement(
	          "div",
	          null,
	          "Hi, this is my react/redux app component, ",
	          this.props.username
	        )
	      );
	    }
	  }]);
	
	  return App;
	}(_react2.Component));
	
	// It needs to be invoked two times. The first time with its arguments described above, and a second time, with the component
	
	
	App = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);
	
	exports.default = App;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(64)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9BcHAuanN4PzRjYzgiXSwibmFtZXMiOlsiYWN0aW9ucyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwib3duUHJvcHMiLCJjb25zb2xlIiwibG9nIiwidXNlciIsInVzZXJuYW1lIiwibmFtZSIsInBhc3N3b3JkIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJwcm9wcyIsIkFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7QUFDQTs7QUFDQTs7S0FBWUEsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUpaO0FBQ0E7OztBQUtBO0FBQ0E7QUFDQSxVQUFTQyxlQUFULENBQXlCQyxLQUF6QixFQUFnQ0MsUUFBaEMsRUFBMEM7QUFDeENDLFdBQVFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCSCxNQUFNSSxJQUE1QjtBQUNBRixXQUFRQyxHQUFSLENBQVksWUFBWixFQUEwQkYsUUFBMUI7QUFDQSxVQUFPO0FBQ0xJLGVBQVVMLE1BQU1JLElBQU4sQ0FBV0UsSUFEaEI7QUFFTEMsZUFBVVAsTUFBTUksSUFBTixDQUFXRztBQUZoQixJQUFQO0FBSUQ7QUFDRDtBQUNBLFVBQVNDLGtCQUFULENBQTRCQyxRQUE1QixFQUFzQztBQUNwQ1AsV0FBUUMsR0FBUixDQUFZLFdBQVosRUFBeUJNLFFBQXpCO0FBQ0EsVUFBTywrQkFBbUJYLE9BQW5CLEVBQTRCVyxRQUE1QixDQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7OEJBR1U7QUFDQ1AsZUFBUUMsR0FBUixDQUFZLGFBQVosRUFBMkIsS0FBS08sS0FBaEM7QUFDUixjQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQWdELGdCQUFLQSxLQUFMLENBQVdMO0FBQTNEO0FBREYsUUFERjtBQU1EOzs7Ozs7QUFHSDs7O0FBQ0FNLE9BQU0seUJBQVFaLGVBQVIsRUFBeUJTLGtCQUF6QixFQUE2Q0csR0FBN0MsQ0FBTjs7bUJBRWVBLEciLCJmaWxlIjoiMC45M2E0Y2QwZTM3ZDVhNDQ4MjYxMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuLy8gdXNlIGNvbm5lY3Qgc2luY2Ugd2UgYXJlIHdyYXBwaW5nIGNvbXBpbmVudHMgaW4gPFByb3ZpZGVyPlxuLy8gY29ubmVjdHMgYSBSZWFjdCBjb21wb25lbnQgdG8gUmVkdXggc3RvcmUuXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4uL2FjdGlvbnMvYWN0aW9uc1wiO1xuXG4vLyBUaGUgbWFwU3RhdGVUb1Byb3BzIGZ1bmN0aW9uIHRha2VzIGEgc2luZ2xlIGFyZ3VtZW50IG9mIHRoZSBlbnRpcmUgUmVkdXggc3RvcmXigJlzIHN0YXRlIGFuZCByZXR1cm5zIGFuIG9iamVjdCB0byBiZSBwYXNzZWQgYXMgcHJvcHMuXG4vLyBJdCBpcyBvZnRlbiBjYWxsZWQgYSBzZWxlY3Rvci5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgY29uc29sZS5sb2coXCJTVEFURSBcIiwgc3RhdGUudXNlcik7XG4gIGNvbnNvbGUubG9nKFwiT1dOIFBST1BTIFwiLCBvd25Qcm9wcyk7XG4gIHJldHVybiB7XG4gICAgdXNlcm5hbWU6IHN0YXRlLnVzZXIubmFtZSxcbiAgICBwYXNzd29yZDogc3RhdGUudXNlci5wYXNzd29yZFxuICB9O1xufVxuLy8gaW5qZWN0IGFsbCBhY3Rpb25zIGFzIGFjdGlvbnMuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgY29uc29sZS5sb2coXCJESVNQQVRDSCBcIiwgZGlzcGF0Y2gpO1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbnMsIGRpc3BhdGNoKTtcbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUSElTLlBST1BTIFwiLCB0aGlzLnByb3BzKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj5IaSwgdGhpcyBpcyBteSByZWFjdC9yZWR1eCBhcHAgY29tcG9uZW50LCB7dGhpcy5wcm9wcy51c2VybmFtZX08L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vLyBJdCBuZWVkcyB0byBiZSBpbnZva2VkIHR3byB0aW1lcy4gVGhlIGZpcnN0IHRpbWUgd2l0aCBpdHMgYXJndW1lbnRzIGRlc2NyaWJlZCBhYm92ZSwgYW5kIGEgc2Vjb25kIHRpbWUsIHdpdGggdGhlIGNvbXBvbmVudFxuQXBwID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQXBwKVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2FwcC9jb21wb25lbnRzL0FwcC5qc3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9