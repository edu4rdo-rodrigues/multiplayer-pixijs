// multiplayer-pixijs/frontend/public/assets/player/inputs/mouseInput.js

const setupMouseInput = (app, player, createProjectileCallback) => {
  // Antes do loop de animação
  let projectile;
  const speed = 10

    window.addEventListener('click', (event) => {
      if (event.button === 0) {
        // Chama a função createProjectileCallback quando o botão esquerdo do mouse é pressionado
        projectile = createProjectileCallback(app, player.playerSprite.x, player.playerSprite.y);
  
        // Verifique se o projétil foi criado com sucesso
        if (projectile) {
          // Mova o projétil em direção ao ponto onde o clique ocorreu
          projectile.moveProjectileTowardsMouse(event.clientX, event.clientY, speed);
        }
      }
    });
  };
  
  export default setupMouseInput;
  