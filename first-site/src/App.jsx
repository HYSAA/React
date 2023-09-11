import React from 'react';
import './App.css';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Body from './Body.jsx'

function Page() {
  return (
    //added a div lol
    <div className='page'>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  )
}
export default Page;
