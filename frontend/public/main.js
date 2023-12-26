// main.js
import createPlayer from './create/createPlayer.js';
import createObstacle from './create/createObstacle.js';
import createProjectile from './create/createProjectile.js';
import inputPlayerMovement from './inputs/inputPlayerMovement.js';
import checkCollisions from './collisions/collisionDetection.js';

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

// Função para atualizar a posição da caixa de colisão (pode ser chamada em um loop de jogo, por exemplo)
function update() {
  player.updateCollisionBox();
}

// Configure a entrada do teclado
inputPlayerMovement(player);
// Adicione a função de atualização ao loop de animação da aplicação

// Crie um obstáculo
const obstacle = createObstacle(app, 400, 300);

// Adicione a função de verificação de colisões ao loop de animação da aplicação
app.ticker.add(() => {
  player.updateCollisionBox();
  obstacle.updateCollisionBox();
  checkCollisions(player, obstacle);
});


// Adicione a lógica de clique do mouse para disparar um projétil
window.addEventListener('click', (event) => {
  // Crie um projétil na posição atual do jogador
  const projectile = createProjectile(app, player.playerSprite.x, player.playerSprite.y);

  // Verifique se o projétil foi criado com sucesso
  if (projectile) {
    // Mova o projétil em direção ao ponto onde o clique ocorreu
    projectile.moveProjectileTowardsMouse(event.clientX, event.clientY, 5);
  }
});