debugger;
console.log('Global Execution Context Start');

var globalVariable = 'I am a global Variable';

console.log(globalVariable);
console.log(greet());
greet();

console.log('Global Execution Context End');

// Function Declaration
function greet() {
  var name = 'Hastag';
  console.log('Inside Global Function');
  return 900;
}

/**
 * Memory Phase
 * globalVariable='I am a global Variable';
 * greet=function greet() {
  let name = 'Hastag';
  console.log('Inside Global Function');
}
 *
 * Execution Phase
 *console.log('Global Execution Context Start');
 globalVariable - <Output
 console.log('Inside Global Function');
 undefined
  console.log('Inside Global Function');
console.log('Global Execution Context End');

FEC: greet
 ------------Memory Phase | ----Execution Phase
name='Hastag' var name = 'Hastag';
  console.log('Inside Global Function');

  */
