import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://www.facebook.com/siva.surya.9809/" target="_blank">
              <FaFacebookF />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://www.instagram.com/charliecarlos_/" target="_blank">
              <BsInstagram />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://www.linkedin.com/in/surya-perumal-039458269/"
              target="_blank"
            >
              <FaLinkedinIn />
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
