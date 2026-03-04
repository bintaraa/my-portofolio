import * as THREE from "three";

export function createLights(scene: THREE.Scene, city: THREE.Object3D) {
  const ambientLight = new THREE.AmbientLight(0xffffff, 4);
  const lightFront = new THREE.SpotLight(0xffffff, 20, 10);
  const lightBack = new THREE.PointLight(0xffffff, 0.5);

  lightFront.rotation.x = 45 * Math.PI / 180;
  lightFront.rotation.z = -45 * Math.PI / 180;
  lightFront.rotation.set(5, 5, 5);
  lightFront.castShadow = true;
  lightFront.shadow.mapSize.width = 6000;
  lightFront.shadow.mapSize.height = lightFront.shadow.mapSize.width;
  lightFront.penumbra = 0.1;

  lightBack.position.set(0, 6, 0);

  scene.add(ambientLight);
  city.add(lightFront);
  scene.add(lightBack);
}