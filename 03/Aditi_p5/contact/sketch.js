var img; 
var imgdesign; 
let cityscape; 
var fromColor;
var tooColor; 
var inBetweenColor; 
var scaledVal; 
let name;

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

  createCanvas(width, height, WEBGL);
    
    name = createGraphics(300, 170);
    name.background(255, 200); 
    name.fill(100);
    name.textAlign(CENTER); 
    name.textSize(37); 
    name.text('Thank You', 150, 95); 
     
}

function draw() {
    
     orbitControl();
    scaledVal = map(mouseX, 0,width, 0,1); 
     inBetweenColor = lerpColor(fromColor,tooColor, scaledVal);
  background(inBetweenColor); 
   noStroke(); 

    let camx = map(mouseX, 0, width, -370, 250); 
    camera(camx ,0, (height/2) / tan(PI/6), 0, 0); 
    
    var xPos = mouseX - height / 2;
    var yPos = mouseY - width / 2;
    var v = createVector(xPos, yPos, 0); 
    //ambientLight(60, 60, 60); 
   pointLight(255, 300, 255, v);
    
    push();
  rotateZ(frameCount * 0.008);
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.01); 
    ambientMaterial(100, 160, 190);
    torus(100, 20); 
  pop(); 
    
    push();
  rotateZ(frameCount * 0.009);
  rotateX(frameCount * 0.015);
  rotateY(frameCount * 0.005); 
    ambientMaterial(100, 160, 190);
    torus(200, 45); 
  pop(); 
    
    push();
  rotateZ(frameCount * 0.005);
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005); 
    texture(name); 
    //ambientMaterial(255, 212, 115);
    box(500); 
  pop();   
    
    if (mouseIsPressed) {
        fromColor = color(153, 255, 0); 
    tooColor = color(255, 248, 6); 
    inBetweenColor = color(178,90,255);     
    }else{
//        fromColor = color(153, 51, 0); 
//    tooColor = color(204, 153, 0); 
        fromColor = color(178, 51, 38); 
    tooColor = color(59, 105,160); 
    inBetweenColor = color(178,90,59)
    }

}


 


  
  

