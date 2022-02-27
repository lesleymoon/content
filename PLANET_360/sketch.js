/* Planet 360
An immersive 360 exploration of different worlds from Google Maps to famous movies accompanied by soundtracks.

I included Google Map photos of places from around the world taken by other people because I really like the idea of putting yourself in the eyes of others, as if you were there in the moment.

Follow the instructions on the first screen or read here:

NAVIGATION
Drag your mouse/trackpad on the screen to navigate left, right, up, or down
Press the arrow keys to navigate back to the introduction screen

KEYS
Press any keys from A, S, D, F, G, H, J, K, L to explore!

BONUS if you can find the hidden key without looking at the code

Maybe I should fill up all the letter keys with different places? in the future...
*/

let a = 0,
  b = 0;
let classic;
let forest;
let lights;
let norway;
let oil;
let osaka;
let point;
let water;
let happy;
let house;
let merry;
let planet;
var c;
let amplitude;

function preload() {
  merry = loadSound("assets/merry.mp3");
  classical = loadSound("assets/claire-de-lune.mp3");
  violin = loadSound("assets/je-te-veux.mp3");
  rat = loadSound("assets/le-festin.mp3");
  nemo = loadSound("assets/nemo.mp3");
  nature = loadSound("assets/nature.mp3");
  fate = loadSound("assets/fate.mp3");
  sky = loadSound("assets/sky.mp3");
  people = loadSound("assets/people.mp3");
  train = loadSound("assets/train.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  c = color(0, 0, 0);
  background(c);
  amplitude = new p5.Amplitude();
  amplitude.setInput(lights);

  //places
  planet = loadImage("assets/intro.png");
  classic = loadImage("assets/red.jpg");
  forest = loadImage("assets/forest.png");
  lights = loadImage("assets/lights.png");
  norway = loadImage("assets/norway.jpg");
  oil = loadImage("assets/oil.jpg");
  osaka = loadImage("assets/osaka.png");
  point = loadImage("assets/point.jpg");
  water = loadImage("assets/water.jpg");
  happy = loadImage("assets/happy.png");
  house = loadImage("assets/house.png");
}

function draw() {
  keyTyped();
  noStroke();
  camera(0, 0, 0, 0, 0, 1, 0, 1, 0);
  scale(-1, 1, 1);
  rotateX(radians(b));
  rotateY(radians(a));

  //(camera panning) Code borrowed from midorigoke "https://openprocessing.org/sketch/947901"
  // texture(classic);
  sphere(windowWidth);

  if (keyIsDown(39)) a--;
  if (keyIsDown(37)) a++;
  if (keyIsDown(38) && b > -100) b--;
  if (keyIsDown(40) && b < 100) b++;

  if (mouseIsPressed) {
    a -= (mouseX - width / 2) / width;
    b = min(100, max(-100, b + (mouseY - height / 2) / height));
  }
}

function keyTyped() {
  if (key == "a") {
    texture(forest);
    if (!violin.isPlaying()) {
      violin.play();
      classical.stop();
      merry.stop();
      rat.stop();
      nemo.stop();
      nature.stop();
      fate.stop();
      sky.stop();
      people.stop();
      train.stop();
      background("#cecdd3");
    }
  } else {
    texture(planet);
  }
  if (key == "s") {
    let level = amplitude.getLevel();
    let size = map(level, 0, 1, 0, height * 2);
    background(size);
    texture(lights);

    if (!rat.isPlaying()) {
      rat.play();
      classical.stop();
      merry.stop();
      violin.stop();
      nemo.stop();
      nature.stop();
      fate.stop();
      sky.stop();
      people.stop();
      train.stop();
    }
  }
  if (key == "d") {
    texture(norway);
    if (!nature.isPlaying()) {
      nature.play();
      classical.stop();
      merry.stop();
      rat.stop();
      nemo.stop();
      violin.stop();
      fate.stop();
      sky.stop();
      people.stop();
      train.stop();
    }
  }
  if (key == "f") {
    texture(water);
    if (!nemo.isPlaying()) {
      nemo.play();
      classical.stop();
      merry.stop();
      rat.stop();
      violin.stop();
      nature.stop();
      fate.stop();
      sky.stop();
      people.stop();
      train.stop();
    }
  }
  if (key == "g") {
    texture(osaka);
    c = color(mouseX, mouseY, 115);
    if (!sky.isPlaying()) {
      sky.play();
      classical.stop();
      merry.stop();
      rat.stop();
      nemo.stop();
      nature.stop();
      fate.stop();
      violin.stop();
      people.stop();
      train.stop();
    }
  }
  if (key == "h") {
    texture(oil);
    if (!fate.isPlaying()) {
      fate.play();
      classical.stop();
      merry.stop();
      rat.stop();
      nemo.stop();
      nature.stop();
      violin.stop();
      sky.stop();
      people.stop();
      train.stop();
    }
  }
  if (key == "j") {
    texture(point);
    if (!people.isPlaying()) {
      people.play();
      classical.stop();
      merry.stop();
      rat.stop();
      nemo.stop();
      nature.stop();
      fate.stop();
      sky.stop();
      violin.stop();
      train.stop();
    }
  }
  if (key == "k") {
    texture(happy);
    if (!merry.isPlaying()) {
      merry.play();
      classical.stop();
      violin.stop();
      rat.stop();
      nemo.stop();
      nature.stop();
      fate.stop();
      sky.stop();
      people.stop();
      train.stop();
    }
  }
  if (key == "l") {
    texture(house);
    if (!train.isPlaying()) {
      train.play();
      classical.stop();
      merry.stop();
      rat.stop();
      nemo.stop();
      nature.stop();
      fate.stop();
      sky.stop();
      people.stop();
      violin.stop();
    }
  }
  if (key == "c") {
    texture(classic);
    if (!classical.isPlaying()) {
      classical.play();
      violin.stop();
      merry.stop();
      rat.stop();
      nemo.stop();
      nature.stop();
      fate.stop();
      sky.stop();
      people.stop();
      train.stop();
    }
  }
}

//audio sources (WIP)
//"https://www.youtube.com/watch?v=O2deXwf4drE&ab_channel=ClaudeDebussy-Topic"
//"https://www.youtube.com/watch?v=Cj-AL-J98U0&ab_channel=JoeHisaishiVEVO"
//"https://www.youtube.com/watch?v=8hKrhNFpfnQ&ab_channel=KowoonYang-Topic"
//"https://www.youtube.com/watch?v=PtnJfOJGBUw&ab_channel=AncientChineseMusic"

//image sources
//will be added after i dig through all the google map images i looked at...
