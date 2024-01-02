// createObstacleCollisionBox.js

const createObstacleCollisionBox = (app, obstacleSprite) => {
    const collisionBoxSize = 60;
    const obstacleCollisionBox = new PIXI.Graphics();
    const borderWidth = 2;
    const borderColor = 0x00FF00; // Green color
  
    app.stage.addChild(obstacleCollisionBox);
  
    const updateCollisionBox = () => {
      const collisionBoxX = obstacleSprite.x - collisionBoxSize / 2;
      const collisionBoxY = obstacleSprite.y - collisionBoxSize / 2;
  
      obstacleCollisionBox.clear();
      obstacleCollisionBox.lineStyle(borderWidth, borderColor);
      obstacleCollisionBox.drawRect(
        collisionBoxX - borderWidth / 2,
        collisionBoxY - borderWidth / 2,
        collisionBoxSize + borderWidth,
        collisionBoxSize + borderWidth
      );
    };

    obstacleCollisionBox.zIndex = 2;
  
    return {
      updateCollisionBox,
    };
  };
  
  export default createObstacleCollisionBox;
  