import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

export function Scene() {
    // Add GLTF
    const loader = new GLTFLoader();
    const gltfPath = '/jnncode_3_d.gltf';
    
    // Create Scene - Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(devicePixelRatio); // Removes jaggyness of object based on used device
    renderer.setClearColor( 0xffffff ); // Changed background
    document.body.appendChild(renderer.domElement);
    
    // Load GLTF
    loader.load(gltfPath, function (gltf) {
        const model = gltf.scene;
        scene.add(model);
        // Rotation - Infinity 
        model.rotation.set(Math.PI / 4, Math.PI / 4, 0);
    }, undefined, function (error) {
        console.error(error);
    });
    
    camera.position.set(0, 0, 10); // Zoom out
    camera.lookAt(scene.position);
    
    function animate() {
        requestAnimationFrame(animate);
    
        scene.rotation.x += 0.005;
        scene.rotation.y += 0.005;
    
        renderer.render(scene, camera);
    }
    
    animate();
}
