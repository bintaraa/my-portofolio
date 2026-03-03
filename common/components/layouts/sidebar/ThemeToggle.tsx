"use client";

import * as React from "react";
import { useTheme } from "next-themes";

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
            style={{
                position: "fixed",
                bottom: "1.5rem",
                right: "1.5rem",
                zIndex: 9999,
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "50%",
                border: "1px solid currentColor",
                background: "transparent",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.1rem",
            }}
        >
            {resolvedTheme === "dark" ? "☀️" : "🌙"}
        </button>
    );
}
