import React from 'react'
import { useParams } from "react-router-dom";

const CorseDetail = () => {
    const params = useParams()//jo bhi route likha hoga vo console krega
    console.log(params);
  return (
    <div>
      <h1>CourseDetail Page</h1>
    </div>
  )
}

export default CorseDetail
