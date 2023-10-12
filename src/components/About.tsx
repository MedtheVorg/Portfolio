import { motion } from 'framer-motion';
import { aboutVariants } from '../framer_variants/variants';

const About = () => {
  return (
    <motion.section
      variants={aboutVariants}
      initial="hidden"
      animate="visible"
      exit="exiting"
      transition={{
        duration: 0.6,
      }}
      className="   text-white   max-w-screen-xl mx-auto"
    >
      <div className="p-8 ">
        <h1 className="text-left text-4xl md:text-6xl  md:col-span-2 capitalize mb-8 border-b-2 pb-4 font-bold">
          About
        </h1>
        <div className="flex flex-col gap-y-4">
          <p className="text-2xl">
            Hello 👋! I am Mohamed lemaallaoui a morrocan full stack web
            developer based in Morocco.
          </p>
          <p className="text-2xl">
            I consider myself a full stack web developer as I have been using
            and learing about{' '}
            <span className="bg-clip-text bg-yellow-400 text-transparent capitalize font-semibold">
              JavaScript{' '}
            </span>{' '}
            and recently{' '}
            <span className="bg-clip-text bg-blue-400 text-transparent capitalize font-semibold">
              typeScript{' '}
            </span>
            for the past year, it allows me to work on the front end as well as
            the backend and adjust the set of tools I use whenever I deem
            necessary.
          </p>
          <p className="text-2xl ">
            I am currently interested in making full stack web applications,
            building the UI using react and its ecosystem and the Api/backend
            using express and MongoDb.
          </p>
          <p className="text-2xl ">
            My initial goal was to learn about the MERN stack and is still the
            case to this day , each day I work on enhancing my skill set in the
            hopes of being part of a team where I can put my skills to use and
            grow as a developer.
          </p>
          <p></p>
        </div>
      </div>
    </motion.section>
  );
};
export default About;
