var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 400, y: groundY - 20, hitSize: 25, damage: 10, image: "img/pizza.png", rotate: 10, xScale: 0.3, yScale: 0.3 },
          { type: "obstacle", x: 800, y: groundY - 20, hitSize: 25, damage: 20, image: "img/pizza.png", rotate: 10, xScale: 0.3, yScale: 0.3 },
          { type: "obstacle", x: 1000, y: groundY - 20, hitSize: 25, damage: 30, image: "img/pizza.png", rotate: 10, xScale: 0.3, yScale: 0.3 },

          { type: "spikes", x: 3000, y: groundY, hitSize: 25, damage: 30, image: "img/spikes.png", rotate: 0 },

          { type: "enemy", x: 400, y: groundY - 50, velocity: -3, rotate: 10, health: -30, score: 100, image: "img/pizza.png" },
          { type: "enemy", x: 800, y: groundY - 50, velocity: -3, rotate: 10, health: -10, score: 100 },
          { type: "enemy", x: 2000, y: groundY - 50, velocity: -3, rotate: 10, health: -10, score: 100 },

          { type: "reward", x: 500, y: groundY - 100, velocity: -3, rotate: 10, health: 10, score: 50 },

          { type: "level", x: 1500, y: groundY - 50, velocity: -3, image: "img/flag.png" },
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY - 50, hitSize: 25, damage: 10, image: "img/sawblade.png" },
          { type: "sawblade", x: 800, y: groundY - 50, hitSize: 25, damage: 20, image: "img/sawblade.png" },
          { type: "sawblade", x: 1000, y: groundY - 50, hitSize: 25, damage: 30, image: "img/sawblade.png" },
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
