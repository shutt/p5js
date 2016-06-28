'use strict';
/*
  
  Grid class:

  width,
  height,
  numCells,
  gapCells 


*/

function Grid(w, h, hCells, vCells, gCells) {
  this.width              = w - gCells;
  this.height             = h - gCells;
  this.horizontalCells    = hCells;
  this.verticalCells      = vCells;
  this.gapCells           = gCells;
  
  this.cells              = [];  
  
  
  
  var cellSizeHorizontal  = (this.width/this.horizontalCells);
  var cellSizeVertical    = (this.height/this.verticalCells);
  
  this.createGrid = function () {
    for(var i = 0; i < this.horizontalCells; i++) {      
      this.cells.push([]);
      this.cells[i].push(new Array(this.verticalCells));
      
      for(var j = 0; j < this.verticalCells; j++) {
        this.cells[i][j] = {xInicial:   i * cellSizeHorizontal + gCells, 
                            yInicial:   j * cellSizeVertical + gCells,
                            horizSize:  cellSizeHorizontal - gCells, 
                            vertiSize:  cellSizeVertical - gCells};
      }
    }
  }
  
  this.show = function () {
    fill(255,0,100);
    for(var i = 0; i < this.horizontalCells; i++) {      
      for(var j = 0; j < this.verticalCells; j++) {
        
        rect( this.cells[i][j].xInicial, 
              this.cells[i][j].yInicial, 
              this.cells[i][j].horizSize,  
              this.cells[i][j].vertiSize);        
      }
    }
  }
}