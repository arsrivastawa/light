import React from "react";
import { Link } from "react-router-dom";

function NavButton({ title, classname, navigateTo }) {
  return (
    <div
      class={`font-poppins cursor-pointer uppercase duration-150 border-0 py-1 px-4 focus:outline-none hover:bg-[#ffa4476b] rounded text-lg${
        classname ? " " + classname : ""
      }`}
    >
      <Link to={navigateTo}>{title}</Link>
    </div>
  );
}

export default NavButton;
