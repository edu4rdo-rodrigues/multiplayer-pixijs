// multiplayer-pixijs/frontend/public/assets/obstacle/createObstacleSprite.js

const createObstacleSprite = (app, obstacleTexture, x, y) => {
    const obstacleSprite = new PIXI.Sprite(obstacleTexture);
    obstacleSprite.anchor.set(0.5);
    obstacleSprite.x = x;
    obstacleSprite.y = y;
  
    obstacleSprite.zIndex = 2;
    app.stage.addChild(obstacleSprite);
    
  
    return obstacleSprite;
  };
  
  export default createObstacleSprite;
  