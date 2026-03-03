import * as THREE from "three";
import { mathRandom } from "../utils/random";
import { setTintColor } from "../utils/tint";

export function createCity(city: THREE.Object3D, town: THREE.Object3D) {
  const segments = 2;

  for (let i = 1; i < 100; i++) {
    const geometry = new THREE.BoxGeometry(1, 1, 1, segments, segments, segments);

    const material = new THREE.MeshStandardMaterial({
      color: setTintColor(),
      side: THREE.DoubleSide,
    });

    const cube = new THREE.Mesh(geometry, material);
    const floor = new THREE.Mesh(geometry, material);

    floor.scale.y = 0.1 + Math.abs(mathRandom(8));

    cube.scale.x = cube.scale.z = 0.9 + mathRandom(0.1);
    cube.position.x = Math.round(mathRandom());
    cube.position.z = Math.round(mathRandom());

    floor.position.set(cube.position.x, 0, cube.position.z);

    town.add(floor);
    town.add(cube);
  }

  city.add(town);
}