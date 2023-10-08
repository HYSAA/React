import './App.css'
import Joke from './Joke'
/* Challenge:
One LAST time in this course, set up a React app from scratch
- Render an <App /> component
    - App should be in its own file
- App should render 4-5 <Joke /> components 
  (Joke component defined in its own file too)
    - Each Joke should receive a "setup" prop and a "punchline" prop
      and render those however you'd like
- Use your favorite 2-part jokes (setup & punchline), or check
  jokes.md file for some examples.

EXTRA CREDIT:
Some jokes are only a punchline with no setup:

E.g.: "It’s hard to explain puns to kleptomaniacs because 
they always take things literally."

If you don't pass in a "question" prop, how might you make it only 
show the punchline?
*/
function App() {


  return (
    <>
<Joke
setUp="what do you call "
punchLine=" I miss her"
/>

<Joke
setUp="WOW  "
punchLine=" stg19"/>
  


<Joke
setUp="I should call  "
punchLine=" I love u"/>
  


<Joke
setUp="gundam "
punchLine=" iori sei"/>
  



    </>
  )
}

export default App
