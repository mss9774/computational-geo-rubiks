// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';
import { cube } from './controller.js';

export let animation = false;
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(3, 3, 3);
camera.lookAt(0, 0, 0);

// Create a renderer
const renderer = new THREE.WebGLRenderer();
const scale = .5; // Set your desired width
renderer.setSize(window.innerWidth * scale, window.innerHeight * scale);


const sceneContainer = document.getElementById('cube-container');
sceneContainer.appendChild(renderer.domElement);
// const controls = new OrbitControls(camera, renderer.domElement);

// Define colors for each face of the cube
//const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xffa500, 0xffffff];
const colors = [0x00ff00, 0x0000ff, 0xffff00, 0xffffff, 0xff0000, 0xffa500, 0x808080];

// Create materials for each face
const materials = colors.map((color) => new THREE.MeshBasicMaterial({ color }));


// Create a function to create a single cubelet
function createCubelet(x, y, z) {
    const cubeletSize = .97;
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

function convertToColor(controllercolor) {
    if (controllercolor === 'G') {
        return materials[0];
    }
    else if (controllercolor === 'O') {
        return materials[5];
    }
    else if (controllercolor === 'B') {
        return materials[1];
    }
    else if (controllercolor === 'R') {
        return materials[4];
    }
    else if (controllercolor === 'Y') {
        return materials[2];
    }
    else if (controllercolor === 'W') {
        return materials[3];
    }
    else {
        return materials[6];
    }
}

export function createCubeFromInput(cube) {
    rubiksCube.clear();
    for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
            for (let z = -1; z <= 1; z++) {
                const cubeletSize = .97
                const cubeletGeometry = new THREE.BoxGeometry(cubeletSize, cubeletSize, cubeletSize);
                let cubeletMaterials = [
                    materials[6], materials[6], materials[6],
                    materials[6], materials[6], materials[6]
                ];
                if (z === 1) {
                    //cubeletMaterials[0] = convertToColor(cube[0][1 - y][x + 1]);
                    cubeletMaterials[4] = convertToColor(cube[0][1 - y][x + 1]);
                }
                else if (z === -1) {
                    //cubeletMaterials[1] = convertToColor(cube[2][1 - y][x + 1]);
                    cubeletMaterials[5] = convertToColor(cube[2][1 - y][1 - x]);
                }
                if (x === 1) {
                    //cubeletMaterials[5] = convertToColor(cube[1][1 - y][z + 1]);
                    cubeletMaterials[0] = convertToColor(cube[1][1 - y][1 - z]);
                }
                if (x === -1) {
                    //cubeletMaterials[4] = convertToColor(cube[3][1 - y][z + 1]);
                    cubeletMaterials[1] = convertToColor(cube[3][1 - y][z + 1]);
                }
                if (y === 1) {
                    cubeletMaterials[2] = convertToColor(cube[4][z + 1][x + 1]);
                }
                if (y === -1) {
                    cubeletMaterials[3] = convertToColor(cube[5][1 - z][x + 1]);
                }
                //cubeletMaterials[4] = materials[7];
                let cubelet = new THREE.Mesh(cubeletGeometry, cubeletMaterials);
                cubelet.position.set(x, y, z);
                rubiksCube.add(cubelet);
            }
        }
    }
    renderer.render(scene, camera);
}

export async function animationLoop(layer, counter, duration = 10) {

    if (animation) {
        return;
    }

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    animation = true;
    for (let f = 0; f < duration; f++) {
        rotateAnimation(layer, counter, duration);
        await delay(100);
    }
    animation = false;

    rubiksCube.children.forEach((cubelet) => {
        cubelet.position.x = Math.round(cubelet.position.x);
        cubelet.position.y = Math.round(cubelet.position.y);
        cubelet.position.z = Math.round(cubelet.position.z);
    });

}

