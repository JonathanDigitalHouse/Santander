const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const users = ['Charly', 'Caro', 'Cami', 'Santi'];

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const { nombre } = req.query;
  nombre && users.push(nombre);

  res.render('index', {
    users,
  });
});

app.post('/', (req, res) => {
  res.status(200).json({
    usuario: req.body,
  });
});

app.listen(PORT, () => {
  console.log(`Servidor UP, Escuchando en el puerto ${PORT}`);
});
