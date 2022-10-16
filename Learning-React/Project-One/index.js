import React from "react"
import ReactDOM from "react-dom"
const navbar = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById("root"))
//renders a JS like html with headers and such looks like html
//ReactDOM is a global variable
//Render "places" elements into a screen sort of like html;
//get elementbyid place it into the root location

//React allows for composable code, allows for coding and chiseling
//Bootstrap is a predetermined webpage of codes, react can turn it into custome components, more maintainable and flexible