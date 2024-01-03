// multiplayer-pixijs/frontend/public/assets/player/projectile/projectileTexture.js

const createProjectileTexture = (app) => {
    const graphics = new PIXI.Graphics();
    const size = 10; // Tamanho do projétil
    const color = 0xFF0000; // Cor vermelha (substitua por sua cor desejada)
  
    graphics.beginFill(color);
    graphics.drawCircle(size / 2, size / 2, size / 2);
    graphics.endFill();
  
    const texture = app.renderer.generateTexture(graphics);
  
    return texture;
  };
  
  export default createProjectileTexture;
  