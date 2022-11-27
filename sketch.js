let music;
let endMusic;
let ding;
let x;
let y;
let pointerx;
let pointery;
let rectx;
let recty;
let rect2x;
let rect2y;
let font;
let trayx;
let endMusicPlay = false;
function loaded() {
  music.play();
}
function preload() {
  soundFormats('mp3', 'ogg');
  music = createAudio('BGM.mp3', loaded);
  endMusic = loadSound('EndMusic.mp3');
  ding = loadSound('Ding.mp3');
  music.volume(0.5);
  music.play();
  font = loadFont('EndFont.ttf');
}
function setup() {
  createCanvas(displayWidth, displayHeight);
  house = loadImage('Home.png');
  help = loadImage('Help.png');
  pointer = loadImage('pointer.png');
  x = displayWidth;
  y = displayHeight;
  trayx = displayWidth - 500;
  pointerx = displayWidth/2;
  pointery = displayHeight/2;
  rectx = pointerx - 200;
  recty = pointery + 100;
  rect2x = displayWidth/2 -200;
  rect2y = displayHeight/2 + 100
}
let finalx = 0;
let finaly = 0;
let shapex = Math.random() * 150;
let shapey = Math.random() * 150;
let shapex2 = Math.random() * 200;
let shapey2 = Math.random() * 200;
let shapex3 = Math.random() * 250;
let shapey3 = Math.random() * 250;
let shapex4 = Math.random() * 300;
let shapey4 = Math.random() * 300;
let shapex5 = Math.random() * 350;
let shapey5 = Math.random() * 350;
let shapex6 = Math.random() * 400;
let shapey6 = Math.random() * 400;
let shapex7 = Math.random() * 450;
let shapey7 = Math.random() * 450;
let shapex8 = Math.random() * 500;
let shapey8 = Math.random() * 500;
let shapex9 = Math.random() * 550;
let shapey9 = Math.random() * 550;
let shapex10 = Math.random() * 600;
let shapey10 = Math.random() * 600;
let shapex11 = Math.random() * 650;
let shapey11 = Math.random() * 650;
let shapex12 = Math.random() * 700;
let shapey12 = Math.random() * 700;
let shapex13 = Math.random() * 750;
let shapey13 = Math.random() * 750;
let shapex14 = Math.random() * 800;
let shapey14 = Math.random() * 800;
let shapex15 = Math.random() * 850;
let shapey15 = Math.random() * 850;
let shapex16 = Math.random() * 900;
let shapey16 = Math.random() * 900;
let shapex17 = Math.random() * 950;
let shapey17 = Math.random() * 950;
let shapex18 = Math.random() * 1000;
let shapey18 = Math.random() * 1000;
let shapex19 = Math.random() * 950;
let shapey19 = Math.random() * 950;
let shapex20 = Math.random() * 900;
let shapey20 = Math.random() * 900;
let overShape = false;
let overShape2 = false;
let overShape3 = false;
let overShape4 = false;
let overShape5 = false;
let overShape6 = false;
let overShape7 = false;
let overShape8 = false;
let overShape9 = false;
let overShape10 = false;
let overShape11 = false;
let overShape12 = false;
let overShape13 = false;
let overShape14 = false;
let overShape15 = false;
let overShape16 = false;
let overShape17 = false;
let overShape18 = false;
let overShape19 = false;
let overShape20 = false;
let overHelp = false;
let overHome = false;
let clicked = false;
let clicked2 = false;
let clicked3 = false;
let clicked4 = false;
let clicked5 = false;
let clicked6 = false;
let clicked7 = false;
let clicked8 = false;
let clicked9 = false;
let clicked10 = false;
let clicked11 = false;
let clicked12 = false;
let clicked13 = false;
let clicked14 = false;
let clicked15 = false;
let clicked16 = false;
let clicked17 = false;
let clicked18 = false;
let clicked19 = false;
let clicked20 = false;
let clickedHelp = false
let runDemo = false;
let placed = false;
let placed2 = false;
let placed3 = false;
let placed4 = false;
let placed5 = false;
let placed6 = false;
let placed7 = false;
let placed8 = false;
let placed9 = false;
let placed10 = false;
let placed11 = false;
let placed12 = false;
let placed13 = false;
let placed14 = false;
let placed15 = false;
let placed16 = false;
let placed17 = false;
let placed18 = false;
let placed19 = false;
let placed20 = false;
let xOffset = 0;
let yOffset = 0;
let score = 0;
let scoreSubtractor = 0;
let phase1 = false;
let phase2 = false;
let phase3 = false;
let phase4 = false;
let counter = 0;
let ending = false;
let overReset = false;
let overExit = false;

