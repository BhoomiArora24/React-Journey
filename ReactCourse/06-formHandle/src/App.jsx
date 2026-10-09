import React, {useState} from 'react'

const App = () => {
  const [title, setTittle] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form Submitted by', title);

    setTittle('')
  }

  //ab hme kuch type krna h input pe to m khud se nhi kr skti mujhe react ko bolna pdega -- which is a process called === two way binding
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input 
        type='text' 
        // value=''-- it is used whed when we set something permanently and is not allowed to change therefore we do this instead of giving a hard coded value to import PropTypes from 'prop-types'
        value={title}
        onChange={(e) => {
          setTittle(e.target.value);
        }}
        placeholder='Enter your name'/>
        <input type='submit'/>
      </form>
    </div>
  )
}

export default App
