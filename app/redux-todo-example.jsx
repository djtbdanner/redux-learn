var redux = require('redux');

console.log('Starting redux todo example!!');

var stateDefault = {showCompleted: false,searchText: '', todos: []};
var reducer = (state = stateDefault, action) => {
  return state;
};

// argument needs to be a pure function
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentTodoState', currentState);
