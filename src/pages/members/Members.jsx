import React, { useEffect, useState } from "react";
import MembersCard from "../../components/membersCard/MembersCard";
import Container from "../../components/container/Container";
import "./Members.css";
import Title, { SubTitle } from "../../components/titles/Title";
import { TeamData } from "../../../public/assets/TeamData";
import { Helmet } from "react-helmet-async";

function Members() {
  const [batch, setBatch] = useState(2023);
  const [subTitle, setSubTitle] = useState("CCs & Heads");
  const [members, setMembers] = useState(
    TeamData.filter((member) => member.batch === batch)
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility

  function handleBatchChange(selectedBatch, subTitleText) {
    setBatch(selectedBatch);
    setSubTitle(subTitleText);
    setIsDropdownOpen(false); // Close the dropdown after selection
  }

  function toggleDropdown() {
    setIsDropdownOpen((prev) => !prev);
  }

  useEffect(() => {
    setMembers(TeamData.filter((member) => member.batch === batch));
  }, [batch]);

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
          content="Meet the dedicated members and volunteers of LiGHT Sindri who work together to drive positive social impact and community development."
        />
        <meta
          name="keywords"
          content="LiGHT Sindri team, NGO members Sindri, student volunteers Jharkhand, social work team"
        />
      </Helmet>
    <Container>
      <div className="grid w-full place-items-center">
        <div className="members-heading-container">
          <Title content={"Our Team"} uppercase={true} />
          <div className="relative flex items-center w-full space-x-3 md:w-auto">
            <button
              onClick={toggleDropdown}
              id="actionsDropdownButton"
              className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              type="button"
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
              <span>Filter by Batch</span>
            </button>
            {isDropdownOpen && (
              <div
                id="actionsDropdown"
                className="z-10 absolute top-full bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="actionsDropdownButton"
                >
                  <li>
                    <div
                      onClick={() =>
                        handleBatchChange(2020, "2k20-Founding Members")
                      }
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      2k20-Founding Members
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={() =>
                        handleBatchChange(2021, "2k21")
                      }
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      2k21
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={() =>
                        handleBatchChange(2022, "2k22 Advisory Body")
                      }
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      2k22-Advisory Body
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={() => handleBatchChange(2023, "2k23-CCs & Heads")}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      2k23-CCs & Heads
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={() => handleBatchChange(2024, "2k24-CTMs")}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      2k24-CTMs
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <SubTitle align={"start"} content={subTitle} />
        </div>
       <div className="MembersCard-container w-full flex flex-wrap justify-center gap-6 px-4 md:px-8">

          {members.map((item, index) => {
            return (
              <MembersCard
                ImgUrl={`assets/TeamProfile/${item.ImgPath}.jpg`}
                domainOrBranch={
                  item.batch === 2023
                    ? item.position
                    : `${item.branch} - ${String(item.batch).replace("0", "k")}`
                }
                email={item.email}
                instaUrl={item.insta}
                linkedinUrl={item.linkedIn}
                name={item.name}
              />
            );
          })}
        </div>
      </div>
    </Container>
    </>
  );
}

export default Members;
