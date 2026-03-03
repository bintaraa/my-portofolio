import { AnimationParams } from "../types";

export function animate({
  renderer,
  scene,
  camera,
  city,
  smoke,
  mouse,
  uSpeed,
}: AnimationParams) {
  function loop() {
    requestAnimationFrame(loop);

    city.rotation.y -= (mouse.x * 8 - camera.rotation.y) * uSpeed;
    smoke.rotation.y += 0.01;

    camera.lookAt(city.position);
    renderer.render(scene, camera);
  }

  loop();
}