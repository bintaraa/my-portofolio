"use client";

import * as React from "react";

export function IntlToggle() {
    const [lang, setLang] = React.useState("EN");

    return (
        <button
            aria-label="Toggle language"
            onClick={() => setLang(lang === "EN" ? "ID" : "EN")}
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
                text-xs font-bold
            "
        >
            {lang}
        </button>
    );
}
