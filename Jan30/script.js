console. log("hello");


window.addEventListener('load', function() {
    let inputBox = this.document.getElementById("input-box");
    inputBox.addEventListener('change', function(e) {
        console.log(e.target.value);

        let listItem = document.createElement('p');
        listItem.innerHTML = e.target.value;
        
        let list = document.getElementById("list");
        list.appendChild(listItem);
    })
})

var imgFoundationArray = new Array();

imgFoundationArray[0] = new Image();
imgFoundationArray[0].src = 'images/foundation1.png';
imgFoundationArray[1] = new Image();
imgFoundationArray[1].src = 'images/foundation2.png';
imgFoundationArray[2] = new Image();
imgFoundationArray[2].src = 'images/foundation3.png';


var imgMamszaArray = new Array();

imgMamszaArray[0] = new Image();
imgMamszaArray[0].src = 'images/mamsza1.JPG';
imgMamszaArray[1] = new Image();
imgMamszaArray[1].src = 'images/mamsza2.JPG';
imgMamszaArray[2] = new Image();
imgMamszaArray[2].src = 'images/mamsza3.JPG';


var imgAdnocArray = new Array();

imgAdnocArray [0] = new Image();
imgAdnocArray [0].src = 'images/adnoc1.png';
imgAdnocArray [1] = new Image();
imgAdnocArray [1].src = 'images/adnoc2.JPG';


var imgLouvreArray = new Array();

imgLouvreArray[0] = new Image();
imgLouvreArray[0].src = 'images/louvre1.png';
imgLouvreArray[1] = new Image();
imgLouvreArray[1].src = 'images/louvre2.png';
imgLouvreArray[2] = new Image();
imgLouvreArray[2].src = 'images/louvre3.png';


var imgJubailArray = new Array();

imgJubailArray[0] = new Image();
imgJubailArray[0].src = 'images/jubail1.png';
imgJubailArray[1] = new Image();
imgJubailArray[1].src = 'images/jubail2.png';
imgJubailArray[2] = new Image();
imgJubailArray[2].src = 'images/jubail3.png';


var imgMangrovesArray = new Array();

imgMangrovesArray[0] = new Image();
imgMangrovesArray[0].src = 'images/mangroves1.png';
imgMangrovesArray[1] = new Image();
imgMangrovesArray[1].src = 'images/mangroves2.png';
imgMangrovesArray[2] = new Image();
imgMangrovesArray[2].src = 'images/mangroves3.png';


var imgNyuArray = new Array();

imgNyuArray[0] = new Image();
imgNyuArray[0].src = 'images/nyu1.png';
imgNyuArray[1] = new Image();
imgNyuArray[1].src = 'images/nyu2.png';
imgNyuArray[2] = new Image();
imgNyuArray[2].src = 'images/nyu3.png';


var imgSaadyiatArray = new Array();

imgSaadyiatArray[0] = new Image();
imgSaadyiatArray[0].src = 'images/saadyiat1.png';
imgSaadyiatArray[1] = new Image();
imgSaadyiatArray[1].src = 'images/saadyiat2.png';
imgSaadyiatArray[2] = new Image();
imgSaadyiatArray[2].src = 'images/saadyiat3.png';



function highlightFoundation(){
    document.getElementById("foundation").style.fill='#4d83ac';
    document.getElementById("container__appearingtext").style.visibility = "visible";
    document.getElementById("container__appearingtext").style.opacity = 1;
  }

function dehighlightFoundation(){
    document.getElementById("foundation").style.fill='#FA8072';
    document.getElementById("container__appearingtext").style.visibility = "hidden";
    document.getElementById("container__appearingtext").style.opacity = 0;
}

function highlightMamsza(){
    document.getElementById("mamsza").style.fill='#4d83ac';
    document.getElementById("container__appearingtext").style.visibility = "visible";
    document.getElementById("container__appearingtext").style.opacity = 1;
  }

function dehighlightMamsza(){
    document.getElementById("mamsza").style.fill='#FA8072';
    document.getElementById("container__appearingtext").style.visibility = "hidden";
    document.getElementById("container__appearingtext").style.opacity = 0;
}

function highlightAdnoc(){
    document.getElementById("adnoc").style.fill='#4d83ac';
    document.getElementById("container__appearingtext").style.visibility = "visible";
    document.getElementById("container__appearingtext").style.opacity = 1;
  }

function dehighlightAdnoc(){
    document.getElementById("adnoc").style.fill='#FA8072';
    document.getElementById("container__appearingtext").style.visibility = "hidden";
    document.getElementById("container__appearingtext").style.opacity = 0;
}

