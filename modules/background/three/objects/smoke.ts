import * as THREE from "three";
import { mathRandom } from "../utils/random";

export function createSmoke(smoke: THREE.Object3D) {
  const gmaterial = new THREE.MeshToonMaterial({ color: 0xffff00 });
  const gparticular = new THREE.CircleGeometry(0.01, 3);

  for (let h = 1; h < 300; h++) {
    const particular = new THREE.Mesh(gparticular, gmaterial);

    particular.position.set(
      mathRandom(5),
      mathRandom(5),
      mathRandom(5)
    );

    smoke.add(particular);
  }
}