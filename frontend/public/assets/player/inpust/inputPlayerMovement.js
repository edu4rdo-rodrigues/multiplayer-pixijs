// multiplayer-pixijs/frontend/public/assets/player/inputs/inputPlayerMovement.js

const inputPlayerMovement = (player) => {
    window.addEventListener('keydown', (e) => {
      const speed = 5;
  
      switch (e.code) {
        case 'ArrowLeft':
          player.playerSprite.x -= speed;
          break;
        case 'ArrowRight':
          player.playerSprite.x += speed;
          break;
        case 'ArrowUp':
          player.playerSprite.y -= speed;
          break;
        case 'ArrowDown':
          player.playerSprite.y += speed;
          break;
      }
  
      player.updateCollisionBox();
    });
  };
  
  export default inputPlayerMovement;