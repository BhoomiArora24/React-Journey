import React, {useState} from 'react'

const Counter = () => {
    const [a, setA] = useState(0);

    const increaseA = () => {
        setA(a+1);
    }

    const decreaseA = () => {
        setA(a-1);
    }

    const jump5 = () => {
        setA(a+5);
    }

  return (
    <div>
        <h1>{a}</h1>
      <button onClick={increaseA}>Increase</button>
      <button onClick={decreaseA}>decrease</button>
      <button onClick={jump5}>Jump by 5</button>
    </div>
  )
}

export default Counter
