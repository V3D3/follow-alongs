class Ball  {
    constructor()  {
        this.size = 20;
        this.speed = 5;

        this.position = createVector(random(this.size / 2, height - this.size / 2),
                                     random(this.size / 2, width - this.size / 2));
        this.velocity = createVector(random(0, 1), random(-1, 0));
        this.velocity.normalize().mult(this.speed);
    }

    move()  {
        this.position.add(this.velocity);
    }

    bounce()  {
        if(this.position.x <= this.size / 2 || this.position.x >= width - this.size/2)  {
            this.velocity.reflect(createVector(-1, 0));
        }
        if(this.position.y <= this.size / 2 || this.position.y >= width - this.size/2)  {
            this.velocity.reflect(createVector(0, -1));
        }
    }

    update()  {
        stroke(0);
        ellipse(this.position.x, this.position.y, this.size, this.size);
    }
}