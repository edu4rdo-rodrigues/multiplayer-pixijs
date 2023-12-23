// createSpritePlayer.js

import createPlayerTexture from '../textures/playerTexture.js';
import createPlayerSprite from '../sprites/playerSprite.js';
import createPlayerCollisionBox from '../collisions/playerCollisonBox.js';

const createSpritePlayer = (app) => {
  const playerTexture = createPlayerTexture();
  const playerSprite = createPlayerSprite(app, playerTexture);
  const playerCollisionBox = createPlayerCollisionBox(app, playerSprite);

  return {
    playerSprite,
    updateCollisionBox: playerCollisionBox.updateCollisionBox,
  };
};

export default createSpritePlayer;
