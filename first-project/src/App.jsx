import './App.css'
import React from 'react'
import reactLogo from './assets/react-logo.png';

function Header(){
 return(
  // <div className='nav'></div>
<header className='container'>
<nav className='nav'>
<img src={reactLogo}  />
<div className='flex-item'>
<p>React Facts</p>
</div>
<div className="flex-right">
<p>React Course-Project 1</p>
</div>
</nav>
</header>
  )
  }
  
function App(){
return(
<div className='myApp'>
  <Header ></Header>
    <ul>
    <h1>Fun Facts about react</h1>
    <li>was first released in 2013</li>
    <li>was originally created by Jordan Walke</li>
    <li>has well over 100k stars on Github</li>
    <li>is maintained by Facebook</li>
    <li>Powers thousands of enterprise apps,including mobile apps</li>
    </ul>
    {/* <footer>I miss u too AJ</footer> */}
</div>
)
}


export default App
