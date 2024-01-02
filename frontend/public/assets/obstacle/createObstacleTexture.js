// createObstacleTexture.js

import { images } from "../images/imagensPath.js";

const createObstacleTexture = () => {
    return PIXI.Texture.from(images.player);
  };
  
  export default createObstacleTexture;
  