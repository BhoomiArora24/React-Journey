import React from 'react'
import {Bookmark} from 'lucide-react';

const Card = (props) => {
  return (
    <div className="h-[330px] w-[280px] bg-[#fff]  rounded-2xl p-5 flex flex-col justify-between ">
            <div>
              <div className="flex items-center justify-between mb-[30px]">
              <img className="h-[40px] w-[40px] rounded-xl border-1 border-solid border-[#dadada] p-0.5" src={props.logo} alt="" />
              <button className= "flex items-center border-1 border-solid border-[#dadada] px-2 py-1 font-sm rounded-sm gap-1 bg-transparent text-[#b1b1b1]">Save <Bookmark size={12} /></button>
            </div>
    
            <div className= "">
              <h3 className="text-md font-medium">{props.company} <span className="text-xs font-normal text-[#8b8b8b]">{props.post}</span></h3>
              <h2 className="text-xl font-semibold">{props.role}</h2>
              <div className="flex gap-2 mt-2 ">
                <h4 className="text-sm bg-[#dadada] text-[#111] py-1 px-3 font-medium rounded-sm">{props.tag1}</h4>
                <h4 className="text-sm bg-[#dadada] text-[#111] py-1 px-3 font-medium rounded-sm">{props.tag2}</h4>
              </div>
            </div>
            </div>
    
            <div className="flex items-center justify-betweeen border-t border-1.5 border-solid border-[#b1b1b1] py-2 gap-8">
                <div>
                  <h3 classname="text-md">{props.pay}</h3>
                  <p className="text-sm">{props.location}</p>
                </div>
              <button className="bg-black text-white py-1 px-2 border-none rounded-sm">Apply Now</button>
            </div>
          </div>
  )
}

export default Card
