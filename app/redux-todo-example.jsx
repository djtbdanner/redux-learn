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
    default:
      return state;
  }
};

// argument needs to be a pure function
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentTodoState', currentState);

// var action = {
// type: 'CHANGE_SEARCH_TEXT',
// searchText: 'Work'
// };

store.dispatch({
type: 'CHANGE_SEARCH_TEXT',
searchText: 'Work'
});
console.log('search text should be changed ' , store.getState());
