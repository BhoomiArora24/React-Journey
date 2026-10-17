import React, {createContext, useState} from 'react'

export const ThemeChange = createContext();

const ThemeContext = ({children}) => {
    const [theme,setTheme] = useState('Dark')
  return (
      <ThemeChange.Provider value={[theme, setTheme]}>
        {children}
      </ThemeChange.Provider>
  )
}

export default ThemeContext
