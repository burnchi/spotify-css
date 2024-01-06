import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
  label: string;
  href: string;
  icon: IconType;
  active: boolean;
}
const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  icon: Icon,
  active,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        "flex items-center w-full h-auto text-neutral-400 gap-4 py-4 px-5 font-medium text-md hover:text-white",
        active && "text-white",
      )}
    >
      <Icon size={24} />
      <p className="truncate w-100">{label}</p>
    </Link>
  );
};

export default SidebarItem;
