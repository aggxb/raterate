import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = () => {
  const height = document.documentElement.clientHeight; // h-211

  console.log(height)
  return (
    <div className="rad-gradient">
      <div className='container grid grid-rows-[auto_1fr] min-h-screen'>
        <Header />
        <div className="flex flex-col divide-y-1 divide-c1blue/20 last:*:mt-5">
          <main className='flex-grow'>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
