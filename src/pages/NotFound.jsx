import React from 'react';
import NotFoundImg from '../assets/404.svg';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="grid gap-5 mb-30 place-items-center">
      <div>
        <img src={NotFoundImg} alt="Page not found image" />
      </div>
      <Link to="/" className="py-1 w-fit text-h3-l text-center  text-c1blue">
        volte para a home.
      </Link>
    </section>
  );
};

export default NotFound;
