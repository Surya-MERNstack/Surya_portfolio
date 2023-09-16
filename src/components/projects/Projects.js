import React from "react";
import Title from "../layouts/Title";
import { projectTwo } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";
import { ecom } from "../../assets/index";
import chat from "../..//assets/images/projects/chatting.jpg";
import { BsGithub } from "react-icons/bs";
import gold from "../../assets/images/projects/gold.png";
import food from "../../assets/images/projects/food.jpg";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PROJECT AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-14 flex flex-wrap">
        <a
          href="https://fooddelights.netlify.app/"
          target="_blank"
          rel="noreferrer "
        >
          <ProjectsCard
            title="FoodOrder Website"
            des=""
            src={food}
            button={
              <a
                href="https://github.com/Surya-MERNstack/fooddelightclient"
                className="border-b-black hover:text-designColor bannerIcon w-40 h-11"
                target="_blank"
              >
                {" "}
                FrontEnd
              </a>
            }
            buttons={
              <a
                href="https://github.com/Surya-MERNstack/fooddelightserver"
                className="border-b-black hover:text-designColor bannerIcon w-40 h-11"
                target="_blank"
              >
                {" "}
                BackEnd
              </a>
            }
            Live={
              <a
                href="https://fooddelights.netlify.app/"
                className="border-b-black hover:text-designColor bannerIcon w-40 h-11"
                target="_blank"
              >
                {" "}
                Live
              </a>
            }
          />
            
        </a>
        <a
          href="https://moneymanages.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <ProjectsCard
            title="Money Manager App"
            des=""
            src={projectTwo}
            button={
              <a
                href="https://github.com/Surya-MERNstack/moneymanager"
                className="border-b-black hover:text-designColor bannerIcon w-40 h-11"
                target="_blank"
              >
                {" "}
                FrontEnd{" "}
              </a>
            }
            buttons={
              <a
                href="https://github.com/Surya-MERNstack/Money_Manager_App/tree/master/server"
                className="border-b-black hover:text-designColor bannerIcon w-40 h-11"
                target="_blank"
              >
                {" "}
                BackEnd{" "}
              </a>
            }
            Live={
              <a
                href="https://moneymanages.netlify.app/"
                className="border-b-black hover:text-designColor bannerIcon w-40 h-11"
                target="_blank"
              >
                {" "}
                Live
              </a>
            }
          />
        </a>

        <a
          href="https://main--chatclient.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <ProjectsCard
            title="VConnect Chat App"
            src={chat}
            button={
              <a
                href="https://github.com/Surya-MERNstack/chatclient"
                className="border-b-black hover:text-designColor bannerIcon w-40 h-11"
                target="_blank"
              >
                {" "}
                FrontEnd{" "}
              </a>
            }
            buttons={
              <a
                href="https://github.com/Surya-MERNstack/chatserver"
                className="border-b-black hover:text-designColor bannerIcon w-40 h-11"
                target="_blank"
              >
                BackEnd{" "}
              </a>
            }
            Live={
              <a
                href="https://main--chatclient.netlify.app/"
                className="border-b-black hover:text-designColor bannerIcon w-40 h-11"
                target="_blank"
              >
                {" "}
                Live
              </a>
            }
          />
        </a>

        <a
          href="https://goldsratecalculator.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <ProjectsCard
            title="Gold Calculator"
            src={gold}
            button={
              <a
                href="https://github.com/Surya-MERNstack/Goldclient"
                className="border-b-black hover:text-designColor bannerIcon w-40 h-11"
                target="_blank"
              >
                {" "}
                FrontEnd 
              </a>
            }
            buttons={
              <a
                href="https://github.com/Surya-MERNstack/Gold_Server"
                className="border-b-black hover:text-designColor bannerIcon w-40 h-11"
                target="_blank"
              >
                {" "}
                 BackEnd
              </a>
            }
            Live={
              <a
                href="https://goldsratecalculator.netlify.app/"
                className="border-b-black hover:text-designColor bannerIcon w-40 h-11"
                target="_blank"
              >
                {" "}
                Live
              </a>
            }
          />
        </a>
      </div>
    </section>
  );
};

export default Projects;
