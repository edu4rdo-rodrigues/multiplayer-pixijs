// multiplayer-pixijs/frontend/public/assets/player/playerHealtBar/playerHealthBarTexture.js

const createPlayerHealthBarTexture = (app, width, height) => {
  const graphics = new PIXI.Graphics();
  const backgroundColor = 0x555555;
  
  graphics.beginFill(backgroundColor);
  graphics.drawRect(0, 0, width, height);
  graphics.endFill();

  const texture = app.renderer.generateTexture(graphics);

  return texture;
};

export default createPlayerHealthBarTexture;
