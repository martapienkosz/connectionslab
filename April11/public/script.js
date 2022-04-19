let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

// webpage setup (background color + size)
let renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// check for resize and change aspect ratio
window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectMatrix();
})

let raycaster = new THREE.Raycaster(); // work as eventListener
let mouse = new THREE.Vector2();
let geometry = new THREE.BoxGeometry(1, 1, 1);


let meshX = -10;
for(let i = 0; i<16; i++) {
    // load and add texture
    let texture = new THREE.TextureLoader().load( "array/"+i+".png" ); // load texture
    let material = new THREE.MeshBasicMaterial({map: texture});
    let mesh = new THREE.Mesh(geometry, material);

    // initalize more boxes in random places
    mesh.position.x = (Math.random() - 0.5) *6;
    mesh.position.y = (Math.random() - 0.5) *6;
    mesh.position.z = (Math.random() - 0.5) *6;
    scene.add(mesh);
    meshX +=1;
}

// play with light
let light = new THREE.PointLight(0xFFFFFF, 1, 1000)
light.position.set(0, 0, 0)
scene.add(light)

// draw a scene on refresh
let render = function() {
    requestAnimationFrame(render);
    renderer.render(scene, camera)
}

function onMouseMove(event) {
    event.preventDefault();
    // define mouse behaviour
    mouse.x = (event.clientX / window.innerWidth)*2 -1;
    mouse.y = - (event.clientY / window.innerHeight)*2 +1;

    raycaster.setFromCamera(mouse, camera)

    // check for intersection between mouse and rendered boxes
    let intersects = raycaster.intersectObjects(scene.children, true);
    for (let i = 0; i < intersects.length; i++) {
         // using gsap timelineMax
        this.tl = new TimelineMax() //smoothing animation
        this.tl.to(intersects[i].object.scale, 1, {x: 2, ease: Expo.easeOut}) // scale for 1s in x axis till 2
        this.tl.to(intersects[i].object.scale, 0.5, {x: 0.5, ease: Expo.easeOut})
        this.tl.to(intersects[i].object.position, 0.5, {x: 2, ease: Expo.easeOut})
        this.tl.to(intersects[i].object.rotation, 0.5, {y: Math.PI*0.5, ease: Expo.easeOut}, "=- 1.5") // will happen 1.5s faster
    }
}

render();

window.addEventListener("click", onMouseMove)
