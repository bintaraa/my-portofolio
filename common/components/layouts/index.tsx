"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CubeCity from "@/modules/background/components/CubeCity";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const pathname = usePathname();
    const mainRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (mainRef.current) {
            gsap.from(mainRef.current, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: "power3.out",
            });
        }
    }, [pathname]);

    return (
        <div className="relative min-h-screen overflow-hidden bg-white dark:bg-black transition-colors duration-500">

            {/* 🔥 Background 3D */}
            <div className="fixed inset-0 -z-10">
                <CubeCity />
            </div>

            {/* 🔥 Content */}
            <div
                ref={mainRef}
                className="relative z-10 mx-auto max-w-6xl px-6 py-10"
            >
                {children}
            </div>
        </div>
    );
};

export default Layout;