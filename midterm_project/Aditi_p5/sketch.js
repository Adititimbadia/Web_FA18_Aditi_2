    var numOfCircles = 70;
    var maxSize = 100;
    var minSize = 15;

    var positions = [];
    var sizes = [];
    
    var directions = [];
    
    var speeds = [];

    var colors = [];
    
    var speedX = 5;
    var speedY = 2;

    var bgColor; 

    var newColor;


function setup() {
    
    // width and height of screen
    var  w = window;
    var  d = document;
    var  e = d.documentElement;
    var  g = d.getElementsByTagName('body')[0];
    var  width = w.innerWidth || e.clientWidth || g.clientWidth;
    var  height = w.innerHeight|| e.clientHeight|| g.clientHeight;

  createCanvas(width, height);
    var bgColor = background(130, 150, 200);
    
      for (var i = 0; i < numOfCircles; i ++) {
    var randomSize = Math.random() * maxSize + minSize;
    var posX = Math.random() * (width - maxSize) + maxSize/2;
    var posY = Math.random() * (height - maxSize) + maxSize/2;
    
    var randomColor = color(Math.floor(Math.random()*180), Math.floor(Math.random()*60), Math.floor(Math.random()*225));
          
    var newColor = color(Math.floor(Math.random()*220), Math.floor(Math.random()*160), Math.floor(Math.random()*225));
          
    var xSpeed = Math.random() * 10;  
    var ySpeed = Math.random() * 10;  
          
    var xDirection = Math.random() ;
    var yDirection = Math.random() ;  
          
    positions.push([posX, posY]);
    sizes.push(randomSize);
    colors.push(randomColor);
    //color.push(newColor);
    speeds.push([xSpeed, ySpeed]);
          
    directions.push(xDirection, yDirection);

      }   
}

function draw() {
  
    noStroke(); 
    
  for (var i = 0; i < numOfCircles; i ++) {
      
    fill(colors[i]);
      
   console.log(speeds[i])
      
    positions[i][0] = positions[i][0] + speeds[i][0]; 
    positions[i][1] = positions[i][1] + speeds[i][1]; 
      
    if (positions[i][0] >= (width - sizes[i]/2) || positions[i][0] <= sizes[i]/2){
        speeds[i][0] = speeds[i][0] * -1; 
    }
    if (positions[i][1] >= (height - sizes[i]/2) ||positions[i][1] <= sizes[i]/2){
        speeds[i][1] = speeds[i][1] * -1; 
    }
      
       ellipse(positions[i][0], positions[i][1], sizes[i], sizes[i]);
      
//      var d = dist(mouseX, mouseY, width, height);
//      if(d < sizes[i]){
//      fill(0);
//    }
}  
    
    
  
//    if (mouseX >= 25 && mouseX <= 70 && mouseY >= 500 && mouseY <=25) {
//     clicked == true;
//}else{
//    clicked == false; 
//}   
//    fill(0); 
//    rect(25, 550, 70, 25); 
}

//function mousePressed() {
////    bgColor = background(Math.floor(Math.random()*220), Math.floor(Math.random()*160), Math.floor(Math.random()*225));
//    change(); 
//}

function change(){
     bgColor = background(Math.floor(Math.random()*220), Math.floor(Math.random()*160), Math.floor(Math.random()*225));
        
        newColor = color(Math.floor(Math.random()*20), Math.floor(Math.random()*200), Math.floor(Math.random()*50));
      
    fill(newColor[i]);
      
    ellipse(positions[i][0], positions[i][1], sizes[i], sizes[i]);
  
       
    var randomColor = [color(Math.floor(Math.random()*180), Math.floor(Math.random()*60), Math.floor(Math.random()*225)), 
    color(Math.floor(Math.random()*170), Math.floor(Math.random()*100), Math.floor(Math.random()*70)),
    color(Math.floor(Math.random()*200), Math.floor(Math.random()*30), Math.floor(Math.random()*200))];

    
//document.getElementById('background').var('background-color',newrandomColor);
    
//$('#background').var('background-color',newrandomColor);
//$('#text').css('font-family',newSpacing);
//$('#right').css('background-color',newColor);
}



  
  

