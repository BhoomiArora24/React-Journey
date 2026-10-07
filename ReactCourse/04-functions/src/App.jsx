import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  function btnClicked(){
    console.log("button.clicked");
  }

  function inputchanging(elem){
          console.log(elem)
        }

  return (
    <>
      <div>
        <h1>Hloo, Navya</h1>

        <button onClick={btnClicked}>change user</button>
        <input onChange={function(elem){
          inputchanging(elem.target.value);
        }}
        type='text' 
        placeholder='Enter Name'/> 
      </div>
    </>
  )
}

export default App
