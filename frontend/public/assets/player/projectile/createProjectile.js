// create/createProjectile.js

import createProjectileTexture from './projectileTexture.js';
import createProjectileSprite from './projectileSprite.js';

const createProjectile = (app, playerX, playerY) => {
  const projectileTexture = createProjectileTexture(app);
  const projectileSprite = createProjectileSprite(projectileTexture, playerX, playerY);

  app.stage.addChild(projectileSprite);

  // Função para movimentar o projétil em direção ao mouse
  const moveProjectileTowardsMouse = (targetX, targetY, speed) => {
    const angle = Math.atan2(targetY - projectileSprite.y, targetX - projectileSprite.x);
    const velocityX = speed * Math.cos(angle);
    const velocityY = speed * Math.sin(angle);

    app.ticker.add(() => {
      projectileSprite.x += velocityX;
      projectileSprite.y += velocityY;
    });
  };

  return {
    projectileSprite,
    moveProjectileTowardsMouse,
  };
};

export default createProjectile;
