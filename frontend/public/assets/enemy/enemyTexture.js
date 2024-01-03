// multiplayer-pixijs/frontend/public/assets/enemy/textures/enemyTexture.js

import { images } from "../images/imagensPath.js";

const createEnemyTexture = (app) => {
  return PIXI.Texture.from(images.player);
};

export default createEnemyTexture;
