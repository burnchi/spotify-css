import Link from "next/link";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

interface HeaderProps {
  children: React.ReactNode;
}
const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className="h-fit bg-gradient-to-b from-emerald-800 p-6">
      <div className="flex items-center justify-between">
        <div className="md:flex hidden items-center gap-2">
          <button className="flex justify-center items-center rounded-full hover:opacity-75 bg-neutral-900">
            <RxCaretLeft size={30} />
          </button>
          <button className="flex justify-center items-center rounded-full hover:opacity-75 bg-neutral-900">
            <RxCaretRight size={30} />
          </button>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <button className="p-3 flex justify-center items-center rounded-full hover:opacity-75 bg-neutral-900">
            <HiHome size={24} />
          </button>
          <button className="p-3 flex justify-center items-center rounded-full hover:opacity-75 bg-neutral-900">
            <BiSearch size={24} />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="text-lg font-medium text-neutral-400 hover:text-white bg-transparent"
          >
            Sign up
          </Link>
          <Link
            href="/login"
            className="text-lg font-medium bg-white text-black rounded-full px-5 py-2  "
          >
            Login
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
