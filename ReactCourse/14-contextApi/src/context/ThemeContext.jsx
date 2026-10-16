import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const ThemeDataContext = createContext()
// ise export krna pdega taki koi bhi ise use kr ske

const ThemeContext = (props) => {

    const [theme, setTheme] = useState('light')
  return (
    <div>
      <ThemeDataContext.Provider value={[theme, setTheme]}>
        {props.children}
      </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContext
