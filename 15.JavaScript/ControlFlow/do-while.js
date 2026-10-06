let num = 100;
for (let index = 1; index <= num; index++) {
  if (index % 3 == 0 && index % 5 == 0) {
    continue;
  } else {
    console.log(index);
  }
}

// console.log(count);
