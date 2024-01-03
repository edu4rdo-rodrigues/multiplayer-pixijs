// multiplayer-pixijs/frontend/public/assets/player/playerTexture.js

import { images } from "../images/imagensPath.js";

const createPlayerTexture = () => {
    return PIXI.Texture.from(images.player);
  };
  
  export default createPlayerTexture;