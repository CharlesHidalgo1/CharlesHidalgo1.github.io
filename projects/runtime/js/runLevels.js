var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createObstacles (x, y, hitSize, damage){
      var hitZoneSize = hitSize; // defines the size of the hitzone and assigns it to a variable
      var damageFromObstacle = damage; // defines the amount of damage obstacle causes and assigns to a variable
      var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); // creates the obstacle hitzone.
      obstacleHitZone.x = x; // sets the x coordinate of the obstacle
      obstacleHitZone.y = y; // sets the y coordinate of the obstacle
      game.addGameItem(obstacleHitZone); // adds the obstacle hitzone to the game
      var obstacleImage = draw.bitmap("img/sawblade.png"); // draw tghe image bitmpa and store it in a variable
      obstacleHitZone.addChild(obstacleImage); // attaches the image to the sawblade hitzone
      obstacleImage.x = -25; // position the image on the hitzone's x value by moving it left 25 pixels.
      obstacleImage.y = -25; // position the image on the hitzone's y value by moving it up 25 pixels.
      obstacleHitZone.rotationalVelocity = 10; // rotates the obstacles.
    }
    

    createObstacles(400, groundY - 50, 25, 10);
    createObstacles(800, groundY - 50, 100, 10);
    createObstacles(1000, groundY - 50, 25, 30);

    function createEnemy (x, y, velocity, rotate, health, score){
    var enemy = game.createGameItem("enemy", 25); // creates enemy game item and adds it to the game.
    var redSquare = draw.rect(50, 50, "red"); // creates a red square and stores it in the variable redSquare.
    redSquare.x = -25; // offsets the image from the hitzone by -25 pixels.
    redSquare.y = -25; // offsets the image from the hitzone by -25 pixels.
    enemy.addChild(redSquare); // add the red square as a child to our enemy variable.
    enemy.x = x; // x pos of enemy
    enemy.y = y; // y pos of enemy
    game.addGameItem(enemy); // add enemy to the game
    enemy.velocityX += velocity; // controlling how fast the enemy moves on the x axis.
    enemy.rotationalVelocity = rotate; // sets the rotational velocity of the enemy.
    enemy.onPlayerCollision = function () {
      game.changeIntegrity(health); // subtracts 10 health from halleBot's HUD.
    };
    enemy.onProjectileCollision = function (){
      game.increaseScore(score); // increases your score when Halle shoots the enemy.
      enemy.fadeOut(); // enemy fades out when halle shoots enemy.
      //enemy.shrink()
      //enemy.flyTo(0,0)
    }
    }

    createEnemy(400, groundY - 50, -3, 10, -10, 100);
    createEnemy(800, groundY - 50, -3, 10, -10, 100);
    createEnemy(2000, groundY - 50, -3, 10, -10, 100);

    function createReward (x, y, velocity, rotate, health, score){
      var reward = game.createGameItem("reward", 25); // creates reward game item and adds it to the game.
      var blueSquare = draw.rect(50, 50, "blue"); // creates a blue square and stores it in the variable blueSquare.
      blueSquare.x = -25; // offsets the image from the hitzone by -25 pixels.
      blueSquare.y = -25; // offsets the image from the hitzone by -25 pixels.
      reward.addChild(blueSquare); // add the blue square as a child to our reward variable.
      reward.x = x; // x pos of reward
      reward.y = y; // y pos of reward
      game.addGameItem(reward); // add reward to the game
      reward.velocityX += velocity; // controlling how fast the reward moves on the x axis.
      reward.rotationalVelocity = rotate; // sets the rotational velocity of the reward.
      reward.onPlayerCollision = function () {
        game.increaseScore(score);
        game.changeIntegrity(health); // subtracts 10 health from halleBot's HUD.
        reward.shrink();
      };
     }

     createReward(500, groundY - 100, -3, 10, 10, 50);

    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
