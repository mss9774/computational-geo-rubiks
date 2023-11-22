import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(3, 3, 3);
camera.lookAt(0, 0, 0);

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('cube-container').appendChild(renderer.domElement);

const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xffa500, 0xffffff, 0x808080]; //Last is grey

// Create materials for each face
const materials = colors.map((color) => new THREE.MeshBasicMaterial({color}));

// Create a function to create a single cubelet
function createCubelet(x, y, z, isimportant) {
    const cubeletSize = .95;
    const cubeletGeometry = new THREE.BoxGeometry(cubeletSize, cubeletSize, cubeletSize);
    let cubeletMaterials = [];
    if (isimportant) {
        cubeletMaterials = [
            materials[0], materials[1], materials[2], // Front, Back, Top
            materials[3], materials[4], materials[5], // Bottom, Left, Right
        ];
    }
    else {
        cubeletMaterials = [
            materials[6], materials[6], materials[6], // Front, Back, Top
            materials[6], materials[6], materials[6], // Bottom, Left, Right
        ];
    }
    const cubelet = new THREE.Mesh(cubeletGeometry, cubeletMaterials);
    cubelet.position.set(x, y, z);
    return cubelet;
}

// Create the Rubik's Cube by assembling cubelets
const rubiksCube = new THREE.Object3D();

for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
            rubiksCube.add(createCubelet(x, y, z, true));
        }
    }
}

const controls = new OrbitControls(camera, renderer.domElement);
scene.add(rubiksCube);

function rotateLayer(layer) {
    // Define the rotation angle (in radians) and the rotation axis
    const angle = Math.PI / 2; // 90 degrees
    let axis = new THREE.Vector3();
    //rubiksCube.rotation.y += Math.PI/2;
    switch (layer) {
        case 'up':
            let upchildren = rubiksCube.children[]
            rubiksCube.children.forEach((cubelet) => {
                axis = new THREE.Vector3(0, 1, 0);
                if (cubelet.position.y === 1) {
                    const pivot = new THREE.Vector3(0, 1, 0); // You may need to adjust this point based on your cube's structure

                    // const relativePosition = cubelet.position.clone().sub(pivot);
                    // relativePosition.applyAxisAngle(axis, angle);
                    // cubelet.position.copy(pivot.clone().add(relativePosition));
                    let temp = cubelet.position.x
                    cubelet.position.x = cubelet.position.z
                    cubelet.position.z = -1*temp



                   // cubelet.rotateY(Math.PI/2)
                    cubelet.rotation.y += Math.PI/2; // Reset cubelet's rotation
                    //cubelet.rotation.z += Math.PI / 2
                }
            });
            break;
        case 'front':
            rubiksCube.children.forEach((cubelet) => {
                axis = new THREE.Vector3(0, 0, 1);
                let angle = Math.PI/2
                if (cubelet.position.z === 1) {

                    let temp = cubelet.position.x
                    cubelet.position.x = cubelet.position.y;
                    cubelet.position.y = -1*temp;
                    cubelet.rotation.z += Math.PI/2; // Reset cubelet's rotation

                }

            });

            //axis = new THREE.Vector3(0, 1, 0); //0Z-axis
            break;// Add cases for other layers (top, bottom, left, right, etc.) as needed
    }
}

const rotateButton = document.getElementById('rotate-front-button');
rotateButton.addEventListener('click', () => {
    rotateLayer('front');
});

const rotate2Button = document.getElementById('rotate-up-button');
rotate2Button.addEventListener('click', () => {
    rotateLayer('up');
});

const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
