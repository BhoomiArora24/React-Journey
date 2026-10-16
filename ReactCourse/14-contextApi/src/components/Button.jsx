import React, {useState, useContext} from 'react'
import { ThemeDataContext } from '../context/ThemeContext';

const Button = () => {
    const [theme, setTheme] = useContext(ThemeDataContext);
    //zaruri ni h hr bar bar theme setTheme dono uthao sirf theme ya seTheme me se koi ek bhi uthake skte h as per requirement
    //const [theme] = useContext(ThemeDataContext);

    const changeTheme = () => {
        if(theme == 'light'){
            setTheme('Dark')
        }else{
            setTheme('light')
        }
    }
  return (
    <div>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Button
