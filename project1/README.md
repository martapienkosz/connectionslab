## Feb 7 | Data visualization [Webpage](https://martapienkosz.github.io/connectionslab/project1/index.html)
&nbsp;

### Idea
For this project, I would like to artistically visualize the popularity of various Warsaw metro stations. I'm going to create a svg map of the metro scheme and draw a circle of a specific diameter signifying the location of the particular station. The area of each circle will correspond to the number of passengers hoping on the train at each station daily. I'm really curious about the outcome of this algorithmic art and intend it to be visually and mathematically pleasing. The main audience of my website will be people living in Warsaw, as the data may seem more meaningful to them. Nevertheless, I hope interactions and data visualisation will be interesting for a wider NYUAD audience.


### Pre-Process
Firstly, I searched Wikipedia for data on daily entries to particular Warsaw metro stations. I have found some tables with data for both [1st line](https://pl.wikipedia.org/wiki/Linia_M1_metra_w_Warszawie) and [2nd](https://pl.wikipedia.org/wiki/Linia_M2_metra_w_Warszawie). I created a `JSON` file by compiling this data and supplementing it with the [year of completion](https://en.wikipedia.org/wiki/Warsaw_Metro).

This is an example of the `key-value` object.

```
"stations": [{
	"name": "Rondo Daszynskiego",
	"number": 5467700,
	"year": 2015
},
```

Then, in JavaScript, I fetched the information from the `JSON file`, created and returned the promise and loged the data. I have then created a for loop that retrives a paragraph with a simple sentence to properly display relevant info on the page: `stationsItem.textContent = allStations[i].name.concat(" had ", allStations[i].number, " passengers and was constructed in ", allStations[i].year);`.

### Process
Using `p5.js`, I have sketched the M1 metro line, taking into account the distinct number of passengers using the station: `M1stations[tmc].year`. After a while, I realized that this idea was quite boring and decided to tweak it a bit.

![img](https://github.com/martapienkosz/connectionslab/blob/main/project1/dcmnt/1.png)

I decided to add sound and build the whole experience around [Next Station](https://www.youtube.com/watch?v=TZgBIbqtDnQ) by Taco Hemingway. It is a hip-hop track based on the Warsaw metro system. Taco takes us on a journey along and across Warsaw - from north to south and from east to west, devoting a few lines to each station of both metro lines. I decided that my map of metro stations will be created along with the names of stations sung by Taco stations. Music is thus coordinated with data visualization.

First, I divided the [album cover](https://github.com/martapienkosz/connectionslab/blob/main/project1/img.jpg) into 16 smaller photos. I have stored them all in `AlbumCover` array. Then, for each subway station, in a random place I drew one of these pictures with a certain width - corresponding to the popularity of the station. The bigger the picture, the more popular the station.

```
let x = random(window.innerWidth*0.8-this.width); // placing an image on a randomly on canvas
let y = random(window.innerHeight-this.width);

this.image = random(AlbumCover);
image(this.image, x, y, this.width, this.width);
```

I wanted my project to show the reasons behind popularity of a particular station. I have expanded my dataset and compiled the data on possible interchanges (from [this](https://www.metro.waw.pl/stacja-kabaty-157) website) - I wanted to check if the number of aviable bus and tram lines corresponded to greater popularity.

For each image, I created a grid of 49 tiles and color coded them based on possible changes: the number of pink tiles corresponds to the number of possible changes to the trams, the number of pink tiles with 50% transparency corresponds to the number of possible changes to the bus. I have first created an array and populated it with values :`240` for tram, `120` for bus and `0` for what's left. Nextly I have shuffled the values `let newArray = shuffle(this.colorArray)` and drew 49 rectangles with specific `tint`.

```
for (let g=0; g<this.tram;g++) { // array stores colors corresponding to number of trams
	append(this.colorArray, 240);
	this.colorArray.append;
}
```

![img](https://github.com/martapienkosz/connectionslab/blob/main/project1/dcmnt/2.png)

```
image(this.image, x, y, this.width, this.width);
for (let a=0; a< this.tileAmount; a++) {
	for (let i=0; i< this.tileAmount; i++) { // crating a grid
		fill(colors[col][0], colors[col][1], colors[col][2], newArray[n]);
        	rect(x+this.tileSize*a, y+this.tileSize*i, this.tileSize, this.tileSize);
      }
}
```

![img](https://github.com/martapienkosz/connectionslab/blob/main/project1/dcmnt/4.png)

Then I wanted to coordinate the appearance of the image on the screen over time. In the `timeManager` board, I wrote down the seconds Taco mentions the name of the metro station in his song. Then with the condition `if (int (counter) == int (timeManager [tmc]))` I controlled the apperance of a yet another element.

![img](https://github.com/martapienkosz/connectionslab/blob/main/project1/dcmnt/5.png)

Later I extended my `CSS` and `HTML` file with a div on the right, which shows the name of the station along with information about the year it was built and any changes.

```
function changeStationName(text){
	document.getElementById("stationName").innerHTML = text;
}

changeStationName(M1stations[tmc].name);
```

![img](https://github.com/martapienkosz/connectionslab/blob/main/project1/dcmnt/6.png)

I wanted to develop interactivity and include a user driven event and decided that the color of tiles appearing on each image would be determined by the position of the user's mouse. For this purpose, I created a nested `colors` array that stores vivid colors. Then, depending on the horizontal position of the user's mouse (`mouseX`), the drawn squares take the mapped color.

```
col = int(map(mouseX, 0, window.innerWidth, 0, colors.length)
fill(colors[col][0], colors[col][1], colors[col][2], newArray[n]);
```

![img](https://github.com/martapienkosz/connectionslab/blob/main/project1/dcmnt/7.png)

&nbsp;
