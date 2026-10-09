import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form submitted')
  }
  return (
    <div className='h-screen bg-black text-white'>
      <form className='flex items-start justify-between p-10'>
        <div className='flex w-1/2 gap-4 items-start flex-col'>
          <input 
          type='text' 
          placeholder='Enter Notes heading' 
          className='w-full px-5 py-2 border-2 rounded'
        />

        <textarea 
          placeholder='Enter Details' 
          className='w-full px-5 py-2 border-2 rounded'
          type='text' 
        />

        <button
          className='w-full bg-white text-black px-5 py-3 rounded'
          onClick={submitHandler}>
            Add Note
        </button>
        </div>
        <img className='h-50' src='https://i.pinimg.com/1200x/94/c4/24/94c424ae564b43631d32568e143b8da1.jpg'></img>
      </form>

      <div className='flex flex-wrap px-'>
        <div className='h-32 rounded-2xl bg-white '></div>
      </div>
    </div>
  )
}

export default App
