import React from "react";
import { Link } from "react-router-dom";

function NavButton({ title, classname, navigateTo, linkTo }) {
  return (
    <div
      class={`font-poppins cursor-pointer uppercase duration-150 border-0 py-1 px-4 focus:outline-none hover:bg-yellow-300 rounded text-lg${
        classname ? " " + classname : ""
      }`}
    >
      {navigateTo ? (
        <Link to={navigateTo}>{title}</Link>
      ) : linkTo ? (
        <a href={linkTo} target="_blank">
          {title}
        </a>
      ) : (
        <div href="#">{title}</div>
      )}
    </div>
  );
}

export default NavButton;
