// main.js
import createPlayer from './assets/player/createPlayer.js';
import createObstacle from './assets/obstacle/createObstacle.js';
import createProjectile from './assets/player/projectile/createProjectile.js';
import inputPlayerMovement from './assets/player/inpust/inputPlayerMovement.js';
import * as collisionDetection from './collisions/collisionDetection.js';
import setupMouseInput from './assets/player/inpust/mouseInput.js';
import createEnemy from './assets/enemy/createEnemy.js'; // Importe o módulo createEnemy
import createHealthBar from './assets/enemy/healthBar.js';
import { checkProjectileEnemyCollision } from './collisions/collisionDetection.js';
import { checkProjectileEnemyCollisionAndDamage } from './collisions/collateralCollision/enemyDamage.js';


// Crie uma instância da aplicação PIXI
const app = new PIXI.Application({
  width: 800,
  height: 600,
  backgroundColor: 0xAAAAAA,
  autoStart: true,
  autoDensity: true,
  resolution: devicePixelRatio,
  antialias: true,
  sharedTicker: true,
  powerPreference: 'high-performance',
  autoDensity: true,
});

// Adicione o view da aplicação ao corpo do documento HTML
document.body.appendChild(app.view);

// Chame a função createPlayer, passando a instância da aplicação como argumento
const player = createPlayer(app);

// Crie um obstáculo
const obstacle = createObstacle(app, 400, 300);

// Crie um inimigo com a vida inicial
const initialEnemyHealth = 100;
const enemy = createEnemy(app, 200, 200, initialEnemyHealth);

// Crie uma barra de vida para o inimigo
const healthBar = createHealthBar(app, enemy);



// Declare a variável projectile fora do escopo do callback do evento de clique
let projectile;



// Chame a função setupMouseInput, passando a instância da aplicação, o jogador e uma função de callback para criar o projétil
setupMouseInput(app, player, (app, x, y) => {
  // Crie um projétil na posição atual do jogador
  projectile = createProjectile(app, x, y);

  // Verifique se o projétil foi criado com sucesso
  if (projectile) {
    // Mova o projétil em direção ao ponto onde o clique ocorreu
    projectile.moveProjectileTowardsMouse(event.clientX, event.clientY, 5);
  }
});


app.stage.sortChildren();

// Adicione a função de verificação de colisões ao loop de animação da aplicação
app.ticker.add(() => {
  player.updateCollisionBox();
  obstacle.updateCollisionBox();
  enemy.updateCollisionBox();
  collisionDetection.checkCollisions(player, obstacle);
  collisionDetection.checkCollisionsWithEnemy(player, enemy);

  // Verifique a colisão entre o projétil e o inimigo
  const collisionOccurred = checkProjectileEnemyCollisionAndDamage(app, enemy, healthBar, projectile);

  // Limpe a referência ao projétil apenas se houve uma colisão
  if (collisionOccurred) {
    projectile = null;
  }

    // Verifique a colisão entre o projétil e o inimigo
    /*if (projectile && enemy) {
      const collisionResult = checkProjectileEnemyCollision(projectile, enemy);
  
      if (collisionResult.collided) {
        // Remova o sprite do projétil da cena
        app.stage.removeChild(collisionResult.projectile.projectileSprite);
  
        // Limpe a referência ao projétil para que ele não seja verificado novamente
        projectile = null;
  
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
      }
    }*/
});


// Configure a entrada do teclado
inputPlayerMovement(player);

// Função de atualização do jogo (chamada no loop de jogo)
const updateGame = () => {
  // Atualize aqui o estado do jogo, mova o inimigo, verifique colisões, etc.

  // Atualize a barra de vida com base na saúde do inimigo
  healthBar.updateHealthBar();

  // Chame o próximo quadro de animação
  requestAnimationFrame(updateGame);
};

// Inicie o loop de jogo chamando a função de atualização do jogo pela primeira vez
updateGame();



// Passe a instância 'app' e a função 'createProjectile' para 'mouseInput'
//setupMouseInput(app, player, createProjectile);