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

