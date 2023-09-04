import './App.css'
import reactLogo from "./assets/react.svg"
/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

 */
function App(){
return(

<div>
  <header>
    <nav>
    <img src={reactLogo} width={100} alt="react logo"/>
    </nav>
  </header>
    <ul>
   
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



