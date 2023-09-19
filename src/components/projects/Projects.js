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
            des="Food Delight is a Redux-powered food ordering app that allows users to browse and order from a menu of delicious dishes, while providing administrators with a user-friendly panel to add and manage food items seamlessly."
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
            des="Money Manager is a handy financial tool that calculates your expenses and helps you reduce unnecessary spending. It empowers you to take control of your finances and make informed decisions about your budget."
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
            des="Vconnect Chat, built using Socket.io and React's Context API, offers a user-friendly registration process where users can create an account with their chosen username and password. Once registered, they can instantly connect and chat with people from all corners of the world, fostering global communication and connections in real-time"
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
          href="https://goldratescalculator.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <ProjectsCard
            title="Gold Calculator"
            src={gold}
            des="The Gold Calculator is a handy tool that quickly computes the value of gold based on its weight and current market price, assisting users in making informed decisions about their precious metal investments."
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
