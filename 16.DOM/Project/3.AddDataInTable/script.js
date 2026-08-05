let products = [];
let form = document.getElementById('form');
let table = document.getElementById('table');

//1. FIXME: Get array of product from LocalStorage
console.log(
  `Data from locaStorage Unparsed(JSON): `,
  localStorage.getItem('products')
);

const parsedProducts = JSON.parse(localStorage.getItem('products')) || [];
// FIXME: Destructuring
products = [...parsedProducts];
console.log(`parsedProducts: `, parsedProducts);

displayDataInTable(products);
console.log(`Products [] Array :`, products);

// To Apply click on Submit btn
document.addEventListener('keypress', (e) => {
  if (e.key == 'Enter') {
    // document.getElementById('submit-btn').click;
    form.submit;
    console.log('Form Sumbitted ');
  }
});

form.addEventListener('submit', (e) => {
  let newProduct = {};
  let inputFields = e.target.querySelectorAll('input');

  inputFields.forEach((el) => {
    const { name, value } = el;
    newProduct[name] = value;
    console.log(name, value);
  });
  let selectField = e.target.querySelectorAll('select');

  selectField.forEach((el) => {
    const { name, value } = el;
    newProduct[name] = value;
    console.log(name, value);
  });

  //2. FIXME: Deleting Old Data from localStorage
  localStorage.setItem('products', '');

  // 3. FIXME:
  products.push({ id: products.length + 1, ...newProduct });
  localStorage.setItem('products', JSON.stringify(products));

  // 4. FIXME:
  console.log(localStorage.getItem('products'));

  // console.log(products);

  e.target.reset();
});

console.log(products);

function displayDataInTable(products) {
  // We're looping over each product and creating new Element 'tr' and appending
  // data in it using <td></td> insidde the Table Element
  products?.forEach((product) => {
    console.log(product);
    let newTableRow = document.createElement('tr');

    newTableRow.innerHTML = `
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.category}</td>
        <td>${product.price}</td>
        <td>${product.quantity}</td>
        <td>
  <button class="deleteBtn">Delete</button>
</td>

        `;
    table.appendChild(newTableRow);
  });
}

let deleteBtns = document.querySelectorAll('.deleteBtn');
deleteBtns.forEach((btn) => [
  btn.addEventListener('click', (e) => {
    let btn = e.target;
    let parent = btn.parentElement.parentElement;
    let index = parent.firstElementChild.textContent;
    console.log(index);
    let filteredProduct = products.filter((el) => el.id != index);
    // TODO:
    console.log(filteredProduct);

    products = [...filteredProduct];
    localStorage.setItem('products', JSON.stringify(products));
    document.location.reload();
  }),
]);
