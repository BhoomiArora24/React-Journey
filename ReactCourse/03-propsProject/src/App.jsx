import React from 'react'
import Card from './components/card';
import jobs from './Utils/jobs';

const App = () => {
  return (
    <div className='bg-[#111] flex flex-wrap'>
      {jobs.map(function (data, idx) {
        return (
          <div key={idx}>
            {/* //its there just to give indexes */}
            <Card logo={data.brandLogo} name={data.companyName} date={data.datePosted} role={data.role} tag1={data.tag1} tag2={data.tag2} pay={data.pay} location={data.location} />//hr ek card ko unique key
          </div>
        )
      })}
    </div>
  )
}

export default App
