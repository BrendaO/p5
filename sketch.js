//=======================================================//
//Author: Brenda O'Neill                                 //
//Date: 15th May, 2017                                   //
//                                                       //
//Description: To add an animation over video            //
//Firstly, position the sprite over 		         //
//the video background. (Use z-index)		         //
//Secondly, this leaves an animation trail so the        //
//clear() method within the draw() method is used.       //
//                                                       //
//=======================================================//



//global variables
    var sequenceAnimation;//name of completed animation
    var mySprite1; //name of sprite
    var myVideo;//name of video
    var canvas; //name of canvas

function preload() {
    //on preload() the animation images are loaded into "sequenceAnimation"
    sequenceAnimation = loadAnimation("capGuy/walk_0001.png", "capGuy/walk_0008.png");

    //Creating a video object
    myVideo = createVideo(['assets/glen.mov']);	
    myVideo.loop();	
}

function setup() {
	
	  frameRate(22);//N.B. This is what slows down the rate at which the animation itself walks
	  //1600 length/800 width
     canvas = createCanvas(1600,800); //elongates the walking path
      canvas.style('z-index','2');//N.B. This is the key to placing the animation over the video!!
	  canvas.position(50, 260);
 
	
    //creating a sprite called mySprite1
    mySprite1 = createSprite (200,800,400,400);

    //Adding the animation(labelled "walking") which was //preloaded to 
    //mySprite1. This exposes the Sprite 
    //interface to the animation now.
    mySprite1.addAnimation("walking", sequenceAnimation);
	

}

function draw() {

    clear();//clears the animation trail.
    scale(.85); //reduces the size

    //This moves the sprite each time the draw() is executed
    mySprite1.velocity.x += .05;

    //Draws any of the sprites you have created.
    //Is always the last line in draw()
    drawSprites();
	


}


