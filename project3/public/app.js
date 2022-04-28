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
    //   el.setAttribute('color', 'orange');
      let clickData = "blue ball click event";
      //emit socket on click
      socket.emit("interactionData", clickData);
    }

    this.changeToGreen = function(e) {
        el.setAttribute('color', 'green');
        let p = e.detail.intersection.point;
           let scene = document.querySelector("a-scene");
           let newMark = document.createElement("a-entity");

           newMark.setAttribute("geometry", {
               primitive: "sphere",
           });
           newMark.setAttribute("position", p);
           scene.appendChild(newMark);

    }
    //on socket receive
    socket.on('interactionDataFromServer', this.changeToGreen);
    this.el.addEventListener('click', this.toggleColor);
  },
  
  // INBUITLR REMOVE
  remove: function() {
    this.el.removeEventListener('click', this.toggleColor);
  }
})


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


