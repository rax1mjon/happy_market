import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    
    <Header/>

    <main className='pb-8'>
      <Outlet/>
    </main>

    <Footer></Footer>
    </>
  )
}

export default Layout