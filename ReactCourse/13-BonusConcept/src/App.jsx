import React, {useState} from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [theme, setTheme] = useState('light')
  return (
    <div>
      <h1>Theme is {theme}</h1>
      {/* //data upar se niche to normally pass hora through --props drilling */}
      {/* <Navbar theme={theme}/> */}

      {/* now see for niche se upar */}
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
