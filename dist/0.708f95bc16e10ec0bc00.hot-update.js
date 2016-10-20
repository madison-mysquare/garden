webpackHotUpdate(0,{

/***/ 210:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.App = undefined;
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(149);
	
	var _redux = __webpack_require__(66);
	
	var _actions = __webpack_require__(209);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _components2 = __webpack_require__(461);
	
	var components = _interopRequireWildcard(_components2);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// The mapStateToProps function takes a single argument of the entire Redux store’s state and returns an object to be passed as props.
	// It is often called a selector.
	
	// use connect since we are wrapping compinents in <Provider>
	// connects a React component to Redux store.
	var App = exports.App = (0, _reactRedux.connect)(function mapStateToProps(state, ownProps) {
	  console.log("STATE ", state.user);
	  return {
	    user: state.user
	  };
	},
	// inject all actions as actions.
	function mapDispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)(actions, dispatch);
	})(components.App);
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
	// connect(mapStateToProps, mapDispatchToProps)(App);
	
	// export default App;
	// React.cloneElement clones this.props FOR this.props.children (i.e. Login component).

/***/ },

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Todo = Todo;
	exports.TodoList = TodoList;
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Todo(props) {
	  var todo = props.todo;
	
	  if (todo.isDone) {
	    return _react2.default.createElement(
	      'strike',
	      null,
	      todo.text
	    );
	  } else {
	    return _react2.default.createElement(
	      'span',
	      null,
	      todo.text
	    );
	  }
	}
	
	function TodoList(props) {
	  var todos = props.todos;
	
	  return _react2.default.createElement(
	    'div',
	    { className: 'todo' },
	    _react2.default.createElement('input', { type: 'text', placeholder: 'Add todo' }),
	    _react2.default.createElement(
	      'ul',
	      { className: 'todo__list' },
	      todos.map(function (t) {
	        return _react2.default.createElement(
	          'li',
	          { key: t.id, className: 'todo__item' },
	          _react2.default.createElement(Todo, { todo: t })
	        );
	      })
	    )
	  );
	}

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qc3g/OWJjYyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbXBvbmVudHMuanM/MzI5MSJdLCJuYW1lcyI6WyJhY3Rpb25zIiwiY29tcG9uZW50cyIsIkFwcCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwib3duUHJvcHMiLCJjb25zb2xlIiwibG9nIiwidXNlciIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiVG9kbyIsIlRvZG9MaXN0IiwicHJvcHMiLCJ0b2RvIiwiaXNEb25lIiwidGV4dCIsInRvZG9zIiwibWFwIiwidCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUdBOztBQUNBOztBQUNBOztLQUFZQSxPOztBQUNaOztLQUFZQyxVOzs7Ozs7QUFFWjtBQUNBOztBQVJBO0FBQ0E7QUFRTyxLQUFNQyxvQkFBTSx5QkFDakIsU0FBU0MsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0NDLFFBQWhDLEVBQTBDO0FBQ3hDQyxXQUFRQyxHQUFSLENBQVksUUFBWixFQUFzQkgsTUFBTUksSUFBNUI7QUFDQSxVQUFPO0FBQ0xBLFdBQU1KLE1BQU1JO0FBRFAsSUFBUDtBQUdELEVBTmdCO0FBT2pCO0FBQ0EsVUFBU0Msa0JBQVQsQ0FBNEJDLFFBQTVCLEVBQXNDO0FBQ3BDLFVBQU8sK0JBQW1CVixPQUFuQixFQUE0QlUsUUFBNUIsQ0FBUDtBQUNELEVBVmdCLEVBV2pCVCxXQUFXQyxHQVhNLENBQVo7QUFZUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0Y7Ozs7Ozs7Ozs7OztTQ3JDZ0JTLEksR0FBQUEsSTtTQVNBQyxRLEdBQUFBLFE7O0FBWGhCOzs7Ozs7QUFFTyxVQUFTRCxJQUFULENBQWNFLEtBQWQsRUFBcUI7QUFBQSxPQUNsQkMsSUFEa0IsR0FDVEQsS0FEUyxDQUNsQkMsSUFEa0I7O0FBRTFCLE9BQUdBLEtBQUtDLE1BQVIsRUFBZ0I7QUFDZCxZQUFPO0FBQUE7QUFBQTtBQUFTRCxZQUFLRTtBQUFkLE1BQVA7QUFDRCxJQUZELE1BRU87QUFDTCxZQUFPO0FBQUE7QUFBQTtBQUFPRixZQUFLRTtBQUFaLE1BQVA7QUFDRDtBQUNGOztBQUVNLFVBQVNKLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUEsT0FDdEJJLEtBRHNCLEdBQ1pKLEtBRFksQ0FDdEJJLEtBRHNCOztBQUU5QixVQUNFO0FBQUE7QUFBQSxPQUFLLFdBQVUsTUFBZjtBQUNFLDhDQUFPLE1BQUssTUFBWixFQUFtQixhQUFZLFVBQS9CLEdBREY7QUFFRTtBQUFBO0FBQUEsU0FBSSxXQUFVLFlBQWQ7QUFDR0EsYUFBTUMsR0FBTixDQUFVO0FBQUEsZ0JBQ1Q7QUFBQTtBQUFBLGFBQUksS0FBS0MsRUFBRUMsRUFBWCxFQUFlLFdBQVUsWUFBekI7QUFDRSx5Q0FBQyxJQUFELElBQU0sTUFBTUQsQ0FBWjtBQURGLFVBRFM7QUFBQSxRQUFWO0FBREg7QUFGRixJQURGO0FBWUQsRSIsImZpbGUiOiIwLjcwOGY5NWJjMTZlMTBlYzBiYzAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG4vLyB1c2UgY29ubmVjdCBzaW5jZSB3ZSBhcmUgd3JhcHBpbmcgY29tcGluZW50cyBpbiA8UHJvdmlkZXI+XG4vLyBjb25uZWN0cyBhIFJlYWN0IGNvbXBvbmVudCB0byBSZWR1eCBzdG9yZS5cbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tIFwiLi4vYWN0aW9ucy9hY3Rpb25zXCI7XG5pbXBvcnQgKiBhcyBjb21wb25lbnRzIGZyb20gXCIuL2NvbXBvbmVudHNcIjtcblxuLy8gVGhlIG1hcFN0YXRlVG9Qcm9wcyBmdW5jdGlvbiB0YWtlcyBhIHNpbmdsZSBhcmd1bWVudCBvZiB0aGUgZW50aXJlIFJlZHV4IHN0b3Jl4oCZcyBzdGF0ZSBhbmQgcmV0dXJucyBhbiBvYmplY3QgdG8gYmUgcGFzc2VkIGFzIHByb3BzLlxuLy8gSXQgaXMgb2Z0ZW4gY2FsbGVkIGEgc2VsZWN0b3IuXG5leHBvcnQgY29uc3QgQXBwID0gY29ubmVjdChcbiAgZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICAgIGNvbnNvbGUubG9nKFwiU1RBVEUgXCIsIHN0YXRlLnVzZXIpO1xuICAgIHJldHVybiB7XG4gICAgICB1c2VyOiBzdGF0ZS51c2VyXG4gICAgfTtcbiAgfSxcbiAgLy8gaW5qZWN0IGFsbCBhY3Rpb25zIGFzIGFjdGlvbnMuXG4gIGZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICAgIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucywgZGlzcGF0Y2gpO1xuICB9XG4pKGNvbXBvbmVudHMuQXBwKTtcbi8vIGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4vLyAgIHJlbmRlcigpIHtcbi8vICAgICBjb25zb2xlLmxvZyhcInRoaXMucHJvcHMgXCIsIHRoaXMucHJvcHMpO1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8ZGl2PlxuLy8gICAgICAgICA8bmF2PlxuLy8gICAgICAgICAgIEhpLCB0aGlzIGlzIHRoZSBHYXJkZW4hXG4vLyAgICAgICAgIDwvbmF2PlxuLy8gICAgICAgICB7IFJlYWN0LmNsb25lRWxlbWVudCh0aGlzLnByb3BzLmNoaWxkcmVuLCB0aGlzLnByb3BzKSB9XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICApO1xuLy8gICB9XG4vLyB9XG5cbi8vIEl0IG5lZWRzIHRvIGJlIGludm9rZWQgdHdvIHRpbWVzLiBUaGUgZmlyc3QgdGltZSB3aXRoIGl0cyBhcmd1bWVudHMgZGVzY3JpYmVkIGFib3ZlLCBhbmQgYSBzZWNvbmQgdGltZSwgd2l0aCB0aGUgY29tcG9uZW50XG4vLyBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBcHApO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBBcHA7XG4vLyBSZWFjdC5jbG9uZUVsZW1lbnQgY2xvbmVzIHRoaXMucHJvcHMgRk9SIHRoaXMucHJvcHMuY2hpbGRyZW4gKGkuZS4gTG9naW4gY29tcG9uZW50KS5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29tcG9uZW50cy9BcHAuanN4XG4gKiovIiwiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gVG9kbyhwcm9wcykge1xuICBjb25zdCB7IHRvZG8gfSA9IHByb3BzO1xuICBpZih0b2RvLmlzRG9uZSkge1xuICAgIHJldHVybiA8c3RyaWtlPnt0b2RvLnRleHR9PC9zdHJpa2U+O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiA8c3Bhbj57dG9kby50ZXh0fTwvc3Bhbj47XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRvZG9MaXN0KHByb3BzKSB7XG4gIGNvbnN0IHsgdG9kb3MgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSd0b2RvJz5cbiAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nQWRkIHRvZG8nIC8+XG4gICAgICA8dWwgY2xhc3NOYW1lPSd0b2RvX19saXN0Jz5cbiAgICAgICAge3RvZG9zLm1hcCh0ID0+IChcbiAgICAgICAgICA8bGkga2V5PXt0LmlkfSBjbGFzc05hbWU9J3RvZG9fX2l0ZW0nPlxuICAgICAgICAgICAgPFRvZG8gdG9kbz17dH0gLz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvbXBvbmVudHMvY29tcG9uZW50cy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=