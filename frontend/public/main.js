// main.js
import createPlayer from './create/createPlayer.js';
import createObstacle from './create/createObstacle.js';
import inputPlayerMovement from './inputs/inputPlayerMovement.js';
// Crie uma instância da aplicação PIXI
const app = new PIXI.Application({
  width: 800,
  height: 600,
  backgroundColor: 0xAAAAAA,
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

// Função para verificar colisões (pode ser chamada em um loop de jogo, por exemplo)
function checkCollisions() {
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
}



// Adicione a função de verificação de colisões ao loop de animação da aplicação
app.ticker.add(() => {
    player.updateCollisionBox();
    obstacle.updateCollisionBox();
    checkCollisions();
  });