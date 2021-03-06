## Feb 28 | Node-Express app

### Process
Since this is my first time using `Node.js`, I decided to create a very simple website that uses the fetched API. I collected data on the best countries of the Beijing 2022 Winter Olympics and stored information on the number of medals they won.

This is an example of the key-value object.

```
NL : {
  name: "Netherlands",
  gold : 8,
  silver : 5,
  bronze: 4
},
```

I started out by checking whether the requests were working properly. At first I thought that I would ask the user for the name of the country through the `inputbox`, then I would check if the country is in the `API` and then I would yield the appropriate values.

```
let countryQuery = req.query.country;
for (countryName in medals) {
  if (countryName == countryQuery) {
    console.log("target");
  }
}
```
However, I realized that it would be easier to display the country flags instead and show the data when clicking on the image. This reduces the possibility of errors and is more user-friendly.

![img](https://github.com/martapienkosz/connectionslab/blob/main/Feb28/dcmnt/0.png)

In my HTML I have created a `flexbox` that stores images of the flags.

```
<div class="container__flags">
  <img class="container__flags-item" id="NL" cursor="pointer" src="images/NL.png">
...
```
Since the flag IDs match the object names in the API, I was able to use `e.target` to detect user interaction, write a query, and fetch the response.

```
document.addEventListener("click", (e) => {
    fetch("/medals?country="+e.target.id)
    .then((response) => response.json())
    .then((data) => {
        console.log(data[e.target.id]["gold"]);
    })
});
```
  
![img](https://github.com/martapienkosz/connectionslab/blob/main/Feb28/dcmnt/1.png)  

Finally, I worked on styling and modifying the `innerHTML` to display the data appropriately. I have decided on a playful yet minimalist design that uses emoticons. By using `@media screen and (max-width: 767px)` I have ensured that the website looks good both on desktop and mobile.  

<img src="https://github.com/martapienkosz/connectionslab/blob/main/Feb28/dcmnt/3.png" height="400"> <img src="https://github.com/martapienkosz/connectionslab/blob/main/Feb28/dcmnt/2.png" height="400">

### Cool features
- I learned how to `use e.target` thanks to which I didn't have to copy and paste 10 different functions specific for each flag
