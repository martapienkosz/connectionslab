## April 11 | Library

### Process

For this project I have decided to create an interactive webpage using `Three.js` library. I watched some beginner-friendly tutorials ([this](https://www.youtube.com/watch?v=6oFvqLfRnsU) is my favorite one!) and read the [documentation](https://threejs.org/docs/#manual/en/introduction/Creating-a-scene) carefully.

I have started off with general setup for `scene`, `camera` anad `renderer`. Nextly I have created a `mesh` instance and played with its geometry(`BoxGeometry` or `SphereGeometry`) as well as material. 

```
let mesh = new THREE.Mesh(geometry, material);
mesh.position.set(2, 2, -2); // x, y, x
mesh.rotation.set(45,0,0);
mesh.scale.set(1,2,1)
scene.add(mesh);
```

![img](https://github.com/martapienkosz/connectionslab/blob/main/April11/dcmt/1.png)

Later on, I have played with event listener so that the box changes its geometry on `mousemove` or `click`. I have defined the positon of the client mouse position and used `raycaster` to check for interactions. 

```
mouse.x = (event.clientX / window.innerWidth)*2 -1;
mouse.y = - (event.clientY / window.innerHeight)*2 +1;)
raycaster.setFromCamera(mouse, camera)
```

I have used `gsap timelineMax` function to animate the box on  `click`. Finally, I have created more instances of the box, positioned in the random places and passed them to the `function onMouseMove(event)`.

I have also replaced a texture of a yellow color sliced images form my first project.

```
let texture = new THREE.TextureLoader().load( "array/"+i+".png" );
let material = new THREE.MeshBasicMaterial({map: texture});
```
![img](https://github.com/martapienkosz/connectionslab/blob/main/April11/dcmt/2.png)  

I have also tried to incorporate `OrbitControls` modules so that camera moves, but unfortunately I failed to import them both through CDN and npm. I am looking for some sollutions!

![img](https://github.com/martapienkosz/connectionslab/blob/main/April11/dcmt/123.gif) 

