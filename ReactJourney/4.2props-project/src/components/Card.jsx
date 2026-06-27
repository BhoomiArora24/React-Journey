import React from 'react'
import {MoveRight} from 'lucide-react';

const Card = (props) => {
    console.log(props);
    return (
        <div className="bg-white p-2 flex flex-col rounded-xl h-[300px] w-[300px]">
            <div className={`${props.cardBg} rounded-xl p-4 justify-between`}>
                <h1 className="text-3xl font-semibold py-2">{props.prof}</h1>
                <p className="text-xs text-[#585959] ">{props.info}</p>
                <div className="flex gap-2 flex-wrap py-8">
                    <h4 className={ `${props.tagBg} py-1 px-3 rounded-2xl items-center text-center`}>{props.tag1}</h4>
                    <h4 className={ `${props.tagBg} py-1 px-3 rounded-2xl items-center text-center`}>{props.tag2}</h4>
                    <h4 className= { `${props.tagBg} py-1 px-3 rounded-2xl items-center text-center`}>{props.tag3}</h4>
                </div>
            </div>
            <div className="flex justify-between items center p-4">
                <h2 className=" font-medium text-md">Explore</h2>
                <MoveRight className=""/>
            </div>
        </div>
    )
}

export default Card
