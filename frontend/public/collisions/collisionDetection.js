// collisionDetection.js

const checkCollisions = (player, obstacle) => {
    // Verifique se as caixas de colisão do jogador e do obstáculo se sobrepõem
    if (
      player.playerSprite.x - player.playerSprite.width / 2 < obstacle.obstacleSprite.x + obstacle.obstacleSprite.width / 2 &&
      player.playerSprite.x + player.playerSprite.width / 2 > obstacle.obstacleSprite.x - obstacle.obstacleSprite.width / 2 &&
      player.playerSprite.y - player.playerSprite.height / 2 < obstacle.obstacleSprite.y + obstacle.obstacleSprite.height / 2 &&
      player.playerSprite.y + player.playerSprite.height / 2 > obstacle.obstacleSprite.y - obstacle.obstacleSprite.height / 2
    ) {
      console.log('Collision detected!');
      // Adicione aqui a lógica que deseja executar quando ocorre uma colisão
    }
  };
  
  export default checkCollisions;
  