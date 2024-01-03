// multiplayer-pixijs/frontend/public/assets/player/createSpritePlayer.js

import createPlayerTexture from './playerTexture.js';
import createPlayerSprite from './playerSprite.js';
import createPlayerCollisionBox from './playerCollisonBox.js';

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
