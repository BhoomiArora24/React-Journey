import React, {useState} from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([])
  //through fetch
  // async function getData(){
  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

  //   const data = await response.json()

  //   console.log(data);
  // }

  //through axios
  const getData = async () => {
    const response = await axios.get('https://dummyjson.com/products');
    setData(response.data.products);
  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      {data.map(function(elem, idx){
        return (
          <h6  key={idx}> Hlo,{elem.title},{idx} </h6>
        )
      })}
    </div>
  )
}

export default App
