import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <header className="h-14 filter text-white p-4 flex items-center justify-center font-Montserrat backdrop-blur-sm  shadow-2xl  md:text-2xl">
      <ul className="flex items-center justify-center gap-x-8 uppercase">
        <li>
          <NavLink
            to={'/'}
            className={({ isActive }) => {
              return `${
                isActive ? 'underline underline-offset-4 text-darkOrange ' : ''
              } transition-all duration-300  hover:text-darkOrange uppercase`;
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/about'}
            className={({ isActive }) => {
              return `${
                isActive ? 'underline underline-offset-4 text-darkOrange ' : ''
              } transition-all duration-300  hover:text-darkOrange uppercase`;
            }}
          >
            about
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/projects'}
            className={({ isActive }) => {
              return `${
                isActive ? 'underline underline-offset-4 text-darkOrange ' : ''
              } transition-all duration-300  hover:text-darkOrange uppercase`;
            }}
          >
            projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/contact'}
            className={({ isActive }) => {
              return `${
                isActive ? 'underline underline-offset-4 text-darkOrange ' : ''
              } transition-all duration-300  hover:text-darkOrange uppercase`;
            }}
          >
            contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
export default Header;
