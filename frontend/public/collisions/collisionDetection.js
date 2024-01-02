// collisions/collisionDetection.js

export const checkCollisions = (player, obstacle) => {
    // Verifique se as caixas de colisão do jogador e do obstáculo se sobrepõem
    if (
      player.playerSprite.x - player.playerSprite.width / 2 < obstacle.obstacleSprite.x + obstacle.obstacleSprite.width / 2 &&
      player.playerSprite.x + player.playerSprite.width / 2 > obstacle.obstacleSprite.x - obstacle.obstacleSprite.width / 2 &&
      player.playerSprite.y - player.playerSprite.height / 2 < obstacle.obstacleSprite.y + obstacle.obstacleSprite.height / 2 &&
      player.playerSprite.y + player.playerSprite.height / 2 > obstacle.obstacleSprite.y - obstacle.obstacleSprite.height / 2
    ) {
      //console.log('Collision detected!');
      // Adicione aqui a lógica que deseja executar quando ocorre uma colisão
    }
};

export const checkCollisionsWithEnemy = (player, enemy) => {
  // Verifique se as caixas de colisão do jogador e do inimigo se sobrepõem
  if (
    player.playerSprite.x - player.playerSprite.width / 2 < enemy.enemySprite.x + enemy.enemySprite.width / 2 &&
    player.playerSprite.x + player.playerSprite.width / 2 > enemy.enemySprite.x - enemy.enemySprite.width / 2 &&
    player.playerSprite.y - player.playerSprite.height / 2 < enemy.enemySprite.y + enemy.enemySprite.height / 2 &&
    player.playerSprite.y + player.playerSprite.height / 2 > enemy.enemySprite.y - enemy.enemySprite.height / 2
  ) {
    console.log('Collision with enemy detected!');
    // Adicione aqui a lógica que deseja executar quando ocorre uma colisão com o inimigo
  }
};

export const checkProjectileEnemyCollision = (projectile, enemy) => {
  // Verifique se as caixas de colisão do projétil e do inimigo se sobrepõem
  if (
    projectile.projectileSprite.x - projectile.projectileSprite.width / 2 < enemy.enemySprite.x + enemy.enemySprite.width / 2 &&
    projectile.projectileSprite.x + projectile.projectileSprite.width / 2 > enemy.enemySprite.x - enemy.enemySprite.width / 2 &&
    projectile.projectileSprite.y - projectile.projectileSprite.height / 2 < enemy.enemySprite.y + enemy.enemySprite.height / 2 &&
    projectile.projectileSprite.y + projectile.projectileSprite.height / 2 > enemy.enemySprite.y - enemy.enemySprite.height / 2
  ) {
    return { collided: true, projectile };
  }

  return { collided: false, projectile };
};

  