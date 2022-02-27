/* UP - Married Life
I wanted to create a fun and interactive music video for the first 30 seconds of "Married Life," the soundtrack of the movie "UP," with a lot of bright colors! But the other side of "Married Life" that is not seen or heard here is sad, dealing with the loss of the significant other in the married life. I tried to express this as well; read below for an alternate, sad ending.

Click on the balloons to pop them
Drag mouse to create more balloons
Blow into your mic for the spirals
Press key "d" for loss and sadness
or keep looping until balloons fill the sky!
*/

let palette = [
  "#d60a00",
  "#63c1ff",
  "#2845de",
  "#ffc319",
  "#84cf30",
  "#e62080",
  "#ff453d",
  "#eb152b",
  "#ffcc08",
  "#64e3e0",
  "#fc5675",
  "#5480e8",
];
let sky = [
  "#5C9EAD",
  "#326273",
  "#63A3BB",
  "#2DC2BD",
  "#5CA4A9",
  "#9BC1BC",
  "#B1E5F2",
];
let mySound, bgImg;
let sound, amplitude;
let balloons = [];
var time = 0;

function preload() {
  mySound = loadSound("asset/married-life.mp3");
  bgImg = loadImage("asset/up-background.png");
  Img = loadImage("asset/blow.png");
  Img1 = loadImage("asset/1.png");
  Img2 = loadImage("asset/2.png");
  Img3 = loadImage("asset/3.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(6);
  mySound.loop();
  amplitude = new p5.Amplitude();
  amplitude.setInput(mySound);
  amp = new p5.AudioIn();
  amp.start();
  background(0);
  fft = new p5.FFT(0.9, 64);
  fft.setInput(amp);
  y = 0;
  addBalloons(40);
  rectMode(CENTER);
}

function draw() {
  keyTyped();
  image(bgImg, 0, 0, width, height);
  noStroke();
  // background("#5C9EAD");
  colorMode(HSB, 100);

  let level = amplitude.getLevel();
  let size = map(level, 0, 1, 0, 500);

  for (let balloon of balloons) {
    balloon.display();
    balloon.move();
  }

  if (frameCount % 100 == 0) {
    addBalloons(80);
  }

  for (let i = 0; i <= width; i += 50) {
    for (let j = 0; j <= height; j += 50) {
      r = random(255);
      g = random(255);
      b = random(255);
      fill(r, g, b, 100);

      if (mySound.currentTime() < 1) {
        push();
        cursor("asset/house.png");
        // background(255, 2);
        fill(random(palette));
        var x = width * noise(time);
        var y = height * noise(time + 30);
        ellipse(x, y, size, size);
        time = time + 10;
        pop();
        push();
        noFill();
        stroke(random(sky));
        blendMode(OVERLAY);
        strokeWeight(random(0.5, 2));
        ellipse(0, 100, random(0, 400));
        pop();
      } else if (mySound.currentTime() < 2) {
        push();
        noFill();
        // background(255, 2);
        strokeWeight(1);
        stroke(random(palette));
        var x = width * noise(time);
        var y = height * noise(time + 50);
        ellipse(x, y, size, size);
        time = time + 10;
        pop();
      } else if (mySound.currentTime() < 3) {
        push();
        // background(255, 2);
        fill(random(palette));
        var x = width * noise(time);
        var y = height * noise(time + 50);
        ellipse(x, y, size, size);
        time = time + 10;
        pop();
        push();
        noFill();
        stroke(random(sky));
        blendMode(OVERLAY);
        strokeWeight(random(0.5, 2));
        ellipse(600, 580, random(0, 600));
        pop();
      } else if (mySound.currentTime() < 4) {
        push();
        noFill();
        // background(255, 2);
        strokeWeight(1);
        stroke(random(palette));
        var x = width * noise(time);
        var y = height * noise(time + 50);
        ellipse(x, y, size, size);
        time = time + 10;
        pop();
      } else if (mySound.currentTime() < 5) {
        fill(random(palette));
        rect(
          random(windowWidth),
          random(windowHeight),
          random(100),
          random(100)
        );
        fill(random(sky));
        ellipse(random(windowWidth), random(windowHeight), random(size));
        fill(random(palette));

        push();
        noStroke();
        fill(255);

        drawMist(40, 570, 100);
        drawMist(80, 570, 100);
        drawMist(500, 530, 100);
        drawMist(20, 520, 100);
        drawMist(20, 500, 100);
        drawMist(20, 540, 100);
        drawMist(90, 480, 100);
        drawMist(500, 500, 70);
        drawMist(580, 570, 60);
        drawMist(100, 530, 100);
        drawMist(580, 570, 60);
        drawMist(1000, 530, 100);

        drawMist(400, 480, 100);
        drawMist(4000, 500, 70);
        drawMist(6000, 560, 60);
        drawMist(100, 530, 100);
        pop();

        //blow
      } else if (mySound.currentTime() < 6.7) {
        push();
        noFill();
        stroke(random(sky));
        blendMode(LIGHTEST);
        strokeWeight(random(0.5, 2));
        ellipse(0, 100, random(0, 400));
        pop();
        push();
        image(
          Img,
          windowWidth / 2 - 70,
          windowHeight / 2 - 100,
          size + 90,
          size + 40
        );
        pop();
        push();
        noStroke();
        fill(255);
        // drawMist(100, 250, 5);
        // drawMist(400, 280, 5);
        // drawMist(600, 330, 5);
        // drawMist(100, 300, 5);

        drawMist(40, 570, 100);
        drawMist(80, 570, 100);
        drawMist(500, 530, 100);
        drawMist(20, 520, 100);
        drawMist(20, 500, 100);
        drawMist(20, 540, 100);
        drawMist(90, 480, 100);
        drawMist(500, 500, 70);
        drawMist(580, 570, 60);
        drawMist(100, 530, 100);
        drawMist(580, 570, 60);
        drawMist(1000, 530, 100);

        drawMist(400, 480, 100);
        drawMist(4000, 500, 70);
        drawMist(6000, 560, 60);
        drawMist(100, 530, 100);
        pop();

        //blow
      } else if (mySound.currentTime() < 7.5) {
        push();
        noFill();
        stroke(random(sky));
        blendMode(OVERLAY);
        strokeWeight(random(0.5, 1));
        ellipse(0, 100, random(0, 400));
        pop();
        push();
        image(
          Img,
          windowWidth / 2 - 70,
          windowHeight / 2 - 100,
          size + 90,
          size + 40
        );
        pop();
        push();
        noStroke();
        fill(255);
        // drawMist(100, 250, 5);
        // drawMist(400, 280, 5);
        // drawMist(600, 330, 5);
        // drawMist(100, 300, 5);

        drawMist(40, 570, 100);
        drawMist(80, 570, 100);
        drawMist(500, 530, 100);
        drawMist(20, 520, 100);
        drawMist(20, 500, 100);
        drawMist(20, 540, 100);
        drawMist(90, 480, 100);
        drawMist(500, 500, 70);
        drawMist(580, 570, 60);
        drawMist(100, 530, 100);
        drawMist(580, 570, 60);
        drawMist(1000, 530, 100);

        drawMist(400, 480, 100);
        drawMist(4000, 500, 70);
        drawMist(6000, 560, 60);
        drawMist(100, 530, 100);
        pop();

        //3
      } else if (mySound.currentTime() < 9) {
        push();
        image(Img3, windowWidth / 2 - 25, windowHeight / 2 - 100, 60, 70);
        pop();
        push();
        noStroke();
        fill(255);
        // drawMist(100, 250, 5);
        // drawMist(400, 280, 5);
        // drawMist(600, 330, 5);
        // drawMist(100, 300, 5);

        drawMist(40, 570, 100);
        drawMist(80, 570, 100);
        drawMist(500, 530, 100);
        drawMist(20, 520, 100);
        drawMist(20, 500, 100);
        drawMist(20, 540, 100);
        drawMist(90, 480, 100);
        drawMist(500, 500, 70);
        drawMist(580, 570, 60);
        drawMist(100, 530, 100);
        drawMist(580, 570, 60);
        drawMist(1000, 530, 100);

        drawMist(400, 480, 100);
        drawMist(4000, 500, 70);
        drawMist(6000, 560, 60);
        drawMist(100, 530, 100);
        pop();
        //2
      } else if (mySound.currentTime() < 9.5) {
        push();
        image(Img2, windowWidth / 2 - 20, windowHeight / 2 - 100, 60, 60);
        pop();
        push();
        noStroke();
        fill(255);
        // drawMist(100, 250, 5);

        drawMist(40, 570, 100);
        drawMist(80, 570, 100);
        drawMist(500, 530, 100);
        drawMist(20, 520, 100);
        drawMist(20, 500, 100);
        drawMist(20, 540, 100);
        drawMist(90, 480, 100);
        drawMist(500, 500, 70);
        drawMist(580, 570, 60);
        drawMist(100, 530, 100);
        drawMist(580, 570, 60);
        drawMist(1000, 530, 100);

        drawMist(400, 480, 100);
        drawMist(4000, 500, 70);
        drawMist(6000, 560, 60);
        drawMist(100, 530, 100);
        pop();
        //1
      } else if (mySound.currentTime() < 9.8) {
        push();
        image(Img1, windowWidth / 2 - 18, windowHeight / 2 - 100, 45, 45);
        pop();
        push();
        noStroke();
        fill(255);

        drawMist(40, 570, 100);
        drawMist(80, 570, 100);
        drawMist(500, 530, 100);
        drawMist(20, 520, 100);
        drawMist(20, 500, 100);
        drawMist(20, 540, 100);
        drawMist(90, 480, 100);
        drawMist(500, 500, 70);
        drawMist(580, 570, 60);
        drawMist(100, 530, 100);
        drawMist(580, 570, 60);
        drawMist(1000, 530, 100);

        drawMist(400, 480, 100);
        drawMist(4000, 500, 70);
        drawMist(6000, 560, 60);
        drawMist(100, 530, 100);
        pop();
        //spiral
      } else if (mySound.currentTime() < 12.4) {
        var vol = amp.getLevel();
        noFill();
        var spectrum = fft.analyze();
        //Code adapted from winson "https://openprocessing.org/sketch/1136316"
        push();
        var vol = amp.getLevel();
        noFill();
        var spectrum = fft.analyze();
        moveX = map(vol * 2, 0, 0.01, 0, 100);
        noStroke();
        fill(255, 30);
        x = moveX + width / 4;
        translate(width / 2, height / 2);
        rotate(frameCount / 2);
        beginShape();
        for (let i = 0; i < spectrum.length - 10; i++) {
          let x = map(i, 0, spectrum.length - 10, 0, width / 4);
          let y = -map(spectrum[i], 0, 255, 0, 150);
          //rect(x, height, width / spectrum.length, h )
          vertex(x, y);
        }
        endShape();
        //waterfall
      } else if (mySound.currentTime() < 17) {
        fill(random(palette));
        rect(
          random(windowWidth),
          random(windowHeight),
          random(100),
          random(100)
        );
        fill(random(sky));
        ellipse(random(windowWidth), random(windowHeight), random(40));
        fill(random(palette));
        push();
        fill("#232C5E");
        noStroke();
        translate(120, -10);
        beginShape();
        vertex(200, 225);
        vertex(350, 235);
        vertex(350, 680);
        vertex(200, 680);
        endShape(CLOSE);
        pop();

        push();
        fill("#3A48B3");
        noStroke();
        translate(-100, -30);
        beginShape();
        vertex(200, 225);
        vertex(350, 235);
        vertex(350, 680);
        vertex(200, 680);
        endShape(CLOSE);
        pop();

        push();
        fill("#5B6DC8");
        noStroke();
        translate(-50, 6);
        beginShape();
        vertex(200, 225);
        vertex(350, 235);
        vertex(350, 680);
        vertex(200, 680);
        endShape(CLOSE);
        pop();

        push();
        fill("#8CA5DD");
        noStroke();
        translate(50, 13);
        beginShape();
        vertex(200, 225);
        vertex(350, 235);
        vertex(350, 680);
        vertex(200, 680);
        endShape(CLOSE);
        pop();

        push();
        beginShape();
        fill(255);
        noStroke();
        vertex(210, 235);
        vertex(220, 820);
        vertex(230, 240);
        vertex(233, 860);
        vertex(240, 845);
        vertex(255, 800);
        vertex(235, 240);
        vertex(295, 630);
        vertex(305, 242);
        vertex(315, 820);
        vertex(335, 242);
        endShape();
        pop();

        push();
        noStroke();
        fill(255);
        drawMist(400, 560, 100);
        drawMist(400, 530, 70);
        drawMist(600, 570, 60);
        drawMist(100, 530, 100);
        pop();

        //waterfall+spiral
      } else if (mySound.currentTime() < 19) {
        var vol = amp.getLevel();
        noFill();
        var spectrum = fft.analyze();

        push();
        fill("#232C5E");
        noStroke();
        translate(120, -10);
        beginShape();
        vertex(200, 225);
        vertex(350, 235);
        vertex(350, 680);
        vertex(200, 680);
        endShape(CLOSE);
        pop();

        push();
        fill("#3A48B3");
        noStroke();
        translate(-100, -30);
        beginShape();
        vertex(200, 225);
        vertex(350, 235);
        vertex(350, 680);
        vertex(200, 680);
        endShape(CLOSE);
        pop();

        push();
        fill("#5B6DC8");
        noStroke();
        translate(-50, 6);
        beginShape();
        vertex(200, 225);
        vertex(350, 235);
        vertex(350, 680);
        vertex(200, 680);
        endShape(CLOSE);
        pop();

        push();
        fill("#8CA5DD");
        noStroke();
        translate(50, 13);
        beginShape();
        vertex(200, 225);
        vertex(350, 235);
        vertex(350, 680);
        vertex(200, 680);
        endShape(CLOSE);
        pop();

        push();
        beginShape();
        fill(255);
        noStroke();
        vertex(210, 235);
        vertex(220, 820);
        vertex(230, 240);
        vertex(233, 860);
        vertex(240, 845);
        vertex(255, 800);
        vertex(235, 240);
        vertex(295, 630);
        vertex(305, 242);
        vertex(315, 820);
        vertex(335, 242);
        endShape();
        pop();

        push();
        noStroke();
        fill(255);
        drawMist(400, 560, 100);
        drawMist(400, 530, 70);
        drawMist(600, 570, 60);
        drawMist(100, 530, 100);
        pop();
        moveX = map(vol * 2, 0, 0.01, 0, 100);
        noStroke();
        fill(255, 30);
        x = moveX + width / 4;
        translate(width / 2, height / 2);
        rotate(frameCount / 2);
        beginShape();
        for (let i = 0; i < spectrum.length - 10; i++) {
          let x = map(i, 0, spectrum.length - 10, 0, width / 4);
          let y = -map(spectrum[i], 0, 255, 0, 150);
          //rect(x, height, width / spectrum.length, h )
          vertex(x, y);
        }
        endShape();
        //rainbow spiral
      } else if (mySound.currentTime() < 22) {
        var vol = amp.getLevel();
        noFill();
        var spectrum = fft.analyze();
        moveX = map(vol * 2, 0, 0.01, 0, 100);
        noStroke();
        fill(r, g, b, 40);
        x = moveX + width / 4;
        translate(width / 2, height / 2);
        rotate(frameCount / 2);
        beginShape();
        for (let i = 0; i < spectrum.length - 10; i++) {
          let x = map(i, 0, spectrum.length - 10, 0, width / 4);
          let y = -map(spectrum[i], 0, 255, 0, 150);
          //rect(x, height, width / spectrum.length, h )
          vertex(x, y);
        }
        endShape();
      } else if (mySound.currentTime() < 25) {
        fill(random(palette));
        rect(
          random(windowWidth),
          random(windowHeight),
          random(100),
          random(100)
        );
        fill(random(sky));
        ellipse(random(windowWidth), random(windowHeight), random(40));
        fill(random(palette));
      }
    }
  }
}

//Code borrowed from Antman "https://editor.p5js.org/Antman/sketches/i481-XQkK"
function mousePressed() {
  for (let balloon of balloons) {
    balloon.burst();
  }
}

function addBalloons(num) {
  for (let count = 0; count < num; count++) {
    let tempBalloon = new Balloon(
      random(width),
      random(height, height + 150),
      random(palette)
    );
    balloons.push(tempBalloon);
  }
}

function mouseDragged() {
  addBalloons(mouseX, mouseY, random(palette));
}

class Balloon {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.size = 50;
    this.bursted = false;
  }

  display() {
    if (!this.bursted) {
      fill(this.color);
      ellipse(this.x, this.y, this.size);
    }
  }

  move() {
    this.y -= 1;
  }

  burst() {
    let distance = dist(this.x, this.y, mouseX, mouseY);
    if (distance <= this.size / 2) {
      this.bursted = true;
    }
  }
}

function drawMist(x, y, opacity) {
  fill(255, opacity);
  ellipse(x, y, 600, 60);
}

function keyTyped() {
  if (key == "d") {
    background(20, 1);
    blendMode(MULTIPLY);
  } else {
    background(20, 0);
  }
}
