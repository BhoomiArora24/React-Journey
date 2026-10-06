import { Bookmark } from 'lucide-react';

const Card = (props) => {
    return (
        <div className='p-5'>
            <div className='h-70 w-60 bg-[#fff] rounded-xl p-3 flex flex-col'>
                <div className='flex justify-between'>
                    <img className='h-10 w-10 rounded-full border-1 border-[#7a7a7a] p-1' src={props.logo}></img>
                    <button className='flex items-center text-[#7a7a7a] border-[#cfcccc] border-1 px-1 rounded-sm' >
                        Save <Bookmark className='h-4' />
                    </button>
                </div>

                <div className='py-5 '>
                    <h3 className='font-medium text-md'>{props.name}<span className='font-light text-xs px-1'>{props.date}</span></h3>
                    <h2 className='font-medium text-lg'> {props.role}</h2>
                    <div className='flex gap-1'>
                        <h4 className='font-normal text-xs bg-[#cfcccc] p-1 rounded-sm'>{props.tag1}</h4>
                        <h4 className='font-normal text-xs bg-[#cfcccc] p-1 rounded-sm'>{props.tag2}</h4>
                    </div>
                </div>

                <div className='mt-auto mb-1'>
                    <div className='flex justify-between border-t-1 border-[#cfcccc] py-2'>
                        <div>
                            <h3 className='font-normal'>{props.pay}</h3>
                            <p className='text-xs font-normal text-[#cfcccc]'>{props.location}</p>
                        </div>
                        <button className='bg-black rounded-md text-white px-2'> Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;