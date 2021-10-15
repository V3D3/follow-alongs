let walker;

function setup()  {
    createCanvas(400, 400);
    walker = new Walker(200, 200);
    frameRate(144);
    background(0);
}

function draw()  {
    walker.update();
    walker.show();
}

function resetSketch(fmode, fsize)  {
    background(0);
    walker = new Walker(200, 200);
    walker.fixedmode = fmode;
    walker.fixedsize = fsize;
    walker.radius    = fsize;
}