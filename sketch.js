let capture;
var xoff = 0;
var xoff2 = 50000;
var xoff3 = 1000;
var xoff4 = 930958479;

function setup() {
  background(255);
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(width, height);
  capture.hide();
}

function draw() {
  //background(0);
  imageMode(CENTER);
  var secs = map(second(),0,59,0.001,0.01);
  var mins = map(minute(),0,59,0.001,0.01);
  var hr = map(hour(),0,24,20,100);

  xoff += secs;
  xoff2 += secs;
  xoff3 += mins;
  xoff4 += mins;

  var cx = map(noise(xoff),0,1,0,width);
  var cy = map(noise(xoff2),0,1,0,height);
  var dx = map(noise(xoff3),0,1,0,width);
  var dy = map(noise(xoff4),0,1,0,height);

  noFill();
  stroke(0,50);
  ellipse(dx,dy,hr,hr);
  tint(255,10);
  image(capture, cx, cy, width/4, height/4);
  //image(capture, width/2, height/2, width/2, height/2);
  //filter(THRESHOLD,0.3);
  
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}