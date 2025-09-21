import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="container flex flex-wrap gap-10 items-center max-md:justify-between max-md:gap-5 max-[25rem]:justify-center max-[25rem]:gap-5">
      <div>
        <Link to="/">
          <img src="/logo-blue.svg" alt="Logo raterate" className="p-2" />
        </Link>
      </div>
      <form className="max-md:order-2 max-md:w-full ml-auto">
        <input
          type="text"
          className="w-full py-3 px-2 text-p-s text-c2blue border rounded-md outline-none"
          placeholder="pesquise"
        />
      </form>
      <nav className="flex flex-wrap gap items-center gap-6 text-p-s text-c2blue">
        <Link to="/about" className="py-2 px-3">
          sobre
        </Link>
        <Link to={`user/`}>minha área</Link>
      </nav>
    </header>
  );
};

export default Header;
