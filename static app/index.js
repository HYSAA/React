import ReactDOM from "react-dom/client"
import React from "react"
const page=(
    /**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */
   <div>
    <h1>My awesome website</h1>
    <h3>
        h3 paragraph
    </h3>
    <ol>
        <li>
            I miss u
        </li>
        <li>
            I love u
        </li>
        <li>
            I adore u
        </li>
    </ol>
   


   </div>


)

document.getElementById("root").append(page)
//  ReactDOM.render(
//     page,document.getElementById("root")
//  )
// ReactDOM.createRoot(document.getElementById("root")).render(page)

