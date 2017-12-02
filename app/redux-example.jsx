var redux = require('redux');

console.log('Starting redux example!!');

var stateDefault = {
  name: "Anonymous",
  hobbies: [],
  movies: []
}
// requires return a state
var nextHobbyId = 1;
var nextMovieId = 1;
var reducer = (state = stateDefault, action) => {
  // This is just what the 6 context does above
  //state = state || {name: 'Anonymous'};
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        ...state,
        name: action.name
      };

    case "ADD_HOBBY":
      return {
        ...state,
        hobbies: [
          ...state.hobbies, {
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ]
      };
    case "REMOVE_HOBBY":
      return {
        ...state,
        hobbies: state.hobbies.filter((h) => h.id !== action.id)
      };
    case "ADD_MOVIE":
      return {
        ...state,
        movies: [
          ...state.movies, {
            id: nextMovieId++,
            title: action.title,
            genre: action.genre
          }
        ]
      };
    case "REMOVE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter((m) => m.id !== action.id)
      };

    default:
      return state;
  }
};

// argument needs to be a pure function
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension
  ? window.devToolsExtension()
  : f => f));

//subscribe to changes - pass function
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log("new state", store.getState());
  document.getElementById('app').innerHTML = state.name + state.hobbies[0];
});
//unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

// var action = {
//   type: 'CHANGE_NAME',
//   name: 'Dave'
// };
//store.dispatch(action);

store.dispatch({type: 'CHANGE_NAME', name: 'Dave'});
store.dispatch({type: 'CHANGE_NAME', name: 'Frank'});
store.dispatch({type: 'ADD_MOVIE', title: 'Better Off Dead', genre: "Comedy"});
store.dispatch({type: 'ADD_HOBBY', hobby: 'running'});
store.dispatch({type: 'ADD_HOBBY', hobby: 'sleeping'});
store.dispatch({type: 'ADD_HOBBY', hobby: 'eating'});
store.dispatch({type: 'ADD_HOBBY', hobby: 'coding'});
store.dispatch({type: 'ADD_MOVIE', title: 'Outlaw Jose Whales', genre: "Western"});
store.dispatch({type: 'CHANGE_NAME', name: 'Jill'});
store.dispatch({type: 'REMOVE_HOBBY', id: 2});
store.dispatch({type: 'REMOVE_HOBBY', id: 1});
store.dispatch({type: 'REMOVE_MOVIE', id: 1});

// /* pure function (no outside varibles,
//    no change outside variables, always
//    returns same output for same input)
//    Not allowed to update values passed in (like arrays or objects)
//    must be synchronous
//    */
// function add (a,b){
//   return a+b;
// }
//
//  here we see different way to handle
// function changePropPure(obj){
//   return {
//     ...obj,
//     name:"NewName"
//   };
// }
//
// function changePropNotPure(obj){
//   obj.name = "NewName";
//   return obj;
// };
//
// var startingValue = {name:"Dave", age:50};
// var res = changePropPure(startingValue);
// console.log(startingValue);
// console.log(res);
// var startingValue2 = {name:"Dave", age:50};
// var res = changePropNotPure(startingValue2);
// console.log(startingValue2);
// console.log(res);
