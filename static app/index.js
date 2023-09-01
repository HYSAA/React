import ReactDOM from "react-dom/client"
import React from "react"
const page=(
    <nav>
        <h1>MY WEBSITE</h1>
        <ul className="pricing">Pricing</ul>
        <ul className="About">About</ul>
        <ul className="Contact">Contact</ul>
        <ul className="Age">Age</ul>
    </nav>
)
//  ReactDOM.render(
//     page,document.getElementById("root")
//  )
ReactDOM.createRoot(document.getElementById("root")).render(page)

