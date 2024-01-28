import React from "react";
import { Link } from "react-router-dom";

function FooterLink({ to, title }) {
  return (
    <div class="mb-4 w-[78px] h-[22px] cursor-pointer relative group overflow-hidden">
      <Link to={to} class="">
        <div className="absolute duration-300 group-hover:bottom-[0%] left-0 ease-out -bottom-[115%]">
          <span className="block uppercase">{title}</span>
          <span className="block uppercase">{title}</span>
        </div>
      </Link>
    </div>
  );
}

export default FooterLink;
