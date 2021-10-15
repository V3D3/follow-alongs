function setup() {
  createCanvas(400, 400);
  background(0);
  frameRate(144);
}

function draw() {
  let pos = createVector(width / 2, height / 2);
  let mos = createVector(mouseX, mouseY);

  let v = p5.Vector.sub(mos, pos);
  
  translate(width / 2, height / 2);
  strokeWeight(4);
  stroke(255, 50);
  line(0, 0, v.x, v.y);
}