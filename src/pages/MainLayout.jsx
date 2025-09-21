import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const MainLayout = () => {
  return (
    <div className='rad-gradient'>
      <Header />
      <h1>MainLayout</h1>
      <Outlet />
    </div>
  )
}

export default MainLayout