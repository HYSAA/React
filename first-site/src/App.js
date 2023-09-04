 
import './App.css';
import reactLogo  from './react.png';
import React from 'react';
import  ReactDOM  from 'react-dom';

function navbar() {
  return (
    <div className='menu'>
    <ul>
      <img src={reactLogo} width={100} alt="react logo"/>
      <h1>Fun Facts about react</h1>
      <li>was first released in 2013</li>
      <li>was originally created by Jordan Walke</li>
      <li>has well over 100k stars on Github</li>
      <li>is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps,including mobile apps</li>
    </ul>
    </div>
  );
}

export default navbar