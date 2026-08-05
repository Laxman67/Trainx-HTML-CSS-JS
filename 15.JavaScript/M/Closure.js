function createArray() {
  const arr = [];

  return {
    push(value) {
      arr[arr.length] = value;
    },

    getArray() {
      return [...arr]; // Return a copy
    },
    getElement(element) {
      let index = arr.indexOf(element);

      if (arr.includes(element) && index != -1) {
        return { index: 1, element: element };
      } else {
        return 'Error :Element NOT FOUND ! ';
      }
    },
  };
}

const myArray = createArray();

myArray.push(10);
myArray.push(20);
myArray.push(30);
myArray.push(50);
console.log(myArray.getElement(1));
console.log(myArray.getArray());
