console.log("this is the web")

fetch("/cats")
.then(data => {
    console.log(data);
})