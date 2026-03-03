import * as THREE from "three";
import { mathRandom } from "../utils/random";
import gsap from "gsap";

let createCarPos = true;

export function createCars(city: THREE.Object3D) {
  const cMat = new THREE.MeshToonMaterial({ color: 0xffff00 });
  const cGeo = new THREE.BoxGeometry(1, 0.05, 0.05);
  const cElem = new THREE.Mesh(cGeo, cMat);

  if (createCarPos) {
    createCarPos = false;
    cElem.position.x = -20;
    gsap.to(cElem.position, { x: 20, repeat: -1, yoyo: true });
  } else {
    createCarPos = true;
    cElem.position.z = -20;
    gsap.to(cElem.position, { z: 20, repeat: -1, yoyo: true });
  }

  city.add(cElem);
}