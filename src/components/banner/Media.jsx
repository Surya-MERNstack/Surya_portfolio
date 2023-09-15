import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaDownload,FaLinkedinIn, FaReact, FaNodeJs } from "react-icons/fa";
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
            <a href="https://www.linkedin.com/in/suryaperumal/" target="_blank">
              <FaLinkedinIn />
            </a>
          </span>
        </div>
        <br/>
        <div className="w-full bannerIcon -ml:23 flex flex-row ">
          <span>
            <a
              href="https://drive.google.com/file/d/1VElT12KhgyGelLv-x1CVP2_coNMpd1j_/view"
              target="_blank"
              className="hover:text-designColor "
            >
              RESUME
              <FaDownload />
            </a>
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
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
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
