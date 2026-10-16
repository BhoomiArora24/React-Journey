import React from 'react'

const Navbar = (props) => {
    const changeTheme = () => {
        props.setTheme('Dark')
        console.log(props)
       }
  return (
    <div>
        {/* yha pe data hme child se parent me bheja h from navbar to app */}
        <p>{props.theme}</p>
       <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Navbar
