const carrito = [
  {
    title: 'Articulo Html',
    puntos: 123,
  },
  {
    title: 'Articulo Js',
    puntos: 333,
  },
  {
    title: 'Articulo NodeJs',
    puntos: 33,
  },
  {
    title: 'Articulo Metodos Array',
    puntos: 22,
  },
];

// function agregarProducto(producto, price, ...otros) {
//   const [, otracosa] = otros;

//   console.log(producto);
//   console.log(price);
//   console.log(otracosa);
// }

// agregarProducto('Celular sarasa', 123, 'El celular más saroso', 'Otra cosa');

// const nota = {
//   title: 'titulo',
//   puntos: 123,
// };

// const nuevaNota = {
//   ...nota,
//   date: new Date().toLocaleDateString(),
// };

// console.log(nuevaNota);

// const obj = {
//   title: 'Motorola',
//   price: 123,
//   modelo: {
//     serie: 123123,
//   },
// };

// carrito.forEach((art) => {
//   art.date = new Date().toLocaleString();
// });

// const {
//   modelo: { serie },
// } = obj;

// console.log(modelo);

// const [, segundoElemento] = carrito;

// console.log(segundoElemento);

// const carritoSuma = carrito.reduce((acumulador, valorActual) => {
//   return acumulador + valorActual.puntos;
// }, 0);

// console.log(carritoSuma);

//const notasTerminadas = notas.filter((nota) => nota.status === 'terminado');

//const notasPendientes = notas.filter((notas) => notas.status === 'pendiente');

// const notasTerminadas = notas.filter((notas) => notas.status !== 'pendiente');

// console.log(notasTerminadas);

// const cb = (nota) => {
//   const obj = nota;
//   obj.status = 'pendiente';
//   return obj;
// };

// const nuevasNotas = notas.map(cb);

// const nuevasNotas = notas.map((nota) => {
//   const obj = nota;
//   obj.status = 'pendiente';
//   return obj;
// });

// console.log(nuevasNotas);
