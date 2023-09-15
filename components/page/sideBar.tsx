"use client";

import { useEffect, useState } from "react";
import { BsList, BsXLg, BsChevronRight, BsChevronDown } from "react-icons/bs";
// import { AiOutlineArrowDown } from "react-icons/ai";
import SideBarLink from "@/components/page/sideBarLink";

export default function SideBar() {
  const [open, setOpen] = useState(false);
  const [propertiesVisible, setPropertiesVisible] = useState(false);

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
          <span className="flex justify-start items-center gap-2">
            <SideBarLink
              href="/docs/properties"
              sideBarOpenState={open}
              content={"Properties"}
            />
            <BsChevronRight
              className={`${propertiesVisible ? "rotate-90" : ""} h-6 w-6 cursor-pointer`}
              onClick={() => setPropertiesVisible((prev) => !prev)}
            />
          </span>

          <div
            className={`flex flex-col gap-2 ${
              propertiesVisible ? "" : "hidden"
            }`}
          >
            <SideBarLink
              className="ml-5"
              href="/docs/properties/allowNegative"
              sideBarOpenState={open}
              content={"allowNegative"}
            />
            <SideBarLink
              className="ml-5"
              href="/docs/properties/allowDecimal"
              sideBarOpenState={open}
              content={"allowDecimal"}
            />
            <SideBarLink
              className="ml-5"
              href="/docs/properties/allowScientificNotation"
              sideBarOpenState={open}
              content={"allowScientific..."}
            />
            <SideBarLink
              className="ml-5"
              href="/docs/properties/valueAsNumber"
              sideBarOpenState={open}
              content={"valueAsNumber"}
            />
            <SideBarLink
              className="ml-5"
              href="/docs/properties/resetValues"
              sideBarOpenState={open}
              content={"resetValues"}
            />
          </div>

          <SideBarLink
            href="/extra"
            sideBarOpenState={open}
            content={"Extra"}
          />
        </div>
      </div>
    </>
  );
}
