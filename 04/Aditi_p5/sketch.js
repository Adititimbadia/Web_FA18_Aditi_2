var colors;
var type;

function setup() {
  // width and height of screen
    var  w = window;
    var  d = document;
    var  e = d.documentElement;
    var  g = d.getElementsByTagName('body')[0];
    var  width = w.innerWidth || e.clientWidth || g.clientWidth;
    var  height = w.innerHeight|| e.clientHeight|| g.clientHeight;
    
     colors = [    
    color(random(127, 170), random(113, 90), random(191, 50),50 ),
    color(60, 0, 74,75 ),
    color(65, 60, 190, 90),
  ];
    createCanvas(width, height);
  
  
  type =0;
}
 
function draw() {
    
   
    
  background(60);
  noFill();
  smooth();
  strokeWeight(8);
  for(var i = 0; i <3; i++) {
    stroke(colors[i]);
      
    beginShape();
      var w= type; 
    for(var w = -20; w < width +20; w += 5) {
      var h = height / 2;
      h += 100 * sin(w * 0.007 + (frameCount *.01)+ i * TWO_PI/3) * pow(abs(sin(w*60+ frameCount * 0.003)),2);
      curveVertex(w, h);
    }    
    endShape();  
      
//      beginShape();
//      var w= type; 
//    for(var w = -20; w < height +20; w += 5) {
//      var h = width / 4.5;
//      h += 100 * sin(w * 0.007 + (frameCount *.01)+ i * TWO_PI/3) * pow(abs(sin(w*60+ frameCount * 0.003)),2);
//      curveVertex(h, w);
//    }    
//    endShape(); 
  }  
    
}

function mousePressed() {
  if(type == 0) {
    type = 1;
  } else {
    type = 0;
  }
}