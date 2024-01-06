import React from "react";
import { TbPlaylist } from "react-icons/tb";
import { GoPlus } from "react-icons/go";
const Library = () => {
  return (
    <div className="flex items-center justify-between gap-4 px-5 py-4 text-neutral-400">
      <div className="flex items-center gap-2">
        <TbPlaylist size={24} />
        <p>Library</p>
      </div>
      <GoPlus size={24} className="hover:text-white" />
    </div>
  );
};

export default Library;
