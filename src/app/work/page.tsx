"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/constants";
import { PinContainer } from "../../components/ui/Pin";
import { motion } from "framer-motion";
import Image from "next/image";

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeInOut" },
      }}
      className="min-h-[85vh] flex flex-col items-center py-12 mb-12"
    >
      {/* Title Section */}
      <div className="w-full text-center mb-12">
        <h1 className="heading mb-10">
          A small selection of{" "}
          <span className="text-accent">recent projects</span>
        </h1>
      </div>

      {/* Project Cards Section */}
      <div className="flex flex-wrap gap-10 px-4 mt-10 gap-x-12 justify-center items-center gap-y-48">
        {projects.map((item) => (
          <div
            className="lg:min-h-[39rem] h-[26rem] flex justify-center sm:w-96 w-[80vw] mb-12"
            key={item.id}
          >
            <PinContainer
              title={item.link}
              href={item.link}
              handleClick={() => window.open(item.link, "_blank")}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[25vh] lg:max-h-[25vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#191919" }}
                >
                  <Image
                    src="/bg.png"
                    alt="bgimg"
                    layout="fill"
                    objectFit="cover"
                  />
                  <Image
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p className="lg:text-xl lg:font-normal font-light text-sm text-gray-400 my-2">
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map(({ icon }, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <div className="text-accent">{icon}</div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#a90138" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Work;
