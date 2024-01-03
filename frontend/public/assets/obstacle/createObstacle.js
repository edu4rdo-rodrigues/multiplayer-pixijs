// multiplayer-pixijs/frontend/public/assets/obstacle/createObstacle.js

import createObstacleTexture from './createObstacleTexture.js';
import createObstacleSprite from './createObstacleSprite.js';
import createObstacleCollisionBox from './createObstacleCollisionBox.js';

const createObstacle = (app, x, y) => {
  const obstacleTexture = createObstacleTexture();
  const obstacleSprite = createObstacleSprite(app, obstacleTexture, x, y);
  const obstacleCollisionBox = createObstacleCollisionBox(app, obstacleSprite);

  return {
    obstacleSprite,
    updateCollisionBox: obstacleCollisionBox.updateCollisionBox,
  };
};

export default createObstacle;
