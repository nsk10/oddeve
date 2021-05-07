var bg;
var c1,c2;
var bimg,yimg;
var start,startimg;
var nos=[],noimg;
var logo;

function preload(){
  bimg = loadImage ("img/bc.png");
  yimg = loadImage ("img/yc.png");
  startimg = loadImage ("img/start.png");
  bg = loadImage ("img/cs.png");
  noimg = loadImage ("img/no..png")
  logo = loadImage ("img/Word Art.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
}

function draw() {
  background(bg);  
  drawSprites();
}