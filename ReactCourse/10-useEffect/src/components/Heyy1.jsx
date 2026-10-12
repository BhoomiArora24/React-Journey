import React from 'react'
import { useEffect, useState } from 'react'

const Heyy1 = () => {

  const [num, setNum] = useState(0);

  useEffect(function(){
    console.log('useEffect is running...')
  },[num])//jb jb num ki valye change ho tb tb chle-- cox num is there as dependency

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() =>{
        setNum(num + 1);
      }}></button>
    </div>
  )
}

export default Heyy1