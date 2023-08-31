// Challenge: Create your own custom React component!
// Call it "MainContent", and have it return a simple
// h1 element that says "I'm learning React!"

// Afterward, render it below the Navbar (which
// you can do inside the ReactDOM.render call below)



/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/

/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/
const page=(
    <nav>
        <h1>MY WEBSITE</h1>
        <ul className="pricing">Pricing</ul>
        <ul className="About">About</ul>
        <ul className="Contact">Contact</ul>

    </nav>
)
 ReactDOM.render(
    page,document.getElementById("root")
 )


// const Navbar=() =>{
// return(    
//     <div>
//     <h1>Im learning react!</h1>
//     </div>
// )
// }

ReactDOM.render(
    <div>
        <Navbar/>
    </div>,
    document.getElementById("root")
)