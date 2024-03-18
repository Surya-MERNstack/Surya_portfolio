import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaDownload, FaLinkedinIn, FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://github.com/Surya-MERNstack" target="_blank">
              <BsGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="mailto:charusurya17@gmail.com" target="_blank">
              <HiOutlineMail />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/surya-perumal-6a9758294/" target="_blank">
              <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>
      <div className="flex flex-col bannerIcon  my-9  w-40">
        {/* <h2 className="text-base uppercase font-titleFont ">
          
        </h2> */}
        <div className="flex flex-col gap-5">
          <a
            href="https://drive.google.com/file/d/14CS0R6lErhIDAQfbVOC7aL1_aeIHZT3B/view?usp=sharing"
            target="_blank"
            className="hover:text-designColor flex flex-reverse gap-4 "
          >
            <span>RESUME</span>
            <FaDownload />
          </a>
          {/* <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <FaNodeJs />
          </span>
          <span className="bannerIcon">
            <SiExpress />
          </span>
          <span className="bannerIcon">
            <SiMongodb />
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default Media;
