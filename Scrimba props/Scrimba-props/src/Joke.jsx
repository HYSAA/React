import React from "react";


export default function Joke(props){
    console.log(typeof props.num)
return(
<div>

    <h1>{props.num} </h1>
    {props.setUp && <h1>{props.setUp}</h1> }
    <h2>{props.punchLine}</h2>

    </div>
)
}