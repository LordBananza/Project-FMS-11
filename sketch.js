function setup() {
  menu();
}
//Daniel's game
var stage = 1;
var score = 0;
var ding;
var help;

//Ashton's game
var borderColor = [0, 1, 2];
var shapeColor = [0, 1];
var score = 0;
var rectWidth = 0;
var rectHeight = 0;
var rectSetup = [0, 0, 0, 0, 0, 0, 0];
var cirSetup = [0, 0, 0, 0, 0, 0];
var elliSetup = [0, 0, 0, 0, 0, 0, 0];
var triSetup = [0, 0, 0];

function draw() {
  if (stage == 3) {
    if (
      mouseX >= displayWidth / 2 - 50 &&
      mouseX <= displayWidth / 2 + 30 &&
      mouseY >= displayHeight - 100 &&
      mouseY <= displayHeight - 60
    ) {
      fill(119, 225, 100, 200);
    } else {
      fill(119, 225, 100);
    }
    if (mouseX >= 0 && mouseX <= 100 && mouseY >= 0 && mouseY <= 100) {
      fill(119, 225, 100, 200);
    } else {
      fill(119, 225, 100);
    }

    rect(rectSetup[0], rectSetup[1], rectSetup[2], rectSetup[3]);
    rect(rectSetup[4], rectSetup[5], rectSetup[2], rectSetup[3]);

    circle(cirSetup[0], cirSetup[1], cirSetup[4]);
    circle(cirSetup[2], cirSetup[3], cirSetup[4]);

    ellipse(elliSetup[0], elliSetup[1], elliSetup[4], elliSetup[5]);
    ellipse(elliSetup[2], elliSetup[3], elliSetup[4], elliSetup[5]);
  }
}

function preload() {
  soundFormats("mp3");
  ding = loadSound("Ding.mp3");
  help = loadImage("Help.png");
  home = loadImage("Home.png")
}

