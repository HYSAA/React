import React from 'react';
import './App.css';
import Header from './Header.js'
import Footer from './Footer.js'


function Body() {
  return (
  <div>
  <h1>Reasons I'm excited to learn React</h1>
  <ul className="Blist">
    <li>1.It's a popular library</li> 
    <li>2.I'm more likely to get a job as a developer if I know React</li>
  </ul>

  </div>   
  );
}



function Page(){
return(
  <div>
<Header></Header>
<Body> </Body>
<Footer></Footer>
</div>
)
}

export default Page;
