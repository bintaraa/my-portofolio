"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button
            aria-label="Toggle theme"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="
                w-10 h-10
                flex items-center justify-center
                rounded-full
                backdrop-blur-sm
                bg-black/5 dark:bg-white/10
                border border-black/10 dark:border-white/20
                shadow-sm
                transition-[transform] duration-75
                hover:scale-110
            "
        >
            {resolvedTheme === "dark" ? (
                <Sun size={18} />
            ) : (
                <Moon size={18} />
            )}
        </button>
    );
}
