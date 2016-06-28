var grelha, gridSizeHorizontal, gridSizeVertical, gridCellSizeHorizontal, gridCellSizeVertical;

function setup() {
  createCanvas(1024, 768);
  background(51);
  grelha = new Grid(640, 480, 10, 5, 10);
  console.log(grelha.width);
  grelha.createGrid();
  grelha.show();
  gridW = createSlider(320, 800, 640, 10);
  gridW.position(10,10);
  
  gridH = createSlider(240, 600, 480, 10);
  gridH.position(10,30);
  
  gridnH = createSlider(1, 25, 10, 1);
  gridnH.position(10,50);
  
  gridnV = createSlider(1, 25, 10, 1);
  gridnV.position(10,70);
}

function draw() {
  gridSizeHorizontal = gridW.value();
  gridSizeVertical = gridH.value();
  gridCellSizeHorizontal = gridnH.value();
  gridCellSizeVertical = gridnV.value();
}

function keyPressed() {
  background(51);
  grelha = new Grid(gridSizeHorizontal, gridSizeVertical, gridCellSizeHorizontal, gridCellSizeVertical, 10) ;
  grelha.createGrid();
  grelha.show();
}