var redux = require('redux');

console.log('Starting redux example!!');

//Name Reducer and action generators
//-------------------------
var nameReducer = (state = "Anonymous", action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return action.name;
    default:
      return state;
  };
};

// Action generator is a simple function that takes the items required to generate the object and returns the object with the name on it

// Note - since the name of the variable is name of object identifier cna be single line - this is ES6
var changeName = (name) => {
  return{
    type: "CHANGE_NAME",
    //name: name
    name
  }
};

//Hobbies Reducer and action generators
//-------------------------
var nextHobbyId = 1;
var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_HOBBY":
      return [
        ...state, {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ];

    case "REMOVE_HOBBY":
      return state.filter((h) => h.id !== action.id);
    default:
      return state;
  };
};

var addHobby = (hobby) => {
  return{
    type: "ADD_HOBBY",
    hobby
  }
};

var removeHobby = (id) => {
  return{
    type: "REMOVE_HOBBY",
    id
  }
};


//Movies Reducer and action generators
//-------------------------
var nextMovieId = 1;
var moviesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return [
        ...state, {
          id: nextMovieId++,
          title: action.title,
          genre: action.genre
        }
      ];

    case "REMOVE_MOVIE":
      return state.filter((m) => m.id !== action.id);
    default:
      return state;
  };
};

var addMovie = (title, genre) => {
  return{
    type: "ADD_MOVIE",
    title,
    genre
  }
};

var removeMovie = (id) => {
  return{
    type: "REMOVE_MOVIE",
    id
  }
};


var reducer = redux.combineReducers({name: nameReducer, hobbies: hobbiesReducer, movies: moviesReducer});

// argument needs to be a pure function
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension
  ? window.devToolsExtension()
  : f => f));

//subscribe to changes - pass function
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log("new state", store.getState());
  document.getElementById('app').innerHTML = state.name + state.hobbies;
});
//unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

// var action = {
//   type: 'CHANGE_NAME',
//   name: 'Dave'
// };
//store.dispatch(action);

//store.dispatch({type: 'CHANGE_NAME', name: 'Dave'});
store.dispatch(changeName('Dave'));
//store.dispatch({type: 'CHANGE_NAME', name: 'Frank'});
store.dispatch(changeName('Frank'));
// store.dispatch({type: 'ADD_MOVIE', title: 'Better Off Dead', genre: "Comedy"});
store.dispatch(addMovie('Better Off Dead', "Comedy"));
// store.dispatch({type: 'ADD_HOBBY', hobby: 'running'});
store.dispatch(addHobby('running'));
// store.dispatch({type: 'ADD_HOBBY', hobby: 'sleeping'});
store.dispatch(addHobby('sleeping'));
// store.dispatch({type: 'ADD_HOBBY', hobby: 'eating'});
store.dispatch(addHobby('eating'));
// store.dispatch({type: 'ADD_HOBBY', hobby: 'coding'});
store.dispatch(addHobby('coding'));
// store.dispatch({type: 'ADD_MOVIE', title: 'Outlaw Jose Whales', genre: "Western"});
store.dispatch(addMovie('Outlaw Jose Whales', "Western"));
// store.dispatch({type: 'ADD_MOVIE', title: 'Batman', genre: "Action"});
store.dispatch(addMovie('Spiderman', "Action"));
// store.dispatch({type: 'CHANGE_NAME', name: 'Jill'});
store.dispatch(changeName('Jill'));
// store.dispatch({type: 'REMOVE_HOBBY', id: 2});
store.dispatch(removeHobby(2));
// store.dispatch({type: 'REMOVE_HOBBY', id: 1});
store.dispatch(removeHobby(1));
// store.dispatch({type: 'REMOVE_MOVIE', id: 1});
store.dispatch(removeMovie(1));

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
