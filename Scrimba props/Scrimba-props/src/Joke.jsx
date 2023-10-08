import React from "react";


export default function Joke(props){

return(
<div>
    {props.setUp && <h1>{props.setUp}</h1> }
    <h2>{props.punchLine}</h2>

    </div>
)
}