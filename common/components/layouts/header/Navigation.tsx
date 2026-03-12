"use client";

import React, { forwardRef } from "react";
import { MENU_ITEMS } from "@/common/constants/menu";
import NavigationItem from "./NavigationItem";

const Navigation = forwardRef<HTMLElement, {}>((props, ref) => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const visibleMenu = MENU_ITEMS.filter((item) => item.isShow);

  return (
    <nav
      ref={ref}
      className={`
        hidden xl:flex items-center gap-8 whitespace-nowrap
        transition-[opacity,transform] duration-150 transform origin-top
        ${isScrolled
          ? "opacity-0 -translate-y-10 pointer-events-none absolute"
          : "opacity-100 translate-y-0 relative"
        }
      `}
      style={{
        left: "50%",
        transform: isScrolled
          ? "translate(-50%, -20px)"
          : "translate(-50%, 0)",
        position: "absolute",
      }}
    >
      {visibleMenu.map((item) => (
        <NavigationItem key={item.title} {...item} />
      ))}
    </nav>
  );
});

Navigation.displayName = "Navigation";

export default Navigation;