import './App.css'
import Contact from './Contact'
import One from './assets/1.jpg'
import Two from './assets/2.jpg'
import Three from './assets/3.jpg'
import Four from './assets/4.jpg'
function App() {

    return (
    
        <div className="contacts">
            <Contact
                image ={One}
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact
                image={Two}
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact
                image={Three}
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
       
            <Contact
                image={Four}
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    )
}

export default App
