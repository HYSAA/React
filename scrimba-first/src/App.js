
import './App.css';
import ReactLogo from './react-logo.png'
import Header from './Header.js'


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

function Footer(){
return(
  <div className="footer">
  <small>© 2021 Ziroll development. All rights reserved.</small>
  </div>
)
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
