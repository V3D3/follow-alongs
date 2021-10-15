let b;

function setup() {
  createCanvas(400, 400);
  frameRate(144);
  b = new Ball();
}

function draw() {
  background(30, 144, 255);
  b.move();
  b.bounce();
  b.update();
}