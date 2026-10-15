import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar2 = () => {
    const navigate = useNavigate()
    //navigating to a different page
    //also allows to go to a different page

    // const btnClicked = () => {
    //   console.log('btnClicked');
    //   navigate('/')
    return (
        <div className='bg-cyan-600 items-center'>
            <button
                onClick={() => {
                    navigate('/')
                }}
                className='bg-yellow-400 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
                Return to HomePage
            </button>

            <button
                onClick={() => {
                    navigate(-1)//returns to the prev page
                }}
                className='bg-yellow-400 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
                Back
            </button>
            <button
                onClick={() => {
                    navigate(+1)//returns to the prev page
                }}
                className='bg-yellow-400 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
                Next
            </button>
        </div>
    )
}

export default Navbar2
