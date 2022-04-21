const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/franco', (req, res) => {
  res.sendFile(path.join(__dirname, './views/index.html'));
});

app.get('/caro', (req, res) => {
  res.send('Hola Caro! 😊');
});

app.get('/humberto', (req, res) => {
  res.send('Hola Humberto! 😊');
});

app.get('/dami', (req, res) => {
  res.send('Hola Dami! 😊');
});

app.listen(PORT, () => {
  console.log('Servidor Levantado');
});
