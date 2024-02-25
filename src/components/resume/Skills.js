import React from "react";
import { motion } from "framer-motion";
import { FaCss3, FaGit, FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiJavascript, SiMongodb, SiPython,SiMysql,SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px] uppercase">
            Skills
          </p> */}
          <h2 className="text-3xl md:text-4xl font-bold">FrontEnd Skill</h2>
        </div>
        <div className='className="mt-14 w-full flex flex-reverse gap-6'>
          <div>
            <p
              className="text-sm uppercase bannerIcon hover:text-designColor"
              style={{ fontSize: "1.5rem", color: "orangered" }}
            >
              <FaHtml5 />
            </p>
            {/* <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
               <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0"></span>
              </motion.span> 
            </span> */}
          </div>
          <div>
            <p
              className="text-sm uppercase font-medium bannerIcon hover:text-designColor"
              style={{ fontSize: "1.5rem", color: "dodgerblue" }}
            >
              <FaCss3 />
            </p>
            {/* <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
               <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">100%</span>
              </motion.span> 
            </span> */}
          </div>
          <div>
            <p
              className="text-sm uppercase font-medium bannerIcon hover:text-designColor"
              style={{ fontSize: "1.5rem", color: "dodgerblue" }}
            >
              <SiTailwindcss />
            </p>
          </div>
          <div>
            <p
              className="text-sm uppercase font-medium bannerIcon hover:text-designColor"
              style={{ fontSize: "1.5rem", color: "orange" }}
            >
              <SiJavascript />
            </p>
          </div>
          <div>
            <p
              className="text-sm uppercase font-medium bannerIcon hover:text-designColor"
              style={{ fontSize: "1.5rem", color: "dodgerblue" }}
            >
              <FaReact />{" "}
            </p>
            {/* <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
               <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">100%</span>
              </motion.span> 
            </span> */}
          </div>
        </div>
      </div>

      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p> */}
          <h2 className="text-3xl md:text-4xl font-bold hover:text-designColor ">
            BackEnd Skill
          </h2>
        </div>
        <div className="flex flex-reverse  w-full  gap-6 ">
          <div>
            <p
              className="text-sm uppercase font-medium bannerIcon hover:text-designColor"
              style={{ fontSize: "1.5rem", color: "green" }}
            >
              <FaNodeJs />{" "}
            </p>
            {/* <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">100%</span>
              </motion.span>
            </span> */}
          </div>
          <div>
            <p
              className="text-sm uppercase font-medium bannerIcon hover:text-designColor"
              style={{ fontSize: "1.5rem", color: "#fff" }}
            >
              <SiExpress />{" "}
            </p>
            {/* <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">100%</span>
              </motion.span>
            </span> */}
          </div>
          <div>
            <p
              className="text-sm uppercase font-medium bannerIcon hover:text-designColor"
              style={{ fontSize: "1.5rem", color: "#589636" }}
            >
              <SiMongodb />{" "}
            </p>
            {/* <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">100%</span>
              </motion.span>
            </span> */}
          </div>
          <div>
            <p
              className="text-sm uppercase font-medium bannerIcon hover:text-designColor"
              style={{ fontSize: "1.5rem", color: "#3776AB" }}
            >
              <SiPython />{" "}
            </p>
            {/* <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">100%</span>
              </motion.span>
            </span> */}
          </div>
          <div>
            <p
              className="text-sm uppercase font-medium bannerIcon hover:text-designColor"
              style={{ fontSize: "1.5rem", color: "#f29111" }}
            >
              <SiMysql />{" "}
            </p>
            {/* <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">100%</span>
              </motion.span>
            </span> */}
          </div>
          <div>
            <p
              className="text-sm uppercase font-medium bannerIcon hover:text-designColor"
              style={{ fontSize: "1.5rem", color: "#F1502F" }}
            >
              <FaGitAlt />{" "}
            </p>
            {/* <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >

              The Git Logo Colors with Hex & RGB Codes has 2 colors which are Portland Orange () and American Bronze (#3E2C00).

                <span className="absolute -top-7 right-0">100%</span>
              </motion.span>
            </span> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
