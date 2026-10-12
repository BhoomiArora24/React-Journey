import React, {useState} from 'react'

const Heyy2 = () => {

    const [a,setA] = useState(0);
    const [b,setB] = useState(0);

    function aChanging(){
        console.log('A ki value change ho gyi');
    }

    function bChanging(){
        console.log('B ki value change ho gyi');
    }

  return (
    <div>
        <h1>A is {a}</h1>
        <h1>B is {b}</h1>
      <button onClick={() => {
        setA(a+1)
      }}>changeA</button>
      <button onClick={() => {
        setB(b+1)
      }}>changeB</button>
    </div>
  )
}

export default Heyy2
