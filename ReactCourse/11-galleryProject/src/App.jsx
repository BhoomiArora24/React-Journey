import React, { useState, useEffect } from 'react'
import axios from 'axios';

const App = () => {

  const [img, setImg] = useState([]);
  const [idx, setIdx] = useState(1);

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=15');
    // const responsee = await axios.get('https://picsum.photos/v2/list', {username: 'Navya', password:'jfg'});
    setImg(response.data);
  }

  useEffect(function(){
    getData();
  },[])

  let printImg = 'No user availaible'

  if (img.length > 0) {
    printImg = img.map(function (elem, idx) {
      return (
        <div key={idx}>
          <a href={elem.url} target='_blank'>
            <div className='h-40 w-44 m-2'>
              <img className='h-full rounded-xl' src={elem.download_url} />
              <h1 className='font-bold text-xl'>{elem.author}
              </h1>
            </div>
          </a>
        </div>
      )
    })
  }
  return (
    <div className='bg-black h-screen text-white'>
      <div className='flex flex-wrap gap-4 p-2'>
        {printImg}
      </div>

      <div className='flex justify-center items-center p-4 gap-6'>
        <button onClick={function(){
          if(idx > 1){
            setIdx(idx-1);
          }
        }} className='bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-95'>Prev</button>
        <button onClick={function(){
          setIdx(idx+1);
        }} className='bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-95'>Next</button>
      </div>
    </div>
  )
}

export default App
