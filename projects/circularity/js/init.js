var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM SETUP ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        // TODO 1 : Declare and initialize our variables
        var circle; // variable to hold a single circle when creating circles / iterating
        var circles = []; // variable to store all circles in an array



        // TODO 2 : Create a function that draws a circle 
        function drawCircle (){
            circle = draw.randomCircleInArea(canvas, true, true, "#999", 2); // creates a circles
            physikz.addRandomVelocity(circle, canvas, 5, 5); // gives the circle a random velocity
            view.addChild(circle); // adds circle as a child to the apps view so that it is visible on the canvas
            circles.push(circle); // circle will be pushed to the circles array
            
        }
        

        // TODO 3 / 7 : Call the drawCircle() function 
        /*
        drawCircle();
        drawCircle();
        drawCircle();
        drawCircle();
        drawCircle();
        */

        for (var i = 0; i < 100; i++){
            drawCircle();

        } // for loop starts at 0, draws a circle, checks to see if i is less than 100 and if so, it draws another circle until i = 100 at which point the loop stops. Every consecutive integer is ran.


        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM LOGIC ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        /* 
        This Function is called 60 times/second producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the circle's position //
            /*
            physikz.updatePosition(circles[0]); 
            physikz.updatePosition(circles[1]); 
            physikz.updatePosition(circles[2]); 
            physikz.updatePosition(circles[3]); 
            physikz.updatePosition(circles[4]); 
            */

            
            // TODO 5 / 10 : Call game.checkCirclePosition() on your circles.
            

            /*
            game.checkCirclePosition(circles[0]);
            game.checkCirclePosition(circles[1]);
            game.checkCirclePosition(circles[2]);
            game.checkCirclePosition(circles[3]);
            game.checkCirclePosition(circles[4]);
            */


           

            // TODO 9 : Iterate over the array
           for (var i = 0; i < circles.length; i++){
            physikz.updatePosition(circles[i]);
            game.checkCirclePosition(circles[i]);

           } // i is set to 0 and the for loop is ran until i exceeds the last value of the array. Each consecutive integer is ran, and the random velcoity and checks to make sure the circles do not go off the screen are applied, essentially applying this code to every circle.
            
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) {
                circle.x = 0;
            }
            
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            if (circle.x < 0){
                circle.x = canvas.width;

            } // if the circle has gone past the LEFT side of the screen then place it on the RIGHT

            if (circle.y > canvas.height){
                circle.y = 0;

            } // if the circle has gone past the BOTTOM of the screen then place it on the TOP

            if (circle.y < 0){
                circle.y = canvas.height

            } // if the circle has gone past the TOP of the screen then place it on the BOTTOM
            


            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
