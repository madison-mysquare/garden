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
	
	var _Dashboard = __webpack_require__(211);
	
	var _Dashboard2 = _interopRequireDefault(_Dashboard);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// The mapStateToProps function takes a single argument of the entire Redux store’s state and returns an object to be passed as props.
	// It is often called a selector.
	
	// use connect since we are wrapping compinents in <Provider>
	// connects a React component to Redux store.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qc3g/OWJjYyJdLCJuYW1lcyI6WyJhY3Rpb25zIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJvd25Qcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJBcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFHQTs7QUFDQTs7QUFDQTs7S0FBWUEsTzs7QUFDWjs7Ozs7Ozs7QUFFQTtBQUNBOztBQVJBO0FBQ0E7QUFRQSxVQUFTQyxlQUFULENBQXlCQyxLQUF6QixFQUFnQ0MsUUFBaEMsRUFBMEM7QUFDeENDLFdBQVFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCSCxNQUFNSSxJQUE1QjtBQUNBLFVBQU87QUFDTEEsV0FBTUosTUFBTUk7QUFEUCxJQUFQO0FBR0Q7QUFDRDtBQUNBLFVBQVNDLGtCQUFULENBQTRCQyxRQUE1QixFQUFzQztBQUNwQyxVQUFPLCtCQUFtQlIsT0FBbkIsRUFBNEJRLFFBQTVCLENBQVA7QUFDRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQU1DLE1BQU0seUJBQVFSLGVBQVIsRUFBeUJNLGtCQUF6QixzQkFBWjs7bUJBRWVFLEc7QUFDZix3RiIsImZpbGUiOiIwLjJiMzkxNTIwN2NlNmYwZDkwMjMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG4vLyB1c2UgY29ubmVjdCBzaW5jZSB3ZSBhcmUgd3JhcHBpbmcgY29tcGluZW50cyBpbiA8UHJvdmlkZXI+XG4vLyBjb25uZWN0cyBhIFJlYWN0IGNvbXBvbmVudCB0byBSZWR1eCBzdG9yZS5cbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tIFwiLi4vYWN0aW9ucy9hY3Rpb25zXCI7XG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gXCIuL0Rhc2hib2FyZFwiO1xuXG4vLyBUaGUgbWFwU3RhdGVUb1Byb3BzIGZ1bmN0aW9uIHRha2VzIGEgc2luZ2xlIGFyZ3VtZW50IG9mIHRoZSBlbnRpcmUgUmVkdXggc3RvcmXigJlzIHN0YXRlIGFuZCByZXR1cm5zIGFuIG9iamVjdCB0byBiZSBwYXNzZWQgYXMgcHJvcHMuXG4vLyBJdCBpcyBvZnRlbiBjYWxsZWQgYSBzZWxlY3Rvci5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgY29uc29sZS5sb2coXCJTVEFURSBcIiwgc3RhdGUudXNlcik7XG4gIHJldHVybiB7XG4gICAgdXNlcjogc3RhdGUudXNlclxuICB9O1xufVxuLy8gaW5qZWN0IGFsbCBhY3Rpb25zIGFzIGFjdGlvbnMuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25zLCBkaXNwYXRjaCk7XG59XG5cbi8vIGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4vLyAgIHJlbmRlcigpIHtcbi8vICAgICBjb25zb2xlLmxvZyhcInRoaXMucHJvcHMgXCIsIHRoaXMucHJvcHMpO1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8ZGl2PlxuLy8gICAgICAgICA8bmF2PlxuLy8gICAgICAgICAgIEhpLCB0aGlzIGlzIHRoZSBHYXJkZW4hXG4vLyAgICAgICAgIDwvbmF2PlxuLy8gICAgICAgICB7IFJlYWN0LmNsb25lRWxlbWVudCh0aGlzLnByb3BzLmNoaWxkcmVuLCB0aGlzLnByb3BzKSB9XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICApO1xuLy8gICB9XG4vLyB9XG5cbi8vIEl0IG5lZWRzIHRvIGJlIGludm9rZWQgdHdvIHRpbWVzLiBUaGUgZmlyc3QgdGltZSB3aXRoIGl0cyBhcmd1bWVudHMgZGVzY3JpYmVkIGFib3ZlLCBhbmQgYSBzZWNvbmQgdGltZSwgd2l0aCB0aGUgY29tcG9uZW50XG5jb25zdCBBcHAgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShEYXNoYm9hcmQpO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4vLyBSZWFjdC5jbG9uZUVsZW1lbnQgY2xvbmVzIHRoaXMucHJvcHMgRk9SIHRoaXMucHJvcHMuY2hpbGRyZW4gKGkuZS4gTG9naW4gY29tcG9uZW50KS5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29tcG9uZW50cy9BcHAuanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==