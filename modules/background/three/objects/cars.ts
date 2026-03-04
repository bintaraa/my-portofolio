import * as THREE from "three";
import { mathRandom } from "../utils/random";
import gsap from "gsap";

let createCarPos = true;

export function createCars(city: THREE.Object3D) {
  const cMat = new THREE.MeshToonMaterial({
    color: 0xffff00,
    side: THREE.DoubleSide
  });
  const cGeo = new THREE.BoxGeometry(1, 0.05, 0.05);
  const cElem = new THREE.Mesh(cGeo, cMat);

  const cPos = 20;

  if (createCarPos) {
    createCarPos = false;
    cElem.position.x = -cPos;
    cElem.position.z = mathRandom(3);
    gsap.to(cElem.position, { x: cPos, duration: 3, repeat: -1, yoyo: true, delay: mathRandom(3) });
  } else {
    createCarPos = true;
    cElem.position.z = -cPos;
    cElem.position.x = mathRandom(3);
    cElem.rotation.y = 90 * Math.PI / 180;
    gsap.to(cElem.position, { z: cPos, duration: 5, repeat: -1, yoyo: true, delay: mathRandom(3), ease: "power1.inOut" });
  }

  cElem.receiveShadow = true;
  cElem.castShadow = true;
  cElem.position.y = Math.abs(mathRandom(5));

  city.add(cElem);
}