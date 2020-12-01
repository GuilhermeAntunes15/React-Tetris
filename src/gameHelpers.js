export const STAGE_WIDTH = 12; // lugar onde fica as pecas no jogo (o painel)
export const STAGE_HEIGHT = 20;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, 'clear']),
  );

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      // 1. Verifique se estamos em uma célula Tetromino real
      if (player.tetromino[y][x] !== 0) {
        if (
          // 2. Verifique se nosso movimento está dentro da altura das áreas de jogo (y) 
          // Não devemos passar pela parte inferior da área de jogo
          !stage[y + player.pos.y + moveY] ||
          // 3. Verifique se o nosso movimento está dentro da área de jogo width (x)
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // 4. Verifique se a célula para onde está se movendo não está definida para limpar
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            'clear'
        ) {
          return true;
        }
      }
    }
  }
};