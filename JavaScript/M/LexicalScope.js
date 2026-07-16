// // let a = 'global variable';

// function first() {
//   console.log(a); // ?
// }
// function second() {
//   let a = 'local to second';
//   console.log(a);

//   first();
// }
// second();
// var a = 90;

// Scope Chain
let globalVariable = "I'm a Global Variable";
var globalVariable = "I'm global Inside Outer variables";
function outer() {
  let outerVariable = "I'm a Outer Variable";

  function inner() {
    let innerVariable = "I'm inner variables";
    console.log(innerVariable); // "I'm inner variables";
    console.log(outerVariable); //"I'm a Outer Variable";
    console.log(globalVariable); //"I'm global Inside Inner variables";
  }
  inner();
}
outer();
