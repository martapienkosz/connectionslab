## Feb 28 | Node-Express app
### Wireframe
![img](https://github.com/martapienkosz/connectionslab/blob/main/Jan24/doc/6.jpg)
&nbsp;

### Process
Since this is my first time using `Node.js`, I decided to create a very simple website that uses the fetched API. I collected data on the best countries of the Beijing 2022 Winter Olympics and stored information on the number of medals they won.

This is an example of the key-value object.

```
N : {
  name: "Norway",
  gold : 16,
  silver : 8,
  bronze: 13
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
  
![img](https://github.com/martapienkosz/connectionslab/blob/main/Feb28/dcmnt/3.png | height=400)![img](https://github.com/martapienkosz/connectionslab/blob/main/Feb28/dcmnt/2.png | height=400)  

### Cool features
- I have added an icon: `<link rel="shortcut icon" href="images/logo.ico"/>`
- I have deleted default a tag formating `a {text-decoration: none;}`
- I have hidden the scroll line `body::-webkit-scrollbar {display: none;}`
