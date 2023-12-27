// routes/routesConfig.js

const starting = require("./routesStarting/starting.js");
const sprites = require("./routesSprite/sprites.js");
const textures = require("./routesTexture/textures.js");
const collisions = require("./routesCollision/collisions.js");
const creates = require("./routesCreate/creates.js");
const inputs = require("./routesInput/inputs.js");

module.exports = [
  starting, 
  sprites, 
  textures, 
  collisions, 
  creates, 
  inputs];
