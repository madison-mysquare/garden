webpackHotUpdate(0,{

/***/ 113:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _index = __webpack_require__(105);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(81);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(6);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(82);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _reactRedux = __webpack_require__(149);
	
	var _redux = __webpack_require__(65);
	
	var _actions = __webpack_require__(207);
	
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
	  return {
	    user: state.user
	  };
	}
	// inject all actions as actions.
	function mapDispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)(actions, dispatch);
	}
	
	var App = _wrapComponent("App")(function (_React$Component) {
	  _inherits(App, _React$Component);
	
	  function App() {
	    _classCallCheck(this, App);
	
	    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	  }
	
	  _createClass(App, [{
	    key: "render",
	    value: function render() {
	      console.log("this.props ", this.props);
	      return _react3.default.createElement(
	        "div",
	        null,
	        _react3.default.createElement(
	          "nav",
	          null,
	          "Hi, this is the Garden!"
	        ),
	        this.props.children
	      );
	    }
	  }]);
	
	  return App;
	}(_react3.default.Component));
	
	// It needs to be invoked two times. The first time with its arguments described above, and a second time, with the component
	
	
	App = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);
	
	exports.default = App;
	// React.cloneElement clones this.props FOR this.props.children (i.e. Login component).
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(36)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qc3g/OWJjYyJdLCJuYW1lcyI6WyJhY3Rpb25zIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJvd25Qcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJwcm9wcyIsImNoaWxkcmVuIiwiQ29tcG9uZW50IiwiQXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOztBQUNBOztBQUNBOztLQUFZQSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSlo7QUFDQTs7O0FBS0E7QUFDQTtBQUNBLFVBQVNDLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQWdDQyxRQUFoQyxFQUEwQztBQUN4Q0MsV0FBUUMsR0FBUixDQUFZLFFBQVosRUFBc0JILE1BQU1JLElBQTVCO0FBQ0EsVUFBTztBQUNMQSxXQUFNSixNQUFNSTtBQURQLElBQVA7QUFHRDtBQUNEO0FBQ0EsVUFBU0Msa0JBQVQsQ0FBNEJDLFFBQTVCLEVBQXNDO0FBQ3BDLFVBQU8sK0JBQW1CUixPQUFuQixFQUE0QlEsUUFBNUIsQ0FBUDtBQUNEOzs7Ozs7Ozs7Ozs7OzhCQUdVO0FBQ1BKLGVBQVFDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCLEtBQUtJLEtBQWhDO0FBQ0EsY0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRyxjQUFLQSxLQUFMLENBQVdDO0FBTGQsUUFERjtBQVNEOzs7O0dBWmUsZ0JBQU1DLFM7O0FBZXhCOzs7QUFDQUMsT0FBTSx5QkFBUVgsZUFBUixFQUF5Qk0sa0JBQXpCLEVBQTZDSyxHQUE3QyxDQUFOOzttQkFFZUEsRztBQUNmLHdGIiwiZmlsZSI6IjAuMjMxYjAyMDhlMzFkNzExYTYyMmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbi8vIHVzZSBjb25uZWN0IHNpbmNlIHdlIGFyZSB3cmFwcGluZyBjb21waW5lbnRzIGluIDxQcm92aWRlcj5cbi8vIGNvbm5lY3RzIGEgUmVhY3QgY29tcG9uZW50IHRvIFJlZHV4IHN0b3JlLlxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuLi9hY3Rpb25zL2FjdGlvbnNcIjtcblxuLy8gVGhlIG1hcFN0YXRlVG9Qcm9wcyBmdW5jdGlvbiB0YWtlcyBhIHNpbmdsZSBhcmd1bWVudCBvZiB0aGUgZW50aXJlIFJlZHV4IHN0b3Jl4oCZcyBzdGF0ZSBhbmQgcmV0dXJucyBhbiBvYmplY3QgdG8gYmUgcGFzc2VkIGFzIHByb3BzLlxuLy8gSXQgaXMgb2Z0ZW4gY2FsbGVkIGEgc2VsZWN0b3IuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gIGNvbnNvbGUubG9nKFwiU1RBVEUgXCIsIHN0YXRlLnVzZXIpO1xuICByZXR1cm4ge1xuICAgIHVzZXI6IHN0YXRlLnVzZXJcbiAgfTtcbn1cbi8vIGluamVjdCBhbGwgYWN0aW9ucyBhcyBhY3Rpb25zLlxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucywgZGlzcGF0Y2gpO1xufVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2coXCJ0aGlzLnByb3BzIFwiLCB0aGlzLnByb3BzKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICBIaSwgdGhpcyBpcyB0aGUgR2FyZGVuIVxuICAgICAgICA8L25hdj5cbiAgICAgICAgey8qIHsgUmVhY3QuY2xvbmVFbGVtZW50KHRoaXMucHJvcHMuY2hpbGRyZW4sIHRoaXMucHJvcHMpIH0gKi99XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vLyBJdCBuZWVkcyB0byBiZSBpbnZva2VkIHR3byB0aW1lcy4gVGhlIGZpcnN0IHRpbWUgd2l0aCBpdHMgYXJndW1lbnRzIGRlc2NyaWJlZCBhYm92ZSwgYW5kIGEgc2Vjb25kIHRpbWUsIHdpdGggdGhlIGNvbXBvbmVudFxuQXBwID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQXBwKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuLy8gUmVhY3QuY2xvbmVFbGVtZW50IGNsb25lcyB0aGlzLnByb3BzIEZPUiB0aGlzLnByb3BzLmNoaWxkcmVuIChpLmUuIExvZ2luIGNvbXBvbmVudCkuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvbXBvbmVudHMvQXBwLmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=