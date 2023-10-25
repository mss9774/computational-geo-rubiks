import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(2, 2, 2);
camera.lookAt(0, 0, 0);

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Define colors for each face of the cube
const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xffa500, 0xffffff];

// Create materials for each face
const materials = colors.map((color) => new THREE.MeshBasicMaterial({ color }));

// Create a function to create a single cubelet
function createCubelet(x, y, z) {
    const cubeletSize = 1 / 3;
    const cubeletGeometry = new THREE.BoxGeometry(cubeletSize, cubeletSize, cubeletSize);
    const cubeletMaterials = [
        materials[0], materials[1], materials[2], // Front, Back, Top
        materials[3], materials[4], materials[5], // Bottom, Left, Right
    ];
    const cubelet = new THREE.Mesh(cubeletGeometry, cubeletMaterials);
    cubelet.position.set(x, y, z);
    return cubelet;
}

// Create the Rubik's Cube by assembling cubelets
const rubiksCube = new THREE.Object3D();

for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
            rubiksCube.add(createCubelet(x, y, z));
        }
    }
}

scene.add(rubiksCube);
renderer.render(scene, camera);
// Create an animation loop
function rotateLayer(layer) {
    console.log("AHHHHHH")
    // Define the rotation angle (in radians) and the rotation axis
    const angle = Math.PI / 2; // 90 degrees
    let axis = new THREE.Vector3();
    rubiksCube.rotation.x += 0.300;
    switch (layer) {
        case 'front':
            axis = new THREE.Vector3(0, 0, 1); // Z-axis
            break;
        // Add cases for other layers (top, bottom, left, right, etc.) as needed
    }

    // Define the pivot point for the rotation
    const pivot = new THREE.Vector3(0, 0, 0); // You may need to adjust this point based on your cube's structure

    // Apply the rotation to each cubelet
    rubiksCube.children.forEach((cubelet) => {
        const relativePosition = cubelet.position.clone().sub(pivot);
        relativePosition.applyAxisAngle(axis, angle);
        cubelet.position.copy(pivot.clone().add(relativePosition));
        cubelet.rotation.set(0, 0, 0); // Reset cubelet's rotation
    });

    renderer.render(scene, camera);
}

const rotateButton = document.getElementById('rotate-button');
rotateButton.addEventListener('click', () => {
    rotateLayer('front');
});


