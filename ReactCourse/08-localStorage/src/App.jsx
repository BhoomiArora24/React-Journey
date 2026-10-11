import React from 'react'

const App = () => {
  localStorage.clear();
  localStorage.setItem('user', 'Navya');
  const user = localStorage.getItem('user');
  console.log(user);
  localStorage.removeItem('user');

  const heyy = {
    username : 'Navya',
    age : 21,
    city : 'Bhopal'
  }
  localStorage.setItem('hii',JSON.stringify(heyy));
  //local storage m hmesha value string ki form m hi jati h
  console.log(JSON.parse(localStorage.getItem('hii')));

  return (
    <div>
      
    </div>
  )
}

export default App
