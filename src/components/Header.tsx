import { NavLink, useLocation } from 'react-router-dom';
const Header = () => {
  const location = useLocation();

  return (
    <header className="h-14 filter text-white p-4 flex items-center justify-center font-Montserrat backdrop-blur-sm  shadow-2xl  md:text-2xl">
      <ul className="flex items-center justify-center gap-x-8 uppercase">
        <li>
          <NavLink
            to={'/'}
            className={({ isActive, isPending }) => {
              return `${
                isActive
                  ? 'underline underline-offset-4  font-bold text-[#9C4A48]  '
                  : ''
              } transition-all duration-300  hover:text-[#9C4A48]  p-2 uppercase ${
                isPending ? 'italic' : ''
              }`;
            }}
            onClick={() => console.log(location)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/about'}
            className={({ isActive, isPending }) => {
              return `${
                isActive
                  ? 'underline underline-offset-4  font-bold text-[#9C4A48]  '
                  : ''
              } transition-all duration-300  hover:text-[#9C4A48]  p-2 uppercase ${
                isPending ? 'italic' : ''
              }`;
            }}
            onClick={() => console.log(location)}
          >
            about
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/projects'}
            className={({ isActive, isPending }) => {
              return `${
                isActive
                  ? 'underline underline-offset-4  font-bold text-[#9C4A48]  '
                  : ''
              } transition-all duration-300  hover:text-[#9C4A48]  p-2 uppercase ${
                isPending ? 'italic' : ''
              }`;
            }}
            onClick={() => console.log(location)}
          >
            projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/contact'}
            className={({ isActive, isPending }) => {
              return `${
                isActive
                  ? 'underline underline-offset-4  font-bold text-[#9C4A48]  '
                  : ''
              } transition-all duration-300  hover:text-[#9C4A48]  p-2 uppercase ${
                isPending ? 'italic' : ''
              }`;
            }}
            onClick={() => console.log(location)}
          >
            contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
export default Header;
