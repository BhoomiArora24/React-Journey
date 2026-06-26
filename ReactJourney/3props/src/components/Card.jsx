const Card = (props) => {
  console.log(props);
  return (
    <div className="w-80 bg-[#333] text-white rounded-md border-2 border-black p-6 flex flex-col items-center text-center">
      <img
        src={props.img}
        alt="Profile"
        className="h-20 w-20 object-cover rounded-full"
      />

      <h1 className="text-3xl font-bold mt-4">
        {props.user},{props.age}
      </h1>

      <p className="mt-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>

      <button className="mt-5 px-5 py-2 bg-white text-black rounded-md">
        View Profile
      </button>
    </div>
  );
};

export default Card;