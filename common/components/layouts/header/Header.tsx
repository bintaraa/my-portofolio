"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MdVerified as VerifiedIcon } from "react-icons/md";
import { ThemeToggle } from "./ThemeToggle";
import { IntlToggle } from "./IntlToggle";
import Navigation from "./Navigation";

import { MENU_ITEMS } from "@/common/constants/menu";
import BurgerButton from "./BurgerButton";
import MobileMenu from "./MobileMenu";
import { useMenu } from "@/common/stores/menu";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const filteredMenu = MENU_ITEMS?.filter((item) => item?.isShow);
    const { isOpen, toggleMenu } = useMenu();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className="
      fixed top-0 left-0 right-0 z-50
      transition-transform duration-200 ease-in-out
      bg-transparent
    "
        >
            <div
                className="
        max-w-7xl mx-auto px-6 flex items-center justify-between
        py-6
      "
            >
                {/* LOGO */}
                <div
                    className="
          text-2xl font-bold tracking-tighter
          transition-[opacity,transform] duration-150
          transform origin-left
        "
                >
                    <Link href="/">
                        <h2 className="flex items-center gap-2 text-lg font-medium lg:text-xl">
                            Bintara <VerifiedIcon size={18} className="text-blue-400" />
                        </h2>
                    </Link>
                </div>

                {/* NAVIGATION DESKTOP */}
                <div
                    className={`
            hidden lg:flex flex-1 justify-center
            transition-all duration-200 ease-in-out
            transform
            ${isScrolled
                            ? "opacity-0 -translate-y-4 pointer-events-none"
                            : "opacity-100 translate-y-0"
                        }
          `}
                >
                    <Navigation />
                </div>

                {/* RIGHT ACTIONS */}
                <div className="flex items-center gap-3 ml-auto">
                    <div className="flex items-center gap-2">
                        <IntlToggle />
                        <ThemeToggle />
                    </div>

                    {/* BURGER BUTTON */}
                    <div
                        className={`
              flex
              transition-all duration-200 ease-in-out
              ${isScrolled ? "lg:flex" : "lg:hidden"}
            `}
                    >
                        <BurgerButton
                            expandMenu={isOpen}
                            setExpandMenu={toggleMenu}
                            isScrolled={isScrolled}
                        />
                    </div>
                </div>
            </div>

            <MobileMenu list={filteredMenu} />
        </header>
    );
}