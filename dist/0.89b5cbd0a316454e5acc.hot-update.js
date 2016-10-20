webpackHotUpdate(0,{

/***/ 210:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(149);
	
	var _redux = __webpack_require__(66);
	
	var _actions = __webpack_require__(209);
	
	var actions = _interopRequireWildcard(_actions);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// The mapStateToProps function takes a single argument of the entire Redux store’s state and returns an object to be passed as props.
	// It is often called a selector.
	function mapStateToProps(state, ownProps) {
	  console.log("STATE ", state.user);
	  return {
	    user: state.user
	  };
	}
	// inject all actions as actions.
	
	// use connect since we are wrapping compinents in <Provider>
	// connects a React component to Redux store.
	function mapDispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)(actions, dispatch);
	}
	
	// class App extends React.Component {
	//   render() {
	//     console.log("this.props ", this.props);
	//     return (
	//       <div>
	//         <nav>
	//           Hi, this is the Garden!
	//         </nav>
	//         { React.cloneElement(this.props.children, this.props) }
	//       </div>
	//     );
	//   }
	// }
	
	// It needs to be invoked two times. The first time with its arguments described above, and a second time, with the component
	App = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);
	
	exports.default = App;
	// React.cloneElement clones this.props FOR this.props.children (i.e. Login component).

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qc3g/OWJjYyJdLCJuYW1lcyI6WyJhY3Rpb25zIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJvd25Qcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJBcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFHQTs7QUFDQTs7QUFDQTs7S0FBWUEsTzs7Ozs7O0FBRVo7QUFDQTtBQUNBLFVBQVNDLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQWdDQyxRQUFoQyxFQUEwQztBQUN4Q0MsV0FBUUMsR0FBUixDQUFZLFFBQVosRUFBc0JILE1BQU1JLElBQTVCO0FBQ0EsVUFBTztBQUNMQSxXQUFNSixNQUFNSTtBQURQLElBQVA7QUFHRDtBQUNEOztBQWRBO0FBQ0E7QUFjQSxVQUFTQyxrQkFBVCxDQUE0QkMsUUFBNUIsRUFBc0M7QUFDcEMsVUFBTywrQkFBbUJSLE9BQW5CLEVBQTRCUSxRQUE1QixDQUFQO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQUMsT0FBTSx5QkFBUVIsZUFBUixFQUF5Qk0sa0JBQXpCLEVBQTZDRSxHQUE3QyxDQUFOOzttQkFFZUEsRztBQUNmLHdGIiwiZmlsZSI6IjAuODliNWNiZDBhMzE2NDU0ZTVhY2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbi8vIHVzZSBjb25uZWN0IHNpbmNlIHdlIGFyZSB3cmFwcGluZyBjb21waW5lbnRzIGluIDxQcm92aWRlcj5cbi8vIGNvbm5lY3RzIGEgUmVhY3QgY29tcG9uZW50IHRvIFJlZHV4IHN0b3JlLlxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuLi9hY3Rpb25zL2FjdGlvbnNcIjtcblxuLy8gVGhlIG1hcFN0YXRlVG9Qcm9wcyBmdW5jdGlvbiB0YWtlcyBhIHNpbmdsZSBhcmd1bWVudCBvZiB0aGUgZW50aXJlIFJlZHV4IHN0b3Jl4oCZcyBzdGF0ZSBhbmQgcmV0dXJucyBhbiBvYmplY3QgdG8gYmUgcGFzc2VkIGFzIHByb3BzLlxuLy8gSXQgaXMgb2Z0ZW4gY2FsbGVkIGEgc2VsZWN0b3IuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gIGNvbnNvbGUubG9nKFwiU1RBVEUgXCIsIHN0YXRlLnVzZXIpO1xuICByZXR1cm4ge1xuICAgIHVzZXI6IHN0YXRlLnVzZXJcbiAgfTtcbn1cbi8vIGluamVjdCBhbGwgYWN0aW9ucyBhcyBhY3Rpb25zLlxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucywgZGlzcGF0Y2gpO1xufVxuXG4vLyBjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuLy8gICByZW5kZXIoKSB7XG4vLyAgICAgY29uc29sZS5sb2coXCJ0aGlzLnByb3BzIFwiLCB0aGlzLnByb3BzKTtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgPGRpdj5cbi8vICAgICAgICAgPG5hdj5cbi8vICAgICAgICAgICBIaSwgdGhpcyBpcyB0aGUgR2FyZGVuIVxuLy8gICAgICAgICA8L25hdj5cbi8vICAgICAgICAgeyBSZWFjdC5jbG9uZUVsZW1lbnQodGhpcy5wcm9wcy5jaGlsZHJlbiwgdGhpcy5wcm9wcykgfVxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgKTtcbi8vICAgfVxuLy8gfVxuXG4vLyBJdCBuZWVkcyB0byBiZSBpbnZva2VkIHR3byB0aW1lcy4gVGhlIGZpcnN0IHRpbWUgd2l0aCBpdHMgYXJndW1lbnRzIGRlc2NyaWJlZCBhYm92ZSwgYW5kIGEgc2Vjb25kIHRpbWUsIHdpdGggdGhlIGNvbXBvbmVudFxuQXBwID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQXBwKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuLy8gUmVhY3QuY2xvbmVFbGVtZW50IGNsb25lcyB0aGlzLnByb3BzIEZPUiB0aGlzLnByb3BzLmNoaWxkcmVuIChpLmUuIExvZ2luIGNvbXBvbmVudCkuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvbXBvbmVudHMvQXBwLmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=