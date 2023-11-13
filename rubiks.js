
import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(3, 3, 3);
camera.lookAt(0, 0, 0);

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// Define colors for each face of the cube
//const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xffa500, 0xffffff];
const colors = [0x0000ff, 0x00ff00, 0xffff00, 0xffffff, 0xff0000, 0xffa500];

// Create materials for each face
const materials = colors.map((color) => new THREE.MeshBasicMaterial({ color }));


// Create a function to create a single cubelet
function createCubelet(x, y, z) {
    const cubeletSize = .95;
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
export function rotateLayer(layer) {
    // Define the rotation angle (in radians) and the rotation axis
    let axis = new THREE.Vector3();
    switch (layer) {
        case 'top':
            rubiksCube.children.forEach((cubelet) => {
                if (cubelet.position.y === 1) {
                    let temp = cubelet.position.x;
                    cubelet.position.x = cubelet.position.z;
                    cubelet.position.z = -1 * temp;
                    cubelet.rotateOnWorldAxis(new THREE.Vector3(0, -1, 0), -Math.PI/2);
                }
            });
            break;

        case 'bottom':
            rubiksCube.children.forEach((cubelet) => {
                if (cubelet.position.y === -1) {
                    let temp = cubelet.position.x;
                    cubelet.position.x = cubelet.position.z;
                    cubelet.position.z = -1 * temp;
                    cubelet.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), Math.PI/2);
                }
            });
            break;

        case 'left':
            rubiksCube.children.forEach((cubelet) => {
                if (cubelet.position.x === -1) {
                    let temp = cubelet.position.y;
                    cubelet.position.y = cubelet.position.z;
                    cubelet.position.z = -1 * temp;
                    cubelet.rotateOnWorldAxis(new THREE.Vector3(-1, 0, 0), Math.PI/2);
                }
            });
            break;

        case 'right':
            rubiksCube.children.forEach((cubelet) => {
                axis = new THREE.Vector3(0, 1, 0);
                if (cubelet.position.x === 1) {
                    let temp = cubelet.position.y
                    cubelet.position.y = cubelet.position.z
                    cubelet.position.z = -1*temp
                    cubelet.rotateOnWorldAxis(new THREE.Vector3(-1, 0, 0), -Math.PI/2);
                }
            });
            break;
        case 'front':
            rubiksCube.children.forEach((cubelet) => {
                if (cubelet.position.z === 1) {
                    let temp = cubelet.position.x
                    cubelet.position.x = cubelet.position.y;
                    cubelet.position.y = -1*temp;
                    cubelet.rotateOnWorldAxis(new THREE.Vector3(0, 0, -1), -Math.PI/2);
                }

            });
            //axis = new THREE.Vector3(0, 1, 0); //0Z-axis
            break;// Add cases for other layers (top, bottom, left, right, etc.) as needed
        case 'back':
            rubiksCube.children.forEach((cubelet) => {
                if (cubelet.position.z === -1) {
                    let temp = cubelet.position.x
                    cubelet.position.x = cubelet.position.y;
                    cubelet.position.y = -1*temp;
                    cubelet.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), -Math.PI/2);
                }

            });
            //axis = new THREE.Vector3(0, 1, 0); //0Z-axis
            break;
    }
    // You may need to adjust this point based on your cube's structure

    // const relativePosition = cubelet.position.clone().sub(pivot);
    // relativePosition.applyAxisAngle(axis, angle);
    // cubelet.position.copy(pivot.clone().add(relativePosition));
    // //cubelet.rotation.set(0, 0, 0); // Reset cubelet's rotation
    // console.log(cubelet.position)

    renderer.render(scene, camera);
}

const rotateFrontButton = document.getElementById('rotate-front-button');
rotateFrontButton.addEventListener('click', () => {
    rotateLayer('front');
});

const rotateRightButton = document.getElementById('rotate-right-button');
rotateRightButton.addEventListener('click', () => {
    rotateLayer('right');
});

const rotateLeftButton = document.getElementById('rotate-left-button');
rotateLeftButton.addEventListener('click', () => {
    rotateLayer('left');
});

const rotateTopButton = document.getElementById('rotate-top-button');
rotateTopButton.addEventListener('click', () => {
    rotateLayer('top');
});

const rotateBottomButton = document.getElementById('rotate-bottom-button');
rotateBottomButton.addEventListener('click', () => {
    rotateLayer('bottom');
});

const rotateBackButton = document.getElementById('rotate-back-button');
rotateBackButton.addEventListener('click', () => {
    rotateLayer('back');
});