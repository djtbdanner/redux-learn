var redux = require('redux');

console.log('Starting redux example!!');

/* pure function (no outside varibles,
   no change outside variables, always
   returns same output for same input)
   Not allowed to update values passed in (like arrays or objects)
   must be synchronous
   */
function add (a,b){
  return a+b;
}

// here we see different way to handle
function changePropPure(obj){
  return {
    ...obj,
    name:"NewName"
  };
}

function changePropNotPure(obj){
  obj.name = "NewName";
  return obj;
};

var startingValue = {name:"Dave", age:50};
var res = changePropPure(startingValue);
console.log(startingValue);
console.log(res);
var startingValue2 = {name:"Dave", age:50};
var res = changePropNotPure(startingValue2);
console.log(startingValue2);
console.log(res);
