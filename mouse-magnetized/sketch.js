let b;

function setup() {
  createCanvas(400, 400);
  background(0);
  frameRate(144);

  b = new Ball();
}

function draw() {
  background(30, 144, 255);
  b.update();
  b.bounce();
  b.draw();
}