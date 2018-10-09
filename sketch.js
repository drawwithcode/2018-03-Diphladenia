function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(600, 640);
  background(0);
  frameRate(3);
}

function draw() {
  // put drawing code here

  //points
  for(var x = 60; x < 600; x += 60) {
  for(var y = 40; y < 640; y += 40) {
  noStroke();
  if(random()<0.6){fill(255);}
  else {fill(customHue, customSaturation, 255, 50);}
  ellipse(x, y, 20);
  }
  }

  //rects
  for(var x = 0; x < 600; x += 60) {
  for(var y = 0; y < 640; y += 40) {
  strokeWeight(1);
  stroke(255);
  noFill()
  rectMode(CORNER);
  rect(x, y, 60, 40);
  }
  }

  //circles1
  ellipseMode(CENTER);
  for(var x = 60; x < 600; x += 120) {
  for(var y = 40; y < 640; y += 80) {
  var customHue = x / 600 * 255;
  var customSaturation = y / 640 * 255;
  fill(customHue, customSaturation, 255, 80);
  stroke(255);
  strokeWeight(1.5);
  ellipse(x, y, random()*200);
  }
  }

  //circles2
  ellipseMode(CENTER);
  for(var x = 60; x < 600; x += 120) {
  for(var y = 40; y < 640; y += 80) {
  var customHue = x / 600 * 255;
  var customSaturation = y / 640 * 255;
  strokeWeight(random()*5)
  noFill()
  stroke(255);
  ellipse(x, y, random()*100);
  }
  }

  //rects2
  for(var x = 60; x < 600; x += 60) {
  for(var y = 40; y < 640; y += 40) {
  strokeWeight(1);
  noFill();
  if(random()<0.6){stroke(255);}
  else {stroke(customHue, customSaturation, 255, 50);}
  rectMode(CENTER);
  rect(x, y, 10, 10);
  }
  }
}
