/* "They see me rollin', they hatin'" Feb 15, 2022
    originally coded in Processing using Java
    
   Jump over the tacks by pressing any key!
   Choose day or night theme by pressing your mouse for more colors
   
   Improvements I would make - use class to make code more concise
*/

let x = 0;
let cloudX = 0;
let  tack = 0;
let  r;
let  g;
let  b;
let  value = ("#FEEDE4");
let  px, py, vx, vy, ax, ay;
var can_jump = false;

function setup() {
  createCanvas(600, 600);
  ax = 0;
  ay = .32;
  vx = 0;
  vy = 0;
  px = 300;
  py = 200;
}

function animal () {

  print("They see me rollin', they hatin'");

  // center
  ellipseMode(CENTER);
  rectMode(CENTER);

  // ground background
  noStroke();
  background(value);
  fill("#E13626");
  rect(300, 520, 600, 300);

  // cloud left 1
  fill("#2AB0DE");
  ellipse(cloudX + 140, 210, 70, 70);
  ellipse(cloudX + 180, 180, 80, 80);
  ellipse(cloudX + 220, 210, 70, 70);
  rect(cloudX + 185, 215, 80, 60);

  // cloud right 1
  push();
  translate(300, -100);
  fill("#2AB0DE");
  ellipse(cloudX + 140, 200, 70, 70);
  ellipse(cloudX + 180, 170, 80, 80);
  ellipse(cloudX + 220, 200, 70, 70);
  rect(cloudX + 185, 205, 80, 60);
  pop();

  // cloud left 2
  push();
  translate(600, 0);
  fill("#2AB0DE");
  ellipse(cloudX + 140, 210, 70, 70);
  ellipse(cloudX + 180, 180, 80, 80);
  ellipse(cloudX + 220, 210, 70, 70);
  rect(cloudX + 185, 215, 80, 60);
  pop();

  // cloud right 2
  push();
  translate(900, -100);
  fill("#2AB0DE");
  ellipse(cloudX + 140, 200, 70, 70);
  ellipse(cloudX + 180, 170, 80, 80);
  ellipse(cloudX + 220, 200, 70, 70);
  rect(cloudX + 185, 205, 80, 60);
  pop();

  // cloud left 3
  push();
  translate(1200, 0);
  fill("#2AB0DE");
  ellipse(cloudX + 140, 210, 70, 70);
  ellipse(cloudX + 180, 180, 80, 80);
  ellipse(cloudX + 220, 210, 70, 70);
  rect(cloudX + 185, 215, 80, 60);
  pop();

  // cloud right 3
  push();
  translate(1500, -100);
  fill("#2AB0DE");
  ellipse(cloudX + 140, 200, 70, 70);
  ellipse(cloudX + 180, 170, 80, 80);
  ellipse(cloudX + 220, 200, 70, 70);
  rect(cloudX + 185, 205, 80, 60);
  pop();

  // tacks
  for (let i = 0; i < 4000; i = i + 420) {
    fill("#d6cfcb");
    triangle(i + (tack + 10), 450, i + (tack + 40), 450, i + (tack + 25), 420);
  }


  // FROG CAR

  // frog body
  fill("#79C143");
  ellipse(x + 150, py - 280, 200, 200);

  // frog left right
  ellipse(x + 100, py - 360, 105, 105);
  ellipse(x + 200, py - 360, 105, 105);

  // frog smile
  push();
  noFill();
  stroke(0);
  strokeWeight(4);
  arc(x + 150, py - 350, 80, 80, 0, PI);
  pop();

  // frog white eye
  noStroke();
  fill(255);
  ellipse(x + 100, py - 360, 60, 60);
  ellipse(x + 200, py - 360, 60, 60);

  // frog black eye
  fill(0);
  ellipse(x + 115, py - 360, 30, 50);
  ellipse(x + 215, py - 360, 30, 50);

  // black wheel
  fill(0);
  ellipse(x + 70, py - 180, 95, 95);
  ellipse(x + 220, py - 180, 95, 95);

  // white wheel
  fill(255);
  ellipse(x + 70, py - 180, 50, 50);
  ellipse(x + 220, py - 180, 50, 50);


  // DUCK CAR
  push();
  translate(-500, 0);

  // duck body
  fill("#FFCE07");
  ellipse(x + 150, py - 280, 200, 200);

  // duck head
  ellipse(x + 200, py - 360, 150, 150);

  // duck white eye
  noStroke();
  fill(255);
  ellipse(x + 185, py - 370, 60, 60);
  ellipse(x + 260, py - 370, 60, 60);

  // duck black eye
  fill(0);
  ellipse(x + 200, py - 370, 30, 50);
  ellipse(x + 275, py - 370, 30, 50);

  // duck beak
  push();
  fill("#F47820");
  ellipse(x + 255, py - 340, 75, 20);
  pop();

  // black wheel
  fill(0);
  ellipse(x + 70, py - 180, 95, 95);
  ellipse(x + 220, py - 180, 95, 95);

  // white wheel
  fill(255);
  ellipse(x + 70, py - 180, 50, 50);
  ellipse(x + 220, py - 180, 50, 50);
  pop();

  // PINK DUCK CAR
  push();
  translate(-800, 0);

  // duck body
  fill("#ffb6c1");
  ellipse(x + 150, py - 280, 200, 200);

  // duck head
  ellipse(x + 200, py - 360, 150, 150);

  // duck white eye
  noStroke();
  fill(255);
  ellipse(x + 185, py - 370, 60, 60);
  ellipse(x + 260, py - 370, 60, 60);

  // duck black eye
  fill(0);
  ellipse(x + 200, py - 370, 30, 50);
  ellipse(x + 275, py - 370, 30, 50);

  // duck beak
  push();
  fill("#F47820");
  ellipse(x + 255, py - 340, 75, 20);
  pop();

  // black wheel
  fill(0);
  ellipse(x + 70, py - 180, 95, 95);
  ellipse(x + 220, py - 180, 95, 95);

  // white wheel
  fill(255);
  ellipse(x + 70, py - 180, 50, 50);
  ellipse(x + 220, py - 180, 50, 50);
  pop();


  // RANDOM DUCK CAR
  push();
  translate(-1100, 0);

  // duck body
  let r = random(10, 255);
  let g = random(10, 255);
  let b = random(10, 255);
  fill(r, g, b);
  ellipse(x + 150, py - 280, 200, 200);

  // duck head
  ellipse(x + 200, py - 360, 150, 150);

  // duck white eye
  noStroke();
  fill(255);
  ellipse(x + 185, py - 370, 60, 60);
  ellipse(x + 260, py - 370, 60, 60);

  // duck black eye
  fill(0);
  ellipse(x + 200, py - 370, 30, 50);
  ellipse(x + 275, py - 370, 30, 50);

  // duck beak
  push();
  fill("#F47820");
  ellipse(x + 255, py - 340, 75, 20);
  pop();

  // black wheel
  fill(0);
  ellipse(x + 70, py - 180, 95, 95);
  ellipse(x + 220, py - 180, 95, 95);

  // white wheel
  fill(255);
  ellipse(x + 70, py - 180, 50, 50);
  ellipse(x + 220, py - 180, 50, 50);
  pop();

  // animate
  x = x + 1;
  cloudX = cloudX - 1;
  tack = tack - 2;
  r = r - 1;
  g = g - 1;
  b = b - 1;
}

// jumping code borrowed from TfGuy44, https://forum.processing.org/two/discussion/26326/jumping, Feb 15, 2022
function draw() {
  // jump!
  vx += ax;
  vy += ay;
  px += vx;
  py += vy;
  if ( py > height ) {
    py = height;
    vy = 0;
    can_jump = true;
  }
  animal(); 
}
// citation ends

function keyPressed() {
  if ( can_jump ) {
    vy = -14;
    can_jump = false;
  }
}

function mousePressed() {
  if (value == ("#FEEDE4")) {
    // Change value for different colored sky
    value = ("#5a189a");       
  } else {
    value = ("#FEEDE4");
  }
}

function mouseDragged()
{
  value = value + 5;
  if (value > 0) {
    value = ("#0C0C0C");
  }
}