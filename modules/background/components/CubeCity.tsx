"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { initThree } from "../three";
import { updateSceneTheme } from "../three/systems/theme";

export default function CubeCity() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  // Simpan threeState di ref agar tidak trigger re-render
  const threeStateRef = useRef<any>(null);

  // Init Three.js sekali saja
  useEffect(() => {
    if (!containerRef.current) return;

    const state = initThree(containerRef.current);
    threeStateRef.current = state;

    // Terapkan theme yang sudah ada saat init selesai
    if (resolvedTheme) {
      updateSceneTheme(state.scene, resolvedTheme as "light" | "dark");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update theme setiap kali resolvedTheme berubah
  useEffect(() => {
    // Gunakan threeStateRef sebagai satu-satunya penanda Three.js sudah siap
    if (!threeStateRef.current) return;
    if (!resolvedTheme) return;

    updateSceneTheme(
      threeStateRef.current.scene,
      resolvedTheme as "light" | "dark"
    );
  }, [resolvedTheme]);

  return <div ref={containerRef} className="fixed inset-0 -z-10" />;
}