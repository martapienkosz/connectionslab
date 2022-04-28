let socket = io(); // opens and connect to socket

//listen for confirmation
socket.on('connect', () => {
  console.log("client connected via sockets");
})

const AFRAME = window.AFRAME;
AFRAME.registerComponent('color-toggle', {

 // INIT COMPONENT FUNCTIONS
  init: function() {
    let el = this.el;
    
    this.toggleColor = function() {
      // el.setAttribute('color', 'orange');
      let clickData = "blue ball click event";
      // emit socket data on click
      socket.emit("interactionData", clickData);
    }

    this.changeToGreenAndAddSpheres = function(e) {
        el.setAttribute('color', 'green');
        console.log("works until here") // code works
        let p = e.detail.intersection.point;
        console.log("... and crashes") // and crashes here
           let scene = document.querySelector("a-scene");
           let newMark = document.createElement("a-entity");

           newMark.setAttribute("geometry", {
               primitive: "sphere",
           });
           newMark.setAttribute("position", p);
           newMark.setAttribute("material", "color: red");
           newMark.setAttribute("scale", ".2 .2 .2");
           scene.appendChild(newMark);

    }
    // on socket receive run function
    socket.on('interactionDataFromServer', this.changeToGreenAndAddSpheres);
    this.el.addEventListener('click', this.toggleColor);
  },
})

// without sockets this one works
AFRAME.registerComponent('target-marker', {

    // INIT COMPONENT FUNCTIONS
     init: function() {
       let el = this.el;

       this.addMarker = function(e) {
           let p = e.detail.intersection.point;
           let scene = document.querySelector("a-scene");
           let newMark = document.createElement("a-entity");

           newMark.setAttribute("geometry", {
               primitive: "sphere",
           });

           newMark.setAttribute("material", "color: red");
           newMark.setAttribute("scale", ".2 .2 .2");
           newMark.setAttribute("position", p);
        //    newMark.setAttribute("target-marker", {})
           scene.appendChild(newMark);
        }

        this.el.addEventListener("click", this.addMarker);
    },
    
})


