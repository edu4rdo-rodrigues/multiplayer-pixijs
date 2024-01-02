// healthBar.js

const createHealthBar = (app, enemy) => {
  const barWidth = 50;
  const barHeight = 10;
  const backgroundColor = 0x555555;
  const foregroundColor = 0xFF0000;

  const barBackground = new PIXI.Graphics();
  const barForeground = new PIXI.Graphics();

  app.stage.addChild(barBackground);
  app.stage.addChild(barForeground);

  // Função para criar o fundo da barra de vida
  const createBackground = () => {
    barBackground.beginFill(backgroundColor);
    barBackground.drawRect(0, 0, barWidth, barHeight);
    barBackground.endFill();
    barBackground.visible = false; // Inicialmente, oculte a barra de vida
  };

  // Inicialmente cria o fundo
  createBackground();

  // Atualiza a barra de vida com base na saúde do inimigo
  const updateHealthBar = () => {
    const percentage = (enemy.health / 100) * barWidth;
  
    // Ajuste para centralizar a barra de vida acima do inimigo
    const offsetX = enemy.enemySprite.width / 2 - barWidth / 2;
  
    barForeground.clear();
    barForeground.beginFill(foregroundColor);
    barForeground.drawRect(0, 0, percentage, barHeight);
    barForeground.endFill();
  
    // Ajuste para centralizar horizontalmente em relação ao inimigo
    const horizontalOffset = -barWidth / 2;
  
    barForeground.position.set(
      enemy.enemySprite.x + offsetX + horizontalOffset,
      enemy.enemySprite.y - 40 - barHeight
    );
  
    // Verifique se a saúde do inimigo atingiu 0
    if (enemy.health <= 0) {
      // Remova o sprite do inimigo do palco
      app.stage.removeChild(enemy.enemySprite);
      // Remova a caixa de colisão do inimigo do palco
      app.stage.removeChild(enemy.enemyCollisionBox);  // Adicione esta linha
      // Oculte a barra de vida
      barForeground.visible = false;
      barBackground.visible = false;
    }
  };

  return {
    updateHealthBar,
    show: () => {
      barBackground.visible = true;
      barForeground.visible = true;
    }, // Função para mostrar a barra de vida
    hide: () => {
      barBackground.visible = false;
      barForeground.visible = false;
    }, // Função para ocultar a barra de vida
  };
};

export default createHealthBar;