function draw() {
  background(255, 150, 150);
  gui();
    
  fill(235);
  stroke(0);
  rect(trayx,displayHeight/2 - 250, 200, 400);
  fill(225);
  rect(trayx+25,displayHeight/2 - 225, 150, 350);
  if (runDemo) {
    Demo();
  } else {
    pointerx = displayWidth/2;
    pointery = displayHeight/2;
    rectx = pointerx - 200;
    recty = pointery + 100;
    rect2x = displayWidth/2 -200;
    rect2y = displayHeight/2 + 100;
    phase2 = false;
    phase1 = false;
    phase3 = false;
    phase4 = false;
    counter = 0;
  }
  fill(255);
  if (
    mouseX > shapex - 20 &&
    mouseX < shapex + 20 &&
    mouseY > shapey - 20 &&
    mouseY < shapey + 20
  ) {
    overShape = true;
    fill(0,0,255);
    if (clicked == false) {
      stroke(0,0,255);
    }
  } else {
    stroke(0);
    overShape = false;
    
    
  }
   if (shapex > trayx &&
     shapex < trayx + 200 &&
      shapey > displayHeight/2 - 250 &&
      shapey < displayHeight/2 - 250 + 400) {
    fill (0,255,0);
    stroke(0);
  }
  if (placed20) {
  rect(shapex, shapey, 20, 20);
  }
  fill(255);
  stroke(0);
  if (
    mouseX > shapex2 - 20 &&
    mouseX < shapex2 + 20 &&
    mouseY > shapey2 - 20 &&
    mouseY < shapey2 + 20
  ) 
  {
    overShape2 = true;
    fill(0,0,255);
    if (clicked == false) {
      stroke(0,0,255);
    }
  } else {
    stroke(0);
    overShape2 = false;
  }
  
   if (shapex2 > trayx &&
     shapex2 < trayx + 200 &&
      shapey2 > displayHeight/2 - 250 &&
      shapey2 < displayHeight/2 - 250 + 400) {
    fill (0,255,0);
    stroke(0);
  }
  circle(shapex2,shapey2,20);
  fill(255);
  stroke(0);
  if (
    mouseX > shapex3 - 20 &&
    mouseX < shapex3 + 20 &&
    mouseY > shapey3 - 20 &&
    mouseY < shapey3 + 20
  ) {
    overShape3 = true;
    fill(0,0,255);
    if (clicked == false) {
      stroke(0,0,255);
    }
  } else {
    stroke(0);
    overShape3 = false;
  }
  
   if (shapex3 > trayx &&
     shapex3 < trayx + 200 &&
      shapey3 > displayHeight/2 - 250 &&
      shapey3 < displayHeight/2 - 250 + 400) {
    fill (0,255,0);
    stroke(0);
  }
  triangle(shapex3,shapey3, shapex3+20, shapey3+20, shapex3+20, shapey3-20);
  fill(255);
  stroke(0);
  if (
    mouseX > shapex4 - 20 &&
    mouseX < shapex4 + 20 &&
    mouseY > shapey4 - 20 &&
    mouseY < shapey4 + 20
  ) {
    overShape4 = true;
    fill(0,0,255);
    if (clicked == false) {
      stroke(0,0,255);
    }
  } else {
    stroke(0);
    overShape4 = false;
    
    
  }
   if (shapex4 > trayx &&
     shapex4 < trayx + 200 &&
      shapey4 > displayHeight/2 - 250 &&
      shapey4 < displayHeight/2 - 250 + 400) {
    fill (0,255,0);
    stroke(0);
  }
  circle(shapex4,shapey4,20);
  fill(255);
  stroke(0);
  if (
    mouseX > shapex5 - 20 &&
    mouseX < shapex5 + 20 &&
    mouseY > shapey5 - 20 &&
    mouseY < shapey5 + 20
  ) {
    overShape5 = true;
    fill(0,0,255);
    if (clicked == false) {
      stroke(0,0,255);
    }
  } else {
    stroke(0);
    overShape5 = false;
    
    
  }
   if (shapex5 > trayx &&
     shapex5 < trayx + 200 &&
      shapey5 > displayHeight/2 - 250 &&
      shapey5 < displayHeight/2 - 250 + 400) {
    fill (0,255,0);
    stroke(0);
  }
  rect(shapex5,shapey5,40,15);
  fill(255);
  stroke(0);
  if (
    mouseX > shapex6 - 20 &&
    mouseX < shapex6 + 20 &&
    mouseY > shapey6 - 20 &&
    mouseY < shapey6 + 20
  ) {
    overShape6 = true;
    fill(0,0,255);
    if (clicked == false) {
      stroke(0,0,255);
    }
  } else {
    stroke(0);
    overShape6 = false;
    
    
  }
   if (shapex6 > trayx &&
     shapex6 < trayx + 200 &&
      shapey6 > displayHeight/2 - 250 &&
      shapey6 < displayHeight/2 - 250 + 400) {
    fill (0,255,0);
    stroke(0);
  }
  rect(shapex6,shapey6, 20,20);
  fill(255);
  stroke(0);
  if (
    mouseX > shapex7 - 20 &&
    mouseX < shapex7 + 20 &&
    mouseY > shapey7 - 20 &&
    mouseY < shapey7 + 20
  ) {
    overShape7 = true;
    fill(0,0,255);
    if (clicked == false) {
      stroke(0,0,255);
    }
  } else {
    stroke(0);
    overShape7 = false;
    
    
  }
   if (shapex7 > trayx &&
     shapex7 < trayx + 200 &&
      shapey7 > displayHeight/2 - 250 &&
      shapey7 < displayHeight/2 - 250 + 400) {
    fill (0,255,0);
    stroke(0);
  }
  triangle(shapex7,shapey7, shapex7+15, shapey7+15, shapex7+15, shapey7-15);
  fill(255)
  stroke(0)
  if (
    mouseX > shapex8 - 20 &&
    mouseX < shapex8 + 20 &&
    mouseY > shapey8 - 20 &&
    mouseY < shapey8 + 20
  ) {
    overShape8 = true;
    fill(0,0,255);
    if (clicked == false) {
      stroke(0,0,255);
    }
  } else {
    stroke(0);
    overShape8 = false;
    
    
  }
   if (shapex8 > trayx &&
     shapex8 < trayx + 200 &&
      shapey8 > displayHeight/2 - 250 &&
      shapey8 < displayHeight/2 - 250 + 400) {
    fill (0,255,0);
    stroke(0);
  }
  rect(shapex8,shapey8,15,40);
  fill(255);
  stroke(0);
  if (
    mouseX > shapex9 - 20 &&
    mouseX < shapex9 + 20 &&
    mouseY > shapey9 - 20 &&
    mouseY < shapey9 + 20
  ) {
    overShape9 = true;
    fill(0,0,255);
    if (clicked == false) {
      stroke(0,0,255);
    }
  } else {
    stroke(0);
    overShape9 = false;
    
    
  }
   if (shapex9 > trayx &&
     shapex9 < trayx + 200 &&
      shapey9 > displayHeight/2 - 250 &&
      shapey9 < displayHeight/2 - 250 + 400) {
    fill (0,255,0);
    stroke(0);
  }
  circle(shapex9, shapey9,20);
  fill(255);
  stroke(0);
  if (
    mouseX > shapex10 - 20 &&
    mouseX < shapex10 + 20 &&
    mouseY > shapey10 - 20 &&
    mouseY < shapey10 + 20
  ) {
    overShape10 = true;
    fill(0,0,255);
    if (clicked == false) {
      stroke(0,0,255);
    }
  } else {
    stroke(0);
    overShape10 = false;
    
    
  }
   if (shapex10 > trayx &&
     shapex10 < trayx + 200 &&
      shapey10 > displayHeight/2 - 250 &&
      shapey10 < displayHeight/2 - 250 + 400) {
    fill (0,255,0);
    stroke(0);
  }
  rect(shapex10,shapey10,20,20);
  fill(255);
  stroke(0);
  if (
    mouseX > shapex11 - 20 &&
    mouseX < shapex11 + 20 &&
    mouseY > shapey11 - 20 &&
    mouseY < shapey11 + 20
  ) {
    overShape11 = true;
    fill(0,0,255);
    if (clicked == false) {
      stroke(0,0,255);
    }
  } else {
    stroke(0);
    overShape11 = false;
    
    
  }
   if (shapex11 > trayx &&
     shapex11 < trayx + 200 &&
      shapey11 > displayHeight/2 - 250 &&
      shapey11 < displayHeight/2 - 250 + 400) {
    fill (0,255,0);
    stroke(0);
  }
  rect(shapex11,shapey11,20,20);
  fill(255);
  stroke(0);
  if (
    mouseX > shapex12 - 20 &&
    mouseX < shapex12 + 20 &&
    mouseY > shapey12 - 20 &&
    mouseY < shapey12 + 20
  ) {
    overShape12 = true;
    fill(0,0,255);
    if (clicked == false) {
      stroke(0,0,255);
    }
  } else {
    stroke(0);
    overShape12 = false;
    
    
  }
   if (shapex12 > trayx &&
     shapex12 < trayx + 200 &&
      shapey12 > displayHeight/2 - 250 &&
      shapey12 < displayHeight/2 - 250 + 400) {
    fill (0,255,0);
    stroke(0);
  }
  circle(shapex12,shapey12,20);
  fill(255);
  stroke(0);
  if (
    mouseX > shapex13 - 20 &&
    mouseX < shapex13 + 20 &&
    mouseY > shapey13 - 20 &&
    mouseY < shapey13 + 20
  ) {
    overShape13 = true;
    fill(0,0,255);
    if (clicked == false) {
      stroke(0,0,255);
    }
  } else {
    stroke(0);
    overShape13 = false;
    
    
  }
   if (shapex13 > trayx &&
     shapex13 < trayx + 200 &&
      shapey13 > displayHeight/2 - 250 &&
      shapey13 < displayHeight/2 - 250 + 400) {
    fill (0,255,0);
    stroke(0);
  }
  triangle(shapex13,shapey13, shapex13+20, shapey13+20, shapex13+20, shapey13-20);
  fill(255);
  stroke(0);
  if (
    mouseX > shapex14 - 20 &&
    mouseX < shapex14 + 20 &&
    mouseY > shapey14 - 20 &&
    mouseY < shapey14 + 20
  ) {
    overShape14 = true;
    fill(0,0,255);
    if (clicked == false) {
      stroke(0,0,255);
    }
  } else {
    stroke(0);
    overShape14 = false;
    
    
  }
   if (shapex14 > trayx &&
     shapex14 < trayx + 200 &&
      shapey14 > displayHeight/2 - 250 &&
      shapey14 < displayHeight/2 - 250 + 400) {
    fill (0,255,0);
    stroke(0);
  }
  circle(shapex14,shapey14,20);
  fill(255);
  stroke(0);
  if (
    mouseX > shapex15 - 20 &&
    mouseX < shapex15 + 20 &&
    mouseY > shapey15 - 20 &&
    mouseY < shapey15 + 20
  ) {
    overShape15 = true;
    fill(0,0,255);
    if (clicked == false) {
      stroke(0,0,255);
    }
  } else {
    stroke(0);
    overShape15 = false;
    
    
  }
   if (shapex15 > trayx &&
     shapex15 < trayx + 200 &&
      shapey15 > displayHeight/2 - 250 &&
      shapey15 < displayHeight/2 - 250 + 400) {
    fill (0,255,0);
    stroke(0);
  }
  rect(shapex15,shapey15,40,15);
  fill(255);
  stroke(0);
  if (
    mouseX > shapex16 - 20 &&
    mouseX < shapex16 + 20 &&
    mouseY > shapey16 - 20 &&
    mouseY < shapey16 + 20
  ) {
    overShape16 = true;
    fill(0,0,255);
    if (clicked == false) {
      stroke(0,0,255);
    }
  } else {
    stroke(0);
    overShape16 = false;
    
    
  }
   if (shapex16 > trayx &&
     shapex16 < trayx + 200 &&
      shapey16 > displayHeight/2 - 250 &&
      shapey16 < displayHeight/2 - 250 + 400) {
    fill (0,255,0);
    stroke(0);
  }
  rect(shapex16,shapey16, 20,20);
  fill(255);
  stroke(0);
  if (
    mouseX > shapex17 - 20 &&
    mouseX < shapex17 + 20 &&
    mouseY > shapey17 - 20 &&
    mouseY < shapey17 + 20
  ) {
    overShape17 = true;
    fill(0,0,255);
    if (clicked == false) {
      stroke(0,0,255);
    }
  } else {
    stroke(0);
    overShape17 = false;
    
    
  }
   if (shapex17 > trayx &&
     shapex17 < trayx + 200 &&
      shapey17 > displayHeight/2 - 250 &&
      shapey17 < displayHeight/2 - 250 + 400) {
    fill (0,255,0);
    stroke(0);
  }
  triangle(shapex17,shapey17, shapex17+15, shapey17+15, shapex17+15, shapey17-15);
  fill(255);
  stroke(0);
  if (
    mouseX > shapex18 - 20 &&
    mouseX < shapex18 + 20 &&
    mouseY > shapey18 - 20 &&
    mouseY < shapey18 + 20
  ) {
    overShape18 = true;
    fill(0,0,255);
    if (clicked == false) {
      stroke(0,0,255);
    }
  } else {
    stroke(0);
    overShape18 = false;
    
    
  }
   if (shapex18 > trayx &&
     shapex18 < trayx + 200 &&
      shapey18 > displayHeight/2 - 250 &&
      shapey18 < displayHeight/2 - 250 + 400) {
    fill (0,255,0);
    stroke(0);
  }
  rect(shapex18,shapey18,15,40);
  fill(255);
  stroke(0);
  if (
    mouseX > shapex19 - 20 &&
    mouseX < shapex19 + 20 &&
    mouseY > shapey19 - 20 &&
    mouseY < shapey19 + 20
  ) {
    overShape19 = true;
    fill(0,0,255);
    if (clicked == false) {
      stroke(0,0,255);
    }
  } else {
    stroke(0);
    overShape19 = false;
    
    
  }
   if (shapex19 > trayx &&
     shapex19 < trayx + 200 &&
      shapey19 > displayHeight/2 - 250 &&
      shapey19 < displayHeight/2 - 250 + 400) {
    fill (0,255,0);
    stroke(0);
  }
  circle(shapex19, shapey19,20);
  fill(255);
  stroke(0);
  if (
    mouseX > shapex20 &&
    mouseX < shapex20 + 20 &&
    mouseY > shapey20 &&
    mouseY < shapey20 + 20
  ) {
    overShape20 = true;
    fill(0,0,255);
    if (clicked == false) {
      stroke(0,0,255);
    }
  } else {
    stroke(0);
    overShape20 = false;
    
    
  }
   if (shapex20 > trayx &&
     shapex20 < trayx + 200 &&
      shapey20 > displayHeight/2 - 250 &&
      shapey20 < displayHeight/2 - 250 + 400) {
    fill (0,255,0);
    stroke(0);
  }
  rect(shapex20,shapey20,20,20);
  fill(255);
  stroke(0);
  ++scoreSubtractor;
if (
    mouseX > displayWidth - 175 &&
    mouseX < displayWidth &&
    mouseY > displayHeight - 175 &&
    mouseY < displayHeight
  ) {
    overHelp = true;
} else {
  overHelp = false;
}
if (
    mouseX > 0 &&
    mouseX < 175 &&
    mouseY > displayHeight - 175 &&
    mouseY < displayHeight
  ) {
    overHome = true;
} else {
  overHome = false;
}
  if (mouseX >= 20 && mouseX <= 320 &&
     mouseY >= 525 && mouseY <= 675 && ending) {
      overReset = true;
  } else {
    overReset = false;
  }
    if (mouseX >= displayWidth - 320 && mouseX <= displayWidth - 170 &&
     mouseY >= 525 && mouseY <= 675) {
      overExit = true;
    } else {
      overExit = false;
    }
  if (placed && placed2 && placed3 && placed4 && placed5 && placed6 && placed7 && placed8 && placed9 && placed10 && placed11 && placed12 && placed13 && placed14 && placed15 && placed16 && placed17 && placed18 && placed19 && placed20 || ending == true) {
    endScreen();
  }
}


