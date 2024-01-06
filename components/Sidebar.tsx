"use client";
import React from "react";
import Box from "./Box";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { usePathname } from "next/navigation";
import SidebarItem from "./SidebarItem";
import Library from "./Library";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();
  const sidebarItems = [
    {
      label: "Home",
      href: "/",
      icon: HiHome,
      active: pathname !== "/search",
    },
    {
      label: "Search",
      href: "/search",
      icon: BiSearch,
      active: pathname === "/search",
    },
  ];
  return (
    <div className="flex h-full w-full overflow-hidden overflow-y-auto gap-2">
      <div className="md:flex hidden flex-col gap-2 h-full py-2">
        <Box className="">
          {sidebarItems.map((item) => (
            <SidebarItem key={item.label} {...item}></SidebarItem>
          ))}
        </Box>
        <Box className="flex-1">
          <Library />
          List of songs
        </Box>
      </div>
      <main className="flex-1 h-full py-2 overflow-y-auto">{children}</main>
    </div>
  );
};

export default Sidebar;
