import * as THREE from "three";

export function createGrid(city: THREE.Object3D) {
  const gridHelper = new THREE.GridHelper(60, 120, 0xff0000, 0x000000);
  city.add(gridHelper);
}