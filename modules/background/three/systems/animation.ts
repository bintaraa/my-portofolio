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
    city.rotation.x -= (-(mouse.y * 2) - city.rotation.x) * uSpeed;

    if (city.rotation.x < -0.05) {
      city.rotation.x = -0.05;
    } else if (city.rotation.x > 1) {
      city.rotation.x = 1;
    }

    smoke.rotation.y += 0.01;
    smoke.rotation.x += 0.01;

    camera.lookAt(city.position);
    renderer.render(scene, camera);
  }

  loop();
}