var score = 0;
var rectWidth = 0;
var rectHeight = 0;
var rectSetup = [0, 0, 0, 0, 0, 0, 0, 0];
var cirSetup = [0, 0, 0, 0, 0, 0, 0];
var elliSetup = [0, 0, 0, 0, 0, 0, 0, 0];
var triSetup = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var randPos = [0, 1, 2, 3, 4, 5, 6, 7];
var strokeColor =["black", "blue", "green"];

var rect1Clicked = false;
var rect2Clicked = false;
var cir1Clicked = false;
var cir2Clicked = false;
var el1Clicked = false;
var el2Clicked = false;
var tri1Clicked = false;
var tri2Clicked = false;

var rectMatched = false;
var cirMatched = false;
var elMatched = false;
var triMatched = false;

var stroker1 = strokeColor[0];
var stroker2 = strokeColor[0];
var strokec1 = strokeColor[0];
var strokec2 = strokeColor[0];
var strokee1 = strokeColor[0];
var strokee2 = strokeColor[0];
var stroket1 = strokeColor[0];
var stroket2 = strokeColor[0];

function randomize(){
  
  var randPos = [0, 1, 2, 3, 4, 5, 6, 7];
  
  rectSetup[0] = randPos.splice(Math.floor(random(0, randPos.length - 1)),1);
  cirSetup[0] = randPos.splice(Math.floor(random(0, randPos.length - 1)),1);
  elliSetup[0] = randPos.splice(Math.floor(random(0, randPos.length - 1)),1);
  triSetup[0] = randPos.splice(Math.floor(random(0, randPos.length - 1)),1);
  rectSetup[1] = randPos.splice(Math.floor(random(0, randPos.length - 1)),1);
  cirSetup[1] = randPos.splice(Math.floor(random(0, randPos.length - 1)),1);
  elliSetup[1] = randPos.splice(Math.floor(random(0, randPos.length - 1)),1);
  triSetup[1] = randPos.splice(Math.floor(random(0, randPos.length - 1)),1);
}

function setPositions(){
  
  randomize();
  
  var positions = [[displayWidth / 5, displayHeight / 5], [2 * displayWidth / 5, displayHeight / 5], [3 * displayWidth / 5, displayHeight / 5], [4 * displayWidth / 5, displayHeight / 5], [displayWidth / 5, 3 * displayHeight / 5], [2 * displayWidth / 5, 3 * displayHeight / 5], [3 * displayWidth / 5, 3 * displayHeight / 5], [4 * displayWidth / 5, 3 * displayHeight / 5]];
  
  rectSetup[2] = positions[rectSetup[0]][0];
  rectSetup[3] = positions[rectSetup[0]][1];
  rectSetup[4] = positions[rectSetup[1]][0];
  rectSetup[5] = positions[rectSetup[1]][1];
  rectSetup[6] = random(150, 200);
  rectSetup[7] = random(150, 200);
  
  cirSetup[6] = random(150, 200);
  cirSetup[2] = positions[cirSetup[0]][0];
  cirSetup[3] = positions[cirSetup[0]][1];
  cirSetup[4] = positions[cirSetup[1]][0];
  cirSetup[5] = positions[cirSetup[1]][1];
  
  elliSetup[2] = positions[elliSetup[0]][0];
  elliSetup[3] = positions[elliSetup[0]][1];
  elliSetup[4] = positions[elliSetup[1]][0];
  elliSetup[5] = positions[elliSetup[1]][1];
  elliSetup[6] = random (50, 200);
  elliSetup[7] = random (50, 200);
  
  triSetup[2] = positions[triSetup[0]][0];
  triSetup[3] = positions[triSetup[0]][1];
  triSetup[4] = triSetup[2] 
  triSetup[5] = triSetup[3] + 200;
  triSetup[6] = triSetup[2] + 200;
  triSetup[7] = triSetup[3]
  triSetup[8] = positions[triSetup[1]][0];
  triSetup[9] = positions[triSetup[1]][1];
  triSetup[10] = triSetup[8];
  triSetup[11] = triSetup[9] + 200;
  triSetup[12] = triSetup[8] + 200;
  triSetup[13] = triSetup[9];
  
}


function setup() {
  createCanvas(displayWidth, displayHeight);
  setPositions();
}

