var redux = require('redux');

// Thunk allows the redux to process actions which are more or less functions
var thunk = require('redux-thunk').default;

var {
  nameReducer,
  hobbiesReducer,
  moviesReducer,
  mapReducer
} = require('./../reducers/index');

export var configure = () => {

  var reducer = redux.combineReducers({name: nameReducer, hobbies: hobbiesReducer, movies: moviesReducer, map: mapReducer});

  // argument needs to be a pure function
  var store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension
    ? window.devToolsExtension()
    : f => f));

    return store;
}
