import Image from "next/image";

import { ParticlesContainer } from "../components/ParticlesContainer";
import { Avatar } from "../components/Avatar";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import { fadeIn } from "../variants";
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full ">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-30 xl:text-left h-full container mx-auto ">
          <motion.h1
            className="h2"
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
          >
            Transforming Ideas <br /> Into{" "}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-5 xl:mb-16"
          >
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which look even slightly believable.
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            {/* <ProjectBtn /> */}
            <Link
              href={"/work"}
              className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group mb-32 "
            >
              <Image
                src={"/rounded-text.png"}
                width={141}
                height={148}
                alt="btn image"
                className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
              />
              <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
            </Link>
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="hidden xl:flex"
          >
            <Link
              href={"/work"}
              className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group mb-32 "
            >
              <Image
                src={"/rounded-text.png"}
                width={141}
                height={148}
                alt="btn image"
                className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
              />
              <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
