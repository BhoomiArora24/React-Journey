import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Home from '../pages/AdvHome';
import About from '../pages/AdvAbout';
import Product from '../pages/AdvProduct'
import NotFound from '../components/NotFound';
import {Route, Routes} from 'react-router-dom'
import Men from '../pages/Men';
import Women from '../pages/Women';

const AdvRoutes = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='/product/men' element={<Men />}/>
        <Route path='/product/women' element={<Women />}/>


        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default AdvRoutes
