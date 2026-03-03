import * as THREE from "three";

export function createLights(scene: THREE.Scene, city: THREE.Object3D) {
  const ambientLight = new THREE.AmbientLight(0xffffff, 4);
  const lightFront = new THREE.SpotLight(0xffffff, 20, 10);
  const lightBack = new THREE.PointLight(0xffffff, 0.5);

  scene.add(ambientLight);
  city.add(lightFront);
  scene.add(lightBack);
}