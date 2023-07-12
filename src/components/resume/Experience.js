import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
      
        <div className="mt-14 w-full h-auto ">
          <ResumeCard
            title="Fresher"
            subTitle="Searching Job"
            result="Waiting"
            des="If I get work with your company I will do my Best"
          />
         
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
