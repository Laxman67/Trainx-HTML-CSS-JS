debugger;
console.log('Global Execution Context Start'); //X

var globalVariable = 'I am a global Variable'; //

console.log(globalVariable);
// console.log(greet());
greet();

console.log('Global Execution Context End');

// Function Declaration
function greet() {
  var name = 'Hastag';
  console.log('Inside Global Function');
  return 900;
  function sum() {
    console.log(78 + 78);
  }
}

/**
 *Creation Phase
 *var globalVariable= 'I am a global Variable'
 *greet=function greet() {
  var name = 'Hastag';
  console.log('Inside Global Function');
  return 900;
}
 *
 *
 * Execution Phase
 * console.log('Global Execution Context Start');
 *
*var globalVariable = 'I am a global Variable'; //*
console.log(globalVariable);

 *
 *  */
