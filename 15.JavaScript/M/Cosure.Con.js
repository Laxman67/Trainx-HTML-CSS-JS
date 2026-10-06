function outer() {
  let sum = 0;
  return function () {
    sum++; //2
    console.log(`Sum is ${sum}`); //2
  };
}

let outerfn = outer();
console.log(outerfn);

outerfn(); //1
outerfn();
outerfn();
outerfn();
return inner;
