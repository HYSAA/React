import logo from './logo.svg';
import './App.css';
import ReactLogo from './react-logo.png'

function Header(){
return(
  <header>
    <nav>
    <img src={ReactLogo} width="100px" />
    <ul classname="Menu">
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
    </nav>
  </header>
)
}

function Body() {
  return (
  <div>

   
  <h1>Reasons I'm excited to learn React</h1>
  <ul>
    <li>1.It's a popular library</li>
    <li>2.I'm more likely to get a job as a developer if I know React</li>
  </ul>

  </div>   
  );
}

function Footer(){
return(
  <small>© 2021 Ziroll development. All rights reserved.</small>
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
