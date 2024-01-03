// multiplayer-pixijs/frontend/public/assets/player/playerHealthBar.js

const createPlayerHealthBar = (app) => {
  const barWidth = 50;
  const barHeight = 10;
  const backgroundColor = 0xFF0000;
  const foregroundColor = 0xFF0000;

  const barBackground = new PIXI.Graphics();
  const barForeground = new PIXI.Graphics();

  app.stage.addChild(barBackground);
  app.stage.addChild(barForeground);

  const createBackground = () => {
    barBackground.beginFill(backgroundColor);
    barBackground.drawRect(0, 0, barWidth, barHeight);
    barBackground.endFill();
    barBackground.visible = true;
    barBackground.zIndex = 5;
  };

  createBackground();

  const updateHealthBar = (x, y, healthPercentage) => {
    const percentage = Math.max(0, Math.min(healthPercentage, 100)) / 100 * barWidth;

    barForeground.clear();
    barForeground.beginFill(foregroundColor);
    barForeground.drawRect(0, 0, percentage, barHeight);
    barForeground.endFill();

    barForeground.position.set(x - barWidth / 2, y - barHeight - 40);

    barBackground.position.set(x - barWidth / 2, y - barHeight - 40);

    if (healthPercentage <= 0) {
      barForeground.visible = false;
      barBackground.visible = false;
    } else {
      barForeground.visible = true;
      barBackground.visible = true;
    }
  };

  return {
    updateHealthBar,
  };
};

export default createPlayerHealthBar;
