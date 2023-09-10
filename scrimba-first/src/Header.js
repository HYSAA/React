import React from 'react';
import ReactLogo from './react-logo.png'

export default function Header(){
    return(
      <header>
        <nav className="nav">
        <img src={ReactLogo} className="img" alt="react" />
        <ul className="List">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
       
        </ul>
        </nav>
      </header>
    )
    }