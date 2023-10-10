import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <section className="h-[calc(100vh-3.5rem)]  flex justify-center  text-white  items-center max-w-screen-xl mx-auto flex-col ">
      <h1 className="text-9xl md:text-[18rem]">404</h1>
      <p className="text-4xl my-8">Page not found</p>
      <Link
        to={'/'}
        className=" px-8 py-4 cursor-pointer border-4 text-xl uppercase transition-all duration-200 hover hover:bg-white hover:text-black"
      >
        Go Home
      </Link>
    </section>
  );
};
export default NotFound;
