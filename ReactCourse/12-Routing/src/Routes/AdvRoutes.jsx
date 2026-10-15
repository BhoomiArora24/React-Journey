import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Home from '../pages/AdvHome';
import About from '../pages/AdvAbout';
import Product from '../pages/AdvProduct'
import Courses from '../pages/Courses'
import NotFound from '../components/NotFound';
import { Route, Routes } from 'react-router-dom'
import Men from '../pages/Men';
import Women from '../pages/Women';
import CorseDetail from '../pages/CorseDetail';
import Navbar2 from '../components/Navbar2';

const AdvRoutes = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        {/* //dynamic routing --/courses ke age kuch bhi likhoge vo course detail component ko render krega */}
        <Route path='/courses/:id' element={<CorseDetail />}/>
        {/* //nested Routes */}
        <Route path='/product' element={<Product />}>
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default AdvRoutes
