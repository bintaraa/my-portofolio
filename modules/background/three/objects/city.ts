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

    const wmaterial = new THREE.MeshLambertMaterial({
      color: 0xD9D9D9,
      wireframe: true,
      transparent: true,
      opacity: 0.03,
      side: THREE.DoubleSide
    });

    const cube = new THREE.Mesh(geometry, material);
    const wire = new THREE.Mesh(geometry, wmaterial);
    const floor = new THREE.Mesh(geometry, material);
    const wfloor = new THREE.Mesh(geometry, wmaterial);

    cube.add(wire);
    floor.add(wfloor);

    cube.castShadow = true;
    cube.receiveShadow = true;

    floor.scale.y = 0.1 + Math.abs(mathRandom(8));

    const cubeWidth = 0.9;
    cube.scale.x = cube.scale.z = cubeWidth + mathRandom(1 - cubeWidth);
    cube.position.x = Math.round(mathRandom());
    cube.position.z = Math.round(mathRandom());

    floor.position.set(cube.position.x, 0, cube.position.z);

    town.add(floor);
    town.add(cube);
  }

  const pmaterial = new THREE.MeshPhongMaterial({
    color: 0x000000,
    side: THREE.DoubleSide,
    opacity: 0.9,
    transparent: true
  });

  const pgeometry = new THREE.PlaneGeometry(60, 60);
  const pelement = new THREE.Mesh(pgeometry, pmaterial);
  pelement.rotation.x = -90 * Math.PI / 180;
  pelement.position.y = 0.01;
  pelement.receiveShadow = true;
  city.add(pelement);

  city.add(town);
}