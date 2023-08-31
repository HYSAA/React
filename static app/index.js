// Challenge: Create your own custom React component!
// Call it "MainContent", and have it return a simple
// h1 element that says "I'm learning React!"

// Afterward, render it below the Navbar (which
// you can do inside the ReactDOM.render call below)

const Navbar=() =>{
return
(
    <h1>Im learning react!</h1>
)
}

ReactDOM.render(
    <div><Navbar/></div>,document.getElementById("root")
)