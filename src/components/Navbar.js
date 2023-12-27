import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsYoutube } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
export default function Navbar() {
  return (
    <div className="flex justify-between px-14 h-14 items-center bg-[#212121] opacity-95 sticky ">
      <div className="flex gap-8 items-center text-2xl">
        <div>
          <RxHamburgerMenu />
        </div>
        <div className="flex gap-2 items-center justify-content">
          <BsYoutube className="text-3xl text-[#f00]"></BsYoutube>
          <span className="text-2xl ">YouTube</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5">
        <form>
          <div className="flex bg-zinc-900 items-center h-10 px4 pr-0 rounded-3xl ">
            <div className="flex gap-5 items-center pr-5 pl-4">
              <input
                type="text"
                placeholder="Search"
                className="w-96 bg-zinc-900 focus:outline-none border-none"
              />
            </div>
            <button className="text-xl rounded-r-3xl h-10 w-16 flex items-center justify-center bg-zinc-800">
              <IoSearchOutline color="white" size={20} />
            </button>
          </div>
        </form>

        <div className="text-xl p-3 bg-zinc-800 rounded-full">
          <FaMicrophone color="white" size={20} />
        </div>
      </div>
      <div className="flex gap-8 bg-zin-900 text-xl  items-center">
        <RiVideoAddLine color="white" size={20} />
        <div className="relative">
          <FaRegBell color="white" size={20} />
          <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full text-white">
            10+
          </span>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2023/10/16/03/44/daughter-8318355_1280.jpg"
          alt="profile logo"
          className="w-9 h-9 rounded-full"
        />
      </div>
    </div>
  );
}
