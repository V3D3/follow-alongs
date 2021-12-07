scl = 10;
food = '';

function setup() {
  createCanvas(600, 600);
  frameRate(15);
  s = new Snake();

  pickLocation();
}

function draw() {
  background(51);
  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);

  s.death();
  s.update();
  s.show();

  if (s.eat(food))  {
    pickLocation();
  }
}

function pickLocation()  {
  let cols = floor(width / scl);
  let rows = floor(height / scl);

  food = createVector(floor(random(cols)), floor(random(rows)));

  food.mult(scl);
}

function keyPressed()  {
  if (keyCode === UP_ARROW)  {
    s.dir(0, -1);
  }  else if (keyCode == DOWN_ARROW)  {
    s.dir(0, 1);
  }  else if (keyCode == RIGHT_ARROW)  {
    s.dir(1, 0);
  }  else if (keyCode == LEFT_ARROW)  {
    s.dir(-1, 0);
  }
}

function Snake()  {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 1;
  this.tail = [];

  this.dir = function(x, y)  {
    this.xspeed = x;
    this.yspeed = y;
  }

  this.update = function()  {
    if(this.total === this.tail.length)  {
      for(var i = 0; i < this.total - 1; i++)  {
        this.tail[i] = this.tail[i+1];
      }
    }
    this.tail[this.total - 1] = createVector(this.x, this.y);

    this.x += this.xspeed * scl;
    this.y += this.yspeed * scl;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  }

  this.show = function()  {
    fill(255);
    for (var i = 0; i < this.total; i++)  {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
  }

  this.death = function()  {
    for(var i = 0; i < this.total; i++)  {
      var post = this.tail[i];
      if(this.tail[i] === undefined)  {
        continue;
      }
      var d = dist(this.x, this.y, post.x, post.y);
      if(d < 1)  {
        this.total = 1;
        this.tail = [];
        this.pos = createVector(0, 0);
        break;
      }
    }
  }

  this.eat = function(pos)  {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if(d < 2)  {
      this.total++;
      return true;
    } else {
      return false;
    }
  }
}