// multiplayer-pixijs/frontend/public/assets/enemy/create/createEnemy.js

import createEnemyTexture from './enemyTexture.js';
import createEnemySprite from './enemySprite.js';
import createEnemyCollisionBox from './enemyCollisionBox.js';

const createEnemy = (app, x, y, initialHealth) => {
  const enemyTexture = createEnemyTexture(app);
  const enemySprite = createEnemySprite(app, enemyTexture, x, y);
  const enemyCollisionBox = createEnemyCollisionBox(app, enemySprite);
  const health = initialHealth;

  return {
    enemySprite,
    enemyCollisionBox,  // Adicione uma referência à caixa de colisão
    health,
    updateCollisionBox: enemyCollisionBox.updateCollisionBox,
  };
};

export default createEnemy;

