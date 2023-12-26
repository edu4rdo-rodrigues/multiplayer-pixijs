// server.js
const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Define o caminho para o diretório 'public' no frontend
const publicPath = path.join(__dirname, '../frontend/public');

app.use(express.static(publicPath));

// Define a rota para o arquivo 'index.html'
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Define uma rota para servir arquivos JavaScript
app.get('/main.js', (req, res) => {
    res.sendFile(path.join(publicPath, 'main.js'));
});

app.get('/sprites/playerSprite.js', (req, res) => {
  res.sendFile(path.join(publicPath, 'playerSprite.js'));
});

app.get('/create/createPlayer.js', (req, res) => {
  res.sendFile(path.join(publicPath, 'createPlayer.js'));
});

app.get('/textures/playerTexture.js', (req, res) => {
  res.sendFile(path.join(publicPath, 'playerTexture.js'));
});

app.get('/collisions/playerCollisonBox.js', (req, res) => {
  res.sendFile(path.join(publicPath, 'playerCollisonBox.js'));
});

app.get('/inputs/inputPlayerMovement.js', (req, res) => {
  res.sendFile(path.join(publicPath, 'inputPlayerMovement.js'));
});

app.get('/inputs/mouseInput.js', (req, res) => {
  res.sendFile(path.join(publicPath, 'mouseInput.js'));
});

app.get('/textures/projectileTexture.js', (req, res) => {
  res.sendFile(path.join(publicPath, 'projectileTexture.js'));
});

app.get('/sprites/projectileSprite.js', (req, res) => {
  res.sendFile(path.join(publicPath, 'playerprojectileSpriteSprite.js'));
});


app.get('/create/createProjectile.js', (req, res) => {
  res.sendFile(path.join(publicPath, 'createProjectile.js'));
});



io.on('connection', (socket) => {
  console.log('Player connected');

  socket.on('disconnect', () => {
    console.log('Player disconnected');
  });
});

server.listen(3300, () => {
  console.log('Server is running on http://localhost:3300');
});
