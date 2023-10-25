import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('cube-container').appendChild(renderer.domElement);

// Create a basic Rubik's Cube geometry
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterials = [
    new THREE.MeshBasicMaterial({ color: 0xff0000 }), // Red
    new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // Green
    new THREE.MeshBasicMaterial({ color: 0x0000ff }), // Blue
    new THREE.MeshBasicMaterial({ color: 0xffff00 }), // Yellow
    new THREE.MeshBasicMaterial({ color: 0xffa500 }), // Orange
    new THREE.MeshBasicMaterial({ color: 0xffffff })  // White
];
const cube = new THREE.Mesh(cubeGeometry, cubeMaterials);

scene.add(cube);

// Position the camera
camera.position.z = 3;

// Add interaction (rotate cube with mouse)
const controls = new OrbitControls(camera, renderer.domElement);

// Create an animation loop
const animate = () => {
    requestAnimationFrame(animate);

    // Rotate the cube (for demonstration purposes)
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();
