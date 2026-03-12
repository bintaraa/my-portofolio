"use client";

import clsx from "clsx";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import React, { forwardRef, useState } from "react";
import { BsArrowRightShort as ExternalLinkIcon } from "react-icons/bs";

import { MenuItemProps } from "@/common/types/menu";

const NavigationItem = forwardRef<HTMLAnchorElement | HTMLDivElement, MenuItemProps>(({
  title,
  href,
  onClick,
  className = "",
  isExternal,
}, ref) => {
  const [isHovered, setIsHovered] = useState(false);

  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";

  const isActive = pathname === href;
  const isExternalUrl = isExternal || href?.includes("http");

  const classes = clsx(
    "text-sm font-medium transition-all duration-200",
    "hover:opacity-70",
    isActive && "underline underline-offset-4 decoration-2",
    className
  );

  const element = (
    <div
      className="flex items-center gap-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>{title}</span>

      {isExternalUrl && isHovered && (
        <ExternalLinkIcon
          size={18}
          className="transition-transform duration-200 -rotate-45"
        />
      )}
    </div>
  );

  if (isExternalUrl) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={classes}
        ref={ref as React.Ref<HTMLAnchorElement>}
      >
        {element}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={classes} ref={ref as React.Ref<HTMLAnchorElement>}>
      {element}
    </Link>
  );
});

NavigationItem.displayName = "NavigationItem";

export default NavigationItem;