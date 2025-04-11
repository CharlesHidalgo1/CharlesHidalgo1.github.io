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
          { type: "obstacle", x: 550, y: groundY - 20, hitSize: 20, damage: 10, image: "img/pizza.png", rotate: 10, xScale: 0.3, yScale: 0.3, xImage: -38, yImage: -20 },
          { type: "obstacle", x: 800, y: groundY - 120, hitSize: 25, damage: 20, image: "img/pizza.png", rotate: 10, xScale: 0.3, yScale: 0.3, xImage: -38, yImage: -20 },
          { type: "obstacle", x: 1200, y: groundY - 20, hitSize: 15, damage: 30, image: "img/pizza.png", rotate: 10, xScale: 0.3, yScale: 0.3, xImage: -38, yImage: -20 },
          { type: "obstacle", x: 1500, y: groundY - 20, hitSize: 15, damage: 50, image: "img/pizza.png", rotate: 10, xScale: 0.3, yScale: 0.3, xImage: -38, yImage: -20 },
          { type: "obstacle", x: 2000, y: groundY - 20, hitSize: 20, damage: 10, image: "img/pizza.png", rotate: 10, xScale: 0.3, yScale: 0.3, xImage: -38, yImage: -20 },
          { type: "obstacle", x: 2100, y: groundY - 120, hitSize: 25, damage: 20, image: "img/pizza.png", rotate: 10, xScale: 0.3, yScale: 0.3, xImage: -38, yImage: -20 },
          { type: "obstacle", x: 2200, y: groundY - 20, hitSize: 15, damage: 30, image: "img/pizza.png", rotate: 10, xScale: 0.3, yScale: 0.3, xImage: -38, yImage: -20 },

          { type: "enemy", x: 450, y: groundY - 50, velocity: -3, rotate: 0, health: -30, score: 143, image: "img/chef.png" },
          { type: "enemy", x: 1500, y: groundY - 50, velocity: -3, rotate: 0, health: -10, score: 143, image: "img/chef.png" },
          { type: "enemy", x: 3300, y: groundY - 50, velocity: -7, rotate: 0, health: -10, score: 143, image: "img/chef.png" },
          { type: "enemy", x: 20000, y: groundY - 50, velocity: -25, rotate: 0, health: -100, score: 143, image: "img/chef.png" },

          { type: "reward", x: 2000, y: groundY - 150, velocity: -7, rotate: 0, health: 10, score: 1800, image: "img/mammamia.png", xScale: 0.3, yScale: 0.3 },
          { type: "reward", x: 4000, y: groundY - 150, velocity: -10, rotate: 0, health: 10, score: 1800, image: "img/rollingpin.png", xScale: 0.3, yScale: 0.3 },

          { type: "level", x: 5500, y: groundY - 50, velocity: -3, image: "img/flag.png" },
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 550, y: groundY - 20, hitSize: 20, damage: 100, image: "img/spaghetti.png", rotate: 10, xScale: 0.2, yScale: 0.2, xImage: -20, yImage: -20 },
          { type: "obstacle", x: 700, y: groundY - 120, hitSize: 25, damage: 100, image: "img/spaghetti.png", rotate: 10, xScale: 0.2, yScale: 0.2, xImage: -20, yImage: -20 },
          { type: "obstacle", x: 1235, y: groundY - 20, hitSize: 15, damage: 100, image: "img/spaghetti.png", rotate: 10, xScale: 0.2, yScale: 0.2, xImage: -20, yImage: -20 },
          { type: "obstacle", x: 1435, y: groundY - 20, hitSize: 15, damage: 100, image: "img/spaghetti.png", rotate: 10, xScale: 0.2, yScale: 0.2, xImage: -20, yImage: -20 },
          { type: "obstacle", x: 1635, y: groundY - 20, hitSize: 15, damage: 100, image: "img/spaghetti.png", rotate: 10, xScale: 0.2, yScale: 0.2, xImage: -20, yImage: -20 },
          { type: "obstacle", x: 1835, y: groundY - 20, hitSize: 15, damage: 100, image: "img/spaghetti.png", rotate: 10, xScale: 0.2, yScale: 0.2, xImage: -20, yImage: -20 },

          { type: "enemy", x: 6700, y: groundY - 50, velocity: -20, rotate: 0, health: -30, score: 143, image: "img/chef.png" },
          { type: "enemy", x: 18300, y: groundY - 50, velocity: -20, rotate: 0, health: -30, score: 143, image: "img/chef.png" },
          { type: "enemy", x: 21300, y: groundY - 50, velocity: -20, rotate: 0, health: -30, score: 143, image: "img/chef.png" },

          { type: "reward", x: 20300, y: groundY - 150, velocity: -20, rotate: 0, health: 10, score: 1800, image: "img/mammamia.png", xScale: 0.3, yScale: 0.3 },
          { type: "reward", x: 22500, y: groundY - 150, velocity: -20, rotate: 0, health: 10, score: 1800, image: "img/rollingpin.png", xScale: 0.3, yScale: 0.3 },
          { type: "reward", x: 23500, y: groundY - 150, velocity: -20, rotate: 0, health: 10, score: 1800, image: "img/mammamia.png", xScale: 0.3, yScale: 0.3 },

          { type: "level", x: 5000, y: groundY - 50, velocity: -3, image: "img/flag.png" },
        ],
      },
      {
        name: "Robot Rampage",
        number: 3,
        speed: -3,
        gameItems: [
          
          { type: "obstacle", x: 550, y: groundY - 20, hitSize: 0, damage: 0, image: "img/youwin.png", rotate: 0, xScale: 2.0, yScale: 2.0, xImage: -44, yImage: 40 },
          
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