function highlightMangroves(){
    document.getElementById("mangroves").style.fill='#4d83ac';
    document.getElementById("container__appearingtext").style.visibility = "visible";
    document.getElementById("container__appearingtext").style.opacity = 1;
  }

function dehighlightMangroves(){
    document.getElementById("mangroves").style.fill='#FA8072';
    document.getElementById("container__appearingtext").style.visibility = "hidden";
    document.getElementById("container__appearingtext").style.opacity = 0;
}

function highlightNyu(){
    document.getElementById("nyu").style.fill='#4d83ac';
    document.getElementById("container__appearingtext").style.visibility = "visible";
    document.getElementById("container__appearingtext").style.opacity = 1;
  }

function dehighlightNyu(){
    document.getElementById("nyu").style.fill='#FA8072';
    document.getElementById("container__appearingtext").style.visibility = "hidden";
    document.getElementById("container__appearingtext").style.opacity = 0;
}

function highlightSaadyiat(){
    document.getElementById("saadyiat").style.fill='#4d83ac';
    document.getElementById("container__appearingtext").style.visibility = "visible";
    document.getElementById("container__appearingtext").style.opacity = 1;
  }

function dehighlightSaadyiat(){
    document.getElementById("saadyiat").style.fill='#FA8072';
    document.getElementById("container__appearingtext").style.visibility = "hidden";
    document.getElementById("container__appearingtext").style.opacity = 0;
}

function highlightLouvre(){
    document.getElementById("louvre").style.fill='#4d83ac';
    document.getElementById("container__appearingtext").style.visibility = "visible";
    document.getElementById("container__appearingtext").style.opacity = 1;
  }

function dehighlightLouvre(){
    document.getElementById("louvre").style.fill='#FA8072';
    document.getElementById("container__appearingtext").style.visibility = "hidden";
    document.getElementById("container__appearingtext").style.opacity = 0;
}

function highlightJubail(){
    document.getElementById("jubail").style.fill='#4d83ac';
    document.getElementById("container__appearingtext").style.visibility = "visible";
    document.getElementById("container__appearingtext").style.opacity = 1;
  }

function dehighlightJubail(){
    document.getElementById("jubail").style.fill='#FA8072';
    document.getElementById("container__appearingtext").style.visibility = "hidden";
    document.getElementById("container__appearingtext").style.opacity = 0;
}


var i = 0;
function foundation() {
    var img = document.getElementById("image");
    document.getElementById("image").src = imgFoundationArray[i].src;
    i = i+1;
    if (i == imgFoundationArray.length) {
        i = 0;
    }
}

var i = 0;
function mamsza() {
    var img = document.getElementById("image");
    document.getElementById("image").src = imgMamszaArray[i].src;
    i = i+1;
    if (i == imgMamszaArray.length) {
        i = 0;
    }
}

var i = 0;
function adnoc() {
    var img = document.getElementById("image");
    document.getElementById("image").src = imgAdnocArray[i].src;
    i = i+1;
    if (i == imgAdnocArray.length) {
        i = 0;
    }
}

var i = 0;
function mangroves() {
    var img = document.getElementById("image");
    document.getElementById("image").src = imgMangrovesArray[i].src;
    i = i+1;
    if (i == imgMangrovesArray.length) {
        i = 0;
    }
}

var i = 0;
function nyu() {
    var img = document.getElementById("image");
    document.getElementById("image").src = imgNyuArray[i].src;
    i = i+1;
    if (i == imgNyuArray.length) {
        i = 0;
    }
}

var i = 0;
function nyu() {
    var img = document.getElementById("image");
    document.getElementById("image").src = imgNyuArray[i].src;
    i = i+1;
    if (i == imgNyuArray.length) {
        i = 0;
    }
    document.getElementById("text_comix").style.visibility = "visible";
    document.getElementById("text_comix").style.opacity = 1;
}

var i = 0;
function saadyiat() {
    var img = document.getElementById("image");
    document.getElementById("image").src = imgSaadyiatArray[i].src;
    i = i+1;
    if (i == imgSaadyiatArray.length) {
        i = 0;
    }
}

var i = 0;
function louvre() {
    var img = document.getElementById("image");
    document.getElementById("image").src = imgLouvreArray[i].src;
    i = i+1;
    if (i == imgLouvreArray.length) {
        i = 0;
    }
}

var i = 0;
function jubail() {
    var img = document.getElementById("image");
    document.getElementById("image").src = imgJubailArray[i].src;
    i = i+1;
    if (i == imgJubailArray.length) {
        i = 0;
    }
}




