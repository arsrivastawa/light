import React from "react";
import "./MembersCard.css";

function MembersCard({
  name,
  domainOrBranch,
  linkedinUrl,
  instaUrl,
  email,
  ImgUrl,
}) {
  return (
    <div className="rounded-3xl h-fit w-fit m-4 border overflow-hidden hover:border-slate-300 duration-150 hover:shadow-md">
      <div className="blur-wrapper h-fit relative w-fit duration-150 hover:after:animate-zigZag1 hover:before:animate-zigZag2">
        <div className="card-container px-1 py-16 cursor-pointer">
          <div className="card-elements flex flex-col gap-3 lg:gap-4 items-center px-5">
            <div className="img-container">
              <img
                className="object-cover rounded-full aspect-square"
                src={ImgUrl}
                alt="Member_Img"
              />
            </div>
            <div className="member-name-container text-center font-josefin font-bold text-xl uppercase">
              <h1>{name}</h1>
            </div>
            <div className="domain-container font-josefin text-lg font-semibold text-slate-800 capitalize">
              <h1>{domainOrBranch}</h1>
            </div>
            <div className="socials-container text-2xl">
              <div className="socials">
                {email ? (
                  <a href={email} target="_blank">
                    <i class="bi bi-envelope-at-fill px-2 hover:text-slate-500 duration-150"></i>
                  </a>
                ) : null}
                {instaUrl ? (
                  <a href={instaUrl} target="_blank">
                    <i class="bi bi-instagram px-2 hover:text-slate-500 duration-150"></i>
                  </a>
                ) : null}
                {linkedinUrl ? (
                  <a href={linkedinUrl} target="_blank">
                    <i class="bi bi-linkedin px-2 hover:text-slate-500 duration-150"></i>
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MembersCard;
