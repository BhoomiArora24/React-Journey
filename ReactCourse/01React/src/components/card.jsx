//components only helps ki sara load na ho sirf ek component hi load ho sirf card hi load ho jb card m change kiya jaye instead of full website

//props drilling -- ek component bnate h and fir usi component ko use krte h alag alag data k sath
function Card() {
    return (
        <div>
            <div className='bg-red-200 m-10 p-4 ' >
                <h1>Sarthak Sharma</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, suscipit!</p>
            </div>
        </div>
    )
}

export default Card