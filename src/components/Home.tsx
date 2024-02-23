import { motion } from 'framer-motion';
import { homeVariants } from '../framer_variants/variants';
import { Link } from 'react-router-dom';

// icons
import reduxIcon from '../assets/redux.svg';
import nodeIcon from '../assets/nodejs.svg';
import reactIcon from '../assets/react.svg';
import typescriptIcon from '../assets/typescript-icon.svg';
import tailwindIcon from '../assets/tailwindcss-icon.svg';
import mongoIcon from '../assets/mongodb-icon.svg';
import { BsArrowRight } from 'react-icons/bs';

const Home = () => {
    return (
        <motion.section
            variants={homeVariants}
            initial='hidden'
            animate='visible'
            exit='exiting'
            transition={{
                duration: 0.6,
            }}
            className='h-[calc(100vh-3.5rem)]  flex items-center   text-white  relative px-8  '
        >
            <div className=' grid grid-cols-1 max-w-screen-xl mx-auto grid-rows-1'>
                <div className=' text-left  z-10 '>
                    <h1 className=' text-5xl  lg:text-6xl   capitalize'>
                        Hi ! <br /> I am Mohamed
                        <br />a{' '}
                        <span className='bg-gradient-to-r from-cyan-500 to-green-500 font-bold bg-clip-text text-transparent uppercase'>
                            full stack
                        </span>{' '}
                        web developer.
                    </h1>
                    <Link
                        to={'/projects'}
                        className='px-8 py-4 border-2 capitalize mt-8 inline-block text-xl hover:bg-white hover:text-[#222]  transition-all duration-300 mx-auto  '
                    >
                        view projects <BsArrowRight className='inline-block' />
                    </Link>
                </div>

                <div className=''>
                    <img
                        src={typescriptIcon}
                        alt='typescript icon'
                        className='absolute w-[50px] md:w-[100px] top-[10%] left-[20%]   blur-[1px]'
                    />
                    <img
                        src={reactIcon}
                        alt='typescript icon'
                        className='absolute w-[70px] md:w-[100px] top-[20%] right-[35%]   blur-[1px]'
                    />
                    <img
                        src={nodeIcon}
                        alt='typescript icon'
                        className='absolute w-[90px] md:w-[100px] top-[60%] right-[5%]  blur-[1px] '
                    />
                    <img
                        src={tailwindIcon}
                        alt='typescript icon'
                        className='absolute w-[70px] md:w-[100px] top-[30%] right-[10%]   blur-[1px]'
                    />
                    <img
                        src={reduxIcon}
                        alt='typescript icon'
                        className='absolute w-[70px] md:w-[100px] bottom-[10%] left-[20%]   blur-[1px]'
                    />
                    <img
                        src={mongoIcon}
                        alt='typescript icon'
                        className='absolute w-[50px] md:w-[80px] bottom-[10%] right-[20%]   blur-[1px]'
                    />
                </div>
            </div>
        </motion.section>
    );
};
export default Home;
