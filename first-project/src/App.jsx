import './App.css'
import reactLogo from "./assets/react-logo.png"
import React from 'react'

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
    <footer>I miss u</footer>
</div>
)
}

export default App