function draw() {
  
  background(255, 105, 97);
  
  noStroke();
  fill("purple");
  textSize(30);
  text("Score : " + score, displayWidth - 170, 55);
  
  noStroke();
  fill(119, 225, 100);
  textSize(30);
  text("Match The Shapes!", (displayWidth / 2) - 130, 55);
  
  strokeWeight(5);
  
   if (mouseX >= rectSetup[2] && mouseX <= rectSetup[2] + rectSetup[6] && mouseY >= rectSetup[3] && mouseY <= rectSetup[3] + rectSetup[7] && mouseIsPressed){
     rect1Clicked = true;
     stroker1 = strokeColor[1];
   }
  stroke(stroker1);
  rect(rectSetup[2], rectSetup[3] , rectSetup[6], rectSetup[7]);
  
  if (mouseX >= rectSetup[4] && mouseX <= rectSetup[4] + rectSetup[6] && mouseY >= rectSetup[5] && mouseY <= rectSetup[5] + rectSetup[7] && mouseIsPressed){
     rect2Clicked = true;
     stroker2 = strokeColor[1];
  }
  stroke(stroker2);
  rect(rectSetup[4], rectSetup[5] , rectSetup[6], rectSetup[7]);
  
  if (mouseX >= cirSetup[2] - 50 && mouseX <= cirSetup[2] + 50 && mouseY >= cirSetup[3] - 50 && mouseY <= cirSetup[3] + 50 && mouseIsPressed){
    cir1Clicked = true;
    strokec1 = strokeColor[1];
  }
  stroke(strokec1);
  circle(cirSetup[2], cirSetup[3], cirSetup[6]);
  
  if (mouseX >= cirSetup[4] - 50 && mouseX <= cirSetup[4] + 50 && mouseY >= cirSetup[5] - 50 && mouseY <= cirSetup[5] + 50 && mouseIsPressed){
    cir2Clicked = true;
    strokec2 = strokeColor[1];
  }
  stroke(strokec2);
  circle(cirSetup[4], cirSetup[5], cirSetup[6]);
  
  if (mouseX >= elliSetup[2] - 50 && mouseX <= elliSetup[2] + 50 && mouseY >= elliSetup[3] - 50 && mouseY <= elliSetup[3] + 50 && mouseIsPressed){
    el1Clicked = true;
    strokee1 = strokeColor[1];
  }
  stroke(strokee1);
  ellipse(elliSetup[2], elliSetup[3], elliSetup[6], elliSetup[7]);
  
  if (mouseX >= elliSetup[4] - 50 && mouseX <= elliSetup[4] + 50 && mouseY >= elliSetup[5] - 50 && mouseY <= elliSetup[5] + 50 && mouseIsPressed){
    el2Clicked = true;
    strokee2 = strokeColor[1];
  }
  stroke(strokee2);
  ellipse(elliSetup[4], elliSetup[5], elliSetup[6], elliSetup[7]);
  
  if (mouseX >= triSetup[2] && mouseX <= triSetup[2] + 200 && mouseY >= triSetup[3] && mouseY <= triSetup[3] + 200 && mouseIsPressed){
    tri1Clicked = true;
    stroket1 = strokeColor[1];
  }
  stroke(stroket1);
  triangle(triSetup[2], triSetup[3], triSetup[4], triSetup[5], triSetup[6], triSetup[7]);
  
  if (mouseX >= triSetup[8] && mouseX <= triSetup[8] + 200 && mouseY >= triSetup[9] && mouseY <= triSetup[9] + 200 && mouseIsPressed){
    tri2Clicked = true;
    stroket2 = strokeColor[1];
  }
  stroke(stroket2);
  triangle(triSetup[8], triSetup[9], triSetup[10], triSetup[11], triSetup[12], triSetup[13]);
  
  
  if (rect1Clicked && rect2Clicked){
    
    score += 100;
    rectMatched = true;
    rect1Clicked = false;
    rect2Clicked = false;
    
  }
  
  if (cir1Clicked && cir2Clicked){
        
    score += 100;
    cirMatched = true;
    cir1Clicked = false;
    cir2Clicked = false;
    
  }
  
  if (el1Clicked && el2Clicked){
        
    score += 100;
    elMatched = true;
    el1Clicked = false;
    el2Clicked = false;
    
    
  }
  
  if (tri1Clicked && tri2Clicked){
    
    score += 100;
    triMatched = true;
    tri1Clicked = false;
    tri2Clicked = false;
    
  }
  
  if (rectMatched){
    stroker1 = strokeColor[2];
    stroker2 = strokeColor[2];
  }
  
  if (cirMatched){
    strokec1 = strokeColor[2]
    strokec2 = strokeColor[2];
  }
  
  if (elMatched){
    strokee1 = strokeColor[2];
    strokee2 = strokeColor[2];
  }
  
  if (triMatched){
    stroket1 = strokeColor[2];
    stroket2 = strokeColor[2];
  }
  
  if ((rect1Clicked || rect2Clicked) && (cir1Clicked || cir2Clicked || el1Clicked || el2Clicked || tri1Clicked || tri2Clicked)){
    
    tri1Clicked = false;
    tri2Clicked = false;
    el1Clicked = false;
    el2Clicked = false;
    cir1Clicked = false;
    cir2Clicked = false;
    rect1Clicked = false;
    rect2Clicked = false;
    
    if (!rectMatched){
      stroker1 = strokeColor[0];
      stroker2 = strokeColor[0];
    }
    
    if (!cirMatched){
      strokec1 = strokeColor[0];
      strokec2 = strokeColor[0];
    }
    if (!elMatched){
      strokee1 = strokeColor[0];
      strokee2 = strokeColor[0];
    }
    if (!triMatched){
      stroket1 = strokeColor[0];
      stroket2 = strokeColor[0];
    }
  }
  
  if ((cir1Clicked || cir2Clicked) && (rect1Clicked || rect2Clicked || el1Clicked || el2Clicked || tri1Clicked || tri2Clicked)){
    
    tri1Clicked = false;
    tri2Clicked = false;
    el1Clicked = false;
    el2Clicked = false;
    cir1Clicked = false;
    cir2Clicked = false;
    rect1Clicked = false;
    rect2Clicked = false;
    
    if (!rectMatched){
      stroker1 = strokeColor[0];
      stroker2 = strokeColor[0];
    }
    
    if (!cirMatched){
      strokec1 = strokeColor[0];
      strokec2 = strokeColor[0];
    }
    if (!elMatched){
      strokee1 = strokeColor[0];
      strokee2 = strokeColor[0];
    }
    if (!triMatched){
      stroket1 = strokeColor[0];
      stroket2 = strokeColor[0];
    }
  }
  
  if ((el1Clicked || el2Clicked) && (rect1Clicked || rect2Clicked || cir1Clicked || cir2Clicked || tri1Clicked || tri2Clicked)){
    
    tri1Clicked = false;
    tri2Clicked = false;
    el1Clicked = false;
    el2Clicked = false;
    cir1Clicked = false;
    cir2Clicked = false;
    rect1Clicked = false;
    rect2Clicked = false;
    
    if (!rectMatched){
      stroker1 = strokeColor[0];
      stroker2 = strokeColor[0];
    }
    
    if (!cirMatched){
      strokec1 = strokeColor[0];
      strokec2 = strokeColor[0];
    }
    if (!elMatched){
      strokee1 = strokeColor[0];
      strokee2 = strokeColor[0];
    }
    if (!triMatched){
      stroket1 = strokeColor[0];
      stroket2 = strokeColor[0];
    }
  }
  
  if ((tri1Clicked || tri2Clicked) && (rect1Clicked || rect2Clicked || el1Clicked || el2Clicked || cir1Clicked || cir2Clicked)){
    
    tri1Clicked = false;
    tri2Clicked = false;
    el1Clicked = false;
    el2Clicked = false;
    cir1Clicked = false;
    cir2Clicked = false;
    rect1Clicked = false;
    rect2Clicked = false;
    
    if (!rectMatched){
      stroker1 = strokeColor[0];
      stroker2 = strokeColor[0];
    }
    
    if (!cirMatched){
      strokec1 = strokeColor[0];
      strokec2 = strokeColor[0];
    }
    if (!elMatched){
      strokee1 = strokeColor[0];
      strokee2 = strokeColor[0];
    }
    if (!triMatched){
      stroket1 = strokeColor[0];
      stroket2 = strokeColor[0];
    }
  }
  
  if (rectMatched && cirMatched && elMatched && triMatched){
    
    tri1Clicked = false;
    tri2Clicked = false;
    el1Clicked = false;
    el2Clicked = false;
    cir1Clicked = false;
    cir2Clicked = false;
    rect1Clicked = false;
    rect2Clicked = false;
    rectMatched = false;
    cirMatched = false;
    elMatched = false;
    triMatched = false;
    stroker1 = strokeColor[0];
    stroker2 = strokeColor[0];
    strokec1 = strokeColor[0];
    strokec2 = strokeColor[0];
    strokee1 = strokeColor[0];
    strokee2 = strokeColor[0];
    stroket1 = strokeColor[0];
    stroket2 = strokeColor[0];
    setPositions();
    
    
  }
  
}



