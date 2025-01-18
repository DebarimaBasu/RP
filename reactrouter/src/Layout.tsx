import React from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Header/> 
    {/* //It will not be change */}
    <Outlet/>
    <Footer/>
     {/* //It will not be change */}
      
    </>
  )
}

export default Layout
