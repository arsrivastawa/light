import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MembersCard from "../../components/membersCard/MembersCard";
import Container from "../../components/container/Container";
import "./Members.css";
import Title, { SubTitle } from "../../components/titles/Title";
import { TeamData } from "../../../public/assets/TeamData";
import { Helmet } from "react-helmet-async";

function Members() {
  const [batch, setBatch] = useState(2024);
  const [subTitle, setSubTitle] = useState("CCs & Heads");

  const teamArr = [
    "Design Team",
    "Sponsorship Team",
    "SSD Team",
    "Web D Team",
    "Media & Content Team",
  ];

  const [team, setTeam] = useState("ALL");
  const [members, setMembers] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); 
  const [searchParams] = useSearchParams();


  function handleBatchChange(selectedBatch, subTitleText) {
    setBatch(selectedBatch);
    setSubTitle(subTitleText);
    setIsDropdownOpen(false);
    setActiveDropdown(null);
  }

  function handleTeamChange(selectedTeam) {
    setTeam(selectedTeam);
    setIsDropdownOpen(false);
    setActiveDropdown(null);
  }

  function toggleDropdown(type) {
    setActiveDropdown(type);
    setIsDropdownOpen(prev => !prev);
  }

  useEffect(() => {
    setMembers(
      TeamData.filter(member => {
        const matchesBatch = member.batch === batch;

        const matchesTeam =
          team === "ALL" ||
          (Array.isArray(member.team)
            ? member.team.includes(team)
            : member.team === team);

        return matchesBatch && matchesTeam;
      })
    );
  }, [batch, team]);

  useEffect(() => {
  const teamFromURL = searchParams.get("team");

  if (teamFromURL) {
    setTeam(teamFromURL);
  }
}, [searchParams]);


  useEffect(() => {
    document.title = "Our Team";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Team | Members of LiGHT Sindri</title>
        <meta
          name="description"
          content="Meet the dedicated members and volunteers of LiGHT Sindri."
        />
      </Helmet>

      <Container>
        <div className="grid w-full place-items-center">
          <div className="members-heading-container">
            <Title content={"Our Team"} uppercase />

            <div className="relative flex items-center gap-3">
             
              <button
                onClick={() => toggleDropdown("batch")}
                className="px-4 py-2 text-sm bg-white border rounded-lg hover:bg-gray-100  hover:text-primary-700
                flex items-center justify-center "
              >
              <svg
                className="-ml-1 mr-1.5 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                />
              </svg>
                Filter by Batch
              </button>

             
              <button
                onClick={() => toggleDropdown("team")}
                className="px-4 py-2 text-sm bg-white border rounded-lg hover:bg-gray-100
                 hover:text-primary-700
                 flex items-center justify-center "
              >
              <svg
                className="-ml-1 mr-1.5 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                />
              </svg>
                Filter by Team
              </button>

              {isDropdownOpen && activeDropdown === "batch" && (
                <div className="absolute top-full left-0 z-10 mt-2 bg-white rounded shadow w-48">
                  <ul className="py-1 text-sm">
                    <li onClick={() => handleBatchChange(2020, "2k20-Founding Members")} className="px-4 py-2 cursor-pointer hover:bg-gray-100">2k20-Founding Members</li>
                    <li onClick={() => handleBatchChange(2021, "2k21")} className="px-4 py-2 cursor-pointer hover:bg-gray-100">2k21</li>
                    <li onClick={() => handleBatchChange(2022, "2k22")} className="px-4 py-2 cursor-pointer hover:bg-gray-100">2k22</li>
                    <li onClick={() => handleBatchChange(2023, "2k23-Advisory Body")} className="px-4 py-2 cursor-pointer hover:bg-gray-100">2k23-Advisory Body</li>
                    <li onClick={() => handleBatchChange(2024, "2k24-CCs & Heads")} className="px-4 py-2 cursor-pointer hover:bg-gray-100">2k24-CCs & Heads</li>
                  </ul>
                </div>
              )}

              {isDropdownOpen && activeDropdown === "team" && (
                <div className="absolute top-full left-40 z-10 mt-2 bg-white rounded shadow w-56">
                  <ul className="py-1 text-sm">
                    <li onClick={() => handleTeamChange("ALL")} className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                      All Teams
                    </li>
                    {teamArr.map(teamName => (
                      <li
                        key={teamName}
                        onClick={() => handleTeamChange(teamName)}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                      >
                        {teamName}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <SubTitle align="start" content={`${subTitle} — ${team}`} />
          </div>

          <div className="MembersCard-container w-full flex flex-wrap justify-center gap-6 px-4 md:px-8">
            {members.map(item => (
              <MembersCard
                key={item.email}
                ImgUrl={`assets/TeamProfile/${item.ImgPath}.jpg`}
                domainOrBranch={
    item.batch === 2023
        ? "Advisory Board"
        : item.batch === 2024
        ? item.position
        : (item.batch === 2020 ||
           item.batch === 2021 ||
           item.batch === 2022)
        ? `${item.branch} - ${String(item.batch).replace("20", "2k")}`
        : item.position
}

//                 domainOrBranch={
//     item.batch === 2023
//         ? "Advisory Board"
//         : item.batch === 2024
//         ? item.position
//         : item.batch === 2022 || item.batch === 2021 || item.batch === 2020
//         ? item.branch
//         : item.position
// }
//                 domainOrBranch={
//     item.batch === 2023
//         ? "Advisory Board"
//         : item.position
// }
                       

                
                //    domainOrBranch={
                //    item.batch === 2024
                //      ? item.position
                //      : `${item.branch} - ${String(item.batch).replace("0", "k")}`
                //  }
                   
                 

               // domainOrBranch={item.position}
                email={item.email}
                instaUrl={item.insta}
                linkedinUrl={item.linkedIn}
                name={item.name}
              />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

export default Members;

