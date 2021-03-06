let apiM1URL = "./metroM1.json";
let song;
let canvas;

let M1stations;
let M1 = []
let AlbumCover = [];

let confused; // images
let instruction;
let initialImg;

let accessAccentCol; // arrays with accent colors for tiles
let accentColors = [ [203, 0, 245], [255, 0, 108], [253, 13, 53],[254, 68, 1],[255, 153, 51],[255, 255, 20], [207, 255, 4],[57, 255, 20], [65, 253, 254], [4, 217, 255]]

let isDataReady = false; // varriables
let isSongReady = false;
let hasSongStarted = false;

let counter = 0;
let timeManager= [7, 9, 12, 20, 22, 29, 36, 39, 44 , 50, 55, 60, 66, 73, 79, 84, 89, 94, 100, 104, 110]
let tmc = 0; // time manager counter, accessing numbers from the array above

window.addEventListener("load", () => {
  console.log("page is loaded");
  fetch(apiM1URL) // fetching the information from the URL/ file
  .then(response =>  response.json() ) // returning the Promise Object which contains data

  .then((data) => {
    M1stations = data.stationsM1;
    isDataReady = true;
    lineReady = true;

    for(let i=0;i<M1stations.length;i++) { // creating an object for each key-value pair
      M1.push(new M1map(M1stations[i].name, M1stations[i].number, M1stations[i].year, M1stations[i].autobus, M1stations[i].tram))
    }
  })
})


function preload() { // preloading songs and images
  song = loadSound("./nast.ogg");
  initialImg = loadImage("./start_img.png");
  confused = loadImage("./confused.png");
  for(let i=1; i<=16;i++) {
    AlbumCover[i-1] = loadImage("./array/"+i+".png");
  }
}


function setup() {
  canvas = createCanvas(window.innerWidth*0.7, window.innerHeight);
  canvas.parent("canvas-container");
  
  function timeIt(){ // setting up a timer
    counter ++;
  }
  setInterval(timeIt, 1000); //native function 1000ms =1 s
}


function draw() {
  if(hasSongStarted == false) { // drawing initial "click here" image
    image(initialImg, 0, 0, window.innerHeight, window.innerHeight);
    counter = 0;
  }


  accessAccentCol = int(map(mouseX, 0-window.innerWidth*0.3, window.innerWidth*0.7, 0, accentColors.length));
  image(confused, window.innerWidth*0.7-120, window.innerHeight- 50, 100, 30); // drawing instructions "confused" image
  showInstruction()

  if(isDataReady == true) {
    if(int(counter) == int(timeManager[tmc])) { // calling a drawImage function at a specific time
        noStroke();
        fill(223, 220, 211, 30); 
        rect(0, 0, window.innerWidth, window.innerHeight); // drawing rectangle to add "opacity"
        M1[tmc].drawImage();
        tmc ++;
    }
  }
}

function showInstruction(){ // displaying text when hover over "confused"
  document.getElementById("instructions").innerHTML = "";
  if((window.innerWidth*0.7-120 < mouseX) && (window.innerWidth*0.7-20 > mouseX) && (window.innerHeight-70 < mouseY) && (window.innerHeight > mouseY)){
    document.getElementById("instructions").innerHTML = 'The width of the appearing image corresponds to the popularity of the metro stations. Completely painted squares indicate possible interchanges to tram lines, half-painted squares indicate possible changes to bus lines. Move the mouse to affect the color change!';
  }
}

function changeStationName(text){ // displaying different infromation depending on the metro station mentioned
  document.getElementById("stationName").innerHTML = text;
}

function changeText1(text){
  document.getElementById("stationText1").innerHTML = text;
}

function changeText2(text){
  document.getElementById("stationText2").innerHTML = text;
}

function mousePressed() { // starting the song on click
  if(hasSongStarted == false) {
    counter = 0; // reseting the counter
    song.play();
    background(223, 220, 211);
    hasSongStarted = true;
  }
}


class M1map {
  constructor(name, number, year, autobus, tram) {
    this.name = name; // name of the station
    this.number = number; // daily usage of a station
    this.year = year; // year of construction of the station
    this.autobus = autobus; // number of buses stopping near the metro station
    this.tram = tram; // number of trams stopping near the metro station
    this.image = random(AlbumCover);

    this.width = this.number/35000 // the size of the photos corresponds to the popularity of the station
    this.tileAmount = 7; // dividing the canvas into 49 tiles to showcase intermodality of specific stations
    this.tileSize = this.width /this.tileAmount;
    this.tintArray = [] // array that stores tint values
  }

  drawImage() {
    let n = 0; // variable for retrieving values from tint array
    let x = random(window.innerWidth*0.7-this.width); // placing an image randomly on canvas
    let y = random(window.innerHeight-this.width);
  
    noStroke();

    for (let g=0; g<this.tram;g++) { // array stores tint values corresponding to number of trams
      append(this.tintArray, 240);
      this.tintArray.append;
    }

    for (let g=0; g<this.autobus;g++) { // array stores tint values corresponding to number of buses stopping near the metro station
      append(this.tintArray, 120);
      this.tintArray.append;
    }

    for (let g=0; g<=48-this.autobus-this.tram;g++) { // tint values for what's left
      append(this.tintArray, 0);
      this.tintArray.append;
    }

    let newTintArray = shuffle(this.tintArray); // shuffle the colors in the table created above

    image(this.image, x, y, this.width, this.width);
    for (let a=0; a< this.tileAmount; a++) {
      for (let i=0; i< this.tileAmount; i++) { // crating a grid of tiles
        // the last value corresponds to tint; 100% yellow - possibility of changing to bus,
        // 50% yellow - it is possible to change to the tram, 0% yellow - changes are not possible.
        fill(accentColors[accessAccentCol][0], accentColors[accessAccentCol][1], accentColors[accessAccentCol][2], newTintArray[n]);
        rect(x+this.tileSize*a, y+this.tileSize*i, this.tileSize, this.tileSize);
        changeStationName(M1stations[tmc].name);
        changeText1('The construction of the '+M1stations[tmc].name+' metro station was completed in '+M1stations[tmc].year+'.');
        changeText2('Passengers can easily change to '+M1stations[tmc].autobus+' different bus lines and '+M1stations[tmc].tram+' tram lines.');
        n++;
      }
    }
  }
}