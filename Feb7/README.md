## Feb 7 | Brief for [page](https://martapienkosz.github.io/connectionslab/Jan30/index.html)
&nbsp;

### Idea
In my first project, I would like to artistically visualize the popularity of various Warsaw metro stations. I'm going to create a svg map of the metro scheme and draw a circle of a specific diameter corresponding to the location of the particular station. The area of each circle will correspond to the number of passengers hoping on the train at each station daily. I'm really curious about the outcome of this algorithmic art and intend it to be visually and mathematically pleasing. The main audience of my website will be people living in Warsaw, as the data may seem more meaningful to them. Nevertheless, I hope interactions and data visualisation will be interesting for a winder NYUAD audience.

![img](https://github.com/martapienkosz/connectionslab/blob/main/Feb7/doc/sketch.png)


### Process
Firstly, I searched Wikipedia for data on daily entries to particular Warsaw metro stations. I have found some tables with data for both [1st line](https://pl.wikipedia.org/wiki/Linia_M1_metra_w_Warszawie) and [2nd](https://pl.wikipedia.org/wiki/Linia_M2_metra_w_Warszawie). I created a `JSON` file by compiling this data and supplementing it with the [year of completion](https://en.wikipedia.org/wiki/Warsaw_Metro).

This is an example of the `key-value` object.

```
	"stations": [{
			"name": "Rondo Daszynskiego",
			"number": 5467700,
			"year": 2015
		},
```

Then, in JavaScript, I fetched the information from the `JSON file`, created and returned the promise and loged the data. I have then created a for loop that retrives a paragraph with a simple sentence to properly display relevant info on the page.

```
stationsItem.textContent = allStations[i].name.concat(" had ", allStations[i].number, " passengers and was constructed in ", allStations[i].year);

```
And here is the work in progress.
![img](https://github.com/martapienkosz/connectionslab/blob/main/Feb7/doc/initial.png)

&nbsp;

### Room for improvement
- 
### Cool features
- 
