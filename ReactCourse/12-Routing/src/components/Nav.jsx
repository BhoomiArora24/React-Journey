import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <div>
        <h3>Sheriyans</h3>
        <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
        </div>
      </div>
    </div>
  )
}

export default Nav
