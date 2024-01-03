// multiplayer-pixijs/frontend/public/collisions/collateralCollision/enemyDamage.js

import { checkProjectileEnemyCollision } from "../collisionDetection.js";

export const checkProjectileEnemyCollisionAndDamage = (app, enemy, healthBar, projectile) => {
  // Verifique a colisão entre o projétil e o inimigo
  if (projectile && enemy) {
    const collisionResult = checkProjectileEnemyCollision(projectile, enemy);

    if (collisionResult.collided) {
      console.log('projetil colidiu com o inimigo');

      // Remova o sprite do projétil da cena
      app.stage.removeChild(collisionResult.projectile.projectileSprite);

      // Diminua a vida do inimigo (por exemplo, 10 unidades)
      enemy.health -= 20;

      // Atualize a barra de vida do inimigo
      healthBar.updateHealthBar();

      // Verifique se a saúde do inimigo atingiu 0
      if (enemy && enemy.health <= 0) {
        console.log('Removing enemy:', enemy);

        // Remova a caixa de colisão do inimigo do palco
        enemy.enemyCollisionBox.removeCollisionBox();

        // Remova o sprite do inimigo do palco
        app.stage.removeChild(enemy.enemySprite);

        // Oculte a barra de vida
        healthBar.hide();
      }

      return true; // Indica que houve uma colisão
    }
  }

  return false; // Indica que não houve colisão
};
