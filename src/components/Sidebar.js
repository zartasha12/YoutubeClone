import React from "react";
import {
  MdHomeFilled,
  MdVideoLibrary,
  MdOutlineVideoStable,
  MdMissedVideoCall,
  MdWatchLater,
} from "react-icons/md";
import { IoMdThumbsUp } from "react-icons/io";
import { FaHistory } from "react-icons/fa";

const Sidebar = () => {
  const sideBarItems = [
    {
      icon: <MdHomeFilled size={24} />,
      name: "Home",
    },
    {
      icon: <MdMissedVideoCall size={24} />,
      name: "Video",
    },
    {
      icon: <MdVideoLibrary size={24} />,
      name: "Subscription",
    },
  ];

  const otherlinks = [
    {
      icon: <MdOutlineVideoStable size={24} />,
      name: "Library",
    },
    {
      icon: <FaHistory size={24} />,
      name: "History",
    },
    {
      icon: <MdWatchLater size={24} />,
      name: "Watch later",
    },
    {
      icon: <IoMdThumbsUp size={24} />,
      name: "Liked",
    },
  ];

  return (
    <div className="w-2/12 p-2 bg-[#212121] pr-5 overflow-auto pb-8 h-screen">
      <ul className="flex flex-col border-b-2 border-gray-600">
        {sideBarItems.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={
                'pl-6 py-3 hover:bg-zinc-600 ${name === "Home" ? "bg-slate-600" : ""} rounded-xl'
              }
            >
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b-1 border-gray-800">
        {otherlinks.map(({ icon, name }) => {
          return (
            <li key={name} className={"pl-6 py-3 hover:bg-zinc-600"}>
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
