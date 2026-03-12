import * as THREE from "three";
import { gsap } from "gsap";

export function updateSceneTheme(
    scene: THREE.Scene,
    theme: "light" | "dark"
) {
    // 🎨 Use user's hardcoded color for light mode, dark for dark mode
    const lightColor = 0xF02050; // User's custom pink
    const darkColor = 0x000000;

    const targetColor = new THREE.Color(
        theme === "dark" ? darkColor : lightColor
    );

    // 🛡️ Ensure background is Color
    if (!(scene.background instanceof THREE.Color)) {
        scene.background = new THREE.Color(lightColor);
    }

    const bgColor = scene.background as THREE.Color;

    // 🔥 Animate background
    gsap.to(bgColor, {
        r: targetColor.r,
        g: targetColor.g,
        b: targetColor.b,
        duration: 0.1,
    });

    // 🛡️ Ensure fog exists and matches background
    if (!(scene.fog instanceof THREE.Fog)) {
        scene.fog = new THREE.Fog(bgColor, 10, 16);
    }

    const fogColor = scene.fog.color;

    // 🔥 Animate fog
    gsap.to(fogColor, {
        r: targetColor.r,
        g: targetColor.g,
        b: targetColor.b,
        duration: 0.1,
    });

    // 🏗️ Update visibility of objects in the scene
    scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
            const mat = obj.material as THREE.MeshStandardMaterial;
            if (mat && mat.color) {
                // If it's a building color (black by default in city.ts), 
                // flip it for better visibility in dark mode
                const buildingColor = theme === "dark" ? 0xeeeeee : 0x000000;
                gsap.to(mat.color, {
                    r: new THREE.Color(buildingColor).r,
                    g: new THREE.Color(buildingColor).g,
                    b: new THREE.Color(buildingColor).b,
                    duration: 0.1,
                });
            }
        }
    });
}