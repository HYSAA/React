import './App.css'
import React from 'react'
import Header from './Header.jsx'
function Header(){
 return(
<header>
<nav>
<img src={reactLogo} width="200px" />
</nav>
</header>
  )
  }
  
function App(){
return(
<div>
  <Header ></Header>
    <ul>
    <h1>Fun Facts about react</h1>
    <li>was first released in 2013</li>
    <li>was originally created by Jordan Walke</li>
    <li>has well over 100k stars on Github</li>
    <li>is maintained by Facebook</li>
    <li>Powers thousands of enterprise apps,including mobile apps</li>
    </ul>
    <Practice></Practice>
    <footer>I miss u</footer>
</div>
)
}

function Practice(){
return(
<nav className="container">
            <div>Home</div>
            <div>Search</div>
            <div>Logout</div>
        </nav>
)
}

export default Practice
