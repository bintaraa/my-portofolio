import * as THREE from "three";

export function createScene() {
  const scene = new THREE.Scene();

  const setcolor = 0xF02050;

  scene.background = new THREE.Color(setcolor);
  scene.fog = new THREE.Fog(setcolor, 10, 16);

  return scene;
}