function rotateAnimation(layer, counter, duration) {
    console.log(layer);
    // Define the rotation angle (in radians) and the rotation axis
    let axis = new THREE.Vector3();
    switch (layer) {
        case 'top':
            if(counter){
                rubiksCube.children.forEach((cubelet) => {
                    if (cubelet.position.y === 1) {
                        let x = cubelet.position.x;
                        let z = cubelet.position.z;

                        let cosTheta = Math.cos(-(Math.PI/2) / duration);
                        let sinTheta = Math.sin(-(Math.PI/2) / duration);

                        let newX = x * cosTheta - z * sinTheta;
                        let newZ = x * sinTheta + z * cosTheta;
                        cubelet.position.x = newX;
                        cubelet.position.z = newZ;
                        cubelet.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), (Math.PI/2) / duration);
                    }
                });
            } else {
                rubiksCube.children.forEach((cubelet) => {
                    if (cubelet.position.y === 1) {
                        let x = cubelet.position.x;
                        let z = cubelet.position.z;

                        let cosTheta = Math.cos((Math.PI/2) / duration);
                        let sinTheta = Math.sin((Math.PI/2) / duration);

                        let newX = x * cosTheta - z * sinTheta;
                        let newZ = x * sinTheta + z * cosTheta;
                        cubelet.position.x = newX;
                        cubelet.position.z = newZ;
                        cubelet.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), -(Math.PI/2) / duration);
                    }
                });
            }
            break;

        case 'bottom':
            if(!counter){
                rubiksCube.children.forEach((cubelet) => {
                    if (cubelet.position.y === -1) {
                        let x = cubelet.position.x;
                        let z = cubelet.position.z;

                        let cosTheta = Math.cos(-(Math.PI/2) / duration);
                        let sinTheta = Math.sin(-(Math.PI/2) / duration);

                        let newX = x * cosTheta - z * sinTheta;
                        let newZ = x * sinTheta + z * cosTheta;
                        cubelet.position.x = newX;
                        cubelet.position.z = newZ;
                        cubelet.rotateOnWorldAxis(new THREE.Vector3(0, -1, 0), -(Math.PI/2) / duration);
                    }
                });
            }
            else {
                rubiksCube.children.forEach((cubelet) => {
                    if (cubelet.position.y === -1) {
                        let x = cubelet.position.x;
                        let z = cubelet.position.z;

                        let cosTheta = Math.cos((Math.PI/2) / duration);
                        let sinTheta = Math.sin((Math.PI/2) / duration);

                        let newX = x * cosTheta - z * sinTheta;
                        let newZ = x * sinTheta + z * cosTheta;
                        cubelet.position.x = newX;
                        cubelet.position.z = newZ;
                        cubelet.rotateOnWorldAxis(new THREE.Vector3(0, -1, 0), (Math.PI/2) / duration);
                    }
                });
            }
            break;

        case 'left':
            if(counter){
                rubiksCube.children.forEach((cubelet) => {
                    if (cubelet.position.x === -1) {
                        let z = cubelet.position.z;
                        let y = cubelet.position.y;

                        let cosTheta = Math.cos((Math.PI/2) / duration);
                        let sinTheta = Math.sin((Math.PI/2) / duration);

                        let newZ = z * cosTheta - y * sinTheta;
                        let newY = z * sinTheta + y * cosTheta;
                        cubelet.position.z = newZ;
                        cubelet.position.y = newY;
                        cubelet.rotateOnWorldAxis(new THREE.Vector3(-1, 0, 0), (Math.PI/2) / duration);
                    }
                });
            } else {
                rubiksCube.children.forEach((cubelet) => {
                    if (cubelet.position.x === -1) {
                        let z = cubelet.position.z;
                        let y = cubelet.position.y;

                        let cosTheta = Math.cos(-(Math.PI/2) / duration);
                        let sinTheta = Math.sin(-(Math.PI/2) / duration);

                        let newZ = z * cosTheta - y * sinTheta;
                        let newY = z * sinTheta + y * cosTheta;
                        cubelet.position.z = newZ;
                        cubelet.position.y = newY;
                        cubelet.rotateOnWorldAxis(new THREE.Vector3(-1, 0, 0), -(Math.PI/2) / duration);
                    }
                });
            }
            break;

        case 'right':
            if(!counter){
                rubiksCube.children.forEach((cubelet) => {
                    if (cubelet.position.x === 1) {
                        let z = cubelet.position.z;
                        let y = cubelet.position.y;

                        let cosTheta = Math.cos((Math.PI/2) / duration);
                        let sinTheta = Math.sin((Math.PI/2) / duration);

                        let newZ = z * cosTheta - y * sinTheta;
                        let newY = z * sinTheta + y * cosTheta;
                        cubelet.position.z = newZ;
                        cubelet.position.y = newY;
                        cubelet.rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), -(Math.PI/2) / duration);
                    }
                });
            } else {
                rubiksCube.children.forEach((cubelet) => {
                    if (cubelet.position.x === 1) {
                        let z = cubelet.position.z;
                        let y = cubelet.position.y;

                        let cosTheta = Math.cos(-(Math.PI/2) / duration);
                        let sinTheta = Math.sin(-(Math.PI/2) / duration);

                        let newZ = z * cosTheta - y * sinTheta;
                        let newY = z * sinTheta + y * cosTheta;
                        cubelet.position.z = newZ;
                        cubelet.position.y = newY;
                        cubelet.rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), (Math.PI/2) / duration);
                    }
                });
            }
            break;
        case 'front':
            if(counter){
                rubiksCube.children.forEach((cubelet) => {
                    if (cubelet.position.z === 1) {
                        let x = cubelet.position.x;
                        let y = cubelet.position.y;

                        let cosTheta = Math.cos((Math.PI/2) / duration);
                        let sinTheta = Math.sin((Math.PI/2) / duration);

                        let newX = x * cosTheta - y * sinTheta;
                        let newY = x * sinTheta + y * cosTheta;
                        cubelet.position.x = newX;
                        cubelet.position.y = newY;
                        cubelet.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), (Math.PI/2) / duration);
                    }
                });
            } else {
                rubiksCube.children.forEach((cubelet) => {
                    if (cubelet.position.z === 1) {
                        let x = cubelet.position.x;
                        let y = cubelet.position.y;

                        let cosTheta = Math.cos(-(Math.PI/2) / duration);
                        let sinTheta = Math.sin(-(Math.PI/2) / duration);

                        let newX = x * cosTheta - y * sinTheta;
                        let newY = x * sinTheta + y * cosTheta;
                        cubelet.position.x = newX;
                        cubelet.position.y = newY;
                        cubelet.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), -(Math.PI/2) / duration);
                    }
                });
            }
            break;
        case 'back':
            if(!counter){
                rubiksCube.children.forEach((cubelet) => {
                    if (cubelet.position.z === -1) {
                        let x = cubelet.position.x;
                        let y = cubelet.position.y;
                        
                        let cosTheta = Math.cos((Math.PI/2) / duration);
                        let sinTheta = Math.sin((Math.PI/2) / duration);

                        let newX = x * cosTheta - y * sinTheta;
                        let newY = x * sinTheta + y * cosTheta;
                        cubelet.position.x = newX;
                        cubelet.position.y = newY;
                        cubelet.rotateOnWorldAxis(new THREE.Vector3(0, 0, -1), -(Math.PI/2) / duration);
                    }
                });
            } else {
                rubiksCube.children.forEach((cubelet) => {
                    if (cubelet.position.z === -1) {
                        let x = cubelet.position.x;
                        let y = cubelet.position.y;
                        
                        let cosTheta = Math.cos(-(Math.PI/2) / duration);
                        let sinTheta = Math.sin(-(Math.PI/2) / duration);

                        let newX = x * cosTheta - y * sinTheta;
                        let newY = x * sinTheta + y * cosTheta;
                        cubelet.position.x = newX;
                        cubelet.position.y = newY;
                        cubelet.rotateOnWorldAxis(new THREE.Vector3(0, 0, -1), (Math.PI/2) / duration);
                    }
                });
            }
            break;
    }

    renderer.render(scene, camera);

}

