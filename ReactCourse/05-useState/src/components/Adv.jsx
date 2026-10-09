import React, { useState } from 'react'

const Adv = () => {
    const [a, setA] = useState(0);
    const [num, setNum] = useState(0);
    const [users, setUsers] = useState({user:'Navya', age:21});

    const changeA = () => {
        setA(20);
        console.log(a);
        //console i8s still sayin 0 why??
        //setA(20); coz this works asynchronously therefore, it is not running line by line  
        //coz ui m update hone m thoda time lgta h and console ekdm run ho jata h isliye jb hm first time click krte h to intial value hi ati h a ki but jb dusri bar uodate hota h to updated ati h kyoki tb tk ui bhi update ho chuka hota h
    }

    //batch update
    const btnClick = () => {
        setNum(num+1);
        setNum(num+1);
        setNum(num+1);
        //All three use the same old value of num (0)So, all three request setNum(1).
        // Result: 1 — not 3.
        //to ye to sirf ek bar chlega rest functional update will work
        setNum(prev => (prev+1));
        setNum(prev => (prev+1));
        setNum(prev => (prev+1));
        // Functional updates: setNum(prev => prev + 1)
        // Here, prev receives the latest queued state value each time.
        // - First update: 0 → 1
        // - Second update: 1 → 2
        // - Third update: 2 → 3
        // Result: 3
    }

    const btnClicked = () => {
        console.log(users);
        //destructuring --
        const newNum = {...users};
        newNum.user = 'Nivi';
        setUsers(newNum);

        setUsers(prev => ({...prev, age:19}))//ageupdate hojaega
    }

    return (
        <div>
            <h1> Advance </h1>
            <h1>{a} <br /> <br />{users.user}, {users.age}  <br /> <br />{num}</h1>
            <button onClick={
                btnClick
            }>Click</button>
        </div>
    )
}

export default Adv
