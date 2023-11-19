import React from 'react'
import Navbar from '../components/Navbar'
import Home from './HomePage/Home'
import { Outlet } from 'react-router-dom'

const Portal = () => {
  return (
    <div className='homeContainer'>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Portal