// Print the Table Of Given (N)

function printTable(number) {
  console.log('Table START -------');
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} X ${i} = ${number * i}`);
  }
  console.log('Table END -------');
}
// printTable(90);

function* myGenerator() {
  yield 1;
  yield 2;
  return 3;
}

const gen = myGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: true }
