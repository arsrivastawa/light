import React, { useEffect, useState } from "react";
import Logo from "../../assets/logoWithoutText.png";
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
      <div className=" w-full border-b border-b-slate-300 flex justify-center">
        <div class="nav-container items-stretch px-4 flex justify-between w-[90%] sm:w-[80%]">
          <Link to="/" className=" flex flex-row items-center">
            <div class="logo-container py-2 h-full w-[70px] bg-black grid place-items-center rounded-b-2xl">
              <img src={Logo} className="w-[60%]" alt="logo" />
            </div>
            <h1 className="sm:text-2xl text-xl font-roboto font-semibold ml-2">
              LiGHT Sindri
            </h1>
          </Link>
          <div class="lower-navbar bg-white font-roboto font-medium my-auto text-black sm:bg-white flex flex-row justify-start py-2">
            <NavButton
              title={"Home"}
              navigateTo={"/"}
              classname={"mx-1 text-lg"}
            />
            <NavButton
              title={"About"}
              navigateTo={"/about"}
              classname={"mx-1 text-lg"}
            />
            <NavButton
              title={"Events"}
              navigateTo={"/events"}
              classname={"mx-1 text-lg"}
            />
            <NavButton
              title={"Members"}
              navigateTo={"/members"}
              classname={"mx-1 text-lg"}
            />
            <NavButton
              title={"Gallery"}
              navigateTo={"/gallery"}
              classname={"mx-1 text-lg"}
            />
          </div>
          <div
            onClick={() => setIsOpen(true)}
            class="ham-burger p-3 text-2xl sm:text-3xl border-none duration-150"
          >
            <i class="hamberger-lines bi bi-list duration-300 focus:outline-none active:bg-slate-200 rounded-full"></i>
          </div>
        </div>
        <SideBar isMounted={isOpen} unMount={() => setIsOpen(false)} />
      </div>
    </>
  );
}

export default Navbar;
