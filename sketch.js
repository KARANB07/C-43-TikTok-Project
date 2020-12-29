var h,m,s,scAngle,hAngle,mAngle;
function setup() {
  createCanvas(400,400);
}
function draw() {
  background(255, 255, 0);  
  h=hour();
  m=minute();
  s=second();
  console.log(h);
  console.log(m);
  console.log(s);
  angleMode(DEGREES)
  push();
  translate(200,200)
  pop()
  scAngle=map(s,0,60,0,360)
  push();
  translate(200,200)
  rotate(scAngle-90)
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  mAngle=map(m,0,60,0,360)
  push();
  translate(200,200)
  rotate(mAngle-90)
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,80,0);
  pop();
  hAngle=map(h%12,0,60,0,360)
  push();
  translate(200,200)
  rotate(hAngle-90)
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,60,0);
  pop();
  drawSprites();
  stroke("red");
  strokeWeight(5);
  noFill();
  arc(200,200,360,360,-90,scAngle-90);
  stroke(0,0,255);
  strokeWeight(5);
  noFill();
  arc(200,200,330,330,-90,mAngle-90);
  stroke(0,255,0);
  strokeWeight(5);
  noFill();
  arc(200,200,300,300,-90,hAngle-90);
}
