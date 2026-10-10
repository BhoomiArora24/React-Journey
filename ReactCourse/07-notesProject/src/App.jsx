import React, { useState } from 'react'
import {X} from 'lucide-react'

const App = () => {

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];//purane task lega

    copyTask.push({ title, details });//nya task push krega 
    setTask(copyTask);//setTask me bhejta h
    //console.log(copyTask);//ek step peeche chlega 
    //but kyu??
    //mera to ni chlra ye youtube wale ka chlra h idk whyyyy

    setTitle('');
    setDetails('');
  }

  const deleteNote = (idx) => {
    console.log('Note deleted')
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
    console.log(copyTask[idx]);
  }
  return (
    <div className='h-auto bg-black text-white '>
      <form
        onSubmit={submitHandler}
        className='flex items-start justify-between p-10'>
        <div className='flex w-full gap-4 items-start flex-col'>
          <input
            type='text'
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            placeholder='Enter Notes heading'
            className='w-full px-5 py-2 border-2 rounded'
          />

          <textarea
            placeholder='Enter Details'
            onChange={(e) => {
              setDetails(e.target.value);
            }}
            value={details}
            className='w-full px-5 py-2 border-2 rounded'
            type='text'
          />

          <button
            className='w-full bg-white text-black px-5 py-3 rounded'
            onClick={submitHandler}>
            Add Note
          </button>
        </div>

      </form>

      <div className='p-10'>
        <h1 className='text-xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap'>
          {task.map(function (elem, idx) {
            return (
              <div key={idx} className='p-5 m-2 h-32 w-32 rounded-2xl bg-white text-black '>
                <h2 onClick={() => {
                  deleteNote(idx)
                }}><X /></h2>
                <h3>{elem.title}</h3>
                <h3>{elem.details}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
