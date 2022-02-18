let apiURL = "http://api.open-notify.org/astros.json";
let astroData;
let isDataReady = false;
let astros= [];

window.addEventListener("load", () => {
  fetch(apiURL)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    astroData = data;
    isDataReady = true;

    //create new astro objects for each person
    for(let i=0;i<astroData.people.length;i++) {
      astros.push(new Astro(astroData.people[i].name, astroData.people[i].craft))
      // astros[i] = new Astro(astroData.people[i].name, astroData.people[i].craft)
    }

  })
})

function setup() {
  createCanvas(window.innerHeight, window.innerWidth);
}

function draw() {
  if(isDataReady) {
    for(let i=0;i<astros.length;i++) {

      // draw the astro for each person in the array
      astros[i].drawAstro();
    }
  }
  if(mouseIsPressed) {
    for(let i=0;i<astros.length;i++) {
      astros[i].showName(mouseX, mouseY);
    }
  }
}



class Astro {
  constructor(name,craft) {
    this.craft = craft;
    this.name = name;
    this.x = random(0,400);
    this.y = random(0,400);
    this.r = 10;
  }
  drawAstro() {
    ellipse(this.x, this.y, 2*this.r);
  }

  showName(mx, my) {
    if(dist(mx, my, this.x, this.y) < this.r) {
      text(this.name, this.x, this.y);
    } else {
      //dont do anything
    }
    // return true if mouise is within ellipse, else false
  }

}



console.log("hello");
window.addEventListener("load", () => {
  console.log("page is loaded");
  fetch("./metro.json") // fetching the information from the URL/ file

  .then( response =>  response.json() ) // returning the Promise Object which contains data

  .then((data) => {
    console.log(data); // seeing the data
    allStations = data.stations;

    for(let i=0; i<allStations.length; i++) {

        console.log(allStations[i].name);

        let stationsItem = document.createElement('p');

        stationsItem.textContent = allStations[i].name.concat(" had ", allStations[i].number, " passengers and was constructed in ", allStations[i].year);
        paragraph.appendChild(stationsItem);
    }

  })

})