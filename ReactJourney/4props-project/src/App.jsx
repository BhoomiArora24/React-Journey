import React from 'react'
import Card from './components/Card.jsx';

function App() {
  //1
  // const arr = [10,20,30,40]

  //3
  {/* let's know about for each forEach 
      forEach is basically for iterations
      map is for showing the result to return something */}
  // arr.forEach(function(elem){
  //       console.log(elem)
  //     })



  //4
  //Array of an objects=looks like JSON
  //when we send data from backend to frontend it comes in json format
  // const arr2 = [
  //   {
  //     user:'Navya',
  //     age: 21
  //   }, {
  //     user:'nivi',
  //     age:20
  //   }, {
  //     user:'Bhoomi',
  //     age: 22
  //   }
  // ];
  // arr2.forEach(function(elem){
  //   console.log(elem)
  // })

  //main
  const jobOpenings = [
    {
      brandLogo: "https://cdn.simpleicons.org/google",
      company: "Google",
      datePosted: "2 days ago",
      role: "Frontend Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$58/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://i.pinimg.com/736x/15/cf/7f/15cf7f65d56e8fcf16fa08e45ceae81d.jpg",
      company: "Microsoft",
      datePosted: "5 days ago",
      role: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$55/hr",
      location: "Bengaluru, India",
    },
    {
      brandLogo: "https://cdn.simpleicons.org/apple",
      company: "Apple",
      datePosted: "1 week ago",
      role: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$82/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://i.pinimg.com/736x/77/99/e4/7799e4fa43745c7193228791a424d389.jpg",
      company: "Amazon",
      datePosted: "3 days ago",
      role: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$52/hr",
      location: "Chennai, India",
    },
    {
      brandLogo: "https://cdn.simpleicons.org/meta",
      company: "Meta",
      datePosted: "2 weeks ago",
      role: "React Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$76/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://cdn.simpleicons.org/netflix",
      company: "Netflix",
      datePosted: "4 days ago",
      role: "UI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$88/hr",
      location: "Bengaluru, India",
    },
    {
      brandLogo: "https://cdn.simpleicons.org/nvidia",
      company: "NVIDIA",
      datePosted: "6 days ago",
      role: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$63/hr",
      location: "Pune, India",
    },
    {
      brandLogo: "https://i.pinimg.com/1200x/4d/3c/df/4d3cdf398e946991aa7a3c5c4960f06c.jpg",
      company: "Adobe",
      datePosted: "10 days ago",
      role: "JavaScript Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$57/hr",
      location: "Noida, India",
    },
    {
      brandLogo: "https://i.pinimg.com/1200x/dd/fd/12/ddfd129a047238762e5bfbaac9b8e81c.jpg",
      company: "Oracle",
      datePosted: "3 weeks ago",
      role: "Cloud Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://i.pinimg.com/1200x/cc/95/a3/cc95a38da8015373dc523740b17f6feb.jpg",
      company: "Salesforce",
      datePosted: "1 week ago",
      role: "MERN Stack Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$60/hr",
      location: "Gurugram, India",
    },
  ];


  return (
    <div className=" bg-[#111] p-10 flex gap-5 flex-wrap">
      {/* 2 */}
      {/* {arr.map(function(){
        return "10"
      })}
      showing 4 times 10 coz the length of array is 4 */}
      {/* {arr.map(function(elem){
        return <h1>{elem*2}</h1>
      })} */}
      {/* now it is printing all the elements od array  */}


      {/* 5 */}
      {/* {arr2.map(function(elem){
        console.log(elem.user)
      })} */}

      {/* 6 */}
      {/* {arr.map(function(elem){
        return <Card />
      })} */}

      {/* main */}
      {jobOpenings.map(function (elem) {
        return <Card company={elem.company}
          logo={elem.brandLogo}
          post={elem.datePosted}
          role={elem.role}
          tag1={elem.tag1}
          tag2={elem.tag2}
          pay={elem.pay}
          location={elem.location} />
      })}
    </div>
  )
}

export default App