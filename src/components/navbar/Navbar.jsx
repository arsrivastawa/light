import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import SideBar from "./SideBar";
import NavButton from "../navButtons/NavButton";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const div = document.createElement("div");
    div.setAttribute("id", "overlay");
    document.body.appendChild(div);
    return () => div.remove();
  }, []);
  return (
    <>
      <div className=" z-50 left-0 top-0 fixed  w-full  border-b-2 border-black/20 flex bg-orange-400 ">
        <div class="nav-container items-stretch px-8 py-2 flex justify-between w-[100%] sm:w-[100%] bg-">
          <Link to="/" className=" flex flex-row items-center">
            <div className="flex items-center gap-5">
            <img
              src="/assets/logoWithoutText.png"
              alt="logo"
              className="h-15 w-12 rounded-full bg-orange-300 p-1"
            />
            <span className="text-slate-800 text-xl font-semibold">
              LiGHT Sindri
            </span>
          </div>
          </Link>
          <div class="lower-navbar bg-orange-400 font-poppins font-medium my-auto text-slate-800 sm:bg-orange-400 flex flex-row justify-start py-2">
            <NavButton
              title={"Home"}
              navigateTo={"/"}
              className={"mx-1 text-lg"}
            />
            <NavButton
              title={"About"}
              navigateTo={"/about"}
              className={"mx-1 text-lg"}
            />
            <NavButton
              title={"Events"}
              navigateTo={"/events"}
              className={"mx-1 text-lg"}
            />
            <NavButton
              title={"Members"}
              navigateTo={"/members"}
              className={"mx-1 text-lg"}
            />
            <NavButton
              title={"Gallery"}
              navigateTo={"/gallery"}
              className={"mx-1 text-lg"}
            />
          </div>
          <div
            onClick={() => setIsOpen(true)}
            className="ham-burger p-3 text-2xl sm:text-3xl border-none duration-500  "
          >
            <i className="hamberger-lines bi bi-list duration-300 focus:outline-none active:bg-slate-200 rounded-full text-slate-800 "></i>
          </div>
        </div>
        <SideBar isMounted={isOpen} unMount={() => setIsOpen(false)} />
      </div>
    </>
  );
}

export default Navbar;
