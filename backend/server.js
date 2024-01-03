// multiplayer-pixijs/backend/server.js

const express = require("express");
const path = require("path");
const http = require("http");
const socketIO = require("socket.io");
const router = require("./routes/routes.js");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Define o caminho para o diretório 'public' no frontend
const publicPath = path.join(__dirname, "../frontend/public");

app.use(express.static(publicPath));

app.use("/", router);

io.on("connection", (socket) => {
  console.log("Player connected");

  socket.on("disconnect", () => {
    console.log("Player disconnected");
  });
});

server.listen(3333, () => {
  console.log("Server is running on http://localhost:3333");
});
