import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="mt-14 w-auto   h-auto flex hover:cursor-pointer    flex-wrap gap-5">
          <ResumeCard
            title="HTML5"
            subTitle="Guvi Certification"
            des={
              <a
                href="https://www.guvi.in/verify-certificate?id=S6W915769YoH0R1549"
                className="text-designColor"
                target="_blank"
              >
                Link
              </a>
            }
          />
          <ResumeCard
            title="CSS3"
            subTitle="Guvi Certification"
            des={
              <a
                href="
                https://www.guvi.in/verify-certificate?id=100x9g9199a1e6754K"
                className="text-designColor"
                target="_blank"
              >
                Link
              </a>
            }
          />
          <ResumeCard
            title="Bootstrap"
            subTitle="Guvi Certification"
            des={
              <a
                href="https://www.guvi.in/verify-certificate?id=U9fR85491A0BV7r169"
                className="text-designColor"
                target="_blank"
              >
                Link
              </a>
            }
          />
          <ResumeCard
            title="JavaScript"
            subTitle="Guvi Certification"
            des={
              <a
                href="https://www.guvi.in/verify-certificate?id=19O9V0741sPJ99W56Y"
                className="text-designColor"
                target="_blank"
              >
                Link
              </a>
            }
          />
          <ResumeCard
            title="React"
            subTitle="Guvi Certification"
            des={
              <a
                href="https://www.guvi.in/verify-certificate?id=6o1J940d159Hhm9703"
                className="text-designColor"
                target="_blank"
              >
                Link
              </a>
            }
          />
          <ResumeCard
            title="NodeJS"
            subTitle="Guvi Certification"
            des={
              <a
                href="https://www.guvi.in/verify-certificate?id=nzU1Q5E9460P1L0979"
                className="text-designColor"
                target="_blank"
              >
                Link
              </a>
            }
          />
          <ResumeCard
            title="MongoDB"
            subTitle="Guvi Certification"
            des={
              <a
                href="https://www.guvi.in/verify-certificate?id=N9u65791x1VltG9n40"
                className="text-designColor"
                target="_blank"
              >
                Link
              </a>
            }
          />
          <ResumeCard
            title="MySQL"
            subTitle="Guvi Certification"
            des={
              <a
                href="https://www.guvi.in/verify-certificate?id=p1516M79Kl4agt990F"
                className="text-designColor"
                target="_blank"
              >
                Link
              </a>
            }
          />
          <ResumeCard
            title="MERNSTACK"
            subTitle="Guvi Certification"
            des={
              <a
                href="https://www.guvi.in/verify-certificate?id=I3659nNZ74091tP91x"
                className="text-designColor"
                target="_blank"
              >
                Link
              </a>
            }
          />
          <ResumeCard
            title="PYTHON"
            subTitle="Guvi Certification"
            des={
              <a
                href="https://www.guvi.in/verify-certificate?id=7691C7iSf378089rz7"
                className="text-designColor"
                target="_blank"
              >
                Link
              </a>
            }
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
