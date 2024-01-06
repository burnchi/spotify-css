import Header from "@/components/Header";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
export default function Home() {
  return (
    <div className="w-full h-full bg-neutral-900">
      <Header>
        <div className="mb-2">
          <h1 className="text-2xl font-medium">Welcome back</h1>
          <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 mt-4">
            <button className="flex items-center gap-x-4 pr-4 bg-neutral-100/10 hover:bg-neutral-100/20 rounded-md relative group">
              <div className="relative min-h-[64px] min-w-[64px]">
                <Image src="/liked.png" alt="pic" fill />
              </div>
              <h1 className="truncate text-lg font-medium">Liked Songs</h1>
              <div className="absolute right-5 transition opacity-0 group-hover:opacity-100 hover:scale-105 rounded-full p-4 flex justify-center items-center bg-green-500 drop-shadow-md ">
                <FaPlay className="text-black" />
              </div>
            </button>
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <h1 className="text-2xl font-semibold">Newest Songs</h1>
      </div>
    </div>
  );
}
