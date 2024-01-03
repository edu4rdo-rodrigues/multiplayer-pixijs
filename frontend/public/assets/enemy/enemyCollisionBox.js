// multiplayer-pixijs/frontend/public/assets/enemy/enemyCollisonBox.js

const createEnemyCollisionBox = (app, enemySprite) => {
  const collisionBoxSize = 60;
  const enemyCollisionBox = new PIXI.Graphics();
  const borderWidth = 2;
  const borderColor = 0xFF0000;

  app.stage.addChild(enemyCollisionBox);  // Adicione a caixa de colisão ao palco
  console.log('Enemy collision box added to stage:', enemyCollisionBox);

  const removeCollisionBox = () => {
    // Remova a caixa de colisão do palco
    app.stage.removeChild(enemyCollisionBox);
  };

  const updateCollisionBox = () => {
    const collisionBoxX = enemySprite.x - collisionBoxSize / 2;
    const collisionBoxY = enemySprite.y - collisionBoxSize / 2;

    enemyCollisionBox.clear();
    enemyCollisionBox.lineStyle(borderWidth, borderColor);
    enemyCollisionBox.drawRect(
      collisionBoxX - borderWidth / 2,
      collisionBoxY - borderWidth / 2,
      collisionBoxSize + borderWidth,
      collisionBoxSize + borderWidth
    );
  };

  enemyCollisionBox.zIndex = 2;

  return {
    updateCollisionBox,
    removeCollisionBox, // Adicione a função para remover a caixa de colisão
  };
};

export default createEnemyCollisionBox;
