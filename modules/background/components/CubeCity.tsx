"use client";

import { useEffect, useRef } from "react";
import { initThree } from "../three";

export default function CubeCity() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    initThree(ref.current);
  }, []);

  return <div ref={ref} className="fixed inset-0 -z-10" />;
}