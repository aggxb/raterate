import React from 'react';
import NotFoundImg from '../assets/404.svg';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="grid gap-2.5 size-full place-items-center content-center">
      <div className="max-w-[500px]">
        <img src={NotFoundImg} alt="Page not found image" />
      </div>
      <Link
        to="/"
        className="py-1 w-fit text-subtitle-s text-center text-c1blue"
      >
        volte para a home.
      </Link>
    </section>
  );
};

export default NotFound;
