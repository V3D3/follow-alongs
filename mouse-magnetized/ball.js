class Ball  {
    constructor()  {
        this.size = 20;
        this.forcemag = 0.1;
        this.terminalvelocity = 20;
        this.position = createVector(width/2, height/2);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);

        this.accelmode = 0;
    }

    update()  {
        let mouse = createVector(mouseX, mouseY);

        this.acceleration = p5.Vector.sub(mouse, this.position).setMag(this.forcemag);

        this.accelmode = p5.Vector.dot(this.acceleration, this.velocity)

        this.velocity.add(this.acceleration);
        if(this.velocity.mag() > this.terminalvelocity)  {
            this.velocity.setMag(this.terminalvelocity);
        }

        this.position.add(this.velocity);
    }

    bounce()  {
        if(this.position.x <= this.size / 2)  {
            this.position.x = width - this.size / 2;
        } else if(this.position.x >= width - this.size / 2)  {
            this.position.x = this.size / 2;
        }
        if(this.position.y <= this.size / 2)  {
            this.position.y = height - this.size / 2;
        }  else if(this.position.y >= height - this.size / 2)  {
            this.position.y = this.size / 2;
        }
    }

    draw()  {
        stroke(0);
        ellipse(this.position.x, this.position.y, this.size, this.size);

        if(this.accelmode > 0)  {
            stroke(0, 255, 0);
        }  else if(this.accelmode < 0)  {
            stroke(255, 0, 0);
        }  else  {
            stroke(0, 0, 0);
        }

        line(this.position.x, this.position.y, mouseX, mouseY);
    }
}