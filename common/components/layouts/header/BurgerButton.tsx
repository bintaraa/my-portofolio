"use client";

import styled from "@emotion/styled";
import clsx from "clsx";
import { useMenu } from "@/common/stores/menu";

interface BurgerButtonProps {
  expandMenu: boolean;
  setExpandMenu: (expand: boolean) => void;
  isScrolled?: boolean;
}

const BurgerButton = ({ expandMenu, setExpandMenu, isScrolled = true }: BurgerButtonProps) => {
  const handleMenuToggle = () => {
    setExpandMenu(!expandMenu)
  }

  const menuSpanData = [{ index: 1 }, { index: 2 }, { index: 3 }]

  return (
    <StyledMenu
      className={clsx(
        "flex relative z-50",
        !isScrolled && "xl:hidden" // Hide on large screens if NOT scrolled
      )}
      onClick={handleMenuToggle}
    >
      {menuSpanData.map(item => (
        <StyledMenuSpan
          key={item.index}
          className={clsx(
            expandMenu // 'expandMenu' true -> Menu terbuka
              ? 'bg-[var(--foreground)]'
              : 'bg-[var(--foreground)]', // Saat Menu tertutup (Header text putih di dark, hitam di light)
            expandMenu && 'active'
          )}
        />
      ))}
    </StyledMenu>
  )
}
export default BurgerButton

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 21px;
  width: 26px;
  cursor: pointer;
`

const StyledMenuSpan = styled.span`
  width: 100%;
  height: 3px;
  transition: all 0.5s ease;
  border-radius: 10px;

  &.active:nth-of-type(1),
  &.active:nth-of-type(3) {
    transform-origin: left;
  }
  &.active:nth-of-type(1) {
    transform: rotate(45deg);
  }
  &.active:nth-of-type(2) {
    width: 0;
  }
  &.active:nth-of-type(3) {
    transform: rotate(-45deg);
  }
`