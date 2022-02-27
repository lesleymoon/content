/* "Counting sheep" Jan 28, 2022
    originally coded in Processing using Java
    
   Yellow sheep follows mouseX - move your mouse left and right
   Blue and pink sheep follow mouseY - move your mouse up and down
   
   Improvements I would make - use class to make code more concise
*/

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("#4354A4");
  noStroke();
  fill("#A0CE62");
  rect(300, 570, 600, 300);
  
  // stars
  stroke(255);
  strokeWeight(3);
  noFill();
  ellipse(60, 40, 5, 5);
  ellipse(160, 180, 5, 5);
  ellipse(70, 230, 5, 5);
  ellipse(300, 80, 5, 5);
  ellipse(440, 220, 5, 5);
  ellipse(480, 80, 5, 5);
  ellipse(510, 340, 5, 5);
  
  // center
  ellipseMode(CENTER);
  rectMode(CENTER);
  
  // head
  noStroke();
  fill("#EAEA8C");
  ellipse(mouseX, 240, 100, 90);
  //ellipse(300, 240, 100, 90);
  
  // body mid
  noStroke();
  fill("#EAEA8C");
  ellipse(mouseX, 290, 130, 130);
  //ellipse(300, 290, 130, 130);
  
  // body bottom
  noStroke();
  fill("#EAEA8C");
  ellipse(mouseX, 340, 170, 130);
  //ellipse(300, 340, 170, 130);
  
  // face shape
  noStroke();
  fill(255);
  ellipse(mouseX, 235, 52, 58);
  //ellipse(300, 235, 52, 58);
  
  // left ear
  push();
  noStroke();
  fill(255);
  translate(pmouseX-300, 0);
  rotate(radians(45));
  ellipse(350, -40, 20, 8);
  pop();
  
  // right ear
  push();
  noStroke();
  fill(255);
  translate(pmouseX-300, 0);
  rotate(radians(-45));
  ellipse(75, 385, 20, 8);
  pop();
  
  // left leg
  noStroke();
  fill("#EAEA8C");
  translate(mouseX-300, 0);
  rect(285, 420, 13, 60);
  
  // left bump
  noStroke();
  fill("#EAEA8C");
  ellipse(285, 420, 20, 20);
  //ellipse(285, 420, 20, 20);
  
  // left hoof
  noStroke();
  fill(255);
  rect(285, 455, 13, 18);
  //rect(285, 455, 13, 18);
  
  // right leg
  noStroke();
  fill("#EAEA8C");
  rect(320, 420, 13, 60);
  
  // right bump
  noStroke();
  fill("#EAEA8C");
  ellipse(320, 420, 20, 20);
  
  // right hoof
  noStroke();
  fill(255);
  rect(320, 455, 13, 18);
  
  // left eye
  push();
  noStroke();
  fill(0);
  rotate(radians(45));
  //translate(pmouseX-300, pmouseY-300);
  ellipse(360, -34, 7, 5);
  pop();
  
  // right ear
  push();
  noStroke();
  fill(0);
  rotate(radians(-45));
  ellipse(64, 390, 7, 5);
  pop();
  
  // left mouth
  push();
  noStroke();
  fill(0);
  rotate(radians(45));
  ellipse(386, -35, 6, 4);
  pop();
  
  // right mouth
  push();
  noStroke();
  fill(0);
  rotate(radians(-45));
  ellipse(38, 389, 6, 4);
  pop();
  
  // mid mouth
  noStroke();
  fill(0);
  ellipse(300, 251, 3, 7);
  
  // smile 
  noStroke();
  fill(0);
  ellipse(300, 256, 7, 3);
  
  //fluff left top
  noFill();
  stroke("#D3CD65");
  strokeWeight(4);
  arc(275, 284, 25, 25, 0, PI);
  //arc(275, 284, 25, 25, 0, PI);
  
  //fluff right top
  noFill();
  stroke("#D3CD65");
  strokeWeight(4);
  arc(326, 278, 25, 25, 0, PI);
  //arc(326, 278, 25, 25, 0, PI);
  
  //fluff left mid
  noFill();
  stroke("#D3CD65");
  strokeWeight(4);
  arc(250, 350, 25, 25, 0, PI);
  
  //fluff mid
  noFill();
  stroke("#D3CD65");
  strokeWeight(4);
  arc(300, 330, 25, 25, 0, PI);
  
  //fluff right bottom
  noFill();
  stroke("#D3CD65");
  strokeWeight(3);
  arc(340, 360, 25, 25, 0, PI);
  
  //fluff left leg
  noFill();
  stroke("#D3CD65");
  strokeWeight(4);
  arc(286, 395, 25, 25, 0, PI);
  
  //fluff right leg
  noFill();
  stroke("#D3CD65");
  strokeWeight(4);
  arc(318, 395, 25, 25, 0, PI);
  
  // BLUE SHEEP
  translate(0, pmouseY-400);
  push();
  translate(-180, 80);
  // head
  noStroke();
  fill("#6DCFF6");
  ellipse(300, 240, 100, 90);
  
  // body mid
  noStroke();
  fill("#6DCFF6");
  ellipse(300, 290, 130, 130);
  
  // body bottom
  noStroke();
  fill("#6DCFF6");
  ellipse(300, 340, 170, 130);
  
  // face shape
  noStroke();
  fill(255);
  ellipse(300, 235, 52, 58);
  
  // left ear
  push();
  noStroke();
  fill(255);
  rotate(radians(44));
  //ellipse(350, -40, 20, 8);
  ellipse(390, -65, 20, 8);
  pop();
  
  // right ear
  push();
  noStroke();
  fill(255);
  rotate(radians(-46));
  ellipse(29, 353, 20, 8);
  pop();
  
  // left leg
  noStroke();
  fill("#6DCFF6");
  rect(285, 420, 13, 60);
  
  // left bump
  noStroke();
  fill("#6DCFF6");
  ellipse(285, 420, 20, 20);
  //ellipse(285, 420, 20, 20);
  
  // left hoof
  noStroke();
  fill(255);
  rect(285, 455, 13, 18);
  //rect(285, 455, 13, 18);
  
  // right leg
  noStroke();
  fill("#6DCFF6");
  rect(320, 420, 13, 60);
  
  // right bump
  noStroke();
  fill("#6DCFF6");
  ellipse(320, 420, 20, 20);
  
  // right hoof
  noStroke();
  fill(255);
  rect(320, 455, 13, 18);
  
  // left eye
  push();
  noStroke();
  fill(0);
  rotate(radians(45));
  ellipse(360, -34, 7, 5);
  pop();
  
  // right ear
  push();
  noStroke();
  fill(0);
  rotate(radians(-45));
  ellipse(64, 390, 7, 5);
  pop();
  
  // left mouth
  push();
  noStroke();
  fill(0);
  rotate(radians(45));
  ellipse(386, -35, 6, 4);
  pop();
  
  // right mouth
  push();
  noStroke();
  fill(0);
  rotate(radians(-45));
  ellipse(38, 389, 6, 4);
  pop();
  
  // mid mouth
  noStroke();
  fill(0);
  ellipse(300, 251, 3, 7);
  
  // smile 
  noStroke();
  fill(0);
  ellipse(300, 256, 7, 3);
  
  //fluff left top
  noFill();
  stroke("#49A6DD");
  strokeWeight(4);
  arc(275, 284, 25, 25, 0, PI);
  //arc(275, 284, 25, 25, 0, PI);
  
  //fluff right top
  noFill();
  stroke("#49A6DD");
  strokeWeight(4);
  arc(326, 278, 25, 25, 0, PI);
  //arc(326, 278, 25, 25, 0, PI);
  
  //fluff left mid
  noFill();
  stroke("#49A6DD");
  strokeWeight(4);
  arc(250, 350, 25, 25, 0, PI);
  
  //fluff mid
  noFill();
  stroke("#49A6DD");
  strokeWeight(4);
  arc(300, 330, 25, 25, 0, PI);
  
  //fluff right bottom
  noFill();
  stroke("#49A6DD");
  strokeWeight(4);
  arc(340, 360, 25, 25, 0, PI);
  
  //fluff left leg
  noFill();
  stroke("#49A6DD");
  strokeWeight(4);
  arc(286, 395, 25, 25, 0, PI);
  
  //fluff right leg
  noFill();
  stroke("#49A6DD");
  strokeWeight(4);
  arc(318, 395, 25, 25, 0, PI);
  pop();
  
  // PINK SHEEP
  push();
  translate(180, 80);
  // head
  noStroke();
  fill("#F9B7B1");
  ellipse(300, 240, 100, 90);
  
  // body mid
  noStroke();
  fill("#F9B7B1");
  ellipse(300, 290, 130, 130);
  
  // body bottom
  noStroke();
  fill("#F9B7B1");
  ellipse(300, 340, 170, 130);
  
  // face shape
  noStroke();
  fill(255);
  ellipse(300, 235, 52, 58);
  
  // left ear
  push();
  noStroke();
  fill(255);
  rotate(radians(44));
  //ellipse(350, -40, 20, 8);
  ellipse(390, -65, 20, 8);
  pop();
  
  // right ear
  push();
  noStroke();
  fill(255);
  rotate(radians(-46));
  ellipse(29, 353, 20, 8);
  pop();
  
  // left leg
  noStroke();
  fill("#F9B7B1");
  rect(285, 420, 13, 60);
  
  // left bump
  noStroke();
  fill("#F9B7B1");
  ellipse(285, 420, 20, 20);
  //ellipse(285, 420, 20, 20);
  
  // left hoof
  noStroke();
  fill(255);
  rect(285, 455, 13, 18);
  //rect(285, 455, 13, 18);
  
  // right leg
  noStroke();
  fill("#F9B7B1");
  rect(320, 420, 13, 60);
  
  // right bump
  noStroke();
  fill("#F9B7B1");
  ellipse(320, 420, 20, 20);
  
  // right hoof
  noStroke();
  fill(255);
  rect(320, 455, 13, 18);
  
  // left eye
  push();
  noStroke();
  fill(0);
  rotate(radians(45));
  ellipse(360, -34, 7, 5);
  pop();
  
  // right ear
  push();
  noStroke();
  fill(0);
  rotate(radians(-45));
  ellipse(64, 390, 7, 5);
  pop();
  
  // left mouth
  push();
  noStroke();
  fill(0);
  rotate(radians(45));
  ellipse(386, -35, 6, 4);
  pop();
  
  // right mouth
  push();
  noStroke();
  fill(0);
  rotate(radians(-45));
  ellipse(38, 389, 6, 4);
  pop();
  
  // mid mouth
  noStroke();
  fill(0);
  ellipse(300, 251, 3, 7);
  
  // smile 
  noStroke();
  fill(0);
  ellipse(300, 256, 7, 3);
  
  //fluff left top
  noFill();
  stroke("#F37765");
  strokeWeight(4);
  arc(275, 284, 25, 25, 0, PI);
  //arc(275, 284, 25, 25, 0, PI);
  
  //fluff right top
  noFill();
  stroke("#F37765");
  strokeWeight(4);
  arc(326, 278, 25, 25, 0, PI);
  //arc(326, 278, 25, 25, 0, PI);
  
  //fluff left mid
  noFill();
  stroke("#F37765");
  strokeWeight(4);
  arc(250, 350, 25, 25, 0, PI);
  
  //fluff mid
  noFill();
  stroke("#F37765");
  strokeWeight(4);
  arc(300, 330, 25, 25, 0, PI);
  
  //fluff right bottom
  noFill();
  stroke("#F37765");
  strokeWeight(4);
  arc(340, 360, 25, 25, 0, PI);
  
  //fluff left leg
  noFill();
  stroke("#F37765");
  strokeWeight(4);
  arc(286, 395, 25, 25, 0, PI);
  
  //fluff right leg
  noFill();
  stroke("#F37765");
  strokeWeight(4);
  arc(318, 395, 25, 25, 0, PI);
  pop();
}