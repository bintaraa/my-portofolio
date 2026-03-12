"use client";

import Link from "next/link";
import { MenuItemProps } from "@/common/types/menu";

const MenuItem: React.FC<MenuItemProps> = ({
  title,
  href,
  icon,
  onClick,
  className = "",
  isExternal,
}) => {
  const Component = isExternal ? "a" : Link;
  const props = isExternal ? { href, target: "_blank", rel: "noopener noreferrer" } : { href };

  return (
    <Component
      {...(props as any)}
      onClick={onClick}
      className={`
                flex items-center gap-4 px-4 py-3 rounded-xl
                text-neutral-400 dark:text-neutral-600
                hover:bg-neutral-800 dark:hover:bg-neutral-100
                hover:text-white dark:hover:text-black
                transition-all duration-200
                ${className}
            `}
    >
      <span className="flex-shrink-0">{icon}</span>
      <span className="font-medium">{title}</span>
    </Component>
  );
};

export default MenuItem;
