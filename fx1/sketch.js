var env=[], triOsc;
var quads = [];
var numOfHorizontalCells, numOfVerticalCells;
var quadSize = 50;

var lineX = 0;

function setup() {
  createCanvas(500,500);
  background(10);
  numOfHorizontalCells  = (width / quadSize);
  numOfVerticalCells    = (height / quadSize);
  
  var loopAux = 0;
  
  for (var i = 0; i < numOfHorizontalCells; i++) {    
    for(var j = 0; j < numOfVerticalCells; j++) {
      quads[loopAux] = new Quad(i * quadSize, j * quadSize, quadSize * 0.9, 155);  
      loopAux++;      
    }    
  }    
  
}

function draw() {
  background(1);  
  for (var i = 0; i < quads.length; i++) {
    var distanciaAoRato = dist(quads[i].x, quads[i].y, mouseX, mouseY);
    var tamanhoQuad = quadSize / (distanciaAoRato * 0.01);
    tamanhoQuad = constrain(tamanhoQuad, 0.1, quadSize*0.9);
    if(!quads[i].active) {
      quads[i].cor = tamanhoQuad * 10;
      quads[i].size = tamanhoQuad;    
      quads[i].show();
    } else {
      quads[i].size = quadSize;      
      quads[i].show();
      if(dist(lineX, quads[i].y, quads[i].x, quads[i].y) < 10){
        quads[i].playSound(quads[i].y);
        console.log("pim");
      }
    }
  }
  
  stroke(255,0,0)
  line(lineX, 0, lineX, height);
  line(lineX+1, 0, lineX+1, height);
  line(lineX+2, 0, lineX+2, height);
  lineX+=10;
  if(lineX > width) lineX = 0;
  
  
}

function mousePressed(){
  for (var i = 0; i < quads.length; i++) {
    var distanciaAoRato = dist(quads[i].x, quads[i].y, mouseX, mouseY);
    //console.log(distanciaAoRato);
    if(distanciaAoRato < quadSize*0.5 && !quads[i].active) {
      quads[i].active = true;
    } else if(!quads[i].active) {
      quads[i].active = false;
    } else if(quads[i].active && distanciaAoRato < quadSize*0.5){
      quads[i].active = false;
    }
  }
}

function Quad(x, y, size, cor) {
  this.x      = x + quadSize * 0.5;
  this.y      = y + quadSize * 0.5;
  this.size   = size;
  this.cor    = cor;
  this.active = false;
  
  this.env    = new p5.Env();
  this.env.setADSR(0.001, 0.1, 0.2, 0.1);
  this.env.setRange(1, 0);
    

  this.triOsc = new p5.Oscillator('triangle');
  this.triOsc.amp(this.env);
  this.triOsc.start();  
  
  this.show = function() {
    if(!this.active){
      fill(this.cor);
      stroke(0,0,0);
      noStroke();
      rectMode(CENTER);
      rect(this.x, this.y, this.size, this.size);
    } else {
      fill(100,200,100);
      stroke(0,0,0);
      noStroke();
      rectMode(CENTER);
      rect(this.x, this.y, this.size, this.size);
    }
    
  }
  
  this.playSound = function(freq) {
    //console.log("play sound "+ freq);
    
    this.triOsc.freq(freq);
    
    this.env.play();
  }
  
  
}