function mousePressed() {
  if (overShape == true) {
    clicked = true;
    xOffset = mouseX - shapex;
    yOffset = mouseY - shapey;
  } else {
    clicked = false;
  }
  
  if (overShape2 == true) {
    clicked2 = true;
    xOffset = mouseX - shapex2;
    yOffset = mouseY - shapey2;
  } else {
    clicked2 = false;
  }
  if (overShape3 == true) {
    clicked3 = true;
    xOffset = mouseX - shapex3;
    yOffset = mouseY - shapey3;
  } else {
    clicked3 = false;
  }
  if (overShape4 == true) {
    clicked4 = true;
    xOffset = mouseX - shapex4;
    yOffset = mouseY - shapey4;
  } else {
    clicked4 = false;
  }
  if (overShape5 == true) {
    clicked5 = true;
    xOffset = mouseX - shapex5;
    yOffset = mouseY - shapey5;
  } else {
    clicked5 = false;
  }
  if (overShape6 == true) {
    clicked6 = true;
    xOffset = mouseX - shapex6;
    yOffset = mouseY - shapey6;
  } else {
    clicked6 = false;
  }
  if (overShape7 == true) {
    clicked7 = true;
    xOffset = mouseX - shapex7;
    yOffset = mouseY - shapey7;
  } else {
    clicked7 = false;
  }
  if (overShape8 == true) {
    clicked8 = true;
    xOffset = mouseX - shapex8;
    yOffset = mouseY - shapey8;
  } else {
    clicked8 = false;
  }
  if (overShape9 == true) {
    clicked9 = true;
    xOffset = mouseX - shapex9;
    yOffset = mouseY - shapey9;
  } else {
    clicked9 = false;
  }
  if (overShape10 == true) {
    clicked10 = true;
    xOffset = mouseX - shapex10;
    yOffset = mouseY - shapey10;
  } else {
    clicked10 = false;
  }
  if (overShape11 == true) {
    clicked11 = true;
    xOffset = mouseX - shapex11;
    yOffset = mouseY - shapey11;
  } else {
    clicked11 = false;
  }
  if (overShape12 == true) {
    clicked12 = true;
    xOffset = mouseX - shapex12;
    yOffset = mouseY - shapey12;
  } else {
    clicked12 = false;
  }
  if (overShape13 == true) {
    clicked13 = true;
    xOffset = mouseX - shapex13;
    yOffset = mouseY - shapey13;
  } else {
    clicked13 = false;
  }
  if (overShape14 == true) {
    clicked14 = true;
    xOffset = mouseX - shapex14;
    yOffset = mouseY - shapey14;
  } else {
    clicked14 = false;
  }
  if (overShape15 == true) {
    clicked15 = true;
    xOffset = mouseX - shapex15;
    yOffset = mouseY - shapey15;
  } else {
    clicked15 = false;
  }
  if (overShape16 == true) {
    clicked16 = true;
    xOffset = mouseX - shapex16;
    yOffset = mouseY - shapey16;
  } else {
    clicked16 = false;
  }
  if (overShape17 == true) {
    clicked17 = true;
    xOffset = mouseX - shapex17;
    yOffset = mouseY - shapey17;
  } else {
    clicked17 = false;
  }
  if (overShape18 == true) {
    clicked18 = true;
    xOffset = mouseX - shapex18;
    yOffset = mouseY - shapey18;
  } else {
    clicked18 = false;
  }
  if (overShape19 == true) {
    clicked19 = true;
    xOffset = mouseX - shapex19;
    yOffset = mouseY - shapey19;
  } else {
    clicked19 = false;
  }
  if (overShape20 == true) {
    clicked20 = true;
    xOffset = mouseX - shapex20;
    yOffset = mouseY - shapey20;
  } else {
    clicked20 = false;
  }
}


