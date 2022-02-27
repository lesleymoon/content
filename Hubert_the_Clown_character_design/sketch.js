//This is Hubert the Clown! Help Hubert juggle
let amt, startColor, newColor;
let img;
let slider;
function preload() {
  img = loadImage("images/colored-ball.png");
}

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  colorMode(RGB);
  imageMode(CENTER);
  slider = createSlider(0, 360, 10, 40);
  slider.position(10, 10);
  slider.style("width", "80px");
}

function draw() {
  strokeWeight(4);

  let val = slider.value();
  background(val, 50, 100, 10);

  //cursor
  image(img, mouseX, mouseY, 230, 200);

  //ears
  fill(255, 255, 255);
  ellipse(150, 290, 100, 100);

  fill(255, 255, 255);
  ellipse(450, 290, 100, 100);

  push();
  noFill();
  translate(80, 505);
  rotate(-100);
  arc(200, 100, 60, 60, 180, 10);
  pop();

  push();
  noFill();
  translate(556, 90);
  rotate(-270);
  arc(200, 100, 60, 60, 180, 10);
  pop();

  //face shape
  fill(255, 255, 255);
  ellipse(width / 2, 290, 300, 300);

  //hair tuff
  push();
  noFill();
  translate(556, 35);
  rotate(-270);
  arc(100, 250, 30, 10, 200, 0);
  pop();

  push();
  noFill();
  translate(545, 175);
  rotate(-240);
  arc(100, 250, 30, 10, 200, 0);
  pop();

  //eyes
  fill(255, 255, 255);
  ellipse(226, 260, 100, 100);
  ellipse(374, 260, 100, 100);

  fill(0, 0, 0);
  ellipse(226, 260, 65, 65);
  ellipse(374, 260, 65, 65);

  push();
  fill(255, 255, 255);
  noStroke();
  translate(223, 290);
  rotate(-90);
  scale(0.6);
  triangle(30, 75, 58, 20, 86, 75);
  pop();

  push();
  fill(255, 255, 255);

  translate(371, 290);
  noStroke();
  rotate(-90);
  scale(0.6);
  triangle(30, 75, 58, 20, 86, 75);
  pop();

  //sad mouth
  push();
  noFill();
  translate(131, 378);
  rotate(355);
  strokeWeight(4);
  scale(1);
  arc(170, 0, 80, 70, 180, 10);
  pop();

  //mouth
  if (mouseIsPressed) {
    scale(0);
  } else {
    scale(1);
  }

  push();
  noFill();
  translate(518, 520);
  rotate(175);
  strokeWeight(2);
  scale(2);
  arc(100, 100, 80, 70, 180, 10);
  pop();

  //mouth
  push();
  noFill();
  translate(518, 520);
  rotate(175);
  strokeWeight(2);
  scale(2);
  arc(100, 100, 80, 70, 180, 10);
  pop();

  //nose
  if (mouseIsPressed) {
    scale(0);
  } else {
    scale(1);
  }

  fill(208, 22, 0);
  ellipse(width / 2, 330, 110, 110);

  push();
  noStroke();
  fill(255, 255, 255);
  translate(120, -70);
  rotate(20);
  ellipse(270, 320, 20, 30);
  pop();

  //cone hat
  push();
  fill(255, mouseX, mouseY);
  strokeWeight(1.5);
  scale(2.3);
  translate(70, 0);
  triangle(30, 75, 58, 20, 86, 75);
  pop();

  //hair
  push();
  noStroke();
  ellipse(340, 150, 100, 85);
  pop();

  push();
  noStroke();
  ellipse(260, 150, 100, 85);
  pop();

  push();
  noStroke();
  ellipse(200, 170, 60, 45);
  pop();

  push();
  noStroke();
  ellipse(400, 170, 60, 45);
  pop();

  //star
  push();
  fill(mouseY, 22, mouseX);
  translate(295, 50);
  rotate(frameCount / 3.0);
  strokeWeight(0);
  scale(0.25);
  star(0, 0, 80, 100, 40);
  pop();

  push();
  noStroke();
  fill(mouseX, mouseY, 255);
  scale(0.3);
  translate(625, 1100);
  rotate(frameCount / 2.0);
  star(0, 0, 30, 70, 5);
  pop();

  function star(x, y, radius1, radius2, npoints) {
    let angle = 360 / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < 360; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
}
