"use client";

import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*text*/}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <TypeAnimation
              sequence={[
                "Software Developer",
                2000,
                "Graphic Designer",
                2000,
                "Game Developer",
                2000,
              ]}
              speed={50}
              className="text-accent text-2xl xl:text-3xl"
              wrapper="span"
              repeat={Infinity}
            />

            <h1 className="h1">
              Hello I'm <br />{" "}
              <span className="text-accent">Monabbir Bhuiyan</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>
            {/*btn and socials*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/monabbir_cv.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-12 h-12 border border-accent rounded-full flex justify-center items-center text-accent text-2xl hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/*photo*/}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
