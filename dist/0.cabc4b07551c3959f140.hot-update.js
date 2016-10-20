webpackHotUpdate(0,{

/***/ 113:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(149);
	
	var _redux = __webpack_require__(65);
	
	var _actions = __webpack_require__(207);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _Dashboard = __webpack_require__(208);
	
	var _Dashboard2 = _interopRequireDefault(_Dashboard);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// The mapStateToProps function takes a single argument of the entire Redux store’s state and returns an object to be passed as props.
	// It is often called a selector.
	
	// use connect since we are wrapping compinents in <Provider>
	// connects a React component to Redux store.
	function mapStateToProps(state) {
	  console.log("STATE ", state.user);
	  return {
	    user: state.user
	  };
	}
	// inject all actions as actions.
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
	var App = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Dashboard2.default);
	
	exports.default = App;
	// React.cloneElement clones this.props FOR this.props.children (i.e. Login component).

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qc3g/OWJjYyJdLCJuYW1lcyI6WyJhY3Rpb25zIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwidXNlciIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiQXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBR0E7O0FBQ0E7O0FBQ0E7O0tBQVlBLE87O0FBQ1o7Ozs7Ozs7O0FBRUE7QUFDQTs7QUFSQTtBQUNBO0FBUUEsVUFBU0MsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0M7QUFDOUJDLFdBQVFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCRixNQUFNRyxJQUE1QjtBQUNBLFVBQU87QUFDTEEsV0FBTUgsTUFBTUc7QUFEUCxJQUFQO0FBR0Q7QUFDRDtBQUNBLFVBQVNDLGtCQUFULENBQTRCQyxRQUE1QixFQUFzQztBQUNwQyxVQUFPLCtCQUFtQlAsT0FBbkIsRUFBNEJPLFFBQTVCLENBQVA7QUFDRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQU1DLE1BQU0seUJBQVFQLGVBQVIsRUFBeUJLLGtCQUF6QixzQkFBWjs7bUJBRWVFLEc7QUFDZix3RiIsImZpbGUiOiIwLmNhYmM0YjA3NTUxYzM5NTlmMTQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG4vLyB1c2UgY29ubmVjdCBzaW5jZSB3ZSBhcmUgd3JhcHBpbmcgY29tcGluZW50cyBpbiA8UHJvdmlkZXI+XG4vLyBjb25uZWN0cyBhIFJlYWN0IGNvbXBvbmVudCB0byBSZWR1eCBzdG9yZS5cbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tIFwiLi4vYWN0aW9ucy9hY3Rpb25zXCI7XG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gXCIuL0Rhc2hib2FyZFwiO1xuXG4vLyBUaGUgbWFwU3RhdGVUb1Byb3BzIGZ1bmN0aW9uIHRha2VzIGEgc2luZ2xlIGFyZ3VtZW50IG9mIHRoZSBlbnRpcmUgUmVkdXggc3RvcmXigJlzIHN0YXRlIGFuZCByZXR1cm5zIGFuIG9iamVjdCB0byBiZSBwYXNzZWQgYXMgcHJvcHMuXG4vLyBJdCBpcyBvZnRlbiBjYWxsZWQgYSBzZWxlY3Rvci5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICBjb25zb2xlLmxvZyhcIlNUQVRFIFwiLCBzdGF0ZS51c2VyKTtcbiAgcmV0dXJuIHtcbiAgICB1c2VyOiBzdGF0ZS51c2VyXG4gIH07XG59XG4vLyBpbmplY3QgYWxsIGFjdGlvbnMgYXMgYWN0aW9ucy5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbnMsIGRpc3BhdGNoKTtcbn1cblxuLy8gY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbi8vICAgcmVuZGVyKCkge1xuLy8gICAgIGNvbnNvbGUubG9nKFwidGhpcy5wcm9wcyBcIiwgdGhpcy5wcm9wcyk7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgIDxkaXY+XG4vLyAgICAgICAgIDxuYXY+XG4vLyAgICAgICAgICAgSGksIHRoaXMgaXMgdGhlIEdhcmRlbiFcbi8vICAgICAgICAgPC9uYXY+XG4vLyAgICAgICAgIHsgUmVhY3QuY2xvbmVFbGVtZW50KHRoaXMucHJvcHMuY2hpbGRyZW4sIHRoaXMucHJvcHMpIH1cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgICk7XG4vLyAgIH1cbi8vIH1cblxuLy8gSXQgbmVlZHMgdG8gYmUgaW52b2tlZCB0d28gdGltZXMuIFRoZSBmaXJzdCB0aW1lIHdpdGggaXRzIGFyZ3VtZW50cyBkZXNjcmliZWQgYWJvdmUsIGFuZCBhIHNlY29uZCB0aW1lLCB3aXRoIHRoZSBjb21wb25lbnRcbmNvbnN0IEFwcCA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKERhc2hib2FyZCk7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbi8vIFJlYWN0LmNsb25lRWxlbWVudCBjbG9uZXMgdGhpcy5wcm9wcyBGT1IgdGhpcy5wcm9wcy5jaGlsZHJlbiAoaS5lLiBMb2dpbiBjb21wb25lbnQpLlxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb21wb25lbnRzL0FwcC5qc3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9