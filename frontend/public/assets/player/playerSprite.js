// playerSprite.js

const createPlayerSprite = (app, playerTexture) => {
    const playerSprite = new PIXI.Sprite(playerTexture);
    playerSprite.anchor.set(0.5);
    playerSprite.x = app.renderer.width / 2;
    playerSprite.y = app.renderer.height / 2;
  
    playerSprite.zIndex = 3;
    app.stage.addChild(playerSprite);
    
  
    return playerSprite;
  };
  
  export default createPlayerSprite;
  