function mouseClicked() {
  if (
    stage == 1 &&
    mouseX > displayWidth / 2 - 125 &&
    mouseX < displayWidth / 2 + 125 &&
    mouseY > displayHeight / 2 - 50 &&
    mouseY < displayHeight / 2 + 50
  ) {
    menu2();
    stage = 2;
  }
  if (stage == 2) {
    if (
      mouseX > displayWidth / 4 &&
      mouseX < displayWidth / 4 + 150 &&
      mouseY > displayHeight / 3 &&
      mouseY < displayHeight / 3 + 100
    ) {
      game1();
      stage = 3;
    } else if (
      mouseX > (2 * displayWidth) / 4 &&
      mouseX < (2 * displayWidth) / 4 + 150 &&
      mouseY > displayHeight / 3 &&
      mouseY < displayHeight / 3 + 100
    ) {
      game2();
      stage = 4;
    } else if (
      mouseX > (3 * displayWidth) / 4 &&
      mouseX < (3 * displayWidth) / 4 + 150 &&
      mouseY > displayHeight / 3 &&
      mouseY < displayHeight / 3 + 100
    ) {
      game3();
      stage = 5;
    } else if (
      mouseX > 0 &&
      mouseX < 100 &&
      mouseY > (4 * displayHeight) / 6 &&
      mouseY < (4 * displayHeight) / 6 + 100
    ) {
      menu();
      stage = 1;
    }
  } else if (stage == 3) {
    if (
      mouseX > 0 &&
      mouseX < 100 &&
      mouseY > (4 * displayHeight) / 6 &&
      mouseY < (4 * displayHeight) / 6 + 100
    ) {
      menu2();
      stage = 2;
    }
  } else if (stage == 4) {
    if (
      mouseX > 0 &&
      mouseX < 100 &&
      mouseY > (4 * displayHeight) / 6 &&
      mouseY < (4 * displayHeight) / 6 + 100
    ) {
      menu2();
      stage = 2;
    } else if (
      mouseX > displayWidth - 100 &&
      mouseX < displayWidth &&
      mouseY > (4 * displayHeight) / 6 &&
      mouseY < (4 * displayHeight) / 6 + 100
    ) {
      helpGame2();
      stage = 6;
    } else if (
      mouseX > displayWidth / 2 - 100 &&
      mouseX < displayWidth / 2 + 100 &&
      mouseY > (4 * displayHeight) / 6 &&
      mouseY < (4 * displayHeight) / 6 + 100
    ) {
      checkTrace();
    }
  } else if (stage == 5) {
    if (
      mouseX > 0 &&
      mouseX < 100 &&
      mouseY > (4 * displayHeight) / 6 &&
      mouseY < (4 * displayHeight) / 6 + 100
    ) {
      menu2();
      stage = 2;
    }
  } else if (stage == 6) {
    if (
      mouseX > 0 &&
      mouseX < 100 &&
      mouseY > (4 * displayHeight) / 6 &&
      mouseY < (4 * displayHeight) / 6 + 100
    ) {
      game2();
      stage = 4;
    }
  }
}
var x;
function mouseDragged() {
  if (stage == 4) {
    if (mouseY < displayHeight / 2 + 100) {
      x = line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }
}

function menu() {
  clear();
  createCanvas(displayWidth, displayHeight);
  background(255, 105, 97);
  fill(119, 225, 100);
  strokeWeight(2);
  rect(displayWidth / 2 - 125, displayHeight / 2 - 50, 250, 100, 20);
  textFont("Helvetica");
  textSize(50);
  textAlign(CENTER, CENTER);
  fill("Purple");
  text("Start", displayWidth / 2, displayHeight / 2);
  textSize(70);
  text("Project", displayWidth / 2, displayHeight / 6);
  text("FMS", displayWidth / 2, displayHeight / 4);
}

function menu2() {
  clear();
  background(255, 105, 97);
  fill("purple");
  textSize(70);
  strokeWeight(2);
  text("Select a game", displayWidth / 2, displayHeight / 6);
  fill(119, 225, 100);
  rect(displayWidth / 4, displayHeight / 3, 150, 100, 20);
  rect((2 * displayWidth) / 4, displayHeight / 3, 150, 100, 20);
  rect((3 * displayWidth) / 4, displayHeight / 3, 150, 100, 20);
  rect(0, (4 * displayHeight) / 6, 100, 100, 30);
  textSize(30);
  fill("purple");
  text("Game 1", displayWidth / 4 + 75, displayHeight / 3 + 50);
  text("Game 2", (2 * displayWidth) / 4 + 75, displayHeight / 3 + 50);
  text("Game 3", (3 * displayWidth) / 4 + 75, displayHeight / 3 + 50);
  image(home, 15, (4 * displayHeight) / 6 + 15, 70, 70);
}

function game1() {
  window.open("https://editor.p5js.org/amitch54/full/VPFCLRPsa")
/*
  clear();
  background(255, 105, 97);
  fill("purple");
  fill(119, 225, 100);
  rect(0, (4 * displayHeight) / 6, 100, 100, 30);
  rect(displayWidth / 2 - 100, 1, 200, 50, 0);
  rect(displayWidth / 2 - 50, displayHeight - 100, 80, 40);
  fill("purple");
  image(home, 15, (4 * displayHeight) / 6 + 15, 70, 70);
  text("Score: " + score, displayWidth / 2, 25);
  textSize(12);
  text("Reset", displayWidth / 2 -15, displayHeight - 75);
  textSize(30);
  text("Match The Shapes!", displayWidth / 2, displayHeight/6)

  rectSetup[2] = random(150, 250);
  rectSetup[3] = random(150, 250);
  rectSetup[0] = random(100, displayWidth - rectSetup[2]);
  rectSetup[1] = random(100, displayHeight - 110 - rectSetup[3]);
  rectSetup[4] = random(100, displayWidth - rectSetup[2]);
  rectSetup[5] = random(100, displayHeight - 110 - rectSetup[3]);

  cirSetup[4] = random(100, 200);
  cirSetup[0] = random(100 + cirSetup[4], displayWidth - cirSetup[4]);
  cirSetup[1] = random(100 + cirSetup[4], displayHeight - 110 - cirSetup[4]);
  cirSetup[2] = random(100 + cirSetup[4], displayWidth - cirSetup[4]);
  cirSetup[3] = random(100 + cirSetup[4], displayHeight - 110 - cirSetup[4]);

  elliSetup[4] = random(100, 250);
  elliSetup[5] = random(100, 250);
  elliSetup[0] = random(100 + elliSetup[4], displayWidth - elliSetup[4]);
  elliSetup[1] = random(100 + elliSetup[5], displayHeight - 110 - elliSetup[5]);
  elliSetup[2] = random(100 + elliSetup[4], displayWidth - elliSetup[4]);
  elliSetup[3] = random(100 + elliSetup[5], displayHeight - 110 - elliSetup[5]);
  */
}

function game2() {
  clear();
  background(255, 105, 97);
  textSize(50);
  strokeWeight(2);
  fill("purple");
  text("Tracing", displayWidth / 2, displayHeight / 6);
  fill(119, 225, 100);
  rect(0, (4 * displayHeight) / 6, 100, 100, 30);
  rect(displayWidth - 100, (4 * displayHeight) / 6, 100, 100, 30);
  rect(displayWidth / 2 - 100, 1, 200, 50, 0);
  rect(displayWidth / 2 - 100, (4 * displayHeight) / 6, 200, 100, 30);
  fill("purple");
  textSize(30);
  image(home, 15, (4 * displayHeight) / 6 + 15, 70, 70);
  image(help, displayWidth - 85, (4 * displayHeight) / 6 + 15, 70, 70);
  text("Score: " + score, displayWidth / 2 , 25);
  text("Done?", displayWidth / 2, (4 * displayHeight) / 6 + 50);
  textSize(150);
  strokeWeight(10);
  words = ["A", "B", "C", "D"];
  word = random(words);
  text(word, displayWidth / 2, displayHeight / 2);
  if( score >= 500)
    {
      endGame2()
      score = 0;
    }
}
function endGame2()
{
  clear();
  background(255,105,97)
  fill(119, 225, 100);
  rect(0, (4 * displayHeight) / 6, 100, 100, 30);
  fill("purple");
  text("You won!!", displayWidth / 2, displayHeight / 6);
  textSize(30);
  image(home, 15, (4 * displayHeight) / 6 + 15, 70, 70);
  ding.play()
}

function helpGame2() {
  clear();
  background(255, 105, 97);
  textSize(50);
  strokeWeight(1);
  fill(119, 225, 100);
  rect(0, (4 * displayHeight) / 6, 100, 100, 30);
  fill("purple");
  text("Help Game 2", displayWidth / 2, displayHeight / 6);
  textSize(30);
  image(home, 15, (4 * displayHeight) / 6 + 15, 70, 70);
  text(
    "A random letter will appear \ntrace it\nhold down left click and drag\nclick done to get your score",
    displayWidth / 2,
    (2 * displayHeight) / 6
  );
}

function checkTrace() {
  
  text("", displayWidth / 2, displayHeight / 2);
  print(x);
  print("pmouseX: " + x.pmouseX)
  print("pmouseY: " + x.pmouseY)
  print("pwinMouseX: " + x.pwinMouseX)
  print("pwinMouseY: " + x.pwinMouseY)
  print("mouseX: " + x.mouseX)
  print("mouseY: " + x.mouseY)
  print("winMouseX: " + x.winMouseX)
  print("winMouseY: " + x.winMouseY)
  print(displayWidth)
  print(displayHeight)
  ding.play()
  score += 100
  game2()
}

function game3() {
  window.open("https://editor.p5js.org/dwfishe1/full/aGd-QPiPo")
  /*
  clear();
  background(255, 105, 97);
  fill("purple");
  text("Game 3", 300, 200);
  fill(119, 225, 100);
  rect(0, (4 * displayHeight) / 6, 100, 100, 30);
  fill("purple");
  image(home, 15, (4 * displayHeight) / 6 + 15, 70, 70);
  */
}
