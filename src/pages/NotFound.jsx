import React from 'react';
import NotFoundImg from '../assets/404.svg';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="content-container grid gap-2.5 place-items-center">
      <div className='max-w-[500px]'>
        <img src={NotFoundImg} alt="Page not found image"/>
      </div>
      <Link to="/" className="py-1 w-fit text-h3-l text-center  text-c1blue">
        volte para a home.
      </Link>
    </section>
  );
};

export default NotFound;
