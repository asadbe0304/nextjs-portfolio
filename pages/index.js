import Image from "next/image";

import { ParticlesContainer } from "../components/ParticlesContainer";
import { Avatar } from "../components/Avatar";
import { motion } from "framer-motion";
import { ProjectBtn } from "../components/ProjectsBtn";

import { fadein } from "../variants";
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full ">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto ">
          <h1 className="h1">
            Transforming Ideas <br /> Into
            <span className="text-accent">Digital Reality</span>
          </h1>
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which look even slightly believable.
          </p>
          <div className="flex justify-center xl:hidden relative">
            {/* <ProjectBtn /> */}
            <Link href={"/work"}>
              <Image
                src={"/rounded-text.png"}
                width={141}
                height={148}
                alt="btn image"
                className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
