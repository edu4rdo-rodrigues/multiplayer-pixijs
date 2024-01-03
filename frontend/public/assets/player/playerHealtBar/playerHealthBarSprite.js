// multiplayer-pixijs/frontend/public/assets/player/playerHealtBar/playerHealthBarSprite.js

const createPlayerHealthBarSprite = (texture, playerSprite) => {
  const sprite = new PIXI.Sprite(texture);
  sprite.anchor.set(0.5, 1); // Ancoragem no centro inferior

  return sprite;
};

export default createPlayerHealthBarSprite;