import React from 'react'
import {Link} from 'react-router-dom'
//navlink -- click kroge to pta chlega kispe click kra h --pdna ye
const Navbar = () => {
  return (
    <div className='flex justify-between py-4 px-8 bg-cyan-900 items-center'>
      <h2 className='text-xl font-bold'>heyyy</h2>
      <div className='flex gap-8'>
        <Link className='text-xl font-bold' to='/'>Home </Link>
        <Link className='text-xl font-bold' to='/about'>About</Link>
        <Link className='text-xl font-bold' to='/courses'>Courses</Link>
        <Link className='text-xl font-bold' to='/product'>product</Link>
      </div>
    </div>
  )
}

export default Navbar
