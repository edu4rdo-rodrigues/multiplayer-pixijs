// createObstacle.js

import createObstacleTexture from '../textures/createObstacleTexture.js';
import createObstacleSprite from '../sprites/createObstacleSprite.js';
import createObstacleCollisionBox from '../collisions/createObstacleCollisionBox.js';

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
