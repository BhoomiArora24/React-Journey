import React from 'react'
import Card from "./components/Card.jsx"
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <div className="flex flex-wrap gap-5 p-5">
      <Card user='Navya' age={21} img="https://i.pinimg.com/736x/15/f5/cf/15f5cfd641b145556dc86487b18588b2.jpg"/>
      <Card user='Nivi' age={21} img="https://i.pinimg.com/1200x/95/bc/28/95bc28ae0f54272ababfda45ac6656f4.jpg"/>
    </div>
  );
}

export default App