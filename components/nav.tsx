import React from "react";
import Link from "next/link";
import logo from "@/public/unlimi.png";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";

const Nav = () => (
  <div className="flex px-10 py-5 justify-between">
    <div className="flex">
      <img src="/unlimi.png" alt="logo" className="h-10" />
      <div className="relative w-72 ml-[12%]">
        <input
          type="search"
          name="search"
          id="search"
          className="rounded-lg w-full p-2 pl-8 border-2 outline-none"
          placeholder="Search by patients"
        />
        <CiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg md:text-xl" />
      </div>
    </div>
    <div className="flex gap-x-4 items-center">
      <img src="/img.png" alt="noti" className="h-9 rounded-full"/>
      <img src="/img-2.png" alt="noti" className="h-9 rounded-full"/>
      <p className="font-nunito">Deko</p>
    </div>
  </div>
);

export default Nav;
