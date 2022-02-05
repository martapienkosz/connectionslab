## Jan 30 | Make things happen on the [page](https://martapienkosz.github.io/connectionslab/Jan30/index.html)
&nbsp;

### Process
For the purposes of this project, I wanted to create an interactive map of Abu Dhabi, where by clicking on a particular location, the user could see my photos taken in that place. I started out by creating an `svg` image in Adobe Illustrator.

![img](https://github.com/martapienkosz/connectionslab/blob/main/Jan30/doc/1.png)
![img](https://github.com/martapienkosz/connectionslab/blob/main/Jan30/doc/3.png)

I have modified the svg file by adding `<g>` elements with functions on `onmousemove`, `onmouseleave` and `onclick`. I have also created a background image out of the svg by adding properties in CSS: `top:0`, `left:0`, `position:fixed`, `min-width:100%` and `min-height:100%`.

```
<g cursor="pointer" onmousemove="highlightFoundation()" onmouseleave="dehighlightFoundation()" onclick="foundation()">
  <polygon id="foundation" class="cls-1" points="407.52 624.4 417.33 636.8 433.35 624.4 420.43 610.46 407.52 624.4"/>
</g>
```

Then, in JavaScript, I wrote down functions that would hint that certain elements on my page are interactive. `onmousemove` and` onmouseleave` modify the fill color of the interactive markers, while `onclick` selects an image from the `imgArray` and shows it in the image container. In this way, the user can click on any location, and the picture taken in that place will appear.

```
var i = 0;
function foundation() {
    var img = document.getElementById("image");
    document.getElementById("image").src = imgFoundationArray[i].src;
    i = i+1;
    if (i == imgFoundationArray.length) {
        i = 0;
    }
}

```
![img](https://github.com/martapienkosz/connectionslab/blob/main/Jan30/doc/2.png)

Each of the "imgArray" contains three photos, and by clicking a multiple times on a specific mark, the user can see more photos taken at that location. To enchance UX, I created a `container__appearingtext` with the text "... and again" that appears when the user hovers over the interactive mark.

```
document.getElementById("container__appearingtext").style.visibility = "visible";
document.getElementById("container__appearingtext").style.opacity = 1;
```
![img](https://github.com/martapienkosz/connectionslab/blob/main/Jan30/doc/5.png)

Finally, I added the `transition: 1.5s ease-out` to my CSS to smooth out the transitions on the page and make it more refined.

&nbsp;

### Room for improvement
- Making this website responsive
- Adding nicer transitions, showing pictures in a more intrestic, dynamic way
- Adding of sounds from specific locations to make it easier for the user to visualize the location

### Cool features
- `z-index: -1` would be useful when placing an image over an illustration. I liked the aesthetics of the lines covering the photos and decided not to use it in the end
