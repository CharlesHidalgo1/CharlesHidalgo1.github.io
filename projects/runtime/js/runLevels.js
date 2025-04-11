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
    game.setDebugMode(false);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createObstacles (x, y, hitSize, damage, image, rotate, xScale, yScale, xImage, yImage){
      var hitZoneSize = hitSize; // defines the size of the hitzone and assigns it to a variable
      var damageFromObstacle = damage; // defines the amount of damage obstacle causes and assigns to a variable
      var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); // creates the obstacle hitzone.
      obstacleHitZone.x = x; // sets the x coordinate of the obstacle
      obstacleHitZone.y = y; // sets the y coordinate of the obstacle
      game.addGameItem(obstacleHitZone); // adds the obstacle hitzone to the game
      var obstacleImage = draw.bitmap(image); // draw the image bitmap and store it in a variable
      obstacleHitZone.addChild(obstacleImage); // attaches the image to the obstacle hitzone
      obstacleImage.x = xImage; // position the image on the hitzone's x value by moving it left by a certain amount of pixels.
      obstacleImage.y = yImage; // position the image on the hitzone's y value by moving it up by a certain amount of pixels.
      obstacleHitZone.rotationalVelocity = rotate; // rotates the obstacles.
      obstacleImage.scaleX = xScale;
      obstacleImage.scaleY = yScale;
    }
    



    function createEnemy (x, y, velocity, rotate, health, score, image){
    var enemy = game.createGameItem("enemy", 25); // creates enemy game item and adds it to the game.
    var enemyImage = draw.bitmap(image); // draw the image bitmap and store it in a variable
    enemyImage.x = -38; // offsets the image from the hitzone by -25 pixels.
    enemyImage.y = -50; // offsets the image from the hitzone by -25 pixels.
    enemy.addChild(enemyImage); // add the image as a child to our enemy variable.
    enemy.x = x; // x pos of enemy
    enemy.y = y; // y pos of enemy
    game.addGameItem(enemy); // add enemy to the game
    enemy.velocityX += velocity; // controlling how fast the enemy moves on the x axis.
    enemy.rotationalVelocity = rotate; // sets the rotational velocity of the enemy.
    enemyImage.scaleX = 0.3;
    enemyImage.scaleY = 0.3;
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


    function createReward (x, y, velocity, rotate, health, score, image, xScale, yScale){
      var reward = game.createGameItem("reward", 25); // creates reward game item and adds it to the game.
      var rewardImage = draw.bitmap(image); // draw the image bitmap and store it in a variable
      rewardImage.x = -25; // offsets the image from the hitzone by -25 pixels.
      rewardImage.y = -25; // offsets the image from the hitzone by -25 pixels.
      reward.addChild(rewardImage); // add the image as a child to our reward variable.
      reward.x = x; // x pos of reward
      reward.y = y; // y pos of reward
      game.addGameItem(reward); // add reward to the game
      reward.velocityX += velocity; // controlling how fast the reward moves on the x axis.
      reward.rotationalVelocity = rotate; // sets the rotational velocity of the reward.
      rewardImage.scaleX = xScale;
      rewardImage.scaleY = yScale;
      reward.onPlayerCollision = function () {
        game.increaseScore(score);
        game.changeIntegrity(health); // subtracts 10 health from halleBot's HUD.
        reward.shrink();
      };
     }




     function createLevel (x, y, velocity, image){
      var level = game.createGameItem("level", 25); // creates level game item and adds it to the game.
      var goalImage = draw.bitmap(image); // draw the image bitmap and store it in a variable
      goalImage.x = -25; // offsets the image from the hitzone by -25 pixels.
      goalImage.y = -80; // offsets the image from the hitzone by -25 pixels.
      level.addChild(goalImage); // add the yellow square as a child to our level variable.
      level.x = x; // x pos of level
      level.y = y; // y pos of level
      game.addGameItem(level); // add level to the game
      level.velocityX += velocity; // controlling how fast the level moves on the x axis.
      level.onPlayerCollision = function () {
        level.shrink();
        startLevel();
      };
     }



    function startLevel() {
      // TODO 13 goes below here

      var level = levelData[currentLevel]; // fetches the currentLevel from the levelData array and stores it in var level.
      var levelObjects = level.gameItems; // retrive the array of gameItems and stores it in levelObjects.

      for (var i = 0; i < levelObjects.length; i++){
        var element = levelObjects[i];

        if (element.type === "obstacle"){ // checks the type key:value of the gameItems object to determine which object to manifest.
          createObstacles(element.x, element.y, element.hitSize, element.damage, element.image, element.rotate, element.xScale, element.yScale, element.xImage, element.yImage); //  if the condition is true it will call the relevant function.

        }

        if (element.type === "enemy"){ // checks the type key:value of the gameItems object to determine which object to manifest.
          createEnemy(element.x, element.y, element.velocity, element.rotate, element.health, element.score, element.image); // if the condition is true it will call the relevant function.

        }
        
        if (element.type === "reward"){ // checks the type key:value of the gameItems object to determine which object to manifest.
          createReward(element.x, element.y, element.velocity, element.rotate, element.health, element.score, element.image, element.xScale, element.yScale); //  if the condition is true it will call the relevant function.

        }

        if (element.type === "level"){ // checks the type key:value of the gameItems object to determine which object to manifest.
          createLevel(element.x, element.y, element.velocity, element.image); //  if the condition is true it will call the relevant function.

        }

      }



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
