class Walker  {
    constructor(x, y)  {
        this.fixedmode = true;
        this.fixedsize = 1;
        this.radius    = 1;
        this.pos = createVector(x, y);
    }

    update()  {
        let dirvec;

        if(this.fixedmode)  {
            let x = random(-1, 1);
            let y = random(-1, 1);
            dirvec = createVector(x, y);
            dirvec.normalize().mult(this.fixedsize);
        }  else  {
            let x = random(-this.radius, this.radius);
            let y = random(-this.radius, this.radius);
            dirvec = createVector(x, y);
        }

        this.pos.add(dirvec);
    }

    show()  {
        stroke(255, 100);
        strokeWeight(2);
        point(this.pos.x, this.pos.y);
    }
}