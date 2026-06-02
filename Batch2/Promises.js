async function getData() {
  console.log('getData() Start'); //1

  try {
    let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => console.log(json));

    console.log('getData() End'); //2
  } catch (error) {
    console.log(`Error Message :${error.message}`);
  }
}

getData();
