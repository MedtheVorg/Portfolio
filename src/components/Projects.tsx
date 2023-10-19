import { motion } from 'framer-motion';
import { projectsVariants } from '../framer_variants/variants';
import miniStoreHomePage from '../assets/ministore_Homepage.png';
import classiHomePage from '../assets/classiHomePage.png';

import { VscPreview } from 'react-icons/vsc';
import { FaGithubAlt } from 'react-icons/fa';

const Projects = () => {
  return (
    <motion.section
      variants={projectsVariants}
      initial="hidden"
      animate="visible"
      exit="exiting"
      transition={{
        duration: 0.6,
      }}
      className="  text-white   max-w-screen-xl mx-auto"
    >
      <div className="p-4  pt-20">
        <h1 className="text-left text-4xl md:text-6xl  md:col-span-2 capitalize mb-8 border-b-2 pb-4 font-bold">
          projects
        </h1>

        <ul className="md:pl-8 mt-4 flex flex-col gap-y-32 md:gap-y-16">
          <li className="grid md:grid-cols-2   gap-x-4 gap-y-6  ">
            {/* description */}
            <div>
              <div className="flex flex-col items-center justify-between gap-y-2 lg:flex-row lg:gap-y-0  mb-8">
                <h2 className=" font-jost text-4xl">
                  MiniStore<span className="text-semiBlue">.</span>
                </h2>
                <div className="flex gap-x-2  ">
                  <a
                    href="https://ministoree.vercel.app/"
                    target="_blank"
                    className="border-2 px-2 py-[1px] md:px-4 md:py-2 flex items-center justify-center gap-x-2 hover:text-[#222] hover:bg-white transition-all duration-200"
                  >
                    <VscPreview size={30} /> preview
                  </a>
                  <a
                    href="https://github.com/MedtheVorg/MiniStore-Ecommerce-Website"
                    target="_blank"
                    className="border-2 px-2 py-[1px] md:px-4 md:py-2 flex items-center justify-center gap-x-2 hover:text-[#222] hover:bg-white transition-all duration-200"
                  >
                    <FaGithubAlt size={30} /> source code
                  </a>
                </div>
              </div>
              <div className="lg:text-xl">
                <p>
                  MiniStore is an e-commerce web application that provides a
                  variety of electronic products for purchase.
                </p>
                <p className="my-4">
                  the app was made with some of the well known technologies such
                  as react , tailwindcss, react-router, express, mongodb, zod
                  and many more.
                </p>
                <p>you can check the github link above for more details.</p>
              </div>
            </div>
            {/* showcase */}
            <div className="overflow-hidden h-[400px] border-2 ">
              <img
                src={miniStoreHomePage}
                alt=""
                className="w-full object-cover  animate-move-it "
              />
            </div>
          </li>

          <hr className="w-1/2 mx-auto " />

          <li className="grid md:grid-cols-2 max-h-[600px]  gap-x-4 ">
            {/* description */}
            <div>
              <div className="flex flex-col items-center justify-between gap-y-2 lg:flex-row lg:gap-y-0  mb-8">
                <h2 className=" font-jost text-4xl">
                  classi<span className="text-semiBlue">.</span>
                </h2>
                <div className="flex gap-x-2  ">
                  <a
                    href="https://classilandingpage.vercel.app/"
                    target="_blank"
                    className="border-2 px-2 py-[1px] md:px-4 md:py-2 flex items-center justify-center gap-x-2 hover:text-[#222] hover:bg-white transition-all duration-200"
                  >
                    <VscPreview size={30} /> preview
                  </a>
                  <a
                    href="https://github.com/MedtheVorg/Classi-Landing-Page"
                    target="_blank"
                    className="border-2 px-2 py-[1px] md:px-4 md:py-2 flex items-center justify-center gap-x-2 hover:text-[#222] hover:bg-white transition-all duration-200"
                  >
                    <FaGithubAlt size={30} /> source code
                  </a>
                </div>
              </div>
              <div className="lg:text-xl my-4">
                <p>
                  Classi is a landing page about furniture made with react,
                  tailwindcss and a little bit of framer-motion.
                </p>
              </div>
            </div>
            {/* showcase */}
            <div className="overflow-hidden h-[400px]">
              <img
                src={classiHomePage}
                alt=""
                className="w-full object-cover  animate-move-it"
              />
            </div>
          </li>
        </ul>
      </div>
    </motion.section>
  );
};
export default Projects;
