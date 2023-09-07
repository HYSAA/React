// import './App.css'
// import React from 'react'
// import Header from './Header.jsx'
// function Header(){
//  return(
// <header>
// <nav>
// <img src={reactLogo} width="200px" />
// </nav>
// </header>
//   )
//   }
  
// function App(){
// return(
// <div>
//   <Header ></Header>
//     <ul>
//     <h1>Fun Facts about react</h1>
//     <li>was first released in 2013</li>
//     <li>was originally created by Jordan Walke</li>
//     <li>has well over 100k stars on Github</li>
//     <li>is maintained by Facebook</li>
//     <li>Powers thousands of enterprise apps,including mobile apps</li>
//     </ul>
//     <Practice></Practice>
//     <footer>I miss u</footer>
// </div>
// )
// }

// function Practice(){
// return(
// <nav className="container">
//             <div>Home</div>
//             <div>Search</div>
//             <div>Logout</div>
//         </nav>
// )
// }

// export default Practice

import React, { useState } from "react";


const App = () =>{

  const[firstNumber,setFirstNumber]=useState("")
  const[secondNumber,setSecondNumber]=useState("")
  let [sum,setSum]=useState("")
  
  const Addition= () =>{
  const a= parseInt(firstNumber);
  const b= parseInt(secondNumber);
  setSum(a+b);
  console.log(setSum)


  }

  return(
  <div className="Addition">
  <h1>Enter First Number</h1>
  <input
 type="number"
 placeholder="First Number"
 onChange={(event)=>setFirstNumber(event.target.value)}
  />
  <br/>

  <h2>Enter Second Number</h2>
  <input type="number" placeholder="Second Number" 
  onChange={(event)=>setSecondNumber(event.target.value)}/>
 

 <button onClick={Addition}>Add</button>
 <h2> Result is: {sum} </h2>


</div>
  )

}

export default App;