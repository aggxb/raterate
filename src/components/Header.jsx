import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex flex-wrap gap-8 items-center max-md:justify-between max-md:gap-3 max-[25rem]:justify-center">
      <div>
        <Link to="/">
          <img
            src="/logo-blue.svg"
            alt="Logo raterate"
            className="p-2 -mx-2 max-[25rem]:mx-0"
          />
        </Link>
      </div>
      <form className="max-md:order-2 max-md:w-full ml-auto">
        <input
          type="text"
          className="w-full max-h-12 py-2 px-3 text-paragraph text-c2blue border rounded-md outline-none min-lg:min-w-md"
          placeholder="pesquise"
        />
      </form>
      <nav className="flex flex-wrap gap items-center gap-6 -mr-3 text-paragraph text-c2blue *:py-2 *:px-3 max-[25rem]:mr-0">
        <Link to="/about">sobre</Link>
        <Link to={`user/`}>minha área</Link>
      </nav>
    </header>
  );
};

export default Header;
