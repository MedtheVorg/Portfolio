import {
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <aside className="  text-white flex items-center p-8 ">
      <ul className="flex  md:flex-col md:gap-y-8 gap-x-8 w-fit">
        <li className="bg-[#4074EE] hover:translate-y-[-15%] duration-200 inline-block">
          <a
            href="#"
            target="_blank"
            className="flex justify-between items-center p-2 gap-x-2"
          >
            <span>Linkedin</span>
            <FaLinkedin size={30} />
          </a>
        </li>

        <li className="bg-[#2D2D2D] hover:translate-y-[-15%] duration-200 inline-block ">
          <a
            href="https://github.com/MedtheVorg"
            target="_blank"
            className="flex justify-between items-center p-2 gap-x-2"
          >
            <span>Github</span>
            <FaGithub size={30} />
          </a>
        </li>
      </ul>
    </aside>
  );
};
export default SocialLinks;
