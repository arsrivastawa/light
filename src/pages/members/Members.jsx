import React, { useEffect } from "react";
import MembersCard from "../../components/membersCard/MembersCard";
import Container from "../../components/container/Container";
import "./Members.css";
import Img from "../../assets/memberImgs/aditya.jpg";
import Title, { SubTitle } from "../../components/titles/Title";

function Members() {
  useEffect(() => {
    document.title = "Our Team";
  }, []);

  return (
    <Container>
      <div className="grid place-items-center">
        <div className="members-heading-container">
          <Title content={"Our Team"} uppercase={true} />
          <SubTitle content={"Founding Members"} />
        </div>
        <div className="MembersCard-container grid place-items-center">
          <MembersCard
            ImgUrl={Img}
            name={"Aditya Ranjan"}
            domainOrBranch={"IT 2k22"}
            email={"#"}
            instaUrl={"#"}
            linkedinUrl={
              "https://www.linkedin.com/in/awww.linkedin.com/in/aditya-srivastawa"
            }
          />
          <MembersCard
            ImgUrl={Img}
            name={"Aditya Ranjan"}
            domainOrBranch={"IT 2k22"}
            email={"#"}
            instaUrl={"#"}
            linkedinUrl={
              "https://www.linkedin.com/in/awww.linkedin.com/in/aditya-srivastawa"
            }
          />
          <MembersCard
            ImgUrl={Img}
            name={"Aditya Ranjan"}
            domainOrBranch={"IT 2k22"}
            email={"#"}
            instaUrl={"#"}
            linkedinUrl={
              "https://www.linkedin.com/in/awww.linkedin.com/in/aditya-srivastawa"
            }
          />
          <MembersCard
            ImgUrl={Img}
            name={"Aditya Ranjan"}
            domainOrBranch={"IT 2k22"}
            email={"#"}
            instaUrl={"#"}
            linkedinUrl={
              "https://www.linkedin.com/in/awww.linkedin.com/in/aditya-srivastawa"
            }
          />
          <MembersCard
            ImgUrl={Img}
            name={"Aditya Ranjan"}
            domainOrBranch={"IT 2k22"}
            email={"#"}
            instaUrl={"#"}
            linkedinUrl={
              "https://www.linkedin.com/in/awww.linkedin.com/in/aditya-srivastawa"
            }
          />
          <MembersCard
            ImgUrl={Img}
            name={"Aditya Ranjan"}
            domainOrBranch={"IT 2k22"}
            email={"#"}
            instaUrl={"#"}
            linkedinUrl={
              "https://www.linkedin.com/in/awww.linkedin.com/in/aditya-srivastawa"
            }
          />
          <MembersCard
            ImgUrl={Img}
            name={"Aditya Ranjan"}
            domainOrBranch={"IT 2k22"}
            email={"#"}
            instaUrl={"#"}
            linkedinUrl={
              "https://www.linkedin.com/in/awww.linkedin.com/in/aditya-srivastawa"
            }
          />
          <MembersCard
            ImgUrl={Img}
            name={"Aditya Ranjan"}
            domainOrBranch={"IT 2k22"}
            email={"#"}
            instaUrl={"#"}
            linkedinUrl={
              "https://www.linkedin.com/in/awww.linkedin.com/in/aditya-srivastawa"
            }
          />
          <MembersCard
            ImgUrl={Img}
            name={"Aditya Ranjan"}
            domainOrBranch={"IT 2k22"}
            email={"#"}
            instaUrl={"#"}
            linkedinUrl={
              "https://www.linkedin.com/in/awww.linkedin.com/in/aditya-srivastawa"
            }
          />
        </div>
        <div className="members-heading-container">
          <h1 className="font-semibold font-roboto capitalize my-10 text-3xl sm:text-5xl text-start">
            CC's & Team Heads
          </h1>
        </div>
        <div className="MembersCard-container grid place-items-center my-4">
          <MembersCard
            ImgUrl={Img}
            name={"Aditya Ranjan"}
            domainOrBranch={"Centre Coordinator"}
            linkedinUrl={
              "https://www.linkedin.com/in/awww.linkedin.com/in/aditya-srivastawa"
            }
          />
          <MembersCard
            ImgUrl={Img}
            name={"Aditya Ranjan"}
            domainOrBranch={"Centre Coordinator"}
            linkedinUrl={
              "https://www.linkedin.com/in/awww.linkedin.com/in/aditya-srivastawa"
            }
          />
          <MembersCard
            ImgUrl={Img}
            name={"Aditya Ranjan"}
            domainOrBranch={"Centre Coordinator"}
            linkedinUrl={
              "https://www.linkedin.com/in/awww.linkedin.com/in/aditya-srivastawa"
            }
          />
          <MembersCard
            ImgUrl={Img}
            name={"Aditya Ranjan"}
            domainOrBranch={"Centre Coordinator"}
            linkedinUrl={
              "https://www.linkedin.com/in/awww.linkedin.com/in/aditya-srivastawa"
            }
          />
          <MembersCard
            ImgUrl={Img}
            name={"Aditya Ranjan"}
            domainOrBranch={"Centre Coordinator"}
            linkedinUrl={
              "https://www.linkedin.com/in/awww.linkedin.com/in/aditya-srivastawa"
            }
          />
          <MembersCard
            ImgUrl={Img}
            name={"Aditya Ranjan"}
            domainOrBranch={"Centre Coordinator"}
            linkedinUrl={
              "https://www.linkedin.com/in/awww.linkedin.com/in/aditya-srivastawa"
            }
          />
          <MembersCard
            ImgUrl={Img}
            name={"Aditya Ranjan"}
            domainOrBranch={"Centre Coordinator"}
            linkedinUrl={
              "https://www.linkedin.com/in/awww.linkedin.com/in/aditya-srivastawa"
            }
          />
          <MembersCard
            ImgUrl={Img}
            name={"Aditya Ranjan"}
            domainOrBranch={"Centre Coordinator"}
            linkedinUrl={
              "https://www.linkedin.com/in/awww.linkedin.com/in/aditya-srivastawa"
            }
          />
          <MembersCard
            ImgUrl={Img}
            name={"Aditya Ranjan"}
            domainOrBranch={"Centre Coordinator"}
            linkedinUrl={
              "https://www.linkedin.com/in/awww.linkedin.com/in/aditya-srivastawa"
            }
          />
          <MembersCard
            ImgUrl={Img}
            name={"Aditya Ranjan"}
            domainOrBranch={"Centre Coordinator"}
            linkedinUrl={
              "https://www.linkedin.com/in/awww.linkedin.com/in/aditya-srivastawa"
            }
          />
          <MembersCard
            ImgUrl={Img}
            name={"Aditya Ranjan"}
            domainOrBranch={"Centre Coordinator"}
            linkedinUrl={
              "https://www.linkedin.com/in/awww.linkedin.com/in/aditya-srivastawa"
            }
          />
        </div>
        <div className="members-heading-container">
          <h1 className="font-semibold font-roboto my-10 text-3xl sm:text-5xl text-start">
            Associative Members
          </h1>
        </div>
        <div className="MembersCard-container my-4 grid place-items-center">
          <MembersCard
            ImgUrl={Img}
            name={"Aditya Ranjan"}
            domainOrBranch={"Web d team"}
            linkedinUrl={
              "https://www.linkedin.com/in/awww.linkedin.com/in/aditya-srivastawa"
            }
          />
          <MembersCard
            ImgUrl={Img}
            name={"Aditya Ranjan"}
            domainOrBranch={"Web d team"}
            linkedinUrl={
              "https://www.linkedin.com/in/awww.linkedin.com/in/aditya-srivastawa"
            }
          />
          <MembersCard
            ImgUrl={Img}
            name={"Aditya Ranjan"}
            domainOrBranch={"Web d team"}
            linkedinUrl={
              "https://www.linkedin.com/in/awww.linkedin.com/in/aditya-srivastawa"
            }
          />
          <MembersCard
            ImgUrl={Img}
            name={"Aditya Ranjan"}
            domainOrBranch={"Web d team"}
            linkedinUrl={
              "https://www.linkedin.com/in/awww.linkedin.com/in/aditya-srivastawa"
            }
          />
          <MembersCard
            ImgUrl={Img}
            name={"Aditya Ranjan"}
            domainOrBranch={"Web d team"}
            linkedinUrl={
              "https://www.linkedin.com/in/awww.linkedin.com/in/aditya-srivastawa"
            }
          />
          <MembersCard
            ImgUrl={Img}
            name={"Aditya Ranjan"}
            domainOrBranch={"Web d team"}
            linkedinUrl={
              "https://www.linkedin.com/in/awww.linkedin.com/in/aditya-srivastawa"
            }
          />
          <MembersCard
            ImgUrl={Img}
            name={"Aditya Ranjan"}
            domainOrBranch={"Web d team"}
            linkedinUrl={
              "https://www.linkedin.com/in/awww.linkedin.com/in/aditya-srivastawa"
            }
          />
          <MembersCard
            ImgUrl={Img}
            name={"Aditya Ranjan"}
            domainOrBranch={"Web d team"}
            linkedinUrl={
              "https://www.linkedin.com/in/awww.linkedin.com/in/aditya-srivastawa"
            }
          />
          <MembersCard
            ImgUrl={Img}
            name={"Aditya Ranjan"}
            domainOrBranch={"Web d team"}
            linkedinUrl={
              "https://www.linkedin.com/in/awww.linkedin.com/in/aditya-srivastawa"
            }
          />
          <MembersCard
            ImgUrl={Img}
            name={"Aditya Ranjan"}
            domainOrBranch={"Web d team"}
            linkedinUrl={
              "https://www.linkedin.com/in/awww.linkedin.com/in/aditya-srivastawa"
            }
          />
        </div>
      </div>
    </Container>
  );
}

export default Members;
