console.log("hello");
let apiM1URL = "./metroM1.json";
let M1stations;
let isDataReady = false;
let isSongReady = false;
let M1 = []
let mapNotDrawn = true;
let song;


window.addEventListener("load", () => {
  console.log("page is loaded");
  fetch(apiM1URL) // fetching the information from the URL/ file
  .then(response =>  response.json() ) // returning the Promise Object which contains data

  .then((data) => {
    console.log(data); // seeing the data
    M1stations = data.stationsM1;
    isDataReady = true;
    lineReady = true;

    for(let i=0; i<M1stations.length; i++) {
        console.log(M1stations[i].name);
    }
    // for(let i=0;i<M1stations.length;i++) {
    //   M1.push(new M1map(M1stations[i].name, M1stations[i].number, M1stations[i].year, M1.length))
    //   // astros[i] = new Astro(astroData.people[i].name, astroData.people[i].craft)
    // }
  })
})

function preload() {
  song = loadSound("./np.ogg")
  console.log("SONG IS ALRIGHT")
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  song.play();
}

function draw() {
  // background(220);

  // if(isDataReady && mapNotDrawn == false) {
  //   for(let i=0;i<M1.length;i++) {
  //     // draw the astro for each person in the array
  //       M1[i].drawEllipse();
  //   }
  // }
  // mapNotDrawn = false;
  // for(let i=0;i<M1.length;i++) {
  //   M1[i].changeColor(mouseX, mouseY);
  // }

  // if(mouseIsPressed) {
  //   for(let i=0;i<M1.length;i++) {
  //     M1[i].showName(mouseX, mouseY);
  //   }
  // }
}

function wait(time)
{
  start = millis();
  do
  {
    current = millis();
  }
  while(current < start + time);
  console.log("5s");
}

// class M1map {
//   constructor(name, number, year, iteration) {
//     this.number = number;
//     this.name = name;
//     this.year = year;
//     this.iteration = iteration;
//     this.x = window.innerWidth/2-100 + random(200)
//     this.y = 100+30*this.iteration
//     this.r = this.number/300000
//     this.lenght = (window.innerHeight- 200)/this.iteration;
//   }
//   drawEllipse() {
//     stroke(107, 115, 117)
//     ellipse(this.x, this.y, this.r);
//     console.log(this.iteration);
//     wait(500);
//   }

//   showName(mx, my) {
//     textSize(16);
//     textFont('Roboto');
//     textStyle(NORMAL);
//     fill(107, 115, 117);
//     if(dist(mx, my, this.x, this.y) < this.r/2) {
//       text(this.name, this.x, this.y);
//     } else {
//       //dont do anything
//     }
//     // return true if mouise is within ellipse, else false
//   }

//   changeColor(mx, my) {
//     if ((mx > this.x-this.r/2) && (mx < this.x+this.r/2) &&
//     (my > this.y-this.r/2) && (mouseY < this.y+this.r/2)) {
//     fill(50, 50, 50);
//   } else {
//     fill(250, 128, 114);
//   }

//   }
// }