import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form Submitted');
  }

  //ab hme kuch type krna h input pe to m khud se nhi kr skti mujhe react ko bolna pdega -- which is a process called === two way binding
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type='text' placeholder='Enter your name'/>
        <input type='submit'/>
      </form>
    </div>
  )
}

export default App
