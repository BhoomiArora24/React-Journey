const Card  = (props) => {
    
    // console.log(props);
    // console.log(props.age, props.user);

    return (
        <div>
            <div className='m-10 items-center flex-w'>
                <div className='w-80 border-2 border-solid p-2 text-center  border-2 bg-[#333]'>
                    <img className='h-30 w-20 rounded-full object-cover mx-auto' src={props.img}></img>
                    <h1>{props.user}, {props.age}</h1>
                    <p className='py-2 px-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button className='px-1 py-2 bg-white text-black border-none rounded-md'>View Profile</button>
                </div>
            </div>
        </div>
    )
}

export default Card;