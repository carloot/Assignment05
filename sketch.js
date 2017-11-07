var mySong;
var myImage;
var analyzer;
var volume;
var myImage2;

function preload() {
    mySong = loadSound('assets/mauro3.mp3');
    myImage =  loadImage('./assets/images.png');
    myImage2 =  loadImage('./assets/crash.png');

}

function setup() {
    createCanvas(500,500);

 mySong.loop();
 
  analyzer = new p5.Amplitude();
    analyzer.setInput(mySong);


}

function draw() {
background(0,0,0);
var volume = analyzer.getLevel();

image(myImage,125,120,100+100*volume,100+100*volume); 
image(myImage,260,120,100+100*volume,100+100*volume); 
image(myImage,125,270,100+100*volume,100+100*volume); 
image(myImage,260,270,100+100*volume,100+100*volume); 

if (volume>=0.3) { 
  myImage.filter("invert"); 
}

if (volume>=0.38) { 
 image(myImage2,0,0,500,500);
}
  
}