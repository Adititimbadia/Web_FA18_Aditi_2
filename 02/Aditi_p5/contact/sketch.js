var img; 
var imgdesign; 
let cityscape; 
var fromColor;
var tooColor; 
var inBetweenColor; 
var scaledVal; 

function setup() {
    // width and height of screen
    var  w = window;
    var  d = document;
    var  e = d.documentElement;
    var  g = d.getElementsByTagName('body')[0];
    var  width = w.innerWidth || e.clientWidth || g.clientWidth;
    var  height = w.innerHeight|| e.clientHeight|| g.clientHeight;
    
    fromColor = color(22,79,90); 
  tooColor = color(100,28,50); 
  inBetweenColor = color(178,90,59);
	scaledVal = 50;
    
    img= loadImage("https://adititimbadia.github.io/Web_FA18_Aditi_2/Images/thank-you.png");

  createCanvas(width, height, WEBGL);
     
}

function draw() {
    scaledVal = map(mouseX, 0,width, 0,1); 
     inBetweenColor = lerpColor(fromColor,tooColor, scaledVal);
  background(inBetweenColor); 
  // noStroke(); 

    let camx = map(mouseX, 0, width, -370, 250); 
    camera(camx ,0, (height/2) / tan(PI/6), 0, 0); 
    
    var xPos = mouseX - height / 2;
    var yPos = mouseY - width / 2;
    var v = createVector(xPos, yPos, 0); 
    //ambientLight(60, 60, 60); 
  pointLight(255, 212, 115, v);
    
    
    push();
  rotateZ(frameCount * 0.005);
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005); 
    texture(img); 
    //ambientMaterial(255, 212, 115);
    box(270); 
  pop();   

}


 


  
  

