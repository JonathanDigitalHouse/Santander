const products = [
  'Celular motorola',
  'Celular samsung',
  'Celular Xiaomi',
  'Teclado PC',
  'Monitor',
  'Gabinete',
  'Parlantes',
];

const results = document.querySelector('#results');
const inputSearch = document.querySelector('#search');

products.forEach((product) => {
  results.innerHTML += `<li>${product}</li>`;
});

inputSearch.addEventListener('keyup', () => {
  results.innerHTML = '';
  products.forEach((product) => {
    if (product.indexOf(inputSearch.value) !== -1) {
      results.innerHTML += `<li>${product}</li>`;
    }
  });
});