// Create an animation loop
export function rotateLayer(layer, counter) {
    console.log(layer);
    // Define the rotation angle (in radians) and the rotation axis
    let axis = new THREE.Vector3();
    switch (layer) {
        case 'top':
            if(counter){
                rubiksCube.children.forEach((cubelet) => {
                    if (cubelet.position.y === 1) {
                        let temp = cubelet.position.x;
                        cubelet.position.x = cubelet.position.z;
                        cubelet.position.z = -1 * temp;
                        cubelet.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), Math.PI/2);
                    }
                });
            } else {
                // rubiksCube.children.forEach((cubelet) => {
                //     if (cubelet.position.y === 1) {
                //         let temp = cubelet.position.x;
                //         cubelet.position.x = cubelet.position.z;
                //         cubelet.position.z = -1 * temp;
                //         cubelet.rotateOnWorldAxis(new THREE.Vector3(0, -1, 0), Math.PI/2);
                //     }
                // });
                rotateLayer(layer, true);
                rotateLayer(layer, true);
                rotateLayer(layer, true);
            }

            break;

        case 'bottom':
            if(!counter){
                rubiksCube.children.forEach((cubelet) => {
                    if (cubelet.position.y === -1) {
                        let temp = cubelet.position.x;
                        cubelet.position.x = cubelet.position.z;
                        cubelet.position.z = -1 * temp;
                        cubelet.rotateOnWorldAxis(new THREE.Vector3(0, -1, 0), -Math.PI/2);
                    }
                });
            }else {
                rotateLayer(layer, false);
                rotateLayer(layer, false);
                rotateLayer(layer, false);
            }

            break;

        case 'left':
            if(counter){
                rubiksCube.children.forEach((cubelet) => {
                    if (cubelet.position.x === -1) {
                        let temp = cubelet.position.y;
                        cubelet.position.y = cubelet.position.z;
                        cubelet.position.z = -1 * temp;
                        cubelet.rotateOnWorldAxis(new THREE.Vector3(-1, 0, 0), Math.PI/2);
                    }
                });
            } else {
                rotateLayer(layer, true);
                rotateLayer(layer, true);
                rotateLayer(layer, true);
            }

            break;

        case 'right':
            if(!counter){
                rubiksCube.children.forEach((cubelet) => {
                    if (cubelet.position.x === 1) {
                        let temp = cubelet.position.y
                        cubelet.position.y = cubelet.position.z
                        cubelet.position.z = -1*temp
                        cubelet.rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), -Math.PI/2);
                    }
                });
            } else {
                rotateLayer(layer, false);
                rotateLayer(layer, false);
                rotateLayer(layer, false);

            }

            break;
        case 'front':
            if(counter){
                rotateLayer(layer, false);
                rotateLayer(layer, false);
                rotateLayer(layer, false);

            } else {
                rubiksCube.children.forEach((cubelet) => {
                    if (cubelet.position.z === 1) {
                        let temp = cubelet.position.x
                        cubelet.position.x = cubelet.position.y;
                        cubelet.position.y = -1*temp;
                        cubelet.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), -Math.PI/2);
                    }
                });
            }

            //axis = new THREE.Vector3(0, 1, 0); //0Z-axis
            break;// Add cases for other layers (top, bottom, left, right, etc.) as needed
        case 'back':
            if(!counter){
                rotateLayer(layer, true);
                rotateLayer(layer, true);
                rotateLayer(layer, true);
            } else {
                rubiksCube.children.forEach((cubelet) => {
                    if (cubelet.position.z === -1) {
                        let temp = cubelet.position.x
                        cubelet.position.x = cubelet.position.y;
                        cubelet.position.y = -1*temp;
                        cubelet.rotateOnWorldAxis(new THREE.Vector3(0, 0, -1), Math.PI/2);
                    }
                });
            }

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
//
// const rotateFrontButton = document.getElementById('rotate-front-button');
// rotateFrontButton.addEventListener('click', () => {
//     rotateLayer('front', true);
// });
//
// const rotateRightButton = document.getElementById('rotate-right-button');
// rotateRightButton.addEventListener('click', () => {
//     rotateLayer('right', true);
// });
//
// const rotateLeftButton = document.getElementById('rotate-left-button');
// rotateLeftButton.addEventListener('click', () => {
//     rotateLayer('left', true);
// });
//
// const rotateTopButton = document.getElementById('rotate-top-button');
// rotateTopButton.addEventListener('click', () => {
//     rotateLayer('top', true);
// });
//
// const rotateBottomButton = document.getElementById('rotate-bottom-button');
// rotateBottomButton.addEventListener('click', () => {
//     rotateLayer('bottom', true);
// });
//
// const rotateBackButton = document.getElementById('rotate-back-button');
// rotateBackButton.addEventListener('click', () => {
//     rotateLayer('back', true);
// });
//
//
//
// const rotateFrontCButton = document.getElementById('rotate-front-button-c');
// rotateFrontCButton.addEventListener('click', () => {
//     rotateLayer('front', false);
// });
//
// const rotateRightCButton = document.getElementById('rotate-right-button-c');
// rotateRightCButton.addEventListener('click', () => {
//     rotateLayer('right', false);
// });
//
// const rotateLeftCButton = document.getElementById('rotate-left-button-c');
// rotateLeftCButton.addEventListener('click', () => {
//     rotateLayer('left', false);
// });
//
// const rotateTopCButton = document.getElementById('rotate-top-button-c');
// rotateTopCButton.addEventListener('click', () => {
//     rotateLayer('top', false);
// });
//
// const rotateBottomCButton = document.getElementById('rotate-bottom-button-c');
// rotateBottomCButton.addEventListener('click', () => {
//     rotateLayer('bottom', false);
// });
//
// const rotateBackCButton = document.getElementById('rotate-back-button-c');
// rotateBackCButton.addEventListener('click', () => {
//     rotateLayer('back', false);
// });
const animate = () => {
    requestAnimationFrame(animate);
    // controls.update();
    renderer.render(scene, camera);
}

animate();

