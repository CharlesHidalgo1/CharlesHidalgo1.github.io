var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
        var colosseum;
        var buildings = [];
      
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundspaghetti = draw.bitmap("img/backgroundspaghetti.png");
            background.addChild(backgroundspaghetti); // Adding the backgroundFill varibale to the background container
            backgroundspaghetti.x = 0;
            backgroundspaghetti.y = 0;
            backgroundspaghetti.scaleX = 30;
            backgroundspaghetti.scaleY = 15;
            
            // TODO 2: - Add a meatball and a feild of Italian flags.

            for (var i = 0; i < 100; i++){
                var italianflag = draw.bitmap("img/italianflag.png"); // creates a bitmap object using the italianflag image and stores it in the italianflag variable.
                italianflag.x = canvasWidth * Math.random(); // set random x pos within canvas width.
                italianflag.y = groundY * Math.random(); // set random y pos within groundY range.
                italianflag.scaleX = 0.05;
                italianflag.scaleY = 0.05;
                background.addChild(italianflag); // adds the star to the background container.
            }
            
            var meatball = draw.bitmap("img/meatball.png"); // creates a bitmap object using the meatball image and stores it in the meatball variable.
            meatball.x = canvas.width - 430; // sets the meatball's x position 
            meatball.y = canvas.height - 920; // sets the meatball's y position
            meatball.scaleX = 1.2; // scales the meatball's width
            meatball.scaleY = 1.2; // scales the meatball's height
            background.addChild(meatball); // add the meatball to the background container

            var mustache = draw.bitmap("img/mustache.png"); // creates a bitmap object using the mustache image and stores it in the mustache variable.
            mustache.x = canvas.width - 445; // sets the mustache's x position 
            mustache.y = canvas.height - 920; // sets the mustache's y position
            mustache.scaleX = 2,0; // scales the mustache's width
            mustache.scaleY = 2.0; // scales the mustache's height
            background.addChild(mustache); // add the mustache to the background container




            
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for (var i = 0; i < 5; i++) {
                var buildingHeight = 300 * Math.random(); // assign 300 to the buildingHeight variable
                var buildingColors = ["red", "white", "green", "red", "white"];
                var building = draw.rect(75, buildingHeight, buildingColors[i], "Transparent", 1); // draws rect with 75  width, buildingHeight is the height, the fill color depends on the buildingColors array, transparent is the outline, and 1 is the outline width.
                building.x = 200 * i; // multiply 200 by the current i value and store it as the x pos for the building.
                building.y = groundY - buildingHeight; // takes the groundY, subtracts the buildingHeight, and stores that as the y value.
                background.addChild(building); // add our building to the background container
                buildings.push(building); // add the building to the buildings array for further manipulation.
              }
            
            // TODO 3: Part 1 - Add a colosseum
            colosseum = draw.bitmap("img/colosseum.png"); // creates a bitmap for the colosseum image and stores it in the variable colosseum.
            colosseum.x = canvasWidth; // place the colosseum off-screen to the right.
            colosseum.y = groundY - 275; // place the colosseum above the ground (adjusted for colosseum height).
            background.addChild(colosseum); // add the colosseum to the background container.
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the colosseum!
            colosseum.x -= 3; // moves the colosseum to the left by subtracting 3 from its current x pos.
            if (colosseum.x < -320) {
                colosseum.x = canvasWidth - 25;
              }
            // TODO 4: Part 2 - Parallax

            for (var i = 0; i < buildings.length; i++){
                var building = buildings[i]; // creates a variable building that corresponds to whatever value i is currently set to in the buildings array.
                building.x -= 1; // updates the x pos of the buildings by 1 pixel on every frame.
                if (building.x < -100){
                    building.x = canvasWidth;

                } // once a building reaches 100 pixels to the left of the screen, it will reset to the right end of the screen.
            }
            

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
