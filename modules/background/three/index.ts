import * as THREE from "three";
import { createRenderer } from "./core/renderer";
import { createCamera } from "./core/camera";
import { createScene } from "./core/scene";
import { createCity } from "./objects/city";
import { createSmoke } from "./objects/smoke";
import { createGrid } from "./objects/grid";
import { createCars } from "./objects/cars";
import { createLights } from "./systems/lights";
import { setupResize } from "./systems/resize";
import { setupInteraction, mouse } from "./systems/interaction";
import { animate } from "./systems/animation";

export function initThree(container: HTMLDivElement) {
  const renderer = createRenderer(container);
  const camera = createCamera();
  const scene = createScene();

  const city = new THREE.Object3D();
  const town = new THREE.Object3D();
  const smoke = new THREE.Object3D();

  createCity(city, town);
  createSmoke(smoke);
  createGrid(city);
  createCars(city);
  createLights(scene, city);

  scene.add(city);
  city.add(smoke);

  setupResize(camera, renderer);
  setupInteraction();

  animate({
    renderer,
    scene,
    camera,
    city,
    smoke,
    town,
    mouse,
    uSpeed: 0.001,
  });
}