function mouseDragged() {
  if (clicked && placed == false) {
    shapex = mouseX - xOffset;
    shapey = mouseY - yOffset;
  }
  if (clicked2 && placed2 == false) {
    shapex2 = mouseX - xOffset;
    shapey2 = mouseY - yOffset;
  }
  if (clicked3 && placed3 == false) {
    shapex3 = mouseX - xOffset;
    shapey3 = mouseY - yOffset;
  }
  if (clicked4 && placed4 == false) {
    shapex4 = mouseX - xOffset;
    shapey4 = mouseY - yOffset;
  }
  if (clicked5 && placed5 == false) {
    shapex5 = mouseX - xOffset;
    shapey5 = mouseY - yOffset;
  }
  if (clicked6 && placed6 == false) {
    shapex6 = mouseX - xOffset;
    shapey6 = mouseY - yOffset;
  }
  if (clicked7 && placed7 == false) {
    shapex7 = mouseX - xOffset;
    shapey7 = mouseY - yOffset;
  }
  if (clicked8 && placed8 == false) {
    shapex8 = mouseX - xOffset;
    shapey8 = mouseY - yOffset;
  }
  if (clicked9 && placed9 == false) {
    shapex9 = mouseX - xOffset;
    shapey9 = mouseY - yOffset;
  }
  if (clicked10 && placed10 == false) {
    shapex10 = mouseX - xOffset;
    shapey10 = mouseY - yOffset;
  }
  if (clicked11 && placed11 == false) {
    shapex11 = mouseX - xOffset;
    shapey11 = mouseY - yOffset;
  }
  if (clicked12 && placed12 == false) {
    shapex12 = mouseX - xOffset;
    shapey12 = mouseY - yOffset;
  }
  if (clicked13 && placed13 == false) {
    shapex13 = mouseX - xOffset;
    shapey13 = mouseY - yOffset;
  }
  if (clicked14 && placed14 == false) {
    shapex14 = mouseX - xOffset;
    shapey14 = mouseY - yOffset;
  }
  if (clicked15 && placed15 == false) {
    shapex15 = mouseX - xOffset;
    shapey15 = mouseY - yOffset;
  }
  if (clicked16 && placed16 == false) {
    shapex16 = mouseX - xOffset;
    shapey16 = mouseY - yOffset;
  }
  if (clicked17 && placed17 == false) {
    shapex17 = mouseX - xOffset;
    shapey17 = mouseY - yOffset;
  }
  if (clicked18 && placed18 == false) {
    shapex18 = mouseX - xOffset;
    shapey18 = mouseY - yOffset;
  }
  if (clicked19 && placed19 == false) {
    shapex19 = mouseX - xOffset;
    shapey19 = mouseY - yOffset;
  }
  if (clicked20 && placed20 == false) {
    shapex20 = mouseX - xOffset;
    shapey20 = mouseY - yOffset;
  }
}

