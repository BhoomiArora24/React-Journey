import React from 'react'
import { Bookmark } from 'lucide-react';

const App = () => {
  return (
    <div className='h-screen bg-[#111] p-5'>
      <div className='h-70 w-60 bg-[#fff] rounded-md'>
        <div className='flex justify-between p-5'>
          <img className='h-10 w-10 rounded-full border-1 border-[#7a7a7a] p-1' src="https://i.pinimg.com/736x/b7/18/e4/b718e41616355ec689f5a55e8b3ca990.jpg"></img>
          <button className='flexs items-center gap-2' >
            Save <Bookmark className='h-4' />
          </button>
        </div>

        <div>
          <h3>Amazon <span>5 days ago</span></h3>
          <h2> Senior UI/Ux Designer</h2>
          <div>
            <h4>Part Time</h4>
            <h4>Senior</h4>
          </div>
        </div>

        <div>
          <div>
            <div>
              <h3>$120/hr</h3>
              <p>Mumbai, India</p>
            </div>
            <button> Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
