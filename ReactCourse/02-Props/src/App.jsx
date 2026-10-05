import React from 'react'
import Card from './components/card.jsx'

const App = () => {
  return (
    <div className="parent">
      <Card user='Navya' age={21} img='https://i.pinimg.com/736x/2e/34/f9/2e34f9942836c3a3482c9aa625d3ce86.jpg'/>
      {/* yha pe hmne props pass kiya h user jaise function me arguments param dete h same vhi scene h bs yha pe value pass hori h in form of jsx and jo data hme milega vo milega in the form of objects*/}
      <Card user='Nivi' age={21} img='https://i.pinimg.com/736x/42/f0/6d/42f06d45b65a709ca186397bf6e1c9db.jpg'/>
    </div>
  )
}

export default App

//data can only be flow from parent to child
