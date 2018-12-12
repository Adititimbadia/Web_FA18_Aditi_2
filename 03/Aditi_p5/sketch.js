var img; 
var imgdesign; 
let cityscape; 
var fromColor;
var tooColor; 
var inBetweenColor; 
var scaledVal; 
var BgImg; 

let name;
let design;

function setup() {
    // width and height of screen
    var  w = window;
    var  d = document;
    var  e = d.documentElement;
    var  g = d.getElementsByTagName('body')[0];
    var  width = w.innerWidth || e.clientWidth || g.clientWidth;
    var  height = w.innerHeight|| e.clientHeight|| g.clientHeight;
    
    fromColor = color(35, 160, 142); 
    tooColor = color(122, 158, 62); 
    inBetweenColor = color(178,90,59);
	scaledVal = 50;    

  createCanvas(width, height, WEBGL);
    
    name = createGraphics(300, 170);
    name.background(255, 200); 
    name.fill(100);
    name.textAlign(CENTER); 
    name.textSize(37); 
    name.text('Aditi Timbadia', 150, 95); 
    
    design = createGraphics(300, 170);
    design.background(255, 200); 
    design.fill(100);
    design.textAlign(CENTER); 
    design.textSize(37); 
    design.text('Product Design', 150, 95);
}

function draw() {
    
   orbitControl();
    scaledVal = map(mouseX, 0,width, 0,1); 
     inBetweenColor = lerpColor(fromColor,tooColor, scaledVal);
  background(inBetweenColor); 

  noStroke(); 

//    var size= 16; 
//    for(var i=0; i<=width; i+=size){
//    var c = var(map(i, 0, width, 0, 255));
//    fill(60, c, c); 
//    ellipse(i, height/1.5, size, size);
//  }
    
    let camx = map(mouseX, 0, width, -370, 250); 
    camera(camx ,0, (height/2) / tan(PI/6), 0, 0);
    
    var xPos = mouseX - height / 2;
    var yPos = mouseY - width / 2;
    var v = createVector(xPos, yPos, 0); 
    //ambientLight(60, 60, 60); 
  pointLight(255, 300, 255, v);
    
//    if (mouseX > xPos)
//    
//    if (mouseX > bx-boxSize && mouseX < bx+boxSize && 
//      mouseY > by-boxSize && mouseY < by+boxSize) {
//    overBox = true;  
//    if(!locked) { 
//      stroke(255); 
//      fill(244,122,158);
//    } 
//  } else {
//    stroke(156,39,176);
//    fill(244,122,158);
//    overBox = false;
//  }
    
     
    translate(150, 50, 300);
    
    push();
    translate(-width/3.5, -height/4, 0);
  rotateZ(frameCount * 0.002);
  rotateX(frameCount * 0.009);
  rotateY(frameCount * 0.005); 
    ambientMaterial(100, 160, 190);
    torus(80, 15); 
  pop(); 
    
    push();
    translate(-width/3.5, -height/4, 0);
  rotateZ(frameCount * 0.008);
  rotateX(frameCount * 0.002);
  rotateY(frameCount * 0.006); 
    ambientMaterial(150, 90, 190);
    torus(40, 10); 
  pop(); 
    
    push();
  rotateZ(frameCount * 0.006);
  rotateX(frameCount * 0.002);
  rotateY(frameCount * 0.006); 
    ambientMaterial(100, 80, 160);
    torus(90, 15); 
  pop(); 
    
     push();
  rotateZ(frameCount * 0.002);
  rotateX(frameCount * 0.008);
  rotateY(frameCount * 0.006); 
    ambientMaterial(50, 180, 190);
    torus(50, 10); 
  pop();
    
    push();
  rotateZ(frameCount * 0.005);
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005); 
    texture(name); 
    box(280); 
  pop();
    

    push();
    translate(-width / 3.5, -height / 4, 0);
  rotateZ(frameCount * 0.004);
  rotateX(frameCount * 0.004);
  rotateY(frameCount * 0.004); 
    texture(design); 
    //ambientMaterial(178, 91, 64);
    box(230); 
  pop();
    
    push();
    translate(-width / 4, height /5, 0);
  rotateZ(frameCount * 0.005);
  rotateX(frameCount * 0.007);
  rotateY(frameCount * 0.007); 
  ambientMaterial(229, 160, 140);
    ambientMaterial(186, 42, 90); 
    //normalMaterial(255, 0, 0, 0.4); 
    box(120); 
  pop();
    
    push();
    translate(width / 12, - height /2, 0);
  rotateZ(frameCount * 0.008);
  rotateX(frameCount * 0.006);
  rotateY(frameCount * 0.002); 
    ambientMaterial(242, 224, 59);
    box(150); 
  pop();
    
    push();
    translate(- width /6, height /2.7, 0);
  rotateZ(frameCount * 0.008);
  rotateX(frameCount * 0.006);
  rotateY(frameCount * 0.006); 
   // ambientMaterial(189, 214, 212);
    ambientMaterial(244, 133, 60);
    box(90); 
  pop();
    
    push();
    translate(-width/12, -height /2.2, 0);
  rotateZ(frameCount * 0.006);
  rotateX(frameCount * 0.008);
  rotateY(frameCount * 0.009); 
    ambientMaterial(138, 184, 53);
    box(90); 
  pop(); 
    
    push();
    translate(-width/15, height/2, 0);
  rotateZ(frameCount * 0.006);
  rotateX(frameCount * 0.008);
  rotateY(frameCount * 0.009); 
    ambientMaterial(60, 132, 160);
    box(70); 
  pop();
    
    push();
    translate(-width/8, -height/1.6, 0);
  rotateZ(frameCount * 0.005);
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005); 
    ambientMaterial(60, 190, 160);
    box(50); 
  pop(); 

//push();
//    for(var i = 0; i < 1; i++){
//      translate(sin(frameCount * 0.001 + j) * 100, sin(frameCount * 0.001 + j) * 100, i * 0.1);
//      rotateZ(frameCount * 2);
//      push();
//      sphere(8, 6, 4); 
//      pop();
//    }
//    pop();
    
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
    
//  function mousePressed() {
//    fill(0);
//    //ellipse(width/10, height/10, 50, 50); 
//    fromColor = color(153, 255, 0); 
//    tooColor = color(255, 153, 0); 
//    inBetweenColor = color(178,90,255); 
//      pointLight(60, 100, 255, v);
//      translate(0, 0, 300);
//      
// }

   

//function mousePressed() {
//    var xPos = mouseX - height / 2;
//    var yPos = mouseY - width / 2;
//    var v = createVector(xPos, yPos, 0); 
//    box(1000); 
//}

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
 
 


  
  

