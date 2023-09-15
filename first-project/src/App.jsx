import './App.css'
import React from 'react'
import Header from './Header';

  
function App(){
return(
<div className='myApp'>
  <Header ></Header>
    <ul className='name'>
    <h1>Fun Facts about react</h1>
    <li>was first released in 2013</li>
    <li>was originally created by Jordan Walke</li>
    <li>has well over 100k stars on Github</li>
    <li>is maintained by Facebook</li>
    <li>Powers thousands of enterprise apps,including mobile apps</li>
    </ul>
  
</div>
)
}


export default App
