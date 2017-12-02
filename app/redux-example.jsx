var redux = require('redux');

console.log('Starting redux example!!');


// requires return a state
var reducer = (state = {name: 'Anonymous'}, action) => {
  // This is just what the 6 context does above
  //state = state || {name: 'Anonymous'};
  switch (action.type){
    case "CHANGE_NAME":
      return {
        ...state,
        name: action.name
      };
      default:
        return state;
  }
};

// argument needs to be a pure function
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension? window.devToolsExtension(): f => f
));

//subscribe to changes - pass function
var unsubscribe = store.subscribe(()=>{
  var state = store.getState();
  console.log("name is", state.name);
  document.getElementById('app').innerHTML =state.name;
});
//unsubscribe();


var currentState = store.getState();
console.log('currentState', currentState);

// var action = {
//   type: 'CHANGE_NAME',
//   name: 'Dave'
// };
//store.dispatch(action);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Dave'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Jill'
});


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
// // here we see different way to handle
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
