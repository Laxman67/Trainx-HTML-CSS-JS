let a = 190;
let canDrive = true;
let details = {
  name: 'Shivraj',
  age: 15,
};

//Primitive Data types are immutable so they are copied by value WHY
function update(value, manCanDrive) {
  value++;
  manCanDrive = false;
  console.log(value);
  console.log(manCanDrive);
}

//Non-Primitive Data types are muttable so they are passed by reference WHY
function updateNonPrimitive(obj) {
  obj.age = 56;
  console.log(obj);
}

// FIXME: Bug in API
// TODO:  API Implementation Pending
update(a, canDrive); // 191 false
console.log(a, canDrive); // 190 true
updateNonPrimitive(details); // Shivraj 56
console.log(details); // shivraj 56
