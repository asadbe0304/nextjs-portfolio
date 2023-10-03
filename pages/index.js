import Image from "next/image";

import { ParticlesContainer } from "../components/ParticlesContainer";
import { ProjectBtn } from "../components/ProjectsBtn";
import { Avatar } from "../components/Avatar";
import { motion } from "framer-motion";

import { fadein } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full ">
      <div>
        <div >
          <h1 className="h1">
            Tansforming Ideas <br /> Into
            <span className="text-accent">Digital Reality</span>
          </h1>
          <p>
            lorem
          </p>
        </div>
        Home
      </div>
    </div>
  );
};

export default Home;
