import { motion } from 'framer-motion';
import { projectsVariants } from '../framer_variants/variants';
import miniStoreHomePage from '../assets/ministore_Homepage.png';
import classiHomePage from '../assets/classiHomePage.png';
import authFlowImage from '../assets/authflow-pro.png';
import devQuizImage from '../assets/dev-recruit-quiz-app.png';
import techInnovateImage from '../assets/tech-innovate.png';

import Project from './Project';

const Projects = () => {
    return (
        <motion.section
            variants={projectsVariants}
            initial='hidden'
            animate='visible'
            exit='exiting'
            transition={{
                duration: 0.6,
            }}
            className='  text-white   max-w-screen-xl mx-auto'
        >
            <div className='p-4  pt-20'>
                <h1 className='text-left text-4xl md:text-6xl  md:col-span-2 capitalize mb-8 border-b-2 pb-4 font-bold'>
                    projects
                </h1>

                <ul className='md:pl-8 mt-4 flex flex-col gap-y-2 md:gap-y-16'>
                    <Project
                        title={'Tech Innovate'}
                        description={
                            'Tech innovate is NextJs based portfolio website , it represents the tech innovate enterprise , its team and what it can offer to its client '
                        }
                        imageUrl={techInnovateImage}
                        githubUrl={
                            'https://github.com/MedtheVorg/tech-innovate'
                        }
                        liveUrl={'https://tech-innovate-neon.vercel.app/'}
                    />
                    <hr className='w-1/2 mx-auto ' />
                    <Project
                        title={'Dev Recruit'}
                        description={
                            'Dev Recruit  is quiz app built using react and its ecosystem, it allows you to take a quiz and test your web dev knowledge'
                        }
                        imageUrl={devQuizImage}
                        githubUrl={
                            'https://github.com/MedtheVorg/DevRecruit-Quiz-App'
                        }
                        liveUrl={'https://dev-recruit-quiz-app.vercel.app/'}
                    />
                    <hr className='w-1/2 mx-auto ' />
                    <Project
                        title={'Auth Flow (RBAC)'}
                        description={
                            'Auth flow is a full stack web app that implements the Role Based Access Control approach to manage users permissions based on their role'
                        }
                        imageUrl={authFlowImage}
                        githubUrl={
                            'https://github.com/MedtheVorg/AuthFlow-Pro-RBAC'
                        }
                        liveUrl={''}
                    />
                    <hr className='w-1/2 mx-auto ' />

                    <Project
                        title={'MiniStore'}
                        description={
                            <div className='lg:text-xl'>
                                <p>
                                    MiniStore is an e-commerce web application
                                    that provides a variety of electronic
                                    products for purchase.
                                </p>
                                <p className='my-4'>
                                    the app was made with some of the well known
                                    technologies such as react , tailwindcss,
                                    react-router, express, mongodb, zod and many
                                    more.
                                </p>
                                <p>
                                    you can check the github link above for more
                                    details.
                                </p>
                            </div>
                        }
                        imageUrl={miniStoreHomePage}
                        liveUrl={'https://ministoree.vercel.app/'}
                        githubUrl={
                            'https://github.com/MedtheVorg/MiniStore-Ecommerce-Website'
                        }
                    />
                    <hr className='w-1/2 mx-auto ' />

                    <Project
                        title={'classi'}
                        description={
                            'Classi is a landing page about furniture made with react, tailwindcss and a little bit of framer-motion.'
                        }
                        imageUrl={classiHomePage}
                        githubUrl={
                            'https://github.com/MedtheVorg/Classi-Landing-Page'
                        }
                        liveUrl={'https://classilandingpage.vercel.app/'}
                    />
                </ul>
            </div>
        </motion.section>
    );
};
export default Projects;
