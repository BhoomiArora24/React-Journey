import React, {useContext} from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => {

    const data = useContext(ThemeDataContext);
    //yha data me hmne jo value provider m pass ki thi ise yha store kra liya

    console.log(data); 
    //jisne provider diya h uska name likhna h uwseContext m 
    // console.log(props);
  return (
    <div className='nav'>
      <h2>Sheriyans</h2>
      <Nav2/>
    </div>
  )
}

export default Navbar
