import * as THREE from "three";

export interface MouseState {
  x: number;
  y: number;
}

export interface AnimationParams {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  city: THREE.Object3D;
  town?: THREE.Object3D;
  smoke: THREE.Object3D;
  mouse: MouseState;
  uSpeed: number;
}
