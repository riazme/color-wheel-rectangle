
let num=0;
let angle;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  angleMode (DEGREES);
  rectMode(CENTER);
}
// Resize the canvas when the
// browser's size changes.
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  //background(220);
  num  =num %360;
  angle = abs(sin(num));
  angle2 = abs(cos(num));
  angle3 = abs(tan(num));
  angle4 = abs(cos(num))*.2;
  angle5 = abs(cos(num))*.01;
  num += .09;
  //console.log(num);
  translate (width/2, height/2);
  rotate(num);
  noStroke();
  fill(angle*255, angle2*255, angle3*255);
  rect(0,0, width/1.6, height/1.6);
  //translate (0,0);
  fill(angle2*255, angle3*255, angle*255);
   rotate(num);
  rect (0,0, width/1.75,height/1.75);
  fill(angle3*255, angle*255, angle2*255);
   rotate(num);
  rect(0,0, width/2, height/2);
  fill(angle5*255, angle3*255, angle2*255);
   rotate(num);
  rect(0,0, width/2.25, height/2.25);
  fill(angle2*255, angle*255, angle4*255);
   rotate(num);
  rect(0,0, width/2.5, height/2.5);
}