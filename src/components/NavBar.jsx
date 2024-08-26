import react from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full static h-14 bg-gray-300 flex items-center">
      <div
        className="w-[20%] h-full flex flex-grow items-center justify-center"
        id="logo"
      >
        <Link to="/">
          {' '}
          <h1 className=" text-orange-400">Recipe App</h1>{' '}
        </Link>
      </div>

      <div className="hidden md:block w-[60%] h-full " id="mid">
        <ul className=" flex w-full h-full items-center justify-between">
          <li>
            {' '}
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/Category"> Category </Link>
          </li>
          <li>
            <Link to="/Recipe/:id"> Recipe </Link>
          </li>
        </ul>
      </div>

      <div className="w-[20%] flex-grow h-full flex items-center justify-center">
        <Link to="/MyFavRecipe"> MyFav Recipe </Link>
      </div>
    </nav>
  );
};

export default Navbar;
