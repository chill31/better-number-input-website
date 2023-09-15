"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BsList, BsXLg } from "react-icons/bs";
import SideBarLink from "@/components/page/sideBarLink";

export default function SideBar() {
  const [open, setOpen] = useState(false);

  function handleWhiteSpaceClick(event: any) {
    const target = event.target as HTMLElement;
    if (target.id === "sidebar-whitespace") setOpen(false);
  }

  useEffect(() => {
    addEventListener("keydown", (e) => {
      if (e.key === "Escape") setOpen(false);
    });
  });

  return (
    <>
      {/* icon which shows to open the menu */}
      <button
        className={`fixed top-3 left-3 bg-gray-800/40 h-10 w-10 rounded-md cursor-pointer flex justify-center items-center focus:outline-2 focus:outline-white focus:outline ${
          open ? "hidden" : ""
        }`}
        onClick={() => setOpen(true)}
        tabIndex={open ? -1 : 0}
      >
        <BsList className="text-3xl" />
      </button>

      {/* actual sidebar */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-gray-500/75 ${
          open ? "left-0" : "left-[-100%]"
        } transition-[left] duration-300 origin-left flex justify-start items-start gap-0`}
        id="sidebar-whitespace"
        onClick={(e) => handleWhiteSpaceClick(e)}
      >
        <div className="w-64 h-full bg-black overflow-y-scroll pt-32 pl-5 flex flex-col items-start justify-start gap-3">
          <button
            className={`fixed top-3 left-3 bg-gray-800/40 h-10 w-10 rounded-md cursor-pointer flex justify-center items-center focus:outline-2 focus:outline-white focus:outline ${
              open ? "" : "hidden"
            }`}
            onClick={() => setOpen(false)}
            tabIndex={open ? -1 : 0}
          >
            <BsXLg className="text-3xl" />
          </button>

          {/* actual content */}

          <SideBarLink href="/" sideBarOpenState={open} content={"Home"} />
          <SideBarLink
            href="/installation"
            sideBarOpenState={open}
            content={"Installation"}
          />
          <SideBarLink href="/docs" sideBarOpenState={open} content={"Docs"} />
          <SideBarLink
            href="/options"
            sideBarOpenState={open}
            content={"Options"}
          />
        </div>
      </div>
    </>
  );
}
