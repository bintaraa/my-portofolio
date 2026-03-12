import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdVerified as VerifiedIcon } from "react-icons/md";
import clsx from "clsx";

import { ThemeToggle } from "./ThemeToggle";
import { IntlToggle } from "./IntlToggle";

interface ProfileHeaderProps {
    expandMenu: boolean;
    imageSize: number;
}

const ProfileHeader = ({ expandMenu, imageSize }: ProfileHeaderProps) => {
    return (
        <div
            className={clsx(
                "flex w-full flex-grow items-center gap-4 lg:flex-col lg:gap-0.5",
                expandMenu && "flex-col !items-start"
            )}
        >
            <div className="relative" style={{ width: expandMenu ? 80 : imageSize, height: expandMenu ? 80 : imageSize }}>
                <Image
                    src={"/images/Bintara.jpeg"}
                    fill
                    alt="Bintara"
                    className="border-2 border-neutral-400 dark:border-neutral-600 lg:hover:scale-105 rounded-full object-cover"
                />
            </div>

            <div className="mt-1 flex items-center gap-2 lg:mt-4">
                <Link href="/" passHref>
                    <h2 className="flex-grow text-lg font-medium lg:text-xl">
                        Bintara
                    </h2>
                </Link>

                <div title="Verified">
                    <VerifiedIcon size={18} className="text-blue-400" />
                </div>
            </div>

            <div className="text-sm text-neutral-600 transition-all duration-300 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-400 lg:flex">
                @adityabintaraa
            </div>

            <div className="hidden justify-between gap-6 lg:mt-4 lg:flex">
                <IntlToggle />
                <ThemeToggle />
            </div>
        </div>
    );
};

export default ProfileHeader;
