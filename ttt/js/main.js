const View = require('./ttt-view');
const Game = require('../../ttt_node_solution/game');

$( () => {
  // Your code here
  const rootEl = $('.ttt');
  console.log(rootEl);
  console.log(Game);
  const game = new Game();
  new View(game, rootEl);
});