function mouseReleased() {
  locked = false;
  if(clickedHelp){
    runDemo = true;
    clickedHelp = false;
  }
  if (shapex > trayx &&
     shapex < trayx + 200 &&
      shapey > displayHeight/2 - 250 &&
      shapey < displayHeight/2 - 250 + 400 &&
     placed == false) {
    placed = true;
    ding.play();
    shapex = Object.freeze(shapex);
    shapey = Object.freeze(shapey);
    if (scoreSubtractor < 2000) {
     score = score + 3000 - scoreSubtractor;
       scoreSubtractor = 0;
  } else {
    score = score + 500;
     scoreSubtractor = 0;
  }
  }
    if (shapex2 > trayx &&
     shapex2 < trayx + 200 &&
      shapey2 > displayHeight/2 - 250 &&
      shapey2 < displayHeight/2 - 250 + 400 &&
       placed2 == false) {
      placed2 = true;
      ding.play();
    if (scoreSubtractor < 2000) {
     score = score + 3000 - scoreSubtractor;
       scoreSubtractor = 0;
  } else {
    score = score + 500;
     scoreSubtractor = 0;
  }
  }
    if (shapex3 > trayx &&
     shapex3 < trayx + 200 &&
      shapey3 > displayHeight/2 - 250 &&
      shapey3 < displayHeight/2 - 250 + 400 &&
       placed3 == false) {
      placed3 = true;
      ding.play();
    if (scoreSubtractor < 2000) {
     score = score + 3000 - scoreSubtractor;
       scoreSubtractor = 0;
  } else {
    score = score + 500;
     scoreSubtractor = 0;
  }
    }
    if (shapex4 > trayx &&
     shapex4 < trayx + 200 &&
      shapey4 > displayHeight/2 - 250 &&
      shapey4 < displayHeight/2 - 250 + 400 &&
       placed4 == false) {
      placed4 = true;
      ding.play();
    if (scoreSubtractor < 2000) {
     score = score + 3000 - scoreSubtractor;
       scoreSubtractor = 0;
  } else {
    score = score + 500;
     scoreSubtractor = 0;
  }
    }
    if (shapex5 > trayx &&
     shapex5 < trayx + 200 &&
      shapey5 > displayHeight/2 - 250 &&
      shapey5 < displayHeight/2 - 250 + 400 &&
       placed5 == false) {
      placed5 = true;
      ding.play();
    if (scoreSubtractor < 2000) {
     score = score + 3000 - scoreSubtractor;
       scoreSubtractor = 0;
  } else {
    score = score + 500;
     scoreSubtractor = 0;
  }
  }
    if (shapex6 > trayx &&
     shapex6 < trayx + 200 &&
      shapey6 > displayHeight/2 - 250 &&
      shapey6 < displayHeight/2 - 250 + 400 &&
       placed6 == false) {
      placed6 = true;
      ding.play();
    if (scoreSubtractor < 2000) {
     score = score + 3000 - scoreSubtractor;
       scoreSubtractor = 0;
  } else {
    score = score + 500;
     scoreSubtractor = 0;
  }
  }
    if (shapex7 > trayx &&
     shapex7 < trayx + 200 &&
      shapey7 > displayHeight/2 - 250 &&
      shapey7 < displayHeight/2 - 250 + 400 &&
       placed7 == false) {
      placed7 = true;
      ding.play();
    if (scoreSubtractor < 2000) {
     score = score + 3000 - scoreSubtractor;
       scoreSubtractor = 0;
  } else {
    score = score + 500;
     scoreSubtractor = 0;
  }
  }
    if (shapex8 > trayx &&
     shapex8 < trayx + 200 &&
      shapey8 > displayHeight/2 - 250 &&
      shapey8 < displayHeight/2 - 250 + 400 &&
       placed8 == false) {
      placed8 = true;
      ding.play();
    if (scoreSubtractor < 2000) {
     score = score + 3000 - scoreSubtractor;
       scoreSubtractor = 0;
  } else {
    score = score + 500;
     scoreSubtractor = 0;
  }
  }
    if (shapex9 > trayx &&
     shapex9 < trayx + 200 &&
      shapey9 > displayHeight/2 - 250 &&
      shapey9 < displayHeight/2 - 250 + 400 &&
       placed9 == false) {
      placed9 = true;
      ding.play();
    if (scoreSubtractor < 2000) {
     score = score + 3000 - scoreSubtractor;
       scoreSubtractor = 0;
  } else {
    score = score + 500;
     scoreSubtractor = 0;
  }
  }
    if (shapex10 > trayx &&
     shapex10 < trayx + 200 &&
      shapey10 > displayHeight/2 - 250 &&
      shapey10 < displayHeight/2 - 250 + 400 &&
       placed10 == false) {
      placed10 = true;
      ding.play();
    if (scoreSubtractor < 2000) {
     score = score + 3000 - scoreSubtractor;
       scoreSubtractor = 0;
  } else {
    score = score + 500;
     scoreSubtractor = 0;
  }
  }
    if (shapex11 > trayx &&
     shapex11 < trayx + 200 &&
      shapey11 > displayHeight/2 - 250 &&
      shapey11 < displayHeight/2 - 250 + 400 &&
       placed11 == false) {
      placed11 = true;
      ding.play();
    if (scoreSubtractor < 2000) {
     score = score + 3000 - scoreSubtractor;
       scoreSubtractor = 0;
  } else {
    score = score + 500;
     scoreSubtractor = 0;
  }
  }
    if (shapex12 > trayx &&
     shapex12 < trayx + 200 &&
      shapey12 > displayHeight/2 - 250 &&
      shapey12 < displayHeight/2 - 250 + 400 &&
       placed12 == false) {
      placed12 = true;
      ding.play();
    if (scoreSubtractor < 2000) {
     score = score + 3000 - scoreSubtractor;
       scoreSubtractor = 0;
  } else {
    score = score + 500;
     scoreSubtractor = 0;
  }
  }
    if (shapex13 > trayx &&
     shapex13 < trayx + 200 &&
      shapey13 > displayHeight/2 - 250 &&
      shapey13 < displayHeight/2 - 250 + 400 &&
       placed13 ==false) {
      placed13 = true;
      ding.play();
    if (scoreSubtractor < 2000) {
     score = score + 3000 - scoreSubtractor;
       scoreSubtractor = 0;
  } else {
    score = score + 500;
     scoreSubtractor = 0;
  }
  }
    if (shapex14 > trayx &&
     shapex14 < trayx + 200 &&
      shapey14 > displayHeight/2 - 250 &&
      shapey14 < displayHeight/2 - 250 + 400 && 
        placed14 == false) {
      placed14 = true;
      ding.play();
    if (scoreSubtractor < 2000) {
     score = score + 3000 - scoreSubtractor;
       scoreSubtractor = 0;
  } else {
    score = score + 500;
     scoreSubtractor = 0;
  }
  }
    if (shapex15 > trayx &&
     shapex15 < trayx + 200 &&
      shapey15 > displayHeight/2 - 250 &&
      shapey15 < displayHeight/2 - 250 + 400 &&
       placed15 == false) {
      placed15 = true;
      ding.play();
    if (scoreSubtractor < 2000) {
     score = score + 3000 - scoreSubtractor;
       scoreSubtractor = 0;
  } else {
    score = score + 500;
     scoreSubtractor = 0;
  }
  }
    if (shapex16 > trayx &&
     shapex16 < trayx + 200 &&
      shapey16 > displayHeight/2 - 250 &&
      shapey16 < displayHeight/2 - 250 + 400 &&
       placed16 == false) {
      placed16 = true;
      ding.play();
    if (scoreSubtractor < 2000) {
     score = score + 3000 - scoreSubtractor;
       scoreSubtractor = 0;
  } else {
    score = score + 500; 
    scoreSubtractor = 0;
  }
  }
    if (shapex17 > trayx &&
     shapex17 < trayx + 200 &&
      shapey17 > displayHeight/2 - 250 &&
      shapey17 < displayHeight/2 - 250 + 400 &&
       placed17 ==false) {
      placed17 = true;
      ding.play();
    if (scoreSubtractor < 2000) {
     score = score + 3000 - scoreSubtractor;
       scoreSubtractor = 0;
  } else {
    score = score + 500;
     scoreSubtractor = 0;
  }
  }
    if (shapex18 > trayx &&
     shapex18 < trayx + 200 &&
      shapey18 > displayHeight/2 - 250 &&
      shapey18 < displayHeight/2 - 250 + 400 &&
       placed18 == false) {
      placed18 = true;
      ding.play();
    if (scoreSubtractor < 2000) {
     score = score + 3000 - scoreSubtractor;
       scoreSubtractor = 0;
  } else {
    score = score + 500;
     scoreSubtractor = 0;
  }
    }
    if (shapex19 > trayx &&
     shapex19 < trayx + 200 &&
      shapey19 > displayHeight/2 - 250 &&
      shapey19 < displayHeight/2 - 250 + 400 && 
        placed19 == false) {
      placed19 = true;
      ding.play();
    if (scoreSubtractor < 2000) {
     score = score + 3000 - scoreSubtractor;
       scoreSubtractor = 0;
  } else {
    score = score + 500;
     scoreSubtractor = 0;
  }
  }
    if (shapex20 > trayx &&
     shapex20 < trayx + 200 &&
      shapey20 > displayHeight/2 - 250 &&
      shapey20 < displayHeight/2 - 250 + 400 &&
       placed20 == false) {
      placed20 = true;
      ding.play();
    if (scoreSubtractor < 2000) {
     score = score + 3000 - scoreSubtractor;
       scoreSubtractor = 0;
  } else {
    score = score + 500;
     scoreSubtractor = 0;
  }
  }
  if (overHelp) {
    runDemo = true;
    clickedHelp = false;
  }
  if (overReset) {  
    resetSketch();
  }
    xOffset = 0;
    yOffset = 0;
}
function gui () {
  fill(0,255,0);
  strokeWeight(15);
  stroke(255);
  if (overHome == false) {
  rect(10, displayHeight - 160, 150, 150, 30);
  } else {
    stroke(0,0,255);
    rect(10, displayHeight - 160, 150, 150, 30);
    stroke(255);
  }
  if (overHelp == false) {
  rect(displayWidth - 160, displayHeight - 160, 150, 150, 30);
  }
  else {
    stroke(0,0,255);
    rect(displayWidth - 160, displayHeight - 160, 150, 150, 30);
    stroke(255);
  }
  image(house, 25, displayHeight - 145, 120, 120);
  image(help, displayWidth - 145, displayHeight - 145, 120, 120);
  rect(displayWidth/2 - 200, 8, 400, 70,30);
  strokeWeight(1);
  stroke(0);
  fill(0);
  textFont(font);
  textAlign(CENTER);
  textSize(50);
  text("Score: " + score, displayWidth/2, 60);
}

