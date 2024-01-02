// sprites/enemySprite.js

const createEnemySprite = (app, enemyTexture, x, y) => {
  const enemySprite = new PIXI.Sprite(enemyTexture);
  enemySprite.anchor.set(0.5);
  enemySprite.x = x;
  enemySprite.y = y;
  
  enemySprite.zIndex = 2;
  app.stage.addChild(enemySprite);
  

  return enemySprite;
};

export default createEnemySprite;
