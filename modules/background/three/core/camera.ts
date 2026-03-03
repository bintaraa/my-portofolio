import * as THREE from "three";

export function createCamera() {
  const camera = new THREE.PerspectiveCamera(
    20,
    window.innerWidth / window.innerHeight,
    1,
    500
  );

  camera.position.set(0, 2, 14);

  return camera;
}