function Demo () {
  if (pointerx != rectx - 40 && pointery != recty && phase1 == false) {
  pointerx -= 1.625;
  pointery += 1;
  fill(230)
  } else {
    phase1 = true;
    fill(0,0,255);
  }
  if (phase1 == true && phase2 == false) {
    pointerx += 2;
    rectx += 2;
  } 
    if(rectx > trayx + 50) {
      phase2 = true;
      text("+500", trayx, displayHeight/2 + 250);
      if (ding.isPlaying()) {
      }
      else { ding.play();
           }
      
    }
  if(rectx > trayx &&
     rectx < trayx + 200) {
    fill(0,255,0);
  }
  
  rect(rectx, recty, 20,20);
  if (phase2 == false) {
    image(pointer,pointerx, pointery, 20, 30);
  } else {
    Demo2();
  }
}

function Demo2 () {
  if (pointerx > displayWidth/2 - 200 && phase3 == false) {
  pointerx -= 8;
  fill(230)
  } else {
    phase3 = true;
    fill(0,0,255);
  }
  if (phase3 == true && phase4 == false) {
    pointerx += 8;
    rect2x += 8;
  } 
    if(rect2x > trayx + 100) {
      phase4 = true;
      text("+2000", trayx, displayHeight/2 + 300);
      if (ding.isPlaying()) {
      }
      else { ding.play();
           }
      ++counter;
    }
  if(rect2x > trayx &&
     rect2x < trayx + 200) {
    fill(0,255,0);
  }
  
  if (phase4 == true && counter > 100) {
    runDemo = false;
  }
  rect(rect2x, rect2y, 20,20);
  image(pointer,pointerx, pointery, 20, 30);
}

