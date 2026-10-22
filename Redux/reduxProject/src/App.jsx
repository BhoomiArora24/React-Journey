import React from 'react'
import { fetchPhotos } from './api/mediaApi'

const App = () => {
  function getPhotos(){
    fetchPhotos('cat')
  }
  return (
    <div>
      <button onClick={getPhotos}>Get Photos</button>
    </div>
  )
}

export default App
