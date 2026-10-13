import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between'>
      <h2>heyyy</h2>
      <div className='flex gap-8'>
        <a href='/'>Home</a>
        <a href='/about'>About</a>
        <a href='/contact'>Contact</a>
      </div>
    </div>
  )
}

export default Navbar