function endScreen() {
  ending = true;
  background(255,150,150);
  music.stop();
  if (endMusicPlay == false) {
    endMusic.play();
    endMusicPlay = true;
  }
  fill(255,150,150);
  stroke(255);
  strokeWeight(50);
  textFont(font);
  textSize(150);
  text("Good job!", displayWidth/2, 200);
  textSize(100);
  strokeWeight(50);
  text("Final Score: " + score, displayWidth/2, 450);
  fill(0,255,0);
  strokeWeight(15);
  stroke(255);
  if (overReset == true) {
    stroke(0,0,255);
  }
    rect(20, 525, 300, 150, 30);
  stroke(255);
  if (overExit) {
    stroke(0,0,255);
  }
  rect(displayWidth - 320, 525, 300,150, 30);
  stroke(255)
  textSize(50);
  text("Play\nAgain", 165, 585);
  text("Exit", displayWidth - 170, 615);
}

function resetSketch () {
  
   shapex = Math.random() * 150;
 shapey = Math.random() * 150;
 shapex2 = Math.random() * 200;
 shapey2 = Math.random() * 200;
 shapex3 = Math.random() * 250;
 shapey3 = Math.random() * 250;
 shapex4 = Math.random() * 300;
 shapey4 = Math.random() * 300;
 shapex5 = Math.random() * 350;
 shapey5 = Math.random() * 350;
 shapex6 = Math.random() * 400;
 shapey6 = Math.random() * 400;
 shapex7 = Math.random() * 450;
 shapey7 = Math.random() * 450;
 shapex8 = Math.random() * 500;
 shapey8 = Math.random() * 500;
 shapex9 = Math.random() * 550;
 shapey9 = Math.random() * 550;
 shapex10 = Math.random() * 600;
 shapey10 = Math.random() * 600;
 shapex11 = Math.random() * 650;
 shapey11 = Math.random() * 650;
 shapex12 = Math.random() * 700;
 shapey12 = Math.random() * 700;
 shapex13 = Math.random() * 750;
 shapey13 = Math.random() * 750;
 shapex14 = Math.random() * 800;
 shapey14 = Math.random() * 800;
 shapex15 = Math.random() * 850;
 shapey15 = Math.random() * 850;
 shapex16 = Math.random() * 900;
 shapey16 = Math.random() * 900;
 shapex17 = Math.random() * 950;
 shapey17 = Math.random() * 950;
 shapex18 = Math.random() * 1000;
 shapey18 = Math.random() * 1000;
 shapex19 = Math.random() * 950;
 shapey19 = Math.random() * 950;
 shapex20 = Math.random() * 900;
 shapey20 = Math.random() * 900;
 overShape = false;
 overShape2 = false;
 overShape3 = false;
 overShape4 = false;
 overShape5 = false;
 overShape6 = false;
 overShape7 = false;
 overShape8 = false;
 overShape9 = false;
 overShape10 = false;
 overShape11 = false;
 overShape12 = false;
 overShape13 = false;
 overShape14 = false;
 overShape15 = false;
 overShape16 = false;
 overShape17 = false;
 overShape18 = false;
 overShape19 = false;
 overShape20 = false;
 overHelp = false;
 overHome = false;
 clicked = false;
 clicked2 = false;
 clicked3 = false;
 clicked4 = false;
 clicked5 = false;
 clicked6 = false;
 clicked7 = false;
 clicked8 = false;
 clicked9 = false;
 clicked10 = false;
 clicked11 = false;
 clicked12 = false;
 clicked13 = false;
 clicked14 = false;
 clicked15 = false;
 clicked16 = false;
 clicked17 = false;
 clicked18 = false;
 clicked19 = false;
 clicked20 = false;
 clickedHelp = false
 runDemo = false;
 placed = false;
 placed2 = false;
 placed3 = false;
 placed4 = false;
 placed5 = false;
 placed6 = false;
 placed7 = false;
 placed8 = false;
 placed9 = false;
 placed10 = false;
 placed11 = false;
 placed12 = false;
 placed13 = false;
 placed14 = false;
 placed15 = false;
 placed16 = false;
placed17 = false;
placed18 = false;
placed19 = false;
placed20 = false;
xOffset = 0;
yOffset = 0;
score = 0;
scoreSubtractor = 0;
phase1 = false;
phase2 = false;
phase3 = false;
phase4 = false;
counter = 0;
  ending = false;
  overReset = false;
  overExit = false;
}