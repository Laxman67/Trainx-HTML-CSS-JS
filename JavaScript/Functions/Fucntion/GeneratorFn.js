function* simpleGenerator(args) {
  yield `Hello ${args}`;
  yield 'World';
}
const iterator = simpleGenerator(123);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
