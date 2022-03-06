fetch("/medals")
.then(data => {
    console.log(data);
})

function changeText(text){
    document.getElementById("description").innerHTML = text;
}

// displaying information about medals won at the Olympics after clicking on a specific image
document.addEventListener("click", (e) => {
    fetch("/medals?country="+e.target.id)
    .then((response) => response.json())
    .then((data) => {
        let total = data[e.target.id]["gold"]+data[e.target.id]["silver"]+data[e.target.id]["bronze"];
        changeText(data[e.target.id]["name"]+" won "+total+" medals: "+data[e.target.id]["gold"]+ "🥇, "+data[e.target.id]["silver"]+"🥈 & "+data[e.target.id]["bronze"]+"🥉.")
    })
});