// multiplayer-pixijs/frontend/public/assets/player/createPlayerHealthBar.js

import createPlayerHealthBarTexture from './playerHealthBarTexture.js';
import createPlayerHealthBarSprite from './playerHealthBarSprite.js';

const createPlayerHealthBar = (app, player) => {
  const barWidth = 50;
  const barHeight = 10;

  const barTexture = createPlayerHealthBarTexture(app, barWidth, barHeight);
  const barSprite = createPlayerHealthBarSprite(barTexture, player.playerSprite);

  app.stage.addChild(barSprite);

  const updateHealthBar = () => {
    const percentage = (player.health / 100) * barWidth;
    barSprite.width = percentage;
    
    // Posiciona a barra de vida acima do jogador
    barSprite.x = player.playerSprite.x;
    barSprite.y = player.playerSprite.y - player.playerSprite.height / 2 - 10;
  };

  return {
    updateHealthBar,
    show: () => {
      barSprite.visible = true;
    },
    hide: () => {
      barSprite.visible = false;
    },
  };
};

export default createPlayerHealthBar;