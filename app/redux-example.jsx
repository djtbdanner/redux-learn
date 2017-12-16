var redux = require('redux');
var axios = require('axios');

console.log('Starting redux example!!');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();
alert(actions);alert(store);

//subscribe to changes - pass function
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = "Loading....";
  } else if (state.map.url) {
    document.getElementById('app').innerHTML="<a href='" + state.map.url + "' target='_blank'>View You Location</a>";
  }
  console.log("new state", store.getState());
//  document.getElementById('app').innerHTML = state.name + state.hobbies;
});
//unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(actions.fetchLocation());
// var action = {
//   type: 'CHANGE_NAME',
//   name: 'Dave'
// };
//store.dispatch(action);

//store.dispatch({type: 'CHANGE_NAME', name: 'Dave'});
store.dispatch(actions.changeName('Dave'));
//store.dispatch({type: 'CHANGE_NAME', name: 'Frank'});
store.dispatch(actions.changeName('Frank'));
// store.dispatch({type: 'ADD_MOVIE', title: 'Better Off Dead', genre: "Comedy"});
store.dispatch(actions.addMovie('Better Off Dead', "Comedy"));
// store.dispatch({type: 'ADD_HOBBY', hobby: 'running'});
store.dispatch(actions.addHobby('running'));
// store.dispatch({type: 'ADD_HOBBY', hobby: 'sleeping'});
store.dispatch(actions.addHobby('sleeping'));
// store.dispatch({type: 'ADD_HOBBY', hobby: 'eating'});
store.dispatch(actions.addHobby('eating'));
// store.dispatch({type: 'ADD_HOBBY', hobby: 'coding'});
store.dispatch(actions.addHobby('coding'));
// store.dispatch({type: 'ADD_MOVIE', title: 'Outlaw Jose Whales', genre: "Western"});
store.dispatch(actions.addMovie('Outlaw Jose Whales', "Western"));
// store.dispatch({type: 'ADD_MOVIE', title: 'Batman', genre: "Action"});
store.dispatch(actions.addMovie('Spiderman', "Action"));
// store.dispatch({type: 'CHANGE_NAME', name: 'Jill'});
store.dispatch(actions.changeName('Jill'));
// store.dispatch({type: 'REMOVE_HOBBY', id: 2});
store.dispatch(actions.removeHobby(2));
// store.dispatch({type: 'REMOVE_HOBBY', id: 1});
store.dispatch(actions.removeHobby(1));
// store.dispatch({type: 'REMOVE_MOVIE', id: 1});
store.dispatch(actions.removeMovie(1));

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
