// playerCollisonBox.js

const createPlayerCollisionBox = (app, playerSprite) => {
    const collisionBoxSize = 60;
    const playerCollisionBox = new PIXI.Graphics();
    const borderWidth = 2;
    const borderColor = 0xFF0000;
  
    app.stage.addChild(playerCollisionBox);
  
    const updateCollisionBox = () => {
      const collisionBoxX = playerSprite.x - collisionBoxSize / 2;
      const collisionBoxY = playerSprite.y - collisionBoxSize / 2;
  
      playerCollisionBox.clear();
      playerCollisionBox.lineStyle(borderWidth, borderColor);
      playerCollisionBox.drawRect(
        collisionBoxX - borderWidth / 2,
        collisionBoxY - borderWidth / 2,
        collisionBoxSize + borderWidth,
        collisionBoxSize + borderWidth
      );
    };

    playerCollisionBox.zIndex = 4;

  
    return {
      updateCollisionBox,
    };
  };
  
  export default createPlayerCollisionBox;
  