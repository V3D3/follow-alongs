let beta = 0;
let angle = 0;
let vertArr = [];

function setup()  {
    createCanvas(windowWidth,windowHeight,WEBGL);
    frameRate(144);
}
  
function draw()  {
    background(0);

    rotateY(angle);
    angle += 0.03;

    noFill();
    stroke(30, 144, 255);
    strokeWeight(4);
    beginShape();

    for(let i = 0; i < vertArr.length; i++)  {
        vertex(...vertArr[i]);
    }

    endShape();

    if(beta < PI)  {
        let r = 100 * (0.8 + 1.6 * Math.sin(6 * beta));
        let theta = 2 * beta;
        let phi = 0.6 * PI * Math.sin(12 * beta);
        
        let x = r * Math.cos(phi) * Math.cos(theta);
        let y = r * Math.cos(phi) * Math.sin(theta);
        let z = r * Math.sin(phi);
        vertArr.push([x, y, z]);

        beta += 0.01;
    }
}