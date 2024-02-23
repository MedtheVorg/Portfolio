import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { FaGithubAlt } from 'react-icons/fa';
import { VscPreview } from 'react-icons/vsc';

interface ProjectProps extends ComponentPropsWithoutRef<'li'> {
    title: string;
    description: ReactNode;
    imageUrl: string;
    githubUrl: string;
    liveUrl: string;
}

export default function Project({
    title,
    description,
    imageUrl,
    liveUrl,
    githubUrl,
}: ProjectProps) {
    return (
        <li className='grid md:grid-cols-2   gap-x-4  h-auto'>
            {/* description */}
            <div>
                <div className='flex flex-col items-center justify-between gap-y-2 lg:flex-row lg:gap-y-0  mb-8'>
                    <h2 className=' font-jost text-4xl'>
                        {title}
                        <span className='text-semiBlue'>.</span>
                    </h2>
                    <div className='flex gap-x-2  '>
                        {!!liveUrl && (
                            <a
                                href={liveUrl}
                                target='_blank'
                                className='border-2 px-2 py-[1px] md:px-4 md:py-2 flex items-center justify-center gap-x-2 hover:text-[#222] hover:bg-white transition-all duration-200'
                            >
                                <VscPreview size={30} /> preview
                            </a>
                        )}
                        <a
                            href={githubUrl}
                            target='_blank'
                            className='border-2 px-2 py-[1px] md:px-4 md:py-2 flex items-center justify-center gap-x-2 hover:text-[#222] hover:bg-white transition-all duration-200'
                        >
                            <FaGithubAlt size={30} /> source code
                        </a>
                    </div>
                </div>
                <div className='lg:text-xl my-4'>
                    <p>{description}</p>
                </div>
            </div>
            {/* showcase */}
            <div className='overflow-hidden h-[400px]'>
                <img
                    src={imageUrl}
                    alt=''
                    className='w-full object-cover  '
                />
            </div>
        </li>
    );
}
