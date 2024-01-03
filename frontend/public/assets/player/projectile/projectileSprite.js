// multiplayer-pixijs/frontend/public/assets/player/projectile/projectileSprite.js

const createProjectileSprite = (texture, x, y) => {
    const sprite = new PIXI.Sprite(texture);
    sprite.anchor.set(0.5);
    sprite.x = x;
    sprite.y = y;
  
    return sprite;
  };
  
  export default createProjectileSprite;
  