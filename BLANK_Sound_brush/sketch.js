/* Blank is a non-stop erasable canvas modeled after my visual interpretation of memory storage. Although your beautiful drawings are still there underneath the layers of blankness, they are difficult to retrieve, similar to your memories.

Hover over the canvas to leave your traces and try zooming in and out for distorted memories. Press the keys below and listen to the echoes of your vanishing memories...

  Press + hold key, and drag
 'b' = emotions
 'l' = memorable memories
 'a' = colorful traces
 'n' = colorful boxes
 'k' = corrupted

*/

let osc, playing, freq, amp, reverb;


function setup() {
  let cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
  cnv.mousePressed(playOscillator);
  osc = new p5.Oscillator("sine");
  reverb = new p5.Reverb();
  reverb.process(osc, 3, 2);
}

function playOscillator() {
  osc.start();
  playing = true;
}

function mouseReleased() {
  osc.amp(0, 0.5);
  playing = false;
}

function draw() {
  noStroke();
  let e = random(255);
  let r = random(255);
  let c = random(255);
  let d = random(50, 150);

  //https://p5js.org/reference/#/p5.Oscillator
  push();
  freq = constrain(map(mouseX, 0, width, 100, 500), 100, 500);
  amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);
  pop();

  if (playing) {
    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);
  }

  //https://p5js.org/reference/#/p5.Reverb
  let dryWet = constrain(map(mouseX, 0, width, 0, 1), 0, 1);
  reverb.drywet(dryWet);

  orbitControl();

  //https://p5js.org/examples/form-3d-primitives.html
  push();
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.001);
  noFill();
  translate(0, 0, 0);
  stroke(255);
  strokeWeight(0.05);
  sphere(300);
  pop();

  // circle(mouseX, mouseY, 30);

  if (mouseIsPressed === true && key == "b") {
    fill(e, r, c, d);
    sphere(mouseX - width / 2, mouseY - height / 2, 40);
  }

  if (mouseIsPressed === true && key == "l") {
    fill(255, 0, 0);
    rect(mouseX - width / 2, mouseY - height / 2, 30);
  }

  if (mouseIsPressed === true && key == "a") {
    fill(e, r, c);
  } else if (mouseX >= 100 && mouseX < 200) {
    fill(0);
  } else if (mouseX >= 200) {
    stroke(1);
    noFill();
  }

  if (mouseIsPressed === true && key == "n") {
    
    pop();
    box(mouseX - width / 2, mouseY - height / 2, 30);
    noStroke();
    fill(e, c, d, r);
    push();
    
  } else {
    circle(mouseX - width / 2, mouseY - height / 2, 30);
  }

  if (mouseIsPressed === true && key == "k") {
    fill(e, r, c, d);
    rect(mouseX - width / 2, mouseY - height / 2, e, e);

    // Code borrowed from pashatechnic, Neon Glow
    push();
    blendMode(MULTIPLY);
    stroke(mouseX, 100, 100, 0.1);
    noFill();
    pop();
    
    for (let i = 0; i < 10; i++) {
      sphere(100 - i * 1);
      
    }
    
    push();
    fill(mouseX + 180, 100, 100, 0.1);
    // stroke(0);
    noStroke();
    box(100);
    pop();
  }
}
