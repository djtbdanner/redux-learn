var redux = require('redux');

console.log('Starting redux todo example!!');

var stateDefault = {
  showCompleted: false,
  searchText: '',
  todos: []
};
var reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHANGE_SEARCH_TEXT":
      return {
        ...state,
        searchText: action.searchText
      };
      case "CHANGE_SHOW_COMPLETED":
        return {
          ...state,
          showCompleted: !action.showCompleted
        };
    default:
      return state;
  }
};

// argument needs to be a pure function
//var store = redux.createStore(reducer);

/// allows use of redux developer tools in chrome
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension? window.devToolsExtension(): f => f
));

var unsubscribe = store.subscribe(()=>{
  var state = store.getState();
  var stateString = "Search text = " + state.searchText + "<br/>todos=" + state.todos + "<br/>show completed = " + state.showCompleted;
  console.log("stuff",stateString);
  document.getElementById('app').innerHTML =stateString ;
});

var currentState = store.getState();
console.log('currentTodoState', currentState);

// var action = {
// type: 'CHANGE_SEARCH_TEXT',
// searchText: 'Work'
// };
store.dispatch({type: 'CHANGE_SEARCH_TEXT', searchText: 'Work'});
console.log('search text should be changed ', store.getState());
store.dispatch({type: 'CHANGE_SEARCH_TEXT', searchText: 'Play'});
console.log('search text should be changed ', store.getState());
store.dispatch({type: 'CHANGE_SEARCH_TEXT', searchText: 'Sleep'});
console.log('search text should be changed ', store.getState());
store.dispatch({type: 'CHANGE_SHOW_COMPLETED'});
console.log('show completed should be different ', store.getState());
