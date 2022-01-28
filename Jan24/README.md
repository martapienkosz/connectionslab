## Jan 27 | Simple Webpage[Gather](https://www.gather.town)
&nbsp;
#### Wireframe
![img](https://github.com/martapienkosz/connectionslab/blob/main/Jan24/doc/1.png)
&nbsp;

#### Process
I started building on the html file by pasting the exerpts from one of my essays to distinct divs and deciding on the text size. Nextly I added some formating by changing the fonts, background colors and created the very first flex box. I wanted to implement two separate columns - one for the text and the other for side notes. I hate when the text runs for the whole width of the screen and figured it would slit it up nicely.

![img](https://github.com/martapienkosz/connectionslab/blob/main/Jan24/doc/1.png)![img](https://github.com/martapienkosz/connectionslab/blob/main/Jan24/doc/2.png) 


Here is the exerpts from HTML:

```
<div class="container">
  <div class="container__info-itemright">
    <h3>Description</h3>
    <h4>text</h4>
  </div>
  <div class="container__info-itemleft">
    <h3>Author</h3>
    <h4>January 28, 2022</h4>
  </div>
</div>
```

and CSS.

```
.container{
  margin-top: 0%;
  display: flex;
  justify-content: space-between;
  align-items: top;
}

.container__info-itemright {
  width: 65%;
  margin: 2% 5% 0% 3%;
}

.container__info-itemleft {
  width: 35%;
  margin: 2% 3% 0% 5%;
}
```

![img](https://github.com/martapienkosz/connectionslab/blob/main/Jan24/doc/3.png) 

In the `container__info-itemleft` class I added pictures here and there and embeded a video using `<iframe>` command. At the very bottom I have included a picture gallery build up from two flex boxes, as outlined in my wireframe.

I have also added a `theme-container` with a `theme-container__item` that would resize depeding on the `theme-container` dimnensions. For that I have added a `object-fit: cover;` property

```
.theme-container {
  height: 300px;
  width: 100%;
  overflow: hidden;
}

.theme-container__item {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
```

Lastly I have implemented a simple nav bar with two icons. Ideally these should link to the home page and info pages.

![img](https://github.com/martapienkosz/connectionslab/blob/main/Jan24/doc/4.png)
&nbsp;
![img](https://github.com/martapienkosz/connectionslab/blob/main/Jan24/doc/5.png) 
&nbsp;

### Cool features
- I have added an icon: `<link rel="shortcut icon" href="images/logo.ico"/>`
- I have deleted default a tag formating `a {text-decoration: none;}`
- I have hidden the scroll line `body::-webkit-scrollbar {display: none;}`

&nbsp;
&nbsp;

## Jan 25 | Critigue of a connected App: [Gather](https://www.gather.town)
&nbsp;

#### A better way to hang out
Gather is a virtual meeting platform, whose virtual rooms have a unique dimension. The application allows admins to create fully customizable spaces where they can hold their meetings or events and invite guests to join their space. The invited users, instead of seeing the gallery of their colleague’s faces, as is the case in traditional videoconferences, see a two-dimensional space with freely moving avatars. People can join different conversations by coming closer in space to specific avatars.
&nbsp;

#### What do you think works?
The idea of physical proximity as being necessary to sustain a conversation seems to be the guiding prince of the design. In zoom, for example, everyone seems to be in the spotlight, which is why casual small talks are not sustained. Being able to engage in an organic discussion with people nearby seems to be much more natural than joining breakout rooms. Gather thus becomes a very unstructured place that gives the user the freedom to interact or not with other guests.
&nbsp;

#### What doesn't?
Although users can walk around the space and join conversations freely, they cannot take advantage of the unique feature of the space in which they are located. They are still aware of their home office presence and are unable to immerse themselves in a created space as they would in the actual office. Moreover, outside 
&nbsp;

#### What would you like to do differently?
To some extent, I believe that Gather is a two-dimensional version of what Mark Zuckerber 's Metaverse is about to become. A free, open space where people can communicate and meet virtually. The main difference, however, is that the space offered by Zuckerberg, using the VR technology, may seem much more natural and organic than the Gather proposition. I think immersion is covered very briefly in this combined app and the next step might be to focus on how to make these custom spaces feel much more real.
