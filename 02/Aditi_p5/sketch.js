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
    
    img= loadImage("https://adititimbadia.github.io/Web_FA18_Aditi_2/Images/aditi.png");
    imgdesign= loadImage("https://adititimbadia.github.io/Web_FA18_Aditi_2/Images/design.png");

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
    
    push();
    translate(-width / 4, -height / 4, 0);
  rotateZ(frameCount * 0.004);
  rotateX(frameCount * 0.004);
  rotateY(frameCount * 0.004); 
    texture(imgdesign); 
    //ambientMaterial(178, 91, 64);
    box(220); 
  pop();
    
    push();
    translate(-width / 4, height /5, 0);
  rotateZ(frameCount * 0.005);
  rotateX(frameCount * 0.007);
  rotateY(frameCount * 0.007); 
    ambientMaterial(229, 160, 140);
    box(120); 
  pop();
    
    push();
    translate(width / 12, - height /2, 0);
  rotateZ(frameCount * 0.008);
  rotateX(frameCount * 0.006);
  rotateY(frameCount * 0.002); 
    ambientMaterial(101, 153, 124);
    box(150); 
  pop();
    
    push();
    translate(- width /6, height /2.7, 0);
  rotateZ(frameCount * 0.008);
  rotateX(frameCount * 0.006);
  rotateY(frameCount * 0.006); 
    ambientMaterial(189, 214, 212);
    box(90); 
  pop();
    
    push();
    translate(-width/12, -height /2.2, 0);
  rotateZ(frameCount * 0.006);
  rotateX(frameCount * 0.008);
  rotateY(frameCount * 0.009); 
    ambientMaterial(60, 132, 160);
    box(70); 
  pop(); 
    
}

//function nav{
//    if(mouseX <= 100){
//        for(i=0, i<100, i++){
//            
//            var xSize =0;
//            var ySize = height; 
//            rect(0, 0, xSize[i], ySize)
//        } 
//    }
//}

//$(document).ready(function(){
//    $('.about').on('hover', function() {
//    $(this).toggleClass('hover');
//});
//    $('.contact').on('hover', function() {
//    $(this).toggleClass('hover');
//});
//    
//    
//});
//    
 
 


  
  

