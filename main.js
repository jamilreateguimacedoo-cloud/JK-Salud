import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.module.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf5f8fa);

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / 400,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('scene3d'),
    antialias: true
});

renderer.setSize(window.innerWidth, 400);

// Objeto 3D simple (ejemplo inicial)
const geometry = new THREE.SphereGeometry(1.5, 32, 32);
const material = new THREE.MeshStandardMaterial({ color: 0x1e90ff });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Luz
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

camera.position.z = 5;

// Animación
function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();
