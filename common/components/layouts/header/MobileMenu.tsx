"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMenu } from "@/common/stores/menu";
import { MenuItemProps } from "@/common/types/menu";
import BurgerButton from "./BurgerButton";
import Menu from "./Menu";
import ProfileHeader from "./ProfileHeader";
import { ThemeToggle } from "./ThemeToggle";
import { IntlToggle } from "./IntlToggle";
import clsx from "clsx";

interface MobileMenuProps {
  list: MenuItemProps[];
}

export default function MobileMenu({ list }: MobileMenuProps) {
  const { isOpen, hideMenu, toggleMenu } = useMenu();

  return (
    <div>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={hideMenu}
              className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40"
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={clsx(
                "fixed inset-0 w-full sm:w-[420px] sm:right-0 sm:left-auto",
                "bg-neutral-900 dark:bg-white text-white dark:text-black",
                "z-50 p-6 pt-8 overflow-y-auto"
              )}
            >
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-start">
                  <ProfileHeader expandMenu={true} imageSize={80} />
                  <div className="mt-1">
                    <BurgerButton expandMenu={isOpen} setExpandMenu={toggleMenu} />
                  </div>
                </div>

                <div className="flex items-center gap-4 lg:hidden">
                  <IntlToggle />
                  <ThemeToggle />
                </div>

                <div className="w-full h-[1px] bg-neutral-800 dark:bg-neutral-200 my-2"></div>

                <Menu list={list} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}