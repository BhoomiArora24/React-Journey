import React, {useState} from 'react'

const App = () => {
  const [a, setA] = useState(20);
  //a -read
  //setA--change

  const [users, setUsers] = useState([10,20,30]);

  function changeA(){
    setA(30);
    setUsers([30,40,50]);
  }
  return (
    <div>
      <h1>Value of a is {a} {users}</h1>
      <button onClick={changeA}>Click</button>
    </div>
  )
}

export default App
